var homepage = require('./pages/HomePage');
var resultpage = require('./pages/ResultPage');
const constants = require("./constants/Constants");

describe('Namecheap tests', function () {

  beforeEach(function () {
    browser.waitForAngularEnabled(false);
  });

  it('should search the query', function () {
    homepage.get();
    homepage.setSearchQuery("ololo.org");    
    expect(resultpage.getPrices()).toContain(constants.price);    
  });

});