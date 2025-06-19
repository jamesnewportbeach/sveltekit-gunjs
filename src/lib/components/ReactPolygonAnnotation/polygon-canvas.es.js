var Qp = Object.defineProperty;
var jh = Object.getOwnPropertySymbols;
var Xp = Object.prototype.hasOwnProperty, Kp = Object.prototype.propertyIsEnumerable;
var Wh = (d, t, i) => t in d ? Qp(d, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : d[t] = i, gd = (d, t) => {
  for (var i in t || (t = {}))
    Xp.call(t, i) && Wh(d, i, t[i]);
  if (jh)
    for (var i of jh(t))
      Kp.call(t, i) && Wh(d, i, t[i]);
  return d;
};
function Rc(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
var Mc = { exports: {} }, zo = {}, vd = { exports: {} }, Ye = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vh;
function qp() {
  if (Vh)
    return Ye;
  Vh = 1;
  var d = Symbol.for("react.element"), t = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), p = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), S = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), E = Symbol.iterator;
  function x(M) {
    return M === null || typeof M != "object" ? null : (M = E && M[E] || M["@@iterator"], typeof M == "function" ? M : null);
  }
  var N = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, P = Object.assign, B = {};
  function z(M, O, q) {
    this.props = M, this.context = O, this.refs = B, this.updater = q || N;
  }
  z.prototype.isReactComponent = {}, z.prototype.setState = function(M, O) {
    if (typeof M != "object" && typeof M != "function" && M != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, M, O, "setState");
  }, z.prototype.forceUpdate = function(M) {
    this.updater.enqueueForceUpdate(this, M, "forceUpdate");
  };
  function Z() {
  }
  Z.prototype = z.prototype;
  function X(M, O, q) {
    this.props = M, this.context = O, this.refs = B, this.updater = q || N;
  }
  var Q = X.prototype = new Z();
  Q.constructor = X, P(Q, z.prototype), Q.isPureReactComponent = !0;
  var K = Array.isArray, se = Object.prototype.hasOwnProperty, J = { current: null }, de = { key: !0, ref: !0, __self: !0, __source: !0 };
  function oe(M, O, q) {
    var he, _e = {}, Fe = null, He = null;
    if (O != null)
      for (he in O.ref !== void 0 && (He = O.ref), O.key !== void 0 && (Fe = "" + O.key), O)
        se.call(O, he) && !de.hasOwnProperty(he) && (_e[he] = O[he]);
    var We = arguments.length - 2;
    if (We === 1)
      _e.children = q;
    else if (1 < We) {
      for (var je = Array(We), ct = 0; ct < We; ct++)
        je[ct] = arguments[ct + 2];
      _e.children = je;
    }
    if (M && M.defaultProps)
      for (he in We = M.defaultProps, We)
        _e[he] === void 0 && (_e[he] = We[he]);
    return { $$typeof: d, type: M, key: Fe, ref: He, props: _e, _owner: J.current };
  }
  function ae(M, O) {
    return { $$typeof: d, type: M.type, key: O, ref: M.ref, props: M.props, _owner: M._owner };
  }
  function pe(M) {
    return typeof M == "object" && M !== null && M.$$typeof === d;
  }
  function me(M) {
    var O = { "=": "=0", ":": "=2" };
    return "$" + M.replace(/[=:]/g, function(q) {
      return O[q];
    });
  }
  var b = /\/+/g;
  function te(M, O) {
    return typeof M == "object" && M !== null && M.key != null ? me("" + M.key) : O.toString(36);
  }
  function Ne(M, O, q, he, _e) {
    var Fe = typeof M;
    (Fe === "undefined" || Fe === "boolean") && (M = null);
    var He = !1;
    if (M === null)
      He = !0;
    else
      switch (Fe) {
        case "string":
        case "number":
          He = !0;
          break;
        case "object":
          switch (M.$$typeof) {
            case d:
            case t:
              He = !0;
          }
      }
    if (He)
      return He = M, _e = _e(He), M = he === "" ? "." + te(He, 0) : he, K(_e) ? (q = "", M != null && (q = M.replace(b, "$&/") + "/"), Ne(_e, O, q, "", function(ct) {
        return ct;
      })) : _e != null && (pe(_e) && (_e = ae(_e, q + (!_e.key || He && He.key === _e.key ? "" : ("" + _e.key).replace(b, "$&/") + "/") + M)), O.push(_e)), 1;
    if (He = 0, he = he === "" ? "." : he + ":", K(M))
      for (var We = 0; We < M.length; We++) {
        Fe = M[We];
        var je = he + te(Fe, We);
        He += Ne(Fe, O, q, je, _e);
      }
    else if (je = x(M), typeof je == "function")
      for (M = je.call(M), We = 0; !(Fe = M.next()).done; )
        Fe = Fe.value, je = he + te(Fe, We++), He += Ne(Fe, O, q, je, _e);
    else if (Fe === "object")
      throw O = String(M), Error("Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead.");
    return He;
  }
  function Ie(M, O, q) {
    if (M == null)
      return M;
    var he = [], _e = 0;
    return Ne(M, he, "", "", function(Fe) {
      return O.call(q, Fe, _e++);
    }), he;
  }
  function Le(M) {
    if (M._status === -1) {
      var O = M._result;
      O = O(), O.then(function(q) {
        (M._status === 0 || M._status === -1) && (M._status = 1, M._result = q);
      }, function(q) {
        (M._status === 0 || M._status === -1) && (M._status = 2, M._result = q);
      }), M._status === -1 && (M._status = 0, M._result = O);
    }
    if (M._status === 1)
      return M._result.default;
    throw M._result;
  }
  var De = { current: null }, ie = { transition: null }, we = { ReactCurrentDispatcher: De, ReactCurrentBatchConfig: ie, ReactCurrentOwner: J };
  return Ye.Children = { map: Ie, forEach: function(M, O, q) {
    Ie(M, function() {
      O.apply(this, arguments);
    }, q);
  }, count: function(M) {
    var O = 0;
    return Ie(M, function() {
      O++;
    }), O;
  }, toArray: function(M) {
    return Ie(M, function(O) {
      return O;
    }) || [];
  }, only: function(M) {
    if (!pe(M))
      throw Error("React.Children.only expected to receive a single React element child.");
    return M;
  } }, Ye.Component = z, Ye.Fragment = i, Ye.Profiler = f, Ye.PureComponent = X, Ye.StrictMode = l, Ye.Suspense = y, Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = we, Ye.cloneElement = function(M, O, q) {
    if (M == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + M + ".");
    var he = P({}, M.props), _e = M.key, Fe = M.ref, He = M._owner;
    if (O != null) {
      if (O.ref !== void 0 && (Fe = O.ref, He = J.current), O.key !== void 0 && (_e = "" + O.key), M.type && M.type.defaultProps)
        var We = M.type.defaultProps;
      for (je in O)
        se.call(O, je) && !de.hasOwnProperty(je) && (he[je] = O[je] === void 0 && We !== void 0 ? We[je] : O[je]);
    }
    var je = arguments.length - 2;
    if (je === 1)
      he.children = q;
    else if (1 < je) {
      We = Array(je);
      for (var ct = 0; ct < je; ct++)
        We[ct] = arguments[ct + 2];
      he.children = We;
    }
    return { $$typeof: d, type: M.type, key: _e, ref: Fe, props: he, _owner: He };
  }, Ye.createContext = function(M) {
    return M = { $$typeof: p, _currentValue: M, _currentValue2: M, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, M.Provider = { $$typeof: h, _context: M }, M.Consumer = M;
  }, Ye.createElement = oe, Ye.createFactory = function(M) {
    var O = oe.bind(null, M);
    return O.type = M, O;
  }, Ye.createRef = function() {
    return { current: null };
  }, Ye.forwardRef = function(M) {
    return { $$typeof: g, render: M };
  }, Ye.isValidElement = pe, Ye.lazy = function(M) {
    return { $$typeof: k, _payload: { _status: -1, _result: M }, _init: Le };
  }, Ye.memo = function(M, O) {
    return { $$typeof: S, type: M, compare: O === void 0 ? null : O };
  }, Ye.startTransition = function(M) {
    var O = ie.transition;
    ie.transition = {};
    try {
      M();
    } finally {
      ie.transition = O;
    }
  }, Ye.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Ye.useCallback = function(M, O) {
    return De.current.useCallback(M, O);
  }, Ye.useContext = function(M) {
    return De.current.useContext(M);
  }, Ye.useDebugValue = function() {
  }, Ye.useDeferredValue = function(M) {
    return De.current.useDeferredValue(M);
  }, Ye.useEffect = function(M, O) {
    return De.current.useEffect(M, O);
  }, Ye.useId = function() {
    return De.current.useId();
  }, Ye.useImperativeHandle = function(M, O, q) {
    return De.current.useImperativeHandle(M, O, q);
  }, Ye.useInsertionEffect = function(M, O) {
    return De.current.useInsertionEffect(M, O);
  }, Ye.useLayoutEffect = function(M, O) {
    return De.current.useLayoutEffect(M, O);
  }, Ye.useMemo = function(M, O) {
    return De.current.useMemo(M, O);
  }, Ye.useReducer = function(M, O, q) {
    return De.current.useReducer(M, O, q);
  }, Ye.useRef = function(M) {
    return De.current.useRef(M);
  }, Ye.useState = function(M) {
    return De.current.useState(M);
  }, Ye.useSyncExternalStore = function(M, O, q) {
    return De.current.useSyncExternalStore(M, O, q);
  }, Ye.useTransition = function() {
    return De.current.useTransition();
  }, Ye.version = "18.2.0", Ye;
}
var Yh;
function Pf() {
  return Yh || (Yh = 1, vd.exports = qp()), vd.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qh;
function Jp() {
  if (Qh)
    return zo;
  Qh = 1;
  var d = Pf(), t = Symbol.for("react.element"), i = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, f = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(g, y, S) {
    var k, E = {}, x = null, N = null;
    S !== void 0 && (x = "" + S), y.key !== void 0 && (x = "" + y.key), y.ref !== void 0 && (N = y.ref);
    for (k in y)
      l.call(y, k) && !h.hasOwnProperty(k) && (E[k] = y[k]);
    if (g && g.defaultProps)
      for (k in y = g.defaultProps, y)
        E[k] === void 0 && (E[k] = y[k]);
    return { $$typeof: t, type: g, key: x, ref: N, props: E, _owner: f.current };
  }
  return zo.Fragment = i, zo.jsx = p, zo.jsxs = p, zo;
}
Mc.exports = Jp();
var on = Mc.exports, Ld = {}, Lc = { exports: {} }, In = {}, md = { exports: {} }, yd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xh;
function Zp() {
  return Xh || (Xh = 1, function(d) {
    function t(ie, we) {
      var M = ie.length;
      ie.push(we);
      e:
        for (; 0 < M; ) {
          var O = M - 1 >>> 1, q = ie[O];
          if (0 < f(q, we))
            ie[O] = we, ie[M] = q, M = O;
          else
            break e;
        }
    }
    function i(ie) {
      return ie.length === 0 ? null : ie[0];
    }
    function l(ie) {
      if (ie.length === 0)
        return null;
      var we = ie[0], M = ie.pop();
      if (M !== we) {
        ie[0] = M;
        e:
          for (var O = 0, q = ie.length, he = q >>> 1; O < he; ) {
            var _e = 2 * (O + 1) - 1, Fe = ie[_e], He = _e + 1, We = ie[He];
            if (0 > f(Fe, M))
              He < q && 0 > f(We, Fe) ? (ie[O] = We, ie[He] = M, O = He) : (ie[O] = Fe, ie[_e] = M, O = _e);
            else if (He < q && 0 > f(We, M))
              ie[O] = We, ie[He] = M, O = He;
            else
              break e;
          }
      }
      return we;
    }
    function f(ie, we) {
      var M = ie.sortIndex - we.sortIndex;
      return M !== 0 ? M : ie.id - we.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      d.unstable_now = function() {
        return h.now();
      };
    } else {
      var p = Date, g = p.now();
      d.unstable_now = function() {
        return p.now() - g;
      };
    }
    var y = [], S = [], k = 1, E = null, x = 3, N = !1, P = !1, B = !1, z = typeof setTimeout == "function" ? setTimeout : null, Z = typeof clearTimeout == "function" ? clearTimeout : null, X = typeof setImmediate != "undefined" ? setImmediate : null;
    typeof navigator != "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Q(ie) {
      for (var we = i(S); we !== null; ) {
        if (we.callback === null)
          l(S);
        else if (we.startTime <= ie)
          l(S), we.sortIndex = we.expirationTime, t(y, we);
        else
          break;
        we = i(S);
      }
    }
    function K(ie) {
      if (B = !1, Q(ie), !P)
        if (i(y) !== null)
          P = !0, Le(se);
        else {
          var we = i(S);
          we !== null && De(K, we.startTime - ie);
        }
    }
    function se(ie, we) {
      P = !1, B && (B = !1, Z(oe), oe = -1), N = !0;
      var M = x;
      try {
        for (Q(we), E = i(y); E !== null && (!(E.expirationTime > we) || ie && !me()); ) {
          var O = E.callback;
          if (typeof O == "function") {
            E.callback = null, x = E.priorityLevel;
            var q = O(E.expirationTime <= we);
            we = d.unstable_now(), typeof q == "function" ? E.callback = q : E === i(y) && l(y), Q(we);
          } else
            l(y);
          E = i(y);
        }
        if (E !== null)
          var he = !0;
        else {
          var _e = i(S);
          _e !== null && De(K, _e.startTime - we), he = !1;
        }
        return he;
      } finally {
        E = null, x = M, N = !1;
      }
    }
    var J = !1, de = null, oe = -1, ae = 5, pe = -1;
    function me() {
      return !(d.unstable_now() - pe < ae);
    }
    function b() {
      if (de !== null) {
        var ie = d.unstable_now();
        pe = ie;
        var we = !0;
        try {
          we = de(!0, ie);
        } finally {
          we ? te() : (J = !1, de = null);
        }
      } else
        J = !1;
    }
    var te;
    if (typeof X == "function")
      te = function() {
        X(b);
      };
    else if (typeof MessageChannel != "undefined") {
      var Ne = new MessageChannel(), Ie = Ne.port2;
      Ne.port1.onmessage = b, te = function() {
        Ie.postMessage(null);
      };
    } else
      te = function() {
        z(b, 0);
      };
    function Le(ie) {
      de = ie, J || (J = !0, te());
    }
    function De(ie, we) {
      oe = z(function() {
        ie(d.unstable_now());
      }, we);
    }
    d.unstable_IdlePriority = 5, d.unstable_ImmediatePriority = 1, d.unstable_LowPriority = 4, d.unstable_NormalPriority = 3, d.unstable_Profiling = null, d.unstable_UserBlockingPriority = 2, d.unstable_cancelCallback = function(ie) {
      ie.callback = null;
    }, d.unstable_continueExecution = function() {
      P || N || (P = !0, Le(se));
    }, d.unstable_forceFrameRate = function(ie) {
      0 > ie || 125 < ie ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ae = 0 < ie ? Math.floor(1e3 / ie) : 5;
    }, d.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, d.unstable_getFirstCallbackNode = function() {
      return i(y);
    }, d.unstable_next = function(ie) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var we = 3;
          break;
        default:
          we = x;
      }
      var M = x;
      x = we;
      try {
        return ie();
      } finally {
        x = M;
      }
    }, d.unstable_pauseExecution = function() {
    }, d.unstable_requestPaint = function() {
    }, d.unstable_runWithPriority = function(ie, we) {
      switch (ie) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ie = 3;
      }
      var M = x;
      x = ie;
      try {
        return we();
      } finally {
        x = M;
      }
    }, d.unstable_scheduleCallback = function(ie, we, M) {
      var O = d.unstable_now();
      switch (typeof M == "object" && M !== null ? (M = M.delay, M = typeof M == "number" && 0 < M ? O + M : O) : M = O, ie) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return q = M + q, ie = { id: k++, callback: we, priorityLevel: ie, startTime: M, expirationTime: q, sortIndex: -1 }, M > O ? (ie.sortIndex = M, t(S, ie), i(y) === null && ie === i(S) && (B ? (Z(oe), oe = -1) : B = !0, De(K, M - O))) : (ie.sortIndex = q, t(y, ie), P || N || (P = !0, Le(se))), ie;
    }, d.unstable_shouldYield = me, d.unstable_wrapCallback = function(ie) {
      var we = x;
      return function() {
        var M = x;
        x = we;
        try {
          return ie.apply(this, arguments);
        } finally {
          x = M;
        }
      };
    };
  }(yd)), yd;
}
var Kh;
function $p() {
  return Kh || (Kh = 1, md.exports = Zp()), md.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qh;
function bp() {
  if (qh)
    return In;
  qh = 1;
  var d = Pf(), t = $p();
  function i(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, s = 1; s < arguments.length; s++)
      n += "&args[]=" + encodeURIComponent(arguments[s]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var l = /* @__PURE__ */ new Set(), f = {};
  function h(e, n) {
    p(e, n), p(e + "Capture", n);
  }
  function p(e, n) {
    for (f[e] = n, e = 0; e < n.length; e++)
      l.add(n[e]);
  }
  var g = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"), y = Object.prototype.hasOwnProperty, S = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, k = {}, E = {};
  function x(e) {
    return y.call(E, e) ? !0 : y.call(k, e) ? !1 : S.test(e) ? E[e] = !0 : (k[e] = !0, !1);
  }
  function N(e, n, s, u) {
    if (s !== null && s.type === 0)
      return !1;
    switch (typeof n) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : s !== null ? !s.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function P(e, n, s, u) {
    if (n === null || typeof n == "undefined" || N(e, n, s, u))
      return !0;
    if (u)
      return !1;
    if (s !== null)
      switch (s.type) {
        case 3:
          return !n;
        case 4:
          return n === !1;
        case 5:
          return isNaN(n);
        case 6:
          return isNaN(n) || 1 > n;
      }
    return !1;
  }
  function B(e, n, s, u, c, m, C) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = s, this.propertyName = e, this.type = n, this.sanitizeURL = m, this.removeEmptyString = C;
  }
  var z = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    z[e] = new B(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    z[n] = new B(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    z[e] = new B(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    z[e] = new B(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    z[e] = new B(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    z[e] = new B(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    z[e] = new B(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    z[e] = new B(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    z[e] = new B(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Z = /[\-:]([a-z])/g;
  function X(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      Z,
      X
    );
    z[n] = new B(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(Z, X);
    z[n] = new B(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(Z, X);
    z[n] = new B(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    z[e] = new B(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), z.xlinkHref = new B("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    z[e] = new B(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Q(e, n, s, u) {
    var c = z.hasOwnProperty(n) ? z[n] : null;
    (c !== null ? c.type !== 0 : u || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (P(n, s, c, u) && (s = null), u || c === null ? x(n) && (s === null ? e.removeAttribute(n) : e.setAttribute(n, "" + s)) : c.mustUseProperty ? e[c.propertyName] = s === null ? c.type === 3 ? !1 : "" : s : (n = c.attributeName, u = c.attributeNamespace, s === null ? e.removeAttribute(n) : (c = c.type, s = c === 3 || c === 4 && s === !0 ? "" : "" + s, u ? e.setAttributeNS(u, n, s) : e.setAttribute(n, s))));
  }
  var K = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, se = Symbol.for("react.element"), J = Symbol.for("react.portal"), de = Symbol.for("react.fragment"), oe = Symbol.for("react.strict_mode"), ae = Symbol.for("react.profiler"), pe = Symbol.for("react.provider"), me = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), Ne = Symbol.for("react.suspense_list"), Ie = Symbol.for("react.memo"), Le = Symbol.for("react.lazy"), De = Symbol.for("react.offscreen"), ie = Symbol.iterator;
  function we(e) {
    return e === null || typeof e != "object" ? null : (e = ie && e[ie] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var M = Object.assign, O;
  function q(e) {
    if (O === void 0)
      try {
        throw Error();
      } catch (s) {
        var n = s.stack.trim().match(/\n( *(at )?)/);
        O = n && n[1] || "";
      }
    return `
` + O + e;
  }
  var he = !1;
  function _e(e, n) {
    if (!e || he)
      return "";
    he = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n)
        if (n = function() {
          throw Error();
        }, Object.defineProperty(n.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(n, []);
          } catch (W) {
            var u = W;
          }
          Reflect.construct(e, [], n);
        } else {
          try {
            n.call();
          } catch (W) {
            u = W;
          }
          e.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (W) {
          u = W;
        }
        e();
      }
    } catch (W) {
      if (W && u && typeof W.stack == "string") {
        for (var c = W.stack.split(`
`), m = u.stack.split(`
`), C = c.length - 1, R = m.length - 1; 1 <= C && 0 <= R && c[C] !== m[R]; )
          R--;
        for (; 1 <= C && 0 <= R; C--, R--)
          if (c[C] !== m[R]) {
            if (C !== 1 || R !== 1)
              do
                if (C--, R--, 0 > R || c[C] !== m[R]) {
                  var A = `
` + c[C].replace(" at new ", " at ");
                  return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), A;
                }
              while (1 <= C && 0 <= R);
            break;
          }
      }
    } finally {
      he = !1, Error.prepareStackTrace = s;
    }
    return (e = e ? e.displayName || e.name : "") ? q(e) : "";
  }
  function Fe(e) {
    switch (e.tag) {
      case 5:
        return q(e.type);
      case 16:
        return q("Lazy");
      case 13:
        return q("Suspense");
      case 19:
        return q("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = _e(e.type, !1), e;
      case 11:
        return e = _e(e.type.render, !1), e;
      case 1:
        return e = _e(e.type, !0), e;
      default:
        return "";
    }
  }
  function He(e) {
    if (e == null)
      return null;
    if (typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case de:
        return "Fragment";
      case J:
        return "Portal";
      case ae:
        return "Profiler";
      case oe:
        return "StrictMode";
      case te:
        return "Suspense";
      case Ne:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case me:
          return (e.displayName || "Context") + ".Consumer";
        case pe:
          return (e._context.displayName || "Context") + ".Provider";
        case b:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Ie:
          return n = e.displayName || null, n !== null ? n : He(e.type) || "Memo";
        case Le:
          n = e._payload, e = e._init;
          try {
            return He(e(n));
          } catch (s) {
          }
      }
    return null;
  }
  function We(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return He(n);
      case 8:
        return n === oe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof n == "function")
          return n.displayName || n.name || null;
        if (typeof n == "string")
          return n;
    }
    return null;
  }
  function je(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ct(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Jo(e) {
    var n = ct(e) ? "checked" : "value", s = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), u = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof s != "undefined" && typeof s.get == "function" && typeof s.set == "function") {
      var c = s.get, m = s.set;
      return Object.defineProperty(e, n, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(C) {
        u = "" + C, m.call(this, C);
      } }), Object.defineProperty(e, n, { enumerable: s.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(C) {
        u = "" + C;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[n];
      } };
    }
  }
  function Es(e) {
    e._valueTracker || (e._valueTracker = Jo(e));
  }
  function Ps(e) {
    if (!e)
      return !1;
    var n = e._valueTracker;
    if (!n)
      return !0;
    var s = n.getValue(), u = "";
    return e && (u = ct(e) ? e.checked ? "true" : "false" : e.value), e = u, e !== s ? (n.setValue(e), !0) : !1;
  }
  function Vn(e) {
    if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined")
      return null;
    try {
      return e.activeElement || e.body;
    } catch (n) {
      return e.body;
    }
  }
  function un(e, n) {
    var s = n.checked;
    return M({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: s != null ? s : e._wrapperState.initialChecked });
  }
  function zi(e, n) {
    var s = n.defaultValue == null ? "" : n.defaultValue, u = n.checked != null ? n.checked : n.defaultChecked;
    s = je(n.value != null ? n.value : s), e._wrapperState = { initialChecked: u, initialValue: s, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
  }
  function mn(e, n) {
    n = n.checked, n != null && Q(e, "checked", n, !1);
  }
  function Fl(e, n) {
    mn(e, n);
    var s = je(n.value), u = n.type;
    if (s != null)
      u === "number" ? (s === 0 && e.value === "" || e.value != s) && (e.value = "" + s) : e.value !== "" + s && (e.value = "" + s);
    else if (u === "submit" || u === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value") ? Da(e, n.type, s) : n.hasOwnProperty("defaultValue") && Da(e, n.type, je(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
  }
  function Zo(e, n, s) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var u = n.type;
      if (!(u !== "submit" && u !== "reset" || n.value !== void 0 && n.value !== null))
        return;
      n = "" + e._wrapperState.initialValue, s || n === e.value || (e.value = n), e.defaultValue = n;
    }
    s = e.name, s !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, s !== "" && (e.name = s);
  }
  function Da(e, n, s) {
    (n !== "number" || Vn(e.ownerDocument) !== e) && (s == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + s && (e.defaultValue = "" + s));
  }
  var Di = Array.isArray;
  function Fi(e, n, s, u) {
    if (e = e.options, n) {
      n = {};
      for (var c = 0; c < s.length; c++)
        n["$" + s[c]] = !0;
      for (s = 0; s < e.length; s++)
        c = n.hasOwnProperty("$" + e[s].value), e[s].selected !== c && (e[s].selected = c), c && u && (e[s].defaultSelected = !0);
    } else {
      for (s = "" + je(s), n = null, c = 0; c < e.length; c++) {
        if (e[c].value === s) {
          e[c].selected = !0, u && (e[c].defaultSelected = !0);
          return;
        }
        n !== null || e[c].disabled || (n = e[c]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Gl(e, n) {
    if (n.dangerouslySetInnerHTML != null)
      throw Error(i(91));
    return M({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Gi(e, n) {
    var s = n.value;
    if (s == null) {
      if (s = n.children, n = n.defaultValue, s != null) {
        if (n != null)
          throw Error(i(92));
        if (Di(s)) {
          if (1 < s.length)
            throw Error(i(93));
          s = s[0];
        }
        n = s;
      }
      n == null && (n = ""), s = n;
    }
    e._wrapperState = { initialValue: je(s) };
  }
  function $o(e, n) {
    var s = je(n.value), u = je(n.defaultValue);
    s != null && (s = "" + s, s !== e.value && (e.value = s), n.defaultValue == null && e.defaultValue !== s && (e.defaultValue = s)), u != null && (e.defaultValue = "" + u);
  }
  function bo(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
  }
  function eu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ei(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? eu(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Ts, tu = function(e) {
    return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(n, s, u, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(n, s, u, c);
      });
    } : e;
  }(function(e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n;
    else {
      for (Ts = Ts || document.createElement("div"), Ts.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = Ts.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; n.firstChild; )
        e.appendChild(n.firstChild);
    }
  });
  function Fa(e, n) {
    if (n) {
      var s = e.firstChild;
      if (s && s === e.lastChild && s.nodeType === 3) {
        s.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Ga = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Nf = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ga).forEach(function(e) {
    Nf.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), Ga[n] = Ga[e];
    });
  });
  function nu(e, n, s) {
    return n == null || typeof n == "boolean" || n === "" ? "" : s || typeof n != "number" || n === 0 || Ga.hasOwnProperty(e) && Ga[e] ? ("" + n).trim() : n + "px";
  }
  function ru(e, n) {
    e = e.style;
    for (var s in n)
      if (n.hasOwnProperty(s)) {
        var u = s.indexOf("--") === 0, c = nu(s, n[s], u);
        s === "float" && (s = "cssFloat"), u ? e.setProperty(s, c) : e[s] = c;
      }
  }
  var Af = M({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Bl(e, n) {
    if (n) {
      if (Af[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(i(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null)
          throw Error(i(60));
        if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML))
          throw Error(i(61));
      }
      if (n.style != null && typeof n.style != "object")
        throw Error(i(62));
    }
  }
  function Ul(e, n) {
    if (e.indexOf("-") === -1)
      return typeof n.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Hl = null;
  function jl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Rs = null, Bi = null, Ui = null;
  function iu(e) {
    if (e = ga(e)) {
      if (typeof Rs != "function")
        throw Error(i(280));
      var n = e.stateNode;
      n && (n = va(n), Rs(e.stateNode, e.type, n));
    }
  }
  function au(e) {
    Bi ? Ui ? Ui.push(e) : Ui = [e] : Bi = e;
  }
  function Ms() {
    if (Bi) {
      var e = Bi, n = Ui;
      if (Ui = Bi = null, iu(e), n)
        for (e = 0; e < n.length; e++)
          iu(n[e]);
    }
  }
  function su(e, n) {
    return e(n);
  }
  function Wl() {
  }
  var Ls = !1;
  function lu(e, n, s) {
    if (Ls)
      return e(n, s);
    Ls = !0;
    try {
      return su(e, n, s);
    } finally {
      Ls = !1, (Bi !== null || Ui !== null) && (Wl(), Ms());
    }
  }
  function Hi(e, n) {
    var s = e.stateNode;
    if (s === null)
      return null;
    var u = va(s);
    if (u === null)
      return null;
    s = u[n];
    e:
      switch (n) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (u = !u.disabled) || (e = e.type, u = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !u;
          break e;
        default:
          e = !1;
      }
    if (e)
      return null;
    if (s && typeof s != "function")
      throw Error(i(231, n, typeof s));
    return s;
  }
  var Ns = !1;
  if (g)
    try {
      var ji = {};
      Object.defineProperty(ji, "passive", { get: function() {
        Ns = !0;
      } }), window.addEventListener("test", ji, ji), window.removeEventListener("test", ji, ji);
    } catch (e) {
      Ns = !1;
    }
  function Of(e, n, s, u, c, m, C, R, A) {
    var W = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(s, W);
    } catch (ee) {
      this.onError(ee);
    }
  }
  var Ba = !1, As = null, Os = !1, Ua = null, ou = { onError: function(e) {
    Ba = !0, As = e;
  } };
  function If(e, n, s, u, c, m, C, R, A) {
    Ba = !1, As = null, Of.apply(ou, arguments);
  }
  function zf(e, n, s, u, c, m, C, R, A) {
    if (If.apply(this, arguments), Ba) {
      if (Ba) {
        var W = As;
        Ba = !1, As = null;
      } else
        throw Error(i(198));
      Os || (Os = !0, Ua = W);
    }
  }
  function ti(e) {
    var n = e, s = e;
    if (e.alternate)
      for (; n.return; )
        n = n.return;
    else {
      e = n;
      do
        n = e, n.flags & 4098 && (s = n.return), e = n.return;
      while (e);
    }
    return n.tag === 3 ? s : null;
  }
  function Vl(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null)
        return n.dehydrated;
    }
    return null;
  }
  function uu(e) {
    if (ti(e) !== e)
      throw Error(i(188));
  }
  function Yl(e) {
    var n = e.alternate;
    if (!n) {
      if (n = ti(e), n === null)
        throw Error(i(188));
      return n !== e ? null : e;
    }
    for (var s = e, u = n; ; ) {
      var c = s.return;
      if (c === null)
        break;
      var m = c.alternate;
      if (m === null) {
        if (u = c.return, u !== null) {
          s = u;
          continue;
        }
        break;
      }
      if (c.child === m.child) {
        for (m = c.child; m; ) {
          if (m === s)
            return uu(c), e;
          if (m === u)
            return uu(c), n;
          m = m.sibling;
        }
        throw Error(i(188));
      }
      if (s.return !== u.return)
        s = c, u = m;
      else {
        for (var C = !1, R = c.child; R; ) {
          if (R === s) {
            C = !0, s = c, u = m;
            break;
          }
          if (R === u) {
            C = !0, u = c, s = m;
            break;
          }
          R = R.sibling;
        }
        if (!C) {
          for (R = m.child; R; ) {
            if (R === s) {
              C = !0, s = m, u = c;
              break;
            }
            if (R === u) {
              C = !0, u = m, s = c;
              break;
            }
            R = R.sibling;
          }
          if (!C)
            throw Error(i(189));
        }
      }
      if (s.alternate !== u)
        throw Error(i(190));
    }
    if (s.tag !== 3)
      throw Error(i(188));
    return s.stateNode.current === s ? e : n;
  }
  function Wi(e) {
    return e = Yl(e), e !== null ? Is(e) : null;
  }
  function Is(e) {
    if (e.tag === 5 || e.tag === 6)
      return e;
    for (e = e.child; e !== null; ) {
      var n = Is(e);
      if (n !== null)
        return n;
      e = e.sibling;
    }
    return null;
  }
  var Ha = t.unstable_scheduleCallback, zs = t.unstable_cancelCallback, Vi = t.unstable_shouldYield, Mr = t.unstable_requestPaint, Be = t.unstable_now, pt = t.unstable_getCurrentPriorityLevel, Yn = t.unstable_ImmediatePriority, zt = t.unstable_UserBlockingPriority, Dt = t.unstable_NormalPriority, ni = t.unstable_LowPriority, ri = t.unstable_IdlePriority, Ft = null, fn = null;
  function fu(e) {
    if (fn && typeof fn.onCommitFiberRoot == "function")
      try {
        fn.onCommitFiberRoot(Ft, e, void 0, (e.current.flags & 128) === 128);
      } catch (n) {
      }
  }
  var yn = Math.clz32 ? Math.clz32 : Ql, Ds = Math.log, du = Math.LN2;
  function Ql(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ds(e) / du | 0) | 0;
  }
  var Qn = 64, Fs = 4194304;
  function Lr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function $e(e, n) {
    var s = e.pendingLanes;
    if (s === 0)
      return 0;
    var u = 0, c = e.suspendedLanes, m = e.pingedLanes, C = s & 268435455;
    if (C !== 0) {
      var R = C & ~c;
      R !== 0 ? u = Lr(R) : (m &= C, m !== 0 && (u = Lr(m)));
    } else
      C = s & ~c, C !== 0 ? u = Lr(C) : m !== 0 && (u = Lr(m));
    if (u === 0)
      return 0;
    if (n !== 0 && n !== u && !(n & c) && (c = u & -u, m = n & -n, c >= m || c === 16 && (m & 4194240) !== 0))
      return n;
    if (u & 4 && (u |= s & 16), n = e.entangledLanes, n !== 0)
      for (e = e.entanglements, n &= u; 0 < n; )
        s = 31 - yn(n), c = 1 << s, u |= e[s], n &= ~c;
    return u;
  }
  function ii(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Df(e, n) {
    for (var s = e.suspendedLanes, u = e.pingedLanes, c = e.expirationTimes, m = e.pendingLanes; 0 < m; ) {
      var C = 31 - yn(m), R = 1 << C, A = c[C];
      A === -1 ? (!(R & s) || R & u) && (c[C] = ii(R, n)) : A <= n && (e.expiredLanes |= R), m &= ~R;
    }
  }
  function Xl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Yi() {
    var e = Qn;
    return Qn <<= 1, !(Qn & 4194240) && (Qn = 64), e;
  }
  function Gs(e) {
    for (var n = [], s = 0; 31 > s; s++)
      n.push(e);
    return n;
  }
  function Nr(e, n, s) {
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - yn(n), e[n] = s;
  }
  function Qi(e, n) {
    var s = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var u = e.eventTimes;
    for (e = e.expirationTimes; 0 < s; ) {
      var c = 31 - yn(s), m = 1 << c;
      n[c] = 0, u[c] = -1, e[c] = -1, s &= ~m;
    }
  }
  function ja(e, n) {
    var s = e.entangledLanes |= n;
    for (e = e.entanglements; s; ) {
      var u = 31 - yn(s), c = 1 << u;
      c & n | e[u] & n && (e[u] |= n), s &= ~c;
    }
  }
  var Qe = 0;
  function cr(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var hu, Kl, cu, pu, Bs, Wa = !1, Us = [], pr = null, Xn = null, Ar = null, Or = /* @__PURE__ */ new Map(), Xi = /* @__PURE__ */ new Map(), gr = [], gu = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ql(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        pr = null;
        break;
      case "dragenter":
      case "dragleave":
        Xn = null;
        break;
      case "mouseover":
      case "mouseout":
        Ar = null;
        break;
      case "pointerover":
      case "pointerout":
        Or.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Xi.delete(n.pointerId);
    }
  }
  function ai(e, n, s, u, c, m) {
    return e === null || e.nativeEvent !== m ? (e = { blockedOn: n, domEventName: s, eventSystemFlags: u, nativeEvent: m, targetContainers: [c] }, n !== null && (n = ga(n), n !== null && Kl(n)), e) : (e.eventSystemFlags |= u, n = e.targetContainers, c !== null && n.indexOf(c) === -1 && n.push(c), e);
  }
  function Ff(e, n, s, u, c) {
    switch (n) {
      case "focusin":
        return pr = ai(pr, e, n, s, u, c), !0;
      case "dragenter":
        return Xn = ai(Xn, e, n, s, u, c), !0;
      case "mouseover":
        return Ar = ai(Ar, e, n, s, u, c), !0;
      case "pointerover":
        var m = c.pointerId;
        return Or.set(m, ai(Or.get(m) || null, e, n, s, u, c)), !0;
      case "gotpointercapture":
        return m = c.pointerId, Xi.set(m, ai(Xi.get(m) || null, e, n, s, u, c)), !0;
    }
    return !1;
  }
  function Kn(e) {
    var n = jr(e.target);
    if (n !== null) {
      var s = ti(n);
      if (s !== null) {
        if (n = s.tag, n === 13) {
          if (n = Vl(s), n !== null) {
            e.blockedOn = n, Bs(e.priority, function() {
              cu(s);
            });
            return;
          }
        } else if (n === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function si(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var s = Jl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (s === null) {
        s = e.nativeEvent;
        var u = new s.constructor(s.type, s);
        Hl = u, s.target.dispatchEvent(u), Hl = null;
      } else
        return n = ga(s), n !== null && Kl(n), e.blockedOn = s, !1;
      n.shift();
    }
    return !0;
  }
  function Hs(e, n, s) {
    si(e) && s.delete(n);
  }
  function vu() {
    Wa = !1, pr !== null && si(pr) && (pr = null), Xn !== null && si(Xn) && (Xn = null), Ar !== null && si(Ar) && (Ar = null), Or.forEach(Hs), Xi.forEach(Hs);
  }
  function mt(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Wa || (Wa = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, vu)));
  }
  function qn(e) {
    function n(c) {
      return mt(c, e);
    }
    if (0 < Us.length) {
      mt(Us[0], e);
      for (var s = 1; s < Us.length; s++) {
        var u = Us[s];
        u.blockedOn === e && (u.blockedOn = null);
      }
    }
    for (pr !== null && mt(pr, e), Xn !== null && mt(Xn, e), Ar !== null && mt(Ar, e), Or.forEach(n), Xi.forEach(n), s = 0; s < gr.length; s++)
      u = gr[s], u.blockedOn === e && (u.blockedOn = null);
    for (; 0 < gr.length && (s = gr[0], s.blockedOn === null); )
      Kn(s), s.blockedOn === null && gr.shift();
  }
  var li = K.ReactCurrentBatchConfig, _n = !0;
  function Va(e, n, s, u) {
    var c = Qe, m = li.transition;
    li.transition = null;
    try {
      Qe = 1, js(e, n, s, u);
    } finally {
      Qe = c, li.transition = m;
    }
  }
  function Sn(e, n, s, u) {
    var c = Qe, m = li.transition;
    li.transition = null;
    try {
      Qe = 4, js(e, n, s, u);
    } finally {
      Qe = c, li.transition = m;
    }
  }
  function js(e, n, s, u) {
    if (_n) {
      var c = Jl(e, n, s, u);
      if (c === null)
        sl(e, n, u, Ws, s), ql(e, u);
      else if (Ff(c, e, n, s, u))
        u.stopPropagation();
      else if (ql(e, u), n & 4 && -1 < gu.indexOf(e)) {
        for (; c !== null; ) {
          var m = ga(c);
          if (m !== null && hu(m), m = Jl(e, n, s, u), m === null && sl(e, n, u, Ws, s), m === c)
            break;
          c = m;
        }
        c !== null && u.stopPropagation();
      } else
        sl(e, n, u, null, s);
    }
  }
  var Ws = null;
  function Jl(e, n, s, u) {
    if (Ws = null, e = jl(u), e = jr(e), e !== null)
      if (n = ti(e), n === null)
        e = null;
      else if (s = n.tag, s === 13) {
        if (e = Vl(n), e !== null)
          return e;
        e = null;
      } else if (s === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
      } else
        n !== e && (e = null);
    return Ws = e, null;
  }
  function dn(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur-sm":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (pt()) {
          case Yn:
            return 1;
          case zt:
            return 4;
          case Dt:
          case ni:
            return 16;
          case ri:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ir = null, Ki = null, Vs = null;
  function wn() {
    if (Vs)
      return Vs;
    var e, n = Ki, s = n.length, u, c = "value" in Ir ? Ir.value : Ir.textContent, m = c.length;
    for (e = 0; e < s && n[e] === c[e]; e++)
      ;
    var C = s - e;
    for (u = 1; u <= C && n[s - u] === c[m - u]; u++)
      ;
    return Vs = c.slice(e, 1 < u ? 1 - u : void 0);
  }
  function oi(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function ui() {
    return !0;
  }
  function fi() {
    return !1;
  }
  function Ht(e) {
    function n(s, u, c, m, C) {
      this._reactName = s, this._targetInst = c, this.type = u, this.nativeEvent = m, this.target = C, this.currentTarget = null;
      for (var R in e)
        e.hasOwnProperty(R) && (s = e[R], this[R] = s ? s(m) : m[R]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? ui : fi, this.isPropagationStopped = fi, this;
    }
    return M(n.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var s = this.nativeEvent;
      s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1), this.isDefaultPrevented = ui);
    }, stopPropagation: function() {
      var s = this.nativeEvent;
      s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0), this.isPropagationStopped = ui);
    }, persist: function() {
    }, isPersistent: ui }), n;
  }
  var zr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ys = Ht(zr), di = M({}, zr, { view: 0, detail: 0 }), mu = Ht(di), Dr, bt, Cn, qi = M({}, di, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ji, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Cn && (Cn && e.type === "mousemove" ? (Dr = e.screenX - Cn.screenX, bt = e.screenY - Cn.screenY) : bt = Dr = 0, Cn = e), Dr);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : bt;
  } }), Zl = Ht(qi), Fr = M({}, qi, { dataTransfer: 0 }), Gr = Ht(Fr), yu = M({}, di, { relatedTarget: 0 }), hi = Ht(yu), _u = M({}, zr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Su = Ht(_u), Qs = M({}, zr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Xs = Ht(Qs), wu = M({}, zr, { data: 0 }), $l = Ht(wu), Cu = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, bl = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Ks = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Ya(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = Ks[e]) ? !!n[e] : !1;
  }
  function Ji() {
    return Ya;
  }
  var ku = M({}, di, { key: function(e) {
    if (e.key) {
      var n = Cu[e.key] || e.key;
      if (n !== "Unidentified")
        return n;
    }
    return e.type === "keypress" ? (e = oi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? bl[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ji, charCode: function(e) {
    return e.type === "keypress" ? oi(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? oi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), qs = Ht(ku), xu = M({}, qi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Zi = Ht(xu), kn = M({}, di, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ji }), Qa = Ht(kn), $i = M({}, zr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Jn = Ht($i), eo = M({}, qi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), bi = Ht(eo), Eu = [9, 13, 27, 32], Xa = g && "CompositionEvent" in window, at = null;
  g && "documentMode" in document && (at = document.documentMode);
  var Js = g && "TextEvent" in window && !at, Zn = g && (!Xa || at && 8 < at && 11 >= at), Br = String.fromCharCode(32), zn = !1;
  function to(e, n) {
    switch (e) {
      case "keyup":
        return Eu.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function no(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ur = !1;
  function Pu(e, n) {
    switch (e) {
      case "compositionend":
        return no(n);
      case "keypress":
        return n.which !== 32 ? null : (zn = !0, Br);
      case "textInput":
        return e = n.data, e === Br && zn ? null : e;
      default:
        return null;
    }
  }
  function Zs(e, n) {
    if (Ur)
      return e === "compositionend" || !Xa && to(e, n) ? (e = wn(), Vs = Ki = Ir = null, Ur = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which)
            return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Zn && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var ro = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ci(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!ro[e.type] : n === "textarea";
  }
  function $s(e, n, s, u) {
    au(u), n = ha(n, "onChange"), 0 < n.length && (s = new Ys("onChange", "change", null, s, u), e.push({ event: s, listeners: n }));
  }
  var vr = null, jt = null;
  function Ka(e) {
    al(e, 0);
  }
  function ft(e) {
    var n = Wr(e);
    if (Ps(n))
      return e;
  }
  function Wt(e, n) {
    if (e === "change")
      return n;
  }
  var Nt = !1;
  if (g) {
    var ea;
    if (g) {
      var pi = "oninput" in document;
      if (!pi) {
        var Xt = document.createElement("div");
        Xt.setAttribute("oninput", "return;"), pi = typeof Xt.oninput == "function";
      }
      ea = pi;
    } else
      ea = !1;
    Nt = ea && (!document.documentMode || 9 < document.documentMode);
  }
  function bs() {
    vr && (vr.detachEvent("onpropertychange", el), jt = vr = null);
  }
  function el(e) {
    if (e.propertyName === "value" && ft(jt)) {
      var n = [];
      $s(n, jt, e, jl(e)), lu(Ka, n);
    }
  }
  function gi(e, n, s) {
    e === "focusin" ? (bs(), vr = n, jt = s, vr.attachEvent("onpropertychange", el)) : e === "focusout" && bs();
  }
  function vi(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ft(jt);
  }
  function $n(e, n) {
    if (e === "click")
      return ft(n);
  }
  function qa(e, n) {
    if (e === "input" || e === "change")
      return ft(n);
  }
  function Ja(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var xn = typeof Object.is == "function" ? Object.is : Ja;
  function ta(e, n) {
    if (xn(e, n))
      return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var s = Object.keys(e), u = Object.keys(n);
    if (s.length !== u.length)
      return !1;
    for (u = 0; u < s.length; u++) {
      var c = s[u];
      if (!y.call(n, c) || !xn(e[c], n[c]))
        return !1;
    }
    return !0;
  }
  function io(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function na(e, n) {
    var s = io(e);
    e = 0;
    for (var u; s; ) {
      if (s.nodeType === 3) {
        if (u = e + s.textContent.length, e <= n && u >= n)
          return { node: s, offset: n - e };
        e = u;
      }
      e: {
        for (; s; ) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break e;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = io(s);
    }
  }
  function Za(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Za(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function ao() {
    for (var e = window, n = Vn(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var s = typeof n.contentWindow.location.href == "string";
      } catch (u) {
        s = !1;
      }
      if (s)
        e = n.contentWindow;
      else
        break;
      n = Vn(e.document);
    }
    return n;
  }
  function ra(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  function so(e) {
    var n = ao(), s = e.focusedElem, u = e.selectionRange;
    if (n !== s && s && s.ownerDocument && Za(s.ownerDocument.documentElement, s)) {
      if (u !== null && ra(s)) {
        if (n = u.start, e = u.end, e === void 0 && (e = n), "selectionStart" in s)
          s.selectionStart = n, s.selectionEnd = Math.min(e, s.value.length);
        else if (e = (n = s.ownerDocument || document) && n.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var c = s.textContent.length, m = Math.min(u.start, c);
          u = u.end === void 0 ? m : Math.min(u.end, c), !e.extend && m > u && (c = u, u = m, m = c), c = na(s, m);
          var C = na(
            s,
            u
          );
          c && C && (e.rangeCount !== 1 || e.anchorNode !== c.node || e.anchorOffset !== c.offset || e.focusNode !== C.node || e.focusOffset !== C.offset) && (n = n.createRange(), n.setStart(c.node, c.offset), e.removeAllRanges(), m > u ? (e.addRange(n), e.extend(C.node, C.offset)) : (n.setEnd(C.node, C.offset), e.addRange(n)));
        }
      }
      for (n = [], e = s; e = e.parentNode; )
        e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof s.focus == "function" && s.focus(), s = 0; s < n.length; s++)
        e = n[s], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var lo = g && "documentMode" in document && 11 >= document.documentMode, mi = null, ia = null, aa = null, tl = !1;
  function oo(e, n, s) {
    var u = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    tl || mi == null || mi !== Vn(u) || (u = mi, "selectionStart" in u && ra(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), aa && ta(aa, u) || (aa = u, u = ha(ia, "onSelect"), 0 < u.length && (n = new Ys("onSelect", "select", null, n, s), e.push({ event: n, listeners: u }), n.target = mi)));
  }
  function sa(e, n) {
    var s = {};
    return s[e.toLowerCase()] = n.toLowerCase(), s["Webkit" + e] = "webkit" + n, s["Moz" + e] = "moz" + n, s;
  }
  var yi = { animationend: sa("Animation", "AnimationEnd"), animationiteration: sa("Animation", "AnimationIteration"), animationstart: sa("Animation", "AnimationStart"), transitionend: sa("Transition", "TransitionEnd") }, nl = {}, Tu = {};
  g && (Tu = document.createElement("div").style, "AnimationEvent" in window || (delete yi.animationend.animation, delete yi.animationiteration.animation, delete yi.animationstart.animation), "TransitionEvent" in window || delete yi.transitionend.transition);
  function la(e) {
    if (nl[e])
      return nl[e];
    if (!yi[e])
      return e;
    var n = yi[e], s;
    for (s in n)
      if (n.hasOwnProperty(s) && s in Tu)
        return nl[e] = n[s];
    return e;
  }
  var $a = la("animationend"), Ru = la("animationiteration"), Mu = la("animationstart"), Lu = la("transitionend"), Nu = /* @__PURE__ */ new Map(), En = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function yt(e, n) {
    Nu.set(e, n), h(n, [e]);
  }
  for (var rl = 0; rl < En.length; rl++) {
    var il = En[rl], Au = il.toLowerCase(), uo = il[0].toUpperCase() + il.slice(1);
    yt(Au, "on" + uo);
  }
  yt($a, "onAnimationEnd"), yt(Ru, "onAnimationIteration"), yt(Mu, "onAnimationStart"), yt("dblclick", "onDoubleClick"), yt("focusin", "onFocus"), yt("focusout", "onBlur"), yt(Lu, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var oa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), fo = new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));
  function ho(e, n, s) {
    var u = e.type || "unknown-event";
    e.currentTarget = s, zf(u, n, void 0, e), e.currentTarget = null;
  }
  function al(e, n) {
    n = (n & 4) !== 0;
    for (var s = 0; s < e.length; s++) {
      var u = e[s], c = u.event;
      u = u.listeners;
      e: {
        var m = void 0;
        if (n)
          for (var C = u.length - 1; 0 <= C; C--) {
            var R = u[C], A = R.instance, W = R.currentTarget;
            if (R = R.listener, A !== m && c.isPropagationStopped())
              break e;
            ho(c, R, W), m = A;
          }
        else
          for (C = 0; C < u.length; C++) {
            if (R = u[C], A = R.instance, W = R.currentTarget, R = R.listener, A !== m && c.isPropagationStopped())
              break e;
            ho(c, R, W), m = A;
          }
      }
    }
    if (Os)
      throw e = Ua, Os = !1, Ua = null, e;
  }
  function st(e, n) {
    var s = n[fl];
    s === void 0 && (s = n[fl] = /* @__PURE__ */ new Set());
    var u = e + "__bubble";
    s.has(u) || (co(n, e, 2, !1), s.add(u));
  }
  function ua(e, n, s) {
    var u = 0;
    n && (u |= 4), co(s, e, u, n);
  }
  var ba = "_reactListening" + Math.random().toString(36).slice(2);
  function fa(e) {
    if (!e[ba]) {
      e[ba] = !0, l.forEach(function(s) {
        s !== "selectionchange" && (fo.has(s) || ua(s, !1, e), ua(s, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[ba] || (n[ba] = !0, ua("selectionchange", !1, n));
    }
  }
  function co(e, n, s, u) {
    switch (dn(n)) {
      case 1:
        var c = Va;
        break;
      case 4:
        c = Sn;
        break;
      default:
        c = js;
    }
    s = c.bind(null, n, s, e), c = void 0, !Ns || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (c = !0), u ? c !== void 0 ? e.addEventListener(n, s, { capture: !0, passive: c }) : e.addEventListener(n, s, !0) : c !== void 0 ? e.addEventListener(n, s, { passive: c }) : e.addEventListener(n, s, !1);
  }
  function sl(e, n, s, u, c) {
    var m = u;
    if (!(n & 1) && !(n & 2) && u !== null)
      e:
        for (; ; ) {
          if (u === null)
            return;
          var C = u.tag;
          if (C === 3 || C === 4) {
            var R = u.stateNode.containerInfo;
            if (R === c || R.nodeType === 8 && R.parentNode === c)
              break;
            if (C === 4)
              for (C = u.return; C !== null; ) {
                var A = C.tag;
                if ((A === 3 || A === 4) && (A = C.stateNode.containerInfo, A === c || A.nodeType === 8 && A.parentNode === c))
                  return;
                C = C.return;
              }
            for (; R !== null; ) {
              if (C = jr(R), C === null)
                return;
              if (A = C.tag, A === 5 || A === 6) {
                u = m = C;
                continue e;
              }
              R = R.parentNode;
            }
          }
          u = u.return;
        }
    lu(function() {
      var W = m, ee = jl(s), ne = [];
      e: {
        var $ = Nu.get(e);
        if ($ !== void 0) {
          var Se = Ys, xe = e;
          switch (e) {
            case "keypress":
              if (oi(s) === 0)
                break e;
            case "keydown":
            case "keyup":
              Se = qs;
              break;
            case "focusin":
              xe = "focus", Se = hi;
              break;
            case "focusout":
              xe = "blur-sm", Se = hi;
              break;
            case "beforeblur":
            case "afterblur":
              Se = hi;
              break;
            case "click":
              if (s.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Se = Zl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Se = Gr;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Se = Qa;
              break;
            case $a:
            case Ru:
            case Mu:
              Se = Su;
              break;
            case Lu:
              Se = Jn;
              break;
            case "scroll":
              Se = mu;
              break;
            case "wheel":
              Se = bi;
              break;
            case "copy":
            case "cut":
            case "paste":
              Se = Xs;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Se = Zi;
          }
          var Ee = (n & 4) !== 0, Mt = !Ee && e === "scroll", U = Ee ? $ !== null ? $ + "Capture" : null : $;
          Ee = [];
          for (var D = W, j; D !== null; ) {
            j = D;
            var le = j.stateNode;
            if (j.tag === 5 && le !== null && (j = le, U !== null && (le = Hi(D, U), le != null && Ee.push(da(D, le, j)))), Mt)
              break;
            D = D.return;
          }
          0 < Ee.length && ($ = new Se($, xe, null, s, ee), ne.push({ event: $, listeners: Ee }));
        }
      }
      if (!(n & 7)) {
        e: {
          if ($ = e === "mouseover" || e === "pointerover", Se = e === "mouseout" || e === "pointerout", $ && s !== Hl && (xe = s.relatedTarget || s.fromElement) && (jr(xe) || xe[tr]))
            break e;
          if ((Se || $) && ($ = ee.window === ee ? ee : ($ = ee.ownerDocument) ? $.defaultView || $.parentWindow : window, Se ? (xe = s.relatedTarget || s.toElement, Se = W, xe = xe ? jr(xe) : null, xe !== null && (Mt = ti(xe), xe !== Mt || xe.tag !== 5 && xe.tag !== 6) && (xe = null)) : (Se = null, xe = W), Se !== xe)) {
            if (Ee = Zl, le = "onMouseLeave", U = "onMouseEnter", D = "mouse", (e === "pointerout" || e === "pointerover") && (Ee = Zi, le = "onPointerLeave", U = "onPointerEnter", D = "pointer"), Mt = Se == null ? $ : Wr(Se), j = xe == null ? $ : Wr(xe), $ = new Ee(le, D + "leave", Se, s, ee), $.target = Mt, $.relatedTarget = j, le = null, jr(ee) === W && (Ee = new Ee(U, D + "enter", xe, s, ee), Ee.target = j, Ee.relatedTarget = Mt, le = Ee), Mt = le, Se && xe)
              t: {
                for (Ee = Se, U = xe, D = 0, j = Ee; j; j = _i(j))
                  D++;
                for (j = 0, le = U; le; le = _i(le))
                  j++;
                for (; 0 < D - j; )
                  Ee = _i(Ee), D--;
                for (; 0 < j - D; )
                  U = _i(U), j--;
                for (; D--; ) {
                  if (Ee === U || U !== null && Ee === U.alternate)
                    break t;
                  Ee = _i(Ee), U = _i(U);
                }
                Ee = null;
              }
            else
              Ee = null;
            Se !== null && bn(ne, $, Se, Ee, !1), xe !== null && Mt !== null && bn(ne, Mt, xe, Ee, !0);
          }
        }
        e: {
          if ($ = W ? Wr(W) : window, Se = $.nodeName && $.nodeName.toLowerCase(), Se === "select" || Se === "input" && $.type === "file")
            var Pe = Wt;
          else if (ci($))
            if (Nt)
              Pe = qa;
            else {
              Pe = vi;
              var Ae = gi;
            }
          else
            (Se = $.nodeName) && Se.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (Pe = $n);
          if (Pe && (Pe = Pe(e, W))) {
            $s(ne, Pe, s, ee);
            break e;
          }
          Ae && Ae(e, $, W), e === "focusout" && (Ae = $._wrapperState) && Ae.controlled && $.type === "number" && Da($, "number", $.value);
        }
        switch (Ae = W ? Wr(W) : window, e) {
          case "focusin":
            (ci(Ae) || Ae.contentEditable === "true") && (mi = Ae, ia = W, aa = null);
            break;
          case "focusout":
            aa = ia = mi = null;
            break;
          case "mousedown":
            tl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            tl = !1, oo(ne, s, ee);
            break;
          case "selectionchange":
            if (lo)
              break;
          case "keydown":
          case "keyup":
            oo(ne, s, ee);
        }
        var Oe;
        if (Xa)
          e: {
            switch (e) {
              case "compositionstart":
                var Ue = "onCompositionStart";
                break e;
              case "compositionend":
                Ue = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ue = "onCompositionUpdate";
                break e;
            }
            Ue = void 0;
          }
        else
          Ur ? to(e, s) && (Ue = "onCompositionEnd") : e === "keydown" && s.keyCode === 229 && (Ue = "onCompositionStart");
        Ue && (Zn && s.locale !== "ko" && (Ur || Ue !== "onCompositionStart" ? Ue === "onCompositionEnd" && Ur && (Oe = wn()) : (Ir = ee, Ki = "value" in Ir ? Ir.value : Ir.textContent, Ur = !0)), Ae = ha(W, Ue), 0 < Ae.length && (Ue = new $l(Ue, e, null, s, ee), ne.push({ event: Ue, listeners: Ae }), Oe ? Ue.data = Oe : (Oe = no(s), Oe !== null && (Ue.data = Oe)))), (Oe = Js ? Pu(e, s) : Zs(e, s)) && (W = ha(W, "onBeforeInput"), 0 < W.length && (ee = new $l("onBeforeInput", "beforeinput", null, s, ee), ne.push({ event: ee, listeners: W }), ee.data = Oe));
      }
      al(ne, n);
    });
  }
  function da(e, n, s) {
    return { instance: e, listener: n, currentTarget: s };
  }
  function ha(e, n) {
    for (var s = n + "Capture", u = []; e !== null; ) {
      var c = e, m = c.stateNode;
      c.tag === 5 && m !== null && (c = m, m = Hi(e, s), m != null && u.unshift(da(e, m, c)), m = Hi(e, n), m != null && u.push(da(e, m, c))), e = e.return;
    }
    return u;
  }
  function _i(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function bn(e, n, s, u, c) {
    for (var m = n._reactName, C = []; s !== null && s !== u; ) {
      var R = s, A = R.alternate, W = R.stateNode;
      if (A !== null && A === u)
        break;
      R.tag === 5 && W !== null && (R = W, c ? (A = Hi(s, m), A != null && C.unshift(da(s, A, R))) : c || (A = Hi(s, m), A != null && C.push(da(s, A, R)))), s = s.return;
    }
    C.length !== 0 && e.push({ event: n, listeners: C });
  }
  var er = /\r\n?/g, es = /\u0000|\uFFFD/g;
  function ca(e) {
    return (typeof e == "string" ? e : "" + e).replace(er, `
`).replace(es, "");
  }
  function Si(e, n, s) {
    if (n = ca(n), ca(e) !== n && s)
      throw Error(i(425));
  }
  function wi() {
  }
  var ll = null, Ci = null;
  function po(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var go = typeof setTimeout == "function" ? setTimeout : void 0, vo = typeof clearTimeout == "function" ? clearTimeout : void 0, ol = typeof Promise == "function" ? Promise : void 0, Gf = typeof queueMicrotask == "function" ? queueMicrotask : typeof ol != "undefined" ? function(e) {
    return ol.resolve(null).then(e).catch(Ou);
  } : go;
  function Ou(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ul(e, n) {
    var s = n, u = 0;
    do {
      var c = s.nextSibling;
      if (e.removeChild(s), c && c.nodeType === 8)
        if (s = c.data, s === "/$") {
          if (u === 0) {
            e.removeChild(c), qn(n);
            return;
          }
          u--;
        } else
          s !== "$" && s !== "$?" && s !== "$!" || u++;
      s = c;
    } while (s);
    qn(n);
  }
  function Hr(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3)
        break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?")
          break;
        if (n === "/$")
          return null;
      }
    }
    return e;
  }
  function mo(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var s = e.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (n === 0)
            return e;
          n--;
        } else
          s === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var pa = Math.random().toString(36).slice(2), Dn = "__reactFiber$" + pa, ts = "__reactProps$" + pa, tr = "__reactContainer$" + pa, fl = "__reactEvents$" + pa, Iu = "__reactListeners$" + pa, zu = "__reactHandles$" + pa;
  function jr(e) {
    var n = e[Dn];
    if (n)
      return n;
    for (var s = e.parentNode; s; ) {
      if (n = s[tr] || s[Dn]) {
        if (s = n.alternate, n.child !== null || s !== null && s.child !== null)
          for (e = mo(e); e !== null; ) {
            if (s = e[Dn])
              return s;
            e = mo(e);
          }
        return n;
      }
      e = s, s = e.parentNode;
    }
    return null;
  }
  function ga(e) {
    return e = e[Dn] || e[tr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Wr(e) {
    if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
    throw Error(i(33));
  }
  function va(e) {
    return e[ts] || null;
  }
  var dl = [], Vr = -1;
  function mr(e) {
    return { current: e };
  }
  function be(e) {
    0 > Vr || (e.current = dl[Vr], dl[Vr] = null, Vr--);
  }
  function lt(e, n) {
    Vr++, dl[Vr] = e.current, e.current = n;
  }
  var Fn = {}, Et = mr(Fn), Gt = mr(!1), nr = Fn;
  function yr(e, n) {
    var s = e.type.contextTypes;
    if (!s)
      return Fn;
    var u = e.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === n)
      return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, m;
    for (m in s)
      c[m] = n[m];
    return u && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function At(e) {
    return e = e.childContextTypes, e != null;
  }
  function ma() {
    be(Gt), be(Et);
  }
  function hl(e, n, s) {
    if (Et.current !== Fn)
      throw Error(i(168));
    lt(Et, n), lt(Gt, s);
  }
  function cl(e, n, s) {
    var u = e.stateNode;
    if (n = n.childContextTypes, typeof u.getChildContext != "function")
      return s;
    u = u.getChildContext();
    for (var c in u)
      if (!(c in n))
        throw Error(i(108, We(e) || "Unknown", c));
    return M({}, s, u);
  }
  function ns(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Fn, nr = Et.current, lt(Et, e), lt(Gt, Gt.current), !0;
  }
  function pl(e, n, s) {
    var u = e.stateNode;
    if (!u)
      throw Error(i(169));
    s ? (e = cl(e, n, nr), u.__reactInternalMemoizedMergedChildContext = e, be(Gt), be(Et), lt(Et, e)) : be(Gt), lt(Gt, s);
  }
  var Pn = null, gl = !1, yo = !1;
  function rs(e) {
    Pn === null ? Pn = [e] : Pn.push(e);
  }
  function _o(e) {
    gl = !0, rs(e);
  }
  function rr() {
    if (!yo && Pn !== null) {
      yo = !0;
      var e = 0, n = Qe;
      try {
        var s = Pn;
        for (Qe = 1; e < s.length; e++) {
          var u = s[e];
          do
            u = u(!0);
          while (u !== null);
        }
        Pn = null, gl = !1;
      } catch (c) {
        throw Pn !== null && (Pn = Pn.slice(e + 1)), Ha(Yn, rr), c;
      } finally {
        Qe = n, yo = !1;
      }
    }
    return null;
  }
  var Te = [], Ct = 0, gt = null, Pt = 0, Ot = [], en = 0, ht = null, Tn = 1, tn = "";
  function Gn(e, n) {
    Te[Ct++] = Pt, Te[Ct++] = gt, gt = e, Pt = n;
  }
  function ki(e, n, s) {
    Ot[en++] = Tn, Ot[en++] = tn, Ot[en++] = ht, ht = e;
    var u = Tn;
    e = tn;
    var c = 32 - yn(u) - 1;
    u &= ~(1 << c), s += 1;
    var m = 32 - yn(n) + c;
    if (30 < m) {
      var C = c - c % 5;
      m = (u & (1 << C) - 1).toString(32), u >>= C, c -= C, Tn = 1 << 32 - yn(n) + c | s << c | u, tn = m + e;
    } else
      Tn = 1 << m | s << c | u, tn = e;
  }
  function is(e) {
    e.return !== null && (Gn(e, 1), ki(e, 1, 0));
  }
  function as(e) {
    for (; e === gt; )
      gt = Te[--Ct], Te[Ct] = null, Pt = Te[--Ct], Te[Ct] = null;
    for (; e === ht; )
      ht = Ot[--en], Ot[en] = null, tn = Ot[--en], Ot[en] = null, Tn = Ot[--en], Ot[en] = null;
  }
  var Kt = null, qt = null, Xe = !1, ge = null;
  function ss(e, n) {
    var s = dr(5, null, null, 0);
    s.elementType = "DELETED", s.stateNode = n, s.return = e, n = e.deletions, n === null ? (e.deletions = [s], e.flags |= 16) : n.push(s);
  }
  function vl(e, n) {
    switch (e.tag) {
      case 5:
        var s = e.type;
        return n = n.nodeType !== 1 || s.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, Kt = e, qt = Hr(n.firstChild), !0) : !1;
      case 6:
        return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, Kt = e, qt = null, !0) : !1;
      case 13:
        return n = n.nodeType !== 8 ? null : n, n !== null ? (s = ht !== null ? { id: Tn, overflow: tn } : null, e.memoizedState = { dehydrated: n, treeContext: s, retryLane: 1073741824 }, s = dr(18, null, null, 0), s.stateNode = n, s.return = e, e.child = s, Kt = e, qt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Rn(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ir(e) {
    if (Xe) {
      var n = qt;
      if (n) {
        var s = n;
        if (!vl(e, n)) {
          if (Rn(e))
            throw Error(i(418));
          n = Hr(s.nextSibling);
          var u = Kt;
          n && vl(e, n) ? ss(u, s) : (e.flags = e.flags & -4097 | 2, Xe = !1, Kt = e);
        }
      } else {
        if (Rn(e))
          throw Error(i(418));
        e.flags = e.flags & -4097 | 2, Xe = !1, Kt = e;
      }
    }
  }
  function ya(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
    Kt = e;
  }
  function Yr(e) {
    if (e !== Kt)
      return !1;
    if (!Xe)
      return ya(e), Xe = !0, !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !po(e.type, e.memoizedProps)), n && (n = qt)) {
      if (Rn(e))
        throw ml(), Error(i(418));
      for (; n; )
        ss(e, n), n = Hr(n.nextSibling);
    }
    if (ya(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(i(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var s = e.data;
            if (s === "/$") {
              if (n === 0) {
                qt = Hr(e.nextSibling);
                break e;
              }
              n--;
            } else
              s !== "$" && s !== "$!" && s !== "$?" || n++;
          }
          e = e.nextSibling;
        }
        qt = null;
      }
    } else
      qt = Kt ? Hr(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ml() {
    for (var e = qt; e; )
      e = Hr(e.nextSibling);
  }
  function Qr() {
    qt = Kt = null, Xe = !1;
  }
  function Bn(e) {
    ge === null ? ge = [e] : ge.push(e);
  }
  var ls = K.ReactCurrentBatchConfig;
  function hn(e, n) {
    if (e && e.defaultProps) {
      n = M({}, n), e = e.defaultProps;
      for (var s in e)
        n[s] === void 0 && (n[s] = e[s]);
      return n;
    }
    return n;
  }
  var xi = mr(null), Mn = null, _r = null, Ei = null;
  function Pi() {
    Ei = _r = Mn = null;
  }
  function Vt(e) {
    var n = xi.current;
    be(xi), e._currentValue = n;
  }
  function ar(e, n, s) {
    for (; e !== null; ) {
      var u = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, u !== null && (u.childLanes |= n)) : u !== null && (u.childLanes & n) !== n && (u.childLanes |= n), e === s)
        break;
      e = e.return;
    }
  }
  function nn(e, n) {
    Mn = e, Ei = _r = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (Nn = !0), e.firstContext = null);
  }
  function Jt(e) {
    var n = e._currentValue;
    if (Ei !== e)
      if (e = { context: e, memoizedValue: n, next: null }, _r === null) {
        if (Mn === null)
          throw Error(i(308));
        _r = e, Mn.dependencies = { lanes: 0, firstContext: e };
      } else
        _r = _r.next = e;
    return n;
  }
  var Tt = null;
  function yl(e) {
    Tt === null ? Tt = [e] : Tt.push(e);
  }
  function Ti(e, n, s, u) {
    var c = n.interleaved;
    return c === null ? (s.next = s, yl(n)) : (s.next = c.next, c.next = s), n.interleaved = s, Un(e, u);
  }
  function Un(e, n) {
    e.lanes |= n;
    var s = e.alternate;
    for (s !== null && (s.lanes |= n), s = e, e = e.return; e !== null; )
      e.childLanes |= n, s = e.alternate, s !== null && (s.childLanes |= n), s = e, e = e.return;
    return s.tag === 3 ? s.stateNode : null;
  }
  var Xr = !1;
  function _l(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function So(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Ln(e, n) {
    return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function sr(e, n, s) {
    var u = e.updateQueue;
    if (u === null)
      return null;
    if (u = u.shared, qe & 2) {
      var c = u.pending;
      return c === null ? n.next = n : (n.next = c.next, c.next = n), u.pending = n, Un(e, s);
    }
    return c = u.interleaved, c === null ? (n.next = n, yl(u)) : (n.next = c.next, c.next = n), u.interleaved = n, Un(e, s);
  }
  function Sr(e, n, s) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (s & 4194240) !== 0)) {
      var u = n.lanes;
      u &= e.pendingLanes, s |= u, n.lanes = s, ja(e, s);
    }
  }
  function wo(e, n) {
    var s = e.updateQueue, u = e.alternate;
    if (u !== null && (u = u.updateQueue, s === u)) {
      var c = null, m = null;
      if (s = s.firstBaseUpdate, s !== null) {
        do {
          var C = { eventTime: s.eventTime, lane: s.lane, tag: s.tag, payload: s.payload, callback: s.callback, next: null };
          m === null ? c = m = C : m = m.next = C, s = s.next;
        } while (s !== null);
        m === null ? c = m = n : m = m.next = n;
      } else
        c = m = n;
      s = { baseState: u.baseState, firstBaseUpdate: c, lastBaseUpdate: m, shared: u.shared, effects: u.effects }, e.updateQueue = s;
      return;
    }
    e = s.lastBaseUpdate, e === null ? s.firstBaseUpdate = n : e.next = n, s.lastBaseUpdate = n;
  }
  function os(e, n, s, u) {
    var c = e.updateQueue;
    Xr = !1;
    var m = c.firstBaseUpdate, C = c.lastBaseUpdate, R = c.shared.pending;
    if (R !== null) {
      c.shared.pending = null;
      var A = R, W = A.next;
      A.next = null, C === null ? m = W : C.next = W, C = A;
      var ee = e.alternate;
      ee !== null && (ee = ee.updateQueue, R = ee.lastBaseUpdate, R !== C && (R === null ? ee.firstBaseUpdate = W : R.next = W, ee.lastBaseUpdate = A));
    }
    if (m !== null) {
      var ne = c.baseState;
      C = 0, ee = W = A = null, R = m;
      do {
        var $ = R.lane, Se = R.eventTime;
        if ((u & $) === $) {
          ee !== null && (ee = ee.next = {
            eventTime: Se,
            lane: 0,
            tag: R.tag,
            payload: R.payload,
            callback: R.callback,
            next: null
          });
          e: {
            var xe = e, Ee = R;
            switch ($ = n, Se = s, Ee.tag) {
              case 1:
                if (xe = Ee.payload, typeof xe == "function") {
                  ne = xe.call(Se, ne, $);
                  break e;
                }
                ne = xe;
                break e;
              case 3:
                xe.flags = xe.flags & -65537 | 128;
              case 0:
                if (xe = Ee.payload, $ = typeof xe == "function" ? xe.call(Se, ne, $) : xe, $ == null)
                  break e;
                ne = M({}, ne, $);
                break e;
              case 2:
                Xr = !0;
            }
          }
          R.callback !== null && R.lane !== 0 && (e.flags |= 64, $ = c.effects, $ === null ? c.effects = [R] : $.push(R));
        } else
          Se = { eventTime: Se, lane: $, tag: R.tag, payload: R.payload, callback: R.callback, next: null }, ee === null ? (W = ee = Se, A = ne) : ee = ee.next = Se, C |= $;
        if (R = R.next, R === null) {
          if (R = c.shared.pending, R === null)
            break;
          $ = R, R = $.next, $.next = null, c.lastBaseUpdate = $, c.shared.pending = null;
        }
      } while (1);
      if (ee === null && (A = ne), c.baseState = A, c.firstBaseUpdate = W, c.lastBaseUpdate = ee, n = c.shared.interleaved, n !== null) {
        c = n;
        do
          C |= c.lane, c = c.next;
        while (c !== n);
      } else
        m === null && (c.shared.lanes = 0);
      cs |= C, e.lanes = C, e.memoizedState = ne;
    }
  }
  function _a(e, n, s) {
    if (e = n.effects, n.effects = null, e !== null)
      for (n = 0; n < e.length; n++) {
        var u = e[n], c = u.callback;
        if (c !== null) {
          if (u.callback = null, u = s, typeof c != "function")
            throw Error(i(191, c));
          c.call(u);
        }
      }
  }
  var Du = new d.Component().refs;
  function Co(e, n, s, u) {
    n = e.memoizedState, s = s(u, n), s = s == null ? n : M({}, n, s), e.memoizedState = s, e.lanes === 0 && (e.updateQueue.baseState = s);
  }
  var us = { isMounted: function(e) {
    return (e = e._reactInternals) ? ti(e) === e : !1;
  }, enqueueSetState: function(e, n, s) {
    e = e._reactInternals;
    var u = vn(), c = Ta(e), m = Ln(u, c);
    m.payload = n, s != null && (m.callback = s), n = sr(e, m, c), n !== null && (Pr(n, e, c, u), Sr(n, e, c));
  }, enqueueReplaceState: function(e, n, s) {
    e = e._reactInternals;
    var u = vn(), c = Ta(e), m = Ln(u, c);
    m.tag = 1, m.payload = n, s != null && (m.callback = s), n = sr(e, m, c), n !== null && (Pr(n, e, c, u), Sr(n, e, c));
  }, enqueueForceUpdate: function(e, n) {
    e = e._reactInternals;
    var s = vn(), u = Ta(e), c = Ln(s, u);
    c.tag = 2, n != null && (c.callback = n), n = sr(e, c, u), n !== null && (Pr(n, e, u, s), Sr(n, e, u));
  } };
  function ko(e, n, s, u, c, m, C) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(u, m, C) : n.prototype && n.prototype.isPureReactComponent ? !ta(s, u) || !ta(c, m) : !0;
  }
  function Kr(e, n, s) {
    var u = !1, c = Fn, m = n.contextType;
    return typeof m == "object" && m !== null ? m = Jt(m) : (c = At(n) ? nr : Et.current, u = n.contextTypes, m = (u = u != null) ? yr(e, c) : Fn), n = new n(s, m), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = us, e.stateNode = n, n._reactInternals = e, u && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = c, e.__reactInternalMemoizedMaskedChildContext = m), n;
  }
  function Fu(e, n, s, u) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(s, u), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(s, u), n.state !== e && us.enqueueReplaceState(n, n.state, null);
  }
  function xo(e, n, s, u) {
    var c = e.stateNode;
    c.props = s, c.state = e.memoizedState, c.refs = Du, _l(e);
    var m = n.contextType;
    typeof m == "object" && m !== null ? c.context = Jt(m) : (m = At(n) ? nr : Et.current, c.context = yr(e, m)), c.state = e.memoizedState, m = n.getDerivedStateFromProps, typeof m == "function" && (Co(e, n, m, s), c.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (n = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), n !== c.state && us.enqueueReplaceState(c, c.state, null), os(e, s, c, u), c.state = e.memoizedState), typeof c.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function cn(e, n, s) {
    if (e = s.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (s._owner) {
        if (s = s._owner, s) {
          if (s.tag !== 1)
            throw Error(i(309));
          var u = s.stateNode;
        }
        if (!u)
          throw Error(i(147, e));
        var c = u, m = "" + e;
        return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === m ? n.ref : (n = function(C) {
          var R = c.refs;
          R === Du && (R = c.refs = {}), C === null ? delete R[m] : R[m] = C;
        }, n._stringRef = m, n);
      }
      if (typeof e != "string")
        throw Error(i(284));
      if (!s._owner)
        throw Error(i(290, e));
    }
    return e;
  }
  function Sl(e, n) {
    throw e = Object.prototype.toString.call(n), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  function Eo(e) {
    var n = e._init;
    return n(e._payload);
  }
  function Gu(e) {
    function n(U, D) {
      if (e) {
        var j = U.deletions;
        j === null ? (U.deletions = [D], U.flags |= 16) : j.push(D);
      }
    }
    function s(U, D) {
      if (!e)
        return null;
      for (; D !== null; )
        n(U, D), D = D.sibling;
      return null;
    }
    function u(U, D) {
      for (U = /* @__PURE__ */ new Map(); D !== null; )
        D.key !== null ? U.set(D.key, D) : U.set(D.index, D), D = D.sibling;
      return U;
    }
    function c(U, D) {
      return U = Ma(U, D), U.index = 0, U.sibling = null, U;
    }
    function m(U, D, j) {
      return U.index = j, e ? (j = U.alternate, j !== null ? (j = j.index, j < D ? (U.flags |= 2, D) : j) : (U.flags |= 2, D)) : (U.flags |= 1048576, D);
    }
    function C(U) {
      return e && U.alternate === null && (U.flags |= 2), U;
    }
    function R(U, D, j, le) {
      return D === null || D.tag !== 6 ? (D = ud(j, U.mode, le), D.return = U, D) : (D = c(D, j), D.return = U, D);
    }
    function A(U, D, j, le) {
      var Pe = j.type;
      return Pe === de ? ee(U, D, j.props.children, le, j.key) : D !== null && (D.elementType === Pe || typeof Pe == "object" && Pe !== null && Pe.$$typeof === Le && Eo(Pe) === D.type) ? (le = c(D, j.props), le.ref = cn(U, D, j), le.return = U, le) : (le = ef(j.type, j.key, j.props, null, U.mode, le), le.ref = cn(U, D, j), le.return = U, le);
    }
    function W(U, D, j, le) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== j.containerInfo || D.stateNode.implementation !== j.implementation ? (D = fd(j, U.mode, le), D.return = U, D) : (D = c(D, j.children || []), D.return = U, D);
    }
    function ee(U, D, j, le, Pe) {
      return D === null || D.tag !== 7 ? (D = ms(j, U.mode, le, Pe), D.return = U, D) : (D = c(D, j), D.return = U, D);
    }
    function ne(U, D, j) {
      if (typeof D == "string" && D !== "" || typeof D == "number")
        return D = ud("" + D, U.mode, j), D.return = U, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case se:
            return j = ef(D.type, D.key, D.props, null, U.mode, j), j.ref = cn(U, null, D), j.return = U, j;
          case J:
            return D = fd(D, U.mode, j), D.return = U, D;
          case Le:
            var le = D._init;
            return ne(U, le(D._payload), j);
        }
        if (Di(D) || we(D))
          return D = ms(D, U.mode, j, null), D.return = U, D;
        Sl(U, D);
      }
      return null;
    }
    function $(U, D, j, le) {
      var Pe = D !== null ? D.key : null;
      if (typeof j == "string" && j !== "" || typeof j == "number")
        return Pe !== null ? null : R(U, D, "" + j, le);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case se:
            return j.key === Pe ? A(U, D, j, le) : null;
          case J:
            return j.key === Pe ? W(U, D, j, le) : null;
          case Le:
            return Pe = j._init, $(
              U,
              D,
              Pe(j._payload),
              le
            );
        }
        if (Di(j) || we(j))
          return Pe !== null ? null : ee(U, D, j, le, null);
        Sl(U, j);
      }
      return null;
    }
    function Se(U, D, j, le, Pe) {
      if (typeof le == "string" && le !== "" || typeof le == "number")
        return U = U.get(j) || null, R(D, U, "" + le, Pe);
      if (typeof le == "object" && le !== null) {
        switch (le.$$typeof) {
          case se:
            return U = U.get(le.key === null ? j : le.key) || null, A(D, U, le, Pe);
          case J:
            return U = U.get(le.key === null ? j : le.key) || null, W(D, U, le, Pe);
          case Le:
            var Ae = le._init;
            return Se(U, D, j, Ae(le._payload), Pe);
        }
        if (Di(le) || we(le))
          return U = U.get(j) || null, ee(D, U, le, Pe, null);
        Sl(D, le);
      }
      return null;
    }
    function xe(U, D, j, le) {
      for (var Pe = null, Ae = null, Oe = D, Ue = D = 0, Qt = null; Oe !== null && Ue < j.length; Ue++) {
        Oe.index > Ue ? (Qt = Oe, Oe = null) : Qt = Oe.sibling;
        var Je = $(U, Oe, j[Ue], le);
        if (Je === null) {
          Oe === null && (Oe = Qt);
          break;
        }
        e && Oe && Je.alternate === null && n(U, Oe), D = m(Je, D, Ue), Ae === null ? Pe = Je : Ae.sibling = Je, Ae = Je, Oe = Qt;
      }
      if (Ue === j.length)
        return s(U, Oe), Xe && Gn(U, Ue), Pe;
      if (Oe === null) {
        for (; Ue < j.length; Ue++)
          Oe = ne(U, j[Ue], le), Oe !== null && (D = m(Oe, D, Ue), Ae === null ? Pe = Oe : Ae.sibling = Oe, Ae = Oe);
        return Xe && Gn(U, Ue), Pe;
      }
      for (Oe = u(U, Oe); Ue < j.length; Ue++)
        Qt = Se(Oe, U, Ue, j[Ue], le), Qt !== null && (e && Qt.alternate !== null && Oe.delete(Qt.key === null ? Ue : Qt.key), D = m(Qt, D, Ue), Ae === null ? Pe = Qt : Ae.sibling = Qt, Ae = Qt);
      return e && Oe.forEach(function(La) {
        return n(U, La);
      }), Xe && Gn(U, Ue), Pe;
    }
    function Ee(U, D, j, le) {
      var Pe = we(j);
      if (typeof Pe != "function")
        throw Error(i(150));
      if (j = Pe.call(j), j == null)
        throw Error(i(151));
      for (var Ae = Pe = null, Oe = D, Ue = D = 0, Qt = null, Je = j.next(); Oe !== null && !Je.done; Ue++, Je = j.next()) {
        Oe.index > Ue ? (Qt = Oe, Oe = null) : Qt = Oe.sibling;
        var La = $(U, Oe, Je.value, le);
        if (La === null) {
          Oe === null && (Oe = Qt);
          break;
        }
        e && Oe && La.alternate === null && n(U, Oe), D = m(La, D, Ue), Ae === null ? Pe = La : Ae.sibling = La, Ae = La, Oe = Qt;
      }
      if (Je.done)
        return s(
          U,
          Oe
        ), Xe && Gn(U, Ue), Pe;
      if (Oe === null) {
        for (; !Je.done; Ue++, Je = j.next())
          Je = ne(U, Je.value, le), Je !== null && (D = m(Je, D, Ue), Ae === null ? Pe = Je : Ae.sibling = Je, Ae = Je);
        return Xe && Gn(U, Ue), Pe;
      }
      for (Oe = u(U, Oe); !Je.done; Ue++, Je = j.next())
        Je = Se(Oe, U, Ue, Je.value, le), Je !== null && (e && Je.alternate !== null && Oe.delete(Je.key === null ? Ue : Je.key), D = m(Je, D, Ue), Ae === null ? Pe = Je : Ae.sibling = Je, Ae = Je);
      return e && Oe.forEach(function(Yp) {
        return n(U, Yp);
      }), Xe && Gn(U, Ue), Pe;
    }
    function Mt(U, D, j, le) {
      if (typeof j == "object" && j !== null && j.type === de && j.key === null && (j = j.props.children), typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case se:
            e: {
              for (var Pe = j.key, Ae = D; Ae !== null; ) {
                if (Ae.key === Pe) {
                  if (Pe = j.type, Pe === de) {
                    if (Ae.tag === 7) {
                      s(U, Ae.sibling), D = c(Ae, j.props.children), D.return = U, U = D;
                      break e;
                    }
                  } else if (Ae.elementType === Pe || typeof Pe == "object" && Pe !== null && Pe.$$typeof === Le && Eo(Pe) === Ae.type) {
                    s(U, Ae.sibling), D = c(Ae, j.props), D.ref = cn(U, Ae, j), D.return = U, U = D;
                    break e;
                  }
                  s(U, Ae);
                  break;
                } else
                  n(U, Ae);
                Ae = Ae.sibling;
              }
              j.type === de ? (D = ms(j.props.children, U.mode, le, j.key), D.return = U, U = D) : (le = ef(j.type, j.key, j.props, null, U.mode, le), le.ref = cn(U, D, j), le.return = U, U = le);
            }
            return C(U);
          case J:
            e: {
              for (Ae = j.key; D !== null; ) {
                if (D.key === Ae)
                  if (D.tag === 4 && D.stateNode.containerInfo === j.containerInfo && D.stateNode.implementation === j.implementation) {
                    s(U, D.sibling), D = c(D, j.children || []), D.return = U, U = D;
                    break e;
                  } else {
                    s(U, D);
                    break;
                  }
                else
                  n(U, D);
                D = D.sibling;
              }
              D = fd(j, U.mode, le), D.return = U, U = D;
            }
            return C(U);
          case Le:
            return Ae = j._init, Mt(U, D, Ae(j._payload), le);
        }
        if (Di(j))
          return xe(U, D, j, le);
        if (we(j))
          return Ee(U, D, j, le);
        Sl(U, j);
      }
      return typeof j == "string" && j !== "" || typeof j == "number" ? (j = "" + j, D !== null && D.tag === 6 ? (s(U, D.sibling), D = c(D, j), D.return = U, U = D) : (s(U, D), D = ud(j, U.mode, le), D.return = U, U = D), C(U)) : s(U, D);
    }
    return Mt;
  }
  var Ri = Gu(!0), wr = Gu(!1), fs = {}, lr = mr(fs), Sa = mr(fs), qr = mr(fs);
  function Cr(e) {
    if (e === fs)
      throw Error(i(174));
    return e;
  }
  function wl(e, n) {
    switch (lt(qr, n), lt(Sa, e), lt(lr, fs), e = n.nodeType, e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : ei(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = ei(n, e);
    }
    be(lr), lt(lr, n);
  }
  function Jr() {
    be(lr), be(Sa), be(qr);
  }
  function Po(e) {
    Cr(qr.current);
    var n = Cr(lr.current), s = ei(n, e.type);
    n !== s && (lt(Sa, e), lt(lr, s));
  }
  function wa(e) {
    Sa.current === e && (be(lr), be(Sa));
  }
  var dt = mr(0);
  function Cl(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var s = n.memoizedState;
        if (s !== null && (s = s.dehydrated, s === null || s.data === "$?" || s.data === "$!"))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128)
          return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e)
        break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e)
          return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var rn = [];
  function ds() {
    for (var e = 0; e < rn.length; e++)
      rn[e]._workInProgressVersionPrimary = null;
    rn.length = 0;
  }
  var kl = K.ReactCurrentDispatcher, or = K.ReactCurrentBatchConfig, ur = 0, et = null, _t = null, kt = null, Ca = !1, hs = !1, ka = 0, Bu = 0;
  function Rt() {
    throw Error(i(321));
  }
  function To(e, n) {
    if (n === null)
      return !1;
    for (var s = 0; s < n.length && s < e.length; s++)
      if (!xn(e[s], n[s]))
        return !1;
    return !0;
  }
  function Ro(e, n, s, u, c, m) {
    if (ur = m, et = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, kl.current = e === null || e.memoizedState === null ? mp : yp, e = s(u, c), hs) {
      m = 0;
      do {
        if (hs = !1, ka = 0, 25 <= m)
          throw Error(i(301));
        m += 1, kt = _t = null, n.updateQueue = null, kl.current = _p, e = s(u, c);
      } while (hs);
    }
    if (kl.current = Hu, n = _t !== null && _t.next !== null, ur = 0, kt = _t = et = null, Ca = !1, n)
      throw Error(i(300));
    return e;
  }
  function r() {
    var e = ka !== 0;
    return ka = 0, e;
  }
  function a() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return kt === null ? et.memoizedState = kt = e : kt = kt.next = e, kt;
  }
  function o() {
    if (_t === null) {
      var e = et.alternate;
      e = e !== null ? e.memoizedState : null;
    } else
      e = _t.next;
    var n = kt === null ? et.memoizedState : kt.next;
    if (n !== null)
      kt = n, _t = e;
    else {
      if (e === null)
        throw Error(i(310));
      _t = e, e = { memoizedState: _t.memoizedState, baseState: _t.baseState, baseQueue: _t.baseQueue, queue: _t.queue, next: null }, kt === null ? et.memoizedState = kt = e : kt = kt.next = e;
    }
    return kt;
  }
  function v(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function _(e) {
    var n = o(), s = n.queue;
    if (s === null)
      throw Error(i(311));
    s.lastRenderedReducer = e;
    var u = _t, c = u.baseQueue, m = s.pending;
    if (m !== null) {
      if (c !== null) {
        var C = c.next;
        c.next = m.next, m.next = C;
      }
      u.baseQueue = c = m, s.pending = null;
    }
    if (c !== null) {
      m = c.next, u = u.baseState;
      var R = C = null, A = null, W = m;
      do {
        var ee = W.lane;
        if ((ur & ee) === ee)
          A !== null && (A = A.next = { lane: 0, action: W.action, hasEagerState: W.hasEagerState, eagerState: W.eagerState, next: null }), u = W.hasEagerState ? W.eagerState : e(u, W.action);
        else {
          var ne = {
            lane: ee,
            action: W.action,
            hasEagerState: W.hasEagerState,
            eagerState: W.eagerState,
            next: null
          };
          A === null ? (R = A = ne, C = u) : A = A.next = ne, et.lanes |= ee, cs |= ee;
        }
        W = W.next;
      } while (W !== null && W !== m);
      A === null ? C = u : A.next = R, xn(u, n.memoizedState) || (Nn = !0), n.memoizedState = u, n.baseState = C, n.baseQueue = A, s.lastRenderedState = u;
    }
    if (e = s.interleaved, e !== null) {
      c = e;
      do
        m = c.lane, et.lanes |= m, cs |= m, c = c.next;
      while (c !== e);
    } else
      c === null && (s.lanes = 0);
    return [n.memoizedState, s.dispatch];
  }
  function w(e) {
    var n = o(), s = n.queue;
    if (s === null)
      throw Error(i(311));
    s.lastRenderedReducer = e;
    var u = s.dispatch, c = s.pending, m = n.memoizedState;
    if (c !== null) {
      s.pending = null;
      var C = c = c.next;
      do
        m = e(m, C.action), C = C.next;
      while (C !== c);
      xn(m, n.memoizedState) || (Nn = !0), n.memoizedState = m, n.baseQueue === null && (n.baseState = m), s.lastRenderedState = m;
    }
    return [m, u];
  }
  function T() {
  }
  function I(e, n) {
    var s = et, u = o(), c = n(), m = !xn(u.memoizedState, c);
    if (m && (u.memoizedState = c, Nn = !0), u = u.queue, ve(Re.bind(null, s, u, e), [e]), u.getSnapshot !== n || m || kt !== null && kt.memoizedState.tag & 1) {
      if (s.flags |= 2048, nt(9, ce.bind(null, s, u, c, n), void 0, null), Yt === null)
        throw Error(i(349));
      ur & 30 || V(s, n, c);
    }
    return c;
  }
  function V(e, n, s) {
    e.flags |= 16384, e = { getSnapshot: n, value: s }, n = et.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, et.updateQueue = n, n.stores = [e]) : (s = n.stores, s === null ? n.stores = [e] : s.push(e));
  }
  function ce(e, n, s, u) {
    n.value = s, n.getSnapshot = u, ze(n) && ye(e);
  }
  function Re(e, n, s) {
    return s(function() {
      ze(n) && ye(e);
    });
  }
  function ze(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var s = n();
      return !xn(e, s);
    } catch (u) {
      return !0;
    }
  }
  function ye(e) {
    var n = Un(e, 1);
    n !== null && Pr(n, e, 1, -1);
  }
  function tt(e) {
    var n = a();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: v, lastRenderedState: e }, n.queue = e, e = e.dispatch = vp.bind(null, et, e), [n.memoizedState, e];
  }
  function nt(e, n, s, u) {
    return e = { tag: e, create: n, destroy: s, deps: u, next: null }, n = et.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, et.updateQueue = n, n.lastEffect = e.next = e) : (s = n.lastEffect, s === null ? n.lastEffect = e.next = e : (u = s.next, s.next = e, e.next = u, n.lastEffect = e)), e;
  }
  function pn() {
    return o().memoizedState;
  }
  function H(e, n, s, u) {
    var c = a();
    et.flags |= e, c.memoizedState = nt(1 | n, s, void 0, u === void 0 ? null : u);
  }
  function F(e, n, s, u) {
    var c = o();
    u = u === void 0 ? null : u;
    var m = void 0;
    if (_t !== null) {
      var C = _t.memoizedState;
      if (m = C.destroy, u !== null && To(u, C.deps)) {
        c.memoizedState = nt(n, s, m, u);
        return;
      }
    }
    et.flags |= e, c.memoizedState = nt(1 | n, s, m, u);
  }
  function Y(e, n) {
    return H(8390656, 8, e, n);
  }
  function ve(e, n) {
    return F(2048, 8, e, n);
  }
  function Me(e, n) {
    return F(4, 2, e, n);
  }
  function it(e, n) {
    return F(4, 4, e, n);
  }
  function Ge(e, n) {
    if (typeof n == "function")
      return e = e(), n(e), function() {
        n(null);
      };
    if (n != null)
      return e = e(), n.current = e, function() {
        n.current = null;
      };
  }
  function Ke(e, n, s) {
    return s = s != null ? s.concat([e]) : null, F(4, 4, Ge.bind(null, n, e), s);
  }
  function vt() {
  }
  function Ve(e, n) {
    var s = o();
    n = n === void 0 ? null : n;
    var u = s.memoizedState;
    return u !== null && n !== null && To(n, u[1]) ? u[0] : (s.memoizedState = [e, n], e);
  }
  function kr(e, n) {
    var s = o();
    n = n === void 0 ? null : n;
    var u = s.memoizedState;
    return u !== null && n !== null && To(n, u[1]) ? u[0] : (e = e(), s.memoizedState = [e, n], e);
  }
  function Uu(e, n, s) {
    return ur & 21 ? (xn(s, n) || (s = Yi(), et.lanes |= s, cs |= s, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, Nn = !0), e.memoizedState = s);
  }
  function pp(e, n) {
    var s = Qe;
    Qe = s !== 0 && 4 > s ? s : 4, e(!0);
    var u = or.transition;
    or.transition = {};
    try {
      e(!1), n();
    } finally {
      Qe = s, or.transition = u;
    }
  }
  function Xd() {
    return o().memoizedState;
  }
  function gp(e, n, s) {
    var u = Ta(e);
    if (s = { lane: u, action: s, hasEagerState: !1, eagerState: null, next: null }, Kd(e))
      qd(n, s);
    else if (s = Ti(e, n, s, u), s !== null) {
      var c = vn();
      Pr(s, e, u, c), Jd(s, n, u);
    }
  }
  function vp(e, n, s) {
    var u = Ta(e), c = { lane: u, action: s, hasEagerState: !1, eagerState: null, next: null };
    if (Kd(e))
      qd(n, c);
    else {
      var m = e.alternate;
      if (e.lanes === 0 && (m === null || m.lanes === 0) && (m = n.lastRenderedReducer, m !== null))
        try {
          var C = n.lastRenderedState, R = m(C, s);
          if (c.hasEagerState = !0, c.eagerState = R, xn(R, C)) {
            var A = n.interleaved;
            A === null ? (c.next = c, yl(n)) : (c.next = A.next, A.next = c), n.interleaved = c;
            return;
          }
        } catch (W) {
        } finally {
        }
      s = Ti(e, n, c, u), s !== null && (c = vn(), Pr(s, e, u, c), Jd(s, n, u));
    }
  }
  function Kd(e) {
    var n = e.alternate;
    return e === et || n !== null && n === et;
  }
  function qd(e, n) {
    hs = Ca = !0;
    var s = e.pending;
    s === null ? n.next = n : (n.next = s.next, s.next = n), e.pending = n;
  }
  function Jd(e, n, s) {
    if (s & 4194240) {
      var u = n.lanes;
      u &= e.pendingLanes, s |= u, n.lanes = s, ja(e, s);
    }
  }
  var Hu = { readContext: Jt, useCallback: Rt, useContext: Rt, useEffect: Rt, useImperativeHandle: Rt, useInsertionEffect: Rt, useLayoutEffect: Rt, useMemo: Rt, useReducer: Rt, useRef: Rt, useState: Rt, useDebugValue: Rt, useDeferredValue: Rt, useTransition: Rt, useMutableSource: Rt, useSyncExternalStore: Rt, useId: Rt, unstable_isNewReconciler: !1 }, mp = { readContext: Jt, useCallback: function(e, n) {
    return a().memoizedState = [e, n === void 0 ? null : n], e;
  }, useContext: Jt, useEffect: Y, useImperativeHandle: function(e, n, s) {
    return s = s != null ? s.concat([e]) : null, H(
      4194308,
      4,
      Ge.bind(null, n, e),
      s
    );
  }, useLayoutEffect: function(e, n) {
    return H(4194308, 4, e, n);
  }, useInsertionEffect: function(e, n) {
    return H(4, 2, e, n);
  }, useMemo: function(e, n) {
    var s = a();
    return n = n === void 0 ? null : n, e = e(), s.memoizedState = [e, n], e;
  }, useReducer: function(e, n, s) {
    var u = a();
    return n = s !== void 0 ? s(n) : n, u.memoizedState = u.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, u.queue = e, e = e.dispatch = gp.bind(null, et, e), [u.memoizedState, e];
  }, useRef: function(e) {
    var n = a();
    return e = { current: e }, n.memoizedState = e;
  }, useState: tt, useDebugValue: vt, useDeferredValue: function(e) {
    return a().memoizedState = e;
  }, useTransition: function() {
    var e = tt(!1), n = e[0];
    return e = pp.bind(null, e[1]), a().memoizedState = e, [n, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, n, s) {
    var u = et, c = a();
    if (Xe) {
      if (s === void 0)
        throw Error(i(407));
      s = s();
    } else {
      if (s = n(), Yt === null)
        throw Error(i(349));
      ur & 30 || V(u, n, s);
    }
    c.memoizedState = s;
    var m = { value: s, getSnapshot: n };
    return c.queue = m, Y(Re.bind(
      null,
      u,
      m,
      e
    ), [e]), u.flags |= 2048, nt(9, ce.bind(null, u, m, s, n), void 0, null), s;
  }, useId: function() {
    var e = a(), n = Yt.identifierPrefix;
    if (Xe) {
      var s = tn, u = Tn;
      s = (u & ~(1 << 32 - yn(u) - 1)).toString(32) + s, n = ":" + n + "R" + s, s = ka++, 0 < s && (n += "H" + s.toString(32)), n += ":";
    } else
      s = Bu++, n = ":" + n + "r" + s.toString(32) + ":";
    return e.memoizedState = n;
  }, unstable_isNewReconciler: !1 }, yp = {
    readContext: Jt,
    useCallback: Ve,
    useContext: Jt,
    useEffect: ve,
    useImperativeHandle: Ke,
    useInsertionEffect: Me,
    useLayoutEffect: it,
    useMemo: kr,
    useReducer: _,
    useRef: pn,
    useState: function() {
      return _(v);
    },
    useDebugValue: vt,
    useDeferredValue: function(e) {
      var n = o();
      return Uu(n, _t.memoizedState, e);
    },
    useTransition: function() {
      var e = _(v)[0], n = o().memoizedState;
      return [e, n];
    },
    useMutableSource: T,
    useSyncExternalStore: I,
    useId: Xd,
    unstable_isNewReconciler: !1
  }, _p = { readContext: Jt, useCallback: Ve, useContext: Jt, useEffect: ve, useImperativeHandle: Ke, useInsertionEffect: Me, useLayoutEffect: it, useMemo: kr, useReducer: w, useRef: pn, useState: function() {
    return w(v);
  }, useDebugValue: vt, useDeferredValue: function(e) {
    var n = o();
    return _t === null ? n.memoizedState = e : Uu(n, _t.memoizedState, e);
  }, useTransition: function() {
    var e = w(v)[0], n = o().memoizedState;
    return [e, n];
  }, useMutableSource: T, useSyncExternalStore: I, useId: Xd, unstable_isNewReconciler: !1 };
  function xl(e, n) {
    try {
      var s = "", u = n;
      do
        s += Fe(u), u = u.return;
      while (u);
      var c = s;
    } catch (m) {
      c = `
Error generating stack: ` + m.message + `
` + m.stack;
    }
    return { value: e, source: n, stack: c, digest: null };
  }
  function Bf(e, n, s) {
    return { value: e, source: null, stack: s != null ? s : null, digest: n != null ? n : null };
  }
  function Uf(e, n) {
    try {
      console.error(n.value);
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  var Sp = typeof WeakMap == "function" ? WeakMap : Map;
  function Zd(e, n, s) {
    s = Ln(-1, s), s.tag = 3, s.payload = { element: null };
    var u = n.value;
    return s.callback = function() {
      Ku || (Ku = !0, td = u), Uf(e, n);
    }, s;
  }
  function $d(e, n, s) {
    s = Ln(-1, s), s.tag = 3;
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = n.value;
      s.payload = function() {
        return u(c);
      }, s.callback = function() {
        Uf(e, n);
      };
    }
    var m = e.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (s.callback = function() {
      Uf(e, n), typeof u != "function" && (Ea === null ? Ea = /* @__PURE__ */ new Set([this]) : Ea.add(this));
      var C = n.stack;
      this.componentDidCatch(n.value, { componentStack: C !== null ? C : "" });
    }), s;
  }
  function bd(e, n, s) {
    var u = e.pingCache;
    if (u === null) {
      u = e.pingCache = new Sp();
      var c = /* @__PURE__ */ new Set();
      u.set(n, c);
    } else
      c = u.get(n), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(n, c));
    c.has(s) || (c.add(s), e = Ip.bind(null, e, n, s), n.then(e, e));
  }
  function eh(e) {
    do {
      var n;
      if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n)
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function th(e, n, s, u, c) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = c, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, s.flags |= 131072, s.flags &= -52805, s.tag === 1 && (s.alternate === null ? s.tag = 17 : (n = Ln(-1, 1), n.tag = 2, sr(s, n, 1))), s.lanes |= 1), e);
  }
  var wp = K.ReactCurrentOwner, Nn = !1;
  function gn(e, n, s, u) {
    n.child = e === null ? wr(n, null, s, u) : Ri(n, e.child, s, u);
  }
  function nh(e, n, s, u, c) {
    s = s.render;
    var m = n.ref;
    return nn(n, c), u = Ro(e, n, s, u, m, c), s = r(), e !== null && !Nn ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~c, Mi(e, n, c)) : (Xe && s && is(n), n.flags |= 1, gn(e, n, u, c), n.child);
  }
  function rh(e, n, s, u, c) {
    if (e === null) {
      var m = s.type;
      return typeof m == "function" && !od(m) && m.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (n.tag = 15, n.type = m, ih(e, n, m, u, c)) : (e = ef(s.type, null, u, n, n.mode, c), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (m = e.child, !(e.lanes & c)) {
      var C = m.memoizedProps;
      if (s = s.compare, s = s !== null ? s : ta, s(C, u) && e.ref === n.ref)
        return Mi(e, n, c);
    }
    return n.flags |= 1, e = Ma(m, u), e.ref = n.ref, e.return = n, n.child = e;
  }
  function ih(e, n, s, u, c) {
    if (e !== null) {
      var m = e.memoizedProps;
      if (ta(m, u) && e.ref === n.ref)
        if (Nn = !1, n.pendingProps = u = m, (e.lanes & c) !== 0)
          e.flags & 131072 && (Nn = !0);
        else
          return n.lanes = e.lanes, Mi(e, n, c);
    }
    return Hf(e, n, s, u, c);
  }
  function ah(e, n, s) {
    var u = n.pendingProps, c = u.children, m = e !== null ? e.memoizedState : null;
    if (u.mode === "hidden")
      if (!(n.mode & 1))
        n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, lt(Pl, Hn), Hn |= s;
      else {
        if (!(s & 1073741824))
          return e = m !== null ? m.baseLanes | s : s, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, lt(Pl, Hn), Hn |= e, null;
        n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = m !== null ? m.baseLanes : s, lt(Pl, Hn), Hn |= u;
      }
    else
      m !== null ? (u = m.baseLanes | s, n.memoizedState = null) : u = s, lt(Pl, Hn), Hn |= u;
    return gn(e, n, c, s), n.child;
  }
  function sh(e, n) {
    var s = n.ref;
    (e === null && s !== null || e !== null && e.ref !== s) && (n.flags |= 512, n.flags |= 2097152);
  }
  function Hf(e, n, s, u, c) {
    var m = At(s) ? nr : Et.current;
    return m = yr(n, m), nn(n, c), s = Ro(e, n, s, u, m, c), u = r(), e !== null && !Nn ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~c, Mi(e, n, c)) : (Xe && u && is(n), n.flags |= 1, gn(e, n, s, c), n.child);
  }
  function lh(e, n, s, u, c) {
    if (At(s)) {
      var m = !0;
      ns(n);
    } else
      m = !1;
    if (nn(n, c), n.stateNode === null)
      Wu(e, n), Kr(n, s, u), xo(n, s, u, c), u = !0;
    else if (e === null) {
      var C = n.stateNode, R = n.memoizedProps;
      C.props = R;
      var A = C.context, W = s.contextType;
      typeof W == "object" && W !== null ? W = Jt(W) : (W = At(s) ? nr : Et.current, W = yr(n, W));
      var ee = s.getDerivedStateFromProps, ne = typeof ee == "function" || typeof C.getSnapshotBeforeUpdate == "function";
      ne || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (R !== u || A !== W) && Fu(n, C, u, W), Xr = !1;
      var $ = n.memoizedState;
      C.state = $, os(n, u, C, c), A = n.memoizedState, R !== u || $ !== A || Gt.current || Xr ? (typeof ee == "function" && (Co(n, s, ee, u), A = n.memoizedState), (R = Xr || ko(n, s, R, u, $, A, W)) ? (ne || typeof C.UNSAFE_componentWillMount != "function" && typeof C.componentWillMount != "function" || (typeof C.componentWillMount == "function" && C.componentWillMount(), typeof C.UNSAFE_componentWillMount == "function" && C.UNSAFE_componentWillMount()), typeof C.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof C.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = u, n.memoizedState = A), C.props = u, C.state = A, C.context = W, u = R) : (typeof C.componentDidMount == "function" && (n.flags |= 4194308), u = !1);
    } else {
      C = n.stateNode, So(e, n), R = n.memoizedProps, W = n.type === n.elementType ? R : hn(n.type, R), C.props = W, ne = n.pendingProps, $ = C.context, A = s.contextType, typeof A == "object" && A !== null ? A = Jt(A) : (A = At(s) ? nr : Et.current, A = yr(n, A));
      var Se = s.getDerivedStateFromProps;
      (ee = typeof Se == "function" || typeof C.getSnapshotBeforeUpdate == "function") || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (R !== ne || $ !== A) && Fu(n, C, u, A), Xr = !1, $ = n.memoizedState, C.state = $, os(n, u, C, c);
      var xe = n.memoizedState;
      R !== ne || $ !== xe || Gt.current || Xr ? (typeof Se == "function" && (Co(n, s, Se, u), xe = n.memoizedState), (W = Xr || ko(n, s, W, u, $, xe, A) || !1) ? (ee || typeof C.UNSAFE_componentWillUpdate != "function" && typeof C.componentWillUpdate != "function" || (typeof C.componentWillUpdate == "function" && C.componentWillUpdate(u, xe, A), typeof C.UNSAFE_componentWillUpdate == "function" && C.UNSAFE_componentWillUpdate(u, xe, A)), typeof C.componentDidUpdate == "function" && (n.flags |= 4), typeof C.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof C.componentDidUpdate != "function" || R === e.memoizedProps && $ === e.memoizedState || (n.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || R === e.memoizedProps && $ === e.memoizedState || (n.flags |= 1024), n.memoizedProps = u, n.memoizedState = xe), C.props = u, C.state = xe, C.context = A, u = W) : (typeof C.componentDidUpdate != "function" || R === e.memoizedProps && $ === e.memoizedState || (n.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || R === e.memoizedProps && $ === e.memoizedState || (n.flags |= 1024), u = !1);
    }
    return jf(e, n, s, u, m, c);
  }
  function jf(e, n, s, u, c, m) {
    sh(e, n);
    var C = (n.flags & 128) !== 0;
    if (!u && !C)
      return c && pl(n, s, !1), Mi(e, n, m);
    u = n.stateNode, wp.current = n;
    var R = C && typeof s.getDerivedStateFromError != "function" ? null : u.render();
    return n.flags |= 1, e !== null && C ? (n.child = Ri(n, e.child, null, m), n.child = Ri(n, null, R, m)) : gn(e, n, R, m), n.memoizedState = u.state, c && pl(n, s, !0), n.child;
  }
  function oh(e) {
    var n = e.stateNode;
    n.pendingContext ? hl(e, n.pendingContext, n.pendingContext !== n.context) : n.context && hl(e, n.context, !1), wl(e, n.containerInfo);
  }
  function uh(e, n, s, u, c) {
    return Qr(), Bn(c), n.flags |= 256, gn(e, n, s, u), n.child;
  }
  var Wf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Vf(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function fh(e, n, s) {
    var u = n.pendingProps, c = dt.current, m = !1, C = (n.flags & 128) !== 0, R;
    if ((R = C) || (R = e !== null && e.memoizedState === null ? !1 : (c & 2) !== 0), R ? (m = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (c |= 1), lt(dt, c & 1), e === null)
      return ir(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (C = u.children, e = u.fallback, m ? (u = n.mode, m = n.child, C = { mode: "hidden", children: C }, !(u & 1) && m !== null ? (m.childLanes = 0, m.pendingProps = C) : m = tf(C, u, 0, null), e = ms(e, u, s, null), m.return = n, e.return = n, m.sibling = e, n.child = m, n.child.memoizedState = Vf(s), n.memoizedState = Wf, e) : Yf(n, C));
    if (c = e.memoizedState, c !== null && (R = c.dehydrated, R !== null))
      return Cp(e, n, C, u, R, c, s);
    if (m) {
      m = u.fallback, C = n.mode, c = e.child, R = c.sibling;
      var A = { mode: "hidden", children: u.children };
      return !(C & 1) && n.child !== c ? (u = n.child, u.childLanes = 0, u.pendingProps = A, n.deletions = null) : (u = Ma(c, A), u.subtreeFlags = c.subtreeFlags & 14680064), R !== null ? m = Ma(R, m) : (m = ms(m, C, s, null), m.flags |= 2), m.return = n, u.return = n, u.sibling = m, n.child = u, u = m, m = n.child, C = e.child.memoizedState, C = C === null ? Vf(s) : { baseLanes: C.baseLanes | s, cachePool: null, transitions: C.transitions }, m.memoizedState = C, m.childLanes = e.childLanes & ~s, n.memoizedState = Wf, u;
    }
    return m = e.child, e = m.sibling, u = Ma(m, { mode: "visible", children: u.children }), !(n.mode & 1) && (u.lanes = s), u.return = n, u.sibling = null, e !== null && (s = n.deletions, s === null ? (n.deletions = [e], n.flags |= 16) : s.push(e)), n.child = u, n.memoizedState = null, u;
  }
  function Yf(e, n) {
    return n = tf({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
  }
  function ju(e, n, s, u) {
    return u !== null && Bn(u), Ri(n, e.child, null, s), e = Yf(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
  }
  function Cp(e, n, s, u, c, m, C) {
    if (s)
      return n.flags & 256 ? (n.flags &= -257, u = Bf(Error(i(422))), ju(e, n, C, u)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (m = u.fallback, c = n.mode, u = tf({ mode: "visible", children: u.children }, c, 0, null), m = ms(m, c, C, null), m.flags |= 2, u.return = n, m.return = n, u.sibling = m, n.child = u, n.mode & 1 && Ri(n, e.child, null, C), n.child.memoizedState = Vf(C), n.memoizedState = Wf, m);
    if (!(n.mode & 1))
      return ju(e, n, C, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u)
        var R = u.dgst;
      return u = R, m = Error(i(419)), u = Bf(m, u, void 0), ju(e, n, C, u);
    }
    if (R = (C & e.childLanes) !== 0, Nn || R) {
      if (u = Yt, u !== null) {
        switch (C & -C) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (u.suspendedLanes | C) ? 0 : c, c !== 0 && c !== m.retryLane && (m.retryLane = c, Un(e, c), Pr(u, e, c, -1));
      }
      return ld(), u = Bf(Error(i(421))), ju(e, n, C, u);
    }
    return c.data === "$?" ? (n.flags |= 128, n.child = e.child, n = zp.bind(null, e), c._reactRetry = n, null) : (e = m.treeContext, qt = Hr(c.nextSibling), Kt = n, Xe = !0, ge = null, e !== null && (Ot[en++] = Tn, Ot[en++] = tn, Ot[en++] = ht, Tn = e.id, tn = e.overflow, ht = n), n = Yf(n, u.children), n.flags |= 4096, n);
  }
  function dh(e, n, s) {
    e.lanes |= n;
    var u = e.alternate;
    u !== null && (u.lanes |= n), ar(e.return, n, s);
  }
  function Qf(e, n, s, u, c) {
    var m = e.memoizedState;
    m === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: u, tail: s, tailMode: c } : (m.isBackwards = n, m.rendering = null, m.renderingStartTime = 0, m.last = u, m.tail = s, m.tailMode = c);
  }
  function hh(e, n, s) {
    var u = n.pendingProps, c = u.revealOrder, m = u.tail;
    if (gn(e, n, u.children, s), u = dt.current, u & 2)
      u = u & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && e.flags & 128)
        e:
          for (e = n.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && dh(e, s, n);
            else if (e.tag === 19)
              dh(e, s, n);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === n)
              break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === n)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
      u &= 1;
    }
    if (lt(dt, u), !(n.mode & 1))
      n.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (s = n.child, c = null; s !== null; )
            e = s.alternate, e !== null && Cl(e) === null && (c = s), s = s.sibling;
          s = c, s === null ? (c = n.child, n.child = null) : (c = s.sibling, s.sibling = null), Qf(n, !1, c, s, m);
          break;
        case "backwards":
          for (s = null, c = n.child, n.child = null; c !== null; ) {
            if (e = c.alternate, e !== null && Cl(e) === null) {
              n.child = c;
              break;
            }
            e = c.sibling, c.sibling = s, s = c, c = e;
          }
          Qf(n, !0, s, null, m);
          break;
        case "together":
          Qf(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function Wu(e, n) {
    !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
  }
  function Mi(e, n, s) {
    if (e !== null && (n.dependencies = e.dependencies), cs |= n.lanes, !(s & n.childLanes))
      return null;
    if (e !== null && n.child !== e.child)
      throw Error(i(153));
    if (n.child !== null) {
      for (e = n.child, s = Ma(e, e.pendingProps), n.child = s, s.return = n; e.sibling !== null; )
        e = e.sibling, s = s.sibling = Ma(e, e.pendingProps), s.return = n;
      s.sibling = null;
    }
    return n.child;
  }
  function kp(e, n, s) {
    switch (n.tag) {
      case 3:
        oh(n), Qr();
        break;
      case 5:
        Po(n);
        break;
      case 1:
        At(n.type) && ns(n);
        break;
      case 4:
        wl(n, n.stateNode.containerInfo);
        break;
      case 10:
        var u = n.type._context, c = n.memoizedProps.value;
        lt(xi, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = n.memoizedState, u !== null)
          return u.dehydrated !== null ? (lt(dt, dt.current & 1), n.flags |= 128, null) : s & n.child.childLanes ? fh(e, n, s) : (lt(dt, dt.current & 1), e = Mi(e, n, s), e !== null ? e.sibling : null);
        lt(dt, dt.current & 1);
        break;
      case 19:
        if (u = (s & n.childLanes) !== 0, e.flags & 128) {
          if (u)
            return hh(e, n, s);
          n.flags |= 128;
        }
        if (c = n.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), lt(dt, dt.current), u)
          break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, ah(e, n, s);
    }
    return Mi(e, n, s);
  }
  var ch, Xf, ph, gh;
  ch = function(e, n) {
    for (var s = n.child; s !== null; ) {
      if (s.tag === 5 || s.tag === 6)
        e.appendChild(s.stateNode);
      else if (s.tag !== 4 && s.child !== null) {
        s.child.return = s, s = s.child;
        continue;
      }
      if (s === n)
        break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === n)
          return;
        s = s.return;
      }
      s.sibling.return = s.return, s = s.sibling;
    }
  }, Xf = function() {
  }, ph = function(e, n, s, u) {
    var c = e.memoizedProps;
    if (c !== u) {
      e = n.stateNode, Cr(lr.current);
      var m = null;
      switch (s) {
        case "input":
          c = un(e, c), u = un(e, u), m = [];
          break;
        case "select":
          c = M({}, c, { value: void 0 }), u = M({}, u, { value: void 0 }), m = [];
          break;
        case "textarea":
          c = Gl(e, c), u = Gl(e, u), m = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (e.onclick = wi);
      }
      Bl(s, u);
      var C;
      s = null;
      for (W in c)
        if (!u.hasOwnProperty(W) && c.hasOwnProperty(W) && c[W] != null)
          if (W === "style") {
            var R = c[W];
            for (C in R)
              R.hasOwnProperty(C) && (s || (s = {}), s[C] = "");
          } else
            W !== "dangerouslySetInnerHTML" && W !== "children" && W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && W !== "autoFocus" && (f.hasOwnProperty(W) ? m || (m = []) : (m = m || []).push(W, null));
      for (W in u) {
        var A = u[W];
        if (R = c != null ? c[W] : void 0, u.hasOwnProperty(W) && A !== R && (A != null || R != null))
          if (W === "style")
            if (R) {
              for (C in R)
                !R.hasOwnProperty(C) || A && A.hasOwnProperty(C) || (s || (s = {}), s[C] = "");
              for (C in A)
                A.hasOwnProperty(C) && R[C] !== A[C] && (s || (s = {}), s[C] = A[C]);
            } else
              s || (m || (m = []), m.push(
                W,
                s
              )), s = A;
          else
            W === "dangerouslySetInnerHTML" ? (A = A ? A.__html : void 0, R = R ? R.__html : void 0, A != null && R !== A && (m = m || []).push(W, A)) : W === "children" ? typeof A != "string" && typeof A != "number" || (m = m || []).push(W, "" + A) : W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && (f.hasOwnProperty(W) ? (A != null && W === "onScroll" && st("scroll", e), m || R === A || (m = [])) : (m = m || []).push(W, A));
      }
      s && (m = m || []).push("style", s);
      var W = m;
      (n.updateQueue = W) && (n.flags |= 4);
    }
  }, gh = function(e, n, s, u) {
    s !== u && (n.flags |= 4);
  };
  function Mo(e, n) {
    if (!Xe)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var s = null; n !== null; )
            n.alternate !== null && (s = n), n = n.sibling;
          s === null ? e.tail = null : s.sibling = null;
          break;
        case "collapsed":
          s = e.tail;
          for (var u = null; s !== null; )
            s.alternate !== null && (u = s), s = s.sibling;
          u === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : u.sibling = null;
      }
  }
  function an(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, s = 0, u = 0;
    if (n)
      for (var c = e.child; c !== null; )
        s |= c.lanes | c.childLanes, u |= c.subtreeFlags & 14680064, u |= c.flags & 14680064, c.return = e, c = c.sibling;
    else
      for (c = e.child; c !== null; )
        s |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = e, c = c.sibling;
    return e.subtreeFlags |= u, e.childLanes = s, n;
  }
  function xp(e, n, s) {
    var u = n.pendingProps;
    switch (as(n), n.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return an(n), null;
      case 1:
        return At(n.type) && ma(), an(n), null;
      case 3:
        return u = n.stateNode, Jr(), be(Gt), be(Et), ds(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (e === null || e.child === null) && (Yr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, ge !== null && (id(ge), ge = null))), Xf(e, n), an(n), null;
      case 5:
        wa(n);
        var c = Cr(qr.current);
        if (s = n.type, e !== null && n.stateNode != null)
          ph(e, n, s, u, c), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!u) {
            if (n.stateNode === null)
              throw Error(i(166));
            return an(n), null;
          }
          if (e = Cr(lr.current), Yr(n)) {
            u = n.stateNode, s = n.type;
            var m = n.memoizedProps;
            switch (u[Dn] = n, u[ts] = m, e = (n.mode & 1) !== 0, s) {
              case "dialog":
                st("cancel", u), st("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                st("load", u);
                break;
              case "video":
              case "audio":
                for (c = 0; c < oa.length; c++)
                  st(oa[c], u);
                break;
              case "source":
                st("error", u);
                break;
              case "img":
              case "image":
              case "link":
                st(
                  "error",
                  u
                ), st("load", u);
                break;
              case "details":
                st("toggle", u);
                break;
              case "input":
                zi(u, m), st("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!m.multiple }, st("invalid", u);
                break;
              case "textarea":
                Gi(u, m), st("invalid", u);
            }
            Bl(s, m), c = null;
            for (var C in m)
              if (m.hasOwnProperty(C)) {
                var R = m[C];
                C === "children" ? typeof R == "string" ? u.textContent !== R && (m.suppressHydrationWarning !== !0 && Si(u.textContent, R, e), c = ["children", R]) : typeof R == "number" && u.textContent !== "" + R && (m.suppressHydrationWarning !== !0 && Si(
                  u.textContent,
                  R,
                  e
                ), c = ["children", "" + R]) : f.hasOwnProperty(C) && R != null && C === "onScroll" && st("scroll", u);
              }
            switch (s) {
              case "input":
                Es(u), Zo(u, m, !0);
                break;
              case "textarea":
                Es(u), bo(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof m.onClick == "function" && (u.onclick = wi);
            }
            u = c, n.updateQueue = u, u !== null && (n.flags |= 4);
          } else {
            C = c.nodeType === 9 ? c : c.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = eu(s)), e === "http://www.w3.org/1999/xhtml" ? s === "script" ? (e = C.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof u.is == "string" ? e = C.createElement(s, { is: u.is }) : (e = C.createElement(s), s === "select" && (C = e, u.multiple ? C.multiple = !0 : u.size && (C.size = u.size))) : e = C.createElementNS(e, s), e[Dn] = n, e[ts] = u, ch(e, n, !1, !1), n.stateNode = e;
            e: {
              switch (C = Ul(s, u), s) {
                case "dialog":
                  st("cancel", e), st("close", e), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  st("load", e), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < oa.length; c++)
                    st(oa[c], e);
                  c = u;
                  break;
                case "source":
                  st("error", e), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  st(
                    "error",
                    e
                  ), st("load", e), c = u;
                  break;
                case "details":
                  st("toggle", e), c = u;
                  break;
                case "input":
                  zi(e, u), c = un(e, u), st("invalid", e);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!u.multiple }, c = M({}, u, { value: void 0 }), st("invalid", e);
                  break;
                case "textarea":
                  Gi(e, u), c = Gl(e, u), st("invalid", e);
                  break;
                default:
                  c = u;
              }
              Bl(s, c), R = c;
              for (m in R)
                if (R.hasOwnProperty(m)) {
                  var A = R[m];
                  m === "style" ? ru(e, A) : m === "dangerouslySetInnerHTML" ? (A = A ? A.__html : void 0, A != null && tu(e, A)) : m === "children" ? typeof A == "string" ? (s !== "textarea" || A !== "") && Fa(e, A) : typeof A == "number" && Fa(e, "" + A) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (f.hasOwnProperty(m) ? A != null && m === "onScroll" && st("scroll", e) : A != null && Q(e, m, A, C));
                }
              switch (s) {
                case "input":
                  Es(e), Zo(e, u, !1);
                  break;
                case "textarea":
                  Es(e), bo(e);
                  break;
                case "option":
                  u.value != null && e.setAttribute("value", "" + je(u.value));
                  break;
                case "select":
                  e.multiple = !!u.multiple, m = u.value, m != null ? Fi(e, !!u.multiple, m, !1) : u.defaultValue != null && Fi(
                    e,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (e.onclick = wi);
              }
              switch (s) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (n.flags |= 4);
          }
          n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
        }
        return an(n), null;
      case 6:
        if (e && n.stateNode != null)
          gh(e, n, e.memoizedProps, u);
        else {
          if (typeof u != "string" && n.stateNode === null)
            throw Error(i(166));
          if (s = Cr(qr.current), Cr(lr.current), Yr(n)) {
            if (u = n.stateNode, s = n.memoizedProps, u[Dn] = n, (m = u.nodeValue !== s) && (e = Kt, e !== null))
              switch (e.tag) {
                case 3:
                  Si(u.nodeValue, s, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && Si(u.nodeValue, s, (e.mode & 1) !== 0);
              }
            m && (n.flags |= 4);
          } else
            u = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(u), u[Dn] = n, n.stateNode = u;
        }
        return an(n), null;
      case 13:
        if (be(dt), u = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Xe && qt !== null && n.mode & 1 && !(n.flags & 128))
            ml(), Qr(), n.flags |= 98560, m = !1;
          else if (m = Yr(n), u !== null && u.dehydrated !== null) {
            if (e === null) {
              if (!m)
                throw Error(i(318));
              if (m = n.memoizedState, m = m !== null ? m.dehydrated : null, !m)
                throw Error(i(317));
              m[Dn] = n;
            } else
              Qr(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            an(n), m = !1;
          } else
            ge !== null && (id(ge), ge = null), m = !0;
          if (!m)
            return n.flags & 65536 ? n : null;
        }
        return n.flags & 128 ? (n.lanes = s, n) : (u = u !== null, u !== (e !== null && e.memoizedState !== null) && u && (n.child.flags |= 8192, n.mode & 1 && (e === null || dt.current & 1 ? Bt === 0 && (Bt = 3) : ld())), n.updateQueue !== null && (n.flags |= 4), an(n), null);
      case 4:
        return Jr(), Xf(e, n), e === null && fa(n.stateNode.containerInfo), an(n), null;
      case 10:
        return Vt(n.type._context), an(n), null;
      case 17:
        return At(n.type) && ma(), an(n), null;
      case 19:
        if (be(dt), m = n.memoizedState, m === null)
          return an(n), null;
        if (u = (n.flags & 128) !== 0, C = m.rendering, C === null)
          if (u)
            Mo(m, !1);
          else {
            if (Bt !== 0 || e !== null && e.flags & 128)
              for (e = n.child; e !== null; ) {
                if (C = Cl(e), C !== null) {
                  for (n.flags |= 128, Mo(m, !1), u = C.updateQueue, u !== null && (n.updateQueue = u, n.flags |= 4), n.subtreeFlags = 0, u = s, s = n.child; s !== null; )
                    m = s, e = u, m.flags &= 14680066, C = m.alternate, C === null ? (m.childLanes = 0, m.lanes = e, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = C.childLanes, m.lanes = C.lanes, m.child = C.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = C.memoizedProps, m.memoizedState = C.memoizedState, m.updateQueue = C.updateQueue, m.type = C.type, e = C.dependencies, m.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), s = s.sibling;
                  return lt(dt, dt.current & 1 | 2), n.child;
                }
                e = e.sibling;
              }
            m.tail !== null && Be() > Tl && (n.flags |= 128, u = !0, Mo(m, !1), n.lanes = 4194304);
          }
        else {
          if (!u)
            if (e = Cl(C), e !== null) {
              if (n.flags |= 128, u = !0, s = e.updateQueue, s !== null && (n.updateQueue = s, n.flags |= 4), Mo(m, !0), m.tail === null && m.tailMode === "hidden" && !C.alternate && !Xe)
                return an(n), null;
            } else
              2 * Be() - m.renderingStartTime > Tl && s !== 1073741824 && (n.flags |= 128, u = !0, Mo(m, !1), n.lanes = 4194304);
          m.isBackwards ? (C.sibling = n.child, n.child = C) : (s = m.last, s !== null ? s.sibling = C : n.child = C, m.last = C);
        }
        return m.tail !== null ? (n = m.tail, m.rendering = n, m.tail = n.sibling, m.renderingStartTime = Be(), n.sibling = null, s = dt.current, lt(dt, u ? s & 1 | 2 : s & 1), n) : (an(n), null);
      case 22:
      case 23:
        return sd(), u = n.memoizedState !== null, e !== null && e.memoizedState !== null !== u && (n.flags |= 8192), u && n.mode & 1 ? Hn & 1073741824 && (an(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : an(n), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, n.tag));
  }
  function Ep(e, n) {
    switch (as(n), n.tag) {
      case 1:
        return At(n.type) && ma(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Jr(), be(Gt), be(Et), ds(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
      case 5:
        return wa(n), null;
      case 13:
        if (be(dt), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(i(340));
          Qr();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return be(dt), null;
      case 4:
        return Jr(), null;
      case 10:
        return Vt(n.type._context), null;
      case 22:
      case 23:
        return sd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Vu = !1, sn = !1, Pp = typeof WeakSet == "function" ? WeakSet : Set, Ce = null;
  function El(e, n) {
    var s = e.ref;
    if (s !== null)
      if (typeof s == "function")
        try {
          s(null);
        } catch (u) {
          xt(e, n, u);
        }
      else
        s.current = null;
  }
  function Kf(e, n, s) {
    try {
      s();
    } catch (u) {
      xt(e, n, u);
    }
  }
  var vh = !1;
  function Tp(e, n) {
    if (ll = _n, e = ao(), ra(e)) {
      if ("selectionStart" in e)
        var s = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          s = (s = e.ownerDocument) && s.defaultView || window;
          var u = s.getSelection && s.getSelection();
          if (u && u.rangeCount !== 0) {
            s = u.anchorNode;
            var c = u.anchorOffset, m = u.focusNode;
            u = u.focusOffset;
            try {
              s.nodeType, m.nodeType;
            } catch (le) {
              s = null;
              break e;
            }
            var C = 0, R = -1, A = -1, W = 0, ee = 0, ne = e, $ = null;
            t:
              for (; ; ) {
                for (var Se; ne !== s || c !== 0 && ne.nodeType !== 3 || (R = C + c), ne !== m || u !== 0 && ne.nodeType !== 3 || (A = C + u), ne.nodeType === 3 && (C += ne.nodeValue.length), (Se = ne.firstChild) !== null; )
                  $ = ne, ne = Se;
                for (; ; ) {
                  if (ne === e)
                    break t;
                  if ($ === s && ++W === c && (R = C), $ === m && ++ee === u && (A = C), (Se = ne.nextSibling) !== null)
                    break;
                  ne = $, $ = ne.parentNode;
                }
                ne = Se;
              }
            s = R === -1 || A === -1 ? null : { start: R, end: A };
          } else
            s = null;
        }
      s = s || { start: 0, end: 0 };
    } else
      s = null;
    for (Ci = { focusedElem: e, selectionRange: s }, _n = !1, Ce = n; Ce !== null; )
      if (n = Ce, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = n, Ce = e;
      else
        for (; Ce !== null; ) {
          n = Ce;
          try {
            var xe = n.alternate;
            if (n.flags & 1024)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (xe !== null) {
                    var Ee = xe.memoizedProps, Mt = xe.memoizedState, U = n.stateNode, D = U.getSnapshotBeforeUpdate(n.elementType === n.type ? Ee : hn(n.type, Ee), Mt);
                    U.__reactInternalSnapshotBeforeUpdate = D;
                  }
                  break;
                case 3:
                  var j = n.stateNode.containerInfo;
                  j.nodeType === 1 ? j.textContent = "" : j.nodeType === 9 && j.documentElement && j.removeChild(j.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(i(163));
              }
          } catch (le) {
            xt(n, n.return, le);
          }
          if (e = n.sibling, e !== null) {
            e.return = n.return, Ce = e;
            break;
          }
          Ce = n.return;
        }
    return xe = vh, vh = !1, xe;
  }
  function Lo(e, n, s) {
    var u = n.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & e) === e) {
          var m = c.destroy;
          c.destroy = void 0, m !== void 0 && Kf(n, s, m);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function Yu(e, n) {
    if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
      var s = n = n.next;
      do {
        if ((s.tag & e) === e) {
          var u = s.create;
          s.destroy = u();
        }
        s = s.next;
      } while (s !== n);
    }
  }
  function qf(e) {
    var n = e.ref;
    if (n !== null) {
      var s = e.stateNode;
      switch (e.tag) {
        case 5:
          e = s;
          break;
        default:
          e = s;
      }
      typeof n == "function" ? n(e) : n.current = e;
    }
  }
  function mh(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, mh(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[Dn], delete n[ts], delete n[fl], delete n[Iu], delete n[zu])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function yh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function _h(e) {
    e:
      for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || yh(e.return))
            return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4)
            continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2))
          return e.stateNode;
      }
  }
  function Jf(e, n, s) {
    var u = e.tag;
    if (u === 5 || u === 6)
      e = e.stateNode, n ? s.nodeType === 8 ? s.parentNode.insertBefore(e, n) : s.insertBefore(e, n) : (s.nodeType === 8 ? (n = s.parentNode, n.insertBefore(e, s)) : (n = s, n.appendChild(e)), s = s._reactRootContainer, s != null || n.onclick !== null || (n.onclick = wi));
    else if (u !== 4 && (e = e.child, e !== null))
      for (Jf(e, n, s), e = e.sibling; e !== null; )
        Jf(e, n, s), e = e.sibling;
  }
  function Zf(e, n, s) {
    var u = e.tag;
    if (u === 5 || u === 6)
      e = e.stateNode, n ? s.insertBefore(e, n) : s.appendChild(e);
    else if (u !== 4 && (e = e.child, e !== null))
      for (Zf(e, n, s), e = e.sibling; e !== null; )
        Zf(e, n, s), e = e.sibling;
  }
  var Zt = null, xr = !1;
  function xa(e, n, s) {
    for (s = s.child; s !== null; )
      Sh(e, n, s), s = s.sibling;
  }
  function Sh(e, n, s) {
    if (fn && typeof fn.onCommitFiberUnmount == "function")
      try {
        fn.onCommitFiberUnmount(Ft, s);
      } catch (R) {
      }
    switch (s.tag) {
      case 5:
        sn || El(s, n);
      case 6:
        var u = Zt, c = xr;
        Zt = null, xa(e, n, s), Zt = u, xr = c, Zt !== null && (xr ? (e = Zt, s = s.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(s) : e.removeChild(s)) : Zt.removeChild(s.stateNode));
        break;
      case 18:
        Zt !== null && (xr ? (e = Zt, s = s.stateNode, e.nodeType === 8 ? ul(e.parentNode, s) : e.nodeType === 1 && ul(e, s), qn(e)) : ul(Zt, s.stateNode));
        break;
      case 4:
        u = Zt, c = xr, Zt = s.stateNode.containerInfo, xr = !0, xa(e, n, s), Zt = u, xr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!sn && (u = s.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var m = c, C = m.destroy;
            m = m.tag, C !== void 0 && (m & 2 || m & 4) && Kf(s, n, C), c = c.next;
          } while (c !== u);
        }
        xa(e, n, s);
        break;
      case 1:
        if (!sn && (El(s, n), u = s.stateNode, typeof u.componentWillUnmount == "function"))
          try {
            u.props = s.memoizedProps, u.state = s.memoizedState, u.componentWillUnmount();
          } catch (R) {
            xt(s, n, R);
          }
        xa(e, n, s);
        break;
      case 21:
        xa(e, n, s);
        break;
      case 22:
        s.mode & 1 ? (sn = (u = sn) || s.memoizedState !== null, xa(e, n, s), sn = u) : xa(e, n, s);
        break;
      default:
        xa(e, n, s);
    }
  }
  function wh(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var s = e.stateNode;
      s === null && (s = e.stateNode = new Pp()), n.forEach(function(u) {
        var c = Dp.bind(null, e, u);
        s.has(u) || (s.add(u), u.then(c, c));
      });
    }
  }
  function Er(e, n) {
    var s = n.deletions;
    if (s !== null)
      for (var u = 0; u < s.length; u++) {
        var c = s[u];
        try {
          var m = e, C = n, R = C;
          e:
            for (; R !== null; ) {
              switch (R.tag) {
                case 5:
                  Zt = R.stateNode, xr = !1;
                  break e;
                case 3:
                  Zt = R.stateNode.containerInfo, xr = !0;
                  break e;
                case 4:
                  Zt = R.stateNode.containerInfo, xr = !0;
                  break e;
              }
              R = R.return;
            }
          if (Zt === null)
            throw Error(i(160));
          Sh(m, C, c), Zt = null, xr = !1;
          var A = c.alternate;
          A !== null && (A.return = null), c.return = null;
        } catch (W) {
          xt(c, n, W);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; )
        Ch(n, e), n = n.sibling;
  }
  function Ch(e, n) {
    var s = e.alternate, u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Er(n, e), Zr(e), u & 4) {
          try {
            Lo(3, e, e.return), Yu(3, e);
          } catch (Ee) {
            xt(e, e.return, Ee);
          }
          try {
            Lo(5, e, e.return);
          } catch (Ee) {
            xt(e, e.return, Ee);
          }
        }
        break;
      case 1:
        Er(n, e), Zr(e), u & 512 && s !== null && El(s, s.return);
        break;
      case 5:
        if (Er(n, e), Zr(e), u & 512 && s !== null && El(s, s.return), e.flags & 32) {
          var c = e.stateNode;
          try {
            Fa(c, "");
          } catch (Ee) {
            xt(e, e.return, Ee);
          }
        }
        if (u & 4 && (c = e.stateNode, c != null)) {
          var m = e.memoizedProps, C = s !== null ? s.memoizedProps : m, R = e.type, A = e.updateQueue;
          if (e.updateQueue = null, A !== null)
            try {
              R === "input" && m.type === "radio" && m.name != null && mn(c, m), Ul(R, C);
              var W = Ul(R, m);
              for (C = 0; C < A.length; C += 2) {
                var ee = A[C], ne = A[C + 1];
                ee === "style" ? ru(c, ne) : ee === "dangerouslySetInnerHTML" ? tu(c, ne) : ee === "children" ? Fa(c, ne) : Q(c, ee, ne, W);
              }
              switch (R) {
                case "input":
                  Fl(c, m);
                  break;
                case "textarea":
                  $o(c, m);
                  break;
                case "select":
                  var $ = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!m.multiple;
                  var Se = m.value;
                  Se != null ? Fi(c, !!m.multiple, Se, !1) : $ !== !!m.multiple && (m.defaultValue != null ? Fi(
                    c,
                    !!m.multiple,
                    m.defaultValue,
                    !0
                  ) : Fi(c, !!m.multiple, m.multiple ? [] : "", !1));
              }
              c[ts] = m;
            } catch (Ee) {
              xt(e, e.return, Ee);
            }
        }
        break;
      case 6:
        if (Er(n, e), Zr(e), u & 4) {
          if (e.stateNode === null)
            throw Error(i(162));
          c = e.stateNode, m = e.memoizedProps;
          try {
            c.nodeValue = m;
          } catch (Ee) {
            xt(e, e.return, Ee);
          }
        }
        break;
      case 3:
        if (Er(n, e), Zr(e), u & 4 && s !== null && s.memoizedState.isDehydrated)
          try {
            qn(n.containerInfo);
          } catch (Ee) {
            xt(e, e.return, Ee);
          }
        break;
      case 4:
        Er(n, e), Zr(e);
        break;
      case 13:
        Er(n, e), Zr(e), c = e.child, c.flags & 8192 && (m = c.memoizedState !== null, c.stateNode.isHidden = m, !m || c.alternate !== null && c.alternate.memoizedState !== null || (ed = Be())), u & 4 && wh(e);
        break;
      case 22:
        if (ee = s !== null && s.memoizedState !== null, e.mode & 1 ? (sn = (W = sn) || ee, Er(n, e), sn = W) : Er(n, e), Zr(e), u & 8192) {
          if (W = e.memoizedState !== null, (e.stateNode.isHidden = W) && !ee && e.mode & 1)
            for (Ce = e, ee = e.child; ee !== null; ) {
              for (ne = Ce = ee; Ce !== null; ) {
                switch ($ = Ce, Se = $.child, $.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Lo(4, $, $.return);
                    break;
                  case 1:
                    El($, $.return);
                    var xe = $.stateNode;
                    if (typeof xe.componentWillUnmount == "function") {
                      u = $, s = $.return;
                      try {
                        n = u, xe.props = n.memoizedProps, xe.state = n.memoizedState, xe.componentWillUnmount();
                      } catch (Ee) {
                        xt(u, s, Ee);
                      }
                    }
                    break;
                  case 5:
                    El($, $.return);
                    break;
                  case 22:
                    if ($.memoizedState !== null) {
                      Eh(ne);
                      continue;
                    }
                }
                Se !== null ? (Se.return = $, Ce = Se) : Eh(ne);
              }
              ee = ee.sibling;
            }
          e:
            for (ee = null, ne = e; ; ) {
              if (ne.tag === 5) {
                if (ee === null) {
                  ee = ne;
                  try {
                    c = ne.stateNode, W ? (m = c.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (R = ne.stateNode, A = ne.memoizedProps.style, C = A != null && A.hasOwnProperty("display") ? A.display : null, R.style.display = nu("display", C));
                  } catch (Ee) {
                    xt(e, e.return, Ee);
                  }
                }
              } else if (ne.tag === 6) {
                if (ee === null)
                  try {
                    ne.stateNode.nodeValue = W ? "" : ne.memoizedProps;
                  } catch (Ee) {
                    xt(e, e.return, Ee);
                  }
              } else if ((ne.tag !== 22 && ne.tag !== 23 || ne.memoizedState === null || ne === e) && ne.child !== null) {
                ne.child.return = ne, ne = ne.child;
                continue;
              }
              if (ne === e)
                break e;
              for (; ne.sibling === null; ) {
                if (ne.return === null || ne.return === e)
                  break e;
                ee === ne && (ee = null), ne = ne.return;
              }
              ee === ne && (ee = null), ne.sibling.return = ne.return, ne = ne.sibling;
            }
        }
        break;
      case 19:
        Er(n, e), Zr(e), u & 4 && wh(e);
        break;
      case 21:
        break;
      default:
        Er(
          n,
          e
        ), Zr(e);
    }
  }
  function Zr(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var s = e.return; s !== null; ) {
            if (yh(s)) {
              var u = s;
              break e;
            }
            s = s.return;
          }
          throw Error(i(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (Fa(c, ""), u.flags &= -33);
            var m = _h(e);
            Zf(e, m, c);
            break;
          case 3:
          case 4:
            var C = u.stateNode.containerInfo, R = _h(e);
            Jf(e, R, C);
            break;
          default:
            throw Error(i(161));
        }
      } catch (A) {
        xt(e, e.return, A);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Rp(e, n, s) {
    Ce = e, kh(e);
  }
  function kh(e, n, s) {
    for (var u = (e.mode & 1) !== 0; Ce !== null; ) {
      var c = Ce, m = c.child;
      if (c.tag === 22 && u) {
        var C = c.memoizedState !== null || Vu;
        if (!C) {
          var R = c.alternate, A = R !== null && R.memoizedState !== null || sn;
          R = Vu;
          var W = sn;
          if (Vu = C, (sn = A) && !W)
            for (Ce = c; Ce !== null; )
              C = Ce, A = C.child, C.tag === 22 && C.memoizedState !== null ? Ph(c) : A !== null ? (A.return = C, Ce = A) : Ph(c);
          for (; m !== null; )
            Ce = m, kh(m), m = m.sibling;
          Ce = c, Vu = R, sn = W;
        }
        xh(e);
      } else
        c.subtreeFlags & 8772 && m !== null ? (m.return = c, Ce = m) : xh(e);
    }
  }
  function xh(e) {
    for (; Ce !== null; ) {
      var n = Ce;
      if (n.flags & 8772) {
        var s = n.alternate;
        try {
          if (n.flags & 8772)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                sn || Yu(5, n);
                break;
              case 1:
                var u = n.stateNode;
                if (n.flags & 4 && !sn)
                  if (s === null)
                    u.componentDidMount();
                  else {
                    var c = n.elementType === n.type ? s.memoizedProps : hn(n.type, s.memoizedProps);
                    u.componentDidUpdate(c, s.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
                  }
                var m = n.updateQueue;
                m !== null && _a(n, m, u);
                break;
              case 3:
                var C = n.updateQueue;
                if (C !== null) {
                  if (s = null, n.child !== null)
                    switch (n.child.tag) {
                      case 5:
                        s = n.child.stateNode;
                        break;
                      case 1:
                        s = n.child.stateNode;
                    }
                  _a(n, C, s);
                }
                break;
              case 5:
                var R = n.stateNode;
                if (s === null && n.flags & 4) {
                  s = R;
                  var A = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      A.autoFocus && s.focus();
                      break;
                    case "img":
                      A.src && (s.src = A.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (n.memoizedState === null) {
                  var W = n.alternate;
                  if (W !== null) {
                    var ee = W.memoizedState;
                    if (ee !== null) {
                      var ne = ee.dehydrated;
                      ne !== null && qn(ne);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(i(163));
            }
          sn || n.flags & 512 && qf(n);
        } catch ($) {
          xt(n, n.return, $);
        }
      }
      if (n === e) {
        Ce = null;
        break;
      }
      if (s = n.sibling, s !== null) {
        s.return = n.return, Ce = s;
        break;
      }
      Ce = n.return;
    }
  }
  function Eh(e) {
    for (; Ce !== null; ) {
      var n = Ce;
      if (n === e) {
        Ce = null;
        break;
      }
      var s = n.sibling;
      if (s !== null) {
        s.return = n.return, Ce = s;
        break;
      }
      Ce = n.return;
    }
  }
  function Ph(e) {
    for (; Ce !== null; ) {
      var n = Ce;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var s = n.return;
            try {
              Yu(4, n);
            } catch (A) {
              xt(n, s, A);
            }
            break;
          case 1:
            var u = n.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = n.return;
              try {
                u.componentDidMount();
              } catch (A) {
                xt(n, c, A);
              }
            }
            var m = n.return;
            try {
              qf(n);
            } catch (A) {
              xt(n, m, A);
            }
            break;
          case 5:
            var C = n.return;
            try {
              qf(n);
            } catch (A) {
              xt(n, C, A);
            }
        }
      } catch (A) {
        xt(n, n.return, A);
      }
      if (n === e) {
        Ce = null;
        break;
      }
      var R = n.sibling;
      if (R !== null) {
        R.return = n.return, Ce = R;
        break;
      }
      Ce = n.return;
    }
  }
  var Mp = Math.ceil, Qu = K.ReactCurrentDispatcher, $f = K.ReactCurrentOwner, fr = K.ReactCurrentBatchConfig, qe = 0, Yt = null, It = null, $t = 0, Hn = 0, Pl = mr(0), Bt = 0, No = null, cs = 0, Xu = 0, bf = 0, Ao = null, An = null, ed = 0, Tl = 1 / 0, Li = null, Ku = !1, td = null, Ea = null, qu = !1, Pa = null, Ju = 0, Oo = 0, nd = null, Zu = -1, $u = 0;
  function vn() {
    return qe & 6 ? Be() : Zu !== -1 ? Zu : Zu = Be();
  }
  function Ta(e) {
    return e.mode & 1 ? qe & 2 && $t !== 0 ? $t & -$t : ls.transition !== null ? ($u === 0 && ($u = Yi()), $u) : (e = Qe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : dn(e.type)), e) : 1;
  }
  function Pr(e, n, s, u) {
    if (50 < Oo)
      throw Oo = 0, nd = null, Error(i(185));
    Nr(e, s, u), (!(qe & 2) || e !== Yt) && (e === Yt && (!(qe & 2) && (Xu |= s), Bt === 4 && Ra(e, $t)), On(e, u), s === 1 && qe === 0 && !(n.mode & 1) && (Tl = Be() + 500, gl && rr()));
  }
  function On(e, n) {
    var s = e.callbackNode;
    Df(e, n);
    var u = $e(e, e === Yt ? $t : 0);
    if (u === 0)
      s !== null && zs(s), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = u & -u, e.callbackPriority !== n) {
      if (s != null && zs(s), n === 1)
        e.tag === 0 ? _o(Rh.bind(null, e)) : rs(Rh.bind(null, e)), Gf(function() {
          !(qe & 6) && rr();
        }), s = null;
      else {
        switch (cr(u)) {
          case 1:
            s = Yn;
            break;
          case 4:
            s = zt;
            break;
          case 16:
            s = Dt;
            break;
          case 536870912:
            s = ri;
            break;
          default:
            s = Dt;
        }
        s = Dh(s, Th.bind(null, e));
      }
      e.callbackPriority = n, e.callbackNode = s;
    }
  }
  function Th(e, n) {
    if (Zu = -1, $u = 0, qe & 6)
      throw Error(i(327));
    var s = e.callbackNode;
    if (Rl() && e.callbackNode !== s)
      return null;
    var u = $e(e, e === Yt ? $t : 0);
    if (u === 0)
      return null;
    if (u & 30 || u & e.expiredLanes || n)
      n = bu(e, u);
    else {
      n = u;
      var c = qe;
      qe |= 2;
      var m = Lh();
      (Yt !== e || $t !== n) && (Li = null, Tl = Be() + 500, gs(e, n));
      do
        try {
          Ap();
          break;
        } catch (R) {
          Mh(e, R);
        }
      while (1);
      Pi(), Qu.current = m, qe = c, It !== null ? n = 0 : (Yt = null, $t = 0, n = Bt);
    }
    if (n !== 0) {
      if (n === 2 && (c = Xl(e), c !== 0 && (u = c, n = rd(e, c))), n === 1)
        throw s = No, gs(e, 0), Ra(e, u), On(e, Be()), s;
      if (n === 6)
        Ra(e, u);
      else {
        if (c = e.current.alternate, !(u & 30) && !Lp(c) && (n = bu(e, u), n === 2 && (m = Xl(e), m !== 0 && (u = m, n = rd(e, m))), n === 1))
          throw s = No, gs(e, 0), Ra(e, u), On(e, Be()), s;
        switch (e.finishedWork = c, e.finishedLanes = u, n) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            vs(e, An, Li);
            break;
          case 3:
            if (Ra(e, u), (u & 130023424) === u && (n = ed + 500 - Be(), 10 < n)) {
              if ($e(e, 0) !== 0)
                break;
              if (c = e.suspendedLanes, (c & u) !== u) {
                vn(), e.pingedLanes |= e.suspendedLanes & c;
                break;
              }
              e.timeoutHandle = go(vs.bind(null, e, An, Li), n);
              break;
            }
            vs(e, An, Li);
            break;
          case 4:
            if (Ra(e, u), (u & 4194240) === u)
              break;
            for (n = e.eventTimes, c = -1; 0 < u; ) {
              var C = 31 - yn(u);
              m = 1 << C, C = n[C], C > c && (c = C), u &= ~m;
            }
            if (u = c, u = Be() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Mp(u / 1960)) - u, 10 < u) {
              e.timeoutHandle = go(vs.bind(null, e, An, Li), u);
              break;
            }
            vs(e, An, Li);
            break;
          case 5:
            vs(e, An, Li);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return On(e, Be()), e.callbackNode === s ? Th.bind(null, e) : null;
  }
  function rd(e, n) {
    var s = Ao;
    return e.current.memoizedState.isDehydrated && (gs(e, n).flags |= 256), e = bu(e, n), e !== 2 && (n = An, An = s, n !== null && id(n)), e;
  }
  function id(e) {
    An === null ? An = e : An.push.apply(An, e);
  }
  function Lp(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var s = n.updateQueue;
        if (s !== null && (s = s.stores, s !== null))
          for (var u = 0; u < s.length; u++) {
            var c = s[u], m = c.getSnapshot;
            c = c.value;
            try {
              if (!xn(m(), c))
                return !1;
            } catch (C) {
              return !1;
            }
          }
      }
      if (s = n.child, n.subtreeFlags & 16384 && s !== null)
        s.return = n, n = s;
      else {
        if (n === e)
          break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e)
            return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function Ra(e, n) {
    for (n &= ~bf, n &= ~Xu, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
      var s = 31 - yn(n), u = 1 << s;
      e[s] = -1, n &= ~u;
    }
  }
  function Rh(e) {
    if (qe & 6)
      throw Error(i(327));
    Rl();
    var n = $e(e, 0);
    if (!(n & 1))
      return On(e, Be()), null;
    var s = bu(e, n);
    if (e.tag !== 0 && s === 2) {
      var u = Xl(e);
      u !== 0 && (n = u, s = rd(e, u));
    }
    if (s === 1)
      throw s = No, gs(e, 0), Ra(e, n), On(e, Be()), s;
    if (s === 6)
      throw Error(i(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, vs(e, An, Li), On(e, Be()), null;
  }
  function ad(e, n) {
    var s = qe;
    qe |= 1;
    try {
      return e(n);
    } finally {
      qe = s, qe === 0 && (Tl = Be() + 500, gl && rr());
    }
  }
  function ps(e) {
    Pa !== null && Pa.tag === 0 && !(qe & 6) && Rl();
    var n = qe;
    qe |= 1;
    var s = fr.transition, u = Qe;
    try {
      if (fr.transition = null, Qe = 1, e)
        return e();
    } finally {
      Qe = u, fr.transition = s, qe = n, !(qe & 6) && rr();
    }
  }
  function sd() {
    Hn = Pl.current, be(Pl);
  }
  function gs(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var s = e.timeoutHandle;
    if (s !== -1 && (e.timeoutHandle = -1, vo(s)), It !== null)
      for (s = It.return; s !== null; ) {
        var u = s;
        switch (as(u), u.tag) {
          case 1:
            u = u.type.childContextTypes, u != null && ma();
            break;
          case 3:
            Jr(), be(Gt), be(Et), ds();
            break;
          case 5:
            wa(u);
            break;
          case 4:
            Jr();
            break;
          case 13:
            be(dt);
            break;
          case 19:
            be(dt);
            break;
          case 10:
            Vt(u.type._context);
            break;
          case 22:
          case 23:
            sd();
        }
        s = s.return;
      }
    if (Yt = e, It = e = Ma(e.current, null), $t = Hn = n, Bt = 0, No = null, bf = Xu = cs = 0, An = Ao = null, Tt !== null) {
      for (n = 0; n < Tt.length; n++)
        if (s = Tt[n], u = s.interleaved, u !== null) {
          s.interleaved = null;
          var c = u.next, m = s.pending;
          if (m !== null) {
            var C = m.next;
            m.next = c, u.next = C;
          }
          s.pending = u;
        }
      Tt = null;
    }
    return e;
  }
  function Mh(e, n) {
    do {
      var s = It;
      try {
        if (Pi(), kl.current = Hu, Ca) {
          for (var u = et.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          Ca = !1;
        }
        if (ur = 0, kt = _t = et = null, hs = !1, ka = 0, $f.current = null, s === null || s.return === null) {
          Bt = 1, No = n, It = null;
          break;
        }
        e: {
          var m = e, C = s.return, R = s, A = n;
          if (n = $t, R.flags |= 32768, A !== null && typeof A == "object" && typeof A.then == "function") {
            var W = A, ee = R, ne = ee.tag;
            if (!(ee.mode & 1) && (ne === 0 || ne === 11 || ne === 15)) {
              var $ = ee.alternate;
              $ ? (ee.updateQueue = $.updateQueue, ee.memoizedState = $.memoizedState, ee.lanes = $.lanes) : (ee.updateQueue = null, ee.memoizedState = null);
            }
            var Se = eh(C);
            if (Se !== null) {
              Se.flags &= -257, th(Se, C, R, m, n), Se.mode & 1 && bd(m, W, n), n = Se, A = W;
              var xe = n.updateQueue;
              if (xe === null) {
                var Ee = /* @__PURE__ */ new Set();
                Ee.add(A), n.updateQueue = Ee;
              } else
                xe.add(A);
              break e;
            } else {
              if (!(n & 1)) {
                bd(m, W, n), ld();
                break e;
              }
              A = Error(i(426));
            }
          } else if (Xe && R.mode & 1) {
            var Mt = eh(C);
            if (Mt !== null) {
              !(Mt.flags & 65536) && (Mt.flags |= 256), th(Mt, C, R, m, n), Bn(xl(A, R));
              break e;
            }
          }
          m = A = xl(A, R), Bt !== 4 && (Bt = 2), Ao === null ? Ao = [m] : Ao.push(m), m = C;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, n &= -n, m.lanes |= n;
                var U = Zd(m, A, n);
                wo(m, U);
                break e;
              case 1:
                R = A;
                var D = m.type, j = m.stateNode;
                if (!(m.flags & 128) && (typeof D.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && (Ea === null || !Ea.has(j)))) {
                  m.flags |= 65536, n &= -n, m.lanes |= n;
                  var le = $d(m, R, n);
                  wo(m, le);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        Ah(s);
      } catch (Pe) {
        n = Pe, It === s && s !== null && (It = s = s.return);
        continue;
      }
      break;
    } while (1);
  }
  function Lh() {
    var e = Qu.current;
    return Qu.current = Hu, e === null ? Hu : e;
  }
  function ld() {
    (Bt === 0 || Bt === 3 || Bt === 2) && (Bt = 4), Yt === null || !(cs & 268435455) && !(Xu & 268435455) || Ra(Yt, $t);
  }
  function bu(e, n) {
    var s = qe;
    qe |= 2;
    var u = Lh();
    (Yt !== e || $t !== n) && (Li = null, gs(e, n));
    do
      try {
        Np();
        break;
      } catch (c) {
        Mh(e, c);
      }
    while (1);
    if (Pi(), qe = s, Qu.current = u, It !== null)
      throw Error(i(261));
    return Yt = null, $t = 0, Bt;
  }
  function Np() {
    for (; It !== null; )
      Nh(It);
  }
  function Ap() {
    for (; It !== null && !Vi(); )
      Nh(It);
  }
  function Nh(e) {
    var n = zh(e.alternate, e, Hn);
    e.memoizedProps = e.pendingProps, n === null ? Ah(e) : It = n, $f.current = null;
  }
  function Ah(e) {
    var n = e;
    do {
      var s = n.alternate;
      if (e = n.return, n.flags & 32768) {
        if (s = Ep(s, n), s !== null) {
          s.flags &= 32767, It = s;
          return;
        }
        if (e !== null)
          e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Bt = 6, It = null;
          return;
        }
      } else if (s = xp(s, n, Hn), s !== null) {
        It = s;
        return;
      }
      if (n = n.sibling, n !== null) {
        It = n;
        return;
      }
      It = n = e;
    } while (n !== null);
    Bt === 0 && (Bt = 5);
  }
  function vs(e, n, s) {
    var u = Qe, c = fr.transition;
    try {
      fr.transition = null, Qe = 1, Op(e, n, s, u);
    } finally {
      fr.transition = c, Qe = u;
    }
    return null;
  }
  function Op(e, n, s, u) {
    do
      Rl();
    while (Pa !== null);
    if (qe & 6)
      throw Error(i(327));
    s = e.finishedWork;
    var c = e.finishedLanes;
    if (s === null)
      return null;
    if (e.finishedWork = null, e.finishedLanes = 0, s === e.current)
      throw Error(i(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var m = s.lanes | s.childLanes;
    if (Qi(e, m), e === Yt && (It = Yt = null, $t = 0), !(s.subtreeFlags & 2064) && !(s.flags & 2064) || qu || (qu = !0, Dh(Dt, function() {
      return Rl(), null;
    })), m = (s.flags & 15990) !== 0, s.subtreeFlags & 15990 || m) {
      m = fr.transition, fr.transition = null;
      var C = Qe;
      Qe = 1;
      var R = qe;
      qe |= 4, $f.current = null, Tp(e, s), Ch(s, e), so(Ci), _n = !!ll, Ci = ll = null, e.current = s, Rp(s), Mr(), qe = R, Qe = C, fr.transition = m;
    } else
      e.current = s;
    if (qu && (qu = !1, Pa = e, Ju = c), m = e.pendingLanes, m === 0 && (Ea = null), fu(s.stateNode), On(e, Be()), n !== null)
      for (u = e.onRecoverableError, s = 0; s < n.length; s++)
        c = n[s], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (Ku)
      throw Ku = !1, e = td, td = null, e;
    return Ju & 1 && e.tag !== 0 && Rl(), m = e.pendingLanes, m & 1 ? e === nd ? Oo++ : (Oo = 0, nd = e) : Oo = 0, rr(), null;
  }
  function Rl() {
    if (Pa !== null) {
      var e = cr(Ju), n = fr.transition, s = Qe;
      try {
        if (fr.transition = null, Qe = 16 > e ? 16 : e, Pa === null)
          var u = !1;
        else {
          if (e = Pa, Pa = null, Ju = 0, qe & 6)
            throw Error(i(331));
          var c = qe;
          for (qe |= 4, Ce = e.current; Ce !== null; ) {
            var m = Ce, C = m.child;
            if (Ce.flags & 16) {
              var R = m.deletions;
              if (R !== null) {
                for (var A = 0; A < R.length; A++) {
                  var W = R[A];
                  for (Ce = W; Ce !== null; ) {
                    var ee = Ce;
                    switch (ee.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Lo(8, ee, m);
                    }
                    var ne = ee.child;
                    if (ne !== null)
                      ne.return = ee, Ce = ne;
                    else
                      for (; Ce !== null; ) {
                        ee = Ce;
                        var $ = ee.sibling, Se = ee.return;
                        if (mh(ee), ee === W) {
                          Ce = null;
                          break;
                        }
                        if ($ !== null) {
                          $.return = Se, Ce = $;
                          break;
                        }
                        Ce = Se;
                      }
                  }
                }
                var xe = m.alternate;
                if (xe !== null) {
                  var Ee = xe.child;
                  if (Ee !== null) {
                    xe.child = null;
                    do {
                      var Mt = Ee.sibling;
                      Ee.sibling = null, Ee = Mt;
                    } while (Ee !== null);
                  }
                }
                Ce = m;
              }
            }
            if (m.subtreeFlags & 2064 && C !== null)
              C.return = m, Ce = C;
            else
              e:
                for (; Ce !== null; ) {
                  if (m = Ce, m.flags & 2048)
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Lo(9, m, m.return);
                    }
                  var U = m.sibling;
                  if (U !== null) {
                    U.return = m.return, Ce = U;
                    break e;
                  }
                  Ce = m.return;
                }
          }
          var D = e.current;
          for (Ce = D; Ce !== null; ) {
            C = Ce;
            var j = C.child;
            if (C.subtreeFlags & 2064 && j !== null)
              j.return = C, Ce = j;
            else
              e:
                for (C = D; Ce !== null; ) {
                  if (R = Ce, R.flags & 2048)
                    try {
                      switch (R.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Yu(9, R);
                      }
                    } catch (Pe) {
                      xt(R, R.return, Pe);
                    }
                  if (R === C) {
                    Ce = null;
                    break e;
                  }
                  var le = R.sibling;
                  if (le !== null) {
                    le.return = R.return, Ce = le;
                    break e;
                  }
                  Ce = R.return;
                }
          }
          if (qe = c, rr(), fn && typeof fn.onPostCommitFiberRoot == "function")
            try {
              fn.onPostCommitFiberRoot(Ft, e);
            } catch (Pe) {
            }
          u = !0;
        }
        return u;
      } finally {
        Qe = s, fr.transition = n;
      }
    }
    return !1;
  }
  function Oh(e, n, s) {
    n = xl(s, n), n = Zd(e, n, 1), e = sr(e, n, 1), n = vn(), e !== null && (Nr(e, 1, n), On(e, n));
  }
  function xt(e, n, s) {
    if (e.tag === 3)
      Oh(e, e, s);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Oh(n, e, s);
          break;
        } else if (n.tag === 1) {
          var u = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Ea === null || !Ea.has(u))) {
            e = xl(s, e), e = $d(n, e, 1), n = sr(n, e, 1), e = vn(), n !== null && (Nr(n, 1, e), On(n, e));
            break;
          }
        }
        n = n.return;
      }
  }
  function Ip(e, n, s) {
    var u = e.pingCache;
    u !== null && u.delete(n), n = vn(), e.pingedLanes |= e.suspendedLanes & s, Yt === e && ($t & s) === s && (Bt === 4 || Bt === 3 && ($t & 130023424) === $t && 500 > Be() - ed ? gs(e, 0) : bf |= s), On(e, n);
  }
  function Ih(e, n) {
    n === 0 && (e.mode & 1 ? (n = Fs, Fs <<= 1, !(Fs & 130023424) && (Fs = 4194304)) : n = 1);
    var s = vn();
    e = Un(e, n), e !== null && (Nr(e, n, s), On(e, s));
  }
  function zp(e) {
    var n = e.memoizedState, s = 0;
    n !== null && (s = n.retryLane), Ih(e, s);
  }
  function Dp(e, n) {
    var s = 0;
    switch (e.tag) {
      case 13:
        var u = e.stateNode, c = e.memoizedState;
        c !== null && (s = c.retryLane);
        break;
      case 19:
        u = e.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    u !== null && u.delete(n), Ih(e, s);
  }
  var zh;
  zh = function(e, n, s) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps || Gt.current)
        Nn = !0;
      else {
        if (!(e.lanes & s) && !(n.flags & 128))
          return Nn = !1, kp(e, n, s);
        Nn = !!(e.flags & 131072);
      }
    else
      Nn = !1, Xe && n.flags & 1048576 && ki(n, Pt, n.index);
    switch (n.lanes = 0, n.tag) {
      case 2:
        var u = n.type;
        Wu(e, n), e = n.pendingProps;
        var c = yr(n, Et.current);
        nn(n, s), c = Ro(null, n, u, e, c, s);
        var m = r();
        return n.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, At(u) ? (m = !0, ns(n)) : m = !1, n.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, _l(n), c.updater = us, n.stateNode = c, c._reactInternals = n, xo(n, u, e, s), n = jf(null, n, u, !0, m, s)) : (n.tag = 0, Xe && m && is(n), gn(null, n, c, s), n = n.child), n;
      case 16:
        u = n.elementType;
        e: {
          switch (Wu(e, n), e = n.pendingProps, c = u._init, u = c(u._payload), n.type = u, c = n.tag = Gp(u), e = hn(u, e), c) {
            case 0:
              n = Hf(null, n, u, e, s);
              break e;
            case 1:
              n = lh(null, n, u, e, s);
              break e;
            case 11:
              n = nh(null, n, u, e, s);
              break e;
            case 14:
              n = rh(null, n, u, hn(u.type, e), s);
              break e;
          }
          throw Error(i(
            306,
            u,
            ""
          ));
        }
        return n;
      case 0:
        return u = n.type, c = n.pendingProps, c = n.elementType === u ? c : hn(u, c), Hf(e, n, u, c, s);
      case 1:
        return u = n.type, c = n.pendingProps, c = n.elementType === u ? c : hn(u, c), lh(e, n, u, c, s);
      case 3:
        e: {
          if (oh(n), e === null)
            throw Error(i(387));
          u = n.pendingProps, m = n.memoizedState, c = m.element, So(e, n), os(n, u, null, s);
          var C = n.memoizedState;
          if (u = C.element, m.isDehydrated)
            if (m = { element: u, isDehydrated: !1, cache: C.cache, pendingSuspenseBoundaries: C.pendingSuspenseBoundaries, transitions: C.transitions }, n.updateQueue.baseState = m, n.memoizedState = m, n.flags & 256) {
              c = xl(Error(i(423)), n), n = uh(e, n, u, s, c);
              break e;
            } else if (u !== c) {
              c = xl(Error(i(424)), n), n = uh(e, n, u, s, c);
              break e;
            } else
              for (qt = Hr(n.stateNode.containerInfo.firstChild), Kt = n, Xe = !0, ge = null, s = wr(n, null, u, s), n.child = s; s; )
                s.flags = s.flags & -3 | 4096, s = s.sibling;
          else {
            if (Qr(), u === c) {
              n = Mi(e, n, s);
              break e;
            }
            gn(e, n, u, s);
          }
          n = n.child;
        }
        return n;
      case 5:
        return Po(n), e === null && ir(n), u = n.type, c = n.pendingProps, m = e !== null ? e.memoizedProps : null, C = c.children, po(u, c) ? C = null : m !== null && po(u, m) && (n.flags |= 32), sh(e, n), gn(e, n, C, s), n.child;
      case 6:
        return e === null && ir(n), null;
      case 13:
        return fh(e, n, s);
      case 4:
        return wl(n, n.stateNode.containerInfo), u = n.pendingProps, e === null ? n.child = Ri(n, null, u, s) : gn(e, n, u, s), n.child;
      case 11:
        return u = n.type, c = n.pendingProps, c = n.elementType === u ? c : hn(u, c), nh(e, n, u, c, s);
      case 7:
        return gn(e, n, n.pendingProps, s), n.child;
      case 8:
        return gn(e, n, n.pendingProps.children, s), n.child;
      case 12:
        return gn(e, n, n.pendingProps.children, s), n.child;
      case 10:
        e: {
          if (u = n.type._context, c = n.pendingProps, m = n.memoizedProps, C = c.value, lt(xi, u._currentValue), u._currentValue = C, m !== null)
            if (xn(m.value, C)) {
              if (m.children === c.children && !Gt.current) {
                n = Mi(e, n, s);
                break e;
              }
            } else
              for (m = n.child, m !== null && (m.return = n); m !== null; ) {
                var R = m.dependencies;
                if (R !== null) {
                  C = m.child;
                  for (var A = R.firstContext; A !== null; ) {
                    if (A.context === u) {
                      if (m.tag === 1) {
                        A = Ln(-1, s & -s), A.tag = 2;
                        var W = m.updateQueue;
                        if (W !== null) {
                          W = W.shared;
                          var ee = W.pending;
                          ee === null ? A.next = A : (A.next = ee.next, ee.next = A), W.pending = A;
                        }
                      }
                      m.lanes |= s, A = m.alternate, A !== null && (A.lanes |= s), ar(
                        m.return,
                        s,
                        n
                      ), R.lanes |= s;
                      break;
                    }
                    A = A.next;
                  }
                } else if (m.tag === 10)
                  C = m.type === n.type ? null : m.child;
                else if (m.tag === 18) {
                  if (C = m.return, C === null)
                    throw Error(i(341));
                  C.lanes |= s, R = C.alternate, R !== null && (R.lanes |= s), ar(C, s, n), C = m.sibling;
                } else
                  C = m.child;
                if (C !== null)
                  C.return = m;
                else
                  for (C = m; C !== null; ) {
                    if (C === n) {
                      C = null;
                      break;
                    }
                    if (m = C.sibling, m !== null) {
                      m.return = C.return, C = m;
                      break;
                    }
                    C = C.return;
                  }
                m = C;
              }
          gn(e, n, c.children, s), n = n.child;
        }
        return n;
      case 9:
        return c = n.type, u = n.pendingProps.children, nn(n, s), c = Jt(c), u = u(c), n.flags |= 1, gn(e, n, u, s), n.child;
      case 14:
        return u = n.type, c = hn(u, n.pendingProps), c = hn(u.type, c), rh(e, n, u, c, s);
      case 15:
        return ih(e, n, n.type, n.pendingProps, s);
      case 17:
        return u = n.type, c = n.pendingProps, c = n.elementType === u ? c : hn(u, c), Wu(e, n), n.tag = 1, At(u) ? (e = !0, ns(n)) : e = !1, nn(n, s), Kr(n, u, c), xo(n, u, c, s), jf(null, n, u, !0, e, s);
      case 19:
        return hh(e, n, s);
      case 22:
        return ah(e, n, s);
    }
    throw Error(i(156, n.tag));
  };
  function Dh(e, n) {
    return Ha(e, n);
  }
  function Fp(e, n, s, u) {
    this.tag = e, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function dr(e, n, s, u) {
    return new Fp(e, n, s, u);
  }
  function od(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Gp(e) {
    if (typeof e == "function")
      return od(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === b)
        return 11;
      if (e === Ie)
        return 14;
    }
    return 2;
  }
  function Ma(e, n) {
    var s = e.alternate;
    return s === null ? (s = dr(e.tag, n, e.key, e.mode), s.elementType = e.elementType, s.type = e.type, s.stateNode = e.stateNode, s.alternate = e, e.alternate = s) : (s.pendingProps = n, s.type = e.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = e.flags & 14680064, s.childLanes = e.childLanes, s.lanes = e.lanes, s.child = e.child, s.memoizedProps = e.memoizedProps, s.memoizedState = e.memoizedState, s.updateQueue = e.updateQueue, n = e.dependencies, s.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, s.sibling = e.sibling, s.index = e.index, s.ref = e.ref, s;
  }
  function ef(e, n, s, u, c, m) {
    var C = 2;
    if (u = e, typeof e == "function")
      od(e) && (C = 1);
    else if (typeof e == "string")
      C = 5;
    else
      e:
        switch (e) {
          case de:
            return ms(s.children, c, m, n);
          case oe:
            C = 8, c |= 8;
            break;
          case ae:
            return e = dr(12, s, n, c | 2), e.elementType = ae, e.lanes = m, e;
          case te:
            return e = dr(13, s, n, c), e.elementType = te, e.lanes = m, e;
          case Ne:
            return e = dr(19, s, n, c), e.elementType = Ne, e.lanes = m, e;
          case De:
            return tf(s, c, m, n);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case pe:
                  C = 10;
                  break e;
                case me:
                  C = 9;
                  break e;
                case b:
                  C = 11;
                  break e;
                case Ie:
                  C = 14;
                  break e;
                case Le:
                  C = 16, u = null;
                  break e;
              }
            throw Error(i(130, e == null ? e : typeof e, ""));
        }
    return n = dr(C, s, n, c), n.elementType = e, n.type = u, n.lanes = m, n;
  }
  function ms(e, n, s, u) {
    return e = dr(7, e, u, n), e.lanes = s, e;
  }
  function tf(e, n, s, u) {
    return e = dr(22, e, u, n), e.elementType = De, e.lanes = s, e.stateNode = { isHidden: !1 }, e;
  }
  function ud(e, n, s) {
    return e = dr(6, e, null, n), e.lanes = s, e;
  }
  function fd(e, n, s) {
    return n = dr(4, e.children !== null ? e.children : [], e.key, n), n.lanes = s, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  function Bp(e, n, s, u, c) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Gs(0), this.expirationTimes = Gs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gs(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function dd(e, n, s, u, c, m, C, R, A) {
    return e = new Bp(e, n, s, R, A), n === 1 ? (n = 1, m === !0 && (n |= 8)) : n = 0, m = dr(3, null, null, n), e.current = m, m.stateNode = e, m.memoizedState = { element: u, isDehydrated: s, cache: null, transitions: null, pendingSuspenseBoundaries: null }, _l(m), e;
  }
  function Up(e, n, s) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: J, key: u == null ? null : "" + u, children: e, containerInfo: n, implementation: s };
  }
  function Fh(e) {
    if (!e)
      return Fn;
    e = e._reactInternals;
    e: {
      if (ti(e) !== e || e.tag !== 1)
        throw Error(i(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (At(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(i(171));
    }
    if (e.tag === 1) {
      var s = e.type;
      if (At(s))
        return cl(e, s, n);
    }
    return n;
  }
  function Gh(e, n, s, u, c, m, C, R, A) {
    return e = dd(s, u, !0, e, c, m, C, R, A), e.context = Fh(null), s = e.current, u = vn(), c = Ta(s), m = Ln(u, c), m.callback = n != null ? n : null, sr(s, m, c), e.current.lanes = c, Nr(e, c, u), On(e, u), e;
  }
  function nf(e, n, s, u) {
    var c = n.current, m = vn(), C = Ta(c);
    return s = Fh(s), n.context === null ? n.context = s : n.pendingContext = s, n = Ln(m, C), n.payload = { element: e }, u = u === void 0 ? null : u, u !== null && (n.callback = u), e = sr(c, n, C), e !== null && (Pr(e, c, C, m), Sr(e, c, C)), C;
  }
  function rf(e) {
    if (e = e.current, !e.child)
      return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Bh(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var s = e.retryLane;
      e.retryLane = s !== 0 && s < n ? s : n;
    }
  }
  function hd(e, n) {
    Bh(e, n), (e = e.alternate) && Bh(e, n);
  }
  function Hp() {
    return null;
  }
  var Uh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function cd(e) {
    this._internalRoot = e;
  }
  af.prototype.render = cd.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null)
      throw Error(i(409));
    nf(e, n, null, null);
  }, af.prototype.unmount = cd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      ps(function() {
        nf(null, e, null, null);
      }), n[tr] = null;
    }
  };
  function af(e) {
    this._internalRoot = e;
  }
  af.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = pu();
      e = { blockedOn: null, target: e, priority: n };
      for (var s = 0; s < gr.length && n !== 0 && n < gr[s].priority; s++)
        ;
      gr.splice(s, 0, e), s === 0 && Kn(e);
    }
  };
  function pd(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function sf(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Hh() {
  }
  function jp(e, n, s, u, c) {
    if (c) {
      if (typeof u == "function") {
        var m = u;
        u = function() {
          var W = rf(C);
          m.call(W);
        };
      }
      var C = Gh(n, u, e, 0, null, !1, !1, "", Hh);
      return e._reactRootContainer = C, e[tr] = C.current, fa(e.nodeType === 8 ? e.parentNode : e), ps(), C;
    }
    for (; c = e.lastChild; )
      e.removeChild(c);
    if (typeof u == "function") {
      var R = u;
      u = function() {
        var W = rf(A);
        R.call(W);
      };
    }
    var A = dd(e, 0, !1, null, null, !1, !1, "", Hh);
    return e._reactRootContainer = A, e[tr] = A.current, fa(e.nodeType === 8 ? e.parentNode : e), ps(function() {
      nf(n, A, s, u);
    }), A;
  }
  function lf(e, n, s, u, c) {
    var m = s._reactRootContainer;
    if (m) {
      var C = m;
      if (typeof c == "function") {
        var R = c;
        c = function() {
          var A = rf(C);
          R.call(A);
        };
      }
      nf(n, C, e, c);
    } else
      C = jp(s, n, e, c, u);
    return rf(C);
  }
  hu = function(e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var s = Lr(n.pendingLanes);
          s !== 0 && (ja(n, s | 1), On(n, Be()), !(qe & 6) && (Tl = Be() + 500, rr()));
        }
        break;
      case 13:
        ps(function() {
          var u = Un(e, 1);
          if (u !== null) {
            var c = vn();
            Pr(u, e, 1, c);
          }
        }), hd(e, 1);
    }
  }, Kl = function(e) {
    if (e.tag === 13) {
      var n = Un(e, 134217728);
      if (n !== null) {
        var s = vn();
        Pr(n, e, 134217728, s);
      }
      hd(e, 134217728);
    }
  }, cu = function(e) {
    if (e.tag === 13) {
      var n = Ta(e), s = Un(e, n);
      if (s !== null) {
        var u = vn();
        Pr(s, e, n, u);
      }
      hd(e, n);
    }
  }, pu = function() {
    return Qe;
  }, Bs = function(e, n) {
    var s = Qe;
    try {
      return Qe = e, n();
    } finally {
      Qe = s;
    }
  }, Rs = function(e, n, s) {
    switch (n) {
      case "input":
        if (Fl(e, s), n = s.name, s.type === "radio" && n != null) {
          for (s = e; s.parentNode; )
            s = s.parentNode;
          for (s = s.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < s.length; n++) {
            var u = s[n];
            if (u !== e && u.form === e.form) {
              var c = va(u);
              if (!c)
                throw Error(i(90));
              Ps(u), Fl(u, c);
            }
          }
        }
        break;
      case "textarea":
        $o(e, s);
        break;
      case "select":
        n = s.value, n != null && Fi(e, !!s.multiple, n, !1);
    }
  }, su = ad, Wl = ps;
  var Wp = { usingClientEntryPoint: !1, Events: [ga, Wr, va, au, Ms, ad] }, Io = { findFiberByHostInstance: jr, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Vp = { bundleType: Io.bundleType, version: Io.version, rendererPackageName: Io.rendererPackageName, rendererConfig: Io.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: K.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Wi(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Io.findFiberByHostInstance || Hp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
    var of = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!of.isDisabled && of.supportsFiber)
      try {
        Ft = of.inject(Vp), fn = of;
      } catch (e) {
      }
  }
  return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wp, In.createPortal = function(e, n) {
    var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!pd(n))
      throw Error(i(200));
    return Up(e, n, null, s);
  }, In.createRoot = function(e, n) {
    if (!pd(e))
      throw Error(i(299));
    var s = !1, u = "", c = Uh;
    return n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (c = n.onRecoverableError)), n = dd(e, 1, !1, null, null, s, !1, u, c), e[tr] = n.current, fa(e.nodeType === 8 ? e.parentNode : e), new cd(n);
  }, In.findDOMNode = function(e) {
    if (e == null)
      return null;
    if (e.nodeType === 1)
      return e;
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = Wi(n), e = e === null ? null : e.stateNode, e;
  }, In.flushSync = function(e) {
    return ps(e);
  }, In.hydrate = function(e, n, s) {
    if (!sf(n))
      throw Error(i(200));
    return lf(null, e, n, !0, s);
  }, In.hydrateRoot = function(e, n, s) {
    if (!pd(e))
      throw Error(i(405));
    var u = s != null && s.hydratedSources || null, c = !1, m = "", C = Uh;
    if (s != null && (s.unstable_strictMode === !0 && (c = !0), s.identifierPrefix !== void 0 && (m = s.identifierPrefix), s.onRecoverableError !== void 0 && (C = s.onRecoverableError)), n = Gh(n, null, e, 1, s != null ? s : null, c, !1, m, C), e[tr] = n.current, fa(e), u)
      for (e = 0; e < u.length; e++)
        s = u[e], c = s._getVersion, c = c(s._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [s, c] : n.mutableSourceEagerHydrationData.push(
          s,
          c
        );
    return new af(n);
  }, In.render = function(e, n, s) {
    if (!sf(n))
      throw Error(i(200));
    return lf(null, e, n, !1, s);
  }, In.unmountComponentAtNode = function(e) {
    if (!sf(e))
      throw Error(i(40));
    return e._reactRootContainer ? (ps(function() {
      lf(null, null, e, !1, function() {
        e._reactRootContainer = null, e[tr] = null;
      });
    }), !0) : !1;
  }, In.unstable_batchedUpdates = ad, In.unstable_renderSubtreeIntoContainer = function(e, n, s, u) {
    if (!sf(s))
      throw Error(i(200));
    if (e == null || e._reactInternals === void 0)
      throw Error(i(38));
    return lf(e, n, s, !1, u);
  }, In.version = "18.2.0-next-9e3b772b8-20220608", In;
}
function Nc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nc);
    } catch (d) {
      console.error(d);
    }
}
Nc(), Lc.exports = bp();
var eg = Lc.exports, Jh = eg;
Ld.createRoot = Jh.createRoot, Ld.hydrateRoot = Jh.hydrateRoot;
var ln = Pf();
const Tr = /* @__PURE__ */ Rc(ln);
var tg = Math.PI / 180;
function ng() {
  return typeof window != "undefined" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]");
}
const Al = typeof global != "undefined" ? global : typeof window != "undefined" ? window : typeof WorkerGlobalScope != "undefined" ? self : {}, ke = {
  _global: Al,
  version: "8.4.3",
  isBrowser: ng(),
  isUnminified: /param/.test(function(d) {
  }.toString()),
  dblClickWindow: 400,
  getAngle(d) {
    return ke.angleDeg ? d * tg : d;
  },
  enableTrace: !1,
  pointerEventsEnabled: !0,
  autoDrawEnabled: !0,
  hitOnDragEnabled: !1,
  capturePointerEventsEnabled: !1,
  _mouseListenClick: !1,
  _touchListenClick: !1,
  _pointerListenClick: !1,
  _mouseInDblClickWindow: !1,
  _touchInDblClickWindow: !1,
  _pointerInDblClickWindow: !1,
  _mouseDblClickPointerId: null,
  _touchDblClickPointerId: null,
  _pointerDblClickPointerId: null,
  pixelRatio: typeof window != "undefined" && window.devicePixelRatio || 1,
  dragDistance: 3,
  angleDeg: !0,
  showWarnings: !0,
  dragButtons: [0, 1],
  isDragging() {
    return ke.DD.isDragging;
  },
  isDragReady() {
    return !!ke.DD.node;
  },
  releaseCanvasOnDestroy: !0,
  document: Al.document,
  _injectGlobal(d) {
    Al.Konva = d;
  }
}, wt = (d) => {
  ke[d.prototype.getClassName()] = d;
};
ke._injectGlobal(ke);
class jn {
  constructor(t = [1, 0, 0, 1, 0, 0]) {
    this.dirty = !1, this.m = t && t.slice() || [1, 0, 0, 1, 0, 0];
  }
  reset() {
    this.m[0] = 1, this.m[1] = 0, this.m[2] = 0, this.m[3] = 1, this.m[4] = 0, this.m[5] = 0;
  }
  copy() {
    return new jn(this.m);
  }
  copyInto(t) {
    t.m[0] = this.m[0], t.m[1] = this.m[1], t.m[2] = this.m[2], t.m[3] = this.m[3], t.m[4] = this.m[4], t.m[5] = this.m[5];
  }
  point(t) {
    var i = this.m;
    return {
      x: i[0] * t.x + i[2] * t.y + i[4],
      y: i[1] * t.x + i[3] * t.y + i[5]
    };
  }
  translate(t, i) {
    return this.m[4] += this.m[0] * t + this.m[2] * i, this.m[5] += this.m[1] * t + this.m[3] * i, this;
  }
  scale(t, i) {
    return this.m[0] *= t, this.m[1] *= t, this.m[2] *= i, this.m[3] *= i, this;
  }
  rotate(t) {
    var i = Math.cos(t), l = Math.sin(t), f = this.m[0] * i + this.m[2] * l, h = this.m[1] * i + this.m[3] * l, p = this.m[0] * -l + this.m[2] * i, g = this.m[1] * -l + this.m[3] * i;
    return this.m[0] = f, this.m[1] = h, this.m[2] = p, this.m[3] = g, this;
  }
  getTranslation() {
    return {
      x: this.m[4],
      y: this.m[5]
    };
  }
  skew(t, i) {
    var l = this.m[0] + this.m[2] * i, f = this.m[1] + this.m[3] * i, h = this.m[2] + this.m[0] * t, p = this.m[3] + this.m[1] * t;
    return this.m[0] = l, this.m[1] = f, this.m[2] = h, this.m[3] = p, this;
  }
  multiply(t) {
    var i = this.m[0] * t.m[0] + this.m[2] * t.m[1], l = this.m[1] * t.m[0] + this.m[3] * t.m[1], f = this.m[0] * t.m[2] + this.m[2] * t.m[3], h = this.m[1] * t.m[2] + this.m[3] * t.m[3], p = this.m[0] * t.m[4] + this.m[2] * t.m[5] + this.m[4], g = this.m[1] * t.m[4] + this.m[3] * t.m[5] + this.m[5];
    return this.m[0] = i, this.m[1] = l, this.m[2] = f, this.m[3] = h, this.m[4] = p, this.m[5] = g, this;
  }
  invert() {
    var t = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), i = this.m[3] * t, l = -this.m[1] * t, f = -this.m[2] * t, h = this.m[0] * t, p = t * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), g = t * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
    return this.m[0] = i, this.m[1] = l, this.m[2] = f, this.m[3] = h, this.m[4] = p, this.m[5] = g, this;
  }
  getMatrix() {
    return this.m;
  }
  decompose() {
    var t = this.m[0], i = this.m[1], l = this.m[2], f = this.m[3], h = this.m[4], p = this.m[5], g = t * f - i * l;
    let y = {
      x: h,
      y: p,
      rotation: 0,
      scaleX: 0,
      scaleY: 0,
      skewX: 0,
      skewY: 0
    };
    if (t != 0 || i != 0) {
      var S = Math.sqrt(t * t + i * i);
      y.rotation = i > 0 ? Math.acos(t / S) : -Math.acos(t / S), y.scaleX = S, y.scaleY = g / S, y.skewX = (t * l + i * f) / g, y.skewY = 0;
    } else if (l != 0 || f != 0) {
      var k = Math.sqrt(l * l + f * f);
      y.rotation = Math.PI / 2 - (f > 0 ? Math.acos(-l / k) : -Math.acos(l / k)), y.scaleX = g / k, y.scaleY = k, y.skewX = 0, y.skewY = (t * l + i * f) / g;
    }
    return y.rotation = G._getRotation(y.rotation), y;
  }
}
var rg = "[object Array]", ig = "[object Number]", ag = "[object String]", sg = "[object Boolean]", lg = Math.PI / 180, og = 180 / Math.PI, _d = "#", ug = "", fg = "0", dg = "Konva warning: ", Zh = "Konva error: ", hg = "rgb(", Sd = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 132, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 255, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 203],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [119, 128, 144],
  slategrey: [119, 128, 144],
  snow: [255, 255, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  transparent: [255, 255, 255, 0],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 5]
}, cg = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/, uf = [];
const pg = typeof requestAnimationFrame != "undefined" && requestAnimationFrame || function(d) {
  setTimeout(d, 60);
}, G = {
  _isElement(d) {
    return !!(d && d.nodeType == 1);
  },
  _isFunction(d) {
    return !!(d && d.constructor && d.call && d.apply);
  },
  _isPlainObject(d) {
    return !!d && d.constructor === Object;
  },
  _isArray(d) {
    return Object.prototype.toString.call(d) === rg;
  },
  _isNumber(d) {
    return Object.prototype.toString.call(d) === ig && !isNaN(d) && isFinite(d);
  },
  _isString(d) {
    return Object.prototype.toString.call(d) === ag;
  },
  _isBoolean(d) {
    return Object.prototype.toString.call(d) === sg;
  },
  isObject(d) {
    return d instanceof Object;
  },
  isValidSelector(d) {
    if (typeof d != "string")
      return !1;
    var t = d[0];
    return t === "#" || t === "." || t === t.toUpperCase();
  },
  _sign(d) {
    return d === 0 || d > 0 ? 1 : -1;
  },
  requestAnimFrame(d) {
    uf.push(d), uf.length === 1 && pg(function() {
      const t = uf;
      uf = [], t.forEach(function(i) {
        i();
      });
    });
  },
  createCanvasElement() {
    var d = document.createElement("canvas");
    try {
      d.style = d.style || {};
    } catch (t) {
    }
    return d;
  },
  createImageElement() {
    return document.createElement("img");
  },
  _isInDocument(d) {
    for (; d = d.parentNode; )
      if (d == document)
        return !0;
    return !1;
  },
  _urlToImage(d, t) {
    var i = G.createImageElement();
    i.onload = function() {
      t(i);
    }, i.src = d;
  },
  _rgbToHex(d, t, i) {
    return ((1 << 24) + (d << 16) + (t << 8) + i).toString(16).slice(1);
  },
  _hexToRgb(d) {
    d = d.replace(_d, ug);
    var t = parseInt(d, 16);
    return {
      r: t >> 16 & 255,
      g: t >> 8 & 255,
      b: t & 255
    };
  },
  getRandomColor() {
    for (var d = (Math.random() * 16777215 << 0).toString(16); d.length < 6; )
      d = fg + d;
    return _d + d;
  },
  getRGB(d) {
    var t;
    return d in Sd ? (t = Sd[d], {
      r: t[0],
      g: t[1],
      b: t[2]
    }) : d[0] === _d ? this._hexToRgb(d.substring(1)) : d.substr(0, 4) === hg ? (t = cg.exec(d.replace(/ /g, "")), {
      r: parseInt(t[1], 10),
      g: parseInt(t[2], 10),
      b: parseInt(t[3], 10)
    }) : {
      r: 0,
      g: 0,
      b: 0
    };
  },
  colorToRGBA(d) {
    return d = d || "black", G._namedColorToRBA(d) || G._hex3ColorToRGBA(d) || G._hex4ColorToRGBA(d) || G._hex6ColorToRGBA(d) || G._hex8ColorToRGBA(d) || G._rgbColorToRGBA(d) || G._rgbaColorToRGBA(d) || G._hslColorToRGBA(d);
  },
  _namedColorToRBA(d) {
    var t = Sd[d.toLowerCase()];
    return t ? {
      r: t[0],
      g: t[1],
      b: t[2],
      a: 1
    } : null;
  },
  _rgbColorToRGBA(d) {
    if (d.indexOf("rgb(") === 0) {
      d = d.match(/rgb\(([^)]+)\)/)[1];
      var t = d.split(/ *, */).map(Number);
      return {
        r: t[0],
        g: t[1],
        b: t[2],
        a: 1
      };
    }
  },
  _rgbaColorToRGBA(d) {
    if (d.indexOf("rgba(") === 0) {
      d = d.match(/rgba\(([^)]+)\)/)[1];
      var t = d.split(/ *, */).map((i, l) => i.slice(-1) === "%" ? l === 3 ? parseInt(i) / 100 : parseInt(i) / 100 * 255 : Number(i));
      return {
        r: t[0],
        g: t[1],
        b: t[2],
        a: t[3]
      };
    }
  },
  _hex8ColorToRGBA(d) {
    if (d[0] === "#" && d.length === 9)
      return {
        r: parseInt(d.slice(1, 3), 16),
        g: parseInt(d.slice(3, 5), 16),
        b: parseInt(d.slice(5, 7), 16),
        a: parseInt(d.slice(7, 9), 16) / 255
      };
  },
  _hex6ColorToRGBA(d) {
    if (d[0] === "#" && d.length === 7)
      return {
        r: parseInt(d.slice(1, 3), 16),
        g: parseInt(d.slice(3, 5), 16),
        b: parseInt(d.slice(5, 7), 16),
        a: 1
      };
  },
  _hex4ColorToRGBA(d) {
    if (d[0] === "#" && d.length === 5)
      return {
        r: parseInt(d[1] + d[1], 16),
        g: parseInt(d[2] + d[2], 16),
        b: parseInt(d[3] + d[3], 16),
        a: parseInt(d[4] + d[4], 16) / 255
      };
  },
  _hex3ColorToRGBA(d) {
    if (d[0] === "#" && d.length === 4)
      return {
        r: parseInt(d[1] + d[1], 16),
        g: parseInt(d[2] + d[2], 16),
        b: parseInt(d[3] + d[3], 16),
        a: 1
      };
  },
  _hslColorToRGBA(d) {
    if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(d)) {
      const [t, ...i] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(d), l = Number(i[0]) / 360, f = Number(i[1]) / 100, h = Number(i[2]) / 100;
      let p, g, y;
      if (f === 0)
        return y = h * 255, {
          r: Math.round(y),
          g: Math.round(y),
          b: Math.round(y),
          a: 1
        };
      h < 0.5 ? p = h * (1 + f) : p = h + f - h * f;
      const S = 2 * h - p, k = [0, 0, 0];
      for (let E = 0; E < 3; E++)
        g = l + 1 / 3 * -(E - 1), g < 0 && g++, g > 1 && g--, 6 * g < 1 ? y = S + (p - S) * 6 * g : 2 * g < 1 ? y = p : 3 * g < 2 ? y = S + (p - S) * (2 / 3 - g) * 6 : y = S, k[E] = y * 255;
      return {
        r: Math.round(k[0]),
        g: Math.round(k[1]),
        b: Math.round(k[2]),
        a: 1
      };
    }
  },
  haveIntersection(d, t) {
    return !(t.x > d.x + d.width || t.x + t.width < d.x || t.y > d.y + d.height || t.y + t.height < d.y);
  },
  cloneObject(d) {
    var t = {};
    for (var i in d)
      this._isPlainObject(d[i]) ? t[i] = this.cloneObject(d[i]) : this._isArray(d[i]) ? t[i] = this.cloneArray(d[i]) : t[i] = d[i];
    return t;
  },
  cloneArray(d) {
    return d.slice(0);
  },
  degToRad(d) {
    return d * lg;
  },
  radToDeg(d) {
    return d * og;
  },
  _degToRad(d) {
    return G.warn("Util._degToRad is removed. Please use public Util.degToRad instead."), G.degToRad(d);
  },
  _radToDeg(d) {
    return G.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead."), G.radToDeg(d);
  },
  _getRotation(d) {
    return ke.angleDeg ? G.radToDeg(d) : d;
  },
  _capitalize(d) {
    return d.charAt(0).toUpperCase() + d.slice(1);
  },
  throw(d) {
    throw new Error(Zh + d);
  },
  error(d) {
    console.error(Zh + d);
  },
  warn(d) {
    ke.showWarnings && console.warn(dg + d);
  },
  each(d, t) {
    for (var i in d)
      t(i, d[i]);
  },
  _inRange(d, t, i) {
    return t <= d && d < i;
  },
  _getProjectionToSegment(d, t, i, l, f, h) {
    var p, g, y, S = (d - i) * (d - i) + (t - l) * (t - l);
    if (S == 0)
      p = d, g = t, y = (f - i) * (f - i) + (h - l) * (h - l);
    else {
      var k = ((f - d) * (i - d) + (h - t) * (l - t)) / S;
      k < 0 ? (p = d, g = t, y = (d - f) * (d - f) + (t - h) * (t - h)) : k > 1 ? (p = i, g = l, y = (i - f) * (i - f) + (l - h) * (l - h)) : (p = d + k * (i - d), g = t + k * (l - t), y = (p - f) * (p - f) + (g - h) * (g - h));
    }
    return [p, g, y];
  },
  _getProjectionToLine(d, t, i) {
    var l = G.cloneObject(d), f = Number.MAX_VALUE;
    return t.forEach(function(h, p) {
      if (!(!i && p === t.length - 1)) {
        var g = t[(p + 1) % t.length], y = G._getProjectionToSegment(h.x, h.y, g.x, g.y, d.x, d.y), S = y[0], k = y[1], E = y[2];
        E < f && (l.x = S, l.y = k, f = E);
      }
    }), l;
  },
  _prepareArrayForTween(d, t, i) {
    var l, f = [], h = [];
    if (d.length > t.length) {
      var p = t;
      t = d, d = p;
    }
    for (l = 0; l < d.length; l += 2)
      f.push({
        x: d[l],
        y: d[l + 1]
      });
    for (l = 0; l < t.length; l += 2)
      h.push({
        x: t[l],
        y: t[l + 1]
      });
    var g = [];
    return h.forEach(function(y) {
      var S = G._getProjectionToLine(y, f, i);
      g.push(S.x), g.push(S.y);
    }), g;
  },
  _prepareToStringify(d) {
    var t;
    d.visitedByCircularReferenceRemoval = !0;
    for (var i in d)
      if (d.hasOwnProperty(i) && d[i] && typeof d[i] == "object") {
        if (t = Object.getOwnPropertyDescriptor(d, i), d[i].visitedByCircularReferenceRemoval || G._isElement(d[i]))
          if (t.configurable)
            delete d[i];
          else
            return null;
        else if (G._prepareToStringify(d[i]) === null)
          if (t.configurable)
            delete d[i];
          else
            return null;
      }
    return delete d.visitedByCircularReferenceRemoval, d;
  },
  _assign(d, t) {
    for (var i in t)
      d[i] = t[i];
    return d;
  },
  _getFirstPointerId(d) {
    return d.touches ? d.changedTouches[0].identifier : d.pointerId || 999;
  },
  releaseCanvas(...d) {
    ke.releaseCanvasOnDestroy && d.forEach((t) => {
      t.width = 0, t.height = 0;
    });
  },
  drawRoundedRectPath(d, t, i, l) {
    let f = 0, h = 0, p = 0, g = 0;
    typeof l == "number" ? f = h = p = g = Math.min(l, t / 2, i / 2) : (f = Math.min(l[0] || 0, t / 2, i / 2), h = Math.min(l[1] || 0, t / 2, i / 2), g = Math.min(l[2] || 0, t / 2, i / 2), p = Math.min(l[3] || 0, t / 2, i / 2)), d.moveTo(f, 0), d.lineTo(t - h, 0), d.arc(t - h, h, h, Math.PI * 3 / 2, 0, !1), d.lineTo(t, i - g), d.arc(t - g, i - g, g, 0, Math.PI / 2, !1), d.lineTo(p, i), d.arc(p, i - p, p, Math.PI / 2, Math.PI, !1), d.lineTo(0, f), d.arc(f, f, f, Math.PI, Math.PI * 3 / 2, !1);
  }
};
function Aa(d) {
  return G._isString(d) ? '"' + d + '"' : Object.prototype.toString.call(d) === "[object Number]" || G._isBoolean(d) ? d : Object.prototype.toString.call(d);
}
function Ac(d) {
  return d > 255 ? 255 : d < 0 ? 0 : Math.round(d);
}
function fe() {
  if (ke.isUnminified)
    return function(d, t) {
      return G._isNumber(d) || G.warn(Aa(d) + ' is a not valid value for "' + t + '" attribute. The value should be a number.'), d;
    };
}
function Ud(d) {
  if (ke.isUnminified)
    return function(t, i) {
      let l = G._isNumber(t), f = G._isArray(t) && t.length == d;
      return !l && !f && G.warn(Aa(t) + ' is a not valid value for "' + i + '" attribute. The value should be a number or Array<number>(' + d + ")"), t;
    };
}
function Hd() {
  if (ke.isUnminified)
    return function(d, t) {
      var i = G._isNumber(d), l = d === "auto";
      return i || l || G.warn(Aa(d) + ' is a not valid value for "' + t + '" attribute. The value should be a number or "auto".'), d;
    };
}
function zl() {
  if (ke.isUnminified)
    return function(d, t) {
      return G._isString(d) || G.warn(Aa(d) + ' is a not valid value for "' + t + '" attribute. The value should be a string.'), d;
    };
}
function Oc() {
  if (ke.isUnminified)
    return function(d, t) {
      const i = G._isString(d), l = Object.prototype.toString.call(d) === "[object CanvasGradient]" || d && d.addColorStop;
      return i || l || G.warn(Aa(d) + ' is a not valid value for "' + t + '" attribute. The value should be a string or a native gradient.'), d;
    };
}
function gg() {
  if (ke.isUnminified)
    return function(d, t) {
      const i = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
      return i && d instanceof i || (G._isArray(d) ? d.forEach(function(l) {
        G._isNumber(l) || G.warn('"' + t + '" attribute has non numeric element ' + l + ". Make sure that all elements are numbers.");
      }) : G.warn(Aa(d) + ' is a not valid value for "' + t + '" attribute. The value should be a array of numbers.')), d;
    };
}
function Rr() {
  if (ke.isUnminified)
    return function(d, t) {
      var i = d === !0 || d === !1;
      return i || G.warn(Aa(d) + ' is a not valid value for "' + t + '" attribute. The value should be a boolean.'), d;
    };
}
function vg(d) {
  if (ke.isUnminified)
    return function(t, i) {
      return t == null || G.isObject(t) || G.warn(Aa(t) + ' is a not valid value for "' + i + '" attribute. The value should be an object with properties ' + d), t;
    };
}
var Do = "get", Fo = "set";
const L = {
  addGetterSetter(d, t, i, l, f) {
    L.addGetter(d, t, i), L.addSetter(d, t, l, f), L.addOverloadedGetterSetter(d, t);
  },
  addGetter(d, t, i) {
    var l = Do + G._capitalize(t);
    d.prototype[l] = d.prototype[l] || function() {
      var f = this.attrs[t];
      return f === void 0 ? i : f;
    };
  },
  addSetter(d, t, i, l) {
    var f = Fo + G._capitalize(t);
    d.prototype[f] || L.overWriteSetter(d, t, i, l);
  },
  overWriteSetter(d, t, i, l) {
    var f = Fo + G._capitalize(t);
    d.prototype[f] = function(h) {
      return i && h !== void 0 && h !== null && (h = i.call(this, h, t)), this._setAttr(t, h), l && l.call(this), this;
    };
  },
  addComponentsGetterSetter(d, t, i, l, f) {
    var h = i.length, p = G._capitalize, g = Do + p(t), y = Fo + p(t), S, k;
    d.prototype[g] = function() {
      var x = {};
      for (S = 0; S < h; S++)
        k = i[S], x[k] = this.getAttr(t + p(k));
      return x;
    };
    var E = vg(i);
    d.prototype[y] = function(x) {
      var N = this.attrs[t], P;
      l && (x = l.call(this, x)), E && E.call(this, x, t);
      for (P in x)
        x.hasOwnProperty(P) && this._setAttr(t + p(P), x[P]);
      return x || i.forEach((B) => {
        this._setAttr(t + p(B), void 0);
      }), this._fireChangeEvent(t, N, x), f && f.call(this), this;
    }, L.addOverloadedGetterSetter(d, t);
  },
  addOverloadedGetterSetter(d, t) {
    var i = G._capitalize(t), l = Fo + i, f = Do + i;
    d.prototype[t] = function() {
      return arguments.length ? (this[l](arguments[0]), this) : this[f]();
    };
  },
  addDeprecatedGetterSetter(d, t, i, l) {
    G.error("Adding deprecated " + t);
    var f = Do + G._capitalize(t), h = t + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
    d.prototype[f] = function() {
      G.error(h);
      var p = this.attrs[t];
      return p === void 0 ? i : p;
    }, L.addSetter(d, t, l, function() {
      G.error(h);
    }), L.addOverloadedGetterSetter(d, t);
  },
  backCompat(d, t) {
    G.each(t, function(i, l) {
      var f = d.prototype[l], h = Do + G._capitalize(i), p = Fo + G._capitalize(i);
      function g() {
        f.apply(this, arguments), G.error('"' + i + '" method is deprecated and will be removed soon. Use ""' + l + '" instead.');
      }
      d.prototype[i] = g, d.prototype[h] = g, d.prototype[p] = g;
    });
  },
  afterSetFilter() {
    this._filterUpToDate = !1;
  }
};
function mg(d) {
  var t = [], i = d.length, l = G, f, h;
  for (f = 0; f < i; f++)
    h = d[f], l._isNumber(h) ? h = Math.round(h * 1e3) / 1e3 : l._isString(h) || (h = h + ""), t.push(h);
  return t;
}
var $h = ",", yg = "(", _g = ")", Sg = "([", wg = "])", Cg = ";", kg = "()", xg = "=", bh = [
  "arc",
  "arcTo",
  "beginPath",
  "bezierCurveTo",
  "clearRect",
  "clip",
  "closePath",
  "createLinearGradient",
  "createPattern",
  "createRadialGradient",
  "drawImage",
  "ellipse",
  "fill",
  "fillText",
  "getImageData",
  "createImageData",
  "lineTo",
  "moveTo",
  "putImageData",
  "quadraticCurveTo",
  "rect",
  "restore",
  "rotate",
  "save",
  "scale",
  "setLineDash",
  "setTransform",
  "stroke",
  "strokeText",
  "transform",
  "translate"
], Eg = [
  "fillStyle",
  "strokeStyle",
  "shadowColor",
  "shadowBlur",
  "shadowOffsetX",
  "shadowOffsetY",
  "lineCap",
  "lineDashOffset",
  "lineJoin",
  "lineWidth",
  "miterLimit",
  "font",
  "textAlign",
  "textBaseline",
  "globalAlpha",
  "globalCompositeOperation",
  "imageSmoothingEnabled"
];
const Pg = 100;
class Tf {
  constructor(t) {
    this.canvas = t, ke.enableTrace && (this.traceArr = [], this._enableTrace());
  }
  fillShape(t) {
    t.fillEnabled() && this._fill(t);
  }
  _fill(t) {
  }
  strokeShape(t) {
    t.hasStroke() && this._stroke(t);
  }
  _stroke(t) {
  }
  fillStrokeShape(t) {
    t.attrs.fillAfterStrokeEnabled ? (this.strokeShape(t), this.fillShape(t)) : (this.fillShape(t), this.strokeShape(t));
  }
  getTrace(t, i) {
    var l = this.traceArr, f = l.length, h = "", p, g, y, S;
    for (p = 0; p < f; p++)
      g = l[p], y = g.method, y ? (S = g.args, h += y, t ? h += kg : G._isArray(S[0]) ? h += Sg + S.join($h) + wg : (i && (S = S.map((k) => typeof k == "number" ? Math.floor(k) : k)), h += yg + S.join($h) + _g)) : (h += g.property, t || (h += xg + g.val)), h += Cg;
    return h;
  }
  clearTrace() {
    this.traceArr = [];
  }
  _trace(t) {
    var i = this.traceArr, l;
    i.push(t), l = i.length, l >= Pg && i.shift();
  }
  reset() {
    var t = this.getCanvas().getPixelRatio();
    this.setTransform(1 * t, 0, 0, 1 * t, 0, 0);
  }
  getCanvas() {
    return this.canvas;
  }
  clear(t) {
    var i = this.getCanvas();
    t ? this.clearRect(t.x || 0, t.y || 0, t.width || 0, t.height || 0) : this.clearRect(0, 0, i.getWidth() / i.pixelRatio, i.getHeight() / i.pixelRatio);
  }
  _applyLineCap(t) {
    const i = t.attrs.lineCap;
    i && this.setAttr("lineCap", i);
  }
  _applyOpacity(t) {
    var i = t.getAbsoluteOpacity();
    i !== 1 && this.setAttr("globalAlpha", i);
  }
  _applyLineJoin(t) {
    const i = t.attrs.lineJoin;
    i && this.setAttr("lineJoin", i);
  }
  setAttr(t, i) {
    this._context[t] = i;
  }
  arc(t, i, l, f, h, p) {
    this._context.arc(t, i, l, f, h, p);
  }
  arcTo(t, i, l, f, h) {
    this._context.arcTo(t, i, l, f, h);
  }
  beginPath() {
    this._context.beginPath();
  }
  bezierCurveTo(t, i, l, f, h, p) {
    this._context.bezierCurveTo(t, i, l, f, h, p);
  }
  clearRect(t, i, l, f) {
    this._context.clearRect(t, i, l, f);
  }
  clip() {
    this._context.clip();
  }
  closePath() {
    this._context.closePath();
  }
  createImageData(t, i) {
    var l = arguments;
    if (l.length === 2)
      return this._context.createImageData(t, i);
    if (l.length === 1)
      return this._context.createImageData(t);
  }
  createLinearGradient(t, i, l, f) {
    return this._context.createLinearGradient(t, i, l, f);
  }
  createPattern(t, i) {
    return this._context.createPattern(t, i);
  }
  createRadialGradient(t, i, l, f, h, p) {
    return this._context.createRadialGradient(t, i, l, f, h, p);
  }
  drawImage(t, i, l, f, h, p, g, y, S) {
    var k = arguments, E = this._context;
    k.length === 3 ? E.drawImage(t, i, l) : k.length === 5 ? E.drawImage(t, i, l, f, h) : k.length === 9 && E.drawImage(t, i, l, f, h, p, g, y, S);
  }
  ellipse(t, i, l, f, h, p, g, y) {
    this._context.ellipse(t, i, l, f, h, p, g, y);
  }
  isPointInPath(t, i, l, f) {
    return l ? this._context.isPointInPath(l, t, i, f) : this._context.isPointInPath(t, i, f);
  }
  fill(t) {
    t ? this._context.fill(t) : this._context.fill();
  }
  fillRect(t, i, l, f) {
    this._context.fillRect(t, i, l, f);
  }
  strokeRect(t, i, l, f) {
    this._context.strokeRect(t, i, l, f);
  }
  fillText(t, i, l, f) {
    f ? this._context.fillText(t, i, l, f) : this._context.fillText(t, i, l);
  }
  measureText(t) {
    return this._context.measureText(t);
  }
  getImageData(t, i, l, f) {
    return this._context.getImageData(t, i, l, f);
  }
  lineTo(t, i) {
    this._context.lineTo(t, i);
  }
  moveTo(t, i) {
    this._context.moveTo(t, i);
  }
  rect(t, i, l, f) {
    this._context.rect(t, i, l, f);
  }
  putImageData(t, i, l) {
    this._context.putImageData(t, i, l);
  }
  quadraticCurveTo(t, i, l, f) {
    this._context.quadraticCurveTo(t, i, l, f);
  }
  restore() {
    this._context.restore();
  }
  rotate(t) {
    this._context.rotate(t);
  }
  save() {
    this._context.save();
  }
  scale(t, i) {
    this._context.scale(t, i);
  }
  setLineDash(t) {
    this._context.setLineDash ? this._context.setLineDash(t) : "mozDash" in this._context ? this._context.mozDash = t : "webkitLineDash" in this._context && (this._context.webkitLineDash = t);
  }
  getLineDash() {
    return this._context.getLineDash();
  }
  setTransform(t, i, l, f, h, p) {
    this._context.setTransform(t, i, l, f, h, p);
  }
  stroke(t) {
    t ? this._context.stroke(t) : this._context.stroke();
  }
  strokeText(t, i, l, f) {
    this._context.strokeText(t, i, l, f);
  }
  transform(t, i, l, f, h, p) {
    this._context.transform(t, i, l, f, h, p);
  }
  translate(t, i) {
    this._context.translate(t, i);
  }
  _enableTrace() {
    var t = this, i = bh.length, l = this.setAttr, f, h, p = function(g) {
      var y = t[g], S;
      t[g] = function() {
        return h = mg(Array.prototype.slice.call(arguments, 0)), S = y.apply(t, arguments), t._trace({
          method: g,
          args: h
        }), S;
      };
    };
    for (f = 0; f < i; f++)
      p(bh[f]);
    t.setAttr = function() {
      l.apply(t, arguments);
      var g = arguments[0], y = arguments[1];
      (g === "shadowOffsetX" || g === "shadowOffsetY" || g === "shadowBlur") && (y = y / this.canvas.getPixelRatio()), t._trace({
        property: g,
        val: y
      });
    };
  }
  _applyGlobalCompositeOperation(t) {
    const i = t.attrs.globalCompositeOperation;
    var l = !i || i === "source-over";
    l || this.setAttr("globalCompositeOperation", i);
  }
}
Eg.forEach(function(d) {
  Object.defineProperty(Tf.prototype, d, {
    get() {
      return this._context[d];
    },
    set(t) {
      this._context[d] = t;
    }
  });
});
class Tg extends Tf {
  constructor(t) {
    super(t), this._context = t._canvas.getContext("2d");
  }
  _fillColor(t) {
    var i = t.fill();
    this.setAttr("fillStyle", i), t._fillFunc(this);
  }
  _fillPattern(t) {
    this.setAttr("fillStyle", t._getFillPattern()), t._fillFunc(this);
  }
  _fillLinearGradient(t) {
    var i = t._getLinearGradient();
    i && (this.setAttr("fillStyle", i), t._fillFunc(this));
  }
  _fillRadialGradient(t) {
    const i = t._getRadialGradient();
    i && (this.setAttr("fillStyle", i), t._fillFunc(this));
  }
  _fill(t) {
    const i = t.fill(), l = t.getFillPriority();
    if (i && l === "color") {
      this._fillColor(t);
      return;
    }
    const f = t.getFillPatternImage();
    if (f && l === "pattern") {
      this._fillPattern(t);
      return;
    }
    const h = t.getFillLinearGradientColorStops();
    if (h && l === "linear-gradient") {
      this._fillLinearGradient(t);
      return;
    }
    const p = t.getFillRadialGradientColorStops();
    if (p && l === "radial-gradient") {
      this._fillRadialGradient(t);
      return;
    }
    i ? this._fillColor(t) : f ? this._fillPattern(t) : h ? this._fillLinearGradient(t) : p && this._fillRadialGradient(t);
  }
  _strokeLinearGradient(t) {
    const i = t.getStrokeLinearGradientStartPoint(), l = t.getStrokeLinearGradientEndPoint(), f = t.getStrokeLinearGradientColorStops(), h = this.createLinearGradient(i.x, i.y, l.x, l.y);
    if (f) {
      for (var p = 0; p < f.length; p += 2)
        h.addColorStop(f[p], f[p + 1]);
      this.setAttr("strokeStyle", h);
    }
  }
  _stroke(t) {
    var i = t.dash(), l = t.getStrokeScaleEnabled();
    if (t.hasStroke()) {
      if (!l) {
        this.save();
        var f = this.getCanvas().getPixelRatio();
        this.setTransform(f, 0, 0, f, 0, 0);
      }
      this._applyLineCap(t), i && t.dashEnabled() && (this.setLineDash(i), this.setAttr("lineDashOffset", t.dashOffset())), this.setAttr("lineWidth", t.strokeWidth()), t.getShadowForStrokeEnabled() || this.setAttr("shadowColor", "rgba(0,0,0,0)");
      var h = t.getStrokeLinearGradientColorStops();
      h ? this._strokeLinearGradient(t) : this.setAttr("strokeStyle", t.stroke()), t._strokeFunc(this), l || this.restore();
    }
  }
  _applyShadow(t) {
    var i, l, f, h = (i = t.getShadowRGBA()) !== null && i !== void 0 ? i : "black", p = (l = t.getShadowBlur()) !== null && l !== void 0 ? l : 5, g = (f = t.getShadowOffset()) !== null && f !== void 0 ? f : {
      x: 0,
      y: 0
    }, y = t.getAbsoluteScale(), S = this.canvas.getPixelRatio(), k = y.x * S, E = y.y * S;
    this.setAttr("shadowColor", h), this.setAttr("shadowBlur", p * Math.min(Math.abs(k), Math.abs(E))), this.setAttr("shadowOffsetX", g.x * k), this.setAttr("shadowOffsetY", g.y * E);
  }
}
class Rg extends Tf {
  constructor(t) {
    super(t), this._context = t._canvas.getContext("2d", {
      willReadFrequently: !0
    });
  }
  _fill(t) {
    this.save(), this.setAttr("fillStyle", t.colorKey), t._fillFuncHit(this), this.restore();
  }
  strokeShape(t) {
    t.hasHitStroke() && this._stroke(t);
  }
  _stroke(t) {
    if (t.hasHitStroke()) {
      const h = t.getStrokeScaleEnabled();
      if (!h) {
        this.save();
        var i = this.getCanvas().getPixelRatio();
        this.setTransform(i, 0, 0, i, 0, 0);
      }
      this._applyLineCap(t);
      var l = t.hitStrokeWidth(), f = l === "auto" ? t.strokeWidth() : l;
      this.setAttr("lineWidth", f), this.setAttr("strokeStyle", t.colorKey), t._strokeFuncHit(this), h || this.restore();
    }
  }
}
var ff;
function Mg() {
  if (ff)
    return ff;
  var d = G.createCanvasElement(), t = d.getContext("2d");
  return ff = function() {
    var i = ke._global.devicePixelRatio || 1, l = t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
    return i / l;
  }(), G.releaseCanvas(d), ff;
}
class Rf {
  constructor(t) {
    this.pixelRatio = 1, this.width = 0, this.height = 0, this.isCache = !1;
    var i = t || {}, l = i.pixelRatio || ke.pixelRatio || Mg();
    this.pixelRatio = l, this._canvas = G.createCanvasElement(), this._canvas.style.padding = "0", this._canvas.style.margin = "0", this._canvas.style.border = "0", this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = "0", this._canvas.style.left = "0";
  }
  getContext() {
    return this.context;
  }
  getPixelRatio() {
    return this.pixelRatio;
  }
  setPixelRatio(t) {
    var i = this.pixelRatio;
    this.pixelRatio = t, this.setSize(this.getWidth() / i, this.getHeight() / i);
  }
  setWidth(t) {
    this.width = this._canvas.width = t * this.pixelRatio, this._canvas.style.width = t + "px";
    var i = this.pixelRatio, l = this.getContext()._context;
    l.scale(i, i);
  }
  setHeight(t) {
    this.height = this._canvas.height = t * this.pixelRatio, this._canvas.style.height = t + "px";
    var i = this.pixelRatio, l = this.getContext()._context;
    l.scale(i, i);
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  setSize(t, i) {
    this.setWidth(t || 0), this.setHeight(i || 0);
  }
  toDataURL(t, i) {
    try {
      return this._canvas.toDataURL(t, i);
    } catch (l) {
      try {
        return this._canvas.toDataURL();
      } catch (f) {
        return G.error("Unable to get data URL. " + f.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."), "";
      }
    }
  }
}
L.addGetterSetter(Rf, "pixelRatio", void 0, fe());
class Ol extends Rf {
  constructor(t = { width: 0, height: 0 }) {
    super(t), this.context = new Tg(this), this.setSize(t.width, t.height);
  }
}
class jd extends Rf {
  constructor(t = { width: 0, height: 0 }) {
    super(t), this.hitCanvas = !0, this.context = new Rg(this), this.setSize(t.width, t.height);
  }
}
const Ze = {
  get isDragging() {
    var d = !1;
    return Ze._dragElements.forEach((t) => {
      t.dragStatus === "dragging" && (d = !0);
    }), d;
  },
  justDragged: !1,
  get node() {
    var d;
    return Ze._dragElements.forEach((t) => {
      d = t.node;
    }), d;
  },
  _dragElements: /* @__PURE__ */ new Map(),
  _drag(d) {
    const t = [];
    Ze._dragElements.forEach((i, l) => {
      const { node: f } = i, h = f.getStage();
      h.setPointersPositions(d), i.pointerId === void 0 && (i.pointerId = G._getFirstPointerId(d));
      const p = h._changedPointerPositions.find((S) => S.id === i.pointerId);
      if (p) {
        if (i.dragStatus !== "dragging") {
          var g = f.dragDistance(), y = Math.max(Math.abs(p.x - i.startPointerPos.x), Math.abs(p.y - i.startPointerPos.y));
          if (y < g || (f.startDrag({ evt: d }), !f.isDragging()))
            return;
        }
        f._setDragPosition(d, i), t.push(f);
      }
    }), t.forEach((i) => {
      i.fire("dragmove", {
        type: "dragmove",
        target: i,
        evt: d
      }, !0);
    });
  },
  _endDragBefore(d) {
    const t = [];
    Ze._dragElements.forEach((i) => {
      const { node: l } = i, f = l.getStage();
      if (d && f.setPointersPositions(d), !f._changedPointerPositions.find((g) => g.id === i.pointerId))
        return;
      (i.dragStatus === "dragging" || i.dragStatus === "stopped") && (Ze.justDragged = !0, ke._mouseListenClick = !1, ke._touchListenClick = !1, ke._pointerListenClick = !1, i.dragStatus = "stopped");
      const p = i.node.getLayer() || i.node instanceof ke.Stage && i.node;
      p && t.indexOf(p) === -1 && t.push(p);
    }), t.forEach((i) => {
      i.draw();
    });
  },
  _endDragAfter(d) {
    Ze._dragElements.forEach((t, i) => {
      t.dragStatus === "stopped" && t.node.fire("dragend", {
        type: "dragend",
        target: t.node,
        evt: d
      }, !0), t.dragStatus !== "dragging" && Ze._dragElements.delete(i);
    });
  }
};
ke.isBrowser && (window.addEventListener("mouseup", Ze._endDragBefore, !0), window.addEventListener("touchend", Ze._endDragBefore, !0), window.addEventListener("mousemove", Ze._drag), window.addEventListener("touchmove", Ze._drag), window.addEventListener("mouseup", Ze._endDragAfter, !1), window.addEventListener("touchend", Ze._endDragAfter, !1));
var Sf = "absoluteOpacity", df = "allEventListeners", Ni = "absoluteTransform", ec = "absoluteScale", ys = "canvas", Lg = "Change", Ng = "children", Ag = "konva", Nd = "listening", tc = "mouseenter", nc = "mouseleave", rc = "set", ic = "Shape", wf = " ", ac = "stage", Na = "transform", Og = "Stage", Ad = "visible", Ig = [
  "xChange.konva",
  "yChange.konva",
  "scaleXChange.konva",
  "scaleYChange.konva",
  "skewXChange.konva",
  "skewYChange.konva",
  "rotationChange.konva",
  "offsetXChange.konva",
  "offsetYChange.konva",
  "transformsEnabledChange.konva"
].join(wf);
let zg = 1;
class ue {
  constructor(t) {
    this._id = zg++, this.eventListeners = {}, this.attrs = {}, this.index = 0, this._allEventListeners = null, this.parent = null, this._cache = /* @__PURE__ */ new Map(), this._attachedDepsListeners = /* @__PURE__ */ new Map(), this._lastPos = null, this._batchingTransformChange = !1, this._needClearTransformCache = !1, this._filterUpToDate = !1, this._isUnderCache = !1, this._dragEventId = null, this._shouldFireChangeEvents = !1, this.setAttrs(t), this._shouldFireChangeEvents = !0;
  }
  hasChildren() {
    return !1;
  }
  _clearCache(t) {
    (t === Na || t === Ni) && this._cache.get(t) ? this._cache.get(t).dirty = !0 : t ? this._cache.delete(t) : this._cache.clear();
  }
  _getCache(t, i) {
    var l = this._cache.get(t), f = t === Na || t === Ni, h = l === void 0 || f && l.dirty === !0;
    return h && (l = i.call(this), this._cache.set(t, l)), l;
  }
  _calculate(t, i, l) {
    if (!this._attachedDepsListeners.get(t)) {
      const f = i.map((h) => h + "Change.konva").join(wf);
      this.on(f, () => {
        this._clearCache(t);
      }), this._attachedDepsListeners.set(t, !0);
    }
    return this._getCache(t, l);
  }
  _getCanvasCache() {
    return this._cache.get(ys);
  }
  _clearSelfAndDescendantCache(t) {
    this._clearCache(t), t === Ni && this.fire("absoluteTransformChange");
  }
  clearCache() {
    if (this._cache.has(ys)) {
      const { scene: t, filter: i, hit: l } = this._cache.get(ys);
      G.releaseCanvas(t, i, l), this._cache.delete(ys);
    }
    return this._clearSelfAndDescendantCache(), this._requestDraw(), this;
  }
  cache(t) {
    var i = t || {}, l = {};
    (i.x === void 0 || i.y === void 0 || i.width === void 0 || i.height === void 0) && (l = this.getClientRect({
      skipTransform: !0,
      relativeTo: this.getParent()
    }));
    var f = Math.ceil(i.width || l.width), h = Math.ceil(i.height || l.height), p = i.pixelRatio, g = i.x === void 0 ? Math.floor(l.x) : i.x, y = i.y === void 0 ? Math.floor(l.y) : i.y, S = i.offset || 0, k = i.drawBorder || !1, E = i.hitCanvasPixelRatio || 1;
    if (!f || !h) {
      G.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
      return;
    }
    f += S * 2 + 1, h += S * 2 + 1, g -= S, y -= S;
    var x = new Ol({
      pixelRatio: p,
      width: f,
      height: h
    }), N = new Ol({
      pixelRatio: p,
      width: 0,
      height: 0
    }), P = new jd({
      pixelRatio: E,
      width: f,
      height: h
    }), B = x.getContext(), z = P.getContext();
    return P.isCache = !0, x.isCache = !0, this._cache.delete(ys), this._filterUpToDate = !1, i.imageSmoothingEnabled === !1 && (x.getContext()._context.imageSmoothingEnabled = !1, N.getContext()._context.imageSmoothingEnabled = !1), B.save(), z.save(), B.translate(-g, -y), z.translate(-g, -y), this._isUnderCache = !0, this._clearSelfAndDescendantCache(Sf), this._clearSelfAndDescendantCache(ec), this.drawScene(x, this), this.drawHit(P, this), this._isUnderCache = !1, B.restore(), z.restore(), k && (B.save(), B.beginPath(), B.rect(0, 0, f, h), B.closePath(), B.setAttr("strokeStyle", "red"), B.setAttr("lineWidth", 5), B.stroke(), B.restore()), this._cache.set(ys, {
      scene: x,
      filter: N,
      hit: P,
      x: g,
      y
    }), this._requestDraw(), this;
  }
  isCached() {
    return this._cache.has(ys);
  }
  getClientRect(t) {
    throw new Error('abstract "getClientRect" method call');
  }
  _transformedRect(t, i) {
    var l = [
      { x: t.x, y: t.y },
      { x: t.x + t.width, y: t.y },
      { x: t.x + t.width, y: t.y + t.height },
      { x: t.x, y: t.y + t.height }
    ], f, h, p, g, y = this.getAbsoluteTransform(i);
    return l.forEach(function(S) {
      var k = y.point(S);
      f === void 0 && (f = p = k.x, h = g = k.y), f = Math.min(f, k.x), h = Math.min(h, k.y), p = Math.max(p, k.x), g = Math.max(g, k.y);
    }), {
      x: f,
      y: h,
      width: p - f,
      height: g - h
    };
  }
  _drawCachedSceneCanvas(t) {
    t.save(), t._applyOpacity(this), t._applyGlobalCompositeOperation(this);
    const i = this._getCanvasCache();
    t.translate(i.x, i.y);
    var l = this._getCachedSceneCanvas(), f = l.pixelRatio;
    t.drawImage(l._canvas, 0, 0, l.width / f, l.height / f), t.restore();
  }
  _drawCachedHitCanvas(t) {
    var i = this._getCanvasCache(), l = i.hit;
    t.save(), t.translate(i.x, i.y), t.drawImage(l._canvas, 0, 0, l.width / l.pixelRatio, l.height / l.pixelRatio), t.restore();
  }
  _getCachedSceneCanvas() {
    var t = this.filters(), i = this._getCanvasCache(), l = i.scene, f = i.filter, h = f.getContext(), p, g, y, S;
    if (t) {
      if (!this._filterUpToDate) {
        var k = l.pixelRatio;
        f.setSize(l.width / l.pixelRatio, l.height / l.pixelRatio);
        try {
          for (p = t.length, h.clear(), h.drawImage(l._canvas, 0, 0, l.getWidth() / k, l.getHeight() / k), g = h.getImageData(0, 0, f.getWidth(), f.getHeight()), y = 0; y < p; y++) {
            if (S = t[y], typeof S != "function") {
              G.error("Filter should be type of function, but got " + typeof S + " instead. Please check correct filters");
              continue;
            }
            S.call(this, g), h.putImageData(g, 0, 0);
          }
        } catch (E) {
          G.error("Unable to apply filter. " + E.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
        }
        this._filterUpToDate = !0;
      }
      return f;
    }
    return l;
  }
  on(t, i) {
    if (this._cache && this._cache.delete(df), arguments.length === 3)
      return this._delegate.apply(this, arguments);
    var l = t.split(wf), f = l.length, h, p, g, y, S;
    for (h = 0; h < f; h++)
      p = l[h], g = p.split("."), y = g[0], S = g[1] || "", this.eventListeners[y] || (this.eventListeners[y] = []), this.eventListeners[y].push({
        name: S,
        handler: i
      });
    return this;
  }
  off(t, i) {
    var l = (t || "").split(wf), f = l.length, h, p, g, y, S, k;
    if (this._cache && this._cache.delete(df), !t)
      for (p in this.eventListeners)
        this._off(p);
    for (h = 0; h < f; h++)
      if (g = l[h], y = g.split("."), S = y[0], k = y[1], S)
        this.eventListeners[S] && this._off(S, k, i);
      else
        for (p in this.eventListeners)
          this._off(p, k, i);
    return this;
  }
  dispatchEvent(t) {
    var i = {
      target: this,
      type: t.type,
      evt: t
    };
    return this.fire(t.type, i), this;
  }
  addEventListener(t, i) {
    return this.on(t, function(l) {
      i.call(this, l.evt);
    }), this;
  }
  removeEventListener(t) {
    return this.off(t), this;
  }
  _delegate(t, i, l) {
    var f = this;
    this.on(t, function(h) {
      for (var p = h.target.findAncestors(i, !0, f), g = 0; g < p.length; g++)
        h = G.cloneObject(h), h.currentTarget = p[g], l.call(p[g], h);
    });
  }
  remove() {
    return this.isDragging() && this.stopDrag(), Ze._dragElements.delete(this._id), this._remove(), this;
  }
  _clearCaches() {
    this._clearSelfAndDescendantCache(Ni), this._clearSelfAndDescendantCache(Sf), this._clearSelfAndDescendantCache(ec), this._clearSelfAndDescendantCache(ac), this._clearSelfAndDescendantCache(Ad), this._clearSelfAndDescendantCache(Nd);
  }
  _remove() {
    this._clearCaches();
    var t = this.getParent();
    t && t.children && (t.children.splice(this.index, 1), t._setChildrenIndices(), this.parent = null);
  }
  destroy() {
    return this.remove(), this.clearCache(), this;
  }
  getAttr(t) {
    var i = "get" + G._capitalize(t);
    return G._isFunction(this[i]) ? this[i]() : this.attrs[t];
  }
  getAncestors() {
    for (var t = this.getParent(), i = []; t; )
      i.push(t), t = t.getParent();
    return i;
  }
  getAttrs() {
    return this.attrs || {};
  }
  setAttrs(t) {
    return this._batchTransformChanges(() => {
      var i, l;
      if (!t)
        return this;
      for (i in t)
        i !== Ng && (l = rc + G._capitalize(i), G._isFunction(this[l]) ? this[l](t[i]) : this._setAttr(i, t[i]));
    }), this;
  }
  isListening() {
    return this._getCache(Nd, this._isListening);
  }
  _isListening(t) {
    if (!this.listening())
      return !1;
    const l = this.getParent();
    return l && l !== t && this !== t ? l._isListening(t) : !0;
  }
  isVisible() {
    return this._getCache(Ad, this._isVisible);
  }
  _isVisible(t) {
    if (!this.visible())
      return !1;
    const l = this.getParent();
    return l && l !== t && this !== t ? l._isVisible(t) : !0;
  }
  shouldDrawHit(t, i = !1) {
    if (t)
      return this._isVisible(t) && this._isListening(t);
    var l = this.getLayer(), f = !1;
    Ze._dragElements.forEach((p) => {
      p.dragStatus === "dragging" && (p.node.nodeType === "Stage" || p.node.getLayer() === l) && (f = !0);
    });
    var h = !i && !ke.hitOnDragEnabled && f;
    return this.isListening() && this.isVisible() && !h;
  }
  show() {
    return this.visible(!0), this;
  }
  hide() {
    return this.visible(!1), this;
  }
  getZIndex() {
    return this.index || 0;
  }
  getAbsoluteZIndex() {
    var t = this.getDepth(), i = this, l = 0, f, h, p, g;
    function y(S) {
      for (f = [], h = S.length, p = 0; p < h; p++)
        g = S[p], l++, g.nodeType !== ic && (f = f.concat(g.getChildren().slice())), g._id === i._id && (p = h);
      f.length > 0 && f[0].getDepth() <= t && y(f);
    }
    return i.nodeType !== Og && y(i.getStage().getChildren()), l;
  }
  getDepth() {
    for (var t = 0, i = this.parent; i; )
      t++, i = i.parent;
    return t;
  }
  _batchTransformChanges(t) {
    this._batchingTransformChange = !0, t(), this._batchingTransformChange = !1, this._needClearTransformCache && (this._clearCache(Na), this._clearSelfAndDescendantCache(Ni)), this._needClearTransformCache = !1;
  }
  setPosition(t) {
    return this._batchTransformChanges(() => {
      this.x(t.x), this.y(t.y);
    }), this;
  }
  getPosition() {
    return {
      x: this.x(),
      y: this.y()
    };
  }
  getRelativePointerPosition() {
    if (!this.getStage())
      return null;
    var t = this.getStage().getPointerPosition();
    if (!t)
      return null;
    var i = this.getAbsoluteTransform().copy();
    return i.invert(), i.point(t);
  }
  getAbsolutePosition(t) {
    let i = !1, l = this.parent;
    for (; l; ) {
      if (l.isCached()) {
        i = !0;
        break;
      }
      l = l.parent;
    }
    i && !t && (t = !0);
    var f = this.getAbsoluteTransform(t).getMatrix(), h = new jn(), p = this.offset();
    return h.m = f.slice(), h.translate(p.x, p.y), h.getTranslation();
  }
  setAbsolutePosition(t) {
    var i = this._clearTransform();
    this.attrs.x = i.x, this.attrs.y = i.y, delete i.x, delete i.y, this._clearCache(Na);
    var l = this._getAbsoluteTransform().copy();
    return l.invert(), l.translate(t.x, t.y), t = {
      x: this.attrs.x + l.getTranslation().x,
      y: this.attrs.y + l.getTranslation().y
    }, this._setTransform(i), this.setPosition({ x: t.x, y: t.y }), this._clearCache(Na), this._clearSelfAndDescendantCache(Ni), this;
  }
  _setTransform(t) {
    var i;
    for (i in t)
      this.attrs[i] = t[i];
  }
  _clearTransform() {
    var t = {
      x: this.x(),
      y: this.y(),
      rotation: this.rotation(),
      scaleX: this.scaleX(),
      scaleY: this.scaleY(),
      offsetX: this.offsetX(),
      offsetY: this.offsetY(),
      skewX: this.skewX(),
      skewY: this.skewY()
    };
    return this.attrs.x = 0, this.attrs.y = 0, this.attrs.rotation = 0, this.attrs.scaleX = 1, this.attrs.scaleY = 1, this.attrs.offsetX = 0, this.attrs.offsetY = 0, this.attrs.skewX = 0, this.attrs.skewY = 0, t;
  }
  move(t) {
    var i = t.x, l = t.y, f = this.x(), h = this.y();
    return i !== void 0 && (f += i), l !== void 0 && (h += l), this.setPosition({ x: f, y: h }), this;
  }
  _eachAncestorReverse(t, i) {
    var l = [], f = this.getParent(), h, p;
    if (!(i && i._id === this._id)) {
      for (l.unshift(this); f && (!i || f._id !== i._id); )
        l.unshift(f), f = f.parent;
      for (h = l.length, p = 0; p < h; p++)
        t(l[p]);
    }
  }
  rotate(t) {
    return this.rotation(this.rotation() + t), this;
  }
  moveToTop() {
    if (!this.parent)
      return G.warn("Node has no parent. moveToTop function is ignored."), !1;
    var t = this.index, i = this.parent.getChildren().length;
    return t < i - 1 ? (this.parent.children.splice(t, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveUp() {
    if (!this.parent)
      return G.warn("Node has no parent. moveUp function is ignored."), !1;
    var t = this.index, i = this.parent.getChildren().length;
    return t < i - 1 ? (this.parent.children.splice(t, 1), this.parent.children.splice(t + 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveDown() {
    if (!this.parent)
      return G.warn("Node has no parent. moveDown function is ignored."), !1;
    var t = this.index;
    return t > 0 ? (this.parent.children.splice(t, 1), this.parent.children.splice(t - 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveToBottom() {
    if (!this.parent)
      return G.warn("Node has no parent. moveToBottom function is ignored."), !1;
    var t = this.index;
    return t > 0 ? (this.parent.children.splice(t, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0) : !1;
  }
  setZIndex(t) {
    if (!this.parent)
      return G.warn("Node has no parent. zIndex parameter is ignored."), this;
    (t < 0 || t >= this.parent.children.length) && G.warn("Unexpected value " + t + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
    var i = this.index;
    return this.parent.children.splice(i, 1), this.parent.children.splice(t, 0, this), this.parent._setChildrenIndices(), this;
  }
  getAbsoluteOpacity() {
    return this._getCache(Sf, this._getAbsoluteOpacity);
  }
  _getAbsoluteOpacity() {
    var t = this.opacity(), i = this.getParent();
    return i && !i._isUnderCache && (t *= i.getAbsoluteOpacity()), t;
  }
  moveTo(t) {
    return this.getParent() !== t && (this._remove(), t.add(this)), this;
  }
  toObject() {
    var t = {}, i = this.getAttrs(), l, f, h, p, g;
    t.attrs = {};
    for (l in i)
      f = i[l], g = G.isObject(f) && !G._isPlainObject(f) && !G._isArray(f), !g && (h = typeof this[l] == "function" && this[l], delete i[l], p = h ? h.call(this) : null, i[l] = f, p !== f && (t.attrs[l] = f));
    return t.className = this.getClassName(), G._prepareToStringify(t);
  }
  toJSON() {
    return JSON.stringify(this.toObject());
  }
  getParent() {
    return this.parent;
  }
  findAncestors(t, i, l) {
    var f = [];
    i && this._isMatch(t) && f.push(this);
    for (var h = this.parent; h; ) {
      if (h === l)
        return f;
      h._isMatch(t) && f.push(h), h = h.parent;
    }
    return f;
  }
  isAncestorOf(t) {
    return !1;
  }
  findAncestor(t, i, l) {
    return this.findAncestors(t, i, l)[0];
  }
  _isMatch(t) {
    if (!t)
      return !1;
    if (typeof t == "function")
      return t(this);
    var i = t.replace(/ /g, "").split(","), l = i.length, f, h;
    for (f = 0; f < l; f++)
      if (h = i[f], G.isValidSelector(h) || (G.warn('Selector "' + h + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'), G.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'), G.warn("Konva is awesome, right?")), h.charAt(0) === "#") {
        if (this.id() === h.slice(1))
          return !0;
      } else if (h.charAt(0) === ".") {
        if (this.hasName(h.slice(1)))
          return !0;
      } else if (this.className === h || this.nodeType === h)
        return !0;
    return !1;
  }
  getLayer() {
    var t = this.getParent();
    return t ? t.getLayer() : null;
  }
  getStage() {
    return this._getCache(ac, this._getStage);
  }
  _getStage() {
    var t = this.getParent();
    if (t)
      return t.getStage();
  }
  fire(t, i = {}, l) {
    return i.target = i.target || this, l ? this._fireAndBubble(t, i) : this._fire(t, i), this;
  }
  getAbsoluteTransform(t) {
    return t ? this._getAbsoluteTransform(t) : this._getCache(Ni, this._getAbsoluteTransform);
  }
  _getAbsoluteTransform(t) {
    var i;
    if (t)
      return i = new jn(), this._eachAncestorReverse(function(f) {
        var h = f.transformsEnabled();
        h === "all" ? i.multiply(f.getTransform()) : h === "position" && i.translate(f.x() - f.offsetX(), f.y() - f.offsetY());
      }, t), i;
    i = this._cache.get(Ni) || new jn(), this.parent ? this.parent.getAbsoluteTransform().copyInto(i) : i.reset();
    var l = this.transformsEnabled();
    if (l === "all")
      i.multiply(this.getTransform());
    else if (l === "position") {
      const f = this.attrs.x || 0, h = this.attrs.y || 0, p = this.attrs.offsetX || 0, g = this.attrs.offsetY || 0;
      i.translate(f - p, h - g);
    }
    return i.dirty = !1, i;
  }
  getAbsoluteScale(t) {
    for (var i = this; i; )
      i._isUnderCache && (t = i), i = i.getParent();
    const f = this.getAbsoluteTransform(t).decompose();
    return {
      x: f.scaleX,
      y: f.scaleY
    };
  }
  getAbsoluteRotation() {
    return this.getAbsoluteTransform().decompose().rotation;
  }
  getTransform() {
    return this._getCache(Na, this._getTransform);
  }
  _getTransform() {
    var t, i, l = this._cache.get(Na) || new jn();
    l.reset();
    var f = this.x(), h = this.y(), p = ke.getAngle(this.rotation()), g = (t = this.attrs.scaleX) !== null && t !== void 0 ? t : 1, y = (i = this.attrs.scaleY) !== null && i !== void 0 ? i : 1, S = this.attrs.skewX || 0, k = this.attrs.skewY || 0, E = this.attrs.offsetX || 0, x = this.attrs.offsetY || 0;
    return (f !== 0 || h !== 0) && l.translate(f, h), p !== 0 && l.rotate(p), (S !== 0 || k !== 0) && l.skew(S, k), (g !== 1 || y !== 1) && l.scale(g, y), (E !== 0 || x !== 0) && l.translate(-1 * E, -1 * x), l.dirty = !1, l;
  }
  clone(t) {
    var i = G.cloneObject(this.attrs), l, f, h, p, g;
    for (l in t)
      i[l] = t[l];
    var y = new this.constructor(i);
    for (l in this.eventListeners)
      for (f = this.eventListeners[l], h = f.length, p = 0; p < h; p++)
        g = f[p], g.name.indexOf(Ag) < 0 && (y.eventListeners[l] || (y.eventListeners[l] = []), y.eventListeners[l].push(g));
    return y;
  }
  _toKonvaCanvas(t) {
    t = t || {};
    var i = this.getClientRect(), l = this.getStage(), f = t.x !== void 0 ? t.x : Math.floor(i.x), h = t.y !== void 0 ? t.y : Math.floor(i.y), p = t.pixelRatio || 1, g = new Ol({
      width: t.width || Math.ceil(i.width) || (l ? l.width() : 0),
      height: t.height || Math.ceil(i.height) || (l ? l.height() : 0),
      pixelRatio: p
    }), y = g.getContext();
    return t.imageSmoothingEnabled === !1 && (y._context.imageSmoothingEnabled = !1), y.save(), (f || h) && y.translate(-1 * f, -1 * h), this.drawScene(g), y.restore(), g;
  }
  toCanvas(t) {
    return this._toKonvaCanvas(t)._canvas;
  }
  toDataURL(t) {
    t = t || {};
    var i = t.mimeType || null, l = t.quality || null, f = this._toKonvaCanvas(t).toDataURL(i, l);
    return t.callback && t.callback(f), f;
  }
  toImage(t) {
    return new Promise((i, l) => {
      try {
        const f = t == null ? void 0 : t.callback;
        f && delete t.callback, G._urlToImage(this.toDataURL(t), function(h) {
          i(h), f == null || f(h);
        });
      } catch (f) {
        l(f);
      }
    });
  }
  toBlob(t) {
    return new Promise((i, l) => {
      try {
        const f = t == null ? void 0 : t.callback;
        f && delete t.callback, this.toCanvas(t).toBlob((h) => {
          i(h), f == null || f(h);
        });
      } catch (f) {
        l(f);
      }
    });
  }
  setSize(t) {
    return this.width(t.width), this.height(t.height), this;
  }
  getSize() {
    return {
      width: this.width(),
      height: this.height()
    };
  }
  getClassName() {
    return this.className || this.nodeType;
  }
  getType() {
    return this.nodeType;
  }
  getDragDistance() {
    return this.attrs.dragDistance !== void 0 ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : ke.dragDistance;
  }
  _off(t, i, l) {
    var f = this.eventListeners[t], h, p, g;
    for (h = 0; h < f.length; h++)
      if (p = f[h].name, g = f[h].handler, (p !== "konva" || i === "konva") && (!i || p === i) && (!l || l === g)) {
        if (f.splice(h, 1), f.length === 0) {
          delete this.eventListeners[t];
          break;
        }
        h--;
      }
  }
  _fireChangeEvent(t, i, l) {
    this._fire(t + Lg, {
      oldVal: i,
      newVal: l
    });
  }
  addName(t) {
    if (!this.hasName(t)) {
      var i = this.name(), l = i ? i + " " + t : t;
      this.name(l);
    }
    return this;
  }
  hasName(t) {
    if (!t)
      return !1;
    const i = this.name();
    if (!i)
      return !1;
    var l = (i || "").split(/\s/g);
    return l.indexOf(t) !== -1;
  }
  removeName(t) {
    var i = (this.name() || "").split(/\s/g), l = i.indexOf(t);
    return l !== -1 && (i.splice(l, 1), this.name(i.join(" "))), this;
  }
  setAttr(t, i) {
    var l = this[rc + G._capitalize(t)];
    return G._isFunction(l) ? l.call(this, i) : this._setAttr(t, i), this;
  }
  _requestDraw() {
    if (ke.autoDrawEnabled) {
      const t = this.getLayer() || this.getStage();
      t == null || t.batchDraw();
    }
  }
  _setAttr(t, i) {
    var l = this.attrs[t];
    l === i && !G.isObject(i) || (i == null ? delete this.attrs[t] : this.attrs[t] = i, this._shouldFireChangeEvents && this._fireChangeEvent(t, l, i), this._requestDraw());
  }
  _setComponentAttr(t, i, l) {
    var f;
    l !== void 0 && (f = this.attrs[t], f || (this.attrs[t] = this.getAttr(t)), this.attrs[t][i] = l, this._fireChangeEvent(t, f, l));
  }
  _fireAndBubble(t, i, l) {
    i && this.nodeType === ic && (i.target = this);
    var f = (t === tc || t === nc) && (l && (this === l || this.isAncestorOf && this.isAncestorOf(l)) || this.nodeType === "Stage" && !l);
    if (!f) {
      this._fire(t, i);
      var h = (t === tc || t === nc) && l && l.isAncestorOf && l.isAncestorOf(this) && !l.isAncestorOf(this.parent);
      (i && !i.cancelBubble || !i) && this.parent && this.parent.isListening() && !h && (l && l.parent ? this._fireAndBubble.call(this.parent, t, i, l) : this._fireAndBubble.call(this.parent, t, i));
    }
  }
  _getProtoListeners(t) {
    let i = this._cache.get(df);
    if (!i) {
      i = {};
      let f = Object.getPrototypeOf(this);
      for (; f; ) {
        if (!f.eventListeners) {
          f = Object.getPrototypeOf(f);
          continue;
        }
        for (var l in f.eventListeners) {
          const h = f.eventListeners[l], p = i[l] || [];
          i[l] = h.concat(p);
        }
        f = Object.getPrototypeOf(f);
      }
      this._cache.set(df, i);
    }
    return i[t];
  }
  _fire(t, i) {
    i = i || {}, i.currentTarget = this, i.type = t;
    const l = this._getProtoListeners(t);
    if (l)
      for (var f = 0; f < l.length; f++)
        l[f].handler.call(this, i);
    const h = this.eventListeners[t];
    if (h)
      for (var f = 0; f < h.length; f++)
        h[f].handler.call(this, i);
  }
  draw() {
    return this.drawScene(), this.drawHit(), this;
  }
  _createDragElement(t) {
    var i = t ? t.pointerId : void 0, l = this.getStage(), f = this.getAbsolutePosition(), h = l._getPointerById(i) || l._changedPointerPositions[0] || f;
    Ze._dragElements.set(this._id, {
      node: this,
      startPointerPos: h,
      offset: {
        x: h.x - f.x,
        y: h.y - f.y
      },
      dragStatus: "ready",
      pointerId: i
    });
  }
  startDrag(t, i = !0) {
    Ze._dragElements.has(this._id) || this._createDragElement(t);
    const l = Ze._dragElements.get(this._id);
    l.dragStatus = "dragging", this.fire("dragstart", {
      type: "dragstart",
      target: this,
      evt: t && t.evt
    }, i);
  }
  _setDragPosition(t, i) {
    const l = this.getStage()._getPointerById(i.pointerId);
    if (l) {
      var f = {
        x: l.x - i.offset.x,
        y: l.y - i.offset.y
      }, h = this.dragBoundFunc();
      if (h !== void 0) {
        const p = h.call(this, f, t);
        p ? f = p : G.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
      }
      (!this._lastPos || this._lastPos.x !== f.x || this._lastPos.y !== f.y) && (this.setAbsolutePosition(f), this._requestDraw()), this._lastPos = f;
    }
  }
  stopDrag(t) {
    const i = Ze._dragElements.get(this._id);
    i && (i.dragStatus = "stopped"), Ze._endDragBefore(t), Ze._endDragAfter(t);
  }
  setDraggable(t) {
    this._setAttr("draggable", t), this._dragChange();
  }
  isDragging() {
    const t = Ze._dragElements.get(this._id);
    return t ? t.dragStatus === "dragging" : !1;
  }
  _listenDrag() {
    this._dragCleanup(), this.on("mousedown.konva touchstart.konva", function(t) {
      var i = t.evt.button !== void 0, l = !i || ke.dragButtons.indexOf(t.evt.button) >= 0;
      if (l && !this.isDragging()) {
        var f = !1;
        Ze._dragElements.forEach((h) => {
          this.isAncestorOf(h.node) && (f = !0);
        }), f || this._createDragElement(t);
      }
    });
  }
  _dragChange() {
    if (this.attrs.draggable)
      this._listenDrag();
    else {
      this._dragCleanup();
      var t = this.getStage();
      if (!t)
        return;
      const i = Ze._dragElements.get(this._id), l = i && i.dragStatus === "dragging", f = i && i.dragStatus === "ready";
      l ? this.stopDrag() : f && Ze._dragElements.delete(this._id);
    }
  }
  _dragCleanup() {
    this.off("mousedown.konva"), this.off("touchstart.konva");
  }
  isClientRectOnScreen(t = { x: 0, y: 0 }) {
    const i = this.getStage();
    if (!i)
      return !1;
    const l = {
      x: -t.x,
      y: -t.y,
      width: i.width() + 2 * t.x,
      height: i.height() + 2 * t.y
    };
    return G.haveIntersection(l, this.getClientRect());
  }
  static create(t, i) {
    return G._isString(t) && (t = JSON.parse(t)), this._createNode(t, i);
  }
  static _createNode(t, i) {
    var l = ue.prototype.getClassName.call(t), f = t.children, h, p, g;
    i && (t.attrs.container = i), ke[l] || (G.warn('Can not find a node with class name "' + l + '". Fallback to "Shape".'), l = "Shape");
    const y = ke[l];
    if (h = new y(t.attrs), f)
      for (p = f.length, g = 0; g < p; g++)
        h.add(ue._createNode(f[g]));
    return h;
  }
}
ue.prototype.nodeType = "Node";
ue.prototype._attrsAffectingSize = [];
ue.prototype.eventListeners = {};
ue.prototype.on.call(ue.prototype, Ig, function() {
  if (this._batchingTransformChange) {
    this._needClearTransformCache = !0;
    return;
  }
  this._clearCache(Na), this._clearSelfAndDescendantCache(Ni);
});
ue.prototype.on.call(ue.prototype, "visibleChange.konva", function() {
  this._clearSelfAndDescendantCache(Ad);
});
ue.prototype.on.call(ue.prototype, "listeningChange.konva", function() {
  this._clearSelfAndDescendantCache(Nd);
});
ue.prototype.on.call(ue.prototype, "opacityChange.konva", function() {
  this._clearSelfAndDescendantCache(Sf);
});
const ut = L.addGetterSetter;
ut(ue, "zIndex");
ut(ue, "absolutePosition");
ut(ue, "position");
ut(ue, "x", 0, fe());
ut(ue, "y", 0, fe());
ut(ue, "globalCompositeOperation", "source-over", zl());
ut(ue, "opacity", 1, fe());
ut(ue, "name", "", zl());
ut(ue, "id", "", zl());
ut(ue, "rotation", 0, fe());
L.addComponentsGetterSetter(ue, "scale", ["x", "y"]);
ut(ue, "scaleX", 1, fe());
ut(ue, "scaleY", 1, fe());
L.addComponentsGetterSetter(ue, "skew", ["x", "y"]);
ut(ue, "skewX", 0, fe());
ut(ue, "skewY", 0, fe());
L.addComponentsGetterSetter(ue, "offset", ["x", "y"]);
ut(ue, "offsetX", 0, fe());
ut(ue, "offsetY", 0, fe());
ut(ue, "dragDistance", null, fe());
ut(ue, "width", 0, fe());
ut(ue, "height", 0, fe());
ut(ue, "listening", !0, Rr());
ut(ue, "preventDefault", !0, Rr());
ut(ue, "filters", null, function(d) {
  return this._filterUpToDate = !1, d;
});
ut(ue, "visible", !0, Rr());
ut(ue, "transformsEnabled", "all", zl());
ut(ue, "size");
ut(ue, "dragBoundFunc");
ut(ue, "draggable", !1, Rr());
L.backCompat(ue, {
  rotateDeg: "rotate",
  setRotationDeg: "setRotation",
  getRotationDeg: "getRotation"
});
class Wn extends ue {
  constructor() {
    super(...arguments), this.children = [];
  }
  getChildren(t) {
    if (!t)
      return this.children || [];
    const i = this.children || [];
    var l = [];
    return i.forEach(function(f) {
      t(f) && l.push(f);
    }), l;
  }
  hasChildren() {
    return this.getChildren().length > 0;
  }
  removeChildren() {
    return this.getChildren().forEach((t) => {
      t.parent = null, t.index = 0, t.remove();
    }), this.children = [], this._requestDraw(), this;
  }
  destroyChildren() {
    return this.getChildren().forEach((t) => {
      t.parent = null, t.index = 0, t.destroy();
    }), this.children = [], this._requestDraw(), this;
  }
  add(...t) {
    if (t.length === 0)
      return this;
    if (t.length > 1) {
      for (var i = 0; i < t.length; i++)
        this.add(t[i]);
      return this;
    }
    const l = t[0];
    return l.getParent() ? (l.moveTo(this), this) : (this._validateAdd(l), l.index = this.getChildren().length, l.parent = this, l._clearCaches(), this.getChildren().push(l), this._fire("add", {
      child: l
    }), this._requestDraw(), this);
  }
  destroy() {
    return this.hasChildren() && this.destroyChildren(), super.destroy(), this;
  }
  find(t) {
    return this._generalFind(t, !1);
  }
  findOne(t) {
    var i = this._generalFind(t, !0);
    return i.length > 0 ? i[0] : void 0;
  }
  _generalFind(t, i) {
    var l = [];
    return this._descendants((f) => {
      const h = f._isMatch(t);
      return h && l.push(f), !!(h && i);
    }), l;
  }
  _descendants(t) {
    let i = !1;
    const l = this.getChildren();
    for (const f of l) {
      if (i = t(f), i)
        return !0;
      if (f.hasChildren() && (i = f._descendants(t), i))
        return !0;
    }
    return !1;
  }
  toObject() {
    var t = ue.prototype.toObject.call(this);
    return t.children = [], this.getChildren().forEach((i) => {
      t.children.push(i.toObject());
    }), t;
  }
  isAncestorOf(t) {
    for (var i = t.getParent(); i; ) {
      if (i._id === this._id)
        return !0;
      i = i.getParent();
    }
    return !1;
  }
  clone(t) {
    var i = ue.prototype.clone.call(this, t);
    return this.getChildren().forEach(function(l) {
      i.add(l.clone());
    }), i;
  }
  getAllIntersections(t) {
    var i = [];
    return this.find("Shape").forEach(function(l) {
      l.isVisible() && l.intersects(t) && i.push(l);
    }), i;
  }
  _clearSelfAndDescendantCache(t) {
    var i;
    super._clearSelfAndDescendantCache(t), !this.isCached() && ((i = this.children) === null || i === void 0 || i.forEach(function(l) {
      l._clearSelfAndDescendantCache(t);
    }));
  }
  _setChildrenIndices() {
    var t;
    (t = this.children) === null || t === void 0 || t.forEach(function(i, l) {
      i.index = l;
    }), this._requestDraw();
  }
  drawScene(t, i) {
    var l = this.getLayer(), f = t || l && l.getCanvas(), h = f && f.getContext(), p = this._getCanvasCache(), g = p && p.scene, y = f && f.isCache;
    if (!this.isVisible() && !y)
      return this;
    if (g) {
      h.save();
      var S = this.getAbsoluteTransform(i).getMatrix();
      h.transform(S[0], S[1], S[2], S[3], S[4], S[5]), this._drawCachedSceneCanvas(h), h.restore();
    } else
      this._drawChildren("drawScene", f, i);
    return this;
  }
  drawHit(t, i) {
    if (!this.shouldDrawHit(i))
      return this;
    var l = this.getLayer(), f = t || l && l.hitCanvas, h = f && f.getContext(), p = this._getCanvasCache(), g = p && p.hit;
    if (g) {
      h.save();
      var y = this.getAbsoluteTransform(i).getMatrix();
      h.transform(y[0], y[1], y[2], y[3], y[4], y[5]), this._drawCachedHitCanvas(h), h.restore();
    } else
      this._drawChildren("drawHit", f, i);
    return this;
  }
  _drawChildren(t, i, l) {
    var f, h = i && i.getContext(), p = this.clipWidth(), g = this.clipHeight(), y = this.clipFunc(), S = p && g || y;
    const k = l === this;
    if (S) {
      h.save();
      var E = this.getAbsoluteTransform(l), x = E.getMatrix();
      if (h.transform(x[0], x[1], x[2], x[3], x[4], x[5]), h.beginPath(), y)
        y.call(this, h, this);
      else {
        var N = this.clipX(), P = this.clipY();
        h.rect(N, P, p, g);
      }
      h.clip(), x = E.copy().invert().getMatrix(), h.transform(x[0], x[1], x[2], x[3], x[4], x[5]);
    }
    var B = !k && this.globalCompositeOperation() !== "source-over" && t === "drawScene";
    B && (h.save(), h._applyGlobalCompositeOperation(this)), (f = this.children) === null || f === void 0 || f.forEach(function(z) {
      z[t](i, l);
    }), B && h.restore(), S && h.restore();
  }
  getClientRect(t) {
    var i;
    t = t || {};
    var l = t.skipTransform, f = t.relativeTo, h, p, g, y, S = {
      x: 1 / 0,
      y: 1 / 0,
      width: 0,
      height: 0
    }, k = this;
    (i = this.children) === null || i === void 0 || i.forEach(function(B) {
      if (B.visible()) {
        var z = B.getClientRect({
          relativeTo: k,
          skipShadow: t.skipShadow,
          skipStroke: t.skipStroke
        });
        z.width === 0 && z.height === 0 || (h === void 0 ? (h = z.x, p = z.y, g = z.x + z.width, y = z.y + z.height) : (h = Math.min(h, z.x), p = Math.min(p, z.y), g = Math.max(g, z.x + z.width), y = Math.max(y, z.y + z.height)));
      }
    });
    for (var E = this.find("Shape"), x = !1, N = 0; N < E.length; N++) {
      var P = E[N];
      if (P._isVisible(this)) {
        x = !0;
        break;
      }
    }
    return x && h !== void 0 ? S = {
      x: h,
      y: p,
      width: g - h,
      height: y - p
    } : S = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }, l ? S : this._transformedRect(S, f);
  }
}
L.addComponentsGetterSetter(Wn, "clip", [
  "x",
  "y",
  "width",
  "height"
]);
L.addGetterSetter(Wn, "clipX", void 0, fe());
L.addGetterSetter(Wn, "clipY", void 0, fe());
L.addGetterSetter(Wn, "clipWidth", void 0, fe());
L.addGetterSetter(Wn, "clipHeight", void 0, fe());
L.addGetterSetter(Wn, "clipFunc");
const Ko = /* @__PURE__ */ new Map(), Ic = ke._global.PointerEvent !== void 0;
function wd(d) {
  return Ko.get(d);
}
function Wd(d) {
  return {
    evt: d,
    pointerId: d.pointerId
  };
}
function zc(d, t) {
  return Ko.get(d) === t;
}
function Dc(d, t) {
  Yo(d), t.getStage() && (Ko.set(d, t), Ic && t._fire("gotpointercapture", Wd(new PointerEvent("gotpointercapture"))));
}
function Yo(d, t) {
  const i = Ko.get(d);
  if (!i)
    return;
  const l = i.getStage();
  l && l.content, Ko.delete(d), Ic && i._fire("lostpointercapture", Wd(new PointerEvent("lostpointercapture")));
}
var Dg = "Stage", Fg = "string", sc = "px", Gg = "mouseout", Fc = "mouseleave", Gc = "mouseover", Bc = "mouseenter", Uc = "mousemove", Hc = "mousedown", jc = "mouseup", Uo = "pointermove", Ho = "pointerdown", Nl = "pointerup", jo = "pointercancel", Bg = "lostpointercapture", hf = "pointerout", cf = "pointerleave", pf = "pointerover", gf = "pointerenter", Od = "contextmenu", Wc = "touchstart", Vc = "touchend", Yc = "touchmove", Qc = "touchcancel", Id = "wheel", Ug = 5, Hg = [
  [Bc, "_pointerenter"],
  [Hc, "_pointerdown"],
  [Uc, "_pointermove"],
  [jc, "_pointerup"],
  [Fc, "_pointerleave"],
  [Wc, "_pointerdown"],
  [Yc, "_pointermove"],
  [Vc, "_pointerup"],
  [Qc, "_pointercancel"],
  [Gc, "_pointerover"],
  [Id, "_wheel"],
  [Od, "_contextmenu"],
  [Ho, "_pointerdown"],
  [Uo, "_pointermove"],
  [Nl, "_pointerup"],
  [jo, "_pointercancel"],
  [Bg, "_lostpointercapture"]
];
const Cd = {
  mouse: {
    [hf]: Gg,
    [cf]: Fc,
    [pf]: Gc,
    [gf]: Bc,
    [Uo]: Uc,
    [Ho]: Hc,
    [Nl]: jc,
    [jo]: "mousecancel",
    pointerclick: "click",
    pointerdblclick: "dblclick"
  },
  touch: {
    [hf]: "touchout",
    [cf]: "touchleave",
    [pf]: "touchover",
    [gf]: "touchenter",
    [Uo]: Yc,
    [Ho]: Wc,
    [Nl]: Vc,
    [jo]: Qc,
    pointerclick: "tap",
    pointerdblclick: "dbltap"
  },
  pointer: {
    [hf]: hf,
    [cf]: cf,
    [pf]: pf,
    [gf]: gf,
    [Uo]: Uo,
    [Ho]: Ho,
    [Nl]: Nl,
    [jo]: jo,
    pointerclick: "pointerclick",
    pointerdblclick: "pointerdblclick"
  }
}, Wo = (d) => d.indexOf("pointer") >= 0 ? "pointer" : d.indexOf("touch") >= 0 ? "touch" : "mouse", Ml = (d) => {
  const t = Wo(d);
  if (t === "pointer")
    return ke.pointerEventsEnabled && Cd.pointer;
  if (t === "touch")
    return Cd.touch;
  if (t === "mouse")
    return Cd.mouse;
};
function lc(d = {}) {
  return (d.clipFunc || d.clipWidth || d.clipHeight) && G.warn("Stage does not support clipping. Please use clip for Layers or Groups."), d;
}
const jg = "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);", Cf = [];
let Mf = class extends Wn {
  constructor(t) {
    super(lc(t)), this._pointerPositions = [], this._changedPointerPositions = [], this._buildDOM(), this._bindContentEvents(), Cf.push(this), this.on("widthChange.konva heightChange.konva", this._resizeDOM), this.on("visibleChange.konva", this._checkVisibility), this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
      lc(this.attrs);
    }), this._checkVisibility();
  }
  _validateAdd(t) {
    const i = t.getType() === "Layer", l = t.getType() === "FastLayer";
    i || l || G.throw("You may only add layers to the stage.");
  }
  _checkVisibility() {
    if (!this.content)
      return;
    const t = this.visible() ? "" : "none";
    this.content.style.display = t;
  }
  setContainer(t) {
    if (typeof t === Fg) {
      if (t.charAt(0) === ".") {
        var i = t.slice(1);
        t = document.getElementsByClassName(i)[0];
      } else {
        var l;
        t.charAt(0) !== "#" ? l = t : l = t.slice(1), t = document.getElementById(l);
      }
      if (!t)
        throw "Can not find container in document with id " + l;
    }
    return this._setAttr("container", t), this.content && (this.content.parentElement && this.content.parentElement.removeChild(this.content), t.appendChild(this.content)), this;
  }
  shouldDrawHit() {
    return !0;
  }
  clear() {
    var t = this.children, i = t.length, l;
    for (l = 0; l < i; l++)
      t[l].clear();
    return this;
  }
  clone(t) {
    return t || (t = {}), t.container = typeof document != "undefined" && document.createElement("div"), Wn.prototype.clone.call(this, t);
  }
  destroy() {
    super.destroy();
    var t = this.content;
    t && G._isInDocument(t) && this.container().removeChild(t);
    var i = Cf.indexOf(this);
    return i > -1 && Cf.splice(i, 1), G.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas), this;
  }
  getPointerPosition() {
    const t = this._pointerPositions[0] || this._changedPointerPositions[0];
    return t ? {
      x: t.x,
      y: t.y
    } : (G.warn(jg), null);
  }
  _getPointerById(t) {
    return this._pointerPositions.find((i) => i.id === t);
  }
  getPointersPositions() {
    return this._pointerPositions;
  }
  getStage() {
    return this;
  }
  getContent() {
    return this.content;
  }
  _toKonvaCanvas(t) {
    t = t || {}, t.x = t.x || 0, t.y = t.y || 0, t.width = t.width || this.width(), t.height = t.height || this.height();
    var i = new Ol({
      width: t.width,
      height: t.height,
      pixelRatio: t.pixelRatio || 1
    }), l = i.getContext()._context, f = this.children;
    return (t.x || t.y) && l.translate(-1 * t.x, -1 * t.y), f.forEach(function(h) {
      if (h.isVisible()) {
        var p = h._toKonvaCanvas(t);
        l.drawImage(p._canvas, t.x, t.y, p.getWidth() / p.getPixelRatio(), p.getHeight() / p.getPixelRatio());
      }
    }), i;
  }
  getIntersection(t) {
    if (!t)
      return null;
    var i = this.children, l = i.length, f = l - 1, h;
    for (h = f; h >= 0; h--) {
      const p = i[h].getIntersection(t);
      if (p)
        return p;
    }
    return null;
  }
  _resizeDOM() {
    var t = this.width(), i = this.height();
    this.content && (this.content.style.width = t + sc, this.content.style.height = i + sc), this.bufferCanvas.setSize(t, i), this.bufferHitCanvas.setSize(t, i), this.children.forEach((l) => {
      l.setSize({ width: t, height: i }), l.draw();
    });
  }
  add(t, ...i) {
    if (arguments.length > 1) {
      for (var l = 0; l < arguments.length; l++)
        this.add(arguments[l]);
      return this;
    }
    super.add(t);
    var f = this.children.length;
    return f > Ug && G.warn("The stage has " + f + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."), t.setSize({ width: this.width(), height: this.height() }), t.draw(), ke.isBrowser && this.content.appendChild(t.canvas._canvas), this;
  }
  getParent() {
    return null;
  }
  getLayer() {
    return null;
  }
  hasPointerCapture(t) {
    return zc(t, this);
  }
  setPointerCapture(t) {
    Dc(t, this);
  }
  releaseCapture(t) {
    Yo(t);
  }
  getLayers() {
    return this.children;
  }
  _bindContentEvents() {
    ke.isBrowser && Hg.forEach(([t, i]) => {
      this.content.addEventListener(t, (l) => {
        this[i](l);
      }, { passive: !1 });
    });
  }
  _pointerenter(t) {
    this.setPointersPositions(t);
    const i = Ml(t.type);
    this._fire(i.pointerenter, {
      evt: t,
      target: this,
      currentTarget: this
    });
  }
  _pointerover(t) {
    this.setPointersPositions(t);
    const i = Ml(t.type);
    this._fire(i.pointerover, {
      evt: t,
      target: this,
      currentTarget: this
    });
  }
  _getTargetShape(t) {
    let i = this[t + "targetShape"];
    return i && !i.getStage() && (i = null), i;
  }
  _pointerleave(t) {
    const i = Ml(t.type), l = Wo(t.type);
    if (i) {
      this.setPointersPositions(t);
      var f = this._getTargetShape(l), h = !Ze.isDragging || ke.hitOnDragEnabled;
      f && h ? (f._fireAndBubble(i.pointerout, { evt: t }), f._fireAndBubble(i.pointerleave, { evt: t }), this._fire(i.pointerleave, {
        evt: t,
        target: this,
        currentTarget: this
      }), this[l + "targetShape"] = null) : h && (this._fire(i.pointerleave, {
        evt: t,
        target: this,
        currentTarget: this
      }), this._fire(i.pointerout, {
        evt: t,
        target: this,
        currentTarget: this
      })), this.pointerPos = void 0, this._pointerPositions = [];
    }
  }
  _pointerdown(t) {
    const i = Ml(t.type), l = Wo(t.type);
    if (i) {
      this.setPointersPositions(t);
      var f = !1;
      this._changedPointerPositions.forEach((h) => {
        var p = this.getIntersection(h);
        if (Ze.justDragged = !1, ke["_" + l + "ListenClick"] = !0, !(p && p.isListening()))
          return;
        ke.capturePointerEventsEnabled && p.setPointerCapture(h.id), this[l + "ClickStartShape"] = p, p._fireAndBubble(i.pointerdown, {
          evt: t,
          pointerId: h.id
        }), f = !0;
        const y = t.type.indexOf("touch") >= 0;
        p.preventDefault() && t.cancelable && y && t.preventDefault();
      }), f || this._fire(i.pointerdown, {
        evt: t,
        target: this,
        currentTarget: this,
        pointerId: this._pointerPositions[0].id
      });
    }
  }
  _pointermove(t) {
    const i = Ml(t.type), l = Wo(t.type);
    if (!i)
      return;
    Ze.isDragging && Ze.node.preventDefault() && t.cancelable && t.preventDefault(), this.setPointersPositions(t);
    var f = !Ze.isDragging || ke.hitOnDragEnabled;
    if (!f)
      return;
    var h = {};
    let p = !1;
    var g = this._getTargetShape(l);
    this._changedPointerPositions.forEach((y) => {
      const S = wd(y.id) || this.getIntersection(y), k = y.id, E = { evt: t, pointerId: k };
      var x = g !== S;
      if (x && g && (g._fireAndBubble(i.pointerout, Object.assign({}, E), S), g._fireAndBubble(i.pointerleave, Object.assign({}, E), S)), S) {
        if (h[S._id])
          return;
        h[S._id] = !0;
      }
      S && S.isListening() ? (p = !0, x && (S._fireAndBubble(i.pointerover, Object.assign({}, E), g), S._fireAndBubble(i.pointerenter, Object.assign({}, E), g), this[l + "targetShape"] = S), S._fireAndBubble(i.pointermove, Object.assign({}, E))) : g && (this._fire(i.pointerover, {
        evt: t,
        target: this,
        currentTarget: this,
        pointerId: k
      }), this[l + "targetShape"] = null);
    }), p || this._fire(i.pointermove, {
      evt: t,
      target: this,
      currentTarget: this,
      pointerId: this._changedPointerPositions[0].id
    });
  }
  _pointerup(t) {
    const i = Ml(t.type), l = Wo(t.type);
    if (!i)
      return;
    this.setPointersPositions(t);
    const f = this[l + "ClickStartShape"], h = this[l + "ClickEndShape"];
    var p = {};
    let g = !1;
    this._changedPointerPositions.forEach((y) => {
      const S = wd(y.id) || this.getIntersection(y);
      if (S) {
        if (S.releaseCapture(y.id), p[S._id])
          return;
        p[S._id] = !0;
      }
      const k = y.id, E = { evt: t, pointerId: k };
      let x = !1;
      ke["_" + l + "InDblClickWindow"] ? (x = !0, clearTimeout(this[l + "DblTimeout"])) : Ze.justDragged || (ke["_" + l + "InDblClickWindow"] = !0, clearTimeout(this[l + "DblTimeout"])), this[l + "DblTimeout"] = setTimeout(function() {
        ke["_" + l + "InDblClickWindow"] = !1;
      }, ke.dblClickWindow), S && S.isListening() ? (g = !0, this[l + "ClickEndShape"] = S, S._fireAndBubble(i.pointerup, Object.assign({}, E)), ke["_" + l + "ListenClick"] && f && f === S && (S._fireAndBubble(i.pointerclick, Object.assign({}, E)), x && h && h === S && S._fireAndBubble(i.pointerdblclick, Object.assign({}, E)))) : (this[l + "ClickEndShape"] = null, ke["_" + l + "ListenClick"] && this._fire(i.pointerclick, {
        evt: t,
        target: this,
        currentTarget: this,
        pointerId: k
      }), x && this._fire(i.pointerdblclick, {
        evt: t,
        target: this,
        currentTarget: this,
        pointerId: k
      }));
    }), g || this._fire(i.pointerup, {
      evt: t,
      target: this,
      currentTarget: this,
      pointerId: this._changedPointerPositions[0].id
    }), ke["_" + l + "ListenClick"] = !1, t.cancelable && l !== "touch" && t.preventDefault();
  }
  _contextmenu(t) {
    this.setPointersPositions(t);
    var i = this.getIntersection(this.getPointerPosition());
    i && i.isListening() ? i._fireAndBubble(Od, { evt: t }) : this._fire(Od, {
      evt: t,
      target: this,
      currentTarget: this
    });
  }
  _wheel(t) {
    this.setPointersPositions(t);
    var i = this.getIntersection(this.getPointerPosition());
    i && i.isListening() ? i._fireAndBubble(Id, { evt: t }) : this._fire(Id, {
      evt: t,
      target: this,
      currentTarget: this
    });
  }
  _pointercancel(t) {
    this.setPointersPositions(t);
    const i = wd(t.pointerId) || this.getIntersection(this.getPointerPosition());
    i && i._fireAndBubble(Nl, Wd(t)), Yo(t.pointerId);
  }
  _lostpointercapture(t) {
    Yo(t.pointerId);
  }
  setPointersPositions(t) {
    var i = this._getContentPosition(), l = null, f = null;
    t = t || window.event, t.touches !== void 0 ? (this._pointerPositions = [], this._changedPointerPositions = [], Array.prototype.forEach.call(t.touches, (h) => {
      this._pointerPositions.push({
        id: h.identifier,
        x: (h.clientX - i.left) / i.scaleX,
        y: (h.clientY - i.top) / i.scaleY
      });
    }), Array.prototype.forEach.call(t.changedTouches || t.touches, (h) => {
      this._changedPointerPositions.push({
        id: h.identifier,
        x: (h.clientX - i.left) / i.scaleX,
        y: (h.clientY - i.top) / i.scaleY
      });
    })) : (l = (t.clientX - i.left) / i.scaleX, f = (t.clientY - i.top) / i.scaleY, this.pointerPos = {
      x: l,
      y: f
    }, this._pointerPositions = [{ x: l, y: f, id: G._getFirstPointerId(t) }], this._changedPointerPositions = [
      { x: l, y: f, id: G._getFirstPointerId(t) }
    ]);
  }
  _setPointerPosition(t) {
    G.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'), this.setPointersPositions(t);
  }
  _getContentPosition() {
    if (!this.content || !this.content.getBoundingClientRect)
      return {
        top: 0,
        left: 0,
        scaleX: 1,
        scaleY: 1
      };
    var t = this.content.getBoundingClientRect();
    return {
      top: t.top,
      left: t.left,
      scaleX: t.width / this.content.clientWidth || 1,
      scaleY: t.height / this.content.clientHeight || 1
    };
  }
  _buildDOM() {
    if (this.bufferCanvas = new Ol({
      width: this.width(),
      height: this.height()
    }), this.bufferHitCanvas = new jd({
      pixelRatio: 1,
      width: this.width(),
      height: this.height()
    }), !!ke.isBrowser) {
      var t = this.container();
      if (!t)
        throw "Stage has no container. A container is required.";
      t.innerHTML = "", this.content = document.createElement("div"), this.content.style.position = "relative", this.content.style.userSelect = "none", this.content.className = "konvajs-content", this.content.setAttribute("role", "presentation"), t.appendChild(this.content), this._resizeDOM();
    }
  }
  cache() {
    return G.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."), this;
  }
  clearCache() {
    return this;
  }
  batchDraw() {
    return this.getChildren().forEach(function(t) {
      t.batchDraw();
    }), this;
  }
};
Mf.prototype.nodeType = Dg;
wt(Mf);
L.addGetterSetter(Mf, "container");
var Xc = "hasShadow", Kc = "shadowRGBA", qc = "patternImage", Jc = "linearGradient", Zc = "radialGradient";
let vf;
function kd() {
  return vf || (vf = G.createCanvasElement().getContext("2d"), vf);
}
const Qo = {};
function Wg(d) {
  d.fill();
}
function Vg(d) {
  d.stroke();
}
function Yg(d) {
  d.fill();
}
function Qg(d) {
  d.stroke();
}
function Xg() {
  this._clearCache(Xc);
}
function Kg() {
  this._clearCache(Kc);
}
function qg() {
  this._clearCache(qc);
}
function Jg() {
  this._clearCache(Jc);
}
function Zg() {
  this._clearCache(Zc);
}
class re extends ue {
  constructor(t) {
    super(t);
    let i;
    for (; i = G.getRandomColor(), !(i && !(i in Qo)); )
      ;
    this.colorKey = i, Qo[i] = this;
  }
  getContext() {
    return G.warn("shape.getContext() method is deprecated. Please do not use it."), this.getLayer().getContext();
  }
  getCanvas() {
    return G.warn("shape.getCanvas() method is deprecated. Please do not use it."), this.getLayer().getCanvas();
  }
  getSceneFunc() {
    return this.attrs.sceneFunc || this._sceneFunc;
  }
  getHitFunc() {
    return this.attrs.hitFunc || this._hitFunc;
  }
  hasShadow() {
    return this._getCache(Xc, this._hasShadow);
  }
  _hasShadow() {
    return this.shadowEnabled() && this.shadowOpacity() !== 0 && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY());
  }
  _getFillPattern() {
    return this._getCache(qc, this.__getFillPattern);
  }
  __getFillPattern() {
    if (this.fillPatternImage()) {
      var t = kd();
      const i = t.createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
      if (i && i.setTransform) {
        const l = new jn();
        l.translate(this.fillPatternX(), this.fillPatternY()), l.rotate(ke.getAngle(this.fillPatternRotation())), l.scale(this.fillPatternScaleX(), this.fillPatternScaleY()), l.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
        const f = l.getMatrix(), h = typeof DOMMatrix == "undefined" ? {
          a: f[0],
          b: f[1],
          c: f[2],
          d: f[3],
          e: f[4],
          f: f[5]
        } : new DOMMatrix(f);
        i.setTransform(h);
      }
      return i;
    }
  }
  _getLinearGradient() {
    return this._getCache(Jc, this.__getLinearGradient);
  }
  __getLinearGradient() {
    var t = this.fillLinearGradientColorStops();
    if (t) {
      for (var i = kd(), l = this.fillLinearGradientStartPoint(), f = this.fillLinearGradientEndPoint(), h = i.createLinearGradient(l.x, l.y, f.x, f.y), p = 0; p < t.length; p += 2)
        h.addColorStop(t[p], t[p + 1]);
      return h;
    }
  }
  _getRadialGradient() {
    return this._getCache(Zc, this.__getRadialGradient);
  }
  __getRadialGradient() {
    var t = this.fillRadialGradientColorStops();
    if (t) {
      for (var i = kd(), l = this.fillRadialGradientStartPoint(), f = this.fillRadialGradientEndPoint(), h = i.createRadialGradient(l.x, l.y, this.fillRadialGradientStartRadius(), f.x, f.y, this.fillRadialGradientEndRadius()), p = 0; p < t.length; p += 2)
        h.addColorStop(t[p], t[p + 1]);
      return h;
    }
  }
  getShadowRGBA() {
    return this._getCache(Kc, this._getShadowRGBA);
  }
  _getShadowRGBA() {
    if (this.hasShadow()) {
      var t = G.colorToRGBA(this.shadowColor());
      if (t)
        return "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a * (this.shadowOpacity() || 1) + ")";
    }
  }
  hasFill() {
    return this._calculate("hasFill", [
      "fillEnabled",
      "fill",
      "fillPatternImage",
      "fillLinearGradientColorStops",
      "fillRadialGradientColorStops"
    ], () => this.fillEnabled() && !!(this.fill() || this.fillPatternImage() || this.fillLinearGradientColorStops() || this.fillRadialGradientColorStops()));
  }
  hasStroke() {
    return this._calculate("hasStroke", [
      "strokeEnabled",
      "strokeWidth",
      "stroke",
      "strokeLinearGradientColorStops"
    ], () => this.strokeEnabled() && this.strokeWidth() && !!(this.stroke() || this.strokeLinearGradientColorStops()));
  }
  hasHitStroke() {
    const t = this.hitStrokeWidth();
    return t === "auto" ? this.hasStroke() : this.strokeEnabled() && !!t;
  }
  intersects(t) {
    var i = this.getStage(), l = i.bufferHitCanvas, f;
    return l.getContext().clear(), this.drawHit(l, null, !0), f = l.context.getImageData(Math.round(t.x), Math.round(t.y), 1, 1).data, f[3] > 0;
  }
  destroy() {
    return ue.prototype.destroy.call(this), delete Qo[this.colorKey], delete this.colorKey, this;
  }
  _useBufferCanvas(t) {
    var i;
    if (!this.getStage() || !((i = this.attrs.perfectDrawEnabled) !== null && i !== void 0 ? i : !0))
      return !1;
    const f = t || this.hasFill(), h = this.hasStroke(), p = this.getAbsoluteOpacity() !== 1;
    if (f && h && p)
      return !0;
    const g = this.hasShadow(), y = this.shadowForStrokeEnabled();
    return !!(f && h && g && y);
  }
  setStrokeHitEnabled(t) {
    G.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."), t ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0);
  }
  getStrokeHitEnabled() {
    return this.hitStrokeWidth() !== 0;
  }
  getSelfRect() {
    var t = this.size();
    return {
      x: this._centroid ? -t.width / 2 : 0,
      y: this._centroid ? -t.height / 2 : 0,
      width: t.width,
      height: t.height
    };
  }
  getClientRect(t = {}) {
    const i = t.skipTransform, l = t.relativeTo, f = this.getSelfRect(), p = !t.skipStroke && this.hasStroke() && this.strokeWidth() || 0, g = f.width + p, y = f.height + p, S = !t.skipShadow && this.hasShadow(), k = S ? this.shadowOffsetX() : 0, E = S ? this.shadowOffsetY() : 0, x = g + Math.abs(k), N = y + Math.abs(E), P = S && this.shadowBlur() || 0, B = x + P * 2, z = N + P * 2, Z = {
      width: B,
      height: z,
      x: -(p / 2 + P) + Math.min(k, 0) + f.x,
      y: -(p / 2 + P) + Math.min(E, 0) + f.y
    };
    return i ? Z : this._transformedRect(Z, l);
  }
  drawScene(t, i) {
    var l = this.getLayer(), f = t || l.getCanvas(), h = f.getContext(), p = this._getCanvasCache(), g = this.getSceneFunc(), y = this.hasShadow(), S, k, E, x = f.isCache, N = i === this;
    if (!this.isVisible() && !N)
      return this;
    if (p) {
      h.save();
      var P = this.getAbsoluteTransform(i).getMatrix();
      return h.transform(P[0], P[1], P[2], P[3], P[4], P[5]), this._drawCachedSceneCanvas(h), h.restore(), this;
    }
    if (!g)
      return this;
    if (h.save(), this._useBufferCanvas() && !x) {
      S = this.getStage(), k = S.bufferCanvas, E = k.getContext(), E.clear(), E.save(), E._applyLineJoin(this);
      var B = this.getAbsoluteTransform(i).getMatrix();
      E.transform(B[0], B[1], B[2], B[3], B[4], B[5]), g.call(this, E, this), E.restore();
      var z = k.pixelRatio;
      y && h._applyShadow(this), h._applyOpacity(this), h._applyGlobalCompositeOperation(this), h.drawImage(k._canvas, 0, 0, k.width / z, k.height / z);
    } else {
      if (h._applyLineJoin(this), !N) {
        var B = this.getAbsoluteTransform(i).getMatrix();
        h.transform(B[0], B[1], B[2], B[3], B[4], B[5]), h._applyOpacity(this), h._applyGlobalCompositeOperation(this);
      }
      y && h._applyShadow(this), g.call(this, h, this);
    }
    return h.restore(), this;
  }
  drawHit(t, i, l = !1) {
    if (!this.shouldDrawHit(i, l))
      return this;
    var f = this.getLayer(), h = t || f.hitCanvas, p = h && h.getContext(), g = this.hitFunc() || this.sceneFunc(), y = this._getCanvasCache(), S = y && y.hit;
    if (this.colorKey || G.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"), S) {
      p.save();
      var k = this.getAbsoluteTransform(i).getMatrix();
      return p.transform(k[0], k[1], k[2], k[3], k[4], k[5]), this._drawCachedHitCanvas(p), p.restore(), this;
    }
    if (!g)
      return this;
    if (p.save(), p._applyLineJoin(this), !(this === i)) {
      var x = this.getAbsoluteTransform(i).getMatrix();
      p.transform(x[0], x[1], x[2], x[3], x[4], x[5]);
    }
    return g.call(this, p, this), p.restore(), this;
  }
  drawHitFromCache(t = 0) {
    var i = this._getCanvasCache(), l = this._getCachedSceneCanvas(), f = i.hit, h = f.getContext(), p = f.getWidth(), g = f.getHeight(), y, S, k, E, x, N;
    h.clear(), h.drawImage(l._canvas, 0, 0, p, g);
    try {
      for (y = h.getImageData(0, 0, p, g), S = y.data, k = S.length, E = G._hexToRgb(this.colorKey), x = 0; x < k; x += 4)
        N = S[x + 3], N > t ? (S[x] = E.r, S[x + 1] = E.g, S[x + 2] = E.b, S[x + 3] = 255) : S[x + 3] = 0;
      h.putImageData(y, 0, 0);
    } catch (P) {
      G.error("Unable to draw hit graph from cached scene canvas. " + P.message);
    }
    return this;
  }
  hasPointerCapture(t) {
    return zc(t, this);
  }
  setPointerCapture(t) {
    Dc(t, this);
  }
  releaseCapture(t) {
    Yo(t);
  }
}
re.prototype._fillFunc = Wg;
re.prototype._strokeFunc = Vg;
re.prototype._fillFuncHit = Yg;
re.prototype._strokeFuncHit = Qg;
re.prototype._centroid = !1;
re.prototype.nodeType = "Shape";
wt(re);
re.prototype.eventListeners = {};
re.prototype.on.call(re.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", Xg);
re.prototype.on.call(re.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", Kg);
re.prototype.on.call(re.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", qg);
re.prototype.on.call(re.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", Jg);
re.prototype.on.call(re.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", Zg);
L.addGetterSetter(re, "stroke", void 0, Oc());
L.addGetterSetter(re, "strokeWidth", 2, fe());
L.addGetterSetter(re, "fillAfterStrokeEnabled", !1);
L.addGetterSetter(re, "hitStrokeWidth", "auto", Hd());
L.addGetterSetter(re, "strokeHitEnabled", !0, Rr());
L.addGetterSetter(re, "perfectDrawEnabled", !0, Rr());
L.addGetterSetter(re, "shadowForStrokeEnabled", !0, Rr());
L.addGetterSetter(re, "lineJoin");
L.addGetterSetter(re, "lineCap");
L.addGetterSetter(re, "sceneFunc");
L.addGetterSetter(re, "hitFunc");
L.addGetterSetter(re, "dash");
L.addGetterSetter(re, "dashOffset", 0, fe());
L.addGetterSetter(re, "shadowColor", void 0, zl());
L.addGetterSetter(re, "shadowBlur", 0, fe());
L.addGetterSetter(re, "shadowOpacity", 1, fe());
L.addComponentsGetterSetter(re, "shadowOffset", ["x", "y"]);
L.addGetterSetter(re, "shadowOffsetX", 0, fe());
L.addGetterSetter(re, "shadowOffsetY", 0, fe());
L.addGetterSetter(re, "fillPatternImage");
L.addGetterSetter(re, "fill", void 0, Oc());
L.addGetterSetter(re, "fillPatternX", 0, fe());
L.addGetterSetter(re, "fillPatternY", 0, fe());
L.addGetterSetter(re, "fillLinearGradientColorStops");
L.addGetterSetter(re, "strokeLinearGradientColorStops");
L.addGetterSetter(re, "fillRadialGradientStartRadius", 0);
L.addGetterSetter(re, "fillRadialGradientEndRadius", 0);
L.addGetterSetter(re, "fillRadialGradientColorStops");
L.addGetterSetter(re, "fillPatternRepeat", "repeat");
L.addGetterSetter(re, "fillEnabled", !0);
L.addGetterSetter(re, "strokeEnabled", !0);
L.addGetterSetter(re, "shadowEnabled", !0);
L.addGetterSetter(re, "dashEnabled", !0);
L.addGetterSetter(re, "strokeScaleEnabled", !0);
L.addGetterSetter(re, "fillPriority", "color");
L.addComponentsGetterSetter(re, "fillPatternOffset", ["x", "y"]);
L.addGetterSetter(re, "fillPatternOffsetX", 0, fe());
L.addGetterSetter(re, "fillPatternOffsetY", 0, fe());
L.addComponentsGetterSetter(re, "fillPatternScale", ["x", "y"]);
L.addGetterSetter(re, "fillPatternScaleX", 1, fe());
L.addGetterSetter(re, "fillPatternScaleY", 1, fe());
L.addComponentsGetterSetter(re, "fillLinearGradientStartPoint", [
  "x",
  "y"
]);
L.addComponentsGetterSetter(re, "strokeLinearGradientStartPoint", [
  "x",
  "y"
]);
L.addGetterSetter(re, "fillLinearGradientStartPointX", 0);
L.addGetterSetter(re, "strokeLinearGradientStartPointX", 0);
L.addGetterSetter(re, "fillLinearGradientStartPointY", 0);
L.addGetterSetter(re, "strokeLinearGradientStartPointY", 0);
L.addComponentsGetterSetter(re, "fillLinearGradientEndPoint", [
  "x",
  "y"
]);
L.addComponentsGetterSetter(re, "strokeLinearGradientEndPoint", [
  "x",
  "y"
]);
L.addGetterSetter(re, "fillLinearGradientEndPointX", 0);
L.addGetterSetter(re, "strokeLinearGradientEndPointX", 0);
L.addGetterSetter(re, "fillLinearGradientEndPointY", 0);
L.addGetterSetter(re, "strokeLinearGradientEndPointY", 0);
L.addComponentsGetterSetter(re, "fillRadialGradientStartPoint", [
  "x",
  "y"
]);
L.addGetterSetter(re, "fillRadialGradientStartPointX", 0);
L.addGetterSetter(re, "fillRadialGradientStartPointY", 0);
L.addComponentsGetterSetter(re, "fillRadialGradientEndPoint", [
  "x",
  "y"
]);
L.addGetterSetter(re, "fillRadialGradientEndPointX", 0);
L.addGetterSetter(re, "fillRadialGradientEndPointY", 0);
L.addGetterSetter(re, "fillPatternRotation", 0);
L.backCompat(re, {
  dashArray: "dash",
  getDashArray: "getDash",
  setDashArray: "getDash",
  drawFunc: "sceneFunc",
  getDrawFunc: "getSceneFunc",
  setDrawFunc: "setSceneFunc",
  drawHitFunc: "hitFunc",
  getDrawHitFunc: "getHitFunc",
  setDrawHitFunc: "setHitFunc"
});
var $g = "#", bg = "beforeDraw", ev = "draw", $c = [
  { x: 0, y: 0 },
  { x: -1, y: -1 },
  { x: 1, y: -1 },
  { x: 1, y: 1 },
  { x: -1, y: 1 }
], tv = $c.length;
let Ss = class extends Wn {
  constructor(t) {
    super(t), this.canvas = new Ol(), this.hitCanvas = new jd({
      pixelRatio: 1
    }), this._waitingForDraw = !1, this.on("visibleChange.konva", this._checkVisibility), this._checkVisibility(), this.on("imageSmoothingEnabledChange.konva", this._setSmoothEnabled), this._setSmoothEnabled();
  }
  createPNGStream() {
    return this.canvas._canvas.createPNGStream();
  }
  getCanvas() {
    return this.canvas;
  }
  getNativeCanvasElement() {
    return this.canvas._canvas;
  }
  getHitCanvas() {
    return this.hitCanvas;
  }
  getContext() {
    return this.getCanvas().getContext();
  }
  clear(t) {
    return this.getContext().clear(t), this.getHitCanvas().getContext().clear(t), this;
  }
  setZIndex(t) {
    super.setZIndex(t);
    var i = this.getStage();
    return i && i.content && (i.content.removeChild(this.getNativeCanvasElement()), t < i.children.length - 1 ? i.content.insertBefore(this.getNativeCanvasElement(), i.children[t + 1].getCanvas()._canvas) : i.content.appendChild(this.getNativeCanvasElement())), this;
  }
  moveToTop() {
    ue.prototype.moveToTop.call(this);
    var t = this.getStage();
    return t && t.content && (t.content.removeChild(this.getNativeCanvasElement()), t.content.appendChild(this.getNativeCanvasElement())), !0;
  }
  moveUp() {
    var t = ue.prototype.moveUp.call(this);
    if (!t)
      return !1;
    var i = this.getStage();
    return !i || !i.content ? !1 : (i.content.removeChild(this.getNativeCanvasElement()), this.index < i.children.length - 1 ? i.content.insertBefore(this.getNativeCanvasElement(), i.children[this.index + 1].getCanvas()._canvas) : i.content.appendChild(this.getNativeCanvasElement()), !0);
  }
  moveDown() {
    if (ue.prototype.moveDown.call(this)) {
      var t = this.getStage();
      if (t) {
        var i = t.children;
        t.content && (t.content.removeChild(this.getNativeCanvasElement()), t.content.insertBefore(this.getNativeCanvasElement(), i[this.index + 1].getCanvas()._canvas));
      }
      return !0;
    }
    return !1;
  }
  moveToBottom() {
    if (ue.prototype.moveToBottom.call(this)) {
      var t = this.getStage();
      if (t) {
        var i = t.children;
        t.content && (t.content.removeChild(this.getNativeCanvasElement()), t.content.insertBefore(this.getNativeCanvasElement(), i[1].getCanvas()._canvas));
      }
      return !0;
    }
    return !1;
  }
  getLayer() {
    return this;
  }
  remove() {
    var t = this.getNativeCanvasElement();
    return ue.prototype.remove.call(this), t && t.parentNode && G._isInDocument(t) && t.parentNode.removeChild(t), this;
  }
  getStage() {
    return this.parent;
  }
  setSize({ width: t, height: i }) {
    return this.canvas.setSize(t, i), this.hitCanvas.setSize(t, i), this._setSmoothEnabled(), this;
  }
  _validateAdd(t) {
    var i = t.getType();
    i !== "Group" && i !== "Shape" && G.throw("You may only add groups and shapes to a layer.");
  }
  _toKonvaCanvas(t) {
    return t = t || {}, t.width = t.width || this.getWidth(), t.height = t.height || this.getHeight(), t.x = t.x !== void 0 ? t.x : this.x(), t.y = t.y !== void 0 ? t.y : this.y(), ue.prototype._toKonvaCanvas.call(this, t);
  }
  _checkVisibility() {
    this.visible() ? this.canvas._canvas.style.display = "block" : this.canvas._canvas.style.display = "none";
  }
  _setSmoothEnabled() {
    this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled();
  }
  getWidth() {
    if (this.parent)
      return this.parent.width();
  }
  setWidth() {
    G.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
  }
  getHeight() {
    if (this.parent)
      return this.parent.height();
  }
  setHeight() {
    G.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
  }
  batchDraw() {
    return this._waitingForDraw || (this._waitingForDraw = !0, G.requestAnimFrame(() => {
      this.draw(), this._waitingForDraw = !1;
    })), this;
  }
  getIntersection(t) {
    if (!this.isListening() || !this.isVisible())
      return null;
    for (var i = 1, l = !1; ; ) {
      for (let f = 0; f < tv; f++) {
        const h = $c[f], p = this._getIntersection({
          x: t.x + h.x * i,
          y: t.y + h.y * i
        }), g = p.shape;
        if (g)
          return g;
        if (l = !!p.antialiased, !p.antialiased)
          break;
      }
      if (l)
        i += 1;
      else
        return null;
    }
  }
  _getIntersection(t) {
    const i = this.hitCanvas.pixelRatio, l = this.hitCanvas.context.getImageData(Math.round(t.x * i), Math.round(t.y * i), 1, 1).data, f = l[3];
    if (f === 255) {
      const h = G._rgbToHex(l[0], l[1], l[2]), p = Qo[$g + h];
      return p ? {
        shape: p
      } : {
        antialiased: !0
      };
    } else if (f > 0)
      return {
        antialiased: !0
      };
    return {};
  }
  drawScene(t, i) {
    var l = this.getLayer(), f = t || l && l.getCanvas();
    return this._fire(bg, {
      node: this
    }), this.clearBeforeDraw() && f.getContext().clear(), Wn.prototype.drawScene.call(this, f, i), this._fire(ev, {
      node: this
    }), this;
  }
  drawHit(t, i) {
    var l = this.getLayer(), f = t || l && l.hitCanvas;
    return l && l.clearBeforeDraw() && l.getHitCanvas().getContext().clear(), Wn.prototype.drawHit.call(this, f, i), this;
  }
  enableHitGraph() {
    return this.hitGraphEnabled(!0), this;
  }
  disableHitGraph() {
    return this.hitGraphEnabled(!1), this;
  }
  setHitGraphEnabled(t) {
    G.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening(t);
  }
  getHitGraphEnabled(t) {
    return G.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening();
  }
  toggleHitCanvas() {
    if (!(!this.parent || !this.parent.content)) {
      var t = this.parent, i = !!this.hitCanvas._canvas.parentNode;
      i ? t.content.removeChild(this.hitCanvas._canvas) : t.content.appendChild(this.hitCanvas._canvas);
    }
  }
  destroy() {
    return G.releaseCanvas(this.getNativeCanvasElement(), this.getHitCanvas()._canvas), super.destroy();
  }
};
Ss.prototype.nodeType = "Layer";
wt(Ss);
L.addGetterSetter(Ss, "imageSmoothingEnabled", !0);
L.addGetterSetter(Ss, "clearBeforeDraw", !0);
L.addGetterSetter(Ss, "hitGraphEnabled", !0, Rr());
class Vd extends Ss {
  constructor(t) {
    super(t), this.listening(!1), G.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
  }
}
Vd.prototype.nodeType = "FastLayer";
wt(Vd);
let Il = class extends Wn {
  _validateAdd(t) {
    var i = t.getType();
    i !== "Group" && i !== "Shape" && G.throw("You may only add groups and shapes to groups.");
  }
};
Il.prototype.nodeType = "Group";
wt(Il);
var xd = function() {
  return Al.performance && Al.performance.now ? function() {
    return Al.performance.now();
  } : function() {
    return (/* @__PURE__ */ new Date()).getTime();
  };
}();
class hr {
  constructor(t, i) {
    this.id = hr.animIdCounter++, this.frame = {
      time: 0,
      timeDiff: 0,
      lastTime: xd(),
      frameRate: 0
    }, this.func = t, this.setLayers(i);
  }
  setLayers(t) {
    var i = [];
    return t ? t.length > 0 ? i = t : i = [t] : i = [], this.layers = i, this;
  }
  getLayers() {
    return this.layers;
  }
  addLayer(t) {
    var i = this.layers, l = i.length, f;
    for (f = 0; f < l; f++)
      if (i[f]._id === t._id)
        return !1;
    return this.layers.push(t), !0;
  }
  isRunning() {
    var t = hr, i = t.animations, l = i.length, f;
    for (f = 0; f < l; f++)
      if (i[f].id === this.id)
        return !0;
    return !1;
  }
  start() {
    return this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = xd(), hr._addAnimation(this), this;
  }
  stop() {
    return hr._removeAnimation(this), this;
  }
  _updateFrameObject(t) {
    this.frame.timeDiff = t - this.frame.lastTime, this.frame.lastTime = t, this.frame.time += this.frame.timeDiff, this.frame.frameRate = 1e3 / this.frame.timeDiff;
  }
  static _addAnimation(t) {
    this.animations.push(t), this._handleAnimation();
  }
  static _removeAnimation(t) {
    var i = t.id, l = this.animations, f = l.length, h;
    for (h = 0; h < f; h++)
      if (l[h].id === i) {
        this.animations.splice(h, 1);
        break;
      }
  }
  static _runFrames() {
    var t = {}, i = this.animations, l, f, h, p, g, y, S, k, E;
    for (p = 0; p < i.length; p++)
      if (l = i[p], f = l.layers, h = l.func, l._updateFrameObject(xd()), y = f.length, h ? E = h.call(l, l.frame) !== !1 : E = !0, !!E)
        for (g = 0; g < y; g++)
          S = f[g], S._id !== void 0 && (t[S._id] = S);
    for (k in t)
      t.hasOwnProperty(k) && t[k].batchDraw();
  }
  static _animationLoop() {
    var t = hr;
    t.animations.length ? (t._runFrames(), G.requestAnimFrame(t._animationLoop)) : t.animRunning = !1;
  }
  static _handleAnimation() {
    this.animRunning || (this.animRunning = !0, G.requestAnimFrame(this._animationLoop));
  }
}
hr.animations = [];
hr.animIdCounter = 0;
hr.animRunning = !1;
var nv = {
  node: 1,
  duration: 1,
  easing: 1,
  onFinish: 1,
  yoyo: 1
}, rv = 1, oc = 2, uc = 3, iv = 0, fc = ["fill", "stroke", "shadowColor"];
class av {
  constructor(t, i, l, f, h, p, g) {
    this.prop = t, this.propFunc = i, this.begin = f, this._pos = f, this.duration = p, this._change = 0, this.prevPos = 0, this.yoyo = g, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = l, this._change = h - this.begin, this.pause();
  }
  fire(t) {
    var i = this[t];
    i && i();
  }
  setTime(t) {
    t > this.duration ? this.yoyo ? (this._time = this.duration, this.reverse()) : this.finish() : t < 0 ? this.yoyo ? (this._time = 0, this.play()) : this.reset() : (this._time = t, this.update());
  }
  getTime() {
    return this._time;
  }
  setPosition(t) {
    this.prevPos = this._pos, this.propFunc(t), this._pos = t;
  }
  getPosition(t) {
    return t === void 0 && (t = this._time), this.func(t, this.begin, this._change, this.duration);
  }
  play() {
    this.state = oc, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onPlay");
  }
  reverse() {
    this.state = uc, this._time = this.duration - this._time, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onReverse");
  }
  seek(t) {
    this.pause(), this._time = t, this.update(), this.fire("onSeek");
  }
  reset() {
    this.pause(), this._time = 0, this.update(), this.fire("onReset");
  }
  finish() {
    this.pause(), this._time = this.duration, this.update(), this.fire("onFinish");
  }
  update() {
    this.setPosition(this.getPosition(this._time)), this.fire("onUpdate");
  }
  onEnterFrame() {
    var t = this.getTimer() - this._startTime;
    this.state === oc ? this.setTime(t) : this.state === uc && this.setTime(this.duration - t);
  }
  pause() {
    this.state = rv, this.fire("onPause");
  }
  getTimer() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
}
class Lt {
  constructor(t) {
    var i = this, l = t.node, f = l._id, h, p = t.easing || Xo.Linear, g = !!t.yoyo, y;
    typeof t.duration == "undefined" ? h = 0.3 : t.duration === 0 ? h = 1e-3 : h = t.duration, this.node = l, this._id = iv++;
    var S = l.getLayer() || (l instanceof ke.Stage ? l.getLayers() : null);
    S || G.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."), this.anim = new hr(function() {
      i.tween.onEnterFrame();
    }, S), this.tween = new av(y, function(k) {
      i._tweenFunc(k);
    }, p, 0, 1, h * 1e3, g), this._addListeners(), Lt.attrs[f] || (Lt.attrs[f] = {}), Lt.attrs[f][this._id] || (Lt.attrs[f][this._id] = {}), Lt.tweens[f] || (Lt.tweens[f] = {});
    for (y in t)
      nv[y] === void 0 && this._addAttr(y, t[y]);
    this.reset(), this.onFinish = t.onFinish, this.onReset = t.onReset, this.onUpdate = t.onUpdate;
  }
  _addAttr(t, i) {
    var l = this.node, f = l._id, h, p, g, y, S, k, E, x;
    if (g = Lt.tweens[f][t], g && delete Lt.attrs[f][g][t], h = l.getAttr(t), G._isArray(i))
      if (p = [], S = Math.max(i.length, h.length), t === "points" && i.length !== h.length && (i.length > h.length ? (E = h, h = G._prepareArrayForTween(h, i, l.closed())) : (k = i, i = G._prepareArrayForTween(i, h, l.closed()))), t.indexOf("fill") === 0)
        for (y = 0; y < S; y++)
          if (y % 2 === 0)
            p.push(i[y] - h[y]);
          else {
            var N = G.colorToRGBA(h[y]);
            x = G.colorToRGBA(i[y]), h[y] = N, p.push({
              r: x.r - N.r,
              g: x.g - N.g,
              b: x.b - N.b,
              a: x.a - N.a
            });
          }
      else
        for (y = 0; y < S; y++)
          p.push(i[y] - h[y]);
    else
      fc.indexOf(t) !== -1 ? (h = G.colorToRGBA(h), x = G.colorToRGBA(i), p = {
        r: x.r - h.r,
        g: x.g - h.g,
        b: x.b - h.b,
        a: x.a - h.a
      }) : p = i - h;
    Lt.attrs[f][this._id][t] = {
      start: h,
      diff: p,
      end: i,
      trueEnd: k,
      trueStart: E
    }, Lt.tweens[f][t] = this._id;
  }
  _tweenFunc(t) {
    var i = this.node, l = Lt.attrs[i._id][this._id], f, h, p, g, y, S, k, E;
    for (f in l) {
      if (h = l[f], p = h.start, g = h.diff, E = h.end, G._isArray(p))
        if (y = [], k = Math.max(p.length, E.length), f.indexOf("fill") === 0)
          for (S = 0; S < k; S++)
            S % 2 === 0 ? y.push((p[S] || 0) + g[S] * t) : y.push("rgba(" + Math.round(p[S].r + g[S].r * t) + "," + Math.round(p[S].g + g[S].g * t) + "," + Math.round(p[S].b + g[S].b * t) + "," + (p[S].a + g[S].a * t) + ")");
        else
          for (S = 0; S < k; S++)
            y.push((p[S] || 0) + g[S] * t);
      else
        fc.indexOf(f) !== -1 ? y = "rgba(" + Math.round(p.r + g.r * t) + "," + Math.round(p.g + g.g * t) + "," + Math.round(p.b + g.b * t) + "," + (p.a + g.a * t) + ")" : y = p + g * t;
      i.setAttr(f, y);
    }
  }
  _addListeners() {
    this.tween.onPlay = () => {
      this.anim.start();
    }, this.tween.onReverse = () => {
      this.anim.start();
    }, this.tween.onPause = () => {
      this.anim.stop();
    }, this.tween.onFinish = () => {
      var t = this.node, i = Lt.attrs[t._id][this._id];
      i.points && i.points.trueEnd && t.setAttr("points", i.points.trueEnd), this.onFinish && this.onFinish.call(this);
    }, this.tween.onReset = () => {
      var t = this.node, i = Lt.attrs[t._id][this._id];
      i.points && i.points.trueStart && t.points(i.points.trueStart), this.onReset && this.onReset();
    }, this.tween.onUpdate = () => {
      this.onUpdate && this.onUpdate.call(this);
    };
  }
  play() {
    return this.tween.play(), this;
  }
  reverse() {
    return this.tween.reverse(), this;
  }
  reset() {
    return this.tween.reset(), this;
  }
  seek(t) {
    return this.tween.seek(t * 1e3), this;
  }
  pause() {
    return this.tween.pause(), this;
  }
  finish() {
    return this.tween.finish(), this;
  }
  destroy() {
    var t = this.node._id, i = this._id, l = Lt.tweens[t], f;
    this.pause();
    for (f in l)
      delete Lt.tweens[t][f];
    delete Lt.attrs[t][i];
  }
}
Lt.attrs = {};
Lt.tweens = {};
ue.prototype.to = function(d) {
  var t = d.onFinish;
  d.node = this, d.onFinish = function() {
    this.destroy(), t && t();
  };
  var i = new Lt(d);
  i.play();
};
const Xo = {
  BackEaseIn(d, t, i, l) {
    var f = 1.70158;
    return i * (d /= l) * d * ((f + 1) * d - f) + t;
  },
  BackEaseOut(d, t, i, l) {
    var f = 1.70158;
    return i * ((d = d / l - 1) * d * ((f + 1) * d + f) + 1) + t;
  },
  BackEaseInOut(d, t, i, l) {
    var f = 1.70158;
    return (d /= l / 2) < 1 ? i / 2 * (d * d * (((f *= 1.525) + 1) * d - f)) + t : i / 2 * ((d -= 2) * d * (((f *= 1.525) + 1) * d + f) + 2) + t;
  },
  ElasticEaseIn(d, t, i, l, f, h) {
    var p = 0;
    return d === 0 ? t : (d /= l) === 1 ? t + i : (h || (h = l * 0.3), !f || f < Math.abs(i) ? (f = i, p = h / 4) : p = h / (2 * Math.PI) * Math.asin(i / f), -(f * Math.pow(2, 10 * (d -= 1)) * Math.sin((d * l - p) * (2 * Math.PI) / h)) + t);
  },
  ElasticEaseOut(d, t, i, l, f, h) {
    var p = 0;
    return d === 0 ? t : (d /= l) === 1 ? t + i : (h || (h = l * 0.3), !f || f < Math.abs(i) ? (f = i, p = h / 4) : p = h / (2 * Math.PI) * Math.asin(i / f), f * Math.pow(2, -10 * d) * Math.sin((d * l - p) * (2 * Math.PI) / h) + i + t);
  },
  ElasticEaseInOut(d, t, i, l, f, h) {
    var p = 0;
    return d === 0 ? t : (d /= l / 2) === 2 ? t + i : (h || (h = l * (0.3 * 1.5)), !f || f < Math.abs(i) ? (f = i, p = h / 4) : p = h / (2 * Math.PI) * Math.asin(i / f), d < 1 ? -0.5 * (f * Math.pow(2, 10 * (d -= 1)) * Math.sin((d * l - p) * (2 * Math.PI) / h)) + t : f * Math.pow(2, -10 * (d -= 1)) * Math.sin((d * l - p) * (2 * Math.PI) / h) * 0.5 + i + t);
  },
  BounceEaseOut(d, t, i, l) {
    return (d /= l) < 1 / 2.75 ? i * (7.5625 * d * d) + t : d < 2 / 2.75 ? i * (7.5625 * (d -= 1.5 / 2.75) * d + 0.75) + t : d < 2.5 / 2.75 ? i * (7.5625 * (d -= 2.25 / 2.75) * d + 0.9375) + t : i * (7.5625 * (d -= 2.625 / 2.75) * d + 0.984375) + t;
  },
  BounceEaseIn(d, t, i, l) {
    return i - Xo.BounceEaseOut(l - d, 0, i, l) + t;
  },
  BounceEaseInOut(d, t, i, l) {
    return d < l / 2 ? Xo.BounceEaseIn(d * 2, 0, i, l) * 0.5 + t : Xo.BounceEaseOut(d * 2 - l, 0, i, l) * 0.5 + i * 0.5 + t;
  },
  EaseIn(d, t, i, l) {
    return i * (d /= l) * d + t;
  },
  EaseOut(d, t, i, l) {
    return -i * (d /= l) * (d - 2) + t;
  },
  EaseInOut(d, t, i, l) {
    return (d /= l / 2) < 1 ? i / 2 * d * d + t : -i / 2 * (--d * (d - 2) - 1) + t;
  },
  StrongEaseIn(d, t, i, l) {
    return i * (d /= l) * d * d * d * d + t;
  },
  StrongEaseOut(d, t, i, l) {
    return i * ((d = d / l - 1) * d * d * d * d + 1) + t;
  },
  StrongEaseInOut(d, t, i, l) {
    return (d /= l / 2) < 1 ? i / 2 * d * d * d * d * d + t : i / 2 * ((d -= 2) * d * d * d * d + 2) + t;
  },
  Linear(d, t, i, l) {
    return i * d / l + t;
  }
}, _s = G._assign(ke, {
  Util: G,
  Transform: jn,
  Node: ue,
  Container: Wn,
  Stage: Mf,
  stages: Cf,
  Layer: Ss,
  FastLayer: Vd,
  Group: Il,
  DD: Ze,
  Shape: re,
  shapes: Qo,
  Animation: hr,
  Tween: Lt,
  Easings: Xo,
  Context: Tf,
  Canvas: Rf
});
class Ai extends re {
  _sceneFunc(t) {
    var i = ke.getAngle(this.angle()), l = this.clockwise();
    t.beginPath(), t.arc(0, 0, this.outerRadius(), 0, i, l), t.arc(0, 0, this.innerRadius(), i, 0, !l), t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(t) {
    this.outerRadius(t / 2);
  }
  setHeight(t) {
    this.outerRadius(t / 2);
  }
  getSelfRect() {
    const t = this.innerRadius(), i = this.outerRadius(), l = this.clockwise(), f = ke.getAngle(l ? 360 - this.angle() : this.angle()), h = Math.cos(Math.min(f, Math.PI)), p = 1, g = Math.sin(Math.min(Math.max(Math.PI, f), 3 * Math.PI / 2)), y = Math.sin(Math.min(f, Math.PI / 2)), S = h * (h > 0 ? t : i), k = p * i, E = g * (g > 0 ? t : i), x = y * (y > 0 ? i : t);
    return {
      x: S,
      y: l ? -1 * x : E,
      width: k - S,
      height: x - E
    };
  }
}
Ai.prototype._centroid = !0;
Ai.prototype.className = "Arc";
Ai.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
wt(Ai);
L.addGetterSetter(Ai, "innerRadius", 0, fe());
L.addGetterSetter(Ai, "outerRadius", 0, fe());
L.addGetterSetter(Ai, "angle", 0, fe());
L.addGetterSetter(Ai, "clockwise", !1, Rr());
function zd(d, t, i, l, f, h, p) {
  var g = Math.sqrt(Math.pow(i - d, 2) + Math.pow(l - t, 2)), y = Math.sqrt(Math.pow(f - i, 2) + Math.pow(h - l, 2)), S = p * g / (g + y), k = p * y / (g + y), E = i - S * (f - d), x = l - S * (h - t), N = i + k * (f - d), P = l + k * (h - t);
  return [E, x, N, P];
}
function dc(d, t) {
  var i = d.length, l = [], f, h;
  for (f = 2; f < i - 2; f += 2)
    h = zd(d[f - 2], d[f - 1], d[f], d[f + 1], d[f + 2], d[f + 3], t), !isNaN(h[0]) && (l.push(h[0]), l.push(h[1]), l.push(d[f]), l.push(d[f + 1]), l.push(h[2]), l.push(h[3]));
  return l;
}
let Oi = class extends re {
  constructor(t) {
    super(t), this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", function() {
      this._clearCache("tensionPoints");
    });
  }
  _sceneFunc(t) {
    var i = this.points(), l = i.length, f = this.tension(), h = this.closed(), p = this.bezier(), g, y, S;
    if (l) {
      if (t.beginPath(), t.moveTo(i[0], i[1]), f !== 0 && l > 4) {
        for (g = this.getTensionPoints(), y = g.length, S = h ? 0 : 4, h || t.quadraticCurveTo(g[0], g[1], g[2], g[3]); S < y - 2; )
          t.bezierCurveTo(g[S++], g[S++], g[S++], g[S++], g[S++], g[S++]);
        h || t.quadraticCurveTo(g[y - 2], g[y - 1], i[l - 2], i[l - 1]);
      } else if (p)
        for (S = 2; S < l; )
          t.bezierCurveTo(i[S++], i[S++], i[S++], i[S++], i[S++], i[S++]);
      else
        for (S = 2; S < l; S += 2)
          t.lineTo(i[S], i[S + 1]);
      h ? (t.closePath(), t.fillStrokeShape(this)) : t.strokeShape(this);
    }
  }
  getTensionPoints() {
    return this._getCache("tensionPoints", this._getTensionPoints);
  }
  _getTensionPoints() {
    return this.closed() ? this._getTensionPointsClosed() : dc(this.points(), this.tension());
  }
  _getTensionPointsClosed() {
    var t = this.points(), i = t.length, l = this.tension(), f = zd(t[i - 2], t[i - 1], t[0], t[1], t[2], t[3], l), h = zd(t[i - 4], t[i - 3], t[i - 2], t[i - 1], t[0], t[1], l), p = dc(t, l), g = [f[2], f[3]].concat(p).concat([
      h[0],
      h[1],
      t[i - 2],
      t[i - 1],
      h[2],
      h[3],
      f[0],
      f[1],
      t[0],
      t[1]
    ]);
    return g;
  }
  getWidth() {
    return this.getSelfRect().width;
  }
  getHeight() {
    return this.getSelfRect().height;
  }
  getSelfRect() {
    var t = this.points();
    if (t.length < 4)
      return {
        x: t[0] || 0,
        y: t[1] || 0,
        width: 0,
        height: 0
      };
    this.tension() !== 0 ? t = [
      t[0],
      t[1],
      ...this._getTensionPoints(),
      t[t.length - 2],
      t[t.length - 1]
    ] : t = this.points();
    for (var i = t[0], l = t[0], f = t[1], h = t[1], p, g, y = 0; y < t.length / 2; y++)
      p = t[y * 2], g = t[y * 2 + 1], i = Math.min(i, p), l = Math.max(l, p), f = Math.min(f, g), h = Math.max(h, g);
    return {
      x: i,
      y: f,
      width: l - i,
      height: h - f
    };
  }
};
Oi.prototype.className = "Line";
Oi.prototype._attrsAffectingSize = ["points", "bezier", "tension"];
wt(Oi);
L.addGetterSetter(Oi, "closed", !1);
L.addGetterSetter(Oi, "bezier", !1);
L.addGetterSetter(Oi, "tension", 0, fe());
L.addGetterSetter(Oi, "points", [], gg());
class ot extends re {
  constructor(t) {
    super(t), this.dataArray = [], this.pathLength = 0, this.dataArray = ot.parsePathData(this.data()), this.pathLength = 0;
    for (var i = 0; i < this.dataArray.length; ++i)
      this.pathLength += this.dataArray[i].pathLength;
    this.on("dataChange.konva", function() {
      this.dataArray = ot.parsePathData(this.data()), this.pathLength = 0;
      for (var l = 0; l < this.dataArray.length; ++l)
        this.pathLength += this.dataArray[l].pathLength;
    });
  }
  _sceneFunc(t) {
    var i = this.dataArray;
    t.beginPath();
    for (var l = !1, f = 0; f < i.length; f++) {
      var h = i[f].command, p = i[f].points;
      switch (h) {
        case "L":
          t.lineTo(p[0], p[1]);
          break;
        case "M":
          t.moveTo(p[0], p[1]);
          break;
        case "C":
          t.bezierCurveTo(p[0], p[1], p[2], p[3], p[4], p[5]);
          break;
        case "Q":
          t.quadraticCurveTo(p[0], p[1], p[2], p[3]);
          break;
        case "A":
          var g = p[0], y = p[1], S = p[2], k = p[3], E = p[4], x = p[5], N = p[6], P = p[7], B = S > k ? S : k, z = S > k ? 1 : S / k, Z = S > k ? k / S : 1;
          t.translate(g, y), t.rotate(N), t.scale(z, Z), t.arc(0, 0, B, E, E + x, 1 - P), t.scale(1 / z, 1 / Z), t.rotate(-N), t.translate(-g, -y);
          break;
        case "z":
          l = !0, t.closePath();
          break;
      }
    }
    !l && !this.hasFill() ? t.strokeShape(this) : t.fillStrokeShape(this);
  }
  getSelfRect() {
    var t = [];
    this.dataArray.forEach(function(S) {
      if (S.command === "A") {
        var k = S.points[4], E = S.points[5], x = S.points[4] + E, N = Math.PI / 180;
        if (Math.abs(k - x) < N && (N = Math.abs(k - x)), E < 0)
          for (let P = k - N; P > x; P -= N) {
            const B = ot.getPointOnEllipticalArc(S.points[0], S.points[1], S.points[2], S.points[3], P, 0);
            t.push(B.x, B.y);
          }
        else
          for (let P = k + N; P < x; P += N) {
            const B = ot.getPointOnEllipticalArc(S.points[0], S.points[1], S.points[2], S.points[3], P, 0);
            t.push(B.x, B.y);
          }
      } else if (S.command === "C")
        for (let P = 0; P <= 1; P += 0.01) {
          const B = ot.getPointOnCubicBezier(P, S.start.x, S.start.y, S.points[0], S.points[1], S.points[2], S.points[3], S.points[4], S.points[5]);
          t.push(B.x, B.y);
        }
      else
        t = t.concat(S.points);
    });
    for (var i = t[0], l = t[0], f = t[1], h = t[1], p, g, y = 0; y < t.length / 2; y++)
      p = t[y * 2], g = t[y * 2 + 1], isNaN(p) || (i = Math.min(i, p), l = Math.max(l, p)), isNaN(g) || (f = Math.min(f, g), h = Math.max(h, g));
    return {
      x: i,
      y: f,
      width: l - i,
      height: h - f
    };
  }
  getLength() {
    return this.pathLength;
  }
  getPointAtLength(t) {
    var i, l = 0, f = this.dataArray.length;
    if (!f)
      return null;
    for (; l < f && t > this.dataArray[l].pathLength; )
      t -= this.dataArray[l].pathLength, ++l;
    if (l === f)
      return i = this.dataArray[l - 1].points.slice(-2), {
        x: i[0],
        y: i[1]
      };
    if (t < 0.01)
      return i = this.dataArray[l].points.slice(0, 2), {
        x: i[0],
        y: i[1]
      };
    var h = this.dataArray[l], p = h.points;
    switch (h.command) {
      case "L":
        return ot.getPointOnLine(t, h.start.x, h.start.y, p[0], p[1]);
      case "C":
        return ot.getPointOnCubicBezier(t / h.pathLength, h.start.x, h.start.y, p[0], p[1], p[2], p[3], p[4], p[5]);
      case "Q":
        return ot.getPointOnQuadraticBezier(t / h.pathLength, h.start.x, h.start.y, p[0], p[1], p[2], p[3]);
      case "A":
        var g = p[0], y = p[1], S = p[2], k = p[3], E = p[4], x = p[5], N = p[6];
        return E += x * t / h.pathLength, ot.getPointOnEllipticalArc(g, y, S, k, E, N);
    }
    return null;
  }
  static getLineLength(t, i, l, f) {
    return Math.sqrt((l - t) * (l - t) + (f - i) * (f - i));
  }
  static getPointOnLine(t, i, l, f, h, p, g) {
    p === void 0 && (p = i), g === void 0 && (g = l);
    var y = (h - l) / (f - i + 1e-8), S = Math.sqrt(t * t / (1 + y * y));
    f < i && (S *= -1);
    var k = y * S, E;
    if (f === i)
      E = {
        x: p,
        y: g + k
      };
    else if ((g - l) / (p - i + 1e-8) === y)
      E = {
        x: p + S,
        y: g + k
      };
    else {
      var x, N, P = this.getLineLength(i, l, f, h), B = (p - i) * (f - i) + (g - l) * (h - l);
      B = B / (P * P), x = i + B * (f - i), N = l + B * (h - l);
      var z = this.getLineLength(p, g, x, N), Z = Math.sqrt(t * t - z * z);
      S = Math.sqrt(Z * Z / (1 + y * y)), f < i && (S *= -1), k = y * S, E = {
        x: x + S,
        y: N + k
      };
    }
    return E;
  }
  static getPointOnCubicBezier(t, i, l, f, h, p, g, y, S) {
    function k(z) {
      return z * z * z;
    }
    function E(z) {
      return 3 * z * z * (1 - z);
    }
    function x(z) {
      return 3 * z * (1 - z) * (1 - z);
    }
    function N(z) {
      return (1 - z) * (1 - z) * (1 - z);
    }
    var P = y * k(t) + p * E(t) + f * x(t) + i * N(t), B = S * k(t) + g * E(t) + h * x(t) + l * N(t);
    return {
      x: P,
      y: B
    };
  }
  static getPointOnQuadraticBezier(t, i, l, f, h, p, g) {
    function y(N) {
      return N * N;
    }
    function S(N) {
      return 2 * N * (1 - N);
    }
    function k(N) {
      return (1 - N) * (1 - N);
    }
    var E = p * y(t) + f * S(t) + i * k(t), x = g * y(t) + h * S(t) + l * k(t);
    return {
      x: E,
      y: x
    };
  }
  static getPointOnEllipticalArc(t, i, l, f, h, p) {
    var g = Math.cos(p), y = Math.sin(p), S = {
      x: l * Math.cos(h),
      y: f * Math.sin(h)
    };
    return {
      x: t + (S.x * g - S.y * y),
      y: i + (S.x * y + S.y * g)
    };
  }
  static parsePathData(t) {
    if (!t)
      return [];
    var i = t, l = [
      "m",
      "M",
      "l",
      "L",
      "v",
      "V",
      "h",
      "H",
      "z",
      "Z",
      "c",
      "C",
      "q",
      "Q",
      "t",
      "T",
      "s",
      "S",
      "a",
      "A"
    ];
    i = i.replace(new RegExp(" ", "g"), ",");
    for (var f = 0; f < l.length; f++)
      i = i.replace(new RegExp(l[f], "g"), "|" + l[f]);
    var h = i.split("|"), p = [], g = [], y = 0, S = 0, k = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi, E;
    for (f = 1; f < h.length; f++) {
      var x = h[f], N = x.charAt(0);
      for (x = x.slice(1), g.length = 0; E = k.exec(x); )
        g.push(E[0]);
      for (var P = [], B = 0, z = g.length; B < z; B++) {
        if (g[B] === "00") {
          P.push(0, 0);
          continue;
        }
        var Z = parseFloat(g[B]);
        isNaN(Z) ? P.push(0) : P.push(Z);
      }
      for (; P.length > 0 && !isNaN(P[0]); ) {
        var X = null, Q = [], K = y, se = S, J, de, oe, ae, pe, me, b, te, Ne, Ie;
        switch (N) {
          case "l":
            y += P.shift(), S += P.shift(), X = "L", Q.push(y, S);
            break;
          case "L":
            y = P.shift(), S = P.shift(), Q.push(y, S);
            break;
          case "m":
            var Le = P.shift(), De = P.shift();
            if (y += Le, S += De, X = "M", p.length > 2 && p[p.length - 1].command === "z") {
              for (var ie = p.length - 2; ie >= 0; ie--)
                if (p[ie].command === "M") {
                  y = p[ie].points[0] + Le, S = p[ie].points[1] + De;
                  break;
                }
            }
            Q.push(y, S), N = "l";
            break;
          case "M":
            y = P.shift(), S = P.shift(), X = "M", Q.push(y, S), N = "L";
            break;
          case "h":
            y += P.shift(), X = "L", Q.push(y, S);
            break;
          case "H":
            y = P.shift(), X = "L", Q.push(y, S);
            break;
          case "v":
            S += P.shift(), X = "L", Q.push(y, S);
            break;
          case "V":
            S = P.shift(), X = "L", Q.push(y, S);
            break;
          case "C":
            Q.push(P.shift(), P.shift(), P.shift(), P.shift()), y = P.shift(), S = P.shift(), Q.push(y, S);
            break;
          case "c":
            Q.push(y + P.shift(), S + P.shift(), y + P.shift(), S + P.shift()), y += P.shift(), S += P.shift(), X = "C", Q.push(y, S);
            break;
          case "S":
            de = y, oe = S, J = p[p.length - 1], J.command === "C" && (de = y + (y - J.points[2]), oe = S + (S - J.points[3])), Q.push(de, oe, P.shift(), P.shift()), y = P.shift(), S = P.shift(), X = "C", Q.push(y, S);
            break;
          case "s":
            de = y, oe = S, J = p[p.length - 1], J.command === "C" && (de = y + (y - J.points[2]), oe = S + (S - J.points[3])), Q.push(de, oe, y + P.shift(), S + P.shift()), y += P.shift(), S += P.shift(), X = "C", Q.push(y, S);
            break;
          case "Q":
            Q.push(P.shift(), P.shift()), y = P.shift(), S = P.shift(), Q.push(y, S);
            break;
          case "q":
            Q.push(y + P.shift(), S + P.shift()), y += P.shift(), S += P.shift(), X = "Q", Q.push(y, S);
            break;
          case "T":
            de = y, oe = S, J = p[p.length - 1], J.command === "Q" && (de = y + (y - J.points[0]), oe = S + (S - J.points[1])), y = P.shift(), S = P.shift(), X = "Q", Q.push(de, oe, y, S);
            break;
          case "t":
            de = y, oe = S, J = p[p.length - 1], J.command === "Q" && (de = y + (y - J.points[0]), oe = S + (S - J.points[1])), y += P.shift(), S += P.shift(), X = "Q", Q.push(de, oe, y, S);
            break;
          case "A":
            ae = P.shift(), pe = P.shift(), me = P.shift(), b = P.shift(), te = P.shift(), Ne = y, Ie = S, y = P.shift(), S = P.shift(), X = "A", Q = this.convertEndpointToCenterParameterization(Ne, Ie, y, S, b, te, ae, pe, me);
            break;
          case "a":
            ae = P.shift(), pe = P.shift(), me = P.shift(), b = P.shift(), te = P.shift(), Ne = y, Ie = S, y += P.shift(), S += P.shift(), X = "A", Q = this.convertEndpointToCenterParameterization(Ne, Ie, y, S, b, te, ae, pe, me);
            break;
        }
        p.push({
          command: X || N,
          points: Q,
          start: {
            x: K,
            y: se
          },
          pathLength: this.calcLength(K, se, X || N, Q)
        });
      }
      (N === "z" || N === "Z") && p.push({
        command: "z",
        points: [],
        start: void 0,
        pathLength: 0
      });
    }
    return p;
  }
  static calcLength(t, i, l, f) {
    var h, p, g, y, S = ot;
    switch (l) {
      case "L":
        return S.getLineLength(t, i, f[0], f[1]);
      case "C":
        for (h = 0, p = S.getPointOnCubicBezier(0, t, i, f[0], f[1], f[2], f[3], f[4], f[5]), y = 0.01; y <= 1; y += 0.01)
          g = S.getPointOnCubicBezier(y, t, i, f[0], f[1], f[2], f[3], f[4], f[5]), h += S.getLineLength(p.x, p.y, g.x, g.y), p = g;
        return h;
      case "Q":
        for (h = 0, p = S.getPointOnQuadraticBezier(0, t, i, f[0], f[1], f[2], f[3]), y = 0.01; y <= 1; y += 0.01)
          g = S.getPointOnQuadraticBezier(y, t, i, f[0], f[1], f[2], f[3]), h += S.getLineLength(p.x, p.y, g.x, g.y), p = g;
        return h;
      case "A":
        h = 0;
        var k = f[4], E = f[5], x = f[4] + E, N = Math.PI / 180;
        if (Math.abs(k - x) < N && (N = Math.abs(k - x)), p = S.getPointOnEllipticalArc(f[0], f[1], f[2], f[3], k, 0), E < 0)
          for (y = k - N; y > x; y -= N)
            g = S.getPointOnEllipticalArc(f[0], f[1], f[2], f[3], y, 0), h += S.getLineLength(p.x, p.y, g.x, g.y), p = g;
        else
          for (y = k + N; y < x; y += N)
            g = S.getPointOnEllipticalArc(f[0], f[1], f[2], f[3], y, 0), h += S.getLineLength(p.x, p.y, g.x, g.y), p = g;
        return g = S.getPointOnEllipticalArc(f[0], f[1], f[2], f[3], x, 0), h += S.getLineLength(p.x, p.y, g.x, g.y), h;
    }
    return 0;
  }
  static convertEndpointToCenterParameterization(t, i, l, f, h, p, g, y, S) {
    var k = S * (Math.PI / 180), E = Math.cos(k) * (t - l) / 2 + Math.sin(k) * (i - f) / 2, x = -1 * Math.sin(k) * (t - l) / 2 + Math.cos(k) * (i - f) / 2, N = E * E / (g * g) + x * x / (y * y);
    N > 1 && (g *= Math.sqrt(N), y *= Math.sqrt(N));
    var P = Math.sqrt((g * g * (y * y) - g * g * (x * x) - y * y * (E * E)) / (g * g * (x * x) + y * y * (E * E)));
    h === p && (P *= -1), isNaN(P) && (P = 0);
    var B = P * g * x / y, z = P * -y * E / g, Z = (t + l) / 2 + Math.cos(k) * B - Math.sin(k) * z, X = (i + f) / 2 + Math.sin(k) * B + Math.cos(k) * z, Q = function(pe) {
      return Math.sqrt(pe[0] * pe[0] + pe[1] * pe[1]);
    }, K = function(pe, me) {
      return (pe[0] * me[0] + pe[1] * me[1]) / (Q(pe) * Q(me));
    }, se = function(pe, me) {
      return (pe[0] * me[1] < pe[1] * me[0] ? -1 : 1) * Math.acos(K(pe, me));
    }, J = se([1, 0], [(E - B) / g, (x - z) / y]), de = [(E - B) / g, (x - z) / y], oe = [(-1 * E - B) / g, (-1 * x - z) / y], ae = se(de, oe);
    return K(de, oe) <= -1 && (ae = Math.PI), K(de, oe) >= 1 && (ae = 0), p === 0 && ae > 0 && (ae = ae - 2 * Math.PI), p === 1 && ae < 0 && (ae = ae + 2 * Math.PI), [Z, X, g, y, J, ae, k, p];
  }
}
ot.prototype.className = "Path";
ot.prototype._attrsAffectingSize = ["data"];
wt(ot);
L.addGetterSetter(ot, "data");
class ws extends Oi {
  _sceneFunc(t) {
    super._sceneFunc(t);
    var i = Math.PI * 2, l = this.points(), f = l, h = this.tension() !== 0 && l.length > 4;
    h && (f = this.getTensionPoints());
    var p = this.pointerLength(), g = l.length, y, S;
    if (h) {
      const x = [
        f[f.length - 4],
        f[f.length - 3],
        f[f.length - 2],
        f[f.length - 1],
        l[g - 2],
        l[g - 1]
      ], N = ot.calcLength(f[f.length - 4], f[f.length - 3], "C", x), P = ot.getPointOnQuadraticBezier(Math.min(1, 1 - p / N), x[0], x[1], x[2], x[3], x[4], x[5]);
      y = l[g - 2] - P.x, S = l[g - 1] - P.y;
    } else
      y = l[g - 2] - l[g - 4], S = l[g - 1] - l[g - 3];
    var k = (Math.atan2(S, y) + i) % i, E = this.pointerWidth();
    this.pointerAtEnding() && (t.save(), t.beginPath(), t.translate(l[g - 2], l[g - 1]), t.rotate(k), t.moveTo(0, 0), t.lineTo(-p, E / 2), t.lineTo(-p, -E / 2), t.closePath(), t.restore(), this.__fillStroke(t)), this.pointerAtBeginning() && (t.save(), t.beginPath(), t.translate(l[0], l[1]), h ? (y = (f[0] + f[2]) / 2 - l[0], S = (f[1] + f[3]) / 2 - l[1]) : (y = l[2] - l[0], S = l[3] - l[1]), t.rotate((Math.atan2(-S, -y) + i) % i), t.moveTo(0, 0), t.lineTo(-p, E / 2), t.lineTo(-p, -E / 2), t.closePath(), t.restore(), this.__fillStroke(t));
  }
  __fillStroke(t) {
    var i = this.dashEnabled();
    i && (this.attrs.dashEnabled = !1, t.setLineDash([])), t.fillStrokeShape(this), i && (this.attrs.dashEnabled = !0);
  }
  getSelfRect() {
    const t = super.getSelfRect(), i = this.pointerWidth() / 2;
    return {
      x: t.x - i,
      y: t.y - i,
      width: t.width + i * 2,
      height: t.height + i * 2
    };
  }
}
ws.prototype.className = "Arrow";
wt(ws);
L.addGetterSetter(ws, "pointerLength", 10, fe());
L.addGetterSetter(ws, "pointerWidth", 10, fe());
L.addGetterSetter(ws, "pointerAtBeginning", !1);
L.addGetterSetter(ws, "pointerAtEnding", !0);
let Dl = class extends re {
  _sceneFunc(t) {
    t.beginPath(), t.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, !1), t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(t) {
    this.radius() !== t / 2 && this.radius(t / 2);
  }
  setHeight(t) {
    this.radius() !== t / 2 && this.radius(t / 2);
  }
};
Dl.prototype._centroid = !0;
Dl.prototype.className = "Circle";
Dl.prototype._attrsAffectingSize = ["radius"];
wt(Dl);
L.addGetterSetter(Dl, "radius", 0, fe());
class Oa extends re {
  _sceneFunc(t) {
    var i = this.radiusX(), l = this.radiusY();
    t.beginPath(), t.save(), i !== l && t.scale(1, l / i), t.arc(0, 0, i, 0, Math.PI * 2, !1), t.restore(), t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    return this.radiusX() * 2;
  }
  getHeight() {
    return this.radiusY() * 2;
  }
  setWidth(t) {
    this.radiusX(t / 2);
  }
  setHeight(t) {
    this.radiusY(t / 2);
  }
}
Oa.prototype.className = "Ellipse";
Oa.prototype._centroid = !0;
Oa.prototype._attrsAffectingSize = ["radiusX", "radiusY"];
wt(Oa);
L.addComponentsGetterSetter(Oa, "radius", ["x", "y"]);
L.addGetterSetter(Oa, "radiusX", 0, fe());
L.addGetterSetter(Oa, "radiusY", 0, fe());
let $r = class bc extends re {
  constructor(t) {
    super(t), this.on("imageChange.konva", () => {
      this._setImageLoad();
    }), this._setImageLoad();
  }
  _setImageLoad() {
    const t = this.image();
    t && t.complete || t && t.readyState === 4 || t && t.addEventListener && t.addEventListener("load", () => {
      this._requestDraw();
    });
  }
  _useBufferCanvas() {
    return super._useBufferCanvas(!0);
  }
  _sceneFunc(t) {
    const i = this.getWidth(), l = this.getHeight(), f = this.cornerRadius(), h = this.attrs.image;
    let p;
    if (h) {
      const g = this.attrs.cropWidth, y = this.attrs.cropHeight;
      g && y ? p = [
        h,
        this.cropX(),
        this.cropY(),
        g,
        y,
        0,
        0,
        i,
        l
      ] : p = [h, 0, 0, i, l];
    }
    (this.hasFill() || this.hasStroke() || f) && (t.beginPath(), f ? G.drawRoundedRectPath(t, i, l, f) : t.rect(0, 0, i, l), t.closePath(), t.fillStrokeShape(this)), h && (f && t.clip(), t.drawImage.apply(t, p));
  }
  _hitFunc(t) {
    var i = this.width(), l = this.height(), f = this.cornerRadius();
    t.beginPath(), f ? G.drawRoundedRectPath(t, i, l, f) : t.rect(0, 0, i, l), t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    var t, i;
    return (t = this.attrs.width) !== null && t !== void 0 ? t : (i = this.image()) === null || i === void 0 ? void 0 : i.width;
  }
  getHeight() {
    var t, i;
    return (t = this.attrs.height) !== null && t !== void 0 ? t : (i = this.image()) === null || i === void 0 ? void 0 : i.height;
  }
  static fromURL(t, i, l = null) {
    var f = G.createImageElement();
    f.onload = function() {
      var h = new bc({
        image: f
      });
      i(h);
    }, f.onerror = l, f.crossOrigin = "Anonymous", f.src = t;
  }
};
$r.prototype.className = "Image";
wt($r);
L.addGetterSetter($r, "cornerRadius", 0, Ud(4));
L.addGetterSetter($r, "image");
L.addComponentsGetterSetter($r, "crop", ["x", "y", "width", "height"]);
L.addGetterSetter($r, "cropX", 0, fe());
L.addGetterSetter($r, "cropY", 0, fe());
L.addGetterSetter($r, "cropWidth", 0, fe());
L.addGetterSetter($r, "cropHeight", 0, fe());
var ep = [
  "fontFamily",
  "fontSize",
  "fontStyle",
  "padding",
  "lineHeight",
  "text",
  "width",
  "height",
  "pointerDirection",
  "pointerWidth",
  "pointerHeight"
], sv = "Change.konva", lv = "none", Dd = "up", Fd = "right", Gd = "down", Bd = "left", ov = ep.length;
class Yd extends Il {
  constructor(t) {
    super(t), this.on("add.konva", function(i) {
      this._addListeners(i.child), this._sync();
    });
  }
  getText() {
    return this.find("Text")[0];
  }
  getTag() {
    return this.find("Tag")[0];
  }
  _addListeners(t) {
    var i = this, l, f = function() {
      i._sync();
    };
    for (l = 0; l < ov; l++)
      t.on(ep[l] + sv, f);
  }
  getWidth() {
    return this.getText().width();
  }
  getHeight() {
    return this.getText().height();
  }
  _sync() {
    var t = this.getText(), i = this.getTag(), l, f, h, p, g, y, S;
    if (t && i) {
      switch (l = t.width(), f = t.height(), h = i.pointerDirection(), p = i.pointerWidth(), S = i.pointerHeight(), g = 0, y = 0, h) {
        case Dd:
          g = l / 2, y = -1 * S;
          break;
        case Fd:
          g = l + p, y = f / 2;
          break;
        case Gd:
          g = l / 2, y = f + S;
          break;
        case Bd:
          g = -1 * p, y = f / 2;
          break;
      }
      i.setAttrs({
        x: -1 * g,
        y: -1 * y,
        width: l,
        height: f
      }), t.setAttrs({
        x: -1 * g,
        y: -1 * y
      });
    }
  }
}
Yd.prototype.className = "Label";
wt(Yd);
class Cs extends re {
  _sceneFunc(t) {
    var i = this.width(), l = this.height(), f = this.pointerDirection(), h = this.pointerWidth(), p = this.pointerHeight(), g = this.cornerRadius();
    let y = 0, S = 0, k = 0, E = 0;
    typeof g == "number" ? y = S = k = E = Math.min(g, i / 2, l / 2) : (y = Math.min(g[0] || 0, i / 2, l / 2), S = Math.min(g[1] || 0, i / 2, l / 2), E = Math.min(g[2] || 0, i / 2, l / 2), k = Math.min(g[3] || 0, i / 2, l / 2)), t.beginPath(), t.moveTo(y, 0), f === Dd && (t.lineTo((i - h) / 2, 0), t.lineTo(i / 2, -1 * p), t.lineTo((i + h) / 2, 0)), t.lineTo(i - S, 0), t.arc(i - S, S, S, Math.PI * 3 / 2, 0, !1), f === Fd && (t.lineTo(i, (l - p) / 2), t.lineTo(i + h, l / 2), t.lineTo(i, (l + p) / 2)), t.lineTo(i, l - E), t.arc(i - E, l - E, E, 0, Math.PI / 2, !1), f === Gd && (t.lineTo((i + h) / 2, l), t.lineTo(i / 2, l + p), t.lineTo((i - h) / 2, l)), t.lineTo(k, l), t.arc(k, l - k, k, Math.PI / 2, Math.PI, !1), f === Bd && (t.lineTo(0, (l + p) / 2), t.lineTo(-1 * h, l / 2), t.lineTo(0, (l - p) / 2)), t.lineTo(0, y), t.arc(y, y, y, Math.PI, Math.PI * 3 / 2, !1), t.closePath(), t.fillStrokeShape(this);
  }
  getSelfRect() {
    var t = 0, i = 0, l = this.pointerWidth(), f = this.pointerHeight(), h = this.pointerDirection(), p = this.width(), g = this.height();
    return h === Dd ? (i -= f, g += f) : h === Gd ? g += f : h === Bd ? (t -= l * 1.5, p += l) : h === Fd && (p += l * 1.5), {
      x: t,
      y: i,
      width: p,
      height: g
    };
  }
}
Cs.prototype.className = "Tag";
wt(Cs);
L.addGetterSetter(Cs, "pointerDirection", lv);
L.addGetterSetter(Cs, "pointerWidth", 0, fe());
L.addGetterSetter(Cs, "pointerHeight", 0, fe());
L.addGetterSetter(Cs, "cornerRadius", 0, Ud(4));
class qo extends re {
  _sceneFunc(t) {
    var i = this.cornerRadius(), l = this.width(), f = this.height();
    t.beginPath(), i ? G.drawRoundedRectPath(t, l, f, i) : t.rect(0, 0, l, f), t.closePath(), t.fillStrokeShape(this);
  }
}
qo.prototype.className = "Rect";
wt(qo);
L.addGetterSetter(qo, "cornerRadius", 0, Ud(4));
class ks extends re {
  _sceneFunc(t) {
    const i = this._getPoints();
    t.beginPath(), t.moveTo(i[0].x, i[0].y);
    for (var l = 1; l < i.length; l++)
      t.lineTo(i[l].x, i[l].y);
    t.closePath(), t.fillStrokeShape(this);
  }
  _getPoints() {
    const t = this.attrs.sides, i = this.attrs.radius || 0, l = [];
    for (var f = 0; f < t; f++)
      l.push({
        x: i * Math.sin(f * 2 * Math.PI / t),
        y: -1 * i * Math.cos(f * 2 * Math.PI / t)
      });
    return l;
  }
  getSelfRect() {
    const t = this._getPoints();
    var i = t[0].x, l = t[0].y, f = t[0].x, h = t[0].y;
    return t.forEach((p) => {
      i = Math.min(i, p.x), l = Math.max(l, p.x), f = Math.min(f, p.y), h = Math.max(h, p.y);
    }), {
      x: i,
      y: f,
      width: l - i,
      height: h - f
    };
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(t) {
    this.radius(t / 2);
  }
  setHeight(t) {
    this.radius(t / 2);
  }
}
ks.prototype.className = "RegularPolygon";
ks.prototype._centroid = !0;
ks.prototype._attrsAffectingSize = ["radius"];
wt(ks);
L.addGetterSetter(ks, "radius", 0, fe());
L.addGetterSetter(ks, "sides", 0, fe());
var hc = Math.PI * 2;
class xs extends re {
  _sceneFunc(t) {
    t.beginPath(), t.arc(0, 0, this.innerRadius(), 0, hc, !1), t.moveTo(this.outerRadius(), 0), t.arc(0, 0, this.outerRadius(), hc, 0, !0), t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(t) {
    this.outerRadius(t / 2);
  }
  setHeight(t) {
    this.outerRadius(t / 2);
  }
}
xs.prototype.className = "Ring";
xs.prototype._centroid = !0;
xs.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
wt(xs);
L.addGetterSetter(xs, "innerRadius", 0, fe());
L.addGetterSetter(xs, "outerRadius", 0, fe());
class br extends re {
  constructor(t) {
    super(t), this._updated = !0, this.anim = new hr(() => {
      var i = this._updated;
      return this._updated = !1, i;
    }), this.on("animationChange.konva", function() {
      this.frameIndex(0);
    }), this.on("frameIndexChange.konva", function() {
      this._updated = !0;
    }), this.on("frameRateChange.konva", function() {
      this.anim.isRunning() && (clearInterval(this.interval), this._setInterval());
    });
  }
  _sceneFunc(t) {
    var i = this.animation(), l = this.frameIndex(), f = l * 4, h = this.animations()[i], p = this.frameOffsets(), g = h[f + 0], y = h[f + 1], S = h[f + 2], k = h[f + 3], E = this.image();
    if ((this.hasFill() || this.hasStroke()) && (t.beginPath(), t.rect(0, 0, S, k), t.closePath(), t.fillStrokeShape(this)), E)
      if (p) {
        var x = p[i], N = l * 2;
        t.drawImage(E, g, y, S, k, x[N + 0], x[N + 1], S, k);
      } else
        t.drawImage(E, g, y, S, k, 0, 0, S, k);
  }
  _hitFunc(t) {
    var i = this.animation(), l = this.frameIndex(), f = l * 4, h = this.animations()[i], p = this.frameOffsets(), g = h[f + 2], y = h[f + 3];
    if (t.beginPath(), p) {
      var S = p[i], k = l * 2;
      t.rect(S[k + 0], S[k + 1], g, y);
    } else
      t.rect(0, 0, g, y);
    t.closePath(), t.fillShape(this);
  }
  _useBufferCanvas() {
    return super._useBufferCanvas(!0);
  }
  _setInterval() {
    var t = this;
    this.interval = setInterval(function() {
      t._updateIndex();
    }, 1e3 / this.frameRate());
  }
  start() {
    if (!this.isRunning()) {
      var t = this.getLayer();
      this.anim.setLayers(t), this._setInterval(), this.anim.start();
    }
  }
  stop() {
    this.anim.stop(), clearInterval(this.interval);
  }
  isRunning() {
    return this.anim.isRunning();
  }
  _updateIndex() {
    var t = this.frameIndex(), i = this.animation(), l = this.animations(), f = l[i], h = f.length / 4;
    t < h - 1 ? this.frameIndex(t + 1) : this.frameIndex(0);
  }
}
br.prototype.className = "Sprite";
wt(br);
L.addGetterSetter(br, "animation");
L.addGetterSetter(br, "animations");
L.addGetterSetter(br, "frameOffsets");
L.addGetterSetter(br, "image");
L.addGetterSetter(br, "frameIndex", 0, fe());
L.addGetterSetter(br, "frameRate", 17, fe());
L.backCompat(br, {
  index: "frameIndex",
  getIndex: "getFrameIndex",
  setIndex: "setFrameIndex"
});
class Ia extends re {
  _sceneFunc(t) {
    var i = this.innerRadius(), l = this.outerRadius(), f = this.numPoints();
    t.beginPath(), t.moveTo(0, 0 - l);
    for (var h = 1; h < f * 2; h++) {
      var p = h % 2 === 0 ? l : i, g = p * Math.sin(h * Math.PI / f), y = -1 * p * Math.cos(h * Math.PI / f);
      t.lineTo(g, y);
    }
    t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(t) {
    this.outerRadius(t / 2);
  }
  setHeight(t) {
    this.outerRadius(t / 2);
  }
}
Ia.prototype.className = "Star";
Ia.prototype._centroid = !0;
Ia.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
wt(Ia);
L.addGetterSetter(Ia, "numPoints", 5, fe());
L.addGetterSetter(Ia, "innerRadius", 0, fe());
L.addGetterSetter(Ia, "outerRadius", 0, fe());
function tp(d) {
  return Array.from(d);
}
var Ll = "auto", uv = "center", Go = "justify", fv = "Change.konva", dv = "2d", cc = "-", np = "left", hv = "text", cv = "Text", pv = "top", gv = "bottom", pc = "middle", rp = "normal", vv = "px ", mf = " ", mv = "right", yv = "word", _v = "char", gc = "none", Ed = "…", ip = [
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontVariant",
  "padding",
  "align",
  "verticalAlign",
  "lineHeight",
  "text",
  "width",
  "height",
  "wrap",
  "ellipsis",
  "letterSpacing"
], Sv = ip.length;
function wv(d) {
  return d.split(",").map((t) => {
    t = t.trim();
    const i = t.indexOf(" ") >= 0, l = t.indexOf('"') >= 0 || t.indexOf("'") >= 0;
    return i && !l && (t = `"${t}"`), t;
  }).join(", ");
}
var yf;
function Pd() {
  return yf || (yf = G.createCanvasElement().getContext(dv), yf);
}
function Cv(d) {
  d.fillText(this._partialText, this._partialTextX, this._partialTextY);
}
function kv(d) {
  d.strokeText(this._partialText, this._partialTextX, this._partialTextY);
}
function xv(d) {
  return d = d || {}, !d.fillLinearGradientColorStops && !d.fillRadialGradientColorStops && !d.fillPatternImage && (d.fill = d.fill || "black"), d;
}
class St extends re {
  constructor(t) {
    super(xv(t)), this._partialTextX = 0, this._partialTextY = 0;
    for (var i = 0; i < Sv; i++)
      this.on(ip[i] + fv, this._setTextData);
    this._setTextData();
  }
  _sceneFunc(t) {
    var i = this.textArr, l = i.length;
    if (this.text()) {
      var f = this.padding(), h = this.fontSize(), p = this.lineHeight() * h, g = this.verticalAlign(), y = 0, S = this.align(), k = this.getWidth(), E = this.letterSpacing(), x = this.fill(), N = this.textDecoration(), P = N.indexOf("underline") !== -1, B = N.indexOf("line-through") !== -1, z, Z = 0, Z = p / 2, X = 0, Q = 0;
      for (t.setAttr("font", this._getContextFont()), t.setAttr("textBaseline", pc), t.setAttr("textAlign", np), g === pc ? y = (this.getHeight() - l * p - f * 2) / 2 : g === gv && (y = this.getHeight() - l * p - f * 2), t.translate(f, y + f), z = 0; z < l; z++) {
        var X = 0, Q = 0, K = i[z], se = K.text, J = K.width, de = K.lastInParagraph, oe, ae, pe;
        if (t.save(), S === mv ? X += k - J - f * 2 : S === uv && (X += (k - J - f * 2) / 2), P) {
          t.save(), t.beginPath(), t.moveTo(X, Z + Q + Math.round(h / 2)), oe = se.split(" ").length - 1, ae = oe === 0, pe = S === Go && !de ? k - f * 2 : J, t.lineTo(X + Math.round(pe), Z + Q + Math.round(h / 2)), t.lineWidth = h / 15;
          const Le = this._getLinearGradient();
          t.strokeStyle = Le || x, t.stroke(), t.restore();
        }
        if (B) {
          t.save(), t.beginPath(), t.moveTo(X, Z + Q), oe = se.split(" ").length - 1, ae = oe === 0, pe = S === Go && de && !ae ? k - f * 2 : J, t.lineTo(X + Math.round(pe), Z + Q), t.lineWidth = h / 15;
          const Le = this._getLinearGradient();
          t.strokeStyle = Le || x, t.stroke(), t.restore();
        }
        if (E !== 0 || S === Go) {
          oe = se.split(" ").length - 1;
          for (var me = tp(se), b = 0; b < me.length; b++) {
            var te = me[b];
            te === " " && !de && S === Go && (X += (k - f * 2 - J) / oe), this._partialTextX = X, this._partialTextY = Z + Q, this._partialText = te, t.fillStrokeShape(this), X += this.measureSize(te).width + E;
          }
        } else
          this._partialTextX = X, this._partialTextY = Z + Q, this._partialText = se, t.fillStrokeShape(this);
        t.restore(), l > 1 && (Z += p);
      }
    }
  }
  _hitFunc(t) {
    var i = this.getWidth(), l = this.getHeight();
    t.beginPath(), t.rect(0, 0, i, l), t.closePath(), t.fillStrokeShape(this);
  }
  setText(t) {
    var i = G._isString(t) ? t : t == null ? "" : t + "";
    return this._setAttr(hv, i), this;
  }
  getWidth() {
    var t = this.attrs.width === Ll || this.attrs.width === void 0;
    return t ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
  }
  getHeight() {
    var t = this.attrs.height === Ll || this.attrs.height === void 0;
    return t ? this.fontSize() * this.textArr.length * this.lineHeight() + this.padding() * 2 : this.attrs.height;
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    return G.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
  }
  measureSize(t) {
    var i = Pd(), l = this.fontSize(), f;
    return i.save(), i.font = this._getContextFont(), f = i.measureText(t), i.restore(), {
      width: f.width,
      height: l
    };
  }
  _getContextFont() {
    return this.fontStyle() + mf + this.fontVariant() + mf + (this.fontSize() + vv) + wv(this.fontFamily());
  }
  _addTextLine(t) {
    this.align() === Go && (t = t.trim());
    var l = this._getTextWidth(t);
    return this.textArr.push({
      text: t,
      width: l,
      lastInParagraph: !1
    });
  }
  _getTextWidth(t) {
    var i = this.letterSpacing(), l = t.length;
    return Pd().measureText(t).width + (l ? i * (l - 1) : 0);
  }
  _setTextData() {
    var t = this.text().split(`
`), i = +this.fontSize(), l = 0, f = this.lineHeight() * i, h = this.attrs.width, p = this.attrs.height, g = h !== Ll && h !== void 0, y = p !== Ll && p !== void 0, S = this.padding(), k = h - S * 2, E = p - S * 2, x = 0, N = this.wrap(), P = N !== gc, B = N !== _v && P, z = this.ellipsis();
    this.textArr = [], Pd().font = this._getContextFont();
    for (var Z = z ? this._getTextWidth(Ed) : 0, X = 0, Q = t.length; X < Q; ++X) {
      var K = t[X], se = this._getTextWidth(K);
      if (g && se > k)
        for (; K.length > 0; ) {
          for (var J = 0, de = K.length, oe = "", ae = 0; J < de; ) {
            var pe = J + de >>> 1, me = K.slice(0, pe + 1), b = this._getTextWidth(me) + Z;
            b <= k ? (J = pe + 1, oe = me, ae = b) : de = pe;
          }
          if (oe) {
            if (B) {
              var te, Ne = K[oe.length], Ie = Ne === mf || Ne === cc;
              Ie && ae <= k ? te = oe.length : te = Math.max(oe.lastIndexOf(mf), oe.lastIndexOf(cc)) + 1, te > 0 && (J = te, oe = oe.slice(0, J), ae = this._getTextWidth(oe));
            }
            oe = oe.trimRight(), this._addTextLine(oe), l = Math.max(l, ae), x += f;
            var Le = this._shouldHandleEllipsis(x);
            if (Le) {
              this._tryToAddEllipsisToLastLine();
              break;
            }
            if (K = K.slice(J), K = K.trimLeft(), K.length > 0 && (se = this._getTextWidth(K), se <= k)) {
              this._addTextLine(K), x += f, l = Math.max(l, se);
              break;
            }
          } else
            break;
        }
      else
        this._addTextLine(K), x += f, l = Math.max(l, se), this._shouldHandleEllipsis(x) && X < Q - 1 && this._tryToAddEllipsisToLastLine();
      if (this.textArr[this.textArr.length - 1] && (this.textArr[this.textArr.length - 1].lastInParagraph = !0), y && x + f > E)
        break;
    }
    this.textHeight = i, this.textWidth = l;
  }
  _shouldHandleEllipsis(t) {
    var i = +this.fontSize(), l = this.lineHeight() * i, f = this.attrs.height, h = f !== Ll && f !== void 0, p = this.padding(), g = f - p * 2, y = this.wrap(), S = y !== gc;
    return !S || h && t + l > g;
  }
  _tryToAddEllipsisToLastLine() {
    var t = this.attrs.width, i = t !== Ll && t !== void 0, l = this.padding(), f = t - l * 2, h = this.ellipsis(), p = this.textArr[this.textArr.length - 1];
    if (!(!p || !h)) {
      if (i) {
        var g = this._getTextWidth(p.text + Ed) < f;
        g || (p.text = p.text.slice(0, p.text.length - 3));
      }
      this.textArr.splice(this.textArr.length - 1, 1), this._addTextLine(p.text + Ed);
    }
  }
  getStrokeScaleEnabled() {
    return !0;
  }
}
St.prototype._fillFunc = Cv;
St.prototype._strokeFunc = kv;
St.prototype.className = cv;
St.prototype._attrsAffectingSize = [
  "text",
  "fontSize",
  "padding",
  "wrap",
  "lineHeight",
  "letterSpacing"
];
wt(St);
L.overWriteSetter(St, "width", Hd());
L.overWriteSetter(St, "height", Hd());
L.addGetterSetter(St, "fontFamily", "Arial");
L.addGetterSetter(St, "fontSize", 12, fe());
L.addGetterSetter(St, "fontStyle", rp);
L.addGetterSetter(St, "fontVariant", rp);
L.addGetterSetter(St, "padding", 0, fe());
L.addGetterSetter(St, "align", np);
L.addGetterSetter(St, "verticalAlign", pv);
L.addGetterSetter(St, "lineHeight", 1, fe());
L.addGetterSetter(St, "wrap", yv);
L.addGetterSetter(St, "ellipsis", !1, Rr());
L.addGetterSetter(St, "letterSpacing", 0, fe());
L.addGetterSetter(St, "text", "", zl());
L.addGetterSetter(St, "textDecoration", "");
var Ev = "", ap = "normal";
function sp(d) {
  d.fillText(this.partialText, 0, 0);
}
function lp(d) {
  d.strokeText(this.partialText, 0, 0);
}
class Ut extends re {
  constructor(t) {
    super(t), this.dummyCanvas = G.createCanvasElement(), this.dataArray = [], this.dataArray = ot.parsePathData(this.attrs.data), this.on("dataChange.konva", function() {
      this.dataArray = ot.parsePathData(this.attrs.data), this._setTextData();
    }), this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva", this._setTextData), this._setTextData();
  }
  _sceneFunc(t) {
    t.setAttr("font", this._getContextFont()), t.setAttr("textBaseline", this.textBaseline()), t.setAttr("textAlign", "left"), t.save();
    var i = this.textDecoration(), l = this.fill(), f = this.fontSize(), h = this.glyphInfo;
    i === "underline" && t.beginPath();
    for (var p = 0; p < h.length; p++) {
      t.save();
      var g = h[p].p0;
      t.translate(g.x, g.y), t.rotate(h[p].rotation), this.partialText = h[p].text, t.fillStrokeShape(this), i === "underline" && (p === 0 && t.moveTo(0, f / 2 + 1), t.lineTo(f, f / 2 + 1)), t.restore();
    }
    i === "underline" && (t.strokeStyle = l, t.lineWidth = f / 20, t.stroke()), t.restore();
  }
  _hitFunc(t) {
    t.beginPath();
    var i = this.glyphInfo;
    if (i.length >= 1) {
      var l = i[0].p0;
      t.moveTo(l.x, l.y);
    }
    for (var f = 0; f < i.length; f++) {
      var h = i[f].p1;
      t.lineTo(h.x, h.y);
    }
    t.setAttr("lineWidth", this.fontSize()), t.setAttr("strokeStyle", this.colorKey), t.stroke();
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    return G.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
  }
  setText(t) {
    return St.prototype.setText.call(this, t);
  }
  _getContextFont() {
    return St.prototype._getContextFont.call(this);
  }
  _getTextSize(t) {
    var i = this.dummyCanvas, l = i.getContext("2d");
    l.save(), l.font = this._getContextFont();
    var f = l.measureText(t);
    return l.restore(), {
      width: f.width,
      height: parseInt(this.attrs.fontSize, 10)
    };
  }
  _setTextData() {
    var t = this, i = this._getTextSize(this.attrs.text), l = this.letterSpacing(), f = this.align(), h = this.kerningFunc();
    this.textWidth = i.width, this.textHeight = i.height;
    var p = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * l, 0);
    this.glyphInfo = [];
    for (var g = 0, y = 0; y < t.dataArray.length; y++)
      t.dataArray[y].pathLength > 0 && (g += t.dataArray[y].pathLength);
    var S = 0;
    f === "center" && (S = Math.max(0, g / 2 - p / 2)), f === "right" && (S = Math.max(0, g - p));
    for (var k = tp(this.text()), E = this.text().split(" ").length - 1, x, N, P, B = -1, z = 0, Z = function() {
      z = 0;
      for (var b = t.dataArray, te = B + 1; te < b.length; te++) {
        if (b[te].pathLength > 0)
          return B = te, b[te];
        b[te].command === "M" && (x = {
          x: b[te].points[0],
          y: b[te].points[1]
        });
      }
      return {};
    }, X = function(b) {
      var te = t._getTextSize(b).width + l;
      b === " " && f === "justify" && (te += (g - p) / E);
      var Ne = 0, Ie = 0;
      for (N = void 0; Math.abs(te - Ne) / te > 0.01 && Ie < 20; ) {
        Ie++;
        for (var Le = Ne; P === void 0; )
          P = Z(), P && Le + P.pathLength < te && (Le += P.pathLength, P = void 0);
        if (Object.keys(P).length === 0 || x === void 0)
          return;
        var De = !1;
        switch (P.command) {
          case "L":
            ot.getLineLength(x.x, x.y, P.points[0], P.points[1]) > te ? N = ot.getPointOnLine(te, x.x, x.y, P.points[0], P.points[1], x.x, x.y) : P = void 0;
            break;
          case "A":
            var ie = P.points[4], we = P.points[5], M = P.points[4] + we;
            z === 0 ? z = ie + 1e-8 : te > Ne ? z += Math.PI / 180 * we / Math.abs(we) : z -= Math.PI / 360 * we / Math.abs(we), (we < 0 && z < M || we >= 0 && z > M) && (z = M, De = !0), N = ot.getPointOnEllipticalArc(P.points[0], P.points[1], P.points[2], P.points[3], z, P.points[6]);
            break;
          case "C":
            z === 0 ? te > P.pathLength ? z = 1e-8 : z = te / P.pathLength : te > Ne ? z += (te - Ne) / P.pathLength / 2 : z = Math.max(z - (Ne - te) / P.pathLength / 2, 0), z > 1 && (z = 1, De = !0), N = ot.getPointOnCubicBezier(z, P.start.x, P.start.y, P.points[0], P.points[1], P.points[2], P.points[3], P.points[4], P.points[5]);
            break;
          case "Q":
            z === 0 ? z = te / P.pathLength : te > Ne ? z += (te - Ne) / P.pathLength : z -= (Ne - te) / P.pathLength, z > 1 && (z = 1, De = !0), N = ot.getPointOnQuadraticBezier(z, P.start.x, P.start.y, P.points[0], P.points[1], P.points[2], P.points[3]);
            break;
        }
        N !== void 0 && (Ne = ot.getLineLength(x.x, x.y, N.x, N.y)), De && (De = !1, P = void 0);
      }
    }, Q = "C", K = t._getTextSize(Q).width + l, se = S / K - 1, J = 0; J < se && (X(Q), !(x === void 0 || N === void 0)); J++)
      x = N;
    for (var de = 0; de < k.length && (X(k[de]), !(x === void 0 || N === void 0)); de++) {
      var oe = ot.getLineLength(x.x, x.y, N.x, N.y), ae = 0;
      if (h)
        try {
          ae = h(k[de - 1], k[de]) * this.fontSize();
        } catch (b) {
          ae = 0;
        }
      x.x += ae, N.x += ae, this.textWidth += ae;
      var pe = ot.getPointOnLine(ae + oe / 2, x.x, x.y, N.x, N.y), me = Math.atan2(N.y - x.y, N.x - x.x);
      this.glyphInfo.push({
        transposeX: pe.x,
        transposeY: pe.y,
        text: k[de],
        rotation: me,
        p0: x,
        p1: N
      }), x = N;
    }
  }
  getSelfRect() {
    if (!this.glyphInfo.length)
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    var t = [];
    this.glyphInfo.forEach(function(k) {
      t.push(k.p0.x), t.push(k.p0.y), t.push(k.p1.x), t.push(k.p1.y);
    });
    for (var i = t[0] || 0, l = t[0] || 0, f = t[1] || 0, h = t[1] || 0, p, g, y = 0; y < t.length / 2; y++)
      p = t[y * 2], g = t[y * 2 + 1], i = Math.min(i, p), l = Math.max(l, p), f = Math.min(f, g), h = Math.max(h, g);
    var S = this.fontSize();
    return {
      x: i - S / 2,
      y: f - S / 2,
      width: l - i + S,
      height: h - f + S
    };
  }
  destroy() {
    return G.releaseCanvas(this.dummyCanvas), super.destroy();
  }
}
Ut.prototype._fillFunc = sp;
Ut.prototype._strokeFunc = lp;
Ut.prototype._fillFuncHit = sp;
Ut.prototype._strokeFuncHit = lp;
Ut.prototype.className = "TextPath";
Ut.prototype._attrsAffectingSize = ["text", "fontSize", "data"];
wt(Ut);
L.addGetterSetter(Ut, "data");
L.addGetterSetter(Ut, "fontFamily", "Arial");
L.addGetterSetter(Ut, "fontSize", 12, fe());
L.addGetterSetter(Ut, "fontStyle", ap);
L.addGetterSetter(Ut, "align", "left");
L.addGetterSetter(Ut, "letterSpacing", 0, fe());
L.addGetterSetter(Ut, "textBaseline", "middle");
L.addGetterSetter(Ut, "fontVariant", ap);
L.addGetterSetter(Ut, "text", Ev);
L.addGetterSetter(Ut, "textDecoration", null);
L.addGetterSetter(Ut, "kerningFunc", null);
var op = "tr-konva", Pv = [
  "resizeEnabledChange",
  "rotateAnchorOffsetChange",
  "rotateEnabledChange",
  "enabledAnchorsChange",
  "anchorSizeChange",
  "borderEnabledChange",
  "borderStrokeChange",
  "borderStrokeWidthChange",
  "borderDashChange",
  "anchorStrokeChange",
  "anchorStrokeWidthChange",
  "anchorFillChange",
  "anchorCornerRadiusChange",
  "ignoreStrokeChange"
].map((d) => d + `.${op}`).join(" "), vc = "nodesRect", Tv = [
  "widthChange",
  "heightChange",
  "scaleXChange",
  "scaleYChange",
  "skewXChange",
  "skewYChange",
  "rotationChange",
  "offsetXChange",
  "offsetYChange",
  "transformsEnabledChange",
  "strokeWidthChange"
], Rv = {
  "top-left": -45,
  "top-center": 0,
  "top-right": 45,
  "middle-right": -90,
  "middle-left": 90,
  "bottom-left": -135,
  "bottom-center": 180,
  "bottom-right": 135
};
const Mv = "ontouchstart" in ke._global;
function Lv(d, t) {
  if (d === "rotater")
    return "crosshair";
  t += G.degToRad(Rv[d] || 0);
  var i = (G.radToDeg(t) % 360 + 360) % 360;
  return G._inRange(i, 315 + 22.5, 360) || G._inRange(i, 0, 22.5) ? "ns-resize" : G._inRange(i, 45 - 22.5, 45 + 22.5) ? "nesw-resize" : G._inRange(i, 90 - 22.5, 90 + 22.5) ? "ew-resize" : G._inRange(i, 135 - 22.5, 135 + 22.5) ? "nwse-resize" : G._inRange(i, 180 - 22.5, 180 + 22.5) ? "ns-resize" : G._inRange(i, 225 - 22.5, 225 + 22.5) ? "nesw-resize" : G._inRange(i, 270 - 22.5, 270 + 22.5) ? "ew-resize" : G._inRange(i, 315 - 22.5, 315 + 22.5) ? "nwse-resize" : (G.error("Transformer has unknown angle for cursor detection: " + i), "pointer");
}
var Ef = [
  "top-left",
  "top-center",
  "top-right",
  "middle-right",
  "middle-left",
  "bottom-left",
  "bottom-center",
  "bottom-right"
], mc = 1e8;
function Nv(d) {
  return {
    x: d.x + d.width / 2 * Math.cos(d.rotation) + d.height / 2 * Math.sin(-d.rotation),
    y: d.y + d.height / 2 * Math.cos(d.rotation) + d.width / 2 * Math.sin(d.rotation)
  };
}
function up(d, t, i) {
  const l = i.x + (d.x - i.x) * Math.cos(t) - (d.y - i.y) * Math.sin(t), f = i.y + (d.x - i.x) * Math.sin(t) + (d.y - i.y) * Math.cos(t);
  return Object.assign(Object.assign({}, d), {
    rotation: d.rotation + t,
    x: l,
    y: f
  });
}
function Av(d, t) {
  const i = Nv(d);
  return up(d, t, i);
}
function Ov(d, t, i) {
  let l = t;
  for (let f = 0; f < d.length; f++) {
    const h = ke.getAngle(d[f]), p = Math.abs(h - t) % (Math.PI * 2);
    Math.min(p, Math.PI * 2 - p) < i && (l = h);
  }
  return l;
}
class rt extends Il {
  constructor(t) {
    super(t), this._transforming = !1, this._createElements(), this._handleMouseMove = this._handleMouseMove.bind(this), this._handleMouseUp = this._handleMouseUp.bind(this), this.update = this.update.bind(this), this.on(Pv, this.update), this.getNode() && this.update();
  }
  attachTo(t) {
    return this.setNode(t), this;
  }
  setNode(t) {
    return G.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."), this.setNodes([t]);
  }
  getNode() {
    return this._nodes && this._nodes[0];
  }
  _getEventNamespace() {
    return op + this._id;
  }
  setNodes(t = []) {
    this._nodes && this._nodes.length && this.detach();
    const i = t.filter((f) => f.isAncestorOf(this) ? (G.error("Konva.Transformer cannot be an a child of the node you are trying to attach"), !1) : !0);
    this._nodes = t = i, t.length === 1 && this.useSingleNodeRotation() ? this.rotation(t[0].getAbsoluteRotation()) : this.rotation(0), this._nodes.forEach((f) => {
      const h = () => {
        this.nodes().length === 1 && this.useSingleNodeRotation() && this.rotation(this.nodes()[0].getAbsoluteRotation()), this._resetTransformCache(), !this._transforming && !this.isDragging() && this.update();
      }, p = f._attrsAffectingSize.map((g) => g + "Change." + this._getEventNamespace()).join(" ");
      f.on(p, h), f.on(Tv.map((g) => g + `.${this._getEventNamespace()}`).join(" "), h), f.on(`absoluteTransformChange.${this._getEventNamespace()}`, h), this._proxyDrag(f);
    }), this._resetTransformCache();
    var l = !!this.findOne(".top-left");
    return l && this.update(), this;
  }
  _proxyDrag(t) {
    let i;
    t.on(`dragstart.${this._getEventNamespace()}`, (l) => {
      i = t.getAbsolutePosition(), !this.isDragging() && t !== this.findOne(".back") && this.startDrag(l, !1);
    }), t.on(`dragmove.${this._getEventNamespace()}`, (l) => {
      if (!i)
        return;
      const f = t.getAbsolutePosition(), h = f.x - i.x, p = f.y - i.y;
      this.nodes().forEach((g) => {
        if (g === t || g.isDragging())
          return;
        const y = g.getAbsolutePosition();
        g.setAbsolutePosition({
          x: y.x + h,
          y: y.y + p
        }), g.startDrag(l);
      }), i = null;
    });
  }
  getNodes() {
    return this._nodes || [];
  }
  getActiveAnchor() {
    return this._movingAnchorName;
  }
  detach() {
    this._nodes && this._nodes.forEach((t) => {
      t.off("." + this._getEventNamespace());
    }), this._nodes = [], this._resetTransformCache();
  }
  _resetTransformCache() {
    this._clearCache(vc), this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform");
  }
  _getNodeRect() {
    return this._getCache(vc, this.__getNodeRect);
  }
  __getNodeShape(t, i = this.rotation(), l) {
    var f = t.getClientRect({
      skipTransform: !0,
      skipShadow: !0,
      skipStroke: this.ignoreStroke()
    }), h = t.getAbsoluteScale(l), p = t.getAbsolutePosition(l), g = f.x * h.x - t.offsetX() * h.x, y = f.y * h.y - t.offsetY() * h.y;
    const S = (ke.getAngle(t.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2), k = {
      x: p.x + g * Math.cos(S) + y * Math.sin(-S),
      y: p.y + y * Math.cos(S) + g * Math.sin(S),
      width: f.width * h.x,
      height: f.height * h.y,
      rotation: S
    };
    return up(k, -ke.getAngle(i), {
      x: 0,
      y: 0
    });
  }
  __getNodeRect() {
    var t = this.getNode();
    if (!t)
      return {
        x: -mc,
        y: -mc,
        width: 0,
        height: 0,
        rotation: 0
      };
    const i = [];
    this.nodes().map((S) => {
      const k = S.getClientRect({
        skipTransform: !0,
        skipShadow: !0,
        skipStroke: this.ignoreStroke()
      });
      var E = [
        { x: k.x, y: k.y },
        { x: k.x + k.width, y: k.y },
        { x: k.x + k.width, y: k.y + k.height },
        { x: k.x, y: k.y + k.height }
      ], x = S.getAbsoluteTransform();
      E.forEach(function(N) {
        var P = x.point(N);
        i.push(P);
      });
    });
    const l = new jn();
    l.rotate(-ke.getAngle(this.rotation()));
    var f, h, p, g;
    i.forEach(function(S) {
      var k = l.point(S);
      f === void 0 && (f = p = k.x, h = g = k.y), f = Math.min(f, k.x), h = Math.min(h, k.y), p = Math.max(p, k.x), g = Math.max(g, k.y);
    }), l.invert();
    const y = l.point({ x: f, y: h });
    return {
      x: y.x,
      y: y.y,
      width: p - f,
      height: g - h,
      rotation: ke.getAngle(this.rotation())
    };
  }
  getX() {
    return this._getNodeRect().x;
  }
  getY() {
    return this._getNodeRect().y;
  }
  getWidth() {
    return this._getNodeRect().width;
  }
  getHeight() {
    return this._getNodeRect().height;
  }
  _createElements() {
    this._createBack(), Ef.forEach(function(t) {
      this._createAnchor(t);
    }.bind(this)), this._createAnchor("rotater");
  }
  _createAnchor(t) {
    var i = new qo({
      stroke: "rgb(0, 161, 255)",
      fill: "white",
      strokeWidth: 1,
      name: t + " _anchor",
      dragDistance: 0,
      draggable: !0,
      hitStrokeWidth: Mv ? 10 : "auto"
    }), l = this;
    i.on("mousedown touchstart", function(f) {
      l._handleMouseDown(f);
    }), i.on("dragstart", (f) => {
      i.stopDrag(), f.cancelBubble = !0;
    }), i.on("dragend", (f) => {
      f.cancelBubble = !0;
    }), i.on("mouseenter", () => {
      var f = ke.getAngle(this.rotation()), h = Lv(t, f);
      i.getStage().content && (i.getStage().content.style.cursor = h), this._cursorChange = !0;
    }), i.on("mouseout", () => {
      i.getStage().content && (i.getStage().content.style.cursor = ""), this._cursorChange = !1;
    }), this.add(i);
  }
  _createBack() {
    var t = new re({
      name: "back",
      width: 0,
      height: 0,
      draggable: !0,
      sceneFunc(i) {
        var l = this.getParent(), f = l.padding();
        i.beginPath(), i.rect(-f, -f, this.width() + f * 2, this.height() + f * 2), i.moveTo(this.width() / 2, -f), l.rotateEnabled() && i.lineTo(this.width() / 2, -l.rotateAnchorOffset() * G._sign(this.height()) - f), i.fillStrokeShape(this);
      },
      hitFunc: (i, l) => {
        if (this.shouldOverdrawWholeArea()) {
          var f = this.padding();
          i.beginPath(), i.rect(-f, -f, l.width() + f * 2, l.height() + f * 2), i.fillStrokeShape(l);
        }
      }
    });
    this.add(t), this._proxyDrag(t), t.on("dragstart", (i) => {
      i.cancelBubble = !0;
    }), t.on("dragmove", (i) => {
      i.cancelBubble = !0;
    }), t.on("dragend", (i) => {
      i.cancelBubble = !0;
    }), this.on("dragmove", (i) => {
      this.update();
    });
  }
  _handleMouseDown(t) {
    this._movingAnchorName = t.target.name().split(" ")[0];
    var i = this._getNodeRect(), l = i.width, f = i.height, h = Math.sqrt(Math.pow(l, 2) + Math.pow(f, 2));
    this.sin = Math.abs(f / h), this.cos = Math.abs(l / h), typeof window != "undefined" && (window.addEventListener("mousemove", this._handleMouseMove), window.addEventListener("touchmove", this._handleMouseMove), window.addEventListener("mouseup", this._handleMouseUp, !0), window.addEventListener("touchend", this._handleMouseUp, !0)), this._transforming = !0;
    var p = t.target.getAbsolutePosition(), g = t.target.getStage().getPointerPosition();
    this._anchorDragOffset = {
      x: g.x - p.x,
      y: g.y - p.y
    }, this._fire("transformstart", { evt: t.evt, target: this.getNode() }), this._nodes.forEach((y) => {
      y._fire("transformstart", { evt: t.evt, target: y });
    });
  }
  _handleMouseMove(t) {
    var i, l, f, h = this.findOne("." + this._movingAnchorName), p = h.getStage();
    p.setPointersPositions(t);
    const g = p.getPointerPosition();
    let y = {
      x: g.x - this._anchorDragOffset.x,
      y: g.y - this._anchorDragOffset.y
    };
    const S = h.getAbsolutePosition();
    this.anchorDragBoundFunc() && (y = this.anchorDragBoundFunc()(S, y, t)), h.setAbsolutePosition(y);
    const k = h.getAbsolutePosition();
    if (!(S.x === k.x && S.y === k.y)) {
      if (this._movingAnchorName === "rotater") {
        var E = this._getNodeRect();
        i = h.x() - E.width / 2, l = -h.y() + E.height / 2;
        let b = Math.atan2(-l, i) + Math.PI / 2;
        E.height < 0 && (b -= Math.PI);
        var x = ke.getAngle(this.rotation());
        const te = x + b, Ne = ke.getAngle(this.rotationSnapTolerance()), Le = Ov(this.rotationSnaps(), te, Ne) - E.rotation, De = Av(E, Le);
        this._fitNodesInto(De, t);
        return;
      }
      var N = this.keepRatio() || t.shiftKey, X = this.centeredScaling() || t.altKey;
      if (this._movingAnchorName === "top-left") {
        if (N) {
          var P = X ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-right").x(),
            y: this.findOne(".bottom-right").y()
          };
          f = Math.sqrt(Math.pow(P.x - h.x(), 2) + Math.pow(P.y - h.y(), 2));
          var B = this.findOne(".top-left").x() > P.x ? -1 : 1, z = this.findOne(".top-left").y() > P.y ? -1 : 1;
          i = f * this.cos * B, l = f * this.sin * z, this.findOne(".top-left").x(P.x - i), this.findOne(".top-left").y(P.y - l);
        }
      } else if (this._movingAnchorName === "top-center")
        this.findOne(".top-left").y(h.y());
      else if (this._movingAnchorName === "top-right") {
        if (N) {
          var P = X ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-left").x(),
            y: this.findOne(".bottom-left").y()
          };
          f = Math.sqrt(Math.pow(h.x() - P.x, 2) + Math.pow(P.y - h.y(), 2));
          var B = this.findOne(".top-right").x() < P.x ? -1 : 1, z = this.findOne(".top-right").y() > P.y ? -1 : 1;
          i = f * this.cos * B, l = f * this.sin * z, this.findOne(".top-right").x(P.x + i), this.findOne(".top-right").y(P.y - l);
        }
        var Z = h.position();
        this.findOne(".top-left").y(Z.y), this.findOne(".bottom-right").x(Z.x);
      } else if (this._movingAnchorName === "middle-left")
        this.findOne(".top-left").x(h.x());
      else if (this._movingAnchorName === "middle-right")
        this.findOne(".bottom-right").x(h.x());
      else if (this._movingAnchorName === "bottom-left") {
        if (N) {
          var P = X ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-right").x(),
            y: this.findOne(".top-right").y()
          };
          f = Math.sqrt(Math.pow(P.x - h.x(), 2) + Math.pow(h.y() - P.y, 2));
          var B = P.x < h.x() ? -1 : 1, z = h.y() < P.y ? -1 : 1;
          i = f * this.cos * B, l = f * this.sin * z, h.x(P.x - i), h.y(P.y + l);
        }
        Z = h.position(), this.findOne(".top-left").x(Z.x), this.findOne(".bottom-right").y(Z.y);
      } else if (this._movingAnchorName === "bottom-center")
        this.findOne(".bottom-right").y(h.y());
      else if (this._movingAnchorName === "bottom-right") {
        if (N) {
          var P = X ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-left").x(),
            y: this.findOne(".top-left").y()
          };
          f = Math.sqrt(Math.pow(h.x() - P.x, 2) + Math.pow(h.y() - P.y, 2));
          var B = this.findOne(".bottom-right").x() < P.x ? -1 : 1, z = this.findOne(".bottom-right").y() < P.y ? -1 : 1;
          i = f * this.cos * B, l = f * this.sin * z, this.findOne(".bottom-right").x(P.x + i), this.findOne(".bottom-right").y(P.y + l);
        }
      } else
        console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
      var X = this.centeredScaling() || t.altKey;
      if (X) {
        var Q = this.findOne(".top-left"), K = this.findOne(".bottom-right"), se = Q.x(), J = Q.y(), de = this.getWidth() - K.x(), oe = this.getHeight() - K.y();
        K.move({
          x: -se,
          y: -J
        }), Q.move({
          x: de,
          y: oe
        });
      }
      var ae = this.findOne(".top-left").getAbsolutePosition();
      i = ae.x, l = ae.y;
      var pe = this.findOne(".bottom-right").x() - this.findOne(".top-left").x(), me = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
      this._fitNodesInto({
        x: i,
        y: l,
        width: pe,
        height: me,
        rotation: ke.getAngle(this.rotation())
      }, t);
    }
  }
  _handleMouseUp(t) {
    this._removeEvents(t);
  }
  getAbsoluteTransform() {
    return this.getTransform();
  }
  _removeEvents(t) {
    if (this._transforming) {
      this._transforming = !1, typeof window != "undefined" && (window.removeEventListener("mousemove", this._handleMouseMove), window.removeEventListener("touchmove", this._handleMouseMove), window.removeEventListener("mouseup", this._handleMouseUp, !0), window.removeEventListener("touchend", this._handleMouseUp, !0));
      var i = this.getNode();
      this._fire("transformend", { evt: t, target: i }), i && this._nodes.forEach((l) => {
        l._fire("transformend", { evt: t, target: l });
      }), this._movingAnchorName = null;
    }
  }
  _fitNodesInto(t, i) {
    var l = this._getNodeRect();
    const f = 1;
    if (G._inRange(t.width, -this.padding() * 2 - f, f)) {
      this.update();
      return;
    }
    if (G._inRange(t.height, -this.padding() * 2 - f, f)) {
      this.update();
      return;
    }
    const h = this.flipEnabled();
    var p = new jn();
    if (p.rotate(ke.getAngle(this.rotation())), this._movingAnchorName && t.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
      const E = p.point({
        x: -this.padding() * 2,
        y: 0
      });
      if (t.x += E.x, t.y += E.y, t.width += this.padding() * 2, this._movingAnchorName = this._movingAnchorName.replace("left", "right"), this._anchorDragOffset.x -= E.x, this._anchorDragOffset.y -= E.y, !h) {
        this.update();
        return;
      }
    } else if (this._movingAnchorName && t.width < 0 && this._movingAnchorName.indexOf("right") >= 0) {
      const E = p.point({
        x: this.padding() * 2,
        y: 0
      });
      if (this._movingAnchorName = this._movingAnchorName.replace("right", "left"), this._anchorDragOffset.x -= E.x, this._anchorDragOffset.y -= E.y, t.width += this.padding() * 2, !h) {
        this.update();
        return;
      }
    }
    if (this._movingAnchorName && t.height < 0 && this._movingAnchorName.indexOf("top") >= 0) {
      const E = p.point({
        x: 0,
        y: -this.padding() * 2
      });
      if (t.x += E.x, t.y += E.y, this._movingAnchorName = this._movingAnchorName.replace("top", "bottom"), this._anchorDragOffset.x -= E.x, this._anchorDragOffset.y -= E.y, t.height += this.padding() * 2, !h) {
        this.update();
        return;
      }
    } else if (this._movingAnchorName && t.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0) {
      const E = p.point({
        x: 0,
        y: this.padding() * 2
      });
      if (this._movingAnchorName = this._movingAnchorName.replace("bottom", "top"), this._anchorDragOffset.x -= E.x, this._anchorDragOffset.y -= E.y, t.height += this.padding() * 2, !h) {
        this.update();
        return;
      }
    }
    if (this.boundBoxFunc()) {
      const E = this.boundBoxFunc()(l, t);
      E ? t = E : G.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
    }
    const g = 1e7, y = new jn();
    y.translate(l.x, l.y), y.rotate(l.rotation), y.scale(l.width / g, l.height / g);
    const S = new jn();
    S.translate(t.x, t.y), S.rotate(t.rotation), S.scale(t.width / g, t.height / g);
    const k = S.multiply(y.invert());
    this._nodes.forEach((E) => {
      var x;
      const N = E.getParent().getAbsoluteTransform(), P = E.getTransform().copy();
      P.translate(E.offsetX(), E.offsetY());
      const B = new jn();
      B.multiply(N.copy().invert()).multiply(k).multiply(N).multiply(P);
      const z = B.decompose();
      E.setAttrs(z), this._fire("transform", { evt: i, target: E }), E._fire("transform", { evt: i, target: E }), (x = E.getLayer()) === null || x === void 0 || x.batchDraw();
    }), this.rotation(G._getRotation(t.rotation)), this._resetTransformCache(), this.update(), this.getLayer().batchDraw();
  }
  forceUpdate() {
    this._resetTransformCache(), this.update();
  }
  _batchChangeChild(t, i) {
    this.findOne(t).setAttrs(i);
  }
  update() {
    var t, i = this._getNodeRect();
    this.rotation(G._getRotation(i.rotation));
    var l = i.width, f = i.height, h = this.enabledAnchors(), p = this.resizeEnabled(), g = this.padding(), y = this.anchorSize();
    this.find("._anchor").forEach((S) => {
      S.setAttrs({
        width: y,
        height: y,
        offsetX: y / 2,
        offsetY: y / 2,
        stroke: this.anchorStroke(),
        strokeWidth: this.anchorStrokeWidth(),
        fill: this.anchorFill(),
        cornerRadius: this.anchorCornerRadius()
      });
    }), this._batchChangeChild(".top-left", {
      x: 0,
      y: 0,
      offsetX: y / 2 + g,
      offsetY: y / 2 + g,
      visible: p && h.indexOf("top-left") >= 0
    }), this._batchChangeChild(".top-center", {
      x: l / 2,
      y: 0,
      offsetY: y / 2 + g,
      visible: p && h.indexOf("top-center") >= 0
    }), this._batchChangeChild(".top-right", {
      x: l,
      y: 0,
      offsetX: y / 2 - g,
      offsetY: y / 2 + g,
      visible: p && h.indexOf("top-right") >= 0
    }), this._batchChangeChild(".middle-left", {
      x: 0,
      y: f / 2,
      offsetX: y / 2 + g,
      visible: p && h.indexOf("middle-left") >= 0
    }), this._batchChangeChild(".middle-right", {
      x: l,
      y: f / 2,
      offsetX: y / 2 - g,
      visible: p && h.indexOf("middle-right") >= 0
    }), this._batchChangeChild(".bottom-left", {
      x: 0,
      y: f,
      offsetX: y / 2 + g,
      offsetY: y / 2 - g,
      visible: p && h.indexOf("bottom-left") >= 0
    }), this._batchChangeChild(".bottom-center", {
      x: l / 2,
      y: f,
      offsetY: y / 2 - g,
      visible: p && h.indexOf("bottom-center") >= 0
    }), this._batchChangeChild(".bottom-right", {
      x: l,
      y: f,
      offsetX: y / 2 - g,
      offsetY: y / 2 - g,
      visible: p && h.indexOf("bottom-right") >= 0
    }), this._batchChangeChild(".rotater", {
      x: l / 2,
      y: -this.rotateAnchorOffset() * G._sign(f) - g,
      visible: this.rotateEnabled()
    }), this._batchChangeChild(".back", {
      width: l,
      height: f,
      visible: this.borderEnabled(),
      stroke: this.borderStroke(),
      strokeWidth: this.borderStrokeWidth(),
      dash: this.borderDash(),
      x: 0,
      y: 0
    }), (t = this.getLayer()) === null || t === void 0 || t.batchDraw();
  }
  isTransforming() {
    return this._transforming;
  }
  stopTransform() {
    if (this._transforming) {
      this._removeEvents();
      var t = this.findOne("." + this._movingAnchorName);
      t && t.stopDrag();
    }
  }
  destroy() {
    return this.getStage() && this._cursorChange && this.getStage().content && (this.getStage().content.style.cursor = ""), Il.prototype.destroy.call(this), this.detach(), this._removeEvents(), this;
  }
  toObject() {
    return ue.prototype.toObject.call(this);
  }
  clone(t) {
    var i = ue.prototype.clone.call(this, t);
    return i;
  }
  getClientRect() {
    return this.nodes().length > 0 ? super.getClientRect() : { x: 0, y: 0, width: 0, height: 0 };
  }
}
function Iv(d) {
  return d instanceof Array || G.warn("enabledAnchors value should be an array"), d instanceof Array && d.forEach(function(t) {
    Ef.indexOf(t) === -1 && G.warn("Unknown anchor name: " + t + ". Available names are: " + Ef.join(", "));
  }), d || [];
}
rt.prototype.className = "Transformer";
wt(rt);
L.addGetterSetter(rt, "enabledAnchors", Ef, Iv);
L.addGetterSetter(rt, "flipEnabled", !0, Rr());
L.addGetterSetter(rt, "resizeEnabled", !0);
L.addGetterSetter(rt, "anchorSize", 10, fe());
L.addGetterSetter(rt, "rotateEnabled", !0);
L.addGetterSetter(rt, "rotationSnaps", []);
L.addGetterSetter(rt, "rotateAnchorOffset", 50, fe());
L.addGetterSetter(rt, "rotationSnapTolerance", 5, fe());
L.addGetterSetter(rt, "borderEnabled", !0);
L.addGetterSetter(rt, "anchorStroke", "rgb(0, 161, 255)");
L.addGetterSetter(rt, "anchorStrokeWidth", 1, fe());
L.addGetterSetter(rt, "anchorFill", "white");
L.addGetterSetter(rt, "anchorCornerRadius", 0, fe());
L.addGetterSetter(rt, "borderStroke", "rgb(0, 161, 255)");
L.addGetterSetter(rt, "borderStrokeWidth", 1, fe());
L.addGetterSetter(rt, "borderDash");
L.addGetterSetter(rt, "keepRatio", !0);
L.addGetterSetter(rt, "centeredScaling", !1);
L.addGetterSetter(rt, "ignoreStroke", !1);
L.addGetterSetter(rt, "padding", 0, fe());
L.addGetterSetter(rt, "node");
L.addGetterSetter(rt, "nodes");
L.addGetterSetter(rt, "boundBoxFunc");
L.addGetterSetter(rt, "anchorDragBoundFunc");
L.addGetterSetter(rt, "shouldOverdrawWholeArea", !1);
L.addGetterSetter(rt, "useSingleNodeRotation", !0);
L.backCompat(rt, {
  lineEnabled: "borderEnabled",
  rotateHandlerOffset: "rotateAnchorOffset",
  enabledHandlers: "enabledAnchors"
});
class Ii extends re {
  _sceneFunc(t) {
    t.beginPath(), t.arc(0, 0, this.radius(), 0, ke.getAngle(this.angle()), this.clockwise()), t.lineTo(0, 0), t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(t) {
    this.radius(t / 2);
  }
  setHeight(t) {
    this.radius(t / 2);
  }
}
Ii.prototype.className = "Wedge";
Ii.prototype._centroid = !0;
Ii.prototype._attrsAffectingSize = ["radius"];
wt(Ii);
L.addGetterSetter(Ii, "radius", 0, fe());
L.addGetterSetter(Ii, "angle", 0, fe());
L.addGetterSetter(Ii, "clockwise", !1);
L.backCompat(Ii, {
  angleDeg: "angle",
  getAngleDeg: "getAngle",
  setAngleDeg: "setAngle"
});
function yc() {
  this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
}
var zv = [
  512,
  512,
  456,
  512,
  328,
  456,
  335,
  512,
  405,
  328,
  271,
  456,
  388,
  335,
  292,
  512,
  454,
  405,
  364,
  328,
  298,
  271,
  496,
  456,
  420,
  388,
  360,
  335,
  312,
  292,
  273,
  512,
  482,
  454,
  428,
  405,
  383,
  364,
  345,
  328,
  312,
  298,
  284,
  271,
  259,
  496,
  475,
  456,
  437,
  420,
  404,
  388,
  374,
  360,
  347,
  335,
  323,
  312,
  302,
  292,
  282,
  273,
  265,
  512,
  497,
  482,
  468,
  454,
  441,
  428,
  417,
  405,
  394,
  383,
  373,
  364,
  354,
  345,
  337,
  328,
  320,
  312,
  305,
  298,
  291,
  284,
  278,
  271,
  265,
  259,
  507,
  496,
  485,
  475,
  465,
  456,
  446,
  437,
  428,
  420,
  412,
  404,
  396,
  388,
  381,
  374,
  367,
  360,
  354,
  347,
  341,
  335,
  329,
  323,
  318,
  312,
  307,
  302,
  297,
  292,
  287,
  282,
  278,
  273,
  269,
  265,
  261,
  512,
  505,
  497,
  489,
  482,
  475,
  468,
  461,
  454,
  447,
  441,
  435,
  428,
  422,
  417,
  411,
  405,
  399,
  394,
  389,
  383,
  378,
  373,
  368,
  364,
  359,
  354,
  350,
  345,
  341,
  337,
  332,
  328,
  324,
  320,
  316,
  312,
  309,
  305,
  301,
  298,
  294,
  291,
  287,
  284,
  281,
  278,
  274,
  271,
  268,
  265,
  262,
  259,
  257,
  507,
  501,
  496,
  491,
  485,
  480,
  475,
  470,
  465,
  460,
  456,
  451,
  446,
  442,
  437,
  433,
  428,
  424,
  420,
  416,
  412,
  408,
  404,
  400,
  396,
  392,
  388,
  385,
  381,
  377,
  374,
  370,
  367,
  363,
  360,
  357,
  354,
  350,
  347,
  344,
  341,
  338,
  335,
  332,
  329,
  326,
  323,
  320,
  318,
  315,
  312,
  310,
  307,
  304,
  302,
  299,
  297,
  294,
  292,
  289,
  287,
  285,
  282,
  280,
  278,
  275,
  273,
  271,
  269,
  267,
  265,
  263,
  261,
  259
], Dv = [
  9,
  11,
  12,
  13,
  13,
  14,
  14,
  15,
  15,
  15,
  15,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24
];
function Fv(d, t) {
  var i = d.data, l = d.width, f = d.height, h, p, g, y, S, k, E, x, N, P, B, z, Z, X, Q, K, se, J, de, oe, ae, pe, me, b, te = t + t + 1, Ne = l - 1, Ie = f - 1, Le = t + 1, De = Le * (Le + 1) / 2, ie = new yc(), we = null, M = ie, O = null, q = null, he = zv[t], _e = Dv[t];
  for (g = 1; g < te; g++)
    M = M.next = new yc(), g === Le && (we = M);
  for (M.next = ie, E = k = 0, p = 0; p < f; p++) {
    for (K = se = J = de = x = N = P = B = 0, z = Le * (oe = i[k]), Z = Le * (ae = i[k + 1]), X = Le * (pe = i[k + 2]), Q = Le * (me = i[k + 3]), x += De * oe, N += De * ae, P += De * pe, B += De * me, M = ie, g = 0; g < Le; g++)
      M.r = oe, M.g = ae, M.b = pe, M.a = me, M = M.next;
    for (g = 1; g < Le; g++)
      y = k + ((Ne < g ? Ne : g) << 2), x += (M.r = oe = i[y]) * (b = Le - g), N += (M.g = ae = i[y + 1]) * b, P += (M.b = pe = i[y + 2]) * b, B += (M.a = me = i[y + 3]) * b, K += oe, se += ae, J += pe, de += me, M = M.next;
    for (O = ie, q = we, h = 0; h < l; h++)
      i[k + 3] = me = B * he >> _e, me !== 0 ? (me = 255 / me, i[k] = (x * he >> _e) * me, i[k + 1] = (N * he >> _e) * me, i[k + 2] = (P * he >> _e) * me) : i[k] = i[k + 1] = i[k + 2] = 0, x -= z, N -= Z, P -= X, B -= Q, z -= O.r, Z -= O.g, X -= O.b, Q -= O.a, y = E + ((y = h + t + 1) < Ne ? y : Ne) << 2, K += O.r = i[y], se += O.g = i[y + 1], J += O.b = i[y + 2], de += O.a = i[y + 3], x += K, N += se, P += J, B += de, O = O.next, z += oe = q.r, Z += ae = q.g, X += pe = q.b, Q += me = q.a, K -= oe, se -= ae, J -= pe, de -= me, q = q.next, k += 4;
    E += l;
  }
  for (h = 0; h < l; h++) {
    for (se = J = de = K = N = P = B = x = 0, k = h << 2, z = Le * (oe = i[k]), Z = Le * (ae = i[k + 1]), X = Le * (pe = i[k + 2]), Q = Le * (me = i[k + 3]), x += De * oe, N += De * ae, P += De * pe, B += De * me, M = ie, g = 0; g < Le; g++)
      M.r = oe, M.g = ae, M.b = pe, M.a = me, M = M.next;
    for (S = l, g = 1; g <= t; g++)
      k = S + h << 2, x += (M.r = oe = i[k]) * (b = Le - g), N += (M.g = ae = i[k + 1]) * b, P += (M.b = pe = i[k + 2]) * b, B += (M.a = me = i[k + 3]) * b, K += oe, se += ae, J += pe, de += me, M = M.next, g < Ie && (S += l);
    for (k = h, O = ie, q = we, p = 0; p < f; p++)
      y = k << 2, i[y + 3] = me = B * he >> _e, me > 0 ? (me = 255 / me, i[y] = (x * he >> _e) * me, i[y + 1] = (N * he >> _e) * me, i[y + 2] = (P * he >> _e) * me) : i[y] = i[y + 1] = i[y + 2] = 0, x -= z, N -= Z, P -= X, B -= Q, z -= O.r, Z -= O.g, X -= O.b, Q -= O.a, y = h + ((y = p + Le) < Ie ? y : Ie) * l << 2, x += K += O.r = i[y], N += se += O.g = i[y + 1], P += J += O.b = i[y + 2], B += de += O.a = i[y + 3], O = O.next, z += oe = q.r, Z += ae = q.g, X += pe = q.b, Q += me = q.a, K -= oe, se -= ae, J -= pe, de -= me, q = q.next, k += l;
  }
}
const Gv = function(t) {
  var i = Math.round(this.blurRadius());
  i > 0 && Fv(t, i);
};
L.addGetterSetter(ue, "blurRadius", 0, fe(), L.afterSetFilter);
const Bv = function(d) {
  var t = this.brightness() * 255, i = d.data, l = i.length, f;
  for (f = 0; f < l; f += 4)
    i[f] += t, i[f + 1] += t, i[f + 2] += t;
};
L.addGetterSetter(ue, "brightness", 0, fe(), L.afterSetFilter);
const Uv = function(d) {
  var t = Math.pow((this.contrast() + 100) / 100, 2), i = d.data, l = i.length, f = 150, h = 150, p = 150, g;
  for (g = 0; g < l; g += 4)
    f = i[g], h = i[g + 1], p = i[g + 2], f /= 255, f -= 0.5, f *= t, f += 0.5, f *= 255, h /= 255, h -= 0.5, h *= t, h += 0.5, h *= 255, p /= 255, p -= 0.5, p *= t, p += 0.5, p *= 255, f = f < 0 ? 0 : f > 255 ? 255 : f, h = h < 0 ? 0 : h > 255 ? 255 : h, p = p < 0 ? 0 : p > 255 ? 255 : p, i[g] = f, i[g + 1] = h, i[g + 2] = p;
};
L.addGetterSetter(ue, "contrast", 0, fe(), L.afterSetFilter);
const Hv = function(d) {
  var t = this.embossStrength() * 10, i = this.embossWhiteLevel() * 255, l = this.embossDirection(), f = this.embossBlend(), h = 0, p = 0, g = d.data, y = d.width, S = d.height, k = y * 4, E = S;
  switch (l) {
    case "top-left":
      h = -1, p = -1;
      break;
    case "top":
      h = -1, p = 0;
      break;
    case "top-right":
      h = -1, p = 1;
      break;
    case "right":
      h = 0, p = 1;
      break;
    case "bottom-right":
      h = 1, p = 1;
      break;
    case "bottom":
      h = 1, p = 0;
      break;
    case "bottom-left":
      h = 1, p = -1;
      break;
    case "left":
      h = 0, p = -1;
      break;
    default:
      G.error("Unknown emboss direction: " + l);
  }
  do {
    var x = (E - 1) * k, N = h;
    E + N < 1 && (N = 0), E + N > S && (N = 0);
    var P = (E - 1 + N) * y * 4, B = y;
    do {
      var z = x + (B - 1) * 4, Z = p;
      B + Z < 1 && (Z = 0), B + Z > y && (Z = 0);
      var X = P + (B - 1 + Z) * 4, Q = g[z] - g[X], K = g[z + 1] - g[X + 1], se = g[z + 2] - g[X + 2], J = Q, de = J > 0 ? J : -J, oe = K > 0 ? K : -K, ae = se > 0 ? se : -se;
      if (oe > de && (J = K), ae > de && (J = se), J *= t, f) {
        var pe = g[z] + J, me = g[z + 1] + J, b = g[z + 2] + J;
        g[z] = pe > 255 ? 255 : pe < 0 ? 0 : pe, g[z + 1] = me > 255 ? 255 : me < 0 ? 0 : me, g[z + 2] = b > 255 ? 255 : b < 0 ? 0 : b;
      } else {
        var te = i - J;
        te < 0 ? te = 0 : te > 255 && (te = 255), g[z] = g[z + 1] = g[z + 2] = te;
      }
    } while (--B);
  } while (--E);
};
L.addGetterSetter(ue, "embossStrength", 0.5, fe(), L.afterSetFilter);
L.addGetterSetter(ue, "embossWhiteLevel", 0.5, fe(), L.afterSetFilter);
L.addGetterSetter(ue, "embossDirection", "top-left", null, L.afterSetFilter);
L.addGetterSetter(ue, "embossBlend", !1, null, L.afterSetFilter);
function Td(d, t, i, l, f) {
  var h = i - t, p = f - l, g;
  return h === 0 ? l + p / 2 : p === 0 ? l : (g = (d - t) / h, g = p * g + l, g);
}
const jv = function(d) {
  var t = d.data, i = t.length, l = t[0], f = l, h, p = t[1], g = p, y, S = t[2], k = S, E, x, N = this.enhance();
  if (N !== 0) {
    for (x = 0; x < i; x += 4)
      h = t[x + 0], h < l ? l = h : h > f && (f = h), y = t[x + 1], y < p ? p = y : y > g && (g = y), E = t[x + 2], E < S ? S = E : E > k && (k = E);
    f === l && (f = 255, l = 0), g === p && (g = 255, p = 0), k === S && (k = 255, S = 0);
    var P, B, z, Z, X, Q, K, se, J;
    for (N > 0 ? (B = f + N * (255 - f), z = l - N * (l - 0), X = g + N * (255 - g), Q = p - N * (p - 0), se = k + N * (255 - k), J = S - N * (S - 0)) : (P = (f + l) * 0.5, B = f + N * (f - P), z = l + N * (l - P), Z = (g + p) * 0.5, X = g + N * (g - Z), Q = p + N * (p - Z), K = (k + S) * 0.5, se = k + N * (k - K), J = S + N * (S - K)), x = 0; x < i; x += 4)
      t[x + 0] = Td(t[x + 0], l, f, z, B), t[x + 1] = Td(t[x + 1], p, g, Q, X), t[x + 2] = Td(t[x + 2], S, k, J, se);
  }
};
L.addGetterSetter(ue, "enhance", 0, fe(), L.afterSetFilter);
const Wv = function(d) {
  var t = d.data, i = t.length, l, f;
  for (l = 0; l < i; l += 4)
    f = 0.34 * t[l] + 0.5 * t[l + 1] + 0.16 * t[l + 2], t[l] = f, t[l + 1] = f, t[l + 2] = f;
};
L.addGetterSetter(ue, "hue", 0, fe(), L.afterSetFilter);
L.addGetterSetter(ue, "saturation", 0, fe(), L.afterSetFilter);
L.addGetterSetter(ue, "luminance", 0, fe(), L.afterSetFilter);
const Vv = function(d) {
  var t = d.data, i = t.length, l = 1, f = Math.pow(2, this.saturation()), h = Math.abs(this.hue() + 360) % 360, p = this.luminance() * 127, g, y = l * f * Math.cos(h * Math.PI / 180), S = l * f * Math.sin(h * Math.PI / 180), k = 0.299 * l + 0.701 * y + 0.167 * S, E = 0.587 * l - 0.587 * y + 0.33 * S, x = 0.114 * l - 0.114 * y - 0.497 * S, N = 0.299 * l - 0.299 * y - 0.328 * S, P = 0.587 * l + 0.413 * y + 0.035 * S, B = 0.114 * l - 0.114 * y + 0.293 * S, z = 0.299 * l - 0.3 * y + 1.25 * S, Z = 0.587 * l - 0.586 * y - 1.05 * S, X = 0.114 * l + 0.886 * y - 0.2 * S, Q, K, se, J;
  for (g = 0; g < i; g += 4)
    Q = t[g + 0], K = t[g + 1], se = t[g + 2], J = t[g + 3], t[g + 0] = k * Q + E * K + x * se + p, t[g + 1] = N * Q + P * K + B * se + p, t[g + 2] = z * Q + Z * K + X * se + p, t[g + 3] = J;
}, Yv = function(d) {
  var t = d.data, i = t.length, l = Math.pow(2, this.value()), f = Math.pow(2, this.saturation()), h = Math.abs(this.hue() + 360) % 360, p, g = l * f * Math.cos(h * Math.PI / 180), y = l * f * Math.sin(h * Math.PI / 180), S = 0.299 * l + 0.701 * g + 0.167 * y, k = 0.587 * l - 0.587 * g + 0.33 * y, E = 0.114 * l - 0.114 * g - 0.497 * y, x = 0.299 * l - 0.299 * g - 0.328 * y, N = 0.587 * l + 0.413 * g + 0.035 * y, P = 0.114 * l - 0.114 * g + 0.293 * y, B = 0.299 * l - 0.3 * g + 1.25 * y, z = 0.587 * l - 0.586 * g - 1.05 * y, Z = 0.114 * l + 0.886 * g - 0.2 * y, X, Q, K, se;
  for (p = 0; p < i; p += 4)
    X = t[p + 0], Q = t[p + 1], K = t[p + 2], se = t[p + 3], t[p + 0] = S * X + k * Q + E * K, t[p + 1] = x * X + N * Q + P * K, t[p + 2] = B * X + z * Q + Z * K, t[p + 3] = se;
};
L.addGetterSetter(ue, "hue", 0, fe(), L.afterSetFilter);
L.addGetterSetter(ue, "saturation", 0, fe(), L.afterSetFilter);
L.addGetterSetter(ue, "value", 0, fe(), L.afterSetFilter);
const Qv = function(d) {
  var t = d.data, i = t.length, l;
  for (l = 0; l < i; l += 4)
    t[l] = 255 - t[l], t[l + 1] = 255 - t[l + 1], t[l + 2] = 255 - t[l + 2];
};
var Xv = function(d, t, i) {
  var l = d.data, f = t.data, h = d.width, p = d.height, g = i.polarCenterX || h / 2, y = i.polarCenterY || p / 2, S, k, E, x = 0, N = 0, P = 0, B = 0, z, Z = Math.sqrt(g * g + y * y);
  k = h - g, E = p - y, z = Math.sqrt(k * k + E * E), Z = z > Z ? z : Z;
  var X = p, Q = h, K, se, J = 360 / Q * Math.PI / 180, de, oe;
  for (se = 0; se < Q; se += 1)
    for (de = Math.sin(se * J), oe = Math.cos(se * J), K = 0; K < X; K += 1)
      k = Math.floor(g + Z * K / X * oe), E = Math.floor(y + Z * K / X * de), S = (E * h + k) * 4, x = l[S + 0], N = l[S + 1], P = l[S + 2], B = l[S + 3], S = (se + K * h) * 4, f[S + 0] = x, f[S + 1] = N, f[S + 2] = P, f[S + 3] = B;
}, Kv = function(d, t, i) {
  var l = d.data, f = t.data, h = d.width, p = d.height, g = i.polarCenterX || h / 2, y = i.polarCenterY || p / 2, S, k, E, x, N, P = 0, B = 0, z = 0, Z = 0, X, Q = Math.sqrt(g * g + y * y);
  k = h - g, E = p - y, X = Math.sqrt(k * k + E * E), Q = X > Q ? X : Q;
  var K = p, se = h, J, de, oe = i.polarRotation || 0, ae, pe;
  for (k = 0; k < h; k += 1)
    for (E = 0; E < p; E += 1)
      x = k - g, N = E - y, J = Math.sqrt(x * x + N * N) * K / Q, de = (Math.atan2(N, x) * 180 / Math.PI + 360 + oe) % 360, de = de * se / 360, ae = Math.floor(de), pe = Math.floor(J), S = (pe * h + ae) * 4, P = l[S + 0], B = l[S + 1], z = l[S + 2], Z = l[S + 3], S = (E * h + k) * 4, f[S + 0] = P, f[S + 1] = B, f[S + 2] = z, f[S + 3] = Z;
};
const qv = function(d) {
  var t = d.width, i = d.height, l, f, h, p, g, y, S, k, E, x, N = Math.round(this.kaleidoscopePower()), P = Math.round(this.kaleidoscopeAngle()), B = Math.floor(t * (P % 360) / 360);
  if (!(N < 1)) {
    var z = G.createCanvasElement();
    z.width = t, z.height = i;
    var Z = z.getContext("2d").getImageData(0, 0, t, i);
    G.releaseCanvas(z), Xv(d, Z, {
      polarCenterX: t / 2,
      polarCenterY: i / 2
    });
    for (var X = t / Math.pow(2, N); X <= 8; )
      X = X * 2, N -= 1;
    X = Math.ceil(X);
    var Q = X, K = 0, se = Q, J = 1;
    for (B + X > t && (K = Q, se = 0, J = -1), f = 0; f < i; f += 1)
      for (l = K; l !== se; l += J)
        h = Math.round(l + B) % t, E = (t * f + h) * 4, g = Z.data[E + 0], y = Z.data[E + 1], S = Z.data[E + 2], k = Z.data[E + 3], x = (t * f + l) * 4, Z.data[x + 0] = g, Z.data[x + 1] = y, Z.data[x + 2] = S, Z.data[x + 3] = k;
    for (f = 0; f < i; f += 1)
      for (Q = Math.floor(X), p = 0; p < N; p += 1) {
        for (l = 0; l < Q + 1; l += 1)
          E = (t * f + l) * 4, g = Z.data[E + 0], y = Z.data[E + 1], S = Z.data[E + 2], k = Z.data[E + 3], x = (t * f + Q * 2 - l - 1) * 4, Z.data[x + 0] = g, Z.data[x + 1] = y, Z.data[x + 2] = S, Z.data[x + 3] = k;
        Q *= 2;
      }
    Kv(Z, d, { polarRotation: 0 });
  }
};
L.addGetterSetter(ue, "kaleidoscopePower", 2, fe(), L.afterSetFilter);
L.addGetterSetter(ue, "kaleidoscopeAngle", 0, fe(), L.afterSetFilter);
function _f(d, t, i) {
  var l = (i * d.width + t) * 4, f = [];
  return f.push(d.data[l++], d.data[l++], d.data[l++], d.data[l++]), f;
}
function Bo(d, t) {
  return Math.sqrt(Math.pow(d[0] - t[0], 2) + Math.pow(d[1] - t[1], 2) + Math.pow(d[2] - t[2], 2));
}
function Jv(d) {
  for (var t = [0, 0, 0], i = 0; i < d.length; i++)
    t[0] += d[i][0], t[1] += d[i][1], t[2] += d[i][2];
  return t[0] /= d.length, t[1] /= d.length, t[2] /= d.length, t;
}
function Zv(d, t) {
  var i = _f(d, 0, 0), l = _f(d, d.width - 1, 0), f = _f(d, 0, d.height - 1), h = _f(d, d.width - 1, d.height - 1), p = t || 10;
  if (Bo(i, l) < p && Bo(l, h) < p && Bo(h, f) < p && Bo(f, i) < p) {
    for (var g = Jv([l, i, h, f]), y = [], S = 0; S < d.width * d.height; S++) {
      var k = Bo(g, [
        d.data[S * 4],
        d.data[S * 4 + 1],
        d.data[S * 4 + 2]
      ]);
      y[S] = k < p ? 0 : 255;
    }
    return y;
  }
}
function $v(d, t) {
  for (var i = 0; i < d.width * d.height; i++)
    d.data[4 * i + 3] = t[i];
}
function bv(d, t, i) {
  for (var l = [1, 1, 1, 1, 0, 1, 1, 1, 1], f = Math.round(Math.sqrt(l.length)), h = Math.floor(f / 2), p = [], g = 0; g < i; g++)
    for (var y = 0; y < t; y++) {
      for (var S = g * t + y, k = 0, E = 0; E < f; E++)
        for (var x = 0; x < f; x++) {
          var N = g + E - h, P = y + x - h;
          if (N >= 0 && N < i && P >= 0 && P < t) {
            var B = N * t + P, z = l[E * f + x];
            k += d[B] * z;
          }
        }
      p[S] = k === 255 * 8 ? 255 : 0;
    }
  return p;
}
function e0(d, t, i) {
  for (var l = [1, 1, 1, 1, 1, 1, 1, 1, 1], f = Math.round(Math.sqrt(l.length)), h = Math.floor(f / 2), p = [], g = 0; g < i; g++)
    for (var y = 0; y < t; y++) {
      for (var S = g * t + y, k = 0, E = 0; E < f; E++)
        for (var x = 0; x < f; x++) {
          var N = g + E - h, P = y + x - h;
          if (N >= 0 && N < i && P >= 0 && P < t) {
            var B = N * t + P, z = l[E * f + x];
            k += d[B] * z;
          }
        }
      p[S] = k >= 255 * 4 ? 255 : 0;
    }
  return p;
}
function t0(d, t, i) {
  for (var l = [0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111], f = Math.round(Math.sqrt(l.length)), h = Math.floor(f / 2), p = [], g = 0; g < i; g++)
    for (var y = 0; y < t; y++) {
      for (var S = g * t + y, k = 0, E = 0; E < f; E++)
        for (var x = 0; x < f; x++) {
          var N = g + E - h, P = y + x - h;
          if (N >= 0 && N < i && P >= 0 && P < t) {
            var B = N * t + P, z = l[E * f + x];
            k += d[B] * z;
          }
        }
      p[S] = k;
    }
  return p;
}
const n0 = function(d) {
  var t = this.threshold(), i = Zv(d, t);
  return i && (i = bv(i, d.width, d.height), i = e0(i, d.width, d.height), i = t0(i, d.width, d.height), $v(d, i)), d;
};
L.addGetterSetter(ue, "threshold", 0, fe(), L.afterSetFilter);
const r0 = function(d) {
  var t = this.noise() * 255, i = d.data, l = i.length, f = t / 2, h;
  for (h = 0; h < l; h += 4)
    i[h + 0] += f - 2 * f * Math.random(), i[h + 1] += f - 2 * f * Math.random(), i[h + 2] += f - 2 * f * Math.random();
};
L.addGetterSetter(ue, "noise", 0.2, fe(), L.afterSetFilter);
const i0 = function(d) {
  var t = Math.ceil(this.pixelSize()), i = d.width, l = d.height, f, h, p, g, y, S, k, E = Math.ceil(i / t), x = Math.ceil(l / t), N, P, B, z, Z, X, Q, K = d.data;
  if (t <= 0) {
    G.error("pixelSize value can not be <= 0");
    return;
  }
  for (Z = 0; Z < E; Z += 1)
    for (X = 0; X < x; X += 1) {
      for (g = 0, y = 0, S = 0, k = 0, N = Z * t, P = N + t, B = X * t, z = B + t, Q = 0, f = N; f < P; f += 1)
        if (!(f >= i))
          for (h = B; h < z; h += 1)
            h >= l || (p = (i * h + f) * 4, g += K[p + 0], y += K[p + 1], S += K[p + 2], k += K[p + 3], Q += 1);
      for (g = g / Q, y = y / Q, S = S / Q, k = k / Q, f = N; f < P; f += 1)
        if (!(f >= i))
          for (h = B; h < z; h += 1)
            h >= l || (p = (i * h + f) * 4, K[p + 0] = g, K[p + 1] = y, K[p + 2] = S, K[p + 3] = k);
    }
};
L.addGetterSetter(ue, "pixelSize", 8, fe(), L.afterSetFilter);
const a0 = function(d) {
  var t = Math.round(this.levels() * 254) + 1, i = d.data, l = i.length, f = 255 / t, h;
  for (h = 0; h < l; h += 1)
    i[h] = Math.floor(i[h] / f) * f;
};
L.addGetterSetter(ue, "levels", 0.5, fe(), L.afterSetFilter);
const s0 = function(d) {
  var t = d.data, i = t.length, l = this.red(), f = this.green(), h = this.blue(), p, g;
  for (p = 0; p < i; p += 4)
    g = (0.34 * t[p] + 0.5 * t[p + 1] + 0.16 * t[p + 2]) / 255, t[p] = g * l, t[p + 1] = g * f, t[p + 2] = g * h, t[p + 3] = t[p + 3];
};
L.addGetterSetter(ue, "red", 0, function(d) {
  return this._filterUpToDate = !1, d > 255 ? 255 : d < 0 ? 0 : Math.round(d);
});
L.addGetterSetter(ue, "green", 0, function(d) {
  return this._filterUpToDate = !1, d > 255 ? 255 : d < 0 ? 0 : Math.round(d);
});
L.addGetterSetter(ue, "blue", 0, Ac, L.afterSetFilter);
const l0 = function(d) {
  var t = d.data, i = t.length, l = this.red(), f = this.green(), h = this.blue(), p = this.alpha(), g, y;
  for (g = 0; g < i; g += 4)
    y = 1 - p, t[g] = l * p + t[g] * y, t[g + 1] = f * p + t[g + 1] * y, t[g + 2] = h * p + t[g + 2] * y;
};
L.addGetterSetter(ue, "red", 0, function(d) {
  return this._filterUpToDate = !1, d > 255 ? 255 : d < 0 ? 0 : Math.round(d);
});
L.addGetterSetter(ue, "green", 0, function(d) {
  return this._filterUpToDate = !1, d > 255 ? 255 : d < 0 ? 0 : Math.round(d);
});
L.addGetterSetter(ue, "blue", 0, Ac, L.afterSetFilter);
L.addGetterSetter(ue, "alpha", 1, function(d) {
  return this._filterUpToDate = !1, d > 1 ? 1 : d < 0 ? 0 : d;
});
const o0 = function(d) {
  var t = d.data, i = t.length, l, f, h, p;
  for (l = 0; l < i; l += 4)
    f = t[l + 0], h = t[l + 1], p = t[l + 2], t[l + 0] = Math.min(255, f * 0.393 + h * 0.769 + p * 0.189), t[l + 1] = Math.min(255, f * 0.349 + h * 0.686 + p * 0.168), t[l + 2] = Math.min(255, f * 0.272 + h * 0.534 + p * 0.131);
}, u0 = function(d) {
  var t = d.data, i = d.width, l = d.height, f = i * 4, h = l;
  do {
    var p = (h - 1) * f, g = i;
    do {
      var y = p + (g - 1) * 4, S = t[y], k = t[y + 1], E = t[y + 2];
      S > 127 && (S = 255 - S), k > 127 && (k = 255 - k), E > 127 && (E = 255 - E), t[y] = S, t[y + 1] = k, t[y + 2] = E;
    } while (--g);
  } while (--h);
}, f0 = function(d) {
  var t = this.threshold() * 255, i = d.data, l = i.length, f;
  for (f = 0; f < l; f += 1)
    i[f] = i[f] < t ? 0 : 255;
};
L.addGetterSetter(ue, "threshold", 0.5, fe(), L.afterSetFilter);
_s.Util._assign(_s, {
  Arc: Ai,
  Arrow: ws,
  Circle: Dl,
  Ellipse: Oa,
  Image: $r,
  Label: Yd,
  Tag: Cs,
  Line: Oi,
  Path: ot,
  Rect: qo,
  RegularPolygon: ks,
  Ring: xs,
  Sprite: br,
  Star: Ia,
  Text: St,
  TextPath: Ut,
  Transformer: rt,
  Wedge: Ii,
  Filters: {
    Blur: Gv,
    Brighten: Bv,
    Contrast: Uv,
    Emboss: Hv,
    Enhance: jv,
    Grayscale: Wv,
    HSL: Vv,
    HSV: Yv,
    Invert: Qv,
    Kaleidoscope: qv,
    Mask: n0,
    Noise: r0,
    Pixelate: i0,
    Posterize: a0,
    RGB: s0,
    RGBA: l0,
    Sepia: o0,
    Solarize: u0,
    Threshold: f0
  }
});
var fp = { exports: {} }, kf = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Rd, _c;
function d0() {
  if (_c)
    return Rd;
  _c = 1;
  var d = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
  function l(h) {
    if (h == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(h);
  }
  function f() {
    try {
      if (!Object.assign)
        return !1;
      var h = new String("abc");
      if (h[5] = "de", Object.getOwnPropertyNames(h)[0] === "5")
        return !1;
      for (var p = {}, g = 0; g < 10; g++)
        p["_" + String.fromCharCode(g)] = g;
      var y = Object.getOwnPropertyNames(p).map(function(k) {
        return p[k];
      });
      if (y.join("") !== "0123456789")
        return !1;
      var S = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(k) {
        S[k] = k;
      }), Object.keys(Object.assign({}, S)).join("") === "abcdefghijklmnopqrst";
    } catch (k) {
      return !1;
    }
  }
  return Rd = f() ? Object.assign : function(h, p) {
    for (var g, y = l(h), S, k = 1; k < arguments.length; k++) {
      g = Object(arguments[k]);
      for (var E in g)
        t.call(g, E) && (y[E] = g[E]);
      if (d) {
        S = d(g);
        for (var x = 0; x < S.length; x++)
          i.call(g, S[x]) && (y[S[x]] = g[S[x]]);
      }
    }
    return y;
  }, Rd;
}
var dp = { exports: {} }, Md = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sc;
function h0() {
  return Sc || (Sc = 1, function(d) {
    var t, i, l, f;
    if (typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      d.unstable_now = function() {
        return h.now();
      };
    } else {
      var p = Date, g = p.now();
      d.unstable_now = function() {
        return p.now() - g;
      };
    }
    if (typeof window == "undefined" || typeof MessageChannel != "function") {
      var y = null, S = null, k = function() {
        if (y !== null)
          try {
            var O = d.unstable_now();
            y(!0, O), y = null;
          } catch (q) {
            throw setTimeout(k, 0), q;
          }
      };
      t = function(O) {
        y !== null ? setTimeout(t, 0, O) : (y = O, setTimeout(k, 0));
      }, i = function(O, q) {
        S = setTimeout(O, q);
      }, l = function() {
        clearTimeout(S);
      }, d.unstable_shouldYield = function() {
        return !1;
      }, f = d.unstable_forceFrameRate = function() {
      };
    } else {
      var E = window.setTimeout, x = window.clearTimeout;
      if (typeof console != "undefined") {
        var N = window.cancelAnimationFrame;
        typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof N != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      }
      var P = !1, B = null, z = -1, Z = 5, X = 0;
      d.unstable_shouldYield = function() {
        return d.unstable_now() >= X;
      }, f = function() {
      }, d.unstable_forceFrameRate = function(O) {
        0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Z = 0 < O ? Math.floor(1e3 / O) : 5;
      };
      var Q = new MessageChannel(), K = Q.port2;
      Q.port1.onmessage = function() {
        if (B !== null) {
          var O = d.unstable_now();
          X = O + Z;
          try {
            B(!0, O) ? K.postMessage(null) : (P = !1, B = null);
          } catch (q) {
            throw K.postMessage(null), q;
          }
        } else
          P = !1;
      }, t = function(O) {
        B = O, P || (P = !0, K.postMessage(null));
      }, i = function(O, q) {
        z = E(function() {
          O(d.unstable_now());
        }, q);
      }, l = function() {
        x(z), z = -1;
      };
    }
    function se(O, q) {
      var he = O.length;
      O.push(q);
      e:
        for (; ; ) {
          var _e = he - 1 >>> 1, Fe = O[_e];
          if (Fe !== void 0 && 0 < oe(Fe, q))
            O[_e] = q, O[he] = Fe, he = _e;
          else
            break e;
        }
    }
    function J(O) {
      return O = O[0], O === void 0 ? null : O;
    }
    function de(O) {
      var q = O[0];
      if (q !== void 0) {
        var he = O.pop();
        if (he !== q) {
          O[0] = he;
          e:
            for (var _e = 0, Fe = O.length; _e < Fe; ) {
              var He = 2 * (_e + 1) - 1, We = O[He], je = He + 1, ct = O[je];
              if (We !== void 0 && 0 > oe(We, he))
                ct !== void 0 && 0 > oe(ct, We) ? (O[_e] = ct, O[je] = he, _e = je) : (O[_e] = We, O[He] = he, _e = He);
              else if (ct !== void 0 && 0 > oe(ct, he))
                O[_e] = ct, O[je] = he, _e = je;
              else
                break e;
            }
        }
        return q;
      }
      return null;
    }
    function oe(O, q) {
      var he = O.sortIndex - q.sortIndex;
      return he !== 0 ? he : O.id - q.id;
    }
    var ae = [], pe = [], me = 1, b = null, te = 3, Ne = !1, Ie = !1, Le = !1;
    function De(O) {
      for (var q = J(pe); q !== null; ) {
        if (q.callback === null)
          de(pe);
        else if (q.startTime <= O)
          de(pe), q.sortIndex = q.expirationTime, se(ae, q);
        else
          break;
        q = J(pe);
      }
    }
    function ie(O) {
      if (Le = !1, De(O), !Ie)
        if (J(ae) !== null)
          Ie = !0, t(we);
        else {
          var q = J(pe);
          q !== null && i(ie, q.startTime - O);
        }
    }
    function we(O, q) {
      Ie = !1, Le && (Le = !1, l()), Ne = !0;
      var he = te;
      try {
        for (De(q), b = J(ae); b !== null && (!(b.expirationTime > q) || O && !d.unstable_shouldYield()); ) {
          var _e = b.callback;
          if (typeof _e == "function") {
            b.callback = null, te = b.priorityLevel;
            var Fe = _e(b.expirationTime <= q);
            q = d.unstable_now(), typeof Fe == "function" ? b.callback = Fe : b === J(ae) && de(ae), De(q);
          } else
            de(ae);
          b = J(ae);
        }
        if (b !== null)
          var He = !0;
        else {
          var We = J(pe);
          We !== null && i(ie, We.startTime - q), He = !1;
        }
        return He;
      } finally {
        b = null, te = he, Ne = !1;
      }
    }
    var M = f;
    d.unstable_IdlePriority = 5, d.unstable_ImmediatePriority = 1, d.unstable_LowPriority = 4, d.unstable_NormalPriority = 3, d.unstable_Profiling = null, d.unstable_UserBlockingPriority = 2, d.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, d.unstable_continueExecution = function() {
      Ie || Ne || (Ie = !0, t(we));
    }, d.unstable_getCurrentPriorityLevel = function() {
      return te;
    }, d.unstable_getFirstCallbackNode = function() {
      return J(ae);
    }, d.unstable_next = function(O) {
      switch (te) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = te;
      }
      var he = te;
      te = q;
      try {
        return O();
      } finally {
        te = he;
      }
    }, d.unstable_pauseExecution = function() {
    }, d.unstable_requestPaint = M, d.unstable_runWithPriority = function(O, q) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var he = te;
      te = O;
      try {
        return q();
      } finally {
        te = he;
      }
    }, d.unstable_scheduleCallback = function(O, q, he) {
      var _e = d.unstable_now();
      switch (typeof he == "object" && he !== null ? (he = he.delay, he = typeof he == "number" && 0 < he ? _e + he : _e) : he = _e, O) {
        case 1:
          var Fe = -1;
          break;
        case 2:
          Fe = 250;
          break;
        case 5:
          Fe = 1073741823;
          break;
        case 4:
          Fe = 1e4;
          break;
        default:
          Fe = 5e3;
      }
      return Fe = he + Fe, O = { id: me++, callback: q, priorityLevel: O, startTime: he, expirationTime: Fe, sortIndex: -1 }, he > _e ? (O.sortIndex = he, se(pe, O), J(ae) === null && O === J(pe) && (Le ? l() : Le = !0, i(ie, he - _e))) : (O.sortIndex = Fe, se(ae, O), Ie || Ne || (Ie = !0, t(we))), O;
    }, d.unstable_wrapCallback = function(O) {
      var q = te;
      return function() {
        var he = te;
        te = q;
        try {
          return O.apply(this, arguments);
        } finally {
          te = he;
        }
      };
    };
  }(Md)), Md;
}
dp.exports = h0();
var xf = dp.exports;
/** @license React v0.26.2
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
kf.exports;
var wc;
function c0() {
  return wc || (wc = 1, function(d) {
    d.exports = function(i) {
      var l = {}, f = d0(), h = Pf(), p = xf;
      function g(r) {
        for (var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, o = 1; o < arguments.length; o++)
          a += "&args[]=" + encodeURIComponent(arguments[o]);
        return "Minified React error #" + r + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var y = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, S = 60103, k = 60106, E = 60107, x = 60108, N = 60114, P = 60109, B = 60110, z = 60112, Z = 60113, X = 60120, Q = 60115, K = 60116, se = 60121, J = 60129, de = 60130, oe = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var ae = Symbol.for;
        S = ae("react.element"), k = ae("react.portal"), E = ae("react.fragment"), x = ae("react.strict_mode"), N = ae("react.profiler"), P = ae("react.provider"), B = ae("react.context"), z = ae("react.forward_ref"), Z = ae("react.suspense"), X = ae("react.suspense_list"), Q = ae("react.memo"), K = ae("react.lazy"), se = ae("react.block"), ae("react.scope"), J = ae("react.debug_trace_mode"), de = ae("react.offscreen"), oe = ae("react.legacy_hidden");
      }
      var pe = typeof Symbol == "function" && Symbol.iterator;
      function me(r) {
        return r === null || typeof r != "object" ? null : (r = pe && r[pe] || r["@@iterator"], typeof r == "function" ? r : null);
      }
      function b(r) {
        if (r == null)
          return null;
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
        switch (r) {
          case E:
            return "Fragment";
          case k:
            return "Portal";
          case N:
            return "Profiler";
          case x:
            return "StrictMode";
          case Z:
            return "Suspense";
          case X:
            return "SuspenseList";
        }
        if (typeof r == "object")
          switch (r.$$typeof) {
            case B:
              return (r.displayName || "Context") + ".Consumer";
            case P:
              return (r._context.displayName || "Context") + ".Provider";
            case z:
              var a = r.render;
              return a = a.displayName || a.name || "", r.displayName || (a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
            case Q:
              return b(r.type);
            case se:
              return b(r._render);
            case K:
              a = r._payload, r = r._init;
              try {
                return b(r(a));
              } catch (o) {
              }
          }
        return null;
      }
      function te(r) {
        var a = r, o = r;
        if (r.alternate)
          for (; a.return; )
            a = a.return;
        else {
          r = a;
          do
            a = r, a.flags & 1026 && (o = a.return), r = a.return;
          while (r);
        }
        return a.tag === 3 ? o : null;
      }
      function Ne(r) {
        if (te(r) !== r)
          throw Error(g(188));
      }
      function Ie(r) {
        var a = r.alternate;
        if (!a) {
          if (a = te(r), a === null)
            throw Error(g(188));
          return a !== r ? null : r;
        }
        for (var o = r, v = a; ; ) {
          var _ = o.return;
          if (_ === null)
            break;
          var w = _.alternate;
          if (w === null) {
            if (v = _.return, v !== null) {
              o = v;
              continue;
            }
            break;
          }
          if (_.child === w.child) {
            for (w = _.child; w; ) {
              if (w === o)
                return Ne(_), r;
              if (w === v)
                return Ne(_), a;
              w = w.sibling;
            }
            throw Error(g(188));
          }
          if (o.return !== v.return)
            o = _, v = w;
          else {
            for (var T = !1, I = _.child; I; ) {
              if (I === o) {
                T = !0, o = _, v = w;
                break;
              }
              if (I === v) {
                T = !0, v = _, o = w;
                break;
              }
              I = I.sibling;
            }
            if (!T) {
              for (I = w.child; I; ) {
                if (I === o) {
                  T = !0, o = w, v = _;
                  break;
                }
                if (I === v) {
                  T = !0, v = w, o = _;
                  break;
                }
                I = I.sibling;
              }
              if (!T)
                throw Error(g(189));
            }
          }
          if (o.alternate !== v)
            throw Error(g(190));
        }
        if (o.tag !== 3)
          throw Error(g(188));
        return o.stateNode.current === o ? r : a;
      }
      function Le(r) {
        if (r = Ie(r), !r)
          return null;
        for (var a = r; ; ) {
          if (a.tag === 5 || a.tag === 6)
            return a;
          if (a.child)
            a.child.return = a, a = a.child;
          else {
            if (a === r)
              break;
            for (; !a.sibling; ) {
              if (!a.return || a.return === r)
                return null;
              a = a.return;
            }
            a.sibling.return = a.return, a = a.sibling;
          }
        }
        return null;
      }
      function De(r) {
        if (r = Ie(r), !r)
          return null;
        for (var a = r; ; ) {
          if (a.tag === 5 || a.tag === 6)
            return a;
          if (a.child && a.tag !== 4)
            a.child.return = a, a = a.child;
          else {
            if (a === r)
              break;
            for (; !a.sibling; ) {
              if (!a.return || a.return === r)
                return null;
              a = a.return;
            }
            a.sibling.return = a.return, a = a.sibling;
          }
        }
        return null;
      }
      function ie(r, a) {
        for (var o = r.alternate; a !== null; ) {
          if (a === r || a === o)
            return !0;
          a = a.return;
        }
        return !1;
      }
      var we = i.getPublicInstance, M = i.getRootHostContext, O = i.getChildHostContext, q = i.prepareForCommit, he = i.resetAfterCommit, _e = i.createInstance, Fe = i.appendInitialChild, He = i.finalizeInitialChildren, We = i.prepareUpdate, je = i.shouldSetTextContent, ct = i.createTextInstance, Jo = i.scheduleTimeout, Es = i.cancelTimeout, Ps = i.noTimeout, Vn = i.isPrimaryRenderer, un = i.supportsMutation, zi = i.supportsPersistence, mn = i.supportsHydration, Fl = i.getInstanceFromNode, Zo = i.makeOpaqueHydratingObject, Da = i.makeClientId, Di = i.beforeActiveInstanceBlur, Fi = i.afterActiveInstanceBlur, Gl = i.preparePortalMount, Gi = i.supportsTestSelectors, $o = i.findFiberRoot, bo = i.getBoundingRect, eu = i.getTextContent, ei = i.isHiddenSubtree, Ts = i.matchAccessibilityRole, tu = i.setFocusIfFocusable, Fa = i.setupIntersectionObserver, Ga = i.appendChild, Nf = i.appendChildToContainer, nu = i.commitTextUpdate, ru = i.commitMount, Af = i.commitUpdate, Bl = i.insertBefore, Ul = i.insertInContainerBefore, Hl = i.removeChild, jl = i.removeChildFromContainer, Rs = i.resetTextContent, Bi = i.hideInstance, Ui = i.hideTextInstance, iu = i.unhideInstance, au = i.unhideTextInstance, Ms = i.clearContainer, su = i.cloneInstance, Wl = i.createContainerChildSet, Ls = i.appendChildToContainerChildSet, lu = i.finalizeContainerChildren, Hi = i.replaceContainerChildren, Ns = i.cloneHiddenInstance, ji = i.cloneHiddenTextInstance, Of = i.canHydrateInstance, Ba = i.canHydrateTextInstance, As = i.isSuspenseInstancePending, Os = i.isSuspenseInstanceFallback, Ua = i.getNextHydratableSibling, ou = i.getFirstHydratableChild, If = i.hydrateInstance, zf = i.hydrateTextInstance, ti = i.getNextHydratableInstanceAfterSuspenseInstance, Vl = i.commitHydratedContainer, uu = i.commitHydratedSuspenseInstance, Yl;
      function Wi(r) {
        if (Yl === void 0)
          try {
            throw Error();
          } catch (o) {
            var a = o.stack.trim().match(/\n( *(at )?)/);
            Yl = a && a[1] || "";
          }
        return `
` + Yl + r;
      }
      var Is = !1;
      function Ha(r, a) {
        if (!r || Is)
          return "";
        Is = !0;
        var o = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (a)
            if (a = function() {
              throw Error();
            }, Object.defineProperty(a.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(a, []);
              } catch (V) {
                var v = V;
              }
              Reflect.construct(r, [], a);
            } else {
              try {
                a.call();
              } catch (V) {
                v = V;
              }
              r.call(a.prototype);
            }
          else {
            try {
              throw Error();
            } catch (V) {
              v = V;
            }
            r();
          }
        } catch (V) {
          if (V && v && typeof V.stack == "string") {
            for (var _ = V.stack.split(`
`), w = v.stack.split(`
`), T = _.length - 1, I = w.length - 1; 1 <= T && 0 <= I && _[T] !== w[I]; )
              I--;
            for (; 1 <= T && 0 <= I; T--, I--)
              if (_[T] !== w[I]) {
                if (T !== 1 || I !== 1)
                  do
                    if (T--, I--, 0 > I || _[T] !== w[I])
                      return `
` + _[T].replace(" at new ", " at ");
                  while (1 <= T && 0 <= I);
                break;
              }
          }
        } finally {
          Is = !1, Error.prepareStackTrace = o;
        }
        return (r = r ? r.displayName || r.name : "") ? Wi(r) : "";
      }
      var zs = [], Vi = -1;
      function Mr(r) {
        return { current: r };
      }
      function Be(r) {
        0 > Vi || (r.current = zs[Vi], zs[Vi] = null, Vi--);
      }
      function pt(r, a) {
        Vi++, zs[Vi] = r.current, r.current = a;
      }
      var Yn = {}, zt = Mr(Yn), Dt = Mr(!1), ni = Yn;
      function ri(r, a) {
        var o = r.type.contextTypes;
        if (!o)
          return Yn;
        var v = r.stateNode;
        if (v && v.__reactInternalMemoizedUnmaskedChildContext === a)
          return v.__reactInternalMemoizedMaskedChildContext;
        var _ = {}, w;
        for (w in o)
          _[w] = a[w];
        return v && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = a, r.__reactInternalMemoizedMaskedChildContext = _), _;
      }
      function Ft(r) {
        return r = r.childContextTypes, r != null;
      }
      function fn() {
        Be(Dt), Be(zt);
      }
      function fu(r, a, o) {
        if (zt.current !== Yn)
          throw Error(g(168));
        pt(zt, a), pt(Dt, o);
      }
      function yn(r, a, o) {
        var v = r.stateNode;
        if (r = a.childContextTypes, typeof v.getChildContext != "function")
          return o;
        v = v.getChildContext();
        for (var _ in v)
          if (!(_ in r))
            throw Error(g(108, b(a) || "Unknown", _));
        return f({}, o, v);
      }
      function Ds(r) {
        return r = (r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext || Yn, ni = zt.current, pt(zt, r), pt(Dt, Dt.current), !0;
      }
      function du(r, a, o) {
        var v = r.stateNode;
        if (!v)
          throw Error(g(169));
        o ? (r = yn(r, a, ni), v.__reactInternalMemoizedMergedChildContext = r, Be(Dt), Be(zt), pt(zt, r)) : Be(Dt), pt(Dt, o);
      }
      var Ql = null, Qn = null, Fs = p.unstable_now;
      Fs();
      var Lr = 0, $e = 8;
      function ii(r) {
        if (1 & r)
          return $e = 15, 1;
        if (2 & r)
          return $e = 14, 2;
        if (4 & r)
          return $e = 13, 4;
        var a = 24 & r;
        return a !== 0 ? ($e = 12, a) : r & 32 ? ($e = 11, 32) : (a = 192 & r, a !== 0 ? ($e = 10, a) : r & 256 ? ($e = 9, 256) : (a = 3584 & r, a !== 0 ? ($e = 8, a) : r & 4096 ? ($e = 7, 4096) : (a = 4186112 & r, a !== 0 ? ($e = 6, a) : (a = 62914560 & r, a !== 0 ? ($e = 5, a) : r & 67108864 ? ($e = 4, 67108864) : r & 134217728 ? ($e = 3, 134217728) : (a = 805306368 & r, a !== 0 ? ($e = 2, a) : 1073741824 & r ? ($e = 1, 1073741824) : ($e = 8, r))))));
      }
      function Df(r) {
        switch (r) {
          case 99:
            return 15;
          case 98:
            return 10;
          case 97:
          case 96:
            return 8;
          case 95:
            return 2;
          default:
            return 0;
        }
      }
      function Xl(r) {
        switch (r) {
          case 15:
          case 14:
            return 99;
          case 13:
          case 12:
          case 11:
          case 10:
            return 98;
          case 9:
          case 8:
          case 7:
          case 6:
          case 4:
          case 5:
            return 97;
          case 3:
          case 2:
          case 1:
            return 95;
          case 0:
            return 90;
          default:
            throw Error(g(358, r));
        }
      }
      function Yi(r, a) {
        var o = r.pendingLanes;
        if (o === 0)
          return $e = 0;
        var v = 0, _ = 0, w = r.expiredLanes, T = r.suspendedLanes, I = r.pingedLanes;
        if (w !== 0)
          v = w, _ = $e = 15;
        else if (w = o & 134217727, w !== 0) {
          var V = w & ~T;
          V !== 0 ? (v = ii(V), _ = $e) : (I &= w, I !== 0 && (v = ii(I), _ = $e));
        } else
          w = o & ~T, w !== 0 ? (v = ii(w), _ = $e) : I !== 0 && (v = ii(I), _ = $e);
        if (v === 0)
          return 0;
        if (v = 31 - cr(v), v = o & ((0 > v ? 0 : 1 << v) << 1) - 1, a !== 0 && a !== v && !(a & T)) {
          if (ii(a), _ <= $e)
            return a;
          $e = _;
        }
        if (a = r.entangledLanes, a !== 0)
          for (r = r.entanglements, a &= v; 0 < a; )
            o = 31 - cr(a), _ = 1 << o, v |= r[o], a &= ~_;
        return v;
      }
      function Gs(r) {
        return r = r.pendingLanes & -1073741825, r !== 0 ? r : r & 1073741824 ? 1073741824 : 0;
      }
      function Nr(r, a) {
        switch (r) {
          case 15:
            return 1;
          case 14:
            return 2;
          case 12:
            return r = Qi(24 & ~a), r === 0 ? Nr(10, a) : r;
          case 10:
            return r = Qi(192 & ~a), r === 0 ? Nr(8, a) : r;
          case 8:
            return r = Qi(3584 & ~a), r === 0 && (r = Qi(4186112 & ~a), r === 0 && (r = 512)), r;
          case 2:
            return a = Qi(805306368 & ~a), a === 0 && (a = 268435456), a;
        }
        throw Error(g(358, r));
      }
      function Qi(r) {
        return r & -r;
      }
      function ja(r) {
        for (var a = [], o = 0; 31 > o; o++)
          a.push(r);
        return a;
      }
      function Qe(r, a, o) {
        r.pendingLanes |= a;
        var v = a - 1;
        r.suspendedLanes &= v, r.pingedLanes &= v, r = r.eventTimes, a = 31 - cr(a), r[a] = o;
      }
      var cr = Math.clz32 ? Math.clz32 : cu, hu = Math.log, Kl = Math.LN2;
      function cu(r) {
        return r === 0 ? 32 : 31 - (hu(r) / Kl | 0) | 0;
      }
      var pu = p.unstable_runWithPriority, Bs = p.unstable_scheduleCallback, Wa = p.unstable_cancelCallback, Us = p.unstable_shouldYield, pr = p.unstable_requestPaint, Xn = p.unstable_now, Ar = p.unstable_getCurrentPriorityLevel, Or = p.unstable_ImmediatePriority, Xi = p.unstable_UserBlockingPriority, gr = p.unstable_NormalPriority, gu = p.unstable_LowPriority, ql = p.unstable_IdlePriority, ai = {}, Ff = pr !== void 0 ? pr : function() {
      }, Kn = null, si = null, Hs = !1, vu = Xn(), mt = 1e4 > vu ? Xn : function() {
        return Xn() - vu;
      };
      function qn() {
        switch (Ar()) {
          case Or:
            return 99;
          case Xi:
            return 98;
          case gr:
            return 97;
          case gu:
            return 96;
          case ql:
            return 95;
          default:
            throw Error(g(332));
        }
      }
      function li(r) {
        switch (r) {
          case 99:
            return Or;
          case 98:
            return Xi;
          case 97:
            return gr;
          case 96:
            return gu;
          case 95:
            return ql;
          default:
            throw Error(g(332));
        }
      }
      function _n(r, a) {
        return r = li(r), pu(r, a);
      }
      function Va(r, a, o) {
        return r = li(r), Bs(r, a, o);
      }
      function Sn() {
        if (si !== null) {
          var r = si;
          si = null, Wa(r);
        }
        js();
      }
      function js() {
        if (!Hs && Kn !== null) {
          Hs = !0;
          var r = 0;
          try {
            var a = Kn;
            _n(99, function() {
              for (; r < a.length; r++) {
                var o = a[r];
                do
                  o = o(!0);
                while (o !== null);
              }
            }), Kn = null;
          } catch (o) {
            throw Kn !== null && (Kn = Kn.slice(r + 1)), Bs(Or, Sn), o;
          } finally {
            Hs = !1;
          }
        }
      }
      var Ws = y.ReactCurrentBatchConfig;
      function Jl(r, a) {
        return r === a && (r !== 0 || 1 / r === 1 / a) || r !== r && a !== a;
      }
      var dn = typeof Object.is == "function" ? Object.is : Jl, Ir = Object.prototype.hasOwnProperty;
      function Ki(r, a) {
        if (dn(r, a))
          return !0;
        if (typeof r != "object" || r === null || typeof a != "object" || a === null)
          return !1;
        var o = Object.keys(r), v = Object.keys(a);
        if (o.length !== v.length)
          return !1;
        for (v = 0; v < o.length; v++)
          if (!Ir.call(a, o[v]) || !dn(r[o[v]], a[o[v]]))
            return !1;
        return !0;
      }
      function Vs(r) {
        switch (r.tag) {
          case 5:
            return Wi(r.type);
          case 16:
            return Wi("Lazy");
          case 13:
            return Wi("Suspense");
          case 19:
            return Wi("SuspenseList");
          case 0:
          case 2:
          case 15:
            return r = Ha(r.type, !1), r;
          case 11:
            return r = Ha(r.type.render, !1), r;
          case 22:
            return r = Ha(r.type._render, !1), r;
          case 1:
            return r = Ha(r.type, !0), r;
          default:
            return "";
        }
      }
      function wn(r, a) {
        if (r && r.defaultProps) {
          a = f({}, a), r = r.defaultProps;
          for (var o in r)
            a[o] === void 0 && (a[o] = r[o]);
          return a;
        }
        return a;
      }
      var oi = Mr(null), ui = null, fi = null, Ht = null;
      function zr() {
        Ht = fi = ui = null;
      }
      function Ys(r, a) {
        r = r.type._context, Vn ? (pt(oi, r._currentValue), r._currentValue = a) : (pt(oi, r._currentValue2), r._currentValue2 = a);
      }
      function di(r) {
        var a = oi.current;
        Be(oi), r = r.type._context, Vn ? r._currentValue = a : r._currentValue2 = a;
      }
      function mu(r, a) {
        for (; r !== null; ) {
          var o = r.alternate;
          if ((r.childLanes & a) === a) {
            if (o === null || (o.childLanes & a) === a)
              break;
            o.childLanes |= a;
          } else
            r.childLanes |= a, o !== null && (o.childLanes |= a);
          r = r.return;
        }
      }
      function Dr(r, a) {
        ui = r, Ht = fi = null, r = r.dependencies, r !== null && r.firstContext !== null && (r.lanes & a && (En = !0), r.firstContext = null);
      }
      function bt(r, a) {
        if (Ht !== r && a !== !1 && a !== 0)
          if ((typeof a != "number" || a === 1073741823) && (Ht = r, a = 1073741823), a = { context: r, observedBits: a, next: null }, fi === null) {
            if (ui === null)
              throw Error(g(308));
            fi = a, ui.dependencies = { lanes: 0, firstContext: a, responders: null };
          } else
            fi = fi.next = a;
        return Vn ? r._currentValue : r._currentValue2;
      }
      var Cn = !1;
      function qi(r) {
        r.updateQueue = { baseState: r.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
      }
      function Zl(r, a) {
        r = r.updateQueue, a.updateQueue === r && (a.updateQueue = { baseState: r.baseState, firstBaseUpdate: r.firstBaseUpdate, lastBaseUpdate: r.lastBaseUpdate, shared: r.shared, effects: r.effects });
      }
      function Fr(r, a) {
        return { eventTime: r, lane: a, tag: 0, payload: null, callback: null, next: null };
      }
      function Gr(r, a) {
        if (r = r.updateQueue, r !== null) {
          r = r.shared;
          var o = r.pending;
          o === null ? a.next = a : (a.next = o.next, o.next = a), r.pending = a;
        }
      }
      function yu(r, a) {
        var o = r.updateQueue, v = r.alternate;
        if (v !== null && (v = v.updateQueue, o === v)) {
          var _ = null, w = null;
          if (o = o.firstBaseUpdate, o !== null) {
            do {
              var T = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
              w === null ? _ = w = T : w = w.next = T, o = o.next;
            } while (o !== null);
            w === null ? _ = w = a : w = w.next = a;
          } else
            _ = w = a;
          o = { baseState: v.baseState, firstBaseUpdate: _, lastBaseUpdate: w, shared: v.shared, effects: v.effects }, r.updateQueue = o;
          return;
        }
        r = o.lastBaseUpdate, r === null ? o.firstBaseUpdate = a : r.next = a, o.lastBaseUpdate = a;
      }
      function hi(r, a, o, v) {
        var _ = r.updateQueue;
        Cn = !1;
        var w = _.firstBaseUpdate, T = _.lastBaseUpdate, I = _.shared.pending;
        if (I !== null) {
          _.shared.pending = null;
          var V = I, ce = V.next;
          V.next = null, T === null ? w = ce : T.next = ce, T = V;
          var Re = r.alternate;
          if (Re !== null) {
            Re = Re.updateQueue;
            var ze = Re.lastBaseUpdate;
            ze !== T && (ze === null ? Re.firstBaseUpdate = ce : ze.next = ce, Re.lastBaseUpdate = V);
          }
        }
        if (w !== null) {
          ze = _.baseState, T = 0, Re = ce = V = null;
          do {
            I = w.lane;
            var ye = w.eventTime;
            if ((v & I) === I) {
              Re !== null && (Re = Re.next = {
                eventTime: ye,
                lane: 0,
                tag: w.tag,
                payload: w.payload,
                callback: w.callback,
                next: null
              });
              e: {
                var tt = r, nt = w;
                switch (I = a, ye = o, nt.tag) {
                  case 1:
                    if (tt = nt.payload, typeof tt == "function") {
                      ze = tt.call(ye, ze, I);
                      break e;
                    }
                    ze = tt;
                    break e;
                  case 3:
                    tt.flags = tt.flags & -4097 | 64;
                  case 0:
                    if (tt = nt.payload, I = typeof tt == "function" ? tt.call(ye, ze, I) : tt, I == null)
                      break e;
                    ze = f({}, ze, I);
                    break e;
                  case 2:
                    Cn = !0;
                }
              }
              w.callback !== null && (r.flags |= 32, I = _.effects, I === null ? _.effects = [w] : I.push(w));
            } else
              ye = { eventTime: ye, lane: I, tag: w.tag, payload: w.payload, callback: w.callback, next: null }, Re === null ? (ce = Re = ye, V = ze) : Re = Re.next = ye, T |= I;
            if (w = w.next, w === null) {
              if (I = _.shared.pending, I === null)
                break;
              w = I.next, I.next = null, _.lastBaseUpdate = I, _.shared.pending = null;
            }
          } while (1);
          Re === null && (V = ze), _.baseState = V, _.firstBaseUpdate = ce, _.lastBaseUpdate = Re, Gn |= T, r.lanes = T, r.memoizedState = ze;
        }
      }
      function _u(r, a, o) {
        if (r = a.effects, a.effects = null, r !== null)
          for (a = 0; a < r.length; a++) {
            var v = r[a], _ = v.callback;
            if (_ !== null) {
              if (v.callback = null, v = o, typeof _ != "function")
                throw Error(g(191, _));
              _.call(v);
            }
          }
      }
      var Su = new h.Component().refs;
      function Qs(r, a, o, v) {
        a = r.memoizedState, o = o(v, a), o = o == null ? a : f({}, a, o), r.memoizedState = o, r.lanes === 0 && (r.updateQueue.baseState = o);
      }
      var Xs = { isMounted: function(r) {
        return (r = r._reactInternals) ? te(r) === r : !1;
      }, enqueueSetState: function(r, a, o) {
        r = r._reactInternals;
        var v = Vt(), _ = ar(r), w = Fr(v, _);
        w.payload = a, o != null && (w.callback = o), Gr(r, w), nn(r, _, v);
      }, enqueueReplaceState: function(r, a, o) {
        r = r._reactInternals;
        var v = Vt(), _ = ar(r), w = Fr(v, _);
        w.tag = 1, w.payload = a, o != null && (w.callback = o), Gr(r, w), nn(r, _, v);
      }, enqueueForceUpdate: function(r, a) {
        r = r._reactInternals;
        var o = Vt(), v = ar(r), _ = Fr(o, v);
        _.tag = 2, a != null && (_.callback = a), Gr(r, _), nn(r, v, o);
      } };
      function wu(r, a, o, v, _, w, T) {
        return r = r.stateNode, typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(v, w, T) : a.prototype && a.prototype.isPureReactComponent ? !Ki(o, v) || !Ki(_, w) : !0;
      }
      function $l(r, a, o) {
        var v = !1, _ = Yn, w = a.contextType;
        return typeof w == "object" && w !== null ? w = bt(w) : (_ = Ft(a) ? ni : zt.current, v = a.contextTypes, w = (v = v != null) ? ri(r, _) : Yn), a = new a(o, w), r.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = Xs, r.stateNode = a, a._reactInternals = r, v && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = _, r.__reactInternalMemoizedMaskedChildContext = w), a;
      }
      function Cu(r, a, o, v) {
        r = a.state, typeof a.componentWillReceiveProps == "function" && a.componentWillReceiveProps(o, v), typeof a.UNSAFE_componentWillReceiveProps == "function" && a.UNSAFE_componentWillReceiveProps(o, v), a.state !== r && Xs.enqueueReplaceState(a, a.state, null);
      }
      function bl(r, a, o, v) {
        var _ = r.stateNode;
        _.props = o, _.state = r.memoizedState, _.refs = Su, qi(r);
        var w = a.contextType;
        typeof w == "object" && w !== null ? _.context = bt(w) : (w = Ft(a) ? ni : zt.current, _.context = ri(r, w)), hi(r, o, _, v), _.state = r.memoizedState, w = a.getDerivedStateFromProps, typeof w == "function" && (Qs(r, a, w, o), _.state = r.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof _.getSnapshotBeforeUpdate == "function" || typeof _.UNSAFE_componentWillMount != "function" && typeof _.componentWillMount != "function" || (a = _.state, typeof _.componentWillMount == "function" && _.componentWillMount(), typeof _.UNSAFE_componentWillMount == "function" && _.UNSAFE_componentWillMount(), a !== _.state && Xs.enqueueReplaceState(_, _.state, null), hi(r, o, _, v), _.state = r.memoizedState), typeof _.componentDidMount == "function" && (r.flags |= 4);
      }
      var Ks = Array.isArray;
      function Ya(r, a, o) {
        if (r = o.ref, r !== null && typeof r != "function" && typeof r != "object") {
          if (o._owner) {
            if (o = o._owner, o) {
              if (o.tag !== 1)
                throw Error(g(309));
              var v = o.stateNode;
            }
            if (!v)
              throw Error(g(147, r));
            var _ = "" + r;
            return a !== null && a.ref !== null && typeof a.ref == "function" && a.ref._stringRef === _ ? a.ref : (a = function(w) {
              var T = v.refs;
              T === Su && (T = v.refs = {}), w === null ? delete T[_] : T[_] = w;
            }, a._stringRef = _, a);
          }
          if (typeof r != "string")
            throw Error(g(284));
          if (!o._owner)
            throw Error(g(290, r));
        }
        return r;
      }
      function Ji(r, a) {
        if (r.type !== "textarea")
          throw Error(g(31, Object.prototype.toString.call(a) === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : a));
      }
      function ku(r) {
        function a(H, F) {
          if (r) {
            var Y = H.lastEffect;
            Y !== null ? (Y.nextEffect = F, H.lastEffect = F) : H.firstEffect = H.lastEffect = F, F.nextEffect = null, F.flags = 8;
          }
        }
        function o(H, F) {
          if (!r)
            return null;
          for (; F !== null; )
            a(H, F), F = F.sibling;
          return null;
        }
        function v(H, F) {
          for (H = /* @__PURE__ */ new Map(); F !== null; )
            F.key !== null ? H.set(F.key, F) : H.set(F.index, F), F = F.sibling;
          return H;
        }
        function _(H, F) {
          return H = or(H, F), H.index = 0, H.sibling = null, H;
        }
        function w(H, F, Y) {
          return H.index = Y, r ? (Y = H.alternate, Y !== null ? (Y = Y.index, Y < F ? (H.flags = 2, F) : Y) : (H.flags = 2, F)) : F;
        }
        function T(H) {
          return r && H.alternate === null && (H.flags = 2), H;
        }
        function I(H, F, Y, ve) {
          return F === null || F.tag !== 6 ? (F = kt(Y, H.mode, ve), F.return = H, F) : (F = _(F, Y), F.return = H, F);
        }
        function V(H, F, Y, ve) {
          return F !== null && F.elementType === Y.type ? (ve = _(F, Y.props), ve.ref = Ya(H, F, Y), ve.return = H, ve) : (ve = ur(Y.type, Y.key, Y.props, null, H.mode, ve), ve.ref = Ya(H, F, Y), ve.return = H, ve);
        }
        function ce(H, F, Y, ve) {
          return F === null || F.tag !== 4 || F.stateNode.containerInfo !== Y.containerInfo || F.stateNode.implementation !== Y.implementation ? (F = Ca(Y, H.mode, ve), F.return = H, F) : (F = _(F, Y.children || []), F.return = H, F);
        }
        function Re(H, F, Y, ve, Me) {
          return F === null || F.tag !== 7 ? (F = et(Y, H.mode, ve, Me), F.return = H, F) : (F = _(F, Y), F.return = H, F);
        }
        function ze(H, F, Y) {
          if (typeof F == "string" || typeof F == "number")
            return F = kt("" + F, H.mode, Y), F.return = H, F;
          if (typeof F == "object" && F !== null) {
            switch (F.$$typeof) {
              case S:
                return Y = ur(F.type, F.key, F.props, null, H.mode, Y), Y.ref = Ya(H, null, F), Y.return = H, Y;
              case k:
                return F = Ca(F, H.mode, Y), F.return = H, F;
            }
            if (Ks(F) || me(F))
              return F = et(
                F,
                H.mode,
                Y,
                null
              ), F.return = H, F;
            Ji(H, F);
          }
          return null;
        }
        function ye(H, F, Y, ve) {
          var Me = F !== null ? F.key : null;
          if (typeof Y == "string" || typeof Y == "number")
            return Me !== null ? null : I(H, F, "" + Y, ve);
          if (typeof Y == "object" && Y !== null) {
            switch (Y.$$typeof) {
              case S:
                return Y.key === Me ? Y.type === E ? Re(H, F, Y.props.children, ve, Me) : V(H, F, Y, ve) : null;
              case k:
                return Y.key === Me ? ce(H, F, Y, ve) : null;
            }
            if (Ks(Y) || me(Y))
              return Me !== null ? null : Re(H, F, Y, ve, null);
            Ji(H, Y);
          }
          return null;
        }
        function tt(H, F, Y, ve, Me) {
          if (typeof ve == "string" || typeof ve == "number")
            return H = H.get(Y) || null, I(F, H, "" + ve, Me);
          if (typeof ve == "object" && ve !== null) {
            switch (ve.$$typeof) {
              case S:
                return H = H.get(ve.key === null ? Y : ve.key) || null, ve.type === E ? Re(F, H, ve.props.children, Me, ve.key) : V(F, H, ve, Me);
              case k:
                return H = H.get(ve.key === null ? Y : ve.key) || null, ce(F, H, ve, Me);
            }
            if (Ks(ve) || me(ve))
              return H = H.get(Y) || null, Re(F, H, ve, Me, null);
            Ji(F, ve);
          }
          return null;
        }
        function nt(H, F, Y, ve) {
          for (var Me = null, it = null, Ge = F, Ke = F = 0, vt = null; Ge !== null && Ke < Y.length; Ke++) {
            Ge.index > Ke ? (vt = Ge, Ge = null) : vt = Ge.sibling;
            var Ve = ye(H, Ge, Y[Ke], ve);
            if (Ve === null) {
              Ge === null && (Ge = vt);
              break;
            }
            r && Ge && Ve.alternate === null && a(H, Ge), F = w(Ve, F, Ke), it === null ? Me = Ve : it.sibling = Ve, it = Ve, Ge = vt;
          }
          if (Ke === Y.length)
            return o(H, Ge), Me;
          if (Ge === null) {
            for (; Ke < Y.length; Ke++)
              Ge = ze(H, Y[Ke], ve), Ge !== null && (F = w(Ge, F, Ke), it === null ? Me = Ge : it.sibling = Ge, it = Ge);
            return Me;
          }
          for (Ge = v(H, Ge); Ke < Y.length; Ke++)
            vt = tt(Ge, H, Ke, Y[Ke], ve), vt !== null && (r && vt.alternate !== null && Ge.delete(vt.key === null ? Ke : vt.key), F = w(vt, F, Ke), it === null ? Me = vt : it.sibling = vt, it = vt);
          return r && Ge.forEach(function(kr) {
            return a(H, kr);
          }), Me;
        }
        function pn(H, F, Y, ve) {
          var Me = me(Y);
          if (typeof Me != "function")
            throw Error(g(150));
          if (Y = Me.call(Y), Y == null)
            throw Error(g(151));
          for (var it = Me = null, Ge = F, Ke = F = 0, vt = null, Ve = Y.next(); Ge !== null && !Ve.done; Ke++, Ve = Y.next()) {
            Ge.index > Ke ? (vt = Ge, Ge = null) : vt = Ge.sibling;
            var kr = ye(H, Ge, Ve.value, ve);
            if (kr === null) {
              Ge === null && (Ge = vt);
              break;
            }
            r && Ge && kr.alternate === null && a(H, Ge), F = w(kr, F, Ke), it === null ? Me = kr : it.sibling = kr, it = kr, Ge = vt;
          }
          if (Ve.done)
            return o(H, Ge), Me;
          if (Ge === null) {
            for (; !Ve.done; Ke++, Ve = Y.next())
              Ve = ze(H, Ve.value, ve), Ve !== null && (F = w(Ve, F, Ke), it === null ? Me = Ve : it.sibling = Ve, it = Ve);
            return Me;
          }
          for (Ge = v(H, Ge); !Ve.done; Ke++, Ve = Y.next())
            Ve = tt(Ge, H, Ke, Ve.value, ve), Ve !== null && (r && Ve.alternate !== null && Ge.delete(Ve.key === null ? Ke : Ve.key), F = w(Ve, F, Ke), it === null ? Me = Ve : it.sibling = Ve, it = Ve);
          return r && Ge.forEach(function(Uu) {
            return a(H, Uu);
          }), Me;
        }
        return function(H, F, Y, ve) {
          var Me = typeof Y == "object" && Y !== null && Y.type === E && Y.key === null;
          Me && (Y = Y.props.children);
          var it = typeof Y == "object" && Y !== null;
          if (it)
            switch (Y.$$typeof) {
              case S:
                e: {
                  for (it = Y.key, Me = F; Me !== null; ) {
                    if (Me.key === it) {
                      switch (Me.tag) {
                        case 7:
                          if (Y.type === E) {
                            o(H, Me.sibling), F = _(Me, Y.props.children), F.return = H, H = F;
                            break e;
                          }
                          break;
                        default:
                          if (Me.elementType === Y.type) {
                            o(H, Me.sibling), F = _(Me, Y.props), F.ref = Ya(H, Me, Y), F.return = H, H = F;
                            break e;
                          }
                      }
                      o(H, Me);
                      break;
                    } else
                      a(H, Me);
                    Me = Me.sibling;
                  }
                  Y.type === E ? (F = et(Y.props.children, H.mode, ve, Y.key), F.return = H, H = F) : (ve = ur(Y.type, Y.key, Y.props, null, H.mode, ve), ve.ref = Ya(H, F, Y), ve.return = H, H = ve);
                }
                return T(H);
              case k:
                e: {
                  for (Me = Y.key; F !== null; ) {
                    if (F.key === Me)
                      if (F.tag === 4 && F.stateNode.containerInfo === Y.containerInfo && F.stateNode.implementation === Y.implementation) {
                        o(H, F.sibling), F = _(F, Y.children || []), F.return = H, H = F;
                        break e;
                      } else {
                        o(H, F);
                        break;
                      }
                    else
                      a(H, F);
                    F = F.sibling;
                  }
                  F = Ca(Y, H.mode, ve), F.return = H, H = F;
                }
                return T(H);
            }
          if (typeof Y == "string" || typeof Y == "number")
            return Y = "" + Y, F !== null && F.tag === 6 ? (o(H, F.sibling), F = _(F, Y), F.return = H, H = F) : (o(H, F), F = kt(Y, H.mode, ve), F.return = H, H = F), T(H);
          if (Ks(Y))
            return nt(H, F, Y, ve);
          if (me(Y))
            return pn(H, F, Y, ve);
          if (it && Ji(H, Y), typeof Y == "undefined" && !Me)
            switch (H.tag) {
              case 1:
              case 22:
              case 0:
              case 11:
              case 15:
                throw Error(g(152, b(H.type) || "Component"));
            }
          return o(H, F);
        };
      }
      var qs = ku(!0), xu = ku(!1), Zi = {}, kn = Mr(Zi), Qa = Mr(Zi), $i = Mr(Zi);
      function Jn(r) {
        if (r === Zi)
          throw Error(g(174));
        return r;
      }
      function eo(r, a) {
        pt($i, a), pt(Qa, r), pt(kn, Zi), r = M(a), Be(kn), pt(kn, r);
      }
      function bi() {
        Be(kn), Be(Qa), Be($i);
      }
      function Eu(r) {
        var a = Jn($i.current), o = Jn(kn.current);
        a = O(o, r.type, a), o !== a && (pt(Qa, r), pt(kn, a));
      }
      function Xa(r) {
        Qa.current === r && (Be(kn), Be(Qa));
      }
      var at = Mr(0);
      function Js(r) {
        for (var a = r; a !== null; ) {
          if (a.tag === 13) {
            var o = a.memoizedState;
            if (o !== null && (o = o.dehydrated, o === null || As(o) || Os(o)))
              return a;
          } else if (a.tag === 19 && a.memoizedProps.revealOrder !== void 0) {
            if (a.flags & 64)
              return a;
          } else if (a.child !== null) {
            a.child.return = a, a = a.child;
            continue;
          }
          if (a === r)
            break;
          for (; a.sibling === null; ) {
            if (a.return === null || a.return === r)
              return null;
            a = a.return;
          }
          a.sibling.return = a.return, a = a.sibling;
        }
        return null;
      }
      var Zn = null, Br = null, zn = !1;
      function to(r, a) {
        var o = rn(5, null, null, 0);
        o.elementType = "DELETED", o.type = "DELETED", o.stateNode = a, o.return = r, o.flags = 8, r.lastEffect !== null ? (r.lastEffect.nextEffect = o, r.lastEffect = o) : r.firstEffect = r.lastEffect = o;
      }
      function no(r, a) {
        switch (r.tag) {
          case 5:
            return a = Of(a, r.type, r.pendingProps), a !== null ? (r.stateNode = a, !0) : !1;
          case 6:
            return a = Ba(a, r.pendingProps), a !== null ? (r.stateNode = a, !0) : !1;
          case 13:
            return !1;
          default:
            return !1;
        }
      }
      function Ur(r) {
        if (zn) {
          var a = Br;
          if (a) {
            var o = a;
            if (!no(r, a)) {
              if (a = Ua(o), !a || !no(r, a)) {
                r.flags = r.flags & -1025 | 2, zn = !1, Zn = r;
                return;
              }
              to(Zn, o);
            }
            Zn = r, Br = ou(a);
          } else
            r.flags = r.flags & -1025 | 2, zn = !1, Zn = r;
        }
      }
      function Pu(r) {
        for (r = r.return; r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13; )
          r = r.return;
        Zn = r;
      }
      function Zs(r) {
        if (!mn || r !== Zn)
          return !1;
        if (!zn)
          return Pu(r), zn = !0, !1;
        var a = r.type;
        if (r.tag !== 5 || a !== "head" && a !== "body" && !je(a, r.memoizedProps))
          for (a = Br; a; )
            to(r, a), a = Ua(a);
        if (Pu(r), r.tag === 13) {
          if (!mn)
            throw Error(g(316));
          if (r = r.memoizedState, r = r !== null ? r.dehydrated : null, !r)
            throw Error(g(317));
          Br = ti(r);
        } else
          Br = Zn ? Ua(r.stateNode) : null;
        return !0;
      }
      function ro() {
        mn && (Br = Zn = null, zn = !1);
      }
      var ci = [];
      function $s() {
        for (var r = 0; r < ci.length; r++) {
          var a = ci[r];
          Vn ? a._workInProgressVersionPrimary = null : a._workInProgressVersionSecondary = null;
        }
        ci.length = 0;
      }
      var vr = y.ReactCurrentDispatcher, jt = y.ReactCurrentBatchConfig, Ka = 0, ft = null, Wt = null, Nt = null, ea = !1, pi = !1;
      function Xt() {
        throw Error(g(321));
      }
      function bs(r, a) {
        if (a === null)
          return !1;
        for (var o = 0; o < a.length && o < r.length; o++)
          if (!dn(r[o], a[o]))
            return !1;
        return !0;
      }
      function el(r, a, o, v, _, w) {
        if (Ka = w, ft = a, a.memoizedState = null, a.updateQueue = null, a.lanes = 0, vr.current = r === null || r.memoizedState === null ? Ru : Mu, r = o(v, _), pi) {
          w = 0;
          do {
            if (pi = !1, !(25 > w))
              throw Error(g(301));
            w += 1, Nt = Wt = null, a.updateQueue = null, vr.current = Lu, r = o(v, _);
          } while (pi);
        }
        if (vr.current = $a, a = Wt !== null && Wt.next !== null, Ka = 0, Nt = Wt = ft = null, ea = !1, a)
          throw Error(g(300));
        return r;
      }
      function gi() {
        var r = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        return Nt === null ? ft.memoizedState = Nt = r : Nt = Nt.next = r, Nt;
      }
      function vi() {
        if (Wt === null) {
          var r = ft.alternate;
          r = r !== null ? r.memoizedState : null;
        } else
          r = Wt.next;
        var a = Nt === null ? ft.memoizedState : Nt.next;
        if (a !== null)
          Nt = a, Wt = r;
        else {
          if (r === null)
            throw Error(g(310));
          Wt = r, r = { memoizedState: Wt.memoizedState, baseState: Wt.baseState, baseQueue: Wt.baseQueue, queue: Wt.queue, next: null }, Nt === null ? ft.memoizedState = Nt = r : Nt = Nt.next = r;
        }
        return Nt;
      }
      function $n(r, a) {
        return typeof a == "function" ? a(r) : a;
      }
      function qa(r) {
        var a = vi(), o = a.queue;
        if (o === null)
          throw Error(g(311));
        o.lastRenderedReducer = r;
        var v = Wt, _ = v.baseQueue, w = o.pending;
        if (w !== null) {
          if (_ !== null) {
            var T = _.next;
            _.next = w.next, w.next = T;
          }
          v.baseQueue = _ = w, o.pending = null;
        }
        if (_ !== null) {
          _ = _.next, v = v.baseState;
          var I = T = w = null, V = _;
          do {
            var ce = V.lane;
            if ((Ka & ce) === ce)
              I !== null && (I = I.next = { lane: 0, action: V.action, eagerReducer: V.eagerReducer, eagerState: V.eagerState, next: null }), v = V.eagerReducer === r ? V.eagerState : r(v, V.action);
            else {
              var Re = {
                lane: ce,
                action: V.action,
                eagerReducer: V.eagerReducer,
                eagerState: V.eagerState,
                next: null
              };
              I === null ? (T = I = Re, w = v) : I = I.next = Re, ft.lanes |= ce, Gn |= ce;
            }
            V = V.next;
          } while (V !== null && V !== _);
          I === null ? w = v : I.next = T, dn(v, a.memoizedState) || (En = !0), a.memoizedState = v, a.baseState = w, a.baseQueue = I, o.lastRenderedState = v;
        }
        return [a.memoizedState, o.dispatch];
      }
      function Ja(r) {
        var a = vi(), o = a.queue;
        if (o === null)
          throw Error(g(311));
        o.lastRenderedReducer = r;
        var v = o.dispatch, _ = o.pending, w = a.memoizedState;
        if (_ !== null) {
          o.pending = null;
          var T = _ = _.next;
          do
            w = r(w, T.action), T = T.next;
          while (T !== _);
          dn(w, a.memoizedState) || (En = !0), a.memoizedState = w, a.baseQueue === null && (a.baseState = w), o.lastRenderedState = w;
        }
        return [w, v];
      }
      function xn(r, a, o) {
        var v = a._getVersion;
        v = v(a._source);
        var _ = Vn ? a._workInProgressVersionPrimary : a._workInProgressVersionSecondary;
        if (_ !== null ? r = _ === v : (r = r.mutableReadLanes, (r = (Ka & r) === r) && (Vn ? a._workInProgressVersionPrimary = v : a._workInProgressVersionSecondary = v, ci.push(a))), r)
          return o(a._source);
        throw ci.push(a), Error(g(350));
      }
      function ta(r, a, o, v) {
        var _ = Ct;
        if (_ === null)
          throw Error(g(349));
        var w = a._getVersion, T = w(a._source), I = vr.current, V = I.useState(function() {
          return xn(_, a, o);
        }), ce = V[1], Re = V[0];
        V = Nt;
        var ze = r.memoizedState, ye = ze.refs, tt = ye.getSnapshot, nt = ze.source;
        ze = ze.subscribe;
        var pn = ft;
        return r.memoizedState = { refs: ye, source: a, subscribe: v }, I.useEffect(function() {
          ye.getSnapshot = o, ye.setSnapshot = ce;
          var H = w(a._source);
          if (!dn(T, H)) {
            H = o(a._source), dn(Re, H) || (ce(H), H = ar(pn), _.mutableReadLanes |= H & _.pendingLanes), H = _.mutableReadLanes, _.entangledLanes |= H;
            for (var F = _.entanglements, Y = H; 0 < Y; ) {
              var ve = 31 - cr(Y), Me = 1 << ve;
              F[ve] |= H, Y &= ~Me;
            }
          }
        }, [o, a, v]), I.useEffect(function() {
          return v(a._source, function() {
            var H = ye.getSnapshot, F = ye.setSnapshot;
            try {
              F(H(a._source));
              var Y = ar(pn);
              _.mutableReadLanes |= Y & _.pendingLanes;
            } catch (ve) {
              F(function() {
                throw ve;
              });
            }
          });
        }, [a, v]), dn(tt, o) && dn(nt, a) && dn(ze, v) || (r = { pending: null, dispatch: null, lastRenderedReducer: $n, lastRenderedState: Re }, r.dispatch = ce = la.bind(null, ft, r), V.queue = r, V.baseQueue = null, Re = xn(_, a, o), V.memoizedState = V.baseState = Re), Re;
      }
      function io(r, a, o) {
        var v = vi();
        return ta(v, r, a, o);
      }
      function na(r) {
        var a = gi();
        return typeof r == "function" && (r = r()), a.memoizedState = a.baseState = r, r = a.queue = { pending: null, dispatch: null, lastRenderedReducer: $n, lastRenderedState: r }, r = r.dispatch = la.bind(null, ft, r), [a.memoizedState, r];
      }
      function Za(r, a, o, v) {
        return r = { tag: r, create: a, destroy: o, deps: v, next: null }, a = ft.updateQueue, a === null ? (a = { lastEffect: null }, ft.updateQueue = a, a.lastEffect = r.next = r) : (o = a.lastEffect, o === null ? a.lastEffect = r.next = r : (v = o.next, o.next = r, r.next = v, a.lastEffect = r)), r;
      }
      function ao(r) {
        var a = gi();
        return r = { current: r }, a.memoizedState = r;
      }
      function ra() {
        return vi().memoizedState;
      }
      function so(r, a, o, v) {
        var _ = gi();
        ft.flags |= r, _.memoizedState = Za(1 | a, o, void 0, v === void 0 ? null : v);
      }
      function lo(r, a, o, v) {
        var _ = vi();
        v = v === void 0 ? null : v;
        var w = void 0;
        if (Wt !== null) {
          var T = Wt.memoizedState;
          if (w = T.destroy, v !== null && bs(v, T.deps)) {
            Za(a, o, w, v);
            return;
          }
        }
        ft.flags |= r, _.memoizedState = Za(1 | a, o, w, v);
      }
      function mi(r, a) {
        return so(516, 4, r, a);
      }
      function ia(r, a) {
        return lo(516, 4, r, a);
      }
      function aa(r, a) {
        return lo(4, 2, r, a);
      }
      function tl(r, a) {
        if (typeof a == "function")
          return r = r(), a(r), function() {
            a(null);
          };
        if (a != null)
          return r = r(), a.current = r, function() {
            a.current = null;
          };
      }
      function oo(r, a, o) {
        return o = o != null ? o.concat([r]) : null, lo(4, 2, tl.bind(null, a, r), o);
      }
      function sa() {
      }
      function yi(r, a) {
        var o = vi();
        a = a === void 0 ? null : a;
        var v = o.memoizedState;
        return v !== null && a !== null && bs(a, v[1]) ? v[0] : (o.memoizedState = [r, a], r);
      }
      function nl(r, a) {
        var o = vi();
        a = a === void 0 ? null : a;
        var v = o.memoizedState;
        return v !== null && a !== null && bs(a, v[1]) ? v[0] : (r = r(), o.memoizedState = [r, a], r);
      }
      function Tu(r, a) {
        var o = qn();
        _n(98 > o ? 98 : o, function() {
          r(!0);
        }), _n(97 < o ? 97 : o, function() {
          var v = jt.transition;
          jt.transition = 1;
          try {
            r(!1), a();
          } finally {
            jt.transition = v;
          }
        });
      }
      function la(r, a, o) {
        var v = Vt(), _ = ar(r), w = { lane: _, action: o, eagerReducer: null, eagerState: null, next: null }, T = a.pending;
        if (T === null ? w.next = w : (w.next = T.next, T.next = w), a.pending = w, T = r.alternate, r === ft || T !== null && T === ft)
          pi = ea = !0;
        else {
          if (r.lanes === 0 && (T === null || T.lanes === 0) && (T = a.lastRenderedReducer, T !== null))
            try {
              var I = a.lastRenderedState, V = T(I, o);
              if (w.eagerReducer = T, w.eagerState = V, dn(V, I))
                return;
            } catch (ce) {
            } finally {
            }
          nn(r, _, v);
        }
      }
      var $a = { readContext: bt, useCallback: Xt, useContext: Xt, useEffect: Xt, useImperativeHandle: Xt, useLayoutEffect: Xt, useMemo: Xt, useReducer: Xt, useRef: Xt, useState: Xt, useDebugValue: Xt, useDeferredValue: Xt, useTransition: Xt, useMutableSource: Xt, useOpaqueIdentifier: Xt, unstable_isNewReconciler: !1 }, Ru = { readContext: bt, useCallback: function(r, a) {
        return gi().memoizedState = [r, a === void 0 ? null : a], r;
      }, useContext: bt, useEffect: mi, useImperativeHandle: function(r, a, o) {
        return o = o != null ? o.concat([r]) : null, so(4, 2, tl.bind(null, a, r), o);
      }, useLayoutEffect: function(r, a) {
        return so(4, 2, r, a);
      }, useMemo: function(r, a) {
        var o = gi();
        return a = a === void 0 ? null : a, r = r(), o.memoizedState = [r, a], r;
      }, useReducer: function(r, a, o) {
        var v = gi();
        return a = o !== void 0 ? o(a) : a, v.memoizedState = v.baseState = a, r = v.queue = { pending: null, dispatch: null, lastRenderedReducer: r, lastRenderedState: a }, r = r.dispatch = la.bind(null, ft, r), [v.memoizedState, r];
      }, useRef: ao, useState: na, useDebugValue: sa, useDeferredValue: function(r) {
        var a = na(r), o = a[0], v = a[1];
        return mi(function() {
          var _ = jt.transition;
          jt.transition = 1;
          try {
            v(r);
          } finally {
            jt.transition = _;
          }
        }, [r]), o;
      }, useTransition: function() {
        var r = na(!1), a = r[0];
        return r = Tu.bind(null, r[1]), ao(r), [r, a];
      }, useMutableSource: function(r, a, o) {
        var v = gi();
        return v.memoizedState = { refs: { getSnapshot: a, setSnapshot: null }, source: r, subscribe: o }, ta(v, r, a, o);
      }, useOpaqueIdentifier: function() {
        if (zn) {
          var r = !1, a = Zo(function() {
            throw r || (r = !0, o(Da())), Error(g(355));
          }), o = na(a)[1];
          return !(ft.mode & 2) && (ft.flags |= 516, Za(5, function() {
            o(Da());
          }, void 0, null)), a;
        }
        return a = Da(), na(a), a;
      }, unstable_isNewReconciler: !1 }, Mu = {
        readContext: bt,
        useCallback: yi,
        useContext: bt,
        useEffect: ia,
        useImperativeHandle: oo,
        useLayoutEffect: aa,
        useMemo: nl,
        useReducer: qa,
        useRef: ra,
        useState: function() {
          return qa($n);
        },
        useDebugValue: sa,
        useDeferredValue: function(r) {
          var a = qa($n), o = a[0], v = a[1];
          return ia(function() {
            var _ = jt.transition;
            jt.transition = 1;
            try {
              v(r);
            } finally {
              jt.transition = _;
            }
          }, [r]), o;
        },
        useTransition: function() {
          var r = qa($n)[0];
          return [ra().current, r];
        },
        useMutableSource: io,
        useOpaqueIdentifier: function() {
          return qa($n)[0];
        },
        unstable_isNewReconciler: !1
      }, Lu = {
        readContext: bt,
        useCallback: yi,
        useContext: bt,
        useEffect: ia,
        useImperativeHandle: oo,
        useLayoutEffect: aa,
        useMemo: nl,
        useReducer: Ja,
        useRef: ra,
        useState: function() {
          return Ja($n);
        },
        useDebugValue: sa,
        useDeferredValue: function(r) {
          var a = Ja($n), o = a[0], v = a[1];
          return ia(function() {
            var _ = jt.transition;
            jt.transition = 1;
            try {
              v(r);
            } finally {
              jt.transition = _;
            }
          }, [r]), o;
        },
        useTransition: function() {
          var r = Ja($n)[0];
          return [ra().current, r];
        },
        useMutableSource: io,
        useOpaqueIdentifier: function() {
          return Ja($n)[0];
        },
        unstable_isNewReconciler: !1
      }, Nu = y.ReactCurrentOwner, En = !1;
      function yt(r, a, o, v) {
        a.child = r === null ? xu(a, null, o, v) : qs(a, r.child, o, v);
      }
      function rl(r, a, o, v, _) {
        o = o.render;
        var w = a.ref;
        return Dr(a, _), v = el(r, a, o, v, w, _), r !== null && !En ? (a.updateQueue = r.updateQueue, a.flags &= -517, r.lanes &= ~_, bn(r, a, _)) : (a.flags |= 1, yt(r, a, v, _), a.child);
      }
      function il(r, a, o, v, _, w) {
        if (r === null) {
          var T = o.type;
          return typeof T == "function" && !ds(T) && T.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (a.tag = 15, a.type = T, Au(r, a, T, v, _, w)) : (r = ur(o.type, null, v, a, a.mode, w), r.ref = a.ref, r.return = a, a.child = r);
        }
        return T = r.child, !(_ & w) && (_ = T.memoizedProps, o = o.compare, o = o !== null ? o : Ki, o(_, v) && r.ref === a.ref) ? bn(r, a, w) : (a.flags |= 1, r = or(T, v), r.ref = a.ref, r.return = a, a.child = r);
      }
      function Au(r, a, o, v, _, w) {
        if (r !== null && Ki(r.memoizedProps, v) && r.ref === a.ref)
          if (En = !1, (w & _) !== 0)
            r.flags & 16384 && (En = !0);
          else
            return a.lanes = r.lanes, bn(r, a, w);
        return fo(r, a, o, v, w);
      }
      function uo(r, a, o) {
        var v = a.pendingProps, _ = v.children, w = r !== null ? r.memoizedState : null;
        if (v.mode === "hidden" || v.mode === "unstable-defer-without-hiding")
          if (!(a.mode & 4))
            a.memoizedState = { baseLanes: 0 }, Ln(a, o);
          else if (o & 1073741824)
            a.memoizedState = { baseLanes: 0 }, Ln(a, w !== null ? w.baseLanes : o);
          else
            return r = w !== null ? w.baseLanes | o : o, a.lanes = a.childLanes = 1073741824, a.memoizedState = { baseLanes: r }, Ln(a, r), null;
        else
          w !== null ? (v = w.baseLanes | o, a.memoizedState = null) : v = o, Ln(a, v);
        return yt(r, a, _, o), a.child;
      }
      function oa(r, a) {
        var o = a.ref;
        (r === null && o !== null || r !== null && r.ref !== o) && (a.flags |= 128);
      }
      function fo(r, a, o, v, _) {
        var w = Ft(o) ? ni : zt.current;
        return w = ri(a, w), Dr(a, _), o = el(r, a, o, v, w, _), r !== null && !En ? (a.updateQueue = r.updateQueue, a.flags &= -517, r.lanes &= ~_, bn(r, a, _)) : (a.flags |= 1, yt(r, a, o, _), a.child);
      }
      function ho(r, a, o, v, _) {
        if (Ft(o)) {
          var w = !0;
          Ds(a);
        } else
          w = !1;
        if (Dr(a, _), a.stateNode === null)
          r !== null && (r.alternate = null, a.alternate = null, a.flags |= 2), $l(a, o, v), bl(a, o, v, _), v = !0;
        else if (r === null) {
          var T = a.stateNode, I = a.memoizedProps;
          T.props = I;
          var V = T.context, ce = o.contextType;
          typeof ce == "object" && ce !== null ? ce = bt(ce) : (ce = Ft(o) ? ni : zt.current, ce = ri(a, ce));
          var Re = o.getDerivedStateFromProps, ze = typeof Re == "function" || typeof T.getSnapshotBeforeUpdate == "function";
          ze || typeof T.UNSAFE_componentWillReceiveProps != "function" && typeof T.componentWillReceiveProps != "function" || (I !== v || V !== ce) && Cu(a, T, v, ce), Cn = !1;
          var ye = a.memoizedState;
          T.state = ye, hi(a, v, T, _), V = a.memoizedState, I !== v || ye !== V || Dt.current || Cn ? (typeof Re == "function" && (Qs(a, o, Re, v), V = a.memoizedState), (I = Cn || wu(a, o, I, v, ye, V, ce)) ? (ze || typeof T.UNSAFE_componentWillMount != "function" && typeof T.componentWillMount != "function" || (typeof T.componentWillMount == "function" && T.componentWillMount(), typeof T.UNSAFE_componentWillMount == "function" && T.UNSAFE_componentWillMount()), typeof T.componentDidMount == "function" && (a.flags |= 4)) : (typeof T.componentDidMount == "function" && (a.flags |= 4), a.memoizedProps = v, a.memoizedState = V), T.props = v, T.state = V, T.context = ce, v = I) : (typeof T.componentDidMount == "function" && (a.flags |= 4), v = !1);
        } else {
          T = a.stateNode, Zl(r, a), I = a.memoizedProps, ce = a.type === a.elementType ? I : wn(a.type, I), T.props = ce, ze = a.pendingProps, ye = T.context, V = o.contextType, typeof V == "object" && V !== null ? V = bt(V) : (V = Ft(o) ? ni : zt.current, V = ri(a, V));
          var tt = o.getDerivedStateFromProps;
          (Re = typeof tt == "function" || typeof T.getSnapshotBeforeUpdate == "function") || typeof T.UNSAFE_componentWillReceiveProps != "function" && typeof T.componentWillReceiveProps != "function" || (I !== ze || ye !== V) && Cu(a, T, v, V), Cn = !1, ye = a.memoizedState, T.state = ye, hi(a, v, T, _);
          var nt = a.memoizedState;
          I !== ze || ye !== nt || Dt.current || Cn ? (typeof tt == "function" && (Qs(a, o, tt, v), nt = a.memoizedState), (ce = Cn || wu(a, o, ce, v, ye, nt, V)) ? (Re || typeof T.UNSAFE_componentWillUpdate != "function" && typeof T.componentWillUpdate != "function" || (typeof T.componentWillUpdate == "function" && T.componentWillUpdate(v, nt, V), typeof T.UNSAFE_componentWillUpdate == "function" && T.UNSAFE_componentWillUpdate(v, nt, V)), typeof T.componentDidUpdate == "function" && (a.flags |= 4), typeof T.getSnapshotBeforeUpdate == "function" && (a.flags |= 256)) : (typeof T.componentDidUpdate != "function" || I === r.memoizedProps && ye === r.memoizedState || (a.flags |= 4), typeof T.getSnapshotBeforeUpdate != "function" || I === r.memoizedProps && ye === r.memoizedState || (a.flags |= 256), a.memoizedProps = v, a.memoizedState = nt), T.props = v, T.state = nt, T.context = V, v = ce) : (typeof T.componentDidUpdate != "function" || I === r.memoizedProps && ye === r.memoizedState || (a.flags |= 4), typeof T.getSnapshotBeforeUpdate != "function" || I === r.memoizedProps && ye === r.memoizedState || (a.flags |= 256), v = !1);
        }
        return al(r, a, o, v, w, _);
      }
      function al(r, a, o, v, _, w) {
        oa(r, a);
        var T = (a.flags & 64) !== 0;
        if (!v && !T)
          return _ && du(a, o, !1), bn(r, a, w);
        v = a.stateNode, Nu.current = a;
        var I = T && typeof o.getDerivedStateFromError != "function" ? null : v.render();
        return a.flags |= 1, r !== null && T ? (a.child = qs(a, r.child, null, w), a.child = qs(a, null, I, w)) : yt(r, a, I, w), a.memoizedState = v.state, _ && du(a, o, !0), a.child;
      }
      function st(r) {
        var a = r.stateNode;
        a.pendingContext ? fu(r, a.pendingContext, a.pendingContext !== a.context) : a.context && fu(r, a.context, !1), eo(r, a.containerInfo);
      }
      var ua = { dehydrated: null, retryLane: 0 };
      function ba(r, a, o) {
        var v = a.pendingProps, _ = at.current, w = !1, T;
        return (T = (a.flags & 64) !== 0) || (T = r !== null && r.memoizedState === null ? !1 : (_ & 2) !== 0), T ? (w = !0, a.flags &= -65) : r !== null && r.memoizedState === null || v.fallback === void 0 || v.unstable_avoidThisFallback === !0 || (_ |= 1), pt(at, _ & 1), r === null ? (v.fallback !== void 0 && Ur(a), r = v.children, _ = v.fallback, w ? (r = fa(a, r, _, o), a.child.memoizedState = { baseLanes: o }, a.memoizedState = ua, r) : typeof v.unstable_expectedLoadTime == "number" ? (r = fa(a, r, _, o), a.child.memoizedState = { baseLanes: o }, a.memoizedState = ua, a.lanes = 33554432, r) : (o = _t({ mode: "visible", children: r }, a.mode, o, null), o.return = a, a.child = o)) : r.memoizedState !== null ? w ? (v = sl(r, a, v.children, v.fallback, o), w = a.child, _ = r.child.memoizedState, w.memoizedState = _ === null ? { baseLanes: o } : { baseLanes: _.baseLanes | o }, w.childLanes = r.childLanes & ~o, a.memoizedState = ua, v) : (o = co(r, a, v.children, o), a.memoizedState = null, o) : w ? (v = sl(r, a, v.children, v.fallback, o), w = a.child, _ = r.child.memoizedState, w.memoizedState = _ === null ? { baseLanes: o } : { baseLanes: _.baseLanes | o }, w.childLanes = r.childLanes & ~o, a.memoizedState = ua, v) : (o = co(r, a, v.children, o), a.memoizedState = null, o);
      }
      function fa(r, a, o, v) {
        var _ = r.mode, w = r.child;
        return a = { mode: "hidden", children: a }, !(_ & 2) && w !== null ? (w.childLanes = 0, w.pendingProps = a) : w = _t(a, _, 0, null), o = et(o, _, v, null), w.return = r, o.return = r, w.sibling = o, r.child = w, o;
      }
      function co(r, a, o, v) {
        var _ = r.child;
        return r = _.sibling, o = or(_, { mode: "visible", children: o }), !(a.mode & 2) && (o.lanes = v), o.return = a, o.sibling = null, r !== null && (r.nextEffect = null, r.flags = 8, a.firstEffect = a.lastEffect = r), a.child = o;
      }
      function sl(r, a, o, v, _) {
        var w = a.mode, T = r.child;
        r = T.sibling;
        var I = { mode: "hidden", children: o };
        return !(w & 2) && a.child !== T ? (o = a.child, o.childLanes = 0, o.pendingProps = I, T = o.lastEffect, T !== null ? (a.firstEffect = o.firstEffect, a.lastEffect = T, T.nextEffect = null) : a.firstEffect = a.lastEffect = null) : o = or(T, I), r !== null ? v = or(r, v) : (v = et(v, w, _, null), v.flags |= 2), v.return = a, o.return = a, o.sibling = v, a.child = o, v;
      }
      function da(r, a) {
        r.lanes |= a;
        var o = r.alternate;
        o !== null && (o.lanes |= a), mu(r.return, a);
      }
      function ha(r, a, o, v, _, w) {
        var T = r.memoizedState;
        T === null ? r.memoizedState = { isBackwards: a, rendering: null, renderingStartTime: 0, last: v, tail: o, tailMode: _, lastEffect: w } : (T.isBackwards = a, T.rendering = null, T.renderingStartTime = 0, T.last = v, T.tail = o, T.tailMode = _, T.lastEffect = w);
      }
      function _i(r, a, o) {
        var v = a.pendingProps, _ = v.revealOrder, w = v.tail;
        if (yt(r, a, v.children, o), v = at.current, v & 2)
          v = v & 1 | 2, a.flags |= 64;
        else {
          if (r !== null && r.flags & 64)
            e:
              for (r = a.child; r !== null; ) {
                if (r.tag === 13)
                  r.memoizedState !== null && da(r, o);
                else if (r.tag === 19)
                  da(r, o);
                else if (r.child !== null) {
                  r.child.return = r, r = r.child;
                  continue;
                }
                if (r === a)
                  break e;
                for (; r.sibling === null; ) {
                  if (r.return === null || r.return === a)
                    break e;
                  r = r.return;
                }
                r.sibling.return = r.return, r = r.sibling;
              }
          v &= 1;
        }
        if (pt(at, v), !(a.mode & 2))
          a.memoizedState = null;
        else
          switch (_) {
            case "forwards":
              for (o = a.child, _ = null; o !== null; )
                r = o.alternate, r !== null && Js(r) === null && (_ = o), o = o.sibling;
              o = _, o === null ? (_ = a.child, a.child = null) : (_ = o.sibling, o.sibling = null), ha(a, !1, _, o, w, a.lastEffect);
              break;
            case "backwards":
              for (o = null, _ = a.child, a.child = null; _ !== null; ) {
                if (r = _.alternate, r !== null && Js(r) === null) {
                  a.child = _;
                  break;
                }
                r = _.sibling, _.sibling = o, o = _, _ = r;
              }
              ha(a, !0, o, null, w, a.lastEffect);
              break;
            case "together":
              ha(a, !1, null, null, void 0, a.lastEffect);
              break;
            default:
              a.memoizedState = null;
          }
        return a.child;
      }
      function bn(r, a, o) {
        if (r !== null && (a.dependencies = r.dependencies), Gn |= a.lanes, o & a.childLanes) {
          if (r !== null && a.child !== r.child)
            throw Error(g(153));
          if (a.child !== null) {
            for (r = a.child, o = or(r, r.pendingProps), a.child = o, o.return = a; r.sibling !== null; )
              r = r.sibling, o = o.sibling = or(r, r.pendingProps), o.return = a;
            o.sibling = null;
          }
          return a.child;
        }
        return null;
      }
      function er(r) {
        r.flags |= 4;
      }
      var es, ca, Si, wi;
      if (un)
        es = function(r, a) {
          for (var o = a.child; o !== null; ) {
            if (o.tag === 5 || o.tag === 6)
              Fe(r, o.stateNode);
            else if (o.tag !== 4 && o.child !== null) {
              o.child.return = o, o = o.child;
              continue;
            }
            if (o === a)
              break;
            for (; o.sibling === null; ) {
              if (o.return === null || o.return === a)
                return;
              o = o.return;
            }
            o.sibling.return = o.return, o = o.sibling;
          }
        }, ca = function() {
        }, Si = function(r, a, o, v, _) {
          if (r = r.memoizedProps, r !== v) {
            var w = a.stateNode, T = Jn(kn.current);
            o = We(w, o, r, v, _, T), (a.updateQueue = o) && er(a);
          }
        }, wi = function(r, a, o, v) {
          o !== v && er(a);
        };
      else if (zi) {
        es = function(r, a, o, v) {
          for (var _ = a.child; _ !== null; ) {
            if (_.tag === 5) {
              var w = _.stateNode;
              o && v && (w = Ns(w, _.type, _.memoizedProps, _)), Fe(r, w);
            } else if (_.tag === 6)
              w = _.stateNode, o && v && (w = ji(w, _.memoizedProps, _)), Fe(r, w);
            else if (_.tag !== 4) {
              if (_.tag === 13 && _.flags & 4 && (w = _.memoizedState !== null)) {
                var T = _.child;
                if (T !== null && (T.child !== null && (T.child.return = T, es(r, T, !0, w)), w = T.sibling, w !== null)) {
                  w.return = _, _ = w;
                  continue;
                }
              }
              if (_.child !== null) {
                _.child.return = _, _ = _.child;
                continue;
              }
            }
            if (_ === a)
              break;
            for (; _.sibling === null; ) {
              if (_.return === null || _.return === a)
                return;
              _ = _.return;
            }
            _.sibling.return = _.return, _ = _.sibling;
          }
        };
        var ll = function(r, a, o, v) {
          for (var _ = a.child; _ !== null; ) {
            if (_.tag === 5) {
              var w = _.stateNode;
              o && v && (w = Ns(w, _.type, _.memoizedProps, _)), Ls(r, w);
            } else if (_.tag === 6)
              w = _.stateNode, o && v && (w = ji(w, _.memoizedProps, _)), Ls(r, w);
            else if (_.tag !== 4) {
              if (_.tag === 13 && _.flags & 4 && (w = _.memoizedState !== null)) {
                var T = _.child;
                if (T !== null && (T.child !== null && (T.child.return = T, ll(r, T, !0, w)), w = T.sibling, w !== null)) {
                  w.return = _, _ = w;
                  continue;
                }
              }
              if (_.child !== null) {
                _.child.return = _, _ = _.child;
                continue;
              }
            }
            if (_ === a)
              break;
            for (; _.sibling === null; ) {
              if (_.return === null || _.return === a)
                return;
              _ = _.return;
            }
            _.sibling.return = _.return, _ = _.sibling;
          }
        };
        ca = function(r) {
          var a = r.stateNode;
          if (r.firstEffect !== null) {
            var o = a.containerInfo, v = Wl(o);
            ll(v, r, !1, !1), a.pendingChildren = v, er(r), lu(o, v);
          }
        }, Si = function(r, a, o, v, _) {
          var w = r.stateNode, T = r.memoizedProps;
          if ((r = a.firstEffect === null) && T === v)
            a.stateNode = w;
          else {
            var I = a.stateNode, V = Jn(kn.current), ce = null;
            T !== v && (ce = We(I, o, T, v, _, V)), r && ce === null ? a.stateNode = w : (w = su(
              w,
              ce,
              o,
              T,
              v,
              a,
              r,
              I
            ), He(w, o, v, _, V) && er(a), a.stateNode = w, r ? er(a) : es(w, a, !1, !1));
          }
        }, wi = function(r, a, o, v) {
          o !== v ? (r = Jn($i.current), o = Jn(kn.current), a.stateNode = ct(v, r, o, a), er(a)) : a.stateNode = r.stateNode;
        };
      } else
        ca = function() {
        }, Si = function() {
        }, wi = function() {
        };
      function Ci(r, a) {
        if (!zn)
          switch (r.tailMode) {
            case "hidden":
              a = r.tail;
              for (var o = null; a !== null; )
                a.alternate !== null && (o = a), a = a.sibling;
              o === null ? r.tail = null : o.sibling = null;
              break;
            case "collapsed":
              o = r.tail;
              for (var v = null; o !== null; )
                o.alternate !== null && (v = o), o = o.sibling;
              v === null ? a || r.tail === null ? r.tail = null : r.tail.sibling = null : v.sibling = null;
          }
      }
      function po(r, a, o) {
        var v = a.pendingProps;
        switch (a.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return null;
          case 1:
            return Ft(a.type) && fn(), null;
          case 3:
            return bi(), Be(Dt), Be(zt), $s(), v = a.stateNode, v.pendingContext && (v.context = v.pendingContext, v.pendingContext = null), (r === null || r.child === null) && (Zs(a) ? er(a) : v.hydrate || (a.flags |= 256)), ca(a), null;
          case 5:
            Xa(a);
            var _ = Jn($i.current);
            if (o = a.type, r !== null && a.stateNode != null)
              Si(r, a, o, v, _), r.ref !== a.ref && (a.flags |= 128);
            else {
              if (!v) {
                if (a.stateNode === null)
                  throw Error(g(166));
                return null;
              }
              if (r = Jn(kn.current), Zs(a)) {
                if (!mn)
                  throw Error(g(175));
                r = If(a.stateNode, a.type, a.memoizedProps, _, r, a), a.updateQueue = r, r !== null && er(a);
              } else {
                var w = _e(o, v, _, r, a);
                es(w, a, !1, !1), a.stateNode = w, He(w, o, v, _, r) && er(a);
              }
              a.ref !== null && (a.flags |= 128);
            }
            return null;
          case 6:
            if (r && a.stateNode != null)
              wi(r, a, r.memoizedProps, v);
            else {
              if (typeof v != "string" && a.stateNode === null)
                throw Error(g(166));
              if (r = Jn($i.current), _ = Jn(kn.current), Zs(a)) {
                if (!mn)
                  throw Error(g(176));
                zf(
                  a.stateNode,
                  a.memoizedProps,
                  a
                ) && er(a);
              } else
                a.stateNode = ct(v, r, _, a);
            }
            return null;
          case 13:
            return Be(at), v = a.memoizedState, a.flags & 64 ? (a.lanes = o, a) : (v = v !== null, _ = !1, r === null ? a.memoizedProps.fallback !== void 0 && Zs(a) : _ = r.memoizedState !== null, v && !_ && a.mode & 2 && (r === null && a.memoizedProps.unstable_avoidThisFallback !== !0 || at.current & 1 ? ht === 0 && (ht = 3) : ((ht === 0 || ht === 3) && (ht = 4), Ct === null || !(Gn & 134217727) && !(ki & 134217727) || Ti(Ct, Pt))), zi && v && (a.flags |= 4), un && (v || _) && (a.flags |= 4), null);
          case 4:
            return bi(), ca(a), r === null && Gl(a.stateNode.containerInfo), null;
          case 10:
            return di(a), null;
          case 17:
            return Ft(a.type) && fn(), null;
          case 19:
            if (Be(at), v = a.memoizedState, v === null)
              return null;
            if (_ = (a.flags & 64) !== 0, w = v.rendering, w === null)
              if (_)
                Ci(v, !1);
              else {
                if (ht !== 0 || r !== null && r.flags & 64)
                  for (r = a.child; r !== null; ) {
                    if (w = Js(r), w !== null) {
                      for (a.flags |= 64, Ci(v, !1), r = w.updateQueue, r !== null && (a.updateQueue = r, a.flags |= 4), v.lastEffect === null && (a.firstEffect = null), a.lastEffect = v.lastEffect, r = o, v = a.child; v !== null; )
                        _ = v, o = r, _.flags &= 2, _.nextEffect = null, _.firstEffect = null, _.lastEffect = null, w = _.alternate, w === null ? (_.childLanes = 0, _.lanes = o, _.child = null, _.memoizedProps = null, _.memoizedState = null, _.updateQueue = null, _.dependencies = null, _.stateNode = null) : (_.childLanes = w.childLanes, _.lanes = w.lanes, _.child = w.child, _.memoizedProps = w.memoizedProps, _.memoizedState = w.memoizedState, _.updateQueue = w.updateQueue, _.type = w.type, o = w.dependencies, _.dependencies = o === null ? null : { lanes: o.lanes, firstContext: o.firstContext }), v = v.sibling;
                      return pt(at, at.current & 1 | 2), a.child;
                    }
                    r = r.sibling;
                  }
                v.tail !== null && mt() > qt && (a.flags |= 64, _ = !0, Ci(v, !1), a.lanes = 33554432);
              }
            else {
              if (!_)
                if (r = Js(w), r !== null) {
                  if (a.flags |= 64, _ = !0, r = r.updateQueue, r !== null && (a.updateQueue = r, a.flags |= 4), Ci(v, !0), v.tail === null && v.tailMode === "hidden" && !w.alternate && !zn)
                    return a = a.lastEffect = v.lastEffect, a !== null && (a.nextEffect = null), null;
                } else
                  2 * mt() - v.renderingStartTime > qt && o !== 1073741824 && (a.flags |= 64, _ = !0, Ci(v, !1), a.lanes = 33554432);
              v.isBackwards ? (w.sibling = a.child, a.child = w) : (r = v.last, r !== null ? r.sibling = w : a.child = w, v.last = w);
            }
            return v.tail !== null ? (r = v.tail, v.rendering = r, v.tail = r.sibling, v.lastEffect = a.lastEffect, v.renderingStartTime = mt(), r.sibling = null, a = at.current, pt(at, _ ? a & 1 | 2 : a & 1), r) : null;
          case 23:
          case 24:
            return sr(), r !== null && r.memoizedState !== null != (a.memoizedState !== null) && v.mode !== "unstable-defer-without-hiding" && (a.flags |= 4), null;
        }
        throw Error(g(156, a.tag));
      }
      function go(r) {
        switch (r.tag) {
          case 1:
            Ft(r.type) && fn();
            var a = r.flags;
            return a & 4096 ? (r.flags = a & -4097 | 64, r) : null;
          case 3:
            if (bi(), Be(Dt), Be(zt), $s(), a = r.flags, a & 64)
              throw Error(g(285));
            return r.flags = a & -4097 | 64, r;
          case 5:
            return Xa(r), null;
          case 13:
            return Be(at), a = r.flags, a & 4096 ? (r.flags = a & -4097 | 64, r) : null;
          case 19:
            return Be(at), null;
          case 4:
            return bi(), null;
          case 10:
            return di(r), null;
          case 23:
          case 24:
            return sr(), null;
          default:
            return null;
        }
      }
      function vo(r, a) {
        try {
          var o = "", v = a;
          do
            o += Vs(v), v = v.return;
          while (v);
          var _ = o;
        } catch (w) {
          _ = `
Error generating stack: ` + w.message + `
` + w.stack;
        }
        return { value: r, source: a, stack: _ };
      }
      function ol(r, a) {
        try {
          console.error(a.value);
        } catch (o) {
          setTimeout(function() {
            throw o;
          });
        }
      }
      var Gf = typeof WeakMap == "function" ? WeakMap : Map;
      function Ou(r, a, o) {
        o = Fr(-1, o), o.tag = 3, o.payload = { element: null };
        var v = a.value;
        return o.callback = function() {
          ss || (ss = !0, vl = v), ol(r, a);
        }, o;
      }
      function ul(r, a, o) {
        o = Fr(-1, o), o.tag = 3;
        var v = r.type.getDerivedStateFromError;
        if (typeof v == "function") {
          var _ = a.value;
          o.payload = function() {
            return ol(r, a), v(_);
          };
        }
        var w = r.stateNode;
        return w !== null && typeof w.componentDidCatch == "function" && (o.callback = function() {
          typeof v != "function" && (Rn === null ? Rn = /* @__PURE__ */ new Set([this]) : Rn.add(this), ol(r, a));
          var T = a.stack;
          this.componentDidCatch(a.value, { componentStack: T !== null ? T : "" });
        }), o;
      }
      var Hr = typeof WeakSet == "function" ? WeakSet : Set;
      function mo(r) {
        var a = r.ref;
        if (a !== null)
          if (typeof a == "function")
            try {
              a(null);
            } catch (o) {
              wr(r, o);
            }
          else
            a.current = null;
      }
      function pa(r, a) {
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            return;
          case 1:
            if (a.flags & 256 && r !== null) {
              var o = r.memoizedProps, v = r.memoizedState;
              r = a.stateNode, a = r.getSnapshotBeforeUpdate(a.elementType === a.type ? o : wn(a.type, o), v), r.__reactInternalSnapshotBeforeUpdate = a;
            }
            return;
          case 3:
            un && a.flags & 256 && Ms(a.stateNode.containerInfo);
            return;
          case 5:
          case 6:
          case 4:
          case 17:
            return;
        }
        throw Error(g(163));
      }
      function Dn(r, a) {
        if (a = a.updateQueue, a = a !== null ? a.lastEffect : null, a !== null) {
          var o = a = a.next;
          do {
            if ((o.tag & r) === r) {
              var v = o.destroy;
              o.destroy = void 0, v !== void 0 && v();
            }
            o = o.next;
          } while (o !== a);
        }
      }
      function ts(r, a, o) {
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            if (a = o.updateQueue, a = a !== null ? a.lastEffect : null, a !== null) {
              r = a = a.next;
              do {
                if ((r.tag & 3) === 3) {
                  var v = r.create;
                  r.destroy = v();
                }
                r = r.next;
              } while (r !== a);
            }
            if (a = o.updateQueue, a = a !== null ? a.lastEffect : null, a !== null) {
              r = a = a.next;
              do {
                var _ = r;
                v = _.next, _ = _.tag, _ & 4 && _ & 1 && (Eo(o, r), Sl(o, r)), r = v;
              } while (r !== a);
            }
            return;
          case 1:
            r = o.stateNode, o.flags & 4 && (a === null ? r.componentDidMount() : (v = o.elementType === o.type ? a.memoizedProps : wn(o.type, a.memoizedProps), r.componentDidUpdate(
              v,
              a.memoizedState,
              r.__reactInternalSnapshotBeforeUpdate
            ))), a = o.updateQueue, a !== null && _u(o, a, r);
            return;
          case 3:
            if (a = o.updateQueue, a !== null) {
              if (r = null, o.child !== null)
                switch (o.child.tag) {
                  case 5:
                    r = we(o.child.stateNode);
                    break;
                  case 1:
                    r = o.child.stateNode;
                }
              _u(o, a, r);
            }
            return;
          case 5:
            r = o.stateNode, a === null && o.flags & 4 && ru(r, o.type, o.memoizedProps, o);
            return;
          case 6:
            return;
          case 4:
            return;
          case 12:
            return;
          case 13:
            mn && o.memoizedState === null && (o = o.alternate, o !== null && (o = o.memoizedState, o !== null && (o = o.dehydrated, o !== null && uu(o))));
            return;
          case 19:
          case 17:
          case 20:
          case 21:
          case 23:
          case 24:
            return;
        }
        throw Error(g(163));
      }
      function tr(r, a) {
        if (un)
          for (var o = r; ; ) {
            if (o.tag === 5) {
              var v = o.stateNode;
              a ? Bi(v) : iu(o.stateNode, o.memoizedProps);
            } else if (o.tag === 6)
              v = o.stateNode, a ? Ui(v) : au(v, o.memoizedProps);
            else if ((o.tag !== 23 && o.tag !== 24 || o.memoizedState === null || o === r) && o.child !== null) {
              o.child.return = o, o = o.child;
              continue;
            }
            if (o === r)
              break;
            for (; o.sibling === null; ) {
              if (o.return === null || o.return === r)
                return;
              o = o.return;
            }
            o.sibling.return = o.return, o = o.sibling;
          }
      }
      function fl(r, a) {
        if (Qn && typeof Qn.onCommitFiberUnmount == "function")
          try {
            Qn.onCommitFiberUnmount(Ql, a);
          } catch (w) {
          }
        switch (a.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            if (r = a.updateQueue, r !== null && (r = r.lastEffect, r !== null)) {
              var o = r = r.next;
              do {
                var v = o, _ = v.destroy;
                if (v = v.tag, _ !== void 0)
                  if (v & 4)
                    Eo(a, o);
                  else {
                    v = a;
                    try {
                      _();
                    } catch (w) {
                      wr(v, w);
                    }
                  }
                o = o.next;
              } while (o !== r);
            }
            break;
          case 1:
            if (mo(a), r = a.stateNode, typeof r.componentWillUnmount == "function")
              try {
                r.props = a.memoizedProps, r.state = a.memoizedState, r.componentWillUnmount();
              } catch (w) {
                wr(
                  a,
                  w
                );
              }
            break;
          case 5:
            mo(a);
            break;
          case 4:
            un ? dl(r, a) : zi && zi && (a = a.stateNode.containerInfo, r = Wl(a), Hi(a, r));
        }
      }
      function Iu(r, a) {
        for (var o = a; ; )
          if (fl(r, o), o.child === null || un && o.tag === 4) {
            if (o === a)
              break;
            for (; o.sibling === null; ) {
              if (o.return === null || o.return === a)
                return;
              o = o.return;
            }
            o.sibling.return = o.return, o = o.sibling;
          } else
            o.child.return = o, o = o.child;
      }
      function zu(r) {
        r.alternate = null, r.child = null, r.dependencies = null, r.firstEffect = null, r.lastEffect = null, r.memoizedProps = null, r.memoizedState = null, r.pendingProps = null, r.return = null, r.updateQueue = null;
      }
      function jr(r) {
        return r.tag === 5 || r.tag === 3 || r.tag === 4;
      }
      function ga(r) {
        if (un) {
          e: {
            for (var a = r.return; a !== null; ) {
              if (jr(a))
                break e;
              a = a.return;
            }
            throw Error(g(160));
          }
          var o = a;
          switch (a = o.stateNode, o.tag) {
            case 5:
              var v = !1;
              break;
            case 3:
              a = a.containerInfo, v = !0;
              break;
            case 4:
              a = a.containerInfo, v = !0;
              break;
            default:
              throw Error(g(161));
          }
          o.flags & 16 && (Rs(a), o.flags &= -17);
          e:
            t:
              for (o = r; ; ) {
                for (; o.sibling === null; ) {
                  if (o.return === null || jr(o.return)) {
                    o = null;
                    break e;
                  }
                  o = o.return;
                }
                for (o.sibling.return = o.return, o = o.sibling; o.tag !== 5 && o.tag !== 6 && o.tag !== 18; ) {
                  if (o.flags & 2 || o.child === null || o.tag === 4)
                    continue t;
                  o.child.return = o, o = o.child;
                }
                if (!(o.flags & 2)) {
                  o = o.stateNode;
                  break e;
                }
              }
          v ? Wr(r, o, a) : va(r, o, a);
        }
      }
      function Wr(r, a, o) {
        var v = r.tag, _ = v === 5 || v === 6;
        if (_)
          r = _ ? r.stateNode : r.stateNode.instance, a ? Ul(o, r, a) : Nf(o, r);
        else if (v !== 4 && (r = r.child, r !== null))
          for (Wr(r, a, o), r = r.sibling; r !== null; )
            Wr(r, a, o), r = r.sibling;
      }
      function va(r, a, o) {
        var v = r.tag, _ = v === 5 || v === 6;
        if (_)
          r = _ ? r.stateNode : r.stateNode.instance, a ? Bl(o, r, a) : Ga(o, r);
        else if (v !== 4 && (r = r.child, r !== null))
          for (va(r, a, o), r = r.sibling; r !== null; )
            va(r, a, o), r = r.sibling;
      }
      function dl(r, a) {
        for (var o = a, v = !1, _, w; ; ) {
          if (!v) {
            v = o.return;
            e:
              for (; ; ) {
                if (v === null)
                  throw Error(g(160));
                switch (_ = v.stateNode, v.tag) {
                  case 5:
                    w = !1;
                    break e;
                  case 3:
                    _ = _.containerInfo, w = !0;
                    break e;
                  case 4:
                    _ = _.containerInfo, w = !0;
                    break e;
                }
                v = v.return;
              }
            v = !0;
          }
          if (o.tag === 5 || o.tag === 6)
            Iu(r, o), w ? jl(_, o.stateNode) : Hl(_, o.stateNode);
          else if (o.tag === 4) {
            if (o.child !== null) {
              _ = o.stateNode.containerInfo, w = !0, o.child.return = o, o = o.child;
              continue;
            }
          } else if (fl(r, o), o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
          if (o === a)
            break;
          for (; o.sibling === null; ) {
            if (o.return === null || o.return === a)
              return;
            o = o.return, o.tag === 4 && (v = !1);
          }
          o.sibling.return = o.return, o = o.sibling;
        }
      }
      function Vr(r, a) {
        if (un) {
          switch (a.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              Dn(3, a);
              return;
            case 1:
              return;
            case 5:
              var o = a.stateNode;
              if (o != null) {
                var v = a.memoizedProps;
                r = r !== null ? r.memoizedProps : v;
                var _ = a.type, w = a.updateQueue;
                a.updateQueue = null, w !== null && Af(o, w, _, r, v, a);
              }
              return;
            case 6:
              if (a.stateNode === null)
                throw Error(g(162));
              o = a.memoizedProps, nu(a.stateNode, r !== null ? r.memoizedProps : o, o);
              return;
            case 3:
              mn && (a = a.stateNode, a.hydrate && (a.hydrate = !1, Vl(a.containerInfo)));
              return;
            case 12:
              return;
            case 13:
              mr(a), be(a);
              return;
            case 19:
              be(a);
              return;
            case 17:
              return;
            case 23:
            case 24:
              tr(a, a.memoizedState !== null);
              return;
          }
          throw Error(g(163));
        }
        switch (a.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            Dn(3, a);
            return;
          case 12:
            return;
          case 13:
            mr(a), be(a);
            return;
          case 19:
            be(a);
            return;
          case 3:
            mn && (o = a.stateNode, o.hydrate && (o.hydrate = !1, Vl(o.containerInfo)));
            break;
          case 23:
          case 24:
            return;
        }
        e:
          if (zi) {
            switch (a.tag) {
              case 1:
              case 5:
              case 6:
              case 20:
                break e;
              case 3:
              case 4:
                a = a.stateNode, Hi(a.containerInfo, a.pendingChildren);
                break e;
            }
            throw Error(g(163));
          }
      }
      function mr(r) {
        r.memoizedState !== null && (Kt = mt(), un && tr(r.child, !0));
      }
      function be(r) {
        var a = r.updateQueue;
        if (a !== null) {
          r.updateQueue = null;
          var o = r.stateNode;
          o === null && (o = r.stateNode = new Hr()), a.forEach(function(v) {
            var _ = lr.bind(null, r, v);
            o.has(v) || (o.add(v), v.then(_, _));
          });
        }
      }
      function lt(r, a) {
        return r !== null && (r = r.memoizedState, r === null || r.dehydrated !== null) ? (a = a.memoizedState, a !== null && a.dehydrated === null) : !1;
      }
      var Fn = 0, Et = 1, Gt = 2, nr = 3, yr = 4;
      if (typeof Symbol == "function" && Symbol.for) {
        var At = Symbol.for;
        Fn = At("selector.component"), Et = At("selector.has_pseudo_class"), Gt = At("selector.role"), nr = At("selector.test_id"), yr = At("selector.text");
      }
      function ma(r) {
        var a = Fl(r);
        if (a != null) {
          if (typeof a.memoizedProps["data-testname"] != "string")
            throw Error(g(364));
          return a;
        }
        if (r = $o(r), r === null)
          throw Error(g(362));
        return r.stateNode.current;
      }
      function hl(r, a) {
        switch (a.$$typeof) {
          case Fn:
            if (r.type === a.value)
              return !0;
            break;
          case Et:
            e: {
              a = a.value, r = [r, 0];
              for (var o = 0; o < r.length; ) {
                var v = r[o++], _ = r[o++], w = a[_];
                if (v.tag !== 5 || !ei(v)) {
                  for (; w != null && hl(v, w); )
                    _++, w = a[_];
                  if (_ === a.length) {
                    a = !0;
                    break e;
                  } else
                    for (v = v.child; v !== null; )
                      r.push(v, _), v = v.sibling;
                }
              }
              a = !1;
            }
            return a;
          case Gt:
            if (r.tag === 5 && Ts(r.stateNode, a.value))
              return !0;
            break;
          case yr:
            if ((r.tag === 5 || r.tag === 6) && (r = eu(r), r !== null && 0 <= r.indexOf(a.value)))
              return !0;
            break;
          case nr:
            if (r.tag === 5 && (r = r.memoizedProps["data-testname"], typeof r == "string" && r.toLowerCase() === a.value.toLowerCase()))
              return !0;
            break;
          default:
            throw Error(g(365, a));
        }
        return !1;
      }
      function cl(r) {
        switch (r.$$typeof) {
          case Fn:
            return "<" + (b(r.value) || "Unknown") + ">";
          case Et:
            return ":has(" + (cl(r) || "") + ")";
          case Gt:
            return '[role="' + r.value + '"]';
          case yr:
            return '"' + r.value + '"';
          case nr:
            return '[data-testname="' + r.value + '"]';
          default:
            throw Error(g(365, r));
        }
      }
      function ns(r, a) {
        var o = [];
        r = [r, 0];
        for (var v = 0; v < r.length; ) {
          var _ = r[v++], w = r[v++], T = a[w];
          if (_.tag !== 5 || !ei(_)) {
            for (; T != null && hl(_, T); )
              w++, T = a[w];
            if (w === a.length)
              o.push(_);
            else
              for (_ = _.child; _ !== null; )
                r.push(_, w), _ = _.sibling;
          }
        }
        return o;
      }
      function pl(r, a) {
        if (!Gi)
          throw Error(g(363));
        r = ma(r), r = ns(r, a), a = [], r = Array.from(r);
        for (var o = 0; o < r.length; ) {
          var v = r[o++];
          if (v.tag === 5)
            ei(v) || a.push(v.stateNode);
          else
            for (v = v.child; v !== null; )
              r.push(v), v = v.sibling;
        }
        return a;
      }
      var Pn = null;
      function gl(r) {
        if (Pn === null)
          try {
            var a = ("require" + Math.random()).slice(0, 7);
            Pn = (d && d[a]).call(d, "timers").setImmediate;
          } catch (o) {
            Pn = function(v) {
              var _ = new MessageChannel();
              _.port1.onmessage = v, _.port2.postMessage(void 0);
            };
          }
        return Pn(r);
      }
      var yo = Math.ceil, rs = y.ReactCurrentDispatcher, _o = y.ReactCurrentOwner, rr = y.IsSomeRendererActing, Te = 0, Ct = null, gt = null, Pt = 0, Ot = 0, en = Mr(0), ht = 0, Tn = null, tn = 0, Gn = 0, ki = 0, is = 0, as = null, Kt = 0, qt = 1 / 0;
      function Xe() {
        qt = mt() + 500;
      }
      var ge = null, ss = !1, vl = null, Rn = null, ir = !1, ya = null, Yr = 90, ml = [], Qr = [], Bn = null, ls = 0, hn = null, xi = -1, Mn = 0, _r = 0, Ei = null, Pi = !1;
      function Vt() {
        return Te & 48 ? mt() : xi !== -1 ? xi : xi = mt();
      }
      function ar(r) {
        if (r = r.mode, !(r & 2))
          return 1;
        if (!(r & 4))
          return qn() === 99 ? 1 : 2;
        if (Mn === 0 && (Mn = tn), Ws.transition !== 0) {
          _r !== 0 && (_r = as !== null ? as.pendingLanes : 0), r = Mn;
          var a = 4186112 & ~_r;
          return a &= -a, a === 0 && (r = 4186112 & ~r, a = r & -r, a === 0 && (a = 8192)), a;
        }
        return r = qn(), Te & 4 && r === 98 ? r = Nr(12, Mn) : (r = Df(r), r = Nr(r, Mn)), r;
      }
      function nn(r, a, o) {
        if (50 < ls)
          throw ls = 0, hn = null, Error(g(185));
        if (r = Jt(r, a), r === null)
          return null;
        Qe(r, a, o), r === Ct && (ki |= a, ht === 4 && Ti(r, Pt));
        var v = qn();
        a === 1 ? Te & 8 && !(Te & 48) ? Un(r) : (Tt(r, o), Te === 0 && (Xe(), Sn())) : (!(Te & 4) || v !== 98 && v !== 99 || (Bn === null ? Bn = /* @__PURE__ */ new Set([r]) : Bn.add(r)), Tt(r, o)), as = r;
      }
      function Jt(r, a) {
        r.lanes |= a;
        var o = r.alternate;
        for (o !== null && (o.lanes |= a), o = r, r = r.return; r !== null; )
          r.childLanes |= a, o = r.alternate, o !== null && (o.childLanes |= a), o = r, r = r.return;
        return o.tag === 3 ? o.stateNode : null;
      }
      function Tt(r, a) {
        for (var o = r.callbackNode, v = r.suspendedLanes, _ = r.pingedLanes, w = r.expirationTimes, T = r.pendingLanes; 0 < T; ) {
          var I = 31 - cr(T), V = 1 << I, ce = w[I];
          if (ce === -1) {
            if (!(V & v) || V & _) {
              ce = a, ii(V);
              var Re = $e;
              w[I] = 10 <= Re ? ce + 250 : 6 <= Re ? ce + 5e3 : -1;
            }
          } else
            ce <= a && (r.expiredLanes |= V);
          T &= ~V;
        }
        if (v = Yi(r, r === Ct ? Pt : 0), a = $e, v === 0)
          o !== null && (o !== ai && Wa(o), r.callbackNode = null, r.callbackPriority = 0);
        else {
          if (o !== null) {
            if (r.callbackPriority === a)
              return;
            o !== ai && Wa(o);
          }
          a === 15 ? (o = Un.bind(null, r), Kn === null ? (Kn = [o], si = Bs(Or, js)) : Kn.push(o), o = ai) : a === 14 ? o = Va(99, Un.bind(null, r)) : (o = Xl(a), o = Va(o, yl.bind(null, r))), r.callbackPriority = a, r.callbackNode = o;
        }
      }
      function yl(r) {
        if (xi = -1, _r = Mn = 0, Te & 48)
          throw Error(g(327));
        var a = r.callbackNode;
        if (cn() && r.callbackNode !== a)
          return null;
        var o = Yi(r, r === Ct ? Pt : 0);
        if (o === 0)
          return null;
        var v = o, _ = Te;
        Te |= 16;
        var w = os();
        (Ct !== r || Pt !== v) && (Xe(), Sr(r, v));
        do
          try {
            Co();
            break;
          } catch (I) {
            wo(r, I);
          }
        while (1);
        if (zr(), rs.current = w, Te = _, gt !== null ? v = 0 : (Ct = null, Pt = 0, v = ht), tn & ki)
          Sr(r, 0);
        else if (v !== 0) {
          if (v === 2 && (Te |= 64, r.hydrate && (r.hydrate = !1, Ms(r.containerInfo)), o = Gs(r), o !== 0 && (v = _a(r, o))), v === 1)
            throw a = Tn, Sr(r, 0), Ti(r, o), Tt(r, mt()), a;
          switch (r.finishedWork = r.current.alternate, r.finishedLanes = o, v) {
            case 0:
            case 1:
              throw Error(g(345));
            case 2:
              Kr(r);
              break;
            case 3:
              if (Ti(r, o), (o & 62914560) === o && (v = Kt + 500 - mt(), 10 < v)) {
                if (Yi(r, 0) !== 0)
                  break;
                if (_ = r.suspendedLanes, (_ & o) !== o) {
                  Vt(), r.pingedLanes |= r.suspendedLanes & _;
                  break;
                }
                r.timeoutHandle = Jo(Kr.bind(null, r), v);
                break;
              }
              Kr(r);
              break;
            case 4:
              if (Ti(r, o), (o & 4186112) === o)
                break;
              for (v = r.eventTimes, _ = -1; 0 < o; ) {
                var T = 31 - cr(o);
                w = 1 << T, T = v[T], T > _ && (_ = T), o &= ~w;
              }
              if (o = _, o = mt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * yo(o / 1960)) - o, 10 < o) {
                r.timeoutHandle = Jo(Kr.bind(null, r), o);
                break;
              }
              Kr(r);
              break;
            case 5:
              Kr(r);
              break;
            default:
              throw Error(g(329));
          }
        }
        return Tt(r, mt()), r.callbackNode === a ? yl.bind(null, r) : null;
      }
      function Ti(r, a) {
        for (a &= ~is, a &= ~ki, r.suspendedLanes |= a, r.pingedLanes &= ~a, r = r.expirationTimes; 0 < a; ) {
          var o = 31 - cr(a), v = 1 << o;
          r[o] = -1, a &= ~v;
        }
      }
      function Un(r) {
        if (Te & 48)
          throw Error(g(327));
        if (cn(), r === Ct && r.expiredLanes & Pt) {
          var a = Pt, o = _a(r, a);
          tn & ki && (a = Yi(r, a), o = _a(r, a));
        } else
          a = Yi(r, 0), o = _a(r, a);
        if (r.tag !== 0 && o === 2 && (Te |= 64, r.hydrate && (r.hydrate = !1, Ms(r.containerInfo)), a = Gs(r), a !== 0 && (o = _a(r, a))), o === 1)
          throw o = Tn, Sr(r, 0), Ti(r, a), Tt(r, mt()), o;
        return r.finishedWork = r.current.alternate, r.finishedLanes = a, Kr(r), Tt(r, mt()), null;
      }
      function Xr() {
        if (Bn !== null) {
          var r = Bn;
          Bn = null, r.forEach(function(a) {
            a.expiredLanes |= 24 & a.pendingLanes, Tt(a, mt());
          });
        }
        Sn();
      }
      function _l(r, a) {
        var o = Te;
        Te |= 1;
        try {
          return r(a);
        } finally {
          Te = o, Te === 0 && (Xe(), Sn());
        }
      }
      function So(r, a) {
        var o = Te;
        if (o & 48)
          return r(a);
        Te |= 1;
        try {
          if (r)
            return _n(99, r.bind(null, a));
        } finally {
          Te = o, Sn();
        }
      }
      function Ln(r, a) {
        pt(en, Ot), Ot |= a, tn |= a;
      }
      function sr() {
        Ot = en.current, Be(en);
      }
      function Sr(r, a) {
        r.finishedWork = null, r.finishedLanes = 0;
        var o = r.timeoutHandle;
        if (o !== Ps && (r.timeoutHandle = Ps, Es(o)), gt !== null)
          for (o = gt.return; o !== null; ) {
            var v = o;
            switch (v.tag) {
              case 1:
                v = v.type.childContextTypes, v != null && fn();
                break;
              case 3:
                bi(), Be(Dt), Be(zt), $s();
                break;
              case 5:
                Xa(v);
                break;
              case 4:
                bi();
                break;
              case 13:
                Be(at);
                break;
              case 19:
                Be(at);
                break;
              case 10:
                di(v);
                break;
              case 23:
              case 24:
                sr();
            }
            o = o.return;
          }
        Ct = r, gt = or(r.current, null), Pt = Ot = tn = a, ht = 0, Tn = null, is = ki = Gn = 0;
      }
      function wo(r, a) {
        do {
          var o = gt;
          try {
            if (zr(), vr.current = $a, ea) {
              for (var v = ft.memoizedState; v !== null; ) {
                var _ = v.queue;
                _ !== null && (_.pending = null), v = v.next;
              }
              ea = !1;
            }
            if (Ka = 0, Nt = Wt = ft = null, pi = !1, _o.current = null, o === null || o.return === null) {
              ht = 1, Tn = a, gt = null;
              break;
            }
            e: {
              var w = r, T = o.return, I = o, V = a;
              if (a = Pt, I.flags |= 2048, I.firstEffect = I.lastEffect = null, V !== null && typeof V == "object" && typeof V.then == "function") {
                var ce = V;
                if (!(I.mode & 2)) {
                  var Re = I.alternate;
                  Re ? (I.updateQueue = Re.updateQueue, I.memoizedState = Re.memoizedState, I.lanes = Re.lanes) : (I.updateQueue = null, I.memoizedState = null);
                }
                var ze = (at.current & 1) !== 0, ye = T;
                do {
                  var tt;
                  if (tt = ye.tag === 13) {
                    var nt = ye.memoizedState;
                    if (nt !== null)
                      tt = nt.dehydrated !== null;
                    else {
                      var pn = ye.memoizedProps;
                      tt = pn.fallback === void 0 ? !1 : pn.unstable_avoidThisFallback !== !0 ? !0 : !ze;
                    }
                  }
                  if (tt) {
                    var H = ye.updateQueue;
                    if (H === null) {
                      var F = /* @__PURE__ */ new Set();
                      F.add(ce), ye.updateQueue = F;
                    } else
                      H.add(ce);
                    if (!(ye.mode & 2)) {
                      if (ye.flags |= 64, I.flags |= 16384, I.flags &= -2981, I.tag === 1)
                        if (I.alternate === null)
                          I.tag = 17;
                        else {
                          var Y = Fr(-1, 1);
                          Y.tag = 2, Gr(I, Y);
                        }
                      I.lanes |= 1;
                      break e;
                    }
                    V = void 0, I = a;
                    var ve = w.pingCache;
                    if (ve === null ? (ve = w.pingCache = new Gf(), V = /* @__PURE__ */ new Set(), ve.set(ce, V)) : (V = ve.get(ce), V === void 0 && (V = /* @__PURE__ */ new Set(), ve.set(ce, V))), !V.has(I)) {
                      V.add(I);
                      var Me = fs.bind(null, w, ce, I);
                      ce.then(Me, Me);
                    }
                    ye.flags |= 4096, ye.lanes = a;
                    break e;
                  }
                  ye = ye.return;
                } while (ye !== null);
                V = Error((b(I.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
              }
              ht !== 5 && (ht = 2), V = vo(V, I), ye = T;
              do {
                switch (ye.tag) {
                  case 3:
                    w = V, ye.flags |= 4096, a &= -a, ye.lanes |= a;
                    var it = Ou(ye, w, a);
                    yu(ye, it);
                    break e;
                  case 1:
                    w = V;
                    var Ge = ye.type, Ke = ye.stateNode;
                    if (!(ye.flags & 64) && (typeof Ge.getDerivedStateFromError == "function" || Ke !== null && typeof Ke.componentDidCatch == "function" && (Rn === null || !Rn.has(Ke)))) {
                      ye.flags |= 4096, a &= -a, ye.lanes |= a;
                      var vt = ul(ye, w, a);
                      yu(ye, vt);
                      break e;
                    }
                }
                ye = ye.return;
              } while (ye !== null);
            }
            ko(o);
          } catch (Ve) {
            a = Ve, gt === o && o !== null && (gt = o = o.return);
            continue;
          }
          break;
        } while (1);
      }
      function os() {
        var r = rs.current;
        return rs.current = $a, r === null ? $a : r;
      }
      function _a(r, a) {
        var o = Te;
        Te |= 16;
        var v = os();
        Ct === r && Pt === a || Sr(r, a);
        do
          try {
            Du();
            break;
          } catch (_) {
            wo(r, _);
          }
        while (1);
        if (zr(), Te = o, rs.current = v, gt !== null)
          throw Error(g(261));
        return Ct = null, Pt = 0, ht;
      }
      function Du() {
        for (; gt !== null; )
          us(gt);
      }
      function Co() {
        for (; gt !== null && !Us(); )
          us(gt);
      }
      function us(r) {
        var a = Sa(r.alternate, r, Ot);
        r.memoizedProps = r.pendingProps, a === null ? ko(r) : gt = a, _o.current = null;
      }
      function ko(r) {
        var a = r;
        do {
          var o = a.alternate;
          if (r = a.return, a.flags & 2048) {
            if (o = go(a), o !== null) {
              o.flags &= 2047, gt = o;
              return;
            }
            r !== null && (r.firstEffect = r.lastEffect = null, r.flags |= 2048);
          } else {
            if (o = po(o, a, Ot), o !== null) {
              gt = o;
              return;
            }
            if (o = a, o.tag !== 24 && o.tag !== 23 || o.memoizedState === null || Ot & 1073741824 || !(o.mode & 4)) {
              for (var v = 0, _ = o.child; _ !== null; )
                v |= _.lanes | _.childLanes, _ = _.sibling;
              o.childLanes = v;
            }
            r !== null && !(r.flags & 2048) && (r.firstEffect === null && (r.firstEffect = a.firstEffect), a.lastEffect !== null && (r.lastEffect !== null && (r.lastEffect.nextEffect = a.firstEffect), r.lastEffect = a.lastEffect), 1 < a.flags && (r.lastEffect !== null ? r.lastEffect.nextEffect = a : r.firstEffect = a, r.lastEffect = a));
          }
          if (a = a.sibling, a !== null) {
            gt = a;
            return;
          }
          gt = a = r;
        } while (a !== null);
        ht === 0 && (ht = 5);
      }
      function Kr(r) {
        var a = qn();
        return _n(99, Fu.bind(null, r, a)), null;
      }
      function Fu(r, a) {
        do
          cn();
        while (ya !== null);
        if (Te & 48)
          throw Error(g(327));
        var o = r.finishedWork;
        if (o === null)
          return null;
        if (r.finishedWork = null, r.finishedLanes = 0, o === r.current)
          throw Error(g(177));
        r.callbackNode = null;
        var v = o.lanes | o.childLanes, _ = v, w = r.pendingLanes & ~_;
        r.pendingLanes = _, r.suspendedLanes = 0, r.pingedLanes = 0, r.expiredLanes &= _, r.mutableReadLanes &= _, r.entangledLanes &= _, _ = r.entanglements;
        for (var T = r.eventTimes, I = r.expirationTimes; 0 < w; ) {
          var V = 31 - cr(w), ce = 1 << V;
          _[V] = 0, T[V] = -1, I[V] = -1, w &= ~ce;
        }
        if (Bn !== null && !(v & 24) && Bn.has(r) && Bn.delete(r), r === Ct && (gt = Ct = null, Pt = 0), 1 < o.flags ? o.lastEffect !== null ? (o.lastEffect.nextEffect = o, v = o.firstEffect) : v = o : v = o.firstEffect, v !== null) {
          _ = Te, Te |= 32, _o.current = null, Ei = q(r.containerInfo), Pi = !1, ge = v;
          do
            try {
              xo();
            } catch (F) {
              if (ge === null)
                throw Error(g(330));
              wr(ge, F), ge = ge.nextEffect;
            }
          while (ge !== null);
          Ei = null, ge = v;
          do
            try {
              for (T = r; ge !== null; ) {
                var Re = ge.flags;
                if (Re & 16 && un && Rs(ge.stateNode), Re & 128) {
                  var ze = ge.alternate;
                  if (ze !== null) {
                    var ye = ze.ref;
                    ye !== null && (typeof ye == "function" ? ye(null) : ye.current = null);
                  }
                }
                switch (Re & 1038) {
                  case 2:
                    ga(ge), ge.flags &= -3;
                    break;
                  case 6:
                    ga(ge), ge.flags &= -3, Vr(ge.alternate, ge);
                    break;
                  case 1024:
                    ge.flags &= -1025;
                    break;
                  case 1028:
                    ge.flags &= -1025, Vr(ge.alternate, ge);
                    break;
                  case 4:
                    Vr(ge.alternate, ge);
                    break;
                  case 8:
                    I = T, w = ge, un ? dl(I, w) : Iu(I, w);
                    var tt = w.alternate;
                    zu(w), tt !== null && zu(tt);
                }
                ge = ge.nextEffect;
              }
            } catch (F) {
              if (ge === null)
                throw Error(g(330));
              wr(ge, F), ge = ge.nextEffect;
            }
          while (ge !== null);
          Pi && Fi(), he(r.containerInfo), r.current = o, ge = v;
          do
            try {
              for (Re = r; ge !== null; ) {
                var nt = ge.flags;
                if (nt & 36 && ts(Re, ge.alternate, ge), nt & 128) {
                  ze = void 0;
                  var pn = ge.ref;
                  if (pn !== null) {
                    var H = ge.stateNode;
                    switch (ge.tag) {
                      case 5:
                        ze = we(H);
                        break;
                      default:
                        ze = H;
                    }
                    typeof pn == "function" ? pn(ze) : pn.current = ze;
                  }
                }
                ge = ge.nextEffect;
              }
            } catch (F) {
              if (ge === null)
                throw Error(g(330));
              wr(ge, F), ge = ge.nextEffect;
            }
          while (ge !== null);
          ge = null, Ff(), Te = _;
        } else
          r.current = o;
        if (ir)
          ir = !1, ya = r, Yr = a;
        else
          for (ge = v; ge !== null; )
            a = ge.nextEffect, ge.nextEffect = null, ge.flags & 8 && (nt = ge, nt.sibling = null, nt.stateNode = null), ge = a;
        if (v = r.pendingLanes, v === 0 && (Rn = null), v === 1 ? r === hn ? ls++ : (ls = 0, hn = r) : ls = 0, o = o.stateNode, Qn && typeof Qn.onCommitFiberRoot == "function")
          try {
            Qn.onCommitFiberRoot(
              Ql,
              o,
              void 0,
              (o.current.flags & 64) === 64
            );
          } catch (F) {
          }
        if (Tt(r, mt()), ss)
          throw ss = !1, r = vl, vl = null, r;
        return Te & 8 || Sn(), null;
      }
      function xo() {
        for (; ge !== null; ) {
          var r = ge.alternate;
          Pi || Ei === null || (ge.flags & 8 ? ie(ge, Ei) && (Pi = !0, Di()) : ge.tag === 13 && lt(r, ge) && ie(ge, Ei) && (Pi = !0, Di()));
          var a = ge.flags;
          a & 256 && pa(r, ge), !(a & 512) || ir || (ir = !0, Va(97, function() {
            return cn(), null;
          })), ge = ge.nextEffect;
        }
      }
      function cn() {
        if (Yr !== 90) {
          var r = 97 < Yr ? 97 : Yr;
          return Yr = 90, _n(r, Gu);
        }
        return !1;
      }
      function Sl(r, a) {
        ml.push(a, r), ir || (ir = !0, Va(97, function() {
          return cn(), null;
        }));
      }
      function Eo(r, a) {
        Qr.push(a, r), ir || (ir = !0, Va(97, function() {
          return cn(), null;
        }));
      }
      function Gu() {
        if (ya === null)
          return !1;
        var r = ya;
        if (ya = null, Te & 48)
          throw Error(g(331));
        var a = Te;
        Te |= 32;
        var o = Qr;
        Qr = [];
        for (var v = 0; v < o.length; v += 2) {
          var _ = o[v], w = o[v + 1], T = _.destroy;
          if (_.destroy = void 0, typeof T == "function")
            try {
              T();
            } catch (V) {
              if (w === null)
                throw Error(g(330));
              wr(w, V);
            }
        }
        for (o = ml, ml = [], v = 0; v < o.length; v += 2) {
          _ = o[v], w = o[v + 1];
          try {
            var I = _.create;
            _.destroy = I();
          } catch (V) {
            if (w === null)
              throw Error(g(330));
            wr(w, V);
          }
        }
        for (I = r.current.firstEffect; I !== null; )
          r = I.nextEffect, I.nextEffect = null, I.flags & 8 && (I.sibling = null, I.stateNode = null), I = r;
        return Te = a, Sn(), !0;
      }
      function Ri(r, a, o) {
        a = vo(o, a), a = Ou(r, a, 1), Gr(r, a), a = Vt(), r = Jt(r, 1), r !== null && (Qe(r, 1, a), Tt(r, a));
      }
      function wr(r, a) {
        if (r.tag === 3)
          Ri(r, r, a);
        else
          for (var o = r.return; o !== null; ) {
            if (o.tag === 3) {
              Ri(o, r, a);
              break;
            } else if (o.tag === 1) {
              var v = o.stateNode;
              if (typeof o.type.getDerivedStateFromError == "function" || typeof v.componentDidCatch == "function" && (Rn === null || !Rn.has(v))) {
                r = vo(a, r);
                var _ = ul(o, r, 1);
                if (Gr(o, _), _ = Vt(), o = Jt(o, 1), o !== null)
                  Qe(o, 1, _), Tt(o, _);
                else if (typeof v.componentDidCatch == "function" && (Rn === null || !Rn.has(v)))
                  try {
                    v.componentDidCatch(a, r);
                  } catch (w) {
                  }
                break;
              }
            }
            o = o.return;
          }
      }
      function fs(r, a, o) {
        var v = r.pingCache;
        v !== null && v.delete(a), a = Vt(), r.pingedLanes |= r.suspendedLanes & o, Ct === r && (Pt & o) === o && (ht === 4 || ht === 3 && (Pt & 62914560) === Pt && 500 > mt() - Kt ? Sr(r, 0) : is |= o), Tt(r, a);
      }
      function lr(r, a) {
        var o = r.stateNode;
        o !== null && o.delete(a), a = 0, a === 0 && (a = r.mode, a & 2 ? a & 4 ? (Mn === 0 && (Mn = tn), a = Qi(62914560 & ~Mn), a === 0 && (a = 4194304)) : a = qn() === 99 ? 1 : 2 : a = 1), o = Vt(), r = Jt(r, a), r !== null && (Qe(r, a, o), Tt(r, o));
      }
      var Sa;
      Sa = function(r, a, o) {
        var v = a.lanes;
        if (r !== null)
          if (r.memoizedProps !== a.pendingProps || Dt.current)
            En = !0;
          else if (o & v)
            En = !!(r.flags & 16384);
          else {
            switch (En = !1, a.tag) {
              case 3:
                st(a), ro();
                break;
              case 5:
                Eu(a);
                break;
              case 1:
                Ft(a.type) && Ds(a);
                break;
              case 4:
                eo(a, a.stateNode.containerInfo);
                break;
              case 10:
                Ys(a, a.memoizedProps.value);
                break;
              case 13:
                if (a.memoizedState !== null)
                  return o & a.child.childLanes ? ba(r, a, o) : (pt(at, at.current & 1), a = bn(r, a, o), a !== null ? a.sibling : null);
                pt(at, at.current & 1);
                break;
              case 19:
                if (v = (o & a.childLanes) !== 0, r.flags & 64) {
                  if (v)
                    return _i(r, a, o);
                  a.flags |= 64;
                }
                var _ = a.memoizedState;
                if (_ !== null && (_.rendering = null, _.tail = null, _.lastEffect = null), pt(at, at.current), v)
                  break;
                return null;
              case 23:
              case 24:
                return a.lanes = 0, uo(r, a, o);
            }
            return bn(r, a, o);
          }
        else
          En = !1;
        switch (a.lanes = 0, a.tag) {
          case 2:
            if (v = a.type, r !== null && (r.alternate = null, a.alternate = null, a.flags |= 2), r = a.pendingProps, _ = ri(a, zt.current), Dr(a, o), _ = el(null, a, v, r, _, o), a.flags |= 1, typeof _ == "object" && _ !== null && typeof _.render == "function" && _.$$typeof === void 0) {
              if (a.tag = 1, a.memoizedState = null, a.updateQueue = null, Ft(v)) {
                var w = !0;
                Ds(a);
              } else
                w = !1;
              a.memoizedState = _.state !== null && _.state !== void 0 ? _.state : null, qi(a);
              var T = v.getDerivedStateFromProps;
              typeof T == "function" && Qs(a, v, T, r), _.updater = Xs, a.stateNode = _, _._reactInternals = a, bl(a, v, r, o), a = al(null, a, v, !0, w, o);
            } else
              a.tag = 0, yt(null, a, _, o), a = a.child;
            return a;
          case 16:
            _ = a.elementType;
            e: {
              switch (r !== null && (r.alternate = null, a.alternate = null, a.flags |= 2), r = a.pendingProps, w = _._init, _ = w(_._payload), a.type = _, w = a.tag = kl(_), r = wn(_, r), w) {
                case 0:
                  a = fo(null, a, _, r, o);
                  break e;
                case 1:
                  a = ho(null, a, _, r, o);
                  break e;
                case 11:
                  a = rl(null, a, _, r, o);
                  break e;
                case 14:
                  a = il(null, a, _, wn(_.type, r), v, o);
                  break e;
              }
              throw Error(g(306, _, ""));
            }
            return a;
          case 0:
            return v = a.type, _ = a.pendingProps, _ = a.elementType === v ? _ : wn(v, _), fo(r, a, v, _, o);
          case 1:
            return v = a.type, _ = a.pendingProps, _ = a.elementType === v ? _ : wn(v, _), ho(r, a, v, _, o);
          case 3:
            if (st(a), v = a.updateQueue, r === null || v === null)
              throw Error(g(282));
            if (v = a.pendingProps, _ = a.memoizedState, _ = _ !== null ? _.element : null, Zl(r, a), hi(a, v, null, o), v = a.memoizedState.element, v === _)
              ro(), a = bn(r, a, o);
            else {
              if (_ = a.stateNode, (w = _.hydrate) && (mn ? (Br = ou(a.stateNode.containerInfo), Zn = a, w = zn = !0) : w = !1), w) {
                if (mn && (r = _.mutableSourceEagerHydrationData, r != null))
                  for (_ = 0; _ < r.length; _ += 2)
                    w = r[_], T = r[_ + 1], Vn ? w._workInProgressVersionPrimary = T : w._workInProgressVersionSecondary = T, ci.push(w);
                for (o = xu(a, null, v, o), a.child = o; o; )
                  o.flags = o.flags & -3 | 1024, o = o.sibling;
              } else
                yt(r, a, v, o), ro();
              a = a.child;
            }
            return a;
          case 5:
            return Eu(a), r === null && Ur(a), v = a.type, _ = a.pendingProps, w = r !== null ? r.memoizedProps : null, T = _.children, je(v, _) ? T = null : w !== null && je(v, w) && (a.flags |= 16), oa(r, a), yt(r, a, T, o), a.child;
          case 6:
            return r === null && Ur(a), null;
          case 13:
            return ba(r, a, o);
          case 4:
            return eo(a, a.stateNode.containerInfo), v = a.pendingProps, r === null ? a.child = qs(a, null, v, o) : yt(r, a, v, o), a.child;
          case 11:
            return v = a.type, _ = a.pendingProps, _ = a.elementType === v ? _ : wn(v, _), rl(r, a, v, _, o);
          case 7:
            return yt(r, a, a.pendingProps, o), a.child;
          case 8:
            return yt(
              r,
              a,
              a.pendingProps.children,
              o
            ), a.child;
          case 12:
            return yt(r, a, a.pendingProps.children, o), a.child;
          case 10:
            e: {
              if (v = a.type._context, _ = a.pendingProps, T = a.memoizedProps, w = _.value, Ys(a, w), T !== null) {
                var I = T.value;
                if (w = dn(I, w) ? 0 : (typeof v._calculateChangedBits == "function" ? v._calculateChangedBits(I, w) : 1073741823) | 0, w === 0) {
                  if (T.children === _.children && !Dt.current) {
                    a = bn(r, a, o);
                    break e;
                  }
                } else
                  for (I = a.child, I !== null && (I.return = a); I !== null; ) {
                    var V = I.dependencies;
                    if (V !== null) {
                      T = I.child;
                      for (var ce = V.firstContext; ce !== null; ) {
                        if (ce.context === v && ce.observedBits & w) {
                          I.tag === 1 && (ce = Fr(-1, o & -o), ce.tag = 2, Gr(I, ce)), I.lanes |= o, ce = I.alternate, ce !== null && (ce.lanes |= o), mu(I.return, o), V.lanes |= o;
                          break;
                        }
                        ce = ce.next;
                      }
                    } else
                      T = I.tag === 10 && I.type === a.type ? null : I.child;
                    if (T !== null)
                      T.return = I;
                    else
                      for (T = I; T !== null; ) {
                        if (T === a) {
                          T = null;
                          break;
                        }
                        if (I = T.sibling, I !== null) {
                          I.return = T.return, T = I;
                          break;
                        }
                        T = T.return;
                      }
                    I = T;
                  }
              }
              yt(r, a, _.children, o), a = a.child;
            }
            return a;
          case 9:
            return _ = a.type, w = a.pendingProps, v = w.children, Dr(a, o), _ = bt(_, w.unstable_observedBits), v = v(_), a.flags |= 1, yt(
              r,
              a,
              v,
              o
            ), a.child;
          case 14:
            return _ = a.type, w = wn(_, a.pendingProps), w = wn(_.type, w), il(r, a, _, w, v, o);
          case 15:
            return Au(r, a, a.type, a.pendingProps, v, o);
          case 17:
            return v = a.type, _ = a.pendingProps, _ = a.elementType === v ? _ : wn(v, _), r !== null && (r.alternate = null, a.alternate = null, a.flags |= 2), a.tag = 1, Ft(v) ? (r = !0, Ds(a)) : r = !1, Dr(a, o), $l(a, v, _), bl(a, v, _, o), al(null, a, v, !0, r, o);
          case 19:
            return _i(r, a, o);
          case 23:
            return uo(r, a, o);
          case 24:
            return uo(r, a, o);
        }
        throw Error(g(156, a.tag));
      };
      var qr = { current: !1 }, Cr = p.unstable_flushAllWithoutAsserting, wl = typeof Cr == "function";
      function Jr() {
        if (Cr !== void 0)
          return Cr();
        for (var r = !1; cn(); )
          r = !0;
        return r;
      }
      function Po(r) {
        try {
          Jr(), gl(function() {
            Jr() ? Po(r) : r();
          });
        } catch (a) {
          r(a);
        }
      }
      var wa = 0, dt = !1;
      function Cl(r, a, o, v) {
        this.tag = r, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = a, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = v, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null;
      }
      function rn(r, a, o, v) {
        return new Cl(r, a, o, v);
      }
      function ds(r) {
        return r = r.prototype, !(!r || !r.isReactComponent);
      }
      function kl(r) {
        if (typeof r == "function")
          return ds(r) ? 1 : 0;
        if (r != null) {
          if (r = r.$$typeof, r === z)
            return 11;
          if (r === Q)
            return 14;
        }
        return 2;
      }
      function or(r, a) {
        var o = r.alternate;
        return o === null ? (o = rn(r.tag, a, r.key, r.mode), o.elementType = r.elementType, o.type = r.type, o.stateNode = r.stateNode, o.alternate = r, r.alternate = o) : (o.pendingProps = a, o.type = r.type, o.flags = 0, o.nextEffect = null, o.firstEffect = null, o.lastEffect = null), o.childLanes = r.childLanes, o.lanes = r.lanes, o.child = r.child, o.memoizedProps = r.memoizedProps, o.memoizedState = r.memoizedState, o.updateQueue = r.updateQueue, a = r.dependencies, o.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }, o.sibling = r.sibling, o.index = r.index, o.ref = r.ref, o;
      }
      function ur(r, a, o, v, _, w) {
        var T = 2;
        if (v = r, typeof r == "function")
          ds(r) && (T = 1);
        else if (typeof r == "string")
          T = 5;
        else
          e:
            switch (r) {
              case E:
                return et(o.children, _, w, a);
              case J:
                T = 8, _ |= 16;
                break;
              case x:
                T = 8, _ |= 1;
                break;
              case N:
                return r = rn(12, o, a, _ | 8), r.elementType = N, r.type = N, r.lanes = w, r;
              case Z:
                return r = rn(13, o, a, _), r.type = Z, r.elementType = Z, r.lanes = w, r;
              case X:
                return r = rn(19, o, a, _), r.elementType = X, r.lanes = w, r;
              case de:
                return _t(o, _, w, a);
              case oe:
                return r = rn(24, o, a, _), r.elementType = oe, r.lanes = w, r;
              default:
                if (typeof r == "object" && r !== null)
                  switch (r.$$typeof) {
                    case P:
                      T = 10;
                      break e;
                    case B:
                      T = 9;
                      break e;
                    case z:
                      T = 11;
                      break e;
                    case Q:
                      T = 14;
                      break e;
                    case K:
                      T = 16, v = null;
                      break e;
                    case se:
                      T = 22;
                      break e;
                  }
                throw Error(g(130, r == null ? r : typeof r, ""));
            }
        return a = rn(T, o, a, _), a.elementType = r, a.type = v, a.lanes = w, a;
      }
      function et(r, a, o, v) {
        return r = rn(7, r, v, a), r.lanes = o, r;
      }
      function _t(r, a, o, v) {
        return r = rn(23, r, v, a), r.elementType = de, r.lanes = o, r;
      }
      function kt(r, a, o) {
        return r = rn(6, r, null, a), r.lanes = o, r;
      }
      function Ca(r, a, o) {
        return a = rn(4, r.children !== null ? r.children : [], r.key, a), a.lanes = o, a.stateNode = { containerInfo: r.containerInfo, pendingChildren: null, implementation: r.implementation }, a;
      }
      function hs(r, a, o) {
        this.tag = a, this.containerInfo = r, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Ps, this.pendingContext = this.context = null, this.hydrate = o, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = ja(0), this.expirationTimes = ja(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ja(0), mn && (this.mutableSourceEagerHydrationData = null);
      }
      function ka(r) {
        var a = r._reactInternals;
        if (a === void 0)
          throw typeof r.render == "function" ? Error(g(188)) : Error(g(268, Object.keys(r)));
        return r = Le(a), r === null ? null : r.stateNode;
      }
      function Bu(r, a) {
        if (r = r.memoizedState, r !== null && r.dehydrated !== null) {
          var o = r.retryLane;
          r.retryLane = o !== 0 && o < a ? o : a;
        }
      }
      function Rt(r, a) {
        Bu(r, a), (r = r.alternate) && Bu(r, a);
      }
      function To(r) {
        return r = Le(r), r === null ? null : r.stateNode;
      }
      function Ro() {
        return null;
      }
      return l.IsThisRendererActing = qr, l.act = function(r) {
        function a() {
          wa--, rr.current = o, qr.current = v;
        }
        dt === !1 && (dt = !0, console.error("act(...) is not supported in production builds of React, and might not behave as expected.")), wa++;
        var o = rr.current, v = qr.current;
        rr.current = !0, qr.current = !0;
        try {
          var _ = _l(r);
        } catch (w) {
          throw a(), w;
        }
        if (_ !== null && typeof _ == "object" && typeof _.then == "function")
          return { then: function(w, T) {
            _.then(function() {
              1 < wa || wl === !0 && o === !0 ? (a(), w()) : Po(function(I) {
                a(), I ? T(I) : w();
              });
            }, function(I) {
              a(), T(I);
            });
          } };
        try {
          wa !== 1 || wl !== !1 && o !== !1 || Jr(), a();
        } catch (w) {
          throw a(), w;
        }
        return { then: function(w) {
          w();
        } };
      }, l.attemptContinuousHydration = function(r) {
        if (r.tag === 13) {
          var a = Vt();
          nn(r, 67108864, a), Rt(r, 67108864);
        }
      }, l.attemptHydrationAtCurrentPriority = function(r) {
        if (r.tag === 13) {
          var a = Vt(), o = ar(r);
          nn(r, o, a), Rt(r, o);
        }
      }, l.attemptSynchronousHydration = function(r) {
        switch (r.tag) {
          case 3:
            var a = r.stateNode;
            if (a.hydrate) {
              var o = ii(a.pendingLanes);
              a.expiredLanes |= o & a.pendingLanes, Tt(a, mt()), !(Te & 48) && (Xe(), Sn());
            }
            break;
          case 13:
            var v = Vt();
            So(function() {
              return nn(r, 1, v);
            }), Rt(r, 4);
        }
      }, l.attemptUserBlockingHydration = function(r) {
        if (r.tag === 13) {
          var a = Vt();
          nn(r, 4, a), Rt(r, 4);
        }
      }, l.batchedEventUpdates = function(r, a) {
        var o = Te;
        Te |= 2;
        try {
          return r(a);
        } finally {
          Te = o, Te === 0 && (Xe(), Sn());
        }
      }, l.batchedUpdates = _l, l.createComponentSelector = function(r) {
        return { $$typeof: Fn, value: r };
      }, l.createContainer = function(r, a, o) {
        return r = new hs(r, a, o), a = rn(3, null, null, a === 2 ? 7 : a === 1 ? 3 : 0), r.current = a, a.stateNode = r, qi(a), r;
      }, l.createHasPsuedoClassSelector = function(r) {
        return { $$typeof: Et, value: r };
      }, l.createPortal = function(r, a, o) {
        var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return { $$typeof: k, key: v == null ? null : "" + v, children: r, containerInfo: a, implementation: o };
      }, l.createRoleSelector = function(r) {
        return { $$typeof: Gt, value: r };
      }, l.createTestNameSelector = function(r) {
        return { $$typeof: nr, value: r };
      }, l.createTextSelector = function(r) {
        return { $$typeof: yr, value: r };
      }, l.deferredUpdates = function(r) {
        return _n(97, r);
      }, l.discreteUpdates = function(r, a, o, v, _) {
        var w = Te;
        Te |= 4;
        try {
          return _n(98, r.bind(null, a, o, v, _));
        } finally {
          Te = w, Te === 0 && (Xe(), Sn());
        }
      }, l.findAllNodes = pl, l.findBoundingRects = function(r, a) {
        if (!Gi)
          throw Error(g(363));
        a = pl(r, a), r = [];
        for (var o = 0; o < a.length; o++)
          r.push(bo(a[o]));
        for (a = r.length - 1; 0 < a; a--) {
          o = r[a];
          for (var v = o.x, _ = v + o.width, w = o.y, T = w + o.height, I = a - 1; 0 <= I; I--)
            if (a !== I) {
              var V = r[I], ce = V.x, Re = ce + V.width, ze = V.y, ye = ze + V.height;
              if (v >= ce && w >= ze && _ <= Re && T <= ye) {
                r.splice(a, 1);
                break;
              } else if (v !== ce || o.width !== V.width || ye < w || ze > T) {
                if (!(w !== ze || o.height !== V.height || Re < v || ce > _)) {
                  ce > v && (V.width += ce - v, V.x = v), Re < _ && (V.width = _ - ce), r.splice(a, 1);
                  break;
                }
              } else {
                ze > w && (V.height += ze - w, V.y = w), ye < T && (V.height = T - ze), r.splice(a, 1);
                break;
              }
            }
        }
        return r;
      }, l.findHostInstance = ka, l.findHostInstanceWithNoPortals = function(r) {
        return r = De(r), r === null ? null : r.tag === 20 ? r.stateNode.instance : r.stateNode;
      }, l.findHostInstanceWithWarning = function(r) {
        return ka(r);
      }, l.flushControlled = function(r) {
        var a = Te;
        Te |= 1;
        try {
          _n(99, r);
        } finally {
          Te = a, Te === 0 && (Xe(), Sn());
        }
      }, l.flushDiscreteUpdates = function() {
        !(Te & 49) && (Xr(), cn());
      }, l.flushPassiveEffects = cn, l.flushSync = So, l.focusWithin = function(r, a) {
        if (!Gi)
          throw Error(g(363));
        for (r = ma(r), a = ns(r, a), a = Array.from(a), r = 0; r < a.length; ) {
          var o = a[r++];
          if (!ei(o)) {
            if (o.tag === 5 && tu(o.stateNode))
              return !0;
            for (o = o.child; o !== null; )
              a.push(o), o = o.sibling;
          }
        }
        return !1;
      }, l.getCurrentUpdateLanePriority = function() {
        return Lr;
      }, l.getFindAllNodesFailureDescription = function(r, a) {
        if (!Gi)
          throw Error(g(363));
        var o = 0, v = [];
        r = [ma(r), 0];
        for (var _ = 0; _ < r.length; ) {
          var w = r[_++], T = r[_++], I = a[T];
          if ((w.tag !== 5 || !ei(w)) && (hl(w, I) && (v.push(cl(I)), T++, T > o && (o = T)), T < a.length))
            for (w = w.child; w !== null; )
              r.push(w, T), w = w.sibling;
        }
        if (o < a.length) {
          for (r = []; o < a.length; o++)
            r.push(cl(a[o]));
          return `findAllNodes was able to match part of the selector:
  ` + (v.join(" > ") + `

No matching component was found for:
  `) + r.join(" > ");
        }
        return null;
      }, l.getPublicRootInstance = function(r) {
        if (r = r.current, !r.child)
          return null;
        switch (r.child.tag) {
          case 5:
            return we(r.child.stateNode);
          default:
            return r.child.stateNode;
        }
      }, l.injectIntoDevTools = function(r) {
        if (r = {
          bundleType: r.bundleType,
          version: r.version,
          rendererPackageName: r.rendererPackageName,
          rendererConfig: r.rendererConfig,
          overrideHookState: null,
          overrideHookStateDeletePath: null,
          overrideHookStateRenamePath: null,
          overrideProps: null,
          overridePropsDeletePath: null,
          overridePropsRenamePath: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: y.ReactCurrentDispatcher,
          findHostInstanceByFiber: To,
          findFiberByHostInstance: r.findFiberByHostInstance || Ro,
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null
        }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined")
          r = !1;
        else {
          var a = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!a.isDisabled && a.supportsFiber)
            try {
              Ql = a.inject(r), Qn = a;
            } catch (o) {
            }
          r = !0;
        }
        return r;
      }, l.observeVisibleRects = function(r, a, o, v) {
        if (!Gi)
          throw Error(g(363));
        r = pl(r, a);
        var _ = Fa(r, o, v).disconnect;
        return { disconnect: function() {
          _();
        } };
      }, l.registerMutableSourceForHydration = function(r, a) {
        var o = a._getVersion;
        o = o(a._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [a, o] : r.mutableSourceEagerHydrationData.push(a, o);
      }, l.runWithPriority = function(r, a) {
        var o = Lr;
        try {
          return Lr = r, a();
        } finally {
          Lr = o;
        }
      }, l.shouldSuspend = function() {
        return !1;
      }, l.unbatchedUpdates = function(r, a) {
        var o = Te;
        Te &= -2, Te |= 8;
        try {
          return r(a);
        } finally {
          Te = o, Te === 0 && (Xe(), Sn());
        }
      }, l.updateContainer = function(r, a, o, v) {
        var _ = a.current, w = Vt(), T = ar(_);
        e:
          if (o) {
            o = o._reactInternals;
            t: {
              if (te(o) !== o || o.tag !== 1)
                throw Error(g(170));
              var I = o;
              do {
                switch (I.tag) {
                  case 3:
                    I = I.stateNode.context;
                    break t;
                  case 1:
                    if (Ft(I.type)) {
                      I = I.stateNode.__reactInternalMemoizedMergedChildContext;
                      break t;
                    }
                }
                I = I.return;
              } while (I !== null);
              throw Error(g(171));
            }
            if (o.tag === 1) {
              var V = o.type;
              if (Ft(V)) {
                o = yn(o, V, I);
                break e;
              }
            }
            o = I;
          } else
            o = Yn;
        return a.context === null ? a.context = o : a.pendingContext = o, a = Fr(w, T), a.payload = { element: r }, v = v === void 0 ? null : v, v !== null && (a.callback = v), Gr(_, a), nn(_, T, w), T;
      }, l;
    };
  }(kf)), kf.exports;
}
fp.exports = c0();
var p0 = fp.exports;
const g0 = /* @__PURE__ */ Rc(p0);
var Cc = {
  children: !0,
  ref: !0,
  key: !0,
  style: !0,
  forwardedRef: !0,
  unstable_applyCache: !0,
  unstable_applyDrawHitFromCache: !0
}, kc = !1, xc = !1, Qd = ".react-konva-event", v0 = `ReactKonva: You have a Konva node with draggable = true and position defined but no onDragMove or onDragEnd events are handled.
Position of a node will be changed during drag&drop, so you should update state of the react app as well.
Consider to add onDragMove or onDragEnd events.
For more info see: https://github.com/konvajs/react-konva/issues/256
`, m0 = `ReactKonva: You are using "zIndex" attribute for a Konva node.
react-konva may get confused with ordering. Just define correct order of elements in your render function of a component.
For more info see: https://github.com/konvajs/react-konva/issues/194
`, y0 = {};
function Lf(d, t) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : y0;
  if (t === i && console.error("same props"), !kc && "zIndex" in t && (console.warn(m0), kc = !0), !xc && t.draggable) {
    var l = t.x !== void 0 || t.y !== void 0, f = t.onDragEnd || t.onDragMove;
    l && !f && (console.warn(v0), xc = !0);
  }
  for (var h in i)
    if (!Cc[h]) {
      var p = h.slice(0, 2) === "on", g = i[h] !== t[h];
      if (p && g) {
        var y = h.substr(2).toLowerCase();
        y.substr(0, 7) === "content" && (y = "content" + y.substr(7, 1).toUpperCase() + y.substr(8)), d.off(y, i[h]);
      }
      var S = !t.hasOwnProperty(h);
      S && d.setAttr(h, void 0);
    }
  var k = t._useStrictMode, E = {}, x = !1, N = {};
  for (var h in t)
    if (!Cc[h]) {
      var p = h.slice(0, 2) === "on", P = i[h] !== t[h];
      if (p && P) {
        var y = h.substr(2).toLowerCase();
        y.substr(0, 7) === "content" && (y = "content" + y.substr(7, 1).toUpperCase() + y.substr(8)), t[h] && (N[y] = t[h]);
      }
      !p && (t[h] !== i[h] || k && t[h] !== d.getAttr(h)) && (x = !0, E[h] = t[h]);
    }
  x && (d.setAttrs(E), za(d));
  for (var y in N)
    d.on(y + Qd, N[y]);
}
function za(d) {
  if (!ke.autoDrawEnabled) {
    var t = d.getLayer() || d.getStage();
    t && t.batchDraw();
  }
}
var hp = {}, _0 = {};
_s.Node.prototype._applyProps = Lf;
function S0(d, t) {
  if (typeof t == "string") {
    console.error("Do not use plain text as child of Konva.Node. You are using text: " + t);
    return;
  }
  d.add(t), za(d);
}
function w0(d, t, i) {
  var l = _s[d];
  l || (console.error("Konva has no node with the type " + d + '. Group will be used instead. If you use minimal version of react-konva, just import required nodes into Konva: "import "konva/lib/shapes/' + d + '"  If you want to render DOM elements as part of canvas tree take a look into this demo: https://konvajs.github.io/docs/react/DOM_Portal.html'), l = _s.Group);
  var f = {}, h = {};
  for (var p in t) {
    var g = p.slice(0, 2) === "on";
    g ? h[p] = t[p] : f[p] = t[p];
  }
  var y = new l(f);
  return Lf(y, h), y;
}
function C0(d, t, i) {
  console.error('Text components are not supported for now in ReactKonva. Your text is: "' + d + '"');
}
function k0(d, t, i) {
  return !1;
}
function x0(d) {
  return d;
}
function E0() {
  return null;
}
function P0() {
  return null;
}
function T0(d, t, i, l) {
  return _0;
}
function R0() {
}
function M0(d) {
}
function L0(d, t) {
  return !1;
}
function N0() {
  return hp;
}
function A0() {
  return hp;
}
var O0 = setTimeout, I0 = clearTimeout, z0 = -1;
function D0(d, t) {
  return !1;
}
var F0 = !1, G0 = !0, B0 = !0;
function U0(d, t) {
  t.parent === d ? t.moveToTop() : d.add(t), za(d);
}
function H0(d, t) {
  t.parent === d ? t.moveToTop() : d.add(t), za(d);
}
function cp(d, t, i) {
  t._remove(), d.add(t), t.setZIndex(i.getZIndex()), za(d);
}
function j0(d, t, i) {
  cp(d, t, i);
}
function W0(d, t) {
  t.destroy(), t.off(Qd), za(d);
}
function V0(d, t) {
  t.destroy(), t.off(Qd), za(d);
}
function Y0(d, t, i) {
  console.error('Text components are not yet supported in ReactKonva. You text is: "' + i + '"');
}
function Q0(d, t, i) {
}
function X0(d, t, i, l, f) {
  Lf(d, f, l);
}
function K0(d) {
  d.hide(), za(d);
}
function q0(d) {
}
function J0(d, t) {
  (t.visible == null || t.visible) && d.show();
}
function Z0(d, t) {
}
function $0(d) {
}
const b0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  appendChild: U0,
  appendChildToContainer: H0,
  appendInitialChild: S0,
  cancelTimeout: I0,
  clearContainer: $0,
  commitMount: Q0,
  commitTextUpdate: Y0,
  commitUpdate: X0,
  createInstance: w0,
  createTextInstance: C0,
  finalizeInitialChildren: k0,
  getChildHostContext: A0,
  getPublicInstance: x0,
  getRootHostContext: N0,
  hideInstance: K0,
  hideTextInstance: q0,
  idlePriority: xf.unstable_IdlePriority,
  insertBefore: cp,
  insertInContainerBefore: j0,
  isPrimaryRenderer: F0,
  noTimeout: z0,
  now: xf.unstable_now,
  prepareForCommit: E0,
  preparePortalMount: P0,
  prepareUpdate: T0,
  removeChild: W0,
  removeChildFromContainer: V0,
  resetAfterCommit: R0,
  resetTextContent: M0,
  run: xf.unstable_runWithPriority,
  scheduleTimeout: O0,
  shouldDeprioritizeSubtree: L0,
  shouldSetTextContent: D0,
  supportsMutation: B0,
  unhideInstance: J0,
  unhideTextInstance: Z0,
  warnsIfNotActing: G0
}, Symbol.toStringTag, { value: "Module" }));
var em = Object.assign || function(d) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t];
    for (var l in i)
      Object.prototype.hasOwnProperty.call(i, l) && (d[l] = i[l]);
  }
  return d;
};
function tm(d) {
  var t = Tr.useRef();
  return Tr.useLayoutEffect(function() {
    t.current = d;
  }), t.current;
}
var nm = function(t) {
  var i = Tr.useRef(), l = Tr.useRef(), f = Tr.useRef(), h = tm(t), p = function(y) {
    var S = t.forwardedRef;
    S && (typeof S == "function" ? S(y) : S.current = y);
  };
  return Tr.useLayoutEffect(function() {
    return l.current = new _s.Stage({
      width: t.width,
      height: t.height,
      container: i.current
    }), p(l.current), f.current = Vo.createContainer(l.current), Vo.updateContainer(t.children, f.current), function() {
      _s.isBrowser && (p(null), Vo.updateContainer(null, f.current, null), l.current.destroy());
    };
  }, []), Tr.useLayoutEffect(function() {
    p(l.current), Lf(l.current, t, h), Vo.updateContainer(t.children, f.current, null);
  }), Tr.createElement("div", {
    ref: i,
    accessKey: t.accessKey,
    className: t.className,
    role: t.role,
    style: t.style,
    tabIndex: t.tabIndex,
    title: t.title
  });
}, rm = "Layer", im = "Group", am = "Circle", sm = "Line", lm = "Image", Vo = g0(b0);
Vo.injectIntoDevTools({
  findHostInstanceByFiber: function() {
    return null;
  },
  bundleType: 0,
  version: Tr.version,
  rendererPackageName: "react-konva"
});
var om = Tr.forwardRef(function(d, t) {
  return Tr.createElement(nm, em({}, d, { forwardedRef: t }));
});
const Ec = ({ name: d, onClick: t }) => /* @__PURE__ */ on.jsx(
  "button",
  {
    style: {
      margin: 8,
      padding: "10px 16px",
      color: "white",
      backgroundColor: "#FF019A",
      border: "none",
      borderRadius: ".4rem"
    },
    onClick: t,
    children: d
  }
), um = (d, t, i, l) => {
  let f = l.x, h = l.y;
  return l.x + i > d && (f = d), l.x - i < 0 && (f = 0), l.y + i > t && (h = t), l.y - i < 0 && (h = 0), { x: f, y: h };
}, Pc = (d) => d.reduce((t, i) => (t[0] = t[0] === void 0 || i < t[0] ? i : t[0], t[1] = t[1] === void 0 || i > t[1] ? i : t[1], t), []), fm = (d) => {
  const {
    points: t,
    flattenedPoints: i,
    isFinished: l,
    handlePointDragMove: f,
    handleGroupDragEnd: h,
    handleMouseOverStartPoint: p,
    handleMouseOutStartPoint: g
  } = d, y = 6, [S, k] = ln.useState(), E = (Q) => {
    l && (Q.target.getStage().container().style.cursor = "move", k(Q.target.getStage()));
  }, x = (Q) => {
    Q.target.getStage().container().style.cursor = "default";
  }, [N, P] = ln.useState([0, 0]), [B, z] = ln.useState([0, 0]), Z = (Q) => {
    let K = t.map((J) => J[0]), se = t.map((J) => J[1]);
    P(Pc(K)), z(Pc(se));
  }, X = (Q) => {
    let { x: K, y: se } = Q;
    const J = S.width(), de = S.height();
    return B[0] + se < 0 && (se = -1 * B[0]), N[0] + K < 0 && (K = -1 * N[0]), B[1] + se > de && (se = de - B[1]), N[1] + K > J && (K = J - N[1]), { x: K, y: se };
  };
  return /* @__PURE__ */ on.jsxs(
    im,
    {
      name: "polygon",
      draggable: l,
      onDragStart: Z,
      onDragEnd: h,
      dragBoundFunc: X,
      onMouseOver: E,
      onMouseOut: x,
      children: [
        /* @__PURE__ */ on.jsx(
          sm,
          {
            points: i,
            stroke: "#00F1FF",
            strokeWidth: 3,
            closed: l,
            fill: "rgb(140,30,255,0.5)"
          }
        ),
        t.map((Q, K) => {
          const se = Q[0] - y / 2, J = Q[1] - y / 2, de = K === 0 ? {
            hitStrokeWidth: 12,
            onMouseOver: p,
            onMouseOut: g
          } : null;
          return /* @__PURE__ */ on.jsx(
            am,
            gd({
              x: se,
              y: J,
              radius: y,
              fill: "#FF019A",
              stroke: "#00F1FF",
              strokeWidth: 2,
              draggable: !0,
              onDragMove: f,
              dragBoundFunc: (oe) => um(S.width(), S.height(), y, oe)
            }, de),
            K
          );
        })
      ]
    }
  );
}, Tc = "./space_landscape.jpg", dm = {
  display: "flex",
  justifyContent: "center",
  marginTop: 20,
  backgroundColor: "aliceblue"
}, hm = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 20,
  backgroundColor: "aliceblue"
}, cm = ({
  username: d,
  shouldDisplayMentions: t
}) => {
  const [i, l] = ln.useState(), f = ln.useRef(null), h = ln.useRef(null), [p, g] = ln.useState([]), [y, S] = ln.useState({}), [k, E] = ln.useState(), [x, N] = ln.useState([0, 0]), [P, B] = ln.useState(!1), [z, Z] = ln.useState(!1), X = ln.useMemo(() => {
    const b = new window.Image();
    return b.width = 650, b.height = 302, b.src = Tc, b;
  }, [Tc]);
  ln.useEffect(() => {
    const b = function() {
      S({
        width: X.width,
        height: X.height
      }), l(X), f.current = X;
    };
    return X.addEventListener("load", b), () => {
      X.removeEventListener("load", b);
    };
  }, [X]);
  const Q = (b) => [b.getPointerPosition().x, b.getPointerPosition().y], K = (b) => {
    if (z)
      return;
    const te = b.target.getStage(), Ne = Q(te);
    P && p.length >= 3 ? Z(!0) : g([...p, Ne]);
  }, se = (b) => {
    const te = b.target.getStage(), Ne = Q(te);
    N(Ne);
  }, J = (b) => {
    z || p.length < 3 || (b.target.scale({ x: 3, y: 3 }), B(!0));
  }, de = (b) => {
    b.target.scale({ x: 1, y: 1 }), B(!1);
  }, oe = (b) => {
    const te = b.target.getStage(), Ne = b.target.index - 1, Ie = [b.target._lastPos.x, b.target._lastPos.y];
    Ie[0] < 0 && (Ie[0] = 0), Ie[1] < 0 && (Ie[1] = 0), Ie[0] > te.width() && (Ie[0] = te.width()), Ie[1] > te.height() && (Ie[1] = te.height()), g([...p.slice(0, Ne), Ie, ...p.slice(Ne + 1)]);
  };
  ln.useEffect(() => {
    E(
      p.concat(z ? [] : x).reduce((b, te) => b.concat(te), [])
    );
  }, [p, z, x]);
  const ae = () => {
    g(p.slice(0, -1)), Z(!1), N(p[p.length - 1]);
  }, pe = () => {
    g([]), Z(!1);
  }, me = (b) => {
    if (b.target.name() === "polygon") {
      let te = [];
      [...p].map(
        (Ie) => te.push([Ie[0] + b.target.x(), Ie[1] + b.target.y()])
      ), b.target.position({ x: 0, y: 0 }), g(te);
    }
  };
  return /* @__PURE__ */ on.jsxs("div", { style: dm, children: [
    /* @__PURE__ */ on.jsxs("div", { style: hm, children: [
      /* @__PURE__ */ on.jsx(
        om,
        {
          width: y.width || 650,
          height: y.height || 302,
          onMouseMove: se,
          onMouseDown: K,
          children: /* @__PURE__ */ on.jsxs(rm, { children: [
            /* @__PURE__ */ on.jsx(
              lm,
              {
                ref: f,
                image: i,
                x: 0,
                y: 0,
                width: y.width,
                height: y.height
              }
            ),
            /* @__PURE__ */ on.jsx(
              fm,
              {
                points: p,
                flattenedPoints: k,
                handlePointDragMove: oe,
                handleGroupDragEnd: me,
                handleMouseOverStartPoint: J,
                handleMouseOutStartPoint: de,
                isFinished: z
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ on.jsxs(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: [
            /* @__PURE__ */ on.jsx(Ec, { name: "Undo", onClick: ae }),
            /* @__PURE__ */ on.jsx(Ec, { name: "Reset", onClick: pe })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ on.jsx(
      "div",
      {
        ref: h,
        style: {
          width: 375,
          height: 302,
          boxShadow: ".5px .5px 5px .4em rgba(0,0,0,.1)",
          marginTop: 20
        },
        children: /* @__PURE__ */ on.jsx("pre", { style: { whiteSpace: "pre-wrap" }, children: JSON.stringify(p) })
      }
    )
  ] });
}, pm = (d) => d.replace(/-([a-z])/g, (t, i) => i.toUpperCase());
class gm extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const t = this.getPropsFromAttributes();
    Ld.createRoot(this.shadowRoot).render(/* @__PURE__ */ on.jsx(cm, gd({}, t)));
  }
  getPropsFromAttributes() {
    const t = {};
    for (let i = 0; i < this.attributes.length; i++) {
      const l = this.attributes[i];
      t[pm(l.name)] = l.value;
    }
    return t;
  }
}
customElements.define("polygon-canvas", gm);
