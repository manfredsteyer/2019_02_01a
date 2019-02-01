
export abstract class LogFormatter {
    abstract format(msg: string): string;
}

export class DefaultLogFormatter implements LogFormatter {
    format(msg: string): string {
        return msg;
    }
}