import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiManagementService } from "../api-management.service";
import { Review } from "../models/Review";

@Component({
  selector: "app-rate-me",
  templateUrl: "./rate-me.component.html",
  styleUrls: ["./rate-me.component.scss"]
})
export class RateMeComponent implements OnInit {
  rateMeGroup: FormGroup;
  options = [
    "From University",
    "I did a project with you",
    "I've heard about you",
    "I saw your profile on Github"
  ];
  constructor(
    private _fb: FormBuilder,
    public _management: ApiManagementService
  ) {
    this.rateMeGroup = this._fb.group({
      fullname: ["", Validators.required],
      meet: ["", Validators.required],
      email: ["", Validators.required],
      phone: ["", Validators.required],
      country: ["", Validators.required],
      comment: ["", Validators.required]
    });
  }

  ngOnInit() {
    this._management.getCountries();
  }

  onSubmit() {
    this._management.saveReview(new Review(
      this.rateMeGroup.get('fullname').value,
      this.rateMeGroup.get('meet').value,
      this.rateMeGroup.get('email').value,
      this.rateMeGroup.get('phone').value,
      this.rateMeGroup.get('country').value,
      this.rateMeGroup.get('comment').value,
      false
    ));
    this.rateMeGroup.reset();
  }
}
