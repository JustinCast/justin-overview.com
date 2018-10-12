import { Component, AfterViewInit, OnInit } from "@angular/core";
//import * as download from "download-pdf";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit, OnInit {
  year;
  pdf: string = "../assets/cv.pdf";

  ngOnInit() {
    var d = new Date();
    this.year = d.getFullYear();
  }
  ngAfterViewInit() {
    let style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML =
      ".background { background-color: #444344; padding-top: 0.5%; color: white}";
    document.getElementsByTagName("head")[0].appendChild(style);
    let ul = document.getElementsByClassName("mat-expansion-panel-content");
    ul[0].classList.add("background");

    // mat-tab-label-container
    let tabHeader = document.createElement("style");
    tabHeader.type = "text/css";
    tabHeader.innerHTML = ".tab { background-color: white}";
    document.getElementsByTagName("head")[0].appendChild(style);
    let el = document.getElementsByClassName("mat-tab-label-container");
    el[0].classList.add("tab");
  }

  onDownloadClick() {
    /*let options = {
      directory: "../assets/",
      filename: "cv.pdf"
    };

    download(this.pdf, options, function(err) {
      if (err) throw err;
      console.log(this.pdf);
    });*/
  }
}
