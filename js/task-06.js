const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);
 
function onInputBlur() {
  const hasCorectLength = input.value.length === +input.dataset.length;
  input.classList.toggle('invalid', !hasCorectLength);
  input.classList.toggle('valid', hasCorectLength);
};