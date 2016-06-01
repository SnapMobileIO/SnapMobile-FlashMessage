'use strict';

class FlashMessage {

  /**
   * Using ng-notify module to display notifications
   * Current configurations show notifications at top of page and
   * disappear after 3 seconds - these can be set in the config
  */
  constructor(ngNotify) {
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
  success(message, target = 'body') {
    this.ngNotify.set(message, 'success', {
      target: target
    });
  }

  // Error message lists validation errors - red background
  errors(err, target = 'body') {
    let errors = err.data.errors;
    for (let key in errors) {
      let message = errors[key].message;
      this.messages.push('<li>' + message + '</li>');
    }

    if (this.messages.length > 1) {
      this.messages = this.messages.join(' ');
    }

    this.ngNotify.set('<ul>' + this.messages + '</ul>', 'error', {
      target: target
    });
    this.messages = [];

  }

}

export { FlashMessage };
