// My API key = ca8d1eec8f86edfe98ccc487ffb52f3f

const API_KEY = `ca8d1eec8f86edfe98ccc487ffb52f3f`;
let cityName = document.getElementById('city')

let searchButton = () => {
    let inputFlied = document.getElementById('input-area').value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputFlied}&appid=${API_KEY}&units=metric`
        // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))

}

let displayTemperature = temp => {
    innerText('city', temp.name);
    innerText('temperature', temp.main.temp)
    innerText('weather-condition', temp.weather[0].main)


    // show weather icon 

    let url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    let iconImage = document.getElementById('images-icon');
    iconImage.setAttribute('src', url);

    console.log(temp);
}


// Dinamic show city 

let innerText = (id, cityName) => {
    document.getElementById(id).innerText = cityName;

}