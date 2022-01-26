const {Given, When, Then} = require ('@cucumber/cucumber')
const {LoginPage} = require('../page-objects/login.page')
const {SignupPage} = require('../page-objects/signup.page')
const {GmailPage} = require('../page-objects/google.page')
const {HomePage} = require('../page-objects/home.page')
const {FacebookPage} = require('../page-objects/facebook.page')


const loginPage = new LoginPage();
const signupPage = new SignupPage();
const googlePage = new GmailPage();
const homePage = new HomePage();
const facebookPage = new FacebookPage();


let testId = (Math.random() + 1).toString(36).substring(7);
console.log("TestID:" + testId)

function enrichEmail(email){
    name = email. substring(0, email. lastIndexOf("@"));
    domain = email. substring(email. lastIndexOf("@") +1);
    return name + "+" + testId + "@" + domain
}


Given('User launched signup page', {timeout: 3 * 5000}, async()=>{
    await signupPage.navigate();
});

When('User signed up using the email {string} and the password {string}', {timeout: 3 * 5000},async(username,password) =>{
    await signupPage.signup(enrichEmail(username),password);
});

Then('User should get signed up', {timeout: 3 * 5000}, async()=>{
    await signupPage.signupSuccessful();
});

Then('User should not get signed up', {timeout: 3 * 5000}, async()=>{
    await signupPage.signupFailed();
});

Given('User launched login page', {timeout: 3 * 5000}, async()=>{
    await loginPage.navigate();
 });

When('User logged using the email {string} and the password {string}', {timeout: 3 * 5000},async(username,password) =>{
    await loginPage.login(username,password);
});

Then('User should not get logged in', {timeout: 3 * 5000}, async()=>{
    await loginPage.loginFailed();
});

Then('User should get logged in', {timeout: 3 * 5000}, async()=>{
    await loginPage.loginSuccessful();
});
Given('User launched Google page and logged using the email {string} and the password {string}', {timeout: 3 * 5000}, async(username,password)=>{
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    await googlePage.navigate();
    await googlePage.login(username, password);
    await googlePage.loginSuccessful();
  });
When('User logged using Google button', {timeout: 3 * 5000},async()=>{
    await loginPage.loginGoogle();
  });
  
  Then('User should be able to become a Host', {timeout: 3 * 5000}, async()=>{
    await homePage.become_Host();
  });

  Given('User launched Facebook page and logged using the email {string} and the password {string}', {timeout: 3 * 5000},async(username,password)=>{
    await facebookPage.navigate();
    await facebookPage.login(username, password);
    await facebookPage.loginSuccessful();
  });
  When('User logged using Facebook button', {timeout: 3 * 5000},async()=>{
    await loginPage.loginFacebook();
  });




