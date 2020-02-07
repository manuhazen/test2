import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angular-client";
  API = "http://localhost:3000";
  constructor(private Http: HttpClient) {}
  ngOnInit() {
    this.hittingApi();
    console.log("klk contigo panita da baby");
  }

  hittingApi() {
    this.Http.get(`${this.API}/`).subscribe((response: any) => {
      console.log(response);
    });
  }
}
