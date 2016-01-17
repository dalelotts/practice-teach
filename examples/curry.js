'use strict';

var R = require('ramda');
var companies = require('../data/companies.json');

function filterBy(property, value, company) {
	if (value === company[property]) {
		return company;
	}
}

var cityOfLittleton = R.curry(filterBy)('City', 'Littleton');

var result = companies.filter(cityOfLittleton);

console.log(result, result.length);
// 74