document.getElementById('convertButton').addEventListener('click', function() {
    // Get user input and selected units
    const temperature = parseFloat(document.getElementById('temperature').value);
    const fromScale = document.getElementById('fromScale').value;
    const toScale = document.getElementById('toScale').value;

    // Perform the temperature conversion
    const result = convertTemperature(temperature, fromScale, toScale);

    // Display the result
    document.getElementById('resultText').textContent = `${temperature} ${fromScale} is equal to ${result.toFixed(2)} ${toScale}`;
});

function convertTemperature(temperature, fromScale, toScale) {
    if (fromScale === 'Celsius') {
        if (toScale === 'Fahrenheit') {
            return (temperature * 9/5) + 32;
        } else if (toScale === 'Kelvin') {
            return temperature + 273.15;
        }
    } else if (fromScale === 'Fahrenheit') {
        if (toScale === 'Celsius') {
            return (temperature - 32) * 5/9;
        } else if (toScale === 'Kelvin') {
            return ((temperature - 32) * 5/9) + 273.15;
        }
    } else if (fromScale === 'Kelvin') {
        if (toScale === 'Celsius') {
            return temperature - 273.15;
        } else if (toScale === 'Fahrenheit') {
            return ((temperature - 273.15) * 9/5) + 32;
        }
    }

    // If units are the same, return the input temperature
    return temperature;
}
