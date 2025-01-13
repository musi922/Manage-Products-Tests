import { expect } from '@wdio/globals'
import { browser,  $} from '@wdio/globals'

describe('Main Page Tests', () => {
    before(async () => {
        await browser.maximizeWindow();
    });
    it('should open the main page', async() => {
        
        await browser.url('http://localhost:8080/index.html')
        await browser.pause(3000)
    });
    it('should check the title of the page', async () => {        
        const title = await $('.manageProduct')
        await title.waitForExist({ timeout: 10000 })
        await title.waitForDisplayed({ timeout: 10000 })
        
        const titleText = await title.getText()
        console.log('Found title text:', titleText)
        expect(titleText).toBe('Manage Products')
    });
    it('should click on any product in the table', async() => {
        let table = await $('.ProductsTable')
        await table.waitForDisplayed({ timeout: 10000 })

        const productRow = await table.$('tr:nth-child(2)')
        await productRow.waitForDisplayed({ timeout: 10000 })
        await productRow.click()

        await browser.pause(3000)
    });
    
    it('should verify if we are on details page', async() => {
        let title = await $('.detailsProduct')
        await title.waitForDisplayed({ timeout: 10000 })

        const titleText = await title.getText()
        expect(titleText).toBe('Product Details')
        await browser.pause(3000)
    });
    it('should click on back button', async() => {
        let backBtn = await $('button=Back')
        await backBtn.waitForDisplayed({ timeout: 10000 })
        await backBtn.click()
        await browser.pause(3000)
        
    });
    it('should should click on Cart button', async() => {
        let cartBtn = await $('button=CART')
        await cartBtn.waitForDisplayed({ timeout: 10000 })
        await cartBtn.click()
        await browser.pause(3000)
        let cartTittle = await $('.cartTitle')
        await cartTittle.waitForDisplayed({ timeout: 10000 })
        const titleText = await cartTittle.getText()
        expect(titleText).toBe('This is the list of your shopping cart')
        await browser.pause(3000)
    });
    it('should click on Nav Back Button', async() => {
        let backBtn = $('.sapMBtnBack')
        await  backBtn.waitForDisplayed({ timeout: 10000 })
        await backBtn.click()
        await browser.pause(3000)
        
    });
    it('should click on Add to Cart button', async() => {
        let table = await $('.ProductsTable')
        await table.waitForDisplayed({ timeout: 10000 })

        const productRow = await table.$('tr:nth-child(2)')
        await productRow.waitForDisplayed({ timeout: 10000 })
        await productRow.click()

        let title = await $('.detailsProduct')
        await title.waitForDisplayed({ timeout: 10000 })

        const titleText = await title.getText()
        expect(titleText).toBe('Product Details')
        await browser.pause(3000)

        let addToCart = $('button=Add To CART')
        await  addToCart.waitForDisplayed({ timeout: 10000 })
        await addToCart.click()
        await browser.pause(3000)
        let confirmAddToCart = $('button=Add')
        await confirmAddToCart.waitForDisplayed({ timeout: 10000 })
        await confirmAddToCart.click()
        await browser.pause(3000)
        let backBtn = $('.sapMBtnBack')
        await  backBtn.waitForDisplayed({ timeout: 10000 })
        await backBtn.click()
        await browser.pause(3000)
        
    });3
    it('should edit a product', async() => {
        let table = await $('.ProductsTable')
        await table.waitForDisplayed({ timeout: 10000 })

        const productRow = await table.$('tr:nth-child(2)')
        await productRow.waitForDisplayed({ timeout: 10000 })

        let editButton = productRow.$('.edit')
        await editButton.waitForDisplayed({ timeout: 10000 })  
        await editButton.click()
        await browser.pause(3000)

        let ratingInput = $('input[name="rating"]')
        await ratingInput.waitForDisplayed({ timeout: 10000 })
        await browser.pause(3000)
        await ratingInput.clearValue()
        await ratingInput.setValue('3')
        await browser.pause(3000)
        let saveButton = $('button=Save')
        await saveButton.waitForDisplayed({ timeout: 10000 })
        await saveButton.click()
        await browser.pause(3000)
        let successBtn = $('button=OK')
        await successBtn.waitForDisplayed({ timeout: 10000 })
        await successBtn.click()
        await browser.pause(3000)
        
        
    });
    
    it('should Delete a product', async() => {
        let table = await $('.ProductsTable')
        await table.waitForDisplayed({ timeout: 10000 })

        const productRow = await table.$('tr:nth-child(2)')
        await productRow.waitForDisplayed({ timeout: 10000 })

        let delteButton = productRow.$('.delete')
        await delteButton.waitForDisplayed({ timeout: 10000 })  
        await delteButton.click()
        await browser.pause(3000)
        let confirmDelete = $('button=OK')
        await confirmDelete.waitForDisplayed({ timeout: 10000 })
        await confirmDelete.click()
        await browser.pause(3000)
        let successBtn = $('button=OK')
        await successBtn.waitForDisplayed({ timeout: 10000 })
        await successBtn.click()
        await browser.pause(3000)
        
    });
});



