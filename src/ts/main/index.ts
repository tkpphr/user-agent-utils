/*!
 *  user-agent-utils
 *  Copyright (c) 2018 tkpphr
 *  Released under the MIT License.
 */

export function getBrowserType():"ieolder"|"ie11"|"iemobile"|"edge"|"chrome"|"safari"|"firefox"|"opera"|"unknown"{
    const userAgent = window.navigator.userAgent.toLowerCase();
    if(userAgent.indexOf("msie") !== -1) {
        return "ieolder";
    } else if(userAgent.indexOf("trident") !== -1){
        return "ie11";
    } else if(userAgent.indexOf("iemobile")!==-1){
        return "iemobile";
    } else if(userAgent.indexOf("edge") !== -1) {
        return "edge";
    } else if(userAgent.indexOf("chrome") !== -1) {
        return "chrome";
    } else if(userAgent.indexOf("safari") !== -1) {
        return "safari";
    } else if(userAgent.indexOf("firefox") !== -1) {
        return "firefox";
    } else if(userAgent.indexOf("opera") !== -1) {
        return "opera";
    }
    return "unknown";
}

export function getVendorPrefix(): "ms"|"moz"|"webkit"|"o"|"unknown"{
    const browserType=getBrowserType();
    if(browserType.indexOf("ie")!==-1 || browserType==="edge"){
        return "ms";
    }else if(browserType==="firefox"){
        return "moz";
    }else if(browserType==="chrome" || browserType==="safari"){
        return "webkit";
    }else if(browserType==="opera"){
        return "o";
    }
    return "unknown";
}

export function getDeviceType():"winpc"|"winphone"|"macpc"|"linuxpc"|"iphone"|"ipad"|"androidphone"|"androidpad"|"unknown"{
    const userAgent = window.navigator.userAgent.toLowerCase();
    if(userAgent.indexOf("iphone") !== -1) {
        return "iphone";
    } else if(userAgent.indexOf("ipad") !== -1) {
        return "ipad";
    } else if(userAgent.indexOf("windows")!==-1){
        if(userAgent.indexOf("phone")!==-1){
            return "winphone";
        }else{
            return "winpc";
        }
    }else if(userAgent.indexOf("macintosh")!==-1){
        return "macpc";
    }else if(userAgent.indexOf("linux")!==-1){
        if(userAgent.indexOf("android") !== -1) {
            if(userAgent.indexOf("mobile") !== -1) {
                return "androidphone";
            } else {
                return "androidpad";
            }
        }else{
            return "linuxpc";
        }
    }
    return "unknown";
}

export function isPC(){
    return getDeviceType().indexOf("pc")!==-1;
}

export function isPhone(){
    return getDeviceType().indexOf("phone")!==-1;
}

export function isTablet(){
    return getDeviceType().indexOf("pad")!==-1;
}