class Game
  include PageObject

  page_url "http://localhost:8000"

  button(:mission_button, :id=> "missionButton")

  div(:message_log, :id => "messageLog")


  span(:iron_total, :id => "ironTotal", :class => "resource")
  span(:copper_total, :id => "copperTotal", :class => "resource")

end