var HomePage = function () {
    var searchInput = element(by.xpath("//input[@id='domain-search-input']"));
    var searchButton = element(by.xpath("//button[@id='search-domain-btn']"));

    this.get = function () {
        browser.get('https://www.namecheap.com/');
    };

    this.setSearchQuery = function (query) {
        searchInput.sendKeys(query);
        searchButton.click();
    };
};
module.exports = new HomePage();