import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { RateMeComponent } from "./rate-me/rate-me.component";
import { MainComponent } from "./main/main.component";

export const ROUTES: Routes = [
  { path: "", component: MainComponent, pathMatch: "full" },
  { path: "rate-me", component: RateMeComponent }
];