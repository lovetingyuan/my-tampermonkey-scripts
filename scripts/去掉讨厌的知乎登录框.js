// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.zhihu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zhihu.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  var timer = setInterval(() => {
    const target = document.querySelector('button[aria-label="关闭"]');
    if (target) {
      target.click();
      clearInterval(timer);
    }
  }, 100);
  if (location.host === 'link.zhihu.com') {
    var timer2 = setInterval(() => {
      const target = document.querySelector('a.button');
      if (target.textContent === '继续访问') {
        target.click();
        clearInterval(timer2);
      }
    }, 100);
  }
})();
