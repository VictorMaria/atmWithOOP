import Account from './account';

class CheckingAccount extends Account {
    constructor(id, username, currentBalance, overdraft) {
        super(id, username, currentBalance);
        this._overdraft = overdraft;
    }
    get overdraft() {
        return this._overdraft;
    }
    get account() {
        const id = this._id;
        const username = this._username;
        const currentBalance = +this._currentBalance.toFixed(2);
        const dateCreated = this._dateCreated;
        const overdraft = this._overdraft;
        return {
            id,
            username,
            currentBalance,
            dateCreated,
            overdraft
        }
    }
}

export default CheckingAccount;