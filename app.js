//function to validate the url
function validateUrl(url) {
  var urlRegex =
    /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/; //this is the regex for url validation
  // this link is equivalent to https://regex101.com/r/kQ0lX5/1
  if (urlRegex.test(url)) {
    //.test() method is used to test the string against the regex expression
    return tru;
    e;
  } else {
    return false;
  }
}

//function to validate the email
function validateEmail(email) {
  var emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  // this will validate the email address format
  if (emailRegex.test(email)) {
    return true;
  } else {
    return false;
  }
}

//function to validate the password
function validatePassword(password) {
  var passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_]{6,16}$/;
  if (passwordRegex.test(password)) {
    return true;
  } else {
    return false;
  }
}

//function to validate the username
function validateUsername(username) {
  var usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
  if (usernameRegex.test(username)) {
    return true;
  } else {
    return false;
  }
}

//function to validate the name
function validateName(name) {
  var nameRegex = /^[a-zA-Z]{3,16}$/;
  if (nameRegex.test(name)) {
    return true;
  } else {
    return false;
  }
}

//function to validate the phone
function validatePhone(phone) {
  var phoneRegex = /^[0-9]{10,12}$/; //this is the expression for phone number validation
  // this link is equivalent to https://regex101.com/r/kQ0lX5/1
  if (phoneRegex.test(phone)) {
    return true;
  } else {
    return false;
  }
}
//grouping and capturing in regex is basically grouping and capturing the pattern in the regex expression
//and then using the group name to access the captured value
//this is the expression for phone number validation
//this link is equivalent to https://regex101.com/r/kQ0lX5/1
//this is the expression for phone number validation

//what does ? mean in regex ? means zero or one time which means it can be present or not present
// ? in url means that the url can be present or not present
