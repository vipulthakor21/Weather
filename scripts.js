const search = document.querySelector('.search-box button');
const locationName = document.querySelector('.location-name');
const temperature = document.querySelector('.weather-box .temperature');
const humidity = document.querySelector('.weather-details .humidity span');
const windSpeed = document.querySelector('.weather-details .wind span');

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '5dd31714cemsh99e235c295397c2p1897bdjsncd42ad354213',
        'x-rapidapi-host': 'tomorrow-io1.p.rapidapi.com'
    }
};

let getWeather = (city) => {

    fetch('https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?location=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            locationName.innerHTML = response.location.name
            temperature.innerHTML = response.timelines.minutely[0].values.temperature
            humidity.innerHTML = response.timelines.minutely[0].values.humidity
            windSpeed.innerHTML = response.timelines.minutely[0].values.windSpeed
        })
        .then(err => console.log(err))
}

search.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

search.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        e.preventDefault()
        getWeather(city.value)
    }
})
getWeather("Ahmedabad")