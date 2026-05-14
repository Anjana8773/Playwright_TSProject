import {Page,Locator} from '@playwright/test'
import { LoginPage } from './LoginPage'
import { SignUpPage } from './SignUpPage'
import { AddtoCartPage } from './AddtoCartPage'
import { ConfirmOrderPage } from './ConfirmOrderPage' 



export class POManager {
  
  page: Page
  loginPage: LoginPage
  signupPage: SignUpPage

  constructor(page:Page) {
    this.page = page
    this.loginPage = new LoginPage(page)
    this.signupPage = new SignUpPage(page)
  }

  getLogin() {
    return this.loginPage
  }

  getSignUp() {
    return this.signupPage
  }

    async goto(){
        await this.page.goto("https://www.demoblaze.com/index.html")
        return this

    }

    getAddtoCartPage(){
        return new AddtoCartPage(this.page)
    }

    getConfirmOrderPage(){
        return new ConfirmOrderPage(this.page)
    }
}