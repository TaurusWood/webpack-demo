/**
 * Created by saber on 2016/11/5.
 */
// import React from 'react';
import React from 'react';
import './Remark.less';

class Remark extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
  }
  handleTextareaChange(event) {
    this.setState({
      text: event.target.value
    });
  }
  remainImportLength = () => {
    if (this.state.text.length) {
      return (150 - this.state.text.length);
    }
    return '';
  }
  cancelBtnStyle = () => {
    if (this.state.text.length) {
      return ({
        transition: 'opacity 0.6s',
        opacity: '1'
      });
    }
    return ({
      transition: 'opacity 0.6s',
      opacity: '0'
    });
  }
  cleanTextarea = () => {
    // if (this.state.text.length) {
    //
    // }
  }
  textareaValue = () => {
    if (!this.state.text.length) {
      return '';
    }
    return this.state.text;
  }
  render() {
    return (
      <div className="form-group well clearfix">
        <textarea name="remark" className="form-control" onChange={this.handleTextareaChange} value={this.textareaValue()} />
        <div className="action-group">
          <button className="btn btn-info" disabled={!this.state.text.length}>submit</button>
          <button className="btn btn-danger js-btn-cancel" style={this.cancelBtnStyle()} onClick={this.cleanTextarea}>cancel</button>
          <span className="text-warning pull-right">{this.remainImportLength()}</span>
        </div>
      </div>
    );
  }
}

module.exports = Remark;
