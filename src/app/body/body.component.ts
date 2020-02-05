import { Component, OnInit, Input, Output } from "@angular/core";
import { BreedsService } from "../services/breeds.service";
import { Users } from "../users/users";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html"
})
export class BodyComponent implements OnInit {
  breedList: string[] = [];
  breedSelected: string;
  breedImages: string[] = [];
  usersList: Users[] = [];

  constructor(private breedsService: BreedsService) {}

  ngOnInit() {
    this.loadBreeds();

    console.log(this.usersList);
  }

  loadImages() {
    console.log(this.breedSelected);
    this.breedsService.getBreedImages(this.breedSelected).subscribe(data => {
      this.breedImages = data["message"];
    });
    error => {
      console.error(error);
    };
  }

  loadBreeds() {
    this.breedList = [
      "affenpinscher",
      "african",
      "airedale",
      "akita",
      "appenzeller",
      "basenji",
      "beagle",
      "bluetick",
      "borzoi",
      "bouvier",
      "boxer",
      "brabancon",
      "briard",
      "bulldog",
      "bullterrier",
      "cairn",
      "cattledog",
      "chihuahua",
      "chow",
      "clumber",
      "cockapoo",
      "collie",
      "coonhound",
      "corgi",
      "cotondetulear",
      "dachshund",
      "dalmatian",
      "dane",
      "deerhound",
      "dhole",
      "dingo",
      "doberman",
      "elkhound",
      "entlebucher",
      "eskimo",
      "frise",
      "germanshepherd",
      "greyhound",
      "groenendael",
      "hound",
      "husky",
      "keeshond",
      "kelpie",
      "komondor",
      "kuvasz",
      "labrador",
      "leonberg",
      "lhasa",
      "malamute",
      "malinois",
      "maltese",
      "mastiff",
      "mexicanhairless",
      "mix",
      "mountain",
      "newfoundland",
      "otterhound",
      "papillon",
      "pekinese",
      "pembroke",
      "pinscher",
      "pointer",
      "pomeranian",
      "poodle",
      "pug",
      "puggle",
      "pyrenees",
      "redbone",
      "retriever",
      "ridgeback",
      "rottweiler",
      "saluki",
      "samoyed",
      "schipperke",
      "schnauzer",
      "setter",
      "sheepdog",
      "shiba",
      "shihtzu",
      "spaniel",
      "springer",
      "stbernard",
      "terrier",
      "vizsla",
      "weimaraner",
      "whippet",
      "wolfhound"
    ];
  }
}
