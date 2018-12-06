'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RepairPartsAdmin = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('flexboxgrid/css/flexboxgrid.min.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SearchField = require('./../Elements/SearchField/SearchField');

var _SearchField2 = _interopRequireDefault(_SearchField);

var _ListItem = require('./../Elements/ListItem/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ModalAdmin = require('./../Elements/ModalAdmin/ModalAdmin');

var _ModalAdmin2 = _interopRequireDefault(_ModalAdmin);

var _InputFieldAdmin = require('./../Elements/InputFieldAdmin/InputFieldAdmin');

var _InputFieldAdmin2 = _interopRequireDefault(_InputFieldAdmin);

var _RepairPartsAdmin = require('./../Services/RepairPartsAdmin.Service');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepairPartsAdmin = exports.RepairPartsAdmin = function (_Component) {
  _inherits(RepairPartsAdmin, _Component);

  function RepairPartsAdmin(props) {
    var _this2 = this;

    _classCallCheck(this, RepairPartsAdmin);

    var _this = _possibleConstructorReturn(this, (RepairPartsAdmin.__proto__ || Object.getPrototypeOf(RepairPartsAdmin)).call(this, props));

    _this.handleAllBrands = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var apiUrl, brands;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              apiUrl = _this.props.partsServiceUrl + '/brands';
              _context.prev = 1;
              _context.next = 4;
              return (0, _RepairPartsAdmin.getAllBrands)(apiUrl);

            case 4:
              brands = _context.sent;

              _this.setState({ brands: brands });
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](1);

              _this.setState({ showFailureModal: true });

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[1, 8]]);
    }));
    _this.handleAllSuppliers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var apiUrl, suppliers;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              apiUrl = _this.props.partsServiceUrl + '/suppliers';
              _context2.prev = 1;
              _context2.next = 4;
              return (0, _RepairPartsAdmin.getAllSuppliers)(apiUrl);

            case 4:
              suppliers = _context2.sent;

              _this.setState({ suppliers: suppliers });
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2['catch'](1);

              _this.setState({ showFailureModal: true });

            case 11:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[1, 8]]);
    }));

    _this.handleCreatePart = function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(payload) {
        var params, apiUrl, res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                params = '?brandNbr=' + payload.brandNbr + '&cost=' + payload.cost + '&partDesc=' + payload.partDesc + '&partNbr=' + payload.partNbr + '&supplierNbr=' + payload.supplierNbr + '&userId=' + payload.userId;
                apiUrl = _this.props.partsServiceUrl + '/parts/supplier' + params;
                _context3.prev = 2;
                _context3.next = 5;
                return (0, _RepairPartsAdmin.createParts)(apiUrl);

              case 5:
                res = _context3.sent;

                if (res.status === 200) {
                  _this.setState({ showSuccessModal: true });
                } else {
                  _this.setState({ showFailureModal: true });
                }
                _this.handleResetSearch();
                _context3.next = 13;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3['catch'](2);

                _this.setState({ showFailureModal: true });

              case 13:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2, [[2, 10]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.state = {
      userId: props.userId,
      term: '',
      partNumberInput: {
        value: '',
        error: false,
        msg: ''
      },
      descriptionInput: {
        value: '',
        error: false,
        msg: ''
      },
      brandInput: {
        value: '',
        error: false,
        msg: ''
      },
      supplierInput: {
        value: '',
        error: false,
        msg: ''
      },
      cost: {
        value: '',
        error: false,
        msg: ''
      },
      parts: [],
      selectedPart: {},
      brands: [],
      selectedBrand: {},
      brandsDropDown: [],
      suppliers: [],
      selectedSupplier: {},
      suppliersDropDown: [],
      showEditModal: false,
      showSuccessModal: false,
      showFailureModal: false,
      showAddPartModal: false,
      isLoading: false
    };
    _this.handleOnChange = _this.handleOnChange.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.handleSearch = _this.handleSearch.bind(_this);
    _this.handleResetSearch = _this.handleResetSearch.bind(_this);
    _this.handleEditPart = _this.handleEditPart.bind(_this);
    _this.handleModalClose = _this.handleModalClose.bind(_this);
    _this.handleCostChange = _this.handleCostChange.bind(_this);
    _this.handlePartNumberChange = _this.handlePartNumberChange.bind(_this);
    _this.handleDescriptionChange = _this.handleDescriptionChange.bind(_this);
    _this.handleSaveItem = _this.handleSaveItem.bind(_this);
    _this.handlePartUpdate = _this.handlePartUpdate.bind(_this);
    _this.handleAddPart = _this.handleAddPart.bind(_this);
    _this.handleSavePart = _this.handleSavePart.bind(_this);
    _this.handleInputFilter = _this.handleInputFilter.bind(_this);
    _this.handleSelectedRow = _this.handleSelectedRow.bind(_this);
    return _this;
  }

  _createClass(RepairPartsAdmin, [{
    key: 'handleSearch',
    value: function handleSearch() {
      var _this3 = this;

      if (this.state.term !== '') {
        var apiUrl = this.props.partsServiceUrl + '/parts/supplier/' + this.state.term;
        (0, _RepairPartsAdmin.searchParts)(apiUrl).then(function (res) {
          _this3.setState({ parts: res, isLoading: false });
        }).catch(function (error) {
          _this3.setState({ showFailureModal: true });
        });
      }
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(e) {
      if (e.key === 'Enter') {
        this.handleSearch();
      }
    }
  }, {
    key: 'handlePartUpdate',
    value: function handlePartUpdate() {
      var _this4 = this;

      var _state = this.state,
          selectedPart = _state.selectedPart,
          cost = _state.cost,
          userId = _state.userId;

      var payload = {
        brandNbr: selectedPart.brandNbr,
        cost: cost.value,
        partNbr: selectedPart.partNbr,
        supplierNbr: selectedPart.supplierNbr,
        userId: userId
      };
      var params = '?brandNbr=' + payload.brandNbr + '&cost=' + payload.cost + '&partNbr=' + payload.partNbr + '&supplierNbr=' + payload.supplierNbr + '&userId=' + payload.userId;
      var apiUrl = this.props.partsServiceUrl + '/parts/supplier' + params;
      return (0, _RepairPartsAdmin.updateParts)(apiUrl).then(function (res) {
        if (res.status === 200) {
          _this4.setState({ showSuccessModal: true });
        } else {
          _this4.setState({ showFailureModal: true });
        }
        _this4.handleResetSearch();
      }).catch(function (error) {
        _this4.setState({ showFailureModal: true });
      });
    }
  }, {
    key: 'handleOnChange',
    value: function handleOnChange(event) {
      this.setState({ term: event.target.value });
    }
  }, {
    key: 'handleResetSearch',
    value: function handleResetSearch() {
      this.setState({
        term: '',
        parts: [],
        cost: {
          value: '',
          error: false,
          msg: ''
        }
      });
    }
  }, {
    key: 'handleModalClose',
    value: function handleModalClose() {
      this.setState({
        showEditModal: false,
        showSuccessModal: false,
        showFailureModal: false,
        showAddPartModal: false,
        brandsDropDown: [],
        suppliersDropDown: [],
        partNumberInput: {
          value: '',
          error: false,
          msg: ''
        },
        descriptionInput: {
          value: '',
          error: false,
          msg: ''
        },
        brandInput: {
          value: '',
          error: false,
          msg: ''
        },
        supplierInput: {
          value: '',
          error: false,
          msg: ''
        },
        cost: {
          value: '',
          error: false,
          msg: ''
        },
        selectedPart: {}
      });
    }
  }, {
    key: 'handleEditPart',
    value: function handleEditPart(event) {
      var id = event.target.id.substring(5, event.target.id.length);
      var parts = this.state.parts;
      var selected = parts.filter(function (part) {
        return id === part.partNbr;
      });
      this.setState({
        showEditModal: true,
        selectedPart: selected[0]
      });
    }
  }, {
    key: 'handleCostChange',
    value: function handleCostChange(event) {
      var val = event.target.value;
      if (parseFloat(val).toFixed(2) >= 10000) {
        this.setState({
          cost: {
            value: val,
            error: true,
            msg: 'Please enter a valid cost $0.00'
          }
        });
      } else {
        this.setState(function (prevState) {
          return { cost: {
              value: val,
              error: false,
              msg: ''
            }
          };
        });
      }
    }
  }, {
    key: 'handlePartNumberChange',
    value: function handlePartNumberChange(event) {
      var val = event.target.value;
      this.setState({
        partNumberInput: {
          value: val,
          error: false,
          msg: ''
        }
      });
    }
  }, {
    key: 'handleDescriptionChange',
    value: function handleDescriptionChange(event) {
      var val = event.target.value;
      this.setState({
        descriptionInput: {
          value: val,
          error: false,
          msg: ''
        }
      });
    }
  }, {
    key: 'handleSaveItem',
    value: function handleSaveItem() {
      if (this.state.cost.value !== '') {
        this.setState(function (prevState) {
          var cost = prevState.cost,
              selectedPart = prevState.selectedPart;

          return {
            selectedPart: {
              cost: parseFloat(cost.value).toFixed(2),
              brandName: selectedPart.brandName,
              brandNbr: selectedPart.brandNbr,
              partDesc: selectedPart.partDesc,
              partNbr: selectedPart.partNbr,
              supplierName: selectedPart.supplierName,
              supplierNbr: selectedPart.supplierNbr
            }
          };
        });
        this.handlePartUpdate();
      }
    }
  }, {
    key: 'handleAddPart',
    value: function handleAddPart() {
      this.setState({
        showAddPartModal: true
      });
      this.handleAllBrands();
      this.handleAllSuppliers();
    }
  }, {
    key: 'handleInputFilter',
    value: function handleInputFilter(event) {
      var _setState;

      var elementType = event.target.id;
      var term = event.target.value;
      var dropDownItem = [];
      var _state2 = this.state,
          brands = _state2.brands,
          suppliers = _state2.suppliers;

      if (term !== '') {
        dropDownItem = elementType === 'brand' ? brands.filter(function (brand) {
          return brand.brandNumber.toString().toLowerCase().includes(term.toLowerCase()) || brand.brandName.toLowerCase().includes(term.toLowerCase());
        }) : suppliers.filter(function (supplier) {
          return supplier.supplierNumber.toString().toLowerCase().includes(term.toLowerCase()) || supplier.supplierName.toLowerCase().includes(term.toLowerCase());
        });
      }
      this.setState((_setState = {}, _defineProperty(_setState, elementType + 'Input', { value: term, error: false, msg: '' }), _defineProperty(_setState, elementType + 'sDropDown', dropDownItem), _setState));
    }
  }, {
    key: 'handleSelectedRow',
    value: function handleSelectedRow(obj) {
      var _setState2;

      var elementType = obj.brandNumber !== undefined ? 'brand' : 'supplier';
      this.setState((_setState2 = {}, _defineProperty(_setState2, elementType + 'Input', {
        value: obj[elementType + 'Number'] + ' - ' + obj[elementType + 'Name'],
        error: false,
        msg: ''
      }), _defineProperty(_setState2, elementType + 'sDropDown', []), _setState2));
    }
  }, {
    key: 'handleSavePart',
    value: function handleSavePart() {
      var _state3 = this.state,
          partNumberInput = _state3.partNumberInput,
          descriptionInput = _state3.descriptionInput,
          brandInput = _state3.brandInput,
          supplierInput = _state3.supplierInput,
          cost = _state3.cost,
          brands = _state3.brands,
          suppliers = _state3.suppliers;


      var brandInfo = brandInput.value.split(' - ');
      var brand = brands.filter(function (brand) {
        return parseInt(brandInfo[0]) === brand.brandNumber && brandInfo[1] === brand.brandName;
      });
      var supplierInfo = supplierInput.value.split(' - ');
      var supplier = suppliers.filter(function (supplier) {
        return parseInt(supplierInfo[0]) === supplier.supplierNumber && supplierInfo[1] === supplier.supplierName;
      });

      if (!brand.length > 0) {
        this.setState(function (prevState) {
          return { brandInput: {
              value: prevState.brandInput.value,
              error: true,
              msg: 'Please select valid Brand.'
            }
          };
        });
      } else if (!supplier.length > 0) {
        this.setState(function (prevState) {
          return { supplierInput: {
              value: prevState.supplierInput.value,
              error: true,
              msg: 'Please select valid Supplier.'
            }
          };
        });
      } else if (cost.value === '') {
        this.setState({
          cost: {
            value: '',
            error: true,
            msg: 'Please enter a valid Cost.'
          }
        });
      } else if (partNumberInput.value === '') {
        this.setState(function (prevState) {
          return { partNumberInput: {
              value: prevState.partNumberInput.value,
              error: true,
              msg: 'Please enter a valid Part Number.'
            }
          };
        });
      } else if (descriptionInput.value === '') {
        this.setState(function (prevState) {
          return { descriptionInput: {
              value: prevState.descriptionInput.value,
              error: true,
              msg: 'Please enter a valid Description.'
            }
          };
        });
      } else {
        this.handleModalClose();
        this.setState({
          selectedPart: {
            brandName: brandInfo[1],
            brandNbr: parseInt(brandInfo[0]),
            cost: parseFloat(cost.value).toFixed(2),
            partDesc: descriptionInput.value,
            partNbr: partNumberInput.value,
            supplierName: supplierInfo[1],
            supplierNbr: parseInt(supplierInfo[0]),
            userId: this.state.userId
          }
        });
        var payload = {
          brandNbr: parseInt(brandInfo[0]),
          cost: parseFloat(cost.value).toFixed(2),
          partDesc: descriptionInput.value,
          partNbr: partNumberInput.value,
          supplierNbr: parseInt(supplierInfo[0]),
          userId: this.state.userId
        };
        this.handleCreatePart(payload);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state4 = this.state,
          term = _state4.term,
          parts = _state4.parts,
          brandsDropDown = _state4.brandsDropDown,
          suppliersDropDown = _state4.suppliersDropDown,
          selectedPart = _state4.selectedPart,
          brandInput = _state4.brandInput,
          supplierInput = _state4.supplierInput,
          partNumberInput = _state4.partNumberInput,
          descriptionInput = _state4.descriptionInput,
          cost = _state4.cost,
          showEditModal = _state4.showEditModal,
          showSuccessModal = _state4.showSuccessModal,
          showFailureModal = _state4.showFailureModal,
          showAddPartModal = _state4.showAddPartModal;


      var searchFieldProps = {
        input: {
          id: 'searchField',
          type: 'text',
          placeholder: "Enter part number to update an existing part",
          value: term,
          onChange: this.handleOnChange,
          onKeyPress: this.handleKeyPress
        },
        action: {
          id: 'searchLink',
          onClick: this.handleSearch,
          text: "Search"
        }
      };

      var listItemProps = {
        title: "Part #",
        columns: [{
          className: "col-lg-2",
          label: "Brand",
          key: "brandName"
        }, {
          className: "col-lg-3",
          label: "Description",
          key: "partDesc"
        }, {
          className: "col-lg-2",
          label: "Supplier",
          key: "supplierName"
        }, {
          className: "col-lg-2",
          label: "Cost",
          key: "cost"
        }, {
          className: "col-lg-3",
          actions: true
        }],
        actions: [{
          text: "Edit Part",
          className: "button md",
          onClick: this.handleEditPart
        }]
      };

      var costFieldProps = {
        field: {
          type: "number",
          id: "cost",
          name: "cost",
          pattern: "^\d*(\.\d{0,2})?$",
          value: cost.value,
          required: "required",
          placeholder: "Enter cost here",
          onChange: this.handleCostChange
        },
        label: {
          text: "Cost"
        },
        fieldError: {
          flag: cost.error ? cost.error : false,
          msg: cost.msg ? cost.msg : ''
        }
      };

      var partNumberFieldProps = {
        field: {
          required: "required",
          id: "partNumberInput",
          name: "partNumberInput",
          placeholder: "Enter Part Number",
          title: "Part Number",
          value: partNumberInput.value,
          onChange: this.handlePartNumberChange,
          type: "text"
        },
        label: {
          text: "Part Number"
        },
        fieldError: {
          flag: partNumberInput.error ? partNumberInput.error : false,
          msg: partNumberInput.msg ? partNumberInput.msg : ''
        }
      };

      var descriptionFieldProps = {
        field: {
          required: "required",
          id: "descriptionInput",
          name: "descriptionInput",
          placeholder: "Enter Description",
          title: "Description",
          value: descriptionInput.value,
          onChange: this.handleDescriptionChange,
          type: "text"
        },
        label: {
          text: "Description"
        },
        fieldError: {
          flag: descriptionInput.error ? descriptionInput.error : false,
          msg: descriptionInput.msg ? descriptionInput.msg : ''
        }
      };

      var brandFieldProps = {
        field: {
          required: "required",
          id: "brand",
          name: "brandInput",
          onChange: this.handleInputFilter,
          placeholder: "Enter Brand",
          title: "Brand",
          type: "text",
          value: brandInput.value
        },
        label: {
          text: "Brand"
        },
        fieldError: {
          flag: brandInput.error ? brandInput.error : false,
          msg: brandInput.msg ? brandInput.msg : ''
        },
        dropDownData: brandsDropDown,
        toDisplay: ['brandNumber', 'brandName'],
        zIndex: true,
        handleSelectedItem: this.handleSelectedRow
      };

      var supplierFieldProps = {
        field: {
          required: "required",
          id: "supplier",
          name: "supplierInput",
          onChange: this.handleInputFilter,
          placeholder: "Enter Supplier",
          title: "Supplier",
          type: "text",
          value: supplierInput.value
        },
        label: {
          text: "Supplier"
        },
        fieldError: {
          flag: supplierInput.error ? supplierInput.error : false,
          msg: supplierInput.msg ? supplierInput.msg : ''
        },
        dropDownData: suppliersDropDown,
        toDisplay: ['supplierNumber', 'supplierName'],
        zIndex: brandsDropDown.length > 0 ? false : true,
        handleSelectedItem: this.handleSelectedRow
      };

      var modalProps = {
        modal: {
          id: "modalID"
        },
        toolBar: {
          title: 'Edit cost of part #' + selectedPart.partNbr,
          onClick: this.handleModalClose
        },
        content: _react2.default.createElement(_InputFieldAdmin2.default, costFieldProps),
        actions: [{
          id: "close",
          onClick: this.handleModalClose,
          className: "button",
          text: "Cancel"
        }, {
          id: "save",
          onClick: this.handleSaveItem,
          className: 'button primary ' + ((cost.error || cost.value === '') && "disabled"),
          text: "Save Item"
        }],
        styles: {
          width: "500px",
          height: !cost.error ? "260px" : "280px"
        }
      };

      var modalSuccessProps = {
        modal: {
          id: "modalSuccessID",
          type: "success"
        },
        toolBar: {
          title: "Part Saved",
          onClick: this.handleModalClose
        },
        content: selectedPart && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h3',
            null,
            'Part #',
            selectedPart.partNbr
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-3' },
              _react2.default.createElement(
                'label',
                null,
                'Brand'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'strong',
                null,
                selectedPart.brandName
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-3' },
              _react2.default.createElement(
                'label',
                null,
                'Description'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'strong',
                null,
                selectedPart.partDesc
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-3' },
              _react2.default.createElement(
                'label',
                null,
                'Supplier'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'strong',
                null,
                selectedPart.supplierName
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-3' },
              _react2.default.createElement(
                'label',
                null,
                'Cost'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'strong',
                null,
                '$' + selectedPart.cost
              )
            )
          )
        ),
        actions: [{
          onClick: this.handleModalClose,
          className: "button",
          text: "Close"
        }],
        styles: {
          width: "600px",
          height: "300px"
        }
      };

      var modalFailureProps = {
        modal: {
          id: "modalFailureID",
          type: "failure"
        },
        toolBar: {
          title: "Error",
          onClick: this.handleModalClose
        },
        content: _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h3',
            null,
            'Part #',
            selectedPart.partNbr
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                'h5',
                null,
                'ERROR: Please contact the repair team.'
              )
            )
          )
        ),
        actions: [{
          onClick: this.handleModalClose,
          className: "button",
          text: "Close"
        }],
        styles: {
          width: "600px",
          height: "300px"
        }
      };

      var modalAddPartProps = {
        modal: {
          id: "modalAddPartID"
        },
        toolBar: {
          title: "New Part",
          onClick: this.handleModalClose
        },
        content: _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_InputFieldAdmin2.default, partNumberFieldProps),
          _react2.default.createElement(_InputFieldAdmin2.default, descriptionFieldProps),
          _react2.default.createElement(_InputFieldAdmin2.default, brandFieldProps),
          _react2.default.createElement(_InputFieldAdmin2.default, supplierFieldProps),
          _react2.default.createElement(_InputFieldAdmin2.default, costFieldProps)
        ),
        actions: [{
          onClick: this.handleModalClose,
          className: "button",
          text: "Cancel"
        }, {
          id: 'savePart',
          onClick: this.handleSavePart,
          className: "button primary",
          text: "Save Part"
        }],
        styles: {
          top: "20%",
          width: "500px",
          height: "600px"
        }
      };

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-lg-12' },
            _react2.default.createElement(
              'h1',
              { style: { textAlign: 'center', color: '#444' } },
              'Parts Admin'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-lg-6' },
            _react2.default.createElement(
              'button',
              {
                style: { margin: '0' },
                className: 'button primary md',
                id: 'addNewPart',
                onClick: this.handleAddPart
              },
              'Add New Part'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-lg-12' },
            _react2.default.createElement(_SearchField2.default, searchFieldProps)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-lg-12' },
            parts && parts.map(function (part) {
              return _react2.default.createElement(_ListItem2.default, _extends({
                data: part,
                key: part.partNbr
              }, listItemProps));
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-lg-12' },
            _react2.default.createElement(_ModalAdmin2.default, _extends({
              show: showEditModal
            }, modalProps)),
            _react2.default.createElement(_ModalAdmin2.default, _extends({
              show: showSuccessModal
            }, modalSuccessProps)),
            _react2.default.createElement(_ModalAdmin2.default, _extends({
              show: showFailureModal
            }, modalFailureProps)),
            _react2.default.createElement(_ModalAdmin2.default, _extends({
              show: showAddPartModal
            }, modalAddPartProps))
          )
        )
      );
    }
  }]);

  return RepairPartsAdmin;
}(_react.Component);

RepairPartsAdmin.propTypes = {
  partsServiceUrl: _propTypes2.default.string.isRequired,
  userId: _propTypes2.default.string.isRequired
};

exports.default = RepairPartsAdmin;