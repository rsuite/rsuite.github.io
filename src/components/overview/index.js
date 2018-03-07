import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import ComponentExample from '../ComponentExample';
import menu from '../../fixtures/menu';

const context = require('./index.md');
const examples = [];

const components = _.get(menu, '1.children').filter(item => item.id !== 'overview');

console.log(components);

export default () => {
  return (
    <div>
      <ComponentExample context={context} examples={examples} />
      <div className="component-overview">
        <ul>
          {components.map(item => {
            if (item.group) {
              return (
                <li className="title">
                  <h2 id={item.name} key={item.id}>
                    {item.name}
                  </h2>
                </li>
              );
            } else {
              return (
                <li key={item.id}>
                  <Link to={`/components/${item.id}`}>{item.name}</Link>
                  <ul className="components">
                    {item.components
                      ? item.components.map(com => (
                          <li key={com}>
                            <Link to={`/components/${item.id}#<${com}>`}>
                              {'<'}
                              {com}
                              {'>'}
                            </Link>
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
