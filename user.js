/* All until other sources is from https://wiki.mozilla.org/Privacy/Privacy_Task_Force/firefox_about_config_privacy_tweeks 
(I don't disable google safe browsing)
***/





user_pref("privacy.firstparty.isolate", true);


/* "A result of the Tor Uplift effort, this preference isolates all browser identifier sources (e.g. cookies) to the first party domain, with the goal of preventing tracking across different domains."
***/

user_pref("privacy.resistFingerprinting", true);
/*  "A result of the Tor Uplift effort, this preference makes Firefox more resistant to browser fingerprinting."
***/

user_pref("browser.cache.offline.enable", false);
/* "Disables offline cache."
***/

user_pref("browser.send_pings", false);
/* "The attribute would be useful for letting websites track visitors’ clicks."
***/

user_pref("browser.sessionstore.max_tabs_undo", 5);
/* "Even with Firefox set to not remember history, your closed tabs are stored temporarily at Menu -> History -> Recently Closed Tabs."
*
* I have set it to 5 so you still can undo som tabs
***/

user_pref("browser.urlbar.speculativeConnect.enabled", false);
/* "Disable preloading of autocomplete URLs. Firefox preloads URLs that autocomplete when a user types into the address bar, which is a concern if URLs are suggested that the user does not want to connect to. Source"
***/

user_pref("dom.battery.enabled", false);
/* "Website owners can track the battery status of your device. Source"
***/

user_pref("dom.event.clipboardevents.enabled", false);
/* "Disable that websites can get notifications if you copy, paste, or cut something from a web page, and it lets them know which part of the page had been selected."
***/

user_pref("geo.enabled", false);
/* "Disables geolocation.""
***/

user_pref("media.navigator.enabled", false);
/* "Websites can track the microphone and camera status of your device."
***/

user_pref("network.cookie.cookieBehavior", 1);
/* "Disable cookies  
        
        0 = Accept all cookies by default
        1 = Only accept from the originating site (block third party cookies)
        2 = Block all cookies by default
"
***/

user_pref("network.cookie.lifetimePolicy", 2);
/* "cookies are deleted at the end of the session

        0 = Accept cookies normally
        1 = Prompt for each cookie
        2 = Accept for current session only
        3 = Accept for N days
"
***/

user_pref("network.http.referer.trimmingPolicy", 2);
/* "Send only the scheme, host, and port in the Referer header

        0 = Send the full URL in the Referer header
        1 = Send the URL without its query string in the Referer header
        2 = Send only the scheme, host, and port in the Referer header
"
***/

user_pref("network.http.referer.XOriginPolicy", 2);
/* "Only send Referer header when the full hostnames match. (Note: if you notice significant breakage, you might try 1 combined with an XOriginTrimmingPolicy tweak below.) Source

        0 = Send Referer in all cases
        1 = Send Referer to same eTLD sites
        2 = Send Referer only when the full hostnames match
"
***/


user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
/* "When sending Referer across origins, only send scheme, host, and port in the Referer header of cross-origin requests. Source

        0 = Send full url in Referer
        1 = Send url without query string in Referer
        2 = Only send scheme, host, and port in Referer
"
***/

user_pref("webgl.disabled", true);
/* "WebGL is a potential security risk."
***/


/* Sources https://www.privacytools.io/browsers/#about_config (Only theme with sources there stat the full "name")
***/

user_pref("browser.sessionstore.privacy_level", 2);
/* " This preference controls when to store extra information about a session: contents of forms, scrollbar positions, cookies, and POST data."

    0 = Store extra session data for any site. (Default starting with Firefox 4.)
    1 = Store extra session data for unencrypted (non-HTTPS) sites only. (Default before Firefox 4.)
    2 = Never store extra session data.

***/


user_pref("network.IDN_show_punycode", true);
/*Not rendering IDNs as their Punycode equivalent leaves you open to phishing attacks that can be very difficult to notice. Source"
***/

/*Webrtc ip leak disable Sources https://www.privacytools.io/browsers/#webrtc, https://www.ivacy.com/internet-privacy/disable-webrtc-leak, https://kingpinbrowser.com/blog/how-disable-webrtc and https://temproxy.com/news/how-to-disable-webrtc-firefox-webrtc-mozilla-ip-leaks.html
***/

user_pref("media.peerconnection.enabled", false);
