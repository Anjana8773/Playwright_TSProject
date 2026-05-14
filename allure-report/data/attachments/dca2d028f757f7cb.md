# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Main.spec.ts >> TC#8 Add to cart Item Phone
- Location: tests\Main.spec.ts:135:5

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
  46  |      const loginpage=pomanager.getLogin()
  47  |      
  48  |      await loginpage.clickLoginLink()
  49  |      await loginpage.userLoginForm(username,password)  
  50  |      await loginpage.clicksubmitbtn()   
  51  |      expect(page.locator('#nameofuser')).toHaveText(`Welcome ${username}`)
  52  |       
  53  | 
  54  | })
  55  | 
  56  | test('TC#4 User Invalid username and Valid password',async({page})=>{
  57  |      const data=usercredentials[1]
  58  |      const pomanager=new POManager(page)
  59  |      const loginpage=pomanager.getLogin()
  60  |      const user=data.username
  61  |      const password=data.password
  62  | 
  63  |      await loginpage.clickLoginLink()
  64  |      await loginpage.userLoginForm(user,password)
  65  | 
  66  |      page.once('dialog', async dialog => {
  67  |          expect(dialog.message()).toBe('User does not exist.')
  68  |          await dialog.accept()
  69  |      })
  70  | 
  71  |      await loginpage.clicksubmitbtn()
  72  |      await expect(page.locator('#nameofuser')).toBeHidden()
  73  | 
  74  | })
  75  | 
  76  | test('TC#5 User Valid username and Invalid password',async({page})=>{
  77  | 
  78  |      const data=usercredentials[2]
  79  |      const pomanager=new POManager(page)
  80  |      const loginpage=pomanager.getLogin()
  81  |      const user=data.username
  82  |      const password=data.password
  83  |      await loginpage.clickLoginLink()
  84  |      await loginpage.userLoginForm(user,password)
  85  |      await loginpage.clicksubmitbtn()
  86  |      page.on('dialog',async dialog=>{
  87  |          expect(dialog.message()).toBe('User does not exist.')
  88  |         await dialog.accept()
  89  |      })
  90  |      expect(page.locator('#nameofuser')).toBeHidden()
  91  |       
  92  | 
  93  | })
  94  | 
  95  | test('TC#6 User Invalid username and Invalid password',async({page})=>{
  96  |      const data=usercredentials[3]
  97  |      const pomanager=new POManager(page)
  98  |      const loginpage=pomanager.getLogin()
  99  |      const user=data.username
  100 |      const password=data.password
  101 |      
  102 |      await loginpage.clickLoginLink()
  103 |      await loginpage.userLoginForm(user,password)
  104 |      await loginpage.clicksubmitbtn()
  105 |      page.on('dialog',async dialog=>{
  106 |          expect(dialog.message()).toBe('User does not exist.')
  107 |         await dialog.accept()
  108 |      })
  109 | 
  110 |      expect(page.locator('#nameofuser')).toBeHidden()
  111 | 
  112 | })
  113 | 
  114 | test('TC#7 Add  Item to cart',async({page})=>{    
  115 |      const {username,password}=usercredentials[0]
  116 |      const pomanager=new POManager(page)
  117 |      const loginpage=pomanager.getLogin()
  118 |      const addtocartpage=pomanager.getAddtoCartPage()
  119 |      
  120 |      await loginpage.clickLoginLink()
  121 |      await loginpage.userLoginForm(username,password)  
  122 |      await loginpage.clicksubmitbtn()   
  123 |      expect(page.locator('#nameofuser')).toHaveText(`Welcome ${username}`)
  124 | 
  125 |      const pdt_name='Iphone 6 32gb'
  126 |      await page.locator('.hrefch').filter({ hasText: pdt_name }).click()
  127 |      await addtocartpage.clickAddtoCartBtn()
  128 |      page.on('dialog',async dialog=>{
  129 |          expect(dialog.message()).toBe('Product added.')
  130 |         await dialog.accept()
  131 |      })
  132 | 
  133 | })
  134 | 
  135 | test('TC#8 Add to cart Item Phone',async({page})=>{    
  136 |      const pomanager=new POManager(page)
  137 |      const loginpage=pomanager.getLogin()
  138 |      const addtocartpage=pomanager.getAddtoCartPage()       
  139 |      const username=signupcredentials.username
  140 |      const password=signupcredentials.password 
  141 | 
  142 | 
  143 |      await loginpage.clickLoginLink()
  144 |      await loginpage.userLoginForm(username,password)
  145 |      await loginpage.clicksubmitbtn()        
> 146 |      expect(page.locator('#nameofuser')).toHaveText(`Welcome ${username}`)
      |                                          ^ Error: expect(locator).toHaveText(expected) failed
  147 | 
  148 |    
  149 |      const pdt_name='Samsung galaxy s6'
  150 |      await page.locator('.hrefch').filter({ hasText: pdt_name }).click()
  151 |      await addtocartpage.clickAddtoCartBtn()
  152 |      await addtocartpage.clickCartLink()
  153 | 
  154 |      const confirmorderpage=pomanager.getConfirmOrderPage()
  155 |      await addtocartpage.clickPlaceOrderBtn()
  156 | 
  157 | 
  158 |      const name=getCellData(2,1)
  159 |      const country=getCellData(2,3)
  160 |      const city=getCellData(2,4)
  161 |      const creditcard=getCellData(2,5)
  162 |      const month=getCellData(2,6)
  163 |      const year=getCellData(2,7)     
  164 |      await confirmorderpage.fillOrderForm(name,country,city,creditcard,month,year)
  165 |      await confirmorderpage.clickPurchaseBtn()
  166 |      page.on('dialog',async dialog=>{
  167 |          expect(dialog.message()).toContain('Thank you for your purchase!')
  168 |         await dialog.accept()
  169 |      }    
  170 | )
  171 |          
  172 | 
  173 | })
  174 | 
  175 | test('TC#9 Add to cart Item Monitor',async({page})=>{   
  176 |        const pomanager=new POManager(page)
  177 |      const loginpage=pomanager.getLogin()
  178 |      const addtocartpage=pomanager.getAddtoCartPage()       
  179 |      const user=signupcredentials.username
  180 |      const password=signupcredentials.password
  181 | 
  182 |      
  183 |      await loginpage.clickLoginLink()
  184 |      await loginpage.userLoginForm(user,password)
  185 |      await loginpage.clicksubmitbtn()
  186 |      await expect(page.locator('#nameofuser')).toHaveText(`Welcome ${user}`)
  187 | 
  188 |      const pdt_name='Sony vaio i7'
  189 |      await page.locator('.hrefch').filter({ hasText: pdt_name }).click()
  190 |      await addtocartpage.clickAddtoCartBtn()
  191 |      await addtocartpage.clickCartLink()
  192 | 
  193 |      const confirmorderpage=pomanager.getConfirmOrderPage()
  194 |      await addtocartpage.clickPlaceOrderBtn()
  195 | 
  196 |      const name=getCellData(3,1)
  197 |      const country=getCellData(3,2)
  198 |      const city=getCellData(3,3)
  199 |      const creditcard=getCellData(3,4)
  200 |      const month=getCellData(3,5)
  201 |      const year=getCellData(3,6)     
  202 |      await confirmorderpage.fillOrderForm(name,country,city,creditcard,month,year)
  203 |      await confirmorderpage.clickPurchaseBtn()
  204 |      page.on('dialog',async dialog=>{
  205 |          expect(dialog.message()).toContain('Thank you for your purchase!')
  206 |         await dialog.accept()
  207 |      }    
  208 | )
  209 | 
  210 | })
  211 | 
  212 | test('TC#10 Log out valid user',async({page})=>{       
  213 |      const {username,password}=usercredentials[0]
  214 |      const pomanager=new POManager(page)
  215 |      const loginpage=pomanager.getLogin()
  216 |      
  217 |      await loginpage.clickLoginLink()
  218 |      await loginpage.userLoginForm(username,password)  
  219 |      await loginpage.clicksubmitbtn()   
  220 |      expect(page.locator('#nameofuser')).toHaveText(`Welcome ${username}`)
  221 |      await loginpage.clickLogoutbtn()
  222 |      await expect(page.locator('#nameofuser')).toBeHidden()
  223 | })
  224 |      
```