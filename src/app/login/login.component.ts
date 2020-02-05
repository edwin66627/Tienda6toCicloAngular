import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { LoginService } from "../Services/login.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Users } from "../users/users";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userId: number;
  username: string;
  password: string;
  userLoggedIn: Users;
  displayError = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onSubmit(form: NgForm) {
    this.username = form.value.username;
    this.password = form.value.password;

    this.loginService.LogIn(this.username, this.password).subscribe(user => {
      this.userLoggedIn = user;
      if (this.userLoggedIn !== null) {
        this.router.navigate(["home", this.userLoggedIn.userId]);
      } else {
        this.displayError = true;
      }
    });

    /*
    if (this.loginService.LogIn(this.username, this.password)) {
      this.router.navigate(["home"]);
    }
    */
  }

  ngOnInit() {}
}
