(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      let thisForm = this;

      let action = thisForm.getAttribute('action');
      if (!action) {
        displayError(thisForm, 'Het formulier heeft geen actie-URL ingesteld!');
        return;
      }

      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      let formData = new FormData(thisForm);

      // Submit the form data using fetch
      fetch(action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }, // Formspree expects this header
      })
        .then(response => {
          if (response.ok) {
            return response.json(); // Parse JSON response
          } else {
            throw new Error(`${response.status} ${response.statusText} ${response.url}`);
          }
        })
        .then(data => {
          thisForm.querySelector('.loading').classList.remove('d-block');
          if (data.ok) {
            // If Formspree indicates success
            thisForm.querySelector('.sent-message').classList.add('d-block');
            thisForm.reset();
          } else {
            throw new Error(data.error || 'Formulierverzending mislukt zonder foutmelding.');
          }
        })
        .catch(error => {
          displayError(thisForm, error.message || 'Er is een fout opgetreden bij het verwerken van het formulier.');
        });
    });
  });

  // Function to display an error message
  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').textContent = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }
})();
