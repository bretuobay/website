import { SharedModule } from 'app/shared/shared.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HireUsComponent } from './hire-us/hire-us.component';
import { ThankYouComponent as HireUsThankYouComponent } from 'app/pages/contact/hire-us/thank-you/thank-you.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'environments/environment';
import { JoinUsComponent } from './join-us/join-us.component';
import { ThankYouComponent as JoinUsThankYouComponent } from './join-us/thank-you/thank-you.component';

const routing: ModuleWithProviders = RouterModule.forChild([
  {path: '', redirectTo: 'hire-us'},
  {path: 'hire-us', component: HireUsComponent},
  {path: 'hire-us/thank-you', component: HireUsThankYouComponent},
  {path: 'join-us', component: JoinUsComponent},
  {path: 'join-us/thank-you', component: JoinUsThankYouComponent}
]);

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    HireUsComponent,
    HireUsThankYouComponent,
    JoinUsComponent,
    JoinUsThankYouComponent
  ]
})
export class ContactModule { }
