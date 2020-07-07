class Account {
    constructor(id, username, currentBalance) {
        this._id = id;
        this._currentBalance = currentBalance;
        this._username = username;
        this._dateCreated = new Date();
    }
    get id() {
        return this._id;
    }
    get currentBalance() {
        return +this._currentBalance.toFixed(2);
    }
    get dateCreated() {
        return this.dateCreated;
    }
    get account() {
        const id = this._id;
        const username = this._username;
        const currentBalance = +this._currentBalance.toFixed(2);
        const dateCreated = this._dateCreated;
        return {
            id,
            username,
            currentBalance,
            dateCreated,
        }
    }
    set id(unqiueID) {
        this._id = unqiueID;
    }
    set currentBalance(amount) {
        return this._currentBalance = parseFloat(amount)
    }
    withdraw(amount) {
        if(parseFloat(amount) > parseFloat(this._currentBalance)) {
            return 'insufficient funds';
        }
        return this._currentBalance = parseFloat(this._currentBalance) - parseFloat(amount)
    }
    deposit(amount) {
        return this._currentBalance = parseFloat(this._currentBalance) + parseFloat(amount)
    }
}

export default Account;