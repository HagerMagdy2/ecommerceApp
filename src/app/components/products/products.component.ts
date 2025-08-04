import { Component, EventEmitter, OnChanges, Output, Input, SimpleChanges, OnInit } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightCardDirective } from '../../directives/highlight-card.directive';
import { SquarePipe } from '../../pipes/square.pipe';
import { StaticProductsService } from '../../services/static-products.service';
import { Router, RouterLink } from '@angular/router';
import { ApiProductsService } from '../../services/api-products.service';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightCardDirective, SquarePipe, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges, OnInit {

  products: Iproduct[] = [] as Iproduct[];
  filteredProducts: Iproduct[] = [] as Iproduct[];

  totalOrderPrice = 0;

  myDate: Date = new Date();
  @Input() recivedCatId: number = 0;
  num: number = 4;
  @Output() onTotalPriceChanged: EventEmitter<number>
  constructor(
    //private _StaticProductsService:StaticProductsService,
    private _ApiProductsService: ApiProductsService,
    private router: Router) {

    //this.products= this._ApiProductsService.getAllProducts().subscribe({})
    //  this.filteredProducts=this.products
    this.onTotalPriceChanged = new EventEmitter<number>()
  }
  ngOnInit(): void {
    this._ApiProductsService.getAllProducts().subscribe({
      next: (res) => {
        console.log(res)
        this.products = res
        this.filteredProducts = this.products
      },
      error(err) {
        console.log(err)
      },
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    //this.filterProducts();
    this._ApiProductsService.getProductByCatId(this.recivedCatId).subscribe({
      next: (res) => {
        this.filteredProducts = res
      },
      error(err) {
        console.log(err)
      },
    })
  }

  buy(count: string, price: number) {
    this.totalOrderPrice += +count * price;
    this.onTotalPriceChanged.emit(this.totalOrderPrice)
  }
  change() {
    //  this.selectCatId=3;
  }
  // filterProducts(){
  //   if(this.recivedCatId==0){
  //     this.filteredProducts=this.products
  //   }else{
  //     this.filteredProducts=this.products.filter((product)=>product.carId==this.recivedCatId)
  //   }
  // }
  navigateToDetails(id: number) {
    // this.router.navigateByUrl(`/Details`${id})
    this.router.navigate(['/Details', id])
  }
  DeleteProduct(id: number) {
    this._ApiProductsService.deleteProductById(id).subscribe({
      next: () => {
        alert("Deleted Successfully")
        this.router.navigateByUrl('/Products')
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
  UpdateProduct(id: number) {
    this.router.navigate(['/UpdateProduct', id])
  }
}
