// ==UserScript==
// @name        NzbPlanet - Improve Titles
// @namespace   https://github.com/Sporkyy/
// @match       https://nzbplanet.net/*
// @run-at      document-start
// @grant       none
// @version     1.1
// @author      Sporkyy
// @description Gives the pages on NzbPlanet.net meaningful titles
// @icon        https://www.google.com/s2/favicons?domain=nzbplanet.net
// ==/UserScript==

(() => {
  const h1 = document.querySelector('h1');
  const wdt = window.document.title;
  window.document.title = h1?.textContent?.trim() ?? wdt;
})();
