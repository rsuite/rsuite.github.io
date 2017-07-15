import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import CodeEditor from './CodeEditor';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/runmode/runmode';
import 'codemirror/mode/jsx/jsx';

import * as RSTable from 'rsuite-table';
import * as RForm from 'rsuite-form';
import * as Schema from 'rsuite-schema';



const RSuiteForm = RForm.Form;
const Field = RForm.Field;
const SchemaModel = Schema.SchemaModel;
const StringType = Schema.StringType;
const ArrayType = Schema.ArrayType;
const Link = require('react-router').Link;
const tableData = require('../componentList');
const Button = require('rsuite/lib/Button').default;
const ButtonToolbar = require('rsuite/lib/ButtonToolbar').default;
const ButtonGroup = require('rsuite/lib/ButtonGroup').default;
const Dropdown = require('rsuite/lib/Dropdown').default;


// Whisper
const Whisper = require('rsuite/lib/Whisper').default;
const Tooltip = require('rsuite/lib/Tooltip').default;
const Popover = require('rsuite/lib/Popover').default;

// Modal
const Modal = require('rsuite/lib/Modal').default;


// Nav
const Nav = require('rsuite/lib/Nav').default;
const Navbar = require('rsuite/lib/Navbar').default;
const Breadcrumb = require('rsuite/lib/Breadcrumb').default;
const Pagination = require('rsuite/lib/Pagination').default;


// Form
const Form = require('rsuite/lib/Form').default;
const FormGroup = require('rsuite/lib/FormGroup').default;
const ControlLabel = require('rsuite/lib/ControlLabel').default;
const FormControl = require('rsuite/lib/FormControl').default;
const HelpBlock = require('rsuite/lib/HelpBlock').default;
const Checkbox = require('rsuite/lib/Checkbox').default;
const CheckboxGroup = require('rsuite/lib/CheckboxGroup').default;
const InputGroup = require('rsuite/lib/InputGroup').default;


const Radio = require('rsuite/lib/Radio').default;
const RadioGroup = require('rsuite/lib/RadioGroup').default;
const IconFont = require('rsuite/lib/IconFont').default;

//Layout
const Header = require('rsuite/lib/Header').default;
const Sidebar = require('rsuite/lib/Sidebar').default;
const Grid = require('rsuite/lib/Grid').default;
const Row = require('rsuite/lib/Row').default;
const Col = require('rsuite/lib/Col').default;
const Table = require('rsuite/lib/Table').default;
const Container = require('rsuite/lib/Container').default;
const Content = require('rsuite/lib/Content').default;
const Panel = require('rsuite/lib/Panel').default;
const PanelGroup = require('rsuite/lib/PanelGroup').default;
const SafeAnchor = require('rsuite/lib/SafeAnchor').default;

const Example = React.createClass({
  propTypes: {
    code: React.PropTypes.string.isRequired,
    renderCode: React.PropTypes.bool,
    id: React.PropTypes.string,
    isBanner: React.PropTypes.bool
  },
  getInitialState: function () {
    return {
      code: this.props.code
    };
  },


  executeCode: function () {

    const mountNode = this.refs.example;
    const originalRender = ReactDOM.render;

    ReactDOM.render = (element) => this._initialExample = element;

    try {

      let code = Babel.transform(this.state.code, {
        presets: ['stage-0', 'react', 'es2015']
      }).code;

      if (this.props.renderCode) {
        ReactDOM.render(<CodeEditor code={code} readOnly={true} />, mountNode);
      } else {

        /* eslint-disable */
        eval(code);
        /* eslint-enable */
      }
    } catch (err) {
      console.log(err);
    } finally {
      ReactDOM.render = originalRender;
    }
  },

  handleCodeChange: function (val) {
    this.setState({ code: val });
    this.executeCode();
  },
  renderExample() {

    let example = (
      <div>{this._initialExample}</div>
    );
    return (
      <div
        className={classNames('doc-example', this.props.exampleClassName)}>
        {example}
      </div>
    );
  },
  render: function () {
    this.executeCode();

    if (this.props.isBanner) {
      return (
        <Col id={this.props.id} className="banner" xsHidden>
          <div className="triangle-left ">
            {this.renderExample()}
          </div>
          <div className="container">
            {this.props.children}
            <div className="typing-wrapper sublime">
              <div className="buttons"></div>
              <CodeEditor
                key="jsx"
                onChange={this.handleCodeChange}
                className="doc-code"
                theme="base16-dark"
                code={this.state.code}
              />
            </div>
          </div>
        </Col>
      );
    }

    return (
      <div className="doc-example-wrapper">
        {this.renderExample()}
        <CodeEditor
          key="jsx"
          onChange={this.handleCodeChange}
          className="doc-code"
          theme="base16-light"
          code={this.state.code}
        />
      </div>
    );
  }
});


export default Example;
