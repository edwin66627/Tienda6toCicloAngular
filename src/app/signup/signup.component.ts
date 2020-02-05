import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { SignupService } from "../services/signup.service";
import { NgForm } from "@angular/forms";
import { Users } from "../users/users";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  user = new Users(0, " ", " ", " ", " ");

  userreturned: Users;

  constructor(private signupService: SignupService, private router: Router) {}

  onSubmit(form: NgForm) {
    this.user.setUserId(+form.value.identification);
    this.user.setUserName(form.value.username);
    this.user.setPassword(form.value.password);
    this.user.setEmail(form.value.email);
    this.user.setUserPhone(form.value.phone);

    console.log(this.user);

    this.signupService
      .signUp(this.user)
      .subscribe(user => (this.userreturned = user));

    if (this.userreturned !== null) {
      this.router.navigate(["created"]);
    }
  }

  ngOnInit() {}
}
