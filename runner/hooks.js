const {BeforeAll, Before, AfterAll, After, setDefaultTimeout} = require('@cucumber/cucumber')
const {chromium} = require('playwright');

if (global.TIMEOUT) {
    setDefaultTimeout(global.TIMEOUT);
}
var currentDate = new Date();
var videoName = "" + currentDate.getDate() + "-"
    + (currentDate.getMonth()+1)  + "-"
    + currentDate.getFullYear() + "@"
    + currentDate.getHours() + "-"
    + currentDate.getMinutes() + "-"
    + currentDate.getSeconds() +".mp4";

console.log(videoName)
browsers_endpoints = {
    "chromium": '/playwright/chromium?headless=false&enableVideo=true&videoName='+ videoName
}


// Create a global browser for the test session.
BeforeAll(async () => {
    if (global.MOON_HOST) {
        global.browser = await chromium.connect({
            timeout: 30000,
            wsEndpoint: 'wss://' + global.MOON_HOST + browsers_endpoints.chromium,
        });
    } else {
        global.browser = await chromium.launch({ headless: false, slowMo: 500 });
    }
});

AfterAll(async () => {
    await global.browser.close();
});

// Create a fresh browser context for each test.
Before(async (scenario) => {
    global.context = await global.browser.newContext({
        recordVideo: {
            dir: 'videos/' + scenario.pickle.name,
        }
    });
    global.page = await global.context.newPage();
});

After(async () => {
    await global.page.close();
});
