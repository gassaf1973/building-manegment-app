import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import RichTextEditor from 'react-rte';

class RichTextInput extends Component {

  constructor(props) {
    super(props);

    const minHeight = 232 + props.heightOffset;
    const readOnlyMinHeight = 180 + props.heightOffset;
    const editorHeight = 161 + props.heightOffset;

    this.state = {
      value: RichTextEditor.createValueFromString(this.props.value, 'html'),
      minHeight,
      readOnlyMinHeight,
      editorHeight,
      reactRTEminHeight: props.readOnly ? readOnlyMinHeight : minHeight,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBeforeInput = this.handleBeforeInput.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.readOnly !== nextProps.readOnly) {
      this.setState({
        reactRTEminHeight: nextProps.readOnly ? this.state.readOnlyMinHeight : this.state.minHeight,
      });
    }

    if (this.props.heightOffset !== nextProps.heightOffset) {
      this.setState({
        minHeight: 232 + nextProps.heightOffset,
        readOnlyMinHeight: 180 + nextProps.heightOffset,
        editorHeight: 161 + nextProps.heightOffset,
      });
    }
  }

  handleChange = (value) => {
    const contentState = value._editorState.getCurrentContent();
    const oldContent = this.state.value._editorState.getCurrentContent();
    if (contentState === oldContent || value.toString('html').length <= this.props.maxLength) {
      this.setState({ value });
      this.props.onChange(value.toString('html'));
    }
  }

  handleBeforeInput = (chars) => {
    const totalLength = this.state.value.toString('html').length + chars.length;
    return totalLength > this.props.maxLength;
  }

  render() {
    const editorFontSize = '12px';

    const reactRTE = {
      border: '1px solid #9197a3',

      borderRadius: 0,
      minHeight: this.state.reactRTEminHeight,
    };

    const styles = StyleSheet.create({
      reactRTE,
      editor: {
        fontSize: editorFontSize,
        height: this.state.editorHeight,
        lineHeight: '22px',
      },
      editorEnabled: {
        color: '#3F5F80',
      },
      editorDisabled: {
        color: '#5A5A5A',
      },
    });

    const labelStyle = {
      fontFamily: 'Source Sans Pro, sans-serif',
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#474654',
      display: 'inline-block',
    };
    const toolbarConfig = {
      display: ['INLINE_STYLE_BUTTONS'],
      INLINE_STYLE_BUTTONS: [
        { label: 'Bold', style: 'BOLD' },
        { label: 'Italic', style: 'ITALIC' },
        { label: 'Strikethrough', style: 'STRIKETHROUGH' },
        { label: 'Underline', style: 'UNDERLINE' },
      ],
    };

    const editorColor = this.props.readOnly ? styles.editorDisabled : styles.editorEnabled;
    return (
      <div style={this.props.style}>
        <div style={labelStyle}>{this.props.label} :</div>
        <RichTextEditor
          value={this.state.value}
          onChange={this.handleChange}
          readOnly={this.props.readOnly}
          toolbarConfig={toolbarConfig}
          className={css(styles.reactRTE)}
          handleBeforeInput={this.handleBeforeInput}
          editorClassName={css(styles.editor, editorColor)}
        />
      </div>
    );
  }
}

RichTextInput.defaultProps = {
  heightOffset: 0,
};

RichTextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number.isRequired,
  readOnly: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  style: PropTypes.shape({}).isRequired,
  heightOffset: PropTypes.number.isRequired,
};

export default RichTextInput;
