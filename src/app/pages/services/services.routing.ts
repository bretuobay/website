import { TrainingAndSupportComponent } from './training-and-support/training-and-support.component';
import { TechnologyComponent } from './technology/technology.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { ServicesHomeComponent } from './services-home/services-home.component';
import { DesignComponent } from './design/design.component';
import { ServicesComponent } from './services.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


const routes: Route[] = [
  {
    path: '',
    component: ServicesComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      {path: 'home', component: ServicesHomeComponent},
      {path: 'design', component: DesignComponent},
      {path: 'engineering', component: EngineeringComponent},
      {path: 'technology', component: TechnologyComponent},
      {path: 'support', component: TrainingAndSupportComponent}
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
