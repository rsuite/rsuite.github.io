import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import { menu } from '@/utils/getMenu';
import createComponentExample from '../createComponentExample';

const context = require('./index.md');
const examples = [];
const components = menu[1].children.filter(item => item.id !== 'overview');

const Item = ({ name, isComponent }) => (
  <li>
    <span className="name">{isComponent ? `<${name}>` : name}</span>
  </li>
);

export default locale => {
  const ComponentExample = createComponentExample({ id: 'overview' })(locale);
  const localePath = locale === 'zh' ? '/' : '/en/';
  return () => {
    return (
      <ComponentExample>
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
                    <Link
                      to={`${localePath}components/${item.id}`}
                      className="header"
                    >
                      {item.name}
                    </Link>
                    <ul className="content">
                      {item.components
                        ? item.components.map(name => (
                            <Item name={name} key={name} isComponent />
                          ))
                        : null}

                      {item.apis
                        ? item.apis.map(name => <Item name={name} key={name} />)
                        : null}
                    </ul>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </ComponentExample>
    );
  };
};
