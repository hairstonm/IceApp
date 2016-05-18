Feature:Combat Mission

  Scenario: Go on a mission
    When I start mission
    Then a battle begins

  Scenario: Redshirt wins battle
    Given I start mission
    When a monster dies
    Then the redshirt is announced in the log