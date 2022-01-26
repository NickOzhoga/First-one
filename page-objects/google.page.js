const { expect } = require("chai");

class GmailPage{

    static locators = {
        /*"username_input": '.sign-in-email ',
        "password_input": '.sign-in-password ',
        "login_button": '.sign-in-btn-js',
        "error_message": '#email-sign-in-js > div > div.sign-in-form-container > form > div.form-group.relative > div.has-error--text',
        "find_location_button": '.hp-search--submit-button',
        "google_button": '.google-btn-js'*/
        "signin_button": '.button--mobile-before-hero-only',
        "username_input": "#identifierId",
        "next_button_email": '#identifierNext',
        "password_input": '//*[@type="password"]',
        "next_button_password": '#passwordNext',
        "compose_email_button": '//*[contains(text(), "Compose")]',
        

    };
    async navigate() {
        //await page.goto(global.BASE_URL + '/login');
        await page.goto('https://www.google.com/intl/en_us/gmail/about/');
    };
    async login(username, password) {
        await page.click(GmailPage.locators.signin_button);
        //await page.click(GmailPage.locators.username_input);
        await page.waitForSelector(GmailPage.locators.username_input);
        await page.fill(GmailPage.locators.username_input,username);
        await page.click(GmailPage.locators.next_button_email);
        await page.waitForSelector(GmailPage.locators.password_input, { timeout: 10000 });
        await page.fill(GmailPage.locators.password_input,password, { timeout: 10000 });
        await page.click(GmailPage.locators.next_button_password, { timeout: 10000 });
        //await page.click(GmailPage.locators.login_button);
    };
    async loginSuccessful(){ 
        await page.waitForSelector(GmailPage.locators.compose_email_button);
        const visible = await page.isVisible(GmailPage.locators.compose_email_button);
        return expect(visible).to.equal(true);
    }
}
module.exports = {GmailPage};