import {Builder, By , until} from 'selenium-webdriver'; 
import assert from 'assert'; 

const environment = process.argv[2] || 'local'; // Get the environment from command line arguments 

const appURL = environment === 'local' ? 'http://testweb-server:5173' : 'http://webServer:5173'; // Adjust the URL to your frontend app 

const seleniumURL = environment === 'local' ? 'http://localhost:4444/wd/hub' : 'http://selenium:4444/wd/hub' ; 

describe('Calculator UI Test', function() {
    // with mocha , we got access to before and after hooks 
    this.timeout(30000); // Set a timeout for the tests 
    let driver;

    before( async function() {
        driver = await new Builder().forBrowser('chrome').usingServer(seleniumURL).build();

    })

    after(async function() {
        await driver.quit();
    }) 

    it('should be able to add 2 numbers through UI', async function() {


        console.log (`navigating to the app ${appURL}`);
        await driver.get(appURL); // Adjust the URL to your frontend app



        
        const num1Input = await driver.findElement(By.name('num1'));
        const num2Input = await driver.findElement(By.name('num2')); 
        
        await num1Input.sendKeys('5'); // Enter first number 
        await num2Input.sendKeys('10'); // Enter second number 

        const submitButton = await driver.findElement(By.css('button[type="submit"]')); 
        await submitButton.click(); // Click the submit button 

        await driver.wait(until.elementLocated(By.id('finalResult')), 20000); // Wait for the result element to be located 
        const resultElement = await driver.findElement(By.id('finalResult')); 

        assert.strictEqual(await resultElement.getText(), '15', 'The result should be 15'); // Verify the result 
        })
})
