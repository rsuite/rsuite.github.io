import { removeClass } from 'dom-lib';
import loadCssFile from '@/utils/loadCssFile';

const shortKey = localeKey => {
  try {
    return localeKey.match(/(\S+)-/)[1];
  } catch (error) {
    return 'en';
  }
};

const filter = [];

/**
 * Determine the current locale and switch to the corresponding path.
 */
filter.push(
  new Promise((resolve, reject) => {
    if (DEPLOY_ENV === 'gitee') {
      resolve();
      return;
    }
    const localePathName = !!~location.href.indexOf('/en/') ? 'en' : 'zh';
    const localeKey = localStorage.getItem('localeKey') || 'en-US';
    const isHomePage =
      location.pathname === '/' || location.pathname === '/en/';

    if (localeKey && isHomePage && shortKey(localeKey) !== localePathName) {
      location.href = [
        location.origin,
        shortKey(localeKey) === 'en' ? 'en/' : ''
      ].join('/');
      return;
    }
    resolve();
  }),
  loadCssFile('/resources/css/theme-default.css', 'theme-default')
);

export default function ready(callback) {
  Promise.all(filter).then(values => {
    callback(values, () => {
      removeClass(document.getElementById('body'), 'body-loading');
    });
  });
}
