# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: additemtocart.spec.ts >> TC#8 Add to Item to cart
- Location: tests\additemtocart.spec.ts:12:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#tbodyid :visible')
Expected substring: "Samsung galaxy s7"
Error: strict mode violation: locator('#tbodyid :visible') resolved to 7 elements:
    1) <tr class="success">…</tr> aka getByRole('row', { name: 'Samsung galaxy s7 800 Delete' })
    2) <td>…</td> aka getByRole('cell').filter({ hasText: /^$/ })
    3) <img width="100" height="100" src="imgs/galaxy_s6.jpg"/> aka getByRole('row', { name: 'Samsung galaxy s7 800 Delete' }).getByRole('img')
    4) <td>Samsung galaxy s7</td> aka getByRole('cell', { name: 'Samsung galaxy s7' })
    5) <td>800</td> aka getByRole('cell', { name: '800' })
    6) <td>…</td> aka getByRole('cell', { name: 'Delete' })
    7) <a href="#" onclick="deleteItem('daf3dc78-c81b-6159-469e-2b4cfe499a52')">Delete</a> aka getByRole('link', { name: 'Delete' })

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('#tbodyid :visible')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - text:             
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link "PRODUCT STORE" [ref=e4] [cursor=pointer]:
        - /url: index.html
        - img [ref=e5]
        - text: PRODUCT STORE
      - list [ref=e7]:
        - listitem [ref=e8]:
          - link "Home (current)" [ref=e9] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=e10]: (current)
        - listitem [ref=e11]:
          - link "Contact" [ref=e12] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e13]:
          - link "About us" [ref=e14] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e15]:
          - link "Cart" [ref=e16] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem [ref=e17]:
          - link "Log out" [ref=e18] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e19]:
          - link "Welcome Anjana_Prasad" [ref=e20] [cursor=pointer]:
            - /url: "#"
        - listitem
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "Products" [level=2] [ref=e24]
      - table [ref=e26]:
        - rowgroup [ref=e27]:
          - row "Pic Title Price x" [ref=e28]:
            - columnheader "Pic" [ref=e29]
            - columnheader "Title" [ref=e30]
            - columnheader "Price" [ref=e31]
            - columnheader "x" [ref=e32]
        - rowgroup [ref=e33]:
          - row "Samsung galaxy s7 800 Delete" [ref=e34]:
            - cell [ref=e35]:
              - img [ref=e36]
            - cell "Samsung galaxy s7" [ref=e37]
            - cell "800" [ref=e38]
            - cell "Delete" [ref=e39]:
              - link "Delete" [ref=e40] [cursor=pointer]:
                - /url: "#"
    - generic [ref=e41]:
      - heading "Total" [level=2] [ref=e42]
      - heading "800" [level=3] [ref=e45]
      - button "Place Order" [ref=e46]
  - generic [ref=e48]:
    - generic [ref=e51]:
      - heading "About Us" [level=4] [ref=e52]
      - paragraph [ref=e53]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e56]:
      - heading "Get in Touch" [level=4] [ref=e57]
      - paragraph [ref=e58]: "Address: 2390 El Camino Real"
      - paragraph [ref=e59]: "Phone: +440 123456"
      - paragraph [ref=e60]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e64]:
      - img [ref=e65]
      - text: PRODUCT STORE
  - contentinfo [ref=e66]:
    - paragraph [ref=e67]: Copyright © Product Store
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
> 34 |      await expect(page.locator('#tbodyid :visible')).toContainText('Samsung galaxy s7')
     |                                                      ^ Error: expect(locator).toContainText(expected) failed
  35 | 
  36 | 
  37 | 
  38 | })
  39 | 
  40 | 
```