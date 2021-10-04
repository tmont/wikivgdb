const gen = require('../gen');
const expect = require('expect.js');
const {extractRowFromGameList, extractFromGameList} = require('../gen');

describe('NES', () => {
	const expectGameInfo = async (link, gameName, expected) => {
		const actual = await gen.getGameInfo(link, 'NES', gameName);
		// console.log(require('util').inspect(actual, false, null, true));
		const expectedKeys = Object.keys(expected);
		const actualKeys = Object.keys(actual);

		expectedKeys.forEach((key) => {
			expect(actual).to.have.property(key);
			expect(actual[key]).to.eql(expected[key]);
			actualKeys.splice(actualKeys.indexOf(key), 1);
		});

		actualKeys.forEach((key) => {
			if (key === 'wikiListUrl' || key === 'wikiListRow') {
				return;
			}
			expect(expected).to.have.property(key);
		});
	};

	it('10-Yard Fight', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/10-Yard_Fight', '10-Yard Fight', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2f/10YardFight_arcadeflyer.png',
			description: '10-Yard Fight is an American football sports video game that was developed and published in Japan by Irem for arcades in 1983. It was published overseas by Taito in the Americas, by Electrocoin in Europe, and by ADP Automaten GmbH in West Germany.',
			developers: ['Irem'],
			publishers: ['ADP Automaten GmbH', 'Electrocoin', 'Irem', 'Nintendo', 'Taito'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Ichiro Takagi'],
			designers: [],
			genres: ['American football', 'Sports'],
			modes: ['multiplayer', 'single-player'],
			platforms: [ 'Arcade', 'Famicom', 'MSX', 'NES' ],
			releases: [
				{ regions: ['JP'], date: '1983-12-05', platforms: [ 'Arcade' ] },
				{ regions: ['EU'], date: '1983-xx-xx', platforms: [ 'Arcade' ] },
				{ regions: ['NA'], date: '1983-xx-xx', platforms: [ 'Arcade' ] },
				{ regions: ['JP'], date: '1985-08-30', platforms: [ 'Famicom', 'NES' ] },
				{ regions: ['NA'], date: '1985-10-18', platforms: [ 'Famicom', 'NES' ] },
				{ regions: ['EU'], date: '1985-12-06', platforms: [ 'Famicom', 'NES' ] },
				{ regions: ['JP'], date: '1986-xx-xx', platforms: [ 'MSX' ] },
			],
		});
	});

	it('Crystalis', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Crystalis', 'Crystalis', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Crystalisboxart.jpg',
			description: "Crystalis is a 1990 action role-playing action-adventure video game produced by SNK for the Nintendo Entertainment System. The game's initial success prompted an enhanced port  for the Game Boy Color by Nintendo Software Technology in 2000. Many changes were made to the story, music, and other aspects of the game, upsetting fans of the original. The original Nintendo Entertainment System version has been re-released via the SNK 40th Anniversary Collection on Nintendo Switch, Playstation 4, Xbox One, and Microsoft Windows (via Steam).\n" +
				'\n' +
				'The game begins with a young magician awakening from the cryogenic sleep he was placed in by the villains of the Great War before nuclear war rained down in the year 1997. Even though he is unable to recall his name or who he was, he exits the Mezame Shrine and discovers that he may be the key to save this world from destruction. Aided by four wise sages and a mysterious woman, he rises up against the tyrannical Draygonian Empire to ensure that humanity ultimately does not repeat the Great War.',
			developers: [
				'Digital Eclipse',
				'Nintendo Software Technology',
				'SNK',
			],
			publishers: [
				'NIS America',
				'Nintendo',
				'SNK'
			],
			directors: ['Kazuto Kohno'],
			producers: ['Kazuto Kohno'],
			programmers: ['F. Sasami', 'Satoru Okada', 'Yukio Gu'],
			artists: ['M. Yamashita', 'T. Furuta', 'T. Tokyo', 'Yoshihisa Maeda'],
			writers: ['H. Kino', 'J. Satoh', 'Kiyoji Tomita'],
			composers: ['Yoko Osaka'],
			designers: [],
			genres: ['Action', 'Adventure', 'Role-playing'],
			modes: ['single-player'],
			platforms: [
				'Game Boy Color',
				'NES',
				'Nintendo Switch'
			],
			releases: [
				{ regions: ['JP'], platforms: [ 'NES' ], date: '1990-04-13' },
				{ regions: ['NA'], platforms: [ 'NES' ], date: '1990-07-xx' },
				{ regions: ['NA'], platforms: [ 'Game Boy Color' ], date: '2000-06-26' },
			],
		});
	});

	it('1943: The Battle of Midway', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/1943:_The_Battle_of_Midway', '1943: The Battle of Midway', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7c/1943_The_Battle_of_Midway_flyer.png',
			description: "1943: The Battle of Midway, known as 1943: Middouei Kaisen in Japan, is a 1987 shoot 'em up arcade game developed and published by Capcom. It was the first follow-up to Capcom's earlier 1942. The game's name is a reference to the Battle of Midway, which in actuality happened in June 1942.",
			developers: ['Capcom'],
			publishers: ['Capcom'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [
				'Harumi Fujita',
				'Hiroshige Tonomura',
				'Junko Tamiya',
				'Kumi Yamaga',
				'Manami Matsumae',
				'Takashi Tateishi',
				'Tamayo Kawamoto'
			],
			designers: ['Yoshiki Okamoto'],
			genres: ['Scrolling shooter', 'Shooter', 'Vertical scroller'],
			modes: ['cooperative', 'multiplayer', 'single-player'],
			platforms: [
				'Amiga',
				'Amstrad CPC',
				'Arcade',
				'Atari ST',
				'Commodore 64',
				'NES',
				'PlayStation',
				'PlayStation 2',
				'PlayStation 3',
				'PlayStation Portable',
				'Saturn',
				'TurboGrafx-16',
				'Xbox',
				'Xbox 360',
				'Xbox One',
				'ZX Spectrum'
			],
			releases: [
				{ regions: [], date: '1987-06-xx', platforms: [ 'Arcade' ] }
			]
		});
	});

	it('1942', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/1942_(video_game)', '1942', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/52/1942_arcade_flyer.png',
			description: '1942 is a vertically scrolling shooter game made by Capcom that was released for arcades in 1984. Designed by Yoshiki Okamoto, it was the first game in the 19XX series, and was followed by 1943: The Battle of Midway.\n' +
				'\n' +
				"1942 is set in the Pacific Theater of World War II, and is loosely based on the Battle of Midway. Despite the game being created by Japanese developers, the goal is to reach Tokyo and destroy the Japanese air fleet; this was due to being the first Capcom game designed with Western markets in mind. It went on to be a commercial success in arcades, becoming Japan's fifth highest-grossing table arcade game of 1986 and one of America's top five highest-grossing arcade conversion kits that year. It was ported to the NES, selling over 1 million copies worldwide, along with other home platforms.",
			developers: ['Capcom'],
			publishers: ['Capcom', 'Digital Eclipse', 'Elite Systems', 'Romstar', 'WMS'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Ayako Mori'],
			designers: ['Yoshiki Okamoto'],
			genres: ['Scrolling shooter', 'Shooter'],
			modes: ['cooperative', 'multiplayer', 'single-player'],
			platforms: [
				'Amstrad CPC',
				'Arcade',
				'Commodore 64',
				'FM-7',
				'Game Boy Color',
				'MSX',
				'NES',
				'PC-8801',
				'PlayStation',
				'PlayStation 2',
				'PlayStation Portable',
				'Saturn',
				'Sharp X1',
				'Windows Mobile Professional',
				'Xbox',
				'ZX Spectrum'
			],
			releases: [
				{platforms: [ 'Arcade' ], regions: ['JP'], date: '1984-11-30'},
				{platforms: [ 'Arcade' ], regions: ['EU'], date: '1985-05-xx'},
				{platforms: [ 'Arcade' ], regions: ['NA'], date: '1985-07-xx'},
				{platforms: [ 'Famicom', 'NES' ], regions: ['JP'], date: '1985-12-11' },
				{platforms: [ 'Famicom', 'NES' ], regions: ['NA'], date: '1986-11-01'},
				{platforms: [ 'Game Boy Color' ], regions: ['NA'], date: '2000-05-xx'},
				{platforms: [ 'Game Boy Color' ], regions: ['PAL'], date: '2001-xx-xx' },
			]
		});
	});

	it('Advanced Dungeons & Dragons: Hillsfar', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Hillsfar', 'Advanced Dungeons & Dragons: Hillsfar', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9c/Hillsfar_Coverart.png',
			description: 'Hillsfar is a role-playing video game released for MS-DOS, Amiga, Atari ST, Commodore 64 in 1989. It was developed by Westwood Associates and published by Strategic Simulations, Inc. (SSI). It features a combination of real-time action and randomly generated quests. It also includes standard gameplay elements of the Advanced Dungeons & Dragons fantasy role-playing game, upon which the game is based. Hillsfar was later released for the Nintendo Entertainment System (NES) in 1993.\n' +
				'\n' +
				'Hillsfar received mixed reviews from critics.',
			developers: ['Crosstalk', 'Opera House', 'Westwood Studios'],
			publishers: ['FCI', 'Pony Canyon', 'Strategic Simulations', 'U.S. Gold'],
			directors: [],
			producers: [],
			programmers: ['Ethan Grimes', 'Kirk Fitzgerald'],
			artists: ['Joseph B. Hewitt IV', 'Maurine Y. Starkey'],
			writers: [],
			composers: ['Paul S. Mudra', 'Yasuhiro Kawasaki'],
			designers: ['Bret Berry', 'Charles J. Kroegel Jr.', 'Graeme Bayless'],
			genres: ['Role-playing'],
			modes: ['single-player'],
			platforms: [
				'Amiga',
				'Atari ST',
				'Commodore 64',
				'MS-DOS',
				'NES',
				'PC-8801',
				'PC-9801',
			],
			releases: [
				{platforms: [], regions: [], date: '1989-xx-xx'},
				{platforms: ['Amiga', 'Atari ST', 'Commodore 64', 'MS-DOS'], regions: [], date: '1989-xx-xx'},
				{platforms: ['Famicom', 'PC-8801', 'PC-9801'], regions: [], date: '1991-xx-xx'},
				{platforms: ['NES'], regions: [], date: '1993-11-04'},
			],
		});
	});

	it('The 3-D Battles of WorldRunner', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/The_3-D_Battles_of_WorldRunner', 'The 3-D Battles of WorldRunner', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6a/NES3dworldrunnerbox_mod.png',
			description: 'The 3-D Battles of WorldRunner (shortened to 3-D WorldRunner on the North American box art), originally released in Japan as Tobidase Daisakusen, is a 1987 third-person rail shooter platform video game developed and published by Square for the Family Computer Disk System. It was later ported to cartridge format and published by Acclaim for the Nintendo Entertainment System.\n' +
				'\n' +
				"For its time, the game was technically advanced; the game's three-dimensional scrolling effect is very similar to the linescroll effects used by Pole Position and many racing games of the day as well as the forward-scrolling effect of Sega's 1985 third-person rail shooter Space Harrier. 3-D WorldRunner was an early forward-scrolling pseudo-3D third-person platform-action game where players were free to move in any forward-scrolling direction and had to leap over obstacles and chasms. It was also notable for being one of the first stereoscopic 3-D games. WorldRunner was designed by Hironobu Sakaguchi and Nasir Gebelli, and composed by Nobuo Uematsu. All would later rise to fame as core members of the team behind the popular  Final Fantasy role-playing video game series.",
			developers: ['Square'],
			publishers: ['Acclaim Entertainment', 'Disc Original Group'],
			directors: [],
			producers: [],
			programmers: ['Nasir Gebelli'],
			artists: [],
			writers: [],
			composers: ['Nobuo Uematsu'],
			designers: ['Hironobu Sakaguchi'],
			genres: ['Platformer', 'Shooter'],
			modes: ['single-player'],
			platforms: ['Famicom Disk System', 'NES'],
			releases: [
				{platforms: ['Famicom Disk System'], regions: ['JP'], date: '1987-03-12'},
				{platforms: ['NES'], regions: ['NA'], date: '1987-09-xx'}
			]
		});
	});

	it('8 Eyes', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/8_Eyes', '8 Eyes', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/71/8_eyes_front.jpg',
			description: '8 Eyes (エイト・アイズ, Eito Aizu) is a 2D action platform game developed by Thinking Rabbit for the Nintendo Entertainment System in 1988 and Microsoft Windows in 2019. The game features eight levels, and can be played by one or two players.  It also features a large, diverse soundtrack, composed by Kenzou Kumei, often quoting from the operatic repertoire, consisting of three pieces for each of the eight levels, each set in a different part of the world.',
			developers: ['Thinking Rabbit'],
			publishers: ['SETA Corporation', 'Taxan'],
			directors: ['Tōru Ishikawa'],
			producers: [],
			programmers: ['Hiroto Nakamura'],
			artists: [],
			writers: [],
			composers: ['Kenzou Kumei'],
			designers: ['Hideki Shimura'],
			genres: ['Platformer'],
			modes: ['multiplayer', 'single-player'],
			platforms: ['Evercade', 'NES', 'Windows'],
			releases: [
				{platforms: ['NES'], regions: ['JP'], date: '1988-09-27'},
				{platforms: ['NES'], regions: ['NA'], date: '1990-01-xx'},
				{platforms: ['Windows'], regions: ['WW'], date: '2019-08-14'}
			]
		});
	});

	it('720°', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/720%C2%B0', '720°', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/24/720-arcadegame.jpg',
			description: `720° is a skateboarding video game released in arcades by Atari Games in 1986, in which the player controls a skateboarder skating around a middle-class neighborhood. By doing jumps and tricks, the player can eventually acquire enough points to compete at a skate park. The game's name comes from the "ultimate" trick, turning a full 720° (two complete circles) in the air after jumping off a ramp.`,
			developers: ['Atari Games'],
			publishers: ['Atari Games'],
			directors: [],
			producers: [],
			programmers: ['John Salwitz'],
			artists: ['Dave Ralston'],
			writers: [],
			composers: ['Brad Fuller', 'Earl Vickers', 'Hal Canon', 'Neil Brennan'],
			designers: ['Dave Ralston', 'John Salwitz'],
			genres: ['Sports'],
			modes: ['alternating', 'multiplayer', 'single-player'],
			platforms: [
				'Amstrad CPC', 'Arcade',
				'Commodore 64', 'Game Boy Color',
				'GameCube', 'NES',
				'PlayStation 2', 'PlayStation 3',
				'Windows', 'Xbox',
				'Xbox 360', 'ZX Spectrum'
			],
			releases: [
				{platforms: ['Arcade'], regions: ['WW'], date: '1986-12-xx'},
				{platforms: ['Game Boy Color'], regions: ['EU'], date: '1999-03-xx'},
				{platforms: ['Game Boy Color'], regions: ['NA'], date: '1999-03-xx'}
			]
		});
	});

	it('The Addams Family', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/The_Addams_Family_(video_game)', 'The Addams Family', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Addams_Family_video_game_box_art.jpg',
			description: 'The Addams Family is a platform game based on the 1991 film of the same name and developed and published by Ocean Software. It was released for home consoles such as the Super Nintendo Entertainment System, computer consoles such as the Amiga, and handheld consoles like the Game Boy.\n' +
				'\n' +
				"The Mario-style action-adventure game has the player control Gomez Addams. His mission is to rescue other members of the Addams family from the clutches of Abigail Craven, who, alongside The Judge and the family attorney Tully Alford, is trying to seize the Addams' wealth. The player runs, jumps, and ducks throughout the mansion's many inside and outside areas, some hidden, and can freely roam the game as in open-ended titles such as The Legend of Time (1986) and Super Metroid (1994). Levels consist of horror trope enemies like skulls, ghosts, monsters and others, and bosses withhold a member of the Addams Family, making them necessary to defeat. Power-ups, extra lives, and money are also collectable.\n" +
				'\n' +
				'Ocean, a leader in the market of video game adaptations of film in the late 1980s, began development of the tie-in for The Addams Family film in April 1991, before studios switched from 20th Century Fox to Paramount Pictures. It was originally planned to be a puzzle video game released only on computer consoles. However, that changed when Ocean was called by the studio to develop a version for the SNES. The final result was that all versions, including the computer version, were platformers with the same storyline, setting and objective. The game was critically well-received for its graphics, sound, and music, but also was widely considered to be just another platform with nothing original or special.',
			developers: ['Ocean Software'],
			publishers: ['Flying Edge', 'Ocean Software'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: [],
			genres: ['Platformer'],
			modes: ['single-player'],
			platforms: [
				'Amiga', 'Amstrad CPC',
				'Atari ST', 'Commodore 64',
				'Game Boy', 'Game Gear',
				'Genesis', 'Master System',
				'NES', 'SNES',
				'ZX Spectrum'
			],
			releases: [
				{platforms: ['SNES'], regions: ['NA'], date: '1992-xx-xx'},
				{platforms: ['Genesis'], regions: ['NA'], date: '1993-xx-xx'}
			]
		});
	});

	it('Advanced Dungeons & Dragons: DragonStrike', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/DragonStrike_(video_game)', 'Advanced Dungeons & Dragons: DragonStrike', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d7/DragonStrike_Coverart.png',
			description: 'DragonStrike is a 1990 video game based on the Dungeons & Dragons fantasy tabletop role-playing game.',
			developers: ['Westwood Studios'],
			publishers: ['Strategic Simulations'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [
				'Frank Klepacki',
				'Paul Mudra',
				'Yasuhiro Kawasaki',
				'Yoshio Kobayashi'
			],
			designers: ['Brett Sperry', 'Louis Castle'],
			genres: ['Fantasy'],
			modes: ['single-player'],
			platforms: [
				'Amiga',
				'Commodore 64',
				'MS-DOS',
				'NES',
				'PC-9801',
				'Sharp X68000'
			],
			releases: [
				{platforms: ['Amiga', 'Commodore 64', 'DOS'], regions: [], date: '1990-xx-xx'},
				{platforms: ['PC-9801', 'Sharp X68000'], regions: [], date: '1992-03-xx'},
				{platforms: ['NES'], regions: [], date: '1992-08-xx'}
			]
		});
	});

	it('The Addams Family: Pugsley\'s Scavenger Hunt', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/The_Addams_Family:_Pugsley%27s_Scavenger_Hunt', 'The Addams Family: Pugsley\'s Scavenger Hunt', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7e/The_Addams_Family_Pugsley%27s_Scavenger_Hunt_Boxart.jpg',
			description: "The Addams Family: Pugsley's Scavenger Hunt is a video game released by Ocean in 1992 in Europe and 1993 in North America. It was based on the second animated series.\n" +
				'\n' +
				"It was released in North America on all three of Nintendo's systems at the time:\n" +
				'\n' +
				'Super NES in February, 1993\n' +
				'Game Boy in July, 1993\n' +
				'NES in August, 1993\n' +
				'\n' +
				'The Game Boy version was ported for the system by Enigma Variations Ltd.',
			developers: ['Enigma Variations Ltd', 'Ocean Software'],
			publishers: ['Ocean Software'],
			directors: ['Colin Gordon'],
			producers: ['Darren Melbourne'],
			programmers: ['Stephen Hey'],
			artists: ['Chris Edwards', 'Paul J. McKee'],
			writers: [],
			composers: ['Jonathan Dunn'],
			designers: [],
			genres: ['Platformer'],
			modes: ['single-player'],
			platforms: ['Game Boy', 'NES', 'SNES'],
			releases: [
				{platforms: [], regions: ['EU'], date: '1992-xx-xx'},
				{platforms: [], regions: ['NA'], date: '1993-02-xx'}
			]
		});
	});

	it('The Adventures of Gilligan\'s Island', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/The_Adventures_of_Gilligan%27s_Island', 'The Adventures of Gilligan\'s Island', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/92/GilligansIslandNESBoxArt.jpg',
			description: "The Adventures of Gilligan's Island (also known as Gilligan's Island: The Video Game) is a single-player Nintendo Entertainment System video game by Bandai that is based on the 1960s sitcom of the same name.",
			developers: ['Human Entertainment'],
			publishers: ['Bandai'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Masaki Hashimoto', 'Takahiro Wakuta'],
			designers: ['Hiroyuki Itoh', 'Koo Wai San', 'Sun Shi Fai'],
			genres: ['Action', 'Strategy'],
			modes: ['single-player'],
			platforms: ['NES'],
			releases: [{platforms: [], regions: ['NA'], date: '1990-07-xx'}]
		});
	});

	it('Xenophobe', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Xenophobe_(video_game)', 'Xenophobe', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/3c/Xenophobe_Coverart.png',
			description: 'Xenophobe is a video game developed Bally Midway and released in arcades in 1987. Starbases, moons, ships, and space cities are infested with aliens, and the players have to kill the aliens before each is completely overrun. The screen is split into three horizontally-scrolling windows, one for each of up to three players, yet all players are in the same game world.',
			developers: ['Blue Sky Software', 'Epyx', 'Midway Games', 'Sunsoft'],
			publishers: ['Atari Corporation', 'MicroStyle', 'Midway Games', 'Sunsoft'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Michael Bartlow', 'Naohisa Morota'],
			designers: ['Brian Colin', 'Howard Shere'],
			genres: ['Shooter'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Amiga', 'Amstrad CPC',
				'Arcade', 'Atari 2600',
				'Atari 7800', 'Atari ST',
				'Commodore 64', 'Lynx',
				'NES', 'ZX Spectrum'
			],
			releases: [{platforms: [], regions: [], date: '1987-xx-xx'}]
		});
	});

	it('Trog!', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Trog_(video_game)', 'Trog!', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/af/Trog_arcade_flyer.jpg',
			description: 'Trog is a 1990 maze arcade video game originally developed and published by Bally/Midway in North America and later by Williams Electronics in Europe. In the game, players control one of four dinosaurs chased by the titular cavemen. Its gameplay includes elements of Pac-Man—collect all items in a maze, eat a special item to turn the tables on pursuers—but supports up to four players at once. Initially envisioned as a hybrid puzzle/strategy project, its original concept was later reworked into a Pac-Man-like title after poor reception from testers and features claymation graphics, advertised as "Playmation" by Midway. Conversions for the Nintendo Entertainment System and MS-DOS were released by Acclaim Entertainment in 1990 and 1991 respectively, reducing the number of simultaneous players to two. Both the arcade and NES versions garnered positive reception from critics.',
			developers: ['Midway Games'],
			publishers: ['Midway Games', 'WMS'],
			directors: [],
			producers: [],
			programmers: ['Kurt Mahan'],
			artists: ['Jack E. Haeger'],
			writers: [],
			composers: ['Chris Granner'],
			designers: ['George N. Petro'],
			genres: ['Maze'],
			modes: ['multiplayer', 'single-player'],
			platforms: ['Arcade', 'MS-DOS', 'NES'],
			releases: [
				{platforms: [], regions: ['NA'], date: '1990-03-xx'},
				{platforms: [], regions: ['EU'], date: '1991-02-xx'}
			]
		});
	});

	it('Prince of Persia', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)', 'Prince of Persia', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/80/Prince_of_Persia_1989_cover.jpg',
			description: 'Prince of Persia is a fantasy cinematic platformer designed and implemented by Jordan Mechner for the Apple II and published by Broderbund in 1989. Taking place in medieval Persia, players control an unnamed protagonist who must venture through a series of dungeons to defeat the Grand Vizier Jaffar and save an imprisoned princess.\n' +
				'\n' +
				"Much like Karateka, Mechner's first game, Prince of Persia used rotoscoping for its fluid and realistic animation. For this process, Mechner used as reference for the characters' movements videos of his brother doing acrobatic stunts in white clothes, and swashbuckler films such as The Adventures of Robin Hood.\n" +
				'\n' +
				"The game was critically acclaimed, but was not an immediate commercial success as it was released at the tail end of the Apple II's relevance. It sold many copies as it was ported to a wide range of platforms. It is believed to have been the first cinematic platformer and inspired many games in this subgenre, such as Another World. Its success led to the release of two sequels, Prince of Persia 2: The Shadow and the Flame and Prince of Persia 3D, and two reboots of the series, first in 2003 with Prince of Persia: The Sands of Time, which led to three sequels of its own, and then again in 2008 with the identically-titled Prince of Persia.",
			developers: [
				'Arsys Software',
				'Broderbund',
				'Domark',
				'Motivetime',
				'Riverhillsoft',
				'Virgin Games'
			],
			publishers: [
				'Broderbund',
				'Konami',
				'Riverhillsoft',
				'Ubisoft'
			],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [
				'Francis Mechner',
				'Mark Cooksey',
				'Tom Rettig',
				'Tommy Tallarico'
			],
			designers: ['Jordan Mechner'],
			genres: ['Platformer'],
			modes: ['single-player'],
			platforms: ['Apple II'],
			releases: [
				{platforms: [], regions: ['NA'], date: '1989-10-03'},
				{platforms: [], regions: ['JP'], date: '1990-07-xx'},
				{platforms: [], regions: ['EU'], date: '1990-09-xx'}
			]
		});
	});

	it('Lemmings', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Lemmings_(video_game)', 'Lemmings', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Lemmings-BoxScan.jpg',
			description: 'Lemmings is a puzzle video game originally developed by DMA Design in Dundee, Scotland and published by Psygnosis for the Amiga in 1991 and later ported for numerous other platforms. The game was programmed by Russell Kay, Mike Dailly and David Jones, and was inspired by a simple animation that Dailly created while experimenting with Deluxe Paint.\n' +
				'\n' +
				'The objective of the game is to guide a group of anthropomorphised lemmings through a number of obstacles to a designated exit. To save the required number of lemmings to win, one must determine how to assign a limited number of eight different skills to specific lemmings that allow the selected lemming to alter the landscape, to affect the behaviour of other lemmings, or to clear obstacles to create a safe passage for the rest of the lemmings.\n' +
				'\n' +
				'Lemmings was one of the best-received video games of the early 1990s. It was the second-highest-rated game in the history of Amstrad Action, and was considered the eighth-greatest game of all time by Next Generation in 1996. Lemmings is also one of the most widely ported and best-selling video games, and is estimated to have sold around 20 million copies between its various ports. The popularity of the game also led to the creation of sequels, remakes and spin-offs, and has also inspired similar games. Many retrospective reviews say it is one of the greatest games of all time.',
			developers: [
				'DMA Design',
				'Ocean Software',
				'Probe Entertainment',
				'Psygnosis',
				'Sunsoft'
			],
			publishers: [
				'Atari Corporation',
				'Ocean Software',
				'Philips Media',
				'Psygnosis',
				'Sega',
				'Sunsoft'
			],
			directors: [],
			producers: [],
			programmers: ['David Jones', 'Mike Dailly', 'Russell Kay'],
			artists: ['Gary Timmons', 'Mike Dailly', 'Scott Johnston'],
			writers: [],
			composers: ['Brian Johnston', 'Tim Wright'],
			designers: ['David Jones'],
			genres: ['Puzzle'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'3DO', 'Acorn Archimedes',
				'Amiga', 'Amiga CD32',
				'Amiga CDTV', 'Amstrad CPC',
				'Apple IIGS', 'Atari Lynx',
				'Atari ST', 'CD-i', 'Commodore 64',
				'FM Towns', 'Game Boy',
				'Game Gear',
				'Genesis',
				'J2ME',
				'MS-DOS', 'Mac OS',
				'Master System',
				'NES',
				'PC-9801',
				'PlayStation',
				'SAM Coupé', 'SNES',
				'Sharp X68000',
				'TurboGrafx-CD',
				'Windows',
				'ZX Spectrum'
			],
			releases: [
				{platforms: ['Amiga'], regions: ['EU'], date: '1991-02-14'},
				{platforms: ['SNES'], regions: ['JP'], date: '1991-12-xx'},
				{platforms: ['Acorn Archimedes'], regions: ['EU'], date: '1991-xx-xx'},
				{platforms: ['Atari ST'], regions: ['EU'], date: '1991-xx-xx'},
				{platforms: ['Mac OS'], regions: ['NA'], date: '1991-xx-xx'},
				{platforms: ['MS-DOS'], regions: ['NA'], date: '1991-xx-xx'},
				{platforms: ['PC-9801'], regions: ['JP'], date: '1991-xx-xx'},
				{platforms: ['ZX Spectrum'], regions: ['EU'], date: '1991-xx-xx'},
				{platforms: ['SNES'], regions: ['NA'], date: '1992-03-xx'},
				{platforms: ['SNES'], regions: ['EU'], date: '1992-08-xx'},
				{platforms: ['NES'], regions: ['NA'], date: '1992-11-xx'},
				{platforms: ['Amiga'], regions: ['NA'], date: '1992-xx-xx'},
				{platforms: ['Amiga CDTV'], regions: ['EU'], date: '1992-xx-xx'},
				{platforms: ['Amstrad CPC'], regions: ['EU'], date: '1992-xx-xx'},
				{platforms: ['Commodore 64'], regions: ['EU'], date: '1992-xx-xx'},
				{platforms: ['FM Towns'], regions: ['JP'], date: '1992-xx-xx'},
				{platforms: ['Game Gear'], regions: ['EU'], date: '1992-xx-xx'},
				{platforms: ['Game Gear'], regions: ['NA'], date: '1992-xx-xx'},
				{platforms: ['Genesis'], regions: ['EU'], date: '1992-xx-xx'},
				{platforms: ['Genesis'], regions: ['NA'], date: '1992-xx-xx'},
				{platforms: ['Master System'], regions: ['EU'], date: '1992-xx-xx'},
				{platforms: ['Sharp X68000'], regions: ['JP'], date: '1992-xx-xx'},
				{platforms: ['TurboGrafx-CD'], regions: ['JP'], date: '1992-xx-xx'},
				{platforms: ['TurboGrafx-CD'], regions: ['NA'], date: '1992-xx-xx'},
				{platforms: ['NES'], regions: ['EU'], date: '1993-05-19'},
				{platforms: ['3DO'], regions: ['NA'], date: '1993-xx-xx'},
				{platforms: ['CD-i'], regions: ['EU'], date: '1993-xx-xx'},
				{platforms: ['Commodore 64'], regions: ['NA'], date: '1993-xx-xx'},
				{platforms: ['Game Boy'], regions: ['EU'], date: '1993-xx-xx'},
				{platforms: ['Lynx'], regions: ['NA'], date: '1993-xx-xx'},
				{platforms: ['SAM Coupé'], regions: ['EU'], date: '1993-xx-xx'},
				{platforms: ['Game Boy'], regions: ['NA'], date: '1994-08-xx'},
				{platforms: ['Amiga CD32'], regions: ['EU'], date: '1994-xx-xx'},
				{platforms: ['CD-i'], regions: ['NA'], date: '1995-xx-xx'},
				{platforms: ['J2ME'], regions: ['NA'], date: '2005-xx-xx'}
			]
		});
	});

	it('Star Voyager', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Star_Voyager', 'Star Voyager', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b0/SV_NES.PNG',
			description: 'Star Voyager is an outer space shooter for the Nintendo Entertainment System. The gameplay is a first-person shooter from inside the cockpit of a spaceship. The player navigates "sub spaces" of a larger "world map." Gameplay takes place between different subspaces.',
			developers: ['ASCII Corporation'],
			publishers: ['Acclaim Entertainment'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Mitsunori Ogihara'],
			designers: ['ASCII Entertainment'],
			genres: ['Action'],
			modes: ['single-player'],
			platforms: ['NES'],
			releases: [
				{platforms: [], regions: ['JP'], date: '1986-12-23'},
				{platforms: [], regions: ['NA'], date: '1987-09-xx'}
			]
		});
	});

	it('Castlequest', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Castlequest', 'Castlequest', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/34/CastlequestNESBoxart.jpg',
			description: 'Castlequest (known in Japan as Castle Excellent (キャッスルエクセレント, Kyassuru Ekuserento)) is an adventure/puzzle-hybrid video game.  It was developed and published by ASCII Corporation in 1985 for the FM-7, PC-88, and Sharp X1. Additional versions followed in 1986 for the Famicom and MSX, and was subsequently released in 1989 for the NES in the United States by Nexoft Corporation (the American division of ASCII).\n' +
				'\n' +
				'It is the sequel to The Castle, released in 1985 for the MSX, SG-1000, and other systems (though not the NES). Like that game, it is an early example of the Metroidvania genre.',
			developers: ['ASCII Corporation'],
			publishers: ['ASCII Corporation', 'Nexoft Corporation'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Mitsunori Ogihara'],
			designers: ['Isao Yoshida', 'Keisuke Iwakura'],
			genres: ['Adventure', 'Puzzle'],
			modes: ['single-player'],
			platforms: ['MSX', 'NES'],
			releases: [
				{platforms: ['PC'], regions: ['JP'], date: '1985-xx-xx'},
				{platforms: ['NES'], regions: ['JP'], date: '1986-11-28'},
				{platforms: [], regions: ['NA'], date: '1989-09-xx'}
			]
		});
	});

	it('Dr. Jekyll and Mr. Hyde', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Dr._Jekyll_and_Mr._Hyde_(video_game)', 'Dr. Jekyll and Mr. Hyde', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/89/DrJekyllAndMrHydeNESBoxart.jpg',
			description: "Dr. Jekyll and Mr. Hyde is a 1988 side-scrolling action video game for the Nintendo Entertainment System loosely based on the 1886 novella Strange Case of Dr Jekyll and Mr Hyde by Robert Louis Stevenson. Gameplay alternates between the characters of Dr. Jekyll and Mr. Hyde based on the player's ability to either avoid or cause damage. The game initially got mixed reception, but retrospective reviews have been more negative, often being cited as one of the worst video games of all time. Its title screen uses music from the wise man stage in Rygar.",
			developers: ['Advance Communication Company'],
			publishers: ['Bandai', 'Toho'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Michiharu Hasuya'],
			designers: [],
			genres: ['Action', 'Side scroller'],
			modes: ['single-player'],
			platforms: ['NES'],
			releases: [
				{platforms: [], regions: ['JP'], date: '1988-04-08'},
				{platforms: [], regions: ['NA'], date: '1989-04-xx'}
			]
		});
	});

	it('Amagon', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Amagon', 'Amagon', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Amagon_Cover.png',
			description: 'Amagon, known in Japan as Totsuzen! Machoman (突然! マッチョマン, lit. Suddenly! Machoman), is a side-scrolling platform action game for the Nintendo Entertainment System developed by Aicom.',
			developers: ['Aicom'],
			publishers: ['Sammy Corporation', 'Vic Tokai'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Dōta Andō', 'Kiyoshi Yokoyama'],
			designers: ['Hiroshi Kazama', 'Tokuhiro Takemori'],
			genres: ['2D', 'Action', 'Platformer'],
			modes: ['single-player'],
			platforms: ['NES'],
			releases: [
				{platforms: [], regions: ['JP'], date: '1988-12-02'},
				{platforms: [], regions: ['NA'], date: '1989-04-xx'}
			]
		});
	});

	it('M.C. Kids', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/M.C._Kids', 'M.C. Kids', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/89/M.C._Kids_cover.png',
			description: "M.C. Kids is a 1992 platform video game developed and published by Virgin Interactive. It was initially released for the Nintendo Entertainment System in February 1992 in North America, and by Ocean Software in May 1993 in Europe. As a licensed product for the McDonald's fast food restaurant chain, the game stars two children named Mack and Mick who venture into the fantasy world of McDonaldland in order to return Ronald McDonald's magical bag which has been stolen by the Hamburglar. The game was created by four people in eight months: Darren Bartlett (art and level design) Gregg Iz-Tavares and Dan Chang (programming) and Charles Deenen (audio).\n" +
				'\n' +
				"M.C. Kids was ported to the Commodore 64, Amiga, Atari ST and MS-DOS as McDonaldland which was only sold in Europe. The NES release in Europe had the same name as the home computer ports. A different version of the game was published for the Game Boy also called McDonaldland; outside of Europe it was re-themed for the Cool Spot franchise and released as Spot: The Cool Adventure. Virgin would later make another McDonald's-themed video game titled Global Gladiators, which was released in 1992.",
			developers: ['Arc Developments', 'Miracle Games', 'Virgin Games', 'Visual Concepts'],
			publishers: ['Ocean Software', 'Virgin Games'],
			directors: [],
			producers: ['Justin Heber', 'Micheal Merren'],
			programmers: [],
			artists: ['Darren Bartlett', 'Dean Lee', 'Debbie Sorrell', 'Jon Harrison'],
			writers: [],
			composers: ['Andi McGinty', 'Charles Deenen', 'Henry Jackman', 'John Loose'],
			designers: ['Cary Hammer', 'Darren Bartlett', 'Gregg Iz-Tavares'],
			genres: ['Platformer'],
			modes: ['multiplayer', 'single-player'],
			platforms: ['Amiga', 'Atari ST', 'Commodore 64', 'Game Boy', 'MS-DOS', 'NES'],
			releases: [
				{platforms: ['NES'], regions: ['NA'], date: '1992-02-xx'},
				{platforms: ['PC'], regions: ['NA'], date: '1992-02-xx'},
				{platforms: ['Amiga', 'Commodore 64', 'Game Boy'], regions: ['EU'], date: '1992-xx-xx'},
				{platforms: ['NES'], regions: ['EU'], date: '1993-05-19'},
				{platforms: ['Atari ST'], regions: ['EU'], date: '1993-xx-xx' },
				{platforms: ['PC'], regions: ['EU'], date: '1993-xx-xx'}
			]
		});
	});

	it('RoboCop 3', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/RoboCop_3_(video_game)', 'RoboCop 3', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/47/RoboCop_3_game_cover_art.jpg',
			description: 'RoboCop 3 is a video game based on the 1993 film of the same name. Amiga, Atari ST and DOS versions were developed by Digital Image Design beginning in September 1990, and published by Ocean Software in December 1991. The Digital Image Design version includes multiple gameplay styles. During 1992 and 1993, other versions consisting of side-scrolling platform gameplay were released for the Commodore 64, ZX Spectrum, NES, Super NES, Game Gear, Master System, and Sega Genesis.',
			developers: ['Digital Image Design', 'Probe Software'],
			publishers: [
				'Flying Edge',
				'Ocean Software',
			],
			directors: [],
			producers: [],
			programmers: ['Allan Shortt', 'Grant Harrison', 'Simon Nicol'],
			artists: [],
			writers: [],
			composers: ['Jeroen Tel', 'Jonathan Dunn', 'Matt Furniss'],
			designers: [],
			genres: ['Platformer', 'Shooter'],
			modes: ['single-player'],
			platforms: [
				'Amiga',
				'Atari ST',
				'Commodore 64',
				'DOS',
				'Game Gear',
				'Genesis',
				'Master System',
				'NES',
				'SNES',
				'ZX Spectrum'
			],
			releases: []
		});
	});

	it('Bad Street Brawler', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Bad_Street_Brawler', 'Bad Street Brawler', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e9/Bad_Street_Brawler_cover.png',
			description: "Bad Street Brawler, originally released for home computers as Bop'n Rumble in North America and as Street Hassle in Europe, is a 1987 video game by Beam Software. Versions were released for the ZX Spectrum and Commodore 64 and MS-DOS by Melbourne House and Mindscape with a NES version following in 1989. The NES version was one of only two NES games specifically designed for use with Mattel's Power Glove.",
			developers: ['Beam Software'],
			publishers: ['Mattel', 'Melbourne House', 'Mindscape'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Gavan Anderson', 'Tania Smith'],
			designers: [],
			genres: ["Beat 'em up"],
			modes: ['single-player'],
			platforms: ['Commodore 64', 'MS-DOS', 'NES', 'ZX Spectrum'],
			releases: [
				{ platforms: [], regions: [], date: '1987-xx-xx' }
			]
		});
	});

	it('Bram Stoker\'s Dracula', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Bram_Stoker%27s_Dracula_(video_game)', 'Bram Stoker\'s Dracula', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1a/DraculaSNES_boxart.jpg',
			description: "Bram Stoker's Dracula is a 1993 video game released for the Mega Drive/Genesis, Nintendo Entertainment System, Super NES, Game Boy, Master System, Sega CD, Game Gear, MS-DOS and Amiga games consoles. Based on the 1992 movie of the same name which in turn is based on the 1897 novel by Bram Stoker, each version of the game was essentially identical (except for the Sega CD, Amiga and MS-DOS versions). The Amiga version was released in 1994 for North America and Europe. A CD-ROM version for DOS was released in 1995.",
			developers: [
				'Probe Software',
				'Psygnosis',
				"Traveller's Tales"
			],
			publishers: ['Psygnosis', 'Sony Imagesoft'],
			directors: [],
			producers: ['Richard Robinson', 'Steven Riding'],
			programmers: ['Chris Stanforth', 'David Dootson'],
			artists: ['Andy Ingram', 'Gary Burley', 'Jeff Bramfitt', 'Mark Stokle'],
			writers: [],
			composers: ['Andy Brock', 'Jeroen Tel', 'Matt Furniss', 'Mike Clarke'],
			designers: [],
			genres: [
				'2D',
				'Action',
				'Adventure',
				'First-person',
				'Platformer',
				'Shooter',
			],
			modes: ['single-player'],
			platforms: [
				'Amiga',
				'Game Boy',
				'Game Gear',
				'Genesis',
				'MS-DOS',
				'Master System',
				'Mega Drive',
				'NES',
				'SNES',
				'Sega CD'
			],
			releases: [
				{platforms: [], regions: [], date: '1993-09-xx'},
				{platforms: ['Amiga'], regions: [], date: '1994-xx-xx'},
				{platforms: ['MS-DOS', 'PC'], regions: [], date: '1995-xx-xx'}
			]
		});
	});

	it('Tag Team Wrestling', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Tag_Team_Wrestling', 'Tag Team Wrestling', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/df/Tag-TeamWrestling_arcadeflyer.png',
			description: 'Tag Team Wrestling, known as The Big Pro Wrestling! in Japan, is a wrestling video game developed by Technōs Japan and released for arcades in 1983. The arcade version was published by Data East both in Japan and North America, but only the North American version mentions the name of Data East in-game. It was later ported in the mid-1980s to computers and the Famicom/NES.',
			developers: ['Data East', 'Quicksilver Software', 'Sakata SAS', 'Technōs Japan'],
			publishers: ['Data East', 'Namco', 'U.S. Gold', 'US computers'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: [],
			genres: ['Fighting', 'Sports',  'Wrestling'],
			modes: ['alternating', 'multiplayer', 'single-player'],
			platforms: ['Apple II', 'Arcade', 'Commodore 64', 'IBM PC', 'NES'],
			releases: [
				{platforms: [], regions: ['JP'], date: '1983-12-20'},
				{platforms: [], regions: ['NA'], date: '1984-01-xx'}
			]
		});
	});

	it('Karnov', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Karnov', 'Karnov', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/ea/Karnov_game_flyer.png',
			description: `Karnov (カルノフ) is a platform game released in arcades in 1987. A Nintendo Entertainment System port followed. Players take control of the title character Jinborov Karnovski, or "Karnov" for short. Karnov is a strongman popularly illustrated as being from an unspecified part of the Soviet Union's Central Asian republics as shown on the arcade flyer and again in Karnov's Revenge.\n` +
				'\n' +
				"As a character created by Data East, Karnov was reintroduced in several other games from the company, including Bad Dudes Vs. DragonNinja in which he is a boss in the first level. Karnov later appeared in the 1994 Neo-Geo game Karnov's Revenge. This game, also known as Fighter's History Dynamite, is not a sequel to the original Karnov, but to Fighter's History, a competitive one-on-one fighter in which Karnov is the final boss.",
			developers: [
				'Data East',
				'Mr. Micro/Software Studios',
				'Quicksilver Software',
				'Sakata SAS',
				'Software Studios',
				'Technology Works'
			],
			publishers: ['Data East', 'Electric Dreams', 'Namco'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: [],
			genres: ['Platformer'],
			modes: ['alternating', 'multiplayer', 'single-player'],
			platforms: [
				'Amstrad CPC',
				'Commodore 64',
				'IBM PC',
				'Mac OS',
				'NES',
				'ZX Spectrum'
			],
			releases: [
				{platforms: ['NES'], regions: ['JP'], date: '1987-12-18'},
				{platforms: ['Arcade'], regions: [], date: '1987-xx-xx'},
				{platforms: ['NES'], regions: ['NA'], date: '1988-01-22'}
			]
		});
	});

	it('Disney\'s The Jungle Book', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/The_Jungle_Book_(video_game)', 'Disney\'s The Jungle Book', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Jungle_Book_game_cover.jpg',
			description: "Disney's The Jungle Book is a series of platform video games based on the 1967 Disney animated film of the same name. The game was released by Virgin Interactive Entertainment in 1994 for the Game Boy, NES, Master System, Sega Genesis/Mega Drive, Sega Game Gear, Super NES, and PC, and a remake for the Game Boy Advance was released in 2003 to celebrate the film's sequel, The Jungle Book 2. While gameplay is the same on all versions, technological differences between the systems forced changes – in some case drastic – in level design, resulting in six fairly different versions of the 'same' game. This article is largely based upon the Genesis version.",
			developers: ['Eurocom'],
			publishers: ['Virgin Games'],
			directors: [],
			producers: ['Hugh Binns', 'Patrick Gilmore', 'Robb Alvey'],
			programmers: ['Tim Rogers', 'Tim Swann'],
			artists: [
				'Adrian Mannion',
				'Colin Garratt',
				'Steve Bedser',
				'Steve Wilding'
			],
			writers: [],
			composers: ['Mark Miller', 'Tommy Tallarico'],
			designers: [
				'Bill Anderson',
				'David Bishop',
				'David Perry',
				'Erik Yuteo',
				'Julian Rignall',
				'Robb Alvey'
			],
			genres: ['Platformer'],
			modes: ['single-player'],
			platforms: [
				'Game Boy',
				'Game Boy Advance',
				'Game Gear',
				'Genesis',
				'Master System',
				'NES',
				'PC',
				'SNES'
			],
			releases: [
				{platforms: ['Game Gear'],regions: ['NA'],date: '1994-01-xx'},
				{platforms: ['SNES'], regions: ['EU'], date: '1994-07-15'},
				{platforms: ['Genesis'], regions: ['EU'], date: '1994-07-xx'},
				{platforms: ['Genesis'], regions: ['NA'], date: '1994-07-xx'},
				{platforms: ['NES'], regions: ['EU'], date: '1994-08-25'},
				{platforms: ['Game Boy'],regions: ['NA'],date: '1994-08-xx'},
				{platforms: ['NES'], regions: ['NA'], date: '1994-08-xx'},
				{platforms: ['SNES'], regions: ['NA'], date: '1994-08-xx'},
				{platforms: ['SNES'], regions: ['JP'], date: '1994-09-xx'},
				{platforms: ['Game Boy'],regions: ['EU'],date: '1994-xx-xx'},
				{platforms: ['Game Gear'],regions: ['EU'],date: '1994-xx-xx'},
				{platforms: ['Master System'],regions: ['EU'],date: '1994-xx-xx'}
			]
		});
	});

	it('Cliffhanger', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Cliffhanger_(video_game)', 'Cliffhanger', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/fd/NesCliffhanger.jpg',
			description: "Cliffhanger is a beat 'em up, platform game that was released on October 17, 1993 based on the film of the same name.",
			developers: ['Malibu Interactive', 'Spidersoft'],
			publishers: ['Psygnosis', 'Sony Imagesoft'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [
				'Brian Howarth',
				'Dave Lowe',
				'Eric Hammond',
				'Graham Gray',
				'Mark Cooksey',
				'Martin Walker'
			],
			designers: [],
			genres: ["Beat 'em up", 'Platformer'],
			modes: ['single-player'],
			platforms: [
				'Amiga',
				'Game Boy',
				'Game Gear',
				'Genesis',
				'NES',
				'SNES',
				'Sega CD'
			],
			releases: [
				{platforms: [], regions: ['NA'], date: '1993-10-xx'},
				{platforms: [], regions: ['NA'], date: '1993-11-17'},
				{platforms: [], regions: ['NA'], date: '1993-12-xx'},
				{platforms: [], regions: ['NA'], date: '1994-xx-xx'},
				{platforms: [], regions: ['UK'], date: '1994-xx-xx'}
			]
		});
	});

	it('Wayne\'s World', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Wayne%27s_World_(video_game)', 'Wayne\'s World', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Wayne%27s_World_SNES.jpg',
			description: "Wayne's World is an action video game based on the film of the same name and released in 1993 by THQ. Different versions of the game were released;  the NES and Game Boy games were developed by Radical Entertainment and feature both protagonists Wayne and Garth as playable characters. The Super NES and Sega Mega Drive/Genesis games were developed by Gray Matter and feature only Wayne as a playable character.",
			developers: [
				'Gray Matter',
				'Radical Entertainment',
				'Robert Fiorini & Associates'
			],
			publishers: ['Capstone Software', 'THQ'],
			directors: [],
			producers: [],
			programmers: ['Chris Lippmann', 'Johan Thornton'],
			artists: ['Ed Konyha'],
			writers: [],
			composers: ['Nick Eastridge', 'Paul Wilkinson', 'Peter Stone', 'Rob Wallace'],
			designers: ['David Bright', 'Ed Konyha', 'Johan Thornton'],
			genres: ['2D', 'Action', 'Platformer'],
			modes: ['single-player'],
			platforms: ['DOS', 'Game Boy', 'Genesis', 'Mega Drive', 'NES', 'SNES'],
			releases: [
				{platforms: ['Genesis', 'Mega Drive'], regions: ['NA'], date: '1993-02-18'},
				{platforms: ['SNES'], regions: ['NA'], date: '1993-04-xx'},
				{platforms: ['Game Boy', 'NES'], regions: ['NA'], date: '1993-11-xx'},
				{platforms: ['SNES'], regions: ['EU'], date: '1993-xx-xx'}
			]
		});
	});

	it('Nigel Mansell\'s World Championship Racing', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Nigel_Mansell%27s_World_Championship_Racing', 'Nigel Mansell\'s World Championship Racing', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/93/Nigel_Mansell%27s_World_Championship_Racing_Cover.jpg',
			description: "Nigel Mansell's World Championship Racing is an arcade-style formula one racing video game developed by Gremlin Graphics and released for various systems. The game was largely successful on Amiga and DOS, and was ported to other home consoles.",
			developers: ['Gremlin Interactive'],
			publishers: [
				'GameTek',
				'Gremlin Interactive',
				'Infocom',
				'Konami',
				'Nintendo'
			],
			directors: [],
			producers: ['Mark Glossop'],
			programmers: ['Damian Hibbard', 'Graeme Ing', 'Michael Hirst'],
			artists: ['Damon Godley'],
			writers: [],
			composers: ['Pat Phelan', 'Richard Ede'],
			designers: ['Matt Donkin'],
			genres: ['Racing', 'Sports'],
			modes: ['single-player'],
			platforms: [
				'Amiga', 'Amiga CD32',
				'Amstrad CPC', 'Atari ST',
				'Game Boy', 'Genesis',
				'MS-DOS', 'NES',
				'SNES', 'ZX Spectrum'
			],
			releases: [
				{platforms: ['Game Boy'], regions: ['EU'], date: '1992-xx-xx'},
				{platforms: ['SNES'], regions: ['JP'], date: '1993-03-19'},
				{platforms: ['SNES'], regions: ['NA'], date: '1993-07-01'},
				{platforms: ['Game Boy'], regions: ['NA'], date: '1993-08-xx'},
				{platforms: ['NES'], regions: ['NA'], date: '1993-10-xx'},
				{platforms: ['Genesis'], regions: ['NA'], date: '1993-11-xx'},
				{platforms: ['SNES'], regions: ['EU'], date: '1993-12-16'},
				{platforms: ['NES'], regions: ['EU'], date: '1993-xx-xx'},
				{platforms: ['Genesis'], regions: ['EU'], date: '1994-xx-xx'}
			]
		});
	});

	it('The Legend of Kage', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/The_Legend_of_Kage', 'The Legend of Kage', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/13/Kageflyer.jpg',
			description: 'The Legend of Kage (影の伝説, Kage no Densetsu) is a side-scrolling hack-and-slash action game developed and released by Taito for arcades in 1985. It was ported for several contemporary video game home systems in the following years.',
			developers: ['Imagine Software', 'Taito'],
			publishers: ['Imagine Software', 'Square Enix', 'Taito'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Hisayoshi Ogura'],
			designers: [],
			genres: ['Action', "Beat 'em up", 'Hack-and-slash'],
			modes: ['single-player'],
			platforms: [
				'Amstrad CPC',
				'Arcade',
				'Commodore 64',
				'Famicom',
				'MSX',
				'NES',
				'Sharp X1',
				'ZX Spectrum'
			],
			releases: [
				{platforms: ['Arcade'], regions: ['JP'], date: '1985-08-10'},
				{platforms: ['Arcade'], regions: ['EU'], date: '1985-xx-xx'},
				{platforms: ['Arcade'], regions: ['NA'], date: '1986-01-xx'},
				{platforms: ['Famicom', 'NES'],regions: ['JP'],date: '1986-04-18'},
				{platforms: ['Commodore 64'],regions: ['EU'],date: '1986-12-xx'},
				{platforms: ['MSX'], regions: ['JP'], date: '1986-xx-xx'},
				{platforms: ['Famicom', 'NES'],regions: ['NA'],date: '1987-08-xx'},
				{platforms: ['Commodore 64'],regions: ['NA'],date: '1987-xx-xx'}
			]
		});
	});

	it('Home Alone', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Home_Alone_(video_game)', 'Home Alone', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/57/HomeAlone1game.jpg',
			description: 'Home Alone is the title of several tie-in video games based on the film of the same name. Versions were released for the Nintendo Entertainment System, Game Boy, Super Nintendo Entertainment System, Master System, Sega Genesis, Game Gear, Amiga and MS-DOS platforms.',
			developers: [
				'Bethesda Softworks',
				'Imagineering',
				'Manley & Associates',
				'Probe Entertainment',
				'Sega'
			],
			publishers: ['Altron', 'Capstone Software', 'Sega', 'THQ'],
			directors: ['Ivan Manley'],
			producers: [],
			programmers: [
				'Alex DeMeo',
				'David Lubar',
				'Garry Kitchen',
				'George Stults',
				'Jim McManus',
				'John McKinnie',
				'Paul Coletta',
				'Randy Linden'
			],
			artists: ['Bob Hires', 'Jonathan Sposato', 'Mike Sullivan', 'Nancy Freeman'],
			writers: [],
			composers: [
				'Cliff Falls',
				'George Sanger',
				'Mark Van Hecke',
				'Matt Furniss',
				'Rolf Weber',
				'Tom McMail'
			],
			designers: [
				'Alex DeMeo',
				'Barry Marx',
				'Dave Albert',
				'Ivan Manley',
				'Paul Coletta',
				'Randy Linden'
			],
			genres: ['Action'],
			modes: ['single-player'],
			platforms: [
				'Amiga',
				'Game Boy',
				'Game Gear',
				'Genesis',
				'MS-DOS',
				'Master System',
				'NES',
				'SNES'
			],
			releases: [
				{platforms: ['NES'], regions: ['NA'], date: '1991-10-xx'},
				{platforms: ['Game Boy'], regions: ['NA'], date: '1991-11-xx'},
				{platforms: ['SNES'], regions: ['NA'], date: '1991-12-xx'},
				{platforms: ['Amiga'], regions: ['EU'], date: '1991-xx-xx'},
				{platforms: ['MS-DOS'], regions: ['NA'], date: '1991-xx-xx'},
				{platforms: ['SNES'], regions: ['PAL'], date: '1992-01-01'},
				{platforms: ['Game Boy'], regions: ['JP'], date: '1992-06-26'},
				{platforms: ['SNES'], regions: ['JP'], date: '1992-08-11'},
				{platforms: ['Game Gear', 'Genesis', 'Mega Drive'], regions: ['NA'], date: '1992-xx-xx'},
				{platforms: ['Game Gear', 'Genesis', 'Mega Drive'], regions: ['PAL'], date: '1992-xx-xx'}
			]
		});
	});

	it('Alex Demeo\'s Race America', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Race_America', 'Alex Demeo\'s Race America', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/37/Race_America_Cover.jpg',
			description: "Alex DeMeo's Race America (also known in Europe as Corvette ZR-1 Challenge) is a racing video game for the Nintendo Entertainment System. The European version received the Chevrolet license to use its Corvette ZR-1 vehicles while those in the North American version had to be redesigned into vehicles that strongly resembled Dodge Vipers.",
			developers: ['Imagineering'],
			publishers: ['Absolute Entertainment', 'Milton Bradley Company'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Mark Van Hecke'],
			designers: ['Alex DeMeo'],
			genres: ['Arcade', 'Racing', 'Sports'],
			modes: ['multiplayer', 'single-player'],
			platforms: ['NES'],
			releases: [
				{platforms: [], regions: ['EU'], date: '1990-xx-xx'},
				{platforms: [], regions: ['NA'], date: '1992-05-xx'}
			]
		});
	});

	it('Stealth ATF', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Stealth_ATF', 'Stealth ATF', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/23/Stealth_ATF2.jpg',
			description: "Stealth ATF is a stealth fighter video game released by Activision in 1989 for the Nintendo Entertainment System. The object of the game is to take out aircraft that are trying to destroy the player's stealth fighter. The game supports up to two players.",
			developers: ['Imagineering'],
			publishers: ['Activision', 'Nintendo'],
			directors: ['Garry Kitchen'],
			producers: ['Tom Sloper'],
			programmers: ['Rob Harris'],
			artists: ['Jesse Kapili'],
			writers: [],
			composers: ['Russell Lieblich'],
			designers: ['Rob Harris'],
			genres: ['First-person', 'Flight simulator', 'Simulation', 'Third-person'],
			modes: ['multiplayer', 'single-player'],
			platforms: ['NES'],
			releases: [
				{platforms: [], regions: ['NA'], date: '1989-10-xx'},
				{platforms: [], regions: ['PAL'], date: '1990-xx-xx'}
			]
		});
	});

	it('Déjà Vu', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/D%C3%A9j%C3%A0_Vu_(video_game)', 'Déjà Vu', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6a/Deja_Vu_cover.png',
			description: 'Déjà Vu is a point and click adventure game set in the world of 1940s hardboiled detective novels and movies. It was released in 1985 for Macintosh – the first in the MacVenture series – and later ported to several other systems, including the Amiga. Initially, the game featured black and white graphics, and later releases introduced color.',
			developers: ['ICOM Simulations, Inc.'],
			publishers: ['Kemco', 'Mindscape'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [
				'Hiroyuki Masuno',
				"Kento's Group",
				'Koji Nishikawa',
				'Masaomi Miura'
			],
			designers: [],
			genres: ['Adventure'],
			modes: ['single-player'],
			platforms: [
				'Amiga', 'Apple IIGS',
				'Atari ST', 'Commodore 64',
				'Famicom', 'Game Boy Color',
				'MS-DOS', 'Mac OS',
				'NES', 'PC-9801',
				'PlayStation 4', 'Pocket PC',
				'Windows', 'Xbox One'
			],
			releases: [
				{platforms: ['Mac OS'], regions: ['NA'], date: '1985-10-xx'},
				{platforms: ['MS-DOS'], regions: ['NA'], date: '1987-xx-xx'},
				{platforms: ['Famicom'], regions: ['JP'], date: '1988-xx-xx'},
				{platforms: ['NES'], regions: ['NA'], date: '1990-xx-xx'},
				{platforms: ['Windows'], regions: ['NA'], date: '1991-xx-xx'},
				{platforms: ['NES'], regions: ['PAL'], date: '1992-xx-xx'}
			]
		});
	});

	it('Shadowgate', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Shadowgate', 'Shadowgate', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b0/Shadowgate_Coverart.png',
			description: 'Shadowgate is a black-and-white 1987 point-and-click adventure video game originally for the Apple Macintosh in the MacVenture series. The game is named for its setting, Castle Shadowgate, residence of the evil Warlock Lord. The player, as the "last of a great line of hero-kings" is charged with the task of saving the world by defeating the Warlock Lord, who is attempting to summon up the demon Behemoth out of Hell. Later that year, a color version of the game was released for the Amiga and Atari ST, and in 1989 for the Nintendo Entertainment System.',
			developers: ['ICOM Simulations, Inc.'],
			publishers: ['Kemco * Seika', 'Mindscape'],
			directors: ['Dave Marsh', 'Karl Roelofs'],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Hiroyuki Masuno', "Kento's Group"],
			designers: [],
			genres: ['Adventure'],
			modes: ['single-player'],
			platforms: [
				'Amiga', 'Apple IIGS',
				'Atari ST', 'DOS',
				'Game Boy Color', 'Mobile phone',
				'NES', 'Nintendo Switch',
				'Palm OS', 'PlayStation 4',
				'Pocket PC', 'Virtual Console',
				'Windows', 'Xbox One'
			],
			releases: [
				{platforms: ['Mac OS'], regions: ['NA'], date: '1987-07-30'},
				{platforms: ['Amiga'], regions: ['NA'], date: '1987-xx-xx'},
				{platforms: ['DOS'], regions: ['NA'], date: '1988-xx-xx'},
				{platforms: ['NES'], regions: ['JP'], date: '1989-03-31'},
				{platforms: ['NES'], regions: ['NA'], date: '1989-12-xx'},
				{platforms: ['NES'], regions: ['PAL'], date: '1991-05-30'},
				{platforms: ['Windows'], regions: ['EU'], date: '1993-xx-xx'},
				{platforms: ['Windows'], regions: ['NA'], date: '1993-xx-xx'},
				{platforms: ['Game Boy Color'], regions: ['NA'], date: '1999-01-xx'},
				{platforms: ['Game Boy Color'], regions: ['JP'], date: '1999-08-13'},
				{platforms: ['Pocket PC'], regions: ['NA'], date: '2002-xx-xx'},
				{platforms: ['NES'], regions: ['JP'], date: '2014-04-30'},
				{platforms: ['PlayStation 4'], regions: ['NA'], date: '2017-10-xx'}
			]
		});
	});

	it('Uninvited', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Uninvited_(video_game)', 'Uninvited', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d7/Uninvited_cover.png',
			description: 'Uninvited is a horror-themed point-and-click adventure game developed originally for the Macintosh by ICOM Simulations released in 1986 by Mindscape.\n' +
				'\n' +
				"The game uses the MacVenture engine that was introduced in ICOM's prior game, Deja Vu: a Nightmare Comes True.",
			developers: ['ICOM Simulations, Inc.'],
			publishers: ['Kemco', 'Mindscape'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Hiroyuki Masuno', "Kento's Group"],
			designers: [],
			genres: ['Adventure'],
			modes: ['single-player'],
			platforms: [
				'Amiga',
				'Apple IIGS',
				'Atari ST',
				'Commodore 64',
				'MS-DOS',
				'Mac OS',
				'NES',
				'Pocket PC',
				'Windows'
			],
			releases: [
				{platforms: ['Mac OS'], regions: [], date: '1986-xx-xx'},
				{platforms: ['Amiga', 'Atari ST', 'MS-DOS'], regions: [],date: '1987-xx-xx'},
				{platforms: ['Apple IIGS'], regions: [], date: '1988-xx-xx'},
				{platforms: ['Famicom'], regions: [], date: '1989-xx-xx'},
				{platforms: ['NES'], regions: [], date: '1991-xx-xx'},
				{platforms: ['Windows'], regions: [], date: '1993-xx-xx'}
			]
		});
	});

	it('Harlem Globetrotters', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Harlem_Globetrotters_(video_game)', 'Harlem Globetrotters', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f6/Harlem_Globetrotters_cover.jpg',
			description: 'Harlem Globetrotters is a multiplatform sports video game for the Nintendo Entertainment System and MS-DOS. The game allows players to control the Harlem Globetrotters basketball team. A Sega Mega Drive conversion was planned but never released.',
			developers: ['Softie, Inc.'],
			publishers: ['GameTek'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Rob Wallace'],
			designers: ['Bruce Sandig'],
			genres: ['Sports'],
			modes: ['multiplayer', 'single-player'],
			platforms: ['MS-DOS', 'NES'],
			releases: [
				{platforms: ['MS-DOS'], regions: ['NA'], date: '1990-xx-xx'},
				{platforms: ['NES'], regions: ['NA'], date: '1991-03-xx'}
			]
		});
	});

	it('Total Recall', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Total_Recall_(video_game)', 'Total Recall', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6e/Total_Recall_%28video_game%29_%28Cover%29.jpg',
			description: 'Total Recall is a 1990 platform game developed and published by Ocean Software that was released for the Commodore 64, Amiga, Amstrad CPC, ZX Spectrum, and Nintendo Entertainment System. Total Recall is based on the 1990 film of the same name.',
			developers: ['Interplay Entertainment', 'Ocean Software'],
			publishers: ['Acclaim Entertainment', 'Ocean Software'],
			directors: [],
			producers: [],
			programmers: ['Alan Pavlish', 'Michael Quarles'],
			artists: [],
			writers: [],
			composers: ['David Warhol', 'George Sanger'],
			designers: [],
			genres: ['Platformer'],
			modes: ['single-player'],
			platforms: ['Amiga', 'Amstrad CPC', 'Commodore 64', 'NES', 'ZX Spectrum'],
			releases: [{platforms: [], regions: [], date: '1990-xx-xx'}]
		});
	});

	it('Swords and Serpents', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Swords_and_Serpents', 'Swords and Serpents', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/02/Swords_and_Serpents_cover.jpg',
			description: 'Swords and Serpents is a fantasy role-playing video game developed by Interplay Productions for the Nintendo Entertainment System. In this game, the player controls a party of four adventurers on a dungeon-crawling quest to destroy a terrible serpent. Along the way, the party encounters an onslaught of fantasy monsters and collects gold and treasure while gaining experience points needed to raise their individual attributes, as well as purchasing equipment from shops within the dungeon. Swords and Serpents focuses mainly on gameplay and contains very little plot development.\n' +
				'\n' +
				"The game was originally designed by Paul O'Connor (lead designer for Dragon Wars) but he only worked on the game for two weeks before leaving the project. Bruce Schlickbernd was assigned to revise the game design, but did not feel it was appropriate to be listed as the sole designer. Thus, there is no game designer listed within the documentation for the game.\n" +
				'\n' +
				'Boris Vallejo crafted the box art. This game has no connection to the Mattel Intellivision game of the same title.',
			developers: ['Interplay Entertainment'],
			publishers: ['Acclaim Entertainment'],
			directors: [],
			producers: [],
			programmers: [],
			artists: ['Scott Bieser', 'Todd Camasta'],
			writers: [],
			composers: ['David Warhol', 'George Sanger'],
			designers: ['Bruce Schlickbernd', "Paul O'Connor"],
			genres: ['Dungeon crawl', 'Role-playing'],
			modes: ['multiplayer', 'single-player'],
			platforms: ['NES'],
			releases: [
				{platforms: [], regions: ['NA'], date: '1990-08-xx'},
				{platforms: [], regions: ['EU'], date: '1991-11-28'}
			]
		});
	});

	it('Bubble Bobble Part 2', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Bubble_Bobble_Part_2', 'Bubble Bobble Part 2', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e2/Bubble_Bobble_Part_2_cover.jpg',
			description: 'Bubble Bobble Part 2, known in Japan as Bubble Bobble 2 (バブルボブル2) is a game in the Bubble Bobble series. While it was never released in the arcade, two versions of the game were developed independently from each other (for the NES and Game Boy formats), with each game receiving a different story line as a result. The Game Boy version is known in Japan as Bubble Bobble Junior (バブルボブルジュニア).',
			developers: ['ITL Co., Ltd.', 'OLM', 'Taito'],
			publishers: ['Taito'],
			directors: ['Takashi Shiokawa'],
			producers: [],
			programmers: ['Kenichi Hiza'],
			artists: ['Hirotogu Ichisumi', 'Yoshihisa Akashi'],
			writers: [],
			composers: ['Kenichi Kamio'],
			designers: ['Tiger Kawano', 'Yoshihisa Akashi'],
			genres: ['Platformer'],
			modes: ['multiplayer', 'single-player'],
			platforms: ['Famicom', 'Game Boy', 'NES'],
			releases: [
				{platforms: ['Famicom', 'NES'],regions: ['JP'],date: '1993-03-05'},
				{platforms: ['Game Boy'],regions: ['NA'],date: '1993-07-xx'},
				{platforms: ['Famicom', 'NES'],regions: ['NA'],date: '1993-08-xx'},
				{platforms: ['Game Boy'],regions: ['JP'],date: '1993-xx-xx'}
			]
		});
	});

	it('George Foreman\'s KO Boxing', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/George_Foreman%27s_KO_Boxing', 'George Foreman\'s KO Boxing', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b7/George_Foreman%27s_KO_Boxing_Cover.jpg',
			description: "George Foreman's KO Boxing is a boxing video game produced by Acclaim, featuring boxer George Foreman, released in 1992. Three years later, Acclaim released another game featuring Foreman, Foreman For Real.",
			developers: ['Beam Software', 'SIMS Co., Ltd.'],
			publishers: ['Acclaim Entertainment', 'Flying Edge'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Andrew Bailey', 'Marshall Parker'],
			designers: ['Graeme Scott'],
			genres: ['Fighting', 'Sports'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Game Boy',
				'Game Gear',
				'Genesis',
				'Master System',
				'Mega Drive',
				'NES',
				'SNES',
			],
			releases: [
				{platforms: ['Genesis', 'Mega Drive'], regions: ['EU'], date: '1992-01-24'},
				{platforms: ['Genesis', 'Mega Drive'], regions: ['NA'], date: '1992-02-07'},
				{platforms: ['NES'], regions: ['EU'], date: '1992-04-03'},
				{platforms: ['SNES'], regions: ['NA'], date: '1992-09-xx'},
				{platforms: ['NES'], regions: ['NA'], date: '1992-12-11'}
			]

		});
	});

	it('Donkey Kong', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Donkey_Kong_(video_game)', 'Donkey Kong', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/14/Donkey_Kong_flier.jpg',
			description: 'Donkey Kong is an arcade platform game released by Nintendo in 1981. Its gameplay maneuvers Mario across platforms to ascend a construction site and rescue Pauline from the giant gorilla named Donkey Kong, all while avoiding or jumping over obstacles. It is the first game in both the Donkey Kong and Mario franchises.\n' +
				'\n' +
				"Donkey Kong is the product of Nintendo's increasingly desperate efforts to develop a hit to rival Pac-Man (1980) and break into the North American market. Hiroshi Yamauchi, Nintendo's president at the time, assigned the project to first-time video game designer Shigeru Miyamoto. Drawing from a wide range of inspirations including Popeye, Beauty and the Beast, and King Kong, Miyamoto developed the scenario and designed the game alongside chief engineer Gunpei Yokoi. They broke new ground by using graphics as a means of characterization, including cutscenes to advance the game's plot and integrating multiple stages into the gameplay.\n" +
				'\n' +
				"Although Nintendo's American staff was initially apprehensive, Donkey Kong succeeded commercially and critically in Japan and North America, where it became the highest-grossing arcade game of 1981 and 1982, respectively. Nintendo licensed the game to Coleco, a developer of arcade conversions for several home consoles, selling six million cartridges. Other companies cloned the game and avoided royalties altogether.  Miyamoto's characters were mass marketed in multitudes of products, including breakfast cereal, toys, and television cartoons. Universal City Studios filed a lawsuit alleging Donkey Kong violated its trademark of King Kong, ultimately failing.\n" +
				'\n' +
				"The phenomenal success of Donkey Kong positioned the company for market dominance from 1981 through the late 1990s. The game debuts Mario, who became Nintendo's mascot and one of the world's most recognizable characters. Donkey Kong is a pioneer of the platform game genre, one of the most important games from the golden age of arcade video games, and one of the most popular arcade games of all time.",
			developers: ['Ikegami Tsushinki', 'Nintendo R&D1'],
			publishers: ['Nintendo'],
			directors: ['Shigeru Miyamoto'],
			producers: ['Gunpei Yokoi'],
			programmers: [],
			artists: ['Shigeru Miyamoto'],
			writers: [],
			composers: ['Yukio Kaneoka'],
			designers: ['Gunpei Yokoi', 'Shigeru Miyamoto'],
			genres: ['Platformer'],
			modes: ['single-player'],
			platforms: [
				'Amstrad CPC', 'Apple II',
				'Arcade', 'Atari 2600',
				'Atari 7800', 'Atari 8-bit',
				'Coleco Mini-arcade', 'ColecoVision',
				'Commodore 64', 'Famicom',
				'Game & Watch', 'Game Boy Advance',
				'IBM PC', 'Intellivision',
				'MSX', 'NES',
				'Nintendo e-Reader', 'TI-99/4A',
				'VIC-20', 'ZX Spectrum'
			],
			releases: [
				{platforms: ['Game & Watch'],regions: ['JP'],date: '1982-06-03'},
				{platforms: ['Atari 2600'],regions: ['NA'],date: '1982-07-xx'},
				{platforms: ['Coleco Mini-arcade'],regions: ['NA'],date: '1982-08-xx'},
				{platforms: ['ColecoVision'],regions: ['NA'],date: '1982-08-xx'},
				{platforms: ['Intellivision'],regions: ['NA'],date: '1982-08-xx'},
				{platforms: ['Atari 8-bit'],regions: ['NA'],date: '1983-06-01'},
				{platforms: ['Famicom', 'NES'],regions: ['JP'],date: '1983-07-15'},
				{platforms: ['Commodore 64'],regions: ['NA'],date: '1983-xx-xx'},
				{platforms: ['IBM PC'], regions: ['NA'], date: '1983-xx-xx'},
				{platforms: ['TI-99/4A'],regions: ['NA'],date: '1983-xx-xx'},
				{platforms: ['VIC-20'], regions: ['NA'], date: '1983-xx-xx'},
				{platforms: ['Famicom', 'NES'],regions: ['NA'],date: '1986-06-01'},
				{platforms: ['Famicom', 'NES'],regions: ['EU'],date: '1986-10-15'},
				{platforms: ['Amstrad CPC'],regions: ['EU'],date: '1986-xx-xx'},
				{platforms: ['Commodore 64'],regions: ['EU'],date: '1986-xx-xx'},
				{platforms: ['MSX'], regions: ['EU'], date: '1986-xx-xx'},
				{platforms: ['ZX Spectrum'],regions: ['EU'],date: '1986-xx-xx'},
				{platforms: ['Famicom Disk System'],regions: ['JP'],date: '1988-04-08'},
				{platforms: ['Atari 7800'],regions: ['NA'],date: '1988-xx-xx'},
				{platforms: ['Nintendo e-Reader'],regions: ['NA'],date: '2002-11-11'},
				{platforms: ['Game Boy Advance'],regions: ['JP'],date: '2004-02-14'},
				{platforms: ['Game Boy Advance'],regions: ['NA'],date: '2004-06-07'},
				{platforms: ['Game Boy Advance'],regions: ['EU'],date: '2004-07-10'}
			]
		});
	});

	it('Hogan\'s Alley', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Hogan%27s_Alley_(video_game)', 'Hogan\'s Alley', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/12/Hogan%27s_Alley_Cover.jpg',
			description: `Hogan's Alley is a light gun shooter video game by Nintendo, released for the Nintendo Entertainment System in 1984 and then the arcade Nintendo VS. System in 1985. It was one of the first games to use a light gun as an input device. The game presents players with "cardboard cut-outs" of gangsters and innocent civilians. The player must shoot the gangs and spare the innocent people.`,
			developers: ['Intelligent Systems', 'Nintendo R&D1'],
			publishers: ['Nintendo'],
			directors: ['Shigeru Miyamoto'],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Hirokazu Tanaka'],
			designers: ['Shigeru Miyamoto'],
			genres: ['Light gun', 'Shooter'],
			modes: ['single-player'],
			platforms: ['Arcade', 'Famicom', 'NES'],
			releases: [
				{platforms: ['Famicom', 'NES'], regions: ['JP'], date: '1984-06-12'},
				{platforms: ['Arcade'], regions: ['JP'], date: '1985-03-01'},
				{platforms: ['Arcade'], regions: ['NA'], date: '1985-04-xx'},
				{platforms: ['Arcade'], regions: ['EU'], date: '1985-08-xx'},
				{platforms: ['Famicom', 'NES'], regions: ['NA'], date: '1985-10-18'},
				{platforms: ['Famicom', 'NES'], regions: ['EU'], date: '1987-12-15'}
			]
		});
	});

	it('Devil World', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Devil_World', 'Devil World', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1d/DevilWorldBoxart.jpg',
			description: "Devil World (Japanese: デビルワールド, Hepburn: Debiru Wārudo) is a maze video game developed and published by Nintendo. It was released for the Famicom in Japan on October 5, 1984, and for the Nintendo Entertainment System in Europe on July 15, 1987. It was re-released on the Wii's Virtual Console in Japan on January 22, 2008, and in PAL regions on October 31, 2008. Due to Nintendo of America having policies over the use of religious icons in games, it was not released in North America. It is Shigeru Miyamoto's first console-only game after a legacy of arcade development, and his only game to not be localized to North America.",
			developers: ['Intelligent Systems', 'Nintendo R&D1'],
			publishers: ['Nintendo'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Akito Nakatsuka', 'Koji Kondo'],
			designers: ['Shigeru Miyamoto', 'Takashi Tezuka'],
			genres: ['Maze'],
			modes: ['multiplayer', 'single-player'],
			platforms: ['Famicom', 'NES'],
			releases: [
				{platforms: [], regions: ['JP'], date: '1984-10-05'},
				{platforms: [], regions: ['EU'], date: '1987-07-15'}
			]
		});
	});

	it('Gumshoe', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Gumshoe_(video_game)', 'Gumshoe', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/56/Gumshoebox.jpg',
			description: 'Gumshoe is a video game developed and published by Nintendo for the NES and released in 1986 in North America and in 1988 in Europe. Gumshoe is played using the NES Zapper. The game was designed by Yoshio Sakamoto, and is the first video game published by Nintendo to not be released in Japan.',
			developers: ['Nintendo R&D1'],
			publishers: ['Nintendo'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Hirokazu Tanaka'],
			designers: ['Yoshio Sakamoto'],
			genres: ['Platformer', 'Shooter'],
			modes: ['single-player'],
			platforms: ['Arcade', 'Famicom', 'NES'],
			releases: [
				{platforms: [], regions: ['NA'], date: '1986-06-xx'},
				{platforms: [], regions: ['EU'], date: '1988-06-15'}
			]
		});
	});

	it('Donkey Kong Jr. Math', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Donkey_Kong_Jr._Math', 'Donkey Kong Jr. Math', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/88/Donkey_Kong_Jr_Math_box.jpg',
			description: 'Donkey Kong Jr. Math is a Nintendo edutainment video game where players solve math problems. It was released in Japan in 1983 for the Family Computer, in North America in 1986 for the Nintendo Entertainment System, and in 1986 in the PAL region.\n' +
				'\n' +
				"It is the only game in the Education Series of NES games in North America, owing to the game's lack of success. It was made available in various forms, including in the 2002 GameCube video game Animal Crossing and on the Virtual Console services for Wii and Wii U in 2007 and 2014 respectively. Donkey Kong Jr. Math was a critical and commercial failure. It has received criticism from several publications including IGN staff, who called it one of the worst Virtual Console games.",
			developers: ['Nintendo R&D2'],
			publishers: ['Nintendo'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: [],
			genres: ['Educational', 'Platformer'],
			modes: ['multiplayer', 'single-player'],
			platforms: ['NES'],
			releases: [
				{platforms: [], regions: ['JP'], date: '1983-12-12'},
				{platforms: [], regions: ['NA'], date: '1986-06-xx'},
				{platforms: [], regions: ['EU'], date: '1986-07-10'}
			]
		});
	});

	it('Lethal Weapon', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Lethal_Weapon_(video_game)', 'Lethal Weapon', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/18/Lethal_Weapon_Coverart.png',
			description: 'Lethal Weapon is a video game based on the film series of the same name created by Shane Black. It was developed by Ocean Software and Eurocom and released in 1992 and 1993 by Ocean and Nintendo. It was released in conjunction with Lethal Weapon 3, the third installment of the series.',
			developers: ['Eurocom', 'Ocean Software'],
			publishers: ['Nintendo', 'Ocean Software'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Barry Leitch', 'Jeroen Tel', 'Neil Baldwin'],
			designers: [],
			genres: ['Action'],
			modes: ['single-player'],
			platforms: [
				'Amiga',
				'Arcade',
				'Atari ST',
				'Commodore 64',
				'DOS',
				'Game Boy',
				'NES',
				'SNES'
			],
			releases: [
				{platforms: ['Game Boy', 'NES'], regions: [], date: '1993-xx-xx'}
			]

		});
	});

	it('Jurassic Park', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Jurassic_Park_(NES_video_game)', 'Jurassic Park', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Jurassic_Park_box_art_%28NES%29.jpg',
			description: 'Jurassic Park is a 1993 video game based on the film and novel of the same name. It was developed and published by Ocean Software and released for the Nintendo Entertainment System (NES). Ocean also ported the game onto the handheld Game Boy console.\n' +
				'\n' +
				'The object of the game is to survive in Jurassic Park, a theme park and zoo where genetically engineered dinosaurs have escaped from containment.',
			developers: ['Ocean Software'],
			publishers: ['Ocean Software'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Jon Dunn'],
			designers: [],
			genres: ['Action'],
			modes: ['single-player'],
			platforms: ['NES'],
			releases: [
				{platforms: ['NES'], regions: ['NA'], date: '1993-06-xx'},
				{platforms: ['Game Boy'], regions: ['NA'], date: '1993-08-xx'},
				{platforms: ['Game Boy'], regions: ['UK'], date: '1993-10-xx'},
				{platforms: ['NES'], regions: ['UK'], date: '1993-11-xx'}
			]
		});
	});

	it('The Uncanny X-Men', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/The_Uncanny_X-Men_(video_game)', 'The Uncanny X-Men', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/bd/The_Uncanny_X-Men_Coverart.png',
			description: "The Uncanny X-Men, sometimes referred to as Marvel's X-Men, is an action video game released by LJN for the NES in 1989. It is a licensed game based on the series of X-Men comics of the same name by Marvel Comics. The lineup of characters in the game is very close to those appearing in the 1989 animated pilot X-Men: Pryde of the X-Men.\n" +
				'\n' +
				'The Uncanny X-Men is the only title by LJN that was developed by an undisclosed external developer. It has been speculated that it was either developed by Japanese studios Bothtec or possibly Pixel. However, it has never been confirmed officially. It is also the second-to-last game to be released under the Enteractive Video Games label and the last to be released before LJN was sold to Acclaim Entertainment.',
			developers: [],
			publishers: ['LJN'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: [],
			genres: ['2D', 'Action', 'Platformer'],
			modes: ['cooperative', 'multiplayer', 'single-player'],
			platforms: ['NES'],
			releases: [{platforms: [], regions: ['NA'], date: '1989-12-xx'}]
		});
	});

	it('Hollywood Squares', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Hollywood_Squares_(video_game)', 'Hollywood Squares', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Hollywood_Squares_%28NES_video_game%29_boaxart.jpg',
			description: 'Hollywood Squares is a multiplatform puzzle game based on the television game show of the same name. Versions were also released for MS-DOS, Commodore 64 and Apple II home computers, and look a bit different from the NES counterpart. The photo of the set on both the NES and computer versions is from the 1985 series pilot (the actual show had no gold stars on the studio floor and more elaborate risers for the cars). The game is based on the 1986-1989 version hosted by John Davidson.',
			developers: ['Rare'],
			publishers: ['GameTek'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: [],
			genres: ['Puzzle'],
			modes: ['multiplayer', 'single-player'],
			platforms: ['Apple II', 'Commodore 64', 'DOS', 'NES'],
			releases: [
				{platforms: ['Commodore 64'], regions: ['NA'], date: '1988-xx-xx'},
				{platforms: ['DOS'], regions: ['NA'], date: '1988-xx-xx'},
				{platforms: ['NES'], regions: ['NA'], date: '1989-09-xx'}
			]
		});
	});

	it('Bill & Ted\'s Excellent Video Game Adventure', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Bill_%26_Ted\'s_Excellent_Video_Game_Adventure', 'Bill & Ted\'s Excellent Video Game Adventure', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/db/Bill_Ted_VG.jpg',
			description: "Bill & Ted's Excellent Video Game Adventure is an action-adventure video game that is part of the Bill & Ted franchise and is based on the film Bill & Ted's Excellent Adventure. It was released in North America by LJN for the Nintendo Entertainment System in 1991. The plot is an original continuation to the film's events.",
			developers: ['Rocket Science Production'],
			publishers: ['LJN'],
			directors: [],
			producers: [],
			programmers: ['Andrew Frank', 'Stuart Ross'],
			artists: ['Frank Lam'],
			writers: [],
			composers: [],
			designers: ['Col Stone', 'Ernie Cormier'],
			genres: ['Action', 'Adventure'],
			modes: ['single-player'],
			platforms: ['NES'],
			releases: [{platforms: [], regions: ['NA'], date: '1991-08-xx'}]
		});
	});

	it('Thundercade', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Thundercade', 'Thundercade', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/ce/ThundercadeFlyer.jpg',
			description: 'Thundercade, also known as Twin Formation and 特殊部隊UAG (Tokushu Butai U.A.G., "Special Forces U.A.G. (Un-Attached Grenadier))", is a vertically scrolling shooter developed by SETA and released as an arcade game in 1987. A version for the Nintendo Entertainment System from American Sammy was released in 1989.',
			developers: ['Micronics', 'SETA Corporation'],
			publishers: ['SETA Corporation', 'Sammy Corporation'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: [],
			genres: ['Scrolling shooter', 'Shooter'],
			modes: ['multiplayer', 'single-player'],
			platforms: ['Arcade', 'NES'],
			releases: [
				{platforms: ['Arcade'], regions: ['NA'], date: '1987-xx-xx'},
				{platforms: ['NES'], regions: ['NA'], date: '1989-07-xx'}
			]
		});
	});

	it('RoboCop 2', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/RoboCop_2_(video_game)', 'RoboCop 2', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/44/RoboCop_2_game_cover.jpg',
			description: 'RoboCop 2 is a platform shooter video game based on the 1990 film of the same name. The game was released for several platforms, including Amiga, Amstrad GX4000, Atari ST, Commodore 64, Game Boy, Nintendo Entertainment System, and ZX Spectrum. Ocean Software developed and published several versions, and Data East manufactured an arcade version.',
			developers: ['Data East', 'Ocean Software', 'Special FX Ltd.'],
			publishers: ['Ocean Software'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Jonathan Dunn'],
			designers: [],
			genres: ['Platformer', 'Shooter'],
			modes: ['single-player'],
			platforms: [
				'Amiga',
				'Amstrad GX4000',
				'Arcade',
				'Atari ST',
				'Commodore 64',
				'Game Boy',
				'NES',
				'ZX Spectrum'
			],
			releases: []
		});
	});

	it('Qix', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Qix', 'Qix', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/53/Qix_Poster.png',
			description: "Qix is a 1981 puzzle video game developed by husband and wife team Randy and Sandy Pfeiffer and published in arcades by Taito America. Qix is one of a handful of games made by Taito's American division. At the start of each level, the playing field is a large, empty rectangle, containing the Qix, a stick-like entity that performs graceful but unpredictable motions within the confines of the rectangle. The objective is to draw lines that close off parts of the rectangle to fill in a set amount of the playfield.\n" +
				'\n' +
				'Qix was ported to the contemporary Atari 5200 (1982), Atari 8-bit family (1983), and Commodore 64 (1983), then was brought to a wide variety of systems in the late 1980s and early 1990s: MS-DOS (1989), Amiga (1989), another version for the C64 (1989), Apple IIGS (1990), Game Boy (1990), Nintendo Entertainment System (1991), and Atari Lynx (1991).',
			developers: ['Taito'],
			publishers: ['Taito'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: ['Randy Pfeiffer', 'Sandy Pfeiffer'],
			genres: ['Puzzle'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Amiga', 'Apple II',
				'Apple IIGS', 'Arcade',
				'Atari 5200', 'Atari 8-bit',
				'Commodore 64', 'FM-7',
				'Game Boy', 'Lynx',
				'MS-DOS', 'Mobile phone',
				'NES'
			],
			releases: [
				{platforms: [], regions: ['NA'], date: '1981-10-18'},
				{platforms: [], regions: ['UK'], date: '1981-11-20'},
				{platforms: [], regions: ['JP'], date: '1981-11-xx'},
				{platforms: [], regions: ['AU'], date: '1982-01-07'}
			]
		});
	});

	it('Disney\'s Aladdin', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Disney%27s_Aladdin_(Virgin_Games_video_game)', 'Disney\'s Aladdin', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Aladdingenesis.jpg',
			description: "Disney's Aladdin is a platform game based on the 1992 film of the same name developed by Virgin Games USA. The game was released by Sega for the Sega Genesis on November 11, 1993 as one of several games based on the film, including another game that was released in the same month by Capcom for the Super NES.\n" +
				'\n' +
				'The game is one of the best-selling Genesis games with four million copies sold. It also received a number of adapted ports for other platforms, such as the NES, Game Boy, Amiga, and DOS computers.',
			developers: ['Virgin Games'],
			publishers: [
				'Disney Interactive Studios',
				'Sega',
				'THQ',
				'Ubisoft',
				'Virgin Games'
			],
			directors: ['David Perry'],
			producers: ['Patrick Gilmore', 'Robb Alvey'],
			programmers: ['David Perry'],
			artists: ['Nick Bruty'],
			writers: [],
			composers: ['Donald Griffin', 'Tommy Tallarico'],
			designers: ['Bill Anderson', 'David Bishop', 'Seth Mendelsohn', 'Tom Tanaka'],
			genres: ['Platformer'],
			modes: ['single-player'],
			platforms: [
				'Amiga',
				'DOS',
				'Game Boy',
				'Game Boy Color',
				'Genesis',
				'NES',
				'Windows'
			],
			releases: [
				{platforms: ['Genesis'], regions: ['NA'], date: '1993-10-xx'},
				{platforms: ['Genesis'], regions: ['EU'], date: '1993-11-11'},
				{platforms: ['Genesis'], regions: ['JP'], date: '1993-11-12'},
				{platforms: ['Game Boy'], regions: ['EU'], date: '1994-12-08'},
				{platforms: ['NES'], regions: ['EU'], date: '1994-12-31'},
				{platforms: ['Amiga'], regions: ['EU'], date: '1994-xx-xx'},
				{platforms: ['NES'], regions: ['AU'], date: '1994-xx-xx'},
				{platforms: ['Windows'], regions: ['EU'], date: '1994-xx-xx'},
				{platforms: ['Game Boy'], regions: ['NA'], date: '1995-10-xx'},
				{platforms: ['Windows'], regions: ['EU'], date: '1996-xx-xx'},
				{platforms: ['Game Boy Color'], regions: ['NA'], date: '2000-11-07'},
				{platforms: ['Game Boy Color'], regions: ['EU'], date: '2000-11-20'},
				{platforms: ['Windows'], regions: ['NA'], date: '2017-12-18'}
			]
		});
	});

	it('Smash TV', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Smash_TV', 'Smash TV', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/34/SmashTV_flyer.jpg',
			description: "Smash TV is a 1990 arcade game created by Eugene Jarvis and Mark Turmell for Williams Electronics Games. It is a dual-stick shooter (one for moving, avoiding enemies and collecting prizes, and the other for firing) in the same vein as 1982's Robotron: 2084 (co-created by Jarvis). The Super NES, Genesis, Master System, and Game Gear versions were titled Super Smash TV.\n" +
				'\n' +
				'The plot centers on a dystopian television show during the then-future year of 1999, where one or two "lucky" contestants must shoot their way to fame and fortune; the show is taped in front of a live studio audience with broadcast via satellite worldwide. The goal of the game show is to kill or be killed, and once all of the challengers in each arena have been massacred, the contestant(s) will proceed to survive the next gauntlet.',
			developers: ['Beam Software', 'Probe Software', 'WMS'],
			publishers: ['WMS'],
			directors: [],
			producers: [],
			programmers: ['Mark Turmell'],
			artists: ['John Tobias', 'Tim Coman'],
			writers: [],
			composers: [
				'Jeroen Tel',
				'Jon Hey',
				'Marshall Parker',
				'Matt Furniss',
				'Tony Williams'
			],
			designers: ['Eugene Jarvis'],
			genres: ['Shooter'],
			modes: ['cooperative', 'multiplayer', 'single-player'],
			platforms: [
				'Amiga', 'Amstrad CPC',
				'Arcade', 'Atari ST',
				'Commodore 64', 'Game Gear',
				'Genesis', 'Master System',
				'NES', 'SNES',
				'ZX Spectrum'
			],
			releases: [
				{platforms: [], regions: ['NA'], date: '1990-04-xx'}
			]
		});
	});

	it('Joust', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Joust_(video_game)', 'Joust', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/88/Joust_Flyer.png',
			description: "Joust is an action game developed by Williams Electronics and released in arcades in 1982. While not the first two-player cooperative video game, Joust's success and polished implementation popularized the concept. Player 1 rides an ostrich, player 2 a stork. Repeatedly pressing the flap button gains altitude, while a two-directional joystick controls direction. In a collision with enemy knights riding buzzards—or the other player—the higher rider  dismounts the other.\n" +
				'\n' +
				'John Newcomer led the development team: Bill Pfutzenreuter, Janice Woldenberg-Miller (née Hendricks), Python Anghelo, Tim Murphy, and John Kotlarik. Newcomer aimed to create a flying game, with cooperative two-player gameplay, while avoiding the overdone space theme.\n' +
				'\n' +
				'The game was well-received by players and critics, and the mechanics influenced other games. Joust was ported to numerous home systems and was followed by a more complex and less popular arcade sequel in 1986: Joust 2: Survival of the Fittest.',
			developers: ['Atari, Inc.', 'WMS'],
			publishers: ['Atari Corporation', 'Atari, Inc.', 'Atarisoft', 'WMS'],
			directors: [],
			producers: [],
			programmers: ['Bill Pfutzenreuter'],
			artists: ['Jan Hendricks', 'Python Anghelo'],
			writers: [],
			composers: ['John Kotlarik', 'Tim Murphy'],
			designers: ['John Newcomer'],
			genres: ['Action'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Apple II', 'Arcade',
				'Atari 2600', 'Atari 5200',
				'Atari 7800', 'Atari 8-bit',
				'Atari ST', 'IBM PC',
				'Lynx', 'Mac OS',
				'NES'
			],
			releases: [
				{platforms: [], regions: ['NA'], date: '1982-07-16'},
				{platforms: [], regions: ['EU'], date: '1983-01-xx'},
				{platforms: [], regions: ['JP'], date: '1984-xx-xx'}
			]
		});
	});

	it('Formula One: Built to Win', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Formula_One:_Built_to_Win', 'Formula One: Built to Win', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/43/Formula_One_Built_to_Win_Cover.jpg',
			description: 'Formula One: Built to Win is a 1990 racing video game for the Nintendo Entertainment System developed by Winky Soft and published by SETA Corporation.\n' +
				'\n' +
				'It was one of the first racing games to feature a career mode, multiple vehicles and an opportunity for the player to increase the performance of their in-game car through car tuning, which were unique elements for a racer of the NES era and a genre only truly revisited during the fifth generation of game consoles where games such as Gran Turismo became popular.\n' +
				'\n' +
				'Races start out as single-lap events but become double-lap events as the player starts racing against more experienced competition in places like Las Vegas, Nevada and Hawaii. With gameplay similar to Rad Racer and Pole Position, the driver races towards the back of the screen.\n' +
				'\n' +
				'The names of the opponents are chosen partially at random; they can also vary because of the ranking level of the course and the type of vehicle used. Like in Rad Racer, the player can supercharge an automobile to go up to 255 miles per hour or 410 kilometres per hour.',
			developers: ['Winkysoft'],
			publishers: ['SETA Corporation'],
			directors: ['Banjyo Tadano'],
			producers: ['Toru Ishikawa'],
			programmers: [],
			artists: ['Hiroyuki Chiken'],
			writers: [],
			composers: ['Masa Konishi'],
			designers: [],
			genres: ['Racing', 'Sports'],
			modes: ['single-player'],
			platforms: ['NES'],
			releases: [{platforms: [], regions: ['NA'], date: '1990-11-xx'}]
		});
	});

	it('Bonk\'s Adventure', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Bonk%27s_Adventure', 'Bonk\'s Adventure', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Bonkadventure.jpg',
			description: "Bonk's Adventure is a scrolling platform game  developed by Red Company and Atlus and released in 1989 in Japan and 1990 in North America for the TurboGrafx-16. In Japan it was titled PC Genjin (PC原人), a play on the Japanese name for the system, PC Engine. The first game in the Bonk series, it was followed by two more games for the TurboGrafx-16 before branching out to other platforms.\n" +
				'\n' +
				"Bonk's Adventure was ported to the NES and Amiga, as  \n" +
				'well as being released as a coin-operated arcade game, under different titles (FC Genjin and BC Genjin). A completely different game with the same name appeared on the Game Boy (under the title GB Genjin in Japan).',
			developers: ['AI', 'Atlus', 'Factor 5', 'Red Company'],
			publishers: ['Hudson Soft', 'NEC Home Electronics'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Kunio Komatsu', 'Tsukasa Masuko'],
			designers: [],
			genres: ['Platformer'],
			modes: ['single-player'],
			platforms: ['Amiga', 'Arcade', 'Game Boy', 'NES', 'TurboGrafx-16'],
			releases: [
				{platforms: [], regions: ['JP'], date: '1989-12-15'},
				{platforms: [], regions: ['NA'], date: '1990-10-xx'}
			]
		});
	});

	it('Side Pocket', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Side_Pocket', 'Side Pocket', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/47/Side_Pocket_NES_cover.jpg',
			description: 'Side Pocket is a pocket billiards sports video game originally released into arcades by Data East in 1986. The arcade version was eventually ported to the Nintendo Entertainment System and Game Boy, while an enhanced remake was later released on the Sega Genesis, Super Nintendo Entertainment System, and the Sega Game Gear. The game also spawned two sequels, as well as arcade spin-off series titled Pocket Gal.\n' +
				'\n' +
				'G-Mode currently owns the intellectual property rights to the Side Pocket series, and licenses these games globally.',
			developers: ['Data East', 'ISCO', 'Iguana Entertainment', 'Opera House'],
			publishers: ['Data East', 'Namco', 'Nintendo', 'Sega'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Emi Shimizu', 'K. Suzuki', 'List', 'Rick Fox', 'Yusuke Takahama'],
			designers: [],
			genres: ['Pool (cue sports)', 'Sports'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Arcade',
				'Game Boy',
				'Game Gear',
				'Genesis',
				'NES',
				'SNES',
				'WonderSwan'
			],
			releases: [
				{platforms: ['Arcade'], regions: ['JP'], date: '1986-06-xx'},
				{platforms: ['Arcade'], regions: ['NA'], date: '1986-xx-xx'},
				{platforms: ['Famicom', 'NES'],regions: ['JP'],date: '1987-10-30'},
				{platforms: ['Famicom', 'NES'],regions: ['NA'],date: '1987-11-30'},
				{platforms: ['Famicom', 'NES'],regions: ['EU'],date: '1992-05-27'},
				{platforms: ['Genesis'], regions: ['NA'], date: '1992-06-xx'},
				{platforms: ['Genesis'], regions: ['JP'], date: '1992-12-11'},
				{platforms: ['Genesis'], regions: ['EU'], date: '1992-xx-xx'},
				{platforms: ['SNES'], regions: ['NA'], date: '1993-12-xx'},
				{platforms: ['SNES'], regions: ['JP'], date: '1994-03-18'},
				{platforms: ['Game Gear'],regions: ['NA'],date: '1994-xx-xx'},
				{platforms: ['SNES'], regions: ['EU'], date: '1994-xx-xx'},
				{platforms: ['WonderSwan'],regions: ['JP'],date: '1999-11-25'}
			]
		});
	});

	it('Phantom Fighter', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Phantom_Fighter', 'Phantom Fighter', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Phantom_Fighter_cover.png',
			description: "Phantom Fighter (霊幻道士, Reigen Dōshi) is a beat 'em up video game released for the Nintendo Entertainment System in 1988 in Japan, and in April 1990 in the United States. The Japanese version is based on the 1985 film, Mr. Vampire (Reigen Dōshi being the Japanese title of the film).",
			developers: ['Marionette', 'SRS'],
			publishers: ['FCI', 'Pony Canyon'],
			directors: [],
			producers: [],
			programmers: ['Yoshiaki Sakaguchi'],
			artists: ['Seishi Yokota'],
			writers: [],
			composers: ['Hironari Tadokoro'],
			designers: ['Kunihiko Kagawa'],
			genres: ['Action'],
			modes: ['single-player'],
			platforms: ['NES'],
			releases: [
				{platforms: [], regions: ['JP'], date: '1988-09-16'},
				{platforms: [], regions: ['NA'], date: '1990-04-xx'}
			]
		});
	});

	it('The Incredible Crash Dummies', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/The_Incredible_Crash_Dummies_(video_game)', 'The Incredible Crash Dummies', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0d/The_Incredible_Crash_Dummies_cover.jpg',
			description: 'The Incredible Crash Dummies is a side-scrolling action game produced by Flying Edge based on the line of toys of the same name developed by Tyco Toys, and released in North America, Japan and Europe.',
			developers: [
				'Flying Edge',
				'Gray Matter',
				'Software Creations',
				'Teeny Weeny Games'
			],
			publishers: ['Acclaim Entertainment', 'Flying Edge', 'LJN'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Allister Brimble', 'Geoff Follin', 'Matt Furniss'],
			designers: [],
			genres: ['Action'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Amiga',
				'Game Gear',
				'Genesis',
				'Master System',
				'Mega Drive',
				'NES',
				'SNES'
			],
			releases: [
				{platforms: ['Game Gear'],regions: ['NA'],date: '1992-xx-xx'},
				{platforms: ['Game Gear'],regions: ['PAL'],date: '1992-xx-xx'},
				{platforms: ['SNES'], regions: ['NA'], date: '1993-10-xx'},
				{platforms: ['Genesis', 'Mega Drive'],regions: ['NA'],date: '1993-xx-xx'},
				{platforms: ['Master System'],regions: ['PAL'],date: '1993-xx-xx'},
				{platforms: ['NES'], regions: ['PAL'], date: '1993-xx-xx'},
				{platforms: ['SNES'], regions: ['PAL'], date: '1993-xx-xx'},
				{platforms: ['NES'], regions: ['NA'], date: '1994-08-xx'},
				{platforms: ['Game Gear'],regions: ['JP'],date: '1994-09-30'},
				{platforms: ['SNES'], regions: ['JP'], date: '1994-09-30'},
				{platforms: ['Genesis', 'Mega Drive'],regions: ['AU'],date: '1994-xx-xx'},
				{platforms: ['Genesis', 'Mega Drive'],regions: ['PAL'],date: '1994-xx-xx'}
			]
		});
	});

	it('Toki', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Toki_(video_game)', 'Toki', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/3a/Toki_arcade_flyer.jpg',
			description: 'Toki is a run and gun platform game released in arcades in Japan in 1989 by TAD Corporation. It was published in North America by Fabtek. Designed by Akira Sakuma, the game has tongue-in-cheek humor mixed with the action. The player controls an enchanted ape who must battle hordes of jungle monsters with energy balls from his mouth. The ultimate goal is to destroy the evil wizard who cast a spell on the title protagonist; thereby transforming him from an ape back into a human, and rescuing the kidnapped princess. The game was ported to several video game consoles and home computers.',
			developers: [
				'Atari Corporation',
				'Daiei Seisakusho',
				'Golgoth Studio',
				'Magic Team',
				'Ocean Software',
				'Santos',
				'Sega',
				'TAD Corporation'
			],
			publishers: [
				'Anuman Interactive',
				'Atari Corporation',
				'Fabtek',
				'H2 Interactive',
				'Magic Team',
				'Microïds',
				'Ocean Software',
				'Sega',
				'TAD Corporation',
				'Taito',
				'Tec Toy',
			],
			directors: [],
			producers: [],
			programmers: ['Akira Sakuma'],
			artists: ['Hiro Kakiuchi', 'Jun Fujisaku', 'Jun Matsubara'],
			writers: [],
			composers: ['Yukihiko Kitahara'],
			designers: ['Haruki Kitahara'],
			genres: ['Platformer'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Amiga', 'Arcade',
				'Atari ST', 'Commodore 64',
				'Genesis', 'Lynx',
				'Mac OS', 'NES',
				'Nintendo Switch', 'PlayStation 4',
				'Windows', 'Xbox One',
				'iOS'
			],
			releases: [
				{platforms: ['Arcade'], regions: ['JP'], date: '1989-12-08'},
				{platforms: ['Arcade'], regions: ['NA'], date: '1990-02-22'},
				{platforms: ['NES'], regions: ['JP'], date: '1991-07-19'},
				{platforms: ['NES'], regions: ['NA'], date: '1991-12-xx'},
				{platforms: ['Amiga'], regions: ['EU'], date: '1991-xx-xx'},
				{platforms: ['Atari ST'],regions: ['EU'],date: '1991-xx-xx'},
				{platforms: ['Commodore 64'],regions: ['EU'],date: '1991-xx-xx'},
				{platforms: ['Genesis'], regions: ['JP'], date: '1992-01-31'},
				{platforms: ['Genesis'], regions: ['EU'], date: '1992-03-xx'},
				{platforms: ['Genesis'],regions: ['BRA'],date: '1992-xx-xx'},
				{platforms: ['Genesis'], regions: ['NA'], date: '1992-xx-xx'},
				{platforms: ['Lynx'], regions: ['EU'], date: '1992-xx-xx'},
				{platforms: ['Lynx'], regions: ['NA'], date: '1992-xx-xx'},
				{platforms: ['Nintendo Switch'],regions: ['NA'],date: '2018-12-04'},
				{platforms: ['Nintendo Switch'],regions: ['KOR'],date: '2018-12-20'},
				{platforms: ['Nintendo Switch'],regions: ['PAL'],date: '2019-01-04'},
				{platforms: ['PlayStation 4'],regions: ['NA'],date: '2019-06-06'},
				{platforms: ['PC'], regions: ['WW'], date: '2019-06-07'},
				{platforms: ['PlayStation 4'],regions: ['PAL'],date: '2019-06-11'},
				{platforms: ['Xbox One'],regions: ['WW'],date: '2019-06-17'}
			]
		});
	});

	it('Mario Bros.', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Mario_Bros.', 'Mario Bros.', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/4e/Mariobrothers.png',
			description: "Mario Bros. is a 1983 platform game developed and published for arcades by Nintendo. It was designed by Shigeru Miyamoto and Gunpei Yokoi, Nintendo's chief engineer. Italian-American plumber Mario and his twin brother Luigi exterminate creatures emerging from the sewers by knocking them upside-down and kicking them away. It is part of the Mario franchise, but originally began as a spin-off from the Donkey Kong series.\n" +
				'\n' +
				'The arcade and Famicom/Nintendo Entertainment System versions were received positively by critics. Elements introduced in Mario Bros. such as spinning bonus coins, turtles which can be flipped onto their backs, and Luigi were carried over to Super Mario Bros. (1985) and became staples of the series.\n' +
				'\n' +
				"An updated version of Mario Bros. is included as a mini game in all of the Super Mario Advance series and numerous other games. Mario Bros. has been re-released through Nintendo's online stores for later systems.",
			developers: ['Intelligent Systems', 'Nintendo R&D1'],
			publishers: [
				'Atari Corporation',
				'Atari, Inc.',
				'Hudson Soft',
				'Nintendo',
				'Ocean Software'
			],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Yukio Kaneoka'],
			designers: ['Gunpei Yokoi', 'Shigeru Miyamoto'],
			genres: ['Platformer'],
			modes: ['multiplayer', 'single-player'], platforms: [
				'Amstrad CPC', 'Arcade',
				'Atari 2600', 'Atari 5200',
				'Atari 7800', 'Atari 8-bit',
				'Commodore 64', 'FM-7',
				'Game & Watch', 'Game Boy Advance',
				'NES', 'PC-8801',
				'ZX Spectrum'
			],
			releases: [
				{platforms: ['Arcade'], regions: ['NA'], date: '1983-04-04'},
				{platforms: ['Arcade'], regions: ['JP'], date: '1983-06-xx'},
				{platforms: ['Atari 2600'],regions: ['NA'],date: '1983-07-26'},
				{platforms: ['Famicom', 'NES'],regions: ['JP'],date: '1983-09-09'},
				{platforms: ['Atari 5200'],regions: ['NA'],date: '1983-12-31'},
				{platforms: ['PC-8801'], regions: ['JP'], date: '1984-02-xx'},
				{platforms: ['Commodore 64'],regions: ['NA'],date: '1984-xx-xx'},
				{platforms: ['FM-7'], regions: ['JP'], date: '1984-xx-xx'},
				{platforms: ['Famicom', 'NES'],regions: ['NA'],date: '1986-06-01'},
				{platforms: ['Famicom', 'NES'],regions: ['EU'],date: '1986-09-01'},
				{platforms: ['Amstrad CPC'],regions: ['EU'],date: '1987-06-19'},
				{platforms: ['Atari 7800'],regions: ['NA'],date: '1987-07-10'},
				{platforms: ['Commodore 64'],regions: ['EU'],date: '1987-xx-xx'},
				{platforms: ['ZX Spectrum'],regions: ['EU'],date: '1987-xx-xx'},
				{platforms: ['Atari 8-bit'],regions: ['NA'],date: '1988-11-22'},
				{platforms: ['NES'], regions: ['EU'], date: '1993-xx-xx'},
				{platforms: ['Nintendo e-Reader'],regions: ['NA'],date: '2002-11-11'},
				{platforms: ['Game Boy Advance'],regions: ['JP'],date: '2004-05-21'}
			]
		});
	});

	it('Mappy-Land', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Mappy-Land', 'Mappy-Land', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/76/Mappy_Land_box_art.jpg',
			description: 'Mappy-Land (マッピーランド, Mappī Rando) is a video game console-only sequel to the 1983 Namco/Midway arcade game Mappy. The game was developed by TOSE and published by Namco in Japan and Taxan in North America for the Nintendo Entertainment System. It was later released by Bandai Namco Games for the Wii U Virtual Console worldwide in February 2015.',
			developers: ['TOSE'],
			publishers: ['Bandai Namco Entertainment', 'Namco', 'Taxan'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: [],
			genres: ['Platformer'],
			modes: ['single-player'],
			platforms: ['NES', 'Wii U Virtual Console'],
			releases: [
				{platforms: ['NES'], regions: ['JP'], date: '1986-11-26'},
				{platforms: ['NES'], regions: ['NA'], date: '1989-04-xx'},
				{platforms: ['Wii U Virtual Console'], regions: ['NA'], date: '2015-02-05'},
				{platforms: ['Wii U Virtual Console'], regions: ['PAL'], date: '2015-02-12'},
				{platforms: ['Wii U Virtual Console'], regions: ['JP'], date: '2015-05-13'}
			]
		});
	});

	it('Legacy of the Wizard', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Legacy_of_the_Wizard', 'Legacy of the Wizard', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Legacyofthewizard.jpg',
			description: `Legacy of the Wizard, originally released in Japan as Dragon Slayer IV: Drasle Family (ドラゴンスレイヤーIV ドラスレファミリー) is a fantasy-themed action role-playing platform game released for the MSX, MSX2 and Famicom in Japan and for the Nintendo Entertainment System in the United States. Legacy of the Wizard is an installment in Falcom's Dragon Slayer series, and one of only five Dragon Slayer games that were localized outside Japan. The game was an early example of an open-world, non-linear action RPG, combining action-RPG gameplay with what would later be called "Metroidvania"-style action-adventure elements.`,
			developers: ['Nihon Falcom'],
			publishers: ['Broderbund', 'Namco', 'Nihon Falcom'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Mieko Ishikawa', 'Yuzo Koshiro'],
			designers: ['Yoshio Kiya'],
			genres: ['Action', 'Adventure', 'Platformer', 'Role-playing'],
			modes: ['single-player'],
			platforms: ['Famicom', 'MSX', 'MSX2', 'NES'],
			releases: [
				{platforms: [], regions: ['JP'], date: '1987-07-10'},
				{platforms: [], regions: ['NA'], date: '1989-04-xx'}
			]
		});
	});

	it('Flying Warriors', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Flying_Warriors', 'Flying Warriors', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/61/FW_NES.PNG',
			description: 'Flying Warriors is a 1991 action/fighting video game developed by Culture Brain and published by Culture Brain USA exclusively for the NES in North America in February 1991. It is a mixture of two Family Computer video games in the Hiryū no Ken franchise: Hiryu no Ken II: Dragon no Tsubasa and Hiryu no Ken III: 5 Nin no Ryuu Senshi.  It implements ideas and elements from both games.\n' +
				'\n' +
				'The first installment of the Hiryū no Ken series had already been released in North America as Flying Dragon: The Secret Scroll, with virtually no modification aside from the language.',
			developers: ['Culture Brain'],
			publishers: ['Culture Brain'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: [],
			genres: ['Action'],
			modes: ['single-player'],
			platforms: ['NES', 'Wii U Virtual Console'],
			releases: [
				{platforms: ['NES'], regions: ['NA'], date: '1991-02-xx'},
				{platforms: ['Virtual Console'], regions: ['PAL'], date: '2015-05-28'},
				{platforms: ['Virtual Console'], regions: ['NA'], date: '2017-01-26'}
			]
		});
	});

	it('Kung Fu', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Kung-Fu_Master_(video_game)', 'Kung Fu', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/82/KungFuMaster_arcadeflyer.png',
			description: "Kung-Fu Master, known as Spartan X in Japan, is a side-scrolling beat 'em up game developed by Irem as an arcade game in 1984, and distributed by Data East in North America. Designed by Takashi Nishiyama, the game was based on Hong Kong martial arts films. It is loosely adapted from the Jackie Chan and Sammo Hung film Wheels on Meals (1984), called Spartan X in Japan, with the protagonist Thomas named after Jackie Chan's character in the film. However, the game is more heavily inspired by the Bruce Lee film Game of Death (1972), which was the basis for the game's concept. Nishiyama, who had previously designed the side-scrolling shooter Moon Patrol (1982), combined fighting elements with a shoot 'em up gameplay rhythm. Irem and Data East exported the game to the West without the Spartan X license.\n" +
				'\n' +
				"The player controls Thomas, the titular Kung-Fu Master, as he fights his way through the five levels of the Devil's Temple to rescue his girlfriend Sylvia from the crime boss Mr. X. As he ascends the tower, he has to fight many enemies along the way and five end-of-level boss battles, a concept inspired by Game of Death. Thomas and each boss have a health meter, and the game temporarily becomes a one-on-one fighting game during boss battles.\n" +
				'\n' +
				'The game was a major critical and commercial success. It received critical acclaim for its fast-paced, side-scrolling gameplay and detailed, colorful graphics. It topped the Japanese arcade charts for two months, while in America it became one of the top five highest-grossing arcade games of 1985 and then the eleventh highest arcade game of 1986. A port for the Nintendo Entertainment System (known as the Famicom in Japan) was developed by Nintendo under the direction of Shigeru Miyamoto, released as Spartan X in Japan and Kung Fu in the West, selling 3.5 million copies worldwide. It was also one of the top five best-selling Commodore 64 games of 1986. It spawned the sequel Spartan X 2 (1991) and the spiritual successors Trojan (1986) and Vigilante (1988).\n' +
				'\n' +
				"Kung-Fu Master was an influential game that had a significant cultural impact. It is regarded as the first beat 'em up brawler, and an early example of the side-scrolling character action game genre, which became popular during the mid-to-late 1980s. Miyamoto's work on the NES port inspired his development of the side-scrolling platform game Super Mario Bros. (1985), while Nishiyama was hired by Capcom where he used the game's boss battles as the basis for the fighting game Street Fighter (1987), before working for SNK on fighting games such as Fatal Fury and The King of Fighters. Kung-Fu Master also influenced other media, such as the Red Ribbon Army saga (1985-1986) of the manga and anime series Dragon Ball, as well as the French film Kung Fu Master (1988).",
			developers: ['Irem', 'Nintendo'],
			publishers: [
				'Absolute Entertainment',
				'Data East',
				'Irem',
				'Nintendo',
				'U.S. Gold'
			],
			directors: ['Shigeru Miyamoto', 'Takashi Nishiyama'],
			producers: ['Scott Tsumura'],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Koji Kondo', 'Masato Ishizaki'],
			designers: ['Shigeru Miyamoto', 'Takashi Nishiyama'],
			genres: ["Beat 'em up"],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Amstrad CPC', 'Apple II',
				'Arcade', 'Atari 2600',
				'Atari 7800', 'Commodore 64',
				'Famicom', 'Game Boy',
				'MSX', 'NES',
				'ZX Spectrum'
			],
			releases: [
				{platforms: ['Arcade'], regions: ['JP'], date: '1984-11-24'},
				{platforms: ['Arcade'], regions: ['NA'], date: '1984-xx-xx'},
				{platforms: ['Famicom', 'NES'],regions: ['JP'],date: '1985-06-21'},
				{platforms: ['Famicom', 'NES'],regions: ['NA'],date: '1985-10-18'},
				{platforms: ['Apple II'],regions: ['NA'],date: '1985-12-xx'},
				{platforms: ['Commodore 64'],regions: ['NA'],date: '1985-12-xx'},
				{platforms: ['Arcade'], regions: ['EU'], date: '1985-xx-xx'},
				{platforms: ['Commodore 64'],regions: ['EU'],date: '1986-02-xx'},
				{platforms: ['Atari 2600'],regions: ['NA'],date: '1987-05-12'},
				{platforms: ['Famicom', 'NES'],regions: ['EU'],date: '1987-xx-xx'},
				{platforms: ['Atari 7800'],regions: ['NA'],date: '1989-xx-xx'},
				{platforms: ['Game Boy'],regions: ['JP', 'NA'],date: '1990-xx-xx'},
				{platforms: ['Game Boy'],regions: ['EU'],date: '1991-xx-xx'}
			]
		});
	});

	it('Caveman Games', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Caveman_Ughlympics', 'Caveman Games', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/00/CavemanUghlympics.jpg',
			description: 'Caveman Ughlympics or Caveman Ugh-lympics is a 1988 Olympic-themed sports video game set in the Stone Age. It was developed for the Commodore 64 and MS-DOS by Dynamix and published by Electronic Arts. The Nintendo Entertainment System version, named Caveman Games, was ported and released by Data East USA, a subsidiary of Data East.',
			developers: ['Dynamix', 'Painting by Numbers'],
			publishers: ['Data East', 'Electronic Arts'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: [],
			genres: ['Sports'],
			modes: [],
			platforms: ['Commodore 64', 'MS-DOS', 'NES'],
			releases: [
				{platforms: ['Commodore 64'], regions: ['NA'], date: '1988-xx-xx'},
				{platforms: ['Commodore 64'], regions: ['PAL'], date: '1988-xx-xx'},
				{platforms: ['MS-DOS'], regions: ['NA'], date: '1989-xx-xx'},
				{platforms: ['NES'], regions: ['NA'], date: '1990-10-xx'}
			]
		});
	});

	it('Wurm: Journey to the Center of the Earth', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Wurm:_Journey_to_the_Center_of_the_Earth', 'Wurm: Journey to the Center of the Earth', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/44/Wurm_Journey_To_The_Center_Of_The_Earth_Cover.jpg',
			description: 'Wurm: Journey to the Center of the Earth, released in Japan as Vazolder: The Underground Battle Space (地底戦空バゾルダー, Chitei Sen Kū Bazorudā), is a multi-genre video game developed by Cyclone System and published by Asmik and SOFEL for the Nintendo Entertainment System in 1991.',
			developers: ['Cyclone System'],
			publishers: ['Asmik Ace', 'SOFEL'],
			directors: [],
			producers: ['Yoshiyuki Ishikawa'],
			programmers: [],
			artists: ['Shoichi Yoshikawa'],
			writers: [],
			composers: ['Dota Ando'],
			designers: ['Hiroshi Kazama', 'Masasuke Aruga', 'Shoichi Yoshikawa'],
			genres: ['Action'],
			modes: ['single-player'],
			platforms: ['NES'],
			releases: [
				{platforms: [], regions: ['JP'], date: '1991-11-15'},
				{platforms: [], regions: ['NA'], date: '1991-11-xx'}
			]
		});
	});

	it('Top Players\' Tennis', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Top_Players%27_Tennis', 'Top Players\' Tennis', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e3/Top_Players_Tennis_NES.jpg',
			description: "Top Players' Tennis (called World Super Tennis (ワールドスーパーテニス, Wārudo Sūpā Tenisu) in Japan and Four Players' Tennis in Europe) is a tennis video game developed by Home Data for the NES/Famicom.",
			developers: ['Home Data'],
			publishers: ['Asmik Ace'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: [],
			genres: ['Sports'],
			modes: ['multiplayer', 'single-player'],
			platforms: ['NES'],
			releases: [
				{platforms: [], regions: ['JP'], date: '1989-10-13'},
				{platforms: [], regions: ['NA'], date: '1990-01-xx'},
				{platforms: [], regions: ['EU'], date: '1992-07-xx'}
			]
		});
	});

	it('RoboCop', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/RoboCop_(1988_video_game)', 'RoboCop', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/23/RoboCop_arcade_flyer.jpg',
			description: "RoboCop is a beat 'em up/run-and-gun action game developed and published by Data East for arcades in 1988, based on the 1987 film of the same name. It was sub-licensed to Data East by Ocean Software, who obtained the rights from Orion Pictures at the script stage. Data East and Ocean Software subsequently adapted the arcade game for home computers.\n" +
				'\n' +
				"The game was a critical and commercial success. The arcade game was the highest-grossing arcade game of 1988 in Hong Kong, and reached number-two on Japan's monthly Game Machine arcade charts. On home computers, the game sold over 1 million copies worldwide, and it was especially successful in the United Kingdom where it was the best-selling home computer game of the 1980s.",
			developers: [
				'AGC Hamburg',
				'Data East',
				'Ocean Software',
				'Quicksilver Software',
				'Sakata SAS',
				'Tandy Corporation'
			],
			publishers: [
				'Data East',
				'Epic/Sony Records',
				'Erbe Software',
				'Ocean Software',
				'Tandy Corporation'
			],
			directors: [],
			producers: [],
			programmers: ['Ryōji Minagawa'],
			artists: ['Tomoo Adachi'],
			writers: [],
			composers: ['Hiroaki Yoshida', 'Hitomi Komatsu', 'Shogo Sakai'],
			designers: ['Yoshiyuki Urushibara'],
			genres: ["Beat 'em up", 'Run-and-gun'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Amiga', 'Amstrad CPC',
				'Apple II', 'Arcade',
				'Atari ST', 'Commodore 64',
				'Game Boy', 'MS-DOS',
				'MSX', 'NES',
				'TRS-80 Color Computer', 'ZX Spectrum'
			],
			releases: [
				{platforms: ['Arcade'], regions: ['JP'], date: '1988-11-01'},
				{platforms: ['Arcade'], regions: ['WW'], date: '1988-11-xx'},
				{platforms: ['Amstrad CPC', 'MSX'],regions: ['EU'],date: '1988-12-xx'},
				{platforms: ['Apple II'],regions: ['NA'],date: '1988-12-xx'},
				{platforms: ['Commodore 64'],regions: ['EU'],date: '1988-12-xx'},
				{platforms: ['ZX Spectrum'],regions: ['EU'],date: '1988-12-xx'},
				{platforms: ['NES'], regions: ['JP'], date: '1989-08-25'},
				{platforms: ['Commodore 64'],regions: ['NA'],date: '1989-12-12'},
				{platforms: ['NES'], regions: ['NA'], date: '1989-12-19'},
				{platforms: ['Amiga'], regions: ['EU'], date: '1989-xx-xx'},
				{platforms: ['Atari ST'],regions: ['EU'],date: '1989-xx-xx'},
				{platforms: ['MS-DOS', 'TRS-80 Color Computer'],regions: ['NA'],date: '1989-xx-xx'},
				{platforms: ['Game Boy'],regions: ['NA'],date: '1990-12-xx'},
				{platforms: ['Amiga'], regions: ['NA'], date: '1990-xx-xx'},
				{platforms: ['Game Boy'],regions: ['EU'],date: '1990-xx-xx'},
				{platforms: ['Game Boy'],regions: ['JP'],date: '1991-03-01'},
				{platforms: ['NES'], regions: ['EU'], date: '1991-04-25'}
			]
		});
	});

	it('Ikari Warriors II: Victory Road', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Victory_Road_(video_game)', 'Ikari Warriors II: Victory Road', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Victory_Road.png',
			description: 'Victory Road, known as Dogō Sōken (怒号層圏, lit. "Bellowing Atmosphere") in Japan, is a run-and-gun shooter video game released by SNK for arcades in 1986. It is the sequel to Ikari Warriors.\n' +
				'\n' +
				'The objective is to defeat the enemy aliens using grenades and other weapons. The story directly picks up at the ending of Ikari Warriors. Congratulated by General Kawasaki for rescuing him, Paul and Vince return home to their native country in a plane arranged by the general. A mysterious storm appears and they are hurtled thousands of years into the future. They are met by an alien creature who says that the villain Zang Zip has taken over the land.',
			developers: ['Paradise Software', 'SNK'],
			publishers: ['Erbe Software', 'IBSA', 'Imagine Software', 'SNK'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Toshikazu Tanaka'],
			designers: [],
			genres: ['Run-and-gun', 'Shooter'],
			modes: ['multiplayer', 'single-player'],
			platforms: ['Amiga', 'Amstrad CPC', 'Apple II', 'Arcade', 'Atari ST', 'Commodore 64', 'IBM PC', 'NES', 'ZX Spectrum'],
			releases: [
				{platforms: ['Arcade'], regions: [], date: '1986-10-xx'},
				{platforms: ['NES'], regions: ['JP'], date: '1988-04-16'},
				{platforms: ['Atari ST'], regions: [], date: '1988-xx-xx'},
				{platforms: ['NES'], regions: ['NA'], date: '1988-xx-xx'},
				{platforms: ['Amiga'], regions: [], date: '1989-xx-xx'},
				{platforms: ['ZX Spectrum'], regions: [], date: '1989-xx-xx'},
			]
		});
	});

	it('Bad Dudes', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Bad_Dudes_Vs._DragonNinja', 'Bad Dudes', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c0/Bad_Dudes_DragonNinja_arcadeflyer.png',
			description: "Bad Dudes Vs. DragonNinja, also known simply as either Bad Dudes (on the American NES port) or DragonNinja (in Japan and Europe), is a side-scrolling beat 'em up game developed and released by Data East for arcades in 1988. It was also ported to many computer and game console home systems.\n" +
				'\n' +
				`In Bad Dudes, the players are set in the role of the titular duo tasked with rescuing "President Ronnie" from ninja kidnappers. The game was met with commercial success, becoming one of America's top five highest-grossing arcade games of 1988. The arcade version received generally positive reviews from critics, while the home conversions received a generally positive to mixed critical reception. It has since become widely known for its general premise and introductory cut scene.`,
			developers: ['Data East'],
			publishers: [
				'Data East',
				'G-Mode',
				'Imagine Software',
				'Majesco Entertainment',
				'Namco',
				'Ocean Software'
			],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Azusa Hara', 'Hiroaki Yoshida'],
			designers: ['Makoto Kikuchi'],
			genres: ["Beat 'em up"],
			modes: ['cooperative', 'multiplayer', 'single-player'],
			platforms: [
				'Amiga',
				'Amstrad CPC',
				'Apple II',
				'Arcade',
				'Atari ST',
				'Commodore 64',
				'MS-DOS',
				'NES',
				'Nintendo Switch',
				'ZX Spectrum',
				'Zeebo'
			],
			releases: [
				{platforms: ['Arcade'], regions: ['JP'], date: '1988-03-02'},
				{platforms: ['Arcade'], regions: ['NA'], date: '1988-05-xx'},
				{platforms: ['Arcade'], regions: ['EU'], date: '1988-06-xx'},
				{platforms: ['NES'], regions: ['JP'], date: '1989-07-14'},
				{platforms: ['NES'], regions: ['NA'], date: '1989-xx-xx'},
				{platforms: ['NES'], regions: ['EU'], date: '1990-xx-xx'},
				{platforms: ['Zeebo'], regions: ['SA'], date: '2012-07-27'}
			]
		});
	});

	it('Kabuki: Quantum Fighter', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Kabuki:_Quantum_Fighter', 'Kabuki: Quantum Fighter', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/23/Kabuki_Quantum_Fighter.jpg',
			description: 'Kabuki: Quantum Fighter (地獄極楽丸, Jigoku Gokurakumaru) is a 2D platform game developed by Human Entertainment and published by the American publishing arm of HAL Laboratory for the Nintendo Entertainment System. It was originally released on December 21, 1990, in Japan and was released in January 1991 for the North American market before being released in Europe on February 20, 1992.',
			developers: ['Human Entertainment'],
			publishers: ['HAL Laboratory', 'Nintendo', 'Pack-In-Video'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Masaki Hashimoto', 'Takahiro Wakuta'],
			designers: [],
			genres: ['Platformer'],
			modes: ['single-player'],
			platforms: ['NES'],
			releases: [
				{platforms: [], regions: ['JP'], date: '1990-12-21'},
				{platforms: [], regions: ['NA'], date: '1991-01-xx'},
				{platforms: [], regions: ['EU'], date: '1992-02-20'}
			]
		});
	});

	it('Vegas Dream', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Vegas_Dream', 'Vegas Dream', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/55/Vegas_Dream_Cover.jpg',
			description: 'Vegas Dream, released in Japan as Viva! Las Vegas (ビバ ラスベガス) is a gambling video game developed by HAL Laboratory for the Nintendo Entertainment System. A sequel, Vegas Stakes, was released for the Super Nintendo Entertainment System in 1993.',
			developers: ['HAL Laboratory'],
			publishers: ['Epic/Sony Records', 'HAL Laboratory'],
			directors: ['Ryotaro Hasegawa', 'Yukio Nagasaki'],
			producers: [],
			programmers: ['Naoki Gotoh'],
			artists: [],
			writers: [],
			composers: ['Kuni Kawachi'],
			designers: [],
			genres: ['Casino'],
			modes: ['multiplayer', 'single-player'],
			platforms: ['NES'],
			releases: [
				{platforms: [], regions: ['JP'], date: '1988-09-30'},
				{platforms: [], regions: ['NA'], date: '1990-04-xx'}
			]
		});
	});

	it('The Hunt for Red October', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/The_Hunt_for_Red_October_(console_game)', 'The Hunt for Red October', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/ac/The_Hunt_for_Red_October_cover.jpg',
			description: 'The Hunt for Red October is a video game based on the 1990 film The Hunt for Red October. It was first released in 1991 for the Nintendo Entertainment System. Versions for the  Game Boy and  Super NES were subsequently released.',
			developers: ['Beam Software', 'Riedel Software Productions'],
			publishers: ['Hi Tech Expressions'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Gavan Anderson', 'John Spence', 'Tania Smith'],
			designers: ['Andrew Davie'],
			genres: ['Side scroller'],
			modes: ['single-player'],
			platforms: ['Game Boy', 'NES', 'SNES'],
			releases: [
				{platforms: ['NES'], regions: ['NA'], date: '1991-01-xx'},
				{platforms: ['Game Boy'], regions: ['NA'], date: '1991-05-xx'},
				{platforms: ['NES'], regions: ['EU'], date: '1991-xx-xx'},
				{platforms: ['Game Boy'], regions: ['JP'], date: '1992-04-28'},
				{platforms: ['Game Boy'], regions: ['EU'], date: '1992-06-11'},
				{platforms: ['SNES'], regions: ['NA'], date: '1993-01-xx'},
				{platforms: ['SNES'], regions: ['JP'], date: '1993-10-01'},
				{platforms: ['SNES'], regions: ['EU'], date: '1993-xx-xx'}
			]
		});
	});

	it('Felix the Cat', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Felix_the_Cat_(video_game)', 'Felix the Cat', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a9/FelixNESBoxart.JPG',
			description: 'Felix the Cat is a video game released in 1992 for the Nintendo Entertainment System and in 1993 for the Game Boy by Hudson Soft. It is based on the cartoon character Felix the Cat.',
			developers: ['Shimada Kikaku'],
			publishers: ['Electro Brain', 'Hudson Soft', 'Sony Imagesoft'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: [],
			genres: ['Platformer'],
			modes: ['single-player'],
			platforms: ['Game Boy', 'NES'],
			releases: [
				{platforms: ['NES'], regions: ['NA'], date: '1992-10-xx'},
				{platforms: ['NES'], regions: ['EU'], date: '1992-xx-xx'},
				{platforms: ['Game Boy'], regions: ['NA'], date: '1993-07-xx'},
				{platforms: ['Game Boy'], regions: ['EU'], date: '1993-xx-xx'}
			]
		});
	});

	it('Dr. Chaos', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Dr._Chaos', 'Dr. Chaos', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/43/Drchaos_boxart.jpg',
			description: "Dr. Chaos, officially known as Dr. Chaos: Hell's Gate (ドクター・カオス 地獄の扉, Dokutā Kaosu: Jigoku no Tobira) in Japan, is an action-adventure game originally released in Japan for the Family Computer Disk System in 1987 by Pony Inc. An English localization was produced for the Nintendo Entertainment System that was released in North America by FCI in 1988.",
			developers: ['Marionette', 'SRS'],
			publishers: ['FCI', 'Pony Canyon'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Hironari Tadokoro'],
			designers: ['Seishi Yokota'],
			genres: ['Action', 'Adventure'],
			modes: ['single-player'],
			platforms: ['Famicom Disk System', 'NES'],
			releases: [
				{platforms: ['Famicom Disk System'], regions: ['JP'], date: '1987-06-19'},
				{platforms: ['NES'], regions: ['NA'], date: '1988-11-xx'}
			]
		});
	});

	it('Roundball: 2 on 2 Challenge', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Roundball:_2_on_2_Challenge', 'Roundball: 2 on 2 Challenge', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/3d/RoundballNABoxShotNES.jpg',
			description: 'Roundball: 2-On-2 Challenge is a two-on-two basketball video game for the Nintendo Entertainment System that is played on a half court.',
			developers: ['Park Place Productions'],
			publishers: ['Mindscape'],
			directors: [],
			producers: ['Mark Beaumont'],
			programmers: ['Jim Hanson'],
			artists: [],
			writers: [],
			composers: ['Michelle Simon'],
			designers: [],
			genres: ['Arcade', 'Basketball', 'Sports'],
			modes: ['single-player'],
			platforms: ['NES'],
			releases: [
				{platforms: [], regions: ['NA'], date: '1992-05-27'},
				{platforms: [], regions: ['EU'], date: '1992-xx-xx'}
			]
		});
	});

	it('Asterix', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Asterix_(1993_video_game)', 'Asterix', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Asterix_NES.jpg',
			description: 'Astérix is the name of three 1993 platform games for the Nintendo Entertainment System, Super NES and Game Boy. The game are based on the comic book series Asterix, and are part of a series of games based on this license. These games were only made available in PAL format due to their exclusive European release.',
			developers: ['Atari SA', 'Bit Managers'],
			publishers: ['Atari SA'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Alberto Jose González', 'Frederic Mentzen'],
			designers: [],
			genres: ['2D', 'Action', 'Platformer'],
			modes: ['single-player'],
			platforms: ['Game Boy', 'NES', 'SNES'],
			releases: [{platforms: [], regions: ['EU'], date: '1993-xx-xx'}]
		});
	});

	it('River City Ransom', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/River_City_Ransom', 'River City Ransom', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/46/River_City_Ransom-front.jpg',
			description: "River City Ransom, later released as Street Gangs in the PAL regions, is an open world action role-playing beat 'em up video game originally for the Nintendo Entertainment System. It was developed by Technōs Japan and originally released in Japan on April 25, 1989. It is the third game in Technos' Kunio-kun series released for the console, preceded by Renegade and Super Dodge Ball. Like its predecessors, River City Ransom underwent great changes in its storyline and graphical presentation during its localization in order to make the game more palatable in the Western market. It was one of the first console games published by North American subsidiary American Technos.\n" +
				'\n' +
				'Remakes of the game have been released for the Sharp X68000, PC-Engine Super CD-ROM², and Game Boy Advance (GBA). The NES version was re-released for the Nintendo Wii Virtual Console in 2007 as well as the  Nintendo Wii U Virtual Console in October 2015. It was also released on the Nintendo 3DS Virtual Console in the PAL Regions on July 25, 2013 and in North America on November 14, 2013. It was released again on the Nintendo Switch Online service on its launch day, September 18, 2018.',
			developers: ['KID', 'Million', 'SPS', 'Technōs Japan'],
			publishers: [
				'Atari SA',
				'Atlus',
				'Naxat Soft',
				'Sharp Corporation',
				'Technōs Japan'
			],
			directors: ['Hiroyuki Sekimoto', 'Mitsuhiro Yoshida'],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Kazuo Sawa'],
			designers: [],
			genres: ['Action', "Beat 'em up", 'Role-playing'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Famicom',
				'Game Boy Advance',
				'NES',
				'Sharp X68000',
				'TurboGrafx-CD',
			],
			releases: [
				{platforms: ['Famicom', 'NES'], regions: ['JP'], date: '1989-04-25'},
				{platforms: ['Famicom', 'NES'], regions: ['NA'], date: '1990-01-xx'},
				{platforms: ['Sharp X68000'], regions: ['JP'], date: '1990-04-xx'},
				{platforms: ['Famicom', 'NES'], regions: ['EU'], date: '1992-xx-xx'},
				{platforms: ['Famicom', 'NES'], regions: ['DE'], date: '1993-08-xx'},
				{platforms: ['TurboGrafx-CD'], regions: ['JP'], date: '1993-12-24'},
				{platforms: ['Game Boy Advance'], regions: ['JP'], date: '2004-03-05'},
				{platforms: ['Game Boy Advance'], regions: ['NA'], date: '2004-05-26'}
			]
		});
	});

	it('Star Wars', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Star_Wars_(1991_video_game)', 'Star Wars', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1e/JVC_Star_Wars.jpg',
			description: 'Star Wars is an action game based on the 1977 film of the same name. It was released by Victor Musical Industries for the Family Computer in Japan on November 15, 1991 and by JVC Musical Industries for the Nintendo Entertainment System in North America in November 1991 and in Europe on March 26, 1992. An official mail order "Hint Book" was available for the game upon its release.\n' +
				'\n' +
				'Two versions for handheld game consoles were released. The Game Boy port was developed by NMS Software and published by Capcom and released shortly less than a year later in 1992. The Game Gear port was developed by Tiertex Design Studios and published by U.S. Gold and released in 1993. A Master System version was also released.\n' +
				'\n' +
				"The game was followed by a sequel, Star Wars: The Empire Strikes Back, but there never was an NES game for Return of the Jedi. A counterpart of the game for the Super NES, Super Star Wars, was released as well. On June 28, 2019, the NES and Game Boy versions were officially re-released in both standard and Collector's Edition sets with Disney and Lucasfilm's approval in limited quantities on unlicensed replica game cartridges by Limited Run Games.",
			developers: ['Beam Software', 'Lucasfilm Games', 'NMS Software', 'Tiertex'],
			publishers: [
				'Capcom',
				'JVC',
				'Nintendo',
				'Tec Toy',
				'U.S. Gold',
				'Ubisoft',
			],
			directors: [],
			producers: [],
			programmers: ['Andrew Carter'],
			artists: ['Armand Cabrera', 'Gary Winnick', 'Harrison Fong', 'Jon Knoles'],
			writers: [],
			composers: ['Marshall Parker'],
			designers: ['Akila Redmer'],
			genres: ['2D', 'Action', 'Platformer'],
			modes: ['single-player'],
			platforms: ['Game Boy', 'Game Gear', 'Master System', 'NES'],
			releases: [
				{platforms: ['Famicom', 'NES'],regions: ['JP'],date: '1991-11-15'},
				{platforms: ['Famicom', 'NES'],regions: ['NA'],date: '1991-11-xx'},
				{platforms: ['Famicom', 'NES'],regions: ['EU'],date: '1992-03-26'},
				{platforms: ['Game Boy'],regions: ['NA'],date: '1992-11-xx'},
				{platforms: ['Game Boy'],regions: ['EU'],date: '1993-06-17'},
				{platforms: ['Game Gear'],regions: ['EU', 'NA'],date: '1993-xx-xx'},
				{platforms: ['Master System'],regions: ['EU'],date: '1993-xx-xx'},
				{platforms: ['Master System'],regions: ['SA'],date: '1993-xx-xx'},
				{platforms: ['Game Boy'],regions: ['NA'],date: '1996-xx-xx'}
			]
		});
	});

	it('Racket Attack', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Racket_Attack', 'Racket Attack', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/65/Racket_Attack.jpg',
			description: 'Racket Attack is a 1988 professional tennis Nintendo Entertainment System game. It was released in Japan as Moero!! Pro Tennis (燃えろ!!プロテニス), which the second game of the Moero!! sports series. The gameplay takes place in a ¼ overhead view tennis court with the score being present at all times and an audience of spectators being shown in multiple colors (white, pink, and red). The North American version features an endorsement from Wilson Sporting Goods.\n' +
				'The game was released fairly late in the NES life cycle in Europe and the PAL regions, as available sources show, due to the lengthy process of distributing and the fact that Nintendo have still just started to get into the region by the time of the Japanese release of the game.\n' +
				'This game is seen as an overall improvement over the original Tennis video game for the Nintendo Entertainment System with a wide selection of player characters and a deep level of gameplay for the late 1980s.',
			developers: ['TOSE'],
			publishers: ['Jaleco'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: [],
			genres: ['Sports'],
			modes: ['multiplayer', 'single-player'],
			platforms: ['NES'],
			releases: [
				{platforms: [], regions: ['JP'], date: '1988-04-15'},
				{platforms: [], regions: ['NA'], date: '1988-10-01'},
				{platforms: [], regions: ['EU'], date: '1994-03-24'}
			]
		});
	});

	it('Airwolf', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Airwolf_(video_game)', 'Airwolf', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/02/NesAirwolf.jpg',
			description: 'Airwolf is a series of shooter video games based on the TV series of the same name. The first game based on the series was released for the Sinclair ZX Spectrum by Elite Systems in 1984. The game also was released on the Commodore 64, Amstrad CPC, and Atari 8-bit family. A sequel, Airwolf II, was released in 1986.\n' +
				'\n' +
				'An arcade game based on the series was developed by Kyugo and released in 1987. A Famicom port of this game was released in 1988. Kyugo also developed a Sega Genesis game based on the series, called Super Airwolf. In the US, this game was released as CrossFire without the Airwolf license or theme song. This was not the first CrossFire game from Kyugo. They had previously developed a CrossFire game for the Famicom, which was an action platformer. This game was going to be released in the US, but the release was cancelled.\n' +
				'\n' +
				'The NES version was not a port of the arcade game, but was instead developed by Beam Software and released by Acclaim in 1988. The game places the player in the cockpit of the Airwolf helicopter attempting to shoot down enemy aircraft and rescue prisoners.',
			developers: ['Beam Software', 'Kyugo'],
			publishers: [
				'Acclaim Entertainment',
				'Kyugo',
				'United Artists Theatre Amusements'
			],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: [],
			genres: ['Scrolling shooter', 'Shooter'],
			modes: ['single-player'],
			platforms: ['Arcade', 'Famicom', 'Genesis', 'NES'],
			releases: [
				{platforms: ['Arcade'], regions: [], date: '1987-09-xx'},
				{platforms: ['Famicom'], regions: ['JP'], date: '1988-12-24'},
				{platforms: ['NES'], regions: ['NA'], date: '1989-06-xx'},
				{platforms: ['NES'], regions: ['EU'], date: '1990-xx-xx'},
				{platforms: ['Genesis'], regions: ['JP'], date: '1991-03-29'},
				{platforms: ['Genesis'], regions: ['NA'], date: '1991-xx-xx'}
			]
		});
	});

	it('Noah\'s Ark', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Noah%27s_Ark_(video_game)', 'Noah\'s Ark', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/88/Noah%27s_Ark_NES_cover.jpg',
			description: "Noah's Ark is a platform game for the Nintendo Entertainment System produced by British studio Source R&D and published in 1992 by Konami. It was only released in Europe. Unlike most other games based on Biblical content released around the same time, this one was officially approved by Nintendo. It is very loosely based on the biblical story with the same name. It was planned on to be published by Matchbox in the US, but it was cancelled due to Nintendo of America having a ban on religious references.",
			developers: ['Source Research & Development'],
			publishers: ['Konami'],
			directors: [],
			producers: [],
			programmers: ['Jason Benham', 'Link Tomlin'],
			artists: ['John Cassells', 'Ross Harris'],
			writers: [],
			composers: ['Chris Gill'],
			designers: ['Jason Benham', 'John Cassells', 'Ross Harris'],
			genres: ['Platformer'],
			modes: ['single-player'],
			platforms: ['NES'],
			releases: [{platforms: [], regions: ['EU'], date: '1992-xx-xx'}]
		});
	});

	it('Q*bert', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Q*bert', 'Q*bert', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Q%2Abert_arcade_cabinet.jpg',
			description: 'Q*bert /ˈkjuːbərt/ is an arcade game developed and published for the North American market by Gottlieb in 1982. It is a 2D action game with puzzle elements that uses isometric graphics to create a pseudo-3D effect. The objective of each level in the game is to change every cube in a pyramid to a target color by making Q*bert, the on-screen character, hop on top of the cube while avoiding obstacles and enemies. Players use a joystick to control the character.\n' +
				'\n' +
				'The game was conceived by Warren Davis and Jeff Lee. Lee designed the title character and original concept, which was further developed and implemented by Davis. Q*bert was developed under the project name Cubes.\n' +
				'\n' +
				`Q*bert was well-received in arcades and among critics. The game was Gottlieb's most successful video game and is among the most recognized brands from the golden age of arcade games. It has been ported to numerous platforms. The game's success resulted in sequels and the use of the character's likeness in merchandising, such as appearances on lunch boxes, toys, and an animated television show. The Q*bert character became known for his "swearing" – an incoherent phrase made of synthesized speech generated by the sound chip and a speech balloon of nonsensical characters that appear when he collides with an enemy.\n` +
				'\n' +
				"Because the game was developed during the period when Columbia Pictures owned Gottlieb, the intellectual rights to Q*bert remained with Columbia, even after they divested themselves of Gottlieb's assets in 1984. Therefore, the rights have been owned by Sony Pictures Entertainment since its parent, Sony, acquired Columbia in 1989. Q*bert appeared in Disney's Wreck-It Ralph franchise under license from Sony, and later appeared in the film Pixels.",
			developers: ['Gottlieb'],
			publishers: ['Gottlieb', 'Konami', 'Parker Brothers', 'Sega', 'Ultra Games'],
			directors: [],
			producers: [],
			programmers: ['Warren Davis'],
			artists: ['Jeff Lee'],
			writers: [],
			composers: ['David Thiel'],
			designers: ['Jeff Lee', 'Warren Davis'],
			genres: ['Action'],
			modes: ['alternating', 'multiplayer', 'single-player'],
			platforms: [
				'Arcade', 'Atari 2600',
				'Atari 5200', 'Atari 8-bit',
				'ColecoVision', 'Commodore 64',
				'Dreamcast', 'Game Boy',
				'Game Boy Color',
				'Intellivision', 'MSX',
				'Mobile phone', 'NES',
				'Odyssey²', 'PlayStation 3',
				'PlayStation 4', 'PlayStation Vita',
				'SG-1000',
				'TI-99/4A', 'VIC-20',
				'ZX Spectrum', 'iOS',
			],
			releases: [
				{platforms: ['Arcade'], regions: ['NA'], date: '1982-10-18'},
				{platforms: ['Arcade'], regions: ['EU', 'JP'], date: '1983-03-xx'},
				{platforms: ['Atari 2600'], regions: ['NA'], date: '1983-xx-xx'},
				{platforms: ['Atari 5200'], regions: ['NA'], date: '1983-xx-xx'},
				{platforms: ['ColecoVision'], regions: ['NA'], date: '1983-xx-xx'},
				{platforms: ['Intellivision'], regions: ['NA'], date: '1983-xx-xx'},
				{platforms: ['Commodore 64'], regions: ['NA'], date: '1984-xx-xx'},
				{platforms: ['ZX Spectrum'], regions: ['NA'], date: '1984-xx-xx'},
				{platforms: ['NES'], regions: ['NA'], date: '1989-xx-xx'},
				{platforms: ['Game Boy'], regions: ['JP'], date: '1992-01-14'},
				{platforms: ['Game Boy'], regions: ['NA'], date: '1992-02-xx'},
				{platforms: ['Game Boy'], regions: ['EU'], date: '1992-xx-xx'},
				{platforms: ['Game Boy Color'],regions: ['NA'], date: '2000-xx-xx'},
				{platforms: ['Mobile phone'], regions: ['NA'], date: '2003-xx-xx'},
				{platforms: ['iOS'], regions: ['NA'], date: '2014-07-02'},
				{platforms: ['PlayStation 3'], regions: ['NA'], date: '2015-02-17'},
				{platforms: ['PlayStation 4'], regions: ['NA'], date: '2015-02-17'},
				{platforms: ['PlayStation Vita'], regions: ['NA'], date: '2015-02-17'},
				{platforms: ['PlayStation 3'], regions: ['EU'], date: '2015-02-18'},
				{platforms: ['PlayStation 4'], regions: ['EU'], date: '2015-02-18'},
				{platforms: ['PlayStation Vita'], regions: ['EU'], date: '2015-02-18'}
			]
		});
	});

	it('WWF WrestleMania Challenge', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/WWF_WrestleMania_Challenge', 'WWF WrestleMania Challenge', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/24/Wmchallenge.JPG',
			description: 'WWF WrestleMania Challenge is a professional wrestling video game based on the World Wrestling Federation (WWF), released in 1990 for the Nintendo Entertainment System by LJN and in 1992 for the Family Computer by Hot-B.\n' +
				'\n' +
				'The game features nine wrestlers: Hulk Hogan, André the Giant, "Macho King" Randy Savage, The Ultimate Warrior, The Big Boss Man, Brutus "The Barber" Beefcake, Ravishing Rick Rude, Hacksaw Jim Duggan, and "Yourself" (a generic character). In a two-player game, both players can choose a differently-shaded version of Yourself, each having a unique theme song.\n' +
				'\n' +
				'The game was originally developed under the title WWF Survivor Series. After this release, development of games under the WrestleMania name shifted to Sculptured Software, which developed WWF Super WrestleMania and WWF WrestleMania: Steel Cage Challenge.',
			developers: ['Rare'],
			publishers: ['Hot-B', 'LJN'],
			directors: [],
			producers: [],
			programmers: ['Mark Wilson'],
			artists: ['Kev Bayliss'],
			writers: [],
			composers: ['David Wise'],
			designers: ['Tim Stamper'],
			genres: ['Sports', 'Wrestling'],
			modes: ['multiplayer', 'single-player'],
			platforms: ['NES'],
			releases: [
				{platforms: [], regions: ['NA'], date: '1990-11-xx'},
				{platforms: [], regions: ['EU'], date: '1991-xx-xx'},
				{platforms: [], regions: ['JP'], date: '1992-xx-xx'}
			]
		});
	});

	it('International Cricket', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/International_Cricket', 'International Cricket', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/82/InternationalCricketAUBoxShotNES.jpg',
			description: "International Cricket is a cricket video game for the Nintendo Entertainment System. It was developed by Melbourne based Beam Software and published under their Laser Beam Entertainment publishing arm in 1992. Aussie Rules Footy shares the same presentation style as this game. Like Aussie Rules Footy, the game was distributed exclusively by Mattel's Australian operation.\n" +
				'\n' +
				'There were no attempts to release a cricket video game to the North American, Japanese, or European markets. The reason is that baseball games dominated the North American and Japanese markets while soccer dominated the European market during that era. Two buttons are used to control the action; one for hitting the cricket ball while the other allows the player to slog around.\n' +
				'\n' +
				'One of the shortcomings in the game is the simple AI; the average player can bowl the computer out for totals not exceeding 20. Some of the other poor features in the game are the unrealistically green grass and the uninspired music found in the menu screens.',
			developers: ['Beam Software'],
			publishers: ['Beam Software'],
			directors: [],
			producers: [],
			programmers: ['Brian Post', 'Darren Bremner'],
			artists: ['Grant Arthur', 'Joe Rimmer', 'Paul Mitchell'],
			writers: [],
			composers: ['Gavan Anderson', 'Marshall Parker'],
			designers: ['Jef Kamenek'],
			genres: ['Cricket', 'Sports'],
			modes: ['multiplayer', 'single-player'],
			platforms: ['NES'],
			releases: [{platforms: [], regions: ['AU'], date: '1992-xx-xx'}]
		});
	});

	it('Aussie Rules Footy', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Aussie_Rules_Footy', 'Aussie Rules Footy', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/ca/Aussie_Rules_Footy_cover_art.jpg',
			description: `Aussie Rules Footy is the first AFL simulation video game for the Nintendo Entertainment System. It was developed by Melbourne based Beam Software and published under their "Laser Beam" publishing title in 1992. The release was Australian-only with distribution handled through Mattel's Australian operations.`,
			developers: ['Beam Software'],
			publishers: ['Beam Software'],
			directors: [],
			producers: ['Sue Anderson'],
			programmers: ['Andrew Davie', 'Darren Bremner', 'Gregg Barnett'],
			artists: ['Grant Arthur', 'Paul Mitchell'],
			writers: [],
			composers: ['Gavan Anderson', 'Marshall Parker'],
			designers: [],
			genres: ['Sports'],
			modes: ['multiplayer', 'single-player'],
			platforms: ['NES'],
			releases: [{platforms: [], regions: ['AU'], date: '1992-xx-xx'}]
		});
	});

	it('Monopoly', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Monopoly_(1991_video_game)', 'Monopoly', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Monopoly_%281991%29_Video_Game_Cover.jpg',
			description: 'Monopoly is a  video game based on the board game Monopoly, released on Game Boy, Genesis, NES, and SNES. Developed by Sculptured Software and published by Parker Brothers (the Game Boy version was published by Majesco Sales), this title was one of many inspired by the property.\n' +
				'\n' +
				'It is not to be confused with the 1993 Monopoly game, which was released in Japan only.',
			developers: ['Sculptured Software'],
			publishers: ['Majesco Entertainment', 'Parker Brothers'],
			directors: [],
			producers: [],
			programmers: [
				'Bill Williams',
				'Jeff Hughes',
				'John Lund',
				'Ryan Ridges',
				'Yousuke Shimizu'
			],
			artists: [],
			writers: [],
			composers: ['Nu Romantic Productions', 'Paul Webb'],
			designers: [],
			genres: ['Board game', 'Strategy'],
			modes: [],
			platforms: ['Game Boy', 'Genesis', 'NES', 'SNES'],
			releases: [{platforms: [], regions: [], date: '1991-xx-xx'}]
		});
	});

	it('Zombie Nation', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Zombie_Nation_(video_game)', 'Zombie Nation', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Zombienation.jpg',
			description: `Zombie Nation is a  1990 Shoot 'em up game developed by KAZe and published by Meldac. It was first released in Japan on December 14, 1990 under the title Abarenbou Tengu (暴 (あば)れん坊天狗 (ぼうてんぐ), Abarenbō Tengu, lit. "Hooligan Tengu"), before being released later in the United States in January 1991. This game features a juxtaposition of zombies, aliens and samurai.\n` +
				'\n' +
				'In Zombie Nation, the floating samurai head Namakubi goes to the United States to destroy Darc Seed—an alien who crashed to Earth via a meteorite in 1999, turned all the American people into zombies, and took control of various deadly weapons. Namakubi must recover the samurai sword Shura and destroy Darc Seed and its minions.',
			developers: ['KAZe'],
			publishers: ['City Connection', 'Liveplanning', 'Meldac'],
			directors: ['Norio Nakagata'],
			producers: ['Junichiro Kawazoe', 'Sueo Sekizawa'],
			programmers: ['Kunihiro Hiramatsu'],
			artists: ['Shin-ichi Ogawa', 'Takao Yoshiba'],
			writers: [],
			composers: ['Norio Nakagata', 'Takane Ohkubo'],
			designers: ['Takane Ohkubo'],
			genres: ["Shoot 'em up"],
			modes: ['single-player'],
			platforms: ['NES', 'Nintendo Switch', 'Windows'],
			releases: [
				{platforms: ['NES'], regions: ['JP'], date: '1990-12-14'},
				{platforms: ['NES'], regions: ['NA'], date: '1991-01-xx'},
				{platforms: ['Nintendo Switch', 'Windows'], regions: ['JP'], date: '2021-10-28'}
			]
		});
	});

	it('Galaga: Demons of Death', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Galaga', 'Galaga: Demons of Death', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Galaga_flyer.jpg',
			description: `Galaga is a 1981 fixed shooter arcade game developed and published by Namco. In North America, it was released by Midway Manufacturing. It is the sequel to Galaxian (1979), Namco's first major video game hit in arcades. Controlling a starship, the player is tasked with destroying the Galaga forces in each stage while avoiding enemies and projectiles. Some enemies can capture a player's ship via a tractor beam, which can be rescued to transform the player into a "dual fighter" with additional firepower.\n` +
				'\n' +
				"Shigeru Yokoyama led development with a small team. Initial planning took about two months to finish. Originally developed for the Namco Galaxian arcade board, it was instead shifted to a new system as suggested by Namco's Research and Development division. Inspiration for the dual fighter mechanic was taken from a film that Yokoyama had seen prior to development, where a ship was captured using a large circular beam. The project became immensely popular around the company, with Namco's president Masaya Nakamura even taking interest.\n" +
				'\n' +
				'Although early location tests were unsuccessful, Galaga received critical acclaim and went on to become one of the most successful arcade games, routinely appearing on Japanese and American arcade charts through 1987. It is widely regarded as a classic of the golden age of arcade video games and one of the greatest video games of all time. Critics applauded its gameplay, innovation, addictive nature and improvements made over its predecessor. Several home ports were released for a multitude of platforms, including the MSX, Atari 7800 and Nintendo Entertainment System, alongside releases on digital distribution platforms such as Xbox Live Arcade. Galaga is also included in many Namco compilations. It was followed by a sequel in 1984, Gaplus.',
			developers: ['Namco'],
			publishers: ['Midway Games', 'Namco'],
			directors: ['Shigeru Yokoyama'],
			producers: [],
			programmers: ['Tetsu Ogawa'],
			artists: [],
			writers: [],
			composers: ['Nobuyuki Ohnogi'],
			designers: ['Hiroshi Ono'],
			genres: ['Fixed shooter', 'Shooter'],
			modes: ['alternating', 'multiplayer', 'single-player'],
			platforms: [
				'Arcade', 'Atari 7800',
				'Game Boy', 'MSX',
				'Mobile phone', 'NES',
				'PlayStation 4', 'Roku',
				'SG-1000', 'Windows',
				'Xbox 360', 'Xbox One',
				'iOS'
			],
			releases: [
				{platforms: [], regions: ['JP'], date: '1981-07-23'},
				{platforms: [], regions: ['NA'], date: '1981-10-xx'},
				{platforms: [], regions: ['EU'], date: '1981-xx-xx'}
			]
		});
	});

	it('Abadox: The Deadly Inner War', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Abadox', 'Abadox: The Deadly Inner War', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/70/Abadox_box_art.jpg',
			description: "Abadox (アバドックス, Abadokkusu) is a video game for the NES, subtitled The Deadly Inner War. It is a side-scrolling shoot 'em up in the vein of Gradius and R-Type. The game is notable for its unique visual design, as the game takes place inside the intestinal tract of a giant alien organism. Abadox is also known to be difficult, since it takes one hit from an enemy projectile to be killed. In Abadox, if a player is killed, one must restart from a checkpoint passed before death.",
			developers: ['Natsume'],
			publishers: ['Milton Bradley Company', 'Natsume'],
			directors: ['Atsushi Okazaki'],
			producers: ['Tadashi Makimura', 'Takashi Nagai'],
			programmers: ['Kimiya Sasaki', 'Kōichi Dekune', 'Seiichi Tajima'],
			artists: ['Hidenobu Takahashi'],
			writers: [],
			composers: ['Kiyohiro Sada'],
			designers: [],
			genres: ["Shoot 'em up"],
			modes: ['single-player'],
			platforms: ['NES'],
			releases: [
				{platforms: [], regions: ['JP'], date: '1989-12-15'},
				{platforms: [], regions: ['NA'], date: '1990-03-xx'}
			]
		});
	});

	it('Wizardry: Proving Grounds of the Mad Overlord', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Wizardry:_Proving_Grounds_of_the_Mad_Overlord', 'Wizardry: Proving Grounds of the Mad Overlord', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/20/Wizardry_pgotmo.jpg',
			description: 'Wizardry: Proving Grounds of the Mad Overlord is the first game in the Wizardry series of role-playing video games. It was developed by Andrew Greenberg and Robert Woodhead.  In 1980, Norman Sirotek formed Sir-Tech Software, Inc. and launched a beta version of the product at the 1980 Boston Computer Convention.  The final version of the game was released in 1981.\n' +
				'\n' +
				'The game was one of the first Dungeons & Dragons-style role-playing games to be written for computer play, and the first such game to offer color graphics. It was also the first true party-based role-playing video game.\n' +
				'\n' +
				'The game ended up as the first of a trilogy that also included Wizardry II: The Knight of Diamonds and Wizardry III: Legacy of Llylgamyn.',
			developers: ['Game Studio', 'Sir-Tech'],
			publishers: ['Nexoft Corporation', 'Sir-Tech'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: ['Andrew C. Greenberg', 'Robert Woodhead'],
			genres: ['Role-playing'],
			modes: ['single-player'],
			platforms: [
				'Apple II', 'Commodore 128',
				'Commodore 64', 'FM-7',
				'Game Boy Color', 'IBM PC',
				'MSX2',
				'Mac OS',
				'NES',
				'PC-9801',
				'Sharp X1', 'Super Famicom',
				'TurboGrafx-16'
			],
			releases: [
				{platforms: ['Apple II'], regions: ['NA'], date: '1980-xx-xx'},
				{platforms: ['Apple II'], regions: ['NA'], date: '1981-09-xx'},
				{platforms: ['PC booter'], regions: ['NA'], date: '1984-xx-xx'},
				{platforms: ['PC-9801'], regions: ['JP'], date: '1985-11-15'},
				{platforms: ['FM-7'], regions: ['JP'], date: '1985-11-xx'},
				{platforms: ['Mac OS'], regions: ['NA'], date: '1985-12-xx'},
				{platforms: ['PC-8801'], regions: ['JP'], date: '1985-12-xx'},
				{platforms: ['Sharp X1'], regions: ['JP'], date: '1986-01-xx'},
				{platforms: ['NES'], regions: ['JP'], date: '1987-12-22'},
				{platforms: ['Commodore 64'], regions: ['NA'], date: '1987-xx-xx'},
				{platforms: ['MSX2'], regions: ['JP'], date: '1987-xx-xx'},
				{platforms: ['NES'], regions: ['NA'], date: '1990-07-xx'},
				{platforms: ['TurboGrafx-CD'], regions: ['JP'], date: '1993-07-23'},
				{platforms: ['Super Famicom'], regions: ['JP'], date: '1999-06-01'},
				{platforms: ['Game Boy Color'], regions: ['JP'], date: '2001-02-23'},
				{platforms: ['WonderSwan Color'], regions: ['JP'], date: '2003-03-01'}
			],
		});
	});

	it('Road Fighter', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Road_Fighter', 'Road Fighter', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/ca/RoadFighter_arcadeflyer.png',
			description: 'Road Fighter (ロードファイター, Rōdo Faitā) is a racing arcade game developed by Konami and released in 1984. It was the first racing game from Konami. The goal is to reach the finish line within the stages without running out of time, hitting other cars or running out of fuel (which is refilled by hitting a special type of car). The game spawned a spiritual successor, Konami GT (1986), and two sequels, Midnight Run: Road Fighter 2 (1995) and Winding Heat (1996). A Japan-only sequel was also released 14 years later, Winding Heat (2010).',
			developers: ['Konami'],
			publishers: ['Konami', 'Palcom'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: [],
			genres: ['Racing', 'Sports'],
			modes: [],
			platforms: [
				'Android',
				'Arcade',
				'MSX',
				'Mobile phone',
				'NES',
				'Nintendo Switch',
				'PlayStation 4'
			],
			releases: [
				{platforms: ['Arcade'], regions: ['NA'], date: '1984-11-xx'},
				{platforms: ['Arcade'], regions: ['JP'], date: '1984-12-xx'},
				{platforms: ['Arcade'], regions: ['EU'], date: '1984-xx-xx'},
				{platforms: ['MSX'], regions: ['JP'], date: '1985-xx-xx'},
				{platforms: ['Mobile phone'], regions: ['JP'], date: '2005-xx-xx'}
			]
		});
	});

	it('Metal Storm', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Metal_Storm_(video_game)', 'Metal Storm', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/46/Metal_Storm_North_American_NES_box_art.jpg',
			description: 'Metal Storm is an action-platform video game developed by Tamtex and published by Irem for the Nintendo Entertainment System.\n' +
				'\n' +
				'The story takes place in 2501, when a laser weapon at a defense outpost on Pluto has malfunctioned and begun destroying the Solar System. The player takes on the role of the M-308 Gunner, which storms into the defense base in order to activate the self-destruct system before the laser gun destroys Earth. The M-308 is equipped with a gravity control device which allows the player to flip between the floor and ceiling, a main feature of the game. Metal Storm received positive reviews from gaming publications.',
			developers: ['Tamtex'],
			publishers: ['Irem', 'Limited Run Games', 'Retro-Bit'],
			directors: ['Kengo Miyata'],
			producers: ['Hiroshi Futami'],
			programmers: ['Hikaru Yamashita'],
			artists: [],
			writers: [],
			composers: ['Toru Watanabe'],
			designers: [],
			genres: ['Action', 'Platformer'],
			modes: ['single-player'],
			platforms: ['NES'],
			releases: [
				{platforms: [], regions: ['NA'], date: '1991-02-xx'},
				{platforms: [], regions: ['JP'], date: '1992-04-24'},
				{platforms: [], regions: ['WW'], date: '2019-10-xx'}
			]
		});
	});

	it('Might and Magic Book One: The Secret of the Inner Sanctum', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Might_and_Magic_Book_One:_The_Secret_of_the_Inner_Sanctum', 'Might and Magic Book One: The Secret of the Inner Sanctum', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8b/M%26MI.jpg',
			description: "Might and Magic Book One: The Secret of the Inner Sanctum (also known as simply Might and Magic) is an early role-playing video game, first in the popular and influential Might and Magic franchise. It was released in 1986 as New World Computing's debut, ported to numerous platforms and re-released continuously through the early '90s.",
			developers: ['New World Computing'],
			publishers: ['Gakken', 'New World Computing', 'Sammy Corporation', 'StarCraft'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Masaharu Iwata', 'Raoul Kraushaar'],
			designers: ['Jon Van Caneghem'],
			genres: ['Role-playing'],
			modes: ['single-player'],
			platforms: [
				'Apple II', 'Commodore 64',
				'FM-7', 'MS-DOS',
				'MSX', 'Mac OS',
				'NES',
				'PC-8801', 'PC-9801',
				'Sharp X1',
				'Sharp X68000',
				'TurboGrafx-16',
			],
			releases: [
				{platforms: ['Apple II'], regions: ['NA'], date: '1986-xx-xx'},
				{platforms: ['NES'], regions: ['JP'], date: '1990-07-31'},
				{platforms: ['NES'], regions: ['NA'], date: '1992-08-xx'}
			]
		});
	});

	it('Silkworm', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Silkworm_(video_game)', 'Silkworm', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d4/Silkworm_Cover.jpg',
			description: 'Silkworm is a horizontally scrolling shooter developed by Tecmo and first released for arcade in 1988.  In 1989 it was ported to the Amiga, Atari ST, Commodore 64, ZX Spectrum, Amstrad CPC and NES (1990) systems by The Sales Curve and released by Virgin Mastertronic.\n' +
				'\n' +
				`Silkworm also spawned what many consider to be a spiritual successor to the game SWIV.  While SWIV was not a direct sequel, it followed the same core gameplay design of a helicopter/jeep team, albeit as a vertically scrolling shooter instead of a horizontally scrolling one. SWIV was described in the game's manual to mean both "Special Weapons Intercept Vehicles" and "Silkworm IV".`,
			developers: ['Tecmo'],
			publishers: [
				'Sammy Corporation',
				'Tecmo',
				'The Sales Curve',
				'Virgin Mastertronic'
			],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Barry Leitch'],
			designers: [],
			genres: ['Scrolling shooter', 'Shooter'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Amiga',
				'Amstrad CPC',
				'Arcade',
				'Atari ST',
				'Commodore 64',
				'NES',
				'ZX Spectrum'
			],
			releases: [{platforms: [], regions: [], date: '1988-xx-xx'}]
		});
	});

	it('Life Force', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Salamander_(video_game)', 'Life Force', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/11/Salamander_flyer.png',
			description: 'Salamander (沙羅曼蛇 (サラマンダ), Saramanda), retitled Life Force (ライフフォース, Raifu Fōsu) in North America and in the Japanese arcade re-release, is a scrolling shooter arcade game by Konami. Released in 1986 as a spin-off of Gradius, Salamander introduced a simplified power-up system, two-player cooperative gameplay and both horizontally and vertically scrolling stages. Some of these later became the norm for future Gradius games.\n' +
				'\n' +
				'Salamander was followed with a sequel in 1996 titled Salamander 2.',
			developers: ['Konami', 'SPS'],
			publishers: ['Imagine Software', 'Konami', 'Sharp Corporation'],
			directors: [],
			producers: [],
			programmers: ['Hiroyasu Machiguchi'],
			artists: [],
			writers: [],
			composers: [
				'Atsushi Fujio',
				'Hidenori Maezawa',
				'Miki Higashino',
				'Satoe Terashima',
				'Shinya Sakamoto'
			],
			designers: [],
			genres: ['Scrolling shooter', 'Shooter'],
			modes: ['cooperative', 'multiplayer', 'single-player'],
			platforms: [
				'Amstrad CPC',
				'Arcade',
				'Commodore 64',
				'Famicom',
				'MSX',
				'Mobile phone',
				'NES',
				'PC',
				'PlayStation 3',
				'PlayStation Portable',
				'PlayStation Vita',
				'Sharp X68000',
				'TurboGrafx-16',
				'Virtual Console',
				'ZX Spectrum'
			],
			releases: [
				{platforms: ['Arcade'], regions: ['JP'], date: '1986-07-04'},
				{platforms: ['Arcade'], regions: ['NA'], date: '1986-10-xx'},
				{platforms: ['Arcade'], regions: ['EU'], date: '1986-xx-xx'},
				{platforms: ['Famicom', 'NES'], regions: ['JP'], date: '1987-09-25'},
				{platforms: ['MSX'], regions: ['JP'], date: '1987-12-xx'},
				{platforms: ['Arcade'], regions: ['JP'], date: '1987-xx-xx'},
				{platforms: ['MSX'], regions: ['EU'], date: '1987-xx-xx'},
				{platforms: ['Famicom', 'NES'], regions: ['NA'], date: '1988-08-26'},
				{platforms: ['Sharp X68000'], regions: ['JP'], date: '1988-10-xx'},
				{platforms: ['Amstrad CPC'], regions: ['EU'], date: '1988-xx-xx'},
				{platforms: ['Commodore 64'], regions: ['EU'], date: '1988-xx-xx'},
				{platforms: ['ZX Spectrum'], regions: ['EU'], date: '1988-xx-xx'},
				{platforms: ['Famicom', 'NES'], regions: ['EU'], date: '1989-11-22'},
				{platforms: ['Commodore 64'], regions: ['NA'], date: '1989-xx-xx'},
				{platforms: ['TurboGrafx-16'], regions: ['JP'], date: '1991-12-06'},
				{platforms: ['Mobile phone'], regions: ['JP'], date: '2003-08-18'},
				{platforms: ['Wii Virtual Console'], regions: ['JP'], date: '2007-09-11'},
				{platforms: ['Wii Virtual Console'], regions: ['JP'], date: '2008-12-24'},
				{platforms: ['Wii Virtual Console'], regions: ['NA'], date: '2009-02-16'},
				{platforms: ['Wii Virtual Console'], regions: ['JP'], date: '2010-01-12'},
				{platforms: ['PlayStation Network'], regions: ['JP'], date: '2010-07-21'},
				{platforms: ['iOS'], regions: ['WW'], date: '2010-12-20'},
				{platforms: ['3DS Virtual Console'], regions: ['JP'], date: '2013-02-20'},
				{platforms: ['3DS Virtual Console'], regions: ['EU'], date: '2013-12-19'},
				{platforms: ['3DS Virtual Console'], regions: ['NA'], date: '2014-01-23'},
				{platforms: ['PC'], regions: ['JP'], date: '2014-03-03'},
				{platforms: ['Wii U Virtual Console'], regions: ['NA'], date: '2014-08-21'},
				{platforms: ['Wii U Virtual Console'], regions: ['EU'], date: '2014-09-18'},
				{platforms: ['Wii U Virtual Console'], regions: ['JP'], date: '2014-10-08'},
				{platforms: ['Wii U Virtual Console'], regions: ['JP'], date: '2014-10-22'},
				{platforms: ['PC'], regions: ['JP'], date: '2015-05-19'},
				{platforms: ['Arcade Archives'], regions: ['JP'], date: '2015-11-27'}
			]
		});
	});

	it('Balloon Fight', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Balloon_Fight', 'Balloon Fight', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a8/BalloonFightnesboxart.jpg',
			description: 'Balloon Fight is an action video game developed by Nintendo. The original arcade version was released for the Nintendo VS. System internationally as Vs. Balloon Fight, while its Nintendo Entertainment System counterpart was released in Japan in 1985 and internationally in 1986.\n' +
				'\n' +
				"The gameplay is similar to the 1982 game Joust from Williams Electronics. The home Nintendo Entertainment System version was ported to the NEC PC-8801 in October 1985, the Sharp X1 in November 1985, the Game Boy Advance as Balloon Fight-e for the e-Reader in the United States on September 16, 2002, and as part of the Famicom Mini Series in Japan on May 21, 2004. It was later rereleased through Nintendo's Virtual Console and NES Classic Edition and is currently available to play on Nintendo Switch Online.",
			developers: ['Nintendo R&D1'],
			publishers: ['Hudson Soft', 'Nintendo'],
			directors: [],
			producers: [],
			programmers: ['Satoru Iwata'],
			artists: [],
			writers: [],
			composers: ['Hirokazu Tanaka'],
			designers: ['Yoshio Sakamoto'],
			genres: ['Action'],
			modes: ['single-player'],
			platforms: [
				'Arcade',
				'Game Boy Advance',
				'MZ-1500',
				'NES',
				'PC-8801',
				'Sharp X1',
				'Sharp Zaurus'
			],
			releases: [
				{platforms: ['Arcade'], regions: ['NA'], date: '1984-09-xx'},
				{platforms: ['Arcade'], regions: ['JP'], date: '1984-10-03'},
				{platforms: ['Famicom', 'NES'],regions: ['JP'],date: '1985-01-22'},
				{platforms: ['PC-8801'], regions: ['JP'], date: '1985-10-xx'},
				{platforms: ['Sharp X1'],regions: ['JP'],date: '1985-11-xx'},
				{platforms: ['MZ-1500'], regions: ['JP'], date: '1985-xx-xx'},
				{platforms: ['Famicom', 'NES'],regions: ['NA'],date: '1986-06-18'},
				{platforms: ['Famicom', 'NES'],regions: ['PAL'],date: '1987-03-12'},
				{platforms: ['Arcade'], regions: ['EU'], date: '1987-xx-xx'},
				{platforms: ['Sharp Zaurus'],regions: ['JP'],date: '2001-09-xx'},
				{platforms: ['Nintendo e-Reader'],regions: ['NA'],date: '2002-09-16'},
				{platforms: ['Game Boy Advance'],regions: ['JP'],date: '2004-05-21'}
			]
		});
	});

	it('Magic Johnson\'s Fast Break', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Magic_Johnson%27s_Fast_Break', 'Magic Johnson\'s Fast Break', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Magic_Johnson%27s_Basketball_Coverart.png',
			description: `Magic Johnson's Fast Break (alternatively titled Magic Johnson's Basketball) is a side-scrolling basketball sports game developed by Arcadia Systems and published in 1988. The game features the name and likeness of Los Angeles Lakers point guard Earvin "Magic" Johnson Jr., and was endorsed by PepsiCo.`,
			developers: ['Arcadia Systems', 'Software Creations'],
			publishers: [
				'Arcadia Systems',
				'DRO Soft',
				'Melbourne House',
				'Tradewest'
			],
			directors: [],
			producers: [],
			programmers: [],
			artists: ['Joe Hitchens'],
			writers: [],
			composers: ['Tim Follin'],
			designers: [],
			genres: ['Basketball', 'Sports'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Amiga',
				'Amstrad CPC',
				'Arcade',
				'Commodore 64',
				'MS-DOS',
				'MSX',
				'NES',
				'ZX Spectrum'
			],
			releases: [{platforms: [], regions: ['NA'], date: '1988-xx-xx'}]
		});
	});

	it('Freedom Force', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Freedom_Force_(video_game)', 'Freedom Force', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b2/Freedom_Force_Video_Game_Boxcover.jpg',
			description: 'Freedom Force is a video game created by Sunsoft and released in 1988 for the Nintendo Entertainment System. In the game, the player takes the role of a sharpshooter in a counter-terrorist organization. Freedom Force was also one of the few NES games to require the NES Zapper light gun accessory. The game was released in arcades on the Nintendo Vs. System as Vs. Freedom Force.',
			developers: ['Sunsoft'],
			publishers: ['Sunsoft'],
			directors: [],
			producers: ['Joe Robbins', 'Kiharu Yoshida'],
			programmers: ['Hiroaki Higashiya', 'Tomomi Sakai'],
			artists: ['Katsunori Kobayashi', 'Rieko Sakai', 'Yasuyuki Osada'],
			writers: [],
			composers: ['Naoki Kodaka'],
			designers: ['Michael Mendheim', 'Richard Robbins'],
			genres: ['Action', 'Light gun', 'Shooter'],
			modes: ['multiplayer', 'single-player'],
			platforms: ['Arcade', 'NES'],
			releases: [
				{platforms: ['NES'], regions: ['NA'], date: '1988-04-xx'},
				{platforms: ['Nintendo VS. System'], regions: ['NA'], date: '1988-xx-xx'}
			]
		});
	});

	it('Star Wars: The Empire Strikes Back', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Star_Wars:_The_Empire_Strikes_Back_(1992_video_game)', 'Star Wars: The Empire Strikes Back', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Star_Wars_The_Empire_Strikes_Back_NES_cover.jpg',
			description: 'Star Wars: The Empire Strikes Back is a video game released for the Nintendo Entertainment System in 1992. It is the sequel the original Star Wars for the NES. This is the second of three video games released under the Empire Strikes Back title that were developed directly for home video game systems. It was preceded by a version for the Atari 2600 and succeeded by Super Star Wars: The Empire Strikes Back for the Super NES.\n' +
				'\n' +
				'After the game was completed, the developers were occupied making Super Star Wars for the Super NES, so a corresponding NES sequel covering the film Return of the Jedi was never developed, nor released.\n' +
				'\n' +
				'A version of the game was released for the Game Boy. It was reprinted and distributed by several publishers over the course of three years.\n' +
				'\n' +
				"On July 26, 2019, the NES and Game Boy versions were officially re-released in both standard and Collector's Edition sets with Disney and Lucasfilms's approval in limited quantities on unlicensed replica game cartridges by Limited Run Games.",
			developers: ['Lucasfilm Games', 'NMS Software', 'Sculptured Software'],
			publishers: ['Capcom', 'JVC', 'Ubisoft'],
			directors: [],
			producers: [],
			programmers: ['Ken Grant'],
			artists: ['Armand Cabrera', 'Harrison Fong', 'Jon Knoles'],
			writers: [],
			composers: ['Mark Cooksey', 'Paul Webb'],
			designers: ['Kalani Streicher', 'Mike Ebert'],
			genres: ['2D', 'Action', 'Adventure', 'Platformer'],
			modes: ['single-player'],
			platforms: ['Game Boy', 'NES'],
			releases: [
				{platforms: ['Famicom', 'NES'],regions: ['JP'],date: '1992-03-12'},
				{platforms: ['Famicom', 'NES'],regions: ['NA'],date: '1992-03-xx'},
				{platforms: ['Famicom', 'NES'],regions: ['EU'],date: '1992-xx-xx'},
				{platforms: ['Game Boy'],regions: ['NA'],date: '1993-01-xx'},
				{platforms: ['Game Boy'],regions: ['NA'],date: '1996-xx-xx'}
			]
		});
	});

	it('Jack Nicklaus\' Greatest 18 Holes of Major Championship Golf', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Jack_Nicklaus%27_Greatest_18_Holes_of_Major_Championship_Golf', 'Jack Nicklaus\' Greatest 18 Holes of Major Championship Golf', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Jack_Nicklaus%27_Greatest_18_Holes_of_Major_Championship_Golf.jpg',
			description: "Jack Nicklaus' Greatest 18 Holes of Major Championship Golf is a golf-simulation video game developed by Sculptured Software, and published by Accolade beginning in 1988. It was released for Amiga, Amstrad CPC, Apple IIGS, Atari ST, Commodore 64 (C64), MS-DOS, Macintosh, MSX, Nintendo Entertainment System (NES), PC-88, and Sharp X68000.\n" +
				'\n' +
				"During 1990 and 1991, the game was released in HuCard cartridge and CD-ROM formats for the U.S TurboGrafx-16 and its foreign counterpart, PC Engine. The TurboGrafx-16 versions of the game were titled Jack Nicklaus' Turbo Golf, while the PC Engine version was titled Jack Nicklaus World Golf Tour for the CD-ROM format. A Game Boy version was released as Jack Nicklaus Golf in 1992.\n" +
				'\n' +
				"It was the first in a series of golf games named after golfer Jack Nicklaus, and was followed by Jack Nicklaus' Unlimited Golf & Course Design (1990).",
			developers: ['Beam Software', 'Sculptured Software'],
			publishers: ['Accolade', 'JVC', 'Konami', 'Tradewest'],
			directors: [],
			producers: ['Keith Orr'],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Advance Communication Company', 'Paul Webb'],
			designers: ['Ned Martin'],
			genres: ['Golf', 'Sports'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Amiga',
				'Amstrad CPC',
				'Apple IIGS',
				'Atari ST',
				'Commodore 64',
				'Game Boy',
				'MS-DOS',
				'MSX',
				'Mac OS',
				'NES',
				'PC-8801',
				'Sharp X68000',
				'TurboGrafx-16'
			],
			releases: [
				{platforms: ['NES'], regions: ['NA'], date: '1990-03-xx'},
				{platforms: ['NES'], regions: ['UK'], date: '1991-08-xx'},
				{platforms: ['Game Boy'], regions: ['NA'], date: '1992-05-xx'},
			]
		});
	});

	it('Hatris', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Hatris', 'Hatris', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/71/Hatris_cover.png',
			description: 'Hatris (ハットリス, Hattorisu) is a puzzle video game developed by Alexey Pazhitnov for Bullet-Proof Software. An arcade version was manufactured by Video System.',
			developers: ['Bullet-Proof Software'],
			publishers: ['Bullet-Proof Software', 'Video System'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: ['Alexey Pajitnov'],
			genres: ['Puzzle'],
			modes: ['single-player'],
			platforms: ['Arcade', 'Game Boy', 'NES', 'TurboGrafx-16'],
			releases: [{platforms: [], regions: [], date: '1990-xx-xx'}]
		});
	});

	it('NARC', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Narc_(video_game)', 'NARC', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/52/Narc_arcade_flyer.png',
			description: 'Narc (stylized as NARC) is a 1988 run and gun arcade game designed by Eugene Jarvis for Williams Electronics and programmed by George Petro. It was one of the first ultra-violent video games and a frequent target of parental criticism of the video game industry. The object is to arrest and kill drug offenders, confiscate their money and drugs, and defeat "Mr. Big". It was the first game in the newly restarted Williams Electronics coin-op division, after being acquired by Midway.\n' +
				'\n' +
				'Narc was ported to the Commodore 64, Atari ST, Amiga, ZX Spectrum, Amstrad CPC, and NES. In 2005, the franchise was re-launched with a new game for the Xbox and PS2. It Is Released On March 22, 2005',
			developers: ['Rare', 'WMS'],
			publishers: ['WMS'],
			directors: ['Nathaniel Davies'],
			producers: [],
			programmers: ['George N. Petro'],
			artists: [],
			writers: [],
			composers: [
				'Brian L. Schmidt',
				'David Wise',
				'Marc LoCascio',
				'Tony Williams'
			],
			designers: ['Eugene Jarvis'],
			genres: ['Run-and-gun'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Amiga',
				'Amstrad CPC',
				'Arcade',
				'Atari ST',
				'Commodore 64',
				'NES',
				'PlayStation 2',
				'Xbox',
				'ZX Spectrum'
			],
			releases: [{platforms: ['Arcade'], regions: [], date: '1988-xx-xx'}]
		});
	});

	it('Ultimate Basketball', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Ultimate_Basketball', 'Ultimate Basketball', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Ultimate_Basketball_cover.jpg',
			description: 'Ultimate Basketball is a NES basketball video game. It was released in September 1990 by American Sammy. The game was later licensed by Taito and released in Japan as Taito Basketball (タイトーバスケットボール). This video game is completely unrelated to the Amiga video game of same title and was represented on the American television series Video Power.',
			developers: ['Aicom'],
			publishers: ['Sammy Corporation'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Dota Ando'],
			designers: [],
			genres: ['Sports'],
			modes: ['multiplayer', 'single-player'],
			platforms: ['NES'],
			releases: [
				{platforms: [], regions: ['NA'], date: '1990-09-xx'},
				{platforms: [], regions: ['JP'], date: '1991-04-26'}
			]
		});
	});

	it('Lunar Pool', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Lunar_Pool', 'Lunar Pool', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/25/LunarPoolNESBoxart.jpg',
			description: 'Lunar Pool (known as Lunar Ball (ルナーボール, Runā Bōru) in Japan) is a video game that combines pool (pocket billiards) with aspects of miniature golf, created and developed by Compile for the Nintendo Entertainment System and MSX, in which each stage is a differently shaped pool table. The object is to knock each ball into a pocket using a cue ball. There are sixty levels to choose from, and the friction of the table is adjustable (thus the lunar reference in the title, along with Moon-related background imagery within the game).',
			developers: ['Compile'],
			publishers: ['FCI', 'Pony Canyon'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Masatomo Miyamoto'],
			designers: [],
			genres: ['Pool (cue sports)', 'Sports'],
			modes: ['multiplayer', 'single-player'],
			platforms: ['MSX', 'NES', 'PC-8801', 'Virtual Console'],
			releases: [
				{platforms: ['PC-8801'], regions: ['JP'], date: '1985-06-xx'},
				{platforms: ['NES'], regions: ['JP'], date: '1985-12-05'},
				{platforms: ['NES'], regions: ['NA'], date: '1987-10-xx'},
				{platforms: ['NES'], regions: ['EU'], date: '1991-xx-xx'},
				{platforms: ['Virtual Console'], regions: ['EU'], date: '2007-08-10'},
				{platforms: ['Virtual Console'], regions: ['NA'], date: '2007-10-22'},
				{platforms: ['Virtual Console'], regions: ['JP'], date: '2007-12-11'}
			]
		});
	});

	it('Joe & Mac', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Joe_%26_Mac', 'Joe & Mac', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/28/Joe_%26_Mac_Coverart.png',
			description: 'Joe & Mac, also known as Caveman Ninja and Caveman Ninja: Joe & Mac, is a 1991 platform game released for arcades by Data East. It was later adapted for the Super NES, Mega Drive/Genesis, Nintendo Entertainment System, Game Boy, Amiga, Zeebo, Nintendo Switch, and PC.',
			developers: [
				'Data East',
				'Eden Entertainment Software',
				'Elite Systems',
				'Flying Tiger Development',
				'Motivetime',
				'Onan Games'
			],
			publishers: [
				'Data East',
				'Elite Systems',
				'G-Mode',
				'Golem Entertainment',
				'Motivetime',
				'New World Computing',
				'Takara',
				'Tec Toy'
			],
			directors: ['Makoto Kikuchi', 'Shingo Kuwana', 'Trevor Williams'],
			producers: ['Yoshi Nakamura'],
			programmers: [],
			artists: [
				'Atsushi Kaneko',
				'Chika Shamoto',
				'Chizu Ushikubo',
				'David Percival',
				'Enomoto',
				'Etsuko T.',
				'Hiroshi Miyakawa',
				'Lee Beckett',
				'M. Sato',
				'Makoto Kawamura',
				'Rob Mann',
				'Rob Thursfield',
				'Robert Dorney',
				'Russell Philips',
				'Stuart Middleton',
				'Terry Baker',
				'Tim Round',
				'Toshi Tanaka'
			],
			writers: [],
			composers: [
				'Hiroaki Yoshida',
				'Mark Cooksey',
				'Matt Furniss',
				'Seiichi Hamada',
				'Seiji Momoi',
				'Seiji Yamanaka',
				'Takafumi Miura',
				'Yusuke Takahama'
			],
			designers: [
				'Chiinke',
				'Hiroshi Ōnuki',
				'Katsumi Kurihara',
				'Mitsutoshi Sato',
				'Mya',
				'Osapan'
			],
			genres: ['Platformer'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Amiga',
				'Arcade',
				'Game Boy',
				'Genesis',
				'MS-DOS',
				'NES',
				'Nintendo Switch',
				'SNES',
				'Zeebo'
			],
			releases: [
				{platforms: ['Arcade', 'PC', 'SNES'], regions: [],date: '1991-xx-xx'},
				{platforms: ['NES'], regions: [], date: '1992-12-xx'},
				{platforms: ['Amiga'], regions: [], date: '1992-xx-xx'},
				{platforms: ['Game Boy'], regions: [], date: '1993-04-xx'},
				{platforms: ['Genesis', 'Mega Drive'], regions: [], date: '1994-xx-xx'}
			]
		});
	});

	it('Overlord', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Supremacy:_Your_Will_Be_Done', 'Overlord', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c1/Overlord_%281990%29_Coverart.png',
			description: 'Supremacy: Your Will Be Done, released as Overlord in the United States, is a strategy video game designed by David Perry and Nick Bruty and produced by Probe Software.\n' +
				'\n' +
				'The game was initially released for the Amiga and Atari ST computers in the beginning of 1990 and later in the same year it was ported to the Commodore 64 too, but released only in the very beginning of 1991. Nearly one year later in late 1991 the game was ported to MS-DOS.\n' +
				'\n' +
				'The game was ported to the Nintendo Entertainment System in 1993. The NES cartridge has an internal battery to retain game saves; the computer versions came on two disks.\n' +
				'\n' +
				'The NES version was among the last titles released for the platform and is relatively rare. A Famicom version was planned to be released around late 1993, early 1994 by Altron however for unknown reasons it was cancelled.',
			developers: ['Probe Software'],
			publishers: ['Virgin Games', 'Virgin Mastertronic'],
			directors: [],
			producers: [],
			programmers: ['David Perry', 'Nick Jones', 'TGMS'],
			artists: [
				'Chronos',
				'Hugh Riley',
				'Mark Knowles',
				'Nick Bruty',
				'Paul Docherty'
			],
			writers: [],
			composers: ['David Whittaker', 'Jeroen Tel', 'Jimy'],
			designers: ['David Perry', 'Mark Kelly', 'Nick Bruty', 'Stephen Crow'],
			genres: ['Strategy'],
			modes: ['single-player'],
			platforms: [
				'Amiga',
				'Atari ST',
				'Commodore 64',
				'Commodore Plus/4',
				'DOS',
				'NES'
			],
			releases: [
				{platforms: ['Amiga', 'Atari ST'], regions: ['WW'], date: '1990-01-01'},
				{platforms: ['Commodore 64'], regions: ['WW'], date: '1991-01-xx'},
				{platforms: ['MS-DOS'], regions: ['WW'], date: '1991-11-xx'},
				{platforms: ['NES'], regions: ['NA'], date: '1993-01-24'},
				{platforms: ['Commodore Plus/4'], regions: ['NA'], date: '1993-01-xx'}
			]
		});
	});

	it('Section Z', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Section_Z', 'Section Z', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/25/Section_Z_%28brochure%29.png',
			description: 'Section Z (セクションZ, Sekushon Z) is a side-scrolling shooter game by Capcom, originally released as an arcade game in 1985. A home version was published for the Nintendo Entertainment System in 1987.\n' +
				'\n' +
				'The arcade version was re-released as part of Capcom Classics Collection Vol. 1 for PlayStation 2 and Xbox, Capcom Classics Collection Remixed for PlayStation Portable, and Capcom Arcade Cabinet for Xbox 360 and PlayStation 3.',
			developers: ['Capcom'],
			publishers: ['Capcom'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Kumi Yamaga', 'Tamayo Kawamoto'],
			designers: ['Takashi Nishiyama'],
			genres: ['Scrolling shooter', 'Shooter'],
			modes: ['alternating', 'multiplayer', 'single-player'],
			platforms: ['Arcade', 'Famicom Disk System', 'NES'],
			releases: [
				{platforms: ['Arcade'], regions: ['JP'], date: '1985-12-09'},
				{platforms: ['Arcade'], regions: ['NA'], date: '1985-12-xx'},
				{platforms: ['Famicom Disk System'], regions: ['JP'], date: '1987-05-25'},
				{platforms: ['NES'], regions: ['NA'], date: '1987-07-xx'},
				{platforms: ['NES'], regions: ['EU'], date: '1987-xx-xx'}
			]
		});
	});

	it('Millipede', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Millipede_(video_game)', 'Millipede', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/af/Millipede_Poster.png',
			description: "Millipede (stylized millipede in western releases and Milli-Pede in Japan) is a fixed shooter video game released in arcades by Atari, Inc. in 1982. The sequel to 1981's Centipede, it has more gameplay variety and a wider array of insects than the original. The objective is to score as many points as possible by destroying all segments of the millipede as it moves toward the bottom of the screen, as well as eliminating or avoiding other enemies. The game is played with a trackball and a single fire button which can be held down for rapid-fire.\n" +
				'\n' +
				'Millipede was initially ported to the Atari 2600 and Atari 8-bit family, then later to the Atari ST and Nintendo Entertainment System.',
			developers: ['Atari, Inc.'],
			publishers: ['Atari, Inc.', 'Namco'],
			directors: [],
			producers: [],
			programmers: ['Dave Staugas', 'Ed Logg', 'Mark Cerny', 'Steve Crandall'],
			artists: ['Jerome Dourmat'],
			writers: [],
			composers: [],
			designers: ['Ed Logg'],
			genres: ['Fixed shooter', 'Shooter'],
			modes: ['alternating', 'multiplayer', 'single-player'],
			platforms: ['Arcade', 'Atari 2600', 'Atari 8-bit', 'Atari ST', 'NES'],
			releases: [
				{platforms: ['Arcade'], regions: ['NA'], date: '1982-11-12'},
				{platforms: ['Arcade'], regions: ['EU'], date: '1983-04-xx'},
				{platforms: ['Atari 2600'], regions: ['NA'], date: '1984-03-xx'},
				{platforms: ['Arcade'], regions: ['JP'], date: '1984-xx-xx'},
				{platforms: ['Atari 8-bit'], regions: ['NA'], date: '1984-xx-xx'},
				{platforms: ['Atari ST'], regions: ['NA'], date: '1986-xx-xx'},
				{platforms: ['NES'], regions: ['NA'], date: '1988-xx-xx'}
			]
		});
	});

	it('Solar Jetman: Hunt for the Golden Warpship', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Solar_Jetman:_Hunt_for_the_Golden_Warpship', 'Solar Jetman: Hunt for the Golden Warpship', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/95/Solarjetmancover.jpg',
			description: 'Solar Jetman: Hunt for the Golden Warpship is a multi-directional shooter video game developed by Zippo Games and Rare and published by Tradewest in North America and by Nintendo in Europe. It was released in North America on 14 October 1990 and in Europe on 26 September 1991 for the Nintendo Entertainment System. The game is the third installment of the Jetman series and was later re-released by Nintendo for their NES-based PlayChoice-10 arcade system in the United States in 1990.\n' +
				'\n' +
				"In the game, series protagonist Jetman must manoeuvre his small craft through caverns of various planets whilst searching for pieces of the Golden Warpship. The game is presented in a horizontal side-view environment and has ranging gravitational pulls for each planet, which subjects Jetman's craft to various forms of inertia. Similar to its predecessors, Jetman must keep his craft topped up with fuel in order to progress through levels.\n" +
				'\n' +
				"The game was developed mostly by Mancunian developer Zippo Games under the name of Iota before being ordered to change the game into a Jetman title by Rare. Ports of the game for the Amiga, Commodore 64 and Atari ST were completed but not released due to poor sales of the NES version. The game received mostly positive reviews upon release, with critics praising the game's presentation and graphics, however criticism was directed at the game's difficulty. It was later included in Rare's 2015 Xbox One retrospective compilation, Rare Replay.",
			developers: ['Rare', 'Zippo Games'],
			publishers: ['Nintendo', 'Tradewest'],
			directors: [],
			producers: [],
			programmers: [],
			artists: ['Lyndon Brooke', 'Ste Pickford'],
			writers: [],
			composers: ['David Wise'],
			designers: ['Ste and John Pickford'],
			genres: ["Shoot 'em up"],
			modes: ['single-player'],
			platforms: ['NES', 'PlayChoice-10'],
			releases: [
				{platforms: ['NES'], regions: ['NA'], date: '1990-10-14'},
				{platforms: ['PlayChoice-10'], regions: ['NA'], date: '1990-xx-xx'},
				{platforms: ['NES'], regions: ['EU'], date: '1991-09-26'}
			]
		});
	});

	it('Battletoads', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Battletoads_(video_game)', 'Battletoads', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e8/Battletoads_Coverart.png',
			description: "Battletoads is a beat 'em up/platform video game developed by Rare and published by Tradewest. It is the first installment of the Battletoads series and was originally released on 1 June 1991 for the Nintendo Entertainment System. It was subsequently ported to the Mega Drive and Game Gear in 1993, to the Amiga and Amiga CD32 in 1994 (despite the former having been developed in 1992), and released with some changes for the Game Boy in 1993 in the form of Battletoads in Ragnarok's World. In the game, three space humanoid toad warriors form a group known as the Battletoads. Two of the Battletoads, Rash and Zitz, embark on a mission to defeat the evil Dark Queen on her planet and rescue their kidnapped friends: Pimple, the third member of the Battletoads, and Princess Angelica.\n" +
				'\n' +
				"The game was developed in response to the interest in the Teenage Mutant Ninja Turtles franchise. It received mostly positive reviews upon release, with critics praising the graphics and variations of gameplay; however, many critics were divided over the difficulty. It won seven awards from the 1991 Nintendo Power Awards, and has since been renowned as one of the most difficult video games ever created. It was later included in Rare's 2015 Xbox One retrospective compilation, Rare Replay.",
			developers: ['Arc System Works', 'Mindscape', 'Rare'],
			publishers: ['Masaya', 'Mindscape', 'Sega', 'Tradewest'],
			directors: [],
			producers: [],
			programmers: ['Mark Betteridge'],
			artists: ['Kev Bayliss'],
			writers: [],
			composers: ['David Wise', 'Hikoshi Hashimoto', 'Mark Knight'],
			designers: ['Gregg Mayles', 'Tim and Chris Stamper'],
			genres: ["Beat 'em up", 'Platformer'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Amiga',
				'Amiga CD32',
				'Famicom',
				'Game Gear',
				'Genesis',
				'Mega Drive',
				'NES'
			],
			releases: [
				{platforms: ['Famicom', 'NES'],regions: ['NA'],date: '1991-06-01'},
				{platforms: ['Famicom', 'NES'],regions: ['JP'],date: '1991-12-20'},
				{platforms: ['Famicom', 'NES'],regions: ['EU'],date: '1993-02-18'},
				{platforms: ['Mega Drive'],regions: ['JP'],date: '1993-03-26'},
				{platforms: ['Mega Drive'],regions: ['NA'],date: '1993-03-xx'},
				{platforms: ['Mega Drive'],regions: ['EU'],date: '1993-07-xx'},
				{platforms: ['Game Gear'],regions: ['NA'],date: '1993-12-xx'},
				{platforms: ['Game Gear'],regions: ['EU'],date: '1993-xx-xx'},
				{platforms: ['Mega Drive'],regions: ['AU'],date: '1993-xx-xx'},
				{platforms: ['Game Gear'],regions: ['JP'],date: '1994-01-14'},
				{platforms: ['Amiga'], regions: ['EU'], date: '1994-xx-xx'},
				{platforms: ['Amiga CD32'],regions: ['EU'],date: '1994-xx-xx'}
			]
		});
	});

	it('Championship Pool', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Championship_Pool', 'Championship Pool', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d6/NESPool.jpg',
			description: 'Championship Pool is a 1993 sports simulation video game released for Nintendo Entertainment System, Super Nintendo Entertainment System, Game Boy, Mega Drive/Genesis, and MS-DOS. The pool (pocket billiards) game was developed by Bitmasters and released by Mindscape. The game was officially endorsed by the Billiard Congress of America.',
			developers: ['Bitmasters'],
			publishers: ['Mindscape'],
			directors: [],
			producers: [],
			programmers: ["David O'Riva", 'Franz Lanzinger'],
			artists: ['Greg Hancock'],
			writers: [],
			composers: ['Jerry Gerber'],
			designers: ["David O'Riva", 'Franz Lanzinger'],
			genres: ['Pool (cue sports)', 'Simulation', 'Sports'],
			modes: ['multiplayer', 'single-player'],
			platforms: ['Game Boy', 'Genesis', 'MS-DOS', 'Mega Drive', 'NES', 'SNES'],
			releases: [{platforms: [], regions: [], date: '1993-10-xx'}]
		});
	});

	it('Ghostbusters II', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Ghostbusters_II_(NES_video_game)', 'Ghostbusters II', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Ghostbusters2nes.jpg',
			description: 'Ghostbusters II is a 1990 action video game for the NES, developed by Imagineering and published by Activision. It is based on the 1989 film of the same name, and was released in the United States in April 1990, followed by a United Kingdom release in March 1991.\n' +
				'\n' +
				'In Europe and Japan, HAL Laboratory released its own Ghostbusters II game called New Ghostbusters II.',
			developers: ['Imagineering'],
			publishers: ['Activision'],
			directors: ['Dan Kitchen'],
			producers: ['Tom Sloper'],
			programmers: ['Alex DeMeo', 'Dan Kitchen', 'Rob Harris', 'Tony Chung Lau'],
			artists: ['Mike Sullivan'],
			writers: [],
			composers: ['Mark Van Hecke'],
			designers: ['Dan Kitchen'],
			genres: ['Action'],
			modes: ['single-player'],
			platforms: ['NES'],
			releases: [
				{platforms: [], regions: ['NA'], date: '1990-04-xx'},
				{platforms: [], regions: ['UK'], date: '1991-03-xx'}
			]
		});
	});

	it('Ghoul School', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Ghoul_School', 'Ghoul School', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Ghoul_School_Cover.jpg',
			description: 'Ghoul School is a survival horror video game released for the Nintendo Entertainment System in 1992 by Imagineering. This game takes place in a high school which has been overrun by ghosts/demons.',
			developers: ['Imagineering'],
			publishers: ['Electro Brain'],
			directors: [],
			producers: [],
			programmers: [],
			artists: ['Bill Wentworth', 'Jesse Kapili'],
			writers: [],
			composers: ['Scott Marshall'],
			designers: ['Alex DeMeo', 'Garry Kitchen', 'Scott Marshall'],
			genres: ['Action', 'Horror', 'Survival'],
			modes: ['single-player'],
			platforms: ['NES'],
			releases: [{platforms: [], regions: ['NA'], date: '1992-03-xx'}]
		});
	});

	it('Motor City Patrol', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Motor_City_Patrol', 'Motor City Patrol', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9c/Motor_City_Patrol_Cover.jpg',
			description: 'Motor City Patrol is a top-down driving game released in 1992 for the Nintendo Entertainment System. It was developed by British studio Source Research & Development and published by Matchbox International Ltd.\n' +
				'\n' +
				"Motor City Patrol was shown at the Summer Consumer Electronics Show in 1990 and 1991. The game was released in January 1992, and was Matchbox's first video game.\n" +
				'\n' +
				'Motor City Patrol was one in a line of video games that tied into the Matchbox brand of die-cast model vehicles, like police cars, ambulances, fire trucks, and earth-moving construction machines.',
			developers: ['Source Research & Development'],
			publishers: ['Matchbox International'],
			directors: [],
			producers: [],
			programmers: ['Ian Richards'],
			artists: ['John Cassells', 'Ross Harris'],
			writers: [],
			composers: ['Chris Gill', 'Link Tomlin'],
			designers: ['Ross Harris'],
			genres: ['Driving'],
			modes: ['single-player'],
			platforms: ['NES'],
			releases: [{platforms: [], regions: ['NA'], date: '1992-01-xx'}]
		});
	});

	it('Heavy Shreddin\'', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Heavy_Shreddin%27', 'Heavy Shreddin\'', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/70/Heavy_shreddin_cover_NES.jpg',
			description: "Heavy Shreddin' is a snowboarding video game that was released for the Nintendo Entertainment System in 1990. It was released in Europe with the title Snowboard Challenge.",
			developers: ['Imagineering'],
			publishers: ['Activision', 'Parker Brothers'],
			directors: [],
			producers: [],
			programmers: [],
			artists: ['Bill Wentworth', 'Jesse Kapili'],
			writers: [],
			composers: ['Mark Van Hecke'],
			designers: ['John Van Ryzin'],
			genres: ['Snowboarding', 'Sports'],
			modes: ['single-player'],
			platforms: ['NES'],
			releases: [
				{platforms: [], regions: ['NA'], date: '1990-06-xx'},
				{platforms: [], regions: ['EU'], date: '1990-xx-xx'}
			]
		});
	});

	it('Home Alone 2: Lost in New York', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Home_Alone_2:_Lost_in_New_York_(video_game)', 'Home Alone 2: Lost in New York', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/59/HomeAlone2LINY.jpg',
			description: 'Home Alone 2: Lost in New York is a 1992 video game based loosely on the 1992 film of the same name; it was released on the Nintendo Entertainment System, Genesis, Game Boy, MS-DOS and Super NES platforms. It was dedicated to Tom D. Heidt, a programmer who died shortly before it was released.',
			developers: ['Imagineering', 'Manley & Associates', 'Sega'],
			publishers: ['Capstone Software', 'Sega', 'THQ'],
			directors: [],
			producers: ['Alex DeMeo'],
			programmers: [
				'Christopher Will',
				'Henry C. Will IV',
				'Jason Benham',
				'Joseph A. Moses',
				'Roger Amidon'
			],
			artists: ['Amy Bond', 'Jesse Kapili', 'Ray Bradley', 'Ross Harris'],
			writers: [],
			composers: ['David Delia', 'Mark Van Hecke', 'Paul Gadbois'],
			designers: ['Alex DeMeo', 'W. Marshall Rogers'],
			genres: ['Action'],
			modes: ['single-player'],
			platforms: ['Game Boy', 'Genesis', 'MS-DOS', 'NES', 'SNES'],
			releases: [
				{platforms: ['Game Boy'], regions: ['NA'], date: '1992-10-xx'},
				{platforms: ['NES'], regions: ['NA'], date: '1992-10-xx'},
				{platforms: ['SNES'], regions: ['NA'], date: '1992-10-xx'},
				{platforms: ['NES'], regions: ['EU'], date: '1992-xx-xx'},
				{platforms: ['SNES'], regions: ['PAL'], date: '1993-01-01'},
				{platforms: ['Genesis'], regions: ['NA'], date: '1993-xx-xx'},
				{platforms: ['MS-DOS'], regions: ['NA'], date: '1993-xx-xx'}
			]
		});
	});

	it('Alien 3', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Alien_3_(video_game)', 'Alien 3', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Alien3_game_cover_art.jpg',
			description: 'Alien 3 (stylized as ALIEN³) is a run and gun video game based on the 1992 film of the same name. The game was released for the Sega Genesis and Amiga in 1992, with additional versions being released in 1993 for the Commodore 64, Game Boy, Game Gear, Nintendo Entertainment System (NES), Super Nintendo Entertainment System (SNES), and Master System.\n' +
				'\n' +
				'Each version was developed by Probe Software, except for the Game Boy version, which was developed by Bits Studios. Acclaim Entertainment published the game, with Virgin Interactive Entertainment publishing the Europe-exclusive Amiga version. Alien 3 received generally positive reviews, with most critics praising its music and graphics.',
			developers: ['Bits Studios', 'Probe Software'],
			publishers: ['Acclaim Entertainment', 'Virgin Games'],
			directors: [],
			producers: ['Joe Bonar'],
			programmers: ['Michael Archer', 'Squidgy'],
			artists: [],
			writers: [],
			composers: ['Andrew Rodger', 'Jeroen Tel', 'Matt Furniss'],
			designers: [],
			genres: ['Run-and-gun'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Amiga',
				'Commodore 64',
				'Game Boy',
				'Game Gear',
				'Genesis',
				'Master System',
				'NES',
				'SNES'
			],
			releases: [
				{platforms: ['Genesis'], regions: ['NA'], date: '1992-10-xx'},
				{platforms: ['Amiga'], regions: ['EU'], date: '1992-11-xx'},
				{platforms: ['Game Boy'], regions: ['NA'], date: '1993-01-xx'},
				{platforms: ['Master System'], regions: ['UK'], date: '1993-01-xx'},
				{platforms: ['NES'], regions: ['NA'], date: '1993-03-xx'},
				{platforms: ['SNES'], regions: ['NA'], date: '1993-06-xx'},
				{platforms: ['SNES'], regions: ['UK'], date: '1993-07-xx'},
				{platforms: ['Commodore 64'], regions: ['EU'], date: '1993-11-xx'},
				{platforms: ['Game Gear'],regions: ['NA'], date: '1993-xx-xx'}
			]
		});
	});

	it('The Jetsons: Cogswell\'s Caper!', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/The_Jetsons:_Cogswell%27s_Caper!', 'The Jetsons: Cogswell\'s Caper!', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c0/The_Jetsons_Cogswell%27s_Caper.jpg',
			description: "The Jetsons: Cogswell's Caper! is a 1993 video game based on the animated sitcom The Jetsons. It was developed by Natsume and published by Taito for the Nintendo Entertainment System/Family Computer, and was released in the United States in 1992 and in other territories in 1993.",
			developers: ['Natsume'],
			publishers: ['Mattel', 'Taito'],
			directors: [],
			producers: [],
			programmers: ['Hiroshi Hishikawa', 'K. Sakai'],
			artists: ['A. Takino', 'Shuya Takaoka', 'T. Kaname', 'T. Ohyama'],
			writers: [],
			composers: ['Iku Mizutani', 'Kazuko Umino'],
			designers: [],
			genres: ['2D', 'Action', 'Platformer'],
			modes: ['single-player'],
			platforms: ['Famicom', 'NES'],
			releases: [
				{platforms: [], regions: ['NA'], date: '1992-12-xx'},
				{platforms: [], regions: ['JP'], date: '1993-04-23'},
				{platforms: [], regions: ['EU'], date: '1993-08-26'},
				{platforms: [], regions: ['AU'], date: '1993-xx-xx'}
			]
		});
	});

	it('The Lone Ranger', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/The_Lone_Ranger_(video_game)', 'The Lone Ranger', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/db/The_Lone_Ranger_for_NES_%28cover%29.jpg',
			description: 'The Lone Ranger is an action-adventure video game released by Konami for the Nintendo Entertainment System exclusively in North America in 1991. It is based on The Lone Ranger radio and TV franchise, the latter which was still rerunning in syndication when the game was released. The player takes the role of the Lone Ranger himself as he engages against outlaws in side-scrolling, overhead, and even first-person segments. The Lone Ranger theme music is played prominently during the game, which includes a DPCM-coded voice clip of the ranger shouting his catch-phrase "Hi Yo Silver".',
			developers: ['Konami'],
			publishers: ['Konami'],
			directors: ['Team "Kuu Neru Asobu"'],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [
				'Kenichi Matsubara',
				'Kenji Fukui',
				'Kozo Nakamura',
				'Satoko Minami',
				'Tomoya Tomita',
				'Yoshinori Sasaki'
			],
			designers: [],
			genres: ['Action', 'Adventure'],
			modes: ['single-player'],
			platforms: ['NES'],
			releases: [{platforms: [], regions: ['NA'], date: '1991-08-xx'}]
		});
	});

	it('The Immortal', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/The_Immortal_(video_game)', 'The Immortal', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/85/The_Immortal_cover_Apple_IIGS.jpg',
			description: 'The Immortal is an isometric action-adventure game originally created for the Apple IIGS. It was ported to the Amiga, Atari ST, MS-DOS, Nintendo Entertainment System, and Sega Genesis. A wizard is attempting to find his mentor in a large and dangerous labyrinth. The game has a high degree of graphic violence. A Nintendo Switch re-release was published in 2020.\n' +
				'\n' +
				'The music for Apple IIGS version was made by Douglas Fulton. On some conversions, Rob Hubbard and Michael Bartlow are credited.',
			developers: ['Will Harvey'],
			publishers: ['Electronic Arts'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Douglas Fulton', 'Michael Bartlow', 'Rob Hubbard'],
			designers: ['Will Harvey'],
			genres: ['Action', 'Adventure'],
			modes: ['single-player'],
			platforms: [
				'Amiga',
				'Apple IIGS',
				'Atari ST',
				'Genesis',
				'MS-DOS',
				'NES',
				'Nintendo Switch'
			],
			releases: [
				{platforms: ['Apple IIGS'], regions: [], date: '1990-11-xx'},
				{platforms: ['NES'], regions: [], date: '1990-11-xx'},
				{platforms: ['Genesis'], regions: ['NA'], date: '1991-07-11'},
				{platforms: [], regions: ['JP'], date: '1993-08-xx'},
				{platforms: ['Nintendo Switch'], regions: [], date: '2020-07-15'}
			]
		});
	});

	it('World Class Track Meet', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Stadium_Events', 'World Class Track Meet', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/70/Stadium_Events_cover.jpg',
			description: 'Stadium Events is a sports fitness game developed by Human Entertainment and published by Bandai for the Nintendo Entertainment System. This and Athletic World are the two games in the Family Fun Fitness series, designed and branded for the short-lived Family Fun Fitness mat accessory for the NES. Stadium Events allows players to compete in four different Olympic inspired sporting events, using the mat to move as they compete in running and jumping focused gameplay.\n' +
				'\n' +
				'The North American version was rebranded by Nintendo after its 1987 release. The game was re-released as World Class Track Meet and the new mat was titled the Power Pad. Original North American copies of Stadium Events are now considered to be among the rarest video games, leading to high prices in the secondary video game collecting market.',
			developers: ['Human Entertainment'],
			publishers: ['Bandai', 'Nintendo'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: [],
			genres: ['Exercise', 'Sports'],
			modes: ['multiplayer', 'single-player'],
			platforms: ['NES'],
			releases: [
				{platforms: [], regions: ['JP'], date: '1986-12-23'},
				{platforms: [], regions: ['NA'], date: '1987-09-xx'},
				{platforms: [], regions: ['EU'], date: '1988-xx-xx'},
			]
		});
	});

	it('Punch-Out!! Featuring Mr. Dream', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Punch-Out!!_(NES)', 'Punch-Out!! Featuring Mr. Dream', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/3d/Punch-out_mrdream_boxart.PNG',
			description: "Punch-Out!!, originally titled Mike Tyson's Punch-Out!!, is a boxing sports fighting video game for the Nintendo Entertainment System (NES) developed and published by Nintendo in 1987. Years later, worldwide releases of the game were rebranded as Punch-Out!! Part of the Punch-Out!! series, it is an adaptation of both the Punch-Out!! and Super Punch-Out!! arcade games with some variations. The game received critical acclaim and many publications often list it among the greatest video games of all time.",
			developers: ['Nintendo R&D3'],
			publishers: ['Nintendo'],
			directors: ['Genyo Takeda'],
			producers: ['Minoru Arakawa'],
			programmers: ['Masato Hatakeyama'],
			artists: ['Makoto Wada'],
			writers: [],
			composers: ['Akito Nakatsuka', 'Kenji Yamamoto', 'Yukio Kaneoka'],
			designers: ['Kazuo Yoneyama', 'Mayumi Hirota'],
			genres: ['Boxing', 'Fighting', 'Sports'],
			modes: ['single-player'],
			platforms: ['Arcade', 'Famicom', 'NES'],
			releases: [
				{platforms: [], regions: ['JP'], date: '1987-09-18'},
				{platforms: [], regions: ['NA'], date: '1987-10-18'},
				{platforms: [], regions: ['JP'], date: '1987-11-21'},
				{platforms: [], regions: ['PAL'], date: '1987-12-15'},
				{platforms: [], regions: ['NA'], date: '1990-08-02'},
				{platforms: [], regions: ['EU'], date: '1990-08-15'}
			]
		});
	});

	it('Mendel Palace', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Mendel_Palace', 'Mendel Palace', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Mendel_Palace_Cover.jpg',
			description: 'Mendel Palace is a 1989 puzzle video game developed by Game Freak. It was published in Japan by Namco and in North America by Hudson Soft. Mendel Palace is the debut game of Satoshi Tajiri and his company Game Freak. This success inspired him to create the Pokémon series.',
			developers: ['Game Freak'],
			publishers: ['Hudson Soft', 'Namco'],
			directors: ['Satoshi Tajiri'],
			producers: [],
			programmers: ['Yuji Shingai'],
			artists: ['Ken Sugimori'],
			writers: [],
			composers: ['Junichi Masuda'],
			designers: ['Satoshi Tajiri'],
			genres: ['Action', 'Puzzle'],
			modes: ['multiplayer', 'single-player'],
			platforms: ['NES'],
			releases: [
				{platforms: [], regions: ['JP'], date: '1989-06-27'},
				{platforms: [], regions: ['NA'], date: '1990-10-12'}
			]
		});
	});

	it('Tetris 2', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Tetris_2_(1993_video_game)', 'Tetris 2', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0a/Tetris_2_NES.jpg',
			description: 'Tetris 2 (known in Japan as Tetris Flash Japanese: テトリスフラッシュ) is a video game published in 1993 and 1994 by Nintendo for the Game Boy, Nintendo Entertainment System and Super Nintendo Entertainment System.',
			developers: ['Bullet-Proof Software', 'Nintendo R&D1', 'TOSE'],
			publishers: ['Nintendo'],
			directors: [],
			producers: ['Gunpei Yokoi'],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Mitsuhiko Takano', 'Miyuki Uemura'],
			designers: [],
			genres: ['Puzzle'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Game Boy',
				'NES',
				'SNES'
			],
			releases: [
				{platforms: ['Famicom', 'NES'], regions: ['JP'], date: '1993-09-21'},
				{platforms: ['Famicom', 'NES'], regions: ['NA'], date: '1993-10-xx'},
				{platforms: ['Game Boy'], regions: ['NA'], date: '1993-12-xx'},
				{platforms: ['Famicom', 'NES'], regions: ['EU'], date: '1993-xx-xx'},
				{platforms: ['Game Boy'], regions: ['JP'], date: '1994-06-14'},
				{platforms: ['SNES', 'Super Famicom'], regions: ['JP'], date: '1994-07-08'},
				{platforms: ['SNES', 'Super Famicom'], regions: ['NA'], date: '1994-08-xx'},
				{platforms: ['Game Boy'], regions: ['EU'], date: '1994-10-27'},
				{platforms: ['SNES', 'Super Famicom'], regions: ['EU'], date: '1995-xx-xx'},
			]
		});
	});

	it('Final Fantasy', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Final_Fantasy_(video_game)', 'Final Fantasy', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d8/FF1_USA_boxart.jpg',
			description: "Final Fantasy is a fantasy role-playing video game developed and published by Square in 1987. It is the first game in Square's Final Fantasy series, created by Hironobu Sakaguchi. Originally released for the NES, Final Fantasy was remade for several video game consoles and is frequently packaged with Final Fantasy II in video game collections.  The first Final Fantasy story follows four youths called the Light Warriors, who each carry one of their world's four elemental crystals which have been darkened by the four Elemental Fiends. Together, they quest to defeat these evil forces, restore light to the crystals, and save their world.\n" +
				'\n' +
				"Final Fantasy was originally conceived under the working title Fighting Fantasy, but trademark issues and dire circumstances surrounding Square as well as Sakaguchi himself prompted the name to be changed. The game was a great commercial success, received generally positive reviews, and spawned many successful sequels and supplementary titles in the form of the Final Fantasy series.  The original is now regarded as one of the most influential and successful role-playing games on the Nintendo Entertainment System, playing a major role in popularizing the genre. Critical praise focused on the game's graphics, while criticism targeted the time spent wandering in search of random battle encounters to raise the player's experience level. By March 2003, all versions of Final Fantasy had sold a combined two million copies worldwide.",
			developers: ['Square'],
			publishers: ['Nintendo', 'Square'],
			directors: ['Hironobu Sakaguchi'],
			producers: ['Masafumi Miyamoto'],
			programmers: ['Nasir Gebelli'],
			artists: ['Yoshitaka Amano'],
			writers: ['Hironobu Sakaguchi', 'Kenji Terada'],
			composers: ['Nobuo Uematsu'],
			designers: ['Akitoshi Kawazu', 'Hiromichi Tanaka', 'Koichi Ishii'],
			genres: ['Role-playing'],
			modes: ['single-player'],
			platforms: [
				'Android',
				'EZweb',
				'Game Boy Advance',
				'MSX2',
				'NES',
				'Nintendo 3DS',
				'PlayStation',
				'PlayStation Portable',
				'Windows',
				'Windows Phone',
				'WonderSwan Color',
				'i-mode',
				'iOS',
			],
			releases: [
				{platforms: ['Famicom', 'NES'], regions: ['JP'], date: '1987-12-18'},
				{platforms: ['MSX2'], regions: ['JP'], date: '1989-06-01'},
				{platforms: ['Famicom', 'NES'], regions: ['NA'], date: '1990-07-12'},
				{platforms: ['WonderSwan Color'], regions: ['JP'], date: '2000-12-09'},
				{platforms: ['PlayStation'], regions: ['JP'], date: '2002-10-31'},
				{platforms: ['PlayStation'], regions: ['EU'], date: '2003-03-14'},
				{platforms: ['PlayStation'], regions: ['NA'], date: '2003-04-08'},
				{platforms: ['i-mode'], regions: ['JP'], date: '2004-03-01'},
				{platforms: ['Game Boy Advance'], regions: ['JP'], date: '2004-07-29'},
				{platforms: ['EZweb'], regions: ['JP'], date: '2004-08-19'},
				{platforms: ['Game Boy Advance'], regions: ['AU'], date: '2004-11-18'},
				{platforms: ['Game Boy Advance'], regions: ['NA'], date: '2004-11-29'},
				{platforms: ['Game Boy Advance'], regions: ['EU'], date: '2004-12-03'},
				{platforms: ['Yahoo!'], regions: ['JP'], date: '2006-07-03'},
				{platforms: ['PlayStation Portable'], regions: ['JP'], date: '2007-04-19'},
				{platforms: ['PlayStation Portable'], regions: ['NA'], date: '2007-06-26'},
				{platforms: ['PlayStation Portable'], regions: ['EU'], date: '2008-02-08'},
				{platforms: ['PlayStation Portable'], regions: ['AU'], date: '2008-02-28'},
				{platforms: ['iOS'], regions: ['WW'], date: '2010-02-25'},
				{platforms: ['Android'], regions: ['WW'], date: '2011-12-01'},
				{platforms: ['Windows Phone'], regions: ['WW'], date: '2012-06-13'},
				{platforms: ['Nintendo 3DS'], regions: ['JP'], date: '2015-01-21'},
				{platforms: ['Android', 'Windows', 'iOS'], regions: ['WW'], date: '2021-07-28'}
			]
		});
	});

	it('Banana Prince', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Banana_Prince', 'Banana Prince', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Nintendo_Entertainment_System_Banana_Prince_cover_art.png',
			description: 'Banana Prince is a 2D platform game for the Nintendo Entertainment System (NES). It was released in Japan by Takara on December 20, 1991. The German version, released in February 1992, features slightly different graphics and gameshow questions.',
			developers: ['KID'],
			publishers: ['Takara'],
			directors: [],
			producers: ['Motoyuki Inoue'],
			programmers: ['Norihisa Kawamoto'],
			artists: ['Masayuki Amano'],
			writers: [],
			composers: ['Nobuyuki Shioda'],
			designers: ['Shōji Takagi'],
			genres: ['Platformer'],
			modes: ['single-player'],
			platforms: ['NES'],
			releases: [
				{platforms: [], regions: ['JP'], date: '1991-12-20'},
				{platforms: [], regions: ['GER'], date: '1992-02-xx'}
			]
		});
	});

	it('Advanced Dungeons & Dragons: Heroes of the Lance', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Advanced_Dungeons_%26_Dragons:_Heroes_of_the_Lance', 'Advanced Dungeons & Dragons: Heroes of the Lance', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Advanced_Dungeons_%26_Dragons_Heroes_of_the_Lance_Cover.png',
			description: 'Advanced Dungeons & Dragons: Heroes of the Lance is a video game released in January 1988 for various home computer systems and consoles. The game is based on the first Dragonlance campaign module for the Dungeons & Dragons fantasy role-playing game, Dragons of Despair, and the first Dragonlance novel Dragons of Autumn Twilight. Heroes of the Lance focuses on the journey of eight heroes through the ruined city of Xak Tsaroth, where they must face the ancient dragon Khisanth and retrieve the relic, the Disks of Mishakal.',
			developers: ['Natsume', 'U.S. Gold'],
			publishers: ['Pony Canyon', 'Strategic Simulations', 'U.S. Gold'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Brian Howarth', 'Iku Mizutani', 'Seiji Toda'],
			designers: [],
			genres: ['Action', 'Adventure'],
			modes: ['single-player'],
			platforms: [
				'Amiga', 'Amstrad CPC',
				'Atari ST', 'Commodore 64',
				'FM Towns', 'MS-DOS',
				'MSX2', 'Master System',
				'NES',
				'PC-8801', 'PC-9801',
				'ZX Spectrum'
			],
			releases: [
				{platforms: ['Famicom', 'NES'], regions: ['NA'], date: '1991-01-xx'},
				{platforms: ['Famicom', 'NES'], regions: ['JP'], date: '1991-03-08'},
			]
		});
	});

	it('Nobunaga\'s Ambition II', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Nobunaga%27s_Ambition', 'Nobunaga\'s Ambition II', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/3e/Nobunagas_ambition_gen.jpg',
			description: "Nobunaga's Ambition (信長の野望, Nobunaga no Yabō) is a series of turn-based grand strategy role-playing simulation video games. The original game was one of the first in its genre, being released in March 1983 by the Japanese video game developer Koei. Nobunaga's Ambition takes place during the Sengoku period of feudal Japan. The player is tasked with achieving the ultimate goal of warlord Oda Nobunaga: the conquest and unification of Japan. Selecting Oda Nobunaga is optional, however, as the player is also able to choose from a variety of other regional daimyōs of the time.\n" +
				'\n' +
				'Games in the franchise have been released for the Nintendo Entertainment System, Game Boy, Sega Genesis, 3DO, Super Nintendo, PlayStation, Sega Saturn, PlayStation 2, PlayStation 3, Xbox 360, Wii, PlayStation Portable, PlayStation Vita, PlayStation 4 and Nintendo Switch. The title was also released for Macintosh as well as MSX, Amiga, and MS-DOS. As of March 2018, the series has shipped more than 10 million copies worldwide.',
			developers: ['Koei'],
			publishers: ['Koei'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: [],
			genres: [
				'Military',
				'Role-playing',
				'Strategy',
				'Tactical',
				'Turn-based',
				'War'
			],
			modes: [],
			platforms: [
				'3DO',
				'Amiga',
				'FM Towns',
				'Game Boy',
				'Game Boy Advance',
				'Game Boy Color',
				'Genesis',
				'MS-DOS',
				'MSX',
				'Mac OS',
				'NES',
				'Nintendo 3DS',
				'Nintendo DS',
				'Nintendo Switch',
				'PC-8801',
				'PC-9801',
				'PlayStation 2',
				'PlayStation 3',
				'PlayStation 4',
				'PlayStation Portable',
				'PlayStation Vita',
				'SNES',
				'TurboGrafx-CD',
				'Wii',
				'Wii U',
				'Windows',
				'WonderSwan'
			],
			releases: []
		});
	});

	it('Maniac Mansion', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Maniac_Mansion', 'Maniac Mansion', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Maniac_Mansion_artwork.jpg',
			description: "Maniac Mansion is a 1987 graphic adventure video game developed and published by Lucasfilm Games. It follows teenage protagonist Dave Miller as he attempts to rescue his girlfriend Sandy Pantz from a mad scientist, whose mind has been enslaved by a sentient meteor. The player uses a point-and-click interface to guide Dave and two of his six playable friends through the scientist's mansion while solving puzzles and avoiding dangers. Gameplay is non-linear, and the game must be completed in different ways based on the player's choice of characters. Initially released for the Commodore 64 and Apple II, Maniac Mansion was Lucasfilm Games' first self-published product.\n" +
				'\n' +
				"The game was conceived in 1985 by Ron Gilbert and Gary Winnick, who sought to tell a comedic story based on horror film and B-movie clichés. They mapped out the project as a paper-and-pencil game before coding commenced. While earlier adventure titles had relied on command lines, Gilbert disliked such systems, and he developed Maniac Mansion's simpler point-and-click interface as a replacement. To speed up production, he created a game engine called SCUMM, which was used in many later LucasArts titles. After its release, Maniac Mansion was ported to several platforms. A port for the Nintendo Entertainment System had to be reworked heavily, in response to Nintendo of America’s concerns that the game was inappropriate for children.\n" +
				'\n' +
				`Maniac Mansion was critically acclaimed: reviewers lauded its graphics, cutscenes, animation, and humor. Writer Orson Scott Card praised it as a step toward "computer games [becoming] a valid storytelling art". It influenced numerous graphic adventure titles, and its point-and-click interface became a standard feature in the genre. The game's success solidified Lucasfilm as a serious rival to adventure game studios such as Sierra On-Line. In 1990, Maniac Mansion was adapted into a three-season television series of the same name, written by Eugene Levy and starring Joe Flaherty. A sequel to the game, Day of the Tentacle, was released in 1993.`,
			developers: ['LucasArts', 'Lucasfilm Games', 'Realtime Associates'],
			publishers: ['Jaleco', 'Lucasfilm Games'],
			directors: [],
			producers: [],
			programmers: ['Carl Mey', 'David Fox', 'Ron Gilbert'],
			artists: ['Gary Winnick'],
			writers: [],
			composers: [
				'Brian Hales',
				'Chris Grigg',
				'Dave Govett',
				'David Hayes',
				'David Lawrence',
				'David Warhol',
				'George Sanger',
				'Tsukasa Tawada'
			],
			designers: ['Gary Winnick', 'Ron Gilbert'],
			genres: ['Adventure', 'Point-and-click'],
			modes: ['single-player'],
			platforms: [
				'Amiga',
				'Apple II',
				'Atari ST',
				'Commodore 64',
				'IBM PC',
				'NES'
			],
			releases: [
				{platforms: ['Apple II', 'Commodore 64'], regions: [], date: '1987-10-05'},
				{platforms: ['IBM PC'], regions: [], date: '1988-03-12'},
				{platforms: ['NES'], regions: ['JP'], date: '1988-06-23'},
				{platforms: ['Amiga', 'Atari ST'], regions: [], date: '1989-07-26'},
				// {platforms: ['IBM PC'], regions: [], date: '1989-12-31'},
				{platforms: ['NES'], regions: ['NA'], date: '1990-09-18'},
				{platforms: ['NES'], regions: ['EU'], date: '1992-10-22'},
			]
		});
	});

	it('Danny Sullivan\'s Indy Heat', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Danny_Sullivan%27s_Indy_Heat', 'Danny Sullivan\'s Indy Heat', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/86/DannySullivansIndyHeat_arcadeflyer.png',
			description: "Danny Sullivan's Indy Heat is a 1991 arcade racing game developed and published in the arcades by Leland Corporation. Home versions of the game were eventually released for the NES, Commodore Amiga, Atari ST and Commodore 64. It starred American IndyCar driver Danny Sullivan, and featured the tracks of the CART series of the early 1990s.",
			developers: ['Leland Corporation', 'Rare', 'Sales Curve'],
			publishers: ['Leland Corporation', 'Sales Curve', 'Tradewest'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['David Wise', 'Sam Powell', 'Tony Williams'],
			designers: [],
			genres: ['Racing', 'Sports'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Amiga',
				'Arcade',
				'Atari ST',
				'Commodore 64',
				'NES'
			],
			releases: [
				{platforms: ['Arcade'], regions: ['NA'], date: '1991-xx-xx'},
				{platforms: ['Amiga', 'Atari ST', 'Commodore 64'], regions: ['EU'], date: '1992-03-xx'},
				{platforms: ['NES'], regions: ['NA'], date: '1992-08-xx'},
				{platforms: ['NES'], regions: ['EU'], date: '1992-xx-xx'}
			]
		});
	});

	it('Pipe Dream', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Pipe_Mania', 'Pipe Dream', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Pipe_mania_cover_art.jpg',
			description: 'Pipe Mania is a puzzle video game developed by The Assembly Line for the Amiga and published in 1989. It was ported to several other platforms by Lucasfilm Games as Pipe Dream; the company distributed the game in the US. The player must connect randomly appearing pieces of pipe on a grid to a given length within a limited time.\n' +
				'\n' +
				'The Windows version of the game was included in the MS Windows Entertainment Pack. In 1990, it was released as an arcade game by Japanese manufacturer Video System Co. Ltd., though with slightly altered gameplay, giving the player the task to connect a source and drain with the random pipe pieces.\n' +
				'\n' +
				'Long after its initial release, the Pipe Mania concept re-emerged as a minigame representing hacking or security system bypassing in larger video games.',
			developers: ['The Assembly Line'],
			publishers: ['Empire Interactive', 'Lucasfilm Games', 'Video System'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: ['Akila Redmer', 'Stephan L. Butler'],
			genres: ['Puzzle'],
			modes: ['single-player'],
			platforms: [
				'Acorn Archimedes',
				'Amiga', 'Amstrad CPC',
				'Apple II', 'Apple IIGS',
				'Arcade',
				'Atari ST', 'BBC Micro',
				'Commodore 64', 'Game Boy',
				'MS-DOS', 'Mac OS',
				'NES', 'PC-8801', 'PC-9801', 'Psion 3a',
				'SAM Coupé', 'Sharp X68000', 'Super Famicom',
				'Windows',
				'ZX Spectrum'
			],
			releases: [
				{platforms: ['Amiga', 'Atari ST', 'MS-DOS'], regions: [], date: '1989-06-xx'},
				{
					platforms: ['Amstrad CPC', 'Apple II', 'Arcade', 'BBC Micro', 'Commodore 64', 'Electron', 'Game Boy', 'Mac OS', 'NES', 'ZX Spectrum'],
					regions: [],
					date: '1990-xx-xx'
				},
				{platforms: ['Super Famicom'], regions: [], date: '1992-08-07'},
				{platforms: ['Windows'], regions: [], date: '1992-xx-xx'}
			]
		});
	});

	it('Pac-Man', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Pac-Man', 'Pac-Man', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/16/Pac_flyer.png',
			description: 'Pac-Man is a maze action game developed and released by Namco for arcades in 1980. The original Japanese title of Puck Man was changed to Pac-Man for international releases as a preventative measure against defacement of the arcade machines by changing the P to an F. In North America, the game was released by Midway Manufacturing as part of its licensing agreement with Namco America. The player controls Pac-Man, who must eat all the dots inside an enclosed maze while avoiding four colored ghosts. Eating large flashing dots called "Power Pellets" causes the ghosts to turn blue, allowing Pac-Man to eat them for bonus points.\n' +
				'\n' +
				"Game development began in early 1979, directed by Toru Iwatani with a nine-man team. Iwatani wanted to create a game that could appeal to women as well as men, because most video games of the time had themes of war or sports.[citation needed] Although the inspiration for the Pac-Man character was the image of a pizza with a slice removed, Iwatani has said he also rounded out the Japanese character for mouth, kuchi (Japanese: 口). The in-game characters were made to be cute and colorful to appeal to younger players. The original Japanese title of Puckman was derived from the titular character's hockey-puck shape, and is now the mascot and flagship icon of Bandai Namco Entertainment\n" +
				'\n' +
				'Pac-Man was a widespread critical and commercial success, leading to several sequels, merchandise, and two television series, as well as a hit single by Buckner and Garcia. The franchise remains one of the highest-grossing and best-selling games, generating more than $14 billion in revenue (as of 2016[update]) and 43 million units in sales combined, and has an enduring commercial and cultural legacy, commonly listed as one of the greatest video games of all time.',
			developers: ['Namco'],
			publishers: ['Midway Games', 'Namco'],
			directors: [],
			producers: [],
			programmers: ['Shigeichi Ishimura', 'Shigeo Funaki'],
			artists: [],
			writers: [],
			composers: ['Shigeichi Ishimura', 'Toshio Kai'],
			designers: ['Toru Iwatani'],
			genres: ['Maze'],
			modes: ['alternating', 'multiplayer', 'single-player'],
			platforms: [
				'Android',
				'Apple II',
				'Arcade',
				'Atari 2600',
				'Atari 5200',
				'Atari 8-bit',
				'Commodore 64',
				'Commodore VIC-20',
				'Game Boy',
				'Game Boy Advance',
				'Game Boy Color',
				'Game Gear',
				'IBM PC',
				'Intellivision',
				'MSX',
				'Mobile phone',
				'NES',
				'Neo Geo Pocket Color',
				'PC',
				'PlayStation 4',
				'TI-99/4A',
				'Xbox 360',
				'Xbox One',
				'ZX Spectrum',
				'iOS',
				'iPod Touch'
			],
			releases: [
				{platforms: [], regions: ['JP'], date: '1980-05-22'},
				{platforms: [], regions: ['WW'], date: '1980-12-xx'}
			]
		});
	});

	it('Contra', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Contra_(video_game)', 'Contra', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/65/Contra_cover.jpg',
			description: 'Contra is a run-and-gun shooter video game developed and published by Konami, originally developed as a coin-operated arcade game in 1986 and released on February 20, 1987. A home version was released for the Nintendo Entertainment System in 1988, along with ports for various home computer formats, including the MSX2. The arcade and computer versions were localized as Gryzor in Europe, and the NES version as Probotector in PAL regions.\n' +
				'\n' +
				'The arcade game was a commercial success worldwide, becoming one of the top four highest-grossing dedicated arcade games of 1987 in the United States. The NES version was also a critical and commercial success, with Electronic Gaming Monthly awarding it for being the Best Action Game of 1988. Several Contra sequels were produced following the original game.',
			developers: ['Konami'],
			publishers: ['Konami'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Hidenori Maezawa', 'Kazuki Muraoka', 'Kiyohiro Sada'],
			designers: ['Koji Hiroshita', 'Shigeharu Umezaki', 'Shinji Kitamoto'],
			genres: ['Run-and-gun', 'Shooter'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Amstrad CPC',
				'Arcade',
				'BlackBerry',
				'Commodore 64',
				'IBM PC',
				'J2ME',
				'MS-DOS',
				'MSX2',
				'NES',
				'TRS-80 Color Computer',
				'ZX Spectrum'
			],
			releases: [
				{platforms: ['Arcade'], regions: ['JP'], date: '1987-02-20'},
				{platforms: ['Arcade'], regions: ['EU'], date: '1987-02-xx'},
				{platforms: ['Arcade'], regions: ['NA'], date: '1987-03-xx'},
				{platforms: ['ZX Spectrum'], regions: ['EU'], date: '1987-12-xx'},
				{platforms: ['Amstrad CPC'], regions: ['EU'], date: '1987-xx-xx'},
				{platforms: ['Famicom', 'NES'], regions: ['NA'], date: '1988-02-02'},
				{platforms: ['Famicom', 'NES'], regions: ['JP'], date: '1988-02-09'},
				{platforms: ['Commodore 64'], regions: ['EU'], date: '1988-02-xx'},
				{platforms: ['Commodore 64'], regions: ['NA'], date: '1988-xx-xx'},
				{platforms: ['MS-DOS'], regions: ['EU'], date: '1988-xx-xx'},
				{platforms: ['MS-DOS'], regions: ['NA'], date: '1988-xx-xx'},
				{platforms: ['MSX2'], regions: ['JP'], date: '1989-05-26'},
				{platforms: ['Famicom', 'NES'], regions: ['EU'], date: '1990-12-28'},
				{platforms: ['TRS-80 Color Computer'], regions: ['NA'], date: '1993-01-xx'}
			]
		});
	});

	it('Pirates!', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Sid_Meier%27s_Pirates!', 'Pirates!', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/46/Sid_Meier%27s_Pirates%21_%281987%29_Coverart.png',
			description: `Sid Meier's Pirates! is a video game created by Sid Meier for the Commodore 64 and published by MicroProse in 1987. It was the first game to include the name "Sid Meier" in its title as an effort by MicroProse to attract fans of Meier's earlier games, most of which were combat vehicle simulation video games. The game is a simulation of the life of a pirate, a privateer, or a pirate hunter in the 16th, 17th and 18th centuries. It was widely ported to other systems.\n` +
				'\n' +
				'Pirates! is set in the Caribbean. The Pirates! playing field includes the Spanish Main (namely the northern coast of South America), Central America and the Yucatán Peninsula, the entire Gulf of Mexico, Florida, and all Caribbean islands, plus Bermuda. The player is free to sail to any part of the above-mentioned lands, stopped by an invisible barrier southeast of Trinidad, all the way north to just northeast of Bermuda.\n' +
				'\n' +
				"The Pirates! Gold remake, with minor improvements and better graphics, was released in 1993. An enhanced remake, also named Sid Meier's Pirates!, was released in 2004. Versions for mobile devices have also been released.",
			developers: ['MPS Labs', 'MicroProse'],
			publishers: ['MicroProse', 'Ultra Games'],
			directors: [],
			producers: [],
			programmers: [],
			artists: ['Michael Haire'],
			writers: [],
			composers: ['Ken Lagace'],
			designers: ['Sid Meier'],
			genres: ['Action', 'Adventure', 'Strategy'],
			modes: ['single-player'],
			platforms: [
				'Amiga', 'Amiga CD32', 'Amstrad CPC',
				'Apple II', 'Apple IIGS',
				'Atari ST',
				'Commodore 64', 'Genesis',
				'IBM PC', 'MS-DOS',
				'Mac OS',
				'NES',
				'PC-8801', 'PC-9801',
				'Windows'
			],
			releases: [
				{platforms: ['Amstrad CPC', 'Apple II', 'Commodore 64', 'IBM PC'], regions: [], date: '1987-xx-xx'},
				{platforms: ['Apple IIGS', 'Mac OS', 'PC-8801'], regions: [], date: '1988-xx-xx'},
				{platforms: ['Atari ST'], regions: [], date: '1989-xx-xx'},
				{platforms: ['Amiga'], regions: [], date: '1990-xx-xx'},
				{platforms: ['NES'], regions: [], date: '1991-xx-xx'},
				{platforms: ['Genesis', 'MS-DOS'], regions: [], date: '1993-xx-xx'},
				{platforms: ['Amiga CD32', 'Windows'], regions: [], date: '1994-xx-xx'}
			]
		});
	});

	it('Ghosts \'n Goblins', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Ghosts_%27n_Goblins_(video_game)', 'Ghosts \'n Goblins', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a1/GhostsnGoblins_flyer.jpg',
			description: "Ghosts 'n Goblins, known as Makaimura (Japanese: 魔界村, lit. Demon World Village) in Japan, and Ghostly Village on most pirated Famicom cartridges, is a side-scrolling platform game developed by Capcom and released for arcades in 1985. It is the first game in the Ghosts 'n Goblins franchise, and has since been ported to numerous home platforms.\n" +
				'\n' +
				"The game was a major commercial success across arcades and home systems; it was among the top ten highest-grossing arcade games of 1986 in Japan and the US, the year's sixth best-selling computer game in the UK, and the NES version sold over 1.6 million cartridges worldwide. The game received generally positive reviews from critics, and is often cited as one of the most difficult games of all time.",
			developers: ['Capcom'],
			publishers: ['Capcom', 'Taito'],
			directors: ['Tokuro Fujiwara'],
			producers: [],
			programmers: ['Toshio Arima'],
			artists: ['Masayoshi Kurokawa'],
			writers: [],
			composers: ['Ayako Mori'],
			designers: [],
			genres: ['Platformer'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Amiga', 'Amstrad CPC',
				'Android', 'Arcade',
				'Atari ST', 'Commodore 16',
				'Commodore 64', 'Game Boy Color',
				'IBM PC', 'MSX',
				'NES', 'Virtual Console',
				'ZX Spectrum', 'iOS'
			],
			releases: [
				{platforms: ['Arcade'], regions: ['JP'], date: '1985-07-07'},
				{platforms: ['Arcade'], regions: ['NA'], date: '1985-09-04'},
				{platforms: ['Arcade'], regions: ['EU'], date: '1985-10-xx'},
				{platforms: ['NES'], regions: ['JP'], date: '1986-06-13'},
				{platforms: ['ZX Spectrum'], regions: ['EU'], date: '1986-06-xx'},
				{platforms: ['NES'], regions: ['NA'], date: '1986-11-01'},
				{platforms: ['Amstrad CPC', 'Commodore 64'], regions: ['EU'], date: '1986-xx-xx'},
				{platforms: ['NES'], regions: ['EU'], date: '1989-xx-xx'},
				{platforms: ['Amiga', 'Atari ST'], regions: ['UK'], date: '1990-xx-xx'},
				{platforms: ['Virtual Console'], regions: [], date: '2007-12-10'},
				{platforms: ['Android', 'iOS'], regions: [], date: '2017-03-15'},
			]
		});
	});

	it('Sky Kid', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Sky_Kid', 'Sky Kid', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/04/Skykid_arcadeflyer.png',
			description: "Sky Kid is a horizontal scrolling shooter arcade game that was released by Namco in 1985. It runs on Namco Pac-Land hardware but with a video system like that used in Dragon Buster. It is also the first game from Namco to allow two players to play simultaneously. The game was later released on the Famicom (brought to the American NES by Sunsoft), and both this version for the Wii, Nintendo 3DS and Wii U and the original arcade version for the Wii were later released on Nintendo's Virtual Console service. The NES version was also ported to arcades for the Nintendo VS. System as VS. Super Sky Kid, but promotional materials and the cabinet for this version just use the name VS. Sky Kid.\n" +
				'\n' +
				"A sequel named Sky Kid Deluxe was released in 1986. It introduced several new enemies and missions, and was the first game to run on Namco's then-new Namco System 86 hardware.",
			developers: ['Namco'],
			publishers: ['Namco'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Junko Ozawa'],
			designers: [],
			genres: ['Scrolling shooter', 'Shooter', 'Side scroller'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Arcade',
				'NES',
				'Nintendo VS. System',
				'Super Cassette Vision',
			],
			releases: [
				{platforms: ['Arcade'], regions: ['JP'], date: '1985-12-xx'},
				{platforms: ['NES'], regions: ['JP'], date: '1986-08-22'},
				{platforms: ['NES'], regions: ['US'], date: '1987-09-xx'},
				{platforms: ['Nintendo VS. System'], regions: ['US'], date: '1987-xx-xx'}
			]
		});
	});

	it('Elevator Action', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Elevator_Action', 'Elevator Action', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Elevator_Action.png',
			description: 'Elevator Action  is a platform-shooter game released in arcades by Taito in 1983. The player assumes the role of Agent 17, a spy infiltrating a 30 story building filled with elevators and enemy agents who emerge from closed doors. The goal is to collect secret documents from specially marked rooms, then escape the building. It runs on the Taito SJ System arcade system.\n' +
				'\n' +
				'The game was a critical and commercial success for Taito, exceeding sales expectations at the time it released. It was the top-grossing arcade game on the Japanese arcade charts for three months in late 1983, and was among the top five highest-grossing arcade "route" games of 1984 in the United States. It has been ported to a variety of home systems, has had multiple sequels, and appeared on Taito compilations.',
			developers: ['Taito'],
			publishers: ['Taito'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: [],
			genres: ['Action', 'Platformer'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Amstrad CPC',
				'Arcade',
				'Commodore 64',
				'Famicom',
				'Game Boy',
				'MSX',
				'Mobile phone',
				'NES',
				'Nintendo Switch',
				'PlayStation 4',
				'SG-1000',
				'ZX Spectrum',
			],
			releases: [
				{platforms: [], regions: ['JP'], date: '1983-05-23'},
				{platforms: [], regions: ['NA'], date: '1983-10-xx'},
				{platforms: [], regions: ['EU'], date: '1984-01-xx'}
			]
		});
	});

	it('The Legend of Zelda', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/The_Legend_of_Zelda_(video_game)', 'The Legend of Zelda', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/41/Legend_of_zelda_cover_%28with_cartridge%29_gold.png',
			description: 'The Legend of Zelda, originally released in Japan as The Hyrule Fantasy: Zelda no Densetsu, is a 1986 action-adventure video game developed and published by Nintendo and designed by Shigeru Miyamoto and Takashi Tezuka. Set in the fantasy land of Hyrule, the plot centers on an elf-like boy named Link, who aims to collect the eight fragments of the Triforce of Wisdom in order to rescue Princess Zelda from the antagonist, Ganon. During the course of the game, the player controls Link from a top-down perspective and navigates throughout the overworld and dungeons, collecting weapons, defeating enemies and uncovering secrets along the way.\n' +
				'\n' +
				'The first game of The Legend of Zelda series, it was originally released in Japan as a launch game for the Family Computer Disk System peripheral in February 1986. More than a year later, North America and Europe received releases on the Nintendo Entertainment System in cartridge format, being the first home console game to include an internal battery for saving data. This version was later released in Japan in 1994 under the title The Hyrule Fantasy: Zelda no Densetsu 1. The game was ported to the GameCube and Game Boy Advance, and is available via the Virtual Console on the Wii, Nintendo 3DS and Wii U. It was also one of 30 games included in the NES Classic Edition system, and is available on the Nintendo Switch through the NES Switch Online service.\n' +
				'\n' +
				'The Legend of Zelda was a critical and commercial success for Nintendo. The game sold over 6.5 million copies, launched a major franchise, and has been regularly featured in lists of the greatest video games of all time. A sequel, Zelda II: The Adventure of Link, was first released in Japan for the Famicom Disk System less than a year after its predecessor, and numerous additional successors and spinoffs have been released in the decades since its debut.',
			developers: ['Nintendo R&D4'],
			publishers: ['Nintendo'],
			directors: ['Shigeru Miyamoto', 'Takashi Tezuka'],
			producers: ['Shigeru Miyamoto'],
			programmers: ['I. Marui', 'Toshihiko Nakago', 'Yasunari Soejima'],
			artists: [],
			writers: ['Keiji Terui', 'Takashi Tezuka'],
			composers: ['Koji Kondo'],
			designers: ['Takashi Tezuka'],
			genres: ['Action', 'Adventure'],
			modes: ['single-player'],
			platforms: ['Famicom Disk System', 'NES'],
			releases: [
				{platforms: ['Famicom Disk System'], regions: ['JP'], date: '1986-02-21'},
				{platforms: ['NES'], regions: ['NA'], date: '1987-08-22'},
				{platforms: ['NES'], regions: ['PAL'], date: '1987-11-15'},
				{platforms: ['NES'], regions: ['JP'], date: '1994-02-19'},
				{platforms: ['Game Boy Advance'], regions: ['JP'], date: '2004-02-14'},
				{platforms: ['Game Boy Advance'], regions: ['NA'], date: '2004-06-02'},
				{platforms: ['Game Boy Advance'], regions: ['PAL'], date: '2004-07-09'}
			]
		});
	});

	it('Bomberman', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Bomberman_(1983_video_game)', 'Bomberman', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/72/BombermanCover.jpg',
			description: 'Bomberman (ボンバーマン, Bonbāman) is an arcade-style maze-based video game developed by Hudson Soft. The original home computer game Bomber Man (爆弾男, Bakudan Otoko) was released in July 1983 for the NEC PC-8801, NEC PC-6001 mkII, Fujitsu FM-7, Sharp MZ-700, Sharp MZ-2000, Sharp X1 and MSX in Japan, and a graphically modified version for the MSX and ZX Spectrum in Europe as Eric and the Floaters. It had a Japanese sequel known as 3-D Bomberman, in which Bomberman navigates the maze in the first-person. In 1985, Bomberman was released for the Nintendo Entertainment System. It spawned the Bomberman series with many installments building on its basic gameplay.',
			developers: ['Hudson Soft'],
			publishers: ['Hudson Soft', 'Mattel', 'Nintendo', 'Sinclair Research'],
			directors: [],
			producers: [],
			programmers: ['Shinichi Nakamoto', 'Yuji Tanaka'],
			artists: [],
			writers: [],
			composers: ['Jun Chikuma'],
			designers: [],
			genres: ['Arcade', 'Maze', 'Strategy'],
			modes: ['single-player'],
			platforms: [
				'FM-7',
				'Famicom',
				'Famicom Disk System',
				'Game Boy',
				'Game Boy Advance',
				'MSX',
				'NES',
				'PC-6001',
				'PC-8801',
				'Sharp MZ-2000',
				'Sharp MZ-700',
				'Sharp X1',
				'ZX Spectrum'
			],
			releases: [
				{platforms: ['MSX'], regions: ['JP'], date: '1983-07-xx'},
				{platforms: ['PC-8801'], regions: ['JP'], date: '1983-07-xx'},
				{platforms: ['FM-7'], regions: ['JP'], date: '1983-xx-xx'},
				{platforms: ['PC-6001'], regions: ['JP'], date: '1983-xx-xx'},
				{platforms: ['Sharp MZ-2000'], regions: ['JP'], date: '1983-xx-xx'},
				{platforms: ['Sharp MZ-700'], regions: ['JP'], date: '1983-xx-xx'},
				{platforms: ['Sharp X1'], regions: ['JP'], date: '1983-xx-xx'},
				{platforms: ['MSX'], regions: ['EU'], date: '1984-xx-xx'},
				{platforms: ['ZX Spectrum'], regions: ['EU'], date: '1984-xx-xx'},
				{platforms: ['NES'], regions: ['JP'], date: '1985-12-20'},
				{platforms: ['MSX'], regions: ['JP'], date: '1986-xx-xx'},
				{platforms: ['NES'], regions: ['NA'], date: '1987-xx-xx'},
				{platforms: ['Famicom Disk System'], regions: ['JP'], date: '1990-04-02'},
				{platforms: ['Game Boy Advance'], regions: ['JP'], date: '2004-02-14'},
				{platforms: ['Game Boy Advance'], regions: ['NA'], date: '2004-06-02'},
				{platforms: ['Game Boy Advance'], regions: ['EU'], date: '2004-07-09'},
				{platforms: ['N-Gage'], regions: ['EU'], date: '2004-07-23'},
				{platforms: ['N-Gage'], regions: ['NA'], date: '2004-08-04'}
			]
		});
	});

	it('Battletoads & Double Dragon', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Battletoads/Double_Dragon', 'Battletoads & Double Dragon', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/63/BattleToadsDoubleDragon.jpg',
			description: "Battletoads/Double Dragon (also Battletoads & Double Dragon - The Ultimate Team) is a 1993 beat 'em up developed by Rare and published by Tradewest. It was originally released for the Nintendo Entertainment System and later ported to the Mega Drive/Genesis, Super NES, and Game Boy.\n" +
				'\n' +
				"The Ultimate Team is a crossover of both Technos Japan's Double Dragon and Rare's own Battletoads game franchises, although Technos had little or no credited involvement in the production of the game outside of the Double Dragon license. The game features the characters from the Double Dragon series, Billy and Jimmy Lee, two young martial arts experts; also included are the three humanoid toad protagonists from the Battletoads game. It is also the first Battletoads game to feature all three toads as playable characters. The game's engine and design are directly based upon the Battletoads series.",
			developers: ['Rare'],
			publishers: ['Nintendo', 'Sony', 'Tradewest'],
			directors: [],
			producers: [],
			programmers: ['Mark Betteridge', 'Paul Machacek'],
			artists: ['Steve Mayles'],
			writers: [],
			composers: ['David Wise'],
			designers: [],
			genres: ["Beat 'em up"],
			modes: ['multiplayer', 'single-player'],
			platforms: ['Game Boy', 'Genesis', 'NES', 'SNES'],
			releases: [
				{platforms: ['NES'], regions: ['NA'], date: '1993-06-xx'},
				{platforms: ['SNES'], regions: ['NA'], date: '1993-12-01'},
				{platforms: ['Game Boy'], regions: ['NA'], date: '1993-12-xx'},
				{platforms: ['Genesis'], regions: ['NA'], date: '1993-12-xx'},
				{platforms: ['NES'], regions: ['EU'], date: '1993-xx-xx'},
				{platforms: ['SNES'], regions: ['EU'], date: '1994-07-10'},
				{platforms: ['Game Boy'], regions: ['EU'], date: '1994-xx-xx'}
			]
		});
	});

	it('Elite', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Elite_(video_game)', 'Elite', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Elite_org_cover.jpg',
			description: `Elite is a space trading video game.  It was written and developed by David Braben and Ian Bell and originally published by Acornsoft for the BBC Micro and Acorn Electron computers in September 1984. Elite's open-ended game model and revolutionary 3D graphics led to it being ported to virtually every contemporary home computer system and earned it a place as a classic and a genre maker in gaming history. The game's title derives from one of the player's goals of raising their combat rating to the exalted heights of "Elite".\n` +
				'\n' +
				'Elite was one of the first home computer games to use wire-frame 3D graphics with hidden line removal. It added graphics and twitch gameplay aspects to the genre established by the 1974 game Star Trader. Another novelty was the inclusion of The Dark Wheel, a novella by Robert Holdstock which gave players insight into the moral and legal codes to which they might aspire.\n' +
				'\n' +
				'The Elite series is among the longest-running video game franchises. The first game was followed by the sequels Frontier: Elite II in 1993, and Frontier: First Encounters in 1995, which introduced Newtonian physics, realistic star systems and seamless freeform planetary landings. A third sequel, Elite Dangerous, began crowdfunding in 2012 and was launched on 16 December 2014, following a period of semi-open testing; it received a paid-for expansion season, Horizons, on 15 December 2015.\n' +
				'\n' +
				"Elite proved hugely influential, serving as a model for other games including Wing Commander: Privateer, Grand Theft Auto, EVE Online, Freelancer, the X series and No Man's Sky.\n" +
				'\n' +
				'Non-Acorn versions were each first published by Firebird and Imagineer. Subsequently, Frontier Developments has claimed the game to be a "Game by Frontier" to be part of its own back catalogue and all the rights to the game to have been owned by David Braben.',
			developers: ['David Braben', 'Ian Bell'],
			publishers: ['Acornsoft', 'Firebird', 'Imagineer'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [
				'Aidan Bell',
				'David Whittaker',
				'Johann Strauss',
				'Julie Dunn',
				'Wally Beben'
			],
			designers: [],
			genres: ['Flight simulator', 'Simulation', 'Space'],
			modes: ['single-player'],
			platforms: [
				'Acorn Archimedes', 'Acorn Electron',
				'Amiga', 'Amstrad CPC',
				'Apple II', 'Atari ST',
				'BBC Micro', 'Commodore 64',
				'IBM PC', 'MSX',
				'NES', 'Tatung Einstein',
				'ZX Spectrum'
			],
			releases: [{platforms: [], regions: [], date: '1984-09-20'}]
		});
	});

	it('Excitebike', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Excitebike', 'Excitebike', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f8/Excitebike_cover.jpg',
			description: 'Excitebike is a motocross racing video game developed and published by Nintendo. In Japan, it was released for the Famicom in 1984 and then ported to arcades as Vs. Excitebike for the Nintendo Vs. System later the same year. In North America, it was initially released for arcades in 1985 and then as a launch title for the Nintendo Entertainment System later the same year. It is the first game in the Excite series.\n' +
				'\n' +
				'The game was a critical and commercial success. Designed and directed by Shigeru Miyamoto, the smooth side-scrolling game engine his team developed for Excitebike was later used to develop Super Mario Bros. (1985), which had the effect of Mario smoothly accelerating from a walk to a run, rather than move at a constant speed.\n' +
				'\n' +
				'Excitebike spawned a number of sequels and has been re-released multiple times onto other Nintendo platforms, such the Wii and Wii U via the Virtual Console and Nintendo Switch via its online service.',
			developers: ['Arika', 'Hudson Soft', 'Nintendo R&D1', 'Nintendo R&D4'],
			publishers: ['Hudson Soft', 'Nintendo'],
			directors: ['Shigeru Miyamoto'],
			producers: ['Shigeru Miyamoto'],
			programmers: ['Toshihiko Nakago'],
			artists: [],
			writers: [],
			composers: ['Akito Nakatsuka', 'Soyo Oka'],
			designers: ['Shigeru Miyamoto'],
			genres: ['Racing', 'Sports'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Arcade',
				'Famicom Disk System',
				'Game Boy Advance',
				'NES',
				'Nintendo 3DS',
				'PC-8801',
				'Sharp X1'
			],
			releases: [
				{platforms: ['Famicom', 'NES'], regions: ['JP'], date: '1984-11-28'},
				{platforms: ['Arcade'], regions: ['JP'], date: '1984-12-xx'},
				{platforms: ['Arcade'], regions: ['NA'], date: '1985-03-xx'},
				{platforms: ['Famicom', 'NES'], regions: ['USA'], date: '1985-10-18'},
				{platforms: ['PC-8801'], regions: ['JP'], date: '1985-10-xx'},
				{platforms: ['Sharp X1'], regions: ['JP'], date: '1985-xx-xx'},
				{platforms: ['Famicom', 'NES'], regions: ['CAN'], date: '1986-02-03'},
				{platforms: ['Famicom', 'NES'], regions: ['EU'], date: '1986-09-01'},
				{platforms: ['Famicom Disk System'], regions: ['JP'], date: '1988-12-09'},
				{platforms: ['Game Boy Advance'], regions: ['JP'], date: '2004-02-14'},
				{platforms: ['Game Boy Advance'], regions: ['NA'], date: '2004-06-02'},
				{platforms: ['Game Boy Advance'], regions: ['EU'], date: '2004-07-09'},
				{platforms: ['Nintendo 3DS'], regions: ['WW'], date: '2011-06-06'}
			]
		});
	});

	it('Jackal', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Jackal_(video_game)', 'Jackal', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/12/Jackal_game_flyer.png',
			description: "Jackal, also distributed under the title of Top Gunner, is an overhead run'n gun-style shoot-'em-up video game by Konami released for the arcades in 1986. The player must maneuver an armed jeep in order to rescue prisoners of war (POWs) trapped in enemy territory.",
			developers: ['Konami'],
			publishers: ['Konami'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: [],
			genres: ['Run-and-gun'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Arcade',
				'Commodore 64',
				'Famicom Disk System',
				'IBM PC',
				'Mobile phone',
				'NES',
				'Xbox Live Arcade',
				'ZX Spectrum'
			],
			releases: [
				{platforms: ['Arcade'], regions: ['JP'], date: '1986-10-15'},
				{platforms: ['Arcade'], regions: ['NA'], date: '1986-10-xx'},
				{platforms: ['Famicom Disk System'], regions: ['JP'], date: '1988-05-02'},
				{platforms: ['NES'], regions: ['NA'], date: '1988-09-18'}
			]
		});
	});

	it('King\'s Knight', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/King%27s_Knight', 'King\'s Knight', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/03/King%27s_Knight_Screenshot1.jpg',
			description: "King's Knight is a 1986 scrolling shooter co-developed by Square and Workss, and published by Square for the Nintendo Entertainment System and MSX. The game was released in Japan on September 18, 1986, and in North America in 1989. It was later re-released for the Wii's Virtual Console in Japan on November 27, 2007 and in North America on March 24, 2008. This would be followed by a release on the Virtual Console in Japan on February 4, 2015 for 3DS and July 6, 2016 for Wii U.\n" +
				'\n' +
				"The game became Square's first North American release under their Redmond subsidiary Squaresoft, and their first release as an independent company. The 1986 release's title screen credits Workss for programming. King's Knight saw a second release in 1987 on the NEC PC-8801mkII SR and the Sharp X1. These versions of the game were retitled King's Knight Special and released exclusively in Japan. It was the first game designed by Hironobu Sakaguchi for the Famicom. Nobuo Uematsu provided the musical score for King's Knight. It was Uematsu's third work of video game music composition.",
			developers: ['Square', 'Workss'],
			publishers: ['Square'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Nobuo Uematsu'],
			designers: ['Hironobu Sakaguchi'],
			genres: ['Scrolling shooter', 'Shooter'],
			modes: ['single-player'],
			platforms: ['MSX', 'NES', 'PC-8801', 'Sharp X1'],
			releases: [
				{platforms: ['NES'], regions: ['JP'], date: '1986-09-18'},
				{platforms: ['MSX'], regions: ['JP'], date: '1986-11-xx'},
				{platforms: ['PC-8801', 'Sharp X1'], regions: ['JP'], date: '1987-06-xx'},
				{platforms: ['NES'], regions: ['NA'], date: '1989-xx-xx'}
			]
		});
	});

	it('Loopz', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Loopz', 'Loopz', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a6/Loopz_Coverart.png',
			description: 'Loopz is a puzzle video game designed and programmed by Ian Upton for the Atari ST in 1989. He previously worked as head game designer for Audiogenic, who acquired exclusive rights to the game, then in 1990 arranged for Mindscape to publish it for computers in North America and consoles worldwide.\n' +
				'\n' +
				'The Nintendo Entertainment System version (programmed by Bits Studios) and the Game Boy version (programmed by Argonaut Software) were released in 1990. Audiogenic published versions of the original game for the Acorn Electron, BBC Micro, ZX Spectrum, Amstrad CPC, Commodore 64, Atari ST, Amiga, and IBM PC in 1990 and 1991.',
			developers: ['Audiogenic'],
			publishers: ['Mindscape'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['David Whittaker'],
			designers: ['Ian Upton'],
			genres: ['Puzzle'],
			modes: ['single-player'],
			platforms: [
				'Acorn Electron', 'Amiga',
				'Amstrad CPC', 'Atari ST',
				'BBC Micro', 'Commodore 64',
				'Game Boy', 'Lynx',
				'MS-DOS',
				'NES', 'PC-9801', 'Sharp X68000',
				'ZX Spectrum'
			],
			releases: [{platforms: [], regions: [], date: '1990-xx-xx'}]
		});
	});

	it('Robin Hood: Prince of Thieves', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Robin_Hood:_Prince_of_Thieves_(video_game)', 'Robin Hood: Prince of Thieves', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1a/Robin_Hood_-_Prince_of_Thieves_Coverart.png',
			description: 'Robin Hood: Prince of Thieves is a console game released in 1991 for the Nintendo Entertainment System and Game Boy developed by Sculptured Software, Inc. and Bits Studios, respectively, and published by Virgin Games, Inc. It was based on the film of the same name.\n' +
				'\n' +
				'The game was featured as the cover game for the July 1991 issue of Nintendo Power magazine. However, this issue was notorious for the fact that the game was not released until 6 months after the issue was released.',
			developers: ['Bits Studios', 'Sculptured Software'],
			publishers: ['Virgin Games'],
			directors: [],
			producers: [],
			programmers: ['Andy Rogers', 'Ken Grand', 'Ken Moore', 'Peter Ward'],
			artists: [
				'Clark Sorenson',
				'Jon Baker',
				'Kelly Kofoed',
				'Lance Thornblad',
				'Les Pardew',
				'Mike Lott'
			],
			writers: [],
			composers: ['David Whittaker', 'Paul Webb'],
			designers: [],
			genres: ['Action', 'Adventure'],
			modes: ['single-player'],
			platforms: ['Game Boy', 'NES'],
			releases: [
				{platforms: [], regions: ['NA'], date: '1991-11-xx'},
				{platforms: [], regions: ['EU'], date: '1992-12-10'}
			]
		});
	});

	it('Golf', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Golf_(1984_video_game)', 'Golf', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/92/Golf_Coverart.png',
			description: 'Golf is a golf-based sports simulation video game developed and released by Nintendo in 1984 for the Famicom in Japan. Later the same year, it was ported to the Nintendo VS. System as VS. Golf or Stroke and Match Golf, released in arcades internationally, followed by another arcade version called VS. Ladies Golf. The original was re-released for the NES in North America in 1985, and for the Famicom Disk System in 1986 in Japan.\n' +
				'\n' +
				"The game was re-released across many years for different Nintendo consoles. It is a hidden Easter egg in the Nintendo Switch firmware as a tribute to the game's programmer, the late Satoru Iwata.",
			developers: ['HAL Laboratory', 'Nintendo R&D2'],
			publishers: ['Nintendo'],
			directors: [],
			producers: ['Masayuki Uemura'],
			programmers: ['Satoru Iwata'],
			artists: [],
			writers: [],
			composers: ['Koji Kondo'],
			designers: ['Kenji Miki', 'Shigeru Miyamoto'],
			genres: ['Sports'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Arcade',
				'Famicom',
				'Famicom Disk System',
				'Game Boy',
				'NES',
				'PC-8801',
				'Sharp X1'
			],
			releases: [
				{platforms: ['Famicom', 'NES'], regions: ['JP'], date: '1984-05-01'},
				{platforms: ['Arcade'], regions: ['JP'], date: '1984-07-26'},
				{platforms: ['Arcade'], regions: ['NA'], date: '1984-10-xx'},
				{platforms: ['Arcade'], regions: ['NA'], date: '1984-12-14'},
				{platforms: ['Famicom', 'NES'], regions: ['NA'], date: '1985-10-18'},
				{platforms: ['Arcade'], regions: ['EU'], date: '1985-xx-xx'},
				{platforms: ['Famicom Disk System'], regions: ['JP'], date: '1986-02-21'},
				{platforms: ['Famicom', 'NES'], regions: ['EU'], date: '1986-11-15'},
				{platforms: ['Game Boy'], regions: ['JP'], date: '1989-xx-28'},
				{platforms: ['Game Boy'], regions: ['NA'], date: '1990-02-xx'},
				{platforms: ['Game Boy'], regions: ['EU'], date: '1990-xx-xx'}
			]
		});
	});

	it('Rainbow Islands', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Rainbow_Islands:_The_Story_of_Bubble_Bobble_2', 'Rainbow Islands', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Rainbow_Islands_flyer.png',
			description: `Rainbow Islands: The Story of Bubble Bobble 2 (レインボーアイランド) is a 1987 arcade game developed and published by Taito. The arcade version was licensed to Romstar for North American manufacturing and distribution. The game is subtitled "The Story of Bubble Bobble 2" and is the sequel to Taito's hit game Bubble Bobble from the previous year. It is the second of four arcade games in the Bubble Bobble series (followed by Bubble Symphony and Bubble Memories, but itself has two direct sequels: Parasol Stars and Bubble Bobble Part 2). The game was ported for numerous home computers and game consoles.\n` +
				'\n' +
				`The main characters are Bubblun and Bobblun, the protagonists of Bubble Bobble (known as "Bub and Bob" in the western releases). However, in this game they appear in their human forms as "Bubby" and "Bobby", as opposed to the "bubble dragons" of the first game (following on from the first game's true ending). Also unlike the first game, players must now "alternate" (i.e., take turns), with player one as Bubby (green shirt), and player 2 as Bobby (blue shirt) (the same color scheme as in the first game).`,
			developers: ['Taito'],
			publishers: ['Taito'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Hisayoshi Ogura'],
			designers: ['Fukio Mitsuji'],
			genres: ['Platformer'],
			modes: ['alternating', 'multiplayer', 'single-player'],
			platforms: [
				'Amiga', 'Amstrad CPC',
				'Arcade', 'Atari ST',
				'Commodore 64', 'FM Towns',
				'Game Boy Color', 'Master System',
				'Mega Drive', 'Mobile phone',
				'NES',
				'PlayStation', 'Saturn', 'TurboGrafx-CD',
				'WonderSwan', 'ZX Spectrum'
			],
			releases: [{platforms: [], regions: [], date: '1987-xx-xx'}]
		});
	});

	it('Hydlide', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Hydlide', 'Hydlide', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/ac/Hydlide_Cover.jpg',
			description: 'Hydlide is an action role-playing game developed and published by T&E Soft. It was originally released for the NEC PC-6001 and PC-8801 computers in 1984, in Japan only; ports for the MSX, MSX2, FM-7 and NEC PC-9801 were released the following year.\n' +
				'\n' +
				'A Famicom version was released under the name Hydlide Special in Japan in 1986. Three years later, it was localized and released in English regions for the Nintendo Entertainment System by Fujisankei Communications International, known as simply Hydlide. The game sold two million copies in Japan across all platforms. A Sega Genesis version of Hydlide Special was showcased at the 1989 SCES but never released. A 1995 remake was released for the Sega Saturn as Virtual Hydlide.',
			developers: ['T&E Soft'],
			publishers: ['T&E Soft'],
			directors: [],
			producers: [],
			programmers: ['Eiji Kato'],
			artists: [],
			writers: [],
			composers: ['Keiichi Maruyama', 'Shigeru Tomita'],
			designers: ['Tokihiro Naito'],
			genres: ['Action', 'Role-playing'],
			modes: ['single-player'],
			platforms: [
				'FM-7',
				'Famicom',
				'MSX',
				'MSX2',
				'NES',
				'PC-6001',
				'PC-6601',
				'PC-8801',
				'PC-9801',
				'Sharp MZ-2000',
				'Sharp X1'
			],
			releases: [
				{platforms: ['PC-6001', 'PC-8801'], regions: ['JP'], date: '1984-12-13'},
				{platforms: ['MSX'], regions: ['JP'], date: '1985-03-xx'},
				{platforms: ['FM-7'], regions: ['JP'], date: '1985-05-xx'},
				{platforms: ['MSX2'], regions: ['JP'], date: '1985-07-xx'},
				{platforms: ['PC-9801'], regions: ['JP'], date: '1985-11-xx'},
				{platforms: ['MSX2'], regions: ['EU'], date: '1985-xx-xx'},
				{platforms: ['Famicom', 'NES'], regions: ['JP'], date: '1986-03-18'},
				{platforms: ['Famicom', 'NES'], regions: ['NA'], date: '1989-06-xx'}
			]
		});
	});

	it('Rush\'n Attack', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Rush%27n_Attack', 'Rush\'n Attack', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Rush%27n_Attack_artwork.PNG',
			description: `Green Beret is a run and gun game developed and released by Konami in arcades in 1985. It was ported to home systems, becoming a critical and commercial success for arcades and home computers. It was released as Green Beret internationally, and as Rush'n Attack in the West as a play on "Russian attack" due to its Cold War setting.`,
			developers: ['Konami'],
			publishers: ['Konami'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [
				'Iku Mizutani',
				'Kiyohiro Sada',
				'Masanori Adachi',
				'Satoe Terashima',
				'Shinya Sakamoto'
			],
			designers: [],
			genres: ['Run-and-gun'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Amstrad CPC', 'Arcade',
				'Atari 8-bit', 'BBC Micro',
				'Commodore 64', 'Commodore Plus/4',
				'Famicom Disk System', 'Game Boy Advance',
				'MSX', 'Mobile phone',
				'NES', 'Nintendo DS',
				'Nintendo Switch',
				'PlayChoice-10',
				'Thomson', 'Xbox 360',
				'ZX Spectrum'
			],
			releases: [
				{platforms: ['Arcade'], regions: ['JP'], date: '1985-09-04'},
				{platforms: ['Arcade'], regions: ['EU'], date: '1985-11-xx'},
				{platforms: ['Arcade'], regions: ['NA'], date: '1985-12-xx'},
				{platforms: ['NES'], regions: ['NA'], date: '1987-04-07'},
				{
					platforms: ['Famicom Disk System'],
					regions: ['JP'],
					date: '1987-04-10'
				},
				{platforms: ['NES'], regions: ['EU'], date: '1989-06-08'}
			]
		});
	});

	it('Battleship', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Battleship_(1993_video_game)', 'Battleship', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e7/Battleship_NES_cover.jpg',
			description: 'Video games portal\n' +
				'\n' +
				'Battleship is an NES and Sega Game Gear video game based on the board game of the same name.',
			developers: ['Kalisto', 'Mindscape UK'],
			publishers: ['Mindscape'],
			directors: [],
			producers: [],
			programmers: ['Gil Espeche', 'Henrik Markanian'],
			artists: [],
			writers: [],
			composers: ['Mark Knight'],
			designers: [],
			genres: ['Strategy', 'Turn-based'],
			modes: ['single-player'],
			platforms: ['Game Gear', 'NES'],
			releases: [
				{platforms: ['NES'], regions: ['NA'], date: '1993-09-xx'},
				{platforms: ['Game Gear'], regions: ['NA'], date: '1993-xx-xx'},
				{platforms: ['NES'], regions: ['EU'], date: '1993-xx-xx'}
			]
		});
	});

	it('R.B.I. Baseball', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/R.B.I._Baseball', 'R.B.I. Baseball', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7b/R.B.I._Baseball_Cover.jpg',
			description: `R.B.I. Baseball is a baseball sports video game series. R.B.I. is an initialism for "run batted in". Originally launched in 1987 as a localized version of Namco's Family Stadium series, the R.B.I. Baseball series initially ran through 1995. In 2014, the series was rebooted as a competitor to MLB: The Show, with releases each year since.`,
			developers: [
				'Atari Games',
				'Behaviour Interactive',
				'Gray Matter',
				'HB Studios',
				'MLB Advanced Media',
				'Namco',
				'Novotrade',
				'Tengen'
			],
			publishers: [
				'Atari Games',
				'Domark',
				'MLB Advanced Media',
				'Tengen',
				'Time Warner Interactive'
			],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: [],
			genres: [],
			modes: [],
			platforms: [
				'32X', 'Amiga',
				'Android', 'Atari ST',
				'Commodore 64', 'Game Gear',
				'Genesis', 'Mega Drive',
				'NES', 'Nintendo Switch',
				'Nintendo VS. System', 'PlayStation 3',
				'PlayStation 4', 'SNES',
				'Steam', 'Xbox 360',
				'Xbox One', 'ZX Spectrum',
				'iOS'
			],
			releases: []
		});
	});

	it('Kiwi Kraze', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/The_NewZealand_Story', 'Kiwi Kraze', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e0/TheNewZealandStory_arcadeflyer.png',
			description: "The NewZealand Story (ニュージーランドストーリー, Nyū Jīrando Sutōrī) is a platformer arcade game developed and published by Taito in 1988. The game's concept and setting were inspired by a holiday trip in New Zealand by one of the Taito programmers. The player controls Tiki (ティキ), a kiwi who must save his girlfriend Phee Phee (ピューピュー) and several of his other kiwi chick friends who have been kidnapped by a large blue leopard seal. While avoiding enemies, the player has to navigate a scrolling maze-like level, at the end of which they release one of Tiki's kiwi chick friends trapped in a cage. In 2007, the arcade game received a remake for the Nintendo DS under the title, New Zealand Story Revolution.",
			developers: ['Software Creations', 'Taito'],
			publishers: ['Taito'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [
				'Geoff Follin',
				'Tim Follin',
				'Yasuhisa Watanabe',
				'Yasuko Yamada'
			],
			designers: [],
			genres: ['Platformer'],
			modes: ['alternating', 'multiplayer', 'single-player'],
			platforms: [
				'Amiga', 'Amstrad CPC',
				'Arcade', 'Atari ST',
				'Commodore 64', 'FM Towns',
				'Master System', 'Mega Drive',
				'NES', 'Sharp X68000',
				'TurboGrafx-16', 'Virtual Console',
				'ZX Spectrum'
			],
			releases: [
				{platforms: [], regions: ['EU'], date: '1988-08-xx'},
				{platforms: [], regions: ['WW'], date: '1988-09-xx'}
			]
		});
	});

	it('Skate or Die!', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Skate_or_Die!', 'Skate or Die!', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Skate_or_Die%21_cover.jpg',
			description: 'Skate or Die! is a skateboarding game released by Electronic Arts in 1987 for the Sinclair ZX Spectrum, Commodore 64, Atari ST, Apple IIGS, Amstrad CPC, and IBM Compatibles running MS-DOS. It was ported to the Nintendo Entertainment System (NES) by Konami, and published by Ultra Games. The Atari ST conversion was contracted to Codemasters, who contracted Kinetic Designs to do the work.',
			developers: ['Electronic Arts', 'Konami'],
			publishers: ['Electronic Arts', 'Ultra Games'],
			directors: [],
			producers: ['Don Traeger'],
			programmers: ['David Bunch', 'Stephen Landrum'],
			artists: ['Michael Kosaka', 'Nancy Fong'],
			writers: [],
			composers: ['Kouji Murata', 'Rob Hubbard'],
			designers: ['David Bunch', 'Michael Kosaka', 'Stephen Landrum'],
			genres: ['Skateboarding', 'Sports'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Amstrad CPC',
				'Apple IIGS',
				'Commodore 64',
				'MS-DOS',
				'NES',
				'Virtual Console',
				'ZX Spectrum',
			],
			releases: [
				{platforms: ['PC'], regions: [], date: '1987-10-xx'},
				{platforms: ['NES'], regions: ['NA'], date: '1988-xx-xx'},
				{platforms: ['NES'], regions: ['PAL'], date: '1989-xx-xx'},
				{platforms: ['Virtual Console'], regions: ['PAL'], date: '2007-12-21'}
			]
		});
	});

	it('Parodius', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Parodius_(1990_video_game)', 'Parodius', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/32/Parodius_NES.jpg',
			description: `Parodius! From Myth to Laughter (パロディウスだ! －神話からお笑いへ－, Parodiusu Da! Shinwa kara Owarai e, lit. "It's Parodius! From Myth to Laughter"), released outside Japan as Parodius (from "Parody Gradius"), is a shoot 'em up arcade video game and the second title in the Parodius series produced by Konami. The European SNES version is also known as Parodius: Non-Sense Fantasy. The gameplay is stylistically very similar to the Gradius series, but the graphics and music are intentionally absurd.\n` +
				'\n' +
				'As a result of its localised title, From Myth to Laughter is often mistaken as the original game of the series. The lesser known original game, Parodius: The Octopus Saves the Earth, was released for the MSX computer in Japan.',
			developers: ['Konami'],
			publishers: ['Konami'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: [],
			genres: ['Scrolling shooter', 'Shooter', 'Side scroller'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Arcade',
				'Famicom',
				'Game Boy',
				'Mobile phone',
				'NES',
				'PlayStation',
				'SNES',
				'Saturn',
				'Sharp X68000',
				'Super Famicom',
				'TurboGrafx-16'
			],
			releases: [
				{platforms: ['Arcade'], regions: ['JP'], date: '1990-02-xx'},
				{platforms: ['Famicom', 'NES'], regions: ['JP'], date: '1990-11-03'},
				{platforms: ['Arcade'], regions: ['EU'], date: '1990-xx-xx'},
				{platforms: ['Game Boy'], regions: ['JP'], date: '1991-04-05'},
				{platforms: ['Sharp X68000'], regions: ['JP'], date: '1991-04-19'},
				{platforms: ['TurboGrafx-16'], regions: ['JP'], date: '1992-02-21'},
				{platforms: ['SNES', 'Super Famicom'], regions: ['JP'], date: '1992-07-03'},
				{platforms: ['Famicom', 'NES'], regions: ['EU'], date: '1992-xx-xx'},
				{platforms: ['Game Boy'], regions: ['EU'], date: '1992-xx-xx'},
				{platforms: ['SNES', 'Super Famicom'], regions: ['EU'], date: '1992-xx-xx'},
				{platforms: ['PlayStation'], regions: ['JP'], date: '1994-12-03'},
				{platforms: ['Saturn'], regions: ['JP'], date: '1995-05-19'},
				{platforms: ['PlayStation'], regions: ['EU'], date: '1996-xx-xx'},
				{platforms: ['Saturn'], regions: ['EU'], date: '1996-xx-xx'},
				{platforms: ['PlayStation'], regions: ['JP'], date: '1997-03-20'},
				{platforms: ['SNES', 'Super Famicom'], regions: ['JP'], date: '1997-09-30'},
				{platforms: ['Mobile phone'], regions: ['JP'], date: '2003-02-19'},
				{platforms: ['PlayStation'], regions: ['JP'], date: '2003-11-20'},
				{platforms: ['Mobile phone'], regions: ['JP'], date: '2004-02-18'},
				{platforms: ['Mobile phone'], regions: ['JP'], date: '2004-xx-xx'},
				{platforms: ['PlayStation Portable'], regions: ['JP'], date: '2007-01-25'}
			]
		});
	});

	it('Super Pitfall', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Super_Pitfall', 'Super Pitfall', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/20/Superpitfall.JPG',
			description: `Super Pitfall (スーパーピットフォール, Sūpā Pittofōru) is a 1986 side-scrolling platform video game for the Nintendo Famicom / Nintendo Entertainment System, NEC PC-8801, and TRS-80 Color Computer 3 published under Activision's license. Despite stating in its title screen that it was developed by Pony Inc, the NES version was not developed by Pony Inc., but by Micronics, with the PC-8801 version being developed by Pony Inc. while the CoCo version is credited as being "Programmed by Steve Bjork of SRB Software". The PC-8801 version released in November 1986, two months after the original release in September 1986, although this variant of the game was limited to single-screen platforming rather than side-scrolling.\n` +
				'\n' +
				"In addition to being a new entry in Activision's Pitfall! series for the Atari 2600, Super Pitfall was the first game that Activision published as a third-party developer. A sequel titled Super Pitfall II — the localized version of Sunsoft's Famicom title, Atlantis no Nazo – was planned, but was cancelled a short time later.",
			developers: ['Micronics', 'SRB Software'],
			publishers: ['Activision', 'Pony Canyon'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: [],
			genres: ['Platformer'],
			modes: ['multiplayer', 'single-player'],
			platforms: ['NES', 'PC-8801', 'TRS-80 Color Computer'],
			releases: [
				{platforms: ['NES'], regions: ['JP'], date: '1986-09-05'},
				{platforms: ['PC-8801'], regions: ['JP'], date: '1986-11-xx'},
				{platforms: ['NES'], regions: ['NA'], date: '1987-11-xx'},
				{platforms: ['TRS-80 Color Computer'], regions: ['NA'], date: '1988-xx-xx'}
			]
		});
	});

	it('Castelian', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Nebulus_(video_game)', 'Castelian', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b7/Nebulusinlay.jpg',
			description: 'Nebulus is a platform game created by John M. Phillips and published by Hewson Consultants in the late 1980s for home computer systems. International releases and ports were known by various other names: Castelian, Kyorochan Land (キョロちゃんランド, Kyorochan Rando), Subline, and Tower Toppler.\n' +
				'\n' +
				"The game's original 8-bit release received some critical acclaim, in particular the Commodore 64 release, which garnered a Gold Medal award from UK magazine Zzap!64.\n" +
				'\n' +
				'Nebulus was followed by the lesser-known Nebulus 2 for the Amiga in the 1990s',
			developers: ['Hewson Consultants'],
			publishers: ['Hewson Consultants', 'Triffix Entertainment', 'U.S. Gold'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['David Whittaker', 'John M. Phillips'],
			designers: ['John M. Phillips'],
			genres: ['Platformer'],
			modes: ['single-player'],
			platforms: [
				'Acorn Archimedes',
				'Amiga',
				'Amstrad CPC',
				'Atari 7800',
				'Atari ST',
				'Commodore 64',
				'Game Boy',
				'MS-DOS',
				'NES',
				'Wii Virtual Console',
				'ZX Spectrum'
			],
			releases: [
				{platforms: ['Game Boy'], regions: ['NA'], date: '1991-05-xx'},
				{platforms: ['Game Boy'], regions: ['JP'], date: '1992-10-30'},
				{platforms: ['Virtual Console'], regions: ['EU'], date: '2008-06-13'},
				{platforms: ['Virtual Console'], regions: ['NA'], date: '2009-05-04'}
			]
		});
	});

	it('Paperboy', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Paperboy_(video_game)', 'Paperboy', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Paperboy_arcadeflyer.png',
			description: 'Paperboy is an arcade action game developed and published by Atari Games and Midway Games, and released in 1985. The player takes the role of a paperboy who delivers a fictional newspaper called The Daily Sun along a suburban street on his bicycle. The arcade version of the game featured bike handlebars as the controller.\n' +
				'\n' +
				'The game was ported to many home systems beginning in 1986. A sequel for home computers and consoles, Paperboy 2, was released in 1991.',
			developers: ['Atari Games', 'Eastridge Technology', 'Midway Games'],
			publishers: [
				'Atari Games',
				'Elite Systems',
				'Midway Games',
				'Mindscape',
				'Namco'
			],
			directors: [],
			producers: [],
			programmers: ['John Salwitz'],
			artists: ['Dave Ralston'],
			writers: [],
			composers: ['Earl Vickers', 'Hal Canon'],
			designers: ['Carl Bedard', 'Dave Ralston', 'John Salwitz', 'Russel Dawe'],
			genres: ['Action'],
			modes: ['alternating', 'multiplayer', 'single-player'],
			platforms: [
				'Acorn Electron', 'Amiga',
				'Amstrad CPC', 'Apple II',
				'Apple IIGS', 'Arcade',
				'Atari Lynx', 'Atari ST',
				'BBC Micro', 'Commodore 16',
				'Commodore 64', 'Commodore Plus/4',
				'Famicom', 'Game Boy',
				'Game Boy Color', 'Game Gear',
				'Genesis', 'MS-DOS',
				'Master System', 'Mobile phone',
				'NES', 'Nintendo 64',
				'TRS-80 Color Computer', 'Xbox 360',
				'ZX Spectrum', 'iPod Touch'
			],
			releases: [
				{platforms: ['Arcade'], regions: ['EU'], date: '1985-02-xx'},
				{platforms: ['Arcade'], regions: ['NA'], date: '1985-04-xx'},
				{platforms: ['Arcade'], regions: ['JP'], date: '1985-10-xx'},
				{
					platforms: ['Acorn Electron', 'Amstrad CPC', 'Apple II', 'BBC Micro', 'TRS-80 Color Computer'],
					regions: ['NA'],
					date: '1986-xx-xx'
				},
				{platforms: ['ZX Spectrum'], regions: ['UK'], date: '1986-xx-xx'},
				{
					platforms: ['Commodore 16', 'Commodore 64', 'Commodore Plus/4'],
					regions: ['UK'],
					date: '1987-xx-xx'
				},
				{platforms: ['Famicom', 'NES'], regions: ['NA'], date: '1988-12-xx'},
				{platforms: ['Apple IIGS'], regions: ['NA'], date: '1988-xx-xx'},
				{platforms: ['Amiga', 'Atari ST', 'PC'], regions: ['UK'], date: '1989-10-xx'},
				{platforms: ['Master System'], regions: ['UK'], date: '1990-11-xx'},
				{platforms: ['Atari Lynx'], regions: ['NA'], date: '1990-xx-xx'},
				{platforms: ['Atari Lynx'], regions: ['UK'], date: '1990-xx-xx'},
				{platforms: ['Game Boy'], regions: ['UK'], date: '1990-xx-xx'},
				{platforms: ['Famicom', 'NES'], regions: ['JP'], date: '1991-01-xx'},
				{platforms: ['Famicom', 'NES'], regions: ['UK'], date: '1991-xx-xx'},
				{platforms: ['Game Boy Color'], regions: ['NA'], date: '1999-05-30'},
				{platforms: ['Nintendo 64'], regions: ['NA'], date: '1999-10-26'},
				{platforms: ['Mobile phone'], regions: ['NA'], date: '2006-05-xx'},
				{platforms: ['Xbox 360'], regions: ['NA'], date: '2007-02-14'},
				{platforms: ['Xbox 360'], regions: ['UK'], date: '2007-02-14'},
				{platforms: ['iPod Touch'], regions: ['WW'], date: '2009-12-18'}
			]
		});
	});

	it('Lode Runner', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Lode_Runner', 'Lode Runner', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/35/Lode_Runner_Coverart.png',
			description: 'Lode Runner is a 2D puzzle-platform game, published by Broderbund in 1983. Its game-play mechanics are the same as in Space Panic from 1980.\n' +
				'The player controls a character who must collect all the gold pieces in a level and get to the end while being chased by a number of enemies. It is one of the first games to include a level editor.\n' +
				'\n' +
				'After the original game, a number of remakes, spin-offs and sequels were published in the Lode Runner series for different computers and consoles, and by different developers and publishers. Tozai Games holds the copyright and trademark rights.',
			developers: ['Doug Smith', 'Hudson Soft', 'Irem'],
			publishers: ['Ariolasoft', 'Broderbund', 'Irem', 'SystemSoft'],
			directors: [],
			producers: [],
			programmers: ['Shinichi Nakamoto'],
			artists: [],
			writers: [],
			composers: ['Isamu Hirano'],
			designers: [],
			genres: ['Platformer', 'Puzzle'],
			modes: ['single-player'],
			platforms: [
				'Amiga', 'Amstrad CPC',
				'Apple II', 'Arcade',
				'Atari 8-bit', 'Atari ST',
				'BBC Micro', 'Commodore 64',
				'Game Boy', 'IBM PC',
				'MSX', 'Mac OS',
				'NES', 'PC-8801',
				'PlayStation', 'PlayStation 3',
				'Pravetz 82/8М', 'SG-1000',
				'SNES', 'TurboGrafx-16',
				'VIC-20', 'Virtual Console',
				'Windows', 'Xbox 360',
				'ZX Spectrum', 'iPod Touch'
			],
			releases: [
				{platforms: [], regions: ['NA'], date: '1983-06-23'},
				{platforms: ['PC-8801'], regions: ['JP'], date: '1983-12-xx'},
				{platforms: ['Famicom', 'NES'], regions: ['JP'], date: '1984-07-31'},
				{platforms: ['Arcade'], regions: ['JP'], date: '1984-07-xx'},
				{platforms: ['Arcade'], regions: ['EU'], date: '1984-10-xx'},
				{platforms: ['Arcade'], regions: ['NA'], date: '1984-11-xx'},
				{platforms: ['Famicom', 'NES'], regions: ['NA'], date: '1987-09-xx'}
			]
		});
	});

	it('Mega Man', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Mega_Man_(1987_video_game)', 'Mega Man', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Rockman_1987.jpg',
			description: 'Mega Man, known as Rockman (ロックマン, Rokkuman) in Japan, is a 1987  action-platform video game developed and published by Capcom for the Nintendo Entertainment System (NES). It was directed by Akira Kitamura, with Nobuyuki Matsushima as lead programmer, and is the first game of the Mega Man franchise and the original video game series. Mega Man was produced by a small team specifically for the home console market, a first for Capcom, who previously focused on arcade titles.\n' +
				'\n' +
				`The game begins the struggle of the humanoid robot and player-character Mega Man against the mad scientist Dr. Wily and the six "Robot Masters" under his control. Mega Man's nonlinear gameplay lets the player choose the order in which to complete its initial six stages. Each culminates in a boss battle against one of the Robot Masters that awards the player-character a unique weapon. Part of the strategy of the game is that the player must carefully choose the order in which to tackle the stages so that they can earn the weapons that will be most useful for future stages.\n` +
				'\n' +
				'Critics praised Mega Man for its overall design, though the game was not a commercial success. Mega Man established many of the gameplay, story, and graphical conventions that would define the ensuing sequels, subseries, and spin-offs in the Mega Man franchise. The game has since been included in game compilations, rereleased on mobile phones, and become a part of console emulation services. It received a full 3D remake titled Mega Man Powered Up in 2006.',
			developers: ['Capcom'],
			publishers: ['Capcom'],
			directors: ['Akira Kitamura'],
			producers: ['Takashi Nishiyama'],
			programmers: ['Nobuyuki Matsushima'],
			artists: [
				'Akira Kitamura',
				'Keiji Inafune',
				'Naoya Tomita',
				'Yasuaki Kishimoto'
			],
			writers: [],
			composers: ['Manami Matsumae'],
			designers: [],
			genres: ['Action', 'Platformer'],
			modes: ['single-player'],
			platforms: [
				'Android',
				'Mobile phone',
				'NES',
				'Nintendo 3DS',
				'Nintendo Switch',
				'PlayStation',
				'PlayStation 4',
				'Wii',
				'Wii U',
				'Windows',
				'Xbox One',
			],
			releases: [
				{platforms: ['NES'], regions: ['JP'], date: '1987-12-17'},
				{platforms: ['NES'], regions: ['NA'], date: '1987-12-29'},
				{platforms: ['NES'], regions: ['EU'], date: '1989-12-13'},
				{platforms: ['PlayStation'], regions: ['JP'], date: '1999-08-05'},
				{platforms: ['Mobile phone'], regions: ['NA'], date: '2004-09-20'},
				{platforms: ['Mobile phone'], regions: ['JP'], date: '2007-06-01'},
				{platforms: ['Android'], regions: ['NA'], date: '2017-01-05'},
				{platforms: ['Android'], regions: ['JP'], date: '2017-01-06'}
			]
		});
	});

	it('Winter Games', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Winter_Games', 'Winter Games', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/74/Winter_Games_Coverart.png',
			description: 'Winter Games is a sports video game developed by Epyx (and released in Europe by U.S. Gold), based on sports featured in the Winter Olympic Games.\n' +
				'\n' +
				'A snow-and-ice themed follow-up to the highly successful Summer Games, Winter Games was released in 1985 for the Commodore 64 and later ported to several popular home computers and video game consoles of the 1980s.\n' +
				'\n' +
				'The game was presented as a virtual multi-sport carnival called the "Epyx Winter Games" (there was no official IOC licensing in place) with up to 8 players each choosing a country to represent, and then taking turns competing in various events to try for a medal.',
			developers: [
				'Action Graphics',
				'Atelier Double',
				'Epyx',
				'Free Radical Software'
			],
			publishers: ['Acclaim Entertainment', 'Epyx', 'Pony Canyon', 'U.S. Gold'],
			directors: [],
			producers: [],
			programmers: [
				'Chris Oberth',
				'Elaine Hodgson',
				'Fumiko Murakami',
				'Richard A. Ditton'
			],
			artists: [
				'Lonnie D. Ropp',
				'Masashi Fujishima',
				'Michael Kosaka',
				'Timothy Skelly'
			],
			writers: [],
			composers: ['David Thiel', 'Kenichi Tomizawa'],
			designers: [],
			genres: ['Sports'],
			modes: ['single-player'],
			platforms: [
				'Amiga',
				'Amstrad CPC',
				'Apple II',
				'Apple IIGS',
				'Atari 2600',
				'Atari 7800',
				'Atari ST',
				'Commodore 64',
				'Famicom Disk System',
				'Mac OS',
				'NES',
				'PC',
				'Virtual Console',
				'ZX Spectrum'
			],
			releases: [
				{platforms: ['Commodore 64'], regions: ['NA'], date: '1985-10-xx'},
				{platforms: ['Apple II'], regions: ['NA'], date: '1985-11-xx'}
			]
		});
	});

	it('Wizardry II: The Knight of Diamonds', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Wizardry_II:_The_Knight_of_Diamonds', 'Wizardry II: The Knight of Diamonds', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6d/Wizardry_II_-_The_Knight_of_Diamonds_Coverart.png',
			description: 'Wizardry II: The Knight of Diamonds (originally known as Wizardry: Knight of Diamonds - The Second Scenario) is the second game in the Wizardry series of role-playing video games. It was published in 1982 by Sir-Tech.',
			developers: ['Sir-Tech'],
			publishers: ['Sir-Tech'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: ['Andrew C. Greenberg', 'Robert Woodhead'],
			genres: ['Role-playing'],
			modes: ['single-player'],
			platforms: [
				'Apple II', 'Commodore 128', 'Commodore 64',
				'FM-7', 'Game Boy Color',
				'IBM PC', 'MS-DOS',
				'MSX2', 'Mac OS',
				'NES', 'PC-8801',
				'PC-9801', 'Sharp X1'
			],
			releases: [{platforms: [], regions: [], date: '1982-xx-xx'}]
		});
	});

	it('Princess Tomato in the Salad Kingdom', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Princess_Tomato_in_the_Salad_Kingdom', 'Princess Tomato in the Salad Kingdom', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f6/Princesstomato.jpg',
			description: 'Princess Tomato in the Salad Kingdom (サラダの国のトマト姫, Sarada no Kuni no Tomato Hime) is a video game by Hudson Soft originally released in 1984 for the NEC PC-8801, NEC PC-6001, FM-7 and MSX Japanese home computers.\n' +
				'\n' +
				"It was ported on May 27, 1988, to the Famicom, and February 8, 1991 for the Nintendo Entertainment System in North America. It was also released on the Wii's Virtual Console in Japan on January 19, 2010, and in North America on February 8, 2010.\n" +
				'\n' +
				"The characters are primarily cartoon-like anthropomorphic fruits and vegetables, though the game does contain some human characters, including Princess Tomato's sister, Lisa, and the villainous Farmies.",
			developers: ['Hudson Soft'],
			publishers: ['Hudson Soft'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Tomotsune Maeno'],
			designers: [],
			genres: ['Adventure'],
			modes: ['single-player'],
			platforms: [
				'FM-7',
				'Famicom',
				'MSX',
				'NES',
				'PC-6001',
				'PC-8801',
				'Virtual Console'
			],
			releases: [
				{platforms: ['PC'], regions: ['JP'], date: '1984-xx-xx'},
				{platforms: ['Famicom', 'NES'], regions: ['JP'], date: '1988-05-27'},
				{platforms: ['Famicom', 'NES'], regions: ['NA'], date: '1991-02-08'},
				{platforms: ['Virtual Console'], regions: ['JP'], date: '2010-01-19'},
				{platforms: ['Virtual Console'], regions: ['NA'], date: '2010-02-08'},
				{platforms: ['Virtual Console'], regions: ['JP'], date: '2012-09-09'},
				{platforms: ['Virtual Console'], regions: ['JP'], date: '2014-05-14'}
			]
		});
	});

	it('M.U.L.E.', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/M.U.L.E.', 'M.U.L.E.', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Mule_box.jpg',
			description: 'M.U.L.E. is a seminal multiplayer video game written for the Atari 8-bit family of home computers by Ozark Softscape. Designer Danielle Bunten Berry (credited as Dan Bunten) took advantage of the four joystick ports of the Atari 400 and 800 to allow four-player simultaneous play. M.U.L.E.  was one of the first five games published in 1983 by new company Electronic Arts, alongside Axis Assassin, Archon: The Light and the Dark, Worms?, and Hard Hat Mack.  Primarily a turn-based strategy game, it incorporates real-time elements where players compete directly as well as aspects that simulate economics.\n' +
				'\n' +
				'The game was ported to the Commodore 64, Nintendo Entertainment System, and IBM PC (as a self-booting disk).  Japanese versions also exist for the PC-8801, Sharp X1, and MSX 2 computers. Like the subsequent models of the Atari 8-bit family, none of these systems allow four players with separate joysticks. The Commodore 64 version lets four players share joysticks, with two players using the keyboard during action portions.',
			developers: [
				'Bullet-Proof Software',
				'Eastridge Technology',
				'Ozark Softscape'
			],
			publishers: ['Ariolasoft', 'Bullet-Proof Software', 'Electronic Arts'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: ['Danielle Bunten Berry'],
			genres: ['Business simulator', 'Simulation'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Atari 8-bit',
				'Commodore 64',
				'IBM PC',
				'MSX2',
				'NES',
				'PC-8801',
				'Sharp X1'
			],
			releases: [
				{platforms: ['Atari 8-bit', 'Commodore 64'], regions: [], date: '1983-xx-xx'},
				{platforms: ['IBM PC'], regions: [], date: '1985-xx-xx'}
			]
		});
	});

	it('Bump \'n\' Jump', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Bump_%27n%27_Jump', 'Bump \'n\' Jump', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c5/Bumpnjump_arcadeflyer.PNG',
			description: "Bump 'n' Jump is an overhead-view vehicular combat game developed by Data East and originally released in Japan as Burnin' Rubber (バーニンラバー, Bānin Rabā). The arcade version was available as both a dedicated board and as part of Data East's DECO Cassette System. It was distributed in North America by Bally Midway. The goal is to drive to the end of a level while bumping enemy vehicles into the sides of the track and jumping over large obstacles such as bodies of water.\n" +
				'\n' +
				"The arcade game was a commercial success in Japan and North America. The game was ported to the Atari 2600, Intellivision, ColecoVision, Nintendo Entertainment System, and Sharp X1. The Famicom version of Burnin' Rubber was published as Buggy Popper (バギー・ポッパー, Bagī Poppā) in Japan in 1986.",
			developers: ['Data East', 'Sakata SAS'],
			publishers: ['Data East', 'Midway Games', 'Vic Tokai'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Azusa Hara', 'Hiroaki Yoshida'],
			designers: [],
			genres: ['Vehicular combat'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Arcade',
				'Atari 2600',
				'ColecoVision',
				'Intellivision',
				'NES',
				'Sharp X1'
			],
			releases: [
				{platforms: ['Arcade'], regions: [], date: '1982-11-xx'},
				{platforms: ['Atari 2600', 'Intellivision'], regions: [], date: '1983-xx-xx'},
				{platforms: ['ColecoVision'], regions: [], date: '1984-07-xx'},
				{platforms: ['Famicom'], regions: [], date: '1986-xx-xx'},
				{platforms: ['NES'], regions: [], date: '1987-03-xx'}
			]
		});
	});

	it('The Miracle Piano Teaching System', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Miracle_Piano_Teaching_System', 'The Miracle Piano Teaching System', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/33/Miracle_Piano_Teaching_System_cover.jpg',
			description: 'The Miracle Piano Teaching System is a MIDI keyboard/teaching tool created in 1990 by The Software Toolworks for the NES and SNES, Apple Macintosh, Amiga, Sega Genesis, and MS-DOS PC.',
			developers: ['The Software Toolworks'],
			publishers: ['The Software Toolworks'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: ['Henrik Markarian', 'Jon Mandel'],
			genres: ['Music'],
			modes: ['single-player'],
			platforms: ['Amiga', 'Genesis', 'Mac OS', 'NES', 'PC', 'SNES'],
			releases: [{platforms: [], regions: [], date: '1990-xx-xx'}]
		});
	});

	it('Spider-Man: Return of the Sinister Six', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Spider-Man:_Return_of_the_Sinister_Six', 'Spider-Man: Return of the Sinister Six', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a1/Spiderman_return_of_the_sinister_six_NES.jpg',
			description: 'Spider-Man: Return of the Sinister Six is a video game featuring the Marvel Comics characters Spider-Man and the Sinister Six, developed by Bits Studios and published by LJN for the Nintendo Entertainment System in 1992. Versions of the game were also released for the Sega Master System and Game Gear by the Flying Edge division of Acclaim. The game is loosely based on the story arc of the same name, which was published in The Amazing Spider-Man #334-339 in the early 1990s.',
			developers: ['Bits Studios'],
			publishers: ['Flying Edge', 'LJN'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['David Whittaker'],
			designers: [],
			genres: ['Action', 'Adventure'],
			modes: ['single-player'],
			platforms: ['Game Gear', 'Master System', 'NES'],
			releases: [
				{platforms: ['Master System', 'NES'], regions: [], date: '1992-10-xx'},
				{platforms: ['Game Gear'], regions: [], date: '1993-xx-xx'}
			]
		});
	});

	it('Captain America and The Avengers', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Captain_America_and_The_Avengers', 'Captain America and The Avengers', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/99/Captain_America_and_The_Avengers.jpg',
			description: "Captain America and the Avengers (キャプテンアメリカアンドジアベンジャーズ, Kyaputen Amerika ando ji Abenjāzu) is a beat 'em up arcade game developed and released by Data East in 1991. It features the Marvel Comics characters The Avengers in a side-scrolling brawling and shooting adventure to defeat the evil Red Skull. The game received ports for the Sega Genesis/Mega Drive, Super Nintendo Entertainment System, Game Boy and Game Gear. A different Data East game was released for the Nintendo Entertainment System.",
			developers: ['Data East', 'Realtime Associates'],
			publishers: ['Data East', 'Mindscape'],
			directors: ['Eiichi Nishiyama', 'Iwao Horita', 'Takehiko Ishiro'],
			producers: ['Koji Jinbo'],
			programmers: [],
			artists: [
				'H. Sasaki',
				'Masanori Tokoro',
				'Takehiko Ishiro',
				'Takumi Sawajiri',
				'Yorokin'
			],
			writers: [],
			composers: [
				'Eric Swanson',
				'Hitoshi Sakimoto',
				'Shogo Sakai',
				'Tatsuya Kiuchi',
				'Tomoyoshi Sato'
			],
			designers: [
				'Ayumi Hanimaru',
				'Eiichi Nishiyama',
				'Hanaita',
				'Haruhisa Yajima',
				'Hidenobu Ito',
				'Hiroaki Iwano',
				'Hiroshi Ōnuki',
				'K. Miyazawa',
				'Lennard Feddersen',
				'Steven Ettinger',
				'Surupi',
				'Tac H.',
				'Tesa Amusement Service / M I',
				'Yasuyuki Satō'
			],
			genres: ['Action', "Beat 'em up", 'Platformer'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Arcade',
				'Game Boy',
				'Game Gear',
				'Genesis',
				'Mega Drive',
				'NES',
				'SNES'
			],
			releases: [
				{platforms: [], regions: [], date: '1991-xx-xx'},
				{platforms: ['Arcade', 'NES'], regions: [], date: '1991-xx-xx'},
				{platforms: ['Genesis', 'Mega Drive'], regions: [], date: '1992-xx-xx'},
				{platforms: ['Game Gear', 'SNES'], regions: [], date: '1993-xx-xx'},
				{platforms: ['Game Boy'], regions: [], date: '1994-xx-xx'},
			]
		});
	});

	it('Spelunker', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Spelunker_(video_game)', 'Spelunker', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/72/Spelunker_originalcover.png',
			description: "Spelunker is a 1983 platform video game developed by Timothy G. Martin of MicroGraphic Image. It is set in a colossal cave, with the player starting at the cave's entrance at the top, and the objective is to get to the treasure at the bottom.\n" +
				'\n' +
				'Originally released by MicroGraphic Image for the Atari 8-bit family in 1983, the game was later ported to the Commodore 64 and re-released by Broderbund in 1984, with European publishing rights licensed to Ariolasoft. It was released on arcade in 1985, on the Nintendo Entertainment System on December 6, 1985 in Japan and September 1987 in North America, and on the MSX in 1986. A sequel was released in arcades in 1986 called Spelunker II: 23 no Kagi, and a different sequel for the NES on September 18, 1987 called Spelunker II: Yūsha e no Chōsen, both by Irem and in Japan only.',
			developers: ['Irem', 'MicroGraphic Image', 'Tamtex', 'Tose'],
			publishers: ['Broderbund', 'Irem', 'MicroGraphic Image'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: ['Tim Martin'],
			genres: ['Platformer'],
			modes: ['single-player'],
			platforms: ['Arcade', 'Atari 8-bit', 'Commodore 64', 'MSX', 'NES'],
			releases: [
				{platforms: ['Atari 8-bit'], regions: ['NA'], date: '1983-xx-xx'},
				{platforms: ['Commodore 64'], regions: ['WW'], date: '1984-xx-xx'},
				{platforms: ['NES'], regions: ['JP'], date: '1985-12-06'},
				{platforms: ['Arcade'], regions: ['JP'], date: '1985-xx-xx'},
				{platforms: ['MSX'], regions: ['JP'], date: '1986-06-10'},
				{platforms: ['NES'], regions: ['NA'], date: '1987-09-xx'},
				{platforms: ['Wii Virtual Console'], regions: ['JP'], date: '2007-08-28'},
				{platforms: ['Wii Virtual Console'], regions: ['NA'], date: '2008-03-17'},
				{platforms: ['Wii Virtual Console'], regions: ['EU'], date: '2008-09-05'},
				{platforms: ['3DS Virtual Console'], regions: ['JP'], date: '2012-12-19'},
				{platforms: ['Wii U Virtual Console'], regions: ['JP'], date: '2013-04-27'},
				{platforms: ['Wii U Virtual Console'], regions: ['WW'], date: '2013-06-06'},
				{platforms: ['3DS Virtual Console'], regions: ['NA'], date: '2013-06-27'},
				{platforms: ['3DS Virtual Console'], regions: ['EU'], date: '2013-07-18'}
			]
		});
	});

	it('Boulder Dash', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Boulder_Dash', 'Boulder Dash', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/44/Boulder_Dash_Original_Cover_Art.jpg',
			description: 'Boulder Dash is a 2D maze-puzzle video game released in 1984 by First Star Software for Atari 8-bit computers. It was created by Canadian developers Peter Liepa and Chris Gray. The player controls Rockford, who collects treasures while evading hazards.\n' +
				'\n' +
				'Boulder Dash was ported to many 8-bit and 16-bit systems and turned into a coin-operated arcade game. It was followed by multiple sequels and re-releases and influenced games such as Repton and direct clones such as Emerald Mine.\n' +
				'\n' +
				'As of January 1, 2018, BBG Entertainment GmbH owns the intellectual property rights to Boulder Dash.[citation needed]',
			developers: ['Beam Software', 'Data East'],
			publishers: ['First Star Software', 'Mirrorsoft'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: ['Chris Gray', 'Peter Liepa'],
			genres: ['Maze', 'Puzzle'],
			modes: ['single-player'],
			platforms: [
				'Acorn Electron', 'Amstrad CPC',
				'Android', 'Apple II',
				'Arcade', 'Atari 2600',
				'Atari 8-bit', 'BBC Micro',
				'ColecoVision', 'Commodore 64',
				'Game Boy', 'Game Boy Advance',
				'IBM PC', 'Intellivision',
				'MSX', 'Mac OS',
				'NES', 'Nintendo 3DS',
				'Nintendo DS', 'PMD 85',
				'ZX Spectrum', 'iOS'
			],
			releases: [
				{platforms: ['Atari 8-bit'], regions: ['NA'], date: '1984-03-xx'},
				{platforms: ['Commodore 64'], regions: ['NA'], date: '1984-08-xx'},
				{platforms: ['Apple II'], regions: ['NA'], date: '1984-10-xx'},
				{platforms: ['Amstrad CPC', 'MSX'], regions: [], date: '1985-xx-xx'},
				{platforms: ['BBC Micro', 'Electron'], regions: [], date: '1988-xx-xx'},
				{platforms: ['Game Boy', 'NES'], regions: [], date: '1990-xx-xx'},
				{platforms: ['Atari 2600'], regions: [], date: '2012-xx-xx'},
			]
		});
	});

	it('Dragon Warrior IV', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Dragon_Quest_IV', 'Dragon Warrior IV', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/db/Dragon_Quest_IV_cover.jpg',
			description: "Dragon Quest IV: Chapters of the Chosen, titled Dragon Warrior IV when initially localized to North America, is a role-playing video game, the fourth installment of the Dragon Quest video game series developed by Chunsoft and published by Enix, and the first of the Zenithian Trilogy. It was originally released for the Famicom on 11 February 1990 in Japan. A North American NES version followed in October 1992, and would be the last Dragon Quest game localized and published by Enix's Enix America Corporation subsidiary prior to its closure in November 1995, as well as the last Dragon Quest game to be localized into English prior to the localization of Dragon Warrior Monsters in December 1999. The game was remade by Heartbeat for the PlayStation, which eventually was available as an Ultimate Hits game. This was followed with a second remake developed by ArtePiazza for the Nintendo DS, released in Japan November 2007 and worldwide in September 2008. A version based on the Nintendo DS remake for Android and iOS was released in 2014.\n" +
				'\n' +
				"Dragon Quest IV differs from the rest of the series by breaking up the game into five distinct chapters, each of which focuses on a different protagonist or protagonists. The first four are told from the perspective of the Hero's future companions and the fifth one, from the Hero's perspective, brings all the characters together as they start their journey to save the world. The PlayStation remake adds a sixth chapter, which is retained in the DS remake.",
			developers: ['ArtePiazza', 'Cattle Call', 'Chunsoft', 'Heartbeat'],
			publishers: ['Enix', 'Square Enix'],
			directors: ['Koichi Nakamura'],
			producers: ['Yukinobu Chida'],
			programmers: ['Kan Naito', 'Manabu Yamana'],
			artists: ['Akira Toriyama'],
			writers: ['Yuji Horii'],
			composers: ['Koichi Sugiyama'],
			designers: ['Yuji Horii'],
			genres: ['Role-playing'],
			modes: ['single-player'],
			platforms: ['Android', 'Famicom', 'NES', 'Nintendo DS', 'PlayStation', 'iOS'],
			releases: [
				{platforms: ['Famicom', 'NES'], regions: ['JP'], date: '1990-02-11'},
				{platforms: ['Famicom', 'NES'], regions: ['NA'], date: '1992-10-xx'},
				{platforms: ['PlayStation'], regions: ['JP'], date: '2001-11-22'},
				{platforms: ['Nintendo DS'], regions: ['JP'], date: '2007-11-22'},
				{platforms: ['Nintendo DS'], regions: ['EU'], date: '2008-09-12'},
				{platforms: ['Nintendo DS'], regions: ['NA'], date: '2008-09-16'},
				{platforms: ['Android', 'iOS'], regions: ['JP'], date: '2014-04-17'},
				{platforms: ['Android', 'iOS'], regions: ['WW'], date: '2014-08-07'}
			]
		});
	});

	it('Karate Champ', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Karate_Champ', 'Karate Champ', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b7/Karate_Champ_flyer.png',
			description: 'Karate Champ, known in Japan as Karate Dō (空手道, "The Way of the Empty Hand"), is a 1984 arcade fighting game developed by Technōs Japan and released by Data East. A variety of moves can be performed using the dual-joystick controls using a best-of-three matches format like later fighting games. The game was a major commercial success, both for arcades and home computers. Karate Champ established and popularized the one-on-one fighting game genre, for which it is considered one of the most influential games of all time.\n' +
				'\n' +
				'An updated version that allows two players the option to compete against each other was released in 1984 under the title Karate Champ — Player vs Player (対戦空手道 美少女青春編, Taisen Karate Dō: Bishōjo Seishun Hen, "The Competitive Way of the Empty Hand: Pretty Maiden Edition"), featuring a multiplayer mode and more varied gameplay. It was released for the arcades shortly after the original during the same year, also published by Data East. This version was released internationally as Karate Champ (the original single-player version was exclusive to Japan), and would serve as the basis for the home ports of Karate Champ.',
			developers: ['Technōs Japan'],
			publishers: ['Data East'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: [],
			genres: ['Fighting'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Apple II',
				'Arcade',
				'Commodore 64',
				'NES',
				'Virtual Console',
				'iOS'
			],
			releases: [
				{platforms: ['Arcade'], regions: ['JP'], date: '1984-05-xx'},
				{platforms: ['Arcade'], regions: ['WW'], date: '1984-09-xx'},
				{platforms: ['Apple II', 'Commodore 64'], regions: ['NA'], date: '1985-10-xx'},
				{platforms: ['Virtual Console'], regions: ['JP'], date: '2010-03-16'},
				{platforms: ['Arcade Archives'], regions: ['JP'], date: '2014-10-09'},
				{platforms: ['Arcade Archives'], regions: ['EU'], date: '2015-07-28'},
				{platforms: ['Arcade Archives'], regions: ['NA'], date: '2015-09-29'}
			]
		});
	});

	it('Gun.Smoke', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Gun.Smoke', 'Gun.Smoke', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/81/Gunsmoke_game_flyer.png',
			description: 'Gun.Smoke is a 1985 vertical scrolling run-and-gun shooter arcade game by Capcom. This Western-themed game was designed by Yoshiki Okamoto. Gun.Smoke centers on a character named Billy Bob in the NES version, a bounty hunter who is after vicious criminals of the Wild West.\n' +
				'\n' +
				"It was a commercial success in arcades, becoming Japan's sixth highest-grossing table arcade game during the first half of 1986. Red Dead Revolver, the first installment of the Red Dead series, is a spiritual sequel to Gun.Smoke.",
			developers: ['Capcom'],
			publishers: ['Capcom', 'Romstar'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Ayako Mori', 'Junko Tamiya'],
			designers: ['Yoshiki Okamoto'],
			genres: ['Run-and-gun', 'Shooter', 'Western'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Amstrad CPC',
				'Arcade',
				'Famicom Disk System',
				'IBM PC',
				'MSX',
				'NES',
				'PlayStation',
				'PlayStation 2',
				'Saturn',
				'Xbox',
				'ZX Spectrum'
			],
			releases: [
				{platforms: ['Arcade'], regions: ['JP'], date: '1985-10-23'},
				{platforms: ['Arcade'], regions: ['NA'], date: '1985-10-xx'},
				{platforms: ['Arcade'], regions: ['WW'], date: '1985-xx-xx'},
				{platforms: ['Famicom Disk System', 'NES'], regions: ['JP'], date: '1988-01-27'},
				{platforms: ['Famicom Disk System', 'NES'], regions: ['NA'], date: '1988-02-xx'},
				{platforms: ['Famicom Disk System', 'NES'], regions: ['EU'], date: '1988-12-23'}
			]
		});
	});

	it('Dr. Mario', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Dr._Mario', 'Dr. Mario', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f8/Dr._Mario_box_art.jpg',
			description: "Dr. Mario (stylized as D℞. MARIO) is a 1990 action puzzle video game produced by Gunpei Yokoi and designed by Takahiro Harada. Nintendo developed and published the game for the Nintendo Entertainment System and Game Boy consoles. The game's soundtrack was composed by Hirokazu Tanaka.\n" +
				'\n' +
				"A falling block puzzle game, the player's objective is to destroy the viruses populating the on-screen playing field by using colored vitamin capsules that are tossed into the field by Mario, who assumes the role of a doctor. The player manipulates the capsules as they fall, with the goal being to align similar colors which removes the viruses. The player progresses through the game by eliminating all the viruses on the screen in each level.\n" +
				'\n' +
				'Dr. Mario was a commercial success, having sold over 10 million game cartridges worldwide across all platforms, and it received positive reception, appearing on several "Best Nintendo Games of All Time" lists. The game has been ported, remade, or has had a sequel on every Nintendo home console since the NES as well as most portable consoles, including a re-release in 2004 on the Game Boy Advance as part of the Classic NES Series. Modified versions of Dr. Mario exist as minigames in WarioWare, Inc.: Mega Microgames!, Brain Age 2: More Training in Minutes a Day!, and Brain Age: Concentration Training. A Wii U spin-off game, Dr. Luigi, was released in 2013 as part of the Year of Luigi celebration.',
			developers: ['Nintendo R&D1'],
			publishers: ['Nintendo'],
			directors: [],
			producers: ['Gunpei Yokoi'],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Hirokazu Tanaka'],
			designers: ['Takahiro Harada'],
			genres: ['Puzzle'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Arcade',
				'Game Boy',
				'Game Boy Advance',
				'NES',
				'SNES',
				'Wii'
			],
			releases: [
				{platforms: ['Famicom', 'NES'], regions: ['JP'], date: '1990-07-27'},
				{platforms: ['Game Boy'], regions: ['JP'], date: '1990-07-27'},
				{platforms: ['Famicom', 'NES'], regions: ['NA'], date: '1990-10-01'},
				{platforms: ['Game Boy'], regions: ['NA'], date: '1990-10-01'},
				{platforms: ['Arcade'], regions: ['NA'], date: '1990-10-xx'},
				{platforms: ['Arcade'], regions: ['WW'], date: '1990-11-22'},
				{platforms: ['PlayChoice-10'], regions: ['NA'], date: '1990-12-31'},
				{platforms: ['Game Boy'], regions: ['EU'], date: '1991-04-30'},
				{platforms: ['Famicom', 'NES'], regions: ['PAL'], date: '1991-06-27'},
				{platforms: ['Super Famicom'], regions: ['JP'], date: '1997-03-01'},
				{platforms: ['Super Famicom'], regions: ['JP'], date: '1998-06-01'}
			]
		});
	});

	it('Genghis Khan', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Genghis_Khan_(video_game)', 'Genghis Khan', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1a/Genghis_Khan_Cover.jpg',
			description: 'Genghis Khan, original full title Aoki Ōkami to Shiroki Mejika: Genghis Khan (蒼き狼と白き牝鹿・ジンギスカン), is a 1987 turn-based strategy game developed by Koei, originally released for the NEC PC-9801, MSX and Sharp X68000 in 1988, the DOS and NES in 1990, and the Amiga in 1990. It is actually the second game in the series, after a 1985 Aoki Ōkami to Shiroki Mejika, also for PC-88, PC-98, and MSX.',
			developers: [],
			publishers: ['Koei'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: [],
			genres: ['Strategy', 'Turn-based'],
			modes: ['multiplayer', 'single-player'],
			platforms: ['Amiga', 'MS-DOS', 'MSX', 'NES'],
			releases: [
				{platforms: ['PC-9801'], regions: ['JP'], date: '1987-12-xx'},
				{platforms: ['MSX', 'Sharp X68000'], regions: ['JP'], date: '1988-xx-xx'},
				{platforms: ['NES'], regions: ['JP'], date: '1989-04-20'},
				{platforms: ['DOS'], regions: ['NA'], date: '1989-xx-xx'},
				{platforms: ['NES'], regions: ['NA'], date: '1990-01-xx'},
				{platforms: ['Amiga'], regions: ['EU'], date: '1990-xx-xx'}
			]
		});
	});

	it('Super Dodge Ball', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Super_Dodge_Ball_(NES_video_game)', 'Super Dodge Ball', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2d/Super_Dodge_Ball_%28NES_cover%29.JPG',
			description: 'Super Dodge Ball is a dodgeball-based sports game produced by Technōs Japan that was released for the Nintendo Entertainment System in 1989. It is loosely based on the 1987 arcade game of the same name, which was also developed by Technōs. Like its arcade counterpart, it was released in Japan as part of the Kunio-kun series.\n' +
				'\n' +
				'In Japan, a PC port of the Famicom version of Nekketsu Kōkō Dodgeball Bu was released on October 17, 2003 as a budget-priced release. It was also included in the Game Boy Advance compilation Kunio-kun Nekketsu Collection 1, released in 2005. Both the Famicom version and the American NES version were released for the Wii, Nintendo 3DS and Wii U Virtual Console for their respective territories. The game was also released in Europe for the two latter systems, despite the NES version not being released in Europe.',
			developers: ['Technōs Japan'],
			publishers: ['CSG Imagesoft', 'Technōs Japan'],
			directors: ['Mitsuhiro Yoshida'],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Kazuo Sawa'],
			designers: ['Koji Ogata'],
			genres: ['Sports'],
			modes: ['multiplayer', 'single-player'],
			platforms: ['Famicom', 'NES', 'Virtual Console'],
			releases: [
				{platforms: ['Famicom', 'NES'], regions: ['JP'], date: '1988-07-26'},
				{platforms: ['Famicom', 'NES'], regions: ['NA'], date: '1989-06-xx'},
				{platforms: ['Wii Virtual Console'], regions: ['JP'], date: '2008-06-17'},
				{platforms: ['Wii Virtual Console'], regions: ['NA'], date: '2008-09-22'},
				{platforms: ['3DS Virtual Console'], regions: ['JP'], date: '2013-03-06'},
				{platforms: ['Wii U Virtual Console'], regions: ['JP'], date: '2013-12-18'},
				{platforms: ['Wii U Virtual Console'], regions: ['PAL'], date: '2014-03-13'},
				{platforms: ['3DS Virtual Console'], regions: ['PAL'], date: '2014-06-05'},
				{platforms: ['3DS Virtual Console'], regions: ['NA'], date: '2014-06-18'},
				{platforms: ['Wii U Virtual Console'], regions: ['NA'], date: '2014-06-18'},
				{platforms: ['Nintendo Switch'], regions: ['WW'], date: '2018-10-10'}
			]
		});
	});

	it('F-15 Strike Eagle', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/F-15_Strike_Eagle_(video_game)', 'F-15 Strike Eagle', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/64/F-15_Strike_Eagle_Coverart.jpg',
			description: 'F-15 Strike Eagle is an F-15 Strike Eagle combat flight simulator originally released for the Atari 8-bit family in 1984 by MicroProse then ported to other systems. It is the first in the F-15 Strike Eagle series followed by F-15 Strike Eagle II and F-15 Strike Eagle III. An arcade version of the game was released simply as F-15 Strike Eagle in 1991, which uses higher-end hardware than was available in home systems, including the TMS34010 graphics-oriented CPU.',
			developers: ['FIL', 'MicroProse', 'NMS Software'],
			publishers: ['FIL', 'MicroProse'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Ken Lagace', 'Mark Cooksey'],
			designers: ['Sid Meier'],
			genres: ['Flight simulator', 'Simulation'],
			modes: ['single-player'],
			platforms: [
				'Amstrad CPC', 'Apple II',
				'Arcade', 'Atari 8-bit',
				'Atari ST', 'Commodore 64',
				'Game Boy', 'Game Gear',
				'IBM PC', 'MSX',
				'NES', 'PC-8801',
				'PC-9801', 'Thomson',
				'ZX Spectrum'
			],
			releases: [
				{platforms: ['Atari 8-bit'], regions: [], date: '1984-xx-xx'},
				{platforms: ['Apple II', 'Atari ST', 'Commodore 64', 'PC'], regions: [], date: '1985-xx-xx'},
				{platforms: ['Amstrad CPC', 'MSX', 'Thomson', 'ZX Spectrum'], regions: [], date: '1987-xx-xx'},
				{platforms: ['Arcade'], regions: [], date: '1991-xx-xx'},
				{platforms: ['NES'], regions: [], date: '1992-xx-xx'},
				{platforms: ['Game Boy', 'Game Gear'], regions: [], date: '1993-xx-xx'}
			]
		});
	});

	it('Tennis', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Tennis_(1984_video_game)', 'Tennis', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/98/Tennis_%28video_game%29.jpg',
			description: 'Tennis is a sports video game developed by Nintendo in 1983, and released for the Family Computer (Famicom) in 1984. The arcade game version Vs. Tennis was also released for the Nintendo Vs. System in 1984, becoming a hit at Japanese and American arcades that year; it was the sixth top-performing arcade game of 1984 in the United States. Tennis is one of 17 launch games for the Nintendo Entertainment System (NES) in North America and Europe. The game was re-released for the Game Boy as a launch game in North America.',
			developers: ['Intelligent Systems', 'Nintendo EAD'],
			publishers: ['Hudson Soft', 'Nintendo'],
			directors: [],
			producers: [],
			programmers: [],
			artists: [],
			writers: [],
			composers: [],
			designers: ['Shigeru Miyamoto'],
			genres: ['Sports'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Arcade',
				'Famicom',
				'Famicom Disk System',
				'Game Boy',
				'MZ-1500',
				'NES',
				'PC-8801',
				'PlayChoice-10',
				'Sharp X1'
			],
			releases: [
				{platforms: ['Famicom', 'NES'], regions: ['JP'], date: '1984-01-14'},
				{platforms: ['Arcade'], regions: ['JP'], date: '1984-01-18'},
				{platforms: ['Arcade'], regions: ['NA'], date: '1984-03-xx'},
				{platforms: ['PC-8801'], regions: ['JP'], date: '1985-06-xx'},
				{platforms: ['Famicom', 'NES'], regions: ['NA'], date: '1985-10-18'},
				{platforms: ['MZ-1500'], regions: ['JP'], date: '1985-xx-xx'},
				{platforms: ['Sharp X1'], regions: ['JP'], date: '1985-xx-xx'},
				{platforms: ['Famicom Disk System'], regions: ['JP'], date: '1986-02-21'},
				{platforms: ['Famicom', 'NES'], regions: ['EU'], date: '1986-09-01'},
				{platforms: ['Arcade'], regions: ['EU'], date: '1986-xx-xx'},
				{platforms: ['Game Boy'], regions: ['JP'], date: '1989-05-29'},
				{platforms: ['Game Boy'], regions: ['NA'], date: '1989-07-31'},
				{platforms: ['Game Boy'], regions: ['PAL'], date: '1990-xx-xx'}
			]
		});
	});

	it('Wrecking Crew', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Wrecking_Crew_(video_game)', 'Wrecking Crew', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/bb/Wrecking_Crew_cover.jpg',
			description: 'Wrecking Crew is an action game developed and published by Nintendo. Designed by Yoshio Sakamoto, it was first released as an arcade game for the Nintendo VS. System in 1984, titled Vs. Wrecking Crew and featuring a simultaneous two-player mode. It was then released as a single-player game for the Family Computer (Famicom) console in 1985, and then as a launch title for the Nintendo Entertainment System (NES) later that year.',
			developers: ['Nintendo R&D1'],
			publishers: ['Nintendo'],
			directors: [],
			producers: [],
			programmers: [],
			artists: ['Yoshio Sakamoto'],
			writers: [],
			composers: ['Hirokazu Tanaka'],
			designers: ['Yoshio Sakamoto'],
			genres: ['Action', 'Puzzle'],
			modes: ['multiplayer', 'single-player'],
			platforms: [
				'Arcade',
				'Famicom',
				'Famicom Disk System',
				'Game Boy Advance',
				'NES'
			],
			releases: [
				{platforms: ['Arcade'], regions: ['JP'], date: '1984-07-26'},
				{platforms: ['Arcade'], regions: ['NA'], date: '1984-09-xx'},
				{platforms: ['Famicom', 'NES'], regions: ['JP'], date: '1985-05-26'},
				{platforms: ['Famicom', 'NES'], regions: ['NA'], date: '1985-10-18'},
				{platforms: ['Arcade'], regions: ['WW'], date: '1985-xx-xx'},
				{platforms: ['Famicom', 'NES'], regions: ['EU'], date: '1987-10-15'},
				{platforms: ['Famicom Disk System'], regions: ['JP'], date: '1989-02-03'},
				{platforms: ['Game Boy Advance'], regions: ['JP'], date: '2004-05-21'}
			]
		});
	});

	it('Hook', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Hook_(video_game)', 'Hook', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Hook_game_cover_art.jpg',
			description: '1992 video game\n' +
				'\n' +
				'HookDeveloper(s)Ocean Software Publisher(s)Sony Imagesoft Composer(s)Jonathan Dunn (C64, Game Boy)Matthew Cannon (NES)Platform(s)Commodore 64Game BoyNintendo Entertainment System ReleaseWW: February 1992Genre(s)Platformside-scrolling video game Mode(s)Multiplayersingle-player\n' +
				'\n' +
				'1992 video game\n' +
				'\n' +
				'HookDeveloper(s)Ocean Software Publisher(s)The Hit SquadOcean Software Composer(s)Jonathan Dunn Platform(s)AmigaAtari STDOS ReleaseWW: 1992EU: 1993 (Amiga re-release)Genre(s)Point-and-click adventure Mode(s)Single-player\n' +
				'\n' +
				'1992 video game\n' +
				'\n' +
				"HookDeveloper(s)Irem Publisher(s)Irem Platform(s)arcade cabinet ReleaseWW: 1992Genre(s)Beat 'em up\n" +
				'\n' +
				"There have been several video games based on the 1991 film Hook. A side-scrolling platform game for the Nintendo Entertainment System (NES) and Game Boy was released in the United States in February 1992. Subsequent side-scrolling platform games were released for the Commodore 64 and the Super Nintendo Entertainment System (SNES) later in 1992, followed by versions for the Sega CD, Sega Genesis, and Sega's handheld Game Gear console in 1993. An arcade game was also released in 1993.\n" +
				'\n' +
				'A graphic adventure point-and-click game, developed and published by Ocean Software, was released for Amiga, Atari ST, and MS-DOS in 1992.',
			developers: ['Core Design', 'Spidersoft', 'Ukiyotei'],
			publishers: ['Sony Imagesoft'],
			directors: ['Jeremy Smith'],
			producers: ['Allan Becker', 'Steve Marsden'],
			programmers: [],
			artists: [],
			writers: [],
			composers: ['Matt Furniss'],
			designers: [],
			genres: ['Platformer'],
			modes: ['single-player'],
			platforms: ['Game Gear', 'Genesis', 'SNES', 'Sega CD'],
			releases: [
				{platforms: ['SNES'], regions: ['NA'], date: '1992-xx-xx'},
				{platforms: ['Game Gear', 'Genesis'], regions: ['NA'], date: '1993-07-xx'},
				{platforms: ['Mega Drive'], regions: ['EU'], date: '1993-11-xx'},
				{platforms: ['Sega CD'], regions: ['NA'], date: '1993-xx-xx'}
			]
		});
	});

	it('Silent Service', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Silent_Service_(video_game)', 'Silent Service', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/42/Silent_service.jpg',
			description: "Silent Service is a submarine simulator video game designed by Sid Meier and published by MicroProse for various 8-bit home computers in 1985 and for 16-bit systems like the Amiga in 1987. A Nintendo Entertainment System port of Silent Service developed by Rare was published in 1989 by Konami in Europe and by Konami's Ultra Games subsidiary in North America. The follow-up game, Silent Service II, was released in 1990. Tommo purchased the rights to this game and digitally publishes it through its Retroism brand in 2015.",
			developers: ['FIL', 'MicroProse', 'Rare'],
			publishers: ['FIL', 'Konami', 'MicroProse'],
			directors: [],
			producers: [],
			programmers: [],
			artists: ['Michael O. Haire'],
			writers: [],
			composers: [],
			designers: ['Sid Meier'],
			genres: ['Simulation', 'Submarine'],
			modes: ['single-player'],
			platforms: [
				'Amiga',
				'Amstrad CPC',
				'Apple II',
				'Apple IIGS',
				'Atari 8-bit',
				'Atari ST',
				'Commodore 64',
				'IBM PC',
				'NES',
				'TRS-80 Color Computer',
				'Thomson',
				'ZX Spectrum'
			],
			releases: []
		});
	});

	it('Ninja Gaiden II: The Dark Sword of Chaos', async () => {
		await expectGameInfo('https://en.wikipedia.org/wiki/Ninja_Gaiden_II:_The_Dark_Sword_of_Chaos', 'Ninja Gaiden II: The Dark Sword of Chaos', {
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/66/Ninja_Gaiden_II-_The_Dark_Sword_of_Chaos_boxart.jpg',
			description: 'Ninja Gaiden II: The Dark Sword of Chaos, known in Europe as Shadow Warriors II: The Dark Sword of Chaos, is a side-scrolling platform game developed and published by Tecmo for the Nintendo Entertainment System (NES). This is the second installment in the Ninja Gaiden trilogy for the NES and was released in North America and Japan in 1990, and in Europe in 1992. An arcade video game version was also introduced by Nintendo for their PlayChoice-10 system in 1990.\n' +
				'\n' +
				`The events in Ninja Gaiden II take place one year after the events in the first Ninja Gaiden game. It is about an evil emperor named Ashtar who, after hearing of Jaquio's defeat, devises a plan to take over the world and engulf it in darkness through an evil sword called the Dark Sword of Chaos. A U.S. Army agent named Robert T. Sturgeon recruits the game's protagonist Ryu Hayabusa and tells him that he is the only person who can stop him. The game received praise in previews from Electronic Gaming Monthly and Nintendo Power and continued to receive high ratings and coverage, being nominated for several awards from Nintendo Power in 1991. Reviewers said that visuals and controls of Ninja Gaiden II improved over its predecessor while maintaining a high level of difficulty for players; the game was criticized for having a more generic and predictable plot. The game maintains lasting appeal among players, with one reviewer saying that Ninja Gaiden II is "a challenging experience the likes of which gamers in the 8-bit era lived and died for".`,
			developers: ['Tecmo'],
			publishers: ['Tecmo'],
			directors: ['Masato Kato'],
			producers: [],
			programmers: ['Yoshiaki Inose'],
			artists: ['Masato Kato'],
			writers: ['Hideo Yoshizawa', 'Masato Kato', 'Sarah H.'],
			composers: ['Mayuko Okamura', 'Ryuichi Nitta'],
			designers: [],
			genres: ['Platformer'],
			modes: ['single-player'],
			platforms: ['Amiga', 'Arcade', 'MS-DOS', 'NES', 'SNES'],
			releases: [
				{platforms: ['Arcade'], regions: ['NA'], date: '1990-03-xx'},
				{platforms: ['Famicom', 'NES'], regions: ['JP'], date: '1990-04-06'},
				{platforms: ['Famicom', 'NES'], regions: ['NA'], date: '1990-05-15'},
				{platforms: ['Amiga'], regions: ['NA'], date: '1991-xx-xx'},
				{platforms: ['MS-DOS'], regions: ['NA'], date: '1991-xx-xx'},
				{platforms: ['Famicom', 'NES'], regions: ['EU'], date: '1992-xx-xx'}
			]
		});
	});

	describe.skip('List extraction', () => {
		// single title, multiple releases
		it('10-Yard Fight', async () => {
			const result = await extractFromGameList('NES', 2);
			console.log(require('util').inspect(result, false, null, true));
		});

		it('Aerobiz', async () => {
			const result = await extractFromGameList('Genesis', 14);
			console.log(require('util').inspect(result, false, null, true));
		});
	});
});
