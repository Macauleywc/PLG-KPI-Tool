/* ===== SHARED PLATFORM STYLES ===== */
/* Design tokens lifted straight from the existing KPI Portal (index.html) so every
   page in the platform looks like one product, not three stitched together. */
:root {
  --bg: #F5F4F0; --surface: #FFFFFF; --border: #E4E2DD;
  --text: #18181A; --muted: #6B6865; --faint: #EFEDE8;
  --orange: #F47920; --orange-dim: #FFF0E6; --orange-dk: #E06810;
  --dark: #121212;
  --green: #15803D; --amber: #B45309; --red: #DC2626;
  --radius: 8px;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.06);
  --shadow: 0 4px 14px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05);
  --sidebar-w: 224px;
}
* { box-sizing: border-box; }
body { font-family: 'Inter', sans-serif; background: var(--bg); color: var(--text); -webkit-font-smoothing: antialiased; margin: 0; }

/* ── Layout shell: fixed sidebar + scrollable content ── */
.plg-layout { display: flex; min-height: 100vh; }

.plg-sidebar {
  width: var(--sidebar-w); flex-shrink: 0; background: var(--dark);
  display: flex; flex-direction: column; position: sticky; top: 0; height: 100vh;
}
.plg-sb-brand {
  display: flex; align-items: center; gap: 10px; padding: 20px 18px 16px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.plg-sb-logo { height: 20px; width: auto; }
.plg-sb-brand-text { font-size: 12px; font-weight: 700; color: #fff; letter-spacing: -0.01em; }
.plg-sb-brand-sub { font-size: 10px; color: rgba(255,255,255,0.4); margin-top: 1px; }

.plg-sb-nav { flex: 1; padding: 14px 10px; overflow-y: auto; }
.plg-sb-link {
  display: flex; align-items: center; gap: 10px; padding: 9px 12px; margin-bottom: 2px;
  border-radius: 7px; color: rgba(255,255,255,0.6); text-decoration: none;
  font-size: 13px; font-weight: 500; transition: all 0.15s; cursor: pointer;
}
.plg-sb-link svg { flex-shrink: 0; opacity: 0.8; }
.plg-sb-link:hover { background: rgba(255,255,255,0.06); color: #fff; }
.plg-sb-link.active { background: var(--orange); color: #fff; }
.plg-sb-link.active svg { opacity: 1; }
.plg-sb-link--nested { padding-left: 20px; }
.plg-sb-divider { height: 1px; background: rgba(255,255,255,0.08); margin: 10px 12px; }
.plg-sb-section-label {
  font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;
  color: rgba(255,255,255,0.3); padding: 8px 12px 4px;
}

.plg-sb-footer { padding: 14px; border-top: 1px solid rgba(255,255,255,0.08); }
.plg-sb-user { display: flex; align-items: center; gap: 9px; margin-bottom: 10px; }
.plg-sb-avatar {
  width: 28px; height: 28px; border-radius: 7px; background: var(--orange-dim); color: var(--orange);
  display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700; flex-shrink: 0;
}
.plg-sb-user-name { font-size: 12px; font-weight: 600; color: #fff; line-height: 1.3; }
.plg-sb-user-role { font-size: 10px; color: rgba(255,255,255,0.4); text-transform: capitalize; }
.plg-sb-signout {
  width: 100%; background: none; border: 1px solid rgba(255,255,255,0.12); border-radius: 6px;
  color: rgba(255,255,255,0.6); font-size: 12px; font-weight: 600; font-family: 'Inter', sans-serif;
  padding: 8px; cursor: pointer; transition: all 0.15s;
}
.plg-sb-signout:hover { background: rgba(255,255,255,0.06); color: #fff; }

.plg-content { flex: 1; min-width: 0; }

@media (max-width: 860px) {
  .plg-sidebar { position: fixed; z-index: 500; transform: translateX(-100%); transition: transform 0.2s; }
  .plg-sidebar.open { transform: translateX(0); }
  .plg-content { width: 100%; }
}
