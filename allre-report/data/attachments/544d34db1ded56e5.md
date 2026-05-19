# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: validuserinvalidpass.spec.ts >> TC#5 User Valid username and Invalid password
- Location: tests\validuserinvalidpass.spec.ts:12:5

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
  11 | 
  12 | test('TC#5 User Valid username and Invalid password',async({page})=>{
  13 | 
  14 |      const data=usercredentials[2]
  15 |      const pomanager=new POManager(page)
  16 |      const loginpage=pomanager.getLogin()
  17 |      const user=data.username
  18 |      const password=data.password
  19 |      await loginpage.clickLoginLink()
  20 |      await loginpage.userLoginForm(user,password)
  21 |      await loginpage.clicksubmitbtn()
  22 |      page.on('dialog',async dialog=>{
  23 |          expect(dialog.message()).toBe('Wrong password.')
> 24 |         await dialog.accept()
     |                      ^ Error: dialog.accept: Test ended.
  25 |      })
  26 |      expect(page.locator('#nameofuser')).toBeHidden()
  27 |       
  28 | 
  29 | })
  30 | 
  31 | 
  32 | 
  33 |      
```