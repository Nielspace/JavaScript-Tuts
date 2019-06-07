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
    switch (resultFromServer.weather[0].main){
        case 'Clear':
            document.body.style.background = 'url("")';
            break;

        case 'Clouds':
            document.body.style.background = 'url("")';
            break;   

        case 'Rain':
        case 'Drizzle':
        case 'Mist':
            document.body.style.background = 'url("")';
            break;

        case 'Thundertorm':
            document.body.style.background = 'url("")';
            break;

        case 'Snow':
            document.body.style.background = 'url("")';
            break;

        default:
            break; 
}

document.getElementById('searchBtn').addEventListener('click',() =>{
    let searchTerm = document.getElementById('searchInput').value;
    if (searchTerm)
        searchWeather(searchTerm);
    
})