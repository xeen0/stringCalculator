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

  const nums = numbers.replace(/\n/g, ',').split(',').map(n =>parseInt(n))
  return nums.reduce((x,y) => x+y, 0)
}

module.exports = {add};