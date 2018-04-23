/**
 * 解析 design/index.html 中的导航的 hash ，使之与 menu 中 components.json 的 hash 对应。
 */
const fs = require('fs');
const { promisify } = require('util');
const _ = require('lodash');
const readfile = filePath => promisify(fs.readFile)(filePath, 'utf8');

const DESIGN_INDEX_PATH = './public/design/index.html';
const COMPONENTS_JSON_PATH = './src/fixtures/components.json';

(async function() {
  const designHtmlData = await readfile(DESIGN_INDEX_PATH);
  const componentsData = JSON.parse(await readfile(COMPONENTS_JSON_PATH));
  const jsonData = JSON.parse(/\$\(function\(\)\{ SMApp\((.*)\) \}\)\;/.exec(designHtmlData)[1]);
  const artboadrsData = _.get(jsonData, 'artboards').map((data, index) => ({
    ...data,
    name: data.name.toLowerCase(),
    index: `${index}`
  }));
  const artboards = _.keyBy(artboadrsData, 'name');
  componentsData.forEach(obj => {
    const { name } = obj;
    const designHashIndex = _.get(artboards, `${name.toLowerCase()}.index`) || null;
    if (designHashIndex) {
      obj.designHash = `artboard${designHashIndex}`;
    }
  });
  fs.writeFile(COMPONENTS_JSON_PATH, JSON.stringify(componentsData, null, '  '));
})();
