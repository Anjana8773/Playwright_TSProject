import {Page,Locator} from '@playwright/test'

export class SignUpPage{

    page:Page
    signuplink:Locator
    username:Locator
    password:Locator
    signupbtn:Locator
    closebtn:Locator
    

    constructor(page:Page){
        this.page=page
        this.signuplink=page.locator('#signin2')
        this.username=page.locator('#sign-username')
        this.password=page.locator('#sign-password')
        this.signupbtn=page.getByRole('button',{name:'Sign up'})
        this.closebtn=page.getByRole('button',{name:'Close'}).nth(1)

    }

  


    async clickSignUpLink(){
        await this.signuplink.click()
    }

    async userRegistrationform(username:string,password:string){
       
        await this.username.fill(username)
        await this.password.fill(password)
    }

    async clicksubmitbtn(){
        await this.signupbtn.click()
        return this
    }

    async clickclosebtn(){
        await this.closebtn.click()
        return this
    }

    async clickLoginbtn(){
        await this.signuplink.click()
    }



}