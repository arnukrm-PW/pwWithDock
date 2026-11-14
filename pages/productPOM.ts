import{test,expect,Page,Locator}from "@playwright/test"

export class ProductPOM 
{

constructor(
    private readonly page : Page,
    private readonly product : Locator = page.locator('div[data-test="inventory-item-name"]'),
    private readonly shopingCartBadge : Locator = page.locator('span[data-test="shopping-cart-badge"]')

){
}
async addProductToCart(){
    this.product.first().click()
}

async verifyBadgeCartCount(){
    return  await  this.shopingCartBadge.count()
}


}

