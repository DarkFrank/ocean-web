import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import {NgZorroAntdModule, NzAnchorModule, NzMenuModule} from 'ng-zorro-antd';
import {DetailComponent} from './ppt/detail/detail.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './ppt/home/home.component';
import {FooterComponent} from './ppt/footer/footer.component';

registerLocaleData(en);

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: 'prompt',
    component: FooterComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    NzLayoutModule,
    NzPaginationModule,
    NzCardModule,
    NzBackTopModule,
    NzDividerModule,
    NzGridModule,
    NgZorroAntdModule,
    NzMenuModule,
    NzAnchorModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    FooterComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
