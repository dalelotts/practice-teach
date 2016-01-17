'use strict';

var companies = require('../data/companies.json');


function locatedInArvada(company) {
	return 'Arvada' === company.City; // if truthy then keep item
}

var result = companies.filter(locatedInArvada);

console.log(result, result.length);
// 36