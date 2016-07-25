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

  function FlashMessage(ngNotify, _) {
    _classCallCheck(this, FlashMessage);

    this.ngNotify = ngNotify;
    this._ = _;
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
      var target = arguments.length <= 1 || arguments[1] === undefined ? 'body' : arguments[1];

      this.ngNotify.set(message, 'success', {
        target: target
      });
    }

    // Error message lists validation errors - red background

  }, {
    key: 'errors',
    value: function errors(err) {
      var target = arguments.length <= 1 || arguments[1] === undefined ? 'body' : arguments[1];

      var errors = err.data.errors;
      for (var key in errors) {
        var message = errors[key].message;
        this.messages.push('<li>' + this._.escape(message) + '</li>');
      }

      if (this.messages.length > 1) {
        this.messages = this.messages.join(' ');
      }

      this.ngNotify.set('<ul>' + this.messages + '</ul>', 'error', {
        target: target
      });
      this.messages = [];
    }
  }]);

  return FlashMessage;
}();

exports.FlashMessage = FlashMessage;