// ==UserScript==
// @name         LoungeScript
// @namespace    https://github.com/denniskupec
// @version      0.1
// @description  Makes placing bets on CSGOLounge a little less painful
// @author       Dennis Kupec
// @match        https://csgolounge.com/match?m=*
// @match        https://csgolounge.com/mybets
// @match        https://csgolounge.com/myprofile
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  document.querySelector('#submenu > footer').insertAdjacentHTML('beforeend', '<p style="color:#33cc33">LoungeScript Installed</p>');
  document.querySelector('body > header').insertAdjacentHTML('beforeend', '<div id="ls-logger" style="padding: 3px; background:#666666; color:#FFFFFF; height:58px; width:500px; overflow:hidden; position:absolute; text-align:left; font-size:11px; font-family:"Courier New", Courier, monospace;"></div>');

  window.alert = function(message) {
    console.log("Alert: " + message);
    document.getElementById('ls-logger').insertAdjacentHTML('afterbegin', message + "<br>");
  };

  var e = document.getElementById('placebut');
  if(e) {
    e.addEventListener('click', function() {
      setInterval(this.onclick, 1000);
    });
  }

  e = document.getElementById('freezebutton');
  if(e) {
    e.addEventListener('click', function() {
      this.remove();
      setInterval(postToFreezeReturn, 1000);
    });
  }

  /* using selectors rather than calling a function directly just in case the site changes */
  e = document.querySelector('body > main > section:nth-child(2) > div.box-shiny > a:nth-child(3)');
  if(e) {
    alert("preloading bet history...");
    e.onclick();
  }

})();



