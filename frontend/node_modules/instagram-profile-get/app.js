const puppeteer = require('puppeteer-core');
const chromium = require('chrome-aws-lambda');

module.exports = async function(username) {
    try {
        const executablePath = await chromium.executablePath;
        const browser = await puppeteer.launch({args: chromium.args, executablePath});
        const page = await browser.newPage();
        await page.goto(`https://instagram.com/${username}`);
        const allUrls = await page.$$eval('a:first-child', assetLinks => assetLinks.map(link => link.href));
        await browser.close();
        const images = [];
        for(url of allUrls) {
            if(url.includes('https://www.instagram.com/p/')) {
                let imageId = url.slice(0, url.length-1).replace('https://www.instagram.com/p/','');
                images.push({
                    imageUrl: `https://www.instagram.com/p/${imageId}/media/?size=l`,
                    postUrl: `https://www.instagram.com/p/${imageId}/`,
                    imageId: imageId
                });
            }
        }
        return images;
    } catch(err) {
        throw err;
    }
};
