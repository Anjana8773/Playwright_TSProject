# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkoutphone.spec.ts >> TC#8 Add to cart Item Phone
- Location: tests\checkoutphone.spec.ts:12:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "https://www.demoblaze.com/index.html"
Received: "https://www.demoblaze.com/cart.html"
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - dialog "Place order" [ref=e2]:
    - document [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5]:
          - heading "Place order" [level=5] [ref=e6]
          - button "Close" [ref=e7] [cursor=pointer]: ×
        - generic [ref=e9]:
          - generic [ref=e10]: "Total: 790"
          - generic [ref=e11]:
            - generic [ref=e12]: "Name:"
            - 'textbox "Total: 790 Name:" [ref=e13]': John
          - generic [ref=e14]:
            - generic [ref=e15]: "Country:"
            - textbox "Country:" [ref=e16]: India
          - generic [ref=e17]:
            - generic [ref=e18]: "City:"
            - textbox "City:" [ref=e19]: Trivandrum
          - generic [ref=e20]:
            - generic [ref=e21]: "Credit card:"
            - textbox "Credit card:" [ref=e22]: "47885412486"
          - generic [ref=e23]:
            - generic [ref=e24]: "Month:"
            - textbox "Month:" [ref=e25]: "10"
          - generic [ref=e26]:
            - generic [ref=e27]: "Year:"
            - textbox "Year:" [ref=e28]: "29"
        - generic [ref=e30]:
          - button "Close" [ref=e31]
          - button "Purchase" [active] [ref=e32]
  - text:             
  - navigation [ref=e33]:
    - generic [ref=e34]:
      - link "PRODUCT STORE" [ref=e35] [cursor=pointer]:
        - /url: index.html
        - img [ref=e36]
        - text: PRODUCT STORE
      - list [ref=e38]:
        - listitem [ref=e39]:
          - link "Home (current)" [ref=e40] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=e41]: (current)
        - listitem [ref=e42]:
          - link "Contact" [ref=e43] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e44]:
          - link "About us" [ref=e45] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e46]:
          - link "Cart" [ref=e47] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem [ref=e48]:
          - link "Log out" [ref=e49] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e50]:
          - link "Welcome Anjana_Prasad" [ref=e51] [cursor=pointer]:
            - /url: "#"
        - listitem
  - generic [ref=e53]:
    - generic [ref=e54]:
      - heading "Products" [level=2] [ref=e55]
      - table [ref=e57]:
        - rowgroup [ref=e58]:
          - row "Pic Title Price x" [ref=e59]:
            - columnheader "Pic" [ref=e60]
            - columnheader "Title" [ref=e61]
            - columnheader "Price" [ref=e62]
            - columnheader "x" [ref=e63]
        - rowgroup [ref=e64]:
          - row "Iphone 6 32gb 790 Delete" [ref=e65]:
            - cell [ref=e66]:
              - img [ref=e67]
            - cell "Iphone 6 32gb" [ref=e68]
            - cell "790" [ref=e69]
            - cell "Delete" [ref=e70]:
              - link "Delete" [ref=e71] [cursor=pointer]:
                - /url: "#"
    - generic [ref=e72]:
      - heading "Total" [level=2] [ref=e73]
      - heading "790" [level=3] [ref=e76]
      - button "Place Order" [ref=e77]
  - generic [ref=e79]:
    - generic [ref=e82]:
      - heading "About Us" [level=4] [ref=e83]
      - paragraph [ref=e84]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e87]:
      - heading "Get in Touch" [level=4] [ref=e88]
      - paragraph [ref=e89]: "Address: 2390 El Camino Real"
      - paragraph [ref=e90]: "Phone: +440 123456"
      - paragraph [ref=e91]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e95]:
      - img [ref=e96]
      - text: PRODUCT STORE
  - contentinfo [ref=e97]:
    - paragraph [ref=e98]: Copyright © Product Store
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
  12 | test('TC#8 Add to cart Item Phone',async({page})=>{    
  13 |      const {username,password}=usercredentials[0]
  14 |      const pomanager=new POManager(page)
  15 |      const loginpage=pomanager.getLogin()
  16 |      const addtocartpage=pomanager.getAddtoCartPage()
  17 |      
  18 |      await loginpage.clickLoginLink()
  19 |      await loginpage.userLoginForm(username,password)  
  20 |      await loginpage.clicksubmitbtn()   
  21 |      expect(page.locator('#nameofuser')).toHaveText(`Welcome ${username}`)
  22 | 
  23 |      const pdt_name='Iphone 6 32gb'
  24 |      await page.locator('.hrefch').filter({ hasText: pdt_name }).click()
  25 |      
  26 |      // Setup dialog handler BEFORE clicking add to cart
  27 |      page.once('dialog',async dialog=>{
  28 |          expect(dialog.message()).toBe('Product added.')
  29 |         await dialog.accept()
  30 |      })
  31 |      await addtocartpage.clickAddtoCartBtn()
  32 | 
  33 |      const confirmorderpage=pomanager.getConfirmOrderPage()
  34 |      await addtocartpage.clickCartLink()
  35 |      await addtocartpage.clickPlaceOrderBtn()
  36 | 
  37 |      // Validate Excel data before using
  38 |      const name= getCellData(2,1)
  39 |      const country= getCellData(2,2)
  40 |      const city= getCellData(2,3)
  41 |      const creditcard= String(getCellData(2,4))
  42 |      const month= String(getCellData(2,5))
  43 |      const year= String(getCellData(2,6))
  44 |      
  45 |      await confirmorderpage.fillOrderForm(name,country,city,creditcard,month,year)
  46 |      await expect(page.getByRole('button', { name: 'Purchase' })).toBeVisible()
  47 |      await confirmorderpage.clickPurchaseBtn()
  48 |      
  49 |      page.once('dialog',async dialog=>{
  50 |          expect(dialog.message()).toContain('Thank you for your purchase!')
  51 |         await dialog.accept()
  52 |      })
  53 |     await confirmorderpage.clickOkBtn()
> 54 |     expect(page.url()).toBe('https://www.demoblaze.com/index.html')
     |                        ^ Error: expect(received).toBe(expected) // Object.is equality
  55 | })
```