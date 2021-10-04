const execSync = require('child_process').execSync;
const cheerio = require('cheerio');
const https = require('https');
const fs = require('fs');
const path = require('path');
const csvStringify = require('csv-stringify');
const lliw = require('lliw');

const sqliteFile = path.join(__dirname, 'wikivgdb.sqlite');
const csvFile = (dir, name) => path.join(__dirname, 'dist', `${dir}/${name}.csv`);

let gameId = 0;
let gameTitleId = 0;
let gameReleaseId = 0;

const regionMap = {};
const developerGameMap = {};
const publisherGameMap = {};
const genreGameMap = {};
const modeGameMap = {};
const platformGameMap = {};
const contributorMap = {};
const credits = [];
const listUrls = [
	{
		id: 1,
		url: 'https://en.wikipedia.org/wiki/List_of_Nintendo_Entertainment_System_games',
		listPlatform: 'NES',
		cols: {
			title: 0,
			developers: [1],
			publishers: [2, 3],
			releaseNA: 4,
			releasePAL: 5,
		},
	},
	{
		id: 2,
		url: 'https://en.wikipedia.org/wiki/List_of_Sega_Genesis_games',
		listPlatform: 'Genesis',
		cols: {
			title: 0,
			developers: [1],
			publishers: [2],
			releaseJP: 3,
			releaseNA: 4,
			releasePAL: 5,
		},
	},
	{
		id: 3,
		url: 'https://en.wikipedia.org/wiki/List_of_Super_Nintendo_Entertainment_System_games',
		listPlatform: 'SNES',
		cols: {
			title: 0,
			developers: [1],
			publishers: [2],
			releaseJP: 3,
			releaseNA: 4,
			releasePAL: 5,
		},
	},
	{
		id: 4,
		url: 'https://en.wikipedia.org/wiki/List_of_Nintendo_64_games',
		listPlatform: 'Nintendo 64',
		cols: {
			title: 0,
			developers: [1],
			publishers: [2],
			releaseJP: 5,
			releaseNA: 6,
			releasePAL: 7,
		},
	},
	{
		id: 5,
		url: 'https://en.wikipedia.org/wiki/List_of_PlayStation_games_(A%E2%80%93L)',
		listPlatform: 'PlayStation_A-L',
		cols: {
			title: 0,
			developers: [1],
			publishers: [2],
			releaseJP: 3,
			releaseNA: 4,
			releasePAL: 5,
		},
	},
	{
		id: 6,
		url: 'https://en.wikipedia.org/wiki/List_of_PlayStation_games_(M%E2%80%93Z)',
		listPlatform: 'PlayStation_M-Z',
		cols: {
			title: 0,
			developers: [1],
			publishers: [2],
			releaseJP: 3,
			releaseNA: 4,
			releasePAL: 5,
		},
	},
];

const log = (...msg) => {
	msg.forEach((msg) => {
		const prefix = lliw.gray(new Date().toLocaleTimeString()) + ' ';
		if (typeof(msg) === 'string') {
			console.log(`${prefix} ${msg}`);
		} else {
			console.log(prefix.trim(), msg);
		}
	});
}

const getElapsed = (start) => lliw.green((Date.now() - start).toString() + 'ms');

const removeDuplicates = (arr) => {
	const temp = arr.reduce((obj, item) => {
		obj[item] = 1;
		return obj;
	}, {});
	return Object.keys(temp).sort();
}

const promiseMe = (fn) => {
	return new Promise((resolve, reject) => {
		fn((err, result) => {
			if (err) {
				reject(err);
				return;
			}

			resolve(result);
		});
	});
}

const fetchHtml = async (url, filename) => {
	filename = path.join(__dirname, 'html', filename);
	try {
		await promiseMe(callback => fs.access(filename, callback));
	} catch {
		await promiseMe(callback => fs.mkdir(path.dirname(filename), { recursive: true }, callback));

		log(` downloading ${lliw.blue(url)} to ${lliw.yellow(filename)}...`);
		await new Promise((resolve, reject) => {
			const req = https.request(url, {
				method: 'GET',
			});
			req.on('response', (res) => {
				if (res.statusCode !== 200) {
					log(lliw.red(`invalid status from URL "${url}": ${res.statusCode}`));
					reject(new Error(`invalid status for ${url}: ${res.statusCode}`));
					return;
				}

				const start = Date.now();

				res
					.on('error', (err) => {
						log(lliw.red(`failed to download from ${lliw.blue(url)}: ${err.message}`));
						reject(err);
					})
					.pipe(fs.createWriteStream(filename))
					.on('finish', () => {
						log(` finished downloading ${lliw.blue(url)} in ${getElapsed(start)}`);
						resolve();
					});
			});

			req.end();
		});
	}

	return await promiseMe(callback => fs.readFile(filename, {encoding: 'utf8'}, callback));
};

const promiseLimit = async (limit, arr) => {
	const process = async () => {
		const next = arr.shift();
		if (!next) {
			return;
		}

		const runNext = () => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					process().then(resolve).catch(reject);
				}, 1);
			})
		};

		return next().finally(runNext);
	};

	const wait = [];

	for (let i = 0; i < limit; i++) {
		wait.push(process());
	}

	await Promise.all(wait);
};

const clean = ($container, $) => {
	$container.find('*').each((i, item) => {
		item.attribs = {};
		const $item = $(item);
		if ($item.is('b') || $item.is('abbr') || $item.is('sup') || $item.is('sub') || $item.is('style')) {
			$item.remove();
		} else if ($item.is('a')) {
			const text = $item.text().trim();
			const ignore = {
				JP: 1,
				NA: 1,
				SA: 1,
				EU: 1,
				DE: 1,
				WW: 1,
			};

			if (ignore[text]) {
				$item.remove();
			}
		}
	});
};

const flatten = (arr, item) => arr.concat(item);

const monthMap = {
	January: 1,
	February: 2,
	March: 3,
	April: 4,
	May: 5,
	June: 6,
	July: 7,
	August: 8,
	September: 9,
	October: 10,
	November: 11,
	December: 12,
};
const monthRegex = new RegExp('(' + Object.keys(monthMap).join('|') + ')', 'i');

const padZeroL = (x, len) => '0'.repeat(Math.max(0, len - x.toString().length)) + x.toString();

const parseReleaseItem = (gameName, item, originalPlatforms = []) => {
	const prefix = `[${gameName}]`;

	let match;
	let regions = [];
	let dateText;
	let platforms = originalPlatforms.concat([]);
	item = item.trim();

	// console.log(item);

	if (match = /^(.+?):\s*(.+?):\s*(.+)/.exec(item)) {
		// $platform: $regionCode: $monthName $day, $year
		platforms.push(match[1]);

		regions = match[2].split('/').map(r => r.trim()).filter(Boolean);
		dateText = match[3];
	} else if (match = /^(.+?):\s*(.+?)\s+\((.+)\)$/.exec(item)) {
		// $regionCode: $monthName $day, $year ($platform1, $platform2...)
		regions = match[1].split('/').map(r => r.trim()).filter(Boolean);
		dateText = match[2];
		if (!platforms.length) {
			// if there are no platforms, assume stuff in parentheses is another platform
			// otherwise it's probably a publisher (e.g. Mario Bros.)
			platforms = platforms.concat(match[3].split(',').map(x => x.trim()));
		}
	} else if (match = /^(.+?):\s*(.+)/.exec(item)) {
		// $regionCode: $monthName $day, $year
		// OR
		// $date: $platform1, $platform2, ...
		regions = match[1].split('/').map(r => r.trim()).filter(Boolean);

		// does it look like a date? does it have a month or a year?
		if (regions.length === 1 && (monthRegex.test(regions[0]) || /^\d{4}$/.test(regions[0]))) {
			dateText = match[1];
			platforms = platforms.concat(match[2].split(',').map(x => x.trim()));
			regions = [];
		} else {
			// more
			dateText = match[2];
		}
	} else if (match = /^(.+)\((.+)\)$/.exec(item)) {
		// $monthName $day, $year ($platform)
		platforms = platforms.concat(match[2].split(',').map(x => x.trim()));
		dateText = match[1];
	} else {
		// assume it's just a date
		if (monthRegex.test(item) || /^\d{4}$/.test(item)) {
			dateText = item;
		} else {
			let firstYear = item.split(',')[0]; // handle multiple years, e.g. "1989,1991"
			firstYear = firstYear.split(';')[0]; // handle relative age, e.g. "1990; 31 years ago"
			if (/^\d{4}$/.test(firstYear)) {
				dateText = firstYear;
			} else {
				log(`${prefix} ${lliw.magenta(`no release match for text "${lliw.bold(item)}"`)}`);
				return null;
			}
		}
	}

	const dateParts = dateText
		.replace(/\s/g, ' ') // convert all whitespace to just spaces
		.replace(/\(.+?\)$/g, ' ') // remove other annotations, e.g. "(beta)"
		.split(' ')
		.map(txt => txt.replace(/[,\s]/g, '').trim())
		.filter(Boolean);

	let month = monthMap[dateParts[0]];
	let year = dateParts[dateParts.length - 1];
	if (!month) {
		month = 'xx';
	}

	if (!/^\d{4}$/.test(year)) {
		year = 'xxxx';
	}

	let day = dateParts.length === 3 ? dateParts[1] : 'xx';

	if (monthMap[day]) {
		// non-American dates, e.g. 16 April 1990 instead of April 16, 1990
		// Ikari Warriors II was like this
		month = monthMap[day];
		day = dateParts[0];
	}

	if (day !== 'xx' && !/^\d+$/.test(day)) {
		day = 'xx';
	}

	const date = year === 'xxxx' ?
		null :
		[year, padZeroL(month, 2), padZeroL(day, 2)].join('-');

	if (!date) {
		return null;
	}

	if (regions.length) {
		regions = regions
			.map((region) => {
				switch (region.toLowerCase()) {
					case 'japan':
					case 'jpn':
						return 'JP';
					case 'iigs':
					case 'nes':
					case 'switch':
					case 'genesis':
						platforms.push(region);
						return null;
					default:
						return region;
				}
			})
			.filter(Boolean);
	}

	// clean platforms
	if (platforms.length) {
		platforms = platforms.map(normalizePlatform).reduce(flatten, []);
	}

	return {
		platforms: removeDuplicates(platforms),
		regions: removeDuplicates(regions),
		date,
	};
};

const extractReleaseData = ($, $infoboxData, gameName) => {
	const clean = ($el) => {
		$el.find('*').each((i, el) => {
			const $el = $(el);
			if (/display:\s*none/i.test($el.attr('style'))) {
				$el.remove();
			} else if ($el.is('sup')) {
				$el.remove();
			}
		});
	};

	clean($infoboxData);

	let platformElements = $();

	// "Golf" has both collapsible content and normal <b> stuff, so this can no longer be an else..if
	// or we will miss releases.
	if ($infoboxData.has('.mw-collapsible-content').length) {
		platformElements = $infoboxData.find('.mw-collapsible-content li b').toArray();
		$infoboxData.find('.mx-collapsible-content').remove();
	}

	if ($infoboxData.has('b').length) {
		platformElements = $infoboxData.find('b').toArray();
	}

	const releases = [];

	const parsePlainlist = ($list, platforms, depth = 0) => {
		$list.find('> ul > li').toArray().forEach((li) => {
			const $li = $(li);

			if ($li.has('> .plainlist').length) {
				$li.find('> .plainlist').toArray().forEach((list) => {
					parsePlainlist($(list), platforms, depth + 1);
				});
			} else {
				const text = $li.text().replace(/\[\d]/g, '').trim();
				const release = parseReleaseItem(gameName, text, platforms);
				if (release) {
					releases.push(release);
				}
			}
		});
	};

	const defaultParsing = () => {
		$infoboxData
			.toArray()
			.map((el) => {
				return ($(el).html() || '')
					.split('<br>')
					.map(html => $('<div>' + (html || '') + '</div>').text().trim())
					.map(item => item.split('\n'))
					.reduce(flatten, [])
			})
			.reduce(flatten, [])
			.forEach((item) => {
				const release = parseReleaseItem(gameName, item);
				if (release) {
					releases.push(release);
				}
			});
	};

	if (!platformElements.length) {
		if ($infoboxData.has('> .plainlist').length) {
			$infoboxData.find('> .plainlist').toArray().forEach((list) => {
				parsePlainlist($(list));
			});
		} else {
			defaultParsing();
		}
	} else {
		let failed = 0;
		platformElements.forEach((platformEl) => {
			let $el = $(platformEl);
			if ($el.text() === 'Mega Man') {
				// ugh
				return;
			}

			const platforms = $el.text().split(',').map(x => x.trim()).filter(Boolean);
			if ($el.parent().is('i')) {
				$el = $el.parent();
			}

			// sometimes nested like <i><b>$platform</b></i>, i.e. Karate Champ
			const $list = $el.nextUntil('b,i', '.plainlist');

			if ($list.length) {
				const el = $el.get(0);
				if (el.nextSibling && el.nextSibling.type === 'text' && platforms.length) {
					const index = platforms.length - 1;
					platforms[index] += el.nextSibling.nodeValue;
					platforms[index] = platforms[index].trim();
				}
				// some things have multiple lists, e.g. AD&D: Heroes of the Lance
				$list.each((i, list) => {
					parsePlainlist($(list), platforms);
				});
			} else {
				// log('no .plainlist');
				const $parentLi = $el.parents('li').first();

				//this check is necessary for Jack Nicklaus'...
				const hasPlainlistSiblings = $el.siblings('.plainlist').length;

				if (!hasPlainlistSiblings && $parentLi.length) {
					let $list;
					if ($parentLi.has('> .plainlist').length) {
						// sometimes there's a plainlist next to the platform, instead of in the next <li>
						// e.g. Punch-Out!!
						$list = $parentLi.find('> .plainlist').first();
					} else {
						// the next <li> is the desideratum
						$list = $parentLi.nextAll('li').first().find('> .plainlist');
					}

					if ($list.length) {
						parsePlainlist($list, platforms);
					} else {
						failed++;
					}
				} else {
					// Pipe Dream/Ghosts 'n Goblins falls into this case
					// the text after the next <br> until the next non-text node is the stuff we want
					let next = $el.next('br').get(0);
					if (!next) {
						failed++;
					} else {
						let item = '';
						next = next.nextSibling;
						while (next) {
							if (next.type === 'tag') {
								if (next.name === 'a') {
									// Ikari Warriors II falls in here, basically like:
									// <b>$platform</b><br><a>$date</a><br><b>$nextPlatform</b>...
									item += $(next).text();
								} else {
									break;
								}
							} else if (next.type === 'text') {
								item += next.nodeValue;
							} else {
								break;
							}

							next = next.nextSibling;
						}

						const release = parseReleaseItem(gameName, item, platforms);
						if (release) {
							releases.push(release);
						} else {
							// Pirates! will fall in here
							failed++;
						}
					}
				}
			}
		});

		if (failed === platformElements.length) {
			defaultParsing();
		} else if (failed !== 0) {
			log(lliw.magenta(`[${gameName}] unable to parse some releases`));
		}
	}

	return releases.sort(sortReleases);
};

const sortArray = (a, b, alternative) => {
	if (!a.length) {
		return -1;
	}
	if (!b.length) {
		return 1;
	}

	const result = a[0].localeCompare(b[0]);
	if (alternative && !result) {
		return alternative();
	}

	return result;
};

// sort by date, platforms[0], regions[0]
const sortReleases = (a, b) => {
	if (a.date === null) {
		return -1;
	}
	if (b.date === null) {
		return 1;
	}

	const res = a.date.localeCompare(b.date);

	if (res === 0) {
		return sortArray(a.platforms, b.platforms, () => sortArray(a.regions, b.regions));
	}

	return res;
};

const removeAll = (haystack, needle) => {
	let index;
	let count = 0;
	while ((index = haystack.indexOf(needle)) !== -1) {
		haystack.splice(index, 1);
		count++;
	}

	return count;
};

const mergeAndRemove = (haystack, normalized, ...temp) => {
	let found = false;
	(temp || []).forEach((item) => {
		found = (removeAll(haystack, item) > 0) || found;
	});

	if (found && haystack.indexOf(normalized) === -1) {
		haystack.push(normalized);
	}
};

const addIfMatches = (haystack, collection, itemsToAdd, ...needles) => {
	for (const regex of needles) {
		if (haystack.some(item => regex.test(item))) {
			for (const newItem of itemsToAdd) {
				if (collection.indexOf(newItem) !== -1) {
					continue;
				}
				collection.push(newItem);
			}
			return;
		}
	}
};

const combine = (haystack, delimiter, ...temp) => {
	if (!temp.length) {
		return;
	}

	let containsAll = true;
	for (const comb of temp) {
		containsAll = containsAll && haystack.indexOf(comb) !== -1;
		if (!containsAll) {
			return;
		}
	}

	for (const comb of temp) {
		removeAll(haystack, comb);
	}

	haystack.push(temp.join(delimiter));
};

const uncombine = (haystack, delimiter, name) => {
	if (!name) {
		return;
	}

	const index = haystack.indexOf(name);
	if (index !== -1) {
		haystack.splice(index, 1);
		haystack.push(...name.split(delimiter).map(item => item.trim()));
	}
};

const normalizePlatform = (platformName) => {
	// remove zero-width spaces (Ninja Gaiden II)
	platformName = platformName.replace(/\u200B/g, '');

	if (/^commodore/i.test(platformName)) {
		platformName = platformName.replace(/\s+\/\s+/, '/');
	}

	platformName = platformName.replace(/\s+versions?$/i, '');

	const match = /\((.+?)\)$/.exec(platformName);
	if (match) {
		switch (match[1].toLowerCase()) {
			case 'virtual console':
				platformName = platformName.replace(/\s\(.+?\)$/, ' Virtual Console');
				break;
			case 'arcade':
				// handle stuff like "Vs. Tennis (arcade)"
				// Baseball and Tennis falls in here
				platformName = 'Arcade';
				break;
			case 'playchoice-10':
				platformName = 'PlayChoice-10';
				break;
			default:
				platformName = platformName.replace(/\(.+?\)$/, '');
				break;
		}
	} else {
		platformName = platformName.replace(/\(.+?\)$/, '');
	}

	platformName = platformName.replace(/:+$/, '');

	const platforms = platformName
		.split(' and ')
		.map(x => {
			const platform = x.trim();
			if (platform.toLowerCase() === 'game & watch') {
				// the only platform with an "&" in the name
				return [ platform ];
			}

			return platform.split('&').map(x => x.trim());
		})
		.reduce(flatten, []);

	const getPlatformNames = (name) => {
		switch (name.toLowerCase()) {
			case 'thomson mo6':
			case 'thomson to8':
			case 'thomson to9':
				return 'Thomson';

			case '2600':
				return 'Atari 2600';

			case 'bbc':
				return 'BBC Micro';

			case 'st':
				return 'Atari ST';
			case 'amiga/atari st':
				return [ 'Amiga', 'Atari ST' ];

			case 'android & ios':
				return [ 'Android', 'iOS' ];

			case 'family computer disk system':
			case 'fds':
				return 'Famicom Disk System';
			case 'famicom':
			case 'family computer':
				return 'Famicom';
			case 'famicom/nes':
			case 'famicom / nes':
			case 'famicom / nintendo entertainment system':
			case 'nes/famicom':
			case 'family computer/nes':
			case 'nes/family computer':
				return ['Famicom', 'NES'];
			case 'nintendo entertainment system':
			case 'nesgold': // garbage from Pirates!
				return 'NES';
			case 'fds/nes':
				return [ 'Famicom Disk System', 'NES' ];

			case 'nintendo wii':
				return 'Wii';
			case 'nintendo wii u':
				return 'Wii U';

			case 'cd32':
				return 'Amiga CD32';
			case '3do interactive multiplayer':
				return '3DO';

			case 'amiga / atari st':
				return [ 'Amiga', 'Atari ST' ];
			case 'commodore 64/apple ii':
			case 'apple ii / c64':
				return [ 'Commodore 64', 'Apple II' ];

			case 'amstrad':
			case 'cpc':
				return 'Amstrad CPC';

			case 'iigs':
				return 'Apple IIGS';

			case 'computers':
			case 'computer':
			case 'home computers':
				return 'PC';
			case 'pc/ms-dos':
				return [ 'PC', 'MS-DOS' ];

			case 'pc-98':
			case 'pc-9800':
			case '9801':
			case 'nec pc-98':
			case 'nec pc-9800':
			case 'nec pc-9801':
				return 'PC-9801';
			case 'pc-88':
			case 'nec pc-88':
			case 'nec pc-8801mkii sr':
			case 'nec pc-8801 mkii':
			case 'pc-8801 mkii':
			case 'pc-8800 series':
			case 'nec pc-8801':
				return 'PC-8801';
			case 'nec pc-6001 mkii':
			case 'nec pc-6001':
				return 'PC-6001';
			case 'pc-88/98':
				return ['PC-8801', 'PC-9801'];
			case 'pc-66':
				return 'PC-6601';

			case 'turbografx-16/pc engine':
			case 'pc engine':
			case 'turbografx-16':
				return 'TurboGrafx-16';
			case 'pc engine cd':
			case 'pc engine super cd-rom²':
			case 'pc-engine super cd-rom²':
			case 'super cd-rom²':
			case 'turbografx-cd':
				return 'TurboGrafx-CD';

			case 'plus/4':
				return 'Commodore Plus/4';

			case 'x1':
				return 'Sharp X1';
			case 'x68000':
				return 'Sharp X68000';

			case 'arcade':
			case 'arcade cabinet':
				return 'Arcade';

			case 'philips cd-i':
				return 'CD-i';
			case 'arcade game':
				return 'Arcade';
			case 'commodore amiga':
				return 'Amiga';
			case 'archimedes':
				return 'Acorn Archimedes';
			case 'atari 8-bit family':
				return 'Atari 8-bit';
			case 'java platform, micro edition':
				return 'J2ME';
			case 'blackberry os':
				return 'BlackBerry';
			case 'c128':
				return 'Commodore 128';
			case 'c64':
				return 'Commodore 64';
			case 'commodore 64/16':
				return ['Commodore 64', 'Commodore 16'];
			case 'commodore 64/128':
				return ['Commodore 64', 'Commodore 128'];
			case 'epoch super cassette vision':
				return 'Super Cassette Vision';

			case 'fujitsu fm-7':
				return 'FM-7';
			case 'gb':
				return 'Game Boy';
			case 'ibm personal computer':
			case 'ibm pc compatible':
				return 'IBM PC';
			case 'ios':
			case 'ios devices':
				return 'iOS';

			case 'gba':
				return 'Game Boy Advance';
			case 'gbc':
				return 'Game Boy Color';

			case 'mac':
			case 'apple macintosh':
			case 'macintosh':
			case 'classic mac os':
				return 'Mac OS';

			case 'microsoft windows':
				return 'Windows';

			case 'genesis/mega drive':
			case 'mega drive/genesis':
			case 'sega mega drive/genesis':
			case 'sega genesis/mega drive':
				return [ 'Mega Drive', 'Genesis' ];
			case 'sega genesis':
				return 'Genesis';
			case 'sega game gear':
				return 'Game Gear';
			case 'sega master system':
				return 'Master System';
			case 'sega mega drive':
				return 'Mega Drive';
			case 'sega saturn':
				return 'Saturn';
			case 'sega platforms':
				return [ 'Game Gear', 'Genesis', 'Mega Drive' ];

			case 'game boy/nes':
			case 'nes/game boy':
				return [ 'Game Boy', 'NES' ];
			case 'super nintendo entertainment system':
			case 'super nes':
				return 'SNES';
			case 'super famicom/snes':
			case 'snes/super famicom':
				return [ 'Super Famicom', 'SNES' ];
			case '3ds':
				return 'Nintendo 3DS';

			case 'switch':
			case 'nintendo switch online':
				return 'Nintendo Switch';

			case 'ti-99/4a':
				return 'TI-99/4A';

			case 'trs-80 coco':
			case 'tandy color computer 3':
			case 'coco':
				return 'TRS-80 Color Computer';


			case 'mobile':
			case 'mobile phone':
			case 'mobile phones':
				return 'Mobile phone';

			case 'sam coupé':
				return 'SAM Coupé';

			case 'sinclair zx spectrum':
			case 'zx':
			case 'spectrum':
				return 'ZX Spectrum';

			case 'windows 3':
			case 'windows 3.x':
			case 'windows 3.1x':
			case 'windows 95':
				return 'Windows';

			case 'e-reader':
				return 'Nintendo e-Reader';
			case 'vs. system':
				return 'Nintendo VS. System';

			case 'ipod':
			case 'ipod touch':
			case 'iphone/ipod touch':
				return 'iPod Touch';

			case 'xbla':
			case 'xbla via game room':
				return 'Xbox Live Arcade';

			case 'list':
			case 'list of platforms':
			case 'platforms':
			case 'other platforms':
			case 'ports':
			case 'other ports':
			case 'other versions':
			case 'various':
			case 'standalone tabletop':
			case 'tv game':
			case 'handheld tiger games':
			case 'original':
			case 'via mega man legacy collection':
			case 'lcd game':
			case 'us':
			case 'hd-2d remake': // dragon warrior iii
			case 'gold': // punch-out!!
			case 'mike tyson\'s punch-out!!': // punch-out!!
			case 'punch-out!!': // punch-out!!
				return null;


			default:
				return name;
		}
	};

	return platforms
		.map(platformName => platformName.replace(/\s/g, ' ').trim())
		.map(getPlatformNames)
		.filter(Boolean)
		.reduce((arr, item) => {
			if (Array.isArray(item)) {
				return arr.concat(item);
			}

			arr.push(item);
			return arr;
		}, []);
};

const processContainerMarkup = ($, $container) => {
	clean($container, $);

	let splitter = '<br>';
	if (!$container.has('br').length) {
		splitter = ',';
	}

	return ($container.html() || '')
		.split(splitter)

		.map(html => $('<div>' + (html || '') + '</div>').text().trim())

		.map(item => item.split('\n'))
		.reduce(flatten, [])

		.map(item => item.replace(/^:\s*/, ''))
		.map(item => item.replace(/^[A-Z/]+?:\s*/, ''))
		.map(item => item.replace(/\[[0-9]+?]/g, ''))
		.map(item => item.replace(/\[[a-z]]/g, ''))
		.map(item => item.replace(/\[citation needed]/g, ''))

		.filter(Boolean)

		.map(item => item.split(',').map(x => x.trim()))
		.reduce((arr, item) => arr.concat(item), [])

		.map(item => item.split(':').map(x => x.trim()))
		.reduce(flatten, [])

		.map(item => item.replace(/\/+$/g, ''))
		.map(item => item.replace(/^\(.+?\)/, ''))
		.map(item => item.replace(/^[^(].+?\)[\s\S]+/, ''))

		.filter(item => !/^possibly\s+/i.test(item)) // e.g. "Possibly Bothtec or Pixel" from The Uncanny X-Men
		.filter(item => !item.endsWith(':'))
		.filter(item => !/^\(.+?\)$/.test(item))
		.filter(item => !/^\[.+?]$/.test(item));
};

const normalizeDeveloperOrPublisher = (items) => {
	[
		'Atari',
		'Bandai America',
		'Data East USA',
		'FCI',
		'Hi-Tech Expressions',
		'Human Entertainment',
		'Imagineering',
		'ICOM Simulations',
		'Mindscape',
		'Softie',
		'Strategic Simulations',
	].forEach(name => combine(items, ', ', name, 'Inc.'));
	['Beam Software Pty.', 'ITL Co.', 'SIMS Co.', 'G-mode Co.'].forEach(name => combine(items, ', ', name, 'Ltd.'));

	uncombine(items, '&', 'Tamtex & Tose');
	uncombine(items, ' and ', 'Williams and Midway');
	uncombine(items, '/', 'Data East/Sakata SAS');
	uncombine(items, '/', 'Data East/SAS Sakata');
	uncombine(items, '/', 'Red Company/Atlus');
	uncombine(items, '/', 'ISCO/Opera House');
	uncombine(items, '/', 'Marionette/SRS');
	uncombine(items, '/', 'Hudson Soft/Electro Brain');
	uncombine(items, '/', 'Konami/Sega');
	uncombine(items, ' / ', 'Meldac / Liveplanning');
	uncombine(items, '/', 'Retro-Bit/Limited Run Games');

	mergeAndRemove(items, 'Acclaim Entertainment', 'Acclaim', 'Acclaim Japan');
	mergeAndRemove(items, 'Advance Communication Company', 'Advance Communication Co.');
	mergeAndRemove(items, 'ASCII Corporation', 'ASCII', 'ASCII Entertainment');
	mergeAndRemove(items, 'AI', 'A.I Company Ltd.');
	mergeAndRemove(items, 'Aicom', 'Aicom Corporation');
	mergeAndRemove(items, 'Arc Developments', 'Arc');
	mergeAndRemove(items, 'Asmik Ace', 'Asmik', 'Asmik Corporation of America');
	mergeAndRemove(items, 'Atari Corporation', 'Atari Corp.');
	mergeAndRemove(items, 'Atari SA', 'Infogrames', 'Infogrames Entertainment');
	mergeAndRemove(items, 'Bandai', 'Bandai America, Inc.');
	mergeAndRemove(items, 'Bandai Namco Entertainment', 'Bandai Namco Games');
	mergeAndRemove(items, 'Beam Software', 'Beam Software Pty., Ltd.', 'Laser Beam', 'Laser Beam Entertainment');
	mergeAndRemove(items, 'Broderbund', 'Brøderbund');
	mergeAndRemove(items, 'Bullet-Proof Software', 'Bullet Proof Software');
	mergeAndRemove(items, 'Culture Brain', 'Culture Brain USA');
	mergeAndRemove(items, 'Data East', 'Data East USA, Inc.', 'Data East USA');
	mergeAndRemove(items, 'Data East/Sakata SAS', 'Data East/SAS Sakata');
	mergeAndRemove(items, 'Erbe Software', 'Erbe Software S.A.');
	mergeAndRemove(items, 'Eurocom', 'Eurocom Entertainment Software');
	mergeAndRemove(items, 'FCI', 'FCI, Inc.');
	mergeAndRemove(items, 'G-Mode', 'G-mode Co., Ltd.');
	mergeAndRemove(items, 'Gray Matter', 'Gray Matter Inc.');
	mergeAndRemove(items, 'Gremlin Interactive', 'Gremlin Graphics');
	mergeAndRemove(items, 'HAL Laboratory', 'HAL America', 'HAL America Inc.');
	mergeAndRemove(items, 'Hi Tech Expressions', 'Hi-Tech Expressions, Inc.', 'Hi-Tech Expressions');
	mergeAndRemove(items, 'Human Entertainment', 'Human Entertainment, Inc.');
	mergeAndRemove(items, 'ICOM Simulations, Inc.', 'ICOM Simulations');
	mergeAndRemove(items, 'Imagine Software', 'Imagine Studios');
	mergeAndRemove(items, 'Imagineering', 'Imagineering Inc.', 'Imagineering, Inc.');
	mergeAndRemove(items, 'Interplay Entertainment', 'Interplay', 'Interplay Productions');
	mergeAndRemove(items, 'Jaleco', 'Jaleco Entertainment');
	mergeAndRemove(items, 'JVC', 'JVC Musical Industries', 'Victor', 'Victor Entertainment', 'Victor Musical Industries');
	mergeAndRemove(items, 'Kemco * Seika', 'Kemco-Seika');
	mergeAndRemove(items, 'Konami', 'Konami of Europe');
	mergeAndRemove(items, 'Majesco Entertainment', 'Majesco Sales');
	mergeAndRemove(items, 'Midway Games', 'Bally Midway', 'Bally', 'Midway', 'Bally/Midway', 'Midway Manufacturing');
	mergeAndRemove(items, 'Milton Bradley Company', 'Milton Bradley');
	mergeAndRemove(items, 'Mindscape', 'Mindscape Inc.', 'Mindscape, Inc.');
	mergeAndRemove(items, 'Motivetime', 'MotiveTime', 'Motivetime Ltd.');
	mergeAndRemove(items, 'Namco', 'Namcot');
	mergeAndRemove(items, 'Nexoft Corporation', 'Nexoft');
	mergeAndRemove(items, 'Nintendo R&D1', 'Nintendo Research & Development 1');
	mergeAndRemove(items, 'Nintendo R&D2', 'Nintendo Research & Development 2');
	mergeAndRemove(items, 'Ocean Software', 'Ocean', 'Ocean of America');
	mergeAndRemove(items, 'Palcom', 'Palcom Software');
	mergeAndRemove(items, 'Pony Canyon', 'Pony Inc.', 'Ponyca');
	mergeAndRemove(items, 'Rare', 'Rare Ltd.');
	mergeAndRemove(items, 'Rocket Science Production', 'Rocket Science Productions');
	mergeAndRemove(items, 'Sakata SAS', 'SAS Sakata');
	mergeAndRemove(items, 'Sammy Corporation', 'Sammy USA', 'Sammy', 'American Sammy');
	mergeAndRemove(items, 'Sega', 'Sega of America', 'Sega Europe');
	mergeAndRemove(items, 'SETA Corporation', 'SETA', 'Seta', 'Seta Corporation');
	mergeAndRemove(items, 'Sharp Corporation', 'Sharp');
	mergeAndRemove(items, 'Sony Imagesoft', 'Sony Electronic Publishing');
	mergeAndRemove(items, 'Special FX Ltd.', 'Special FX');
	mergeAndRemove(items, 'Strategic Simulations', 'Strategic Simulations, Inc.');
	mergeAndRemove(items, 'Sunsoft', 'Sun Corporation of America');
	mergeAndRemove(items, 'Taito', 'Taito America');
	mergeAndRemove(items, 'Tec Toy', 'Tectoy');
	mergeAndRemove(items, 'Ubisoft', 'Ubi Soft');
	mergeAndRemove(items, 'Vic Tokai', 'Vic Tokai Corporation');
	mergeAndRemove(items, 'Video System', 'Video System Co.');
	mergeAndRemove(items, 'Virgin Games', 'Virgin Games USA', 'Virgin Interactive Entertainment');
	mergeAndRemove(items, 'Westwood Studios', 'Westwood', 'Westwood Associates');
	mergeAndRemove(items, 'Winkysoft', 'Winky Soft');
	mergeAndRemove(items, 'WMS', 'Williams', 'Williams Electronics', 'WMS Industries');

	return items;
};

const extractListFromInfoboxData = ($, label, gameName) => {
	// TODO some games (e.g. Hook) have multiple infoboxes for each platform (e.g. NES/Famicom, SNES/SFC, etc.)
	let $container = $('#bodyContent .mw-parser-output .infobox').first()
		.find('.infobox-label')
		.filter((i, th) =>  $(th).text().replace('(s)', '').toLowerCase() === label.toLowerCase())
		.siblings('.infobox-data');

	if (label === 'release') {
		return extractReleaseData($, $container, gameName);
	}

	const process = ($container) => {
		return processContainerMarkup($, $container);
	};

	// process all <ul> first, and then process everything else
	// some markup is not separated by a <br> or "," but by a <ul>
	let items = $container
		.find('.plainlist')
		.toArray()
		.map((el) => {
			const $el = $(el);
			$el.remove();
			return $el.find('li').toArray().map(li => process($(li))).reduce(flatten, []);
		})
		.reduce(flatten, [])
		.concat(
			$container
				.find('ul')
				.toArray()
				.map((ul) => {
					const $ul = $(ul);
					$ul.remove();
					return $ul.find('li').toArray().map(li => process($(li))).reduce(flatten, []);
				})
				.reduce(flatten, [])
				.concat(process($container))
		);

	if (label !== 'genre' && label !== 'mode') {
		// remove platform modifications like "Elite Systems (C64)"
		// can't apply this to everything because e.g. Genres have parens like "Sports (American football)"
		items = items
			.map(item => item.replace(/\(.+?\)$/, '').trim())
			.map(item => item.replace(/\s*\(.+$/, ''))
			.map(item => item.replace(/\s*.+?\)$/, ''));
	} else {
		items = items
			.map(item => item.replace(/\([^)]+$/, '').trim())
			.map(item => item.replace(/^[^(]+\)$/, '').trim())
			.map(item => item.replace(/\((MS-DOS|SCD)\)$/, '').trim())
	}

	items = items
		.map(item => item.startsWith('"') ? item.replace(/^"+/, '').replace(/"+$/, '') : item)
		.filter((item) => {
			// some markup has stuff like "(PlayStation 4, NES, GBA, Xbox One)" in it and since
			// we split on "," the ones in the middle just look like normal shit, so we blacklist them here
			// cuz why not i guess

			if (label === 'platform') {
				return true;
			}

			const no = {
				'PlayStation 4': 1,
				'Xbox One': 1,
				'Game Gear': 1,
				'Master System': 1,
				'Ports': 1,
				'Sega CD': 1,
				Amiga: 1,
				XBLA: 1,
				'Atari ST': 1,
				'Commodore 64': 1,
				NES: 1,
				SNES: 1,
				'ZX Spectrum': 1,
				PC: 1,
				CD: 1,
				DOS: 1,
				GG: 1,
				GB: 1,
				Genesis: 1,
				SMS: 1,
				C64: 1,
				'Game Boy': 1,
				7800: 1,
				'Wii U Virtual Console': 1,
				Japan: 1,
				'Sharp X1': 1,
				MSX: 1,
				Spectrum: 1,
				'MS-DOS': 1,
				'Sega Game Gear': 1,
			};

			return !no[item];
		})
		.filter(Boolean);

	if (label === 'mode' || label === 'genre') {
		items = items.map(item => item.toLowerCase());
	}

	combine(items, ', ', 'Java Platform', 'Micro Edition');

	combine(items, ' ', '2 player', 'Co-op');
	combine(items, ' ', 'Vertical', 'scrolling shooter');
	combine(items, ', ', 'Up to 2 players', 'alternating turns');
	uncombine(items, '/', 'single-player/multiplayer');
	uncombine(items, ';', 'single-player; multiplayer');

	if (label === 'developer' || label === 'publisher') {
		normalizeDeveloperOrPublisher(items);
	} else if (label === 'mode') {
		addIfMatches(items, items, [ 'alternating', 'multiplayer' ], /alternating/, /separate turns/);
		addIfMatches(items, items, [ 'cooperative', 'multiplayer' ], /cooperative/, /co-op/);
		addIfMatches(items, items, [ 'multiplayer' ], /[2-9]/, /two/, /three/, /four/, /five/, /six/, /seven/, /eight/, /\bvs\b/, /multi/);
		addIfMatches(items, items, [ 'single-player' ], /\b1\b/, /\bone\b/, /separate/, /single/, /up to/);

		// remove everything that doesn't match one of these
		const allowedModes = {
			alternating: 1,
			cooperative: 1,
			'single-player': 1,
			multiplayer: 1,
		};

		items = items.filter(item => !!allowedModes[item]);
	} else if (label === 'genre') {
		const newItems = [];
		addIfMatches(items, newItems, [ '2D' ], /2d/i);
		addIfMatches(items, newItems, [ '3D' ], /3d/i);
		addIfMatches(items, newItems, [ 'Action' ], /action/i);
		addIfMatches(items, newItems, [ 'Arcade' ], /arcade/i);
		addIfMatches(items, newItems, [ 'Adventure' ], /adventure/i);
		addIfMatches(items, newItems, [ 'Beat \'em up' ], /beat '?em up/i);
		addIfMatches(items, newItems, [ 'Block breaker' ], /block breaker/i, /breakout/i);
		addIfMatches(items, newItems, [ 'Board game' ], /board game/i);
		addIfMatches(items, newItems, [ 'Board game', 'Chess' ], /chess/i);
		addIfMatches(items, newItems, [ 'Business simulator', 'Simulation' ], /business simulat/i, /tycoon/i);
		addIfMatches(items, newItems, [ 'Casino' ], /casino/i);
		addIfMatches(items, newItems, [ 'Flight simulator' ], /flight simulat/i, /space .+simulator/i, /air combat simul/i);
		addIfMatches(items, newItems, [ 'Drawing' ], /drawing/i);
		addIfMatches(items, newItems, [ 'Driving' ], /driving/i);
		addIfMatches(items, newItems, [ 'Dungeon crawl' ], /dungeon crawl/i);
		addIfMatches(items, newItems, [ 'Educational' ], /education/i, /edutainment/i);
		addIfMatches(items, newItems, [ 'Fighting' ], /fighting/i);
		addIfMatches(items, newItems, [ 'First-person' ], /first-person/i);
		addIfMatches(items, newItems, [ 'Game show' ], /game show/i);
		addIfMatches(items, newItems, [ 'Hack-and-slash' ], /hack.+slash/i);
		addIfMatches(items, newItems, [ 'Fantasy' ], /fantasy/i);
		addIfMatches(items, newItems, [ 'Space' ], /spaceship/i, /space trading/i);
		addIfMatches(items, newItems, [ 'Light gun', 'Shooter' ], /light gun/i);
		addIfMatches(items, newItems, [ 'Maze' ], /maze/i);
		addIfMatches(items, newItems, [ 'Music' ], /music/i);
		addIfMatches(items, newItems, [ 'Pinball' ], /pinball/i);
		addIfMatches(items, newItems, [ 'Platformer' ], /platform/i);
		addIfMatches(items, newItems, [ 'Point-and-click' ], /point-and-click/i, /graphic adventure/i);
		addIfMatches(items, newItems, [ 'Productivity' ], /productivity/i);
		addIfMatches(items, newItems, [ 'Puzzle' ], /puzzle/i);
		addIfMatches(items, newItems, [ 'Role-playing' ], /role-?playing/i, /rpg/i);
		addIfMatches(items, newItems, [ 'Shooter' ], /shoot(er|ing)/i);
		addIfMatches(items, newItems, [ 'Shooter', 'Scrolling shooter' ], /scrolling shooter/i);
		addIfMatches(items, newItems, [ 'Shooter', 'Fixed shooter' ], /fixed shooter/i);
		addIfMatches(items, newItems, [ 'Simulation' ], /simulat(ion|or)/i);

		addIfMatches(items, newItems, [ 'Run-and-gun' ], /run[-\s]and[-\s]gun/i);
		addIfMatches(items, newItems, [ 'Shoot \'em up' ], /shoot '?em up/i);
		addIfMatches(items, newItems, [ 'Side scroller' ], /(horizontal|side).+scroll/i);
		addIfMatches(items, newItems, [ 'American football', 'Sports' ], /american football/i, /traditional football simulation/i);
		addIfMatches(items, newItems, [ 'Baseball', 'Sports' ], /baseball/i);
		addIfMatches(items, newItems, [ 'Baseball', 'Softball', 'Sports' ], /softball/i);
		addIfMatches(items, newItems, [ 'Basketball', 'Sports' ], /basketball/i);
		addIfMatches(items, newItems, [ 'Cricket', 'Sports' ], /cricket/i);
		addIfMatches(items, newItems, [ 'Pool (cue sports)', 'Sports' ], /cue sports/i, /sports.+pool/i);
		addIfMatches(items, newItems, [ 'Fishing', 'Sports' ], /fishing/i);
		addIfMatches(items, newItems, [ 'Ice hockey', 'Sports' ], /hockey/i);
		addIfMatches(items, newItems, [ 'Professional wrestling', 'Wrestling', 'Sports' ], /pro.* wrestling/i);
		addIfMatches(items, newItems, [ 'Racing', 'Sports' ], /racing/i);
		addIfMatches(items, newItems, [ 'Skateboarding', 'Sports' ], /skateboarding/i);
		addIfMatches(items, newItems, [ 'Skiing', 'Sports' ], /\bski(\b|ing|er)/i);
		addIfMatches(items, newItems, [ 'Snowboarding', 'Sports' ], /snowboarding/i);
		addIfMatches(items, newItems, [ 'Soccer', 'Sports' ], /soccer/i, /association football/i);
		addIfMatches(items, newItems, [ 'Sports' ], /sport/i);
		addIfMatches(items, newItems, [ 'Track and field', 'Sports' ], /olympics/i);
		addIfMatches(items, newItems, [ 'Exercise', 'Sports' ], /exergaming/i, /exercise/i);
		addIfMatches(items, newItems, [ 'Volleyball', 'Sports' ], /volleyball/i);
		addIfMatches(items, newItems, [ 'Boxing', 'Sports' ], /boxing/i);
		addIfMatches(items, newItems, [ 'Wrestling', 'Sports' ], /wrestling/i);
		addIfMatches(items, newItems, [ 'Golf', 'Sports' ], /golf/i);
		addIfMatches(items, newItems, [ 'Stealth' ], /stealth/i);
		addIfMatches(items, newItems, [ 'Strategy' ], /strategy/i);
		addIfMatches(items, newItems, [ 'Submarine' ], /submarine/i);
		addIfMatches(items, newItems, [ 'Survival' ], /survival/i);
		addIfMatches(items, newItems, [ 'Horror' ], /horror/i);
		addIfMatches(items, newItems, [ 'Tactical' ], /tactic(s|al)/i);
		addIfMatches(items, newItems, [ 'Tank', 'Military' ], /\btank\b/i);
		addIfMatches(items, newItems, [ 'Tennis', 'Sports' ], /tennis/i);
		addIfMatches(items, newItems, [ 'Third-person' ], /third[-\s]person/i, /3rd[-\s]person/i);
		addIfMatches(items, newItems, [ 'Turn-based' ], /turn[-\s]based/i);
		addIfMatches(items, newItems, [ 'Vehicular combat' ], /vehicular combat/i);
		addIfMatches(items, newItems, [ 'Vertical scroller' ], /vertical(ly)?[-\s]scroll/i);
		addIfMatches(items, newItems, [ 'War', 'Military' ], /wargame/i);
		addIfMatches(items, newItems, [ 'Western' ], /western/i);

		items = newItems;
	}

	switch (label) {
		case 'composer':
		case 'designer':
		case 'producer':
		case 'director':
		case 'programmer':
		case 'artist':
		case 'writer':
			items = items
				.map(item => item.split('&').map(item => item.trim()))
				.reduce(flatten, [])
				.filter(Boolean)
				.map((item) => {
					switch (item) {
						case 'Ste and John Pickford':
						case 'Tim and Chris Stamper':
							return [ item ];
						default:
							return item.split(' and ').map(item => item.trim());
					}
				})
				.reduce(flatten, [])
				.filter(Boolean);

				mergeAndRemove(items, 'Alberto Jose González', 'Alberto González');
				mergeAndRemove(items, 'Alex DeMeo', 'Alex Demeo', 'Alex De Meo');
				mergeAndRemove(items, 'Alexey Pajitnov', 'Alexey Pazhitnov');
				mergeAndRemove(items, 'John Cassells', 'John Cassels');
				mergeAndRemove(items, 'John Van Ryzin', 'John van Ryzin');
				mergeAndRemove(items, 'Roger Amidon', 'Roger W. Amidon');
				mergeAndRemove(items, 'Shuya Takaoka', 'Shuuya Takaoka');
			break;
		case 'platform':
			items = items.map(normalizePlatform).reduce(flatten, []);
			break;
	}

	return removeDuplicates(items);
};

const getGameInfo = async (gameUrl, platform, gameName) => {
	if (!gameUrl) {
		return {};
	}

	let html;
	try {
		html = await fetchHtml(gameUrl, `games/${platform}/${gameName}.html`);
	} catch (e) {
		return {};
	}

	const $ = cheerio.load(html);
	const imageUrl = $('meta[property="og:image"]').attr('content') || null;
	const $infobox = $('#bodyContent .mw-parser-output .infobox').first();

	let descriptions;
	if ($('#toc').length) {
		// every paragraph before the table of contents
		descriptions = $infobox.nextUntil('#toc')
			.map((i, p) => $(p).text().trim())
			.toArray()
			.filter(Boolean);
	} else {
		// some game pages don't have a table of contents
		descriptions = $('#bodyContent .mw-parser-output p')
			.first()
			.toArray()
			.map(p => $(p).text().trim())
			.filter(Boolean);
	}

	descriptions = descriptions// get rid of wiki-style citations (e.g. "[0]")
		.map(str => str.replace(/\[[0-9]+?]/g, ''))
		.map(str => str.replace(/\[[a-z]]/g, ''));

	const developers = extractListFromInfoboxData($, 'developer', gameName);
	const publishers = extractListFromInfoboxData($, 'publisher', gameName);
	const directors = extractListFromInfoboxData($, 'director', gameName);
	const producers = extractListFromInfoboxData($, 'producer', gameName);
	const programmers = extractListFromInfoboxData($, 'programmer', gameName);
	const artists = extractListFromInfoboxData($, 'artist', gameName);
	const writers = extractListFromInfoboxData($, 'writer', gameName);
	const composers = extractListFromInfoboxData($, 'composer', gameName);
	const designers = extractListFromInfoboxData($, 'designer', gameName);
	const genres = extractListFromInfoboxData($, 'genre', gameName);
	const modes = extractListFromInfoboxData($, 'mode', gameName);
	const platforms = extractListFromInfoboxData($, 'platform', gameName);
	const releases = extractListFromInfoboxData($, 'release', gameName);

	return {
		imageUrl,
		description: descriptions.join('\n\n'),
		developers,
		publishers,
		directors,
		producers,
		programmers,
		artists,
		writers,
		composers,
		designers,
		genres,
		modes,
		platforms,
		releases,
	};
};

const extractRowFromGameList = async ($, $row, i, cols, platform) => {
	const $titles = $row.find('th,td').eq(cols.title).find('i');

	const titles = [];

	$titles.each((i, el) => {
		const $el = $(el);
		// NES uses <small>, Genesis/SNES/64/PlayStation uses <sup>
		let regionText = $el.siblings('small').text().trim() || $el.siblings('sup').text().trim();
		regionText = regionText.replace(/[()]/g, '');
		const regions = regionText.split('/').map(x => x.trim()).filter(Boolean);

		titles.push({
			regions,
			title: $el.text().trim(),
		});
	});

	if (!titles.length) {
		log(lliw.red(`failed to find titles in row ${i}`));
		return null;
	}

	const href = $titles.find('a').first().attr('href');
	const link = href ? new URL(href, 'https://en.wikipedia.org/').href : null;

	const defaultTitle = (
		titles.find(title => !title.regions.length) ||
		titles.find(title => title.regions.indexOf('NA') !== -1) ||
		titles[0]
	).title;

	if (!defaultTitle) {
		log(lliw.red(`failed to find default title in row ${i} (${link})`));
		return null;
	}

	let developers = [];
	let publishers = [];
	let releases = [];
	cols.developers.forEach((col) => {
		developers = developers.concat(processContainerMarkup($, $row.find('th,td').eq(col)));
	});
	cols.publishers.forEach((col) => {
		publishers = publishers.concat(processContainerMarkup($, $row.find('th,td').eq(col)));
	});

	developers = removeDuplicates(normalizeDeveloperOrPublisher(developers));
	publishers = removeDuplicates(normalizeDeveloperOrPublisher(publishers));

	// console.log(require('util').inspect(developers, false, null, true));
	// console.log(require('util').inspect(publishers, false, null, true));

	const addRelease = (col, region) => {
		if (col < 0) {
			return;
		}

		const text = $row.find('th,td').eq(col).text().trim();
		if (text && text.toLowerCase() !== 'unreleased') {
			const release = parseReleaseItem(defaultTitle, text, [ platform ]);
			if (release) {
				release.regions.push(region);
				releases.push(release);
			}
		}
	};

	addRelease(cols.releaseNA, 'NA');
	addRelease(cols.releaseJP, 'JP');
	addRelease(cols.releasePAL, 'PAL');

	return {
		defaultTitle,
		titles,
		link,
		developers,
		publishers,
		releases,
	};
};

const extractFromGameList = async (listPlatform, rowNum = -1) => {
	const { id: listUrlId, url: wikiListUrl, cols } = listUrls.find(item => item.listPlatform === listPlatform);

	const gameListStart = Date.now();
	const html = await fetchHtml(wikiListUrl, `lists/games-${listPlatform}.html`);
	const $ = cheerio.load(html);

	let rows = $('.wikitable')
		.filter((i, table) => /^Title/.test($(table).find('th').first().text()))
		.first()
		.find('tr')
		.toArray()
		.slice(2); // skip first two header rows

	if (rowNum >= 0) {
		rows = rows.slice(rowNum, rowNum + 1);
	}

	const gameItems = [];
	await promiseLimit(1, rows.map((row, i) => {
		return async () => {
			const start = Date.now();
			const rowInfo = await extractRowFromGameList($, $(row), i, cols, listPlatform);
			if (!rowInfo) {
				log(lliw.red(`unable to extract row info for row ${i} (${listPlatform})`));
				return;
			}
			const defaultTitle = rowInfo.defaultTitle;

			log(`${listPlatform}[${i}]: ${lliw.bold(defaultTitle)}`);
			const gameInfo = await getGameInfo(rowInfo.link, listPlatform, defaultTitle);
			log(lliw.gray(` ${listPlatform}[${i}]: ${lliw.bold(defaultTitle)} finished in ${getElapsed(start)}`));

			// merge in stuff from the row in the big list to stuff from the infobox on the game article
			let { developers: rowDevs, publishers: rowPubs, releases: rowReleases, ...rowStuff } = rowInfo;
			let { developers: gameDevs, publishers: gamePubs, releases: gameReleases, platforms, ...gameStuff } = gameInfo;

			gameReleases = gameReleases || [];
			rowReleases = rowReleases || [];
			platforms = platforms || [];
			platforms.push(listPlatform);

			const developers = removeDuplicates((rowDevs || []).concat(gameDevs || []));
			const publishers = removeDuplicates((rowPubs || []).concat(gamePubs || []));

			for (const rowRelease of rowReleases) {
				const gameRelease = (gameReleases || []).find((gameRelease) => {
					const rowRegion = rowRelease.regions[0];
					const rowPlatform = rowRelease.platforms[0];
					const matchesRegion = gameRelease.regions.some(
						// PAL === EU for these purposes
						region => region === rowRegion || (rowRegion === 'PAL' && region === 'EU')
					);
					const matchesPlatform = gameRelease.platforms.some(platform => platform === rowPlatform);
					return matchesRegion && matchesPlatform;
				});

				if (gameRelease) {
					// replace a more vague date with a more specific one. more specific === less "x"s
					if (rowRelease.date.replace(/[^x]/g, '').length < gameRelease.date.replace(/[^x]/g, '').length) {
						gameRelease.date = rowRelease.date;
					}
				} else {
					// release doesn't exist, add it
					gameReleases.push(rowRelease);
				}
			}

			gameItems.push({
				id: ++gameId,
				developers,
				publishers,
				...rowStuff,
				...gameStuff,
				platforms: removeDuplicates(platforms),
				releases: gameReleases.sort(sortReleases),
				listUrlId,
				wikiListRow: i,
			});
		};
	}));

	log(`${lliw.bold(gameItems.length)} ${listPlatform} games extracted from list in ${getElapsed(gameListStart)}`);

	return gameItems;
};

const writeCsv = async (file, data) => {
	log(`writing CSV data to ${lliw.yellow(file)}... `);

	await promiseMe(callback => fs.mkdir(path.dirname(file), { recursive: true }, callback));

	return new Promise((resolve, reject) => {
		const start = Date.now();
		csvStringify(data)
			.pipe(fs.createWriteStream(file))
			.on('error', reject)
			.on('finish', () => {
				log(lliw.gray(` wrote to ${path.basename(file)} in ${getElapsed(start)}`));
				resolve();
			});
	});
};

const generateCSVs = async (gameItems, listPlatform) => {
	const releases = [];
	const gameTitles = [];

	const gameRows = gameItems.map((gameInfo) => {
		const gameId = gameInfo.id;
		const setGameIdInMap = (map, items) => {
			(items || []).forEach((item) => {
				if (!map[item]) {
					map[item] = {
						id: Object.keys(map).length + 1,
						gameIds: [],
					};
				}

				map[item].gameIds.push(gameId);
			});
		};

		const setCreditedRoleForGame = (names, role) => {
			(names || []).forEach((name) => {
				if (!contributorMap[name]) {
					contributorMap[name] = {
						id: Object.keys(contributorMap).length + 1,
					};
				}

				credits.push({
					id: credits.length + 1,
					gameId,
					contributorId: contributorMap[name].id,
					role,
				});
			});
		};

		setGameIdInMap(developerGameMap, gameInfo.developers);
		setGameIdInMap(publisherGameMap, gameInfo.publishers);
		setGameIdInMap(genreGameMap, gameInfo.genres);
		setGameIdInMap(modeGameMap, gameInfo.modes);
		setGameIdInMap(platformGameMap, gameInfo.platforms);
		(gameInfo.releases || []).map(release => setGameIdInMap(platformGameMap, release.platforms));

		setCreditedRoleForGame(gameInfo.directors, 'director');
		setCreditedRoleForGame(gameInfo.producers, 'producer');
		setCreditedRoleForGame(gameInfo.programmers, 'programmer');
		setCreditedRoleForGame(gameInfo.artists, 'artist');
		setCreditedRoleForGame(gameInfo.writers, 'writer');
		setCreditedRoleForGame(gameInfo.composers, 'composer');
		setCreditedRoleForGame(gameInfo.designers, 'designer');

		return [
			gameId,
			gameInfo.defaultTitle,
			gameInfo.description,
			gameInfo.link,
			gameInfo.imageUrl,
			gameInfo.listUrlId,
			gameInfo.wikiListRow,
		];
	});

	gameItems.forEach((gameInfo) => {
		const gameId = gameInfo.id;

		if (!gameInfo.releases) {
			log(`releases does not exist for game ${gameId}`, gameInfo);
			return;
		}

		gameInfo.titles.forEach((titleInfo) => {
			const regions = titleInfo.regions.length ? titleInfo.regions : [null];

			regions.forEach((region) => {
				const titleId = ++gameTitleId;
				if (region && !regionMap[region]) {
					regionMap[region] = {
						id: Object.keys(regionMap).length + 1,
					};
				}

				const regionId = region ? regionMap[region].id : null;

				gameTitles.push([titleId, gameId, titleInfo.title, regionId]);
			});
		});

		gameInfo.releases.forEach((release) => {
			const platforms = release.platforms && release.platforms.length ? release.platforms : [null];
			platforms.forEach((platformName) => {
				const platform = platformGameMap[platformName];
				if (!platform && platformName) {
					log(lliw.magenta(`platform ${lliw.bold(platformName)} for game ${lliw.bold(gameInfo.defaultTitle)} not found in platformGameMap`));
				}
				const regions = release.regions && release.regions.length ? release.regions : [null];
				regions.forEach((region) => {
					const releaseId = ++gameReleaseId;

					if (region && !regionMap[region]) {
						regionMap[region] = {
							id: Object.keys(regionMap).length + 1,
						};
					}

					const regionId = region ? regionMap[region].id : null;

					releases.push([
						releaseId,
						gameId,
						platform ? platform.id : null,
						release.date,
						regionId,
					]);
				});
			});
		});
	});

	await Promise.all([
		writeCsv(csvFile(listPlatform, 'games'), gameRows),
		writeCsv(csvFile(listPlatform, 'game_releases'), releases),
		writeCsv(csvFile(listPlatform, 'game_titles'), gameTitles),
	]);
};

const recreateDb = async () => {
	const start = Date.now();

	log(`creating sqlite3 db at ${lliw.yellow(sqliteFile)}...`);

	try {
		fs.unlinkSync(sqliteFile);
		log(lliw.magenta('deleted old sqlite db'));
	} catch {
		// don't care
	}

	execSync(`sqlite3 "${sqliteFile}" <<EOF
create table list_url (
	id integer primary key,
	url text not null unique,
	platform_name text not null
);
create table game (
	id integer primary key,
	title text,
	description text,
	wiki_link_url text,
	image_url text,
	list_url_id integer not null
		constraint game_list_url_id_fk references list_url
			on update restrict on delete restrict,
	list_row integer not null
);
create unique index game_list_url_id_list_row on game (list_url_id, list_row);
create table game_title (
	id integer primary key,
	game_id integer not null
		constraint game_title_game_id_fk references game
			on update restrict on delete restrict,
	title text not null,
	region_id integer
		constraint game_title_region_id_fk references region
			on update restrict on delete restrict
);
create unique index game_title_game_title_region on game_title (game_id, title, region_id);
create table developer (
	id integer primary key,
	name text not null unique
);
create table developer_game (
	developer_id integer not null
		constraint developer_game_developer_id_fk references developer
			on update restrict on delete restrict,
	game_id integer not null
		constraint developer_game_game_id_fk references game
			on update restrict on delete restrict,
	primary key(developer_id, game_id)
);
create table publisher (
	id integer primary key,
	name text not null unique
);
create table publisher_game (
	publisher_id integer not null
		constraint publisher_game_publisher_id_fk references publisher
			on update restrict on delete restrict,
	game_id integer not null
		constraint publisher_game_game_id_fk references game
			on update restrict on delete restrict,
	primary key(publisher_id, game_id)
);
create table genre (
	id integer primary key,
	name text not null unique
);
create table genre_game (
	genre_id integer not null
		constraint genre_game_genre_id_fk references genre
			on update restrict on delete restrict,
	game_id integer not null
		constraint genre_game_game_id_fk references game
			on update restrict on delete restrict,
	primary key(genre_id, game_id)
);
create table mode (
	id integer primary key,
	name text not null unique
);
create table mode_game (
	mode_id integer not null
		constraint mode_game_game_id_fk references mode
			on update restrict on delete restrict,
	game_id integer not null
		constraint mode_game_game_id_fk references game
			on update restrict on delete restrict,
	primary key(mode_id, game_id)
);
create table contributor (
	id integer primary key,
	name text not null unique
);
create table credit (
	id integer primary key,
	game_id integer not null
		constraint credit_game_id_fk references game
			on update restrict on delete restrict,
	contributor_id integer not null
		constraint credit_contributor_id_fk references contributor
			on update restrict on delete restrict,
	role text not null
);
create unique index credit_game_contributor_role_unique on credit (game_id, contributor_id, role);
create table platform (
	id integer primary key,
	name text not null unique
);
create table platform_game (
	platform_id integer not null
		constraint platform_game_platform_id_fk references platform
			on update restrict on delete restrict,
	game_id integer not null
		constraint platform_game_game_id_fk references game
			on update restrict on delete restrict
);
create table game_release (
	id integer primary key,
	game_id integer not null
		constraint game_release_game_id_fk references game
			on update restrict on delete restrict,
	platform_id integer
		constraint game_release_platform_id_fk references platform
			on update restrict on delete restrict,
	date text,
	region_id integer
		constraint game_release_region_id_fk references region
			on update restrict on delete restrict
);
create table region (
	id integer primary key,
	name text not null unique
);
EOF`);

	log(lliw.gray(` done creating sqlite db in ${getElapsed(start)}`));
};

const importPlatformDataIntoDb = async (listPlatform) => {
	const start = Date.now();

	log(`generating sqlite3 db at ${lliw.yellow(sqliteFile)}...`);

	execSync(`sqlite3 "${sqliteFile}" <<EOF
.mode csv
.import ${csvFile(listPlatform, 'games')} game
.import ${csvFile(listPlatform, 'game_releases')} game_release
.import ${csvFile(listPlatform, 'game_titles')} game_title
EOF`);

	log(lliw.gray(` done importing into sqlite db in ${getElapsed(start)}`));
};

const importSharedDataIntoDb = async () => {
	const dir = 'shared';
	const writeMapCSVs = (name, map) => {
		return [
			writeCsv(csvFile(dir, name), Object.keys(map).map((name) => {
				const item = map[name];
				return [item.id, name];
			})),
			writeCsv(csvFile(dir, `${name}_games`), Object.keys(map)
				.map((name) => {
					const item = map[name];
					return item.gameIds.map(gameId => [item.id, gameId])
				})
				.reduce((arr, item) => arr.concat(item), [])
			),
		];
	};

	await Promise.all([
		...writeMapCSVs('developers', developerGameMap),
		...writeMapCSVs( 'publishers', publisherGameMap),
		...writeMapCSVs( 'genres', genreGameMap),
		...writeMapCSVs( 'modes', modeGameMap),
		...writeMapCSVs( 'platforms', platformGameMap),
		writeCsv(csvFile(dir, 'contributors'), Object.keys(contributorMap).map((name) => {
			const item = contributorMap[name];
			return [ item.id, name ];
		})),
		writeCsv(csvFile(dir, 'credits'), credits.map((credit) => {
			return [ credit.id, credit.gameId, credit.contributorId, credit.role ];
		})),
		writeCsv(csvFile(dir, 'regions'), Object.keys(regionMap).map((name) => {
			const item = regionMap[name];
			return [item.id, name];
		})),
		writeCsv(csvFile(dir, 'list_urls'), listUrls.map((item) => {
			return [
				item.id,
				item.url,
				item.listPlatform,
			];
		})),
	]);

	const start = Date.now();

	log(`import shared data into ${lliw.yellow(sqliteFile)}...`);

	execSync(`sqlite3 "${sqliteFile}" <<EOF
.mode csv
.import ${csvFile(dir, 'developers')} developer
.import ${csvFile(dir, 'publishers')} publisher
.import ${csvFile(dir, 'genres')} genre
.import ${csvFile(dir, 'modes')} mode
.import ${csvFile(dir, 'platforms')} platform
.import ${csvFile(dir, 'contributors')} contributor
.import ${csvFile(dir, 'regions')} region
.import ${csvFile(dir, 'list_urls')} list_url

.import ${csvFile(dir, 'developers_games')} developer_game
.import ${csvFile(dir, 'publishers_games')} publisher_game
.import ${csvFile(dir, 'genres_games')} genre_game
.import ${csvFile(dir, 'modes_games')} mode_game
.import ${csvFile(dir, 'platforms_games')} platform_game
.import ${csvFile(dir, 'credits')} credit
EOF`);

	log(lliw.gray(` done importing shared data in ${getElapsed(start)}`));
};

const generateForPlatform = async (platform) => {
	const gameItems = await extractFromGameList(platform);
	await generateCSVs(gameItems, platform);
	await importPlatformDataIntoDb(platform);
};

const generateAll = async (platforms = [], gameNames = []) => {
	await recreateDb();

	if (!platforms.length) {
		platforms = [ 'NES', 'Genesis' ];
	}

	for (const platform of platforms) {
		await generateForPlatform(platform, gameNames);
	}

	await importSharedDataIntoDb();
};

module.exports = {
	getGameInfo,
	extractFromGameList,
	extractRowFromGameList,
	generateAll,
};
