import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name=email]');
const messageInput = document.querySelector('textarea[name=message]');

savedValues();
const inputValues = {};

form.addEventListener('input', throttle(inputMessage, 500));

function inputMessage(event) {
  event.preventDefault();
  inputValues[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(inputValues));
}
const submitForm = form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.clear();
  event.target.reset();
  console.log(inputValues);
});

function savedValues() {
  const savedInput = localStorage.getItem('feedback-form-state');
  const parsedSavedInput = JSON.parse(savedInput);

  if (parsedSavedInput.email) {
    emailInput.value = parsedSavedInput.email;
  }
  if (parsedSavedInput.message) {
    messageInput.value = parsedSavedInput.message;
  }
}
