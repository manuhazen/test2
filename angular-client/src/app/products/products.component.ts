import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from "@angular/core";
import { Apollo } from "apollo-angular";
import { Subscription } from "rxjs";
import { tap } from "rxjs/operators";

import { getProducts } from "../../queries/products";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  private querySubscription: Subscription;
  products: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: getProducts
      })
      .valueChanges.subscribe(({ data }) => {
        this.products = [...data.laptops, ...data.vehicles, ...data.apartments];
        console.log(this.products);
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
