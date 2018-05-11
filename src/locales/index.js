import LOCALE_ENV from '../LOCALE_ENV';
import en from './en-US';
import zh from './zh-CN';

const dict = {
  en: en,
  zh: zh
};

export function getDict() {
  if (LOCALE_ENV === 'en') {
    return en;
  }
  return zh;
}

export default dict;
