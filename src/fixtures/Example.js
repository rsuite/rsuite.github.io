
const classNames = require('classnames');
const React = require('react');
const PropTypes = require('prop-types');
const ReactDOM = require('react-dom');
const CodeEditor = require('./CodeEditor');

import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/runmode/runmode';
import 'codemirror/mode/jsx/jsx';

const RSTable = require('rsuite-table');
const Markdown = require('./Markdown');
const Link = require('react-router').Link;
const tableData = require('../componentList');
const Button = require('rsuite/lib/Button').default;
const ButtonToolbar = require('rsuite/lib/ButtonToolbar').default;
const ButtonGroup = require('rsuite/lib/ButtonGroup').default;
const Dropdown = require('rsuite/lib/Dropdown').default;
const Toggle = require('rsuite/lib/Toggle').default;

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


const propTypes = {
  code: PropTypes.string.isRequired,
  renderCode: PropTypes.bool,
  text: PropTypes.node,
  id: PropTypes.string,
  isBanner: PropTypes.bool
};

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: this.props.code,
      showCode: false
    };
  }

  executeCode() {

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

  }

  handleCodeChange = (val) => {
    this.setState({ code: val });
    this.executeCode();
  }

  handleShowCode = () => {
    const showCode = !this.state.showCode;
    this.setState({ showCode });
  }

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
  }

  render() {

    const { text, isBanner } = this.props;
    this.executeCode();

    if (isBanner) {
      return (
        <div className="container">
          <CodeEditor
            key="jsx"
            lineNumbers
            onChange={this.handleCodeChange}
            className="doc-code"
            theme="base16-dark"
            code={this.state.code}
          />
        </div>
      );
    }

    const { showCode } = this.state;

    return (
      <div>
        <Markdown>{text}</Markdown>
        <div className="doc-example-wrapper">
          {this.renderExample()}
          <div className="doc-example-toolbar">

            <Button
              size="xs"
              shape={showCode ? 'primary' : 'default'}
              onClick={this.handleShowCode}
            >
              <IconFont icon="code" /> 代码
            </Button>

          </div>

          <CodeEditor
            lineNumbers
            key="jsx"
            onChange={this.handleCodeChange}
            className={`doc-code ${showCode ? 'show' : ''}`}
            theme="base16-light"
            code={this.state.code}
          />
        </div>
      </div>
    );
  }
}

Example.propTypes = propTypes;

export default Example;
