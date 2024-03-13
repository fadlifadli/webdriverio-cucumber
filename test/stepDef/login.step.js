const { Given } = require("@wdio/cucumber-framework");
const Page = require("../pages/page");
const InventoryPage = require("../pages/inventory.page");
const LoginPage = require("../pages/login.page");

Given(/^I open Saucedemo website$/, async () => {
    // await browser.url('/');
    await Page.open('/');
})

When(/^I login with valid credentials$/, async () => {
    await LoginPage.login('standard_user','secret_sauce');
})

Then(/^I should be on the inventory page$/, async () => {
    await InventoryPage.assertInventoryUrl();
})

When(/^I login with invalid username$/, async () => {
    await LoginPage.login('invalid_user','secret_sauce');
})

Then(/^I should see an error message$/, async () => {
    await LoginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service');
})

When(/^I login with invalid password$/, async () => {
    await LoginPage.login('standard_user','invalid_user');
})

// Data driven test (scenario Outline) step defintions
When (/^I login with(\w+) and (.+)$/, async(username,password) => {
    await LoginPage.login(username,password);
})
