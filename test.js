const puppeteer = require('puppeteer');
    
    puppeteer
      .launch({
        executablePath: '/usr/bin/chromium-browser',
        args: ['--no-sandbox', '--disable-dev-shm-usage'],
      })
      .then(async (browser) => {
        // your code
      });
