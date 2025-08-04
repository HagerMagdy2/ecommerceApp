import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VisionComponent } from './components/vision/vision.component';
import { ValuesComponent } from './components/values/values.component';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { OrderComponent } from './components/order/order.component';

export const routes: Routes = [
  { path: '',pathMatch:'full', redirectTo:'Home' },
  { path: 'Home', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'AddProduct', component: AddProductComponent },
  //lazy loading
  { path: 'Products', loadComponent:()=>import('./components/products/products.component').then((obj)=>obj.ProductsComponent) ,
    },
  { path: 'Details/:id', component: DetailsComponent },
  { path: 'UpdateProduct/:id', component: UpdateProductComponent },
  {
    path: 'About',
    component: AboutUsComponent,
    children: [
      { path: '', component: VisionComponent },
      { path: '',pathMatch:'full', redirectTo:'Vision' },
      { path: 'Vision', component: VisionComponent },
      { path: 'Values', component: ValuesComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
