# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: invaliduservalidpass.spec.ts >> TC#4 User Invalid username and Valid password
- Location: tests\invaliduservalidpass.spec.ts:11:5

# Error details

```
Error: dialog.accept: Test ended.
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | import { POManager } from '../pages/POManager'  
  3  | import signupcredentials from '../utils/signupcredentials.json'  
  4  | import usercredentials from '../utils/usercredentials.json'      
  5  | 
  6  | test.beforeEach(async({page})=>{
  7  |     await page.goto('https://www.demoblaze.com/index.html')
  8  | })
  9  | 
  10 | 
  11 | test('TC#4 User Invalid username and Valid password',async({page})=>{
  12 |      const data=usercredentials[1]
  13 |      const pomanager=new POManager(page)
  14 |      const loginpage=pomanager.getLogin()
  15 |      const user=data.username
  16 |      const password=data.password
  17 | 
  18 |      await loginpage.clickLoginLink()
  19 |      await loginpage.userLoginForm(user,password)
  20 | 
  21 |      page.once('dialog', async dialog => {
  22 |          expect(dialog.message()).toBe('User does not exist.')
> 23 |          await dialog.accept()
     |                       ^ Error: dialog.accept: Test ended.
  24 |      })
  25 | 
  26 |      await loginpage.clicksubmitbtn()
  27 |      await expect(page.locator('#nameofuser')).toBeHidden()
  28 | 
  29 | })
  30 | 
  31 | 
```