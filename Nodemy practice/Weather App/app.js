const input = document.querySelector('input')

function changeWeatherUI (weather) {
    const time = document.querySelector('.time')
    time.innerHTML = new Date().toLocaleString()

    const city = document.querySelector('.city')
    const country = document.querySelector('.country')
    const temperature = document.querySelector('.temperature .value')
    const shortDesc = document.querySelector('.short-desc')

    city.innerHTML = weather.name
    country.innerHTML = weather.sys.country

    const temp = Math.round(weather.main.temp)
    temperature.innerHTML = temp
    shortDesc.innerHTML = weather.weather[0].main 

    document.body.className = (temp >= 18 ? 'hot' : 'cold')
    
    const visibility = document.querySelector('.visibility span')
    const wind = document.querySelector('.wind span')
    const cloud = document.querySelector('.cloud span')

    visibility.innerHTML = weather.visibility + ' (m)'
    wind.innerHTML = weather.wind.speed + ' (m/s)'
    cloud.innerHTML = weather.clouds.all + ' (%)'
}

input.addEventListener('keyup', (e) => {
    if (e.key == 'Enter')
        getWeather(e.target.value)
})

async function getWeather (input) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=b616b582048eae73867cd9680824c213`)
    const weather = await res.json()
    changeWeatherUI(weather)
}

getWeather('hanoi')