// ==UserScript==
// @name         BAU Portal Overhaul
// @namespace    http://tampermonkey.net/
// @version      1.0
// @match        *://*.bau.edu.jo/*
// @match        *://*.bau.edu.jo:7799/*
// @run-at       document-start
// @resource     loginPortalHTML https://raw.githubusercontent.com/MoMaimon/BAU_redesign/main/pages/login_portal/index.html
// @grant        GM_getResourceText
// ==/UserScript==
(function() {
    'use strict';

    const url = window.location.href;
    let myNewHTML = "";
    console.log(url)

    if (url.includes("https://app1.bau.edu.jo:7799/reg_new/index.jsp")) { 
        myNewHTML = GM_getResourceText("loginPortalHTML");
    }

    if (myNewHTML && myNewHTML !== "") {
        window.stop();
        document.open();
        document.write(myNewHTML);
        document.close();
    }
})();