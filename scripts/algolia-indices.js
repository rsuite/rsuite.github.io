const util = require('util');
const fs = require('fs');
const _ = require('lodash');
const components = require('../src/fixtures/components.json');

const items = components.filter(item => !item.group && item.id !== 'overview');
const readFile = util.promisify(fs.readFile);

async function getIndices(locale) {
  const indices = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const path = locale === 'zh' ? item.id : `${item.id}/en`;
    const doc = await readFile(`./src/components/${path}/index.md`, 'utf8');
    const text = doc.match(/(?<=#[\S\ ]+\n\n)[\S\ ]+/gi);
    let content = '';

    if (_.isArray(text)) {
      content = text[0];
    }

    indices.push({
      component: item.id,
      title: locale === 'zh' ? `${item.name} ${item.title}` : item.name,
      anchor: item.id,
      content
    });
  }

  return indices;
}

const { ALGOLIA_APP_ID, ALGOLIA_SECRET } = process.env;

if (ALGOLIA_APP_ID && ALGOLIA_SECRET) {
  const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SECRET);
  function uploadIndices(locale = zh) {
    getIndices(locale).then(indices => {
      const reposIndex = client.initIndex(`rsuite-${locale}`);
      reposIndex.clearIndex();
      reposIndex.saveObjects(indices);
    });
  }

  uploadIndices('zh');
  uploadIndices('en');
}
