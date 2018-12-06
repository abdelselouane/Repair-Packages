'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchField = function SearchField(props) {

  var spanStyle = {
    color: '#FF7849',
    fontSize: '20px',
    fontWeight: 500,
    float: 'right',
    padding: '5px',
    position: 'absolute',
    marginTop: '27px',
    cursor: 'pointer',
    textDecoration: 'none',
    marginLeft: '-80px'
  };

  var input = props.input,
      action = props.action;


  return _react2.default.createElement(
    'div',
    { className: 'text-input-container' },
    _react2.default.createElement('input', input),
    _react2.default.createElement(
      'a',
      {
        style: spanStyle,
        id: action.id,
        onClick: action.onClick
      },
      action.text
    )
  );
};

SearchField.propTypes = {
  action: _propTypes2.default.shape({
    text: _propTypes2.default.string
  }),
  input: _propTypes2.default.shape({
    id: _propTypes2.default.string,
    type: _propTypes2.default.string,
    placeholder: _propTypes2.default.string,
    value: _propTypes2.default.string,
    onChange: _propTypes2.default.func
  })
};

exports.default = SearchField;