# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkoutphone.spec.ts >> TC#8 Add to cart Item Phone
- Location: tests\checkoutphone.spec.ts:12:5

# Error details

```
Error: locator.fill: value: expected string, got number
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
          - generic [ref=e10]: "Total: 7110"
          - generic [ref=e11]:
            - generic [ref=e12]: "Name:"
            - 'textbox "Total: 7110 Name:" [ref=e13]': John
          - generic [ref=e14]:
            - generic [ref=e15]: "Country:"
            - textbox "Country:" [ref=e16]: India
          - generic [ref=e17]:
            - generic [ref=e18]: "City:"
            - textbox "City:" [active] [ref=e19]: Trivandrum
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
          - row "Iphone 6 32gb 790 Delete" [ref=e65]:
            - cell [ref=e66]:
              - img [ref=e67]
            - cell "Iphone 6 32gb" [ref=e68]
            - cell "790" [ref=e69]
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
          - row "Sony vaio i7 790 Delete" [ref=e79]:
            - cell [ref=e80]:
              - img [ref=e81]
            - cell "Sony vaio i7" [ref=e82]
            - cell "790" [ref=e83]
            - cell "Delete" [ref=e84]:
              - link "Delete" [ref=e85] [cursor=pointer]:
                - /url: "#"
          - row "Iphone 6 32gb 790 Delete" [ref=e86]:
            - cell [ref=e87]:
              - img [ref=e88]
            - cell "Iphone 6 32gb" [ref=e89]
            - cell "790" [ref=e90]
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
          - row "Sony vaio i7 790 Delete" [ref=e100]:
            - cell [ref=e101]:
              - img [ref=e102]
            - cell "Sony vaio i7" [ref=e103]
            - cell "790" [ref=e104]
            - cell "Delete" [ref=e105]:
              - link "Delete" [ref=e106] [cursor=pointer]:
                - /url: "#"
          - row "Iphone 6 32gb 790 Delete" [ref=e107]:
            - cell [ref=e108]:
              - img [ref=e109]
            - cell "Iphone 6 32gb" [ref=e110]
            - cell "790" [ref=e111]
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
    - generic [ref=e128]:
      - heading "Total" [level=2] [ref=e129]
      - heading "7110" [level=3] [ref=e132]
      - button "Place Order" [ref=e133]
  - generic [ref=e135]:
    - generic [ref=e138]:
      - heading "About Us" [level=4] [ref=e139]
      - paragraph [ref=e140]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e143]:
      - heading "Get in Touch" [level=4] [ref=e144]
      - paragraph [ref=e145]: "Address: 2390 El Camino Real"
      - paragraph [ref=e146]: "Phone: +440 123456"
      - paragraph [ref=e147]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e151]:
      - img [ref=e152]
      - text: PRODUCT STORE
  - contentinfo [ref=e153]:
    - paragraph [ref=e154]: Copyright © Product Store
```

# Test source

```ts
  1  | import {Page,Locator} from '@playwright/test'
  2  | 
  3  | export class ConfirmOrderPage{
  4  | 
  5  |     page:Page
  6  |     name:Locator
  7  |     country:Locator
  8  |     city:Locator
  9  |     creditcard:Locator
  10 |     month:Locator
  11 |     year:Locator
  12 |     purchasebtn:Locator     
  13 | 
  14 |     constructor(page:Page){
  15 |         this.page=page
  16 |         const orderModal = page.locator('.modal-body')
  17 |         this.name=orderModal.locator('#name') 
  18 |         this.country=orderModal.locator('#country')
  19 |         this.city=orderModal.locator('#city')
  20 |         this.creditcard=orderModal.locator('#card')
  21 |         this.month=orderModal.locator('#month')
  22 |         this.year=orderModal.locator('#year')
  23 |         this.purchasebtn=orderModal.getByRole('button',{name:'Purchase'})
  24 |     }           
  25 | 
  26 |     async fillOrderForm(name:string,country:string,city:string,creditcard:string,month:string,year:string){
  27 |        
  28 |         await this.name.fill(name)
  29 |         await this.country.fill(country)    
  30 |         await this.city.fill(city)
> 31 |         await this.creditcard.fill((creditcard),{ timeout: 50000 })
     |                               ^ Error: locator.fill: value: expected string, got number
  32 |         await this.month.fill((month), { timeout: 50000 })
  33 |         await this.year.fill((year), { timeout: 50000 })
  34 |     }                       
  35 | 
  36 |     
  37 |     async clickPurchaseBtn(){
  38 |         await this.purchasebtn.click()
  39 |     }
  40 | 
  41 | 
  42 | }
  43 |     
```