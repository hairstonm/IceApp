class Game
  include PageObject

  page_url "http://localhost:8000"

  button(:mission_button, :id=> "missionButton")

  div(:message_log, :id => "messageLog")

  spans(:resources, :class => "resource")
  span(:monsterHealth, :id => "monsterHealth")
  span(:monsterDamage, :id => "monsterDamage")
  span(:monsterName, :id => "monsterName")
  div(:villianCount, :id => "villianCount")
end