import Address from "./address";
import User from "./user";
export default class Community {
    private url4: string = "https://jsonplaceholder.typicode.com/users";
    private users: User [];
    constructor() {
    this.users = [];
}
get Users() {
    return this.users;
}
async initialize() {
    const data = await fetch (this.url4);
    const dataArr = await data.json();
    for (let obj of dataArr){
        const address1 = new Address(obj.address.street, obj.address.suite);
        const user: User =  new User(obj.name, obj.username, obj.email, obj.website, obj.phone, address1);
        this.users.push(user);
    }
}
getUserByEmail(email:string) {
    return this.users.find(user => user.email === email);
}

}

