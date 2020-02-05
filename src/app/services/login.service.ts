import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Users } from "../users/users";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  url: string = "http://localhost:8888/api/login";

  constructor(private http: HttpClient) {}

  /*
  getUsers() {
    return this.http.get<Users[]>(this.url);
  }

  LogIn(username: string, pass: string) {
    return this.http
      .get(this.url1 + "?username=" + username + "&password=" + pass)
      .subscribe(data => {
        console.log(data);
      });
  }
  */
  LogIn(username: string, pass: string): Observable<any> {
    return this.http.get(
      this.url + "?username=" + username + "&password=" + pass
    );
  }
}
