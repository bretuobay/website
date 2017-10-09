import { PhoenixConsultingComponent } from './phoenix-consulting/phoenix-consulting.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularConsultingComponent } from 'app/pages/consulting/angular-consulting/angular-consulting.component';
import { RorConsultingComponent } from './ror-consulting/ror-consulting.component';
import { SharedModule } from 'app/shared/shared.module';

const routing: ModuleWithProviders = RouterModule.forChild([
  {path: '', redirectTo: 'angular'},
  {path: 'angular', component: AngularConsultingComponent},
  {path: 'ror', component: RorConsultingComponent},
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
    RorConsultingComponent,
    PhoenixConsultingComponent
  ]
})
export class ConsultingModule { }
