/* ============================================================
   i18n.js — Internationalisation (FR / EN)
   ============================================================ */
(async function () {
  const LANG_KEY = '369secrets_lang';
  const DEFAULT = 'fr';
  const SUPPORTED = ['fr', 'en'];

  // ---- 1. Detect language ----
  let lang = localStorage.getItem(LANG_KEY);
  if (!lang) {
    lang = navigator.language?.slice(0, 2) || DEFAULT;
    if (!SUPPORTED.includes(lang)) lang = DEFAULT;
  }

  // ---- 2. Load translations ----
  let translations = {};
  try {
    const resp = await fetch(`locales/${lang}.json`);
    translations = await resp.json();
  } catch {
    try {
      const resp = await fetch(`locales/${DEFAULT}.json`);
      translations = await resp.json();
    } catch { /* fail silently */ }
  }

  // ---- 3. Apply keys to DOM ----
  function translate() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      let text = translations[key];
      if (text !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = text;
        } else {
          el.innerHTML = text;
        }
      }
    });
  }

  // ---- 4. Toggle button ----
  function setupToggle() {
    const btn = document.getElementById('langToggle');
    if (!btn) return;
    btn.textContent = lang === 'fr' ? 'en' : 'fr';
    btn.addEventListener('click', () => {
      lang = lang === 'fr' ? 'en' : 'fr';
      localStorage.setItem(LANG_KEY, lang);
      // reload page to apply new lang
      window.location.reload();
    });
  }

  // ---- 5. Init ----
  document.addEventListener('DOMContentLoaded', () => {
    translate();
    setupToggle();
    document.documentElement.lang = lang;
  });
})();
