import { Locator, Page } from "@playwright/test"
import { MainPage } from "./mainpage"

export class ItnewsPage extends MainPage {
    private readonly Investor: Locator;
    
    constructor(page:Page) {
        super(page);
        this.Investor = page.getByTitle("Да, детка, я инвестор!")
    }
    async openWebsite1(page: Page) : Promise<void> {
        await page.goto("https://3dnews.ru/it-finance")
    }
    async Investorclick(){
        await this.Investor.click()
    }
}