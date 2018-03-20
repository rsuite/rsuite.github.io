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


const isIE = !!navigator.userAgent.match(/MSIE/);
const filter = [];

/**
 * polyfill & es6-shim
 */
filter.push(new Promise((resolve, reject) => {

  if (!isIE) {
    return resolve();
  }

  let count = 0;
  const files = [
    'http://cdn.bootcss.com/es5-shim/4.5.9/es5-shim.min.js',
    'http://cdn.bootcss.com/es5-shim/4.5.9/es5-sham.min.js',
    'http://cdn.bootcss.com/es6-shim/0.35.1/es6-shim.min.js',
    'http://cdn.bootcss.com/es6-shim/0.35.1/es6-sham.min.js'
  ];
  //异步加载CSS文件
  files.map((file) => {
    loadJsFile(file, () => {
      count++;
      if (count === files.length) {
        resolve();
      }
    });
  });

}));

export default function ready(callback) {
  Promise.all(filter).then(values => {
    callback(values);
  });
}
