import { Invoice } from "./invoice";

export class TransactionList extends Invoice {
    public description: string;
    public deposit: number;
    public removal: number;
    public inventory: number;
}