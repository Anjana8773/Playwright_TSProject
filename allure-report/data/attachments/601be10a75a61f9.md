# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: invaliduserinvalidpass.spec.ts >> TC#6 User Invalid username and Invalid password
- Location: tests\invaliduserinvalidpass.spec.ts:11:5

# Error details

```
Error: dialog.accept: Test ended.
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | import { POManager } from '../pages/POManager'  
  3  | import usercredentials from '../utils/usercredentials.json'      
  4  | 
  5  | test.beforeEach(async({page})=>{
  6  |     await page.goto('https://www.demoblaze.com/index.html')
  7  | })
  8  | 
  9  | 
  10 | 
  11 | test('TC#6 User Invalid username and Invalid password',async({page})=>{
  12 |      const data=usercredentials[3]
  13 |      const pomanager=new POManager(page)
  14 |      const loginpage=pomanager.getLogin()
  15 |      const user=data.username
  16 |      const password=data.password
  17 |      
  18 |      await loginpage.clickLoginLink()
  19 |      await loginpage.userLoginForm(user,password)
  20 |      await loginpage.clicksubmitbtn()
  21 |      page.on('dialog',async dialog=>{
  22 |          expect(dialog.message()).toBe('User does not exist.')
> 23 |         await dialog.accept()
     |                      ^ Error: dialog.accept: Test ended.
  24 |      })
  25 | 
  26 |      expect(page.locator('#nameofuser')).toBeHidden()
  27 | 
  28 | })
  29 | 
  30 |   
```