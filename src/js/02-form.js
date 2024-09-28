function saveFormData(event) {
  const form = event.currentTarget;
  const formData = {
    email: form.email.value,
    message: form.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateForm() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    document.querySelector('input[name="email"]').value = email || '';
    document.querySelector('textarea[name="message"]').value = message || '';
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = {
    email: form.email.value,
    message: form.message.value,
  };
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
}

document
  .querySelector('.feedback-form')
  .addEventListener('input', saveFormData);

document
  .querySelector('.feedback-form')
  .addEventListener('submit', handleSubmit);

window.addEventListener('DOMContentLoaded', populateForm);
