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

	var emptyStyles = {};

	var textNode = document.createTextNode('');
	textNode.nodeValue = "";
	measureNode.appendChild(textNode);

	document.body.appendChild(measureNode);

	/**
	 * Utility class to work with text e.g. measuring, formatting, etc.
	 */
	core.Module("core.bom.Text", {

		/**
		 * {Map} Returns the `width` and `height` of the given @text {String} with the given 
		 * @styles {Map} (supports `fontFamily`, `fontSize`, `fontStyle` and `lineHeight`). 
		 * Supports optional maximum @width {Number ? "auto"} for supporting text wrapping.
		 */
		measure: function(text, style, width) {

			styles = styles || emptyStyles;

			measureStyle.width = width + "px" || "auto";
			measureStyle.fontFamily = styles.fontFamily || "";
			measureStyle.fontSize = styles.fontFamily || "";
			measureStyle.fontStyle = styles.fontStyle || "";
			measureStyle.lineHeight = styles.lineHeight || "";

			textNode.nodeValue = text;

			return {
				width: measureNode.offsetWidth,
				height: measureNode.offsetHeight
			};
		}

	});

})();
