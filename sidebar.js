// ===== SHARED SIDEBAR =====
// Requires config.js loaded first. Call PLG.renderSidebar('reports') after DOM is ready,
// where 'reports' is the current page's module key (or null on pages with no nav highlight).
window.PLG = window.PLG || {};

PLG.ICONS = {
  home:     '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>',
  chart:    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 11l4-4 4 4 5-5"/></svg>',
  upload:   '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-6"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/><path d="m5 12 2-9h10l2 9"/></svg>',
  truck:    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
  users:    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/></svg>',
  settings: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  external: '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" style="margin-left:auto;opacity:.5"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>'
};

function plgInits(n) {
  return (n || '?').split(' ').map(function (w) { return w[0] || ''; }).slice(0, 2).join('').toUpperCase();
}

PLG.renderSidebar = function (activeKey) {
  var root = document.getElementById('plg-sidebar-root');
  if (!root) return;

  var role = sessionStorage.getItem('plg_role') || 'user';
  var name = sessionStorage.getItem('plg_name') || sessionStorage.getItem('plg_username') || 'User';
  var userModules = [];
  try { userModules = JSON.parse(sessionStorage.getItem('plg_modules') || '[]'); } catch (e) {}

  var visible = PLG.MODULES.filter(function (m) {
    if (role === 'admin') return true;
    if (m.adminOnly) return false;
    return userModules.indexOf(m.key) > -1;
  });

  // Build groups in the order modules are declared. Ungrouped items (e.g. Home)
  // render standalone; grouped items get wrapped with a section label.
  // Any group flagged `pinned` on its first member gets pushed to the bottom via margin-top:auto.
  var groupsHtml = '';
  var i = 0;
  while (i < visible.length) {
    var m = visible[i];
    if (!m.group) {
      groupsHtml += '<div class="plg-sb-group">' + linkHtml(m, activeKey) + '</div>';
      i++;
      continue;
    }
    var groupName = m.group;
    var isPinned = !!m.pinned;
    var itemsHtml = '';
    while (i < visible.length && visible[i].group === groupName) {
      itemsHtml += linkHtml(visible[i], activeKey);
      i++;
    }
    groupsHtml += '<div class="plg-sb-group' + (isPinned ? ' plg-sb-group--pinned' : '') + '">'
      + '<div class="plg-sb-section-label">' + groupName + '</div>' + itemsHtml + '</div>';
  }

  root.innerHTML =
    '<div class="plg-sidebar">' +
      '<div class="plg-sb-brand">' +
        '<div class="plg-sb-brand-text">PLG Central<div class="plg-sb-brand-sub">Premier Logistics Group</div></div>' +
      '</div>' +
      '<div class="plg-sb-nav">' + groupsHtml + '</div>' +
      '<div class="plg-sb-footer">' +
        '<div class="plg-sb-user">' +
          '<div class="plg-sb-avatar">' + plgInits(name) + '</div>' +
          '<div><div class="plg-sb-user-name">' + name + '</div><div class="plg-sb-user-role">' + role + '</div></div>' +
        '</div>' +
        '<button class="plg-sb-signout" onclick="PLG.signOut()">Sign out</button>' +
      '</div>' +
    '</div>';
};

function linkHtml(m, activeKey) {
  var isActive = m.key === activeKey;
  var target = m.external ? ' target="_blank" rel="noopener"' : '';
  var indentClass = m.group ? ' plg-sb-link--nested' : '';
  return '<a class="plg-sb-link' + indentClass + (isActive ? ' active' : '') + '" href="' + m.page + '"' + target + '>'
    + PLG.ICONS[m.icon] + '<span>' + m.label + '</span>'
    + (m.external ? PLG.ICONS.external : '')
    + '</a>';
}

PLG.signOut = function () {
  sessionStorage.removeItem('plg_auth');
  sessionStorage.removeItem('plg_role');
  sessionStorage.removeItem('plg_name');
  sessionStorage.removeItem('plg_modules');
  window.location.href = 'login.html';
};
