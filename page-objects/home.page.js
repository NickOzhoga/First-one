const { expect } = require("chai");



class HomePage {
    static locators = {
       /* "username_input": '.sign-in-email ',
        "password_input": '.sign-in-password ',
        "login_button": '.sign-in-btn-js',
        "error_message": '#email-sign-in-js > div > div.sign-in-form-container > form > div.form-group.relative > div.has-error--text',
        "find_location_button": '.hp-search--submit-button',
        "google_button": '.google-btn-js'*/
        "account_icon": '//*[@class="header-login--forIcon"]',
        "become_host_button": '//*[@class="header-user--ava"]',
        "become_host_button_force": '//*[@class="user-line user-line__become clearfix mobile-menu--link btn-default btn-lg_size_40 become-a-host-js"]',
        "list_space_button": '//a[contains(text(), "List your Space") and @class ="btn-success btn-lg_size_big landing-owner-btn list-your-space-js"]',
        "messages_link": `//*[@href="/messages"]`,
        "logout_button": `//*[@id="popover-user-menu"]/div/div/div/div/div[4]/a/div[2]`
    };

    async become_Host() {
        //await page.waitForSelector(HomePage.locators.account_icon);
        //await page.click(HomePage.locators.account_icon);
        await page.locator(HomePage.locators.account_icon).click();
        //await page.waitForSelector(HomePage.locators.become_host_button);
        //await page.click(HomePage.locators.become_host_button);
        await page.locator(HomePage.locators.become_host_button).click();
        await page.locator(HomePage.locators.become_host_button_force).click();
        await page.waitForSelector(HomePage.locators.list_space_button);
        //await page.locator(HomePage.locators.list_space_button).click();
    }
    async navigate_Messages() {
        await page.locator(HomePage.locators.messages_link).click();
    }
    async logout() {
        await page.locator(HomePage.locators.account_icon).click();
        await page.locator(HomePage.locators.logout_button).click();
    }

  }
  module.exports = { HomePage };