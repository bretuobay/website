import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Route, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { loadChildren: './pages/services/services.module#ServicesModule', path: 'services' },
  { loadChildren: './pages/work/work.module#WorkModule', path: 'work' },
  { loadChildren: './pages/why-aviabird/why-aviabird.module#WhyAviabirdModule', path: 'why-aviabird' },
  { loadChildren: './pages/blog/blog.module#BlogModule', path: 'blog' },
  { loadChildren: './pages/contact/contact.module#ContactModule', path: 'contact' },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders =
RouterModule.forRoot(routes);
