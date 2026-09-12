const {test} =require('@playwright/test');

test('First Playwiright test',async ({browser, page})=>
{
    
    const context = await browser.newContext();
    const page = await browser.newPage();
    await page.goto('https://www.rahulshettyacademy.com/AutomationPractice/');

});
test('Page Playwiright test',async ({page})=>
{
    
    // const context = await browser.newContext();
    // const page = await browser.newPage();

    await page.goto('https://www.rahulshettyacademy.com/AutomationPractice/');
    
});
