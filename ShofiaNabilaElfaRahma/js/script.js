document.getElementById("temperatureForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var temperatureInput = document.getElementById("temperatureInput").value;
  
    // Konversi suhu
    var temperature = parseFloat(temperatureInput);
    var celsius, fahrenheit;
    
  
    // Konversi dari Celsius ke Fahrenheit
    celsius = temperature;
    fahrenheit = (celsius * 9/5) + 32;
    
    temperatureOutput.textContent = fahrenheit;
    caraKalkulasi.textContent = celsius + "°C * (9/5) + 32 = " + fahrenheit + "°F";
  });

  function resetForm() {
    document.getElementById("temperatureForm").reset();
    document.getElementById("temperatureOutput").textContent="";
    document.getElementById("caraKalkulasi").textContent = "";
  }

  function reverse() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var temperatureOutput = document.getElementById("temperatureOutput").value;

    document.getElementById("temperatureInput").value = temperatureOutput;
    document.getElementById("temperatureOutput").value = temperatureInput;

    if (temperatureOutput !== "") {
      var celsius = parseFloat(temperatureOutput);
      var fahrenheit = (celsius * 9/5) + 32;
      document.getElementById("caraKalkulasi").textContent = celsius + "°C * (9/5) + 32 = " + fahrenheit + "°F";
    } else {
      var fahrenheit = parseFloat(temperatureInput);
      var celsius = (fahrenheit - 32) * 5/9;
      document.getElementById("caraKalkulasi").textContent = "(" + fahrenheit + "°F - 32) * 5/9 = " + celsius + "°C";
    }
  }

