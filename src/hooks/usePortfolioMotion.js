import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { setSmoothScroller } from '../utils/scroll';

const revealSelector = [
  '.hero-intro-label', '.hero-role', '.hero-description', '.hero-meta-items',
  '.hero-btn-group', '.hero-stats-row',
  'main section:not(.hero-section) .section-badge',
  'main section .section-title', '.about-paragraph', '.expertise-card',
  '.skill-card', '.timeline-card', '.project-card', '.education-card',
  '.contact-card', '.contact-form-wrap', '.workspace-visual-box', '.cta-banner',
].join(',');

export default function usePortfolioMotion(appRef, progressRef) {
  useEffect(() => {
    const root = appRef.current;
    if (!root) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    let dispose = () => {};

    const setup = () => {
      dispose();
      let frame = 0;
      let documentHeight = 1;
      let heroHeight = 1;
      let heroVisible = true;
      const hero = root.querySelector('.hero-section');
      const portrait = root.querySelector('.hero-portrait-img');
      const badges = [...root.querySelectorAll('.floating-badge')];
      const animations = new Set();
      const targets = new Set();
      const cleanups = [];
      const enableMotion = !reducedMotion.matches;
      const desktopMotion = enableMotion && finePointer.matches;

      const lenis = desktopMotion ? new Lenis({
        autoRaf: true,
        lerp: 0.09,
        smoothWheel: true,
        syncTouch: false,
        anchors: { offset: -92 },
      }) : null;
      setSmoothScroller(lenis);
      root.classList.toggle('motion-ready', enableMotion);

      // Pause inertia before a dialog opens; its content keeps native scrolling.
      const onModal = (event) => {
        if (event.detail.open) lenis?.stop();
        else lenis?.start();
      };
      window.addEventListener('portfolio:modal', onModal);

      const update = () => {
        frame = 0;
        const y = window.scrollY;
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0, y / documentHeight))})`;
        }
        if (desktopMotion && heroVisible) {
          const amount = Math.min(y / heroHeight, 1);
          if (portrait) portrait.style.translate = `0 ${amount * 28}px`;
          badges.forEach((badge, index) => {
            badge.style.translate = `0 ${amount * (index % 2 ? -20 : -36)}px`;
          });
        }
      };
      const schedule = () => {
        if (!frame) frame = window.requestAnimationFrame(update);
      };
      const measure = () => {
        documentHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        heroHeight = hero?.offsetHeight || window.innerHeight;
        schedule();
      };
      const resizeObserver = new ResizeObserver(measure);
      resizeObserver.observe(root);
      window.addEventListener('scroll', schedule, { passive: true });
      window.addEventListener('resize', measure, { passive: true });
      const heroObserver = new IntersectionObserver(([entry]) => {
        heroVisible = entry.isIntersecting;
        if (heroVisible) schedule();
      });
      if (hero) heroObserver.observe(hero);

      // Reveal each element once. Delays are local to each row, never page-wide.
      const revealObserver = enableMotion ? new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          const siblings = [...target.parentElement.children].filter(node => node.matches(revealSelector));
          const index = Math.max(0, siblings.indexOf(target));
          target.dataset.reveal = 'visible';
          const animation = target.animate([
            { opacity: 0, translate: '0 20px' },
            { opacity: 1, translate: '0 0' },
          ], {
            duration: 650,
            delay: Math.min(index % 6, 4) * 45,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
            fill: 'backwards',
          });
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
          revealObserver.unobserve(target);
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' }) : null;

      const register = (scope) => {
        const candidates = [...scope.querySelectorAll(revealSelector)];
        if (scope.matches?.(revealSelector)) candidates.unshift(scope);
        candidates.forEach(target => {
          if (targets.has(target) || target.closest('dialog')) return;
          targets.add(target);
          target.dataset.reveal = 'pending';
          revealObserver.observe(target);
        });
      };
      if (enableMotion) register(root);
      // Filtered project/skill cards receive the same entrance treatment.
      const mutationObserver = enableMotion ? new MutationObserver(records => {
        records.forEach(record => {
          record.removedNodes.forEach(node => {
            if (!(node instanceof Element)) return;
            for (const target of targets) {
              if (node === target || node.contains(target)) {
                revealObserver.unobserve(target);
                targets.delete(target);
              }
            }
          });
          record.addedNodes.forEach(node => {
            if (node instanceof Element) register(node);
          });
        });
      }) : null;
      const main = root.querySelector('main');
      if (main) mutationObserver?.observe(main, { childList: true, subtree: true });

      if (desktopMotion) {
        root.querySelectorAll('.hero-btn-group .btn-primary-pill, .nav-actions .btn-primary-pill, .cta-button-white').forEach(button => {
          let pointerFrame = 0;
          let bounds;
          const enter = () => { bounds = button.getBoundingClientRect(); };
          const move = (event) => {
            if (!bounds) return;
            window.cancelAnimationFrame(pointerFrame);
            const x = (event.clientX - bounds.left - bounds.width / 2) * 0.1;
            const y = (event.clientY - bounds.top - bounds.height / 2) * 0.16;
            pointerFrame = window.requestAnimationFrame(() => {
              button.style.translate = `${Math.max(-6, Math.min(6, x))}px ${Math.max(-4, Math.min(4, y))}px`;
            });
          };
          const leave = () => {
            window.cancelAnimationFrame(pointerFrame);
            button.style.translate = '';
            bounds = null;
          };
          button.addEventListener('pointerenter', enter);
          button.addEventListener('pointermove', move);
          button.addEventListener('pointerleave', leave);
          cleanups.push(() => {
            leave();
            button.removeEventListener('pointerenter', enter);
            button.removeEventListener('pointermove', move);
            button.removeEventListener('pointerleave', leave);
          });
        });
      }
      measure();
      if (root.querySelector('dialog[open]')) lenis?.stop();

      dispose = () => {
        window.cancelAnimationFrame(frame);
        window.removeEventListener('scroll', schedule);
        window.removeEventListener('resize', measure);
        window.removeEventListener('portfolio:modal', onModal);
        mutationObserver?.disconnect();
        resizeObserver.disconnect();
        heroObserver.disconnect();
        revealObserver?.disconnect();
        animations.forEach(animation => animation.cancel());
        targets.forEach(target => { delete target.dataset.reveal; });
        cleanups.forEach(cleanup => cleanup());
        if (portrait) portrait.style.translate = '';
        badges.forEach(badge => { badge.style.translate = ''; });
        root.classList.remove('motion-ready');
        setSmoothScroller(null);
        lenis?.destroy();
      };
    };
    setup();
    reducedMotion.addEventListener('change', setup);
    finePointer.addEventListener('change', setup);
    return () => {
      dispose();
      reducedMotion.removeEventListener('change', setup);
      finePointer.removeEventListener('change', setup);
    };
  }, [appRef, progressRef]);
}
