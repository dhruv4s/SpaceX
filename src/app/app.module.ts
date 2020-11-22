import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserTransferStateModule } from '@angular/platform-browser'
import { SpaceXLaunchProgramsComponent } from './space-x-launch-programs/space-x-launch-programs.component';
import { BrowserStateInterceptor } from './browserstate.interceptor';
import { SpaceXLaunchProgramsService } from './space-x-launch-programs/space-x-launch-programs.service'

@NgModule({
  declarations: [
    AppComponent,
    SpaceXLaunchProgramsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,HttpClientModule,BrowserTransferStateModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BrowserStateInterceptor,
      multi: true,
    },SpaceXLaunchProgramsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
