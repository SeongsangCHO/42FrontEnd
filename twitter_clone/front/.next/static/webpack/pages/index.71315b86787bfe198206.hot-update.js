webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\my_study\\42FrontEnd\\twitter_clone\\front\\components\\LoginForm.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var LoginForm = function LoginForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      password = _useState2[0],
      setPassword = _useState2[1]; //컴포넌트에 프롭스로 넘겨주는 함수는 usecallback으로 사용하기
  //최적화를 위해서


  var onChangeId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setId(e.target.value);
  }, []);
  var onChangePassword = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setPassword(e.password.value);
  }, []);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "user-id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "ID"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-id",
    value: id,
    onChange: onChangeId,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "user-password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "Password"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-password",
    type: "password",
    value: password,
    onChange: onChangePassword,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })), __jsx("div", {
    style: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlFor: "submit",
    loading: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "Login"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 30
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 33
    }
  }, "Signup")))));
};

_s(LoginForm, "LA2Te6PREfuQKvFd7F0HoSpYRiI=");

_c = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c;

$RefreshReg$(_c, "LoginForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, __PRIVATE__, createGlobalStyle, css, isStyledComponent, keyframes, useTheme, version, withTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return ServerStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() { return StyleSheetConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() { return StyleSheetContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return StyleSheetManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return ThemeConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__PRIVATE__", function() { return __PRIVATE__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return createGlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return isStyledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return useTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);








function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

// 
var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

// 
var isPlainObject = (function (x) {
  return x !== null && typeof x === 'object' && (x.toString ? x.toString() : Object.prototype.toString.call(x)) === '[object Object]' && !Object(react_is__WEBPACK_IMPORTED_MODULE_0__["typeOf"])(x);
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 
function isFunction(test) {
  return typeof test === 'function';
}

// 
function getComponentName(target) {
  return ( true ? typeof target === 'string' && target : undefined) || // $FlowFixMe
  target.displayName || // $FlowFixMe
  target.name || 'Component';
}

// 
function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
}

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

// 
var SC_ATTR = typeof process !== 'undefined' && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || 'data-styled';
var SC_ATTR_ACTIVE = 'active';
var SC_ATTR_VERSION = 'data-styled-version';
var SC_VERSION = "5.1.1";
var SPLITTER = '/*!sc*/\n';
var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;
var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && (process.env.REACT_APP_SC_DISABLE_SPEEDY || process.env.SC_DISABLE_SPEEDY) || "development" !== 'production'; // Shared empty execution context when generating static styles

var STATIC_EXECUTION_CONTEXT = {};

// 

/* eslint-disable camelcase, no-undef */
var getNonce = function getNonce() {
  return  true ? __webpack_require__.nc : undefined;
};

var errorMap = {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
  "14": "ThemeProvider: \"theme\" prop is required.\n\n",
  "15": "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
  "16": "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
  "17": "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"
};

// 
var ERRORS =  true ? errorMap : undefined;
/**
 * super basic version of sprintf
 */

function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(c < 0 || arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */


function throwStyledComponentsError(code) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (false) {} else {
    throw new Error(format.apply(void 0, [ERRORS[code]].concat(interpolations)).trim());
  }
}

// 
var ELEMENT_TYPE = 1;
/* Node.ELEMENT_TYPE */

/** Find last style element if any inside target */

var findLastStyleTag = function findLastStyleTag(target) {
  var childNodes = target.childNodes;

  for (var i = childNodes.length; i >= 0; i--) {
    var child = childNodes[i];

    if (child && child.nodeType === ELEMENT_TYPE && child.hasAttribute(SC_ATTR)) {
      return child;
    }
  }

  return undefined;
};
/** Create a style element inside `target` or <head> after the last */


var makeStyleTag = function makeStyleTag(target) {
  var head = document.head;
  var parent = target || head;
  var style = document.createElement('style');
  var prevStyle = findLastStyleTag(parent);
  var nextSibling = prevStyle !== undefined ? prevStyle.nextSibling : null;
  style.setAttribute(SC_ATTR, SC_ATTR_ACTIVE);
  style.setAttribute(SC_ATTR_VERSION, SC_VERSION);
  var nonce = getNonce();
  if (nonce) style.setAttribute('nonce', nonce);
  parent.insertBefore(style, nextSibling);
  return style;
};
/** Get the CSSStyleSheet instance for a given style element */

var getSheet = function getSheet(tag) {
  if (tag.sheet) {
    return tag.sheet;
  } // Avoid Firefox quirk where the style element might not have a sheet property


  var _document = document,
      styleSheets = _document.styleSheets;

  for (var i = 0, l = styleSheets.length; i < l; i++) {
    var sheet = styleSheets[i];

    if (sheet.ownerNode === tag) {
      return sheet;
    }
  }

  throwStyledComponentsError(17);
  return undefined;
};

// 
/** Create a CSSStyleSheet-like tag depending on the environment */

var makeTag = function makeTag(_ref) {
  var isServer = _ref.isServer,
      useCSSOMInjection = _ref.useCSSOMInjection,
      target = _ref.target;

  if (isServer) {
    return new VirtualTag(target);
  } else if (useCSSOMInjection) {
    return new CSSOMTag(target);
  } else {
    return new TextTag(target);
  }
};
var CSSOMTag = /*#__PURE__*/function () {
  function CSSOMTag(target) {
    var element = this.element = makeStyleTag(target); // Avoid Edge bug where empty style elements don't create sheets

    element.appendChild(document.createTextNode(''));
    this.sheet = getSheet(element);
    this.length = 0;
  }

  var _proto = CSSOMTag.prototype;

  _proto.insertRule = function insertRule(index, rule) {
    try {
      this.sheet.insertRule(rule, index);
      this.length++;
      return true;
    } catch (_error) {
      return false;
    }
  };

  _proto.deleteRule = function deleteRule(index) {
    this.sheet.deleteRule(index);
    this.length--;
  };

  _proto.getRule = function getRule(index) {
    var rule = this.sheet.cssRules[index]; // Avoid IE11 quirk where cssText is inaccessible on some invalid rules

    if (rule !== undefined && typeof rule.cssText === 'string') {
      return rule.cssText;
    } else {
      return '';
    }
  };

  return CSSOMTag;
}();
/** A Tag that emulates the CSSStyleSheet API but uses text nodes */

var TextTag = /*#__PURE__*/function () {
  function TextTag(target) {
    var element = this.element = makeStyleTag(target);
    this.nodes = element.childNodes;
    this.length = 0;
  }

  var _proto2 = TextTag.prototype;

  _proto2.insertRule = function insertRule(index, rule) {
    if (index <= this.length && index >= 0) {
      var node = document.createTextNode(rule);
      var refNode = this.nodes[index];
      this.element.insertBefore(node, refNode || null);
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  _proto2.deleteRule = function deleteRule(index) {
    this.element.removeChild(this.nodes[index]);
    this.length--;
  };

  _proto2.getRule = function getRule(index) {
    if (index < this.length) {
      return this.nodes[index].textContent;
    } else {
      return '';
    }
  };

  return TextTag;
}();
/** A completely virtual (server-side) Tag that doesn't manipulate the DOM */

var VirtualTag = /*#__PURE__*/function () {
  function VirtualTag(_target) {
    this.rules = [];
    this.length = 0;
  }

  var _proto3 = VirtualTag.prototype;

  _proto3.insertRule = function insertRule(index, rule) {
    if (index <= this.length) {
      this.rules.splice(index, 0, rule);
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  _proto3.deleteRule = function deleteRule(index) {
    this.rules.splice(index, 1);
    this.length--;
  };

  _proto3.getRule = function getRule(index) {
    if (index < this.length) {
      return this.rules[index];
    } else {
      return '';
    }
  };

  return VirtualTag;
}();

// 
/** Create a GroupedTag with an underlying Tag implementation */

var makeGroupedTag = function makeGroupedTag(tag) {
  return new DefaultGroupedTag(tag);
};
var BASE_SIZE = 1 << 9;

var DefaultGroupedTag = /*#__PURE__*/function () {
  function DefaultGroupedTag(tag) {
    this.groupSizes = new Uint32Array(BASE_SIZE);
    this.length = BASE_SIZE;
    this.tag = tag;
  }

  var _proto = DefaultGroupedTag.prototype;

  _proto.indexOfGroup = function indexOfGroup(group) {
    var index = 0;

    for (var i = 0; i < group; i++) {
      index += this.groupSizes[i];
    }

    return index;
  };

  _proto.insertRules = function insertRules(group, rules) {
    if (group >= this.groupSizes.length) {
      var oldBuffer = this.groupSizes;
      var oldSize = oldBuffer.length;
      var newSize = oldSize;

      while (group >= newSize) {
        newSize <<= 1;

        if (newSize < 0) {
          throwStyledComponentsError(16, "" + group);
        }
      }

      this.groupSizes = new Uint32Array(newSize);
      this.groupSizes.set(oldBuffer);
      this.length = newSize;

      for (var i = oldSize; i < newSize; i++) {
        this.groupSizes[i] = 0;
      }
    }

    var ruleIndex = this.indexOfGroup(group + 1);

    for (var _i = 0, l = rules.length; _i < l; _i++) {
      if (this.tag.insertRule(ruleIndex, rules[_i])) {
        this.groupSizes[group]++;
        ruleIndex++;
      }
    }
  };

  _proto.clearGroup = function clearGroup(group) {
    if (group < this.length) {
      var length = this.groupSizes[group];
      var startIndex = this.indexOfGroup(group);
      var endIndex = startIndex + length;
      this.groupSizes[group] = 0;

      for (var i = startIndex; i < endIndex; i++) {
        this.tag.deleteRule(startIndex);
      }
    }
  };

  _proto.getGroup = function getGroup(group) {
    var css = '';

    if (group >= this.length || this.groupSizes[group] === 0) {
      return css;
    }

    var length = this.groupSizes[group];
    var startIndex = this.indexOfGroup(group);
    var endIndex = startIndex + length;

    for (var i = startIndex; i < endIndex; i++) {
      css += "" + this.tag.getRule(i) + SPLITTER;
    }

    return css;
  };

  return DefaultGroupedTag;
}();

// 
var MAX_SMI = 1 << 31 - 1;
var groupIDRegister = new Map();
var reverseRegister = new Map();
var nextFreeGroup = 1;
var getGroupForId = function getGroupForId(id) {
  if (groupIDRegister.has(id)) {
    return groupIDRegister.get(id);
  }

  var group = nextFreeGroup++;

  if ( true && ((group | 0) < 0 || group > MAX_SMI)) {
    throwStyledComponentsError(16, "" + group);
  }

  groupIDRegister.set(id, group);
  reverseRegister.set(group, id);
  return group;
};
var getIdForGroup = function getIdForGroup(group) {
  return reverseRegister.get(group);
};
var setGroupForId = function setGroupForId(id, group) {
  if (group >= nextFreeGroup) {
    nextFreeGroup = group + 1;
  }

  groupIDRegister.set(id, group);
  reverseRegister.set(group, id);
};

// 
var SELECTOR = "style[" + SC_ATTR + "][" + SC_ATTR_VERSION + "=\"" + SC_VERSION + "\"]";
var MARKER_RE = new RegExp("^" + SC_ATTR + "\\.g(\\d+)\\[id=\"([\\w\\d-]+)\"\\].*?\"([^\"]*)");
var outputSheet = function outputSheet(sheet) {
  var tag = sheet.getTag();
  var length = tag.length;
  var css = '';

  for (var group = 0; group < length; group++) {
    var id = getIdForGroup(group);
    if (id === undefined) continue;
    var names = sheet.names.get(id);
    var rules = tag.getGroup(group);
    if (names === undefined || rules.length === 0) continue;
    var selector = SC_ATTR + ".g" + group + "[id=\"" + id + "\"]";
    var content = '';

    if (names !== undefined) {
      names.forEach(function (name) {
        if (name.length > 0) {
          content += name + ",";
        }
      });
    } // NOTE: It's easier to collect rules and have the marker
    // after the actual rules to simplify the rehydration


    css += "" + rules + selector + "{content:\"" + content + "\"}" + SPLITTER;
  }

  return css;
};

var rehydrateNamesFromContent = function rehydrateNamesFromContent(sheet, id, content) {
  var names = content.split(',');
  var name;

  for (var i = 0, l = names.length; i < l; i++) {
    // eslint-disable-next-line
    if (name = names[i]) {
      sheet.registerName(id, name);
    }
  }
};

var rehydrateSheetFromTag = function rehydrateSheetFromTag(sheet, style) {
  var parts = style.innerHTML.split(SPLITTER);
  var rules = [];

  for (var i = 0, l = parts.length; i < l; i++) {
    var part = parts[i].trim();
    if (!part) continue;
    var marker = part.match(MARKER_RE);

    if (marker) {
      var group = parseInt(marker[1], 10) | 0;
      var id = marker[2];

      if (group !== 0) {
        // Rehydrate componentId to group index mapping
        setGroupForId(id, group); // Rehydrate names and rules
        // looks like: data-styled.g11[id="idA"]{content:"nameA,"}

        rehydrateNamesFromContent(sheet, id, marker[3]);
        sheet.getTag().insertRules(group, rules);
      }

      rules.length = 0;
    } else {
      rules.push(part);
    }
  }
};

var rehydrateSheet = function rehydrateSheet(sheet) {
  var nodes = document.querySelectorAll(SELECTOR);

  for (var i = 0, l = nodes.length; i < l; i++) {
    var node = nodes[i];

    if (node && node.getAttribute(SC_ATTR) !== SC_ATTR_ACTIVE) {
      rehydrateSheetFromTag(sheet, node);

      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    }
  }
};

var SHOULD_REHYDRATE = IS_BROWSER;
var defaultOptions = {
  isServer: !IS_BROWSER,
  useCSSOMInjection: !DISABLE_SPEEDY
};
/** Contains the main stylesheet logic for stringification and caching */

var StyleSheet = /*#__PURE__*/function () {
  /** Register a group ID to give it an index */
  StyleSheet.registerId = function registerId(id) {
    return getGroupForId(id);
  };

  function StyleSheet(options, globalStyles, names) {
    if (options === void 0) {
      options = defaultOptions;
    }

    if (globalStyles === void 0) {
      globalStyles = {};
    }

    this.options = _extends({}, defaultOptions, {}, options);
    this.gs = globalStyles;
    this.names = new Map(names); // We rehydrate only once and use the sheet that is created first

    if (!this.options.isServer && IS_BROWSER && SHOULD_REHYDRATE) {
      SHOULD_REHYDRATE = false;
      rehydrateSheet(this);
    }
  }

  var _proto = StyleSheet.prototype;

  _proto.reconstructWithOptions = function reconstructWithOptions(options) {
    return new StyleSheet(_extends({}, this.options, {}, options), this.gs, this.names);
  };

  _proto.allocateGSInstance = function allocateGSInstance(id) {
    return this.gs[id] = (this.gs[id] || 0) + 1;
  }
  /** Lazily initialises a GroupedTag for when it's actually needed */
  ;

  _proto.getTag = function getTag() {
    return this.tag || (this.tag = makeGroupedTag(makeTag(this.options)));
  }
  /** Check whether a name is known for caching */
  ;

  _proto.hasNameForId = function hasNameForId(id, name) {
    return this.names.has(id) && this.names.get(id).has(name);
  }
  /** Mark a group's name as known for caching */
  ;

  _proto.registerName = function registerName(id, name) {
    getGroupForId(id);

    if (!this.names.has(id)) {
      var groupNames = new Set();
      groupNames.add(name);
      this.names.set(id, groupNames);
    } else {
      this.names.get(id).add(name);
    }
  }
  /** Insert new rules which also marks the name as known */
  ;

  _proto.insertRules = function insertRules(id, name, rules) {
    this.registerName(id, name);
    this.getTag().insertRules(getGroupForId(id), rules);
  }
  /** Clears all cached names for a given group ID */
  ;

  _proto.clearNames = function clearNames(id) {
    if (this.names.has(id)) {
      this.names.get(id).clear();
    }
  }
  /** Clears all rules for a given group ID */
  ;

  _proto.clearRules = function clearRules(id) {
    this.getTag().clearGroup(getGroupForId(id));
    this.clearNames(id);
  }
  /** Clears the entire tag which deletes all rules but not its names */
  ;

  _proto.clearTag = function clearTag() {
    // NOTE: This does not clear the names, since it's only used during SSR
    // so that we can continuously output only new rules
    this.tag = undefined;
  }
  /** Outputs the current sheet as a CSS string with markers for SSR */
  ;

  _proto.toString = function toString() {
    return outputSheet(this);
  };

  return StyleSheet;
}();

// 

/* eslint-disable */
var SEED = 5381; // When we have separate strings it's useful to run a progressive
// version of djb2 where we pretend that we're still looping over
// the same string

var phash = function phash(h, x) {
  var i = x.length;

  while (i) {
    h = h * 33 ^ x.charCodeAt(--i);
  }

  return h;
}; // This is a djb2 hashing function

var hash = function hash(x) {
  return phash(SEED, x);
};

/**
 * MIT License
 *
 * Copyright (c) 2016 Sultan Tarimo
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/* eslint-disable */
function insertRulePlugin (insertRule) {
  var delimiter = '/*|*/';
  var needle = delimiter + "}";

  function toSheet(block) {
    if (block) {
      try {
        insertRule(block + "}");
      } catch (e) {}
    }
  }

  return function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
    switch (context) {
      // property
      case 1:
        // @import
        if (depth === 0 && content.charCodeAt(0) === 64) return insertRule(content + ";"), '';
        break;
      // selector

      case 2:
        if (ns === 0) return content + delimiter;
        break;
      // at-rule

      case 3:
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            return insertRule(selectors[0] + content), '';

          default:
            return content + (at === 0 ? delimiter : '');
        }

      case -2:
        content.split(needle).forEach(toSheet);
    }
  };
}

var COMMENT_REGEX = /^\s*\/\/.*$/gm;
function createStylisInstance(_temp) {
  var _ref = _temp === void 0 ? EMPTY_OBJECT : _temp,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? EMPTY_OBJECT : _ref$options,
      _ref$plugins = _ref.plugins,
      plugins = _ref$plugins === void 0 ? EMPTY_ARRAY : _ref$plugins;

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](options); // Wrap `insertRulePlugin to build a list of rules,
  // and then make our own plugin to return the rules. This
  // makes it easier to hook into the existing SSR architecture

  var parsingRules = []; // eslint-disable-next-line consistent-return

  var returnRulesPlugin = function returnRulesPlugin(context) {
    if (context === -2) {
      var parsedRules = parsingRules;
      parsingRules = [];
      return parsedRules;
    }
  };

  var parseRulesPlugin = insertRulePlugin(function (rule) {
    parsingRules.push(rule);
  });

  var _componentId;

  var _selector;

  var _selectorRegexp;

  var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
    if ( // the first self-ref is always untouched
    offset > 0 && // there should be at least two self-refs to do a replacement (.b > .b)
    string.slice(0, offset).indexOf(_selector) !== -1 && // no consecutive self refs (.b.b); that is a precedence boost and treated differently
    string.slice(offset - _selector.length, offset) !== _selector) {
      return "." + _componentId;
    }

    return match;
  };
  /**
   * When writing a style like
   *
   * & + & {
   *   color: red;
   * }
   *
   * The second ampersand should be a reference to the static component class. stylis
   * has no knowledge of static class so we have to intelligently replace the base selector.
   *
   * https://github.com/thysultan/stylis.js#plugins <- more info about the context phase values
   * "2" means this plugin is taking effect at the very end after all other processing is complete
   */


  var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
    if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
      // eslint-disable-next-line no-param-reassign
      selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
    }
  };

  stylis.use([].concat(plugins, [selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]));

  function stringifyRules(css, selector, prefix, componentId) {
    if (componentId === void 0) {
      componentId = '&';
    }

    var flatCSS = css.replace(COMMENT_REGEX, '');
    var cssStr = selector && prefix ? prefix + " " + selector + " { " + flatCSS + " }" : flatCSS; // stylis has no concept of state to be passed to plugins
    // but since JS is single=threaded, we can rely on that to ensure
    // these properties stay in sync with the current stylis run

    _componentId = componentId;
    _selector = selector;
    _selectorRegexp = new RegExp("\\" + _selector + "\\b", 'g');
    return stylis(prefix || !selector ? '' : selector, cssStr);
  }

  stringifyRules.hash = plugins.length ? plugins.reduce(function (acc, plugin) {
    if (!plugin.name) {
      throwStyledComponentsError(15);
    }

    return phash(acc, plugin.name);
  }, SEED).toString() : '';
  return stringifyRules;
}

// 
var StyleSheetContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var StyleSheetConsumer = StyleSheetContext.Consumer;
var StylisContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var StylisConsumer = StylisContext.Consumer;
var masterSheet = new StyleSheet();
var masterStylis = createStylisInstance();
function useStyleSheet() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(StyleSheetContext) || masterSheet;
}
function useStylis() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(StylisContext) || masterStylis;
}
function StyleSheetManager(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.stylisPlugins),
      plugins = _useState[0],
      setPlugins = _useState[1];

  var contextStyleSheet = useStyleSheet();
  var styleSheet = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var sheet = contextStyleSheet;

    if (props.sheet) {
      // eslint-disable-next-line prefer-destructuring
      sheet = props.sheet;
    } else if (props.target) {
      sheet = sheet.reconstructWithOptions({
        target: props.target
      });
    }

    if (props.disableCSSOMInjection) {
      sheet = sheet.reconstructWithOptions({
        useCSSOMInjection: false
      });
    }

    return sheet;
  }, [props.disableCSSOMInjection, props.sheet, props.target]);
  var stylis = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return createStylisInstance({
      options: {
        prefix: !props.disableVendorPrefixes
      },
      plugins: plugins
    });
  }, [props.disableVendorPrefixes, plugins]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(plugins, props.stylisPlugins)) setPlugins(props.stylisPlugins);
  }, [props.stylisPlugins]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyleSheetContext.Provider, {
    value: styleSheet
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StylisContext.Provider, {
    value: stylis
  },  true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.only(props.children) : undefined));
}

// 

var Keyframes = /*#__PURE__*/function () {
  function Keyframes(name, stringifyArgs) {
    var _this = this;

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.insertRules(_this.id, _this.name, masterStylis.apply(void 0, _this.stringifyArgs));
      }
    };

    this.toString = function () {
      return throwStyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.id = "sc-keyframes-" + name;
    this.stringifyArgs = stringifyArgs;
  }

  var _proto = Keyframes.prototype;

  _proto.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */
var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */

function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

// 

function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__["default"])) {
    return value + "px"; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}

// 
/**
 * It's falsish not falsy because 0 is allowed.
 */

var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);
  keys.forEach(function (key) {
    if (!isFalsish(obj[key])) {
      if (isPlainObject(obj[key])) {
        rules.push.apply(rules, objToCssArray(obj[key], key));
        return rules;
      } else if (isFunction(obj[key])) {
        rules.push(hyphenateStyleName(key) + ":", obj[key], ';');
        return rules;
      }

      rules.push(hyphenateStyleName(key) + ": " + addUnitIfNeeded(key, obj[key]) + ";");
    }

    return rules;
  });
  return prevKey ? [prevKey + " {"].concat(rules, ['}']) : rules;
};
function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);
      if (result === '') continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return '';
  }
  /* Handle other components */


  if (isStyledComponent(chunk)) {
    return "." + chunk.styledComponentId;
  }
  /* Either execute or defer the function */


  if (isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if ( true && Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isElement"])(_result)) {
        // eslint-disable-next-line no-console
        console.warn(getComponentName(chunk) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.");
      }

      return flatten(_result, executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }
  /* Handle objects */


  return isPlainObject(chunk) ? objToCssArray(chunk) : chunk.toString();
}

// 
function css(styles) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  if (interpolations.length === 0 && styles.length === 1 && typeof styles[0] === "string") {
    // $FlowFixMe
    return styles;
  } // $FlowFixMe


  return flatten(interleave(styles, interpolations));
}

function constructWithOptions(componentConstructor, tag, options) {
  if (options === void 0) {
    options = EMPTY_OBJECT;
  }

  if (!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isValidElementType"])(tag)) {
    return throwStyledComponentsError(1, String(tag));
  }
  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments


  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(void 0, arguments));
  };
  /* If config methods are called, wrap up a new template function and merge options */


  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {}, config));
  };
  /* Modify/inject new props at runtime */


  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}

/* eslint-disable */

/**
  mixin-deep; https://github.com/jonschlinkert/mixin-deep
  Inlined such that it will be consistently transpiled to an IE-compatible syntax.

  The MIT License (MIT)

  Copyright (c) 2014-present, Jon Schlinkert.

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
var isObject = function isObject(val) {
  return typeof val === 'function' || typeof val === 'object' && val !== null && !Array.isArray(val);
};

var isValidKey = function isValidKey(key) {
  return key !== '__proto__' && key !== 'constructor' && key !== 'prototype';
};

function mixin(target, val, key) {
  var obj = target[key];

  if (isObject(val) && isObject(obj)) {
    mixinDeep(obj, val);
  } else {
    target[key] = val;
  }
}

function mixinDeep(target) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  for (var _i = 0, _rest = rest; _i < _rest.length; _i++) {
    var obj = _rest[_i];

    if (isObject(obj)) {
      for (var key in obj) {
        if (isValidKey(key)) {
          mixin(target, obj[key], key);
        }
      }
    }
  }

  return target;
}

// 

/* eslint-disable no-bitwise */
var AD_REPLACER_R = /(a)(d)/gi;
/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */

var charsLength = 52;
/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */

var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};
/* input a number, usually a hash and convert it to base-52 */


function generateAlphabeticName(code) {
  var name = '';
  var x;
  /* get a char and divide by alphabet-length */

  for (x = Math.abs(code); x > charsLength; x = x / charsLength | 0) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return (getAlphabeticChar(x % charsLength) + name).replace(AD_REPLACER_R, '$1-$2');
}

// 
function isStaticRules(rules) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  return true;
}

// 
/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */

var ComponentStyle = /*#__PURE__*/function () {
  function ComponentStyle(rules, componentId) {
    this.rules = rules;
    this.staticRulesId = '';
    this.isStatic =  false && false;
    this.componentId = componentId;
    this.baseHash = hash(componentId); // NOTE: This registers the componentId, which ensures a consistent order
    // for this component's styles compared to others

    StyleSheet.registerId(componentId);
  }
  /*
   * Flattens a rule set into valid CSS
   * Hashes it, wraps the whole chunk in a .hash1234 {}
   * Returns the hash to be injected on render()
   * */


  var _proto = ComponentStyle.prototype;

  _proto.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet, stylis) {
    var componentId = this.componentId; // force dynamic classnames if user-supplied stylis plugins are in use

    if (this.isStatic && !stylis.hash) {
      if (this.staticRulesId && styleSheet.hasNameForId(componentId, this.staticRulesId)) {
        return this.staticRulesId;
      }

      var cssStatic = flatten(this.rules, executionContext, styleSheet).join('');
      var name = generateAlphabeticName(phash(this.baseHash, cssStatic.length) >>> 0);

      if (!styleSheet.hasNameForId(componentId, name)) {
        var cssStaticFormatted = stylis(cssStatic, "." + name, undefined, componentId);
        styleSheet.insertRules(componentId, name, cssStaticFormatted);
      }

      this.staticRulesId = name;
      return name;
    } else {
      var length = this.rules.length;
      var dynamicHash = phash(this.baseHash, stylis.hash);
      var css = '';

      for (var i = 0; i < length; i++) {
        var partRule = this.rules[i];

        if (typeof partRule === 'string') {
          css += partRule;
          if (true) dynamicHash = phash(dynamicHash, partRule + i);
        } else {
          var partChunk = flatten(partRule, executionContext, styleSheet);
          var partString = Array.isArray(partChunk) ? partChunk.join('') : partChunk;
          dynamicHash = phash(dynamicHash, partString + i);
          css += partString;
        }
      }

      var _name = generateAlphabeticName(dynamicHash >>> 0);

      if (!styleSheet.hasNameForId(componentId, _name)) {
        var cssFormatted = stylis(css, "." + _name, undefined, componentId);
        styleSheet.insertRules(componentId, _name, cssFormatted);
      }

      return _name;
    }
  };

  return ComponentStyle;
}();

// 
var LIMIT = 200;
var createWarnTooManyClasses = (function (displayName, componentId) {
  var generatedClasses = {};
  var warningSeen = false;
  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;

      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.

        /* eslint-disable no-console, prefer-template */
        var parsedIdString = componentId ? " with the id of \"" + componentId + "\"" : '';
        console.warn("Over " + LIMIT + " classes were generated for component " + displayName + parsedIdString + ".\n" + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs(props => ({\n' + '    style: {\n' + '      background: props.background,\n' + '    },\n' + '  }))`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 
var invalidHookCallRe = /invalid hook call/i;
var seen = new Set();
var checkDynamicCreation = function checkDynamicCreation(displayName, componentId) {
  if (true) {
    var parsedIdString = componentId ? " with the id of \"" + componentId + "\"" : '';
    var message = "The component " + displayName + parsedIdString + " has been created dynamically.\n" + 'You may see this warning because you\'ve called styled inside another component.\n' + 'To resolve this only create new StyledComponents outside of any render method and function component.';

    try {
      // We purposefully call `useRef` outside of a component and expect it to throw
      // If it doesn't, then we're inside another component.
      // eslint-disable-next-line react-hooks/rules-of-hooks
      Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

      if (!seen.has(message)) {
        // eslint-disable-next-line no-console
        console.warn(message);
        seen.add(message);
      }
    } catch (error) {
      // The error here is expected, since we're expecting anything that uses `checkDynamicCreation` to
      // be called outside of a React component.
      if (invalidHookCallRe.test(error.message)) {
        // This shouldn't happen, but resets `warningSeen` if we had this error happen intermittently
        seen["delete"](message);
      }
    }
  }
};

// 
var determineTheme = (function (props, providedTheme, defaultProps) {
  if (defaultProps === void 0) {
    defaultProps = EMPTY_OBJECT;
  }

  return props.theme !== defaultProps.theme && props.theme || providedTheme || defaultProps.theme;
});

// 
// Source: https://www.w3.org/TR/cssom-1/#serialize-an-identifier
// Control characters and non-letter first symbols are not supported
var escapeRegex = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var dashesAtEnds = /(^-|-$)/g;
/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */

function escape(str) {
  return str // Replace all possible CSS selectors
  .replace(escapeRegex, '-') // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 
function isTag(target) {
  return typeof target === 'string' && ( true ? target.charAt(0) === target.charAt(0).toLowerCase() : undefined);
}

// 
function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? "styled." + target : "Styled(" + getComponentName(target) + ")";
}

// 
var generateComponentId = (function (str) {
  return generateAlphabeticName(hash(str) >>> 0);
});

/**
 * Convenience function for joining strings to form className chains
 */
function joinStrings(a, b) {
  return a && b ? a + " " + b : a || b;
}

var ThemeContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var ThemeConsumer = ThemeContext.Consumer;

function mergeTheme(theme, outerTheme) {
  if (!theme) {
    return throwStyledComponentsError(14);
  }

  if (isFunction(theme)) {
    var mergedTheme = theme(outerTheme);

    if ( true && (mergedTheme === null || Array.isArray(mergedTheme) || typeof mergedTheme !== 'object')) {
      return throwStyledComponentsError(7);
    }

    return mergedTheme;
  }

  if (Array.isArray(theme) || typeof theme !== 'object') {
    return throwStyledComponentsError(8);
  }

  return outerTheme ? _extends({}, outerTheme, {}, theme) : theme;
}
/**
 * Provide a theme to an entire react component tree via context
 */


function ThemeProvider(props) {
  var outerTheme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
  var themeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return mergeTheme(props.theme, outerTheme);
  }, [props.theme, outerTheme]);

  if (!props.children) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ThemeContext.Provider, {
    value: themeContext
  }, props.children);
}

/* global $Call */

var identifiers = {};
/* We depend on components having unique IDs */

function generateId(displayName, parentComponentId) {
  var name = typeof displayName !== 'string' ? 'sc' : escape(displayName); // Ensure that no displayName can lead to duplicate componentIds

  identifiers[name] = (identifiers[name] || 0) + 1;
  var componentId = name + "-" + generateComponentId(name + identifiers[name]);
  return parentComponentId ? parentComponentId + "-" + componentId : componentId;
}

function useResolvedAttrs(theme, props, attrs) {
  if (theme === void 0) {
    theme = EMPTY_OBJECT;
  }

  // NOTE: can't memoize this
  // returns [context, resolvedAttrs]
  // where resolvedAttrs is only the things injected by the attrs themselves
  var context = _extends({}, props, {
    theme: theme
  });

  var resolvedAttrs = {};
  attrs.forEach(function (attrDef) {
    var resolvedAttrDef = attrDef;
    var key;

    if (isFunction(resolvedAttrDef)) {
      resolvedAttrDef = resolvedAttrDef(context);
    }
    /* eslint-disable guard-for-in */


    for (key in resolvedAttrDef) {
      context[key] = resolvedAttrs[key] = key === 'className' ? joinStrings(resolvedAttrs[key], resolvedAttrDef[key]) : resolvedAttrDef[key];
    }
    /* eslint-enable guard-for-in */

  });
  return [context, resolvedAttrs];
}

function useInjectedStyle(componentStyle, hasAttrs, resolvedAttrs, warnTooManyClasses) {
  var styleSheet = useStyleSheet();
  var stylis = useStylis(); // statically styled-components don't need to build an execution context object,
  // and shouldn't be increasing the number of class names

  var isStatic = componentStyle.isStatic && !hasAttrs;
  var className = isStatic ? componentStyle.generateAndInjectStyles(EMPTY_OBJECT, styleSheet, stylis) : componentStyle.generateAndInjectStyles(resolvedAttrs, styleSheet, stylis);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(className);

  if ( true && !isStatic && warnTooManyClasses) {
    warnTooManyClasses(className);
  }

  return className;
}

function useStyledComponentImpl(forwardedComponent, props, forwardedRef) {
  var componentAttrs = forwardedComponent.attrs,
      componentStyle = forwardedComponent.componentStyle,
      defaultProps = forwardedComponent.defaultProps,
      foldedComponentIds = forwardedComponent.foldedComponentIds,
      shouldForwardProp = forwardedComponent.shouldForwardProp,
      styledComponentId = forwardedComponent.styledComponentId,
      target = forwardedComponent.target;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(styledComponentId); // NOTE: the non-hooks version only subscribes to this when !componentStyle.isStatic,
  // but that'd be against the rules-of-hooks. We could be naughty and do it anyway as it
  // should be an immutable value, but behave for now.

  var theme = determineTheme(props, Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext), defaultProps);

  var _useResolvedAttrs = useResolvedAttrs(theme || EMPTY_OBJECT, props, componentAttrs),
      context = _useResolvedAttrs[0],
      attrs = _useResolvedAttrs[1];

  var generatedClassName = useInjectedStyle(componentStyle, componentAttrs.length > 0, context,  true ? forwardedComponent.warnTooManyClasses : undefined);
  var refToForward = forwardedRef;
  var elementToBeCreated = attrs.$as || props.$as || attrs.as || props.as || target;
  var isTargetTag = isTag(elementToBeCreated);
  var computedProps = attrs !== props ? _extends({}, props, {}, attrs) : props;
  var propFilterFn = shouldForwardProp || isTargetTag && _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"];
  var propsForElement = {}; // eslint-disable-next-line guard-for-in

  for (var key in computedProps) {
    if (key[0] === '$' || key === 'as') continue;else if (key === 'forwardedAs') {
      propsForElement.as = computedProps[key];
    } else if (!propFilterFn || propFilterFn(key, _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"])) {
      // Don't pass through non HTML tags through to HTML elements
      propsForElement[key] = computedProps[key];
    }
  }

  if (props.style && attrs.style !== props.style) {
    propsForElement.style = _extends({}, props.style, {}, attrs.style);
  }

  propsForElement.className = Array.prototype.concat(foldedComponentIds, styledComponentId, generatedClassName !== styledComponentId ? generatedClassName : null, props.className, attrs.className).filter(Boolean).join(' ');
  propsForElement.ref = refToForward;
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(elementToBeCreated, propsForElement);
}

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isCompositeComponent = !isTag(target);
  var _options$displayName = options.displayName,
      displayName = _options$displayName === void 0 ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === void 0 ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
      _options$attrs = options.attrs,
      attrs = _options$attrs === void 0 ? EMPTY_ARRAY : _options$attrs;
  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + "-" + options.componentId : options.componentId || componentId; // fold the underlying StyledComponent attrs up (implicit extend)

  var finalAttrs = // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs; // eslint-disable-next-line prefer-destructuring

  var shouldForwardProp = options.shouldForwardProp; // $FlowFixMe

  if (isTargetStyledComp && target.shouldForwardProp) {
    if (shouldForwardProp) {
      // compose nested shouldForwardProp calls
      shouldForwardProp = function shouldForwardProp(prop, filterFn) {
        return (// $FlowFixMe
          target.shouldForwardProp(prop, filterFn) && options.shouldForwardProp(prop, filterFn)
        );
      };
    } else {
      // eslint-disable-next-line prefer-destructuring
      shouldForwardProp = target.shouldForwardProp;
    }
  }

  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, styledComponentId);
  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */

  var WrappedStyledComponent; // eslint-disable-next-line react-hooks/rules-of-hooks

  var forwardRef = function forwardRef(props, ref) {
    return useStyledComponentImpl(WrappedStyledComponent, props, ref);
  };

  forwardRef.displayName = displayName; // $FlowFixMe this is a forced cast to merge it StyledComponentWrapperProperties

  WrappedStyledComponent = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(forwardRef);
  WrappedStyledComponent.attrs = finalAttrs;
  WrappedStyledComponent.componentStyle = componentStyle;
  WrappedStyledComponent.displayName = displayName;
  WrappedStyledComponent.shouldForwardProp = shouldForwardProp; // this static is used to preserve the cascade of static classes for component selector
  // purposes; this is especially important with usage of the css prop

  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;
  WrappedStyledComponent.styledComponentId = styledComponentId; // fold the underlying StyledComponent target up since we folded the styles

  WrappedStyledComponent.target = isTargetStyledComp ? // $FlowFixMe
  target.target : target; // $FlowFixMe

  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = _objectWithoutPropertiesLoose(options, ["componentId"]);

    var newComponentId = previousComponentId && previousComponentId + "-" + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId
    });

    return createStyledComponent(tag, newOptions, rules);
  }; // $FlowFixMe


  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
    get: function get() {
      return this._foldedDefaultProps;
    },
    set: function set(obj) {
      // $FlowFixMe
      this._foldedDefaultProps = isTargetStyledComp ? mixinDeep({}, target.defaultProps, obj) : obj;
    }
  });

  if (true) {
    checkDynamicCreation(displayName, styledComponentId);
    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName, styledComponentId);
  } // $FlowFixMe


  WrappedStyledComponent.toString = function () {
    return "." + WrappedStyledComponent.styledComponentId;
  };

  if (isCompositeComponent) {
    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      shouldForwardProp: true,
      self: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
}

// 
// Thanks to ReactDOMFactories for this handy list!
var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
}; // Shorthands for all valid HTML Elements


domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
});

// 

var GlobalStyle = /*#__PURE__*/function () {
  function GlobalStyle(rules, componentId) {
    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules);
  }

  var _proto = GlobalStyle.prototype;

  _proto.createStyles = function createStyles(instance, executionContext, styleSheet, stylis) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stylis(flatCSS.join(''), '');
    var id = this.componentId + instance; // NOTE: We use the id as a name as well, since these rules never change

    styleSheet.insertRules(id, id, css);
  };

  _proto.removeStyles = function removeStyles(instance, styleSheet) {
    styleSheet.clearRules(this.componentId + instance);
  };

  _proto.renderStyles = function renderStyles(instance, executionContext, styleSheet, stylis) {
    StyleSheet.registerId(this.componentId + instance); // NOTE: Remove old styles, then inject the new ones

    this.removeStyles(instance, styleSheet);
    this.createStyles(instance, executionContext, styleSheet, stylis);
  };

  return GlobalStyle;
}();

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(void 0, [strings].concat(interpolations));
  var styledComponentId = "sc-global-" + generateComponentId(JSON.stringify(rules));
  var globalStyle = new GlobalStyle(rules, styledComponentId);

  if (true) {
    checkDynamicCreation(styledComponentId);
  }

  function GlobalStyleComponent(props) {
    var styleSheet = useStyleSheet();
    var stylis = useStylis();
    var theme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
    var instanceRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

    if (instanceRef.current === null) {
      instanceRef.current = styleSheet.allocateGSInstance(styledComponentId);
    }

    var instance = instanceRef.current;

    if ( true && react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.count(props.children)) {
      // eslint-disable-next-line no-console
      console.warn("The global style component " + styledComponentId + " was given child JSX. createGlobalStyle does not render children.");
    }

    if ( true && rules.some(function (rule) {
      return typeof rule === 'string' && rule.indexOf('@import') !== -1;
    })) {
      console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app.");
    }

    if (globalStyle.isStatic) {
      globalStyle.renderStyles(instance, STATIC_EXECUTION_CONTEXT, styleSheet, stylis);
    } else {
      var context = _extends({}, props, {
        theme: determineTheme(props, theme, GlobalStyleComponent.defaultProps)
      });

      globalStyle.renderStyles(instance, context, styleSheet, stylis);
    }

    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      return function () {
        return globalStyle.removeStyles(instance, styleSheet);
      };
    }, EMPTY_ARRAY);
    return null;
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(GlobalStyleComponent);
}

// 
function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    // eslint-disable-next-line no-console
    console.warn('`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.');
  }

  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(void 0, [strings].concat(interpolations)).join('');
  var name = generateComponentId(rules);
  return new Keyframes(name, [rules, name, '@keyframes']);
}

var ServerStyleSheet = /*#__PURE__*/function () {
  function ServerStyleSheet() {
    var _this = this;

    this._emitSheetCSS = function () {
      var css = _this.instance.toString();

      var nonce = getNonce();
      var attrs = [nonce && "nonce=\"" + nonce + "\"", SC_ATTR + "=\"true\"", SC_ATTR_VERSION + "=\"" + SC_VERSION + "\""];
      var htmlAttr = attrs.filter(Boolean).join(' ');
      return "<style " + htmlAttr + ">" + css + "</style>";
    };

    this.getStyleTags = function () {
      if (_this.sealed) {
        return throwStyledComponentsError(2);
      }

      return _this._emitSheetCSS();
    };

    this.getStyleElement = function () {
      var _props;

      if (_this.sealed) {
        return throwStyledComponentsError(2);
      }

      var props = (_props = {}, _props[SC_ATTR] = '', _props[SC_ATTR_VERSION] = SC_VERSION, _props.dangerouslySetInnerHTML = {
        __html: _this.instance.toString()
      }, _props);
      var nonce = getNonce();

      if (nonce) {
        props.nonce = nonce;
      } // v4 returned an array for this fn, so we'll do the same for v5 for backward compat


      return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", _extends({}, props, {
        key: "sc-0-0"
      }))];
    };

    this.seal = function () {
      _this.sealed = true;
    };

    this.instance = new StyleSheet({
      isServer: true
    });
    this.sealed = false;
  }

  var _proto = ServerStyleSheet.prototype;

  _proto.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      return throwStyledComponentsError(2);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyleSheetManager, {
      sheet: this.instance
    }, children);
  };

  // eslint-disable-next-line consistent-return
  _proto.interleaveWithNodeStream = function interleaveWithNodeStream(input) {
    {
      return throwStyledComponentsError(3);
    }
  };

  return ServerStyleSheet;
}();

// export default <Config: { theme?: any }, Instance>(
//  Component: AbstractComponent<Config, Instance>
// ): AbstractComponent<$Diff<Config, { theme?: any }> & { theme?: any }, Instance>
//
// but the old build system tooling doesn't support the syntax

var withTheme = (function (Component) {
  // $FlowFixMe This should be React.forwardRef<Config, Instance>
  var WithTheme = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (props, ref) {
    var theme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext); // $FlowFixMe defaultProps isn't declared so it can be inferrable

    var defaultProps = Component.defaultProps;
    var themeProp = determineTheme(props, theme, defaultProps);

    if ( true && themeProp === undefined) {
      // eslint-disable-next-line no-console
      console.warn("[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class \"" + getComponentName(Component) + "\"");
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, props, {
      theme: themeProp,
      ref: ref
    }));
  });
  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(WithTheme, Component);
  WithTheme.displayName = "WithTheme(" + getComponentName(Component) + ")";
  return WithTheme;
});

// 

var useTheme = function useTheme() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
};

// 
var __PRIVATE__ = {
  StyleSheet: StyleSheet,
  masterSheet: masterSheet
};

// 
/* Define bundle version for export */

var version = "5.1.1";
/* Warning if you've imported this file on React Native */

if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}
/* Warning if there are several instances of styled-components */


if ( true && typeof window !== 'undefined') {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process, ' + 'missing theme prop, and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

/* harmony default export */ __webpack_exports__["default"] = (styled);

//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9pcy1wcm9wLXZhbGlkL2Rpc3QvaXMtcHJvcC12YWxpZC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL21lbW9pemUvZGlzdC9tZW1vaXplLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vc3R5bGlzL2Rpc3Qvc3R5bGlzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vdW5pdGxlc3MvZGlzdC91bml0bGVzcy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N0eWxlZC1jb21wb25lbnRzL2Rpc3Qvc3R5bGVkLWNvbXBvbmVudHMuYnJvd3Nlci5lc20uanMiXSwibmFtZXMiOlsiTG9naW5Gb3JtIiwidXNlU3RhdGUiLCJpZCIsInNldElkIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm9uQ2hhbmdlSWQiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlUGFzc3dvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNGQyxzREFBUSxDQUFDLEVBQUQsQ0FETjtBQUFBLE1BQ2ZDLEVBRGU7QUFBQSxNQUNYQyxLQURXOztBQUFBLG1CQUVVRixzREFBUSxDQUFDLEVBQUQsQ0FGbEI7QUFBQSxNQUVmRyxRQUZlO0FBQUEsTUFFTEMsV0FGSyxrQkFJdEI7QUFDQTs7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFD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O0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixrQ0FBa0M7QUFDMUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLFVBQVU7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsVUFBVTs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBMkMsT0FBTztBQUNsRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0IseUJBQXlCLE9BQU87QUFDaEM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FB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QUFFQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQixXQUFXO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4QixjQUFjO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsY0FBYztBQUMxQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLGdCQUFnQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7O0FBR0EscUNBQXFDLDRCQUE0QjtBQUNqRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyxpREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1DQUFtQyxPQUFPO0FBQzFDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsb0JBQW9CO0FBQ2xEO0FBQ0EsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUNBQXFDLGtCQUFrQjtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RkFBdUY7QUFDdkY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHVEQUFNLFVBQVU7QUFDbkM7QUFDQTs7QUFFQSx3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRGQUE0RjtBQUM1RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNB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RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCO0FBQzlCO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUCwyQkFBMkIsNENBQUssbUNBQW1DO0FBQ25FO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLDRDQUFLO0FBQzdCO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQsNEJBQTRCLGNBQWM7QUFDMUM7QUFDQSx1Q0FBdUMsY0FBYyxLQUFLLGNBQWM7QUFDeEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDRDQUFLO0FBQ3ZCLGdCQUFnQix3REFBVSxlQUFlOztBQUV6QztBQUNBOztBQUVBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTtBQUNBOztBQUVBLHdCQUF3Qiw0Q0FBSyxxQ0FBcUM7QUFDbEU7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsRUFBRSw4REFBSztBQUNQO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0EsU0FBUyx3REFBVTtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJLEtBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxJQUFJLEtBQXdFO0FBQzVFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWUscUVBQU0sRUFBQztBQUM2TTtBQUNuTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43MTMxNWI4Njc4N2JmZTE5ODIwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9ZnJvbSAnYW50ZCdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHsgXHJcbiAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIC8v7Lu07Y+s64SM7Yq47JeQIO2UhOuhreyKpOuhnCDrhJjqsqjso7zripQg7ZWo7IiY64qUIHVzZWNhbGxiYWNr7Jy866GcIOyCrOyaqe2VmOq4sFxyXG4gIC8v7LWc7KCB7ZmU66W8IOychO2VtOyEnFxyXG4gIGNvbnN0IG9uQ2hhbmdlSWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRJZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0UGFzc3dvcmQoZS5wYXNzd29yZC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItaWRcIj5JRDwvbGFiZWw+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VyLWlkXCIgdmFsdWU9e2lkfSBvbkNoYW5nZT17b25DaGFuZ2VJZH0gcmVxdWlyZWQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLXBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxJbnB1dCBuYW1lPVwidXNlci1wYXNzd29yZFwiXHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgICByZXF1aXJlZD5cclxuICAgICAgICAgIDwvSW5wdXQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHN0eWxlPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sRm9yPVwic3VibWl0XCIgbG9hZGluZz17ZmFsc2V9PkxvZ2luPC9CdXR0b24+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj48YT48QnV0dG9uPlNpZ251cDwvQnV0dG9uPjwvYT48L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Gb3JtPlxyXG4gICAgXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtOyIsImltcG9ydCBtZW1vaXplIGZyb20gJ0BlbW90aW9uL21lbW9pemUnO1xuXG52YXIgcmVhY3RQcm9wc1JlZ2V4ID0gL14oKGNoaWxkcmVufGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MfGtleXxyZWZ8YXV0b0ZvY3VzfGRlZmF1bHRWYWx1ZXxkZWZhdWx0Q2hlY2tlZHxpbm5lckhUTUx8c3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nfHN1cHByZXNzSHlkcmF0aW9uV2FybmluZ3x2YWx1ZUxpbmt8YWNjZXB0fGFjY2VwdENoYXJzZXR8YWNjZXNzS2V5fGFjdGlvbnxhbGxvd3xhbGxvd1VzZXJNZWRpYXxhbGxvd1BheW1lbnRSZXF1ZXN0fGFsbG93RnVsbFNjcmVlbnxhbGxvd1RyYW5zcGFyZW5jeXxhbHR8YXN5bmN8YXV0b0NvbXBsZXRlfGF1dG9QbGF5fGNhcHR1cmV8Y2VsbFBhZGRpbmd8Y2VsbFNwYWNpbmd8Y2hhbGxlbmdlfGNoYXJTZXR8Y2hlY2tlZHxjaXRlfGNsYXNzSUR8Y2xhc3NOYW1lfGNvbHN8Y29sU3Bhbnxjb250ZW50fGNvbnRlbnRFZGl0YWJsZXxjb250ZXh0TWVudXxjb250cm9sc3xjb250cm9sc0xpc3R8Y29vcmRzfGNyb3NzT3JpZ2lufGRhdGF8ZGF0ZVRpbWV8ZGVjb2Rpbmd8ZGVmYXVsdHxkZWZlcnxkaXJ8ZGlzYWJsZWR8ZGlzYWJsZVBpY3R1cmVJblBpY3R1cmV8ZG93bmxvYWR8ZHJhZ2dhYmxlfGVuY1R5cGV8Zm9ybXxmb3JtQWN0aW9ufGZvcm1FbmNUeXBlfGZvcm1NZXRob2R8Zm9ybU5vVmFsaWRhdGV8Zm9ybVRhcmdldHxmcmFtZUJvcmRlcnxoZWFkZXJzfGhlaWdodHxoaWRkZW58aGlnaHxocmVmfGhyZWZMYW5nfGh0bWxGb3J8aHR0cEVxdWl2fGlkfGlucHV0TW9kZXxpbnRlZ3JpdHl8aXN8a2V5UGFyYW1zfGtleVR5cGV8a2luZHxsYWJlbHxsYW5nfGxpc3R8bG9hZGluZ3xsb29wfGxvd3xtYXJnaW5IZWlnaHR8bWFyZ2luV2lkdGh8bWF4fG1heExlbmd0aHxtZWRpYXxtZWRpYUdyb3VwfG1ldGhvZHxtaW58bWluTGVuZ3RofG11bHRpcGxlfG11dGVkfG5hbWV8bm9uY2V8bm9WYWxpZGF0ZXxvcGVufG9wdGltdW18cGF0dGVybnxwbGFjZWhvbGRlcnxwbGF5c0lubGluZXxwb3N0ZXJ8cHJlbG9hZHxwcm9maWxlfHJhZGlvR3JvdXB8cmVhZE9ubHl8cmVmZXJyZXJQb2xpY3l8cmVsfHJlcXVpcmVkfHJldmVyc2VkfHJvbGV8cm93c3xyb3dTcGFufHNhbmRib3h8c2NvcGV8c2NvcGVkfHNjcm9sbGluZ3xzZWFtbGVzc3xzZWxlY3RlZHxzaGFwZXxzaXplfHNpemVzfHNsb3R8c3BhbnxzcGVsbENoZWNrfHNyY3xzcmNEb2N8c3JjTGFuZ3xzcmNTZXR8c3RhcnR8c3RlcHxzdHlsZXxzdW1tYXJ5fHRhYkluZGV4fHRhcmdldHx0aXRsZXx0eXBlfHVzZU1hcHx2YWx1ZXx3aWR0aHx3bW9kZXx3cmFwfGFib3V0fGRhdGF0eXBlfGlubGlzdHxwcmVmaXh8cHJvcGVydHl8cmVzb3VyY2V8dHlwZW9mfHZvY2FifGF1dG9DYXBpdGFsaXplfGF1dG9Db3JyZWN0fGF1dG9TYXZlfGNvbG9yfGluZXJ0fGl0ZW1Qcm9wfGl0ZW1TY29wZXxpdGVtVHlwZXxpdGVtSUR8aXRlbVJlZnxvbnxyZXN1bHRzfHNlY3VyaXR5fHVuc2VsZWN0YWJsZXxhY2NlbnRIZWlnaHR8YWNjdW11bGF0ZXxhZGRpdGl2ZXxhbGlnbm1lbnRCYXNlbGluZXxhbGxvd1Jlb3JkZXJ8YWxwaGFiZXRpY3xhbXBsaXR1ZGV8YXJhYmljRm9ybXxhc2NlbnR8YXR0cmlidXRlTmFtZXxhdHRyaWJ1dGVUeXBlfGF1dG9SZXZlcnNlfGF6aW11dGh8YmFzZUZyZXF1ZW5jeXxiYXNlbGluZVNoaWZ0fGJhc2VQcm9maWxlfGJib3h8YmVnaW58Ymlhc3xieXxjYWxjTW9kZXxjYXBIZWlnaHR8Y2xpcHxjbGlwUGF0aFVuaXRzfGNsaXBQYXRofGNsaXBSdWxlfGNvbG9ySW50ZXJwb2xhdGlvbnxjb2xvckludGVycG9sYXRpb25GaWx0ZXJzfGNvbG9yUHJvZmlsZXxjb2xvclJlbmRlcmluZ3xjb250ZW50U2NyaXB0VHlwZXxjb250ZW50U3R5bGVUeXBlfGN1cnNvcnxjeHxjeXxkfGRlY2VsZXJhdGV8ZGVzY2VudHxkaWZmdXNlQ29uc3RhbnR8ZGlyZWN0aW9ufGRpc3BsYXl8ZGl2aXNvcnxkb21pbmFudEJhc2VsaW5lfGR1cnxkeHxkeXxlZGdlTW9kZXxlbGV2YXRpb258ZW5hYmxlQmFja2dyb3VuZHxlbmR8ZXhwb25lbnR8ZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZHxmaWxsfGZpbGxPcGFjaXR5fGZpbGxSdWxlfGZpbHRlcnxmaWx0ZXJSZXN8ZmlsdGVyVW5pdHN8Zmxvb2RDb2xvcnxmbG9vZE9wYWNpdHl8Zm9jdXNhYmxlfGZvbnRGYW1pbHl8Zm9udFNpemV8Zm9udFNpemVBZGp1c3R8Zm9udFN0cmV0Y2h8Zm9udFN0eWxlfGZvbnRWYXJpYW50fGZvbnRXZWlnaHR8Zm9ybWF0fGZyb218ZnJ8Znh8Znl8ZzF8ZzJ8Z2x5cGhOYW1lfGdseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsfGdseXBoT3JpZW50YXRpb25WZXJ0aWNhbHxnbHlwaFJlZnxncmFkaWVudFRyYW5zZm9ybXxncmFkaWVudFVuaXRzfGhhbmdpbmd8aG9yaXpBZHZYfGhvcml6T3JpZ2luWHxpZGVvZ3JhcGhpY3xpbWFnZVJlbmRlcmluZ3xpbnxpbjJ8aW50ZXJjZXB0fGt8azF8azJ8azN8azR8a2VybmVsTWF0cml4fGtlcm5lbFVuaXRMZW5ndGh8a2VybmluZ3xrZXlQb2ludHN8a2V5U3BsaW5lc3xrZXlUaW1lc3xsZW5ndGhBZGp1c3R8bGV0dGVyU3BhY2luZ3xsaWdodGluZ0NvbG9yfGxpbWl0aW5nQ29uZUFuZ2xlfGxvY2FsfG1hcmtlckVuZHxtYXJrZXJNaWR8bWFya2VyU3RhcnR8bWFya2VySGVpZ2h0fG1hcmtlclVuaXRzfG1hcmtlcldpZHRofG1hc2t8bWFza0NvbnRlbnRVbml0c3xtYXNrVW5pdHN8bWF0aGVtYXRpY2FsfG1vZGV8bnVtT2N0YXZlc3xvZmZzZXR8b3BhY2l0eXxvcGVyYXRvcnxvcmRlcnxvcmllbnR8b3JpZW50YXRpb258b3JpZ2lufG92ZXJmbG93fG92ZXJsaW5lUG9zaXRpb258b3ZlcmxpbmVUaGlja25lc3N8cGFub3NlMXxwYWludE9yZGVyfHBhdGhMZW5ndGh8cGF0dGVybkNvbnRlbnRVbml0c3xwYXR0ZXJuVHJhbnNmb3JtfHBhdHRlcm5Vbml0c3xwb2ludGVyRXZlbnRzfHBvaW50c3xwb2ludHNBdFh8cG9pbnRzQXRZfHBvaW50c0F0WnxwcmVzZXJ2ZUFscGhhfHByZXNlcnZlQXNwZWN0UmF0aW98cHJpbWl0aXZlVW5pdHN8cnxyYWRpdXN8cmVmWHxyZWZZfHJlbmRlcmluZ0ludGVudHxyZXBlYXRDb3VudHxyZXBlYXREdXJ8cmVxdWlyZWRFeHRlbnNpb25zfHJlcXVpcmVkRmVhdHVyZXN8cmVzdGFydHxyZXN1bHR8cm90YXRlfHJ4fHJ5fHNjYWxlfHNlZWR8c2hhcGVSZW5kZXJpbmd8c2xvcGV8c3BhY2luZ3xzcGVjdWxhckNvbnN0YW50fHNwZWN1bGFyRXhwb25lbnR8c3BlZWR8c3ByZWFkTWV0aG9kfHN0YXJ0T2Zmc2V0fHN0ZERldmlhdGlvbnxzdGVtaHxzdGVtdnxzdGl0Y2hUaWxlc3xzdG9wQ29sb3J8c3RvcE9wYWNpdHl8c3RyaWtldGhyb3VnaFBvc2l0aW9ufHN0cmlrZXRocm91Z2hUaGlja25lc3N8c3RyaW5nfHN0cm9rZXxzdHJva2VEYXNoYXJyYXl8c3Ryb2tlRGFzaG9mZnNldHxzdHJva2VMaW5lY2FwfHN0cm9rZUxpbmVqb2lufHN0cm9rZU1pdGVybGltaXR8c3Ryb2tlT3BhY2l0eXxzdHJva2VXaWR0aHxzdXJmYWNlU2NhbGV8c3lzdGVtTGFuZ3VhZ2V8dGFibGVWYWx1ZXN8dGFyZ2V0WHx0YXJnZXRZfHRleHRBbmNob3J8dGV4dERlY29yYXRpb258dGV4dFJlbmRlcmluZ3x0ZXh0TGVuZ3RofHRvfHRyYW5zZm9ybXx1MXx1Mnx1bmRlcmxpbmVQb3NpdGlvbnx1bmRlcmxpbmVUaGlja25lc3N8dW5pY29kZXx1bmljb2RlQmlkaXx1bmljb2RlUmFuZ2V8dW5pdHNQZXJFbXx2QWxwaGFiZXRpY3x2SGFuZ2luZ3x2SWRlb2dyYXBoaWN8dk1hdGhlbWF0aWNhbHx2YWx1ZXN8dmVjdG9yRWZmZWN0fHZlcnNpb258dmVydEFkdll8dmVydE9yaWdpblh8dmVydE9yaWdpbll8dmlld0JveHx2aWV3VGFyZ2V0fHZpc2liaWxpdHl8d2lkdGhzfHdvcmRTcGFjaW5nfHdyaXRpbmdNb2RlfHh8eEhlaWdodHx4MXx4Mnx4Q2hhbm5lbFNlbGVjdG9yfHhsaW5rQWN0dWF0ZXx4bGlua0FyY3JvbGV8eGxpbmtIcmVmfHhsaW5rUm9sZXx4bGlua1Nob3d8eGxpbmtUaXRsZXx4bGlua1R5cGV8eG1sQmFzZXx4bWxuc3x4bWxuc1hsaW5rfHhtbExhbmd8eG1sU3BhY2V8eXx5MXx5Mnx5Q2hhbm5lbFNlbGVjdG9yfHp8em9vbUFuZFBhbnxmb3J8Y2xhc3N8YXV0b2ZvY3VzKXwoKFtEZF1bQWFdW1R0XVtBYV18W0FhXVtScl1bSWldW0FhXXx4KS0uKikpJC87IC8vIGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWJmZWU2OGE0Y2Q3ZTYwMDllZjYxZDIzXG5cbnZhciBpbmRleCA9IG1lbW9pemUoZnVuY3Rpb24gKHByb3ApIHtcbiAgcmV0dXJuIHJlYWN0UHJvcHNSZWdleC50ZXN0KHByb3ApIHx8IHByb3AuY2hhckNvZGVBdCgwKSA9PT0gMTExXG4gIC8qIG8gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDEpID09PSAxMTBcbiAgLyogbiAqL1xuICAmJiBwcm9wLmNoYXJDb2RlQXQoMikgPCA5MTtcbn1cbi8qIForMSAqL1xuKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iLCJmdW5jdGlvbiBtZW1vaXplKGZuKSB7XG4gIHZhciBjYWNoZSA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChjYWNoZVthcmddID09PSB1bmRlZmluZWQpIGNhY2hlW2FyZ10gPSBmbihhcmcpO1xuICAgIHJldHVybiBjYWNoZVthcmddO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplO1xuIiwiZnVuY3Rpb24gc3R5bGlzX21pbiAoVykge1xuICBmdW5jdGlvbiBNKGQsIGMsIGUsIGgsIGEpIHtcbiAgICBmb3IgKHZhciBtID0gMCwgYiA9IDAsIHYgPSAwLCBuID0gMCwgcSwgZywgeCA9IDAsIEsgPSAwLCBrLCB1ID0gayA9IHEgPSAwLCBsID0gMCwgciA9IDAsIEkgPSAwLCB0ID0gMCwgQiA9IGUubGVuZ3RoLCBKID0gQiAtIDEsIHksIGYgPSAnJywgcCA9ICcnLCBGID0gJycsIEcgPSAnJywgQzsgbCA8IEI7KSB7XG4gICAgICBnID0gZS5jaGFyQ29kZUF0KGwpO1xuICAgICAgbCA9PT0gSiAmJiAwICE9PSBiICsgbiArIHYgKyBtICYmICgwICE9PSBiICYmIChnID0gNDcgPT09IGIgPyAxMCA6IDQ3KSwgbiA9IHYgPSBtID0gMCwgQisrLCBKKyspO1xuXG4gICAgICBpZiAoMCA9PT0gYiArIG4gKyB2ICsgbSkge1xuICAgICAgICBpZiAobCA9PT0gSiAmJiAoMCA8IHIgJiYgKGYgPSBmLnJlcGxhY2UoTiwgJycpKSwgMCA8IGYudHJpbSgpLmxlbmd0aCkpIHtcbiAgICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBjYXNlIDU5OlxuICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBmICs9IGUuY2hhckF0KGwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGcgPSA1OTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgIGNhc2UgMTIzOlxuICAgICAgICAgICAgZiA9IGYudHJpbSgpO1xuICAgICAgICAgICAgcSA9IGYuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICAgIGsgPSAxO1xuXG4gICAgICAgICAgICBmb3IgKHQgPSArK2w7IGwgPCBCOykge1xuICAgICAgICAgICAgICBzd2l0Y2ggKGcgPSBlLmNoYXJDb2RlQXQobCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDEyMzpcbiAgICAgICAgICAgICAgICAgIGsrKztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAxMjU6XG4gICAgICAgICAgICAgICAgICBrLS07XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKGcgPSBlLmNoYXJDb2RlQXQobCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgICAgICAgICAgYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh1ID0gbCArIDE7IHUgPCBKOyArK3UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChlLmNoYXJDb2RlQXQodSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDQyID09PSBnICYmIDQyID09PSBlLmNoYXJDb2RlQXQodSAtIDEpICYmIGwgKyAyICE9PSB1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDQ3ID09PSBnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1O1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICAgICAgICBnKys7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgZysrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgZm9yICg7IGwrKyA8IEogJiYgZS5jaGFyQ29kZUF0KGwpICE9PSBnOykge1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoMCA9PT0gaykgYnJlYWs7XG4gICAgICAgICAgICAgIGwrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgayA9IGUuc3Vic3RyaW5nKHQsIGwpO1xuICAgICAgICAgICAgMCA9PT0gcSAmJiAocSA9IChmID0gZi5yZXBsYWNlKGNhLCAnJykudHJpbSgpKS5jaGFyQ29kZUF0KDApKTtcblxuICAgICAgICAgICAgc3dpdGNoIChxKSB7XG4gICAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgICAgMCA8IHIgJiYgKGYgPSBmLnJlcGxhY2UoTiwgJycpKTtcbiAgICAgICAgICAgICAgICBnID0gZi5jaGFyQ29kZUF0KDEpO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwMDpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTA5OlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgICAgICAgICByID0gYztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHIgPSBPO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGsgPSBNKGMsIHIsIGssIGcsIGEgKyAxKTtcbiAgICAgICAgICAgICAgICB0ID0gay5sZW5ndGg7XG4gICAgICAgICAgICAgICAgMCA8IEEgJiYgKHIgPSBYKE8sIGYsIEkpLCBDID0gSCgzLCBrLCByLCBjLCBELCB6LCB0LCBnLCBhLCBoKSwgZiA9IHIuam9pbignJyksIHZvaWQgMCAhPT0gQyAmJiAwID09PSAodCA9IChrID0gQy50cmltKCkpLmxlbmd0aCkgJiYgKGcgPSAwLCBrID0gJycpKTtcbiAgICAgICAgICAgICAgICBpZiAoMCA8IHQpIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICAgICAgICAgIGYgPSBmLnJlcGxhY2UoZGEsIGVhKTtcblxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDA6XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwOTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgJ3snICsgayArICd9JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgMTA3OlxuICAgICAgICAgICAgICAgICAgICBmID0gZi5yZXBsYWNlKGZhLCAnJDEgJDInKTtcbiAgICAgICAgICAgICAgICAgICAgayA9IGYgKyAneycgKyBrICsgJ30nO1xuICAgICAgICAgICAgICAgICAgICBrID0gMSA9PT0gdyB8fCAyID09PSB3ICYmIEwoJ0AnICsgaywgMykgPyAnQC13ZWJraXQtJyArIGsgKyAnQCcgKyBrIDogJ0AnICsgaztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgaywgMTEyID09PSBoICYmIChrID0gKHAgKz0gaywgJycpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgayA9ICcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgayA9IE0oYywgWChjLCBmLCBJKSwgaywgaCwgYSArIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBGICs9IGs7XG4gICAgICAgICAgICBrID0gSSA9IHIgPSB1ID0gcSA9IDA7XG4gICAgICAgICAgICBmID0gJyc7XG4gICAgICAgICAgICBnID0gZS5jaGFyQ29kZUF0KCsrbCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgIGNhc2UgNTk6XG4gICAgICAgICAgICBmID0gKDAgPCByID8gZi5yZXBsYWNlKE4sICcnKSA6IGYpLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICgxIDwgKHQgPSBmLmxlbmd0aCkpIHN3aXRjaCAoMCA9PT0gdSAmJiAocSA9IGYuY2hhckNvZGVBdCgwKSwgNDUgPT09IHEgfHwgOTYgPCBxICYmIDEyMyA+IHEpICYmICh0ID0gKGYgPSBmLnJlcGxhY2UoJyAnLCAnOicpKS5sZW5ndGgpLCAwIDwgQSAmJiB2b2lkIDAgIT09IChDID0gSCgxLCBmLCBjLCBkLCBELCB6LCBwLmxlbmd0aCwgaCwgYSwgaCkpICYmIDAgPT09ICh0ID0gKGYgPSBDLnRyaW0oKSkubGVuZ3RoKSAmJiAoZiA9ICdcXHgwMFxceDAwJyksIHEgPSBmLmNoYXJDb2RlQXQoMCksIGcgPSBmLmNoYXJDb2RlQXQoMSksIHEpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgICAgaWYgKDEwNSA9PT0gZyB8fCA5OSA9PT0gZykge1xuICAgICAgICAgICAgICAgICAgRyArPSBmICsgZS5jaGFyQXQobCk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICA1OCAhPT0gZi5jaGFyQ29kZUF0KHQgLSAxKSAmJiAocCArPSBQKGYsIHEsIGcsIGYuY2hhckNvZGVBdCgyKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgSSA9IHIgPSB1ID0gcSA9IDA7XG4gICAgICAgICAgICBmID0gJyc7XG4gICAgICAgICAgICBnID0gZS5jaGFyQ29kZUF0KCsrbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgIGNhc2UgMTM6XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgNDcgPT09IGIgPyBiID0gMCA6IDAgPT09IDEgKyBxICYmIDEwNyAhPT0gaCAmJiAwIDwgZi5sZW5ndGggJiYgKHIgPSAxLCBmICs9ICdcXHgwMCcpO1xuICAgICAgICAgIDAgPCBBICogWSAmJiBIKDAsIGYsIGMsIGQsIEQsIHosIHAubGVuZ3RoLCBoLCBhLCBoKTtcbiAgICAgICAgICB6ID0gMTtcbiAgICAgICAgICBEKys7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgY2FzZSAxMjU6XG4gICAgICAgICAgaWYgKDAgPT09IGIgKyBuICsgdiArIG0pIHtcbiAgICAgICAgICAgIHorKztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHorKztcbiAgICAgICAgICB5ID0gZS5jaGFyQXQobCk7XG5cbiAgICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgbSArIGIpIHN3aXRjaCAoeCkge1xuICAgICAgICAgICAgICAgIGNhc2UgNDQ6XG4gICAgICAgICAgICAgICAgY2FzZSA1ODpcbiAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgICAgIHkgPSAnJztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIDMyICE9PSBnICYmICh5ID0gJyAnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICB5ID0gJ1xcXFwwJztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgIHkgPSAnXFxcXGYnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgeSA9ICdcXFxcdic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIG0gJiYgKHIgPSBJID0gMSwgeSA9ICdcXGYnICsgeSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDEwODpcbiAgICAgICAgICAgICAgaWYgKDAgPT09IG4gKyBiICsgbSArIEUgJiYgMCA8IHUpIHN3aXRjaCAobCAtIHUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAxMTIgPT09IHggJiYgNTggPT09IGUuY2hhckNvZGVBdChsIC0gMykgJiYgKEUgPSB4KTtcblxuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgIDExMSA9PT0gSyAmJiAoRSA9IEspO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDU4OlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIG0gJiYgKHUgPSBsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDQ6XG4gICAgICAgICAgICAgIDAgPT09IGIgKyB2ICsgbiArIG0gJiYgKHIgPSAxLCB5ICs9ICdcXHInKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAwID09PSBiICYmIChuID0gbiA9PT0gZyA/IDAgOiAwID09PSBuID8gZyA6IG4pO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA5MTpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyB2ICYmIG0rKztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgOTM6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgdiAmJiBtLS07XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQxOlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIG0gJiYgdi0tO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgaWYgKDAgPT09IG4gKyBiICsgbSkge1xuICAgICAgICAgICAgICAgIGlmICgwID09PSBxKSBzd2l0Y2ggKDIgKiB4ICsgMyAqIEspIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgNTMzOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHYrKztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAwID09PSBiICsgdiArIG4gKyBtICsgdSArIGsgJiYgKGsgPSAxKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICBpZiAoISgwIDwgbiArIG0gKyB2KSkgc3dpdGNoIChiKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgc3dpdGNoICgyICogZyArIDMgKiBlLmNoYXJDb2RlQXQobCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjM1OlxuICAgICAgICAgICAgICAgICAgICAgIGIgPSA0NztcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIDIyMDpcbiAgICAgICAgICAgICAgICAgICAgICB0ID0gbCwgYiA9IDQyO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICAgICAgICA0NyA9PT0gZyAmJiA0MiA9PT0geCAmJiB0ICsgMiAhPT0gbCAmJiAoMzMgPT09IGUuY2hhckNvZGVBdCh0ICsgMikgJiYgKHAgKz0gZS5zdWJzdHJpbmcodCwgbCArIDEpKSwgeSA9ICcnLCBiID0gMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAwID09PSBiICYmIChmICs9IHkpO1xuICAgICAgfVxuXG4gICAgICBLID0geDtcbiAgICAgIHggPSBnO1xuICAgICAgbCsrO1xuICAgIH1cblxuICAgIHQgPSBwLmxlbmd0aDtcblxuICAgIGlmICgwIDwgdCkge1xuICAgICAgciA9IGM7XG4gICAgICBpZiAoMCA8IEEgJiYgKEMgPSBIKDIsIHAsIHIsIGQsIEQsIHosIHQsIGgsIGEsIGgpLCB2b2lkIDAgIT09IEMgJiYgMCA9PT0gKHAgPSBDKS5sZW5ndGgpKSByZXR1cm4gRyArIHAgKyBGO1xuICAgICAgcCA9IHIuam9pbignLCcpICsgJ3snICsgcCArICd9JztcblxuICAgICAgaWYgKDAgIT09IHcgKiBFKSB7XG4gICAgICAgIDIgIT09IHcgfHwgTChwLCAyKSB8fCAoRSA9IDApO1xuXG4gICAgICAgIHN3aXRjaCAoRSkge1xuICAgICAgICAgIGNhc2UgMTExOlxuICAgICAgICAgICAgcCA9IHAucmVwbGFjZShoYSwgJzotbW96LSQxJykgKyBwO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDExMjpcbiAgICAgICAgICAgIHAgPSBwLnJlcGxhY2UoUSwgJzo6LXdlYmtpdC1pbnB1dC0kMScpICsgcC5yZXBsYWNlKFEsICc6Oi1tb3otJDEnKSArIHAucmVwbGFjZShRLCAnOi1tcy1pbnB1dC0kMScpICsgcDtcbiAgICAgICAgfVxuXG4gICAgICAgIEUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBHICsgcCArIEY7XG4gIH1cblxuICBmdW5jdGlvbiBYKGQsIGMsIGUpIHtcbiAgICB2YXIgaCA9IGMudHJpbSgpLnNwbGl0KGlhKTtcbiAgICBjID0gaDtcbiAgICB2YXIgYSA9IGgubGVuZ3RoLFxuICAgICAgICBtID0gZC5sZW5ndGg7XG5cbiAgICBzd2l0Y2ggKG0pIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdmFyIGIgPSAwO1xuXG4gICAgICAgIGZvciAoZCA9IDAgPT09IG0gPyAnJyA6IGRbMF0gKyAnICc7IGIgPCBhOyArK2IpIHtcbiAgICAgICAgICBjW2JdID0gWihkLCBjW2JdLCBlKS50cmltKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdmFyIHYgPSBiID0gMDtcblxuICAgICAgICBmb3IgKGMgPSBbXTsgYiA8IGE7ICsrYikge1xuICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbTsgKytuKSB7XG4gICAgICAgICAgICBjW3YrK10gPSBaKGRbbl0gKyAnICcsIGhbYl0sIGUpLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBjO1xuICB9XG5cbiAgZnVuY3Rpb24gWihkLCBjLCBlKSB7XG4gICAgdmFyIGggPSBjLmNoYXJDb2RlQXQoMCk7XG4gICAgMzMgPiBoICYmIChoID0gKGMgPSBjLnRyaW0oKSkuY2hhckNvZGVBdCgwKSk7XG5cbiAgICBzd2l0Y2ggKGgpIHtcbiAgICAgIGNhc2UgMzg6XG4gICAgICAgIHJldHVybiBjLnJlcGxhY2UoRiwgJyQxJyArIGQudHJpbSgpKTtcblxuICAgICAgY2FzZSA1ODpcbiAgICAgICAgcmV0dXJuIGQudHJpbSgpICsgYy5yZXBsYWNlKEYsICckMScgKyBkLnRyaW0oKSk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICgwIDwgMSAqIGUgJiYgMCA8IGMuaW5kZXhPZignXFxmJykpIHJldHVybiBjLnJlcGxhY2UoRiwgKDU4ID09PSBkLmNoYXJDb2RlQXQoMCkgPyAnJyA6ICckMScpICsgZC50cmltKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBkICsgYztcbiAgfVxuXG4gIGZ1bmN0aW9uIFAoZCwgYywgZSwgaCkge1xuICAgIHZhciBhID0gZCArICc7JyxcbiAgICAgICAgbSA9IDIgKiBjICsgMyAqIGUgKyA0ICogaDtcblxuICAgIGlmICg5NDQgPT09IG0pIHtcbiAgICAgIGQgPSBhLmluZGV4T2YoJzonLCA5KSArIDE7XG4gICAgICB2YXIgYiA9IGEuc3Vic3RyaW5nKGQsIGEubGVuZ3RoIC0gMSkudHJpbSgpO1xuICAgICAgYiA9IGEuc3Vic3RyaW5nKDAsIGQpLnRyaW0oKSArIGIgKyAnOyc7XG4gICAgICByZXR1cm4gMSA9PT0gdyB8fCAyID09PSB3ICYmIEwoYiwgMSkgPyAnLXdlYmtpdC0nICsgYiArIGIgOiBiO1xuICAgIH1cblxuICAgIGlmICgwID09PSB3IHx8IDIgPT09IHcgJiYgIUwoYSwgMSkpIHJldHVybiBhO1xuXG4gICAgc3dpdGNoIChtKSB7XG4gICAgICBjYXNlIDEwMTU6XG4gICAgICAgIHJldHVybiA5NyA9PT0gYS5jaGFyQ29kZUF0KDEwKSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgOTUxOlxuICAgICAgICByZXR1cm4gMTE2ID09PSBhLmNoYXJDb2RlQXQoMykgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDk2MzpcbiAgICAgICAgcmV0dXJuIDExMCA9PT0gYS5jaGFyQ29kZUF0KDUpID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcblxuICAgICAgY2FzZSAxMDA5OlxuICAgICAgICBpZiAoMTAwICE9PSBhLmNoYXJDb2RlQXQoNCkpIGJyZWFrO1xuXG4gICAgICBjYXNlIDk2OTpcbiAgICAgIGNhc2UgOTQyOlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDk3ODpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tb3otJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDEwMTk6XG4gICAgICBjYXNlIDk4MzpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tb3otJyArIGEgKyAnLW1zLScgKyBhICsgYTtcblxuICAgICAgY2FzZSA4ODM6XG4gICAgICAgIGlmICg0NSA9PT0gYS5jaGFyQ29kZUF0KDgpKSByZXR1cm4gJy13ZWJraXQtJyArIGEgKyBhO1xuICAgICAgICBpZiAoMCA8IGEuaW5kZXhPZignaW1hZ2Utc2V0KCcsIDExKSkgcmV0dXJuIGEucmVwbGFjZShqYSwgJyQxLXdlYmtpdC0kMicpICsgYTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTMyOlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg0KSkgc3dpdGNoIChhLmNoYXJDb2RlQXQoNSkpIHtcbiAgICAgICAgICBjYXNlIDEwMzpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC1ib3gtJyArIGEucmVwbGFjZSgnLWdyb3cnLCAnJykgKyAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnZ3JvdycsICdwb3NpdGl2ZScpICsgYTtcblxuICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYS5yZXBsYWNlKCdzaHJpbmsnLCAnbmVnYXRpdmUnKSArIGE7XG5cbiAgICAgICAgICBjYXNlIDk4OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYS5yZXBsYWNlKCdiYXNpcycsICdwcmVmZXJyZWQtc2l6ZScpICsgYTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhICsgYTtcblxuICAgICAgY2FzZSA5NjQ6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgMTAyMzpcbiAgICAgICAgaWYgKDk5ICE9PSBhLmNoYXJDb2RlQXQoOCkpIGJyZWFrO1xuICAgICAgICBiID0gYS5zdWJzdHJpbmcoYS5pbmRleE9mKCc6JywgMTUpKS5yZXBsYWNlKCdmbGV4LScsICcnKS5yZXBsYWNlKCdzcGFjZS1iZXR3ZWVuJywgJ2p1c3RpZnknKTtcbiAgICAgICAgcmV0dXJuICctd2Via2l0LWJveC1wYWNrJyArIGIgKyAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC1wYWNrJyArIGIgKyBhO1xuXG4gICAgICBjYXNlIDEwMDU6XG4gICAgICAgIHJldHVybiBrYS50ZXN0KGEpID8gYS5yZXBsYWNlKGFhLCAnOi13ZWJraXQtJykgKyBhLnJlcGxhY2UoYWEsICc6LW1vei0nKSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDFlMzpcbiAgICAgICAgYiA9IGEuc3Vic3RyaW5nKDEzKS50cmltKCk7XG4gICAgICAgIGMgPSBiLmluZGV4T2YoJy0nKSArIDE7XG5cbiAgICAgICAgc3dpdGNoIChiLmNoYXJDb2RlQXQoMCkgKyBiLmNoYXJDb2RlQXQoYykpIHtcbiAgICAgICAgICBjYXNlIDIyNjpcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ3RiJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjMyOlxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAndGItcmwnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAyMjA6XG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICdscicpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBiICsgYTtcblxuICAgICAgY2FzZSAxMDE3OlxuICAgICAgICBpZiAoLTEgPT09IGEuaW5kZXhPZignc3RpY2t5JywgOSkpIGJyZWFrO1xuXG4gICAgICBjYXNlIDk3NTpcbiAgICAgICAgYyA9IChhID0gZCkubGVuZ3RoIC0gMTA7XG4gICAgICAgIGIgPSAoMzMgPT09IGEuY2hhckNvZGVBdChjKSA/IGEuc3Vic3RyaW5nKDAsIGMpIDogYSkuc3Vic3RyaW5nKGQuaW5kZXhPZignOicsIDcpICsgMSkudHJpbSgpO1xuXG4gICAgICAgIHN3aXRjaCAobSA9IGIuY2hhckNvZGVBdCgwKSArIChiLmNoYXJDb2RlQXQoNykgfCAwKSkge1xuICAgICAgICAgIGNhc2UgMjAzOlxuICAgICAgICAgICAgaWYgKDExMSA+IGIuY2hhckNvZGVBdCg4KSkgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIGEgPSBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgJzsnICsgYTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAyMDc6XG4gICAgICAgICAgY2FzZSAxMDI6XG4gICAgICAgICAgICBhID0gYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyAoMTAyIDwgbSA/ICdpbmxpbmUtJyA6ICcnKSArICdib3gnKSArICc7JyArIGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgYikgKyAnOycgKyBhLnJlcGxhY2UoYiwgJy1tcy0nICsgYiArICdib3gnKSArICc7JyArIGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYSArICc7JztcblxuICAgICAgY2FzZSA5Mzg6XG4gICAgICAgIGlmICg0NSA9PT0gYS5jaGFyQ29kZUF0KDUpKSBzd2l0Y2ggKGEuY2hhckNvZGVBdCg2KSkge1xuICAgICAgICAgIGNhc2UgMTA1OlxuICAgICAgICAgICAgcmV0dXJuIGIgPSBhLnJlcGxhY2UoJy1pdGVtcycsICcnKSwgJy13ZWJraXQtJyArIGEgKyAnLXdlYmtpdC1ib3gtJyArIGIgKyAnLW1zLWZsZXgtJyArIGIgKyBhO1xuXG4gICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtaXRlbS0nICsgYS5yZXBsYWNlKGJhLCAnJykgKyBhO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC1saW5lLXBhY2snICsgYS5yZXBsYWNlKCdhbGlnbi1jb250ZW50JywgJycpLnJlcGxhY2UoYmEsICcnKSArIGE7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTczOlxuICAgICAgY2FzZSA5ODk6XG4gICAgICAgIGlmICg0NSAhPT0gYS5jaGFyQ29kZUF0KDMpIHx8IDEyMiA9PT0gYS5jaGFyQ29kZUF0KDQpKSBicmVhaztcblxuICAgICAgY2FzZSA5MzE6XG4gICAgICBjYXNlIDk1MzpcbiAgICAgICAgaWYgKCEwID09PSBsYS50ZXN0KGQpKSByZXR1cm4gMTE1ID09PSAoYiA9IGQuc3Vic3RyaW5nKGQuaW5kZXhPZignOicpICsgMSkpLmNoYXJDb2RlQXQoMCkgPyBQKGQucmVwbGFjZSgnc3RyZXRjaCcsICdmaWxsLWF2YWlsYWJsZScpLCBjLCBlLCBoKS5yZXBsYWNlKCc6ZmlsbC1hdmFpbGFibGUnLCAnOnN0cmV0Y2gnKSA6IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgYikgKyBhLnJlcGxhY2UoYiwgJy1tb3otJyArIGIucmVwbGFjZSgnZmlsbC0nLCAnJykpICsgYTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTYyOlxuICAgICAgICBpZiAoYSA9ICctd2Via2l0LScgKyBhICsgKDEwMiA9PT0gYS5jaGFyQ29kZUF0KDUpID8gJy1tcy0nICsgYSA6ICcnKSArIGEsIDIxMSA9PT0gZSArIGggJiYgMTA1ID09PSBhLmNoYXJDb2RlQXQoMTMpICYmIDAgPCBhLmluZGV4T2YoJ3RyYW5zZm9ybScsIDEwKSkgcmV0dXJuIGEuc3Vic3RyaW5nKDAsIGEuaW5kZXhPZignOycsIDI3KSArIDEpLnJlcGxhY2UobWEsICckMS13ZWJraXQtJDInKSArIGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBmdW5jdGlvbiBMKGQsIGMpIHtcbiAgICB2YXIgZSA9IGQuaW5kZXhPZigxID09PSBjID8gJzonIDogJ3snKSxcbiAgICAgICAgaCA9IGQuc3Vic3RyaW5nKDAsIDMgIT09IGMgPyBlIDogMTApO1xuICAgIGUgPSBkLnN1YnN0cmluZyhlICsgMSwgZC5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gUigyICE9PSBjID8gaCA6IGgucmVwbGFjZShuYSwgJyQxJyksIGUsIGMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWEoZCwgYykge1xuICAgIHZhciBlID0gUChjLCBjLmNoYXJDb2RlQXQoMCksIGMuY2hhckNvZGVBdCgxKSwgYy5jaGFyQ29kZUF0KDIpKTtcbiAgICByZXR1cm4gZSAhPT0gYyArICc7JyA/IGUucmVwbGFjZShvYSwgJyBvciAoJDEpJykuc3Vic3RyaW5nKDQpIDogJygnICsgYyArICcpJztcbiAgfVxuXG4gIGZ1bmN0aW9uIEgoZCwgYywgZSwgaCwgYSwgbSwgYiwgdiwgbiwgcSkge1xuICAgIGZvciAodmFyIGcgPSAwLCB4ID0gYywgdzsgZyA8IEE7ICsrZykge1xuICAgICAgc3dpdGNoICh3ID0gU1tnXS5jYWxsKEIsIGQsIHgsIGUsIGgsIGEsIG0sIGIsIHYsIG4sIHEpKSB7XG4gICAgICAgIGNhc2Ugdm9pZCAwOlxuICAgICAgICBjYXNlICExOlxuICAgICAgICBjYXNlICEwOlxuICAgICAgICBjYXNlIG51bGw6XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB4ID0gdztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoeCAhPT0gYykgcmV0dXJuIHg7XG4gIH1cblxuICBmdW5jdGlvbiBUKGQpIHtcbiAgICBzd2l0Y2ggKGQpIHtcbiAgICAgIGNhc2Ugdm9pZCAwOlxuICAgICAgY2FzZSBudWxsOlxuICAgICAgICBBID0gUy5sZW5ndGggPSAwO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBkKSBTW0ErK10gPSBkO2Vsc2UgaWYgKCdvYmplY3QnID09PSB0eXBlb2YgZCkgZm9yICh2YXIgYyA9IDAsIGUgPSBkLmxlbmd0aDsgYyA8IGU7ICsrYykge1xuICAgICAgICAgIFQoZFtjXSk7XG4gICAgICAgIH0gZWxzZSBZID0gISFkIHwgMDtcbiAgICB9XG5cbiAgICByZXR1cm4gVDtcbiAgfVxuXG4gIGZ1bmN0aW9uIFUoZCkge1xuICAgIGQgPSBkLnByZWZpeDtcbiAgICB2b2lkIDAgIT09IGQgJiYgKFIgPSBudWxsLCBkID8gJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGQgPyB3ID0gMSA6ICh3ID0gMiwgUiA9IGQpIDogdyA9IDApO1xuICAgIHJldHVybiBVO1xuICB9XG5cbiAgZnVuY3Rpb24gQihkLCBjKSB7XG4gICAgdmFyIGUgPSBkO1xuICAgIDMzID4gZS5jaGFyQ29kZUF0KDApICYmIChlID0gZS50cmltKCkpO1xuICAgIFYgPSBlO1xuICAgIGUgPSBbVl07XG5cbiAgICBpZiAoMCA8IEEpIHtcbiAgICAgIHZhciBoID0gSCgtMSwgYywgZSwgZSwgRCwgeiwgMCwgMCwgMCwgMCk7XG4gICAgICB2b2lkIDAgIT09IGggJiYgJ3N0cmluZycgPT09IHR5cGVvZiBoICYmIChjID0gaCk7XG4gICAgfVxuXG4gICAgdmFyIGEgPSBNKE8sIGUsIGMsIDAsIDApO1xuICAgIDAgPCBBICYmIChoID0gSCgtMiwgYSwgZSwgZSwgRCwgeiwgYS5sZW5ndGgsIDAsIDAsIDApLCB2b2lkIDAgIT09IGggJiYgKGEgPSBoKSk7XG4gICAgViA9ICcnO1xuICAgIEUgPSAwO1xuICAgIHogPSBEID0gMTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIHZhciBjYSA9IC9eXFwwKy9nLFxuICAgICAgTiA9IC9bXFwwXFxyXFxmXS9nLFxuICAgICAgYWEgPSAvOiAqL2csXG4gICAgICBrYSA9IC96b298Z3JhLyxcbiAgICAgIG1hID0gLyhbLDogXSkodHJhbnNmb3JtKS9nLFxuICAgICAgaWEgPSAvLFxccis/L2csXG4gICAgICBGID0gLyhbXFx0XFxyXFxuIF0pKlxcZj8mL2csXG4gICAgICBmYSA9IC9AKGtcXHcrKVxccyooXFxTKilcXHMqLyxcbiAgICAgIFEgPSAvOjoocGxhY2UpL2csXG4gICAgICBoYSA9IC86KHJlYWQtb25seSkvZyxcbiAgICAgIEcgPSAvW3N2aF1cXHcrLVt0YmxyXXsyfS8sXG4gICAgICBkYSA9IC9cXChcXHMqKC4qKVxccypcXCkvZyxcbiAgICAgIG9hID0gLyhbXFxzXFxTXSo/KTsvZyxcbiAgICAgIGJhID0gLy1zZWxmfGZsZXgtL2csXG4gICAgICBuYSA9IC9bXl0qPyg6W3JwXVtlbF1hW1xcdy1dKylbXl0qLyxcbiAgICAgIGxhID0gL3N0cmV0Y2h8OlxccypcXHcrXFwtKD86Y29udGV8YXZhaWwpLyxcbiAgICAgIGphID0gLyhbXi1dKShpbWFnZS1zZXRcXCgpLyxcbiAgICAgIHogPSAxLFxuICAgICAgRCA9IDEsXG4gICAgICBFID0gMCxcbiAgICAgIHcgPSAxLFxuICAgICAgTyA9IFtdLFxuICAgICAgUyA9IFtdLFxuICAgICAgQSA9IDAsXG4gICAgICBSID0gbnVsbCxcbiAgICAgIFkgPSAwLFxuICAgICAgViA9ICcnO1xuICBCLnVzZSA9IFQ7XG4gIEIuc2V0ID0gVTtcbiAgdm9pZCAwICE9PSBXICYmIFUoVyk7XG4gIHJldHVybiBCO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsaXNfbWluO1xuIiwidmFyIHVuaXRsZXNzS2V5cyA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDEsXG4gIGJvcmRlckltYWdlT3V0c2V0OiAxLFxuICBib3JkZXJJbWFnZVNsaWNlOiAxLFxuICBib3JkZXJJbWFnZVdpZHRoOiAxLFxuICBib3hGbGV4OiAxLFxuICBib3hGbGV4R3JvdXA6IDEsXG4gIGJveE9yZGluYWxHcm91cDogMSxcbiAgY29sdW1uQ291bnQ6IDEsXG4gIGNvbHVtbnM6IDEsXG4gIGZsZXg6IDEsXG4gIGZsZXhHcm93OiAxLFxuICBmbGV4UG9zaXRpdmU6IDEsXG4gIGZsZXhTaHJpbms6IDEsXG4gIGZsZXhOZWdhdGl2ZTogMSxcbiAgZmxleE9yZGVyOiAxLFxuICBncmlkUm93OiAxLFxuICBncmlkUm93RW5kOiAxLFxuICBncmlkUm93U3BhbjogMSxcbiAgZ3JpZFJvd1N0YXJ0OiAxLFxuICBncmlkQ29sdW1uOiAxLFxuICBncmlkQ29sdW1uRW5kOiAxLFxuICBncmlkQ29sdW1uU3BhbjogMSxcbiAgZ3JpZENvbHVtblN0YXJ0OiAxLFxuICBtc0dyaWRSb3c6IDEsXG4gIG1zR3JpZFJvd1NwYW46IDEsXG4gIG1zR3JpZENvbHVtbjogMSxcbiAgbXNHcmlkQ29sdW1uU3BhbjogMSxcbiAgZm9udFdlaWdodDogMSxcbiAgbGluZUhlaWdodDogMSxcbiAgb3BhY2l0eTogMSxcbiAgb3JkZXI6IDEsXG4gIG9ycGhhbnM6IDEsXG4gIHRhYlNpemU6IDEsXG4gIHdpZG93czogMSxcbiAgekluZGV4OiAxLFxuICB6b29tOiAxLFxuICBXZWJraXRMaW5lQ2xhbXA6IDEsXG4gIC8vIFNWRy1yZWxhdGVkIHByb3BlcnRpZXNcbiAgZmlsbE9wYWNpdHk6IDEsXG4gIGZsb29kT3BhY2l0eTogMSxcbiAgc3RvcE9wYWNpdHk6IDEsXG4gIHN0cm9rZURhc2hhcnJheTogMSxcbiAgc3Ryb2tlRGFzaG9mZnNldDogMSxcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogMSxcbiAgc3Ryb2tlT3BhY2l0eTogMSxcbiAgc3Ryb2tlV2lkdGg6IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaXRsZXNzS2V5cztcbiIsImltcG9ydCB7IHR5cGVPZiwgaXNFbGVtZW50LCBpc1ZhbGlkRWxlbWVudFR5cGUgfSBmcm9tICdyZWFjdC1pcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZU1lbW8sIHVzZUVmZmVjdCwgdXNlUmVmLCBjcmVhdGVFbGVtZW50LCB1c2VEZWJ1Z1ZhbHVlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHNoYWxsb3dlcXVhbCBmcm9tICdzaGFsbG93ZXF1YWwnO1xuaW1wb3J0IFN0eWxpcyBmcm9tICdAZW1vdGlvbi9zdHlsaXMnO1xuaW1wb3J0IHVuaXRsZXNzIGZyb20gJ0BlbW90aW9uL3VuaXRsZXNzJztcbmltcG9ydCB2YWxpZEF0dHIgZnJvbSAnQGVtb3Rpb24vaXMtcHJvcC12YWxpZCc7XG5pbXBvcnQgaG9pc3QgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuLy8gXG52YXIgaW50ZXJsZWF2ZSA9IChmdW5jdGlvbiAoc3RyaW5ncywgaW50ZXJwb2xhdGlvbnMpIHtcbiAgdmFyIHJlc3VsdCA9IFtzdHJpbmdzWzBdXTtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gaW50ZXJwb2xhdGlvbnMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICByZXN1bHQucHVzaChpbnRlcnBvbGF0aW9uc1tpXSwgc3RyaW5nc1tpICsgMV0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG4vLyBcbnZhciBpc1BsYWluT2JqZWN0ID0gKGZ1bmN0aW9uICh4KSB7XG4gIHJldHVybiB4ICE9PSBudWxsICYmIHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiAoeC50b1N0cmluZyA/IHgudG9TdHJpbmcoKSA6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSkgPT09ICdbb2JqZWN0IE9iamVjdF0nICYmICF0eXBlT2YoeCk7XG59KTtcblxuLy8gXG52YXIgRU1QVFlfQVJSQVkgPSBPYmplY3QuZnJlZXplKFtdKTtcbnZhciBFTVBUWV9PQkpFQ1QgPSBPYmplY3QuZnJlZXplKHt9KTtcblxuLy8gXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHRlc3QpIHtcbiAgcmV0dXJuIHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nO1xufVxuXG4vLyBcbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodGFyZ2V0KSB7XG4gIHJldHVybiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnICYmIHRhcmdldCA6IGZhbHNlKSB8fCAvLyAkRmxvd0ZpeE1lXG4gIHRhcmdldC5kaXNwbGF5TmFtZSB8fCAvLyAkRmxvd0ZpeE1lXG4gIHRhcmdldC5uYW1lIHx8ICdDb21wb25lbnQnO1xufVxuXG4vLyBcbmZ1bmN0aW9uIGlzU3RhdGVsZXNzRnVuY3Rpb24odGVzdCkge1xuICByZXR1cm4gdHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicgJiYgISh0ZXN0LnByb3RvdHlwZSAmJiB0ZXN0LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuLy8gXG5mdW5jdGlvbiBpc1N0eWxlZENvbXBvbmVudCh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldCAmJiB0eXBlb2YgdGFyZ2V0LnN0eWxlZENvbXBvbmVudElkID09PSAnc3RyaW5nJztcbn1cblxuLy8gXG52YXIgU0NfQVRUUiA9IHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0FUVFIgfHwgcHJvY2Vzcy5lbnYuU0NfQVRUUikgfHwgJ2RhdGEtc3R5bGVkJztcbnZhciBTQ19BVFRSX0FDVElWRSA9ICdhY3RpdmUnO1xudmFyIFNDX0FUVFJfVkVSU0lPTiA9ICdkYXRhLXN0eWxlZC12ZXJzaW9uJztcbnZhciBTQ19WRVJTSU9OID0gXCI1LjEuMVwiO1xudmFyIFNQTElUVEVSID0gJy8qIXNjKi9cXG4nO1xudmFyIElTX0JST1dTRVIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnSFRNTEVsZW1lbnQnIGluIHdpbmRvdztcbnZhciBESVNBQkxFX1NQRUVEWSA9IHR5cGVvZiBTQ19ESVNBQkxFX1NQRUVEWSA9PT0gJ2Jvb2xlYW4nICYmIFNDX0RJU0FCTEVfU1BFRURZIHx8IHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0RJU0FCTEVfU1BFRURZIHx8IHByb2Nlc3MuZW52LlNDX0RJU0FCTEVfU1BFRURZKSB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nOyAvLyBTaGFyZWQgZW1wdHkgZXhlY3V0aW9uIGNvbnRleHQgd2hlbiBnZW5lcmF0aW5nIHN0YXRpYyBzdHlsZXNcblxudmFyIFNUQVRJQ19FWEVDVVRJT05fQ09OVEVYVCA9IHt9O1xuXG4vLyBcblxuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlLCBuby11bmRlZiAqL1xudmFyIGdldE5vbmNlID0gZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG4gIHJldHVybiB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xufTtcblxudmFyIGVycm9yTWFwID0ge1xuICBcIjFcIjogXCJDYW5ub3QgY3JlYXRlIHN0eWxlZC1jb21wb25lbnQgZm9yIGNvbXBvbmVudDogJXMuXFxuXFxuXCIsXG4gIFwiMlwiOiBcIkNhbid0IGNvbGxlY3Qgc3R5bGVzIG9uY2UgeW91J3ZlIGNvbnN1bWVkIGEgYFNlcnZlclN0eWxlU2hlZXRgJ3Mgc3R5bGVzISBgU2VydmVyU3R5bGVTaGVldGAgaXMgYSBvbmUgb2ZmIGluc3RhbmNlIGZvciBlYWNoIHNlcnZlci1zaWRlIHJlbmRlciBjeWNsZS5cXG5cXG4tIEFyZSB5b3UgdHJ5aW5nIHRvIHJldXNlIGl0IGFjcm9zcyByZW5kZXJzP1xcbi0gQXJlIHlvdSBhY2NpZGVudGFsbHkgY2FsbGluZyBjb2xsZWN0U3R5bGVzIHR3aWNlP1xcblxcblwiLFxuICBcIjNcIjogXCJTdHJlYW1pbmcgU1NSIGlzIG9ubHkgc3VwcG9ydGVkIGluIGEgTm9kZS5qcyBlbnZpcm9ubWVudDsgUGxlYXNlIGRvIG5vdCB0cnkgdG8gY2FsbCB0aGlzIG1ldGhvZCBpbiB0aGUgYnJvd3Nlci5cXG5cXG5cIixcbiAgXCI0XCI6IFwiVGhlIGBTdHlsZVNoZWV0TWFuYWdlcmAgZXhwZWN0cyBhIHZhbGlkIHRhcmdldCBvciBzaGVldCBwcm9wIVxcblxcbi0gRG9lcyB0aGlzIGVycm9yIG9jY3VyIG9uIHRoZSBjbGllbnQgYW5kIGlzIHlvdXIgdGFyZ2V0IGZhbHN5P1xcbi0gRG9lcyB0aGlzIGVycm9yIG9jY3VyIG9uIHRoZSBzZXJ2ZXIgYW5kIGlzIHRoZSBzaGVldCBmYWxzeT9cXG5cXG5cIixcbiAgXCI1XCI6IFwiVGhlIGNsb25lIG1ldGhvZCBjYW5ub3QgYmUgdXNlZCBvbiB0aGUgY2xpZW50IVxcblxcbi0gQXJlIHlvdSBydW5uaW5nIGluIGEgY2xpZW50LWxpa2UgZW52aXJvbm1lbnQgb24gdGhlIHNlcnZlcj9cXG4tIEFyZSB5b3UgdHJ5aW5nIHRvIHJ1biBTU1Igb24gdGhlIGNsaWVudD9cXG5cXG5cIixcbiAgXCI2XCI6IFwiVHJ5aW5nIHRvIGluc2VydCBhIG5ldyBzdHlsZSB0YWcsIGJ1dCB0aGUgZ2l2ZW4gTm9kZSBpcyB1bm1vdW50ZWQhXFxuXFxuLSBBcmUgeW91IHVzaW5nIGEgY3VzdG9tIHRhcmdldCB0aGF0IGlzbid0IG1vdW50ZWQ/XFxuLSBEb2VzIHlvdXIgZG9jdW1lbnQgbm90IGhhdmUgYSB2YWxpZCBoZWFkIGVsZW1lbnQ/XFxuLSBIYXZlIHlvdSBhY2NpZGVudGFsbHkgcmVtb3ZlZCBhIHN0eWxlIHRhZyBtYW51YWxseT9cXG5cXG5cIixcbiAgXCI3XCI6IFwiVGhlbWVQcm92aWRlcjogUGxlYXNlIHJldHVybiBhbiBvYmplY3QgZnJvbSB5b3VyIFxcXCJ0aGVtZVxcXCIgcHJvcCBmdW5jdGlvbiwgZS5nLlxcblxcbmBgYGpzXFxudGhlbWU9eygpID0+ICh7fSl9XFxuYGBgXFxuXFxuXCIsXG4gIFwiOFwiOiBcIlRoZW1lUHJvdmlkZXI6IFBsZWFzZSBtYWtlIHlvdXIgXFxcInRoZW1lXFxcIiBwcm9wIGFuIG9iamVjdC5cXG5cXG5cIixcbiAgXCI5XCI6IFwiTWlzc2luZyBkb2N1bWVudCBgPGhlYWQ+YFxcblxcblwiLFxuICBcIjEwXCI6IFwiQ2Fubm90IGZpbmQgYSBTdHlsZVNoZWV0IGluc3RhbmNlLiBVc3VhbGx5IHRoaXMgaGFwcGVucyBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgY29waWVzIG9mIHN0eWxlZC1jb21wb25lbnRzIGxvYWRlZCBhdCBvbmNlLiBDaGVjayBvdXQgdGhpcyBpc3N1ZSBmb3IgaG93IHRvIHRyb3VibGVzaG9vdCBhbmQgZml4IHRoZSBjb21tb24gY2FzZXMgd2hlcmUgdGhpcyBzaXR1YXRpb24gY2FuIGhhcHBlbjogaHR0cHM6Ly9naXRodWIuY29tL3N0eWxlZC1jb21wb25lbnRzL3N0eWxlZC1jb21wb25lbnRzL2lzc3Vlcy8xOTQxI2lzc3VlY29tbWVudC00MTc4NjIwMjFcXG5cXG5cIixcbiAgXCIxMVwiOiBcIl9UaGlzIGVycm9yIHdhcyByZXBsYWNlZCB3aXRoIGEgZGV2LXRpbWUgd2FybmluZywgaXQgd2lsbCBiZSBkZWxldGVkIGZvciB2NCBmaW5hbC5fIFtjcmVhdGVHbG9iYWxTdHlsZV0gcmVjZWl2ZWQgY2hpbGRyZW4gd2hpY2ggd2lsbCBub3QgYmUgcmVuZGVyZWQuIFBsZWFzZSB1c2UgdGhlIGNvbXBvbmVudCB3aXRob3V0IHBhc3NpbmcgY2hpbGRyZW4gZWxlbWVudHMuXFxuXFxuXCIsXG4gIFwiMTJcIjogXCJJdCBzZWVtcyB5b3UgYXJlIGludGVycG9sYXRpbmcgYSBrZXlmcmFtZSBkZWNsYXJhdGlvbiAoJXMpIGludG8gYW4gdW50YWdnZWQgc3RyaW5nLiBUaGlzIHdhcyBzdXBwb3J0ZWQgaW4gc3R5bGVkLWNvbXBvbmVudHMgdjMsIGJ1dCBpcyBub3QgbG9uZ2VyIHN1cHBvcnRlZCBpbiB2NCBhcyBrZXlmcmFtZXMgYXJlIG5vdyBpbmplY3RlZCBvbi1kZW1hbmQuIFBsZWFzZSB3cmFwIHlvdXIgc3RyaW5nIGluIHRoZSBjc3NcXFxcYFxcXFxgIGhlbHBlciB3aGljaCBlbnN1cmVzIHRoZSBzdHlsZXMgYXJlIGluamVjdGVkIGNvcnJlY3RseS4gU2VlIGh0dHBzOi8vd3d3LnN0eWxlZC1jb21wb25lbnRzLmNvbS9kb2NzL2FwaSNjc3NcXG5cXG5cIixcbiAgXCIxM1wiOiBcIiVzIGlzIG5vdCBhIHN0eWxlZCBjb21wb25lbnQgYW5kIGNhbm5vdCBiZSByZWZlcnJlZCB0byB2aWEgY29tcG9uZW50IHNlbGVjdG9yLiBTZWUgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYWR2YW5jZWQjcmVmZXJyaW5nLXRvLW90aGVyLWNvbXBvbmVudHMgZm9yIG1vcmUgZGV0YWlscy5cXG5cXG5cIixcbiAgXCIxNFwiOiBcIlRoZW1lUHJvdmlkZXI6IFxcXCJ0aGVtZVxcXCIgcHJvcCBpcyByZXF1aXJlZC5cXG5cXG5cIixcbiAgXCIxNVwiOiBcIkEgc3R5bGlzIHBsdWdpbiBoYXMgYmVlbiBzdXBwbGllZCB0aGF0IGlzIG5vdCBuYW1lZC4gV2UgbmVlZCBhIG5hbWUgZm9yIGVhY2ggcGx1Z2luIHRvIGJlIGFibGUgdG8gcHJldmVudCBzdHlsaW5nIGNvbGxpc2lvbnMgYmV0d2VlbiBkaWZmZXJlbnQgc3R5bGlzIGNvbmZpZ3VyYXRpb25zIHdpdGhpbiB0aGUgc2FtZSBhcHAuIEJlZm9yZSB5b3UgcGFzcyB5b3VyIHBsdWdpbiB0byBgPFN0eWxlU2hlZXRNYW5hZ2VyIHN0eWxpc1BsdWdpbnM9e1tdfT5gLCBwbGVhc2UgbWFrZSBzdXJlIGVhY2ggcGx1Z2luIGlzIHVuaXF1ZWx5LW5hbWVkLCBlLmcuXFxuXFxuYGBganNcXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoaW1wb3J0ZWRQbHVnaW4sICduYW1lJywgeyB2YWx1ZTogJ3NvbWUtdW5pcXVlLW5hbWUnIH0pO1xcbmBgYFxcblxcblwiLFxuICBcIjE2XCI6IFwiUmVhY2hlZCB0aGUgbGltaXQgb2YgaG93IG1hbnkgc3R5bGVkIGNvbXBvbmVudHMgbWF5IGJlIGNyZWF0ZWQgYXQgZ3JvdXAgJXMuXFxuWW91IG1heSBvbmx5IGNyZWF0ZSB1cCB0byAxLDA3Myw3NDEsODI0IGNvbXBvbmVudHMuIElmIHlvdSdyZSBjcmVhdGluZyBjb21wb25lbnRzIGR5bmFtaWNhbGx5LFxcbmFzIGZvciBpbnN0YW5jZSBpbiB5b3VyIHJlbmRlciBtZXRob2QgdGhlbiB5b3UgbWF5IGJlIHJ1bm5pbmcgaW50byB0aGlzIGxpbWl0YXRpb24uXFxuXFxuXCIsXG4gIFwiMTdcIjogXCJDU1NTdHlsZVNoZWV0IGNvdWxkIG5vdCBiZSBmb3VuZCBvbiBIVE1MU3R5bGVFbGVtZW50LlxcbkhhcyBzdHlsZWQtY29tcG9uZW50cycgc3R5bGUgdGFnIGJlZW4gdW5tb3VudGVkIG9yIGFsdGVyZWQgYnkgYW5vdGhlciBzY3JpcHQ/XFxuXCJcbn07XG5cbi8vIFxudmFyIEVSUk9SUyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBlcnJvck1hcCA6IHt9O1xuLyoqXG4gKiBzdXBlciBiYXNpYyB2ZXJzaW9uIG9mIHNwcmludGZcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXQoKSB7XG4gIHZhciBhID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzBdO1xuICB2YXIgYiA9IFtdO1xuXG4gIGZvciAodmFyIGMgPSAxLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoOyBjIDwgbGVuOyBjICs9IDEpIHtcbiAgICBiLnB1c2goYyA8IDAgfHwgYXJndW1lbnRzLmxlbmd0aCA8PSBjID8gdW5kZWZpbmVkIDogYXJndW1lbnRzW2NdKTtcbiAgfVxuXG4gIGIuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgIGEgPSBhLnJlcGxhY2UoLyVbYS16XS8sIGQpO1xuICB9KTtcbiAgcmV0dXJuIGE7XG59XG4vKipcbiAqIENyZWF0ZSBhbiBlcnJvciBmaWxlIG91dCBvZiBlcnJvcnMubWQgZm9yIGRldmVsb3BtZW50IGFuZCBhIHNpbXBsZSB3ZWIgbGluayB0byB0aGUgZnVsbCBlcnJvcnNcbiAqIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHRocm93U3R5bGVkQ29tcG9uZW50c0Vycm9yKGNvZGUpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGludGVycG9sYXRpb25zID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBpbnRlcnBvbGF0aW9uc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkFuIGVycm9yIG9jY3VycmVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3N0eWxlZC1jb21wb25lbnRzL3N0eWxlZC1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL3N0eWxlZC1jb21wb25lbnRzL3NyYy91dGlscy9lcnJvcnMubWQjXCIgKyBjb2RlICsgXCIgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIgKyAoaW50ZXJwb2xhdGlvbnMubGVuZ3RoID4gMCA/IFwiIEFkZGl0aW9uYWwgYXJndW1lbnRzOiBcIiArIGludGVycG9sYXRpb25zLmpvaW4oJywgJykgOiAnJykpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihmb3JtYXQuYXBwbHkodm9pZCAwLCBbRVJST1JTW2NvZGVdXS5jb25jYXQoaW50ZXJwb2xhdGlvbnMpKS50cmltKCkpO1xuICB9XG59XG5cbi8vIFxudmFyIEVMRU1FTlRfVFlQRSA9IDE7XG4vKiBOb2RlLkVMRU1FTlRfVFlQRSAqL1xuXG4vKiogRmluZCBsYXN0IHN0eWxlIGVsZW1lbnQgaWYgYW55IGluc2lkZSB0YXJnZXQgKi9cblxudmFyIGZpbmRMYXN0U3R5bGVUYWcgPSBmdW5jdGlvbiBmaW5kTGFzdFN0eWxlVGFnKHRhcmdldCkge1xuICB2YXIgY2hpbGROb2RlcyA9IHRhcmdldC5jaGlsZE5vZGVzO1xuXG4gIGZvciAodmFyIGkgPSBjaGlsZE5vZGVzLmxlbmd0aDsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZE5vZGVzW2ldO1xuXG4gICAgaWYgKGNoaWxkICYmIGNoaWxkLm5vZGVUeXBlID09PSBFTEVNRU5UX1RZUEUgJiYgY2hpbGQuaGFzQXR0cmlidXRlKFNDX0FUVFIpKSB7XG4gICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG4vKiogQ3JlYXRlIGEgc3R5bGUgZWxlbWVudCBpbnNpZGUgYHRhcmdldGAgb3IgPGhlYWQ+IGFmdGVyIHRoZSBsYXN0ICovXG5cblxudmFyIG1ha2VTdHlsZVRhZyA9IGZ1bmN0aW9uIG1ha2VTdHlsZVRhZyh0YXJnZXQpIHtcbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkO1xuICB2YXIgcGFyZW50ID0gdGFyZ2V0IHx8IGhlYWQ7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBwcmV2U3R5bGUgPSBmaW5kTGFzdFN0eWxlVGFnKHBhcmVudCk7XG4gIHZhciBuZXh0U2libGluZyA9IHByZXZTdHlsZSAhPT0gdW5kZWZpbmVkID8gcHJldlN0eWxlLm5leHRTaWJsaW5nIDogbnVsbDtcbiAgc3R5bGUuc2V0QXR0cmlidXRlKFNDX0FUVFIsIFNDX0FUVFJfQUNUSVZFKTtcbiAgc3R5bGUuc2V0QXR0cmlidXRlKFNDX0FUVFJfVkVSU0lPTiwgU0NfVkVSU0lPTik7XG4gIHZhciBub25jZSA9IGdldE5vbmNlKCk7XG4gIGlmIChub25jZSkgc3R5bGUuc2V0QXR0cmlidXRlKCdub25jZScsIG5vbmNlKTtcbiAgcGFyZW50Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuICByZXR1cm4gc3R5bGU7XG59O1xuLyoqIEdldCB0aGUgQ1NTU3R5bGVTaGVldCBpbnN0YW5jZSBmb3IgYSBnaXZlbiBzdHlsZSBlbGVtZW50ICovXG5cbnZhciBnZXRTaGVldCA9IGZ1bmN0aW9uIGdldFNoZWV0KHRhZykge1xuICBpZiAodGFnLnNoZWV0KSB7XG4gICAgcmV0dXJuIHRhZy5zaGVldDtcbiAgfSAvLyBBdm9pZCBGaXJlZm94IHF1aXJrIHdoZXJlIHRoZSBzdHlsZSBlbGVtZW50IG1pZ2h0IG5vdCBoYXZlIGEgc2hlZXQgcHJvcGVydHlcblxuXG4gIHZhciBfZG9jdW1lbnQgPSBkb2N1bWVudCxcbiAgICAgIHN0eWxlU2hlZXRzID0gX2RvY3VtZW50LnN0eWxlU2hlZXRzO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gc3R5bGVTaGVldHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIHNoZWV0ID0gc3R5bGVTaGVldHNbaV07XG5cbiAgICBpZiAoc2hlZXQub3duZXJOb2RlID09PSB0YWcpIHtcbiAgICAgIHJldHVybiBzaGVldDtcbiAgICB9XG4gIH1cblxuICB0aHJvd1N0eWxlZENvbXBvbmVudHNFcnJvcigxNyk7XG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG4vLyBcbi8qKiBDcmVhdGUgYSBDU1NTdHlsZVNoZWV0LWxpa2UgdGFnIGRlcGVuZGluZyBvbiB0aGUgZW52aXJvbm1lbnQgKi9cblxudmFyIG1ha2VUYWcgPSBmdW5jdGlvbiBtYWtlVGFnKF9yZWYpIHtcbiAgdmFyIGlzU2VydmVyID0gX3JlZi5pc1NlcnZlcixcbiAgICAgIHVzZUNTU09NSW5qZWN0aW9uID0gX3JlZi51c2VDU1NPTUluamVjdGlvbixcbiAgICAgIHRhcmdldCA9IF9yZWYudGFyZ2V0O1xuXG4gIGlmIChpc1NlcnZlcikge1xuICAgIHJldHVybiBuZXcgVmlydHVhbFRhZyh0YXJnZXQpO1xuICB9IGVsc2UgaWYgKHVzZUNTU09NSW5qZWN0aW9uKSB7XG4gICAgcmV0dXJuIG5ldyBDU1NPTVRhZyh0YXJnZXQpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgVGV4dFRhZyh0YXJnZXQpO1xuICB9XG59O1xudmFyIENTU09NVGFnID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ1NTT01UYWcodGFyZ2V0KSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQgPSBtYWtlU3R5bGVUYWcodGFyZ2V0KTsgLy8gQXZvaWQgRWRnZSBidWcgd2hlcmUgZW1wdHkgc3R5bGUgZWxlbWVudHMgZG9uJ3QgY3JlYXRlIHNoZWV0c1xuXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpO1xuICAgIHRoaXMuc2hlZXQgPSBnZXRTaGVldChlbGVtZW50KTtcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ1NTT01UYWcucHJvdG90eXBlO1xuXG4gIF9wcm90by5pbnNlcnRSdWxlID0gZnVuY3Rpb24gaW5zZXJ0UnVsZShpbmRleCwgcnVsZSkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnNoZWV0Lmluc2VydFJ1bGUocnVsZSwgaW5kZXgpO1xuICAgICAgdGhpcy5sZW5ndGgrKztcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKF9lcnJvcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZGVsZXRlUnVsZSA9IGZ1bmN0aW9uIGRlbGV0ZVJ1bGUoaW5kZXgpIHtcbiAgICB0aGlzLnNoZWV0LmRlbGV0ZVJ1bGUoaW5kZXgpO1xuICAgIHRoaXMubGVuZ3RoLS07XG4gIH07XG5cbiAgX3Byb3RvLmdldFJ1bGUgPSBmdW5jdGlvbiBnZXRSdWxlKGluZGV4KSB7XG4gICAgdmFyIHJ1bGUgPSB0aGlzLnNoZWV0LmNzc1J1bGVzW2luZGV4XTsgLy8gQXZvaWQgSUUxMSBxdWlyayB3aGVyZSBjc3NUZXh0IGlzIGluYWNjZXNzaWJsZSBvbiBzb21lIGludmFsaWQgcnVsZXNcblxuICAgIGlmIChydWxlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHJ1bGUuY3NzVGV4dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBydWxlLmNzc1RleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIENTU09NVGFnO1xufSgpO1xuLyoqIEEgVGFnIHRoYXQgZW11bGF0ZXMgdGhlIENTU1N0eWxlU2hlZXQgQVBJIGJ1dCB1c2VzIHRleHQgbm9kZXMgKi9cblxudmFyIFRleHRUYWcgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBUZXh0VGFnKHRhcmdldCkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50ID0gbWFrZVN0eWxlVGFnKHRhcmdldCk7XG4gICAgdGhpcy5ub2RlcyA9IGVsZW1lbnQuY2hpbGROb2RlcztcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG4gIH1cblxuICB2YXIgX3Byb3RvMiA9IFRleHRUYWcucHJvdG90eXBlO1xuXG4gIF9wcm90bzIuaW5zZXJ0UnVsZSA9IGZ1bmN0aW9uIGluc2VydFJ1bGUoaW5kZXgsIHJ1bGUpIHtcbiAgICBpZiAoaW5kZXggPD0gdGhpcy5sZW5ndGggJiYgaW5kZXggPj0gMCkge1xuICAgICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShydWxlKTtcbiAgICAgIHZhciByZWZOb2RlID0gdGhpcy5ub2Rlc1tpbmRleF07XG4gICAgICB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIHJlZk5vZGUgfHwgbnVsbCk7XG4gICAgICB0aGlzLmxlbmd0aCsrO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvMi5kZWxldGVSdWxlID0gZnVuY3Rpb24gZGVsZXRlUnVsZShpbmRleCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLm5vZGVzW2luZGV4XSk7XG4gICAgdGhpcy5sZW5ndGgtLTtcbiAgfTtcblxuICBfcHJvdG8yLmdldFJ1bGUgPSBmdW5jdGlvbiBnZXRSdWxlKGluZGV4KSB7XG4gICAgaWYgKGluZGV4IDwgdGhpcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGVzW2luZGV4XS50ZXh0Q29udGVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gVGV4dFRhZztcbn0oKTtcbi8qKiBBIGNvbXBsZXRlbHkgdmlydHVhbCAoc2VydmVyLXNpZGUpIFRhZyB0aGF0IGRvZXNuJ3QgbWFuaXB1bGF0ZSB0aGUgRE9NICovXG5cbnZhciBWaXJ0dWFsVGFnID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVmlydHVhbFRhZyhfdGFyZ2V0KSB7XG4gICAgdGhpcy5ydWxlcyA9IFtdO1xuICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgfVxuXG4gIHZhciBfcHJvdG8zID0gVmlydHVhbFRhZy5wcm90b3R5cGU7XG5cbiAgX3Byb3RvMy5pbnNlcnRSdWxlID0gZnVuY3Rpb24gaW5zZXJ0UnVsZShpbmRleCwgcnVsZSkge1xuICAgIGlmIChpbmRleCA8PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5ydWxlcy5zcGxpY2UoaW5kZXgsIDAsIHJ1bGUpO1xuICAgICAgdGhpcy5sZW5ndGgrKztcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzMuZGVsZXRlUnVsZSA9IGZ1bmN0aW9uIGRlbGV0ZVJ1bGUoaW5kZXgpIHtcbiAgICB0aGlzLnJ1bGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5sZW5ndGgtLTtcbiAgfTtcblxuICBfcHJvdG8zLmdldFJ1bGUgPSBmdW5jdGlvbiBnZXRSdWxlKGluZGV4KSB7XG4gICAgaWYgKGluZGV4IDwgdGhpcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLnJ1bGVzW2luZGV4XTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gVmlydHVhbFRhZztcbn0oKTtcblxuLy8gXG4vKiogQ3JlYXRlIGEgR3JvdXBlZFRhZyB3aXRoIGFuIHVuZGVybHlpbmcgVGFnIGltcGxlbWVudGF0aW9uICovXG5cbnZhciBtYWtlR3JvdXBlZFRhZyA9IGZ1bmN0aW9uIG1ha2VHcm91cGVkVGFnKHRhZykge1xuICByZXR1cm4gbmV3IERlZmF1bHRHcm91cGVkVGFnKHRhZyk7XG59O1xudmFyIEJBU0VfU0laRSA9IDEgPDwgOTtcblxudmFyIERlZmF1bHRHcm91cGVkVGFnID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRGVmYXVsdEdyb3VwZWRUYWcodGFnKSB7XG4gICAgdGhpcy5ncm91cFNpemVzID0gbmV3IFVpbnQzMkFycmF5KEJBU0VfU0laRSk7XG4gICAgdGhpcy5sZW5ndGggPSBCQVNFX1NJWkU7XG4gICAgdGhpcy50YWcgPSB0YWc7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gRGVmYXVsdEdyb3VwZWRUYWcucHJvdG90eXBlO1xuXG4gIF9wcm90by5pbmRleE9mR3JvdXAgPSBmdW5jdGlvbiBpbmRleE9mR3JvdXAoZ3JvdXApIHtcbiAgICB2YXIgaW5kZXggPSAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cDsgaSsrKSB7XG4gICAgICBpbmRleCArPSB0aGlzLmdyb3VwU2l6ZXNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9O1xuXG4gIF9wcm90by5pbnNlcnRSdWxlcyA9IGZ1bmN0aW9uIGluc2VydFJ1bGVzKGdyb3VwLCBydWxlcykge1xuICAgIGlmIChncm91cCA+PSB0aGlzLmdyb3VwU2l6ZXMubGVuZ3RoKSB7XG4gICAgICB2YXIgb2xkQnVmZmVyID0gdGhpcy5ncm91cFNpemVzO1xuICAgICAgdmFyIG9sZFNpemUgPSBvbGRCdWZmZXIubGVuZ3RoO1xuICAgICAgdmFyIG5ld1NpemUgPSBvbGRTaXplO1xuXG4gICAgICB3aGlsZSAoZ3JvdXAgPj0gbmV3U2l6ZSkge1xuICAgICAgICBuZXdTaXplIDw8PSAxO1xuXG4gICAgICAgIGlmIChuZXdTaXplIDwgMCkge1xuICAgICAgICAgIHRocm93U3R5bGVkQ29tcG9uZW50c0Vycm9yKDE2LCBcIlwiICsgZ3JvdXApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZ3JvdXBTaXplcyA9IG5ldyBVaW50MzJBcnJheShuZXdTaXplKTtcbiAgICAgIHRoaXMuZ3JvdXBTaXplcy5zZXQob2xkQnVmZmVyKTtcbiAgICAgIHRoaXMubGVuZ3RoID0gbmV3U2l6ZTtcblxuICAgICAgZm9yICh2YXIgaSA9IG9sZFNpemU7IGkgPCBuZXdTaXplOyBpKyspIHtcbiAgICAgICAgdGhpcy5ncm91cFNpemVzW2ldID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcnVsZUluZGV4ID0gdGhpcy5pbmRleE9mR3JvdXAoZ3JvdXAgKyAxKTtcblxuICAgIGZvciAodmFyIF9pID0gMCwgbCA9IHJ1bGVzLmxlbmd0aDsgX2kgPCBsOyBfaSsrKSB7XG4gICAgICBpZiAodGhpcy50YWcuaW5zZXJ0UnVsZShydWxlSW5kZXgsIHJ1bGVzW19pXSkpIHtcbiAgICAgICAgdGhpcy5ncm91cFNpemVzW2dyb3VwXSsrO1xuICAgICAgICBydWxlSW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyR3JvdXAgPSBmdW5jdGlvbiBjbGVhckdyb3VwKGdyb3VwKSB7XG4gICAgaWYgKGdyb3VwIDwgdGhpcy5sZW5ndGgpIHtcbiAgICAgIHZhciBsZW5ndGggPSB0aGlzLmdyb3VwU2l6ZXNbZ3JvdXBdO1xuICAgICAgdmFyIHN0YXJ0SW5kZXggPSB0aGlzLmluZGV4T2ZHcm91cChncm91cCk7XG4gICAgICB2YXIgZW5kSW5kZXggPSBzdGFydEluZGV4ICsgbGVuZ3RoO1xuICAgICAgdGhpcy5ncm91cFNpemVzW2dyb3VwXSA9IDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSBzdGFydEluZGV4OyBpIDwgZW5kSW5kZXg7IGkrKykge1xuICAgICAgICB0aGlzLnRhZy5kZWxldGVSdWxlKHN0YXJ0SW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0R3JvdXAgPSBmdW5jdGlvbiBnZXRHcm91cChncm91cCkge1xuICAgIHZhciBjc3MgPSAnJztcblxuICAgIGlmIChncm91cCA+PSB0aGlzLmxlbmd0aCB8fCB0aGlzLmdyb3VwU2l6ZXNbZ3JvdXBdID09PSAwKSB7XG4gICAgICByZXR1cm4gY3NzO1xuICAgIH1cblxuICAgIHZhciBsZW5ndGggPSB0aGlzLmdyb3VwU2l6ZXNbZ3JvdXBdO1xuICAgIHZhciBzdGFydEluZGV4ID0gdGhpcy5pbmRleE9mR3JvdXAoZ3JvdXApO1xuICAgIHZhciBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyBsZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gc3RhcnRJbmRleDsgaSA8IGVuZEluZGV4OyBpKyspIHtcbiAgICAgIGNzcyArPSBcIlwiICsgdGhpcy50YWcuZ2V0UnVsZShpKSArIFNQTElUVEVSO1xuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG4gIH07XG5cbiAgcmV0dXJuIERlZmF1bHRHcm91cGVkVGFnO1xufSgpO1xuXG4vLyBcbnZhciBNQVhfU01JID0gMSA8PCAzMSAtIDE7XG52YXIgZ3JvdXBJRFJlZ2lzdGVyID0gbmV3IE1hcCgpO1xudmFyIHJldmVyc2VSZWdpc3RlciA9IG5ldyBNYXAoKTtcbnZhciBuZXh0RnJlZUdyb3VwID0gMTtcbnZhciBnZXRHcm91cEZvcklkID0gZnVuY3Rpb24gZ2V0R3JvdXBGb3JJZChpZCkge1xuICBpZiAoZ3JvdXBJRFJlZ2lzdGVyLmhhcyhpZCkpIHtcbiAgICByZXR1cm4gZ3JvdXBJRFJlZ2lzdGVyLmdldChpZCk7XG4gIH1cblxuICB2YXIgZ3JvdXAgPSBuZXh0RnJlZUdyb3VwKys7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgKChncm91cCB8IDApIDwgMCB8fCBncm91cCA+IE1BWF9TTUkpKSB7XG4gICAgdGhyb3dTdHlsZWRDb21wb25lbnRzRXJyb3IoMTYsIFwiXCIgKyBncm91cCk7XG4gIH1cblxuICBncm91cElEUmVnaXN0ZXIuc2V0KGlkLCBncm91cCk7XG4gIHJldmVyc2VSZWdpc3Rlci5zZXQoZ3JvdXAsIGlkKTtcbiAgcmV0dXJuIGdyb3VwO1xufTtcbnZhciBnZXRJZEZvckdyb3VwID0gZnVuY3Rpb24gZ2V0SWRGb3JHcm91cChncm91cCkge1xuICByZXR1cm4gcmV2ZXJzZVJlZ2lzdGVyLmdldChncm91cCk7XG59O1xudmFyIHNldEdyb3VwRm9ySWQgPSBmdW5jdGlvbiBzZXRHcm91cEZvcklkKGlkLCBncm91cCkge1xuICBpZiAoZ3JvdXAgPj0gbmV4dEZyZWVHcm91cCkge1xuICAgIG5leHRGcmVlR3JvdXAgPSBncm91cCArIDE7XG4gIH1cblxuICBncm91cElEUmVnaXN0ZXIuc2V0KGlkLCBncm91cCk7XG4gIHJldmVyc2VSZWdpc3Rlci5zZXQoZ3JvdXAsIGlkKTtcbn07XG5cbi8vIFxudmFyIFNFTEVDVE9SID0gXCJzdHlsZVtcIiArIFNDX0FUVFIgKyBcIl1bXCIgKyBTQ19BVFRSX1ZFUlNJT04gKyBcIj1cXFwiXCIgKyBTQ19WRVJTSU9OICsgXCJcXFwiXVwiO1xudmFyIE1BUktFUl9SRSA9IG5ldyBSZWdFeHAoXCJeXCIgKyBTQ19BVFRSICsgXCJcXFxcLmcoXFxcXGQrKVxcXFxbaWQ9XFxcIihbXFxcXHdcXFxcZC1dKylcXFwiXFxcXF0uKj9cXFwiKFteXFxcIl0qKVwiKTtcbnZhciBvdXRwdXRTaGVldCA9IGZ1bmN0aW9uIG91dHB1dFNoZWV0KHNoZWV0KSB7XG4gIHZhciB0YWcgPSBzaGVldC5nZXRUYWcoKTtcbiAgdmFyIGxlbmd0aCA9IHRhZy5sZW5ndGg7XG4gIHZhciBjc3MgPSAnJztcblxuICBmb3IgKHZhciBncm91cCA9IDA7IGdyb3VwIDwgbGVuZ3RoOyBncm91cCsrKSB7XG4gICAgdmFyIGlkID0gZ2V0SWRGb3JHcm91cChncm91cCk7XG4gICAgaWYgKGlkID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuICAgIHZhciBuYW1lcyA9IHNoZWV0Lm5hbWVzLmdldChpZCk7XG4gICAgdmFyIHJ1bGVzID0gdGFnLmdldEdyb3VwKGdyb3VwKTtcbiAgICBpZiAobmFtZXMgPT09IHVuZGVmaW5lZCB8fCBydWxlcy5sZW5ndGggPT09IDApIGNvbnRpbnVlO1xuICAgIHZhciBzZWxlY3RvciA9IFNDX0FUVFIgKyBcIi5nXCIgKyBncm91cCArIFwiW2lkPVxcXCJcIiArIGlkICsgXCJcXFwiXVwiO1xuICAgIHZhciBjb250ZW50ID0gJyc7XG5cbiAgICBpZiAobmFtZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBpZiAobmFtZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29udGVudCArPSBuYW1lICsgXCIsXCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gLy8gTk9URTogSXQncyBlYXNpZXIgdG8gY29sbGVjdCBydWxlcyBhbmQgaGF2ZSB0aGUgbWFya2VyXG4gICAgLy8gYWZ0ZXIgdGhlIGFjdHVhbCBydWxlcyB0byBzaW1wbGlmeSB0aGUgcmVoeWRyYXRpb25cblxuXG4gICAgY3NzICs9IFwiXCIgKyBydWxlcyArIHNlbGVjdG9yICsgXCJ7Y29udGVudDpcXFwiXCIgKyBjb250ZW50ICsgXCJcXFwifVwiICsgU1BMSVRURVI7XG4gIH1cblxuICByZXR1cm4gY3NzO1xufTtcblxudmFyIHJlaHlkcmF0ZU5hbWVzRnJvbUNvbnRlbnQgPSBmdW5jdGlvbiByZWh5ZHJhdGVOYW1lc0Zyb21Db250ZW50KHNoZWV0LCBpZCwgY29udGVudCkge1xuICB2YXIgbmFtZXMgPSBjb250ZW50LnNwbGl0KCcsJyk7XG4gIHZhciBuYW1lO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gbmFtZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgaWYgKG5hbWUgPSBuYW1lc1tpXSkge1xuICAgICAgc2hlZXQucmVnaXN0ZXJOYW1lKGlkLCBuYW1lKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciByZWh5ZHJhdGVTaGVldEZyb21UYWcgPSBmdW5jdGlvbiByZWh5ZHJhdGVTaGVldEZyb21UYWcoc2hlZXQsIHN0eWxlKSB7XG4gIHZhciBwYXJ0cyA9IHN0eWxlLmlubmVySFRNTC5zcGxpdChTUExJVFRFUik7XG4gIHZhciBydWxlcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gcGFydHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIHBhcnQgPSBwYXJ0c1tpXS50cmltKCk7XG4gICAgaWYgKCFwYXJ0KSBjb250aW51ZTtcbiAgICB2YXIgbWFya2VyID0gcGFydC5tYXRjaChNQVJLRVJfUkUpO1xuXG4gICAgaWYgKG1hcmtlcikge1xuICAgICAgdmFyIGdyb3VwID0gcGFyc2VJbnQobWFya2VyWzFdLCAxMCkgfCAwO1xuICAgICAgdmFyIGlkID0gbWFya2VyWzJdO1xuXG4gICAgICBpZiAoZ3JvdXAgIT09IDApIHtcbiAgICAgICAgLy8gUmVoeWRyYXRlIGNvbXBvbmVudElkIHRvIGdyb3VwIGluZGV4IG1hcHBpbmdcbiAgICAgICAgc2V0R3JvdXBGb3JJZChpZCwgZ3JvdXApOyAvLyBSZWh5ZHJhdGUgbmFtZXMgYW5kIHJ1bGVzXG4gICAgICAgIC8vIGxvb2tzIGxpa2U6IGRhdGEtc3R5bGVkLmcxMVtpZD1cImlkQVwiXXtjb250ZW50OlwibmFtZUEsXCJ9XG5cbiAgICAgICAgcmVoeWRyYXRlTmFtZXNGcm9tQ29udGVudChzaGVldCwgaWQsIG1hcmtlclszXSk7XG4gICAgICAgIHNoZWV0LmdldFRhZygpLmluc2VydFJ1bGVzKGdyb3VwLCBydWxlcyk7XG4gICAgICB9XG5cbiAgICAgIHJ1bGVzLmxlbmd0aCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJ1bGVzLnB1c2gocGFydCk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgcmVoeWRyYXRlU2hlZXQgPSBmdW5jdGlvbiByZWh5ZHJhdGVTaGVldChzaGVldCkge1xuICB2YXIgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SKTtcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IG5vZGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBub2RlID0gbm9kZXNbaV07XG5cbiAgICBpZiAobm9kZSAmJiBub2RlLmdldEF0dHJpYnV0ZShTQ19BVFRSKSAhPT0gU0NfQVRUUl9BQ1RJVkUpIHtcbiAgICAgIHJlaHlkcmF0ZVNoZWV0RnJvbVRhZyhzaGVldCwgbm9kZSk7XG5cbiAgICAgIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxudmFyIFNIT1VMRF9SRUhZRFJBVEUgPSBJU19CUk9XU0VSO1xudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICBpc1NlcnZlcjogIUlTX0JST1dTRVIsXG4gIHVzZUNTU09NSW5qZWN0aW9uOiAhRElTQUJMRV9TUEVFRFlcbn07XG4vKiogQ29udGFpbnMgdGhlIG1haW4gc3R5bGVzaGVldCBsb2dpYyBmb3Igc3RyaW5naWZpY2F0aW9uIGFuZCBjYWNoaW5nICovXG5cbnZhciBTdHlsZVNoZWV0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqIFJlZ2lzdGVyIGEgZ3JvdXAgSUQgdG8gZ2l2ZSBpdCBhbiBpbmRleCAqL1xuICBTdHlsZVNoZWV0LnJlZ2lzdGVySWQgPSBmdW5jdGlvbiByZWdpc3RlcklkKGlkKSB7XG4gICAgcmV0dXJuIGdldEdyb3VwRm9ySWQoaWQpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIFN0eWxlU2hlZXQob3B0aW9ucywgZ2xvYmFsU3R5bGVzLCBuYW1lcykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcbiAgICB9XG5cbiAgICBpZiAoZ2xvYmFsU3R5bGVzID09PSB2b2lkIDApIHtcbiAgICAgIGdsb2JhbFN0eWxlcyA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0T3B0aW9ucywge30sIG9wdGlvbnMpO1xuICAgIHRoaXMuZ3MgPSBnbG9iYWxTdHlsZXM7XG4gICAgdGhpcy5uYW1lcyA9IG5ldyBNYXAobmFtZXMpOyAvLyBXZSByZWh5ZHJhdGUgb25seSBvbmNlIGFuZCB1c2UgdGhlIHNoZWV0IHRoYXQgaXMgY3JlYXRlZCBmaXJzdFxuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuaXNTZXJ2ZXIgJiYgSVNfQlJPV1NFUiAmJiBTSE9VTERfUkVIWURSQVRFKSB7XG4gICAgICBTSE9VTERfUkVIWURSQVRFID0gZmFsc2U7XG4gICAgICByZWh5ZHJhdGVTaGVldCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3R5bGVTaGVldC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlY29uc3RydWN0V2l0aE9wdGlvbnMgPSBmdW5jdGlvbiByZWNvbnN0cnVjdFdpdGhPcHRpb25zKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlU2hlZXQoX2V4dGVuZHMoe30sIHRoaXMub3B0aW9ucywge30sIG9wdGlvbnMpLCB0aGlzLmdzLCB0aGlzLm5hbWVzKTtcbiAgfTtcblxuICBfcHJvdG8uYWxsb2NhdGVHU0luc3RhbmNlID0gZnVuY3Rpb24gYWxsb2NhdGVHU0luc3RhbmNlKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuZ3NbaWRdID0gKHRoaXMuZ3NbaWRdIHx8IDApICsgMTtcbiAgfVxuICAvKiogTGF6aWx5IGluaXRpYWxpc2VzIGEgR3JvdXBlZFRhZyBmb3Igd2hlbiBpdCdzIGFjdHVhbGx5IG5lZWRlZCAqL1xuICA7XG5cbiAgX3Byb3RvLmdldFRhZyA9IGZ1bmN0aW9uIGdldFRhZygpIHtcbiAgICByZXR1cm4gdGhpcy50YWcgfHwgKHRoaXMudGFnID0gbWFrZUdyb3VwZWRUYWcobWFrZVRhZyh0aGlzLm9wdGlvbnMpKSk7XG4gIH1cbiAgLyoqIENoZWNrIHdoZXRoZXIgYSBuYW1lIGlzIGtub3duIGZvciBjYWNoaW5nICovXG4gIDtcblxuICBfcHJvdG8uaGFzTmFtZUZvcklkID0gZnVuY3Rpb24gaGFzTmFtZUZvcklkKGlkLCBuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZXMuaGFzKGlkKSAmJiB0aGlzLm5hbWVzLmdldChpZCkuaGFzKG5hbWUpO1xuICB9XG4gIC8qKiBNYXJrIGEgZ3JvdXAncyBuYW1lIGFzIGtub3duIGZvciBjYWNoaW5nICovXG4gIDtcblxuICBfcHJvdG8ucmVnaXN0ZXJOYW1lID0gZnVuY3Rpb24gcmVnaXN0ZXJOYW1lKGlkLCBuYW1lKSB7XG4gICAgZ2V0R3JvdXBGb3JJZChpZCk7XG5cbiAgICBpZiAoIXRoaXMubmFtZXMuaGFzKGlkKSkge1xuICAgICAgdmFyIGdyb3VwTmFtZXMgPSBuZXcgU2V0KCk7XG4gICAgICBncm91cE5hbWVzLmFkZChuYW1lKTtcbiAgICAgIHRoaXMubmFtZXMuc2V0KGlkLCBncm91cE5hbWVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uYW1lcy5nZXQoaWQpLmFkZChuYW1lKTtcbiAgICB9XG4gIH1cbiAgLyoqIEluc2VydCBuZXcgcnVsZXMgd2hpY2ggYWxzbyBtYXJrcyB0aGUgbmFtZSBhcyBrbm93biAqL1xuICA7XG5cbiAgX3Byb3RvLmluc2VydFJ1bGVzID0gZnVuY3Rpb24gaW5zZXJ0UnVsZXMoaWQsIG5hbWUsIHJ1bGVzKSB7XG4gICAgdGhpcy5yZWdpc3Rlck5hbWUoaWQsIG5hbWUpO1xuICAgIHRoaXMuZ2V0VGFnKCkuaW5zZXJ0UnVsZXMoZ2V0R3JvdXBGb3JJZChpZCksIHJ1bGVzKTtcbiAgfVxuICAvKiogQ2xlYXJzIGFsbCBjYWNoZWQgbmFtZXMgZm9yIGEgZ2l2ZW4gZ3JvdXAgSUQgKi9cbiAgO1xuXG4gIF9wcm90by5jbGVhck5hbWVzID0gZnVuY3Rpb24gY2xlYXJOYW1lcyhpZCkge1xuICAgIGlmICh0aGlzLm5hbWVzLmhhcyhpZCkpIHtcbiAgICAgIHRoaXMubmFtZXMuZ2V0KGlkKS5jbGVhcigpO1xuICAgIH1cbiAgfVxuICAvKiogQ2xlYXJzIGFsbCBydWxlcyBmb3IgYSBnaXZlbiBncm91cCBJRCAqL1xuICA7XG5cbiAgX3Byb3RvLmNsZWFyUnVsZXMgPSBmdW5jdGlvbiBjbGVhclJ1bGVzKGlkKSB7XG4gICAgdGhpcy5nZXRUYWcoKS5jbGVhckdyb3VwKGdldEdyb3VwRm9ySWQoaWQpKTtcbiAgICB0aGlzLmNsZWFyTmFtZXMoaWQpO1xuICB9XG4gIC8qKiBDbGVhcnMgdGhlIGVudGlyZSB0YWcgd2hpY2ggZGVsZXRlcyBhbGwgcnVsZXMgYnV0IG5vdCBpdHMgbmFtZXMgKi9cbiAgO1xuXG4gIF9wcm90by5jbGVhclRhZyA9IGZ1bmN0aW9uIGNsZWFyVGFnKCkge1xuICAgIC8vIE5PVEU6IFRoaXMgZG9lcyBub3QgY2xlYXIgdGhlIG5hbWVzLCBzaW5jZSBpdCdzIG9ubHkgdXNlZCBkdXJpbmcgU1NSXG4gICAgLy8gc28gdGhhdCB3ZSBjYW4gY29udGludW91c2x5IG91dHB1dCBvbmx5IG5ldyBydWxlc1xuICAgIHRoaXMudGFnID0gdW5kZWZpbmVkO1xuICB9XG4gIC8qKiBPdXRwdXRzIHRoZSBjdXJyZW50IHNoZWV0IGFzIGEgQ1NTIHN0cmluZyB3aXRoIG1hcmtlcnMgZm9yIFNTUiAqL1xuICA7XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIG91dHB1dFNoZWV0KHRoaXMpO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZVNoZWV0O1xufSgpO1xuXG4vLyBcblxuLyogZXNsaW50LWRpc2FibGUgKi9cbnZhciBTRUVEID0gNTM4MTsgLy8gV2hlbiB3ZSBoYXZlIHNlcGFyYXRlIHN0cmluZ3MgaXQncyB1c2VmdWwgdG8gcnVuIGEgcHJvZ3Jlc3NpdmVcbi8vIHZlcnNpb24gb2YgZGpiMiB3aGVyZSB3ZSBwcmV0ZW5kIHRoYXQgd2UncmUgc3RpbGwgbG9vcGluZyBvdmVyXG4vLyB0aGUgc2FtZSBzdHJpbmdcblxudmFyIHBoYXNoID0gZnVuY3Rpb24gcGhhc2goaCwgeCkge1xuICB2YXIgaSA9IHgubGVuZ3RoO1xuXG4gIHdoaWxlIChpKSB7XG4gICAgaCA9IGggKiAzMyBeIHguY2hhckNvZGVBdCgtLWkpO1xuICB9XG5cbiAgcmV0dXJuIGg7XG59OyAvLyBUaGlzIGlzIGEgZGpiMiBoYXNoaW5nIGZ1bmN0aW9uXG5cbnZhciBoYXNoID0gZnVuY3Rpb24gaGFzaCh4KSB7XG4gIHJldHVybiBwaGFzaChTRUVELCB4KTtcbn07XG5cbi8qKlxuICogTUlUIExpY2Vuc2VcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgU3VsdGFuIFRhcmltb1xuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2ZcbiAqIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksXG4gKiB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuICogT1IgSU1QTElFRCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXG4gKiBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SXG4gKiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5mdW5jdGlvbiBpbnNlcnRSdWxlUGx1Z2luIChpbnNlcnRSdWxlKSB7XG4gIHZhciBkZWxpbWl0ZXIgPSAnLyp8Ki8nO1xuICB2YXIgbmVlZGxlID0gZGVsaW1pdGVyICsgXCJ9XCI7XG5cbiAgZnVuY3Rpb24gdG9TaGVldChibG9jaykge1xuICAgIGlmIChibG9jaykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaW5zZXJ0UnVsZShibG9jayArIFwifVwiKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHJ1bGVTaGVldChjb250ZXh0LCBjb250ZW50LCBzZWxlY3RvcnMsIHBhcmVudHMsIGxpbmUsIGNvbHVtbiwgbGVuZ3RoLCBucywgZGVwdGgsIGF0KSB7XG4gICAgc3dpdGNoIChjb250ZXh0KSB7XG4gICAgICAvLyBwcm9wZXJ0eVxuICAgICAgY2FzZSAxOlxuICAgICAgICAvLyBAaW1wb3J0XG4gICAgICAgIGlmIChkZXB0aCA9PT0gMCAmJiBjb250ZW50LmNoYXJDb2RlQXQoMCkgPT09IDY0KSByZXR1cm4gaW5zZXJ0UnVsZShjb250ZW50ICsgXCI7XCIpLCAnJztcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBzZWxlY3RvclxuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIGlmIChucyA9PT0gMCkgcmV0dXJuIGNvbnRlbnQgKyBkZWxpbWl0ZXI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gYXQtcnVsZVxuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHN3aXRjaCAobnMpIHtcbiAgICAgICAgICAvLyBAZm9udC1mYWNlLCBAcGFnZVxuICAgICAgICAgIGNhc2UgMTAyOlxuICAgICAgICAgIGNhc2UgMTEyOlxuICAgICAgICAgICAgcmV0dXJuIGluc2VydFJ1bGUoc2VsZWN0b3JzWzBdICsgY29udGVudCksICcnO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50ICsgKGF0ID09PSAwID8gZGVsaW1pdGVyIDogJycpO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgLTI6XG4gICAgICAgIGNvbnRlbnQuc3BsaXQobmVlZGxlKS5mb3JFYWNoKHRvU2hlZXQpO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIENPTU1FTlRfUkVHRVggPSAvXlxccypcXC9cXC8uKiQvZ207XG5mdW5jdGlvbiBjcmVhdGVTdHlsaXNJbnN0YW5jZShfdGVtcCkge1xuICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyBFTVBUWV9PQkpFQ1QgOiBfdGVtcCxcbiAgICAgIF9yZWYkb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgIG9wdGlvbnMgPSBfcmVmJG9wdGlvbnMgPT09IHZvaWQgMCA/IEVNUFRZX09CSkVDVCA6IF9yZWYkb3B0aW9ucyxcbiAgICAgIF9yZWYkcGx1Z2lucyA9IF9yZWYucGx1Z2lucyxcbiAgICAgIHBsdWdpbnMgPSBfcmVmJHBsdWdpbnMgPT09IHZvaWQgMCA/IEVNUFRZX0FSUkFZIDogX3JlZiRwbHVnaW5zO1xuXG4gIHZhciBzdHlsaXMgPSBuZXcgU3R5bGlzKG9wdGlvbnMpOyAvLyBXcmFwIGBpbnNlcnRSdWxlUGx1Z2luIHRvIGJ1aWxkIGEgbGlzdCBvZiBydWxlcyxcbiAgLy8gYW5kIHRoZW4gbWFrZSBvdXIgb3duIHBsdWdpbiB0byByZXR1cm4gdGhlIHJ1bGVzLiBUaGlzXG4gIC8vIG1ha2VzIGl0IGVhc2llciB0byBob29rIGludG8gdGhlIGV4aXN0aW5nIFNTUiBhcmNoaXRlY3R1cmVcblxuICB2YXIgcGFyc2luZ1J1bGVzID0gW107IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuXG4gIHZhciByZXR1cm5SdWxlc1BsdWdpbiA9IGZ1bmN0aW9uIHJldHVyblJ1bGVzUGx1Z2luKGNvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gLTIpIHtcbiAgICAgIHZhciBwYXJzZWRSdWxlcyA9IHBhcnNpbmdSdWxlcztcbiAgICAgIHBhcnNpbmdSdWxlcyA9IFtdO1xuICAgICAgcmV0dXJuIHBhcnNlZFJ1bGVzO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcGFyc2VSdWxlc1BsdWdpbiA9IGluc2VydFJ1bGVQbHVnaW4oZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICBwYXJzaW5nUnVsZXMucHVzaChydWxlKTtcbiAgfSk7XG5cbiAgdmFyIF9jb21wb25lbnRJZDtcblxuICB2YXIgX3NlbGVjdG9yO1xuXG4gIHZhciBfc2VsZWN0b3JSZWdleHA7XG5cbiAgdmFyIHNlbGZSZWZlcmVuY2VSZXBsYWNlciA9IGZ1bmN0aW9uIHNlbGZSZWZlcmVuY2VSZXBsYWNlcihtYXRjaCwgb2Zmc2V0LCBzdHJpbmcpIHtcbiAgICBpZiAoIC8vIHRoZSBmaXJzdCBzZWxmLXJlZiBpcyBhbHdheXMgdW50b3VjaGVkXG4gICAgb2Zmc2V0ID4gMCAmJiAvLyB0aGVyZSBzaG91bGQgYmUgYXQgbGVhc3QgdHdvIHNlbGYtcmVmcyB0byBkbyBhIHJlcGxhY2VtZW50ICguYiA+IC5iKVxuICAgIHN0cmluZy5zbGljZSgwLCBvZmZzZXQpLmluZGV4T2YoX3NlbGVjdG9yKSAhPT0gLTEgJiYgLy8gbm8gY29uc2VjdXRpdmUgc2VsZiByZWZzICguYi5iKTsgdGhhdCBpcyBhIHByZWNlZGVuY2UgYm9vc3QgYW5kIHRyZWF0ZWQgZGlmZmVyZW50bHlcbiAgICBzdHJpbmcuc2xpY2Uob2Zmc2V0IC0gX3NlbGVjdG9yLmxlbmd0aCwgb2Zmc2V0KSAhPT0gX3NlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gXCIuXCIgKyBfY29tcG9uZW50SWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoO1xuICB9O1xuICAvKipcbiAgICogV2hlbiB3cml0aW5nIGEgc3R5bGUgbGlrZVxuICAgKlxuICAgKiAmICsgJiB7XG4gICAqICAgY29sb3I6IHJlZDtcbiAgICogfVxuICAgKlxuICAgKiBUaGUgc2Vjb25kIGFtcGVyc2FuZCBzaG91bGQgYmUgYSByZWZlcmVuY2UgdG8gdGhlIHN0YXRpYyBjb21wb25lbnQgY2xhc3MuIHN0eWxpc1xuICAgKiBoYXMgbm8ga25vd2xlZGdlIG9mIHN0YXRpYyBjbGFzcyBzbyB3ZSBoYXZlIHRvIGludGVsbGlnZW50bHkgcmVwbGFjZSB0aGUgYmFzZSBzZWxlY3Rvci5cbiAgICpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3RoeXN1bHRhbi9zdHlsaXMuanMjcGx1Z2lucyA8LSBtb3JlIGluZm8gYWJvdXQgdGhlIGNvbnRleHQgcGhhc2UgdmFsdWVzXG4gICAqIFwiMlwiIG1lYW5zIHRoaXMgcGx1Z2luIGlzIHRha2luZyBlZmZlY3QgYXQgdGhlIHZlcnkgZW5kIGFmdGVyIGFsbCBvdGhlciBwcm9jZXNzaW5nIGlzIGNvbXBsZXRlXG4gICAqL1xuXG5cbiAgdmFyIHNlbGZSZWZlcmVuY2VSZXBsYWNlbWVudFBsdWdpbiA9IGZ1bmN0aW9uIHNlbGZSZWZlcmVuY2VSZXBsYWNlbWVudFBsdWdpbihjb250ZXh0LCBfLCBzZWxlY3RvcnMpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gMiAmJiBzZWxlY3RvcnMubGVuZ3RoICYmIHNlbGVjdG9yc1swXS5sYXN0SW5kZXhPZihfc2VsZWN0b3IpID4gMCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBzZWxlY3RvcnNbMF0gPSBzZWxlY3RvcnNbMF0ucmVwbGFjZShfc2VsZWN0b3JSZWdleHAsIHNlbGZSZWZlcmVuY2VSZXBsYWNlcik7XG4gICAgfVxuICB9O1xuXG4gIHN0eWxpcy51c2UoW10uY29uY2F0KHBsdWdpbnMsIFtzZWxmUmVmZXJlbmNlUmVwbGFjZW1lbnRQbHVnaW4sIHBhcnNlUnVsZXNQbHVnaW4sIHJldHVyblJ1bGVzUGx1Z2luXSkpO1xuXG4gIGZ1bmN0aW9uIHN0cmluZ2lmeVJ1bGVzKGNzcywgc2VsZWN0b3IsIHByZWZpeCwgY29tcG9uZW50SWQpIHtcbiAgICBpZiAoY29tcG9uZW50SWQgPT09IHZvaWQgMCkge1xuICAgICAgY29tcG9uZW50SWQgPSAnJic7XG4gICAgfVxuXG4gICAgdmFyIGZsYXRDU1MgPSBjc3MucmVwbGFjZShDT01NRU5UX1JFR0VYLCAnJyk7XG4gICAgdmFyIGNzc1N0ciA9IHNlbGVjdG9yICYmIHByZWZpeCA/IHByZWZpeCArIFwiIFwiICsgc2VsZWN0b3IgKyBcIiB7IFwiICsgZmxhdENTUyArIFwiIH1cIiA6IGZsYXRDU1M7IC8vIHN0eWxpcyBoYXMgbm8gY29uY2VwdCBvZiBzdGF0ZSB0byBiZSBwYXNzZWQgdG8gcGx1Z2luc1xuICAgIC8vIGJ1dCBzaW5jZSBKUyBpcyBzaW5nbGU9dGhyZWFkZWQsIHdlIGNhbiByZWx5IG9uIHRoYXQgdG8gZW5zdXJlXG4gICAgLy8gdGhlc2UgcHJvcGVydGllcyBzdGF5IGluIHN5bmMgd2l0aCB0aGUgY3VycmVudCBzdHlsaXMgcnVuXG5cbiAgICBfY29tcG9uZW50SWQgPSBjb21wb25lbnRJZDtcbiAgICBfc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICBfc2VsZWN0b3JSZWdleHAgPSBuZXcgUmVnRXhwKFwiXFxcXFwiICsgX3NlbGVjdG9yICsgXCJcXFxcYlwiLCAnZycpO1xuICAgIHJldHVybiBzdHlsaXMocHJlZml4IHx8ICFzZWxlY3RvciA/ICcnIDogc2VsZWN0b3IsIGNzc1N0cik7XG4gIH1cblxuICBzdHJpbmdpZnlSdWxlcy5oYXNoID0gcGx1Z2lucy5sZW5ndGggPyBwbHVnaW5zLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbHVnaW4pIHtcbiAgICBpZiAoIXBsdWdpbi5uYW1lKSB7XG4gICAgICB0aHJvd1N0eWxlZENvbXBvbmVudHNFcnJvcigxNSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBoYXNoKGFjYywgcGx1Z2luLm5hbWUpO1xuICB9LCBTRUVEKS50b1N0cmluZygpIDogJyc7XG4gIHJldHVybiBzdHJpbmdpZnlSdWxlcztcbn1cblxuLy8gXG52YXIgU3R5bGVTaGVldENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG52YXIgU3R5bGVTaGVldENvbnN1bWVyID0gU3R5bGVTaGVldENvbnRleHQuQ29uc3VtZXI7XG52YXIgU3R5bGlzQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcbnZhciBTdHlsaXNDb25zdW1lciA9IFN0eWxpc0NvbnRleHQuQ29uc3VtZXI7XG52YXIgbWFzdGVyU2hlZXQgPSBuZXcgU3R5bGVTaGVldCgpO1xudmFyIG1hc3RlclN0eWxpcyA9IGNyZWF0ZVN0eWxpc0luc3RhbmNlKCk7XG5mdW5jdGlvbiB1c2VTdHlsZVNoZWV0KCkge1xuICByZXR1cm4gdXNlQ29udGV4dChTdHlsZVNoZWV0Q29udGV4dCkgfHwgbWFzdGVyU2hlZXQ7XG59XG5mdW5jdGlvbiB1c2VTdHlsaXMoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KFN0eWxpc0NvbnRleHQpIHx8IG1hc3RlclN0eWxpcztcbn1cbmZ1bmN0aW9uIFN0eWxlU2hlZXRNYW5hZ2VyKHByb3BzKSB7XG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShwcm9wcy5zdHlsaXNQbHVnaW5zKSxcbiAgICAgIHBsdWdpbnMgPSBfdXNlU3RhdGVbMF0sXG4gICAgICBzZXRQbHVnaW5zID0gX3VzZVN0YXRlWzFdO1xuXG4gIHZhciBjb250ZXh0U3R5bGVTaGVldCA9IHVzZVN0eWxlU2hlZXQoKTtcbiAgdmFyIHN0eWxlU2hlZXQgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2hlZXQgPSBjb250ZXh0U3R5bGVTaGVldDtcblxuICAgIGlmIChwcm9wcy5zaGVldCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICBzaGVldCA9IHByb3BzLnNoZWV0O1xuICAgIH0gZWxzZSBpZiAocHJvcHMudGFyZ2V0KSB7XG4gICAgICBzaGVldCA9IHNoZWV0LnJlY29uc3RydWN0V2l0aE9wdGlvbnMoe1xuICAgICAgICB0YXJnZXQ6IHByb3BzLnRhcmdldFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmRpc2FibGVDU1NPTUluamVjdGlvbikge1xuICAgICAgc2hlZXQgPSBzaGVldC5yZWNvbnN0cnVjdFdpdGhPcHRpb25zKHtcbiAgICAgICAgdXNlQ1NTT01JbmplY3Rpb246IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2hlZXQ7XG4gIH0sIFtwcm9wcy5kaXNhYmxlQ1NTT01JbmplY3Rpb24sIHByb3BzLnNoZWV0LCBwcm9wcy50YXJnZXRdKTtcbiAgdmFyIHN0eWxpcyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjcmVhdGVTdHlsaXNJbnN0YW5jZSh7XG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHByZWZpeDogIXByb3BzLmRpc2FibGVWZW5kb3JQcmVmaXhlc1xuICAgICAgfSxcbiAgICAgIHBsdWdpbnM6IHBsdWdpbnNcbiAgICB9KTtcbiAgfSwgW3Byb3BzLmRpc2FibGVWZW5kb3JQcmVmaXhlcywgcGx1Z2luc10pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghc2hhbGxvd2VxdWFsKHBsdWdpbnMsIHByb3BzLnN0eWxpc1BsdWdpbnMpKSBzZXRQbHVnaW5zKHByb3BzLnN0eWxpc1BsdWdpbnMpO1xuICB9LCBbcHJvcHMuc3R5bGlzUGx1Z2luc10pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVTaGVldENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogc3R5bGVTaGVldFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsaXNDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHN0eWxpc1xuICB9LCBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gUmVhY3QuQ2hpbGRyZW4ub25seShwcm9wcy5jaGlsZHJlbikgOiBwcm9wcy5jaGlsZHJlbikpO1xufVxuXG4vLyBcblxudmFyIEtleWZyYW1lcyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEtleWZyYW1lcyhuYW1lLCBzdHJpbmdpZnlBcmdzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuaW5qZWN0ID0gZnVuY3Rpb24gKHN0eWxlU2hlZXQpIHtcbiAgICAgIGlmICghc3R5bGVTaGVldC5oYXNOYW1lRm9ySWQoX3RoaXMuaWQsIF90aGlzLm5hbWUpKSB7XG4gICAgICAgIHN0eWxlU2hlZXQuaW5zZXJ0UnVsZXMoX3RoaXMuaWQsIF90aGlzLm5hbWUsIG1hc3RlclN0eWxpcy5hcHBseSh2b2lkIDAsIF90aGlzLnN0cmluZ2lmeUFyZ3MpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aHJvd1N0eWxlZENvbXBvbmVudHNFcnJvcigxMiwgU3RyaW5nKF90aGlzLm5hbWUpKTtcbiAgICB9O1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmlkID0gXCJzYy1rZXlmcmFtZXMtXCIgKyBuYW1lO1xuICAgIHRoaXMuc3RyaW5naWZ5QXJncyA9IHN0cmluZ2lmeUFyZ3M7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gS2V5ZnJhbWVzLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0TmFtZSA9IGZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfTtcblxuICByZXR1cm4gS2V5ZnJhbWVzO1xufSgpO1xuXG4vLyBcblxuLyoqXG4gKiBpbmxpbmVkIHZlcnNpb24gb2ZcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL2ZianMvc3JjL2NvcmUvaHlwaGVuYXRlU3R5bGVOYW1lLmpzXG4gKi9cbnZhciB1cHBlcmNhc2VQYXR0ZXJuID0gLyhbQS1aXSkvZztcbnZhciBtc1BhdHRlcm4gPSAvXm1zLS87XG4vKipcbiAqIEh5cGhlbmF0ZXMgYSBjYW1lbGNhc2VkIENTUyBwcm9wZXJ0eSBuYW1lLCBmb3IgZXhhbXBsZTpcbiAqXG4gKiAgID4gaHlwaGVuYXRlU3R5bGVOYW1lKCdiYWNrZ3JvdW5kQ29sb3InKVxuICogICA8IFwiYmFja2dyb3VuZC1jb2xvclwiXG4gKiAgID4gaHlwaGVuYXRlU3R5bGVOYW1lKCdNb3pUcmFuc2l0aW9uJylcbiAqICAgPCBcIi1tb3otdHJhbnNpdGlvblwiXG4gKiAgID4gaHlwaGVuYXRlU3R5bGVOYW1lKCdtc1RyYW5zaXRpb24nKVxuICogICA8IFwiLW1zLXRyYW5zaXRpb25cIlxuICpcbiAqIEFzIE1vZGVybml6ciBzdWdnZXN0cyAoaHR0cDovL21vZGVybml6ci5jb20vZG9jcy8jcHJlZml4ZWQpLCBhbiBgbXNgIHByZWZpeFxuICogaXMgY29udmVydGVkIHRvIGAtbXMtYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gaHlwaGVuYXRlU3R5bGVOYW1lKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UodXBwZXJjYXNlUGF0dGVybiwgJy0kMScpLnRvTG93ZXJDYXNlKCkucmVwbGFjZShtc1BhdHRlcm4sICctbXMtJyk7XG59XG5cbi8vIFxuXG5mdW5jdGlvbiBhZGRVbml0SWZOZWVkZWQobmFtZSwgdmFsdWUpIHtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FtaWxhamFjay9lc2xpbnQtcGx1Z2luLWZsb3d0eXBlLWVycm9ycy9pc3N1ZXMvMTMzXG4gIC8vICRGbG93Rml4TWVcbiAgaWYgKHZhbHVlID09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgIT09IDAgJiYgIShuYW1lIGluIHVuaXRsZXNzKSkge1xuICAgIHJldHVybiB2YWx1ZSArIFwicHhcIjsgLy8gUHJlc3VtZXMgaW1wbGljaXQgJ3B4JyBzdWZmaXggZm9yIHVuaXRsZXNzIG51bWJlcnNcbiAgfVxuXG4gIHJldHVybiBTdHJpbmcodmFsdWUpLnRyaW0oKTtcbn1cblxuLy8gXG4vKipcbiAqIEl0J3MgZmFsc2lzaCBub3QgZmFsc3kgYmVjYXVzZSAwIGlzIGFsbG93ZWQuXG4gKi9cblxudmFyIGlzRmFsc2lzaCA9IGZ1bmN0aW9uIGlzRmFsc2lzaChjaHVuaykge1xuICByZXR1cm4gY2h1bmsgPT09IHVuZGVmaW5lZCB8fCBjaHVuayA9PT0gbnVsbCB8fCBjaHVuayA9PT0gZmFsc2UgfHwgY2h1bmsgPT09ICcnO1xufTtcblxudmFyIG9ialRvQ3NzQXJyYXkgPSBmdW5jdGlvbiBvYmpUb0Nzc0FycmF5KG9iaiwgcHJldktleSkge1xuICB2YXIgcnVsZXMgPSBbXTtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghaXNGYWxzaXNoKG9ialtrZXldKSkge1xuICAgICAgaWYgKGlzUGxhaW5PYmplY3Qob2JqW2tleV0pKSB7XG4gICAgICAgIHJ1bGVzLnB1c2guYXBwbHkocnVsZXMsIG9ialRvQ3NzQXJyYXkob2JqW2tleV0sIGtleSkpO1xuICAgICAgICByZXR1cm4gcnVsZXM7XG4gICAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24ob2JqW2tleV0pKSB7XG4gICAgICAgIHJ1bGVzLnB1c2goaHlwaGVuYXRlU3R5bGVOYW1lKGtleSkgKyBcIjpcIiwgb2JqW2tleV0sICc7Jyk7XG4gICAgICAgIHJldHVybiBydWxlcztcbiAgICAgIH1cblxuICAgICAgcnVsZXMucHVzaChoeXBoZW5hdGVTdHlsZU5hbWUoa2V5KSArIFwiOiBcIiArIGFkZFVuaXRJZk5lZWRlZChrZXksIG9ialtrZXldKSArIFwiO1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH0pO1xuICByZXR1cm4gcHJldktleSA/IFtwcmV2S2V5ICsgXCIge1wiXS5jb25jYXQocnVsZXMsIFsnfSddKSA6IHJ1bGVzO1xufTtcbmZ1bmN0aW9uIGZsYXR0ZW4oY2h1bmssIGV4ZWN1dGlvbkNvbnRleHQsIHN0eWxlU2hlZXQpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2h1bmspKSB7XG4gICAgdmFyIHJ1bGVTZXQgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjaHVuay5sZW5ndGgsIHJlc3VsdDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICByZXN1bHQgPSBmbGF0dGVuKGNodW5rW2ldLCBleGVjdXRpb25Db250ZXh0LCBzdHlsZVNoZWV0KTtcbiAgICAgIGlmIChyZXN1bHQgPT09ICcnKSBjb250aW51ZTtlbHNlIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHJ1bGVTZXQucHVzaC5hcHBseShydWxlU2V0LCByZXN1bHQpO2Vsc2UgcnVsZVNldC5wdXNoKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVTZXQ7XG4gIH1cblxuICBpZiAoaXNGYWxzaXNoKGNodW5rKSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICAvKiBIYW5kbGUgb3RoZXIgY29tcG9uZW50cyAqL1xuXG5cbiAgaWYgKGlzU3R5bGVkQ29tcG9uZW50KGNodW5rKSkge1xuICAgIHJldHVybiBcIi5cIiArIGNodW5rLnN0eWxlZENvbXBvbmVudElkO1xuICB9XG4gIC8qIEVpdGhlciBleGVjdXRlIG9yIGRlZmVyIHRoZSBmdW5jdGlvbiAqL1xuXG5cbiAgaWYgKGlzRnVuY3Rpb24oY2h1bmspKSB7XG4gICAgaWYgKGlzU3RhdGVsZXNzRnVuY3Rpb24oY2h1bmspICYmIGV4ZWN1dGlvbkNvbnRleHQpIHtcbiAgICAgIHZhciBfcmVzdWx0ID0gY2h1bmsoZXhlY3V0aW9uQ29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGlzRWxlbWVudChfcmVzdWx0KSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4oZ2V0Q29tcG9uZW50TmFtZShjaHVuaykgKyBcIiBpcyBub3QgYSBzdHlsZWQgY29tcG9uZW50IGFuZCBjYW5ub3QgYmUgcmVmZXJyZWQgdG8gdmlhIGNvbXBvbmVudCBzZWxlY3Rvci4gU2VlIGh0dHBzOi8vd3d3LnN0eWxlZC1jb21wb25lbnRzLmNvbS9kb2NzL2FkdmFuY2VkI3JlZmVycmluZy10by1vdGhlci1jb21wb25lbnRzIGZvciBtb3JlIGRldGFpbHMuXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmxhdHRlbihfcmVzdWx0LCBleGVjdXRpb25Db250ZXh0LCBzdHlsZVNoZWV0KTtcbiAgICB9IGVsc2UgcmV0dXJuIGNodW5rO1xuICB9XG5cbiAgaWYgKGNodW5rIGluc3RhbmNlb2YgS2V5ZnJhbWVzKSB7XG4gICAgaWYgKHN0eWxlU2hlZXQpIHtcbiAgICAgIGNodW5rLmluamVjdChzdHlsZVNoZWV0KTtcbiAgICAgIHJldHVybiBjaHVuay5nZXROYW1lKCk7XG4gICAgfSBlbHNlIHJldHVybiBjaHVuaztcbiAgfVxuICAvKiBIYW5kbGUgb2JqZWN0cyAqL1xuXG5cbiAgcmV0dXJuIGlzUGxhaW5PYmplY3QoY2h1bmspID8gb2JqVG9Dc3NBcnJheShjaHVuaykgOiBjaHVuay50b1N0cmluZygpO1xufVxuXG4vLyBcbmZ1bmN0aW9uIGNzcyhzdHlsZXMpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGludGVycG9sYXRpb25zID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBpbnRlcnBvbGF0aW9uc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoaXNGdW5jdGlvbihzdHlsZXMpIHx8IGlzUGxhaW5PYmplY3Qoc3R5bGVzKSkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICByZXR1cm4gZmxhdHRlbihpbnRlcmxlYXZlKEVNUFRZX0FSUkFZLCBbc3R5bGVzXS5jb25jYXQoaW50ZXJwb2xhdGlvbnMpKSk7XG4gIH1cblxuICBpZiAoaW50ZXJwb2xhdGlvbnMubGVuZ3RoID09PSAwICYmIHN0eWxlcy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIHN0eWxlc1swXSA9PT0gXCJzdHJpbmdcIikge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICByZXR1cm4gc3R5bGVzO1xuICB9IC8vICRGbG93Rml4TWVcblxuXG4gIHJldHVybiBmbGF0dGVuKGludGVybGVhdmUoc3R5bGVzLCBpbnRlcnBvbGF0aW9ucykpO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RXaXRoT3B0aW9ucyhjb21wb25lbnRDb25zdHJ1Y3RvciwgdGFnLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0gRU1QVFlfT0JKRUNUO1xuICB9XG5cbiAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodGFnKSkge1xuICAgIHJldHVybiB0aHJvd1N0eWxlZENvbXBvbmVudHNFcnJvcigxLCBTdHJpbmcodGFnKSk7XG4gIH1cbiAgLyogVGhpcyBpcyBjYWxsYWJsZSBkaXJlY3RseSBhcyBhIHRlbXBsYXRlIGZ1bmN0aW9uICovXG4gIC8vICRGbG93Rml4TWU6IE5vdCB0eXBlZCB0byBhdm9pZCBkZXN0cnVjdHVyaW5nIGFyZ3VtZW50c1xuXG5cbiAgdmFyIHRlbXBsYXRlRnVuY3Rpb24gPSBmdW5jdGlvbiB0ZW1wbGF0ZUZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBjb21wb25lbnRDb25zdHJ1Y3Rvcih0YWcsIG9wdGlvbnMsIGNzcy5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cykpO1xuICB9O1xuICAvKiBJZiBjb25maWcgbWV0aG9kcyBhcmUgY2FsbGVkLCB3cmFwIHVwIGEgbmV3IHRlbXBsYXRlIGZ1bmN0aW9uIGFuZCBtZXJnZSBvcHRpb25zICovXG5cblxuICB0ZW1wbGF0ZUZ1bmN0aW9uLndpdGhDb25maWcgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgcmV0dXJuIGNvbnN0cnVjdFdpdGhPcHRpb25zKGNvbXBvbmVudENvbnN0cnVjdG9yLCB0YWcsIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7fSwgY29uZmlnKSk7XG4gIH07XG4gIC8qIE1vZGlmeS9pbmplY3QgbmV3IHByb3BzIGF0IHJ1bnRpbWUgKi9cblxuXG4gIHRlbXBsYXRlRnVuY3Rpb24uYXR0cnMgPSBmdW5jdGlvbiAoYXR0cnMpIHtcbiAgICByZXR1cm4gY29uc3RydWN0V2l0aE9wdGlvbnMoY29tcG9uZW50Q29uc3RydWN0b3IsIHRhZywgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIGF0dHJzOiBBcnJheS5wcm90b3R5cGUuY29uY2F0KG9wdGlvbnMuYXR0cnMsIGF0dHJzKS5maWx0ZXIoQm9vbGVhbilcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIHRlbXBsYXRlRnVuY3Rpb247XG59XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8qKlxuICBtaXhpbi1kZWVwOyBodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9taXhpbi1kZWVwXG4gIElubGluZWQgc3VjaCB0aGF0IGl0IHdpbGwgYmUgY29uc2lzdGVudGx5IHRyYW5zcGlsZWQgdG8gYW4gSUUtY29tcGF0aWJsZSBzeW50YXguXG5cbiAgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbiAgQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEpvbiBTY2hsaW5rZXJ0LlxuXG4gIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAgYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICBUSEUgU09GVFdBUkUuXG4qL1xudmFyIGlzT2JqZWN0ID0gZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbCAhPT0gbnVsbCAmJiAhQXJyYXkuaXNBcnJheSh2YWwpO1xufTtcblxudmFyIGlzVmFsaWRLZXkgPSBmdW5jdGlvbiBpc1ZhbGlkS2V5KGtleSkge1xuICByZXR1cm4ga2V5ICE9PSAnX19wcm90b19fJyAmJiBrZXkgIT09ICdjb25zdHJ1Y3RvcicgJiYga2V5ICE9PSAncHJvdG90eXBlJztcbn07XG5cbmZ1bmN0aW9uIG1peGluKHRhcmdldCwgdmFsLCBrZXkpIHtcbiAgdmFyIG9iaiA9IHRhcmdldFtrZXldO1xuXG4gIGlmIChpc09iamVjdCh2YWwpICYmIGlzT2JqZWN0KG9iaikpIHtcbiAgICBtaXhpbkRlZXAob2JqLCB2YWwpO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldFtrZXldID0gdmFsO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1peGluRGVlcCh0YXJnZXQpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHJlc3RbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgZm9yICh2YXIgX2kgPSAwLCBfcmVzdCA9IHJlc3Q7IF9pIDwgX3Jlc3QubGVuZ3RoOyBfaSsrKSB7XG4gICAgdmFyIG9iaiA9IF9yZXN0W19pXTtcblxuICAgIGlmIChpc09iamVjdChvYmopKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChpc1ZhbGlkS2V5KGtleSkpIHtcbiAgICAgICAgICBtaXhpbih0YXJnZXQsIG9ialtrZXldLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuLy8gXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UgKi9cbnZhciBBRF9SRVBMQUNFUl9SID0gLyhhKShkKS9naTtcbi8qIFRoaXMgaXMgdGhlIFwiY2FwYWNpdHlcIiBvZiBvdXIgYWxwaGFiZXQgaS5lLiAyeDI2IGZvciBhbGwgbGV0dGVycyBwbHVzIHRoZWlyIGNhcGl0YWxpc2VkXG4gKiBjb3VudGVycGFydHMgKi9cblxudmFyIGNoYXJzTGVuZ3RoID0gNTI7XG4vKiBzdGFydCBhdCA3NSBmb3IgJ2EnIHVudGlsICd6JyAoMjUpIGFuZCB0aGVuIHN0YXJ0IGF0IDY1IGZvciBjYXBpdGFsaXNlZCBsZXR0ZXJzICovXG5cbnZhciBnZXRBbHBoYWJldGljQ2hhciA9IGZ1bmN0aW9uIGdldEFscGhhYmV0aWNDaGFyKGNvZGUpIHtcbiAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSArIChjb2RlID4gMjUgPyAzOSA6IDk3KSk7XG59O1xuLyogaW5wdXQgYSBudW1iZXIsIHVzdWFsbHkgYSBoYXNoIGFuZCBjb252ZXJ0IGl0IHRvIGJhc2UtNTIgKi9cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZUFscGhhYmV0aWNOYW1lKGNvZGUpIHtcbiAgdmFyIG5hbWUgPSAnJztcbiAgdmFyIHg7XG4gIC8qIGdldCBhIGNoYXIgYW5kIGRpdmlkZSBieSBhbHBoYWJldC1sZW5ndGggKi9cblxuICBmb3IgKHggPSBNYXRoLmFicyhjb2RlKTsgeCA+IGNoYXJzTGVuZ3RoOyB4ID0geCAvIGNoYXJzTGVuZ3RoIHwgMCkge1xuICAgIG5hbWUgPSBnZXRBbHBoYWJldGljQ2hhcih4ICUgY2hhcnNMZW5ndGgpICsgbmFtZTtcbiAgfVxuXG4gIHJldHVybiAoZ2V0QWxwaGFiZXRpY0NoYXIoeCAlIGNoYXJzTGVuZ3RoKSArIG5hbWUpLnJlcGxhY2UoQURfUkVQTEFDRVJfUiwgJyQxLSQyJyk7XG59XG5cbi8vIFxuZnVuY3Rpb24gaXNTdGF0aWNSdWxlcyhydWxlcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIHJ1bGUgPSBydWxlc1tpXTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKHJ1bGUpICYmICFpc1N0eWxlZENvbXBvbmVudChydWxlKSkge1xuICAgICAgLy8gZnVuY3Rpb25zIGFyZSBhbGxvd2VkIHRvIGJlIHN0YXRpYyBpZiB0aGV5J3JlIGp1c3QgYmVpbmdcbiAgICAgIC8vIHVzZWQgdG8gZ2V0IHRoZSBjbGFzc25hbWUgb2YgYSBuZXN0ZWQgc3R5bGVkIGNvbXBvbmVudFxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBcbi8qXG4gQ29tcG9uZW50U3R5bGUgaXMgYWxsIHRoZSBDU1Mtc3BlY2lmaWMgc3R1ZmYsIG5vdFxuIHRoZSBSZWFjdC1zcGVjaWZpYyBzdHVmZi5cbiAqL1xuXG52YXIgQ29tcG9uZW50U3R5bGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb21wb25lbnRTdHlsZShydWxlcywgY29tcG9uZW50SWQpIHtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5zdGF0aWNSdWxlc0lkID0gJyc7XG4gICAgdGhpcy5pc1N0YXRpYyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgaXNTdGF0aWNSdWxlcyhydWxlcyk7XG4gICAgdGhpcy5jb21wb25lbnRJZCA9IGNvbXBvbmVudElkO1xuICAgIHRoaXMuYmFzZUhhc2ggPSBoYXNoKGNvbXBvbmVudElkKTsgLy8gTk9URTogVGhpcyByZWdpc3RlcnMgdGhlIGNvbXBvbmVudElkLCB3aGljaCBlbnN1cmVzIGEgY29uc2lzdGVudCBvcmRlclxuICAgIC8vIGZvciB0aGlzIGNvbXBvbmVudCdzIHN0eWxlcyBjb21wYXJlZCB0byBvdGhlcnNcblxuICAgIFN0eWxlU2hlZXQucmVnaXN0ZXJJZChjb21wb25lbnRJZCk7XG4gIH1cbiAgLypcbiAgICogRmxhdHRlbnMgYSBydWxlIHNldCBpbnRvIHZhbGlkIENTU1xuICAgKiBIYXNoZXMgaXQsIHdyYXBzIHRoZSB3aG9sZSBjaHVuayBpbiBhIC5oYXNoMTIzNCB7fVxuICAgKiBSZXR1cm5zIHRoZSBoYXNoIHRvIGJlIGluamVjdGVkIG9uIHJlbmRlcigpXG4gICAqICovXG5cblxuICB2YXIgX3Byb3RvID0gQ29tcG9uZW50U3R5bGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyA9IGZ1bmN0aW9uIGdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKGV4ZWN1dGlvbkNvbnRleHQsIHN0eWxlU2hlZXQsIHN0eWxpcykge1xuICAgIHZhciBjb21wb25lbnRJZCA9IHRoaXMuY29tcG9uZW50SWQ7IC8vIGZvcmNlIGR5bmFtaWMgY2xhc3NuYW1lcyBpZiB1c2VyLXN1cHBsaWVkIHN0eWxpcyBwbHVnaW5zIGFyZSBpbiB1c2VcblxuICAgIGlmICh0aGlzLmlzU3RhdGljICYmICFzdHlsaXMuaGFzaCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGljUnVsZXNJZCAmJiBzdHlsZVNoZWV0Lmhhc05hbWVGb3JJZChjb21wb25lbnRJZCwgdGhpcy5zdGF0aWNSdWxlc0lkKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0aWNSdWxlc0lkO1xuICAgICAgfVxuXG4gICAgICB2YXIgY3NzU3RhdGljID0gZmxhdHRlbih0aGlzLnJ1bGVzLCBleGVjdXRpb25Db250ZXh0LCBzdHlsZVNoZWV0KS5qb2luKCcnKTtcbiAgICAgIHZhciBuYW1lID0gZ2VuZXJhdGVBbHBoYWJldGljTmFtZShwaGFzaCh0aGlzLmJhc2VIYXNoLCBjc3NTdGF0aWMubGVuZ3RoKSA+Pj4gMCk7XG5cbiAgICAgIGlmICghc3R5bGVTaGVldC5oYXNOYW1lRm9ySWQoY29tcG9uZW50SWQsIG5hbWUpKSB7XG4gICAgICAgIHZhciBjc3NTdGF0aWNGb3JtYXR0ZWQgPSBzdHlsaXMoY3NzU3RhdGljLCBcIi5cIiArIG5hbWUsIHVuZGVmaW5lZCwgY29tcG9uZW50SWQpO1xuICAgICAgICBzdHlsZVNoZWV0Lmluc2VydFJ1bGVzKGNvbXBvbmVudElkLCBuYW1lLCBjc3NTdGF0aWNGb3JtYXR0ZWQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnN0YXRpY1J1bGVzSWQgPSBuYW1lO1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBsZW5ndGggPSB0aGlzLnJ1bGVzLmxlbmd0aDtcbiAgICAgIHZhciBkeW5hbWljSGFzaCA9IHBoYXNoKHRoaXMuYmFzZUhhc2gsIHN0eWxpcy5oYXNoKTtcbiAgICAgIHZhciBjc3MgPSAnJztcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcGFydFJ1bGUgPSB0aGlzLnJ1bGVzW2ldO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcGFydFJ1bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY3NzICs9IHBhcnRSdWxlO1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSBkeW5hbWljSGFzaCA9IHBoYXNoKGR5bmFtaWNIYXNoLCBwYXJ0UnVsZSArIGkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBwYXJ0Q2h1bmsgPSBmbGF0dGVuKHBhcnRSdWxlLCBleGVjdXRpb25Db250ZXh0LCBzdHlsZVNoZWV0KTtcbiAgICAgICAgICB2YXIgcGFydFN0cmluZyA9IEFycmF5LmlzQXJyYXkocGFydENodW5rKSA/IHBhcnRDaHVuay5qb2luKCcnKSA6IHBhcnRDaHVuaztcbiAgICAgICAgICBkeW5hbWljSGFzaCA9IHBoYXNoKGR5bmFtaWNIYXNoLCBwYXJ0U3RyaW5nICsgaSk7XG4gICAgICAgICAgY3NzICs9IHBhcnRTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIF9uYW1lID0gZ2VuZXJhdGVBbHBoYWJldGljTmFtZShkeW5hbWljSGFzaCA+Pj4gMCk7XG5cbiAgICAgIGlmICghc3R5bGVTaGVldC5oYXNOYW1lRm9ySWQoY29tcG9uZW50SWQsIF9uYW1lKSkge1xuICAgICAgICB2YXIgY3NzRm9ybWF0dGVkID0gc3R5bGlzKGNzcywgXCIuXCIgKyBfbmFtZSwgdW5kZWZpbmVkLCBjb21wb25lbnRJZCk7XG4gICAgICAgIHN0eWxlU2hlZXQuaW5zZXJ0UnVsZXMoY29tcG9uZW50SWQsIF9uYW1lLCBjc3NGb3JtYXR0ZWQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX25hbWU7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBDb21wb25lbnRTdHlsZTtcbn0oKTtcblxuLy8gXG52YXIgTElNSVQgPSAyMDA7XG52YXIgY3JlYXRlV2FyblRvb01hbnlDbGFzc2VzID0gKGZ1bmN0aW9uIChkaXNwbGF5TmFtZSwgY29tcG9uZW50SWQpIHtcbiAgdmFyIGdlbmVyYXRlZENsYXNzZXMgPSB7fTtcbiAgdmFyIHdhcm5pbmdTZWVuID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCF3YXJuaW5nU2Vlbikge1xuICAgICAgZ2VuZXJhdGVkQ2xhc3Nlc1tjbGFzc05hbWVdID0gdHJ1ZTtcblxuICAgICAgaWYgKE9iamVjdC5rZXlzKGdlbmVyYXRlZENsYXNzZXMpLmxlbmd0aCA+PSBMSU1JVCkge1xuICAgICAgICAvLyBVbmFibGUgdG8gZmluZCBsYXRlc3RSdWxlIGluIHRlc3QgZW52aXJvbm1lbnQuXG5cbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSwgcHJlZmVyLXRlbXBsYXRlICovXG4gICAgICAgIHZhciBwYXJzZWRJZFN0cmluZyA9IGNvbXBvbmVudElkID8gXCIgd2l0aCB0aGUgaWQgb2YgXFxcIlwiICsgY29tcG9uZW50SWQgKyBcIlxcXCJcIiA6ICcnO1xuICAgICAgICBjb25zb2xlLndhcm4oXCJPdmVyIFwiICsgTElNSVQgKyBcIiBjbGFzc2VzIHdlcmUgZ2VuZXJhdGVkIGZvciBjb21wb25lbnQgXCIgKyBkaXNwbGF5TmFtZSArIHBhcnNlZElkU3RyaW5nICsgXCIuXFxuXCIgKyAnQ29uc2lkZXIgdXNpbmcgdGhlIGF0dHJzIG1ldGhvZCwgdG9nZXRoZXIgd2l0aCBhIHN0eWxlIG9iamVjdCBmb3IgZnJlcXVlbnRseSBjaGFuZ2VkIHN0eWxlcy5cXG4nICsgJ0V4YW1wbGU6XFxuJyArICcgIGNvbnN0IENvbXBvbmVudCA9IHN0eWxlZC5kaXYuYXR0cnMocHJvcHMgPT4gKHtcXG4nICsgJyAgICBzdHlsZToge1xcbicgKyAnICAgICAgYmFja2dyb3VuZDogcHJvcHMuYmFja2dyb3VuZCxcXG4nICsgJyAgICB9LFxcbicgKyAnICB9KSlgd2lkdGg6IDEwMCU7YFxcblxcbicgKyAnICA8Q29tcG9uZW50IC8+Jyk7XG4gICAgICAgIHdhcm5pbmdTZWVuID0gdHJ1ZTtcbiAgICAgICAgZ2VuZXJhdGVkQ2xhc3NlcyA9IHt9O1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pO1xuXG4vLyBcbnZhciBpbnZhbGlkSG9va0NhbGxSZSA9IC9pbnZhbGlkIGhvb2sgY2FsbC9pO1xudmFyIHNlZW4gPSBuZXcgU2V0KCk7XG52YXIgY2hlY2tEeW5hbWljQ3JlYXRpb24gPSBmdW5jdGlvbiBjaGVja0R5bmFtaWNDcmVhdGlvbihkaXNwbGF5TmFtZSwgY29tcG9uZW50SWQpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YXIgcGFyc2VkSWRTdHJpbmcgPSBjb21wb25lbnRJZCA/IFwiIHdpdGggdGhlIGlkIG9mIFxcXCJcIiArIGNvbXBvbmVudElkICsgXCJcXFwiXCIgOiAnJztcbiAgICB2YXIgbWVzc2FnZSA9IFwiVGhlIGNvbXBvbmVudCBcIiArIGRpc3BsYXlOYW1lICsgcGFyc2VkSWRTdHJpbmcgKyBcIiBoYXMgYmVlbiBjcmVhdGVkIGR5bmFtaWNhbGx5LlxcblwiICsgJ1lvdSBtYXkgc2VlIHRoaXMgd2FybmluZyBiZWNhdXNlIHlvdVxcJ3ZlIGNhbGxlZCBzdHlsZWQgaW5zaWRlIGFub3RoZXIgY29tcG9uZW50LlxcbicgKyAnVG8gcmVzb2x2ZSB0aGlzIG9ubHkgY3JlYXRlIG5ldyBTdHlsZWRDb21wb25lbnRzIG91dHNpZGUgb2YgYW55IHJlbmRlciBtZXRob2QgYW5kIGZ1bmN0aW9uIGNvbXBvbmVudC4nO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIFdlIHB1cnBvc2VmdWxseSBjYWxsIGB1c2VSZWZgIG91dHNpZGUgb2YgYSBjb21wb25lbnQgYW5kIGV4cGVjdCBpdCB0byB0aHJvd1xuICAgICAgLy8gSWYgaXQgZG9lc24ndCwgdGhlbiB3ZSdyZSBpbnNpZGUgYW5vdGhlciBjb21wb25lbnQuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgIHVzZVJlZigpO1xuXG4gICAgICBpZiAoIXNlZW4uaGFzKG1lc3NhZ2UpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICAgICAgc2Vlbi5hZGQobWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIFRoZSBlcnJvciBoZXJlIGlzIGV4cGVjdGVkLCBzaW5jZSB3ZSdyZSBleHBlY3RpbmcgYW55dGhpbmcgdGhhdCB1c2VzIGBjaGVja0R5bmFtaWNDcmVhdGlvbmAgdG9cbiAgICAgIC8vIGJlIGNhbGxlZCBvdXRzaWRlIG9mIGEgUmVhY3QgY29tcG9uZW50LlxuICAgICAgaWYgKGludmFsaWRIb29rQ2FsbFJlLnRlc3QoZXJyb3IubWVzc2FnZSkpIHtcbiAgICAgICAgLy8gVGhpcyBzaG91bGRuJ3QgaGFwcGVuLCBidXQgcmVzZXRzIGB3YXJuaW5nU2VlbmAgaWYgd2UgaGFkIHRoaXMgZXJyb3IgaGFwcGVuIGludGVybWl0dGVudGx5XG4gICAgICAgIHNlZW5bXCJkZWxldGVcIl0obWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vLyBcbnZhciBkZXRlcm1pbmVUaGVtZSA9IChmdW5jdGlvbiAocHJvcHMsIHByb3ZpZGVkVGhlbWUsIGRlZmF1bHRQcm9wcykge1xuICBpZiAoZGVmYXVsdFByb3BzID09PSB2b2lkIDApIHtcbiAgICBkZWZhdWx0UHJvcHMgPSBFTVBUWV9PQkpFQ1Q7XG4gIH1cblxuICByZXR1cm4gcHJvcHMudGhlbWUgIT09IGRlZmF1bHRQcm9wcy50aGVtZSAmJiBwcm9wcy50aGVtZSB8fCBwcm92aWRlZFRoZW1lIHx8IGRlZmF1bHRQcm9wcy50aGVtZTtcbn0pO1xuXG4vLyBcbi8vIFNvdXJjZTogaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzc29tLTEvI3NlcmlhbGl6ZS1hbi1pZGVudGlmaWVyXG4vLyBDb250cm9sIGNoYXJhY3RlcnMgYW5kIG5vbi1sZXR0ZXIgZmlyc3Qgc3ltYm9scyBhcmUgbm90IHN1cHBvcnRlZFxudmFyIGVzY2FwZVJlZ2V4ID0gL1shXCIjJCUmJygpKissLi86Ozw9Pj9AW1xcXFxcXF1eYHt8fX4tXSsvZztcbnZhciBkYXNoZXNBdEVuZHMgPSAvKF4tfC0kKS9nO1xuLyoqXG4gKiBUT0RPOiBFeHBsb3JlIHVzaW5nIENTUy5lc2NhcGUgd2hlbiBpdCBiZWNvbWVzIG1vcmUgYXZhaWxhYmxlXG4gKiBpbiBldmVyZ3JlZW4gYnJvd3NlcnMuXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlKHN0cikge1xuICByZXR1cm4gc3RyIC8vIFJlcGxhY2UgYWxsIHBvc3NpYmxlIENTUyBzZWxlY3RvcnNcbiAgLnJlcGxhY2UoZXNjYXBlUmVnZXgsICctJykgLy8gUmVtb3ZlIGV4dHJhbmVvdXMgaHlwaGVucyBhdCB0aGUgc3RhcnQgYW5kIGVuZFxuICAucmVwbGFjZShkYXNoZXNBdEVuZHMsICcnKTtcbn1cblxuLy8gXG5mdW5jdGlvbiBpc1RhZyh0YXJnZXQpIHtcbiAgcmV0dXJuIHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnICYmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gdGFyZ2V0LmNoYXJBdCgwKSA9PT0gdGFyZ2V0LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpIDogdHJ1ZSk7XG59XG5cbi8vIFxuZnVuY3Rpb24gZ2VuZXJhdGVEaXNwbGF5TmFtZSh0YXJnZXQpIHtcbiAgLy8gJEZsb3dGaXhNZVxuICByZXR1cm4gaXNUYWcodGFyZ2V0KSA/IFwic3R5bGVkLlwiICsgdGFyZ2V0IDogXCJTdHlsZWQoXCIgKyBnZXRDb21wb25lbnROYW1lKHRhcmdldCkgKyBcIilcIjtcbn1cblxuLy8gXG52YXIgZ2VuZXJhdGVDb21wb25lbnRJZCA9IChmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBnZW5lcmF0ZUFscGhhYmV0aWNOYW1lKGhhc2goc3RyKSA+Pj4gMCk7XG59KTtcblxuLyoqXG4gKiBDb252ZW5pZW5jZSBmdW5jdGlvbiBmb3Igam9pbmluZyBzdHJpbmdzIHRvIGZvcm0gY2xhc3NOYW1lIGNoYWluc1xuICovXG5mdW5jdGlvbiBqb2luU3RyaW5ncyhhLCBiKSB7XG4gIHJldHVybiBhICYmIGIgPyBhICsgXCIgXCIgKyBiIDogYSB8fCBiO1xufVxuXG52YXIgVGhlbWVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xudmFyIFRoZW1lQ29uc3VtZXIgPSBUaGVtZUNvbnRleHQuQ29uc3VtZXI7XG5cbmZ1bmN0aW9uIG1lcmdlVGhlbWUodGhlbWUsIG91dGVyVGhlbWUpIHtcbiAgaWYgKCF0aGVtZSkge1xuICAgIHJldHVybiB0aHJvd1N0eWxlZENvbXBvbmVudHNFcnJvcigxNCk7XG4gIH1cblxuICBpZiAoaXNGdW5jdGlvbih0aGVtZSkpIHtcbiAgICB2YXIgbWVyZ2VkVGhlbWUgPSB0aGVtZShvdXRlclRoZW1lKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIChtZXJnZWRUaGVtZSA9PT0gbnVsbCB8fCBBcnJheS5pc0FycmF5KG1lcmdlZFRoZW1lKSB8fCB0eXBlb2YgbWVyZ2VkVGhlbWUgIT09ICdvYmplY3QnKSkge1xuICAgICAgcmV0dXJuIHRocm93U3R5bGVkQ29tcG9uZW50c0Vycm9yKDcpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXJnZWRUaGVtZTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHRoZW1lKSB8fCB0eXBlb2YgdGhlbWUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHRocm93U3R5bGVkQ29tcG9uZW50c0Vycm9yKDgpO1xuICB9XG5cbiAgcmV0dXJuIG91dGVyVGhlbWUgPyBfZXh0ZW5kcyh7fSwgb3V0ZXJUaGVtZSwge30sIHRoZW1lKSA6IHRoZW1lO1xufVxuLyoqXG4gKiBQcm92aWRlIGEgdGhlbWUgdG8gYW4gZW50aXJlIHJlYWN0IGNvbXBvbmVudCB0cmVlIHZpYSBjb250ZXh0XG4gKi9cblxuXG5mdW5jdGlvbiBUaGVtZVByb3ZpZGVyKHByb3BzKSB7XG4gIHZhciBvdXRlclRoZW1lID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuICB2YXIgdGhlbWVDb250ZXh0ID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG1lcmdlVGhlbWUocHJvcHMudGhlbWUsIG91dGVyVGhlbWUpO1xuICB9LCBbcHJvcHMudGhlbWUsIG91dGVyVGhlbWVdKTtcblxuICBpZiAoIXByb3BzLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGhlbWVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHRoZW1lQ29udGV4dFxuICB9LCBwcm9wcy5jaGlsZHJlbik7XG59XG5cbi8qIGdsb2JhbCAkQ2FsbCAqL1xuXG52YXIgaWRlbnRpZmllcnMgPSB7fTtcbi8qIFdlIGRlcGVuZCBvbiBjb21wb25lbnRzIGhhdmluZyB1bmlxdWUgSURzICovXG5cbmZ1bmN0aW9uIGdlbmVyYXRlSWQoZGlzcGxheU5hbWUsIHBhcmVudENvbXBvbmVudElkKSB7XG4gIHZhciBuYW1lID0gdHlwZW9mIGRpc3BsYXlOYW1lICE9PSAnc3RyaW5nJyA/ICdzYycgOiBlc2NhcGUoZGlzcGxheU5hbWUpOyAvLyBFbnN1cmUgdGhhdCBubyBkaXNwbGF5TmFtZSBjYW4gbGVhZCB0byBkdXBsaWNhdGUgY29tcG9uZW50SWRzXG5cbiAgaWRlbnRpZmllcnNbbmFtZV0gPSAoaWRlbnRpZmllcnNbbmFtZV0gfHwgMCkgKyAxO1xuICB2YXIgY29tcG9uZW50SWQgPSBuYW1lICsgXCItXCIgKyBnZW5lcmF0ZUNvbXBvbmVudElkKG5hbWUgKyBpZGVudGlmaWVyc1tuYW1lXSk7XG4gIHJldHVybiBwYXJlbnRDb21wb25lbnRJZCA/IHBhcmVudENvbXBvbmVudElkICsgXCItXCIgKyBjb21wb25lbnRJZCA6IGNvbXBvbmVudElkO1xufVxuXG5mdW5jdGlvbiB1c2VSZXNvbHZlZEF0dHJzKHRoZW1lLCBwcm9wcywgYXR0cnMpIHtcbiAgaWYgKHRoZW1lID09PSB2b2lkIDApIHtcbiAgICB0aGVtZSA9IEVNUFRZX09CSkVDVDtcbiAgfVxuXG4gIC8vIE5PVEU6IGNhbid0IG1lbW9pemUgdGhpc1xuICAvLyByZXR1cm5zIFtjb250ZXh0LCByZXNvbHZlZEF0dHJzXVxuICAvLyB3aGVyZSByZXNvbHZlZEF0dHJzIGlzIG9ubHkgdGhlIHRoaW5ncyBpbmplY3RlZCBieSB0aGUgYXR0cnMgdGhlbXNlbHZlc1xuICB2YXIgY29udGV4dCA9IF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIHRoZW1lOiB0aGVtZVxuICB9KTtcblxuICB2YXIgcmVzb2x2ZWRBdHRycyA9IHt9O1xuICBhdHRycy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyRGVmKSB7XG4gICAgdmFyIHJlc29sdmVkQXR0ckRlZiA9IGF0dHJEZWY7XG4gICAgdmFyIGtleTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKHJlc29sdmVkQXR0ckRlZikpIHtcbiAgICAgIHJlc29sdmVkQXR0ckRlZiA9IHJlc29sdmVkQXR0ckRlZihjb250ZXh0KTtcbiAgICB9XG4gICAgLyogZXNsaW50LWRpc2FibGUgZ3VhcmQtZm9yLWluICovXG5cblxuICAgIGZvciAoa2V5IGluIHJlc29sdmVkQXR0ckRlZikge1xuICAgICAgY29udGV4dFtrZXldID0gcmVzb2x2ZWRBdHRyc1trZXldID0ga2V5ID09PSAnY2xhc3NOYW1lJyA/IGpvaW5TdHJpbmdzKHJlc29sdmVkQXR0cnNba2V5XSwgcmVzb2x2ZWRBdHRyRGVmW2tleV0pIDogcmVzb2x2ZWRBdHRyRGVmW2tleV07XG4gICAgfVxuICAgIC8qIGVzbGludC1lbmFibGUgZ3VhcmQtZm9yLWluICovXG5cbiAgfSk7XG4gIHJldHVybiBbY29udGV4dCwgcmVzb2x2ZWRBdHRyc107XG59XG5cbmZ1bmN0aW9uIHVzZUluamVjdGVkU3R5bGUoY29tcG9uZW50U3R5bGUsIGhhc0F0dHJzLCByZXNvbHZlZEF0dHJzLCB3YXJuVG9vTWFueUNsYXNzZXMpIHtcbiAgdmFyIHN0eWxlU2hlZXQgPSB1c2VTdHlsZVNoZWV0KCk7XG4gIHZhciBzdHlsaXMgPSB1c2VTdHlsaXMoKTsgLy8gc3RhdGljYWxseSBzdHlsZWQtY29tcG9uZW50cyBkb24ndCBuZWVkIHRvIGJ1aWxkIGFuIGV4ZWN1dGlvbiBjb250ZXh0IG9iamVjdCxcbiAgLy8gYW5kIHNob3VsZG4ndCBiZSBpbmNyZWFzaW5nIHRoZSBudW1iZXIgb2YgY2xhc3MgbmFtZXNcblxuICB2YXIgaXNTdGF0aWMgPSBjb21wb25lbnRTdHlsZS5pc1N0YXRpYyAmJiAhaGFzQXR0cnM7XG4gIHZhciBjbGFzc05hbWUgPSBpc1N0YXRpYyA/IGNvbXBvbmVudFN0eWxlLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKEVNUFRZX09CSkVDVCwgc3R5bGVTaGVldCwgc3R5bGlzKSA6IGNvbXBvbmVudFN0eWxlLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKHJlc29sdmVkQXR0cnMsIHN0eWxlU2hlZXQsIHN0eWxpcyk7XG4gIHVzZURlYnVnVmFsdWUoY2xhc3NOYW1lKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhaXNTdGF0aWMgJiYgd2FyblRvb01hbnlDbGFzc2VzKSB7XG4gICAgd2FyblRvb01hbnlDbGFzc2VzKGNsYXNzTmFtZSk7XG4gIH1cblxuICByZXR1cm4gY2xhc3NOYW1lO1xufVxuXG5mdW5jdGlvbiB1c2VTdHlsZWRDb21wb25lbnRJbXBsKGZvcndhcmRlZENvbXBvbmVudCwgcHJvcHMsIGZvcndhcmRlZFJlZikge1xuICB2YXIgY29tcG9uZW50QXR0cnMgPSBmb3J3YXJkZWRDb21wb25lbnQuYXR0cnMsXG4gICAgICBjb21wb25lbnRTdHlsZSA9IGZvcndhcmRlZENvbXBvbmVudC5jb21wb25lbnRTdHlsZSxcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGZvcndhcmRlZENvbXBvbmVudC5kZWZhdWx0UHJvcHMsXG4gICAgICBmb2xkZWRDb21wb25lbnRJZHMgPSBmb3J3YXJkZWRDb21wb25lbnQuZm9sZGVkQ29tcG9uZW50SWRzLFxuICAgICAgc2hvdWxkRm9yd2FyZFByb3AgPSBmb3J3YXJkZWRDb21wb25lbnQuc2hvdWxkRm9yd2FyZFByb3AsXG4gICAgICBzdHlsZWRDb21wb25lbnRJZCA9IGZvcndhcmRlZENvbXBvbmVudC5zdHlsZWRDb21wb25lbnRJZCxcbiAgICAgIHRhcmdldCA9IGZvcndhcmRlZENvbXBvbmVudC50YXJnZXQ7XG4gIHVzZURlYnVnVmFsdWUoc3R5bGVkQ29tcG9uZW50SWQpOyAvLyBOT1RFOiB0aGUgbm9uLWhvb2tzIHZlcnNpb24gb25seSBzdWJzY3JpYmVzIHRvIHRoaXMgd2hlbiAhY29tcG9uZW50U3R5bGUuaXNTdGF0aWMsXG4gIC8vIGJ1dCB0aGF0J2QgYmUgYWdhaW5zdCB0aGUgcnVsZXMtb2YtaG9va3MuIFdlIGNvdWxkIGJlIG5hdWdodHkgYW5kIGRvIGl0IGFueXdheSBhcyBpdFxuICAvLyBzaG91bGQgYmUgYW4gaW1tdXRhYmxlIHZhbHVlLCBidXQgYmVoYXZlIGZvciBub3cuXG5cbiAgdmFyIHRoZW1lID0gZGV0ZXJtaW5lVGhlbWUocHJvcHMsIHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KSwgZGVmYXVsdFByb3BzKTtcblxuICB2YXIgX3VzZVJlc29sdmVkQXR0cnMgPSB1c2VSZXNvbHZlZEF0dHJzKHRoZW1lIHx8IEVNUFRZX09CSkVDVCwgcHJvcHMsIGNvbXBvbmVudEF0dHJzKSxcbiAgICAgIGNvbnRleHQgPSBfdXNlUmVzb2x2ZWRBdHRyc1swXSxcbiAgICAgIGF0dHJzID0gX3VzZVJlc29sdmVkQXR0cnNbMV07XG5cbiAgdmFyIGdlbmVyYXRlZENsYXNzTmFtZSA9IHVzZUluamVjdGVkU3R5bGUoY29tcG9uZW50U3R5bGUsIGNvbXBvbmVudEF0dHJzLmxlbmd0aCA+IDAsIGNvbnRleHQsIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBmb3J3YXJkZWRDb21wb25lbnQud2FyblRvb01hbnlDbGFzc2VzIDogdW5kZWZpbmVkKTtcbiAgdmFyIHJlZlRvRm9yd2FyZCA9IGZvcndhcmRlZFJlZjtcbiAgdmFyIGVsZW1lbnRUb0JlQ3JlYXRlZCA9IGF0dHJzLiRhcyB8fCBwcm9wcy4kYXMgfHwgYXR0cnMuYXMgfHwgcHJvcHMuYXMgfHwgdGFyZ2V0O1xuICB2YXIgaXNUYXJnZXRUYWcgPSBpc1RhZyhlbGVtZW50VG9CZUNyZWF0ZWQpO1xuICB2YXIgY29tcHV0ZWRQcm9wcyA9IGF0dHJzICE9PSBwcm9wcyA/IF9leHRlbmRzKHt9LCBwcm9wcywge30sIGF0dHJzKSA6IHByb3BzO1xuICB2YXIgcHJvcEZpbHRlckZuID0gc2hvdWxkRm9yd2FyZFByb3AgfHwgaXNUYXJnZXRUYWcgJiYgdmFsaWRBdHRyO1xuICB2YXIgcHJvcHNGb3JFbGVtZW50ID0ge307IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cblxuICBmb3IgKHZhciBrZXkgaW4gY29tcHV0ZWRQcm9wcykge1xuICAgIGlmIChrZXlbMF0gPT09ICckJyB8fCBrZXkgPT09ICdhcycpIGNvbnRpbnVlO2Vsc2UgaWYgKGtleSA9PT0gJ2ZvcndhcmRlZEFzJykge1xuICAgICAgcHJvcHNGb3JFbGVtZW50LmFzID0gY29tcHV0ZWRQcm9wc1trZXldO1xuICAgIH0gZWxzZSBpZiAoIXByb3BGaWx0ZXJGbiB8fCBwcm9wRmlsdGVyRm4oa2V5LCB2YWxpZEF0dHIpKSB7XG4gICAgICAvLyBEb24ndCBwYXNzIHRocm91Z2ggbm9uIEhUTUwgdGFncyB0aHJvdWdoIHRvIEhUTUwgZWxlbWVudHNcbiAgICAgIHByb3BzRm9yRWxlbWVudFtrZXldID0gY29tcHV0ZWRQcm9wc1trZXldO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9wcy5zdHlsZSAmJiBhdHRycy5zdHlsZSAhPT0gcHJvcHMuc3R5bGUpIHtcbiAgICBwcm9wc0ZvckVsZW1lbnQuc3R5bGUgPSBfZXh0ZW5kcyh7fSwgcHJvcHMuc3R5bGUsIHt9LCBhdHRycy5zdHlsZSk7XG4gIH1cblxuICBwcm9wc0ZvckVsZW1lbnQuY2xhc3NOYW1lID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdChmb2xkZWRDb21wb25lbnRJZHMsIHN0eWxlZENvbXBvbmVudElkLCBnZW5lcmF0ZWRDbGFzc05hbWUgIT09IHN0eWxlZENvbXBvbmVudElkID8gZ2VuZXJhdGVkQ2xhc3NOYW1lIDogbnVsbCwgcHJvcHMuY2xhc3NOYW1lLCBhdHRycy5jbGFzc05hbWUpLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG4gIHByb3BzRm9yRWxlbWVudC5yZWYgPSByZWZUb0ZvcndhcmQ7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KGVsZW1lbnRUb0JlQ3JlYXRlZCwgcHJvcHNGb3JFbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVkQ29tcG9uZW50KHRhcmdldCwgb3B0aW9ucywgcnVsZXMpIHtcbiAgdmFyIGlzVGFyZ2V0U3R5bGVkQ29tcCA9IGlzU3R5bGVkQ29tcG9uZW50KHRhcmdldCk7XG4gIHZhciBpc0NvbXBvc2l0ZUNvbXBvbmVudCA9ICFpc1RhZyh0YXJnZXQpO1xuICB2YXIgX29wdGlvbnMkZGlzcGxheU5hbWUgPSBvcHRpb25zLmRpc3BsYXlOYW1lLFxuICAgICAgZGlzcGxheU5hbWUgPSBfb3B0aW9ucyRkaXNwbGF5TmFtZSA9PT0gdm9pZCAwID8gZ2VuZXJhdGVEaXNwbGF5TmFtZSh0YXJnZXQpIDogX29wdGlvbnMkZGlzcGxheU5hbWUsXG4gICAgICBfb3B0aW9ucyRjb21wb25lbnRJZCA9IG9wdGlvbnMuY29tcG9uZW50SWQsXG4gICAgICBjb21wb25lbnRJZCA9IF9vcHRpb25zJGNvbXBvbmVudElkID09PSB2b2lkIDAgPyBnZW5lcmF0ZUlkKG9wdGlvbnMuZGlzcGxheU5hbWUsIG9wdGlvbnMucGFyZW50Q29tcG9uZW50SWQpIDogX29wdGlvbnMkY29tcG9uZW50SWQsXG4gICAgICBfb3B0aW9ucyRhdHRycyA9IG9wdGlvbnMuYXR0cnMsXG4gICAgICBhdHRycyA9IF9vcHRpb25zJGF0dHJzID09PSB2b2lkIDAgPyBFTVBUWV9BUlJBWSA6IF9vcHRpb25zJGF0dHJzO1xuICB2YXIgc3R5bGVkQ29tcG9uZW50SWQgPSBvcHRpb25zLmRpc3BsYXlOYW1lICYmIG9wdGlvbnMuY29tcG9uZW50SWQgPyBlc2NhcGUob3B0aW9ucy5kaXNwbGF5TmFtZSkgKyBcIi1cIiArIG9wdGlvbnMuY29tcG9uZW50SWQgOiBvcHRpb25zLmNvbXBvbmVudElkIHx8IGNvbXBvbmVudElkOyAvLyBmb2xkIHRoZSB1bmRlcmx5aW5nIFN0eWxlZENvbXBvbmVudCBhdHRycyB1cCAoaW1wbGljaXQgZXh0ZW5kKVxuXG4gIHZhciBmaW5hbEF0dHJzID0gLy8gJEZsb3dGaXhNZVxuICBpc1RhcmdldFN0eWxlZENvbXAgJiYgdGFyZ2V0LmF0dHJzID8gQXJyYXkucHJvdG90eXBlLmNvbmNhdCh0YXJnZXQuYXR0cnMsIGF0dHJzKS5maWx0ZXIoQm9vbGVhbikgOiBhdHRyczsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIHNob3VsZEZvcndhcmRQcm9wID0gb3B0aW9ucy5zaG91bGRGb3J3YXJkUHJvcDsgLy8gJEZsb3dGaXhNZVxuXG4gIGlmIChpc1RhcmdldFN0eWxlZENvbXAgJiYgdGFyZ2V0LnNob3VsZEZvcndhcmRQcm9wKSB7XG4gICAgaWYgKHNob3VsZEZvcndhcmRQcm9wKSB7XG4gICAgICAvLyBjb21wb3NlIG5lc3RlZCBzaG91bGRGb3J3YXJkUHJvcCBjYWxsc1xuICAgICAgc2hvdWxkRm9yd2FyZFByb3AgPSBmdW5jdGlvbiBzaG91bGRGb3J3YXJkUHJvcChwcm9wLCBmaWx0ZXJGbikge1xuICAgICAgICByZXR1cm4gKC8vICRGbG93Rml4TWVcbiAgICAgICAgICB0YXJnZXQuc2hvdWxkRm9yd2FyZFByb3AocHJvcCwgZmlsdGVyRm4pICYmIG9wdGlvbnMuc2hvdWxkRm9yd2FyZFByb3AocHJvcCwgZmlsdGVyRm4pXG4gICAgICAgICk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHNob3VsZEZvcndhcmRQcm9wID0gdGFyZ2V0LnNob3VsZEZvcndhcmRQcm9wO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb21wb25lbnRTdHlsZSA9IG5ldyBDb21wb25lbnRTdHlsZShpc1RhcmdldFN0eWxlZENvbXAgPyAvLyBmb2xkIHRoZSB1bmRlcmx5aW5nIFN0eWxlZENvbXBvbmVudCBydWxlcyB1cCAoaW1wbGljaXQgZXh0ZW5kKVxuICAvLyAkRmxvd0ZpeE1lXG4gIHRhcmdldC5jb21wb25lbnRTdHlsZS5ydWxlcy5jb25jYXQocnVsZXMpIDogcnVsZXMsIHN0eWxlZENvbXBvbmVudElkKTtcbiAgLyoqXG4gICAqIGZvcndhcmRSZWYgY3JlYXRlcyBhIG5ldyBpbnRlcmltIGNvbXBvbmVudCwgd2hpY2ggd2UnbGwgdGFrZSBhZHZhbnRhZ2Ugb2ZcbiAgICogaW5zdGVhZCBvZiBleHRlbmRpbmcgUGFyZW50Q29tcG9uZW50IHRvIGNyZWF0ZSBfYW5vdGhlcl8gaW50ZXJpbSBjbGFzc1xuICAgKi9cblxuICB2YXIgV3JhcHBlZFN0eWxlZENvbXBvbmVudDsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG5cbiAgdmFyIGZvcndhcmRSZWYgPSBmdW5jdGlvbiBmb3J3YXJkUmVmKHByb3BzLCByZWYpIHtcbiAgICByZXR1cm4gdXNlU3R5bGVkQ29tcG9uZW50SW1wbChXcmFwcGVkU3R5bGVkQ29tcG9uZW50LCBwcm9wcywgcmVmKTtcbiAgfTtcblxuICBmb3J3YXJkUmVmLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7IC8vICRGbG93Rml4TWUgdGhpcyBpcyBhIGZvcmNlZCBjYXN0IHRvIG1lcmdlIGl0IFN0eWxlZENvbXBvbmVudFdyYXBwZXJQcm9wZXJ0aWVzXG5cbiAgV3JhcHBlZFN0eWxlZENvbXBvbmVudCA9IFJlYWN0LmZvcndhcmRSZWYoZm9yd2FyZFJlZik7XG4gIFdyYXBwZWRTdHlsZWRDb21wb25lbnQuYXR0cnMgPSBmaW5hbEF0dHJzO1xuICBXcmFwcGVkU3R5bGVkQ29tcG9uZW50LmNvbXBvbmVudFN0eWxlID0gY29tcG9uZW50U3R5bGU7XG4gIFdyYXBwZWRTdHlsZWRDb21wb25lbnQuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgV3JhcHBlZFN0eWxlZENvbXBvbmVudC5zaG91bGRGb3J3YXJkUHJvcCA9IHNob3VsZEZvcndhcmRQcm9wOyAvLyB0aGlzIHN0YXRpYyBpcyB1c2VkIHRvIHByZXNlcnZlIHRoZSBjYXNjYWRlIG9mIHN0YXRpYyBjbGFzc2VzIGZvciBjb21wb25lbnQgc2VsZWN0b3JcbiAgLy8gcHVycG9zZXM7IHRoaXMgaXMgZXNwZWNpYWxseSBpbXBvcnRhbnQgd2l0aCB1c2FnZSBvZiB0aGUgY3NzIHByb3BcblxuICBXcmFwcGVkU3R5bGVkQ29tcG9uZW50LmZvbGRlZENvbXBvbmVudElkcyA9IGlzVGFyZ2V0U3R5bGVkQ29tcCA/IC8vICRGbG93Rml4TWVcbiAgQXJyYXkucHJvdG90eXBlLmNvbmNhdCh0YXJnZXQuZm9sZGVkQ29tcG9uZW50SWRzLCB0YXJnZXQuc3R5bGVkQ29tcG9uZW50SWQpIDogRU1QVFlfQVJSQVk7XG4gIFdyYXBwZWRTdHlsZWRDb21wb25lbnQuc3R5bGVkQ29tcG9uZW50SWQgPSBzdHlsZWRDb21wb25lbnRJZDsgLy8gZm9sZCB0aGUgdW5kZXJseWluZyBTdHlsZWRDb21wb25lbnQgdGFyZ2V0IHVwIHNpbmNlIHdlIGZvbGRlZCB0aGUgc3R5bGVzXG5cbiAgV3JhcHBlZFN0eWxlZENvbXBvbmVudC50YXJnZXQgPSBpc1RhcmdldFN0eWxlZENvbXAgPyAvLyAkRmxvd0ZpeE1lXG4gIHRhcmdldC50YXJnZXQgOiB0YXJnZXQ7IC8vICRGbG93Rml4TWVcblxuICBXcmFwcGVkU3R5bGVkQ29tcG9uZW50LndpdGhDb21wb25lbnQgPSBmdW5jdGlvbiB3aXRoQ29tcG9uZW50KHRhZykge1xuICAgIHZhciBwcmV2aW91c0NvbXBvbmVudElkID0gb3B0aW9ucy5jb21wb25lbnRJZCxcbiAgICAgICAgb3B0aW9uc1RvQ29weSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKG9wdGlvbnMsIFtcImNvbXBvbmVudElkXCJdKTtcblxuICAgIHZhciBuZXdDb21wb25lbnRJZCA9IHByZXZpb3VzQ29tcG9uZW50SWQgJiYgcHJldmlvdXNDb21wb25lbnRJZCArIFwiLVwiICsgKGlzVGFnKHRhZykgPyB0YWcgOiBlc2NhcGUoZ2V0Q29tcG9uZW50TmFtZSh0YWcpKSk7XG5cbiAgICB2YXIgbmV3T3B0aW9ucyA9IF9leHRlbmRzKHt9LCBvcHRpb25zVG9Db3B5LCB7XG4gICAgICBhdHRyczogZmluYWxBdHRycyxcbiAgICAgIGNvbXBvbmVudElkOiBuZXdDb21wb25lbnRJZFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNyZWF0ZVN0eWxlZENvbXBvbmVudCh0YWcsIG5ld09wdGlvbnMsIHJ1bGVzKTtcbiAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyYXBwZWRTdHlsZWRDb21wb25lbnQsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZm9sZGVkRGVmYXVsdFByb3BzO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQob2JqKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICB0aGlzLl9mb2xkZWREZWZhdWx0UHJvcHMgPSBpc1RhcmdldFN0eWxlZENvbXAgPyBtaXhpbkRlZXAoe30sIHRhcmdldC5kZWZhdWx0UHJvcHMsIG9iaikgOiBvYmo7XG4gICAgfVxuICB9KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrRHluYW1pY0NyZWF0aW9uKGRpc3BsYXlOYW1lLCBzdHlsZWRDb21wb25lbnRJZCk7XG4gICAgV3JhcHBlZFN0eWxlZENvbXBvbmVudC53YXJuVG9vTWFueUNsYXNzZXMgPSBjcmVhdGVXYXJuVG9vTWFueUNsYXNzZXMoZGlzcGxheU5hbWUsIHN0eWxlZENvbXBvbmVudElkKTtcbiAgfSAvLyAkRmxvd0ZpeE1lXG5cblxuICBXcmFwcGVkU3R5bGVkQ29tcG9uZW50LnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIi5cIiArIFdyYXBwZWRTdHlsZWRDb21wb25lbnQuc3R5bGVkQ29tcG9uZW50SWQ7XG4gIH07XG5cbiAgaWYgKGlzQ29tcG9zaXRlQ29tcG9uZW50KSB7XG4gICAgaG9pc3QoV3JhcHBlZFN0eWxlZENvbXBvbmVudCwgdGFyZ2V0LCB7XG4gICAgICAvLyBhbGwgU0Mtc3BlY2lmaWMgdGhpbmdzIHNob3VsZCBub3QgYmUgaG9pc3RlZFxuICAgICAgYXR0cnM6IHRydWUsXG4gICAgICBjb21wb25lbnRTdHlsZTogdHJ1ZSxcbiAgICAgIGRpc3BsYXlOYW1lOiB0cnVlLFxuICAgICAgZm9sZGVkQ29tcG9uZW50SWRzOiB0cnVlLFxuICAgICAgc2hvdWxkRm9yd2FyZFByb3A6IHRydWUsXG4gICAgICBzZWxmOiB0cnVlLFxuICAgICAgc3R5bGVkQ29tcG9uZW50SWQ6IHRydWUsXG4gICAgICB0YXJnZXQ6IHRydWUsXG4gICAgICB3aXRoQ29tcG9uZW50OiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gV3JhcHBlZFN0eWxlZENvbXBvbmVudDtcbn1cblxuLy8gXG4vLyBUaGFua3MgdG8gUmVhY3RET01GYWN0b3JpZXMgZm9yIHRoaXMgaGFuZHkgbGlzdCFcbnZhciBkb21FbGVtZW50cyA9IFsnYScsICdhYmJyJywgJ2FkZHJlc3MnLCAnYXJlYScsICdhcnRpY2xlJywgJ2FzaWRlJywgJ2F1ZGlvJywgJ2InLCAnYmFzZScsICdiZGknLCAnYmRvJywgJ2JpZycsICdibG9ja3F1b3RlJywgJ2JvZHknLCAnYnInLCAnYnV0dG9uJywgJ2NhbnZhcycsICdjYXB0aW9uJywgJ2NpdGUnLCAnY29kZScsICdjb2wnLCAnY29sZ3JvdXAnLCAnZGF0YScsICdkYXRhbGlzdCcsICdkZCcsICdkZWwnLCAnZGV0YWlscycsICdkZm4nLCAnZGlhbG9nJywgJ2RpdicsICdkbCcsICdkdCcsICdlbScsICdlbWJlZCcsICdmaWVsZHNldCcsICdmaWdjYXB0aW9uJywgJ2ZpZ3VyZScsICdmb290ZXInLCAnZm9ybScsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdoZWFkJywgJ2hlYWRlcicsICdoZ3JvdXAnLCAnaHInLCAnaHRtbCcsICdpJywgJ2lmcmFtZScsICdpbWcnLCAnaW5wdXQnLCAnaW5zJywgJ2tiZCcsICdrZXlnZW4nLCAnbGFiZWwnLCAnbGVnZW5kJywgJ2xpJywgJ2xpbmsnLCAnbWFpbicsICdtYXAnLCAnbWFyaycsICdtYXJxdWVlJywgJ21lbnUnLCAnbWVudWl0ZW0nLCAnbWV0YScsICdtZXRlcicsICduYXYnLCAnbm9zY3JpcHQnLCAnb2JqZWN0JywgJ29sJywgJ29wdGdyb3VwJywgJ29wdGlvbicsICdvdXRwdXQnLCAncCcsICdwYXJhbScsICdwaWN0dXJlJywgJ3ByZScsICdwcm9ncmVzcycsICdxJywgJ3JwJywgJ3J0JywgJ3J1YnknLCAncycsICdzYW1wJywgJ3NjcmlwdCcsICdzZWN0aW9uJywgJ3NlbGVjdCcsICdzbWFsbCcsICdzb3VyY2UnLCAnc3BhbicsICdzdHJvbmcnLCAnc3R5bGUnLCAnc3ViJywgJ3N1bW1hcnknLCAnc3VwJywgJ3RhYmxlJywgJ3Rib2R5JywgJ3RkJywgJ3RleHRhcmVhJywgJ3Rmb290JywgJ3RoJywgJ3RoZWFkJywgJ3RpbWUnLCAndGl0bGUnLCAndHInLCAndHJhY2snLCAndScsICd1bCcsICd2YXInLCAndmlkZW8nLCAnd2JyJywgLy8gU1ZHXG4nY2lyY2xlJywgJ2NsaXBQYXRoJywgJ2RlZnMnLCAnZWxsaXBzZScsICdmb3JlaWduT2JqZWN0JywgJ2cnLCAnaW1hZ2UnLCAnbGluZScsICdsaW5lYXJHcmFkaWVudCcsICdtYXJrZXInLCAnbWFzaycsICdwYXRoJywgJ3BhdHRlcm4nLCAncG9seWdvbicsICdwb2x5bGluZScsICdyYWRpYWxHcmFkaWVudCcsICdyZWN0JywgJ3N0b3AnLCAnc3ZnJywgJ3RleHQnLCAndHNwYW4nXTtcblxuLy8gXG5cbnZhciBzdHlsZWQgPSBmdW5jdGlvbiBzdHlsZWQodGFnKSB7XG4gIHJldHVybiBjb25zdHJ1Y3RXaXRoT3B0aW9ucyhjcmVhdGVTdHlsZWRDb21wb25lbnQsIHRhZyk7XG59OyAvLyBTaG9ydGhhbmRzIGZvciBhbGwgdmFsaWQgSFRNTCBFbGVtZW50c1xuXG5cbmRvbUVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGRvbUVsZW1lbnQpIHtcbiAgc3R5bGVkW2RvbUVsZW1lbnRdID0gc3R5bGVkKGRvbUVsZW1lbnQpO1xufSk7XG5cbi8vIFxuXG52YXIgR2xvYmFsU3R5bGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBHbG9iYWxTdHlsZShydWxlcywgY29tcG9uZW50SWQpIHtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5jb21wb25lbnRJZCA9IGNvbXBvbmVudElkO1xuICAgIHRoaXMuaXNTdGF0aWMgPSBpc1N0YXRpY1J1bGVzKHJ1bGVzKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBHbG9iYWxTdHlsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNyZWF0ZVN0eWxlcyA9IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlcyhpbnN0YW5jZSwgZXhlY3V0aW9uQ29udGV4dCwgc3R5bGVTaGVldCwgc3R5bGlzKSB7XG4gICAgdmFyIGZsYXRDU1MgPSBmbGF0dGVuKHRoaXMucnVsZXMsIGV4ZWN1dGlvbkNvbnRleHQsIHN0eWxlU2hlZXQpO1xuICAgIHZhciBjc3MgPSBzdHlsaXMoZmxhdENTUy5qb2luKCcnKSwgJycpO1xuICAgIHZhciBpZCA9IHRoaXMuY29tcG9uZW50SWQgKyBpbnN0YW5jZTsgLy8gTk9URTogV2UgdXNlIHRoZSBpZCBhcyBhIG5hbWUgYXMgd2VsbCwgc2luY2UgdGhlc2UgcnVsZXMgbmV2ZXIgY2hhbmdlXG5cbiAgICBzdHlsZVNoZWV0Lmluc2VydFJ1bGVzKGlkLCBpZCwgY3NzKTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlU3R5bGVzID0gZnVuY3Rpb24gcmVtb3ZlU3R5bGVzKGluc3RhbmNlLCBzdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVTaGVldC5jbGVhclJ1bGVzKHRoaXMuY29tcG9uZW50SWQgKyBpbnN0YW5jZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlclN0eWxlcyA9IGZ1bmN0aW9uIHJlbmRlclN0eWxlcyhpbnN0YW5jZSwgZXhlY3V0aW9uQ29udGV4dCwgc3R5bGVTaGVldCwgc3R5bGlzKSB7XG4gICAgU3R5bGVTaGVldC5yZWdpc3RlcklkKHRoaXMuY29tcG9uZW50SWQgKyBpbnN0YW5jZSk7IC8vIE5PVEU6IFJlbW92ZSBvbGQgc3R5bGVzLCB0aGVuIGluamVjdCB0aGUgbmV3IG9uZXNcblxuICAgIHRoaXMucmVtb3ZlU3R5bGVzKGluc3RhbmNlLCBzdHlsZVNoZWV0KTtcbiAgICB0aGlzLmNyZWF0ZVN0eWxlcyhpbnN0YW5jZSwgZXhlY3V0aW9uQ29udGV4dCwgc3R5bGVTaGVldCwgc3R5bGlzKTtcbiAgfTtcblxuICByZXR1cm4gR2xvYmFsU3R5bGU7XG59KCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUdsb2JhbFN0eWxlKHN0cmluZ3MpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGludGVycG9sYXRpb25zID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBpbnRlcnBvbGF0aW9uc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgcnVsZXMgPSBjc3MuYXBwbHkodm9pZCAwLCBbc3RyaW5nc10uY29uY2F0KGludGVycG9sYXRpb25zKSk7XG4gIHZhciBzdHlsZWRDb21wb25lbnRJZCA9IFwic2MtZ2xvYmFsLVwiICsgZ2VuZXJhdGVDb21wb25lbnRJZChKU09OLnN0cmluZ2lmeShydWxlcykpO1xuICB2YXIgZ2xvYmFsU3R5bGUgPSBuZXcgR2xvYmFsU3R5bGUocnVsZXMsIHN0eWxlZENvbXBvbmVudElkKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrRHluYW1pY0NyZWF0aW9uKHN0eWxlZENvbXBvbmVudElkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEdsb2JhbFN0eWxlQ29tcG9uZW50KHByb3BzKSB7XG4gICAgdmFyIHN0eWxlU2hlZXQgPSB1c2VTdHlsZVNoZWV0KCk7XG4gICAgdmFyIHN0eWxpcyA9IHVzZVN0eWxpcygpO1xuICAgIHZhciB0aGVtZSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcbiAgICB2YXIgaW5zdGFuY2VSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICBpZiAoaW5zdGFuY2VSZWYuY3VycmVudCA9PT0gbnVsbCkge1xuICAgICAgaW5zdGFuY2VSZWYuY3VycmVudCA9IHN0eWxlU2hlZXQuYWxsb2NhdGVHU0luc3RhbmNlKHN0eWxlZENvbXBvbmVudElkKTtcbiAgICB9XG5cbiAgICB2YXIgaW5zdGFuY2UgPSBpbnN0YW5jZVJlZi5jdXJyZW50O1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgUmVhY3QuQ2hpbGRyZW4uY291bnQocHJvcHMuY2hpbGRyZW4pKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiVGhlIGdsb2JhbCBzdHlsZSBjb21wb25lbnQgXCIgKyBzdHlsZWRDb21wb25lbnRJZCArIFwiIHdhcyBnaXZlbiBjaGlsZCBKU1guIGNyZWF0ZUdsb2JhbFN0eWxlIGRvZXMgbm90IHJlbmRlciBjaGlsZHJlbi5cIik7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgcnVsZXMuc29tZShmdW5jdGlvbiAocnVsZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBydWxlID09PSAnc3RyaW5nJyAmJiBydWxlLmluZGV4T2YoJ0BpbXBvcnQnKSAhPT0gLTE7XG4gICAgfSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIlBsZWFzZSBkbyBub3QgdXNlIEBpbXBvcnQgQ1NTIHN5bnRheCBpbiBjcmVhdGVHbG9iYWxTdHlsZSBhdCB0aGlzIHRpbWUsIGFzIHRoZSBDU1NPTSBBUElzIHdlIHVzZSBpbiBwcm9kdWN0aW9uIGRvIG5vdCBoYW5kbGUgaXQgd2VsbC4gSW5zdGVhZCwgd2UgcmVjb21tZW5kIHVzaW5nIGEgbGlicmFyeSBzdWNoIGFzIHJlYWN0LWhlbG1ldCB0byBpbmplY3QgYSB0eXBpY2FsIDxsaW5rPiBtZXRhIHRhZyB0byB0aGUgc3R5bGVzaGVldCwgb3Igc2ltcGx5IGVtYmVkZGluZyBpdCBtYW51YWxseSBpbiB5b3VyIGluZGV4Lmh0bWwgPGhlYWQ+IHNlY3Rpb24gZm9yIGEgc2ltcGxlciBhcHAuXCIpO1xuICAgIH1cblxuICAgIGlmIChnbG9iYWxTdHlsZS5pc1N0YXRpYykge1xuICAgICAgZ2xvYmFsU3R5bGUucmVuZGVyU3R5bGVzKGluc3RhbmNlLCBTVEFUSUNfRVhFQ1VUSU9OX0NPTlRFWFQsIHN0eWxlU2hlZXQsIHN0eWxpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjb250ZXh0ID0gX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgIHRoZW1lOiBkZXRlcm1pbmVUaGVtZShwcm9wcywgdGhlbWUsIEdsb2JhbFN0eWxlQ29tcG9uZW50LmRlZmF1bHRQcm9wcylcbiAgICAgIH0pO1xuXG4gICAgICBnbG9iYWxTdHlsZS5yZW5kZXJTdHlsZXMoaW5zdGFuY2UsIGNvbnRleHQsIHN0eWxlU2hlZXQsIHN0eWxpcyk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBnbG9iYWxTdHlsZS5yZW1vdmVTdHlsZXMoaW5zdGFuY2UsIHN0eWxlU2hlZXQpO1xuICAgICAgfTtcbiAgICB9LCBFTVBUWV9BUlJBWSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gLy8gJEZsb3dGaXhNZVxuXG5cbiAgcmV0dXJuIFJlYWN0Lm1lbW8oR2xvYmFsU3R5bGVDb21wb25lbnQpO1xufVxuXG4vLyBcbmZ1bmN0aW9uIGtleWZyYW1lcyhzdHJpbmdzKSB7XG4gIC8qIFdhcm5pbmcgaWYgeW91J3ZlIHVzZWQga2V5ZnJhbWVzIG9uIFJlYWN0IE5hdGl2ZSAqL1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKCdga2V5ZnJhbWVzYCBjYW5ub3QgYmUgdXNlZCBvbiBSZWFjdE5hdGl2ZSwgb25seSBvbiB0aGUgd2ViLiBUbyBkbyBhbmltYXRpb24gaW4gUmVhY3ROYXRpdmUgcGxlYXNlIHVzZSBBbmltYXRlZC4nKTtcbiAgfVxuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBpbnRlcnBvbGF0aW9ucyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgaW50ZXJwb2xhdGlvbnNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIHJ1bGVzID0gY3NzLmFwcGx5KHZvaWQgMCwgW3N0cmluZ3NdLmNvbmNhdChpbnRlcnBvbGF0aW9ucykpLmpvaW4oJycpO1xuICB2YXIgbmFtZSA9IGdlbmVyYXRlQ29tcG9uZW50SWQocnVsZXMpO1xuICByZXR1cm4gbmV3IEtleWZyYW1lcyhuYW1lLCBbcnVsZXMsIG5hbWUsICdAa2V5ZnJhbWVzJ10pO1xufVxuXG52YXIgU2VydmVyU3R5bGVTaGVldCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNlcnZlclN0eWxlU2hlZXQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuX2VtaXRTaGVldENTUyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjc3MgPSBfdGhpcy5pbnN0YW5jZS50b1N0cmluZygpO1xuXG4gICAgICB2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuICAgICAgdmFyIGF0dHJzID0gW25vbmNlICYmIFwibm9uY2U9XFxcIlwiICsgbm9uY2UgKyBcIlxcXCJcIiwgU0NfQVRUUiArIFwiPVxcXCJ0cnVlXFxcIlwiLCBTQ19BVFRSX1ZFUlNJT04gKyBcIj1cXFwiXCIgKyBTQ19WRVJTSU9OICsgXCJcXFwiXCJdO1xuICAgICAgdmFyIGh0bWxBdHRyID0gYXR0cnMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcbiAgICAgIHJldHVybiBcIjxzdHlsZSBcIiArIGh0bWxBdHRyICsgXCI+XCIgKyBjc3MgKyBcIjwvc3R5bGU+XCI7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0U3R5bGVUYWdzID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnNlYWxlZCkge1xuICAgICAgICByZXR1cm4gdGhyb3dTdHlsZWRDb21wb25lbnRzRXJyb3IoMik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpcy5fZW1pdFNoZWV0Q1NTKCk7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0U3R5bGVFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9wcm9wcztcblxuICAgICAgaWYgKF90aGlzLnNlYWxlZCkge1xuICAgICAgICByZXR1cm4gdGhyb3dTdHlsZWRDb21wb25lbnRzRXJyb3IoMik7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcm9wcyA9IChfcHJvcHMgPSB7fSwgX3Byb3BzW1NDX0FUVFJdID0gJycsIF9wcm9wc1tTQ19BVFRSX1ZFUlNJT05dID0gU0NfVkVSU0lPTiwgX3Byb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MID0ge1xuICAgICAgICBfX2h0bWw6IF90aGlzLmluc3RhbmNlLnRvU3RyaW5nKClcbiAgICAgIH0sIF9wcm9wcyk7XG4gICAgICB2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXG4gICAgICBpZiAobm9uY2UpIHtcbiAgICAgICAgcHJvcHMubm9uY2UgPSBub25jZTtcbiAgICAgIH0gLy8gdjQgcmV0dXJuZWQgYW4gYXJyYXkgZm9yIHRoaXMgZm4sIHNvIHdlJ2xsIGRvIHRoZSBzYW1lIGZvciB2NSBmb3IgYmFja3dhcmQgY29tcGF0XG5cblxuICAgICAgcmV0dXJuIFsvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICBrZXk6IFwic2MtMC0wXCJcbiAgICAgIH0pKV07XG4gICAgfTtcblxuICAgIHRoaXMuc2VhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNlYWxlZCA9IHRydWU7XG4gICAgfTtcblxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU3R5bGVTaGVldCh7XG4gICAgICBpc1NlcnZlcjogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMuc2VhbGVkID0gZmFsc2U7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU2VydmVyU3R5bGVTaGVldC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbGxlY3RTdHlsZXMgPSBmdW5jdGlvbiBjb2xsZWN0U3R5bGVzKGNoaWxkcmVuKSB7XG4gICAgaWYgKHRoaXMuc2VhbGVkKSB7XG4gICAgICByZXR1cm4gdGhyb3dTdHlsZWRDb21wb25lbnRzRXJyb3IoMik7XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlU2hlZXRNYW5hZ2VyLCB7XG4gICAgICBzaGVldDogdGhpcy5pbnN0YW5jZVxuICAgIH0sIGNoaWxkcmVuKTtcbiAgfTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgX3Byb3RvLmludGVybGVhdmVXaXRoTm9kZVN0cmVhbSA9IGZ1bmN0aW9uIGludGVybGVhdmVXaXRoTm9kZVN0cmVhbShpbnB1dCkge1xuICAgIHtcbiAgICAgIHJldHVybiB0aHJvd1N0eWxlZENvbXBvbmVudHNFcnJvcigzKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFNlcnZlclN0eWxlU2hlZXQ7XG59KCk7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IDxDb25maWc6IHsgdGhlbWU/OiBhbnkgfSwgSW5zdGFuY2U+KFxuLy8gIENvbXBvbmVudDogQWJzdHJhY3RDb21wb25lbnQ8Q29uZmlnLCBJbnN0YW5jZT5cbi8vICk6IEFic3RyYWN0Q29tcG9uZW50PCREaWZmPENvbmZpZywgeyB0aGVtZT86IGFueSB9PiAmIHsgdGhlbWU/OiBhbnkgfSwgSW5zdGFuY2U+XG4vL1xuLy8gYnV0IHRoZSBvbGQgYnVpbGQgc3lzdGVtIHRvb2xpbmcgZG9lc24ndCBzdXBwb3J0IHRoZSBzeW50YXhcblxudmFyIHdpdGhUaGVtZSA9IChmdW5jdGlvbiAoQ29tcG9uZW50KSB7XG4gIC8vICRGbG93Rml4TWUgVGhpcyBzaG91bGQgYmUgUmVhY3QuZm9yd2FyZFJlZjxDb25maWcsIEluc3RhbmNlPlxuICB2YXIgV2l0aFRoZW1lID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICAgIHZhciB0aGVtZSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTsgLy8gJEZsb3dGaXhNZSBkZWZhdWx0UHJvcHMgaXNuJ3QgZGVjbGFyZWQgc28gaXQgY2FuIGJlIGluZmVycmFibGVcblxuICAgIHZhciBkZWZhdWx0UHJvcHMgPSBDb21wb25lbnQuZGVmYXVsdFByb3BzO1xuICAgIHZhciB0aGVtZVByb3AgPSBkZXRlcm1pbmVUaGVtZShwcm9wcywgdGhlbWUsIGRlZmF1bHRQcm9wcyk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGVtZVByb3AgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlt3aXRoVGhlbWVdIFlvdSBhcmUgbm90IHVzaW5nIGEgVGhlbWVQcm92aWRlciBub3IgcGFzc2luZyBhIHRoZW1lIHByb3Agb3IgYSB0aGVtZSBpbiBkZWZhdWx0UHJvcHMgaW4gY29tcG9uZW50IGNsYXNzIFxcXCJcIiArIGdldENvbXBvbmVudE5hbWUoQ29tcG9uZW50KSArIFwiXFxcIlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIHRoZW1lOiB0aGVtZVByb3AsXG4gICAgICByZWY6IHJlZlxuICAgIH0pKTtcbiAgfSk7XG4gIGhvaXN0KFdpdGhUaGVtZSwgQ29tcG9uZW50KTtcbiAgV2l0aFRoZW1lLmRpc3BsYXlOYW1lID0gXCJXaXRoVGhlbWUoXCIgKyBnZXRDb21wb25lbnROYW1lKENvbXBvbmVudCkgKyBcIilcIjtcbiAgcmV0dXJuIFdpdGhUaGVtZTtcbn0pO1xuXG4vLyBcblxudmFyIHVzZVRoZW1lID0gZnVuY3Rpb24gdXNlVGhlbWUoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG59O1xuXG4vLyBcbnZhciBfX1BSSVZBVEVfXyA9IHtcbiAgU3R5bGVTaGVldDogU3R5bGVTaGVldCxcbiAgbWFzdGVyU2hlZXQ6IG1hc3RlclNoZWV0XG59O1xuXG4vLyBcbi8qIERlZmluZSBidW5kbGUgdmVyc2lvbiBmb3IgZXhwb3J0ICovXG5cbnZhciB2ZXJzaW9uID0gXCI1LjEuMVwiO1xuLyogV2FybmluZyBpZiB5b3UndmUgaW1wb3J0ZWQgdGhpcyBmaWxlIG9uIFJlYWN0IE5hdGl2ZSAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICBjb25zb2xlLndhcm4oXCJJdCBsb29rcyBsaWtlIHlvdSd2ZSBpbXBvcnRlZCAnc3R5bGVkLWNvbXBvbmVudHMnIG9uIFJlYWN0IE5hdGl2ZS5cXG5cIiArIFwiUGVyaGFwcyB5b3UncmUgbG9va2luZyB0byBpbXBvcnQgJ3N0eWxlZC1jb21wb25lbnRzL25hdGl2ZSc/XFxuXCIgKyAnUmVhZCBtb3JlIGFib3V0IHRoaXMgYXQgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYmFzaWNzI3JlYWN0LW5hdGl2ZScpO1xufVxuLyogV2FybmluZyBpZiB0aGVyZSBhcmUgc2V2ZXJhbCBpbnN0YW5jZXMgb2Ygc3R5bGVkLWNvbXBvbmVudHMgKi9cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbmRvd1snX19zdHlsZWQtY29tcG9uZW50cy1pbml0X18nXSA9IHdpbmRvd1snX19zdHlsZWQtY29tcG9uZW50cy1pbml0X18nXSB8fCAwO1xuXG4gIGlmICh3aW5kb3dbJ19fc3R5bGVkLWNvbXBvbmVudHMtaW5pdF9fJ10gPT09IDEpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihcIkl0IGxvb2tzIGxpa2UgdGhlcmUgYXJlIHNldmVyYWwgaW5zdGFuY2VzIG9mICdzdHlsZWQtY29tcG9uZW50cycgaW5pdGlhbGl6ZWQgaW4gdGhpcyBhcHBsaWNhdGlvbi4gXCIgKyAnVGhpcyBtYXkgY2F1c2UgZHluYW1pYyBzdHlsZXMgbm90IHJlbmRlcmluZyBwcm9wZXJseSwgZXJyb3JzIGhhcHBlbmluZyBkdXJpbmcgcmVoeWRyYXRpb24gcHJvY2VzcywgJyArICdtaXNzaW5nIHRoZW1lIHByb3AsIGFuZCBtYWtlcyB5b3VyIGFwcGxpY2F0aW9uIGJpZ2dlciB3aXRob3V0IGEgZ29vZCByZWFzb24uXFxuXFxuJyArICdTZWUgaHR0cHM6Ly9zLWMuc2gvMkJBWHplZCBmb3IgbW9yZSBpbmZvLicpO1xuICB9XG5cbiAgd2luZG93WydfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfXyddICs9IDE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZDtcbmV4cG9ydCB7IFNlcnZlclN0eWxlU2hlZXQsIFN0eWxlU2hlZXRDb25zdW1lciwgU3R5bGVTaGVldENvbnRleHQsIFN0eWxlU2hlZXRNYW5hZ2VyLCBUaGVtZUNvbnN1bWVyLCBUaGVtZUNvbnRleHQsIFRoZW1lUHJvdmlkZXIsIF9fUFJJVkFURV9fLCBjcmVhdGVHbG9iYWxTdHlsZSwgY3NzLCBpc1N0eWxlZENvbXBvbmVudCwga2V5ZnJhbWVzLCB1c2VUaGVtZSwgdmVyc2lvbiwgd2l0aFRoZW1lIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZWQtY29tcG9uZW50cy5icm93c2VyLmVzbS5qcy5tYXBcbiJdLCJzb3VyY2VSb290IjoiIn0=