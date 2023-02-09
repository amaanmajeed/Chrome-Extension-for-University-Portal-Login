# Login Automation Extension

This extension automates the login process for a university portal by inputting the user's username, password, and captcha, eliminating the need for manual login.

## Files
- `manifest.json`: This file contains the necessary information for the extension to run, such as its name, version, permissions, and background scripts.
- `content.js`: This file contains the script that performs the login automation.
- `popup.html`: This file contains the HTML code for the popup that asks the user to input their username and password.
- `popup.js`: This file fetches the user's input from the popup and sends it to the content script.
- `background.js` (optional): This file runs in the background and can be used for more complex functionality, such as triggering the login automation when a specific page is loaded.
- `icons`: This folder contains the icons for the extension.

## How to Use
1. Download or clone this repository.
2. Go to the [chrome://extensions](chrome://extensions) page in your Chrome browser.
3. Turn on the Developer mode toggle switch in the top right corner.
4. Click the "Load Unpacked" button and select the folder containing the extension files.
5. Input your username and password in the popup that appears and the extension will do the rest!

## Note
- The extension is for educational purposes only. - Use it at your own risk.
- The source code is provided as-is without any warranty or support.
- The extension is not affiliated with or endorsed by the University.
- The extension is based on the latest knowledge available at the time of writing, and may not work with future updates to the university portal.
