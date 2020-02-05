import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { BodyComponent } from "./body/body.component";
import { FooterComponent } from "./footer/footer.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BreedsService } from "./services/breeds.service";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { LoginService } from "./services/login.service";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { ProductsService } from "./services/products.service";
import { SignupComponent } from "./signup/signup.component";
import { SignupService } from "./services/signup.service";
import { ConfirmationComponent } from "./confirmation/confirmation.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { UsersService } from "./services/users.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ConfirmationComponent,
    EditProfileComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [
    BreedsService,
    LoginService,
    ProductsService,
    SignupService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
