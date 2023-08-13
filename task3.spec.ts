
//describe("Test suite", () => {
    // test("Test 1", async () => {
    //         let driver: WebDriver = await new Builder().forBrowser("chrome").build();
    //         await driver.manage().window().maximize()
    //         await driver.get("https://www.aviasales.by");
    //         await driver.switchTo().newWindow("tab");
    //         await driver.get("https://www.aviasales.by/?params=1");
    //         const handles = (await driver.getAllWindowHandles())
    //         await driver.switchTo().window(handles[0])
    //         await driver.sleep(1000);
    //         expect(await driver.getTitle()).toBe('Дешёвые авиабилеты онлайн, цены. Поиск билетов на самолёт и сравнение цен — Aviasales.by')
    //         await driver.quit();
    //    })

//        test("Test 2", async () => {
//         let driver: WebDriver = await new Builder().forBrowser("chrome").build();
//         await driver.manage().window().maximize()
//         await driver.get("https://www.aviasales.by");
//         const origininput = await driver.findElement(By.id("origin"));
//         origininput.sendKeys("Minsk")
//         const destinationInput = await driver.findElement(By.id("destination"))
//         destinationInput.sendKeys("Paris");
//         const searchButton = await driver.findElement(By.tagName("button"))
//         expect(await searchButton.isDisplayed()).toBeTruthy()
//         expect(await searchButton.isEnabled()).toBeTruthy();
//         await driver.sleep(3000);
//         await driver.quit()
//    })
//})