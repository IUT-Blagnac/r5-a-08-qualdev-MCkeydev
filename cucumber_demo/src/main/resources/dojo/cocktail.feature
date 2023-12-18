Feature: Cocktail Ordering

  As Romeo, I want to offer a drink to Juliette so that we can discuss together (and maybe more).

  Scenario Outline: Creating an empty order
    Given <from> who wants to buy a drink
    When an order is declared for <to>
    Then there is <nbCocktails> cocktails in the order

    Examples:
      | from  | to       | nbCocktails |
      | Romeo | Juliette |           0 |
      | Tom   | Jerry    |           0 |

  Scenario Outline: Sending a message with an order
    Given <from> who wants to buy a drink
    When an order is declared for <to>
    And a message saying "<message>" is added
    Then the ticket must say "<expected>"

    Examples:
      | from  | to       | message     | expected                                    |
      | Romeo | Juliette | Wanna chat? | Message from Romeo to Juliette: Wanna chat? |
      | Tom   | Jerry    | Hei!        | Message from Tom to Jerry: Hei!             |