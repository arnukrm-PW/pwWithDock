import{test,expect}from"@playwright/test"




test("TC01", {tag:"@sanity"},async({page})=>{

    console.log(`"TC01", {tag:"@sanity"}`)
})

test("TC02", {tag:"@sanity"},async({page})=>{

    console.log(`"TC02", {tag:"@sanity"}`)
})

test("TC03", {tag:"@regression"},async({page})=>{

    console.log(`"TC03", {tag:"@regression"`)
})

test("TC04", {tag:"@regression"},async({page})=>{

    console.log(`"TC04", {tag:"@sanity"}`)
})

test("TC05", {tag:"@e2e"},async({page})=>{

    console.log(`"TC05", {tag:"@e2e"}`)
})

test("TC06", {tag:"@e2e"},async({page})=>{

    console.log(`"TC06", {tag:"@e2e"}`)
})

test("TC07", {tag:"@master"},async({page})=>{

    console.log(`"TC07", {tag:"@master"`)
})

test("TC08", {tag:"@master"},async({page})=>{

    console.log(`"TC08", {tag:"@master"`)
})

test("TC09", {tag:"@sanity"},async({page})=>{

    console.log(`""TC09", {tag:"@sanity"`)
})

test("TC10", {tag:"@api"},async({page})=>{

    console.log(`""TC10", {tag:"@api"`)
})
