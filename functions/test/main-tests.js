var assert = require('assert');
var httpRequest = require('request');

describe('httpRequest', () => {
    it('should return nissa', () => {
        httpRequest('https://api.scryfall.com/cards/search?q=nissa', 
        (error, response, body) => {

            var apiResponse = JSON.parse(body);

            apiResponse.data.forEach(element => {
                //console.log(element.name);   
                assert.true(element.name.toLower().indexOf('nissa') >= 0);   
            });

        });
    });
});