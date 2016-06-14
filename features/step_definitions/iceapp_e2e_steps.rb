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
    resources =0;
    WaitUtil.wait_for_condition("some shwag",
                                 :timeout_sec => 15,
                                 :delay_sec => 1) do
      page.resources_elements.each do |resource|

       resources += resource.text.to_i
        assert(resources > 0, "shwag was supposed to be greater than zero but was #{resources}")
      end
    end
  end
end

Then(/^a new monster enters the frey$/) do
  pending
end

Then(/^a monsters stats are loaded$/) do
  on Game do |page|
    assert(page.monsterHealth.length > 0, "monster health was not loaded")
    assert(page.monsterName.length > 0, "monster name was not loaded")
    assert(page.monsterDamage.length >0, "monster damage was not loaded")
  end
end