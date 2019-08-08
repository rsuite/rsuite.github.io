import React from 'react';
import { IconButton, Icon } from 'rsuite';

class ThemeSwitchButton extends React.Component {
  static defaultProps = {
    appearance: 'subtle'
  };
  constructor(props) {
    super(props);
  }
  handleChangeLanguage = () => {
    const { theme, onClick } = this.props;
    const isDark = theme === 'dark';
    localStorage.setItem('themeKey', isDark ? 'light' : 'dark');
    onClick && onClick();
  };
  render() {
    const { theme, appearance, ...rest } = this.props;
    return <Icon icon="moon-o" size="lg" />;
  }
}

export default ThemeSwitchButton;
