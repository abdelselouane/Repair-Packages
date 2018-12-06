'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  .card .card-toolbar i {\n    ', '\n    font-size: 20px;\n    margin-top: 10px;\n  }\n'], ['\n  .card .card-toolbar i {\n    ', '\n    font-size: 20px;\n    margin-top: 10px;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Modal = exports.Modal = _styledComponents2.default.div(_templateObject, function (props) {
  return props.modalType === 'success' && 'color: #fff !important;';
});

var ModalAdmin = function ModalAdmin(props) {

  if (!props.show) {
    return null;
  }

  var modal = props.modal,
      toolBar = props.toolBar,
      content = props.content,
      actions = props.actions,
      styles = props.styles;


  var typeColor = modal.type === "success" ? "#4DAA58" : "#DA3832";

  var modalStyles = {
    display: 'block',
    width: styles.width,
    left: '37%',
    top: styles.top ? styles.top : '30%',
    padding: modal.type && 0
  };

  var backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50
  };

  var toolBarStyles = {
    marginBottom: 0,
    backgroundColor: modal.type && typeColor,
    padding: modal.type && "10px",
    color: modal.type && "#fff"
  };

  var actionsStyles = {
    padding: "10px",
    margin: 0
  };

  var cardContent = {
    paddingRight: '20px'
  };

  return _react2.default.createElement(
    Modal,
    { className: 'modal-container', style: backdropStyle, modalType: modal.type },
    _react2.default.createElement(
      'div',
      { className: 'card modal', style: modalStyles, id: modal.id },
      _react2.default.createElement(
        'div',
        { className: 'card-toolbar', style: toolBarStyles },
        _react2.default.createElement(
          'span',
          { className: 'card-title' },
          _react2.default.createElement(
            'h3',
            null,
            modal.type && _react2.default.createElement('i', { className: modal.type === "success" ? "icon_check-circle-outlined" : "icon_ban" }),
            ' ' + toolBar.title
          )
        ),
        _react2.default.createElement('i', { className: 'icon_close', onClick: toolBar.onClick })
      ),
      _react2.default.createElement(
        'div',
        { className: 'card-content', style: cardContent },
        content
      ),
      _react2.default.createElement(
        'div',
        { className: 'card-actions right', style: actionsStyles },
        actions && actions.map(function (action, index) {
          return _react2.default.createElement(
            'button',
            {
              id: action.id,
              key: index,
              className: action.className,
              onClick: action.onClick,
              disabled: action.disabled && "disabled" },
            action.text
          );
        })
      )
    )
  );
};

ModalAdmin.propTypes = {
  modal: _propTypes2.default.shape({
    id: _propTypes2.default.isRequired
  }),
  toolBar: _propTypes2.default.object,
  actions: _propTypes2.default.arrayOf(_propTypes2.default.object),
  styles: _propTypes2.default.object
};

exports.default = ModalAdmin;