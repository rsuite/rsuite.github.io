import { removeClass } from 'dom-lib';
const filter = [];
filter.push(
  new Promise((resolve, reject) => {
    resolve();
  })
);

export default function ready(callback) {
  Promise.all(filter).then(values => {
    callback(values);
    removeClass(document.getElementById('body'), 'body-loading');
  });
}
