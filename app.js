    const tempKelvin = document.getElementById('tempKelvin');
    const tempCelsius = document.getElementById('tempCelsius');
    const tempFahrenheit = document.getElementById('tempFahrenheit');
    const weatherIcon = document.getElementById('weather-icon');

function handleWeatherIcon(){


    if( +(tempCelsius.value) >= 50  ){
        weatherIcon.src = './assets/hot-weather.png'
        weatherIcon.style.width = '300px'
    } 
    else if( +(tempCelsius.value) >= 40  ){
        weatherIcon.src = './assets/sunny-weather.jpg'
        weatherIcon.style.width = '230px'
    }
    else if( +(tempCelsius.value) >= 30  ){
        weatherIcon.src = './assets/partially-sunny.png'
        weatherIcon.style.width = '400px'
    }
    else if( +(tempCelsius.value) <= 20  ){
        weatherIcon.src = './assets/cold-weather.png'
        weatherIcon.style.width = '300px'
    }
}
function fahrenheitTo(value){
    tempCelsius.value = (+value-32)*(5/9);
    tempKelvin.value = ((+value-32)*(5/9))+273.15;
}

function celsiusTo(value){
    tempFahrenheit.value =  (+value*(9/5))+32;
    tempKelvin.value = +value+273.15;
}

function kelvinTo(value){
    tempFahrenheit.value = ((+value-273.15)*(9/5)) + 32;
    tempCelsius.value = +value-273.15;
}
