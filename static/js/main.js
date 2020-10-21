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
var saibaMais = document.querySelectorAll("#hero .block-buttons a");

 if (window.location.pathname === '/') {
// Para track do Scroll
var heroSection = document.getElementById('hero');
var paraQueServeSection = document.getElementById('para-que-serve-ketesse');
const tiposDorSection = document.getElementById('tipos-dor');
var comoTomarSection = document.getElementById('como-tomar');

//Intersection Observer API example for scrolling events
const io_options = {
  root: null,
  rootMargin: '0px',
  //threshold: [...Array(100).keys()].map(x => x / 100)
  threshold: 0
};
let io_observer;


function io_callback (entries) {
  const ratio = entries[0].intersectionRatio;
  //const boundingRect = entries[0].boundingClientRect;
  //const intersectionRect = entries[0].intersectionRect;

  Array.prototype.forEach.call(entries, function(entry) {
    if (entries[0].isIntersecting) {
      //output.innerText = 'outside';
      console.log("Inside viewport: " + entry.target.id);
    } else {
      //output.innerText = 'inside';
      console.log("Outside viewport: " + entry.target.id);
    }
  })
}

io_observer = new IntersectionObserver(io_callback, io_options);

window.addEventListener('load', function(e) {
  var targets = document.querySelectorAll('.block');
  Array.prototype.forEach.call(targets, function(target) {
    io_observer.observe(target);
  });
});

}



  // Hero
  if (window.location.pathname === '/') {
    saibaMais[0].addEventListener('click', function(event){

      dataLayer.push({
      'event': 'website-change-page',
      'vpvname': 'hero-para-que-serve'
      });

    },false);


  heroSection.addEventListener('sal:in', function(event) {
    if(event.target === heroSection){
         //console.log('entering - hero - section');
          dataLayer.push({
          'event': 'website-change-page',
          'vpvname': 'entering-hero-section'
          });
    }
  });

  }

  // Para Que Serve
  paraQueServe[0].addEventListener('click', function(event){

    dataLayer.push({
    'event': 'website-change-page',
    'vpvname': 'para-que-serve'
    });

    if (window.location.pathname !== '/') {

       window.location = '/#para-que-serve-ketesse';
    }

  },false);
 if (window.location.pathname === '/') {
  paraQueServeSection.addEventListener('sal:in', function(event) {
    if(event.target === paraQueServeSection){
         //console.log('entering - Para Que Serve - section');
          dataLayer.push({
          'event': 'website-change-page',
          'vpvname': 'entering-ParaQueServe-section'
          });
    }

  });
}

  // Tipos de Dor
  tiposDor[0].addEventListener('click', function(event){

    dataLayer.push({
    'event': 'website-change-page',
    'vpvname': 'tipos-dor'
    });


    if (window.location.pathname !== '/') {

       window.location = '/#tipos-dor';
    }

  },false);

 //if (window.location.pathname === '/') {
  //tiposDorSection.addEventListener('sal:in', function(event) {
  //  if(event.target === tiposDorSection){
    //     console.log('entering - Tipos Dor - section');
      //     dataLayer.push({
        //  'event': 'website-change-page',
          //'vpvname': 'entering-TiposDor-section'
          //});
  //  }

  //});
//}

  // Como Tomar
  comoTomar[0].addEventListener('click', function(event){

    dataLayer.push({
    'event': 'website-change-page',
    'vpvname': 'como-tomar'
    });


    if (window.location.pathname !== '/') {

       window.location = '/#como-tomar';
    }

  },false);

 if (window.location.pathname === '/') {
  comoTomarSection.addEventListener('sal:in', function(event) {
    if(event.target === comoTomarSection){
         //console.log('entering - Como Tomar - section');
           dataLayer.push({
          'event': 'website-change-page',
          'vpvname': 'entering-ComoTomar-section'
          });
    }
  });
}

};
