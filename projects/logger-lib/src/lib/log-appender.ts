import { InjectionToken } from '@angular/core';
export type LogLevel = 'DEBUG' | 'LOG';

export const LOG_APPENDERS = new InjectionToken<LogAppender[]>('LOG_APPENDERS');

export abstract class LogAppender {
    abstract append(level: LogLevel, msg: string): void;
}

export class DefaultLogAppender implements LogAppender {
    append(level: LogLevel, msg: string): void {

        if (level === 'DEBUG') {
            console.debug(msg);
        }
        else {
            console.log(msg);
        }
    }
}