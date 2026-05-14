# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Main.spec.ts >> TC#7 Add  Item to cart
- Location: tests\Main.spec.ts:114:5

# Error details

```
ReferenceError: addtocartpage is not defined
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - text:             
  - navigation [ref=e2]:
    - link "PRODUCT STORE" [ref=e3] [cursor=pointer]:
      - /url: index.html
      - img [ref=e4]
      - text: PRODUCT STORE
    - list [ref=e6]:
      - listitem [ref=e7]:
        - link "Home (current)" [ref=e8] [cursor=pointer]:
          - /url: index.html
          - text: Home
          - generic [ref=e9]: (current)
      - listitem [ref=e10]:
        - link "Contact" [ref=e11] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e12]:
        - link "About us" [ref=e13] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e14]:
        - link "Cart" [ref=e15] [cursor=pointer]:
          - /url: cart.html
      - listitem
      - listitem [ref=e16]:
        - link "Log out" [ref=e17] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e18]:
        - link "Welcome Anjana_Prasad" [ref=e19] [cursor=pointer]:
          - /url: "#"
      - listitem
    - generic [ref=e21]:
      - list [ref=e22]:
        - listitem [ref=e23] [cursor=pointer]
        - listitem [ref=e24] [cursor=pointer]
        - listitem [ref=e25] [cursor=pointer]
      - img "First slide" [ref=e28]
      - button "Previous" [ref=e29] [cursor=pointer]:
        - generic [ref=e31]: Previous
      - button "Next" [ref=e32] [cursor=pointer]:
        - generic [ref=e34]: Next
  - generic [ref=e36]:
    - generic [ref=e38]:
      - link "CATEGORIES" [ref=e39] [cursor=pointer]:
        - /url: ""
      - link "Phones" [ref=e40] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=e41] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [ref=e42] [cursor=pointer]:
        - /url: "#"
    - generic [ref=e43]:
      - generic [ref=e44]:
        - generic [ref=e46]:
          - link [ref=e47] [cursor=pointer]:
            - /url: prod.html?idp_=1
          - generic [ref=e48]:
            - heading "Samsung galaxy s6" [level=4] [ref=e49]:
              - link "Samsung galaxy s6" [ref=e50] [cursor=pointer]:
                - /url: prod.html?idp_=1
            - heading "$360" [level=5] [ref=e51]
            - paragraph [ref=e52]: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
        - generic [ref=e54]:
          - link [ref=e55] [cursor=pointer]:
            - /url: prod.html?idp_=2
          - generic [ref=e56]:
            - heading "Nokia lumia 1520" [level=4] [ref=e57]:
              - link "Nokia lumia 1520" [ref=e58] [cursor=pointer]:
                - /url: prod.html?idp_=2
            - heading "$820" [level=5] [ref=e59]
            - paragraph [ref=e60]: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
        - generic [ref=e62]:
          - link [ref=e63] [cursor=pointer]:
            - /url: prod.html?idp_=3
          - generic [ref=e64]:
            - heading "Nexus 6" [level=4] [ref=e65]:
              - link "Nexus 6" [ref=e66] [cursor=pointer]:
                - /url: prod.html?idp_=3
            - heading "$650" [level=5] [ref=e67]
            - paragraph [ref=e68]: The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.
        - generic [ref=e70]:
          - link [ref=e71] [cursor=pointer]:
            - /url: prod.html?idp_=4
          - generic [ref=e72]:
            - heading "Samsung galaxy s7" [level=4] [ref=e73]:
              - link "Samsung galaxy s7" [ref=e74] [cursor=pointer]:
                - /url: prod.html?idp_=4
            - heading "$800" [level=5] [ref=e75]
            - paragraph [ref=e76]: The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.
        - generic [ref=e78]:
          - link [ref=e79] [cursor=pointer]:
            - /url: prod.html?idp_=5
          - generic [ref=e80]:
            - heading "Iphone 6 32gb" [level=4] [ref=e81]:
              - link "Iphone 6 32gb" [ref=e82] [cursor=pointer]:
                - /url: prod.html?idp_=5
            - heading "$790" [level=5] [ref=e83]
            - paragraph [ref=e84]: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
        - generic [ref=e86]:
          - link [ref=e87] [cursor=pointer]:
            - /url: prod.html?idp_=6
          - generic [ref=e88]:
            - heading "Sony xperia z5" [level=4] [ref=e89]:
              - link "Sony xperia z5" [ref=e90] [cursor=pointer]:
                - /url: prod.html?idp_=6
            - heading "$320" [level=5] [ref=e91]
            - paragraph [ref=e92]: Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone comes with a 5.20-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 424 pixels per inch.
        - generic [ref=e94]:
          - link [ref=e95] [cursor=pointer]:
            - /url: prod.html?idp_=7
          - generic [ref=e96]:
            - heading "HTC One M9" [level=4] [ref=e97]:
              - link "HTC One M9" [ref=e98] [cursor=pointer]:
                - /url: prod.html?idp_=7
            - heading "$700" [level=5] [ref=e99]
            - paragraph [ref=e100]: The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card.
        - generic [ref=e102]:
          - link [ref=e103] [cursor=pointer]:
            - /url: prod.html?idp_=8
          - generic [ref=e104]:
            - heading "Sony vaio i5" [level=4] [ref=e105]:
              - link "Sony vaio i5" [ref=e106] [cursor=pointer]:
                - /url: prod.html?idp_=8
            - heading "$790" [level=5] [ref=e107]
            - paragraph [ref=e108]: Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight.
        - generic [ref=e110]:
          - link [ref=e111] [cursor=pointer]:
            - /url: prod.html?idp_=9
          - generic [ref=e112]:
            - heading "Sony vaio i7" [level=4] [ref=e113]:
              - link "Sony vaio i7" [ref=e114] [cursor=pointer]:
                - /url: prod.html?idp_=9
            - heading "$790" [level=5] [ref=e115]
            - paragraph [ref=e116]: REVIEW Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight, higher-resolution display, more storage space, and a Blu-ray drive.
      - list [ref=e118]:
        - listitem [ref=e119]:
          - button "Previous" [ref=e120]
        - listitem [ref=e121]:
          - button "Next" [ref=e122] [cursor=pointer]
  - generic [ref=e124]:
    - generic [ref=e127]:
      - heading "About Us" [level=4] [ref=e128]
      - paragraph [ref=e129]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e132]:
      - heading "Get in Touch" [level=4] [ref=e133]
      - paragraph [ref=e134]: "Address: 2390 El Camino Real"
      - paragraph [ref=e135]: "Phone: +440 123456"
      - paragraph [ref=e136]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e140]:
      - img [ref=e141]
      - text: PRODUCT STORE
  - contentinfo [ref=e142]:
    - paragraph [ref=e143]: Copyright © Product Store
```

# Test source

```ts
  41  | })
  42  | 
  43  | test('TC#3 User Valid username and Valid password',async({page})=>{
  44  |      const {username,password}=usercredentials[0]
  45  |      const pomanager=new POManager(page)
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
  118 |      
  119 |      await loginpage.clickLoginLink()
  120 |      await loginpage.userLoginForm(username,password)  
  121 |      await loginpage.clicksubmitbtn()   
  122 |      expect(page.locator('#nameofuser')).toHaveText(`Welcome ${username}`)
  123 | 
  124 |      const pdt_name='Iphone 6 32gb'
  125 |      const cartRows = page.locator('#tbodyid tr')
  126 |      const cartItemsCount = await cartRows.count()
  127 |      
  128 |      for(let i=0;i<cartItemsCount;i++){
  129 |          const productTitle=await page.locator('#tbodyid td').nth(i).textContent()  
  130 | 
  131 |          try{
  132 |           
  133 |            if(productTitle!=null &&productTitle.trim()===pdt_name){
  134 |                break
  135 |            
  136 |           }
  137 |      }
  138 |      catch(error){
  139 |            console.error('item not found', error)      
  140 |      }}
> 141 |      await addtocartpage.clickAddtoCartBtn()
      |      ^ ReferenceError: addtocartpage is not defined
  142 |      page.on('dialog',async dialog=>{
  143 |          expect(dialog.message()).toBe('Product added.')
  144 |         await dialog.accept()
  145 |      })
  146 | 
  147 | })
  148 | 
  149 | test('TC#8 Add to cart Item Phone',async({page})=>{    
  150 |      const pomanager=new POManager(page)
  151 |      const loginpage=pomanager.getLogin()
  152 |      const addtocartpage=pomanager.getAddtoCartPage()       
  153 |      const username=signupcredentials.username
  154 |      const password=signupcredentials.password 
  155 | 
  156 | 
  157 |      await loginpage.clickLoginLink()
  158 |      await loginpage.userLoginForm(username,password)
  159 |      await loginpage.clicksubmitbtn()        
  160 |      expect(page.locator('#nameofuser')).toHaveText(`Welcome ${username}`)
  161 | 
  162 |     const cartItemsCount=await page.locator('#tbodyid tr').count()
  163 |     const pdt_name='Samsung galaxy s6'
  164 |      expect(cartItemsCount).toBeGreaterThan(0)
  165 |      for(let i=0;i<cartItemsCount;i++){
  166 |          const productTitle=await page.locator('#tbodyid td').nth(i).textContent()  
  167 | 
  168 |          try{
  169 |           
  170 |            if(productTitle!=null &&productTitle.trim()===pdt_name){
  171 |                break
  172 |            
  173 |           }
  174 |      }
  175 |      catch(error){
  176 |            console.error('item not found', error)      
  177 |      }}
  178 |     
  179 |      await addtocartpage.clickAddtoCartBtn()
  180 |      await addtocartpage.clickCartLink()
  181 |      const confirmorderpage=pomanager.getConfirmOrderPage()
  182 |      await addtocartpage.clickPlaceOrderBtn()
  183 |      const name=getCellData('name')
  184 |      const country=getCellData('country')
  185 |      const city=getCellData('city')
  186 |      const creditcard=getCellData('creditcard')
  187 |      const month=getCellData('month')
  188 |      const year=getCellData('year')     
  189 |      await confirmorderpage.fillOrderForm(name,country,city,creditcard,month,year)
  190 |      await confirmorderpage.clickPurchaseBtn()
  191 |      page.on('dialog',async dialog=>{
  192 |          expect(dialog.message()).toContain('Thank you for your purchase!')
  193 |         await dialog.accept()
  194 |      }    
  195 | )
  196 |          
  197 | 
  198 | })
  199 | 
  200 | test('TC#9 Add to cart Item Monitor',async({page})=>{   
  201 |        const pomanager=new POManager(page)
  202 |      const loginpage=pomanager.getLogin()
  203 |      const addtocartpage=pomanager.getAddtoCartPage()       
  204 |      const user=signupcredentials.username
  205 |      const password=signupcredentials.password
  206 | 
  207 |      
  208 |      await loginpage.clickLoginLink()
  209 |      await loginpage.userLoginForm(user,password)
  210 | 
  211 |      await loginpage.clicksubmitbtn()
  212 | 
  213 |      await expect(page.locator('#nameofuser')).toHaveText(`Welcome ${user}`)
  214 | 
  215 |      const cartItemsCount=await page.locator('#tbodyid tr').count()
  216 |      expect(cartItemsCount).toBeGreaterThan(0)
  217 |      const pdt_name='Sony vaio i7'
  218 |      for(let i=0;i<cartItemsCount;i++){
  219 |          const productTitle=await page.locator('#tbodyid td').nth(i).textContent()  
  220 | 
  221 |          try{
  222 |           
  223 |            if(productTitle!=null &&productTitle.trim()===pdt_name){
  224 |                break
  225 |            
  226 |           }
  227 |      }
  228 |      catch(error){
  229 |            console.error('item not found', error)      
  230 |      }}
  231 |      await addtocartpage.clickAddtoCartBtn()
  232 |      page.on('dialog',async dialog=>{
  233 |          expect(dialog.message()).toBe('Product added.')
  234 |         await dialog.accept()
  235 |      })
  236 | 
  237 | })
  238 | 
  239 | test('TC#10 Log out valid user',async({page})=>{       
  240 |      const {username,password}=usercredentials[0]
  241 |      const pomanager=new POManager(page)
```