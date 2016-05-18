class Game
  include PageObject

  page_url "http://localhost:8000"

  button(:mission_button, :id=> "missionButton")

  div(:message_log, :id => "messageLog")
end