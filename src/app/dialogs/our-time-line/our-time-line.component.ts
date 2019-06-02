import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-our-time-line',
  templateUrl: './our-time-line.component.html',
  styleUrls: ['./our-time-line.component.scss']
})
export class OurTimeLineComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OurTimeLineComponent>) { }

  ngOnInit() {
  }

}
