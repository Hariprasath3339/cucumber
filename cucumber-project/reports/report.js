$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\java\\feature\\AddToCart.feature");
formatter.feature({
  "name": "Bookcart application (Add  the books to the carts with multiple logins)",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "",
  "description": "    Add the book to the cart",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@clear"
    }
  ]
});
formatter.step({
  "name": "User click on the login link",
  "keyword": "Given "
});
formatter.step({
  "name": "User should login as \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User search the \"\u003cbook\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User add the book to cart",
  "keyword": "And "
});
formatter.step({
  "name": "Badge updated successfully",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "book"
      ]
    },
    {
      "cells": [
        "ortoni",
        "pass1234",
        "Robbie"
      ]
    },
    {
      "cells": [
        "ortoni",
        "pass1234",
        "Dr. Strange Beard"
      ]
    }
  ],
  "tags": [
    {
      "name": "@user1"
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "    Add the book to the cart",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@clear"
    },
    {
      "name": "@user1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User click on the login link",
  "keyword": "Given "
});
formatter.match({
  "location": "loginsteps.userClickOnTheLoginLink()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User should login as \"ortoni\" and \"pass1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "Addtocart.userShouldLoginAsAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User search the \"Robbie\"",
  "keyword": "And "
});
formatter.match({
  "location": "Addtocart.userSearchThe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User add the book to cart",
  "keyword": "And "
});
formatter.match({
  "location": "Addtocart.userAddTheBookToCart()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "Badge updated successfully",
  "keyword": "When "
});
formatter.match({
  "location": "Addtocart.badgeUpdatedSuccessfully()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.write("Before clear the cart");
formatter.embedding("image/png", "embedded0.png");
formatter.write("After clear the cart");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "    Add the book to the cart",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@clear"
    },
    {
      "name": "@user1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User click on the login link",
  "keyword": "Given "
});
formatter.match({
  "location": "loginsteps.userClickOnTheLoginLink()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User should login as \"ortoni\" and \"pass1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "Addtocart.userShouldLoginAsAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User search the \"Dr. Strange Beard\"",
  "keyword": "And "
});
formatter.match({
  "location": "Addtocart.userSearchThe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User add the book to cart",
  "keyword": "And "
});
formatter.match({
  "location": "Addtocart.userAddTheBookToCart()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "Badge updated successfully",
  "keyword": "When "
});
formatter.match({
  "location": "Addtocart.badgeUpdatedSuccessfully()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.write("Before clear the cart");
formatter.embedding("image/png", "embedded2.png");
formatter.write("After clear the cart");
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "book"
      ]
    },
    {
      "cells": [
        "ortoni",
        "pass1234",
        "Rot \u0026 Ruin"
      ]
    },
    {
      "cells": [
        "ortonikc",
        "pass1234",
        "Roomies"
      ]
    }
  ],
  "tags": [
    {
      "name": "@user2"
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "    Add the book to the cart",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@clear"
    },
    {
      "name": "@user2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User click on the login link",
  "keyword": "Given "
});
formatter.match({
  "location": "loginsteps.userClickOnTheLoginLink()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User should login as \"ortoni\" and \"pass1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "Addtocart.userShouldLoginAsAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User search the \"Rot \u0026 Ruin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Addtocart.userSearchThe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User add the book to cart",
  "keyword": "And "
});
formatter.match({
  "location": "Addtocart.userAddTheBookToCart()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "Badge updated successfully",
  "keyword": "When "
});
formatter.match({
  "location": "Addtocart.badgeUpdatedSuccessfully()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.write("Before clear the cart");
formatter.embedding("image/png", "embedded4.png");
formatter.write("After clear the cart");
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "    Add the book to the cart",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@clear"
    },
    {
      "name": "@user2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User click on the login link",
  "keyword": "Given "
});
formatter.match({
  "location": "loginsteps.userClickOnTheLoginLink()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User should login as \"ortonikc\" and \"pass1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "Addtocart.userShouldLoginAsAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User search the \"Roomies\"",
  "keyword": "And "
});
formatter.match({
  "location": "Addtocart.userSearchThe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User add the book to cart",
  "keyword": "And "
});
formatter.match({
  "location": "Addtocart.userAddTheBookToCart()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "Badge updated successfully",
  "keyword": "When "
});
formatter.match({
  "location": "Addtocart.badgeUpdatedSuccessfully()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.write("Before clear the cart");
formatter.embedding("image/png", "embedded6.png");
formatter.write("After clear the cart");
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src\\test\\java\\feature\\login.feature");
formatter.feature({
  "name": "Bookcart application demo",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User click on the login link",
  "keyword": "Given "
});
formatter.match({
  "location": "loginsteps.userClickOnTheLoginLink()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "    Login should be success",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User enter the username as \"ortoni\"",
  "keyword": "And "
});
formatter.match({
  "location": "loginsteps.userEnterTheUsernameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User enter the password as \"pass1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "loginsteps.userEnterThePasswordAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "loginsteps.userClickTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "login should be success",
  "keyword": "Then "
});
formatter.match({
  "location": "loginsteps.loginShouldBeSuccess()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User click on the login link",
  "keyword": "Given "
});
formatter.match({
  "location": "loginsteps.userClickOnTheLoginLink()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.scenario({
  "name": "Login should be fail",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User enter the username as \"ranga\"",
  "keyword": "And "
});
formatter.match({
  "location": "loginsteps.userEnterTheUsernameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User enter the password as \"pass1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "loginsteps.userEnterThePasswordAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "loginsteps.userClickTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "login should be fail",
  "keyword": "But "
});
formatter.match({
  "location": "loginsteps.loginShouldBeFail()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});