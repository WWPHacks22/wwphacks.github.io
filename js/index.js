window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
    document.getElementById("main-nav").style.padding = "1em 0 0 0";
    document.getElementById("main-nav").style.background = "#1A0063d9";
    document.getElementById("main-nav").style.height = "5em";
    document.getElementById("main-nav").style.background.filter = "blur(15px)";
   
    
    
  } else {
    document.getElementById("main-nav").style.padding = "3em 0 0 0";
    document.getElementById("main-nav").style.background = "transparent";
  }
}