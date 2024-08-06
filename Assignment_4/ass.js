function convertTemperature() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        const kelvin = celsius + 273.15;
        
        document.getElementById('fahrenheit').textContent = fahrenheit.toFixed(2);
        document.getElementById('kelvin').textContent = kelvin.toFixed(2);
    } else {
        document.getElementById('fahrenheit').textContent = '';
        document.getElementById('kelvin').textContent = '';
    }
}
