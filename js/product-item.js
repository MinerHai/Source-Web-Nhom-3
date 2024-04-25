const valueSpan = document.getElementById('value');
const decrementBtn = document.getElementById('decrementBtn');
const incrementBtn = document.getElementById('incrementBtn');

let value = 0;

decrementBtn.addEventListener('click', () => {
  if (value > 0) {
    value--;
    updateValue();
  }
});

incrementBtn.addEventListener('click', () => {
  value++;
  updateValue();
});

function updateValue() {
  valueSpan.textContent = value;
}
