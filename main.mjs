import puppeteer from 'puppeteer';

async function scrapeFacebook() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://web.facebook.com', { waitUntil: 'networkidle2' });

    // Enter your username and password
    await page.type('#email', 'your email');
    await page.type('#pass', 'your password');
    await page.click('button[name="login"]');

    // Wait for navigation
    await page.waitForNavigation({ waitUntil: 'networkidle2' });

    // Now you are logged in and can scrape Facebook as needed
    const isLoggedIn = await page.evaluate(() => {
        return document.querySelector('[data-click="profile_icon"]') !== null;
    });
    console.log(isLoggedIn);
    if (isLoggedIn) {
        console.log('Login successful!');

        // Navigate to a specific Facebook group page

        // Now you are on the group page and can scrape it as needed
        // Add your scraping logic here
    } else {
        await page.goto('https://www.facebook.com/groups/pereinerecrute', { waitUntil: 'networkidle2' });
        console.log('Login failed. Please check your credentials.');
    }
    // Add your scraping logic here

    // Don't forget to close the browser
    // await browser.close();
}

scrapeFacebook();
