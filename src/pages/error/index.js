import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import getLocalePath from '@/utils/getLocalePath';

export default getLocalePath(localePath => {
  class ErrorPage extends React.Component {
    static contextTypes = {
      locale: PropTypes.object
    };

    constructor(props) {
      super(props);
    }

    render() {
      const { locale } = this.context;
      return (
        <div className="error-wrapper">
          <img alt="404" src="/resources/images/error-404.svg" />
          <h2>{locale.common.notFount}</h2>
          <div className="nav-help">
            <Link to={localePath}>{locale.common.goHomePage}</Link>
          </div>
        </div>
      );
    }
  }

  return ErrorPage;
});
