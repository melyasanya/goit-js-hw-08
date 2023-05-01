import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

// savedValues();
const inputValues = {};

form.addEventListener('input', throttle(inputMessage, 500));

function inputMessage(event) {
  inputValues[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(inputValues));
}

// function savedValues() {
//   const savedInput = localStorage.getItem('feedback-form-state');
//   const parsedSavedInput = JSON.parse(savedInput);
//   if (parsedSavedInput) {
//   }
// }

const submitForm = form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.clear();
  event.target.reset();
  console.log(inputValues);
});
