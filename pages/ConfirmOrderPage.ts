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

    constructor(page:Page){
        this.page=page
        const orderModal = page.locator('.modal-body')
        this.name=orderModal.locator('#name') 
        this.country=orderModal.locator('#country')
        this.city=orderModal.locator('#city')
        this.creditcard=orderModal.locator('#card')
        this.month=orderModal.locator('#month')
        this.year=orderModal.locator('#year')
        this.purchasebtn=orderModal.getByRole('button',{name:'Purchase'})
    }           

    async fillOrderForm(name:string,country:string,city:string,creditcard:string,month:string,year:string){
       
        await this.name.fill(name)
        await this.country.fill(country)    
        await this.city.fill(city)
        await this.creditcard.fill(String(creditcard))
        await this.month.fill(String(month))
        await this.year.fill(String(year))
    }                       

    
    async clickPurchaseBtn(){
        await this.purchasebtn.click()
    }


}
    