import { Component, OnInit } from "@angular/core";
import { createDynamicForms } from "../../utils/dynamic-forms";

@Component({
  selector: "app-laptops",
  templateUrl: "./laptops.component.html",
  styleUrls: ["./laptops.component.scss"]
})
export class LaptopsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    createDynamicForms();
  }
}
