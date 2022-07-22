// ==UserScript==
// @name         NzbPlanet - Improve Titles
// @namespace    https://github.com/Sporkyy/
// @version      1.0.3
// @description  Gives the pages on NzbPlanet.net meaningful titles
// @author       Sporkyy
// @match        https://nzbplanet.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nzbplanet.net
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const qs = (s, c = document) => c.querySelector(s);

  const h1 = qs('h1');
  const wd = window.document;
  const wdt = wd.title;

  wd.title = h1?.textContent?.trim() ?? wdt;
})();
