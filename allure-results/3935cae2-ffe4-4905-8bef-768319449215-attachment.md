# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkoutmonitor.spec.ts >> TC#9 Add to cart Item Monitor
- Location: tests\checkoutmonitor.spec.ts:11:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.demoblaze.com/index.html"
Received: "https://www.demoblaze.com/cart.html"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × unexpected value "https://www.demoblaze.com/cart.html"

```

```yaml
- dialog "Place order":
  - document:
    - heading "Place order" [level=5]
    - button "Close"
    - text: "Total: 790 Name:"
    - 'textbox "Total: 790 Name:"': Mark
    - text: "Country:"
    - textbox "Country:": India
    - text: "City:"
    - textbox "City:": Trivandrum
    - text: "Credit card:"
    - textbox "Credit card:": "25885202486"
    - text: "Month:"
    - textbox "Month:": "12"
    - text: "Year:"
    - textbox "Year:": "30"
    - button "Close"
    - button "Purchase"
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: "#"
    - listitem
    - listitem:
      - link "Log out":
        - /url: "#"
    - listitem:
      - link "Welcome Anjana_Prasad":
        - /url: "#"
    - listitem
- heading "Products" [level=2]
- table:
  - rowgroup:
    - row "Pic Title Price x":
      - columnheader "Pic"
      - columnheader "Title"
      - columnheader "Price"
      - columnheader "x"
  - rowgroup:
    - row "Sony vaio i7 790 Delete":
      - cell:
        - img
      - cell "Sony vaio i7"
      - cell "790"
      - cell "Delete":
        - link "Delete":
          - /url: "#"
- heading "Total" [level=2]
- heading "790" [level=3]
- button "Place Order"
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store
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
  11 | test('TC#9 Add to cart Item Monitor',async({page})=>{   
  12 |      const {username,password}=usercredentials[0]
  13 |      const pomanager=new POManager(page)
  14 |      const loginpage=pomanager.getLogin()
  15 |      const addtocartpage=pomanager.getAddtoCartPage()
  16 |      
  17 |      await loginpage.clickLoginLink()
  18 |      await loginpage.userLoginForm(username,password)  
  19 |      await loginpage.clicksubmitbtn()   
  20 |      expect(page.locator('#nameofuser')).toHaveText(`Welcome ${username}`)
  21 | 
  22 |      const pdt_name='Sony vaio i7'
  23 |      await page.locator('.hrefch').filter({ hasText: pdt_name }).click()
  24 |      
  25 |      // Setup dialog handler BEFORE clicking add to cart
  26 |      page.once('dialog',async dialog=>{
  27 |          expect(dialog.message()).toBe('Product added.')
  28 |         await dialog.accept()
  29 |      })
  30 |      await addtocartpage.clickAddtoCartBtn()
  31 | 
  32 |      const confirmorderpage=pomanager.getConfirmOrderPage()
  33 |      await addtocartpage.clickCartLink()
  34 |      await addtocartpage.clickPlaceOrderBtn()
  35 | 
  36 |      // Validate Excel data before using
  37 |      const name= getCellData(3,1)
  38 |      const country= getCellData(3,2)
  39 |      const city= getCellData(3,3)
  40 |      const creditcard= String(getCellData(3,4))
  41 |      const month= String(getCellData(3,5))
  42 |      const year= String(getCellData(3,6))
  43 |      
  44 |      await confirmorderpage.fillOrderForm(name,country,city,creditcard,month,year)
  45 |      await expect(page.getByRole('button', { name: 'Purchase' })).toBeVisible()
  46 |      await confirmorderpage.clickPurchaseBtn()
  47 |      
  48 |      page.once('dialog',async dialog=>{
  49 |          expect(dialog.message()).toContain('Thank you for your purchase!')
  50 |         await dialog.accept()
  51 |      })
  52 |     await confirmorderpage.clickOkBtn()
> 53 |     await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  54 |      
  55 | })
  56 | 
```