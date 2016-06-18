class Game
  include PageObject

  page_url "http://localhost:8000"

  button(:mission_button, :id=> "missionButton")

  div(:message_log, :id => "messageLog")

  spans(:resources, :class => "resource")
  span(:villianHealth, :id => "villianHealth")
  span(:villianDamage, :id => "villianDamage")
  span(:villianName, :id => "villianName")
  div(:villianCount, :id => "villianCount")
end