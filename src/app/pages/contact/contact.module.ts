import { SharedModule } from 'app/shared/shared.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HireUsComponent } from './hire-us/hire-us.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { environment } from 'environments/environment';

const routing: ModuleWithProviders = RouterModule.forChild([
  {path: '', redirectTo: 'hire-us'},
  {path: 'hire-us', component: HireUsComponent},
  {path: 'hire-us/thank-you', component: ThankYouComponent}
]);

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [HireUsComponent, ThankYouComponent]
})
export class ContactModule { }
