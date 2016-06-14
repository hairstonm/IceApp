class Game
  include PageObject

  page_url "http://localhost:8000"

  button(:mission_button, :id=> "missionButton")

  div(:message_log, :id => "messageLog")

  spans(:resources, :class => "resource")
  # span(:iron_total, :id => "ironTotal", :class => "resource")
  # span(:copper_total, :id => "copperTotal", :class => "resource")

  # def resource
  #    [:iron_total, :copper_total]
  # end
  span(:monsterHealth, :id => "monsterHealth")
  span(:monsterDamage, :id => "monsterDamage")
  span(:monsterName, :id => "monsterName")
end