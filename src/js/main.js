window.onscroll = scrollFunction;
const $navbar_links = document.querySelector('#navbar-links').querySelectorAll('a');
const $body = document.querySelector('body');
const body_from_top = $body.getBoundingClientRect().top;
const $sections = $body.querySelectorAll('section[id][class]');
const logo_position = document.querySelector('.navbar-item').getBoundingClientRect().left;
const $section_indicator = document.querySelector('#section-indicator')

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
        $section_indicator.style.width = $navbar_links[2].getBoundingClientRect().width+'px';
        $section_indicator.style.left = (($navbar_links[2].getBoundingClientRect().left - logo_position) - 12)+'px';
      break;
      case ((($sections[1].getBoundingClientRect().top - body_from_top) - GAP_FROM_TOP_VIEW) <= 0):
        $section_indicator.style.width = $navbar_links[1].getBoundingClientRect().width+'px';
        $section_indicator.style.left = (($navbar_links[1].getBoundingClientRect().left - logo_position) - 12)+'px';
      break;
      case ((($sections[0].getBoundingClientRect().top - body_from_top) - GAP_FROM_TOP_VIEW) <= 0):
        $section_indicator.style.width = $navbar_links[0].getBoundingClientRect().width+'px';
        $section_indicator.style.left = (($navbar_links[0].getBoundingClientRect().left - logo_position) - 12)+'px';
      break;
  }

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("goTopButton").style.display = "block";
    $section_indicator.classList.add('is-active');
  } else {
    document.getElementById("goTopButton").style.display = "none";
    $section_indicator.classList.remove('is-active');
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