When(/^I start mission$/) do
  visit Game
  on Game do |page|
    page.mission_button
  end
end

Then(/^a battle begins$/) do
  on Game do |page|

    WaitUtil.wait_for_condition("message log populated",
                                :timeout_sec => 5,
                                :delay_sec => 1) do
      page.message_log.size > 0
    end
  end
end

When(/^a redshirt kills a monster$/) do
  on Game do |page|
    WaitUtil.wait_for_condition("redshirt wins",
                                :timeout_sec => 10,
                                :delay_sec => 1) do
      page.message_log.include? "was killed"
    end
  end
end

Then(/^the redshirt gets some swag$/) do
  on Game do |page|
    resources =0
    WaitUtil.wait_for_condition("some shwag",
                                :timeout_sec => 15,
                                :delay_sec => 1) do
      page.resources_elements.each do |resource|
        resources += resource.text.to_i
      end
      resources > 0
    end
    assert(resources > 0, "shwag was supposed to be greater than zero but was #{resources}")
  end
end

Then(/^a new monster enters the fray$/) do
  villianCounter = 0
  on Game do |page|
    WaitUtil.wait_for_condition("new monster",
                                :timeout_sec => 15,
                                :delay_sec => 1) do

      villianCounter += page.villianCount.to_i
      villianCounter >0
    end
  end
  assert(villianCounter > 0, "no villians were loaded")
end

Then(/^a monsters stats are loaded$/) do
  on Game do |page|
    assert(page.villianHealth.length > 0, "monster health was not loaded")
    assert(page.villianName.length > 0, "monster name was not loaded")
  end
end

Then(/^a heros health is loaded$/) do
  on Game do |page|
    assert(page.heroHealth.length > 0, "Hero's health was not loaded")
    assert(page.heroName.length > 0, "Hero's name was not loaded")
  end
end