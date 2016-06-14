Feature:Combat Mission

  Scenario: Go on a mission
    When I start mission
    Then a battle begins

  Scenario: Redshirt wins battle
    Given I start mission
    When a redshirt kills a monster
    Then the redshirt gets some swag

  Scenario: New Defender enters battle when current defender dies
    Given I start mission
    When a redshirt kills a monster
    Then a new monster enters the frey

  Scenario: Combat shows monster information statistics
    When I start mission
    Then a monsters stats are loaded