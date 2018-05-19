import React from 'react';
import { Button } from 'rsuite';

class LanguageSwitchButton extends React.Component {
  static defaultProps = {
    appearance: 'subtle'
  };
  constructor(props) {
    super(props);
  }
  handleChangeLanguage = () => {
    const { language, appearance, onClick } = this.props;
    const isEN = language === 'en-US';
    localStorage.setItem('localeKey', isEN ? 'zh-CN' : 'en-US');
    onClick && onClick();
  };
  render() {
    const { language, appearance, ...rest } = this.props;
    return (
      <Button {...rest} appearance={appearance} onClick={this.handleChangeLanguage}>
        {language === 'en-US' ? '中文' : 'EN'}
      </Button>
    );
  }
}

export default LanguageSwitchButton;
