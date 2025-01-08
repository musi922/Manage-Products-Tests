import { expect } from '@wdio/globals'
import { browser,  $} from '@wdio/globals'

describe('Main Page Tests', () => {
    it('should open the main page', async() => {
        await browser.url('http://localhost:8080/index.html')
        await browser.pause(10000)
    });
    
    
});



