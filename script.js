function convert() {
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  let result;

  // Perform the conversion based on the selected units
  if (fromUnit === "cm" && toUnit === "inch") {
    result = inputValue / 2.54;
  } else if (fromUnit === "inch" && toUnit === "cm") {
    result = inputValue * 2.54;
  } else if (fromUnit === "cm" && toUnit === "meter") {
    result = inputValue / 100;
  } else if (fromUnit === "meter" && toUnit === "cm") {
    result = inputValue * 100;
  } else if (fromUnit === "inch" && toUnit === "meter") {
    result = inputValue * 0.0254;
  } else if (fromUnit === "meter" && toUnit === "inch") {
    result = inputValue / 0.0254;
  } else {
    result = "Invalid conversion";
  }

  if (!isNaN(result)) {
    document.getElementById("result").textContent = result.toFixed(2);
  } else {
    document.getElementById("result").textContent = result;
  }
}