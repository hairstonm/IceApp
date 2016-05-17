Given(/^I have started a game$/) do
  visit Game
end

When(/^I start mission$/) do
  on Game do |page|
    page.mission_button
  end
end

Then(/^a battle begins$/) do
  on Game do |page|

    WaitUtil.wait_for_condition("message log populated",
                              :timeout_sec => 5,
                              :delay_sec => 1) do
    page.message_log.size > 100
   end
  end
end