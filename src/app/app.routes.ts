import { Routes } from "@angular/router";
import { HomeComponent, ButtonsComponent } from "@app/pages";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "buttons",
    component: ButtonsComponent,
  },
];
