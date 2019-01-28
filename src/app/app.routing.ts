import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { RateMeComponent } from "./rate-me/rate-me.component";

export const ROUTES: Routes = [
  { path: "", component: AppComponent, pathMatch: "full" },
  { path: "rate-me", component: RateMeComponent}
];