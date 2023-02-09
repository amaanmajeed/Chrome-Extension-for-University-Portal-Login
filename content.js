var captcha = document.querySelector('.captcha').innerText;
document.getElementById("SecurityCode").value = captcha;

setTimeout(function () {
    // enter student id and password in the respective fields
    document.getElementById("student_id").value = "student id";
    document.getElementById("Password").value = "password";
}, 500);

setTimeout(function(){
  document.getElementById("loginbtn").click();
}, 1000);