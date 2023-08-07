// #### Task 1 💻
// - Написать минимум 5 UI тестов для сайта: https://3dnews.ru/ или любого другого. 
// - При написании использовать различные типы селекторов и локаторов
// - Добавить методы ожидания элементов
// - Добавить проверки элементов/текстовых значений
// - Использовать паттерны: Page Object/Page Factory
// - Организовать тесты с помощью describe
// - Реализовать кроссбраузерное тестирование: Chromium и Firefox
// - Реализовать прогон тестов, эмулируя запуск приложения на мобильном дивайсе


import { test, expect } from "@playwright/test";
import { MainPage } from "../pages/mainpage";
import { PagesFactory } from "../pages/pagefactory";
import { ItnewsPage } from "../pages/itnewspage";
import { ContactPage } from "../pages/contactpage";

test.describe("Check news website", async () => {

test(" Test 1 - Check website title", async ({ page }) => {
    const mainPage1 = PagesFactory.getPage(page, "main") as MainPage
    await mainPage1.openWebsite(page); 
    expect(await page.title()).toBe("Все самое интересное из мира IT-индустрии")
})
test(" Test 2 - Check itnews title", async ({ page }) => {
    const mainPage2 = PagesFactory.getPage(page, "it") as ItnewsPage
    await mainPage2.openWebsite1(page);
    await mainPage2.Investorclick()
    await page.waitForTimeout(1000);
    expect(await page.title()).toBe("Да, детка, я инвестор! / IT-финансы")
})
test(" Test 3 - Check contacts Phone", async ({ page }) => {
    const mainPage3 = PagesFactory.getPage(page, "contact") as ContactPage
    await mainPage3.openWebsite3(page);
    await mainPage3.Phoneclick()
    expect(await page.textContent).toBeTruthy
})
test(" Test 4 - Check Goolge Map", async ({ page }) => {
    const mainPage3 = PagesFactory.getPage(page, "contact") as ContactPage
    await mainPage3.openWebsite3(page);
    await mainPage3.Mappageclick()
    expect(await page.title()).toContain("Контакты")
})

test(" Test 5 - language dropdown", async ({ page }) => {
    const mainPage3 = PagesFactory.getPage(page, "main") as MainPage
    await mainPage3.openWebsite(page);
    await mainPage3.Languageclick()
    await page.waitForTimeout(1000);
    await mainPage3.select()
    expect(await page.url()).toBe('https://3dnews.kz/?CDOM=1')
})

})