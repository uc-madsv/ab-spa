export const ucScriptInjectionString = `
    function addScript(src, attributes = {}) {
        const script = document.createElement('script');
        script.src = src;
        for (const [key, value] of Object.entries(attributes)) {
            script.setAttribute(key, value);
        }
        document.write(script.outerHTML);
    }

    function injectUserCentricScripts() {
      const urlParams = new URLSearchParams(window.location.search);
      const isLocalhost = urlParams.get('localhost') === 'true';

      const autoblockerUrl = isLocalhost
        ? 'http://localhost:4445/autoblocker.js'
        : 'https://web.cmp.usercentrics-sandbox.eu/ui/modules/autoblocker.js';
      const loaderUrl = isLocalhost
        ? 'http://localhost:1111/loader.js'
        : 'https://web.cmp.usercentrics-sandbox.eu/ui/loader.js';

      addScript(autoblockerUrl);
      addScript(loaderUrl, { 'data-settings-id': 'H8UPjXU8uQQ7GP', id: 'usercentrics-cmp' });
    }

    injectUserCentricScripts();
    `;
