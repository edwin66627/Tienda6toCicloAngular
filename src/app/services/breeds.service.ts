import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BreedsService {
  url: string = "https://dog.ceo/api/breed/";

  constructor(private http: HttpClient) {}

  getBreedImages(breed: string) {
    return this.http.get(this.url + breed + "/images");
  }
}
