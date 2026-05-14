import {test,expect} from '@playwright/test'
import { POManager } from '../pages/POManager'  
import { getCellData } from '../utils/purchaseinfo'    


import signupcredentials from '../utils/signupcredentials.json'  //assert { type: 'json' }
import usercredentials from '../utils/usercredentials.json'      //assert { type: 'json' }

test.beforeEach(async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')
})


test('TC#1 User registration success',async({page})=>{
    const pomanager=new POManager(page)
    const signup=pomanager.getSignUp()
    const user=signupcredentials.username
    const password=signupcredentials.password

    await signup.clickSignUpLink()
    await signup.userRegistrationform(user,password)
    await signup.clicksubmitbtn()
    page.on('dialog',async dialog=>{
        expect(dialog.message()).toBe('Sign up successful.')
          await  dialog.accept()
    }) 

})


test('TC#2 User Registration click close button',async({page})=>{
     const pomanager=new POManager(page)
    const signup=pomanager.getSignUp()
     const user=signupcredentials.username
     const password=signupcredentials.password
     await signup.clickSignUpLink()
     await signup.userRegistrationform(user,password)
     await signup.clickclosebtn()  
     await expect(page.locator('#signInModal')).toBeHidden()

})

test('TC#3 User Valid username and Valid password',async({page})=>{
     const {username,password}=usercredentials[0]
     const pomanager=new POManager(page)
     const loginpage=pomanager.getLogin()
     
     await loginpage.clickLoginLink()
     await loginpage.userLoginForm(username,password)  
     await loginpage.clicksubmitbtn()   
     expect(page.locator('#nameofuser')).toHaveText(`Welcome ${username}`)
      

})

test('TC#4 User Invalid username and Valid password',async({page})=>{
     const data=usercredentials[1]
     const pomanager=new POManager(page)
     const loginpage=pomanager.getLogin()
     const user=data.username
     const password=data.password

     await loginpage.clickLoginLink()
     await loginpage.userLoginForm(user,password)

     page.once('dialog', async dialog => {
         expect(dialog.message()).toBe('User does not exist.')
         await dialog.accept()
     })

     await loginpage.clicksubmitbtn()
     await expect(page.locator('#nameofuser')).toBeHidden()

})

test('TC#5 User Valid username and Invalid password',async({page})=>{

     const data=usercredentials[2]
     const pomanager=new POManager(page)
     const loginpage=pomanager.getLogin()
     const user=data.username
     const password=data.password
     await loginpage.clickLoginLink()
     await loginpage.userLoginForm(user,password)
     await loginpage.clicksubmitbtn()
     page.on('dialog',async dialog=>{
         expect(dialog.message()).toBe('User does not exist.')
        await dialog.accept()
     })
     expect(page.locator('#nameofuser')).toBeHidden()
      

})

test('TC#6 User Invalid username and Invalid password',async({page})=>{
     const data=usercredentials[3]
     const pomanager=new POManager(page)
     const loginpage=pomanager.getLogin()
     const user=data.username
     const password=data.password
     
     await loginpage.clickLoginLink()
     await loginpage.userLoginForm(user,password)
     await loginpage.clicksubmitbtn()
     page.on('dialog',async dialog=>{
         expect(dialog.message()).toBe('User does not exist.')
        await dialog.accept()
     })

     expect(page.locator('#nameofuser')).toBeHidden()

})

test('TC#7 Add  Item to cart',async({page})=>{    
     const {username,password}=usercredentials[0]
     const pomanager=new POManager(page)
     const loginpage=pomanager.getLogin()
     const addtocartpage=pomanager.getAddtoCartPage()
     
     await loginpage.clickLoginLink()
     await loginpage.userLoginForm(username,password)  
     await loginpage.clicksubmitbtn()   
     expect(page.locator('#nameofuser')).toHaveText(`Welcome ${username}`)

     const pdt_name='Iphone 6 32gb'
     await page.locator('.hrefch').filter({ hasText: pdt_name }).click()
     await addtocartpage.clickAddtoCartBtn()
     page.on('dialog',async dialog=>{
         expect(dialog.message()).toBe('Product added.')
        await dialog.accept()
     })

})

test('TC#8 Add to cart Item Phone',async({page})=>{    
     const {username,password}=usercredentials[0]
     const pomanager=new POManager(page)
     const loginpage=pomanager.getLogin()
     const addtocartpage=pomanager.getAddtoCartPage()
     
     await loginpage.clickLoginLink()
     await loginpage.userLoginForm(username,password)  
     await loginpage.clicksubmitbtn()   
     expect(page.locator('#nameofuser')).toHaveText(`Welcome ${username}`)

     const pdt_name='Iphone 6 32gb'
     await page.locator('.hrefch').filter({ hasText: pdt_name }).click()
     await addtocartpage.clickAddtoCartBtn()
     page.on('dialog',async dialog=>{
         expect(dialog.message()).toBe('Product added.')
        await dialog.accept()
     })

     const confirmorderpage=pomanager.getConfirmOrderPage()
     await addtocartpage.clickCartLink()
     await addtocartpage.clickPlaceOrderBtn()


     const name= getCellData(2,1)
     const country= getCellData(2,2)
     const city= getCellData(2,3)
     const creditcard= getCellData(2,4)
     const month= getCellData(2,5)
     const year= getCellData(2,6)  

     await confirmorderpage.fillOrderForm(name,country,city,creditcard,month,year)
     await confirmorderpage.clickPurchaseBtn()
     page.on('dialog',async dialog=>{
         expect(dialog.message()).toContain('Thank you for your purchase!')
        await dialog.accept()
     })
         

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
     await page.locator('.hrefch').filter({ hasText: pdt_name }).click()
     await addtocartpage.clickAddtoCartBtn()
     page.on('dialog',async dialog=>{
         expect(dialog.message()).toBe('Product added.')
        await dialog.accept()
     })

     const confirmorderpage=pomanager.getConfirmOrderPage()
     await addtocartpage.clickCartLink()
     await addtocartpage.clickPlaceOrderBtn()

     const name=getCellData(3,1)
     const country=getCellData(3,2)
     const city=getCellData(3,3)
     const creditcard=getCellData(3,4)
     const month=getCellData(3,5)
     const year=getCellData(3,6)    

     await confirmorderpage.fillOrderForm(name,country,city,creditcard,month,year)
     await expect(page.getByRole('button', { name: 'Purchase' })).toBeVisible()
     await confirmorderpage.clickPurchaseBtn()
     page.on('dialog',async dialog=>{
         expect(dialog.message()).toContain('Thank you for your purchase!')
        await dialog.accept()
     })  

})

test('TC#10 Log out valid user',async({page})=>{     

     const {username,password}=usercredentials[0]
     const pomanager=new POManager(page)
     const loginpage=pomanager.getLogin()
     
     await loginpage.clickLoginLink()
     await loginpage.userLoginForm(username,password)  
     await loginpage.clicksubmitbtn()   
     expect(page.locator('#nameofuser')).toHaveText(`Welcome ${username}`)
     await loginpage.clickLogoutbtn()
     await expect(page.locator('#nameofuser')).toBeHidden()
})
     