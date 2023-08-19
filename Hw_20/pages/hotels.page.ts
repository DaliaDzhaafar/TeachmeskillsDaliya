import { By, WebDriver } from "selenium-webdriver";


export class HotelsPage{
    private readonly searchButton: By = By.xpath("/html/body/div[7]/div[1]/div/div[3]/div/div/div[2]/div[2]/div/div/form/div[4]/button")
    constructor(private driver: WebDriver){
        
    }
    async getsearchButtonText() : Promise<string> {
        let el = await this.driver.findElement(this.searchButton)
        return el.getText();
    }
}
