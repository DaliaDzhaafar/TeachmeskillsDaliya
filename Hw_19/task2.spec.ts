import { Builder, By, WebDriver } from "selenium-webdriver";
import { search } from "superagent";
import { Actions } from "selenium-webdriver"

describe("Test suite 5", () => {
    test("Test 1", async () => {
    let driver: WebDriver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize()
    await driver.get("https://www.onliner.by/");
    const lifestyle = await driver.findElement(By.xpath("//*[@id='widget-5-1']/div/a[1]"));
    await lifestyle.click()
    expect(await driver.getTitle()).toBe('Фоторепортаж «Лакацыя-2023»')
    await driver.sleep(1000);
    await driver.quit()
})
test("Test 2", async () => {
    let driver: WebDriver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize()
    await driver.get("https://www.onliner.by/");
    const Home= await driver.findElement(By.linkText("Дома и квартиры"));
    await Home.click()
    expect(await driver.getTitle()).toBe("Купить квартиру в Минске")
    await driver.sleep(1000);
    await driver.quit()
})
test("Test 3", async () => {
    let driver: WebDriver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize()
    await driver.get("https://www.onliner.by/");
    const search = await driver.findElement(By.css("#fast-search > form > input.fast-search__input"))
    search.sendKeys("iPhone")
    const iPhone = await driver.findElement(By.xpath('//*[@id="fast-search-modal"]/div/div/iframe'))
    await iPhone.click()
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
    const Price = await driver.findElement(By.xpath('//*[@id="search-filter"]/div/div[2]/label[2]/span'))
    Price.click()
    const List = await driver.findElement(By.xpath('//*[@id="search-filter-results"]/div[1]/div/div[1]/div[1]/div'))
    expect(await List.isEnabled()).toBeTruthy();
    await driver.sleep(1000);
    await driver.quit()
})
test("Test 5", async () => {
    let driver: WebDriver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize()
    await driver.get("https://www.onliner.by/");
    const search = await driver.findElement(By.css("#fast-search > form > input.fast-search__input"))
    search.sendKeys("iPhone")
    const search2 = await driver.findElement(By.xpath('//*[@id="fast-search-modal"]'))
    await search2.click()
    expect(await driver.getCurrentUrl()).toBe("https://www.onliner.by/")
    await driver.sleep(3000);
    await driver.quit()
})
})
