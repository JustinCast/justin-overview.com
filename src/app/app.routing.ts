import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { RateMeComponent } from "./rate-me/rate-me.component";
import { MyLoveComponent } from "./my-love/my-love.component";
import { MainComponent } from "./main/main.component";
import { LoveComponent } from "./love/love.component";

export const ROUTES: Routes = [
  { path: "", component: MainComponent, pathMatch: "full" },
  { path: "rate-me", component: RateMeComponent },
  { path: "love", component: LoveComponent },
  { path: "my-love", component: MyLoveComponent },
];