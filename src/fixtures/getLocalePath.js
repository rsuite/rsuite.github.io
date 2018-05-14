function getLocalePath(callback) {
  return locale => {
    const localePath = locale === 'en' ? `${name}/en/` : `${name}/`;
    return callback(localePath);
  };
}

export default getLocalePath;
