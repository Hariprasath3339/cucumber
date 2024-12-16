Feature: Bookcart application (Add  the books to the carts with multiple logins)

  @clear
  Scenario Outline: Add the book to the cart
    Given User click on the login link
    And User should login as "<username>" and "<password>"
    And User search the "<book>"
    And User add the book to cart
    When Badge updated successfully

    @user1
    Examples: 
      | username     | password  | book              |
      # | ortoni   | pass1234 | Rot & Ruin        |
      | Hari prasath | H@ri$uba3 | Robbie            |
      | Hari prasath | H@ri$uba3 | Dr. Strange Beard |

    # | ortonikc | pass1234 | Roomies           |
    @user2
    Examples: 
      | username     | password  | book       |
      | Hari prasath | H@ri$uba3 | Rot & Ruin |
      #  | ortoni   | pass1234 | Robbie     |
      # | ortoni   | pass1234 | Dr. Strange Beard |
     # | ortonikc | H@ri$uba3 | Roomies    |
