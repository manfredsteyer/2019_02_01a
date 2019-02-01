import { LogFormatter, LogAppender, LogLevel } from '@my/logger-lib';

export class CustomLoggerFormatter implements LogFormatter {
    format(msg: string): string {
        return `[${new Date().toISOString()}] ${msg}`;
    }
}

export class CustomLoggerAppender implements LogAppender {
    append(level: LogLevel, msg: string): void {
        let logs = sessionStorage.getItem('LOG');
        logs += level + ':' + msg + '\n';
        sessionStorage.setItem('LOG', logs);
    }
}