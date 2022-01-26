const { expect } = require("chai");



class MessagesPage {
    static locators = {
        "inbox_button": '//button[contains(text(), "Inbox")]',
        
        "textbox":'//*[@role="textbox"]',
        "send_button":`//*[@aria-label="Send message"]`,
        "invalid_textbox":`//*[@class="messages-section--input message-input message-input-js message-input__send-tip" and @data-status="invalid"]`
        
    };
    async confirm_page() {
        await page.waitForSelector(MessagesPage.locators.inbox_button);
    }
    async select_correspondent(correspondentName) {
        let correspondent_name_select = `//*[contains(text(), "${correspondentName}") and @class="chat-snippet--component chat-snippet--component__name"]`;
        
        await page.waitForSelector(correspondent_name_select);
        await page.click(correspondent_name_select);
        
    }
    async confirm_correspondent(correspondentName) {
        let correspondent_name_confirm = `//*[contains(text(), "${correspondentName}") and @class="messages-header--title title-js"]`;
        await page.waitForSelector(correspondent_name_confirm);
        
    }
    async type_message(messageText) {
        await page.fill(MessagesPage.locators.textbox, messageText);
        
    }
    async click_send() {
        //await page.waitForSelector(MessagesPage.locators.send_button);
        await page.click(MessagesPage.locators.send_button);
        await page.click(MessagesPage.locators.send_button);
    }
    async confirm_message(messageText) {
        let text = `//*[contains(text(), "${messageText}")]`
        await page.waitForSelector(text);
    }
    async confirm_send_button_absent() {
        await page.waitForSelector(`//*[@class="messages-section--input message-input message-input-js" and @data-status="empty"]`)
        
    }
    async confirm_invalid_textbox() {
        await page.waitForSelector(MessagesPage.locators.invalid_textbox);
        
    }
    async confirm_contact_info(number) {
        let contactNumber = `//*[contains(text(), "${number}")]`
    await page.waitForSelector(`//span[contains(text(), "${number}") and @class="chat-text-msg--off off-js"]`)

    await page.hover(contactNumber);
    await page.hover(contactNumber);
        
    }

    
    
  }
  module.exports = { MessagesPage };