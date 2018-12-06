'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownField = function DropdownField(_ref) {
  var id = _ref.id,
      label = _ref.label,
      selectedItem = _ref.selectedItem,
      items = _ref.items,
      handleSelectedItem = _ref.handleSelectedItem,
      dropdownOpen = _ref.dropdownOpen;
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      'div',
      { className: 'dropdown-list ' + (dropdownOpen && "dropdown-opened"),
        id: id,
        style: { marginTop: '22px' }
      },
      _react2.default.createElement(
        'label',
        null,
        label
      ),
      _react2.default.createElement(
        'div',
        { className: 'dropdown-label',
          tabIndex: '0'
          // onClick={handleDropdownOpen}
        },
        selectedItem.option
      ),
      _react2.default.createElement(
        'div',
        { className: 'dropdown-outer-list' },
        _react2.default.createElement(
          'ul',
          { className: 'dropdown-inner-list' },
          items.map(function (item, index) {
            return _react2.default.createElement(
              'li',
              {
                'aria-selected': selectedItem.id === index,
                className: 'dropdown-list-item',
                id: item.value,
                key: index,
                onClick: handleSelectedItem,
                tabIndex: '-1',
                title: item.option,
                value: item.id
              },
              item.option
            );
          })
        )
      )
    )
  );
};

DropdownField.prototype = {
  id: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string,
  dropdownOpen: _propTypes2.default.bool.isRequired,
  selectedItem: _propTypes2.default.shape({
    id: _propTypes2.default.number.isRequired,
    value: _propTypes2.default.string,
    option: _propTypes2.default.string.isRequired
  }).isRequired,
  items: _propTypes2.default.shape({
    id: _propTypes2.default.number.isRequired,
    value: _propTypes2.default.string,
    option: _propTypes2.default.string.isRequired
  }).isRequired,
  handleSelectedItem: _propTypes2.default.func.isRequired,
  handleDropdownOpen: _propTypes2.default.func.isRequired
};

exports.default = DropdownField;