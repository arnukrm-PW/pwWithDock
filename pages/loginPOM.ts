import { Locator, Page } from "@playwright/test";

export class LoginPOM
{
    // private page : Page
    // private username : Locator
    // private password : Locator//
    // private LoginButton : Locator

    constructor(private readonly page : Page,
    // this.page = page
    private readonly username: Locator = page.getByPlaceholder("Username"),
  private readonly password : Locator= page.getByPlaceholder("Password"),
 private readonly LoginButton : Locator= page.locator("#login-button")
){}

async navigatetoApp(){
    this.page.goto("https://www.saucedemo.com/")
}
async loginToApp(username:string,password:string):Promise<void>
{
    await this.username.fill(username)
    await this.password.fill(password)
    await this.LoginButton.click()

}

}