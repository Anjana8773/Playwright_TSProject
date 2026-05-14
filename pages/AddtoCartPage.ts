import {Page,Locator} from '@playwright/test'

export class AddtoCartPage{

    page:Page
    addtocartbtn:Locator
    cartlink:Locator
    placeorderbtn:Locator   

    constructor(page:Page){
        this.page=page
        this.addtocartbtn=page.getByRole('link',{name:'Add to cart'})
        this.cartlink=page.locator('#cartur')
        this.placeorderbtn=page.getByRole('button',{name:'Place Order'})
    }       

    async clickAddtoCartBtn(){
        await this.addtocartbtn.click()
    }   

    async clickCartLink(){
        await this.cartlink.click()
    }   
    async clickPlaceOrderBtn(){
        await this.placeorderbtn.click()
    }


}