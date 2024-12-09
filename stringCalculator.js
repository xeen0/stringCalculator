function calculate() {
  const input = document.getElementById("inputBox").value;
  try {
    const result = add(input);
    document.getElementById("result").textContent = "Result: " + result;
  } catch (error) {
    document.getElementById("result").textContent = error.message;
  }
}

const add = (numbers) => {
  if (numbers === "") return 0;

  let delimiter = ","

  if (numbers.startsWith('//')) {
    const delimiterLineEndIndex = numbers.indexOf('\n');
    delimiter = numbers.slice(2, delimiterLineEndIndex);
    numbers = numbers.slice(delimiterLineEndIndex + 1);
  }
  const nums = numbers
    .replace(/\n/g, ",")
    .split(delimiter)
    .map((n) => (n != "" ? parseInt(n) : 0));
  return nums.reduce((x, y) => x + y, 0);
};

module.exports = { add };
