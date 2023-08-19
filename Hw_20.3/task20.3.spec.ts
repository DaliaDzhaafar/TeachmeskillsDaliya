import { Builder, By, WebDriver } from "selenium-webdriver";
import { search } from "superagent";
import { Actions } from "selenium-webdriver"
import { MainPage } from "./main.page";

describe("Test suite 5", () => {
    test("Test 1", async () => {
    let driver: WebDriver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize()
    await driver.get("https://www.onliner.by/");
    const mainPage = new MainPage(driver)
    await mainPage.clicklifestyle()
    expect(await driver.getTitle()).toBe('Фоторепортаж «Лакацыя-2023»')
    await driver.sleep(1000);
    await driver.quit()
})
test("Test 2", async () => {
    let driver: WebDriver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize()
    await driver.get("https://www.onliner.by/");
    const mainPage = new MainPage(driver)
    await mainPage.clickHome()
    expect(await driver.getTitle()).toBe("Купить квартиру в Минске")
    await driver.sleep(1000);
    await driver.quit()
})
test("Test 3", async () => {
    let driver: WebDriver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize()
    await driver.get("https://www.onliner.by/");
    const mainPage = new MainPage(driver)
    await mainPage.clickSearchTab()
    await mainPage.clickPhonebutton()
    expect(await driver.getTitle()).toBe("Onlíner")
    await driver.sleep(3000);
    await driver.quit()
})
test("Test 4", async () => {
    let driver: WebDriver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize()
    await driver.get("https://www.onliner.by/");
    const Home= await driver.findElement(By.linkText("Дома и квартиры"));
    await Home.click()
    const mainPage = new MainPage(driver)
    await mainPage.clickPrice()
    await mainPage.isEnabled()
    await driver.sleep(1000);
    await driver.quit()
})
test("Test 5", async () => {
    let driver: WebDriver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize()
    await driver.get("https://www.onliner.by/");
    const mainPage = new MainPage(driver)
    await mainPage.clickSearchTab()
    await mainPage.clickPhonebutton()
    await mainPage.Search2Click()
    expect(await driver.getCurrentUrl()).toBe("https://www.onliner.by/")
    await driver.sleep(3000);
    await driver.quit()
})
})
//