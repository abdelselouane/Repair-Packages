'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n      position: absolute;\n      border: 1px solid;\n      border-color: #ccc;\n      width: 100%;\n      height: auto;\n      background-color: #fff;\n      z-index: ', ';\n    '], ['\n      position: absolute;\n      border: 1px solid;\n      border-color: #ccc;\n      width: 100%;\n      height: auto;\n      background-color: #fff;\n      z-index: ', ';\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputFieldAdmin = function InputFieldAdmin(props) {
  var field = props.field,
      label = props.label,
      fieldError = props.fieldError,
      dropDownData = props.dropDownData,
      toDisplay = props.toDisplay,
      zIndex = props.zIndex,
      handleSelectedItem = props.handleSelectedItem;


  var DropDown = _styledComponents2.default.div(_templateObject, props.zIndex && "1");

  return _react2.default.createElement(
    'div',
    { className: 'text-input-container ' + (fieldError.flag && 'error') },
    _react2.default.createElement('input', field),
    label && _react2.default.createElement(
      'label',
      { htmlFor: field.id },
      label.text
    ),
    dropDownData && _react2.default.createElement(
      DropDown,
      { zIndex: zIndex },
      _react2.default.createElement(
        'table',
        { className: 'standard-table alternating-rows', style: { margin: '0' } },
        _react2.default.createElement(
          'tbody',
          null,
          dropDownData && dropDownData.map(function (item, index) {
            return _react2.default.createElement(
              'tr',
              {
                key: index,
                onClick: function onClick() {
                  return handleSelectedItem(item);
                }
              },
              _react2.default.createElement(
                'td',
                null,
                item[toDisplay[0]],
                ' - ',
                item[toDisplay[1]]
              )
            );
          })
        )
      )
    ),
    fieldError.flag && _react2.default.createElement(
      'span',
      { style: { color: "#ed1c24" } },
      fieldError.msg
    )
  );
};

InputFieldAdmin.propTypes = {
  field: _propTypes2.default.object.isRequired,
  label: _propTypes2.default.object,
  fieldError: _propTypes2.default.object
};

exports.default = InputFieldAdmin;