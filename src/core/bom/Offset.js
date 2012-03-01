(function(win) 
{
	/**
	 *
	 *
	 */
	core.Module("core.bom.Offset", 
	{
		/**
		 *
		 *
		 */
		get: function(elem) 
		{
			var obj = elem.getBoundingClientRect();
			
			var x = win.pageXOffset;
			var y = win.pageYOffset;
			
			obj.left += x;
			obj.top += y;
			obj.right += x;
			obj.bottom += y;

			return obj;
		}
	});
})(this);

