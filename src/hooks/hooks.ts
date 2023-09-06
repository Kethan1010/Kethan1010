import { BeforeAll,AfterAll,setDefaultTimeout, After, Before } from "@cucumber/cucumber";
import { chromium, Browser, Page, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixture";

setDefaultTimeout(60*1000*2);
let browser : Browser;
let page: Page;
let context : BrowserContext;

BeforeAll(async function(){

  browser = await chromium.launch({headless: false});
  

});

Before(async function(){
  context = await browser.newContext();
  page = await context.newPage();
  
  pageFixture.page = page;

});
After(async function({pickle}){
  const img = await pageFixture.page.screenshot({path:`./test-result/screenshots/+${pickle.name}.png`,type:"png"})
  this.attach(img,"png");
  await context.close();
})
AfterAll(async function(){
    await pageFixture.page.close();
    await browser.close();
})
