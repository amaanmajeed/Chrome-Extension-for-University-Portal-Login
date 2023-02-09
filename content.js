// chrome.runtime.sendMessage({type: "getCredentials"}, function(credentials) {
//     document.getElementById("student_id").value = credentials.username;
//     document.getElementById("Password").value = credentials.password;
// });

var captcha = document.querySelector('.captcha').innerText;
document.getElementById("SecurityCode").value = captcha;

// document.getElementById("loginbtn").click();

setTimeout(function () {
    document.getElementById("student_id").value = "username";
    document.getElementById("Password").value = "password";
}, 1000);

setTimeout(function(){
  document.getElementById("loginbtn").click();
}, 2000);



