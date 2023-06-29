export default class Product {
    constructor(public title:string, 
                public description:string,
                public rating:object,
                public image: string,
                public price:number) {
{
                this.title = title;
                this.description = description;
                this.rating = rating;
                this.image = image;
                this.price = price;
        }
    }
}

