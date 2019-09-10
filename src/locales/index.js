import en from './en-US';
import zh from './zh-CN';

const dict = {
  en: en,
  zh: zh
};

export function getDict(locale) {
  const localeKey = localStorage.getItem('localeKey');
  const key = locale ? locale : localeKey;

  if (key === 'en' || key === 'en-US') {
    return en;
  }

  return zh;
}

export default dict;
