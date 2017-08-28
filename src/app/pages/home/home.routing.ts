import { HomeComponent } from './home.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
