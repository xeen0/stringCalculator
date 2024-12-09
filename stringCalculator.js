var totalCount = 0

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
  totalCount = 0
  const inputField = document.getElementById("inputBox");

  inputField.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      calculate(); 
    }
  });
}

const add = (input) => {
  totalCount++;

  if (input === "") return 0;

  let delimitersRegex = ",";
  input = input.replace(/\\n/g, '\n');

  const negativeNumbers = input.match(/-\d+/g);
  if (negativeNumbers) {
    throw new Error('Negative numbers not allowed: ' + negativeNumbers.join(', '));
  }

  if (input.startsWith('//')) {
    const delimiterLineEndIndex = input.indexOf('\n');
    const delimiters = input.slice(2, delimiterLineEndIndex);
    const delimitersArray = delimiters.match(/\[(.*?)\]/g).map(d => d.slice(1, -1));
    const escapedDelimiters = delimitersArray.map(d => d.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&'));
    delimitersRegex = new RegExp(escapedDelimiters.join('|'), 'g');
    input = input.slice(delimiterLineEndIndex + 1);
  }

  const numbers = input
    .replace(/\n/g, ",")
    .split(delimitersRegex)
    .map((n) => {
      const num = parseInt(n);
      return isNaN(num) || num > 1000 ? 0 : num;
    });

  return numbers.reduce((acc, curr) => acc + curr, 0);
};

const getCalledCount = () => {
  document.getElementById("count").textContent = "Total Count: " + totalCount;
}
module.exports = { add };
