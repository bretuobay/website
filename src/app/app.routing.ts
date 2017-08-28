import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { loadChildren: './pages/home/home.module#HomeModule', path: 'home' },
];

export const routing: ModuleWithProviders =
RouterModule.forRoot(routes);
