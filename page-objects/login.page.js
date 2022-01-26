const { expect } = require("chai");



class LoginPage {
    static locators = {
        "username_input": '.sign-in-email ',
        "password_input": '.sign-in-password ',
        "login_button": '.sign-in-btn-js',
        "error_message": '#email-sign-in-js > div > div.sign-in-form-container > form > div.form-group.relative > div.has-error--text',
        "find_location_button": '.hp-search--submit-button',
        "google_button": '.google-btn-js',
        "facebook_button": '//*[@class="btn btn-lg_size_48 total-width btn-fb facebook-btn-js"]'
        //"account_icon": '//html/body/div[1]/header/div/div/div[6]/div/div/div/div[1]/div[2]'
    };

    async navigate() {
        await page.goto(global.BASE_URL + '/login');
        //await page.goto('https://giggster.com/login');
    }
    async login(username, password) {
        await page.fill(LoginPage.locators.username_input,username);
        await page.fill(LoginPage.locators.password_input,password);
        await page.click(LoginPage.locators.login_button);
    }
    async loginFailed(){
        await page.waitForSelector(LoginPage.locators.error_message);
        let error = await page.$eval(LoginPage.locators.error_message, (errortext) => errortext.textContent);
        return expect (error).to.include("Incorrect password or email")
    }

    async loginSuccessful(){ 
        await page.waitForSelector(LoginPage.locators.find_location_button);
        const visible = await page.isVisible(LoginPage.locators.find_location_button);
        //await page.click(LoginPage.locators.account_icon);
        return expect(visible).to.equal(true);
        
        
    }
    async loginGoogle() {
        await page.click(LoginPage.locators.google_button);
    }
    async loginFacebook() {
        await page.click(LoginPage.locators.facebook_button);
    }

  }
  module.exports = { LoginPage };