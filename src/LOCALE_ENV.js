export const localePath = process.env.LOCALE_ENV === 'en' ? '/en/' : '/';

export default process.env.LOCALE_ENV || '';
