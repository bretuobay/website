import { PhoenixConsultingComponent } from './phoenix-consulting/phoenix-consulting.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularConsultingComponent } from 'app/pages/consulting/angular-consulting/angular-consulting.component';
import { SharedModule } from 'app/shared/shared.module';
import { ConsultingTemplateComponent } from './shared/consulting-template/consulting-template.component';

const routing: ModuleWithProviders = RouterModule.forChild([
  {path: '', redirectTo: 'angular'},
  {path: 'angular', component: AngularConsultingComponent},
  {path: 'phoenix', component: PhoenixConsultingComponent},
]);

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [
    AngularConsultingComponent,
    PhoenixConsultingComponent,
    ConsultingTemplateComponent
  ]
})
export class ConsultingModule { }
