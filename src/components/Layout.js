import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {safePrefix} from '../utils';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
                    <meta charSet="utf-8"/>
                    <meta name="description" content={_.get(this.props, 'pageContext.site.siteMetadata.site_description')} />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="google" content="notranslate" />
                    <style>
                    /* Critical Path CSS Generated by Pegasaas Accelerator at https://pegasaas.com/critical-path-css-generator/ for https://www.ketesse.pt/ */
@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:local('Roboto'),local('Roboto-Regular'),url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Me5Q.ttf) format('truetype')}html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}footer,header,main,nav,section{display:block}a{background-color:transparent;-webkit-text-decoration-skip:objects}strong{font-weight:bold}img{border:0;vertical-align:middle}blockquote{quotes:none}blockquote:before,blockquote:after{content:"";content:none}button{font:inherit;margin:0}button{overflow:visible}button{text-transform:none}button{-webkit-appearance:button}button::-moz-focus-inner{border:0;padding:0}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}@font-face{font-family:'van_condensed_osf_bold_italRg';src:local("Van Condensed Bold Italic"),local("Van-Condensed-Bold-Italic"),url("/fonts/vancondensedosfbolditalic-webfont.woff2") format("woff2");font-weight:400;font-style:normal;font-display:swap}html{font-family:Roboto,sans-serif;font-size:112.5%;height:100%;min-height:100%}body{background:#f7f9fb;color:#4c5267;line-height:1.4;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased}a{border-bottom:1px solid currentColor;color:#4c5267;text-decoration:none}h1,h2{font-family:van_condensed_osf_bold_italRg;color:#8A5395;font-weight:bold;line-height:1.2;margin:2.5rem 0 0.83333rem;text-rendering:optimizeLegibility}h2:first-child{margin-top:0}h1{font-size:2.44444rem}h2{font-size:2rem}p{margin:0 0 1.66667em}blockquote{border-left:3px solid #0072ff;color:#2c2f3b;font-size:1.33333rem;line-height:1.3;margin:0 0 1.66667rem;padding-left:30px}ul{margin:0 0 1.66667em;padding:0 0 0 1.66667em}button,a.button{background:#0072ff;border-radius:3px;border:2px solid #0072ff;box-sizing:border-box;color:#fff;display:inline-block;font-size:16px;height:2.75em;line-height:1.5;padding:0.5em 30px}a.button{height:auto}.button.large{height:3em;padding-left:40px;padding-right:40px}a.button.large{height:auto;padding-bottom:0.625em;padding-top:0.625em}.button.secondary{background:transparent;color:#0072ff}.button.white{background:#fff;border-color:transparent;box-shadow:0 20px 30px 0 rgba(76,82,103,0.2);color:#4c5267}#menu-open,#menu-close{background:0;border:0;box-shadow:none;color:inherit;height:30px;padding:0;position:relative;width:30px}img{height:auto;max-width:100%}.screen-reader-text,.site-logo + .site-title{border:0;clip:rect(1px,1px,1px,1px);height:1px;overflow:hidden;padding:0;position:absolute !important;width:1px}.icon-menu,.icon-close{background:currentColor;border-radius:1px;color:inherit;height:2px;margin-top:-1px;margin-left:-12px;position:absolute;right:0;top:50%;width:30px}.icon-menu:before,.icon-menu:after,.icon-close:before,.icon-close:after{background:currentColor;border-radius:1px;content:"";height:100%;left:0;position:absolute;width:100%}.icon-menu:before{top:-8px}.icon-menu:after{bottom:-8px}.icon-close{background:0;margin-left:-17px;width:34px}.icon-close:before{top:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.icon-close:after{top:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.outer{padding:4.16667rem 4vw 3.33333rem}.inner{margin-left:auto;margin-right:auto;max-width:1140px}.inner-large{margin-left:auto;margin-right:auto;max-width:945px}.inner-small{margin-left:auto;margin-right:auto;max-width:555px}.site-header{color:#2c2f3b;padding-bottom:0.5em;padding-top:0.8em;background:#fff}.site-header-inside{-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-ms-flexbox;display:-webkit-flex;display:flex}.site-branding{-ms-flex:0 0 auto;-webkit-flex:0 0 auto;flex:0 0 auto}.site-branding a{border:0;color:inherit;display:block}.site-title{color:#2c2f3b;font-size:1.33333rem;font-weight:bold;line-height:1.2;margin:0}.site-logo{margin:0}.site-logo img{max-height:70px;height:70px;width:auto}.site-navigation{margin-left:auto}.site-navigation .menu{list-style:none;margin:0;padding:0}.site-navigation .menu-item{display:inline-block;font-size:16px;line-height:1.5;margin:0 0 0 30px}.site-navigation a:not(.button){border:0;color:inherit;display:inline-block;text-decoration:none}.menu-toggle{display:none}@supports (position:sticky) or (position:-webkit-sticky){.site-header{background:#fff;position:-webkit-sticky;position:sticky;top:0;z-index:999}}@media only screen and (max-width:800px){.site-header:before{background:rgba(247,249,251,0.75);content:"";height:100vh;left:0;opacity:0;position:absolute;top:0;visibility:hidden;width:100%;z-index:998}#menu-open{display:block;margin-left:auto}.site-navigation{background:#fff;box-sizing:border-box;height:100vh;-webkit-overflow-scrolling:touch;position:absolute;right:0;top:0;visibility:hidden;width:360px;z-index:999;opacity:0}.site-navigation .menu{padding:4.5rem 4vw 3.33333rem}.site-navigation .menu-item{display:block;margin:0}.site-navigation .menu-item:not(.menu-button){border-bottom:1px solid #ebecf0}.site-navigation .menu-item:not(.menu-button):first-child{border-top:1px solid #ebecf0}.site-navigation a:not(.button){display:block;padding:0.83333rem 0}.site-navigation #menu-close{display:block;position:absolute;right:4vw;top:1.33333rem}.site-nav-inside{height:100%;overflow:auto;-webkit-overflow-scrolling:touch;position:relative}}@media only screen and (max-width:360px){#menu-open{display:block;margin-left:auto}.site-navigation{width:100%}}.block-title{font-size:2.44444rem;margin:0 0 1.33333rem}.block-header{margin-bottom:2rem;text-align:center}.block-header .block-title{font-size:1.66667rem;margin:0 0 0.25rem}.block-preview{margin-bottom:1.66667rem}.block-buttons{margin-bottom:0.83333rem}.block-buttons .button{margin:0 7px 0.83333rem}.block-item{margin-bottom:1.66667rem}.block-item:last-child{margin-bottom:0}.hero-block .cell,.text-block .cell,.block-item .cell{text-align:center}.title-image{width:70%}.reviews-block .grid{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.reviews-block.outer{padding-top:1.16667rem}@media only screen and (min-width:801px){.hero-block .grid,.text-block .grid,.block-item .grid{-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-ms-flexbox;display:-webkit-flex;display:flex;margin:0 -0.83333rem}.hero-block .cell,.text-block .cell,.block-item .cell{box-sizing:border-box;-webkit-flex:1;-ms-flex:1;flex:1;margin-left:0.83333rem;margin-right:0.83333rem;text-align:left}.hero-block .cell:only-child{max-width:40%;line-height:120%}.hero-block .cell:only-child img{width:60%;margin-left:-14px}.text-block .block-preview,.block-item .block-preview{-webkit-flex:7;-ms-flex:7;flex:7;padding-right:68px}.hero-block .block-content,.text-block .block-content,.block-item .block-content{-webkit-flex:5;-ms-flex:5;flex:5}.hero-block .button,.block-item .button{margin-left:0;margin-right:15px}.text-block .grid,.block-item:nth-child(2n+1) .grid{-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.text-block .block-preview,.block-item:nth-child(2n+1) .block-preview{padding-left:68px;padding-right:0}}.review{border:0;font-size:0.88889rem;line-height:1.75;margin:0 auto 1.66667rem;max-width:488px;padding:0;flex:0 45%}.review-footer{-webkit-align-items:center;-ms-flex-align:center;align-items:center;display:block;text-align:center}.review-footer .review-author{color:#fff;font-size:inherit;font-weight:normal;margin:0;font-family:Roboto,sans-serif}@media only screen and (min-width:741px){.reviews-block .grid{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 -0.83333rem;justify-content:center}.reviews-block .cell{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 25%;-ms-flex:0 25%;flex:0 25%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0 0 1.66667em}.reviews-block .cell:first-child:nth-last-child(4),.reviews-block .cell:first-child:nth-last-child(4) ~ .cell{min-width:25%}.reviews-block .review-inside{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0 0.833333em;max-height:9rem}}.block.bg-purple{background:#8A5395;background:-webkit-linear-gradient(left,#8A5395,#452878);background:linear-gradient(to right,#8A5395,#452878);color:#fff}.block.bg-accent{background:#0072ff;background:-webkit-linear-gradient(left,#0072ff,#00c6ff);background:linear-gradient(to right,#0072ff,#00c6ff);color:#fff}#colophon{background:#2c2f3b;color:#7b839e}#colophon a{color:inherit}.footer-top{padding-bottom:2.5rem;padding-top:3.33333rem}.footer-widgets,.footer-nav-inside{display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-left:-0.83333rem;margin-right:-0.83333rem}.widget{box-sizing:border-box;-webkit-flex:0 0 33.333%;-ms-flex:0 0 33.333%;flex:0 0 33.333%;font-size:0.88889rem;line-height:1.5;padding-left:0.83333rem;padding-right:0.83333rem}.widget-title{color:#ebecf0;font-size:1rem;margin:0 0 1.33333rem}.footer-branding a{border:0}.footer-branding .site-description{margin:0.5rem 0 2.5rem;font-size:0.73333rem}.footer-branding .site-logo img{max-height:65px}.secondary-nav{box-sizing:border-box;-webkit-flex:1 1 150px;-ms-flex:1 1 150px;flex:1 1 150px;padding-left:0.83333rem;padding-right:0.83333rem}.secondary-nav ul{list-style:none;margin-bottom:2.5rem;padding:0}.secondary-nav li{margin:0 0 0.75em}.secondary-nav a{border:0}.legal-notes{font-size:0.68889rem;line-height:1.5}.site-info{border-top:1px solid #4c5267;font-size:14px;line-height:1.5;padding-bottom:1.66667rem;padding-top:1.66667rem;text-align:center}@media only screen and (max-width:800px){.footer-branding{-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%}.footer-navigation{-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%}}@media only screen and (max-width:600px){.widget{-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%}}.palette-purple blockquote{border-color:#8A5395}.palette-purple button,.palette-purple a.button{background:#8A5395;border-color:#8A5395;color:#fff}.palette-purple .button.secondary{background:transparent;color:#8A5395}.palette-purple .button.white{background:#fff;border-color:transparent;color:#4c5267}.palette-purple .block.bg-accent{background:#8A5395;background:-webkit-linear-gradient(left,#8A5395,#452878);background:linear-gradient(to right,#8A5395,#452878)}
                    </style>
                    <link rel="preload" rel="stylesheet" href={safePrefix('assets/css/main.css')} />
                    <script src="//grmtech.net/r/pt5807a685d1a9ab3b599035bc566ce2b9.js" async defer></script>
                </Helmet>
                <div id="page" className={'site palette-' + _.get(this.props, 'pageContext.site.siteMetadata.palette')}>
                  <Header {...this.props} />
                  <main id="content" className="site-content">
                    {this.props.children}
                  </main>
                  <Footer {...this.props} />
                </div>
            </React.Fragment>
        );
    }
}
