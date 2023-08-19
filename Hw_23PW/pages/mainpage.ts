import { Locator, Page } from "@playwright/test"

export class MainPage {
    private readonly Languagebutton: Locator;
    

    constructor(page: Page) {
    this.Languagebutton = page.locator('//*[@id ="selectLANGDOMMB"]')
    
    }

async openWebsite(page: Page) : Promise<void> {
    await page.goto("https://3dnews.ru/")
    }
async Languageclick(){
    await this.Languagebutton.click()
    }   
async select() {
await this.Languagebutton.selectOption("3dnews.kz")

}
}