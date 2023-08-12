// #### Task 1 💻
// - Написать минимум 5 UI тестов для сайта: https://www.drive2.ru/ или любого другого. 
// - При написании использовать различные типы селекторов и локаторов
// - Добавить проверки элементов/текстовых значений
// - Организовать тесты с помощью describe
// - Добавить ожидание запроса через intercept
// - Реализовать собственные методы в классе Су
// - Добавить возможность записи скриншотов и видео

describe('template spec', () => {
  it('Test 1 - Title is correct', () => {
    cy.opendrive2()
    cy.title().should("equal",'DRIVE2.RU')
  })
  it("Test 2 - Check search field", () => {
    cy.opendrive2()
    cy.get("body > main > div.c-index-header.x-box.x-box--ghost > form > input").type("Audi")
    cy.get("body > main > div.c-index-header.x-box.x-box--ghost > form > input").should("have.value", "Audi")
    cy.clicksearch()
    cy.title().should("equal",'Поиск: Audi')
    cy.intercept("Get",'Поиск: Audi')
  })
  it('Test 3 -Check forget password', () => {
    cy.opendrive2()
    cy.clicklogin()
    cy.forgetpass()
    cy.title().should("equal","Забыли пароль?")
  })
  it('Test 4 - Vacancy', () => {
    cy.opendrive2()
    cy.vacancy()
    cy.title().should("equal","Вакансии")
  })
  it('Test 5 - Wrong Login check', () => {
    cy.opendrive2()
    cy.clicklogin()
    cy.get("#loginForm > div:nth-child(3) > input").type("dashuly200489@yahoo.com")
    cy.get("#loginForm > div:nth-child(4) > div > input[type=password]").type("Baobab")
    cy.login()
    cy.get("#loginForm > div:nth-child(4) > span").should("have.text","Указан неверный логин или пароль")
    
  })
})