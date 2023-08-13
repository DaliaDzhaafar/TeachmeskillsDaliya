export default class Address {
    constructor(public street:string, 
                public suite:string) {
        { this.street = street;
          this.suite = suite;
        }
    }
}