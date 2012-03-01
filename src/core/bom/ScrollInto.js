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
  /**
   * Scrolls the @element {DOMElement} into view (x-axis only).
   * The optional @align {String?} could be configured with
   * `left` or `right` to enforce alignment. The default behavior 
   * is to scroll with the minimum effort to make the element visible.
   */
  scrollX : function(element, align)
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

    // Go up the parent chain
    while (parent && parent.nodeType != 9)
    {
      // "overflow" is always visible for both: document.body and document.documentElement
      if (parent.scrollWidth > parent.clientWidth && (parent === body || core.bom.Style.get(parent, "overflowX", true) != "visible"))
      {
        // Calculate parent data
        // Special handling for body element
        if (parent === body)
        {
          parentLeft = parent.scrollLeft;
          parentOuterWidth = core.bom.Viewport.getWidth();
          parentRight = parentLeft + parentOuterWidth;
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
          parentLeftBorder = core.bom.Style.getInteger(parent, "borderLeftWidth", true);
          parentRightBorder = core.bom.Style.getInteger(parent, "borderRightWidth", true);
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
        if (alignLeft) {
          scrollDiff = leftOffset;
        }
        // be sure that element is on right edge
        else if (alignRight) {
          scrollDiff = rightOffset + parentScrollBarWidth;
        }
        // element must go down when current left offset is smaller than 0 or 
        // when width is bigger than the inner width of the parent
        else if (leftOffset < 0 || elementWidth > parentClientWidth) {
          scrollDiff = leftOffset;
        }
        // element must go up when current right offset is bigger than 0
        else if (rightOffset > 0) {
          scrollDiff = rightOffset + parentScrollBarWidth;
        }

        parent.scrollLeft += scrollDiff;
      }

      parent = parent.parentNode;
    }
  },


  /**
   * Scrolls the @element {DOMElement} into view (y-axis only).
   * The optional @align {String?} could be configured with
   * `top` or `bottom` to enforce alignment. The default behavior 
   * is to scroll with the minimum effort to make the element visible.
   */
  scrollY : function(element, align)
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

    // Go up the parent chain
    while (parent && parent.nodeType != 9)
    {
      // "overflow" is always visible for both: document.body and document.documentElement
      if (parent.scrollHeight > parent.clientHeight && (parent === body || core.bom.Style.get(parent, "overflowY", true) != "visible"))
      {
        // Calculate parent data
        // Special handling for body element
        if (parent === body)
        {
          parentTop = parent.scrollTop;
          parentOuterHeight = core.bom.Viewport.getHeight();
          parentBottom = parentTop + parentOuterHeight;
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
          parentTopBorder = core.bom.Style.getInteger(parent, "borderTopWidth", true);
          parentBottomBorder = core.bom.Style.getInteger(parent, "borderBottomWidth", true);
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
        if (alignTop) {
          scrollDiff = topOffset;
        }
        // be sure that element is on bottom edge
        else if (alignBottom) {
          scrollDiff = bottomOffset + parentScrollBarHeight;
        }
        // element must go down when current top offset is smaller than 0
        // when height is bigger than the inner height of the parent
        else if (topOffset < 0 || elementHeight > parentClientHeight) {
          scrollDiff = topOffset;
        }
        // element must go up
        // * when current bottom offset is bigger than 0
        else if (bottomOffset > 0) {
          scrollDiff = bottomOffset + parentScrollBarHeight;
        }

        parent.scrollTop += scrollDiff;
      }

      parent = parent.parentNode;
    }
  },


  /**
   * The method scrolls the element into view.
   *
   * @param element {DOMElement} DOM element to scroll into view
   * @param alignX {String?} Horizontal alignment of the element.
   * @param alignY {String?} Vertical alignment of the element.
   */
  scroll : function(element, alignX, alignY)
  {
    this.scrollX(element, alignX);
    this.scrollY(element, alignY);
  }
})