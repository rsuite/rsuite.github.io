import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';
import { Icon, Navbar, Nav } from 'rsuite';
import LanguageSwitchButton from '@/components/LanguageSwitchButton';
import ThemeSwitchButton from '@/components/ThemeSwitchButton';
import Logo from '@/components/Logo';

const Header = props => {
  const { localePath, locale, ...rest } = props;

  return (
    <Navbar {...rest} className="header" appearance="subtle">
      <Navbar.Header>
        <Logo width={26} className="logo-sm" />
      </Navbar.Header>
      <Navbar.Body>
        <Nav>
          <Nav.Item
            className="link-spread"
            componentClass={Link}
            to={`${localePath}guide/introduction`}
          >
            {_.get(locale, 'common.guide')}
          </Nav.Item>

          <Nav.Item
            className="link-spread"
            componentClass={Link}
            to={`${localePath}components/overview`}
          >
            {_.get(locale, 'common.components')}
          </Nav.Item>

          <Nav.Item
            className="link-spread"
            componentClass={Link}
            to={`${localePath}tools/palette`}
          >
            {_.get(locale, 'common.tools')}
          </Nav.Item>

          <Nav.Item
            className="link-spread"
            componentClass={Link}
            to={`${localePath}extensions`}
          >
            {_.get(locale, 'common.extension')}
          </Nav.Item>

          <Nav.Item
            className="link-spread"
            componentClass={'a'}
            href="/design/index.html"
            target="_blank"
          >
            {_.get(locale, 'common.design')}
            <Icon icon="external-link-square" className="external-link" />
          </Nav.Item>
        </Nav>
        <Nav pullRight>
          <Nav.Item
            componentClass={LanguageSwitchButton}
            language={_.get(locale, 'id')}
            href={localePath}
            appearance={'link'}
            className="btn-switch"
            title="Change language"
          />

          <Nav.Item className="btn-switch" title="Toggle light/dark theme">
            <ThemeSwitchButton />
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default Header;
