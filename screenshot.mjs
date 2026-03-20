import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:4173', { waitUntil: 'networkidle0', timeout: 15000 });
await new Promise(r => setTimeout(r, 2000));

// Check positions
const layout = await page.evaluate(() => {
  const sidebar = document.querySelector('aside');
  const header = document.querySelector('header');
  const contentDiv = header?.parentElement;
  return {
    sidebar: sidebar ? { left: sidebar.getBoundingClientRect().left, right: sidebar.getBoundingClientRect().right } : null,
    header: header ? { left: header.getBoundingClientRect().left, right: header.getBoundingClientRect().right } : null,
    contentDiv: contentDiv ? { left: contentDiv.getBoundingClientRect().left, marginLeft: getComputedStyle(contentDiv).marginLeft } : null,
  };
});
console.log('Sidebar right edge:', layout.sidebar?.right);
console.log('Header left edge:', layout.header?.left);
console.log('Content marginLeft:', layout.contentDiv?.marginLeft);

// Top area screenshot
await page.screenshot({ path: 'layout-check.png', clip: { x: 0, y: 0, width: 1440, height: 120 } });
console.log('Screenshot saved');

await browser.close();
