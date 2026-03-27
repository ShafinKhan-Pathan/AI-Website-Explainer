var g0 = { exports: {} }, Zp = {}, Xm = { exports: {} }, wt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eb;
function a_() {
  if (eb) return wt;
  eb = 1;
  var B = Symbol.for("react.element"), Q = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), Xe = Symbol.for("react.strict_mode"), Ke = Symbol.for("react.profiler"), Ze = Symbol.for("react.provider"), S = Symbol.for("react.context"), We = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), ue = Symbol.for("react.memo"), Ge = Symbol.for("react.lazy"), Z = Symbol.iterator;
  function ye(k) {
    return k === null || typeof k != "object" ? null : (k = Z && k[Z] || k["@@iterator"], typeof k == "function" ? k : null);
  }
  var te = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Ae = Object.assign, je = {};
  function Je(k, P, Ve) {
    this.props = k, this.context = P, this.refs = je, this.updater = Ve || te;
  }
  Je.prototype.isReactComponent = {}, Je.prototype.setState = function(k, P) {
    if (typeof k != "object" && typeof k != "function" && k != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, k, P, "setState");
  }, Je.prototype.forceUpdate = function(k) {
    this.updater.enqueueForceUpdate(this, k, "forceUpdate");
  };
  function Rt() {
  }
  Rt.prototype = Je.prototype;
  function rt(k, P, Ve) {
    this.props = k, this.context = P, this.refs = je, this.updater = Ve || te;
  }
  var He = rt.prototype = new Rt();
  He.constructor = rt, Ae(He, Je.prototype), He.isPureReactComponent = !0;
  var mt = Array.isArray, ce = Object.prototype.hasOwnProperty, et = { current: null }, Pe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ln(k, P, Ve) {
    var Ue, dt = {}, ut = null, it = null;
    if (P != null) for (Ue in P.ref !== void 0 && (it = P.ref), P.key !== void 0 && (ut = "" + P.key), P) ce.call(P, Ue) && !Pe.hasOwnProperty(Ue) && (dt[Ue] = P[Ue]);
    var ot = arguments.length - 2;
    if (ot === 1) dt.children = Ve;
    else if (1 < ot) {
      for (var pt = Array(ot), It = 0; It < ot; It++) pt[It] = arguments[It + 2];
      dt.children = pt;
    }
    if (k && k.defaultProps) for (Ue in ot = k.defaultProps, ot) dt[Ue] === void 0 && (dt[Ue] = ot[Ue]);
    return { $$typeof: B, type: k, key: ut, ref: it, props: dt, _owner: et.current };
  }
  function Pt(k, P) {
    return { $$typeof: B, type: k.type, key: P, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function Jt(k) {
    return typeof k == "object" && k !== null && k.$$typeof === B;
  }
  function un(k) {
    var P = { "=": "=0", ":": "=2" };
    return "$" + k.replace(/[=:]/g, function(Ve) {
      return P[Ve];
    });
  }
  var _t = /\/+/g;
  function De(k, P) {
    return typeof k == "object" && k !== null && k.key != null ? un("" + k.key) : P.toString(36);
  }
  function Ft(k, P, Ve, Ue, dt) {
    var ut = typeof k;
    (ut === "undefined" || ut === "boolean") && (k = null);
    var it = !1;
    if (k === null) it = !0;
    else switch (ut) {
      case "string":
      case "number":
        it = !0;
        break;
      case "object":
        switch (k.$$typeof) {
          case B:
          case Q:
            it = !0;
        }
    }
    if (it) return it = k, dt = dt(it), k = Ue === "" ? "." + De(it, 0) : Ue, mt(dt) ? (Ve = "", k != null && (Ve = k.replace(_t, "$&/") + "/"), Ft(dt, P, Ve, "", function(It) {
      return It;
    })) : dt != null && (Jt(dt) && (dt = Pt(dt, Ve + (!dt.key || it && it.key === dt.key ? "" : ("" + dt.key).replace(_t, "$&/") + "/") + k)), P.push(dt)), 1;
    if (it = 0, Ue = Ue === "" ? "." : Ue + ":", mt(k)) for (var ot = 0; ot < k.length; ot++) {
      ut = k[ot];
      var pt = Ue + De(ut, ot);
      it += Ft(ut, P, Ve, pt, dt);
    }
    else if (pt = ye(k), typeof pt == "function") for (k = pt.call(k), ot = 0; !(ut = k.next()).done; ) ut = ut.value, pt = Ue + De(ut, ot++), it += Ft(ut, P, Ve, pt, dt);
    else if (ut === "object") throw P = String(k), Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
    return it;
  }
  function Dt(k, P, Ve) {
    if (k == null) return k;
    var Ue = [], dt = 0;
    return Ft(k, Ue, "", "", function(ut) {
      return P.call(Ve, ut, dt++);
    }), Ue;
  }
  function Lt(k) {
    if (k._status === -1) {
      var P = k._result;
      P = P(), P.then(function(Ve) {
        (k._status === 0 || k._status === -1) && (k._status = 1, k._result = Ve);
      }, function(Ve) {
        (k._status === 0 || k._status === -1) && (k._status = 2, k._result = Ve);
      }), k._status === -1 && (k._status = 0, k._result = P);
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var Ce = { current: null }, J = { transition: null }, be = { ReactCurrentDispatcher: Ce, ReactCurrentBatchConfig: J, ReactCurrentOwner: et };
  function re() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return wt.Children = { map: Dt, forEach: function(k, P, Ve) {
    Dt(k, function() {
      P.apply(this, arguments);
    }, Ve);
  }, count: function(k) {
    var P = 0;
    return Dt(k, function() {
      P++;
    }), P;
  }, toArray: function(k) {
    return Dt(k, function(P) {
      return P;
    }) || [];
  }, only: function(k) {
    if (!Jt(k)) throw Error("React.Children.only expected to receive a single React element child.");
    return k;
  } }, wt.Component = Je, wt.Fragment = N, wt.Profiler = Ke, wt.PureComponent = rt, wt.StrictMode = Xe, wt.Suspense = ie, wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = be, wt.act = re, wt.cloneElement = function(k, P, Ve) {
    if (k == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + k + ".");
    var Ue = Ae({}, k.props), dt = k.key, ut = k.ref, it = k._owner;
    if (P != null) {
      if (P.ref !== void 0 && (ut = P.ref, it = et.current), P.key !== void 0 && (dt = "" + P.key), k.type && k.type.defaultProps) var ot = k.type.defaultProps;
      for (pt in P) ce.call(P, pt) && !Pe.hasOwnProperty(pt) && (Ue[pt] = P[pt] === void 0 && ot !== void 0 ? ot[pt] : P[pt]);
    }
    var pt = arguments.length - 2;
    if (pt === 1) Ue.children = Ve;
    else if (1 < pt) {
      ot = Array(pt);
      for (var It = 0; It < pt; It++) ot[It] = arguments[It + 2];
      Ue.children = ot;
    }
    return { $$typeof: B, type: k.type, key: dt, ref: ut, props: Ue, _owner: it };
  }, wt.createContext = function(k) {
    return k = { $$typeof: S, _currentValue: k, _currentValue2: k, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, k.Provider = { $$typeof: Ze, _context: k }, k.Consumer = k;
  }, wt.createElement = ln, wt.createFactory = function(k) {
    var P = ln.bind(null, k);
    return P.type = k, P;
  }, wt.createRef = function() {
    return { current: null };
  }, wt.forwardRef = function(k) {
    return { $$typeof: We, render: k };
  }, wt.isValidElement = Jt, wt.lazy = function(k) {
    return { $$typeof: Ge, _payload: { _status: -1, _result: k }, _init: Lt };
  }, wt.memo = function(k, P) {
    return { $$typeof: ue, type: k, compare: P === void 0 ? null : P };
  }, wt.startTransition = function(k) {
    var P = J.transition;
    J.transition = {};
    try {
      k();
    } finally {
      J.transition = P;
    }
  }, wt.unstable_act = re, wt.useCallback = function(k, P) {
    return Ce.current.useCallback(k, P);
  }, wt.useContext = function(k) {
    return Ce.current.useContext(k);
  }, wt.useDebugValue = function() {
  }, wt.useDeferredValue = function(k) {
    return Ce.current.useDeferredValue(k);
  }, wt.useEffect = function(k, P) {
    return Ce.current.useEffect(k, P);
  }, wt.useId = function() {
    return Ce.current.useId();
  }, wt.useImperativeHandle = function(k, P, Ve) {
    return Ce.current.useImperativeHandle(k, P, Ve);
  }, wt.useInsertionEffect = function(k, P) {
    return Ce.current.useInsertionEffect(k, P);
  }, wt.useLayoutEffect = function(k, P) {
    return Ce.current.useLayoutEffect(k, P);
  }, wt.useMemo = function(k, P) {
    return Ce.current.useMemo(k, P);
  }, wt.useReducer = function(k, P, Ve) {
    return Ce.current.useReducer(k, P, Ve);
  }, wt.useRef = function(k) {
    return Ce.current.useRef(k);
  }, wt.useState = function(k) {
    return Ce.current.useState(k);
  }, wt.useSyncExternalStore = function(k, P, Ve) {
    return Ce.current.useSyncExternalStore(k, P, Ve);
  }, wt.useTransition = function() {
    return Ce.current.useTransition();
  }, wt.version = "18.3.1", wt;
}
var nv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
nv.exports;
var tb;
function i_() {
  return tb || (tb = 1, function(B, Q) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var N = "18.3.1", Xe = Symbol.for("react.element"), Ke = Symbol.for("react.portal"), Ze = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), We = Symbol.for("react.profiler"), ie = Symbol.for("react.provider"), ue = Symbol.for("react.context"), Ge = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), ye = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), Ae = Symbol.for("react.lazy"), je = Symbol.for("react.offscreen"), Je = Symbol.iterator, Rt = "@@iterator";
      function rt(h) {
        if (h === null || typeof h != "object")
          return null;
        var E = Je && h[Je] || h[Rt];
        return typeof E == "function" ? E : null;
      }
      var He = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, mt = {
        transition: null
      }, ce = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, et = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Pe = {}, ln = null;
      function Pt(h) {
        ln = h;
      }
      Pe.setExtraStackFrame = function(h) {
        ln = h;
      }, Pe.getCurrentStack = null, Pe.getStackAddendum = function() {
        var h = "";
        ln && (h += ln);
        var E = Pe.getCurrentStack;
        return E && (h += E() || ""), h;
      };
      var Jt = !1, un = !1, _t = !1, De = !1, Ft = !1, Dt = {
        ReactCurrentDispatcher: He,
        ReactCurrentBatchConfig: mt,
        ReactCurrentOwner: et
      };
      Dt.ReactDebugCurrentFrame = Pe, Dt.ReactCurrentActQueue = ce;
      function Lt(h) {
        {
          for (var E = arguments.length, z = new Array(E > 1 ? E - 1 : 0), j = 1; j < E; j++)
            z[j - 1] = arguments[j];
          J("warn", h, z);
        }
      }
      function Ce(h) {
        {
          for (var E = arguments.length, z = new Array(E > 1 ? E - 1 : 0), j = 1; j < E; j++)
            z[j - 1] = arguments[j];
          J("error", h, z);
        }
      }
      function J(h, E, z) {
        {
          var j = Dt.ReactDebugCurrentFrame, K = j.getStackAddendum();
          K !== "" && (E += "%s", z = z.concat([K]));
          var Oe = z.map(function(ae) {
            return String(ae);
          });
          Oe.unshift("Warning: " + E), Function.prototype.apply.call(console[h], console, Oe);
        }
      }
      var be = {};
      function re(h, E) {
        {
          var z = h.constructor, j = z && (z.displayName || z.name) || "ReactClass", K = j + "." + E;
          if (be[K])
            return;
          Ce("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", E, j), be[K] = !0;
        }
      }
      var k = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, E, z) {
          re(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, E, z, j) {
          re(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, E, z, j) {
          re(h, "setState");
        }
      }, P = Object.assign, Ve = {};
      Object.freeze(Ve);
      function Ue(h, E, z) {
        this.props = h, this.context = E, this.refs = Ve, this.updater = z || k;
      }
      Ue.prototype.isReactComponent = {}, Ue.prototype.setState = function(h, E) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, E, "setState");
      }, Ue.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var dt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ut = function(h, E) {
          Object.defineProperty(Ue.prototype, h, {
            get: function() {
              Lt("%s(...) is deprecated in plain JavaScript React classes. %s", E[0], E[1]);
            }
          });
        };
        for (var it in dt)
          dt.hasOwnProperty(it) && ut(it, dt[it]);
      }
      function ot() {
      }
      ot.prototype = Ue.prototype;
      function pt(h, E, z) {
        this.props = h, this.context = E, this.refs = Ve, this.updater = z || k;
      }
      var It = pt.prototype = new ot();
      It.constructor = pt, P(It, Ue.prototype), It.isPureReactComponent = !0;
      function On() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var Rr = Array.isArray;
      function En(h) {
        return Rr(h);
      }
      function nr(h) {
        {
          var E = typeof Symbol == "function" && Symbol.toStringTag, z = E && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return z;
        }
      }
      function Vn(h) {
        try {
          return Bn(h), !1;
        } catch {
          return !0;
        }
      }
      function Bn(h) {
        return "" + h;
      }
      function Yr(h) {
        if (Vn(h))
          return Ce("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(h)), Bn(h);
      }
      function ci(h, E, z) {
        var j = h.displayName;
        if (j)
          return j;
        var K = E.displayName || E.name || "";
        return K !== "" ? z + "(" + K + ")" : z;
      }
      function oa(h) {
        return h.displayName || "Context";
      }
      function qn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Ce("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Ze:
            return "Fragment";
          case Ke:
            return "Portal";
          case We:
            return "Profiler";
          case S:
            return "StrictMode";
          case Z:
            return "Suspense";
          case ye:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ue:
              var E = h;
              return oa(E) + ".Consumer";
            case ie:
              var z = h;
              return oa(z._context) + ".Provider";
            case Ge:
              return ci(h, h.render, "ForwardRef");
            case te:
              var j = h.displayName || null;
              return j !== null ? j : qn(h.type) || "Memo";
            case Ae: {
              var K = h, Oe = K._payload, ae = K._init;
              try {
                return qn(ae(Oe));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Cn = Object.prototype.hasOwnProperty, In = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, gr, $a, Ln;
      Ln = {};
      function Sr(h) {
        if (Cn.call(h, "ref")) {
          var E = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (E && E.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function sa(h) {
        if (Cn.call(h, "key")) {
          var E = Object.getOwnPropertyDescriptor(h, "key").get;
          if (E && E.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Qa(h, E) {
        var z = function() {
          gr || (gr = !0, Ce("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: z,
          configurable: !0
        });
      }
      function fi(h, E) {
        var z = function() {
          $a || ($a = !0, Ce("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: z,
          configurable: !0
        });
      }
      function ee(h) {
        if (typeof h.ref == "string" && et.current && h.__self && et.current.stateNode !== h.__self) {
          var E = qn(et.current.type);
          Ln[E] || (Ce('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E, h.ref), Ln[E] = !0);
        }
      }
      var xe = function(h, E, z, j, K, Oe, ae) {
        var Me = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Xe,
          // Built-in properties that belong on the element
          type: h,
          key: E,
          ref: z,
          props: ae,
          // Record the component responsible for creating this element.
          _owner: Oe
        };
        return Me._store = {}, Object.defineProperty(Me._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Me, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: j
        }), Object.defineProperty(Me, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: K
        }), Object.freeze && (Object.freeze(Me.props), Object.freeze(Me)), Me;
      };
      function st(h, E, z) {
        var j, K = {}, Oe = null, ae = null, Me = null, gt = null;
        if (E != null) {
          Sr(E) && (ae = E.ref, ee(E)), sa(E) && (Yr(E.key), Oe = "" + E.key), Me = E.__self === void 0 ? null : E.__self, gt = E.__source === void 0 ? null : E.__source;
          for (j in E)
            Cn.call(E, j) && !In.hasOwnProperty(j) && (K[j] = E[j]);
        }
        var kt = arguments.length - 2;
        if (kt === 1)
          K.children = z;
        else if (kt > 1) {
          for (var rn = Array(kt), Wt = 0; Wt < kt; Wt++)
            rn[Wt] = arguments[Wt + 2];
          Object.freeze && Object.freeze(rn), K.children = rn;
        }
        if (h && h.defaultProps) {
          var ct = h.defaultProps;
          for (j in ct)
            K[j] === void 0 && (K[j] = ct[j]);
        }
        if (Oe || ae) {
          var Gt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Oe && Qa(K, Gt), ae && fi(K, Gt);
        }
        return xe(h, Oe, ae, Me, gt, et.current, K);
      }
      function Ht(h, E) {
        var z = xe(h.type, E, h.ref, h._self, h._source, h._owner, h.props);
        return z;
      }
      function en(h, E, z) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var j, K = P({}, h.props), Oe = h.key, ae = h.ref, Me = h._self, gt = h._source, kt = h._owner;
        if (E != null) {
          Sr(E) && (ae = E.ref, kt = et.current), sa(E) && (Yr(E.key), Oe = "" + E.key);
          var rn;
          h.type && h.type.defaultProps && (rn = h.type.defaultProps);
          for (j in E)
            Cn.call(E, j) && !In.hasOwnProperty(j) && (E[j] === void 0 && rn !== void 0 ? K[j] = rn[j] : K[j] = E[j]);
        }
        var Wt = arguments.length - 2;
        if (Wt === 1)
          K.children = z;
        else if (Wt > 1) {
          for (var ct = Array(Wt), Gt = 0; Gt < Wt; Gt++)
            ct[Gt] = arguments[Gt + 2];
          K.children = ct;
        }
        return xe(h.type, Oe, ae, Me, gt, kt, K);
      }
      function vn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Xe;
      }
      var on = ".", Xn = ":";
      function tn(h) {
        var E = /[=:]/g, z = {
          "=": "=0",
          ":": "=2"
        }, j = h.replace(E, function(K) {
          return z[K];
        });
        return "$" + j;
      }
      var Yt = !1, $t = /\/+/g;
      function ca(h) {
        return h.replace($t, "$&/");
      }
      function wr(h, E) {
        return typeof h == "object" && h !== null && h.key != null ? (Yr(h.key), tn("" + h.key)) : E.toString(36);
      }
      function ba(h, E, z, j, K) {
        var Oe = typeof h;
        (Oe === "undefined" || Oe === "boolean") && (h = null);
        var ae = !1;
        if (h === null)
          ae = !0;
        else
          switch (Oe) {
            case "string":
            case "number":
              ae = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Xe:
                case Ke:
                  ae = !0;
              }
          }
        if (ae) {
          var Me = h, gt = K(Me), kt = j === "" ? on + wr(Me, 0) : j;
          if (En(gt)) {
            var rn = "";
            kt != null && (rn = ca(kt) + "/"), ba(gt, E, rn, "", function(Xf) {
              return Xf;
            });
          } else gt != null && (vn(gt) && (gt.key && (!Me || Me.key !== gt.key) && Yr(gt.key), gt = Ht(
            gt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            z + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (gt.key && (!Me || Me.key !== gt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ca("" + gt.key) + "/"
            ) : "") + kt
          )), E.push(gt));
          return 1;
        }
        var Wt, ct, Gt = 0, hn = j === "" ? on : j + Xn;
        if (En(h))
          for (var Cl = 0; Cl < h.length; Cl++)
            Wt = h[Cl], ct = hn + wr(Wt, Cl), Gt += ba(Wt, E, z, ct, K);
        else {
          var qo = rt(h);
          if (typeof qo == "function") {
            var Bi = h;
            qo === Bi.entries && (Yt || Lt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Yt = !0);
            for (var Xo = qo.call(Bi), ou, qf = 0; !(ou = Xo.next()).done; )
              Wt = ou.value, ct = hn + wr(Wt, qf++), Gt += ba(Wt, E, z, ct, K);
          } else if (Oe === "object") {
            var oc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (oc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : oc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Gt;
      }
      function Hi(h, E, z) {
        if (h == null)
          return h;
        var j = [], K = 0;
        return ba(h, j, "", "", function(Oe) {
          return E.call(z, Oe, K++);
        }), j;
      }
      function Jl(h) {
        var E = 0;
        return Hi(h, function() {
          E++;
        }), E;
      }
      function eu(h, E, z) {
        Hi(h, function() {
          E.apply(this, arguments);
        }, z);
      }
      function pl(h) {
        return Hi(h, function(E) {
          return E;
        }) || [];
      }
      function vl(h) {
        if (!vn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function tu(h) {
        var E = {
          $$typeof: ue,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        E.Provider = {
          $$typeof: ie,
          _context: E
        };
        var z = !1, j = !1, K = !1;
        {
          var Oe = {
            $$typeof: ue,
            _context: E
          };
          Object.defineProperties(Oe, {
            Provider: {
              get: function() {
                return j || (j = !0, Ce("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), E.Provider;
              },
              set: function(ae) {
                E.Provider = ae;
              }
            },
            _currentValue: {
              get: function() {
                return E._currentValue;
              },
              set: function(ae) {
                E._currentValue = ae;
              }
            },
            _currentValue2: {
              get: function() {
                return E._currentValue2;
              },
              set: function(ae) {
                E._currentValue2 = ae;
              }
            },
            _threadCount: {
              get: function() {
                return E._threadCount;
              },
              set: function(ae) {
                E._threadCount = ae;
              }
            },
            Consumer: {
              get: function() {
                return z || (z = !0, Ce("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), E.Consumer;
              }
            },
            displayName: {
              get: function() {
                return E.displayName;
              },
              set: function(ae) {
                K || (Lt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ae), K = !0);
              }
            }
          }), E.Consumer = Oe;
        }
        return E._currentRenderer = null, E._currentRenderer2 = null, E;
      }
      var Tr = -1, kr = 0, rr = 1, di = 2;
      function Wa(h) {
        if (h._status === Tr) {
          var E = h._result, z = E();
          if (z.then(function(Oe) {
            if (h._status === kr || h._status === Tr) {
              var ae = h;
              ae._status = rr, ae._result = Oe;
            }
          }, function(Oe) {
            if (h._status === kr || h._status === Tr) {
              var ae = h;
              ae._status = di, ae._result = Oe;
            }
          }), h._status === Tr) {
            var j = h;
            j._status = kr, j._result = z;
          }
        }
        if (h._status === rr) {
          var K = h._result;
          return K === void 0 && Ce(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, K), "default" in K || Ce(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, K), K.default;
        } else
          throw h._result;
      }
      function pi(h) {
        var E = {
          // We use these fields to store the result.
          _status: Tr,
          _result: h
        }, z = {
          $$typeof: Ae,
          _payload: E,
          _init: Wa
        };
        {
          var j, K;
          Object.defineProperties(z, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return j;
              },
              set: function(Oe) {
                Ce("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), j = Oe, Object.defineProperty(z, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return K;
              },
              set: function(Oe) {
                Ce("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), K = Oe, Object.defineProperty(z, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return z;
      }
      function vi(h) {
        h != null && h.$$typeof === te ? Ce("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Ce("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Ce("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Ce("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var E = {
          $$typeof: Ge,
          render: h
        };
        {
          var z;
          Object.defineProperty(E, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return z;
            },
            set: function(j) {
              z = j, !h.name && !h.displayName && (h.displayName = j);
            }
          });
        }
        return E;
      }
      var C;
      C = Symbol.for("react.module.reference");
      function I(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Ze || h === We || Ft || h === S || h === Z || h === ye || De || h === je || Jt || un || _t || typeof h == "object" && h !== null && (h.$$typeof === Ae || h.$$typeof === te || h.$$typeof === ie || h.$$typeof === ue || h.$$typeof === Ge || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === C || h.getModuleId !== void 0));
      }
      function le(h, E) {
        I(h) || Ce("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var z = {
          $$typeof: te,
          type: h,
          compare: E === void 0 ? null : E
        };
        {
          var j;
          Object.defineProperty(z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return j;
            },
            set: function(K) {
              j = K, !h.name && !h.displayName && (h.displayName = K);
            }
          });
        }
        return z;
      }
      function me() {
        var h = He.current;
        return h === null && Ce(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function tt(h) {
        var E = me();
        if (h._context !== void 0) {
          var z = h._context;
          z.Consumer === h ? Ce("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : z.Provider === h && Ce("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return E.useContext(h);
      }
      function $e(h) {
        var E = me();
        return E.useState(h);
      }
      function yt(h, E, z) {
        var j = me();
        return j.useReducer(h, E, z);
      }
      function vt(h) {
        var E = me();
        return E.useRef(h);
      }
      function bn(h, E) {
        var z = me();
        return z.useEffect(h, E);
      }
      function nn(h, E) {
        var z = me();
        return z.useInsertionEffect(h, E);
      }
      function sn(h, E) {
        var z = me();
        return z.useLayoutEffect(h, E);
      }
      function ar(h, E) {
        var z = me();
        return z.useCallback(h, E);
      }
      function Ga(h, E) {
        var z = me();
        return z.useMemo(h, E);
      }
      function qa(h, E, z) {
        var j = me();
        return j.useImperativeHandle(h, E, z);
      }
      function nt(h, E) {
        {
          var z = me();
          return z.useDebugValue(h, E);
        }
      }
      function lt() {
        var h = me();
        return h.useTransition();
      }
      function Xa(h) {
        var E = me();
        return E.useDeferredValue(h);
      }
      function nu() {
        var h = me();
        return h.useId();
      }
      function ru(h, E, z) {
        var j = me();
        return j.useSyncExternalStore(h, E, z);
      }
      var hl = 0, Wu, ml, $r, $o, _r, lc, uc;
      function Gu() {
      }
      Gu.__reactDisabledLog = !0;
      function yl() {
        {
          if (hl === 0) {
            Wu = console.log, ml = console.info, $r = console.warn, $o = console.error, _r = console.group, lc = console.groupCollapsed, uc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Gu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          hl++;
        }
      }
      function fa() {
        {
          if (hl--, hl === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: P({}, h, {
                value: Wu
              }),
              info: P({}, h, {
                value: ml
              }),
              warn: P({}, h, {
                value: $r
              }),
              error: P({}, h, {
                value: $o
              }),
              group: P({}, h, {
                value: _r
              }),
              groupCollapsed: P({}, h, {
                value: lc
              }),
              groupEnd: P({}, h, {
                value: uc
              })
            });
          }
          hl < 0 && Ce("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ka = Dt.ReactCurrentDispatcher, Za;
      function qu(h, E, z) {
        {
          if (Za === void 0)
            try {
              throw Error();
            } catch (K) {
              var j = K.stack.trim().match(/\n( *(at )?)/);
              Za = j && j[1] || "";
            }
          return `
` + Za + h;
        }
      }
      var au = !1, gl;
      {
        var Xu = typeof WeakMap == "function" ? WeakMap : Map;
        gl = new Xu();
      }
      function Ku(h, E) {
        if (!h || au)
          return "";
        {
          var z = gl.get(h);
          if (z !== void 0)
            return z;
        }
        var j;
        au = !0;
        var K = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Oe;
        Oe = Ka.current, Ka.current = null, yl();
        try {
          if (E) {
            var ae = function() {
              throw Error();
            };
            if (Object.defineProperty(ae.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ae, []);
              } catch (hn) {
                j = hn;
              }
              Reflect.construct(h, [], ae);
            } else {
              try {
                ae.call();
              } catch (hn) {
                j = hn;
              }
              h.call(ae.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (hn) {
              j = hn;
            }
            h();
          }
        } catch (hn) {
          if (hn && j && typeof hn.stack == "string") {
            for (var Me = hn.stack.split(`
`), gt = j.stack.split(`
`), kt = Me.length - 1, rn = gt.length - 1; kt >= 1 && rn >= 0 && Me[kt] !== gt[rn]; )
              rn--;
            for (; kt >= 1 && rn >= 0; kt--, rn--)
              if (Me[kt] !== gt[rn]) {
                if (kt !== 1 || rn !== 1)
                  do
                    if (kt--, rn--, rn < 0 || Me[kt] !== gt[rn]) {
                      var Wt = `
` + Me[kt].replace(" at new ", " at ");
                      return h.displayName && Wt.includes("<anonymous>") && (Wt = Wt.replace("<anonymous>", h.displayName)), typeof h == "function" && gl.set(h, Wt), Wt;
                    }
                  while (kt >= 1 && rn >= 0);
                break;
              }
          }
        } finally {
          au = !1, Ka.current = Oe, fa(), Error.prepareStackTrace = K;
        }
        var ct = h ? h.displayName || h.name : "", Gt = ct ? qu(ct) : "";
        return typeof h == "function" && gl.set(h, Gt), Gt;
      }
      function Pi(h, E, z) {
        return Ku(h, !1);
      }
      function Wf(h) {
        var E = h.prototype;
        return !!(E && E.isReactComponent);
      }
      function Vi(h, E, z) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Ku(h, Wf(h));
        if (typeof h == "string")
          return qu(h);
        switch (h) {
          case Z:
            return qu("Suspense");
          case ye:
            return qu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Ge:
              return Pi(h.render);
            case te:
              return Vi(h.type, E, z);
            case Ae: {
              var j = h, K = j._payload, Oe = j._init;
              try {
                return Vi(Oe(K), E, z);
              } catch {
              }
            }
          }
        return "";
      }
      var Nt = {}, Zu = Dt.ReactDebugCurrentFrame;
      function Tt(h) {
        if (h) {
          var E = h._owner, z = Vi(h.type, h._source, E ? E.type : null);
          Zu.setExtraStackFrame(z);
        } else
          Zu.setExtraStackFrame(null);
      }
      function Qo(h, E, z, j, K) {
        {
          var Oe = Function.call.bind(Cn);
          for (var ae in h)
            if (Oe(h, ae)) {
              var Me = void 0;
              try {
                if (typeof h[ae] != "function") {
                  var gt = Error((j || "React class") + ": " + z + " type `" + ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw gt.name = "Invariant Violation", gt;
                }
                Me = h[ae](E, ae, j, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (kt) {
                Me = kt;
              }
              Me && !(Me instanceof Error) && (Tt(K), Ce("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", z, ae, typeof Me), Tt(null)), Me instanceof Error && !(Me.message in Nt) && (Nt[Me.message] = !0, Tt(K), Ce("Failed %s type: %s", z, Me.message), Tt(null));
            }
        }
      }
      function hi(h) {
        if (h) {
          var E = h._owner, z = Vi(h.type, h._source, E ? E.type : null);
          Pt(z);
        } else
          Pt(null);
      }
      var Ye;
      Ye = !1;
      function Ju() {
        if (et.current) {
          var h = qn(et.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function ir(h) {
        if (h !== void 0) {
          var E = h.fileName.replace(/^.*[\\\/]/, ""), z = h.lineNumber;
          return `

Check your code at ` + E + ":" + z + ".";
        }
        return "";
      }
      function mi(h) {
        return h != null ? ir(h.__source) : "";
      }
      var Dr = {};
      function yi(h) {
        var E = Ju();
        if (!E) {
          var z = typeof h == "string" ? h : h.displayName || h.name;
          z && (E = `

Check the top-level render call using <` + z + ">.");
        }
        return E;
      }
      function cn(h, E) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var z = yi(E);
          if (!Dr[z]) {
            Dr[z] = !0;
            var j = "";
            h && h._owner && h._owner !== et.current && (j = " It was passed a child from " + qn(h._owner.type) + "."), hi(h), Ce('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, j), hi(null);
          }
        }
      }
      function Qt(h, E) {
        if (typeof h == "object") {
          if (En(h))
            for (var z = 0; z < h.length; z++) {
              var j = h[z];
              vn(j) && cn(j, E);
            }
          else if (vn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var K = rt(h);
            if (typeof K == "function" && K !== h.entries)
              for (var Oe = K.call(h), ae; !(ae = Oe.next()).done; )
                vn(ae.value) && cn(ae.value, E);
          }
        }
      }
      function Sl(h) {
        {
          var E = h.type;
          if (E == null || typeof E == "string")
            return;
          var z;
          if (typeof E == "function")
            z = E.propTypes;
          else if (typeof E == "object" && (E.$$typeof === Ge || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          E.$$typeof === te))
            z = E.propTypes;
          else
            return;
          if (z) {
            var j = qn(E);
            Qo(z, h.props, "prop", j, h);
          } else if (E.PropTypes !== void 0 && !Ye) {
            Ye = !0;
            var K = qn(E);
            Ce("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", K || "Unknown");
          }
          typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && Ce("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Yn(h) {
        {
          for (var E = Object.keys(h.props), z = 0; z < E.length; z++) {
            var j = E[z];
            if (j !== "children" && j !== "key") {
              hi(h), Ce("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), hi(null);
              break;
            }
          }
          h.ref !== null && (hi(h), Ce("Invalid attribute `ref` supplied to `React.Fragment`."), hi(null));
        }
      }
      function Or(h, E, z) {
        var j = I(h);
        if (!j) {
          var K = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (K += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Oe = mi(E);
          Oe ? K += Oe : K += Ju();
          var ae;
          h === null ? ae = "null" : En(h) ? ae = "array" : h !== void 0 && h.$$typeof === Xe ? (ae = "<" + (qn(h.type) || "Unknown") + " />", K = " Did you accidentally export a JSX literal instead of a component?") : ae = typeof h, Ce("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ae, K);
        }
        var Me = st.apply(this, arguments);
        if (Me == null)
          return Me;
        if (j)
          for (var gt = 2; gt < arguments.length; gt++)
            Qt(arguments[gt], h);
        return h === Ze ? Yn(Me) : Sl(Me), Me;
      }
      var xa = !1;
      function iu(h) {
        var E = Or.bind(null, h);
        return E.type = h, xa || (xa = !0, Lt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(E, "type", {
          enumerable: !1,
          get: function() {
            return Lt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), E;
      }
      function Wo(h, E, z) {
        for (var j = en.apply(this, arguments), K = 2; K < arguments.length; K++)
          Qt(arguments[K], j.type);
        return Sl(j), j;
      }
      function Go(h, E) {
        var z = mt.transition;
        mt.transition = {};
        var j = mt.transition;
        mt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (mt.transition = z, z === null && j._updatedFibers) {
            var K = j._updatedFibers.size;
            K > 10 && Lt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), j._updatedFibers.clear();
          }
        }
      }
      var wl = !1, lu = null;
      function Gf(h) {
        if (lu === null)
          try {
            var E = ("require" + Math.random()).slice(0, 7), z = B && B[E];
            lu = z.call(B, "timers").setImmediate;
          } catch {
            lu = function(K) {
              wl === !1 && (wl = !0, typeof MessageChannel > "u" && Ce("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Oe = new MessageChannel();
              Oe.port1.onmessage = K, Oe.port2.postMessage(void 0);
            };
          }
        return lu(h);
      }
      var Ra = 0, Ja = !1;
      function gi(h) {
        {
          var E = Ra;
          Ra++, ce.current === null && (ce.current = []);
          var z = ce.isBatchingLegacy, j;
          try {
            if (ce.isBatchingLegacy = !0, j = h(), !z && ce.didScheduleLegacyUpdate) {
              var K = ce.current;
              K !== null && (ce.didScheduleLegacyUpdate = !1, El(K));
            }
          } catch (ct) {
            throw Ta(E), ct;
          } finally {
            ce.isBatchingLegacy = z;
          }
          if (j !== null && typeof j == "object" && typeof j.then == "function") {
            var Oe = j, ae = !1, Me = {
              then: function(ct, Gt) {
                ae = !0, Oe.then(function(hn) {
                  Ta(E), Ra === 0 ? eo(hn, ct, Gt) : ct(hn);
                }, function(hn) {
                  Ta(E), Gt(hn);
                });
              }
            };
            return !Ja && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ae || (Ja = !0, Ce("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Me;
          } else {
            var gt = j;
            if (Ta(E), Ra === 0) {
              var kt = ce.current;
              kt !== null && (El(kt), ce.current = null);
              var rn = {
                then: function(ct, Gt) {
                  ce.current === null ? (ce.current = [], eo(gt, ct, Gt)) : ct(gt);
                }
              };
              return rn;
            } else {
              var Wt = {
                then: function(ct, Gt) {
                  ct(gt);
                }
              };
              return Wt;
            }
          }
        }
      }
      function Ta(h) {
        h !== Ra - 1 && Ce("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ra = h;
      }
      function eo(h, E, z) {
        {
          var j = ce.current;
          if (j !== null)
            try {
              El(j), Gf(function() {
                j.length === 0 ? (ce.current = null, E(h)) : eo(h, E, z);
              });
            } catch (K) {
              z(K);
            }
          else
            E(h);
        }
      }
      var to = !1;
      function El(h) {
        if (!to) {
          to = !0;
          var E = 0;
          try {
            for (; E < h.length; E++) {
              var z = h[E];
              do
                z = z(!0);
              while (z !== null);
            }
            h.length = 0;
          } catch (j) {
            throw h = h.slice(E + 1), j;
          } finally {
            to = !1;
          }
        }
      }
      var uu = Or, no = Wo, ro = iu, ei = {
        map: Hi,
        forEach: eu,
        count: Jl,
        toArray: pl,
        only: vl
      };
      Q.Children = ei, Q.Component = Ue, Q.Fragment = Ze, Q.Profiler = We, Q.PureComponent = pt, Q.StrictMode = S, Q.Suspense = Z, Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dt, Q.act = gi, Q.cloneElement = no, Q.createContext = tu, Q.createElement = uu, Q.createFactory = ro, Q.createRef = On, Q.forwardRef = vi, Q.isValidElement = vn, Q.lazy = pi, Q.memo = le, Q.startTransition = Go, Q.unstable_act = gi, Q.useCallback = ar, Q.useContext = tt, Q.useDebugValue = nt, Q.useDeferredValue = Xa, Q.useEffect = bn, Q.useId = nu, Q.useImperativeHandle = qa, Q.useInsertionEffect = nn, Q.useLayoutEffect = sn, Q.useMemo = Ga, Q.useReducer = yt, Q.useRef = vt, Q.useState = $e, Q.useSyncExternalStore = ru, Q.useTransition = lt, Q.version = N, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(nv, nv.exports)), nv.exports;
}
var nb;
function av() {
  return nb || (nb = 1, process.env.NODE_ENV === "production" ? Xm.exports = a_() : Xm.exports = i_()), Xm.exports;
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
var rb;
function l_() {
  if (rb) return Zp;
  rb = 1;
  var B = av(), Q = Symbol.for("react.element"), N = Symbol.for("react.fragment"), Xe = Object.prototype.hasOwnProperty, Ke = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ze = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(We, ie, ue) {
    var Ge, Z = {}, ye = null, te = null;
    ue !== void 0 && (ye = "" + ue), ie.key !== void 0 && (ye = "" + ie.key), ie.ref !== void 0 && (te = ie.ref);
    for (Ge in ie) Xe.call(ie, Ge) && !Ze.hasOwnProperty(Ge) && (Z[Ge] = ie[Ge]);
    if (We && We.defaultProps) for (Ge in ie = We.defaultProps, ie) Z[Ge] === void 0 && (Z[Ge] = ie[Ge]);
    return { $$typeof: Q, type: We, key: ye, ref: te, props: Z, _owner: Ke.current };
  }
  return Zp.Fragment = N, Zp.jsx = S, Zp.jsxs = S, Zp;
}
var Jp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ab;
function u_() {
  return ab || (ab = 1, process.env.NODE_ENV !== "production" && function() {
    var B = av(), Q = Symbol.for("react.element"), N = Symbol.for("react.portal"), Xe = Symbol.for("react.fragment"), Ke = Symbol.for("react.strict_mode"), Ze = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), We = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), Ge = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), ye = Symbol.for("react.lazy"), te = Symbol.for("react.offscreen"), Ae = Symbol.iterator, je = "@@iterator";
    function Je(C) {
      if (C === null || typeof C != "object")
        return null;
      var I = Ae && C[Ae] || C[je];
      return typeof I == "function" ? I : null;
    }
    var Rt = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function rt(C) {
      {
        for (var I = arguments.length, le = new Array(I > 1 ? I - 1 : 0), me = 1; me < I; me++)
          le[me - 1] = arguments[me];
        He("error", C, le);
      }
    }
    function He(C, I, le) {
      {
        var me = Rt.ReactDebugCurrentFrame, tt = me.getStackAddendum();
        tt !== "" && (I += "%s", le = le.concat([tt]));
        var $e = le.map(function(yt) {
          return String(yt);
        });
        $e.unshift("Warning: " + I), Function.prototype.apply.call(console[C], console, $e);
      }
    }
    var mt = !1, ce = !1, et = !1, Pe = !1, ln = !1, Pt;
    Pt = Symbol.for("react.module.reference");
    function Jt(C) {
      return !!(typeof C == "string" || typeof C == "function" || C === Xe || C === Ze || ln || C === Ke || C === ue || C === Ge || Pe || C === te || mt || ce || et || typeof C == "object" && C !== null && (C.$$typeof === ye || C.$$typeof === Z || C.$$typeof === S || C.$$typeof === We || C.$$typeof === ie || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      C.$$typeof === Pt || C.getModuleId !== void 0));
    }
    function un(C, I, le) {
      var me = C.displayName;
      if (me)
        return me;
      var tt = I.displayName || I.name || "";
      return tt !== "" ? le + "(" + tt + ")" : le;
    }
    function _t(C) {
      return C.displayName || "Context";
    }
    function De(C) {
      if (C == null)
        return null;
      if (typeof C.tag == "number" && rt("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof C == "function")
        return C.displayName || C.name || null;
      if (typeof C == "string")
        return C;
      switch (C) {
        case Xe:
          return "Fragment";
        case N:
          return "Portal";
        case Ze:
          return "Profiler";
        case Ke:
          return "StrictMode";
        case ue:
          return "Suspense";
        case Ge:
          return "SuspenseList";
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case We:
            var I = C;
            return _t(I) + ".Consumer";
          case S:
            var le = C;
            return _t(le._context) + ".Provider";
          case ie:
            return un(C, C.render, "ForwardRef");
          case Z:
            var me = C.displayName || null;
            return me !== null ? me : De(C.type) || "Memo";
          case ye: {
            var tt = C, $e = tt._payload, yt = tt._init;
            try {
              return De(yt($e));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ft = Object.assign, Dt = 0, Lt, Ce, J, be, re, k, P;
    function Ve() {
    }
    Ve.__reactDisabledLog = !0;
    function Ue() {
      {
        if (Dt === 0) {
          Lt = console.log, Ce = console.info, J = console.warn, be = console.error, re = console.group, k = console.groupCollapsed, P = console.groupEnd;
          var C = {
            configurable: !0,
            enumerable: !0,
            value: Ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: C,
            log: C,
            warn: C,
            error: C,
            group: C,
            groupCollapsed: C,
            groupEnd: C
          });
        }
        Dt++;
      }
    }
    function dt() {
      {
        if (Dt--, Dt === 0) {
          var C = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ft({}, C, {
              value: Lt
            }),
            info: Ft({}, C, {
              value: Ce
            }),
            warn: Ft({}, C, {
              value: J
            }),
            error: Ft({}, C, {
              value: be
            }),
            group: Ft({}, C, {
              value: re
            }),
            groupCollapsed: Ft({}, C, {
              value: k
            }),
            groupEnd: Ft({}, C, {
              value: P
            })
          });
        }
        Dt < 0 && rt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ut = Rt.ReactCurrentDispatcher, it;
    function ot(C, I, le) {
      {
        if (it === void 0)
          try {
            throw Error();
          } catch (tt) {
            var me = tt.stack.trim().match(/\n( *(at )?)/);
            it = me && me[1] || "";
          }
        return `
` + it + C;
      }
    }
    var pt = !1, It;
    {
      var On = typeof WeakMap == "function" ? WeakMap : Map;
      It = new On();
    }
    function Rr(C, I) {
      if (!C || pt)
        return "";
      {
        var le = It.get(C);
        if (le !== void 0)
          return le;
      }
      var me;
      pt = !0;
      var tt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $e;
      $e = ut.current, ut.current = null, Ue();
      try {
        if (I) {
          var yt = function() {
            throw Error();
          };
          if (Object.defineProperty(yt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(yt, []);
            } catch (nt) {
              me = nt;
            }
            Reflect.construct(C, [], yt);
          } else {
            try {
              yt.call();
            } catch (nt) {
              me = nt;
            }
            C.call(yt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (nt) {
            me = nt;
          }
          C();
        }
      } catch (nt) {
        if (nt && me && typeof nt.stack == "string") {
          for (var vt = nt.stack.split(`
`), bn = me.stack.split(`
`), nn = vt.length - 1, sn = bn.length - 1; nn >= 1 && sn >= 0 && vt[nn] !== bn[sn]; )
            sn--;
          for (; nn >= 1 && sn >= 0; nn--, sn--)
            if (vt[nn] !== bn[sn]) {
              if (nn !== 1 || sn !== 1)
                do
                  if (nn--, sn--, sn < 0 || vt[nn] !== bn[sn]) {
                    var ar = `
` + vt[nn].replace(" at new ", " at ");
                    return C.displayName && ar.includes("<anonymous>") && (ar = ar.replace("<anonymous>", C.displayName)), typeof C == "function" && It.set(C, ar), ar;
                  }
                while (nn >= 1 && sn >= 0);
              break;
            }
        }
      } finally {
        pt = !1, ut.current = $e, dt(), Error.prepareStackTrace = tt;
      }
      var Ga = C ? C.displayName || C.name : "", qa = Ga ? ot(Ga) : "";
      return typeof C == "function" && It.set(C, qa), qa;
    }
    function En(C, I, le) {
      return Rr(C, !1);
    }
    function nr(C) {
      var I = C.prototype;
      return !!(I && I.isReactComponent);
    }
    function Vn(C, I, le) {
      if (C == null)
        return "";
      if (typeof C == "function")
        return Rr(C, nr(C));
      if (typeof C == "string")
        return ot(C);
      switch (C) {
        case ue:
          return ot("Suspense");
        case Ge:
          return ot("SuspenseList");
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case ie:
            return En(C.render);
          case Z:
            return Vn(C.type, I, le);
          case ye: {
            var me = C, tt = me._payload, $e = me._init;
            try {
              return Vn($e(tt), I, le);
            } catch {
            }
          }
        }
      return "";
    }
    var Bn = Object.prototype.hasOwnProperty, Yr = {}, ci = Rt.ReactDebugCurrentFrame;
    function oa(C) {
      if (C) {
        var I = C._owner, le = Vn(C.type, C._source, I ? I.type : null);
        ci.setExtraStackFrame(le);
      } else
        ci.setExtraStackFrame(null);
    }
    function qn(C, I, le, me, tt) {
      {
        var $e = Function.call.bind(Bn);
        for (var yt in C)
          if ($e(C, yt)) {
            var vt = void 0;
            try {
              if (typeof C[yt] != "function") {
                var bn = Error((me || "React class") + ": " + le + " type `" + yt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[yt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw bn.name = "Invariant Violation", bn;
              }
              vt = C[yt](I, yt, me, le, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (nn) {
              vt = nn;
            }
            vt && !(vt instanceof Error) && (oa(tt), rt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", me || "React class", le, yt, typeof vt), oa(null)), vt instanceof Error && !(vt.message in Yr) && (Yr[vt.message] = !0, oa(tt), rt("Failed %s type: %s", le, vt.message), oa(null));
          }
      }
    }
    var Cn = Array.isArray;
    function In(C) {
      return Cn(C);
    }
    function gr(C) {
      {
        var I = typeof Symbol == "function" && Symbol.toStringTag, le = I && C[Symbol.toStringTag] || C.constructor.name || "Object";
        return le;
      }
    }
    function $a(C) {
      try {
        return Ln(C), !1;
      } catch {
        return !0;
      }
    }
    function Ln(C) {
      return "" + C;
    }
    function Sr(C) {
      if ($a(C))
        return rt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(C)), Ln(C);
    }
    var sa = Rt.ReactCurrentOwner, Qa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fi, ee;
    function xe(C) {
      if (Bn.call(C, "ref")) {
        var I = Object.getOwnPropertyDescriptor(C, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return C.ref !== void 0;
    }
    function st(C) {
      if (Bn.call(C, "key")) {
        var I = Object.getOwnPropertyDescriptor(C, "key").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return C.key !== void 0;
    }
    function Ht(C, I) {
      typeof C.ref == "string" && sa.current;
    }
    function en(C, I) {
      {
        var le = function() {
          fi || (fi = !0, rt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        le.isReactWarning = !0, Object.defineProperty(C, "key", {
          get: le,
          configurable: !0
        });
      }
    }
    function vn(C, I) {
      {
        var le = function() {
          ee || (ee = !0, rt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        le.isReactWarning = !0, Object.defineProperty(C, "ref", {
          get: le,
          configurable: !0
        });
      }
    }
    var on = function(C, I, le, me, tt, $e, yt) {
      var vt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: Q,
        // Built-in properties that belong on the element
        type: C,
        key: I,
        ref: le,
        props: yt,
        // Record the component responsible for creating this element.
        _owner: $e
      };
      return vt._store = {}, Object.defineProperty(vt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(vt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: me
      }), Object.defineProperty(vt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: tt
      }), Object.freeze && (Object.freeze(vt.props), Object.freeze(vt)), vt;
    };
    function Xn(C, I, le, me, tt) {
      {
        var $e, yt = {}, vt = null, bn = null;
        le !== void 0 && (Sr(le), vt = "" + le), st(I) && (Sr(I.key), vt = "" + I.key), xe(I) && (bn = I.ref, Ht(I, tt));
        for ($e in I)
          Bn.call(I, $e) && !Qa.hasOwnProperty($e) && (yt[$e] = I[$e]);
        if (C && C.defaultProps) {
          var nn = C.defaultProps;
          for ($e in nn)
            yt[$e] === void 0 && (yt[$e] = nn[$e]);
        }
        if (vt || bn) {
          var sn = typeof C == "function" ? C.displayName || C.name || "Unknown" : C;
          vt && en(yt, sn), bn && vn(yt, sn);
        }
        return on(C, vt, bn, tt, me, sa.current, yt);
      }
    }
    var tn = Rt.ReactCurrentOwner, Yt = Rt.ReactDebugCurrentFrame;
    function $t(C) {
      if (C) {
        var I = C._owner, le = Vn(C.type, C._source, I ? I.type : null);
        Yt.setExtraStackFrame(le);
      } else
        Yt.setExtraStackFrame(null);
    }
    var ca;
    ca = !1;
    function wr(C) {
      return typeof C == "object" && C !== null && C.$$typeof === Q;
    }
    function ba() {
      {
        if (tn.current) {
          var C = De(tn.current.type);
          if (C)
            return `

Check the render method of \`` + C + "`.";
        }
        return "";
      }
    }
    function Hi(C) {
      return "";
    }
    var Jl = {};
    function eu(C) {
      {
        var I = ba();
        if (!I) {
          var le = typeof C == "string" ? C : C.displayName || C.name;
          le && (I = `

Check the top-level render call using <` + le + ">.");
        }
        return I;
      }
    }
    function pl(C, I) {
      {
        if (!C._store || C._store.validated || C.key != null)
          return;
        C._store.validated = !0;
        var le = eu(I);
        if (Jl[le])
          return;
        Jl[le] = !0;
        var me = "";
        C && C._owner && C._owner !== tn.current && (me = " It was passed a child from " + De(C._owner.type) + "."), $t(C), rt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', le, me), $t(null);
      }
    }
    function vl(C, I) {
      {
        if (typeof C != "object")
          return;
        if (In(C))
          for (var le = 0; le < C.length; le++) {
            var me = C[le];
            wr(me) && pl(me, I);
          }
        else if (wr(C))
          C._store && (C._store.validated = !0);
        else if (C) {
          var tt = Je(C);
          if (typeof tt == "function" && tt !== C.entries)
            for (var $e = tt.call(C), yt; !(yt = $e.next()).done; )
              wr(yt.value) && pl(yt.value, I);
        }
      }
    }
    function tu(C) {
      {
        var I = C.type;
        if (I == null || typeof I == "string")
          return;
        var le;
        if (typeof I == "function")
          le = I.propTypes;
        else if (typeof I == "object" && (I.$$typeof === ie || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        I.$$typeof === Z))
          le = I.propTypes;
        else
          return;
        if (le) {
          var me = De(I);
          qn(le, C.props, "prop", me, C);
        } else if (I.PropTypes !== void 0 && !ca) {
          ca = !0;
          var tt = De(I);
          rt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", tt || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && rt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tr(C) {
      {
        for (var I = Object.keys(C.props), le = 0; le < I.length; le++) {
          var me = I[le];
          if (me !== "children" && me !== "key") {
            $t(C), rt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", me), $t(null);
            break;
          }
        }
        C.ref !== null && ($t(C), rt("Invalid attribute `ref` supplied to `React.Fragment`."), $t(null));
      }
    }
    var kr = {};
    function rr(C, I, le, me, tt, $e) {
      {
        var yt = Jt(C);
        if (!yt) {
          var vt = "";
          (C === void 0 || typeof C == "object" && C !== null && Object.keys(C).length === 0) && (vt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var bn = Hi();
          bn ? vt += bn : vt += ba();
          var nn;
          C === null ? nn = "null" : In(C) ? nn = "array" : C !== void 0 && C.$$typeof === Q ? (nn = "<" + (De(C.type) || "Unknown") + " />", vt = " Did you accidentally export a JSX literal instead of a component?") : nn = typeof C, rt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", nn, vt);
        }
        var sn = Xn(C, I, le, tt, $e);
        if (sn == null)
          return sn;
        if (yt) {
          var ar = I.children;
          if (ar !== void 0)
            if (me)
              if (In(ar)) {
                for (var Ga = 0; Ga < ar.length; Ga++)
                  vl(ar[Ga], C);
                Object.freeze && Object.freeze(ar);
              } else
                rt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vl(ar, C);
        }
        if (Bn.call(I, "key")) {
          var qa = De(C), nt = Object.keys(I).filter(function(nu) {
            return nu !== "key";
          }), lt = nt.length > 0 ? "{key: someKey, " + nt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!kr[qa + lt]) {
            var Xa = nt.length > 0 ? "{" + nt.join(": ..., ") + ": ...}" : "{}";
            rt(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, lt, qa, Xa, qa), kr[qa + lt] = !0;
          }
        }
        return C === Xe ? Tr(sn) : tu(sn), sn;
      }
    }
    function di(C, I, le) {
      return rr(C, I, le, !0);
    }
    function Wa(C, I, le) {
      return rr(C, I, le, !1);
    }
    var pi = Wa, vi = di;
    Jp.Fragment = Xe, Jp.jsx = pi, Jp.jsxs = vi;
  }()), Jp;
}
process.env.NODE_ENV === "production" ? g0.exports = l_() : g0.exports = u_();
var ft = g0.exports, rv = {}, S0 = { exports: {} }, Ba = {}, Km = { exports: {} }, h0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ib;
function o_() {
  return ib || (ib = 1, function(B) {
    function Q(J, be) {
      var re = J.length;
      J.push(be);
      e: for (; 0 < re; ) {
        var k = re - 1 >>> 1, P = J[k];
        if (0 < Ke(P, be)) J[k] = be, J[re] = P, re = k;
        else break e;
      }
    }
    function N(J) {
      return J.length === 0 ? null : J[0];
    }
    function Xe(J) {
      if (J.length === 0) return null;
      var be = J[0], re = J.pop();
      if (re !== be) {
        J[0] = re;
        e: for (var k = 0, P = J.length, Ve = P >>> 1; k < Ve; ) {
          var Ue = 2 * (k + 1) - 1, dt = J[Ue], ut = Ue + 1, it = J[ut];
          if (0 > Ke(dt, re)) ut < P && 0 > Ke(it, dt) ? (J[k] = it, J[ut] = re, k = ut) : (J[k] = dt, J[Ue] = re, k = Ue);
          else if (ut < P && 0 > Ke(it, re)) J[k] = it, J[ut] = re, k = ut;
          else break e;
        }
      }
      return be;
    }
    function Ke(J, be) {
      var re = J.sortIndex - be.sortIndex;
      return re !== 0 ? re : J.id - be.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Ze = performance;
      B.unstable_now = function() {
        return Ze.now();
      };
    } else {
      var S = Date, We = S.now();
      B.unstable_now = function() {
        return S.now() - We;
      };
    }
    var ie = [], ue = [], Ge = 1, Z = null, ye = 3, te = !1, Ae = !1, je = !1, Je = typeof setTimeout == "function" ? setTimeout : null, Rt = typeof clearTimeout == "function" ? clearTimeout : null, rt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function He(J) {
      for (var be = N(ue); be !== null; ) {
        if (be.callback === null) Xe(ue);
        else if (be.startTime <= J) Xe(ue), be.sortIndex = be.expirationTime, Q(ie, be);
        else break;
        be = N(ue);
      }
    }
    function mt(J) {
      if (je = !1, He(J), !Ae) if (N(ie) !== null) Ae = !0, Lt(ce);
      else {
        var be = N(ue);
        be !== null && Ce(mt, be.startTime - J);
      }
    }
    function ce(J, be) {
      Ae = !1, je && (je = !1, Rt(ln), ln = -1), te = !0;
      var re = ye;
      try {
        for (He(be), Z = N(ie); Z !== null && (!(Z.expirationTime > be) || J && !un()); ) {
          var k = Z.callback;
          if (typeof k == "function") {
            Z.callback = null, ye = Z.priorityLevel;
            var P = k(Z.expirationTime <= be);
            be = B.unstable_now(), typeof P == "function" ? Z.callback = P : Z === N(ie) && Xe(ie), He(be);
          } else Xe(ie);
          Z = N(ie);
        }
        if (Z !== null) var Ve = !0;
        else {
          var Ue = N(ue);
          Ue !== null && Ce(mt, Ue.startTime - be), Ve = !1;
        }
        return Ve;
      } finally {
        Z = null, ye = re, te = !1;
      }
    }
    var et = !1, Pe = null, ln = -1, Pt = 5, Jt = -1;
    function un() {
      return !(B.unstable_now() - Jt < Pt);
    }
    function _t() {
      if (Pe !== null) {
        var J = B.unstable_now();
        Jt = J;
        var be = !0;
        try {
          be = Pe(!0, J);
        } finally {
          be ? De() : (et = !1, Pe = null);
        }
      } else et = !1;
    }
    var De;
    if (typeof rt == "function") De = function() {
      rt(_t);
    };
    else if (typeof MessageChannel < "u") {
      var Ft = new MessageChannel(), Dt = Ft.port2;
      Ft.port1.onmessage = _t, De = function() {
        Dt.postMessage(null);
      };
    } else De = function() {
      Je(_t, 0);
    };
    function Lt(J) {
      Pe = J, et || (et = !0, De());
    }
    function Ce(J, be) {
      ln = Je(function() {
        J(B.unstable_now());
      }, be);
    }
    B.unstable_IdlePriority = 5, B.unstable_ImmediatePriority = 1, B.unstable_LowPriority = 4, B.unstable_NormalPriority = 3, B.unstable_Profiling = null, B.unstable_UserBlockingPriority = 2, B.unstable_cancelCallback = function(J) {
      J.callback = null;
    }, B.unstable_continueExecution = function() {
      Ae || te || (Ae = !0, Lt(ce));
    }, B.unstable_forceFrameRate = function(J) {
      0 > J || 125 < J ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Pt = 0 < J ? Math.floor(1e3 / J) : 5;
    }, B.unstable_getCurrentPriorityLevel = function() {
      return ye;
    }, B.unstable_getFirstCallbackNode = function() {
      return N(ie);
    }, B.unstable_next = function(J) {
      switch (ye) {
        case 1:
        case 2:
        case 3:
          var be = 3;
          break;
        default:
          be = ye;
      }
      var re = ye;
      ye = be;
      try {
        return J();
      } finally {
        ye = re;
      }
    }, B.unstable_pauseExecution = function() {
    }, B.unstable_requestPaint = function() {
    }, B.unstable_runWithPriority = function(J, be) {
      switch (J) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          J = 3;
      }
      var re = ye;
      ye = J;
      try {
        return be();
      } finally {
        ye = re;
      }
    }, B.unstable_scheduleCallback = function(J, be, re) {
      var k = B.unstable_now();
      switch (typeof re == "object" && re !== null ? (re = re.delay, re = typeof re == "number" && 0 < re ? k + re : k) : re = k, J) {
        case 1:
          var P = -1;
          break;
        case 2:
          P = 250;
          break;
        case 5:
          P = 1073741823;
          break;
        case 4:
          P = 1e4;
          break;
        default:
          P = 5e3;
      }
      return P = re + P, J = { id: Ge++, callback: be, priorityLevel: J, startTime: re, expirationTime: P, sortIndex: -1 }, re > k ? (J.sortIndex = re, Q(ue, J), N(ie) === null && J === N(ue) && (je ? (Rt(ln), ln = -1) : je = !0, Ce(mt, re - k))) : (J.sortIndex = P, Q(ie, J), Ae || te || (Ae = !0, Lt(ce))), J;
    }, B.unstable_shouldYield = un, B.unstable_wrapCallback = function(J) {
      var be = ye;
      return function() {
        var re = ye;
        ye = be;
        try {
          return J.apply(this, arguments);
        } finally {
          ye = re;
        }
      };
    };
  }(h0)), h0;
}
var m0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lb;
function s_() {
  return lb || (lb = 1, function(B) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Q = !1, N = 5;
      function Xe(ee, xe) {
        var st = ee.length;
        ee.push(xe), S(ee, xe, st);
      }
      function Ke(ee) {
        return ee.length === 0 ? null : ee[0];
      }
      function Ze(ee) {
        if (ee.length === 0)
          return null;
        var xe = ee[0], st = ee.pop();
        return st !== xe && (ee[0] = st, We(ee, st, 0)), xe;
      }
      function S(ee, xe, st) {
        for (var Ht = st; Ht > 0; ) {
          var en = Ht - 1 >>> 1, vn = ee[en];
          if (ie(vn, xe) > 0)
            ee[en] = xe, ee[Ht] = vn, Ht = en;
          else
            return;
        }
      }
      function We(ee, xe, st) {
        for (var Ht = st, en = ee.length, vn = en >>> 1; Ht < vn; ) {
          var on = (Ht + 1) * 2 - 1, Xn = ee[on], tn = on + 1, Yt = ee[tn];
          if (ie(Xn, xe) < 0)
            tn < en && ie(Yt, Xn) < 0 ? (ee[Ht] = Yt, ee[tn] = xe, Ht = tn) : (ee[Ht] = Xn, ee[on] = xe, Ht = on);
          else if (tn < en && ie(Yt, xe) < 0)
            ee[Ht] = Yt, ee[tn] = xe, Ht = tn;
          else
            return;
        }
      }
      function ie(ee, xe) {
        var st = ee.sortIndex - xe.sortIndex;
        return st !== 0 ? st : ee.id - xe.id;
      }
      var ue = 1, Ge = 2, Z = 3, ye = 4, te = 5;
      function Ae(ee, xe) {
      }
      var je = typeof performance == "object" && typeof performance.now == "function";
      if (je) {
        var Je = performance;
        B.unstable_now = function() {
          return Je.now();
        };
      } else {
        var Rt = Date, rt = Rt.now();
        B.unstable_now = function() {
          return Rt.now() - rt;
        };
      }
      var He = 1073741823, mt = -1, ce = 250, et = 5e3, Pe = 1e4, ln = He, Pt = [], Jt = [], un = 1, _t = null, De = Z, Ft = !1, Dt = !1, Lt = !1, Ce = typeof setTimeout == "function" ? setTimeout : null, J = typeof clearTimeout == "function" ? clearTimeout : null, be = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function re(ee) {
        for (var xe = Ke(Jt); xe !== null; ) {
          if (xe.callback === null)
            Ze(Jt);
          else if (xe.startTime <= ee)
            Ze(Jt), xe.sortIndex = xe.expirationTime, Xe(Pt, xe);
          else
            return;
          xe = Ke(Jt);
        }
      }
      function k(ee) {
        if (Lt = !1, re(ee), !Dt)
          if (Ke(Pt) !== null)
            Dt = !0, Ln(P);
          else {
            var xe = Ke(Jt);
            xe !== null && Sr(k, xe.startTime - ee);
          }
      }
      function P(ee, xe) {
        Dt = !1, Lt && (Lt = !1, sa()), Ft = !0;
        var st = De;
        try {
          var Ht;
          if (!Q) return Ve(ee, xe);
        } finally {
          _t = null, De = st, Ft = !1;
        }
      }
      function Ve(ee, xe) {
        var st = xe;
        for (re(st), _t = Ke(Pt); _t !== null && !(_t.expirationTime > st && (!ee || ci())); ) {
          var Ht = _t.callback;
          if (typeof Ht == "function") {
            _t.callback = null, De = _t.priorityLevel;
            var en = _t.expirationTime <= st, vn = Ht(en);
            st = B.unstable_now(), typeof vn == "function" ? _t.callback = vn : _t === Ke(Pt) && Ze(Pt), re(st);
          } else
            Ze(Pt);
          _t = Ke(Pt);
        }
        if (_t !== null)
          return !0;
        var on = Ke(Jt);
        return on !== null && Sr(k, on.startTime - st), !1;
      }
      function Ue(ee, xe) {
        switch (ee) {
          case ue:
          case Ge:
          case Z:
          case ye:
          case te:
            break;
          default:
            ee = Z;
        }
        var st = De;
        De = ee;
        try {
          return xe();
        } finally {
          De = st;
        }
      }
      function dt(ee) {
        var xe;
        switch (De) {
          case ue:
          case Ge:
          case Z:
            xe = Z;
            break;
          default:
            xe = De;
            break;
        }
        var st = De;
        De = xe;
        try {
          return ee();
        } finally {
          De = st;
        }
      }
      function ut(ee) {
        var xe = De;
        return function() {
          var st = De;
          De = xe;
          try {
            return ee.apply(this, arguments);
          } finally {
            De = st;
          }
        };
      }
      function it(ee, xe, st) {
        var Ht = B.unstable_now(), en;
        if (typeof st == "object" && st !== null) {
          var vn = st.delay;
          typeof vn == "number" && vn > 0 ? en = Ht + vn : en = Ht;
        } else
          en = Ht;
        var on;
        switch (ee) {
          case ue:
            on = mt;
            break;
          case Ge:
            on = ce;
            break;
          case te:
            on = ln;
            break;
          case ye:
            on = Pe;
            break;
          case Z:
          default:
            on = et;
            break;
        }
        var Xn = en + on, tn = {
          id: un++,
          callback: xe,
          priorityLevel: ee,
          startTime: en,
          expirationTime: Xn,
          sortIndex: -1
        };
        return en > Ht ? (tn.sortIndex = en, Xe(Jt, tn), Ke(Pt) === null && tn === Ke(Jt) && (Lt ? sa() : Lt = !0, Sr(k, en - Ht))) : (tn.sortIndex = Xn, Xe(Pt, tn), !Dt && !Ft && (Dt = !0, Ln(P))), tn;
      }
      function ot() {
      }
      function pt() {
        !Dt && !Ft && (Dt = !0, Ln(P));
      }
      function It() {
        return Ke(Pt);
      }
      function On(ee) {
        ee.callback = null;
      }
      function Rr() {
        return De;
      }
      var En = !1, nr = null, Vn = -1, Bn = N, Yr = -1;
      function ci() {
        var ee = B.unstable_now() - Yr;
        return !(ee < Bn);
      }
      function oa() {
      }
      function qn(ee) {
        if (ee < 0 || ee > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ee > 0 ? Bn = Math.floor(1e3 / ee) : Bn = N;
      }
      var Cn = function() {
        if (nr !== null) {
          var ee = B.unstable_now();
          Yr = ee;
          var xe = !0, st = !0;
          try {
            st = nr(xe, ee);
          } finally {
            st ? In() : (En = !1, nr = null);
          }
        } else
          En = !1;
      }, In;
      if (typeof be == "function")
        In = function() {
          be(Cn);
        };
      else if (typeof MessageChannel < "u") {
        var gr = new MessageChannel(), $a = gr.port2;
        gr.port1.onmessage = Cn, In = function() {
          $a.postMessage(null);
        };
      } else
        In = function() {
          Ce(Cn, 0);
        };
      function Ln(ee) {
        nr = ee, En || (En = !0, In());
      }
      function Sr(ee, xe) {
        Vn = Ce(function() {
          ee(B.unstable_now());
        }, xe);
      }
      function sa() {
        J(Vn), Vn = -1;
      }
      var Qa = oa, fi = null;
      B.unstable_IdlePriority = te, B.unstable_ImmediatePriority = ue, B.unstable_LowPriority = ye, B.unstable_NormalPriority = Z, B.unstable_Profiling = fi, B.unstable_UserBlockingPriority = Ge, B.unstable_cancelCallback = On, B.unstable_continueExecution = pt, B.unstable_forceFrameRate = qn, B.unstable_getCurrentPriorityLevel = Rr, B.unstable_getFirstCallbackNode = It, B.unstable_next = dt, B.unstable_pauseExecution = ot, B.unstable_requestPaint = Qa, B.unstable_runWithPriority = Ue, B.unstable_scheduleCallback = it, B.unstable_shouldYield = ci, B.unstable_wrapCallback = ut, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(m0)), m0;
}
var ub;
function pb() {
  return ub || (ub = 1, process.env.NODE_ENV === "production" ? Km.exports = o_() : Km.exports = s_()), Km.exports;
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
var ob;
function c_() {
  if (ob) return Ba;
  ob = 1;
  var B = av(), Q = pb();
  function N(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Xe = /* @__PURE__ */ new Set(), Ke = {};
  function Ze(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (Ke[n] = r, n = 0; n < r.length; n++) Xe.add(r[n]);
  }
  var We = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ie = Object.prototype.hasOwnProperty, ue = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ge = {}, Z = {};
  function ye(n) {
    return ie.call(Z, n) ? !0 : ie.call(Ge, n) ? !1 : ue.test(n) ? Z[n] = !0 : (Ge[n] = !0, !1);
  }
  function te(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Ae(n, r, l, o) {
    if (r === null || typeof r > "u" || te(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function je(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var Je = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Je[n] = new je(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Je[r] = new je(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Je[n] = new je(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Je[n] = new je(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Je[n] = new je(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Je[n] = new je(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Je[n] = new je(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Je[n] = new je(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Je[n] = new je(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Rt = /[\-:]([a-z])/g;
  function rt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Rt,
      rt
    );
    Je[r] = new je(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Rt, rt);
    Je[r] = new je(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Rt, rt);
    Je[r] = new je(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Je[n] = new je(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Je.xlinkHref = new je("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Je[n] = new je(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function He(n, r, l, o) {
    var c = Je.hasOwnProperty(r) ? Je[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Ae(r, l, c, o) && (l = null), o || c === null ? ye(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var mt = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ce = Symbol.for("react.element"), et = Symbol.for("react.portal"), Pe = Symbol.for("react.fragment"), ln = Symbol.for("react.strict_mode"), Pt = Symbol.for("react.profiler"), Jt = Symbol.for("react.provider"), un = Symbol.for("react.context"), _t = Symbol.for("react.forward_ref"), De = Symbol.for("react.suspense"), Ft = Symbol.for("react.suspense_list"), Dt = Symbol.for("react.memo"), Lt = Symbol.for("react.lazy"), Ce = Symbol.for("react.offscreen"), J = Symbol.iterator;
  function be(n) {
    return n === null || typeof n != "object" ? null : (n = J && n[J] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var re = Object.assign, k;
  function P(n) {
    if (k === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      k = r && r[1] || "";
    }
    return `
` + k + n;
  }
  var Ve = !1;
  function Ue(n, r) {
    if (!n || Ve) return "";
    Ve = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (U) {
          var o = U;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (U) {
          o = U;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (U) {
          o = U;
        }
        n();
      }
    } catch (U) {
      if (U && o && typeof U.stack == "string") {
        for (var c = U.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, w = d.length - 1; 1 <= m && 0 <= w && c[m] !== d[w]; ) w--;
        for (; 1 <= m && 0 <= w; m--, w--) if (c[m] !== d[w]) {
          if (m !== 1 || w !== 1)
            do
              if (m--, w--, 0 > w || c[m] !== d[w]) {
                var b = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", n.displayName)), b;
              }
            while (1 <= m && 0 <= w);
          break;
        }
      }
    } finally {
      Ve = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? P(n) : "";
  }
  function dt(n) {
    switch (n.tag) {
      case 5:
        return P(n.type);
      case 16:
        return P("Lazy");
      case 13:
        return P("Suspense");
      case 19:
        return P("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ue(n.type, !1), n;
      case 11:
        return n = Ue(n.type.render, !1), n;
      case 1:
        return n = Ue(n.type, !0), n;
      default:
        return "";
    }
  }
  function ut(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Pe:
        return "Fragment";
      case et:
        return "Portal";
      case Pt:
        return "Profiler";
      case ln:
        return "StrictMode";
      case De:
        return "Suspense";
      case Ft:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case un:
        return (n.displayName || "Context") + ".Consumer";
      case Jt:
        return (n._context.displayName || "Context") + ".Provider";
      case _t:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Dt:
        return r = n.displayName || null, r !== null ? r : ut(n.type) || "Memo";
      case Lt:
        r = n._payload, n = n._init;
        try {
          return ut(n(r));
        } catch {
        }
    }
    return null;
  }
  function it(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ut(r);
      case 8:
        return r === ln ? "StrictMode" : "Mode";
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
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function ot(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function pt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function It(n) {
    var r = pt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function On(n) {
    n._valueTracker || (n._valueTracker = It(n));
  }
  function Rr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = pt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function En(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function nr(n, r) {
    var l = r.checked;
    return re({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Vn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = ot(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Bn(n, r) {
    r = r.checked, r != null && He(n, "checked", r, !1);
  }
  function Yr(n, r) {
    Bn(n, r);
    var l = ot(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? oa(n, r.type, l) : r.hasOwnProperty("defaultValue") && oa(n, r.type, ot(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function ci(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function oa(n, r, l) {
    (r !== "number" || En(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var qn = Array.isArray;
  function Cn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + ot(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function In(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(N(91));
    return re({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function gr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(N(92));
        if (qn(l)) {
          if (1 < l.length) throw Error(N(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: ot(l) };
  }
  function $a(n, r) {
    var l = ot(r.value), o = ot(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Ln(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Sr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function sa(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Sr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Qa, fi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Qa = Qa || document.createElement("div"), Qa.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Qa.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function ee(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var xe = {
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
  }, st = ["Webkit", "ms", "Moz", "O"];
  Object.keys(xe).forEach(function(n) {
    st.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), xe[r] = xe[n];
    });
  });
  function Ht(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || xe.hasOwnProperty(n) && xe[n] ? ("" + r).trim() : r + "px";
  }
  function en(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Ht(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var vn = re({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function on(n, r) {
    if (r) {
      if (vn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(N(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(N(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(N(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(N(62));
    }
  }
  function Xn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
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
  var tn = null;
  function Yt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var $t = null, ca = null, wr = null;
  function ba(n) {
    if (n = ke(n)) {
      if (typeof $t != "function") throw Error(N(280));
      var r = n.stateNode;
      r && (r = mn(r), $t(n.stateNode, n.type, r));
    }
  }
  function Hi(n) {
    ca ? wr ? wr.push(n) : wr = [n] : ca = n;
  }
  function Jl() {
    if (ca) {
      var n = ca, r = wr;
      if (wr = ca = null, ba(n), r) for (n = 0; n < r.length; n++) ba(r[n]);
    }
  }
  function eu(n, r) {
    return n(r);
  }
  function pl() {
  }
  var vl = !1;
  function tu(n, r, l) {
    if (vl) return n(r, l);
    vl = !0;
    try {
      return eu(n, r, l);
    } finally {
      vl = !1, (ca !== null || wr !== null) && (pl(), Jl());
    }
  }
  function Tr(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = mn(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
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
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(N(231, r, typeof l));
    return l;
  }
  var kr = !1;
  if (We) try {
    var rr = {};
    Object.defineProperty(rr, "passive", { get: function() {
      kr = !0;
    } }), window.addEventListener("test", rr, rr), window.removeEventListener("test", rr, rr);
  } catch {
    kr = !1;
  }
  function di(n, r, l, o, c, d, m, w, b) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, U);
    } catch (W) {
      this.onError(W);
    }
  }
  var Wa = !1, pi = null, vi = !1, C = null, I = { onError: function(n) {
    Wa = !0, pi = n;
  } };
  function le(n, r, l, o, c, d, m, w, b) {
    Wa = !1, pi = null, di.apply(I, arguments);
  }
  function me(n, r, l, o, c, d, m, w, b) {
    if (le.apply(this, arguments), Wa) {
      if (Wa) {
        var U = pi;
        Wa = !1, pi = null;
      } else throw Error(N(198));
      vi || (vi = !0, C = U);
    }
  }
  function tt(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function $e(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function yt(n) {
    if (tt(n) !== n) throw Error(N(188));
  }
  function vt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = tt(n), r === null) throw Error(N(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return yt(c), n;
          if (d === o) return yt(c), r;
          d = d.sibling;
        }
        throw Error(N(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, w = c.child; w; ) {
          if (w === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (w === o) {
            m = !0, o = c, l = d;
            break;
          }
          w = w.sibling;
        }
        if (!m) {
          for (w = d.child; w; ) {
            if (w === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (w === o) {
              m = !0, o = d, l = c;
              break;
            }
            w = w.sibling;
          }
          if (!m) throw Error(N(189));
        }
      }
      if (l.alternate !== o) throw Error(N(190));
    }
    if (l.tag !== 3) throw Error(N(188));
    return l.stateNode.current === l ? n : r;
  }
  function bn(n) {
    return n = vt(n), n !== null ? nn(n) : null;
  }
  function nn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = nn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var sn = Q.unstable_scheduleCallback, ar = Q.unstable_cancelCallback, Ga = Q.unstable_shouldYield, qa = Q.unstable_requestPaint, nt = Q.unstable_now, lt = Q.unstable_getCurrentPriorityLevel, Xa = Q.unstable_ImmediatePriority, nu = Q.unstable_UserBlockingPriority, ru = Q.unstable_NormalPriority, hl = Q.unstable_LowPriority, Wu = Q.unstable_IdlePriority, ml = null, $r = null;
  function $o(n) {
    if ($r && typeof $r.onCommitFiberRoot == "function") try {
      $r.onCommitFiberRoot(ml, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var _r = Math.clz32 ? Math.clz32 : Gu, lc = Math.log, uc = Math.LN2;
  function Gu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (lc(n) / uc | 0) | 0;
  }
  var yl = 64, fa = 4194304;
  function Ka(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Za(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var w = m & ~c;
      w !== 0 ? o = Ka(w) : (d &= m, d !== 0 && (o = Ka(d)));
    } else m = l & ~c, m !== 0 ? o = Ka(m) : d !== 0 && (o = Ka(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - _r(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function qu(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
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
        return r + 5e3;
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
  function au(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - _r(d), w = 1 << m, b = c[m];
      b === -1 ? (!(w & l) || w & o) && (c[m] = qu(w, r)) : b <= r && (n.expiredLanes |= w), d &= ~w;
    }
  }
  function gl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Xu() {
    var n = yl;
    return yl <<= 1, !(yl & 4194240) && (yl = 64), n;
  }
  function Ku(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Pi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - _r(r), n[r] = l;
  }
  function Wf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - _r(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Vi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - _r(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Nt = 0;
  function Zu(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Tt, Qo, hi, Ye, Ju, ir = !1, mi = [], Dr = null, yi = null, cn = null, Qt = /* @__PURE__ */ new Map(), Sl = /* @__PURE__ */ new Map(), Yn = [], Or = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function xa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Dr = null;
        break;
      case "dragenter":
      case "dragleave":
        yi = null;
        break;
      case "mouseover":
      case "mouseout":
        cn = null;
        break;
      case "pointerover":
      case "pointerout":
        Qt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Sl.delete(r.pointerId);
    }
  }
  function iu(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ke(r), r !== null && Qo(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Wo(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Dr = iu(Dr, n, r, l, o, c), !0;
      case "dragenter":
        return yi = iu(yi, n, r, l, o, c), !0;
      case "mouseover":
        return cn = iu(cn, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Qt.set(d, iu(Qt.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Sl.set(d, iu(Sl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Go(n) {
    var r = vu(n.target);
    if (r !== null) {
      var l = tt(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = $e(l), r !== null) {
            n.blockedOn = r, Ju(n.priority, function() {
              hi(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function wl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = no(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        tn = o, l.target.dispatchEvent(o), tn = null;
      } else return r = ke(l), r !== null && Qo(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function lu(n, r, l) {
    wl(n) && l.delete(r);
  }
  function Gf() {
    ir = !1, Dr !== null && wl(Dr) && (Dr = null), yi !== null && wl(yi) && (yi = null), cn !== null && wl(cn) && (cn = null), Qt.forEach(lu), Sl.forEach(lu);
  }
  function Ra(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ir || (ir = !0, Q.unstable_scheduleCallback(Q.unstable_NormalPriority, Gf)));
  }
  function Ja(n) {
    function r(c) {
      return Ra(c, n);
    }
    if (0 < mi.length) {
      Ra(mi[0], n);
      for (var l = 1; l < mi.length; l++) {
        var o = mi[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Dr !== null && Ra(Dr, n), yi !== null && Ra(yi, n), cn !== null && Ra(cn, n), Qt.forEach(r), Sl.forEach(r), l = 0; l < Yn.length; l++) o = Yn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Yn.length && (l = Yn[0], l.blockedOn === null); ) Go(l), l.blockedOn === null && Yn.shift();
  }
  var gi = mt.ReactCurrentBatchConfig, Ta = !0;
  function eo(n, r, l, o) {
    var c = Nt, d = gi.transition;
    gi.transition = null;
    try {
      Nt = 1, El(n, r, l, o);
    } finally {
      Nt = c, gi.transition = d;
    }
  }
  function to(n, r, l, o) {
    var c = Nt, d = gi.transition;
    gi.transition = null;
    try {
      Nt = 4, El(n, r, l, o);
    } finally {
      Nt = c, gi.transition = d;
    }
  }
  function El(n, r, l, o) {
    if (Ta) {
      var c = no(n, r, l, o);
      if (c === null) Sc(n, r, o, uu, l), xa(n, o);
      else if (Wo(c, n, r, l, o)) o.stopPropagation();
      else if (xa(n, o), r & 4 && -1 < Or.indexOf(n)) {
        for (; c !== null; ) {
          var d = ke(c);
          if (d !== null && Tt(d), d = no(n, r, l, o), d === null && Sc(n, r, o, uu, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Sc(n, r, o, null, l);
    }
  }
  var uu = null;
  function no(n, r, l, o) {
    if (uu = null, n = Yt(o), n = vu(n), n !== null) if (r = tt(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = $e(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return uu = n, null;
  }
  function ro(n) {
    switch (n) {
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
      case "blur":
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
        switch (lt()) {
          case Xa:
            return 1;
          case nu:
            return 4;
          case ru:
          case hl:
            return 16;
          case Wu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ei = null, h = null, E = null;
  function z() {
    if (E) return E;
    var n, r = h, l = r.length, o, c = "value" in ei ? ei.value : ei.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return E = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function j(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function K() {
    return !0;
  }
  function Oe() {
    return !1;
  }
  function ae(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var w in n) n.hasOwnProperty(w) && (l = n[w], this[w] = l ? l(d) : d[w]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? K : Oe, this.isPropagationStopped = Oe, this;
    }
    return re(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = K);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = K);
    }, persist: function() {
    }, isPersistent: K }), r;
  }
  var Me = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, gt = ae(Me), kt = re({}, Me, { view: 0, detail: 0 }), rn = ae(kt), Wt, ct, Gt, hn = re({}, kt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Jf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Gt && (Gt && n.type === "mousemove" ? (Wt = n.screenX - Gt.screenX, ct = n.screenY - Gt.screenY) : ct = Wt = 0, Gt = n), Wt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : ct;
  } }), Cl = ae(hn), qo = re({}, hn, { dataTransfer: 0 }), Bi = ae(qo), Xo = re({}, kt, { relatedTarget: 0 }), ou = ae(Xo), qf = re({}, Me, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), oc = ae(qf), Xf = re({}, Me, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), iv = ae(Xf), Kf = re({}, Me, { data: 0 }), Zf = ae(Kf), lv = {
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
  }, uv = {
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
  }, Jm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Ii(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Jm[n]) ? !!r[n] : !1;
  }
  function Jf() {
    return Ii;
  }
  var ed = re({}, kt, { key: function(n) {
    if (n.key) {
      var r = lv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = j(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? uv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Jf, charCode: function(n) {
    return n.type === "keypress" ? j(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? j(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), td = ae(ed), nd = re({}, hn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ov = ae(nd), sc = re({}, kt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Jf }), sv = ae(sc), Qr = re({}, Me, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Yi = ae(Qr), Nn = re({}, hn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), $i = ae(Nn), rd = [9, 13, 27, 32], ao = We && "CompositionEvent" in window, Ko = null;
  We && "documentMode" in document && (Ko = document.documentMode);
  var Zo = We && "TextEvent" in window && !Ko, cv = We && (!ao || Ko && 8 < Ko && 11 >= Ko), fv = " ", cc = !1;
  function dv(n, r) {
    switch (n) {
      case "keyup":
        return rd.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function pv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var io = !1;
  function vv(n, r) {
    switch (n) {
      case "compositionend":
        return pv(r);
      case "keypress":
        return r.which !== 32 ? null : (cc = !0, fv);
      case "textInput":
        return n = r.data, n === fv && cc ? null : n;
      default:
        return null;
    }
  }
  function ey(n, r) {
    if (io) return n === "compositionend" || !ao && dv(n, r) ? (n = z(), E = h = ei = null, io = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return cv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var ty = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function hv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!ty[n.type] : r === "textarea";
  }
  function ad(n, r, l, o) {
    Hi(o), r = as(r, "onChange"), 0 < r.length && (l = new gt("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Si = null, su = null;
  function mv(n) {
    du(n, 0);
  }
  function Jo(n) {
    var r = ni(n);
    if (Rr(r)) return n;
  }
  function ny(n, r) {
    if (n === "change") return r;
  }
  var yv = !1;
  if (We) {
    var id;
    if (We) {
      var ld = "oninput" in document;
      if (!ld) {
        var gv = document.createElement("div");
        gv.setAttribute("oninput", "return;"), ld = typeof gv.oninput == "function";
      }
      id = ld;
    } else id = !1;
    yv = id && (!document.documentMode || 9 < document.documentMode);
  }
  function Sv() {
    Si && (Si.detachEvent("onpropertychange", wv), su = Si = null);
  }
  function wv(n) {
    if (n.propertyName === "value" && Jo(su)) {
      var r = [];
      ad(r, su, n, Yt(n)), tu(mv, r);
    }
  }
  function ry(n, r, l) {
    n === "focusin" ? (Sv(), Si = r, su = l, Si.attachEvent("onpropertychange", wv)) : n === "focusout" && Sv();
  }
  function Ev(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Jo(su);
  }
  function ay(n, r) {
    if (n === "click") return Jo(r);
  }
  function Cv(n, r) {
    if (n === "input" || n === "change") return Jo(r);
  }
  function iy(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ti = typeof Object.is == "function" ? Object.is : iy;
  function es(n, r) {
    if (ti(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!ie.call(r, c) || !ti(n[c], r[c])) return !1;
    }
    return !0;
  }
  function bv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function fc(n, r) {
    var l = bv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = bv(l);
    }
  }
  function bl(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? bl(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ts() {
    for (var n = window, r = En(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = En(n.document);
    }
    return r;
  }
  function dc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function lo(n) {
    var r = ts(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && bl(l.ownerDocument.documentElement, l)) {
      if (o !== null && dc(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = fc(l, d);
          var m = fc(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var ly = We && "documentMode" in document && 11 >= document.documentMode, uo = null, ud = null, ns = null, od = !1;
  function sd(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    od || uo == null || uo !== En(o) || (o = uo, "selectionStart" in o && dc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ns && es(ns, o) || (ns = o, o = as(ud, "onSelect"), 0 < o.length && (r = new gt("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = uo)));
  }
  function pc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var cu = { animationend: pc("Animation", "AnimationEnd"), animationiteration: pc("Animation", "AnimationIteration"), animationstart: pc("Animation", "AnimationStart"), transitionend: pc("Transition", "TransitionEnd") }, lr = {}, cd = {};
  We && (cd = document.createElement("div").style, "AnimationEvent" in window || (delete cu.animationend.animation, delete cu.animationiteration.animation, delete cu.animationstart.animation), "TransitionEvent" in window || delete cu.transitionend.transition);
  function vc(n) {
    if (lr[n]) return lr[n];
    if (!cu[n]) return n;
    var r = cu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in cd) return lr[n] = r[l];
    return n;
  }
  var xv = vc("animationend"), Rv = vc("animationiteration"), Tv = vc("animationstart"), kv = vc("transitionend"), fd = /* @__PURE__ */ new Map(), hc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ka(n, r) {
    fd.set(n, r), Ze(r, [n]);
  }
  for (var dd = 0; dd < hc.length; dd++) {
    var fu = hc[dd], uy = fu.toLowerCase(), oy = fu[0].toUpperCase() + fu.slice(1);
    ka(uy, "on" + oy);
  }
  ka(xv, "onAnimationEnd"), ka(Rv, "onAnimationIteration"), ka(Tv, "onAnimationStart"), ka("dblclick", "onDoubleClick"), ka("focusin", "onFocus"), ka("focusout", "onBlur"), ka(kv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), Ze("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ze("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ze("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ze("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ze("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ze("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var rs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), pd = new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));
  function mc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, me(o, r, void 0, n), n.currentTarget = null;
  }
  function du(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var w = o[m], b = w.instance, U = w.currentTarget;
          if (w = w.listener, b !== d && c.isPropagationStopped()) break e;
          mc(c, w, U), d = b;
        }
        else for (m = 0; m < o.length; m++) {
          if (w = o[m], b = w.instance, U = w.currentTarget, w = w.listener, b !== d && c.isPropagationStopped()) break e;
          mc(c, w, U), d = b;
        }
      }
    }
    if (vi) throw n = C, vi = !1, C = null, n;
  }
  function Vt(n, r) {
    var l = r[us];
    l === void 0 && (l = r[us] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (_v(r, n, 2, !1), l.add(o));
  }
  function yc(n, r, l) {
    var o = 0;
    r && (o |= 4), _v(l, n, o, r);
  }
  var gc = "_reactListening" + Math.random().toString(36).slice(2);
  function oo(n) {
    if (!n[gc]) {
      n[gc] = !0, Xe.forEach(function(l) {
        l !== "selectionchange" && (pd.has(l) || yc(l, !1, n), yc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[gc] || (r[gc] = !0, yc("selectionchange", !1, r));
    }
  }
  function _v(n, r, l, o) {
    switch (ro(r)) {
      case 1:
        var c = eo;
        break;
      case 4:
        c = to;
        break;
      default:
        c = El;
    }
    l = c.bind(null, r, l, n), c = void 0, !kr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Sc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var w = o.stateNode.containerInfo;
        if (w === c || w.nodeType === 8 && w.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var b = m.tag;
          if ((b === 3 || b === 4) && (b = m.stateNode.containerInfo, b === c || b.nodeType === 8 && b.parentNode === c)) return;
          m = m.return;
        }
        for (; w !== null; ) {
          if (m = vu(w), m === null) return;
          if (b = m.tag, b === 5 || b === 6) {
            o = d = m;
            continue e;
          }
          w = w.parentNode;
        }
      }
      o = o.return;
    }
    tu(function() {
      var U = d, W = Yt(l), q = [];
      e: {
        var $ = fd.get(n);
        if ($ !== void 0) {
          var de = gt, ge = n;
          switch (n) {
            case "keypress":
              if (j(l) === 0) break e;
            case "keydown":
            case "keyup":
              de = td;
              break;
            case "focusin":
              ge = "focus", de = ou;
              break;
            case "focusout":
              ge = "blur", de = ou;
              break;
            case "beforeblur":
            case "afterblur":
              de = ou;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              de = Cl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              de = Bi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              de = sv;
              break;
            case xv:
            case Rv:
            case Tv:
              de = oc;
              break;
            case kv:
              de = Yi;
              break;
            case "scroll":
              de = rn;
              break;
            case "wheel":
              de = $i;
              break;
            case "copy":
            case "cut":
            case "paste":
              de = iv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              de = ov;
          }
          var Ee = (r & 4) !== 0, _n = !Ee && n === "scroll", _ = Ee ? $ !== null ? $ + "Capture" : null : $;
          Ee = [];
          for (var R = U, L; R !== null; ) {
            L = R;
            var G = L.stateNode;
            if (L.tag === 5 && G !== null && (L = G, _ !== null && (G = Tr(R, _), G != null && Ee.push(so(R, G, L)))), _n) break;
            R = R.return;
          }
          0 < Ee.length && ($ = new de($, ge, null, l, W), q.push({ event: $, listeners: Ee }));
        }
      }
      if (!(r & 7)) {
        e: {
          if ($ = n === "mouseover" || n === "pointerover", de = n === "mouseout" || n === "pointerout", $ && l !== tn && (ge = l.relatedTarget || l.fromElement) && (vu(ge) || ge[Qi])) break e;
          if ((de || $) && ($ = W.window === W ? W : ($ = W.ownerDocument) ? $.defaultView || $.parentWindow : window, de ? (ge = l.relatedTarget || l.toElement, de = U, ge = ge ? vu(ge) : null, ge !== null && (_n = tt(ge), ge !== _n || ge.tag !== 5 && ge.tag !== 6) && (ge = null)) : (de = null, ge = U), de !== ge)) {
            if (Ee = Cl, G = "onMouseLeave", _ = "onMouseEnter", R = "mouse", (n === "pointerout" || n === "pointerover") && (Ee = ov, G = "onPointerLeave", _ = "onPointerEnter", R = "pointer"), _n = de == null ? $ : ni(de), L = ge == null ? $ : ni(ge), $ = new Ee(G, R + "leave", de, l, W), $.target = _n, $.relatedTarget = L, G = null, vu(W) === U && (Ee = new Ee(_, R + "enter", ge, l, W), Ee.target = L, Ee.relatedTarget = _n, G = Ee), _n = G, de && ge) t: {
              for (Ee = de, _ = ge, R = 0, L = Ee; L; L = xl(L)) R++;
              for (L = 0, G = _; G; G = xl(G)) L++;
              for (; 0 < R - L; ) Ee = xl(Ee), R--;
              for (; 0 < L - R; ) _ = xl(_), L--;
              for (; R--; ) {
                if (Ee === _ || _ !== null && Ee === _.alternate) break t;
                Ee = xl(Ee), _ = xl(_);
              }
              Ee = null;
            }
            else Ee = null;
            de !== null && Dv(q, $, de, Ee, !1), ge !== null && _n !== null && Dv(q, _n, ge, Ee, !0);
          }
        }
        e: {
          if ($ = U ? ni(U) : window, de = $.nodeName && $.nodeName.toLowerCase(), de === "select" || de === "input" && $.type === "file") var Se = ny;
          else if (hv($)) if (yv) Se = Cv;
          else {
            Se = Ev;
            var Ne = ry;
          }
          else (de = $.nodeName) && de.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (Se = ay);
          if (Se && (Se = Se(n, U))) {
            ad(q, Se, l, W);
            break e;
          }
          Ne && Ne(n, $, U), n === "focusout" && (Ne = $._wrapperState) && Ne.controlled && $.type === "number" && oa($, "number", $.value);
        }
        switch (Ne = U ? ni(U) : window, n) {
          case "focusin":
            (hv(Ne) || Ne.contentEditable === "true") && (uo = Ne, ud = U, ns = null);
            break;
          case "focusout":
            ns = ud = uo = null;
            break;
          case "mousedown":
            od = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            od = !1, sd(q, l, W);
            break;
          case "selectionchange":
            if (ly) break;
          case "keydown":
          case "keyup":
            sd(q, l, W);
        }
        var ze;
        if (ao) e: {
          switch (n) {
            case "compositionstart":
              var Ie = "onCompositionStart";
              break e;
            case "compositionend":
              Ie = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ie = "onCompositionUpdate";
              break e;
          }
          Ie = void 0;
        }
        else io ? dv(n, l) && (Ie = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Ie = "onCompositionStart");
        Ie && (cv && l.locale !== "ko" && (io || Ie !== "onCompositionStart" ? Ie === "onCompositionEnd" && io && (ze = z()) : (ei = W, h = "value" in ei ? ei.value : ei.textContent, io = !0)), Ne = as(U, Ie), 0 < Ne.length && (Ie = new Zf(Ie, n, null, l, W), q.push({ event: Ie, listeners: Ne }), ze ? Ie.data = ze : (ze = pv(l), ze !== null && (Ie.data = ze)))), (ze = Zo ? vv(n, l) : ey(n, l)) && (U = as(U, "onBeforeInput"), 0 < U.length && (W = new Zf("onBeforeInput", "beforeinput", null, l, W), q.push({ event: W, listeners: U }), W.data = ze));
      }
      du(q, r);
    });
  }
  function so(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function as(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Tr(n, l), d != null && o.unshift(so(n, d, c)), d = Tr(n, r), d != null && o.push(so(n, d, c))), n = n.return;
    }
    return o;
  }
  function xl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Dv(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var w = l, b = w.alternate, U = w.stateNode;
      if (b !== null && b === o) break;
      w.tag === 5 && U !== null && (w = U, c ? (b = Tr(l, d), b != null && m.unshift(so(l, b, w))) : c || (b = Tr(l, d), b != null && m.push(so(l, b, w)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var Ov = /\r\n?/g, sy = /\u0000|\uFFFD/g;
  function Lv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Ov, `
`).replace(sy, "");
  }
  function wc(n, r, l) {
    if (r = Lv(r), Lv(n) !== r && l) throw Error(N(425));
  }
  function Rl() {
  }
  var is = null, pu = null;
  function Ec(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Cc = typeof setTimeout == "function" ? setTimeout : void 0, vd = typeof clearTimeout == "function" ? clearTimeout : void 0, Nv = typeof Promise == "function" ? Promise : void 0, co = typeof queueMicrotask == "function" ? queueMicrotask : typeof Nv < "u" ? function(n) {
    return Nv.resolve(null).then(n).catch(bc);
  } : Cc;
  function bc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function fo(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Ja(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Ja(r);
  }
  function wi(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Mv(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Tl = Math.random().toString(36).slice(2), Ei = "__reactFiber$" + Tl, ls = "__reactProps$" + Tl, Qi = "__reactContainer$" + Tl, us = "__reactEvents$" + Tl, po = "__reactListeners$" + Tl, cy = "__reactHandles$" + Tl;
  function vu(n) {
    var r = n[Ei];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Qi] || l[Ei]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Mv(n); n !== null; ) {
          if (l = n[Ei]) return l;
          n = Mv(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ke(n) {
    return n = n[Ei] || n[Qi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ni(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(N(33));
  }
  function mn(n) {
    return n[ls] || null;
  }
  var Et = [], _a = -1;
  function Da(n) {
    return { current: n };
  }
  function an(n) {
    0 > _a || (n.current = Et[_a], Et[_a] = null, _a--);
  }
  function Te(n, r) {
    _a++, Et[_a] = n.current, n.current = r;
  }
  var Er = {}, wn = Da(Er), $n = Da(!1), Wr = Er;
  function Gr(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Er;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Mn(n) {
    return n = n.childContextTypes, n != null;
  }
  function vo() {
    an($n), an(wn);
  }
  function zv(n, r, l) {
    if (wn.current !== Er) throw Error(N(168));
    Te(wn, r), Te($n, l);
  }
  function os(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(N(108, it(n) || "Unknown", c));
    return re({}, l, o);
  }
  function Kn(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Er, Wr = wn.current, Te(wn, n), Te($n, $n.current), !0;
  }
  function xc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(N(169));
    l ? (n = os(n, r, Wr), o.__reactInternalMemoizedMergedChildContext = n, an($n), an(wn), Te(wn, n)) : an($n), Te($n, l);
  }
  var Ci = null, ho = !1, Wi = !1;
  function Rc(n) {
    Ci === null ? Ci = [n] : Ci.push(n);
  }
  function kl(n) {
    ho = !0, Rc(n);
  }
  function bi() {
    if (!Wi && Ci !== null) {
      Wi = !0;
      var n = 0, r = Nt;
      try {
        var l = Ci;
        for (Nt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ci = null, ho = !1;
      } catch (c) {
        throw Ci !== null && (Ci = Ci.slice(n + 1)), sn(Xa, bi), c;
      } finally {
        Nt = r, Wi = !1;
      }
    }
    return null;
  }
  var _l = [], Dl = 0, Ol = null, Gi = 0, zn = [], Oa = 0, da = null, xi = 1, Ri = "";
  function hu(n, r) {
    _l[Dl++] = Gi, _l[Dl++] = Ol, Ol = n, Gi = r;
  }
  function Uv(n, r, l) {
    zn[Oa++] = xi, zn[Oa++] = Ri, zn[Oa++] = da, da = n;
    var o = xi;
    n = Ri;
    var c = 32 - _r(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - _r(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, xi = 1 << 32 - _r(r) + c | l << c | o, Ri = d + n;
    } else xi = 1 << d | l << c | o, Ri = n;
  }
  function Tc(n) {
    n.return !== null && (hu(n, 1), Uv(n, 1, 0));
  }
  function kc(n) {
    for (; n === Ol; ) Ol = _l[--Dl], _l[Dl] = null, Gi = _l[--Dl], _l[Dl] = null;
    for (; n === da; ) da = zn[--Oa], zn[Oa] = null, Ri = zn[--Oa], zn[Oa] = null, xi = zn[--Oa], zn[Oa] = null;
  }
  var qr = null, Xr = null, dn = !1, La = null;
  function hd(n, r) {
    var l = Aa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Av(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, qr = n, Xr = wi(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, qr = n, Xr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = da !== null ? { id: xi, overflow: Ri } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Aa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, qr = n, Xr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function md(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function yd(n) {
    if (dn) {
      var r = Xr;
      if (r) {
        var l = r;
        if (!Av(n, r)) {
          if (md(n)) throw Error(N(418));
          r = wi(l.nextSibling);
          var o = qr;
          r && Av(n, r) ? hd(o, l) : (n.flags = n.flags & -4097 | 2, dn = !1, qr = n);
        }
      } else {
        if (md(n)) throw Error(N(418));
        n.flags = n.flags & -4097 | 2, dn = !1, qr = n;
      }
    }
  }
  function Qn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    qr = n;
  }
  function _c(n) {
    if (n !== qr) return !1;
    if (!dn) return Qn(n), dn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Ec(n.type, n.memoizedProps)), r && (r = Xr)) {
      if (md(n)) throw ss(), Error(N(418));
      for (; r; ) hd(n, r), r = wi(r.nextSibling);
    }
    if (Qn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(N(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Xr = wi(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Xr = null;
      }
    } else Xr = qr ? wi(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ss() {
    for (var n = Xr; n; ) n = wi(n.nextSibling);
  }
  function Ll() {
    Xr = qr = null, dn = !1;
  }
  function qi(n) {
    La === null ? La = [n] : La.push(n);
  }
  var fy = mt.ReactCurrentBatchConfig;
  function mu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(N(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(N(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var w = c.refs;
          m === null ? delete w[d] : w[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(N(284));
      if (!l._owner) throw Error(N(290, n));
    }
    return n;
  }
  function Dc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(N(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function jv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function yu(n) {
    function r(_, R) {
      if (n) {
        var L = _.deletions;
        L === null ? (_.deletions = [R], _.flags |= 16) : L.push(R);
      }
    }
    function l(_, R) {
      if (!n) return null;
      for (; R !== null; ) r(_, R), R = R.sibling;
      return null;
    }
    function o(_, R) {
      for (_ = /* @__PURE__ */ new Map(); R !== null; ) R.key !== null ? _.set(R.key, R) : _.set(R.index, R), R = R.sibling;
      return _;
    }
    function c(_, R) {
      return _ = Hl(_, R), _.index = 0, _.sibling = null, _;
    }
    function d(_, R, L) {
      return _.index = L, n ? (L = _.alternate, L !== null ? (L = L.index, L < R ? (_.flags |= 2, R) : L) : (_.flags |= 2, R)) : (_.flags |= 1048576, R);
    }
    function m(_) {
      return n && _.alternate === null && (_.flags |= 2), _;
    }
    function w(_, R, L, G) {
      return R === null || R.tag !== 6 ? (R = Gd(L, _.mode, G), R.return = _, R) : (R = c(R, L), R.return = _, R);
    }
    function b(_, R, L, G) {
      var Se = L.type;
      return Se === Pe ? W(_, R, L.props.children, G, L.key) : R !== null && (R.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === Lt && jv(Se) === R.type) ? (G = c(R, L.props), G.ref = mu(_, R, L), G.return = _, G) : (G = Hs(L.type, L.key, L.props, null, _.mode, G), G.ref = mu(_, R, L), G.return = _, G);
    }
    function U(_, R, L, G) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== L.containerInfo || R.stateNode.implementation !== L.implementation ? (R = sf(L, _.mode, G), R.return = _, R) : (R = c(R, L.children || []), R.return = _, R);
    }
    function W(_, R, L, G, Se) {
      return R === null || R.tag !== 7 ? (R = tl(L, _.mode, G, Se), R.return = _, R) : (R = c(R, L), R.return = _, R);
    }
    function q(_, R, L) {
      if (typeof R == "string" && R !== "" || typeof R == "number") return R = Gd("" + R, _.mode, L), R.return = _, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case ce:
            return L = Hs(R.type, R.key, R.props, null, _.mode, L), L.ref = mu(_, null, R), L.return = _, L;
          case et:
            return R = sf(R, _.mode, L), R.return = _, R;
          case Lt:
            var G = R._init;
            return q(_, G(R._payload), L);
        }
        if (qn(R) || be(R)) return R = tl(R, _.mode, L, null), R.return = _, R;
        Dc(_, R);
      }
      return null;
    }
    function $(_, R, L, G) {
      var Se = R !== null ? R.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return Se !== null ? null : w(_, R, "" + L, G);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case ce:
            return L.key === Se ? b(_, R, L, G) : null;
          case et:
            return L.key === Se ? U(_, R, L, G) : null;
          case Lt:
            return Se = L._init, $(
              _,
              R,
              Se(L._payload),
              G
            );
        }
        if (qn(L) || be(L)) return Se !== null ? null : W(_, R, L, G, null);
        Dc(_, L);
      }
      return null;
    }
    function de(_, R, L, G, Se) {
      if (typeof G == "string" && G !== "" || typeof G == "number") return _ = _.get(L) || null, w(R, _, "" + G, Se);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case ce:
            return _ = _.get(G.key === null ? L : G.key) || null, b(R, _, G, Se);
          case et:
            return _ = _.get(G.key === null ? L : G.key) || null, U(R, _, G, Se);
          case Lt:
            var Ne = G._init;
            return de(_, R, L, Ne(G._payload), Se);
        }
        if (qn(G) || be(G)) return _ = _.get(L) || null, W(R, _, G, Se, null);
        Dc(R, G);
      }
      return null;
    }
    function ge(_, R, L, G) {
      for (var Se = null, Ne = null, ze = R, Ie = R = 0, er = null; ze !== null && Ie < L.length; Ie++) {
        ze.index > Ie ? (er = ze, ze = null) : er = ze.sibling;
        var Ut = $(_, ze, L[Ie], G);
        if (Ut === null) {
          ze === null && (ze = er);
          break;
        }
        n && ze && Ut.alternate === null && r(_, ze), R = d(Ut, R, Ie), Ne === null ? Se = Ut : Ne.sibling = Ut, Ne = Ut, ze = er;
      }
      if (Ie === L.length) return l(_, ze), dn && hu(_, Ie), Se;
      if (ze === null) {
        for (; Ie < L.length; Ie++) ze = q(_, L[Ie], G), ze !== null && (R = d(ze, R, Ie), Ne === null ? Se = ze : Ne.sibling = ze, Ne = ze);
        return dn && hu(_, Ie), Se;
      }
      for (ze = o(_, ze); Ie < L.length; Ie++) er = de(ze, _, Ie, L[Ie], G), er !== null && (n && er.alternate !== null && ze.delete(er.key === null ? Ie : er.key), R = d(er, R, Ie), Ne === null ? Se = er : Ne.sibling = er, Ne = er);
      return n && ze.forEach(function(Bl) {
        return r(_, Bl);
      }), dn && hu(_, Ie), Se;
    }
    function Ee(_, R, L, G) {
      var Se = be(L);
      if (typeof Se != "function") throw Error(N(150));
      if (L = Se.call(L), L == null) throw Error(N(151));
      for (var Ne = Se = null, ze = R, Ie = R = 0, er = null, Ut = L.next(); ze !== null && !Ut.done; Ie++, Ut = L.next()) {
        ze.index > Ie ? (er = ze, ze = null) : er = ze.sibling;
        var Bl = $(_, ze, Ut.value, G);
        if (Bl === null) {
          ze === null && (ze = er);
          break;
        }
        n && ze && Bl.alternate === null && r(_, ze), R = d(Bl, R, Ie), Ne === null ? Se = Bl : Ne.sibling = Bl, Ne = Bl, ze = er;
      }
      if (Ut.done) return l(
        _,
        ze
      ), dn && hu(_, Ie), Se;
      if (ze === null) {
        for (; !Ut.done; Ie++, Ut = L.next()) Ut = q(_, Ut.value, G), Ut !== null && (R = d(Ut, R, Ie), Ne === null ? Se = Ut : Ne.sibling = Ut, Ne = Ut);
        return dn && hu(_, Ie), Se;
      }
      for (ze = o(_, ze); !Ut.done; Ie++, Ut = L.next()) Ut = de(ze, _, Ie, Ut.value, G), Ut !== null && (n && Ut.alternate !== null && ze.delete(Ut.key === null ? Ie : Ut.key), R = d(Ut, R, Ie), Ne === null ? Se = Ut : Ne.sibling = Ut, Ne = Ut);
      return n && ze.forEach(function(Sh) {
        return r(_, Sh);
      }), dn && hu(_, Ie), Se;
    }
    function _n(_, R, L, G) {
      if (typeof L == "object" && L !== null && L.type === Pe && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case ce:
            e: {
              for (var Se = L.key, Ne = R; Ne !== null; ) {
                if (Ne.key === Se) {
                  if (Se = L.type, Se === Pe) {
                    if (Ne.tag === 7) {
                      l(_, Ne.sibling), R = c(Ne, L.props.children), R.return = _, _ = R;
                      break e;
                    }
                  } else if (Ne.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === Lt && jv(Se) === Ne.type) {
                    l(_, Ne.sibling), R = c(Ne, L.props), R.ref = mu(_, Ne, L), R.return = _, _ = R;
                    break e;
                  }
                  l(_, Ne);
                  break;
                } else r(_, Ne);
                Ne = Ne.sibling;
              }
              L.type === Pe ? (R = tl(L.props.children, _.mode, G, L.key), R.return = _, _ = R) : (G = Hs(L.type, L.key, L.props, null, _.mode, G), G.ref = mu(_, R, L), G.return = _, _ = G);
            }
            return m(_);
          case et:
            e: {
              for (Ne = L.key; R !== null; ) {
                if (R.key === Ne) if (R.tag === 4 && R.stateNode.containerInfo === L.containerInfo && R.stateNode.implementation === L.implementation) {
                  l(_, R.sibling), R = c(R, L.children || []), R.return = _, _ = R;
                  break e;
                } else {
                  l(_, R);
                  break;
                }
                else r(_, R);
                R = R.sibling;
              }
              R = sf(L, _.mode, G), R.return = _, _ = R;
            }
            return m(_);
          case Lt:
            return Ne = L._init, _n(_, R, Ne(L._payload), G);
        }
        if (qn(L)) return ge(_, R, L, G);
        if (be(L)) return Ee(_, R, L, G);
        Dc(_, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, R !== null && R.tag === 6 ? (l(_, R.sibling), R = c(R, L), R.return = _, _ = R) : (l(_, R), R = Gd(L, _.mode, G), R.return = _, _ = R), m(_)) : l(_, R);
    }
    return _n;
  }
  var xn = yu(!0), oe = yu(!1), pa = Da(null), Kr = null, mo = null, gd = null;
  function Sd() {
    gd = mo = Kr = null;
  }
  function wd(n) {
    var r = pa.current;
    an(pa), n._currentValue = r;
  }
  function Ed(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function yn(n, r) {
    Kr = n, gd = mo = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (An = !0), n.firstContext = null);
  }
  function Na(n) {
    var r = n._currentValue;
    if (gd !== n) if (n = { context: n, memoizedValue: r, next: null }, mo === null) {
      if (Kr === null) throw Error(N(308));
      mo = n, Kr.dependencies = { lanes: 0, firstContext: n };
    } else mo = mo.next = n;
    return r;
  }
  var gu = null;
  function Cd(n) {
    gu === null ? gu = [n] : gu.push(n);
  }
  function bd(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Cd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, va(n, o);
  }
  function va(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ha = !1;
  function xd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Fv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Xi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Nl(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Ct & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, va(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Cd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, va(n, l);
  }
  function Oc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
    }
  }
  function Hv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function cs(n, r, l, o) {
    var c = n.updateQueue;
    ha = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, w = c.shared.pending;
    if (w !== null) {
      c.shared.pending = null;
      var b = w, U = b.next;
      b.next = null, m === null ? d = U : m.next = U, m = b;
      var W = n.alternate;
      W !== null && (W = W.updateQueue, w = W.lastBaseUpdate, w !== m && (w === null ? W.firstBaseUpdate = U : w.next = U, W.lastBaseUpdate = b));
    }
    if (d !== null) {
      var q = c.baseState;
      m = 0, W = U = b = null, w = d;
      do {
        var $ = w.lane, de = w.eventTime;
        if ((o & $) === $) {
          W !== null && (W = W.next = {
            eventTime: de,
            lane: 0,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null
          });
          e: {
            var ge = n, Ee = w;
            switch ($ = r, de = l, Ee.tag) {
              case 1:
                if (ge = Ee.payload, typeof ge == "function") {
                  q = ge.call(de, q, $);
                  break e;
                }
                q = ge;
                break e;
              case 3:
                ge.flags = ge.flags & -65537 | 128;
              case 0:
                if (ge = Ee.payload, $ = typeof ge == "function" ? ge.call(de, q, $) : ge, $ == null) break e;
                q = re({}, q, $);
                break e;
              case 2:
                ha = !0;
            }
          }
          w.callback !== null && w.lane !== 0 && (n.flags |= 64, $ = c.effects, $ === null ? c.effects = [w] : $.push(w));
        } else de = { eventTime: de, lane: $, tag: w.tag, payload: w.payload, callback: w.callback, next: null }, W === null ? (U = W = de, b = q) : W = W.next = de, m |= $;
        if (w = w.next, w === null) {
          if (w = c.shared.pending, w === null) break;
          $ = w, w = $.next, $.next = null, c.lastBaseUpdate = $, c.shared.pending = null;
        }
      } while (!0);
      if (W === null && (b = q), c.baseState = b, c.firstBaseUpdate = U, c.lastBaseUpdate = W, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Oi |= m, n.lanes = m, n.memoizedState = q;
    }
  }
  function Rd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(N(191, c));
        c.call(o);
      }
    }
  }
  var fs = {}, Ti = Da(fs), ds = Da(fs), ps = Da(fs);
  function Su(n) {
    if (n === fs) throw Error(N(174));
    return n;
  }
  function Td(n, r) {
    switch (Te(ps, r), Te(ds, n), Te(Ti, fs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : sa(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = sa(r, n);
    }
    an(Ti), Te(Ti, r);
  }
  function wu() {
    an(Ti), an(ds), an(ps);
  }
  function Pv(n) {
    Su(ps.current);
    var r = Su(Ti.current), l = sa(r, n.type);
    r !== l && (Te(ds, n), Te(Ti, l));
  }
  function Lc(n) {
    ds.current === n && (an(Ti), an(ds));
  }
  var gn = Da(0);
  function Nc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var vs = [];
  function _e() {
    for (var n = 0; n < vs.length; n++) vs[n]._workInProgressVersionPrimary = null;
    vs.length = 0;
  }
  var ht = mt.ReactCurrentDispatcher, Mt = mt.ReactCurrentBatchConfig, qt = 0, zt = null, Un = null, Zn = null, Mc = !1, hs = !1, Eu = 0, Y = 0;
  function Ot() {
    throw Error(N(321));
  }
  function Fe(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ti(n[l], r[l])) return !1;
    return !0;
  }
  function Ml(n, r, l, o, c, d) {
    if (qt = d, zt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, ht.current = n === null || n.memoizedState === null ? Gc : Es, n = l(o, c), hs) {
      d = 0;
      do {
        if (hs = !1, Eu = 0, 25 <= d) throw Error(N(301));
        d += 1, Zn = Un = null, r.updateQueue = null, ht.current = qc, n = l(o, c);
      } while (hs);
    }
    if (ht.current = Tu, r = Un !== null && Un.next !== null, qt = 0, Zn = Un = zt = null, Mc = !1, r) throw Error(N(300));
    return n;
  }
  function ri() {
    var n = Eu !== 0;
    return Eu = 0, n;
  }
  function Cr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Zn === null ? zt.memoizedState = Zn = n : Zn = Zn.next = n, Zn;
  }
  function Rn() {
    if (Un === null) {
      var n = zt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Un.next;
    var r = Zn === null ? zt.memoizedState : Zn.next;
    if (r !== null) Zn = r, Un = n;
    else {
      if (n === null) throw Error(N(310));
      Un = n, n = { memoizedState: Un.memoizedState, baseState: Un.baseState, baseQueue: Un.baseQueue, queue: Un.queue, next: null }, Zn === null ? zt.memoizedState = Zn = n : Zn = Zn.next = n;
    }
    return Zn;
  }
  function Ki(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function zl(n) {
    var r = Rn(), l = r.queue;
    if (l === null) throw Error(N(311));
    l.lastRenderedReducer = n;
    var o = Un, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var w = m = null, b = null, U = d;
      do {
        var W = U.lane;
        if ((qt & W) === W) b !== null && (b = b.next = { lane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), o = U.hasEagerState ? U.eagerState : n(o, U.action);
        else {
          var q = {
            lane: W,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          b === null ? (w = b = q, m = o) : b = b.next = q, zt.lanes |= W, Oi |= W;
        }
        U = U.next;
      } while (U !== null && U !== d);
      b === null ? m = o : b.next = w, ti(o, r.memoizedState) || (An = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = b, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, zt.lanes |= d, Oi |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Cu(n) {
    var r = Rn(), l = r.queue;
    if (l === null) throw Error(N(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ti(d, r.memoizedState) || (An = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function zc() {
  }
  function Uc(n, r) {
    var l = zt, o = Rn(), c = r(), d = !ti(o.memoizedState, c);
    if (d && (o.memoizedState = c, An = !0), o = o.queue, ms(Fc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Zn !== null && Zn.memoizedState.tag & 1) {
      if (l.flags |= 2048, bu(9, jc.bind(null, l, o, c, r), void 0, null), Wn === null) throw Error(N(349));
      qt & 30 || Ac(l, r, c);
    }
    return c;
  }
  function Ac(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = zt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, zt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function jc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Hc(r) && Pc(n);
  }
  function Fc(n, r, l) {
    return l(function() {
      Hc(r) && Pc(n);
    });
  }
  function Hc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ti(n, l);
    } catch {
      return !0;
    }
  }
  function Pc(n) {
    var r = va(n, 1);
    r !== null && zr(r, n, 1, -1);
  }
  function Vc(n) {
    var r = Cr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ki, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ru.bind(null, zt, n), [r.memoizedState, n];
  }
  function bu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = zt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, zt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Bc() {
    return Rn().memoizedState;
  }
  function yo(n, r, l, o) {
    var c = Cr();
    zt.flags |= n, c.memoizedState = bu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function go(n, r, l, o) {
    var c = Rn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Un !== null) {
      var m = Un.memoizedState;
      if (d = m.destroy, o !== null && Fe(o, m.deps)) {
        c.memoizedState = bu(r, l, d, o);
        return;
      }
    }
    zt.flags |= n, c.memoizedState = bu(1 | r, l, d, o);
  }
  function Ic(n, r) {
    return yo(8390656, 8, n, r);
  }
  function ms(n, r) {
    return go(2048, 8, n, r);
  }
  function Yc(n, r) {
    return go(4, 2, n, r);
  }
  function ys(n, r) {
    return go(4, 4, n, r);
  }
  function xu(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function $c(n, r, l) {
    return l = l != null ? l.concat([n]) : null, go(4, 4, xu.bind(null, r, n), l);
  }
  function gs() {
  }
  function Qc(n, r) {
    var l = Rn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Fe(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Wc(n, r) {
    var l = Rn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Fe(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function kd(n, r, l) {
    return qt & 21 ? (ti(l, r) || (l = Xu(), zt.lanes |= l, Oi |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, An = !0), n.memoizedState = l);
  }
  function Ss(n, r) {
    var l = Nt;
    Nt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Mt.transition;
    Mt.transition = {};
    try {
      n(!1), r();
    } finally {
      Nt = l, Mt.transition = o;
    }
  }
  function _d() {
    return Rn().memoizedState;
  }
  function ws(n, r, l) {
    var o = Li(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Zr(n)) Vv(r, l);
    else if (l = bd(n, r, l, o), l !== null) {
      var c = Hn();
      zr(l, n, o, c), Zt(l, r, o);
    }
  }
  function Ru(n, r, l) {
    var o = Li(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Zr(n)) Vv(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, w = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = w, ti(w, m)) {
          var b = r.interleaved;
          b === null ? (c.next = c, Cd(r)) : (c.next = b.next, b.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = bd(n, r, c, o), l !== null && (c = Hn(), zr(l, n, o, c), Zt(l, r, o));
    }
  }
  function Zr(n) {
    var r = n.alternate;
    return n === zt || r !== null && r === zt;
  }
  function Vv(n, r) {
    hs = Mc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Zt(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
    }
  }
  var Tu = { readContext: Na, useCallback: Ot, useContext: Ot, useEffect: Ot, useImperativeHandle: Ot, useInsertionEffect: Ot, useLayoutEffect: Ot, useMemo: Ot, useReducer: Ot, useRef: Ot, useState: Ot, useDebugValue: Ot, useDeferredValue: Ot, useTransition: Ot, useMutableSource: Ot, useSyncExternalStore: Ot, useId: Ot, unstable_isNewReconciler: !1 }, Gc = { readContext: Na, useCallback: function(n, r) {
    return Cr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Na, useEffect: Ic, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, yo(
      4194308,
      4,
      xu.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return yo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return yo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Cr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Cr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = ws.bind(null, zt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Cr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Vc, useDebugValue: gs, useDeferredValue: function(n) {
    return Cr().memoizedState = n;
  }, useTransition: function() {
    var n = Vc(!1), r = n[0];
    return n = Ss.bind(null, n[1]), Cr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = zt, c = Cr();
    if (dn) {
      if (l === void 0) throw Error(N(407));
      l = l();
    } else {
      if (l = r(), Wn === null) throw Error(N(349));
      qt & 30 || Ac(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Ic(Fc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, bu(9, jc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Cr(), r = Wn.identifierPrefix;
    if (dn) {
      var l = Ri, o = xi;
      l = (o & ~(1 << 32 - _r(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Eu++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = Y++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Es = {
    readContext: Na,
    useCallback: Qc,
    useContext: Na,
    useEffect: ms,
    useImperativeHandle: $c,
    useInsertionEffect: Yc,
    useLayoutEffect: ys,
    useMemo: Wc,
    useReducer: zl,
    useRef: Bc,
    useState: function() {
      return zl(Ki);
    },
    useDebugValue: gs,
    useDeferredValue: function(n) {
      var r = Rn();
      return kd(r, Un.memoizedState, n);
    },
    useTransition: function() {
      var n = zl(Ki)[0], r = Rn().memoizedState;
      return [n, r];
    },
    useMutableSource: zc,
    useSyncExternalStore: Uc,
    useId: _d,
    unstable_isNewReconciler: !1
  }, qc = { readContext: Na, useCallback: Qc, useContext: Na, useEffect: ms, useImperativeHandle: $c, useInsertionEffect: Yc, useLayoutEffect: ys, useMemo: Wc, useReducer: Cu, useRef: Bc, useState: function() {
    return Cu(Ki);
  }, useDebugValue: gs, useDeferredValue: function(n) {
    var r = Rn();
    return Un === null ? r.memoizedState = n : kd(r, Un.memoizedState, n);
  }, useTransition: function() {
    var n = Cu(Ki)[0], r = Rn().memoizedState;
    return [n, r];
  }, useMutableSource: zc, useSyncExternalStore: Uc, useId: _d, unstable_isNewReconciler: !1 };
  function ai(n, r) {
    if (n && n.defaultProps) {
      r = re({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Dd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : re({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Xc = { isMounted: function(n) {
    return (n = n._reactInternals) ? tt(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = Li(n), d = Xi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Nl(n, d, c), r !== null && (zr(r, n, c, o), Oc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = Li(n), d = Xi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Nl(n, d, c), r !== null && (zr(r, n, c, o), Oc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Hn(), o = Li(n), c = Xi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Nl(n, c, o), r !== null && (zr(r, n, o, l), Oc(r, n, o));
  } };
  function Bv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !es(l, o) || !es(c, d) : !0;
  }
  function Kc(n, r, l) {
    var o = !1, c = Er, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Na(d) : (c = Mn(r) ? Wr : wn.current, o = r.contextTypes, d = (o = o != null) ? Gr(n, c) : Er), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Xc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Iv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Xc.enqueueReplaceState(r, r.state, null);
  }
  function Cs(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, xd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Na(d) : (d = Mn(r) ? Wr : wn.current, c.context = Gr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Dd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Xc.enqueueReplaceState(c, c.state, null), cs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function ku(n, r) {
    try {
      var l = "", o = r;
      do
        l += dt(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Od(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Ld(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Zc = typeof WeakMap == "function" ? WeakMap : Map;
  function Yv(n, r, l) {
    l = Xi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      xo || (xo = !0, Ou = o), Ld(n, r);
    }, l;
  }
  function Nd(n, r, l) {
    l = Xi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Ld(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Ld(n, r), typeof o != "function" && (jl === null ? jl = /* @__PURE__ */ new Set([this]) : jl.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Md(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Zc();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = gy.bind(null, n, r, l), r.then(n, n));
  }
  function $v(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Ul(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Xi(-1, 1), r.tag = 2, Nl(l, r, 1))), l.lanes |= 1), n);
  }
  var bs = mt.ReactCurrentOwner, An = !1;
  function ur(n, r, l, o) {
    r.child = n === null ? oe(r, null, l, o) : xn(r, n.child, l, o);
  }
  function Jr(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return yn(r, c), o = Ml(n, r, l, o, d, c), l = ri(), n !== null && !An ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (dn && l && Tc(r), r.flags |= 1, ur(n, r, o, c), r.child);
  }
  function _u(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Wd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, at(n, r, d, o, c)) : (n = Hs(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : es, l(m, o) && n.ref === r.ref) return za(n, r, c);
    }
    return r.flags |= 1, n = Hl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function at(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (es(d, o) && n.ref === r.ref) if (An = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (An = !0);
      else return r.lanes = n.lanes, za(n, r, c);
    }
    return Qv(n, r, l, o, c);
  }
  function xs(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Te(Eo, ma), ma |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Te(Eo, ma), ma |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Te(Eo, ma), ma |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Te(Eo, ma), ma |= o;
    return ur(n, r, c, l), r.child;
  }
  function zd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Qv(n, r, l, o, c) {
    var d = Mn(l) ? Wr : wn.current;
    return d = Gr(r, d), yn(r, c), l = Ml(n, r, l, o, d, c), o = ri(), n !== null && !An ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (dn && o && Tc(r), r.flags |= 1, ur(n, r, l, c), r.child);
  }
  function Wv(n, r, l, o, c) {
    if (Mn(l)) {
      var d = !0;
      Kn(r);
    } else d = !1;
    if (yn(r, c), r.stateNode === null) Ma(n, r), Kc(r, l, o), Cs(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, w = r.memoizedProps;
      m.props = w;
      var b = m.context, U = l.contextType;
      typeof U == "object" && U !== null ? U = Na(U) : (U = Mn(l) ? Wr : wn.current, U = Gr(r, U));
      var W = l.getDerivedStateFromProps, q = typeof W == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      q || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (w !== o || b !== U) && Iv(r, m, o, U), ha = !1;
      var $ = r.memoizedState;
      m.state = $, cs(r, o, m, c), b = r.memoizedState, w !== o || $ !== b || $n.current || ha ? (typeof W == "function" && (Dd(r, l, W, o), b = r.memoizedState), (w = ha || Bv(r, l, w, o, $, b, U)) ? (q || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = b), m.props = o, m.state = b, m.context = U, o = w) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Fv(n, r), w = r.memoizedProps, U = r.type === r.elementType ? w : ai(r.type, w), m.props = U, q = r.pendingProps, $ = m.context, b = l.contextType, typeof b == "object" && b !== null ? b = Na(b) : (b = Mn(l) ? Wr : wn.current, b = Gr(r, b));
      var de = l.getDerivedStateFromProps;
      (W = typeof de == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (w !== q || $ !== b) && Iv(r, m, o, b), ha = !1, $ = r.memoizedState, m.state = $, cs(r, o, m, c);
      var ge = r.memoizedState;
      w !== q || $ !== ge || $n.current || ha ? (typeof de == "function" && (Dd(r, l, de, o), ge = r.memoizedState), (U = ha || Bv(r, l, U, o, $, ge, b) || !1) ? (W || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ge, b), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ge, b)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || w === n.memoizedProps && $ === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && $ === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ge), m.props = o, m.state = ge, m.context = b, o = U) : (typeof m.componentDidUpdate != "function" || w === n.memoizedProps && $ === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && $ === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Rs(n, r, l, o, d, c);
  }
  function Rs(n, r, l, o, c, d) {
    zd(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && xc(r, l, !1), za(n, r, d);
    o = r.stateNode, bs.current = r;
    var w = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = xn(r, n.child, null, d), r.child = xn(r, null, w, d)) : ur(n, r, w, d), r.memoizedState = o.state, c && xc(r, l, !0), r.child;
  }
  function So(n) {
    var r = n.stateNode;
    r.pendingContext ? zv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && zv(n, r.context, !1), Td(n, r.containerInfo);
  }
  function Gv(n, r, l, o, c) {
    return Ll(), qi(c), r.flags |= 256, ur(n, r, l, o), r.child;
  }
  var Jc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ud(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function ef(n, r, l) {
    var o = r.pendingProps, c = gn.current, d = !1, m = (r.flags & 128) !== 0, w;
    if ((w = m) || (w = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), w ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Te(gn, c & 1), n === null)
      return yd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Pl(m, o, 0, null), n = tl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Ud(l), r.memoizedState = Jc, n) : Ad(r, m));
    if (c = n.memoizedState, c !== null && (w = c.dehydrated, w !== null)) return qv(n, r, m, o, w, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, w = c.sibling;
      var b = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = b, r.deletions = null) : (o = Hl(c, b), o.subtreeFlags = c.subtreeFlags & 14680064), w !== null ? d = Hl(w, d) : (d = tl(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Ud(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Jc, o;
    }
    return d = n.child, n = d.sibling, o = Hl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Ad(n, r) {
    return r = Pl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Ts(n, r, l, o) {
    return o !== null && qi(o), xn(r, n.child, null, l), n = Ad(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function qv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Od(Error(N(422))), Ts(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Pl({ mode: "visible", children: o.children }, c, 0, null), d = tl(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && xn(r, n.child, null, m), r.child.memoizedState = Ud(m), r.memoizedState = Jc, d);
    if (!(r.mode & 1)) return Ts(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var w = o.dgst;
      return o = w, d = Error(N(419)), o = Od(d, o, void 0), Ts(n, r, m, o);
    }
    if (w = (m & n.childLanes) !== 0, An || w) {
      if (o = Wn, o !== null) {
        switch (m & -m) {
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
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, va(n, c), zr(o, n, c, -1));
      }
      return Qd(), o = Od(Error(N(421))), Ts(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Sy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Xr = wi(c.nextSibling), qr = r, dn = !0, La = null, n !== null && (zn[Oa++] = xi, zn[Oa++] = Ri, zn[Oa++] = da, xi = n.id, Ri = n.overflow, da = r), r = Ad(r, o.children), r.flags |= 4096, r);
  }
  function jd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Ed(n.return, r, l);
  }
  function Lr(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function ki(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (ur(n, r, o.children, l), o = gn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && jd(n, l, r);
        else if (n.tag === 19) jd(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (Te(gn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Nc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Lr(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Nc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Lr(r, !0, l, null, d);
        break;
      case "together":
        Lr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ma(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function za(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Oi |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(N(153));
    if (r.child !== null) {
      for (n = r.child, l = Hl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Hl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function ks(n, r, l) {
    switch (r.tag) {
      case 3:
        So(r), Ll();
        break;
      case 5:
        Pv(r);
        break;
      case 1:
        Mn(r.type) && Kn(r);
        break;
      case 4:
        Td(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Te(pa, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Te(gn, gn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? ef(n, r, l) : (Te(gn, gn.current & 1), n = za(n, r, l), n !== null ? n.sibling : null);
        Te(gn, gn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return ki(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Te(gn, gn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, xs(n, r, l);
    }
    return za(n, r, l);
  }
  var Ua, jn, Xv, Kv;
  Ua = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, jn = function() {
  }, Xv = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Su(Ti.current);
      var d = null;
      switch (l) {
        case "input":
          c = nr(n, c), o = nr(n, o), d = [];
          break;
        case "select":
          c = re({}, c, { value: void 0 }), o = re({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = In(n, c), o = In(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Rl);
      }
      on(l, o);
      var m;
      l = null;
      for (U in c) if (!o.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null) if (U === "style") {
        var w = c[U];
        for (m in w) w.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (Ke.hasOwnProperty(U) ? d || (d = []) : (d = d || []).push(U, null));
      for (U in o) {
        var b = o[U];
        if (w = c != null ? c[U] : void 0, o.hasOwnProperty(U) && b !== w && (b != null || w != null)) if (U === "style") if (w) {
          for (m in w) !w.hasOwnProperty(m) || b && b.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in b) b.hasOwnProperty(m) && w[m] !== b[m] && (l || (l = {}), l[m] = b[m]);
        } else l || (d || (d = []), d.push(
          U,
          l
        )), l = b;
        else U === "dangerouslySetInnerHTML" ? (b = b ? b.__html : void 0, w = w ? w.__html : void 0, b != null && w !== b && (d = d || []).push(U, b)) : U === "children" ? typeof b != "string" && typeof b != "number" || (d = d || []).push(U, "" + b) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (Ke.hasOwnProperty(U) ? (b != null && U === "onScroll" && Vt("scroll", n), d || w === b || (d = [])) : (d = d || []).push(U, b));
      }
      l && (d = d || []).push("style", l);
      var U = d;
      (r.updateQueue = U) && (r.flags |= 4);
    }
  }, Kv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function _s(n, r) {
    if (!dn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function Jn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Zv(n, r, l) {
    var o = r.pendingProps;
    switch (kc(r), r.tag) {
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
        return Jn(r), null;
      case 1:
        return Mn(r.type) && vo(), Jn(r), null;
      case 3:
        return o = r.stateNode, wu(), an($n), an(wn), _e(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (_c(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, La !== null && (Lu(La), La = null))), jn(n, r), Jn(r), null;
      case 5:
        Lc(r);
        var c = Su(ps.current);
        if (l = r.type, n !== null && r.stateNode != null) Xv(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(N(166));
            return Jn(r), null;
          }
          if (n = Su(Ti.current), _c(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ei] = r, o[ls] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Vt("cancel", o), Vt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Vt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < rs.length; c++) Vt(rs[c], o);
                break;
              case "source":
                Vt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Vt(
                  "error",
                  o
                ), Vt("load", o);
                break;
              case "details":
                Vt("toggle", o);
                break;
              case "input":
                Vn(o, d), Vt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Vt("invalid", o);
                break;
              case "textarea":
                gr(o, d), Vt("invalid", o);
            }
            on(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var w = d[m];
              m === "children" ? typeof w == "string" ? o.textContent !== w && (d.suppressHydrationWarning !== !0 && wc(o.textContent, w, n), c = ["children", w]) : typeof w == "number" && o.textContent !== "" + w && (d.suppressHydrationWarning !== !0 && wc(
                o.textContent,
                w,
                n
              ), c = ["children", "" + w]) : Ke.hasOwnProperty(m) && w != null && m === "onScroll" && Vt("scroll", o);
            }
            switch (l) {
              case "input":
                On(o), ci(o, d, !0);
                break;
              case "textarea":
                On(o), Ln(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Rl);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Sr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ei] = r, n[ls] = o, Ua(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = Xn(l, o), l) {
                case "dialog":
                  Vt("cancel", n), Vt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Vt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < rs.length; c++) Vt(rs[c], n);
                  c = o;
                  break;
                case "source":
                  Vt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Vt(
                    "error",
                    n
                  ), Vt("load", n), c = o;
                  break;
                case "details":
                  Vt("toggle", n), c = o;
                  break;
                case "input":
                  Vn(n, o), c = nr(n, o), Vt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = re({}, o, { value: void 0 }), Vt("invalid", n);
                  break;
                case "textarea":
                  gr(n, o), c = In(n, o), Vt("invalid", n);
                  break;
                default:
                  c = o;
              }
              on(l, c), w = c;
              for (d in w) if (w.hasOwnProperty(d)) {
                var b = w[d];
                d === "style" ? en(n, b) : d === "dangerouslySetInnerHTML" ? (b = b ? b.__html : void 0, b != null && fi(n, b)) : d === "children" ? typeof b == "string" ? (l !== "textarea" || b !== "") && ee(n, b) : typeof b == "number" && ee(n, "" + b) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Ke.hasOwnProperty(d) ? b != null && d === "onScroll" && Vt("scroll", n) : b != null && He(n, d, b, m));
              }
              switch (l) {
                case "input":
                  On(n), ci(n, o, !1);
                  break;
                case "textarea":
                  On(n), Ln(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + ot(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Cn(n, !!o.multiple, d, !1) : o.defaultValue != null && Cn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Rl);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Jn(r), null;
      case 6:
        if (n && r.stateNode != null) Kv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(N(166));
          if (l = Su(ps.current), Su(Ti.current), _c(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ei] = r, (d = o.nodeValue !== l) && (n = qr, n !== null)) switch (n.tag) {
              case 3:
                wc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && wc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ei] = r, r.stateNode = o;
        }
        return Jn(r), null;
      case 13:
        if (an(gn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (dn && Xr !== null && r.mode & 1 && !(r.flags & 128)) ss(), Ll(), r.flags |= 98560, d = !1;
          else if (d = _c(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(N(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(N(317));
              d[Ei] = r;
            } else Ll(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Jn(r), d = !1;
          } else La !== null && (Lu(La), La = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || gn.current & 1 ? kn === 0 && (kn = 3) : Qd())), r.updateQueue !== null && (r.flags |= 4), Jn(r), null);
      case 4:
        return wu(), jn(n, r), n === null && oo(r.stateNode.containerInfo), Jn(r), null;
      case 10:
        return wd(r.type._context), Jn(r), null;
      case 17:
        return Mn(r.type) && vo(), Jn(r), null;
      case 19:
        if (an(gn), d = r.memoizedState, d === null) return Jn(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) _s(d, !1);
        else {
          if (kn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = Nc(n), m !== null) {
              for (r.flags |= 128, _s(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Te(gn, gn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && nt() > bo && (r.flags |= 128, o = !0, _s(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Nc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), _s(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !dn) return Jn(r), null;
          } else 2 * nt() - d.renderingStartTime > bo && l !== 1073741824 && (r.flags |= 128, o = !0, _s(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = nt(), r.sibling = null, l = gn.current, Te(gn, o ? l & 1 | 2 : l & 1), r) : (Jn(r), null);
      case 22:
      case 23:
        return $d(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ma & 1073741824 && (Jn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Jn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(N(156, r.tag));
  }
  function tf(n, r) {
    switch (kc(r), r.tag) {
      case 1:
        return Mn(r.type) && vo(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return wu(), an($n), an(wn), _e(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Lc(r), null;
      case 13:
        if (an(gn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(N(340));
          Ll();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return an(gn), null;
      case 4:
        return wu(), null;
      case 10:
        return wd(r.type._context), null;
      case 22:
      case 23:
        return $d(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ds = !1, br = !1, dy = typeof WeakSet == "function" ? WeakSet : Set, he = null;
  function wo(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      pn(n, r, o);
    }
    else l.current = null;
  }
  function nf(n, r, l) {
    try {
      l();
    } catch (o) {
      pn(n, r, o);
    }
  }
  var Jv = !1;
  function eh(n, r) {
    if (is = Ta, n = ts(), dc(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, w = -1, b = -1, U = 0, W = 0, q = n, $ = null;
          t: for (; ; ) {
            for (var de; q !== l || c !== 0 && q.nodeType !== 3 || (w = m + c), q !== d || o !== 0 && q.nodeType !== 3 || (b = m + o), q.nodeType === 3 && (m += q.nodeValue.length), (de = q.firstChild) !== null; )
              $ = q, q = de;
            for (; ; ) {
              if (q === n) break t;
              if ($ === l && ++U === c && (w = m), $ === d && ++W === o && (b = m), (de = q.nextSibling) !== null) break;
              q = $, $ = q.parentNode;
            }
            q = de;
          }
          l = w === -1 || b === -1 ? null : { start: w, end: b };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (pu = { focusedElem: n, selectionRange: l }, Ta = !1, he = r; he !== null; ) if (r = he, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, he = n;
    else for (; he !== null; ) {
      r = he;
      try {
        var ge = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ge !== null) {
              var Ee = ge.memoizedProps, _n = ge.memoizedState, _ = r.stateNode, R = _.getSnapshotBeforeUpdate(r.elementType === r.type ? Ee : ai(r.type, Ee), _n);
              _.__reactInternalSnapshotBeforeUpdate = R;
            }
            break;
          case 3:
            var L = r.stateNode.containerInfo;
            L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(N(163));
        }
      } catch (G) {
        pn(r, r.return, G);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, he = n;
        break;
      }
      he = r.return;
    }
    return ge = Jv, Jv = !1, ge;
  }
  function Os(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && nf(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Ls(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Fd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function rf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, rf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ei], delete r[ls], delete r[us], delete r[po], delete r[cy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ns(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Zi(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Ns(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function _i(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Rl));
    else if (o !== 4 && (n = n.child, n !== null)) for (_i(n, r, l), n = n.sibling; n !== null; ) _i(n, r, l), n = n.sibling;
  }
  function Di(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Di(n, r, l), n = n.sibling; n !== null; ) Di(n, r, l), n = n.sibling;
  }
  var Tn = null, Nr = !1;
  function Mr(n, r, l) {
    for (l = l.child; l !== null; ) th(n, r, l), l = l.sibling;
  }
  function th(n, r, l) {
    if ($r && typeof $r.onCommitFiberUnmount == "function") try {
      $r.onCommitFiberUnmount(ml, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        br || wo(l, r);
      case 6:
        var o = Tn, c = Nr;
        Tn = null, Mr(n, r, l), Tn = o, Nr = c, Tn !== null && (Nr ? (n = Tn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Tn.removeChild(l.stateNode));
        break;
      case 18:
        Tn !== null && (Nr ? (n = Tn, l = l.stateNode, n.nodeType === 8 ? fo(n.parentNode, l) : n.nodeType === 1 && fo(n, l), Ja(n)) : fo(Tn, l.stateNode));
        break;
      case 4:
        o = Tn, c = Nr, Tn = l.stateNode.containerInfo, Nr = !0, Mr(n, r, l), Tn = o, Nr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!br && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && nf(l, r, m), c = c.next;
          } while (c !== o);
        }
        Mr(n, r, l);
        break;
      case 1:
        if (!br && (wo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (w) {
          pn(l, r, w);
        }
        Mr(n, r, l);
        break;
      case 21:
        Mr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (br = (o = br) || l.memoizedState !== null, Mr(n, r, l), br = o) : Mr(n, r, l);
        break;
      default:
        Mr(n, r, l);
    }
  }
  function nh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new dy()), r.forEach(function(o) {
        var c = fh.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ii(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, w = m;
        e: for (; w !== null; ) {
          switch (w.tag) {
            case 5:
              Tn = w.stateNode, Nr = !1;
              break e;
            case 3:
              Tn = w.stateNode.containerInfo, Nr = !0;
              break e;
            case 4:
              Tn = w.stateNode.containerInfo, Nr = !0;
              break e;
          }
          w = w.return;
        }
        if (Tn === null) throw Error(N(160));
        th(d, m, c), Tn = null, Nr = !1;
        var b = c.alternate;
        b !== null && (b.return = null), c.return = null;
      } catch (U) {
        pn(c, r, U);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Hd(r, n), r = r.sibling;
  }
  function Hd(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ii(r, n), ea(n), o & 4) {
          try {
            Os(3, n, n.return), Ls(3, n);
          } catch (Ee) {
            pn(n, n.return, Ee);
          }
          try {
            Os(5, n, n.return);
          } catch (Ee) {
            pn(n, n.return, Ee);
          }
        }
        break;
      case 1:
        ii(r, n), ea(n), o & 512 && l !== null && wo(l, l.return);
        break;
      case 5:
        if (ii(r, n), ea(n), o & 512 && l !== null && wo(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ee(c, "");
          } catch (Ee) {
            pn(n, n.return, Ee);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, w = n.type, b = n.updateQueue;
          if (n.updateQueue = null, b !== null) try {
            w === "input" && d.type === "radio" && d.name != null && Bn(c, d), Xn(w, m);
            var U = Xn(w, d);
            for (m = 0; m < b.length; m += 2) {
              var W = b[m], q = b[m + 1];
              W === "style" ? en(c, q) : W === "dangerouslySetInnerHTML" ? fi(c, q) : W === "children" ? ee(c, q) : He(c, W, q, U);
            }
            switch (w) {
              case "input":
                Yr(c, d);
                break;
              case "textarea":
                $a(c, d);
                break;
              case "select":
                var $ = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var de = d.value;
                de != null ? Cn(c, !!d.multiple, de, !1) : $ !== !!d.multiple && (d.defaultValue != null ? Cn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Cn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ls] = d;
          } catch (Ee) {
            pn(n, n.return, Ee);
          }
        }
        break;
      case 6:
        if (ii(r, n), ea(n), o & 4) {
          if (n.stateNode === null) throw Error(N(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ee) {
            pn(n, n.return, Ee);
          }
        }
        break;
      case 3:
        if (ii(r, n), ea(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Ja(r.containerInfo);
        } catch (Ee) {
          pn(n, n.return, Ee);
        }
        break;
      case 4:
        ii(r, n), ea(n);
        break;
      case 13:
        ii(r, n), ea(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Bd = nt())), o & 4 && nh(n);
        break;
      case 22:
        if (W = l !== null && l.memoizedState !== null, n.mode & 1 ? (br = (U = br) || W, ii(r, n), br = U) : ii(r, n), ea(n), o & 8192) {
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !W && n.mode & 1) for (he = n, W = n.child; W !== null; ) {
            for (q = he = W; he !== null; ) {
              switch ($ = he, de = $.child, $.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Os(4, $, $.return);
                  break;
                case 1:
                  wo($, $.return);
                  var ge = $.stateNode;
                  if (typeof ge.componentWillUnmount == "function") {
                    o = $, l = $.return;
                    try {
                      r = o, ge.props = r.memoizedProps, ge.state = r.memoizedState, ge.componentWillUnmount();
                    } catch (Ee) {
                      pn(o, l, Ee);
                    }
                  }
                  break;
                case 5:
                  wo($, $.return);
                  break;
                case 22:
                  if ($.memoizedState !== null) {
                    Ms(q);
                    continue;
                  }
              }
              de !== null ? (de.return = $, he = de) : Ms(q);
            }
            W = W.sibling;
          }
          e: for (W = null, q = n; ; ) {
            if (q.tag === 5) {
              if (W === null) {
                W = q;
                try {
                  c = q.stateNode, U ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (w = q.stateNode, b = q.memoizedProps.style, m = b != null && b.hasOwnProperty("display") ? b.display : null, w.style.display = Ht("display", m));
                } catch (Ee) {
                  pn(n, n.return, Ee);
                }
              }
            } else if (q.tag === 6) {
              if (W === null) try {
                q.stateNode.nodeValue = U ? "" : q.memoizedProps;
              } catch (Ee) {
                pn(n, n.return, Ee);
              }
            } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === n) && q.child !== null) {
              q.child.return = q, q = q.child;
              continue;
            }
            if (q === n) break e;
            for (; q.sibling === null; ) {
              if (q.return === null || q.return === n) break e;
              W === q && (W = null), q = q.return;
            }
            W === q && (W = null), q.sibling.return = q.return, q = q.sibling;
          }
        }
        break;
      case 19:
        ii(r, n), ea(n), o & 4 && nh(n);
        break;
      case 21:
        break;
      default:
        ii(
          r,
          n
        ), ea(n);
    }
  }
  function ea(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Ns(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(N(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ee(c, ""), o.flags &= -33);
            var d = Zi(n);
            Di(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, w = Zi(n);
            _i(n, w, m);
            break;
          default:
            throw Error(N(161));
        }
      } catch (b) {
        pn(n, n.return, b);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function py(n, r, l) {
    he = n, Pd(n);
  }
  function Pd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; he !== null; ) {
      var c = he, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Ds;
        if (!m) {
          var w = c.alternate, b = w !== null && w.memoizedState !== null || br;
          w = Ds;
          var U = br;
          if (Ds = m, (br = b) && !U) for (he = c; he !== null; ) m = he, b = m.child, m.tag === 22 && m.memoizedState !== null ? Vd(c) : b !== null ? (b.return = m, he = b) : Vd(c);
          for (; d !== null; ) he = d, Pd(d), d = d.sibling;
          he = c, Ds = w, br = U;
        }
        rh(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, he = d) : rh(n);
    }
  }
  function rh(n) {
    for (; he !== null; ) {
      var r = he;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              br || Ls(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !br) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ai(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Rd(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Rd(r, m, l);
              }
              break;
            case 5:
              var w = r.stateNode;
              if (l === null && r.flags & 4) {
                l = w;
                var b = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    b.autoFocus && l.focus();
                    break;
                  case "img":
                    b.src && (l.src = b.src);
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
              if (r.memoizedState === null) {
                var U = r.alternate;
                if (U !== null) {
                  var W = U.memoizedState;
                  if (W !== null) {
                    var q = W.dehydrated;
                    q !== null && Ja(q);
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
              throw Error(N(163));
          }
          br || r.flags & 512 && Fd(r);
        } catch ($) {
          pn(r, r.return, $);
        }
      }
      if (r === n) {
        he = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, he = l;
        break;
      }
      he = r.return;
    }
  }
  function Ms(n) {
    for (; he !== null; ) {
      var r = he;
      if (r === n) {
        he = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, he = l;
        break;
      }
      he = r.return;
    }
  }
  function Vd(n) {
    for (; he !== null; ) {
      var r = he;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Ls(4, r);
            } catch (b) {
              pn(r, l, b);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (b) {
                pn(r, c, b);
              }
            }
            var d = r.return;
            try {
              Fd(r);
            } catch (b) {
              pn(r, d, b);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Fd(r);
            } catch (b) {
              pn(r, m, b);
            }
        }
      } catch (b) {
        pn(r, r.return, b);
      }
      if (r === n) {
        he = null;
        break;
      }
      var w = r.sibling;
      if (w !== null) {
        w.return = r.return, he = w;
        break;
      }
      he = r.return;
    }
  }
  var vy = Math.ceil, Al = mt.ReactCurrentDispatcher, Du = mt.ReactCurrentOwner, or = mt.ReactCurrentBatchConfig, Ct = 0, Wn = null, Fn = null, sr = 0, ma = 0, Eo = Da(0), kn = 0, zs = null, Oi = 0, Co = 0, af = 0, Us = null, ta = null, Bd = 0, bo = 1 / 0, ya = null, xo = !1, Ou = null, jl = null, lf = !1, Ji = null, As = 0, Fl = 0, Ro = null, js = -1, xr = 0;
  function Hn() {
    return Ct & 6 ? nt() : js !== -1 ? js : js = nt();
  }
  function Li(n) {
    return n.mode & 1 ? Ct & 2 && sr !== 0 ? sr & -sr : fy.transition !== null ? (xr === 0 && (xr = Xu()), xr) : (n = Nt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ro(n.type)), n) : 1;
  }
  function zr(n, r, l, o) {
    if (50 < Fl) throw Fl = 0, Ro = null, Error(N(185));
    Pi(n, l, o), (!(Ct & 2) || n !== Wn) && (n === Wn && (!(Ct & 2) && (Co |= l), kn === 4 && li(n, sr)), na(n, o), l === 1 && Ct === 0 && !(r.mode & 1) && (bo = nt() + 500, ho && bi()));
  }
  function na(n, r) {
    var l = n.callbackNode;
    au(n, r);
    var o = Za(n, n === Wn ? sr : 0);
    if (o === 0) l !== null && ar(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && ar(l), r === 1) n.tag === 0 ? kl(Id.bind(null, n)) : Rc(Id.bind(null, n)), co(function() {
        !(Ct & 6) && bi();
      }), l = null;
      else {
        switch (Zu(o)) {
          case 1:
            l = Xa;
            break;
          case 4:
            l = nu;
            break;
          case 16:
            l = ru;
            break;
          case 536870912:
            l = Wu;
            break;
          default:
            l = ru;
        }
        l = ph(l, uf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function uf(n, r) {
    if (js = -1, xr = 0, Ct & 6) throw Error(N(327));
    var l = n.callbackNode;
    if (To() && n.callbackNode !== l) return null;
    var o = Za(n, n === Wn ? sr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = of(n, o);
    else {
      r = o;
      var c = Ct;
      Ct |= 2;
      var d = ih();
      (Wn !== n || sr !== r) && (ya = null, bo = nt() + 500, el(n, r));
      do
        try {
          lh();
          break;
        } catch (w) {
          ah(n, w);
        }
      while (!0);
      Sd(), Al.current = d, Ct = c, Fn !== null ? r = 0 : (Wn = null, sr = 0, r = kn);
    }
    if (r !== 0) {
      if (r === 2 && (c = gl(n), c !== 0 && (o = c, r = Fs(n, c))), r === 1) throw l = zs, el(n, 0), li(n, o), na(n, nt()), l;
      if (r === 6) li(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !hy(c) && (r = of(n, o), r === 2 && (d = gl(n), d !== 0 && (o = d, r = Fs(n, d))), r === 1)) throw l = zs, el(n, 0), li(n, o), na(n, nt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(N(345));
          case 2:
            Mu(n, ta, ya);
            break;
          case 3:
            if (li(n, o), (o & 130023424) === o && (r = Bd + 500 - nt(), 10 < r)) {
              if (Za(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Hn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Cc(Mu.bind(null, n, ta, ya), r);
              break;
            }
            Mu(n, ta, ya);
            break;
          case 4:
            if (li(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - _r(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = nt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * vy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Cc(Mu.bind(null, n, ta, ya), o);
              break;
            }
            Mu(n, ta, ya);
            break;
          case 5:
            Mu(n, ta, ya);
            break;
          default:
            throw Error(N(329));
        }
      }
    }
    return na(n, nt()), n.callbackNode === l ? uf.bind(null, n) : null;
  }
  function Fs(n, r) {
    var l = Us;
    return n.current.memoizedState.isDehydrated && (el(n, r).flags |= 256), n = of(n, r), n !== 2 && (r = ta, ta = l, r !== null && Lu(r)), n;
  }
  function Lu(n) {
    ta === null ? ta = n : ta.push.apply(ta, n);
  }
  function hy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ti(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function li(n, r) {
    for (r &= ~af, r &= ~Co, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - _r(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Id(n) {
    if (Ct & 6) throw Error(N(327));
    To();
    var r = Za(n, 0);
    if (!(r & 1)) return na(n, nt()), null;
    var l = of(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = gl(n);
      o !== 0 && (r = o, l = Fs(n, o));
    }
    if (l === 1) throw l = zs, el(n, 0), li(n, r), na(n, nt()), l;
    if (l === 6) throw Error(N(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Mu(n, ta, ya), na(n, nt()), null;
  }
  function Yd(n, r) {
    var l = Ct;
    Ct |= 1;
    try {
      return n(r);
    } finally {
      Ct = l, Ct === 0 && (bo = nt() + 500, ho && bi());
    }
  }
  function Nu(n) {
    Ji !== null && Ji.tag === 0 && !(Ct & 6) && To();
    var r = Ct;
    Ct |= 1;
    var l = or.transition, o = Nt;
    try {
      if (or.transition = null, Nt = 1, n) return n();
    } finally {
      Nt = o, or.transition = l, Ct = r, !(Ct & 6) && bi();
    }
  }
  function $d() {
    ma = Eo.current, an(Eo);
  }
  function el(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, vd(l)), Fn !== null) for (l = Fn.return; l !== null; ) {
      var o = l;
      switch (kc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && vo();
          break;
        case 3:
          wu(), an($n), an(wn), _e();
          break;
        case 5:
          Lc(o);
          break;
        case 4:
          wu();
          break;
        case 13:
          an(gn);
          break;
        case 19:
          an(gn);
          break;
        case 10:
          wd(o.type._context);
          break;
        case 22:
        case 23:
          $d();
      }
      l = l.return;
    }
    if (Wn = n, Fn = n = Hl(n.current, null), sr = ma = r, kn = 0, zs = null, af = Co = Oi = 0, ta = Us = null, gu !== null) {
      for (r = 0; r < gu.length; r++) if (l = gu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      gu = null;
    }
    return n;
  }
  function ah(n, r) {
    do {
      var l = Fn;
      try {
        if (Sd(), ht.current = Tu, Mc) {
          for (var o = zt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Mc = !1;
        }
        if (qt = 0, Zn = Un = zt = null, hs = !1, Eu = 0, Du.current = null, l === null || l.return === null) {
          kn = 1, zs = r, Fn = null;
          break;
        }
        e: {
          var d = n, m = l.return, w = l, b = r;
          if (r = sr, w.flags |= 32768, b !== null && typeof b == "object" && typeof b.then == "function") {
            var U = b, W = w, q = W.tag;
            if (!(W.mode & 1) && (q === 0 || q === 11 || q === 15)) {
              var $ = W.alternate;
              $ ? (W.updateQueue = $.updateQueue, W.memoizedState = $.memoizedState, W.lanes = $.lanes) : (W.updateQueue = null, W.memoizedState = null);
            }
            var de = $v(m);
            if (de !== null) {
              de.flags &= -257, Ul(de, m, w, d, r), de.mode & 1 && Md(d, U, r), r = de, b = U;
              var ge = r.updateQueue;
              if (ge === null) {
                var Ee = /* @__PURE__ */ new Set();
                Ee.add(b), r.updateQueue = Ee;
              } else ge.add(b);
              break e;
            } else {
              if (!(r & 1)) {
                Md(d, U, r), Qd();
                break e;
              }
              b = Error(N(426));
            }
          } else if (dn && w.mode & 1) {
            var _n = $v(m);
            if (_n !== null) {
              !(_n.flags & 65536) && (_n.flags |= 256), Ul(_n, m, w, d, r), qi(ku(b, w));
              break e;
            }
          }
          d = b = ku(b, w), kn !== 4 && (kn = 2), Us === null ? Us = [d] : Us.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var _ = Yv(d, b, r);
                Hv(d, _);
                break e;
              case 1:
                w = b;
                var R = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof R.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (jl === null || !jl.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var G = Nd(d, w, r);
                  Hv(d, G);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        oh(l);
      } catch (Se) {
        r = Se, Fn === l && l !== null && (Fn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ih() {
    var n = Al.current;
    return Al.current = Tu, n === null ? Tu : n;
  }
  function Qd() {
    (kn === 0 || kn === 3 || kn === 2) && (kn = 4), Wn === null || !(Oi & 268435455) && !(Co & 268435455) || li(Wn, sr);
  }
  function of(n, r) {
    var l = Ct;
    Ct |= 2;
    var o = ih();
    (Wn !== n || sr !== r) && (ya = null, el(n, r));
    do
      try {
        my();
        break;
      } catch (c) {
        ah(n, c);
      }
    while (!0);
    if (Sd(), Ct = l, Al.current = o, Fn !== null) throw Error(N(261));
    return Wn = null, sr = 0, kn;
  }
  function my() {
    for (; Fn !== null; ) uh(Fn);
  }
  function lh() {
    for (; Fn !== null && !Ga(); ) uh(Fn);
  }
  function uh(n) {
    var r = dh(n.alternate, n, ma);
    n.memoizedProps = n.pendingProps, r === null ? oh(n) : Fn = r, Du.current = null;
  }
  function oh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = tf(l, r), l !== null) {
          l.flags &= 32767, Fn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          kn = 6, Fn = null;
          return;
        }
      } else if (l = Zv(l, r, ma), l !== null) {
        Fn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Fn = r;
        return;
      }
      Fn = r = n;
    } while (r !== null);
    kn === 0 && (kn = 5);
  }
  function Mu(n, r, l) {
    var o = Nt, c = or.transition;
    try {
      or.transition = null, Nt = 1, yy(n, r, l, o);
    } finally {
      or.transition = c, Nt = o;
    }
    return null;
  }
  function yy(n, r, l, o) {
    do
      To();
    while (Ji !== null);
    if (Ct & 6) throw Error(N(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(N(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Wf(n, d), n === Wn && (Fn = Wn = null, sr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || lf || (lf = !0, ph(ru, function() {
      return To(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = or.transition, or.transition = null;
      var m = Nt;
      Nt = 1;
      var w = Ct;
      Ct |= 4, Du.current = null, eh(n, l), Hd(l, n), lo(pu), Ta = !!is, pu = is = null, n.current = l, py(l), qa(), Ct = w, Nt = m, or.transition = d;
    } else n.current = l;
    if (lf && (lf = !1, Ji = n, As = c), d = n.pendingLanes, d === 0 && (jl = null), $o(l.stateNode), na(n, nt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (xo) throw xo = !1, n = Ou, Ou = null, n;
    return As & 1 && n.tag !== 0 && To(), d = n.pendingLanes, d & 1 ? n === Ro ? Fl++ : (Fl = 0, Ro = n) : Fl = 0, bi(), null;
  }
  function To() {
    if (Ji !== null) {
      var n = Zu(As), r = or.transition, l = Nt;
      try {
        if (or.transition = null, Nt = 16 > n ? 16 : n, Ji === null) var o = !1;
        else {
          if (n = Ji, Ji = null, As = 0, Ct & 6) throw Error(N(331));
          var c = Ct;
          for (Ct |= 4, he = n.current; he !== null; ) {
            var d = he, m = d.child;
            if (he.flags & 16) {
              var w = d.deletions;
              if (w !== null) {
                for (var b = 0; b < w.length; b++) {
                  var U = w[b];
                  for (he = U; he !== null; ) {
                    var W = he;
                    switch (W.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Os(8, W, d);
                    }
                    var q = W.child;
                    if (q !== null) q.return = W, he = q;
                    else for (; he !== null; ) {
                      W = he;
                      var $ = W.sibling, de = W.return;
                      if (rf(W), W === U) {
                        he = null;
                        break;
                      }
                      if ($ !== null) {
                        $.return = de, he = $;
                        break;
                      }
                      he = de;
                    }
                  }
                }
                var ge = d.alternate;
                if (ge !== null) {
                  var Ee = ge.child;
                  if (Ee !== null) {
                    ge.child = null;
                    do {
                      var _n = Ee.sibling;
                      Ee.sibling = null, Ee = _n;
                    } while (Ee !== null);
                  }
                }
                he = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, he = m;
            else e: for (; he !== null; ) {
              if (d = he, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Os(9, d, d.return);
              }
              var _ = d.sibling;
              if (_ !== null) {
                _.return = d.return, he = _;
                break e;
              }
              he = d.return;
            }
          }
          var R = n.current;
          for (he = R; he !== null; ) {
            m = he;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null) L.return = m, he = L;
            else e: for (m = R; he !== null; ) {
              if (w = he, w.flags & 2048) try {
                switch (w.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ls(9, w);
                }
              } catch (Se) {
                pn(w, w.return, Se);
              }
              if (w === m) {
                he = null;
                break e;
              }
              var G = w.sibling;
              if (G !== null) {
                G.return = w.return, he = G;
                break e;
              }
              he = w.return;
            }
          }
          if (Ct = c, bi(), $r && typeof $r.onPostCommitFiberRoot == "function") try {
            $r.onPostCommitFiberRoot(ml, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Nt = l, or.transition = r;
      }
    }
    return !1;
  }
  function sh(n, r, l) {
    r = ku(l, r), r = Yv(n, r, 1), n = Nl(n, r, 1), r = Hn(), n !== null && (Pi(n, 1, r), na(n, r));
  }
  function pn(n, r, l) {
    if (n.tag === 3) sh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        sh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (jl === null || !jl.has(o))) {
          n = ku(l, n), n = Nd(r, n, 1), r = Nl(r, n, 1), n = Hn(), r !== null && (Pi(r, 1, n), na(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function gy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Hn(), n.pingedLanes |= n.suspendedLanes & l, Wn === n && (sr & l) === l && (kn === 4 || kn === 3 && (sr & 130023424) === sr && 500 > nt() - Bd ? el(n, 0) : af |= l), na(n, r);
  }
  function ch(n, r) {
    r === 0 && (n.mode & 1 ? (r = fa, fa <<= 1, !(fa & 130023424) && (fa = 4194304)) : r = 1);
    var l = Hn();
    n = va(n, r), n !== null && (Pi(n, r, l), na(n, l));
  }
  function Sy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), ch(n, l);
  }
  function fh(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(N(314));
    }
    o !== null && o.delete(r), ch(n, l);
  }
  var dh;
  dh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || $n.current) An = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return An = !1, ks(n, r, l);
      An = !!(n.flags & 131072);
    }
    else An = !1, dn && r.flags & 1048576 && Uv(r, Gi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Ma(n, r), n = r.pendingProps;
        var c = Gr(r, wn.current);
        yn(r, l), c = Ml(null, r, o, n, c, l);
        var d = ri();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Mn(o) ? (d = !0, Kn(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, xd(r), c.updater = Xc, r.stateNode = c, c._reactInternals = r, Cs(r, o, n, l), r = Rs(null, r, o, !0, d, l)) : (r.tag = 0, dn && d && Tc(r), ur(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Ma(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Ey(o), n = ai(o, n), c) {
            case 0:
              r = Qv(null, r, o, n, l);
              break e;
            case 1:
              r = Wv(null, r, o, n, l);
              break e;
            case 11:
              r = Jr(null, r, o, n, l);
              break e;
            case 14:
              r = _u(null, r, o, ai(o.type, n), l);
              break e;
          }
          throw Error(N(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), Qv(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), Wv(n, r, o, c, l);
      case 3:
        e: {
          if (So(r), n === null) throw Error(N(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Fv(n, r), cs(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = ku(Error(N(423)), r), r = Gv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = ku(Error(N(424)), r), r = Gv(n, r, o, l, c);
            break e;
          } else for (Xr = wi(r.stateNode.containerInfo.firstChild), qr = r, dn = !0, La = null, l = oe(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ll(), o === c) {
              r = za(n, r, l);
              break e;
            }
            ur(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Pv(r), n === null && yd(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, Ec(o, c) ? m = null : d !== null && Ec(o, d) && (r.flags |= 32), zd(n, r), ur(n, r, m, l), r.child;
      case 6:
        return n === null && yd(r), null;
      case 13:
        return ef(n, r, l);
      case 4:
        return Td(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = xn(r, null, o, l) : ur(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), Jr(n, r, o, c, l);
      case 7:
        return ur(n, r, r.pendingProps, l), r.child;
      case 8:
        return ur(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return ur(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Te(pa, o._currentValue), o._currentValue = m, d !== null) if (ti(d.value, m)) {
            if (d.children === c.children && !$n.current) {
              r = za(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var w = d.dependencies;
            if (w !== null) {
              m = d.child;
              for (var b = w.firstContext; b !== null; ) {
                if (b.context === o) {
                  if (d.tag === 1) {
                    b = Xi(-1, l & -l), b.tag = 2;
                    var U = d.updateQueue;
                    if (U !== null) {
                      U = U.shared;
                      var W = U.pending;
                      W === null ? b.next = b : (b.next = W.next, W.next = b), U.pending = b;
                    }
                  }
                  d.lanes |= l, b = d.alternate, b !== null && (b.lanes |= l), Ed(
                    d.return,
                    l,
                    r
                  ), w.lanes |= l;
                  break;
                }
                b = b.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(N(341));
              m.lanes |= l, w = m.alternate, w !== null && (w.lanes |= l), Ed(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          ur(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, yn(r, l), c = Na(c), o = o(c), r.flags |= 1, ur(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ai(o, r.pendingProps), c = ai(o.type, c), _u(n, r, o, c, l);
      case 15:
        return at(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), Ma(n, r), r.tag = 1, Mn(o) ? (n = !0, Kn(r)) : n = !1, yn(r, l), Kc(r, o, c), Cs(r, o, c, l), Rs(null, r, o, !0, n, l);
      case 19:
        return ki(n, r, l);
      case 22:
        return xs(n, r, l);
    }
    throw Error(N(156, r.tag));
  };
  function ph(n, r) {
    return sn(n, r);
  }
  function wy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Aa(n, r, l, o) {
    return new wy(n, r, l, o);
  }
  function Wd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Ey(n) {
    if (typeof n == "function") return Wd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === _t) return 11;
      if (n === Dt) return 14;
    }
    return 2;
  }
  function Hl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Aa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Hs(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Wd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case Pe:
        return tl(l.children, c, d, r);
      case ln:
        m = 8, c |= 8;
        break;
      case Pt:
        return n = Aa(12, l, r, c | 2), n.elementType = Pt, n.lanes = d, n;
      case De:
        return n = Aa(13, l, r, c), n.elementType = De, n.lanes = d, n;
      case Ft:
        return n = Aa(19, l, r, c), n.elementType = Ft, n.lanes = d, n;
      case Ce:
        return Pl(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Jt:
            m = 10;
            break e;
          case un:
            m = 9;
            break e;
          case _t:
            m = 11;
            break e;
          case Dt:
            m = 14;
            break e;
          case Lt:
            m = 16, o = null;
            break e;
        }
        throw Error(N(130, n == null ? n : typeof n, ""));
    }
    return r = Aa(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function tl(n, r, l, o) {
    return n = Aa(7, n, o, r), n.lanes = l, n;
  }
  function Pl(n, r, l, o) {
    return n = Aa(22, n, o, r), n.elementType = Ce, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Gd(n, r, l) {
    return n = Aa(6, n, null, r), n.lanes = l, n;
  }
  function sf(n, r, l) {
    return r = Aa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function vh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ku(0), this.expirationTimes = Ku(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ku(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function cf(n, r, l, o, c, d, m, w, b) {
    return n = new vh(n, r, l, w, b), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Aa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, xd(d), n;
  }
  function Cy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: et, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function qd(n) {
    if (!n) return Er;
    n = n._reactInternals;
    e: {
      if (tt(n) !== n || n.tag !== 1) throw Error(N(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Mn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(N(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Mn(l)) return os(n, l, r);
    }
    return r;
  }
  function hh(n, r, l, o, c, d, m, w, b) {
    return n = cf(l, o, !0, n, c, d, m, w, b), n.context = qd(null), l = n.current, o = Hn(), c = Li(l), d = Xi(o, c), d.callback = r ?? null, Nl(l, d, c), n.current.lanes = c, Pi(n, c, o), na(n, o), n;
  }
  function ff(n, r, l, o) {
    var c = r.current, d = Hn(), m = Li(c);
    return l = qd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Xi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Nl(c, r, m), n !== null && (zr(n, c, m, d), Oc(n, c, m)), m;
  }
  function df(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Xd(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function pf(n, r) {
    Xd(n, r), (n = n.alternate) && Xd(n, r);
  }
  function mh() {
    return null;
  }
  var zu = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Kd(n) {
    this._internalRoot = n;
  }
  vf.prototype.render = Kd.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(N(409));
    ff(n, r, null, null);
  }, vf.prototype.unmount = Kd.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Nu(function() {
        ff(null, n, null, null);
      }), r[Qi] = null;
    }
  };
  function vf(n) {
    this._internalRoot = n;
  }
  vf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Ye();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Yn.length && r !== 0 && r < Yn[l].priority; l++) ;
      Yn.splice(l, 0, n), l === 0 && Go(n);
    }
  };
  function Zd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function hf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function yh() {
  }
  function by(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var U = df(m);
          d.call(U);
        };
      }
      var m = hh(r, o, n, 0, null, !1, !1, "", yh);
      return n._reactRootContainer = m, n[Qi] = m.current, oo(n.nodeType === 8 ? n.parentNode : n), Nu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var w = o;
      o = function() {
        var U = df(b);
        w.call(U);
      };
    }
    var b = cf(n, 0, !1, null, null, !1, !1, "", yh);
    return n._reactRootContainer = b, n[Qi] = b.current, oo(n.nodeType === 8 ? n.parentNode : n), Nu(function() {
      ff(r, b, l, o);
    }), b;
  }
  function Ps(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var w = c;
        c = function() {
          var b = df(m);
          w.call(b);
        };
      }
      ff(r, m, n, c);
    } else m = by(l, r, n, c, o);
    return df(m);
  }
  Tt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Ka(r.pendingLanes);
          l !== 0 && (Vi(r, l | 1), na(r, nt()), !(Ct & 6) && (bo = nt() + 500, bi()));
        }
        break;
      case 13:
        Nu(function() {
          var o = va(n, 1);
          if (o !== null) {
            var c = Hn();
            zr(o, n, 1, c);
          }
        }), pf(n, 1);
    }
  }, Qo = function(n) {
    if (n.tag === 13) {
      var r = va(n, 134217728);
      if (r !== null) {
        var l = Hn();
        zr(r, n, 134217728, l);
      }
      pf(n, 134217728);
    }
  }, hi = function(n) {
    if (n.tag === 13) {
      var r = Li(n), l = va(n, r);
      if (l !== null) {
        var o = Hn();
        zr(l, n, r, o);
      }
      pf(n, r);
    }
  }, Ye = function() {
    return Nt;
  }, Ju = function(n, r) {
    var l = Nt;
    try {
      return Nt = n, r();
    } finally {
      Nt = l;
    }
  }, $t = function(n, r, l) {
    switch (r) {
      case "input":
        if (Yr(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = mn(o);
              if (!c) throw Error(N(90));
              Rr(o), Yr(o, c);
            }
          }
        }
        break;
      case "textarea":
        $a(n, l);
        break;
      case "select":
        r = l.value, r != null && Cn(n, !!l.multiple, r, !1);
    }
  }, eu = Yd, pl = Nu;
  var xy = { usingClientEntryPoint: !1, Events: [ke, ni, mn, Hi, Jl, Yd] }, Vs = { findFiberByHostInstance: vu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, gh = { bundleType: Vs.bundleType, version: Vs.version, rendererPackageName: Vs.rendererPackageName, rendererConfig: Vs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: mt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = bn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Vs.findFiberByHostInstance || mh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vl.isDisabled && Vl.supportsFiber) try {
      ml = Vl.inject(gh), $r = Vl;
    } catch {
    }
  }
  return Ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xy, Ba.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Zd(r)) throw Error(N(200));
    return Cy(n, r, null, l);
  }, Ba.createRoot = function(n, r) {
    if (!Zd(n)) throw Error(N(299));
    var l = !1, o = "", c = zu;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = cf(n, 1, !1, null, null, l, !1, o, c), n[Qi] = r.current, oo(n.nodeType === 8 ? n.parentNode : n), new Kd(r);
  }, Ba.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(N(188)) : (n = Object.keys(n).join(","), Error(N(268, n)));
    return n = bn(r), n = n === null ? null : n.stateNode, n;
  }, Ba.flushSync = function(n) {
    return Nu(n);
  }, Ba.hydrate = function(n, r, l) {
    if (!hf(r)) throw Error(N(200));
    return Ps(null, n, r, !0, l);
  }, Ba.hydrateRoot = function(n, r, l) {
    if (!Zd(n)) throw Error(N(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = zu;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = hh(r, null, n, 1, l ?? null, c, !1, d, m), n[Qi] = r.current, oo(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new vf(r);
  }, Ba.render = function(n, r, l) {
    if (!hf(r)) throw Error(N(200));
    return Ps(null, n, r, !1, l);
  }, Ba.unmountComponentAtNode = function(n) {
    if (!hf(n)) throw Error(N(40));
    return n._reactRootContainer ? (Nu(function() {
      Ps(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Qi] = null;
      });
    }), !0) : !1;
  }, Ba.unstable_batchedUpdates = Yd, Ba.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!hf(l)) throw Error(N(200));
    if (n == null || n._reactInternals === void 0) throw Error(N(38));
    return Ps(n, r, l, !1, o);
  }, Ba.version = "18.3.1-next-f1338f8080-20240426", Ba;
}
var Ia = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sb;
function f_() {
  return sb || (sb = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var B = av(), Q = pb(), N = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Xe = !1;
    function Ke(e) {
      Xe = e;
    }
    function Ze(e) {
      if (!Xe) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        We("warn", e, a);
      }
    }
    function S(e) {
      if (!Xe) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        We("error", e, a);
      }
    }
    function We(e, t, a) {
      {
        var i = N.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ie = 0, ue = 1, Ge = 2, Z = 3, ye = 4, te = 5, Ae = 6, je = 7, Je = 8, Rt = 9, rt = 10, He = 11, mt = 12, ce = 13, et = 14, Pe = 15, ln = 16, Pt = 17, Jt = 18, un = 19, _t = 21, De = 22, Ft = 23, Dt = 24, Lt = 25, Ce = !0, J = !1, be = !1, re = !1, k = !1, P = !0, Ve = !0, Ue = !0, dt = !0, ut = /* @__PURE__ */ new Set(), it = {}, ot = {};
    function pt(e, t) {
      It(e, t), It(e + "Capture", t);
    }
    function It(e, t) {
      it[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), it[e] = t;
      {
        var a = e.toLowerCase();
        ot[a] = e, e === "onDoubleClick" && (ot.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        ut.add(t[i]);
    }
    var On = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Rr = Object.prototype.hasOwnProperty;
    function En(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function nr(e) {
      try {
        return Vn(e), !1;
      } catch {
        return !0;
      }
    }
    function Vn(e) {
      return "" + e;
    }
    function Bn(e, t) {
      if (nr(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, En(e)), Vn(e);
    }
    function Yr(e) {
      if (nr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", En(e)), Vn(e);
    }
    function ci(e, t) {
      if (nr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, En(e)), Vn(e);
    }
    function oa(e, t) {
      if (nr(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, En(e)), Vn(e);
    }
    function qn(e) {
      if (nr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", En(e)), Vn(e);
    }
    function Cn(e) {
      if (nr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", En(e)), Vn(e);
    }
    var In = 0, gr = 1, $a = 2, Ln = 3, Sr = 4, sa = 5, Qa = 6, fi = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ee = fi + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", xe = new RegExp("^[" + fi + "][" + ee + "]*$"), st = {}, Ht = {};
    function en(e) {
      return Rr.call(Ht, e) ? !0 : Rr.call(st, e) ? !1 : xe.test(e) ? (Ht[e] = !0, !0) : (st[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, a) {
      return t !== null ? t.type === In : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function on(e, t, a, i) {
      if (a !== null && a.type === In)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Xn(e, t, a, i) {
      if (t === null || typeof t > "u" || on(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Ln:
            return !t;
          case Sr:
            return t === !1;
          case sa:
            return isNaN(t);
          case Qa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function tn(e) {
      return $t.hasOwnProperty(e) ? $t[e] : null;
    }
    function Yt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === $a || t === Ln || t === Sr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var $t = {}, ca = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ca.forEach(function(e) {
      $t[e] = new Yt(
        e,
        In,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      $t[t] = new Yt(
        t,
        gr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      $t[e] = new Yt(
        e,
        $a,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      $t[e] = new Yt(
        e,
        $a,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      $t[e] = new Yt(
        e,
        Ln,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      $t[e] = new Yt(
        e,
        Ln,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      $t[e] = new Yt(
        e,
        Sr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      $t[e] = new Yt(
        e,
        Qa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      $t[e] = new Yt(
        e,
        sa,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var wr = /[\-\:]([a-z])/g, ba = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(wr, ba);
      $t[t] = new Yt(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(wr, ba);
      $t[t] = new Yt(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(wr, ba);
      $t[t] = new Yt(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      $t[e] = new Yt(
        e,
        gr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Hi = "xlinkHref";
    $t[Hi] = new Yt(
      "xlinkHref",
      gr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      $t[e] = new Yt(
        e,
        gr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Jl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, eu = !1;
    function pl(e) {
      !eu && Jl.test(e) && (eu = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function vl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Bn(a, t), i.sanitizeURL && pl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Sr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Xn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Xn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Ln)
            return a;
          f = e.getAttribute(s);
        }
        return Xn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function tu(e, t, a, i) {
      {
        if (!en(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Bn(a, t), u === "" + a ? a : u;
      }
    }
    function Tr(e, t, a, i) {
      var u = tn(t);
      if (!vn(t, u, i)) {
        if (Xn(t, a, u, i) && (a = null), i || u === null) {
          if (en(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Bn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Ln ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var T = u.type, x;
          T === Ln || T === Sr && a === !0 ? x = "" : (Bn(a, y), x = "" + a, u.sanitizeURL && pl(x.toString())), g ? e.setAttributeNS(g, y, x) : e.setAttribute(y, x);
        }
      }
    }
    var kr = Symbol.for("react.element"), rr = Symbol.for("react.portal"), di = Symbol.for("react.fragment"), Wa = Symbol.for("react.strict_mode"), pi = Symbol.for("react.profiler"), vi = Symbol.for("react.provider"), C = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), le = Symbol.for("react.suspense"), me = Symbol.for("react.suspense_list"), tt = Symbol.for("react.memo"), $e = Symbol.for("react.lazy"), yt = Symbol.for("react.scope"), vt = Symbol.for("react.debug_trace_mode"), bn = Symbol.for("react.offscreen"), nn = Symbol.for("react.legacy_hidden"), sn = Symbol.for("react.cache"), ar = Symbol.for("react.tracing_marker"), Ga = Symbol.iterator, qa = "@@iterator";
    function nt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ga && e[Ga] || e[qa];
      return typeof t == "function" ? t : null;
    }
    var lt = Object.assign, Xa = 0, nu, ru, hl, Wu, ml, $r, $o;
    function _r() {
    }
    _r.__reactDisabledLog = !0;
    function lc() {
      {
        if (Xa === 0) {
          nu = console.log, ru = console.info, hl = console.warn, Wu = console.error, ml = console.group, $r = console.groupCollapsed, $o = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: _r,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Xa++;
      }
    }
    function uc() {
      {
        if (Xa--, Xa === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: lt({}, e, {
              value: nu
            }),
            info: lt({}, e, {
              value: ru
            }),
            warn: lt({}, e, {
              value: hl
            }),
            error: lt({}, e, {
              value: Wu
            }),
            group: lt({}, e, {
              value: ml
            }),
            groupCollapsed: lt({}, e, {
              value: $r
            }),
            groupEnd: lt({}, e, {
              value: $o
            })
          });
        }
        Xa < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Gu = N.ReactCurrentDispatcher, yl;
    function fa(e, t, a) {
      {
        if (yl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            yl = i && i[1] || "";
          }
        return `
` + yl + e;
      }
    }
    var Ka = !1, Za;
    {
      var qu = typeof WeakMap == "function" ? WeakMap : Map;
      Za = new qu();
    }
    function au(e, t) {
      if (!e || Ka)
        return "";
      {
        var a = Za.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Ka = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Gu.current, Gu.current = null, lc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (A) {
              i = A;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (A) {
              i = A;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            i = A;
          }
          e();
        }
      } catch (A) {
        if (A && i && typeof A.stack == "string") {
          for (var p = A.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var T = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && Za.set(e, T), T;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        Ka = !1, Gu.current = s, uc(), Error.prepareStackTrace = u;
      }
      var x = e ? e.displayName || e.name : "", M = x ? fa(x) : "";
      return typeof e == "function" && Za.set(e, M), M;
    }
    function gl(e, t, a) {
      return au(e, !0);
    }
    function Xu(e, t, a) {
      return au(e, !1);
    }
    function Ku(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Pi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return au(e, Ku(e));
      if (typeof e == "string")
        return fa(e);
      switch (e) {
        case le:
          return fa("Suspense");
        case me:
          return fa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case I:
            return Xu(e.render);
          case tt:
            return Pi(e.type, t, a);
          case $e: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Pi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Wf(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case te:
          return fa(e.type);
        case ln:
          return fa("Lazy");
        case ce:
          return fa("Suspense");
        case un:
          return fa("SuspenseList");
        case ie:
        case Ge:
        case Pe:
          return Xu(e.type);
        case He:
          return Xu(e.type.render);
        case ue:
          return gl(e.type);
        default:
          return "";
      }
    }
    function Vi(e) {
      try {
        var t = "", a = e;
        do
          t += Wf(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Nt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Zu(e) {
      return e.displayName || "Context";
    }
    function Tt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case di:
          return "Fragment";
        case rr:
          return "Portal";
        case pi:
          return "Profiler";
        case Wa:
          return "StrictMode";
        case le:
          return "Suspense";
        case me:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case C:
            var t = e;
            return Zu(t) + ".Consumer";
          case vi:
            var a = e;
            return Zu(a._context) + ".Provider";
          case I:
            return Nt(e, e.render, "ForwardRef");
          case tt:
            var i = e.displayName || null;
            return i !== null ? i : Tt(e.type) || "Memo";
          case $e: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Tt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Qo(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function hi(e) {
      return e.displayName || "Context";
    }
    function Ye(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Dt:
          return "Cache";
        case Rt:
          var i = a;
          return hi(i) + ".Consumer";
        case rt:
          var u = a;
          return hi(u._context) + ".Provider";
        case Jt:
          return "DehydratedFragment";
        case He:
          return Qo(a, a.render, "ForwardRef");
        case je:
          return "Fragment";
        case te:
          return a;
        case ye:
          return "Portal";
        case Z:
          return "Root";
        case Ae:
          return "Text";
        case ln:
          return Tt(a);
        case Je:
          return a === Wa ? "StrictMode" : "Mode";
        case De:
          return "Offscreen";
        case mt:
          return "Profiler";
        case _t:
          return "Scope";
        case ce:
          return "Suspense";
        case un:
          return "SuspenseList";
        case Lt:
          return "TracingMarker";
        case ue:
        case ie:
        case Pt:
        case Ge:
        case et:
        case Pe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Ju = N.ReactDebugCurrentFrame, ir = null, mi = !1;
    function Dr() {
      {
        if (ir === null)
          return null;
        var e = ir._debugOwner;
        if (e !== null && typeof e < "u")
          return Ye(e);
      }
      return null;
    }
    function yi() {
      return ir === null ? "" : Vi(ir);
    }
    function cn() {
      Ju.getCurrentStack = null, ir = null, mi = !1;
    }
    function Qt(e) {
      Ju.getCurrentStack = e === null ? null : yi, ir = e, mi = !1;
    }
    function Sl() {
      return ir;
    }
    function Yn(e) {
      mi = e;
    }
    function Or(e) {
      return "" + e;
    }
    function xa(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Cn(e), e;
        default:
          return "";
      }
    }
    var iu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Wo(e, t) {
      iu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Go(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function wl(e) {
      return e._valueTracker;
    }
    function lu(e) {
      e._valueTracker = null;
    }
    function Gf(e) {
      var t = "";
      return e && (Go(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Ra(e) {
      var t = Go(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Cn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Cn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Cn(p), i = "" + p;
          },
          stopTracking: function() {
            lu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Ja(e) {
      wl(e) || (e._valueTracker = Ra(e));
    }
    function gi(e) {
      if (!e)
        return !1;
      var t = wl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Gf(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Ta(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var eo = !1, to = !1, El = !1, uu = !1;
    function no(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function ro(e, t) {
      var a = e, i = t.checked, u = lt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function ei(e, t) {
      Wo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !to && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), to = !0), t.value !== void 0 && t.defaultValue !== void 0 && !eo && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), eo = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: xa(t.value != null ? t.value : i),
        controlled: no(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && Tr(a, "checked", i, !1);
    }
    function E(e, t) {
      var a = e;
      {
        var i = no(t);
        !a._wrapperState.controlled && i && !uu && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), uu = !0), a._wrapperState.controlled && !i && !El && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), El = !0);
      }
      h(e, t);
      var u = xa(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Or(u)) : a.value !== Or(u) && (a.value = Or(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Oe(a, t.type, u) : t.hasOwnProperty("defaultValue") && Oe(a, t.type, xa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function z(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Or(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function j(e, t) {
      var a = e;
      E(a, t), K(a, t);
    }
    function K(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Bn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Ah(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            gi(f), E(f, p);
          }
        }
      }
    }
    function Oe(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ta(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Or(e._wrapperState.initialValue) : e.defaultValue !== Or(a) && (e.defaultValue = Or(a)));
    }
    var ae = !1, Me = !1, gt = !1;
    function kt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? B.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Me || (Me = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (gt || (gt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ae && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ae = !0);
    }
    function rn(e, t) {
      t.value != null && e.setAttribute("value", Or(xa(t.value)));
    }
    var Wt = Array.isArray;
    function ct(e) {
      return Wt(e);
    }
    var Gt;
    Gt = !1;
    function hn() {
      var e = Dr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Cl = ["value", "defaultValue"];
    function qo(e) {
      {
        Wo("select", e);
        for (var t = 0; t < Cl.length; t++) {
          var a = Cl[t];
          if (e[a] != null) {
            var i = ct(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, hn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, hn());
          }
        }
      }
    }
    function Bi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Or(xa(a)), T = null, x = 0; x < u.length; x++) {
          if (u[x].value === g) {
            u[x].selected = !0, i && (u[x].defaultSelected = !0);
            return;
          }
          T === null && !u[x].disabled && (T = u[x]);
        }
        T !== null && (T.selected = !0);
      }
    }
    function Xo(e, t) {
      return lt({}, t, {
        value: void 0
      });
    }
    function ou(e, t) {
      var a = e;
      qo(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Gt && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Gt = !0);
    }
    function qf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Bi(a, !!t.multiple, i, !1) : t.defaultValue != null && Bi(a, !!t.multiple, t.defaultValue, !0);
    }
    function oc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Bi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Bi(a, !!t.multiple, t.defaultValue, !0) : Bi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Xf(e, t) {
      var a = e, i = t.value;
      i != null && Bi(a, !!t.multiple, i, !1);
    }
    var iv = !1;
    function Kf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = lt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Or(a._wrapperState.initialValue)
      });
      return i;
    }
    function Zf(e, t) {
      var a = e;
      Wo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !iv && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component"), iv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (ct(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: xa(i)
      };
    }
    function lv(e, t) {
      var a = e, i = xa(t.value), u = xa(t.defaultValue);
      if (i != null) {
        var s = Or(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Or(u));
    }
    function uv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Jm(e, t) {
      lv(e, t);
    }
    var Ii = "http://www.w3.org/1999/xhtml", Jf = "http://www.w3.org/1998/Math/MathML", ed = "http://www.w3.org/2000/svg";
    function td(e) {
      switch (e) {
        case "svg":
          return ed;
        case "math":
          return Jf;
        default:
          return Ii;
      }
    }
    function nd(e, t) {
      return e == null || e === Ii ? td(t) : e === ed && t === "foreignObject" ? Ii : e;
    }
    var ov = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, sc, sv = ov(function(e, t) {
      if (e.namespaceURI === ed && !("innerHTML" in e)) {
        sc = sc || document.createElement("div"), sc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = sc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Qr = 1, Yi = 3, Nn = 8, $i = 9, rd = 11, ao = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Yi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Ko = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Zo = {
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
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function cv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var fv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Zo).forEach(function(e) {
      fv.forEach(function(t) {
        Zo[cv(t, e)] = Zo[e];
      });
    });
    function cc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Zo.hasOwnProperty(e) && Zo[e]) ? t + "px" : (oa(t, e), ("" + t).trim());
    }
    var dv = /([A-Z])/g, pv = /^ms-/;
    function io(e) {
      return e.replace(dv, "-$1").toLowerCase().replace(pv, "-ms-");
    }
    var vv = function() {
    };
    {
      var ey = /^(?:webkit|moz|o)[A-Z]/, ty = /^-ms-/, hv = /-(.)/g, ad = /;\s*$/, Si = {}, su = {}, mv = !1, Jo = !1, ny = function(e) {
        return e.replace(hv, function(t, a) {
          return a.toUpperCase();
        });
      }, yv = function(e) {
        Si.hasOwnProperty(e) && Si[e] || (Si[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ny(e.replace(ty, "ms-"))
        ));
      }, id = function(e) {
        Si.hasOwnProperty(e) && Si[e] || (Si[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, ld = function(e, t) {
        su.hasOwnProperty(t) && su[t] || (su[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(ad, "")));
      }, gv = function(e, t) {
        mv || (mv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Sv = function(e, t) {
        Jo || (Jo = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      vv = function(e, t) {
        e.indexOf("-") > -1 ? yv(e) : ey.test(e) ? id(e) : ad.test(t) && ld(e, t), typeof t == "number" && (isNaN(t) ? gv(e, t) : isFinite(t) || Sv(e, t));
      };
    }
    var wv = vv;
    function ry(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : io(i)) + ":", t += cc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Ev(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || wv(i, t[i]);
          var s = cc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ay(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Cv(e) {
      var t = {};
      for (var a in e)
        for (var i = Ko[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function iy(e, t) {
      {
        if (!t)
          return;
        var a = Cv(e), i = Cv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ay(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var ti = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, es = lt({
      menuitem: !0
    }, ti), bv = "__html";
    function fc(e, t) {
      if (t) {
        if (es[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(bv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function bl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
    var ts = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, dc = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, lo = {}, ly = new RegExp("^(aria)-[" + ee + "]*$"), uo = new RegExp("^(aria)[A-Z][" + ee + "]*$");
    function ud(e, t) {
      {
        if (Rr.call(lo, t) && lo[t])
          return !0;
        if (uo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = dc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), lo[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), lo[t] = !0, !0;
        }
        if (ly.test(t)) {
          var u = t.toLowerCase(), s = dc.hasOwnProperty(u) ? u : null;
          if (s == null)
            return lo[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), lo[t] = !0, !0;
        }
      }
      return !0;
    }
    function ns(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = ud(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function od(e, t) {
      bl(e, t) || ns(e, t);
    }
    var sd = !1;
    function pc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !sd && (sd = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var cu = function() {
    };
    {
      var lr = {}, cd = /^on./, vc = /^on[^A-Z]/, xv = new RegExp("^(aria)-[" + ee + "]*$"), Rv = new RegExp("^(aria)[A-Z][" + ee + "]*$");
      cu = function(e, t, a, i) {
        if (Rr.call(lr, t) && lr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), lr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), lr[t] = !0, !0;
          if (cd.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), lr[t] = !0, !0;
        } else if (cd.test(t))
          return vc.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), lr[t] = !0, !0;
        if (xv.test(t) || Rv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), lr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), lr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), lr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), lr[t] = !0, !0;
        var v = tn(t), y = v !== null && v.type === In;
        if (ts.hasOwnProperty(u)) {
          var g = ts[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), lr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), lr[t] = !0, !0;
        return typeof a == "boolean" && on(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), lr[t] = !0, !0) : y ? !0 : on(t, a, v, !1) ? (lr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Ln && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), lr[t] = !0), !0);
      };
    }
    var Tv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = cu(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function kv(e, t, a) {
      bl(e, t) || Tv(e, t, a);
    }
    var fd = 1, hc = 2, ka = 4, dd = fd | hc | ka, fu = null;
    function uy(e) {
      fu !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), fu = e;
    }
    function oy() {
      fu === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), fu = null;
    }
    function rs(e) {
      return e === fu;
    }
    function pd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Yi ? t.parentNode : t;
    }
    var mc = null, du = null, Vt = null;
    function yc(e) {
      var t = Do(e);
      if (t) {
        if (typeof mc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Ah(a);
          mc(t.stateNode, t.type, i);
        }
      }
    }
    function gc(e) {
      mc = e;
    }
    function oo(e) {
      du ? Vt ? Vt.push(e) : Vt = [e] : du = e;
    }
    function _v() {
      return du !== null || Vt !== null;
    }
    function Sc() {
      if (du) {
        var e = du, t = Vt;
        if (du = null, Vt = null, yc(e), t)
          for (var a = 0; a < t.length; a++)
            yc(t[a]);
      }
    }
    var so = function(e, t) {
      return e(t);
    }, as = function() {
    }, xl = !1;
    function Dv() {
      var e = _v();
      e && (as(), Sc());
    }
    function Ov(e, t, a) {
      if (xl)
        return e(t, a);
      xl = !0;
      try {
        return so(e, t, a);
      } finally {
        xl = !1, Dv();
      }
    }
    function sy(e, t, a) {
      so = e, as = a;
    }
    function Lv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function wc(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && Lv(t));
        default:
          return !1;
      }
    }
    function Rl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Ah(a);
      if (i === null)
        return null;
      var u = i[t];
      if (wc(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var is = !1;
    if (On)
      try {
        var pu = {};
        Object.defineProperty(pu, "passive", {
          get: function() {
            is = !0;
          }
        }), window.addEventListener("test", pu, pu), window.removeEventListener("test", pu, pu);
      } catch {
        is = !1;
      }
    function Ec(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Cc = Ec;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var vd = document.createElement("react");
      Cc = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), T = !1, x = !0, M = window.event, A = Object.getOwnPropertyDescriptor(window, "event");
        function F() {
          vd.removeEventListener(H, Le, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = M);
        }
        var se = Array.prototype.slice.call(arguments, 3);
        function Le() {
          T = !0, F(), a.apply(i, se), x = !1;
        }
        var Re, xt = !1, St = !1;
        function D(O) {
          if (Re = O.error, xt = !0, Re === null && O.colno === 0 && O.lineno === 0 && (St = !0), O.defaultPrevented && Re != null && typeof Re == "object")
            try {
              Re._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), vd.addEventListener(H, Le, !1), g.initEvent(H, !1, !1), vd.dispatchEvent(g), A && Object.defineProperty(window, "event", A), T && x && (xt ? St && (Re = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Re = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Re)), window.removeEventListener("error", D), !T)
          return F(), Ec.apply(this, arguments);
      };
    }
    var Nv = Cc, co = !1, bc = null, fo = !1, wi = null, Mv = {
      onError: function(e) {
        co = !0, bc = e;
      }
    };
    function Tl(e, t, a, i, u, s, f, p, v) {
      co = !1, bc = null, Nv.apply(Mv, arguments);
    }
    function Ei(e, t, a, i, u, s, f, p, v) {
      if (Tl.apply(this, arguments), co) {
        var y = us();
        fo || (fo = !0, wi = y);
      }
    }
    function ls() {
      if (fo) {
        var e = wi;
        throw fo = !1, wi = null, e;
      }
    }
    function Qi() {
      return co;
    }
    function us() {
      if (co) {
        var e = bc;
        return co = !1, bc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function po(e) {
      return e._reactInternals;
    }
    function cy(e) {
      return e._reactInternals !== void 0;
    }
    function vu(e, t) {
      e._reactInternals = t;
    }
    var ke = (
      /*                      */
      0
    ), ni = (
      /*                */
      1
    ), mn = (
      /*                    */
      2
    ), Et = (
      /*                       */
      4
    ), _a = (
      /*                */
      16
    ), Da = (
      /*                 */
      32
    ), an = (
      /*                     */
      64
    ), Te = (
      /*                   */
      128
    ), Er = (
      /*            */
      256
    ), wn = (
      /*                          */
      512
    ), $n = (
      /*                     */
      1024
    ), Wr = (
      /*                      */
      2048
    ), Gr = (
      /*                    */
      4096
    ), Mn = (
      /*                   */
      8192
    ), vo = (
      /*             */
      16384
    ), zv = (
      /*               */
      32767
    ), os = (
      /*                   */
      32768
    ), Kn = (
      /*                */
      65536
    ), xc = (
      /* */
      131072
    ), Ci = (
      /*                       */
      1048576
    ), ho = (
      /*                    */
      2097152
    ), Wi = (
      /*                 */
      4194304
    ), Rc = (
      /*                */
      8388608
    ), kl = (
      /*               */
      16777216
    ), bi = (
      /*              */
      33554432
    ), _l = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Et | $n | 0
    ), Dl = mn | Et | _a | Da | wn | Gr | Mn, Ol = Et | an | wn | Mn, Gi = Wr | _a, zn = Wi | Rc | ho, Oa = N.ReactCurrentOwner;
    function da(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (mn | Gr)) !== ke && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === Z ? a : null;
    }
    function xi(e) {
      if (e.tag === ce) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Ri(e) {
      return e.tag === Z ? e.stateNode.containerInfo : null;
    }
    function hu(e) {
      return da(e) === e;
    }
    function Uv(e) {
      {
        var t = Oa.current;
        if (t !== null && t.tag === ue) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ye(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = po(e);
      return u ? da(u) === u : !1;
    }
    function Tc(e) {
      if (da(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function kc(e) {
      var t = e.alternate;
      if (!t) {
        var a = da(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return Tc(s), e;
            if (v === u)
              return Tc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== Z)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function qr(e) {
      var t = kc(e);
      return t !== null ? Xr(t) : null;
    }
    function Xr(e) {
      if (e.tag === te || e.tag === Ae)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Xr(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function dn(e) {
      var t = kc(e);
      return t !== null ? La(t) : null;
    }
    function La(e) {
      if (e.tag === te || e.tag === Ae)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== ye) {
          var a = La(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var hd = Q.unstable_scheduleCallback, Av = Q.unstable_cancelCallback, md = Q.unstable_shouldYield, yd = Q.unstable_requestPaint, Qn = Q.unstable_now, _c = Q.unstable_getCurrentPriorityLevel, ss = Q.unstable_ImmediatePriority, Ll = Q.unstable_UserBlockingPriority, qi = Q.unstable_NormalPriority, fy = Q.unstable_LowPriority, mu = Q.unstable_IdlePriority, Dc = Q.unstable_yieldValue, jv = Q.unstable_setDisableYieldValue, yu = null, xn = null, oe = null, pa = !1, Kr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function mo(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ve && (e = lt({}, e, {
          getLaneLabelMap: gu,
          injectProfilingHooks: Na
        })), yu = t.inject(e), xn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function gd(e, t) {
      if (xn && typeof xn.onScheduleFiberRoot == "function")
        try {
          xn.onScheduleFiberRoot(yu, e, t);
        } catch (a) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Sd(e, t) {
      if (xn && typeof xn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Te) === Te;
          if (Ue) {
            var i;
            switch (t) {
              case Lr:
                i = ss;
                break;
              case ki:
                i = Ll;
                break;
              case Ma:
                i = qi;
                break;
              case za:
                i = mu;
                break;
              default:
                i = qi;
                break;
            }
            xn.onCommitFiberRoot(yu, e, i, a);
          }
        } catch (u) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function wd(e) {
      if (xn && typeof xn.onPostCommitFiberRoot == "function")
        try {
          xn.onPostCommitFiberRoot(yu, e);
        } catch (t) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ed(e) {
      if (xn && typeof xn.onCommitFiberUnmount == "function")
        try {
          xn.onCommitFiberUnmount(yu, e);
        } catch (t) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function yn(e) {
      if (typeof Dc == "function" && (jv(e), Ke(e)), xn && typeof xn.setStrictMode == "function")
        try {
          xn.setStrictMode(yu, e);
        } catch (t) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Na(e) {
      oe = e;
    }
    function gu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Eu; a++) {
          var i = Vv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Cd(e) {
      oe !== null && typeof oe.markCommitStarted == "function" && oe.markCommitStarted(e);
    }
    function bd() {
      oe !== null && typeof oe.markCommitStopped == "function" && oe.markCommitStopped();
    }
    function va(e) {
      oe !== null && typeof oe.markComponentRenderStarted == "function" && oe.markComponentRenderStarted(e);
    }
    function ha() {
      oe !== null && typeof oe.markComponentRenderStopped == "function" && oe.markComponentRenderStopped();
    }
    function xd(e) {
      oe !== null && typeof oe.markComponentPassiveEffectMountStarted == "function" && oe.markComponentPassiveEffectMountStarted(e);
    }
    function Fv() {
      oe !== null && typeof oe.markComponentPassiveEffectMountStopped == "function" && oe.markComponentPassiveEffectMountStopped();
    }
    function Xi(e) {
      oe !== null && typeof oe.markComponentPassiveEffectUnmountStarted == "function" && oe.markComponentPassiveEffectUnmountStarted(e);
    }
    function Nl() {
      oe !== null && typeof oe.markComponentPassiveEffectUnmountStopped == "function" && oe.markComponentPassiveEffectUnmountStopped();
    }
    function Oc(e) {
      oe !== null && typeof oe.markComponentLayoutEffectMountStarted == "function" && oe.markComponentLayoutEffectMountStarted(e);
    }
    function Hv() {
      oe !== null && typeof oe.markComponentLayoutEffectMountStopped == "function" && oe.markComponentLayoutEffectMountStopped();
    }
    function cs(e) {
      oe !== null && typeof oe.markComponentLayoutEffectUnmountStarted == "function" && oe.markComponentLayoutEffectUnmountStarted(e);
    }
    function Rd() {
      oe !== null && typeof oe.markComponentLayoutEffectUnmountStopped == "function" && oe.markComponentLayoutEffectUnmountStopped();
    }
    function fs(e, t, a) {
      oe !== null && typeof oe.markComponentErrored == "function" && oe.markComponentErrored(e, t, a);
    }
    function Ti(e, t, a) {
      oe !== null && typeof oe.markComponentSuspended == "function" && oe.markComponentSuspended(e, t, a);
    }
    function ds(e) {
      oe !== null && typeof oe.markLayoutEffectsStarted == "function" && oe.markLayoutEffectsStarted(e);
    }
    function ps() {
      oe !== null && typeof oe.markLayoutEffectsStopped == "function" && oe.markLayoutEffectsStopped();
    }
    function Su(e) {
      oe !== null && typeof oe.markPassiveEffectsStarted == "function" && oe.markPassiveEffectsStarted(e);
    }
    function Td() {
      oe !== null && typeof oe.markPassiveEffectsStopped == "function" && oe.markPassiveEffectsStopped();
    }
    function wu(e) {
      oe !== null && typeof oe.markRenderStarted == "function" && oe.markRenderStarted(e);
    }
    function Pv() {
      oe !== null && typeof oe.markRenderYielded == "function" && oe.markRenderYielded();
    }
    function Lc() {
      oe !== null && typeof oe.markRenderStopped == "function" && oe.markRenderStopped();
    }
    function gn(e) {
      oe !== null && typeof oe.markRenderScheduled == "function" && oe.markRenderScheduled(e);
    }
    function Nc(e, t) {
      oe !== null && typeof oe.markForceUpdateScheduled == "function" && oe.markForceUpdateScheduled(e, t);
    }
    function vs(e, t) {
      oe !== null && typeof oe.markStateUpdateScheduled == "function" && oe.markStateUpdateScheduled(e, t);
    }
    var _e = (
      /*                         */
      0
    ), ht = (
      /*                 */
      1
    ), Mt = (
      /*                    */
      2
    ), qt = (
      /*               */
      8
    ), zt = (
      /*              */
      16
    ), Un = Math.clz32 ? Math.clz32 : hs, Zn = Math.log, Mc = Math.LN2;
    function hs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Zn(t) / Mc | 0) | 0;
    }
    var Eu = 31, Y = (
      /*                        */
      0
    ), Ot = (
      /*                          */
      0
    ), Fe = (
      /*                        */
      1
    ), Ml = (
      /*    */
      2
    ), ri = (
      /*             */
      4
    ), Cr = (
      /*            */
      8
    ), Rn = (
      /*                     */
      16
    ), Ki = (
      /*                */
      32
    ), zl = (
      /*                       */
      4194240
    ), Cu = (
      /*                        */
      64
    ), zc = (
      /*                        */
      128
    ), Uc = (
      /*                        */
      256
    ), Ac = (
      /*                        */
      512
    ), jc = (
      /*                        */
      1024
    ), Fc = (
      /*                        */
      2048
    ), Hc = (
      /*                        */
      4096
    ), Pc = (
      /*                        */
      8192
    ), Vc = (
      /*                        */
      16384
    ), bu = (
      /*                       */
      32768
    ), Bc = (
      /*                       */
      65536
    ), yo = (
      /*                       */
      131072
    ), go = (
      /*                       */
      262144
    ), Ic = (
      /*                       */
      524288
    ), ms = (
      /*                       */
      1048576
    ), Yc = (
      /*                       */
      2097152
    ), ys = (
      /*                            */
      130023424
    ), xu = (
      /*                             */
      4194304
    ), $c = (
      /*                             */
      8388608
    ), gs = (
      /*                             */
      16777216
    ), Qc = (
      /*                             */
      33554432
    ), Wc = (
      /*                             */
      67108864
    ), kd = xu, Ss = (
      /*          */
      134217728
    ), _d = (
      /*                          */
      268435455
    ), ws = (
      /*               */
      268435456
    ), Ru = (
      /*                        */
      536870912
    ), Zr = (
      /*                   */
      1073741824
    );
    function Vv(e) {
      {
        if (e & Fe)
          return "Sync";
        if (e & Ml)
          return "InputContinuousHydration";
        if (e & ri)
          return "InputContinuous";
        if (e & Cr)
          return "DefaultHydration";
        if (e & Rn)
          return "Default";
        if (e & Ki)
          return "TransitionHydration";
        if (e & zl)
          return "Transition";
        if (e & ys)
          return "Retry";
        if (e & Ss)
          return "SelectiveHydration";
        if (e & ws)
          return "IdleHydration";
        if (e & Ru)
          return "Idle";
        if (e & Zr)
          return "Offscreen";
      }
    }
    var Zt = -1, Tu = Cu, Gc = xu;
    function Es(e) {
      switch (Ul(e)) {
        case Fe:
          return Fe;
        case Ml:
          return Ml;
        case ri:
          return ri;
        case Cr:
          return Cr;
        case Rn:
          return Rn;
        case Ki:
          return Ki;
        case Cu:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case bu:
        case Bc:
        case yo:
        case go:
        case Ic:
        case ms:
        case Yc:
          return e & zl;
        case xu:
        case $c:
        case gs:
        case Qc:
        case Wc:
          return e & ys;
        case Ss:
          return Ss;
        case ws:
          return ws;
        case Ru:
          return Ru;
        case Zr:
          return Zr;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function qc(e, t) {
      var a = e.pendingLanes;
      if (a === Y)
        return Y;
      var i = Y, u = e.suspendedLanes, s = e.pingedLanes, f = a & _d;
      if (f !== Y) {
        var p = f & ~u;
        if (p !== Y)
          i = Es(p);
        else {
          var v = f & s;
          v !== Y && (i = Es(v));
        }
      } else {
        var y = a & ~u;
        y !== Y ? i = Es(y) : s !== Y && (i = Es(s));
      }
      if (i === Y)
        return Y;
      if (t !== Y && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === Y) {
        var g = Ul(i), T = Ul(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= T || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === Rn && (T & zl) !== Y
        )
          return t;
      }
      (i & ri) !== Y && (i |= a & Rn);
      var x = e.entangledLanes;
      if (x !== Y)
        for (var M = e.entanglements, A = i & x; A > 0; ) {
          var F = An(A), se = 1 << F;
          i |= M[F], A &= ~se;
        }
      return i;
    }
    function ai(e, t) {
      for (var a = e.eventTimes, i = Zt; t > 0; ) {
        var u = An(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Dd(e, t) {
      switch (e) {
        case Fe:
        case Ml:
        case ri:
          return t + 250;
        case Cr:
        case Rn:
        case Ki:
        case Cu:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case bu:
        case Bc:
        case yo:
        case go:
        case Ic:
        case ms:
        case Yc:
          return t + 5e3;
        case xu:
        case $c:
        case gs:
        case Qc:
        case Wc:
          return Zt;
        case Ss:
        case ws:
        case Ru:
        case Zr:
          return Zt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Zt;
      }
    }
    function Xc(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = An(f), v = 1 << p, y = s[p];
        y === Zt ? ((v & i) === Y || (v & u) !== Y) && (s[p] = Dd(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Bv(e) {
      return Es(e.pendingLanes);
    }
    function Kc(e) {
      var t = e.pendingLanes & ~Zr;
      return t !== Y ? t : t & Zr ? Zr : Y;
    }
    function Iv(e) {
      return (e & Fe) !== Y;
    }
    function Cs(e) {
      return (e & _d) !== Y;
    }
    function ku(e) {
      return (e & ys) === e;
    }
    function Od(e) {
      var t = Fe | ri | Rn;
      return (e & t) === Y;
    }
    function Ld(e) {
      return (e & zl) === e;
    }
    function Zc(e, t) {
      var a = Ml | ri | Cr | Rn;
      return (t & a) !== Y;
    }
    function Yv(e, t) {
      return (t & e.expiredLanes) !== Y;
    }
    function Nd(e) {
      return (e & zl) !== Y;
    }
    function Md() {
      var e = Tu;
      return Tu <<= 1, (Tu & zl) === Y && (Tu = Cu), e;
    }
    function $v() {
      var e = Gc;
      return Gc <<= 1, (Gc & ys) === Y && (Gc = xu), e;
    }
    function Ul(e) {
      return e & -e;
    }
    function bs(e) {
      return Ul(e);
    }
    function An(e) {
      return 31 - Un(e);
    }
    function ur(e) {
      return An(e);
    }
    function Jr(e, t) {
      return (e & t) !== Y;
    }
    function _u(e, t) {
      return (e & t) === t;
    }
    function at(e, t) {
      return e | t;
    }
    function xs(e, t) {
      return e & ~t;
    }
    function zd(e, t) {
      return e & t;
    }
    function Qv(e) {
      return e;
    }
    function Wv(e, t) {
      return e !== Ot && e < t ? e : t;
    }
    function Rs(e) {
      for (var t = [], a = 0; a < Eu; a++)
        t.push(e);
      return t;
    }
    function So(e, t, a) {
      e.pendingLanes |= t, t !== Ru && (e.suspendedLanes = Y, e.pingedLanes = Y);
      var i = e.eventTimes, u = ur(t);
      i[u] = a;
    }
    function Gv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = An(i), s = 1 << u;
        a[u] = Zt, i &= ~s;
      }
    }
    function Jc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Ud(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Y, e.pingedLanes = Y, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = An(f), v = 1 << p;
        i[p] = Y, u[p] = Zt, s[p] = Zt, f &= ~v;
      }
    }
    function ef(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = An(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Ad(e, t) {
      var a = Ul(t), i;
      switch (a) {
        case ri:
          i = Ml;
          break;
        case Rn:
          i = Cr;
          break;
        case Cu:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case bu:
        case Bc:
        case yo:
        case go:
        case Ic:
        case ms:
        case Yc:
        case xu:
        case $c:
        case gs:
        case Qc:
        case Wc:
          i = Ki;
          break;
        case Ru:
          i = ws;
          break;
        default:
          i = Ot;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Ot ? Ot : i;
    }
    function Ts(e, t, a) {
      if (Kr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = ur(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function qv(e, t) {
      if (Kr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = ur(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function jd(e, t) {
      return null;
    }
    var Lr = Fe, ki = ri, Ma = Rn, za = Ru, ks = Ot;
    function Ua() {
      return ks;
    }
    function jn(e) {
      ks = e;
    }
    function Xv(e, t) {
      var a = ks;
      try {
        return ks = e, t();
      } finally {
        ks = a;
      }
    }
    function Kv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function _s(e, t) {
      return e > t ? e : t;
    }
    function Jn(e, t) {
      return e !== 0 && e < t;
    }
    function Zv(e) {
      var t = Ul(e);
      return Jn(Lr, t) ? Jn(ki, t) ? Cs(t) ? Ma : za : ki : Lr;
    }
    function tf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ds;
    function br(e) {
      Ds = e;
    }
    function dy(e) {
      Ds(e);
    }
    var he;
    function wo(e) {
      he = e;
    }
    var nf;
    function Jv(e) {
      nf = e;
    }
    var eh;
    function Os(e) {
      eh = e;
    }
    var Ls;
    function Fd(e) {
      Ls = e;
    }
    var rf = !1, Ns = [], Zi = null, _i = null, Di = null, Tn = /* @__PURE__ */ new Map(), Nr = /* @__PURE__ */ new Map(), Mr = [], th = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function nh(e) {
      return th.indexOf(e) > -1;
    }
    function ii(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Hd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Zi = null;
          break;
        case "dragenter":
        case "dragleave":
          _i = null;
          break;
        case "mouseover":
        case "mouseout":
          Di = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Tn.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Nr.delete(i);
          break;
        }
      }
    }
    function ea(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ii(t, a, i, u, s);
        if (t !== null) {
          var p = Do(t);
          p !== null && he(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function py(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Zi = ea(Zi, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return _i = ea(_i, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Di = ea(Di, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return Tn.set(y, ea(Tn.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, T = g.pointerId;
          return Nr.set(T, ea(Nr.get(T) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Pd(e) {
      var t = Ys(e.target);
      if (t !== null) {
        var a = da(t);
        if (a !== null) {
          var i = a.tag;
          if (i === ce) {
            var u = xi(a);
            if (u !== null) {
              e.blockedOn = u, Ls(e.priority, function() {
                nf(a);
              });
              return;
            }
          } else if (i === Z) {
            var s = a.stateNode;
            if (tf(s)) {
              e.blockedOn = Ri(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function rh(e) {
      for (var t = eh(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Mr.length && Jn(t, Mr[i].priority); i++)
        ;
      Mr.splice(i, 0, a), i === 0 && Pd(a);
    }
    function Ms(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Co(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          uy(s), u.target.dispatchEvent(s), oy();
        } else {
          var f = Do(i);
          return f !== null && he(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Vd(e, t, a) {
      Ms(e) && a.delete(t);
    }
    function vy() {
      rf = !1, Zi !== null && Ms(Zi) && (Zi = null), _i !== null && Ms(_i) && (_i = null), Di !== null && Ms(Di) && (Di = null), Tn.forEach(Vd), Nr.forEach(Vd);
    }
    function Al(e, t) {
      e.blockedOn === t && (e.blockedOn = null, rf || (rf = !0, Q.unstable_scheduleCallback(Q.unstable_NormalPriority, vy)));
    }
    function Du(e) {
      if (Ns.length > 0) {
        Al(Ns[0], e);
        for (var t = 1; t < Ns.length; t++) {
          var a = Ns[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Zi !== null && Al(Zi, e), _i !== null && Al(_i, e), Di !== null && Al(Di, e);
      var i = function(p) {
        return Al(p, e);
      };
      Tn.forEach(i), Nr.forEach(i);
      for (var u = 0; u < Mr.length; u++) {
        var s = Mr[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Mr.length > 0; ) {
        var f = Mr[0];
        if (f.blockedOn !== null)
          break;
        Pd(f), f.blockedOn === null && Mr.shift();
      }
    }
    var or = N.ReactCurrentBatchConfig, Ct = !0;
    function Wn(e) {
      Ct = !!e;
    }
    function Fn() {
      return Ct;
    }
    function sr(e, t, a) {
      var i = af(t), u;
      switch (i) {
        case Lr:
          u = ma;
          break;
        case ki:
          u = Eo;
          break;
        case Ma:
        default:
          u = kn;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function ma(e, t, a, i) {
      var u = Ua(), s = or.transition;
      or.transition = null;
      try {
        jn(Lr), kn(e, t, a, i);
      } finally {
        jn(u), or.transition = s;
      }
    }
    function Eo(e, t, a, i) {
      var u = Ua(), s = or.transition;
      or.transition = null;
      try {
        jn(ki), kn(e, t, a, i);
      } finally {
        jn(u), or.transition = s;
      }
    }
    function kn(e, t, a, i) {
      Ct && zs(e, t, a, i);
    }
    function zs(e, t, a, i) {
      var u = Co(e, t, a, i);
      if (u === null) {
        Ly(e, t, i, Oi, a), Hd(e, i);
        return;
      }
      if (py(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Hd(e, i), t & ka && nh(e)) {
        for (; u !== null; ) {
          var s = Do(u);
          s !== null && dy(s);
          var f = Co(e, t, a, i);
          if (f === null && Ly(e, t, i, Oi, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Ly(e, t, i, null, a);
    }
    var Oi = null;
    function Co(e, t, a, i) {
      Oi = null;
      var u = pd(i), s = Ys(u);
      if (s !== null) {
        var f = da(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === ce) {
            var v = xi(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === Z) {
            var y = f.stateNode;
            if (tf(y))
              return Ri(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Oi = s, null;
    }
    function af(e) {
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
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Lr;
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
          return ki;
        case "message": {
          var t = _c();
          switch (t) {
            case ss:
              return Lr;
            case Ll:
              return ki;
            case qi:
            case fy:
              return Ma;
            case mu:
              return za;
            default:
              return Ma;
          }
        }
        default:
          return Ma;
      }
    }
    function Us(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ta(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Bd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function bo(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ya = null, xo = null, Ou = null;
    function jl(e) {
      return ya = e, xo = As(), !0;
    }
    function lf() {
      ya = null, xo = null, Ou = null;
    }
    function Ji() {
      if (Ou)
        return Ou;
      var e, t = xo, a = t.length, i, u = As(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ou = u.slice(e, p), Ou;
    }
    function As() {
      return "value" in ya ? ya.value : ya.textContent;
    }
    function Fl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Ro() {
      return !0;
    }
    function js() {
      return !1;
    }
    function xr(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = Ro : this.isDefaultPrevented = js, this.isPropagationStopped = js, this;
      }
      return lt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Ro);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Ro);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Ro
      }), t;
    }
    var Hn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Li = xr(Hn), zr = lt({}, Hn, {
      view: 0,
      detail: 0
    }), na = xr(zr), uf, Fs, Lu;
    function hy(e) {
      e !== Lu && (Lu && e.type === "mousemove" ? (uf = e.screenX - Lu.screenX, Fs = e.screenY - Lu.screenY) : (uf = 0, Fs = 0), Lu = e);
    }
    var li = lt({}, zr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: pn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (hy(e), uf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Fs;
      }
    }), Id = xr(li), Yd = lt({}, li, {
      dataTransfer: 0
    }), Nu = xr(Yd), $d = lt({}, zr, {
      relatedTarget: 0
    }), el = xr($d), ah = lt({}, Hn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ih = xr(ah), Qd = lt({}, Hn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), of = xr(Qd), my = lt({}, Hn, {
      data: 0
    }), lh = xr(my), uh = lh, oh = {
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
    }, Mu = {
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
    };
    function yy(e) {
      if (e.key) {
        var t = oh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Fl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Mu[e.keyCode] || "Unidentified" : "";
    }
    var To = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function sh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = To[e];
      return i ? !!a[i] : !1;
    }
    function pn(e) {
      return sh;
    }
    var gy = lt({}, zr, {
      key: yy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: pn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Fl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Fl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), ch = xr(gy), Sy = lt({}, li, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), fh = xr(Sy), dh = lt({}, zr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pn
    }), ph = xr(dh), wy = lt({}, Hn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Aa = xr(wy), Wd = lt({}, li, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Ey = xr(Wd), Hl = [9, 13, 27, 32], Hs = 229, tl = On && "CompositionEvent" in window, Pl = null;
    On && "documentMode" in document && (Pl = document.documentMode);
    var Gd = On && "TextEvent" in window && !Pl, sf = On && (!tl || Pl && Pl > 8 && Pl <= 11), vh = 32, cf = String.fromCharCode(vh);
    function Cy() {
      pt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), pt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), pt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), pt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var qd = !1;
    function hh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function ff(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function df(e, t) {
      return e === "keydown" && t.keyCode === Hs;
    }
    function Xd(e, t) {
      switch (e) {
        case "keyup":
          return Hl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Hs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function pf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function mh(e) {
      return e.locale === "ko";
    }
    var zu = !1;
    function Kd(e, t, a, i, u) {
      var s, f;
      if (tl ? s = ff(t) : zu ? Xd(t, i) && (s = "onCompositionEnd") : df(t, i) && (s = "onCompositionStart"), !s)
        return null;
      sf && !mh(i) && (!zu && s === "onCompositionStart" ? zu = jl(u) : s === "onCompositionEnd" && zu && (f = Ji()));
      var p = bh(a, s);
      if (p.length > 0) {
        var v = new lh(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = pf(i);
          y !== null && (v.data = y);
        }
      }
    }
    function vf(e, t) {
      switch (e) {
        case "compositionend":
          return pf(t);
        case "keypress":
          var a = t.which;
          return a !== vh ? null : (qd = !0, cf);
        case "textInput":
          var i = t.data;
          return i === cf && qd ? null : i;
        default:
          return null;
      }
    }
    function Zd(e, t) {
      if (zu) {
        if (e === "compositionend" || !tl && Xd(e, t)) {
          var a = Ji();
          return lf(), zu = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!hh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return sf && !mh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function hf(e, t, a, i, u) {
      var s;
      if (Gd ? s = vf(t, i) : s = Zd(t, i), !s)
        return null;
      var f = bh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new uh("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function yh(e, t, a, i, u, s, f) {
      Kd(e, t, a, i, u), hf(e, t, a, i, u);
    }
    var by = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Ps(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!by[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function xy(e) {
      if (!On)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Vs() {
      pt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function gh(e, t, a, i) {
      oo(i);
      var u = bh(t, "onChange");
      if (u.length > 0) {
        var s = new Li("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var Vl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      gh(t, n, e, pd(e)), Ov(o, t);
    }
    function o(e) {
      L0(e, 0);
    }
    function c(e) {
      var t = Ef(e);
      if (gi(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var m = !1;
    On && (m = xy("input") && (!document.documentMode || document.documentMode > 9));
    function w(e, t) {
      Vl = e, n = t, Vl.attachEvent("onpropertychange", U);
    }
    function b() {
      Vl && (Vl.detachEvent("onpropertychange", U), Vl = null, n = null);
    }
    function U(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function W(e, t, a) {
      e === "focusin" ? (b(), w(t, a)) : e === "focusout" && b();
    }
    function q(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function $(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function de(e, t) {
      if (e === "click")
        return c(t);
    }
    function ge(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Ee(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Oe(e, "number", e.value);
    }
    function _n(e, t, a, i, u, s, f) {
      var p = a ? Ef(a) : window, v, y;
      if (r(p) ? v = d : Ps(p) ? m ? v = ge : (v = q, y = W) : $(p) && (v = de), v) {
        var g = v(t, a);
        if (g) {
          gh(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && Ee(p);
    }
    function _() {
      It("onMouseEnter", ["mouseout", "mouseover"]), It("onMouseLeave", ["mouseout", "mouseover"]), It("onPointerEnter", ["pointerout", "pointerover"]), It("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function R(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !rs(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Ys(y) || dp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var T = u.ownerDocument;
          T ? g = T.defaultView || T.parentWindow : g = window;
        }
        var x, M;
        if (v) {
          var A = i.relatedTarget || i.toElement;
          if (x = a, M = A ? Ys(A) : null, M !== null) {
            var F = da(M);
            (M !== F || M.tag !== te && M.tag !== Ae) && (M = null);
          }
        } else
          x = null, M = a;
        if (x !== M) {
          var se = Id, Le = "onMouseLeave", Re = "onMouseEnter", xt = "mouse";
          (t === "pointerout" || t === "pointerover") && (se = fh, Le = "onPointerLeave", Re = "onPointerEnter", xt = "pointer");
          var St = x == null ? g : Ef(x), D = M == null ? g : Ef(M), H = new se(Le, xt + "leave", x, i, u);
          H.target = St, H.relatedTarget = D;
          var O = null, X = Ys(u);
          if (X === a) {
            var ve = new se(Re, xt + "enter", M, i, u);
            ve.target = D, ve.relatedTarget = St, O = ve;
          }
          Ab(e, H, O, x, M);
        }
      }
    }
    function L(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var G = typeof Object.is == "function" ? Object.is : L;
    function Se(e, t) {
      if (G(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Rr.call(t, s) || !G(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Ne(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function ze(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Ie(e, t) {
      for (var a = Ne(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Yi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Ne(ze(a));
      }
    }
    function er(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Ut(e, u, s, f, p);
    }
    function Ut(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, T = null;
      e: for (; ; ) {
        for (var x = null; g === t && (a === 0 || g.nodeType === Yi) && (f = s + a), g === i && (u === 0 || g.nodeType === Yi) && (p = s + u), g.nodeType === Yi && (s += g.nodeValue.length), (x = g.firstChild) !== null; )
          T = g, g = x;
        for (; ; ) {
          if (g === e)
            break e;
          if (T === t && ++v === a && (f = s), T === i && ++y === u && (p = s), (x = g.nextSibling) !== null)
            break;
          g = T, T = g.parentNode;
        }
        g = x;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Bl(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Ie(e, f), g = Ie(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var T = a.createRange();
          T.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(T), u.extend(g.node, g.offset)) : (T.setEnd(g.node, g.offset), u.addRange(T));
        }
      }
    }
    function Sh(e) {
      return e && e.nodeType === Yi;
    }
    function w0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Sh(e) ? !1 : Sh(t) ? w0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function gb(e) {
      return e && e.ownerDocument && w0(e.ownerDocument.documentElement, e);
    }
    function Sb(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function E0() {
      for (var e = window, t = Ta(); t instanceof e.HTMLIFrameElement; ) {
        if (Sb(t))
          e = t.contentWindow;
        else
          return t;
        t = Ta(e.document);
      }
      return t;
    }
    function Ry(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function wb() {
      var e = E0();
      return {
        focusedElem: e,
        selectionRange: Ry(e) ? Cb(e) : null
      };
    }
    function Eb(e) {
      var t = E0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && gb(a)) {
        i !== null && Ry(a) && bb(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Qr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function Cb(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = er(e), t || {
        start: 0,
        end: 0
      };
    }
    function bb(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Bl(e, t);
    }
    var xb = On && "documentMode" in document && document.documentMode <= 11;
    function Rb() {
      pt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var mf = null, Ty = null, Jd = null, ky = !1;
    function Tb(e) {
      if ("selectionStart" in e && Ry(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function kb(e) {
      return e.window === e ? e.document : e.nodeType === $i ? e : e.ownerDocument;
    }
    function C0(e, t, a) {
      var i = kb(a);
      if (!(ky || mf == null || mf !== Ta(i))) {
        var u = Tb(mf);
        if (!Jd || !Se(Jd, u)) {
          Jd = u;
          var s = bh(Ty, "onSelect");
          if (s.length > 0) {
            var f = new Li("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = mf;
          }
        }
      }
    }
    function _b(e, t, a, i, u, s, f) {
      var p = a ? Ef(a) : window;
      switch (t) {
        case "focusin":
          (Ps(p) || p.contentEditable === "true") && (mf = p, Ty = a, Jd = null);
          break;
        case "focusout":
          mf = null, Ty = null, Jd = null;
          break;
        case "mousedown":
          ky = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ky = !1, C0(e, i, u);
          break;
        case "selectionchange":
          if (xb)
            break;
        case "keydown":
        case "keyup":
          C0(e, i, u);
      }
    }
    function wh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var yf = {
      animationend: wh("Animation", "AnimationEnd"),
      animationiteration: wh("Animation", "AnimationIteration"),
      animationstart: wh("Animation", "AnimationStart"),
      transitionend: wh("Transition", "TransitionEnd")
    }, _y = {}, b0 = {};
    On && (b0 = document.createElement("div").style, "AnimationEvent" in window || (delete yf.animationend.animation, delete yf.animationiteration.animation, delete yf.animationstart.animation), "TransitionEvent" in window || delete yf.transitionend.transition);
    function Eh(e) {
      if (_y[e])
        return _y[e];
      if (!yf[e])
        return e;
      var t = yf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in b0)
          return _y[e] = t[a];
      return e;
    }
    var x0 = Eh("animationend"), R0 = Eh("animationiteration"), T0 = Eh("animationstart"), k0 = Eh("transitionend"), _0 = /* @__PURE__ */ new Map(), D0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function ko(e, t) {
      _0.set(e, t), pt(t, [e]);
    }
    function Db() {
      for (var e = 0; e < D0.length; e++) {
        var t = D0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        ko(a, "on" + i);
      }
      ko(x0, "onAnimationEnd"), ko(R0, "onAnimationIteration"), ko(T0, "onAnimationStart"), ko("dblclick", "onDoubleClick"), ko("focusin", "onFocus"), ko("focusout", "onBlur"), ko(k0, "onTransitionEnd");
    }
    function Ob(e, t, a, i, u, s, f) {
      var p = _0.get(t);
      if (p !== void 0) {
        var v = Li, y = t;
        switch (t) {
          case "keypress":
            if (Fl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = ch;
            break;
          case "focusin":
            y = "focus", v = el;
            break;
          case "focusout":
            y = "blur", v = el;
            break;
          case "beforeblur":
          case "afterblur":
            v = el;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Id;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Nu;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = ph;
            break;
          case x0:
          case R0:
          case T0:
            v = ih;
            break;
          case k0:
            v = Aa;
            break;
          case "scroll":
            v = na;
            break;
          case "wheel":
            v = Ey;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = of;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = fh;
            break;
        }
        var g = (s & ka) !== 0;
        {
          var T = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", x = zb(a, p, i.type, g, T);
          if (x.length > 0) {
            var M = new v(p, y, null, i, u);
            e.push({
              event: M,
              listeners: x
            });
          }
        }
      }
    }
    Db(), _(), Vs(), Rb(), Cy();
    function Lb(e, t, a, i, u, s, f) {
      Ob(e, t, a, i, u, s);
      var p = (s & dd) === 0;
      p && (R(e, t, a, i, u), _n(e, t, a, i, u), _b(e, t, a, i, u), yh(e, t, a, i, u));
    }
    var ep = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Dy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(ep));
    function O0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ei(i, t, void 0, e), e.currentTarget = null;
    }
    function Nb(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          O0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], T = g.instance, x = g.currentTarget, M = g.listener;
          if (T !== i && e.isPropagationStopped())
            return;
          O0(e, M, x), i = T;
        }
    }
    function L0(e, t) {
      for (var a = (t & ka) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        Nb(s, f, a);
      }
      ls();
    }
    function Mb(e, t, a, i, u) {
      var s = pd(a), f = [];
      Lb(f, e, i, a, s, t), L0(f, t);
    }
    function Sn(e, t) {
      Dy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = sR(t), u = jb(e);
      i.has(u) || (N0(t, e, hc, a), i.add(u));
    }
    function Oy(e, t, a) {
      Dy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ka), N0(a, e, i, t);
    }
    var Ch = "_reactListening" + Math.random().toString(36).slice(2);
    function tp(e) {
      if (!e[Ch]) {
        e[Ch] = !0, ut.forEach(function(a) {
          a !== "selectionchange" && (Dy.has(a) || Oy(a, !1, e), Oy(a, !0, e));
        });
        var t = e.nodeType === $i ? e : e.ownerDocument;
        t !== null && (t[Ch] || (t[Ch] = !0, Oy("selectionchange", !1, t)));
      }
    }
    function N0(e, t, a, i, u) {
      var s = sr(e, t, a), f = void 0;
      is && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Bd(e, t, s, f) : ta(e, t, s) : f !== void 0 ? bo(e, t, s, f) : Us(e, t, s);
    }
    function M0(e, t) {
      return e === t || e.nodeType === Nn && e.parentNode === t;
    }
    function Ly(e, t, a, i, u) {
      var s = i;
      if (!(t & fd) && !(t & hc)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === Z || v === ye) {
              var y = p.stateNode.containerInfo;
              if (M0(y, f))
                break;
              if (v === ye)
                for (var g = p.return; g !== null; ) {
                  var T = g.tag;
                  if (T === Z || T === ye) {
                    var x = g.stateNode.containerInfo;
                    if (M0(x, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var M = Ys(y);
                if (M === null)
                  return;
                var A = M.tag;
                if (A === te || A === Ae) {
                  p = s = M;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      Ov(function() {
        return Mb(e, t, a, s);
      });
    }
    function np(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function zb(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var T = y, x = T.stateNode, M = T.tag;
        if (M === te && x !== null && (g = x, p !== null)) {
          var A = Rl(y, p);
          A != null && v.push(np(y, A, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function bh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === te && f !== null) {
          var v = f, y = Rl(u, a);
          y != null && i.unshift(np(u, y, v));
          var g = Rl(u, t);
          g != null && i.push(np(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function gf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== te);
      return e || null;
    }
    function Ub(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = gf(s))
        u++;
      for (var f = 0, p = i; p; p = gf(p))
        f++;
      for (; u - f > 0; )
        a = gf(a), u--;
      for (; f - u > 0; )
        i = gf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = gf(a), i = gf(i);
      }
      return null;
    }
    function z0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, T = v.tag;
        if (y !== null && y === i)
          break;
        if (T === te && g !== null) {
          var x = g;
          if (u) {
            var M = Rl(p, s);
            M != null && f.unshift(np(p, M, x));
          } else if (!u) {
            var A = Rl(p, s);
            A != null && f.push(np(p, A, x));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function Ab(e, t, a, i, u) {
      var s = i && u ? Ub(i, u) : null;
      i !== null && z0(e, t, i, s, !1), u !== null && a !== null && z0(e, a, u, s, !0);
    }
    function jb(e, t) {
      return e + "__bubble";
    }
    var ja = !1, rp = "dangerouslySetInnerHTML", xh = "suppressContentEditableWarning", _o = "suppressHydrationWarning", U0 = "autoFocus", Bs = "children", Is = "style", Rh = "__html", Ny, Th, ap, A0, kh, j0, F0;
    Ny = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Th = function(e, t) {
      od(e, t), pc(e, t), kv(e, t, {
        registrationNameDependencies: it,
        possibleRegistrationNames: ot
      });
    }, j0 = On && !document.documentMode, ap = function(e, t, a) {
      if (!ja) {
        var i = _h(a), u = _h(t);
        u !== i && (ja = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, A0 = function(e) {
      if (!ja) {
        ja = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, kh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, F0 = function(e, t) {
      var a = e.namespaceURI === Ii ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var Fb = /\r\n?/g, Hb = /\u0000|\uFFFD/g;
    function _h(e) {
      qn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(Fb, `
`).replace(Hb, "");
    }
    function Dh(e, t, a, i) {
      var u = _h(t), s = _h(e);
      if (s !== u && (i && (ja || (ja = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Ce))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function H0(e) {
      return e.nodeType === $i ? e : e.ownerDocument;
    }
    function Pb() {
    }
    function Oh(e) {
      e.onclick = Pb;
    }
    function Vb(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Is)
            f && Object.freeze(f), Ev(t, f);
          else if (s === rp) {
            var p = f ? f[Rh] : void 0;
            p != null && sv(t, p);
          } else if (s === Bs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ao(t, f);
            } else typeof f == "number" && ao(t, "" + f);
          else s === xh || s === _o || s === U0 || (it.hasOwnProperty(s) ? f != null && (typeof f != "function" && kh(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && Tr(t, s, f, u));
        }
    }
    function Bb(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Is ? Ev(e, f) : s === rp ? sv(e, f) : s === Bs ? ao(e, f) : Tr(e, s, f, i);
      }
    }
    function Ib(e, t, a, i) {
      var u, s = H0(a), f, p = i;
      if (p === Ii && (p = td(e)), p === Ii) {
        if (u = bl(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Ii && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Rr.call(Ny, e) && (Ny[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function Yb(e, t) {
      return H0(t).createTextNode(e);
    }
    function $b(e, t, a, i) {
      var u = bl(t, a);
      Th(t, a);
      var s;
      switch (t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < ep.length; f++)
            Sn(ep[f], e);
          s = a;
          break;
        case "source":
          Sn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e), s = a;
          break;
        case "details":
          Sn("toggle", e), s = a;
          break;
        case "input":
          ei(e, a), s = ro(e, a), Sn("invalid", e);
          break;
        case "option":
          kt(e, a), s = a;
          break;
        case "select":
          ou(e, a), s = Xo(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Zf(e, a), s = Kf(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (fc(t, s), Vb(t, e, i, s, u), t) {
        case "input":
          Ja(e), z(e, a, !1);
          break;
        case "textarea":
          Ja(e), uv(e);
          break;
        case "option":
          rn(e, a);
          break;
        case "select":
          qf(e, a);
          break;
        default:
          typeof s.onClick == "function" && Oh(e);
          break;
      }
    }
    function Qb(e, t, a, i, u) {
      Th(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = ro(e, a), p = ro(e, i), s = [];
          break;
        case "select":
          f = Xo(e, a), p = Xo(e, i), s = [];
          break;
        case "textarea":
          f = Kf(e, a), p = Kf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Oh(e);
          break;
      }
      fc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Is) {
            var T = f[v];
            for (y in T)
              T.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === rp || v === Bs || v === xh || v === _o || v === U0 || (it.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var x = p[v], M = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || x === M || x == null && M == null))
          if (v === Is)
            if (x && Object.freeze(x), M) {
              for (y in M)
                M.hasOwnProperty(y) && (!x || !x.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in x)
                x.hasOwnProperty(y) && M[y] !== x[y] && (g || (g = {}), g[y] = x[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = x;
          else if (v === rp) {
            var A = x ? x[Rh] : void 0, F = M ? M[Rh] : void 0;
            A != null && F !== A && (s = s || []).push(v, A);
          } else v === Bs ? (typeof x == "string" || typeof x == "number") && (s = s || []).push(v, "" + x) : v === xh || v === _o || (it.hasOwnProperty(v) ? (x != null && (typeof x != "function" && kh(v, x), v === "onScroll" && Sn("scroll", e)), !s && M !== x && (s = [])) : (s = s || []).push(v, x));
      }
      return g && (iy(g, p[Is]), (s = s || []).push(Is, g)), s;
    }
    function Wb(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = bl(a, i), f = bl(a, u);
      switch (Bb(e, t, s, f), a) {
        case "input":
          E(e, u);
          break;
        case "textarea":
          lv(e, u);
          break;
        case "select":
          oc(e, u);
          break;
      }
    }
    function Gb(e) {
      {
        var t = e.toLowerCase();
        return ts.hasOwnProperty(t) && ts[t] || null;
      }
    }
    function qb(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = bl(t, a), Th(t, a), t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < ep.length; y++)
            Sn(ep[y], e);
          break;
        case "source":
          Sn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e);
          break;
        case "details":
          Sn("toggle", e);
          break;
        case "input":
          ei(e, a), Sn("invalid", e);
          break;
        case "option":
          kt(e, a);
          break;
        case "select":
          ou(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Zf(e, a), Sn("invalid", e);
          break;
      }
      fc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, T = 0; T < g.length; T++) {
          var x = g[T].name.toLowerCase();
          switch (x) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[T].name);
          }
        }
      }
      var M = null;
      for (var A in a)
        if (a.hasOwnProperty(A)) {
          var F = a[A];
          if (A === Bs)
            typeof F == "string" ? e.textContent !== F && (a[_o] !== !0 && Dh(e.textContent, F, s, f), M = [Bs, F]) : typeof F == "number" && e.textContent !== "" + F && (a[_o] !== !0 && Dh(e.textContent, F, s, f), M = [Bs, "" + F]);
          else if (it.hasOwnProperty(A))
            F != null && (typeof F != "function" && kh(A, F), A === "onScroll" && Sn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var se = void 0, Le = tn(A);
            if (a[_o] !== !0) {
              if (!(A === xh || A === _o || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              A === "value" || A === "checked" || A === "selected")) {
                if (A === rp) {
                  var Re = e.innerHTML, xt = F ? F[Rh] : void 0;
                  if (xt != null) {
                    var St = F0(e, xt);
                    St !== Re && ap(A, Re, St);
                  }
                } else if (A === Is) {
                  if (v.delete(A), j0) {
                    var D = ry(F);
                    se = e.getAttribute("style"), D !== se && ap(A, se, D);
                  }
                } else if (p && !k)
                  v.delete(A.toLowerCase()), se = tu(e, A, F), F !== se && ap(A, se, F);
                else if (!vn(A, Le, p) && !Xn(A, F, Le, p)) {
                  var H = !1;
                  if (Le !== null)
                    v.delete(Le.attributeName), se = vl(e, A, F, Le);
                  else {
                    var O = i;
                    if (O === Ii && (O = td(t)), O === Ii)
                      v.delete(A.toLowerCase());
                    else {
                      var X = Gb(A);
                      X !== null && X !== A && (H = !0, v.delete(X)), v.delete(A);
                    }
                    se = tu(e, A, F);
                  }
                  var ve = k;
                  !ve && F !== se && !H && ap(A, se, F);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[_o] !== !0 && A0(v), t) {
        case "input":
          Ja(e), z(e, a, !0);
          break;
        case "textarea":
          Ja(e), uv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Oh(e);
          break;
      }
      return M;
    }
    function Xb(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function My(e, t) {
      {
        if (ja)
          return;
        ja = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function zy(e, t) {
      {
        if (ja)
          return;
        ja = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Uy(e, t, a) {
      {
        if (ja)
          return;
        ja = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ay(e, t) {
      {
        if (t === "" || ja)
          return;
        ja = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function Kb(e, t, a) {
      switch (t) {
        case "input":
          j(e, a);
          return;
        case "textarea":
          Jm(e, a);
          return;
        case "select":
          Xf(e, a);
          return;
      }
    }
    var ip = function() {
    }, lp = function() {
    };
    {
      var Zb = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], P0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], Jb = P0.concat(["button"]), ex = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], V0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      lp = function(e, t) {
        var a = lt({}, e || V0), i = {
          tag: t
        };
        return P0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Jb.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Zb.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var tx = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return ex.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, nx = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, B0 = {};
      ip = function(e, t, a) {
        a = a || V0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = tx(e, u) ? null : i, f = s ? null : nx(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!B0[y]) {
            B0[y] = !0;
            var g = e, T = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", T = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var x = "";
              v === "table" && e === "tr" && (x += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, T, x);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var Lh = "suppressHydrationWarning", Nh = "$", Mh = "/$", up = "$?", op = "$!", rx = "style", jy = null, Fy = null;
    function ax(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case $i:
        case rd: {
          t = i === $i ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : nd(null, "");
          break;
        }
        default: {
          var s = i === Nn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = nd(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = lp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function ix(e, t, a) {
      {
        var i = e, u = nd(i.namespace, t), s = lp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function C_(e) {
      return e;
    }
    function lx(e) {
      jy = Fn(), Fy = wb();
      var t = null;
      return Wn(!1), t;
    }
    function ux(e) {
      Eb(Fy), Wn(jy), jy = null, Fy = null;
    }
    function ox(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (ip(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = lp(f.ancestorInfo, e);
          ip(null, p, v);
        }
        s = f.namespace;
      }
      var y = Ib(e, t, a, s);
      return fp(u, y), Qy(y, t), y;
    }
    function sx(e, t) {
      e.appendChild(t);
    }
    function cx(e, t, a, i, u) {
      switch ($b(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function fx(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = lp(f.ancestorInfo, t);
          ip(null, p, v);
        }
      }
      return Qb(e, t, a, i);
    }
    function Hy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function dx(e, t, a, i) {
      {
        var u = a;
        ip(null, e, u.ancestorInfo);
      }
      var s = Yb(e, t);
      return fp(i, s), s;
    }
    function px() {
      var e = window.event;
      return e === void 0 ? Ma : af(e.type);
    }
    var Py = typeof setTimeout == "function" ? setTimeout : void 0, vx = typeof clearTimeout == "function" ? clearTimeout : void 0, Vy = -1, I0 = typeof Promise == "function" ? Promise : void 0, hx = typeof queueMicrotask == "function" ? queueMicrotask : typeof I0 < "u" ? function(e) {
      return I0.resolve(null).then(e).catch(mx);
    } : Py;
    function mx(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function yx(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function gx(e, t, a, i, u, s) {
      Wb(e, t, a, i, u), Qy(e, u);
    }
    function Y0(e) {
      ao(e, "");
    }
    function Sx(e, t, a) {
      e.nodeValue = a;
    }
    function wx(e, t) {
      e.appendChild(t);
    }
    function Ex(e, t) {
      var a;
      e.nodeType === Nn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Oh(a);
    }
    function Cx(e, t, a) {
      e.insertBefore(t, a);
    }
    function bx(e, t, a) {
      e.nodeType === Nn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function xx(e, t) {
      e.removeChild(t);
    }
    function Rx(e, t) {
      e.nodeType === Nn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function By(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Nn) {
          var s = u.data;
          if (s === Mh)
            if (i === 0) {
              e.removeChild(u), Du(t);
              return;
            } else
              i--;
          else (s === Nh || s === up || s === op) && i++;
        }
        a = u;
      } while (a);
      Du(t);
    }
    function Tx(e, t) {
      e.nodeType === Nn ? By(e.parentNode, t) : e.nodeType === Qr && By(e, t), Du(e);
    }
    function kx(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function _x(e) {
      e.nodeValue = "";
    }
    function Dx(e, t) {
      e = e;
      var a = t[rx], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = cc("display", i);
    }
    function Ox(e, t) {
      e.nodeValue = t;
    }
    function Lx(e) {
      e.nodeType === Qr ? e.textContent = "" : e.nodeType === $i && e.documentElement && e.removeChild(e.documentElement);
    }
    function Nx(e, t, a) {
      return e.nodeType !== Qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Mx(e, t) {
      return t === "" || e.nodeType !== Yi ? null : e;
    }
    function zx(e) {
      return e.nodeType !== Nn ? null : e;
    }
    function $0(e) {
      return e.data === up;
    }
    function Iy(e) {
      return e.data === op;
    }
    function Ux(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function Ax(e, t) {
      e._reactRetry = t;
    }
    function zh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Qr || t === Yi)
          break;
        if (t === Nn) {
          var a = e.data;
          if (a === Nh || a === op || a === up)
            break;
          if (a === Mh)
            return null;
        }
      }
      return e;
    }
    function sp(e) {
      return zh(e.nextSibling);
    }
    function jx(e) {
      return zh(e.firstChild);
    }
    function Fx(e) {
      return zh(e.firstChild);
    }
    function Hx(e) {
      return zh(e.nextSibling);
    }
    function Px(e, t, a, i, u, s, f) {
      fp(s, e), Qy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & ht) !== _e;
      return qb(e, t, a, p, i, y, f);
    }
    function Vx(e, t, a, i) {
      return fp(a, e), a.mode & ht, Xb(e, t);
    }
    function Bx(e, t) {
      fp(t, e);
    }
    function Ix(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Nn) {
          var i = t.data;
          if (i === Mh) {
            if (a === 0)
              return sp(t);
            a--;
          } else (i === Nh || i === op || i === up) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Q0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Nn) {
          var i = t.data;
          if (i === Nh || i === op || i === up) {
            if (a === 0)
              return t;
            a--;
          } else i === Mh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Yx(e) {
      Du(e);
    }
    function $x(e) {
      Du(e);
    }
    function Qx(e) {
      return e !== "head" && e !== "body";
    }
    function Wx(e, t, a, i) {
      var u = !0;
      Dh(t.nodeValue, a, i, u);
    }
    function Gx(e, t, a, i, u, s) {
      if (t[Lh] !== !0) {
        var f = !0;
        Dh(i.nodeValue, u, s, f);
      }
    }
    function qx(e, t) {
      t.nodeType === Qr ? My(e, t) : t.nodeType === Nn || zy(e, t);
    }
    function Xx(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Qr ? My(a, t) : t.nodeType === Nn || zy(a, t));
      }
    }
    function Kx(e, t, a, i, u) {
      (u || t[Lh] !== !0) && (i.nodeType === Qr ? My(a, i) : i.nodeType === Nn || zy(a, i));
    }
    function Zx(e, t, a) {
      Uy(e, t);
    }
    function Jx(e, t) {
      Ay(e, t);
    }
    function eR(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Uy(i, t);
      }
    }
    function tR(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ay(a, t);
      }
    }
    function nR(e, t, a, i, u, s) {
      (s || t[Lh] !== !0) && Uy(a, i);
    }
    function rR(e, t, a, i, u) {
      (u || t[Lh] !== !0) && Ay(a, i);
    }
    function aR(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function iR(e) {
      tp(e);
    }
    var Sf = Math.random().toString(36).slice(2), wf = "__reactFiber$" + Sf, Yy = "__reactProps$" + Sf, cp = "__reactContainer$" + Sf, $y = "__reactEvents$" + Sf, lR = "__reactListeners$" + Sf, uR = "__reactHandles$" + Sf;
    function oR(e) {
      delete e[wf], delete e[Yy], delete e[$y], delete e[lR], delete e[uR];
    }
    function fp(e, t) {
      t[wf] = e;
    }
    function Uh(e, t) {
      t[cp] = e;
    }
    function W0(e) {
      e[cp] = null;
    }
    function dp(e) {
      return !!e[cp];
    }
    function Ys(e) {
      var t = e[wf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[cp] || a[wf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = Q0(e); u !== null; ) {
              var s = u[wf];
              if (s)
                return s;
              u = Q0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Do(e) {
      var t = e[wf] || e[cp];
      return t && (t.tag === te || t.tag === Ae || t.tag === ce || t.tag === Z) ? t : null;
    }
    function Ef(e) {
      if (e.tag === te || e.tag === Ae)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Ah(e) {
      return e[Yy] || null;
    }
    function Qy(e, t) {
      e[Yy] = t;
    }
    function sR(e) {
      var t = e[$y];
      return t === void 0 && (t = e[$y] = /* @__PURE__ */ new Set()), t;
    }
    var G0 = {}, q0 = N.ReactDebugCurrentFrame;
    function jh(e) {
      if (e) {
        var t = e._owner, a = Pi(e.type, e._source, t ? t.type : null);
        q0.setExtraStackFrame(a);
      } else
        q0.setExtraStackFrame(null);
    }
    function nl(e, t, a, i, u) {
      {
        var s = Function.call.bind(Rr);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (jh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), jh(null)), p instanceof Error && !(p.message in G0) && (G0[p.message] = !0, jh(u), S("Failed %s type: %s", a, p.message), jh(null));
          }
      }
    }
    var Wy = [], Fh;
    Fh = [];
    var Uu = -1;
    function Oo(e) {
      return {
        current: e
      };
    }
    function ra(e, t) {
      if (Uu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Fh[Uu] && S("Unexpected Fiber popped."), e.current = Wy[Uu], Wy[Uu] = null, Fh[Uu] = null, Uu--;
    }
    function aa(e, t, a) {
      Uu++, Wy[Uu] = e.current, Fh[Uu] = a, e.current = t;
    }
    var Gy;
    Gy = {};
    var ui = {};
    Object.freeze(ui);
    var Au = Oo(ui), Il = Oo(!1), qy = ui;
    function Cf(e, t, a) {
      return a && Yl(t) ? qy : Au.current;
    }
    function X0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function bf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ui;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ye(e) || "Unknown";
          nl(i, s, "context", p);
        }
        return u && X0(e, t, s), s;
      }
    }
    function Hh() {
      return Il.current;
    }
    function Yl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Ph(e) {
      ra(Il, e), ra(Au, e);
    }
    function Xy(e) {
      ra(Il, e), ra(Au, e);
    }
    function K0(e, t, a) {
      {
        if (Au.current !== ui)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        aa(Au, t, e), aa(Il, a, e);
      }
    }
    function Z0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ye(e) || "Unknown";
            Gy[s] || (Gy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ye(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ye(e) || "Unknown";
          nl(u, f, "child context", v);
        }
        return lt({}, a, f);
      }
    }
    function Vh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ui;
        return qy = Au.current, aa(Au, a, e), aa(Il, Il.current, e), !0;
      }
    }
    function J0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = Z0(e, t, qy);
          i.__reactInternalMemoizedMergedChildContext = u, ra(Il, e), ra(Au, e), aa(Au, u, e), aa(Il, a, e);
        } else
          ra(Il, e), aa(Il, a, e);
      }
    }
    function cR(e) {
      {
        if (!hu(e) || e.tag !== ue)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case Z:
              return t.stateNode.context;
            case ue: {
              var a = t.type;
              if (Yl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Lo = 0, Bh = 1, ju = null, Ky = !1, Zy = !1;
    function ew(e) {
      ju === null ? ju = [e] : ju.push(e);
    }
    function fR(e) {
      Ky = !0, ew(e);
    }
    function tw() {
      Ky && No();
    }
    function No() {
      if (!Zy && ju !== null) {
        Zy = !0;
        var e = 0, t = Ua();
        try {
          var a = !0, i = ju;
          for (jn(Lr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          ju = null, Ky = !1;
        } catch (s) {
          throw ju !== null && (ju = ju.slice(e + 1)), hd(ss, No), s;
        } finally {
          jn(t), Zy = !1;
        }
      }
      return null;
    }
    var xf = [], Rf = 0, Ih = null, Yh = 0, Ni = [], Mi = 0, $s = null, Fu = 1, Hu = "";
    function dR(e) {
      return Ws(), (e.flags & Ci) !== ke;
    }
    function pR(e) {
      return Ws(), Yh;
    }
    function vR() {
      var e = Hu, t = Fu, a = t & ~hR(t);
      return a.toString(32) + e;
    }
    function Qs(e, t) {
      Ws(), xf[Rf++] = Yh, xf[Rf++] = Ih, Ih = e, Yh = t;
    }
    function nw(e, t, a) {
      Ws(), Ni[Mi++] = Fu, Ni[Mi++] = Hu, Ni[Mi++] = $s, $s = e;
      var i = Fu, u = Hu, s = $h(i) - 1, f = i & ~(1 << s), p = a + 1, v = $h(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, T = (f & g).toString(32), x = f >> y, M = s - y, A = $h(t) + M, F = p << M, se = F | x, Le = T + u;
        Fu = 1 << A | se, Hu = Le;
      } else {
        var Re = p << s, xt = Re | f, St = u;
        Fu = 1 << v | xt, Hu = St;
      }
    }
    function Jy(e) {
      Ws();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Qs(e, a), nw(e, a, i);
      }
    }
    function $h(e) {
      return 32 - Un(e);
    }
    function hR(e) {
      return 1 << $h(e) - 1;
    }
    function eg(e) {
      for (; e === Ih; )
        Ih = xf[--Rf], xf[Rf] = null, Yh = xf[--Rf], xf[Rf] = null;
      for (; e === $s; )
        $s = Ni[--Mi], Ni[Mi] = null, Hu = Ni[--Mi], Ni[Mi] = null, Fu = Ni[--Mi], Ni[Mi] = null;
    }
    function mR() {
      return Ws(), $s !== null ? {
        id: Fu,
        overflow: Hu
      } : null;
    }
    function yR(e, t) {
      Ws(), Ni[Mi++] = Fu, Ni[Mi++] = Hu, Ni[Mi++] = $s, Fu = t.id, Hu = t.overflow, $s = e;
    }
    function Ws() {
      Ar() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ur = null, zi = null, rl = !1, Gs = !1, Mo = null;
    function gR() {
      rl && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function rw() {
      Gs = !0;
    }
    function SR() {
      return Gs;
    }
    function wR(e) {
      var t = e.stateNode.containerInfo;
      return zi = Fx(t), Ur = e, rl = !0, Mo = null, Gs = !1, !0;
    }
    function ER(e, t, a) {
      return zi = Hx(t), Ur = e, rl = !0, Mo = null, Gs = !1, a !== null && yR(e, a), !0;
    }
    function aw(e, t) {
      switch (e.tag) {
        case Z: {
          qx(e.stateNode.containerInfo, t);
          break;
        }
        case te: {
          var a = (e.mode & ht) !== _e;
          Kx(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case ce: {
          var i = e.memoizedState;
          i.dehydrated !== null && Xx(i.dehydrated, t);
          break;
        }
      }
    }
    function iw(e, t) {
      aw(e, t);
      var a = Rk();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= _a) : i.push(a);
    }
    function tg(e, t) {
      {
        if (Gs)
          return;
        switch (e.tag) {
          case Z: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case te:
                var i = t.type;
                t.pendingProps, Zx(a, i);
                break;
              case Ae:
                var u = t.pendingProps;
                Jx(a, u);
                break;
            }
            break;
          }
          case te: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case te: {
                var v = t.type, y = t.pendingProps, g = (e.mode & ht) !== _e;
                nR(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case Ae: {
                var T = t.pendingProps, x = (e.mode & ht) !== _e;
                rR(
                  s,
                  f,
                  p,
                  T,
                  // TODO: Delete this argument when we remove the legacy root API.
                  x
                );
                break;
              }
            }
            break;
          }
          case ce: {
            var M = e.memoizedState, A = M.dehydrated;
            if (A !== null) switch (t.tag) {
              case te:
                var F = t.type;
                t.pendingProps, eR(A, F);
                break;
              case Ae:
                var se = t.pendingProps;
                tR(A, se);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function lw(e, t) {
      t.flags = t.flags & ~Gr | mn, tg(e, t);
    }
    function uw(e, t) {
      switch (e.tag) {
        case te: {
          var a = e.type;
          e.pendingProps;
          var i = Nx(t, a);
          return i !== null ? (e.stateNode = i, Ur = e, zi = jx(i), !0) : !1;
        }
        case Ae: {
          var u = e.pendingProps, s = Mx(t, u);
          return s !== null ? (e.stateNode = s, Ur = e, zi = null, !0) : !1;
        }
        case ce: {
          var f = zx(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: mR(),
              retryLane: Zr
            };
            e.memoizedState = p;
            var v = Tk(f);
            return v.return = e, e.child = v, Ur = e, zi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function ng(e) {
      return (e.mode & ht) !== _e && (e.flags & Te) === ke;
    }
    function rg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function ag(e) {
      if (rl) {
        var t = zi;
        if (!t) {
          ng(e) && (tg(Ur, e), rg()), lw(Ur, e), rl = !1, Ur = e;
          return;
        }
        var a = t;
        if (!uw(e, t)) {
          ng(e) && (tg(Ur, e), rg()), t = sp(a);
          var i = Ur;
          if (!t || !uw(e, t)) {
            lw(Ur, e), rl = !1, Ur = e;
            return;
          }
          iw(i, a);
        }
      }
    }
    function CR(e, t, a) {
      var i = e.stateNode, u = !Gs, s = Px(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function bR(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Vx(t, a, e);
      if (i) {
        var u = Ur;
        if (u !== null)
          switch (u.tag) {
            case Z: {
              var s = u.stateNode.containerInfo, f = (u.mode & ht) !== _e;
              Wx(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case te: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & ht) !== _e;
              Gx(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function xR(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Bx(a, e);
    }
    function RR(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Ix(a);
    }
    function ow(e) {
      for (var t = e.return; t !== null && t.tag !== te && t.tag !== Z && t.tag !== ce; )
        t = t.return;
      Ur = t;
    }
    function Qh(e) {
      if (e !== Ur)
        return !1;
      if (!rl)
        return ow(e), rl = !0, !1;
      if (e.tag !== Z && (e.tag !== te || Qx(e.type) && !Hy(e.type, e.memoizedProps))) {
        var t = zi;
        if (t)
          if (ng(e))
            sw(e), rg();
          else
            for (; t; )
              iw(e, t), t = sp(t);
      }
      return ow(e), e.tag === ce ? zi = RR(e) : zi = Ur ? sp(e.stateNode) : null, !0;
    }
    function TR() {
      return rl && zi !== null;
    }
    function sw(e) {
      for (var t = zi; t; )
        aw(e, t), t = sp(t);
    }
    function Tf() {
      Ur = null, zi = null, rl = !1, Gs = !1;
    }
    function cw() {
      Mo !== null && (rC(Mo), Mo = null);
    }
    function Ar() {
      return rl;
    }
    function ig(e) {
      Mo === null ? Mo = [e] : Mo.push(e);
    }
    var kR = N.ReactCurrentBatchConfig, _R = null;
    function DR() {
      return kR.transition;
    }
    var al = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var OR = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & qt && (t = a), a = a.return;
        return t;
      }, qs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, pp = [], vp = [], hp = [], mp = [], yp = [], gp = [], Xs = /* @__PURE__ */ new Set();
      al.recordUnsafeLifecycleWarnings = function(e, t) {
        Xs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & qt && typeof t.UNSAFE_componentWillMount == "function" && vp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & qt && typeof t.UNSAFE_componentWillReceiveProps == "function" && mp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && yp.push(e), e.mode & qt && typeof t.UNSAFE_componentWillUpdate == "function" && gp.push(e));
      }, al.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(x) {
          e.add(Ye(x) || "Component"), Xs.add(x.type);
        }), pp = []);
        var t = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(x) {
          t.add(Ye(x) || "Component"), Xs.add(x.type);
        }), vp = []);
        var a = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(x) {
          a.add(Ye(x) || "Component"), Xs.add(x.type);
        }), hp = []);
        var i = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(x) {
          i.add(Ye(x) || "Component"), Xs.add(x.type);
        }), mp = []);
        var u = /* @__PURE__ */ new Set();
        yp.length > 0 && (yp.forEach(function(x) {
          u.add(Ye(x) || "Component"), Xs.add(x.type);
        }), yp = []);
        var s = /* @__PURE__ */ new Set();
        if (gp.length > 0 && (gp.forEach(function(x) {
          s.add(Ye(x) || "Component"), Xs.add(x.type);
        }), gp = []), t.size > 0) {
          var f = qs(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = qs(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = qs(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = qs(e);
          Ze(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = qs(a);
          Ze(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var T = qs(u);
          Ze(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
      };
      var Wh = /* @__PURE__ */ new Map(), fw = /* @__PURE__ */ new Set();
      al.recordLegacyContextWarning = function(e, t) {
        var a = OR(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!fw.has(e.type)) {
          var i = Wh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Wh.set(a, i)), i.push(e));
        }
      }, al.flushLegacyContextWarning = function() {
        Wh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ye(s) || "Component"), fw.add(s.type);
            });
            var u = qs(i);
            try {
              Qt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              cn();
            }
          }
        });
      }, al.discardPendingWarnings = function() {
        pp = [], vp = [], hp = [], mp = [], yp = [], gp = [], Wh = /* @__PURE__ */ new Map();
      };
    }
    var lg, ug, og, sg, cg, dw = function(e, t) {
    };
    lg = !1, ug = !1, og = {}, sg = {}, cg = {}, dw = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ye(t) || "Component";
        sg[a] || (sg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function LR(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Sp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & qt || P) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== ue) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !LR(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ye(e) || "Component";
          og[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), og[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== ue)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          ci(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(T) {
            var x = v.refs;
            T === null ? delete x[y] : x[y] = T;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Gh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function qh(e) {
      {
        var t = Ye(e) || "Component";
        if (cg[t])
          return;
        cg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function pw(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function vw(e) {
      function t(D, H) {
        if (e) {
          var O = D.deletions;
          O === null ? (D.deletions = [H], D.flags |= _a) : O.push(H);
        }
      }
      function a(D, H) {
        if (!e)
          return null;
        for (var O = H; O !== null; )
          t(D, O), O = O.sibling;
        return null;
      }
      function i(D, H) {
        for (var O = /* @__PURE__ */ new Map(), X = H; X !== null; )
          X.key !== null ? O.set(X.key, X) : O.set(X.index, X), X = X.sibling;
        return O;
      }
      function u(D, H) {
        var O = ic(D, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(D, H, O) {
        if (D.index = O, !e)
          return D.flags |= Ci, H;
        var X = D.alternate;
        if (X !== null) {
          var ve = X.index;
          return ve < H ? (D.flags |= mn, H) : ve;
        } else
          return D.flags |= mn, H;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= mn), D;
      }
      function p(D, H, O, X) {
        if (H === null || H.tag !== Ae) {
          var ve = i0(O, D.mode, X);
          return ve.return = D, ve;
        } else {
          var fe = u(H, O);
          return fe.return = D, fe;
        }
      }
      function v(D, H, O, X) {
        var ve = O.type;
        if (ve === di)
          return g(D, H, O.props.children, X, O.key);
        if (H !== null && (H.elementType === ve || // Keep this check inline so it only runs on the false path:
        SC(H, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ve == "object" && ve !== null && ve.$$typeof === $e && pw(ve) === H.type)) {
          var fe = u(H, O.props);
          return fe.ref = Sp(D, H, O), fe.return = D, fe._debugSource = O._source, fe._debugOwner = O._owner, fe;
        }
        var Be = a0(O, D.mode, X);
        return Be.ref = Sp(D, H, O), Be.return = D, Be;
      }
      function y(D, H, O, X) {
        if (H === null || H.tag !== ye || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var ve = l0(O, D.mode, X);
          return ve.return = D, ve;
        } else {
          var fe = u(H, O.children || []);
          return fe.return = D, fe;
        }
      }
      function g(D, H, O, X, ve) {
        if (H === null || H.tag !== je) {
          var fe = Yo(O, D.mode, X, ve);
          return fe.return = D, fe;
        } else {
          var Be = u(H, O);
          return Be.return = D, Be;
        }
      }
      function T(D, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var X = i0("" + H, D.mode, O);
          return X.return = D, X;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case kr: {
              var ve = a0(H, D.mode, O);
              return ve.ref = Sp(D, null, H), ve.return = D, ve;
            }
            case rr: {
              var fe = l0(H, D.mode, O);
              return fe.return = D, fe;
            }
            case $e: {
              var Be = H._payload, qe = H._init;
              return T(D, qe(Be), O);
            }
          }
          if (ct(H) || nt(H)) {
            var Kt = Yo(H, D.mode, O, null);
            return Kt.return = D, Kt;
          }
          Gh(D, H);
        }
        return typeof H == "function" && qh(D), null;
      }
      function x(D, H, O, X) {
        var ve = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return ve !== null ? null : p(D, H, "" + O, X);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case kr:
              return O.key === ve ? v(D, H, O, X) : null;
            case rr:
              return O.key === ve ? y(D, H, O, X) : null;
            case $e: {
              var fe = O._payload, Be = O._init;
              return x(D, H, Be(fe), X);
            }
          }
          if (ct(O) || nt(O))
            return ve !== null ? null : g(D, H, O, X, null);
          Gh(D, O);
        }
        return typeof O == "function" && qh(D), null;
      }
      function M(D, H, O, X, ve) {
        if (typeof X == "string" && X !== "" || typeof X == "number") {
          var fe = D.get(O) || null;
          return p(H, fe, "" + X, ve);
        }
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case kr: {
              var Be = D.get(X.key === null ? O : X.key) || null;
              return v(H, Be, X, ve);
            }
            case rr: {
              var qe = D.get(X.key === null ? O : X.key) || null;
              return y(H, qe, X, ve);
            }
            case $e:
              var Kt = X._payload, At = X._init;
              return M(D, H, O, At(Kt), ve);
          }
          if (ct(X) || nt(X)) {
            var Gn = D.get(O) || null;
            return g(H, Gn, X, ve, null);
          }
          Gh(H, X);
        }
        return typeof X == "function" && qh(H), null;
      }
      function A(D, H, O) {
        {
          if (typeof D != "object" || D === null)
            return H;
          switch (D.$$typeof) {
            case kr:
            case rr:
              dw(D, O);
              var X = D.key;
              if (typeof X != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(X);
                break;
              }
              if (!H.has(X)) {
                H.add(X);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", X);
              break;
            case $e:
              var ve = D._payload, fe = D._init;
              A(fe(ve), H, O);
              break;
          }
        }
        return H;
      }
      function F(D, H, O, X) {
        for (var ve = null, fe = 0; fe < O.length; fe++) {
          var Be = O[fe];
          ve = A(Be, ve, D);
        }
        for (var qe = null, Kt = null, At = H, Gn = 0, jt = 0, Pn = null; At !== null && jt < O.length; jt++) {
          At.index > jt ? (Pn = At, At = null) : Pn = At.sibling;
          var la = x(D, At, O[jt], X);
          if (la === null) {
            At === null && (At = Pn);
            break;
          }
          e && At && la.alternate === null && t(D, At), Gn = s(la, Gn, jt), Kt === null ? qe = la : Kt.sibling = la, Kt = la, At = Pn;
        }
        if (jt === O.length) {
          if (a(D, At), Ar()) {
            var Ir = jt;
            Qs(D, Ir);
          }
          return qe;
        }
        if (At === null) {
          for (; jt < O.length; jt++) {
            var si = T(D, O[jt], X);
            si !== null && (Gn = s(si, Gn, jt), Kt === null ? qe = si : Kt.sibling = si, Kt = si);
          }
          if (Ar()) {
            var Ea = jt;
            Qs(D, Ea);
          }
          return qe;
        }
        for (var Ca = i(D, At); jt < O.length; jt++) {
          var ua = M(Ca, D, jt, O[jt], X);
          ua !== null && (e && ua.alternate !== null && Ca.delete(ua.key === null ? jt : ua.key), Gn = s(ua, Gn, jt), Kt === null ? qe = ua : Kt.sibling = ua, Kt = ua);
        }
        if (e && Ca.forEach(function($f) {
          return t(D, $f);
        }), Ar()) {
          var Qu = jt;
          Qs(D, Qu);
        }
        return qe;
      }
      function se(D, H, O, X) {
        var ve = nt(O);
        if (typeof ve != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (ug || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ug = !0), O.entries === ve && (lg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), lg = !0);
          var fe = ve.call(O);
          if (fe)
            for (var Be = null, qe = fe.next(); !qe.done; qe = fe.next()) {
              var Kt = qe.value;
              Be = A(Kt, Be, D);
            }
        }
        var At = ve.call(O);
        if (At == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Gn = null, jt = null, Pn = H, la = 0, Ir = 0, si = null, Ea = At.next(); Pn !== null && !Ea.done; Ir++, Ea = At.next()) {
          Pn.index > Ir ? (si = Pn, Pn = null) : si = Pn.sibling;
          var Ca = x(D, Pn, Ea.value, X);
          if (Ca === null) {
            Pn === null && (Pn = si);
            break;
          }
          e && Pn && Ca.alternate === null && t(D, Pn), la = s(Ca, la, Ir), jt === null ? Gn = Ca : jt.sibling = Ca, jt = Ca, Pn = si;
        }
        if (Ea.done) {
          if (a(D, Pn), Ar()) {
            var ua = Ir;
            Qs(D, ua);
          }
          return Gn;
        }
        if (Pn === null) {
          for (; !Ea.done; Ir++, Ea = At.next()) {
            var Qu = T(D, Ea.value, X);
            Qu !== null && (la = s(Qu, la, Ir), jt === null ? Gn = Qu : jt.sibling = Qu, jt = Qu);
          }
          if (Ar()) {
            var $f = Ir;
            Qs(D, $f);
          }
          return Gn;
        }
        for (var Kp = i(D, Pn); !Ea.done; Ir++, Ea = At.next()) {
          var Zl = M(Kp, D, Ir, Ea.value, X);
          Zl !== null && (e && Zl.alternate !== null && Kp.delete(Zl.key === null ? Ir : Zl.key), la = s(Zl, la, Ir), jt === null ? Gn = Zl : jt.sibling = Zl, jt = Zl);
        }
        if (e && Kp.forEach(function(r_) {
          return t(D, r_);
        }), Ar()) {
          var n_ = Ir;
          Qs(D, n_);
        }
        return Gn;
      }
      function Le(D, H, O, X) {
        if (H !== null && H.tag === Ae) {
          a(D, H.sibling);
          var ve = u(H, O);
          return ve.return = D, ve;
        }
        a(D, H);
        var fe = i0(O, D.mode, X);
        return fe.return = D, fe;
      }
      function Re(D, H, O, X) {
        for (var ve = O.key, fe = H; fe !== null; ) {
          if (fe.key === ve) {
            var Be = O.type;
            if (Be === di) {
              if (fe.tag === je) {
                a(D, fe.sibling);
                var qe = u(fe, O.props.children);
                return qe.return = D, qe._debugSource = O._source, qe._debugOwner = O._owner, qe;
              }
            } else if (fe.elementType === Be || // Keep this check inline so it only runs on the false path:
            SC(fe, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Be == "object" && Be !== null && Be.$$typeof === $e && pw(Be) === fe.type) {
              a(D, fe.sibling);
              var Kt = u(fe, O.props);
              return Kt.ref = Sp(D, fe, O), Kt.return = D, Kt._debugSource = O._source, Kt._debugOwner = O._owner, Kt;
            }
            a(D, fe);
            break;
          } else
            t(D, fe);
          fe = fe.sibling;
        }
        if (O.type === di) {
          var At = Yo(O.props.children, D.mode, X, O.key);
          return At.return = D, At;
        } else {
          var Gn = a0(O, D.mode, X);
          return Gn.ref = Sp(D, H, O), Gn.return = D, Gn;
        }
      }
      function xt(D, H, O, X) {
        for (var ve = O.key, fe = H; fe !== null; ) {
          if (fe.key === ve)
            if (fe.tag === ye && fe.stateNode.containerInfo === O.containerInfo && fe.stateNode.implementation === O.implementation) {
              a(D, fe.sibling);
              var Be = u(fe, O.children || []);
              return Be.return = D, Be;
            } else {
              a(D, fe);
              break;
            }
          else
            t(D, fe);
          fe = fe.sibling;
        }
        var qe = l0(O, D.mode, X);
        return qe.return = D, qe;
      }
      function St(D, H, O, X) {
        var ve = typeof O == "object" && O !== null && O.type === di && O.key === null;
        if (ve && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case kr:
              return f(Re(D, H, O, X));
            case rr:
              return f(xt(D, H, O, X));
            case $e:
              var fe = O._payload, Be = O._init;
              return St(D, H, Be(fe), X);
          }
          if (ct(O))
            return F(D, H, O, X);
          if (nt(O))
            return se(D, H, O, X);
          Gh(D, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Le(D, H, "" + O, X)) : (typeof O == "function" && qh(D), a(D, H));
      }
      return St;
    }
    var kf = vw(!0), hw = vw(!1);
    function NR(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ic(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ic(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function MR(e, t) {
      for (var a = e.child; a !== null; )
        wk(a, t), a = a.sibling;
    }
    var fg = Oo(null), dg;
    dg = {};
    var Xh = null, _f = null, pg = null, Kh = !1;
    function Zh() {
      Xh = null, _f = null, pg = null, Kh = !1;
    }
    function mw() {
      Kh = !0;
    }
    function yw() {
      Kh = !1;
    }
    function gw(e, t, a) {
      aa(fg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== dg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = dg;
    }
    function vg(e, t) {
      var a = fg.current;
      ra(fg, t), e._currentValue = a;
    }
    function hg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (_u(i.childLanes, t) ? u !== null && !_u(u.childLanes, t) && (u.childLanes = at(u.childLanes, t)) : (i.childLanes = at(i.childLanes, t), u !== null && (u.childLanes = at(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function zR(e, t, a) {
      UR(e, t, a);
    }
    function UR(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ue) {
                var p = bs(a), v = Pu(Zt, p);
                v.tag = em;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, T = g.pending;
                  T === null ? v.next = v : (v.next = T.next, T.next = v), g.pending = v;
                }
              }
              i.lanes = at(i.lanes, a);
              var x = i.alternate;
              x !== null && (x.lanes = at(x.lanes, a)), hg(i.return, a, e), s.lanes = at(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === rt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Jt) {
          var M = i.return;
          if (M === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          M.lanes = at(M.lanes, a);
          var A = M.alternate;
          A !== null && (A.lanes = at(A.lanes, a)), hg(M, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var F = u.sibling;
            if (F !== null) {
              F.return = u.return, u = F;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Df(e, t) {
      Xh = e, _f = null, pg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Jr(a.lanes, t) && zp(), a.firstContext = null);
      }
    }
    function tr(e) {
      Kh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (pg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (_f === null) {
          if (Xh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          _f = a, Xh.dependencies = {
            lanes: Y,
            firstContext: a
          };
        } else
          _f = _f.next = a;
      }
      return t;
    }
    var Ks = null;
    function mg(e) {
      Ks === null ? Ks = [e] : Ks.push(e);
    }
    function AR() {
      if (Ks !== null) {
        for (var e = 0; e < Ks.length; e++) {
          var t = Ks[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Ks = null;
      }
    }
    function Sw(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, mg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Jh(e, i);
    }
    function jR(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, mg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function FR(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, mg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Jh(e, i);
    }
    function Fa(e, t) {
      return Jh(e, t);
    }
    var HR = Jh;
    function Jh(e, t) {
      e.lanes = at(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = at(a.lanes, t)), a === null && (e.flags & (mn | Gr)) !== ke && hC(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = at(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = at(a.childLanes, t) : (u.flags & (mn | Gr)) !== ke && hC(e), i = u, u = u.return;
      if (i.tag === Z) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var ww = 0, Ew = 1, em = 2, yg = 3, tm = !1, gg, nm;
    gg = !1, nm = null;
    function Sg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: Y
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function Cw(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Pu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: ww,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function zo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (nm === u && !gg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), gg = !0), j1()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, HR(e, a);
      } else
        return FR(e, u, t, a);
    }
    function rm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Nd(a)) {
          var s = u.lanes;
          s = zd(s, e.pendingLanes);
          var f = at(s, a);
          u.lanes = f, ef(e, f);
        }
      }
    }
    function wg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function PR(e, t, a, i, u, s) {
      switch (a.tag) {
        case Ew: {
          var f = a.payload;
          if (typeof f == "function") {
            mw();
            var p = f.call(s, i, u);
            {
              if (e.mode & qt) {
                yn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  yn(!1);
                }
              }
              yw();
            }
            return p;
          }
          return f;
        }
        case yg:
          e.flags = e.flags & ~Kn | Te;
        case ww: {
          var v = a.payload, y;
          if (typeof v == "function") {
            mw(), y = v.call(s, i, u);
            {
              if (e.mode & qt) {
                yn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  yn(!1);
                }
              }
              yw();
            }
          } else
            y = v;
          return y == null ? i : lt({}, i, y);
        }
        case em:
          return tm = !0, i;
      }
      return i;
    }
    function am(e, t, a, i) {
      var u = e.updateQueue;
      tm = !1, nm = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var T = g.updateQueue, x = T.lastBaseUpdate;
          x !== f && (x === null ? T.firstBaseUpdate = y : x.next = y, T.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var M = u.baseState, A = Y, F = null, se = null, Le = null, Re = s;
        do {
          var xt = Re.lane, St = Re.eventTime;
          if (_u(i, xt)) {
            if (Le !== null) {
              var H = {
                eventTime: St,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ot,
                tag: Re.tag,
                payload: Re.payload,
                callback: Re.callback,
                next: null
              };
              Le = Le.next = H;
            }
            M = PR(e, u, Re, M, t, a);
            var O = Re.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            Re.lane !== Ot) {
              e.flags |= an;
              var X = u.effects;
              X === null ? u.effects = [Re] : X.push(Re);
            }
          } else {
            var D = {
              eventTime: St,
              lane: xt,
              tag: Re.tag,
              payload: Re.payload,
              callback: Re.callback,
              next: null
            };
            Le === null ? (se = Le = D, F = M) : Le = Le.next = D, A = at(A, xt);
          }
          if (Re = Re.next, Re === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ve = p, fe = ve.next;
            ve.next = null, Re = fe, u.lastBaseUpdate = ve, u.shared.pending = null;
          }
        } while (!0);
        Le === null && (F = M), u.baseState = F, u.firstBaseUpdate = se, u.lastBaseUpdate = Le;
        var Be = u.shared.interleaved;
        if (Be !== null) {
          var qe = Be;
          do
            A = at(A, qe.lane), qe = qe.next;
          while (qe !== Be);
        } else s === null && (u.shared.lanes = Y);
        Qp(A), e.lanes = A, e.memoizedState = M;
      }
      nm = null;
    }
    function VR(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function bw() {
      tm = !1;
    }
    function im() {
      return tm;
    }
    function xw(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, VR(f, a));
        }
    }
    var wp = {}, Uo = Oo(wp), Ep = Oo(wp), lm = Oo(wp);
    function um(e) {
      if (e === wp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function Rw() {
      var e = um(lm.current);
      return e;
    }
    function Eg(e, t) {
      aa(lm, t, e), aa(Ep, e, e), aa(Uo, wp, e);
      var a = ax(t);
      ra(Uo, e), aa(Uo, a, e);
    }
    function Of(e) {
      ra(Uo, e), ra(Ep, e), ra(lm, e);
    }
    function Cg() {
      var e = um(Uo.current);
      return e;
    }
    function Tw(e) {
      um(lm.current);
      var t = um(Uo.current), a = ix(t, e.type);
      t !== a && (aa(Ep, e, e), aa(Uo, a, e));
    }
    function bg(e) {
      Ep.current === e && (ra(Uo, e), ra(Ep, e));
    }
    var BR = 0, kw = 1, _w = 1, Cp = 2, il = Oo(BR);
    function xg(e, t) {
      return (e & t) !== 0;
    }
    function Lf(e) {
      return e & kw;
    }
    function Rg(e, t) {
      return e & kw | t;
    }
    function IR(e, t) {
      return e | t;
    }
    function Ao(e, t) {
      aa(il, t, e);
    }
    function Nf(e) {
      ra(il, e);
    }
    function YR(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function om(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ce) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || $0(i) || Iy(i))
              return t;
          }
        } else if (t.tag === un && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Te) !== ke;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ha = (
      /*   */
      0
    ), cr = (
      /* */
      1
    ), $l = (
      /*  */
      2
    ), fr = (
      /*    */
      4
    ), jr = (
      /*   */
      8
    ), Tg = [];
    function kg() {
      for (var e = 0; e < Tg.length; e++) {
        var t = Tg[e];
        t._workInProgressVersionPrimary = null;
      }
      Tg.length = 0;
    }
    function $R(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var pe = N.ReactCurrentDispatcher, bp = N.ReactCurrentBatchConfig, _g, Mf;
    _g = /* @__PURE__ */ new Set();
    var Zs = Y, Xt = null, dr = null, pr = null, sm = !1, xp = !1, Rp = 0, QR = 0, WR = 25, V = null, Ui = null, jo = -1, Dg = !1;
    function Bt() {
      {
        var e = V;
        Ui === null ? Ui = [e] : Ui.push(e);
      }
    }
    function ne() {
      {
        var e = V;
        Ui !== null && (jo++, Ui[jo] !== e && GR(e));
      }
    }
    function zf(e) {
      e != null && !ct(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", V, typeof e);
    }
    function GR(e) {
      {
        var t = Ye(Xt);
        if (!_g.has(t) && (_g.add(t), Ui !== null)) {
          for (var a = "", i = 30, u = 0; u <= jo; u++) {
            for (var s = Ui[u], f = u === jo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ia() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Og(e, t) {
      if (Dg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", V), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, V, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!G(e[a], t[a]))
          return !1;
      return !0;
    }
    function Uf(e, t, a, i, u, s) {
      Zs = s, Xt = t, Ui = e !== null ? e._debugHookTypes : null, jo = -1, Dg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Y, e !== null && e.memoizedState !== null ? pe.current = Xw : Ui !== null ? pe.current = qw : pe.current = Gw;
      var f = a(i, u);
      if (xp) {
        var p = 0;
        do {
          if (xp = !1, Rp = 0, p >= WR)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Dg = !1, dr = null, pr = null, t.updateQueue = null, jo = -1, pe.current = Kw, f = a(i, u);
        } while (xp);
      }
      pe.current = Cm, t._debugHookTypes = Ui;
      var v = dr !== null && dr.next !== null;
      if (Zs = Y, Xt = null, dr = null, pr = null, V = null, Ui = null, jo = -1, e !== null && (e.flags & zn) !== (t.flags & zn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ht) !== _e && S("Internal React error: Expected static flag was missing. Please notify the React team."), sm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Af() {
      var e = Rp !== 0;
      return Rp = 0, e;
    }
    function Dw(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & zt) !== _e ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = xs(e.lanes, a);
    }
    function Ow() {
      if (pe.current = Cm, sm) {
        for (var e = Xt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        sm = !1;
      }
      Zs = Y, Xt = null, dr = null, pr = null, Ui = null, jo = -1, V = null, Iw = !1, xp = !1, Rp = 0;
    }
    function Ql() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return pr === null ? Xt.memoizedState = pr = e : pr = pr.next = e, pr;
    }
    function Ai() {
      var e;
      if (dr === null) {
        var t = Xt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = dr.next;
      var a;
      if (pr === null ? a = Xt.memoizedState : a = pr.next, a !== null)
        pr = a, a = pr.next, dr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        dr = e;
        var i = {
          memoizedState: dr.memoizedState,
          baseState: dr.baseState,
          baseQueue: dr.baseQueue,
          queue: dr.queue,
          next: null
        };
        pr === null ? Xt.memoizedState = pr = i : pr = pr.next = i;
      }
      return pr;
    }
    function Lw() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Lg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Ng(e, t, a) {
      var i = Ql(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = ZR.bind(null, Xt, s);
      return [i.memoizedState, f];
    }
    function Mg(e, t, a) {
      var i = Ai(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = dr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, T = s.baseState, x = null, M = null, A = null, F = g;
        do {
          var se = F.lane;
          if (_u(Zs, se)) {
            if (A !== null) {
              var Re = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ot,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null
              };
              A = A.next = Re;
            }
            if (F.hasEagerState)
              T = F.eagerState;
            else {
              var xt = F.action;
              T = e(T, xt);
            }
          } else {
            var Le = {
              lane: se,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            };
            A === null ? (M = A = Le, x = T) : A = A.next = Le, Xt.lanes = at(Xt.lanes, se), Qp(se);
          }
          F = F.next;
        } while (F !== null && F !== g);
        A === null ? x = T : A.next = M, G(T, i.memoizedState) || zp(), i.memoizedState = T, i.baseState = x, i.baseQueue = A, u.lastRenderedState = T;
      }
      var St = u.interleaved;
      if (St !== null) {
        var D = St;
        do {
          var H = D.lane;
          Xt.lanes = at(Xt.lanes, H), Qp(H), D = D.next;
        } while (D !== St);
      } else f === null && (u.lanes = Y);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function zg(e, t, a) {
      var i = Ai(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        G(p, i.memoizedState) || zp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function b_(e, t, a) {
    }
    function x_(e, t, a) {
    }
    function Ug(e, t, a) {
      var i = Xt, u = Ql(), s, f = Ar();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Mf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Mf = !0);
      } else {
        if (s = t(), !Mf) {
          var p = t();
          G(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Mf = !0);
        }
        var v = Vm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Zc(v, Zs) || Nw(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, vm(zw.bind(null, i, y, e), [e]), i.flags |= Wr, Tp(cr | jr, Mw.bind(null, i, y, s, t), void 0, null), s;
    }
    function cm(e, t, a) {
      var i = Xt, u = Ai(), s = t();
      if (!Mf) {
        var f = t();
        G(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Mf = !0);
      }
      var p = u.memoizedState, v = !G(p, s);
      v && (u.memoizedState = s, zp());
      var y = u.queue;
      if (_p(zw.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      pr !== null && pr.memoizedState.tag & cr) {
        i.flags |= Wr, Tp(cr | jr, Mw.bind(null, i, y, s, t), void 0, null);
        var g = Vm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Zc(g, Zs) || Nw(i, t, s);
      }
      return s;
    }
    function Nw(e, t, a) {
      e.flags |= vo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Xt.updateQueue;
      if (u === null)
        u = Lw(), Xt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function Mw(e, t, a, i) {
      t.value = a, t.getSnapshot = i, Uw(t) && Aw(e);
    }
    function zw(e, t, a) {
      var i = function() {
        Uw(t) && Aw(e);
      };
      return a(i);
    }
    function Uw(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !G(a, i);
      } catch {
        return !0;
      }
    }
    function Aw(e) {
      var t = Fa(e, Fe);
      t !== null && yr(t, e, Fe, Zt);
    }
    function fm(e) {
      var t = Ql();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: Lg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = JR.bind(null, Xt, a);
      return [t.memoizedState, i];
    }
    function Ag(e) {
      return Mg(Lg);
    }
    function jg(e) {
      return zg(Lg);
    }
    function Tp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Xt.updateQueue;
      if (s === null)
        s = Lw(), Xt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Fg(e) {
      var t = Ql();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function dm(e) {
      var t = Ai();
      return t.memoizedState;
    }
    function kp(e, t, a, i) {
      var u = Ql(), s = i === void 0 ? null : i;
      Xt.flags |= e, u.memoizedState = Tp(cr | t, a, void 0, s);
    }
    function pm(e, t, a, i) {
      var u = Ai(), s = i === void 0 ? null : i, f = void 0;
      if (dr !== null) {
        var p = dr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Og(s, v)) {
            u.memoizedState = Tp(t, a, f, s);
            return;
          }
        }
      }
      Xt.flags |= e, u.memoizedState = Tp(cr | t, a, f, s);
    }
    function vm(e, t) {
      return (Xt.mode & zt) !== _e ? kp(bi | Wr | Rc, jr, e, t) : kp(Wr | Rc, jr, e, t);
    }
    function _p(e, t) {
      return pm(Wr, jr, e, t);
    }
    function Hg(e, t) {
      return kp(Et, $l, e, t);
    }
    function hm(e, t) {
      return pm(Et, $l, e, t);
    }
    function Pg(e, t) {
      var a = Et;
      return a |= Wi, (Xt.mode & zt) !== _e && (a |= kl), kp(a, fr, e, t);
    }
    function mm(e, t) {
      return pm(Et, fr, e, t);
    }
    function jw(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Vg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Et;
      return u |= Wi, (Xt.mode & zt) !== _e && (u |= kl), kp(u, fr, jw.bind(null, t, e), i);
    }
    function ym(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return pm(Et, fr, jw.bind(null, t, e), i);
    }
    function qR(e, t) {
    }
    var gm = qR;
    function Bg(e, t) {
      var a = Ql(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Sm(e, t) {
      var a = Ai(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Og(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Ig(e, t) {
      var a = Ql(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function wm(e, t) {
      var a = Ai(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Og(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Yg(e) {
      var t = Ql();
      return t.memoizedState = e, e;
    }
    function Fw(e) {
      var t = Ai(), a = dr, i = a.memoizedState;
      return Pw(t, i, e);
    }
    function Hw(e) {
      var t = Ai();
      if (dr === null)
        return t.memoizedState = e, e;
      var a = dr.memoizedState;
      return Pw(t, a, e);
    }
    function Pw(e, t, a) {
      var i = !Od(Zs);
      if (i) {
        if (!G(a, t)) {
          var u = Md();
          Xt.lanes = at(Xt.lanes, u), Qp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, zp()), e.memoizedState = a, a;
    }
    function XR(e, t, a) {
      var i = Ua();
      jn(Kv(i, ki)), e(!0);
      var u = bp.transition;
      bp.transition = {};
      var s = bp.transition;
      bp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (jn(i), bp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Ze("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function $g() {
      var e = fm(!1), t = e[0], a = e[1], i = XR.bind(null, a), u = Ql();
      return u.memoizedState = i, [t, i];
    }
    function Vw() {
      var e = Ag(), t = e[0], a = Ai(), i = a.memoizedState;
      return [t, i];
    }
    function Bw() {
      var e = jg(), t = e[0], a = Ai(), i = a.memoizedState;
      return [t, i];
    }
    var Iw = !1;
    function KR() {
      return Iw;
    }
    function Qg() {
      var e = Ql(), t = Vm(), a = t.identifierPrefix, i;
      if (Ar()) {
        var u = vR();
        i = ":" + a + "R" + u;
        var s = Rp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = QR++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Em() {
      var e = Ai(), t = e.memoizedState;
      return t;
    }
    function ZR(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Yw(e))
        $w(t, u);
      else {
        var s = Sw(e, t, u, i);
        if (s !== null) {
          var f = wa();
          yr(s, e, i, f), Qw(s, t, i);
        }
      }
      Ww(e, i);
    }
    function JR(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Yw(e))
        $w(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === Y && (s === null || s.lanes === Y)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = pe.current, pe.current = ll;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, G(y, v)) {
                jR(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              pe.current = p;
            }
          }
        }
        var g = Sw(e, t, u, i);
        if (g !== null) {
          var T = wa();
          yr(g, e, i, T), Qw(g, t, i);
        }
      }
      Ww(e, i);
    }
    function Yw(e) {
      var t = e.alternate;
      return e === Xt || t !== null && t === Xt;
    }
    function $w(e, t) {
      xp = sm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function Qw(e, t, a) {
      if (Nd(a)) {
        var i = t.lanes;
        i = zd(i, e.pendingLanes);
        var u = at(i, a);
        t.lanes = u, ef(e, u);
      }
    }
    function Ww(e, t, a) {
      vs(e, t);
    }
    var Cm = {
      readContext: tr,
      useCallback: ia,
      useContext: ia,
      useEffect: ia,
      useImperativeHandle: ia,
      useInsertionEffect: ia,
      useLayoutEffect: ia,
      useMemo: ia,
      useReducer: ia,
      useRef: ia,
      useState: ia,
      useDebugValue: ia,
      useDeferredValue: ia,
      useTransition: ia,
      useMutableSource: ia,
      useSyncExternalStore: ia,
      useId: ia,
      unstable_isNewReconciler: J
    }, Gw = null, qw = null, Xw = null, Kw = null, Wl = null, ll = null, bm = null;
    {
      var Wg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Qe = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      Gw = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Bt(), zf(t), Bg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Bt(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Bt(), zf(t), vm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Bt(), zf(a), Vg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Bt(), zf(t), Hg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Bt(), zf(t), Pg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Bt(), zf(t);
          var a = pe.current;
          pe.current = Wl;
          try {
            return Ig(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Bt();
          var i = pe.current;
          pe.current = Wl;
          try {
            return Ng(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Bt(), Fg(e);
        },
        useState: function(e) {
          V = "useState", Bt();
          var t = pe.current;
          pe.current = Wl;
          try {
            return fm(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Bt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Bt(), Yg(e);
        },
        useTransition: function() {
          return V = "useTransition", Bt(), $g();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Bt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Bt(), Ug(e, t, a);
        },
        useId: function() {
          return V = "useId", Bt(), Qg();
        },
        unstable_isNewReconciler: J
      }, qw = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ne(), Bg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ne(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ne(), vm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ne(), Vg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ne(), Hg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ne(), Pg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ne();
          var a = pe.current;
          pe.current = Wl;
          try {
            return Ig(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ne();
          var i = pe.current;
          pe.current = Wl;
          try {
            return Ng(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ne(), Fg(e);
        },
        useState: function(e) {
          V = "useState", ne();
          var t = pe.current;
          pe.current = Wl;
          try {
            return fm(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ne(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ne(), Yg(e);
        },
        useTransition: function() {
          return V = "useTransition", ne(), $g();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ne(), Ug(e, t, a);
        },
        useId: function() {
          return V = "useId", ne(), Qg();
        },
        unstable_isNewReconciler: J
      }, Xw = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ne(), Sm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ne(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ne(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ne(), ym(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ne(), hm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ne(), mm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ne();
          var a = pe.current;
          pe.current = ll;
          try {
            return wm(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ne();
          var i = pe.current;
          pe.current = ll;
          try {
            return Mg(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ne(), dm();
        },
        useState: function(e) {
          V = "useState", ne();
          var t = pe.current;
          pe.current = ll;
          try {
            return Ag(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ne(), gm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ne(), Fw(e);
        },
        useTransition: function() {
          return V = "useTransition", ne(), Vw();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ne(), cm(e, t);
        },
        useId: function() {
          return V = "useId", ne(), Em();
        },
        unstable_isNewReconciler: J
      }, Kw = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ne(), Sm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ne(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ne(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ne(), ym(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ne(), hm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ne(), mm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ne();
          var a = pe.current;
          pe.current = bm;
          try {
            return wm(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ne();
          var i = pe.current;
          pe.current = bm;
          try {
            return zg(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ne(), dm();
        },
        useState: function(e) {
          V = "useState", ne();
          var t = pe.current;
          pe.current = bm;
          try {
            return jg(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ne(), gm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ne(), Hw(e);
        },
        useTransition: function() {
          return V = "useTransition", ne(), Bw();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ne(), cm(e, t);
        },
        useId: function() {
          return V = "useId", ne(), Em();
        },
        unstable_isNewReconciler: J
      }, Wl = {
        readContext: function(e) {
          return Wg(), tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Qe(), Bt(), Bg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Qe(), Bt(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Qe(), Bt(), vm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Qe(), Bt(), Vg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Qe(), Bt(), Hg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Qe(), Bt(), Pg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Qe(), Bt();
          var a = pe.current;
          pe.current = Wl;
          try {
            return Ig(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Qe(), Bt();
          var i = pe.current;
          pe.current = Wl;
          try {
            return Ng(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Qe(), Bt(), Fg(e);
        },
        useState: function(e) {
          V = "useState", Qe(), Bt();
          var t = pe.current;
          pe.current = Wl;
          try {
            return fm(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Qe(), Bt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Qe(), Bt(), Yg(e);
        },
        useTransition: function() {
          return V = "useTransition", Qe(), Bt(), $g();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Qe(), Bt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Qe(), Bt(), Ug(e, t, a);
        },
        useId: function() {
          return V = "useId", Qe(), Bt(), Qg();
        },
        unstable_isNewReconciler: J
      }, ll = {
        readContext: function(e) {
          return Wg(), tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Qe(), ne(), Sm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Qe(), ne(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Qe(), ne(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Qe(), ne(), ym(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Qe(), ne(), hm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Qe(), ne(), mm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Qe(), ne();
          var a = pe.current;
          pe.current = ll;
          try {
            return wm(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Qe(), ne();
          var i = pe.current;
          pe.current = ll;
          try {
            return Mg(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Qe(), ne(), dm();
        },
        useState: function(e) {
          V = "useState", Qe(), ne();
          var t = pe.current;
          pe.current = ll;
          try {
            return Ag(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Qe(), ne(), gm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Qe(), ne(), Fw(e);
        },
        useTransition: function() {
          return V = "useTransition", Qe(), ne(), Vw();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Qe(), ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Qe(), ne(), cm(e, t);
        },
        useId: function() {
          return V = "useId", Qe(), ne(), Em();
        },
        unstable_isNewReconciler: J
      }, bm = {
        readContext: function(e) {
          return Wg(), tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Qe(), ne(), Sm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Qe(), ne(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Qe(), ne(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Qe(), ne(), ym(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Qe(), ne(), hm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Qe(), ne(), mm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Qe(), ne();
          var a = pe.current;
          pe.current = ll;
          try {
            return wm(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Qe(), ne();
          var i = pe.current;
          pe.current = ll;
          try {
            return zg(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Qe(), ne(), dm();
        },
        useState: function(e) {
          V = "useState", Qe(), ne();
          var t = pe.current;
          pe.current = ll;
          try {
            return jg(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Qe(), ne(), gm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Qe(), ne(), Hw(e);
        },
        useTransition: function() {
          return V = "useTransition", Qe(), ne(), Bw();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Qe(), ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Qe(), ne(), cm(e, t);
        },
        useId: function() {
          return V = "useId", Qe(), ne(), Em();
        },
        unstable_isNewReconciler: J
      };
    }
    var Fo = Q.unstable_now, Zw = 0, xm = -1, Dp = -1, Rm = -1, Gg = !1, Tm = !1;
    function Jw() {
      return Gg;
    }
    function eT() {
      Tm = !0;
    }
    function tT() {
      Gg = !1, Tm = !1;
    }
    function nT() {
      Gg = Tm, Tm = !1;
    }
    function eE() {
      return Zw;
    }
    function tE() {
      Zw = Fo();
    }
    function qg(e) {
      Dp = Fo(), e.actualStartTime < 0 && (e.actualStartTime = Fo());
    }
    function nE(e) {
      Dp = -1;
    }
    function km(e, t) {
      if (Dp >= 0) {
        var a = Fo() - Dp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Dp = -1;
      }
    }
    function Gl(e) {
      if (xm >= 0) {
        var t = Fo() - xm;
        xm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Z:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case mt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Xg(e) {
      if (Rm >= 0) {
        var t = Fo() - Rm;
        Rm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Z:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case mt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function ql() {
      xm = Fo();
    }
    function Kg() {
      Rm = Fo();
    }
    function Zg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ul(e, t) {
      if (e && e.defaultProps) {
        var a = lt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Jg = {}, eS, tS, nS, rS, aS, rE, _m, iS, lS, uS, Op;
    {
      eS = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), lS = /* @__PURE__ */ new Set(), uS = /* @__PURE__ */ new Set(), Op = /* @__PURE__ */ new Set();
      var aE = /* @__PURE__ */ new Set();
      _m = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          aE.has(a) || (aE.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, rE = function(e, t) {
        if (t === void 0) {
          var a = Tt(e) || "Component";
          aS.has(a) || (aS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Jg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Jg);
    }
    function oS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & qt) {
          yn(!0);
          try {
            s = a(i, u);
          } finally {
            yn(!1);
          }
        }
        rE(t, s);
      }
      var f = s == null ? u : lt({}, u, s);
      if (e.memoizedState = f, e.lanes === Y) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var sS = {
      isMounted: Uv,
      enqueueSetState: function(e, t, a) {
        var i = po(e), u = wa(), s = Bo(i), f = Pu(u, s);
        f.payload = t, a != null && (_m(a, "setState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (yr(p, i, s, u), rm(p, i, s)), vs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = po(e), u = wa(), s = Bo(i), f = Pu(u, s);
        f.tag = Ew, f.payload = t, a != null && (_m(a, "replaceState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (yr(p, i, s, u), rm(p, i, s)), vs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = po(e), i = wa(), u = Bo(a), s = Pu(i, u);
        s.tag = em, t != null && (_m(t, "forceUpdate"), s.callback = t);
        var f = zo(a, s, u);
        f !== null && (yr(f, a, u, i), rm(f, a, u)), Nc(a, u);
      }
    };
    function iE(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & qt) {
            yn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              yn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Tt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Se(a, i) || !Se(u, s) : !0;
    }
    function rT(e, t, a) {
      var i = e.stateNode;
      {
        var u = Tt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Op.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & qt) === _e && (Op.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Op.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & qt) === _e && (Op.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !lS.has(t) && (lS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Tt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !nS.has(t) && (nS.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Tt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || ct(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function lE(e, t) {
      t.updater = sS, e.stateNode = t, vu(t, e), t._reactInternalInstance = Jg;
    }
    function uE(e, t, a) {
      var i = !1, u = ui, s = ui, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === C && f._context === void 0
        );
        if (!p && !uS.has(t)) {
          uS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === vi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Tt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = tr(f);
      else {
        u = Cf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? bf(e, u) : ui;
      }
      var g = new t(a, s);
      if (e.mode & qt) {
        yn(!0);
        try {
          g = new t(a, s);
        } finally {
          yn(!1);
        }
      }
      var T = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      lE(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && T === null) {
          var x = Tt(t) || "Component";
          tS.has(x) || (tS.add(x), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", x, g.state === null ? "null" : "undefined", x));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var M = null, A = null, F = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? M = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (M = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? A = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (A = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? F = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), M !== null || A !== null || F !== null) {
            var se = Tt(t) || "Component", Le = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            rS.has(se) || (rS.add(se), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, se, Le, M !== null ? `
  ` + M : "", A !== null ? `
  ` + A : "", F !== null ? `
  ` + F : ""));
          }
        }
      }
      return i && X0(e, u, s), g;
    }
    function aT(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ye(e) || "Component"), sS.enqueueReplaceState(t, t.state, null));
    }
    function oE(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ye(e) || "Component";
          eS.has(s) || (eS.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        sS.enqueueReplaceState(t, t.state, null);
      }
    }
    function cS(e, t, a, i) {
      rT(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, Sg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = tr(s);
      else {
        var f = Cf(e, t, !0);
        u.context = bf(e, f);
      }
      {
        if (u.state === a) {
          var p = Tt(t) || "Component";
          iS.has(p) || (iS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & qt && al.recordLegacyContextWarning(e, u), al.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (oS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (aT(e, u), am(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Et;
        y |= Wi, (e.mode & zt) !== _e && (y |= kl), e.flags |= y;
      }
    }
    function iT(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ui;
      if (typeof p == "object" && p !== null)
        v = tr(p);
      else {
        var y = Cf(e, t, !0);
        v = bf(e, y);
      }
      var g = t.getDerivedStateFromProps, T = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !T && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && oE(e, u, a, v), bw();
      var x = e.memoizedState, M = u.state = x;
      if (am(e, a, u, i), M = e.memoizedState, s === a && x === M && !Hh() && !im()) {
        if (typeof u.componentDidMount == "function") {
          var A = Et;
          A |= Wi, (e.mode & zt) !== _e && (A |= kl), e.flags |= A;
        }
        return !1;
      }
      typeof g == "function" && (oS(e, t, g, a), M = e.memoizedState);
      var F = im() || iE(e, t, s, a, x, M, v);
      if (F) {
        if (!T && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var se = Et;
          se |= Wi, (e.mode & zt) !== _e && (se |= kl), e.flags |= se;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Le = Et;
          Le |= Wi, (e.mode & zt) !== _e && (Le |= kl), e.flags |= Le;
        }
        e.memoizedProps = a, e.memoizedState = M;
      }
      return u.props = a, u.state = M, u.context = v, F;
    }
    function lT(e, t, a, i, u) {
      var s = t.stateNode;
      Cw(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : ul(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, T = ui;
      if (typeof g == "object" && g !== null)
        T = tr(g);
      else {
        var x = Cf(t, a, !0);
        T = bf(t, x);
      }
      var M = a.getDerivedStateFromProps, A = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !A && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== T) && oE(t, s, i, T), bw();
      var F = t.memoizedState, se = s.state = F;
      if (am(t, i, s, u), se = t.memoizedState, f === v && F === se && !Hh() && !im() && !be)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= $n), !1;
      typeof M == "function" && (oS(t, a, M, i), se = t.memoizedState);
      var Le = im() || iE(t, a, p, i, F, se, T) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      be;
      return Le ? (!A && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, se, T), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, se, T)), typeof s.componentDidUpdate == "function" && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= $n)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= $n), t.memoizedProps = i, t.memoizedState = se), s.props = i, s.state = se, s.context = T, Le;
    }
    function Js(e, t) {
      return {
        value: e,
        source: t,
        stack: Vi(t),
        digest: null
      };
    }
    function fS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function uT(e, t) {
      return !0;
    }
    function dS(e, t) {
      try {
        var a = uT(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ue)
            return;
          console.error(i);
        }
        var p = u ? Ye(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === Z)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ye(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var T = v + `
` + f + `

` + ("" + y);
        console.error(T);
      } catch (x) {
        setTimeout(function() {
          throw x;
        });
      }
    }
    var oT = typeof WeakMap == "function" ? WeakMap : Map;
    function sE(e, t, a) {
      var i = Pu(Zt, a);
      i.tag = yg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        ek(u), dS(e, t);
      }, i;
    }
    function pS(e, t, a) {
      var i = Pu(Zt, a);
      i.tag = yg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          wC(e), dS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        wC(e), dS(e, t), typeof u != "function" && Z1(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Jr(e.lanes, Fe) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ye(e) || "Unknown"));
      }), i;
    }
    function cE(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new oT(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = tk.bind(null, e, t, a);
        Kr && Wp(e, a), t.then(s, s);
      }
    }
    function sT(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function cT(e, t) {
      var a = e.tag;
      if ((e.mode & ht) === _e && (a === ie || a === He || a === Pe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function fE(e) {
      var t = e;
      do {
        if (t.tag === ce && YR(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function dE(e, t, a, i, u) {
      if ((e.mode & ht) === _e) {
        if (e === t)
          e.flags |= Kn;
        else {
          if (e.flags |= Te, a.flags |= xc, a.flags &= -52805, a.tag === ue) {
            var s = a.alternate;
            if (s === null)
              a.tag = Pt;
            else {
              var f = Pu(Zt, Fe);
              f.tag = em, zo(a, f, Fe);
            }
          }
          a.lanes = at(a.lanes, Fe);
        }
        return e;
      }
      return e.flags |= Kn, e.lanes = u, e;
    }
    function fT(e, t, a, i, u) {
      if (a.flags |= os, Kr && Wp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        cT(a), Ar() && a.mode & ht && rw();
        var f = fE(t);
        if (f !== null) {
          f.flags &= ~Er, dE(f, t, a, e, u), f.mode & ht && cE(e, s, u), sT(f, e, s);
          return;
        } else {
          if (!Iv(u)) {
            cE(e, s, u), QS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Ar() && a.mode & ht) {
        rw();
        var v = fE(t);
        if (v !== null) {
          (v.flags & Kn) === ke && (v.flags |= Er), dE(v, t, a, e, u), ig(Js(i, a));
          return;
        }
      }
      i = Js(i, a), Y1(i);
      var y = t;
      do {
        switch (y.tag) {
          case Z: {
            var g = i;
            y.flags |= Kn;
            var T = bs(u);
            y.lanes = at(y.lanes, T);
            var x = sE(y, g, T);
            wg(y, x);
            return;
          }
          case ue:
            var M = i, A = y.type, F = y.stateNode;
            if ((y.flags & Te) === ke && (typeof A.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !fC(F))) {
              y.flags |= Kn;
              var se = bs(u);
              y.lanes = at(y.lanes, se);
              var Le = pS(y, M, se);
              wg(y, Le);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function dT() {
      return null;
    }
    var Lp = N.ReactCurrentOwner, ol = !1, vS, Np, hS, mS, yS, ec, gS, Dm, Mp;
    vS = {}, Np = {}, hS = {}, mS = {}, yS = {}, ec = !1, gS = {}, Dm = {}, Mp = {};
    function ga(e, t, a, i) {
      e === null ? t.child = hw(t, null, a, i) : t.child = kf(t, e.child, a, i);
    }
    function pT(e, t, a, i) {
      t.child = kf(t, e.child, null, i), t.child = kf(t, null, a, i);
    }
    function pE(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && nl(
          s,
          i,
          // Resolved props
          "prop",
          Tt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Df(t, u), va(t);
      {
        if (Lp.current = t, Yn(!0), v = Uf(e, t, f, i, p, u), y = Af(), t.mode & qt) {
          yn(!0);
          try {
            v = Uf(e, t, f, i, p, u), y = Af();
          } finally {
            yn(!1);
          }
        }
        Yn(!1);
      }
      return ha(), e !== null && !ol ? (Dw(e, t, u), Vu(e, t, u)) : (Ar() && y && Jy(t), t.flags |= ni, ga(e, t, v, u), t.child);
    }
    function vE(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (gk(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Yf(s), t.tag = Pe, t.type = f, ES(t, s), hE(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && nl(
            p,
            i,
            // Resolved props
            "prop",
            Tt(s)
          ), a.defaultProps !== void 0) {
            var v = Tt(s) || "Unknown";
            Mp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Mp[v] = !0);
          }
        }
        var y = r0(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, T = g.propTypes;
        T && nl(
          T,
          i,
          // Resolved props
          "prop",
          Tt(g)
        );
      }
      var x = e.child, M = kS(e, u);
      if (!M) {
        var A = x.memoizedProps, F = a.compare;
        if (F = F !== null ? F : Se, F(A, i) && e.ref === t.ref)
          return Vu(e, t, u);
      }
      t.flags |= ni;
      var se = ic(x, i);
      return se.ref = t.ref, se.return = t, t.child = se, se;
    }
    function hE(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === $e) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && nl(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Tt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (Se(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ol = !1, t.pendingProps = i = g, kS(e, u))
            (e.flags & xc) !== ke && (ol = !0);
          else return t.lanes = e.lanes, Vu(e, t, u);
      }
      return SS(e, t, a, i, u);
    }
    function mE(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || re)
        if ((t.mode & ht) === _e) {
          var f = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Bm(t, a);
        } else if (Jr(a, Zr)) {
          var T = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = T;
          var x = s !== null ? s.baseLanes : a;
          Bm(t, x);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = at(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Zr;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Bm(t, v), null;
        }
      else {
        var M;
        s !== null ? (M = at(s.baseLanes, a), t.memoizedState = null) : M = a, Bm(t, M);
      }
      return ga(e, t, u, a), t.child;
    }
    function vT(e, t, a) {
      var i = t.pendingProps;
      return ga(e, t, i, a), t.child;
    }
    function hT(e, t, a) {
      var i = t.pendingProps.children;
      return ga(e, t, i, a), t.child;
    }
    function mT(e, t, a) {
      {
        t.flags |= Et;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return ga(e, t, s, a), t.child;
    }
    function yE(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= wn, t.flags |= ho);
    }
    function SS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && nl(
          s,
          i,
          // Resolved props
          "prop",
          Tt(a)
        );
      }
      var f;
      {
        var p = Cf(t, a, !0);
        f = bf(t, p);
      }
      var v, y;
      Df(t, u), va(t);
      {
        if (Lp.current = t, Yn(!0), v = Uf(e, t, a, i, f, u), y = Af(), t.mode & qt) {
          yn(!0);
          try {
            v = Uf(e, t, a, i, f, u), y = Af();
          } finally {
            yn(!1);
          }
        }
        Yn(!1);
      }
      return ha(), e !== null && !ol ? (Dw(e, t, u), Vu(e, t, u)) : (Ar() && y && Jy(t), t.flags |= ni, ga(e, t, v, u), t.child);
    }
    function gE(e, t, a, i, u) {
      {
        switch (Mk(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Te, t.flags |= Kn;
            var y = new Error("Simulated error coming from DevTools"), g = bs(u);
            t.lanes = at(t.lanes, g);
            var T = pS(t, Js(y, t), g);
            wg(t, T);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var x = a.propTypes;
          x && nl(
            x,
            i,
            // Resolved props
            "prop",
            Tt(a)
          );
        }
      }
      var M;
      Yl(a) ? (M = !0, Vh(t)) : M = !1, Df(t, u);
      var A = t.stateNode, F;
      A === null ? (Lm(e, t), uE(t, a, i), cS(t, a, i, u), F = !0) : e === null ? F = iT(t, a, i, u) : F = lT(e, t, a, i, u);
      var se = wS(e, t, a, F, M, u);
      {
        var Le = t.stateNode;
        F && Le.props !== i && (ec || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ye(t) || "a component"), ec = !0);
      }
      return se;
    }
    function wS(e, t, a, i, u, s) {
      yE(e, t);
      var f = (t.flags & Te) !== ke;
      if (!i && !f)
        return u && J0(t, a, !1), Vu(e, t, s);
      var p = t.stateNode;
      Lp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, nE();
      else {
        va(t);
        {
          if (Yn(!0), v = p.render(), t.mode & qt) {
            yn(!0);
            try {
              p.render();
            } finally {
              yn(!1);
            }
          }
          Yn(!1);
        }
        ha();
      }
      return t.flags |= ni, e !== null && f ? pT(e, t, v, s) : ga(e, t, v, s), t.memoizedState = p.state, u && J0(t, a, !0), t.child;
    }
    function SE(e) {
      var t = e.stateNode;
      t.pendingContext ? K0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && K0(e, t.context, !1), Eg(e, t.containerInfo);
    }
    function yT(e, t, a) {
      if (SE(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      Cw(e, t), am(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Er) {
          var g = Js(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return wE(e, t, p, a, g);
        } else if (p !== s) {
          var T = Js(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return wE(e, t, p, a, T);
        } else {
          wR(t);
          var x = hw(t, null, p, a);
          t.child = x;
          for (var M = x; M; )
            M.flags = M.flags & ~mn | Gr, M = M.sibling;
        }
      } else {
        if (Tf(), p === s)
          return Vu(e, t, a);
        ga(e, t, p, a);
      }
      return t.child;
    }
    function wE(e, t, a, i, u) {
      return Tf(), ig(u), t.flags |= Er, ga(e, t, a, i), t.child;
    }
    function gT(e, t, a) {
      Tw(t), e === null && ag(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Hy(i, u);
      return p ? f = null : s !== null && Hy(i, s) && (t.flags |= Da), yE(e, t), ga(e, t, f, a), t.child;
    }
    function ST(e, t) {
      return e === null && ag(t), null;
    }
    function wT(e, t, a, i) {
      Lm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = Sk(v), g = ul(v, u), T;
      switch (y) {
        case ie:
          return ES(t, v), t.type = v = Yf(v), T = SS(null, t, v, g, i), T;
        case ue:
          return t.type = v = KS(v), T = gE(null, t, v, g, i), T;
        case He:
          return t.type = v = ZS(v), T = pE(null, t, v, g, i), T;
        case et: {
          if (t.type !== t.elementType) {
            var x = v.propTypes;
            x && nl(
              x,
              g,
              // Resolved for outer only
              "prop",
              Tt(v)
            );
          }
          return T = vE(
            null,
            t,
            v,
            ul(v.type, g),
            // The inner type can have defaults too
            i
          ), T;
        }
      }
      var M = "";
      throw v !== null && typeof v == "object" && v.$$typeof === $e && (M = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + M));
    }
    function ET(e, t, a, i, u) {
      Lm(e, t), t.tag = ue;
      var s;
      return Yl(a) ? (s = !0, Vh(t)) : s = !1, Df(t, u), uE(t, a, i), cS(t, a, i, u), wS(null, t, a, !0, s, u);
    }
    function CT(e, t, a, i) {
      Lm(e, t);
      var u = t.pendingProps, s;
      {
        var f = Cf(t, a, !1);
        s = bf(t, f);
      }
      Df(t, i);
      var p, v;
      va(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = Tt(a) || "Unknown";
          vS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), vS[y] = !0);
        }
        t.mode & qt && al.recordLegacyContextWarning(t, null), Yn(!0), Lp.current = t, p = Uf(null, t, a, u, s, i), v = Af(), Yn(!1);
      }
      if (ha(), t.flags |= ni, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = Tt(a) || "Unknown";
        Np[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Np[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var T = Tt(a) || "Unknown";
          Np[T] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), Np[T] = !0);
        }
        t.tag = ue, t.memoizedState = null, t.updateQueue = null;
        var x = !1;
        return Yl(a) ? (x = !0, Vh(t)) : x = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Sg(t), lE(t, p), cS(t, a, u, i), wS(null, t, a, !0, x, i);
      } else {
        if (t.tag = ie, t.mode & qt) {
          yn(!0);
          try {
            p = Uf(null, t, a, u, s, i), v = Af();
          } finally {
            yn(!1);
          }
        }
        return Ar() && v && Jy(t), ga(null, t, p, i), ES(t, a), t.child;
      }
    }
    function ES(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Dr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), yS[u] || (yS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Tt(t) || "Unknown";
          Mp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Mp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Tt(t) || "Unknown";
          mS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), mS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Tt(t) || "Unknown";
          hS[v] || (S("%s: Function components do not support contextType.", v), hS[v] = !0);
        }
      }
    }
    var CS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Ot
    };
    function bS(e) {
      return {
        baseLanes: e,
        cachePool: dT(),
        transitions: null
      };
    }
    function bT(e, t) {
      var a = null;
      return {
        baseLanes: at(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function xT(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return xg(e, Cp);
    }
    function RT(e, t) {
      return xs(e.childLanes, t);
    }
    function EE(e, t, a) {
      var i = t.pendingProps;
      zk(t) && (t.flags |= Te);
      var u = il.current, s = !1, f = (t.flags & Te) !== ke;
      if (f || xT(u, e) ? (s = !0, t.flags &= ~Te) : (e === null || e.memoizedState !== null) && (u = IR(u, _w)), u = Lf(u), Ao(t, u), e === null) {
        ag(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return OT(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var T = TT(t, y, g, a), x = t.child;
          return x.memoizedState = bS(a), t.memoizedState = CS, T;
        } else
          return xS(t, y);
      } else {
        var M = e.memoizedState;
        if (M !== null) {
          var A = M.dehydrated;
          if (A !== null)
            return LT(e, t, f, i, A, M, a);
        }
        if (s) {
          var F = i.fallback, se = i.children, Le = _T(e, t, se, F, a), Re = t.child, xt = e.child.memoizedState;
          return Re.memoizedState = xt === null ? bS(a) : bT(xt, a), Re.childLanes = RT(e, a), t.memoizedState = CS, Le;
        } else {
          var St = i.children, D = kT(e, t, St, a);
          return t.memoizedState = null, D;
        }
      }
    }
    function xS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = RS(u, i);
      return s.return = e, e.child = s, s;
    }
    function TT(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & ht) === _e && s !== null ? (p = s, p.childLanes = Y, p.pendingProps = f, e.mode & Mt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Yo(a, u, i, null)) : (p = RS(f, u), v = Yo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function RS(e, t, a) {
      return CC(e, t, Y, null);
    }
    function CE(e, t) {
      return ic(e, t);
    }
    function kT(e, t, a, i) {
      var u = e.child, s = u.sibling, f = CE(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ht) === _e && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= _a) : p.push(s);
      }
      return t.child = f, f;
    }
    function _T(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ht) === _e && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = Y, y.pendingProps = v, t.mode & Mt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = CE(f, v), y.subtreeFlags = f.subtreeFlags & zn;
      var T;
      return p !== null ? T = ic(p, i) : (T = Yo(i, s, u, null), T.flags |= mn), T.return = t, y.return = t, y.sibling = T, t.child = y, T;
    }
    function Om(e, t, a, i) {
      i !== null && ig(i), kf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = xS(t, s);
      return f.flags |= mn, t.memoizedState = null, f;
    }
    function DT(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = RS(f, s), v = Yo(i, s, u, null);
      return v.flags |= mn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ht) !== _e && kf(t, e.child, null, u), v;
    }
    function OT(e, t, a) {
      return (e.mode & ht) === _e ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Fe) : Iy(t) ? e.lanes = Cr : e.lanes = Zr, null;
    }
    function LT(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Er) {
          t.flags &= ~Er;
          var D = fS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Om(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Te, null;
          var H = i.children, O = i.fallback, X = DT(e, t, H, O, f), ve = t.child;
          return ve.memoizedState = bS(f), t.memoizedState = CS, X;
        }
      else {
        if (gR(), (t.mode & ht) === _e)
          return Om(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Iy(u)) {
          var p, v, y;
          {
            var g = Ux(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var T;
          v ? T = new Error(v) : T = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var x = fS(T, p, y);
          return Om(e, t, f, x);
        }
        var M = Jr(f, e.childLanes);
        if (ol || M) {
          var A = Vm();
          if (A !== null) {
            var F = Ad(A, f);
            if (F !== Ot && F !== s.retryLane) {
              s.retryLane = F;
              var se = Zt;
              Fa(e, F), yr(A, e, F, se);
            }
          }
          QS();
          var Le = fS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Om(e, t, f, Le);
        } else if ($0(u)) {
          t.flags |= Te, t.child = e.child;
          var Re = nk.bind(null, e);
          return Ax(u, Re), null;
        } else {
          ER(t, u, s.treeContext);
          var xt = i.children, St = xS(t, xt);
          return St.flags |= Gr, St;
        }
      }
    }
    function bE(e, t, a) {
      e.lanes = at(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = at(i.lanes, t)), hg(e.return, t, a);
    }
    function NT(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === ce) {
          var u = i.memoizedState;
          u !== null && bE(i, a, e);
        } else if (i.tag === un)
          bE(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function MT(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && om(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function zT(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !gS[e])
        if (gS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function UT(e, t) {
      e !== void 0 && !Dm[e] && (e !== "collapsed" && e !== "hidden" ? (Dm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Dm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function xE(e, t) {
      {
        var a = ct(e), i = !a && typeof nt(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function AT(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (ct(e)) {
          for (var a = 0; a < e.length; a++)
            if (!xE(e[a], a))
              return;
        } else {
          var i = nt(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!xE(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function TS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function RE(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      zT(u), UT(s, u), AT(f, u), ga(e, t, f, a);
      var p = il.current, v = xg(p, Cp);
      if (v)
        p = Rg(p, Cp), t.flags |= Te;
      else {
        var y = e !== null && (e.flags & Te) !== ke;
        y && NT(t, t.child, a), p = Lf(p);
      }
      if (Ao(t, p), (t.mode & ht) === _e)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = MT(t.child), T;
            g === null ? (T = t.child, t.child = null) : (T = g.sibling, g.sibling = null), TS(
              t,
              !1,
              // isBackwards
              T,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var x = null, M = t.child;
            for (t.child = null; M !== null; ) {
              var A = M.alternate;
              if (A !== null && om(A) === null) {
                t.child = M;
                break;
              }
              var F = M.sibling;
              M.sibling = x, x = M, M = F;
            }
            TS(
              t,
              !0,
              // isBackwards
              x,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            TS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function jT(e, t, a) {
      Eg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = kf(t, null, i, a) : ga(e, t, i, a), t.child;
    }
    var TE = !1;
    function FT(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || TE || (TE = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && nl(v, s, "prop", "Context.Provider");
      }
      if (gw(t, u, p), f !== null) {
        var y = f.value;
        if (G(y, p)) {
          if (f.children === s.children && !Hh())
            return Vu(e, t, a);
        } else
          zR(t, u, a);
      }
      var g = s.children;
      return ga(e, t, g, a), t.child;
    }
    var kE = !1;
    function HT(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (kE || (kE = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Df(t, a);
      var f = tr(i);
      va(t);
      var p;
      return Lp.current = t, Yn(!0), p = s(f), Yn(!1), ha(), t.flags |= ni, ga(e, t, p, a), t.child;
    }
    function zp() {
      ol = !0;
    }
    function Lm(e, t) {
      (t.mode & ht) === _e && e !== null && (e.alternate = null, t.alternate = null, t.flags |= mn);
    }
    function Vu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), nE(), Qp(t.lanes), Jr(a, t.childLanes) ? (NR(e, t), t.child) : null;
    }
    function PT(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= _a) : s.push(e), a.flags |= mn, a;
      }
    }
    function kS(e, t) {
      var a = e.lanes;
      return !!Jr(a, t);
    }
    function VT(e, t, a) {
      switch (t.tag) {
        case Z:
          SE(t), t.stateNode, Tf();
          break;
        case te:
          Tw(t);
          break;
        case ue: {
          var i = t.type;
          Yl(i) && Vh(t);
          break;
        }
        case ye:
          Eg(t, t.stateNode.containerInfo);
          break;
        case rt: {
          var u = t.memoizedProps.value, s = t.type._context;
          gw(t, s, u);
          break;
        }
        case mt:
          {
            var f = Jr(a, t.childLanes);
            f && (t.flags |= Et);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case ce: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Ao(t, Lf(il.current)), t.flags |= Te, null;
            var y = t.child, g = y.childLanes;
            if (Jr(a, g))
              return EE(e, t, a);
            Ao(t, Lf(il.current));
            var T = Vu(e, t, a);
            return T !== null ? T.sibling : null;
          } else
            Ao(t, Lf(il.current));
          break;
        }
        case un: {
          var x = (e.flags & Te) !== ke, M = Jr(a, t.childLanes);
          if (x) {
            if (M)
              return RE(e, t, a);
            t.flags |= Te;
          }
          var A = t.memoizedState;
          if (A !== null && (A.rendering = null, A.tail = null, A.lastEffect = null), Ao(t, il.current), M)
            break;
          return null;
        }
        case De:
        case Ft:
          return t.lanes = Y, mE(e, t, a);
      }
      return Vu(e, t, a);
    }
    function _E(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return PT(e, t, r0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Hh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ol = !0;
        else {
          var s = kS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Te) === ke)
            return ol = !1, VT(e, t, a);
          (e.flags & xc) !== ke ? ol = !0 : ol = !1;
        }
      } else if (ol = !1, Ar() && dR(t)) {
        var f = t.index, p = pR();
        nw(t, p, f);
      }
      switch (t.lanes = Y, t.tag) {
        case Ge:
          return CT(e, t, t.type, a);
        case ln: {
          var v = t.elementType;
          return wT(e, t, v, a);
        }
        case ie: {
          var y = t.type, g = t.pendingProps, T = t.elementType === y ? g : ul(y, g);
          return SS(e, t, y, T, a);
        }
        case ue: {
          var x = t.type, M = t.pendingProps, A = t.elementType === x ? M : ul(x, M);
          return gE(e, t, x, A, a);
        }
        case Z:
          return yT(e, t, a);
        case te:
          return gT(e, t, a);
        case Ae:
          return ST(e, t);
        case ce:
          return EE(e, t, a);
        case ye:
          return jT(e, t, a);
        case He: {
          var F = t.type, se = t.pendingProps, Le = t.elementType === F ? se : ul(F, se);
          return pE(e, t, F, Le, a);
        }
        case je:
          return vT(e, t, a);
        case Je:
          return hT(e, t, a);
        case mt:
          return mT(e, t, a);
        case rt:
          return FT(e, t, a);
        case Rt:
          return HT(e, t, a);
        case et: {
          var Re = t.type, xt = t.pendingProps, St = ul(Re, xt);
          if (t.type !== t.elementType) {
            var D = Re.propTypes;
            D && nl(
              D,
              St,
              // Resolved for outer only
              "prop",
              Tt(Re)
            );
          }
          return St = ul(Re.type, St), vE(e, t, Re, St, a);
        }
        case Pe:
          return hE(e, t, t.type, t.pendingProps, a);
        case Pt: {
          var H = t.type, O = t.pendingProps, X = t.elementType === H ? O : ul(H, O);
          return ET(e, t, H, X, a);
        }
        case un:
          return RE(e, t, a);
        case _t:
          break;
        case De:
          return mE(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function jf(e) {
      e.flags |= Et;
    }
    function DE(e) {
      e.flags |= wn, e.flags |= ho;
    }
    var OE, _S, LE, NE;
    OE = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === te || u.tag === Ae)
          sx(e, u.stateNode);
        else if (u.tag !== ye) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, _S = function(e, t) {
    }, LE = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Cg(), v = fx(f, a, s, i, u, p);
        t.updateQueue = v, v && jf(t);
      }
    }, NE = function(e, t, a, i) {
      a !== i && jf(t);
    };
    function Up(e, t) {
      if (!Ar())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Fr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = Y, i = ke;
      if (t) {
        if ((e.mode & Mt) !== _e) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = at(a, at(y.lanes, y.childLanes)), i |= y.subtreeFlags & zn, i |= y.flags & zn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = at(a, at(g.lanes, g.childLanes)), i |= g.subtreeFlags & zn, i |= g.flags & zn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Mt) !== _e) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = at(a, at(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = at(a, at(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function BT(e, t, a) {
      if (TR() && (t.mode & ht) !== _e && (t.flags & Te) === ke)
        return sw(t), Tf(), t.flags |= Er | os | Kn, !1;
      var i = Qh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (xR(t), Fr(t), (t.mode & Mt) !== _e) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Tf(), (t.flags & Te) === ke && (t.memoizedState = null), t.flags |= Et, Fr(t), (t.mode & Mt) !== _e) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return cw(), !0;
    }
    function ME(e, t, a) {
      var i = t.pendingProps;
      switch (eg(t), t.tag) {
        case Ge:
        case ln:
        case Pe:
        case ie:
        case He:
        case je:
        case Je:
        case mt:
        case Rt:
        case et:
          return Fr(t), null;
        case ue: {
          var u = t.type;
          return Yl(u) && Ph(t), Fr(t), null;
        }
        case Z: {
          var s = t.stateNode;
          if (Of(t), Xy(t), kg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Qh(t);
            if (f)
              jf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Er) !== ke) && (t.flags |= $n, cw());
            }
          }
          return _S(e, t), Fr(t), null;
        }
        case te: {
          bg(t);
          var v = Rw(), y = t.type;
          if (e !== null && t.stateNode != null)
            LE(e, t, y, i, v), e.ref !== t.ref && DE(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Fr(t), null;
            }
            var g = Cg(), T = Qh(t);
            if (T)
              CR(t, v, g) && jf(t);
            else {
              var x = ox(y, i, v, g, t);
              OE(x, t, !1, !1), t.stateNode = x, cx(x, y, i, v) && jf(t);
            }
            t.ref !== null && DE(t);
          }
          return Fr(t), null;
        }
        case Ae: {
          var M = i;
          if (e && t.stateNode != null) {
            var A = e.memoizedProps;
            NE(e, t, A, M);
          } else {
            if (typeof M != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = Rw(), se = Cg(), Le = Qh(t);
            Le ? bR(t) && jf(t) : t.stateNode = dx(M, F, se, t);
          }
          return Fr(t), null;
        }
        case ce: {
          Nf(t);
          var Re = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var xt = BT(e, t, Re);
            if (!xt)
              return t.flags & Kn ? t : null;
          }
          if ((t.flags & Te) !== ke)
            return t.lanes = a, (t.mode & Mt) !== _e && Zg(t), t;
          var St = Re !== null, D = e !== null && e.memoizedState !== null;
          if (St !== D && St) {
            var H = t.child;
            if (H.flags |= Mn, (t.mode & ht) !== _e) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              O || xg(il.current, _w) ? I1() : QS();
            }
          }
          var X = t.updateQueue;
          if (X !== null && (t.flags |= Et), Fr(t), (t.mode & Mt) !== _e && St) {
            var ve = t.child;
            ve !== null && (t.treeBaseDuration -= ve.treeBaseDuration);
          }
          return null;
        }
        case ye:
          return Of(t), _S(e, t), e === null && iR(t.stateNode.containerInfo), Fr(t), null;
        case rt:
          var fe = t.type._context;
          return vg(fe, t), Fr(t), null;
        case Pt: {
          var Be = t.type;
          return Yl(Be) && Ph(t), Fr(t), null;
        }
        case un: {
          Nf(t);
          var qe = t.memoizedState;
          if (qe === null)
            return Fr(t), null;
          var Kt = (t.flags & Te) !== ke, At = qe.rendering;
          if (At === null)
            if (Kt)
              Up(qe, !1);
            else {
              var Gn = $1() && (e === null || (e.flags & Te) === ke);
              if (!Gn)
                for (var jt = t.child; jt !== null; ) {
                  var Pn = om(jt);
                  if (Pn !== null) {
                    Kt = !0, t.flags |= Te, Up(qe, !1);
                    var la = Pn.updateQueue;
                    return la !== null && (t.updateQueue = la, t.flags |= Et), t.subtreeFlags = ke, MR(t, a), Ao(t, Rg(il.current, Cp)), t.child;
                  }
                  jt = jt.sibling;
                }
              qe.tail !== null && Qn() > eC() && (t.flags |= Te, Kt = !0, Up(qe, !1), t.lanes = kd);
            }
          else {
            if (!Kt) {
              var Ir = om(At);
              if (Ir !== null) {
                t.flags |= Te, Kt = !0;
                var si = Ir.updateQueue;
                if (si !== null && (t.updateQueue = si, t.flags |= Et), Up(qe, !0), qe.tail === null && qe.tailMode === "hidden" && !At.alternate && !Ar())
                  return Fr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Qn() * 2 - qe.renderingStartTime > eC() && a !== Zr && (t.flags |= Te, Kt = !0, Up(qe, !1), t.lanes = kd);
            }
            if (qe.isBackwards)
              At.sibling = t.child, t.child = At;
            else {
              var Ea = qe.last;
              Ea !== null ? Ea.sibling = At : t.child = At, qe.last = At;
            }
          }
          if (qe.tail !== null) {
            var Ca = qe.tail;
            qe.rendering = Ca, qe.tail = Ca.sibling, qe.renderingStartTime = Qn(), Ca.sibling = null;
            var ua = il.current;
            return Kt ? ua = Rg(ua, Cp) : ua = Lf(ua), Ao(t, ua), Ca;
          }
          return Fr(t), null;
        }
        case _t:
          break;
        case De:
        case Ft: {
          $S(t);
          var Qu = t.memoizedState, $f = Qu !== null;
          if (e !== null) {
            var Kp = e.memoizedState, Zl = Kp !== null;
            Zl !== $f && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !re && (t.flags |= Mn);
          }
          return !$f || (t.mode & ht) === _e ? Fr(t) : Jr(Kl, Zr) && (Fr(t), t.subtreeFlags & (mn | Et) && (t.flags |= Mn)), null;
        }
        case Dt:
          return null;
        case Lt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function IT(e, t, a) {
      switch (eg(t), t.tag) {
        case ue: {
          var i = t.type;
          Yl(i) && Ph(t);
          var u = t.flags;
          return u & Kn ? (t.flags = u & ~Kn | Te, (t.mode & Mt) !== _e && Zg(t), t) : null;
        }
        case Z: {
          t.stateNode, Of(t), Xy(t), kg();
          var s = t.flags;
          return (s & Kn) !== ke && (s & Te) === ke ? (t.flags = s & ~Kn | Te, t) : null;
        }
        case te:
          return bg(t), null;
        case ce: {
          Nf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Tf();
          }
          var p = t.flags;
          return p & Kn ? (t.flags = p & ~Kn | Te, (t.mode & Mt) !== _e && Zg(t), t) : null;
        }
        case un:
          return Nf(t), null;
        case ye:
          return Of(t), null;
        case rt:
          var v = t.type._context;
          return vg(v, t), null;
        case De:
        case Ft:
          return $S(t), null;
        case Dt:
          return null;
        default:
          return null;
      }
    }
    function zE(e, t, a) {
      switch (eg(t), t.tag) {
        case ue: {
          var i = t.type.childContextTypes;
          i != null && Ph(t);
          break;
        }
        case Z: {
          t.stateNode, Of(t), Xy(t), kg();
          break;
        }
        case te: {
          bg(t);
          break;
        }
        case ye:
          Of(t);
          break;
        case ce:
          Nf(t);
          break;
        case un:
          Nf(t);
          break;
        case rt:
          var u = t.type._context;
          vg(u, t);
          break;
        case De:
        case Ft:
          $S(t);
          break;
      }
    }
    var UE = null;
    UE = /* @__PURE__ */ new Set();
    var Nm = !1, Hr = !1, YT = typeof WeakSet == "function" ? WeakSet : Set, we = null, Ff = null, Hf = null;
    function $T(e) {
      Tl(null, function() {
        throw e;
      }), us();
    }
    var QT = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Mt)
        try {
          ql(), t.componentWillUnmount();
        } finally {
          Gl(e);
        }
      else
        t.componentWillUnmount();
    };
    function AE(e, t) {
      try {
        Ho(fr, e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function DS(e, t, a) {
      try {
        QT(e, a);
      } catch (i) {
        fn(e, t, i);
      }
    }
    function WT(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        fn(e, t, i);
      }
    }
    function jE(e, t) {
      try {
        HE(e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function Pf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ue && dt && e.mode & Mt)
              try {
                ql(), i = a(null);
              } finally {
                Gl(e);
              }
            else
              i = a(null);
          } catch (u) {
            fn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ye(e));
        } else
          a.current = null;
    }
    function Mm(e, t, a) {
      try {
        a();
      } catch (i) {
        fn(e, t, i);
      }
    }
    var FE = !1;
    function GT(e, t) {
      lx(e.containerInfo), we = t, qT();
      var a = FE;
      return FE = !1, a;
    }
    function qT() {
      for (; we !== null; ) {
        var e = we, t = e.child;
        (e.subtreeFlags & _l) !== ke && t !== null ? (t.return = e, we = t) : XT();
      }
    }
    function XT() {
      for (; we !== null; ) {
        var e = we;
        Qt(e);
        try {
          KT(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        cn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, we = t;
          return;
        }
        we = e.return;
      }
    }
    function KT(e) {
      var t = e.alternate, a = e.flags;
      if ((a & $n) !== ke) {
        switch (Qt(e), e.tag) {
          case ie:
          case He:
          case Pe:
            break;
          case ue: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !ec && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ul(e.type, i), u);
              {
                var p = UE;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ye(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case Z: {
            {
              var v = e.stateNode;
              Lx(v.containerInfo);
            }
            break;
          }
          case te:
          case Ae:
          case ye:
          case Pt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        cn();
      }
    }
    function sl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & jr) !== Ha ? Xi(t) : (e & fr) !== Ha && cs(t), (e & $l) !== Ha && Gp(!0), Mm(t, a, p), (e & $l) !== Ha && Gp(!1), (e & jr) !== Ha ? Nl() : (e & fr) !== Ha && Rd());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Ho(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & jr) !== Ha ? xd(t) : (e & fr) !== Ha && Oc(t);
            var f = s.create;
            (e & $l) !== Ha && Gp(!0), s.destroy = f(), (e & $l) !== Ha && Gp(!1), (e & jr) !== Ha ? Fv() : (e & fr) !== Ha && Hv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & fr) !== ke ? v = "useLayoutEffect" : (s.tag & $l) !== ke ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function ZT(e, t) {
      if ((t.flags & Et) !== ke)
        switch (t.tag) {
          case mt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = eE(), p = t.alternate === null ? "mount" : "update";
            Jw() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case Z:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case mt:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function JT(e, t, a, i) {
      if ((a.flags & Ol) !== ke)
        switch (a.tag) {
          case ie:
          case He:
          case Pe: {
            if (!Hr)
              if (a.mode & Mt)
                try {
                  ql(), Ho(fr | cr, a);
                } finally {
                  Gl(a);
                }
              else
                Ho(fr | cr, a);
            break;
          }
          case ue: {
            var u = a.stateNode;
            if (a.flags & Et && !Hr)
              if (t === null)
                if (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), a.mode & Mt)
                  try {
                    ql(), u.componentDidMount();
                  } finally {
                    Gl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ul(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), a.mode & Mt)
                  try {
                    ql(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Gl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), xw(a, p, u));
            break;
          }
          case Z: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case te:
                    y = a.child.stateNode;
                    break;
                  case ue:
                    y = a.child.stateNode;
                    break;
                }
              xw(a, v, y);
            }
            break;
          }
          case te: {
            var g = a.stateNode;
            if (t === null && a.flags & Et) {
              var T = a.type, x = a.memoizedProps;
              yx(g, T, x);
            }
            break;
          }
          case Ae:
            break;
          case ye:
            break;
          case mt: {
            {
              var M = a.memoizedProps, A = M.onCommit, F = M.onRender, se = a.stateNode.effectDuration, Le = eE(), Re = t === null ? "mount" : "update";
              Jw() && (Re = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, Re, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Le);
              {
                typeof A == "function" && A(a.memoizedProps.id, Re, se, Le), X1(a);
                var xt = a.return;
                e: for (; xt !== null; ) {
                  switch (xt.tag) {
                    case Z:
                      var St = xt.stateNode;
                      St.effectDuration += se;
                      break e;
                    case mt:
                      var D = xt.stateNode;
                      D.effectDuration += se;
                      break e;
                  }
                  xt = xt.return;
                }
              }
            }
            break;
          }
          case ce: {
            u1(e, a);
            break;
          }
          case un:
          case Pt:
          case _t:
          case De:
          case Ft:
          case Lt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Hr || a.flags & wn && HE(a);
    }
    function e1(e) {
      switch (e.tag) {
        case ie:
        case He:
        case Pe: {
          if (e.mode & Mt)
            try {
              ql(), AE(e, e.return);
            } finally {
              Gl(e);
            }
          else
            AE(e, e.return);
          break;
        }
        case ue: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && WT(e, e.return, t), jE(e, e.return);
          break;
        }
        case te: {
          jE(e, e.return);
          break;
        }
      }
    }
    function t1(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === te) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? kx(u) : Dx(i.stateNode, i.memoizedProps);
            } catch (f) {
              fn(e, e.return, f);
            }
          }
        } else if (i.tag === Ae) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? _x(s) : Ox(s, i.memoizedProps);
            } catch (f) {
              fn(e, e.return, f);
            }
        } else if (!((i.tag === De || i.tag === Ft) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function HE(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case te:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Mt)
            try {
              ql(), u = t(i);
            } finally {
              Gl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ye(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ye(e)), t.current = i;
      }
    }
    function n1(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function PE(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, PE(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === te) {
          var a = e.stateNode;
          a !== null && oR(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function r1(e) {
      for (var t = e.return; t !== null; ) {
        if (VE(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function VE(e) {
      return e.tag === te || e.tag === Z || e.tag === ye;
    }
    function BE(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || VE(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== te && t.tag !== Ae && t.tag !== Jt; ) {
          if (t.flags & mn || t.child === null || t.tag === ye)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & mn))
          return t.stateNode;
      }
    }
    function a1(e) {
      var t = r1(e);
      switch (t.tag) {
        case te: {
          var a = t.stateNode;
          t.flags & Da && (Y0(a), t.flags &= ~Da);
          var i = BE(e);
          LS(e, i, a);
          break;
        }
        case Z:
        case ye: {
          var u = t.stateNode.containerInfo, s = BE(e);
          OS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function OS(e, t, a) {
      var i = e.tag, u = i === te || i === Ae;
      if (u) {
        var s = e.stateNode;
        t ? bx(a, s, t) : Ex(a, s);
      } else if (i !== ye) {
        var f = e.child;
        if (f !== null) {
          OS(f, t, a);
          for (var p = f.sibling; p !== null; )
            OS(p, t, a), p = p.sibling;
        }
      }
    }
    function LS(e, t, a) {
      var i = e.tag, u = i === te || i === Ae;
      if (u) {
        var s = e.stateNode;
        t ? Cx(a, s, t) : wx(a, s);
      } else if (i !== ye) {
        var f = e.child;
        if (f !== null) {
          LS(f, t, a);
          for (var p = f.sibling; p !== null; )
            LS(p, t, a), p = p.sibling;
        }
      }
    }
    var Pr = null, cl = !1;
    function i1(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case te: {
              Pr = i.stateNode, cl = !1;
              break e;
            }
            case Z: {
              Pr = i.stateNode.containerInfo, cl = !0;
              break e;
            }
            case ye: {
              Pr = i.stateNode.containerInfo, cl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Pr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        IE(e, t, a), Pr = null, cl = !1;
      }
      n1(a);
    }
    function Po(e, t, a) {
      for (var i = a.child; i !== null; )
        IE(e, t, i), i = i.sibling;
    }
    function IE(e, t, a) {
      switch (Ed(a), a.tag) {
        case te:
          Hr || Pf(a, t);
        case Ae: {
          {
            var i = Pr, u = cl;
            Pr = null, Po(e, t, a), Pr = i, cl = u, Pr !== null && (cl ? Rx(Pr, a.stateNode) : xx(Pr, a.stateNode));
          }
          return;
        }
        case Jt: {
          Pr !== null && (cl ? Tx(Pr, a.stateNode) : By(Pr, a.stateNode));
          return;
        }
        case ye: {
          {
            var s = Pr, f = cl;
            Pr = a.stateNode.containerInfo, cl = !0, Po(e, t, a), Pr = s, cl = f;
          }
          return;
        }
        case ie:
        case He:
        case et:
        case Pe: {
          if (!Hr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var T = g, x = T.destroy, M = T.tag;
                  x !== void 0 && ((M & $l) !== Ha ? Mm(a, t, x) : (M & fr) !== Ha && (cs(a), a.mode & Mt ? (ql(), Mm(a, t, x), Gl(a)) : Mm(a, t, x), Rd())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Po(e, t, a);
          return;
        }
        case ue: {
          if (!Hr) {
            Pf(a, t);
            var A = a.stateNode;
            typeof A.componentWillUnmount == "function" && DS(a, t, A);
          }
          Po(e, t, a);
          return;
        }
        case _t: {
          Po(e, t, a);
          return;
        }
        case De: {
          if (
            // TODO: Remove this dead flag
            a.mode & ht
          ) {
            var F = Hr;
            Hr = F || a.memoizedState !== null, Po(e, t, a), Hr = F;
          } else
            Po(e, t, a);
          break;
        }
        default: {
          Po(e, t, a);
          return;
        }
      }
    }
    function l1(e) {
      e.memoizedState;
    }
    function u1(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && $x(s);
          }
        }
      }
    }
    function YE(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new YT()), t.forEach(function(i) {
          var u = rk.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Kr)
              if (Ff !== null && Hf !== null)
                Wp(Hf, Ff);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function o1(e, t, a) {
      Ff = a, Hf = e, Qt(t), $E(t, e), Qt(t), Ff = null, Hf = null;
    }
    function fl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            i1(e, t, s);
          } catch (v) {
            fn(s, t, v);
          }
        }
      var f = Sl();
      if (t.subtreeFlags & Dl)
        for (var p = t.child; p !== null; )
          Qt(p), $E(p, e), p = p.sibling;
      Qt(f);
    }
    function $E(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ie:
        case He:
        case et:
        case Pe: {
          if (fl(t, e), Xl(e), u & Et) {
            try {
              sl($l | cr, e, e.return), Ho($l | cr, e);
            } catch (Be) {
              fn(e, e.return, Be);
            }
            if (e.mode & Mt) {
              try {
                ql(), sl(fr | cr, e, e.return);
              } catch (Be) {
                fn(e, e.return, Be);
              }
              Gl(e);
            } else
              try {
                sl(fr | cr, e, e.return);
              } catch (Be) {
                fn(e, e.return, Be);
              }
          }
          return;
        }
        case ue: {
          fl(t, e), Xl(e), u & wn && i !== null && Pf(i, i.return);
          return;
        }
        case te: {
          fl(t, e), Xl(e), u & wn && i !== null && Pf(i, i.return);
          {
            if (e.flags & Da) {
              var s = e.stateNode;
              try {
                Y0(s);
              } catch (Be) {
                fn(e, e.return, Be);
              }
            }
            if (u & Et) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    gx(f, g, y, v, p, e);
                  } catch (Be) {
                    fn(e, e.return, Be);
                  }
              }
            }
          }
          return;
        }
        case Ae: {
          if (fl(t, e), Xl(e), u & Et) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var T = e.stateNode, x = e.memoizedProps, M = i !== null ? i.memoizedProps : x;
            try {
              Sx(T, M, x);
            } catch (Be) {
              fn(e, e.return, Be);
            }
          }
          return;
        }
        case Z: {
          if (fl(t, e), Xl(e), u & Et && i !== null) {
            var A = i.memoizedState;
            if (A.isDehydrated)
              try {
                Yx(t.containerInfo);
              } catch (Be) {
                fn(e, e.return, Be);
              }
          }
          return;
        }
        case ye: {
          fl(t, e), Xl(e);
          return;
        }
        case ce: {
          fl(t, e), Xl(e);
          var F = e.child;
          if (F.flags & Mn) {
            var se = F.stateNode, Le = F.memoizedState, Re = Le !== null;
            if (se.isHidden = Re, Re) {
              var xt = F.alternate !== null && F.alternate.memoizedState !== null;
              xt || B1();
            }
          }
          if (u & Et) {
            try {
              l1(e);
            } catch (Be) {
              fn(e, e.return, Be);
            }
            YE(e);
          }
          return;
        }
        case De: {
          var St = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ht
          ) {
            var D = Hr;
            Hr = D || St, fl(t, e), Hr = D;
          } else
            fl(t, e);
          if (Xl(e), u & Mn) {
            var H = e.stateNode, O = e.memoizedState, X = O !== null, ve = e;
            if (H.isHidden = X, X && !St && (ve.mode & ht) !== _e) {
              we = ve;
              for (var fe = ve.child; fe !== null; )
                we = fe, c1(fe), fe = fe.sibling;
            }
            t1(ve, X);
          }
          return;
        }
        case un: {
          fl(t, e), Xl(e), u & Et && YE(e);
          return;
        }
        case _t:
          return;
        default: {
          fl(t, e), Xl(e);
          return;
        }
      }
    }
    function Xl(e) {
      var t = e.flags;
      if (t & mn) {
        try {
          a1(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        e.flags &= ~mn;
      }
      t & Gr && (e.flags &= ~Gr);
    }
    function s1(e, t, a) {
      Ff = a, Hf = t, we = e, QE(e, t, a), Ff = null, Hf = null;
    }
    function QE(e, t, a) {
      for (var i = (e.mode & ht) !== _e; we !== null; ) {
        var u = we, s = u.child;
        if (u.tag === De && i) {
          var f = u.memoizedState !== null, p = f || Nm;
          if (p) {
            NS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Hr, T = Nm, x = Hr;
            Nm = p, Hr = g, Hr && !x && (we = u, f1(u));
            for (var M = s; M !== null; )
              we = M, QE(
                M,
                // New root; bubble back up to here and stop.
                t,
                a
              ), M = M.sibling;
            we = u, Nm = T, Hr = x, NS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Ol) !== ke && s !== null ? (s.return = u, we = s) : NS(e, t, a);
      }
    }
    function NS(e, t, a) {
      for (; we !== null; ) {
        var i = we;
        if ((i.flags & Ol) !== ke) {
          var u = i.alternate;
          Qt(i);
          try {
            JT(t, u, i, a);
          } catch (f) {
            fn(i, i.return, f);
          }
          cn();
        }
        if (i === e) {
          we = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, we = s;
          return;
        }
        we = i.return;
      }
    }
    function c1(e) {
      for (; we !== null; ) {
        var t = we, a = t.child;
        switch (t.tag) {
          case ie:
          case He:
          case et:
          case Pe: {
            if (t.mode & Mt)
              try {
                ql(), sl(fr, t, t.return);
              } finally {
                Gl(t);
              }
            else
              sl(fr, t, t.return);
            break;
          }
          case ue: {
            Pf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && DS(t, t.return, i);
            break;
          }
          case te: {
            Pf(t, t.return);
            break;
          }
          case De: {
            var u = t.memoizedState !== null;
            if (u) {
              WE(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, we = a) : WE(e);
      }
    }
    function WE(e) {
      for (; we !== null; ) {
        var t = we;
        if (t === e) {
          we = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, we = a;
          return;
        }
        we = t.return;
      }
    }
    function f1(e) {
      for (; we !== null; ) {
        var t = we, a = t.child;
        if (t.tag === De) {
          var i = t.memoizedState !== null;
          if (i) {
            GE(e);
            continue;
          }
        }
        a !== null ? (a.return = t, we = a) : GE(e);
      }
    }
    function GE(e) {
      for (; we !== null; ) {
        var t = we;
        Qt(t);
        try {
          e1(t);
        } catch (i) {
          fn(t, t.return, i);
        }
        if (cn(), t === e) {
          we = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, we = a;
          return;
        }
        we = t.return;
      }
    }
    function d1(e, t, a, i) {
      we = t, p1(t, e, a, i);
    }
    function p1(e, t, a, i) {
      for (; we !== null; ) {
        var u = we, s = u.child;
        (u.subtreeFlags & Gi) !== ke && s !== null ? (s.return = u, we = s) : v1(e, t, a, i);
      }
    }
    function v1(e, t, a, i) {
      for (; we !== null; ) {
        var u = we;
        if ((u.flags & Wr) !== ke) {
          Qt(u);
          try {
            h1(t, u, a, i);
          } catch (f) {
            fn(u, u.return, f);
          }
          cn();
        }
        if (u === e) {
          we = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, we = s;
          return;
        }
        we = u.return;
      }
    }
    function h1(e, t, a, i) {
      switch (t.tag) {
        case ie:
        case He:
        case Pe: {
          if (t.mode & Mt) {
            Kg();
            try {
              Ho(jr | cr, t);
            } finally {
              Xg(t);
            }
          } else
            Ho(jr | cr, t);
          break;
        }
      }
    }
    function m1(e) {
      we = e, y1();
    }
    function y1() {
      for (; we !== null; ) {
        var e = we, t = e.child;
        if ((we.flags & _a) !== ke) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              we = u, w1(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            we = e;
          }
        }
        (e.subtreeFlags & Gi) !== ke && t !== null ? (t.return = e, we = t) : g1();
      }
    }
    function g1() {
      for (; we !== null; ) {
        var e = we;
        (e.flags & Wr) !== ke && (Qt(e), S1(e), cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, we = t;
          return;
        }
        we = e.return;
      }
    }
    function S1(e) {
      switch (e.tag) {
        case ie:
        case He:
        case Pe: {
          e.mode & Mt ? (Kg(), sl(jr | cr, e, e.return), Xg(e)) : sl(jr | cr, e, e.return);
          break;
        }
      }
    }
    function w1(e, t) {
      for (; we !== null; ) {
        var a = we;
        Qt(a), C1(a, t), cn();
        var i = a.child;
        i !== null ? (i.return = a, we = i) : E1(e);
      }
    }
    function E1(e) {
      for (; we !== null; ) {
        var t = we, a = t.sibling, i = t.return;
        if (PE(t), t === e) {
          we = null;
          return;
        }
        if (a !== null) {
          a.return = i, we = a;
          return;
        }
        we = i;
      }
    }
    function C1(e, t) {
      switch (e.tag) {
        case ie:
        case He:
        case Pe: {
          e.mode & Mt ? (Kg(), sl(jr, e, t), Xg(e)) : sl(jr, e, t);
          break;
        }
      }
    }
    function b1(e) {
      switch (e.tag) {
        case ie:
        case He:
        case Pe: {
          try {
            Ho(fr | cr, e);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case ue: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
      }
    }
    function x1(e) {
      switch (e.tag) {
        case ie:
        case He:
        case Pe: {
          try {
            Ho(jr | cr, e);
          } catch (t) {
            fn(e, e.return, t);
          }
          break;
        }
      }
    }
    function R1(e) {
      switch (e.tag) {
        case ie:
        case He:
        case Pe: {
          try {
            sl(fr | cr, e, e.return);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case ue: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && DS(e, e.return, t);
          break;
        }
      }
    }
    function T1(e) {
      switch (e.tag) {
        case ie:
        case He:
        case Pe:
          try {
            sl(jr | cr, e, e.return);
          } catch (t) {
            fn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Ap = Symbol.for;
      Ap("selector.component"), Ap("selector.has_pseudo_class"), Ap("selector.role"), Ap("selector.test_id"), Ap("selector.text");
    }
    var k1 = [];
    function _1() {
      k1.forEach(function(e) {
        return e();
      });
    }
    var D1 = N.ReactCurrentActQueue;
    function O1(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function qE() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && D1.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var L1 = Math.ceil, MS = N.ReactCurrentDispatcher, zS = N.ReactCurrentOwner, Vr = N.ReactCurrentBatchConfig, dl = N.ReactCurrentActQueue, vr = (
      /*             */
      0
    ), XE = (
      /*               */
      1
    ), Br = (
      /*                */
      2
    ), ji = (
      /*                */
      4
    ), Bu = 0, jp = 1, tc = 2, zm = 3, Fp = 4, KE = 5, US = 6, bt = vr, Sa = null, Dn = null, hr = Y, Kl = Y, AS = Oo(Y), mr = Bu, Hp = null, Um = Y, Pp = Y, Am = Y, Vp = null, Pa = null, jS = 0, ZE = 500, JE = 1 / 0, N1 = 500, Iu = null;
    function Bp() {
      JE = Qn() + N1;
    }
    function eC() {
      return JE;
    }
    var jm = !1, FS = null, Vf = null, nc = !1, Vo = null, Ip = Y, HS = [], PS = null, M1 = 50, Yp = 0, VS = null, BS = !1, Fm = !1, z1 = 50, Bf = 0, Hm = null, $p = Zt, Pm = Y, tC = !1;
    function Vm() {
      return Sa;
    }
    function wa() {
      return (bt & (Br | ji)) !== vr ? Qn() : ($p !== Zt || ($p = Qn()), $p);
    }
    function Bo(e) {
      var t = e.mode;
      if ((t & ht) === _e)
        return Fe;
      if ((bt & Br) !== vr && hr !== Y)
        return bs(hr);
      var a = DR() !== _R;
      if (a) {
        if (Vr.transition !== null) {
          var i = Vr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Pm === Ot && (Pm = Md()), Pm;
      }
      var u = Ua();
      if (u !== Ot)
        return u;
      var s = px();
      return s;
    }
    function U1(e) {
      var t = e.mode;
      return (t & ht) === _e ? Fe : $v();
    }
    function yr(e, t, a, i) {
      ik(), tC && S("useInsertionEffect must not schedule updates."), BS && (Fm = !0), So(e, a, i), (bt & Br) !== Y && e === Sa ? ok(t) : (Kr && Ts(e, t, a), sk(t), e === Sa && ((bt & Br) === vr && (Pp = at(Pp, a)), mr === Fp && Io(e, hr)), Va(e, i), a === Fe && bt === vr && (t.mode & ht) === _e && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !dl.isBatchingLegacy && (Bp(), tw()));
    }
    function A1(e, t, a) {
      var i = e.current;
      i.lanes = t, So(e, t, a), Va(e, a);
    }
    function j1(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (bt & Br) !== vr
      );
    }
    function Va(e, t) {
      var a = e.callbackNode;
      Xc(e, t);
      var i = qc(e, e === Sa ? hr : Y);
      if (i === Y) {
        a !== null && yC(a), e.callbackNode = null, e.callbackPriority = Ot;
        return;
      }
      var u = Ul(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(dl.current !== null && a !== qS)) {
        a == null && s !== Fe && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && yC(a);
      var f;
      if (u === Fe)
        e.tag === Lo ? (dl.isBatchingLegacy !== null && (dl.didScheduleLegacyUpdate = !0), fR(aC.bind(null, e))) : ew(aC.bind(null, e)), dl.current !== null ? dl.current.push(No) : hx(function() {
          (bt & (Br | ji)) === vr && No();
        }), f = null;
      else {
        var p;
        switch (Zv(i)) {
          case Lr:
            p = ss;
            break;
          case ki:
            p = Ll;
            break;
          case Ma:
            p = qi;
            break;
          case za:
            p = mu;
            break;
          default:
            p = qi;
            break;
        }
        f = XS(p, nC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function nC(e, t) {
      if (tT(), $p = Zt, Pm = Y, (bt & (Br | ji)) !== vr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = $u();
      if (i && e.callbackNode !== a)
        return null;
      var u = qc(e, e === Sa ? hr : Y);
      if (u === Y)
        return null;
      var s = !Zc(e, u) && !Yv(e, u) && !t, f = s ? W1(e, u) : Im(e, u);
      if (f !== Bu) {
        if (f === tc) {
          var p = Kc(e);
          p !== Y && (u = p, f = IS(e, p));
        }
        if (f === jp) {
          var v = Hp;
          throw rc(e, Y), Io(e, u), Va(e, Qn()), v;
        }
        if (f === US)
          Io(e, u);
        else {
          var y = !Zc(e, u), g = e.current.alternate;
          if (y && !H1(g)) {
            if (f = Im(e, u), f === tc) {
              var T = Kc(e);
              T !== Y && (u = T, f = IS(e, T));
            }
            if (f === jp) {
              var x = Hp;
              throw rc(e, Y), Io(e, u), Va(e, Qn()), x;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, F1(e, f, u);
        }
      }
      return Va(e, Qn()), e.callbackNode === a ? nC.bind(null, e) : null;
    }
    function IS(e, t) {
      var a = Vp;
      if (tf(e)) {
        var i = rc(e, t);
        i.flags |= Er, aR(e.containerInfo);
      }
      var u = Im(e, t);
      if (u !== tc) {
        var s = Pa;
        Pa = a, s !== null && rC(s);
      }
      return u;
    }
    function rC(e) {
      Pa === null ? Pa = e : Pa.push.apply(Pa, e);
    }
    function F1(e, t, a) {
      switch (t) {
        case Bu:
        case jp:
          throw new Error("Root did not complete. This is a bug in React.");
        case tc: {
          ac(e, Pa, Iu);
          break;
        }
        case zm: {
          if (Io(e, a), ku(a) && // do not delay if we're inside an act() scope
          !gC()) {
            var i = jS + ZE - Qn();
            if (i > 10) {
              var u = qc(e, Y);
              if (u !== Y)
                break;
              var s = e.suspendedLanes;
              if (!_u(s, a)) {
                wa(), Jc(e, s);
                break;
              }
              e.timeoutHandle = Py(ac.bind(null, e, Pa, Iu), i);
              break;
            }
          }
          ac(e, Pa, Iu);
          break;
        }
        case Fp: {
          if (Io(e, a), Ld(a))
            break;
          if (!gC()) {
            var f = ai(e, a), p = f, v = Qn() - p, y = ak(v) - v;
            if (y > 10) {
              e.timeoutHandle = Py(ac.bind(null, e, Pa, Iu), y);
              break;
            }
          }
          ac(e, Pa, Iu);
          break;
        }
        case KE: {
          ac(e, Pa, Iu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function H1(e) {
      for (var t = e; ; ) {
        if (t.flags & vo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!G(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & vo && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Io(e, t) {
      t = xs(t, Am), t = xs(t, Pp), Gv(e, t);
    }
    function aC(e) {
      if (nT(), (bt & (Br | ji)) !== vr)
        throw new Error("Should not already be working.");
      $u();
      var t = qc(e, Y);
      if (!Jr(t, Fe))
        return Va(e, Qn()), null;
      var a = Im(e, t);
      if (e.tag !== Lo && a === tc) {
        var i = Kc(e);
        i !== Y && (t = i, a = IS(e, i));
      }
      if (a === jp) {
        var u = Hp;
        throw rc(e, Y), Io(e, t), Va(e, Qn()), u;
      }
      if (a === US)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ac(e, Pa, Iu), Va(e, Qn()), null;
    }
    function P1(e, t) {
      t !== Y && (ef(e, at(t, Fe)), Va(e, Qn()), (bt & (Br | ji)) === vr && (Bp(), No()));
    }
    function YS(e, t) {
      var a = bt;
      bt |= XE;
      try {
        return e(t);
      } finally {
        bt = a, bt === vr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !dl.isBatchingLegacy && (Bp(), tw());
      }
    }
    function V1(e, t, a, i, u) {
      var s = Ua(), f = Vr.transition;
      try {
        return Vr.transition = null, jn(Lr), e(t, a, i, u);
      } finally {
        jn(s), Vr.transition = f, bt === vr && Bp();
      }
    }
    function Yu(e) {
      Vo !== null && Vo.tag === Lo && (bt & (Br | ji)) === vr && $u();
      var t = bt;
      bt |= XE;
      var a = Vr.transition, i = Ua();
      try {
        return Vr.transition = null, jn(Lr), e ? e() : void 0;
      } finally {
        jn(i), Vr.transition = a, bt = t, (bt & (Br | ji)) === vr && No();
      }
    }
    function iC() {
      return (bt & (Br | ji)) !== vr;
    }
    function Bm(e, t) {
      aa(AS, Kl, e), Kl = at(Kl, t);
    }
    function $S(e) {
      Kl = AS.current, ra(AS, e);
    }
    function rc(e, t) {
      e.finishedWork = null, e.finishedLanes = Y;
      var a = e.timeoutHandle;
      if (a !== Vy && (e.timeoutHandle = Vy, vx(a)), Dn !== null)
        for (var i = Dn.return; i !== null; ) {
          var u = i.alternate;
          zE(u, i), i = i.return;
        }
      Sa = e;
      var s = ic(e.current, null);
      return Dn = s, hr = Kl = t, mr = Bu, Hp = null, Um = Y, Pp = Y, Am = Y, Vp = null, Pa = null, AR(), al.discardPendingWarnings(), s;
    }
    function lC(e, t) {
      do {
        var a = Dn;
        try {
          if (Zh(), Ow(), cn(), zS.current = null, a === null || a.return === null) {
            mr = jp, Hp = t, Dn = null;
            return;
          }
          if (Ue && a.mode & Mt && km(a, !0), Ve)
            if (ha(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Ti(a, i, hr);
            } else
              fs(a, t, hr);
          fT(e, a.return, a, t, hr), cC(a);
        } catch (u) {
          t = u, Dn === a && a !== null ? (a = a.return, Dn = a) : a = Dn;
          continue;
        }
        return;
      } while (!0);
    }
    function uC() {
      var e = MS.current;
      return MS.current = Cm, e === null ? Cm : e;
    }
    function oC(e) {
      MS.current = e;
    }
    function B1() {
      jS = Qn();
    }
    function Qp(e) {
      Um = at(e, Um);
    }
    function I1() {
      mr === Bu && (mr = zm);
    }
    function QS() {
      (mr === Bu || mr === zm || mr === tc) && (mr = Fp), Sa !== null && (Cs(Um) || Cs(Pp)) && Io(Sa, hr);
    }
    function Y1(e) {
      mr !== Fp && (mr = tc), Vp === null ? Vp = [e] : Vp.push(e);
    }
    function $1() {
      return mr === Bu;
    }
    function Im(e, t) {
      var a = bt;
      bt |= Br;
      var i = uC();
      if (Sa !== e || hr !== t) {
        if (Kr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Wp(e, hr), u.clear()), qv(e, t);
        }
        Iu = jd(), rc(e, t);
      }
      wu(t);
      do
        try {
          Q1();
          break;
        } catch (s) {
          lC(e, s);
        }
      while (!0);
      if (Zh(), bt = a, oC(i), Dn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Lc(), Sa = null, hr = Y, mr;
    }
    function Q1() {
      for (; Dn !== null; )
        sC(Dn);
    }
    function W1(e, t) {
      var a = bt;
      bt |= Br;
      var i = uC();
      if (Sa !== e || hr !== t) {
        if (Kr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Wp(e, hr), u.clear()), qv(e, t);
        }
        Iu = jd(), Bp(), rc(e, t);
      }
      wu(t);
      do
        try {
          G1();
          break;
        } catch (s) {
          lC(e, s);
        }
      while (!0);
      return Zh(), oC(i), bt = a, Dn !== null ? (Pv(), Bu) : (Lc(), Sa = null, hr = Y, mr);
    }
    function G1() {
      for (; Dn !== null && !md(); )
        sC(Dn);
    }
    function sC(e) {
      var t = e.alternate;
      Qt(e);
      var a;
      (e.mode & Mt) !== _e ? (qg(e), a = WS(t, e, Kl), km(e, !0)) : a = WS(t, e, Kl), cn(), e.memoizedProps = e.pendingProps, a === null ? cC(e) : Dn = a, zS.current = null;
    }
    function cC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & os) === ke) {
          Qt(t);
          var u = void 0;
          if ((t.mode & Mt) === _e ? u = ME(a, t, Kl) : (qg(t), u = ME(a, t, Kl), km(t, !1)), cn(), u !== null) {
            Dn = u;
            return;
          }
        } else {
          var s = IT(a, t);
          if (s !== null) {
            s.flags &= zv, Dn = s;
            return;
          }
          if ((t.mode & Mt) !== _e) {
            km(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= os, i.subtreeFlags = ke, i.deletions = null;
          else {
            mr = US, Dn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Dn = v;
          return;
        }
        t = i, Dn = t;
      } while (t !== null);
      mr === Bu && (mr = KE);
    }
    function ac(e, t, a) {
      var i = Ua(), u = Vr.transition;
      try {
        Vr.transition = null, jn(Lr), q1(e, t, a, i);
      } finally {
        Vr.transition = u, jn(i);
      }
      return null;
    }
    function q1(e, t, a, i) {
      do
        $u();
      while (Vo !== null);
      if (lk(), (bt & (Br | ji)) !== vr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Cd(s), u === null)
        return bd(), null;
      if (s === Y && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Y, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Ot;
      var f = at(u.lanes, u.childLanes);
      Ud(e, f), e === Sa && (Sa = null, Dn = null, hr = Y), ((u.subtreeFlags & Gi) !== ke || (u.flags & Gi) !== ke) && (nc || (nc = !0, PS = a, XS(qi, function() {
        return $u(), null;
      })));
      var p = (u.subtreeFlags & (_l | Dl | Ol | Gi)) !== ke, v = (u.flags & (_l | Dl | Ol | Gi)) !== ke;
      if (p || v) {
        var y = Vr.transition;
        Vr.transition = null;
        var g = Ua();
        jn(Lr);
        var T = bt;
        bt |= ji, zS.current = null, GT(e, u), tE(), o1(e, u, s), ux(e.containerInfo), e.current = u, ds(s), s1(u, e, s), ps(), yd(), bt = T, jn(g), Vr.transition = y;
      } else
        e.current = u, tE();
      var x = nc;
      if (nc ? (nc = !1, Vo = e, Ip = s) : (Bf = 0, Hm = null), f = e.pendingLanes, f === Y && (Vf = null), x || vC(e.current, !1), Sd(u.stateNode, i), Kr && e.memoizedUpdaters.clear(), _1(), Va(e, Qn()), t !== null)
        for (var M = e.onRecoverableError, A = 0; A < t.length; A++) {
          var F = t[A], se = F.stack, Le = F.digest;
          M(F.value, {
            componentStack: se,
            digest: Le
          });
        }
      if (jm) {
        jm = !1;
        var Re = FS;
        throw FS = null, Re;
      }
      return Jr(Ip, Fe) && e.tag !== Lo && $u(), f = e.pendingLanes, Jr(f, Fe) ? (eT(), e === VS ? Yp++ : (Yp = 0, VS = e)) : Yp = 0, No(), bd(), null;
    }
    function $u() {
      if (Vo !== null) {
        var e = Zv(Ip), t = _s(Ma, e), a = Vr.transition, i = Ua();
        try {
          return Vr.transition = null, jn(t), K1();
        } finally {
          jn(i), Vr.transition = a;
        }
      }
      return !1;
    }
    function X1(e) {
      HS.push(e), nc || (nc = !0, XS(qi, function() {
        return $u(), null;
      }));
    }
    function K1() {
      if (Vo === null)
        return !1;
      var e = PS;
      PS = null;
      var t = Vo, a = Ip;
      if (Vo = null, Ip = Y, (bt & (Br | ji)) !== vr)
        throw new Error("Cannot flush passive effects while already rendering.");
      BS = !0, Fm = !1, Su(a);
      var i = bt;
      bt |= ji, m1(t.current), d1(t, t.current, a, e);
      {
        var u = HS;
        HS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          ZT(t, f);
        }
      }
      Td(), vC(t.current, !0), bt = i, No(), Fm ? t === Hm ? Bf++ : (Bf = 0, Hm = t) : Bf = 0, BS = !1, Fm = !1, wd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function fC(e) {
      return Vf !== null && Vf.has(e);
    }
    function Z1(e) {
      Vf === null ? Vf = /* @__PURE__ */ new Set([e]) : Vf.add(e);
    }
    function J1(e) {
      jm || (jm = !0, FS = e);
    }
    var ek = J1;
    function dC(e, t, a) {
      var i = Js(a, t), u = sE(e, i, Fe), s = zo(e, u, Fe), f = wa();
      s !== null && (So(s, Fe, f), Va(s, f));
    }
    function fn(e, t, a) {
      if ($T(a), Gp(!1), e.tag === Z) {
        dC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === Z) {
          dC(i, e, a);
          return;
        } else if (i.tag === ue) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !fC(s)) {
            var f = Js(a, e), p = pS(i, f, Fe), v = zo(i, p, Fe), y = wa();
            v !== null && (So(v, Fe, y), Va(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function tk(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = wa();
      Jc(e, a), ck(e), Sa === e && _u(hr, a) && (mr === Fp || mr === zm && ku(hr) && Qn() - jS < ZE ? rc(e, Y) : Am = at(Am, a)), Va(e, u);
    }
    function pC(e, t) {
      t === Ot && (t = U1(e));
      var a = wa(), i = Fa(e, t);
      i !== null && (So(i, t, a), Va(i, a));
    }
    function nk(e) {
      var t = e.memoizedState, a = Ot;
      t !== null && (a = t.retryLane), pC(e, a);
    }
    function rk(e, t) {
      var a = Ot, i;
      switch (e.tag) {
        case ce:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case un:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), pC(e, a);
    }
    function ak(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : L1(e / 1960) * 1960;
    }
    function ik() {
      if (Yp > M1)
        throw Yp = 0, VS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Bf > z1 && (Bf = 0, Hm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function lk() {
      al.flushLegacyContextWarning(), al.flushPendingUnsafeLifecycleWarnings();
    }
    function vC(e, t) {
      Qt(e), Ym(e, kl, R1), t && Ym(e, bi, T1), Ym(e, kl, b1), t && Ym(e, bi, x1), cn();
    }
    function Ym(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== ke ? i = i.child : ((i.flags & t) !== ke && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var $m = null;
    function hC(e) {
      {
        if ((bt & Br) !== vr || !(e.mode & ht))
          return;
        var t = e.tag;
        if (t !== Ge && t !== Z && t !== ue && t !== ie && t !== He && t !== et && t !== Pe)
          return;
        var a = Ye(e) || "ReactComponent";
        if ($m !== null) {
          if ($m.has(a))
            return;
          $m.add(a);
        } else
          $m = /* @__PURE__ */ new Set([a]);
        var i = ir;
        try {
          Qt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Qt(e) : cn();
        }
      }
    }
    var WS;
    {
      var uk = null;
      WS = function(e, t, a) {
        var i = bC(uk, t);
        try {
          return _E(e, t, a);
        } catch (s) {
          if (SR() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Zh(), Ow(), zE(e, t), bC(t, i), t.mode & Mt && qg(t), Tl(null, _E, null, e, t, a), Qi()) {
            var u = us();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var mC = !1, GS;
    GS = /* @__PURE__ */ new Set();
    function ok(e) {
      if (mi && !KR())
        switch (e.tag) {
          case ie:
          case He:
          case Pe: {
            var t = Dn && Ye(Dn) || "Unknown", a = t;
            if (!GS.has(a)) {
              GS.add(a);
              var i = Ye(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ue: {
            mC || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), mC = !0);
            break;
          }
        }
    }
    function Wp(e, t) {
      if (Kr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Ts(e, i, t);
        });
      }
    }
    var qS = {};
    function XS(e, t) {
      {
        var a = dl.current;
        return a !== null ? (a.push(t), qS) : hd(e, t);
      }
    }
    function yC(e) {
      if (e !== qS)
        return Av(e);
    }
    function gC() {
      return dl.current !== null;
    }
    function sk(e) {
      {
        if (e.mode & ht) {
          if (!qE())
            return;
        } else if (!O1() || bt !== vr || e.tag !== ie && e.tag !== He && e.tag !== Pe)
          return;
        if (dl.current === null) {
          var t = ir;
          try {
            Qt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ye(e));
          } finally {
            t ? Qt(e) : cn();
          }
        }
      }
    }
    function ck(e) {
      e.tag !== Lo && qE() && dl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Gp(e) {
      tC = e;
    }
    var Fi = null, If = null, fk = function(e) {
      Fi = e;
    };
    function Yf(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function KS(e) {
      return Yf(e);
    }
    function ZS(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Yf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: I,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function SC(e, t) {
      {
        if (Fi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ue: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ie: {
            (typeof i == "function" || s === $e) && (u = !0);
            break;
          }
          case He: {
            (s === I || s === $e) && (u = !0);
            break;
          }
          case et:
          case Pe: {
            (s === tt || s === $e) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Fi(a);
          if (f !== void 0 && f === Fi(i))
            return !0;
        }
        return !1;
      }
    }
    function wC(e) {
      {
        if (Fi === null || typeof WeakSet != "function")
          return;
        If === null && (If = /* @__PURE__ */ new WeakSet()), If.add(e);
      }
    }
    var dk = function(e, t) {
      {
        if (Fi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        $u(), Yu(function() {
          JS(e.current, i, a);
        });
      }
    }, pk = function(e, t) {
      {
        if (e.context !== ui)
          return;
        $u(), Yu(function() {
          qp(t, e, null, null);
        });
      }
    };
    function JS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ie:
          case Pe:
          case ue:
            v = p;
            break;
          case He:
            v = p.render;
            break;
        }
        if (Fi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var T = Fi(v);
          T !== void 0 && (a.has(T) ? g = !0 : t.has(T) && (f === ue ? g = !0 : y = !0));
        }
        if (If !== null && (If.has(e) || i !== null && If.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var x = Fa(e, Fe);
          x !== null && yr(x, e, Fe, Zt);
        }
        u !== null && !g && JS(u, t, a), s !== null && JS(s, t, a);
      }
    }
    var vk = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return e0(e.current, i, a), a;
      }
    };
    function e0(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ie:
          case Pe:
          case ue:
            p = f;
            break;
          case He:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? hk(e, a) : i !== null && e0(i, t, a), u !== null && e0(u, t, a);
      }
    }
    function hk(e, t) {
      {
        var a = mk(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case te:
              t.add(i.stateNode);
              return;
            case ye:
              t.add(i.stateNode.containerInfo);
              return;
            case Z:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function mk(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === te)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var t0;
    {
      t0 = !1;
      try {
        var EC = Object.preventExtensions({});
      } catch {
        t0 = !0;
      }
    }
    function yk(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = ke, this.subtreeFlags = ke, this.deletions = null, this.lanes = Y, this.childLanes = Y, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !t0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var oi = function(e, t, a, i) {
      return new yk(e, t, a, i);
    };
    function n0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function gk(e) {
      return typeof e == "function" && !n0(e) && e.defaultProps === void 0;
    }
    function Sk(e) {
      if (typeof e == "function")
        return n0(e) ? ue : ie;
      if (e != null) {
        var t = e.$$typeof;
        if (t === I)
          return He;
        if (t === tt)
          return et;
      }
      return Ge;
    }
    function ic(e, t) {
      var a = e.alternate;
      a === null ? (a = oi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = ke, a.subtreeFlags = ke, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & zn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Ge:
        case ie:
        case Pe:
          a.type = Yf(e.type);
          break;
        case ue:
          a.type = KS(e.type);
          break;
        case He:
          a.type = ZS(e.type);
          break;
      }
      return a;
    }
    function wk(e, t) {
      e.flags &= zn | mn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Y, e.lanes = t, e.child = null, e.subtreeFlags = ke, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = ke, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function Ek(e, t, a) {
      var i;
      return e === Bh ? (i = ht, t === !0 && (i |= qt, i |= zt)) : i = _e, Kr && (i |= Mt), oi(Z, null, null, i);
    }
    function r0(e, t, a, i, u, s) {
      var f = Ge, p = e;
      if (typeof e == "function")
        n0(e) ? (f = ue, p = KS(p)) : p = Yf(p);
      else if (typeof e == "string")
        f = te;
      else
        e: switch (e) {
          case di:
            return Yo(a.children, u, s, t);
          case Wa:
            f = Je, u |= qt, (u & ht) !== _e && (u |= zt);
            break;
          case pi:
            return Ck(a, u, s, t);
          case le:
            return bk(a, u, s, t);
          case me:
            return xk(a, u, s, t);
          case bn:
            return CC(a, u, s, t);
          case nn:
          case yt:
          case sn:
          case ar:
          case vt:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case vi:
                  f = rt;
                  break e;
                case C:
                  f = Rt;
                  break e;
                case I:
                  f = He, p = ZS(p);
                  break e;
                case tt:
                  f = et;
                  break e;
                case $e:
                  f = ln, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Ye(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = oi(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function a0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = r0(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Yo(e, t, a, i) {
      var u = oi(je, e, i, t);
      return u.lanes = a, u;
    }
    function Ck(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = oi(mt, e, i, t | Mt);
      return u.elementType = pi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function bk(e, t, a, i) {
      var u = oi(ce, e, i, t);
      return u.elementType = le, u.lanes = a, u;
    }
    function xk(e, t, a, i) {
      var u = oi(un, e, i, t);
      return u.elementType = me, u.lanes = a, u;
    }
    function CC(e, t, a, i) {
      var u = oi(De, e, i, t);
      u.elementType = bn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function i0(e, t, a) {
      var i = oi(Ae, e, null, t);
      return i.lanes = a, i;
    }
    function Rk() {
      var e = oi(te, null, null, _e);
      return e.elementType = "DELETED", e;
    }
    function Tk(e) {
      var t = oi(Jt, null, null, _e);
      return t.stateNode = e, t;
    }
    function l0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = oi(ye, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function bC(e, t) {
      return e === null && (e = oi(Ge, null, null, _e)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function kk(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Vy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Ot, this.eventTimes = Rs(Y), this.expirationTimes = Rs(Zt), this.pendingLanes = Y, this.suspendedLanes = Y, this.pingedLanes = Y, this.expiredLanes = Y, this.mutableReadLanes = Y, this.finishedLanes = Y, this.entangledLanes = Y, this.entanglements = Rs(Y), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Eu; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Bh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Lo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function xC(e, t, a, i, u, s, f, p, v, y) {
      var g = new kk(e, t, a, p, v), T = Ek(t, s);
      g.current = T, T.stateNode = g;
      {
        var x = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        T.memoizedState = x;
      }
      return Sg(T), g;
    }
    var u0 = "18.3.1";
    function _k(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Yr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: rr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var o0, s0;
    o0 = !1, s0 = {};
    function RC(e) {
      if (!e)
        return ui;
      var t = po(e), a = cR(t);
      if (t.tag === ue) {
        var i = t.type;
        if (Yl(i))
          return Z0(t, i, a);
      }
      return a;
    }
    function Dk(e, t) {
      {
        var a = po(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = qr(a);
        if (u === null)
          return null;
        if (u.mode & qt) {
          var s = Ye(a) || "Component";
          if (!s0[s]) {
            s0[s] = !0;
            var f = ir;
            try {
              Qt(u), a.mode & qt ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Qt(f) : cn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function TC(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return xC(e, t, v, y, a, i, u, s, f);
    }
    function kC(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, T = xC(a, i, g, e, u, s, f, p, v);
      T.context = RC(null);
      var x = T.current, M = wa(), A = Bo(x), F = Pu(M, A);
      return F.callback = t ?? null, zo(x, F, A), A1(T, A, M), T;
    }
    function qp(e, t, a, i) {
      gd(t, e);
      var u = t.current, s = wa(), f = Bo(u);
      gn(f);
      var p = RC(a);
      t.context === null ? t.context = p : t.pendingContext = p, mi && ir !== null && !o0 && (o0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ye(ir) || "Unknown"));
      var v = Pu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = zo(u, v, f);
      return y !== null && (yr(y, u, f, s), rm(y, u, f)), f;
    }
    function Qm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case te:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Ok(e) {
      switch (e.tag) {
        case Z: {
          var t = e.stateNode;
          if (tf(t)) {
            var a = Bv(t);
            P1(t, a);
          }
          break;
        }
        case ce: {
          Yu(function() {
            var u = Fa(e, Fe);
            if (u !== null) {
              var s = wa();
              yr(u, e, Fe, s);
            }
          });
          var i = Fe;
          c0(e, i);
          break;
        }
      }
    }
    function _C(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Wv(a.retryLane, t));
    }
    function c0(e, t) {
      _C(e, t);
      var a = e.alternate;
      a && _C(a, t);
    }
    function Lk(e) {
      if (e.tag === ce) {
        var t = Ss, a = Fa(e, t);
        if (a !== null) {
          var i = wa();
          yr(a, e, t, i);
        }
        c0(e, t);
      }
    }
    function Nk(e) {
      if (e.tag === ce) {
        var t = Bo(e), a = Fa(e, t);
        if (a !== null) {
          var i = wa();
          yr(a, e, t, i);
        }
        c0(e, t);
      }
    }
    function DC(e) {
      var t = dn(e);
      return t === null ? null : t.stateNode;
    }
    var OC = function(e) {
      return null;
    };
    function Mk(e) {
      return OC(e);
    }
    var LC = function(e) {
      return !1;
    };
    function zk(e) {
      return LC(e);
    }
    var NC = null, MC = null, zC = null, UC = null, AC = null, jC = null, FC = null, HC = null, PC = null;
    {
      var VC = function(e, t, a) {
        var i = t[a], u = ct(e) ? e.slice() : lt({}, e);
        return a + 1 === t.length ? (ct(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = VC(e[i], t, a + 1), u);
      }, BC = function(e, t) {
        return VC(e, t, 0);
      }, IC = function(e, t, a, i) {
        var u = t[i], s = ct(e) ? e.slice() : lt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], ct(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = IC(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, YC = function(e, t, a) {
        if (t.length !== a.length) {
          Ze("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Ze("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return IC(e, t, a, 0);
      }, $C = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = ct(e) ? e.slice() : lt({}, e);
        return s[u] = $C(e[u], t, a + 1, i), s;
      }, QC = function(e, t, a) {
        return $C(e, t, 0, a);
      }, f0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      NC = function(e, t, a, i) {
        var u = f0(e, t);
        if (u !== null) {
          var s = QC(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = lt({}, e.memoizedProps);
          var f = Fa(e, Fe);
          f !== null && yr(f, e, Fe, Zt);
        }
      }, MC = function(e, t, a) {
        var i = f0(e, t);
        if (i !== null) {
          var u = BC(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = lt({}, e.memoizedProps);
          var s = Fa(e, Fe);
          s !== null && yr(s, e, Fe, Zt);
        }
      }, zC = function(e, t, a, i) {
        var u = f0(e, t);
        if (u !== null) {
          var s = YC(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = lt({}, e.memoizedProps);
          var f = Fa(e, Fe);
          f !== null && yr(f, e, Fe, Zt);
        }
      }, UC = function(e, t, a) {
        e.pendingProps = QC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Fa(e, Fe);
        i !== null && yr(i, e, Fe, Zt);
      }, AC = function(e, t) {
        e.pendingProps = BC(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Fa(e, Fe);
        a !== null && yr(a, e, Fe, Zt);
      }, jC = function(e, t, a) {
        e.pendingProps = YC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Fa(e, Fe);
        i !== null && yr(i, e, Fe, Zt);
      }, FC = function(e) {
        var t = Fa(e, Fe);
        t !== null && yr(t, e, Fe, Zt);
      }, HC = function(e) {
        OC = e;
      }, PC = function(e) {
        LC = e;
      };
    }
    function Uk(e) {
      var t = qr(e);
      return t === null ? null : t.stateNode;
    }
    function Ak(e) {
      return null;
    }
    function jk() {
      return ir;
    }
    function Fk(e) {
      var t = e.findFiberByHostInstance, a = N.ReactCurrentDispatcher;
      return mo({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: NC,
        overrideHookStateDeletePath: MC,
        overrideHookStateRenamePath: zC,
        overrideProps: UC,
        overridePropsDeletePath: AC,
        overridePropsRenamePath: jC,
        setErrorHandler: HC,
        setSuspenseHandler: PC,
        scheduleUpdate: FC,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Uk,
        findFiberByHostInstance: t || Ak,
        // React Refresh
        findHostInstancesForRefresh: vk,
        scheduleRefresh: dk,
        scheduleRoot: pk,
        setRefreshHandler: fk,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: jk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: u0
      });
    }
    var WC = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function d0(e) {
      this._internalRoot = e;
    }
    Wm.prototype.render = d0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Gm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Nn) {
          var i = DC(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      qp(e, t, null, null);
    }, Wm.prototype.unmount = d0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        iC() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Yu(function() {
          qp(null, e, null, null);
        }), W0(t);
      }
    };
    function Hk(e, t) {
      if (!Gm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      GC(e);
      var a = !1, i = !1, u = "", s = WC;
      t != null && (t.hydrate ? Ze("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === kr && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = TC(e, Bh, null, a, i, u, s);
      Uh(f.current, e);
      var p = e.nodeType === Nn ? e.parentNode : e;
      return tp(p), new d0(f);
    }
    function Wm(e) {
      this._internalRoot = e;
    }
    function Pk(e) {
      e && rh(e);
    }
    Wm.prototype.unstable_scheduleHydration = Pk;
    function Vk(e, t, a) {
      if (!Gm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      GC(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = WC;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = kC(t, null, e, Bh, i, s, f, p, v);
      if (Uh(y.current, e), tp(e), u)
        for (var g = 0; g < u.length; g++) {
          var T = u[g];
          $R(y, T);
        }
      return new Wm(y);
    }
    function Gm(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === $i || e.nodeType === rd));
    }
    function Xp(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === $i || e.nodeType === rd || e.nodeType === Nn && e.nodeValue === " react-mount-point-unstable "));
    }
    function GC(e) {
      e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), dp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Bk = N.ReactCurrentOwner, qC;
    qC = function(e) {
      if (e._reactRootContainer && e.nodeType !== Nn) {
        var t = DC(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = p0(e), u = !!(i && Do(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function p0(e) {
      return e ? e.nodeType === $i ? e.documentElement : e.firstChild : null;
    }
    function XC() {
    }
    function Ik(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var x = Qm(f);
            s.call(x);
          };
        }
        var f = kC(
          t,
          i,
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          XC
        );
        e._reactRootContainer = f, Uh(f.current, e);
        var p = e.nodeType === Nn ? e.parentNode : e;
        return tp(p), Yu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var x = Qm(g);
            y.call(x);
          };
        }
        var g = TC(
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          XC
        );
        e._reactRootContainer = g, Uh(g.current, e);
        var T = e.nodeType === Nn ? e.parentNode : e;
        return tp(T), Yu(function() {
          qp(t, g, a, i);
        }), g;
      }
    }
    function Yk(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function qm(e, t, a, i, u) {
      qC(a), Yk(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Ik(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Qm(f);
            p.call(v);
          };
        }
        qp(t, f, e, u);
      }
      return Qm(f);
    }
    var KC = !1;
    function $k(e) {
      {
        KC || (KC = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Bk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Tt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Qr ? e : Dk(e, "findDOMNode");
    }
    function Qk(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Xp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = dp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return qm(null, e, t, !0, a);
    }
    function Wk(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Xp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = dp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return qm(null, e, t, !1, a);
    }
    function Gk(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Xp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !cy(e))
        throw new Error("parentComponent must be a valid React Component");
      return qm(e, t, a, !1, i);
    }
    var ZC = !1;
    function qk(e) {
      if (ZC || (ZC = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Xp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = dp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = p0(e), i = a && !Do(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Yu(function() {
          qm(null, null, e, !1, function() {
            e._reactRootContainer = null, W0(e);
          });
        }), !0;
      } else {
        {
          var u = p0(e), s = !!(u && Do(u)), f = e.nodeType === Qr && Xp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    br(Ok), wo(Lk), Jv(Nk), Os(Ua), Fd(Xv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), gc(Kb), sy(YS, V1, Yu);
    function Xk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Gm(t))
        throw new Error("Target container is not a DOM element.");
      return _k(e, t, null, a);
    }
    function Kk(e, t, a, i) {
      return Gk(e, t, a, i);
    }
    var v0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Do, Ef, Ah, oo, Sc, YS]
    };
    function Zk(e, t) {
      return v0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Hk(e, t);
    }
    function Jk(e, t, a) {
      return v0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Vk(e, t, a);
    }
    function e_(e) {
      return iC() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Yu(e);
    }
    var t_ = Fk({
      findFiberByHostInstance: Ys,
      bundleType: 1,
      version: u0,
      rendererPackageName: "react-dom"
    });
    if (!t_ && On && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var JC = window.location.protocol;
      /^(https?|file):$/.test(JC) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (JC === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ia.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = v0, Ia.createPortal = Xk, Ia.createRoot = Zk, Ia.findDOMNode = $k, Ia.flushSync = e_, Ia.hydrate = Qk, Ia.hydrateRoot = Jk, Ia.render = Wk, Ia.unmountComponentAtNode = qk, Ia.unstable_batchedUpdates = YS, Ia.unstable_renderSubtreeIntoContainer = Kk, Ia.version = u0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ia;
}
function vb() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vb);
    } catch (B) {
      console.error(B);
    }
  }
}
process.env.NODE_ENV === "production" ? (vb(), S0.exports = c_()) : S0.exports = f_();
var d_ = S0.exports, ev = d_;
if (process.env.NODE_ENV === "production")
  rv.createRoot = ev.createRoot, rv.hydrateRoot = ev.hydrateRoot;
else {
  var Zm = ev.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  rv.createRoot = function(B, Q) {
    Zm.usingClientEntryPoint = !0;
    try {
      return ev.createRoot(B, Q);
    } finally {
      Zm.usingClientEntryPoint = !1;
    }
  }, rv.hydrateRoot = function(B, Q, N) {
    Zm.usingClientEntryPoint = !0;
    try {
      return ev.hydrateRoot(B, Q, N);
    } finally {
      Zm.usingClientEntryPoint = !1;
    }
  };
}
var Ya = av();
function p_({ explanation: B }) {
  return /* @__PURE__ */ ft.jsxs("div", { className: "space-y-3 rounded-2xl border border-slate-200 bg-white/95 p-4 text-sm text-slate-700 shadow-sm", children: [
    /* @__PURE__ */ ft.jsx(tv, { icon: "🧠", title: "What this website does", content: B.summary }),
    /* @__PURE__ */ ft.jsx(tv, { icon: "🎯", title: "Who it's for", content: B.audience }),
    /* @__PURE__ */ ft.jsx(
      tv,
      {
        icon: "💡",
        title: "Key features",
        content: B.features.length > 0 ? B.features.join(", ") : "No clear features detected yet."
      }
    ),
    /* @__PURE__ */ ft.jsx(tv, { icon: "💰", title: "Pricing", content: B.pricing }),
    /* @__PURE__ */ ft.jsx(tv, { icon: "🧒", title: "Simple explanation", content: B.simpleExplanation })
  ] });
}
function tv({ icon: B, title: Q, content: N }) {
  return /* @__PURE__ */ ft.jsxs("div", { children: [
    /* @__PURE__ */ ft.jsxs("div", { className: "font-semibold text-slate-900", children: [
      B,
      " ",
      Q
    ] }),
    /* @__PURE__ */ ft.jsx("p", { className: "mt-1 leading-6 text-slate-600", children: N })
  ] });
}
function v_({ message: B }) {
  const Q = B.role === "assistant";
  return /* @__PURE__ */ ft.jsx("div", { className: `flex ${Q ? "justify-start" : "justify-end"}`, children: /* @__PURE__ */ ft.jsx(
    "div",
    {
      className: `max-w-[88%] rounded-2xl px-4 py-3 text-sm shadow-sm ${Q ? "bg-slate-100 text-slate-700" : "bg-brand-600 text-white"}`,
      children: B.explanation ? /* @__PURE__ */ ft.jsx(p_, { explanation: B.explanation }) : /* @__PURE__ */ ft.jsx("p", { className: "whitespace-pre-wrap leading-6", children: B.content })
    }
  ) });
}
function h_({ isOpen: B, onClick: Q }) {
  return /* @__PURE__ */ ft.jsxs(
    "button",
    {
      type: "button",
      onClick: Q,
      "aria-expanded": B,
      "aria-label": B ? "Close AI Website Explainer" : "Open AI Website Explainer",
      className: "group fixed bottom-5 right-5 z-[999998] inline-flex h-14 items-center gap-3 rounded-full border border-white/30 bg-slate-900 px-5 text-sm font-semibold text-white shadow-soft transition duration-200 hover:-translate-y-1 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 sm:bottom-6 sm:right-6",
      children: [
        /* @__PURE__ */ ft.jsx("span", { className: "inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-lg", children: "💡" }),
        /* @__PURE__ */ ft.jsx("span", { className: "hidden sm:inline", children: B ? "Close explainer" : "Explain this page" })
      ]
    }
  );
}
const m_ = 12e3;
function cb() {
  var Xe, Ke, Ze, S;
  const B = ((Ke = (Xe = document.querySelector("meta[name='description']")) == null ? void 0 : Xe.content) == null ? void 0 : Ke.trim()) ?? "", N = (((S = (Ze = document.body) == null ? void 0 : Ze.innerText) == null ? void 0 : S.replace(/\s+/g, " ").trim()) ?? "").slice(0, m_);
  return {
    metaDescription: B,
    websiteContent: N
  };
}
async function fb({
  apiBaseUrl: B,
  websiteContent: Q,
  metaDescription: N,
  explainLikeIm10: Xe = !0,
  messages: Ke
}) {
  const S = await fetch(B || "/api/explain", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      websiteContent: Q,
      metaDescription: N,
      explainLikeIm10: Xe,
      messages: Ke
    })
  }), We = await S.json().catch(() => null);
  if (!S.ok)
    throw new Error((We == null ? void 0 : We.error) || "The AI explainer request failed.");
  return {
    summary: We.summary ?? "No summary available.",
    audience: We.audience ?? "No audience information available.",
    features: Array.isArray(We.features) ? We.features : [],
    pricing: We.pricing ?? "Pricing was not found.",
    simpleExplanation: We.simpleExplanation ?? "No simple explanation available.",
    answer: We.answer ?? We.simpleExplanation ?? "No answer available."
  };
}
const db = {
  summary: "This website helps people understand and use AI tools for work.",
  audience: "Teams, founders, and curious people exploring practical AI products.",
  features: ["Product overviews", "Use case examples", "Simple onboarding", "Frequently asked questions"],
  pricing: "Pricing is not clearly visible on this page.",
  simpleExplanation: "It is like a helper page that shows what the AI product does and why someone might want it.",
  answer: "This page is explaining an AI product in a friendly way."
};
function y0() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
function y_({ apiBaseUrl: B, demoMode: Q = !1, explainLikeIm10: N = !0 }) {
  const [Xe, Ke] = Ya.useState([]), [Ze, S] = Ya.useState(!1), [We, ie] = Ya.useState(null), [ue, Ge] = Ya.useState(!1), Z = Ya.useMemo(
    () => Xe.map((je) => ({
      role: je.role,
      content: je.content
    })),
    [Xe]
  ), ye = Ya.useCallback(async () => {
    if (!(Ze || ue)) {
      S(!0), ie(null);
      try {
        const je = cb(), Je = Q ? db : await fb({
          apiBaseUrl: B,
          websiteContent: je.websiteContent,
          metaDescription: je.metaDescription,
          explainLikeIm10: N
        });
        Ke([
          {
            id: y0(),
            role: "assistant",
            content: Je.answer,
            explanation: Je
          }
        ]), Ge(!0);
      } catch (je) {
        ie(
          je instanceof Error ? je.message : "Something went wrong while analyzing this website."
        );
      } finally {
        S(!1);
      }
    }
  }, [B, Q, N, ue, Ze]), te = Ya.useCallback(
    async (je) => {
      S(!0), ie(null);
      const Je = {
        id: y0(),
        role: "user",
        content: je
      };
      Ke((Rt) => [...Rt, Je]);
      try {
        const Rt = cb(), rt = Q ? {
          ...db,
          answer: `Demo answer: ${je} -> this site is mainly about helping visitors quickly understand the page.`
        } : await fb({
          apiBaseUrl: B,
          websiteContent: Rt.websiteContent,
          metaDescription: Rt.metaDescription,
          explainLikeIm10: N,
          messages: [...Z, { role: "user", content: je }]
        });
        Ke((He) => [
          ...He,
          {
            id: y0(),
            role: "assistant",
            content: rt.answer
          }
        ]);
      } catch (Rt) {
        ie(
          Rt instanceof Error ? Rt.message : "Something went wrong while answering your question."
        );
      } finally {
        S(!1);
      }
    },
    [B, Z, Q, N]
  ), Ae = Ya.useCallback(() => {
    Ke([]), Ge(!1), ie(null);
  }, []);
  return {
    messages: Xe,
    loading: Ze,
    error: We,
    hasAnalyzed: ue,
    analyzePage: ye,
    askQuestion: te,
    resetConversation: Ae
  };
}
function g_() {
  return /* @__PURE__ */ ft.jsx("div", { className: "space-y-3 rounded-2xl border border-slate-200 bg-white p-4", children: [0, 1, 2].map((B) => /* @__PURE__ */ ft.jsx("div", { className: "relative h-4 overflow-hidden rounded bg-slate-200", children: /* @__PURE__ */ ft.jsx("div", { className: "absolute inset-y-0 left-[-40%] w-[40%] bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer" }) }, B)) });
}
function S_({ apiBaseUrl: B, demoMode: Q = !1, embedded: N = !1 }) {
  const [Xe, Ke] = Ya.useState(!N), [Ze, S] = Ya.useState(""), [We, ie] = Ya.useState(!0), ue = Ya.useRef(null), { messages: Ge, loading: Z, error: ye, hasAnalyzed: te, analyzePage: Ae, askQuestion: je, resetConversation: Je } = y_({
    apiBaseUrl: B,
    demoMode: Q,
    explainLikeIm10: We
  });
  Ya.useEffect(() => {
    Xe && !te && Ae();
  }, [Ae, te, Xe]), Ya.useEffect(() => {
    if (!Xe) return;
    const ce = ue.current;
    if (!ce) return;
    const et = window.requestAnimationFrame(() => {
      ce.scrollTo({
        top: ce.scrollHeight,
        behavior: "smooth"
      });
    });
    return () => window.cancelAnimationFrame(et);
  }, [Ge, Z, ye, Xe]);
  const Rt = async (ce) => {
    ce.preventDefault();
    const et = Ze.trim();
    !et || Z || (S(""), await je(et));
  }, rt = () => {
    const ce = !Xe;
    Ke(ce), ce || S("");
  }, He = N ? "flex h-[70vh] max-h-[620px] min-h-[520px] flex-col bg-gradient-to-b from-slate-50 to-white" : "flex flex-col bg-gradient-to-b from-slate-50 to-white", mt = N ? "chat-scrollbar flex-1 space-y-3 overflow-y-auto px-4 py-4 sm:px-5" : "chat-scrollbar max-h-[420px] space-y-3 overflow-y-auto px-4 py-4 sm:px-5";
  return /* @__PURE__ */ ft.jsxs(ft.Fragment, { children: [
    N && /* @__PURE__ */ ft.jsx(h_, { isOpen: Xe, onClick: rt }),
    Xe && /* @__PURE__ */ ft.jsxs(
      "section",
      {
        className: `animate-slide-up overflow-hidden rounded-[28px] border border-white/60 bg-white/90 shadow-soft backdrop-blur-xl ${N ? "fixed bottom-24 right-5 z-[999999] w-[calc(100vw-1.5rem)] max-w-[420px] sm:bottom-24 sm:right-6" : "relative w-full"}`,
        children: [
          /* @__PURE__ */ ft.jsxs("div", { className: "bg-slate-900 px-5 py-4 text-white", children: [
            /* @__PURE__ */ ft.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
              /* @__PURE__ */ ft.jsxs("div", { children: [
                /* @__PURE__ */ ft.jsx("p", { className: "text-xs uppercase tracking-[0.18em] text-slate-300", children: "AI Website Explainer" }),
                /* @__PURE__ */ ft.jsx("h2", { className: "mt-1 text-lg font-semibold", children: "Understand this page in seconds" })
              ] }),
              /* @__PURE__ */ ft.jsx(
                "button",
                {
                  type: "button",
                  onClick: N ? rt : Je,
                  className: "rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white transition hover:bg-white/20",
                  children: N ? "Close" : "Reset"
                }
              )
            ] }),
            /* @__PURE__ */ ft.jsxs("div", { className: "mt-3 flex items-center gap-2", children: [
              /* @__PURE__ */ ft.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => ie((ce) => !ce),
                  className: `rounded-full px-3 py-1 text-xs font-medium transition ${We ? "bg-brand-500 text-white" : "bg-white/10 text-slate-200"}`,
                  children: "Explain Like I'm 10"
                }
              ),
              Q && /* @__PURE__ */ ft.jsx("span", { className: "rounded-full bg-amber-400/20 px-3 py-1 text-xs font-medium text-amber-200", children: "Demo mode" })
            ] })
          ] }),
          /* @__PURE__ */ ft.jsxs("div", { className: He, children: [
            /* @__PURE__ */ ft.jsxs("div", { ref: ue, className: mt, children: [
              !te && /* @__PURE__ */ ft.jsx("div", { className: "rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-600", children: "Analyzing this website..." }),
              Ge.map((ce) => /* @__PURE__ */ ft.jsx(v_, { message: ce }, ce.id)),
              Z && /* @__PURE__ */ ft.jsx(g_, {}),
              ye && /* @__PURE__ */ ft.jsx("div", { className: "rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700", children: ye })
            ] }),
            /* @__PURE__ */ ft.jsx("form", { onSubmit: Rt, className: "border-t border-slate-200 bg-white px-4 py-4 sm:px-5", children: /* @__PURE__ */ ft.jsxs("div", { className: "flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-sm", children: [
              /* @__PURE__ */ ft.jsx(
                "input",
                {
                  value: Ze,
                  onChange: (ce) => S(ce.target.value),
                  placeholder: "Ask a follow-up question...",
                  className: "min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                }
              ),
              /* @__PURE__ */ ft.jsx(
                "button",
                {
                  type: "submit",
                  disabled: Z || !Ze.trim(),
                  className: "rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-slate-300",
                  children: "Send"
                }
              )
            ] }) })
          ] })
        ]
      }
    )
  ] });
}
const w_ = '*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.\\!container{width:100%!important}.container{width:100%}@media (min-width: 640px){.\\!container{max-width:640px!important}.container{max-width:640px}}@media (min-width: 768px){.\\!container{max-width:768px!important}.container{max-width:768px}}@media (min-width: 1024px){.\\!container{max-width:1024px!important}.container{max-width:1024px}}@media (min-width: 1280px){.\\!container{max-width:1280px!important}.container{max-width:1280px}}@media (min-width: 1536px){.\\!container{max-width:1536px!important}.container{max-width:1536px}}.visible{visibility:visible}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-y-0{top:0;bottom:0}.bottom-24{bottom:6rem}.bottom-5{bottom:1.25rem}.left-\\[-40\\%\\]{left:-40%}.right-5{right:1.25rem}.z-\\[999998\\]{z-index:999998}.z-\\[999999\\]{z-index:999999}.mx-auto{margin-left:auto;margin-right:auto}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-8{margin-top:2rem}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.hidden{display:none}.h-14{height:3.5rem}.h-4{height:1rem}.h-9{height:2.25rem}.h-\\[70vh\\]{height:70vh}.max-h-\\[420px\\]{max-height:420px}.max-h-\\[620px\\]{max-height:620px}.min-h-\\[520px\\]{min-height:520px}.w-9{width:2.25rem}.w-\\[40\\%\\]{width:40%}.w-\\[calc\\(100vw-1\\.5rem\\)\\]{width:calc(100vw - 1.5rem)}.w-full{width:100%}.min-w-0{min-width:0px}.max-w-2xl{max-width:42rem}.max-w-3xl{max-width:48rem}.max-w-7xl{max-width:80rem}.max-w-\\[420px\\]{max-width:420px}.max-w-\\[88\\%\\]{max-width:88%}.flex-1{flex:1 1 0%}@keyframes shimmer{to{transform:translate(100%)}}.animate-shimmer{animation:shimmer 1.8s infinite}@keyframes slide-up{0%{opacity:0;transform:translateY(16px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}.animate-slide-up{animation:slide-up .2s ease-out}.flex-col{flex-direction:column}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.whitespace-pre-wrap{white-space:pre-wrap}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-\\[28px\\]{border-radius:28px}.rounded-\\[32px\\]{border-radius:32px}.rounded-full{border-radius:9999px}.rounded-xl{border-radius:.75rem}.border{border-width:1px}.border-t{border-top-width:1px}.border-brand-100{--tw-border-opacity: 1;border-color:rgb(219 234 254 / var(--tw-border-opacity, 1))}.border-rose-200{--tw-border-opacity: 1;border-color:rgb(254 205 211 / var(--tw-border-opacity, 1))}.border-slate-200{--tw-border-opacity: 1;border-color:rgb(226 232 240 / var(--tw-border-opacity, 1))}.border-white\\/15{border-color:#ffffff26}.border-white\\/30{border-color:#ffffff4d}.border-white\\/60{border-color:#fff9}.border-white\\/70{border-color:#ffffffb3}.bg-amber-400\\/20{background-color:#fbbf2433}.bg-brand-50{--tw-bg-opacity: 1;background-color:rgb(239 246 255 / var(--tw-bg-opacity, 1))}.bg-brand-500{--tw-bg-opacity: 1;background-color:rgb(37 99 235 / var(--tw-bg-opacity, 1))}.bg-brand-600{--tw-bg-opacity: 1;background-color:rgb(29 78 216 / var(--tw-bg-opacity, 1))}.bg-rose-50{--tw-bg-opacity: 1;background-color:rgb(255 241 242 / var(--tw-bg-opacity, 1))}.bg-slate-100{--tw-bg-opacity: 1;background-color:rgb(241 245 249 / var(--tw-bg-opacity, 1))}.bg-slate-200{--tw-bg-opacity: 1;background-color:rgb(226 232 240 / var(--tw-bg-opacity, 1))}.bg-slate-50{--tw-bg-opacity: 1;background-color:rgb(248 250 252 / var(--tw-bg-opacity, 1))}.bg-slate-900{--tw-bg-opacity: 1;background-color:rgb(15 23 42 / var(--tw-bg-opacity, 1))}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-white\\/10{background-color:#ffffff1a}.bg-white\\/75{background-color:#ffffffbf}.bg-white\\/90{background-color:#ffffffe6}.bg-white\\/95{background-color:#fffffff2}.bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.from-slate-50{--tw-gradient-from: #f8fafc var(--tw-gradient-from-position);--tw-gradient-to: rgb(248 250 252 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.from-transparent{--tw-gradient-from: transparent var(--tw-gradient-from-position);--tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.via-white\\/80{--tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), rgb(255 255 255 / .8) var(--tw-gradient-via-position), var(--tw-gradient-to)}.to-transparent{--tw-gradient-to: transparent var(--tw-gradient-to-position)}.to-white{--tw-gradient-to: #fff var(--tw-gradient-to-position)}.p-2{padding:.5rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.leading-6{line-height:1.5rem}.leading-7{line-height:1.75rem}.tracking-\\[0\\.18em\\]{letter-spacing:.18em}.tracking-\\[0\\.2em\\]{letter-spacing:.2em}.tracking-tight{letter-spacing:-.025em}.text-amber-200{--tw-text-opacity: 1;color:rgb(253 230 138 / var(--tw-text-opacity, 1))}.text-brand-700{--tw-text-opacity: 1;color:rgb(30 64 175 / var(--tw-text-opacity, 1))}.text-rose-700{--tw-text-opacity: 1;color:rgb(190 18 60 / var(--tw-text-opacity, 1))}.text-slate-200{--tw-text-opacity: 1;color:rgb(226 232 240 / var(--tw-text-opacity, 1))}.text-slate-300{--tw-text-opacity: 1;color:rgb(203 213 225 / var(--tw-text-opacity, 1))}.text-slate-600{--tw-text-opacity: 1;color:rgb(71 85 105 / var(--tw-text-opacity, 1))}.text-slate-700{--tw-text-opacity: 1;color:rgb(51 65 85 / var(--tw-text-opacity, 1))}.text-slate-800{--tw-text-opacity: 1;color:rgb(30 41 59 / var(--tw-text-opacity, 1))}.text-slate-900{--tw-text-opacity: 1;color:rgb(15 23 42 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-soft{--tw-shadow: 0 20px 60px rgba(15, 23, 42, .15);--tw-shadow-colored: 0 20px 60px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.backdrop-blur{--tw-backdrop-blur: blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.backdrop-blur-xl{--tw-backdrop-blur: blur(24px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}:root{color-scheme:light dark;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif}html,body,#root{min-height:100%;width:100%}body{margin:0;color:#0f172a;background:radial-gradient(circle at top,rgba(37,99,235,.16),transparent 28%),linear-gradient(180deg,#f8fafc,#eef2ff)}[data-widget-host]{all:initial}[data-widget-host],[data-widget-host] *{box-sizing:border-box;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif}.chat-scrollbar{scrollbar-width:thin;scrollbar-color:#94a3b8 #e2e8f0}.chat-scrollbar::-webkit-scrollbar{width:10px}.chat-scrollbar::-webkit-scrollbar-track{background:#e2e8f0;border-radius:9999px}.chat-scrollbar::-webkit-scrollbar-thumb{background:#64748b;border-radius:9999px;border:2px solid #e2e8f0}.chat-scrollbar::-webkit-scrollbar-thumb:hover{background:#475569}.placeholder\\:text-slate-400::-moz-placeholder{--tw-text-opacity: 1;color:rgb(148 163 184 / var(--tw-text-opacity, 1))}.placeholder\\:text-slate-400::placeholder{--tw-text-opacity: 1;color:rgb(148 163 184 / var(--tw-text-opacity, 1))}.hover\\:-translate-y-1:hover{--tw-translate-y: -.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:bg-brand-700:hover{--tw-bg-opacity: 1;background-color:rgb(30 64 175 / var(--tw-bg-opacity, 1))}.hover\\:bg-slate-800:hover{--tw-bg-opacity: 1;background-color:rgb(30 41 59 / var(--tw-bg-opacity, 1))}.hover\\:bg-white\\/20:hover{background-color:#fff3}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-brand-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(37 99 235 / var(--tw-ring-opacity, 1))}.focus\\:ring-offset-2:focus{--tw-ring-offset-width: 2px}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:bg-slate-300:disabled{--tw-bg-opacity: 1;background-color:rgb(203 213 225 / var(--tw-bg-opacity, 1))}@media (min-width: 640px){.sm\\:bottom-24{bottom:6rem}.sm\\:bottom-6{bottom:1.5rem}.sm\\:right-6{right:1.5rem}.sm\\:inline{display:inline}.sm\\:p-10{padding:2.5rem}.sm\\:px-5{padding-left:1.25rem;padding-right:1.25rem}.sm\\:text-5xl{font-size:3rem;line-height:1}.sm\\:text-lg{font-size:1.125rem;line-height:1.75rem}}@media (min-width: 1024px){.lg\\:max-w-\\[420px\\]{max-width:420px}.lg\\:flex-1{flex:1 1 0%}.lg\\:flex-none{flex:none}.lg\\:flex-row{flex-direction:row}.lg\\:items-start{align-items:flex-start}.lg\\:gap-8{gap:2rem}}@media (min-width: 1280px){.xl\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}';
function E_() {
  return new URL("/api/explain", import.meta.url).toString();
}
const Qf = document.createElement("div");
Qf.style.position = "fixed";
Qf.style.bottom = "20px";
Qf.style.right = "20px";
Qf.style.zIndex = "999999";
document.body.appendChild(Qf);
const hb = Qf.attachShadow({ mode: "open" }), mb = document.createElement("style");
mb.textContent = w_;
hb.appendChild(mb);
const yb = document.createElement("div");
hb.appendChild(yb);
rv.createRoot(yb).render(
  /* @__PURE__ */ ft.jsx(
    S_,
    {
      apiBaseUrl: E_(),
      embedded: !0
    }
  )
);
