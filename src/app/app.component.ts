import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'JustinOverview';

  ngAfterViewInit() {
    
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.background { background-color: #28292a; padding-top: 0.5%; color: white}';
    document.getElementsByTagName('head')[0].appendChild(style);
    let ul = document.getElementsByClassName("mat-expansion-panel-content")
    ul[0].classList.add('background')
  }
}
