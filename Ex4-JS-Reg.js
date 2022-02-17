


function checkUserName(uname) {
  let valid = false;
  const min = 3, max = 25;
  console.log("Name = "+uname.value);
  const username = uname.value.trim();

  if (!isRequired(username)) {
    console.log("Name1 = "+uname.value);
    showError(uname, "Username cannot be blank.");
  }
 /* else if (!isBetween(username.length, min, max)) {
    showError(uname, "Username must be between ${min} and ${max} characters.");
  }
  */else {
    showSuccess(uname);
    valid = true;
  }
  return valid;
}

function isRequired(user){
  (user === '')? false: true;
}

function isBetween(len, min, max){
  (len > min && len < max)? true: false;
}

function showError(input, message){
  // get the form-field element
  var formField = input.parentElement;
  // add the error class
  formField.classList.remove('success');
  formField.classList.add('error');

  // show the error message
  const error = formField.querySelector('small');
  error.textContent = message;
}

function showSuccess(input){
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove('error');
  formField.classList.add('success');

  // hide the error message
  const error = formField.querySelector('small');
  error.textContent = '';
}

form.addEventListener('submit', function (e) {
  // prevent the form from submitting
  e.preventDefault();
  var uname = document.reg.fname;

  // validate forms
  let isUsernameValid = checkUserName(uname);
    /*  isEmailValid = checkEmail(),
      isPasswordValid = checkPassword(),
      isConfirmPasswordValid = checkConfirmPassword();*/

  let isFormValid = isUsernameValid;/* &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid;*/

  // submit to the server if the form is valid
  if (isFormValid) {

  }
});

document.addEventListener("DOMContentLoaded", contentLoaded);

function contentLoaded(event){
  document.getElementById('fname').addEventListener("keyup", keyUp);
}

function keyUp(event){
  var uname = document.reg.fname;
  checkUserName(uname);
  console.log(uname.value);
}

/*
const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
      // cancel the previous timer
      if (timeoutId) {
          clearTimeout(timeoutId);
      }
      // setup a new timer
      timeoutId = setTimeout(() => {
          fn.apply(null, args)
      }, delay);
  };
};

form.addEventListener('input', debounce(function (e) {
  var uname = document.reg.fname;
  switch (e.target.id) {
      case 'fname':
          checkUserName(uname);
          break;
     /* case 'email':
          checkEmail();
          break;
      case 'password':
          checkPassword();
          break;
      case 'confirm-password':
          checkConfirmPassword();
          break;
  }
}));
*/
