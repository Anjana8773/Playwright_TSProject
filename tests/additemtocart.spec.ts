import {test,expect} from '@playwright/test'
import { POManager } from '../pages/POManager'  
import { getCellData } from '../utils/purchaseinfo'     
import usercredentials from '../utils/usercredentials.json'      

test.beforeEach(async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')
})



test('TC#8 Add to Item to cart',async({page})=>{   
     const {username,password}=usercredentials[0]
     const pomanager=new POManager(page)
     const loginpage=pomanager.getLogin()
     const addtocartpage=pomanager.getAddtoCartPage()
     
     await loginpage.clickLoginLink()
     await loginpage.userLoginForm(username,password)  
     await loginpage.clicksubmitbtn()   
     expect(page.locator('#nameofuser')).toHaveText(`Welcome ${username}`)

     const pdt_name='Samsung galaxy s7'
     await page.locator('.hrefch').filter({ hasText: pdt_name }).click()
     
     // Setup dialog handler BEFORE clicking add to cart
     page.once('dialog',async dialog=>{
         expect(dialog.message()).toBe('Product added.')
        await dialog.accept()
     })
     await addtocartpage.clickAddtoCartBtn()



})

