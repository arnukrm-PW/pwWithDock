import{test,expect,Locator}from'@playwright/test'

test('TC01 - select the checkBox XS',async ({page})=>{

    await page.goto("https://zigzag.lk/collections/all")
    const overlayItem =  page.getByText("Try your luck, win a discount!").first()
    if(await overlayItem.isVisible()){
      await   page.locator('button').filter({ hasText: 'Close' }).first().click()
    }
   const countXS:Locator =  page.getByText("XS",{exact:true}).first()
   countXS.click()
   await   expect(countXS).toBeChecked()

} )

// locator('#ea-spin-wheel-root1793171099990 button').filter({ hasText: 'Close' })
// locator('#ea-spin-wheel-root1793171099990').getByLabel('Close')