/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

/**
 *
 */
core.Module("core.bom.ScrollInto", 
{
	
  /*
  ---------------------------------------------------------------------------
    SCROLL INTO VIEW
  ---------------------------------------------------------------------------
  */

  /**
   * The method scrolls the element into view (x-axis only).
   *
   * @param element {Element} DOM element to scroll into view
   * @param stop {Element?null} Any parent element which functions as
   *   outest element to scroll. Default is the HTML document.
   * @param align {String?null} Alignment of the element. Allowed values:
   *   <code>left</code> or <code>right</code>. Could also be null.
   *   Without a given alignment the method tries to scroll the widget
   *   with the minimum effort needed.
   */
  scrollX : function(element, stop, align)
  {
    var parent = element.parentNode;
    var doc = element.ownerDocument;
    var body = doc.body;

    var parentLocation, parentLeft, parentRight;
    var parentOuterWidth, parentClientWidth, parentScrollWidth;
    var parentLeftBorder, parentRightBorder, parentScrollBarWidth;
    var elementLocation, elementLeft, elementRight, elementWidth;
    var leftOffset, rightOffset, scrollDiff;

    var alignLeft = align === "left";
    var alignRight = align === "right";

    // Correcting stop position
    stop = stop ? stop.parentNode : doc;

    // Go up the parent chain
    while (parent && parent != stop)
    {
      // "overflow" is always visible for both: document.body and document.documentElement
      if (parent.scrollWidth > parent.clientWidth && (parent === body || core.bom.Style.get(parent, "overflowX", true) != "visible"))
      {
        // Calculate parent data
        // Special handling for body element
        if (parent === body)
        {
          parentLeft = parent.scrollLeft;
          parentRight = parentLeft + core.bom.Viewport.getWidth();
          parentOuterWidth = core.bom.Viewport.getWidth();
          parentClientWidth = parent.clientWidth;
          parentScrollWidth = parent.scrollWidth;
          parentLeftBorder = 0;
          parentRightBorder = 0;
          parentScrollBarWidth = 0;
        }
        else
        {
          parentLocation = core.bom.Offset.get(parent);
          parentLeft = parentLocation.left;
          parentRight = parentLocation.right;
          parentOuterWidth = parent.offsetWidth;
          parentClientWidth = parent.clientWidth;
          parentScrollWidth = parent.scrollWidth;
          parentLeftBorder = parseInt(core.bom.Style.get(parent, "borderLeftWidth", true), 10) || 0;
          parentRightBorder = parseInt(core.bom.Style.get(parent, "borderRightWidth", true), 10) || 0;
          parentScrollBarWidth = parentOuterWidth - parentClientWidth - parentLeftBorder - parentRightBorder;
        }

        // Calculate element data
        elementLocation = core.bom.Offset.get(element);
        elementLeft = elementLocation.left;
        elementRight = elementLocation.right;
        elementWidth = element.offsetWidth;

        // Relative position from each other
        leftOffset = elementLeft - parentLeft - parentLeftBorder;
        rightOffset = elementRight - parentRight + parentRightBorder;

        // Scroll position rearrangment
        scrollDiff = 0;

        // be sure that element is on left edge
        if (alignLeft)
        {
          scrollDiff = leftOffset;
        }

        // be sure that element is on right edge
        else if (alignRight)
        {
          scrollDiff = rightOffset + parentScrollBarWidth;
        }

        // element must go down
        // * when current left offset is smaller than 0
        // * when width is bigger than the inner width of the parent
        else if (leftOffset < 0 || elementWidth > parentClientWidth)
        {
          scrollDiff = leftOffset;
        }

        // element must go up
        // * when current right offset is bigger than 0
        else if (rightOffset > 0)
        {
          scrollDiff = rightOffset + parentScrollBarWidth;
        }

        parent.scrollLeft += scrollDiff;
      }

      if (parent === body) {
        break;
      }

      parent = parent.parentNode;
    }
  },


  /**
   * The method scrolls the element into view (y-axis only).
   *
   * @param element {Element} DOM element to scroll into view
   * @param stop {Element?null} Any parent element which functions as
   *   outest element to scroll. Default is the HTML document.
   * @param align {String?null} Alignment of the element. Allowed values:
   *   <code>top</code> or <code>bottom</code>. Could also be null.
   *   Without a given alignment the method tries to scroll the widget
   *   with the minimum effort needed.
   */
  scrollY : function(element, stop, align)
  {
    var parent = element.parentNode;
    var doc = element.ownerDocument;
    var body = doc.body;

    var parentLocation, parentTop, parentBottom;
    var parentOuterHeight, parentClientHeight, parentScrollHeight;
    var parentTopBorder, parentBottomBorder, parentScrollBarHeight;
    var elementLocation, elementTop, elementBottom, elementHeight;
    var topOffset, bottomOffset, scrollDiff;

    var alignTop = align === "top";
    var alignBottom = align === "bottom";

    // Correcting stop position
    stop = stop ? stop.parentNode : doc;

    // Go up the parent chain
    while (parent && parent != stop)
    {
      // "overflow" is always visible for both: document.body and document.documentElement
      if (parent.scrollHeight > parent.clientHeight && (parent === body || core.bom.Style.get(parent, "overflowY", true) != "visible"))
      {
        // Calculate parent data
        // Special handling for body element
        if (parent === body)
        {
          parentTop = parent.scrollTop;
          parentBottom = parentTop + core.bom.Viewport.getHeight();
          parentOuterHeight = core.bom.Viewport.getHeight();
          parentClientHeight = parent.clientHeight;
          parentScrollHeight = parent.scrollHeight;
          parentTopBorder = 0;
          parentBottomBorder = 0;
          parentScrollBarHeight = 0;
        }
        else
        {
          parentLocation = core.bom.Offset.get(parent);
          parentTop = parentLocation.top;
          parentBottom = parentLocation.bottom;
          parentOuterHeight = parent.offsetHeight;
          parentClientHeight = parent.clientHeight;
          parentScrollHeight = parent.scrollHeight;
          parentTopBorder = parseInt(core.bom.Style.get(parent, "borderTopWidth", true), 10) || 0;
          parentBottomBorder = parseInt(core.bom.Style.get(parent, "borderBottomWidth", true), 10) || 0;
          parentScrollBarHeight = parentOuterHeight - parentClientHeight - parentTopBorder - parentBottomBorder;
        }

        // Calculate element data
        elementLocation = core.bom.Offset.get(element);
        elementTop = elementLocation.top;
        elementBottom = elementLocation.bottom;
        elementHeight = element.offsetHeight;

        // Relative position from each other
        topOffset = elementTop - parentTop - parentTopBorder;
        bottomOffset = elementBottom - parentBottom + parentBottomBorder;

        // Scroll position rearrangment
        scrollDiff = 0;

        // be sure that element is on top edge
        if (alignTop)
        {
          scrollDiff = topOffset;
        }

        // be sure that element is on bottom edge
        else if (alignBottom)
        {
          scrollDiff = bottomOffset + parentScrollBarHeight;
        }

        // element must go down
        // * when current top offset is smaller than 0
        // * when height is bigger than the inner height of the parent
        else if (topOffset < 0 || elementHeight > parentClientHeight)
        {
          scrollDiff = topOffset;
        }

        // element must go up
        // * when current bottom offset is bigger than 0
        else if (bottomOffset > 0)
        {
          scrollDiff = bottomOffset + parentScrollBarHeight;
        }

        parent.scrollTop += scrollDiff;
      }

      if (parent === body) {
        break;
      }

      parent = parent.parentNode;
    }
  },


  /**
   * The method scrolls the element into view.
   *
   * @param element {Element} DOM element to scroll into view
   * @param stop {Element?null} Any parent element which functions as
   *   outest element to scroll. Default is the HTML document.
   * @param alignX {String} Alignment of the element. Allowed values:
   *   <code>left</code> or <code>right</code>. Could also be undefined.
   *   Without a given alignment the method tries to scroll the widget
   *   with the minimum effort needed.
   * @param alignY {String} Alignment of the element. Allowed values:
   *   <code>top</code> or <code>bottom</code>. Could also be undefined.
   *   Without a given alignment the method tries to scroll the widget
   *   with the minimum effort needed.
   */
  scroll : function(element, stop, alignX, alignY)
  {
    this.scrollX(element, stop, alignX);
    this.scrollY(element, stop, alignY);
  }
	
})