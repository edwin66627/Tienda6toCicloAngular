import { Injectable } from "@angular/core";
import { Users } from "../users/users";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SignupService {
  url: string = "http://localhost:8888/api/signup";

  constructor(private http: HttpClient) {}

  signUp(user: Users) {
    return this.http.post<Users>(this.url, user);
  }
}
