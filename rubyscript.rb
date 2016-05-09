require 'watir-webdriver'
Selenium::WebDriver::Firefox::Binary.path='C:\Program Files (x86)\NW FF\firefox.exe'
b = Watir::Browser.new

b.goto 'bit.ly/watir-webdriver-demo'
b.text_field(:id => 'entry_1000000').set 'Mattv'
b.select_list(:id => 'entry_1000001').select 'Ruby'
b.select_list(:id => 'entry_1000001').selected? 'Ruby'
b.button(:name => 'submit').click
b.text.include? 'Thank you'