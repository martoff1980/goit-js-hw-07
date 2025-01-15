const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
  const newValue = nameInput.value.trim();

  if (newValue === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = newValue;
  }
});
