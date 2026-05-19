# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: additemtocart.spec.ts >> TC#8 Add to Item to cart
- Location: tests\additemtocart.spec.ts:12:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.success')
Expected: "Samsung galaxy s7"
Received: "Samsung galaxy s7800Delete"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.success')
    9 × locator resolved to <tr class="success">…</tr>
      - unexpected value "Samsung galaxy s7800Delete"

```

```yaml
- row "Samsung galaxy s7 800 Delete":
  - cell:
    - img
  - cell "Samsung galaxy s7"
  - cell "800"
  - cell "Delete":
    - link "Delete":
      - /url: "#"
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | import { POManager } from '../pages/POManager'  
  3  | import { getCellData } from '../utils/purchaseinfo'     
  4  | import usercredentials from '../utils/usercredentials.json'      
  5  | 
  6  | test.beforeEach(async({page})=>{
  7  |     await page.goto('https://www.demoblaze.com/index.html')
  8  | })
  9  | 
  10 | 
  11 | 
  12 | test('TC#8 Add to Item to cart',async({page})=>{   
  13 |      const {username,password}=usercredentials[0]
  14 |      const pomanager=new POManager(page)
  15 |      const loginpage=pomanager.getLogin()
  16 |      const addtocartpage=pomanager.getAddtoCartPage()
  17 |      
  18 |      await loginpage.clickLoginLink()
  19 |      await loginpage.userLoginForm(username,password)  
  20 |      await loginpage.clicksubmitbtn()   
  21 |      await expect(page.locator('#nameofuser')).toHaveText(`Welcome ${username}`)
  22 | 
  23 |      const pdt_name='Samsung galaxy s7'
  24 |      await page.locator('.hrefch').filter({ hasText: pdt_name }).click()
  25 |      
  26 |      // Setup dialog handler BEFORE clicking add to cart
  27 |      page.once('dialog',async dialog=>{
  28 |          expect(dialog.message()).toBe('Product added.')
  29 |         await dialog.accept()
  30 |      })
  31 | 
  32 |      const confirmorderpage=pomanager.getConfirmOrderPage()
  33 |      await addtocartpage.clickCartLink()
> 34 |      await expect(page.locator('.success')).toHaveText('Samsung galaxy s7')
     |                                             ^ Error: expect(locator).toHaveText(expected) failed
  35 | 
  36 | 
  37 | 
  38 | })
  39 | 
  40 | 
```