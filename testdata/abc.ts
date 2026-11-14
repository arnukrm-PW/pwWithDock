// Practical Question 10 – BasePage and LoginPage
// मान लीजिए हम Page Object Model (POM) framework बना रहे हैं।

// हमें दो classes बनानी हैं:

// 1. BasePage
// - page नाम का property होना चाहिए।
// - navigateToURL() method होना चाहिए।
// - takeScreenshot() method होना चाहिए।
// 2. LoginPage
// - BasePage को extends करना है।
// - Constructor में Page receive करना है।
// - super(page) से Parent constructor call करना है।
// - login() method बनाना है।
// Starter code
// इस code को पूरा कीजिए:
import { Page } from '@playwright/test';


class BasePage {

    constructor(public page: Page) {

    }

    async navigateToURL(url: string) {
       await this.page.goto(url)
    }

   async takeScreenshot() {
        await this.page.screenshot({path:'E:\\Arun Kumar PlayWright Resume',fullPage:true})
    }
}

class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page)
    }

    login() {
        console.log("Login Successful")
    }
}


// Your task
// 1. navigateToURL() में URL open कीजिए।
// 2. takeScreenshot() में screenshot लीजिए।
// 3. LoginPage constructor में super(page) लिखिए।
// 4. login() में console पर "Login Successful" print कीजिए।

// Your interview practice – Exercise 1
// Hands-on coding
//  Easy to Intermediate


// Create an interface called Product with the following properties:
// - productName – string
// - price – number
// - inStock – boolean
// - category – optional string
// Then create three product objects:
// 1. Laptop – ₹50,000 – In stock
// 2. Mobile – ₹20,000 – In stock
// 3. Headphones – ₹2,000 – Out of stock

// export interface Product {
//     productName :  string
//     price : number
//     inStock : boolean
//     category? : string 
// }

// export const laptop:Product={
//     productName :  "Laptop",
//     price : 50000,
//     inStock : true,
//     category : "Electronics" 

// }
// export const mobile : Product ={
//     productName :  "Mobile",
//     price : 20000,
//     inStock : false,
//     category : "Electronics"  
// }