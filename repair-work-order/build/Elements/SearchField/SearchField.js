'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchField = function SearchField(_ref) {
  var input = _ref.input;


  var inputStyles = {
    marginLeft: '-66px'
  };

  return _react2.default.createElement(
    'div',
    { className: 'text-input-container' },
    _react2.default.createElement('input', _extends({}, input, {
      style: inputStyles
    }))
  );
};

SearchField.propTypes = {
  input: _propTypes2.default.shape({
    id: _propTypes2.default.string,
    type: _propTypes2.default.string,
    placeholder: _propTypes2.default.string,
    value: _propTypes2.default.string,
    onChange: _propTypes2.default.func
  })
};

exports.default = SearchField;