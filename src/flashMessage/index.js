'use strict';

import angular from 'angular';
import ngNotify from 'ng-notify';
import { FlashMessage } from './flashMessage.service';

angular.module('FlashMessageModule', ['ngNotify'])
  .service('FlashMessage', FlashMessage);
