import {test,expect} from '@playwright/test'
import { POManager } from '../pages/POManager'  
import usercredentials from '../utils/usercredentials.json'      

test.beforeEach(async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')
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
         expect(dialog.message()).toBe('Wrong password.')
        await dialog.accept()
     })
     await expect(page.locator('#nameofuser')).toBeHidden()
      

})



     