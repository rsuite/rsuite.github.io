export const THEME_KEY = 'theme', THEME_DEFAULT = 'default', DIRECTION_KEY = 'direction', DIRECTION_DEFAULT = 'ltr'

export const getThemeId = (themeName, direction) => `theme-${themeName}-${direction}`;
export const getThemeCssPath = (themeName, direction) => `/resources/css/theme-${themeName}${direction === 'rtl' ? '.rtl' : ''}.css`;

export const readThemeName = () => localStorage.getItem(THEME_KEY) || THEME_DEFAULT;
export const writeThemeName = (themeName) => localStorage.setItem(THEME_KEY, themeName);

export const readDirection = () => localStorage.getItem(DIRECTION_KEY) || DIRECTION_DEFAULT;
export const writeDirection = (dir) => localStorage.setItem(DIRECTION_KEY, dir);

export const readTheme = () => [readThemeName(), readDirection()]
export const writeTheme = (themeName, direction) => {
    writeThemeName(themeName);
    writeDirection(direction);
}