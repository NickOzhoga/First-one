Feature: Message
@Giggster-334
    Scenario Outline: Giggster-334 Message directly in chat
        Given User launched login page
        When User logged using the email "<SenderEmail>" and the password "<SenderPassword>"
        And User should get logged in
        And User navigates to Messaging Page
        And User chooses a recepient "<Recepient>" and sends a message 
        Then User logged out.
        And User launched login page
        And User logged using the email "<RecepientEmail>" and the password "<RecepientPassword>"
        And User navigates to Messaging Page
        And User sees the message from the sender "<Sender>"

        Examples:
           | SenderEmail                         | SenderPassword  |       Recepient|    RecepientEmail|    RecepientPassword  |   Sender|
           | giggtestacc+ca@gmail.com              | password123     |       UK-HOST|               giggtestacc+uk@gmail.com|                   z_owner_112|       NickNewTest|


    @Giggster-335
    Scenario Outline: Giggster-335 Empty message
        Given User launched login page
        When User logged using the email "<SenderEmail>" and the password "<SenderPassword>"
        And User should get logged in
        And User navigates to Messaging Page
        And User chooses a recepient "<Recepient>" and sends an empty message
        Then Send button should be absent

        Examples:

        | SenderEmail                         | SenderPassword  |       Recepient|
        | giggtestacc+ca@gmail.com              | password123     |       UK-HOST|


    @Giggster-338
    Scenario Outline: Giggster-338 Very long message
        Given User launched login page
        When User logged using the email "<SenderEmail>" and the password "<SenderPassword>"
        And User should get logged in
        And User navigates to Messaging Page
        And User chooses a recepient "<Recepient>" and sends a message with 10k+ characters
        Then Text box should be red

        Examples:

        | SenderEmail                         | SenderPassword  |       Recepient|
        | giggtestacc+ca@gmail.com              | password123     |       UK-HOST| 

    @Giggster-336
    Scenario Outline: Giggster-336 Message with contact info
        Given User launched login page
        When User logged using the email "<SenderEmail>" and the password "<SenderPassword>"
        And User should get logged in
        And User navigates to Messaging Page
        And User chooses a recepient "<Recepient>" and sends a message with contact info
        Then Message is highlighted in Blue. if hovered over, warning message appears.

        Examples:

        | SenderEmail                         | SenderPassword  |       Recepient|
        | giggtestacc+ca@gmail.com              | password123     |       UK-HOST|

     @Giggster-342
    Scenario Outline: Giggster-342 Contact Host via LD
        Given User launched login page
        When User logged using the email "<SenderEmail>" and the password "<SenderPassword>"
        And User should get logged in
        And User navigates to Location page "<Location>"
        And User clicks on Message Host
        And User confirms a recepient "<Recepient>" and sends a message
        Then User logged out.
        And User launched login page
        And User logged using the email "<RecepientEmail>" and the password "<RecepientPassword>"
        And User navigates to Messaging Page
        And User sees the LD message from the sender "<Sender>"

        Examples:
           | SenderEmail                         | SenderPassword  | Location |       Recepient|    RecepientEmail|    RecepientPassword  |   Sender|
           | giggtestacc+ca@gmail.com              | password123     | test-uk-gallery |      UK-HOST|               giggtestacc+uk@gmail.com|                   z_owner_112|       NickNewTest|        