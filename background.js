// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // If the request is to fill the form
  if (request.action === "fillForm") {
    // Get the username and password from the request
    let username = request.username;
    let password = request.password;

    // Store the username and password in local storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  }
});
