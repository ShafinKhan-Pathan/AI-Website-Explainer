(function () {
  var existing = document.getElementById('ai-website-explainer-root');
  if (existing) return;

  var root = document.createElement('div');
  root.id = 'ai-website-explainer-root';
  document.body.appendChild(root);

  var currentScript = document.currentScript;
  var source = currentScript && currentScript.src ? new URL(currentScript.src, window.location.href) : null;
  var baseUrl = source ? source.href.replace(/widget\.js(?:\?.*)?$/, '') : '/';
  var isDevServer = source ? /:\d{2,5}\//.test(source.href) : false;

  window.AIWebsiteExplainerConfig = window.AIWebsiteExplainerConfig || {};
  if (currentScript && currentScript.dataset.apiBaseUrl) {
    window.AIWebsiteExplainerConfig.apiBaseUrl = currentScript.dataset.apiBaseUrl;
  }
  if (currentScript && currentScript.dataset.demoMode) {
    window.AIWebsiteExplainerConfig.demoMode = currentScript.dataset.demoMode === 'true';
  }

  if (!isDevServer) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = baseUrl + 'widget.css';
    document.head.appendChild(link);
  }

  var script = document.createElement('script');
  script.type = 'module';
  script.src = baseUrl + 'widget-client.js';
  document.body.appendChild(script);
})();
