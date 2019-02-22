window.onscroll = scrollFunction;
const $navbar_links = document.querySelector('#navbar-links').querySelectorAll('a');
const $body = document.querySelector('body');
const body_from_top = $body.getBoundingClientRect().top;
const $sections = $body.querySelectorAll('section[id][class]')
const GAP_FROM_TOP_VIEW = 430;

$navbar_links.forEach(($a_button) => {
  $a_button.addEventListener('click', (event) => {
    event.preventDefault();
    Jump(`#${$a_button.dataset.anchor}`,{
      offset: -60
    });
  });
});

function scrollFunction() {
  switch(true){
    case ((($sections[2].getBoundingClientRect().top - body_from_top) - GAP_FROM_TOP_VIEW) <= 0):
      $navbar_links[0].classList.remove('is-active');
      $navbar_links[1].classList.remove('is-active');
      $navbar_links[2].classList.add('is-active');
    break;
    case ((($sections[1].getBoundingClientRect().top - body_from_top) - GAP_FROM_TOP_VIEW) <= 0):
      $navbar_links[0].classList.remove('is-active');
      $navbar_links[2].classList.remove('is-active');
      $navbar_links[1].classList.add('is-active');
    break;
    case ((($sections[0].getBoundingClientRect().top - body_from_top) - GAP_FROM_TOP_VIEW) <= 0):
      $navbar_links[1].classList.remove('is-active');
      $navbar_links[2].classList.remove('is-active');
      $navbar_links[0].classList.add('is-active');
    break;
  }

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("goTopButton").style.display = "block";
  } else {
    document.getElementById("goTopButton").style.display = "none";
    $navbar_links[0].classList.remove('is-active');
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  Jump(document.body.getBoundingClientRect().y, {
    offset: -80
  });
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