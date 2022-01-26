const { expect } = require("chai");

class LocationPage{
    static locators = {
        
         "message_host": `//button[contains(text(), "Message Host")]`
     };

     async navigate(location) {
        let url =global.BASE_URL+`/listing/${location}`;
        await page.goto(url);
    
    }
    async message_host() {
        await page.click(LocationPage.locators.message_host);
        
    
    }
}
module.exports = { LocationPage };