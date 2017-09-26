import { RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';

const routing: ModuleWithProviders = RouterModule.forChild([
  {path: '', component: BlogComponent}
]);

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [BlogComponent]
})
export class BlogModule { }
