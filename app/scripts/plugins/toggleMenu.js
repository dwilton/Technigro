define(['jquery'], function (jQuery) {

	'use strict';

	(function ($, window, document, undefined) {

		var pluginName = 'toggleMenu';

		function Plugin (element, options) {
			this.element = element;
			this.init();
		}

		Plugin.prototype = {

			init: function () {

				var toggleMenu = $(this.element);

				// Set initial state
				var item = toggleMenu.find('header .segmented-button input:checked'),
						content = '#' + item.attr('id') + '-content';

				$(content).fadeIn(200);

				// Create observer
				toggleMenu.find('header .segmented-button').on('click', 'input', function (e) {

					var item = $(this),
							content = '#' + item.attr('id') + '-content';

					console.log(content);

					// Hide all tab content
					toggleMenu.find('.toggle-menu-content > div').hide();

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