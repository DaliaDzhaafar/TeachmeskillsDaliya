import Product from "./products";
import { Rate } from "./rate";
export default class List {
    private url4: string = "https://fakestoreapi.com/products/";
    private products: Product [];
    constructor() {
    this.products = []
}
get Products() {
    return this.products;
}
async processing(){
    const data = await fetch (this.url4);
    const dataArr = await data.json();
    for (let obj of dataArr){
        let rate7 = new Rate(obj.rating.rate, obj.rating.count)
        const product: Product = new Product(obj.id, obj.title, obj.price, obj.description, obj.category, obj.image, rate7);
        this.products.push(obj);
    }
}

//находит товар по заданному title
getproductbyTitle(title:string) {
    return this.products.find(product => product.title === title);
}

//находит все товары в ценовом диапазоне от до
getproductbyrate(min:number, max:number): Product[] {
    
    return this.products.filter(product => product.price >= min && product.price <= max)
}
//находит все товары, которые содержат заданную подстроку в description
getproductbydescr(){
    return this.products.find(product => product.description.includes('3D NAND flash'))
}
//находит все товары, с расширением image НЕ являющимся одним из списка: jpg, png, jpeg
getproductsbyformat(){
    return this.products.find(product => !product.image.includes('.jpg') 
    && !product.image.includes('png') 
    && !product.image.includes('jpeg'))

}
Count(){
    let sum = 0
    for (let product of this.products){
        sum = sum + product.rating.count
    }
    return sum
}
roundCost(){
    for (let product of this.products){
        product.price = Math.round(product.price)
    }
    return this.products
}

}
