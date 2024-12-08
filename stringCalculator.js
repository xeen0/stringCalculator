function calculate() {
  const input = document.getElementById('inputBox').value;
  try {
    const result = add(input);
    document.getElementById('result').textContent = 'Result: ' + result;
  } catch (error) {
    document.getElementById('result').textContent = error.message;
  }
}

function add(numbers) {

}