const {generateNesCsv} = require('./gen');

const gameNames = process.argv.slice(2);

(async () => {
	await generateNesCsv(gameNames);
})();
