import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const KEY_LS = 'feedback-form-state';

const userData = JSON.parse(localStorage.getItem(KEY_LS)) || {};
feedbackForm.elements[0].value = userData.email || '';
feedbackForm.elements[1].value = userData.message || '';

const handleInput = function (event) {
  const input = event.target;

  userData[input.name] = input.value;
  localStorage.setItem(KEY_LS, JSON.stringify(userData));
};

const onSubmit = function (event) {
  event.preventDefault();

  localStorage.removeItem(KEY_LS);
  feedbackForm.reset();
  console.log(userData);
};

feedbackForm.addEventListener('input', throttle(handleInput, 500));
feedbackForm.addEventListener('submit', onSubmit);
