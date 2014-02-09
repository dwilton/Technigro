/*
 * Hide CSS hover effects on touch devices
 */

define(['jquery'], function ($) {

	'use strict';

	// Remove :hover style from the stylesheet (:hover styles create bugs in iOS)
	if ('createTouch' in document) {

		try {

			$('body').on('touchmove', function (e) {
				if (!$('.scrollable').has($(e.target)).length) {
					e.preventDefault();
				}
			});

			var ignore = /:hover/;

			for (var i=0; i<document.styleSheets.length; i++) {

				var sheet = document.styleSheets[i];

				for (var j=sheet.cssRules.length-1; j>=0; j--) {

					var rule = sheet.cssRules[j];

					if (rule.type === CSSRule.STYLE_RULE && ignore.test(rule.selectorText)) {
							sheet.deleteRule(j);
					}

				}

			}

		}

		catch (e) {}
	}

});