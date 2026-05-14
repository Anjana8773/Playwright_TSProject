# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Main.spec.ts >> TC#10 Log out valid user
- Location: tests\Main.spec.ts:242:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('#nameofuser')
Expected: "Welcome Disney"
Received: ""
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('#nameofuser')
    13 × locator resolved to <a href="#" id="nameofuser" class="nav-link"></a>
       - unexpected value ""

```

```yaml
- dialog "Log in":
  - document:
    - heading "Log in" [level=5]
    - button "Close"
    - text: "Username:"
    - textbox: Disney
    - text: "Password:"
    - textbox: Test@123
    - button "Close"
    - button "Log in"
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
        - /url: cart.html
    - listitem:
      - link "Log in":
        - /url: "#"
    - listitem
    - listitem
    - listitem:
      - link "Sign up":
        - /url: "#"
  - list:
    - listitem
    - listitem
    - listitem
  - img "Third slide"
  - button "Previous"
  - button "Next"
- link "CATEGORIES":
  - /url: ""
- link "Phones":
  - /url: "#"
- link "Laptops":
  - /url: "#"
- link "Monitors":
  - /url: "#"
- link:
  - /url: prod.html?idp_=1
- heading "Samsung galaxy s6" [level=4]:
  - link "Samsung galaxy s6":
    - /url: prod.html?idp_=1
- heading "$360" [level=5]
- paragraph: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
- link:
  - /url: prod.html?idp_=2
- heading "Nokia lumia 1520" [level=4]:
  - link "Nokia lumia 1520":
    - /url: prod.html?idp_=2
- heading "$820" [level=5]
- paragraph: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
- link:
  - /url: prod.html?idp_=3
- heading "Nexus 6" [level=4]:
  - link "Nexus 6":
    - /url: prod.html?idp_=3
- heading "$650" [level=5]
- paragraph: The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.
- link:
  - /url: prod.html?idp_=4
- heading "Samsung galaxy s7" [level=4]:
  - link "Samsung galaxy s7":
    - /url: prod.html?idp_=4
- heading "$800" [level=5]
- paragraph: The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.
- link:
  - /url: prod.html?idp_=5
- heading "Iphone 6 32gb" [level=4]:
  - link "Iphone 6 32gb":
    - /url: prod.html?idp_=5
- heading "$790" [level=5]
- paragraph: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
- link:
  - /url: prod.html?idp_=6
- heading "Sony xperia z5" [level=4]:
  - link "Sony xperia z5":
    - /url: prod.html?idp_=6
- heading "$320" [level=5]
- paragraph: Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone comes with a 5.20-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 424 pixels per inch.
- link:
  - /url: prod.html?idp_=7
- heading "HTC One M9" [level=4]:
  - link "HTC One M9":
    - /url: prod.html?idp_=7
- heading "$700" [level=5]
- paragraph: The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card.
- link:
  - /url: prod.html?idp_=8
- heading "Sony vaio i5" [level=4]:
  - link "Sony vaio i5":
    - /url: prod.html?idp_=8
- heading "$790" [level=5]
- paragraph: Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight.
- link:
  - /url: prod.html?idp_=9
- heading "Sony vaio i7" [level=4]:
  - link "Sony vaio i7":
    - /url: prod.html?idp_=9
- heading "$790" [level=5]
- paragraph: REVIEW Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight, higher-resolution display, more storage space, and a Blu-ray drive.
- list:
  - listitem:
    - button "Previous"
  - listitem:
    - button "Next"
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
  152 | test('TC#8 Add to cart Item Phone',async({page})=>{    
  153 |      const pomanager=new POManager(page)
  154 |      const loginpage=pomanager.getLogin()
  155 |      const addtocartpage=pomanager.getAddtoCartPage()       
  156 |      const username=signupcredentials.username
  157 |      const password=signupcredentials.password 
  158 | 
  159 | 
  160 |      await loginpage.clickLoginLink()
  161 |      await loginpage.userLoginForm(username,password)
  162 |      await loginpage.clicksubmitbtn()        
  163 |      expect(page.locator('#nameofuser')).toHaveText(`Welcome ${username}`)
  164 | 
  165 |     const cartItemsCount=await page.locator('#tbodyid tr').count()
  166 |     const pdt_name='Samsung galaxy s6'
  167 |      expect(cartItemsCount).toBeGreaterThan(0)
  168 |      for(let i=0;i<cartItemsCount;i++){
  169 |          const productTitle=await page.locator('#tbodyid td').nth(i).textContent()  
  170 | 
  171 |          try{
  172 |           
  173 |            if(productTitle!=null &&productTitle.trim()===pdt_name){
  174 |                break
  175 |            
  176 |           }
  177 |      }
  178 |      catch(error){
  179 |            console.error('item not found', error)      
  180 |      }}
  181 |     
  182 |      await addtocartpage.clickAddtoCartBtn()
  183 |      await addtocartpage.clickCartLink()
  184 |      const confirmorderpage=pomanager.getConfirmOrderPage()
  185 |      await addtocartpage.clickPlaceOrderBtn()
  186 |      const name=getCellData('name')
  187 |      const country=getCellData('country')
  188 |      const city=getCellData('city')
  189 |      const creditcard=getCellData('creditcard')
  190 |      const month=getCellData('month')
  191 |      const year=getCellData('year')     
  192 |      await confirmorderpage.fillOrderForm(name,country,city,creditcard,month,year)
  193 |      await confirmorderpage.clickPurchaseBtn()
  194 |      page.on('dialog',async dialog=>{
  195 |          expect(dialog.message()).toContain('Thank you for your purchase!')
  196 |         await dialog.accept()
  197 |      }    
  198 | )
  199 |          
  200 | 
  201 | })
  202 | 
  203 | test('TC#9 Add to cart Item Monitor',async({page})=>{   
  204 |        const pomanager=new POManager(page)
  205 |      const loginpage=pomanager.getLogin()
  206 |      const addtocartpage=pomanager.getAddtoCartPage()       
  207 |      const user=signupcredentials.username
  208 |      const password=signupcredentials.password
  209 | 
  210 |      
  211 |      await loginpage.clickLoginLink()
  212 |      await loginpage.userLoginForm(user,password)
  213 | 
  214 |      await loginpage.clicksubmitbtn()
  215 | 
  216 |      await expect(page.locator('#nameofuser')).toHaveText(`Welcome ${user}`)
  217 | 
  218 |      const cartItemsCount=await page.locator('#tbodyid tr').count()
  219 |      expect(cartItemsCount).toBeGreaterThan(0)
  220 |      const pdt_name='Sony vaio i7'
  221 |      for(let i=0;i<cartItemsCount;i++){
  222 |          const productTitle=await page.locator('#tbodyid td').nth(i).textContent()  
  223 | 
  224 |          try{
  225 |           
  226 |            if(productTitle!=null &&productTitle.trim()===pdt_name){
  227 |                break
  228 |            
  229 |           }
  230 |      }
  231 |      catch(error){
  232 |            console.error('item not found', error)      
  233 |      }}
  234 |      await addtocartpage.clickAddtoCartBtn()
  235 |      page.on('dialog',async dialog=>{
  236 |          expect(dialog.message()).toBe('Product added.')
  237 |         await dialog.accept()
  238 |      })
  239 | 
  240 | })
  241 | 
  242 | test('TC#10 Log out valid user',async({page})=>{       
  243 |      const pomanager=new POManager(page)
  244 |      const loginpage=pomanager.getLogin()
  245 |      const user=signupcredentials.username
  246 |      const password=signupcredentials.password
  247 | 
  248 |      
  249 |      await loginpage.clickLoginLink()
  250 |      await loginpage.userLoginForm(user,password)
  251 |      await loginpage.clicksubmitbtn()
> 252 |      expect(page.locator('#nameofuser')).toHaveText(`Welcome ${user}`)
      |                                          ^ Error: expect(locator).toHaveText(expected) failed
  253 |      await loginpage.clickLogoutbtn()
  254 |      expect(page.locator('#nameofuser')).toBeHidden()
  255 | })
  256 |      
```