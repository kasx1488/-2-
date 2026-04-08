// ── CURSOR
const cursor = document.getElementById('cursor');
const glow = document.getElementById('cursor-glow');
if (cursor && glow) {
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}

// ── COUNTDOWN
(function() {
  const KEY_END  = 'sc_end';
  const KEY_LAST = 'sc_last';
  const DURATION  = 3 * 3600000;
  const MAX_AWAY  = 1 * 3600000;

  const now      = Date.now();
  const lastSeen = parseInt(localStorage.getItem(KEY_LAST) || '0');
  const storedEnd = parseInt(localStorage.getItem(KEY_END) || '0');
  const awayMs   = now - lastSeen;

  let endTime;
  if (!storedEnd || awayMs > MAX_AWAY) {
    endTime = now + DURATION;
    localStorage.setItem(KEY_END, endTime);
  } else {
    endTime = storedEnd;
  }

  localStorage.setItem(KEY_LAST, now);

  function tick() {
    const diff = endTime - Date.now();
    const el = document.getElementById('countdown');
    if (!el) return;
    if (diff <= 0) { el.textContent = '00:00:00'; return; }
    const h = String(Math.floor(diff / 3600000)).padStart(2, '0');
    const m = String(Math.floor(diff % 3600000 / 60000)).padStart(2, '0');
    const s = String(Math.floor(diff % 60000 / 1000)).padStart(2, '0');
    el.textContent = h + ':' + m + ':' + s;
  }
  tick();
  setInterval(tick, 1000);
})();

// ── FADE IN (ИСПРАВЛЕНО)
(function() {
  const fadeElements = document.querySelectorAll('.fade-me');
  
  // Принудительно показываем все элементы
  fadeElements.forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
  
  // IntersectionObserver для анимации при скролле
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { 
      if (e.isIntersecting) { 
        e.target.classList.add('in'); 
      }
    });
  }, { threshold: 0.08 });
  
  fadeElements.forEach(el => io.observe(el));
})();
// ── FADE IN (ИСПРАВЛЕНО)
(function() {
  const fadeElements = document.querySelectorAll('.fade-me');
  
  // Принудительно показываем все элементы
  fadeElements.forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
  
  // IntersectionObserver для анимации при скролле
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { 
      if (e.isIntersecting) { 
        e.target.classList.add('in'); 
      }
    });
  }, { threshold: 0.08 });
  
  fadeElements.forEach(el => io.observe(el));
})();
