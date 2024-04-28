import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { HeaderComponent } from 'src/app/modules/common/header/header.component';
import { FooterComponent } from 'src/app/modules/common/footer/footer.component';



@NgModule({
  declarations: [
    BaseComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule
  ]
})
export class ThemeModule { }
