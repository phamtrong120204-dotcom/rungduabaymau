const fs = require('fs');
const beautify = require('js-beautify').html;
const file = 'd:\\rừng dừa bảy mẫu\\abc.html';

if (!fs.existsSync(file)) {
  console.error('File not found:', file);
  process.exit(1);
}

let content = fs.readFileSync(file, 'utf8');
// ensure DOCTYPE
if (!/^\s*<!doctype/i.test(content)) {
  content = '<!DOCTYPE html>\n' + content;
}

const formatted = beautify(content, {
  indent_size: 2,
  wrap_line_length: 120,
  max_preserve_newlines: 2,
  preserve_newlines: true,
  end_with_newline: true,
  unformatted: ['code', 'pre', 'svg', 'path']
});

fs.writeFileSync(file, formatted, 'utf8');
console.log('Formatted:', file);
