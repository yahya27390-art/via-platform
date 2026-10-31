/**
 * VIA AI Platform - All-in-One Startup Engine
 * Starts the isolated PGlite database, backend REST API, and Vite frontend.
 * 100% independent from all other systems.
 */

const { start: startApiServer } = require('./server/api.cjs');
const { spawn } = require('child_process');
const path = require('path');

async function main() {
  console.log('========================================================');
  console.log('⚡ [VIA AI Platform] Initializing Isolated Stack');
  console.log('========================================================');

  // 1. Start isolated database & backend API
  await startApiServer();

  // 2. Start frontend dev server
  const viteCmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';
  console.log('📡 Starting Vite Frontend Server on port 5174...');
  
  const frontend = spawn(viteCmd, ['vite', '--port', '5174', '--host'], {
    cwd: path.resolve(__dirname),
    stdio: 'inherit'
  });

  frontend.on('close', (code) => {
    console.log(`Frontend exited with code ${code}`);
    process.exit(code);
  });
}

main().catch(console.error);

