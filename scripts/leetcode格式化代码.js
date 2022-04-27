// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://leetcode-cn.com/problems/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=leetcode-cn.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  const formatCode = document.createElement('script');
  formatCode.src = 'https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.14.3/beautify.min.js';
  formatCode.setAttribute('crossorigin', 'anonymous');
  document.head.appendChild(formatCode);
  const formatBtn = document.createElement('button');
  formatBtn.innerText = 'Format';
  formatBtn.style.cssText = `
    position: absolute;
    top: 55px;
    cursor: pointer;
    right: 25px;
    border-radius: 1000px;
    border: none;
    padding: 4px 10px;
    font-size: 13px;
  `;
  formatBtn.addEventListener('click', () => {
    const editorContainer = document.querySelector('div.monaco-editor');
    const editor = window.monaco.editor.getModel(editorContainer.dataset.uri);
    if (editor && window.js_beautify) {
      const code = editor.getValue();
      const formattedCode = window.js_beautify(code, {
        indent_size: 2,
        space_in_empty_paren: true,
        preserve_newlines: false,
        end_with_newline: true,
      });
      editor.setValue(formattedCode);
    } else {
      alert('Please wait for the code to load');
    }
  });
  const timer = setInterval(() => {
    const editorContainer = document.querySelector('div.monaco-editor');
    if (editorContainer && window.js_beautify) {
      clearInterval(timer);
      editorContainer.parentElement.appendChild(formatBtn);
    }
  }, 1000);
})();
