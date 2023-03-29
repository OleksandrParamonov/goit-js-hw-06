const formRef = document.querySelector('form.login-form');
const ollInputRef = document.querySelectorAll('input')


formRef.addEventListener('submit', onSubmitForm)
function onSubmitForm(event) {
    event.preventDefault()
    const {
        elements: { email, password }
      } = event.currentTarget;
    
      if (email.value === "" || password.value === "") {

        return alert ("Please fill in all the fields!");
      }

      event.currentTarget.reset()
  }
