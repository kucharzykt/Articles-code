const puppeteer = require('puppeteer'); // v22.0.0 or later

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1224,
            height: 1294
        })
    }
    {
        console.log(`\x1b[32m Navigating to URL \x1b[0m`);
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        startWaitingForEvents();
        await targetPage.goto('https://g4acf8ae112a0ca-sand03.adb.eu-frankfurt-1.oraclecloudapps.com/ords/r/parking_core/test/home?session=207249834635807');
        await Promise.all(promises);
        console.log(`\x1b[32m✔ Navigating to URL completed\x1b[0m`);
console.log();
    }
    {
        console.log(`\x1b[32m Click on the Application Logo\x1b[0m`);
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Test[role=\\"link\\"]) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('div.t-Header-logo span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"t_Header\\"]/div[1]/div[2]/a/span)'),
            targetPage.locator(':scope >>> div.t-Header-logo span')
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click({
              offset: {
                x: 11,
                y: 9,
              },
            });
        await Promise.all(promises);
        console.log(`\x1b[32m✔ Click on the Application Logo completed\x1b[0m`);
console.log();
    }
    {
       console.log(`\x1b[32m Waiting for P1_DEVELOPMENT value Germany\x1b[0m`);
        const targetPage = page;
        await waitForElement({
            type: 'waitForElement',
            target: 'main',
            selectors: [
                'aria/Development Country',
                '#P1_DEVELOPMENT',
                'xpath///*[@id="P1_DEVELOPMENT"]',
                'pierce/#P1_DEVELOPMENT',
                'text/Germany'
            ],
            attributes: {
                value: 'Germany'
            }
        }, targetPage, timeout);
        console.log(`\x1b[32m✔ Waiting for P1_DEVELOPMENT value Germany completed\x1b[0m`);
console.log();
    }
    {
        console.log(`\x1b[32m Click on the Development Country field\x1b[0m`);
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.t-Region-buttons--bottom'),
            targetPage.locator('::-p-xpath(//*[@id=\\"Development\\"]/div[2]/div[3])'),
            targetPage.locator(':scope >>> div.t-Region-buttons--bottom')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 115,
                y: 23,
              },
            });
        console.log(`\x1b[32m✔ Click on the Development Country field completed\x1b[0m`);
console.log();
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Development Country)'),
            targetPage.locator('#P1_DEVELOPMENT'),
            targetPage.locator('::-p-xpath(//*[@id=\\"P1_DEVELOPMENT\\"])'),
            targetPage.locator(':scope >>> #P1_DEVELOPMENT'),
            targetPage.locator('::-p-text(Germany)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 85,
                y: 33,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Development Country)'),
            targetPage.locator('#P1_DEVELOPMENT'),
            targetPage.locator('::-p-xpath(//*[@id=\\"P1_DEVELOPMENT\\"])'),
            targetPage.locator(':scope >>> #P1_DEVELOPMENT'),
            targetPage.locator('::-p-text(Germany)')
        ])
            .setTimeout(timeout)
            .click({
              delay: 800.1999999880791,
              offset: {
                x: 10,
                y: 31,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Development Country)'),
            targetPage.locator('#P1_DEVELOPMENT'),
            targetPage.locator('::-p-xpath(//*[@id=\\"P1_DEVELOPMENT\\"])'),
            targetPage.locator(':scope >>> #P1_DEVELOPMENT'),
            targetPage.locator('::-p-text(Germany)')
        ])
            .setTimeout(timeout)
            .fill('P');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('p');
    }
    {
        console.log(`\x1b[32m Changing value to Poland\x1b[0m`);
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Development Country)'),
            targetPage.locator('#P1_DEVELOPMENT'),
            targetPage.locator('::-p-xpath(//*[@id=\\"P1_DEVELOPMENT\\"])'),
            targetPage.locator(':scope >>> #P1_DEVELOPMENT'),
            targetPage.locator('::-p-text(Germany)')
        ])
            .setTimeout(timeout)
            .fill('Poland');
        console.log(`\x1b[32m✔ Changing value to Poland completed\x1b[0m`);
console.log();
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.t-Region-buttons--bottom'),
            targetPage.locator('::-p-xpath(//*[@id=\\"Development\\"]/div[2]/div[3])'),
            targetPage.locator(':scope >>> div.t-Region-buttons--bottom')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 130,
                y: 2,
              },
            });
    }
    {
        console.log(`\x1b[32m Click on the Save button\x1b[0m`);
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Save) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('div.t-Region-buttons--bottom span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"Save\\"]/span)'),
            targetPage.locator(':scope >>> div.t-Region-buttons--bottom span'),
            targetPage.locator('::-p-text(Save)')
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click({
              offset: {
                x: 15.171875,
                y: 6,
              },
            });
        await Promise.all(promises);
        console.log(`\x1b[32m✔ Click on the Save button completed\x1b[0m`);
console.log();
    }
    {
        console.log(`\x1b[32m Navigate to Dept Report\x1b[0m`);
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Dept Report)'),
            targetPage.locator('#t_TreeNav_1 a'),
            targetPage.locator('::-p-xpath(//*[@id=\\"t_TreeNav_1\\"]/div[2]/a)'),
            targetPage.locator(':scope >>> #t_TreeNav_1 a'),
            targetPage.locator('::-p-text(Dept Report)')
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click({
              offset: {
                x: 25,
                y: 10,
              },
            });
        await Promise.all(promises);
        console.log(`\x1b[32m✔ Navigate to Dept Report completed\x1b[0m`);
console.log();
    }
    {
        console.log(`\x1b[32m Waiting for Dept Report\x1b[0m`);
        const timeout = 5000;
        const targetPage = page;
        await waitForElement({
            type: 'waitForElement',
            timeout: 5000,
            target: 'main',
            selectors: [
                'aria/Dept Report[role="heading"]',
                'div.t-BreadcrumbRegion-breadcrumb h1',
                'xpath///*[@id="R35139138525581409"]/div[1]/div[2]/div[1]/ul/li/h1',
                'pierce/div.t-BreadcrumbRegion-breadcrumb h1'
            ]
        }, targetPage, timeout);
        console.log(`\x1b[32m✔ Waiting for Dept Report completed\x1b[0m`);
console.log();
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#main'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main\\"])'),
            targetPage.locator(':scope >>> #main')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 131,
                y: 289,
              },
            });
    }
    {
        console.log(`\x1b[32m Click on the Row Edit link\x1b[0m`);
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('tr:nth-of-type(2) span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"35135576033581393_orig\\"]/tbody/tr[2]/td[1]/a/span)'),
            targetPage.locator(':scope >>> tr:nth-of-type(2) span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 5.5,
                y: 5,
              },
            });
        console.log(`\x1b[32m✔ Click on the Row Edit link completed\x1b[0m`);
console.log();
    }
    {
        console.log(`\x1b[32m Waiting for Dept Detail\x1b[0m`);
        const timeout = 5000;
        const targetPage = page;
        await waitForElement({
            type: 'waitForElement',
            timeout: 5000,
            target: 'main',
            selectors: [
                'aria/Dept Detail[role="heading"]',
                '#ui-id-1',
                'xpath///*[@id="ui-id-1"]',
                'pierce/#ui-id-1',
                'text/Dept Detail'
            ]
        }, targetPage, timeout);
        console.log(`\x1b[32m✔ Waiting for Dept Detail completed\x1b[0m`);
console.log();
    }
    {
        console.log(`\x1b[32m Click on the Country field\x1b[0m`);
        const targetPage = page;
        let frame = targetPage.mainFrame();
        frame = frame.childFrames()[0];
        await puppeteer.Locator.race([
            frame.locator('::-p-aria(Country)'),
            frame.locator('#P5_COUNTRY'),
            frame.locator('::-p-xpath(//*[@id=\\"P5_COUNTRY\\"])'),
            frame.locator(':scope >>> #P5_COUNTRY'),
            frame.locator('::-p-text(Poland)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 77,
                y: 29,
              },
            });
        console.log(`\x1b[32m✔ Click on the Country field completed\x1b[0m`);
console.log();
    }
    {
        const targetPage = page;
        let frame = targetPage.mainFrame();
        frame = frame.childFrames()[0];
        await puppeteer.Locator.race([
            frame.locator('::-p-aria(Country)'),
            frame.locator('#P5_COUNTRY'),
            frame.locator('::-p-xpath(//*[@id=\\"P5_COUNTRY\\"])'),
            frame.locator(':scope >>> #P5_COUNTRY'),
            frame.locator('::-p-text(Poland)')
        ])
            .setTimeout(timeout)
            .click({
              delay: 423.9000000357628,
              offset: {
                x: 3,
                y: 32,
              },
            });
    }
    {
       console.log(`\x1b[32m Change the Country field to Germany\x1b[0m`);
        const targetPage = page;
        let frame = targetPage.mainFrame();
        frame = frame.childFrames()[0];
        await puppeteer.Locator.race([
            frame.locator('::-p-aria(Country)'),
            frame.locator('#P5_COUNTRY'),
            frame.locator('::-p-xpath(//*[@id=\\"P5_COUNTRY\\"])'),
            frame.locator(':scope >>> #P5_COUNTRY'),
            frame.locator('::-p-text(Poland)')
        ])
            .setTimeout(timeout)
            .fill('Germany');
        console.log(`\x1b[32m✔ Change the Country field to Germany completed\x1b[0m`);
console.log();
    }
    {
        const targetPage = page;
        let frame = targetPage.mainFrame();
        frame = frame.childFrames()[0];
        await puppeteer.Locator.race([
            frame.locator('#R35130679702581382 > div'),
            frame.locator('::-p-xpath(//*[@id=\\"R35130679702581382\\"]/div)'),
            frame.locator(':scope >>> #R35130679702581382 > div'),
            frame.locator('::-p-text(CancelDelete\n)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 272,
                y: 12,
              },
            });
    }
    {
        console.log(`\x1b[32m Click on the Apply Changes button\x1b[0m`);
        const targetPage = page;
        let frame = targetPage.mainFrame();
        frame = frame.childFrames()[0];
        await puppeteer.Locator.race([
            frame.locator('::-p-aria(Apply Changes)'),
            frame.locator('#B35132821243581388'),
            frame.locator('::-p-xpath(//*[@id=\\"B35132821243581388\\"])'),
            frame.locator(':scope >>> #B35132821243581388')
        ])
            .setTimeout(timeout)
            .click({
              delay: 357,
              offset: {
                x: 62.96875,
                y: 6,
              },
            });
        console.log(`\x1b[32m✔ Click on the Apply Changes button completed\x1b[0m`);
console.log();
    }
    {
        console.log(`\x1b[32m Waiting for Dept Report\x1b[0m`);
        const timeout = 5000;
        const targetPage = page;
        await waitForElement({
            type: 'waitForElement',
            timeout: 5000,
            target: 'main',
            selectors: [
                'aria/Dept Report[role="heading"]',
                'div.t-BreadcrumbRegion-breadcrumb h1',
                'xpath///*[@id="R35139138525581409"]/div[1]/div[2]/div[1]/ul/li/h1',
                'pierce/div.t-BreadcrumbRegion-breadcrumb h1'
            ]
        }, targetPage, timeout);
        console.log(`\x1b[32m✔ Waiting for Dept Report completed\x1b[0m`);
console.log();
    }
    {
       console.log(`\x1b[32m Waiting for Home navigation link\x1b[0m`);
        const timeout = 5000;
        const targetPage = page;
        await waitForElement({
            type: 'waitForElement',
            timeout: 5000,
            target: 'main',
            selectors: [
                'aria/Home',
                '#t_TreeNav_0 a',
                'xpath///*[@id="t_TreeNav_0"]/div[2]/a',
                'pierce/#t_TreeNav_0 a',
                'text/Home'
            ]
        }, targetPage, timeout);
        console.log(`\x1b[32m✔ Waiting for Home navigation link completed\x1b[0m`);
console.log();
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#main'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main\\"])'),
            targetPage.locator(':scope >>> #main')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 293,
                y: 315,
              },
            });
    }
    {
        console.log(`\x1b[32m Click on the Home navigation link\x1b[0m`);
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Home)'),
            targetPage.locator('#t_TreeNav_0 a'),
            targetPage.locator('::-p-xpath(//*[@id=\\"t_TreeNav_0\\"]/div[2]/a)'),
            targetPage.locator(':scope >>> #t_TreeNav_0 a'),
            targetPage.locator('::-p-text(Home)')
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click({
              offset: {
                x: 11,
                y: 9,
              },
            });
        await Promise.all(promises);
        console.log(`\x1b[32m✔ Click on the Home navigation link completed\x1b[0m`);
console.log();
    }
    {
      console.log(`\x1b[32m Waiting for P1_DEVELOPMENT value Germany\x1b[0m`);
        const targetPage = page;
        await waitForElement({
            type: 'waitForElement',
            target: 'main',
            selectors: [
                'aria/Development Country',
                '#P1_DEVELOPMENT',
                'xpath///*[@id="P1_DEVELOPMENT"]',
                'pierce/#P1_DEVELOPMENT',
                'text/Germany'
            ],
            attributes: {
                value: 'Germany'
            }
        }, targetPage, timeout);
        console.log(`\x1b[32m✔ Waiting for P1_DEVELOPMENT value Germany completed\x1b[0m`);
console.log();
    }

    await browser.close();

    async function waitForElement(step, frame, timeout) {
      const {
        count = 1,
        operator = '>=',
        visible = true,
        properties,
        attributes,
      } = step;
      const compFn = {
        '==': (a, b) => a === b,
        '>=': (a, b) => a >= b,
        '<=': (a, b) => a <= b,
      }[operator];
      await waitForFunction(async () => {
        const elements = await querySelectorsAll(step.selectors, frame);
        let result = compFn(elements.length, count);
        const elementsHandle = await frame.evaluateHandle((...elements) => {
          return elements;
        }, ...elements);
        await Promise.all(elements.map((element) => element.dispose()));
        if (result && (properties || attributes)) {
          result = await elementsHandle.evaluate(
            (elements, properties, attributes) => {
              for (const element of elements) {
                if (attributes) {
                  for (const [name, value] of Object.entries(attributes)) {
                    if (element.getAttribute(name) !== value) {
                      return false;
                    }
                  }
                }
                if (properties) {
                  if (!isDeepMatch(properties, element)) {
                    return false;
                  }
                }
              }
              return true;

              function isDeepMatch(a, b) {
                if (a === b) {
                  return true;
                }
                if ((a && !b) || (!a && b)) {
                  return false;
                }
                if (!(a instanceof Object) || !(b instanceof Object)) {
                  return false;
                }
                for (const [key, value] of Object.entries(a)) {
                  if (!isDeepMatch(value, b[key])) {
                    return false;
                  }
                }
                return true;
              }
            },
            properties,
            attributes
          );
        }
        await elementsHandle.dispose();
        return result === visible;
      }, timeout);
    }

    async function querySelectorsAll(selectors, frame) {
      for (const selector of selectors) {
        const result = await querySelectorAll(selector, frame);
        if (result.length) {
          return result;
        }
      }
      return [];
    }

    async function querySelectorAll(selector, frame) {
      if (!Array.isArray(selector)) {
        selector = [selector];
      }
      if (!selector.length) {
        throw new Error('Empty selector provided to querySelectorAll');
      }
      let elements = [];
      for (let i = 0; i < selector.length; i++) {
        const part = selector[i];
        if (i === 0) {
          elements = await frame.$$(part);
        } else {
          const tmpElements = elements;
          elements = [];
          for (const el of tmpElements) {
            elements.push(...(await el.$$(part)));
          }
        }
        if (elements.length === 0) {
          return [];
        }
        if (i < selector.length - 1) {
          const tmpElements = [];
          for (const el of elements) {
            const newEl = (await el.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
            if (newEl) {
              tmpElements.push(newEl);
            }
          }
          elements = tmpElements;
        }
      }
      return elements;
    }

    async function waitForFunction(fn, timeout) {
      let isActive = true;
      const timeoutId = setTimeout(() => {
        isActive = false;
      }, timeout);
      while (isActive) {
        const result = await fn();
        if (result) {
          clearTimeout(timeoutId);
          return;
        }
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      throw new Error('Timed out');
    }
})().catch(err => {
    console.error(err);
    process.exit(1);
});
