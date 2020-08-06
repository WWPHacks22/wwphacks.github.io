window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
        document.getElementById("main-nav").style.padding = "1em 0 0 0";
        document.getElementById("main-nav").style.background = "#1A0063d9";
        document.getElementById("main-nav").style.height = "6em";




    } else {
        document.getElementById("main-nav").style.padding = "3em 0 0 0";
        document.getElementById("main-nav").style.background = "transparent";
    }
}

// init controller
var controller = new ScrollMagic.Controller();

let mql = window.matchMedia('(min-width: 768px)');

if (mql.matches) {
    new ScrollMagic.Scene({
            duration: "90%", // the scene should last for a scroll distance of 100px
            offset: 1200 // start this scene after scrolling for 50px
        })
        .setPin('#scrollable-desc') // pins the element for the the scene's duration
        .addTo(controller); // assign the scene to the controller
}

new ScrollMagic.Scene({
        triggerElement: "#about-title",
        triggerHook: 0.9, // show, when scrolled 10% into view
        duration: "95%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 50 // move trigger to center of element

    })
    .setClassToggle("#about", "visible") // add class to reveal
    .addTo(controller);