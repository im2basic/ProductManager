import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/products'},
  // Hitting index route will redirect to /products
  {path: 'products', component: ProductsComponent},
  {path: 'products/new', component: NewComponent},
  {path: 'products/edit/:id', component: EditComponent},
  {path: '**', component: PageNotFoundComponent}, 
  // PageNotFound component must be at the bottom of the routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
