#!/usr/bin/env node

const checker = require('license-checker');
const chalk = require('chalk');

const licenseInfo = require('./allowedLicenses.json');

checker.init({
	start: '.'
}, function (err, packages) {
	if (err) {
		throw err;
	} else {
		if (Object.keys(packages)
			.filter(name => !licenseInfo.allowedPackages.includes(name.split('@')[0]))
			.every(name => licenseInfo.allowedLicenses.includes(licensesToString(packages[name].licenses)))) {
			console.log(chalk.green("All imported packages have compatible licenses"));
			console.log(checker.asSummary(packages));
			process.exit(0);
		} else {
			console.log(chalk.red("These packages have incompatible licenses:"));
			Object.keys(packages)
				.filter(name => !licenseInfo.allowedPackages.includes(name.split('@')[0]))
				.filter(name => !licenseInfo.allowedLicenses.includes
					(licensesToString(packages[name].licenses)))
				.forEach(name => {
					console.log(`  ${name}: ${packages[name].licenses}`);
				});
			console.log();
			console.log(checker.asSummary(packages));
			process.exit(1);
		}
	}
});

function licensesToString(licenses) {
	if (Array.isArray(licenses)) {
		licenses = '(' + licenses.join(" AND ") + ')';
	}
	return licenses.replace(/\*$/g, '');
}
