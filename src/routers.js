import React from 'react';
import { Route } from 'react-router';
import Frame from './fixtures/Frame';
import { getMenu } from './fixtures/menu';
import { getDict } from './locales';
import { setTitle } from './title';

export const createRouters = (locale, onEnter, onEntered) => {
  const menu = getMenu(getDict(locale));

  return (
    <React.Fragment>
      <Route path="components" component={Frame}>
        <Route
          path="overview"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/overview')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Overview - components');
          }}
        />

        <Route
          path="button"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/button')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Button - components');
          }}
        />

        <Route
          path="icon"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/icon')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Icon - components');
          }}
        />

        <Route
          path="tooltip"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/tooltip')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Tooltip - components');
          }}
        />

        <Route
          path="popover"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/popover')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Popover - components');
          }}
        />

        <Route
          path="alert"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/alert')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Alert - components');
          }}
        />

        <Route
          path="notification"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/notification')[
                'default'
                ];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Notification - components');
          }}
        />

        <Route
          path="message"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/message')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Message - components');
          }}
        />

        <Route
          path="loader"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/loader')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Loader - components');
          }}
        />

        <Route
          path="modal"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/modal')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Modal - components');
          }}
        />

        <Route
          path="drawer"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/drawer')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Drawer - components');
          }}
        />

        <Route
          path="divider"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/divider')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Divider - components');
          }}
        />

        <Route
          path="progress"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/progress')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Progress - components');
          }}
        />

        <Route
          path="placeholder"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/placeholder')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Placeholder - components');
          }}
        />

        <Route
          path="avatar"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/avatar')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Avatar - components');
          }}
        />

        <Route
          path="dropdown"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/dropdown')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Dropdown - components');
          }}
        />

        <Route
          path="nav"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/nav')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Nav - components');
          }}
        />

        <Route
          path="navbar"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/navbar')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Navbar - components');
          }}
        />

        <Route
          path="sidenav"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/sidenav')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Sidenav - components');
          }}
        />

        <Route
          path="steps"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/steps')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Steps - components');
          }}
        />

        <Route
          path="pagination"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/pagination')[
                'default'
                ];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Pagination - components');
          }}
        />

        <Route
          path="breadcrumb"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/breadcrumb')[
                'default'
                ];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Breadcrumb - components');
          }}
        />

        <Route
          path="form"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/form')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Form - components');
          }}
        />

        <Route
          path="checkbox"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/checkbox')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Checkbox - components');
          }}
        />

        <Route
          path="radio"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/radio')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Radio - components');
          }}
        />

        <Route
          path="input"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/input')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Input - components');
          }}
        />

        <Route
          path="input-number"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/input-number')[
                'default'
                ];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('InputNumber - components');
          }}
        />

        <Route
          path="auto-complete"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/auto-complete')[
                'default'
                ];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('AutoComplete - components');
          }}
        />

        <Route
          path="toggle"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/toggle')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Toggle - components');
          }}
        />

        <Route
          path="input-picker"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/input-picker')[
                'default'
                ];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('InputPicker - components');
          }}
        />

        <Route
          path="tag-picker"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/tag-picker')[
                'default'
                ];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('TagPicker - components');
          }}
        />

        <Route
          path="select-picker"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/select-picker')[
                'default'
                ];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('SelectPicker - components');
          }}
        />

        <Route
          path="check-picker"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/check-picker')[
                'default'
                ];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('CheckPicker - components');
          }}
        />

        <Route
          path="tree-picker"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/tree-picker')[
                'default'
                ];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('TreePicker - components');
          }}
        />

        <Route
          path="check-tree-picker"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/check-tree-picker')[
                'default'
                ];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('CheckTreePicker - components');
          }}
        />

        <Route
          path="cascader"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/cascader')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Cascader - components');
          }}
        />

        <Route
          path="multi-cascader"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/multi-cascader')[
                'default'
                ];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('MultiCascader - components');
          }}
        />

        <Route
          path="date-picker"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/date-picker')[
                'default'
                ];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('DatePicker - components');
          }}
        />

        <Route
          path="date-range-picker"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/date-range-picker')[
                'default'
                ];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('DateRangePicker - components');
          }}
        />

        <Route
          path="slider"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/slider')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Slider - components');
          }}
        />

        <Route
          path="uploader"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/uploader')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Uploader - components');
          }}
        />

        <Route
          path="table"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/table')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Table - components');
          }}
        />

        <Route
          path="tree"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/tree')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Tree - components');
          }}
        />

        <Route
          path="check-tree"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/check-tree')[
                'default'
                ];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('CheckTree - components');
          }}
        />

        <Route
          path="panel"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/panel')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Panel - components');
          }}
        />

        <Route
          path="timeline"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/timeline')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Timeline - components');
          }}
        />

        <Route
          path="tag"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/tag')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Tag - components');
          }}
        />

        <Route
          path="list"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/list')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('List - components');
          }}
        />

        <Route
          path="grid"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/grid')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Grid - components');
          }}
        />

        <Route
          path="flexbox-grid"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/flexbox-grid')[
                'default'
                ];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('FlexboxGrid - components');
          }}
        />

        <Route
          path="container"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/container')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Container - components');
          }}
        />

        <Route
          path="schema"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/schema')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Schema - components');
          }}
        />

        <Route
          path="animation"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/animation')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Animation - components');
          }}
        />

        <Route
          path="portal"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/portal')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Portal - components');
          }}
        />

        <Route
          path="dom-helper"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./components/dom-helper')[
                'default'
                ];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('DOMHelper - components');
          }}
        />
      </Route>

      <Route path="tools" component={Frame}>
        <Route
          path="palette"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./tools/palette')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Palette - tools');
          }}
        />

        <Route
          path="icons"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./tools/icons')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Icons - tools');
          }}
        />
      </Route>

      <Route path="guide" component={Frame}>
        <Route
          path="introduction"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./guide/introduction')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Introduction - guide');
          }}
        />

        <Route
          path="usage"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./guide/usage')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Usage - guide');
          }}
        />

        <Route
          path="use-with-create-react-app"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./guide/use-with-create-react-app')[
                'default'
                ];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Use in create-react-app - guide');
          }}
        />

        <Route
          path="themes"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./guide/themes')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Customize theme - guide');
          }}
        />

        <Route
          path="intl"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./guide/intl')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Internationalization - guide');
          }}
        />

        <Route
          path="flow"
          getComponents={(location, callback) => {
            onEnter && onEnter();
            require.ensure([], require => {
              const getComponent = require('./guide/flow')['default'];
              const component = getComponent(locale);
              callback && callback(null, component);
              onEntered && onEntered();
            });
          }}
          onEnter={() => {
            setTitle('Flow - guide');
          }}
        />
      </Route>

      <Route
        path="extensions"
        getComponents={(location, callback) => {
          onEnter && onEnter();
          require.ensure([], require => {
            const getComponent = require('./extensions')['default'];
            const component = getComponent(locale);
            callback && callback(null, component);
            onEntered && onEntered();
          });
        }}
        onEnter={() => {
          setTitle('Extensions');
        }}
      />
    </React.Fragment>
  );
};
