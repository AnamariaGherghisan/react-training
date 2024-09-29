## User Story

As a user I should be able to view the current and the 5 day forecast weather information for a specific city

## Acceptance Criteria

- I should be able to see a banner with a title "Weather App" and a sub-title of "Get accurate weather information"
- I should be able to search by city name
- I should be presented with an error message "Please enter a valid city name" if I proceed to submit an empty city name
- I should be able to see the current weather information for my city "Tokyo" on initial render
- I should be able to see the current weather information for a given city name with the following details:
  - city name
  - temperature
  - weather icon
  - humidity
  - pressure
  - wind speed
  - weather description
- I should be presented with a button "Show Daily Forecast" such that when I click on the button I should be presented with a 5 day forecast of the corresponding city with the following details in each weather forecast card:
  - formatted date (Fri 2nd Dec)
  - weather description
  - current temperature
  - weather icon
  - minimum temperature
  - maximum temperature
  - humidity
  - pressure
  - wind speed
- I should be able to save my previous searches in local storage when data is successfully retrieved and be able to view my search along with the weather information
- I should be able to view my previous searches from local storage when the application loads
- I should see an error message "Unable to retrieve current weather information, please try again" if there is a network error for the current weather information
- I should see an error message "Unable to retrieve forecast weather information, please try again" if there is a network error for the forecast weather information

## Resources

### URLS

[Current Data](https://api.openweathermap.org/data/2.5/weather?q=london&appid=393609ac7b2e5f25ccdd00e626ee13dd)

[Daily forecast Data](https://api.openweathermap.org/data/2.5/onecall?lat=51.5085&lon=0.1257&appid=393609ac7b2e5f25ccdd00e626ee13dd&units=imperial)

### How to get the weather Icon?

Firstly, you will need to get the **icon code** from the API (urls above). Once you have the icon code, you can use the following URL to get your icon image:

`https://openweathermap.org/img/wn/{iconCode}@4x.png`

For example, if the code is `04d`, then then the URL will be:

`https://openweathermap.org/img/wn/04d@4x.png`

## Wireframes

**Use your imagination** when building your solution. You can use the following to help guide you how to structure your app.

### Initial load

### When clicking on the daily forecast button
