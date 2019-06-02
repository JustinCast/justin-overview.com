import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card';
import { ApiManagementService } from '../api-management.service';
import { DialogManagerService } from '../dialogs/dialog-manager.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
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

  constructor(private _api: ApiManagementService, public _dialog: DialogManagerService) {}

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  ngOnInit() {
    var d = new Date();
    this.year = d.getFullYear();
  }

  openReviews() {
    this._dialog.openReviews();
  }
}
