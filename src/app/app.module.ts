import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxMdIconModule } from '../../../ngx-md-icon/src/lib/ngx-md-icon.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
   declarations: [AppComponent],
   imports: [BrowserModule, AppRoutingModule, NgxMdIconModule],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
