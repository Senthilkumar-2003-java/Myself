let smoothScroller = null;

export function setSmoothScroller(scroller) {
  smoothScroller = scroller;
}

export function scrollToSection(id) {
  const target = document.getElementById(id.replace(/^#/, ''));
  if (!target) return;
  const offset = (document.querySelector('.navbar-wrap')?.offsetHeight || 76) + 16;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (smoothScroller && !reducedMotion) {
    smoothScroller.scrollTo(target, { offset: -offset, duration: 1.05 });
  } else {
    window.scrollTo({
      top: Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset),
      behavior: reducedMotion ? 'instant' : 'smooth',
    });
  }
}
