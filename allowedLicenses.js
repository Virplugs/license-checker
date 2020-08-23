// NOTE: Licenses NEED to be compatible with our GPLv3 (only) license.
//       Also additional to that, licenses that require naming the dependency in
//       advertising, like the original BSD license (the obnoxious BSD advertising clause),
//       althoug compatible with the GPLv3, not acceptable for Virplugs.
//
//       Please raise an issue for discussion before adding a GPLv3 compatible license to
//       this list.

module.exports = {
  allowedLicenses: [
    "GPL-3.0",			// by definition
    "GPL-3.0-only",		// by definition
    "GPL-3.0-or-later",	// by definition
    "GPL-2.0-or-later",	// by definition
    "LGPL-2.0-only",	// https://www.gnu.org/licenses/license-list.html#LGPL
    "LGPL-2.0-or-later",// https://www.gnu.org/licenses/license-list.html#LGPL
    "LGPL-2.1-only",	// https://www.gnu.org/licenses/license-list.html#LGPLv2.1
    "LGPL-2.1-or-later",// https://www.gnu.org/licenses/license-list.html#LGPLv2.1
    "LGPL-3.0-only",	// https://www.gnu.org/licenses/license-list.html#LGPL
    "LGPL-3.0-or-later",// https://www.gnu.org/licenses/license-list.html#LGPL
    "AGPL",				// https://www.gnu.org/licenses/license-list.html#LGPL
    "BSL-1.0",			// https://www.gnu.org/licenses/license-list.html#boost
    "MIT", 				// https://www.gnu.org/licenses/license-list.html#Expat
    "Apache-2.0", 		// https://www.gnu.org/licenses/license-list.html#apache2
    "Apache License, Version 2.0",
    "ISC", 				// https://www.gnu.org/licenses/license-list.html#ISC
    "0BSD",				// https://tldrlegal.com/license/bsd-0-clause-license
    "BSD-2-Clause",		// https://www.gnu.org/licenses/license-list.html#FreeBSD
    "BSD-3-Clause",		// https://www.gnu.org/licenses/license-list.html#ModifiedBSD
    "BSL-1.0",			// https://www.gnu.org/licenses/license-list.html#boost
    "MPL-2.0",			// https://www.gnu.org/licenses/license-list.html#MPL-2.0
    "CC-BY-3.0",		// https://tldrlegal.com/license/creative-commons-attribution-(cc)
    "CC-BY-4.0",		// https://tldrlegal.com/license/creative-commons-attribution-4.0-international-(cc-by-4)
    "CC0-1.0",			// https://tldrlegal.com/license/creative-commons-cc0-1.0-universal
    "Unlicense",		// https://www.gnu.org/licenses/license-list.html#Unlicense
    "Zlib",				// https://www.gnu.org/licenses/license-list.html#ZLib
    "WTFPL",			// https://www.gnu.org/licenses/license-list.html#WTFPL

    // Custom licenses
    "Custom: http://npm-stat.com/charts.html",
    "Custom: https://github.com/RIAEvangelist/easy-stack",

    // Combinations and dual-licenses (combinations need to be in the above list individually):
    "(MIT AND CC-BY-3.0)",
    "(MIT OR CC0-1.0)",
    "(MIT OR Apache-2.0)",
    "(MIT OR WTFPL)",
    "Apache-2.0 WITH LLVM-exception",
    "(BSD-3-Clause OR GPL-2.0)",
    "(WTFPL OR MIT)",
    "(MIT AND Zlib)",
    "(WTFPL OR MIT)",
    "(BSD-3-Clause OR GPL-2.0)",
    "(BSD-2-Clause OR MIT OR Apache-2.0)",
    "WTFPL OR ISC",
    "(MIT AND BSD-3-Clause)",
  ],

  // This is a list of packages that have licenses that are not correctly notified to NPM
  // or not correctly identified by license-checker.
  // The license needs to be accepted in the above list.
  allowedPackages: [
    "css-select", 			// BSD 2-Clause "Simplified" License
    "domutils",				// BSD 2-Clause "Simplified" License
    "fswin", 				// BSD 1-Clause License
    "glob-to-regexp", 		// BSD 2-Clause License
    "json-schema",			// BSD 3-Clause "New" License
  ]
}
