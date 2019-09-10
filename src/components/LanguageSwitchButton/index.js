import React from 'react';
import classnames from 'classnames';
import { Button } from 'rsuite';

class LanguageSwitchButton extends React.Component {
  static defaultProps = {
    appearance: 'subtle'
  };
  constructor(props) {
    super(props);
  }
  handleChangeLanguage = () => {
    const { language, onClick } = this.props;
    const isEN = language === 'en-US';
    localStorage.setItem('localeKey', isEN ? 'zh-CN' : 'en-US');
    onClick && onClick();
  };
  render() {
    if (DEPLOY_ENV === 'gitee') {
      return null;
    }

    const { language, appearance, className, ...rest } = this.props;
    return (
      <Button
        {...rest}
        className={classnames('language-switch-button', className)}
        appearance={appearance}
        onClick={this.handleChangeLanguage}
      >
        {language === 'en-US' ? '中文' : 'EN'}
      </Button>
    );
  }
}

export default LanguageSwitchButton;
