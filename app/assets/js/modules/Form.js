import $ from 'jquery';

$('form[id="signup-form"]').submit(function(e) {
  e.preventDefault();

  validateSignUpInput();
});

$('form[id="login-form"]').submit(function(e) {
  e.preventDefault();

  validateLoginInput();
});

$(".generic__input").keyup(function() {
  var inputValueLength = $(this).val().length;

  if(inputValueLength >= 1) {
    $(this).next().removeClass("show");
    $(this).removeClass("error");
  }

});

function setError(input) {
  input.addClass("error");
  input.next().addClass("show");
  input.next().text("Please fill out this field.");
}

function removeError(input) {
  input.removeClass("error");
  input.next().removeClass("show");
  input.next().text("");
}

function validateLoginInput() {
  var loginEmail = $("#loginEmail");
  var loginPassword = $("#loginPassword");

  var loginEmailValue = loginEmail.val().trim();
  var loginPasswordValue = loginPassword.val().trim();

  if(loginEmailValue == "") {
    loginEmail.addClass("error");
    loginEmail.next().addClass("show");
    loginEmail.next().text("Email is not found");
  } else {
    loginEmail.removeClass("error");
    loginEmail.next().removeClass("show");
    loginEmail.next().text("");
  }

  if(loginPasswordValue == "") {
    loginPassword.addClass("error");
    loginPassword.next().addClass("show");
    loginPassword.next().text("Wrong Password.");
  } else {
    loginPassword.removeClass("error");
    loginPassword.next().removeClass("show");
    loginPassword.next().text("");
  }

}

function validateSignUpInput() {
  var firstName = $("#firstName");
  var lastName = $("#lastName");
  var email = $("#email");
  var password = $("#password");

  var firstNameValue = firstName.val().trim();
  var lastNameValue = lastName.val().trim();
  var emailValue = email.val().trim();
  var passwordValue = password.val().trim();

  if(firstNameValue == "") {
    setError(firstName);
  } else {
    removeError(firstName);
  }

  if(lastNameValue == "") {
    setError(lastName)
  } else {
    removeError(lastName);
  }

  if(emailValue == "") {
    setError(email)
  } else {
    removeError(email);
  }

  if(passwordValue == "") {
    setError(password)
  } else {
    removeError(password);
  }
}
