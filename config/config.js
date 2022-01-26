require('dotenv').config()

Object.assign(global, {
    BASE_URL: process.env.BASE_URL,
    MOON_HOST: process.env.MOON_HOST,
    TIMEOUT: process.env.TIMEOUT,
    HEADLESS: process.env.HEADLESS,
    SLOWMO: process.env.SLOWMO
});