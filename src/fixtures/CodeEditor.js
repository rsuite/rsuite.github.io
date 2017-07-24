import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import CodeMirror from 'codemirror';


const CodeEditor = React.createClass({
  propTypes: {
    readOnly: PropTypes.bool,
    code: PropTypes.string,
    theme: PropTypes.string,
    lineNumbers: PropTypes.bool,
    lineWrapping: PropTypes.bool,
    tabSize: PropTypes.number
  },
  getDefaultProps() {
    return {
      matchBrackets: true,
      tabSize: 2,
      theme: 'default'
    };
  },
  componentDidMount() {
    const {
      lineNumbers,
      lineWrapping,
      matchBrackets,
      tabSize,
      readOnly,
      theme
    } = this.props;

    if (CodeMirror === undefined) {
      return;
    }

    this.editor = CodeMirror.fromTextArea(this.refs.editor, {
      mode: 'jsx',
      lineNumbers,
      lineWrapping,
      matchBrackets,
      tabSize,
      readOnly,
      theme,
      readOnly
    });

    this.editor.on('change', this.handleChange);
  },

  componentDidUpdate() {
    const { readOnly, onChange } = this.props;
    if (readOnly) {
      this.editor.setValue(code);
    }
  },

  handleChange() {
    const { readOnly, onChange } = this.props;
    if (!readOnly && onChange) {
      onChange(this.editor.getValue());
    }
  },

  render() {
    const { style, className, code } = this.props;
    return (
      <div
        style={style}
        className={className}
      >
        <textarea
          ref='editor'
          defaultValue={code} />
      </div>
    );
  }
});

export default CodeEditor;

