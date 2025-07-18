import React, { useEffect } from 'react';
import Desktop from './components/Desktop';

function App() {
  useEffect(() => {
    function handleAnchorClick(e) {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href.length < 2 || href === '#') return;
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        const headerOffset = 100;
        const rect = el.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const top = rect.top + scrollTop - headerOffset;
        window.scrollTo({ top, behavior: 'smooth' });
        // Фокус для доступности
        el.tabIndex = -1;
        el.focus({ preventScroll: true });
      }
    }
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);
  return <Desktop />;
}

export default App;
