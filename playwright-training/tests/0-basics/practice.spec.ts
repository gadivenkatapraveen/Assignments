//import{test,expect} from '@playwright/test';

test('open google', async({page, context}) => {
    await page.goto('https://google.com/');

    await page.waitForTimeout(5000);

    await page.setViewportSize({  width: 1920,  height: 1080});

    await page.waitForTimeout(5000);

    let newtab = await context.newPage()

    await newtab.goto('https://www.selenium.com');

    await page.waitForTimeout(5000);

}
)

import{test, expect} from '@playwright/test'

test('test case 2', async({page, context}) => {

    await page.goto ('https://www.playwright.com/');

    await page.waitForTimeout(2000)

    let newT = await context.newPage();

    await newT.goto('https://www.facebook.com/');

    await newT.setViewportSize({width: 1024, height:1080});

    await newT.bringToFront()

    await newT.goBack()

    await newT.goForward();

    //await expect(newT).toHaveTitle('Facebook - login or sign up');

    await newT.reload()

    let url = await newT.url();
    console.log('Current page URL is '+url);

    let tabsCount = await context.pages();
    console.log('Total count of tabs is '+tabsCount.length);

    await page.close();












}
)
