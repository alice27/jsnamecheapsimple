var ResultPage = function () {
    var EC = protractor.ExpectedConditions;
    var pricesElems = element.all(by.xpath("//main//article[contains(@class, 'available')]//strong"));
    
    this.getPrices = function () {
        browser.wait(EC.visibilityOf(pricesElems.first(), 5000));
        return pricesElems.getText();
    };

};
module.exports = new ResultPage();