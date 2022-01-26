const { expect } = require("chai");

class BookingCalendar{

    static locators = {
        
        "pick_a_date": `//*[@class = "booking-dates-row--select booking-dates-row--select__calendar select-native date-js form-control input"]`,
        "nextmonth_button": `//*[@class="flatpickr-next-month"]`,
        "nextmonth_disabled": `//*[@class="flatpickr-next-month flatpickr-disabled"]`,
        }
        async pick_a_date(date) {
            await page.click(`//*[@aria-label="${date}"]`);
        };
        async scroll_last_month() {
            
        };
        
}
module.exports = {BookingCalendar};