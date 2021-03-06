/* jshint ignore:start */
define(['jquery', 'theme_bootstrap/bootstrap', 'core/log'], function($, bootstrap, log) {

  "use strict"; // jshint ;_;

  return {
    init: function() {
        log.debug('Bootstrap opt in');
        $(function () {
            $('[data-toggle="popover"]').popover()
        });
    }
  }
});
/* jshint ignore:end */