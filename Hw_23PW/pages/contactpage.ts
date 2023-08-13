import { Locator, Page } from "@playwright/test"
import { MainPage } from "./mainpage";

export class ContactPage extends MainPage {
    private readonly Contactphone: Locator;
    private readonly Mappage: Locator;
    constructor(page:Page) {
        super(page);
        this.Contactphone = page.getByText("+7 (495) 988-2090")
        this.Mappage = page.locator('//*[@id="519cf2d76026a1730b013809"]/div[2]/p[4]/a[1]')
    }
    async openWebsite3(page: Page) : Promise<void> {
        await page.goto("https://3dnews.ru/contact")
    }
    async Phoneclick(){
        await this.Contactphone.click()
    }
    async Mappageclick(){
        await this.Mappage.click()
    }
}