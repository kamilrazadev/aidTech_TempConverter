    const tempKelvin = document.getElementById('tempKelvin');
    const tempCelsius = document.getElementById('tempCelsius');
    const tempFahrenheit = document.getElementById('tempFahrenheit');

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