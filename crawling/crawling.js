const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const url = "https://www.instagram.com/accounts/login/";

(async function test(){
    let driver = await new Builder().forBrowser('chrome').build();
    try{
        await driver.get(url);
        driver.window();

        let img = await driver.wait(until.elementLocated(By.css('#imgs > img')), 1000);
        imgs = await img.getAttribute('src');
    }finally {
        await driver.quit();
    }
})