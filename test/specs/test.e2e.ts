import { expect } from '@wdio/globals'
import { browser,  $} from '@wdio/globals'

describe('Main Page Tests', () => {
    it('should open the main page', async() => {
        await browser.url('http://localhost:8080/index.html')
        await browser.pause(5000)
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

        await browser.pause(8000)
    });
    
    it('should verify if we are on details page', async() => {
        let title = await $('.detailsProduct')
        await title.waitForDisplayed({ timeout: 10000 })

        const titleText = await title.getText()
        expect(titleText).toBe('Product Details')
        await browser.pause(5000)
    });
    it('should click on back button', async() => {
        let backBtn = await $('button=Back')
        await backBtn.waitForDisplayed({ timeout: 10000 })
        await backBtn.click()
        await browser.pause(8000)
        
    });
    
    
    
    
    
});



