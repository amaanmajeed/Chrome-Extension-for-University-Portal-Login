var captcha = document.querySelector('.captcha').innerText;
document.getElementById("SecurityCode").value = captcha;

setTimeout(function () {
    document.getElementById("student_id").value = "f2020266286";
    document.getElementById("Password").value = "k3@LQaC7";
}, 500);

setTimeout(function(){
  document.getElementById("loginbtn").click();
}, 1000);



