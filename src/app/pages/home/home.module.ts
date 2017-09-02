import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { SloganComponent } from './banner/slogan/slogan.component';
import { CaseStudyComponent } from './banner/case-study/case-study.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { WorkedWithComponent } from './worked-with/worked-with.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { RouterModule } from '@angular/router/';
import { routing } from './home.routing';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [
    HomeComponent,
    BannerComponent,
    SloganComponent,
    CaseStudyComponent,
    AboutUsComponent,
    WhyUsComponent,
    WorkedWithComponent,
    LatestNewsComponent
  ]
})
export class HomeModule { }
