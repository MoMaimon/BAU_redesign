# 🏛️ BAU Portal Overhaul: The Full Redesign

An ambitious UI/UX replacement project for the **Al-Balqa Applied University (BAU)** web ecosystem. Instead of minor styling tweaks, this project uses **Tampermonkey** to completely intercept and replace the legacy HTML of the university portals with a modern, responsive, and student-centric interface.

---

## 🚀 The Strategy: "Full Hijack"
Because the current BAU systems are built on legacy table-based architectures across multiple servers (app1, app2, etc.), we utilize a **client-side replacement strategy**:
1. **Intercept:** The script triggers at `document-start` before the browser renders the old page.
2. **Stop:** We call `window.stop()` to kill the original legacy load.
3. **Inject:** We inject a completely new, modern HTML/CSS document into the DOM.

### **Key Features**
* **Unified Design:** A consistent look across `app1`, `app2`, and `application` subdomains.
* **Mobile Optimized:** Full responsiveness for registration on the go.
* **Modern Tech:** Clean HTML5, CSS Grid/Flexbox, and optimized JavaScript.
* **RTL Support:** Native support for Arabic (Right-to-Left) typography.

---

## 📂 Project Structure
To keep the team organized, each page is treated as its own module:

    ├── pages/
    │   ├── login/          # New Login Page (HTML/CSS)
    │   ├── dashboard/      # Student Dashboard replacement
    │   └── registration/   # Course Registration overhaul
    ├── src/
    │   ├── assets/         # Images, logos, and icons (Hosted on GitHub)
    │   └── main.user.js    # The Router Script (The logic that swaps the HTML)
    └── README.md

---

## 🛠️ How to Use (For Students)
1. **Install Tampermonkey:** Available for [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/), and [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobogogocnlegbaunpooc).
2. **Add Script:** Open the Tampermonkey dashboard and click the **+** (plus) icon to create a new script.
3. **Copy `main.user.js`:** Copy the entire code from `main.user.js` in this repository, paste it into the editor, and press `Ctrl + S` to save.
4. **Visit BAU:** Navigate to any BAU portal (e.g., `online.bau.edu.jo` or the registration links), and the redesign will load automatically.

---

## 👨‍💻 Team Workflow
To ensure smooth collaboration among the developers, please follow these rules:

* **Asset Hosting:** All images and external files must use **absolute URLs** (e.g., `https://raw.githubusercontent.com/...`). The browser will look for local paths on the BAU server (`bau.edu.jo/image.png`) rather than our GitHub repo if you use relative paths.
* **URL Routing:** If you create a new page design, you must add its specific path (e.g., `/reg_new/index.jsp`) to the router logic within `main.user.js`.
* **Branching:** Work on separate feature branches for each page (e.g., `page/login`, `page/registration`) to avoid merge conflicts in the main branch.

---

## ⚖️ Disclaimer
This project is an **unofficial fan-made redesign** by Software Engineering students. It is intended for visual improvement and educational purposes only. This script **does not** handle, store, or transmit any sensitive student data, passwords, or login credentials. Use at your own risk.

---
**Built with ❤️ by SE Students at Al-Balqa Applied University.**