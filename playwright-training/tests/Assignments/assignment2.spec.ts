import{test,expect,chromium} from "@playwright/test";

test('forms',async()=>{
//1. Launch browser window(Chrome)  
let browser = await chromium.launch({headless: false, channel: 'chrome'});
let context = await browser.newContext();
let page = await context.newPage();

//2. Maximize the browser window
await page.setViewportSize({width:1920, height:1080});

//3. Delete all the cookies   
await context.clearCookies();

//4. Enter URL and Launch the application (https://demoqa.com/automation-practice-form)   
await page.goto('https://demoqa.com/');
let forms = page.getByRole('heading',{name:"Forms"});
await forms.click();
let parcticeForms = page.getByText('Practice Form');
await parcticeForms.click();


//await page.goto('https://demoqa.com/automation-practice-form');

//5. Wait for Page-load
await page.waitForTimeout(5000);

//6. Enter First name and Last name   
let firstName = page.locator('input#firstName');
await firstName.fill('praveen');

let LasttName = page.locator('input#lastName');
await firstName.fill('gadi');

//7. Enter Email   
//let emailID = page.getByPlaceholder('name@example.com');
let emailID = page.locator('input#userEmail');
await emailID.fill('gvpraveen@gmail.com');

//8. Select Gender (Male) 
let maleGenderRadioButton = page.locator('input[value="Male"]');  
await maleGenderRadioButton.check();

//9. Enter mobile number   
let MobileNum = page.locator('input#userNumber');
await MobileNum.fill('1234567890');

//10.Select DOB (1-Feb-1991)  
let dob = page.locator('input#dateOfBirthInput');
await dob.fill('01 Feb 1991');
await dob.press('Enter');

//11.Search and Select Computer Science  
/* let subject = page.locator('div[class="subjects-auto-complete__control css-13cymwt-control"]');
await subject.fill('Computer Science');
await subject.press('Enter'); */

//12.Select Hobbies as Sports and Reading 
let sportsHobby = page.locator('input#hobbies-checkbox-1');
if(!(await sportsHobby.isChecked())){
    await sportsHobby.check();
}

let readinghobby = page.locator('input#hobbies-checkbox-2');
if(!(await readinghobby.isChecked())){
    await readinghobby.check();
}
//13.Upload photo  
let uploadPhoto = page.locator('input#uploadPicture');
await uploadPhoto.setInputFiles('E:/apj.jpg');

//14. Wait till file upload   
await page.waitForTimeout(5000);

//15.Submit Details 
let submitButton = page.locator('button#submit');
await submitButton.click();

//16. Close browser window
await browser.close();

})