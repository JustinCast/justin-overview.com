import { Component, AfterViewInit, OnInit } from "@angular/core";
import { ApiManagementService } from "./api-management.service";
//import * as download from "download-pdf";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit, OnInit {
  year;
  pdf: string = "../assets/cv.pdf";
  collapsed = true;
  technologies = {
    Angularjs: "../assets/",
    Nodejs: "",
    "Angular 2+": "",
    Mongo: "",
    "MSSQL Server": "",
    "PostgreSQL": "",
    "Bootstrap": "",
    "Angular Material": "",
    "GraphQL": "",
    "Apollo": "",
    "C#": "",
    "Java": "",
    "JavaScript": "",
    "C": "",
    "C++": "",
  };

  constructor(private _api: ApiManagementService) {}

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  ngOnInit() {
    var d = new Date();
    this.year = d.getFullYear();
  }
  ngAfterViewInit() {}

  onDownloadClick() {}
}
