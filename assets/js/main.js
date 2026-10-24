const panels = document.querySelectorAll('[data-panel]');
const cards = document.querySelectorAll('[data-service]');
const triggers = document.querySelectorAll('[data-open-panel]');

function activateService(service, shouldScroll = false) {
  cards.forEach((card) => {
    const active = card.dataset.service === service;
    card.classList.toggle('is-active', active);
    card.setAttribute('aria-selected', active ? 'true' : 'false');
  });

  panels.forEach((panel) => {
    const active = panel.dataset.panel === service;
    panel.hidden = !active;
    panel.classList.toggle('is-active', active);
  });

  if (shouldScroll) {
    document.getElementById('leistungen')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  history.replaceState(null, '', `#${service}`);
}

cards.forEach((card) => {
  card.addEventListener('click', () => activateService(card.dataset.service));
});

triggers.forEach((trigger) => {
  trigger.addEventListener('click', (event) => {
    const service = trigger.dataset.openPanel;
    if (service) {
      event.preventDefault();
      activateService(service, true);
    }
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const initial = location.hash.replace('#', '');
  const service = ['repair', 'consulting', 'accessories'].includes(initial) ? initial : 'repair';

  // Initialzustand explizit setzen: nur ein Detailpanel bleibt sichtbar.
  activateService(service);
});
