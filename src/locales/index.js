import en from './en-US';
import zh from './zh-CN';

const dict = {
  en: en,
  zh: zh
};

export function getDict(locale) {
  if (locale === 'en') {
    return en;
  }
  return zh;
}

export default dict;
