const puppeteer = require('puppeteer');
    
    puppeteer
      .launch({
        executablePath: '/usr/bin/chromium-browser',
        args: ['--no-sandbox', '--disable-dev-shm-usage'],
      })
      .then(async (browser) => {
          const page = await browser.newPage();
          await page.goto('https://baidu.com');
          await page.screenshot({path: 'google.png'});
          await browser.close();
      });
