import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GraphQLModule } from "./graphql.module";
import { ProductsComponent } from "./products/products.component";
import { VehiclesComponent } from "./vehicles/vehicles.component";
import { LaptopsComponent } from "./laptops/laptops.component";
import { ApartmentsComponent } from "./apartments/apartments.component";

import {
  MatTableModule,
  MatHeaderCell,
  MatCell,
  MatColumnDef
} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    VehiclesComponent,
    LaptopsComponent,
    ApartmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GraphQLModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
