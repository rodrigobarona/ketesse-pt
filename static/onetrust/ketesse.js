var a;
//BEHAVIOUR(IsIABEnabled &#61;&#61; true)
!function(t){var r&#61;{};function o(e){if(r[e])return r[e].exports;var n&#61;r[e]&#61;{i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l&#61;!0,n.exports}o.m&#61;t,o.c&#61;r,o.d&#61;function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},o.n&#61;function(e){var n&#61;e&amp;&amp;e.__esModule?function(){return e.default}:function(){return e};return o.d(n,&#34;a&#34;,n),n},o.o&#61;function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p&#61;&#34;&#34;,o(o.s&#61;4)}([function(e,n,t){&#34;use strict&#34;;var p&#61;Object.assign||function(e){for(var n&#61;1;nn&amp;&amp;(n&#61;e.id)}),n}e.exports&#61;{convertVendorsToRanges:m,encodeConsentString:function(e){var n&#61;e.maxVendorId,t&#61;e.vendorList,r&#61;void 0&#61;&#61;&#61;t?{}:t,o&#61;e.allowedPurposeIds,i&#61;e.allowedVendorIds,s&#61;r.vendors,a&#61;void 0&#61;&#61;&#61;s?[]:s,d&#61;r.purposes,u&#61;void 0&#61;&#61;&#61;d?[]:d;n&#61;n||y(a);var c&#61;g(p({},e,{maxVendorId:n,purposeIdBitString:h(u,o),isRange:!1,vendorIdBitString:v(n,i)})),l&#61;m(a,i),f&#61;g(p({},e,{maxVendorId:n,purposeIdBitString:h(u,o),isRange:!0,defaultConsent:!1,numEntries:l.length,vendorRangeList:l}));return c.length&#61;t.length&amp;&amp;(t&#61;c(t,n-t.length)),t.length&gt;n&amp;&amp;(t&#61;t.substring(0,n)),t}function p(e){return f(!0&#61;&#61;&#61;e?1:0,1)}function g(e,n){return e instanceof Date?f(e.getTime()/100,n):f(e,n)}function i(e,n){return f(e.toUpperCase().charCodeAt(0)-65,n)}function v(e){var n&#61;1&gt;18&amp;63)&#43;c.charAt(o&gt;&gt;12&amp;63)&#43;c.charAt(o&gt;&gt;6&amp;63)&#43;c.charAt(63&amp;o);return 2&#61;&#61;i?(n&#61;e.charCodeAt(a)&lt;&lt;8,t&#61;e.charCodeAt(&#43;&#43;a),s&#43;&#61;c.charAt((o&#61;n&#43;t)&gt;&gt;10)&#43;c.charAt(o&gt;&gt;4&amp;63)&#43;c.charAt(o&lt;&lt;2&amp;63)&#43;&#34;&#61;&#34;):1&#61;&#61;i&amp;&amp;(o&#61;e.charCodeAt(a),s&#43;&#61;c.charAt(o&gt;&gt;2)&#43;c.charAt(o&lt;&lt;4&amp;63)&#43;&#34;&#61;&#61;&#34;),s},decode:function(e){var n&#61;(e&#61;String(e).replace(a,&#34;&#34;)).length;n%4&#61;&#61;0&amp;&amp;(n&#61;(e&#61;e.replace(/&#61;&#61;?$/,&#34;&#34;)).length),n%4!&#61;1&amp;&amp;!/[^&#43;a-zA-Z0-9/]/.test(e)||u(&#34;Invalid character: the string to be decoded is not correctly encoded.&#34;);for(var t,r,o&#61;0,i&#61;&#34;&#34;,s&#61;-1;&#43;&#43;s&gt;(-2*o&amp;6)));return i},version:&#34;0.1.0&#34;};void 0&#61;&#61;&#61;(s&#61;function(){return r}.call(d,l,d,o))||(o.exports&#61;s)}()}).call(d,l(8)(e),l(9))},function(e,n){e.exports&#61;function(e){return e.webpackPolyfill||(e.deprecate&#61;function(){},e.paths&#61;[],e.children||(e.children&#61;[]),Object.defineProperty(e,&#34;loaded&#34;,{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,&#34;id&#34;,{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill&#61;1),e}},function(og,pg){var qg;qg&#61;function(){return this}();try{qg&#61;qg||Function(&#34;return this&#34;)()||eval(&#34;this&#34;)}catch(e){&#34;object&#34;&#61;&#61;typeof window&amp;&amp;(qg&#61;window)}og.exports&#61;qg}]),&#34;undefined&#34;&#61;&#61;typeof __cmp&amp;&amp;(__cmp&#61;{}),function(r){r.__cmp&#61;function(){var o&#61;!1,i&#61;[];!function(){if(__cmp.a)for(var e&#61;0;e&lt;__cmp.a.length;e&#43;&#43;){var n&#61;{},t&#61;__cmp.a[e];n.commandmethod&#61;t[0],n.parameter&#61;t[1],n.callback&#61;t[2],i.push(n)}}(),function e(){if(!r.frames.__cmpLocator)if(document.body){var n&#61;document.body,t&#61;document.createElement(&#34;iframe&#34;);t.setAttribute(&#34;style&#34;,&#34;display:none&#34;),t.name&#61;&#34;__cmpLocator&#34;,n.appendChild(t)}else setTimeout(e,5)}(),(r.attachEvent||r.addEventListener)(&#34;message&#34;,function(e){r.__cmp.receiveMessage(e)},!1);function a(e,n,t){if(t)switch(e){case&#34;ping&#34;:Optanon.getPingRequest(t);break;case&#34;getVendorConsents&#34;:if(o)(n&#61;function(e){var n&#61;[];{if(!e)return;if(Array.isArray(e))e.forEach(function(e){isNaN(e)||n.push(e)});else{if(isNaN(e))return;n.push(e)}}return n}(n))&amp;&amp;Array.isArray(n)&amp;&amp;0 this.length) {
                return false;
            } else {
                return this.indexOf(search, start) !&#61;&#61; -1;
            }
        };
    }

    // ***************** LEGACY SCRIPT *****************

    var optanonVersion &#61; &#39;6.2.0&#39;,
        optanonCookieName &#61; &#39;OptanonConsent&#39;,
        optanonCookieDomain &#61; &#39;[[OptanonCookieDomain]]&#39;,
        optanonAlertBoxClosedCookieName &#61; &#39;OptanonAlertBoxClosed&#39;,

        
        useLatestJquey &#61;[[UseLatestJqueryVersion]],
        

        optanonGeolocationExecuteAllScripts &#61; false,
            optanonDoNotTrackEnabled &#61; navigator.doNotTrack &#61;&#61; &#39;yes&#39; || navigator.doNotTrack &#61;&#61; &#39;1&#39; || navigator.msDoNotTrack &#61;&#61; &#39;1&#39;,
            doNotTrackText &#61; &#39;do not track&#39;,
            optanonIsOptInMode &#61; getIsOptInMode(),
            optanonIsSoftOptInMode &#61; getIsSoftOptInMode(),
            optanonEnsureCookieDataCompatibilityComplete &#61; false,
            optanonHtmlGroupData, //Stores pending html Optanon Group Id changes before writing to cookie
            optanonWrapperScriptExecutedGroups &#61; [], //Stores Optanon Group Ids for which wrapper InsertScript has already been executed for
            optanonWrapperHtmlExecutedGroups &#61; [], //Stores Optanon Group Ids for which wrapper InsertHtml has already been executed for
            optanonWrapperScriptExecutedGroupsTemp &#61; [],
            optanonWrapperHtmlExecutedGroupsTemp &#61; [],
            optanonGroupIdPerformanceCookies &#61; [[OptanonGroupIdPerformanceCookies]],
            optanonGroupIdFunctionalityCookies &#61; [[OptanonGroupIdFunctionalityCookies]],
            optanonGroupIdTargetingCookies &#61; [[OptanonGroupIdTargetingCookies]],
            optanonGroupIdSocialCookies &#61; [[OptanonGroupIdSocialCookies]],
            optanonAboutCookiesGroupName &#61; optanonData().AboutCookiesText,
            optanonNotLandingPageName &#61; &#39;NotLandingPage&#39;,
            optanonAwaitingReconsentName &#61; &#39;AwaitingReconsent&#39;,
            consentChangedEventMap &#61; {},
            optanonShowSubGroupCookies &#61; [[ShowSubGroupCookies]],
            optanonShowSubGroupDescription &#61; [[ShowSubGroupDescription]],
            onetrustClientScriptUrl &#61; null,
            isWebsiteContainFixedHeader &#61; false,
            isRTL &#61; false,
            isClassic &#61; false,
            isCenterTile &#61; [[IsCenterTile]],
            //BEHAVIOUR(IsIABEnabled &#61;&#61; true)
            oneTrustIABConsent &#61; {
                purpose: [],
                vendors: [],
                vendorList: null
            },
            oneTrustIABCookieName &#61; &#39;eupubconsent&#39;,
            oneTrustIAB3rdPartyCookie &#61; &#39;euconsent&#39;,
            oneTrustIABgdprAppliesGlobally &#61; true,
            IABCookieValue &#61; &#34;&#34;,
            otIABData,
            //BEHAVIOUR_END
            //BEHAVIOUR(IsConsentIntegration &#61;&#61; true)
            onetrustConsentParamName &#61; &#34;consentId&#34;,
            //BEHAVIOUR_END
            optanonJsonData,
            isInEU &#61; false,
            useGeoLocationService &#61; true,
            oneTrustIsIABCrossConsentEnableParam &#61; &#39;isIABGlobal&#39;,
            geolocationCookiesParam &#61; &#39;geolocation&#39;,
            constant &#61; {
                KEEPCENTERTILEBANNEROPEN: &#34;keepBannerOpen&#34;,
                IMPLIEDCONSENT: &#39;implied consent&#39;,
                FIRSTPAGEVIEW: &#39;firstPageView&#39;,
                IGNOREGA: &#39;data-ignore-ga&#39;
            },
            ignoreGoogleAnlyticsCall &#61; false

            , $Opt ;

    function isTouchDevice() {
        return &#39;ontouchstart&#39; in window || !!(navigator.msMaxTouchPoints);
    }

    function isImpliedConsent() {
        var json &#61; optanonData();
        return json.ConsentModel &amp;&amp; json.ConsentModel.Name.toLowerCase() &#61;&#61;&#61; constant.IMPLIEDCONSENT;
    }

    function updateGtmMacros(allowAll) {
        var gtmOptanonActiveGroups &#61; [],
            i;

        for (i &#61; 0; i &lt; optanonHtmlGroupData.length; i&#43;&#43;) {
            if (endsWith(optanonHtmlGroupData[i], &#39;:1&#39;) &amp;&amp; canSoftOptInInsertForGroup(optanonHtmlGroupData[i].replace(&#39;:1&#39;, &#39;&#39;))) {
                gtmOptanonActiveGroups.push(optanonHtmlGroupData[i].replace(&#39;:1&#39;, &#39;&#39;));
            }
        }

        // Setting &#34;optanon-active-groups&#34; global variable for Google Tag Manager macro
        var serializeArrayString &#61; &#39;,&#39; &#43; serialiseArrayToString(gtmOptanonActiveGroups) &#43; &#39;,&#39;;
        window.OnetrustActiveGroups &#61; serializeArrayString;
        window.OptanonActiveGroups &#61; serializeArrayString;

        // Setting &#34;optanon-active-groups&#34; data layer field for Google Tag Manager macro
        if (typeof dataLayer !&#61; &#39;undefined&#39;) {
            if (dataLayer.constructor &#61;&#61;&#61; Array) {
                dataLayer.push({ &#39;OnetrustActiveGroups&#39;: serializeArrayString });
                dataLayer.push({ &#39;OptanonActiveGroups&#39;: serializeArrayString });
            }
        } else {
            window.dataLayer &#61; [{ &#39;event&#39;: &#39;OneTrustLoaded&#39;, &#39;OnetrustActiveGroups&#39;: serializeArrayString }, { &#39;event&#39;: &#39;OptanonLoaded&#39;, &#39;OptanonActiveGroups&#39;: serializeArrayString }];
        }

        // Trigger consent changed event
        setTimeout(function () {
            var event &#61; new CustomEvent(&#39;consent.onetrust&#39;, { detail: gtmOptanonActiveGroups });
            window.dispatchEvent(event);
        });
    }

    function initialiseCssReferences() {
        insertCssReference(updateCorrectUrl(&#39;[[CssFilePathUrl]]&#39;));

        var links &#61; document.querySelectorAll(&#39;link&#39;);

        for (var i &#61; 0; i &lt; links.length; i&#43;&#43;) {
            if (links[i].href.includes(&#39;onetrust-rtl.css&#39;)) {
                isRTL &#61; true;
            }
            if (links[i].href.includes(&#39;default_responsive&#39;)) {
                isClassic &#61; true;
            }
        }

        // Figure out foreground colour for buttons
        var color &#61; hexToRgb(&#34;[[OptanonSecondaryColor]]&#34;);
        var textColor &#61; color ? (((color.r * 0.299 &#43; color.g * 0.587 &#43; color.b * 0.114) &gt; 186) ? &#34;#000000&#34; : &#34;#ffffff&#34;) : &#34;&#34;;

        // Insert custom skin css
        var style &#61; document.createElement(&#34;style&#34;)
        style.innerHTML &#61; &#34;#optanon ul#optanon-menu li { background-color: [[OptanonMenuColor]] !important }&#34; &#43;
            &#34;#optanon ul#optanon-menu li.menu-item-selected { background-color: [[OptanonMenuHighlightColor]] !important }&#34; &#43;
            &#34;#optanon #optanon-popup-wrapper .optanon-white-button-middle { background-color: [[OptanonSecondaryColor]] !important }&#34; &#43;
            &#34;.optanon-alert-box-wrapper .optanon-alert-box-button-middle { background-color: [[OptanonSecondaryColor]] !important; border-color: [[OptanonSecondaryColor]] !important; }&#34; &#43;
            &#34;#optanon #optanon-popup-wrapper .optanon-white-button-middle button { color: &#34; &#43; textColor &#43; &#34; !important }&#34; &#43;
            &#34;.optanon-alert-box-wrapper .optanon-alert-box-button-middle button { color: &#34; &#43; textColor &#43; &#34; !important }&#34; &#43;
            &#34;#optanon #optanon-popup-bottom { background-color: [[OptanonPrimaryColor]] !important }&#34; &#43;
            &#34;#optanon.modern #optanon-popup-top, #optanon.modern #optanon-popup-body-left-shading { background-color: [[OptanonPrimaryColor]] !important }&#34; &#43;
            &#34;.optanon-alert-box-wrapper { background-color:[[OnetrustBannerBackgroundColor]] !important }&#34; &#43;
            &#34;.optanon-alert-box-wrapper .optanon-alert-box-bg p { color:[[OnetrustBannerTextColor]] !important }&#34; &#43;
            &#34;[[OptanonCustomCSS]]&#34;;

        if (isCenterTile) {
            style.innerHTML &#43;&#61;
                &#34;.optanon-alert-box-button-container .optanon-alert-box-accept-button { background-color: [[OptanonSecondaryColor]] !important }&#34; &#43;
                &#34;.optanon-alert-box-wrapper .optanon-alert-box-notice, .optanon-banner-title, .optanon-alert-box-footer, #optanon-popup-bottom-content { color:[[OnetrustBannerTextColor]] !important }&#34;;
        }

        document.getElementsByTagName(&#39;head&#39;)[0].appendChild(style);
    }

    function initialiseLandingPath() {

        // landing page viewed - ensure the parameter is updated but don&#39;t hide the alert box
        if (isLandingPage()) {
            setLandingPathParam(location.href);
            return;
        }

        var awaitingReconsent &#61; readCookieParam(optanonCookieName, optanonAwaitingReconsentName) &#61;&#61;&#61; &#39;true&#39;;
        var json &#61; optanonData(), cookie &#61; getCookie(optanonAlertBoxClosedCookieName), reconsentDate &#61; json.LastReconsentDate;
        var needsReconsent &#61; cookie &amp;&amp; reconsentDate &amp;&amp; new Date(reconsentDate) &gt; new Date(cookie);
        if (needsReconsent &amp;&amp; !awaitingReconsent) {
            // we need the reconsent so we&#39;re updating the landing page parameter and setting the reconsent flag
            setLandingPathParam(location.href);
            writeCookieParam(optanonCookieName, optanonAwaitingReconsentName, true);
            return;
        }

        // make sure the initial landing page isn&#39;t treated as such after navigating away
        setLandingPathParam(optanonNotLandingPageName);
        writeCookieParam(optanonCookieName, optanonAwaitingReconsentName, false);

        if (optanonIsSoftOptInMode) {
            Optanon.SetAlertBoxClosed(true);
        }
    }

    function setLandingPathParam(value) {
        writeCookieParam(optanonCookieName, &#39;landingPath&#39;, value);
    }

    function hexToRgb(hex) {
        var result &#61; /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    function insertCssReference(url) {
        var link &#61; document.createElement(&#39;link&#39;);

        link.type &#61; &#39;text/css&#39;;
        link.href &#61; url;
        link.rel &#61; &#39;stylesheet&#39;;
        document.getElementsByTagName(&#39;head&#39;)[0].appendChild(link);
    }

    function injectConsentNotice() {
        var json &#61; optanonData();
         $Opt &#61; jQuery.noConflict(true);

        

            //Set up default banner trigger
            $Opt(window).on(&#39;load&#39;, Optanon.LoadBanner);

        window.jsonFeed &#61; function (data) {
            //BEHAVIOUR(IsIABEnabled &#61;&#61; true)
            assignIABGlobalScope(data.displayPopup);
            //BEHAVIOUR_END
            if (data.displayPopup &#61;&#61; true || data.displayPopup &#61;&#61; &#39;true&#39; || isInEU &#61;&#61; &#39;true&#39; || isInEU &#61;&#61; true) {

                Optanon.loadDefaultBannerGroup(data);

            } else {

                if (!json.euOnly) {
                    Optanon.loadDefaultBannerGroup();
                } else {
                    canImpliedConsentLandingPage();
                    if (!Optanon.IsAlertBoxClosedAndValid()) {
                        optanonGeolocationExecuteAllScripts &#61; true;
                    }

                    $Opt(window).one(&#39;otloadbanner&#39;, function () {

                        substitutePlainTextScriptTags();

                        var showCookieSettingsLink &#61; false;
                        if ($Opt(&#39;.optanon-show-settings&#39;).length &gt; 0) {
                            if ($Opt(&#39;.optanon-show-settings&#39;).attr(&#39;data-ignore-geolocation&#39;)) {
                                if ($Opt(&#39;.optanon-show-settings&#39;).attr(&#39;data-ignore-geolocation&#39;).toLowerCase() &#61;&#61;&#61; &#34;true&#34;) {
                                    showCookieSettingsLink &#61; true;
                                }
                            }
                        }
                        if ($Opt(&#39;.optanon-toggle-display&#39;).length &gt; 0) {
                            if ($Opt(&#39;.optanon-toggle-display&#39;).attr(&#39;data-ignore-geolocation&#39;)) {
                                if ($Opt(&#39;.optanon-toggle-display&#39;).attr(&#39;data-ignore-geolocation&#39;).toLowerCase() &#61;&#61;&#61; &#34;true&#34;) {
                                    showCookieSettingsLink &#61; true;
                                }
                            }
                        }

                        if (showCookieSettingsLink) {
                            //Insert Optanon main consent notice component
                            if (!checkIscenterTile()) {
                                insertConsentNoticeHtml();
                            } else {
                                insertCenterTileConsentNoticeHtml()
                            }

                            //common
                            initialiseConsentNoticeHandlers();

                            //Insert Optanon Show Settings component
                            if ($Opt(&#39;.optanon-show-settings&#39;).length &gt; 0) {
                                insertShowSettingsButtonsHtml();
                                initialiseShowSettingsButtonsHandlers();
                            }
                            //BEHAVIOUR(IsIABEnabled &#61;&#61; true)
                            if (json.IsIABEnabled) {
                                InitializeVendorList();
                            }
                            //BEHAVIOUR_END

                            if (!getCookie(optanonAlertBoxClosedCookieName) || reconsentRequired()) {
                                Optanon.AllowAll(true);
                            }

                        } else {
                            //Remove Optanon Show Settings component
                            $Opt(&#39;.optanon-show-settings&#39;).remove();

                            //Remove Optanon consent notice handlers
                            $Opt(&#39;.optanon-close-consent&#39;).remove();
                            $Opt(&#39;.optanon-close-ui&#39;).remove();
                            $Opt(&#39;.optanon-toggle-display&#39;).remove();
                            $Opt(&#39;.optanon-allow-all&#39;).remove();
                            //When cookie groups are disabled(opt-in) set all groups to enable as banner not available.
                            if (!getCookie(optanonAlertBoxClosedCookieName) || reconsentRequired()) {
                                Optanon.AllowAll(true);
                            }
                        }

                        //Insert Optanon Cookie Policy component
                        if ($Opt(&#39;#optanon-cookie-policy&#39;).length &gt; 0) {
                            insertCookiePolicyHtml();
                        }

                        // Setting focus on appropriate button
                        setBannerFocus();
                    });
                }

            }
        };

        if (Optanon.useGeoLocationService) {
            getGeoLocation();
        }
        //BEHAVIOUR(IsIABEnabled &#61;&#61; true)
        if (!oneTrustIABConsent.vendorList) {
            if (IABCookieValue) {
                populateVendorList();
            } else {
                populateVendorList(true);
            }

        }
        //BEHAVIOUR_END

    }


    function reconsentRequired() {
        var json &#61; optanonData(),
            awaitingReconsent &#61; readCookieParam(optanonCookieName, optanonAwaitingReconsentName) &#61;&#61;&#61; &#39;true&#39;,
            cookie &#61; getCookie(optanonAlertBoxClosedCookieName),
            reconsentDate &#61; json.LastReconsentDate,
            needsReconsent &#61; cookie &amp;&amp; reconsentDate &amp;&amp; new Date(reconsentDate) &gt; new Date(cookie);

        return (getCookie(optanonAlertBoxClosedCookieName) &amp;&amp; needsReconsent &amp;&amp; awaitingReconsent);
    }

    this.loadDefaultBannerGroup &#61; function (data) {
        var json &#61; optanonData();
        canImpliedConsentLandingPage();

        $Opt(window).one(&#39;otloadbanner&#39;, function () {

            substitutePlainTextScriptTags();

            //Insert Optanon main consent notice component
            if (!checkIscenterTile()) {
                insertConsentNoticeHtml();
            } else {
                insertCenterTileConsentNoticeHtml()
            }

            initialiseConsentNoticeHandlers();

            //Insert Optanon alert component
            //BEHAVIOUR(ShowAlert &#61;&#61; true)
            if (!checkIscenterTile()) {
                insertAlertHtml();
                initialiseAlertHandlers();
            }

            //Insert Optanon Center Tilealert component
            //BEHAVIOUR(CenterTile &#61;&#61; true)
            if (checkIscenterTile()) {
                insertCenterTileAlertHTML();
                initialiseAlertHandlers();
            }
            //BEHAVIOUR_END

            //BEHAVIOUR_END

            //BEHAVIOUR(IsIABEnabled &#61;&#61; true)
            if (json.IsIABEnabled) {
                InitializeVendorList();
            }
            //BEHAVIOUR_END


            //Insert Optanon Show Settings component
            if ($Opt(&#39;.optanon-show-settings&#39;).length &gt; 0) {
                insertShowSettingsButtonsHtml();
            }

            //Insert Optanon Cookie Policy component
            if ($Opt(&#39;#optanon-cookie-policy&#39;).length &gt; 0) {
                insertCookiePolicyHtml();
            }

            executeOptanonWrapper();

            //Always set cookie if not set yet
            if (!readCookieParam(optanonCookieName, &#39;groups&#39;)) {
                writeCookieGroupsParam(optanonCookieName);
            }

            // Setting focus on appropriate button

            //BEHAVIOUR(ShowAlert &#61;&#61; true)
            setBannerFocus();
            //BEHAVIOUR_END
        });
    }

    function canImpliedConsentLandingPage() {
        if (isImpliedConsent() &amp;&amp; !isLandingPage()) {
            if (readCookieParam(optanonCookieName, optanonAwaitingReconsentName) &#61;&#61;&#61; &#39;true&#39;) {
                checkForRefreshCloseImplied();
            }
        }
    }

    //BEHAVIOUR(ShowAlert &#61;&#61; true)
    function setBannerFocus() {
        if ($Opt(&#39;.banner-policy-link&#39;).length &gt; 0) {
            $Opt(&#39;.banner-policy-link&#39;).focus();
        } else {
            setButtonFocus();
        }

        var firstItem &#61; void 0,
            lastItem &#61; void 0,
            focusable &#61; void 0,
            buttonPolicyLink &#61; $Opt(&#39;.banner-policy-link&#39;),
            buttonGroup &#61; !isCenterTile ? $Opt(&#39;.banner-close-button, .optanon-alert-box-button-container button:not([class&#61;&#34;optanon-alert-box-close&#34;])&#39;) : $Opt(&#39;.optanon-alert-box-button-container button:not([class&#61;&#34;optanon-alert-box-close&#34;])&#39;);

        focusable &#61; $Opt(&#39;.optanon-alert-box-wrapper [href], .optanon-alert-box-wrapper input, .optanon-alert-box-wrapper select, .optanon-alert-box-wrapper textarea, .optanon-alert-box-wrapper button:not([class&#61;&#34;optanon-alert-box-close&#34;])&#39;);

        var buttonPolicyLinkExist &#61; buttonPolicyLink.length &gt; 0;

        if (buttonPolicyLinkExist) {
            firstItem &#61; $Opt(buttonPolicyLink);
        } else {
            firstItem &#61; $Opt(focusable[focusable.length - 1]);
        }

        lastItem &#61; $Opt(focusable[0]);

        if (firstItem) {
            firstItem.on(&#39;keydown&#39;, function (e) {
                return resetFocus(e, buttonPolicyLinkExist, lastItem);
            });
        }

        if (lastItem) {
            lastItem.on(&#39;keydown&#39;, function (e) {
                return resetFocusReverse(e, firstItem);
            });
        }

        if (buttonGroup.length &gt; 0) {
            if (isCenterTile) {
                $Opt(buttonGroup[0]).on(&#39;keydown&#39;, resetFocusReverseToLink);
            } else {
                $Opt(buttonGroup[buttonGroup.length - 1]).on(&#39;keydown&#39;, resetFocusReverseToLink);
            }
        }
    }
    function resetFocus(e, bannerPolicyExist, lastItem) {
        if (bannerPolicyExist) {
            if (e.keyCode &#61;&#61;&#61; 9 &amp;&amp; !e.shiftKey) {
                e.preventDefault();
                setButtonFocus();
            }
            if (e.keyCode &#61;&#61;&#61; 9 &amp;&amp; e.shiftKey) {
                e.preventDefault();
                lastItem.focus();
            }
        } else {
            if (e.keyCode &#61;&#61;&#61; 9 &amp;&amp; e.shiftKey) {
                e.preventDefault();
                setButtonFocusReverse();
            }
            if (isCenterTile) {
                if (e.keyCode &#61;&#61;&#61; 9 &amp;&amp; !e.shiftKey) {
                    e.preventDefault();
                    setButtonFocus();
                }
            }
        }
    }

    function resetFocusReverse(e, firstItem) {
        if (e.keyCode &#61;&#61;&#61; 9 &amp;&amp; !e.shiftKey) {
            e.preventDefault();
            firstItem.focus();
        }
    }

    function resetFocusReverseToLink(e) {
        if (e.keyCode &#61;&#61;&#61; 9 &amp;&amp; e.shiftKey) {
            e.preventDefault();
            setButtonFocusReverse();
        }
    }

    function setButtonFocus() {
        var setttinsBtn &#61; $Opt(&#39;.optanon-alert-box-button-container .cookie-settings-button&#39;),
            acceptCookiesBtn &#61; $Opt(&#39;.optanon-alert-box-button-container .accept-cookies-button&#39;),
            closeBannerBtn &#61; $Opt(&#39;.banner-close-button&#39;),
            bannerPolicyLink &#61; $Opt(&#39;.banner-policy-link&#39;);

        if (isCenterTile) {
            if (acceptCookiesBtn.el[0] &#61;&#61;&#61; document.activeElement) {
                if (setttinsBtn.length &gt; 0) {
                    setttinsBtn.focus();
                } else if (closeBannerBtn.length &gt; 0) {
                    closeBannerBtn.focus();
                }
            } else if (closeBannerBtn.el[0] &#61;&#61;&#61; document.activeElement) {
                if (acceptCookiesBtn.length &gt; 0) {
                    acceptCookiesBtn.focus();
                } else if (setttinsBtn.length &gt; 0) {
                    setttinsBtn.focus();
                }
            } else {
                if (bannerPolicyLink.length &gt; 0) {
                    if (acceptCookiesBtn.length &gt; 0) {
                        acceptCookiesBtn.focus();
                    } else if (setttinsBtn.length &gt; 0) {
                        setttinsBtn.focus();
                    } else if (closeBannerBtn.length &gt; 0) {
                        closeBannerBtn.focus();
                    }
                } else {
                    if (closeBannerBtn.length &gt; 0) {
                        closeBannerBtn.focus();
                    } else if (bannerPolicyLink.length &gt; 0) {
                        bannerPolicyLink.focus();
                    } else if (acceptCookiesBtn.length &gt; 0) {
                        acceptCookiesBtn.focus();
                    } else if (setttinsBtn.length &gt; 0) {
                        setttinsBtn.focus();
                    } else if (closeBannerBtn.length &gt; 0) {
                        closeBannerBtn.focus();
                    }
                }
            }
        } else {
            if (setttinsBtn.length &gt; 0) {
                setttinsBtn.focus();
            } else if (acceptCookiesBtn.length &gt; 0) {
                acceptCookiesBtn.focus();
            } else if (closeBannerBtn.length &gt; 0) {
                closeBannerBtn.focus();
            }
        }
    }

    function setButtonFocusReverse() {
        var setttinsBtn &#61; $Opt(&#39;.optanon-alert-box-button-container .cookie-settings-button&#39;),
            acceptCookiesBtn &#61; $Opt(&#39;.optanon-alert-box-button-container .accept-cookies-button&#39;),
            closeBannerBtn &#61; $Opt(&#39;.banner-close-button&#39;),
            bannerPolicyLink &#61; $Opt(&#39;.banner-policy-link&#39;);

        if (isCenterTile) {
            if (acceptCookiesBtn.el[0] &#61;&#61;&#61; document.activeElement) {
                if (bannerPolicyLink.length &gt; 0) {
                    bannerPolicyLink.focus();
                } else if (closeBannerBtn.length &gt; 0) {
                    closeBannerBtn.focus();
                } else if (setttinsBtn.length &gt; 0) {
                    setttinsBtn.focus();
                }
            } else {
                if (bannerPolicyLink.length &gt; 0) {
                    bannerPolicyLink.focus();
                } else if (acceptCookiesBtn.length &gt; 0) {
                    acceptCookiesBtn.focus();
                } else if (bannerPolicyLink.length &gt; 0) {
                    bannerPolicyLink.focus();
                } else if (closeBannerBtn.length &gt; 0) {
                    closeBannerBtn.focus();
                }
            }
        } else {
            if (bannerPolicyLink.length &gt; 0) {
                bannerPolicyLink.focus();
            } else if (closeBannerBtn.length &gt; 0) {
                closeBannerBtn.focus();
            } else if (acceptCookiesBtn.length &gt; 0) {
                acceptCookiesBtn.focus();
            } else if (setttinsBtn.length &gt; 0) {
                setttinsBtn.focus();
            }
        }
    }
    //BEHAVIOUR_END

    //Substitute text/plain script type attributes with text/javascript
    function substitutePlainTextScriptTags() {
        $Opt(&#39;script&#39;).filter(function () {
            return $Opt(this).attr(&#39;type&#39;) &amp;&amp; $Opt(this).attr(&#39;type&#39;).toLowerCase() &#61;&#61; &#39;text/plain&#39; &amp;&amp; $Opt(this).attr(&#39;class&#39;) &amp;&amp; $Opt(this).attr(&#39;class&#39;).toLowerCase().match(/optanon-category(-[a-zA-Z0-9]&#43;)&#43;($|\s)/);
        }).each(function () {
            var groupIds &#61; $Opt(this).attr(&#39;class&#39;).split(/optanon-category-/i)[1].split(&#39;-&#39;);
            var isInsertGroup &#61; true;
            if (groupIds &amp;&amp; groupIds.length &gt; 0) {
                for (var i &#61; 0; i &lt; groupIds.length; i&#43;&#43;) {
                    if (!canInsertForGroup(groupIds[i], optanonGeolocationExecuteAllScripts)) {
                        isInsertGroup &#61; false;
                        break;
                    }
                }
                if (isInsertGroup) {
                    $Opt(this).replaceWith($Opt(this).attr(&#39;type&#39;, &#39;text/javascript&#39;)[0].outerHTML);
                }
            }
        });
    }

    function insertConsentNoticeHtml() {
        var group,
            json &#61; optanonData(),
            groupIsAboutCookies,
            groupIsActive,
            menuItem,
            moreInfo,
            i;

        jsonAddAboutCookies(json);

        $Opt(&#39;body&#39;).prepend(&#39;&#39;);

        var preferenceCenterDataHTML &#61; &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39;;

        if (json.ShowPreferenceCenterCloseButton) {
            if (!json.CloseText) {
                json.CloseText &#61; &#34;Close&#34;;
            }
            preferenceCenterDataHTML &#61; preferenceCenterDataHTML &#43; &#39;&#39; &#43;
                &#39;&#39; &#43;
                &#39;&#39;;
        }

        var logoUrl &#61; &#34;&#39;&#34; &#43; updateCorrectUrl(&#39;[[OptanonLogo]]&#39;) &#43; &#34;&#39;&#34;;
        preferenceCenterDataHTML &#61; preferenceCenterDataHTML &#43; &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39;;

        $Opt(&#39;#optanon&#39;).html(preferenceCenterDataHTML);

        if (json.Language &amp;&amp; json.Language.Culture) {
            $Opt(&#34;#optanon-popup-wrapper&#34;).attr(&#34;lang&#34;, json.Language.Culture);
        }

        for (i &#61; 0; i &lt; json.Groups.length; i &#43;&#61; 1) {
            group &#61; json.Groups[i];
            if (safeGroupName(group) &#61;&#61; optanonAboutCookiesGroupName || (isTopLevelGroup(group) &amp;&amp; isValidConsentNoticeGroup(group))) {
                groupIsAboutCookies &#61; safeGroupName(group) &#61;&#61; optanonAboutCookiesGroupName;
                groupIsActive &#61; $Opt.inArray((getGroupIdForCookie(group) &#43; &#39;:1&#39;), optanonHtmlGroupData) !&#61; -1;
                menuItem &#61; $Opt(&#39;&#39; &#43;
                    &#39;&#39; &#43;
            &#39;&#39; &#43; json.AboutText &#43; &#39;&#39; &#43;
            &#39;&#39;);
        $Opt(&#39;#optanon #optanon-menu&#39;).append(moreInfo);

        $Opt(&#39;#optanon #optanon-popup-body&#39;).append(&#39;&#39; &#43;
            &#39;&#39; &#43; json.MainText &#43; &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            getGroupToggle(json, &#34;chkMain&#34;) &#43;
            getGroupAlwaysActive(json) &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            (json.IsIABEnabled &amp;&amp; json.VendorLevelOptOut ? &#39;&#39; &#43;
                &#39;View Vendor Consent&#39; : &#39;&#39;) &#43;
            &#39;&#39; &#43;
            &#39;&#39;);

        $Opt(&#39;#optanon #optanon-popup-wrapper&#39;).append(&#39; &#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            json.AllowAllText &#43; &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            json.ConfirmText &#43;
            &#39;&#39; &#43;
            &#39;&#39;);

        setAllowAllButton();
    }

    function getGroupToggle(json, toggleId) {
        var p &#61; isRTL ? &#39;&#39; : isClassic &amp;&amp; !json.ShowPreferenceCenterCloseButton ? &#39;&#39; : &#39;&#39;,
            span &#61; (isRTL) ? &#39;&#39; : &#39;&#39;;

        return &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            p &#43;
            span &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43; (isRTL ? &#39;&#39; : json.ActiveText) &#43; &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39;;
    }

    function getSubgroupToggle(json, group) {
        //BEHAVIOUR(ShowSubgroupToggles &#61;&#61; true)
        var p &#61; isRTL ? &#39;&#39; : &#39;&#39;;

        var toggleId &#61; &#39;chk&#39; &#43; getGroupIdForCookie(group);
        var $toggle &#61; $Opt(&#39;&#39; &#43; p &#43; &#39;&#39; &#43;
            &#39;&#39; &#43; (isRTL ? &#39;&#39; : json.ActiveText) &#43; &#39;&#39;);
        $toggle.find(&#34;input&#34;).data(&#39;group&#39;, group);
        $toggle.find(&#34;input&#34;).data(&#39;optanonGroupId&#39;, getGroupIdForCookie(group));
        return $toggle;
        //BEHAVIOUR_END
        //BEHAVIOUR(ShowSubgroupToggles &#61;&#61; false)
        return null;
        //BEHAVIOUR_END
    }

    function getGroupAlwaysActive(json) {
        var p &#61; isClassic &amp;&amp; !json.ShowPreferenceCenterCloseButton ? &#39;&#39; : &#39;&#39;;
        return &#39;&#39; &#43;
            p &#43; json.AlwaysActiveText &#43; &#39;&#39; &#43;
            &#39;&#39;;
    }

    function consentNoticeMenuItemClick() {
        var json &#61; optanonData(),
            group &#61; $Opt(this).data(&#39;group&#39;),
            subGroups &#61; getGroupSubGroups(group),
            groupCookiesHtml,
            groupCookiesHtml,
            ariaLabel &#61; this.childNodes[0].children[0].id,
            id &#61; ariaLabel.split(&#39;-&#39;)[0] &#43; &#39;-description&#39;;

        jsonAddAboutCookies(json);
        var groupName &#61; safeGroupName(group);
        $Opt(&#34;#optanon #optanon-menu li&#34;).removeClass(&#39;menu-item-selected&#39;);
        $Opt(this).addClass(&#39;menu-item-selected&#39;);

        $Opt(&#39;#optanon p.header-3&#39;).text(groupName);

        document.querySelector(&#34;#optanon-popup-body-right&#34;).children[2].setAttribute(&#39;id&#39;, id);
        document.querySelector(&#34;#optanon-popup-body-right&#34;).children[2].setAttribute(&#39;aria-labelledby&#39;, ariaLabel);
        document.querySelector(&#39;#optanon #&#39; &#43; id).innerHTML &#61; safeFormattedGroupDescription(group);

        var menuItem &#61; document.querySelectorAll(&#39;.preference-menu-item button&#39;);

        for (var i &#61; 0; i &lt; menuItem.length; i&#43;&#43;) {
            if (menuItem[i].attributes[1].value &#61;&#61;&#61; &#39;true&#39;) {
                menuItem[i].setAttribute(&#39;aria-selected&#39;, false);
            }
            if (menuItem[i].parentElement.parentElement.classList.contains(&#39;menu-item-selected&#39;)) {
                menuItem[i].setAttribute(&#39;aria-selected&#39;, true);
            }
        }

        //Show cookie data table
        if (group &amp;&amp; !json.HideToolbarCookieList) {
            groupCookiesHtml &#61; getGroupCookiesHtml(group);
            $Opt(&#39;#optanon .optanon-main-info-text&#39;).append(groupCookiesHtml);
        }

        setGroupStatus(group, json);

        if (subGroups &amp;&amp; subGroups.length &gt; 0) {
            for (var j &#61; 0; j &lt; subGroups.length; j &#43;&#61; 1) {
                setGroupStatus(subGroups[j], json);
            }
        }

        var headerCheckbox &#61; document.querySelector(&#39;#optanon .optanon-status-checkbox&#39;),
            subgroupCheckbox &#61; document.querySelectorAll(&#39;#optanon .optanon-subgroup-checkbox&#39;),
            headerSpan &#61; document.createElement(&#39;span&#39;);
        headerSpan.classList.add(&#39;sr-only&#39;);
        headerSpan.innerText &#61; groupName;
        headerCheckbox.nextSibling.insertBefore(headerSpan, headerCheckbox.firstChild);

        if (subgroupCheckbox.length &gt; 0) {
            subGroups.forEach(function (subgroup, idx) {
                var subgroupSpan &#61; document.createElement(&#39;span&#39;);
                subgroupSpan.classList.add(&#39;sr-only&#39;);
                subgroupSpan.innerText &#61; safeGroupName(subgroup);
                subgroupCheckbox[idx].nextSibling.insertBefore(subgroupSpan, subgroupCheckbox.firstChild);
            })
        }

        if (groupName &#61;&#61; optanonAboutCookiesGroupName) {
            $Opt(&#39;#optanon #optanon-popup-more-info-bar&#39;).hide();
        } else {
            $Opt(&#39;#optanon #optanon-popup-more-info-bar&#39;).show();
        }

        if (json.IsIABEnabled &amp;&amp; json.VendorLevelOptOut) {
            getVendorText();
        }

        return false;
    }

    function setGroupStatus(group, json) {

        if (safeGroupDefaultStatus(group).toLowerCase() &#61;&#61; &#39;always active&#39; || safeGroupDefaultStatus(group.Parent).toLowerCase() &#61;&#61; &#39;always active&#39;) {
            $Opt(&#39;#optanon .optanon-status-always-active&#39;).show();
            $Opt(&#39;#optanon .optanon-status-editable&#39;).hide();
        } else {
            $Opt(&#39;#optanon .optanon-status-editable&#39;).show();
            $Opt(&#39;#optanon .optanon-status-always-active&#39;).hide();
            // Updating group toggle id to unique value
            $Opt(&#39;#optanon .optanon-status-editable .optanon-status-checkbox&#39;).prop(&#39;id&#39;, &#39;chk&#39; &#43; group.GroupId);
            $Opt(&#39;#optanon .optanon-status-editable label&#39;).attr(&#39;for&#39;, &#39;chk&#39; &#43; group.GroupId);

            var isGroupActive &#61; $Opt.inArray((getGroupIdForCookie(group) &#43; &#39;:1&#39;), optanonHtmlGroupData) !&#61; -1;
            var groupCheckbox &#61; $Opt(isTopLevelGroup(group) ? &#34;#chk&#34; &#43; group.GroupId : &#39;#optanon #chk&#39; &#43; getGroupIdForCookie(group)),
                option &#61; (isRTL ? groupCheckbox.prev(&#39;.toggleChk&#39;) : groupCheckbox.next(&#39;label&#39;));

            if (isGroupActive) {
                groupCheckbox.prop(&#39;checked&#39;, true);
                groupCheckbox.parent().addClass(&#39;optanon-status-on&#39;);
                option.text(json.ActiveText);
            } else {
                groupCheckbox.prop(&#39;checked&#39;, false);
                groupCheckbox.parent().removeClass(&#39;optanon-status-on&#39;);
                if (json.InactiveText) option.text(json.InactiveText);
            }
        }
    }
    //BEHAVIOUR(IsIABEnabled &#61;&#61; true)
    function InitializeVendorList() {
        var json &#61; optanonData(),
            vendors &#61; IABData(),
            i;
        vendors &#61; vendors ? vendors.activeVendors : null;

        if (checkIscenterTile()) {
            $Opt(&#39;#optanon-popup-body&#39;).append(&#39;Back&#39;);
            $Opt(&#39;#optanon-popup-body&#39;).append(&#39;&#39; &#43;
                &#39;&#39; &#43;
                &#39;&#39;);
        } else {
            $Opt(&#39;#optanon-popup-body-left&#39;).append(&#39;Back&#39;);
            $Opt(&#39;#optanon-popup-body-right&#39;).append(&#39;&#39;);
        }

        if (vendors &amp;&amp; vendors.length &gt; 0) {
            for (i &#61; 0; i &lt; vendors.length; i&#43;&#43;) {
                vendors[i].policyUrl &#61; getValidUrl(vendors[i].policyUrl);
                $Opt(&#34;#optanon-vendor-consent-list&#34;).append(&#39;&#39; &#43;
                    &#39;&#39; &#43;
                    &#39;&#39; &#43; vendors[i].vendorName &#43; &#39;&#39; &#43;
                    &#39;&#39; &#43; vendors[i].policyUrl &#43; &#39;&#39; &#43;
                    &#39;&#39; &#43;
                    &#39;&#39; &#43; getVendorToggle(json, vendors[i].vendorId) &#43; &#39;&#39; &#43;
                    &#39;&#39;);
            }
        }

        if (checkIscenterTile()) {
            $Opt(&#39;#optanon-popup-body .optanon-vendor-center-tile&#39;).prepend(&#39;Vendor Consent &#39; &#43;
                &#39;&#39; &#43;
                getVenderListAllowAllToggle() &#43;
                &#39;&#39;);
            $Opt(&#39;#optanon-popup-body .optanon-vendor-center-tile&#39;).hide();
            $Opt(&#39;#optanon-popup-body #optanon-vendor-consent-back&#39;).hide();

        } else {
            $Opt(&#39;#optanon #optanon-popup-body-right .vendor-header-container&#39;).append(&#39;&#39; &#43;
                getVenderListAllowAllToggle() &#43;
                &#39;&#39;);
            $Opt(&#39;#optanon-popup-body-right #optanon-vendor-consent-list&#39;).hide();
            $Opt(&#39;#optanon-popup-body-left #optanon-vendor-consent-back&#39;).hide();
            $Opt(&#39;#optanon-popup-body-right .optanon-vendor-list-allow-all&#39;).hide();
        }
        setVendorStatus();
    }

    function getValidUrl(url) {
        if (!url) return;
        var urlWithHttpRegex &#61; /^(http)s?:\/\//i; // http(s)://domain.com
        var protocolRelativeUrlRegex &#61; /^:\/\//; // ://domain.com
        if (url.match(protocolRelativeUrlRegex)) {
            return &#34;http&#34; &#43; url;
        } else if (!url.match(urlWithHttpRegex)) {
            return &#34;http://&#34; &#43; url;
        } else {
            return url;
        }
    }

    function DisplayVendorList() {
        if (checkIscenterTile()) {
            $Opt(&#34;#optanon-popup-body #optanon-popup-body-content&#34;).hide();
            $Opt(&#34;#optanon-popup-body #optanon-vendor-consent-text&#34;).hide();
            $Opt(&#39;#optanon-popup-body #optanon-vendor-consent-back&#39;).show();
            $Opt(&#39;#optanon-popup-body .optanon-vendor-center-tile&#39;).show();
        } else {
            $Opt(&#34;#optanon-popup-body-left #optanon-menu&#34;).hide();
            $Opt(&#34;#optanon-popup-body-right .optanon-main-info-text&#34;).hide();
            $Opt(&#34;#optanon-popup-body-right #optanon-vendor-consent-text&#34;).hide();
            $Opt(&#39;#optanon-popup-body-left #optanon-vendor-consent-back&#39;).show();
            $Opt(&#39;#optanon-popup-body-right #optanon-vendor-consent-list&#39;).show();
            $Opt(&#39;#optanon-popup-body-right .optanon-vendor-list-allow-all&#39;).show();
        }
    }

    function setVendorStatus() {
        var json &#61; optanonData();
        var vendorCheckBoxList &#61; $Opt(&#34;.optanon-vendor-status-editable .optanon-vendor-status&#34;);
        if (oneTrustIABConsent.vendors &amp;&amp; vendorCheckBoxList &amp;&amp; vendorCheckBoxList.length &gt; 0) {
            for (var i &#61; 0; i &lt; vendorCheckBoxList.length; i&#43;&#43;) {
                var vendorId &#61; vendorCheckBoxList[i].id.replace(&#39;IAB&#39;, &#39;&#39;);
                var isVendorActive &#61; $Opt.inArray((vendorId &#43; &#39;:true&#39;), oneTrustIABConsent.vendors) !&#61; -1;
                var venodrToggleLabelId &#61; &#34;#lblVendorToggle_&#34; &#43; vendorId;
                var venodrToggleLabel &#61; $Opt(venodrToggleLabelId),
                    option &#61; (isRTL ? venodrToggleLabel.parent().siblings()[0].innerText : venodrToggleLabel.innerText);
                if (isVendorActive) {
                    vendorCheckBoxList[i].checked &#61; true;
                    option &#61; json.ActiveText;
                } else {
                    vendorCheckBoxList[i].checked &#61; false;
                    option &#61; json.InactiveText;
                }
            }
        }
        var totalVendor &#61; $Opt(&#34;.optanon-vendor-status-editable .optanon-vendor-status&#34;);
        var selectedVendor &#61; $Opt(&#34;.optanon-vendor-status-editable .optanon-vendor-status:checked&#34;);
        if (totalVendor &amp;&amp; selectedVendor) {
            if (selectedVendor.length &gt;&#61; (totalVendor.length / 2)) {
                $Opt(&#34;#chkVendorListAllowAll&#34;).prop(&#34;checked&#34;, true);
            } else {
                $Opt(&#34;#chkVendorListAllowAll&#34;).prop(&#34;checked&#34;, false);
            }
        }
    }

    function saveVendorStatus() {
        var enableVendors &#61; [];
        var vendorCheckBoxList &#61; $Opt(&#34;.optanon-vendor-status-editable .optanon-vendor-status:checked&#34;);
        if (vendorCheckBoxList) {
            for (var i &#61; 0; i &lt; vendorCheckBoxList.length; i&#43;&#43;) {
                enableVendors.push(vendorCheckBoxList[i].id.replace(&#39;IAB&#39;, &#39;&#39;) &#43; &#39;:true&#39;);
            }
        }
        oneTrustIABConsent.vendors &#61; enableVendors;
    }

    function getVenderListAllowAllToggle() {
        return &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;Allow All&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39;;
    }

    function getVendorText() {
        var json &#61; optanonData();
        if ($Opt(&#39;.menu-item-about&#39;).hasClass(&#39;menu-item-selected&#39;) &amp;&amp; (json.IsIABEnabled &amp;&amp; json.VendorLevelOptOut)) {
            if ($Opt(&#34;#optanon-vendor-consent-list&#34;).css(&#39;display&#39;) &#61;&#61;&#61; &#39;none&#39;) {
                $Opt(&#39;#optanon-vendor-consent-text&#39;).show();
            } else {
                DisplayVendorList();
                $Opt(&#39;#optanon-vendor-consent-text&#39;).hide();
            }
        } else { $Opt(&#39;#optanon-vendor-consent-text&#39;).hide(); }
    }

    function getVendorToggle(json, vendorId) {
        var venodrToggleLabelId &#61; &#34;lblVendorToggle_&#34; &#43; vendorId;
        var span &#61; (isRTL ? &#39;&#39; &#43; json.ActiveText &#43; &#39;&#39; : &#39;&#39;)
        return &#39;&#39; &#43;
            &#39;&#39; &#43;
            span &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43; (isRTL ? &#39;&#39; : json.ActiveText) &#43; &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39;;
    }
    //BEHAVIOUR_END

    function initialiseConsentNoticeHandlers() {
        var json &#61; optanonData();

        //adding click events to page elements
        //.optanon-close-consent: set cookie and close consent notice
        //.optanon-close-ui: only hide consent notice
        //.optanon-toggle-display: show/close consent notice (set cookie if close)
        //.optanon-allow-all: activate all groups, set cookie and close consent notice
        //.optanon-status: toggle for center tile layout
        //.optanon-banner-tile: close and go back to banner tile

        $Opt(document).on(&#39;click&#39;, &#39;.optanon-close-consent&#39;, function () {
            closeOptanonAlertBox(true, true);
            Optanon.Close();
            return false;
        });

        $Opt(document).on(&#39;click&#39;, &#39;.optanon-close-ui&#39;, function () {
            //BEHAVIOUR(ShowAlert &#61;&#61; true)
            hideConsentNotice(constant.KEEPCENTERTILEBANNEROPEN);
            //BEHAVIOUR_END
            //BEHAVIOUR(ShowAlert &#61;&#61; false)
            hideConsentNotice();
            //BEHAVIOUR_END
            return false;
        });

        $Opt(document).on(&#39;click&#39;, &#39;.optanon-toggle-display&#39;, function () {
            Optanon.ToggleInfoDisplay();
            return false;
        });

        $Opt(document).on(&#39;click&#39;, &#39;.optanon-allow-all&#39;, function () {
            closeOptanonAlertBox(true, true);
            Optanon.AllowAll();
            return false;
        });

        $Opt(document).on(&#39;keydown&#39;, &#39;#optanon&#39;, function (e) {
            if (e.keyCode &#61;&#61; 27) {
                hideConsentNotice(constant.KEEPCENTERTILEBANNEROPEN);
            }
        });

        //BEHAVIOUR(IsIABEnabled &#61;&#61; true)
        $Opt(document).on(&#39;click&#39;, &#39;#optanon-vendor-consent-text&#39;, function () {
            DisplayVendorList(json);
            return false;
        });
        $Opt(document).on(&#39;change&#39;, &#39;.vendor-group-status&#39;, function () {
            if ($Opt(this).is(&#39;:checked&#39;)) {
                if (isRTL) {
                    if (this.classList.contains(&#39;optanon-vendor-status&#39;)) {
                        $Opt(this).parent().siblings()[0].innerText &#61; json.ActiveText;
                    } else {
                        $Opt(this).prev(&#39;.toggleChk&#39;).text(json.ActiveText);
                    }
                } else {
                    $Opt(this).next(&#39;label&#39;).text(json.ActiveText);
                }
            } else {
                if (isRTL) {
                    if (this.classList.contains(&#39;optanon-vendor-status&#39;)) {
                        $Opt(this).parent().siblings()[0].innerText &#61; json.InactiveText;
                    } else {
                        $Opt(this).prev(&#39;.toggleChk&#39;).text(json.InactiveText);
                    }
                } else {
                    $Opt(this).next(&#39;label&#39;).text(json.InactiveText);
                }
            }
        });
        $Opt(document).on(&#39;change&#39;, &#39;.optanon-vendor-allow-all-editable #chkVendorListAllowAll&#39;, function () {
            if ($Opt(this).is(&#39;:checked&#39;)) {
                $Opt(&#34;.optanon-vendor-status-editable .optanon-vendor-status&#34;).prop(&#39;checked&#39;, true);
                $Opt(&#34;.optanon-vendor-status-editable &#34; &#43; (isRTL ? &#39;.toggleChk&#39; : &#39;.vendor-status-label&#39;)).text(json.ActiveText);
            } else {
                $Opt(&#34;.optanon-vendor-status-editable .optanon-vendor-status:checked&#34;).prop(&#39;checked&#39;, false);
                $Opt(&#34;.optanon-vendor-status-editable &#34; &#43; (isRTL ? &#39;.toggleChk&#39; : &#39;.vendor-status-label&#39;)).text(json.InactiveText);
            }
        });
        $Opt(document).on(&#39;click&#39;, &#39;#optanon-vendor-consent-back&#39;, function () {
            $Opt(&#34;#optanon-popup-body-left #optanon-menu&#34;).show();
            $Opt(&#34;#optanon-popup-body-right .optanon-main-info-text&#34;).show();
            $Opt(&#34;#optanon-popup-body-right #optanon-vendor-consent-text&#34;).show();
            $Opt(&#34;#optanon-popup-body-right #optanon-popup-more-info-bar&#34;).hide();
            $Opt(&#39;#optanon-popup-body-right #optanon-vendor-consent-list&#39;).hide();
            $Opt(&#39;#optanon-popup-body-left #optanon-vendor-consent-back&#39;).hide();
            $Opt(&#39;#optanon-popup-body-right .optanon-vendor-list-allow-all&#39;).hide();

            if (checkIscenterTile()) {
                $Opt(&#34;#optanon-popup-body #optanon-popup-body-content&#34;).show();
                $Opt(&#34;#optanon-popup-body #optanon-vendor-consent-text&#34;).show();
                $Opt(&#39;#optanon-popup-body #optanon-vendor-consent-back&#39;).hide();
                $Opt(&#39;#optanon-popup-body .optanon-vendor-center-tile&#39;).hide();
            }
            return false;
        });
        //BEHAVIOUR_END
        $Opt(&#39;#optanon&#39;).on(&#39;change&#39;, &#34;.optanon-status-checkbox&#34;, function () {
            var group &#61; $Opt(this).data(&#39;group&#39;) || $Opt(&#39;#optanon #optanon-menu li.menu-item-selected&#39;).data(&#39;group&#39;);
            if ($Opt(this).is(&#39;:checked&#39;)) {
                toggleGroupStatusOn(json, group, this);
                //BEHAVIOUR(ShowSubgroupToggles &#61;&#61; true)
                if (isTopLevelGroup(group)) {
                    toggleAllSubGroupStatusOn(json);
                }
                //BEHAVIOUR_END
            } else {
                toggleGroupStatusOff(json, group, this);
                //BEHAVIOUR(ShowSubgroupToggles &#61;&#61; true)
                if (isTopLevelGroup(group)) {
                    toggleAllSubGroupStatusOff(json);
                }
                //BEHAVIOUR_END
            }

            setAllowAllButton();
        });
        //BEHAVIOUR(CenterTile &#61;&#61; true)
        $Opt(&#39;#optanon&#39;).on(&#39;change&#39;, &#34;.optanon-status&#34;, function () {
            var group &#61; $Opt(this).parent(&#39;#optanon-popup-body-content&#39;).data(&#39;group&#39;);
            if ($Opt(this).is(&#39;:checked&#39;)) {
                toggleCheckBoxesForCenterTile(json, group, &#34;1&#34;);
                if (json.IsIABEnabled) {
                    setIABConsent(group, &#34;true&#34;, true);
                }
            } else {
                toggleCheckBoxesForCenterTile(json, group, &#34;0&#34;);
                if (json.IsIABEnabled) {
                    setIABConsent(group, &#34;false&#34;, true);
                }
            }
            setAllowAllButton();
        });

        $Opt(document).on(&#39;click&#39;, &#39;.optanon-banner-tile&#39;, function () {
            hideConsentNotice(constant.KEEPCENTERTILEBANNEROPEN);
            return false;
        });
        //BEHAVIOUR_END
    }

    //BEHAVIOUR(ShowSubgroupToggles &#61;&#61; true)
    function toggleAllSubGroupStatusOn(json) {
        $Opt(&#34;.optanon-status-checkbox&#34;).each(function () {
            if (!$Opt(this).is(&#39;:checked&#39;)) {
                $Opt(this).prop(&#39;checked&#39;, true);
                var subGroup &#61; $Opt(this).data(&#39;group&#39;);
                toggleGroupStatusOn(json, subGroup, this);
            }
        });
    }

    function toggleAllSubGroupStatusOff(json) {
        $Opt(&#34;.optanon-status-checkbox&#34;).each(function () {
            if ($Opt(this).is(&#39;:checked&#39;)) {
                $Opt(this).prop(&#39;checked&#39;, false);
                var subGroup &#61; $Opt(this).data(&#39;group&#39;);
                toggleGroupStatusOff(json, subGroup, this);
            }
        });
    }
    //BEHAVIOUR_END

    function getGroupIdForCookie(group) {
        if (group.CustomGroupId) {
            return group.CustomGroupId;
        } else if (group.OptanonGroupId &#61;&#61; 0) {
            return &#39;0_&#39; &#43; group.GroupId;
        } else {
            return group.OptanonGroupId;
        }
    }


    function toggleGroupStatusOn(json, group, checkbox) {
        var groupName &#61; safeGroupName(group);

        //Google Analytics event tracking
        Optanon.TriggerGoogleAnalyticsEvent(&#39;OneTrust Cookie Consent&#39;, &#39;Preferences Toggle On&#39;, groupName);

        //updating selected menu item icon colour
        $Opt(&#39;#optanon #optanon-menu li.menu-item-selected&#39;).removeClass(&#39;menu-item-off&#39;);
        $Opt(&#39;#optanon #optanon-menu li.menu-item-selected&#39;).addClass(&#39;menu-item-on&#39;);
        //updating checkbox label colour
        $Opt(checkbox).parent().addClass(&#39;optanon-status-on&#39;);
        //updating optanonHtmlGroupData with new group status
        var index &#61; indexOf(optanonHtmlGroupData, (getGroupIdForCookie(group) &#43; &#39;:0&#39;));
        if (index !&#61; -1) {
            optanonHtmlGroupData[index] &#61; getGroupIdForCookie(group) &#43; &#39;:1&#39;;
            //BEHAVIOUR(IsIABEnabled &#61;&#61; true)
            if (json.IsIABEnabled) {
                setIABConsent(group, &#34;true&#34;, true);
            }
            //BEHAVIOUR_END

        }
        var option &#61; (isRTL ? $Opt(checkbox).prev(&#39;.toggleChk&#39;) : $Opt(checkbox).next(&#39;label&#39;));
        option.text(json.ActiveText);
    }

    function toggleGroupStatusOff(json, group, checkbox) {
        var groupName &#61; safeGroupName(group);
        //Google Analytics event tracking
        Optanon.TriggerGoogleAnalyticsEvent(&#39;OneTrust Cookie Consent&#39;, &#39;Preferences Toggle Off&#39;, groupName);

        //updating selected menu item icon colour
        $Opt(&#39;#optanon #optanon-menu li.menu-item-selected &#39;).removeClass(&#39;menu-item-on&#39;);
        $Opt(&#39;#optanon #optanon-menu li.menu-item-selected&#39;).addClass(&#39;menu-item-off&#39;);
        //updating checkbox label colour
        $Opt(checkbox).parent().removeClass(&#39;optanon-status-on&#39;);
        //updating optanonHtmlGroupData with new group status
        var index &#61; indexOf(optanonHtmlGroupData, (getGroupIdForCookie(group) &#43; &#39;:1&#39;));
        if (index !&#61; -1) {
            optanonHtmlGroupData[index] &#61; getGroupIdForCookie(group) &#43; &#39;:0&#39;;
            //BEHAVIOUR(IsIABEnabled &#61;&#61; true)
            if (json.IsIABEnabled) {
                setIABConsent(group, &#34;false&#34;, true);
            }
            //BEHAVIOUR_END

        }
        var option &#61; (isRTL ? $Opt(checkbox).prev(&#39;.toggleChk&#39;) : $Opt(checkbox).next(&#39;label&#39;));
        if (json.InactiveText) option.text(json.InactiveText);
    }


    /**** Center Tile Start */
    function checkIscenterTile() {
        return isCenterTile;
    }

    //BEHAVIOUR(CenterTile &#61;&#61; true)
    function insertCenterTileConsentNoticeHtml() {
        var group,
            json &#61; optanonData(),
            groupIsAboutCookies,
            groupIsActive,
            groupMenuItem,
            moreGroupInfo,
            i;

        jsonAddAboutCookies(json);

        $Opt(&#39;body&#39;).prepend(&#39;&#39;);
        var preferenceCenterDataHTML &#61; &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39;;

        if (json.ShowPreferenceCenterCloseButton) {
            if (!json.CloseText) {
                json.CloseText &#61; &#34;Close&#34;;
            }
            preferenceCenterDataHTML &#61; preferenceCenterDataHTML &#43; &#39;&#39; &#43;
                &#39;&#39; &#43;
                &#39;&#39;;
        }

        preferenceCenterDataHTML &#61; preferenceCenterDataHTML &#43; &#39;&#39; &#43; json.MainText &#43; &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            (json.IsIABEnabled &amp;&amp; json.VendorLevelOptOut ? &#39;&#39; &#43;
                &#39;View Vendor Consent&#39; : &#39;&#39;) &#43;
            &#39;&#39;;

        $Opt(&#39;#optanon&#39;).html(preferenceCenterDataHTML);

        if (json.Language &amp;&amp; json.Language.Culture) {
            $Opt(&#34;#optanon-popup-wrapper&#34;).attr(&#34;lang&#34;, json.Language.Culture);
        }

        var preferenceTabIndex &#61; 1;
        for (i &#61; 0; i &lt; json.Groups.length; i &#43;&#61; 1) {
            group &#61; json.Groups[i];
            var groupName &#61; safeGroupName(group);
            if (groupName &#61;&#61; optanonAboutCookiesGroupName || (isTopLevelGroup(group) &amp;&amp; isValidConsentNoticeGroup(group))) {
                groupIsAboutCookies &#61; groupName &#61;&#61; optanonAboutCookiesGroupName;
                groupIsActive &#61; $Opt.inArray((getGroupIdForCookie(group) &#43; &#39;:1&#39;), optanonHtmlGroupData) !&#61; -1;
                var checkBoxHTML &#61; &#34;&#34;;
                if (groupName &#61;&#61; optanonAboutCookiesGroupName) {
                    checkBoxHTML &#61; &#34;&#34;;
                } else {
                    &#43;&#43;preferenceTabIndex;
                    checkBoxHTML &#61; getCheckBox(preferenceTabIndex, groupName, group.GroupId);
                }
                groupMenuItem &#61; $Opt(&#39;&#39; &#43;
                    checkBoxHTML &#43;
                    &#39;&#39; &#43; groupName &#43; &#39;&#39; &#43;
                    &#39;&#39; &#43; safeFormattedGroupDescription(group) &#43; &#39;&#39;);

                setGroupChkBoxStatus(group, groupMenuItem, groupIsActive, group.GroupId);
                groupMenuItem.data(&#39;group&#39;, group);
                groupMenuItem.data(&#39;optanonGroupId&#39;, getGroupIdForCookie(group));
                $Opt(&#39;#optanon #optanon-popup-body&#39;).append(groupMenuItem);
            }
        }

        moreGroupInfo &#61; &#39;&#39; &#43;
            &#39; &#39; &#43;
            json.AboutText &#43; &#39;&#39;;
        // $Opt(&#39;#optanon #optanon-popup-body&#39;).append(moreGroupInfo);

        $Opt(&#39;#optanon #optanon-popup-wrapper&#39;).append(&#39;&#39; &#43;
            &#39;&#39; &#43;
            moreGroupInfo &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            json.AllowAllText &#43; &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            json.ConfirmText &#43; &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43; json.FooterDescriptionText &#43; &#39;&#39; &#43;
            &#39;&#39;);

        // updating tabindex of the modal close button
        if (json.ShowPreferenceCenterCloseButton) {
            $Opt(&#39;.center-tile-preference-close-button&#39;).attr(&#39;tabindex&#39;, &#43;&#43;preferenceTabIndex);
        }
        setAllowAllButton();
    }

    function getCheckBox(tabindex, groupName, toggleId) {
        return &#39;&#39;
    }

    function setGroupChkBoxStatus(group, groupMenuItem, groupStatus, elementId) {
        var chkBox &#61; groupMenuItem.find(&#34;#&#34; &#43; elementId);
        var groupDefaultStatus &#61; safeGroupDefaultStatus(group).toLowerCase();
        if (groupDefaultStatus &#61;&#61; &#39;always active&#39; ||
            safeGroupDefaultStatus(group.Parent).toLowerCase() &#61;&#61; &#39;always active&#39;) {
            chkBox.prop(&#39;checked&#39;, true);
            chkBox.prop(&#39;disabled&#39;, true);
        } else {
            chkBox.prop(&#39;checked&#39;, groupStatus);
        }
    }

    // Toggle function for center tile
    function toggleCheckBoxesForCenterTile(json, group, newStatus) {
        var groupName &#61; safeGroupName(group);
        //Google Analytics event tracking
        var activeStatus;
        if (newStatus &#61;&#61;&#61; &#34;1&#34;) {
            activeStatus &#61; &#34;0&#34;;
            Optanon.TriggerGoogleAnalyticsEvent(&#39;OneTrust Cookie Consent&#39;, &#39;Preferences Toggle On&#39;, groupName);
        } else {
            activeStatus &#61; &#34;1&#34;;
            Optanon.TriggerGoogleAnalyticsEvent(&#39;OneTrust Cookie Consent&#39;, &#39;Preferences Toggle Off&#39;, groupName);
        }
        //updating optanonHtmlGroupData with new group status
        var index &#61; indexOf(optanonHtmlGroupData, (getGroupIdForCookie(group) &#43; &#39;:&#39; &#43; activeStatus));
        if (index !&#61; -1) {
            optanonHtmlGroupData[index] &#61; getGroupIdForCookie(group) &#43; &#39;:&#39; &#43; newStatus;
        }
    }

    function insertCenterTileAlertHTML() {
        var json &#61; optanonData();
        var bannerHtml &#61; &#39;&#39; &#43;
            &#39;&#39;;

        if (json.showBannerCloseButton) {
            if (!json.BannerCloseButtonText) {
                json.BannerCloseButtonText &#61; &#34;Close&#34;;
            }
            bannerHtml &#61; bannerHtml &#43; &#39;&#39; &#43;
                &#39;&#39;;
        }

        bannerHtml &#61; bannerHtml &#43; &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39;;

        if (json.BannerTitle) {
            bannerHtml &#61; bannerHtml &#43; &#39;&#39; &#43; &#39;&#39; &#43;
                json.BannerTitle &#43; &#39;&#39; &#43; &#39;&#39;;
        }

        bannerHtml &#61; bannerHtml &#43; &#39;&#39; &#43; json.AlertNoticeText &#43; getShowVendorLink() &#43; &#39;&#39; &#43;
            &#39;&#39;;
        // Accept all cookies button
        if (bannerHtml.indexOf(&#34;hide-accept-button&#34;) &lt;&#61; 0) {
            bannerHtml &#61; bannerHtml &#43; &#39;&#39; &#43;
                &#39;&#39; &#43;
                &#39;&#39; &#43;
                json.AlertAllowCookiesText &#43; &#39;&#39; &#43;
                &#39;&#39;;
        }
        // Cookie setting button
        if (bannerHtml.indexOf(&#34;hide-cookie-setting-button&#34;) &lt;&#61; 0) {
            bannerHtml &#61; bannerHtml &#43; &#39;&#39; &#43;
                &#39;&#39; &#43;
                json.AlertMoreInfoText &#43; &#39;&#39;;
        }
        bannerHtml &#61; bannerHtml &#43; &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43; &#39;&#39; &#43;
            &#39;&#39; &#43; json.FooterDescriptionText &#43; &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39;;
        $Opt(&#39;#optanon&#39;).before(bannerHtml);
        setBannerTabIndex();
    }

    function setBannerPositionForCenterTile() {

        $Opt(&#39;.optanon-alert-box-wrapper&#39;).show().animate({ &#39;bottom&#39;: &#39;0px&#39; }, 1000);
        return;


        $Opt(&#39;.optanon-alert-box-wrapper&#39;).show().animate({ &#39;top&#39;: &#39;50%&#39; }, 1000);
        return;

    }

    /**** Center Tile End */
    //BEHAVIOUR_END

    function insertShowSettingsButtonsHtml() {
        $Opt(&#39;.optanon-show-settings&#39;).wrap(&#39;&#39;).wrap(&#39;&#39;).wrap(&#39;&#39;);
        $Opt(&#39;.optanon-show-settings-middle&#39;).before(&#39;&#39;);
        $Opt(&#39;.optanon-show-settings-middle&#39;).after(&#39;&#39;);
        $Opt(&#39;.optanon-show-settings-button&#39;).addClass(&#39;optanon-toggle-display&#39;);
    }

    function initialiseShowSettingsButtonsHandlers() {
        $Opt(&#39;.optanon-show-settings-button&#39;).click(
            function () {
                Optanon.TriggerGoogleAnalyticsEvent(&#39;OneTrust Cookie Consent&#39;, &#39;Privacy Settings Click&#39;);
            }
        );
    }

    this.setShowVendorLinkText &#61; function (showVendorText) {
        var bannerLink &#61; document.getElementById(&#39;ot-show-vendorlist-link&#39;);
        var preferenceCenterLink &#61; document.querySelector(&#39;#optanon-vendor-consent-text .vendor-consent-link&#39;);
        if (bannerLink) {
            bannerLink.innerText &#61; showVendorText;
        }

        if (preferenceCenterLink) {
            preferenceCenterLink.innerText &#61; showVendorText;
        }
    }

    function getShowVendorLink() {
        var json &#61; optanonData();
        var iabBannerDescription &#61; json.IsIABEnabled &amp;&amp; json.VendorLevelOptOut ? &#39;Show Vendors\n    &#39; : &#34;&#34;;
        return iabBannerDescription;
    }

    //BEHAVIOUR(ShowAlert &#61;&#61; true)
    function insertAlertHtml() {
        var json &#61; optanonData();
        var bannerHtml &#61; &#39;&#39; &#43;
            &#39;&#39;;
        if (json.showBannerCloseButton) {
            if (!json.BannerCloseButtonText) {
                json.BannerCloseButtonText &#61; &#34;Close&#34;;
            }
            bannerHtml &#61; bannerHtml &#43; &#39;&#39; &#43;
                &#39;&#39;;
        }
        bannerHtml &#61; bannerHtml &#43; &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39; &#39; &#43;
            &#39;&#39;;

        bannerHtml &#61; bannerHtml &#43; &#39;&#39; &#43; (json.BannerTitle ? json.BannerTitle : &#39;Cookie Notice&#39;) &#43; &#39;&#39;;

        bannerHtml &#61; bannerHtml &#43; &#39;&#39; &#43; json.AlertNoticeText &#43; getShowVendorLink() &#43; &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43;
            &#39;&#39; &#43; json.AlertCloseText &#43; &#39;&#39;;
        // Accept all cookies button
        if (bannerHtml.indexOf(&#34;hide-accept-button&#34;) &lt;&#61; 0) {
            bannerHtml &#61; bannerHtml &#43; &#39;&#39; &#43;
                &#39;&#39; &#43;
                json.AlertAllowCookiesText &#43; &#39;&#39;;
        }
        // Cookie setting button
        if (bannerHtml.indexOf(&#34;hide-cookie-setting-button&#34;) &lt;&#61; 0) {
            bannerHtml &#61; bannerHtml &#43; &#39;&#39; &#43;
                &#39;&#39; &#43;
                json.AlertMoreInfoText &#43; &#39;&#39;;
        }
        bannerHtml &#61; bannerHtml &#43; &#39;&#39;;
        $Opt(&#39;#optanon&#39;).before(bannerHtml);
        setBannerTabIndex();
    }

    function setBannerPosition() {
        //BEHAVIOUR(AlertLayout &#61;&#61; &#39;bottom&#39;)
        $Opt(&#39;.optanon-alert-box-wrapper&#39;).show().animate({ &#39;bottom&#39;: &#39;0px&#39; }, 1000);
        return;
        //BEHAVIOUR_END

        //BEHAVIOUR(BannerPushesDown &#61;&#61; true)
        if (checkBrowserSupportPushPageDown()) {
            pushPageDown();
            $Opt(window).resize(function () {
                if ($Opt(&#34;.optanon-alert-box-wrapper&#34;).is(&#34;:visible&#34;)) {
                    pushPageDown();
                }
            });
            return;
        }
        //BEHAVIOUR_END

        $Opt(&#39;.optanon-alert-box-wrapper&#39;).show().animate({ &#39;top&#39;: &#39;0px&#39; }, 1000);
        return;
    }

    //BEHAVIOUR(BannerPushesDown &#61;&#61; true)
    function pushPageDown() {
        var bannerHeightPx &#61; $Opt(&#34;.optanon-alert-box-wrapper&#34;).height() &#43; &#34;px&#34;;
        var bannerTransform &#61; &#34;translateY(&#34; &#43; bannerHeightPx &#43; &#34;)&#34;;
        $Opt(&#34;.optanon-alert-box-wrapper&#34;).stop().show().css(&#34;top&#34;, &#34;-&#34; &#43; bannerHeightPx);
        $Opt(&#34;.optanon-alert-box-wrapper&#34;).css(&#34;-ms-transform&#34;, bannerTransform);
        $Opt(&#34;body&#34;).css(&#34;-ms-transform&#34;, bannerTransform);
        $Opt(&#34;body&#34;).css(&#34;transform&#34;, bannerTransform);
    }

    function pushPageUp() {
        $Opt(&#34;body&#34;).css(&#34;-ms-transform&#34;, &#34;translateY(0px)&#34;)
        $Opt(&#34;body&#34;).css(&#34;transform&#34;, &#34;translateY(0px)&#34;)
    }
    //BEHAVIOUR_END

    function checkForRefreshCloseImplied() {
        var json &#61; optanonData();
        $Opt(&#34;#optanon-popup-bg&#34;).hide();
        closeOptanonAlertBox(true, true);
        Optanon.Close(true);
        return false;
    }

    function closeBannerHandler() {
        var json &#61; optanonData();
        $Opt(&#34;#optanon-popup-bg&#34;).hide();
        closeOptanonAlertBox(true, true);
        if (json.CloseShouldAcceptAllCookies &#61;&#61; true) {
            Optanon.AllowAll();
        } else {
            Optanon.Close(false);
        }

        return false;
    }

    function initialiseAlertHandlers() {
        if (!Optanon.IsAlertBoxClosedAndValid()) {
            var json &#61; optanonData();

            if (checkIscenterTile()) {
                setBannerPositionForCenterTile();
            } else {
                setBannerPosition();
            }

            if (json.ForceConsent) {
                if (!isCookiePolicyPage(json.AlertNoticeText)) {
                    if ($Opt(&#34;#optanon-popup-bg&#34;)) {
                        $Opt(&#34;#optanon-popup-bg&#34;).css({ &#39;z-index&#39;: &#39;7000&#39; }).show();
                    }
                }
            }

            //Click handler for close buttons
            $Opt(&#39;.optanon-alert-box-close&#39;).click(function () {
                closeBannerHandler();
            });

            //BEHAVIOUR(ScrollingAcceptsCookies &#61;&#61; true)
            if (!optanonIsOptInMode || optanonIsSoftOptInMode) {
                $Opt(window).scroll(function () {
                    var overflowHeight &#61; $Opt(document).height() - $Opt(window).height();
                    if (overflowHeight &#61;&#61;&#61; 0) {
                        // when doctype is not specified, document height equals window height
                        overflowHeight &#61; $Opt(window).height();
                    }

                    var scrollPercent &#61; 100 * $Opt(window).scrollTop() / overflowHeight;
                    if (scrollPercent &gt; 25 &amp;&amp; !Optanon.IsAlertBoxClosedAndValid()) {
                        Optanon.TriggerGoogleAnalyticsEvent(&#39;OneTrust Cookie Consent&#39;, &#39;Banner Auto Close&#39;);
                        closeOptanonAlertBox(true, true);
                        Optanon.Close();

                    }
                });
            }
            //BEHAVIOUR_END

            // On Click Accepts All
            if (json.OnClickAcceptAllCookies &amp;&amp; !isCenterTile) {
                var body &#61; document.querySelector(&#39;body&#39;).children;

                for (var i &#61; 0; i &lt; body.length; i&#43;&#43;) {
                    // Listen for clicks anywhere on the DOM execept Cookie banner &amp;&amp; Optanon Id
                    if (!body[i].classList.contains(&#39;optanon-alert-box-wrapper&#39;) &amp;&amp;
                        !body[i].classList.contains(&#39;optanon-show-settings&#39;) &amp;&amp;
                        !body[i].classList.contains(&#39;optanon-toggle-display&#39;) &amp;&amp;
                        body[i].id !&#61;&#61; &#39;optanon&#39;
                    ) {
                        body[i].addEventListener(&#39;click&#39;, clickAcceptsAllEvent);
                    }
                }

                document.querySelector(&#39;.optanon-alert-box-close&#39;).addEventListener(&#39;click&#39;, bannerClosed);
                document.querySelector(&#39;.optanon-allow-all-button&#39;).addEventListener(&#39;click&#39;, bannerClosed);
                document.querySelector(&#39;.optanon-save-settings-button&#39;).addEventListener(&#39;click&#39;, bannerClosed);
                if (document.querySelector(&#39;.optanon-button-allow&#39;)) {
                    document.querySelector(&#39;.optanon-button-allow&#39;).addEventListener(&#39;click&#39;, bannerClosed);
                }

            } // On Click Accepts All END

            // On Scroll Accepts All
            if (json.ScrollAcceptsAllCookiesAndClosesBanner &amp;&amp; !isCenterTile) {
                window.addEventListener(&#39;scroll&#39;, scrollAcceptsAllEvent);

                document.querySelector(&#39;.optanon-alert-box-close&#39;).addEventListener(&#39;click&#39;, rmScrollEventListener);
                document.querySelector(&#39;.optanon-allow-all-button&#39;).addEventListener(&#39;click&#39;, rmScrollEventListener);
                document.querySelector(&#39;.optanon-save-settings-button&#39;).addEventListener(&#39;click&#39;, rmScrollEventListener);
                if (document.querySelector(&#39;.optanon-button-allow&#39;)) {
                    document.querySelector(&#39;.optanon-button-allow&#39;).addEventListener(&#39;click&#39;, rmScrollEventListener);
                }
            } // On Scroll Accepts All END
        }
    }
    //BEHAVIOUR_END

    function clickAcceptsAllEvent(e) {
        var body &#61; document.querySelector(&#39;body&#39;).children;
        Optanon.TriggerGoogleAnalyticsEvent(&#39;OneTrust Cookie Consent&#39;, &#39;Banner Auto Close&#39;);
        closeOptanonAlertBox(true, true);
        Optanon.AllowAll();
        for (var y &#61; 0; y &lt; body.length; y&#43;&#43;) {
            rmClickEventListener(body[y]);
        }
        e.stopPropagation();
    }

    function scrollAcceptsAllEvent() {
        var scroll &#61; this.pageYOffset;

        var alertBox &#61; document.getElementById(&#39;optanon-popup-wrapper&#39;);
        var alertBoxOpen &#61; !!(alertBox.offsetWidth &amp;&amp; alertBox.offsetHeight);

        if (scroll &gt; 200 &amp;&amp; !alertBoxOpen) {
            Optanon.TriggerGoogleAnalyticsEvent(&#39;OneTrust Cookie Consent&#39;, &#39;Banner Auto Close&#39;);
            closeOptanonAlertBox(true, true);
            Optanon.AllowAll();
            rmScrollEventListener();
        }
    }

    function rmScrollEventListener() {
        window.removeEventListener(&#39;scroll&#39;, scrollAcceptsAllEvent);
    }

    // User Closed Banner, Click Accepts All
    function bannerClosed() {
        var body &#61; document.querySelector(&#39;body&#39;).children;
        for (var y &#61; 0; y &lt; body.length; y&#43;&#43;) {
            rmClickEventListener(body[y]);
        }
        rmScrollEventListener();
    }

    // Remove Event Listener
    function rmClickEventListener(el) {
        el.removeEventListener(&#39;click&#39;, clickAcceptsAllEvent);
    }

    function insertCookiePolicyHtml() {
        var group,
            cookie,
            i,
            j,
            k,
            l,
            subGroupCookie,
            json &#61; optanonData(),
            groupHtml,
            subGroups,
            subgroupTableHtml,
            subgroupHtml;

        for (i &#61; 0; i &lt; json.Groups.length; i &#43;&#61; 1) {
            group &#61; json.Groups[i];
            if (isTopLevelGroup(group) &amp;&amp; isValidConsentNoticeGroup(group)) {
                //Insert group html
                groupHtml &#61; $Opt(&#39;&#39;);
                groupHtml.append(&#39;&#39; &#43; safeGroupName(group) &#43; &#39;&#39;);
                groupHtml.append(&#39;&#39; &#43; safeFormattedGroupDescription(group) &#43; &#39;&#39;);

                if (group.Cookies.length &gt; 0) {
                    //Insert group cookies html
                    groupHtml.append(&#39;&#39; &#43; json.CookiesUsedText &#43; &#39;&#39;);
                    groupHtml.append(&#39;&#39;);

                    for (k &#61; 0; k &lt; group.Cookies.length; k &#43;&#61; 1) {
                        cookie &#61; group.Cookies[k];
                        var cookiepediaLabel &#61; getCookieLabel(cookie);
                        groupHtml.find(&#39;.optanon-cookie-policy-group-cookies-list&#39;).append(&#39;&#39; &#43; ((isRTL) ? &#39;&#39; : &#39;&#39;) &#43; cookiepediaLabel &#43; &#39;&#39;);
                    }
                }

                subGroups &#61; getGroupSubGroups(group);
                if (subGroups.length &gt; 0) {
                    if (!json.CookiesText) {
                        json.CookiesText &#61; &#34;Cookies&#34;;
                    }
                    if (!json.CategoriesText) {
                        json.CategoriesText &#61; &#34;Categories&#34;;
                    }
                    if (!json.LifespanText) {
                        json.LifespanText &#61; &#34;Lifespan&#34;;
                    }
                    if (!json.LifespanTypeText) {
                        json.LifespanTypeText &#61; &#34;Session&#34;;
                    }
                    if (!json.LifespanDurationText) {
                        json.LifespanDurationText &#61; &#34;days&#34;;
                    }

                    //Insert sub group html
                    subgroupTableHtml &#61; $Opt(&#39;&#39;);
                    subgroupTableHtml.append(&#39;&#39;);

                    var lifespanHtml &#61; &#39;&#39;;
                    if (json.IsLifespanEnabled) {
                        lifespanHtml &#61; &#39; (&#39; &#43; json.LifespanText &#43; &#39;)&#39;;
                    }
                    subgroupTableHtml.find(&#39;tr&#39;).append(
                        &#39;&#39;
                        &#43; json.CategoriesText &#43; &#39;&#39;
                    );

                    subgroupTableHtml.find(&#39;tr&#39;).append(
                        &#39;&#39;
                        &#43; json.CookiesText &#43; lifespanHtml &#43;
                        &#39;&#39;);


                    for (j &#61; 0; j &lt; subGroups.length; j &#43;&#61; 1) {
                        subgroupHtml &#61; $Opt(&#39;&#39;);
                        subgroupHtml.append(&#39;&#39;);

                        var groupLabel &#61; getSubGroupLabel(subGroups[j]);
                        subgroupHtml.find(&#39;.optanon-cookie-policy-left&#39;).append(&#39;&#39; &#43; groupLabel &#43; &#39;&#39;);
                        subgroupHtml.find(&#39;.optanon-cookie-policy-left&#39;).append(&#39;&#39; &#43; safeFormattedGroupDescription(subGroups[j]) &#43; &#39;&#39;);

                        subgroupHtml.append(&#39;&#39;);
                        subgroupHtml.find(&#39;.optanon-cookie-policy-right&#39;).append(&#39;&#39;);

                        if (json.IsLifespanEnabled) {
                            for (l &#61; 0; l &lt; subGroups[j].Cookies.length; l &#43;&#61; 1) {
                                subGroupCookie &#61; subGroups[j].Cookies[l];
                                var lifespan &#61; &#39;&#39;;
                                if (subGroupCookie.IsSession) {
                                    lifespan &#61; json.LifespanTypeText;
                                } else if (subGroupCookie.Length &#61;&#61;&#61; 0) {
                                    lifespan &#61; &#39;&lt; 1 &#39; &#43; json.LifespanDurationText;
                                } else {
                                    lifespan &#61; subGroupCookie.Length &#43; &#39; &#39; &#43; json.LifespanDurationText;
                                }
                                //Insert sub group cookies html
                                subgroupHtml.find(&#39;.optanon-cookie-policy-subgroup-cookies-list&#39;).append(
                                    ((isRTL) ? &#39;&#39; : &#39;&#39;) &#43; subGroupCookie.Name &#43; &#39; (&#39; &#43; lifespan &#43; &#39;)&#39;
                                );
                            }
                        } else {
                            for (l &#61; 0; l &lt; subGroups[j].Cookies.length; l &#43;&#61; 1) {
                                subGroupCookie &#61; subGroups[j].Cookies[l];
                                //Insert sub group cookies html
                                subgroupHtml.find(&#39;.optanon-cookie-policy-subgroup-cookies-list&#39;).append(
                                    ((isRTL) ? &#39;&#39; : &#39;&#39;) &#43; subGroupCookie.Name &#43; &#39;&#39;
                                );
                            }
                        }

                        subgroupTableHtml.append(subgroupHtml);
                    }

                    groupHtml.append(subgroupTableHtml);
                }

                $Opt(&#39;#optanon-cookie-policy&#39;).append(groupHtml);

                //Setting subgroup columns to be same height for vertical border to extend all the way down
                setCookiePolicyHtmlSubGroupHeights();
            }
        }

        //Resetting cookie policy subgroup columns to be the same height on window resize
        $Opt(window).resize(function () {
            setCookiePolicyHtmlSubGroupHeights();
        });
    }

    function getGroupCookiesHtml(group) {
        var json &#61; optanonData(),
            groupHtml &#61; $Opt(&#39;&#39;),
            j,
            k,
            l,
            subGroups &#61; getGroupSubGroups(group),
            cookie,
            subGroupCookie,
            $group,
            $subgroup;

        if ((group.Cookies &amp;&amp; group.Cookies.length &gt; 0) || (subGroups &amp;&amp; subGroups.length &gt; 0)) {
            groupHtml.append(&#39;&#39; &#43; json.CookiesUsedText &#43; &#39;&#39;);
        }

        if (group.Cookies &amp;&amp; group.Cookies.length &gt; 0) {
            //Insert group cookies html
            $group &#61; $Opt(&#39;&#39;);

            for (k &#61; 0; k &lt; group.Cookies.length; k &#43;&#61; 1) {
                cookie &#61; group.Cookies[k];
                var cookiepediaLabel &#61; getCookieLabel(cookie);
                $group.append(cookiepediaLabel &#43; (k &lt; (group.Cookies.length - 1) ? &#39;, &#39; : &#39;&#39;));
            }

            groupHtml.append($group);
        }

        if (subGroups &amp;&amp; subGroups.length &gt; 0) {
            for (j &#61; 0; j &lt; subGroups.length; j &#43;&#61; 1) {
                $subgroup &#61; $Opt(&#39;&#39;);

                var groupLabel &#61; getSubGroupLabel(subGroups[j]);
                var description &#61; safeFormattedGroupDescription(subGroups[j]);
                var headerSeparator &#61; optanonShowSubGroupCookies || (optanonShowSubGroupDescription &amp;&amp; description) ? &#34;:&#34; : &#34;&#34;;
                $subgroup.append(&#39;&#39; &#43; groupLabel &#43; headerSeparator &#43; &#39; &#39;);
                //BEHAVIOUR(ShowSubgroupToggles &#61;&#61; true)
                if (safeGroupDefaultStatus(subGroups[j].Parent).toLowerCase() !&#61; &#39;always active&#39;) {
                    var subgroupToggle &#61; getSubgroupToggle(json, subGroups[j]);
                    $subgroup.append(subgroupToggle);
                }
                //BEHAVIOUR_END
                var $subgroupCookies &#61; $Opt(&#39;&#39;);
                if (optanonShowSubGroupCookies) {
                    for (l &#61; 0; l &lt; subGroups[j].Cookies.length; l &#43;&#61; 1) {
                        subGroupCookie &#61; subGroups[j].Cookies[l];
                        $subgroupCookies.append(subGroupCookie.Name &#43; (l &lt; (subGroups[j].Cookies.length - 1) ? &#39;, &#39; : &#39;&#39;));
                    }
                }

                $subgroup.append($subgroupCookies);

                if (optanonShowSubGroupDescription &amp;&amp; description) {
                    $subgroup.append(&#39;&#39; &#43; description &#43; &#39;&#39;);
                }

                groupHtml.append($subgroup);
            }
        }

        return groupHtml;
    }

    function safeFormattedGroupDescription(group) {
        if (!group || !group.GroupLanguagePropertiesSets || !group.GroupLanguagePropertiesSets[0] ||
            !group.GroupLanguagePropertiesSets[0].GroupDescription || !group.GroupLanguagePropertiesSets[0].GroupDescription.Text) {
            return &#34;&#34;;
        }
        return group.GroupLanguagePropertiesSets[0].GroupDescription.Text.replace(/\r\n/g, &#39;&#39;);
    }

    function safeGroupName(group) {
        var hasName &#61; group &amp;&amp; group.GroupLanguagePropertiesSets &amp;&amp;
            group.GroupLanguagePropertiesSets[0] &amp;&amp; group.GroupLanguagePropertiesSets[0].GroupName;
        if (!hasName) {
            return &#34;&#34;;
        }
        return group.GroupLanguagePropertiesSets[0].GroupName.Text;
    }

    function safeGroupDefaultStatus(group) {
        var json &#61; optanonData();
        var hasDefaultStatus &#61; group &amp;&amp; group.GroupLanguagePropertiesSets &amp;&amp;
            group.GroupLanguagePropertiesSets[0] &amp;&amp; group.GroupLanguagePropertiesSets[0].DefaultStatus;
        if (!hasDefaultStatus) {
            return &#34;&#34;;
        }
        if (optanonDoNotTrackEnabled &amp;&amp; json.IsDntEnabled &amp;&amp; group.GroupLanguagePropertiesSets[0].IsDntEnabled) {
            return doNotTrackText;
        }
        return group.GroupLanguagePropertiesSets[0].DefaultStatus.Text;
    }

    function getSubGroupLabel(group) {
        if (!group) return &#34;&#34;;
        var groupLabel &#61; safeGroupName(group);

        //BEHAVIOUR(AddLinksToCookiepedia &#61;&#61; true)
        var cookie &#61; group.Cookies[0];
        if (!cookie) return groupLabel;

        // third party cookie linked by host of the first cookie
        groupLabel &#61; &#39;&#39; &#43; groupLabel &#43; &#39;&#39;;

        //BEHAVIOUR_END
        return groupLabel;
    }

    function getCookieLabel(cookie) {
        if (!cookie) return &#34;&#34;;

        var cookieLabel &#61; cookie.Name;
        //BEHAVIOUR(AddLinksToCookiepedia &#61;&#61; true)
        // first party cookie linked by name
        cookieLabel &#61; &#39;&#39; &#43; cookie.Name &#43; &#39;&#39;;
        //BEHAVIOUR_END
        return cookieLabel;
    }

    //Setting cookie policy subgroup columns to be the same height
    function setCookiePolicyHtmlSubGroupHeights() {
        $Opt(&#39;#optanon-cookie-policy .optanon-cookie-policy-subgroup&#39;).each(function () {
            $Opt(this).find(&#39;.optanon-cookie-policy-left&#39;).height(&#39;auto&#39;);
            $Opt(this).find(&#39;.optanon-cookie-policy-right&#39;).height(&#39;auto&#39;);
            if ($Opt(this).find(&#39;.optanon-cookie-policy-left&#39;).height() &gt;&#61; $Opt(this).find(&#39;.optanon-cookie-policy-right&#39;).height()) {
                $Opt(this).find(&#39;.optanon-cookie-policy-right&#39;).height($Opt(this).find(&#39;.optanon-cookie-policy-left&#39;).height());
            } else {
                $Opt(this).find(&#39;.optanon-cookie-policy-left&#39;).height($Opt(this).find(&#39;.optanon-cookie-policy-right&#39;).height());
            }
        });
    }

    function showConsentNotice() {
        if (checkIscenterTile()) {
            // hiding banner modal
            $Opt(&#39;.optanon-alert-box-wrapper&#39;).hide();
        }
        $Opt(&#34;#optanon #optanon-menu li&#34;).removeClass(&#39;menu-item-selected&#39;);
        $Opt(&#34;#optanon #optanon-menu li&#34;).each(function () {
            if ($Opt(this).text() &#61;&#61; optanonAboutCookiesGroupName) {
                $Opt(this).click();
            }
        });

        setAllowAllButton();

        // Center consent notice on screen
        var $notice &#61; $Opt(&#39;#optanon-popup-wrapper&#39;),
            width &#61; window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height &#61; window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        $notice.css(&#34;margin-top&#34;, &#34;10px&#34;);

        if (width &lt; 720) {
            $notice.css(&#34;top&#34;, &#34;10px&#34;);
        } else if ($notice.outerHeight() &gt; height) {
            $notice.css(&#34;top&#34;, Math.max(0, ((height - $notice.outerHeight()) / 2) &#43; $Opt(window).scrollTop()) &#43; &#34;px&#34;);
        } else {
            $notice.css(&#34;top&#34;, Math.max(0, ((height - $notice.outerHeight()) / 2)) &#43; &#34;px&#34;);
        }

        // Select pop up elements and attach animation class
        var bg &#61; document.querySelector(&#39;#optanon #optanon-popup-bg&#39;);
        var wrapper &#61; document.querySelector(&#39;#optanon #optanon-popup-wrapper&#39;);
        bg.classList.add(&#39;fade-in&#39;);
        wrapper.classList.add(&#39;fade-in&#39;);

        // Toggle element display attribute to replace jQuery.hide()
        bg.style.display &#61; &#39;block&#39;;
        wrapper.style.display &#61; &#39;block&#39;;

        $notice.focus();
    }

    function hideConsentNotice(caller) {
        if (checkIscenterTile()) {
            // showing banner modal
            $Opt(&#39;.optanon-alert-box-wrapper&#39;).show();
            if (caller &#61;&#61;&#61; constant.KEEPCENTERTILEBANNEROPEN) {
                $Opt(&#39;#optanon #optanon-popup-wrapper&#39;).fadeOut(400);
            } else {
                $Opt(&#39;#optanon #optanon-popup-bg, #optanon #optanon-popup-wrapper&#39;).fadeOut(400);
            }
        } else {
            var json &#61; optanonData();

            if (json.ForceConsent) {
                if (!isCookiePolicyPage(json.AlertNoticeText) &amp;&amp; !Optanon.IsAlertBoxClosedAndValid()) {
                    $Opt(&#34;#optanon-popup-bg&#34;).css({ &#39;z-index&#39;: &#39;7000&#39; });
                    $Opt(&#39;#optanon #optanon-popup-wrapper&#39;).fadeOut(400);
                } else {
                    $Opt(&#39;#optanon #optanon-popup-bg, #optanon #optanon-popup-wrapper&#39;).fadeOut(400);
                }
            } else {
                $Opt(&#39;#optanon #optanon-popup-bg, #optanon #optanon-popup-wrapper&#39;).fadeOut(400);
            }
        }
    }

    function checkIsActiveByDefault(group) {
        if (!safeGroupDefaultStatus(group)) {
            return true;
        } else {
            var groupStatus &#61; safeGroupDefaultStatus(group).toLowerCase();
            if (group.Parent) {
                groupStatus &#61; safeGroupDefaultStatus(group.Parent).toLowerCase();
            }
            return groupStatus &#61;&#61; &#39;always active&#39; || groupStatus &#61;&#61; &#39;inactive landingpage&#39; || groupStatus &#61;&#61; &#39;active&#39; || (groupStatus &#61;&#61; doNotTrackText &amp;&amp; !optanonDoNotTrackEnabled);
        }
    }

    function getIABCrossConsentflagData() {
        return readCookieParam(optanonCookieName, oneTrustIsIABCrossConsentEnableParam);
    }

    function isIABCrossConsentEnabled() {
        return getIABCrossConsentflagData() &#61;&#61;&#61; &#39;true&#39;;
    }

    function ensureHtmlGroupDataInitialised() {
        var group,
            json &#61; optanonData(),
            i;

        if (!readCookieParam(optanonCookieName, &#39;groups&#39;)) {
            //Populate optanonHtmlGroupData from json
            optanonHtmlGroupData &#61; [];
            for (i &#61; 0; i &lt; json.Groups.length; i &#43;&#61; 1) {
                group &#61; json.Groups[i];
                if (isValidConsentNoticeGroup(group)) {
                    //Group should show in popup
                    if (checkIsActiveByDefault(group)) {
                        //Group is active
                        optanonHtmlGroupData.push(getGroupIdForCookie(group) &#43; &#39;:1&#39;);
                    } else {
                        //Group is inactive
                        optanonHtmlGroupData.push(getGroupIdForCookie(group) &#43; &#39;:0&#39;);
                    }
                }
            }
            optanonEnsureCookieDataCompatibilityComplete &#61; true;

        } else {
            //Populate optanonHtmlGroupData from cookie
            ensureCookieDataCompatibility();
            synchroniseCookieGroupData();
            optanonHtmlGroupData &#61; deserialiseStringToArray(readCookieParam(optanonCookieName, &#39;groups&#39;));
        }
        //BEHAVIOUR(IsIABEnabled &#61;&#61; true)
        if (!isIABCrossConsentEnabled()) {
            initializeIABData();
        } else {
            setIAB3rdPartyCookie(oneTrustIAB3rdPartyCookie, &#34;&#34;, 0, true);
        }
        //BEHAVIOUR_END
    }

    //setting 3rdparty consent flag in cookie for stub to make judgement on calling 3rd party consent or not
    function setOrUpdate3rdPartyIABConsentFlag() {
        var json &#61; optanonData();
        var iabCrossConsentFlag &#61; readCookieParam(optanonCookieName,
            oneTrustIsIABCrossConsentEnableParam);

        if (json.IsIABEnabled) {
            if (!iabCrossConsentFlag || reconsentRequired()) {
                writeCookieParam(optanonCookieName, oneTrustIsIABCrossConsentEnableParam, json.IsIabThirdPartyCookieEnabled);
            }
        } else {
            if (!iabCrossConsentFlag || reconsentRequired()) {
                writeCookieParam(optanonCookieName, oneTrustIsIABCrossConsentEnableParam, false);
            } else if (iabCrossConsentFlag !&#61;&#61; &#39;false&#39;) {
                writeCookieParam(optanonCookieName, oneTrustIsIABCrossConsentEnableParam, false);
            }
        }
    }

    function setGeolocationInCookies() {
        var userGeolocation &#61; readCookieParam(optanonCookieName, geolocationCookiesParam);
        if (userGeolocation &#61;&#61;&#61; &#34;&#34; &amp;&amp; Optanon.IsAlertBoxClosedAndValid()) {
            writeCookieParam(
                optanonCookieName,
                geolocationCookiesParam,
                isInEU);
        } else if (reconsentRequired() &amp;&amp; userGeolocation !&#61;&#61; &#34;&#34;) {
            writeCookieParam(
                optanonCookieName,
                geolocationCookiesParam,
                &#34;&#34;);
        }
    }

    //BEHAVIOUR(IsConsentIntegration &#61;&#61; true)
    function ensureConsentId() {
        if (!readCookieParam(optanonCookieName, onetrustConsentParamName)) {
            writeCookieParam(optanonCookieName, onetrustConsentParamName, generateUUID());
        }
        return readCookieParam(optanonCookieName, onetrustConsentParamName);
    }

    function createConsentTransaction() {
        var consentId &#61; ensureConsentId();
        var json &#61; populateConsentData();
        var domainData &#61; optanonData();
        if (json &amp;&amp; json.consentApi &amp;&amp; consentId) {
            json.consentPayload.identifier &#61; consentId;
            json.consentPayload.customPayload &#61; {
                &#34;activeGroup&#34;: serialiseArrayToString(optanonHtmlGroupData),
                &#34;Date&#34;: new Date(),
                &#34;language&#34;: domainData.Language.Culture
            };

            if (json.consentPayload.purposes[0].id) {
                json.consentPayload.purposes[0].Id &#61; json.consentPayload.purposes[0].id;
                delete json.consentPayload.purposes[0].id;
            }

            OTajax({
                url: json.consentApi,
                type: &#39;post&#39;,
                dataType: &#39;json&#39;,
                contentType: &#39;application/json&#39;,
                success: function (data) {

                },
                error: function (error) {
                    console.log(&#39;ERROR&#39;, error);
                },
                data: JSON.stringify(json.consentPayload)
            });
        }

    }
    //BEHAVIOUR_END


    function getGroupById(groupId) {
        var json &#61; optanonData(), i;

        for (i &#61; 0; i &lt; json.Groups.length; i &#43;&#61; 1) {
            if (getGroupIdForCookie(json.Groups[i]) &#61;&#61; groupId) {
                return json.Groups[i];
            }
        }

    }

    //BEHAVIOUR(IsIABEnabled &#61;&#61; true)
    function populateVendorList(initializeVendor) {
        if (isIABCrossConsentEnabled()) {
            if ($Opt) {
                globalVendorList(initializeVendor);
            }
        } else {
            getAndSetDefaultVendorList();
            window.__cmp.proccessQueue();
        }
    }

    function globalVendorList(initializeVendor) {
        var iabData &#61; IABData();
        var vendorlistUrl &#61; iabData.globalVendorListUrl || updateCorrectUrl(iabData.globalVendorListUrl);
        $Opt.getJSON(vendorlistUrl, function (response) {
            if (response) {
                oneTrustIABConsent.vendorList &#61; response;
                assignIABDataWithGlobalVendorList(oneTrustIABConsent.vendorList);
                if (initializeVendor) {
                    setIABVendor();
                    assignIABConsentFromHtmlGroupData();
                    setVendorStatus();
                }
            } else {
                getAndSetDefaultVendorList();
            }
            window.__cmp.proccessQueue();
        });
    }

    function assignIABDataWithGlobalVendorList(vendorList) {
        if (otIABData) {
            otIABData.activeVendors &#61; vendorList.vendors.map(function (vendor) {
                vendor.vendorId &#61; vendor.id;
                vendor.vendorName &#61; vendor.name;
                return vendor;
            });
            otIABData.vendorListVersion &#61; vendorList.vendorListVersion;
        }
    }


    function getAndSetDefaultVendorList() {
        var json &#61; IABData();
        if (json.iabVendorJson &amp;&amp; !oneTrustIABConsent.vendorList) {
            oneTrustIABConsent.vendorList &#61; JSON.parse(json.iabVendorJson);
        }
        return oneTrustIABConsent.vendorList;
    }

    function assignIABConsentFromHtmlGroupData() {
        var group &#61; {};
        for (var index &#61; 0; index &lt; optanonHtmlGroupData.length; index&#43;&#43;) {
            if (optanonHtmlGroupData[index].indexOf(&#39;_&#39;) &#61;&#61;&#61; -1) {
                var groupData &#61; optanonHtmlGroupData[index].split(&#39;:&#39;);
                group &#61; getGroupById(groupData[0]);
                if (groupData[1] &#61;&#61; &#34;1&#34; &amp;&amp; canSoftOptInInsertForGroup(groupData[0])) {
                    setIABConsent(group, &#34;true&#34;);
                } else {
                    setIABConsent(group, &#34;false&#34;);
                }
            }

        }
    }



    function setIABConsent(group, isActive, replace) {
        if (isTopLevelGroup(group)) {
            if (group.Purposes &amp;&amp; group.Purposes.length &gt; 0) {
                for (var index &#61; 0; index &lt; group.Purposes.length; index&#43;&#43;) {
                    if (replace) {
                        var isExist &#61; indexOf(oneTrustIABConsent.purpose, (group.Purposes[index].purposes.purposeId &#43; &#34;:&#34; &#43; !(isActive &#61;&#61; &#34;true&#34;)));
                        if (isExist !&#61; -1) {
                            oneTrustIABConsent.purpose[isExist] &#61; group.Purposes[index].purposes.purposeId &#43; &#34;:&#34; &#43; isActive;
                        }
                    } else {
                        var isExist &#61; indexOf(oneTrustIABConsent.purpose, (group.Purposes[index].purposes.purposeId &#43; &#34;:&#34; &#43; isActive));
                        if (isExist &#61;&#61; -1) {
                            oneTrustIABConsent.purpose.push(group.Purposes[index].purposes.purposeId &#43; &#34;:&#34; &#43; isActive);
                        }
                    }
                }
            }
        }
    }

    function setIABVendor() {
        var i,
            jsonIABData &#61; IABData();
        if (jsonIABData &amp;&amp; jsonIABData.activeVendors &amp;&amp; jsonIABData.activeVendors.length &gt; 0) {
            for (i &#61; 0; i &lt; jsonIABData.activeVendors.length; i&#43;&#43;) {
                oneTrustIABConsent.vendors.push(jsonIABData.activeVendors[i].vendorId.toString() &#43; &#34;:true&#34;);
            }
        }
    }
    //BEHAVIOUR_END

    //If cookie exists, ensures to add any new groups and remove any redundant groups to data
    function synchroniseCookieGroupData() {
        var toUpdateCookie &#61; false,
            cookieGroupData &#61; deserialiseStringToArray(readCookieParam(optanonCookieName, &#39;groups&#39;)),
            cookieGroupDataStripped &#61; deserialiseStringToArray(readCookieParam(optanonCookieName, &#39;groups&#39;).replace(/:0/g, &#39;&#39;).replace(/:1/g, &#39;&#39;)),
            json &#61; optanonData(),
            group,
            i,
            j,
            index,
            foundMatchingJsonGroup;

        if (readCookieParam(optanonCookieName, &#39;groups&#39;)) {
            //Adding missing groups to cookie
            for (i &#61; 0; i &lt; json.Groups.length; i &#43;&#61; 1) {
                group &#61; json.Groups[i];
                if (isValidConsentNoticeGroup(group)) {
                    //Group should show in popup
                    index &#61; indexOf(cookieGroupDataStripped, getGroupIdForCookie(group));
                    if (index &#61;&#61; -1) {
                        //Json group does not exist in cookie
                        toUpdateCookie &#61; true;

                        if (checkIsActiveByDefault(group)) {
                            //Group is active
                            cookieGroupData.push(getGroupIdForCookie(group) &#43; &#39;:1&#39;);
                        } else {
                            //Group is inactive
                            cookieGroupData.push(getGroupIdForCookie(group) &#43; &#39;:0&#39;);
                        }
                    }
                }
            }

            //Removing redundant groups from cookie
            for (i &#61; cookieGroupData.length - 1; i &gt;&#61; 0; i -&#61; 1) {
                foundMatchingJsonGroup &#61; false;
                for (j &#61; 0; j &lt; json.Groups.length; j &#43;&#61; 1) {
                    group &#61; json.Groups[j];
                    if (isValidConsentNoticeGroup(group)) {
                        if (getGroupIdForCookie(group) &#61;&#61; cookieGroupData[i].replace(/:0/g, &#39;&#39;).replace(/:1/g, &#39;&#39;)) {
                            foundMatchingJsonGroup &#61; true;
                            break;
                        }
                    }
                }

                if (!foundMatchingJsonGroup) {
                    //Cookie group does not exist in json
                    toUpdateCookie &#61; true;
                    cookieGroupData.splice(i, 1);
                }
            }

            //Writing updated cookie
            if (toUpdateCookie) {
                writeCookieGroupsParam(optanonCookieName, cookieGroupData);
            }
        }
    }

    // Returns true if all json default group statuses are set to inactive (excluding &#39;always active&#39; groups)
    function getIsOptInMode() {
        var isOptIn &#61; true,
            group,
            json &#61; optanonData(),
            i;

        for (i &#61; 0; i &lt; json.Groups.length; i &#43;&#61; 1) {
            group &#61; json.Groups[i];
            if (isValidConsentNoticeGroup(group)) {
                //TODO: confirm if should consider DNT here
                if (!safeGroupDefaultStatus(group) ||
                    (safeGroupDefaultStatus(group) &amp;&amp;
                        (safeGroupDefaultStatus(group).toLowerCase() &#61;&#61; &#39;active&#39; ||
                            safeGroupDefaultStatus(group).toLowerCase() &#61;&#61; &#39;inactive landingpage&#39; ||
                            safeGroupDefaultStatus(group).toLowerCase() &#61;&#61; doNotTrackText))) {
                    isOptIn &#61; false;
                    break;
                }
            }
        }

        return isOptIn;
    }

    // Returns true if all json default group statuses are set to inactive landingpage (excluding &#39;always active&#39; groups)
    function getIsSoftOptInMode() {
        var isSoftOptIn &#61; true,
            group,
            json &#61; optanonData(),
            i;

        for (i &#61; 0; i &lt; json.Groups.length; i &#43;&#61; 1) {
            group &#61; json.Groups[i];
            if (!isValidConsentNoticeGroup(group)) continue;

            var statusText &#61; safeGroupDefaultStatus(group).toLowerCase();
            if (statusText !&#61;&#61; &#39;inactive landingpage&#39; &amp;&amp; statusText !&#61;&#61; &#39;always active&#39;) {
                isSoftOptIn &#61; false;
                break;
            }
        }

        return isSoftOptIn;
    }

    // Ensure cookie data is compatible with latest version
    function ensureCookieDataCompatibility() {
        var toUpdateCookie &#61; false;

        if (readCookieParam(optanonCookieName, &#39;groups&#39;) &amp;&amp; !optanonEnsureCookieDataCompatibilityComplete) {

            //Add functionality here to update cookie data

            //Writing updated cookie
            if (toUpdateCookie) {
                writeCookieGroupsParam(optanonCookieName, cookieGroupData);
            }

            optanonEnsureCookieDataCompatibilityComplete &#61; true;
        }
    }

    function writeCookieGroupsParam(cookieName, groupData) {
        var json &#61; optanonData();
        if (groupData) {
            writeCookieParam(cookieName, &#39;groups&#39;, serialiseArrayToString(groupData));
        } else {
            writeCookieParam(cookieName, &#39;groups&#39;, serialiseArrayToString(optanonHtmlGroupData));
        }

        //BEHAVIOUR(IsIABEnabled &#61;&#61; true)
        if (json.IsIABEnabled &amp;&amp; !reconsentRequired() &amp;&amp; getCookie(optanonAlertBoxClosedCookieName)) {
            if (oneTrustIABConsent &amp;&amp; oneTrustIABConsent.purpose
                &amp;&amp; oneTrustIABConsent.vendors &amp;&amp; oneTrustIABConsent.vendorList) {
                IABCookieValue &#61; getIABConsentData();

                if (isIABCrossConsentEnabled()) {
                    setIAB3rdPartyCookie(oneTrustIAB3rdPartyCookie, IABCookieValue, 390, false);
                } else {
                    setCookie(oneTrustIABCookieName, IABCookieValue, 390);
                }
            }
        }
        //BEHAVIOUR_END
    }

    function writeCookieParam(cookieName, paramName, paramValue) {
        var data &#61; {},
            cookie &#61; getCookie(cookieName),
            i,
            values,
            pair,
            value,
            json &#61; optanonData();

        if (cookie) {
            values &#61; cookie.split(&#39;&amp;&#39;);
            for (i &#61; 0; i &lt; values.length; i &#43;&#61; 1) {
                pair &#61; values[i].split(&#39;&#61;&#39;);
                data[decodeURIComponent(pair[0])] &#61; decodeURIComponent(pair[1]).replace(/\&#43;/g, &#39; &#39;);
            }
        }
        data[paramName] &#61; paramValue;
        data.datestamp &#61; new Date().toString();
        data.version &#61; optanonVersion;
        value &#61; param(data);
        setCookie(cookieName, value, 365);
    }

    function readCookieParam(cookieName, paramName) {
        var cookie &#61; getCookie(cookieName),
            i,
            data,
            values,
            pair;

        if (cookie) {
            data &#61; {};
            values &#61; cookie.split(&#39;&amp;&#39;);
            for (i &#61; 0; i &lt; values.length; i &#43;&#61; 1) {
                pair &#61; values[i].split(&#39;&#61;&#39;);
                data[decodeURIComponent(pair[0])] &#61; decodeURIComponent(pair[1]).replace(/\&#43;/g, &#39; &#39;);
            }
            if (paramName &amp;&amp; data[paramName]) {
                //Found cookie value for valid param
                return data[paramName];
            }
            if (paramName &amp;&amp; !data[paramName]) {
                //Found no cookie value for valid param
                return &#34;&#34;;
            }
            //Invalid param, returns entire cookie
            return data;

        }
        return &#34;&#34;;
    }

    function setCookie(name, value, days) {
        var expires,
            date;

        if (days) {
            date &#61; new Date();
            date.setTime(date.getTime() &#43; (days * 24 * 60 * 60 * 1000));
            expires &#61; &#39;; expires&#61;&#39; &#43; date.toGMTString();
        } else {
            expires &#61; &#39;&#39;;
        }

        var domainAndPath &#61; optanonCookieDomain.split(&#39;/&#39;);
        if (domainAndPath.length &lt;&#61; 1) {
            domainAndPath[1] &#61; &#39;&#39;;
        }

        document.cookie &#61; name &#43; &#39;&#61;&#39; &#43; value &#43; expires &#43; &#39;; path&#61;/&#39; &#43; domainAndPath[1] &#43; &#39;; domain&#61;.&#39; &#43; domainAndPath[0] &#43; &#39;; Samesite&#61;Lax&#39;;
    }

    function getCookie(name) {
        var nameEq &#61; name &#43; &#39;&#61;&#39;,
            ca &#61; document.cookie.split(&#39;;&#39;),
            i,
            c;

        for (i &#61; 0; i &lt; ca.length; i &#43;&#61; 1) {
            c &#61; ca[i];
            while (c.charAt(0) &#61;&#61; &#39; &#39;) {
                c &#61; c.substring(1, c.length);
            }
            if (c.indexOf(nameEq) &#61;&#61; 0) {
                return c.substring(nameEq.length, c.length);
            }
        }
        return null;
    }

    function setIAB3rdPartyCookie(name, value, days, isFirstRequest) {
        var IABUrl &#61; &#34;[[IabThirdPartyCookieUrl]]&#34;;
        if (IABData) {
            var url &#61; window.location.protocol &#43; &#34;//&#34; &#43; IABUrl &#43; &#34;/?name&#61;&#34; &#43; name &#43; &#34;&amp;value&#61;&#34; &#43; value &#43; &#34;&amp;expire&#61;&#34; &#43; days &#43; &#34;&amp;isFirstRequest&#61;&#34; &#43; isFirstRequest;
            if (document.getElementById(&#39;onetrustIabCookie&#39;)) {
                document.getElementById(&#39;onetrustIabCookie&#39;).contentWindow.location.replace(url);
            } else {
                var i &#61; document.createElement(&#39;iframe&#39;);
                i.style.display &#61; &#39;none&#39;;
                i.id &#61; &#34;onetrustIabCookie&#34;;
                i.src &#61; url;
                if (document.body) {
                    document.body.appendChild(i);
                } else {
                    setTimeout(function () { document.body.appendChild(i); }, 100);
                }
            }
        }
    }

    function canInsertForGroup(groupId, ignoreGroupCheck) {
        var validGroup &#61; groupId !&#61; null &amp;&amp; typeof groupId !&#61; &#39;undefined&#39;,
            isExistingActiveGroup,
            isNonExistingGroup;

        if (!ignoreGroupCheck) {
            ensureHtmlGroupDataInitialised();
            isExistingActiveGroup &#61; contains(optanonHtmlGroupData, (groupId &#43; &#39;:1&#39;));
            isNonExistingGroup &#61; !doesGroupExist(groupId);
            if (validGroup &amp;&amp; (isExistingActiveGroup &amp;&amp; canSoftOptInInsertForGroup(groupId) || isNonExistingGroup)) {
                return true;
            }
            return false;
        }
        return true;
    }

    // Returns true if group is not soft opt-in or if group is soft opt-in and landing page was left (i.e. after user interaction)
    function canSoftOptInInsertForGroup(groupId) {
        var group &#61; getGroupById(groupId),
            isSoftOptInGroup,
            parentGroup;

        parentGroup &#61; isTopLevelGroup(group) ? group : group.Parent;
        isSoftOptInGroup &#61; safeGroupDefaultStatus(parentGroup).toLowerCase() &#61;&#61; &#39;inactive landingpage&#39;;
        if (!isSoftOptInGroup) {
            return true;
        }
        if (isLandingPage()) {
            return false;
        }
        return true;
    }

    function isLandingPage() {
        var landingPath &#61; readCookieParam(optanonCookieName, &#39;landingPath&#39;);
        if (!landingPath || landingPath &#61;&#61;&#61; location.href) {
            return true;
        }
        return false;
    }

    // Returns true if group id exist in json
    function doesGroupExist(groupId) {
        var json &#61; optanonData(),
            i;

        for (i &#61; 0; i &lt; json.Groups.length; i &#43;&#61; 1) {
            if (json.Groups[i].CustomGroupId) {
                if (json.Groups[i].CustomGroupId &#61;&#61; groupId) {
                    return true;
                }
            } else if (json.Groups[i].OptanonGroupId &#61;&#61; groupId) {
                return true;
            }
        }
        return false;
    }

    //Returns comma delimited string from array
    function serialiseArrayToString(cookieGroupsArray) {
        return cookieGroupsArray.toString().toLowerCase();
    }

    //Returns array from comma delimited string
    function deserialiseStringToArray(cookieGroupsString) {
        if (!cookieGroupsString) return [];
        return cookieGroupsString.toLowerCase().split(&#39;,&#39;);
    }

    function executeCustomScript() {
        var json &#61; optanonData();
        if (json.CustomJs) {
            (new Function(json.CustomJs))();
        }
    }

    function executeOptanonWrapper() {
        var i;
        executeCustomScript();
        if (typeof OptanonWrapper &#61;&#61; &#39;function&#39;) {
            if (OptanonWrapper !&#61; &#39;undefined&#39;) {
                OptanonWrapper();

                //Adding Optanon Group Id to optanonWrapperScriptExecutedGroups
                for (i &#61; 0; i &lt; optanonWrapperScriptExecutedGroupsTemp.length; i &#43;&#61; 1) {
                    if (!contains(optanonWrapperScriptExecutedGroups, optanonWrapperScriptExecutedGroupsTemp[i])) {
                        optanonWrapperScriptExecutedGroups.push(optanonWrapperScriptExecutedGroupsTemp[i]);
                    }
                }
                optanonWrapperScriptExecutedGroupsTemp &#61; [];

                //Adding Optanon Group Id to optanonWrapperHtmlExecutedGroups
                for (i &#61; 0; i &lt; optanonWrapperHtmlExecutedGroupsTemp.length; i &#43;&#61; 1) {
                    if (!contains(optanonWrapperHtmlExecutedGroups, optanonWrapperHtmlExecutedGroupsTemp[i])) {
                        optanonWrapperHtmlExecutedGroups.push(optanonWrapperHtmlExecutedGroupsTemp[i]);
                    }
                }
                optanonWrapperHtmlExecutedGroupsTemp &#61; [];
            }
        }
    }

    function jsonAddAboutCookies(json) {
        json.Groups.unshift(
            { &#39;GroupLanguagePropertiesSets&#39;: [{ &#39;GroupName&#39;: { &#39;Text&#39;: optanonAboutCookiesGroupName }, &#39;GroupDescription&#39;: { &#39;Text&#39;: json.MainInfoText } }] }
        );
    }

    /* JS Helper functions start*/
    function empty(id) {
        var elem &#61; document.getElementById(id);

        if (elem) {
            while (elem.hasChildNodes()) {
                elem.removeChild(elem.lastChild);
            }
        }
    }

    function show(id) {
        var elem &#61; document.getElementById(id);

        if (elem) {
            elem.style.display &#61; &#39;block&#39;;
        }
    }

    function remove(id) {
        var elem &#61; document.getElementById(id);

        if (elem) {
            elem.parentNode.removeChild(elem);
        }
    }

    function appendTo(id, element) {
        var elem &#61; document.getElementById(id),
            div;

        if (elem) {
            div &#61; document.createElement(&#39;div&#39;);
            div.innerHTML &#61; element;
            elem.appendChild(div);
        }
    }

    function contains(array, item) {
        var i;

        for (i &#61; 0; i &lt; array.length; i &#43;&#61; 1) {
            if (array[i].toString().toLowerCase() &#61;&#61; item.toString().toLowerCase()) {
                return true;
            }
        }
        return false;
    }

    function indexOf(array, item) {
        var i;

        for (i &#61; 0; i &lt; array.length; i &#43;&#61; 1) {
            if (array[i] &#61;&#61; item) {
                return i;
            }
        }
        return -1;
    }

    function endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !&#61; -1;
    }

    function param(obj) {
        var str &#61; &#39;&#39;,
            key;

        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (str !&#61; &#39;&#39;) {
                    str &#43;&#61; &#39;&amp;&#39;;
                }
                str &#43;&#61; key &#43; &#39;&#61;&#39; &#43; encodeURIComponent(obj[key]).replace(/%20/g, &#39;&#43;&#39;);
            }
        }
        return str;
    }

    function generateUUID() {
        var d &#61; new Date().getTime();
        if (typeof performance !&#61;&#61; &#39;undefined&#39; &amp;&amp; typeof performance.now &#61;&#61;&#61; &#39;function&#39;) {
            d &#43;&#61; performance.now(); //use high-precision timer if available
        }
        return &#39;xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx&#39;.replace(/[xy]/g, function (c) {
            var r &#61; (d &#43; Math.random() * 16) % 16 | 0;
            d &#61; Math.floor(d / 16);
            return (c &#61;&#61;&#61; &#39;x&#39; ? r : (r &amp; 0x3 | 0x8)).toString(16);
        });
    }

    function convertIABVendorPurposeArrayToObject(IabData) {
        var result &#61; {};
        IabData.map(function (item) {
            var data &#61; item.split(&#39;:&#39;);
            result[parseInt(data[0])] &#61; data[1] &#61;&#61;&#61; &#34;true&#34;;
        });
        return result;
    }

    function getActiveIdArray(arrayData) {
        return arrayData.filter(function (item) {
            return item.split(&#39;:&#39;)[1] &#61;&#61;&#61; &#34;true&#34;;
        }).map(function (item1) {
            return parseInt(item1.split(&#34;:&#34;)[0]);
        });
    }

    function distinctArray(arrayData) {
        var result &#61; [];
        arrayData.forEach(function (item) {
            if (result.indexOf(item) &lt; 0) {
                result.push(item);
            }
        });
        return result;
    }


    function getIdArray(keyValueArray) {
        return keyValueArray.map(function (item) {
            return parseInt(item.split(&#34;:&#34;)[0]);
        });
    }

    /* JS Helper functions end*/

    function setAllowAllButton() {
        var deactiveCount &#61; 0,
            group,
            json &#61; optanonData(),
            i;

        for (i &#61; 0; i &lt; json.Groups.length; i &#43;&#61; 1) {
            group &#61; json.Groups[i];
            if (isValidConsentNoticeGroup(group)) {
                if (contains(optanonHtmlGroupData, (getGroupIdForCookie(group) &#43; &#39;:0&#39;))) {
                    deactiveCount &#43;&#61; 1;
                    if (deactiveCount &gt;&#61; 1) {
                        $Opt(&#39;#optanon .optanon-allow-all-button&#39;).show();
                        return true;
                    }
                }
            }
        }
        $Opt(&#39;#optanon .optanon-allow-all-button&#39;).hide();
        return false;
    }

    //Closing Optanon alert box with predefined class &#61; optanon-alert-box-wrapper
    function closeOptanonAlertBox(setOptanonAlertBoxCookie, isOptanonAlertBoxCookiePersistent) {
        $Opt(&#39;.optanon-alert-box-wrapper&#39;).fadeOut(400);
        $Opt(&#39;#optanon-vendor-consent-back&#39;).click();
        if (setOptanonAlertBoxCookie &amp;&amp; (optanonIsOptInMode || (!optanonIsOptInMode &amp;&amp; !Optanon.IsAlertBoxClosedAndValid()))) {
            Optanon.SetAlertBoxClosed(isOptanonAlertBoxCookiePersistent);
        }
    }

    function isValidConsentNoticeGroup(group) {
        //does current group have visible sub groups with cookies or is a subgroup with cookies
        var group2,
            json &#61; optanonData(),
            hasValidSubGroupsWithCookies &#61; false,
            isIABData &#61; false,
            i;
        var isMainGroupCookieNotEmpty &#61; (group.Cookies !&#61; null &amp;&amp; group.Cookies.length &gt; 0);
        if (isTopLevelGroup(group)) {
            isIABData &#61; (group.Purposes &amp;&amp; group.Purposes.length &gt; 0) &amp;&amp; json.IsIABEnabled;
            for (i &#61; 0; i &lt; json.Groups.length; i &#43;&#61; 1) {
                group2 &#61; json.Groups[i];
                var isSubGroupCookieNotEmpty &#61; (group2.Cookies !&#61; null &amp;&amp; group2.Cookies.length &gt; 0);
                if (group2.Parent !&#61; null &amp;&amp; safeGroupName(group) &amp;&amp; safeGroupName(group2.Parent) &#61;&#61; safeGroupName(group) &amp;&amp;
                    group2.ShowInPopup &amp;&amp; isSubGroupCookieNotEmpty) {
                    hasValidSubGroupsWithCookies &#61; true;
                    break;
                }
            }
            return group.ShowInPopup &amp;&amp; (isMainGroupCookieNotEmpty || hasValidSubGroupsWithCookies || isIABData);
        }
        return group.ShowInPopup &amp;&amp; isMainGroupCookieNotEmpty;
    }

    function isTopLevelGroup(group) {
        return group &amp;&amp; group.Parent &#61;&#61; null;
    }

    function getGroupSubGroups(group) {
        var group2,
            json &#61; optanonData(),
            subGroups &#61; [],
            i;

        for (i &#61; 0; i &lt; json.Groups.length; i &#43;&#61; 1) {
            group2 &#61; json.Groups[i];
            var isSubGroupCookieNotEmpty &#61; (group2.Cookies !&#61; null &amp;&amp; group2.Cookies.length &gt; 0);
            if (group2.Parent !&#61; null &amp;&amp; safeGroupName(group2.Parent) &#61;&#61; safeGroupName(group) &amp;&amp;
                group2.ShowInPopup &amp;&amp; isSubGroupCookieNotEmpty) {
                subGroups.push(group2);
            }
        }

        return subGroups;
    }

    function optanonData() {
        if (!optanonJsonData) {
            var json &#61; [[OptanonDataJSON]];
            //BEHAVIOUR(CenterTile &#61;&#61; true)
            json.ForceConsent &#61; true;
            //BEHAVIOUR_END
            optanonJsonData &#61; json;
            if (optanonJsonData.Groups instanceof Array) {
                optanonJsonData.Groups.forEach(function (group) {
                    if (typeof group.CustomGroupId &#61;&#61; &#34;string&#34;) {
                        group.CustomGroupId &#61; group.CustomGroupId.toLowerCase();
                    }
                    if (group.Parent &amp;&amp; typeof group.Parent.CustomGroupId &#61;&#61; &#34;string&#34;) {
                        group.Parent.CustomGroupId &#61; group.Parent.CustomGroupId.toLowerCase();
                    }
                })
            }
            return optanonJsonData;
        }
        else {
            return optanonJsonData;
        }
    }

    //BEHAVIOUR(IsConsentIntegration &#61;&#61; true)
    function populateConsentData() {
        var consentData &#61; {};
        consentData.consentPayload &#61; [[consentPayload]];
        consentData.consentApi &#61; &#34;[[consentApi]]&#34;;
        return consentData;
    }
    //BEHAVIOUR_END

    //BEHAVIOUR(IsIABEnabled &#61;&#61; true)
    function IABData() {
        if (!otIABData) {
            var json &#61; [[IABDataJSON]];
            otIABData &#61; json;
        }
        return otIABData;
    }
    //BEHAVIOUR_END

    this.useGeoLocationService &#61; useGeoLocationService;

    this.LoadBanner &#61; function () {
        $Opt(window).trigger(&#34;otloadbanner&#34;);
    };

    this.Init &#61; function () {

        initObjectAssignPolyfill();

        initArrayFillPolyfill();

        updateScriptAndCssUrl();
        setOrUpdate3rdPartyIABConsentFlag();
        //Populates optanonHtmlGroupData from cookie or default statuses
        ensureHtmlGroupDataInitialised();

        // CustomEvent polyfill
        // https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
        (function () {
            if (typeof window.CustomEvent &#61;&#61;&#61; &#34;function&#34;) return false; //If CustomEvent supported return
            function CustomEvent(event, params) {
                params &#61; params || { bubbles: false, cancelable: false, detail: undefined };
                var evt &#61; document.createEvent(&#39;CustomEvent&#39;);
                evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                return evt;
            }
            CustomEvent.prototype &#61; window.Event.prototype;
            window.CustomEvent &#61; CustomEvent;
        })();

        //Populates Google Tag Manager macro global Optanon variable
        updateGtmMacros(false);

        //Inserts reguired css references
        initialiseCssReferences();

        //Save landing page url
        initialiseLandingPath();

        
            //Inserts required jquery reference
            injectJquery();
        

        
        //BEHAVIOUR(IsIABEnabled &#61;&#61; true)
        if (!isIABCrossConsentEnabled()) {
            window.__cmp.proccessQueue();
        }
        //BEHAVIOUR_END
    };

    function updateScriptAndCssUrl() {
        var json &#61; optanonData();
        var scripts &#61; document.getElementsByTagName(&#39;script&#39;);
        for (var i &#61; 0; i &lt; scripts.length; &#43;&#43;i) {
            if (isOptanonFile(scripts[i], json.cctId)) {
                var OptanonScript &#61; scripts[i].src;
                if (scripts[i].hasAttribute(constant.IGNOREGA)) {
                    ignoreGoogleAnlyticsCall &#61; scripts[i].getAttribute(constant.IGNOREGA) &#61;&#61; &#39;true&#39;;
                }
                onetrustClientScriptUrl &#61; getURL(OptanonScript);
                break;
            }
        }
    }

    function updateCorrectUrl(sourceUrl) {
        var sourceUrI &#61; getURL(sourceUrl);
        if (onetrustClientScriptUrl &amp;&amp; sourceUrI &amp;&amp; onetrustClientScriptUrl.hostname !&#61;&#61; sourceUrI.hostname) {
            sourceUrl &#61; sourceUrl.replace(sourceUrI.hostname, onetrustClientScriptUrl.hostname);
        }
        return sourceUrl;
    }

    function isOptanonFile(scriptElem, filePathPart) {
        if (scriptElem.getAttribute(&#39;src&#39;)) {
            return scriptElem.getAttribute(&#39;src&#39;).indexOf(filePathPart) !&#61;&#61; -1;
        }
        return false;
    }

    function getURL(href) {
        var l &#61; document.createElement(&#34;a&#34;);
        l.href &#61; href;
        return l;
    };


    // Inserts a script tag into page at specified location //
    // url: script tag reference url
    // selector: container element of script tag (possible values: &#39;head&#39;, &#39;body&#39;, &#39;&#39;)
    // callback: callback method after script tag has been inserted
    // options: contains behaviors once the script is inserted
    //      options.deleteSelectorContent (boolean): set to true to delete all selector content before inserting script
    //      options.makeSelectorVisible (boolean): set to true to show selector after inserting script
    //      options.makeElementsVisible (array[string]): set the id&#39;s of arbitrary elements to show after inserting script
    //      options.deleteElements (array[string]): set the id&#39;s of arbitrary elements to delete after inserting script
    // groupId: if implied consent, the Optanon Group Id for which the script tag should be inserted
    this.InsertScript &#61; function (url, selector, callback, options, groupId, async) {
        var validOptions &#61; options !&#61; null &amp;&amp; typeof options !&#61; &#39;undefined&#39;,
            ignoreGroupCheck &#61; ((validOptions &amp;&amp; typeof options.ignoreGroupCheck !&#61; &#39;undefined&#39; &amp;&amp; options.ignoreGroupCheck &#61;&#61; true) || optanonGeolocationExecuteAllScripts),
            i,
            j,
            script,
            done;

        if (canInsertForGroup(groupId, ignoreGroupCheck) &amp;&amp; !contains(optanonWrapperScriptExecutedGroups, groupId)) {
            //Delay adding group to optanonWrapperScriptExecutedGroups
            optanonWrapperScriptExecutedGroupsTemp.push(groupId);

            if (validOptions &amp;&amp; typeof options.deleteSelectorContent !&#61; &#39;undefined&#39; &amp;&amp; options.deleteSelectorContent &#61;&#61; true) {
                empty(selector);
            }

            script &#61; document.createElement(&#39;script&#39;);

            if (callback !&#61; null &amp;&amp; typeof callback !&#61; &#39;undefined&#39;) {
                done &#61; false;
                script.onload &#61; script.onreadystatechange &#61; function () {
                    if (!done &amp;&amp; (!this.readyState || this.readyState &#61;&#61; &#39;loaded&#39; || this.readyState &#61;&#61; &#39;complete&#39;)) {
                        done &#61; true;
                        callback();
                    }
                };
            }

            script.type &#61; &#39;text/javascript&#39;;
            script.src &#61; url;
            if (async) {
                script.async &#61; async;
            }

            switch (selector) {
                case &#39;head&#39;:
                    document.getElementsByTagName(&#39;head&#39;)[0].appendChild(script);
                    break;
                case &#39;body&#39;:
                    document.getElementsByTagName(&#39;body&#39;)[0].appendChild(script);
                    break;
                default:
                    if (document.getElementById(selector)) {
                        document.getElementById(selector).appendChild(script);
                        if (validOptions &amp;&amp; typeof options.makeSelectorVisible !&#61; &#39;undefined&#39; &amp;&amp; options.makeSelectorVisible &#61;&#61; true) {
                            show(selector);
                        }
                    }
                    break;
            }

            if (validOptions &amp;&amp; typeof options.makeElementsVisible !&#61; &#39;undefined&#39;) {
                for (i &#61; 0; i &lt; options.makeElementsVisible.length; i &#43;&#61; 1) {
                    show(options.makeElementsVisible[i]);
                }
            }

            if (validOptions &amp;&amp; typeof options.deleteElements !&#61; &#39;undefined&#39;) {
                for (j &#61; 0; j &lt; options.deleteElements.length; j &#43;&#61; 1) {
                    remove(options.deleteElements[j]);
                }
            }
        }
    };

    // Inserts an arbitrary html tag into page at specified location //
    // element: html element
    // selector: container element of html element (possible values: &#39;&#39;)
    // callback: callback method after html element has been inserted
    // options: contains behaviors once the html is inserted
    //      options.deleteSelectorContent (boolean): set to true to delete all selector content before inserting html
    //      options.makeSelectorVisible (boolean): set to true to show selector after inserting html
    //      options.makeElementsVisible (array[string]): set the id&#39;s of arbitrary elements to show after inserting html
    //      options.deleteElements (array[string]): set the id&#39;s of arbitrary elements to delete after inserting html
    // groupId: if implied consent, the Optanon Group Id for which the html element should be inserted
    this.InsertHtml &#61; function (element, selector, callback, options, groupId) {
        var validOptions &#61; options !&#61; null &amp;&amp; typeof options !&#61; &#39;undefined&#39;,
            ignoreGroupCheck &#61; ((validOptions &amp;&amp; typeof options.ignoreGroupCheck !&#61; &#39;undefined&#39; &amp;&amp; options.ignoreGroupCheck &#61;&#61; true) || optanonGeolocationExecuteAllScripts),
            i,
            j;

        if (canInsertForGroup(groupId, ignoreGroupCheck) &amp;&amp; !contains(optanonWrapperHtmlExecutedGroups, groupId)) {
            //Delay adding group to optanonWrapperHtmlExecutedGroups
            optanonWrapperHtmlExecutedGroupsTemp.push(groupId);

            if (validOptions &amp;&amp; typeof options.deleteSelectorContent !&#61; &#39;undefined&#39; &amp;&amp; options.deleteSelectorContent &#61;&#61; true) {
                empty(selector);
            }

            appendTo(selector, element);

            if (validOptions &amp;&amp; typeof options.makeSelectorVisible !&#61; &#39;undefined&#39; &amp;&amp; options.makeSelectorVisible &#61;&#61; true) {
                show(selector);
            }

            if (validOptions &amp;&amp; typeof options.makeElementsVisible !&#61; &#39;undefined&#39;) {
                for (i &#61; 0; i &lt; options.makeElementsVisible.length; i &#43;&#61; 1) {
                    show(options.makeElementsVisible[i]);
                }
            }

            if (validOptions &amp;&amp; typeof options.deleteElements !&#61; &#39;undefined&#39;) {
                for (j &#61; 0; j &lt; options.deleteElements.length; j &#43;&#61; 1) {
                    remove(options.deleteElements[j]);
                }
            }

            if (callback !&#61; null &amp;&amp; typeof callback !&#61; &#39;undefined&#39;) {
                callback();
            }
        }
    };

    // Close consent notice and writes cookie
    this.Close &#61; function (closeFromCookie) {
        // Update Toggled On Group
        var json &#61; optanonData();

        // Implied Consent
        if (!closeFromCookie &amp;&amp; isImpliedConsent()) {
            if (isCenterTile) {
                Array.prototype.forEach.call(document.querySelectorAll(&#39;.optanon-popup-body-content&#39;), function (domEl, idx) {
                    if ($Opt(domEl).data(&#39;group&#39;) &amp;&amp; domEl.querySelector(&#39;input&#39;)) {
                        var group &#61; $Opt(domEl).data(&#39;group&#39;),
                            groupName &#61; safeGroupName(group);

                        if (domEl.querySelector(&#39;input&#39;).checked) {

                            //Google Analytics event tracking
                            Optanon.TriggerGoogleAnalyticsEvent(&#39;OneTrust Cookie Consent&#39;, &#39;Preferences Toggle On&#39;, groupName);

                            //updating optanonHtmlGroupData with new group status
                            var index &#61; indexOf(optanonHtmlGroupData, getGroupIdForCookie(group) &#43; &#39;:0&#39;);
                            if (index !&#61; -1) {
                                optanonHtmlGroupData[index] &#61; getGroupIdForCookie(group) &#43; &#39;:1&#39;;

                                if (json.IsIABEnabled) {
                                    setIABConsent(group, &#34;true&#34;, true);
                                }
                            }
                        } else {

                            //Google Analytics event tracking
                            Optanon.TriggerGoogleAnalyticsEvent(&#39;OneTrust Cookie Consent&#39;, &#39;Preferences Toggle Off&#39;, groupName);

                            //updating optanonHtmlGroupData with new group status
                            var index &#61; indexOf(optanonHtmlGroupData, getGroupIdForCookie(group) &#43; &#39;:1&#39;);
                            if (index !&#61; -1) {
                                optanonHtmlGroupData[index] &#61; getGroupIdForCookie(group) &#43; &#39;:0&#39;;

                                if (json.IsIABEnabled) {
                                    setIABConsent(group, &#34;false&#34;, false);
                                }
                            }

                        }
                    }
                });
            }
        }

        hideConsentNotice();
        updateConsentData(closeFromCookie);
        //BEHAVIOUR(IsConsentIntegration &#61;&#61; true)
        createConsentTransaction();
        //BEHAVIOUR_END
        executeOptanonWrapper();
    };

    function updateConsentData(closeFromCookie) {
        setLandingPathParam(optanonNotLandingPageName);
        //BEHAVIOUR(IsIABEnabled &#61;&#61; true)
        assignIABConsentFromHtmlGroupData(optanonHtmlGroupData);
        if (!closeFromCookie) {
            saveVendorStatus();
        }
        //BEHAVIOUR_END
        writeCookieGroupsParam(optanonCookieName);
        substitutePlainTextScriptTags();
        updateGtmMacros(false);
    }

    // Close consent notice, writes cookies and executes wrapper function
    this.AllowAll &#61; function (consentIgnoreForGeoLookup) {
        var group,
            json &#61; optanonData(),
            i;

        //set landing page 1st
        setLandingPathParam(optanonNotLandingPageName);
        optanonHtmlGroupData &#61; [];
        for (i &#61; 0; i &lt; json.Groups.length; i &#43;&#61; 1) {
            group &#61; json.Groups[i];
            if (isValidConsentNoticeGroup(group)) {
                optanonHtmlGroupData.push(getGroupIdForCookie(group) &#43; &#39;:1&#39;);
            }
        }
        //BEHAVIOUR(IsIABEnabled &#61;&#61; true)
        oneTrustIABConsent.purpose &#61; [];
        assignIABConsentFromHtmlGroupData(optanonHtmlGroupData);

        setIABVendor();
        setVendorStatus();
        //BEHAVIOUR_END


        $Opt(&#39;#optanon #optanon-menu li&#39;).removeClass(&#39;menu-item-off&#39;);
        $Opt(&#39;#optanon #optanon-menu li&#39;).addClass(&#39;menu-item-on&#39;);

        hideConsentNotice();
        writeCookieGroupsParam(optanonCookieName);
        substitutePlainTextScriptTags();
        updateGtmMacros(true);
        //BEHAVIOUR(IsConsentIntegration &#61;&#61; true)
        if (!consentIgnoreForGeoLookup) {
            createConsentTransaction();
        }
        //BEHAVIOUR_END
        executeOptanonWrapper();
    };

    // Toggles consent notice visible state
    this.ToggleInfoDisplay &#61; function () {
        var json &#61; optanonData();

        if (json.ForceConsent) {
            if (!isCookiePolicyPage(json.AlertNoticeText)) {
                $Opt(&#34;#optanon-popup-bg&#34;).css({ &#39;z-index&#39;: &#39;2147483645&#39; });
            }
        }
        if ($Opt(&#39;#optanon #optanon-popup-bg, #optanon #optanon-popup-wrapper&#39;).is(&#39;:hidden&#39;)) {
            showConsentNotice();

            if (!isCenterTile) {
                var venderConsentLink &#61; document.querySelector(&#39;#optanon-vendor-consent-text&#39;),
                    popUpHeader &#61; document.querySelector(&#39;#optanon-popup-top&#39;).children,
                    popUpBottom &#61; document.querySelector(&#39;#optanon-popup-bottom&#39;).children,
                    sideNav &#61; document.querySelector(&#39;#optanon-menu&#39;).children,
                    closeLink &#61; document.querySelector(&#39;.optanon-close-ui&#39;),
                    optanon &#61; document.querySelector(&#39;#optanon&#39;),
                    headerItems &#61; [],
                    footerItems &#61; [];

                for (var i &#61; 0; i &lt; popUpHeader.length; i&#43;&#43;) {
                    if (popUpHeader[i].style.display !&#61;&#61; &#39;none&#39;) {
                        headerItems.push(popUpHeader[i]);
                    }
                }
                for (var i &#61; 0; i &lt; popUpBottom.length; i&#43;&#43;) {
                    if (popUpBottom[i].style.display !&#61;&#61; &#39;none&#39;) {
                        footerItems.push(popUpBottom[i]);
                    }
                }

                if (headerItems.length &gt; 0) {
                    popUpHeader[0].addEventListener(&#39;keydown&#39;, popUpHeaderHandler);
                } else {
                    sideNav[0].addEventListener(&#39;keydown&#39;, popUpHeaderHandler);
                }
                if (footerItems.length &gt; 0) {
                    var allowAllBtn &#61; document.querySelector(&#39;.optanon-button-wrapper.optanon-allow-all-button.optanon-allow-all&#39;);
                    if (allowAllBtn.style.display &#61;&#61;&#61; &#39;block&#39;) {
                        footerItems[footerItems.length - 1].addEventListener(&#39;keydown&#39;, footerItemsHandler);
                    } else {
                        footerItems[footerItems.length - 2].addEventListener(&#39;keydown&#39;, footerItemsHandler);
                    }
                }

                sideNav[sideNav.length - 1].addEventListener(&#39;keydown&#39;, sideNavHandler);
                optanon.addEventListener(&#39;keyup&#39;, optanonHandler);
                if (venderConsentLink) venderConsentLink.addEventListener(&#39;keyup&#39;, venderConsentHandler);

                if (closeLink) {
                    closeLink.addEventListener(&#39;keydown&#39;, closeLinkHandler);
                }
            }
        } else {
            hideConsentNotice();
            writeCookieGroupsParam(optanonCookieName);
            substitutePlainTextScriptTags();
            updateGtmMacros(false);
            executeOptanonWrapper();
        }
    };

    function venderConsentHandler(event) {
        var popUpWrapper &#61; document.querySelector(&#39;#optanon-popup-wrapper&#39;);
        if (event.keyCode &#61;&#61;&#61; 13) {
            popUpWrapper.focus();
        }
    }

    function optanonHandler(event) {
        var cookieSettingsBtn &#61; document.querySelector(&#39;.optanon-toggle-display.cookie-settings-button&#39;);
        if (event.keyCode &#61;&#61;&#61; 27) {
            cookieSettingsBtn.focus();
            closeLinkHandler(event);
        }
    }

    function closeLinkHandler(event) {
        var closeLink &#61; document.querySelector(&#39;.optanon-close-ui&#39;),
            popUpHeader &#61; document.querySelector(&#39;#optanon-popup-top&#39;).children[0],
            popUpBottom &#61; document.querySelector(&#39;#optanon-popup-bottom&#39;).children,
            sideNav &#61; document.querySelector(&#39;#optanon-menu&#39;).children,
            venderConsentLink &#61; document.querySelector(&#39;#optanon-vendor-consent-text&#39;),
            optanon &#61; document.querySelector(&#39;#optanon&#39;);

        if (event.keyCode &#61;&#61;&#61; 13 || event.keyCode &#61;&#61;&#61; 27) {
            if (event.keyCode &#61;&#61;&#61; 27) {
                hideConsentNotice(constant.KEEPCENTERTILEBANNEROPEN);
            } else {
                hideConsentNotice();
            }
            document.querySelector(&#39;.optanon-toggle-display.cookie-settings-button&#39;).focus();

            if (popUpHeader) {
                popUpHeader.removeEventListener(&#39;keydown&#39;, popUpHeaderHandler);
            } else {
                sideNav[0].removeEventListener(&#39;keydown&#39;, popUpHeaderHandler);
            }
            if (popUpBottom.length &gt; 0) {
                var allowAllBtn &#61; document.querySelector(&#39;.optanon-button-wrapper.optanon-allow-all-button.optanon-allow-all&#39;);
                if (allowAllBtn.style.display &#61;&#61;&#61; &#39;block&#39;) {
                    popUpBottom[popUpBottom.length - 1].removeEventListener(&#39;keydown&#39;, footerItemsHandler);
                } else {
                    popUpBottom[popUpBottom.length - 2].removeEventListener(&#39;keydown&#39;, footerItemsHandler);
                }
            }

            sideNav[sideNav.length - 1].removeEventListener(&#39;keydown&#39;, sideNavHandler);
            optanon.removeEventListener(&#39;keyup&#39;, venderConsentHandler);

            if (venderConsentLink) {
                venderConsentLink.removeEventListener(&#39;keyup&#39;, venderConsentHandler);
            }

            if (closeLink) {
                closeLink.removeEventListener(&#39;keydown&#39;, closeLinkHandler);
            }
        }
    }

    function sideNavHandler(event) {
        if (event.keyCode &#61;&#61;&#61; 9 &amp;&amp; !event.shiftKey) {
            document.querySelector(&#39;.optanon-white-button-middle &gt; button&#39;).removeAttribute(&#39;tabindex&#39;);
            document.querySelector(&#39;.optanon-allow-all &gt; .optanon-white-button-middle &gt; button&#39;).removeAttribute(&#39;tabindex&#39;);
        }
    }

    function footerItemsHandler(event) {
        var popUpWrapper &#61; document.querySelector(&#39;#optanon-popup-wrapper&#39;),
            allowAllBtn &#61; allowAllBtn &#61; document.querySelector(&#39;.optanon-allow-all &gt; .optanon-white-button-middle &gt; button&#39;);
        if (event.keyCode &#61;&#61;&#61; 9) {
            popUpWrapper.focus();
        }
        if (event.keyCode &#61;&#61;&#61; 9 &amp;&amp; !event.shiftKey) {
            document.querySelector(&#39;.optanon-white-button-middle &gt; button&#39;).removeAttribute(&#39;tabindex&#39;);
            allowAllBtn.removeAttribute(&#39;tabindex&#39;);
        }
        if (event.keyCode &#61;&#61;&#61; 9 &amp;&amp; event.shiftKey) {
            document.querySelector(&#39;#optanon-popup-bottom &gt; a&#39;).focus();
        }
    }

    function popUpHeaderHandler(event) {
        var allowAllBtn &#61; document.querySelector(&#39;.optanon-allow-all &gt; .optanon-white-button-middle &gt; button&#39;),
            saveSettingsBtn &#61; document.querySelector(&#39;.optanon-white-button-middle &gt; button&#39;);

        if (event.keyCode &#61;&#61;&#61; 9 &amp;&amp; event.shiftKey) {
            saveSettingsBtn.setAttribute(&#39;tabindex&#39;, 5);
            allowAllBtn.setAttribute(&#39;tabindex&#39;, 4);
        }
        if (event.keyCode &#61;&#61;&#61; 9 &amp;&amp; !event.shiftKey) {
            saveSettingsBtn.removeAttribute(&#39;tabindex&#39;);
            allowAllBtn.removeAttribute(&#39;tabindex&#39;);
        }
    }

    // Selectively blocks Google Analytics tracking functionality when consent has not been given
    this.BlockGoogleAnalytics &#61; function (gaId, groupId) {
        window[&#39;ga-disable-&#39; &#43; gaId] &#61; !canInsertForGroup(groupId);
    };

    // Optanon UI Google Analytics event tracking
    this.TriggerGoogleAnalyticsEvent &#61; function (category, action, label, value) {
        if (!ignoreGoogleAnlyticsCall) {
            //Google Analytics (w/o Google Tag Manager)
            if (typeof _gaq !&#61; &#39;undefined&#39;) {
                _gaq.push([&#39;_trackEvent&#39;, category, action, label, value]);
            }
            //Universal Analytics (w/o Google Tag Manager)
            if (typeof ga !&#61; &#39;undefined&#39;) {
                ga(&#39;send&#39;, &#39;event&#39;, category, action, label, value);
            }
        }
        //Google Tag Manager
        if (typeof dataLayer !&#61; &#39;undefined&#39; &amp;&amp; dataLayer.constructor &#61;&#61;&#61; Array) {
            dataLayer.push({ &#39;event&#39;: &#39;trackOptanonEvent&#39;, &#39;optanonCategory&#39;: category, &#39;optanonAction&#39;: action, &#39;optanonLabel&#39;: label, &#39;optanonValue&#39;: value });
        }
    };

    // Returns if alert box has been closed by checking if setOptanonAlertBoxCookie exists
    this.IsAlertBoxClosedAndValid &#61; function () {
        var json &#61; optanonData(),
            cookie &#61; getCookie(optanonAlertBoxClosedCookieName),
            reconsentDate &#61; json.LastReconsentDate;

        if (cookie &#61;&#61;&#61; null) return false;
        if (!reconsentDate) return true;

        var needsReconsent &#61; new Date(reconsentDate) &gt; new Date(cookie);
        if (needsReconsent) {
            Optanon.ReconsentGroups();
        }

        return !needsReconsent;
    };

    // Alias for old function name
    this.IsAlertBoxClosed &#61; this.IsAlertBoxClosedAndValid;

    // if Re-consent is needed, update groups according to their default status
    this.ReconsentGroups &#61; function () {
        var toUpdateCookie &#61; false,
            cookieGroupData &#61; deserialiseStringToArray(readCookieParam(optanonCookieName, &#39;groups&#39;)),
            cookieGroupDataStripped &#61; deserialiseStringToArray(readCookieParam(optanonCookieName, &#39;groups&#39;).replace(/:0/g, &#39;&#39;).replace(/:1/g, &#39;&#39;)),
            json &#61; optanonData();

        if (readCookieParam(optanonCookieName, &#39;groups&#39;)) {
            for (var i &#61; 0; i &lt; json.Groups.length; i &#43;&#61; 1) {
                var group &#61; json.Groups[i];
                if (!isValidConsentNoticeGroup(group)) continue;
                //Group should show in popup
                var index &#61; indexOf(cookieGroupDataStripped, getGroupIdForCookie(group));
                if (index &#61;&#61; -1) continue;

                var statusText &#61; safeGroupDefaultStatus(group).toLowerCase();
                var reconsentStatuses &#61; [&#34;inactive&#34;, &#34;inactive landingpage&#34;, &#34;do not track&#34;];
                if (reconsentStatuses.indexOf(statusText) &gt; -1) {
                    toUpdateCookie &#61; true;
                    var groupValue &#61; statusText &#61;&#61;&#61; &#34;inactive landingpage&#34; ? &#39;:1&#39; : &#39;:0&#39;;
                    cookieGroupData[index] &#61; getGroupIdForCookie(group) &#43; groupValue;
                }
            }

            //Writing updated cookie
            if (toUpdateCookie) {
                writeCookieGroupsParam(optanonCookieName, cookieGroupData);
            }
        }
    };

    // Sets setOptanonAlertBoxCookie cookie indicating alert box has been closed
    this.SetAlertBoxClosed &#61; function (isOptanonAlertBoxCookiePersistent) {
        var consentDate &#61; new Date().toISOString();
        if (isOptanonAlertBoxCookiePersistent) {
            setCookie(optanonAlertBoxClosedCookieName, consentDate, 365);
        } else {
            setCookie(optanonAlertBoxClosedCookieName, consentDate);
        }
        //BEHAVIOUR(BannerPushesDown &#61;&#61; true)
        if (checkBrowserSupportPushPageUp()) {
            pushPageUp();
        }
        //BEHAVIOUR_END
    };

    // Client facing wrapper around optanonData, returns groups, cookies and other domain data
    this.GetDomainData &#61; function () {
        var domainData &#61; optanonData();
        return domainData;
    };

    // Add listener to be called when consent is available
    this.OnConsentChanged &#61; function (f) {
        var key &#61; f.toString();
        if (!consentChangedEventMap[key]) {
            consentChangedEventMap[key] &#61; true;
            window.addEventListener(&#34;consent.onetrust&#34;, f);
        }
    }

    //BEHAVIOUR(IsIABEnabled &#61;&#61; true)
    this.getPingRequest &#61; function (callback) {
        if (callback) {
            var domainJson &#61; optanonData();
            if (domainJson.IsIABEnabled) {
                var pingData &#61; {
                    gdprAppliesGlobally: oneTrustIABgdprAppliesGlobally,
                    cmpLoaded: oneTrustIABConsent.vendorList &amp;&amp; !(oneTrustIABgdprAppliesGlobally &#61;&#61; null)
                };
                callback(pingData, true);
            } else {
                callback({}, false);
            }
        }
    }

    this.getVendorConsentsRequest &#61; function (callback, param) {
        if (callback) {
            var domainJson &#61; optanonData();
            if (domainJson.IsIABEnabled) {
                var IABJsonData &#61; IABData();
                var vendorsArray &#61; distinctArray(oneTrustIABConsent.vendors);
                if (param &amp;&amp; Array.isArray(param)) {
                    vendorsArray &#61; getFilteredVenderList(vendorsArray, param);
                }

                if (IABJsonData) {
                    var consentData &#61; new consentString.ConsentString(IABCookieValue);
                    var venderConsentData &#61; {
                        metadata: IABCookieValue || getIABConsentData(),
                        gdprApplies: oneTrustIABgdprAppliesGlobally,
                        hasGlobalScope: isIABCrossConsentEnabled(),
                        created: consentData.created || IABJsonData.createdTime,
                        lastUpdated: consentData.lastUpdated || IABJsonData.updatedTime,
                        cmpId: consentData.getCmpId() || IABJsonData.cmpId,
                        cmpVersion: consentData.getCmpVersion() || IABJsonData.cmpVersion,
                        consentLanguage: consentData.getConsentLanguage() || IABJsonData.consentLanguage,
                        consentScreen: consentData.getConsentScreen() || IABJsonData.consentScreen,
                        vendorListVersion: consentData.getVendorListVersion() || IABJsonData.vendorListVersion,
                        maxVendorId: IABJsonData.maxVendorId,
                        purposeConsents: Optanon.IsAlertBoxClosedAndValid()
                            ? convertIABVendorPurposeArrayToObject(oneTrustIABConsent.purpose)
                            : {},
                        vendorConsents: Optanon.IsAlertBoxClosedAndValid()
                            ? convertIABVendorPurposeArrayToObject(vendorsArray)
                            : {}
                    };

                    callback(venderConsentData, true);
                } else {
                    callback({}, false);
                }
            } else {
                callback({}, false);
            }
        }
    }

    function getFilteredVenderList(vendors, param) {
        vendors &#61; vendors.filter(function (vendor) {
            var res &#61; parseInt(vendor.split(&#34;:&#34;)[0]);
            return this.indexOf(res) &gt; -1;
        }, param);

        var vendorsWithNoConsent &#61; param.filter(function (vendor) {
            var res &#61; vendor &#43; &#34;:true&#34;;
            return this.indexOf(res) &lt;&#61; -1;
        }, vendors);
        vendorsWithNoConsent.forEach(function (vendor) {
            vendors.push(vendor &#43; &#34;:false&#34;);
        })
        return vendors;
    }

    this.getConsentDataRequest &#61; function (callback) {
        if (callback) {
            var domainJson &#61; optanonData();
            if (domainJson.IsIABEnabled) {
                var consentData &#61; {
                    gdprApplies: oneTrustIABgdprAppliesGlobally,
                    hasGlobalScope: isIABCrossConsentEnabled(),
                    consentData: IABCookieValue || getIABConsentData()
                };

                callback(consentData, true);
            } else {
                callback({}, false);
            }
        }
    }

    function getIABConsentData(allowedPurposes, allowedVendors) {
        var consentData;
        if (IABCookieValue &amp;&amp; !reconsentRequired()) {
            consentData &#61; new consentString.ConsentString(IABCookieValue);
        } else {
            var IABJsonData &#61; IABData();
            consentData &#61; new consentString.ConsentString();
            consentData.setCmpId(parseInt(IABJsonData.cmpId));
            consentData.setCmpVersion(parseInt(IABJsonData.cmpVersion));
            consentData.setConsentLanguage(IABJsonData.consentLanguage.toLocaleLowerCase());
            consentData.setConsentScreen(parseInt(IABJsonData.consentScreen));
        }
        consentData.setPurposesAllowed(
            Optanon.IsAlertBoxClosedAndValid()
                ? allowedPurposes || getActiveIdArray(oneTrustIABConsent.purpose)
                : []
        );
        consentData.setVendorsAllowed(
            Optanon.IsAlertBoxClosedAndValid()
                ? allowedVendors || getActiveIdArray(distinctArray(oneTrustIABConsent.vendors))
                : []);
        consentData.setGlobalVendorList(oneTrustIABConsent.vendorList || {});
        return consentData.getConsentString();

    }

    function initializeIABData() {
        IABCookieValue &#61; getCookie(oneTrustIABCookieName);
        if (IABCookieValue) {
            var consentData &#61; new consentString.ConsentString(IABCookieValue);
            if (consentData) {
                consentData.getPurposesAllowed().forEach(function (purpose) {
                    oneTrustIABConsent.purpose.push(purpose.toString() &#43; &#39;:true&#39;);
                });
                consentData.getVendorsAllowed().forEach(function (vendor) {
                    oneTrustIABConsent.vendors.push(vendor.toString() &#43; &#39;:true&#39;);
                });
            }
        }
        else {
            setIABVendor();
            assignIABConsentFromHtmlGroupData();
        }
        populateVendorList();
    }

    function assignIABGlobalScope(displayPopup) {
        if (displayPopup &#61;&#61; true || displayPopup &#61;&#61; &#39;true&#39;) {
            oneTrustIABgdprAppliesGlobally &#61; true;
        } else {
            oneTrustIABgdprAppliesGlobally &#61; false;
        }
    }

    //BEHAVIOUR_END

    //BEHAVIOUR(BannerPushesDown &#61;&#61; true)
    function checkBrowserSupportPushPageDown() {
        if (checkIsBrowserIE11OrBelow()) {
            //removed this logic as it is navigaating to all tags which create performance issue
            //return !checkPositionFixed(document.body.children);
            return false;
        }
        return true;
    }

    function checkBrowserSupportPushPageUp() {
        if (checkIsBrowserIE11OrBelow()) {
            return !isWebsiteContainFixedHeader;
        }
        return true;
    }

    function checkIsBrowserIE11OrBelow() {
        var ua &#61; window.navigator.userAgent;
        return (ua.indexOf(&#39;MSIE &#39;) &gt; 0 || ua.indexOf(&#39;Trident/&#39;) &gt; 0)
    }

    function checkPositionFixed(tags) {
        var i;
        for (i &#61; 0; i &lt; tags.length; i&#43;&#43;) {
            var currentElement &#61; tags[i];
            if ($Opt(currentElement).css(&#39;position&#39;) &#61;&#61; &#39;fixed&#39;) {
                if (tags[i].className.indexOf(&#39;optanon&#39;) &#61;&#61; -1 &amp;&amp;
                    tags[i].id.indexOf(&#39;optanon&#39;) &#61;&#61; -1) {
                    isWebsiteContainFixedHeader &#61; true;
                    break;
                }
            } else {
                var childElements &#61; currentElement.getElementsByTagName(&#34;*&#34;);
                if (childElements.length &gt; 0) {
                    checkPositionFixed(childElements);
                }
            }
        }
        return isWebsiteContainFixedHeader;
    }
    //BEHAVIOUR_END

    function isCookiePolicyPage(bannerText) {
        var isMatching &#61; false;
        var currentURL &#61; removeURLPrefixes(window.location.href);
        var el &#61; $Opt(&#39;&#39;);
        el.html(bannerText);
        var hrefElements &#61; $Opt(&#39;a&#39;, el)
        var i;
        for (i &#61; 0; i &lt; hrefElements.length; i&#43;&#43;) {
            if (removeURLPrefixes(hrefElements[i].href) &#61;&#61; currentURL) {
                isMatching &#61; true;
                break;
            }
        }
        return isMatching;
    }

    function removeURLPrefixes(url) {
        return url.toLowerCase().replace(/(^\w&#43;:|^)\/\//, &#39;&#39;).replace(&#39;www.&#39;, &#39;&#39;);
    }

    function initObjectAssignPolyfill() {
        if (typeof Object.assign !&#61; &#39;function&#39;) {
            // Must be writable: true, enumerable: false, configurable: true
            Object.defineProperty(Object, &#34;assign&#34;, {
                value: function assign(target, varArgs) { // .length of function is 2
                    &#39;use strict&#39;;
                    if (target &#61;&#61; null) { // TypeError if undefined or null
                        throw new TypeError(&#39;Cannot convert undefined or null to object&#39;);
                    }

                    var to &#61; Object(target);

                    for (var index &#61; 1; index &lt; arguments.length; index&#43;&#43;) {
                        var nextSource &#61; arguments[index];

                        if (nextSource !&#61; null) { // Skip over if undefined or null
                            for (var nextKey in nextSource) {
                                // Avoid bugs when hasOwnProperty is shadowed
                                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                                    to[nextKey] &#61; nextSource[nextKey];
                                }
                            }
                        }
                    }
                    return to;
                },
                writable: true,
                configurable: true
            });
        }
    }

    function initArrayFillPolyfill() {
        if (!Array.prototype.fill) {
            Object.defineProperty(Array.prototype, &#39;fill&#39;, {
                value: function (value) {

                    // Steps 1-2.
                    if (this &#61;&#61; null) {
                        throw new TypeError(&#39;this is null or not defined&#39;);
                    }

                    var O &#61; Object(this);

                    // Steps 3-5.
                    var len &#61; O.length &gt;&gt;&gt; 0;

                    // Steps 6-7.
                    var start &#61; arguments[1];
                    var relativeStart &#61; start &gt;&gt; 0;

                    // Step 8.
                    var k &#61; relativeStart &lt; 0 ?
                        Math.max(len &#43; relativeStart, 0) :
                        Math.min(relativeStart, len);

                    // Steps 9-10.
                    var end &#61; arguments[2];
                    var relativeEnd &#61; end &#61;&#61;&#61; undefined ?
                        len : end &gt;&gt; 0;

                    // Step 11.
                    var finalVal &#61; relativeEnd &lt; 0 ?
                        Math.max(len &#43; relativeEnd, 0) :
                        Math.min(relativeEnd, len);

                    // Step 12.
                    while (k &lt; finalVal) {
                        O[k] &#61; value;
                        k&#43;&#43;;
                    }

                    // Step 13.
                    return O;
                }
            });
        }
    }

    function setBannerTabIndex() {
        var bannerTabIndex &#61; 0;
        // policy link
        if ($Opt(&#39;.banner-content a&#39;).length) {
            $Opt(&#39;.banner-content a&#39;).each(function (index, element) {
                $Opt(element).addClass(&#39;banner-policy-link&#39;);
                $Opt(element).attr(&#39;tabindex&#39;, &#43;&#43;bannerTabIndex);
                $Opt(element).attr(&#39;aria-label&#39;, $Opt(element).text());
            });
        }
        if (checkIscenterTile()) {
            if ($Opt(&#34;.accept-cookies-button&#34;).length) {
                $Opt(&#34;.accept-cookies-button&#34;).attr(&#39;tabindex&#39;, &#43;&#43;bannerTabIndex);
            }
            if ($Opt(&#34;.cookie-settings-button&#34;).length) {
                $Opt(&#34;.cookie-settings-button&#34;).attr(&#39;tabindex&#39;, &#43;&#43;bannerTabIndex);
            }
        } else {
            if ($Opt(&#34;.cookie-settings-button&#34;).length) {
                $Opt(&#34;.cookie-settings-button&#34;).attr(&#39;tabindex&#39;, &#43;&#43;bannerTabIndex);
            }
            if ($Opt(&#34;.accept-cookies-button&#34;).length) {
                $Opt(&#34;.accept-cookies-button&#34;).attr(&#39;tabindex&#39;, &#43;&#43;bannerTabIndex);
            }
        }
        if ($Opt(&#34;.banner-close-button&#34;).length) {
            $Opt(&#34;.banner-close-button&#34;).attr(&#39;tabindex&#39;, &#43;&#43;bannerTabIndex);
        }
    }

    //BEHAVIOUR(IsIABEnabled &#61;&#61; true)
    this.updateConsentFromCookies &#61; function (OnetrustIABCookies) {
        var allowedGroup &#61; [], isExist;
        if (isInitIABCookieData(OnetrustIABCookies)) {
            populateVendorList(true);
            return;
        }

        if (OnetrustIABCookies &amp;&amp; !isInitIABCookieData(OnetrustIABCookies)) {
            IABCookieValue &#61; OnetrustIABCookies;
            var globalConsentData &#61; new consentString.ConsentString(OnetrustIABCookies);
            oneTrustIABConsent.purpose &#61; [];
            oneTrustIABConsent.vendors &#61; [];

            globalConsentData.getVendorsAllowed().forEach(function (vendor) {
                oneTrustIABConsent.vendors.push(vendor.toString() &#43; &#39;:true&#39;);
            });
            globalConsentData.getPurposesAllowed().forEach(function (purpose) {
                oneTrustIABConsent.purpose.push(purpose.toString() &#43; &#39;:true&#39;);
                var group &#61; getGroupByPurposeId(purpose[0])
                if (group &amp;&amp; group.GroupId &amp;&amp; (indexOf(allowedGroup, group) &#61;&#61; -1)) {
                    allowedGroup.push(group);
                    //BEHAVIOUR(ShowSubgroupToggles &#61;&#61; true)
                    getGroupSubGroups(group).forEach(function (subGroup) {
                        allowedGroup.push(subGroup);
                    });
                    //BEHAVIOUR_END
                }
            });
            for (var index &#61; 0; index &lt; allowedGroup.length; index&#43;&#43;) {
                var element &#61; allowedGroup[index];
                isExist &#61; indexOf(optanonHtmlGroupData, (getGroupIdForCookie(element) &#43; &#39;:0&#39;));
                if (isExist !&#61; -1) {
                    optanonHtmlGroupData[isExist] &#61; getGroupIdForCookie(element) &#43; &#39;:1&#39;;
                }
            }
            populateVendorList();
            setCookie(oneTrustIABCookieName, &#39;&#39;, -1);
        } else if (!OnetrustIABCookies) {
            writeCookieParam(
                optanonCookieName,
                oneTrustIsIABCrossConsentEnableParam,
                false);
            initializeIABData();
        }
    }

    function isInitIABCookieData(OnetrustIABCookies) {
        return OnetrustIABCookies &#61;&#61;&#61; &#34;init&#34; ? true : false;
    }

    function getGroupByPurposeId(purposeId) {
        var json &#61; optanonData(), group;
        if (json &amp;&amp; json.Groups) {
            for (var i &#61; 0; i &lt; json.Groups.length; i&#43;&#43;) {
                group &#61; json.Groups[i];
                if (isTopLevelGroup(group) &amp;&amp; group.Purposes &amp;&amp; group.Purposes.length &gt; 0) {
                    for (var index &#61; 0; index &lt; group.Purposes.length; index&#43;&#43;) {
                        if (group.Purposes[index].purposes.purposeId &#61;&#61; purposeId) {
                            return group;
                        }
                    }
                }
            }
        }

    }

    //BEHAVIOUR_END

    // ONETRUST FUNCTIONS (jQuery Overhaul)
    function OTfadeOut(el, ms) {
        var domEl &#61; document.querySelector(el);
        var fadeEffect &#61; setInterval(function () {
            if (!domEl.style.opacity) {
                domEl.style.opacity &#61; 1;
            }
            if (domEl.style.opacity &gt; 0) {
                domEl.style.opacity -&#61; 0.1;
            } else {
                domEl.style.display &#61; &#34;none&#34;;
                clearInterval(fadeEffect);
            }
        }, ms);
    }

    function OTajax(options) {
        var type &#61; void 0,
            url &#61; void 0,
            success &#61; void 0,
            error &#61; void 0,
            data &#61; null,
            dataType &#61; void 0,
            contentType &#61; void 0,
            request &#61; new XMLHttpRequest();

        type &#61; options.type;
        url &#61; options.url;
        success &#61; options.success;
        error &#61; options.error;
        data &#61; options.data;
        dataType &#61; options.dataType;
        contentType &#61; options.contentType;

        request.open(type, url, true);
        request.setRequestHeader(&#39;Content-Type&#39;, contentType);
        request.onload &#61; function () {
            if (this.status &gt;&#61; 200 &amp;&amp; this.status &lt; 400) {
                // Success!
                var response &#61; JSON.parse(this.response);
                success(response);
            } else {
                // We reached our target server, but it returned an error
                error({ message: &#39;Error Loading Data&#39;, statusCode: this.status });
            }
        };
        request.onerror &#61; function (err) {
            // There was a connection error of some sort
            error(err);
        };

        type.toLowerCase() &#61;&#61;&#61; &#39;post&#39; || type.toLowerCase() &#61;&#61;&#61; &#39;put&#39; ? request.send(data) : request.send();
    }

    this.setGeoLocation &#61; function (response) {
        isInEU &#61; response;
        setGeolocationInCookies();
    }

    function getGeoLocation() {
        var userGeolocation &#61; readCookieParam(optanonCookieName, geolocationCookiesParam);
        var json &#61; optanonData();
        if (userGeolocation &#61;&#61;&#61; &#34;&#34; &amp;&amp; (json.IsIABEnabled || json.euOnly)) {
            $Opt.ajax({
                type: &#39;GET&#39;,
                crossDomain: true,
                dataType: &#39;json&#39;,
                url: &#39;[[OptanonIsIpAllowedForCountryUrl]]&#39;
            })
                .fail(function (response) {
                    if (response.status !&#61;&#61; 200) {
                        window.jsonFeed({ displayPopup: true });
                    }
                });
        } else {
            window.jsonFeed({ displayPopup: userGeolocation });
        }
    }

    function injectJquery() {
        var script1 &#61; document.createElement(&#39;script&#39;);
        var script2 &#61; document.createElement(&#39;script&#39;);
        script1.type &#61; &#39;text/javascript&#39;;
        script1.src &#61; &#39;https://code.jquery.com/jquery-3.3.1.min.js&#39;;
        script1.integrity &#61; &#39;sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8&#61;&#39;;
        script1.crossOrigin &#61; &#39;anonymous&#39;;

        script2.type &#61; &#39;text/javascript&#39;;
        script2.src &#61; &#39;https://code.jquery.com/jquery-1.11.2.min.js&#39;;
        script2.integrity &#61; &#39;sha256-Ls0pXSlb7AYs7evhd&#43;VLnWsZ/AqEHcXBeMZUycz/CcA&#61;&#39;;
        script2.crossOrigin &#61; &#39;anonymous&#39;;

        if (useLatestJquey) {
            document.getElementsByTagName(&#39;head&#39;)[0].appendChild(script1);
            script1.onload &#61; script1.onreadystatechange &#61; function () {
                if (!this.readyState || this.readyState &#61;&#61; &#39;loaded&#39; || this.readyState &#61;&#61; &#39;complete&#39;) {
                    injectConsentNotice();
                }
            };
        } else {
            document.getElementsByTagName(&#39;head&#39;)[0].appendChild(script2);
            script2.onload &#61; script2.onreadystatechange &#61; function () {
                if (!this.readyState || this.readyState &#61;&#61; &#39;loaded&#39; || this.readyState &#61;&#61; &#39;complete&#39;) {
                    injectConsentNotice();
                }
            };
        }
    }

}).call(Optanon);

if (typeof window.jsonFeed !&#61;&#61; &#39;function&#39;) {
    var jsonFeed &#61; function (options) {
        Optanon.setGeoLocation(options.displayPopup)
    }
}

Optanon.Init();
