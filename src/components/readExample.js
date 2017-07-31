import fs from 'fs';

export default function (name) {
  console.log(`${__dirname}/${name}.js`);
  return fs.readFileSync(`${__dirname}/${name}.js`, 'utf8');
}