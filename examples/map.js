'use strict';

var companies = require('../data/companies.json');

function locatedInArvada(company) {
	return 'Arvada' === company.City; // if truthy then keep item
}

function nameAndPhoneNumber(company) {
	return { // return what new object will look like
		name: company.BusinessName,
		phone: company.Phone
	};
}

var result = companies.filter(locatedInArvada).map(nameAndPhoneNumber);

console.log(result, result.length);
/*
 [ { name: '121 Realty Inc', phone: 7205451170 },
 { name: '3 Point Brokers Llc', phone: 3034207736 },
 { name: 'A Personal Touch Property Services, LLC', phone: 3038689331 },
 { name: 'Allegra Realty Inc', phone: 3034236000 },
 { name: 'Alliance Real Estate Services, LLC', phone: 3034205352 },
 { name: 'Amerimex Properties Llc', phone: 7203351022 },
 { name: 'Burke And Associates Llc', phone: 3034749062 },
 { name: 'Castlegate Realty Llc', phone: 3036683818 },
 { name: 'Cerf And Associaes Llc', phone: 3034201215 },
 { name: 'City Pros Llc', phone: 7202971445 },
 { name: 'Cnc Homes Llc', phone: 7205307226 },
 { name: 'Co Management & Rlty Inc', phone: 3034332325 },
 { name: 'Colorado S Own Real Estate Llc', phone: 3033585708 },
 { name: 'Complete Real Estate Inc', phone: 3038287728 },
 { name: 'Crook Realty Inc', phone: 3034236000 },
 { name: 'Cs And Associates Llc', phone: 3034221915 },
 { name: 'D R Wyrick Inc', phone: 3038079364 },
 { name: 'Dan Sigg & Company', phone: 3039415411 },
 { name: 'Denver West Real Estate Llc', phone: 7204359501 },
 { name: 'Divine Real Estate Group Llc', phone: undefined },
 { name: 'Dominion Realty Llc', phone: 3035009661 },
 { name: 'Edwards & Associates Realtors Inc', phone: 3034312707 },
 { name: 'Erickson Sellers Real Estate Inc', phone: 3034683900 },
 { name: 'Fanning Rlty & Assoc Inc', phone: 8663444022 },
 { name: 'Forsyth Holdings Inc', phone: 3032795666 },
 { name: 'Freedom Realty Fsf Inc', phone: 7204346637 },
 { name: 'Ftflowers Investments Llc', phone: 7209375087 },
 { name: 'Fundy Real Estate Services Llc', phone: 7204480817 },
 { name: 'Gabe & Co', phone: 7202425200 },
 { name: 'Gagnon R E Network Inc', phone: undefined },
 { name: 'Glenn Marquez Real Estate Company', phone: 3034557222 },
 { name: 'Go Real Estate Company Inc', phone: 3032794100 },
 { name: 'Gold Rush Investments Inc', phone: 3039017226 },
 { name: 'Golden Buff Realty Incorp', phone: 3039407553 },
 { name: 'Graue Smith And Ass0ciates Inc', phone: 3032042159 },
 { name: 'Hart Homes Inc', phone: 3034331500 } ]
 */
// 36
