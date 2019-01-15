import { Component, AfterViewInit, OnInit } from "@angular/core";
import { ApiManagementService } from "./api-management.service";
import { Card } from "./models/card";
import { DialogManagerService } from "./dialogs/dialog-manager.service";
//import * as download from "download-pdf";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit, OnInit {
  year;
  pdf: string = "../assets/cv.pdf";
  collapsed = true;
  technologies: Array<Card> = [
    { name: "Angularjs", img: "../assets/angularjs.png" },
    { name: "TypeScript", img: "../assets/typescript.png" },
    { name: "Python", img: "../assets/python.png" },
    { name: "Android", img: "../assets/android.png" },
    { name: "Html5", img: "../assets/html.png" },
    { name: "Nodejs", img: "../assets/node.png" },
    { name: "Angular 2+", img: "../assets/angular.png" },
    { name: "Mongo", img: "../assets/mongo.png" },
    { name: "MSSQL Server", img: "../assets/sql-server.png" },
    { name: "PostgreSQL", img: "../assets/postgresql.png" },
    { name: "Bootstrap", img: "../assets/bootstrap.png" },
    { name: "Angular Material", img: "../assets/material.png" },
    { name: "GraphQL", img: "../assets/graphql.png" },
    { name: "Apollo", img: "../assets/apollo.png" },
    { name: "C#", img: "../assets/csharp.png" },
    { name: "Java", img: "../assets/java.png" },
    { name: "JavaScript", img: "../assets/javascript.png" },
    { name: "C", img: "../assets/c.png" },
    { name: "C++", img: "../assets/c++.png" }
  ];

  constructor(private _api: ApiManagementService, private _dialog: DialogManagerService) {}

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

