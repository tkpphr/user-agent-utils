/*!
 *  user-agent-utils
 *  Copyright (c) 2018 tkpphr
 *  Released under the MIT License.
 */
export declare function getBrowserType(): "ieolder" | "ie11" | "iemobile" | "edge" | "chrome" | "safari" | "firefox" | "opera" | "unknown";
export declare function getVendorPrefix(): "ms" | "moz" | "webkit" | "o" | "unknown";
export declare function getDeviceType(): "winpc" | "winphone" | "macpc" | "linuxpc" | "iphone" | "ipad" | "androidphone" | "androidpad" | "unknown";
export declare function isPC(): boolean;
export declare function isPhone(): boolean;
export declare function isTablet(): boolean;
