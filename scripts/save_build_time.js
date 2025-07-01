const fs = require('fs');
const path = require('path');

hexo.on('generateBefore', () => {
  const buildTime = new Date();
  const buildTimePath = path.join(hexo.public_dir, 'build_time.json');
  fs.writeFileSync(buildTimePath, JSON.stringify({ buildTime }));
});