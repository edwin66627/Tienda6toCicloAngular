import { Component, OnInit, ViewChild } from "@angular/core";
import { UsersService } from "../services/users.service";
import { Users } from "../users/users";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { SignupService } from "../services/signup.service";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.css"]
})
export class EditProfileComponent implements OnInit {
  @ViewChild("fs", { static: false }) updateForm: NgForm;
  user: { id: number };
  userloaded: Users;
  userEdited = new Users(0, " ", " ", " ", " ");
  userreturned: Users;
  userName: string;
  userPass: string;
  userEmail: string;
  userPhone: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private signupService: SignupService
  ) {}

  loadUser(id: number) {
    this.usersService.getUser(id).subscribe(user => {
      this.userloaded = user;
      this.userName = this.userloaded.userName;
      this.userPass = this.userloaded.password;
      this.userEmail = this.userloaded.email;
      this.userPhone = this.userloaded.userPhone;
      console.log(this.userName);
    });
  }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params["id"]
    };
    this.loadUser(this.user.id);
  }

  onSubmit(form: NgForm) {
    this.userEdited.setUserId(this.userloaded.userId);
    this.userEdited.setUserName(this.userName);
    this.userEdited.setPassword(this.userPass);
    this.userEdited.setEmail(this.userEmail);
    this.userEdited.setUserPhone(this.userPhone);

    console.log(this.userEdited);

    this.signupService
      .signUp(this.userEdited)
      .subscribe(user => (this.userreturned = user));

    console.log(this.userreturned);

    if (this.userreturned !== null) {
      console.log(this.userreturned);
      this.router.navigate(["created"]);
    }
  }
}
