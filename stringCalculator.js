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

const add = (numbers) => {
  totalCount++
  if (numbers === "") return 0;

  let delimitersRegex = ","
  numbers = numbers.replace(/\\n/g, '\n');

  const negativeNumbers = numbers.match(/-\d+/g);
  if (negativeNumbers) {
    throw new Error('negative numbers not allowed: ' + negativeNumbers.join(', '));
  }
  if (numbers.startsWith('//')) {
    const delimiterLineEndIndex = numbers.indexOf('\n');
    let delimiters = numbers.slice(2, delimiterLineEndIndex);
    let delimitersArray = delimiters.match(/\[(.*?)\]/g).map(d => d.slice(1, -1));
    const escapedDelimiters = delimitersArray.map(d => d.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&'));
    delimitersRegex = new RegExp(escapedDelimiters.join('|'), 'g');
    numbers = numbers.slice(delimiterLineEndIndex + 1);
  }
  const nums = numbers
    .replace(/\n/g, ",")
    .split(delimitersRegex)
    .map((n) => {
      const num = parseInt(n);
      return isNaN(num) || num > 1000 ? 0 : num;
    })
  return nums.reduce((x, y) => x + y, 0);
};

const getCalledCount = () => {
  document.getElementById("count").textContent = "Total Count: " + totalCount;
}
module.exports = { add };
