export enum Status {
    submitted = 'ثبت شده',
    suspended = 'معلق',
    canceled = 'لغو شده'
}

export class Invoice {
    public id: string;
    public number: number;
    public title: string;
    public submitDate: string;
    public priority?: string;
    public status: Status;
}