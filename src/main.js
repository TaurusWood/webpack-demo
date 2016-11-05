/**
 * Created by saber on 16/10/21.
 */
const React = require('react');
const ReactDOM = require('react-dom');

const TodoBox = require('./components/TodoBox/TodoBox');
const Remark = require('./components/Remark/Remark');

ReactDOM.render(
  <TodoBox />,
  document.getElementById('container')
);

ReactDOM.render(
  <Remark />,
  document.getElementById('container')
);

