const apiKey = 'API Key';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric';


const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.waether-icon');


async function weather(city) {
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);   

    if (response.status == 404) {
        document.querySelector('.error').style.display = "block";
        document.querySelector('.waether').style.display = "none";
    } else {
        var data = await response.json();
        console.log(data);

        
        if (data.weather[0].main === 'Clouds') {
            weatherIcon.src = 'img/clouds.png'; 
        } else if (data.weather[0].main === 'Clear') {
            weatherIcon.src = 'img/clear.png';
        } else if (data.weather[0].main === 'Rain') {
            weatherIcon.src = 'img/rain.png';
        } else if (data.weather[0].main === 'Drizzle') {
            weatherIcon.src = 'img/drizzle.png';
        } else if (data.weather[0].main === 'Mist') {
            weatherIcon.src = 'img/mist.png';
        }
        
        document.querySelector('.weather').style.display = "block";
        document.querySelector('.error').style.display = "none";
        
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + 'm/h';
    }

}

searchBox.addEventListener('keypress', (event)=> {
    if (event.key === "Enter") {
        event.preventDefault();
        searchBtn.click();
    }
})

searchBtn.addEventListener('click', ()=>{
    weather(searchBox.value);
});

