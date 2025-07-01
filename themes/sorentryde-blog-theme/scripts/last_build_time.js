const fs = require('fs');
const path = require('path');

hexo.extend.helper.register('last_build_time', function() {
  const publicDir = path.join(hexo.base_dir, 'public', 'index.html');
  try {
    const stats = fs.statSync(publicDir);
    // More readable format: "July 1, 2025, 14:30"
    return this.date(stats.mtime, 'MMMM D, YYYY, HH:mm');
  } catch (e) {
    return '';
  }
});