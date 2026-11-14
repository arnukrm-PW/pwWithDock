import{test,Locator,Page,expect} from "../../fixtures/test-fixture"
import{LoginPOM}from"../../pages/loginPOM"
import{ProductPOM}from"../../pages/productPOM"

test("TC01",async({page,loggedInPage})=>{
  

  await  loggedInPage.navigatetoApp()
let validity="valid"
  if(validity==="valid"){
await loggedInPage.loginToApp("standard_user","secret_sauce")
await expect(page).toHaveTitle("Swag Labs")
  }else{
    await loggedInPage.loginToApp("standard_user1","secret_sauce")
    await expect(page.locator('h3[data-test="error"]')).toBeVisible()
  }
})

test("TC02",async({page,loggedInPage})=>{
   

  await  loggedInPage.navigatetoApp()
let validity="Invalid"
  if(validity==="valid"){
await loggedInPage.loginToApp("standard_user","secret_sauce")
await expect(page).toHaveTitle("Swag Labs")
  }else{
    await loggedInPage.loginToApp("standard_user1","secret_sauce")
    await expect(page.locator('h3[data-test="error"]')).toBeVisible()
  }
})