import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticProductsService {
  products: Iproduct[];
  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Dell laptop',
        price: 20000,
        imgUrl: 'https://fakeimg.pl/300/',
        quantity: 3,
        carId: 1,
      },
      {
        id: 2,
        name: 'HP laptop',
        price: 50000,
        imgUrl: 'https://fakeimg.pl/300/',
        quantity: 2,
        carId: 1,
      },
      {
        id: 3,
        name: 'IPhone',
        price: 100000,
        imgUrl: 'https://fakeimg.pl/300/',
        quantity: 0,
        carId: 2,
      },
      {
        id: 4,
        name: 'Oppo',
        price: 25000,
        imgUrl: 'https://fakeimg.pl/300/',
        quantity: 3,
        carId: 2,
      },
      {
        id: 5,
        name: 'samsung tablet',
        price: 20000,
        imgUrl: 'https://fakeimg.pl/300/',
        quantity: 1,
        carId: 3,
      },
      {
        id: 6,
        name: 'lenovo tablet',
        price: 25000,
        imgUrl: 'https://fakeimg.pl/300/',
        quantity: 5,
        carId: 3,
      },
    ];
  }
  getAllProducts(): Iproduct[] {
    return this.products;
  }
  getProductById(id: number): Iproduct | null {
    let foundetPrd = this.products.find((prd) => prd.id == id);
    return foundetPrd ? foundetPrd : null;
  }
  getProductsByCatId(catId: number): Iproduct[] {
    if (catId == 0) {
      return this.products;
    } else {
      return this.products.filter((prd) => prd.carId == catId);
    }
  }
  mapProductsToIds():number[]{
 return this.products.map((product)=>product.id)
  }
  addProduct(product:Iproduct){
this.products.push(product);
console.log(this.products);
  }
}
