import { SharedModule } from './../../shared/shared.module';
import { routing } from './services.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { DesignComponent } from './design/design.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { TechnologyComponent } from './technology/technology.component';
import { TrainingAndSupportComponent } from './training-and-support/training-and-support.component';
import { ServicesHomeComponent } from './services-home/services-home.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [
    ServicesComponent,
    DesignComponent,
    EngineeringComponent,
    TechnologyComponent,
    TrainingAndSupportComponent,
    ServicesHomeComponent,
    ServiceDetailsComponent
  ]
})
export class ServicesModule { }
