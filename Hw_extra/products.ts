import { Rate } from "./rate";
export default class Product{
    static Processing: any;
    static shortDesc(): any {
        throw new Error("Method not implemented.");
    }
    [x: string]: any;
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rate: object

    constructor(id:number, title:string, price: number, description: string, category: string, image:string, rate:Rate){
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.rate = rate
    }
    
    }

