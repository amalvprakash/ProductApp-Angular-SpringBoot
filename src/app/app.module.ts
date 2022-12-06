import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewProductsComponent } from './view-products/view-products.component';
import { NavbarComponent } from './navbar/navbar.component';
const myRoute:Routes = [
  {
    path:"",
    component:AddProductsComponent
  },
  {
    path:"view",
    component:ViewProductsComponent
  },
  {
    path:"navbar",
    component:NavbarComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddProductsComponent,
    ViewProductsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
