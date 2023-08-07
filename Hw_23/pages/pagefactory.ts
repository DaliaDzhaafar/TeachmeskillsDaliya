import { Locator, Page } from "@playwright/test";
import { MainPage } from "./mainpage";
import { ItnewsPage } from "./itnewspage";
import { ContactPage } from "./contactpage";

export class PagesFactory {
    static getPage(page: Page, pageName: string) {
        switch (pageName){
            case "it":
            return new ItnewsPage(page)
            case "main":
            return new MainPage(page)
            case "contact":
            return new ContactPage(page)
        }
    }
}