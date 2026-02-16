import{test,expect,chromium} from "@playwright/test";

test("ParaBank",async()=>{

    //launch the browser page
    let browser = await chromium.launch({headless:false, channel:'chrome'});

    let context = await browser.newContext();

    let page = await context.newPage();

    //1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    //2.verify application logo is displayed
    let appLogo = page.getByAltText('ParaBank'); //2.1 locate the element
    await expect(appLogo).toBeVisible(); //2.2 verify if the logo is displayed.
    console.log("App logo is displayed");

    //3.Verify application caption displayed as "Experience the difference"
    let appCaption = page.getByText('Experience the difference'); //locate the element
    //let appCaption = await page.locator('p[class="caption"]');//locate the element
    let captionText = await appCaption.textContent(); //capture the actual caption from UI
    console.log(`Application caption is displayed as "${captionText}"`); 
    await expect(captionText).toBe('Experience the difference'); //Compare the expected caption with Actual

    //4.Enter invalid username
    let userName = await page.locator('input[name="username"]'); //locate the element
    await userName.fill('praveen'); //enter invalid element
    console.log(`Invalid UserName entered`); 

    //5.Enter empty Password
    let password = await page.locator('input[name="password"]'); //locate the element
    await password.clear();
    console.log("Password is left Blank"); 

    //6.Click on login button
    let loginButton = await page.locator('input.button'); //locate the element
    await loginButton.click();
    console.log("Clicked on Login Button");

    //7.Verify the error message "Please enter a username and password."
    //<p class="error">Please enter a username and password.</p>
    let errorMsg = await page.getByText('Please enter a username and password.');
    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toHaveText('Please enter a username and password.');
    console.log(`Error message "Please enter a username and password." is displayed`);

    //8.Click on admin page link
    //let adminLink = page.getByText('Admin Page');
    let adminLink = await page.getByRole('link',{name:"Admin Page"});
    await adminLink.click();
    console.log(`Clicked on "Admin Page" button`);

    //9.select the option "soap" from dba mode radio button
    let soapRadioButton = await page.locator('input#accessMode1');
    await soapRadioButton.check();
    console.log(`"soap" radio button is checked`);

    //10.Scroll to element dropdown
    let loanProviderDropdown = page.locator('select#loanProvider');
    await loanProviderDropdown.scrollIntoViewIfNeeded();
    console.log(`Page scrolled to view "LoanProvider" Dropdown`);

    //11.Select the option web service from the dropdown
    await loanProviderDropdown.selectOption({label:'Web Service'});
    //await loanProviderDropdown.selectOption({value:'ws'});
    //await loanProviderDropdown.selectOption({index:0}); */
    console.log(`"Web Service" option is selected from dropdown`);

    //12.click on submit button
    let submitButton = page.locator('input[value="Submit"]');
    await submitButton.click();
    console.log(`Clicked on "Submit" button`);

    //13.verify submission is successful by validating success message
    let successMsg = page.getByText('Settings saved successfully.');
    await expect(successMsg).toBeVisible();
    await expect(successMsg).toHaveText('Settings saved successfully.');
    console.log(`Success message "Settings saved successfully." is displayed`);


    //14.Click on services page link
    let servicesLink = page.locator('ul[class="leftmenu"]>li>a[href="services.htm"]');
    await servicesLink.click();
    console.log(`Clicked on "Services" link`);

    //15.wait for service page
    let soapServices = page.getByText('Available Bookstore SOAP services:');
    await soapServices.waitFor({state:"visible"});
    //await page.getByRole('heading', { name: "Available Bookstore SOAP services:" }).waitFor({ state: 'visible' });
    //await page.waitForTimeout(5000)
    console.log("Waited until the page is loaded")

    //16.Scroll down till bookstore services table
    let bookStoreServices = page.getByText("Bookstore services:");
    await bookStoreServices.scrollIntoViewIfNeeded();
    console.log(`Scrolled till "bookstore services" table is displayed`);

    //17.get total rows of books store services table
    //18.get total columns of books store services table
    //19.Print table data (row wise and column wise data)


    await browser.close();








    



    





   



   






    



})

