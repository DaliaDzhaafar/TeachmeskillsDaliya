import Address from "./address";
export default class User {
    constructor(public name:string, 
                public username:string,
                public email:string,
                public phone: number, 
                public website: string,
                public Address: object) {
{
                this.name = name;
                this.username = username;
                this.email = email;
                this.phone = phone;
                this.website = website;
                this.Address = Address;

        }
    }
}
