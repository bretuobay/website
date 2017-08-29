import { ServicesComponent } from './services.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


const routes: Route[] = [
  {
    path: '',
    component: ServicesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
