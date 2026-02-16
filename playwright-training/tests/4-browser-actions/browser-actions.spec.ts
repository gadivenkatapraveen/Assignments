import {test, expect, chromium} from '@playwright/test' //importing specific tools/functions from the Playwright Test library so you can use them in your code.
//You call test() to define individual tests or test suites.
//You use expect to verify expected behavior in your test.
//You use chromium to create a browser instance manually if needed.


test('browser actions', async() => { //Declares a test. test(title, body), test(title, details, body)

     //Launch the browser window (Chrome)
     const browser = await chromium.launch({headless:false, channel:'chrome'}); //msedge for edge //, args: ['--start-maximized']

     //Launch the browser context from the browser engine. 
     const context = await browser.newContext();

     //Create a new page in the browser context.
     const page = await context.newPage();

     //Maximize the browser window to a specific resolution.
     await page.setViewportSize({width: 1920,height: 1080});

     //Clear all cookies
     await context.clearCookies();

     //Enter URL "https://www.google.com/" and launch the application. 
     await page.goto('https://www.google.com/');

     //Verify the application title. 
     await expect(page).toHaveTitle('Google');

     //Launch the new application "https://playwright.dev/" within the same page.
     await page.goto('https://playwright.dev/');

     //Go back to previous application.
     await page.goBack();

     //Move forward to the next application. 
     await page.goForward();

     //Refresh the application. 
     await page.reload();

     //Launch the new tab or window 
     let newPage = await context.newPage();

     //launch the different application 'https://www.selenium.dev/'
     await newPage.goto('https://www.selenium.dev/');

     //Get all the pages (tabs) launched
     let pages = await context.pages();
     console.log('no of pages/tabs launched are ', pages.length);
     //console.log("Total Pages/tabs launched : "+pages.length);

     //Switch back to the main window. 
     await page.bringToFront();

     //Get the current browser URL. 
     let currentURL = page.url();
     console.log('Current URL is '+ currentURL)
     //console.log("Current window URL :"+currentUrl);

     //Wait for 5 sec
     await page.waitForTimeout(5000);

     //Close the current page 
     await page.close();

     //Close all pages
     await browser.close();


}
)




