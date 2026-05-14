# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: userregistration.spec.ts >> TC#1 User registration success
- Location: tests\userregistration.spec.ts:11:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Sign up successful."
Received: "This user already exist."
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | import { POManager } from '../pages/POManager'  
  3  | import signupcredentials from '../utils/signupcredentials.json'  
  4  |    
  5  | 
  6  | test.beforeEach(async({page})=>{
  7  |     await page.goto('https://www.demoblaze.com/index.html')
  8  | })
  9  | 
  10 | 
  11 | test('TC#1 User registration success',async({page})=>{
  12 |     const pomanager=new POManager(page)
  13 |     const signup=pomanager.getSignUp()
  14 |     const user=signupcredentials.username
  15 |     const password=signupcredentials.password
  16 | 
  17 |     await signup.clickSignUpLink()
  18 |     await signup.userRegistrationform(user,password)
  19 |     await signup.clicksubmitbtn()
  20 |     page.on('dialog',async dialog=>{
> 21 |         expect(dialog.message()).toBe('Sign up successful.')
     |                                  ^ Error: expect(received).toBe(expected) // Object.is equality
  22 |           await  dialog.accept()
  23 |     }) 
  24 | 
  25 | })
  26 | 
  27 | 
```