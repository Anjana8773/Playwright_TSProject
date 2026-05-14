# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Main.spec.ts >> TC#7 Add  Item to cart
- Location: tests\Main.spec.ts:116:5

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0
```

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('#nameofuser')
Expected: "Welcome mark"
Received: ""

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('#nameofuser')
    4 × locator resolved to <a href="#" id="nameofuser" class="nav-link"></a>
      - unexpected value ""

```

```yaml
- dialog "Log in":
  - document:
    - heading "Log in" [level=5]
    - button "Close"
    - text: "Username:"
    - textbox: mark
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
  30  | 
  31  | test('TC#2 User Registration click close button',async({page})=>{
  32  |      const pomanager=new POManager(page)
  33  |     const signup=pomanager.getSignUp()
  34  |      const user=signupcredentials.username
  35  |      const password=signupcredentials.password
  36  |      await pomanager.goto()
  37  |      await signup.clickSignUpLink()
  38  |      await signup.userRegistrationform(user,password)
  39  |      await signup.clickclosebtn()  
  40  |      expect(page.locator('.content')).toBeHidden()
  41  | 
  42  | })
  43  | 
  44  | test('TC#3 User Valid username and Valid password',async({page})=>{
  45  |      const {username,password}=usercredentials[0]
  46  |      const pomanager=new POManager(page)
  47  |      const loginpage=pomanager.getLogin()
  48  |      await loginpage.goto()
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
  63  |      await loginpage.goto()
  64  |      await loginpage.clickLoginLink()
  65  |      await loginpage.userLoginForm(user,password)
  66  |      await loginpage.clicksubmitbtn()
  67  |      page.on('dialog',async dialog=>{
  68  |          expect(dialog.message()).toBe('User does not exist.')
  69  |         await dialog.accept()
  70  |      })
  71  |      expect(page.locator('#nameofuser')).toBeHidden()
  72  |      
  73  |       
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
  84  |      await loginpage.goto()
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
  103 |      await loginpage.goto()
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
  120 |      const confirmorderpage=pomanager.getConfirmOrderPage()
  121 |      const user=signupcredentials.username
  122 |      const password=signupcredentials.password
  123 | 
  124 |      await loginpage.goto()
  125 |      await loginpage.clickLoginLink()
  126 |      await loginpage.userLoginForm(user,password)
  127 | 
  128 |      await loginpage.clicksubmitbtn()
  129 | 
> 130 |      expect(page.locator('#nameofuser')).toHaveText(`Welcome ${user}`)
      |                                          ^ Error: expect(locator).toHaveText(expected) failed
  131 | 
  132 |      const cartItemsCount=await page.locator('#tbodyid tr').count()
  133 |      expect(cartItemsCount).toBeGreaterThan(0)
  134 |      for(let i=0;i<cartItemsCount;i++){
  135 |          const productName=await page.locator('#tbodyid td').nth(i).textContent()  
  136 | 
  137 |          try{
  138 |           
  139 |            if(productName!=null &&productName.trim()==='Samsung galaxy s6'){
  140 |                break
  141 |            
  142 |           }
  143 |      }
  144 |      catch(error){
  145 |            console.error('item not found', error)      
  146 |      }}
  147 |      await addtocartpage.clickAddtoCartBtn()
  148 |      page.on('dialog',async dialog=>{
  149 |          expect(dialog.message()).toBe('Product added.')
  150 |         await dialog.accept()
  151 |      })
  152 | 
  153 | })
  154 | 
  155 | test('TC#8 Add to cart Item Phone',async({page})=>{    
  156 |      const pomanager=new POManager(page)
  157 |      const loginpage=pomanager.getLogin()
  158 |      const addtocartpage=pomanager.getAddtoCartPage()       
  159 |      const username=signupcredentials.username
  160 |      const password=signupcredentials.password 
  161 | 
  162 |      await loginpage.goto()
  163 |      await loginpage.clickLoginLink()
  164 |      await loginpage.userLoginForm(username,password)
  165 |      await loginpage.clicksubmitbtn()        
  166 |      expect(page.locator('#nameofuser')).toHaveText(`Welcome ${username}`)
  167 | 
  168 |      const cartItemsCount=await page.locator('#tbodyid').locator('tr').count()
  169 |      expect(cartItemsCount).toBeGreaterThan(0)
  170 |      for(let i=0;i<cartItemsCount;i++){
  171 |          const productName=await page.locator('#tbodyid td').nth(i).textContent()  
  172 |            if(productName?.trim()==='Samsung galaxy s6'){
  173 |                expect(productName?.trim()).toBe('Samsung galaxy s6')
  174 |                break
  175 |            }
  176 | 
  177 | 
  178 |      }
  179 |      await addtocartpage.clickAddtoCartBtn()
  180 |      await addtocartpage.clickCartLink()
  181 |      const confirmorderpage=pomanager.getConfirmOrderPage()
  182 |      await addtocartpage.clickPlaceOrderBtn()
  183 |      await confirmorderpage.fillOrderForm('John Doe','USA','New York','1234567890123456','12','2025')
  184 |      await confirmorderpage.clickPurchaseBtn()
  185 |      page.on('dialog',async dialog=>{
  186 |          expect(dialog.message()).toContain('Thank you for your purchase!')
  187 |         await dialog.accept()
  188 |      }    
  189 | )
  190 |          
  191 | 
  192 | })
  193 | 
  194 | 
  195 | 
```