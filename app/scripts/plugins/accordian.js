define(['jquery'], function (jQuery) {

	'use strict';

	(function ($, window, document, undefined) {

		var pluginName = 'accordian';

		function Plugin (element, options) {
			this.element = element;
			this.init();
		}

		Plugin.prototype = {

			init: function () {

				var accordian = $(this.element);

				// Create observer
				accordian.on('click', 'li a', function (e) {

					e.preventDefault();

					var item = $(this),
							li = item.parent();

					// Remove 'active' CSS class from all 'li' elements
					accordian.find('> li.active').removeClass('active');

					// Add 'active' CSS class to the select item 'li' element
					li.addClass('active');

				});

			}

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