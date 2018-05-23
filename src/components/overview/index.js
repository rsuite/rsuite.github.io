import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import menu from '../../fixtures/menu';
import createComponentExample from '../createComponentExample';

const context = require('./index.md');
const examples = [];
const components = menu[1].children.filter(item => item.id !== 'overview');

export default locale => {
  const ComponentExample = createComponentExample({ id: 'overview' })(locale);
  const localePath = locale === 'zh' ? '/' : '/en/';
  return () => {
    return (
      <div>
        <ComponentExample />
        <div className="component-overview">
          <ul>
            {components.map(item => {
              if (item.group) {
                return (
                  <li className="title" key={item.id}>
                    <h2 id={item.name}>{item.name}</h2>
                  </li>
                );
              } else {
                return (
                  <li key={item.id}>
                    <Link to={`${localePath}components/${item.id}`} className="header">
                      {item.name}
                    </Link>
                    <ul className="content">
                      {item.components
                        ? item.components.map(componentName => (
                            <li key={componentName}>
                              <span className="name">
                                {'<'}
                                {componentName}
                                {'>'}
                              </span>
                            </li>
                          ))
                        : null}
                    </ul>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    );
  };
};
