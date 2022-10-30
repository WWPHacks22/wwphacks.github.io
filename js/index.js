// $(function() {
//     $('ul.nav a').bind('click', function(event) {
//         event.preventDefault();
//         var $anchor = $(this);
//         console.log($anchor.attr('href'))
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top
//         }, 1000);
//         event.preventDefault();
//     });
// });

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
    document.getElementById('main-nav').style.padding = '1em 0 0 0';
    document.getElementById('main-nav').style.background = '#1A0063d9';
    document.getElementById('main-nav').style.height = '10em';
  } else {
    document.getElementById('main-nav').style.padding = '3em 0 0 0';
    document.getElementById('main-nav').style.background = 'transparent';
  }
}

// $('#main-nav').bind('click', 'ul li a', function(event) {
//     event.preventDefault();
//     var location = $(event.target.hash).offset().top;
//     $('html, body').animate({
//         scrollTop: location
//     }, 500);
// });

// init controller
var controller = new ScrollMagic.Controller();

var revealElements = document.getElementsByClassName('faq-card');
for (let i = 0; i < revealElements.length; i++) {
  // create a scene for each element
  new ScrollMagic.Scene({
    triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
    offset: 20, // start a little later
    triggerHook: 0.9,
  })
    .setClassToggle(revealElements[i], 'visible') // add class toggle
    .addTo(controller);
}

document.getElementById('signup-button').onclick = function () {
  location.href = 'https://wwphacks.devpost.com/';
};

document.getElementById('discord-button').onclick = function () {
  location.href = 'https://discord.gg/8HAVggeyMv';
};
