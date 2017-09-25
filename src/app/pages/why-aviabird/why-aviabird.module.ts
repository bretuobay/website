import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhyAviabirdComponent } from './why-aviabird.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routing: ModuleWithProviders = RouterModule.forChild([
  {path: '', component: WhyAviabirdComponent}
]);

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [WhyAviabirdComponent]
})
export class WhyAviabirdModule { }
