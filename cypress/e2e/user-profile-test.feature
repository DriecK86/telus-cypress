Feature: Login

    Feature Description: Happy path for editing user profile

    Scenario: Should be able to get in the login page
        Given that I visit telus test page
        And I enter my email 'johnaldriecknonog@gmail.com' to Continue
        When I enter my password 'ThisisjustaTest@123' to Sign in
        Then I should be see 'dashboard' page

    Scenario: Should be able to edit my contact info and location
        Given that I am in the 'dashboard' page
        And I click the my profile menu link in the profile icon
        And headed to 'basic-info' page
        When I edit my middle name 'Auxilio', phone number '9166509412' and address 'Poblacion'
        Then changes should appear 'Auxilio','9166509412' and 'Poblacion'

    Scenario: Should be able to change my language
        Given that I'm in the user profile page 'basic-info'
        And I click the Languages link and directed to 'languages' page
        When I click add
        And add 'Filipino (Philippines)' as primary
        And add 'Breton (France)' for other, with proficiency of 'Limited working proficiency'
        And click Save
        Then changes should contains 'Filipino','Native','Breton' and 'Limited working'

    Scenario: Should be able to sign out
        Given that I'm in the 'languages' page
        When I click the profile icon and also click the sign out link
        And I should be in the 'logout' page