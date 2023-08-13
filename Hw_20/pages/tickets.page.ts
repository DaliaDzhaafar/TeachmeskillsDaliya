import { By, WebDriver } from "selenium-webdriver";

export class TicketsPage{
    private readonly searchButton: By = By.css("body > div.header.--blue > div.header__form.--solo-header.--main-page-form.--show-form-header > div > div.web-app__page-header-wrap > div > div > div.page-header__form-container > div.page-header__form > div > div > form > div.avia-form__submit > button")
    private readonly button : By = By.xpath('/html/body/div[7]/div[1]/div/div[3]/div/div/div[2]/div[1]/ul/li[2]/a/div');
    constructor(private driver: WebDriver){
        
    }
    async getsearchButtonText() : Promise<string> {
        let el = await this.driver.findElement(this.searchButton)
        return el.getText();
    }
    async clickHotelsTab(): Promise<void> {
        let el = await this.driver.findElement(this.button)
        await el.click();
    }

}
