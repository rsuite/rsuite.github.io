function getLocalePath(callback) {
  return locale => {
    const localePath = locale === 'en' ? '/en/' : '/';
    return callback(localePath);
  };
}

export default getLocalePath;
