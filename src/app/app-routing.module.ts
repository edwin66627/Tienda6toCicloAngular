import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { SignupComponent } from "./signup/signup.component";
import { ConfirmationComponent } from "./confirmation/confirmation.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";

const appRoutes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home/:id", component: HomeComponent },
  { path: "signup", component: SignupComponent },
  { path: "created", component: ConfirmationComponent },
  { path: "edit/:id", component: EditProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
