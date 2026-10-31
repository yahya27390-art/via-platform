const fs = require('fs');
const html = fs.readFileSync('via_ai_co.html', 'utf8');

// 1. Navigation items
const navMatch = html.match(/<nav[\s\S]*?<\/nav>/i);
console.log('--- NAV ---');
if (navMatch) {
  const links = [...navMatch[0].matchAll(/<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)];
  links.forEach(l => console.log('Link:', l[1], 'Text:', l[2].replace(/<[^>]+>/g, '').trim()));
}

// 2. Headings and paragraphs in order
console.log('--- CONTENT CHUNKS ---');
const elements = [...html.matchAll(/<(h1|h2|h3|p|button|a)\b[^>]*>([\s\S]*?)<\/\1>/gi)];
const textFlow = elements
  .map(m => ({ tag: m[1], text: m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() }))
  .filter(item => item.text.length > 2 && !item.text.includes('{') && !item.text.includes('function'));

console.log('Total text elements:', textFlow.length);
textFlow.slice(45).forEach((t, i) => console.log(`[${i + 45}] [${t.tag}] ${t.text}`));

