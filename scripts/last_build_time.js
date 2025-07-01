const fs = require('fs');
const path = require('path');

hexo.extend.helper.register('last_build_time', function() {
  const buildTimePath = path.join(hexo.public_dir, 'build_time.json');
  try {
    const data = JSON.parse(fs.readFileSync(buildTimePath));
    return this.date(new Date(data.buildTime), 'MMMM D, YYYY, HH:mm');
  } catch (e) {
    return '';
  }
});