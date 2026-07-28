// ===== SHARED PLATFORM CONFIG =====
// One place for connection details. Every page includes this before anything else.
window.PLG = window.PLG || {};

PLG.SB_URL   = 'https://ahvyirnebbbfmktewdva.supabase.co';
PLG.SB_ANON  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFodnlpcm5lYmJiZm1rdGV3ZHZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2ODQxMzAsImV4cCI6MjA5MjI2MDEzMH0.4uOvx11sNPOYGRSAxu4J7MwtgOQpHJsNtCg2BaP1Y3c';

PLG.EDGE_URL      = PLG.SB_URL + '/functions/v1/kpi-admin';
PLG.KPI_DATA_URL  = PLG.SB_URL + '/functions/v1/kpi-data';

// Every module the platform knows about. Sidebar + auth guard both read this.
// key: matches the "modules" jsonb values stored per-user in Supabase
// page: filename the sidebar links to
// adminOnly: true = only shown/allowed if role === 'admin', regardless of modules list
PLG.MODULES = [
  { key: 'home',          label: 'Home',              page: 'index.html',    icon: 'home',    adminOnly: false },
  { key: 'reports',       label: "Customer KPI's",    page: 'reports.html',  icon: 'chart',   adminOnly: false, group: 'Customers' },
  { key: 'import',        label: 'Import',            page: 'import.html',   icon: 'upload',  adminOnly: false, group: 'Transport' },
  { key: 'users',         label: 'Users',             page: 'users.html',    icon: 'users',   adminOnly: true, group: 'Admin' },
  { key: 'settings',      label: 'Settings',          page: 'settings.html', icon: 'settings',adminOnly: true, group: 'Admin' },
];
