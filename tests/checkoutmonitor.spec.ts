import {test,expect} from '@playwright/test'
import { POManager } from '../pages/POManager'  
import { getCellData } from '../utils/purchaseinfo'    
import usercredentials from '../utils/usercredentials.json'      

test.beforeEach(async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')
})


test('TC#9 Add to cart Item Monitor',async({page})=>{   
     const {username,password}=usercredentials[0]
     const pomanager=new POManager(page)
     const loginpage=pomanager.getLogin()
     const addtocartpage=pomanager.getAddtoCartPage()
     
     await loginpage.clickLoginLink()
     await loginpage.userLoginForm(username,password)  
     await loginpage.clicksubmitbtn()   
     expect(page.locator('#nameofuser')).toHaveText(`Welcome ${username}`)

     const pdt_name='Sony vaio i7'
     await page.locator('.hrefch').filter({ hasText: pdt_name }).click()
     
     // Setup dialog handler BEFORE clicking add to cart
     page.once('dialog',async dialog=>{
         expect(dialog.message()).toBe('Product added.')
        await dialog.accept()
     })
     await addtocartpage.clickAddtoCartBtn()

     const confirmorderpage=pomanager.getConfirmOrderPage()
     await addtocartpage.clickCartLink()
     await addtocartpage.clickPlaceOrderBtn()

     // Validate Excel data before using
     const name= getCellData(3,1)
     const country= getCellData(3,2)
     const city= getCellData(3,3)
     const creditcard= String(getCellData(3,4))
     const month= String(getCellData(3,5))
     const year= String(getCellData(3,6))
     
     await confirmorderpage.fillOrderForm(name,country,city,creditcard,month,year)
     await expect(page.getByRole('button', { name: 'Purchase' })).toBeVisible()
     await confirmorderpage.clickPurchaseBtn()
     
     page.once('dialog',async dialog=>{
         expect(dialog.message()).toContain('Thank you for your purchase!')
        await dialog.accept()
     })
    await confirmorderpage.clickOkBtn()
     
})
