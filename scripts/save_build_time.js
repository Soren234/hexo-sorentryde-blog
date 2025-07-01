const fs = require('fs');
const path = require('path');

hexo.on('generateBefore', () => {
  const buildTime = new Date();
  const publicDir = hexo.public_dir;
  const buildTimePath = path.join(publicDir, 'build_time.json');

  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(buildTimePath, JSON.stringify({ buildTime }));
});