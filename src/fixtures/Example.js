
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


const propTypes = {
  code: PropTypes.string.isRequired,
  renderCode: PropTypes.bool,
  text: PropTypes.node,
  id: PropTypes.string,
  dependencies: PropTypes.object,
  isBanner: PropTypes.bool
};

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: this.props.code,
      showCode: false
    };
    const { dependencies } = props;
    if (dependencies) {
      for (var key in dependencies) {
        window[key] = dependencies[key];
      }
    }
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
