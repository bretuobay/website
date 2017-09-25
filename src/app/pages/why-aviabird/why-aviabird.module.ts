import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhyAviabirdComponent } from './why-aviabird.component';
import { RouterModule } from '@angular/router';

const routing: ModuleWithProviders = RouterModule.forChild([
  {path: '', component: WhyAviabirdComponent}
]);

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [WhyAviabirdComponent]
})
export class WhyAviabirdModule { }
