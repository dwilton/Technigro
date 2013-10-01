define(['jquery'], function (jQuery) {

	'use strict';

	(function ($, window, document, undefined) {

		var pluginName = 'tabs';

		function Plugin (element, options) {
			this.element = element;
			this.init();
		}

		Plugin.prototype = {

			init: function () {

				var tabs = $(this.element);

				// Create observer
				tabs.find('> .tabs').on('click', 'li a', function (e) {

					e.preventDefault();

					var tab = $(this),
							li = tab.parent(),
							content = tab.attr('href');

					// Remove 'active' CSS class from all 'li' elements
					tabs.find('> .tabs > .active').removeClass('active');

					// Add 'active' CSS class to the select tab 'li' element
					li.addClass('active');

					// Hide all tab content
					tabs.find('.tab-content > div').hide();

					// Show content, target DOM elements using the anchor name
					$(content).fadeIn(200);

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