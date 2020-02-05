import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../product";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  url: string = "http://localhost:8888/apis/products";

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(this.url);
  }
}
