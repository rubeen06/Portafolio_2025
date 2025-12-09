const fs = require('fs'), glob = require('glob');

glob('src/**/*.{ts,tsx}', (err, files) => {
  if (err) throw err;
  files.forEach(f => {
    let s = fs.readFileSync(f, 'utf8');

    // Remueve @<version> dentro de imports
    let t = s.replace(
      /(['"])(@?[\w\-./]+?)(?:@\d+(?:\.\d+)*(?:-[^'"]*)?)\1/g,
      '$1$2$1'
    );

    if (t !== s) {
      fs.writeFileSync(f, t, 'utf8');
      console.log('Fixed imports in', f);
    }
  });
});
