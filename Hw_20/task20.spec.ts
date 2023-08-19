import { Builder, By, WebDriver } from "selenium-webdriver";
import { TicketsPage } from "./pages/tickets.page";
import { HotelsPage } from "./pages/hotels.page";

describe("Test suite", () => {
    test("Check tickets", async () => {
    let driver: WebDriver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    await driver.get("https://www.aviasales.by/");
    const ticketsPage = new TicketsPage(driver)
    expect(await ticketsPage.getsearchButtonText()).toBe("Найти билеты")
    await driver.sleep(1000);
    await driver.quit()
    })
    test("Check tickets 2", async () => {
        let driver: WebDriver = await new Builder().forBrowser("chrome").build();
        await driver.manage().window().maximize();
        await driver.get("https://www.aviasales.by/");
        const ticketsPage = new TicketsPage(driver)
        const hotelsPage = new HotelsPage(driver)
        await ticketsPage.clickHotelsTab()
        expect(await hotelsPage.getsearchButtonText()).toBe("Найти отели")
        await driver.sleep(1000);
        await driver.quit()
    })
    
})