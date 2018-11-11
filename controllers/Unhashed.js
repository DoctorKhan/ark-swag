'use strict';

var utils = require('../utils/writer.js');
var Unhashed = require('../service/UnhashedService');

module.exports.addBorrowerLoan = function addBorrowerLoan (req, res, next) {
  var body = req.swagger.params['body'].value;
  Unhashed.addBorrowerLoan(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addBorrowerPayment = function addBorrowerPayment (req, res, next) {
  var body = req.swagger.params['body'].value;
  Unhashed.addBorrowerPayment(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createUsersWithArrayInput = function createUsersWithArrayInput (req, res, next) {
  var body = req.swagger.params['body'].value;
  Unhashed.createUsersWithArrayInput(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
