// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = scrollFunction;

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("goTopButton").style.display = "block";
  } else {
    document.getElementById("goTopButton").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    var x = 0;
    const scrollUpInterval = setInterval(() => {
        x+=10;
        document.documentElement.scrollTop = document.documentElement.scrollTop-x;
    if(document.documentElement.scrollTop == 0) clearInterval(scrollUpInterval);
  }, 5)
}
