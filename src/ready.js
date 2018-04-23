import { removeClass } from 'dom-lib';

export function loadJsFile(url, callback) {
  var s = document.createElement('script'),
    head = document.getElementsByTagName('head')[0];
  s.type = 'text/javascript';
  //注意服务器返回的JS的编码需与这里的设置一致
  s.charset = 'utf-8';
  s.src = url;
  s.onload = () => {
    callback && callback();
  };
  head.insertBefore(s, head.firstChild);
  return s;
}

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
