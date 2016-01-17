'use strict';

var companies = require('../data/companies.json');

function countLicensedSince1996(memo, company) {
	var issueDate = new Date(company['License First Issue Date']);

	if (issueDate.getFullYear() <= 1996) {
		memo += 1;
	}
	return memo
}

var result = companies.reduce(countLicensedSince1996, 0);

console.log(result);
// 316
