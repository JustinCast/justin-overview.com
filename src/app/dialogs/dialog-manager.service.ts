import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TimeLineComponent } from './time-line/time-line.component';

@Injectable({
  providedIn: 'root'
})
export class DialogManagerService {

  constructor(public dialog: MatDialog) { }

  openTimeLine(): void {
    this.dialog.open(TimeLineComponent, {
      width: '90%',
      height: '85%'
    });
  }
}
