import assert from 'node:assert/strict';
import { afterEach, test } from 'node:test';
import { scrollToSection, setSmoothScroller } from './scroll.js';

afterEach(() => {
  setSmoothScroller(null);
  delete globalThis.window;
  delete globalThis.document;
});

function setup({ reduced = false, targetTop = 500, exists = true } = {}) {
  const calls = [];
  const target = { getBoundingClientRect: () => ({ top: targetTop }) };
  globalThis.document = {
    getElementById: id => exists && id === 'projects' ? target : null,
    querySelector: () => ({ offsetHeight: 76 }),
  };
  globalThis.window = {
    scrollY: 200,
    matchMedia: () => ({ matches: reduced }),
    scrollTo: options => calls.push(options),
  };
  return { calls, target };
}

test('native navigation clears the sticky navbar', () => {
  const { calls } = setup();
  scrollToSection('#projects');
  assert.deepEqual(calls, [{ top: 608, behavior: 'smooth' }]);
});

test('smooth navigation uses the same header offset', () => {
  const { calls, target } = setup();
  const smoothCalls = [];
  setSmoothScroller({ scrollTo: (...args) => smoothCalls.push(args) });
  scrollToSection('projects');
  assert.deepEqual(smoothCalls, [[target, { offset: -92, duration: 1.05 }]]);
  assert.equal(calls.length, 0);
});

test('reduced motion bypasses inertia and scrolls instantly', () => {
  const { calls } = setup({ reduced: true });
  setSmoothScroller({ scrollTo: () => assert.fail('Inertia must be bypassed') });
  scrollToSection('projects');
  assert.deepEqual(calls, [{ top: 608, behavior: 'instant' }]);
});

test('navigation near the page start clamps to zero', () => {
  const { calls } = setup({ targetTop: -200 });
  scrollToSection('projects');
  assert.equal(calls[0].top, 0);
});

test('missing sections leave the page position unchanged', () => {
  const { calls } = setup({ exists: false });
  scrollToSection('projects');
  assert.equal(calls.length, 0);
});
