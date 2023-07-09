// #### Task 1 💻
// - Написать минимум 10 API тестов для разных HTTP методов. 
// За источник можно брать сайт 
// https://reqres.in/ или любой другой сайт с открытым API. Использовать Jest + superAgent

// *Группируем тесты с помощью Describe. Так же применяем хуки, где они уместны*
import axios from "axios";
import { Validator } from "jsonschema";
import superagent = require("superagent");


describe("Test suite", () => {
    const schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "email": {
            "type": "string"
          },
          "first_name": {
            "type": "string"
          },
          "last_name": {
            "type": "string"
          },
          "avatar": {
            "type": "string"
          }
        },
        "required": [
          "id",
          "email",
          "first_name",
          "last_name",
          "avatar"
        ]
    }

    test("Test", async () =>{
        const response = await superagent.get('https://reqres.in/api/users?id=2');
        expect(response.status).toBe(200);
    })
    test("Test", async () =>{
        const response = await superagent.get('https://reqres.in/api/users?id=3');
        expect(response.status).toBe(200);
        expect(response.body.data.email).toBe('emma.wong@reqres.in')
    })
    test("Test", async () =>{
        let response: any;
        try {
            response = await superagent.get('https://reqres.in/api/users?id=3');
        }
        catch (err:any){
            console.log(err.message);
        }
        expect(response.body.data.email).toBe('emma.wong@reqres.in')
    })
    test("Test", async () =>{
        let response: any;
        try {
            response = await superagent.get('https://reqres.in/api/users').query({id:3});
        }
        catch (err:any){
            console.log(err.message);
        }
        expect(response.body.data.email).toBe('emma.wong@reqres.in')
    })
    test("Test", async () =>{
        let response:any;
        const expectObject = {
                id: 4,
                email: "eve.holt@reqres.in",
                first_name: "Eve",
                last_name: "Holt",
                avatar: "https://reqres.in/img/faces/4-image.jpg"
        }
        try {
            response = await superagent.get('https://reqres.in/api/users').query({id:4});
        }
        catch (err:any){
            console.log(err.message);
        }
        expect(response.body.data).toEqual(expectObject)
    })


    test("Test", async () => {
        let response:any;
        const v = new Validator();   
        try {
            response = await superagent.get('https://reqres.in/api/users').query({id:4});
        }
        catch (err:any){
            console.log(err.message);
        }
        expect(v.validate(response.body.data, schema).valid).toBeTruthy
    })


    test("Test", async () => {
        const res = await superagent
        .post('https://reqres.in/api/users')  
        .set("Content-type", "application/json")
        .send({name: "James", job:"manager"})
          
    expect(res.statusCode).toEqual(201);
    })

    const ExpectedObj: {name:string, job:string} = {
    name: "Roman",
    job : "HR"
    }
    test("Test", async () => {
        const res = await superagent
        .post('https://reqres.in/api/users')  
        .set("Content-type", "application/json")
        .send({name: "Roman", job:"HR"})
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toEqual(ExpectedObj.name)
    expect(res.body.job).toEqual(ExpectedObj.job)
    })

    test("Test", async()=> {
        const response = await axios.get("https://reqres.in/api/users")
        expect(response.status).toBe(200)
    })
    test("Test", async()=> {
        const response = await axios.post("https://reqres.in/api/users", { name: "Roman", job : "HR"})
        expect(response.status).toBe(201)
    })
})
