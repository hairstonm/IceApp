Selenium::WebDriver::Firefox::Binary.path='C:\Program Files (x86)\NW FF\firefox.exe'

Before do
    @browser = Watir::Browser.new
end

After do
    @browser.close
end