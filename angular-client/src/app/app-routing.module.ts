import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { VehiclesComponent } from "./vehicles/vehicles.component";
import { LaptopsComponent } from "./laptops/laptops.component";
import { ApartmentsComponent } from "./apartments/apartments.component";

const routes: Routes = [
  {
    path: "products",
    component: ProductsComponent,
    data: { title: "List of products" }
  },
  {
    path: "vehicles",
    component: VehiclesComponent,
    data: { title: "List of Vehicles" }
  },
  {
    path: "laptops",
    component: LaptopsComponent,
    data: { title: "List of Laptops" }
  },
  {
    path: "apartments",
    component: ApartmentsComponent,
    data: { title: "List of Apartments" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
