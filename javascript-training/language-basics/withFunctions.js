//Test case 1: Validating the Home Page


loginIntoApplication("Chrome")
/* Launch the chrome browser.
Enter URL "www.icici.com" and launch the application.
Enter username as 'Bharath'.
 Enter password as 'Bharath@123'. */

// Click on the login Button.
// Verify that the home page is displayed iwth the welcome message.

logoutAndCloseBrowser()
/* //Log out from the application.
//Close the browser. */


//Test case 2: Validating the fund transfer Page

loginIntoApplication("Edge")
// Navigte to the fund transfer page.
// Enter beneficiary account number as '123456789'.
//Enter amount to transfer as '5000'.
//Click on the transfer button.
//verify that the fund transfer is successful with the message 'Transfer Successful'
logoutAndCloseBrowser()


//Test case 3: Validating the Account statement Page

loginIntoApplication()
// Navigte to the account statement page.
//Select the date range from 01-jan-2025 to 31-jan-2025.
//Click on the generate statement button.
//verify that the account statemnet is dispalyed for the selected date range.
logoutAndCloseBrowser()


//===================================================================================================

function loginIntoApplication(browserName, URL, userName){ //function with parameter ==> adding placeholder to accept dynamic value of browserName
    // Launch the +browserName+ browser.
    // Enter URL +URL+ and launch the application.
    // Enter username as +userName.
    // Enter password as 'Bharath@123'.
    // Click on the login Button.

}

function logoutAndCloseBrowser(){
    //Log out from the application.
    //Close the browser.

}





//How to create functions in Javascript or Typescript?

//1. Identify the duplicate code and seperate the same from actual test Scripts.
//2. Create a block and copy those duplicate steps into the block.
//3. Give a valid and menaingful name to that particular block to call them easily whenever its required.

