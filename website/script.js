function calculateWeight() {
    const gravityFactors = {
        moon: 0.165,
        venus: 0.91,
        mars: 0.38,
        mercury: 0.38,
    };

    const planet = document.getElementById("planet").value;
    const earthweight = parseFloat(document.getElementById("earthweight").value);

    const resultDiv = document.getElementById("result");

    if (isNaN(earthweight) || earthweight <= 0) {
        resultDiv.textContent = "Please enter a valid weight";
        return;
    }
    
    const factor = gravityFactors[planet];
    const newWeight = earthweight * factor;

    resultDiv.textContent = `Your weight on ${planet.charAt(0).toUpperCase() + planet.slice(1)} would be approximately ${newWeight.toFixed(2)}kg.`;
}