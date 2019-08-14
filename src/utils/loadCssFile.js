export default function loadCssFile(url, id = 'default') {
  return new Promise(resolve => {
    const container = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    link.onload = function() {
      resolve();
    };
    container.appendChild(link);
  });
}
