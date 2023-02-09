chrome.runtime.sendMessage({type: "getCredentials"}, function(credentials) {
    document.getElementById("UserName").value = credentials.username;
    document.getElementById("Password").value = credentials.password;
});

document.getElementById("SecurityCode").value = "";
document.getElementById("SecurityCode").removeAttribute("autocomplete");
document.getElementById("SecurityCode").removeAttribute("oncopy");
document.getElementById("SecurityCode").removeAttribute("ondrag");
document.getElementById("SecurityCode").removeAttribute("ondrop");
document.getElementById("SecurityCode").removeAttribute("onpaste");

chrome.runtime.sendMessage({type: "getCaptcha"}, function(captcha) {
    document.getElementById("SecurityCode").value = captcha;
});

document.getElementById("form0").submit();
