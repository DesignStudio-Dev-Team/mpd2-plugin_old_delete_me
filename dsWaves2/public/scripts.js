/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EMPTY_ARR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EMPTY_OBJ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NOOP; });
/* unused harmony export PatchFlagNames */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return def; });
/* unused harmony export escapeHtml */
/* unused harmony export escapeHtmlComment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return extend; });
/* unused harmony export generateCodeFrame */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getGlobalThis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return hasChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return hasOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return hyphenate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return includeBooleanAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return invokeArrayFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return isArray; });
/* unused harmony export isBooleanAttr */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return isBuiltInDirective; });
/* unused harmony export isDate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return isGloballyWhitelisted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return isHTMLTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return isIntegerKey; });
/* unused harmony export isKnownHtmlAttr */
/* unused harmony export isKnownSvgAttr */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return isMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return isModelListener; });
/* unused harmony export isNoUnitNumericStyleProp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return isOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return isPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return isReservedProp; });
/* unused harmony export isSSRSafeAttrName */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return isSVGTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return isSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return isSpecialBooleanAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return isSymbol; });
/* unused harmony export isVoidTag */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return looseEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return looseIndexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return makeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return normalizeClass; });
/* unused harmony export normalizeProps */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return normalizeStyle; });
/* unused harmony export objectToString */
/* unused harmony export parseStringStyle */
/* unused harmony export propsToAttrMap */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return remove; });
/* unused harmony export slotFlagsText */
/* unused harmony export stringifyStyle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return toDisplayString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return toHandlerKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return toRawType; });
/* unused harmony export toTypeString */
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(',');
    for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
}

/**
 * dev only flag -> name mapping
 */
const PatchFlagNames = {
    [1 /* TEXT */]: `TEXT`,
    [2 /* CLASS */]: `CLASS`,
    [4 /* STYLE */]: `STYLE`,
    [8 /* PROPS */]: `PROPS`,
    [16 /* FULL_PROPS */]: `FULL_PROPS`,
    [32 /* HYDRATE_EVENTS */]: `HYDRATE_EVENTS`,
    [64 /* STABLE_FRAGMENT */]: `STABLE_FRAGMENT`,
    [128 /* KEYED_FRAGMENT */]: `KEYED_FRAGMENT`,
    [256 /* UNKEYED_FRAGMENT */]: `UNKEYED_FRAGMENT`,
    [512 /* NEED_PATCH */]: `NEED_PATCH`,
    [1024 /* DYNAMIC_SLOTS */]: `DYNAMIC_SLOTS`,
    [2048 /* DEV_ROOT_FRAGMENT */]: `DEV_ROOT_FRAGMENT`,
    [-1 /* HOISTED */]: `HOISTED`,
    [-2 /* BAIL */]: `BAIL`
};

/**
 * Dev only
 */
const slotFlagsText = {
    [1 /* STABLE */]: 'STABLE',
    [2 /* DYNAMIC */]: 'DYNAMIC',
    [3 /* FORWARDED */]: 'FORWARDED'
};

const GLOBALS_WHITE_LISTED = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' +
    'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' +
    'Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt';
const isGloballyWhitelisted = /*#__PURE__*/ makeMap(GLOBALS_WHITE_LISTED);

const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    // Split the content into individual lines but capture the newline sequence
    // that separated each line. This is important because the actual sequence is
    // needed to properly take into account the full line length for offset
    // comparison
    let lines = source.split(/(\r?\n)/);
    // Separate the lines and newline sequences into separate arrays for easier referencing
    const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
    lines = lines.filter((_, idx) => idx % 2 === 0);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
        count +=
            lines[i].length +
                ((newlineSequences[i] && newlineSequences[i].length) || 0);
        if (count >= start) {
            for (let j = i - range; j <= i + range || end > count; j++) {
                if (j < 0 || j >= lines.length)
                    continue;
                const line = j + 1;
                res.push(`${line}${' '.repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                const newLineSeqLength = (newlineSequences[j] && newlineSequences[j].length) || 0;
                if (j === i) {
                    // push underline
                    const pad = start - (count - (lineLength + newLineSeqLength));
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + ' '.repeat(pad) + '^'.repeat(length));
                }
                else if (j > i) {
                    if (end > count) {
                        const length = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + '^'.repeat(length));
                    }
                    count += lineLength + newLineSeqLength;
                }
            }
            break;
        }
    }
    return res.join('\n');
}

/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs);
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */
const isBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs +
    `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,` +
    `loop,open,required,reversed,scoped,seamless,` +
    `checked,muted,multiple,selected`);
/**
 * Boolean attributes should be included if the value is truthy or ''.
 * e.g. `<select multiple>` compiles to `{ multiple: '' }`
 */
function includeBooleanAttr(value) {
    return !!value || value === '';
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) {
        return attrValidationCache[name];
    }
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) {
        console.error(`unsafe attribute name: ${name}`);
    }
    return (attrValidationCache[name] = !isUnsafe);
}
const propsToAttrMap = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
};
/**
 * CSS properties that accept plain numbers
 */
const isNoUnitNumericStyleProp = /*#__PURE__*/ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,` +
    `border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,` +
    `columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,` +
    `grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,` +
    `grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,` +
    `line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,` +
    // SVG
    `fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,` +
    `stroke-miterlimit,stroke-opacity,stroke-width`);
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */
const isKnownHtmlAttr = /*#__PURE__*/ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,` +
    `autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,` +
    `border,buffered,capture,challenge,charset,checked,cite,class,code,` +
    `codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,` +
    `coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,` +
    `disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,` +
    `formaction,formenctype,formmethod,formnovalidate,formtarget,headers,` +
    `height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,` +
    `ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,` +
    `manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,` +
    `open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,` +
    `referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,` +
    `selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,` +
    `start,step,style,summary,tabindex,target,title,translate,type,usemap,` +
    `value,width,wrap`);
/**
 * Generated from https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
 */
const isKnownSvgAttr = /*#__PURE__*/ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,` +
    `arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,` +
    `baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,` +
    `clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,` +
    `color-interpolation-filters,color-profile,color-rendering,` +
    `contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,` +
    `descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,` +
    `dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,` +
    `fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,` +
    `font-family,font-size,font-size-adjust,font-stretch,font-style,` +
    `font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,` +
    `glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,` +
    `gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,` +
    `horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,` +
    `k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,` +
    `lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,` +
    `marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,` +
    `mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,` +
    `name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,` +
    `overflow,overline-position,overline-thickness,panose-1,paint-order,path,` +
    `pathLength,patternContentUnits,patternTransform,patternUnits,ping,` +
    `pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,` +
    `preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,` +
    `rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,` +
    `restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,` +
    `specularConstant,specularExponent,speed,spreadMethod,startOffset,` +
    `stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,` +
    `strikethrough-position,strikethrough-thickness,string,stroke,` +
    `stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,` +
    `stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,` +
    `systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,` +
    `text-decoration,text-rendering,textLength,to,transform,transform-origin,` +
    `type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,` +
    `unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,` +
    `v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,` +
    `vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,` +
    `writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,` +
    `xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,` +
    `xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);

function normalizeStyle(value) {
    if (isArray(value)) {
        const res = {};
        for (let i = 0; i < value.length; i++) {
            const item = value[i];
            const normalized = isString(item)
                ? parseStringStyle(item)
                : normalizeStyle(item);
            if (normalized) {
                for (const key in normalized) {
                    res[key] = normalized[key];
                }
            }
        }
        return res;
    }
    else if (isString(value)) {
        return value;
    }
    else if (isObject(value)) {
        return value;
    }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach(item => {
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function stringifyStyle(styles) {
    let ret = '';
    if (!styles || isString(styles)) {
        return ret;
    }
    for (const key in styles) {
        const value = styles[key];
        const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
        if (isString(value) ||
            (typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey))) {
            // only render valid values
            ret += `${normalizedKey}:${value};`;
        }
    }
    return ret;
}
function normalizeClass(value) {
    let res = '';
    if (isString(value)) {
        res = value;
    }
    else if (isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            const normalized = normalizeClass(value[i]);
            if (normalized) {
                res += normalized + ' ';
            }
        }
    }
    else if (isObject(value)) {
        for (const name in value) {
            if (value[name]) {
                res += name + ' ';
            }
        }
    }
    return res.trim();
}
function normalizeProps(props) {
    if (!props)
        return null;
    let { class: klass, style } = props;
    if (klass && !isString(klass)) {
        props.class = normalizeClass(klass);
    }
    if (style) {
        props.style = normalizeStyle(style);
    }
    return props;
}

// These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const HTML_TAGS = 'html,body,base,head,link,meta,style,title,address,article,aside,footer,' +
    'header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,' +
    'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' +
    'data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,' +
    'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' +
    'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' +
    'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' +
    'option,output,progress,select,textarea,details,dialog,menu,' +
    'summary,template,blockquote,iframe,tfoot';
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element
const SVG_TAGS = 'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' +
    'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' +
    'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' +
    'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' +
    'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' +
    'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' +
    'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' +
    'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' +
    'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' +
    'text,textPath,title,tspan,unknown,use,view';
const VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */
const isHTMLTag = /*#__PURE__*/ makeMap(HTML_TAGS);
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */
const isSVGTag = /*#__PURE__*/ makeMap(SVG_TAGS);
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */
const isVoidTag = /*#__PURE__*/ makeMap(VOID_TAGS);

const escapeRE = /["'&<>]/;
function escapeHtml(string) {
    const str = '' + string;
    const match = escapeRE.exec(str);
    if (!match) {
        return str;
    }
    let html = '';
    let escaped;
    let index;
    let lastIndex = 0;
    for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
            case 34: // "
                escaped = '&quot;';
                break;
            case 38: // &
                escaped = '&amp;';
                break;
            case 39: // '
                escaped = '&#39;';
                break;
            case 60: // <
                escaped = '&lt;';
                break;
            case 62: // >
                escaped = '&gt;';
                break;
            default:
                continue;
        }
        if (lastIndex !== index) {
            html += str.slice(lastIndex, index);
        }
        lastIndex = index + 1;
        html += escaped;
    }
    return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
// https://www.w3.org/TR/html52/syntax.html#comments
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
    return src.replace(commentStripRE, '');
}

function looseCompareArrays(a, b) {
    if (a.length !== b.length)
        return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
        equal = looseEqual(a[i], b[i]);
    }
    return equal;
}
function looseEqual(a, b) {
    if (a === b)
        return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
        /* istanbul ignore if: this if will probably never be called */
        if (!aValidType || !bValidType) {
            return false;
        }
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) {
            return false;
        }
        for (const key in a) {
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if ((aHasKey && !bHasKey) ||
                (!aHasKey && bHasKey) ||
                !looseEqual(a[key], b[key])) {
                return false;
            }
        }
    }
    return String(a) === String(b);
}
function looseIndexOf(arr, val) {
    return arr.findIndex(item => looseEqual(item, val));
}

/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */
const toDisplayString = (val) => {
    return isString(val)
        ? val
        : val == null
            ? ''
            : isArray(val) ||
                (isObject(val) &&
                    (val.toString === objectToString || !isFunction(val.toString)))
                ? JSON.stringify(val, replacer, 2)
                : String(val);
};
const replacer = (_key, val) => {
    // can't use isRef here since @vue/shared has no deps
    if (val && val.__v_isRef) {
        return replacer(_key, val.value);
    }
    else if (isMap(val)) {
        return {
            [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val]) => {
                entries[`${key} =>`] = val;
                return entries;
            }, {})
        };
    }
    else if (isSet(val)) {
        return {
            [`Set(${val.size})`]: [...val.values()]
        };
    }
    else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
        return String(val);
    }
    return val;
};

const EMPTY_OBJ = ( false)
    ? undefined
    : {};
const EMPTY_ARR = ( false) ? undefined : [];
const NOOP = () => { };
/**
 * Always return false.
 */
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith('onUpdate:');
const extend = Object.assign;
const remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
        arr.splice(i, 1);
    }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === '[object Map]';
const isSet = (val) => toTypeString(val) === '[object Set]';
const isDate = (val) => val instanceof Date;
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
const isSymbol = (val) => typeof val === 'symbol';
const isObject = (val) => val !== null && typeof val === 'object';
const isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
    // extract "RawType" from strings like "[object RawType]"
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === '[object Object]';
const isIntegerKey = (key) => isString(key) &&
    key !== 'NaN' &&
    key[0] !== '-' &&
    '' + parseInt(key, 10) === key;
const isReservedProp = /*#__PURE__*/ makeMap(
// the leading comma is intentional so empty string "" is also included
',key,ref,ref_for,ref_key,' +
    'onVnodeBeforeMount,onVnodeMounted,' +
    'onVnodeBeforeUpdate,onVnodeUpdated,' +
    'onVnodeBeforeUnmount,onVnodeUnmounted');
const isBuiltInDirective = /*#__PURE__*/ makeMap('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo');
const cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return ((str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    });
};
const camelizeRE = /-(\w)/g;
/**
 * @private
 */
const camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
});
const hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, '-$1').toLowerCase());
/**
 * @private
 */
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
/**
 * @private
 */
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
// compare whether a value has changed, accounting for NaN.
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
        fns[i](arg);
    }
};
const def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
    });
};
const toNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
    return (_globalThis ||
        (_globalThis =
            typeof globalThis !== 'undefined'
                ? globalThis
                : typeof self !== 'undefined'
                    ? self
                    : typeof window !== 'undefined'
                        ? window
                        : typeof global !== 'undefined'
                            ? global
                            : {}));
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.default = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(8);

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDevtoolsGlobalHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isProxyAvailable; });
function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
    // @ts-ignore
    return (typeof navigator !== 'undefined' && typeof window !== 'undefined')
        ? window
        : typeof global !== 'undefined'
            ? global
            : {};
}
const isProxyAvailable = typeof Proxy === 'function';

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(3);
var normalizeHeaderName = __webpack_require__(26);
var enhanceError = __webpack_require__(10);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(11);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(11);
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(25)))

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);
var settle = __webpack_require__(27);
var cookies = __webpack_require__(28);
var buildURL = __webpack_require__(9);
var buildFullPath = __webpack_require__(29);
var parseHeaders = __webpack_require__(32);
var isURLSameOrigin = __webpack_require__(33);
var createError = __webpack_require__(12);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        config.transitional && config.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(10);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);
var bind = __webpack_require__(8);
var Axios = __webpack_require__(21);
var mergeConfig = __webpack_require__(14);
var defaults = __webpack_require__(5);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(15);
axios.CancelToken = __webpack_require__(36);
axios.isCancel = __webpack_require__(13);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(37);

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(38);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);
var buildURL = __webpack_require__(9);
var InterceptorManager = __webpack_require__(22);
var dispatchRequest = __webpack_require__(23);
var mergeConfig = __webpack_require__(14);
var validator = __webpack_require__(34);

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      forcedJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      clarifyTimeoutError: validators.transitional(validators.boolean, '1.0.0')
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);
var transformData = __webpack_require__(24);
var isCancel = __webpack_require__(13);
var defaults = __webpack_require__(5);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);
var defaults = __webpack_require__(5);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(12);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(30);
var combineURLs = __webpack_require__(31);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pkg = __webpack_require__(35);

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};
var currentVerArr = pkg.version.split('.');

/**
 * Compare package versions
 * @param {string} version
 * @param {string?} thanVersion
 * @returns {boolean}
 */
function isOlderVersion(version, thanVersion) {
  var pkgVersionArr = thanVersion ? thanVersion.split('.') : currentVerArr;
  var destVer = version.split('.');
  for (var i = 0; i < 3; i++) {
    if (pkgVersionArr[i] > destVer[i]) {
      return true;
    } else if (pkgVersionArr[i] < destVer[i]) {
      return false;
    }
  }
  return false;
}

/**
 * Transitional option validator
 * @param {function|boolean?} validator
 * @param {string?} version
 * @param {string} message
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  var isDeprecated = version && isOlderVersion(version);

  function formatMessage(opt, desc) {
    return '[Axios v' + pkg.version + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed in ' + version));
    }

    if (isDeprecated && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  isOlderVersion: isOlderVersion,
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),
/* 35 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"axios\",\"version\":\"0.21.4\",\"description\":\"Promise based HTTP client for the browser and node.js\",\"main\":\"index.js\",\"scripts\":{\"test\":\"grunt test\",\"start\":\"node ./sandbox/server.js\",\"build\":\"NODE_ENV=production grunt build\",\"preversion\":\"npm test\",\"version\":\"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json\",\"postversion\":\"git push && git push --tags\",\"examples\":\"node ./examples/server.js\",\"coveralls\":\"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js\",\"fix\":\"eslint --fix lib/**/*.js\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/axios/axios.git\"},\"keywords\":[\"xhr\",\"http\",\"ajax\",\"promise\",\"node\"],\"author\":\"Matt Zabriskie\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/axios/axios/issues\"},\"homepage\":\"https://axios-http.com\",\"devDependencies\":{\"coveralls\":\"^3.0.0\",\"es6-promise\":\"^4.2.4\",\"grunt\":\"^1.3.0\",\"grunt-banner\":\"^0.6.0\",\"grunt-cli\":\"^1.2.0\",\"grunt-contrib-clean\":\"^1.1.0\",\"grunt-contrib-watch\":\"^1.0.0\",\"grunt-eslint\":\"^23.0.0\",\"grunt-karma\":\"^4.0.0\",\"grunt-mocha-test\":\"^0.13.3\",\"grunt-ts\":\"^6.0.0-beta.19\",\"grunt-webpack\":\"^4.0.2\",\"istanbul-instrumenter-loader\":\"^1.0.0\",\"jasmine-core\":\"^2.4.1\",\"karma\":\"^6.3.2\",\"karma-chrome-launcher\":\"^3.1.0\",\"karma-firefox-launcher\":\"^2.1.0\",\"karma-jasmine\":\"^1.1.1\",\"karma-jasmine-ajax\":\"^0.1.13\",\"karma-safari-launcher\":\"^1.0.0\",\"karma-sauce-launcher\":\"^4.3.6\",\"karma-sinon\":\"^1.0.5\",\"karma-sourcemap-loader\":\"^0.3.8\",\"karma-webpack\":\"^4.0.2\",\"load-grunt-tasks\":\"^3.5.2\",\"minimist\":\"^1.2.0\",\"mocha\":\"^8.2.1\",\"sinon\":\"^4.5.0\",\"terser-webpack-plugin\":\"^4.2.3\",\"typescript\":\"^4.0.5\",\"url-search-params\":\"^0.10.0\",\"webpack\":\"^4.44.2\",\"webpack-dev-server\":\"^3.11.0\"},\"browser\":{\"./lib/adapters/http.js\":\"./lib/adapters/xhr.js\"},\"jsdelivr\":\"dist/axios.min.js\",\"unpkg\":\"dist/axios.min.js\",\"typings\":\"./index.d.ts\",\"dependencies\":{\"follow-redirects\":\"^1.14.0\"},\"bundlesize\":[{\"path\":\"./dist/axios.min.js\",\"threshold\":\"5kB\"}]}");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(15);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/css/index.css
var css = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js


function warn(msg, ...args) {
    console.warn(`[Vue warn] ${msg}`, ...args);
}

let activeEffectScope;
class EffectScope {
    constructor(detached = false) {
        this.active = true;
        this.effects = [];
        this.cleanups = [];
        if (!detached && activeEffectScope) {
            this.parent = activeEffectScope;
            this.index =
                (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
        }
    }
    run(fn) {
        if (this.active) {
            try {
                activeEffectScope = this;
                return fn();
            }
            finally {
                activeEffectScope = this.parent;
            }
        }
        else if ((false)) {}
    }
    on() {
        activeEffectScope = this;
    }
    off() {
        activeEffectScope = this.parent;
    }
    stop(fromParent) {
        if (this.active) {
            let i, l;
            for (i = 0, l = this.effects.length; i < l; i++) {
                this.effects[i].stop();
            }
            for (i = 0, l = this.cleanups.length; i < l; i++) {
                this.cleanups[i]();
            }
            if (this.scopes) {
                for (i = 0, l = this.scopes.length; i < l; i++) {
                    this.scopes[i].stop(true);
                }
            }
            // nested scope, dereference from parent to avoid memory leaks
            if (this.parent && !fromParent) {
                // optimized O(1) removal
                const last = this.parent.scopes.pop();
                if (last && last !== this) {
                    this.parent.scopes[this.index] = last;
                    last.index = this.index;
                }
            }
            this.active = false;
        }
    }
}
function effectScope(detached) {
    return new EffectScope(detached);
}
function recordEffectScope(effect, scope = activeEffectScope) {
    if (scope && scope.active) {
        scope.effects.push(effect);
    }
}
function getCurrentScope() {
    return activeEffectScope;
}
function onScopeDispose(fn) {
    if (activeEffectScope) {
        activeEffectScope.cleanups.push(fn);
    }
    else if ((false)) {}
}

const createDep = (effects) => {
    const dep = new Set(effects);
    dep.w = 0;
    dep.n = 0;
    return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
    if (deps.length) {
        for (let i = 0; i < deps.length; i++) {
            deps[i].w |= trackOpBit; // set was tracked
        }
    }
};
const finalizeDepMarkers = (effect) => {
    const { deps } = effect;
    if (deps.length) {
        let ptr = 0;
        for (let i = 0; i < deps.length; i++) {
            const dep = deps[i];
            if (wasTracked(dep) && !newTracked(dep)) {
                dep.delete(effect);
            }
            else {
                deps[ptr++] = dep;
            }
            // clear bits
            dep.w &= ~trackOpBit;
            dep.n &= ~trackOpBit;
        }
        deps.length = ptr;
    }
};

const targetMap = new WeakMap();
// The number of effects currently being tracked recursively.
let effectTrackDepth = 0;
let trackOpBit = 1;
/**
 * The bitwise track markers support at most 30 levels of recursion.
 * This value is chosen to enable modern JS engines to use a SMI on all platforms.
 * When recursion depth is greater, fall back to using a full cleanup.
 */
const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol(( false) ? undefined : '');
const MAP_KEY_ITERATE_KEY = Symbol(( false) ? undefined : '');
class ReactiveEffect {
    constructor(fn, scheduler = null, scope) {
        this.fn = fn;
        this.scheduler = scheduler;
        this.active = true;
        this.deps = [];
        this.parent = undefined;
        recordEffectScope(this, scope);
    }
    run() {
        if (!this.active) {
            return this.fn();
        }
        let parent = activeEffect;
        let lastShouldTrack = shouldTrack;
        while (parent) {
            if (parent === this) {
                return;
            }
            parent = parent.parent;
        }
        try {
            this.parent = activeEffect;
            activeEffect = this;
            shouldTrack = true;
            trackOpBit = 1 << ++effectTrackDepth;
            if (effectTrackDepth <= maxMarkerBits) {
                initDepMarkers(this);
            }
            else {
                cleanupEffect(this);
            }
            return this.fn();
        }
        finally {
            if (effectTrackDepth <= maxMarkerBits) {
                finalizeDepMarkers(this);
            }
            trackOpBit = 1 << --effectTrackDepth;
            activeEffect = this.parent;
            shouldTrack = lastShouldTrack;
            this.parent = undefined;
        }
    }
    stop() {
        if (this.active) {
            cleanupEffect(this);
            if (this.onStop) {
                this.onStop();
            }
            this.active = false;
        }
    }
}
function cleanupEffect(effect) {
    const { deps } = effect;
    if (deps.length) {
        for (let i = 0; i < deps.length; i++) {
            deps[i].delete(effect);
        }
        deps.length = 0;
    }
}
function reactivity_esm_bundler_effect(fn, options) {
    if (fn.effect) {
        fn = fn.effect.fn;
    }
    const _effect = new ReactiveEffect(fn);
    if (options) {
        Object(shared_esm_bundler["h" /* extend */])(_effect, options);
        if (options.scope)
            recordEffectScope(_effect, options.scope);
    }
    if (!options || !options.lazy) {
        _effect.run();
    }
    const runner = _effect.run.bind(_effect);
    runner.effect = _effect;
    return runner;
}
function stop(runner) {
    runner.effect.stop();
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
}
function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === undefined ? true : last;
}
function track(target, type, key) {
    if (shouldTrack && activeEffect) {
        let depsMap = targetMap.get(target);
        if (!depsMap) {
            targetMap.set(target, (depsMap = new Map()));
        }
        let dep = depsMap.get(key);
        if (!dep) {
            depsMap.set(key, (dep = createDep()));
        }
        const eventInfo = ( false)
            ? undefined
            : undefined;
        trackEffects(dep, eventInfo);
    }
}
function trackEffects(dep, debuggerEventExtraInfo) {
    let shouldTrack = false;
    if (effectTrackDepth <= maxMarkerBits) {
        if (!newTracked(dep)) {
            dep.n |= trackOpBit; // set newly tracked
            shouldTrack = !wasTracked(dep);
        }
    }
    else {
        // Full cleanup mode.
        shouldTrack = !dep.has(activeEffect);
    }
    if (shouldTrack) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
        if (false) {}
    }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
        // never been tracked
        return;
    }
    let deps = [];
    if (type === "clear" /* CLEAR */) {
        // collection being cleared
        // trigger all effects for target
        deps = [...depsMap.values()];
    }
    else if (key === 'length' && Object(shared_esm_bundler["o" /* isArray */])(target)) {
        depsMap.forEach((dep, key) => {
            if (key === 'length' || key >= newValue) {
                deps.push(dep);
            }
        });
    }
    else {
        // schedule runs for SET | ADD | DELETE
        if (key !== void 0) {
            deps.push(depsMap.get(key));
        }
        // also run for iteration key on ADD | DELETE | Map.SET
        switch (type) {
            case "add" /* ADD */:
                if (!Object(shared_esm_bundler["o" /* isArray */])(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                    if (Object(shared_esm_bundler["u" /* isMap */])(target)) {
                        deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                    }
                }
                else if (Object(shared_esm_bundler["t" /* isIntegerKey */])(key)) {
                    // new index added to array -> length changes
                    deps.push(depsMap.get('length'));
                }
                break;
            case "delete" /* DELETE */:
                if (!Object(shared_esm_bundler["o" /* isArray */])(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                    if (Object(shared_esm_bundler["u" /* isMap */])(target)) {
                        deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                    }
                }
                break;
            case "set" /* SET */:
                if (Object(shared_esm_bundler["u" /* isMap */])(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                }
                break;
        }
    }
    const eventInfo = ( false)
        ? undefined
        : undefined;
    if (deps.length === 1) {
        if (deps[0]) {
            if ((false)) {}
            else {
                triggerEffects(deps[0]);
            }
        }
    }
    else {
        const effects = [];
        for (const dep of deps) {
            if (dep) {
                effects.push(...dep);
            }
        }
        if ((false)) {}
        else {
            triggerEffects(createDep(effects));
        }
    }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
    // spread into array for stabilization
    for (const effect of Object(shared_esm_bundler["o" /* isArray */])(dep) ? dep : [...dep]) {
        if (effect !== activeEffect || effect.allowRecurse) {
            if (false) {}
            if (effect.scheduler) {
                effect.scheduler();
            }
            else {
                effect.run();
            }
        }
    }
}

const isNonTrackableKeys = /*#__PURE__*/ Object(shared_esm_bundler["I" /* makeMap */])(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol)
    .map(key => Symbol[key])
    .filter(shared_esm_bundler["F" /* isSymbol */]));
const reactivity_esm_bundler_get = /*#__PURE__*/ createGetter();
const shallowGet = /*#__PURE__*/ createGetter(false, true);
const readonlyGet = /*#__PURE__*/ createGetter(true);
const shallowReadonlyGet = /*#__PURE__*/ createGetter(true, true);
const arrayInstrumentations = /*#__PURE__*/ createArrayInstrumentations();
function createArrayInstrumentations() {
    const instrumentations = {};
    ['includes', 'indexOf', 'lastIndexOf'].forEach(key => {
        instrumentations[key] = function (...args) {
            const arr = toRaw(this);
            for (let i = 0, l = this.length; i < l; i++) {
                track(arr, "get" /* GET */, i + '');
            }
            // we run the method using the original args first (which may be reactive)
            const res = arr[key](...args);
            if (res === -1 || res === false) {
                // if that didn't work, run it again using raw values.
                return arr[key](...args.map(toRaw));
            }
            else {
                return res;
            }
        };
    });
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(key => {
        instrumentations[key] = function (...args) {
            pauseTracking();
            const res = toRaw(this)[key].apply(this, args);
            resetTracking();
            return res;
        };
    });
    return instrumentations;
}
function createGetter(isReadonly = false, shallow = false) {
    return function get(target, key, receiver) {
        if (key === "__v_isReactive" /* IS_REACTIVE */) {
            return !isReadonly;
        }
        else if (key === "__v_isReadonly" /* IS_READONLY */) {
            return isReadonly;
        }
        else if (key === "__v_isShallow" /* IS_SHALLOW */) {
            return shallow;
        }
        else if (key === "__v_raw" /* RAW */ &&
            receiver ===
                (isReadonly
                    ? shallow
                        ? shallowReadonlyMap
                        : readonlyMap
                    : shallow
                        ? shallowReactiveMap
                        : reactiveMap).get(target)) {
            return target;
        }
        const targetIsArray = Object(shared_esm_bundler["o" /* isArray */])(target);
        if (!isReadonly && targetIsArray && Object(shared_esm_bundler["k" /* hasOwn */])(arrayInstrumentations, key)) {
            return Reflect.get(arrayInstrumentations, key, receiver);
        }
        const res = Reflect.get(target, key, receiver);
        if (Object(shared_esm_bundler["F" /* isSymbol */])(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
            return res;
        }
        if (!isReadonly) {
            track(target, "get" /* GET */, key);
        }
        if (shallow) {
            return res;
        }
        if (isRef(res)) {
            // ref unwrapping - does not apply for Array + integer key.
            const shouldUnwrap = !targetIsArray || !Object(shared_esm_bundler["t" /* isIntegerKey */])(key);
            return shouldUnwrap ? res.value : res;
        }
        if (Object(shared_esm_bundler["w" /* isObject */])(res)) {
            // Convert returned value into a proxy as well. we do the isObject check
            // here to avoid invalid value warning. Also need to lazy access readonly
            // and reactive here to avoid circular dependency.
            return isReadonly ? readonly(res) : reactive(res);
        }
        return res;
    };
}
const reactivity_esm_bundler_set = /*#__PURE__*/ createSetter();
const shallowSet = /*#__PURE__*/ createSetter(true);
function createSetter(shallow = false) {
    return function set(target, key, value, receiver) {
        let oldValue = target[key];
        if (reactivity_esm_bundler_isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
            return false;
        }
        if (!shallow && !reactivity_esm_bundler_isReadonly(value)) {
            if (!reactivity_esm_bundler_isShallow(value)) {
                value = toRaw(value);
                oldValue = toRaw(oldValue);
            }
            if (!Object(shared_esm_bundler["o" /* isArray */])(target) && isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
                return true;
            }
        }
        const hadKey = Object(shared_esm_bundler["o" /* isArray */])(target) && Object(shared_esm_bundler["t" /* isIntegerKey */])(key)
            ? Number(key) < target.length
            : Object(shared_esm_bundler["k" /* hasOwn */])(target, key);
        const result = Reflect.set(target, key, value, receiver);
        // don't trigger if target is something up in the prototype chain of original
        if (target === toRaw(receiver)) {
            if (!hadKey) {
                trigger(target, "add" /* ADD */, key, value);
            }
            else if (Object(shared_esm_bundler["j" /* hasChanged */])(value, oldValue)) {
                trigger(target, "set" /* SET */, key, value, oldValue);
            }
        }
        return result;
    };
}
function deleteProperty(target, key) {
    const hadKey = Object(shared_esm_bundler["k" /* hasOwn */])(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
        trigger(target, "delete" /* DELETE */, key, undefined, oldValue);
    }
    return result;
}
function reactivity_esm_bundler_has(target, key) {
    const result = Reflect.has(target, key);
    if (!Object(shared_esm_bundler["F" /* isSymbol */])(key) || !builtInSymbols.has(key)) {
        track(target, "has" /* HAS */, key);
    }
    return result;
}
function ownKeys(target) {
    track(target, "iterate" /* ITERATE */, Object(shared_esm_bundler["o" /* isArray */])(target) ? 'length' : ITERATE_KEY);
    return Reflect.ownKeys(target);
}
const mutableHandlers = {
    get: reactivity_esm_bundler_get,
    set: reactivity_esm_bundler_set,
    deleteProperty,
    has: reactivity_esm_bundler_has,
    ownKeys
};
const readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
        if ((false)) {}
        return true;
    },
    deleteProperty(target, key) {
        if ((false)) {}
        return true;
    }
};
const shallowReactiveHandlers = /*#__PURE__*/ Object(shared_esm_bundler["h" /* extend */])({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
});
// Props handlers are special in the sense that it should not unwrap top-level
// refs (in order to allow refs to be explicitly passed down), but should
// retain the reactivity of the normal readonly object.
const shallowReadonlyHandlers = /*#__PURE__*/ Object(shared_esm_bundler["h" /* extend */])({}, readonlyHandlers, {
    get: shallowReadonlyGet
});

const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly = false, isShallow = false) {
    // #1772: readonly(reactive(Map)) should return readonly + reactive version
    // of the value
    target = target["__v_raw" /* RAW */];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
        !isReadonly && track(rawTarget, "get" /* GET */, key);
    }
    !isReadonly && track(rawTarget, "get" /* GET */, rawKey);
    const { has } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has.call(rawTarget, key)) {
        return wrap(target.get(key));
    }
    else if (has.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
    }
    else if (target !== rawTarget) {
        // #3602 readonly(reactive(Map))
        // ensure that the nested reactive `Map` can do tracking for itself
        target.get(key);
    }
}
function has$1(key, isReadonly = false) {
    const target = this["__v_raw" /* RAW */];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
        !isReadonly && track(rawTarget, "has" /* HAS */, key);
    }
    !isReadonly && track(rawTarget, "has" /* HAS */, rawKey);
    return key === rawKey
        ? target.has(key)
        : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
    target = target["__v_raw" /* RAW */];
    !isReadonly && track(toRaw(target), "iterate" /* ITERATE */, ITERATE_KEY);
    return Reflect.get(target, 'size', target);
}
function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
        target.add(value);
        trigger(target, "add" /* ADD */, value, value);
    }
    return this;
}
function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has, get } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
    }
    else if ((false)) {}
    const oldValue = get.call(target, key);
    target.set(key, value);
    if (!hadKey) {
        trigger(target, "add" /* ADD */, key, value);
    }
    else if (Object(shared_esm_bundler["j" /* hasChanged */])(value, oldValue)) {
        trigger(target, "set" /* SET */, key, value, oldValue);
    }
    return this;
}
function deleteEntry(key) {
    const target = toRaw(this);
    const { has, get } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
    }
    else if ((false)) {}
    const oldValue = get ? get.call(target, key) : undefined;
    // forward the operation before queueing reactions
    const result = target.delete(key);
    if (hadKey) {
        trigger(target, "delete" /* DELETE */, key, undefined, oldValue);
    }
    return result;
}
function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = ( false)
        ? undefined
        : undefined;
    // forward the operation before queueing reactions
    const result = target.clear();
    if (hadItems) {
        trigger(target, "clear" /* CLEAR */, undefined, undefined, oldTarget);
    }
    return result;
}
function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw" /* RAW */];
        const rawTarget = toRaw(target);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate" /* ITERATE */, ITERATE_KEY);
        return target.forEach((value, key) => {
            // important: make sure the callback is
            // 1. invoked with the reactive map as `this` and 3rd arg
            // 2. the value received should be a corresponding reactive/readonly.
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
    };
}
function createIterableMethod(method, isReadonly, isShallow) {
    return function (...args) {
        const target = this["__v_raw" /* RAW */];
        const rawTarget = toRaw(target);
        const targetIsMap = Object(shared_esm_bundler["u" /* isMap */])(rawTarget);
        const isPair = method === 'entries' || (method === Symbol.iterator && targetIsMap);
        const isKeyOnly = method === 'keys' && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly &&
            track(rawTarget, "iterate" /* ITERATE */, isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        // return a wrapped iterator which returns observed versions of the
        // values emitted from the real iterator
        return {
            // iterator protocol
            next() {
                const { value, done } = innerIterator.next();
                return done
                    ? { value, done }
                    : {
                        value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
                        done
                    };
            },
            // iterable protocol
            [Symbol.iterator]() {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function (...args) {
        if ((false)) {}
        return type === "delete" /* DELETE */ ? false : this;
    };
}
function createInstrumentations() {
    const mutableInstrumentations = {
        get(key) {
            return get$1(this, key);
        },
        get size() {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, false)
    };
    const shallowInstrumentations = {
        get(key) {
            return get$1(this, key, false, true);
        },
        get size() {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, true)
    };
    const readonlyInstrumentations = {
        get(key) {
            return get$1(this, key, true);
        },
        get size() {
            return size(this, true);
        },
        has(key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add" /* ADD */),
        set: createReadonlyMethod("set" /* SET */),
        delete: createReadonlyMethod("delete" /* DELETE */),
        clear: createReadonlyMethod("clear" /* CLEAR */),
        forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations = {
        get(key) {
            return get$1(this, key, true, true);
        },
        get size() {
            return size(this, true);
        },
        has(key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add" /* ADD */),
        set: createReadonlyMethod("set" /* SET */),
        delete: createReadonlyMethod("delete" /* DELETE */),
        clear: createReadonlyMethod("clear" /* CLEAR */),
        forEach: createForEach(true, true)
    };
    const iteratorMethods = ['keys', 'values', 'entries', Symbol.iterator];
    iteratorMethods.forEach(method => {
        mutableInstrumentations[method] = createIterableMethod(method, false, false);
        readonlyInstrumentations[method] = createIterableMethod(method, true, false);
        shallowInstrumentations[method] = createIterableMethod(method, false, true);
        shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
    });
    return [
        mutableInstrumentations,
        readonlyInstrumentations,
        shallowInstrumentations,
        shallowReadonlyInstrumentations
    ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* #__PURE__*/ createInstrumentations();
function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow
        ? isReadonly
            ? shallowReadonlyInstrumentations
            : shallowInstrumentations
        : isReadonly
            ? readonlyInstrumentations
            : mutableInstrumentations;
    return (target, key, receiver) => {
        if (key === "__v_isReactive" /* IS_REACTIVE */) {
            return !isReadonly;
        }
        else if (key === "__v_isReadonly" /* IS_READONLY */) {
            return isReadonly;
        }
        else if (key === "__v_raw" /* RAW */) {
            return target;
        }
        return Reflect.get(Object(shared_esm_bundler["k" /* hasOwn */])(instrumentations, key) && key in target
            ? instrumentations
            : target, key, receiver);
    };
}
const mutableCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has.call(target, rawKey)) {
        const type = Object(shared_esm_bundler["P" /* toRawType */])(target);
        console.warn(`Reactive ${type} contains both the raw and reactive ` +
            `versions of the same object${type === `Map` ? ` as keys` : ``}, ` +
            `which can lead to inconsistencies. ` +
            `Avoid differentiating between the raw and reactive versions ` +
            `of an object and only use the reactive version if possible.`);
    }
}

const reactiveMap = new WeakMap();
const shallowReactiveMap = new WeakMap();
const readonlyMap = new WeakMap();
const shallowReadonlyMap = new WeakMap();
function targetTypeMap(rawType) {
    switch (rawType) {
        case 'Object':
        case 'Array':
            return 1 /* COMMON */;
        case 'Map':
        case 'Set':
        case 'WeakMap':
        case 'WeakSet':
            return 2 /* COLLECTION */;
        default:
            return 0 /* INVALID */;
    }
}
function getTargetType(value) {
    return value["__v_skip" /* SKIP */] || !Object.isExtensible(value)
        ? 0 /* INVALID */
        : targetTypeMap(Object(shared_esm_bundler["P" /* toRawType */])(value));
}
function reactive(target) {
    // if trying to observe a readonly proxy, return the readonly version.
    if (reactivity_esm_bundler_isReadonly(target)) {
        return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */
function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */
function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */
function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!Object(shared_esm_bundler["w" /* isObject */])(target)) {
        if ((false)) {}
        return target;
    }
    // target is already a Proxy, return it.
    // exception: calling readonly() on a reactive object
    if (target["__v_raw" /* RAW */] &&
        !(isReadonly && target["__v_isReactive" /* IS_REACTIVE */])) {
        return target;
    }
    // target already has corresponding Proxy
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
        return existingProxy;
    }
    // only a whitelist of value types can be observed.
    const targetType = getTargetType(target);
    if (targetType === 0 /* INVALID */) {
        return target;
    }
    const proxy = new Proxy(target, targetType === 2 /* COLLECTION */ ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function isReactive(value) {
    if (reactivity_esm_bundler_isReadonly(value)) {
        return isReactive(value["__v_raw" /* RAW */]);
    }
    return !!(value && value["__v_isReactive" /* IS_REACTIVE */]);
}
function reactivity_esm_bundler_isReadonly(value) {
    return !!(value && value["__v_isReadonly" /* IS_READONLY */]);
}
function reactivity_esm_bundler_isShallow(value) {
    return !!(value && value["__v_isShallow" /* IS_SHALLOW */]);
}
function isProxy(value) {
    return isReactive(value) || reactivity_esm_bundler_isReadonly(value);
}
function toRaw(observed) {
    const raw = observed && observed["__v_raw" /* RAW */];
    return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
    Object(shared_esm_bundler["g" /* def */])(value, "__v_skip" /* SKIP */, true);
    return value;
}
const toReactive = (value) => Object(shared_esm_bundler["w" /* isObject */])(value) ? reactive(value) : value;
const toReadonly = (value) => Object(shared_esm_bundler["w" /* isObject */])(value) ? readonly(value) : value;

function trackRefValue(ref) {
    if (shouldTrack && activeEffect) {
        ref = toRaw(ref);
        if ((false)) {}
        else {
            trackEffects(ref.dep || (ref.dep = createDep()));
        }
    }
}
function triggerRefValue(ref, newVal) {
    ref = toRaw(ref);
    if (ref.dep) {
        if ((false)) {}
        else {
            triggerEffects(ref.dep);
        }
    }
}
function isRef(r) {
    return !!(r && r.__v_isRef === true);
}
function reactivity_esm_bundler_ref(value) {
    return createRef(value, false);
}
function shallowRef(value) {
    return createRef(value, true);
}
function createRef(rawValue, shallow) {
    if (isRef(rawValue)) {
        return rawValue;
    }
    return new reactivity_esm_bundler_RefImpl(rawValue, shallow);
}
class reactivity_esm_bundler_RefImpl {
    constructor(value, __v_isShallow) {
        this.__v_isShallow = __v_isShallow;
        this.dep = undefined;
        this.__v_isRef = true;
        this._rawValue = __v_isShallow ? value : toRaw(value);
        this._value = __v_isShallow ? value : toReactive(value);
    }
    get value() {
        trackRefValue(this);
        return this._value;
    }
    set value(newVal) {
        newVal = this.__v_isShallow ? newVal : toRaw(newVal);
        if (Object(shared_esm_bundler["j" /* hasChanged */])(newVal, this._rawValue)) {
            this._rawValue = newVal;
            this._value = this.__v_isShallow ? newVal : toReactive(newVal);
            triggerRefValue(this, newVal);
        }
    }
}
function triggerRef(ref) {
    triggerRefValue(ref, ( false) ? undefined : void 0);
}
function unref(ref) {
    return isRef(ref) ? ref.value : ref;
}
const shallowUnwrapHandlers = {
    get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver) => {
        const oldValue = target[key];
        if (isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
        }
        else {
            return Reflect.set(target, key, value, receiver);
        }
    }
};
function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs)
        ? objectWithRefs
        : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
    constructor(factory) {
        this.dep = undefined;
        this.__v_isRef = true;
        const { get, set } = factory(() => trackRefValue(this), () => triggerRefValue(this));
        this._get = get;
        this._set = set;
    }
    get value() {
        return this._get();
    }
    set value(newVal) {
        this._set(newVal);
    }
}
function customRef(factory) {
    return new CustomRefImpl(factory);
}
function toRefs(object) {
    if (false) {}
    const ret = Object(shared_esm_bundler["o" /* isArray */])(object) ? new Array(object.length) : {};
    for (const key in object) {
        ret[key] = toRef(object, key);
    }
    return ret;
}
class ObjectRefImpl {
    constructor(_object, _key, _defaultValue) {
        this._object = _object;
        this._key = _key;
        this._defaultValue = _defaultValue;
        this.__v_isRef = true;
    }
    get value() {
        const val = this._object[this._key];
        return val === undefined ? this._defaultValue : val;
    }
    set value(newVal) {
        this._object[this._key] = newVal;
    }
}
function toRef(object, key, defaultValue) {
    const val = object[key];
    return isRef(val)
        ? val
        : new ObjectRefImpl(object, key, defaultValue);
}

class ComputedRefImpl {
    constructor(getter, _setter, isReadonly, isSSR) {
        this._setter = _setter;
        this.dep = undefined;
        this.__v_isRef = true;
        this._dirty = true;
        this.effect = new ReactiveEffect(getter, () => {
            if (!this._dirty) {
                this._dirty = true;
                triggerRefValue(this);
            }
        });
        this.effect.computed = this;
        this.effect.active = this._cacheable = !isSSR;
        this["__v_isReadonly" /* IS_READONLY */] = isReadonly;
    }
    get value() {
        // the computed ref may get wrapped by other proxies e.g. readonly() #3376
        const self = toRaw(this);
        trackRefValue(self);
        if (self._dirty || !self._cacheable) {
            self._dirty = false;
            self._value = self.effect.run();
        }
        return self._value;
    }
    set value(newValue) {
        this._setter(newValue);
    }
}
function reactivity_esm_bundler_computed(getterOrOptions, debugOptions, isSSR = false) {
    let getter;
    let setter;
    const onlyGetter = Object(shared_esm_bundler["q" /* isFunction */])(getterOrOptions);
    if (onlyGetter) {
        getter = getterOrOptions;
        setter = ( false)
            ? undefined
            : shared_esm_bundler["d" /* NOOP */];
    }
    else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
    if (false) {}
    return cRef;
}

var _a;
const tick = Promise.resolve();
const queue = [];
let queued = false;
const reactivity_esm_bundler_scheduler = (fn) => {
    queue.push(fn);
    if (!queued) {
        queued = true;
        tick.then(reactivity_esm_bundler_flush);
    }
};
const reactivity_esm_bundler_flush = () => {
    for (let i = 0; i < queue.length; i++) {
        queue[i]();
    }
    queue.length = 0;
    queued = false;
};
class DeferredComputedRefImpl {
    constructor(getter) {
        this.dep = undefined;
        this._dirty = true;
        this.__v_isRef = true;
        this[_a] = true;
        let compareTarget;
        let hasCompareTarget = false;
        let scheduled = false;
        this.effect = new ReactiveEffect(getter, (computedTrigger) => {
            if (this.dep) {
                if (computedTrigger) {
                    compareTarget = this._value;
                    hasCompareTarget = true;
                }
                else if (!scheduled) {
                    const valueToCompare = hasCompareTarget ? compareTarget : this._value;
                    scheduled = true;
                    hasCompareTarget = false;
                    reactivity_esm_bundler_scheduler(() => {
                        if (this.effect.active && this._get() !== valueToCompare) {
                            triggerRefValue(this);
                        }
                        scheduled = false;
                    });
                }
                // chained upstream computeds are notified synchronously to ensure
                // value invalidation in case of sync access; normal effects are
                // deferred to be triggered in scheduler.
                for (const e of this.dep) {
                    if (e.computed instanceof DeferredComputedRefImpl) {
                        e.scheduler(true /* computedTrigger */);
                    }
                }
            }
            this._dirty = true;
        });
        this.effect.computed = this;
    }
    _get() {
        if (this._dirty) {
            this._dirty = false;
            return (this._value = this.effect.run());
        }
        return this._value;
    }
    get value() {
        trackRefValue(this);
        // the computed ref may get wrapped by other proxies e.g. readonly() #3376
        return toRaw(this)._get();
    }
}
_a = "__v_isReadonly" /* IS_READONLY */;
function deferredComputed(getter) {
    return new DeferredComputedRefImpl(getter);
}



// CONCATENATED MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js





const stack = [];
function pushWarningContext(vnode) {
    stack.push(vnode);
}
function popWarningContext() {
    stack.pop();
}
function runtime_core_esm_bundler_warn(msg, ...args) {
    // avoid props formatting or warn handler tracking deps that might be mutated
    // during patch, leading to infinite recursion.
    pauseTracking();
    const instance = stack.length ? stack[stack.length - 1].component : null;
    const appWarnHandler = instance && instance.appContext.config.warnHandler;
    const trace = getComponentTrace();
    if (appWarnHandler) {
        callWithErrorHandling(appWarnHandler, instance, 11 /* APP_WARN_HANDLER */, [
            msg + args.join(''),
            instance && instance.proxy,
            trace
                .map(({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`)
                .join('\n'),
            trace
        ]);
    }
    else {
        const warnArgs = [`[Vue warn]: ${msg}`, ...args];
        /* istanbul ignore if */
        if (trace.length &&
            // avoid spamming console during tests
            !false) {
            warnArgs.push(`\n`, ...formatTrace(trace));
        }
        console.warn(...warnArgs);
    }
    resetTracking();
}
function getComponentTrace() {
    let currentVNode = stack[stack.length - 1];
    if (!currentVNode) {
        return [];
    }
    // we can't just use the stack because it will be incomplete during updates
    // that did not start from the root. Re-construct the parent chain using
    // instance parent pointers.
    const normalizedStack = [];
    while (currentVNode) {
        const last = normalizedStack[0];
        if (last && last.vnode === currentVNode) {
            last.recurseCount++;
        }
        else {
            normalizedStack.push({
                vnode: currentVNode,
                recurseCount: 0
            });
        }
        const parentInstance = currentVNode.component && currentVNode.component.parent;
        currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
}
/* istanbul ignore next */
function formatTrace(trace) {
    const logs = [];
    trace.forEach((entry, i) => {
        logs.push(...(i === 0 ? [] : [`\n`]), ...formatTraceEntry(entry));
    });
    return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
    const close = `>` + postfix;
    return vnode.props
        ? [open, ...formatProps(vnode.props), close]
        : [open + close];
}
/* istanbul ignore next */
function formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach(key => {
        res.push(...formatProp(key, props[key]));
    });
    if (keys.length > 3) {
        res.push(` ...`);
    }
    return res;
}
/* istanbul ignore next */
function formatProp(key, value, raw) {
    if (Object(shared_esm_bundler["E" /* isString */])(value)) {
        value = JSON.stringify(value);
        return raw ? value : [`${key}=${value}`];
    }
    else if (typeof value === 'number' ||
        typeof value === 'boolean' ||
        value == null) {
        return raw ? value : [`${key}=${value}`];
    }
    else if (isRef(value)) {
        value = formatProp(key, toRaw(value.value), true);
        return raw ? value : [`${key}=Ref<`, value, `>`];
    }
    else if (Object(shared_esm_bundler["q" /* isFunction */])(value)) {
        return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
    }
    else {
        value = toRaw(value);
        return raw ? value : [`${key}=`, value];
    }
}

const ErrorTypeStrings = {
    ["sp" /* SERVER_PREFETCH */]: 'serverPrefetch hook',
    ["bc" /* BEFORE_CREATE */]: 'beforeCreate hook',
    ["c" /* CREATED */]: 'created hook',
    ["bm" /* BEFORE_MOUNT */]: 'beforeMount hook',
    ["m" /* MOUNTED */]: 'mounted hook',
    ["bu" /* BEFORE_UPDATE */]: 'beforeUpdate hook',
    ["u" /* UPDATED */]: 'updated',
    ["bum" /* BEFORE_UNMOUNT */]: 'beforeUnmount hook',
    ["um" /* UNMOUNTED */]: 'unmounted hook',
    ["a" /* ACTIVATED */]: 'activated hook',
    ["da" /* DEACTIVATED */]: 'deactivated hook',
    ["ec" /* ERROR_CAPTURED */]: 'errorCaptured hook',
    ["rtc" /* RENDER_TRACKED */]: 'renderTracked hook',
    ["rtg" /* RENDER_TRIGGERED */]: 'renderTriggered hook',
    [0 /* SETUP_FUNCTION */]: 'setup function',
    [1 /* RENDER_FUNCTION */]: 'render function',
    [2 /* WATCH_GETTER */]: 'watcher getter',
    [3 /* WATCH_CALLBACK */]: 'watcher callback',
    [4 /* WATCH_CLEANUP */]: 'watcher cleanup function',
    [5 /* NATIVE_EVENT_HANDLER */]: 'native event handler',
    [6 /* COMPONENT_EVENT_HANDLER */]: 'component event handler',
    [7 /* VNODE_HOOK */]: 'vnode hook',
    [8 /* DIRECTIVE_HOOK */]: 'directive hook',
    [9 /* TRANSITION_HOOK */]: 'transition hook',
    [10 /* APP_ERROR_HANDLER */]: 'app errorHandler',
    [11 /* APP_WARN_HANDLER */]: 'app warnHandler',
    [12 /* FUNCTION_REF */]: 'ref function',
    [13 /* ASYNC_COMPONENT_LOADER */]: 'async component loader',
    [14 /* SCHEDULER */]: 'scheduler flush. This is likely a Vue internals bug. ' +
        'Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core'
};
function callWithErrorHandling(fn, instance, type, args) {
    let res;
    try {
        res = args ? fn(...args) : fn();
    }
    catch (err) {
        handleError(err, instance, type);
    }
    return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
    if (Object(shared_esm_bundler["q" /* isFunction */])(fn)) {
        const res = callWithErrorHandling(fn, instance, type, args);
        if (res && Object(shared_esm_bundler["z" /* isPromise */])(res)) {
            res.catch(err => {
                handleError(err, instance, type);
            });
        }
        return res;
    }
    const values = [];
    for (let i = 0; i < fn.length; i++) {
        values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    }
    return values;
}
function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
        let cur = instance.parent;
        // the exposed instance is the render proxy to keep it consistent with 2.x
        const exposedInstance = instance.proxy;
        // in production the hook receives only the error code
        const errorInfo = ( false) ? undefined : type;
        while (cur) {
            const errorCapturedHooks = cur.ec;
            if (errorCapturedHooks) {
                for (let i = 0; i < errorCapturedHooks.length; i++) {
                    if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
                        return;
                    }
                }
            }
            cur = cur.parent;
        }
        // app-level handling
        const appErrorHandler = instance.appContext.config.errorHandler;
        if (appErrorHandler) {
            callWithErrorHandling(appErrorHandler, null, 10 /* APP_ERROR_HANDLER */, [err, exposedInstance, errorInfo]);
            return;
        }
    }
    logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
    if ((false)) {}
    else {
        // recover in prod to reduce the impact on end-user
        console.error(err);
    }
}

let isFlushing = false;
let isFlushPending = false;
const runtime_core_esm_bundler_queue = [];
let flushIndex = 0;
const pendingPreFlushCbs = [];
let activePreFlushCbs = null;
let preFlushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = Promise.resolve();
let currentFlushPromise = null;
let currentPreFlushParentJob = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
    const p = currentFlushPromise || resolvedPromise;
    return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
// #2768
// Use binary-search to find a suitable position in the queue,
// so that the queue maintains the increasing order of job's id,
// which can prevent the job from being skipped and also can avoid repeated patching.
function findInsertionIndex(id) {
    // the start index should be `flushIndex + 1`
    let start = flushIndex + 1;
    let end = runtime_core_esm_bundler_queue.length;
    while (start < end) {
        const middle = (start + end) >>> 1;
        const middleJobId = getId(runtime_core_esm_bundler_queue[middle]);
        middleJobId < id ? (start = middle + 1) : (end = middle);
    }
    return start;
}
function queueJob(job) {
    // the dedupe search uses the startIndex argument of Array.includes()
    // by default the search index includes the current job that is being run
    // so it cannot recursively trigger itself again.
    // if the job is a watch() callback, the search will start with a +1 index to
    // allow it recursively trigger itself - it is the user's responsibility to
    // ensure it doesn't end up in an infinite loop.
    if ((!runtime_core_esm_bundler_queue.length ||
        !runtime_core_esm_bundler_queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) &&
        job !== currentPreFlushParentJob) {
        if (job.id == null) {
            runtime_core_esm_bundler_queue.push(job);
        }
        else {
            runtime_core_esm_bundler_queue.splice(findInsertionIndex(job.id), 0, job);
        }
        queueFlush();
    }
}
function queueFlush() {
    if (!isFlushing && !isFlushPending) {
        isFlushPending = true;
        currentFlushPromise = resolvedPromise.then(flushJobs);
    }
}
function invalidateJob(job) {
    const i = runtime_core_esm_bundler_queue.indexOf(job);
    if (i > flushIndex) {
        runtime_core_esm_bundler_queue.splice(i, 1);
    }
}
function queueCb(cb, activeQueue, pendingQueue, index) {
    if (!Object(shared_esm_bundler["o" /* isArray */])(cb)) {
        if (!activeQueue ||
            !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) {
            pendingQueue.push(cb);
        }
    }
    else {
        // if cb is an array, it is a component lifecycle hook which can only be
        // triggered by a job, which is already deduped in the main queue, so
        // we can skip duplicate check here to improve perf
        pendingQueue.push(...cb);
    }
    queueFlush();
}
function queuePreFlushCb(cb) {
    queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}
function queuePostFlushCb(cb) {
    queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}
function flushPreFlushCbs(seen, parentJob = null) {
    if (pendingPreFlushCbs.length) {
        currentPreFlushParentJob = parentJob;
        activePreFlushCbs = [...new Set(pendingPreFlushCbs)];
        pendingPreFlushCbs.length = 0;
        if ((false)) {}
        for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
            if (false) {}
            activePreFlushCbs[preFlushIndex]();
        }
        activePreFlushCbs = null;
        preFlushIndex = 0;
        currentPreFlushParentJob = null;
        // recursively flush until it drains
        flushPreFlushCbs(seen, parentJob);
    }
}
function flushPostFlushCbs(seen) {
    if (pendingPostFlushCbs.length) {
        const deduped = [...new Set(pendingPostFlushCbs)];
        pendingPostFlushCbs.length = 0;
        // #1947 already has active queue, nested flushPostFlushCbs call
        if (activePostFlushCbs) {
            activePostFlushCbs.push(...deduped);
            return;
        }
        activePostFlushCbs = deduped;
        if ((false)) {}
        activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
        for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
            if (false) {}
            activePostFlushCbs[postFlushIndex]();
        }
        activePostFlushCbs = null;
        postFlushIndex = 0;
    }
}
const getId = (job) => job.id == null ? Infinity : job.id;
function flushJobs(seen) {
    isFlushPending = false;
    isFlushing = true;
    if ((false)) {}
    flushPreFlushCbs(seen);
    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child so its render effect will have smaller
    //    priority number)
    // 2. If a component is unmounted during a parent component's update,
    //    its update can be skipped.
    runtime_core_esm_bundler_queue.sort((a, b) => getId(a) - getId(b));
    // conditional usage of checkRecursiveUpdate must be determined out of
    // try ... catch block since Rollup by default de-optimizes treeshaking
    // inside try-catch. This can leave all warning code unshaked. Although
    // they would get eventually shaken by a minifier like terser, some minifiers
    // would fail to do that (e.g. https://github.com/evanw/esbuild/issues/1610)
    const check = ( false)
        ? undefined
        : shared_esm_bundler["d" /* NOOP */];
    try {
        for (flushIndex = 0; flushIndex < runtime_core_esm_bundler_queue.length; flushIndex++) {
            const job = runtime_core_esm_bundler_queue[flushIndex];
            if (job && job.active !== false) {
                if (false) {}
                // console.log(`running:`, job.id)
                callWithErrorHandling(job, null, 14 /* SCHEDULER */);
            }
        }
    }
    finally {
        flushIndex = 0;
        runtime_core_esm_bundler_queue.length = 0;
        flushPostFlushCbs(seen);
        isFlushing = false;
        currentFlushPromise = null;
        // some postFlushCb queued jobs!
        // keep flushing until it drains.
        if (runtime_core_esm_bundler_queue.length ||
            pendingPreFlushCbs.length ||
            pendingPostFlushCbs.length) {
            flushJobs(seen);
        }
    }
}
function checkRecursiveUpdates(seen, fn) {
    if (!seen.has(fn)) {
        seen.set(fn, 1);
    }
    else {
        const count = seen.get(fn);
        if (count > RECURSION_LIMIT) {
            const instance = fn.ownerInstance;
            const componentName = instance && getComponentName(instance.type);
            runtime_core_esm_bundler_warn(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. ` +
                `This means you have a reactive effect that is mutating its own ` +
                `dependencies and thus recursively triggering itself. Possible sources ` +
                `include component template, render function, updated hook or ` +
                `watcher source function.`);
            return true;
        }
        else {
            seen.set(fn, count + 1);
        }
    }
}

/* eslint-disable no-restricted-globals */
let isHmrUpdating = false;
const hmrDirtyComponents = new Set();
// Expose the HMR runtime on the global object
// This makes it entirely tree-shakable without polluting the exports and makes
// it easier to be used in toolings like vue-loader
// Note: for a component to be eligible for HMR it also needs the __hmrId option
// to be set so that its instances can be registered / removed.
if ((false)) {}
const map = new Map();
function registerHMR(instance) {
    const id = instance.type.__hmrId;
    let record = map.get(id);
    if (!record) {
        createRecord(id, instance.type);
        record = map.get(id);
    }
    record.instances.add(instance);
}
function unregisterHMR(instance) {
    map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id, initialDef) {
    if (map.has(id)) {
        return false;
    }
    map.set(id, {
        initialDef: normalizeClassComponent(initialDef),
        instances: new Set()
    });
    return true;
}
function normalizeClassComponent(component) {
    return isClassComponent(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
    const record = map.get(id);
    if (!record) {
        return;
    }
    // update initial record (for not-yet-rendered component)
    record.initialDef.render = newRender;
    [...record.instances].forEach(instance => {
        if (newRender) {
            instance.render = newRender;
            normalizeClassComponent(instance.type).render = newRender;
        }
        instance.renderCache = [];
        // this flag forces child components with slot content to update
        isHmrUpdating = true;
        instance.update();
        isHmrUpdating = false;
    });
}
function reload(id, newComp) {
    const record = map.get(id);
    if (!record)
        return;
    newComp = normalizeClassComponent(newComp);
    // update initial def (for not-yet-rendered components)
    updateComponentDef(record.initialDef, newComp);
    // create a snapshot which avoids the set being mutated during updates
    const instances = [...record.instances];
    for (const instance of instances) {
        const oldComp = normalizeClassComponent(instance.type);
        if (!hmrDirtyComponents.has(oldComp)) {
            // 1. Update existing comp definition to match new one
            if (oldComp !== record.initialDef) {
                updateComponentDef(oldComp, newComp);
            }
            // 2. mark definition dirty. This forces the renderer to replace the
            // component on patch.
            hmrDirtyComponents.add(oldComp);
        }
        // 3. invalidate options resolution cache
        instance.appContext.optionsCache.delete(instance.type);
        // 4. actually update
        if (instance.ceReload) {
            // custom element
            hmrDirtyComponents.add(oldComp);
            instance.ceReload(newComp.styles);
            hmrDirtyComponents.delete(oldComp);
        }
        else if (instance.parent) {
            // 4. Force the parent instance to re-render. This will cause all updated
            // components to be unmounted and re-mounted. Queue the update so that we
            // don't end up forcing the same parent to re-render multiple times.
            queueJob(instance.parent.update);
            // instance is the inner component of an async custom element
            // invoke to reset styles
            if (instance.parent.type.__asyncLoader &&
                instance.parent.ceReload) {
                instance.parent.ceReload(newComp.styles);
            }
        }
        else if (instance.appContext.reload) {
            // root instance mounted via createApp() has a reload method
            instance.appContext.reload();
        }
        else if (typeof window !== 'undefined') {
            // root instance inside tree created via raw render(). Force reload.
            window.location.reload();
        }
        else {
            console.warn('[HMR] Root or manually mounted instance modified. Full reload required.');
        }
    }
    // 5. make sure to cleanup dirty hmr components after update
    queuePostFlushCb(() => {
        for (const instance of instances) {
            hmrDirtyComponents.delete(normalizeClassComponent(instance.type));
        }
    });
}
function updateComponentDef(oldComp, newComp) {
    Object(shared_esm_bundler["h" /* extend */])(oldComp, newComp);
    for (const key in oldComp) {
        if (key !== '__file' && !(key in newComp)) {
            delete oldComp[key];
        }
    }
}
function tryWrap(fn) {
    return (id, arg) => {
        try {
            return fn(id, arg);
        }
        catch (e) {
            console.error(e);
            console.warn(`[HMR] Something went wrong during Vue component hot-reload. ` +
                `Full reload required.`);
        }
    };
}

let devtools;
let buffer = [];
let devtoolsNotInstalled = false;
function runtime_core_esm_bundler_emit(event, ...args) {
    if (devtools) {
        devtools.emit(event, ...args);
    }
    else if (!devtoolsNotInstalled) {
        buffer.push({ event, args });
    }
}
function setDevtoolsHook(hook, target) {
    var _a, _b;
    devtools = hook;
    if (devtools) {
        devtools.enabled = true;
        buffer.forEach(({ event, args }) => devtools.emit(event, ...args));
        buffer = [];
    }
    else if (
    // handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    // eslint-disable-next-line no-restricted-globals
    typeof window !== 'undefined' &&
        // some envs mock window but not fully
        window.HTMLElement &&
        // also exclude jsdom
        !((_b = (_a = window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) === null || _b === void 0 ? void 0 : _b.includes('jsdom'))) {
        const replay = (target.__VUE_DEVTOOLS_HOOK_REPLAY__ =
            target.__VUE_DEVTOOLS_HOOK_REPLAY__ || []);
        replay.push((newHook) => {
            setDevtoolsHook(newHook, target);
        });
        // clear buffer after 3s - the user probably doesn't have devtools installed
        // at all, and keeping the buffer will cause memory leaks (#4738)
        setTimeout(() => {
            if (!devtools) {
                target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
                devtoolsNotInstalled = true;
                buffer = [];
            }
        }, 3000);
    }
    else {
        // non-browser env, assume not installed
        devtoolsNotInstalled = true;
        buffer = [];
    }
}
function devtoolsInitApp(app, version) {
    runtime_core_esm_bundler_emit("app:init" /* APP_INIT */, app, version, {
        Fragment,
        Text,
        Comment: runtime_core_esm_bundler_Comment,
        Static
    });
}
function devtoolsUnmountApp(app) {
    runtime_core_esm_bundler_emit("app:unmount" /* APP_UNMOUNT */, app);
}
const devtoolsComponentAdded = /*#__PURE__*/ createDevtoolsComponentHook("component:added" /* COMPONENT_ADDED */);
const devtoolsComponentUpdated = 
/*#__PURE__*/ createDevtoolsComponentHook("component:updated" /* COMPONENT_UPDATED */);
const devtoolsComponentRemoved = 
/*#__PURE__*/ createDevtoolsComponentHook("component:removed" /* COMPONENT_REMOVED */);
function createDevtoolsComponentHook(hook) {
    return (component) => {
        runtime_core_esm_bundler_emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : undefined, component);
    };
}
const devtoolsPerfStart = /*#__PURE__*/ createDevtoolsPerformanceHook("perf:start" /* PERFORMANCE_START */);
const devtoolsPerfEnd = /*#__PURE__*/ createDevtoolsPerformanceHook("perf:end" /* PERFORMANCE_END */);
function createDevtoolsPerformanceHook(hook) {
    return (component, type, time) => {
        runtime_core_esm_bundler_emit(hook, component.appContext.app, component.uid, component, type, time);
    };
}
function devtoolsComponentEmit(component, event, params) {
    runtime_core_esm_bundler_emit("component:emit" /* COMPONENT_EMIT */, component.appContext.app, component, event, params);
}

function emit$1(instance, event, ...rawArgs) {
    const props = instance.vnode.props || shared_esm_bundler["b" /* EMPTY_OBJ */];
    if ((false)) {}
    let args = rawArgs;
    const isModelListener = event.startsWith('update:');
    // for v-model update:xxx events, apply modifiers on args
    const modelArg = isModelListener && event.slice(7);
    if (modelArg && modelArg in props) {
        const modifiersKey = `${modelArg === 'modelValue' ? 'model' : modelArg}Modifiers`;
        const { number, trim } = props[modifiersKey] || shared_esm_bundler["b" /* EMPTY_OBJ */];
        if (trim) {
            args = rawArgs.map(a => a.trim());
        }
        else if (number) {
            args = rawArgs.map(shared_esm_bundler["O" /* toNumber */]);
        }
    }
    if (( false) || __VUE_PROD_DEVTOOLS__) {
        devtoolsComponentEmit(instance, event, args);
    }
    if ((false)) {}
    let handlerName;
    let handler = props[(handlerName = Object(shared_esm_bundler["N" /* toHandlerKey */])(event))] ||
        // also try camelCase event handler (#2249)
        props[(handlerName = Object(shared_esm_bundler["N" /* toHandlerKey */])(Object(shared_esm_bundler["e" /* camelize */])(event)))];
    // for v-model update:xxx events, also trigger kebab-case equivalent
    // for props passed via kebab-case
    if (!handler && isModelListener) {
        handler = props[(handlerName = Object(shared_esm_bundler["N" /* toHandlerKey */])(Object(shared_esm_bundler["l" /* hyphenate */])(event)))];
    }
    if (handler) {
        callWithAsyncErrorHandling(handler, instance, 6 /* COMPONENT_EVENT_HANDLER */, args);
    }
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
        if (!instance.emitted) {
            instance.emitted = {};
        }
        else if (instance.emitted[handlerName]) {
            return;
        }
        instance.emitted[handlerName] = true;
        callWithAsyncErrorHandling(onceHandler, instance, 6 /* COMPONENT_EVENT_HANDLER */, args);
    }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.emitsCache;
    const cached = cache.get(comp);
    if (cached !== undefined) {
        return cached;
    }
    const raw = comp.emits;
    let normalized = {};
    // apply mixin/extends props
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !Object(shared_esm_bundler["q" /* isFunction */])(comp)) {
        const extendEmits = (raw) => {
            const normalizedFromExtend = normalizeEmitsOptions(raw, appContext, true);
            if (normalizedFromExtend) {
                hasExtends = true;
                Object(shared_esm_bundler["h" /* extend */])(normalized, normalizedFromExtend);
            }
        };
        if (!asMixin && appContext.mixins.length) {
            appContext.mixins.forEach(extendEmits);
        }
        if (comp.extends) {
            extendEmits(comp.extends);
        }
        if (comp.mixins) {
            comp.mixins.forEach(extendEmits);
        }
    }
    if (!raw && !hasExtends) {
        cache.set(comp, null);
        return null;
    }
    if (Object(shared_esm_bundler["o" /* isArray */])(raw)) {
        raw.forEach(key => (normalized[key] = null));
    }
    else {
        Object(shared_esm_bundler["h" /* extend */])(normalized, raw);
    }
    cache.set(comp, normalized);
    return normalized;
}
// Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.
function isEmitListener(options, key) {
    if (!options || !Object(shared_esm_bundler["x" /* isOn */])(key)) {
        return false;
    }
    key = key.slice(2).replace(/Once$/, '');
    return (Object(shared_esm_bundler["k" /* hasOwn */])(options, key[0].toLowerCase() + key.slice(1)) ||
        Object(shared_esm_bundler["k" /* hasOwn */])(options, Object(shared_esm_bundler["l" /* hyphenate */])(key)) ||
        Object(shared_esm_bundler["k" /* hasOwn */])(options, key));
}

/**
 * mark the current rendering instance for asset resolution (e.g.
 * resolveComponent, resolveDirective) during render
 */
let currentRenderingInstance = null;
let currentScopeId = null;
/**
 * Note: rendering calls maybe nested. The function returns the parent rendering
 * instance if present, which should be restored after the render is done:
 *
 * ```js
 * const prev = setCurrentRenderingInstance(i)
 * // ...render
 * setCurrentRenderingInstance(prev)
 * ```
 */
function setCurrentRenderingInstance(instance) {
    const prev = currentRenderingInstance;
    currentRenderingInstance = instance;
    currentScopeId = (instance && instance.type.__scopeId) || null;
    return prev;
}
/**
 * Set scope id when creating hoisted vnodes.
 * @private compiler helper
 */
function pushScopeId(id) {
    currentScopeId = id;
}
/**
 * Technically we no longer need this after 3.0.8 but we need to keep the same
 * API for backwards compat w/ code generated by compilers.
 * @private
 */
function popScopeId() {
    currentScopeId = null;
}
/**
 * Only for backwards compat
 * @private
 */
const withScopeId = (_id) => withCtx;
/**
 * Wrap a slot function to memoize current rendering instance
 * @private compiler helper
 */
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot // false only
) {
    if (!ctx)
        return fn;
    // already normalized
    if (fn._n) {
        return fn;
    }
    const renderFnWithContext = (...args) => {
        // If a user calls a compiled slot inside a template expression (#1745), it
        // can mess up block tracking, so by default we disable block tracking and
        // force bail out when invoking a compiled slot (indicated by the ._d flag).
        // This isn't necessary if rendering a compiled `<slot>`, so we flip the
        // ._d flag off when invoking the wrapped fn inside `renderSlot`.
        if (renderFnWithContext._d) {
            setBlockTracking(-1);
        }
        const prevInstance = setCurrentRenderingInstance(ctx);
        const res = fn(...args);
        setCurrentRenderingInstance(prevInstance);
        if (renderFnWithContext._d) {
            setBlockTracking(1);
        }
        if (( false) || __VUE_PROD_DEVTOOLS__) {
            devtoolsComponentUpdated(ctx);
        }
        return res;
    };
    // mark normalized to avoid duplicated wrapping
    renderFnWithContext._n = true;
    // mark this as compiled by default
    // this is used in vnode.ts -> normalizeChildren() to set the slot
    // rendering flag.
    renderFnWithContext._c = true;
    // disable block tracking by default
    renderFnWithContext._d = true;
    return renderFnWithContext;
}

/**
 * dev only flag to track whether $attrs was used during render.
 * If $attrs was used during render then the warning for failed attrs
 * fallthrough can be suppressed.
 */
let accessedAttrs = false;
function markAttrsAccessed() {
    accessedAttrs = true;
}
function renderComponentRoot(instance) {
    const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, data, setupState, ctx, inheritAttrs } = instance;
    let result;
    let fallthroughAttrs;
    const prev = setCurrentRenderingInstance(instance);
    if ((false)) {}
    try {
        if (vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */) {
            // withProxy is a proxy with a different `has` trap only for
            // runtime-compiled render functions using `with` block.
            const proxyToUse = withProxy || proxy;
            result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
            fallthroughAttrs = attrs;
        }
        else {
            // functional
            const render = Component;
            // in dev, mark attrs accessed if optional props (attrs === props)
            if (false) {}
            result = normalizeVNode(render.length > 1
                ? render(props, ( false)
                    ? undefined
                    : { attrs, slots, emit })
                : render(props, null /* we know it doesn't need it */));
            fallthroughAttrs = Component.props
                ? attrs
                : getFunctionalFallthrough(attrs);
        }
    }
    catch (err) {
        blockStack.length = 0;
        handleError(err, instance, 1 /* RENDER_FUNCTION */);
        result = createVNode(runtime_core_esm_bundler_Comment);
    }
    // attr merging
    // in dev mode, comments are preserved, and it's possible for a template
    // to have comments along side the root element which makes it a fragment
    let root = result;
    let setRoot = undefined;
    if (false /* DEV_ROOT_FRAGMENT */) {}
    if (fallthroughAttrs && inheritAttrs !== false) {
        const keys = Object.keys(fallthroughAttrs);
        const { shapeFlag } = root;
        if (keys.length) {
            if (shapeFlag & (1 /* ELEMENT */ | 6 /* COMPONENT */)) {
                if (propsOptions && keys.some(shared_esm_bundler["v" /* isModelListener */])) {
                    // If a v-model listener (onUpdate:xxx) has a corresponding declared
                    // prop, it indicates this component expects to handle v-model and
                    // it should not fallthrough.
                    // related: #1543, #1643, #1989
                    fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
                }
                root = cloneVNode(root, fallthroughAttrs);
            }
            else if (false) {}
        }
    }
    // inherit directives
    if (vnode.dirs) {
        if (false) {}
        root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    }
    // inherit transition data
    if (vnode.transition) {
        if (false) {}
        root.transition = vnode.transition;
    }
    if (false) {}
    else {
        result = root;
    }
    setCurrentRenderingInstance(prev);
    return result;
}
/**
 * dev only
 * In dev mode, template root level comments are rendered, which turns the
 * template into a fragment root, but we need to locate the single element
 * root for attrs and scope id processing.
 */
const getChildRoot = (vnode) => {
    const rawChildren = vnode.children;
    const dynamicChildren = vnode.dynamicChildren;
    const childRoot = filterSingleRoot(rawChildren);
    if (!childRoot) {
        return [vnode, undefined];
    }
    const index = rawChildren.indexOf(childRoot);
    const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
    const setRoot = (updatedRoot) => {
        rawChildren[index] = updatedRoot;
        if (dynamicChildren) {
            if (dynamicIndex > -1) {
                dynamicChildren[dynamicIndex] = updatedRoot;
            }
            else if (updatedRoot.patchFlag > 0) {
                vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
            }
        }
    };
    return [normalizeVNode(childRoot), setRoot];
};
function filterSingleRoot(children) {
    let singleRoot;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (isVNode(child)) {
            // ignore user comment
            if (child.type !== runtime_core_esm_bundler_Comment || child.children === 'v-if') {
                if (singleRoot) {
                    // has more than 1 non-comment child, return now
                    return;
                }
                else {
                    singleRoot = child;
                }
            }
        }
        else {
            return;
        }
    }
    return singleRoot;
}
const getFunctionalFallthrough = (attrs) => {
    let res;
    for (const key in attrs) {
        if (key === 'class' || key === 'style' || Object(shared_esm_bundler["x" /* isOn */])(key)) {
            (res || (res = {}))[key] = attrs[key];
        }
    }
    return res;
};
const filterModelListeners = (attrs, props) => {
    const res = {};
    for (const key in attrs) {
        if (!Object(shared_esm_bundler["v" /* isModelListener */])(key) || !(key.slice(9) in props)) {
            res[key] = attrs[key];
        }
    }
    return res;
};
const isElementRoot = (vnode) => {
    return (vnode.shapeFlag & (6 /* COMPONENT */ | 1 /* ELEMENT */) ||
        vnode.type === runtime_core_esm_bundler_Comment // potential v-if branch switch
    );
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren, component } = prevVNode;
    const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
    const emits = component.emitsOptions;
    // Parent component's render function was hot-updated. Since this may have
    // caused the child component's slots content to have changed, we need to
    // force the child to update as well.
    if (false) {}
    // force child update for runtime directive or transition on component vnode.
    if (nextVNode.dirs || nextVNode.transition) {
        return true;
    }
    if (optimized && patchFlag >= 0) {
        if (patchFlag & 1024 /* DYNAMIC_SLOTS */) {
            // slot content that references values that might have changed,
            // e.g. in a v-for
            return true;
        }
        if (patchFlag & 16 /* FULL_PROPS */) {
            if (!prevProps) {
                return !!nextProps;
            }
            // presence of this flag indicates props are always non-null
            return hasPropsChanged(prevProps, nextProps, emits);
        }
        else if (patchFlag & 8 /* PROPS */) {
            const dynamicProps = nextVNode.dynamicProps;
            for (let i = 0; i < dynamicProps.length; i++) {
                const key = dynamicProps[i];
                if (nextProps[key] !== prevProps[key] &&
                    !isEmitListener(emits, key)) {
                    return true;
                }
            }
        }
    }
    else {
        // this path is only taken by manually written render functions
        // so presence of any children leads to a forced update
        if (prevChildren || nextChildren) {
            if (!nextChildren || !nextChildren.$stable) {
                return true;
            }
        }
        if (prevProps === nextProps) {
            return false;
        }
        if (!prevProps) {
            return !!nextProps;
        }
        if (!nextProps) {
            return true;
        }
        return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) {
        return true;
    }
    for (let i = 0; i < nextKeys.length; i++) {
        const key = nextKeys[i];
        if (nextProps[key] !== prevProps[key] &&
            !isEmitListener(emitsOptions, key)) {
            return true;
        }
    }
    return false;
}
function updateHOCHostEl({ vnode, parent }, el // HostNode
) {
    while (parent && parent.subTree === vnode) {
        (vnode = parent.vnode).el = el;
        parent = parent.parent;
    }
}

const isSuspense = (type) => type.__isSuspense;
// Suspense exposes a component-like API, and is treated like a component
// in the compiler, but internally it's a special built-in type that hooks
// directly into the renderer.
const SuspenseImpl = {
    name: 'Suspense',
    // In order to make Suspense tree-shakable, we need to avoid importing it
    // directly in the renderer. The renderer checks for the __isSuspense flag
    // on a vnode's type and calls the `process` method, passing in renderer
    // internals.
    __isSuspense: true,
    process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, 
    // platform-specific impl passed from renderer
    rendererInternals) {
        if (n1 == null) {
            mountSuspense(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals);
        }
        else {
            patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, rendererInternals);
        }
    },
    hydrate: hydrateSuspense,
    create: createSuspenseBoundary,
    normalize: normalizeSuspenseChildren
};
// Force-casted public typing for h and TSX props inference
const Suspense = (SuspenseImpl );
function triggerEvent(vnode, name) {
    const eventListener = vnode.props && vnode.props[name];
    if (Object(shared_esm_bundler["q" /* isFunction */])(eventListener)) {
        eventListener();
    }
}
function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
    const { p: patch, o: { createElement } } = rendererInternals;
    const hiddenContainer = createElement('div');
    const suspense = (vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals));
    // start mounting the content subtree in an off-dom container
    patch(null, (suspense.pendingBranch = vnode.ssContent), hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds);
    // now check if we have encountered any async deps
    if (suspense.deps > 0) {
        // has async
        // invoke @fallback event
        triggerEvent(vnode, 'onPending');
        triggerEvent(vnode, 'onFallback');
        // mount the fallback tree
        patch(null, vnode.ssFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        isSVG, slotScopeIds);
        setActiveBranch(suspense, vnode.ssFallback);
    }
    else {
        // Suspense has no async deps. Just resolve.
        suspense.resolve();
    }
}
function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, { p: patch, um: unmount, o: { createElement } }) {
    const suspense = (n2.suspense = n1.suspense);
    suspense.vnode = n2;
    n2.el = n1.el;
    const newBranch = n2.ssContent;
    const newFallback = n2.ssFallback;
    const { activeBranch, pendingBranch, isInFallback, isHydrating } = suspense;
    if (pendingBranch) {
        suspense.pendingBranch = newBranch;
        if (isSameVNodeType(newBranch, pendingBranch)) {
            // same root type but content may have changed.
            patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
            if (suspense.deps <= 0) {
                suspense.resolve();
            }
            else if (isInFallback) {
                patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                isSVG, slotScopeIds, optimized);
                setActiveBranch(suspense, newFallback);
            }
        }
        else {
            // toggled before pending tree is resolved
            suspense.pendingId++;
            if (isHydrating) {
                // if toggled before hydration is finished, the current DOM tree is
                // no longer valid. set it as the active branch so it will be unmounted
                // when resolved
                suspense.isHydrating = false;
                suspense.activeBranch = pendingBranch;
            }
            else {
                unmount(pendingBranch, parentComponent, suspense);
            }
            // increment pending ID. this is used to invalidate async callbacks
            // reset suspense state
            suspense.deps = 0;
            // discard effects from pending branch
            suspense.effects.length = 0;
            // discard previous container
            suspense.hiddenContainer = createElement('div');
            if (isInFallback) {
                // already in fallback state
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                if (suspense.deps <= 0) {
                    suspense.resolve();
                }
                else {
                    patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                    isSVG, slotScopeIds, optimized);
                    setActiveBranch(suspense, newFallback);
                }
            }
            else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
                // toggled "back" to current active branch
                patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                // force resolve
                suspense.resolve(true);
            }
            else {
                // switched to a 3rd branch
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                if (suspense.deps <= 0) {
                    suspense.resolve();
                }
            }
        }
    }
    else {
        if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
            // root did not change, just normal patch
            patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
            setActiveBranch(suspense, newBranch);
        }
        else {
            // root node toggled
            // invoke @pending event
            triggerEvent(n2, 'onPending');
            // mount pending branch in off-dom container
            suspense.pendingBranch = newBranch;
            suspense.pendingId++;
            patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
            if (suspense.deps <= 0) {
                // incoming branch has no async deps, resolve now.
                suspense.resolve();
            }
            else {
                const { timeout, pendingId } = suspense;
                if (timeout > 0) {
                    setTimeout(() => {
                        if (suspense.pendingId === pendingId) {
                            suspense.fallback(newFallback);
                        }
                    }, timeout);
                }
                else if (timeout === 0) {
                    suspense.fallback(newFallback);
                }
            }
        }
    }
}
let hasWarned = false;
function createSuspenseBoundary(vnode, parent, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
    /* istanbul ignore if */
    if (false) {}
    const { p: patch, m: move, um: unmount, n: next, o: { parentNode, remove } } = rendererInternals;
    const timeout = Object(shared_esm_bundler["O" /* toNumber */])(vnode.props && vnode.props.timeout);
    const suspense = {
        vnode,
        parent,
        parentComponent,
        isSVG,
        container,
        hiddenContainer,
        anchor,
        deps: 0,
        pendingId: 0,
        timeout: typeof timeout === 'number' ? timeout : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: true,
        isHydrating,
        isUnmounted: false,
        effects: [],
        resolve(resume = false) {
            if ((false)) {}
            const { vnode, activeBranch, pendingBranch, pendingId, effects, parentComponent, container } = suspense;
            if (suspense.isHydrating) {
                suspense.isHydrating = false;
            }
            else if (!resume) {
                const delayEnter = activeBranch &&
                    pendingBranch.transition &&
                    pendingBranch.transition.mode === 'out-in';
                if (delayEnter) {
                    activeBranch.transition.afterLeave = () => {
                        if (pendingId === suspense.pendingId) {
                            move(pendingBranch, container, anchor, 0 /* ENTER */);
                        }
                    };
                }
                // this is initial anchor on mount
                let { anchor } = suspense;
                // unmount current active tree
                if (activeBranch) {
                    // if the fallback tree was mounted, it may have been moved
                    // as part of a parent suspense. get the latest anchor for insertion
                    anchor = next(activeBranch);
                    unmount(activeBranch, parentComponent, suspense, true);
                }
                if (!delayEnter) {
                    // move content from off-dom container to actual container
                    move(pendingBranch, container, anchor, 0 /* ENTER */);
                }
            }
            setActiveBranch(suspense, pendingBranch);
            suspense.pendingBranch = null;
            suspense.isInFallback = false;
            // flush buffered effects
            // check if there is a pending parent suspense
            let parent = suspense.parent;
            let hasUnresolvedAncestor = false;
            while (parent) {
                if (parent.pendingBranch) {
                    // found a pending parent suspense, merge buffered post jobs
                    // into that parent
                    parent.effects.push(...effects);
                    hasUnresolvedAncestor = true;
                    break;
                }
                parent = parent.parent;
            }
            // no pending parent suspense, flush all jobs
            if (!hasUnresolvedAncestor) {
                queuePostFlushCb(effects);
            }
            suspense.effects = [];
            // invoke @resolve event
            triggerEvent(vnode, 'onResolve');
        },
        fallback(fallbackVNode) {
            if (!suspense.pendingBranch) {
                return;
            }
            const { vnode, activeBranch, parentComponent, container, isSVG } = suspense;
            // invoke @fallback event
            triggerEvent(vnode, 'onFallback');
            const anchor = next(activeBranch);
            const mountFallback = () => {
                if (!suspense.isInFallback) {
                    return;
                }
                // mount the fallback tree
                patch(null, fallbackVNode, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                isSVG, slotScopeIds, optimized);
                setActiveBranch(suspense, fallbackVNode);
            };
            const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === 'out-in';
            if (delayEnter) {
                activeBranch.transition.afterLeave = mountFallback;
            }
            suspense.isInFallback = true;
            // unmount current active branch
            unmount(activeBranch, parentComponent, null, // no suspense so unmount hooks fire now
            true // shouldRemove
            );
            if (!delayEnter) {
                mountFallback();
            }
        },
        move(container, anchor, type) {
            suspense.activeBranch &&
                move(suspense.activeBranch, container, anchor, type);
            suspense.container = container;
        },
        next() {
            return suspense.activeBranch && next(suspense.activeBranch);
        },
        registerDep(instance, setupRenderEffect) {
            const isInPendingSuspense = !!suspense.pendingBranch;
            if (isInPendingSuspense) {
                suspense.deps++;
            }
            const hydratedEl = instance.vnode.el;
            instance
                .asyncDep.catch(err => {
                handleError(err, instance, 0 /* SETUP_FUNCTION */);
            })
                .then(asyncSetupResult => {
                // retry when the setup() promise resolves.
                // component may have been unmounted before resolve.
                if (instance.isUnmounted ||
                    suspense.isUnmounted ||
                    suspense.pendingId !== instance.suspenseId) {
                    return;
                }
                // retry from this component
                instance.asyncResolved = true;
                const { vnode } = instance;
                if ((false)) {}
                handleSetupResult(instance, asyncSetupResult, false);
                if (hydratedEl) {
                    // vnode may have been replaced if an update happened before the
                    // async dep is resolved.
                    vnode.el = hydratedEl;
                }
                const placeholder = !hydratedEl && instance.subTree.el;
                setupRenderEffect(instance, vnode, 
                // component may have been moved before resolve.
                // if this is not a hydration, instance.subTree will be the comment
                // placeholder.
                parentNode(hydratedEl || instance.subTree.el), 
                // anchor will not be used if this is hydration, so only need to
                // consider the comment placeholder case.
                hydratedEl ? null : next(instance.subTree), suspense, isSVG, optimized);
                if (placeholder) {
                    remove(placeholder);
                }
                updateHOCHostEl(instance, vnode.el);
                if ((false)) {}
                // only decrease deps count if suspense is not already resolved
                if (isInPendingSuspense && --suspense.deps === 0) {
                    suspense.resolve();
                }
            });
        },
        unmount(parentSuspense, doRemove) {
            suspense.isUnmounted = true;
            if (suspense.activeBranch) {
                unmount(suspense.activeBranch, parentComponent, parentSuspense, doRemove);
            }
            if (suspense.pendingBranch) {
                unmount(suspense.pendingBranch, parentComponent, parentSuspense, doRemove);
            }
        }
    };
    return suspense;
}
function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals, hydrateNode) {
    /* eslint-disable no-restricted-globals */
    const suspense = (vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, document.createElement('div'), null, isSVG, slotScopeIds, optimized, rendererInternals, true /* hydrating */));
    // there are two possible scenarios for server-rendered suspense:
    // - success: ssr content should be fully resolved
    // - failure: ssr content should be the fallback branch.
    // however, on the client we don't really know if it has failed or not
    // attempt to hydrate the DOM assuming it has succeeded, but we still
    // need to construct a suspense boundary first
    const result = hydrateNode(node, (suspense.pendingBranch = vnode.ssContent), parentComponent, suspense, slotScopeIds, optimized);
    if (suspense.deps === 0) {
        suspense.resolve();
    }
    return result;
    /* eslint-enable no-restricted-globals */
}
function normalizeSuspenseChildren(vnode) {
    const { shapeFlag, children } = vnode;
    const isSlotChildren = shapeFlag & 32 /* SLOTS_CHILDREN */;
    vnode.ssContent = normalizeSuspenseSlot(isSlotChildren ? children.default : children);
    vnode.ssFallback = isSlotChildren
        ? normalizeSuspenseSlot(children.fallback)
        : createVNode(runtime_core_esm_bundler_Comment);
}
function normalizeSuspenseSlot(s) {
    let block;
    if (Object(shared_esm_bundler["q" /* isFunction */])(s)) {
        const trackBlock = isBlockTreeEnabled && s._c;
        if (trackBlock) {
            // disableTracking: false
            // allow block tracking for compiled slots
            // (see ./componentRenderContext.ts)
            s._d = false;
            openBlock();
        }
        s = s();
        if (trackBlock) {
            s._d = true;
            block = currentBlock;
            closeBlock();
        }
    }
    if (Object(shared_esm_bundler["o" /* isArray */])(s)) {
        const singleChild = filterSingleRoot(s);
        if (false) {}
        s = singleChild;
    }
    s = normalizeVNode(s);
    if (block && !s.dynamicChildren) {
        s.dynamicChildren = block.filter(c => c !== s);
    }
    return s;
}
function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
        if (Object(shared_esm_bundler["o" /* isArray */])(fn)) {
            suspense.effects.push(...fn);
        }
        else {
            suspense.effects.push(fn);
        }
    }
    else {
        queuePostFlushCb(fn);
    }
}
function setActiveBranch(suspense, branch) {
    suspense.activeBranch = branch;
    const { vnode, parentComponent } = suspense;
    const el = (vnode.el = branch.el);
    // in case suspense is the root node of a component,
    // recursively update the HOC el
    if (parentComponent && parentComponent.subTree === vnode) {
        parentComponent.vnode.el = el;
        updateHOCHostEl(parentComponent, el);
    }
}

function provide(key, value) {
    if (!currentInstance) {
        if ((false)) {}
    }
    else {
        let provides = currentInstance.provides;
        // by default an instance inherits its parent's provides object
        // but when it needs to provide values of its own, it creates its
        // own provides object using parent provides object as prototype.
        // this way in `inject` we can simply look up injections from direct
        // parent and let the prototype chain do the work.
        const parentProvides = currentInstance.parent && currentInstance.parent.provides;
        if (parentProvides === provides) {
            provides = currentInstance.provides = Object.create(parentProvides);
        }
        // TS doesn't allow symbol as index type
        provides[key] = value;
    }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
    // fallback to `currentRenderingInstance` so that this can be called in
    // a functional component
    const instance = currentInstance || currentRenderingInstance;
    if (instance) {
        // #2400
        // to support `app.use` plugins,
        // fallback to appContext's `provides` if the instance is at root
        const provides = instance.parent == null
            ? instance.vnode.appContext && instance.vnode.appContext.provides
            : instance.parent.provides;
        if (provides && key in provides) {
            // TS doesn't allow symbol as index type
            return provides[key];
        }
        else if (arguments.length > 1) {
            return treatDefaultAsFactory && Object(shared_esm_bundler["q" /* isFunction */])(defaultValue)
                ? defaultValue.call(instance.proxy)
                : defaultValue;
        }
        else if ((false)) {}
    }
    else if ((false)) {}
}

// Simple effect.
function watchEffect(effect, options) {
    return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
    return doWatch(effect, null, (( false)
        ? undefined
        : { flush: 'post' }));
}
function watchSyncEffect(effect, options) {
    return doWatch(effect, null, (( false)
        ? undefined
        : { flush: 'sync' }));
}
// initial value for watchers to trigger on undefined initial values
const INITIAL_WATCHER_VALUE = {};
// implementation
function watch(source, cb, options) {
    if (false) {}
    return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = shared_esm_bundler["b" /* EMPTY_OBJ */]) {
    if (false) {}
    const warnInvalidSource = (s) => {
        runtime_core_esm_bundler_warn(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, ` +
            `a reactive object, or an array of these types.`);
    };
    const instance = currentInstance;
    let getter;
    let forceTrigger = false;
    let isMultiSource = false;
    if (isRef(source)) {
        getter = () => source.value;
        forceTrigger = reactivity_esm_bundler_isShallow(source);
    }
    else if (isReactive(source)) {
        getter = () => source;
        deep = true;
    }
    else if (Object(shared_esm_bundler["o" /* isArray */])(source)) {
        isMultiSource = true;
        forceTrigger = source.some(isReactive);
        getter = () => source.map(s => {
            if (isRef(s)) {
                return s.value;
            }
            else if (isReactive(s)) {
                return traverse(s);
            }
            else if (Object(shared_esm_bundler["q" /* isFunction */])(s)) {
                return callWithErrorHandling(s, instance, 2 /* WATCH_GETTER */);
            }
            else {
                ( false) && false;
            }
        });
    }
    else if (Object(shared_esm_bundler["q" /* isFunction */])(source)) {
        if (cb) {
            // getter with cb
            getter = () => callWithErrorHandling(source, instance, 2 /* WATCH_GETTER */);
        }
        else {
            // no cb -> simple effect
            getter = () => {
                if (instance && instance.isUnmounted) {
                    return;
                }
                if (cleanup) {
                    cleanup();
                }
                return callWithAsyncErrorHandling(source, instance, 3 /* WATCH_CALLBACK */, [onCleanup]);
            };
        }
    }
    else {
        getter = shared_esm_bundler["d" /* NOOP */];
        ( false) && false;
    }
    if (cb && deep) {
        const baseGetter = getter;
        getter = () => traverse(baseGetter());
    }
    let cleanup;
    let onCleanup = (fn) => {
        cleanup = effect.onStop = () => {
            callWithErrorHandling(fn, instance, 4 /* WATCH_CLEANUP */);
        };
    };
    // in SSR there is no need to setup an actual effect, and it should be noop
    // unless it's eager
    if (isInSSRComponentSetup) {
        // we will also not call the invalidate callback (+ runner is not set up)
        onCleanup = shared_esm_bundler["d" /* NOOP */];
        if (!cb) {
            getter();
        }
        else if (immediate) {
            callWithAsyncErrorHandling(cb, instance, 3 /* WATCH_CALLBACK */, [
                getter(),
                isMultiSource ? [] : undefined,
                onCleanup
            ]);
        }
        return shared_esm_bundler["d" /* NOOP */];
    }
    let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
    const job = () => {
        if (!effect.active) {
            return;
        }
        if (cb) {
            // watch(source, cb)
            const newValue = effect.run();
            if (deep ||
                forceTrigger ||
                (isMultiSource
                    ? newValue.some((v, i) => Object(shared_esm_bundler["j" /* hasChanged */])(v, oldValue[i]))
                    : Object(shared_esm_bundler["j" /* hasChanged */])(newValue, oldValue)) ||
                (false  )) {
                // cleanup before running cb again
                if (cleanup) {
                    cleanup();
                }
                callWithAsyncErrorHandling(cb, instance, 3 /* WATCH_CALLBACK */, [
                    newValue,
                    // pass undefined as the old value when it's changed for the first time
                    oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue,
                    onCleanup
                ]);
                oldValue = newValue;
            }
        }
        else {
            // watchEffect
            effect.run();
        }
    };
    // important: mark the job as a watcher callback so that scheduler knows
    // it is allowed to self-trigger (#1727)
    job.allowRecurse = !!cb;
    let scheduler;
    if (flush === 'sync') {
        scheduler = job; // the scheduler function gets called directly
    }
    else if (flush === 'post') {
        scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
    }
    else {
        // default: 'pre'
        scheduler = () => {
            if (!instance || instance.isMounted) {
                queuePreFlushCb(job);
            }
            else {
                // with 'pre' option, the first call must happen before
                // the component is mounted so it is called synchronously.
                job();
            }
        };
    }
    const effect = new ReactiveEffect(getter, scheduler);
    if ((false)) {}
    // initial run
    if (cb) {
        if (immediate) {
            job();
        }
        else {
            oldValue = effect.run();
        }
    }
    else if (flush === 'post') {
        queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
    }
    else {
        effect.run();
    }
    return () => {
        effect.stop();
        if (instance && instance.scope) {
            Object(shared_esm_bundler["L" /* remove */])(instance.scope.effects, effect);
        }
    };
}
// this.$watch
function instanceWatch(source, value, options) {
    const publicThis = this.proxy;
    const getter = Object(shared_esm_bundler["E" /* isString */])(source)
        ? source.includes('.')
            ? createPathGetter(publicThis, source)
            : () => publicThis[source]
        : source.bind(publicThis, publicThis);
    let cb;
    if (Object(shared_esm_bundler["q" /* isFunction */])(value)) {
        cb = value;
    }
    else {
        cb = value.handler;
        options = value;
    }
    const cur = currentInstance;
    setCurrentInstance(this);
    const res = doWatch(getter, cb.bind(publicThis), options);
    if (cur) {
        setCurrentInstance(cur);
    }
    else {
        unsetCurrentInstance();
    }
    return res;
}
function createPathGetter(ctx, path) {
    const segments = path.split('.');
    return () => {
        let cur = ctx;
        for (let i = 0; i < segments.length && cur; i++) {
            cur = cur[segments[i]];
        }
        return cur;
    };
}
function traverse(value, seen) {
    if (!Object(shared_esm_bundler["w" /* isObject */])(value) || value["__v_skip" /* SKIP */]) {
        return value;
    }
    seen = seen || new Set();
    if (seen.has(value)) {
        return value;
    }
    seen.add(value);
    if (isRef(value)) {
        traverse(value.value, seen);
    }
    else if (Object(shared_esm_bundler["o" /* isArray */])(value)) {
        for (let i = 0; i < value.length; i++) {
            traverse(value[i], seen);
        }
    }
    else if (Object(shared_esm_bundler["C" /* isSet */])(value) || Object(shared_esm_bundler["u" /* isMap */])(value)) {
        value.forEach((v) => {
            traverse(v, seen);
        });
    }
    else if (Object(shared_esm_bundler["y" /* isPlainObject */])(value)) {
        for (const key in value) {
            traverse(value[key], seen);
        }
    }
    return value;
}

function useTransitionState() {
    const state = {
        isMounted: false,
        isLeaving: false,
        isUnmounting: false,
        leavingVNodes: new Map()
    };
    onMounted(() => {
        state.isMounted = true;
    });
    onBeforeUnmount(() => {
        state.isUnmounting = true;
    });
    return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionImpl = {
    name: `BaseTransition`,
    props: {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        // enter
        onBeforeEnter: TransitionHookValidator,
        onEnter: TransitionHookValidator,
        onAfterEnter: TransitionHookValidator,
        onEnterCancelled: TransitionHookValidator,
        // leave
        onBeforeLeave: TransitionHookValidator,
        onLeave: TransitionHookValidator,
        onAfterLeave: TransitionHookValidator,
        onLeaveCancelled: TransitionHookValidator,
        // appear
        onBeforeAppear: TransitionHookValidator,
        onAppear: TransitionHookValidator,
        onAfterAppear: TransitionHookValidator,
        onAppearCancelled: TransitionHookValidator
    },
    setup(props, { slots }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        let prevTransitionKey;
        return () => {
            const children = slots.default && getTransitionRawChildren(slots.default(), true);
            if (!children || !children.length) {
                return;
            }
            // warn multiple elements
            if (false) {}
            // there's no need to track reactivity for these props so use the raw
            // props for a bit better perf
            const rawProps = toRaw(props);
            const { mode } = rawProps;
            // check mode
            if (false) {}
            // at this point children has a guaranteed length of 1.
            const child = children[0];
            if (state.isLeaving) {
                return emptyPlaceholder(child);
            }
            // in the case of <transition><keep-alive/></transition>, we need to
            // compare the type of the kept-alive children.
            const innerChild = getKeepAliveChild(child);
            if (!innerChild) {
                return emptyPlaceholder(child);
            }
            const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
            setTransitionHooks(innerChild, enterHooks);
            const oldChild = instance.subTree;
            const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
            let transitionKeyChanged = false;
            const { getTransitionKey } = innerChild.type;
            if (getTransitionKey) {
                const key = getTransitionKey();
                if (prevTransitionKey === undefined) {
                    prevTransitionKey = key;
                }
                else if (key !== prevTransitionKey) {
                    prevTransitionKey = key;
                    transitionKeyChanged = true;
                }
            }
            // handle mode
            if (oldInnerChild &&
                oldInnerChild.type !== runtime_core_esm_bundler_Comment &&
                (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
                const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
                // update old tree's hooks in case of dynamic transition
                setTransitionHooks(oldInnerChild, leavingHooks);
                // switching between different views
                if (mode === 'out-in') {
                    state.isLeaving = true;
                    // return placeholder node and queue update when leave finishes
                    leavingHooks.afterLeave = () => {
                        state.isLeaving = false;
                        instance.update();
                    };
                    return emptyPlaceholder(child);
                }
                else if (mode === 'in-out' && innerChild.type !== runtime_core_esm_bundler_Comment) {
                    leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
                        const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
                        leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                        // early removal callback
                        el._leaveCb = () => {
                            earlyRemove();
                            el._leaveCb = undefined;
                            delete enterHooks.delayedLeave;
                        };
                        enterHooks.delayedLeave = delayedLeave;
                    };
                }
            }
            return child;
        };
    }
};
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
    const { leavingVNodes } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
        leavingVNodesCache = Object.create(null);
        leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
}
// The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.
function resolveTransitionHooks(vnode, props, state, instance) {
    const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
    const key = String(vnode.key);
    const leavingVNodesCache = getLeavingNodesForType(state, vnode);
    const callHook = (hook, args) => {
        hook &&
            callWithAsyncErrorHandling(hook, instance, 9 /* TRANSITION_HOOK */, args);
    };
    const hooks = {
        mode,
        persisted,
        beforeEnter(el) {
            let hook = onBeforeEnter;
            if (!state.isMounted) {
                if (appear) {
                    hook = onBeforeAppear || onBeforeEnter;
                }
                else {
                    return;
                }
            }
            // for same element (v-show)
            if (el._leaveCb) {
                el._leaveCb(true /* cancelled */);
            }
            // for toggled element with same key (v-if)
            const leavingVNode = leavingVNodesCache[key];
            if (leavingVNode &&
                isSameVNodeType(vnode, leavingVNode) &&
                leavingVNode.el._leaveCb) {
                // force early removal (not cancelled)
                leavingVNode.el._leaveCb();
            }
            callHook(hook, [el]);
        },
        enter(el) {
            let hook = onEnter;
            let afterHook = onAfterEnter;
            let cancelHook = onEnterCancelled;
            if (!state.isMounted) {
                if (appear) {
                    hook = onAppear || onEnter;
                    afterHook = onAfterAppear || onAfterEnter;
                    cancelHook = onAppearCancelled || onEnterCancelled;
                }
                else {
                    return;
                }
            }
            let called = false;
            const done = (el._enterCb = (cancelled) => {
                if (called)
                    return;
                called = true;
                if (cancelled) {
                    callHook(cancelHook, [el]);
                }
                else {
                    callHook(afterHook, [el]);
                }
                if (hooks.delayedLeave) {
                    hooks.delayedLeave();
                }
                el._enterCb = undefined;
            });
            if (hook) {
                hook(el, done);
                if (hook.length <= 1) {
                    done();
                }
            }
            else {
                done();
            }
        },
        leave(el, remove) {
            const key = String(vnode.key);
            if (el._enterCb) {
                el._enterCb(true /* cancelled */);
            }
            if (state.isUnmounting) {
                return remove();
            }
            callHook(onBeforeLeave, [el]);
            let called = false;
            const done = (el._leaveCb = (cancelled) => {
                if (called)
                    return;
                called = true;
                remove();
                if (cancelled) {
                    callHook(onLeaveCancelled, [el]);
                }
                else {
                    callHook(onAfterLeave, [el]);
                }
                el._leaveCb = undefined;
                if (leavingVNodesCache[key] === vnode) {
                    delete leavingVNodesCache[key];
                }
            });
            leavingVNodesCache[key] = vnode;
            if (onLeave) {
                onLeave(el, done);
                if (onLeave.length <= 1) {
                    done();
                }
            }
            else {
                done();
            }
        },
        clone(vnode) {
            return resolveTransitionHooks(vnode, props, state, instance);
        }
    };
    return hooks;
}
// the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.
function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) {
        vnode = cloneVNode(vnode);
        vnode.children = null;
        return vnode;
    }
}
function getKeepAliveChild(vnode) {
    return isKeepAlive(vnode)
        ? vnode.children
            ? vnode.children[0]
            : undefined
        : vnode;
}
function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag & 6 /* COMPONENT */ && vnode.component) {
        setTransitionHooks(vnode.component.subTree, hooks);
    }
    else if (vnode.shapeFlag & 128 /* SUSPENSE */) {
        vnode.ssContent.transition = hooks.clone(vnode.ssContent);
        vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    }
    else {
        vnode.transition = hooks;
    }
}
function getTransitionRawChildren(children, keepComment = false) {
    let ret = [];
    let keyedFragmentCount = 0;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        // handle fragment children case, e.g. v-for
        if (child.type === Fragment) {
            if (child.patchFlag & 128 /* KEYED_FRAGMENT */)
                keyedFragmentCount++;
            ret = ret.concat(getTransitionRawChildren(child.children, keepComment));
        }
        // comment placeholders should be skipped, e.g. v-if
        else if (keepComment || child.type !== runtime_core_esm_bundler_Comment) {
            ret.push(child);
        }
    }
    // #1126 if a transition children list contains multiple sub fragments, these
    // fragments will be merged into a flat children array. Since each v-for
    // fragment may contain different static bindings inside, we need to de-op
    // these children to force full diffs to ensure correct behavior.
    if (keyedFragmentCount > 1) {
        for (let i = 0; i < ret.length; i++) {
            ret[i].patchFlag = -2 /* BAIL */;
        }
    }
    return ret;
}

// implementation, close to no-op
function defineComponent(options) {
    return Object(shared_esm_bundler["q" /* isFunction */])(options) ? { setup: options, name: options.name } : options;
}

const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
function defineAsyncComponent(source) {
    if (Object(shared_esm_bundler["q" /* isFunction */])(source)) {
        source = { loader: source };
    }
    const { loader, loadingComponent, errorComponent, delay = 200, timeout, // undefined = never times out
    suspensible = true, onError: userOnError } = source;
    let pendingRequest = null;
    let resolvedComp;
    let retries = 0;
    const retry = () => {
        retries++;
        pendingRequest = null;
        return load();
    };
    const load = () => {
        let thisRequest;
        return (pendingRequest ||
            (thisRequest = pendingRequest =
                loader()
                    .catch(err => {
                    err = err instanceof Error ? err : new Error(String(err));
                    if (userOnError) {
                        return new Promise((resolve, reject) => {
                            const userRetry = () => resolve(retry());
                            const userFail = () => reject(err);
                            userOnError(err, userRetry, userFail, retries + 1);
                        });
                    }
                    else {
                        throw err;
                    }
                })
                    .then((comp) => {
                    if (thisRequest !== pendingRequest && pendingRequest) {
                        return pendingRequest;
                    }
                    if (false) {}
                    // interop module default
                    if (comp &&
                        (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
                        comp = comp.default;
                    }
                    if (false) {}
                    resolvedComp = comp;
                    return comp;
                })));
    };
    return defineComponent({
        name: 'AsyncComponentWrapper',
        __asyncLoader: load,
        get __asyncResolved() {
            return resolvedComp;
        },
        setup() {
            const instance = currentInstance;
            // already resolved
            if (resolvedComp) {
                return () => createInnerComp(resolvedComp, instance);
            }
            const onError = (err) => {
                pendingRequest = null;
                handleError(err, instance, 13 /* ASYNC_COMPONENT_LOADER */, !errorComponent /* do not throw in dev if user provided error component */);
            };
            // suspense-controlled or SSR.
            if ((suspensible && instance.suspense) ||
                (isInSSRComponentSetup)) {
                return load()
                    .then(comp => {
                    return () => createInnerComp(comp, instance);
                })
                    .catch(err => {
                    onError(err);
                    return () => errorComponent
                        ? createVNode(errorComponent, {
                            error: err
                        })
                        : null;
                });
            }
            const loaded = reactivity_esm_bundler_ref(false);
            const error = reactivity_esm_bundler_ref();
            const delayed = reactivity_esm_bundler_ref(!!delay);
            if (delay) {
                setTimeout(() => {
                    delayed.value = false;
                }, delay);
            }
            if (timeout != null) {
                setTimeout(() => {
                    if (!loaded.value && !error.value) {
                        const err = new Error(`Async component timed out after ${timeout}ms.`);
                        onError(err);
                        error.value = err;
                    }
                }, timeout);
            }
            load()
                .then(() => {
                loaded.value = true;
                if (instance.parent && isKeepAlive(instance.parent.vnode)) {
                    // parent is keep-alive, force update so the loaded component's
                    // name is taken into account
                    queueJob(instance.parent.update);
                }
            })
                .catch(err => {
                onError(err);
                error.value = err;
            });
            return () => {
                if (loaded.value && resolvedComp) {
                    return createInnerComp(resolvedComp, instance);
                }
                else if (error.value && errorComponent) {
                    return createVNode(errorComponent, {
                        error: error.value
                    });
                }
                else if (loadingComponent && !delayed.value) {
                    return createVNode(loadingComponent);
                }
            };
        }
    });
}
function createInnerComp(comp, { vnode: { ref, props, children } }) {
    const vnode = createVNode(comp, props, children);
    // ensure inner component inherits the async wrapper's ref owner
    vnode.ref = ref;
    return vnode;
}

const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
const KeepAliveImpl = {
    name: `KeepAlive`,
    // Marker for special handling inside the renderer. We are not using a ===
    // check directly on KeepAlive in the renderer, because importing it directly
    // would prevent it from being tree-shaken.
    __isKeepAlive: true,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    setup(props, { slots }) {
        const instance = getCurrentInstance();
        // KeepAlive communicates with the instantiated renderer via the
        // ctx where the renderer passes in its internals,
        // and the KeepAlive instance exposes activate/deactivate implementations.
        // The whole point of this is to avoid importing KeepAlive directly in the
        // renderer to facilitate tree-shaking.
        const sharedContext = instance.ctx;
        // if the internal renderer is not registered, it indicates that this is server-side rendering,
        // for KeepAlive, we just need to render its children
        if (!sharedContext.renderer) {
            return slots.default;
        }
        const cache = new Map();
        const keys = new Set();
        let current = null;
        if (( false) || __VUE_PROD_DEVTOOLS__) {
            instance.__v_cache = cache;
        }
        const parentSuspense = instance.suspense;
        const { renderer: { p: patch, m: move, um: _unmount, o: { createElement } } } = sharedContext;
        const storageContainer = createElement('div');
        sharedContext.activate = (vnode, container, anchor, isSVG, optimized) => {
            const instance = vnode.component;
            move(vnode, container, anchor, 0 /* ENTER */, parentSuspense);
            // in case props have changed
            patch(instance.vnode, vnode, container, anchor, instance, parentSuspense, isSVG, vnode.slotScopeIds, optimized);
            queuePostRenderEffect(() => {
                instance.isDeactivated = false;
                if (instance.a) {
                    Object(shared_esm_bundler["n" /* invokeArrayFns */])(instance.a);
                }
                const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
                if (vnodeHook) {
                    invokeVNodeHook(vnodeHook, instance.parent, vnode);
                }
            }, parentSuspense);
            if (( false) || __VUE_PROD_DEVTOOLS__) {
                // Update components tree
                devtoolsComponentAdded(instance);
            }
        };
        sharedContext.deactivate = (vnode) => {
            const instance = vnode.component;
            move(vnode, storageContainer, null, 1 /* LEAVE */, parentSuspense);
            queuePostRenderEffect(() => {
                if (instance.da) {
                    Object(shared_esm_bundler["n" /* invokeArrayFns */])(instance.da);
                }
                const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
                if (vnodeHook) {
                    invokeVNodeHook(vnodeHook, instance.parent, vnode);
                }
                instance.isDeactivated = true;
            }, parentSuspense);
            if (( false) || __VUE_PROD_DEVTOOLS__) {
                // Update components tree
                devtoolsComponentAdded(instance);
            }
        };
        function unmount(vnode) {
            // reset the shapeFlag so it can be properly unmounted
            resetShapeFlag(vnode);
            _unmount(vnode, instance, parentSuspense, true);
        }
        function pruneCache(filter) {
            cache.forEach((vnode, key) => {
                const name = getComponentName(vnode.type);
                if (name && (!filter || !filter(name))) {
                    pruneCacheEntry(key);
                }
            });
        }
        function pruneCacheEntry(key) {
            const cached = cache.get(key);
            if (!current || cached.type !== current.type) {
                unmount(cached);
            }
            else if (current) {
                // current active instance should no longer be kept-alive.
                // we can't unmount it now but it might be later, so reset its flag now.
                resetShapeFlag(current);
            }
            cache.delete(key);
            keys.delete(key);
        }
        // prune cache on include/exclude prop change
        watch(() => [props.include, props.exclude], ([include, exclude]) => {
            include && pruneCache(name => matches(include, name));
            exclude && pruneCache(name => !matches(exclude, name));
        }, 
        // prune post-render after `current` has been updated
        { flush: 'post', deep: true });
        // cache sub tree after render
        let pendingCacheKey = null;
        const cacheSubtree = () => {
            // fix #1621, the pendingCacheKey could be 0
            if (pendingCacheKey != null) {
                cache.set(pendingCacheKey, getInnerChild(instance.subTree));
            }
        };
        onMounted(cacheSubtree);
        onUpdated(cacheSubtree);
        onBeforeUnmount(() => {
            cache.forEach(cached => {
                const { subTree, suspense } = instance;
                const vnode = getInnerChild(subTree);
                if (cached.type === vnode.type) {
                    // current instance will be unmounted as part of keep-alive's unmount
                    resetShapeFlag(vnode);
                    // but invoke its deactivated hook here
                    const da = vnode.component.da;
                    da && queuePostRenderEffect(da, suspense);
                    return;
                }
                unmount(cached);
            });
        });
        return () => {
            pendingCacheKey = null;
            if (!slots.default) {
                return null;
            }
            const children = slots.default();
            const rawVNode = children[0];
            if (children.length > 1) {
                if ((false)) {}
                current = null;
                return children;
            }
            else if (!isVNode(rawVNode) ||
                (!(rawVNode.shapeFlag & 4 /* STATEFUL_COMPONENT */) &&
                    !(rawVNode.shapeFlag & 128 /* SUSPENSE */))) {
                current = null;
                return rawVNode;
            }
            let vnode = getInnerChild(rawVNode);
            const comp = vnode.type;
            // for async components, name check should be based in its loaded
            // inner component if available
            const name = getComponentName(isAsyncWrapper(vnode)
                ? vnode.type.__asyncResolved || {}
                : comp);
            const { include, exclude, max } = props;
            if ((include && (!name || !matches(include, name))) ||
                (exclude && name && matches(exclude, name))) {
                current = vnode;
                return rawVNode;
            }
            const key = vnode.key == null ? comp : vnode.key;
            const cachedVNode = cache.get(key);
            // clone vnode if it's reused because we are going to mutate it
            if (vnode.el) {
                vnode = cloneVNode(vnode);
                if (rawVNode.shapeFlag & 128 /* SUSPENSE */) {
                    rawVNode.ssContent = vnode;
                }
            }
            // #1513 it's possible for the returned vnode to be cloned due to attr
            // fallthrough or scopeId, so the vnode here may not be the final vnode
            // that is mounted. Instead of caching it directly, we store the pending
            // key and cache `instance.subTree` (the normalized vnode) in
            // beforeMount/beforeUpdate hooks.
            pendingCacheKey = key;
            if (cachedVNode) {
                // copy over mounted state
                vnode.el = cachedVNode.el;
                vnode.component = cachedVNode.component;
                if (vnode.transition) {
                    // recursively update transition hooks on subTree
                    setTransitionHooks(vnode, vnode.transition);
                }
                // avoid vnode being mounted as fresh
                vnode.shapeFlag |= 512 /* COMPONENT_KEPT_ALIVE */;
                // make this key the freshest
                keys.delete(key);
                keys.add(key);
            }
            else {
                keys.add(key);
                // prune oldest entry
                if (max && keys.size > parseInt(max, 10)) {
                    pruneCacheEntry(keys.values().next().value);
                }
            }
            // avoid vnode being unmounted
            vnode.shapeFlag |= 256 /* COMPONENT_SHOULD_KEEP_ALIVE */;
            current = vnode;
            return rawVNode;
        };
    }
};
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const KeepAlive = KeepAliveImpl;
function matches(pattern, name) {
    if (Object(shared_esm_bundler["o" /* isArray */])(pattern)) {
        return pattern.some((p) => matches(p, name));
    }
    else if (Object(shared_esm_bundler["E" /* isString */])(pattern)) {
        return pattern.split(',').includes(name);
    }
    else if (pattern.test) {
        return pattern.test(name);
    }
    /* istanbul ignore next */
    return false;
}
function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a" /* ACTIVATED */, target);
}
function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da" /* DEACTIVATED */, target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
    // cache the deactivate branch check wrapper for injected hooks so the same
    // hook can be properly deduped by the scheduler. "__wdc" stands for "with
    // deactivation check".
    const wrappedHook = hook.__wdc ||
        (hook.__wdc = () => {
            // only fire the hook if the target instance is NOT in a deactivated branch.
            let current = target;
            while (current) {
                if (current.isDeactivated) {
                    return;
                }
                current = current.parent;
            }
            return hook();
        });
    injectHook(type, wrappedHook, target);
    // In addition to registering it on the target instance, we walk up the parent
    // chain and register it on all ancestor instances that are keep-alive roots.
    // This avoids the need to walk the entire component tree when invoking these
    // hooks, and more importantly, avoids the need to track child components in
    // arrays.
    if (target) {
        let current = target.parent;
        while (current && current.parent) {
            if (isKeepAlive(current.parent.vnode)) {
                injectToKeepAliveRoot(wrappedHook, type, target, current);
            }
            current = current.parent;
        }
    }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    // injectHook wraps the original for error handling, so make sure to remove
    // the wrapped version.
    const injected = injectHook(type, hook, keepAliveRoot, true /* prepend */);
    onUnmounted(() => {
        Object(shared_esm_bundler["L" /* remove */])(keepAliveRoot[type], injected);
    }, target);
}
function resetShapeFlag(vnode) {
    let shapeFlag = vnode.shapeFlag;
    if (shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */) {
        shapeFlag -= 256 /* COMPONENT_SHOULD_KEEP_ALIVE */;
    }
    if (shapeFlag & 512 /* COMPONENT_KEPT_ALIVE */) {
        shapeFlag -= 512 /* COMPONENT_KEPT_ALIVE */;
    }
    vnode.shapeFlag = shapeFlag;
}
function getInnerChild(vnode) {
    return vnode.shapeFlag & 128 /* SUSPENSE */ ? vnode.ssContent : vnode;
}

function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
        const hooks = target[type] || (target[type] = []);
        // cache the error handling wrapper for injected hooks so the same hook
        // can be properly deduped by the scheduler. "__weh" stands for "with error
        // handling".
        const wrappedHook = hook.__weh ||
            (hook.__weh = (...args) => {
                if (target.isUnmounted) {
                    return;
                }
                // disable tracking inside all lifecycle hooks
                // since they can potentially be called inside effects.
                pauseTracking();
                // Set currentInstance during hook invocation.
                // This assumes the hook does not synchronously trigger other hooks, which
                // can only be false when the user does something really funky.
                setCurrentInstance(target);
                const res = callWithAsyncErrorHandling(hook, target, type, args);
                unsetCurrentInstance();
                resetTracking();
                return res;
            });
        if (prepend) {
            hooks.unshift(wrappedHook);
        }
        else {
            hooks.push(wrappedHook);
        }
        return wrappedHook;
    }
    else if ((false)) {}
}
const createHook = (lifecycle) => (hook, target = currentInstance) => 
// post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
(!isInSSRComponentSetup || lifecycle === "sp" /* SERVER_PREFETCH */) &&
    injectHook(lifecycle, hook, target);
const onBeforeMount = createHook("bm" /* BEFORE_MOUNT */);
const onMounted = createHook("m" /* MOUNTED */);
const onBeforeUpdate = createHook("bu" /* BEFORE_UPDATE */);
const onUpdated = createHook("u" /* UPDATED */);
const onBeforeUnmount = createHook("bum" /* BEFORE_UNMOUNT */);
const onUnmounted = createHook("um" /* UNMOUNTED */);
const onServerPrefetch = createHook("sp" /* SERVER_PREFETCH */);
const onRenderTriggered = createHook("rtg" /* RENDER_TRIGGERED */);
const onRenderTracked = createHook("rtc" /* RENDER_TRACKED */);
function onErrorCaptured(hook, target = currentInstance) {
    injectHook("ec" /* ERROR_CAPTURED */, hook, target);
}

function createDuplicateChecker() {
    const cache = Object.create(null);
    return (type, key) => {
        if (cache[key]) {
            runtime_core_esm_bundler_warn(`${type} property "${key}" is already defined in ${cache[key]}.`);
        }
        else {
            cache[key] = type;
        }
    };
}
let shouldCacheAccess = true;
function applyOptions(instance) {
    const options = resolveMergedOptions(instance);
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    // do not cache property access on public proxy during state initialization
    shouldCacheAccess = false;
    // call beforeCreate first before accessing other options since
    // the hook may mutate resolved options (#2791)
    if (options.beforeCreate) {
        callHook(options.beforeCreate, instance, "bc" /* BEFORE_CREATE */);
    }
    const { 
    // state
    data: dataOptions, computed: computedOptions, methods, watch: watchOptions, provide: provideOptions, inject: injectOptions, 
    // lifecycle
    created, beforeMount, mounted, beforeUpdate, updated, activated, deactivated, beforeDestroy, beforeUnmount, destroyed, unmounted, render, renderTracked, renderTriggered, errorCaptured, serverPrefetch, 
    // public API
    expose, inheritAttrs, 
    // assets
    components, directives, filters } = options;
    const checkDuplicateProperties = ( false) ? undefined : null;
    if ((false)) {}
    // options initialization order (to be consistent with Vue 2):
    // - props (already done outside of this function)
    // - inject
    // - methods
    // - data (deferred since it relies on `this` access)
    // - computed
    // - watch (deferred since it relies on `this` access)
    if (injectOptions) {
        resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
    }
    if (methods) {
        for (const key in methods) {
            const methodHandler = methods[key];
            if (Object(shared_esm_bundler["q" /* isFunction */])(methodHandler)) {
                // In dev mode, we use the `createRenderContext` function to define
                // methods to the proxy target, and those are read-only but
                // reconfigurable, so it needs to be redefined here
                if ((false)) {}
                else {
                    ctx[key] = methodHandler.bind(publicThis);
                }
                if ((false)) {}
            }
            else if ((false)) {}
        }
    }
    if (dataOptions) {
        if (false) {}
        const data = dataOptions.call(publicThis, publicThis);
        if (false) {}
        if (!Object(shared_esm_bundler["w" /* isObject */])(data)) {
            ( false) && false;
        }
        else {
            instance.data = reactive(data);
            if ((false)) {}
        }
    }
    // state initialization complete at this point - start caching access
    shouldCacheAccess = true;
    if (computedOptions) {
        for (const key in computedOptions) {
            const opt = computedOptions[key];
            const get = Object(shared_esm_bundler["q" /* isFunction */])(opt)
                ? opt.bind(publicThis, publicThis)
                : Object(shared_esm_bundler["q" /* isFunction */])(opt.get)
                    ? opt.get.bind(publicThis, publicThis)
                    : shared_esm_bundler["d" /* NOOP */];
            if (false) {}
            const set = !Object(shared_esm_bundler["q" /* isFunction */])(opt) && Object(shared_esm_bundler["q" /* isFunction */])(opt.set)
                ? opt.set.bind(publicThis)
                : ( false)
                    ? undefined
                    : shared_esm_bundler["d" /* NOOP */];
            const c = runtime_core_esm_bundler_computed({
                get,
                set
            });
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: () => c.value,
                set: v => (c.value = v)
            });
            if ((false)) {}
        }
    }
    if (watchOptions) {
        for (const key in watchOptions) {
            createWatcher(watchOptions[key], ctx, publicThis, key);
        }
    }
    if (provideOptions) {
        const provides = Object(shared_esm_bundler["q" /* isFunction */])(provideOptions)
            ? provideOptions.call(publicThis)
            : provideOptions;
        Reflect.ownKeys(provides).forEach(key => {
            provide(key, provides[key]);
        });
    }
    if (created) {
        callHook(created, instance, "c" /* CREATED */);
    }
    function registerLifecycleHook(register, hook) {
        if (Object(shared_esm_bundler["o" /* isArray */])(hook)) {
            hook.forEach(_hook => register(_hook.bind(publicThis)));
        }
        else if (hook) {
            register(hook.bind(publicThis));
        }
    }
    registerLifecycleHook(onBeforeMount, beforeMount);
    registerLifecycleHook(onMounted, mounted);
    registerLifecycleHook(onBeforeUpdate, beforeUpdate);
    registerLifecycleHook(onUpdated, updated);
    registerLifecycleHook(onActivated, activated);
    registerLifecycleHook(onDeactivated, deactivated);
    registerLifecycleHook(onErrorCaptured, errorCaptured);
    registerLifecycleHook(onRenderTracked, renderTracked);
    registerLifecycleHook(onRenderTriggered, renderTriggered);
    registerLifecycleHook(onBeforeUnmount, beforeUnmount);
    registerLifecycleHook(onUnmounted, unmounted);
    registerLifecycleHook(onServerPrefetch, serverPrefetch);
    if (Object(shared_esm_bundler["o" /* isArray */])(expose)) {
        if (expose.length) {
            const exposed = instance.exposed || (instance.exposed = {});
            expose.forEach(key => {
                Object.defineProperty(exposed, key, {
                    get: () => publicThis[key],
                    set: val => (publicThis[key] = val)
                });
            });
        }
        else if (!instance.exposed) {
            instance.exposed = {};
        }
    }
    // options that are handled when creating the instance but also need to be
    // applied from mixins
    if (render && instance.render === shared_esm_bundler["d" /* NOOP */]) {
        instance.render = render;
    }
    if (inheritAttrs != null) {
        instance.inheritAttrs = inheritAttrs;
    }
    // asset options.
    if (components)
        instance.components = components;
    if (directives)
        instance.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = shared_esm_bundler["d" /* NOOP */], unwrapRef = false) {
    if (Object(shared_esm_bundler["o" /* isArray */])(injectOptions)) {
        injectOptions = normalizeInject(injectOptions);
    }
    for (const key in injectOptions) {
        const opt = injectOptions[key];
        let injected;
        if (Object(shared_esm_bundler["w" /* isObject */])(opt)) {
            if ('default' in opt) {
                injected = inject(opt.from || key, opt.default, true /* treat default function as factory */);
            }
            else {
                injected = inject(opt.from || key);
            }
        }
        else {
            injected = inject(opt);
        }
        if (isRef(injected)) {
            // TODO remove the check in 3.3
            if (unwrapRef) {
                Object.defineProperty(ctx, key, {
                    enumerable: true,
                    configurable: true,
                    get: () => injected.value,
                    set: v => (injected.value = v)
                });
            }
            else {
                if ((false)) {}
                ctx[key] = injected;
            }
        }
        else {
            ctx[key] = injected;
        }
        if ((false)) {}
    }
}
function callHook(hook, instance, type) {
    callWithAsyncErrorHandling(Object(shared_esm_bundler["o" /* isArray */])(hook)
        ? hook.map(h => h.bind(instance.proxy))
        : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
    const getter = key.includes('.')
        ? createPathGetter(publicThis, key)
        : () => publicThis[key];
    if (Object(shared_esm_bundler["E" /* isString */])(raw)) {
        const handler = ctx[raw];
        if (Object(shared_esm_bundler["q" /* isFunction */])(handler)) {
            watch(getter, handler);
        }
        else if ((false)) {}
    }
    else if (Object(shared_esm_bundler["q" /* isFunction */])(raw)) {
        watch(getter, raw.bind(publicThis));
    }
    else if (Object(shared_esm_bundler["w" /* isObject */])(raw)) {
        if (Object(shared_esm_bundler["o" /* isArray */])(raw)) {
            raw.forEach(r => createWatcher(r, ctx, publicThis, key));
        }
        else {
            const handler = Object(shared_esm_bundler["q" /* isFunction */])(raw.handler)
                ? raw.handler.bind(publicThis)
                : ctx[raw.handler];
            if (Object(shared_esm_bundler["q" /* isFunction */])(handler)) {
                watch(getter, handler, raw);
            }
            else if ((false)) {}
        }
    }
    else if ((false)) {}
}
/**
 * Resolve merged options and cache it on the component.
 * This is done only once per-component since the merging does not involve
 * instances.
 */
function resolveMergedOptions(instance) {
    const base = instance.type;
    const { mixins, extends: extendsOptions } = base;
    const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
    const cached = cache.get(base);
    let resolved;
    if (cached) {
        resolved = cached;
    }
    else if (!globalMixins.length && !mixins && !extendsOptions) {
        {
            resolved = base;
        }
    }
    else {
        resolved = {};
        if (globalMixins.length) {
            globalMixins.forEach(m => mergeOptions(resolved, m, optionMergeStrategies, true));
        }
        mergeOptions(resolved, base, optionMergeStrategies);
    }
    cache.set(base, resolved);
    return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
    const { mixins, extends: extendsOptions } = from;
    if (extendsOptions) {
        mergeOptions(to, extendsOptions, strats, true);
    }
    if (mixins) {
        mixins.forEach((m) => mergeOptions(to, m, strats, true));
    }
    for (const key in from) {
        if (asMixin && key === 'expose') {
            ( false) &&
                false;
        }
        else {
            const strat = internalOptionMergeStrats[key] || (strats && strats[key]);
            to[key] = strat ? strat(to[key], from[key]) : from[key];
        }
    }
    return to;
}
const internalOptionMergeStrats = {
    data: mergeDataFn,
    props: mergeObjectOptions,
    emits: mergeObjectOptions,
    // objects
    methods: mergeObjectOptions,
    computed: mergeObjectOptions,
    // lifecycle
    beforeCreate: mergeAsArray,
    created: mergeAsArray,
    beforeMount: mergeAsArray,
    mounted: mergeAsArray,
    beforeUpdate: mergeAsArray,
    updated: mergeAsArray,
    beforeDestroy: mergeAsArray,
    beforeUnmount: mergeAsArray,
    destroyed: mergeAsArray,
    unmounted: mergeAsArray,
    activated: mergeAsArray,
    deactivated: mergeAsArray,
    errorCaptured: mergeAsArray,
    serverPrefetch: mergeAsArray,
    // assets
    components: mergeObjectOptions,
    directives: mergeObjectOptions,
    // watch
    watch: mergeWatchOptions,
    // provide / inject
    provide: mergeDataFn,
    inject: mergeInject
};
function mergeDataFn(to, from) {
    if (!from) {
        return to;
    }
    if (!to) {
        return from;
    }
    return function mergedDataFn() {
        return (Object(shared_esm_bundler["h" /* extend */]))(Object(shared_esm_bundler["q" /* isFunction */])(to) ? to.call(this, this) : to, Object(shared_esm_bundler["q" /* isFunction */])(from) ? from.call(this, this) : from);
    };
}
function mergeInject(to, from) {
    return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
    if (Object(shared_esm_bundler["o" /* isArray */])(raw)) {
        const res = {};
        for (let i = 0; i < raw.length; i++) {
            res[raw[i]] = raw[i];
        }
        return res;
    }
    return raw;
}
function mergeAsArray(to, from) {
    return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
    return to ? Object(shared_esm_bundler["h" /* extend */])(Object(shared_esm_bundler["h" /* extend */])(Object.create(null), to), from) : from;
}
function mergeWatchOptions(to, from) {
    if (!to)
        return from;
    if (!from)
        return to;
    const merged = Object(shared_esm_bundler["h" /* extend */])(Object.create(null), to);
    for (const key in from) {
        merged[key] = mergeAsArray(to[key], from[key]);
    }
    return merged;
}

function initProps(instance, rawProps, isStateful, // result of bitwise flag comparison
isSSR = false) {
    const props = {};
    const attrs = {};
    Object(shared_esm_bundler["g" /* def */])(attrs, InternalObjectKey, 1);
    instance.propsDefaults = Object.create(null);
    setFullProps(instance, rawProps, props, attrs);
    // ensure all declared prop keys are present
    for (const key in instance.propsOptions[0]) {
        if (!(key in props)) {
            props[key] = undefined;
        }
    }
    // validation
    if ((false)) {}
    if (isStateful) {
        // stateful
        instance.props = isSSR ? props : shallowReactive(props);
    }
    else {
        if (!instance.type.props) {
            // functional w/ optional props, props === attrs
            instance.props = attrs;
        }
        else {
            // functional w/ declared props
            instance.props = props;
        }
    }
    instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const { props, attrs, vnode: { patchFlag } } = instance;
    const rawCurrentProps = toRaw(props);
    const [options] = instance.propsOptions;
    let hasAttrsChanged = false;
    if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
     true &&
        (optimized || patchFlag > 0) &&
        !(patchFlag & 16 /* FULL_PROPS */)) {
        if (patchFlag & 8 /* PROPS */) {
            // Compiler-generated props & no keys change, just set the updated
            // the props.
            const propsToUpdate = instance.vnode.dynamicProps;
            for (let i = 0; i < propsToUpdate.length; i++) {
                let key = propsToUpdate[i];
                // PROPS flag guarantees rawProps to be non-null
                const value = rawProps[key];
                if (options) {
                    // attr / props separation was done on init and will be consistent
                    // in this code path, so just check if attrs have it.
                    if (Object(shared_esm_bundler["k" /* hasOwn */])(attrs, key)) {
                        if (value !== attrs[key]) {
                            attrs[key] = value;
                            hasAttrsChanged = true;
                        }
                    }
                    else {
                        const camelizedKey = Object(shared_esm_bundler["e" /* camelize */])(key);
                        props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false /* isAbsent */);
                    }
                }
                else {
                    if (value !== attrs[key]) {
                        attrs[key] = value;
                        hasAttrsChanged = true;
                    }
                }
            }
        }
    }
    else {
        // full props update.
        if (setFullProps(instance, rawProps, props, attrs)) {
            hasAttrsChanged = true;
        }
        // in case of dynamic props, check if we need to delete keys from
        // the props object
        let kebabKey;
        for (const key in rawCurrentProps) {
            if (!rawProps ||
                // for camelCase
                (!Object(shared_esm_bundler["k" /* hasOwn */])(rawProps, key) &&
                    // it's possible the original props was passed in as kebab-case
                    // and converted to camelCase (#955)
                    ((kebabKey = Object(shared_esm_bundler["l" /* hyphenate */])(key)) === key || !Object(shared_esm_bundler["k" /* hasOwn */])(rawProps, kebabKey)))) {
                if (options) {
                    if (rawPrevProps &&
                        // for camelCase
                        (rawPrevProps[key] !== undefined ||
                            // for kebab-case
                            rawPrevProps[kebabKey] !== undefined)) {
                        props[key] = resolvePropValue(options, rawCurrentProps, key, undefined, instance, true /* isAbsent */);
                    }
                }
                else {
                    delete props[key];
                }
            }
        }
        // in the case of functional component w/o props declaration, props and
        // attrs point to the same object so it should already have been updated.
        if (attrs !== rawCurrentProps) {
            for (const key in attrs) {
                if (!rawProps ||
                    (!Object(shared_esm_bundler["k" /* hasOwn */])(rawProps, key) &&
                        (!false ))) {
                    delete attrs[key];
                    hasAttrsChanged = true;
                }
            }
        }
    }
    // trigger updates for $attrs in case it's used in component slots
    if (hasAttrsChanged) {
        trigger(instance, "set" /* SET */, '$attrs');
    }
    if ((false)) {}
}
function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    let hasAttrsChanged = false;
    let rawCastValues;
    if (rawProps) {
        for (let key in rawProps) {
            // key, ref are reserved and never passed down
            if (Object(shared_esm_bundler["A" /* isReservedProp */])(key)) {
                continue;
            }
            const value = rawProps[key];
            // prop option names are camelized during normalization, so to support
            // kebab -> camel conversion here we need to camelize the key.
            let camelKey;
            if (options && Object(shared_esm_bundler["k" /* hasOwn */])(options, (camelKey = Object(shared_esm_bundler["e" /* camelize */])(key)))) {
                if (!needCastKeys || !needCastKeys.includes(camelKey)) {
                    props[camelKey] = value;
                }
                else {
                    (rawCastValues || (rawCastValues = {}))[camelKey] = value;
                }
            }
            else if (!isEmitListener(instance.emitsOptions, key)) {
                if (!(key in attrs) || value !== attrs[key]) {
                    attrs[key] = value;
                    hasAttrsChanged = true;
                }
            }
        }
    }
    if (needCastKeys) {
        const rawCurrentProps = toRaw(props);
        const castValues = rawCastValues || shared_esm_bundler["b" /* EMPTY_OBJ */];
        for (let i = 0; i < needCastKeys.length; i++) {
            const key = needCastKeys[i];
            props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !Object(shared_esm_bundler["k" /* hasOwn */])(castValues, key));
        }
    }
    return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
    const opt = options[key];
    if (opt != null) {
        const hasDefault = Object(shared_esm_bundler["k" /* hasOwn */])(opt, 'default');
        // default values
        if (hasDefault && value === undefined) {
            const defaultValue = opt.default;
            if (opt.type !== Function && Object(shared_esm_bundler["q" /* isFunction */])(defaultValue)) {
                const { propsDefaults } = instance;
                if (key in propsDefaults) {
                    value = propsDefaults[key];
                }
                else {
                    setCurrentInstance(instance);
                    value = propsDefaults[key] = defaultValue.call(null, props);
                    unsetCurrentInstance();
                }
            }
            else {
                value = defaultValue;
            }
        }
        // boolean casting
        if (opt[0 /* shouldCast */]) {
            if (isAbsent && !hasDefault) {
                value = false;
            }
            else if (opt[1 /* shouldCastTrue */] &&
                (value === '' || value === Object(shared_esm_bundler["l" /* hyphenate */])(key))) {
                value = true;
            }
        }
    }
    return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.propsCache;
    const cached = cache.get(comp);
    if (cached) {
        return cached;
    }
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    // apply mixin/extends props
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !Object(shared_esm_bundler["q" /* isFunction */])(comp)) {
        const extendProps = (raw) => {
            hasExtends = true;
            const [props, keys] = normalizePropsOptions(raw, appContext, true);
            Object(shared_esm_bundler["h" /* extend */])(normalized, props);
            if (keys)
                needCastKeys.push(...keys);
        };
        if (!asMixin && appContext.mixins.length) {
            appContext.mixins.forEach(extendProps);
        }
        if (comp.extends) {
            extendProps(comp.extends);
        }
        if (comp.mixins) {
            comp.mixins.forEach(extendProps);
        }
    }
    if (!raw && !hasExtends) {
        cache.set(comp, shared_esm_bundler["a" /* EMPTY_ARR */]);
        return shared_esm_bundler["a" /* EMPTY_ARR */];
    }
    if (Object(shared_esm_bundler["o" /* isArray */])(raw)) {
        for (let i = 0; i < raw.length; i++) {
            if (false) {}
            const normalizedKey = Object(shared_esm_bundler["e" /* camelize */])(raw[i]);
            if (validatePropName(normalizedKey)) {
                normalized[normalizedKey] = shared_esm_bundler["b" /* EMPTY_OBJ */];
            }
        }
    }
    else if (raw) {
        if (false) {}
        for (const key in raw) {
            const normalizedKey = Object(shared_esm_bundler["e" /* camelize */])(key);
            if (validatePropName(normalizedKey)) {
                const opt = raw[key];
                const prop = (normalized[normalizedKey] =
                    Object(shared_esm_bundler["o" /* isArray */])(opt) || Object(shared_esm_bundler["q" /* isFunction */])(opt) ? { type: opt } : opt);
                if (prop) {
                    const booleanIndex = getTypeIndex(Boolean, prop.type);
                    const stringIndex = getTypeIndex(String, prop.type);
                    prop[0 /* shouldCast */] = booleanIndex > -1;
                    prop[1 /* shouldCastTrue */] =
                        stringIndex < 0 || booleanIndex < stringIndex;
                    // if the prop needs boolean casting or default value
                    if (booleanIndex > -1 || Object(shared_esm_bundler["k" /* hasOwn */])(prop, 'default')) {
                        needCastKeys.push(normalizedKey);
                    }
                }
            }
        }
    }
    const res = [normalized, needCastKeys];
    cache.set(comp, res);
    return res;
}
function validatePropName(key) {
    if (key[0] !== '$') {
        return true;
    }
    else if ((false)) {}
    return false;
}
// use function string name to check type constructors
// so that it works across vms / iframes.
function getType(ctor) {
    const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : ctor === null ? 'null' : '';
}
function isSameType(a, b) {
    return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
    if (Object(shared_esm_bundler["o" /* isArray */])(expectedTypes)) {
        return expectedTypes.findIndex(t => isSameType(t, type));
    }
    else if (Object(shared_esm_bundler["q" /* isFunction */])(expectedTypes)) {
        return isSameType(expectedTypes, type) ? 0 : -1;
    }
    return -1;
}
/**
 * dev only
 */
function validateProps(rawProps, props, instance) {
    const resolvedValues = toRaw(props);
    const options = instance.propsOptions[0];
    for (const key in options) {
        let opt = options[key];
        if (opt == null)
            continue;
        validateProp(key, resolvedValues[key], opt, !Object(shared_esm_bundler["k" /* hasOwn */])(rawProps, key) && !Object(shared_esm_bundler["k" /* hasOwn */])(rawProps, Object(shared_esm_bundler["l" /* hyphenate */])(key)));
    }
}
/**
 * dev only
 */
function validateProp(name, value, prop, isAbsent) {
    const { type, required, validator } = prop;
    // required!
    if (required && isAbsent) {
        runtime_core_esm_bundler_warn('Missing required prop: "' + name + '"');
        return;
    }
    // missing but optional
    if (value == null && !prop.required) {
        return;
    }
    // type check
    if (type != null && type !== true) {
        let isValid = false;
        const types = Object(shared_esm_bundler["o" /* isArray */])(type) ? type : [type];
        const expectedTypes = [];
        // value is valid as long as one of the specified types match
        for (let i = 0; i < types.length && !isValid; i++) {
            const { valid, expectedType } = assertType(value, types[i]);
            expectedTypes.push(expectedType || '');
            isValid = valid;
        }
        if (!isValid) {
            runtime_core_esm_bundler_warn(getInvalidTypeMessage(name, value, expectedTypes));
            return;
        }
    }
    // custom validator
    if (validator && !validator(value)) {
        runtime_core_esm_bundler_warn('Invalid prop: custom validator check failed for prop "' + name + '".');
    }
}
const isSimpleType = /*#__PURE__*/ Object(shared_esm_bundler["I" /* makeMap */])('String,Number,Boolean,Function,Symbol,BigInt');
/**
 * dev only
 */
function assertType(value, type) {
    let valid;
    const expectedType = getType(type);
    if (isSimpleType(expectedType)) {
        const t = typeof value;
        valid = t === expectedType.toLowerCase();
        // for primitive wrapper objects
        if (!valid && t === 'object') {
            valid = value instanceof type;
        }
    }
    else if (expectedType === 'Object') {
        valid = Object(shared_esm_bundler["w" /* isObject */])(value);
    }
    else if (expectedType === 'Array') {
        valid = Object(shared_esm_bundler["o" /* isArray */])(value);
    }
    else if (expectedType === 'null') {
        valid = value === null;
    }
    else {
        valid = value instanceof type;
    }
    return {
        valid,
        expectedType
    };
}
/**
 * dev only
 */
function getInvalidTypeMessage(name, value, expectedTypes) {
    let message = `Invalid prop: type check failed for prop "${name}".` +
        ` Expected ${expectedTypes.map(shared_esm_bundler["f" /* capitalize */]).join(' | ')}`;
    const expectedType = expectedTypes[0];
    const receivedType = Object(shared_esm_bundler["P" /* toRawType */])(value);
    const expectedValue = styleValue(value, expectedType);
    const receivedValue = styleValue(value, receivedType);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 &&
        isExplicable(expectedType) &&
        !runtime_core_esm_bundler_isBoolean(expectedType, receivedType)) {
        message += ` with value ${expectedValue}`;
    }
    message += `, got ${receivedType} `;
    // check if we need to specify received value
    if (isExplicable(receivedType)) {
        message += `with value ${receivedValue}.`;
    }
    return message;
}
/**
 * dev only
 */
function styleValue(value, type) {
    if (type === 'String') {
        return `"${value}"`;
    }
    else if (type === 'Number') {
        return `${Number(value)}`;
    }
    else {
        return `${value}`;
    }
}
/**
 * dev only
 */
function isExplicable(type) {
    const explicitTypes = ['string', 'number', 'boolean'];
    return explicitTypes.some(elem => type.toLowerCase() === elem);
}
/**
 * dev only
 */
function runtime_core_esm_bundler_isBoolean(...args) {
    return args.some(elem => elem.toLowerCase() === 'boolean');
}

const isInternalKey = (key) => key[0] === '_' || key === '$stable';
const normalizeSlotValue = (value) => Object(shared_esm_bundler["o" /* isArray */])(value)
    ? value.map(normalizeVNode)
    : [normalizeVNode(value)];
const normalizeSlot = (key, rawSlot, ctx) => {
    const normalized = withCtx((...args) => {
        if (false) {}
        return normalizeSlotValue(rawSlot(...args));
    }, ctx);
    normalized._c = false;
    return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
    const ctx = rawSlots._ctx;
    for (const key in rawSlots) {
        if (isInternalKey(key))
            continue;
        const value = rawSlots[key];
        if (Object(shared_esm_bundler["q" /* isFunction */])(value)) {
            slots[key] = normalizeSlot(key, value, ctx);
        }
        else if (value != null) {
            if (false) {}
            const normalized = normalizeSlotValue(value);
            slots[key] = () => normalized;
        }
    }
};
const normalizeVNodeSlots = (instance, children) => {
    if (false) {}
    const normalized = normalizeSlotValue(children);
    instance.slots.default = () => normalized;
};
const initSlots = (instance, children) => {
    if (instance.vnode.shapeFlag & 32 /* SLOTS_CHILDREN */) {
        const type = children._;
        if (type) {
            // users can get the shallow readonly version of the slots object through `this.$slots`,
            // we should avoid the proxy object polluting the slots of the internal instance
            instance.slots = toRaw(children);
            // make compiler marker non-enumerable
            Object(shared_esm_bundler["g" /* def */])(children, '_', type);
        }
        else {
            normalizeObjectSlots(children, (instance.slots = {}));
        }
    }
    else {
        instance.slots = {};
        if (children) {
            normalizeVNodeSlots(instance, children);
        }
    }
    Object(shared_esm_bundler["g" /* def */])(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children, optimized) => {
    const { vnode, slots } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = shared_esm_bundler["b" /* EMPTY_OBJ */];
    if (vnode.shapeFlag & 32 /* SLOTS_CHILDREN */) {
        const type = children._;
        if (type) {
            // compiled slots.
            if (false) {}
            else if (optimized && type === 1 /* STABLE */) {
                // compiled AND stable.
                // no need to update, and skip stale slots removal.
                needDeletionCheck = false;
            }
            else {
                // compiled but dynamic (v-if/v-for on slots) - update slots, but skip
                // normalization.
                Object(shared_esm_bundler["h" /* extend */])(slots, children);
                // #2893
                // when rendering the optimized slots by manually written render function,
                // we need to delete the `slots._` flag if necessary to make subsequent updates reliable,
                // i.e. let the `renderSlot` create the bailed Fragment
                if (!optimized && type === 1 /* STABLE */) {
                    delete slots._;
                }
            }
        }
        else {
            needDeletionCheck = !children.$stable;
            normalizeObjectSlots(children, slots);
        }
        deletionComparisonTarget = children;
    }
    else if (children) {
        // non slot object children (direct value) passed to a component
        normalizeVNodeSlots(instance, children);
        deletionComparisonTarget = { default: 1 };
    }
    // delete stale slots
    if (needDeletionCheck) {
        for (const key in slots) {
            if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
                delete slots[key];
            }
        }
    }
};

/**
Runtime helper for applying directives to a vnode. Example usage:

const comp = resolveComponent('comp')
const foo = resolveDirective('foo')
const bar = resolveDirective('bar')

return withDirectives(h(comp), [
  [foo, this.x],
  [bar, this.y]
])
*/
function validateDirectiveName(name) {
    if (Object(shared_esm_bundler["p" /* isBuiltInDirective */])(name)) {
        runtime_core_esm_bundler_warn('Do not use built-in directive ids as custom directive id: ' + name);
    }
}
/**
 * Adds directives to a VNode.
 */
function withDirectives(vnode, directives) {
    const internalInstance = currentRenderingInstance;
    if (internalInstance === null) {
        ( false) && false;
        return vnode;
    }
    const instance = internalInstance.proxy;
    const bindings = vnode.dirs || (vnode.dirs = []);
    for (let i = 0; i < directives.length; i++) {
        let [dir, value, arg, modifiers = shared_esm_bundler["b" /* EMPTY_OBJ */]] = directives[i];
        if (Object(shared_esm_bundler["q" /* isFunction */])(dir)) {
            dir = {
                mounted: dir,
                updated: dir
            };
        }
        if (dir.deep) {
            traverse(value);
        }
        bindings.push({
            dir,
            instance,
            value,
            oldValue: void 0,
            arg,
            modifiers
        });
    }
    return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for (let i = 0; i < bindings.length; i++) {
        const binding = bindings[i];
        if (oldBindings) {
            binding.oldValue = oldBindings[i].value;
        }
        let hook = binding.dir[name];
        if (hook) {
            // disable tracking inside all lifecycle hooks
            // since they can potentially be called inside effects.
            pauseTracking();
            callWithAsyncErrorHandling(hook, instance, 8 /* DIRECTIVE_HOOK */, [
                vnode.el,
                binding,
                vnode,
                prevVNode
            ]);
            resetTracking();
        }
    }
}

function createAppContext() {
    return {
        app: null,
        config: {
            isNativeTag: shared_esm_bundler["c" /* NO */],
            performance: false,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: undefined,
            warnHandler: undefined,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap()
    };
}
let uid = 0;
function createAppAPI(render, hydrate) {
    return function createApp(rootComponent, rootProps = null) {
        if (rootProps != null && !Object(shared_esm_bundler["w" /* isObject */])(rootProps)) {
            ( false) && false;
            rootProps = null;
        }
        const context = createAppContext();
        const installedPlugins = new Set();
        let isMounted = false;
        const app = (context.app = {
            _uid: uid++,
            _component: rootComponent,
            _props: rootProps,
            _container: null,
            _context: context,
            _instance: null,
            version,
            get config() {
                return context.config;
            },
            set config(v) {
                if ((false)) {}
            },
            use(plugin, ...options) {
                if (installedPlugins.has(plugin)) {
                    ( false) && false;
                }
                else if (plugin && Object(shared_esm_bundler["q" /* isFunction */])(plugin.install)) {
                    installedPlugins.add(plugin);
                    plugin.install(app, ...options);
                }
                else if (Object(shared_esm_bundler["q" /* isFunction */])(plugin)) {
                    installedPlugins.add(plugin);
                    plugin(app, ...options);
                }
                else if ((false)) {}
                return app;
            },
            mixin(mixin) {
                if (__VUE_OPTIONS_API__) {
                    if (!context.mixins.includes(mixin)) {
                        context.mixins.push(mixin);
                    }
                    else if ((false)) {}
                }
                else if ((false)) {}
                return app;
            },
            component(name, component) {
                if ((false)) {}
                if (!component) {
                    return context.components[name];
                }
                if (false) {}
                context.components[name] = component;
                return app;
            },
            directive(name, directive) {
                if ((false)) {}
                if (!directive) {
                    return context.directives[name];
                }
                if (false) {}
                context.directives[name] = directive;
                return app;
            },
            mount(rootContainer, isHydrate, isSVG) {
                if (!isMounted) {
                    const vnode = createVNode(rootComponent, rootProps);
                    // store app context on the root VNode.
                    // this will be set on the root instance on initial mount.
                    vnode.appContext = context;
                    // HMR root reload
                    if ((false)) {}
                    if (isHydrate && hydrate) {
                        hydrate(vnode, rootContainer);
                    }
                    else {
                        render(vnode, rootContainer, isSVG);
                    }
                    isMounted = true;
                    app._container = rootContainer;
                    rootContainer.__vue_app__ = app;
                    if (( false) || __VUE_PROD_DEVTOOLS__) {
                        app._instance = vnode.component;
                        devtoolsInitApp(app, version);
                    }
                    return getExposeProxy(vnode.component) || vnode.component.proxy;
                }
                else if ((false)) {}
            },
            unmount() {
                if (isMounted) {
                    render(null, app._container);
                    if (( false) || __VUE_PROD_DEVTOOLS__) {
                        app._instance = null;
                        devtoolsUnmountApp(app);
                    }
                    delete app._container.__vue_app__;
                }
                else if ((false)) {}
            },
            provide(key, value) {
                if (false) {}
                // TypeScript doesn't allow symbols as index type
                // https://github.com/Microsoft/TypeScript/issues/24587
                context.provides[key] = value;
                return app;
            }
        });
        return app;
    };
}

/**
 * Function for handling a template ref
 */
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
    if (Object(shared_esm_bundler["o" /* isArray */])(rawRef)) {
        rawRef.forEach((r, i) => setRef(r, oldRawRef && (Object(shared_esm_bundler["o" /* isArray */])(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
        return;
    }
    if (isAsyncWrapper(vnode) && !isUnmount) {
        // when mounting async components, nothing needs to be done,
        // because the template ref is forwarded to inner component
        return;
    }
    const refValue = vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */
        ? getExposeProxy(vnode.component) || vnode.component.proxy
        : vnode.el;
    const value = isUnmount ? null : refValue;
    const { i: owner, r: ref } = rawRef;
    if (false) {}
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === shared_esm_bundler["b" /* EMPTY_OBJ */] ? (owner.refs = {}) : owner.refs;
    const setupState = owner.setupState;
    // dynamic ref changed. unset old ref
    if (oldRef != null && oldRef !== ref) {
        if (Object(shared_esm_bundler["E" /* isString */])(oldRef)) {
            refs[oldRef] = null;
            if (Object(shared_esm_bundler["k" /* hasOwn */])(setupState, oldRef)) {
                setupState[oldRef] = null;
            }
        }
        else if (isRef(oldRef)) {
            oldRef.value = null;
        }
    }
    if (Object(shared_esm_bundler["q" /* isFunction */])(ref)) {
        callWithErrorHandling(ref, owner, 12 /* FUNCTION_REF */, [value, refs]);
    }
    else {
        const _isString = Object(shared_esm_bundler["E" /* isString */])(ref);
        const _isRef = isRef(ref);
        if (_isString || _isRef) {
            const doSet = () => {
                if (rawRef.f) {
                    const existing = _isString ? refs[ref] : ref.value;
                    if (isUnmount) {
                        Object(shared_esm_bundler["o" /* isArray */])(existing) && Object(shared_esm_bundler["L" /* remove */])(existing, refValue);
                    }
                    else {
                        if (!Object(shared_esm_bundler["o" /* isArray */])(existing)) {
                            if (_isString) {
                                refs[ref] = [refValue];
                            }
                            else {
                                ref.value = [refValue];
                                if (rawRef.k)
                                    refs[rawRef.k] = ref.value;
                            }
                        }
                        else if (!existing.includes(refValue)) {
                            existing.push(refValue);
                        }
                    }
                }
                else if (_isString) {
                    refs[ref] = value;
                    if (Object(shared_esm_bundler["k" /* hasOwn */])(setupState, ref)) {
                        setupState[ref] = value;
                    }
                }
                else if (isRef(ref)) {
                    ref.value = value;
                    if (rawRef.k)
                        refs[rawRef.k] = value;
                }
                else if ((false)) {}
            };
            if (value) {
                doSet.id = -1;
                queuePostRenderEffect(doSet, parentSuspense);
            }
            else {
                doSet();
            }
        }
        else if ((false)) {}
    }
}

let hasMismatch = false;
const isSVGContainer = (container) => /svg/.test(container.namespaceURI) && container.tagName !== 'foreignObject';
const isComment = (node) => node.nodeType === 8 /* COMMENT */;
// Note: hydration is DOM-specific
// But we have to place it in core due to tight coupling with core - splitting
// it out creates a ton of unnecessary complexity.
// Hydration also depends on some renderer internal logic which needs to be
// passed in via arguments.
function createHydrationFunctions(rendererInternals) {
    const { mt: mountComponent, p: patch, o: { patchProp, nextSibling, parentNode, remove, insert, createComment } } = rendererInternals;
    const hydrate = (vnode, container) => {
        if (!container.hasChildNodes()) {
            ( false) &&
                false;
            patch(null, vnode, container);
            flushPostFlushCbs();
            return;
        }
        hasMismatch = false;
        hydrateNode(container.firstChild, vnode, null, null, null);
        flushPostFlushCbs();
        if (hasMismatch && !false) {
            // this error should show up in production
            console.error(`Hydration completed but contains mismatches.`);
        }
    };
    const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
        const isFragmentStart = isComment(node) && node.data === '[';
        const onMismatch = () => handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
        const { type, ref, shapeFlag } = vnode;
        const domType = node.nodeType;
        vnode.el = node;
        let nextNode = null;
        switch (type) {
            case Text:
                if (domType !== 3 /* TEXT */) {
                    nextNode = onMismatch();
                }
                else {
                    if (node.data !== vnode.children) {
                        hasMismatch = true;
                        ( false) &&
                            false;
                        node.data = vnode.children;
                    }
                    nextNode = nextSibling(node);
                }
                break;
            case runtime_core_esm_bundler_Comment:
                if (domType !== 8 /* COMMENT */ || isFragmentStart) {
                    nextNode = onMismatch();
                }
                else {
                    nextNode = nextSibling(node);
                }
                break;
            case Static:
                if (domType !== 1 /* ELEMENT */) {
                    nextNode = onMismatch();
                }
                else {
                    // determine anchor, adopt content
                    nextNode = node;
                    // if the static vnode has its content stripped during build,
                    // adopt it from the server-rendered HTML.
                    const needToAdoptContent = !vnode.children.length;
                    for (let i = 0; i < vnode.staticCount; i++) {
                        if (needToAdoptContent)
                            vnode.children += nextNode.outerHTML;
                        if (i === vnode.staticCount - 1) {
                            vnode.anchor = nextNode;
                        }
                        nextNode = nextSibling(nextNode);
                    }
                    return nextNode;
                }
                break;
            case Fragment:
                if (!isFragmentStart) {
                    nextNode = onMismatch();
                }
                else {
                    nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                }
                break;
            default:
                if (shapeFlag & 1 /* ELEMENT */) {
                    if (domType !== 1 /* ELEMENT */ ||
                        vnode.type.toLowerCase() !==
                            node.tagName.toLowerCase()) {
                        nextNode = onMismatch();
                    }
                    else {
                        nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                    }
                }
                else if (shapeFlag & 6 /* COMPONENT */) {
                    // when setting up the render effect, if the initial vnode already
                    // has .el set, the component will perform hydration instead of mount
                    // on its sub-tree.
                    vnode.slotScopeIds = slotScopeIds;
                    const container = parentNode(node);
                    mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized);
                    // component may be async, so in the case of fragments we cannot rely
                    // on component's rendered output to determine the end of the fragment
                    // instead, we do a lookahead to find the end anchor node.
                    nextNode = isFragmentStart
                        ? locateClosingAsyncAnchor(node)
                        : nextSibling(node);
                    // #3787
                    // if component is async, it may get moved / unmounted before its
                    // inner component is loaded, so we need to give it a placeholder
                    // vnode that matches its adopted DOM.
                    if (isAsyncWrapper(vnode)) {
                        let subTree;
                        if (isFragmentStart) {
                            subTree = createVNode(Fragment);
                            subTree.anchor = nextNode
                                ? nextNode.previousSibling
                                : container.lastChild;
                        }
                        else {
                            subTree =
                                node.nodeType === 3 ? createTextVNode('') : createVNode('div');
                        }
                        subTree.el = node;
                        vnode.component.subTree = subTree;
                    }
                }
                else if (shapeFlag & 64 /* TELEPORT */) {
                    if (domType !== 8 /* COMMENT */) {
                        nextNode = onMismatch();
                    }
                    else {
                        nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
                    }
                }
                else if (shapeFlag & 128 /* SUSPENSE */) {
                    nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
                }
                else if ((false)) {}
        }
        if (ref != null) {
            setRef(ref, null, parentSuspense, vnode);
        }
        return nextNode;
    };
    const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
        optimized = optimized || !!vnode.dynamicChildren;
        const { type, props, patchFlag, shapeFlag, dirs } = vnode;
        // #4006 for form elements with non-string v-model value bindings
        // e.g. <option :value="obj">, <input type="checkbox" :true-value="1">
        const forcePatchValue = (type === 'input' && dirs) || type === 'option';
        // skip props & children if this is hoisted static nodes
        // #5405 in dev, always hydrate children for HMR
        if (( false) || forcePatchValue || patchFlag !== -1 /* HOISTED */) {
            if (dirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'created');
            }
            // props
            if (props) {
                if (forcePatchValue ||
                    !optimized ||
                    patchFlag & (16 /* FULL_PROPS */ | 32 /* HYDRATE_EVENTS */)) {
                    for (const key in props) {
                        if ((forcePatchValue && key.endsWith('value')) ||
                            (Object(shared_esm_bundler["x" /* isOn */])(key) && !Object(shared_esm_bundler["A" /* isReservedProp */])(key))) {
                            patchProp(el, key, null, props[key], false, undefined, parentComponent);
                        }
                    }
                }
                else if (props.onClick) {
                    // Fast path for click listeners (which is most often) to avoid
                    // iterating through props.
                    patchProp(el, 'onClick', null, props.onClick, false, undefined, parentComponent);
                }
            }
            // vnode / directive hooks
            let vnodeHooks;
            if ((vnodeHooks = props && props.onVnodeBeforeMount)) {
                invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            }
            if (dirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
            }
            if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
                queueEffectWithSuspense(() => {
                    vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
                    dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
                }, parentSuspense);
            }
            // children
            if (shapeFlag & 16 /* ARRAY_CHILDREN */ &&
                // skip if element has innerHTML / textContent
                !(props && (props.innerHTML || props.textContent))) {
                let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
                let hasWarned = false;
                while (next) {
                    hasMismatch = true;
                    if (false) {}
                    // The SSRed DOM contains more nodes than it should. Remove them.
                    const cur = next;
                    next = next.nextSibling;
                    remove(cur);
                }
            }
            else if (shapeFlag & 8 /* TEXT_CHILDREN */) {
                if (el.textContent !== vnode.children) {
                    hasMismatch = true;
                    ( false) &&
                        false;
                    el.textContent = vnode.children;
                }
            }
        }
        return el.nextSibling;
    };
    const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
        optimized = optimized || !!parentVNode.dynamicChildren;
        const children = parentVNode.children;
        const l = children.length;
        let hasWarned = false;
        for (let i = 0; i < l; i++) {
            const vnode = optimized
                ? children[i]
                : (children[i] = normalizeVNode(children[i]));
            if (node) {
                node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
            }
            else if (vnode.type === Text && !vnode.children) {
                continue;
            }
            else {
                hasMismatch = true;
                if (false) {}
                // the SSRed DOM didn't contain enough nodes. Mount the missing ones.
                patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
            }
        }
        return node;
    };
    const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
        const { slotScopeIds: fragmentSlotScopeIds } = vnode;
        if (fragmentSlotScopeIds) {
            slotScopeIds = slotScopeIds
                ? slotScopeIds.concat(fragmentSlotScopeIds)
                : fragmentSlotScopeIds;
        }
        const container = parentNode(node);
        const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
        if (next && isComment(next) && next.data === ']') {
            return nextSibling((vnode.anchor = next));
        }
        else {
            // fragment didn't hydrate successfully, since we didn't get a end anchor
            // back. This should have led to node/children mismatch warnings.
            hasMismatch = true;
            // since the anchor is missing, we need to create one and insert it
            insert((vnode.anchor = createComment(`]`)), container, next);
            return next;
        }
    };
    const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
        hasMismatch = true;
        ( false) &&
            false;
        vnode.el = null;
        if (isFragment) {
            // remove excessive fragment nodes
            const end = locateClosingAsyncAnchor(node);
            while (true) {
                const next = nextSibling(node);
                if (next && next !== end) {
                    remove(next);
                }
                else {
                    break;
                }
            }
        }
        const next = nextSibling(node);
        const container = parentNode(node);
        remove(node);
        patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
        return next;
    };
    const locateClosingAsyncAnchor = (node) => {
        let match = 0;
        while (node) {
            node = nextSibling(node);
            if (node && isComment(node)) {
                if (node.data === '[')
                    match++;
                if (node.data === ']') {
                    if (match === 0) {
                        return nextSibling(node);
                    }
                    else {
                        match--;
                    }
                }
            }
        }
        return node;
    };
    return [hydrate, hydrateNode];
}

/* eslint-disable no-restricted-globals */
let supported;
let perf;
function startMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
        perf.mark(`vue-${type}-${instance.uid}`);
    }
    if (( false) || __VUE_PROD_DEVTOOLS__) {
        devtoolsPerfStart(instance, type, supported ? perf.now() : Date.now());
    }
}
function endMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
        const startTag = `vue-${type}-${instance.uid}`;
        const endTag = startTag + `:end`;
        perf.mark(endTag);
        perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
    }
    if (( false) || __VUE_PROD_DEVTOOLS__) {
        devtoolsPerfEnd(instance, type, supported ? perf.now() : Date.now());
    }
}
function isSupported() {
    if (supported !== undefined) {
        return supported;
    }
    if (typeof window !== 'undefined' && window.performance) {
        supported = true;
        perf = window.performance;
    }
    else {
        supported = false;
    }
    return supported;
}

/**
 * This is only called in esm-bundler builds.
 * It is called when a renderer is created, in `baseCreateRenderer` so that
 * importing runtime-core is side-effects free.
 *
 * istanbul-ignore-next
 */
function initFeatureFlags() {
    const needWarn = [];
    if (typeof __VUE_OPTIONS_API__ !== 'boolean') {
        ( false) && false;
        Object(shared_esm_bundler["i" /* getGlobalThis */])().__VUE_OPTIONS_API__ = true;
    }
    if (typeof __VUE_PROD_DEVTOOLS__ !== 'boolean') {
        ( false) && false;
        Object(shared_esm_bundler["i" /* getGlobalThis */])().__VUE_PROD_DEVTOOLS__ = false;
    }
    if (false) {}
}

const queuePostRenderEffect = queueEffectWithSuspense
    ;
/**
 * The createRenderer function accepts two generic arguments:
 * HostNode and HostElement, corresponding to Node and Element types in the
 * host environment. For example, for runtime-dom, HostNode would be the DOM
 * `Node` interface and HostElement would be the DOM `Element` interface.
 *
 * Custom renderers can pass in the platform specific types like this:
 *
 * ``` js
 * const { render, createApp } = createRenderer<Node, Element>({
 *   patchProp,
 *   ...nodeOps
 * })
 * ```
 */
function createRenderer(options) {
    return baseCreateRenderer(options);
}
// Separate API for creating hydration-enabled renderer.
// Hydration logic is only used when calling this function, making it
// tree-shakable.
function createHydrationRenderer(options) {
    return baseCreateRenderer(options, createHydrationFunctions);
}
// implementation
function baseCreateRenderer(options, createHydrationFns) {
    // compile-time feature flags check
    {
        initFeatureFlags();
    }
    const target = Object(shared_esm_bundler["i" /* getGlobalThis */])();
    target.__VUE__ = true;
    if (( false) || __VUE_PROD_DEVTOOLS__) {
        setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
    }
    const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = shared_esm_bundler["d" /* NOOP */], cloneNode: hostCloneNode, insertStaticContent: hostInsertStaticContent } = options;
    // Note: functions inside this closure should use `const xxx = () => {}`
    // style in order to prevent being inlined by minifiers.
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized =  false ? undefined : !!n2.dynamicChildren) => {
        if (n1 === n2) {
            return;
        }
        // patching & not same type, unmount old tree
        if (n1 && !isSameVNodeType(n1, n2)) {
            anchor = getNextHostNode(n1);
            unmount(n1, parentComponent, parentSuspense, true);
            n1 = null;
        }
        if (n2.patchFlag === -2 /* BAIL */) {
            optimized = false;
            n2.dynamicChildren = null;
        }
        const { type, ref, shapeFlag } = n2;
        switch (type) {
            case Text:
                processText(n1, n2, container, anchor);
                break;
            case runtime_core_esm_bundler_Comment:
                processCommentNode(n1, n2, container, anchor);
                break;
            case Static:
                if (n1 == null) {
                    mountStaticNode(n2, container, anchor, isSVG);
                }
                else if ((false)) {}
                break;
            case Fragment:
                processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                break;
            default:
                if (shapeFlag & 1 /* ELEMENT */) {
                    processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
                else if (shapeFlag & 6 /* COMPONENT */) {
                    processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
                else if (shapeFlag & 64 /* TELEPORT */) {
                    type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
                }
                else if (shapeFlag & 128 /* SUSPENSE */) {
                    type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
                }
                else if ((false)) {}
        }
        // set ref
        if (ref != null && parentComponent) {
            setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
        }
    };
    const processText = (n1, n2, container, anchor) => {
        if (n1 == null) {
            hostInsert((n2.el = hostCreateText(n2.children)), container, anchor);
        }
        else {
            const el = (n2.el = n1.el);
            if (n2.children !== n1.children) {
                hostSetText(el, n2.children);
            }
        }
    };
    const processCommentNode = (n1, n2, container, anchor) => {
        if (n1 == null) {
            hostInsert((n2.el = hostCreateComment(n2.children || '')), container, anchor);
        }
        else {
            // there's no support for dynamic comments
            n2.el = n1.el;
        }
    };
    const mountStaticNode = (n2, container, anchor, isSVG) => {
        [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
    };
    /**
     * Dev / HMR only
     */
    const patchStaticNode = (n1, n2, container, isSVG) => {
        // static nodes are only patched during dev for HMR
        if (n2.children !== n1.children) {
            const anchor = hostNextSibling(n1.anchor);
            // remove existing
            removeStaticNode(n1);
            [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
        }
        else {
            n2.el = n1.el;
            n2.anchor = n1.anchor;
        }
    };
    const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
        let next;
        while (el && el !== anchor) {
            next = hostNextSibling(el);
            hostInsert(el, container, nextSibling);
            el = next;
        }
        hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el, anchor }) => {
        let next;
        while (el && el !== anchor) {
            next = hostNextSibling(el);
            hostRemove(el);
            el = next;
        }
        hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        isSVG = isSVG || n2.type === 'svg';
        if (n1 == null) {
            mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
        else {
            patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        let el;
        let vnodeHook;
        const { type, props, shapeFlag, transition, patchFlag, dirs } = vnode;
        if ( true &&
            vnode.el &&
            hostCloneNode !== undefined &&
            patchFlag === -1 /* HOISTED */) {
            // If a vnode has non-null el, it means it's being reused.
            // Only static vnodes can be reused, so its mounted DOM nodes should be
            // exactly the same, and we can simply do a clone here.
            // only do this in production since cloned trees cannot be HMR updated.
            el = vnode.el = hostCloneNode(vnode.el);
        }
        else {
            el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
            // mount children first, since some props may rely on child content
            // being already rendered, e.g. `<select value>`
            if (shapeFlag & 8 /* TEXT_CHILDREN */) {
                hostSetElementText(el, vnode.children);
            }
            else if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== 'foreignObject', slotScopeIds, optimized);
            }
            if (dirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'created');
            }
            // props
            if (props) {
                for (const key in props) {
                    if (key !== 'value' && !Object(shared_esm_bundler["A" /* isReservedProp */])(key)) {
                        hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                    }
                }
                /**
                 * Special case for setting value on DOM elements:
                 * - it can be order-sensitive (e.g. should be set *after* min/max, #2325, #4024)
                 * - it needs to be forced (#1471)
                 * #2353 proposes adding another renderer option to configure this, but
                 * the properties affects are so finite it is worth special casing it
                 * here to reduce the complexity. (Special casing it also should not
                 * affect non-DOM renderers)
                 */
                if ('value' in props) {
                    hostPatchProp(el, 'value', null, props.value);
                }
                if ((vnodeHook = props.onVnodeBeforeMount)) {
                    invokeVNodeHook(vnodeHook, parentComponent, vnode);
                }
            }
            // scopeId
            setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
        }
        if (( false) || __VUE_PROD_DEVTOOLS__) {
            Object.defineProperty(el, '__vnode', {
                value: vnode,
                enumerable: false
            });
            Object.defineProperty(el, '__vueParentComponent', {
                value: parentComponent,
                enumerable: false
            });
        }
        if (dirs) {
            invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
        }
        // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
        // #1689 For inside suspense + suspense resolved case, just call it
        const needCallTransitionHooks = (!parentSuspense || (parentSuspense && !parentSuspense.pendingBranch)) &&
            transition &&
            !transition.persisted;
        if (needCallTransitionHooks) {
            transition.beforeEnter(el);
        }
        hostInsert(el, container, anchor);
        if ((vnodeHook = props && props.onVnodeMounted) ||
            needCallTransitionHooks ||
            dirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
                needCallTransitionHooks && transition.enter(el);
                dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
            }, parentSuspense);
        }
    };
    const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
        if (scopeId) {
            hostSetScopeId(el, scopeId);
        }
        if (slotScopeIds) {
            for (let i = 0; i < slotScopeIds.length; i++) {
                hostSetScopeId(el, slotScopeIds[i]);
            }
        }
        if (parentComponent) {
            let subTree = parentComponent.subTree;
            if (false /* DEV_ROOT_FRAGMENT */) {}
            if (vnode === subTree) {
                const parentVNode = parentComponent.vnode;
                setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
            }
        }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
        for (let i = start; i < children.length; i++) {
            const child = (children[i] = optimized
                ? cloneIfMounted(children[i])
                : normalizeVNode(children[i]));
            patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        const el = (n2.el = n1.el);
        let { patchFlag, dynamicChildren, dirs } = n2;
        // #1426 take the old vnode's patch flag into account since user may clone a
        // compiler-generated vnode, which de-opts to FULL_PROPS
        patchFlag |= n1.patchFlag & 16 /* FULL_PROPS */;
        const oldProps = n1.props || shared_esm_bundler["b" /* EMPTY_OBJ */];
        const newProps = n2.props || shared_esm_bundler["b" /* EMPTY_OBJ */];
        let vnodeHook;
        // disable recurse in beforeUpdate hooks
        parentComponent && toggleRecurse(parentComponent, false);
        if ((vnodeHook = newProps.onVnodeBeforeUpdate)) {
            invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        }
        if (dirs) {
            invokeDirectiveHook(n2, n1, parentComponent, 'beforeUpdate');
        }
        parentComponent && toggleRecurse(parentComponent, true);
        if (false) {}
        const areChildrenSVG = isSVG && n2.type !== 'foreignObject';
        if (dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
            if (false) {}
        }
        else if (!optimized) {
            // full diff
            patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
        }
        if (patchFlag > 0) {
            // the presence of a patchFlag means this element's render code was
            // generated by the compiler and can take the fast path.
            // in this path old node and new node are guaranteed to have the same shape
            // (i.e. at the exact same position in the source template)
            if (patchFlag & 16 /* FULL_PROPS */) {
                // element props contain dynamic keys, full diff needed
                patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
            }
            else {
                // class
                // this flag is matched when the element has dynamic class bindings.
                if (patchFlag & 2 /* CLASS */) {
                    if (oldProps.class !== newProps.class) {
                        hostPatchProp(el, 'class', null, newProps.class, isSVG);
                    }
                }
                // style
                // this flag is matched when the element has dynamic style bindings
                if (patchFlag & 4 /* STYLE */) {
                    hostPatchProp(el, 'style', oldProps.style, newProps.style, isSVG);
                }
                // props
                // This flag is matched when the element has dynamic prop/attr bindings
                // other than class and style. The keys of dynamic prop/attrs are saved for
                // faster iteration.
                // Note dynamic keys like :[foo]="bar" will cause this optimization to
                // bail out and go through a full diff because we need to unset the old key
                if (patchFlag & 8 /* PROPS */) {
                    // if the flag is present then dynamicProps must be non-null
                    const propsToUpdate = n2.dynamicProps;
                    for (let i = 0; i < propsToUpdate.length; i++) {
                        const key = propsToUpdate[i];
                        const prev = oldProps[key];
                        const next = newProps[key];
                        // #1471 force patch value
                        if (next !== prev || key === 'value') {
                            hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
                        }
                    }
                }
            }
            // text
            // This flag is matched when the element has only dynamic text children.
            if (patchFlag & 1 /* TEXT */) {
                if (n1.children !== n2.children) {
                    hostSetElementText(el, n2.children);
                }
            }
        }
        else if (!optimized && dynamicChildren == null) {
            // unoptimized, full diff
            patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
        }
        if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
                dirs && invokeDirectiveHook(n2, n1, parentComponent, 'updated');
            }, parentSuspense);
        }
    };
    // The fast path for blocks.
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
        for (let i = 0; i < newChildren.length; i++) {
            const oldVNode = oldChildren[i];
            const newVNode = newChildren[i];
            // Determine the container (parent element) for the patch.
            const container = 
            // oldVNode may be an errored async setup() component inside Suspense
            // which will not have a mounted element
            oldVNode.el &&
                // - In the case of a Fragment, we need to provide the actual parent
                // of the Fragment itself so it can move its children.
                (oldVNode.type === Fragment ||
                    // - In the case of different nodes, there is going to be a replacement
                    // which also requires the correct parent container
                    !isSameVNodeType(oldVNode, newVNode) ||
                    // - In the case of a component, it could contain anything.
                    oldVNode.shapeFlag & (6 /* COMPONENT */ | 64 /* TELEPORT */))
                ? hostParentNode(oldVNode.el)
                : // In other cases, the parent container is not actually used so we
                    // just pass the block element here to avoid a DOM parentNode call.
                    fallbackContainer;
            patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
        }
    };
    const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
        if (oldProps !== newProps) {
            for (const key in newProps) {
                // empty string is not valid prop
                if (Object(shared_esm_bundler["A" /* isReservedProp */])(key))
                    continue;
                const next = newProps[key];
                const prev = oldProps[key];
                // defer patching value
                if (next !== prev && key !== 'value') {
                    hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                }
            }
            if (oldProps !== shared_esm_bundler["b" /* EMPTY_OBJ */]) {
                for (const key in oldProps) {
                    if (!Object(shared_esm_bundler["A" /* isReservedProp */])(key) && !(key in newProps)) {
                        hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                    }
                }
            }
            if ('value' in newProps) {
                hostPatchProp(el, 'value', oldProps.value, newProps.value);
            }
        }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        const fragmentStartAnchor = (n2.el = n1 ? n1.el : hostCreateText(''));
        const fragmentEndAnchor = (n2.anchor = n1 ? n1.anchor : hostCreateText(''));
        let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
        if (false) {}
        // check if this is a slot fragment with :slotted scope ids
        if (fragmentSlotScopeIds) {
            slotScopeIds = slotScopeIds
                ? slotScopeIds.concat(fragmentSlotScopeIds)
                : fragmentSlotScopeIds;
        }
        if (n1 == null) {
            hostInsert(fragmentStartAnchor, container, anchor);
            hostInsert(fragmentEndAnchor, container, anchor);
            // a fragment can only have array children
            // since they are either generated by the compiler, or implicitly created
            // from arrays.
            mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
        else {
            if (patchFlag > 0 &&
                patchFlag & 64 /* STABLE_FRAGMENT */ &&
                dynamicChildren &&
                // #2715 the previous fragment could've been a BAILed one as a result
                // of renderSlot() with no valid children
                n1.dynamicChildren) {
                // a stable fragment (template root or <template v-for>) doesn't need to
                // patch children order, but it may contain dynamicChildren.
                patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
                if (false) {}
                else if (
                // #2080 if the stable fragment has a key, it's a <template v-for> that may
                //  get moved around. Make sure all root level vnodes inherit el.
                // #2134 or if it's a component root, it may also get moved around
                // as the component is being moved.
                n2.key != null ||
                    (parentComponent && n2 === parentComponent.subTree)) {
                    traverseStaticChildren(n1, n2, true /* shallow */);
                }
            }
            else {
                // keyed / unkeyed, or manual fragments.
                // for keyed & unkeyed, since they are compiler generated from v-for,
                // each child is guaranteed to be a block so the fragment will never
                // have dynamicChildren.
                patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            }
        }
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        n2.slotScopeIds = slotScopeIds;
        if (n1 == null) {
            if (n2.shapeFlag & 512 /* COMPONENT_KEPT_ALIVE */) {
                parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
            }
            else {
                mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
            }
        }
        else {
            updateComponent(n1, n2, optimized);
        }
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        const instance = (initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense));
        if (false) {}
        if ((false)) {}
        // inject renderer internals for keepAlive
        if (isKeepAlive(initialVNode)) {
            instance.ctx.renderer = internals;
        }
        // resolve props and slots for setup context
        {
            if ((false)) {}
            setupComponent(instance);
            if ((false)) {}
        }
        // setup() is async. This component relies on async logic to be resolved
        // before proceeding
        if (instance.asyncDep) {
            parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
            // Give it a placeholder if this is not hydration
            // TODO handle self-defined fallback
            if (!initialVNode.el) {
                const placeholder = (instance.subTree = createVNode(runtime_core_esm_bundler_Comment));
                processCommentNode(null, placeholder, container, anchor);
            }
            return;
        }
        setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
        if ((false)) {}
    };
    const updateComponent = (n1, n2, optimized) => {
        const instance = (n2.component = n1.component);
        if (shouldUpdateComponent(n1, n2, optimized)) {
            if (instance.asyncDep &&
                !instance.asyncResolved) {
                // async & still pending - just update props and slots
                // since the component's reactive effect for render isn't set-up yet
                if ((false)) {}
                updateComponentPreRender(instance, n2, optimized);
                if ((false)) {}
                return;
            }
            else {
                // normal update
                instance.next = n2;
                // in case the child component is also queued, remove it to avoid
                // double updating the same child component in the same flush.
                invalidateJob(instance.update);
                // instance.update is the reactive effect.
                instance.update();
            }
        }
        else {
            // no update needed. just copy over properties
            n2.component = n1.component;
            n2.el = n1.el;
            instance.vnode = n2;
        }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
        const componentUpdateFn = () => {
            if (!instance.isMounted) {
                let vnodeHook;
                const { el, props } = initialVNode;
                const { bm, m, parent } = instance;
                const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
                toggleRecurse(instance, false);
                // beforeMount hook
                if (bm) {
                    Object(shared_esm_bundler["n" /* invokeArrayFns */])(bm);
                }
                // onVnodeBeforeMount
                if (!isAsyncWrapperVNode &&
                    (vnodeHook = props && props.onVnodeBeforeMount)) {
                    invokeVNodeHook(vnodeHook, parent, initialVNode);
                }
                toggleRecurse(instance, true);
                if (el && hydrateNode) {
                    // vnode has adopted host node - perform hydration instead of mount.
                    const hydrateSubTree = () => {
                        if ((false)) {}
                        instance.subTree = renderComponentRoot(instance);
                        if ((false)) {}
                        if ((false)) {}
                        hydrateNode(el, instance.subTree, instance, parentSuspense, null);
                        if ((false)) {}
                    };
                    if (isAsyncWrapperVNode) {
                        initialVNode.type.__asyncLoader().then(
                        // note: we are moving the render call into an async callback,
                        // which means it won't track dependencies - but it's ok because
                        // a server-rendered async wrapper is already in resolved state
                        // and it will never need to change.
                        () => !instance.isUnmounted && hydrateSubTree());
                    }
                    else {
                        hydrateSubTree();
                    }
                }
                else {
                    if ((false)) {}
                    const subTree = (instance.subTree = renderComponentRoot(instance));
                    if ((false)) {}
                    if ((false)) {}
                    patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
                    if ((false)) {}
                    initialVNode.el = subTree.el;
                }
                // mounted hook
                if (m) {
                    queuePostRenderEffect(m, parentSuspense);
                }
                // onVnodeMounted
                if (!isAsyncWrapperVNode &&
                    (vnodeHook = props && props.onVnodeMounted)) {
                    const scopedInitialVNode = initialVNode;
                    queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
                }
                // activated hook for keep-alive roots.
                // #1742 activated hook must be accessed after first render
                // since the hook may be injected by a child keep-alive
                if (initialVNode.shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */) {
                    instance.a && queuePostRenderEffect(instance.a, parentSuspense);
                }
                instance.isMounted = true;
                if (( false) || __VUE_PROD_DEVTOOLS__) {
                    devtoolsComponentAdded(instance);
                }
                // #2458: deference mount-only object parameters to prevent memleaks
                initialVNode = container = anchor = null;
            }
            else {
                // updateComponent
                // This is triggered by mutation of component's own state (next: null)
                // OR parent calling processComponent (next: VNode)
                let { next, bu, u, parent, vnode } = instance;
                let originNext = next;
                let vnodeHook;
                if ((false)) {}
                // Disallow component effect recursion during pre-lifecycle hooks.
                toggleRecurse(instance, false);
                if (next) {
                    next.el = vnode.el;
                    updateComponentPreRender(instance, next, optimized);
                }
                else {
                    next = vnode;
                }
                // beforeUpdate hook
                if (bu) {
                    Object(shared_esm_bundler["n" /* invokeArrayFns */])(bu);
                }
                // onVnodeBeforeUpdate
                if ((vnodeHook = next.props && next.props.onVnodeBeforeUpdate)) {
                    invokeVNodeHook(vnodeHook, parent, next, vnode);
                }
                toggleRecurse(instance, true);
                // render
                if ((false)) {}
                const nextTree = renderComponentRoot(instance);
                if ((false)) {}
                const prevTree = instance.subTree;
                instance.subTree = nextTree;
                if ((false)) {}
                patch(prevTree, nextTree, 
                // parent may have changed if it's in a teleport
                hostParentNode(prevTree.el), 
                // anchor may have changed if it's in a fragment
                getNextHostNode(prevTree), instance, parentSuspense, isSVG);
                if ((false)) {}
                next.el = nextTree.el;
                if (originNext === null) {
                    // self-triggered update. In case of HOC, update parent component
                    // vnode el. HOC is indicated by parent instance's subTree pointing
                    // to child component's vnode
                    updateHOCHostEl(instance, nextTree.el);
                }
                // updated hook
                if (u) {
                    queuePostRenderEffect(u, parentSuspense);
                }
                // onVnodeUpdated
                if ((vnodeHook = next.props && next.props.onVnodeUpdated)) {
                    queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
                }
                if (( false) || __VUE_PROD_DEVTOOLS__) {
                    devtoolsComponentUpdated(instance);
                }
                if ((false)) {}
            }
        };
        // create reactive effect for rendering
        const effect = (instance.effect = new ReactiveEffect(componentUpdateFn, () => queueJob(instance.update), instance.scope // track it in component's effect scope
        ));
        const update = (instance.update = effect.run.bind(effect));
        update.id = instance.uid;
        // allowRecurse
        // #1801, #2043 component render effects should allow recursive updates
        toggleRecurse(instance, true);
        if ((false)) {}
        update();
    };
    const updateComponentPreRender = (instance, nextVNode, optimized) => {
        nextVNode.component = instance;
        const prevProps = instance.vnode.props;
        instance.vnode = nextVNode;
        instance.next = null;
        updateProps(instance, nextVNode.props, prevProps, optimized);
        updateSlots(instance, nextVNode.children, optimized);
        pauseTracking();
        // props update may have triggered pre-flush watchers.
        // flush them before the render update.
        flushPreFlushCbs(undefined, instance.update);
        resetTracking();
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
        const c1 = n1 && n1.children;
        const prevShapeFlag = n1 ? n1.shapeFlag : 0;
        const c2 = n2.children;
        const { patchFlag, shapeFlag } = n2;
        // fast path
        if (patchFlag > 0) {
            if (patchFlag & 128 /* KEYED_FRAGMENT */) {
                // this could be either fully-keyed or mixed (some keyed some not)
                // presence of patchFlag means children are guaranteed to be arrays
                patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                return;
            }
            else if (patchFlag & 256 /* UNKEYED_FRAGMENT */) {
                // unkeyed
                patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                return;
            }
        }
        // children has 3 possibilities: text, array or no children.
        if (shapeFlag & 8 /* TEXT_CHILDREN */) {
            // text children fast path
            if (prevShapeFlag & 16 /* ARRAY_CHILDREN */) {
                unmountChildren(c1, parentComponent, parentSuspense);
            }
            if (c2 !== c1) {
                hostSetElementText(container, c2);
            }
        }
        else {
            if (prevShapeFlag & 16 /* ARRAY_CHILDREN */) {
                // prev children was array
                if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                    // two arrays, cannot assume anything, do full diff
                    patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
                else {
                    // no new children, just unmount old
                    unmountChildren(c1, parentComponent, parentSuspense, true);
                }
            }
            else {
                // prev children was text OR null
                // new children is array OR null
                if (prevShapeFlag & 8 /* TEXT_CHILDREN */) {
                    hostSetElementText(container, '');
                }
                // mount new if array
                if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                    mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
            }
        }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        c1 = c1 || shared_esm_bundler["a" /* EMPTY_ARR */];
        c2 = c2 || shared_esm_bundler["a" /* EMPTY_ARR */];
        const oldLength = c1.length;
        const newLength = c2.length;
        const commonLength = Math.min(oldLength, newLength);
        let i;
        for (i = 0; i < commonLength; i++) {
            const nextChild = (c2[i] = optimized
                ? cloneIfMounted(c2[i])
                : normalizeVNode(c2[i]));
            patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
        if (oldLength > newLength) {
            // remove old
            unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
        }
        else {
            // mount new
            mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
        }
    };
    // can be all-keyed or mixed
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        let i = 0;
        const l2 = c2.length;
        let e1 = c1.length - 1; // prev ending index
        let e2 = l2 - 1; // next ending index
        // 1. sync from start
        // (a b) c
        // (a b) d e
        while (i <= e1 && i <= e2) {
            const n1 = c1[i];
            const n2 = (c2[i] = optimized
                ? cloneIfMounted(c2[i])
                : normalizeVNode(c2[i]));
            if (isSameVNodeType(n1, n2)) {
                patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            }
            else {
                break;
            }
            i++;
        }
        // 2. sync from end
        // a (b c)
        // d e (b c)
        while (i <= e1 && i <= e2) {
            const n1 = c1[e1];
            const n2 = (c2[e2] = optimized
                ? cloneIfMounted(c2[e2])
                : normalizeVNode(c2[e2]));
            if (isSameVNodeType(n1, n2)) {
                patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            }
            else {
                break;
            }
            e1--;
            e2--;
        }
        // 3. common sequence + mount
        // (a b)
        // (a b) c
        // i = 2, e1 = 1, e2 = 2
        // (a b)
        // c (a b)
        // i = 0, e1 = -1, e2 = 0
        if (i > e1) {
            if (i <= e2) {
                const nextPos = e2 + 1;
                const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
                while (i <= e2) {
                    patch(null, (c2[i] = optimized
                        ? cloneIfMounted(c2[i])
                        : normalizeVNode(c2[i])), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                    i++;
                }
            }
        }
        // 4. common sequence + unmount
        // (a b) c
        // (a b)
        // i = 2, e1 = 2, e2 = 1
        // a (b c)
        // (b c)
        // i = 0, e1 = 0, e2 = -1
        else if (i > e2) {
            while (i <= e1) {
                unmount(c1[i], parentComponent, parentSuspense, true);
                i++;
            }
        }
        // 5. unknown sequence
        // [i ... e1 + 1]: a b [c d e] f g
        // [i ... e2 + 1]: a b [e d c h] f g
        // i = 2, e1 = 4, e2 = 5
        else {
            const s1 = i; // prev starting index
            const s2 = i; // next starting index
            // 5.1 build key:index map for newChildren
            const keyToNewIndexMap = new Map();
            for (i = s2; i <= e2; i++) {
                const nextChild = (c2[i] = optimized
                    ? cloneIfMounted(c2[i])
                    : normalizeVNode(c2[i]));
                if (nextChild.key != null) {
                    if (false) {}
                    keyToNewIndexMap.set(nextChild.key, i);
                }
            }
            // 5.2 loop through old children left to be patched and try to patch
            // matching nodes & remove nodes that are no longer present
            let j;
            let patched = 0;
            const toBePatched = e2 - s2 + 1;
            let moved = false;
            // used to track whether any node has moved
            let maxNewIndexSoFar = 0;
            // works as Map<newIndex, oldIndex>
            // Note that oldIndex is offset by +1
            // and oldIndex = 0 is a special value indicating the new node has
            // no corresponding old node.
            // used for determining longest stable subsequence
            const newIndexToOldIndexMap = new Array(toBePatched);
            for (i = 0; i < toBePatched; i++)
                newIndexToOldIndexMap[i] = 0;
            for (i = s1; i <= e1; i++) {
                const prevChild = c1[i];
                if (patched >= toBePatched) {
                    // all new children have been patched so this can only be a removal
                    unmount(prevChild, parentComponent, parentSuspense, true);
                    continue;
                }
                let newIndex;
                if (prevChild.key != null) {
                    newIndex = keyToNewIndexMap.get(prevChild.key);
                }
                else {
                    // key-less node, try to locate a key-less node of the same type
                    for (j = s2; j <= e2; j++) {
                        if (newIndexToOldIndexMap[j - s2] === 0 &&
                            isSameVNodeType(prevChild, c2[j])) {
                            newIndex = j;
                            break;
                        }
                    }
                }
                if (newIndex === undefined) {
                    unmount(prevChild, parentComponent, parentSuspense, true);
                }
                else {
                    newIndexToOldIndexMap[newIndex - s2] = i + 1;
                    if (newIndex >= maxNewIndexSoFar) {
                        maxNewIndexSoFar = newIndex;
                    }
                    else {
                        moved = true;
                    }
                    patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                    patched++;
                }
            }
            // 5.3 move and mount
            // generate longest stable subsequence only when nodes have moved
            const increasingNewIndexSequence = moved
                ? getSequence(newIndexToOldIndexMap)
                : shared_esm_bundler["a" /* EMPTY_ARR */];
            j = increasingNewIndexSequence.length - 1;
            // looping backwards so that we can use last patched node as anchor
            for (i = toBePatched - 1; i >= 0; i--) {
                const nextIndex = s2 + i;
                const nextChild = c2[nextIndex];
                const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
                if (newIndexToOldIndexMap[i] === 0) {
                    // mount new
                    patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
                else if (moved) {
                    // move if:
                    // There is no stable subsequence (e.g. a reverse)
                    // OR current node is not among the stable sequence
                    if (j < 0 || i !== increasingNewIndexSequence[j]) {
                        move(nextChild, container, anchor, 2 /* REORDER */);
                    }
                    else {
                        j--;
                    }
                }
            }
        }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
        const { el, type, transition, children, shapeFlag } = vnode;
        if (shapeFlag & 6 /* COMPONENT */) {
            move(vnode.component.subTree, container, anchor, moveType);
            return;
        }
        if (shapeFlag & 128 /* SUSPENSE */) {
            vnode.suspense.move(container, anchor, moveType);
            return;
        }
        if (shapeFlag & 64 /* TELEPORT */) {
            type.move(vnode, container, anchor, internals);
            return;
        }
        if (type === Fragment) {
            hostInsert(el, container, anchor);
            for (let i = 0; i < children.length; i++) {
                move(children[i], container, anchor, moveType);
            }
            hostInsert(vnode.anchor, container, anchor);
            return;
        }
        if (type === Static) {
            moveStaticNode(vnode, container, anchor);
            return;
        }
        // single nodes
        const needTransition = moveType !== 2 /* REORDER */ &&
            shapeFlag & 1 /* ELEMENT */ &&
            transition;
        if (needTransition) {
            if (moveType === 0 /* ENTER */) {
                transition.beforeEnter(el);
                hostInsert(el, container, anchor);
                queuePostRenderEffect(() => transition.enter(el), parentSuspense);
            }
            else {
                const { leave, delayLeave, afterLeave } = transition;
                const remove = () => hostInsert(el, container, anchor);
                const performLeave = () => {
                    leave(el, () => {
                        remove();
                        afterLeave && afterLeave();
                    });
                };
                if (delayLeave) {
                    delayLeave(el, remove, performLeave);
                }
                else {
                    performLeave();
                }
            }
        }
        else {
            hostInsert(el, container, anchor);
        }
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
        const { type, props, ref, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
        // unset ref
        if (ref != null) {
            setRef(ref, null, parentSuspense, vnode, true);
        }
        if (shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */) {
            parentComponent.ctx.deactivate(vnode);
            return;
        }
        const shouldInvokeDirs = shapeFlag & 1 /* ELEMENT */ && dirs;
        const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
        let vnodeHook;
        if (shouldInvokeVnodeHook &&
            (vnodeHook = props && props.onVnodeBeforeUnmount)) {
            invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
        if (shapeFlag & 6 /* COMPONENT */) {
            unmountComponent(vnode.component, parentSuspense, doRemove);
        }
        else {
            if (shapeFlag & 128 /* SUSPENSE */) {
                vnode.suspense.unmount(parentSuspense, doRemove);
                return;
            }
            if (shouldInvokeDirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'beforeUnmount');
            }
            if (shapeFlag & 64 /* TELEPORT */) {
                vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
            }
            else if (dynamicChildren &&
                // #1153: fast path should not be taken for non-stable (v-for) fragments
                (type !== Fragment ||
                    (patchFlag > 0 && patchFlag & 64 /* STABLE_FRAGMENT */))) {
                // fast path for block nodes: only need to unmount dynamic children.
                unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
            }
            else if ((type === Fragment &&
                patchFlag &
                    (128 /* KEYED_FRAGMENT */ | 256 /* UNKEYED_FRAGMENT */)) ||
                (!optimized && shapeFlag & 16 /* ARRAY_CHILDREN */)) {
                unmountChildren(children, parentComponent, parentSuspense);
            }
            if (doRemove) {
                remove(vnode);
            }
        }
        if ((shouldInvokeVnodeHook &&
            (vnodeHook = props && props.onVnodeUnmounted)) ||
            shouldInvokeDirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
                shouldInvokeDirs &&
                    invokeDirectiveHook(vnode, null, parentComponent, 'unmounted');
            }, parentSuspense);
        }
    };
    const remove = vnode => {
        const { type, el, anchor, transition } = vnode;
        if (type === Fragment) {
            removeFragment(el, anchor);
            return;
        }
        if (type === Static) {
            removeStaticNode(vnode);
            return;
        }
        const performRemove = () => {
            hostRemove(el);
            if (transition && !transition.persisted && transition.afterLeave) {
                transition.afterLeave();
            }
        };
        if (vnode.shapeFlag & 1 /* ELEMENT */ &&
            transition &&
            !transition.persisted) {
            const { leave, delayLeave } = transition;
            const performLeave = () => leave(el, performRemove);
            if (delayLeave) {
                delayLeave(vnode.el, performRemove, performLeave);
            }
            else {
                performLeave();
            }
        }
        else {
            performRemove();
        }
    };
    const removeFragment = (cur, end) => {
        // For fragments, directly remove all contained DOM nodes.
        // (fragment child nodes cannot have transition)
        let next;
        while (cur !== end) {
            next = hostNextSibling(cur);
            hostRemove(cur);
            cur = next;
        }
        hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove) => {
        if (false) {}
        const { bum, scope, update, subTree, um } = instance;
        // beforeUnmount hook
        if (bum) {
            Object(shared_esm_bundler["n" /* invokeArrayFns */])(bum);
        }
        // stop effects in component scope
        scope.stop();
        // update may be null if a component is unmounted before its async
        // setup has resolved.
        if (update) {
            // so that scheduler will no longer invoke it
            update.active = false;
            unmount(subTree, instance, parentSuspense, doRemove);
        }
        // unmounted hook
        if (um) {
            queuePostRenderEffect(um, parentSuspense);
        }
        queuePostRenderEffect(() => {
            instance.isUnmounted = true;
        }, parentSuspense);
        // A component with async dep inside a pending suspense is unmounted before
        // its async dep resolves. This should remove the dep from the suspense, and
        // cause the suspense to resolve immediately if that was the last dep.
        if (parentSuspense &&
            parentSuspense.pendingBranch &&
            !parentSuspense.isUnmounted &&
            instance.asyncDep &&
            !instance.asyncResolved &&
            instance.suspenseId === parentSuspense.pendingId) {
            parentSuspense.deps--;
            if (parentSuspense.deps === 0) {
                parentSuspense.resolve();
            }
        }
        if (( false) || __VUE_PROD_DEVTOOLS__) {
            devtoolsComponentRemoved(instance);
        }
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
        for (let i = start; i < children.length; i++) {
            unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
        }
    };
    const getNextHostNode = vnode => {
        if (vnode.shapeFlag & 6 /* COMPONENT */) {
            return getNextHostNode(vnode.component.subTree);
        }
        if (vnode.shapeFlag & 128 /* SUSPENSE */) {
            return vnode.suspense.next();
        }
        return hostNextSibling((vnode.anchor || vnode.el));
    };
    const render = (vnode, container, isSVG) => {
        if (vnode == null) {
            if (container._vnode) {
                unmount(container._vnode, null, null, true);
            }
        }
        else {
            patch(container._vnode || null, vnode, container, null, null, null, isSVG);
        }
        flushPostFlushCbs();
        container._vnode = vnode;
    };
    const internals = {
        p: patch,
        um: unmount,
        m: move,
        r: remove,
        mt: mountComponent,
        mc: mountChildren,
        pc: patchChildren,
        pbc: patchBlockChildren,
        n: getNextHostNode,
        o: options
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) {
        [hydrate, hydrateNode] = createHydrationFns(internals);
    }
    return {
        render,
        hydrate,
        createApp: createAppAPI(render, hydrate)
    };
}
function toggleRecurse({ effect, update }, allowed) {
    effect.allowRecurse = update.allowRecurse = allowed;
}
/**
 * #1156
 * When a component is HMR-enabled, we need to make sure that all static nodes
 * inside a block also inherit the DOM element from the previous tree so that
 * HMR updates (which are full updates) can retrieve the element for patching.
 *
 * #2080
 * Inside keyed `template` fragment static children, if a fragment is moved,
 * the children will always be moved. Therefore, in order to ensure correct move
 * position, el should be inherited from previous nodes.
 */
function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if (Object(shared_esm_bundler["o" /* isArray */])(ch1) && Object(shared_esm_bundler["o" /* isArray */])(ch2)) {
        for (let i = 0; i < ch1.length; i++) {
            // this is only called in the optimized path so array children are
            // guaranteed to be vnodes
            const c1 = ch1[i];
            let c2 = ch2[i];
            if (c2.shapeFlag & 1 /* ELEMENT */ && !c2.dynamicChildren) {
                if (c2.patchFlag <= 0 || c2.patchFlag === 32 /* HYDRATE_EVENTS */) {
                    c2 = ch2[i] = cloneIfMounted(ch2[i]);
                    c2.el = c1.el;
                }
                if (!shallow)
                    traverseStaticChildren(c1, c2);
            }
            // also inherit for comment nodes, but not placeholders (e.g. v-if which
            // would have received .el during block patch)
            if (false) {}
        }
    }
}
// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function getSequence(arr) {
    const p = arr.slice();
    const result = [0];
    let i, j, u, v, c;
    const len = arr.length;
    for (i = 0; i < len; i++) {
        const arrI = arr[i];
        if (arrI !== 0) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v = result.length - 1;
            while (u < v) {
                c = (u + v) >> 1;
                if (arr[result[c]] < arrI) {
                    u = c + 1;
                }
                else {
                    v = c;
                }
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) {
                    p[i] = result[u - 1];
                }
                result[u] = i;
            }
        }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }
    return result;
}

const isTeleport = (type) => type.__isTeleport;
const isTeleportDisabled = (props) => props && (props.disabled || props.disabled === '');
const isTargetSVG = (target) => typeof SVGElement !== 'undefined' && target instanceof SVGElement;
const resolveTarget = (props, select) => {
    const targetSelector = props && props.to;
    if (Object(shared_esm_bundler["E" /* isString */])(targetSelector)) {
        if (!select) {
            ( false) &&
                false;
            return null;
        }
        else {
            const target = select(targetSelector);
            if (!target) {
                ( false) &&
                    false;
            }
            return target;
        }
    }
    else {
        if (false) {}
        return targetSelector;
    }
};
const TeleportImpl = {
    __isTeleport: true,
    process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
        const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert, querySelector, createText, createComment } } = internals;
        const disabled = isTeleportDisabled(n2.props);
        let { shapeFlag, children, dynamicChildren } = n2;
        // #3302
        // HMR updated, force full diff
        if (false) {}
        if (n1 == null) {
            // insert anchors in the main view
            const placeholder = (n2.el = ( false)
                ? undefined
                : createText(''));
            const mainAnchor = (n2.anchor = ( false)
                ? undefined
                : createText(''));
            insert(placeholder, container, anchor);
            insert(mainAnchor, container, anchor);
            const target = (n2.target = resolveTarget(n2.props, querySelector));
            const targetAnchor = (n2.targetAnchor = createText(''));
            if (target) {
                insert(targetAnchor, target);
                // #2652 we could be teleporting from a non-SVG tree into an SVG tree
                isSVG = isSVG || isTargetSVG(target);
            }
            else if (false) {}
            const mount = (container, anchor) => {
                // Teleport *always* has Array children. This is enforced in both the
                // compiler and vnode children normalization.
                if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                    mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
            };
            if (disabled) {
                mount(container, mainAnchor);
            }
            else if (target) {
                mount(target, targetAnchor);
            }
        }
        else {
            // update content
            n2.el = n1.el;
            const mainAnchor = (n2.anchor = n1.anchor);
            const target = (n2.target = n1.target);
            const targetAnchor = (n2.targetAnchor = n1.targetAnchor);
            const wasDisabled = isTeleportDisabled(n1.props);
            const currentContainer = wasDisabled ? container : target;
            const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
            isSVG = isSVG || isTargetSVG(target);
            if (dynamicChildren) {
                // fast path when the teleport happens to be a block root
                patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG, slotScopeIds);
                // even in block tree mode we need to make sure all root-level nodes
                // in the teleport inherit previous DOM references so that they can
                // be moved in future patches.
                traverseStaticChildren(n1, n2, true);
            }
            else if (!optimized) {
                patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, false);
            }
            if (disabled) {
                if (!wasDisabled) {
                    // enabled -> disabled
                    // move into main container
                    moveTeleport(n2, container, mainAnchor, internals, 1 /* TOGGLE */);
                }
            }
            else {
                // target changed
                if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
                    const nextTarget = (n2.target = resolveTarget(n2.props, querySelector));
                    if (nextTarget) {
                        moveTeleport(n2, nextTarget, null, internals, 0 /* TARGET_CHANGE */);
                    }
                    else if ((false)) {}
                }
                else if (wasDisabled) {
                    // disabled -> enabled
                    // move into teleport target
                    moveTeleport(n2, target, targetAnchor, internals, 1 /* TOGGLE */);
                }
            }
        }
    },
    remove(vnode, parentComponent, parentSuspense, optimized, { um: unmount, o: { remove: hostRemove } }, doRemove) {
        const { shapeFlag, children, anchor, targetAnchor, target, props } = vnode;
        if (target) {
            hostRemove(targetAnchor);
        }
        // an unmounted teleport should always remove its children if not disabled
        if (doRemove || !isTeleportDisabled(props)) {
            hostRemove(anchor);
            if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                for (let i = 0; i < children.length; i++) {
                    const child = children[i];
                    unmount(child, parentComponent, parentSuspense, true, !!child.dynamicChildren);
                }
            }
        }
    },
    move: moveTeleport,
    hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2 /* REORDER */) {
    // move target anchor if this is a target change.
    if (moveType === 0 /* TARGET_CHANGE */) {
        insert(vnode.targetAnchor, container, parentAnchor);
    }
    const { el, anchor, shapeFlag, children, props } = vnode;
    const isReorder = moveType === 2 /* REORDER */;
    // move main view anchor if this is a re-order.
    if (isReorder) {
        insert(el, container, parentAnchor);
    }
    // if this is a re-order and teleport is enabled (content is in target)
    // do not move children. So the opposite is: only move children if this
    // is not a reorder, or the teleport is disabled
    if (!isReorder || isTeleportDisabled(props)) {
        // Teleport has either Array children or no children.
        if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
            for (let i = 0; i < children.length; i++) {
                move(children[i], container, parentAnchor, 2 /* REORDER */);
            }
        }
    }
    // move main view anchor if this is a re-order.
    if (isReorder) {
        insert(anchor, container, parentAnchor);
    }
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling, parentNode, querySelector } }, hydrateChildren) {
    const target = (vnode.target = resolveTarget(vnode.props, querySelector));
    if (target) {
        // if multiple teleports rendered to the same target element, we need to
        // pick up from where the last teleport finished instead of the first node
        const targetNode = target._lpa || target.firstChild;
        if (vnode.shapeFlag & 16 /* ARRAY_CHILDREN */) {
            if (isTeleportDisabled(vnode.props)) {
                vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
                vnode.targetAnchor = targetNode;
            }
            else {
                vnode.anchor = nextSibling(node);
                vnode.targetAnchor = hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
            }
            target._lpa =
                vnode.targetAnchor && nextSibling(vnode.targetAnchor);
        }
    }
    return vnode.anchor && nextSibling(vnode.anchor);
}
// Force-casted public typing for h and TSX props inference
const Teleport = TeleportImpl;

const COMPONENTS = 'components';
const DIRECTIVES = 'directives';
/**
 * @private
 */
function resolveComponent(name, maybeSelfReference) {
    return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol();
/**
 * @private
 */
function resolveDynamicComponent(component) {
    if (Object(shared_esm_bundler["E" /* isString */])(component)) {
        return resolveAsset(COMPONENTS, component, false) || component;
    }
    else {
        // invalid types will fallthrough to createVNode and raise warning
        return (component || NULL_DYNAMIC_COMPONENT);
    }
}
/**
 * @private
 */
function resolveDirective(name) {
    return resolveAsset(DIRECTIVES, name);
}
// implementation
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
    const instance = currentRenderingInstance || currentInstance;
    if (instance) {
        const Component = instance.type;
        // explicit self name has highest priority
        if (type === COMPONENTS) {
            const selfName = getComponentName(Component);
            if (selfName &&
                (selfName === name ||
                    selfName === Object(shared_esm_bundler["e" /* camelize */])(name) ||
                    selfName === Object(shared_esm_bundler["f" /* capitalize */])(Object(shared_esm_bundler["e" /* camelize */])(name)))) {
                return Component;
            }
        }
        const res = 
        // local registration
        // check instance[type] first which is resolved for options API
        runtime_core_esm_bundler_resolve(instance[type] || Component[type], name) ||
            // global registration
            runtime_core_esm_bundler_resolve(instance.appContext[type], name);
        if (!res && maybeSelfReference) {
            // fallback to implicit self-reference
            return Component;
        }
        if (false) {}
        return res;
    }
    else if ((false)) {}
}
function runtime_core_esm_bundler_resolve(registry, name) {
    return (registry &&
        (registry[name] ||
            registry[Object(shared_esm_bundler["e" /* camelize */])(name)] ||
            registry[Object(shared_esm_bundler["f" /* capitalize */])(Object(shared_esm_bundler["e" /* camelize */])(name))]));
}

const Fragment = Symbol(( false) ? undefined : undefined);
const Text = Symbol(( false) ? undefined : undefined);
const runtime_core_esm_bundler_Comment = Symbol(( false) ? undefined : undefined);
const Static = Symbol(( false) ? undefined : undefined);
// Since v-if and v-for are the two possible ways node structure can dynamically
// change, once we consider v-if branches and each v-for fragment a block, we
// can divide a template into nested blocks, and within each block the node
// structure would be stable. This allows us to skip most children diffing
// and only worry about the dynamic nodes (indicated by patch flags).
const blockStack = [];
let currentBlock = null;
/**
 * Open a block.
 * This must be called before `createBlock`. It cannot be part of `createBlock`
 * because the children of the block are evaluated before `createBlock` itself
 * is called. The generated code typically looks like this:
 *
 * ```js
 * function render() {
 *   return (openBlock(),createBlock('div', null, [...]))
 * }
 * ```
 * disableTracking is true when creating a v-for fragment block, since a v-for
 * fragment always diffs its children.
 *
 * @private
 */
function openBlock(disableTracking = false) {
    blockStack.push((currentBlock = disableTracking ? null : []));
}
function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
}
// Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)
let isBlockTreeEnabled = 1;
/**
 * Block tracking sometimes needs to be disabled, for example during the
 * creation of a tree that needs to be cached by v-once. The compiler generates
 * code like this:
 *
 * ``` js
 * _cache[1] || (
 *   setBlockTracking(-1),
 *   _cache[1] = createVNode(...),
 *   setBlockTracking(1),
 *   _cache[1]
 * )
 * ```
 *
 * @private
 */
function setBlockTracking(value) {
    isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
    // save current block children on the block vnode
    vnode.dynamicChildren =
        isBlockTreeEnabled > 0 ? currentBlock || shared_esm_bundler["a" /* EMPTY_ARR */] : null;
    // close block
    closeBlock();
    // a block is always going to be patched, so track it as a child of its
    // parent block
    if (isBlockTreeEnabled > 0 && currentBlock) {
        currentBlock.push(vnode);
    }
    return vnode;
}
/**
 * @private
 */
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
    return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true /* isBlock */));
}
/**
 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
 * A block root keeps track of dynamic nodes within the block in the
 * `dynamicChildren` array.
 *
 * @private
 */
function createBlock(type, props, children, patchFlag, dynamicProps) {
    return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true /* isBlock: prevent a block from tracking itself */));
}
function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
    if (false) {}
    return n1.type === n2.type && n1.key === n2.key;
}
let vnodeArgsTransformer;
/**
 * Internal API for registering an arguments transform for createVNode
 * used for creating stubs in the test-utils
 * It is *internal* but needs to be exposed for test-utils to pick up proper
 * typings
 */
function transformVNodeArgs(transformer) {
    vnodeArgsTransformer = transformer;
}
const createVNodeWithArgsTransform = (...args) => {
    return _createVNode(...(vnodeArgsTransformer
        ? vnodeArgsTransformer(args, currentRenderingInstance)
        : args));
};
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({ ref, ref_key, ref_for }) => {
    return (ref != null
        ? Object(shared_esm_bundler["E" /* isString */])(ref) || isRef(ref) || Object(shared_esm_bundler["q" /* isFunction */])(ref)
            ? { i: currentRenderingInstance, r: ref, k: ref_key, f: !!ref_for }
            : ref
        : null);
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1 /* ELEMENT */, isBlockNode = false, needFullChildrenNormalization = false) {
    const vnode = {
        __v_isVNode: true,
        __v_skip: true,
        type,
        props,
        key: props && normalizeKey(props),
        ref: props && normalizeRef(props),
        scopeId: currentScopeId,
        slotScopeIds: null,
        children,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag,
        patchFlag,
        dynamicProps,
        dynamicChildren: null,
        appContext: null
    };
    if (needFullChildrenNormalization) {
        normalizeChildren(vnode, children);
        // normalize suspense children
        if (shapeFlag & 128 /* SUSPENSE */) {
            type.normalize(vnode);
        }
    }
    else if (children) {
        // compiled element vnode - if children is passed, only possible types are
        // string or Array.
        vnode.shapeFlag |= Object(shared_esm_bundler["E" /* isString */])(children)
            ? 8 /* TEXT_CHILDREN */
            : 16 /* ARRAY_CHILDREN */;
    }
    // validate key
    if (false) {}
    // track vnode for block tree
    if (isBlockTreeEnabled > 0 &&
        // avoid a block node from tracking itself
        !isBlockNode &&
        // has current parent block
        currentBlock &&
        // presence of a patch flag indicates this node needs patching on updates.
        // component nodes also should always be patched, because even if the
        // component doesn't need to update, it needs to persist the instance on to
        // the next vnode so that it can be properly unmounted later.
        (vnode.patchFlag > 0 || shapeFlag & 6 /* COMPONENT */) &&
        // the EVENTS flag is only for hydration and if it is the only flag, the
        // vnode should not be considered dynamic due to handler caching.
        vnode.patchFlag !== 32 /* HYDRATE_EVENTS */) {
        currentBlock.push(vnode);
    }
    return vnode;
}
const createVNode = (( false) ? undefined : _createVNode);
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
        if (false) {}
        type = runtime_core_esm_bundler_Comment;
    }
    if (isVNode(type)) {
        // createVNode receiving an existing vnode. This happens in cases like
        // <component :is="vnode"/>
        // #2078 make sure to merge refs during the clone instead of overwriting it
        const cloned = cloneVNode(type, props, true /* mergeRef: true */);
        if (children) {
            normalizeChildren(cloned, children);
        }
        return cloned;
    }
    // class component normalization.
    if (isClassComponent(type)) {
        type = type.__vccOpts;
    }
    // class & style normalization.
    if (props) {
        // for reactive or proxy objects, we need to clone it to enable mutation.
        props = guardReactiveProps(props);
        let { class: klass, style } = props;
        if (klass && !Object(shared_esm_bundler["E" /* isString */])(klass)) {
            props.class = Object(shared_esm_bundler["J" /* normalizeClass */])(klass);
        }
        if (Object(shared_esm_bundler["w" /* isObject */])(style)) {
            // reactive state objects need to be cloned since they are likely to be
            // mutated
            if (isProxy(style) && !Object(shared_esm_bundler["o" /* isArray */])(style)) {
                style = Object(shared_esm_bundler["h" /* extend */])({}, style);
            }
            props.style = Object(shared_esm_bundler["K" /* normalizeStyle */])(style);
        }
    }
    // encode the vnode type information into a bitmap
    const shapeFlag = Object(shared_esm_bundler["E" /* isString */])(type)
        ? 1 /* ELEMENT */
        : isSuspense(type)
            ? 128 /* SUSPENSE */
            : isTeleport(type)
                ? 64 /* TELEPORT */
                : Object(shared_esm_bundler["w" /* isObject */])(type)
                    ? 4 /* STATEFUL_COMPONENT */
                    : Object(shared_esm_bundler["q" /* isFunction */])(type)
                        ? 2 /* FUNCTIONAL_COMPONENT */
                        : 0;
    if (false) {}
    return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
    if (!props)
        return null;
    return isProxy(props) || InternalObjectKey in props
        ? Object(shared_esm_bundler["h" /* extend */])({}, props)
        : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
    // This is intentionally NOT using spread or extend to avoid the runtime
    // key enumeration cost.
    const { props, ref, patchFlag, children } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    const cloned = {
        __v_isVNode: true,
        __v_skip: true,
        type: vnode.type,
        props: mergedProps,
        key: mergedProps && normalizeKey(mergedProps),
        ref: extraProps && extraProps.ref
            ? // #2078 in the case of <component :is="vnode" ref="extra"/>
                // if the vnode itself already has a ref, cloneVNode will need to merge
                // the refs so the single vnode can be set on multiple refs
                mergeRef && ref
                    ? Object(shared_esm_bundler["o" /* isArray */])(ref)
                        ? ref.concat(normalizeRef(extraProps))
                        : [ref, normalizeRef(extraProps)]
                    : normalizeRef(extraProps)
            : ref,
        scopeId: vnode.scopeId,
        slotScopeIds: vnode.slotScopeIds,
        children:  false
            ? undefined
            : children,
        target: vnode.target,
        targetAnchor: vnode.targetAnchor,
        staticCount: vnode.staticCount,
        shapeFlag: vnode.shapeFlag,
        // if the vnode is cloned with extra props, we can no longer assume its
        // existing patch flag to be reliable and need to add the FULL_PROPS flag.
        // note: preserve flag for fragments since they use the flag for children
        // fast paths only.
        patchFlag: extraProps && vnode.type !== Fragment
            ? patchFlag === -1 // hoisted node
                ? 16 /* FULL_PROPS */
                : patchFlag | 16 /* FULL_PROPS */
            : patchFlag,
        dynamicProps: vnode.dynamicProps,
        dynamicChildren: vnode.dynamicChildren,
        appContext: vnode.appContext,
        dirs: vnode.dirs,
        transition: vnode.transition,
        // These should technically only be non-null on mounted VNodes. However,
        // they *should* be copied for kept-alive vnodes. So we just always copy
        // them since them being non-null during a mount doesn't affect the logic as
        // they will simply be overwritten.
        component: vnode.component,
        suspense: vnode.suspense,
        ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
        ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
        el: vnode.el,
        anchor: vnode.anchor
    };
    return cloned;
}
/**
 * Dev only, for HMR of hoisted vnodes reused in v-for
 * https://github.com/vitejs/vite/issues/2022
 */
function deepCloneVNode(vnode) {
    const cloned = cloneVNode(vnode);
    if (Object(shared_esm_bundler["o" /* isArray */])(vnode.children)) {
        cloned.children = vnode.children.map(deepCloneVNode);
    }
    return cloned;
}
/**
 * @private
 */
function createTextVNode(text = ' ', flag = 0) {
    return createVNode(Text, null, text, flag);
}
/**
 * @private
 */
function createStaticVNode(content, numberOfNodes) {
    // A static vnode can contain multiple stringified elements, and the number
    // of elements is necessary for hydration.
    const vnode = createVNode(Static, null, content);
    vnode.staticCount = numberOfNodes;
    return vnode;
}
/**
 * @private
 */
function createCommentVNode(text = '', 
// when used as the v-else branch, the comment node must be created as a
// block to ensure correct updates.
asBlock = false) {
    return asBlock
        ? (openBlock(), createBlock(runtime_core_esm_bundler_Comment, null, text))
        : createVNode(runtime_core_esm_bundler_Comment, null, text);
}
function normalizeVNode(child) {
    if (child == null || typeof child === 'boolean') {
        // empty placeholder
        return createVNode(runtime_core_esm_bundler_Comment);
    }
    else if (Object(shared_esm_bundler["o" /* isArray */])(child)) {
        // fragment
        return createVNode(Fragment, null, 
        // #3666, avoid reference pollution when reusing vnode
        child.slice());
    }
    else if (typeof child === 'object') {
        // already vnode, this should be the most common since compiled templates
        // always produce all-vnode children arrays
        return cloneIfMounted(child);
    }
    else {
        // strings and numbers
        return createVNode(Text, null, String(child));
    }
}
// optimized normalization for template-compiled render fns
function cloneIfMounted(child) {
    return child.el === null || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag } = vnode;
    if (children == null) {
        children = null;
    }
    else if (Object(shared_esm_bundler["o" /* isArray */])(children)) {
        type = 16 /* ARRAY_CHILDREN */;
    }
    else if (typeof children === 'object') {
        if (shapeFlag & (1 /* ELEMENT */ | 64 /* TELEPORT */)) {
            // Normalize slot to plain children for plain element and Teleport
            const slot = children.default;
            if (slot) {
                // _c marker is added by withCtx() indicating this is a compiled slot
                slot._c && (slot._d = false);
                normalizeChildren(vnode, slot());
                slot._c && (slot._d = true);
            }
            return;
        }
        else {
            type = 32 /* SLOTS_CHILDREN */;
            const slotFlag = children._;
            if (!slotFlag && !(InternalObjectKey in children)) {
                children._ctx = currentRenderingInstance;
            }
            else if (slotFlag === 3 /* FORWARDED */ && currentRenderingInstance) {
                // a child component receives forwarded slots from the parent.
                // its slot type is determined by its parent's slot type.
                if (currentRenderingInstance.slots._ === 1 /* STABLE */) {
                    children._ = 1 /* STABLE */;
                }
                else {
                    children._ = 2 /* DYNAMIC */;
                    vnode.patchFlag |= 1024 /* DYNAMIC_SLOTS */;
                }
            }
        }
    }
    else if (Object(shared_esm_bundler["q" /* isFunction */])(children)) {
        children = { default: children, _ctx: currentRenderingInstance };
        type = 32 /* SLOTS_CHILDREN */;
    }
    else {
        children = String(children);
        // force teleport children to array so it can be moved around
        if (shapeFlag & 64 /* TELEPORT */) {
            type = 16 /* ARRAY_CHILDREN */;
            children = [createTextVNode(children)];
        }
        else {
            type = 8 /* TEXT_CHILDREN */;
        }
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
}
function mergeProps(...args) {
    const ret = {};
    for (let i = 0; i < args.length; i++) {
        const toMerge = args[i];
        for (const key in toMerge) {
            if (key === 'class') {
                if (ret.class !== toMerge.class) {
                    ret.class = Object(shared_esm_bundler["J" /* normalizeClass */])([ret.class, toMerge.class]);
                }
            }
            else if (key === 'style') {
                ret.style = Object(shared_esm_bundler["K" /* normalizeStyle */])([ret.style, toMerge.style]);
            }
            else if (Object(shared_esm_bundler["x" /* isOn */])(key)) {
                const existing = ret[key];
                const incoming = toMerge[key];
                if (incoming &&
                    existing !== incoming &&
                    !(Object(shared_esm_bundler["o" /* isArray */])(existing) && existing.includes(incoming))) {
                    ret[key] = existing
                        ? [].concat(existing, incoming)
                        : incoming;
                }
            }
            else if (key !== '') {
                ret[key] = toMerge[key];
            }
        }
    }
    return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7 /* VNODE_HOOK */, [
        vnode,
        prevVNode
    ]);
}

/**
 * Actual implementation
 */
function renderList(source, renderItem, cache, index) {
    let ret;
    const cached = (cache && cache[index]);
    if (Object(shared_esm_bundler["o" /* isArray */])(source) || Object(shared_esm_bundler["E" /* isString */])(source)) {
        ret = new Array(source.length);
        for (let i = 0, l = source.length; i < l; i++) {
            ret[i] = renderItem(source[i], i, undefined, cached && cached[i]);
        }
    }
    else if (typeof source === 'number') {
        if (false) {}
        ret = new Array(source);
        for (let i = 0; i < source; i++) {
            ret[i] = renderItem(i + 1, i, undefined, cached && cached[i]);
        }
    }
    else if (Object(shared_esm_bundler["w" /* isObject */])(source)) {
        if (source[Symbol.iterator]) {
            ret = Array.from(source, (item, i) => renderItem(item, i, undefined, cached && cached[i]));
        }
        else {
            const keys = Object.keys(source);
            ret = new Array(keys.length);
            for (let i = 0, l = keys.length; i < l; i++) {
                const key = keys[i];
                ret[i] = renderItem(source[key], key, i, cached && cached[i]);
            }
        }
    }
    else {
        ret = [];
    }
    if (cache) {
        cache[index] = ret;
    }
    return ret;
}

/**
 * Compiler runtime helper for creating dynamic slots object
 * @private
 */
function createSlots(slots, dynamicSlots) {
    for (let i = 0; i < dynamicSlots.length; i++) {
        const slot = dynamicSlots[i];
        // array of dynamic slot generated by <template v-for="..." #[...]>
        if (Object(shared_esm_bundler["o" /* isArray */])(slot)) {
            for (let j = 0; j < slot.length; j++) {
                slots[slot[j].name] = slot[j].fn;
            }
        }
        else if (slot) {
            // conditional single slot generated by <template v-if="..." #foo>
            slots[slot.name] = slot.fn;
        }
    }
    return slots;
}

/**
 * Compiler runtime helper for rendering `<slot/>`
 * @private
 */
function renderSlot(slots, name, props = {}, 
// this is not a user-facing function, so the fallback is always generated by
// the compiler and guaranteed to be a function returning an array
fallback, noSlotted) {
    if (currentRenderingInstance.isCE) {
        return createVNode('slot', name === 'default' ? null : { name }, fallback && fallback());
    }
    let slot = slots[name];
    if (false) {}
    // a compiled slot disables block tracking by default to avoid manual
    // invocation interfering with template-based block tracking, but in
    // `renderSlot` we can be sure that it's template-based so we can force
    // enable it.
    if (slot && slot._c) {
        slot._d = false;
    }
    openBlock();
    const validSlotContent = slot && ensureValidVNode(slot(props));
    const rendered = createBlock(Fragment, { key: props.key || `_${name}` }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 /* STABLE */
        ? 64 /* STABLE_FRAGMENT */
        : -2 /* BAIL */);
    if (!noSlotted && rendered.scopeId) {
        rendered.slotScopeIds = [rendered.scopeId + '-s'];
    }
    if (slot && slot._c) {
        slot._d = true;
    }
    return rendered;
}
function ensureValidVNode(vnodes) {
    return vnodes.some(child => {
        if (!isVNode(child))
            return true;
        if (child.type === runtime_core_esm_bundler_Comment)
            return false;
        if (child.type === Fragment &&
            !ensureValidVNode(child.children))
            return false;
        return true;
    })
        ? vnodes
        : null;
}

/**
 * For prefixing keys in v-on="obj" with "on"
 * @private
 */
function toHandlers(obj) {
    const ret = {};
    if (false) {}
    for (const key in obj) {
        ret[Object(shared_esm_bundler["N" /* toHandlerKey */])(key)] = obj[key];
    }
    return ret;
}

/**
 * #2437 In Vue 3, functional components do not have a public instance proxy but
 * they exist in the internal parent chain. For code that relies on traversing
 * public $parent chains, skip functional ones and go to the parent instead.
 */
const getPublicInstance = (i) => {
    if (!i)
        return null;
    if (isStatefulComponent(i))
        return getExposeProxy(i) || i.proxy;
    return getPublicInstance(i.parent);
};
const publicPropertiesMap = Object(shared_esm_bundler["h" /* extend */])(Object.create(null), {
    $: i => i,
    $el: i => i.vnode.el,
    $data: i => i.data,
    $props: i => (( false) ? undefined : i.props),
    $attrs: i => (( false) ? undefined : i.attrs),
    $slots: i => (( false) ? undefined : i.slots),
    $refs: i => (( false) ? undefined : i.refs),
    $parent: i => getPublicInstance(i.parent),
    $root: i => getPublicInstance(i.root),
    $emit: i => i.emit,
    $options: i => (__VUE_OPTIONS_API__ ? resolveMergedOptions(i) : i.type),
    $forceUpdate: i => () => queueJob(i.update),
    $nextTick: i => nextTick.bind(i.proxy),
    $watch: i => (__VUE_OPTIONS_API__ ? instanceWatch.bind(i) : shared_esm_bundler["d" /* NOOP */])
});
const PublicInstanceProxyHandlers = {
    get({ _: instance }, key) {
        const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
        // for internal formatters to know that this is a Vue instance
        if (false) {}
        // prioritize <script setup> bindings during dev.
        // this allows even properties that start with _ or $ to be used - so that
        // it aligns with the production behavior where the render fn is inlined and
        // indeed has access to all declared variables.
        if (false) {}
        // data / props / ctx
        // This getter gets called for every property access on the render context
        // during render and is a major hotspot. The most expensive part of this
        // is the multiple hasOwn() calls. It's much faster to do a simple property
        // access on a plain object, so we use an accessCache object (with null
        // prototype) to memoize what access type a key corresponds to.
        let normalizedProps;
        if (key[0] !== '$') {
            const n = accessCache[key];
            if (n !== undefined) {
                switch (n) {
                    case 1 /* SETUP */:
                        return setupState[key];
                    case 2 /* DATA */:
                        return data[key];
                    case 4 /* CONTEXT */:
                        return ctx[key];
                    case 3 /* PROPS */:
                        return props[key];
                    // default: just fallthrough
                }
            }
            else if (setupState !== shared_esm_bundler["b" /* EMPTY_OBJ */] && Object(shared_esm_bundler["k" /* hasOwn */])(setupState, key)) {
                accessCache[key] = 1 /* SETUP */;
                return setupState[key];
            }
            else if (data !== shared_esm_bundler["b" /* EMPTY_OBJ */] && Object(shared_esm_bundler["k" /* hasOwn */])(data, key)) {
                accessCache[key] = 2 /* DATA */;
                return data[key];
            }
            else if (
            // only cache other properties when instance has declared (thus stable)
            // props
            (normalizedProps = instance.propsOptions[0]) &&
                Object(shared_esm_bundler["k" /* hasOwn */])(normalizedProps, key)) {
                accessCache[key] = 3 /* PROPS */;
                return props[key];
            }
            else if (ctx !== shared_esm_bundler["b" /* EMPTY_OBJ */] && Object(shared_esm_bundler["k" /* hasOwn */])(ctx, key)) {
                accessCache[key] = 4 /* CONTEXT */;
                return ctx[key];
            }
            else if (!__VUE_OPTIONS_API__ || shouldCacheAccess) {
                accessCache[key] = 0 /* OTHER */;
            }
        }
        const publicGetter = publicPropertiesMap[key];
        let cssModule, globalProperties;
        // public $xxx properties
        if (publicGetter) {
            if (key === '$attrs') {
                track(instance, "get" /* GET */, key);
                ( false) && false;
            }
            return publicGetter(instance);
        }
        else if (
        // css module (injected by vue-loader)
        (cssModule = type.__cssModules) &&
            (cssModule = cssModule[key])) {
            return cssModule;
        }
        else if (ctx !== shared_esm_bundler["b" /* EMPTY_OBJ */] && Object(shared_esm_bundler["k" /* hasOwn */])(ctx, key)) {
            // user may set custom properties to `this` that start with `$`
            accessCache[key] = 4 /* CONTEXT */;
            return ctx[key];
        }
        else if (
        // global properties
        ((globalProperties = appContext.config.globalProperties),
            Object(shared_esm_bundler["k" /* hasOwn */])(globalProperties, key))) {
            {
                return globalProperties[key];
            }
        }
        else if (false) {}
    },
    set({ _: instance }, key, value) {
        const { data, setupState, ctx } = instance;
        if (setupState !== shared_esm_bundler["b" /* EMPTY_OBJ */] && Object(shared_esm_bundler["k" /* hasOwn */])(setupState, key)) {
            setupState[key] = value;
            return true;
        }
        else if (data !== shared_esm_bundler["b" /* EMPTY_OBJ */] && Object(shared_esm_bundler["k" /* hasOwn */])(data, key)) {
            data[key] = value;
            return true;
        }
        else if (Object(shared_esm_bundler["k" /* hasOwn */])(instance.props, key)) {
            ( false) &&
                false;
            return false;
        }
        if (key[0] === '$' && key.slice(1) in instance) {
            ( false) &&
                false;
            return false;
        }
        else {
            if (false) {}
            else {
                ctx[key] = value;
            }
        }
        return true;
    },
    has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
        let normalizedProps;
        return (!!accessCache[key] ||
            (data !== shared_esm_bundler["b" /* EMPTY_OBJ */] && Object(shared_esm_bundler["k" /* hasOwn */])(data, key)) ||
            (setupState !== shared_esm_bundler["b" /* EMPTY_OBJ */] && Object(shared_esm_bundler["k" /* hasOwn */])(setupState, key)) ||
            ((normalizedProps = propsOptions[0]) && Object(shared_esm_bundler["k" /* hasOwn */])(normalizedProps, key)) ||
            Object(shared_esm_bundler["k" /* hasOwn */])(ctx, key) ||
            Object(shared_esm_bundler["k" /* hasOwn */])(publicPropertiesMap, key) ||
            Object(shared_esm_bundler["k" /* hasOwn */])(appContext.config.globalProperties, key));
    },
    defineProperty(target, key, descriptor) {
        if (descriptor.get != null) {
            this.set(target, key, descriptor.get(), null);
        }
        else if (descriptor.value != null) {
            this.set(target, key, descriptor.value, null);
        }
        return Reflect.defineProperty(target, key, descriptor);
    }
};
if (false) {}
const RuntimeCompiledPublicInstanceProxyHandlers = /*#__PURE__*/ Object(shared_esm_bundler["h" /* extend */])({}, PublicInstanceProxyHandlers, {
    get(target, key) {
        // fast path for unscopables when using `with` block
        if (key === Symbol.unscopables) {
            return;
        }
        return PublicInstanceProxyHandlers.get(target, key, target);
    },
    has(_, key) {
        const has = key[0] !== '_' && !Object(shared_esm_bundler["r" /* isGloballyWhitelisted */])(key);
        if (false) {}
        return has;
    }
});
// dev only
// In dev mode, the proxy target exposes the same properties as seen on `this`
// for easier console inspection. In prod mode it will be an empty object so
// these properties definitions can be skipped.
function createDevRenderContext(instance) {
    const target = {};
    // expose internal instance for proxy handlers
    Object.defineProperty(target, `_`, {
        configurable: true,
        enumerable: false,
        get: () => instance
    });
    // expose public properties
    Object.keys(publicPropertiesMap).forEach(key => {
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: false,
            get: () => publicPropertiesMap[key](instance),
            // intercepted by the proxy so no need for implementation,
            // but needed to prevent set errors
            set: shared_esm_bundler["d" /* NOOP */]
        });
    });
    return target;
}
// dev only
function exposePropsOnRenderContext(instance) {
    const { ctx, propsOptions: [propsOptions] } = instance;
    if (propsOptions) {
        Object.keys(propsOptions).forEach(key => {
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: () => instance.props[key],
                set: shared_esm_bundler["d" /* NOOP */]
            });
        });
    }
}
// dev only
function exposeSetupStateOnRenderContext(instance) {
    const { ctx, setupState } = instance;
    Object.keys(toRaw(setupState)).forEach(key => {
        if (!setupState.__isScriptSetup) {
            if (key[0] === '$' || key[0] === '_') {
                runtime_core_esm_bundler_warn(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" ` +
                    `which are reserved prefixes for Vue internals.`);
                return;
            }
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: () => setupState[key],
                set: shared_esm_bundler["d" /* NOOP */]
            });
        }
    });
}

const emptyAppContext = createAppContext();
let uid$1 = 0;
function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    // inherit parent app context - or - if root, adopt from root vnode
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
        uid: uid$1++,
        vnode,
        type,
        parent,
        appContext,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new EffectScope(true /* detached */),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: parent ? parent.provides : Object.create(appContext.provides),
        accessCache: null,
        renderCache: [],
        // local resovled assets
        components: null,
        directives: null,
        // resolved props and emits options
        propsOptions: normalizePropsOptions(type, appContext),
        emitsOptions: normalizeEmitsOptions(type, appContext),
        // emit
        emit: null,
        emitted: null,
        // props default value
        propsDefaults: shared_esm_bundler["b" /* EMPTY_OBJ */],
        // inheritAttrs
        inheritAttrs: type.inheritAttrs,
        // state
        ctx: shared_esm_bundler["b" /* EMPTY_OBJ */],
        data: shared_esm_bundler["b" /* EMPTY_OBJ */],
        props: shared_esm_bundler["b" /* EMPTY_OBJ */],
        attrs: shared_esm_bundler["b" /* EMPTY_OBJ */],
        slots: shared_esm_bundler["b" /* EMPTY_OBJ */],
        refs: shared_esm_bundler["b" /* EMPTY_OBJ */],
        setupState: shared_esm_bundler["b" /* EMPTY_OBJ */],
        setupContext: null,
        // suspense related
        suspense,
        suspenseId: suspense ? suspense.pendingId : 0,
        asyncDep: null,
        asyncResolved: false,
        // lifecycle hooks
        // not using enums here because it results in computed properties
        isMounted: false,
        isUnmounted: false,
        isDeactivated: false,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    if ((false)) {}
    else {
        instance.ctx = { _: instance };
    }
    instance.root = parent ? parent.root : instance;
    instance.emit = emit$1.bind(null, instance);
    // apply custom element special handling
    if (vnode.ce) {
        vnode.ce(instance);
    }
    return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
const setCurrentInstance = (instance) => {
    currentInstance = instance;
    instance.scope.on();
};
const unsetCurrentInstance = () => {
    currentInstance && currentInstance.scope.off();
    currentInstance = null;
};
const isBuiltInTag = /*#__PURE__*/ Object(shared_esm_bundler["I" /* makeMap */])('slot,component');
function validateComponentName(name, config) {
    const appIsNativeTag = config.isNativeTag || shared_esm_bundler["c" /* NO */];
    if (isBuiltInTag(name) || appIsNativeTag(name)) {
        runtime_core_esm_bundler_warn('Do not use built-in or reserved HTML elements as component id: ' + name);
    }
}
function isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
    isInSSRComponentSetup = isSSR;
    const { props, children } = instance.vnode;
    const isStateful = isStatefulComponent(instance);
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children);
    const setupResult = isStateful
        ? setupStatefulComponent(instance, isSSR)
        : undefined;
    isInSSRComponentSetup = false;
    return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
    const Component = instance.type;
    if ((false)) {}
    // 0. create render proxy property access cache
    instance.accessCache = Object.create(null);
    // 1. create public instance / render proxy
    // also mark it raw so it's never observed
    instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
    if ((false)) {}
    // 2. call setup()
    const { setup } = Component;
    if (setup) {
        const setupContext = (instance.setupContext =
            setup.length > 1 ? createSetupContext(instance) : null);
        setCurrentInstance(instance);
        pauseTracking();
        const setupResult = callWithErrorHandling(setup, instance, 0 /* SETUP_FUNCTION */, [( false) ? undefined : instance.props, setupContext]);
        resetTracking();
        unsetCurrentInstance();
        if (Object(shared_esm_bundler["z" /* isPromise */])(setupResult)) {
            setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
            if (isSSR) {
                // return the promise so server-renderer can wait on it
                return setupResult
                    .then((resolvedResult) => {
                    handleSetupResult(instance, resolvedResult, isSSR);
                })
                    .catch(e => {
                    handleError(e, instance, 0 /* SETUP_FUNCTION */);
                });
            }
            else {
                // async setup returned Promise.
                // bail here and wait for re-entry.
                instance.asyncDep = setupResult;
            }
        }
        else {
            handleSetupResult(instance, setupResult, isSSR);
        }
    }
    else {
        finishComponentSetup(instance, isSSR);
    }
}
function handleSetupResult(instance, setupResult, isSSR) {
    if (Object(shared_esm_bundler["q" /* isFunction */])(setupResult)) {
        // setup returned an inline render function
        if (instance.type.__ssrInlineRender) {
            // when the function's name is `ssrRender` (compiled by SFC inline mode),
            // set it as ssrRender instead.
            instance.ssrRender = setupResult;
        }
        else {
            instance.render = setupResult;
        }
    }
    else if (Object(shared_esm_bundler["w" /* isObject */])(setupResult)) {
        if (false) {}
        // setup returned bindings.
        // assuming a render function compiled from template is present.
        if (( false) || __VUE_PROD_DEVTOOLS__) {
            instance.devtoolsRawSetupState = setupResult;
        }
        instance.setupState = proxyRefs(setupResult);
        if ((false)) {}
    }
    else if (false) {}
    finishComponentSetup(instance, isSSR);
}
let compile;
let installWithProxy;
/**
 * For runtime-dom to register the compiler.
 * Note the exported method uses any to avoid d.ts relying on the compiler types.
 */
function registerRuntimeCompiler(_compile) {
    compile = _compile;
    installWithProxy = i => {
        if (i.render._rc) {
            i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
        }
    };
}
// dev only
const isRuntimeOnly = () => !compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
    const Component = instance.type;
    // template / render function normalization
    // could be already set when returned from setup()
    if (!instance.render) {
        // only do on-the-fly compile if not in SSR - SSR on-the-fly compilation
        // is done by server-renderer
        if (!isSSR && compile && !Component.render) {
            const template = Component.template;
            if (template) {
                if ((false)) {}
                const { isCustomElement, compilerOptions } = instance.appContext.config;
                const { delimiters, compilerOptions: componentCompilerOptions } = Component;
                const finalCompilerOptions = Object(shared_esm_bundler["h" /* extend */])(Object(shared_esm_bundler["h" /* extend */])({
                    isCustomElement,
                    delimiters
                }, compilerOptions), componentCompilerOptions);
                Component.render = compile(template, finalCompilerOptions);
                if ((false)) {}
            }
        }
        instance.render = (Component.render || shared_esm_bundler["d" /* NOOP */]);
        // for runtime-compiled render functions using `with` blocks, the render
        // proxy used needs a different `has` handler which is more performant and
        // also only allows a whitelist of globals to fallthrough.
        if (installWithProxy) {
            installWithProxy(instance);
        }
    }
    // support for 2.x options
    if (__VUE_OPTIONS_API__ && !(false )) {
        setCurrentInstance(instance);
        pauseTracking();
        applyOptions(instance);
        resetTracking();
        unsetCurrentInstance();
    }
    // warn missing template/render
    // the runtime compilation of template in SSR is done by server-render
    if (false) {}
}
function createAttrsProxy(instance) {
    return new Proxy(instance.attrs, ( false)
        ? undefined
        : {
            get(target, key) {
                track(instance, "get" /* GET */, '$attrs');
                return target[key];
            }
        });
}
function createSetupContext(instance) {
    const expose = exposed => {
        if (false) {}
        instance.exposed = exposed || {};
    };
    let attrs;
    if ((false)) {}
    else {
        return {
            get attrs() {
                return attrs || (attrs = createAttrsProxy(instance));
            },
            slots: instance.slots,
            emit: instance.emit,
            expose
        };
    }
}
function getExposeProxy(instance) {
    if (instance.exposed) {
        return (instance.exposeProxy ||
            (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
                get(target, key) {
                    if (key in target) {
                        return target[key];
                    }
                    else if (key in publicPropertiesMap) {
                        return publicPropertiesMap[key](instance);
                    }
                }
            })));
    }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, c => c.toUpperCase()).replace(/[-_]/g, '');
function getComponentName(Component) {
    return Object(shared_esm_bundler["q" /* isFunction */])(Component)
        ? Component.displayName || Component.name
        : Component.name;
}
/* istanbul ignore next */
function formatComponentName(instance, Component, isRoot = false) {
    let name = getComponentName(Component);
    if (!name && Component.__file) {
        const match = Component.__file.match(/([^/\\]+)\.\w+$/);
        if (match) {
            name = match[1];
        }
    }
    if (!name && instance && instance.parent) {
        // try to infer the name based on reverse resolution
        const inferFromRegistry = (registry) => {
            for (const key in registry) {
                if (registry[key] === Component) {
                    return key;
                }
            }
        };
        name =
            inferFromRegistry(instance.components ||
                instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
    }
    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
    return Object(shared_esm_bundler["q" /* isFunction */])(value) && '__vccOpts' in value;
}

const runtime_core_esm_bundler_computed = ((getterOrOptions, debugOptions) => {
    // @ts-ignore
    return reactivity_esm_bundler_computed(getterOrOptions, debugOptions, isInSSRComponentSetup);
});

// dev only
const warnRuntimeUsage = (method) => runtime_core_esm_bundler_warn(`${method}() is a compiler-hint helper that is only usable inside ` +
    `<script setup> of a single file component. Its arguments should be ` +
    `compiled away and passing it at runtime has no effect.`);
// implementation
function defineProps() {
    if ((false)) {}
    return null;
}
// implementation
function defineEmits() {
    if ((false)) {}
    return null;
}
/**
 * Vue `<script setup>` compiler macro for declaring a component's exposed
 * instance properties when it is accessed by a parent component via template
 * refs.
 *
 * `<script setup>` components are closed by default - i.e. variables inside
 * the `<script setup>` scope is not exposed to parent unless explicitly exposed
 * via `defineExpose`.
 *
 * This is only usable inside `<script setup>`, is compiled away in the
 * output and should **not** be actually called at runtime.
 */
function defineExpose(exposed) {
    if ((false)) {}
}
/**
 * Vue `<script setup>` compiler macro for providing props default values when
 * using type-based `defineProps` declaration.
 *
 * Example usage:
 * ```ts
 * withDefaults(defineProps<{
 *   size?: number
 *   labels?: string[]
 * }>(), {
 *   size: 3,
 *   labels: () => ['default label']
 * })
 * ```
 *
 * This is only usable inside `<script setup>`, is compiled away in the output
 * and should **not** be actually called at runtime.
 */
function withDefaults(props, defaults) {
    if ((false)) {}
    return null;
}
function useSlots() {
    return getContext().slots;
}
function useAttrs() {
    return getContext().attrs;
}
function getContext() {
    const i = getCurrentInstance();
    if (false) {}
    return i.setupContext || (i.setupContext = createSetupContext(i));
}
/**
 * Runtime helper for merging default declarations. Imported by compiled code
 * only.
 * @internal
 */
function mergeDefaults(raw, defaults) {
    const props = Object(shared_esm_bundler["o" /* isArray */])(raw)
        ? raw.reduce((normalized, p) => ((normalized[p] = {}), normalized), {})
        : raw;
    for (const key in defaults) {
        const opt = props[key];
        if (opt) {
            if (Object(shared_esm_bundler["o" /* isArray */])(opt) || Object(shared_esm_bundler["q" /* isFunction */])(opt)) {
                props[key] = { type: opt, default: defaults[key] };
            }
            else {
                opt.default = defaults[key];
            }
        }
        else if (opt === null) {
            props[key] = { default: defaults[key] };
        }
        else if ((false)) {}
    }
    return props;
}
/**
 * Used to create a proxy for the rest element when destructuring props with
 * defineProps().
 * @internal
 */
function createPropsRestProxy(props, excludedKeys) {
    const ret = {};
    for (const key in props) {
        if (!excludedKeys.includes(key)) {
            Object.defineProperty(ret, key, {
                enumerable: true,
                get: () => props[key]
            });
        }
    }
    return ret;
}
/**
 * `<script setup>` helper for persisting the current instance context over
 * async/await flows.
 *
 * `@vue/compiler-sfc` converts the following:
 *
 * ```ts
 * const x = await foo()
 * ```
 *
 * into:
 *
 * ```ts
 * let __temp, __restore
 * const x = (([__temp, __restore] = withAsyncContext(() => foo())),__temp=await __temp,__restore(),__temp)
 * ```
 * @internal
 */
function withAsyncContext(getAwaitable) {
    const ctx = getCurrentInstance();
    if (false) {}
    let awaitable = getAwaitable();
    unsetCurrentInstance();
    if (Object(shared_esm_bundler["z" /* isPromise */])(awaitable)) {
        awaitable = awaitable.catch(e => {
            setCurrentInstance(ctx);
            throw e;
        });
    }
    return [awaitable, () => setCurrentInstance(ctx)];
}

// Actual implementation
function h(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
        if (Object(shared_esm_bundler["w" /* isObject */])(propsOrChildren) && !Object(shared_esm_bundler["o" /* isArray */])(propsOrChildren)) {
            // single vnode without props
            if (isVNode(propsOrChildren)) {
                return createVNode(type, null, [propsOrChildren]);
            }
            // props without children
            return createVNode(type, propsOrChildren);
        }
        else {
            // omit props
            return createVNode(type, null, propsOrChildren);
        }
    }
    else {
        if (l > 3) {
            children = Array.prototype.slice.call(arguments, 2);
        }
        else if (l === 3 && isVNode(children)) {
            children = [children];
        }
        return createVNode(type, propsOrChildren, children);
    }
}

const ssrContextKey = Symbol(( false) ? undefined : ``);
const useSSRContext = () => {
    {
        const ctx = inject(ssrContextKey);
        if (!ctx) {
            runtime_core_esm_bundler_warn(`Server rendering context not provided. Make sure to only call ` +
                `useSSRContext() conditionally in the server build.`);
        }
        return ctx;
    }
};

function runtime_core_esm_bundler_isShallow(value) {
    return !!(value && value["__v_isShallow" /* IS_SHALLOW */]);
}

function initCustomFormatter() {
    /* eslint-disable no-restricted-globals */
    if (true) {
        return;
    }
    const vueStyle = { style: 'color:#3ba776' };
    const numberStyle = { style: 'color:#0b1bc9' };
    const stringStyle = { style: 'color:#b62e24' };
    const keywordStyle = { style: 'color:#9d288c' };
    // custom formatter for Chrome
    // https://www.mattzeunert.com/2016/02/19/custom-chrome-devtools-object-formatters.html
    const formatter = {
        header(obj) {
            // TODO also format ComponentPublicInstance & ctx.slots/attrs in setup
            if (!Object(shared_esm_bundler["w" /* isObject */])(obj)) {
                return null;
            }
            if (obj.__isVue) {
                return ['div', vueStyle, `VueInstance`];
            }
            else if (isRef(obj)) {
                return [
                    'div',
                    {},
                    ['span', vueStyle, genRefFlag(obj)],
                    '<',
                    formatValue(obj.value),
                    `>`
                ];
            }
            else if (isReactive(obj)) {
                return [
                    'div',
                    {},
                    ['span', vueStyle, runtime_core_esm_bundler_isShallow(obj) ? 'ShallowReactive' : 'Reactive'],
                    '<',
                    formatValue(obj),
                    `>${reactivity_esm_bundler_isReadonly(obj) ? ` (readonly)` : ``}`
                ];
            }
            else if (reactivity_esm_bundler_isReadonly(obj)) {
                return [
                    'div',
                    {},
                    ['span', vueStyle, runtime_core_esm_bundler_isShallow(obj) ? 'ShallowReadonly' : 'Readonly'],
                    '<',
                    formatValue(obj),
                    '>'
                ];
            }
            return null;
        },
        hasBody(obj) {
            return obj && obj.__isVue;
        },
        body(obj) {
            if (obj && obj.__isVue) {
                return [
                    'div',
                    {},
                    ...formatInstance(obj.$)
                ];
            }
        }
    };
    function formatInstance(instance) {
        const blocks = [];
        if (instance.type.props && instance.props) {
            blocks.push(createInstanceBlock('props', toRaw(instance.props)));
        }
        if (instance.setupState !== shared_esm_bundler["b" /* EMPTY_OBJ */]) {
            blocks.push(createInstanceBlock('setup', instance.setupState));
        }
        if (instance.data !== shared_esm_bundler["b" /* EMPTY_OBJ */]) {
            blocks.push(createInstanceBlock('data', toRaw(instance.data)));
        }
        const computed = extractKeys(instance, 'computed');
        if (computed) {
            blocks.push(createInstanceBlock('computed', computed));
        }
        const injected = extractKeys(instance, 'inject');
        if (injected) {
            blocks.push(createInstanceBlock('injected', injected));
        }
        blocks.push([
            'div',
            {},
            [
                'span',
                {
                    style: keywordStyle.style + ';opacity:0.66'
                },
                '$ (internal): '
            ],
            ['object', { object: instance }]
        ]);
        return blocks;
    }
    function createInstanceBlock(type, target) {
        target = Object(shared_esm_bundler["h" /* extend */])({}, target);
        if (!Object.keys(target).length) {
            return ['span', {}];
        }
        return [
            'div',
            { style: 'line-height:1.25em;margin-bottom:0.6em' },
            [
                'div',
                {
                    style: 'color:#476582'
                },
                type
            ],
            [
                'div',
                {
                    style: 'padding-left:1.25em'
                },
                ...Object.keys(target).map(key => {
                    return [
                        'div',
                        {},
                        ['span', keywordStyle, key + ': '],
                        formatValue(target[key], false)
                    ];
                })
            ]
        ];
    }
    function formatValue(v, asRaw = true) {
        if (typeof v === 'number') {
            return ['span', numberStyle, v];
        }
        else if (typeof v === 'string') {
            return ['span', stringStyle, JSON.stringify(v)];
        }
        else if (typeof v === 'boolean') {
            return ['span', keywordStyle, v];
        }
        else if (Object(shared_esm_bundler["w" /* isObject */])(v)) {
            return ['object', { object: asRaw ? toRaw(v) : v }];
        }
        else {
            return ['span', stringStyle, String(v)];
        }
    }
    function extractKeys(instance, type) {
        const Comp = instance.type;
        if (Object(shared_esm_bundler["q" /* isFunction */])(Comp)) {
            return;
        }
        const extracted = {};
        for (const key in instance.ctx) {
            if (isKeyOfType(Comp, key, type)) {
                extracted[key] = instance.ctx[key];
            }
        }
        return extracted;
    }
    function isKeyOfType(Comp, key, type) {
        const opts = Comp[type];
        if ((Object(shared_esm_bundler["o" /* isArray */])(opts) && opts.includes(key)) ||
            (Object(shared_esm_bundler["w" /* isObject */])(opts) && key in opts)) {
            return true;
        }
        if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
            return true;
        }
        if (Comp.mixins && Comp.mixins.some(m => isKeyOfType(m, key, type))) {
            return true;
        }
    }
    function genRefFlag(v) {
        if (runtime_core_esm_bundler_isShallow(v)) {
            return `ShallowRef`;
        }
        if (v.effect) {
            return `ComputedRef`;
        }
        return `Ref`;
    }
    if (window.devtoolsFormatters) {
        window.devtoolsFormatters.push(formatter);
    }
    else {
        window.devtoolsFormatters = [formatter];
    }
}

function withMemo(memo, render, cache, index) {
    const cached = cache[index];
    if (cached && isMemoSame(cached, memo)) {
        return cached;
    }
    const ret = render();
    // shallow clone
    ret.memo = memo.slice();
    return (cache[index] = ret);
}
function isMemoSame(cached, memo) {
    const prev = cached.memo;
    if (prev.length != memo.length) {
        return false;
    }
    for (let i = 0; i < prev.length; i++) {
        if (prev[i] !== memo[i]) {
            return false;
        }
    }
    // make sure to let parent block track it when returning cached
    if (isBlockTreeEnabled > 0 && currentBlock) {
        currentBlock.push(cached);
    }
    return true;
}

// Core API ------------------------------------------------------------------
const version = "3.2.31";
const _ssrUtils = {
    createComponentInstance,
    setupComponent,
    renderComponentRoot,
    setCurrentRenderingInstance,
    isVNode,
    normalizeVNode
};
/**
 * SSR utils for \@vue/server-renderer. Only exposed in cjs builds.
 * @internal
 */
const ssrUtils = (_ssrUtils );
/**
 * @internal only exposed in compat builds
 */
const resolveFilter = null;
/**
 * @internal only exposed in compat builds.
 */
const compatUtils = (null);



// CONCATENATED MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js




const svgNS = 'http://www.w3.org/2000/svg';
const doc = (typeof document !== 'undefined' ? document : null);
const templateContainer = doc && doc.createElement('template');
const nodeOps = {
    insert: (child, parent, anchor) => {
        parent.insertBefore(child, anchor || null);
    },
    remove: child => {
        const parent = child.parentNode;
        if (parent) {
            parent.removeChild(child);
        }
    },
    createElement: (tag, isSVG, is, props) => {
        const el = isSVG
            ? doc.createElementNS(svgNS, tag)
            : doc.createElement(tag, is ? { is } : undefined);
        if (tag === 'select' && props && props.multiple != null) {
            el.setAttribute('multiple', props.multiple);
        }
        return el;
    },
    createText: text => doc.createTextNode(text),
    createComment: text => doc.createComment(text),
    setText: (node, text) => {
        node.nodeValue = text;
    },
    setElementText: (el, text) => {
        el.textContent = text;
    },
    parentNode: node => node.parentNode,
    nextSibling: node => node.nextSibling,
    querySelector: selector => doc.querySelector(selector),
    setScopeId(el, id) {
        el.setAttribute(id, '');
    },
    cloneNode(el) {
        const cloned = el.cloneNode(true);
        // #3072
        // - in `patchDOMProp`, we store the actual value in the `el._value` property.
        // - normally, elements using `:value` bindings will not be hoisted, but if
        //   the bound value is a constant, e.g. `:value="true"` - they do get
        //   hoisted.
        // - in production, hoisted nodes are cloned when subsequent inserts, but
        //   cloneNode() does not copy the custom property we attached.
        // - This may need to account for other custom DOM properties we attach to
        //   elements in addition to `_value` in the future.
        if (`_value` in el) {
            cloned._value = el._value;
        }
        return cloned;
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent(content, parent, anchor, isSVG, start, end) {
        // <parent> before | first ... last | anchor </parent>
        const before = anchor ? anchor.previousSibling : parent.lastChild;
        // #5308 can only take cached path if:
        // - has a single root node
        // - nextSibling info is still available
        if (start && (start === end || start.nextSibling)) {
            // cached
            while (true) {
                parent.insertBefore(start.cloneNode(true), anchor);
                if (start === end || !(start = start.nextSibling))
                    break;
            }
        }
        else {
            // fresh insert
            templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
            const template = templateContainer.content;
            if (isSVG) {
                // remove outer svg wrapper
                const wrapper = template.firstChild;
                while (wrapper.firstChild) {
                    template.appendChild(wrapper.firstChild);
                }
                template.removeChild(wrapper);
            }
            parent.insertBefore(template, anchor);
        }
        return [
            // first
            before ? before.nextSibling : parent.firstChild,
            // last
            anchor ? anchor.previousSibling : parent.lastChild
        ];
    }
};

// compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]
function patchClass(el, value, isSVG) {
    // directly setting className should be faster than setAttribute in theory
    // if this is an element during a transition, take the temporary transition
    // classes into account.
    const transitionClasses = el._vtc;
    if (transitionClasses) {
        value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(' ');
    }
    if (value == null) {
        el.removeAttribute('class');
    }
    else if (isSVG) {
        el.setAttribute('class', value);
    }
    else {
        el.className = value;
    }
}

function patchStyle(el, prev, next) {
    const style = el.style;
    const isCssString = Object(shared_esm_bundler["E" /* isString */])(next);
    if (next && !isCssString) {
        for (const key in next) {
            setStyle(style, key, next[key]);
        }
        if (prev && !Object(shared_esm_bundler["E" /* isString */])(prev)) {
            for (const key in prev) {
                if (next[key] == null) {
                    setStyle(style, key, '');
                }
            }
        }
    }
    else {
        const currentDisplay = style.display;
        if (isCssString) {
            if (prev !== next) {
                style.cssText = next;
            }
        }
        else if (prev) {
            el.removeAttribute('style');
        }
        // indicates that the `display` of the element is controlled by `v-show`,
        // so we always keep the current `display` value regardless of the `style`
        // value, thus handing over control to `v-show`.
        if ('_vod' in el) {
            style.display = currentDisplay;
        }
    }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
    if (Object(shared_esm_bundler["o" /* isArray */])(val)) {
        val.forEach(v => setStyle(style, name, v));
    }
    else {
        if (name.startsWith('--')) {
            // custom property definition
            style.setProperty(name, val);
        }
        else {
            const prefixed = autoPrefix(style, name);
            if (importantRE.test(val)) {
                // !important
                style.setProperty(Object(shared_esm_bundler["l" /* hyphenate */])(prefixed), val.replace(importantRE, ''), 'important');
            }
            else {
                style[prefixed] = val;
            }
        }
    }
}
const prefixes = ['Webkit', 'Moz', 'ms'];
const prefixCache = {};
function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) {
        return cached;
    }
    let name = Object(shared_esm_bundler["e" /* camelize */])(rawName);
    if (name !== 'filter' && name in style) {
        return (prefixCache[rawName] = name);
    }
    name = Object(shared_esm_bundler["f" /* capitalize */])(name);
    for (let i = 0; i < prefixes.length; i++) {
        const prefixed = prefixes[i] + name;
        if (prefixed in style) {
            return (prefixCache[rawName] = prefixed);
        }
    }
    return rawName;
}

const xlinkNS = 'http://www.w3.org/1999/xlink';
function patchAttr(el, key, value, isSVG, instance) {
    if (isSVG && key.startsWith('xlink:')) {
        if (value == null) {
            el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
        }
        else {
            el.setAttributeNS(xlinkNS, key, value);
        }
    }
    else {
        // note we are only checking boolean attributes that don't have a
        // corresponding dom prop of the same name here.
        const isBoolean = Object(shared_esm_bundler["D" /* isSpecialBooleanAttr */])(key);
        if (value == null || (isBoolean && !Object(shared_esm_bundler["m" /* includeBooleanAttr */])(value))) {
            el.removeAttribute(key);
        }
        else {
            el.setAttribute(key, isBoolean ? '' : value);
        }
    }
}

// __UNSAFE__
// functions. The user is responsible for using them with only trusted content.
function patchDOMProp(el, key, value, 
// the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren, parentComponent, parentSuspense, unmountChildren) {
    if (key === 'innerHTML' || key === 'textContent') {
        if (prevChildren) {
            unmountChildren(prevChildren, parentComponent, parentSuspense);
        }
        el[key] = value == null ? '' : value;
        return;
    }
    if (key === 'value' &&
        el.tagName !== 'PROGRESS' &&
        // custom elements may use _value internally
        !el.tagName.includes('-')) {
        // store value as _value as well since
        // non-string values will be stringified.
        el._value = value;
        const newValue = value == null ? '' : value;
        if (el.value !== newValue ||
            // #4956: always set for OPTION elements because its value falls back to
            // textContent if no value attribute is present. And setting .value for
            // OPTION has no side effect
            el.tagName === 'OPTION') {
            el.value = newValue;
        }
        if (value == null) {
            el.removeAttribute(key);
        }
        return;
    }
    if (value === '' || value == null) {
        const type = typeof el[key];
        if (type === 'boolean') {
            // e.g. <select multiple> compiles to { multiple: '' }
            el[key] = Object(shared_esm_bundler["m" /* includeBooleanAttr */])(value);
            return;
        }
        else if (value == null && type === 'string') {
            // e.g. <div :id="null">
            el[key] = '';
            el.removeAttribute(key);
            return;
        }
        else if (type === 'number') {
            // e.g. <img :width="null">
            // the value of some IDL attr must be greater than 0, e.g. input.size = 0 -> error
            try {
                el[key] = 0;
            }
            catch (_a) { }
            el.removeAttribute(key);
            return;
        }
    }
    // some properties perform value validation and throw
    try {
        el[key] = value;
    }
    catch (e) {
        if ((false)) {}
    }
}

// Async edge case fix requires storing an event listener's attach timestamp.
let _getNow = Date.now;
let skipTimestampCheck = false;
if (typeof window !== 'undefined') {
    // Determine what event timestamp the browser is using. Annoyingly, the
    // timestamp can either be hi-res (relative to page load) or low-res
    // (relative to UNIX epoch), so in order to compare time we have to use the
    // same timestamp type when saving the flush timestamp.
    if (_getNow() > document.createEvent('Event').timeStamp) {
        // if the low-res timestamp which is bigger than the event timestamp
        // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
        // and we need to use the hi-res version for event listeners as well.
        _getNow = () => performance.now();
    }
    // #3485: Firefox <= 53 has incorrect Event.timeStamp implementation
    // and does not fire microtasks in between event propagation, so safe to exclude.
    const ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
    skipTimestampCheck = !!(ffMatch && Number(ffMatch[1]) <= 53);
}
// To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.
let cachedNow = 0;
const runtime_dom_esm_bundler_p = Promise.resolve();
const runtime_dom_esm_bundler_reset = () => {
    cachedNow = 0;
};
const getNow = () => cachedNow || (runtime_dom_esm_bundler_p.then(runtime_dom_esm_bundler_reset), (cachedNow = _getNow()));
function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    // vei = vue event invokers
    const invokers = el._vei || (el._vei = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) {
        // patch
        existingInvoker.value = nextValue;
    }
    else {
        const [name, options] = parseName(rawName);
        if (nextValue) {
            // add
            const invoker = (invokers[rawName] = createInvoker(nextValue, instance));
            addEventListener(el, name, invoker, options);
        }
        else if (existingInvoker) {
            // remove
            removeEventListener(el, name, existingInvoker, options);
            invokers[rawName] = undefined;
        }
    }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
        options = {};
        let m;
        while ((m = name.match(optionsModifierRE))) {
            name = name.slice(0, name.length - m[0].length);
            options[m[0].toLowerCase()] = true;
        }
    }
    return [Object(shared_esm_bundler["l" /* hyphenate */])(name.slice(2)), options];
}
function createInvoker(initialValue, instance) {
    const invoker = (e) => {
        // async edge case #6566: inner click event triggers patch, event handler
        // attached to outer element during patch, and triggered again. This
        // happens because browsers fire microtask ticks between event propagation.
        // the solution is simple: we save the timestamp when a handler is attached,
        // and the handler would only fire if the event passed to it was fired
        // AFTER it was attached.
        const timeStamp = e.timeStamp || _getNow();
        if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
            callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5 /* NATIVE_EVENT_HANDLER */, [e]);
        }
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
}
function patchStopImmediatePropagation(e, value) {
    if (Object(shared_esm_bundler["o" /* isArray */])(value)) {
        const originalStop = e.stopImmediatePropagation;
        e.stopImmediatePropagation = () => {
            originalStop.call(e);
            e._stopped = true;
        };
        return value.map(fn => (e) => !e._stopped && fn && fn(e));
    }
    else {
        return value;
    }
}

const nativeOnRE = /^on[a-z]/;
const runtime_dom_esm_bundler_patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
    if (key === 'class') {
        patchClass(el, nextValue, isSVG);
    }
    else if (key === 'style') {
        patchStyle(el, prevValue, nextValue);
    }
    else if (Object(shared_esm_bundler["x" /* isOn */])(key)) {
        // ignore v-model listeners
        if (!Object(shared_esm_bundler["v" /* isModelListener */])(key)) {
            patchEvent(el, key, prevValue, nextValue, parentComponent);
        }
    }
    else if (key[0] === '.'
        ? ((key = key.slice(1)), true)
        : key[0] === '^'
            ? ((key = key.slice(1)), false)
            : shouldSetAsProp(el, key, nextValue, isSVG)) {
        patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
    }
    else {
        // special case for <input v-model type="checkbox"> with
        // :true-value & :false-value
        // store value as dom properties since non-string values will be
        // stringified.
        if (key === 'true-value') {
            el._trueValue = nextValue;
        }
        else if (key === 'false-value') {
            el._falseValue = nextValue;
        }
        patchAttr(el, key, nextValue, isSVG);
    }
};
function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
        // most keys must be set as attribute on svg elements to work
        // ...except innerHTML & textContent
        if (key === 'innerHTML' || key === 'textContent') {
            return true;
        }
        // or native onclick with function values
        if (key in el && nativeOnRE.test(key) && Object(shared_esm_bundler["q" /* isFunction */])(value)) {
            return true;
        }
        return false;
    }
    // spellcheck and draggable are numerated attrs, however their
    // corresponding DOM properties are actually booleans - this leads to
    // setting it with a string "false" value leading it to be coerced to
    // `true`, so we need to always treat them as attributes.
    // Note that `contentEditable` doesn't have this problem: its DOM
    // property is also enumerated string values.
    if (key === 'spellcheck' || key === 'draggable') {
        return false;
    }
    // #1787, #2840 form property on form elements is readonly and must be set as
    // attribute.
    if (key === 'form') {
        return false;
    }
    // #1526 <input list> must be set as attribute
    if (key === 'list' && el.tagName === 'INPUT') {
        return false;
    }
    // #2766 <textarea type> must be set as attribute
    if (key === 'type' && el.tagName === 'TEXTAREA') {
        return false;
    }
    // native onclick with string value, must be set as attribute
    if (nativeOnRE.test(key) && Object(shared_esm_bundler["E" /* isString */])(value)) {
        return false;
    }
    return key in el;
}

function defineCustomElement(options, hydate) {
    const Comp = defineComponent(options);
    class VueCustomElement extends runtime_dom_esm_bundler_VueElement {
        constructor(initialProps) {
            super(Comp, initialProps, hydate);
        }
    }
    VueCustomElement.def = Comp;
    return VueCustomElement;
}
const defineSSRCustomElement = ((options) => {
    // @ts-ignore
    return defineCustomElement(options, runtime_dom_esm_bundler_hydrate);
});
const BaseClass = (typeof HTMLElement !== 'undefined' ? HTMLElement : class {
});
class runtime_dom_esm_bundler_VueElement extends BaseClass {
    constructor(_def, _props = {}, hydrate) {
        super();
        this._def = _def;
        this._props = _props;
        /**
         * @internal
         */
        this._instance = null;
        this._connected = false;
        this._resolved = false;
        this._numberProps = null;
        if (this.shadowRoot && hydrate) {
            hydrate(this._createVNode(), this.shadowRoot);
        }
        else {
            if (false) {}
            this.attachShadow({ mode: 'open' });
        }
    }
    connectedCallback() {
        this._connected = true;
        if (!this._instance) {
            this._resolveDef();
        }
    }
    disconnectedCallback() {
        this._connected = false;
        nextTick(() => {
            if (!this._connected) {
                runtime_dom_esm_bundler_render(null, this.shadowRoot);
                this._instance = null;
            }
        });
    }
    /**
     * resolve inner component definition (handle possible async component)
     */
    _resolveDef() {
        if (this._resolved) {
            return;
        }
        this._resolved = true;
        // set initial attrs
        for (let i = 0; i < this.attributes.length; i++) {
            this._setAttr(this.attributes[i].name);
        }
        // watch future attr changes
        new MutationObserver(mutations => {
            for (const m of mutations) {
                this._setAttr(m.attributeName);
            }
        }).observe(this, { attributes: true });
        const resolve = (def) => {
            const { props, styles } = def;
            const hasOptions = !Object(shared_esm_bundler["o" /* isArray */])(props);
            const rawKeys = props ? (hasOptions ? Object.keys(props) : props) : [];
            // cast Number-type props set before resolve
            let numberProps;
            if (hasOptions) {
                for (const key in this._props) {
                    const opt = props[key];
                    if (opt === Number || (opt && opt.type === Number)) {
                        this._props[key] = Object(shared_esm_bundler["O" /* toNumber */])(this._props[key]);
                        (numberProps || (numberProps = Object.create(null)))[key] = true;
                    }
                }
            }
            this._numberProps = numberProps;
            // check if there are props set pre-upgrade or connect
            for (const key of Object.keys(this)) {
                if (key[0] !== '_') {
                    this._setProp(key, this[key], true, false);
                }
            }
            // defining getter/setters on prototype
            for (const key of rawKeys.map(shared_esm_bundler["e" /* camelize */])) {
                Object.defineProperty(this, key, {
                    get() {
                        return this._getProp(key);
                    },
                    set(val) {
                        this._setProp(key, val);
                    }
                });
            }
            // apply CSS
            this._applyStyles(styles);
            // initial render
            this._update();
        };
        const asyncDef = this._def.__asyncLoader;
        if (asyncDef) {
            asyncDef().then(resolve);
        }
        else {
            resolve(this._def);
        }
    }
    _setAttr(key) {
        let value = this.getAttribute(key);
        if (this._numberProps && this._numberProps[key]) {
            value = Object(shared_esm_bundler["O" /* toNumber */])(value);
        }
        this._setProp(Object(shared_esm_bundler["e" /* camelize */])(key), value, false);
    }
    /**
     * @internal
     */
    _getProp(key) {
        return this._props[key];
    }
    /**
     * @internal
     */
    _setProp(key, val, shouldReflect = true, shouldUpdate = true) {
        if (val !== this._props[key]) {
            this._props[key] = val;
            if (shouldUpdate && this._instance) {
                this._update();
            }
            // reflect
            if (shouldReflect) {
                if (val === true) {
                    this.setAttribute(Object(shared_esm_bundler["l" /* hyphenate */])(key), '');
                }
                else if (typeof val === 'string' || typeof val === 'number') {
                    this.setAttribute(Object(shared_esm_bundler["l" /* hyphenate */])(key), val + '');
                }
                else if (!val) {
                    this.removeAttribute(Object(shared_esm_bundler["l" /* hyphenate */])(key));
                }
            }
        }
    }
    _update() {
        runtime_dom_esm_bundler_render(this._createVNode(), this.shadowRoot);
    }
    _createVNode() {
        const vnode = createVNode(this._def, Object(shared_esm_bundler["h" /* extend */])({}, this._props));
        if (!this._instance) {
            vnode.ce = instance => {
                this._instance = instance;
                instance.isCE = true;
                // HMR
                if ((false)) {}
                // intercept emit
                instance.emit = (event, ...args) => {
                    this.dispatchEvent(new CustomEvent(event, {
                        detail: args
                    }));
                };
                // locate nearest Vue custom element parent for provide/inject
                let parent = this;
                while ((parent =
                    parent && (parent.parentNode || parent.host))) {
                    if (parent instanceof runtime_dom_esm_bundler_VueElement) {
                        instance.parent = parent._instance;
                        break;
                    }
                }
            };
        }
        return vnode;
    }
    _applyStyles(styles) {
        if (styles) {
            styles.forEach(css => {
                const s = document.createElement('style');
                s.textContent = css;
                this.shadowRoot.appendChild(s);
                // record for HMR
                if ((false)) {}
            });
        }
    }
}

function useCssModule(name = '$style') {
    /* istanbul ignore else */
    {
        const instance = getCurrentInstance();
        if (!instance) {
            ( false) && false;
            return shared_esm_bundler["b" /* EMPTY_OBJ */];
        }
        const modules = instance.type.__cssModules;
        if (!modules) {
            ( false) && false;
            return shared_esm_bundler["b" /* EMPTY_OBJ */];
        }
        const mod = modules[name];
        if (!mod) {
            ( false) &&
                false;
            return shared_esm_bundler["b" /* EMPTY_OBJ */];
        }
        return mod;
    }
}

/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */
function useCssVars(getter) {
    const instance = getCurrentInstance();
    /* istanbul ignore next */
    if (!instance) {
        ( false) &&
            false;
        return;
    }
    const setVars = () => setVarsOnVNode(instance.subTree, getter(instance.proxy));
    watchPostEffect(setVars);
    onMounted(() => {
        const ob = new MutationObserver(setVars);
        ob.observe(instance.subTree.el.parentNode, { childList: true });
        onUnmounted(() => ob.disconnect());
    });
}
function setVarsOnVNode(vnode, vars) {
    if (vnode.shapeFlag & 128 /* SUSPENSE */) {
        const suspense = vnode.suspense;
        vnode = suspense.activeBranch;
        if (suspense.pendingBranch && !suspense.isHydrating) {
            suspense.effects.push(() => {
                setVarsOnVNode(suspense.activeBranch, vars);
            });
        }
    }
    // drill down HOCs until it's a non-component vnode
    while (vnode.component) {
        vnode = vnode.component.subTree;
    }
    if (vnode.shapeFlag & 1 /* ELEMENT */ && vnode.el) {
        setVarsOnNode(vnode.el, vars);
    }
    else if (vnode.type === Fragment) {
        vnode.children.forEach(c => setVarsOnVNode(c, vars));
    }
    else if (vnode.type === Static) {
        let { el, anchor } = vnode;
        while (el) {
            setVarsOnNode(el, vars);
            if (el === anchor)
                break;
            el = el.nextSibling;
        }
    }
}
function setVarsOnNode(el, vars) {
    if (el.nodeType === 1) {
        const style = el.style;
        for (const key in vars) {
            style.setProperty(`--${key}`, vars[key]);
        }
    }
}

const TRANSITION = 'transition';
const ANIMATION = 'animation';
// DOM Transition is a higher-order-component based on the platform-agnostic
// base Transition component, with DOM-specific logic.
const Transition = (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots);
Transition.displayName = 'Transition';
const DOMTransitionPropsValidators = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: true
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
const TransitionPropsValidators = (Transition.props =
    /*#__PURE__*/ Object(shared_esm_bundler["h" /* extend */])({}, BaseTransition.props, DOMTransitionPropsValidators));
/**
 * #3227 Incoming hooks may be merged into arrays when wrapping Transition
 * with custom HOCs.
 */
const runtime_dom_esm_bundler_callHook = (hook, args = []) => {
    if (Object(shared_esm_bundler["o" /* isArray */])(hook)) {
        hook.forEach(h => h(...args));
    }
    else if (hook) {
        hook(...args);
    }
};
/**
 * Check if a hook expects a callback (2nd arg), which means the user
 * intends to explicitly control the end of the transition.
 */
const hasExplicitCallback = (hook) => {
    return hook
        ? Object(shared_esm_bundler["o" /* isArray */])(hook)
            ? hook.some(h => h.length > 1)
            : hook.length > 1
        : false;
};
function resolveTransitionProps(rawProps) {
    const baseProps = {};
    for (const key in rawProps) {
        if (!(key in DOMTransitionPropsValidators)) {
            baseProps[key] = rawProps[key];
        }
    }
    if (rawProps.css === false) {
        return baseProps;
    }
    const { name = 'v', type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
    const durations = normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
    const finishEnter = (el, isAppear, done) => {
        removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
        removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
        done && done();
    };
    const finishLeave = (el, done) => {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
        done && done();
    };
    const makeEnterHook = (isAppear) => {
        return (el, done) => {
            const hook = isAppear ? onAppear : onEnter;
            const resolve = () => finishEnter(el, isAppear, done);
            runtime_dom_esm_bundler_callHook(hook, [el, resolve]);
            nextFrame(() => {
                removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
                addTransitionClass(el, isAppear ? appearToClass : enterToClass);
                if (!hasExplicitCallback(hook)) {
                    whenTransitionEnds(el, type, enterDuration, resolve);
                }
            });
        };
    };
    return Object(shared_esm_bundler["h" /* extend */])(baseProps, {
        onBeforeEnter(el) {
            runtime_dom_esm_bundler_callHook(onBeforeEnter, [el]);
            addTransitionClass(el, enterFromClass);
            addTransitionClass(el, enterActiveClass);
        },
        onBeforeAppear(el) {
            runtime_dom_esm_bundler_callHook(onBeforeAppear, [el]);
            addTransitionClass(el, appearFromClass);
            addTransitionClass(el, appearActiveClass);
        },
        onEnter: makeEnterHook(false),
        onAppear: makeEnterHook(true),
        onLeave(el, done) {
            const resolve = () => finishLeave(el, done);
            addTransitionClass(el, leaveFromClass);
            // force reflow so *-leave-from classes immediately take effect (#2593)
            forceReflow();
            addTransitionClass(el, leaveActiveClass);
            nextFrame(() => {
                removeTransitionClass(el, leaveFromClass);
                addTransitionClass(el, leaveToClass);
                if (!hasExplicitCallback(onLeave)) {
                    whenTransitionEnds(el, type, leaveDuration, resolve);
                }
            });
            runtime_dom_esm_bundler_callHook(onLeave, [el, resolve]);
        },
        onEnterCancelled(el) {
            finishEnter(el, false);
            runtime_dom_esm_bundler_callHook(onEnterCancelled, [el]);
        },
        onAppearCancelled(el) {
            finishEnter(el, true);
            runtime_dom_esm_bundler_callHook(onAppearCancelled, [el]);
        },
        onLeaveCancelled(el) {
            finishLeave(el);
            runtime_dom_esm_bundler_callHook(onLeaveCancelled, [el]);
        }
    });
}
function normalizeDuration(duration) {
    if (duration == null) {
        return null;
    }
    else if (Object(shared_esm_bundler["w" /* isObject */])(duration)) {
        return [NumberOf(duration.enter), NumberOf(duration.leave)];
    }
    else {
        const n = NumberOf(duration);
        return [n, n];
    }
}
function NumberOf(val) {
    const res = Object(shared_esm_bundler["O" /* toNumber */])(val);
    if ((false))
        {}
    return res;
}
function validateDuration(val) {
    if (typeof val !== 'number') {
        runtime_core_esm_bundler_warn(`<transition> explicit duration is not a valid number - ` +
            `got ${JSON.stringify(val)}.`);
    }
    else if (isNaN(val)) {
        runtime_core_esm_bundler_warn(`<transition> explicit duration is NaN - ` +
            'the duration expression might be incorrect.');
    }
}
function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach(c => c && el.classList.add(c));
    (el._vtc ||
        (el._vtc = new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach(c => c && el.classList.remove(c));
    const { _vtc } = el;
    if (_vtc) {
        _vtc.delete(cls);
        if (!_vtc.size) {
            el._vtc = undefined;
        }
    }
}
function nextFrame(cb) {
    requestAnimationFrame(() => {
        requestAnimationFrame(cb);
    });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
    const id = (el._endId = ++endId);
    const resolveIfNotStale = () => {
        if (id === el._endId) {
            resolve();
        }
    };
    if (explicitTimeout) {
        return setTimeout(resolveIfNotStale, explicitTimeout);
    }
    const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
    if (!type) {
        return resolve();
    }
    const endEvent = type + 'end';
    let ended = 0;
    const end = () => {
        el.removeEventListener(endEvent, onEnd);
        resolveIfNotStale();
    };
    const onEnd = (e) => {
        if (e.target === el && ++ended >= propCount) {
            end();
        }
    };
    setTimeout(() => {
        if (ended < propCount) {
            end();
        }
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    const getStyleProperties = (key) => (styles[key] || '').split(', ');
    const transitionDelays = getStyleProperties(TRANSITION + 'Delay');
    const transitionDurations = getStyleProperties(TRANSITION + 'Duration');
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(ANIMATION + 'Delay');
    const animationDurations = getStyleProperties(ANIMATION + 'Duration');
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
        }
    }
    else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
        }
    }
    else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type =
            timeout > 0
                ? transitionTimeout > animationTimeout
                    ? TRANSITION
                    : ANIMATION
                : null;
        propCount = type
            ? type === TRANSITION
                ? transitionDurations.length
                : animationDurations.length
            : 0;
    }
    const hasTransform = type === TRANSITION &&
        /\b(transform|all)(,|$)/.test(styles[TRANSITION + 'Property']);
    return {
        type,
        timeout,
        propCount,
        hasTransform
    };
}
function getTimeout(delays, durations) {
    while (delays.length < durations.length) {
        delays = delays.concat(delays);
    }
    return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
// Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors
function toMs(s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}
// synchronously force layout to put elements into a certain state
function forceReflow() {
    return document.body.offsetHeight;
}

const positionMap = new WeakMap();
const newPositionMap = new WeakMap();
const TransitionGroupImpl = {
    name: 'TransitionGroup',
    props: /*#__PURE__*/ Object(shared_esm_bundler["h" /* extend */])({}, TransitionPropsValidators, {
        tag: String,
        moveClass: String
    }),
    setup(props, { slots }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        let prevChildren;
        let children;
        onUpdated(() => {
            // children is guaranteed to exist after initial render
            if (!prevChildren.length) {
                return;
            }
            const moveClass = props.moveClass || `${props.name || 'v'}-move`;
            if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
                return;
            }
            // we divide the work into three loops to avoid mixing DOM reads and writes
            // in each iteration - which helps prevent layout thrashing.
            prevChildren.forEach(callPendingCbs);
            prevChildren.forEach(recordPosition);
            const movedChildren = prevChildren.filter(applyTranslation);
            // force reflow to put everything in position
            forceReflow();
            movedChildren.forEach(c => {
                const el = c.el;
                const style = el.style;
                addTransitionClass(el, moveClass);
                style.transform = style.webkitTransform = style.transitionDuration = '';
                const cb = (el._moveCb = (e) => {
                    if (e && e.target !== el) {
                        return;
                    }
                    if (!e || /transform$/.test(e.propertyName)) {
                        el.removeEventListener('transitionend', cb);
                        el._moveCb = null;
                        removeTransitionClass(el, moveClass);
                    }
                });
                el.addEventListener('transitionend', cb);
            });
        });
        return () => {
            const rawProps = toRaw(props);
            const cssTransitionProps = resolveTransitionProps(rawProps);
            let tag = rawProps.tag || Fragment;
            prevChildren = children;
            children = slots.default ? getTransitionRawChildren(slots.default()) : [];
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                if (child.key != null) {
                    setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
                }
                else if ((false)) {}
            }
            if (prevChildren) {
                for (let i = 0; i < prevChildren.length; i++) {
                    const child = prevChildren[i];
                    setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
                    positionMap.set(child, child.el.getBoundingClientRect());
                }
            }
            return createVNode(tag, null, children);
        };
    }
};
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
    const el = c.el;
    if (el._moveCb) {
        el._moveCb();
    }
    if (el._enterCb) {
        el._enterCb();
    }
}
function recordPosition(c) {
    newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
    const oldPos = positionMap.get(c);
    const newPos = newPositionMap.get(c);
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
        const s = c.el.style;
        s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
        s.transitionDuration = '0s';
        return c;
    }
}
function hasCSSTransform(el, root, moveClass) {
    // Detect whether an element with the move class applied has
    // CSS transitions. Since the element may be inside an entering
    // transition at this very moment, we make a clone of it and remove
    // all other transition classes applied to ensure only the move class
    // is applied.
    const clone = el.cloneNode();
    if (el._vtc) {
        el._vtc.forEach(cls => {
            cls.split(/\s+/).forEach(c => c && clone.classList.remove(c));
        });
    }
    moveClass.split(/\s+/).forEach(c => c && clone.classList.add(c));
    clone.style.display = 'none';
    const container = (root.nodeType === 1 ? root : root.parentNode);
    container.appendChild(clone);
    const { hasTransform } = getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
}

const getModelAssigner = (vnode) => {
    const fn = vnode.props['onUpdate:modelValue'];
    return Object(shared_esm_bundler["o" /* isArray */])(fn) ? value => Object(shared_esm_bundler["n" /* invokeArrayFns */])(fn, value) : fn;
};
function onCompositionStart(e) {
    e.target.composing = true;
}
function onCompositionEnd(e) {
    const target = e.target;
    if (target.composing) {
        target.composing = false;
        runtime_dom_esm_bundler_trigger(target, 'input');
    }
}
function runtime_dom_esm_bundler_trigger(el, type) {
    const e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
}
// We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.
const vModelText = {
    created(el, { modifiers: { lazy, trim, number } }, vnode) {
        el._assign = getModelAssigner(vnode);
        const castToNumber = number || (vnode.props && vnode.props.type === 'number');
        addEventListener(el, lazy ? 'change' : 'input', e => {
            if (e.target.composing)
                return;
            let domValue = el.value;
            if (trim) {
                domValue = domValue.trim();
            }
            else if (castToNumber) {
                domValue = Object(shared_esm_bundler["O" /* toNumber */])(domValue);
            }
            el._assign(domValue);
        });
        if (trim) {
            addEventListener(el, 'change', () => {
                el.value = el.value.trim();
            });
        }
        if (!lazy) {
            addEventListener(el, 'compositionstart', onCompositionStart);
            addEventListener(el, 'compositionend', onCompositionEnd);
            // Safari < 10.2 & UIWebView doesn't fire compositionend when
            // switching focus before confirming composition choice
            // this also fixes the issue where some browsers e.g. iOS Chrome
            // fires "change" instead of "input" on autocomplete.
            addEventListener(el, 'change', onCompositionEnd);
        }
    },
    // set value on mounted so it's after min/max for type="range"
    mounted(el, { value }) {
        el.value = value == null ? '' : value;
    },
    beforeUpdate(el, { value, modifiers: { lazy, trim, number } }, vnode) {
        el._assign = getModelAssigner(vnode);
        // avoid clearing unresolved text. #2302
        if (el.composing)
            return;
        if (document.activeElement === el) {
            if (lazy) {
                return;
            }
            if (trim && el.value.trim() === value) {
                return;
            }
            if ((number || el.type === 'number') && Object(shared_esm_bundler["O" /* toNumber */])(el.value) === value) {
                return;
            }
        }
        const newValue = value == null ? '' : value;
        if (el.value !== newValue) {
            el.value = newValue;
        }
    }
};
const vModelCheckbox = {
    // #4096 array checkboxes need to be deep traversed
    deep: true,
    created(el, _, vnode) {
        el._assign = getModelAssigner(vnode);
        addEventListener(el, 'change', () => {
            const modelValue = el._modelValue;
            const elementValue = getValue(el);
            const checked = el.checked;
            const assign = el._assign;
            if (Object(shared_esm_bundler["o" /* isArray */])(modelValue)) {
                const index = Object(shared_esm_bundler["H" /* looseIndexOf */])(modelValue, elementValue);
                const found = index !== -1;
                if (checked && !found) {
                    assign(modelValue.concat(elementValue));
                }
                else if (!checked && found) {
                    const filtered = [...modelValue];
                    filtered.splice(index, 1);
                    assign(filtered);
                }
            }
            else if (Object(shared_esm_bundler["C" /* isSet */])(modelValue)) {
                const cloned = new Set(modelValue);
                if (checked) {
                    cloned.add(elementValue);
                }
                else {
                    cloned.delete(elementValue);
                }
                assign(cloned);
            }
            else {
                assign(getCheckboxValue(el, checked));
            }
        });
    },
    // set initial checked on mount to wait for true-value/false-value
    mounted: setChecked,
    beforeUpdate(el, binding, vnode) {
        el._assign = getModelAssigner(vnode);
        setChecked(el, binding, vnode);
    }
};
function setChecked(el, { value, oldValue }, vnode) {
    el._modelValue = value;
    if (Object(shared_esm_bundler["o" /* isArray */])(value)) {
        el.checked = Object(shared_esm_bundler["H" /* looseIndexOf */])(value, vnode.props.value) > -1;
    }
    else if (Object(shared_esm_bundler["C" /* isSet */])(value)) {
        el.checked = value.has(vnode.props.value);
    }
    else if (value !== oldValue) {
        el.checked = Object(shared_esm_bundler["G" /* looseEqual */])(value, getCheckboxValue(el, true));
    }
}
const vModelRadio = {
    created(el, { value }, vnode) {
        el.checked = Object(shared_esm_bundler["G" /* looseEqual */])(value, vnode.props.value);
        el._assign = getModelAssigner(vnode);
        addEventListener(el, 'change', () => {
            el._assign(getValue(el));
        });
    },
    beforeUpdate(el, { value, oldValue }, vnode) {
        el._assign = getModelAssigner(vnode);
        if (value !== oldValue) {
            el.checked = Object(shared_esm_bundler["G" /* looseEqual */])(value, vnode.props.value);
        }
    }
};
const vModelSelect = {
    // <select multiple> value need to be deep traversed
    deep: true,
    created(el, { value, modifiers: { number } }, vnode) {
        const isSetModel = Object(shared_esm_bundler["C" /* isSet */])(value);
        addEventListener(el, 'change', () => {
            const selectedVal = Array.prototype.filter
                .call(el.options, (o) => o.selected)
                .map((o) => number ? Object(shared_esm_bundler["O" /* toNumber */])(getValue(o)) : getValue(o));
            el._assign(el.multiple
                ? isSetModel
                    ? new Set(selectedVal)
                    : selectedVal
                : selectedVal[0]);
        });
        el._assign = getModelAssigner(vnode);
    },
    // set value in mounted & updated because <select> relies on its children
    // <option>s.
    mounted(el, { value }) {
        setSelected(el, value);
    },
    beforeUpdate(el, _binding, vnode) {
        el._assign = getModelAssigner(vnode);
    },
    updated(el, { value }) {
        setSelected(el, value);
    }
};
function setSelected(el, value) {
    const isMultiple = el.multiple;
    if (isMultiple && !Object(shared_esm_bundler["o" /* isArray */])(value) && !Object(shared_esm_bundler["C" /* isSet */])(value)) {
        ( false) &&
            false;
        return;
    }
    for (let i = 0, l = el.options.length; i < l; i++) {
        const option = el.options[i];
        const optionValue = getValue(option);
        if (isMultiple) {
            if (Object(shared_esm_bundler["o" /* isArray */])(value)) {
                option.selected = Object(shared_esm_bundler["H" /* looseIndexOf */])(value, optionValue) > -1;
            }
            else {
                option.selected = value.has(optionValue);
            }
        }
        else {
            if (Object(shared_esm_bundler["G" /* looseEqual */])(getValue(option), value)) {
                if (el.selectedIndex !== i)
                    el.selectedIndex = i;
                return;
            }
        }
    }
    if (!isMultiple && el.selectedIndex !== -1) {
        el.selectedIndex = -1;
    }
}
// retrieve raw value set via :value bindings
function getValue(el) {
    return '_value' in el ? el._value : el.value;
}
// retrieve raw value for true-value and false-value set via :true-value or :false-value bindings
function getCheckboxValue(el, checked) {
    const key = checked ? '_trueValue' : '_falseValue';
    return key in el ? el[key] : checked;
}
const vModelDynamic = {
    created(el, binding, vnode) {
        callModelHook(el, binding, vnode, null, 'created');
    },
    mounted(el, binding, vnode) {
        callModelHook(el, binding, vnode, null, 'mounted');
    },
    beforeUpdate(el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, 'beforeUpdate');
    },
    updated(el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, 'updated');
    }
};
function callModelHook(el, binding, vnode, prevVNode, hook) {
    let modelToUse;
    switch (el.tagName) {
        case 'SELECT':
            modelToUse = vModelSelect;
            break;
        case 'TEXTAREA':
            modelToUse = vModelText;
            break;
        default:
            switch (vnode.props && vnode.props.type) {
                case 'checkbox':
                    modelToUse = vModelCheckbox;
                    break;
                case 'radio':
                    modelToUse = vModelRadio;
                    break;
                default:
                    modelToUse = vModelText;
            }
    }
    const fn = modelToUse[hook];
    fn && fn(el, binding, vnode, prevVNode);
}
// SSR vnode transforms, only used when user includes client-oriented render
// function in SSR
function initVModelForSSR() {
    vModelText.getSSRProps = ({ value }) => ({ value });
    vModelRadio.getSSRProps = ({ value }, vnode) => {
        if (vnode.props && Object(shared_esm_bundler["G" /* looseEqual */])(vnode.props.value, value)) {
            return { checked: true };
        }
    };
    vModelCheckbox.getSSRProps = ({ value }, vnode) => {
        if (Object(shared_esm_bundler["o" /* isArray */])(value)) {
            if (vnode.props && Object(shared_esm_bundler["H" /* looseIndexOf */])(value, vnode.props.value) > -1) {
                return { checked: true };
            }
        }
        else if (Object(shared_esm_bundler["C" /* isSet */])(value)) {
            if (vnode.props && value.has(vnode.props.value)) {
                return { checked: true };
            }
        }
        else if (value) {
            return { checked: true };
        }
    };
}

const systemModifiers = ['ctrl', 'shift', 'alt', 'meta'];
const modifierGuards = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => 'button' in e && e.button !== 0,
    middle: e => 'button' in e && e.button !== 1,
    right: e => 'button' in e && e.button !== 2,
    exact: (e, modifiers) => systemModifiers.some(m => e[`${m}Key`] && !modifiers.includes(m))
};
/**
 * @private
 */
const withModifiers = (fn, modifiers) => {
    return (event, ...args) => {
        for (let i = 0; i < modifiers.length; i++) {
            const guard = modifierGuards[modifiers[i]];
            if (guard && guard(event, modifiers))
                return;
        }
        return fn(event, ...args);
    };
};
// Kept for 2.x compat.
// Note: IE11 compat for `spacebar` and `del` is removed for now.
const keyNames = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace'
};
/**
 * @private
 */
const withKeys = (fn, modifiers) => {
    return (event) => {
        if (!('key' in event)) {
            return;
        }
        const eventKey = Object(shared_esm_bundler["l" /* hyphenate */])(event.key);
        if (modifiers.some(k => k === eventKey || keyNames[k] === eventKey)) {
            return fn(event);
        }
    };
};

const vShow = {
    beforeMount(el, { value }, { transition }) {
        el._vod = el.style.display === 'none' ? '' : el.style.display;
        if (transition && value) {
            transition.beforeEnter(el);
        }
        else {
            setDisplay(el, value);
        }
    },
    mounted(el, { value }, { transition }) {
        if (transition && value) {
            transition.enter(el);
        }
    },
    updated(el, { value, oldValue }, { transition }) {
        if (!value === !oldValue)
            return;
        if (transition) {
            if (value) {
                transition.beforeEnter(el);
                setDisplay(el, true);
                transition.enter(el);
            }
            else {
                transition.leave(el, () => {
                    setDisplay(el, false);
                });
            }
        }
        else {
            setDisplay(el, value);
        }
    },
    beforeUnmount(el, { value }) {
        setDisplay(el, value);
    }
};
function setDisplay(el, value) {
    el.style.display = value ? el._vod : 'none';
}
// SSR vnode transforms, only used when user includes client-oriented render
// function in SSR
function initVShowForSSR() {
    vShow.getSSRProps = ({ value }) => {
        if (!value) {
            return { style: { display: 'none' } };
        }
    };
}

const rendererOptions = Object(shared_esm_bundler["h" /* extend */])({ patchProp: runtime_dom_esm_bundler_patchProp }, nodeOps);
// lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.
let renderer;
let enabledHydration = false;
function ensureRenderer() {
    return (renderer ||
        (renderer = createRenderer(rendererOptions)));
}
function ensureHydrationRenderer() {
    renderer = enabledHydration
        ? renderer
        : createHydrationRenderer(rendererOptions);
    enabledHydration = true;
    return renderer;
}
// use explicit type casts here to avoid import() calls in rolled-up d.ts
const runtime_dom_esm_bundler_render = ((...args) => {
    ensureRenderer().render(...args);
});
const runtime_dom_esm_bundler_hydrate = ((...args) => {
    ensureHydrationRenderer().hydrate(...args);
});
const runtime_dom_esm_bundler_createApp = ((...args) => {
    const app = ensureRenderer().createApp(...args);
    if ((false)) {}
    const { mount } = app;
    app.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector);
        if (!container)
            return;
        const component = app._component;
        if (!Object(shared_esm_bundler["q" /* isFunction */])(component) && !component.render && !component.template) {
            // __UNSAFE__
            // Reason: potential execution of JS expressions in in-DOM template.
            // The user must make sure the in-DOM template is trusted. If it's
            // rendered by the server, the template should not contain any user data.
            component.template = container.innerHTML;
        }
        // clear content before mounting
        container.innerHTML = '';
        const proxy = mount(container, false, container instanceof SVGElement);
        if (container instanceof Element) {
            container.removeAttribute('v-cloak');
            container.setAttribute('data-v-app', '');
        }
        return proxy;
    };
    return app;
});
const createSSRApp = ((...args) => {
    const app = ensureHydrationRenderer().createApp(...args);
    if ((false)) {}
    const { mount } = app;
    app.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector);
        if (container) {
            return mount(container, true, container instanceof SVGElement);
        }
    };
    return app;
});
function injectNativeTagCheck(app) {
    // Inject `isNativeTag`
    // this is used for component name validation (dev only)
    Object.defineProperty(app.config, 'isNativeTag', {
        value: (tag) => Object(shared_esm_bundler["s" /* isHTMLTag */])(tag) || Object(shared_esm_bundler["B" /* isSVGTag */])(tag),
        writable: false
    });
}
// dev only
function injectCompilerOptionsCheck(app) {
    if (isRuntimeOnly()) {
        const isCustomElement = app.config.isCustomElement;
        Object.defineProperty(app.config, 'isCustomElement', {
            get() {
                return isCustomElement;
            },
            set() {
                runtime_core_esm_bundler_warn(`The \`isCustomElement\` config option is deprecated. Use ` +
                    `\`compilerOptions.isCustomElement\` instead.`);
            }
        });
        const compilerOptions = app.config.compilerOptions;
        const msg = `The \`compilerOptions\` config option is only respected when using ` +
            `a build of Vue.js that includes the runtime compiler (aka "full build"). ` +
            `Since you are using the runtime-only build, \`compilerOptions\` ` +
            `must be passed to \`@vue/compiler-dom\` in the build setup instead.\n` +
            `- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.\n` +
            `- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n` +
            `- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom`;
        Object.defineProperty(app.config, 'compilerOptions', {
            get() {
                runtime_core_esm_bundler_warn(msg);
                return compilerOptions;
            },
            set() {
                runtime_core_esm_bundler_warn(msg);
            }
        });
    }
}
function normalizeContainer(container) {
    if (Object(shared_esm_bundler["E" /* isString */])(container)) {
        const res = document.querySelector(container);
        if (false) {}
        return res;
    }
    if (false) {}
    return container;
}
let ssrDirectiveInitialized = false;
/**
 * @internal
 */
const initDirectivesForSSR = () => {
        if (!ssrDirectiveInitialized) {
            ssrDirectiveInitialized = true;
            initVModelForSSR();
            initVShowForSSR();
        }
    }
    ;



// CONCATENATED MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js



function initDev() {
    {
        initCustomFormatter();
    }
}

// This entry exports the runtime only, and is built as
if ((false)) {}
const vue_runtime_esm_bundler_compile = () => {
    if ((false)) {}
};



// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--15-0!./src/vue/App.vue?vue&type=template&id=51cc4d6d

var _hoisted_1 = {
  "class": "dsw-pr-5"
};
function Appvue_type_template_id_51cc4d6d_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Header = resolveComponent("Header");

  var _component_Navigation = resolveComponent("Navigation");

  var _component_router_view = resolveComponent("router-view");

  return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(_component_Header), createVNode(_component_Navigation), createVNode(_component_router_view)]);
}
// CONCATENATED MODULE: ./src/vue/App.vue?vue&type=template&id=51cc4d6d

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--15-0!./src/vue/components/Menu.vue?vue&type=template&id=42a4ac3a


var Menuvue_type_template_id_42a4ac3a_hoisted_1 = /*#__PURE__*/createBaseVNode("div", {
  "class": "sm:dsw-hidden"
}, [/*#__PURE__*/createBaseVNode("label", {
  "for": "tabs",
  "class": "dsw-sr-only"
}, "Select a tab"), /*#__PURE__*/createBaseVNode("select", {
  id: "tabs",
  name: "tabs",
  "class": "dsw-block dsw-w-full dsw-pl-3 dsw-pr-10 dsw-py-2 dsw-text-base dsw-border-gray-300 focus:dsw-outline-none focus:dsw-ring-indigo-500 focus:dsw-border-indigo-500 sm:dsw-text-sm dsw-rounded-md"
}, [/*#__PURE__*/createBaseVNode("option", {
  selected: ""
}, "Brands"), /*#__PURE__*/createBaseVNode("option", null, "Approval"), /*#__PURE__*/createBaseVNode("option", null, "Support"), /*#__PURE__*/createBaseVNode("option", null, "Settings"), /*#__PURE__*/createBaseVNode("option", null, "About")])], -1);

var _hoisted_2 = {
  "class": "dsw-hidden sm:dsw-block"
};
var _hoisted_3 = {
  "class": "dsw-border-b-2 dsw-border-dark-gray"
};
var _hoisted_4 = {
  "class": "dsw--mb-px dsw-flex dsw-space-x-8",
  "aria-label": "Tabs"
};

var _hoisted_5 = /*#__PURE__*/createTextVNode(" About");

var _hoisted_6 = /*#__PURE__*/createTextVNode("Brands");

var _hoisted_7 = /*#__PURE__*/createTextVNode(" License");

function Menuvue_type_template_id_42a4ac3a_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = resolveComponent("router-link");

  return openBlock(), createElementBlock("div", null, [Menuvue_type_template_id_42a4ac3a_hoisted_1, createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("nav", _hoisted_4, [createVNode(_component_router_link, {
    to: "/about",
    "class": "dsw-text-base dsw-border-transparent dsw-text-dark-gray hover:dsw-text-black hover:dsw-border-black dsw-whitespace-nowrap dsw-py-4 dsw-px-1 dsw-border-b-4 dsw-font-medium"
  }, {
    "default": withCtx(function () {
      return [_hoisted_5];
    }),
    _: 1
  }), createVNode(_component_router_link, {
    to: "/",
    "class": "dsw-text-base dsw-border-transparent dsw-text-dark-gray hover:dsw-text-black hover:dsw-border-black dsw-whitespace-nowrap dsw-py-4 dsw-px-1 dsw-border-b-4 dsw-font-medium",
    "aria-current": "page"
  }, {
    "default": withCtx(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), createVNode(_component_router_link, {
    to: "/settings",
    "class": "dsw-text-base dsw-border-transparent dsw-text-dark-gray hover:dsw-text-black hover:dsw-border-black dsw-whitespace-nowrap dsw-py-4 dsw-px-1 dsw-border-b-4 dsw-font-medium"
  }, {
    "default": withCtx(function () {
      return [_hoisted_7];
    }),
    _: 1
  })])])])]);
}
// CONCATENATED MODULE: ./src/vue/components/Menu.vue?vue&type=template&id=42a4ac3a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist??ref--15-0!./src/vue/components/Menu.vue?vue&type=script&lang=js
/* harmony default export */ var Menuvue_type_script_lang_js = ({});
// CONCATENATED MODULE: ./src/vue/components/Menu.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(1);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/vue/components/Menu.vue





const __exports__ = /*#__PURE__*/exportHelper_default()(Menuvue_type_script_lang_js, [['render',Menuvue_type_template_id_42a4ac3a_render]])

/* harmony default export */ var Menu = (__exports__);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--15-0!./src/vue/components/Header.vue?vue&type=template&id=f20b93ea

var Headervue_type_template_id_f20b93ea_hoisted_1 = {
  "class": "dsw-py-5 dsw-flex dsw-row dsw-items-center"
};

var Headervue_type_template_id_f20b93ea_hoisted_2 = /*#__PURE__*/createStaticVNode("<svg width=\"60\" class=\"dsw-pt-1\" fill=\"#00b48c\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 80 80\"><g id=\"a\"></g><g id=\"b\"><g id=\"c\"><g><polygon class=\"d\" points=\"23.9 26.59 47.65 53.31 23.64 53.31 0 26.73 0 80 32.36 80 56.1 53.31 32.35 26.59 56.36 26.59 80 53.17 80 0 47.55 0 23.9 26.59\"></polygon><polygon class=\"d\" points=\"56.38 80 80 80 80 53.44 56.38 80\"></polygon><polygon class=\"d\" points=\"0 26.46 23.53 0 0 0 0 26.46\"></polygon></g></g></g></svg><h1 class=\"dsw-px-3 dsw-text-4xl dsw-font-bold\">Waves by DesignStudio <span class=\"dsw-gray dsw-font-normal dsw-text-lg\">(v2.0)</span></h1>", 2);

var Headervue_type_template_id_f20b93ea_hoisted_4 = [Headervue_type_template_id_f20b93ea_hoisted_2];
function Headervue_type_template_id_f20b93ea_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", Headervue_type_template_id_f20b93ea_hoisted_1, Headervue_type_template_id_f20b93ea_hoisted_4);
}
// CONCATENATED MODULE: ./src/vue/components/Header.vue?vue&type=template&id=f20b93ea

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist??ref--15-0!./src/vue/components/Header.vue?vue&type=script&lang=js
/* harmony default export */ var Headervue_type_script_lang_js = ({});
// CONCATENATED MODULE: ./src/vue/components/Header.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/vue/components/Header.vue





const Header_exports_ = /*#__PURE__*/exportHelper_default()(Headervue_type_script_lang_js, [['render',Headervue_type_template_id_f20b93ea_render]])

/* harmony default export */ var Header = (Header_exports_);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(2);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist??ref--15-0!./src/vue/App.vue?vue&type=script&lang=js



/* harmony default export */ var Appvue_type_script_lang_js = ({
  components: {
    Header: Header,
    Navigation: Menu
  },
  created: function created() {
    document.body.className = document.body.className.replace("wp-core-ui", ""); // remove wp-admin CSS
  }
});
// CONCATENATED MODULE: ./src/vue/App.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/vue/App.vue





const App_exports_ = /*#__PURE__*/exportHelper_default()(Appvue_type_script_lang_js, [['render',Appvue_type_template_id_51cc4d6d_render]])

/* harmony default export */ var App = (App_exports_);
// EXTERNAL MODULE: ./node_modules/@vue/devtools-api/lib/esm/env.js
var env = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@vue/devtools-api/lib/esm/const.js
const HOOK_SETUP = 'devtools-plugin:setup';
const HOOK_PLUGIN_SETTINGS_SET = 'plugin:settings:set';

// CONCATENATED MODULE: ./node_modules/@vue/devtools-api/lib/esm/proxy.js

class proxy_ApiProxy {
    constructor(plugin, hook) {
        this.target = null;
        this.targetQueue = [];
        this.onQueue = [];
        this.plugin = plugin;
        this.hook = hook;
        const defaultSettings = {};
        if (plugin.settings) {
            for (const id in plugin.settings) {
                const item = plugin.settings[id];
                defaultSettings[id] = item.defaultValue;
            }
        }
        const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
        let currentSettings = Object.assign({}, defaultSettings);
        try {
            const raw = localStorage.getItem(localSettingsSaveId);
            const data = JSON.parse(raw);
            Object.assign(currentSettings, data);
        }
        catch (e) {
            // noop
        }
        this.fallbacks = {
            getSettings() {
                return currentSettings;
            },
            setSettings(value) {
                try {
                    localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
                }
                catch (e) {
                    // noop
                }
                currentSettings = value;
            },
        };
        if (hook) {
            hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
                if (pluginId === this.plugin.id) {
                    this.fallbacks.setSettings(value);
                }
            });
        }
        this.proxiedOn = new Proxy({}, {
            get: (_target, prop) => {
                if (this.target) {
                    return this.target.on[prop];
                }
                else {
                    return (...args) => {
                        this.onQueue.push({
                            method: prop,
                            args,
                        });
                    };
                }
            },
        });
        this.proxiedTarget = new Proxy({}, {
            get: (_target, prop) => {
                if (this.target) {
                    return this.target[prop];
                }
                else if (prop === 'on') {
                    return this.proxiedOn;
                }
                else if (Object.keys(this.fallbacks).includes(prop)) {
                    return (...args) => {
                        this.targetQueue.push({
                            method: prop,
                            args,
                            resolve: () => { },
                        });
                        return this.fallbacks[prop](...args);
                    };
                }
                else {
                    return (...args) => {
                        return new Promise(resolve => {
                            this.targetQueue.push({
                                method: prop,
                                args,
                                resolve,
                            });
                        });
                    };
                }
            },
        });
    }
    async setRealTarget(target) {
        this.target = target;
        for (const item of this.onQueue) {
            this.target.on[item.method](...item.args);
        }
        for (const item of this.targetQueue) {
            item.resolve(await this.target[item.method](...item.args));
        }
    }
}

// CONCATENATED MODULE: ./node_modules/@vue/devtools-api/lib/esm/index.js





function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = Object(env["b" /* getTarget */])();
    const hook = Object(env["a" /* getDevtoolsGlobalHook */])();
    const enableProxy = env["c" /* isProxyAvailable */] && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
        hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    }
    else {
        const proxy = enableProxy ? new proxy_ApiProxy(descriptor, hook) : null;
        const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
        list.push({
            pluginDescriptor: descriptor,
            setupFn,
            proxy,
        });
        if (proxy)
            setupFn(proxy.proxiedTarget);
    }
}

// CONCATENATED MODULE: ./node_modules/vue-router/dist/vue-router.esm-bundler.js
/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */



const hasSymbol = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
const PolySymbol = (name) => 
// vr = vue router
hasSymbol
    ? Symbol(( false) ? undefined : name)
    : (( false) ? undefined : '_vr_') + name;
// rvlm = Router View Location Matched
/**
 * RouteRecord being rendered by the closest ancestor Router View. Used for
 * `onBeforeRouteUpdate` and `onBeforeRouteLeave`. rvlm stands for Router View
 * Location Matched
 *
 * @internal
 */
const matchedRouteKey = /*#__PURE__*/ PolySymbol(( false) ? undefined : 'rvlm');
/**
 * Allows overriding the router view depth to control which component in
 * `matched` is rendered. rvd stands for Router View Depth
 *
 * @internal
 */
const viewDepthKey = /*#__PURE__*/ PolySymbol(( false) ? undefined : 'rvd');
/**
 * Allows overriding the router instance returned by `useRouter` in tests. r
 * stands for router
 *
 * @internal
 */
const routerKey = /*#__PURE__*/ PolySymbol(( false) ? undefined : 'r');
/**
 * Allows overriding the current route returned by `useRoute` in tests. rl
 * stands for route location
 *
 * @internal
 */
const routeLocationKey = /*#__PURE__*/ PolySymbol(( false) ? undefined : 'rl');
/**
 * Allows overriding the current route used by router-view. Internally this is
 * used when the `route` prop is passed.
 *
 * @internal
 */
const routerViewLocationKey = /*#__PURE__*/ PolySymbol(( false) ? undefined : 'rvl');

const isBrowser = typeof window !== 'undefined';

function isESModule(obj) {
    return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module');
}
const vue_router_esm_bundler_assign = Object.assign;
function applyToParams(fn, params) {
    const newParams = {};
    for (const key in params) {
        const value = params[key];
        newParams[key] = Array.isArray(value) ? value.map(fn) : fn(value);
    }
    return newParams;
}
const noop = () => { };

function vue_router_esm_bundler_warn(msg) {
    // avoid using ...args as it breaks in older Edge builds
    const args = Array.from(arguments).slice(1);
    console.warn.apply(console, ['[Vue Router warn]: ' + msg].concat(args));
}

const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, '');
/**
 * Transforms an URI into a normalized history location
 *
 * @param parseQuery
 * @param location - URI to normalize
 * @param currentLocation - current absolute location. Allows resolving relative
 * paths. Must start with `/`. Defaults to `/`
 * @returns a normalized history location
 */
function parseURL(parseQuery, location, currentLocation = '/') {
    let path, query = {}, searchString = '', hash = '';
    // Could use URL and URLSearchParams but IE 11 doesn't support it
    const searchPos = location.indexOf('?');
    const hashPos = location.indexOf('#', searchPos > -1 ? searchPos : 0);
    if (searchPos > -1) {
        path = location.slice(0, searchPos);
        searchString = location.slice(searchPos + 1, hashPos > -1 ? hashPos : location.length);
        query = parseQuery(searchString);
    }
    if (hashPos > -1) {
        path = path || location.slice(0, hashPos);
        // keep the # character
        hash = location.slice(hashPos, location.length);
    }
    // no search and no query
    path = resolveRelativePath(path != null ? path : location, currentLocation);
    // empty path means a relative query or hash `?foo=f`, `#thing`
    return {
        fullPath: path + (searchString && '?') + searchString + hash,
        path,
        query,
        hash,
    };
}
/**
 * Stringifies a URL object
 *
 * @param stringifyQuery
 * @param location
 */
function stringifyURL(stringifyQuery, location) {
    const query = location.query ? stringifyQuery(location.query) : '';
    return location.path + (query && '?') + query + (location.hash || '');
}
/**
 * Strips off the base from the beginning of a location.pathname in a non
 * case-sensitive way.
 *
 * @param pathname - location.pathname
 * @param base - base to strip off
 */
function stripBase(pathname, base) {
    // no base or base is not found at the beginning
    if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
        return pathname;
    return pathname.slice(base.length) || '/';
}
/**
 * Checks if two RouteLocation are equal. This means that both locations are
 * pointing towards the same {@link RouteRecord} and that all `params`, `query`
 * parameters and `hash` are the same
 *
 * @param a - first {@link RouteLocation}
 * @param b - second {@link RouteLocation}
 */
function isSameRouteLocation(stringifyQuery, a, b) {
    const aLastIndex = a.matched.length - 1;
    const bLastIndex = b.matched.length - 1;
    return (aLastIndex > -1 &&
        aLastIndex === bLastIndex &&
        isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) &&
        isSameRouteLocationParams(a.params, b.params) &&
        stringifyQuery(a.query) === stringifyQuery(b.query) &&
        a.hash === b.hash);
}
/**
 * Check if two `RouteRecords` are equal. Takes into account aliases: they are
 * considered equal to the `RouteRecord` they are aliasing.
 *
 * @param a - first {@link RouteRecord}
 * @param b - second {@link RouteRecord}
 */
function isSameRouteRecord(a, b) {
    // since the original record has an undefined value for aliasOf
    // but all aliases point to the original record, this will always compare
    // the original record
    return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length)
        return false;
    for (const key in a) {
        if (!isSameRouteLocationParamsValue(a[key], b[key]))
            return false;
    }
    return true;
}
function isSameRouteLocationParamsValue(a, b) {
    return Array.isArray(a)
        ? isEquivalentArray(a, b)
        : Array.isArray(b)
            ? isEquivalentArray(b, a)
            : a === b;
}
/**
 * Check if two arrays are the same or if an array with one single entry is the
 * same as another primitive value. Used to check query and parameters
 *
 * @param a - array of values
 * @param b - array of values or a single value
 */
function isEquivalentArray(a, b) {
    return Array.isArray(b)
        ? a.length === b.length && a.every((value, i) => value === b[i])
        : a.length === 1 && a[0] === b;
}
/**
 * Resolves a relative path that starts with `.`.
 *
 * @param to - path location we are resolving
 * @param from - currentLocation.path, should start with `/`
 */
function resolveRelativePath(to, from) {
    if (to.startsWith('/'))
        return to;
    if (false) {}
    if (!to)
        return from;
    const fromSegments = from.split('/');
    const toSegments = to.split('/');
    let position = fromSegments.length - 1;
    let toPosition;
    let segment;
    for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
        segment = toSegments[toPosition];
        // can't go below zero
        if (position === 1 || segment === '.')
            continue;
        if (segment === '..')
            position--;
        // found something that is not relative path
        else
            break;
    }
    return (fromSegments.slice(0, position).join('/') +
        '/' +
        toSegments
            .slice(toPosition - (toPosition === toSegments.length ? 1 : 0))
            .join('/'));
}

var NavigationType;
(function (NavigationType) {
    NavigationType["pop"] = "pop";
    NavigationType["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function (NavigationDirection) {
    NavigationDirection["back"] = "back";
    NavigationDirection["forward"] = "forward";
    NavigationDirection["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
/**
 * Starting location for Histories
 */
const START = '';
// Generic utils
/**
 * Normalizes a base by removing any trailing slash and reading the base tag if
 * present.
 *
 * @param base - base to normalize
 */
function normalizeBase(base) {
    if (!base) {
        if (isBrowser) {
            // respect <base> tag
            const baseEl = document.querySelector('base');
            base = (baseEl && baseEl.getAttribute('href')) || '/';
            // strip full URL origin
            base = base.replace(/^\w+:\/\/[^\/]+/, '');
        }
        else {
            base = '/';
        }
    }
    // ensure leading slash when it was removed by the regex above avoid leading
    // slash with hash because the file could be read from the disk like file://
    // and the leading slash would cause problems
    if (base[0] !== '/' && base[0] !== '#')
        base = '/' + base;
    // remove the trailing slash so all other method can just do `base + fullPath`
    // to build an href
    return removeTrailingSlash(base);
}
// remove any character before the hash
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location) {
    return base.replace(BEFORE_HASH_RE, '#') + location;
}

function getElementPosition(el, offset) {
    const docRect = document.documentElement.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    return {
        behavior: offset.behavior,
        left: elRect.left - docRect.left - (offset.left || 0),
        top: elRect.top - docRect.top - (offset.top || 0),
    };
}
const computeScrollPosition = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset,
});
function scrollToPosition(position) {
    let scrollToOptions;
    if ('el' in position) {
        const positionEl = position.el;
        const isIdSelector = typeof positionEl === 'string' && positionEl.startsWith('#');
        /**
         * `id`s can accept pretty much any characters, including CSS combinators
         * like `>` or `~`. It's still possible to retrieve elements using
         * `document.getElementById('~')` but it needs to be escaped when using
         * `document.querySelector('#\\~')` for it to be valid. The only
         * requirements for `id`s are them to be unique on the page and to not be
         * empty (`id=""`). Because of that, when passing an id selector, it should
         * be properly escaped for it to work with `querySelector`. We could check
         * for the id selector to be simple (no CSS combinators `+ >~`) but that
         * would make things inconsistent since they are valid characters for an
         * `id` but would need to be escaped when using `querySelector`, breaking
         * their usage and ending up in no selector returned. Selectors need to be
         * escaped:
         *
         * - `#1-thing` becomes `#\31 -thing`
         * - `#with~symbols` becomes `#with\\~symbols`
         *
         * - More information about  the topic can be found at
         *   https://mathiasbynens.be/notes/html5-id-class.
         * - Practical example: https://mathiasbynens.be/demo/html5-id
         */
        if (false) {}
        const el = typeof positionEl === 'string'
            ? isIdSelector
                ? document.getElementById(positionEl.slice(1))
                : document.querySelector(positionEl)
            : positionEl;
        if (!el) {
            ( false) &&
                false;
            return;
        }
        scrollToOptions = getElementPosition(el, position);
    }
    else {
        scrollToOptions = position;
    }
    if ('scrollBehavior' in document.documentElement.style)
        window.scrollTo(scrollToOptions);
    else {
        window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
    }
}
function getScrollKey(path, delta) {
    const position = history.state ? history.state.position - delta : -1;
    return position + path;
}
const scrollPositions = new Map();
function saveScrollPosition(key, scrollPosition) {
    scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
    const scroll = scrollPositions.get(key);
    // consume it so it's not used again
    scrollPositions.delete(key);
    return scroll;
}
// TODO: RFC about how to save scroll position
/**
 * ScrollBehavior instance used by the router to compute and restore the scroll
 * position when navigating.
 */
// export interface ScrollHandler<ScrollPositionEntry extends HistoryStateValue, ScrollPosition extends ScrollPositionEntry> {
//   // returns a scroll position that can be saved in history
//   compute(): ScrollPositionEntry
//   // can take an extended ScrollPositionEntry
//   scroll(position: ScrollPosition): void
// }
// export const scrollHandler: ScrollHandler<ScrollPosition> = {
//   compute: computeScroll,
//   scroll: scrollToPosition,
// }

let createBaseLocation = () => location.protocol + '//' + location.host;
/**
 * Creates a normalized history location from a window.location object
 * @param location -
 */
function createCurrentLocation(base, location) {
    const { pathname, search, hash } = location;
    // allows hash bases like #, /#, #/, #!, #!/, /#!/, or even /folder#end
    const hashPos = base.indexOf('#');
    if (hashPos > -1) {
        let slicePos = hash.includes(base.slice(hashPos))
            ? base.slice(hashPos).length
            : 1;
        let pathFromHash = hash.slice(slicePos);
        // prepend the starting slash to hash so the url starts with /#
        if (pathFromHash[0] !== '/')
            pathFromHash = '/' + pathFromHash;
        return stripBase(pathFromHash, '');
    }
    const path = stripBase(pathname, base);
    return path + search + hash;
}
function useHistoryListeners(base, historyState, currentLocation, replace) {
    let listeners = [];
    let teardowns = [];
    // TODO: should it be a stack? a Dict. Check if the popstate listener
    // can trigger twice
    let pauseState = null;
    const popStateHandler = ({ state, }) => {
        const to = createCurrentLocation(base, location);
        const from = currentLocation.value;
        const fromState = historyState.value;
        let delta = 0;
        if (state) {
            currentLocation.value = to;
            historyState.value = state;
            // ignore the popstate and reset the pauseState
            if (pauseState && pauseState === from) {
                pauseState = null;
                return;
            }
            delta = fromState ? state.position - fromState.position : 0;
        }
        else {
            replace(to);
        }
        // console.log({ deltaFromCurrent })
        // Here we could also revert the navigation by calling history.go(-delta)
        // this listener will have to be adapted to not trigger again and to wait for the url
        // to be updated before triggering the listeners. Some kind of validation function would also
        // need to be passed to the listeners so the navigation can be accepted
        // call all listeners
        listeners.forEach(listener => {
            listener(currentLocation.value, from, {
                delta,
                type: NavigationType.pop,
                direction: delta
                    ? delta > 0
                        ? NavigationDirection.forward
                        : NavigationDirection.back
                    : NavigationDirection.unknown,
            });
        });
    };
    function pauseListeners() {
        pauseState = currentLocation.value;
    }
    function listen(callback) {
        // setup the listener and prepare teardown callbacks
        listeners.push(callback);
        const teardown = () => {
            const index = listeners.indexOf(callback);
            if (index > -1)
                listeners.splice(index, 1);
        };
        teardowns.push(teardown);
        return teardown;
    }
    function beforeUnloadListener() {
        const { history } = window;
        if (!history.state)
            return;
        history.replaceState(vue_router_esm_bundler_assign({}, history.state, { scroll: computeScrollPosition() }), '');
    }
    function destroy() {
        for (const teardown of teardowns)
            teardown();
        teardowns = [];
        window.removeEventListener('popstate', popStateHandler);
        window.removeEventListener('beforeunload', beforeUnloadListener);
    }
    // setup the listeners and prepare teardown callbacks
    window.addEventListener('popstate', popStateHandler);
    window.addEventListener('beforeunload', beforeUnloadListener);
    return {
        pauseListeners,
        listen,
        destroy,
    };
}
/**
 * Creates a state object
 */
function buildState(back, current, forward, replaced = false, computeScroll = false) {
    return {
        back,
        current,
        forward,
        replaced,
        position: window.history.length,
        scroll: computeScroll ? computeScrollPosition() : null,
    };
}
function useHistoryStateNavigation(base) {
    const { history, location } = window;
    // private variables
    const currentLocation = {
        value: createCurrentLocation(base, location),
    };
    const historyState = { value: history.state };
    // build current history entry as this is a fresh navigation
    if (!historyState.value) {
        changeLocation(currentLocation.value, {
            back: null,
            current: currentLocation.value,
            forward: null,
            // the length is off by one, we need to decrease it
            position: history.length - 1,
            replaced: true,
            // don't add a scroll as the user may have an anchor and we want
            // scrollBehavior to be triggered without a saved position
            scroll: null,
        }, true);
    }
    function changeLocation(to, state, replace) {
        /**
         * if a base tag is provided and we are on a normal domain, we have to
         * respect the provided `base` attribute because pushState() will use it and
         * potentially erase anything before the `#` like at
         * https://github.com/vuejs/router/issues/685 where a base of
         * `/folder/#` but a base of `/` would erase the `/folder/` section. If
         * there is no host, the `<base>` tag makes no sense and if there isn't a
         * base tag we can just use everything after the `#`.
         */
        const hashIndex = base.indexOf('#');
        const url = hashIndex > -1
            ? (location.host && document.querySelector('base')
                ? base
                : base.slice(hashIndex)) + to
            : createBaseLocation() + base + to;
        try {
            // BROWSER QUIRK
            // NOTE: Safari throws a SecurityError when calling this function 100 times in 30 seconds
            history[replace ? 'replaceState' : 'pushState'](state, '', url);
            historyState.value = state;
        }
        catch (err) {
            if ((false)) {}
            else {
                console.error(err);
            }
            // Force the navigation, this also resets the call count
            location[replace ? 'replace' : 'assign'](url);
        }
    }
    function replace(to, data) {
        const state = vue_router_esm_bundler_assign({}, history.state, buildState(historyState.value.back, 
        // keep back and forward entries but override current position
        to, historyState.value.forward, true), data, { position: historyState.value.position });
        changeLocation(to, state, true);
        currentLocation.value = to;
    }
    function push(to, data) {
        // Add to current entry the information of where we are going
        // as well as saving the current position
        const currentState = vue_router_esm_bundler_assign({}, 
        // use current history state to gracefully handle a wrong call to
        // history.replaceState
        // https://github.com/vuejs/router/issues/366
        historyState.value, history.state, {
            forward: to,
            scroll: computeScrollPosition(),
        });
        if (false) {}
        changeLocation(currentState.current, currentState, true);
        const state = vue_router_esm_bundler_assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
        changeLocation(to, state, false);
        currentLocation.value = to;
    }
    return {
        location: currentLocation,
        state: historyState,
        push,
        replace,
    };
}
/**
 * Creates an HTML5 history. Most common history for single page applications.
 *
 * @param base -
 */
function createWebHistory(base) {
    base = normalizeBase(base);
    const historyNavigation = useHistoryStateNavigation(base);
    const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
    function go(delta, triggerListeners = true) {
        if (!triggerListeners)
            historyListeners.pauseListeners();
        history.go(delta);
    }
    const routerHistory = vue_router_esm_bundler_assign({
        // it's overridden right after
        location: '',
        base,
        go,
        createHref: createHref.bind(null, base),
    }, historyNavigation, historyListeners);
    Object.defineProperty(routerHistory, 'location', {
        enumerable: true,
        get: () => historyNavigation.location.value,
    });
    Object.defineProperty(routerHistory, 'state', {
        enumerable: true,
        get: () => historyNavigation.state.value,
    });
    return routerHistory;
}

/**
 * Creates a in-memory based history. The main purpose of this history is to handle SSR. It starts in a special location that is nowhere.
 * It's up to the user to replace that location with the starter location by either calling `router.push` or `router.replace`.
 *
 * @param base - Base applied to all urls, defaults to '/'
 * @returns a history object that can be passed to the router constructor
 */
function createMemoryHistory(base = '') {
    let listeners = [];
    let queue = [START];
    let position = 0;
    base = normalizeBase(base);
    function setLocation(location) {
        position++;
        if (position === queue.length) {
            // we are at the end, we can simply append a new entry
            queue.push(location);
        }
        else {
            // we are in the middle, we remove everything from here in the queue
            queue.splice(position);
            queue.push(location);
        }
    }
    function triggerListeners(to, from, { direction, delta }) {
        const info = {
            direction,
            delta,
            type: NavigationType.pop,
        };
        for (const callback of listeners) {
            callback(to, from, info);
        }
    }
    const routerHistory = {
        // rewritten by Object.defineProperty
        location: START,
        // TODO: should be kept in queue
        state: {},
        base,
        createHref: createHref.bind(null, base),
        replace(to) {
            // remove current entry and decrement position
            queue.splice(position--, 1);
            setLocation(to);
        },
        push(to, data) {
            setLocation(to);
        },
        listen(callback) {
            listeners.push(callback);
            return () => {
                const index = listeners.indexOf(callback);
                if (index > -1)
                    listeners.splice(index, 1);
            };
        },
        destroy() {
            listeners = [];
            queue = [START];
            position = 0;
        },
        go(delta, shouldTrigger = true) {
            const from = this.location;
            const direction = 
            // we are considering delta === 0 going forward, but in abstract mode
            // using 0 for the delta doesn't make sense like it does in html5 where
            // it reloads the page
            delta < 0 ? NavigationDirection.back : NavigationDirection.forward;
            position = Math.max(0, Math.min(position + delta, queue.length - 1));
            if (shouldTrigger) {
                triggerListeners(this.location, from, {
                    direction,
                    delta,
                });
            }
        },
    };
    Object.defineProperty(routerHistory, 'location', {
        enumerable: true,
        get: () => queue[position],
    });
    return routerHistory;
}

/**
 * Creates a hash history. Useful for web applications with no host (e.g.
 * `file://`) or when configuring a server to handle any URL is not possible.
 *
 * @param base - optional base to provide. Defaults to `location.pathname +
 * location.search` If there is a `<base>` tag in the `head`, its value will be
 * ignored in favor of this parameter **but note it affects all the
 * history.pushState() calls**, meaning that if you use a `<base>` tag, it's
 * `href` value **has to match this parameter** (ignoring anything after the
 * `#`).
 *
 * @example
 * ```js
 * // at https://example.com/folder
 * createWebHashHistory() // gives a url of `https://example.com/folder#`
 * createWebHashHistory('/folder/') // gives a url of `https://example.com/folder/#`
 * // if the `#` is provided in the base, it won't be added by `createWebHashHistory`
 * createWebHashHistory('/folder/#/app/') // gives a url of `https://example.com/folder/#/app/`
 * // you should avoid doing this because it changes the original url and breaks copying urls
 * createWebHashHistory('/other-folder/') // gives a url of `https://example.com/other-folder/#`
 *
 * // at file:///usr/etc/folder/index.html
 * // for locations with no `host`, the base is ignored
 * createWebHashHistory('/iAmIgnored') // gives a url of `file:///usr/etc/folder/index.html#`
 * ```
 */
function createWebHashHistory(base) {
    // Make sure this implementation is fine in terms of encoding, specially for IE11
    // for `file://`, directly use the pathname and ignore the base
    // location.pathname contains an initial `/` even at the root: `https://example.com`
    base = location.host ? base || location.pathname + location.search : '';
    // allow the user to provide a `#` in the middle: `/base/#/app`
    if (!base.includes('#'))
        base += '#';
    if (false) {}
    return createWebHistory(base);
}

function isRouteLocation(route) {
    return typeof route === 'string' || (route && typeof route === 'object');
}
function isRouteName(name) {
    return typeof name === 'string' || typeof name === 'symbol';
}

/**
 * Initial route location where the router is. Can be used in navigation guards
 * to differentiate the initial navigation.
 *
 * @example
 * ```js
 * import { START_LOCATION } from 'vue-router'
 *
 * router.beforeEach((to, from) => {
 *   if (from === START_LOCATION) {
 *     // initial navigation
 *   }
 * })
 * ```
 */
const START_LOCATION_NORMALIZED = {
    path: '/',
    name: undefined,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: undefined,
};

const NavigationFailureSymbol = /*#__PURE__*/ PolySymbol(( false) ? undefined : 'nf');
/**
 * Enumeration with all possible types for navigation failures. Can be passed to
 * {@link isNavigationFailure} to check for specific failures.
 */
var NavigationFailureType;
(function (NavigationFailureType) {
    /**
     * An aborted navigation is a navigation that failed because a navigation
     * guard returned `false` or called `next(false)`
     */
    NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
    /**
     * A cancelled navigation is a navigation that failed because a more recent
     * navigation finished started (not necessarily finished).
     */
    NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
    /**
     * A duplicated navigation is a navigation that failed because it was
     * initiated while already being at the exact same location.
     */
    NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
// DEV only debug messages
const ErrorTypeMessages = {
    [1 /* MATCHER_NOT_FOUND */]({ location, currentLocation }) {
        return `No match for\n ${JSON.stringify(location)}${currentLocation
            ? '\nwhile being at\n' + JSON.stringify(currentLocation)
            : ''}`;
    },
    [2 /* NAVIGATION_GUARD_REDIRECT */]({ from, to, }) {
        return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
    },
    [4 /* NAVIGATION_ABORTED */]({ from, to }) {
        return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
    },
    [8 /* NAVIGATION_CANCELLED */]({ from, to }) {
        return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
    },
    [16 /* NAVIGATION_DUPLICATED */]({ from, to }) {
        return `Avoided redundant navigation to current location: "${from.fullPath}".`;
    },
};
function createRouterError(type, params) {
    // keep full error messages in cjs versions
    if (false) {}
    else {
        return vue_router_esm_bundler_assign(new Error(), {
            type,
            [NavigationFailureSymbol]: true,
        }, params);
    }
}
function isNavigationFailure(error, type) {
    return (error instanceof Error &&
        NavigationFailureSymbol in error &&
        (type == null || !!(error.type & type)));
}
const propertiesToLog = ['params', 'query', 'hash'];
function stringifyRoute(to) {
    if (typeof to === 'string')
        return to;
    if ('path' in to)
        return to.path;
    const location = {};
    for (const key of propertiesToLog) {
        if (key in to)
            location[key] = to[key];
    }
    return JSON.stringify(location, null, 2);
}

// default pattern for a param: non greedy everything but /
const BASE_PARAM_PATTERN = '[^/]+?';
const BASE_PATH_PARSER_OPTIONS = {
    sensitive: false,
    strict: false,
    start: true,
    end: true,
};
// Special Regex characters that must be escaped in static tokens
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
/**
 * Creates a path parser from an array of Segments (a segment is an array of Tokens)
 *
 * @param segments - array of segments returned by tokenizePath
 * @param extraOptions - optional options for the regexp
 * @returns a PathParser
 */
function tokensToParser(segments, extraOptions) {
    const options = vue_router_esm_bundler_assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
    // the amount of scores is the same as the length of segments except for the root segment "/"
    const score = [];
    // the regexp as a string
    let pattern = options.start ? '^' : '';
    // extracted keys
    const keys = [];
    for (const segment of segments) {
        // the root segment needs special treatment
        const segmentScores = segment.length ? [] : [90 /* Root */];
        // allow trailing slash
        if (options.strict && !segment.length)
            pattern += '/';
        for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
            const token = segment[tokenIndex];
            // resets the score if we are inside a sub segment /:a-other-:b
            let subSegmentScore = 40 /* Segment */ +
                (options.sensitive ? 0.25 /* BonusCaseSensitive */ : 0);
            if (token.type === 0 /* Static */) {
                // prepend the slash if we are starting a new segment
                if (!tokenIndex)
                    pattern += '/';
                pattern += token.value.replace(REGEX_CHARS_RE, '\\$&');
                subSegmentScore += 40 /* Static */;
            }
            else if (token.type === 1 /* Param */) {
                const { value, repeatable, optional, regexp } = token;
                keys.push({
                    name: value,
                    repeatable,
                    optional,
                });
                const re = regexp ? regexp : BASE_PARAM_PATTERN;
                // the user provided a custom regexp /:id(\\d+)
                if (re !== BASE_PARAM_PATTERN) {
                    subSegmentScore += 10 /* BonusCustomRegExp */;
                    // make sure the regexp is valid before using it
                    try {
                        new RegExp(`(${re})`);
                    }
                    catch (err) {
                        throw new Error(`Invalid custom RegExp for param "${value}" (${re}): ` +
                            err.message);
                    }
                }
                // when we repeat we must take care of the repeating leading slash
                let subPattern = repeatable ? `((?:${re})(?:/(?:${re}))*)` : `(${re})`;
                // prepend the slash if we are starting a new segment
                if (!tokenIndex)
                    subPattern =
                        // avoid an optional / if there are more segments e.g. /:p?-static
                        // or /:p?-:p2
                        optional && segment.length < 2
                            ? `(?:/${subPattern})`
                            : '/' + subPattern;
                if (optional)
                    subPattern += '?';
                pattern += subPattern;
                subSegmentScore += 20 /* Dynamic */;
                if (optional)
                    subSegmentScore += -8 /* BonusOptional */;
                if (repeatable)
                    subSegmentScore += -20 /* BonusRepeatable */;
                if (re === '.*')
                    subSegmentScore += -50 /* BonusWildcard */;
            }
            segmentScores.push(subSegmentScore);
        }
        // an empty array like /home/ -> [[{home}], []]
        // if (!segment.length) pattern += '/'
        score.push(segmentScores);
    }
    // only apply the strict bonus to the last score
    if (options.strict && options.end) {
        const i = score.length - 1;
        score[i][score[i].length - 1] += 0.7000000000000001 /* BonusStrict */;
    }
    // TODO: dev only warn double trailing slash
    if (!options.strict)
        pattern += '/?';
    if (options.end)
        pattern += '$';
    // allow paths like /dynamic to only match dynamic or dynamic/... but not dynamic_something_else
    else if (options.strict)
        pattern += '(?:/|$)';
    const re = new RegExp(pattern, options.sensitive ? '' : 'i');
    function parse(path) {
        const match = path.match(re);
        const params = {};
        if (!match)
            return null;
        for (let i = 1; i < match.length; i++) {
            const value = match[i] || '';
            const key = keys[i - 1];
            params[key.name] = value && key.repeatable ? value.split('/') : value;
        }
        return params;
    }
    function stringify(params) {
        let path = '';
        // for optional parameters to allow to be empty
        let avoidDuplicatedSlash = false;
        for (const segment of segments) {
            if (!avoidDuplicatedSlash || !path.endsWith('/'))
                path += '/';
            avoidDuplicatedSlash = false;
            for (const token of segment) {
                if (token.type === 0 /* Static */) {
                    path += token.value;
                }
                else if (token.type === 1 /* Param */) {
                    const { value, repeatable, optional } = token;
                    const param = value in params ? params[value] : '';
                    if (Array.isArray(param) && !repeatable)
                        throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
                    const text = Array.isArray(param) ? param.join('/') : param;
                    if (!text) {
                        if (optional) {
                            // if we have more than one optional param like /:a?-static we
                            // don't need to care about the optional param
                            if (segment.length < 2) {
                                // remove the last slash as we could be at the end
                                if (path.endsWith('/'))
                                    path = path.slice(0, -1);
                                // do not append a slash on the next iteration
                                else
                                    avoidDuplicatedSlash = true;
                            }
                        }
                        else
                            throw new Error(`Missing required param "${value}"`);
                    }
                    path += text;
                }
            }
        }
        return path;
    }
    return {
        re,
        score,
        keys,
        parse,
        stringify,
    };
}
/**
 * Compares an array of numbers as used in PathParser.score and returns a
 * number. This function can be used to `sort` an array
 *
 * @param a - first array of numbers
 * @param b - second array of numbers
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 * should be sorted first
 */
function compareScoreArray(a, b) {
    let i = 0;
    while (i < a.length && i < b.length) {
        const diff = b[i] - a[i];
        // only keep going if diff === 0
        if (diff)
            return diff;
        i++;
    }
    // if the last subsegment was Static, the shorter segments should be sorted first
    // otherwise sort the longest segment first
    if (a.length < b.length) {
        return a.length === 1 && a[0] === 40 /* Static */ + 40 /* Segment */
            ? -1
            : 1;
    }
    else if (a.length > b.length) {
        return b.length === 1 && b[0] === 40 /* Static */ + 40 /* Segment */
            ? 1
            : -1;
    }
    return 0;
}
/**
 * Compare function that can be used with `sort` to sort an array of PathParser
 *
 * @param a - first PathParser
 * @param b - second PathParser
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 */
function comparePathParserScore(a, b) {
    let i = 0;
    const aScore = a.score;
    const bScore = b.score;
    while (i < aScore.length && i < bScore.length) {
        const comp = compareScoreArray(aScore[i], bScore[i]);
        // do not return if both are equal
        if (comp)
            return comp;
        i++;
    }
    // if a and b share the same score entries but b has more, sort b first
    return bScore.length - aScore.length;
    // this is the ternary version
    // return aScore.length < bScore.length
    //   ? 1
    //   : aScore.length > bScore.length
    //   ? -1
    //   : 0
}

const ROOT_TOKEN = {
    type: 0 /* Static */,
    value: '',
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
// After some profiling, the cache seems to be unnecessary because tokenizePath
// (the slowest part of adding a route) is very fast
// const tokenCache = new Map<string, Token[][]>()
function tokenizePath(path) {
    if (!path)
        return [[]];
    if (path === '/')
        return [[ROOT_TOKEN]];
    if (!path.startsWith('/')) {
        throw new Error(( false)
            ? undefined
            : `Invalid path "${path}"`);
    }
    // if (tokenCache.has(path)) return tokenCache.get(path)!
    function crash(message) {
        throw new Error(`ERR (${state})/"${buffer}": ${message}`);
    }
    let state = 0 /* Static */;
    let previousState = state;
    const tokens = [];
    // the segment will always be valid because we get into the initial state
    // with the leading /
    let segment;
    function finalizeSegment() {
        if (segment)
            tokens.push(segment);
        segment = [];
    }
    // index on the path
    let i = 0;
    // char at index
    let char;
    // buffer of the value read
    let buffer = '';
    // custom regexp for a param
    let customRe = '';
    function consumeBuffer() {
        if (!buffer)
            return;
        if (state === 0 /* Static */) {
            segment.push({
                type: 0 /* Static */,
                value: buffer,
            });
        }
        else if (state === 1 /* Param */ ||
            state === 2 /* ParamRegExp */ ||
            state === 3 /* ParamRegExpEnd */) {
            if (segment.length > 1 && (char === '*' || char === '+'))
                crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
            segment.push({
                type: 1 /* Param */,
                value: buffer,
                regexp: customRe,
                repeatable: char === '*' || char === '+',
                optional: char === '*' || char === '?',
            });
        }
        else {
            crash('Invalid state to consume buffer');
        }
        buffer = '';
    }
    function addCharToBuffer() {
        buffer += char;
    }
    while (i < path.length) {
        char = path[i++];
        if (char === '\\' && state !== 2 /* ParamRegExp */) {
            previousState = state;
            state = 4 /* EscapeNext */;
            continue;
        }
        switch (state) {
            case 0 /* Static */:
                if (char === '/') {
                    if (buffer) {
                        consumeBuffer();
                    }
                    finalizeSegment();
                }
                else if (char === ':') {
                    consumeBuffer();
                    state = 1 /* Param */;
                }
                else {
                    addCharToBuffer();
                }
                break;
            case 4 /* EscapeNext */:
                addCharToBuffer();
                state = previousState;
                break;
            case 1 /* Param */:
                if (char === '(') {
                    state = 2 /* ParamRegExp */;
                }
                else if (VALID_PARAM_RE.test(char)) {
                    addCharToBuffer();
                }
                else {
                    consumeBuffer();
                    state = 0 /* Static */;
                    // go back one character if we were not modifying
                    if (char !== '*' && char !== '?' && char !== '+')
                        i--;
                }
                break;
            case 2 /* ParamRegExp */:
                // TODO: is it worth handling nested regexp? like :p(?:prefix_([^/]+)_suffix)
                // it already works by escaping the closing )
                // https://paths.esm.dev/?p=AAMeJbiAwQEcDKbAoAAkP60PG2R6QAvgNaA6AFACM2ABuQBB#
                // is this really something people need since you can also write
                // /prefix_:p()_suffix
                if (char === ')') {
                    // handle the escaped )
                    if (customRe[customRe.length - 1] == '\\')
                        customRe = customRe.slice(0, -1) + char;
                    else
                        state = 3 /* ParamRegExpEnd */;
                }
                else {
                    customRe += char;
                }
                break;
            case 3 /* ParamRegExpEnd */:
                // same as finalizing a param
                consumeBuffer();
                state = 0 /* Static */;
                // go back one character if we were not modifying
                if (char !== '*' && char !== '?' && char !== '+')
                    i--;
                customRe = '';
                break;
            default:
                crash('Unknown state');
                break;
        }
    }
    if (state === 2 /* ParamRegExp */)
        crash(`Unfinished custom RegExp for param "${buffer}"`);
    consumeBuffer();
    finalizeSegment();
    // tokenCache.set(path, tokens)
    return tokens;
}

function createRouteRecordMatcher(record, parent, options) {
    const parser = tokensToParser(tokenizePath(record.path), options);
    // warn against params with the same name
    if ((false)) {}
    const matcher = vue_router_esm_bundler_assign(parser, {
        record,
        parent,
        // these needs to be populated by the parent
        children: [],
        alias: [],
    });
    if (parent) {
        // both are aliases or both are not aliases
        // we don't want to mix them because the order is used when
        // passing originalRecord in Matcher.addRoute
        if (!matcher.record.aliasOf === !parent.record.aliasOf)
            parent.children.push(matcher);
    }
    return matcher;
}

/**
 * Creates a Router Matcher.
 *
 * @internal
 * @param routes - array of initial routes
 * @param globalOptions - global route options
 */
function createRouterMatcher(routes, globalOptions) {
    // normalized ordered array of matchers
    const matchers = [];
    const matcherMap = new Map();
    globalOptions = vue_router_esm_bundler_mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
    function getRecordMatcher(name) {
        return matcherMap.get(name);
    }
    function addRoute(record, parent, originalRecord) {
        // used later on to remove by name
        const isRootAdd = !originalRecord;
        const mainNormalizedRecord = normalizeRouteRecord(record);
        // we might be the child of an alias
        mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
        const options = vue_router_esm_bundler_mergeOptions(globalOptions, record);
        // generate an array of records to correctly handle aliases
        const normalizedRecords = [
            mainNormalizedRecord,
        ];
        if ('alias' in record) {
            const aliases = typeof record.alias === 'string' ? [record.alias] : record.alias;
            for (const alias of aliases) {
                normalizedRecords.push(vue_router_esm_bundler_assign({}, mainNormalizedRecord, {
                    // this allows us to hold a copy of the `components` option
                    // so that async components cache is hold on the original record
                    components: originalRecord
                        ? originalRecord.record.components
                        : mainNormalizedRecord.components,
                    path: alias,
                    // we might be the child of an alias
                    aliasOf: originalRecord
                        ? originalRecord.record
                        : mainNormalizedRecord,
                    // the aliases are always of the same kind as the original since they
                    // are defined on the same record
                }));
            }
        }
        let matcher;
        let originalMatcher;
        for (const normalizedRecord of normalizedRecords) {
            const { path } = normalizedRecord;
            // Build up the path for nested routes if the child isn't an absolute
            // route. Only add the / delimiter if the child path isn't empty and if the
            // parent path doesn't have a trailing slash
            if (parent && path[0] !== '/') {
                const parentPath = parent.record.path;
                const connectingSlash = parentPath[parentPath.length - 1] === '/' ? '' : '/';
                normalizedRecord.path =
                    parent.record.path + (path && connectingSlash + path);
            }
            if (false) {}
            // create the object before hand so it can be passed to children
            matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
            if (false)
                {}
            // if we are an alias we must tell the original record that we exist
            // so we can be removed
            if (originalRecord) {
                originalRecord.alias.push(matcher);
                if ((false)) {}
            }
            else {
                // otherwise, the first record is the original and others are aliases
                originalMatcher = originalMatcher || matcher;
                if (originalMatcher !== matcher)
                    originalMatcher.alias.push(matcher);
                // remove the route if named and only for the top record (avoid in nested calls)
                // this works because the original record is the first one
                if (isRootAdd && record.name && !isAliasRecord(matcher))
                    removeRoute(record.name);
            }
            if ('children' in mainNormalizedRecord) {
                const children = mainNormalizedRecord.children;
                for (let i = 0; i < children.length; i++) {
                    addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
                }
            }
            // if there was no original record, then the first one was not an alias and all
            // other alias (if any) need to reference this record when adding children
            originalRecord = originalRecord || matcher;
            // TODO: add normalized records for more flexibility
            // if (parent && isAliasRecord(originalRecord)) {
            //   parent.children.push(originalRecord)
            // }
            insertMatcher(matcher);
        }
        return originalMatcher
            ? () => {
                // since other matchers are aliases, they should be removed by the original matcher
                removeRoute(originalMatcher);
            }
            : noop;
    }
    function removeRoute(matcherRef) {
        if (isRouteName(matcherRef)) {
            const matcher = matcherMap.get(matcherRef);
            if (matcher) {
                matcherMap.delete(matcherRef);
                matchers.splice(matchers.indexOf(matcher), 1);
                matcher.children.forEach(removeRoute);
                matcher.alias.forEach(removeRoute);
            }
        }
        else {
            const index = matchers.indexOf(matcherRef);
            if (index > -1) {
                matchers.splice(index, 1);
                if (matcherRef.record.name)
                    matcherMap.delete(matcherRef.record.name);
                matcherRef.children.forEach(removeRoute);
                matcherRef.alias.forEach(removeRoute);
            }
        }
    }
    function getRoutes() {
        return matchers;
    }
    function insertMatcher(matcher) {
        let i = 0;
        while (i < matchers.length &&
            comparePathParserScore(matcher, matchers[i]) >= 0 &&
            // Adding children with empty path should still appear before the parent
            // https://github.com/vuejs/router/issues/1124
            (matcher.record.path !== matchers[i].record.path ||
                !isRecordChildOf(matcher, matchers[i])))
            i++;
        matchers.splice(i, 0, matcher);
        // only add the original record to the name map
        if (matcher.record.name && !isAliasRecord(matcher))
            matcherMap.set(matcher.record.name, matcher);
    }
    function resolve(location, currentLocation) {
        let matcher;
        let params = {};
        let path;
        let name;
        if ('name' in location && location.name) {
            matcher = matcherMap.get(location.name);
            if (!matcher)
                throw createRouterError(1 /* MATCHER_NOT_FOUND */, {
                    location,
                });
            name = matcher.record.name;
            params = vue_router_esm_bundler_assign(
            // paramsFromLocation is a new object
            paramsFromLocation(currentLocation.params, 
            // only keep params that exist in the resolved location
            // TODO: only keep optional params coming from a parent record
            matcher.keys.filter(k => !k.optional).map(k => k.name)), location.params);
            // throws if cannot be stringified
            path = matcher.stringify(params);
        }
        else if ('path' in location) {
            // no need to resolve the path with the matcher as it was provided
            // this also allows the user to control the encoding
            path = location.path;
            if (false) {}
            matcher = matchers.find(m => m.re.test(path));
            // matcher should have a value after the loop
            if (matcher) {
                // TODO: dev warning of unused params if provided
                // we know the matcher works because we tested the regexp
                params = matcher.parse(path);
                name = matcher.record.name;
            }
            // location is a relative path
        }
        else {
            // match by name or path of current route
            matcher = currentLocation.name
                ? matcherMap.get(currentLocation.name)
                : matchers.find(m => m.re.test(currentLocation.path));
            if (!matcher)
                throw createRouterError(1 /* MATCHER_NOT_FOUND */, {
                    location,
                    currentLocation,
                });
            name = matcher.record.name;
            // since we are navigating to the same location, we don't need to pick the
            // params like when `name` is provided
            params = vue_router_esm_bundler_assign({}, currentLocation.params, location.params);
            path = matcher.stringify(params);
        }
        const matched = [];
        let parentMatcher = matcher;
        while (parentMatcher) {
            // reversed order so parents are at the beginning
            matched.unshift(parentMatcher.record);
            parentMatcher = parentMatcher.parent;
        }
        return {
            name,
            path,
            params,
            matched,
            meta: mergeMetaFields(matched),
        };
    }
    // add initial routes
    routes.forEach(route => addRoute(route));
    return { addRoute, resolve, removeRoute, getRoutes, getRecordMatcher };
}
function paramsFromLocation(params, keys) {
    const newParams = {};
    for (const key of keys) {
        if (key in params)
            newParams[key] = params[key];
    }
    return newParams;
}
/**
 * Normalizes a RouteRecordRaw. Creates a copy
 *
 * @param record
 * @returns the normalized version
 */
function normalizeRouteRecord(record) {
    return {
        path: record.path,
        redirect: record.redirect,
        name: record.name,
        meta: record.meta || {},
        aliasOf: undefined,
        beforeEnter: record.beforeEnter,
        props: normalizeRecordProps(record),
        children: record.children || [],
        instances: {},
        leaveGuards: new Set(),
        updateGuards: new Set(),
        enterCallbacks: {},
        components: 'components' in record
            ? record.components || {}
            : { default: record.component },
    };
}
/**
 * Normalize the optional `props` in a record to always be an object similar to
 * components. Also accept a boolean for components.
 * @param record
 */
function normalizeRecordProps(record) {
    const propsObject = {};
    // props does not exist on redirect records but we can set false directly
    const props = record.props || false;
    if ('component' in record) {
        propsObject.default = props;
    }
    else {
        // NOTE: we could also allow a function to be applied to every component.
        // Would need user feedback for use cases
        for (const name in record.components)
            propsObject[name] = typeof props === 'boolean' ? props : props[name];
    }
    return propsObject;
}
/**
 * Checks if a record or any of its parent is an alias
 * @param record
 */
function isAliasRecord(record) {
    while (record) {
        if (record.record.aliasOf)
            return true;
        record = record.parent;
    }
    return false;
}
/**
 * Merge meta fields of an array of records
 *
 * @param matched - array of matched records
 */
function mergeMetaFields(matched) {
    return matched.reduce((meta, record) => vue_router_esm_bundler_assign(meta, record.meta), {});
}
function vue_router_esm_bundler_mergeOptions(defaults, partialOptions) {
    const options = {};
    for (const key in defaults) {
        options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
    }
    return options;
}
function isSameParam(a, b) {
    return (a.name === b.name &&
        a.optional === b.optional &&
        a.repeatable === b.repeatable);
}
/**
 * Check if a path and its alias have the same required params
 *
 * @param a - original record
 * @param b - alias record
 */
function checkSameParams(a, b) {
    for (const key of a.keys) {
        if (!key.optional && !b.keys.find(isSameParam.bind(null, key)))
            return vue_router_esm_bundler_warn(`Alias "${b.record.path}" and the original record: "${a.record.path}" should have the exact same param named "${key.name}"`);
    }
    for (const key of b.keys) {
        if (!key.optional && !a.keys.find(isSameParam.bind(null, key)))
            return vue_router_esm_bundler_warn(`Alias "${b.record.path}" and the original record: "${a.record.path}" should have the exact same param named "${key.name}"`);
    }
}
function checkMissingParamsInAbsolutePath(record, parent) {
    for (const key of parent.keys) {
        if (!record.keys.find(isSameParam.bind(null, key)))
            return vue_router_esm_bundler_warn(`Absolute path "${record.record.path}" should have the exact same param named "${key.name}" as its parent "${parent.record.path}".`);
    }
}
function isRecordChildOf(record, parent) {
    return parent.children.some(child => child === record || isRecordChildOf(record, child));
}

/**
 * Encoding Rules ␣ = Space Path: ␣ " < > # ? { } Query: ␣ " < > # & = Hash: ␣ "
 * < > `
 *
 * On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
 * defines some extra characters to be encoded. Most browsers do not encode them
 * in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
 * also encode `!'()*`. Leaving unencoded only ASCII alphanumeric(`a-zA-Z0-9`)
 * plus `-._~`. This extra safety should be applied to query by patching the
 * string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
 * should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
 * into a `/` if directly typed in. The _backtick_ (`````) should also be
 * encoded everywhere because some browsers like FF encode it when directly
 * written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
 */
// const EXTRA_RESERVED_RE = /[!'()*]/g
// const encodeReservedReplacer = (c: string) => '%' + c.charCodeAt(0).toString(16)
const HASH_RE = /#/g; // %23
const AMPERSAND_RE = /&/g; // %26
const SLASH_RE = /\//g; // %2F
const EQUAL_RE = /=/g; // %3D
const IM_RE = /\?/g; // %3F
const PLUS_RE = /\+/g; // %2B
/**
 * NOTE: It's not clear to me if we should encode the + symbol in queries, it
 * seems to be less flexible than not doing so and I can't find out the legacy
 * systems requiring this for regular requests like text/html. In the standard,
 * the encoding of the plus character is only mentioned for
 * application/x-www-form-urlencoded
 * (https://url.spec.whatwg.org/#urlencoded-parsing) and most browsers seems lo
 * leave the plus character as is in queries. To be more flexible, we allow the
 * plus character on the query but it can also be manually encoded by the user.
 *
 * Resources:
 * - https://url.spec.whatwg.org/#urlencoded-parsing
 * - https://stackoverflow.com/questions/1634271/url-encoding-the-space-character-or-20
 */
const ENC_BRACKET_OPEN_RE = /%5B/g; // [
const ENC_BRACKET_CLOSE_RE = /%5D/g; // ]
const ENC_CARET_RE = /%5E/g; // ^
const ENC_BACKTICK_RE = /%60/g; // `
const ENC_CURLY_OPEN_RE = /%7B/g; // {
const ENC_PIPE_RE = /%7C/g; // |
const ENC_CURLY_CLOSE_RE = /%7D/g; // }
const ENC_SPACE_RE = /%20/g; // }
/**
 * Encode characters that need to be encoded on the path, search and hash
 * sections of the URL.
 *
 * @internal
 * @param text - string to encode
 * @returns encoded string
 */
function commonEncode(text) {
    return encodeURI('' + text)
        .replace(ENC_PIPE_RE, '|')
        .replace(ENC_BRACKET_OPEN_RE, '[')
        .replace(ENC_BRACKET_CLOSE_RE, ']');
}
/**
 * Encode characters that need to be encoded on the hash section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function encodeHash(text) {
    return commonEncode(text)
        .replace(ENC_CURLY_OPEN_RE, '{')
        .replace(ENC_CURLY_CLOSE_RE, '}')
        .replace(ENC_CARET_RE, '^');
}
/**
 * Encode characters that need to be encoded query values on the query
 * section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function encodeQueryValue(text) {
    return (commonEncode(text)
        // Encode the space as +, encode the + to differentiate it from the space
        .replace(PLUS_RE, '%2B')
        .replace(ENC_SPACE_RE, '+')
        .replace(HASH_RE, '%23')
        .replace(AMPERSAND_RE, '%26')
        .replace(ENC_BACKTICK_RE, '`')
        .replace(ENC_CURLY_OPEN_RE, '{')
        .replace(ENC_CURLY_CLOSE_RE, '}')
        .replace(ENC_CARET_RE, '^'));
}
/**
 * Like `encodeQueryValue` but also encodes the `=` character.
 *
 * @param text - string to encode
 */
function encodeQueryKey(text) {
    return encodeQueryValue(text).replace(EQUAL_RE, '%3D');
}
/**
 * Encode characters that need to be encoded on the path section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function encodePath(text) {
    return commonEncode(text).replace(HASH_RE, '%23').replace(IM_RE, '%3F');
}
/**
 * Encode characters that need to be encoded on the path section of the URL as a
 * param. This function encodes everything {@link encodePath} does plus the
 * slash (`/`) character. If `text` is `null` or `undefined`, returns an empty
 * string instead.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function encodeParam(text) {
    return text == null ? '' : encodePath(text).replace(SLASH_RE, '%2F');
}
/**
 * Decode text using `decodeURIComponent`. Returns the original text if it
 * fails.
 *
 * @param text - string to decode
 * @returns decoded string
 */
function decode(text) {
    try {
        return decodeURIComponent('' + text);
    }
    catch (err) {
        ( false) && false;
    }
    return '' + text;
}

/**
 * Transforms a queryString into a {@link LocationQuery} object. Accept both, a
 * version with the leading `?` and without Should work as URLSearchParams

 * @internal
 *
 * @param search - search string to parse
 * @returns a query object
 */
function parseQuery(search) {
    const query = {};
    // avoid creating an object with an empty key and empty value
    // because of split('&')
    if (search === '' || search === '?')
        return query;
    const hasLeadingIM = search[0] === '?';
    const searchParams = (hasLeadingIM ? search.slice(1) : search).split('&');
    for (let i = 0; i < searchParams.length; ++i) {
        // pre decode the + into space
        const searchParam = searchParams[i].replace(PLUS_RE, ' ');
        // allow the = character
        const eqPos = searchParam.indexOf('=');
        const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
        const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
        if (key in query) {
            // an extra variable for ts types
            let currentValue = query[key];
            if (!Array.isArray(currentValue)) {
                currentValue = query[key] = [currentValue];
            }
            currentValue.push(value);
        }
        else {
            query[key] = value;
        }
    }
    return query;
}
/**
 * Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
 * doesn't prepend a `?`
 *
 * @internal
 *
 * @param query - query object to stringify
 * @returns string version of the query without the leading `?`
 */
function stringifyQuery(query) {
    let search = '';
    for (let key in query) {
        const value = query[key];
        key = encodeQueryKey(key);
        if (value == null) {
            // only null adds the value
            if (value !== undefined) {
                search += (search.length ? '&' : '') + key;
            }
            continue;
        }
        // keep null values
        const values = Array.isArray(value)
            ? value.map(v => v && encodeQueryValue(v))
            : [value && encodeQueryValue(value)];
        values.forEach(value => {
            // skip undefined values in arrays as if they were not present
            // smaller code than using filter
            if (value !== undefined) {
                // only append & with non-empty search
                search += (search.length ? '&' : '') + key;
                if (value != null)
                    search += '=' + value;
            }
        });
    }
    return search;
}
/**
 * Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
 * numbers into strings, removing keys with an undefined value and replacing
 * undefined with null in arrays
 *
 * @param query - query object to normalize
 * @returns a normalized query object
 */
function normalizeQuery(query) {
    const normalizedQuery = {};
    for (const key in query) {
        const value = query[key];
        if (value !== undefined) {
            normalizedQuery[key] = Array.isArray(value)
                ? value.map(v => (v == null ? null : '' + v))
                : value == null
                    ? value
                    : '' + value;
        }
    }
    return normalizedQuery;
}

/**
 * Create a list of callbacks that can be reset. Used to create before and after navigation guards list
 */
function useCallbacks() {
    let handlers = [];
    function add(handler) {
        handlers.push(handler);
        return () => {
            const i = handlers.indexOf(handler);
            if (i > -1)
                handlers.splice(i, 1);
        };
    }
    function reset() {
        handlers = [];
    }
    return {
        add,
        list: () => handlers,
        reset,
    };
}

function registerGuard(record, name, guard) {
    const removeFromList = () => {
        record[name].delete(guard);
    };
    onUnmounted(removeFromList);
    onDeactivated(removeFromList);
    onActivated(() => {
        record[name].add(guard);
    });
    record[name].add(guard);
}
/**
 * Add a navigation guard that triggers whenever the component for the current
 * location is about to be left. Similar to {@link beforeRouteLeave} but can be
 * used in any component. The guard is removed when the component is unmounted.
 *
 * @param leaveGuard - {@link NavigationGuard}
 */
function onBeforeRouteLeave(leaveGuard) {
    if (false) {}
    const activeRecord = inject(matchedRouteKey, 
    // to avoid warning
    {}).value;
    if (!activeRecord) {
        ( false) &&
            false;
        return;
    }
    registerGuard(activeRecord, 'leaveGuards', leaveGuard);
}
/**
 * Add a navigation guard that triggers whenever the current location is about
 * to be updated. Similar to {@link beforeRouteUpdate} but can be used in any
 * component. The guard is removed when the component is unmounted.
 *
 * @param updateGuard - {@link NavigationGuard}
 */
function onBeforeRouteUpdate(updateGuard) {
    if (false) {}
    const activeRecord = inject(matchedRouteKey, 
    // to avoid warning
    {}).value;
    if (!activeRecord) {
        ( false) &&
            false;
        return;
    }
    registerGuard(activeRecord, 'updateGuards', updateGuard);
}
function guardToPromiseFn(guard, to, from, record, name) {
    // keep a reference to the enterCallbackArray to prevent pushing callbacks if a new navigation took place
    const enterCallbackArray = record &&
        // name is defined if record is because of the function overload
        (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
    return () => new Promise((resolve, reject) => {
        const next = (valid) => {
            if (valid === false)
                reject(createRouterError(4 /* NAVIGATION_ABORTED */, {
                    from,
                    to,
                }));
            else if (valid instanceof Error) {
                reject(valid);
            }
            else if (isRouteLocation(valid)) {
                reject(createRouterError(2 /* NAVIGATION_GUARD_REDIRECT */, {
                    from: to,
                    to: valid,
                }));
            }
            else {
                if (enterCallbackArray &&
                    // since enterCallbackArray is truthy, both record and name also are
                    record.enterCallbacks[name] === enterCallbackArray &&
                    typeof valid === 'function')
                    enterCallbackArray.push(valid);
                resolve();
            }
        };
        // wrapping with Promise.resolve allows it to work with both async and sync guards
        const guardReturn = guard.call(record && record.instances[name], to, from, ( false) ? undefined : next);
        let guardCall = Promise.resolve(guardReturn);
        if (guard.length < 3)
            guardCall = guardCall.then(next);
        if (false) {}
        guardCall.catch(err => reject(err));
    });
}
function canOnlyBeCalledOnce(next, to, from) {
    let called = 0;
    return function () {
        if (called++ === 1)
            vue_router_esm_bundler_warn(`The "next" callback was called more than once in one navigation guard when going from "${from.fullPath}" to "${to.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`);
        // @ts-expect-error: we put it in the original one because it's easier to check
        next._called = true;
        if (called === 1)
            next.apply(null, arguments);
    };
}
function extractComponentsGuards(matched, guardType, to, from) {
    const guards = [];
    for (const record of matched) {
        for (const name in record.components) {
            let rawComponent = record.components[name];
            if ((false)) {}
            // skip update and leave guards if the route component is not mounted
            if (guardType !== 'beforeRouteEnter' && !record.instances[name])
                continue;
            if (isRouteComponent(rawComponent)) {
                // __vccOpts is added by vue-class-component and contain the regular options
                const options = rawComponent.__vccOpts || rawComponent;
                const guard = options[guardType];
                guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
            }
            else {
                // start requesting the chunk already
                let componentPromise = rawComponent();
                if (false) {}
                guards.push(() => componentPromise.then(resolved => {
                    if (!resolved)
                        return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
                    const resolvedComponent = isESModule(resolved)
                        ? resolved.default
                        : resolved;
                    // replace the function with the resolved component
                    record.components[name] = resolvedComponent;
                    // __vccOpts is added by vue-class-component and contain the regular options
                    const options = resolvedComponent.__vccOpts || resolvedComponent;
                    const guard = options[guardType];
                    return guard && guardToPromiseFn(guard, to, from, record, name)();
                }));
            }
        }
    }
    return guards;
}
/**
 * Allows differentiating lazy components from functional components and vue-class-component
 *
 * @param component
 */
function isRouteComponent(component) {
    return (typeof component === 'object' ||
        'displayName' in component ||
        'props' in component ||
        '__vccOpts' in component);
}

// TODO: we could allow currentRoute as a prop to expose `isActive` and
// `isExactActive` behavior should go through an RFC
function useLink(props) {
    const router = inject(routerKey);
    const currentRoute = inject(routeLocationKey);
    const route = runtime_core_esm_bundler_computed(() => router.resolve(unref(props.to)));
    const activeRecordIndex = runtime_core_esm_bundler_computed(() => {
        const { matched } = route.value;
        const { length } = matched;
        const routeMatched = matched[length - 1];
        const currentMatched = currentRoute.matched;
        if (!routeMatched || !currentMatched.length)
            return -1;
        const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
        if (index > -1)
            return index;
        // possible parent record
        const parentRecordPath = getOriginalPath(matched[length - 2]);
        return (
        // we are dealing with nested routes
        length > 1 &&
            // if the parent and matched route have the same path, this link is
            // referring to the empty child. Or we currently are on a different
            // child of the same parent
            getOriginalPath(routeMatched) === parentRecordPath &&
            // avoid comparing the child with its parent
            currentMatched[currentMatched.length - 1].path !== parentRecordPath
            ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2]))
            : index);
    });
    const isActive = runtime_core_esm_bundler_computed(() => activeRecordIndex.value > -1 &&
        includesParams(currentRoute.params, route.value.params));
    const isExactActive = runtime_core_esm_bundler_computed(() => activeRecordIndex.value > -1 &&
        activeRecordIndex.value === currentRoute.matched.length - 1 &&
        isSameRouteLocationParams(currentRoute.params, route.value.params));
    function navigate(e = {}) {
        if (guardEvent(e)) {
            return router[unref(props.replace) ? 'replace' : 'push'](unref(props.to)
            // avoid uncaught errors are they are logged anyway
            ).catch(noop);
        }
        return Promise.resolve();
    }
    // devtools only
    if ((( false) || __VUE_PROD_DEVTOOLS__) && isBrowser) {
        const instance = getCurrentInstance();
        if (instance) {
            const linkContextDevtools = {
                route: route.value,
                isActive: isActive.value,
                isExactActive: isExactActive.value,
            };
            // @ts-expect-error: this is internal
            instance.__vrl_devtools = instance.__vrl_devtools || [];
            // @ts-expect-error: this is internal
            instance.__vrl_devtools.push(linkContextDevtools);
            watchEffect(() => {
                linkContextDevtools.route = route.value;
                linkContextDevtools.isActive = isActive.value;
                linkContextDevtools.isExactActive = isExactActive.value;
            }, { flush: 'post' });
        }
    }
    return {
        route,
        href: runtime_core_esm_bundler_computed(() => route.value.href),
        isActive,
        isExactActive,
        navigate,
    };
}
const RouterLinkImpl = /*#__PURE__*/ defineComponent({
    name: 'RouterLink',
    props: {
        to: {
            type: [String, Object],
            required: true,
        },
        replace: Boolean,
        activeClass: String,
        // inactiveClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: 'page',
        },
    },
    useLink,
    setup(props, { slots }) {
        const link = reactive(useLink(props));
        const { options } = inject(routerKey);
        const elClass = runtime_core_esm_bundler_computed(() => ({
            [getLinkClass(props.activeClass, options.linkActiveClass, 'router-link-active')]: link.isActive,
            // [getLinkClass(
            //   props.inactiveClass,
            //   options.linkInactiveClass,
            //   'router-link-inactive'
            // )]: !link.isExactActive,
            [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, 'router-link-exact-active')]: link.isExactActive,
        }));
        return () => {
            const children = slots.default && slots.default(link);
            return props.custom
                ? children
                : h('a', {
                    'aria-current': link.isExactActive
                        ? props.ariaCurrentValue
                        : null,
                    href: link.href,
                    // this would override user added attrs but Vue will still add
                    // the listener so we end up triggering both
                    onClick: link.navigate,
                    class: elClass.value,
                }, children);
        };
    },
});
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
/**
 * Component to render a link that triggers a navigation on click.
 */
const RouterLink = RouterLinkImpl;
function guardEvent(e) {
    // don't redirect with control keys
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
        return;
    // don't redirect when preventDefault called
    if (e.defaultPrevented)
        return;
    // don't redirect on right click
    if (e.button !== undefined && e.button !== 0)
        return;
    // don't redirect if `target="_blank"`
    // @ts-expect-error getAttribute does exist
    if (e.currentTarget && e.currentTarget.getAttribute) {
        // @ts-expect-error getAttribute exists
        const target = e.currentTarget.getAttribute('target');
        if (/\b_blank\b/i.test(target))
            return;
    }
    // this may be a Weex event which doesn't have this method
    if (e.preventDefault)
        e.preventDefault();
    return true;
}
function includesParams(outer, inner) {
    for (const key in inner) {
        const innerValue = inner[key];
        const outerValue = outer[key];
        if (typeof innerValue === 'string') {
            if (innerValue !== outerValue)
                return false;
        }
        else {
            if (!Array.isArray(outerValue) ||
                outerValue.length !== innerValue.length ||
                innerValue.some((value, i) => value !== outerValue[i]))
                return false;
        }
    }
    return true;
}
/**
 * Get the original path value of a record by following its aliasOf
 * @param record
 */
function getOriginalPath(record) {
    return record ? (record.aliasOf ? record.aliasOf.path : record.path) : '';
}
/**
 * Utility class to get the active class based on defaults.
 * @param propClass
 * @param globalClass
 * @param defaultClass
 */
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null
    ? propClass
    : globalClass != null
        ? globalClass
        : defaultClass;

const RouterViewImpl = /*#__PURE__*/ defineComponent({
    name: 'RouterView',
    // #674 we manually inherit them
    inheritAttrs: false,
    props: {
        name: {
            type: String,
            default: 'default',
        },
        route: Object,
    },
    setup(props, { attrs, slots }) {
        ( false) && false;
        const injectedRoute = inject(routerViewLocationKey);
        const routeToDisplay = runtime_core_esm_bundler_computed(() => props.route || injectedRoute.value);
        const depth = inject(viewDepthKey, 0);
        const matchedRouteRef = runtime_core_esm_bundler_computed(() => routeToDisplay.value.matched[depth]);
        provide(viewDepthKey, depth + 1);
        provide(matchedRouteKey, matchedRouteRef);
        provide(routerViewLocationKey, routeToDisplay);
        const viewRef = reactivity_esm_bundler_ref();
        // watch at the same time the component instance, the route record we are
        // rendering, and the name
        watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
            // copy reused instances
            if (to) {
                // this will update the instance for new instances as well as reused
                // instances when navigating to a new route
                to.instances[name] = instance;
                // the component instance is reused for a different route or name so
                // we copy any saved update or leave guards. With async setup, the
                // mounting component will mount before the matchedRoute changes,
                // making instance === oldInstance, so we check if guards have been
                // added before. This works because we remove guards when
                // unmounting/deactivating components
                if (from && from !== to && instance && instance === oldInstance) {
                    if (!to.leaveGuards.size) {
                        to.leaveGuards = from.leaveGuards;
                    }
                    if (!to.updateGuards.size) {
                        to.updateGuards = from.updateGuards;
                    }
                }
            }
            // trigger beforeRouteEnter next callbacks
            if (instance &&
                to &&
                // if there is no instance but to and from are the same this might be
                // the first visit
                (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
                (to.enterCallbacks[name] || []).forEach(callback => callback(instance));
            }
        }, { flush: 'post' });
        return () => {
            const route = routeToDisplay.value;
            const matchedRoute = matchedRouteRef.value;
            const ViewComponent = matchedRoute && matchedRoute.components[props.name];
            // we need the value at the time we render because when we unmount, we
            // navigated to a different location so the value is different
            const currentName = props.name;
            if (!ViewComponent) {
                return vue_router_esm_bundler_normalizeSlot(slots.default, { Component: ViewComponent, route });
            }
            // props from route configuration
            const routePropsOption = matchedRoute.props[props.name];
            const routeProps = routePropsOption
                ? routePropsOption === true
                    ? route.params
                    : typeof routePropsOption === 'function'
                        ? routePropsOption(route)
                        : routePropsOption
                : null;
            const onVnodeUnmounted = vnode => {
                // remove the instance reference to prevent leak
                if (vnode.component.isUnmounted) {
                    matchedRoute.instances[currentName] = null;
                }
            };
            const component = h(ViewComponent, vue_router_esm_bundler_assign({}, routeProps, attrs, {
                onVnodeUnmounted,
                ref: viewRef,
            }));
            if ((( false) || __VUE_PROD_DEVTOOLS__) &&
                isBrowser &&
                component.ref) {
                // TODO: can display if it's an alias, its props
                const info = {
                    depth,
                    name: matchedRoute.name,
                    path: matchedRoute.path,
                    meta: matchedRoute.meta,
                };
                const internalInstances = Array.isArray(component.ref)
                    ? component.ref.map(r => r.i)
                    : [component.ref.i];
                internalInstances.forEach(instance => {
                    // @ts-expect-error
                    instance.__vrv_devtools = info;
                });
            }
            return (
            // pass the vnode to the slot as a prop.
            // h and <component :is="..."> both accept vnodes
            vue_router_esm_bundler_normalizeSlot(slots.default, { Component: component, route }) ||
                component);
        };
    },
});
function vue_router_esm_bundler_normalizeSlot(slot, data) {
    if (!slot)
        return null;
    const slotContent = slot(data);
    return slotContent.length === 1 ? slotContent[0] : slotContent;
}
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
/**
 * Component to display the current route the user is at.
 */
const RouterView = RouterViewImpl;
// warn against deprecated usage with <transition> & <keep-alive>
// due to functional component being no longer eager in Vue 3
function warnDeprecatedUsage() {
    const instance = getCurrentInstance();
    const parentName = instance.parent && instance.parent.type.name;
    if (parentName &&
        (parentName === 'KeepAlive' || parentName.includes('Transition'))) {
        const comp = parentName === 'KeepAlive' ? 'keep-alive' : 'transition';
        vue_router_esm_bundler_warn(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.\n` +
            `Use slot props instead:\n\n` +
            `<router-view v-slot="{ Component }">\n` +
            `  <${comp}>\n` +
            `    <component :is="Component" />\n` +
            `  </${comp}>\n` +
            `</router-view>`);
    }
}

function formatRouteLocation(routeLocation, tooltip) {
    const copy = vue_router_esm_bundler_assign({}, routeLocation, {
        // remove variables that can contain vue instances
        matched: routeLocation.matched.map(matched => omit(matched, ['instances', 'children', 'aliasOf'])),
    });
    return {
        _custom: {
            type: null,
            readOnly: true,
            display: routeLocation.fullPath,
            tooltip,
            value: copy,
        },
    };
}
function formatDisplay(display) {
    return {
        _custom: {
            display,
        },
    };
}
// to support multiple router instances
let routerId = 0;
function addDevtools(app, router, matcher) {
    // Take over router.beforeEach and afterEach
    // make sure we are not registering the devtool twice
    if (router.__hasDevtools)
        return;
    router.__hasDevtools = true;
    // increment to support multiple router instances
    const id = routerId++;
    setupDevtoolsPlugin({
        id: 'org.vuejs.router' + (id ? '.' + id : ''),
        label: 'Vue Router',
        packageName: 'vue-router',
        homepage: 'https://router.vuejs.org',
        logo: 'https://router.vuejs.org/logo.png',
        componentStateTypes: ['Routing'],
        app,
    }, api => {
        // display state added by the router
        api.on.inspectComponent((payload, ctx) => {
            if (payload.instanceData) {
                payload.instanceData.state.push({
                    type: 'Routing',
                    key: '$route',
                    editable: false,
                    value: formatRouteLocation(router.currentRoute.value, 'Current Route'),
                });
            }
        });
        // mark router-link as active and display tags on router views
        api.on.visitComponentTree(({ treeNode: node, componentInstance }) => {
            if (componentInstance.__vrv_devtools) {
                const info = componentInstance.__vrv_devtools;
                node.tags.push({
                    label: (info.name ? `${info.name.toString()}: ` : '') + info.path,
                    textColor: 0,
                    tooltip: 'This component is rendered by &lt;router-view&gt;',
                    backgroundColor: PINK_500,
                });
            }
            // if multiple useLink are used
            if (Array.isArray(componentInstance.__vrl_devtools)) {
                componentInstance.__devtoolsApi = api;
                componentInstance.__vrl_devtools.forEach(devtoolsData => {
                    let backgroundColor = ORANGE_400;
                    let tooltip = '';
                    if (devtoolsData.isExactActive) {
                        backgroundColor = LIME_500;
                        tooltip = 'This is exactly active';
                    }
                    else if (devtoolsData.isActive) {
                        backgroundColor = BLUE_600;
                        tooltip = 'This link is active';
                    }
                    node.tags.push({
                        label: devtoolsData.route.path,
                        textColor: 0,
                        tooltip,
                        backgroundColor,
                    });
                });
            }
        });
        watch(router.currentRoute, () => {
            // refresh active state
            refreshRoutesView();
            api.notifyComponentUpdate();
            api.sendInspectorTree(routerInspectorId);
            api.sendInspectorState(routerInspectorId);
        });
        const navigationsLayerId = 'router:navigations:' + id;
        api.addTimelineLayer({
            id: navigationsLayerId,
            label: `Router${id ? ' ' + id : ''} Navigations`,
            color: 0x40a8c4,
        });
        // const errorsLayerId = 'router:errors'
        // api.addTimelineLayer({
        //   id: errorsLayerId,
        //   label: 'Router Errors',
        //   color: 0xea5455,
        // })
        router.onError((error, to) => {
            api.addTimelineEvent({
                layerId: navigationsLayerId,
                event: {
                    title: 'Error during Navigation',
                    subtitle: to.fullPath,
                    logType: 'error',
                    time: Date.now(),
                    data: { error },
                    groupId: to.meta.__navigationId,
                },
            });
        });
        // attached to `meta` and used to group events
        let navigationId = 0;
        router.beforeEach((to, from) => {
            const data = {
                guard: formatDisplay('beforeEach'),
                from: formatRouteLocation(from, 'Current Location during this navigation'),
                to: formatRouteLocation(to, 'Target location'),
            };
            // Used to group navigations together, hide from devtools
            Object.defineProperty(to.meta, '__navigationId', {
                value: navigationId++,
            });
            api.addTimelineEvent({
                layerId: navigationsLayerId,
                event: {
                    time: Date.now(),
                    title: 'Start of navigation',
                    subtitle: to.fullPath,
                    data,
                    groupId: to.meta.__navigationId,
                },
            });
        });
        router.afterEach((to, from, failure) => {
            const data = {
                guard: formatDisplay('afterEach'),
            };
            if (failure) {
                data.failure = {
                    _custom: {
                        type: Error,
                        readOnly: true,
                        display: failure ? failure.message : '',
                        tooltip: 'Navigation Failure',
                        value: failure,
                    },
                };
                data.status = formatDisplay('❌');
            }
            else {
                data.status = formatDisplay('✅');
            }
            // we set here to have the right order
            data.from = formatRouteLocation(from, 'Current Location during this navigation');
            data.to = formatRouteLocation(to, 'Target location');
            api.addTimelineEvent({
                layerId: navigationsLayerId,
                event: {
                    title: 'End of navigation',
                    subtitle: to.fullPath,
                    time: Date.now(),
                    data,
                    logType: failure ? 'warning' : 'default',
                    groupId: to.meta.__navigationId,
                },
            });
        });
        /**
         * Inspector of Existing routes
         */
        const routerInspectorId = 'router-inspector:' + id;
        api.addInspector({
            id: routerInspectorId,
            label: 'Routes' + (id ? ' ' + id : ''),
            icon: 'book',
            treeFilterPlaceholder: 'Search routes',
        });
        function refreshRoutesView() {
            // the routes view isn't active
            if (!activeRoutesPayload)
                return;
            const payload = activeRoutesPayload;
            // children routes will appear as nested
            let routes = matcher.getRoutes().filter(route => !route.parent);
            // reset match state to false
            routes.forEach(resetMatchStateOnRouteRecord);
            // apply a match state if there is a payload
            if (payload.filter) {
                routes = routes.filter(route => 
                // save matches state based on the payload
                isRouteMatching(route, payload.filter.toLowerCase()));
            }
            // mark active routes
            routes.forEach(route => markRouteRecordActive(route, router.currentRoute.value));
            payload.rootNodes = routes.map(formatRouteRecordForInspector);
        }
        let activeRoutesPayload;
        api.on.getInspectorTree(payload => {
            activeRoutesPayload = payload;
            if (payload.app === app && payload.inspectorId === routerInspectorId) {
                refreshRoutesView();
            }
        });
        /**
         * Display information about the currently selected route record
         */
        api.on.getInspectorState(payload => {
            if (payload.app === app && payload.inspectorId === routerInspectorId) {
                const routes = matcher.getRoutes();
                const route = routes.find(route => route.record.__vd_id === payload.nodeId);
                if (route) {
                    payload.state = {
                        options: formatRouteRecordMatcherForStateInspector(route),
                    };
                }
            }
        });
        api.sendInspectorTree(routerInspectorId);
        api.sendInspectorState(routerInspectorId);
    });
}
function modifierForKey(key) {
    if (key.optional) {
        return key.repeatable ? '*' : '?';
    }
    else {
        return key.repeatable ? '+' : '';
    }
}
function formatRouteRecordMatcherForStateInspector(route) {
    const { record } = route;
    const fields = [
        { editable: false, key: 'path', value: record.path },
    ];
    if (record.name != null) {
        fields.push({
            editable: false,
            key: 'name',
            value: record.name,
        });
    }
    fields.push({ editable: false, key: 'regexp', value: route.re });
    if (route.keys.length) {
        fields.push({
            editable: false,
            key: 'keys',
            value: {
                _custom: {
                    type: null,
                    readOnly: true,
                    display: route.keys
                        .map(key => `${key.name}${modifierForKey(key)}`)
                        .join(' '),
                    tooltip: 'Param keys',
                    value: route.keys,
                },
            },
        });
    }
    if (record.redirect != null) {
        fields.push({
            editable: false,
            key: 'redirect',
            value: record.redirect,
        });
    }
    if (route.alias.length) {
        fields.push({
            editable: false,
            key: 'aliases',
            value: route.alias.map(alias => alias.record.path),
        });
    }
    fields.push({
        key: 'score',
        editable: false,
        value: {
            _custom: {
                type: null,
                readOnly: true,
                display: route.score.map(score => score.join(', ')).join(' | '),
                tooltip: 'Score used to sort routes',
                value: route.score,
            },
        },
    });
    return fields;
}
/**
 * Extracted from tailwind palette
 */
const PINK_500 = 0xec4899;
const BLUE_600 = 0x2563eb;
const LIME_500 = 0x84cc16;
const CYAN_400 = 0x22d3ee;
const ORANGE_400 = 0xfb923c;
// const GRAY_100 = 0xf4f4f5
const DARK = 0x666666;
function formatRouteRecordForInspector(route) {
    const tags = [];
    const { record } = route;
    if (record.name != null) {
        tags.push({
            label: String(record.name),
            textColor: 0,
            backgroundColor: CYAN_400,
        });
    }
    if (record.aliasOf) {
        tags.push({
            label: 'alias',
            textColor: 0,
            backgroundColor: ORANGE_400,
        });
    }
    if (route.__vd_match) {
        tags.push({
            label: 'matches',
            textColor: 0,
            backgroundColor: PINK_500,
        });
    }
    if (route.__vd_exactActive) {
        tags.push({
            label: 'exact',
            textColor: 0,
            backgroundColor: LIME_500,
        });
    }
    if (route.__vd_active) {
        tags.push({
            label: 'active',
            textColor: 0,
            backgroundColor: BLUE_600,
        });
    }
    if (record.redirect) {
        tags.push({
            label: 'redirect: ' +
                (typeof record.redirect === 'string' ? record.redirect : 'Object'),
            textColor: 0xffffff,
            backgroundColor: DARK,
        });
    }
    // add an id to be able to select it. Using the `path` is not possible because
    // empty path children would collide with their parents
    let id = record.__vd_id;
    if (id == null) {
        id = String(routeRecordId++);
        record.__vd_id = id;
    }
    return {
        id,
        label: record.path,
        tags,
        children: route.children.map(formatRouteRecordForInspector),
    };
}
//  incremental id for route records and inspector state
let routeRecordId = 0;
const EXTRACT_REGEXP_RE = /^\/(.*)\/([a-z]*)$/;
function markRouteRecordActive(route, currentRoute) {
    // no route will be active if matched is empty
    // reset the matching state
    const isExactActive = currentRoute.matched.length &&
        isSameRouteRecord(currentRoute.matched[currentRoute.matched.length - 1], route.record);
    route.__vd_exactActive = route.__vd_active = isExactActive;
    if (!isExactActive) {
        route.__vd_active = currentRoute.matched.some(match => isSameRouteRecord(match, route.record));
    }
    route.children.forEach(childRoute => markRouteRecordActive(childRoute, currentRoute));
}
function resetMatchStateOnRouteRecord(route) {
    route.__vd_match = false;
    route.children.forEach(resetMatchStateOnRouteRecord);
}
function isRouteMatching(route, filter) {
    const found = String(route.re).match(EXTRACT_REGEXP_RE);
    route.__vd_match = false;
    if (!found || found.length < 3) {
        return false;
    }
    // use a regexp without $ at the end to match nested routes better
    const nonEndingRE = new RegExp(found[1].replace(/\$$/, ''), found[2]);
    if (nonEndingRE.test(filter)) {
        // mark children as matches
        route.children.forEach(child => isRouteMatching(child, filter));
        // exception case: `/`
        if (route.record.path !== '/' || filter === '/') {
            route.__vd_match = route.re.test(filter);
            return true;
        }
        // hide the / route
        return false;
    }
    const path = route.record.path.toLowerCase();
    const decodedPath = decode(path);
    // also allow partial matching on the path
    if (!filter.startsWith('/') &&
        (decodedPath.includes(filter) || path.includes(filter)))
        return true;
    if (decodedPath.startsWith(filter) || path.startsWith(filter))
        return true;
    if (route.record.name && String(route.record.name).includes(filter))
        return true;
    return route.children.some(child => isRouteMatching(child, filter));
}
function omit(obj, keys) {
    const ret = {};
    for (const key in obj) {
        if (!keys.includes(key)) {
            // @ts-expect-error
            ret[key] = obj[key];
        }
    }
    return ret;
}

/**
 * Creates a Router instance that can be used by a Vue app.
 *
 * @param options - {@link RouterOptions}
 */
function createRouter(options) {
    const matcher = createRouterMatcher(options.routes, options);
    const parseQuery$1 = options.parseQuery || parseQuery;
    const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
    const routerHistory = options.history;
    if (false)
        {}
    const beforeGuards = useCallbacks();
    const beforeResolveGuards = useCallbacks();
    const afterGuards = useCallbacks();
    const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
    let pendingLocation = START_LOCATION_NORMALIZED;
    // leave the scrollRestoration if no scrollBehavior is provided
    if (isBrowser && options.scrollBehavior && 'scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    const normalizeParams = applyToParams.bind(null, paramValue => '' + paramValue);
    const encodeParams = applyToParams.bind(null, encodeParam);
    const decodeParams = 
    // @ts-expect-error: intentionally avoid the type check
    applyToParams.bind(null, decode);
    function addRoute(parentOrRoute, route) {
        let parent;
        let record;
        if (isRouteName(parentOrRoute)) {
            parent = matcher.getRecordMatcher(parentOrRoute);
            record = route;
        }
        else {
            record = parentOrRoute;
        }
        return matcher.addRoute(record, parent);
    }
    function removeRoute(name) {
        const recordMatcher = matcher.getRecordMatcher(name);
        if (recordMatcher) {
            matcher.removeRoute(recordMatcher);
        }
        else if ((false)) {}
    }
    function getRoutes() {
        return matcher.getRoutes().map(routeMatcher => routeMatcher.record);
    }
    function hasRoute(name) {
        return !!matcher.getRecordMatcher(name);
    }
    function resolve(rawLocation, currentLocation) {
        // const objectLocation = routerLocationAsObject(rawLocation)
        // we create a copy to modify it later
        currentLocation = vue_router_esm_bundler_assign({}, currentLocation || currentRoute.value);
        if (typeof rawLocation === 'string') {
            const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
            const matchedRoute = matcher.resolve({ path: locationNormalized.path }, currentLocation);
            const href = routerHistory.createHref(locationNormalized.fullPath);
            if ((false)) {}
            // locationNormalized is always a new object
            return vue_router_esm_bundler_assign(locationNormalized, matchedRoute, {
                params: decodeParams(matchedRoute.params),
                hash: decode(locationNormalized.hash),
                redirectedFrom: undefined,
                href,
            });
        }
        let matcherLocation;
        // path could be relative in object as well
        if ('path' in rawLocation) {
            if (false) {}
            matcherLocation = vue_router_esm_bundler_assign({}, rawLocation, {
                path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path,
            });
        }
        else {
            // remove any nullish param
            const targetParams = vue_router_esm_bundler_assign({}, rawLocation.params);
            for (const key in targetParams) {
                if (targetParams[key] == null) {
                    delete targetParams[key];
                }
            }
            // pass encoded values to the matcher so it can produce encoded path and fullPath
            matcherLocation = vue_router_esm_bundler_assign({}, rawLocation, {
                params: encodeParams(rawLocation.params),
            });
            // current location params are decoded, we need to encode them in case the
            // matcher merges the params
            currentLocation.params = encodeParams(currentLocation.params);
        }
        const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
        const hash = rawLocation.hash || '';
        if (false) {}
        // decoding them) the matcher might have merged current location params so
        // we need to run the decoding again
        matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
        const fullPath = stringifyURL(stringifyQuery$1, vue_router_esm_bundler_assign({}, rawLocation, {
            hash: encodeHash(hash),
            path: matchedRoute.path,
        }));
        const href = routerHistory.createHref(fullPath);
        if ((false)) {}
        return vue_router_esm_bundler_assign({
            fullPath,
            // keep the hash encoded so fullPath is effectively path + encodedQuery +
            // hash
            hash,
            query: 
            // if the user is using a custom query lib like qs, we might have
            // nested objects, so we keep the query as is, meaning it can contain
            // numbers at `$route.query`, but at the point, the user will have to
            // use their own type anyway.
            // https://github.com/vuejs/router/issues/328#issuecomment-649481567
            stringifyQuery$1 === stringifyQuery
                ? normalizeQuery(rawLocation.query)
                : (rawLocation.query || {}),
        }, matchedRoute, {
            redirectedFrom: undefined,
            href,
        });
    }
    function locationAsObject(to) {
        return typeof to === 'string'
            ? parseURL(parseQuery$1, to, currentRoute.value.path)
            : vue_router_esm_bundler_assign({}, to);
    }
    function checkCanceledNavigation(to, from) {
        if (pendingLocation !== to) {
            return createRouterError(8 /* NAVIGATION_CANCELLED */, {
                from,
                to,
            });
        }
    }
    function push(to) {
        return pushWithRedirect(to);
    }
    function replace(to) {
        return push(vue_router_esm_bundler_assign(locationAsObject(to), { replace: true }));
    }
    function handleRedirectRecord(to) {
        const lastMatched = to.matched[to.matched.length - 1];
        if (lastMatched && lastMatched.redirect) {
            const { redirect } = lastMatched;
            let newTargetLocation = typeof redirect === 'function' ? redirect(to) : redirect;
            if (typeof newTargetLocation === 'string') {
                newTargetLocation =
                    newTargetLocation.includes('?') || newTargetLocation.includes('#')
                        ? (newTargetLocation = locationAsObject(newTargetLocation))
                        : // force empty params
                            { path: newTargetLocation };
                // @ts-expect-error: force empty params when a string is passed to let
                // the router parse them again
                newTargetLocation.params = {};
            }
            if (false) {}
            return vue_router_esm_bundler_assign({
                query: to.query,
                hash: to.hash,
                params: to.params,
            }, newTargetLocation);
        }
    }
    function pushWithRedirect(to, redirectedFrom) {
        const targetLocation = (pendingLocation = resolve(to));
        const from = currentRoute.value;
        const data = to.state;
        const force = to.force;
        // to could be a string where `replace` is a function
        const replace = to.replace === true;
        const shouldRedirect = handleRedirectRecord(targetLocation);
        if (shouldRedirect)
            return pushWithRedirect(vue_router_esm_bundler_assign(locationAsObject(shouldRedirect), {
                state: data,
                force,
                replace,
            }), 
            // keep original redirectedFrom if it exists
            redirectedFrom || targetLocation);
        // if it was a redirect we already called `pushWithRedirect` above
        const toLocation = targetLocation;
        toLocation.redirectedFrom = redirectedFrom;
        let failure;
        if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
            failure = createRouterError(16 /* NAVIGATION_DUPLICATED */, { to: toLocation, from });
            // trigger scroll to allow scrolling to the same anchor
            handleScroll(from, from, 
            // this is a push, the only way for it to be triggered from a
            // history.listen is with a redirect, which makes it become a push
            true, 
            // This cannot be the first navigation because the initial location
            // cannot be manually navigated to
            false);
        }
        return (failure ? Promise.resolve(failure) : navigate(toLocation, from))
            .catch((error) => isNavigationFailure(error)
            ? // navigation redirects still mark the router as ready
                isNavigationFailure(error, 2 /* NAVIGATION_GUARD_REDIRECT */)
                    ? error
                    : markAsReady(error) // also returns the error
            : // reject any unknown error
                triggerError(error, toLocation, from))
            .then((failure) => {
            if (failure) {
                if (isNavigationFailure(failure, 2 /* NAVIGATION_GUARD_REDIRECT */)) {
                    if (false) {}
                    return pushWithRedirect(
                    // keep options
                    vue_router_esm_bundler_assign(locationAsObject(failure.to), {
                        state: data,
                        force,
                        replace,
                    }), 
                    // preserve the original redirectedFrom if any
                    redirectedFrom || toLocation);
                }
            }
            else {
                // if we fail we don't finalize the navigation
                failure = finalizeNavigation(toLocation, from, true, replace, data);
            }
            triggerAfterEach(toLocation, from, failure);
            return failure;
        });
    }
    /**
     * Helper to reject and skip all navigation guards if a new navigation happened
     * @param to
     * @param from
     */
    function checkCanceledNavigationAndReject(to, from) {
        const error = checkCanceledNavigation(to, from);
        return error ? Promise.reject(error) : Promise.resolve();
    }
    // TODO: refactor the whole before guards by internally using router.beforeEach
    function navigate(to, from) {
        let guards;
        const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
        // all components here have been resolved once because we are leaving
        guards = extractComponentsGuards(leavingRecords.reverse(), 'beforeRouteLeave', to, from);
        // leavingRecords is already reversed
        for (const record of leavingRecords) {
            record.leaveGuards.forEach(guard => {
                guards.push(guardToPromiseFn(guard, to, from));
            });
        }
        const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
        guards.push(canceledNavigationCheck);
        // run the queue of per route beforeRouteLeave guards
        return (runGuardQueue(guards)
            .then(() => {
            // check global guards beforeEach
            guards = [];
            for (const guard of beforeGuards.list()) {
                guards.push(guardToPromiseFn(guard, to, from));
            }
            guards.push(canceledNavigationCheck);
            return runGuardQueue(guards);
        })
            .then(() => {
            // check in components beforeRouteUpdate
            guards = extractComponentsGuards(updatingRecords, 'beforeRouteUpdate', to, from);
            for (const record of updatingRecords) {
                record.updateGuards.forEach(guard => {
                    guards.push(guardToPromiseFn(guard, to, from));
                });
            }
            guards.push(canceledNavigationCheck);
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        })
            .then(() => {
            // check the route beforeEnter
            guards = [];
            for (const record of to.matched) {
                // do not trigger beforeEnter on reused views
                if (record.beforeEnter && !from.matched.includes(record)) {
                    if (Array.isArray(record.beforeEnter)) {
                        for (const beforeEnter of record.beforeEnter)
                            guards.push(guardToPromiseFn(beforeEnter, to, from));
                    }
                    else {
                        guards.push(guardToPromiseFn(record.beforeEnter, to, from));
                    }
                }
            }
            guards.push(canceledNavigationCheck);
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        })
            .then(() => {
            // NOTE: at this point to.matched is normalized and does not contain any () => Promise<Component>
            // clear existing enterCallbacks, these are added by extractComponentsGuards
            to.matched.forEach(record => (record.enterCallbacks = {}));
            // check in-component beforeRouteEnter
            guards = extractComponentsGuards(enteringRecords, 'beforeRouteEnter', to, from);
            guards.push(canceledNavigationCheck);
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        })
            .then(() => {
            // check global guards beforeResolve
            guards = [];
            for (const guard of beforeResolveGuards.list()) {
                guards.push(guardToPromiseFn(guard, to, from));
            }
            guards.push(canceledNavigationCheck);
            return runGuardQueue(guards);
        })
            // catch any navigation canceled
            .catch(err => isNavigationFailure(err, 8 /* NAVIGATION_CANCELLED */)
            ? err
            : Promise.reject(err)));
    }
    function triggerAfterEach(to, from, failure) {
        // navigation is confirmed, call afterGuards
        // TODO: wrap with error handlers
        for (const guard of afterGuards.list())
            guard(to, from, failure);
    }
    /**
     * - Cleans up any navigation guards
     * - Changes the url if necessary
     * - Calls the scrollBehavior
     */
    function finalizeNavigation(toLocation, from, isPush, replace, data) {
        // a more recent navigation took place
        const error = checkCanceledNavigation(toLocation, from);
        if (error)
            return error;
        // only consider as push if it's not the first navigation
        const isFirstNavigation = from === START_LOCATION_NORMALIZED;
        const state = !isBrowser ? {} : history.state;
        // change URL only if the user did a push/replace and if it's not the initial navigation because
        // it's just reflecting the url
        if (isPush) {
            // on the initial navigation, we want to reuse the scroll position from
            // history state if it exists
            if (replace || isFirstNavigation)
                routerHistory.replace(toLocation.fullPath, vue_router_esm_bundler_assign({
                    scroll: isFirstNavigation && state && state.scroll,
                }, data));
            else
                routerHistory.push(toLocation.fullPath, data);
        }
        // accept current navigation
        currentRoute.value = toLocation;
        handleScroll(toLocation, from, isPush, isFirstNavigation);
        markAsReady();
    }
    let removeHistoryListener;
    // attach listener to history to trigger navigations
    function setupListeners() {
        removeHistoryListener = routerHistory.listen((to, _from, info) => {
            // cannot be a redirect route because it was in history
            const toLocation = resolve(to);
            // due to dynamic routing, and to hash history with manual navigation
            // (manually changing the url or calling history.hash = '#/somewhere'),
            // there could be a redirect record in history
            const shouldRedirect = handleRedirectRecord(toLocation);
            if (shouldRedirect) {
                pushWithRedirect(vue_router_esm_bundler_assign(shouldRedirect, { replace: true }), toLocation).catch(noop);
                return;
            }
            pendingLocation = toLocation;
            const from = currentRoute.value;
            // TODO: should be moved to web history?
            if (isBrowser) {
                saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
            }
            navigate(toLocation, from)
                .catch((error) => {
                if (isNavigationFailure(error, 4 /* NAVIGATION_ABORTED */ | 8 /* NAVIGATION_CANCELLED */)) {
                    return error;
                }
                if (isNavigationFailure(error, 2 /* NAVIGATION_GUARD_REDIRECT */)) {
                    // Here we could call if (info.delta) routerHistory.go(-info.delta,
                    // false) but this is bug prone as we have no way to wait the
                    // navigation to be finished before calling pushWithRedirect. Using
                    // a setTimeout of 16ms seems to work but there is not guarantee for
                    // it to work on every browser. So Instead we do not restore the
                    // history entry and trigger a new navigation as requested by the
                    // navigation guard.
                    // the error is already handled by router.push we just want to avoid
                    // logging the error
                    pushWithRedirect(error.to, toLocation
                    // avoid an uncaught rejection, let push call triggerError
                    )
                        .then(failure => {
                        // manual change in hash history #916 ending up in the URL not
                        // changing but it was changed by the manual url change, so we
                        // need to manually change it ourselves
                        if (isNavigationFailure(failure, 4 /* NAVIGATION_ABORTED */ |
                            16 /* NAVIGATION_DUPLICATED */) &&
                            !info.delta &&
                            info.type === NavigationType.pop) {
                            routerHistory.go(-1, false);
                        }
                    })
                        .catch(noop);
                    // avoid the then branch
                    return Promise.reject();
                }
                // do not restore history on unknown direction
                if (info.delta)
                    routerHistory.go(-info.delta, false);
                // unrecognized error, transfer to the global handler
                return triggerError(error, toLocation, from);
            })
                .then((failure) => {
                failure =
                    failure ||
                        finalizeNavigation(
                        // after navigation, all matched components are resolved
                        toLocation, from, false);
                // revert the navigation
                if (failure) {
                    if (info.delta) {
                        routerHistory.go(-info.delta, false);
                    }
                    else if (info.type === NavigationType.pop &&
                        isNavigationFailure(failure, 4 /* NAVIGATION_ABORTED */ | 16 /* NAVIGATION_DUPLICATED */)) {
                        // manual change in hash history #916
                        // it's like a push but lacks the information of the direction
                        routerHistory.go(-1, false);
                    }
                }
                triggerAfterEach(toLocation, from, failure);
            })
                .catch(noop);
        });
    }
    // Initialization and Errors
    let readyHandlers = useCallbacks();
    let errorHandlers = useCallbacks();
    let ready;
    /**
     * Trigger errorHandlers added via onError and throws the error as well
     *
     * @param error - error to throw
     * @param to - location we were navigating to when the error happened
     * @param from - location we were navigating from when the error happened
     * @returns the error as a rejected promise
     */
    function triggerError(error, to, from) {
        markAsReady(error);
        const list = errorHandlers.list();
        if (list.length) {
            list.forEach(handler => handler(error, to, from));
        }
        else {
            if ((false)) {}
            console.error(error);
        }
        return Promise.reject(error);
    }
    function isReady() {
        if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
            return Promise.resolve();
        return new Promise((resolve, reject) => {
            readyHandlers.add([resolve, reject]);
        });
    }
    function markAsReady(err) {
        if (!ready) {
            // still not ready if an error happened
            ready = !err;
            setupListeners();
            readyHandlers
                .list()
                .forEach(([resolve, reject]) => (err ? reject(err) : resolve()));
            readyHandlers.reset();
        }
        return err;
    }
    // Scroll behavior
    function handleScroll(to, from, isPush, isFirstNavigation) {
        const { scrollBehavior } = options;
        if (!isBrowser || !scrollBehavior)
            return Promise.resolve();
        const scrollPosition = (!isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0))) ||
            ((isFirstNavigation || !isPush) &&
                history.state &&
                history.state.scroll) ||
            null;
        return nextTick()
            .then(() => scrollBehavior(to, from, scrollPosition))
            .then(position => position && scrollToPosition(position))
            .catch(err => triggerError(err, to, from));
    }
    const go = (delta) => routerHistory.go(delta);
    let started;
    const installedApps = new Set();
    const router = {
        currentRoute,
        addRoute,
        removeRoute,
        hasRoute,
        getRoutes,
        resolve,
        options,
        push,
        replace,
        go,
        back: () => go(-1),
        forward: () => go(1),
        beforeEach: beforeGuards.add,
        beforeResolve: beforeResolveGuards.add,
        afterEach: afterGuards.add,
        onError: errorHandlers.add,
        isReady,
        install(app) {
            const router = this;
            app.component('RouterLink', RouterLink);
            app.component('RouterView', RouterView);
            app.config.globalProperties.$router = router;
            Object.defineProperty(app.config.globalProperties, '$route', {
                enumerable: true,
                get: () => unref(currentRoute),
            });
            // this initial navigation is only necessary on client, on server it doesn't
            // make sense because it will create an extra unnecessary navigation and could
            // lead to problems
            if (isBrowser &&
                // used for the initial navigation client side to avoid pushing
                // multiple times when the router is used in multiple apps
                !started &&
                currentRoute.value === START_LOCATION_NORMALIZED) {
                // see above
                started = true;
                push(routerHistory.location).catch(err => {
                    if ((false))
                        {}
                });
            }
            const reactiveRoute = {};
            for (const key in START_LOCATION_NORMALIZED) {
                // @ts-expect-error: the key matches
                reactiveRoute[key] = runtime_core_esm_bundler_computed(() => currentRoute.value[key]);
            }
            app.provide(routerKey, router);
            app.provide(routeLocationKey, reactive(reactiveRoute));
            app.provide(routerViewLocationKey, currentRoute);
            const unmountApp = app.unmount;
            installedApps.add(app);
            app.unmount = function () {
                installedApps.delete(app);
                // the router is not attached to an app anymore
                if (installedApps.size < 1) {
                    // invalidate the current navigation
                    pendingLocation = START_LOCATION_NORMALIZED;
                    removeHistoryListener && removeHistoryListener();
                    currentRoute.value = START_LOCATION_NORMALIZED;
                    started = false;
                    ready = false;
                }
                unmountApp();
            };
            if ((( false) || __VUE_PROD_DEVTOOLS__) && isBrowser) {
                addDevtools(app, router, matcher);
            }
        },
    };
    return router;
}
function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
}
function extractChangingRecords(to, from) {
    const leavingRecords = [];
    const updatingRecords = [];
    const enteringRecords = [];
    const len = Math.max(from.matched.length, to.matched.length);
    for (let i = 0; i < len; i++) {
        const recordFrom = from.matched[i];
        if (recordFrom) {
            if (to.matched.find(record => isSameRouteRecord(record, recordFrom)))
                updatingRecords.push(recordFrom);
            else
                leavingRecords.push(recordFrom);
        }
        const recordTo = to.matched[i];
        if (recordTo) {
            // the type doesn't matter because we are comparing per reference
            if (!from.matched.find(record => isSameRouteRecord(record, recordTo))) {
                enteringRecords.push(recordTo);
            }
        }
    }
    return [leavingRecords, updatingRecords, enteringRecords];
}

/**
 * Returns the router instance. Equivalent to using `$router` inside
 * templates.
 */
function useRouter() {
    return inject(routerKey);
}
/**
 * Returns the current route location. Equivalent to using `$route` inside
 * templates.
 */
function useRoute() {
    return inject(routeLocationKey);
}



// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--15-0!./src/vue/pages/Brands.vue?vue&type=template&id=7cc97b15

var Brandsvue_type_template_id_7cc97b15_hoisted_1 = {
  key: 0,
  "class": "dsw-max-w-6xl"
};
var Brandsvue_type_template_id_7cc97b15_hoisted_2 = {
  "class": "dsw-flex dsw-flex-row dsw-flex-nowrap dsw-justify-between dsw-items-center dsw-text-lg dsw-my-16"
};
var Brandsvue_type_template_id_7cc97b15_hoisted_3 = {
  "class": "dsw-flex dsw-flex-row"
};

var Brandsvue_type_template_id_7cc97b15_hoisted_4 = /*#__PURE__*/createTextVNode(" are connected to this site");

var Brandsvue_type_template_id_7cc97b15_hoisted_5 = {
  "class": "dsw-flex dsw-flex-row dsw-flex-nowrap dsw-space-x-4"
};
var Brandsvue_type_template_id_7cc97b15_hoisted_6 = {
  "class": "dsw-w-80 dsw-flex dsw-h-11"
};

var Brandsvue_type_template_id_7cc97b15_hoisted_7 = /*#__PURE__*/createBaseVNode("div", {
  "class": "dsw-max-w-0 dsw-font-dsw"
}, [/*#__PURE__*/createBaseVNode("button", {
  "class": "dsw-transform dsw-font-dsw dsw--translate-x-10 dsw-mt-3 dsw-ml-3 dsw-bg-white w-auto dsw-flex dsw-justify-end dsw-items-center"
}, [/*#__PURE__*/createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "dsw-h-5 dsw-w-5 dsw-primary-site-svg",
  viewBox: "0 0 20 20",
  fill: "#7E7E7E"
}, [/*#__PURE__*/createBaseVNode("path", {
  "fill-rule": "evenodd",
  d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
  "clip-rule": "evenodd"
})])])], -1);

var _hoisted_8 = /*#__PURE__*/createStaticVNode("<option selected=\"\" value=\"\">Sort By</option><option value=\"name_asc\">Brand: A to Z</option><option value=\"name_desc\">Brand: Z to A</option><option value=\"industry_asc\">Industry: A to Z</option><option value=\"industry_desc\">Industry: Z to A</option>", 5);

var _hoisted_13 = [_hoisted_8];
var _hoisted_14 = {
  key: 0,
  "class": "dsw-mb-4 dsw-w-full dsw-text-lg dsw-text-right"
};

var _hoisted_15 = /*#__PURE__*/createTextVNode(" Showing all brands in: ");

var _hoisted_16 = /*#__PURE__*/createTextVNode(" (");

var _hoisted_17 = /*#__PURE__*/createTextVNode(") ");

var _hoisted_18 = {
  "class": "dsw-flex dsw-flex-col dsw-w-full dsw-text-lg dsw-bg-white"
};

var _hoisted_19 = /*#__PURE__*/createStaticVNode("<div class=\"dsw-flex dsw-flex-row dsw-text-white dsw-bg-gray-800 dsw-py-5 dsw-px-8 dsw-rounded-t dsw-align-center dsw-items-center\"><div class=\"dsw-grow\">Brand</div><div class=\"dsw-w-1/4\">Industry</div><div class=\"dsw-w-1/4\">URL&#39;s Syndicated</div><div class=\"dsw-flex dsw-justify-center dsw-items-center dsw-w-1/6\">Configure</div></div>", 1);

var _hoisted_20 = {
  key: 0,
  "class": "dsw-h-60 dsw-relative"
};

var _hoisted_21 = /*#__PURE__*/createStaticVNode("<div class=\"dsw-text-black dsw-absolute dsw-h-full dsw-w-full dsw-top-0 dsw-left-0 dsw-flex dsw-flex-col dsw-items-center dsw-justify-center\"><div><svg class=\"dsw-opacity-50 dsw-animate-spin dsw-h-10 dsw-w-10 dsw-text-black\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"><circle class=\"dsw-opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" stroke-width=\"4\"></circle><path class=\"dsw-opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z\"></path></svg></div><div class=\"dsw-mt-2 dsw-opacity-75 dsw-text-lg\">Loading...</div></div>", 1);

var _hoisted_22 = [_hoisted_21];
var _hoisted_23 = ["onClick"];
var _hoisted_24 = ["src"];
var _hoisted_25 = {
  key: 1
};
var _hoisted_26 = {
  "class": "dsw-w-1/4"
};
var _hoisted_27 = ["onClick"];
var _hoisted_28 = {
  "class": "dsw-w-1/4"
};
var _hoisted_29 = {
  "class": "dsw-flex dsw-justify-center dsw-items-center dsw-w-1/6"
};
var _hoisted_30 = ["onClick"];

var _hoisted_31 = /*#__PURE__*/createBaseVNode("path", {
  id: "Icon_ionic-ios-settings",
  "data-name": "Icon ionic-ios-settings",
  d: "M28.354,17.5A3.345,3.345,0,0,1,30.5,14.376a13.256,13.256,0,0,0-1.6-3.865,3.391,3.391,0,0,1-1.361.291,3.338,3.338,0,0,1-3.054-4.7,13.223,13.223,0,0,0-3.859-1.6,3.343,3.343,0,0,1-6.243,0,13.264,13.264,0,0,0-3.866,1.6,3.338,3.338,0,0,1-3.054,4.7A3.281,3.281,0,0,1,6.1,10.511a13.549,13.549,0,0,0-1.6,3.872,3.344,3.344,0,0,1,.007,6.241,13.256,13.256,0,0,0,1.6,3.865A3.339,3.339,0,0,1,10.519,28.9a13.341,13.341,0,0,0,3.866,1.6,3.337,3.337,0,0,1,6.229,0,13.264,13.264,0,0,0,3.866-1.6,3.343,3.343,0,0,1,4.408-4.407,13.334,13.334,0,0,0,1.6-3.865A3.361,3.361,0,0,1,28.354,17.5ZM17.561,22.905a5.415,5.415,0,1,1,5.417-5.415A5.414,5.414,0,0,1,17.561,22.905Z",
  transform: "translate(-4.5 -4.5)",
  fill: "#13252c"
}, null, -1);

var _hoisted_32 = [_hoisted_31];
var _hoisted_33 = {
  key: 2,
  "class": "dsw-p-5"
};
var _hoisted_34 = {
  key: 1,
  "class": "dsw-h-60 dsw-relative"
};

var _hoisted_35 = /*#__PURE__*/createStaticVNode("<div class=\"dsw-text-black dsw-absolute dsw-h-full dsw-w-full dsw-top-0 dsw-left-0 dsw-flex dsw-flex-col dsw-items-center dsw-justify-center\"><div><svg class=\"dsw-opacity-50 dsw-animate-spin dsw-h-10 dsw-w-10 dsw-text-black\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"><circle class=\"dsw-opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" stroke-width=\"4\"></circle><path class=\"dsw-opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z\"></path></svg></div><div class=\"dsw-mt-2 dsw-opacity-75 dsw-text-lg\">Loading...</div></div>", 1);

var _hoisted_36 = [_hoisted_35];
function Brandsvue_type_template_id_7cc97b15_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Pagination = resolveComponent("Pagination");

  return $data.has_loaded ? (openBlock(), createElementBlock("div", Brandsvue_type_template_id_7cc97b15_hoisted_1, [createBaseVNode("div", Brandsvue_type_template_id_7cc97b15_hoisted_2, [createBaseVNode("div", Brandsvue_type_template_id_7cc97b15_hoisted_3, [createBaseVNode("span", null, [createBaseVNode("b", null, Object(shared_esm_bundler["M" /* toDisplayString */])($data.true_total_brand_count) + " Brands", 1), Brandsvue_type_template_id_7cc97b15_hoisted_4])]), createBaseVNode("div", Brandsvue_type_template_id_7cc97b15_hoisted_5, [createBaseVNode("div", Brandsvue_type_template_id_7cc97b15_hoisted_6, [withDirectives(createBaseVNode("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.search_terms = $event;
    }),
    onKeyup: _cache[1] || (_cache[1] = function () {
      return $options.searchKeyUp && $options.searchKeyUp.apply($options, arguments);
    }),
    "class": "dsw-w-full dsw-font-dsw dsw-border dsw-border-gray-300 dsw-rounded dsw-p-2 dsw-text-md dsw-leading-snug",
    type: "text",
    placeholder: "Filter by Keyword"
  }, null, 544), [[vModelText, $data.search_terms]]), Brandsvue_type_template_id_7cc97b15_hoisted_7]), withDirectives(createBaseVNode("select", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.sort_by = $event;
    }),
    onChange: _cache[3] || (_cache[3] = function () {
      return $options.changeSortBy && $options.changeSortBy.apply($options, arguments);
    }),
    "class": "dsw-flex dsw-flex-col dsw-max-w-unset dsw-bg-white dsw-border-solid dsw-border-menu-inactive dsw-border dsw-rounded dsw-resize-none dsw-pt-3 dsw-px-5 dsw-placeholder-waves-placeholder dsw-w-48 dsw-text-md"
  }, _hoisted_13, 544), [[vModelSelect, $data.sort_by]])])]), $data.industry ? (openBlock(), createElementBlock("div", _hoisted_14, [_hoisted_15, createBaseVNode("b", null, Object(shared_esm_bundler["M" /* toDisplayString */])($data.industry), 1), _hoisted_16, createBaseVNode("a", {
    onClick: _cache[4] || (_cache[4] = function () {
      return $options.clearIndustry && $options.clearIndustry.apply($options, arguments);
    }),
    "class": "dsw-text-blue-500 dsw-cursor-pointer"
  }, "clear"), _hoisted_17])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_18, [_hoisted_19, $data.is_loading_ajax ? (openBlock(), createElementBlock("div", _hoisted_20, _hoisted_22)) : $data.brands && $data.brands.length ? (openBlock(true), createElementBlock(Fragment, {
    key: 1
  }, renderList($data.brands, function (brand, brandIndex) {
    return openBlock(), createElementBlock("div", {
      key: brandIndex,
      "class": "dsw-flex dsw-flex-row dsw-items-center dsw-px-8 dsw-border-b"
    }, [createBaseVNode("div", {
      onClick: function onClick($event) {
        return $options.goBrand(brand.id);
      },
      "class": "dsw-grow dsw-p-4 dsw-py-14 dsw-cursor-pointer"
    }, [brand.image ? (openBlock(), createElementBlock("img", {
      key: 0,
      src: brand.image,
      "class": "dsw-border-none dsw-w-56 dsw-object-cover dsw-mx-auto"
    }, null, 8, _hoisted_24)) : (openBlock(), createElementBlock("div", _hoisted_25, Object(shared_esm_bundler["M" /* toDisplayString */])(brand.name), 1))], 8, _hoisted_23), createBaseVNode("div", _hoisted_26, [createBaseVNode("a", {
      onClick: function onClick($event) {
        return $options.clickIndustry(brand.industry);
      },
      "class": "dsw-text-blue-500 dsw-cursor-pointer"
    }, Object(shared_esm_bundler["M" /* toDisplayString */])(brand.industry), 9, _hoisted_27)]), createBaseVNode("div", _hoisted_28, Object(shared_esm_bundler["M" /* toDisplayString */])(brand.syndicated_content) + " URLs Active", 1), createBaseVNode("div", _hoisted_29, [(openBlock(), createElementBlock("svg", {
      onClick: function onClick($event) {
        return $options.goBrand(brand.id);
      },
      xmlns: "http://www.w3.org/2000/svg",
      "class": "dsw-cursor-pointer",
      width: "26",
      height: "26",
      viewBox: "0 0 26 26"
    }, _hoisted_32, 8, _hoisted_30))])]);
  }), 128)) : (openBlock(), createElementBlock("div", _hoisted_33, " None on file. "))]), $data.pagination.total_pages ? (openBlock(), createBlock(_component_Pagination, {
    key: 1,
    onPrevHandle: $options.prevHandle,
    onNextHandle: $options.nextHandle,
    onHandleClick: $options.handleClick,
    currentItemsFirst: $data.pagination.current_page_first_index,
    currentItemsLast: $data.pagination.current_page_last_index,
    totalItemCount: $data.pagination.total_results_count,
    currentPage: $data.pagination.current_page,
    pageCount: $data.pagination.total_pages
  }, null, 8, ["onPrevHandle", "onNextHandle", "onHandleClick", "currentItemsFirst", "currentItemsLast", "totalItemCount", "currentPage", "pageCount"])) : createCommentVNode("", true)])) : (openBlock(), createElementBlock("div", _hoisted_34, _hoisted_36));
}
// CONCATENATED MODULE: ./src/vue/pages/Brands.vue?vue&type=template&id=7cc97b15

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--15-0!./src/vue/components/Pagination.vue?vue&type=template&id=053ac3d4

var Paginationvue_type_template_id_053ac3d4_hoisted_1 = {
  "class": "dsw-font-dsw dsw-px-0 dsw-py-3 dsw-flex dsw-items-center dsw-justify-between dsw-border-t dsw-border-gray-200"
};
var Paginationvue_type_template_id_053ac3d4_hoisted_2 = {
  "class": "sm:dsw-flex-1 sm:dsw-flex dsw-text-center dsw-w-full dsw-items-center dsw-justify-between"
};
var Paginationvue_type_template_id_053ac3d4_hoisted_3 = {
  key: 0,
  classes: "dsw-mb-1"
};

var Paginationvue_type_template_id_053ac3d4_hoisted_4 = /*#__PURE__*/createTextVNode(" Showing ");

var Paginationvue_type_template_id_053ac3d4_hoisted_5 = {
  key: 0
};
var Paginationvue_type_template_id_053ac3d4_hoisted_6 = {
  key: 1
};

var Paginationvue_type_template_id_053ac3d4_hoisted_7 = /*#__PURE__*/createTextVNode(" to ");

var Paginationvue_type_template_id_053ac3d4_hoisted_8 = /*#__PURE__*/createTextVNode(" of ");

var _hoisted_9 = /*#__PURE__*/createTextVNode(" results ");

var _hoisted_10 = {
  "class": "dsw-flex dsw-flex-row"
};

var _hoisted_11 = /*#__PURE__*/createStaticVNode("<option value=\"25\">25 per page</option><option value=\"50\">50 per page</option><option value=\"100\">100 per page</option><option value=\"250\">250 per page</option><option value=\"500\">500 per page</option><option value=\"1000\">1000 per page</option>", 6);

var Paginationvue_type_template_id_053ac3d4_hoisted_17 = [_hoisted_11];
var Paginationvue_type_template_id_053ac3d4_hoisted_18 = {
  key: 0,
  "class": "dsw-relative dsw-z-0 dsw-inline-flex dsw-rounded-md dsw-shadow-sm dsw--space-x-px",
  "aria-label": "Pagination"
};

var Paginationvue_type_template_id_053ac3d4_hoisted_19 = /*#__PURE__*/createBaseVNode("span", {
  "class": "dsw-sr-only dsw-font-dsw dsw-text-md"
}, "Previous", -1);

var Paginationvue_type_template_id_053ac3d4_hoisted_20 = /*#__PURE__*/createBaseVNode("svg", {
  "class": "dsw-h-5 dsw-w-5 dsw-primary-site-svg",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [/*#__PURE__*/createBaseVNode("path", {
  "fill-rule": "evenodd",
  d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
})], -1);

var Paginationvue_type_template_id_053ac3d4_hoisted_21 = [Paginationvue_type_template_id_053ac3d4_hoisted_19, Paginationvue_type_template_id_053ac3d4_hoisted_20];
var Paginationvue_type_template_id_053ac3d4_hoisted_22 = ["onClick"];

var Paginationvue_type_template_id_053ac3d4_hoisted_23 = /*#__PURE__*/createBaseVNode("span", {
  "class": "dsw-sr-only"
}, "Next", -1);

var Paginationvue_type_template_id_053ac3d4_hoisted_24 = /*#__PURE__*/createBaseVNode("svg", {
  "class": "dsw-h-5 dsw-w-5 dsw-primary-site-svg",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [/*#__PURE__*/createBaseVNode("path", {
  "fill-rule": "evenodd",
  d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
})], -1);

var Paginationvue_type_template_id_053ac3d4_hoisted_25 = [Paginationvue_type_template_id_053ac3d4_hoisted_23, Paginationvue_type_template_id_053ac3d4_hoisted_24];
function Paginationvue_type_template_id_053ac3d4_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", Paginationvue_type_template_id_053ac3d4_hoisted_1, [createBaseVNode("div", Paginationvue_type_template_id_053ac3d4_hoisted_2, [$props.currentItemsLast > 0 ? (openBlock(), createElementBlock("div", Paginationvue_type_template_id_053ac3d4_hoisted_3, [Paginationvue_type_template_id_053ac3d4_hoisted_4, $props.currentItemsLast > 0 ? (openBlock(), createElementBlock("strong", Paginationvue_type_template_id_053ac3d4_hoisted_5, Object(shared_esm_bundler["M" /* toDisplayString */])($props.currentItemsFirst), 1)) : (openBlock(), createElementBlock("strong", Paginationvue_type_template_id_053ac3d4_hoisted_6, "0")), Paginationvue_type_template_id_053ac3d4_hoisted_7, createBaseVNode("strong", null, Object(shared_esm_bundler["M" /* toDisplayString */])($props.currentItemsLast), 1), Paginationvue_type_template_id_053ac3d4_hoisted_8, createBaseVNode("strong", null, Object(shared_esm_bundler["M" /* toDisplayString */])($props.totalItemCount), 1), _hoisted_9])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_10, [createBaseVNode("div", null, [withDirectives(createBaseVNode("select", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.results_per_page = $event;
    }),
    onChange: _cache[1] || (_cache[1] = function () {
      return $options.changeResultsPerPage && $options.changeResultsPerPage.apply($options, arguments);
    }),
    "class": "dsw-relative dsw-z-0 dsw-inline-flex dsw-rounded-md dsw-shadow-sm dsw--space-x-px dsw-border-gray-300 dsw-bg-white dsw-text-gray-500 dsw-mt-0.5 dsw-mr-2 dsw-text-md"
  }, Paginationvue_type_template_id_053ac3d4_hoisted_17, 544), [[vModelSelect, _ctx.results_per_page]])]), $props.pageCount > 1 ? (openBlock(), createElementBlock("nav", Paginationvue_type_template_id_053ac3d4_hoisted_18, [createBaseVNode("a", {
    onClick: _cache[2] || (_cache[2] = withModifiers(function () {
      return $options.prevHandle && $options.prevHandle.apply($options, arguments);
    }, ["prevent"])),
    "class": "dsw-relative dsw-inline-flex dsw-items-center dsw-px-2 dsw-py-2 dsw-rounded-l-md dsw-border dsw-border-gray-300 dsw-bg-white dsw-text-gray-500 dsw-cursor-pointer dsw-text-md dsw-font-dsw"
  }, Paginationvue_type_template_id_053ac3d4_hoisted_21), (openBlock(true), createElementBlock(Fragment, null, renderList($options.paginateItems, function (item, index) {
    return openBlock(), createElementBlock("a", {
      key: index,
      onClick: withModifiers(function () {
        return $options.handleClick(item);
      }, ["prevent"]),
      "aria-current": "page",
      "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-primary-site-link dsw-font-dsw dsw-bg-white dsw-border-gray-300 dsw-relative dsw-inline-flex dsw-items-center dsw-px-4 dsw-py-2 dsw-border dsw-text-md dsw-cursor-pointer", {
        'dsw-bg-gray-200 ': $props.currentPage - 1 === index,
        '': $props.currentPage - 1 !== index
      }])
    }, Object(shared_esm_bundler["M" /* toDisplayString */])(item), 11, Paginationvue_type_template_id_053ac3d4_hoisted_22);
  }), 128)), createBaseVNode("a", {
    onClick: _cache[3] || (_cache[3] = withModifiers(function () {
      return $options.nextHandle && $options.nextHandle.apply($options, arguments);
    }, ["prevent"])),
    "class": "dsw-font-dsw dsw-relative dsw-inline-flex dsw-items-center dsw-px-2 dsw-py-2 dsw-rounded-r-md dsw-border dsw-border-gray-300 dsw-bg-white dsw-text-md dsw-text-gray-500 dsw-cursor-pointer"
  }, Paginationvue_type_template_id_053ac3d4_hoisted_25)])) : createCommentVNode("", true)])])]);
}
// CONCATENATED MODULE: ./src/vue/components/Pagination.vue?vue&type=template&id=053ac3d4

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist??ref--15-0!./src/vue/components/Pagination.vue?vue&type=script&lang=js
/* harmony default export */ var Paginationvue_type_script_lang_js = ({
  name: "Pagination",
  props: ['currentItemsFirst', 'currentItemsLast', 'totalItemCount', 'currentPage', 'pageCount'],
  data: function data() {
    return {
      results_per_page: 100
    };
  },
  methods: {
    nextHandle: function nextHandle() {
      this.$emit('nextHandle');
    },
    prevHandle: function prevHandle() {
      //window.scrollTo({top: 0, behavior: 'smooth'});
      this.$emit('prevHandle');
    },
    handleClick: function handleClick(item) {
      if (item == '...') return; //window.scrollTo({top: 0, behavior: 'smooth'});

      this.$emit('handleClick', item);
    },
    changeResultsPerPage: function changeResultsPerPage() {
      this.$emit('changeResultsPerPage', this.results_per_page);
    }
  },
  computed: {
    /**
     * The pagination parts
     *
     * @return  {Array}
     */
    paginateItems: function paginateItems() {
      var hasFirstDots = false;
      var hasSecondDots = false;
      var pages = [1];

      for (var i = 2; i <= this.pageCount; i++) {
        // First numbers
        if ( // Second Number
        i === 2 && i !== this.currentPage || // Third Number
        i === 3 && i === this.currentPage) {
          pages.push(i);
        } // First dots


        if (i + 2 <= this.currentPage && i + 1 !== this.currentPage - 1 && !hasFirstDots) {
          pages.push('...');
          hasFirstDots = true;
        } // Current page


        if ( // Page before Current
        i === this.currentPage - 1 && pages.indexOf(i) < 0 && this.currentPage - 1 > 0 || // Current
        i === this.currentPage && pages.indexOf(i) < 0 || // Page after Current
        i === this.currentPage + 1 && pages.indexOf(i) < 0 && this.currentPage + 1 < this.pageCount) {
          pages.push(i);
        } // Second dots


        if (i + 2 <= this.pageCount - 1 && i + 2 > this.currentPage + 2 && !hasSecondDots) {
          pages.push('...');
          hasSecondDots = true;
        } //Final numbers


        if ( // Before Last
        i === this.pageCount - 1 && pages.indexOf(i) < 0 || // Last
        i === this.pageCount && pages.indexOf(i) < 0) {
          pages.push(i);
        }
      }

      return pages;
    }
  }
});
// CONCATENATED MODULE: ./src/vue/components/Pagination.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/vue/components/Pagination.vue





const Pagination_exports_ = /*#__PURE__*/exportHelper_default()(Paginationvue_type_script_lang_js, [['render',Paginationvue_type_template_id_053ac3d4_render]])

/* harmony default export */ var Pagination = (Pagination_exports_);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist??ref--15-0!./src/vue/pages/Brands.vue?vue&type=script&lang=js


/* harmony default export */ var Brandsvue_type_script_lang_js = ({
  data: function data() {
    return {
      has_loaded: false,
      is_loading_ajax: false,
      brands: [],
      search_terms: '',
      industry: null,
      sort_by: '',
      true_total_brand_count: 0,
      pagination: {
        current_page_first_index: 0,
        current_page_last_index: 0,
        total_results_count: 0,
        current_page: 1,
        total_pages: 0,
        items_per_page: 50
      }
    };
  },
  created: function created() {
    this.redirectIfKeyInvalid();
    this.ajax();
  },
  methods: {
    goBrand: function goBrand(id) {
      console.log('goBrand');
      this.$router.push({
        name: 'Brand',
        params: {
          id: id
        }
      });
    },
    ajax: function ajax() {
      var _this = this;

      this.is_loading_ajax = true;
      axios_default()({
        method: 'post',
        url: '/wp-json/dswaves/v1/get_sync_brands',
        data: {
          pagination: this.pagination,
          industry: this.industry,
          search_terms: this.search_terms,
          sort_by: this.sort_by
        }
      }).then(function (response) {
        _this.has_loaded = true;
        _this.true_total_brand_count = response.data.true_total_brand_count;
        _this.pagination = response.data.pagination;
        _this.brands = response.data.results;
        _this.is_loading_ajax = false;
      })["catch"](function (error) {
        _this.is_loading_ajax = false;
        console.log(error);
      });
    },
    searchKeyUp: function searchKeyUp() {
      this.pagination.current_page = 1;
      this.ajax();
    },
    changeSortBy: function changeSortBy() {
      this.pagination.current_page = 1;
      this.ajax();
    },
    clickIndustry: function clickIndustry(industry) {
      this.industry = industry;
      this.pagination.current_page = 1;
      this.ajax();
    },
    clearIndustry: function clearIndustry() {
      this.industry = null;
      this.pagination.current_page = 1;
      this.ajax();
    },
    prevHandle: function prevHandle() {
      this.pagination.current_page--;

      if (this.pagination.current_page < 1) {
        this.pagination.current_page = 1;
        return;
      }

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      var app = this;
      setTimeout(function () {
        app.ajax();
      }, 300);
    },
    nextHandle: function nextHandle() {
      this.pagination.current_page++;

      if (this.pagination.current_page > this.pagination.total_pages) {
        this.pagination.current_page = this.pagination.total_pages;
        return;
      }

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      var app = this;
      setTimeout(function () {
        app.ajax();
      }, 300);
    },
    handleClick: function handleClick(page) {
      if (this.pagination.current_page == page) {
        return;
      }

      this.pagination.current_page = page;
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      var app = this;
      setTimeout(function () {
        app.ajax();
      }, 300);
    }
  },
  components: {
    Pagination: Pagination
  }
});
// CONCATENATED MODULE: ./src/vue/pages/Brands.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/vue/pages/Brands.vue





const Brands_exports_ = /*#__PURE__*/exportHelper_default()(Brandsvue_type_script_lang_js, [['render',Brandsvue_type_template_id_7cc97b15_render]])

/* harmony default export */ var Brands = (Brands_exports_);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--15-0!./src/vue/pages/Approvals.vue?vue&type=template&id=4b708058


var Approvalsvue_type_template_id_4b708058_hoisted_1 = /*#__PURE__*/createBaseVNode("h1", null, "Approvals", -1);

var Approvalsvue_type_template_id_4b708058_hoisted_2 = [Approvalsvue_type_template_id_4b708058_hoisted_1];
function Approvalsvue_type_template_id_4b708058_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, Approvalsvue_type_template_id_4b708058_hoisted_2);
}
// CONCATENATED MODULE: ./src/vue/pages/Approvals.vue?vue&type=template&id=4b708058

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist??ref--15-0!./src/vue/pages/Approvals.vue?vue&type=script&lang=js
/* harmony default export */ var Approvalsvue_type_script_lang_js = ({});
// CONCATENATED MODULE: ./src/vue/pages/Approvals.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/vue/pages/Approvals.vue





const Approvals_exports_ = /*#__PURE__*/exportHelper_default()(Approvalsvue_type_script_lang_js, [['render',Approvalsvue_type_template_id_4b708058_render]])

/* harmony default export */ var Approvals = (Approvals_exports_);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--15-0!./src/vue/pages/Request.vue?vue&type=template&id=08c54eb8


var Requestvue_type_template_id_08c54eb8_hoisted_1 = /*#__PURE__*/createBaseVNode("h1", null, "Request", -1);

var Requestvue_type_template_id_08c54eb8_hoisted_2 = [Requestvue_type_template_id_08c54eb8_hoisted_1];
function Requestvue_type_template_id_08c54eb8_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, Requestvue_type_template_id_08c54eb8_hoisted_2);
}
// CONCATENATED MODULE: ./src/vue/pages/Request.vue?vue&type=template&id=08c54eb8

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist??ref--15-0!./src/vue/pages/Request.vue?vue&type=script&lang=js
/* harmony default export */ var Requestvue_type_script_lang_js = ({});
// CONCATENATED MODULE: ./src/vue/pages/Request.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/vue/pages/Request.vue





const Request_exports_ = /*#__PURE__*/exportHelper_default()(Requestvue_type_script_lang_js, [['render',Requestvue_type_template_id_08c54eb8_render]])

/* harmony default export */ var Request = (Request_exports_);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--15-0!./src/vue/pages/Support.vue?vue&type=template&id=659dd6b8


var Supportvue_type_template_id_659dd6b8_hoisted_1 = /*#__PURE__*/createBaseVNode("h1", null, "Support", -1);

var Supportvue_type_template_id_659dd6b8_hoisted_2 = [Supportvue_type_template_id_659dd6b8_hoisted_1];
function Supportvue_type_template_id_659dd6b8_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, Supportvue_type_template_id_659dd6b8_hoisted_2);
}
// CONCATENATED MODULE: ./src/vue/pages/Support.vue?vue&type=template&id=659dd6b8

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist??ref--15-0!./src/vue/pages/Support.vue?vue&type=script&lang=js
/* harmony default export */ var Supportvue_type_script_lang_js = ({});
// CONCATENATED MODULE: ./src/vue/pages/Support.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/vue/pages/Support.vue





const Support_exports_ = /*#__PURE__*/exportHelper_default()(Supportvue_type_script_lang_js, [['render',Supportvue_type_template_id_659dd6b8_render]])

/* harmony default export */ var Support = (Support_exports_);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--15-0!./src/vue/pages/Settings.vue?vue&type=template&id=11337cf8

var Settingsvue_type_template_id_11337cf8_hoisted_1 = {
  key: 0,
  "class": "dsw-my-5 dsw-container dsw-mx-auto dsw-max-w-2xl dsw-bg-white dsw-p-5 dsw-rounded"
};

var Settingsvue_type_template_id_11337cf8_hoisted_2 = /*#__PURE__*/createBaseVNode("div", {
  "class": "dsw-text-center dsw-text-3xl dsw-mb-8"
}, [/*#__PURE__*/createTextVNode("Welcome to Waves"), /*#__PURE__*/createBaseVNode("br"), /*#__PURE__*/createTextVNode("by DesignStudio (v2.0)")], -1);

var Settingsvue_type_template_id_11337cf8_hoisted_3 = {
  "class": "dsw-text-lg dsw-text-center"
};

var Settingsvue_type_template_id_11337cf8_hoisted_4 = /*#__PURE__*/createTextVNode("Unlock your plugin by activating your ");

var Settingsvue_type_template_id_11337cf8_hoisted_5 = /*#__PURE__*/createTextVNode(". If you don’t have one yet you can request one after you have chosen the brands you wish to syndicate.");

var Settingsvue_type_template_id_11337cf8_hoisted_6 = {
  key: 1,
  "class": "dsw-my-5 dsw-container"
};

var Settingsvue_type_template_id_11337cf8_hoisted_7 = /*#__PURE__*/createBaseVNode("div", {
  "class": "dsw-font-bold dsw-text-lg dsw-mb-3"
}, "Plugin License", -1);

var Settingsvue_type_template_id_11337cf8_hoisted_8 = /*#__PURE__*/createBaseVNode("div", {
  "class": "dsw-text-md dsw-mb-3"
}, [/*#__PURE__*/createTextVNode("To activate your license of "), /*#__PURE__*/createBaseVNode("b", null, "WAVES by DesignStudio"), /*#__PURE__*/createTextVNode(" enter your unique key below and click 'Activate License'.")], -1);

var Settingsvue_type_template_id_11337cf8_hoisted_9 = {
  "class": "dsw-flex"
};
var Settingsvue_type_template_id_11337cf8_hoisted_10 = {
  key: 0,
  type: "submit",
  "class": "dsw-bg-blue-500 dsw-text-white dsw-p-2 dsw-text-xs dsw-mx-2 dsw-px-3 dsw-rounded-sm dsw-border dsw-border-gray-400"
};
var Settingsvue_type_template_id_11337cf8_hoisted_11 = {
  key: 0,
  "class": "dsw-ml-2"
};

var _hoisted_12 = /*#__PURE__*/createBaseVNode("svg", {
  "class": "dsw-opacity-50 dsw-animate-spin dsw-h-8 dsw-w-8 dsw-text-black",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, [/*#__PURE__*/createBaseVNode("circle", {
  "class": "dsw-opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}), /*#__PURE__*/createBaseVNode("path", {
  "class": "dsw-opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
})], -1);

var Settingsvue_type_template_id_11337cf8_hoisted_13 = [_hoisted_12];
var Settingsvue_type_template_id_11337cf8_hoisted_14 = ["innerHTML"];
var Settingsvue_type_template_id_11337cf8_hoisted_15 = {
  key: 2,
  "class": "dsw-my-5 dsw-container"
};

var Settingsvue_type_template_id_11337cf8_hoisted_16 = /*#__PURE__*/createBaseVNode("div", {
  "class": "dsw-font-bold dsw-text-lg dsw-mb-3"
}, "Plugin License", -1);

var Settingsvue_type_template_id_11337cf8_hoisted_17 = {
  "class": "dsw-text-md dsw-mb-3"
};

var Settingsvue_type_template_id_11337cf8_hoisted_18 = /*#__PURE__*/createBaseVNode("div", {
  "class": "dsw-text-green-700"
}, "Plugin license currently active.", -1);

var Settingsvue_type_template_id_11337cf8_hoisted_19 = {
  key: 3,
  "class": "dsw-h-60 dsw-relative"
};

var Settingsvue_type_template_id_11337cf8_hoisted_20 = /*#__PURE__*/createStaticVNode("<div class=\"dsw-text-black dsw-absolute dsw-h-full dsw-w-full dsw-top-0 dsw-left-0 dsw-flex dsw-flex-col dsw-items-center dsw-justify-center\"><div><svg class=\"dsw-opacity-50 dsw-animate-spin dsw-h-10 dsw-w-10 dsw-text-black\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"><circle class=\"dsw-opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" stroke-width=\"4\"></circle><path class=\"dsw-opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z\"></path></svg></div><div class=\"dsw-mt-2 dsw-opacity-75 dsw-text-lg\">Loading...</div></div>", 1);

var Settingsvue_type_template_id_11337cf8_hoisted_21 = [Settingsvue_type_template_id_11337cf8_hoisted_20];
function Settingsvue_type_template_id_11337cf8_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [$data.has_loaded && $data.key_status == 'empty' ? (openBlock(), createElementBlock("div", Settingsvue_type_template_id_11337cf8_hoisted_1, [Settingsvue_type_template_id_11337cf8_hoisted_2, createBaseVNode("div", Settingsvue_type_template_id_11337cf8_hoisted_3, [Settingsvue_type_template_id_11337cf8_hoisted_4, createBaseVNode("a", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.clickLicenseKeyLink && $options.clickLicenseKeyLink.apply($options, arguments);
    }),
    "class": "dsw-text-blue-500 dsw-cursor-pointer dsw-font-bold"
  }, "License Key"), Settingsvue_type_template_id_11337cf8_hoisted_5])])) : createCommentVNode("", true), $data.has_loaded && $data.key_status == 'allow_enter' ? (openBlock(), createElementBlock("div", Settingsvue_type_template_id_11337cf8_hoisted_6, [Settingsvue_type_template_id_11337cf8_hoisted_7, Settingsvue_type_template_id_11337cf8_hoisted_8, createBaseVNode("div", Settingsvue_type_template_id_11337cf8_hoisted_9, [createBaseVNode("form", {
    onSubmit: _cache[2] || (_cache[2] = withModifiers(function () {
      return $options.submitLicenseKeyForm && $options.submitLicenseKeyForm.apply($options, arguments);
    }, ["prevent"]))
  }, [withDirectives(createBaseVNode("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.key = $event;
    }),
    type: "text",
    "class": "dsw-rounded-sm dsw-border-2 dsw-border-gray-200 dsw-text-md dsw-w-72",
    placeholder: "License Key Here"
  }, null, 512), [[vModelText, $data.key]]), !$data.loading_checking_key_valid ? (openBlock(), createElementBlock("button", Settingsvue_type_template_id_11337cf8_hoisted_10, "ACTIVATE LICENSE")) : createCommentVNode("", true)], 32), $data.loading_checking_key_valid ? (openBlock(), createElementBlock("div", Settingsvue_type_template_id_11337cf8_hoisted_11, Settingsvue_type_template_id_11337cf8_hoisted_13)) : createCommentVNode("", true)]), $data.checkKeyValidMessage ? (openBlock(), createElementBlock("div", {
    key: 0,
    innerHTML: $data.checkKeyValidMessage
  }, null, 8, Settingsvue_type_template_id_11337cf8_hoisted_14)) : createCommentVNode("", true)])) : createCommentVNode("", true), $data.has_loaded && $data.key_status == 'valid' ? (openBlock(), createElementBlock("div", Settingsvue_type_template_id_11337cf8_hoisted_15, [Settingsvue_type_template_id_11337cf8_hoisted_16, createBaseVNode("div", Settingsvue_type_template_id_11337cf8_hoisted_17, [createBaseVNode("button", {
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.deactivateLicenseKey && $options.deactivateLicenseKey.apply($options, arguments);
    }),
    type: "button",
    "class": "dsw-bg-gray-300 dsw-text-gray-800 dsw-p-2 dsw-text-xs dsw-px-3 dsw-rounded-sm dsw-border dsw-border-gray-400"
  }, "DEACTIVE LICENSE")]), Settingsvue_type_template_id_11337cf8_hoisted_18])) : createCommentVNode("", true), !$data.has_loaded ? (openBlock(), createElementBlock("div", Settingsvue_type_template_id_11337cf8_hoisted_19, Settingsvue_type_template_id_11337cf8_hoisted_21)) : createCommentVNode("", true)], 64);
}
// CONCATENATED MODULE: ./src/vue/pages/Settings.vue?vue&type=template&id=11337cf8

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist??ref--15-0!./src/vue/pages/Settings.vue?vue&type=script&lang=js

/* harmony default export */ var Settingsvue_type_script_lang_js = ({
  data: function data() {
    return {
      key_status: null,
      has_loaded: false,
      key: null,
      checkKeyValidMessage: null,
      loading_checking_key_valid: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios_default()({
      method: 'get',
      url: '/wp-json/dswaves/v1/check_plugin_key_valid'
    }).then(function (response) {
      _this.key_status = null;

      if (response.data == 'good') {
        _this.key_status = 'valid';
      } else {
        _this.key_status = 'empty';
      }

      _this.has_loaded = true;
    })["catch"](function (error) {
      console.log(error);
    });
  },
  watch: {
    key: function key() {
      this.checkKeyValidMessage = null;
    }
  },
  methods: {
    clickLicenseKeyLink: function clickLicenseKeyLink() {
      this.key_status = 'allow_enter';
    },
    submitLicenseKeyForm: function submitLicenseKeyForm() {
      var _this2 = this;

      this.loading_checking_key_valid = true;
      axios_default()({
        method: 'post',
        url: '/wp-json/dswaves/v1/save_plugin_key',
        data: {
          key: this.key
        }
      }).then(function (response) {
        _this2.loading_checking_key_valid = false;

        if (response.data.valid) {
          _this2.checkKeyValidMessage = '<span class="dsw-text-green-700">Plugin successfully activated.</span>';
          var app = _this2;
          setTimeout(function () {
            app.key_status = 'valid';
            app.checkKeyValidMessage = null;
          }, 3000);
        } else {
          _this2.checkKeyValidMessage = '<span class="dsw-text-red-700">' + response.data.message + '</span>';
        }
      })["catch"](function (error) {
        _this2.loading_checking_key_valid = false;
        console.log(error);
      });
    },
    deactivateLicenseKey: function deactivateLicenseKey() {
      var _this3 = this;

      axios_default()({
        method: 'get',
        url: '/wp-json/dswaves/v1/deactivate_plugin'
      }).then(function (response) {
        _this3.key = response.data;
        _this3.key_status = 'allow_enter';
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  components: {}
});
// CONCATENATED MODULE: ./src/vue/pages/Settings.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/vue/pages/Settings.vue





const Settings_exports_ = /*#__PURE__*/exportHelper_default()(Settingsvue_type_script_lang_js, [['render',Settingsvue_type_template_id_11337cf8_render]])

/* harmony default export */ var Settings = (Settings_exports_);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--15-0!./src/vue/pages/About.vue?vue&type=template&id=5ba0684a

var Aboutvue_type_template_id_5ba0684a_hoisted_1 = {
  "class": "dsw-my-5 dsw-container dsw-mx-auto dsw-max-w-2xl dsw-bg-white dsw-p-5 dsw-rounded"
};

var Aboutvue_type_template_id_5ba0684a_hoisted_2 = /*#__PURE__*/createBaseVNode("div", {
  "class": "dsw-text-center dsw-text-3xl dsw-mb-8"
}, "Waves by DesignStudio (v2.0)", -1);

var Aboutvue_type_template_id_5ba0684a_hoisted_3 = /*#__PURE__*/createBaseVNode("div", {
  "class": "dsw-text-lg dsw-text-center dsw-mb-8"
}, [/*#__PURE__*/createBaseVNode("strong", null, "Waves by DesignStudio"), /*#__PURE__*/createTextVNode(" is a WordPress Plugin that connects to our unique and proprietary Content Syndication Platform to help with keeping content in this site up to date.")], -1);

var Aboutvue_type_template_id_5ba0684a_hoisted_4 = /*#__PURE__*/createBaseVNode("div", {
  "class": "dsw-text-center"
}, [/*#__PURE__*/createBaseVNode("img", {
  "class": "dsw-mx-auto dsw-w-44",
  src: "https://syndified.com/wp-content/uploads/2021/11/syndified-logo.png",
  alt: "Syndified"
})], -1);

var Aboutvue_type_template_id_5ba0684a_hoisted_5 = [Aboutvue_type_template_id_5ba0684a_hoisted_2, Aboutvue_type_template_id_5ba0684a_hoisted_3, Aboutvue_type_template_id_5ba0684a_hoisted_4];
function Aboutvue_type_template_id_5ba0684a_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", Aboutvue_type_template_id_5ba0684a_hoisted_1, Aboutvue_type_template_id_5ba0684a_hoisted_5);
}
// CONCATENATED MODULE: ./src/vue/pages/About.vue?vue&type=template&id=5ba0684a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist??ref--15-0!./src/vue/pages/About.vue?vue&type=script&lang=js
/* harmony default export */ var Aboutvue_type_script_lang_js = ({});
// CONCATENATED MODULE: ./src/vue/pages/About.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/vue/pages/About.vue





const About_exports_ = /*#__PURE__*/exportHelper_default()(Aboutvue_type_script_lang_js, [['render',Aboutvue_type_template_id_5ba0684a_render]])

/* harmony default export */ var About = (About_exports_);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--15-0!./src/vue/pages/Brand.vue?vue&type=template&id=6ef40bde

var Brandvue_type_template_id_6ef40bde_hoisted_1 = {
  "class": "dsw-max-w-4xl"
};
var Brandvue_type_template_id_6ef40bde_hoisted_2 = {
  key: 0,
  "class": "dsw-mt-5"
};
var Brandvue_type_template_id_6ef40bde_hoisted_3 = {
  "class": "dsw-flex"
};
var Brandvue_type_template_id_6ef40bde_hoisted_4 = {
  "class": "dsw-w-60"
};
var Brandvue_type_template_id_6ef40bde_hoisted_5 = ["src", "alt"];
var Brandvue_type_template_id_6ef40bde_hoisted_6 = {
  "class": "dsw-grow dsw-text-right"
};
var Brandvue_type_template_id_6ef40bde_hoisted_7 = {
  key: 0
};
var Brandvue_type_template_id_6ef40bde_hoisted_8 = {
  "class": "dsw-p-5 dsw-bg-green-200 dsw-w-full dsw-text-right dsw-mb-4"
};
var Brandvue_type_template_id_6ef40bde_hoisted_9 = {
  key: 0,
  "class": "dsw-w-full dsw-h-12 dsw-mb-2"
};
var Brandvue_type_template_id_6ef40bde_hoisted_10 = {
  "class": "dsw-p-2 dsw-px-3 dsw-bg-white dsw-text-right dsw-border dsw-rounded-full dsw-float-right"
};

var Brandvue_type_template_id_6ef40bde_hoisted_11 = /*#__PURE__*/createBaseVNode("svg", {
  "class": "dsw-opacity-50 dsw-animate-spin dsw-h-4 dsw-w-4 dsw-text-black dsw-float-left dsw-mr-2",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, [/*#__PURE__*/createBaseVNode("circle", {
  "class": "dsw-opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}), /*#__PURE__*/createBaseVNode("path", {
  "class": "dsw-opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
})], -1);

var Brandvue_type_template_id_6ef40bde_hoisted_12 = {
  "class": "dsw-text-right dsw-w-full"
};
var Brandvue_type_template_id_6ef40bde_hoisted_13 = ["disabled"];

var Brandvue_type_template_id_6ef40bde_hoisted_14 = /*#__PURE__*/createTextVNode("SAVE ");

var Brandvue_type_template_id_6ef40bde_hoisted_15 = {
  key: 0
};
var Brandvue_type_template_id_6ef40bde_hoisted_16 = {
  key: 1,
  "class": "dsw-opacity-50 dsw-animate-spin dsw-h-4 dsw-w-4 dsw-text-black dsw-float-right dsw-ml-2",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
};

var Brandvue_type_template_id_6ef40bde_hoisted_17 = /*#__PURE__*/createBaseVNode("circle", {
  "class": "dsw-opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1);

var Brandvue_type_template_id_6ef40bde_hoisted_18 = /*#__PURE__*/createBaseVNode("path", {
  "class": "dsw-opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1);

var Brandvue_type_template_id_6ef40bde_hoisted_19 = [Brandvue_type_template_id_6ef40bde_hoisted_17, Brandvue_type_template_id_6ef40bde_hoisted_18];
var Brandvue_type_template_id_6ef40bde_hoisted_20 = {
  "class": "dsw-my-7 dsw-text-lg"
};
var Brandvue_type_template_id_6ef40bde_hoisted_21 = {
  "class": "dsw-font-bold"
};

var Brandvue_type_template_id_6ef40bde_hoisted_22 = /*#__PURE__*/createTextVNode(" in active syndication. ");

var Brandvue_type_template_id_6ef40bde_hoisted_23 = {
  "class": "dsw-flex dsw-mt-5"
};
var Brandvue_type_template_id_6ef40bde_hoisted_24 = {
  "class": "dsw-w-1/4 dsw-flex"
};
var Brandvue_type_template_id_6ef40bde_hoisted_25 = {
  "class": "dsw-mt-0.5 dsw-ml-3 dsw-text-base"
};

var Brandvue_type_template_id_6ef40bde_hoisted_26 = /*#__PURE__*/createBaseVNode("span", null, "Products", -1);

var Brandvue_type_template_id_6ef40bde_hoisted_27 = {
  "class": "dsw-w-1/2 dsw-flex"
};
var Brandvue_type_template_id_6ef40bde_hoisted_28 = {
  "class": "dsw-mt-0.5 dsw-ml-3 dsw-text-base"
};

var Brandvue_type_template_id_6ef40bde_hoisted_29 = /*#__PURE__*/createBaseVNode("span", null, "Blog Posts", -1);

var Brandvue_type_template_id_6ef40bde_hoisted_30 = {
  "class": "dsw-flex dsw-mt-5"
};
var Brandvue_type_template_id_6ef40bde_hoisted_31 = {
  "class": "dsw-w-1/4 dsw-flex"
};
var Brandvue_type_template_id_6ef40bde_hoisted_32 = {
  "class": "dsw-mt-0.5 dsw-ml-3 dsw-text-base"
};

var Brandvue_type_template_id_6ef40bde_hoisted_33 = /*#__PURE__*/createBaseVNode("span", null, "Web Pages", -1);

var Brandvue_type_template_id_6ef40bde_hoisted_34 = {
  "class": "dsw-w-1/2 dsw-flex"
};
var Brandvue_type_template_id_6ef40bde_hoisted_35 = {
  "class": "dsw-mt-0.5 dsw-ml-3 dsw-text-base"
};

var Brandvue_type_template_id_6ef40bde_hoisted_36 = /*#__PURE__*/createBaseVNode("span", null, "Knowledge Base Articles", -1);

var _hoisted_37 = {
  "class": "dsw-text-lg dsw-mt-10 dsw-mb-5"
};
var _hoisted_38 = {
  key: 0,
  id: "scroll_to_top_of_products",
  "class": "dsw-tab dsw-w-full dsw-overflow-hidden dsw-text-lg dsw-mb-5"
};
var _hoisted_39 = ["id"];
var _hoisted_40 = ["for"];

var _hoisted_41 = /*#__PURE__*/createBaseVNode("span", null, "Products", -1);

var _hoisted_42 = /*#__PURE__*/createBaseVNode("div", {
  "class": "dsw-ml-auto dsw-flex"
}, [/*#__PURE__*/createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "class": "dsw-w-8 dsw-svg-arrow"
}, [/*#__PURE__*/createBaseVNode("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
})])], -1);

var _hoisted_43 = [_hoisted_41, _hoisted_42];
var _hoisted_44 = {
  "class": "dsw-tab-content dsw-z-10 dsw-shadow-md dsw-relative dsw-overflow-hidden dsw-bg-white dsw-leading-normal dsw-transition-height dsw-duration-500 dsw-ease-in-out"
};
var _hoisted_45 = {
  "class": "dsw-p-7"
};
var _hoisted_46 = {
  "class": "dsw-w-full dsw-divide-y dsw-divide-gray-200"
};
var _hoisted_47 = {
  "class": "dsw-border-b-2"
};

var _hoisted_48 = /*#__PURE__*/createBaseVNode("td", {
  "class": "dsw-w-48 dsw-p-4 dsw-font-bold dsw-text-center"
}, " Auto-Update ", -1);

var _hoisted_49 = {
  "class": "dsw-p-4 dsw-pr-0 dsw-font-bold dsw-relative"
};
var _hoisted_50 = {
  key: 0,
  "class": "dsw-w-80 dsw-flex dsw-h-11 dsw-absolute dsw-right-0 dsw-top-0"
};

var _hoisted_51 = /*#__PURE__*/createBaseVNode("div", {
  "class": "dsw-max-w-0 dsw-font-dsw"
}, [/*#__PURE__*/createBaseVNode("button", {
  "class": "dsw-transform dsw-font-dsw dsw--translate-x-10 dsw-mt-3 dsw-ml-3 dsw-bg-white w-auto dsw-flex dsw-justify-end dsw-items-center"
}, [/*#__PURE__*/createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "dsw-h-5 dsw-w-5 dsw-primary-site-svg",
  viewBox: "0 0 20 20",
  fill: "#7E7E7E"
}, [/*#__PURE__*/createBaseVNode("path", {
  "fill-rule": "evenodd",
  d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
  "clip-rule": "evenodd"
})])])], -1);

var _hoisted_52 = /*#__PURE__*/createTextVNode(" Product Name ");

var _hoisted_53 = {
  "class": "dsw-border-b dsw-text-base"
};
var _hoisted_54 = {
  "class": "dsw-w-48 dsw-p-4 dsw-text-center"
};
var _hoisted_55 = {
  "class": "dsw-p-4"
};
var _hoisted_56 = {
  "class": "dsw-w-48 dsw-p-4 dsw-text-center"
};
var _hoisted_57 = {
  "class": "dsw-p-4"
};
var _hoisted_58 = {
  "class": "dsw-w-48 dsw-p-4 dsw-text-center"
};
var _hoisted_59 = {
  "class": "dsw-p-4"
};
var _hoisted_60 = {
  key: 1,
  id: "scroll_to_top_of_pages",
  "class": "dsw-tab dsw-w-full dsw-overflow-hidden dsw-text-lg dsw-mb-5"
};
var _hoisted_61 = ["id"];
var _hoisted_62 = ["for"];

var _hoisted_63 = /*#__PURE__*/createBaseVNode("span", null, "Web Pages", -1);

var _hoisted_64 = /*#__PURE__*/createBaseVNode("div", {
  "class": "dsw-ml-auto dsw-flex"
}, [/*#__PURE__*/createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "class": "dsw-w-8 dsw-svg-arrow"
}, [/*#__PURE__*/createBaseVNode("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
})])], -1);

var _hoisted_65 = [_hoisted_63, _hoisted_64];
var _hoisted_66 = {
  "class": "dsw-tab-content dsw-z-10 dsw-shadow-md dsw-relative dsw-overflow-hidden dsw-bg-white dsw-leading-normal dsw-transition-height dsw-duration-500 dsw-ease-in-out"
};
var _hoisted_67 = {
  "class": "dsw-p-7"
};
var _hoisted_68 = {
  "class": "dsw-w-full dsw-divide-y dsw-divide-gray-200"
};
var _hoisted_69 = {
  "class": "dsw-border-b-2"
};

var _hoisted_70 = /*#__PURE__*/createBaseVNode("td", {
  "class": "dsw-w-48 dsw-p-4 dsw-font-bold dsw-text-center"
}, " Auto-Update ", -1);

var _hoisted_71 = {
  "class": "dsw-p-4 dsw-pr-0 dsw-font-bold dsw-relative"
};
var _hoisted_72 = {
  key: 0,
  "class": "dsw-w-80 dsw-flex dsw-h-11 dsw-absolute dsw-right-0 dsw-top-0"
};

var _hoisted_73 = /*#__PURE__*/createBaseVNode("div", {
  "class": "dsw-max-w-0 dsw-font-dsw"
}, [/*#__PURE__*/createBaseVNode("button", {
  "class": "dsw-transform dsw-font-dsw dsw--translate-x-10 dsw-mt-3 dsw-ml-3 dsw-bg-white w-auto dsw-flex dsw-justify-end dsw-items-center"
}, [/*#__PURE__*/createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "dsw-h-5 dsw-w-5 dsw-primary-site-svg",
  viewBox: "0 0 20 20",
  fill: "#7E7E7E"
}, [/*#__PURE__*/createBaseVNode("path", {
  "fill-rule": "evenodd",
  d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
  "clip-rule": "evenodd"
})])])], -1);

var _hoisted_74 = /*#__PURE__*/createTextVNode(" Web Page Name ");

var _hoisted_75 = {
  "class": "dsw-border-b dsw-text-base"
};
var _hoisted_76 = {
  "class": "dsw-w-48 dsw-p-4 dsw-text-center"
};
var _hoisted_77 = {
  "class": "dsw-p-4"
};
var _hoisted_78 = {
  "class": "dsw-w-48 dsw-p-4 dsw-text-center"
};
var _hoisted_79 = {
  "class": "dsw-p-4"
};
var _hoisted_80 = {
  "class": "dsw-w-48 dsw-p-4 dsw-text-center"
};
var _hoisted_81 = {
  "class": "dsw-p-4"
};
var _hoisted_82 = {
  key: 2,
  id: "scroll_to_top_of_posts",
  "class": "dsw-tab dsw-w-full dsw-overflow-hidden dsw-text-lg dsw-mb-5"
};
var _hoisted_83 = ["id"];
var _hoisted_84 = ["for"];

var _hoisted_85 = /*#__PURE__*/createBaseVNode("span", null, "Blog Posts", -1);

var _hoisted_86 = /*#__PURE__*/createBaseVNode("div", {
  "class": "dsw-ml-auto dsw-flex"
}, [/*#__PURE__*/createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "class": "dsw-w-8 dsw-svg-arrow"
}, [/*#__PURE__*/createBaseVNode("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
})])], -1);

var _hoisted_87 = [_hoisted_85, _hoisted_86];
var _hoisted_88 = {
  "class": "dsw-tab-content dsw-z-10 dsw-shadow-md dsw-relative dsw-overflow-hidden dsw-bg-white dsw-leading-normal dsw-transition-height dsw-duration-500 dsw-ease-in-out"
};
var _hoisted_89 = {
  "class": "dsw-p-7"
};
var _hoisted_90 = {
  "class": "dsw-w-full dsw-divide-y dsw-divide-gray-200"
};
var _hoisted_91 = {
  "class": "dsw-border-b-2"
};

var _hoisted_92 = /*#__PURE__*/createBaseVNode("td", {
  "class": "dsw-w-48 dsw-p-4 dsw-font-bold dsw-text-center"
}, " Auto-Update ", -1);

var _hoisted_93 = {
  "class": "dsw-p-4 dsw-pr-0 dsw-font-bold dsw-relative"
};
var _hoisted_94 = {
  key: 0,
  "class": "dsw-w-80 dsw-flex dsw-h-11 dsw-absolute dsw-right-0 dsw-top-0"
};

var _hoisted_95 = /*#__PURE__*/createBaseVNode("div", {
  "class": "dsw-max-w-0 dsw-font-dsw"
}, [/*#__PURE__*/createBaseVNode("button", {
  "class": "dsw-transform dsw-font-dsw dsw--translate-x-10 dsw-mt-3 dsw-ml-3 dsw-bg-white w-auto dsw-flex dsw-justify-end dsw-items-center"
}, [/*#__PURE__*/createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "dsw-h-5 dsw-w-5 dsw-primary-site-svg",
  viewBox: "0 0 20 20",
  fill: "#7E7E7E"
}, [/*#__PURE__*/createBaseVNode("path", {
  "fill-rule": "evenodd",
  d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
  "clip-rule": "evenodd"
})])])], -1);

var _hoisted_96 = /*#__PURE__*/createTextVNode(" Blog Post Name ");

var _hoisted_97 = {
  "class": "dsw-border-b dsw-text-base"
};
var _hoisted_98 = {
  "class": "dsw-w-48 dsw-p-4 dsw-text-center"
};
var _hoisted_99 = {
  "class": "dsw-p-4"
};
var _hoisted_100 = {
  "class": "dsw-w-48 dsw-p-4 dsw-text-center"
};
var _hoisted_101 = {
  "class": "dsw-p-4"
};
var _hoisted_102 = {
  "class": "dsw-w-48 dsw-p-4 dsw-text-center"
};
var _hoisted_103 = {
  "class": "dsw-p-4"
};
var _hoisted_104 = {
  key: 3,
  id: "scroll_to_top_of_articles",
  "class": "dsw-tab dsw-w-full dsw-overflow-hidden dsw-text-lg dsw-mb-5"
};
var _hoisted_105 = ["id"];
var _hoisted_106 = ["for"];

var _hoisted_107 = /*#__PURE__*/createBaseVNode("span", null, "Knowldege Base Articles", -1);

var _hoisted_108 = /*#__PURE__*/createBaseVNode("div", {
  "class": "dsw-ml-auto dsw-flex"
}, [/*#__PURE__*/createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "class": "dsw-w-8 dsw-svg-arrow"
}, [/*#__PURE__*/createBaseVNode("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
})])], -1);

var _hoisted_109 = [_hoisted_107, _hoisted_108];
var _hoisted_110 = {
  "class": "dsw-tab-content dsw-z-10 dsw-shadow-md dsw-relative dsw-overflow-hidden dsw-bg-white dsw-leading-normal dsw-transition-height dsw-duration-500 dsw-ease-in-out"
};
var _hoisted_111 = {
  "class": "dsw-p-7"
};
var _hoisted_112 = {
  "class": "dsw-w-full dsw-divide-y dsw-divide-gray-200"
};
var _hoisted_113 = {
  "class": "dsw-border-b-2"
};

var _hoisted_114 = /*#__PURE__*/createBaseVNode("td", {
  "class": "dsw-w-48 dsw-p-4 dsw-font-bold dsw-text-center"
}, " Auto-Update ", -1);

var _hoisted_115 = {
  "class": "dsw-p-4 dsw-pr-0 dsw-font-bold dsw-relative"
};
var _hoisted_116 = {
  key: 0,
  "class": "dsw-w-80 dsw-flex dsw-h-11 dsw-absolute dsw-right-0 dsw-top-0"
};

var _hoisted_117 = /*#__PURE__*/createBaseVNode("div", {
  "class": "dsw-max-w-0 dsw-font-dsw"
}, [/*#__PURE__*/createBaseVNode("button", {
  "class": "dsw-transform dsw-font-dsw dsw--translate-x-10 dsw-mt-3 dsw-ml-3 dsw-bg-white w-auto dsw-flex dsw-justify-end dsw-items-center"
}, [/*#__PURE__*/createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "dsw-h-5 dsw-w-5 dsw-primary-site-svg",
  viewBox: "0 0 20 20",
  fill: "#7E7E7E"
}, [/*#__PURE__*/createBaseVNode("path", {
  "fill-rule": "evenodd",
  d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
  "clip-rule": "evenodd"
})])])], -1);

var _hoisted_118 = /*#__PURE__*/createTextVNode(" Article Name ");

var _hoisted_119 = {
  "class": "dsw-border-b dsw-text-base"
};
var _hoisted_120 = {
  "class": "dsw-w-48 dsw-p-4 dsw-text-center"
};
var _hoisted_121 = {
  "class": "dsw-p-4"
};
var _hoisted_122 = {
  "class": "dsw-w-48 dsw-p-4 dsw-text-center"
};
var _hoisted_123 = {
  "class": "dsw-p-4"
};
var _hoisted_124 = {
  "class": "dsw-w-48 dsw-p-4 dsw-text-center"
};
var _hoisted_125 = {
  "class": "dsw-p-4"
};
var _hoisted_126 = {
  key: 1,
  "class": "dsw-h-60 dsw-relative"
};

var _hoisted_127 = /*#__PURE__*/createStaticVNode("<div class=\"dsw-text-black dsw-absolute dsw-h-full dsw-w-full dsw-top-0 dsw-left-0 dsw-flex dsw-flex-col dsw-items-center dsw-justify-center\"><div><svg class=\"dsw-opacity-50 dsw-animate-spin dsw-h-10 dsw-w-10 dsw-text-black\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"><circle class=\"dsw-opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" stroke-width=\"4\"></circle><path class=\"dsw-opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z\"></path></svg></div><div class=\"dsw-mt-2 dsw-opacity-75 dsw-text-lg\">Loading...</div></div>", 1);

var _hoisted_128 = [_hoisted_127];

var _hoisted_129 = /*#__PURE__*/createTextVNode(" Brand Categories ");

var _hoisted_130 = {
  "class": "dsw-space-y-6 dsw-text-gray-900 dsw-text-base dsw-leading-6 dsw-z-50"
};
var _hoisted_131 = {
  "class": "dsw-grid dsw-grid-cols-4 dsw-gap-4"
};
var _hoisted_132 = {
  "class": "dsw-text-bold dsw-p-2"
};
var _hoisted_133 = {
  key: 0,
  "class": "dsw-mt-2"
};

var _hoisted_134 = /*#__PURE__*/createBaseVNode("p", {
  "class": "dsw-text-sm dsw-text-gray-600"
}, "Pick a WooCommerce Category", -1);

var _hoisted_135 = /*#__PURE__*/createBaseVNode("br", null, null, -1);

var _hoisted_136 = /*#__PURE__*/createBaseVNode("span", null, "Save", -1);

var _hoisted_137 = /*#__PURE__*/createTextVNode(" Saved! ");

function Brandvue_type_template_id_6ef40bde_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Switch = resolveComponent("Switch");

  var _component_Pagination = resolveComponent("Pagination");

  var _component_DropDown = resolveComponent("DropDown");

  var _component_Button = resolveComponent("Button");

  var _component_Switcher = resolveComponent("Switcher");

  var _component_Accordion = resolveComponent("Accordion");

  var _component_modal = resolveComponent("modal");

  var _component_Notification = resolveComponent("Notification");

  return openBlock(), createElementBlock(Fragment, null, [createBaseVNode("div", Brandvue_type_template_id_6ef40bde_hoisted_1, [$data.brand ? (openBlock(), createElementBlock("div", Brandvue_type_template_id_6ef40bde_hoisted_2, [createBaseVNode("div", Brandvue_type_template_id_6ef40bde_hoisted_3, [createBaseVNode("div", Brandvue_type_template_id_6ef40bde_hoisted_4, [$data.brand.image ? (openBlock(), createElementBlock("img", {
    key: 0,
    src: $data.brand.image,
    alt: $data.brand.name,
    "class": "dsw-w-56"
  }, null, 8, Brandvue_type_template_id_6ef40bde_hoisted_5)) : createCommentVNode("", true)]), createBaseVNode("div", Brandvue_type_template_id_6ef40bde_hoisted_6, [$data.number_of_changes || $data.queued_sync_count > 0 ? (openBlock(), createElementBlock("div", Brandvue_type_template_id_6ef40bde_hoisted_7, [createBaseVNode("div", Brandvue_type_template_id_6ef40bde_hoisted_8, [$data.queued_sync_count > 0 ? (openBlock(), createElementBlock("div", Brandvue_type_template_id_6ef40bde_hoisted_9, [createBaseVNode("div", Brandvue_type_template_id_6ef40bde_hoisted_10, [Brandvue_type_template_id_6ef40bde_hoisted_11, createTextVNode(" Your site is currently downloading the latest syndication content. You have " + Object(shared_esm_bundler["M" /* toDisplayString */])($data.queued_sync_count) + " pieces left. ", 1)])])) : createCommentVNode("", true), createBaseVNode("div", Brandvue_type_template_id_6ef40bde_hoisted_12, [createTextVNode(Object(shared_esm_bundler["M" /* toDisplayString */])($data.number_of_changes) + " pending updates not saved. ", 1), !$data.currently_saving ? (openBlock(), createElementBlock("button", {
    key: 0,
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.saveBrand && $options.saveBrand.apply($options, arguments);
    }),
    type: "submit",
    disabled: $data.queued_sync_count > 0 ? true : false,
    "class": "dsw-bg-blue-500 dsw-text-white dsw-p-2 dsw-text-xs dsw-mx-2 dsw-px-3 dsw-rounded-sm dsw-border dsw-border-gray-400"
  }, [Brandvue_type_template_id_6ef40bde_hoisted_14, $data.queued_sync_count > 0 ? (openBlock(), createElementBlock("span", Brandvue_type_template_id_6ef40bde_hoisted_15, "(Disabled while syncing site)")) : createCommentVNode("", true)], 8, Brandvue_type_template_id_6ef40bde_hoisted_13)) : (openBlock(), createElementBlock("svg", Brandvue_type_template_id_6ef40bde_hoisted_16, Brandvue_type_template_id_6ef40bde_hoisted_19))])])])) : createCommentVNode("", true), $data.brand.estore ? (openBlock(), createElementBlock("button", {
    key: 1,
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $data.show = true;
    }),
    type: "button",
    "class": "dsw-bg-gray-300 dsw-text-gray-800 dsw-p-2 dsw-text-xs dsw-px-3 dsw-rounded-sm dsw-border dsw-border-gray-400"
  }, "MANAGE E-STORE CATEGORIES")) : createCommentVNode("", true)])]), createBaseVNode("div", Brandvue_type_template_id_6ef40bde_hoisted_20, [createBaseVNode("span", Brandvue_type_template_id_6ef40bde_hoisted_21, Object(shared_esm_bundler["M" /* toDisplayString */])($data.contentStats.total_count) + " URLs", 1), Brandvue_type_template_id_6ef40bde_hoisted_22]), createBaseVNode("div", Brandvue_type_template_id_6ef40bde_hoisted_23, [createBaseVNode("div", Brandvue_type_template_id_6ef40bde_hoisted_24, [createVNode(_component_Switch, {
    checked: "{brand.settings.enable_products}",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.clickContentTypeOnOff('products');
    }),
    "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2 focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75", $data.brand.settings.enable_products ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'])
  }, {
    "default": withCtx(function () {
      return [createBaseVNode("span", {
        "aria-hidden": "true",
        "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200", $data.brand.settings.enable_products ? 'dsw-translate-x-6' : 'dsw-translate-x-0'])
      }, null, 2)];
    }),
    _: 1
  }, 8, ["class"]), createBaseVNode("div", Brandvue_type_template_id_6ef40bde_hoisted_25, [Brandvue_type_template_id_6ef40bde_hoisted_26, createTextVNode(" (" + Object(shared_esm_bundler["M" /* toDisplayString */])($data.contentStats.product_count) + ") ", 1)])]), createBaseVNode("div", Brandvue_type_template_id_6ef40bde_hoisted_27, [createVNode(_component_Switch, {
    checked: "{brand.settings.enable_posts}",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.clickContentTypeOnOff('posts');
    }),
    "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2 focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75", $data.brand.settings.enable_posts ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'])
  }, {
    "default": withCtx(function () {
      return [createBaseVNode("span", {
        "aria-hidden": "true",
        "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200", $data.brand.settings.enable_posts ? 'dsw-translate-x-6' : 'dsw-translate-x-0'])
      }, null, 2)];
    }),
    _: 1
  }, 8, ["class"]), createBaseVNode("div", Brandvue_type_template_id_6ef40bde_hoisted_28, [Brandvue_type_template_id_6ef40bde_hoisted_29, createTextVNode(" (" + Object(shared_esm_bundler["M" /* toDisplayString */])($data.contentStats.post_count) + ") ", 1)])])]), createBaseVNode("div", Brandvue_type_template_id_6ef40bde_hoisted_30, [createBaseVNode("div", Brandvue_type_template_id_6ef40bde_hoisted_31, [createVNode(_component_Switch, {
    checked: "{brand.settings.enable_pages}",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.clickContentTypeOnOff('pages');
    }),
    "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2 focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75", $data.brand.settings.enable_pages ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'])
  }, {
    "default": withCtx(function () {
      return [createBaseVNode("span", {
        "aria-hidden": "true",
        "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200", $data.brand.settings.enable_pages ? 'dsw-translate-x-6' : 'dsw-translate-x-0'])
      }, null, 2)];
    }),
    _: 1
  }, 8, ["class"]), createBaseVNode("div", Brandvue_type_template_id_6ef40bde_hoisted_32, [Brandvue_type_template_id_6ef40bde_hoisted_33, createTextVNode(" (" + Object(shared_esm_bundler["M" /* toDisplayString */])($data.contentStats.page_count) + ") ", 1)])]), createBaseVNode("div", Brandvue_type_template_id_6ef40bde_hoisted_34, [createVNode(_component_Switch, {
    checked: "{brand.settings.enable_articles}",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $options.clickContentTypeOnOff('articles');
    }),
    "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2 focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75", $data.brand.settings.enable_articles ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'])
  }, {
    "default": withCtx(function () {
      return [createBaseVNode("span", {
        "aria-hidden": "true",
        "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200", $data.brand.settings.enable_articles ? 'dsw-translate-x-6' : 'dsw-translate-x-0'])
      }, null, 2)];
    }),
    _: 1
  }, 8, ["class"]), createBaseVNode("div", Brandvue_type_template_id_6ef40bde_hoisted_35, [Brandvue_type_template_id_6ef40bde_hoisted_36, createTextVNode(" (" + Object(shared_esm_bundler["M" /* toDisplayString */])($data.contentStats.article_count) + ") ", 1)])])]), createBaseVNode("div", _hoisted_37, " Manage " + Object(shared_esm_bundler["M" /* toDisplayString */])($data.brand.name) + " Syndicated URLs ", 1), $data.brand.settings.enable_products ? (openBlock(), createElementBlock("div", _hoisted_38, [createBaseVNode("input", {
    id: 'tab-products-' + $data.brand.id,
    type: "checkbox",
    name: "tabs",
    "class": "dsw-absolute dsw-opacity-0"
  }, null, 8, _hoisted_39), createBaseVNode("label", {
    "for": 'tab-products-' + $data.brand.id,
    "class": "dsw-block dsw-py-4 dsw-px-7 dsw-z-20 dsw-relative dsw-leading-normal dsw-cursor-pointer dsw-bg-slate-800 dsw-text-white dsw-flex dsw-items-center"
  }, _hoisted_43, 8, _hoisted_40), createBaseVNode("div", _hoisted_44, [createBaseVNode("div", _hoisted_45, [createBaseVNode("table", _hoisted_46, [createBaseVNode("tbody", null, [createBaseVNode("tr", _hoisted_47, [_hoisted_48, createBaseVNode("td", _hoisted_49, [!$data.brand.settings.enable_all_products ? (openBlock(), createElementBlock("div", _hoisted_50, [withDirectives(createBaseVNode("input", {
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.product_search_terms = $event;
    }),
    onKeyup: _cache[7] || (_cache[7] = function () {
      return $options.productSearchKeyUp && $options.productSearchKeyUp.apply($options, arguments);
    }),
    "class": "dsw-w-full dsw-font-dsw dsw-border dsw-border-gray-300 dsw-rounded dsw-p-2 dsw-text-md dsw-leading-snug",
    type: "text",
    placeholder: "Filter by Keyword"
  }, null, 544), [[vModelText, $data.product_search_terms]]), _hoisted_51])) : createCommentVNode("", true), _hoisted_52])]), createBaseVNode("tr", _hoisted_53, [createBaseVNode("td", _hoisted_54, [createVNode(_component_Switch, {
    checked: "{brand.settings.enable_all_products}",
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return $options.clickContentTypeAllOnOff('products');
    }),
    "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2 focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75", $data.brand.settings.enable_all_products ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'])
  }, {
    "default": withCtx(function () {
      return [createBaseVNode("span", {
        "aria-hidden": "true",
        "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200", $data.brand.settings.enable_all_products ? 'dsw-translate-x-6' : 'dsw-translate-x-0'])
      }, null, 2)];
    }),
    _: 1
  }, 8, ["class"])]), createBaseVNode("td", _hoisted_55, [createBaseVNode("div", null, "All Products (" + Object(shared_esm_bundler["M" /* toDisplayString */])($data.brand.products.length) + ")", 1)])]), !$data.brand.settings.enable_all_products && !$data.product_search_terms ? (openBlock(true), createElementBlock(Fragment, {
    key: 0
  }, renderList($data.brand.products.slice($data.product_pagination.current_page_first_index - 1, $data.product_pagination.current_page_last_index), function (row) {
    return openBlock(), createElementBlock("tr", {
      "class": "dsw-border-b dsw-text-base",
      key: row.id
    }, [createBaseVNode("td", _hoisted_56, [createVNode(_component_Switch, {
      checked: "{row.enabled}",
      onClick: function onClick($event) {
        return row.enabled = !row.enabled;
      },
      "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2 focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75", row.enabled ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'])
    }, {
      "default": withCtx(function () {
        return [createBaseVNode("span", {
          "aria-hidden": "true",
          "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200", row.enabled ? 'dsw-translate-x-6' : 'dsw-translate-x-0'])
        }, null, 2)];
      }),
      _: 2
    }, 1032, ["onClick", "class"])]), createBaseVNode("td", _hoisted_57, Object(shared_esm_bundler["M" /* toDisplayString */])(row.name), 1)]);
  }), 128)) : $data.product_search_terms ? (openBlock(true), createElementBlock(Fragment, {
    key: 1
  }, renderList($data.product_search_results, function (row) {
    return openBlock(), createElementBlock("tr", {
      "class": "dsw-border-b dsw-text-base",
      key: row.id
    }, [createBaseVNode("td", _hoisted_58, [createVNode(_component_Switch, {
      checked: "{row.enabled}",
      onClick: function onClick($event) {
        return row.enabled = !row.enabled;
      },
      "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2 focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75", row.enabled ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'])
    }, {
      "default": withCtx(function () {
        return [createBaseVNode("span", {
          "aria-hidden": "true",
          "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200", row.enabled ? 'dsw-translate-x-6' : 'dsw-translate-x-0'])
        }, null, 2)];
      }),
      _: 2
    }, 1032, ["onClick", "class"])]), createBaseVNode("td", _hoisted_59, Object(shared_esm_bundler["M" /* toDisplayString */])(row.name), 1)]);
  }), 128)) : createCommentVNode("", true)])]), $data.product_pagination.total_pages && !$data.brand.settings.enable_all_products && !$data.product_search_terms ? (openBlock(), createBlock(_component_Pagination, {
    key: 0,
    onChangeResultsPerPage: $options.changeResultsPerPage,
    onPrevHandle: $options.productPrevHandle,
    onNextHandle: $options.productNextHandle,
    onHandleClick: $options.productHandleClick,
    currentItemsFirst: $data.product_pagination.current_page_first_index,
    currentItemsLast: $data.product_pagination.current_page_last_index,
    totalItemCount: $data.product_pagination.total_results_count,
    currentPage: $data.product_pagination.current_page,
    pageCount: $data.product_pagination.total_pages
  }, null, 8, ["onChangeResultsPerPage", "onPrevHandle", "onNextHandle", "onHandleClick", "currentItemsFirst", "currentItemsLast", "totalItemCount", "currentPage", "pageCount"])) : createCommentVNode("", true)])])])) : createCommentVNode("", true), $data.brand.settings.enable_pages ? (openBlock(), createElementBlock("div", _hoisted_60, [createBaseVNode("input", {
    id: 'tab-pages-' + $data.brand.id,
    type: "checkbox",
    name: "tabs",
    "class": "dsw-absolute dsw-opacity-0"
  }, null, 8, _hoisted_61), createBaseVNode("label", {
    "for": 'tab-pages-' + $data.brand.id,
    "class": "dsw-block dsw-py-4 dsw-px-7 dsw-z-20 dsw-relative dsw-leading-normal dsw-cursor-pointer dsw-bg-slate-800 dsw-text-white dsw-flex dsw-items-center"
  }, _hoisted_65, 8, _hoisted_62), createBaseVNode("div", _hoisted_66, [createBaseVNode("div", _hoisted_67, [createBaseVNode("table", _hoisted_68, [createBaseVNode("tbody", null, [createBaseVNode("tr", _hoisted_69, [_hoisted_70, createBaseVNode("td", _hoisted_71, [!$data.brand.settings.enable_all_pages ? (openBlock(), createElementBlock("div", _hoisted_72, [withDirectives(createBaseVNode("input", {
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.page_search_terms = $event;
    }),
    onKeyup: _cache[10] || (_cache[10] = function () {
      return $options.pageSearchKeyUp && $options.pageSearchKeyUp.apply($options, arguments);
    }),
    "class": "dsw-w-full dsw-font-dsw dsw-border dsw-border-gray-300 dsw-rounded dsw-p-2 dsw-text-md dsw-leading-snug",
    type: "text",
    placeholder: "Filter by Keyword"
  }, null, 544), [[vModelText, $data.page_search_terms]]), _hoisted_73])) : createCommentVNode("", true), _hoisted_74])]), createBaseVNode("tr", _hoisted_75, [createBaseVNode("td", _hoisted_76, [createVNode(_component_Switch, {
    checked: "{brand.settings.enable_all_pages}",
    onClick: _cache[11] || (_cache[11] = function ($event) {
      return $options.clickContentTypeAllOnOff('pages');
    }),
    "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2 focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75", $data.brand.settings.enable_all_pages ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'])
  }, {
    "default": withCtx(function () {
      return [createBaseVNode("span", {
        "aria-hidden": "true",
        "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200", $data.brand.settings.enable_all_pages ? 'dsw-translate-x-6' : 'dsw-translate-x-0'])
      }, null, 2)];
    }),
    _: 1
  }, 8, ["class"])]), createBaseVNode("td", _hoisted_77, [createBaseVNode("div", null, "All Web Pages (" + Object(shared_esm_bundler["M" /* toDisplayString */])($data.brand.pages.length) + ")", 1)])]), !$data.brand.settings.enable_all_pages && !$data.page_search_terms ? (openBlock(true), createElementBlock(Fragment, {
    key: 0
  }, renderList($data.brand.pages.slice($data.page_pagination.current_page_first_index - 1, $data.page_pagination.current_page_last_index), function (row) {
    return openBlock(), createElementBlock("tr", {
      "class": "dsw-border-b dsw-text-base",
      key: row.id
    }, [createBaseVNode("td", _hoisted_78, [createVNode(_component_Switch, {
      checked: "{row.enabled}",
      onClick: function onClick($event) {
        return row.enabled = !row.enabled;
      },
      "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2 focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75", row.enabled ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'])
    }, {
      "default": withCtx(function () {
        return [createBaseVNode("span", {
          "aria-hidden": "true",
          "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200", row.enabled ? 'dsw-translate-x-6' : 'dsw-translate-x-0'])
        }, null, 2)];
      }),
      _: 2
    }, 1032, ["onClick", "class"])]), createBaseVNode("td", _hoisted_79, Object(shared_esm_bundler["M" /* toDisplayString */])(row.name), 1)]);
  }), 128)) : $data.page_search_terms ? (openBlock(true), createElementBlock(Fragment, {
    key: 1
  }, renderList($data.page_search_results, function (row) {
    return openBlock(), createElementBlock("tr", {
      "class": "dsw-border-b dsw-text-base",
      key: row.id
    }, [createBaseVNode("td", _hoisted_80, [createVNode(_component_Switch, {
      checked: "{row.enabled}",
      onClick: function onClick($event) {
        return row.enabled = !row.enabled;
      },
      "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2 focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75", row.enabled ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'])
    }, {
      "default": withCtx(function () {
        return [createBaseVNode("span", {
          "aria-hidden": "true",
          "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200", row.enabled ? 'dsw-translate-x-6' : 'dsw-translate-x-0'])
        }, null, 2)];
      }),
      _: 2
    }, 1032, ["onClick", "class"])]), createBaseVNode("td", _hoisted_81, Object(shared_esm_bundler["M" /* toDisplayString */])(row.name), 1)]);
  }), 128)) : createCommentVNode("", true)])]), $data.page_pagination.total_pages && !$data.brand.settings.enable_all_pages && !$data.page_search_terms ? (openBlock(), createBlock(_component_Pagination, {
    key: 0,
    onPrevHandle: $options.pagePrevHandle,
    onNextHandle: $options.pageNextHandle,
    onHandleClick: $options.pageHandleClick,
    currentItemsFirst: $data.page_pagination.current_page_first_index,
    currentItemsLast: $data.page_pagination.current_page_last_index,
    totalItemCount: $data.page_pagination.total_results_count,
    currentPage: $data.page_pagination.current_page,
    pageCount: $data.page_pagination.total_pages
  }, null, 8, ["onPrevHandle", "onNextHandle", "onHandleClick", "currentItemsFirst", "currentItemsLast", "totalItemCount", "currentPage", "pageCount"])) : createCommentVNode("", true)])])])) : createCommentVNode("", true), $data.brand.settings.enable_posts ? (openBlock(), createElementBlock("div", _hoisted_82, [createBaseVNode("input", {
    id: 'tab-posts-' + $data.brand.id,
    type: "checkbox",
    name: "tabs",
    "class": "dsw-absolute dsw-opacity-0"
  }, null, 8, _hoisted_83), createBaseVNode("label", {
    "for": 'tab-posts-' + $data.brand.id,
    "class": "dsw-block dsw-py-4 dsw-px-7 dsw-z-20 dsw-relative dsw-leading-normal dsw-cursor-pointer dsw-bg-slate-800 dsw-text-white dsw-flex dsw-items-center"
  }, _hoisted_87, 8, _hoisted_84), createBaseVNode("div", _hoisted_88, [createBaseVNode("div", _hoisted_89, [createBaseVNode("table", _hoisted_90, [createBaseVNode("tbody", null, [createBaseVNode("tr", _hoisted_91, [_hoisted_92, createBaseVNode("td", _hoisted_93, [!$data.brand.settings.enable_all_posts ? (openBlock(), createElementBlock("div", _hoisted_94, [withDirectives(createBaseVNode("input", {
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $data.post_search_terms = $event;
    }),
    onKeyup: _cache[13] || (_cache[13] = function () {
      return $options.postSearchKeyUp && $options.postSearchKeyUp.apply($options, arguments);
    }),
    "class": "dsw-w-full dsw-font-dsw dsw-border dsw-border-gray-300 dsw-rounded dsw-p-2 dsw-text-md dsw-leading-snug",
    type: "text",
    placeholder: "Filter by Keyword"
  }, null, 544), [[vModelText, $data.post_search_terms]]), _hoisted_95])) : createCommentVNode("", true), _hoisted_96])]), createBaseVNode("tr", _hoisted_97, [createBaseVNode("td", _hoisted_98, [createVNode(_component_Switch, {
    checked: "{brand.settings.enable_all_posts}",
    onClick: _cache[14] || (_cache[14] = function ($event) {
      return $options.clickContentTypeAllOnOff('posts');
    }),
    "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2 focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75", $data.brand.settings.enable_all_posts ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'])
  }, {
    "default": withCtx(function () {
      return [createBaseVNode("span", {
        "aria-hidden": "true",
        "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200", $data.brand.settings.enable_all_posts ? 'dsw-translate-x-6' : 'dsw-translate-x-0'])
      }, null, 2)];
    }),
    _: 1
  }, 8, ["class"])]), createBaseVNode("td", _hoisted_99, [createBaseVNode("div", null, "All Blog Posts (" + Object(shared_esm_bundler["M" /* toDisplayString */])($data.brand.posts.length) + ")", 1)])]), !$data.brand.settings.enable_all_posts && !$data.post_search_terms ? (openBlock(true), createElementBlock(Fragment, {
    key: 0
  }, renderList($data.brand.posts.slice($data.post_pagination.current_page_first_index - 1, $data.post_pagination.current_page_last_index), function (row) {
    return openBlock(), createElementBlock("tr", {
      "class": "dsw-border-b dsw-text-base",
      key: row.id
    }, [createBaseVNode("td", _hoisted_100, [createVNode(_component_Switch, {
      checked: "{row.enabled}",
      onClick: function onClick($event) {
        return row.enabled = !row.enabled;
      },
      "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2 focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75", row.enabled ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'])
    }, {
      "default": withCtx(function () {
        return [createBaseVNode("span", {
          "aria-hidden": "true",
          "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200", row.enabled ? 'dsw-translate-x-6' : 'dsw-translate-x-0'])
        }, null, 2)];
      }),
      _: 2
    }, 1032, ["onClick", "class"])]), createBaseVNode("td", _hoisted_101, Object(shared_esm_bundler["M" /* toDisplayString */])(row.name), 1)]);
  }), 128)) : $data.post_search_terms ? (openBlock(true), createElementBlock(Fragment, {
    key: 1
  }, renderList($data.post_search_results, function (row) {
    return openBlock(), createElementBlock("tr", {
      "class": "dsw-border-b dsw-text-base",
      key: row.id
    }, [createBaseVNode("td", _hoisted_102, [createVNode(_component_Switch, {
      checked: "{row.enabled}",
      onClick: function onClick($event) {
        return row.enabled = !row.enabled;
      },
      "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2 focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75", row.enabled ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'])
    }, {
      "default": withCtx(function () {
        return [createBaseVNode("span", {
          "aria-hidden": "true",
          "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200", row.enabled ? 'dsw-translate-x-6' : 'dsw-translate-x-0'])
        }, null, 2)];
      }),
      _: 2
    }, 1032, ["onClick", "class"])]), createBaseVNode("td", _hoisted_103, Object(shared_esm_bundler["M" /* toDisplayString */])(row.name), 1)]);
  }), 128)) : createCommentVNode("", true)])]), $data.post_pagination.total_pages && !$data.brand.settings.enable_all_posts && !$data.post_search_terms ? (openBlock(), createBlock(_component_Pagination, {
    key: 0,
    onPrevHandle: $options.postPrevHandle,
    onNextHandle: $options.postNextHandle,
    onHandleClick: $options.postHandleClick,
    currentItemsFirst: $data.post_pagination.current_page_first_index,
    currentItemsLast: $data.post_pagination.current_page_last_index,
    totalItemCount: $data.post_pagination.total_results_count,
    currentPage: $data.post_pagination.current_page,
    pageCount: $data.post_pagination.total_pages
  }, null, 8, ["onPrevHandle", "onNextHandle", "onHandleClick", "currentItemsFirst", "currentItemsLast", "totalItemCount", "currentPage", "pageCount"])) : createCommentVNode("", true)])])])) : createCommentVNode("", true), $data.brand.settings.enable_articles ? (openBlock(), createElementBlock("div", _hoisted_104, [createBaseVNode("input", {
    id: 'tab-articles-' + $data.brand.id,
    type: "checkbox",
    name: "tabs",
    "class": "dsw-absolute dsw-opacity-0"
  }, null, 8, _hoisted_105), createBaseVNode("label", {
    "for": 'tab-articles-' + $data.brand.id,
    "class": "dsw-block dsw-py-4 dsw-px-7 dsw-z-20 dsw-relative dsw-leading-normal dsw-cursor-pointer dsw-bg-slate-800 dsw-text-white dsw-flex dsw-items-center"
  }, _hoisted_109, 8, _hoisted_106), createBaseVNode("div", _hoisted_110, [createBaseVNode("div", _hoisted_111, [createBaseVNode("table", _hoisted_112, [createBaseVNode("tbody", null, [createBaseVNode("tr", _hoisted_113, [_hoisted_114, createBaseVNode("td", _hoisted_115, [!$data.brand.settings.enable_all_articles ? (openBlock(), createElementBlock("div", _hoisted_116, [withDirectives(createBaseVNode("input", {
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return $data.article_search_terms = $event;
    }),
    onKeyup: _cache[16] || (_cache[16] = function () {
      return $options.articleSearchKeyUp && $options.articleSearchKeyUp.apply($options, arguments);
    }),
    "class": "dsw-w-full dsw-font-dsw dsw-border dsw-border-gray-300 dsw-rounded dsw-p-2 dsw-text-md dsw-leading-snug",
    type: "text",
    placeholder: "Filter by Keyword"
  }, null, 544), [[vModelText, $data.article_search_terms]]), _hoisted_117])) : createCommentVNode("", true), _hoisted_118])]), createBaseVNode("tr", _hoisted_119, [createBaseVNode("td", _hoisted_120, [createVNode(_component_Switch, {
    checked: "{brand.settings.enable_all_articles}",
    onClick: _cache[17] || (_cache[17] = function ($event) {
      return $options.clickContentTypeAllOnOff('articles');
    }),
    "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2 focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75", $data.brand.settings.enable_all_articles ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'])
  }, {
    "default": withCtx(function () {
      return [createBaseVNode("span", {
        "aria-hidden": "true",
        "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200", $data.brand.settings.enable_all_articles ? 'dsw-translate-x-6' : 'dsw-translate-x-0'])
      }, null, 2)];
    }),
    _: 1
  }, 8, ["class"])]), createBaseVNode("td", _hoisted_121, [createBaseVNode("div", null, "All Knowldege Base Articles (" + Object(shared_esm_bundler["M" /* toDisplayString */])($data.brand.knowledgebase_articles.length) + ")", 1)])]), !$data.brand.settings.enable_all_articles && !$data.article_search_terms ? (openBlock(true), createElementBlock(Fragment, {
    key: 0
  }, renderList($data.brand.knowledgebase_articles.slice($data.article_pagination.current_page_first_index - 1, $data.article_pagination.current_page_last_index), function (row) {
    return openBlock(), createElementBlock("tr", {
      "class": "dsw-border-b dsw-text-base",
      key: row.id
    }, [createBaseVNode("td", _hoisted_122, [createVNode(_component_Switch, {
      checked: "{row.enabled}",
      onClick: function onClick($event) {
        return row.enabled = !row.enabled;
      },
      "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2 focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75", row.enabled ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'])
    }, {
      "default": withCtx(function () {
        return [createBaseVNode("span", {
          "aria-hidden": "true",
          "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200", row.enabled ? 'dsw-translate-x-6' : 'dsw-translate-x-0'])
        }, null, 2)];
      }),
      _: 2
    }, 1032, ["onClick", "class"])]), createBaseVNode("td", _hoisted_123, Object(shared_esm_bundler["M" /* toDisplayString */])(row.name), 1)]);
  }), 128)) : $data.article_search_terms ? (openBlock(true), createElementBlock(Fragment, {
    key: 1
  }, renderList($data.article_search_results, function (row) {
    return openBlock(), createElementBlock("tr", {
      "class": "dsw-border-b dsw-text-base",
      key: row.id
    }, [createBaseVNode("td", _hoisted_124, [createVNode(_component_Switch, {
      checked: "{row.enabled}",
      onClick: function onClick($event) {
        return row.enabled = !row.enabled;
      },
      "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-7 dsw-w-[52px] dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus-visible:dsw-ring-2 focus-visible:dsw-ring-white focus-visible:dsw-ring-opacity-75", row.enabled ? 'dsw-bg-green-600' : 'dsw-bg-gray-500'])
    }, {
      "default": withCtx(function () {
        return [createBaseVNode("span", {
          "aria-hidden": "true",
          "class": Object(shared_esm_bundler["J" /* normalizeClass */])(["dsw-pointer-events-none dsw-inline-block dsw-h-6 dsw-w-6 dsw-rounded-full dsw-bg-white dsw-shadow-lg dsw-transform ring-0 dsw-transition dsw-ease-in-out dsw-duration-200", row.enabled ? 'dsw-translate-x-6' : 'dsw-translate-x-0'])
        }, null, 2)];
      }),
      _: 2
    }, 1032, ["onClick", "class"])]), createBaseVNode("td", _hoisted_125, Object(shared_esm_bundler["M" /* toDisplayString */])(row.name), 1)]);
  }), 128)) : createCommentVNode("", true)])]), $data.article_pagination.total_pages && !$data.brand.settings.enable_all_articles && !$data.article_search_terms ? (openBlock(), createBlock(_component_Pagination, {
    key: 0,
    onPrevHandle: $options.articlePrevHandle,
    onNextHandle: $options.articleNextHandle,
    onHandleClick: $options.articleHandleClick,
    currentItemsFirst: $data.article_pagination.current_page_first_index,
    currentItemsLast: $data.article_pagination.current_page_last_index,
    totalItemCount: $data.article_pagination.total_results_count,
    currentPage: $data.article_pagination.current_page,
    pageCount: $data.article_pagination.total_pages
  }, null, 8, ["onPrevHandle", "onNextHandle", "onHandleClick", "currentItemsFirst", "currentItemsLast", "totalItemCount", "currentPage", "pageCount"])) : createCommentVNode("", true)])])])) : createCommentVNode("", true)])) : (openBlock(), createElementBlock("div", _hoisted_126, _hoisted_128))]), createVNode(_component_modal, {
    show: $data.show,
    onClose: $options.closeModal
  }, {
    title: withCtx(function () {
      return [_hoisted_129];
    }),
    content: withCtx(function () {
      return [createBaseVNode("div", _hoisted_130, [createBaseVNode("div", _hoisted_131, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.brand.product_categories, function (category, categoryIndex) {
        return openBlock(), createElementBlock("div", {
          "class": "dsw-p-2 dsw-col-span-2 dsw-bg-white",
          key: categoryIndex
        }, [createVNode(_component_Accordion, null, {
          title: withCtx(function () {
            return [createBaseVNode("p", _hoisted_132, Object(shared_esm_bundler["M" /* toDisplayString */])(category.name), 1)];
          }),
          content: withCtx(function () {
            return [category.items.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_133, [(openBlock(true), createElementBlock(Fragment, null, renderList(category.items, function (subcategory, subcategoryIndex) {
              return openBlock(), createElementBlock("div", {
                "class": "dsw-p-2 dsw-bg-white dsw-border-b dsw-border-gray-400",
                key: subcategoryIndex
              }, [createVNode(_component_Switcher, null, {
                label: withCtx(function () {
                  return [createTextVNode(Object(shared_esm_bundler["M" /* toDisplayString */])(subcategory.name), 1)];
                }),
                content: withCtx(function () {
                  return [createBaseVNode("div", null, [_hoisted_134, createVNode(_component_DropDown, {
                    syncID: subcategory.id,
                    onSelected: $options.wooCommerceSelected
                  }, null, 8, ["syncID", "onSelected"]), _hoisted_135, createVNode(_component_Button, {
                    primary: true,
                    onClick: function onClick($event) {
                      return $options.save(category.id, subcategory.id);
                    }
                  }, {
                    text: withCtx(function () {
                      return [_hoisted_136];
                    }),
                    _: 2
                  }, 1032, ["onClick"])])];
                }),
                _: 2
              }, 1024)]);
            }), 128))])) : createCommentVNode("", true)];
          }),
          _: 2
        }, 1024)]);
      }), 128))])])];
    }),
    _: 1
  }, 8, ["show", "onClose"]), createVNode(_component_Notification, {
    success: $data.success,
    onSuccess: $options.emitSuccess
  }, {
    message: withCtx(function () {
      return [_hoisted_137];
    }),
    _: 1
  }, 8, ["success", "onSuccess"])], 64);
}
// CONCATENATED MODULE: ./src/vue/pages/Brand.vue?vue&type=template&id=6ef40bde

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--15-0!./src/vue/components/Modal.vue?vue&type=template&id=cb39d740

var Modalvue_type_template_id_cb39d740_hoisted_1 = {
  "class": "dsw-flex dsw-items-center dsw-justify-center dsw-min-h-screen dsw-pt-4 dsw-px-4 dsw-pb-20 dsw-text-center"
};

var Modalvue_type_template_id_cb39d740_hoisted_2 = /*#__PURE__*/createBaseVNode("span", {
  "class": "dsw-inline-block dsw-align-middle",
  "aria-hidden": "true"
}, "​", -1);

var Modalvue_type_template_id_cb39d740_hoisted_3 = {
  "class": "dsw-inline-block dsw-bg-white dsw-rounded-lg dsw-px-4 dsw-pt-5 dsw-pb-4 dsw-text-left dsw-shadow-xl dsw-transform dsw-transition-all dsw-my-0 md:dsw-ml-40 dsw-align-middle dsw-max-w-xl sm:dsw-max-w-2xl md:dsw-max-w-3xl dsw-w-full"
};

var Modalvue_type_template_id_cb39d740_hoisted_4 = /*#__PURE__*/createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "dsw-h-8 dsw-w-8 dsw-cursor-pointer dsw-absolute dsw--top-4 dsw--right-4 dsw-bg-white dsw-border dsw-rounded-full",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [/*#__PURE__*/createBaseVNode("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
  "clip-rule": "evenodd"
})], -1);

var Modalvue_type_template_id_cb39d740_hoisted_5 = [Modalvue_type_template_id_cb39d740_hoisted_4];
var Modalvue_type_template_id_cb39d740_hoisted_6 = {
  "class": "dsw-max-h-96 dsw-overflow-y-auto"
};
var Modalvue_type_template_id_cb39d740_hoisted_7 = {
  "class": "dsw-mt-3 dsw-text-center dsw-sm:mt-5"
};
var Modalvue_type_template_id_cb39d740_hoisted_8 = {
  "class": "dsw-mt-5"
};
function Modalvue_type_template_id_cb39d740_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DialogOverlay = resolveComponent("DialogOverlay");

  var _component_TransitionChild = resolveComponent("TransitionChild");

  var _component_DialogTitle = resolveComponent("DialogTitle");

  var _component_Dialog = resolveComponent("Dialog");

  var _component_TransitionRoot = resolveComponent("TransitionRoot");

  return openBlock(), createBlock(_component_TransitionRoot, {
    as: "template",
    show: $props.show
  }, {
    "default": withCtx(function () {
      return [createVNode(_component_Dialog, {
        as: "div",
        "class": "dsw-fixed dsw-z-50 dsw-inset-0 dsw-overflow-y-auto",
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return $props.show = false;
        })
      }, {
        "default": withCtx(function () {
          return [createBaseVNode("div", Modalvue_type_template_id_cb39d740_hoisted_1, [createVNode(_component_TransitionChild, {
            as: "template",
            enter: "dsw-ease-out dsw-duration-300",
            "enter-from": "dsw-opacity-0",
            "enter-to": "dsw-opacity-100",
            leave: "dsw-ease-in dsw-duration-200",
            "leave-from": "dsw-opacity-100",
            "leave-to": "dsw-opacity-0"
          }, {
            "default": withCtx(function () {
              return [createVNode(_component_DialogOverlay, {
                "class": "dsw-fixed dsw-inset-0 dsw-bg-gray-500 dsw-bg-opacity-75 dsw-transition-opacity"
              })];
            }),
            _: 1
          }), Modalvue_type_template_id_cb39d740_hoisted_2, createVNode(_component_TransitionChild, {
            as: "template",
            enter: "dsw-ease-out dsw-duration-300",
            "enter-from": "dsw-opacity-0 dsw-translate-y-4 sm:dsw-translate-y-0 sm:dsw-scale-95",
            "enter-to": "dsw-opacity-100 dsw-translate-y-0 sm:dsw-scale-100",
            leave: "dsw-ease-in dsw-duration-200",
            "leave-from": "dsw-opacity-100 dsw-translate-y-0 sm:dsw-scale-100",
            "leave-to": "dsw-opacity-0 dsw-translate-y-4 sm:dsw-translate-y-0 sm:dsw-scale-95"
          }, {
            "default": withCtx(function () {
              return [createBaseVNode("div", Modalvue_type_template_id_cb39d740_hoisted_3, [createBaseVNode("div", {
                onClick: _cache[0] || (_cache[0] = function () {
                  return $setup.close && $setup.close.apply($setup, arguments);
                })
              }, Modalvue_type_template_id_cb39d740_hoisted_5), createBaseVNode("div", Modalvue_type_template_id_cb39d740_hoisted_6, [createBaseVNode("div", Modalvue_type_template_id_cb39d740_hoisted_7, [createVNode(_component_DialogTitle, {
                as: "h3",
                "class": "dsw-text-lg dsw-leading-6 dsw-font-medium dsw-text-gray-900"
              }, {
                "default": withCtx(function () {
                  return [renderSlot(_ctx.$slots, "title")];
                }),
                _: 3
              }), createBaseVNode("div", Modalvue_type_template_id_cb39d740_hoisted_8, [renderSlot(_ctx.$slots, "content")])])])])];
            }),
            _: 3
          })])];
        }),
        _: 3
      })];
    }),
    _: 3
  }, 8, ["show"]);
}
// CONCATENATED MODULE: ./src/vue/components/Modal.vue?vue&type=template&id=cb39d740

// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/headlessui.esm.js
function T(t,n,...u){if(t in n){let o=n[t];return typeof o=="function"?o(...u):o}let e=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(e,T),e}function x({visible:t=!0,features:n=0,...u}){var e;if(t||n&2&&u.props.static)return Se(u);if(n&1){let o=((e=u.props.unmount)!=null?e:!0)?0:1;return T(o,{[0](){return null},[1](){return Se({...u,props:{...u.props,hidden:!0,style:{display:"none"}}})}})}return Se(u)}function Se({props:t,attrs:n,slots:u,slot:e,name:o}){var a;let{as:r,...s}=L(t,["unmount","static"]),d=(a=u.default)==null?void 0:a.call(u,e);if(r==="template"){if(Object.keys(s).length>0||Object.keys(n).length>0){let[i,...l]=d!=null?d:[];if(!co(i)||l.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(s).concat(Object.keys(n)).map(c=>`  - ${c}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(c=>`  - ${c}`).join(`
`)].join(`
`));return cloneVNode(i,s)}return Array.isArray(d)&&d.length===1?d[0]:d}return h(r,s,d)}function L(t,n=[]){let u=Object.assign({},t);for(let e of n)e in u&&delete u[e];return u}function co(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}var mo=0;function vo(){return++mo}function headlessui_esm_h(){return vo()}function bo(t){throw new Error("Unexpected object: "+t)}function J(t,n){let u=n.resolveItems();if(u.length<=0)return null;let e=n.resolveActiveIndex(),o=e!=null?e:-1,r=(()=>{switch(t.focus){case 0:return u.findIndex(s=>!n.resolveDisabled(s));case 1:{let s=u.slice().reverse().findIndex((d,a,i)=>o!==-1&&i.length-a-1>=o?!1:!n.resolveDisabled(d));return s===-1?s:u.length-1-s}case 2:return u.findIndex((s,d)=>d<=o?!1:!n.resolveDisabled(s));case 3:{let s=u.slice().reverse().findIndex(d=>!n.resolveDisabled(d));return s===-1?s:u.length-1-s}case 4:return u.findIndex(s=>n.resolveId(s)===t.id);case 5:return null;default:bo(t)}})();return r===-1?e:r}function headlessui_esm_v(t){return t==null||t.value==null?null:"$el"in t.value?t.value.$el:t.value}function C(t,n,u){typeof window!="undefined"&&watchEffect(e=>{window.addEventListener(t,n,u),e(()=>{window.removeEventListener(t,n,u)})})}var at=Symbol("Context");function it(){return I()!==null}function I(){return inject(at,null)}function M(t){provide(at,t)}function ut(t,n){if(t)return t;let u=n!=null?n:"button";if(typeof u=="string"&&u.toLowerCase()==="button")return"button"}function P(t,n){let u=reactivity_esm_bundler_ref(ut(t.value.type,t.value.as));return onMounted(()=>{u.value=ut(t.value.type,t.value.as)}),watchEffect(()=>{var e;u.value||!headlessui_esm_v(n)||headlessui_esm_v(n)instanceof HTMLButtonElement&&!((e=headlessui_esm_v(n))==null?void 0:e.hasAttribute("type"))&&(u.value="button")}),u}function Y({container:t,accept:n,walk:u,enabled:e}){watchEffect(()=>{let o=t.value;if(!o||e!==void 0&&!e.value)return;let r=Object.assign(d=>n(d),{acceptNode:n}),s=document.createTreeWalker(o,NodeFilter.SHOW_ELEMENT,r,!1);for(;s.nextNode();)u(s.currentNode)})}var ct=Symbol("ComboboxContext");function ee(t){let n=inject(ct,null);if(n===null){let u=new Error(`<${t} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,ee),u}return n}var Vl=defineComponent({name:"Combobox",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean]}},setup(t,{slots:n,attrs:u,emit:e}){let o=reactivity_esm_bundler_ref(1),r=reactivity_esm_bundler_ref(null),s=reactivity_esm_bundler_ref(null),d=reactivity_esm_bundler_ref(null),a=reactivity_esm_bundler_ref(null),i=reactivity_esm_bundler_ref({static:!1,hold:!1}),l=reactivity_esm_bundler_ref([]),c=reactivity_esm_bundler_ref(null),p=runtime_core_esm_bundler_computed(()=>t.modelValue),f={comboboxState:o,value:p,inputRef:s,labelRef:r,buttonRef:d,optionsRef:a,disabled:runtime_core_esm_bundler_computed(()=>t.disabled),options:l,activeOptionIndex:c,inputPropsRef:reactivity_esm_bundler_ref({displayValue:void 0}),optionsPropsRef:i,closeCombobox(){t.disabled||o.value!==1&&(o.value=1,c.value=null)},openCombobox(){t.disabled||o.value!==0&&(o.value=0)},goToOption(m,g){if(t.disabled||a.value&&!i.value.static&&o.value===1)return;let S=J(m===4?{focus:4,id:g}:{focus:m},{resolveItems:()=>l.value,resolveActiveIndex:()=>c.value,resolveId:y=>y.id,resolveDisabled:y=>y.dataRef.disabled});c.value!==S&&(c.value=S)},syncInputValue(){let m=f.value.value;if(!headlessui_esm_v(f.inputRef)||m===void 0)return;let g=f.inputPropsRef.value.displayValue;typeof g=="function"?f.inputRef.value.value=g(m):typeof m=="string"&&(f.inputRef.value.value=m)},selectOption(m){let g=l.value.find(y=>y.id===m);if(!g)return;let{dataRef:S}=g;e("update:modelValue",S.value),f.syncInputValue()},selectActiveOption(){if(c.value===null)return;let{dataRef:m}=l.value[c.value];e("update:modelValue",m.value),f.syncInputValue()},registerOption(m,g){var R,E;let S=c.value!==null?l.value[c.value]:null,y=Array.from((E=(R=a.value)==null?void 0:R.querySelectorAll('[id^="headlessui-combobox-option-"]'))!=null?E:[]).reduce((D,w,F)=>Object.assign(D,{[w.id]:F}),{});l.value=[...l.value,{id:m,dataRef:g}].sort((D,w)=>y[D.id]-y[w.id]),c.value=(()=>S===null?null:l.value.indexOf(S))()},unregisterOption(m){let g=l.value.slice(),S=c.value!==null?g[c.value]:null,y=g.findIndex(R=>R.id===m);y!==-1&&g.splice(y,1),l.value=g,c.value=(()=>y===c.value||S===null?null:g.indexOf(S))()}};C("mousedown",m=>{var S,y,R;let g=m.target;o.value===0&&(((S=headlessui_esm_v(s))==null?void 0:S.contains(g))||((y=headlessui_esm_v(d))==null?void 0:y.contains(g))||((R=headlessui_esm_v(a))==null?void 0:R.contains(g))||f.closeCombobox())}),watch([f.value,f.inputRef],()=>f.syncInputValue(),{immediate:!0}),provide(ct,f),M(runtime_core_esm_bundler_computed(()=>T(o.value,{[0]:0,[1]:1})));let b=runtime_core_esm_bundler_computed(()=>c.value===null?null:l.value[c.value].dataRef.value);return()=>{let m={open:o.value===0,disabled:t.disabled,activeIndex:c.value,activeOption:b.value};return x({props:L(t,["modelValue","onUpdate:modelValue","disabled"]),slot:m,slots:n,attrs:u,name:"Combobox"})}}}),Nl=defineComponent({name:"ComboboxLabel",props:{as:{type:[Object,String],default:"label"}},setup(t,{attrs:n,slots:u}){let e=ee("ComboboxLabel"),o=`headlessui-combobox-label-${headlessui_esm_h()}`;function r(){var s;(s=headlessui_esm_v(e.inputRef))==null||s.focus({preventScroll:!0})}return()=>{let s={open:e.comboboxState.value===0,disabled:e.disabled.value},d={id:o,ref:e.labelRef,onClick:r};return x({props:{...t,...d},slot:s,attrs:n,slots:u,name:"ComboboxLabel"})}}}),Wl=defineComponent({name:"ComboboxButton",props:{as:{type:[Object,String],default:"button"}},setup(t,{attrs:n,slots:u}){let e=ee("ComboboxButton"),o=`headlessui-combobox-button-${headlessui_esm_h()}`;function r(a){e.disabled.value||(e.comboboxState.value===0?e.closeCombobox():(a.preventDefault(),e.openCombobox()),nextTick(()=>{var i;return(i=headlessui_esm_v(e.inputRef))==null?void 0:i.focus({preventScroll:!0})}))}function s(a){switch(a.key){case"ArrowDown":a.preventDefault(),a.stopPropagation(),e.comboboxState.value===1&&(e.openCombobox(),nextTick(()=>{e.value.value||e.goToOption(0)})),nextTick(()=>{var i;return(i=e.inputRef.value)==null?void 0:i.focus({preventScroll:!0})});return;case"ArrowUp":a.preventDefault(),a.stopPropagation(),e.comboboxState.value===1&&(e.openCombobox(),nextTick(()=>{e.value.value||e.goToOption(3)})),nextTick(()=>{var i;return(i=e.inputRef.value)==null?void 0:i.focus({preventScroll:!0})});return;case"Escape":a.preventDefault(),e.optionsRef.value&&!e.optionsPropsRef.value.static&&a.stopPropagation(),e.closeCombobox(),nextTick(()=>{var i;return(i=e.inputRef.value)==null?void 0:i.focus({preventScroll:!0})});return}}let d=P(runtime_core_esm_bundler_computed(()=>({as:t.as,type:n.type})),e.buttonRef);return()=>{var l,c;let a={open:e.comboboxState.value===0,disabled:e.disabled.value},i={ref:e.buttonRef,id:o,type:d.value,tabindex:"-1","aria-haspopup":!0,"aria-controls":(l=headlessui_esm_v(e.optionsRef))==null?void 0:l.id,"aria-expanded":e.disabled.value?void 0:e.comboboxState.value===0,"aria-labelledby":e.labelRef.value?[(c=headlessui_esm_v(e.labelRef))==null?void 0:c.id,o].join(" "):void 0,disabled:e.disabled.value===!0?!0:void 0,onKeydown:s,onClick:r};return x({props:{...t,...i},slot:a,attrs:n,slots:u,name:"ComboboxButton"})}}}),Ul=defineComponent({name:"ComboboxInput",props:{as:{type:[Object,String],default:"input"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},displayValue:{type:Function}},emits:{change:t=>!0},setup(t,{emit:n,attrs:u,slots:e}){let o=ee("ComboboxInput"),r=`headlessui-combobox-input-${headlessui_esm_h()}`;o.inputPropsRef=runtime_core_esm_bundler_computed(()=>t);function s(a){switch(a.key){case"Enter":a.preventDefault(),a.stopPropagation(),o.selectActiveOption(),o.closeCombobox();break;case"ArrowDown":return a.preventDefault(),a.stopPropagation(),T(o.comboboxState.value,{[0]:()=>o.goToOption(2),[1]:()=>{o.openCombobox(),nextTick(()=>{o.value.value||o.goToOption(0)})}});case"ArrowUp":return a.preventDefault(),a.stopPropagation(),T(o.comboboxState.value,{[0]:()=>o.goToOption(1),[1]:()=>{o.openCombobox(),nextTick(()=>{o.value.value||o.goToOption(3)})}});case"Home":case"PageUp":return a.preventDefault(),a.stopPropagation(),o.goToOption(0);case"End":case"PageDown":return a.preventDefault(),a.stopPropagation(),o.goToOption(3);case"Escape":a.preventDefault(),o.optionsRef.value&&!o.optionsPropsRef.value.static&&a.stopPropagation(),o.closeCombobox();break;case"Tab":o.selectActiveOption(),o.closeCombobox();break}}function d(a){o.openCombobox(),n("change",a)}return()=>{var c,p,f,b,m;let a={open:o.comboboxState.value===0},i={"aria-controls":(c=o.optionsRef.value)==null?void 0:c.id,"aria-expanded":o.disabled?void 0:o.comboboxState.value===0,"aria-activedescendant":o.activeOptionIndex.value===null||(p=o.options.value[o.activeOptionIndex.value])==null?void 0:p.id,"aria-labelledby":(m=(f=headlessui_esm_v(o.labelRef))==null?void 0:f.id)!=null?m:(b=headlessui_esm_v(o.buttonRef))==null?void 0:b.id,id:r,onKeydown:s,onChange:d,onInput:d,role:"combobox",type:"text",tabIndex:0,ref:o.inputRef},l=L(t,["displayValue"]);return x({props:{...l,...i},slot:a,attrs:u,slots:e,features:1|2,name:"ComboboxInput"})}}}),$l=defineComponent({name:"ComboboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},hold:{type:[Boolean],default:!1}},setup(t,{attrs:n,slots:u}){let e=ee("ComboboxOptions"),o=`headlessui-combobox-options-${headlessui_esm_h()}`;watchEffect(()=>{e.optionsPropsRef.value.static=t.static}),watchEffect(()=>{e.optionsPropsRef.value.hold=t.hold});let r=I(),s=runtime_core_esm_bundler_computed(()=>r!==null?r.value===0:e.comboboxState.value===0);return Y({container:runtime_core_esm_bundler_computed(()=>headlessui_esm_v(e.optionsRef)),enabled:runtime_core_esm_bundler_computed(()=>e.comboboxState.value===0),accept(d){return d.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:d.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(d){d.setAttribute("role","none")}}),()=>{var l,c,p,f;let d={open:e.comboboxState.value===0},a={"aria-activedescendant":e.activeOptionIndex.value===null||(l=e.options.value[e.activeOptionIndex.value])==null?void 0:l.id,"aria-labelledby":(f=(c=headlessui_esm_v(e.labelRef))==null?void 0:c.id)!=null?f:(p=headlessui_esm_v(e.buttonRef))==null?void 0:p.id,id:o,ref:e.optionsRef,role:"listbox"},i=L(t,["hold"]);return x({props:{...i,...a},slot:d,attrs:n,slots:u,features:1|2,visible:s.value,name:"ComboboxOptions"})}}}),Gl=defineComponent({name:"ComboboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(t,{slots:n,attrs:u}){let e=ee("ComboboxOption"),o=`headlessui-combobox-option-${headlessui_esm_h()}`,r=runtime_core_esm_bundler_computed(()=>e.activeOptionIndex.value!==null?e.options.value[e.activeOptionIndex.value].id===o:!1),s=runtime_core_esm_bundler_computed(()=>toRaw(e.value.value)===toRaw(t.value)),d=runtime_core_esm_bundler_computed(()=>({disabled:t.disabled,value:t.value}));onMounted(()=>e.registerOption(o,d)),onUnmounted(()=>e.unregisterOption(o)),onMounted(()=>{watch([e.comboboxState,s],()=>{e.comboboxState.value===0&&(!s.value||e.goToOption(4,o))},{immediate:!0})}),watchEffect(()=>{e.comboboxState.value===0&&(!r.value||nextTick(()=>{var p,f;return(f=(p=document.getElementById(o))==null?void 0:p.scrollIntoView)==null?void 0:f.call(p,{block:"nearest"})}))});function a(p){if(t.disabled)return p.preventDefault();e.selectOption(o),e.closeCombobox(),nextTick(()=>{var f;return(f=headlessui_esm_v(e.inputRef))==null?void 0:f.focus({preventScroll:!0})})}function i(){if(t.disabled)return e.goToOption(5);e.goToOption(4,o)}function l(){t.disabled||r.value||e.goToOption(4,o)}function c(){t.disabled||!r.value||e.optionsPropsRef.value.hold||e.goToOption(5)}return()=>{let{disabled:p}=t,f={active:r.value,selected:s.value,disabled:p},b={id:o,role:"option",tabIndex:p===!0?void 0:-1,"aria-disabled":p===!0?!0:void 0,"aria-selected":s.value===!0?s.value:void 0,disabled:void 0,onClick:a,onFocus:i,onPointermove:l,onMousemove:l,onPointerleave:c,onMouseleave:c};return x({props:{...t,...b},slot:f,attrs:u,slots:n,name:"ComboboxOption"})}}});var Ke=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");function ae(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(Ke))}function mt(t,n=0){return t===document.body?!1:T(n,{[0](){return t.matches(Ke)},[1](){let u=t;for(;u!==null;){if(u.matches(Ke))return!0;u=u.parentElement}return!1}})}function te(t){t==null||t.focus({preventScroll:!0})}function O(t,n){let u=Array.isArray(t)?t.slice().sort((l,c)=>{let p=l.compareDocumentPosition(c);return p&Node.DOCUMENT_POSITION_FOLLOWING?-1:p&Node.DOCUMENT_POSITION_PRECEDING?1:0}):ae(t),e=document.activeElement,o=(()=>{if(n&(1|4))return 1;if(n&(2|8))return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),r=(()=>{if(n&1)return 0;if(n&2)return Math.max(0,u.indexOf(e))-1;if(n&4)return Math.max(0,u.indexOf(e))+1;if(n&8)return u.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=n&32?{preventScroll:!0}:{},d=0,a=u.length,i;do{if(d>=a||d+a<=0)return 0;let l=r+d;if(n&16)l=(l+a)%a;else{if(l<0)return 3;if(l>=a)return 1}i=u[l],i==null||i.focus(s),d+=o}while(i!==document.activeElement);return i.hasAttribute("tabindex")||i.setAttribute("tabindex","0"),2}function ie(t,n){for(let u of t)if(u.contains(n))return!0;return!1}function Re(t,n=reactivity_esm_bundler_ref(!0),u=reactivity_esm_bundler_ref({})){let e=reactivity_esm_bundler_ref(typeof window!="undefined"?document.activeElement:null),o=reactivity_esm_bundler_ref(null);function r(){if(!n.value||t.value.size!==1)return;let{initialFocus:d}=u.value,a=document.activeElement;if(d){if(d===a)return}else if(ie(t.value,a))return;if(e.value=a,d)te(d);else{let i=!1;for(let l of t.value)if(O(l,1)===2){i=!0;break}i||console.warn("There are no focusable elements inside the <FocusTrap />")}o.value=document.activeElement}function s(){te(e.value),e.value=null,o.value=null}watchEffect(r),onUpdated(()=>{n.value?r():s()}),onUnmounted(s),C("keydown",d=>{if(!!n.value&&d.key==="Tab"&&!!document.activeElement&&t.value.size===1){d.preventDefault();for(let a of t.value)if(O(a,(d.shiftKey?2:4)|16)===2){o.value=document.activeElement;break}}}),C("focus",d=>{if(!n.value||t.value.size!==1)return;let a=o.value;if(!a)return;let i=d.target;i&&i instanceof HTMLElement?ie(t.value,i)?(o.value=i,te(i)):(d.preventDefault(),d.stopPropagation(),te(a)):te(o.value)},!0)}var bt="body > *",oe=new Set,K=new Map;function gt(t){t.setAttribute("aria-hidden","true"),t.inert=!0}function xt(t){let n=K.get(t);!n||(n["aria-hidden"]===null?t.removeAttribute("aria-hidden"):t.setAttribute("aria-hidden",n["aria-hidden"]),t.inert=n.inert)}function yt(t,n=reactivity_esm_bundler_ref(!0)){watchEffect(u=>{if(!n.value||!t.value)return;let e=t.value;oe.add(e);for(let o of K.keys())o.contains(e)&&(xt(o),K.delete(o));document.querySelectorAll(bt).forEach(o=>{if(o instanceof HTMLElement){for(let r of oe)if(o.contains(r))return;oe.size===1&&(K.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),gt(o))}}),u(()=>{if(oe.delete(e),oe.size>0)document.querySelectorAll(bt).forEach(o=>{if(o instanceof HTMLElement&&!K.has(o)){for(let r of oe)if(o.contains(r))return;K.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),gt(o)}});else for(let o of K.keys())xt(o),K.delete(o)})})}var St=Symbol("StackContext");function ht(){return inject(St,()=>{})}function Rt(t){let n=ht();watchEffect(u=>{let e=t==null?void 0:t.value;!e||(n(0,e),u(()=>n(1,e)))})}function Te(t){let n=ht();function u(...e){t==null||t(...e),n(...e)}provide(St,u)}var Tt=Symbol("ForcePortalRootContext");function Ot(){return inject(Tt,!1)}var Ne=defineComponent({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(t,{slots:n,attrs:u}){return provide(Tt,t.force),()=>{let{force:e,...o}=t;return x({props:o,slot:{},slots:n,attrs:u,name:"ForcePortalRoot"})}}});function It(){let t=document.getElementById("headlessui-portal-root");if(t)return t;let n=document.createElement("div");return n.setAttribute("id","headlessui-portal-root"),document.body.appendChild(n)}var Pt=defineComponent({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:n,attrs:u}){let e=Ot(),o=inject(Dt,null),r=reactivity_esm_bundler_ref(e===!0||o===null?It():o.resolveTarget());watchEffect(()=>{e||o!==null&&(r.value=o.resolveTarget())});let s=reactivity_esm_bundler_ref(null);return Rt(s),onUnmounted(()=>{var a;let d=document.getElementById("headlessui-portal-root");!d||r.value===d&&r.value.children.length<=0&&((a=r.value.parentElement)==null||a.removeChild(r.value))}),Te(),()=>{if(r.value===null)return null;let d={ref:s};return h(Teleport,{to:r.value},x({props:{...t,...d},slot:{},attrs:u,slots:n,name:"Portal"}))}}}),Dt=Symbol("PortalGroupContext"),wt=defineComponent({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(t,{attrs:n,slots:u}){let e=reactive({resolveTarget(){return t.target}});return provide(Dt,e),()=>{let{target:o,...r}=t;return x({props:r,slot:{},attrs:n,slots:u,name:"PortalGroup"})}}});var Lt=Symbol("DescriptionContext");function Xo(){let t=inject(Lt,null);if(t===null)throw new Error("Missing parent");return t}function G({slot:t=reactivity_esm_bundler_ref({}),name:n="Description",props:u={}}={}){let e=reactivity_esm_bundler_ref([]);function o(r){return e.value.push(r),()=>{let s=e.value.indexOf(r);s!==-1&&e.value.splice(s,1)}}return provide(Lt,{register:o,slot:t,name:n,props:u}),runtime_core_esm_bundler_computed(()=>e.value.length>0?e.value.join(" "):void 0)}var ne=defineComponent({name:"Description",props:{as:{type:[Object,String],default:"p"}},setup(t,{attrs:n,slots:u}){let e=Xo(),o=`headlessui-description-${headlessui_esm_h()}`;return onMounted(()=>onUnmounted(e.register(o))),()=>{let{name:r="Description",slot:s=reactivity_esm_bundler_ref({}),props:d={}}=e,a=t,i={...Object.entries(d).reduce((l,[c,p])=>Object.assign(l,{[c]:unref(p)}),{}),id:o};return x({props:{...a,...i},slot:s.value,attrs:n,slots:u,name:r})}}});var kt=Symbol("DialogContext");function $e(t){let n=inject(kt,null);if(n===null){let u=new Error(`<${t} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,$e),u}return n}var Ee="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Gr=defineComponent({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:Ee},initialFocus:{type:Object,default:null}},emits:{close:t=>!0},setup(t,{emit:n,attrs:u,slots:e}){let o=reactivity_esm_bundler_ref(new Set),r=I(),s=runtime_core_esm_bundler_computed(()=>t.open===Ee&&r!==null?T(r.value,{[0]:!0,[1]:!1}):t.open);if(!(t.open!==Ee||r!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof s.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s.value===Ee?void 0:t.open}`);let a=runtime_core_esm_bundler_computed(()=>t.open?0:1),i=runtime_core_esm_bundler_computed(()=>r!==null?r.value===0:a.value===0),l=reactivity_esm_bundler_ref(null),c=reactivity_esm_bundler_ref(a.value===0);onUpdated(()=>{c.value=a.value===0});let p=`headlessui-dialog-${headlessui_esm_h()}`,f=runtime_core_esm_bundler_computed(()=>({initialFocus:t.initialFocus}));Re(o,c,f),yt(l,c),Te((y,R)=>T(y,{[0](){o.value.add(R)},[1](){o.value.delete(R)}}));let b=G({name:"DialogDescription",slot:runtime_core_esm_bundler_computed(()=>({open:s.value}))}),m=reactivity_esm_bundler_ref(null),g={titleId:m,dialogState:a,setTitleId(y){m.value!==y&&(m.value=y)},close(){n("close",!1)}};provide(kt,g),C("mousedown",y=>{let R=y.target;a.value===0&&o.value.size===1&&(ie(o.value,R)||(g.close(),nextTick(()=>R==null?void 0:R.focus())))}),C("keydown",y=>{y.key==="Escape"&&a.value===0&&(o.value.size>1||(y.preventDefault(),y.stopPropagation(),g.close()))}),watchEffect(y=>{if(a.value!==0)return;let R=document.documentElement.style.overflow,E=document.documentElement.style.paddingRight,D=window.innerWidth-document.documentElement.clientWidth;document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=`${D}px`,y(()=>{document.documentElement.style.overflow=R,document.documentElement.style.paddingRight=E})}),watchEffect(y=>{if(a.value!==0)return;let R=headlessui_esm_v(l);if(!R)return;let E=new IntersectionObserver(D=>{for(let w of D)w.boundingClientRect.x===0&&w.boundingClientRect.y===0&&w.boundingClientRect.width===0&&w.boundingClientRect.height===0&&g.close()});E.observe(R),y(()=>E.disconnect())});function S(y){y.stopPropagation()}return()=>{let y={...u,ref:l,id:p,role:"dialog","aria-modal":a.value===0?!0:void 0,"aria-labelledby":m.value,"aria-describedby":b.value,onClick:S},{open:R,initialFocus:E,...D}=t,w={open:a.value===0};return h(Ne,{force:!0},()=>h(Pt,()=>h(wt,{target:l.value},()=>h(Ne,{force:!1},()=>x({props:{...D,...y},slot:w,attrs:u,slots:e,visible:i.value,features:1|2,name:"Dialog"})))))}}}),_r=defineComponent({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"}},setup(t,{attrs:n,slots:u}){let e=$e("DialogOverlay"),o=`headlessui-dialog-overlay-${headlessui_esm_h()}`;function r(s){s.target===s.currentTarget&&(s.preventDefault(),s.stopPropagation(),e.close())}return()=>x({props:{...t,...{id:o,"aria-hidden":!0,onClick:r}},slot:{open:e.dialogState.value===0},attrs:n,slots:u,name:"DialogOverlay"})}}),qr=defineComponent({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"}},setup(t,{attrs:n,slots:u}){let e=$e("DialogTitle"),o=`headlessui-dialog-title-${headlessui_esm_h()}`;return onMounted(()=>{e.setTitleId(o),onUnmounted(()=>e.setTitleId(null))}),()=>x({props:{...t,...{id:o}},slot:{open:e.dialogState.value===0},attrs:n,slots:u,name:"DialogTitle"})}}),zr=ne;var At=Symbol("DisclosureContext");function qe(t){let n=inject(At,null);if(n===null){let u=new Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,qe),u}return n}var Ht=Symbol("DisclosurePanelContext");function an(){return inject(Ht,null)}var ra=defineComponent({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(t,{slots:n,attrs:u}){let e=`headlessui-disclosure-button-${headlessui_esm_h()}`,o=`headlessui-disclosure-panel-${headlessui_esm_h()}`,r=reactivity_esm_bundler_ref(t.defaultOpen?0:1),s=reactivity_esm_bundler_ref(null),d=reactivity_esm_bundler_ref(null),a={buttonId:e,panelId:o,disclosureState:r,panel:s,button:d,toggleDisclosure(){r.value=T(r.value,{[0]:1,[1]:0})},closeDisclosure(){r.value!==1&&(r.value=1)},close(i){a.closeDisclosure();let l=(()=>i?i instanceof HTMLElement?i:i.value instanceof HTMLElement?headlessui_esm_v(i):headlessui_esm_v(a.button):headlessui_esm_v(a.button))();l==null||l.focus()}};return provide(At,a),M(runtime_core_esm_bundler_computed(()=>T(r.value,{[0]:0,[1]:1}))),()=>{let{defaultOpen:i,...l}=t,c={open:r.value===0,close:a.close};return x({props:l,slot:c,slots:n,attrs:u,name:"Disclosure"})}}}),aa=defineComponent({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},setup(t,{attrs:n,slots:u}){let e=qe("DisclosureButton"),o=an(),r=o===null?!1:o===e.panelId,s=reactivity_esm_bundler_ref(null);r||watchEffect(()=>{e.button.value=s.value});let d=P(runtime_core_esm_bundler_computed(()=>({as:t.as,type:n.type})),s);function a(){var c;t.disabled||(r?(e.toggleDisclosure(),(c=headlessui_esm_v(e.button))==null||c.focus()):e.toggleDisclosure())}function i(c){var p;if(!t.disabled)if(r)switch(c.key){case" ":case"Enter":c.preventDefault(),c.stopPropagation(),e.toggleDisclosure(),(p=headlessui_esm_v(e.button))==null||p.focus();break}else switch(c.key){case" ":case"Enter":c.preventDefault(),c.stopPropagation(),e.toggleDisclosure();break}}function l(c){switch(c.key){case" ":c.preventDefault();break}}return()=>{let c={open:e.disclosureState.value===0},p=r?{ref:s,type:d.value,onClick:a,onKeydown:i}:{id:e.buttonId,ref:s,type:d.value,"aria-expanded":t.disabled?void 0:e.disclosureState.value===0,"aria-controls":headlessui_esm_v(e.panel)?e.panelId:void 0,disabled:t.disabled?!0:void 0,onClick:a,onKeydown:i,onKeyup:l};return x({props:{...t,...p},slot:c,attrs:n,slots:u,name:"DisclosureButton"})}}}),ia=defineComponent({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(t,{attrs:n,slots:u}){let e=qe("DisclosurePanel");provide(Ht,e.panelId);let o=I(),r=runtime_core_esm_bundler_computed(()=>o!==null?o.value===0:e.disclosureState.value===0);return()=>{let s={open:e.disclosureState.value===0,close:e.close},d={id:e.panelId,ref:e.panel};return x({props:{...t,...d},slot:s,attrs:n,slots:u,features:1|2,visible:r.value,name:"DisclosurePanel"})}}});var ca=defineComponent({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null}},setup(t,{attrs:n,slots:u}){let e=reactivity_esm_bundler_ref(new Set),o=reactivity_esm_bundler_ref(null),r=reactivity_esm_bundler_ref(!0),s=runtime_core_esm_bundler_computed(()=>({initialFocus:t.initialFocus}));return onMounted(()=>{!o.value||(e.value.add(o.value),Re(e,r,s))}),onUnmounted(()=>{r.value=!1}),()=>{let d={},a={ref:o},{initialFocus:i,...l}=t;return x({props:{...l,...a},slot:d,attrs:n,slots:u,name:"FocusTrap"})}}});function gn(t){requestAnimationFrame(()=>requestAnimationFrame(t))}var Kt=Symbol("ListboxContext");function pe(t){let n=inject(Kt,null);if(n===null){let u=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,pe),u}return n}var Ia=defineComponent({name:"Listbox",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean]}},setup(t,{slots:n,attrs:u,emit:e}){let o=reactivity_esm_bundler_ref(1),r=reactivity_esm_bundler_ref(null),s=reactivity_esm_bundler_ref(null),d=reactivity_esm_bundler_ref(null),a=reactivity_esm_bundler_ref([]),i=reactivity_esm_bundler_ref(""),l=reactivity_esm_bundler_ref(null),c=runtime_core_esm_bundler_computed(()=>t.modelValue),p={listboxState:o,value:c,orientation:runtime_core_esm_bundler_computed(()=>t.horizontal?"horizontal":"vertical"),labelRef:r,buttonRef:s,optionsRef:d,disabled:runtime_core_esm_bundler_computed(()=>t.disabled),options:a,searchQuery:i,activeOptionIndex:l,closeListbox(){t.disabled||o.value!==1&&(o.value=1,l.value=null)},openListbox(){t.disabled||o.value!==0&&(o.value=0)},goToOption(f,b){if(t.disabled||o.value===1)return;let m=J(f===4?{focus:4,id:b}:{focus:f},{resolveItems:()=>a.value,resolveActiveIndex:()=>l.value,resolveId:g=>g.id,resolveDisabled:g=>g.dataRef.disabled});i.value===""&&l.value===m||(i.value="",l.value=m)},search(f){if(t.disabled||o.value===1)return;let m=i.value!==""?0:1;i.value+=f.toLowerCase();let S=(l.value!==null?a.value.slice(l.value+m).concat(a.value.slice(0,l.value+m)):a.value).find(R=>R.dataRef.textValue.startsWith(i.value)&&!R.dataRef.disabled),y=S?a.value.indexOf(S):-1;y===-1||y===l.value||(l.value=y)},clearSearch(){t.disabled||o.value!==1&&i.value!==""&&(i.value="")},registerOption(f,b){var g,S;let m=Array.from((S=(g=d.value)==null?void 0:g.querySelectorAll('[id^="headlessui-listbox-option-"]'))!=null?S:[]).reduce((y,R,E)=>Object.assign(y,{[R.id]:E}),{});a.value=[...a.value,{id:f,dataRef:b}].sort((y,R)=>m[y.id]-m[R.id])},unregisterOption(f){let b=a.value.slice(),m=l.value!==null?b[l.value]:null,g=b.findIndex(S=>S.id===f);g!==-1&&b.splice(g,1),a.value=b,l.value=(()=>g===l.value||m===null?null:b.indexOf(m))()},select(f){t.disabled||e("update:modelValue",f)}};return C("mousedown",f=>{var g,S,y;let b=f.target,m=document.activeElement;o.value===0&&(((g=headlessui_esm_v(s))==null?void 0:g.contains(b))||(((S=headlessui_esm_v(d))==null?void 0:S.contains(b))||p.closeListbox(),!(m!==document.body&&(m==null?void 0:m.contains(b)))&&(f.defaultPrevented||(y=headlessui_esm_v(s))==null||y.focus({preventScroll:!0}))))}),provide(Kt,p),M(runtime_core_esm_bundler_computed(()=>T(o.value,{[0]:0,[1]:1}))),()=>{let f={open:o.value===0,disabled:t.disabled};return x({props:L(t,["modelValue","onUpdate:modelValue","disabled","horizontal"]),slot:f,slots:n,attrs:u,name:"Listbox"})}}}),Pa=defineComponent({name:"ListboxLabel",props:{as:{type:[Object,String],default:"label"}},setup(t,{attrs:n,slots:u}){let e=pe("ListboxLabel"),o=`headlessui-listbox-label-${headlessui_esm_h()}`;function r(){var s;(s=headlessui_esm_v(e.buttonRef))==null||s.focus({preventScroll:!0})}return()=>{let s={open:e.listboxState.value===0,disabled:e.disabled.value},d={id:o,ref:e.labelRef,onClick:r};return x({props:{...t,...d},slot:s,attrs:n,slots:u,name:"ListboxLabel"})}}}),Da=defineComponent({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"}},setup(t,{attrs:n,slots:u}){let e=pe("ListboxButton"),o=`headlessui-listbox-button-${headlessui_esm_h()}`;function r(i){switch(i.key){case" ":case"Enter":case"ArrowDown":i.preventDefault(),e.openListbox(),nextTick(()=>{var l;(l=headlessui_esm_v(e.optionsRef))==null||l.focus({preventScroll:!0}),e.value.value||e.goToOption(0)});break;case"ArrowUp":i.preventDefault(),e.openListbox(),nextTick(()=>{var l;(l=headlessui_esm_v(e.optionsRef))==null||l.focus({preventScroll:!0}),e.value.value||e.goToOption(3)});break}}function s(i){switch(i.key){case" ":i.preventDefault();break}}function d(i){e.disabled.value||(e.listboxState.value===0?(e.closeListbox(),nextTick(()=>{var l;return(l=headlessui_esm_v(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})})):(i.preventDefault(),e.openListbox(),gn(()=>{var l;return(l=headlessui_esm_v(e.optionsRef))==null?void 0:l.focus({preventScroll:!0})})))}let a=P(runtime_core_esm_bundler_computed(()=>({as:t.as,type:n.type})),e.buttonRef);return()=>{var c,p;let i={open:e.listboxState.value===0,disabled:e.disabled.value},l={ref:e.buttonRef,id:o,type:a.value,"aria-haspopup":!0,"aria-controls":(c=headlessui_esm_v(e.optionsRef))==null?void 0:c.id,"aria-expanded":e.disabled.value?void 0:e.listboxState.value===0,"aria-labelledby":e.labelRef.value?[(p=headlessui_esm_v(e.labelRef))==null?void 0:p.id,o].join(" "):void 0,disabled:e.disabled.value===!0?!0:void 0,onKeydown:r,onKeyup:s,onClick:d};return x({props:{...t,...l},slot:i,attrs:n,slots:u,name:"ListboxButton"})}}}),wa=defineComponent({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(t,{attrs:n,slots:u}){let e=pe("ListboxOptions"),o=`headlessui-listbox-options-${headlessui_esm_h()}`,r=reactivity_esm_bundler_ref(null);function s(i){switch(r.value&&clearTimeout(r.value),i.key){case" ":if(e.searchQuery.value!=="")return i.preventDefault(),i.stopPropagation(),e.search(i.key);case"Enter":if(i.preventDefault(),i.stopPropagation(),e.activeOptionIndex.value!==null){let{dataRef:l}=e.options.value[e.activeOptionIndex.value];e.select(l.value)}e.closeListbox(),nextTick(()=>{var l;return(l=headlessui_esm_v(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})});break;case T(e.orientation.value,{vertical:"ArrowDown",horizontal:"ArrowRight"}):return i.preventDefault(),i.stopPropagation(),e.goToOption(2);case T(e.orientation.value,{vertical:"ArrowUp",horizontal:"ArrowLeft"}):return i.preventDefault(),i.stopPropagation(),e.goToOption(1);case"Home":case"PageUp":return i.preventDefault(),i.stopPropagation(),e.goToOption(0);case"End":case"PageDown":return i.preventDefault(),i.stopPropagation(),e.goToOption(3);case"Escape":i.preventDefault(),i.stopPropagation(),e.closeListbox(),nextTick(()=>{var l;return(l=headlessui_esm_v(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})});break;case"Tab":i.preventDefault(),i.stopPropagation();break;default:i.key.length===1&&(e.search(i.key),r.value=setTimeout(()=>e.clearSearch(),350));break}}let d=I(),a=runtime_core_esm_bundler_computed(()=>d!==null?d.value===0:e.listboxState.value===0);return()=>{var p,f,b,m;let i={open:e.listboxState.value===0},l={"aria-activedescendant":e.activeOptionIndex.value===null||(p=e.options.value[e.activeOptionIndex.value])==null?void 0:p.id,"aria-labelledby":(m=(f=headlessui_esm_v(e.labelRef))==null?void 0:f.id)!=null?m:(b=headlessui_esm_v(e.buttonRef))==null?void 0:b.id,"aria-orientation":e.orientation.value,id:o,onKeydown:s,role:"listbox",tabIndex:0,ref:e.optionsRef};return x({props:{...t,...l},slot:i,attrs:n,slots:u,features:1|2,visible:a.value,name:"ListboxOptions"})}}}),La=defineComponent({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(t,{slots:n,attrs:u}){let e=pe("ListboxOption"),o=`headlessui-listbox-option-${headlessui_esm_h()}`,r=runtime_core_esm_bundler_computed(()=>e.activeOptionIndex.value!==null?e.options.value[e.activeOptionIndex.value].id===o:!1),s=runtime_core_esm_bundler_computed(()=>toRaw(e.value.value)===toRaw(t.value)),d=reactivity_esm_bundler_ref({disabled:t.disabled,value:t.value,textValue:""});onMounted(()=>{var f,b;let p=(b=(f=document.getElementById(o))==null?void 0:f.textContent)==null?void 0:b.toLowerCase().trim();p!==void 0&&(d.value.textValue=p)}),onMounted(()=>e.registerOption(o,d)),onUnmounted(()=>e.unregisterOption(o)),onMounted(()=>{watch([e.listboxState,s],()=>{var p,f;e.listboxState.value===0&&(!s.value||(e.goToOption(4,o),(f=(p=document.getElementById(o))==null?void 0:p.focus)==null||f.call(p)))},{immediate:!0})}),watchEffect(()=>{e.listboxState.value===0&&(!r.value||nextTick(()=>{var p,f;return(f=(p=document.getElementById(o))==null?void 0:p.scrollIntoView)==null?void 0:f.call(p,{block:"nearest"})}))});function a(p){if(t.disabled)return p.preventDefault();e.select(t.value),e.closeListbox(),nextTick(()=>{var f;return(f=headlessui_esm_v(e.buttonRef))==null?void 0:f.focus({preventScroll:!0})})}function i(){if(t.disabled)return e.goToOption(5);e.goToOption(4,o)}function l(){t.disabled||r.value||e.goToOption(4,o)}function c(){t.disabled||!r.value||e.goToOption(5)}return()=>{let{disabled:p}=t,f={active:r.value,selected:s.value,disabled:p},b={id:o,role:"option",tabIndex:p===!0?void 0:-1,"aria-disabled":p===!0?!0:void 0,"aria-selected":s.value===!0?s.value:void 0,disabled:void 0,onClick:a,onFocus:i,onPointermove:l,onMousemove:l,onPointerleave:c,onMouseleave:c};return x({props:{...t,...b},slot:f,attrs:u,slots:n,name:"ListboxOption"})}}});function Rn(t){requestAnimationFrame(()=>requestAnimationFrame(t))}var Nt=Symbol("MenuContext");function De(t){let n=inject(Nt,null);if(n===null){let u=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,De),u}return n}var Ga=defineComponent({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:n,attrs:u}){let e=reactivity_esm_bundler_ref(1),o=reactivity_esm_bundler_ref(null),r=reactivity_esm_bundler_ref(null),s=reactivity_esm_bundler_ref([]),d=reactivity_esm_bundler_ref(""),a=reactivity_esm_bundler_ref(null),i={menuState:e,buttonRef:o,itemsRef:r,items:s,searchQuery:d,activeItemIndex:a,closeMenu:()=>{e.value=1,a.value=null},openMenu:()=>e.value=0,goToItem(l,c){let p=J(l===4?{focus:4,id:c}:{focus:l},{resolveItems:()=>s.value,resolveActiveIndex:()=>a.value,resolveId:f=>f.id,resolveDisabled:f=>f.dataRef.disabled});d.value===""&&a.value===p||(d.value="",a.value=p)},search(l){let p=d.value!==""?0:1;d.value+=l.toLowerCase();let b=(a.value!==null?s.value.slice(a.value+p).concat(s.value.slice(0,a.value+p)):s.value).find(g=>g.dataRef.textValue.startsWith(d.value)&&!g.dataRef.disabled),m=b?s.value.indexOf(b):-1;m===-1||m===a.value||(a.value=m)},clearSearch(){d.value=""},registerItem(l,c){var f,b;let p=Array.from((b=(f=r.value)==null?void 0:f.querySelectorAll('[id^="headlessui-menu-item-"]'))!=null?b:[]).reduce((m,g,S)=>Object.assign(m,{[g.id]:S}),{});s.value=[...s.value,{id:l,dataRef:c}].sort((m,g)=>p[m.id]-p[g.id])},unregisterItem(l){let c=s.value.slice(),p=a.value!==null?c[a.value]:null,f=c.findIndex(b=>b.id===l);f!==-1&&c.splice(f,1),s.value=c,a.value=(()=>f===a.value||p===null?null:c.indexOf(p))()}};return C("mousedown",l=>{var f,b,m;let c=l.target,p=document.activeElement;e.value===0&&(((f=headlessui_esm_v(o))==null?void 0:f.contains(c))||(((b=headlessui_esm_v(r))==null?void 0:b.contains(c))||i.closeMenu(),!(p!==document.body&&(p==null?void 0:p.contains(c)))&&(l.defaultPrevented||(m=headlessui_esm_v(o))==null||m.focus({preventScroll:!0}))))}),provide(Nt,i),M(runtime_core_esm_bundler_computed(()=>T(e.value,{[0]:0,[1]:1}))),()=>{let l={open:e.value===0};return x({props:t,slot:l,slots:n,attrs:u,name:"Menu"})}}}),headlessui_esm_a=defineComponent({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"}},setup(t,{attrs:n,slots:u}){let e=De("MenuButton"),o=`headlessui-menu-button-${headlessui_esm_h()}`;function r(i){switch(i.key){case" ":case"Enter":case"ArrowDown":i.preventDefault(),i.stopPropagation(),e.openMenu(),nextTick(()=>{var l;(l=headlessui_esm_v(e.itemsRef))==null||l.focus({preventScroll:!0}),e.goToItem(0)});break;case"ArrowUp":i.preventDefault(),i.stopPropagation(),e.openMenu(),nextTick(()=>{var l;(l=headlessui_esm_v(e.itemsRef))==null||l.focus({preventScroll:!0}),e.goToItem(3)});break}}function s(i){switch(i.key){case" ":i.preventDefault();break}}function d(i){t.disabled||(e.menuState.value===0?(e.closeMenu(),nextTick(()=>{var l;return(l=headlessui_esm_v(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})})):(i.preventDefault(),i.stopPropagation(),e.openMenu(),Rn(()=>{var l;return(l=headlessui_esm_v(e.itemsRef))==null?void 0:l.focus({preventScroll:!0})})))}let a=P(runtime_core_esm_bundler_computed(()=>({as:t.as,type:n.type})),e.buttonRef);return()=>{var c;let i={open:e.menuState.value===0},l={ref:e.buttonRef,id:o,type:a.value,"aria-haspopup":!0,"aria-controls":(c=headlessui_esm_v(e.itemsRef))==null?void 0:c.id,"aria-expanded":t.disabled?void 0:e.menuState.value===0,onKeydown:r,onKeyup:s,onClick:d};return x({props:{...t,...l},slot:i,attrs:n,slots:u,name:"MenuButton"})}}}),qa=defineComponent({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(t,{attrs:n,slots:u}){let e=De("MenuItems"),o=`headlessui-menu-items-${headlessui_esm_h()}`,r=reactivity_esm_bundler_ref(null);Y({container:runtime_core_esm_bundler_computed(()=>headlessui_esm_v(e.itemsRef)),enabled:runtime_core_esm_bundler_computed(()=>e.menuState.value===0),accept(l){return l.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:l.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(l){l.setAttribute("role","none")}});function s(l){var c;switch(r.value&&clearTimeout(r.value),l.key){case" ":if(e.searchQuery.value!=="")return l.preventDefault(),l.stopPropagation(),e.search(l.key);case"Enter":if(l.preventDefault(),l.stopPropagation(),e.activeItemIndex.value!==null){let{id:p}=e.items.value[e.activeItemIndex.value];(c=document.getElementById(p))==null||c.click()}e.closeMenu(),nextTick(()=>{var p;return(p=headlessui_esm_v(e.buttonRef))==null?void 0:p.focus({preventScroll:!0})});break;case"ArrowDown":return l.preventDefault(),l.stopPropagation(),e.goToItem(2);case"ArrowUp":return l.preventDefault(),l.stopPropagation(),e.goToItem(1);case"Home":case"PageUp":return l.preventDefault(),l.stopPropagation(),e.goToItem(0);case"End":case"PageDown":return l.preventDefault(),l.stopPropagation(),e.goToItem(3);case"Escape":l.preventDefault(),l.stopPropagation(),e.closeMenu(),nextTick(()=>{var p;return(p=headlessui_esm_v(e.buttonRef))==null?void 0:p.focus({preventScroll:!0})});break;case"Tab":l.preventDefault(),l.stopPropagation();break;default:l.key.length===1&&(e.search(l.key),r.value=setTimeout(()=>e.clearSearch(),350));break}}function d(l){switch(l.key){case" ":l.preventDefault();break}}let a=I(),i=runtime_core_esm_bundler_computed(()=>a!==null?a.value===0:e.menuState.value===0);return()=>{var f,b;let l={open:e.menuState.value===0},c={"aria-activedescendant":e.activeItemIndex.value===null||(f=e.items.value[e.activeItemIndex.value])==null?void 0:f.id,"aria-labelledby":(b=headlessui_esm_v(e.buttonRef))==null?void 0:b.id,id:o,onKeydown:s,onKeyup:d,role:"menu",tabIndex:0,ref:e.itemsRef};return x({props:{...t,...c},slot:l,attrs:n,slots:u,features:1|2,visible:i.value,name:"MenuItems"})}}}),za=defineComponent({name:"MenuItem",props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1}},setup(t,{slots:n,attrs:u}){let e=De("MenuItem"),o=`headlessui-menu-item-${headlessui_esm_h()}`,r=runtime_core_esm_bundler_computed(()=>e.activeItemIndex.value!==null?e.items.value[e.activeItemIndex.value].id===o:!1),s=reactivity_esm_bundler_ref({disabled:t.disabled,textValue:""});onMounted(()=>{var p,f;let c=(f=(p=document.getElementById(o))==null?void 0:p.textContent)==null?void 0:f.toLowerCase().trim();c!==void 0&&(s.value.textValue=c)}),onMounted(()=>e.registerItem(o,s)),onUnmounted(()=>e.unregisterItem(o)),watchEffect(()=>{e.menuState.value===0&&(!r.value||nextTick(()=>{var c,p;return(p=(c=document.getElementById(o))==null?void 0:c.scrollIntoView)==null?void 0:p.call(c,{block:"nearest"})}))});function d(c){if(t.disabled)return c.preventDefault();e.closeMenu(),nextTick(()=>{var p;return(p=headlessui_esm_v(e.buttonRef))==null?void 0:p.focus({preventScroll:!0})})}function a(){if(t.disabled)return e.goToItem(5);e.goToItem(4,o)}function i(){t.disabled||r.value||e.goToItem(4,o)}function l(){t.disabled||!r.value||e.goToItem(5)}return()=>{let{disabled:c}=t,p={active:r.value,disabled:c};return x({props:{...t,...{id:o,role:"menuitem",tabIndex:c===!0?void 0:-1,"aria-disabled":c===!0?!0:void 0,onClick:d,onFocus:a,onPointermove:i,onMousemove:i,onPointerleave:l,onMouseleave:l}},slot:p,attrs:u,slots:n,name:"MenuItem"})}}});var Wt=Symbol("PopoverContext");function Le(t){let n=inject(Wt,null);if(n===null){let u=new Error(`<${t} /> is missing a parent <${Cn.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,Le),u}return n}var Ut=Symbol("PopoverGroupContext");function $t(){return inject(Ut,null)}var Gt=Symbol("PopoverPanelContext");function On(){return inject(Gt,null)}var Cn=defineComponent({name:"Popover",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:n,attrs:u}){let e=`headlessui-popover-button-${headlessui_esm_h()}`,o=`headlessui-popover-panel-${headlessui_esm_h()}`,r=reactivity_esm_bundler_ref(1),s=reactivity_esm_bundler_ref(null),d=reactivity_esm_bundler_ref(null),a={popoverState:r,buttonId:e,panelId:o,panel:d,button:s,togglePopover(){r.value=T(r.value,{[0]:1,[1]:0})},closePopover(){r.value!==1&&(r.value=1)},close(f){a.closePopover();let b=(()=>f?f instanceof HTMLElement?f:f.value instanceof HTMLElement?headlessui_esm_v(f):headlessui_esm_v(a.button):headlessui_esm_v(a.button))();b==null||b.focus()}};provide(Wt,a),M(runtime_core_esm_bundler_computed(()=>T(r.value,{[0]:0,[1]:1})));let i={buttonId:e,panelId:o,close(){a.closePopover()}},l=$t(),c=l==null?void 0:l.registerPopover;function p(){var f,b,m;return(m=l==null?void 0:l.isFocusWithinPopoverGroup())!=null?m:((f=headlessui_esm_v(s))==null?void 0:f.contains(document.activeElement))||((b=headlessui_esm_v(d))==null?void 0:b.contains(document.activeElement))}return watchEffect(()=>c==null?void 0:c(i)),C("focus",()=>{r.value===0&&(p()||!s||!d||a.closePopover())},!0),C("mousedown",f=>{var m,g,S;let b=f.target;r.value===0&&(((m=headlessui_esm_v(s))==null?void 0:m.contains(b))||((g=headlessui_esm_v(d))==null?void 0:g.contains(b))||(a.closePopover(),mt(b,1)||(f.preventDefault(),(S=headlessui_esm_v(s))==null||S.focus())))}),()=>{let f={open:r.value===0,close:a.close};return x({props:t,slot:f,slots:n,attrs:u,name:"Popover"})}}}),ui=defineComponent({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},setup(t,{attrs:n,slots:u}){let e=Le("PopoverButton"),o=$t(),r=o==null?void 0:o.closeOthers,s=On(),d=s===null?!1:s===e.panelId,a=reactivity_esm_bundler_ref(null),i=reactivity_esm_bundler_ref(typeof window=="undefined"?null:document.activeElement);C("focus",()=>{i.value=a.value,a.value=document.activeElement},!0);let l=reactivity_esm_bundler_ref(null);d||watchEffect(()=>{e.button.value=l.value});let c=P(runtime_core_esm_bundler_computed(()=>({as:t.as,type:n.type})),l);function p(m){var g,S,y,R;if(d){if(e.popoverState.value===1)return;switch(m.key){case" ":case"Enter":m.preventDefault(),m.stopPropagation(),e.closePopover(),(g=headlessui_esm_v(e.button))==null||g.focus();break}}else switch(m.key){case" ":case"Enter":m.preventDefault(),m.stopPropagation(),e.popoverState.value===1&&(r==null||r(e.buttonId)),e.togglePopover();break;case"Escape":if(e.popoverState.value!==0)return r==null?void 0:r(e.buttonId);if(!headlessui_esm_v(e.button)||!((S=headlessui_esm_v(e.button))==null?void 0:S.contains(document.activeElement)))return;m.preventDefault(),m.stopPropagation(),e.closePopover();break;case"Tab":if(e.popoverState.value!==0||!e.panel||!e.button)return;if(m.shiftKey){if(!i.value||((y=headlessui_esm_v(e.button))==null?void 0:y.contains(i.value))||((R=headlessui_esm_v(e.panel))==null?void 0:R.contains(i.value)))return;let E=ae(),D=E.indexOf(i.value);if(E.indexOf(headlessui_esm_v(e.button))>D)return;m.preventDefault(),m.stopPropagation(),O(headlessui_esm_v(e.panel),8)}else m.preventDefault(),m.stopPropagation(),O(headlessui_esm_v(e.panel),1);break}}function f(m){var g,S;if(!d&&(m.key===" "&&m.preventDefault(),e.popoverState.value===0&&!!e.panel&&!!e.button))switch(m.key){case"Tab":if(!i.value||((g=headlessui_esm_v(e.button))==null?void 0:g.contains(i.value))||((S=headlessui_esm_v(e.panel))==null?void 0:S.contains(i.value)))return;let y=ae(),R=y.indexOf(i.value);if(y.indexOf(headlessui_esm_v(e.button))>R)return;m.preventDefault(),m.stopPropagation(),O(headlessui_esm_v(e.panel),8);break}}function b(){var m,g;t.disabled||(d?(e.closePopover(),(m=headlessui_esm_v(e.button))==null||m.focus()):(e.popoverState.value===1&&(r==null||r(e.buttonId)),(g=headlessui_esm_v(e.button))==null||g.focus(),e.togglePopover()))}return()=>{let m={open:e.popoverState.value===0},g=d?{ref:l,type:c.value,onKeydown:p,onClick:b}:{ref:l,id:e.buttonId,type:c.value,"aria-expanded":t.disabled?void 0:e.popoverState.value===0,"aria-controls":headlessui_esm_v(e.panel)?e.panelId:void 0,disabled:t.disabled?!0:void 0,onKeydown:p,onKeyup:f,onClick:b};return x({props:{...t,...g},slot:m,attrs:n,slots:u,name:"PopoverButton"})}}}),si=defineComponent({name:"PopoverOverlay",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(t,{attrs:n,slots:u}){let e=Le("PopoverOverlay"),o=`headlessui-popover-overlay-${headlessui_esm_h()}`,r=I(),s=runtime_core_esm_bundler_computed(()=>r!==null?r.value===0:e.popoverState.value===0);function d(){e.closePopover()}return()=>{let a={open:e.popoverState.value===0};return x({props:{...t,...{id:o,"aria-hidden":!0,onClick:d}},slot:a,attrs:n,slots:u,features:1|2,visible:s.value,name:"PopoverOverlay"})}}}),pi=defineComponent({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1}},setup(t,{attrs:n,slots:u}){let{focus:e}=t,o=Le("PopoverPanel");provide(Gt,o.panelId),onUnmounted(()=>{o.panel.value=null}),watchEffect(()=>{var i;if(!e||o.popoverState.value!==0||!o.panel)return;let a=document.activeElement;((i=headlessui_esm_v(o.panel))==null?void 0:i.contains(a))||O(headlessui_esm_v(o.panel),1)}),C("keydown",a=>{var l,c;if(o.popoverState.value!==0||!headlessui_esm_v(o.panel)||a.key!=="Tab"||!document.activeElement||!((l=headlessui_esm_v(o.panel))==null?void 0:l.contains(document.activeElement)))return;a.preventDefault();let i=O(headlessui_esm_v(o.panel),a.shiftKey?2:4);if(i===3)return(c=headlessui_esm_v(o.button))==null?void 0:c.focus();if(i===1){if(!headlessui_esm_v(o.button))return;let p=ae(),f=p.indexOf(headlessui_esm_v(o.button)),b=p.splice(f+1).filter(m=>{var g;return!((g=headlessui_esm_v(o.panel))==null?void 0:g.contains(m))});O(b,1)===0&&O(document.body,1)}}),C("focus",()=>{var a;!e||o.popoverState.value===0&&(!headlessui_esm_v(o.panel)||((a=headlessui_esm_v(o.panel))==null?void 0:a.contains(document.activeElement))||o.closePopover())},!0);let r=I(),s=runtime_core_esm_bundler_computed(()=>r!==null?r.value===0:o.popoverState.value===0);function d(a){var i,l;switch(a.key){case"Escape":if(o.popoverState.value!==0||!headlessui_esm_v(o.panel)||!((i=headlessui_esm_v(o.panel))==null?void 0:i.contains(document.activeElement)))return;a.preventDefault(),a.stopPropagation(),o.closePopover(),(l=headlessui_esm_v(o.button))==null||l.focus();break}}return()=>{let a={open:o.popoverState.value===0,close:o.close},i={ref:o.panel,id:o.panelId,onKeydown:d};return x({props:{...t,...i},slot:a,attrs:n,slots:u,features:1|2,visible:s.value,name:"PopoverPanel"})}}}),di=defineComponent({name:"PopoverGroup",props:{as:{type:[Object,String],default:"div"}},setup(t,{attrs:n,slots:u}){let e=reactivity_esm_bundler_ref(null),o=reactivity_esm_bundler_ref([]);function r(i){let l=o.value.indexOf(i);l!==-1&&o.value.splice(l,1)}function s(i){return o.value.push(i),()=>{r(i)}}function d(){var l;let i=document.activeElement;return((l=headlessui_esm_v(e))==null?void 0:l.contains(i))?!0:o.value.some(c=>{var p,f;return((p=document.getElementById(c.buttonId))==null?void 0:p.contains(i))||((f=document.getElementById(c.panelId))==null?void 0:f.contains(i))})}function a(i){for(let l of o.value)l.buttonId!==i&&l.close()}return provide(Ut,{registerPopover:s,unregisterPopover:r,isFocusWithinPopoverGroup:d,closeOthers:a}),()=>x({props:{...t,...{ref:e}},slot:{},attrs:n,slots:u,name:"PopoverGroup"})}});var _t=Symbol("LabelContext");function qt(){let t=inject(_t,null);if(t===null){let n=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,qt),n}return t}function fe({slot:t={},name:n="Label",props:u={}}={}){let e=reactivity_esm_bundler_ref([]);function o(r){return e.value.push(r),()=>{let s=e.value.indexOf(r);s!==-1&&e.value.splice(s,1)}}return provide(_t,{register:o,slot:t,name:n,props:u}),runtime_core_esm_bundler_computed(()=>e.value.length>0?e.value.join(" "):void 0)}var Me=defineComponent({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1}},setup(t,{slots:n,attrs:u}){let e=qt(),o=`headlessui-label-${headlessui_esm_h()}`;return onMounted(()=>onUnmounted(e.register(o))),()=>{let{name:r="Label",slot:s={},props:d={}}=e,{passive:a,...i}=t,l={...Object.entries(d).reduce((p,[f,b])=>Object.assign(p,{[f]:unref(b)}),{}),id:o},c={...i,...l};return a&&delete c.onClick,x({props:c,slot:s,attrs:u,slots:n,name:r})}}});var Qt=Symbol("RadioGroupContext");function Jt(t){let n=inject(Qt,null);if(n===null){let u=new Error(`<${t} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,Jt),u}return n}var wi=defineComponent({name:"RadioGroup",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"div"},disabled:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean]}},setup(t,{emit:n,attrs:u,slots:e}){let o=reactivity_esm_bundler_ref(null),r=reactivity_esm_bundler_ref([]),s=fe({name:"RadioGroupLabel"}),d=G({name:"RadioGroupDescription"}),a=runtime_core_esm_bundler_computed(()=>t.modelValue),i={options:r,value:a,disabled:runtime_core_esm_bundler_computed(()=>t.disabled),firstOption:runtime_core_esm_bundler_computed(()=>r.value.find(p=>!p.propsRef.disabled)),containsCheckedOption:runtime_core_esm_bundler_computed(()=>r.value.some(p=>toRaw(p.propsRef.value)===toRaw(t.modelValue))),change(p){var b;if(t.disabled||a.value===p)return!1;let f=(b=r.value.find(m=>toRaw(m.propsRef.value)===toRaw(p)))==null?void 0:b.propsRef;return(f==null?void 0:f.disabled)?!1:(n("update:modelValue",p),!0)},registerOption(p){var b;let f=Array.from((b=o.value)==null?void 0:b.querySelectorAll('[id^="headlessui-radiogroup-option-"]')).reduce((m,g,S)=>Object.assign(m,{[g.id]:S}),{});r.value.push(p),r.value.sort((m,g)=>f[m.id]-f[g.id])},unregisterOption(p){let f=r.value.findIndex(b=>b.id===p);f!==-1&&r.value.splice(f,1)}};provide(Qt,i),Y({container:runtime_core_esm_bundler_computed(()=>headlessui_esm_v(o)),accept(p){return p.getAttribute("role")==="radio"?NodeFilter.FILTER_REJECT:p.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(p){p.setAttribute("role","none")}});function l(p){if(!o.value||!o.value.contains(p.target))return;let f=r.value.filter(b=>b.propsRef.disabled===!1).map(b=>b.element);switch(p.key){case"ArrowLeft":case"ArrowUp":if(p.preventDefault(),p.stopPropagation(),O(f,2|16)===2){let m=r.value.find(g=>g.element===document.activeElement);m&&i.change(m.propsRef.value)}break;case"ArrowRight":case"ArrowDown":if(p.preventDefault(),p.stopPropagation(),O(f,4|16)===2){let m=r.value.find(g=>g.element===document.activeElement);m&&i.change(m.propsRef.value)}break;case" ":{p.preventDefault(),p.stopPropagation();let b=r.value.find(m=>m.element===document.activeElement);b&&i.change(b.propsRef.value)}break}}let c=`headlessui-radiogroup-${headlessui_esm_h()}`;return()=>{let{modelValue:p,disabled:f,...b}=t,m={ref:o,id:c,role:"radiogroup","aria-labelledby":s.value,"aria-describedby":d.value,onKeydown:l};return x({props:{...b,...m},slot:{},attrs:u,slots:e,name:"RadioGroup"})}}});var Li=defineComponent({name:"RadioGroupOption",props:{as:{type:[Object,String],default:"div"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(t,{attrs:n,slots:u}){let e=Jt("RadioGroupOption"),o=`headlessui-radiogroup-option-${headlessui_esm_h()}`,r=fe({name:"RadioGroupLabel"}),s=G({name:"RadioGroupDescription"}),d=reactivity_esm_bundler_ref(null),a=runtime_core_esm_bundler_computed(()=>({value:t.value,disabled:t.disabled})),i=reactivity_esm_bundler_ref(1);onMounted(()=>e.registerOption({id:o,element:d,propsRef:a})),onUnmounted(()=>e.unregisterOption(o));let l=runtime_core_esm_bundler_computed(()=>{var S;return((S=e.firstOption.value)==null?void 0:S.id)===o}),c=runtime_core_esm_bundler_computed(()=>e.disabled.value||t.disabled),p=runtime_core_esm_bundler_computed(()=>toRaw(e.value.value)===toRaw(t.value)),f=runtime_core_esm_bundler_computed(()=>c.value?-1:p.value||!e.containsCheckedOption.value&&l.value?0:-1);function b(){var S;!e.change(t.value)||(i.value|=2,(S=d.value)==null||S.focus())}function m(){i.value|=2}function g(){i.value&=~2}return()=>{let S=L(t,["value","disabled"]),y={checked:p.value,disabled:c.value,active:Boolean(i.value&2)},R={id:o,ref:d,role:"radio","aria-checked":p.value?"true":"false","aria-labelledby":r.value,"aria-describedby":s.value,"aria-disabled":c.value?!0:void 0,tabIndex:f.value,onClick:c.value?void 0:b,onFocus:c.value?void 0:m,onBlur:c.value?void 0:g};return x({props:{...S,...R},slot:y,attrs:n,slots:u,name:"RadioGroupOption"})}}}),Mi=Me,ki=ne;var Zt=Symbol("GroupContext"),Ui=defineComponent({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:n,attrs:u}){let e=reactivity_esm_bundler_ref(null),o=fe({name:"SwitchLabel",props:{onClick(){!e.value||(e.value.click(),e.value.focus({preventScroll:!0}))}}}),r=G({name:"SwitchDescription"});return provide(Zt,{switchRef:e,labelledby:o,describedby:r}),()=>x({props:t,slot:{},slots:n,attrs:u,name:"SwitchGroup"})}}),$i=defineComponent({name:"Switch",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:!1}},setup(t,{emit:n,attrs:u,slots:e}){let o=inject(Zt,null),r=`headlessui-switch-${headlessui_esm_h()}`;function s(){n("update:modelValue",!t.modelValue)}let d=reactivity_esm_bundler_ref(null),a=o===null?d:o.switchRef,i=P(runtime_core_esm_bundler_computed(()=>({as:t.as,type:u.type})),a);function l(f){f.preventDefault(),s()}function c(f){f.key!=="Tab"&&f.preventDefault(),f.key===" "&&s()}function p(f){f.preventDefault()}return()=>{let f={checked:t.modelValue},b={id:r,ref:a,role:"switch",type:i.value,tabIndex:0,"aria-checked":t.modelValue,"aria-labelledby":o==null?void 0:o.labelledby.value,"aria-describedby":o==null?void 0:o.describedby.value,onClick:l,onKeyup:c,onKeypress:p};return x({props:{...t,...b},slot:f,attrs:u,slots:e,name:"Switch"})}}}),Gi=Me,_i=ne;var oo=Symbol("TabsContext");function ve(t){let n=inject(oo,null);if(n===null){let u=new Error(`<${t} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,ve),u}return n}var nu=defineComponent({name:"TabGroup",emits:{change:t=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},setup(t,{slots:n,attrs:u,emit:e}){let o=reactivity_esm_bundler_ref(null),r=reactivity_esm_bundler_ref([]),s=reactivity_esm_bundler_ref([]),d={selectedIndex:o,orientation:runtime_core_esm_bundler_computed(()=>t.vertical?"vertical":"horizontal"),activation:runtime_core_esm_bundler_computed(()=>t.manual?"manual":"auto"),tabs:r,panels:s,setSelectedIndex(a){o.value!==a&&(o.value=a,e("change",a))},registerTab(a){r.value.includes(a)||r.value.push(a)},unregisterTab(a){let i=r.value.indexOf(a);i!==-1&&r.value.splice(i,1)},registerPanel(a){s.value.includes(a)||s.value.push(a)},unregisterPanel(a){let i=s.value.indexOf(a);i!==-1&&s.value.splice(i,1)}};return provide(oo,d),watchEffect(()=>{var c;if(d.tabs.value.length<=0||t.selectedIndex===null&&o.value!==null)return;let a=d.tabs.value.map(p=>headlessui_esm_v(p)).filter(Boolean),i=a.filter(p=>!p.hasAttribute("disabled")),l=(c=t.selectedIndex)!=null?c:t.defaultIndex;if(l<0)o.value=a.indexOf(i[0]);else if(l>d.tabs.value.length)o.value=a.indexOf(i[i.length-1]);else{let p=a.slice(0,l),b=[...a.slice(l),...p].find(m=>i.includes(m));if(!b)return;o.value=a.indexOf(b)}}),()=>{let a={selectedIndex:o.value};return x({props:L(t,["selectedIndex","defaultIndex","manual","vertical","onChange"]),slot:a,slots:n,attrs:u,name:"TabGroup"})}}}),lu=defineComponent({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(t,{attrs:n,slots:u}){let e=ve("TabList");return()=>{let o={selectedIndex:e.selectedIndex.value},r={role:"tablist","aria-orientation":e.orientation.value};return x({props:{...t,...r},slot:o,attrs:n,slots:u,name:"TabList"})}}}),ru=defineComponent({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},setup(t,{attrs:n,slots:u}){let e=ve("Tab"),o=`headlessui-tabs-tab-${headlessui_esm_h()}`,r=reactivity_esm_bundler_ref();onMounted(()=>e.registerTab(r)),onUnmounted(()=>e.unregisterTab(r));let s=runtime_core_esm_bundler_computed(()=>e.tabs.value.indexOf(r)),d=runtime_core_esm_bundler_computed(()=>s.value===e.selectedIndex.value);function a(p){let f=e.tabs.value.map(b=>headlessui_esm_v(b)).filter(Boolean);if(p.key===" "||p.key==="Enter"){p.preventDefault(),p.stopPropagation(),e.setSelectedIndex(s.value);return}switch(p.key){case"Home":case"PageUp":return p.preventDefault(),p.stopPropagation(),O(f,1);case"End":case"PageDown":return p.preventDefault(),p.stopPropagation(),O(f,8)}return T(e.orientation.value,{vertical(){if(p.key==="ArrowUp")return O(f,2|16);if(p.key==="ArrowDown")return O(f,4|16)},horizontal(){if(p.key==="ArrowLeft")return O(f,2|16);if(p.key==="ArrowRight")return O(f,4|16)}})}function i(){var p;(p=headlessui_esm_v(r))==null||p.focus()}function l(){var p;t.disabled||((p=headlessui_esm_v(r))==null||p.focus(),e.setSelectedIndex(s.value))}let c=P(runtime_core_esm_bundler_computed(()=>({as:t.as,type:n.type})),r);return()=>{var b,m;let p={selected:d.value},f={ref:r,onKeydown:a,onFocus:e.activation.value==="manual"?i:l,onClick:l,id:o,role:"tab",type:c.value,"aria-controls":(m=(b=e.panels.value[s.value])==null?void 0:b.value)==null?void 0:m.id,"aria-selected":d.value,tabIndex:d.value?0:-1,disabled:t.disabled?!0:void 0};return x({props:{...t,...f},slot:p,attrs:n,slots:u,name:"Tab"})}}}),au=defineComponent({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:n,attrs:u}){let e=ve("TabPanels");return()=>{let o={selectedIndex:e.selectedIndex.value};return x({props:t,slot:o,attrs:u,slots:n,name:"TabPanels"})}}}),iu=defineComponent({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(t,{attrs:n,slots:u}){let e=ve("TabPanel"),o=`headlessui-tabs-panel-${headlessui_esm_h()}`,r=reactivity_esm_bundler_ref();onMounted(()=>e.registerPanel(r)),onUnmounted(()=>e.unregisterPanel(r));let s=runtime_core_esm_bundler_computed(()=>e.panels.value.indexOf(r)),d=runtime_core_esm_bundler_computed(()=>s.value===e.selectedIndex.value);return()=>{var l,c;let a={selected:d.value},i={ref:r,id:o,role:"tabpanel","aria-labelledby":(c=(l=e.tabs.value[s.value])==null?void 0:l.value)==null?void 0:c.id,tabIndex:d.value?0:-1};return x({props:{...t,...i},slot:a,attrs:n,slots:u,features:2|1,visible:d.value,name:"TabPanel"})}}});function no(t){let n={called:!1};return(...u)=>{if(!n.called)return n.called=!0,t(...u)}}function Ze(){let t=[],n=[],u={enqueue(e){n.push(e)},requestAnimationFrame(...e){let o=requestAnimationFrame(...e);u.add(()=>cancelAnimationFrame(o))},nextFrame(...e){u.requestAnimationFrame(()=>{u.requestAnimationFrame(...e)})},setTimeout(...e){let o=setTimeout(...e);u.add(()=>clearTimeout(o))},add(e){t.push(e)},dispose(){for(let e of t.splice(0))e()},async workQueue(){for(let e of n.splice(0))await e()}};return u}function et(t,...n){t&&n.length>0&&t.classList.add(...n)}function Fe(t,...n){t&&n.length>0&&t.classList.remove(...n)}function $n(t,n){let u=Ze();if(!t)return u.dispose;let{transitionDuration:e,transitionDelay:o}=getComputedStyle(t),[r,s]=[e,o].map(d=>{let[a=0]=d.split(",").filter(Boolean).map(i=>i.includes("ms")?parseFloat(i):parseFloat(i)*1e3).sort((i,l)=>l-i);return a});return r!==0?u.setTimeout(()=>n("finished"),r+s):n("finished"),u.add(()=>n("cancelled")),u.dispose}function tt(t,n,u,e,o,r){let s=Ze(),d=r!==void 0?no(r):()=>{};return Fe(t,...o),et(t,...n,...u),s.nextFrame(()=>{Fe(t,...u),et(t,...e),s.add($n(t,a=>(Fe(t,...e,...n),et(t,...o),d(a))))}),s.add(()=>Fe(t,...n,...u,...e,...o)),s.add(()=>d("cancelled")),s.dispose}function Q(t=""){return t.split(" ").filter(n=>n.trim().length>1)}var lt=Symbol("TransitionContext");function _n(){return inject(lt,null)!==null}function qn(){let t=inject(lt,null);if(t===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return t}function zn(){let t=inject(rt,null);if(t===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return t}var rt=Symbol("NestingContext");function He(t){return"children"in t?He(t.children):t.value.filter(({state:n})=>n==="visible").length>0}function io(t){let n=reactivity_esm_bundler_ref([]),u=reactivity_esm_bundler_ref(!1);onMounted(()=>u.value=!0),onUnmounted(()=>u.value=!1);function e(r,s=1){let d=n.value.findIndex(({id:a})=>a===r);d!==-1&&(T(s,{[0](){n.value.splice(d,1)},[1](){n.value[d].state="hidden"}}),!He(n)&&u.value&&(t==null||t()))}function o(r){let s=n.value.find(({id:d})=>d===r);return s?s.state!=="visible"&&(s.state="visible"):n.value.push({id:r,state:"visible"}),()=>e(r,0)}return{children:n,register:o,unregister:e}}var uo=1,Qn=defineComponent({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(t,{emit:n,attrs:u,slots:e}){if(!_n()&&it())return()=>h(Yn,{...t,onBeforeEnter:()=>n("beforeEnter"),onAfterEnter:()=>n("afterEnter"),onBeforeLeave:()=>n("beforeLeave"),onAfterLeave:()=>n("afterLeave")},e);let o=reactivity_esm_bundler_ref(null),r=reactivity_esm_bundler_ref("visible"),s=runtime_core_esm_bundler_computed(()=>t.unmount?0:1),{show:d,appear:a}=qn(),{register:i,unregister:l}=zn(),c={value:!0},p=headlessui_esm_h(),f={value:!1},b=io(()=>{f.value||(r.value="hidden",l(p),n("afterLeave"))});onMounted(()=>{let F=i(p);onUnmounted(F)}),watchEffect(()=>{if(s.value===1&&!!p){if(d&&r.value!=="visible"){r.value="visible";return}T(r.value,{hidden:()=>l(p),visible:()=>i(p)})}});let m=Q(t.enter),g=Q(t.enterFrom),S=Q(t.enterTo),y=Q(t.entered),R=Q(t.leave),E=Q(t.leaveFrom),D=Q(t.leaveTo);onMounted(()=>{watchEffect(()=>{if(r.value==="visible"){let F=headlessui_esm_v(o);if(F instanceof Comment&&F.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function w(F){let xe=c.value&&!a.value,U=headlessui_esm_v(o);!U||!(U instanceof HTMLElement)||xe||(f.value=!0,d.value&&n("beforeEnter"),d.value||n("beforeLeave"),F(d.value?tt(U,m,g,S,y,ye=>{f.value=!1,ye==="finished"&&n("afterEnter")}):tt(U,R,E,D,y,ye=>{f.value=!1,ye==="finished"&&(He(b)||(r.value="hidden",l(p),n("afterLeave")))})))}return onMounted(()=>{watch([d,a],(F,xe,U)=>{w(U),c.value=!1},{immediate:!0})}),provide(rt,b),M(runtime_core_esm_bundler_computed(()=>T(r.value,{visible:0,hidden:1}))),()=>{let{appear:F,show:xe,enter:U,enterFrom:ye,enterTo:Xn,entered:Zn,leave:el,leaveFrom:tl,leaveTo:ol,...so}=t;return x({props:{...so,...{ref:o}},slot:{},slots:e,attrs:u,features:uo,visible:r.value==="visible",name:"TransitionChild"})}}}),Jn=Qn,Yn=defineComponent({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(t,{emit:n,attrs:u,slots:e}){let o=I(),r=runtime_core_esm_bundler_computed(()=>t.show===null&&o!==null?T(o.value,{[0]:!0,[1]:!1}):t.show);watchEffect(()=>{if(![!0,!1].includes(r.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let s=reactivity_esm_bundler_ref(r.value?"visible":"hidden"),d=io(()=>{s.value="hidden"}),a={value:!0},i={show:r,appear:runtime_core_esm_bundler_computed(()=>t.appear||!a.value)};return onMounted(()=>{watchEffect(()=>{a.value=!1,r.value?s.value="visible":He(d)||(s.value="hidden")})}),provide(rt,d),provide(lt,i),()=>{let l=L(t,["show","appear","unmount"]),c={unmount:t.unmount};return x({props:{...c,as:"template"},slot:{},slots:{...e,default:()=>[h(Jn,{onBeforeEnter:()=>n("beforeEnter"),onAfterEnter:()=>n("afterEnter"),onBeforeLeave:()=>n("beforeLeave"),onAfterLeave:()=>n("afterLeave"),...u,...c,...l},e.default)]},attrs:{},features:uo,visible:s.value==="visible",name:"Transition"})}}});

// CONCATENATED MODULE: ./node_modules/@heroicons/vue/outline/esm/CheckIcon.js


function CheckIcon_render(_ctx, _cache) {
  return (openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M5 13l4 4L19 7"
    })
  ]))
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist??ref--15-0!./src/vue/components/Modal.vue?vue&type=script&lang=js



/* harmony default export */ var Modalvue_type_script_lang_js = ({
  components: {
    Dialog: Gr,
    DialogOverlay: _r,
    DialogTitle: qr,
    TransitionChild: Qn,
    TransitionRoot: Yn,
    CheckIcon: CheckIcon_render
  },
  emits: ['close'],
  props: {
    show: {
      "default": false
    },
    closeable: {
      "default": true
    }
  },
  watch: {
    show: {
      immediate: true,
      handler: function handler(show) {
        if (show) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = null;
        }
      }
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;

    var close = function close() {
      if (props.closeable) {
        emit('close');
      }
    };

    var closeOnEscape = function closeOnEscape(e) {
      if (e.key === 'Escape' && props.show) {
        close();
      }
    };

    onMounted(function () {
      return document.addEventListener('keydown', closeOnEscape);
    });
    onUnmounted(function () {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = null;
    });
    return {
      close: close
    };
  }
});
// CONCATENATED MODULE: ./src/vue/components/Modal.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/vue/components/Modal.vue





const Modal_exports_ = /*#__PURE__*/exportHelper_default()(Modalvue_type_script_lang_js, [['render',Modalvue_type_template_id_cb39d740_render]])

/* harmony default export */ var Modal = (Modal_exports_);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--15-0!./src/vue/components/Button.vue?vue&type=template&id=21e8db8e

function Buttonvue_type_template_id_21e8db8e_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    type: "button",
    "class": Object(shared_esm_bundler["J" /* normalizeClass */])([$props.primary ? 'dsw-bg-slate-600 hover:dsw-bg-slate-500 focus:dsw-ring-slate-500' : 'dsw-bg-slate-800 hover:dsw-bg-slate-700 focus:dsw-ring-slate-600', 'dsw-text-white dsw-inline-flex dsw-items-center dsw-px-6 dsw-py-3 dsw-border dsw-border-transparent dsw-text-base dsw-font-medium dsw-rounded-md dsw-shadow-sm focus:dsw-outline-none focus:dsw-ring-2 focus:dsw-ring-offset-2'])
  }, [renderSlot(_ctx.$slots, "text")], 2);
}
// CONCATENATED MODULE: ./src/vue/components/Button.vue?vue&type=template&id=21e8db8e

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist??ref--15-0!./src/vue/components/Button.vue?vue&type=script&lang=js
/* harmony default export */ var Buttonvue_type_script_lang_js = ({
  props: ['primary'],
  setup: function setup() {}
});
// CONCATENATED MODULE: ./src/vue/components/Button.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/vue/components/Button.vue





const Button_exports_ = /*#__PURE__*/exportHelper_default()(Buttonvue_type_script_lang_js, [['render',Buttonvue_type_template_id_21e8db8e_render]])

/* harmony default export */ var Button = (Button_exports_);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--15-0!./src/vue/components/Accordion.vue?vue&type=template&id=836dc228

var Accordionvue_type_template_id_836dc228_hoisted_1 = {
  "class": "dsw-w-full dsw-px-4"
};
var Accordionvue_type_template_id_836dc228_hoisted_2 = {
  "class": "dsw-w-full dsw-max-w-md dsw-p-2 dsw-mx-auto dsw-bg-white dsw-rounded-2xl"
};
function Accordionvue_type_template_id_836dc228_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ChevronUpIcon = resolveComponent("ChevronUpIcon");

  var _component_DisclosureButton = resolveComponent("DisclosureButton");

  var _component_DisclosurePanel = resolveComponent("DisclosurePanel");

  var _component_Disclosure = resolveComponent("Disclosure");

  return openBlock(), createElementBlock("div", Accordionvue_type_template_id_836dc228_hoisted_1, [createBaseVNode("div", Accordionvue_type_template_id_836dc228_hoisted_2, [createVNode(_component_Disclosure, null, {
    "default": withCtx(function (_ref) {
      var open = _ref.open;
      return [createVNode(_component_DisclosureButton, {
        "class": "dsw-flex dsw-items-center dsw-justify-between dsw-w-full dsw-px-4 dsw-py-2 dsw-text-sm dsw-font-medium dsw-text-left dsw-text-white dsw-bg-slate-800 dsw-rounded-lg hover:dsw-bg-slate-700 focus:dsw-outline-none focus-visible:ring focus-visible:dsw-ring-slate-600 focus-visible:dsw-ring-opacity-75"
      }, {
        "default": withCtx(function () {
          return [renderSlot(_ctx.$slots, "title"), createVNode(_component_ChevronUpIcon, {
            "class": Object(shared_esm_bundler["J" /* normalizeClass */])([open ? 'dsw-transform dsw-rotate-180' : '', "dsw-w-9 dsw-h-9 dsw-text-white"])
          }, null, 8, ["class"])];
        }),
        _: 2
      }, 1024), createVNode(Transition, {
        "enter-active-class": "dsw-transition dsw-duration-100 dsw-ease-out",
        "enter-from-class": "dsw-transform dsw-scale-95 dsw-opacity-0",
        "enter-to-class": "dsw-transform dsw-scale-100 dsw-opacity-100",
        "leave-active-class": "dsw-transition dsw-duration-75 dsw-ease-out",
        "leave-from-class": "dsw-transform dsw-scale-100 dsw-opacity-100",
        "leave-to-class": "dsw-transform dsw-scale-95 dsw-opacity-0"
      }, {
        "default": withCtx(function () {
          return [createVNode(_component_DisclosurePanel, {
            "class": "dsw-px-4 dsw-pt-4 dsw-pb-2 dsw-text-sm dsw-text-gray-500"
          }, {
            "default": withCtx(function () {
              return [renderSlot(_ctx.$slots, "content")];
            }),
            _: 3
          })];
        }),
        _: 3
      })];
    }),
    _: 3
  })])]);
}
// CONCATENATED MODULE: ./src/vue/components/Accordion.vue?vue&type=template&id=836dc228

// CONCATENATED MODULE: ./node_modules/@heroicons/vue/solid/esm/ChevronUpIcon.js


function ChevronUpIcon_render(_ctx, _cache) {
  return (openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createVNode("path", {
      "fill-rule": "evenodd",
      d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
      "clip-rule": "evenodd"
    })
  ]))
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist??ref--15-0!./src/vue/components/Accordion.vue?vue&type=script&lang=js


/* harmony default export */ var Accordionvue_type_script_lang_js = ({
  components: {
    Disclosure: ra,
    DisclosureButton: aa,
    DisclosurePanel: ia,
    ChevronUpIcon: ChevronUpIcon_render
  }
});
// CONCATENATED MODULE: ./src/vue/components/Accordion.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/vue/components/Accordion.vue





const Accordion_exports_ = /*#__PURE__*/exportHelper_default()(Accordionvue_type_script_lang_js, [['render',Accordionvue_type_template_id_836dc228_render]])

/* harmony default export */ var Accordion = (Accordion_exports_);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--15-0!./src/vue/components/DropDown.vue?vue&type=template&id=0c5a6fce

var DropDownvue_type_template_id_0c5a6fce_hoisted_1 = {
  "class": "dsw-mt-1 dsw-relative"
};
var DropDownvue_type_template_id_0c5a6fce_hoisted_2 = ["innerHTML"];
var DropDownvue_type_template_id_0c5a6fce_hoisted_3 = {
  "class": "dsw-absolute dsw-inset-y-0 dsw-right-0 dsw-flex dsw-items-center dsw-pr-2 dsw-pointer-events-none"
};
var DropDownvue_type_template_id_0c5a6fce_hoisted_4 = ["innerHTML"];
function DropDownvue_type_template_id_0c5a6fce_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ListboxLabel = resolveComponent("ListboxLabel");

  var _component_SelectorIcon = resolveComponent("SelectorIcon");

  var _component_ListboxButton = resolveComponent("ListboxButton");

  var _component_CheckIcon = resolveComponent("CheckIcon");

  var _component_ListboxOption = resolveComponent("ListboxOption");

  var _component_ListboxOptions = resolveComponent("ListboxOptions");

  var _component_Listbox = resolveComponent("Listbox");

  return $data.wooCommerceCategories ? (openBlock(), createBlock(_component_Listbox, {
    key: 0,
    as: "div",
    modelValue: $data.selected,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.selected = $event;
    }),
    "class": "dsw-mt-5"
  }, {
    "default": withCtx(function () {
      return [createVNode(_component_ListboxLabel, {
        "class": "dsw-block dsw-text-sm dsw-font-medium dsw-text-gray-700"
      }, {
        "default": withCtx(function () {
          return [renderSlot(_ctx.$slots, "label")];
        }),
        _: 3
      }), createBaseVNode("div", DropDownvue_type_template_id_0c5a6fce_hoisted_1, [createVNode(_component_ListboxButton, {
        "class": "dsw-relative dsw-w-full dsw-bg-white dsw-border dsw-border-gray-300 dsw-rounded-md dsw-shadow-sm dsw-pl-3 dsw-pr-10 dsw-py-2 dsw-text-left dsw-cursor-default focus:dsw-outline-none focus:dsw-ring-1 focus:dsw-ring-slate-500 focus:dsw-border-slate-500 sm:dsw-text-sm"
      }, {
        "default": withCtx(function () {
          return [$data.selected ? (openBlock(), createElementBlock("span", {
            key: 0,
            "class": "dsw-block dsw-truncate",
            innerHTML: $data.selected.name
          }, null, 8, DropDownvue_type_template_id_0c5a6fce_hoisted_2)) : createCommentVNode("", true), createBaseVNode("span", DropDownvue_type_template_id_0c5a6fce_hoisted_3, [createVNode(_component_SelectorIcon, {
            "class": "dsw-h-5 dsw-w-5 dsw-text-gray-400",
            "aria-hidden": "true"
          })])];
        }),
        _: 1
      }), createVNode(Transition, {
        "leave-active-class": "dsw-transition dsw-ease-in dsw-duration-100",
        "leave-from-class": "dsw-opacity-100",
        "leave-to-class": "dsw-opacity-0"
      }, {
        "default": withCtx(function () {
          return [createVNode(_component_ListboxOptions, {
            "class": "dsw-absolute dsw-z-10 dsw-mt-1 dsw-w-full dsw-bg-white dsw-shadow-lg dsw-max-h-60 dsw-rounded-md dsw-py-1 dsw-text-base dsw-ring-1 dsw-ring-black dsw-ring-opacity-5 dsw-overflow-auto focus:dsw-outline-none sm:dsw-text-sm"
          }, {
            "default": withCtx(function () {
              return [(openBlock(true), createElementBlock(Fragment, null, renderList($data.wooCommerceCategories, function (item, itemIndex) {
                return openBlock(), createBlock(_component_ListboxOption, {
                  as: "template",
                  key: itemIndex,
                  value: item
                }, {
                  "default": withCtx(function (_ref) {
                    var active = _ref.active,
                        selected = _ref.selected;
                    return [createBaseVNode("li", {
                      "class": Object(shared_esm_bundler["J" /* normalizeClass */])([active ? 'dsw-text-white dsw-bg-slate-600' : 'dsw-text-gray-900', 'dsw-cursor-default dsw-select-none dsw-relative dsw-py-2 dsw-pl-8 dsw-pr-4'])
                    }, [createBaseVNode("span", {
                      "class": Object(shared_esm_bundler["J" /* normalizeClass */])([selected ? 'dsw-font-semibold' : 'dsw-font-normal', 'dsw-block dsw-truncate']),
                      innerHTML: item.name
                    }, null, 10, DropDownvue_type_template_id_0c5a6fce_hoisted_4), selected ? (openBlock(), createElementBlock("span", {
                      key: 0,
                      "class": Object(shared_esm_bundler["J" /* normalizeClass */])([active ? 'dsw-text-white' : 'dsw-text-slate-600', 'dsw-absolute dsw-inset-y-0 dsw-left-0 dsw-flex dsw-items-center dsw-pl-1.5'])
                    }, [createVNode(_component_CheckIcon, {
                      "class": "dsw-h-5 dsw-w-5",
                      "aria-hidden": "true"
                    })], 2)) : createCommentVNode("", true)], 2)];
                  }),
                  _: 2
                }, 1032, ["value"]);
              }), 128))];
            }),
            _: 1
          })];
        }),
        _: 1
      })])];
    }),
    _: 3
  }, 8, ["modelValue"])) : createCommentVNode("", true);
}
// CONCATENATED MODULE: ./src/vue/components/DropDown.vue?vue&type=template&id=0c5a6fce

// CONCATENATED MODULE: ./node_modules/@heroicons/vue/solid/esm/CheckIcon.js


function esm_CheckIcon_render(_ctx, _cache) {
  return (openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createVNode("path", {
      "fill-rule": "evenodd",
      d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
      "clip-rule": "evenodd"
    })
  ]))
}
// CONCATENATED MODULE: ./node_modules/@heroicons/vue/solid/esm/SelectorIcon.js


function SelectorIcon_render(_ctx, _cache) {
  return (openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createVNode("path", {
      "fill-rule": "evenodd",
      d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
      "clip-rule": "evenodd"
    })
  ]))
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist??ref--15-0!./src/vue/components/DropDown.vue?vue&type=script&lang=js



/* harmony default export */ var DropDownvue_type_script_lang_js = ({
  components: {
    Listbox: Ia,
    ListboxButton: Da,
    ListboxLabel: Pa,
    ListboxOption: La,
    ListboxOptions: wa,
    CheckIcon: esm_CheckIcon_render,
    SelectorIcon: SelectorIcon_render
  },
  props: {
    syncID: {
      type: Number,
      "default": ''
    }
  },
  data: function data() {
    return {
      selected: [],
      wooCommerceCategories: []
    };
  },
  setup: function setup() {},
  created: function created() {
    var _this = this;

    axios_default.a.get('/wp-json/dswaves/v1/get_woo_categories').then(function (response) {
      _this.wooCommerceCategories = response.data;
      _this.selected = response.data[0];
    })["catch"](function (error) {
      console.log(error);
    });
  },
  watch: {
    selected: function selected(newValue) {
      this.$emit('selected', {
        selected: newValue,
        syndID: this.syncID
      });
    }
  }
});
// CONCATENATED MODULE: ./src/vue/components/DropDown.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/vue/components/DropDown.vue





const DropDown_exports_ = /*#__PURE__*/exportHelper_default()(DropDownvue_type_script_lang_js, [['render',DropDownvue_type_template_id_0c5a6fce_render]])

/* harmony default export */ var DropDown = (DropDown_exports_);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--15-0!./src/vue/components/Notification.vue?vue&type=template&id=f5a5792a

var Notificationvue_type_template_id_f5a5792a_hoisted_1 = {
  "aria-live": "assertive",
  "class": "dsw-z-50 dsw-fixed dsw-inset-0 dsw-flex dsw-items-end dsw-px-4 dsw-py-6 dsw-pointer-events-none sm:dsw-p-6 sm:dsw-items-start"
};
var Notificationvue_type_template_id_f5a5792a_hoisted_2 = {
  "class": "dsw-w-full dsw-flex dsw-flex-col dsw-items-center dsw-space-y-4 sm:dsw-items-end"
};
var Notificationvue_type_template_id_f5a5792a_hoisted_3 = {
  key: 0,
  "class": "dsw-max-w-sm dsw-w-full dsw-bg-white dsw-shadow-lg dsw-rounded-lg dsw-pointer-events-auto dsw-ring-1 dsw-ring-black dsw-ring-opacity-5 dsw-overflow-hidden"
};
var Notificationvue_type_template_id_f5a5792a_hoisted_4 = {
  "class": "dsw-p-4"
};
var Notificationvue_type_template_id_f5a5792a_hoisted_5 = {
  "class": "dsw-flex dsw-items-center"
};
var Notificationvue_type_template_id_f5a5792a_hoisted_6 = {
  "class": "dsw-flex-shrink-0"
};
var Notificationvue_type_template_id_f5a5792a_hoisted_7 = {
  "class": "dsw-ml-3 w-0 dsw-flex-1 dsw-pt-0.5"
};
var Notificationvue_type_template_id_f5a5792a_hoisted_8 = {
  "class": "dsw-text-sm dsw-font-medium dsw-text-gray-900"
};
var Notificationvue_type_template_id_f5a5792a_hoisted_9 = {
  "class": "dsw-ml-4 dsw-flex-shrink-0 dsw-flex"
};

var Notificationvue_type_template_id_f5a5792a_hoisted_10 = /*#__PURE__*/createBaseVNode("span", {
  "class": "dsw-sr-only"
}, "Close", -1);

function Notificationvue_type_template_id_f5a5792a_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CheckCircleIcon = resolveComponent("CheckCircleIcon");

  var _component_XIcon = resolveComponent("XIcon");

  return openBlock(), createElementBlock("div", Notificationvue_type_template_id_f5a5792a_hoisted_1, [createBaseVNode("div", Notificationvue_type_template_id_f5a5792a_hoisted_2, [createVNode(Transition, {
    "enter-active-class": "dsw-transform dsw-ease-out dsw-duration-300 dsw-transition",
    "enter-from-class": "dsw-translate-y-2 dsw-opacity-0 sm:dsw-translate-y-0 sm:dsw-translate-x-2",
    "enter-to-class": "dsw-translate-y-0 dsw-opacity-100 sm:dsw-translate-x-0",
    "leave-active-class": "dsw-transition dsw-ease-in dsw-duration-100",
    "leave-from-class": "dsw-opacity-100",
    "leave-to-class": "dsw-opacity-0"
  }, {
    "default": withCtx(function () {
      return [$props.success ? (openBlock(), createElementBlock("div", Notificationvue_type_template_id_f5a5792a_hoisted_3, [createBaseVNode("div", Notificationvue_type_template_id_f5a5792a_hoisted_4, [createBaseVNode("div", Notificationvue_type_template_id_f5a5792a_hoisted_5, [createBaseVNode("div", Notificationvue_type_template_id_f5a5792a_hoisted_6, [createVNode(_component_CheckCircleIcon, {
        "class": "dsw-h-6 dsw-w-6 dsw-text-emerald-500",
        "aria-hidden": "true"
      })]), createBaseVNode("div", Notificationvue_type_template_id_f5a5792a_hoisted_7, [createBaseVNode("p", Notificationvue_type_template_id_f5a5792a_hoisted_8, [renderSlot(_ctx.$slots, "message")])]), createBaseVNode("div", Notificationvue_type_template_id_f5a5792a_hoisted_9, [createBaseVNode("button", {
        onClick: _cache[0] || (_cache[0] = function () {
          return $options.emitSuccess && $options.emitSuccess.apply($options, arguments);
        }),
        "class": "dsw-bg-white dsw-rounded-md dsw-inline-flex dsw-text-gray-400 hover:dsw-text-gray-500 focus:dsw-outline-none focus:dsw-ring-2 focus:dsw-ring-offset-2 focus:dsw-ring-slate-500"
      }, [Notificationvue_type_template_id_f5a5792a_hoisted_10, createVNode(_component_XIcon, {
        "class": "dsw-h-5 dsw-w-5",
        "aria-hidden": "true"
      })])])])])])) : createCommentVNode("", true)];
    }),
    _: 3
  })])]);
}
// CONCATENATED MODULE: ./src/vue/components/Notification.vue?vue&type=template&id=f5a5792a

// CONCATENATED MODULE: ./node_modules/@heroicons/vue/outline/esm/CheckCircleIcon.js


function CheckCircleIcon_render(_ctx, _cache) {
  return (openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]))
}
// CONCATENATED MODULE: ./node_modules/@heroicons/vue/solid/esm/XIcon.js


function XIcon_render(_ctx, _cache) {
  return (openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createVNode("path", {
      "fill-rule": "evenodd",
      d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
      "clip-rule": "evenodd"
    })
  ]))
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist??ref--15-0!./src/vue/components/Notification.vue?vue&type=script&lang=js


/* harmony default export */ var Notificationvue_type_script_lang_js = ({
  components: {
    CheckCircleIcon: CheckCircleIcon_render,
    XIcon: XIcon_render
  },
  props: {
    success: {
      type: Boolean,
      "default": false
    }
  },
  setup: function setup() {},
  methods: {
    //emit the success message to the parent component
    emitSuccess: function emitSuccess() {
      this.$emit('success', 'success');
    }
  }
});
// CONCATENATED MODULE: ./src/vue/components/Notification.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/vue/components/Notification.vue





const Notification_exports_ = /*#__PURE__*/exportHelper_default()(Notificationvue_type_script_lang_js, [['render',Notificationvue_type_template_id_f5a5792a_render]])

/* harmony default export */ var Notification = (Notification_exports_);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--15-0!./src/vue/components/Switch.vue?vue&type=template&id=16b3c7da

var Switchvue_type_template_id_16b3c7da_hoisted_1 = {
  "class": "dsw-flex-grow dsw-flex dsw-flex-col"
};
var Switchvue_type_template_id_16b3c7da_hoisted_2 = {
  key: 0,
  "class": "dsw-p-3 dsw-py-3 dsw-text-left"
};
function Switchvue_type_template_id_16b3c7da_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SwitchLabel = resolveComponent("SwitchLabel");

  var _component_Switch = resolveComponent("Switch", true);

  var _component_SwitchGroup = resolveComponent("SwitchGroup");

  return openBlock(), createElementBlock(Fragment, null, [createVNode(_component_SwitchGroup, {
    as: "div",
    "class": "dsw-flex dsw-items-center dsw-justify-between"
  }, {
    "default": withCtx(function () {
      return [createBaseVNode("span", Switchvue_type_template_id_16b3c7da_hoisted_1, [createVNode(_component_SwitchLabel, {
        as: "span",
        "class": "dsw-text-left dsw-p-2 dsw-text-sm dsw-font-medium dsw-text-gray-900",
        passive: ""
      }, {
        "default": withCtx(function () {
          return [renderSlot(_ctx.$slots, "label")];
        }),
        _: 3
      })]), createVNode(_component_Switch, {
        modelValue: $setup.enabled,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.enabled = $event;
        }),
        "class": Object(shared_esm_bundler["J" /* normalizeClass */])([$setup.enabled ? 'dsw-bg-green-600' : 'dsw-bg-gray-200', 'dsw-relative dsw-inline-flex dsw-flex-shrink-0 dsw-h-6 dsw-w-11 dsw-border-2 dsw-border-transparent dsw-rounded-full dsw-cursor-pointer dsw-transition-colors dsw-ease-in-out dsw-duration-200 focus:dsw-outline-none focus:dsw-ring-2 focus:dsw-ring-offset-2 focus:dsw-ring-slate-500'])
      }, {
        "default": withCtx(function () {
          return [createBaseVNode("span", {
            "aria-hidden": "true",
            "class": Object(shared_esm_bundler["J" /* normalizeClass */])([$setup.enabled ? 'dsw-translate-x-5' : 'dsw-translate-x-0', 'dsw-pointer-events-none dsw-inline-block dsw-h-5 dsw-w-5 dsw-rounded-full dsw-bg-white dsw-shadow dsw-transform dsw-ring-0 dsw-transition dsw-ease-in-out dsw-duration-200'])
          }, null, 2)];
        }),
        _: 1
      }, 8, ["modelValue", "class"])];
    }),
    _: 3
  }), $setup.enabled ? (openBlock(), createElementBlock("div", Switchvue_type_template_id_16b3c7da_hoisted_2, [renderSlot(_ctx.$slots, "content")])) : createCommentVNode("", true)], 64);
}
// CONCATENATED MODULE: ./src/vue/components/Switch.vue?vue&type=template&id=16b3c7da

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist??ref--15-0!./src/vue/components/Switch.vue?vue&type=script&lang=js


/* harmony default export */ var Switchvue_type_script_lang_js = ({
  components: {
    Switch: $i,
    SwitchDescription: _i,
    SwitchGroup: Ui,
    SwitchLabel: Gi
  },
  setup: function setup() {
    var enabled = reactivity_esm_bundler_ref(false);
    return {
      enabled: enabled
    };
  }
});
// CONCATENATED MODULE: ./src/vue/components/Switch.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/vue/components/Switch.vue





const Switch_exports_ = /*#__PURE__*/exportHelper_default()(Switchvue_type_script_lang_js, [['render',Switchvue_type_template_id_16b3c7da_render]])

/* harmony default export */ var Switch = (Switch_exports_);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist??ref--15-0!./src/vue/pages/Brand.vue?vue&type=script&lang=js
var _components;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










/* harmony default export */ var Brandvue_type_script_lang_js = ({
  components: (_components = {
    Modal: Modal,
    Button: Button,
    Accordion: Accordion,
    Switch: $i,
    DropDown: DropDown,
    Notification: Notification
  }, _defineProperty(_components, "Switch", $i), _defineProperty(_components, "Pagination", Pagination), _defineProperty(_components, "Switcher", Switch), _components),
  props: ['id'],
  data: function data() {
    return {
      brand: null,
      expander_id: 1,
      selection: [],
      wooCommerceCategories: [],
      show: false,
      success: false,
      contentStats: {
        total_count: 0,
        product_count: 0,
        page_count: 0,
        post_count: 0,
        article_count: 0
      },
      product_search_terms: null,
      product_search_results: [],
      page_search_terms: null,
      page_search_results: [],
      post_search_terms: null,
      post_search_results: [],
      article_search_terms: null,
      article_search_results: [],
      product_pagination: {
        current_page_first_index: 0,
        current_page_last_index: 0,
        total_results_count: 0,
        current_page: 0,
        total_pages: 0,
        items_per_page: 100
      },
      page_pagination: {
        current_page_first_index: 0,
        current_page_last_index: 0,
        total_results_count: 0,
        current_page: 0,
        total_pages: 0,
        items_per_page: 100
      },
      post_pagination: {
        current_page_first_index: 0,
        current_page_last_index: 0,
        total_results_count: 0,
        current_page: 0,
        total_pages: 0,
        items_per_page: 100
      },
      article_pagination: {
        current_page_first_index: 0,
        current_page_last_index: 0,
        total_results_count: 0,
        current_page: 0,
        total_pages: 0,
        items_per_page: 100
      },
      old_brand: null,
      // used to check number changes
      number_of_changes: 0,
      queued_sync_count: 0,
      syncCountIntervalHandle: null,
      currently_saving: false
    };
  },
  created: function created() {
    var _this = this;

    axios_default.a.get('/wp-json/dswaves/v1/get_sync_brand', {
      params: {
        id: this.id
      }
    }).then(function (response) {
      _this.brand = response.data.data;

      _this.productHandleClick(1);

      _this.pageHandleClick(1);

      _this.postHandleClick(1);

      _this.articleHandleClick(1);

      _this.old_brand = JSON.parse(JSON.stringify(_this.brand));
      var self = _this;
      self.setSyndicationQueueCount();
      _this.syncCountIntervalHandle = setInterval(function () {
        self.setSyndicationQueueCount();
      }, 5000);
    })["catch"](function (error) {
      console.log(error);
    });
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    clearInterval(this.syncCountIntervalHandle);
    next();
  },
  watch: {
    "brand": {
      deep: true,
      handler: function handler(value) {
        this.setContentCount('product_count', this.brand.settings.enable_products, this.brand.settings.enable_all_products, this.brand.products);
        this.setContentCount('post_count', this.brand.settings.enable_posts, this.brand.settings.enable_all_posts, this.brand.posts);
        this.setContentCount('page_count', this.brand.settings.enable_pages, this.brand.settings.enable_all_pages, this.brand.pages);
        this.setContentCount('article_count', this.brand.settings.enable_articles, this.brand.settings.enable_all_articles, this.brand.knowledgebase_articles);
        this.contentStats.total_count = 0;
        if (this.brand.settings.enable_products) this.contentStats.total_count += this.contentStats.product_count;
        if (this.brand.settings.enable_pages) this.contentStats.total_count += this.contentStats.page_count;
        if (this.brand.settings.enable_posts) this.contentStats.total_count += this.contentStats.post_count;
        if (this.brand.settings.enable_articles) this.contentStats.total_count += this.contentStats.article_count; // number of changes

        var changeCounter = 0;

        var equals = function equals(a, b) {
          return JSON.stringify(a) === JSON.stringify(b);
        };

        var app = this;
        Object.keys(app.brand.settings).forEach(function (key, index) {
          if (app.old_brand.settings[key]) app.old_brand.settings[key] = 1;else app.old_brand.settings[key] = 0;
          if (app.brand.settings[key]) app.brand.settings[key] = 1;else app.brand.settings[key] = 0;
          var isSame = equals(app.old_brand.settings[key], app.brand.settings[key]);
          if (!isSame) changeCounter++;
        });
        Object.keys(app.brand.pages).forEach(function (key, index) {
          var isSame = equals(app.old_brand.pages[key].enabled, app.brand.pages[key].enabled);
          if (!isSame) changeCounter++;
        });
        Object.keys(app.brand.knowledgebase_articles).forEach(function (key, index) {
          var isSame = equals(app.old_brand.knowledgebase_articles[key].enabled, app.brand.knowledgebase_articles[key].enabled);
          if (!isSame) changeCounter++;
        });
        Object.keys(app.brand.posts).forEach(function (key, index) {
          var isSame = equals(app.old_brand.posts[key].enabled, app.brand.posts[key].enabled);
          if (!isSame) changeCounter++;
        });
        Object.keys(app.brand.products).forEach(function (key, index) {
          var isSame = equals(app.old_brand.products[key].enabled, app.brand.products[key].enabled);
          if (!isSame) changeCounter++;
        });
        app.number_of_changes = changeCounter;
      }
    }
  },
  methods: {
    closeModal: function closeModal() {
      this.show = false;
    },
    emitSuccess: function emitSuccess(e) {
      this.success = false;
    },
    save: function save(dsWavesCatID, dsWavesCatChildID) {
      var _this2 = this;

      //get the selected category from selection
      var selectedCategory = this.selection.find(function (element) {
        return element.syndID == dsWavesCatChildID;
      });
      axios_default.a.post('/wp-json/dswaves/v1/save_woo_category', {
        dsWavesCatID: dsWavesCatID,
        dsWavesCatChildID: dsWavesCatChildID,
        dsWavesCatGrandChildID: null,
        term_id: selectedCategory.selected.term_id
      }).then(function (response) {
        _this2.success = true;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    wooCommerceSelected: function wooCommerceSelected(e) {
      //check if syndID number exists on selection syndID number
      var selectedCategory = this.selection.find(function (element) {
        return element.syndID == e.syndID;
      });

      if (selectedCategory) {
        //    console.log(selectedCategory);
        selectedCategory.selected = e.selected;
      } else {
        //if not, add it
        this.selection.push(e);
      }
    },
    clickContentTypeOnOff: function clickContentTypeOnOff(type) {
      if (type == 'products') this.brand.settings.enable_products = !this.brand.settings.enable_products;else if (type == 'posts') this.brand.settings.enable_posts = !this.brand.settings.enable_posts;else if (type == 'pages') this.brand.settings.enable_pages = !this.brand.settings.enable_pages;else if (type == 'articles') this.brand.settings.enable_articles = !this.brand.settings.enable_articles;
    },
    clickContentTypeAllOnOff: function clickContentTypeAllOnOff(type) {
      if (type == 'products') this.brand.settings.enable_all_products = !this.brand.settings.enable_all_products;else if (type == 'posts') this.brand.settings.enable_all_posts = !this.brand.settings.enable_all_posts;else if (type == 'pages') this.brand.settings.enable_all_pages = !this.brand.settings.enable_all_pages;else if (type == 'articles') this.brand.settings.enable_all_articles = !this.brand.settings.enable_all_articles;
      this.product_search_terms = null;
      this.page_search_terms = null;
      this.post_search_terms = null;
      this.article_search_terms = null;
      this.product_pagination.current_page = 1;
      this.page_pagination.current_page = 1;
      this.post_pagination.current_page = 1;
      this.article_pagination.current_page = 1;
    },
    setContentCount: function setContentCount(type, enabled, enabledAll, items) {
      var returnCount = 0;

      if (!enabled || enabled && enabledAll) // turned off or all selected
        {
          returnCount = items.length;
        }

      if (enabled && !enabledAll) {
        for (var i in items) {
          if (items[i].enabled) returnCount++;
        }
      }

      this.contentStats[type] = returnCount;
    },
    changeResultsPerPage: function changeResultsPerPage(value) {
      this.product_pagination.items_per_page = value;
      this.product_pagination.current_page = 0;
      this.productHandleClick(1);
      this.page_pagination.items_per_page = value;
      this.page_pagination.current_page = 0;
      this.pageHandleClick(1);
      this.post_pagination.items_per_page = value;
      this.post_pagination.current_page = 0;
      this.postHandleClick(1);
      this.article_pagination.items_per_page = value;
      this.article_pagination.current_page = 0;
      this.articleHandleClick(1);
    },
    productSearchKeyUp: function productSearchKeyUp() {
      if (this.product_search_terms) {
        var results = JSON.parse(JSON.stringify(this.brand.products));
        var searchParts = this.product_search_terms.split(" ", 1000);

        if (searchParts.length) {
          for (var i in searchParts) {
            if (searchParts[i]) {
              for (var y = results.length - 1; y >= 0; y--) {
                if (results[y].name.toLowerCase().search(searchParts[i].toLowerCase()) == -1) {
                  results.splice(y, 1);
                }
              }
            }
          }
        }

        this.product_search_results = results;
        this.product_pagination.current_page = -1;
      } else {
        this.productHandleClick(1);
      }
    },
    productPrevHandle: function productPrevHandle() {
      var usePage = this.product_pagination.current_page - 1;

      if (usePage < 1) {
        usePage = 1;
        return;
      }

      this.productHandleClick(usePage);
    },
    productNextHandle: function productNextHandle() {
      var usePage = this.product_pagination.current_page + 1;

      if (usePage > this.product_pagination.total_pages) {
        usePage = this.product_pagination.total_pages;
        return;
      }

      this.productHandleClick(usePage);
    },
    productHandleClick: function productHandleClick(page) {
      if (this.product_pagination.current_page == page) {
        return;
      }

      this.product_pagination.current_page = page;
      this.product_pagination.total_results_count = this.brand.products.length;
      this.product_pagination.total_pages = Math.ceil(this.brand.products.length / this.product_pagination.items_per_page);
      this.product_pagination.current_page_first_index = this.product_pagination.current_page * this.product_pagination.items_per_page - this.product_pagination.items_per_page + 1;
      this.product_pagination.current_page_last_index = this.product_pagination.current_page * this.product_pagination.items_per_page;
      if (this.product_pagination.current_page_last_index > this.brand.products.length) this.product_pagination.current_page_last_index = this.brand.products.length;
      if (document.getElementById('scroll_to_top_of_products') != null) //  typeof(document.getElementById('scroll_to_top_of_products')) != 'undefined')
        document.getElementById("scroll_to_top_of_products").scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
    },
    pageSearchKeyUp: function pageSearchKeyUp() {
      if (this.page_search_terms) {
        var results = JSON.parse(JSON.stringify(this.brand.pages));
        var searchParts = this.page_search_terms.split(" ", 1000);

        if (searchParts.length) {
          for (var i in searchParts) {
            if (searchParts[i]) {
              for (var y = results.length - 1; y >= 0; y--) {
                if (results[y].name.toLowerCase().search(searchParts[i].toLowerCase()) == -1) {
                  results.splice(y, 1);
                }
              }
            }
          }
        }

        this.page_search_results = results;
        this.page_pagination.current_page = -1;
      } else {
        this.pageHandleClick(1);
      }
    },
    pagePrevHandle: function pagePrevHandle() {
      var usePage = this.page_pagination.current_page - 1;

      if (usePage < 1) {
        usePage = 1;
        return;
      }

      this.pageHandleClick(usePage);
    },
    pageNextHandle: function pageNextHandle() {
      var usePage = this.page_pagination.current_page + 1;

      if (usePage > this.page_pagination.total_pages) {
        usePage = this.page_pagination.total_pages;
        return;
      }

      this.pageHandleClick(usePage);
    },
    pageHandleClick: function pageHandleClick(page) {
      if (this.page_pagination.current_page == page) {
        return;
      }

      this.page_pagination.current_page = page;
      this.page_pagination.total_results_count = this.brand.pages.length;
      this.page_pagination.total_pages = Math.ceil(this.brand.pages.length / this.page_pagination.items_per_page);
      this.page_pagination.current_page_first_index = this.page_pagination.current_page * this.page_pagination.items_per_page - this.page_pagination.items_per_page + 1;
      this.page_pagination.current_page_last_index = this.page_pagination.current_page * this.page_pagination.items_per_page;
      if (this.page_pagination.current_page_last_index > this.brand.pages.length) this.page_pagination.current_page_last_index = this.brand.pages.length;
      if (document.getElementById('scroll_to_top_of_pages') != null) //  typeof(document.getElementById('scroll_to_top_of_pages')) != 'undefined')
        document.getElementById("scroll_to_top_of_pages").scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
    },
    postSearchKeyUp: function postSearchKeyUp() {
      if (this.post_search_terms) {
        var results = JSON.parse(JSON.stringify(this.brand.posts));
        var searchParts = this.post_search_terms.split(" ", 1000);

        if (searchParts.length) {
          for (var i in searchParts) {
            if (searchParts[i]) {
              for (var y = results.length - 1; y >= 0; y--) {
                if (results[y].name.toLowerCase().search(searchParts[i].toLowerCase()) == -1) {
                  results.splice(y, 1);
                }
              }
            }
          }
        }

        this.post_search_results = results;
        this.post_pagination.current_page = -1;
      } else {
        this.postHandleClick(1);
      }
    },
    postPrevHandle: function postPrevHandle() {
      var usePage = this.post_pagination.current_page - 1;

      if (usePage < 1) {
        usePage = 1;
        return;
      }

      this.postHandleClick(usePage);
    },
    postNextHandle: function postNextHandle() {
      var usePage = this.post_pagination.current_page + 1;

      if (usePage > this.post_pagination.total_pages) {
        usePage = this.post_pagination.total_pages;
        return;
      }

      this.postHandleClick(usePage);
    },
    postHandleClick: function postHandleClick(page) {
      if (this.post_pagination.current_page == page) {
        return;
      }

      this.post_pagination.current_page = page;
      this.post_pagination.total_results_count = this.brand.posts.length;
      this.post_pagination.total_pages = Math.ceil(this.brand.posts.length / this.post_pagination.items_per_page);
      this.post_pagination.current_page_first_index = this.post_pagination.current_page * this.post_pagination.items_per_page - this.post_pagination.items_per_page + 1;
      this.post_pagination.current_page_last_index = this.post_pagination.current_page * this.post_pagination.items_per_page;
      if (this.post_pagination.current_page_last_index > this.brand.posts.length) this.post_pagination.current_page_last_index = this.brand.posts.length;
      if (document.getElementById('scroll_to_top_of_posts') != null) //  typeof(document.getElementById('scroll_to_top_of_posts')) != 'undefined')
        document.getElementById("scroll_to_top_of_posts").scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
    },
    articleSearchKeyUp: function articleSearchKeyUp() {
      if (this.article_search_terms) {
        var results = JSON.parse(JSON.stringify(this.brand.knowledgebase_articles));
        var searchParts = this.article_search_terms.split(" ", 1000);

        if (searchParts.length) {
          for (var i in searchParts) {
            if (searchParts[i]) {
              for (var y = results.length - 1; y >= 0; y--) {
                if (results[y].name.toLowerCase().search(searchParts[i].toLowerCase()) == -1) {
                  results.splice(y, 1);
                }
              }
            }
          }
        }

        this.article_search_results = results;
        this.article_pagination.current_page = -1;
      } else {
        this.articleHandleClick(1);
      }
    },
    articlePrevHandle: function articlePrevHandle() {
      var usePage = this.article_pagination.current_page - 1;

      if (usePage < 1) {
        usePage = 1;
        return;
      }

      this.articleHandleClick(usePage);
    },
    articleNextHandle: function articleNextHandle() {
      var usePage = this.article_pagination.current_page + 1;

      if (usePage > this.article_pagination.total_pages) {
        usePage = this.article_pagination.total_pages;
        return;
      }

      this.articleHandleClick(usePage);
    },
    articleHandleClick: function articleHandleClick(page) {
      if (this.article_pagination.current_page == page) {
        return;
      }

      this.article_pagination.current_page = page;
      this.article_pagination.total_results_count = this.brand.knowledgebase_articles.length;
      this.article_pagination.total_pages = Math.ceil(this.brand.knowledgebase_articles.length / this.article_pagination.items_per_page);
      this.article_pagination.current_page_first_index = this.article_pagination.current_page * this.article_pagination.items_per_page - this.article_pagination.items_per_page + 1;
      this.article_pagination.current_page_last_index = this.article_pagination.current_page * this.article_pagination.items_per_page;
      if (this.article_pagination.current_page_last_index > this.brand.knowledgebase_articles.length) this.article_pagination.current_page_last_index = this.brand.knowledgebase_articles.length;
      if (document.getElementById('scroll_to_top_of_articles') != null) //  typeof(document.getElementById('scroll_to_top_of_articles')) != 'undefined')
        document.getElementById("scroll_to_top_of_articles").scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
    },
    saveBrand: function saveBrand() {
      var _this3 = this;

      this.currently_saving = true;
      axios_default.a.post('/wp-json/dswaves/v1/save_sync_brand', {
        params: {
          brand: {
            id: this.brand.id,
            settings: this.brand.settings,
            pages: this.brand.pages,
            posts: this.brand.posts,
            products: this.brand.products,
            knowledgebase_articles: this.brand.knowledgebase_articles
          }
        }
      }).then(function (response) {
        _this3.currently_saving = false;
        if (response.data == 'currently_syncing_error') alert('Cannot save. Syndication sync currently in progress. Try again later.');

        if (response.data != 'currently_syncing_error') {
          _this3.queued_sync_count = response.data;
          _this3.number_of_changes = 0;
          _this3.old_brand = JSON.parse(JSON.stringify(_this3.brand));

          _this3.setSyndicationQueueCount();
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    setSyndicationQueueCount: function setSyndicationQueueCount() {
      var _this4 = this;

      axios_default.a.get('/wp-json/dswaves/v1/get_sync_queue_count').then(function (response) {
        _this4.queued_sync_count = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/vue/pages/Brand.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/vue/pages/Brand.vue





const Brand_exports_ = /*#__PURE__*/exportHelper_default()(Brandvue_type_script_lang_js, [['render',Brandvue_type_template_id_6ef40bde_render]])

/* harmony default export */ var Brand = (Brand_exports_);
// CONCATENATED MODULE: ./src/vue/router.js








var routes = [{
  path: '/',
  component: Brands,
  meta: {
    scrollTop: 0
  }
}, {
  path: '/brand/:id',
  component: Brand,
  props: true,
  name: 'Brand',
  meta: {
    scrollTop: 0
  }
}, {
  path: '/approvals',
  component: Approvals,
  meta: {
    scrollTop: 0
  }
}, {
  path: '/request',
  component: Request,
  meta: {
    scrollTop: 0
  }
}, {
  path: '/support',
  component: Support,
  meta: {
    scrollTop: 0
  }
}, {
  path: '/settings',
  component: Settings,
  meta: {
    scrollTop: 0
  }
}, {
  path: '/about',
  component: About,
  meta: {
    scrollTop: 0
  }
}];

var router_scrollBehavior = function scrollBehavior(to, from, savedPosition) {
  return savedPosition || {
    top: 0,
    left: 0
  };
};

var router_router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  scrollBehavior: router_scrollBehavior
});
/* harmony default export */ var vue_router = (router_router);
// CONCATENATED MODULE: ./src/vue/index.js




var vue_app = runtime_dom_esm_bundler_createApp(App);
vue_app.use(vue_router, axios_default.a).mount("#dswaves-plugin");

vue_app.config.globalProperties.redirectIfKeyInvalid = function () {
  var _this = this;

  // check key
  if (window.location.hash != '#/settings' && window.location.hash != '#/about') {
    axios_default()({
      method: 'get',
      url: '/wp-json/dswaves/v1/check_plugin_key_valid'
    }).then(function (response) {
      if (response.data != 'good') {
        _this.$router.push("/settings");
      }
    })["catch"](function (error) {
      console.log(error);
    });
  }
};
// CONCATENATED MODULE: ./src/js/index.js



/***/ })
/******/ ]);