# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Main.spec.ts >> TC#1 User registration success
- Location: tests\Main.spec.ts:12:5

# Error details

```
Error: expect(locator).toBeHidden() failed

Locator:  locator('#signInModalLabel')
Expected: hidden
Received: visible
Timeout:  5000ms

Call log:
  - Expect "toBeHidden" with timeout 5000ms
  - waiting for locator('#signInModalLabel')
    14 × locator resolved to <h5 class="modal-title" id="signInModalLabel">Sign up</h5>
       - unexpected value "visible"

```

```yaml
- heading "Sign up" [level=5]
```

# Test source

```ts
  1   | import {test,expect} from '@playwright/test'
  2   | import { POManager } from '../pages/POManager'  
  3   | import { getCellData } from '../utils/purchaseinfo'    
  4   | 
  5   | 
  6   | import signupcredentials from '../utils/signupcredentials.json'  //assert { type: 'json' }
  7   | import usercredentials from '../utils/usercredentials.json'      //assert { type: 'json' }
  8   | 
  9   | 
  10  | 
  11  | 
  12  | test('TC#1 User registration success',async({page})=>{
  13  |     const pomanager=new POManager(page)
  14  |     const signup=pomanager.getSignUp()
  15  |     const user=signupcredentials.username
  16  |     const password=signupcredentials.password
  17  |     await pomanager.goto()
  18  |     await signup.clickSignUpLink()
  19  |     await signup.userRegistrationform(user,password)
  20  |     await signup.clicksubmitbtn()
  21  |     await page.on('dialog',async dialog=>{
  22  |         expect(dialog.message()).toBe('Sign up successful.')
  23  |     await  dialog.accept()
  24  | 
  25  |     })  
> 26  |      await expect(page.locator('#signInModalLabel')).toBeHidden()
      |                                                      ^ Error: expect(locator).toBeHidden() failed
  27  | 
  28  | })
  29  | 
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
  40  |      await expect(page.locator('.modal-content')).toBeHidden()
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
  120 |      const user=signupcredentials.username
  121 |      const password=signupcredentials.password
  122 | 
  123 |      await loginpage.goto()
  124 |      await loginpage.clickLoginLink()
  125 |      await loginpage.userLoginForm(user,password)
  126 | 
```