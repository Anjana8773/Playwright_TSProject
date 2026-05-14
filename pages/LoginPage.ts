import {Page,Locator} from '@playwright/test'

export class LoginPage{

    page:Page
    loginlink:Locator
    username:Locator
    password:Locator
    loginbtn:Locator
    logoutbtn:Locator

    constructor(page:Page){
        this.page=page
        this.loginlink=page.locator('#login2')
        this.username=page.locator('#loginusername')
        this.password=page.locator('#loginpassword')
        this.loginbtn=page.getByRole('button',{name:'Log in'})
        this.logoutbtn=page.locator('#logout2')

    }

    async goto(){
        await this.page.goto("https://www.demoblaze.com/index.html")
        return this

    }
    

    async clickLoginLink(){
        await this.loginlink.click()
    }

    async userLoginForm(username:string,password:string){
       
        await this.username.fill(username)
        await this.password.fill(password)
    }

    async clicksubmitbtn(){
        await this.loginbtn.click()
        return this
    }

    
    async clickLogoutbtn(){
        await this.logoutbtn.click()
        return this
    }
}
