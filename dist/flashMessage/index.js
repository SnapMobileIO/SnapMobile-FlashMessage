'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _ngNotify = require('ng-notify');

var _ngNotify2 = _interopRequireDefault(_ngNotify);

var _flashMessage = require('./flashMessage.service');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_angular2.default.module('FlashMessageModule', ['ngNotify']).service('FlashMessage', _flashMessage.FlashMessage);