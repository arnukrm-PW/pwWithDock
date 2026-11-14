import{test,expect,chromium}from "@playwright/test"
test("tc01",async ()=>{
   const browser = await chromium.launch()
    const context = await browser.newContext()
const page1 = await context.newPage()
const page2 = await context.newPage()
const page3 = await context.newPage()
await page1.goto("https://www.saucedemo.com/")
await page2.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page3.goto("https://freelance-learn-automation.vercel.app/login")




})