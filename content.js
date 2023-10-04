if (document.getElementById("SecurityCode")) {
  var captcha = document.querySelector('.captcha').innerText;
  document.getElementById("SecurityCode").value = captcha;
}

var std_id = "Change username & password in content.js";
var pass_code = "password";

if (document.getElementById("student_id")) {
  setTimeout(function () {
    // enter student id and password in the respective fields
    document.getElementById("student_id").value = std_id;
    document.getElementById("Password").value = pass_code;
}, 500);
} else {
  setTimeout(function () {
    // enter student id and password in the respective fields
    document.getElementById("username").value = std_id;
    document.getElementById("password").value = pass_code;
}, 500);
}

setTimeout(function(){
  document.getElementById("loginbtn").click();
}, 1000);