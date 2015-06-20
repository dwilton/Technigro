define(['jquery'], function (jQuery) {

	'use strict';

	(function ($, window, document, undefined) {

		var pluginName = 'menu';

		function Plugin (element, options) {
			this.element = element;
			this.init();
		}

		Plugin.prototype = {

			init: function () {

				var menu = $(this.element);

				// Create observer
				menu.find('.menu').on('click', 'li a', function (e) {

					e.preventDefault();

					var item = $(this),
							li = item.parent(),
							content = item.attr('href');

					// Remove 'active' CSS class from all 'li' elements
					menu.find('.menu > ul > .active').removeClass('active');

					// Add 'active' CSS class to the select item 'li' element
					li.addClass('active');

					// Hide all item content
					menu.find('.menu-content > section').hide();

					// Show content, target DOM elements using the anchor name
					$(content).fadeIn(200);

				});

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