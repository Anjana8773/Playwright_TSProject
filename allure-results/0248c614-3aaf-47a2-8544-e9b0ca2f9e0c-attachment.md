# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Main.spec.ts >> TC#8 Add to cart Item Phone
- Location: tests\Main.spec.ts:135:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.modal-content')
Expected: visible
Error: strict mode violation: locator('.modal-content') resolved to 5 elements:
    1) <div class="modal-content">…</div> aka getByText('New message × Contact Email:')
    2) <div class="modal-content">…</div> aka getByText('Sign up × Username: Password')
    3) <div class="modal-content">…</div> aka getByText('Place order × Total: 10060')
    4) <div class="modal-content">…</div> aka getByText('Log in × Username: Password:')
    5) <div class="modal-content">…</div> aka getByText('About us × Video Player is')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.modal-content')

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
          - generic [ref=e10]: "Total: 10060"
          - generic [ref=e11]:
            - generic [ref=e12]: "Name:"
            - 'textbox "Total: 10060 Name:" [active] [ref=e13]': John
          - generic [ref=e14]:
            - generic [ref=e15]: "Country:"
            - textbox "Country:" [ref=e16]
          - generic [ref=e17]:
            - generic [ref=e18]: "City:"
            - textbox "City:" [ref=e19]
          - generic [ref=e20]:
            - generic [ref=e21]: "Credit card:"
            - textbox "Credit card:" [ref=e22]
          - generic [ref=e23]:
            - generic [ref=e24]: "Month:"
            - textbox "Month:" [ref=e25]
          - generic [ref=e26]:
            - generic [ref=e27]: "Year:"
            - textbox "Year:" [ref=e28]
        - generic [ref=e30]:
          - button "Close" [ref=e31]
          - button "Purchase" [ref=e32]
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
          - row "Samsung galaxy s6 360 Delete" [ref=e65]:
            - cell [ref=e66]:
              - img [ref=e67]
            - cell "Samsung galaxy s6" [ref=e68]
            - cell "360" [ref=e69]
            - cell "Delete" [ref=e70]:
              - link "Delete" [ref=e71] [cursor=pointer]:
                - /url: "#"
          - row "Iphone 6 32gb 790 Delete" [ref=e72]:
            - cell [ref=e73]:
              - img [ref=e74]
            - cell "Iphone 6 32gb" [ref=e75]
            - cell "790" [ref=e76]
            - cell "Delete" [ref=e77]:
              - link "Delete" [ref=e78] [cursor=pointer]:
                - /url: "#"
          - row "Samsung galaxy s6 360 Delete" [ref=e79]:
            - cell [ref=e80]:
              - img [ref=e81]
            - cell "Samsung galaxy s6" [ref=e82]
            - cell "360" [ref=e83]
            - cell "Delete" [ref=e84]:
              - link "Delete" [ref=e85] [cursor=pointer]:
                - /url: "#"
          - row "Samsung galaxy s6 360 Delete" [ref=e86]:
            - cell [ref=e87]:
              - img [ref=e88]
            - cell "Samsung galaxy s6" [ref=e89]
            - cell "360" [ref=e90]
            - cell "Delete" [ref=e91]:
              - link "Delete" [ref=e92] [cursor=pointer]:
                - /url: "#"
          - row "Iphone 6 32gb 790 Delete" [ref=e93]:
            - cell [ref=e94]:
              - img [ref=e95]
            - cell "Iphone 6 32gb" [ref=e96]
            - cell "790" [ref=e97]
            - cell "Delete" [ref=e98]:
              - link "Delete" [ref=e99] [cursor=pointer]:
                - /url: "#"
          - row "Iphone 6 32gb 790 Delete" [ref=e100]:
            - cell [ref=e101]:
              - img [ref=e102]
            - cell "Iphone 6 32gb" [ref=e103]
            - cell "790" [ref=e104]
            - cell "Delete" [ref=e105]:
              - link "Delete" [ref=e106] [cursor=pointer]:
                - /url: "#"
          - row "Samsung galaxy s6 360 Delete" [ref=e107]:
            - cell [ref=e108]:
              - img [ref=e109]
            - cell "Samsung galaxy s6" [ref=e110]
            - cell "360" [ref=e111]
            - cell "Delete" [ref=e112]:
              - link "Delete" [ref=e113] [cursor=pointer]:
                - /url: "#"
          - row "Iphone 6 32gb 790 Delete" [ref=e114]:
            - cell [ref=e115]:
              - img [ref=e116]
            - cell "Iphone 6 32gb" [ref=e117]
            - cell "790" [ref=e118]
            - cell "Delete" [ref=e119]:
              - link "Delete" [ref=e120] [cursor=pointer]:
                - /url: "#"
          - row "Iphone 6 32gb 790 Delete" [ref=e121]:
            - cell [ref=e122]:
              - img [ref=e123]
            - cell "Iphone 6 32gb" [ref=e124]
            - cell "790" [ref=e125]
            - cell "Delete" [ref=e126]:
              - link "Delete" [ref=e127] [cursor=pointer]:
                - /url: "#"
          - row "Iphone 6 32gb 790 Delete" [ref=e128]:
            - cell [ref=e129]:
              - img [ref=e130]
            - cell "Iphone 6 32gb" [ref=e131]
            - cell "790" [ref=e132]
            - cell "Delete" [ref=e133]:
              - link "Delete" [ref=e134] [cursor=pointer]:
                - /url: "#"
          - row "Iphone 6 32gb 790 Delete" [ref=e135]:
            - cell [ref=e136]:
              - img [ref=e137]
            - cell "Iphone 6 32gb" [ref=e138]
            - cell "790" [ref=e139]
            - cell "Delete" [ref=e140]:
              - link "Delete" [ref=e141] [cursor=pointer]:
                - /url: "#"
          - row "Iphone 6 32gb 790 Delete" [ref=e142]:
            - cell [ref=e143]:
              - img [ref=e144]
            - cell "Iphone 6 32gb" [ref=e145]
            - cell "790" [ref=e146]
            - cell "Delete" [ref=e147]:
              - link "Delete" [ref=e148] [cursor=pointer]:
                - /url: "#"
          - row "Samsung galaxy s6 360 Delete" [ref=e149]:
            - cell [ref=e150]:
              - img [ref=e151]
            - cell "Samsung galaxy s6" [ref=e152]
            - cell "360" [ref=e153]
            - cell "Delete" [ref=e154]:
              - link "Delete" [ref=e155] [cursor=pointer]:
                - /url: "#"
          - row "Samsung galaxy s6 360 Delete" [ref=e156]:
            - cell [ref=e157]:
              - img [ref=e158]
            - cell "Samsung galaxy s6" [ref=e159]
            - cell "360" [ref=e160]
            - cell "Delete" [ref=e161]:
              - link "Delete" [ref=e162] [cursor=pointer]:
                - /url: "#"
          - row "Iphone 6 32gb 790 Delete" [ref=e163]:
            - cell [ref=e164]:
              - img [ref=e165]
            - cell "Iphone 6 32gb" [ref=e166]
            - cell "790" [ref=e167]
            - cell "Delete" [ref=e168]:
              - link "Delete" [ref=e169] [cursor=pointer]:
                - /url: "#"
          - row "Iphone 6 32gb 790 Delete" [ref=e170]:
            - cell [ref=e171]:
              - img [ref=e172]
            - cell "Iphone 6 32gb" [ref=e173]
            - cell "790" [ref=e174]
            - cell "Delete" [ref=e175]:
              - link "Delete" [ref=e176] [cursor=pointer]:
                - /url: "#"
    - generic [ref=e177]:
      - heading "Total" [level=2] [ref=e178]
      - heading "10060" [level=3] [ref=e181]
      - button "Place Order" [ref=e182]
  - generic [ref=e184]:
    - generic [ref=e187]:
      - heading "About Us" [level=4] [ref=e188]
      - paragraph [ref=e189]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e192]:
      - heading "Get in Touch" [level=4] [ref=e193]
      - paragraph [ref=e194]: "Address: 2390 El Camino Real"
      - paragraph [ref=e195]: "Phone: +440 123456"
      - paragraph [ref=e196]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e200]:
      - img [ref=e201]
      - text: PRODUCT STORE
  - contentinfo [ref=e202]:
    - paragraph [ref=e203]: Copyright © Product Store
```

# Test source

```ts
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
  136 |     const {username,password}=usercredentials[0]
  137 |      const pomanager=new POManager(page)
  138 |      const loginpage=pomanager.getLogin()
  139 |      const addtocartpage=pomanager.getAddtoCartPage()
  140 |      
  141 |      await loginpage.clickLoginLink()
  142 |      await loginpage.userLoginForm(username,password)  
  143 |      await loginpage.clicksubmitbtn()   
  144 |      expect(page.locator('#nameofuser')).toHaveText(`Welcome ${username}`)
  145 | 
  146 |      const pdt_name='Iphone 6 32gb'
  147 |      await page.locator('.hrefch').filter({ hasText: pdt_name }).click()
  148 |      await addtocartpage.clickAddtoCartBtn()
  149 |      page.on('dialog',async dialog=>{
  150 |          expect(dialog.message()).toBe('Product added.')
  151 |         await dialog.accept()
  152 |      })
  153 | 
  154 |      const confirmorderpage=pomanager.getConfirmOrderPage()
  155 |       await addtocartpage.clickCartLink()
  156 |      await addtocartpage.clickPlaceOrderBtn()
  157 | 
  158 | 
  159 |      const name=getCellData(2,1)
  160 |      const country=getCellData(2,2)
  161 |      const city=getCellData(2,3)
  162 |      const creditcard=getCellData(2,4)
  163 |      const month=getCellData(2,5)
  164 |      const year=getCellData(2,6)     
> 165 |      expect(page.locator('.modal-content')).toBeVisible()
      |                                             ^ Error: expect(locator).toBeVisible() failed
  166 |      await confirmorderpage.fillOrderForm(name,country,city,creditcard,month,year)
  167 |      await confirmorderpage.clickPurchaseBtn()
  168 |      page.on('dialog',async dialog=>{
  169 |          expect(dialog.message()).toContain('Thank you for your purchase!')
  170 |         await dialog.accept()
  171 |      }    
  172 | )
  173 |          
  174 | 
  175 | })
  176 | 
  177 | test('TC#9 Add to cart Item Monitor',async({page})=>{   
  178 |      const {username,password}=usercredentials[0]
  179 |      const pomanager=new POManager(page)
  180 |      const loginpage=pomanager.getLogin()
  181 |      const addtocartpage=pomanager.getAddtoCartPage()
  182 |      
  183 |      await loginpage.clickLoginLink()
  184 |      await loginpage.userLoginForm(username,password)  
  185 |      await loginpage.clicksubmitbtn()   
  186 |      expect(page.locator('#nameofuser')).toHaveText(`Welcome ${username}`)
  187 | 
  188 |      const pdt_name='Iphone 6 32gb'
  189 |      await page.locator('.hrefch').filter({ hasText: pdt_name }).click()
  190 |      await addtocartpage.clickAddtoCartBtn()
  191 |      page.on('dialog',async dialog=>{
  192 |          expect(dialog.message()).toBe('Product added.')
  193 |         await dialog.accept()
  194 |      })
  195 | 
  196 |      const confirmorderpage=pomanager.getConfirmOrderPage()
  197 |      await addtocartpage.clickCartLink()
  198 |      await addtocartpage.clickPlaceOrderBtn()
  199 | 
  200 |      const name=getCellData(3,1)
  201 |      const country=getCellData(3,2)
  202 |      const city=getCellData(3,3)
  203 |      const creditcard=getCellData(3,4)
  204 |      const month=getCellData(3,5)
  205 |      const year=getCellData(3,6)     
  206 |      await confirmorderpage.fillOrderForm(name,country,city,creditcard,month,year)
  207 |      await confirmorderpage.clickPurchaseBtn()
  208 |      page.on('dialog',async dialog=>{
  209 |          expect(dialog.message()).toContain('Thank you for your purchase!')
  210 |         await dialog.accept()
  211 |      }    
  212 | )
  213 | 
  214 | })
  215 | 
  216 | test('TC#10 Log out valid user',async({page})=>{       
  217 |      const {username,password}=usercredentials[0]
  218 |      const pomanager=new POManager(page)
  219 |      const loginpage=pomanager.getLogin()
  220 |      
  221 |      await loginpage.clickLoginLink()
  222 |      await loginpage.userLoginForm(username,password)  
  223 |      await loginpage.clicksubmitbtn()   
  224 |      expect(page.locator('#nameofuser')).toHaveText(`Welcome ${username}`)
  225 |      await loginpage.clickLogoutbtn()
  226 |      await expect(page.locator('#nameofuser')).toBeHidden()
  227 | })
  228 |      
```