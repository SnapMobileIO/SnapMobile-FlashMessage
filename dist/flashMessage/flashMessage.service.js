'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlashMessage = function () {

  /**
   * Using ng-notify module to display notifications
   * Current configurations show notifications at top of page and
   * disappear after 3 seconds - these can be set in the config
  */

  function FlashMessage(ngNotify) {
    _classCallCheck(this, FlashMessage);

    this.ngNotify = ngNotify;
    this.ngNotify.config({
      theme: 'pure',
      position: 'top',
      duration: 3000,
      sticky: false,
      button: true,
      html: true
    });
    this.messages = [];
  }

  // Success message displays message set in controllers  - green background


  _createClass(FlashMessage, [{
    key: 'success',
    value: function success(message) {
      this.ngNotify.set(message, 'success');
    }

    // Error message lists validation errors - red background

  }, {
    key: 'errors',
    value: function errors(err) {
      var errors = err.data.errors;
      for (var key in errors) {
        var message = errors[key].message;
        this.messages.push('<li>' + message + '</li>');
      }

      if (this.messages.length > 1) {
        this.messages = this.messages.join(' ');
      }

      this.ngNotify.set('<ul>' + this.messages + '</ul>', 'error');
      this.messages = [];
    }
  }]);

  return FlashMessage;
}();

exports.FlashMessage = FlashMessage;