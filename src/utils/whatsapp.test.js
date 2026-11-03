import assert from 'node:assert/strict';
import { test } from 'node:test';
import { buildWhatsAppUrl } from './whatsapp.js';

const valid = { name: 'Visitor', email: 'visitor@example.com', subject: 'Website', message: 'I would like to discuss a project.' };
const phone = '+91 63852 57541';

test('WhatsApp opens the configured international number with every field', () => {
  const url = new URL(buildWhatsAppUrl(valid, phone));
  assert.equal(url.origin, 'https://wa.me');
  assert.equal(url.pathname, '/916385257541');
  const message = url.searchParams.get('text');
  for (const value of Object.values(valid)) assert.ok(message.includes(value));
  assert.ok(message.includes('Name: Visitor\nEmail: visitor@example.com\nSubject: Website'));
});

test('optional subject is omitted without undefined values', () => {
  const message = new URL(buildWhatsAppUrl({ ...valid, subject: '' }, phone)).searchParams.get('text');
  assert.ok(!message.includes('Subject:'));
  assert.ok(!message.includes('undefined'));
});

test('Tamil, emoji, newlines, and URL characters survive encoding', () => {
  const message = 'வணக்கம் 👋\nReact & AI + Cloud? #project / 100%';
  const url = new URL(buildWhatsAppUrl({ ...valid, message }, phone));
  assert.ok(url.searchParams.get('text').endsWith(message));
  assert.deepEqual([...url.searchParams.keys()], ['text']);
});

test('fields are trimmed before creating the draft', () => {
  const url = buildWhatsAppUrl({ ...valid, name: '  Visitor  ', email: ' visitor@example.com ', message: '  Hello  ' }, phone);
  const message = new URL(url).searchParams.get('text');
  assert.ok(message.includes('Name: Visitor\n'));
  assert.ok(message.endsWith('Hello'));
});

test('empty and whitespace-only required fields are rejected', () => {
  for (const field of ['name', 'email', 'message']) {
    for (const value of ['', '   ']) {
      assert.throws(() => buildWhatsAppUrl({ ...valid, [field]: value }, phone), /fill in/);
    }
  }
});

test('invalid email addresses are rejected', () => {
  for (const email of ['invalid', 'a@@example.com', 'visitor@', 'visitor @example.com']) {
    assert.throws(() => buildWhatsAppUrl({ ...valid, email }, phone), /valid email/);
  }
});

test('invalid destination numbers cannot create a WhatsApp link', () => {
  for (const number of ['', '123', '0000000000', '1234567890123456']) {
    assert.throws(() => buildWhatsAppUrl(valid, number), /unavailable/);
  }
});
