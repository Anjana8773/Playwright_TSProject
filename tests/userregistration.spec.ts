import {test,expect} from '@playwright/test'
import { POManager } from '../pages/POManager'
import { generateRandomUsername, generateRandomPassword } from '../utils/randomUtils'


test.beforeEach(async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')
})


test('TC#1 User registration success',async({page})=>{
    const pomanager=new POManager(page)
    const signup=pomanager.getSignUp()
    const user = generateRandomUsername()
    const password = generateRandomPassword()

    await signup.clickSignUpLink()
    await signup.userRegistrationform(user,password)
    await signup.clicksubmitbtn()
    page.on('dialog',async dialog=>{
        expect(dialog.message()).toBe('Sign up successful.')
          await  dialog.accept()
    })

})

