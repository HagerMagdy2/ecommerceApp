import { Component } from '@angular/core';
import { Icategory } from '../../models/icategory';
import { Iproduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiProductsService } from '../../services/api-products.service';
import { StaticProductsService } from '../../services/static-products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  categories: Icategory[];
  newProduct:Iproduct={} as Iproduct;
  constructor(private _ApiProductsService:ApiProductsService, private _StaticProductsService:StaticProductsService,
    private router:Router
  ) {
    this.categories = [
      {
        id: 1,
        name: 'Labtops'
      },
      {
        id: 2,
        name: 'Taplets'
      },
      {
        id: 3,
        name: 'Mobiles'
      },
    ];
  }
  addNewProduct(){
   this._ApiProductsService.addProduct(this.newProduct).subscribe({
    next:()=>{
      alert('Done');
      this.router.navigateByUrl('/Products');
    },
    error:(err)=>{
      console.log(err)
    }
   })
  
  }
}
