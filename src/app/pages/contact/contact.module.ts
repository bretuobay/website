import { SharedModule } from 'app/shared/shared.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HireUsComponent } from './hire-us/hire-us.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routing: ModuleWithProviders = RouterModule.forChild([
  {path: '', redirectTo: 'hire-us'},
  {path: 'hire-us', component: HireUsComponent}
]);

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [HireUsComponent]
})
export class ContactModule { }
