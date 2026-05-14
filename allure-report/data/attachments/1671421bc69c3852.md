# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Main.spec.ts >> TC#7 Add  Item to cart
- Location: tests\Main.spec.ts:115:5

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
  27  |     await expect(page.locator('.modal-content')).toBeHidden()
  28  | 
  29  | })
  30  | 
  31  | 
  32  | test('TC#2 User Registration click close button',async({page})=>{
  33  |      const pomanager=new POManager(page)
  34  |     const signup=pomanager.getSignUp()
  35  |      const user=signupcredentials.username
  36  |      const password=signupcredentials.password
  37  |      await signup.clickSignUpLink()
  38  |      await signup.userRegistrationform(user,password)
  39  |      await signup.clickclosebtn()  
  40  |      await expect(page.locator('.modal-content')).toBeHidden()
  41  | 
  42  | })
  43  | 
  44  | test('TC#3 User Valid username and Valid password',async({page})=>{
  45  |      const {username,password}=usercredentials[0]
  46  |      const pomanager=new POManager(page)
  47  |      const loginpage=pomanager.getLogin()
  48  |      
  49  |      await loginpage.clickLoginLink()
  50  |      await loginpage.userLoginForm(username,password)  
  51  |      await loginpage.clicksubmitbtn()   
  52  |      expect(page.locator('#nameofuser')).toHaveText(`Welcome ${username}`)
  53  |       
  54  | 
  55  | })
  56  | 
  57  | test('TC#4 User Invalid username and Valid password',async({page})=>{
  58  |      const data=usercredentials[1]
  59  |      const pomanager=new POManager(page)
  60  |      const loginpage=pomanager.getLogin()
  61  |      const user=data.username
  62  |      const password=data.password
  63  | 
  64  |      await loginpage.clickLoginLink()
  65  |      await loginpage.userLoginForm(user,password)
  66  | 
  67  |      page.once('dialog', async dialog => {
  68  |          expect(dialog.message()).toBe('User does not exist.')
  69  |          await dialog.accept()
  70  |      })
  71  | 
  72  |      await loginpage.clicksubmitbtn()
  73  |      await expect(page.locator('#nameofuser')).toBeHidden()
  74  | 
  75  | })
  76  | 
  77  | test('TC#5 User Valid username and Invalid password',async({page})=>{
  78  | 
  79  |      const data=usercredentials[2]
  80  |      const pomanager=new POManager(page)
  81  |      const loginpage=pomanager.getLogin()
  82  |      const user=data.username
  83  |      const password=data.password
  84  |      await loginpage.clickLoginLink()
  85  |      await loginpage.userLoginForm(user,password)
  86  |      await loginpage.clicksubmitbtn()
  87  |      page.on('dialog',async dialog=>{
  88  |          expect(dialog.message()).toBe('User does not exist.')
  89  |         await dialog.accept()
  90  |      })
  91  |      expect(page.locator('#nameofuser')).toBeHidden()
  92  |       
  93  | 
  94  | })
  95  | 
  96  | test('TC#6 User Invalid username and Invalid password',async({page})=>{
  97  |      const data=usercredentials[3]
  98  |      const pomanager=new POManager(page)
  99  |      const loginpage=pomanager.getLogin()
  100 |      const user=data.username
  101 |      const password=data.password
  102 |      
  103 |      await loginpage.clickLoginLink()
  104 |      await loginpage.userLoginForm(user,password)
  105 |      await loginpage.clicksubmitbtn()
  106 |      page.on('dialog',async dialog=>{
  107 |          expect(dialog.message()).toBe('User does not exist.')
  108 |         await dialog.accept()
  109 |      })
  110 | 
  111 |      expect(page.locator('#nameofuser')).toBeHidden()
  112 | 
  113 | })
  114 | 
  115 | test('TC#7 Add  Item to cart',async({page})=>{    
  116 |      const pomanager=new POManager(page)
  117 |      const loginpage=pomanager.getLogin()
  118 |      const addtocartpage=pomanager.getAddtoCartPage()       
  119 |      const user=signupcredentials.username
  120 |      const password=signupcredentials.password
  121 | 
  122 |      await loginpage.clickLoginLink()
  123 |      await loginpage.userLoginForm(user,password)
  124 | 
  125 |      await loginpage.clicksubmitbtn()
  126 | 
> 127 |      await expect(page.locator('#nameofuser')).toHaveText(`Welcome ${user}`)
      |                                                ^ Error: expect(locator).toHaveText(expected) failed
  128 |      const pdt_name='Iphone 6 32gb'
  129 |      const cartItemsCount=await page.locator('#tbodyid tr').count()
  130 |      expect(cartItemsCount).toBeGreaterThan(0)
  131 |      for(let i=0;i<cartItemsCount;i++){
  132 |          const productTitle=await page.locator('#tbodyid td').nth(i).textContent()  
  133 | 
  134 |          try{
  135 |           
  136 |            if(productTitle!=null &&productTitle.trim()===pdt_name){
  137 |                break
  138 |            
  139 |           }
  140 |      }
  141 |      catch(error){
  142 |            console.error('item not found', error)      
  143 |      }}
  144 |      await addtocartpage.clickAddtoCartBtn()
  145 |      page.on('dialog',async dialog=>{
  146 |          expect(dialog.message()).toBe('Product added.')
  147 |         await dialog.accept()
  148 |      })
  149 | 
  150 | })
  151 | 
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
```