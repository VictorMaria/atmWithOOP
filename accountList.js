import CheckingAccount from './checkingAccount'
import SavingsAccount from './savingsAccount';

const createMultipleAccounts = () => {
    const accounts = [];

    const stripeBarley = new SavingsAccount('202001', 'stripeBarley', 100);
    accounts.push(stripeBarley);
    const helonMust = new SavingsAccount('202002', 'elonMust', 44000);
    accounts.push(helonMust);
    const augustWalker = new SavingsAccount('202003', 'augustWalker', 2000);
    accounts.push(augustWalker);
    const solomonLane = new SavingsAccount('202004', 'solomonLane', 3000);
    accounts.push(solomonLane);
    const crispTicker = new SavingsAccount('202005', 'crispTicker', 4500);
    accounts.push(crispTicker);

    const nobu = new CheckingAccount('202101', 'nobu', 2000, 10000);
    accounts.push(nobu);
    const johnKamali = new CheckingAccount('202102', 'johnKamali', 15000, 10000);
    accounts.push(johnKamali);
    const christophHabimana = new CheckingAccount('202103', 'christophHabimana', 500000, 10000);
    accounts.push(christophHabimana);
    const jamesBurnt = new CheckingAccount('202104', 'jamesBurnt', 4000, 10000);
    accounts.push(jamesBurnt);
    const salewaJohnson = new CheckingAccount('202105', 'salewaJohnson', 6500000, 10000);
    accounts.push(salewaJohnson);

    return accounts;
}

export default createMultipleAccounts;


