let pass = 1234;
let balance = 1000;
let flag_pass_entered = 0;
while (1) {
  if (flag_pass_entered == 0) {
    var pin = Number(prompt("Enter your password: "));
    flag_pass_entered = 1;
  } else {
    if (pin === pass) {
      console.log("Welcome to your bank account.\nPlease enter the number of the operation you want to perform\n1. Deposit\n2. Withdraw\n3. Check Balance");
      let operation = Number(prompt("Enter the operation number: "));
      switch (operation) {
        case 1:
          let deposit = Number(prompt("Enter the amount to deposit: "));
          balance += deposit;
          console.log(`Your balance is: ${balance}`);
          break;
        case 2:
          let withdraw = Number(prompt("Enter the amount to withdraw: "));
          if (withdraw <= balance) {
            balance -= withdraw;
            console.log(`Your balance is: ${balance}`);
          } else {
            console.log("Insufficient balance.");
          }
          break;
        case 3:
          console.log(`Your balance is: ${balance}`);
          break;
        default:
          console.log("Invalid operation number.");
      }
      let anoter__op = prompt("Do you want to do another operation?\nyes\tno");
      if (anoter__op == "yes") {
        continue;
      } else {
        break;
      }
    } else {
      console.log("Wrong password, please try again.");
      flag_pass_entered = 0;
      continue;
    }
  }
}
