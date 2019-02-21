/* jump.js - v1.0.2 - 2017-01-08 */!function(o,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):o.Jump=n()}(this,function(){"use strict";var o=function(o,n,t,e){return o/=e/2,o<1?t/2*o*o+n:(o--,-t/2*(o*(o-2)-1)+n)},n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},t=function(){function t(){return window.scrollY||window.pageYOffset}function e(o){return o.getBoundingClientRect().top+c}function i(o){b||(b=o),p=o-b,v=s(p,c,y,m),window.scrollTo(0,v),p<m?window.requestAnimationFrame(i):r()}function r(){window.scrollTo(0,c+y),d&&l&&(d.setAttribute("tabindex","-1"),d.focus()),"function"==typeof w&&w(),b=!1}function u(r){var u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(m=u.duration||1e3,a=u.offset||0,w=u.callback,s=u.easing||o,l=u.a11y||!1,c=t(),"undefined"==typeof r?"undefined":n(r)){case"number":d=void 0,l=!1,f=c+r;break;case"object":d=r,f=e(d);break;case"string":d=document.querySelector(r),f=e(d)}switch(y=f-c+a,n(u.duration)){case"number":m=u.duration;break;case"function":m=u.duration(y)}window.requestAnimationFrame(i)}var d=void 0,c=void 0,f=void 0,a=void 0,s=void 0,l=void 0,y=void 0,m=void 0,b=void 0,p=void 0,v=void 0,w=void 0;return u},e=t();return e});

window.onscroll = scrollFunction;
const $navbar_links = document.querySelector('#navbar-links');

$navbar_links.querySelectorAll('a').forEach(($a_button) => {
  $a_button.addEventListener('click', (event) => {
    event.preventDefault();
    Jump(`#${$a_button.dataset.anchor}`);
  })
})

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("goTopButton").style.display = "block";
  } else {
    document.getElementById("goTopButton").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  Jump(document.body.getBoundingClientRect().y);
}

function onFocusMaximize(target){
  target.firstElementChild.classList.add('focusMaximize');
}

function onUnFocusMinimize(target){
  target.firstElementChild.classList.remove('focusMaximize');
}

function showSocialMedia(target){
  target.firstElementChild.classList.add('focusMaximize');
  target.firstElementChild.children[4].style = 'visibility: visible';
}

function hideSocialMedia(target){
  target.firstElementChild.classList.remove('focusMaximize');
  target.firstElementChild.children[4].style = 'visibility: hidden';
}