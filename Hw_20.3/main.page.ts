import { Builder, By, WebDriver } from "selenium-webdriver";
import { search } from "superagent";
import { Actions } from "selenium-webdriver"

export class MainPage{
    private readonly Lifestylebutton: By = (By.xpath("//*[@id='widget-5-1']/div/a[1]"))
    private readonly Home: By = (By.linkText("Дома и квартиры"))
    public readonly Search: By = By.css("#fast-search > form > input.fast-search__input")
    public readonly iPhonebutton = By.xpath('//*[@id="fast-search-modal"]/div/div/iframe')
    public readonly iframe = By.xpath('//iframe[@class="modal-iframe"]')
    public readonly Price = By.xpath('//*[@id="search-filter"]/div/div[2]/label[2]/span')
    public readonly List = By.xpath('//*[@id="search-filter-results"]/div[1]/div/div[1]/div[1]/div')
    public readonly Search2 = By.xpath('//*[@id="fast-search-modal"]')

    constructor(private driver: WebDriver){
}
    async clicklifestyle(): Promise<void> {
        let el = await this.driver.findElement(this.Lifestylebutton)
        await el.click();
    }
    async clickHome(): Promise<void> {
        let el = await this.driver.findElement(this.Home)
        await el.click();
    }
    async clickSearchTab(): Promise<void> {
        let el = await this.driver.findElement(this.Search)
        await el.sendKeys("iPhone")
    }
    async clickPhonebutton(): Promise<void> {
        let el = await this.driver.findElement(this.iPhonebutton)
        await el.click();
    }
    async clickPrice(): Promise<void> {
        let el = await this.driver.findElement(this.Price)
        await el.click();
    }
    async isEnabled(): Promise<any> {
        let el = await this.driver.findElement(this.List)
        await el.isEnabled()
    }
    async Search2Click(): Promise<any> {
        let el = await this.driver.findElement(this.Search2)
        await el.click()
    }
    // async clickiclosebutton(): Promise<void> {
    //         let frameLocator = "//iframe[@class='modal-iframe']";
	// 		let elementLocator = "//*[@id='search-page']/div[1]/span";
	// 		let frame = this.driver.findElement(By.xpath("//iframe[@class='modal-iframe']"));
	// 		this.driver.switchTo().frame(frame);
    //         let el = this.driver.findElement(By.xpath("//*[@id='search-page']/div[1]/span"))
    //         await el.click()
    // }
}