/* ===== SHARED PLATFORM STYLES ===== */
/* "Organic" design system — warm cream ground, terracotta accent, Caprasimo headings, Figtree body. */
:root {
  --bg: #f5ead8; --surface: #ebddc5; --border: rgba(32,30,29,0.16);
  --text: #201e1d; --muted: rgba(32,30,29,0.55); --faint: #eee7db;
  --orange: #c67139; --orange-dim: #fff2eb; --orange-dk: #b2622d;
  --dark: #2e2b25;
  --green: #56633f; --amber: #b2622d; --red: #b3261e;
  --radius: 16px;
  --shadow-sm: 0 1px 2px rgba(46,43,37,0.14);
  --shadow: 0 3px 10px rgba(46,43,37,0.16);
  --sidebar-w: 260px;
  --font-heading: 'Caprasimo', system-ui, sans-serif;
  --font-body: 'Figtree', system-ui, sans-serif;
}
* { box-sizing: border-box; }
body { font-family: var(--font-body); background: var(--bg); color: var(--text); -webkit-font-smoothing: antialiased; margin: 0; }

/* Anything that reads as a heading/title/display number across the platform gets Caprasimo,
   regardless of which page's custom class names it's wearing. */
.page-title, .modal-title, .card-title, .card-name, .kpi-big, .brand-title, .brand-name,
.plg-sb-brand-text, .dt, .ctitle, .empty-state-title, h1, h2, h3, h4 {
  font-family: var(--font-heading); font-weight: 400; letter-spacing: -0.01em;
}

/* ── Layout shell: fixed sidebar + scrollable content ── */
.plg-layout { display: flex; min-height: 100vh; }

.plg-sidebar {
  width: var(--sidebar-w); flex-shrink: 0; background: #f9f4ed;
  display: flex; flex-direction: column; position: sticky; top: 0; height: 100vh;
  padding: 18px 13px; gap: 22px;
}
.plg-sb-brand {
  display: flex; align-items: center; gap: 10px; padding: 0 8px;
}
.plg-sb-logo { height: 20px; width: auto; }
.plg-sb-brand-text { font-size: 16px; color: var(--text); line-height: 1.15; }
.plg-sb-brand-sub { font-size: 11px; color: var(--muted); margin-top: 1px; font-family: var(--font-body); }

.plg-sb-nav { flex: 1; display: flex; flex-direction: column; gap: 20px; overflow-y: auto; }
.plg-sb-group { display: flex; flex-direction: column; gap: 2px; }
.plg-sb-group--pinned { margin-top: auto; }
.plg-sb-link {
  display: flex; align-items: center; gap: 10px; padding: 8px 10px;
  border-radius: var(--radius); color: var(--text); text-decoration: none;
  font-size: 14px; font-weight: 500; transition: all 0.15s; cursor: pointer;
}
.plg-sb-link svg { flex-shrink: 0; opacity: 0.75; }
.plg-sb-link:hover { background: rgba(32,30,29,0.06); }
.plg-sb-link.active { background: var(--orange); color: var(--bg); }
.plg-sb-link.active svg { opacity: 1; }
.plg-sb-link--nested { padding-left: 20px; }
.plg-sb-section-label {
  font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;
  color: var(--muted); padding: 0 10px 4px; font-family: var(--font-body);
}

.plg-sb-footer { padding-top: 14px; border-top: 1px solid var(--border); }
.plg-sb-user { display: flex; align-items: center; gap: 9px; margin-bottom: 10px; }
.plg-sb-avatar {
  width: 28px; height: 28px; border-radius: 50%; background: #e1eecc; color: #3d472b;
  display: flex; align-items: center; justify-content: center; font-size: 10px; font-family: var(--font-heading); flex-shrink: 0;
}
.plg-sb-user-name { font-size: 12px; font-weight: 600; color: var(--text); line-height: 1.3; font-family: var(--font-body); }
.plg-sb-user-role { font-size: 10px; color: var(--muted); text-transform: capitalize; }
.plg-sb-signout {
  width: 100%; background: none; border: 1px solid var(--border); border-radius: 999px;
  color: var(--muted); font-size: 12px; font-weight: 600; font-family: var(--font-body);
  padding: 8px; cursor: pointer; transition: all 0.15s;
}
.plg-sb-signout:hover { background: rgba(32,30,29,0.06); color: var(--text); }

.plg-content { flex: 1; min-width: 0; }

@media (max-width: 860px) {
  .plg-sidebar { position: fixed; z-index: 500; transform: translateX(-100%); transition: transform 0.2s; }
  .plg-sidebar.open { transform: translateX(0); }
  .plg-content { width: 100%; }
}
