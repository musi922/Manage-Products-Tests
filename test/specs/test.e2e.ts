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
    
    
    
});



