import {Given, When } from "@cucumber/cucumber"
import {chromium, Page, Browser} from "@playwright/test";
import { test, expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";

Given('First automation script {string}', async function (usernames) {
  await pageFixture.page.goto("https://www.google.com/gmail/about/");
  console.log(usernames);
  
});

When('Login into gmail application with {string} and {string}', async function (username, password) {
  // Write code here that turns the phrase above into concrete actions
  await pageFixture.page.click(`a[data-action='sign in']`);
  await pageFixture.page.p
  await pageFixture.page.locator(`input[type='email']`).type(username);
  await pageFixture.page.click('div#identifierNext>div>button>span');

  // await pageFixture.page.locator(`input[type='password']`).type(password);
  // await pageFixture.page.click('div#passwordNext>div>button>span');
});
