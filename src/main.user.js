// ==UserScript==
// @name         BAU Portal Overhaul
// @namespace    http://tampermonkey.net/
// @version      1.1
// @match        *://*.bau.edu.jo/*
// @match        *://*.bau.edu.jo:7799/*
// @run-at       document-start
//
// @updateURL    https://raw.githubusercontent.com/MoMaimon/BAU_redesign/login_portal/src/main.user.js
// @downloadURL  https://raw.githubusercontent.com/MoMaimon/BAU_redesign/login_portal/src/main.user.js
// @resource     loginPortalHTML https://raw.githubusercontent.com/MoMaimon/BAU_redesign/login_portal/pages/login_portal/index.html
// @resource     loginCSS  https://raw.githubusercontent.com/MoMaimon/BAU_redesign/login_portal/pages/login_portal/style.css
// @grant        GM_getResourceText
// ==/UserScript==

(function () {
  "use strict";

  // FIX 1: The function must return the modified string
  function addCSS(htmlString, cssString) {
    if (htmlString && cssString) {
      return htmlString.replace(
        "</head>",
        `\n<style>\n${cssString}\n</style>\n</head>`,
      );
    }
    return htmlString; // If no CSS, just return the original HTML
  }

  const url = window.location.href;
  let myNewHTML = "";
  let myNewCSS = ""; // FIX 2: Declare the variable so Strict Mode doesn't crash

  // FIX 3: Check for the path so it works on app1, app2, and application subdomains!
  if (url.includes("/reg_new/index.jsp")) {
    // STEP A: Instantly hide the old page to prevent a white flash
    const hideStyle = document.createElement("style");
    hideStyle.textContent = "html { display: none !important; }";
    document.documentElement.appendChild(hideStyle);

    // STEP B: Wait for the original page elements to load
    window.addEventListener("DOMContentLoaded", () => {
      // STEP C: Look for a clue (Using the ID we found in the BAU HTML!)
      const isLoginPage = document.getElementById("stno") !== null;

      if (isLoginPage) {
        // FIX 4: Actually load the HTML resource
        myNewHTML = GM_getResourceText("loginPortalHTML");
        myNewCSS = GM_getResourceText("loginCSS");
      } else {
        // Fallback for when we detect the Student Dashboard instead
        hideStyle.remove();
      }

      // Apply the CSS function and OVERWRITE myNewHTML with the result
      myNewHTML = addCSS(myNewHTML, myNewCSS);

      // STEP D: Execute the replacement
      if (myNewHTML !== "") {
        document.open();
        document.write(myNewHTML);
        document.close();
      }
    });

    return; // Stop the rest of the script from running since we handled the DOMContentLoaded event
  }

  // You can add other pages like www.bau.edu.jo down here later!
})();
