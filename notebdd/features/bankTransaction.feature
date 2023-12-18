Feature: Transactions bancaires

  As a bank client, i would like to withdraw some funds

  Scenario Outline: The account has sufficient funds
    Given the account balance is <balance>
    And the machine contains enough money
    When the Account Holder requests <amount>
    Then the ATM should dispense <amount>
    And the account balance should be <newBalance>

    Examples:
      | balance  | amount | newBalance |
      | 1000 | 200 | 800 |
      | 1000000 | 1000000 | 0 |

Scenario Outline: The account has insufficient funds
  Given the account balance is <balance>
  And the machine contains enough money
  When the Account Holder requests <amount>
  Then the ATM should not dispense any money

  Examples:
  | balance  | amount  |
  | 1000     | 20000   |
  | 1000000  | 10000000 |
