
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

When(/^a monster dies$/) do
  pending
end

Then(/^the redshirt is announced in the log$/) do
  pending
end