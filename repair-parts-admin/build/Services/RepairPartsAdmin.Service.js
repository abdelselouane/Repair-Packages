'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchParts = searchParts;
exports.updateParts = updateParts;
exports.createParts = createParts;
exports.getAllBrands = getAllBrands;
exports.getAllSuppliers = getAllSuppliers;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function searchParts(apiUrl) {
  return (0, _isomorphicFetch2.default)(apiUrl).then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      return { status: 500, statusText: 'Internal Server Error' };
    }
  });
}

function updateParts() {
  var apiUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  return (0, _isomorphicFetch2.default)(apiUrl, {
    method: 'PUT'
  }).then(function (response) {
    if (response.ok) {
      return {
        status: response.status,
        statusText: response.statusText
      };
    } else {
      return { status: 500, statusText: 'Internal Server Error' };
    }
  });
}

function createParts() {
  var apiUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  return (0, _isomorphicFetch2.default)(apiUrl, {
    method: 'POST'
  }).then(function (response) {
    if (response.ok) {
      return {
        status: response.status,
        statusText: response.statusText
      };
    } else {
      return { status: 500, statusText: 'Internal Server Error' };
    }
  });
}

function getAllBrands(apiUrl) {
  return (0, _isomorphicFetch2.default)(apiUrl).then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      return { status: 500, statusText: 'Internal Server Error' };
    }
  });
}

function getAllSuppliers(apiUrl) {
  return (0, _isomorphicFetch2.default)(apiUrl).then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      return { status: 500, statusText: 'Internal Server Error' };
    }
  });
}