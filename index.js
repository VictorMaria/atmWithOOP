import readline from 'readline'
import createMultipleAccounts from './accountList';

/*
Calls the method responsible for creating 5 savings and checking accounts
And stores its result in accountList
*/
const accountList = createMultipleAccounts();

/*
This method returns an account based on the id argument supplied
*/
const fetchAccount = (id) => {
    let account
    accountList.map(oneAccount => {
        if(oneAccount._id === id) {
            account = oneAccount
        }
    })
    return account;
}



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });
  
  // Create a promise based version of rl.question so it can be used in async functions
  const question = (str) => new Promise(resolve => rl.question(str, resolve));
  
  // An object containing all the steps involved in the Bankify ATM console application
  const bankify = {
    account: '',    
    start: async () => {
      return bankify.showIdPrompt();
    },
    showIdPrompt: async () => {  
      const answer = await question('Please enter your ID \n');
      const result = fetchAccount(answer);
      if (result) { 
        bankify.account = result;  
        return bankify.showTheMenu(); }
      if (!result) { 
          console.log('\nWrong ID');
          return bankify.showIdPrompt();
        }
    },
    showTheMenu: async () => {
      const menuQuestion = await question(
        `\nWelcome to Bankify \n
        Type any of the numbers on the list + ENTER to select your preferred operation \n
        1. Check balance \n
        2. Withdraw \n
        3. Deposit \n
        4. Exit \n`);
        switch (menuQuestion) {
            case '1':
              bankify.checkBalance();
              break;
            case '2':
              bankify.withdrawFunds()
              break;
            case '3':
              bankify.depositFunds()
              break;
            case '4':
              bankify.quit();
              break; 
            default:
              console.log('Please a select a number from 1 to 4 ');
              bankify.showIdPrompt();
          }
    },
    checkBalance: async () => {
        console.log(`Your balance is N${bankify.account.currentBalance} \n`)
        const postCheckDecision = await question('Press ENTER or any key + ENTER to Quit \n');
        if(postCheckDecision.toLowerCase() !== undefined) {
            return bankify.showIdPrompt()
          }
    },
    withdrawFunds: async () => {
      const amountToWithdraw = await question('\nHow much do you want? To Cancel press Q + ENTER\n');
      if(amountToWithdraw.toLowerCase() === 'q') {
        return bankify.showIdPrompt();
      }
      if (amountToWithdraw < 1) {
        console.log('\nEnter a valid amount\n');
        return bankify.withdrawFunds();
      }
      if (!amountToWithdraw.match(/^[0-9]+$/) && !amountToWithdraw.match(/^[0-9]+\.[0-9]{2}$/)) {
        console.log('\nEnter a valid amount\n');
        return bankify.withdrawFunds();
      }
      const result = bankify.account.withdraw(parseFloat(amountToWithdraw));
      if(result === 'insufficient funds') {
        console.log('Insufficent funds');
        return bankify.withdrawFunds();
      }
      console.log(
        `\nTransaction successful \nYour new balance is N${bankify.account.currentBalance} \n`
        );
        
      const postWithdrawalDecision = await question('\nPress R + ENTER to withdraw again, ENTER or any other key + ENTER to Quit \n');
      if(postWithdrawalDecision.toLowerCase() === 'r') {
        return bankify.withdrawFunds();
      } else {
        return bankify.quit();
      }  
    },
    depositFunds: async () => {
       const amountToDeposit = await question('\nHow much are you paying? To Cancel press Q + ENTER\n');
       if(amountToDeposit.toLowerCase() === 'q') {
        return bankify.showIdPrompt();
       }
       if (!amountToDeposit.match(/^[0-9]+$/) && !amountToDeposit.match(/^[0-9]+\.[0-9]{2}$/)) {
           console.log('Enter a valid amount');
           return bankify.depositFunds();
       }
       bankify.account.deposit(parseFloat(amountToDeposit));
       console.log(`Transaction successful \nYour new balance is N${bankify.account.currentBalance} \n`);
        const postDepositDecision = await question('\nPress R + ENTER to deposit again, ENTER or any other key + ENTER to Quit \n');
        if(postDepositDecision.toLowerCase() === 'r') {
            return bankify.depositFunds();
        } else {
            return bankify.quit()
        }
    },
    quit: async () => {
        return bankify.showIdPrompt();
    },
  };
  
  // This starts the application
  bankify.start();





