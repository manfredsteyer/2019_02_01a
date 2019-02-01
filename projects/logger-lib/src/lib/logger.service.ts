import { Injectable, Optional, Inject } from '@angular/core';
import { LoggerConfig } from './logger.config';
import { LogFormatter } from './log-formatter';
import { LogAppender, LOG_APPENDERS } from './log-appender';

@Injectable({
  providedIn: 'root' // <-- Available for whole App
  //          LazyModule // <-- Loaded w/ the lazy module
})
export class LoggerService {

  constructor(
    @Optional() private config: LoggerConfig,
    private logFormatter: LogFormatter,
    @Inject(LOG_APPENDERS) private logAppenders: LogAppender[]
    ) {
  }

  debug(message: string): void {
    if (this.config && !this.config.enableDebug) return;

    for(let appender of this.logAppenders) {
      appender.append('DEBUG', this.logFormatter.format(message));
    }
    
  }

  log(message: string): void {
    for(let appender of this.logAppenders) {
      appender.append('LOG', this.logFormatter.format(message));
    }
  }

}
