chrome.runtime.sendMessage({type: "getCredentials"}, function(credentials) {
    document.getElementById("UserName").value = credentials.username;
    document.getElementById("Password").value = credentials.password;
});

var captcha = document.querySelector('.captcha').innerText;
document.getElementById("SecurityCode").value = captcha;

const submitButton = document.querySelector('input[type="submit"]');
 submitButton.click();
