const TITLE = 'RSUITE 3 | React Suite';

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
  const newTitle = `${TITLE} |  一套 React 的 UI 组件库`;
  document.title = newTitle;
  pageview(newTitle);
};
