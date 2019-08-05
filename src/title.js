import { getDict } from './locales';

const dist = getDict();
const TITLE = 'React Suite | RSUITE';

export const pageview = title => {
  window._ha &&
    _ha('send', 'pageview', {
      title: title || document.title,
      url: document.location.href
    });
};

export const setTitle = title => {
  const newTitle = `${title} | ${TITLE}`;
  document.title = newTitle;
  pageview(newTitle);
};

export const defateTilte = () => {
  const newTitle = `${TITLE} | ${dist.common.resume}`;
  document.title = newTitle;
  pageview(newTitle);
};
