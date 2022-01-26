Feature: Login
    Scenario Outline: Giggster-343 Signup with Correct Credentials
            Given User launched signup page
            When User signed up using the email "<EmailID>" and the password "<Password>"
            Then User should get signed up

            Examples:
                | EmailID                             | Password  |
                | giggsteraqa@gmail.com       | password123 |

    Scenario Outline: Signup with Invalid Email
        Given User launched signup page
        When User signed up using the email "<Email>" and the password "<Password>"
        Then User should not get signed up

        Examples:
            | Email             | Password  |
            | testuser_negative | Testing$1 |

    Scenario Outline: Login with Wrong Password
        Given User launched login page
        When User logged using the email "<Email>" and the password "<Password>"
        Then User should not get logged in

        Examples:
            | Email                         | Password  |
            | testuser_negative@example.com | Testing$1 |
    @Giggster-353
    Scenario Outline: Giggster-353 Login with Correct Password
        Given User launched login page
        When User logged using the email "<Email>" and the password "<Password>"
        Then User should get logged in

        Examples:
           | Email                         | Password  |
           | giggtestacc+ca@gmail.com | password123 |

    Scenario Outline: Signup with Existing Credentials
            Given User launched signup page
            When User signed up using the email "<EmailID>" and the password "<Password>"
            Then User should not get signed up

            Examples:
                | EmailID                             | Password  |
                | giggsteraqa@gmail.com      | password123 |
    @Giggster-356
    Scenario Outline: Giggster-356 Login with Google
        Given User launched Google page and logged using the email "<Email>" and the password "<Password>"
        And User launched login page
        When User logged using Google button
        Then User should get logged in

        Examples:
           | Email                         | Password  |
           | giggsteraqa                   | hesoyam1! |    

     @Giggster-352
     Scenario Outline: Giggster-352 Become a Host
        Given User launched login page
        When User logged using the email "<Email>" and the password "<Password>"
        And User should get logged in
        Then User should be able to become a Host

        Examples:
           | Email                         | Password  |
           | giggtestacc+t6@gmail.com | z_renter_2901 | 


    @Giggster-354
    Scenario Outline: Giggster-354 Login with Facebook
        Given User launched Facebook page and logged using the email "<Email>" and the password "<Password>"
        And User launched login page
        When User logged using Facebook button
        Then User should get logged in

        Examples:
           | Email                         | Password  |
           | client.testq@gmail.com                   | Password1Gigg |            
            