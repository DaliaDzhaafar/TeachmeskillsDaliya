//Создать валидатор, 2 метода: валидатор и логин. Первый метод принимают
//у пользователя логин и пароль для регистрации. Затем данные записать в обьект. 
//Второй метод принимает данные пользователя и объект зарегестрированного 
//пользователя. Если передан верный логин и пароль, вывести сообщение **Добро пожалоВать**. 

const Validator = {
validate : function(login, password)  {
  const A = {
  login1 :   login,
  password1: password
  }
  return A
},
 
loginFuction : function (loginentered, passwordentered, $A)  {
  if ((A.login1 === loginentered) && (A.password1 === passwordentered)) {
  console.log ("Добро Пожаловать")}
  else {
  console.log ("Неверные данные")}
}
}
          
// Методы проверяла отдельно - логин и пароль передаются и валидация проходит успешно


    

    
