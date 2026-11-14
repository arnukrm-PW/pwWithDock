import{test,expect,Page,Locator}from"../../fixtures/cust-fixture"




test("TC01", {tag:"@sanity"},async({page,loginPOM})=>{
    await expect(page).toHaveTitle('Swag Labs')
    console.log(`"TC01", {tag:"@sanity"}`)
})

test("TC02", {tag:"@sanity"},async({page,loginPOM})=>{
await expect(page).toHaveTitle('Swag Labs')
    console.log(`"TC02", {tag:"@sanity"}`)
})

test("TC03", {tag:"@regression"},async({page,loginPOM})=>{

    console.log(`"TC03", {tag:"@regression"`)
})

test("TC04", {tag:"@regression"},async({page,loginPOM})=>{

    console.log(`"TC04", {tag:"@sanity"}`)
})

test("TC05", {tag:"@e2e"},async({page,loginPOM})=>{

    console.log(`"TC05", {tag:"@e2e"}`)
})

test("TC06", {tag:"@e2e"},async({page,loginPOM})=>{

    console.log(`"TC06", {tag:"@e2e"}`)
})

test("TC07", {tag:"@master"},async({page,loginPOM})=>{

    console.log(`"TC07", {tag:"@master"`)
})

test("TC08", {tag:"@master"},async({page,loginPOM})=>{

    console.log(`"TC08", {tag:"@master"`)
})

test("TC09", {tag:"@sanity"},async({page,loginPOM})=>{

    console.log(`""TC09", {tag:"@sanity"`)
})

test("TC10", {tag:"@api"},async({page,loginPOM})=>{

    console.log(`""TC10", {tag:"@api"`)
})
