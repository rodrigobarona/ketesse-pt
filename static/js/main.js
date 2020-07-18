window.onGatsbyRouteUpdate = function() {
// Responsive video embeds
var videoEmbeds = [
  'iframe[src*="youtube.com"]',
  'iframe[src*="vimeo.com"]'
];
reframe(videoEmbeds.join(','));

// Mobile menu
var menuToggle = document.querySelectorAll('.menu-toggle');

for (var i = 0; i < menuToggle.length; i++) {
  menuToggle[i].addEventListener('click', function(e){
    document.body.classList.toggle('menu--opened');
    e.preventDefault();
  },false);
}

document.body.classList.remove('menu--opened');

// close menu when click link
var menuLinks = document.querySelectorAll("#main-navigation .menu a");

for (var i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', function(e){
    document.body.classList.remove('menu--opened');
    e.preventDefault();
  },false);
}  

// Close when Resize 
window.addEventListener('resize', function () {
  if (menuToggle.offsetParent === null) {
    document.body.classList.remove('menu--opened');
  }
}, true);

// Accordion
var accordions = document.querySelectorAll('.faq-accordion');
Array.from(accordions).forEach((accordion) => {
  var ba = new BadgerAccordion(accordion, {
    headerClass: '.accordion-trigger',
    panelClass: '.accordion-panel',
    panelInnerClass: '.accordion-content',
    openMultiplePanels: true
  });
});



// Google Tag Manager - Track Events - Requested by mariaiolanda.serra@intarget.net
var paraQueServe = document.getElementsByClassName('para-que-serve-ketesse');
var tiposDor = document.getElementsByClassName('tipos-dor');
var comoTomar = document.getElementsByClassName('como-tomar');

  paraQueServe[0].addEventListener('click', function(event){
    
    dataLayer.push({
    'event': 'website-change-page',
    'vpvname': 'para-que-serve'
    });  

    if (window.location.pathname !== '/') { 
      console.log ('not homepage');
       window.location = '/#para-que-serve-ketesse';  
    }

  },false);

  tiposDor[0].addEventListener('click', function(event){
    
    dataLayer.push({
    'event': 'website-change-page',
    'vpvname': 'tipos-dor'
    });  


    if (window.location.pathname !== '/') { 
      console.log ('not homepage');
       window.location = '/#tipos-dor';  
    }

  },false);


  comoTomar[0].addEventListener('click', function(event){
    
    dataLayer.push({
    'event': 'website-change-page',
    'vpvname': 'como-tomar'
    });  

    
    if (window.location.pathname !== '/') { 
      console.log ('not homepage');
       window.location = '/#como-tomar';  
    }

  },false);


};