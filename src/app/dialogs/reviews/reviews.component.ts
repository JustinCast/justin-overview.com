import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { ApiManagementService } from "src/app/api-management.service";
import { Review } from "src/app/models/Review";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-reviews",
  templateUrl: "./reviews.component.html",
  styleUrls: ["./reviews.component.scss"]
})
export class ReviewsComponent implements OnInit {
  reviews: Array<Review>;
  
  constructor(
    public dialogRef: MatDialogRef<ReviewsComponent>,
    private _api: ApiManagementService
  ) {}

  ngOnInit() {
    this._api
      .getReviews()
      .subscribe(
        reviews => (this.reviews = reviews),
        (err: HttpErrorResponse) => this._api.errorHandler(err)
      );
  }
}
