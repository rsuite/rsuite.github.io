import React from 'react';
import { Button } from 'rsuite';

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
    if (DEPLOY_ENV === 'gitee') {
      return null;
    }

    const { theme, appearance, ...rest } = this.props;
    return (
      <Button
        {...rest}
        appearance={appearance}
        onClick={this.handleChangeLanguage}
      >
        {theme === 'dark' ? 'Light' : 'Dark'}
      </Button>
    );
  }
}

export default ThemeSwitchButton;
