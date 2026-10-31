const fs = require('fs');

async function check() {
  const res = await fetch('https://via-ai.co/', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Language': 'ar,en-US;q=0.9,en;q=0.8'
    }
  });

  console.log('Status:', res.status, res.statusText);
  const html = await res.text();
  fs.writeFileSync('via_ai_co.html', html, 'utf8');
  console.log('Saved via_ai_co.html (bytes:', html.length, ')');

  // Check title
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  console.log('Title:', titleMatch ? titleMatch[1] : 'No title');

  // Check meta description
  const metaDesc = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i);
  console.log('Description:', metaDesc ? metaDesc[1] : 'No desc');

  // Find all script sources
  const scriptRegex = /<script[^>]+src=["']([^"']+)["']/gi;
  let sMatch;
  const scripts = [];
  while ((sMatch = scriptRegex.exec(html)) !== null) {
    scripts.push(sMatch[1]);
  }
  console.log('Scripts found:', scripts);

  // Find all links (css, icons, fonts)
  const linkRegex = /<link[^>]+href=["']([^"']+)["'][^>]*>/gi;
  let lMatch;
  const links = [];
  while ((lMatch = linkRegex.exec(html)) !== null) {
    links.push(lMatch[1]);
  }
  console.log('Links found:', links.slice(0, 15));

  // Search for media: video, lottie, spline, 3d, gltf, glb, canvas, svg
  const mediaTags = [...html.matchAll(/<(video|canvas|iframe|img|source)[^>]+>/gi)].map(m => m[0]);
  console.log('Media tags count:', mediaTags.length);
  mediaTags.slice(0, 20).forEach((t, i) => console.log(`Media ${i + 1}:`, t));

  // Check for keywords in entire HTML
  ['spline', 'three', 'avatar', 'robot', 'canvas', 'model', 'glb', 'gltf', 'video', 'webm', 'mp4', 'lottie', 'framer', 'gsap', 'lenis', 'locomotive', 'next', 'nuxt'].forEach(kw => {
    const re = new RegExp(kw, 'gi');
    const matches = html.match(re);
    if (matches) console.log(`Keyword [${kw}]: ${matches.length} matches`);
  });
}

check().catch(console.error);
