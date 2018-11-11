'use strict';

var utils = require('../utils/writer.js');
var Hashed = require('../service/HashedService');

module.exports.createUser = function createUser (req, res, next) {
  var body = req.swagger.params['body'].value;
  Hashed.createUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
