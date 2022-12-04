// ==UserScript==
// @name         Sudo Password
// @namespace    https://kenny-hui.github.io
// @version      1.0
// @description  Save a click entering sudo mode if you prefer signing in with password
// @author       LX86
// @match        https://github.com/*
// @icon         https://github.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function callback() {
        if(document.body.classList.contains("session-authentication")) {
            let passwordContainer = document.querySelector('[data-target="sudo-credential-options.passwordContainer"]')
            let isPromptingMobile = passwordContainer != null && passwordContainer.hasAttribute('hidden');
            let usePasswordButton = document.querySelector('#sudo > sudo-credential-options > div.Box.mt-3 > div > ul > [data-target="sudo-credential-options.passwordNav"] > button')
            if(isPromptingMobile && usePasswordButton != null) {
                usePasswordButton.click()
            };
        }
    }

    const observer = new MutationObserver(callback);
    observer.observe((document.documentElement || document.body), { attributes: true, childList: false, subtree: false });
})();