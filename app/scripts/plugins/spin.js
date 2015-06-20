define(['jquery', 'spin'], function (jQuery, Spinner) {

	'use strict';

	(function ($, window, document, undefined) {

		var pluginName = 'spin';

		function Plugin (element, options) {
			this.element = element;
			this.options = options;
			this.init();
		}

		Plugin.prototype = {

			init: function () {
				this.spinner = new Spinner(this.options).spin(this.element);
			},

			update: function (spin) {
				if(spin) {
					this.spinner.spin(this.element);
				} else {
					this.spinner.stop();
				}
			}

		};

		$.fn[pluginName] = function (options) {
			return this.each(function () {
				if (!$.data(this, 'plugin_' + pluginName)) {
					$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
				}
			});
		};

	})(jQuery, window, document);

});