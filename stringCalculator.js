function calculate() {
  const input = document.getElementById('inputBox').value;
  try {
    const result = add(input);
    document.getElementById('result').textContent = 'Result: ' + result;
  } catch (error) {
    document.getElementById('result').textContent = error.message;
  }
}

const add = (numbers) => {
  if(numbers === '') return 0
}

module.exports = {add};