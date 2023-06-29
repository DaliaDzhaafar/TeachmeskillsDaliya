import Product from "./products";
import Raiting from "./rate";
export default class List {
    private url4: string = "https://fakestoreapi.com/products/";
    private products: Product [];
    constructor() {
    this.products = []
}
get Products() {
    return this.Products;
}
async processing() {
    const data = await fetch (this.url4);
    const dataArr = await data.json();
    for (let obj of dataArr){
        const rate1 = new Raiting(obj.rating.rate, obj.rating.count);
        const product: Product =  new Product(obj.title, obj.description, rate1, obj.image, obj.price);
        this.products.push(product);
    }
}
getproductbyTitle(title:string) {
    return this.products.find(product => product.title === title);
}
getproductbyrate(min:number, max:number): Product[] {
    
    return this.products.filter(product => product.price >= min && product.price <= max)
}
getproductbydescr(){
    return this.products.find(product => product.description.includes('3D NAND flash'))
}

getproductsbyformat(){
    return this.products.find(products => !products.image.includes('jpg') 
    && !products.image.includes('png') 
    && !products.image.includes('jpeg'))
}
}