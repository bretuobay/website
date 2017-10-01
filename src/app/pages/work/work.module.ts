import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router/';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';

const routing: ModuleWithProviders = RouterModule.forChild([
  {path: '', component: WorkComponent}
]);

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [WorkComponent]
})
export class WorkModule { }
