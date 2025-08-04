import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from '../../models/iproduct';
import { ApiProductsService } from '../../services/api-products.service';
import { StaticProductsService } from '../../services/static-products.service';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [FormsModule],
  providers:[Location],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
  categories: Icategory[];
  currentId:number=0;
  product:Iproduct|null=null
  idsArr:number[]
  currentIdIndex:number=0;
  newProduct:Iproduct={} as Iproduct;
  
  constructor(private _activatedRoute:ActivatedRoute,
     private _StaticProductsService:StaticProductsService,
     private _ApiProductsService:ApiProductsService,
     private _Location:Location,
     private router:Router){
    this.idsArr= this._StaticProductsService.mapProductsToIds()
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
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((paramMap)=>{
      this.currentId =Number(paramMap.get('id'))
    //  this.product=this._StaticProductsService.getProductById(this.currentId)
    this._ApiProductsService.getProductById(this.currentId).subscribe({
      next:(res)=>{
        console.log(res)
        this.product=res;
      },
      error:(err)=>{
        console.log(err)
      }
    })
    });
}
updateProduct(id:number,newProduct:Iproduct){
this._ApiProductsService.updateProductById(id,newProduct).subscribe({
  next:(res)=>{
    console.log(res)
  //  this.product=res;
  },
  error:(err)=>{
    console.log(err)
  }
})
}
}