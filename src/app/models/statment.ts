export class Statment{
   name: string = "";
   accountNumber: string = "";
   phoneNumber: string = "";
   TransactionList: Transaction[] = []
}

export class Transaction {
   date: string = "";
   particulars: string = "";
   deposits: string = "";
   withdrawals: string = "";
   balance: string = "";
 }