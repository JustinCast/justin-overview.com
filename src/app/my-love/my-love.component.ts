import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-love',
  templateUrl: './my-love.component.html',
  styleUrls: ['./my-love.component.scss']
})
export class MyLoveComponent implements OnInit {
  left = 30;
  constructor() { }

  ngOnInit() {
  }

}
