import{Page,Locator}from"@playwright/test"
import{LoginData}from"../testdata/loginData"

export class LoginPage 
{
private page : Page;
private username : Locator
private password :Locator
private loginButton: Locator;

constructor(page:Page)
{
    this.page = page;
    this.username = page.getByPlaceholder("Username")
    this.password = page.getByPlaceholder("Password")
    this.loginButton = page.getByRole("button",{name:"Login"})
}

async navigatetoURL(url:string):Promise<void>
{
    await this.page.goto(url)
}

async login(user:LoginData):Promise<void>
{
await this.username.fill(user.username)
await this.password.fill(user.password)
await this.loginButton.click()

}
}