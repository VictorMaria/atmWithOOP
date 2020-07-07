import Account from './account'

export default class SavingsAccount extends Account {
    constructor(id, username, currentBalance, annualInterestRate = 20) {
        super(id, username, currentBalance);
        this._annualInterestRate = annualInterestRate;
    }
    getMonthlyInterestRate() {
        const monthlyInterestRate = this._annualInterestRate / 12;
        return +monthlyInterestRate.toFixed(2);
    }
    getMonthlyInterest() {
        const monthlyInterest = this._currentBalance * this.getMonthlyInterestRate();
        return +monthlyInterest.toFixed(2);
    }
    get account() {
        const id = this._id;
        const username = this._username;
        const currentBalance = +this._currentBalance.toFixed(2);
        const dateCreated = this._dateCreated;
        const annualInterestRate = this._annualInterestRate;
        return {
            id,
            username,
            currentBalance,
            dateCreated,
            annualInterestRate
        }
    }
}

//export default SavingsAccount;