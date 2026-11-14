import{test,expect,Locator}from"@playwright/test"
import { LoginPage } from "../../pages/loginPage"
import { user1,userInvalid } from "../../testdata/loginData";


test("TC01 - login to SD",{tag:'@sanity'},async ({page})=>{
const loginPage =new LoginPage(page);
const url = process.env.Base_URL;
if(!url){
    throw new Error ("Base URL not defined, Please declare !! ")
}
await loginPage.navigatetoURL(url)
await loginPage.login(user1)
await expect(page).toHaveTitle('Swag Labs')

})

test("TC02 - Invalid login verify error msg",{tag:'@sanity'},async ({page})=>{
const loginPage =new LoginPage(page);
const url = "https://www.saucedemo.com/"

await loginPage.navigatetoURL(url)
await loginPage.login(userInvalid)
await  expect(page.locator('h3[data-test="error"]')).toContainText("Username and password do not match any user in this service")

})