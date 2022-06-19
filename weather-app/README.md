# Weather Application

This web application uses the Open Weather API to display weather information of any city worldwide. The information includes temperature, weather description, sunrise and sunset time, day duration, pressure, cloudiness, etc. The user also has an ability to toggle between displaying temperature as Celsius or Fahrenheit as well as wind speed as meters/second or miles/hour.

## [Demo](https://openweatherapi-donghyun.netlify.app/)

## Reflection

I used the Module Pattern to create an IIFE - a manger that handles the action of fetching a JSON file using an API as well updating the DOM elements. I employed `async/await` syntax while fetching JSON data which always returns a `Promise`. Then I used `.then()` with callbacks to perform necessary actions. For further improvements, it would be nice to for the app to change weather icons based on the current weather, as well as change time time from EST to local time of the city searched.
