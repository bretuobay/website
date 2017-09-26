import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { loadChildren: './pages/home/home.module#HomeModule', path: 'home' },
  { loadChildren: './pages/services/services.module#ServicesModule', path: 'services' },
  // { loadChildren: './pages/work/work.module#WorkModule', path: 'work' },
  { loadChildren: './pages/why-aviabird/why-aviabird.module#WhyAviabirdModule', path: 'why-aviabird' },
  { loadChildren: './pages/blog/blog.module#BlogModule', path: 'blog' },
  { loadChildren: './pages/contact/contact.module#ContactModule', path: 'contact' },
];

export const routing: ModuleWithProviders =
RouterModule.forRoot(routes);
