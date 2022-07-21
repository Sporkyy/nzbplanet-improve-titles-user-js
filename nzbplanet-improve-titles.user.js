// ==UserScript==
// @name        nzbplanet.net - Add Useful Title
// @namespace   Violentmonkey Scripts
// @match       https://nzbplanet.net/*
// @icon        https://www.google.com/s2/favicons?domain=nzbplanet.net
// @grant       none
// @version     1.0
// @author      -
// @description 2/27/2020, 7:47:01 PM
// ==/UserScript==

(() => {
  const h1 = document.querySelector('#content h1');
  if (!!h1) return (window.document.title = h1.textContent.trim());
})();
