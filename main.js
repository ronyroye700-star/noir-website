/* =========================================================
   NOIR — Premium Digital Studio
   Main JS — mobile menu panel behaviour
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const panel = document.getElementById('menuPanel');
  const openBtn = document.getElementById('menuOpen');
  const closeBtn = document.getElementById('menuClose');
  const links = panel.querySelectorAll('a');

  function setMenu(state) {
    panel.classList.toggle('open', state);
    panel.setAttribute('aria-hidden', String(!state));
    document.body.style.overflow = state ? 'hidden' : '';
    if (state) {
      closeBtn.focus();
    } else {
      openBtn.focus();
    }
  }

  openBtn.addEventListener('click', () => setMenu(true));
  closeBtn.addEventListener('click', () => setMenu(false));
  links.forEach(a => a.addEventListener('click', () => setMenu(false)));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('open')) {
      setMenu(false);
    }
  });
});
