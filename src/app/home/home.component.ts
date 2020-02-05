import { Component, OnInit, AfterViewChecked } from "@angular/core";
import { ProductsService } from "../services/products.service";
import { Product } from "../product";
import { ActivatedRoute } from "@angular/router";
import { UsersService } from "../services/users.service";
import { Users } from "../users/users";

declare let paypal: any;
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, AfterViewChecked {
  productsList: Product[] = [];
  user: { id: number };
  userloaded: Users;

  addScript: boolean = false;
  paypalLoad: boolean = true;

  finalAmount: number = 1;
  paypalConfig = {
    env: "sandbox",
    client: {
      sandbox:
        "ASTM-NlMr4-5wUfzfn7x2YgWv2xD7l9EgyxeC0h8KALYajejMRtVpTF596eFRsm883Jw3KGGnIQSd6Kg",
      production: "<your-production-key>"
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: "USD" } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then(payment => {
        //Redirigir pagina resumen pago
      });
    }
  };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, "#paypal-checkout-btn");
        this.paypalLoad = false;
      });
    }
  }

  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement("script");
      scripttagElement.src = "https://www.paypalobjects.com/api/checkout.js";
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    });
  }

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  loadProducts() {
    this.productsService
      .getProducts()
      .subscribe(products => (this.productsList = products));
  }

  loadUser(id: number) {
    this.usersService.getUser(id).subscribe(user => {
      this.userloaded = user;
    });
  }

  ngOnInit() {
    this.loadProducts();
    this.user = {
      id: this.route.snapshot.params["id"]
    };
    this.loadUser(this.user.id);
  }
}
