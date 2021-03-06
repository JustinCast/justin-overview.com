import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TimeLineComponent } from './time-line/time-line.component';
import { ReviewsComponent } from './reviews/reviews.component';

@Injectable({
  providedIn: 'root'
})
export class DialogManagerService {

  constructor(public dialog: MatDialog) { }

  openTimeLine(): void {
    this.dialog.open(TimeLineComponent, {
      width: '99%',
      height: '85%',
      panelClass: 'dialog'
    });
  }

  openReviews(): void {
    this.dialog.open(ReviewsComponent, {
      width: '99.99%',
      height: '85%',
      panelClass: 'dialog'
    });
  }
  
}
