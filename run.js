const {generateAll} = require('./gen');

const platforms = process.argv.slice(2);

(async () => {
	await generateAll(platforms);
})();
