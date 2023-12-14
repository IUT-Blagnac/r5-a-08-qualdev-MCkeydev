import Account from './Account';

class ATM {
    private balance : number;

    constructor(amount: number){
        this.balance = amount;
     }

    getBalance() : number {
        return this.balance;
    }

    public hasEnoughFunds = (amount: number) : boolean => this.balance >= amount;


    public dispenseMoney(amount: number, account: Account): number {
        if (this.hasEnoughFunds(amount) && account.hasEnoughFunds(amount)) {
            this.balance = this.balance - amount;
            return amount;
        }

        return 0;
    }
}

export default ATM;