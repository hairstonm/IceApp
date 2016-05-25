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
    WaitUntil.wait_for_condition("some swag",
                                 :timeout_sec => 15,
                                 :delay_sec => 1) do
      page.resources.each do |span|
        span > 0
      end
    end
  end
end