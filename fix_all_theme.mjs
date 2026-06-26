import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

walkDir(path.resolve(process.cwd(), 'src'), function(filePath) {
  if (!filePath.endsWith('.tsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // Opacity-based utilities
  content = content.replace(/bg-white\//g, 'bg-foreground/');
  content = content.replace(/border-white\//g, 'border-foreground/');
  content = content.replace(/text-white\//g, 'text-foreground/');
  content = content.replace(/hover:bg-white\//g, 'hover:bg-foreground/');
  content = content.replace(/hover:text-white\//g, 'hover:text-foreground/');
  content = content.replace(/border-t-white\//g, 'border-t-foreground/');
  
  // For solid text-white, avoid replacing if inside a colored button
  const lines = content.split('\n');
  const solidBgRegex = /bg-(blue|red|emerald|orange|purple|black|gradient|#)/;
  
  for (let i = 0; i < lines.length; i++) {
    if (!solidBgRegex.test(lines[i])) {
      lines[i] = lines[i].replace(/text-white(?![\/\-])/g, 'text-foreground');
      lines[i] = lines[i].replace(/hover:text-white(?![\/\-])/g, 'hover:text-foreground');
    }
  }
  
  content = lines.join('\n');
  
  if (original !== content) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
  }
});
