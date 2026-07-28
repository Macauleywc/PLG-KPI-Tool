// ===== SHARED AUTH GUARD =====
// Include with: <script src="shared/config.js"></script>
//               <script src="shared/auth-guard.js" data-module="reports"></script>
// Must be a plain (non-async, non-defer) <script> tag placed in <head> BEFORE any visible content,
// so it blocks rendering exactly like the old inline redirect check did.
(function () {
  var thisScript = document.currentScript;
  var requiredModule = thisScript ? thisScript.getAttribute('data-module') : null;

  // 1. Must be logged in at all
  if (!sessionStorage.getItem('plg_auth')) {
    window.location.href = 'login.html';
    return;
  }

  // 2. If this page declares a module, the user must have it (admins always pass)
  if (requiredModule) {
    var role = sessionStorage.getItem('plg_role') || 'user';
    var modules = [];
    try { modules = JSON.parse(sessionStorage.getItem('plg_modules') || '[]'); } catch (e) {}

    var allowed = role === 'admin' || modules.indexOf(requiredModule) > -1;
    if (!allowed) {
      window.location.href = 'index.html?denied=' + encodeURIComponent(requiredModule);
    }
  }
})();
