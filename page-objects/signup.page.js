const { expect } = require("chai");



class SignupPage {
    static locators = {
        "username_input": '.sign-up-email',
        "password_input": '.sign-up-password',
        "signup_button": '.sign-up-btn',
        "error_message": '#sign-up-js > div > form.login-form-js > div.form-group.relative > div.has-error--text',
        "find_location_button": '.hp-search--submit-button'
    };

    async navigate() {
        await page.goto(global.BASE_URL + '/sign-up');
        //await page.goto('https://giggster.com/sign-up');
    }
    async signup(username, password) {
        await page.fill(SignupPage.locators.username_input,username);
        await page.fill(SignupPage.locators.password_input,password);
        await page.click(SignupPage.locators.signup_button);
    }


    async signupFailed(){
        await page.waitForSelector(SignupPage.locators.error_message);
        let error = await page.isVisible(SignupPage.locators.error_message);
        return expect(error).to.equal(true);
    }

    async signupSuccessful(){
        await page.waitForSelector(SignupPage.locators.find_location_button);
        const visible = await page.isVisible(SignupPage.locators.find_location_button);
        return expect(visible).to.equal(true);
    }

}
module.exports = { SignupPage };