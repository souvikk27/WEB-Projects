var password = document.getElementById("pwd1")
  , confirm_password = document.getElementById("pwd2");

function validatePassword(){
  if(pwd1.value != pwd2.value) {
    pwd2.setCustomValidity("Passwords Don't Match");
  } else {
    pwd2.setCustomValidity('');
  }
}

pwd1.onchange = validatePassword;
pwd2.onkeyup = validatePassword;