import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Users } from "../users/users";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  url: string = "http://localhost:8888/api/user";

  constructor(private http: HttpClient) {}

  getUser(id: number) {
    return this.http.get<Users>(this.url + "?id=" + id);
  }
}
