/**
 * Created by saber on 2016/11/3.
 */
import React from 'react';

class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxSta: '',
      text: '',
      keywords: false
    };
    this.handleInputChange = this.handleInputChange.bind(this); // ES6写法需要单独绑定this
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
  }
  handleInputChange(event) {
    this.setState({
      boxSta: event.target.value
    });
  }
  handleTextareaChange(event) {
    this.setState({
      text: event.target.value
    });
  }
  // ES7,  used arrow funtion to bind `this`
  addKeywords = () => {
    this.setState({
      keywords: !this.state.keywords
    });
  }
  buttonColor = () => {
    if (this.state.text.length) {
      return 'btn btn-info pull-right';
    }
    return 'btn btn-primary pull-right';
  }
  addTemple() {
    if (this.state.keywords) {
      return '若不计较得失, 还有什么是做不到的?';
    }
    return '';
  }
  render() {
    return (
      <div className="well clearfix">
        <div className="form-group">
          <textarea className="form-control" onChange={this.handleTextareaChange} value={this.addTemple()} />
        </div>
        <div className="form-group">
          <input className="form-control" onChange={this.handleInputChange} value={this.state.text} />
        </div>
        <div className="form-group">
          <button className={this.state.keywords ? 'btn btn-danger' : 'btn btn-warning'} onClick={this.addKeywords}>Add</button>
          <button className={this.buttonColor()} disabled={this.state.text.length === 0}>submit</button>
          <span className="text-warning pull-right col-xs-1">{150 - this.state.text.length}</span>
        </div>
      </div>
    );
  }
}

module.exports = TodoBox;
