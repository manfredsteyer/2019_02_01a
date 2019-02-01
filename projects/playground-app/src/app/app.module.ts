import { LOG_APPENDERS } from './../../../logger-lib/src/lib/log-appender';
import { CustomLoggerFormatter, CustomLoggerAppender } from './custom';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LoggerModule } from '@my/logger-lib';


@NgModule({
  imports: [
    BrowserModule,
    LoggerModule.forRoot({enableDebug: true}, CustomLoggerFormatter)
  ],

  declarations: [
    AppComponent
  ],
  providers: [
    {provide: LOG_APPENDERS, useClass: CustomLoggerAppender, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
