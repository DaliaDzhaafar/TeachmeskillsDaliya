//Нам надо идти на работу, но нужно проверить все ли мы взяли или нет?
//Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин. 
//Для решения этой задачи нам помогут логические операторы **`|| &&`**.
let key = true
let documents = true
let pen = true
let apple = false
let orange = true
let obligatory = key && documents && pen;
let nonObligatory = apple || orange;
let shouldGoToWork = obligatory + nonObligatory;
