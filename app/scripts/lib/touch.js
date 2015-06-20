/*
 * Hide CSS hover effects on touch devices (fixes iOS bug with hover display)
 */

define(['jquery'], function ($) {

	'use strict';

	// Remove :hover style from the stylesheet (:hover styles create bugs in iOS)
	if ('createTouch' in document) {

		// Fail silently
		try {

			// Fixme: Can't remember why we are doing this
			$('body').on('touchmove', function (e) {
				if (!$('.scrollable').has($(e.target)).length) {
					e.preventDefault();
				}
			});

			// Pattern to ignore
			var ignore = /:hover/;

			// Iterate all stylesheets
			for (var i = 0; i < document.styleSheets.length; i++) {

				var sheet = document.styleSheets[i];

				// Iterate all rules in the stylesheet
				for (var j = sheet.cssRules.length - 1; j >= 0; j--) {

					var rule = sheet.cssRules[j];

					// Delete the rule that matchs the ignore pattern
					if (rule.type === CSSRule.STYLE_RULE && ignore.test(rule.selectorText)) {
						sheet.deleteRule(j);
					}

				}

			}

		}

		catch (e) {}

	}

});