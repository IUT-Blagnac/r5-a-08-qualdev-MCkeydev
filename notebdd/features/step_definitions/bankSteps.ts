import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import Account from '../../src/domain/Account';
import ATM from '../../src/domain/ATM';

let atm: ATM;
let account: Account;
let withdrawalResult: boolean;
let initialBalance: number;
let withdrawalAmount: number;
let newBalance: number;

Given('the account balance is {int}', (balance: number) => {
  account = new Account(balance);
  initialBalance = account.getBalance();
});

Given('the machine contains enough money', () => {
  atm = new ATM(100000000);
});

When('the Account Holder requests {int}', (amount: number) => {
  withdrawalAmount = amount;
});

Then('the ATM should dispense {int}', (dispensedAmount: number) => {
  expect(atm.dispenseMoney(withdrawalAmount, account)).to.equal(dispensedAmount);
});

Then('the account balance should be {int}', (expectedNewBalance: number) => {
  account.withdraw(withdrawalAmount);
  newBalance = account.getBalance();
  expect(newBalance).to.equal(expectedNewBalance);
});

Then('the account balance should not change', () => {
  expect(newBalance).to.equal(initialBalance);
});

Then('the ATM should not dispense any money', () => {
  expect(atm.dispenseMoney(withdrawalAmount, account)).to.equal(0);
});