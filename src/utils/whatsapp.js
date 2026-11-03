export function buildWhatsAppUrl(formData, phone) {
  const name = String(formData.name || '').trim();
  const email = String(formData.email || '').trim();
  const subject = String(formData.subject || '').trim();
  const message = String(formData.message || '').trim();
  const number = String(phone).replace(/\D/g, '');

  if (!name || !email || !message) {
    throw new Error('Please fill in your name, email, and message.');
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('Please enter a valid email address.');
  }
  if (!/^[1-9]\d{6,14}$/.test(number)) {
    throw new Error('WhatsApp is unavailable. Please use the email link instead.');
  }

  const text = [
    'Hi Senthilkumar, I am contacting you through your portfolio.',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    ...(subject ? [`Subject: ${subject}`] : []),
    '',
    'Message:',
    message,
  ].join('\n');

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
