import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name=email]');
const messageInput = document.querySelector('textarea[name=message]');

const inputValues = {
  email: '',
  message: '',
};
savedValues();

form.addEventListener('input', throttle(inputMessage, 500));

function inputMessage(event) {
  inputValues[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(inputValues));
}
form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  event.target.reset();
  console.log(inputValues);
});

function savedValues() {
  const savedInput = localStorage.getItem('feedback-form-state');
  const parsedSavedInput = JSON.parse(savedInput);
  if (parsedSavedInput) {
    emailInput.value = parsedSavedInput.email;
    messageInput.value = parsedSavedInput.message;
  }
}
