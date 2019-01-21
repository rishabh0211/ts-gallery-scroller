import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products/products.component";

@NgModule({
  declarations: [AppComponent, ProductsComponent],
  imports: [BrowserModule, InfiniteScrollModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
