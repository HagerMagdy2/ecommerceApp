import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Icategory } from '../../models/icategory';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule,CommonModule,ProductsComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements AfterViewInit{
  categories:Icategory[];
  selectCatId:number=0;
  totalOrderprice:number=0;
  @ViewChild('userNameInp') myInp!:ElementRef  //non null assertion operator(will give initialize after time)
  @ViewChild(ProductsComponent) productComponentObj!:ProductsComponent
constructor(){
  this.categories=[
    {
      id:1,
      name:'laptop'
    },
    {
      id:2,
      name:'Mobile'
    },
    {
      id:3,
      name:'Tablet'
    }
  ]
}
  ngAfterViewInit(): void {
    this.myInp.nativeElement.value='hager'
    console.log(this.productComponentObj.products)
  }
calcTotalPrice(top:number){
this.totalOrderprice=top;
}
}
