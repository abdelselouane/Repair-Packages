'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RepairWorkOrder = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('flexboxgrid/css/flexboxgrid.min.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SearchField = require('../Elements/SearchField/SearchField');

var _SearchField2 = _interopRequireDefault(_SearchField);

var _DropdownField = require('../Elements/DropdownField/DropdownField');

var _DropdownField2 = _interopRequireDefault(_DropdownField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepairWorkOrder = exports.RepairWorkOrder = function (_React$Component) {
    _inherits(RepairWorkOrder, _React$Component);

    function RepairWorkOrder() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, RepairWorkOrder);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RepairWorkOrder.__proto__ || Object.getPrototypeOf(RepairWorkOrder)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            selectedItem: {
                id: 0,
                value: '',
                option: 'Work Order'
            },
            dropdownOpen: false
        }, _this.handleSelectedItem = function (event) {
            _this.setState({
                selectedItem: {
                    id: parseInt(event.target.value),
                    value: event.target.id,
                    option: event.target.title
                }
            });
            _this.handleDropdownClose();
        }, _this.handleDropdownClose = function () {
            _this.setState({
                dropdownOpen: false
            });
        }, _this.handleDropdownOpen = function () {
            _this.setState({
                dropdownOpen: true
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(RepairWorkOrder, [{
        key: 'render',
        value: function render() {

            var dropdownProps = {
                id: 'dropDown',
                label: '',
                dropdownOpen: this.state.dropdownOpen,
                selectedItem: this.state.selectedItem,
                handleSelectedItem: this.handleSelectedItem,
                // handleDropdownOpen: this.handleDropdownOpen,
                items: [{
                    id: 0,
                    value: '',
                    option: 'Work Order'
                }]
            };

            var searchFieldProps = {
                input: {
                    id: 'searchField',
                    type: 'text',
                    placeholder: "#SSSSSAAAAAXXXXX",
                    value: '',
                    onChange: function onChange() {}
                }
            };

            var searchBtn = {
                border: '1px solid #ccc',
                backgroundColor: '#fbfbfb',
                padding: '9px 15px',
                font: '18px',
                color: 'rgb(255, 120, 73)',
                width: '120px',
                minHeight: '46px',
                position: 'relative',
                marginTop: '22px',
                marginLeft: '-66px'
            };

            var searchBtnText = {
                textDecoration: 'none',
                cursor: 'pointer',
                fontSize: '18px',
                fontWeight: '500'
            };

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row center-lg' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-lg-12' },
                            _react2.default.createElement(
                                'h1',
                                { className: 'workOrders-text' },
                                'Work Order Search Test'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row center-lg' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-lg-2' },
                            _react2.default.createElement(_DropdownField2.default, dropdownProps)
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-lg-6' },
                            _react2.default.createElement(_SearchField2.default, searchFieldProps)
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-lg-1' },
                            _react2.default.createElement(
                                'div',
                                { style: searchBtn },
                                _react2.default.createElement(
                                    'a',
                                    { style: searchBtnText },
                                    ' Search '
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row start-lg' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-lg-12' },
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'h2',
                                null,
                                'Open Work Orders'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row end-lg' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-lg-12' },
                            _react2.default.createElement(
                                'button',
                                { className: 'button md primary' },
                                'New Work Order'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return RepairWorkOrder;
}(_react2.default.Component);

exports.default = RepairWorkOrder;