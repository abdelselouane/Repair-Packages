'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItem = function ListItem(props) {
  var title = props.title,
      data = props.data,
      actions = props.actions,
      columns = props.columns;


  return _react2.default.createElement(
    'div',
    {
      className: 'card',
      style: { marginTop: "20px", width: "100%" } },
    _react2.default.createElement(
      'div',
      { className: 'card-body' },
      _react2.default.createElement(
        'h2',
        {
          className: 'card-title',
          style: { color: "#f96302" }
        },
        title,
        data.partNbr
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        columns.map(function (column, index) {
          return _react2.default.createElement(
            'div',
            {
              className: column.className,
              style: column.actions && { textAlign: 'right' },
              key: index },
            column.label && _react2.default.createElement(
              'label',
              null,
              column.label
            ),
            data[column.key] && _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'strong',
                null,
                column.key === 'cost' && '$',
                data[column.key]
              )
            ),
            column.actions && actions.map(function (action, index) {
              return _react2.default.createElement(
                'button',
                {
                  className: action.className,
                  id: 'part-' + data.partNbr,
                  key: index,
                  onClick: action.onClick },
                action.text
              );
            })
          );
        })
      )
    )
  );
};

ListItem.propTypes = {
  title: _propTypes2.default.string.isRequired,
  data: _propTypes2.default.object.isRequired,
  actions: _propTypes2.default.array,
  columns: _propTypes2.default.array
};

exports.default = ListItem;