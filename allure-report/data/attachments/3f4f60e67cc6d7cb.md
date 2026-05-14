# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Main.spec.ts >> TC#7 Add  Item to cart
- Location: tests\Main.spec.ts:116:5

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
  - img "First slide"
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
  28  | 
  29  | 
  30  | })
  31  | 
  32  | 
  33  | test('TC#2 User Registration click close button',async({page})=>{
  34  |      const pomanager=new POManager(page)
  35  |     const signup=pomanager.getSignUp()
  36  |      const user=signupcredentials.username
  37  |      const password=signupcredentials.password
  38  |      await signup.clickSignUpLink()
  39  |      await signup.userRegistrationform(user,password)
  40  |      await signup.clickclosebtn()  
  41  |      await expect(page.locator('#signInModal')).toBeHidden()
  42  | 
  43  | })
  44  | 
  45  | test('TC#3 User Valid username and Valid password',async({page})=>{
  46  |      const {username,password}=usercredentials[0]
  47  |      const pomanager=new POManager(page)
  48  |      const loginpage=pomanager.getLogin()
  49  |      
  50  |      await loginpage.clickLoginLink()
  51  |      await loginpage.userLoginForm(username,password)  
  52  |      await loginpage.clicksubmitbtn()   
  53  |      expect(page.locator('#nameofuser')).toHaveText(`Welcome ${username}`)
  54  |       
  55  | 
  56  | })
  57  | 
  58  | test('TC#4 User Invalid username and Valid password',async({page})=>{
  59  |      const data=usercredentials[1]
  60  |      const pomanager=new POManager(page)
  61  |      const loginpage=pomanager.getLogin()
  62  |      const user=data.username
  63  |      const password=data.password
  64  | 
  65  |      await loginpage.clickLoginLink()
  66  |      await loginpage.userLoginForm(user,password)
  67  | 
  68  |      page.once('dialog', async dialog => {
  69  |          expect(dialog.message()).toBe('User does not exist.')
  70  |          await dialog.accept()
  71  |      })
  72  | 
  73  |      await loginpage.clicksubmitbtn()
  74  |      await expect(page.locator('#nameofuser')).toBeHidden()
  75  | 
  76  | })
  77  | 
  78  | test('TC#5 User Valid username and Invalid password',async({page})=>{
  79  | 
  80  |      const data=usercredentials[2]
  81  |      const pomanager=new POManager(page)
  82  |      const loginpage=pomanager.getLogin()
  83  |      const user=data.username
  84  |      const password=data.password
  85  |      await loginpage.clickLoginLink()
  86  |      await loginpage.userLoginForm(user,password)
  87  |      await loginpage.clicksubmitbtn()
  88  |      page.on('dialog',async dialog=>{
  89  |          expect(dialog.message()).toBe('User does not exist.')
  90  |         await dialog.accept()
  91  |      })
  92  |      expect(page.locator('#nameofuser')).toBeHidden()
  93  |       
  94  | 
  95  | })
  96  | 
  97  | test('TC#6 User Invalid username and Invalid password',async({page})=>{
  98  |      const data=usercredentials[3]
  99  |      const pomanager=new POManager(page)
  100 |      const loginpage=pomanager.getLogin()
  101 |      const user=data.username
  102 |      const password=data.password
  103 |      
  104 |      await loginpage.clickLoginLink()
  105 |      await loginpage.userLoginForm(user,password)
  106 |      await loginpage.clicksubmitbtn()
  107 |      page.on('dialog',async dialog=>{
  108 |          expect(dialog.message()).toBe('User does not exist.')
  109 |         await dialog.accept()
  110 |      })
  111 | 
  112 |      expect(page.locator('#nameofuser')).toBeHidden()
  113 | 
  114 | })
  115 | 
  116 | test('TC#7 Add  Item to cart',async({page})=>{    
  117 |      const pomanager=new POManager(page)
  118 |      const loginpage=pomanager.getLogin()
  119 |      const addtocartpage=pomanager.getAddtoCartPage()       
  120 |      const user=signupcredentials.username
  121 |      const password=signupcredentials.password
  122 | 
  123 |      await loginpage.clickLoginLink()
  124 |      await loginpage.userLoginForm(user,password)
  125 | 
  126 |      await loginpage.clicksubmitbtn()
  127 | 
> 128 |      await expect(page.locator('#nameofuser')).toHaveText(`Welcome ${user}`)
      |                                                ^ Error: expect(locator).toHaveText(expected) failed
  129 |      const pdt_name='Iphone 6 32gb'
  130 |      const cartItemsCount=await page.locator('#tbodyid tr').count()
  131 |      expect(cartItemsCount).toBeGreaterThan(0)
  132 |      for(let i=0;i<cartItemsCount;i++){
  133 |          const productTitle=await page.locator('#tbodyid td').nth(i).textContent()  
  134 | 
  135 |          try{
  136 |           
  137 |            if(productTitle!=null &&productTitle.trim()===pdt_name){
  138 |                break
  139 |            
  140 |           }
  141 |      }
  142 |      catch(error){
  143 |            console.error('item not found', error)      
  144 |      }}
  145 |      await addtocartpage.clickAddtoCartBtn()
  146 |      page.on('dialog',async dialog=>{
  147 |          expect(dialog.message()).toBe('Product added.')
  148 |         await dialog.accept()
  149 |      })
  150 | 
  151 | })
  152 | 
  153 | test('TC#8 Add to cart Item Phone',async({page})=>{    
  154 |      const pomanager=new POManager(page)
  155 |      const loginpage=pomanager.getLogin()
  156 |      const addtocartpage=pomanager.getAddtoCartPage()       
  157 |      const username=signupcredentials.username
  158 |      const password=signupcredentials.password 
  159 | 
  160 | 
  161 |      await loginpage.clickLoginLink()
  162 |      await loginpage.userLoginForm(username,password)
  163 |      await loginpage.clicksubmitbtn()        
  164 |      expect(page.locator('#nameofuser')).toHaveText(`Welcome ${username}`)
  165 | 
  166 |     const cartItemsCount=await page.locator('#tbodyid tr').count()
  167 |     const pdt_name='Samsung galaxy s6'
  168 |      expect(cartItemsCount).toBeGreaterThan(0)
  169 |      for(let i=0;i<cartItemsCount;i++){
  170 |          const productTitle=await page.locator('#tbodyid td').nth(i).textContent()  
  171 | 
  172 |          try{
  173 |           
  174 |            if(productTitle!=null &&productTitle.trim()===pdt_name){
  175 |                break
  176 |            
  177 |           }
  178 |      }
  179 |      catch(error){
  180 |            console.error('item not found', error)      
  181 |      }}
  182 |     
  183 |      await addtocartpage.clickAddtoCartBtn()
  184 |      await addtocartpage.clickCartLink()
  185 |      const confirmorderpage=pomanager.getConfirmOrderPage()
  186 |      await addtocartpage.clickPlaceOrderBtn()
  187 |      const name=getCellData('name')
  188 |      const country=getCellData('country')
  189 |      const city=getCellData('city')
  190 |      const creditcard=getCellData('creditcard')
  191 |      const month=getCellData('month')
  192 |      const year=getCellData('year')     
  193 |      await confirmorderpage.fillOrderForm(name,country,city,creditcard,month,year)
  194 |      await confirmorderpage.clickPurchaseBtn()
  195 |      page.on('dialog',async dialog=>{
  196 |          expect(dialog.message()).toContain('Thank you for your purchase!')
  197 |         await dialog.accept()
  198 |      }    
  199 | )
  200 |          
  201 | 
  202 | })
  203 | 
  204 | test('TC#9 Add to cart Item Monitor',async({page})=>{   
  205 |        const pomanager=new POManager(page)
  206 |      const loginpage=pomanager.getLogin()
  207 |      const addtocartpage=pomanager.getAddtoCartPage()       
  208 |      const user=signupcredentials.username
  209 |      const password=signupcredentials.password
  210 | 
  211 |      
  212 |      await loginpage.clickLoginLink()
  213 |      await loginpage.userLoginForm(user,password)
  214 | 
  215 |      await loginpage.clicksubmitbtn()
  216 | 
  217 |      await expect(page.locator('#nameofuser')).toHaveText(`Welcome ${user}`)
  218 | 
  219 |      const cartItemsCount=await page.locator('#tbodyid tr').count()
  220 |      expect(cartItemsCount).toBeGreaterThan(0)
  221 |      const pdt_name='Sony vaio i7'
  222 |      for(let i=0;i<cartItemsCount;i++){
  223 |          const productTitle=await page.locator('#tbodyid td').nth(i).textContent()  
  224 | 
  225 |          try{
  226 |           
  227 |            if(productTitle!=null &&productTitle.trim()===pdt_name){
  228 |                break
```