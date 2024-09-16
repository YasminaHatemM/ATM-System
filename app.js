let pass = 1234;
let balance = 1000;
let flag_pass_entered = 0;
while (1) {
  if (flag_pass_entered == 0) {
    var pin = Number(prompt("Enter your password: "));
    flag_pass_entered = 1;
  } else {
    if (pin === pass) {
      console.log(
        "Please enter the number of the operation you want to perform\n1. Deposit\n2. Withdraw\n3. Check Balance"
      );
      let operation = Number(prompt("Enter the operation number: "));
      switch (operation) {
        case 1:
          Diposit();
          break;
        case 2:
          Withdraw();
          break;
        case 3:
          ViewBalance();
          break;
        default:
          console.log("Invalid operation number.");
      }
      
      let anoter__op = prompt("Do you want to do another operation?\nyes\tno");
      if (anoter__op.toLowerCase() == "yes") {
        continue;
      } else if (anoter__op.toLowerCase() == "no") {
        break;
      } else {
        console.log("Invalid answer.");
        break;
      }
    } else {
      console.log("Wrong password, please try again.");
      flag_pass_entered = 0;
      continue;
    }
  }
}

function Diposit() {
  let depositamount = Number(prompt("Enter the amount to deposit: "));
  balance += depositamount;
  ViewBalance();
}

function Withdraw() {
  let withdrawamount = Number(prompt("Enter the amount to withdraw: "));
  if (withdrawamount <= balance) {
    balance -= withdrawamount;
    ViewBalance();
  } else {
    console.log("Insufficient balance.");
  }
}
function ViewBalance() {
  console.log(`Your balance is: ${balance}`);
}