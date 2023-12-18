class Account {
    private balance: number;

    constructor(amount: number) {
        this.balance = amount;
    }

    public hasEnoughFunds = (amount: number) : boolean => this.balance >= amount;

    public getBalance() {
        return this.balance;
    }

    public withdraw(amount: number): boolean {
        if (this.hasEnoughFunds(amount)) {
            this.balance = this.balance - amount;
            return true;
        }

        return false;
    }
}

export default Account;
