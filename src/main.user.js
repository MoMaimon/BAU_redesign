// ==UserScript==
// @name         BAU Portal Overhaul
// @namespace    http://tampermonkey.net/
// @version      1.2
// @match        *://*.bau.edu.jo/*
// @match        *://*.bau.edu.jo:7799/*
// @run-at       document-start
//
// @updateURL    https://raw.githubusercontent.com/MoMaimon/BAU_redesign/main/src/main.user.js
// @downloadURL  https://raw.githubusercontent.com/MoMaimon/BAU_redesign/main/src/main.user.js
// @resource     loginPortalHTML https://raw.githubusercontent.com/MoMaimon/BAU_redesign/main/pages/login_portal/index.html
// @resource     loginCSS  https://raw.githubusercontent.com/MoMaimon/BAU_redesign/main/pages/login_portal/style.css
// @grant        GM_getResourceText
// ==/UserScript==

(function () {
  "use strict";

  function addCSS(htmlString, cssString) {
    if (htmlString && cssString) {
      return htmlString.replace(
        "</head>",
        `\n<style>\n${cssString}\n</style>\n</head>`,
      );
    }
    return htmlString;
  }

  const url = window.location.href;
  let myNewHTML = "";
  let myNewCSS = "";


  if (url.includes("/reg_new/index.jsp")) {
    const hideStyle = document.createElement("style");
    hideStyle.textContent = "html { display: none !important; }";
    document.documentElement.appendChild(hideStyle);

    window.addEventListener("DOMContentLoaded", () => {
      const isLoginPage = document.getElementById("stno") !== null;

      if (isLoginPage) {
        myNewHTML = GM_getResourceText("loginPortalHTML");
        myNewCSS = GM_getResourceText("loginCSS");
      } else {
        hideStyle.remove();
      }

      myNewHTML = addCSS(myNewHTML, myNewCSS);

      if (myNewHTML !== "") {
        document.open();
        document.write(myNewHTML);
        document.close();
      }
    });

    return;
  }
})();
