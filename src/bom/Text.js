/* 
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

(function() {

	var measureNode = document.createElement("div");
	var measureStyle = measureNode.style;

	measureStyle.position = "absolute";
	measureStyle.left = measureStyle.top = "-1000px";
	measureStyle.visibility = "hidden";

	var emptyStyle = {};

	var textNode = document.createTextNode('');
	textNode.nodeValue = "";
	measureNode.appendChild(textNode);

	document.body.appendChild(measureNode);

	/**
	 * Utility class to work with text e.g. measuring, formatting, etc.
	 */
	core.Module("core.bom.Text", {

		/**
		 * Measures the given text with the given styles. Supports optional
		 * maximum width for supporting text wrapping.
		 *
		 * @param text {String} Text to measure
		 * @param style {Map} Style properties to apply (supports `fontFamily`, `fontSize`, `fontStyle` and `lineHeight`)
		 * @param width {Number ? auto} Maximium width to apply
		 * @return {Map} Returns the `width` and `height` of the given text
		 */
		measure: function(text, style, width) {

			style = style || emptyStyle;

			measureStyle.width = width + "px" || "auto";
			measureStyle.fontFamily = style.fontFamily || "";
			measureStyle.fontSize = style.fontFamily || "";
			measureStyle.fontStyle = style.fontStyle || "";
			measureStyle.lineHeight = style.lineHeight || "";

			textNode.nodeValue = text;

			return {
				width: measureNode.offsetWidth,
				height: measureNode.offsetHeight
			};
		}

	});

})();
