import{test as base,expect,Locator,Page}from "@playwright/test"
import{LoginPOM}from"../pages/loginPOM"

type myFixture = {
    loggedInPage: LoginPOM ;
    // productPage:ProductPOM ;
}

export const test = base.extend<myFixture>({

    loggedInPage: async ({page},use)=>{
       const loginPOM = new  LoginPOM(page)
       console.log("BEFORE Test")
       await use(loginPOM)
       console.log("Login fixture object created successful")
       console.log("after Test")
    }
})
export {expect} ;
export {Locator} 
export {Page}

