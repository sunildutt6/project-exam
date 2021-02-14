const weatherurl = "https://api.openweathermap.org/data/2.5/weather?q=Norway&appid=354539c5d1556bb74a77f5ae5a548f73";
const resultsContainer = document.querySelector(".results")
async function getWeather() {
    const promise = await fetch(weatherurl)
    const json = await promise.json();
   
  resultsContainer.innerHTML = `<h3> ${json.name} forecast</h3>
                                  <p class= "section-para">${json.weather[0].description} </p>
                                  <p>Humidity: ${json.main.humidity}%</p>
                                  <p>Wind-speed: ${json.wind.speed} mph</p>`;

}
getWeather();

