const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page");
const DashboardPage = require("../pages/dashboard.page");
const LoginPage = require("../pages/login.page");

Given(/^I open kasirdemo website$/, async () => {
    await Page.open('/');
})

When(/^I login with valid credentials$/, async () => {
    await LoginPage.login('Tonihawk233@gmail.com','Aku1234');
})

Then(/^I should be on the inventory page$/, async () => {
    await DashboardPage.assertDashboardUrl();
})

When(/^I login with invalid email$/, async () => {
    await LoginPage.login('233','1234');
})

Then(/^I should see an error email message$/, async () => {
    await LoginPage.assertErrorMessage('"email" must be a valid email');
})

Then(/^I should see an error password message$/, async () => {
    await LoginPage.assertErrorMessage('Kredensial yang Anda berikan salah');
})

When(/^I login with invalid password$/, async () => {
    await LoginPage.login('Tonihawk233@gmail.com','1234');
})

// Data driven test (scenario Outline) step defintions
When (/^I login with(\w+) and (.+)$/, async(email,password) => {
    await LoginPage.login(email,password);
})
