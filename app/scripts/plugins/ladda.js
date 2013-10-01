define(['jquery', 'ladda'], function (jQuery, Ladda) {

	'use strict';

	(function ($, window, document, undefined) {

		var pluginName = 'ladda';

		function Plugin (element, options) {
			this.element = element;
			this.options = options;
			this.init();
		}

		Plugin.prototype = {

			init: function () {

				var el = $(this.element);
				var spinnerSize = parseInt(el.css('font-size'), 10) * 2;

				// Add Ladda CSS style
				el.addClass('ladda-button');

				// Button type style
				el.attr('data-style', 'expand-left');

				// Determine spinner size based on font size, kinda sucks though for responsive on resize
				el.attr('data-spinner-size', spinnerSize);

				this.ladda = Ladda.create(this.element);

			},

			update: function (spin) {
				if(spin) {
					this.ladda.start(this.element);
				} else {
					this.ladda.stop();
				}
			},

		};

		$.fn[pluginName] = function(options) {
			return this.each(function() {
				if (!$.data(this, 'plugin_' + pluginName)) {
					$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
				}
			});
		};

	})(jQuery, window, document);

});