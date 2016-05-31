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
  success(message) {
    this.ngNotify.set(message, 'success');
  }

  // Error message lists validation errors - red background
  errors(err) {
    let errors = err.data.errors;
    for (let key in errors) {
      let message = errors[key].message;
      this.messages.push('<li>' + message + '</li>');
    }

    if (this.messages.length > 1) {
      this.messages = this.messages.join(' ');
    }

    this.ngNotify.set('<ul>' + this.messages + '</ul>', 'error');
    this.messages = [];

  }

}

export { FlashMessage };
