{
  "manifest_version": 2,
  "name": "Auto Login to University Portal",
  "version": "1.0",

  "content_scripts": [
    {
      "matches": ["https://online.umt.edu.pk/Account/Login?ReturnUrl=%2F"],
      "js": ["content.js"],
      "run_at": "document_end"
    }
  ],

  "permissions": [
    "activeTab",
    "https://online.umt.edu.pk/"
  ],

  "background": {
    "scripts": ["background.js"]
  }
}
