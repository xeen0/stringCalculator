function calculate() {
  const input = document.getElementById("inputBox").value;
  try {
    const result = add(input);
    document.getElementById("result").textContent = "Result: " + result;
  } catch (error) {
    document.getElementById("result").textContent = error.message;
  }
}

window.onload = function() {
  const inputField = document.getElementById("inputBox");
  inputField.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      calculate(); 
    }
  });
}

const add = (numbers) => {
  if (numbers === "") return 0;

  let delimiter = ","
  numbers = numbers.replace(/\\n/g, '\n');

  const negativeNumbers = numbers.match(/-\d+/g);
  if (negativeNumbers) {
    throw new Error('negative numbers not allowed: ' + negativeNumbers.join(', '));
  }

  if (numbers.startsWith('//')) {
    const delimiterLineEndIndex = numbers.indexOf('\n');
    delimiter = numbers.slice(2, delimiterLineEndIndex);
    numbers = numbers.slice(delimiterLineEndIndex + 1);
  }
  const nums = numbers
    .replace(/\n/g, ",")
    .split(delimiter)
    .map((n) => isNaN(parseInt(n)) ? 0 : parseInt(n));
  return nums.reduce((x, y) => x + y, 0);
};

module.exports = { add };
