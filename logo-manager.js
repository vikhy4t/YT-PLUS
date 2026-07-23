const LogoManager = (() => {
    const STYLE_ID = "ytabp-logo-style";

    function init() {
        chrome.storage.local.get(
            { logoEnabled: true },
            ({ logoEnabled }) => {
                apply(logoEnabled);
            }
        );

        chrome.storage.onChanged.addListener((changes, area) => {
            if (area !== "local") return;
            if (changes.logoEnabled) {
                apply(changes.logoEnabled.newValue);
            }
        });

        observeNavigation();
    }

    function apply(enabled) {
        if (enabled) {
            inject();
        } else {
            remove();
        }
    }

    function inject() {
        if (document.getElementById(STYLE_ID)) return;

        const link = document.createElement("link");
        link.id = STYLE_ID;
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = chrome.runtime.getURL("styles/logo.css");

        (document.head || document.documentElement).appendChild(link);
    }

    function remove() {
        document.getElementById(STYLE_ID)?.remove();
    }

    function observeNavigation() {
        let lastUrl = location.href;

        new MutationObserver(() => {
            if (location.href !== lastUrl) {
                lastUrl = location.href;

                chrome.storage.local.get(
                    { logoEnabled: true },
                    ({ logoEnabled }) => apply(logoEnabled)
                );
            }
        }).observe(document.documentElement, {
            childList: true,
            subtree: true
        });
    }

    return {
        init,
        apply
    };
})();


LogoManager.init();
