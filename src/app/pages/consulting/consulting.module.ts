import { PhoenixConsultingComponent } from './phoenix-consulting/phoenix-consulting.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularConsultingComponent } from 'app/pages/consulting/angular-consulting/angular-consulting.component';
import { SharedModule } from 'app/shared/shared.module';
import { ConsultingTemplateComponent } from './shared/consulting-template/consulting-template.component';
import { ConsultHeadComponent } from './shared/consulting-template/consult-head/consult-head.component';
import { ConsultWhyUsComponent } from './shared/consulting-template/consult-why-us/consult-why-us.component';
import { ConsultBlogsComponent } from './shared/consulting-template/consult-blogs/consult-blogs.component';
import { ConsultContactUsComponent } from './shared/consulting-template/consult-contact-us/consult-contact-us.component';
import { ConsultProofComponent } from './shared/consulting-template/consult-proof/consult-proof.component';

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
    ConsultingTemplateComponent,
    ConsultHeadComponent,
    ConsultWhyUsComponent,
    ConsultBlogsComponent,
    ConsultContactUsComponent,
    ConsultProofComponent
  ]
})
export class ConsultingModule { }
