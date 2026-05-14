import {test,expect} from '@playwright/test'
import { POManager } from '../pages/POManager'  
import usercredentials from '../utils/usercredentials.json'      

test.beforeEach(async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')
})



test('TC#10 Log out valid user',async({page})=>{     

     const {username,password}=usercredentials[0]
     const pomanager=new POManager(page)
     const loginpage=pomanager.getLogin()
     
     await loginpage.clickLoginLink()
     await loginpage.userLoginForm(username,password)  
     await loginpage.clicksubmitbtn()   
     await expect(page.locator('#nameofuser')).toHaveText(`Welcome ${username}`)
     await loginpage.clickLogoutbtn()
     await expect(page.locator('#nameofuser')).toBeHidden()
})
     