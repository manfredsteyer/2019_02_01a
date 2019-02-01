import { DefaultLogAppender, LogAppender, LOG_APPENDERS } from './log-appender';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogMonitorComponent } from './log-monitor.component';
import { LoggerConfig } from './logger.config';
import { DefaultLogFormatter, LogFormatter } from './log-formatter';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LogMonitorComponent
  ],
  // providers: [
  //   LoggerService
  // ],
  exports: [
    LogMonitorComponent
  ]
})
export class LoggerModule {

  // Setup
  static forRoot(config: LoggerConfig, logFormatter = DefaultLogFormatter): ModuleWithProviders {

    return {
      ngModule: LoggerModule,
      providers: [
        { provide: LoggerConfig, useValue: config },
        { provide: LogFormatter, useClass: logFormatter},
        { provide: LOG_APPENDERS, useClass: DefaultLogAppender, multi: true}
      ]
    }
  }
  
 
}
