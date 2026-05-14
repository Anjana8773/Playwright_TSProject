import {Page,Locator} from '@playwright/test'

export class ConfirmOrderPage{

    page:Page
    name:Locator
    country:Locator
    city:Locator
    creditcard:Locator
    month:Locator
    year:Locator
    purchasebtn:Locator  
    okbtn:Locator   

    constructor(page:Page){

        this.page=page
        
        this.name=page.locator('#name') 
        this.country=page.locator('#country')
        this.city=page.locator('#city')
        this.creditcard=page.locator('#card')
        this.month=page.locator('#month')
        this.year=page.locator('#year')
        this.purchasebtn=page.getByRole('button', { name: 'Purchase' })
        this.okbtn=page.getByRole('button', { name: 'OK' })
    }           

    async fillOrderForm(name:string,country:string,city:string,creditcard:string,month:string,year:string){
       
        await this.name.fill(name)
        await this.country.fill(country)    
        await this.city.fill(city)
        await this.creditcard.fill(creditcard)
        await this.month.fill(month)
        await this.year.fill(year)
       
    }                       

    
    async clickPurchaseBtn(){
        await this.purchasebtn.click()
    }

    
    async clickOkBtn(){
        await this.okbtn.click()
    }


}
    