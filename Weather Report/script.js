let appId = "7ae0bfb8521219530a0110795afd9bbd";
let units = "metrics";
let searchMethod;

function getsearchMethod(searchTerm){
    if (searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm)
        searchMethod = 'zip'
    else
        searchMethod = 'q'
}


function searchWeather(searchTerm){
    getsearchMethod(searchTerm);
    fetch(`https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result=>{
        return result.json();
    }).then(result => {
        init(result);
    })
}

function init(resultFromServer){
    console.log(resultFromServer);
    switch (resultFromServer.weather[0].main) {
        case 'Haze':
            document.body.backgroundImage = 'url("img/haze.jpg")';
            break;

        case 'Clear':
            document.body.style.backgroundImage = 'url("img/clear.jpg")';
            break;

        case 'Clouds':
            document.body.style.backgroundImage = 'url("img/cloud.jpg")';
            break;   

        case 'Rain':
        case 'Drizzle':
        case 'Mist':
            document.body.style.backgroundImage = 'url("img/rain.jpg")';
            break;

        case 'Thunderstorm':
            document.body.style.backgroundImage = 'url("img/thunder.jpg")';
            break;

        case 'Snow':
            document.body.style.backgroundImage = 'url("img/snow.jpg")';
            break;

        default:
            break; 
    };

    let weatherDecriptionHeader = document.getElementById('weatherDescriptionHeader');
    console.log(weatherDecriptionHeader);
    let cityHeader = document.getElementById('cityHeader');
    let temperatureElement = document.getElementById('temperature');
    console.log(temperatureElement);
    let windSpeedElement = document.getElementById('windSpeed');
    let humidityElement = document.getElementById('humidity');
    let weatherIcon = document.getElementById('documentIconImg');

    weatherIcon.src = ('http://openweathermap.org/img/w/' + resultFromServer.weather[0].icon + '.png');

    let resultDescription = resultFromServer.weather[0].description;

    weatherDecriptionHeader.innerText = resultDescription;
    temperatureElement.innerHTML = Math.floor(resultFromServer.main.temp) + '&#176';
    windSpeedElement.innerHTML = 'Wind at ' + Math.floor(resultFromServer.wind.speed) + 'm/s';
    cityHeader.innerHTML = resultFromServer.name;
    humidityElement.innerHTML = 'Humidity Level' + resultFromServer.main.humidity + ' %';

}
document.getElementById('searchBtn').addEventListener('click',() =>{
    let searchTerm = document.getElementById('searchInput').value;
    if (searchTerm)
        searchWeather(searchTerm);
})