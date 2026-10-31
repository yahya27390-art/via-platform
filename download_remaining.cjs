const fs = require('fs');
const path = require('path');
const html = fs.readFileSync('via_ai_co.html', 'utf8');

const regex = /src=["'](https:\/\/via-ai\.co\/wp-content\/uploads\/[^"']+)["']/gi;
let m;
const urls = new Set();
while ((m = regex.exec(html)) !== null) {
  urls.add(m[1]);
}

console.log('Total uploaded assets found:', urls.size);
urls.forEach(u => console.log(u));
