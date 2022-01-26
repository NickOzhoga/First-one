const { expect } = require("chai");

class FacebookPage{

    static locators = {
        
        //"signin_button": '.button--mobile-before-hero-only',
        "username_input": '//*[@id="email"]',
        //"next_button_email": '#identifierNext',
        "password_input": '//*[@id="pass"]',
        "login_button": '//*[@id="loginbutton"]',
        "account_name": '//span[contains(text(), "Kate Renter")]',
        

    };
    async navigate() {
        await page.goto('https://www.facebook.com/login/');
    };
    async login(username, password) {
        //await page.click(FacebookPage.locators.signin_button);
        await page.waitForSelector(FacebookPage.locators.username_input);
        await page.fill(FacebookPage.locators.username_input,username);
        //await page.click(FacebookPage.locators.next_button_email);
        await page.waitForSelector(FacebookPage.locators.password_input, { timeout: 10000 });
        await page.fill(FacebookPage.locators.password_input,password, { timeout: 10000 });
        await page.click(FacebookPage.locators.login_button, { timeout: 10000 });
    };
    async loginSuccessful(){ 
        await page.waitForSelector(FacebookPage.locators.account_name);
        //const visible = await page.isVisible(FacebookPage.locators.account_name);
        //return expect(visible).to.equal(true);
    }
}
module.exports = {FacebookPage};