/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.onInitialClientRender = () => {
    if ('onGatsbyInitialClientRender' in window && typeof window.onGatsbyInitialClientRender === 'function') {
        window.onGatsbyInitialClientRender();
    }
};

exports.onRouteUpdate = () => {
    if ('onGatsbyRouteUpdate' in window && typeof window.onGatsbyRouteUpdate === 'function') {
        window.onGatsbyRouteUpdate();
    }
};

exports.onClientEntry = () => {
    window.onload = () => { 
      

        var headerSection = document.getElementById('masthead');
        var heroSection = document.getElementById('hero');
        var paraQueServeSection = document.getElementById('para-que-serve-ketesse');
        var tiposDorSection = document.getElementById('tipos-dor');
        var comoTomarSection = document.getElementById('como-tomar');

        var headerSectionH = document.getElementById('masthead').clientHeight;
        var heroSectionH = document.getElementById('hero').clientHeight;
        var paraQueServeSectionH = document.getElementById('para-que-serve-ketesse').clientHeight;
        var tiposDorSectionH = document.getElementById('tipos-dor').offsetHeight;
        var comoTomarSectionH = document.getElementById('como-tomar').offsetHeight;

        console.log("Nav bar: " + headerSectionH + "px height");
        console.log("Hero: " + heroSectionH + "px height");
        console.log("Para que serve: " + paraQueServeSectionH + "px height");

        
       
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        window.addEventListener("scroll", function(event) { 
        
            var scroll_y = this.scrollY; 
        var scroll_x = this.scrollX; 

        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var topSite = scrollTop + headerSectionH;
        
        console.log("scrollTop: " + scrollTop);

        //console.log(scroll_x, scroll_y); 
        
        console.log (paraQueServeSection.scrollTop);
    
        var heroHeight =  headerSectionH + heroSectionH;

        //console.log (heroHeight);

            

        }); 

        if (scrollTop === 500) { 
            console.log("You are in the Para que Serve Section");
        }

     }
  }