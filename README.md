# YT++

<div align="center">
# 🎬 YT++

### Elevate Your YouTube Experience

A modern, open-source Manifest V3 browser extension that enhances
YouTube with interface customization, a polished dashboard, logo
personalization, and quality-of-life improvements.

![Manifest V3](https://img.shields.io/badge/Manifest-V3-blue?style=for-the-badge)
![Chrome](https://img.shields.io/badge/Chrome-Supported-success?style=for-the-badge)
![Firefox](https://img.shields.io/badge/Firefox-Supported-orange?style=for-the-badge)
![Microsoft Edge](https://img.shields.io/badge/Microsoft%20Edge-Supported-0078D7?style=for-the-badge&logo=microsoftedge&logoColor=white)
![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
</div>

------------------------------------------------------------------------
---

## 🖼️ Preview

### 🎥 Preview Video

https://github.com/user-attachments/assets/ee2ed323-adb5-461f-9037-2f3e1204b203

### 📸 Screenshots

<table>
<tr>
<td align="center">
<img src="https://github.com/user-attachments/assets/48982a1c-d855-4967-8f46-25ed4ce5bd9c" width="320" alt="Preview 1"/>
</td>
<td align="center">
<img src="https://github.com/user-attachments/assets/7af655f2-50ff-413f-ad53-e382e8739298" width="320" alt="Preview 2"/>
</td>
</tr>
</table>

---
## ✨ Features

-   Modern popup dashboard
-   Enable/disable extension instantly
-   Custom YouTube logo toggle
-   Animated ads blocked counter
-   Estimated time saved
-   Refresh current tab shortcut
-   Quick YouTube launcher
-   Animated popup background
-   Background audio toggle
-   Persistent settings with browser storage
-   Dynamic logo injection
-   Manifest V3 architecture
-   Chrome & Firefox compatible

------------------------------------------------------------------------

# 📦 Installation

### 🎥 INSTALLATION

https://github.com/user-attachments/assets/886b666c-669f-44b2-abad-260692194be6


## 🌐 Google Chrome/EDGE

1.  Clone or download this repository.
2.  Open `chrome://extensions/`
3.  Enable **Developer mode**.
4.  Click **Load unpacked**.
5.  Select the project folder.

## 🦊 Mozilla Firefox

1.  Clone or download this repository.
2.  Open `about:debugging#/runtime/this-firefox`
3.  Click **Load Temporary Add-on...**
4.  Select `manifest.json`.

> Firefox temporary add-ons are removed after the browser closes.

------------------------------------------------------------------------

## 📁 Project Structure

``` text
YT++
├── manifest.json    # Dynamic extension configuration (Chrome & Firefox MV3)
├── content-main.js  # MAIN world script (Event trust spoofing & native player overrides)
├── content.js       # Isolated content script (MutationObserver, logic, & storage listeners)
├── content.css      # Early-injected styles (Hides static banners and promo feeds)
├── logo-manager.js   # Dynamic YouTube logo customization manager
├── popup.html        # Extension dashboard UI (Dark-themed glassmorphism panel)
├── popup.css         # Popup styling & animations          
├── popup.js            # Toggle logic, live counter animations, & storage syncing
├── styles/
│   └── logo.css         # Custom logo styles        
├── images/              # Extension iconography
│   ├── icon32.png      # 32x32 icon
│   ├── icon48.png      # 48x34 icon
│   ├── icon128.png     # 128x128 icon
│ 
└── videos/            #ui bg vdo
    ├── background.mp4   
```

------------------------------------------------------------------------

## 🚀 Tech Stack

<div align="center">
<img src="https://skillicons.dev/icons?i=js,html,css,vscode,git,github" alt="Tech Icons"/><br><br>

<img src="https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/Manifest-V3-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white">
<img src="https://img.shields.io/badge/Browser-Storage_API-34A853?style=for-the-badge&logo=googlechrome&logoColor=white">
<img src="https://img.shields.io/badge/MutationObserver-DOM_API-8A2BE2?style=for-the-badge">
</div>

  ------------------------------------------------------------------------------------------------------------------------------
  Technology                                                                                      Purpose
  ----------------------------------------------------------------------------------------------- ------------------------------
  ![JS](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)       Extension logic

  ![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)                   Popup UI

  ![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)                      Styling & animations

  ![MV3](https://img.shields.io/badge/Manifest-V3-4285F4?logo=googlechrome&logoColor=white)       Browser extension platform

  ![Storage](https://img.shields.io/badge/Storage-API-34A853?logo=googlechrome&logoColor=white)   Persistent settings

  ![DOM](https://img.shields.io/badge/DOM-MutationObserver-8A2BE2)                                Dynamic page observation
  ------------------------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------

## 🗺️ Roadmap

-   More customization
-   Theme presets
-   Localization
-   Performance improvements
-   Settings import/export

------------------------------------------------------------------------

## 🤝 Contributing

Contributions, bug reports and feature requests are welcome.

1.  Fork the repository
2.  Create a feature branch
3.  Commit your changes
4.  Open a Pull Request

------------------------------------------------------------------------

## 📄 License

Released under the MIT License.

------------------------------------------------------------------------

## 👨‍💻 Author

**Vikhyat Pathak**

GitHub: https://github.com/vikhy4t

If you like this project, consider giving it a ⭐.
