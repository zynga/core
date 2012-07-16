0.7
===

- Use type data in assets delivered by Jasy-0.7 final
- Check possible keys in core.Interface
- Minor fixes

0.7-beta2
=========

- Added support for asset delegates to allow building custom urls based from asset IDs/config.
- Added support for asset profiles instead of old deploy/source handling as in Jasy-0.7-beta3
- Optimized String extension repeat()
- Fixed hasOwnProperty usage in ext/Object.js
- Removed temporary added FPS support

0.7-beta1
=========

- Major rework of asset handling for Jasy 0.7 with support for image sprites and image animations
- Removed load tracking from core.ui.Queue (this is not seen as useful in that class anymore)
- Improved system detection
- Added new Array extensions: zip() and last()
- Added new Function extension: throttle()
- Restructured Object extensions
- Updated build scripts for Jasy 0.7
- Added unit tests for new asset handling

0.6-beta2
=========

- Fixed Function.prototype.bind() issues

0.6-beta1
=========

- Refactoring
- Zynga Adoption

0.5-beta3
=========

- Renamed core.Bootstrap to core.Main and changed attach all methods previously added to the native {Object} to the class itself.
- Added trimLeft/trimRight

0.5-beta2
=========

- Reworked polyfills and extensions to be less dependend and finer grained for good browsers.
- Introduced core.template a Hogan.JS based template engine which is further optimized for performance and size.
- Reworked build script for unit tests to use Jasy and added a full blown source and build version to it.

0.5-beta1
=========

- Reworked polyfills, ES5 fixes etc. to work with new Jasy API documentation support.
- Changed structure of bootstrap/kernel. Splitted out some core features into Bootstrap.js
- Finalized Crypt APIs which are now well tested and being used by the Env.js module for computing the checksum.
- Cleanup of some old modules and classes

0.3.1
=====

- Minor bugfixes

0.3
===

- Initial Public Release 
