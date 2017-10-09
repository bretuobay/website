import { CDNPipe } from './pipes/cdn.pipe';
import { ResizePipe } from './pipes/resize.pipe';
import { CanvasAnimateService } from './services/canvas-animate.service';
import { DataService } from 'app/shared/services/data.service';
import { FooterComponent } from 'app/shared/footer/footer.component';
import { HeaderComponent } from 'app/shared/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LetsBuildBtnComponent } from './lets-build-btn/lets-build-btn.component';
import { ReadMoreLinkComponent } from './read-more-link/read-more-link.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HireUsFormComponent } from './hire-us-form/hire-us-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [
    LetsBuildBtnComponent,
    ReadMoreLinkComponent,
    HeaderComponent,
    FooterComponent,
    ResizePipe,
    CDNPipe,
    HireUsFormComponent
  ],
  exports: [
    LetsBuildBtnComponent,
    ReadMoreLinkComponent,
    HeaderComponent,
    FooterComponent,
    ResizePipe,
    CDNPipe,
    HireUsFormComponent
  ],
  providers: [
    DataService,
    CanvasAnimateService
  ]
})
export class SharedModule { }
