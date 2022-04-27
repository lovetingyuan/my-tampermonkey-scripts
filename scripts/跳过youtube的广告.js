// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/watch*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  const timer = setInterval(() => {
    const btn = document.querySelector('.ytp-ad-skip-button.ytp-button');
    if (btn) {
      btn.click();
      clearInterval(timer);
    }
  }, 500);
})();
