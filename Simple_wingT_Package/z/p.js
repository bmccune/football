!function(t, e) {
  t("jquery-private", [ "jquery", "expose" ], function(t, e) {
    "use strict";
    return e("$", t.noConflict(!0), !0);
  }), t("wrap", [ "require" ], function() {
    return {
      load: function() {}
    };
  }), function(n) {
    t("wrap!lib/underscore", [ "expose" ], function() {
      var t = arguments, r = [ "_undefined0" ], i = [ "_" ], o = function(t) {
        return t("_", this._.noConflict(), !0);
      }, a = function() {
        (function() {
          var t = this, e = t._, n = {}, r = Array.prototype, i = Object.prototype, o = Function.prototype, a = r.push, s = r.slice, l = r.concat, c = i.toString, u = i.hasOwnProperty, d = r.forEach, h = r.map, f = r.reduce, p = r.reduceRight, g = r.filter, v = r.every, m = r.some, y = r.indexOf, b = r.lastIndexOf, w = Array.isArray, x = Object.keys, k = o.bind, C = function(t) {
            return t instanceof C ? t : this instanceof C ? (this._wrapped = t, void 0) : new C(t);
          };
          "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = C),
          exports._ = C) : t._ = C, C.VERSION = "1.5.2";
          var S = C.each = C.forEach = function(t, e, r) {
            if (null != t) if (d && t.forEach === d) t.forEach(e, r); else if (t.length === +t.length) {
              for (var i = 0, o = t.length; o > i; i++) if (e.call(r, t[i], i, t) === n) return;
            } else for (var a = C.keys(t), i = 0, o = a.length; o > i; i++) if (e.call(r, t[a[i]], a[i], t) === n) return;
          };
          C.map = C.collect = function(t, e, n) {
            var r = [];
            return null == t ? r : h && t.map === h ? t.map(e, n) : (S(t, function(t, i, o) {
              r.push(e.call(n, t, i, o));
            }), r);
          };
          var E = "Reduce of empty array with no initial value";
          C.reduce = C.foldl = C.inject = function(t, e, n, r) {
            var i = arguments.length > 2;
            if (null == t && (t = []), f && t.reduce === f) return r && (e = C.bind(e, r)),
            i ? t.reduce(e, n) : t.reduce(e);
            if (S(t, function(t, o, a) {
              i ? n = e.call(r, n, t, o, a) : (n = t, i = !0);
            }), !i) throw new TypeError(E);
            return n;
          }, C.reduceRight = C.foldr = function(t, e, n, r) {
            var i = arguments.length > 2;
            if (null == t && (t = []), p && t.reduceRight === p) return r && (e = C.bind(e, r)),
            i ? t.reduceRight(e, n) : t.reduceRight(e);
            var o = t.length;
            if (o !== +o) {
              var a = C.keys(t);
              o = a.length;
            }
            if (S(t, function(s, l, c) {
              l = a ? a[--o] : --o, i ? n = e.call(r, n, t[l], l, c) : (n = t[l], i = !0);
            }), !i) throw new TypeError(E);
            return n;
          }, C.find = C.detect = function(t, e, n) {
            var r;
            return A(t, function(t, i, o) {
              return e.call(n, t, i, o) ? (r = t, !0) : void 0;
            }), r;
          }, C.filter = C.select = function(t, e, n) {
            var r = [];
            return null == t ? r : g && t.filter === g ? t.filter(e, n) : (S(t, function(t, i, o) {
              e.call(n, t, i, o) && r.push(t);
            }), r);
          }, C.reject = function(t, e, n) {
            return C.filter(t, function(t, r, i) {
              return !e.call(n, t, r, i);
            }, n);
          }, C.every = C.all = function(t, e, r) {
            e || (e = C.identity);
            var i = !0;
            return null == t ? i : v && t.every === v ? t.every(e, r) : (S(t, function(t, o, a) {
              return (i = i && e.call(r, t, o, a)) ? void 0 : n;
            }), !!i);
          };
          var A = C.some = C.any = function(t, e, r) {
            e || (e = C.identity);
            var i = !1;
            return null == t ? i : m && t.some === m ? t.some(e, r) : (S(t, function(t, o, a) {
              return i || (i = e.call(r, t, o, a)) ? n : void 0;
            }), !!i);
          };
          C.contains = C.include = function(t, e) {
            return null == t ? !1 : y && t.indexOf === y ? -1 != t.indexOf(e) : A(t, function(t) {
              return t === e;
            });
          }, C.invoke = function(t, e) {
            var n = s.call(arguments, 2), r = C.isFunction(e);
            return C.map(t, function(t) {
              return (r ? e : t[e]).apply(t, n);
            });
          }, C.pluck = function(t, e) {
            return C.map(t, function(t) {
              return t[e];
            });
          }, C.where = function(t, e, n) {
            return C.isEmpty(e) ? n ? void 0 : [] : C[n ? "find" : "filter"](t, function(t) {
              for (var n in e) if (e[n] !== t[n]) return !1;
              return !0;
            });
          }, C.findWhere = function(t, e) {
            return C.where(t, e, !0);
          }, C.max = function(t, e, n) {
            if (!e && C.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
            if (!e && C.isEmpty(t)) return -1/0;
            var r = {
              computed: -1/0,
              value: -1/0
            };
            return S(t, function(t, i, o) {
              var a = e ? e.call(n, t, i, o) : t;
              a > r.computed && (r = {
                value: t,
                computed: a
              });
            }), r.value;
          }, C.min = function(t, e, n) {
            if (!e && C.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
            if (!e && C.isEmpty(t)) return 1/0;
            var r = {
              computed: 1/0,
              value: 1/0
            };
            return S(t, function(t, i, o) {
              var a = e ? e.call(n, t, i, o) : t;
              a < r.computed && (r = {
                value: t,
                computed: a
              });
            }), r.value;
          }, C.shuffle = function(t) {
            var e, n = 0, r = [];
            return S(t, function(t) {
              e = C.random(n++), r[n - 1] = r[e], r[e] = t;
            }), r;
          }, C.sample = function(t, e, n) {
            return arguments.length < 2 || n ? t[C.random(t.length - 1)] : C.shuffle(t).slice(0, Math.max(0, e));
          };
          var _ = function(t) {
            return C.isFunction(t) ? t : function(e) {
              return e[t];
            };
          };
          C.sortBy = function(t, e, n) {
            var r = _(e);
            return C.pluck(C.map(t, function(t, e, i) {
              return {
                value: t,
                index: e,
                criteria: r.call(n, t, e, i)
              };
            }).sort(function(t, e) {
              var n = t.criteria, r = e.criteria;
              if (n !== r) {
                if (n > r || void 0 === n) return 1;
                if (r > n || void 0 === r) return -1;
              }
              return t.index - e.index;
            }), "value");
          };
          var P = function(t) {
            return function(e, n, r) {
              var i = {}, o = null == n ? C.identity : _(n);
              return S(e, function(n, a) {
                var s = o.call(r, n, a, e);
                t(i, s, n);
              }), i;
            };
          };
          C.groupBy = P(function(t, e, n) {
            (C.has(t, e) ? t[e] : t[e] = []).push(n);
          }), C.indexBy = P(function(t, e, n) {
            t[e] = n;
          }), C.countBy = P(function(t, e) {
            C.has(t, e) ? t[e]++ : t[e] = 1;
          }), C.sortedIndex = function(t, e, n, r) {
            n = null == n ? C.identity : _(n);
            for (var i = n.call(r, e), o = 0, a = t.length; a > o; ) {
              var s = o + a >>> 1;
              n.call(r, t[s]) < i ? o = s + 1 : a = s;
            }
            return o;
          }, C.toArray = function(t) {
            return t ? C.isArray(t) ? s.call(t) : t.length === +t.length ? C.map(t, C.identity) : C.values(t) : [];
          }, C.size = function(t) {
            return null == t ? 0 : t.length === +t.length ? t.length : C.keys(t).length;
          }, C.first = C.head = C.take = function(t, e, n) {
            return null == t ? void 0 : null == e || n ? t[0] : s.call(t, 0, e);
          }, C.initial = function(t, e, n) {
            return s.call(t, 0, t.length - (null == e || n ? 1 : e));
          }, C.last = function(t, e, n) {
            return null == t ? void 0 : null == e || n ? t[t.length - 1] : s.call(t, Math.max(t.length - e, 0));
          }, C.rest = C.tail = C.drop = function(t, e, n) {
            return s.call(t, null == e || n ? 1 : e);
          }, C.compact = function(t) {
            return C.filter(t, C.identity);
          };
          var M = function(t, e, n) {
            return e && C.every(t, C.isArray) ? l.apply(n, t) : (S(t, function(t) {
              C.isArray(t) || C.isArguments(t) ? e ? a.apply(n, t) : M(t, e, n) : n.push(t);
            }), n);
          };
          C.flatten = function(t, e) {
            return M(t, e, []);
          }, C.without = function(t) {
            return C.difference(t, s.call(arguments, 1));
          }, C.uniq = C.unique = function(t, e, n, r) {
            C.isFunction(e) && (r = n, n = e, e = !1);
            var i = n ? C.map(t, n, r) : t, o = [], a = [];
            return S(i, function(n, r) {
              (e ? r && a[a.length - 1] === n : C.contains(a, n)) || (a.push(n), o.push(t[r]));
            }), o;
          }, C.union = function() {
            return C.uniq(C.flatten(arguments, !0));
          }, C.intersection = function(t) {
            var e = s.call(arguments, 1);
            return C.filter(C.uniq(t), function(t) {
              return C.every(e, function(e) {
                return C.indexOf(e, t) >= 0;
              });
            });
          }, C.difference = function(t) {
            var e = l.apply(r, s.call(arguments, 1));
            return C.filter(t, function(t) {
              return !C.contains(e, t);
            });
          }, C.zip = function() {
            for (var t = C.max(C.pluck(arguments, "length").concat(0)), e = new Array(t), n = 0; t > n; n++) e[n] = C.pluck(arguments, "" + n);
            return e;
          }, C.object = function(t, e) {
            if (null == t) return {};
            for (var n = {}, r = 0, i = t.length; i > r; r++) e ? n[t[r]] = e[r] : n[t[r][0]] = t[r][1];
            return n;
          }, C.indexOf = function(t, e, n) {
            if (null == t) return -1;
            var r = 0, i = t.length;
            if (n) {
              if ("number" != typeof n) return r = C.sortedIndex(t, e), t[r] === e ? r : -1;
              r = 0 > n ? Math.max(0, i + n) : n;
            }
            if (y && t.indexOf === y) return t.indexOf(e, n);
            for (;i > r; r++) if (t[r] === e) return r;
            return -1;
          }, C.lastIndexOf = function(t, e, n) {
            if (null == t) return -1;
            var r = null != n;
            if (b && t.lastIndexOf === b) return r ? t.lastIndexOf(e, n) : t.lastIndexOf(e);
            for (var i = r ? n : t.length; i--; ) if (t[i] === e) return i;
            return -1;
          }, C.range = function(t, e, n) {
            arguments.length <= 1 && (e = t || 0, t = 0), n = arguments[2] || 1;
            for (var r = Math.max(Math.ceil((e - t) / n), 0), i = 0, o = new Array(r); r > i; ) o[i++] = t,
            t += n;
            return o;
          };
          var T = function() {};
          C.bind = function(t, e) {
            var n, r;
            if (k && t.bind === k) return k.apply(t, s.call(arguments, 1));
            if (!C.isFunction(t)) throw new TypeError();
            return n = s.call(arguments, 2), r = function() {
              if (!(this instanceof r)) return t.apply(e, n.concat(s.call(arguments)));
              T.prototype = t.prototype;
              var i = new T();
              T.prototype = null;
              var o = t.apply(i, n.concat(s.call(arguments)));
              return Object(o) === o ? o : i;
            };
          }, C.partial = function(t) {
            var e = s.call(arguments, 1);
            return function() {
              return t.apply(this, e.concat(s.call(arguments)));
            };
          }, C.bindAll = function(t) {
            var e = s.call(arguments, 1);
            if (0 === e.length) throw new Error("bindAll must be passed function names");
            return S(e, function(e) {
              t[e] = C.bind(t[e], t);
            }), t;
          }, C.memoize = function(t, e) {
            var n = {};
            return e || (e = C.identity), function() {
              var r = e.apply(this, arguments);
              return C.has(n, r) ? n[r] : n[r] = t.apply(this, arguments);
            };
          }, C.delay = function(t, e) {
            var n = s.call(arguments, 2);
            return setTimeout(function() {
              return t.apply(null, n);
            }, e);
          }, C.defer = function(t) {
            return C.delay.apply(C, [ t, 1 ].concat(s.call(arguments, 1)));
          }, C.throttle = function(t, e, n) {
            var r, i, o, a = null, s = 0;
            n || (n = {});
            var l = function() {
              s = n.leading === !1 ? 0 : new Date(), a = null, o = t.apply(r, i);
            };
            return function() {
              var c = new Date();
              s || n.leading !== !1 || (s = c);
              var u = e - (c - s);
              return r = this, i = arguments, 0 >= u ? (clearTimeout(a), a = null, s = c, o = t.apply(r, i)) : a || n.trailing === !1 || (a = setTimeout(l, u)),
              o;
            };
          }, C.debounce = function(t, e, n) {
            var r, i, o, a, s;
            return function() {
              o = this, i = arguments, a = new Date();
              var l = function() {
                var c = new Date() - a;
                e > c ? r = setTimeout(l, e - c) : (r = null, n || (s = t.apply(o, i)));
              }, c = n && !r;
              return r || (r = setTimeout(l, e)), c && (s = t.apply(o, i)), s;
            };
          }, C.once = function(t) {
            var e, n = !1;
            return function() {
              return n ? e : (n = !0, e = t.apply(this, arguments), t = null, e);
            };
          }, C.wrap = function(t, e) {
            return function() {
              var n = [ t ];
              return a.apply(n, arguments), e.apply(this, n);
            };
          }, C.compose = function() {
            var t = arguments;
            return function() {
              for (var e = arguments, n = t.length - 1; n >= 0; n--) e = [ t[n].apply(this, e) ];
              return e[0];
            };
          }, C.after = function(t, e) {
            return function() {
              return --t < 1 ? e.apply(this, arguments) : void 0;
            };
          }, C.keys = x || function(t) {
            if (t !== Object(t)) throw new TypeError("Invalid object");
            var e = [];
            for (var n in t) C.has(t, n) && e.push(n);
            return e;
          }, C.values = function(t) {
            for (var e = C.keys(t), n = e.length, r = new Array(n), i = 0; n > i; i++) r[i] = t[e[i]];
            return r;
          }, C.pairs = function(t) {
            for (var e = C.keys(t), n = e.length, r = new Array(n), i = 0; n > i; i++) r[i] = [ e[i], t[e[i]] ];
            return r;
          }, C.invert = function(t) {
            for (var e = {}, n = C.keys(t), r = 0, i = n.length; i > r; r++) e[t[n[r]]] = n[r];
            return e;
          }, C.functions = C.methods = function(t) {
            var e = [];
            for (var n in t) C.isFunction(t[n]) && e.push(n);
            return e.sort();
          }, C.extend = function(t) {
            return S(s.call(arguments, 1), function(e) {
              if (e) for (var n in e) t[n] = e[n];
            }), t;
          }, C.pick = function(t) {
            var e = {}, n = l.apply(r, s.call(arguments, 1));
            return S(n, function(n) {
              n in t && (e[n] = t[n]);
            }), e;
          }, C.omit = function(t) {
            var e = {}, n = l.apply(r, s.call(arguments, 1));
            for (var i in t) C.contains(n, i) || (e[i] = t[i]);
            return e;
          }, C.defaults = function(t) {
            return S(s.call(arguments, 1), function(e) {
              if (e) for (var n in e) void 0 === t[n] && (t[n] = e[n]);
            }), t;
          }, C.clone = function(t) {
            return C.isObject(t) ? C.isArray(t) ? t.slice() : C.extend({}, t) : t;
          }, C.tap = function(t, e) {
            return e(t), t;
          };
          var L = function(t, e, n, r) {
            if (t === e) return 0 !== t || 1 / t == 1 / e;
            if (null == t || null == e) return t === e;
            t instanceof C && (t = t._wrapped), e instanceof C && (e = e._wrapped);
            var i = c.call(t);
            if (i != c.call(e)) return !1;
            switch (i) {
             case "[object String]":
              return t == String(e);

             case "[object Number]":
              return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;

             case "[object Date]":
             case "[object Boolean]":
              return +t == +e;

             case "[object RegExp]":
              return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase;
            }
            if ("object" != typeof t || "object" != typeof e) return !1;
            for (var o = n.length; o--; ) if (n[o] == t) return r[o] == e;
            var a = t.constructor, s = e.constructor;
            if (a !== s && !(C.isFunction(a) && a instanceof a && C.isFunction(s) && s instanceof s)) return !1;
            n.push(t), r.push(e);
            var l = 0, u = !0;
            if ("[object Array]" == i) {
              if (l = t.length, u = l == e.length) for (;l-- && (u = L(t[l], e[l], n, r)); ) ;
            } else {
              for (var d in t) if (C.has(t, d) && (l++, !(u = C.has(e, d) && L(t[d], e[d], n, r)))) break;
              if (u) {
                for (d in e) if (C.has(e, d) && !l--) break;
                u = !l;
              }
            }
            return n.pop(), r.pop(), u;
          };
          C.isEqual = function(t, e) {
            return L(t, e, [], []);
          }, C.isEmpty = function(t) {
            if (null == t) return !0;
            if (C.isArray(t) || C.isString(t)) return 0 === t.length;
            for (var e in t) if (C.has(t, e)) return !1;
            return !0;
          }, C.isElement = function(t) {
            return !(!t || 1 !== t.nodeType);
          }, C.isArray = w || function(t) {
            return "[object Array]" == c.call(t);
          }, C.isObject = function(t) {
            return t === Object(t);
          }, S([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(t) {
            C["is" + t] = function(e) {
              return c.call(e) == "[object " + t + "]";
            };
          }), C.isArguments(arguments) || (C.isArguments = function(t) {
            return !(!t || !C.has(t, "callee"));
          }), "function" != typeof /./ && (C.isFunction = function(t) {
            return "function" == typeof t;
          }), C.isFinite = function(t) {
            return isFinite(t) && !isNaN(parseFloat(t));
          }, C.isNaN = function(t) {
            return C.isNumber(t) && t != +t;
          }, C.isBoolean = function(t) {
            return t === !0 || t === !1 || "[object Boolean]" == c.call(t);
          }, C.isNull = function(t) {
            return null === t;
          }, C.isUndefined = function(t) {
            return void 0 === t;
          }, C.has = function(t, e) {
            return u.call(t, e);
          }, C.noConflict = function() {
            return t._ = e, this;
          }, C.identity = function(t) {
            return t;
          }, C.times = function(t, e, n) {
            for (var r = Array(Math.max(0, t)), i = 0; t > i; i++) r[i] = e.call(n, i);
            return r;
          }, C.random = function(t, e) {
            return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1));
          };
          var F = {
            escape: {
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#x27;"
            }
          };
          F.unescape = C.invert(F.escape);
          var q = {
            escape: new RegExp("[" + C.keys(F.escape).join("") + "]", "g"),
            unescape: new RegExp("(" + C.keys(F.unescape).join("|") + ")", "g")
          };
          C.each([ "escape", "unescape" ], function(t) {
            C[t] = function(e) {
              return null == e ? "" : ("" + e).replace(q[t], function(e) {
                return F[t][e];
              });
            };
          }), C.result = function(t, e) {
            if (null == t) return void 0;
            var n = t[e];
            return C.isFunction(n) ? n.call(t) : n;
          }, C.mixin = function(t) {
            S(C.functions(t), function(e) {
              var n = C[e] = t[e];
              C.prototype[e] = function() {
                var t = [ this._wrapped ];
                return a.apply(t, arguments), D.call(this, n.apply(C, t));
              };
            });
          };
          var R = 0;
          C.uniqueId = function(t) {
            var e = ++R + "";
            return t ? t + e : e;
          }, C.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
          };
          var V = /(.)^/, I = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
          }, N = /\\|'|\r|\n|\t|\u2028|\u2029/g;
          C.template = function(t, e, n) {
            var r;
            n = C.defaults({}, n, C.templateSettings);
            var i = new RegExp([ (n.escape || V).source, (n.interpolate || V).source, (n.evaluate || V).source ].join("|") + "|$", "g"), o = 0, a = "__p+='";
            t.replace(i, function(e, n, r, i, s) {
              return a += t.slice(o, s).replace(N, function(t) {
                return "\\" + I[t];
              }), n && (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"),
              i && (a += "';\n" + i + "\n__p+='"), o = s + e.length, e;
            }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
            try {
              r = new Function(n.variable || "obj", "_", a);
            } catch (s) {
              throw s.source = a, s;
            }
            if (e) return r(e, C);
            var l = function(t) {
              return r.call(this, t, C);
            };
            return l.source = "function(" + (n.variable || "obj") + "){\n" + a + "}", l;
          }, C.chain = function(t) {
            return C(t).chain();
          };
          var D = function(t) {
            return this._chain ? C(t).chain() : t;
          };
          C.mixin(C), S([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(t) {
            var e = r[t];
            C.prototype[t] = function() {
              var n = this._wrapped;
              return e.apply(n, arguments), "shift" != t && "splice" != t || 0 !== n.length || delete n[0],
              D.call(this, n);
            };
          }), S([ "concat", "join", "slice" ], function(t) {
            var e = r[t];
            C.prototype[t] = function() {
              return D.call(this, e.apply(this._wrapped, arguments));
            };
          }), C.extend(C.prototype, {
            chain: function() {
              return this._chain = !0, this;
            },
            value: function() {
              return this._wrapped;
            }
          });
        }).call(this);
      };
      r.forEach(function(e, r) {
        n[e] = t[r];
      }), a.call(n);
      var s = o.apply(n, t);
      return r.concat(i).forEach(function(t) {
        try {
          delete n[t];
        } catch (r) {
          n[t] = e;
        }
      }), s;
    });
  }(this), t("underscore-extensions", [ "require", "_underscore" ], function(t) {
    "use strict";
    var n = t("_underscore");
    return n.isDefined = function(t) {
      return t !== e;
    }, n.exists = function(t) {
      return null !== t && t !== e;
    }, n.mixin({
      hash: function(t, e, r) {
        function i(t) {
          return n.isString(t) ? function(e) {
            return e[t];
          } : t;
        }
        e = i(e || function(t, e) {
          return e;
        }), r = i(r || n.identity);
        var o = {};
        return n.each(t, function(n, i) {
          o[e(n, i, t)] = r(n, i, t);
        }), o;
      },
      transpose: function(t) {
        return n.zip.apply(null, t);
      },
      cloneMany: function(t, e) {
        for (var r = [], i = 0; e > i; i++) r.push(n.clone(t));
        return r;
      }
    }), n;
  }), function(e, n) {
    "function" == typeof t && t.amd ? t("reveal", [], function() {
      return e.Reveal = n(), e.Reveal;
    }) : "object" == typeof exports ? module.exports = n() : e.Reveal = n();
  }(this, function() {
    "use strict";
    function t(t) {
      if (n(), Ln.transforms2d || Ln.transforms3d) {
        Tn.wrapper = document.querySelector(".reveal"), Tn.slides = document.querySelector(".reveal .slides"),
        window.addEventListener("load", N, !1);
        var e = pn.getQueryHash();
        "undefined" != typeof e.dependencies && delete e.dependencies, g(An, t), g(An, e),
        _(), r();
      } else {
        document.body.setAttribute("class", "no-transforms");
        for (var i = document.getElementsByTagName("img"), o = 0, a = i.length; a > o; o++) {
          var s = i[o];
          s.getAttribute("data-src") && (s.setAttribute("src", s.getAttribute("data-src")),
          s.removeAttribute("data-src"));
        }
      }
    }
    function n() {
      Ln.transforms3d = "WebkitPerspective" in document.body.style || "MozPerspective" in document.body.style || "msPerspective" in document.body.style || "OPerspective" in document.body.style || "perspective" in document.body.style,
      Ln.transforms2d = "WebkitTransform" in document.body.style || "MozTransform" in document.body.style || "msTransform" in document.body.style || "OTransform" in document.body.style || "transform" in document.body.style,
      Ln.requestAnimationFrameMethod = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame,
      Ln.requestAnimationFrame = "function" == typeof Ln.requestAnimationFrameMethod,
      Ln.canvas = !!document.createElement("canvas").getContext, Ln.touch = !!("ontouchstart" in window),
      wn = navigator.userAgent.match(/(iphone|ipod|ipad|android)/gi);
    }
    function r() {
      function t() {
        r.length && head.js.apply(null, r), i();
      }
      function e(e) {
        head.ready(e.src.match(/([\w\d_\-]*)\.?js$|[^\\\/]*$/i)[0], function() {
          "function" == typeof e.callback && e.callback.apply(this), 0 === --o && t();
        });
      }
      for (var n = [], r = [], o = 0, a = 0, s = An.dependencies.length; s > a; a++) {
        var l = An.dependencies[a];
        (!l.condition || l.condition()) && (l.async ? r.push(l.src) : n.push(l.src), e(l));
      }
      n.length ? (o = n.length, head.js.apply(null, n)) : t();
    }
    function i() {
      o(), d(), re(), h(), xe(), ue(!0), setTimeout(function() {
        Tn.slides.classList.remove("no-transition"), _n = !0, M("ready", {
          indexh: gn,
          indexv: vn,
          currentSlide: yn
        });
      }, 1), A() && (p(), "complete" === document.readyState ? s() : window.addEventListener("load", s));
    }
    function o() {
      Tn.slides.classList.add("no-transition"), Tn.background = l(Tn.wrapper, "div", "backgrounds", null),
      Tn.progress = l(Tn.wrapper, "div", "progress", "<span></span>"), Tn.progressbar = Tn.progress.querySelector("span"),
      l(Tn.wrapper, "aside", "controls", '<div class="navigate-left"></div><div class="navigate-right"></div><div class="navigate-up"></div><div class="navigate-down"></div>'),
      Tn.slideNumber = l(Tn.wrapper, "div", "slide-number", ""), l(Tn.wrapper, "div", "pause-overlay", null),
      Tn.controls = document.querySelector(".reveal .controls"), Tn.theme = document.querySelector("#theme"),
      Tn.wrapper.setAttribute("role", "application"), Tn.controlsLeft = v(document.querySelectorAll(".navigate-left")),
      Tn.controlsRight = v(document.querySelectorAll(".navigate-right")), Tn.controlsUp = v(document.querySelectorAll(".navigate-up")),
      Tn.controlsDown = v(document.querySelectorAll(".navigate-down")), Tn.controlsPrev = v(document.querySelectorAll(".navigate-prev")),
      Tn.controlsNext = v(document.querySelectorAll(".navigate-next")), Tn.statusDiv = a();
    }
    function a() {
      var t = document.getElementById("aria-status-div");
      return t || (t = document.createElement("div"), t.style.position = "absolute", t.style.height = "1px",
      t.style.width = "1px", t.style.overflow = "hidden", t.style.clip = "rect( 1px, 1px, 1px, 1px )",
      t.setAttribute("id", "aria-status-div"), t.setAttribute("aria-live", "polite"),
      t.setAttribute("aria-atomic", "true"), Tn.wrapper.appendChild(t)), t;
    }
    function s() {
      var t = H(window.innerWidth, window.innerHeight), e = Math.floor(t.width * (1 + An.margin)), n = Math.floor(t.height * (1 + An.margin)), r = t.width, i = t.height;
      x("@page{size:" + e + "px " + n + "px; margin: 0;}"), x(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " + r + "px; max-height:" + i + "px}"),
      document.body.classList.add("print-pdf"), document.body.style.width = e + "px",
      document.body.style.height = n + "px", v(Tn.wrapper.querySelectorAll(kn)).forEach(function(t) {
        if (t.classList.contains("stack") === !1) {
          var o = (e - r) / 2, a = (n - i) / 2, s = S(t), l = Math.max(Math.ceil(s / n), 1);
          (1 === l && An.center || t.classList.contains("center")) && (a = Math.max((n - s) / 2, 0)),
          t.style.left = o + "px", t.style.top = a + "px", t.style.width = r + "px";
          var c = t.querySelector(".slide-background");
          c && (c.style.width = e + "px", c.style.height = n * l + "px", c.style.top = -a + "px",
          c.style.left = -o + "px");
        }
      }), v(Tn.wrapper.querySelectorAll(kn + " .fragment")).forEach(function(t) {
        t.classList.add("visible");
      });
    }
    function l(t, e, n, r) {
      for (var i = t.querySelectorAll("." + n), o = 0; o < i.length; o++) {
        var a = i[o];
        if (a.parentNode === t) return a;
      }
      var s = document.createElement(e);
      return s.classList.add(n), "string" == typeof r && (s.innerHTML = r), t.appendChild(s),
      s;
    }
    function c() {
      var t = A();
      Tn.background.innerHTML = "", Tn.background.classList.add("no-transition"), v(Tn.wrapper.querySelectorAll(Cn)).forEach(function(e) {
        var n;
        n = t ? u(e, e) : u(e, Tn.background), v(e.querySelectorAll("section")).forEach(function(e) {
          t ? u(e, e) : u(e, n), n.classList.add("stack");
        });
      }), An.parallaxBackgroundImage ? (Tn.background.style.backgroundImage = 'url("' + An.parallaxBackgroundImage + '")',
      Tn.background.style.backgroundSize = An.parallaxBackgroundSize, setTimeout(function() {
        Tn.wrapper.classList.add("has-parallax-background");
      }, 1)) : (Tn.background.style.backgroundImage = "", Tn.wrapper.classList.remove("has-parallax-background"));
    }
    function u(t, e) {
      var n = {
        background: t.getAttribute("data-background"),
        backgroundSize: t.getAttribute("data-background-size"),
        backgroundImage: t.getAttribute("data-background-image"),
        backgroundVideo: t.getAttribute("data-background-video"),
        backgroundIframe: t.getAttribute("data-background-iframe"),
        backgroundColor: t.getAttribute("data-background-color"),
        backgroundRepeat: t.getAttribute("data-background-repeat"),
        backgroundPosition: t.getAttribute("data-background-position"),
        backgroundTransition: t.getAttribute("data-background-transition")
      }, r = document.createElement("div");
      r.className = "slide-background " + t.className.replace(/present|past|future/, ""),
      n.background && (/^(http|file|\/\/)/gi.test(n.background) || /\.(svg|png|jpg|jpeg|gif|bmp)$/gi.test(n.background) ? t.setAttribute("data-background-image", n.background) : r.style.background = n.background),
      (n.background || n.backgroundColor || n.backgroundImage || n.backgroundVideo || n.backgroundIframe) && r.setAttribute("data-background-hash", n.background + n.backgroundSize + n.backgroundImage + n.backgroundVideo + n.backgroundIframe + n.backgroundColor + n.backgroundRepeat + n.backgroundPosition + n.backgroundTransition),
      n.backgroundSize && (r.style.backgroundSize = n.backgroundSize), n.backgroundColor && (r.style.backgroundColor = n.backgroundColor),
      n.backgroundRepeat && (r.style.backgroundRepeat = n.backgroundRepeat), n.backgroundPosition && (r.style.backgroundPosition = n.backgroundPosition),
      n.backgroundTransition && r.setAttribute("data-background-transition", n.backgroundTransition),
      e.appendChild(r), t.classList.remove("has-dark-background"), t.classList.remove("has-light-background");
      var i = window.getComputedStyle(r).backgroundColor;
      if (i) {
        var o = k(i);
        o && 0 !== o.a && (C(i) < 128 ? t.classList.add("has-dark-background") : t.classList.add("has-light-background"));
      }
      return r;
    }
    function d() {
      An.postMessage && window.addEventListener("message", function(t) {
        var e = t.data;
        "{" === e.charAt(0) && "}" === e.charAt(e.length - 1) && (e = JSON.parse(e), e.method && "function" == typeof pn[e.method] && pn[e.method].apply(pn, e.args));
      }, !1);
    }
    function h(t) {
      var e = Tn.wrapper.querySelectorAll(kn).length;
      Tn.wrapper.classList.remove(An.transition), "object" == typeof t && g(An, t), Ln.transforms3d === !1 && (An.transition = "linear"),
      Tn.wrapper.classList.add(An.transition), Tn.wrapper.setAttribute("data-transition-speed", An.transitionSpeed),
      Tn.wrapper.setAttribute("data-background-transition", An.backgroundTransition),
      Tn.controls.style.display = An.controls ? "block" : "none", Tn.progress.style.display = An.progress ? "block" : "none",
      An.rtl ? Tn.wrapper.classList.add("rtl") : Tn.wrapper.classList.remove("rtl"), An.center ? Tn.wrapper.classList.add("center") : Tn.wrapper.classList.remove("center"),
      An.pause === !1 && K(), An.mouseWheel ? (document.addEventListener("DOMMouseScroll", Ze, !1),
      document.addEventListener("mousewheel", Ze, !1)) : (document.removeEventListener("DOMMouseScroll", Ze, !1),
      document.removeEventListener("mousewheel", Ze, !1)), An.rollingLinks ? T() : L(),
      An.previewLinks ? F() : (q(), F("[data-preview-link]")), xn && (xn.destroy(), xn = null),
      e > 1 && An.autoSlide && An.autoSlideStoppable && Ln.canvas && Ln.requestAnimationFrame && (xn = new fn(Tn.wrapper, function() {
        return Math.min(Math.max((Date.now() - Nn) / Vn, 0), 1);
      }), xn.on("click", hn), Dn = !1), An.fragments === !1 && v(Tn.slides.querySelectorAll(".fragment")).forEach(function(t) {
        t.classList.add("visible"), t.classList.remove("current-fragment");
      }), ne();
    }
    function f() {
      if (Rn = !0, window.addEventListener("hashchange", sn, !1), window.addEventListener("resize", ln, !1),
      An.touch && (Tn.wrapper.addEventListener("touchstart", We, !1), Tn.wrapper.addEventListener("touchmove", Ge, !1),
      Tn.wrapper.addEventListener("touchend", Xe, !1), window.navigator.pointerEnabled ? (Tn.wrapper.addEventListener("pointerdown", Ye, !1),
      Tn.wrapper.addEventListener("pointermove", Ke, !1), Tn.wrapper.addEventListener("pointerup", Je, !1)) : window.navigator.msPointerEnabled && (Tn.wrapper.addEventListener("MSPointerDown", Ye, !1),
      Tn.wrapper.addEventListener("MSPointerMove", Ke, !1), Tn.wrapper.addEventListener("MSPointerUp", Je, !1))),
      An.keyboard && (document.addEventListener("keydown", $e, !1), document.addEventListener("keypress", Ue, !1)),
      An.progress && Tn.progress && Tn.progress.addEventListener("click", Qe, !1), An.focusBodyOnPageVisibilityChange) {
        var t;
        "hidden" in document ? t = "visibilitychange" : "msHidden" in document ? t = "msvisibilitychange" : "webkitHidden" in document && (t = "webkitvisibilitychange"),
        t && document.addEventListener(t, cn, !1);
      }
      var e = [ "touchstart", "click" ];
      navigator.userAgent.match(/android/gi) && (e = [ "touchstart" ]), e.forEach(function(t) {
        Tn.controlsLeft.forEach(function(e) {
          e.addEventListener(t, tn, !1);
        }), Tn.controlsRight.forEach(function(e) {
          e.addEventListener(t, en, !1);
        }), Tn.controlsUp.forEach(function(e) {
          e.addEventListener(t, nn, !1);
        }), Tn.controlsDown.forEach(function(e) {
          e.addEventListener(t, rn, !1);
        }), Tn.controlsPrev.forEach(function(e) {
          e.addEventListener(t, on, !1);
        }), Tn.controlsNext.forEach(function(e) {
          e.addEventListener(t, an, !1);
        });
      });
    }
    function p() {
      Rn = !1, document.removeEventListener("keydown", $e, !1), document.removeEventListener("keypress", Ue, !1),
      window.removeEventListener("hashchange", sn, !1), window.removeEventListener("resize", ln, !1),
      Tn.wrapper.removeEventListener("touchstart", We, !1), Tn.wrapper.removeEventListener("touchmove", Ge, !1),
      Tn.wrapper.removeEventListener("touchend", Xe, !1), window.navigator.pointerEnabled ? (Tn.wrapper.removeEventListener("pointerdown", Ye, !1),
      Tn.wrapper.removeEventListener("pointermove", Ke, !1), Tn.wrapper.removeEventListener("pointerup", Je, !1)) : window.navigator.msPointerEnabled && (Tn.wrapper.removeEventListener("MSPointerDown", Ye, !1),
      Tn.wrapper.removeEventListener("MSPointerMove", Ke, !1), Tn.wrapper.removeEventListener("MSPointerUp", Je, !1)),
      An.progress && Tn.progress && Tn.progress.removeEventListener("click", Qe, !1),
      [ "touchstart", "click" ].forEach(function(t) {
        Tn.controlsLeft.forEach(function(e) {
          e.removeEventListener(t, tn, !1);
        }), Tn.controlsRight.forEach(function(e) {
          e.removeEventListener(t, en, !1);
        }), Tn.controlsUp.forEach(function(e) {
          e.removeEventListener(t, nn, !1);
        }), Tn.controlsDown.forEach(function(e) {
          e.removeEventListener(t, rn, !1);
        }), Tn.controlsPrev.forEach(function(e) {
          e.removeEventListener(t, on, !1);
        }), Tn.controlsNext.forEach(function(e) {
          e.removeEventListener(t, an, !1);
        });
      });
    }
    function g(t, e) {
      for (var n in e) t[n] = e[n];
    }
    function v(t) {
      return Array.prototype.slice.call(t);
    }
    function m(t) {
      if ("string" == typeof t) {
        if ("null" === t) return null;
        if ("true" === t) return !0;
        if ("false" === t) return !1;
        if (t.match(/^\d+$/)) return parseFloat(t);
      }
      return t;
    }
    function y(t, e) {
      var n = t.x - e.x, r = t.y - e.y;
      return Math.sqrt(n * n + r * r);
    }
    function b(t, e) {
      t.style.WebkitTransformOrigin = e, t.style.MozTransformOrigin = e, t.style.msTransformOrigin = e,
      t.style.OTransformOrigin = e, t.style.transformOrigin = e;
    }
    function w(t, e) {
      t.style.WebkitTransform = e, t.style.MozTransform = e, t.style.msTransform = e,
      t.style.OTransform = e, t.style.transform = e;
    }
    function x(t) {
      var e = document.createElement("style");
      e.type = "text/css", e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t)),
      document.getElementsByTagName("head")[0].appendChild(e);
    }
    function k(t) {
      var e = t.match(/^#([0-9a-f]{3})$/i);
      if (e && e[1]) return e = e[1], {
        r: 17 * parseInt(e.charAt(0), 16),
        g: 17 * parseInt(e.charAt(1), 16),
        b: 17 * parseInt(e.charAt(2), 16)
      };
      var n = t.match(/^#([0-9a-f]{6})$/i);
      if (n && n[1]) return n = n[1], {
        r: parseInt(n.substr(0, 2), 16),
        g: parseInt(n.substr(2, 2), 16),
        b: parseInt(n.substr(4, 2), 16)
      };
      var r = t.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
      if (r) return {
        r: parseInt(r[1], 10),
        g: parseInt(r[2], 10),
        b: parseInt(r[3], 10)
      };
      var i = t.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);
      return i ? {
        r: parseInt(i[1], 10),
        g: parseInt(i[2], 10),
        b: parseInt(i[3], 10),
        a: parseFloat(i[4])
      } : null;
    }
    function C(t) {
      return "string" == typeof t && (t = k(t)), t ? (299 * t.r + 587 * t.g + 114 * t.b) / 1e3 : null;
    }
    function S(t) {
      var e = 0;
      if (t) {
        var n = 0;
        v(t.childNodes).forEach(function(t) {
          "number" == typeof t.offsetTop && t.style && ("absolute" === window.getComputedStyle(t).position && (n += 1),
          e = Math.max(e, t.offsetTop + t.offsetHeight));
        }), 0 === n && (e = t.offsetHeight);
      }
      return e;
    }
    function E(t, e) {
      if (e = e || 0, t) {
        var n, r = t.style.height;
        return t.style.height = "0px", n = e - t.parentNode.offsetHeight, t.style.height = r + "px",
        n;
      }
      return e;
    }
    function A() {
      return /print-pdf/gi.test(window.location.search);
    }
    function _() {
      An.hideAddressBar && wn && (window.addEventListener("load", P, !1), window.addEventListener("orientationchange", P, !1));
    }
    function P() {
      setTimeout(function() {
        window.scrollTo(0, 1);
      }, 10);
    }
    function M(t, e) {
      var n = document.createEvent("HTMLEvents", 1, 2);
      n.initEvent(t, !0, !0), g(n, e), Tn.wrapper.dispatchEvent(n), An.postMessageEvents && window.parent !== window.self && window.parent.postMessage(JSON.stringify({
        namespace: "reveal",
        eventName: t,
        state: _e()
      }), "*");
    }
    function T() {
      if (Ln.transforms3d && !("msPerspective" in document.body.style)) for (var t = Tn.wrapper.querySelectorAll(kn + " a"), e = 0, n = t.length; n > e; e++) {
        var r = t[e];
        if (!(!r.textContent || r.querySelector("*") || r.className && r.classList.contains(r, "roll"))) {
          var i = document.createElement("span");
          i.setAttribute("data-title", r.text), i.innerHTML = r.innerHTML, r.classList.add("roll"),
          r.innerHTML = "", r.appendChild(i);
        }
      }
    }
    function L() {
      for (var t = Tn.wrapper.querySelectorAll(kn + " a.roll"), e = 0, n = t.length; n > e; e++) {
        var r = t[e], i = r.querySelector("span");
        i && (r.classList.remove("roll"), r.innerHTML = i.innerHTML);
      }
    }
    function F(t) {
      var e = v(document.querySelectorAll(t ? t : "a"));
      e.forEach(function(t) {
        /^(http|www)/gi.test(t.getAttribute("href")) && t.addEventListener("click", dn, !1);
      });
    }
    function q() {
      var t = v(document.querySelectorAll("a"));
      t.forEach(function(t) {
        /^(http|www)/gi.test(t.getAttribute("href")) && t.removeEventListener("click", dn, !1);
      });
    }
    function R(t) {
      I(), Tn.overlay = document.createElement("div"), Tn.overlay.classList.add("overlay"),
      Tn.overlay.classList.add("overlay-preview"), Tn.wrapper.appendChild(Tn.overlay),
      Tn.overlay.innerHTML = [ "<header>", '<a class="close" href="#"><span class="icon"></span></a>', '<a class="external" href="' + t + '" target="_blank"><span class="icon"></span></a>', "</header>", '<div class="spinner"></div>', '<div class="viewport">', '<iframe src="' + t + '"></iframe>', "</div>" ].join(""),
      Tn.overlay.querySelector("iframe").addEventListener("load", function() {
        Tn.overlay.classList.add("loaded");
      }, !1), Tn.overlay.querySelector(".close").addEventListener("click", function(t) {
        I(), t.preventDefault();
      }, !1), Tn.overlay.querySelector(".external").addEventListener("click", function() {
        I();
      }, !1), setTimeout(function() {
        Tn.overlay.classList.add("visible");
      }, 1);
    }
    function V() {
      if (An.help) {
        I(), Tn.overlay = document.createElement("div"), Tn.overlay.classList.add("overlay"),
        Tn.overlay.classList.add("overlay-help"), Tn.wrapper.appendChild(Tn.overlay);
        var t = '<p class="title">Keyboard Shortcuts</p><br/>';
        t += "<table><th>KEY</th><th>ACTION</th>";
        for (var e in jn) t += "<tr><td>" + e + "</td><td>" + jn[e] + "</td></tr>";
        t += "</table>", Tn.overlay.innerHTML = [ "<header>", '<a class="close" href="#"><span class="icon"></span></a>', "</header>", '<div class="viewport">', '<div class="viewport-inner">' + t + "</div>", "</div>" ].join(""),
        Tn.overlay.querySelector(".close").addEventListener("click", function(t) {
          I(), t.preventDefault();
        }, !1), setTimeout(function() {
          Tn.overlay.classList.add("visible");
        }, 1);
      }
    }
    function I() {
      Tn.overlay && (Tn.overlay.parentNode.removeChild(Tn.overlay), Tn.overlay = null);
    }
    function N() {
      if (Tn.wrapper && !A()) {
        var t;
        t = document.body === document.msFullscreenElement ? H(screen.width, screen.height) : H();
        var e = 20;
        D(An.width, An.height, e), Tn.slides.style.width = t.width + "px", Tn.slides.style.height = t.height + "px",
        Mn = Math.min(t.presentationWidth / t.width, t.presentationHeight / t.height), Mn = Math.max(Mn, An.minScale),
        Mn = Math.min(Mn, An.maxScale), 1 === Mn ? (Tn.slides.style.zoom = "", Tn.slides.style.left = "",
        Tn.slides.style.top = "", Tn.slides.style.bottom = "", Tn.slides.style.right = "",
        w(Tn.slides, "")) : An.zoomInChrome && !wn && /chrome/i.test(navigator.userAgent) && "undefined" != typeof Tn.slides.style.zoom ? Tn.slides.style.zoom = Mn - An.zoomReduction : !wn && -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") && $() ? w(Tn.slides, "scale(" + (Mn - An.zoomReduction) + ") translateY(25%)") : (b(Tn.slides, "center top"),
        w(Tn.slides, "scale(" + (Mn - An.zoomReduction) + ")"));
        for (var n = v(Tn.wrapper.querySelectorAll(kn)), r = 0, i = n.length; i > r; r++) {
          var o = n[r];
          "none" !== o.style.display && (o.style.top = An.center || o.classList.contains("center") ? o.classList.contains("stack") ? 0 : Math.max((t.height - S(o)) / 2 - e, 0) + "px" : "");
        }
        se(), de();
      }
    }
    function D(t, e) {
      v(Tn.slides.querySelectorAll("section > .stretch")).forEach(function(n) {
        var r = E(n, e);
        if (/(img|video)/gi.test(n.nodeName)) {
          var i = n.naturalWidth || n.videoWidth, o = n.naturalHeight || n.videoHeight, a = Math.min(t / i, r / o);
          n.style.width = i * a + "px", n.style.height = o * a + "px";
        } else n.style.width = t + "px", n.style.height = r + "px";
      });
    }
    function H(t, e) {
      var n = {
        width: An.width,
        height: An.height,
        presentationWidth: t || Tn.wrapper.offsetWidth,
        presentationHeight: e || Tn.wrapper.offsetHeight
      };
      return n.presentationWidth -= n.presentationHeight * An.margin, n.presentationHeight -= n.presentationHeight * An.margin,
      "string" == typeof n.width && /%$/.test(n.width) && (n.width = parseInt(n.width, 10) / 100 * n.presentationWidth),
      "string" == typeof n.height && /%$/.test(n.height) && (n.height = parseInt(n.height, 10) / 100 * n.presentationHeight),
      n;
    }
    function j(t, e) {
      "object" == typeof t && "function" == typeof t.setAttribute && t.setAttribute("data-previous-indexv", e || 0);
    }
    function O(t) {
      if ("object" == typeof t && "function" == typeof t.setAttribute && t.classList.contains("stack")) {
        var e = t.hasAttribute("data-start-indexv") ? "data-start-indexv" : "data-previous-indexv";
        return parseInt(t.getAttribute(e) || 0, 10);
      }
      return 0;
    }
    function B() {
      if (An.overview) {
        Re();
        var t = Tn.wrapper.classList.contains("overview"), e = window.innerWidth < 400 ? 1e3 : 2e3;
        Tn.wrapper.classList.add("overview"), Tn.wrapper.classList.remove("overview-deactivating"),
        Tn.slideNumber.classList.add("is-shown");
        for (var n = Tn.wrapper.querySelectorAll(Cn), r = 0, i = n.length; i > r; r++) {
          var o = n[r], a = An.rtl ? -115 : 115;
          if (o.setAttribute("data-index-h", r), w(o, "translateZ(-" + e + "px) translate(" + (r - gn) * a + "%, 0%)"),
          o.classList.contains("stack")) for (var s = o.querySelectorAll("section"), l = 0, c = s.length; c > l; l++) {
            var u = r === gn ? vn : O(o), d = s[l];
            d.setAttribute("data-index-h", r), d.setAttribute("data-index-v", l), w(d, "translate(0%, " + 125 * (l - u) + "%)"),
            d.addEventListener("click", un, !0);
          } else o.addEventListener("click", un, !0);
        }
        ae(), N(), t || M("overviewshown", {
          indexh: gn,
          indexv: vn,
          currentSlide: yn
        });
      }
    }
    function z() {
      An.overview && (Tn.wrapper.classList.remove("overview"), Tn.wrapper.classList.add("overview-deactivating"),
      Tn.slideNumber.classList.remove("is-shown"), setTimeout(function() {
        Tn.wrapper.classList.remove("overview-deactivating");
      }, 1), v(Tn.wrapper.querySelectorAll(kn)).forEach(function(t) {
        w(t, ""), t.removeEventListener("click", un, !0);
      }), ee(gn, vn), qe(), M("overviewhidden", {
        indexh: gn,
        indexv: vn,
        currentSlide: yn
      }));
    }
    function U(t) {
      "boolean" == typeof t ? t ? B() : z() : $() ? z() : B();
    }
    function $() {
      return Tn.wrapper.classList.contains("overview");
    }
    function W(t) {
      return t = t ? t : yn, t && t.parentNode && !!t.parentNode.nodeName.match(/section/i);
    }
    function G(t) {
      var e = document.body, n = !0, r = e.requestFullScreen || e.webkitRequestFullScreen || e.webkitRequestFullscreen || e.mozRequestFullScreen || e.msRequestFullscreen;
      if (r) r.apply(e), n = !1; else if ("undefined" != typeof window.ActiveXObject) try {
        var i = new ActiveXObject("WScript.Shell");
        i && (i.SendKeys("{F11}"), n = !1);
      } catch (o) {}
      n && t && t();
    }
    function X() {
      var t = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;
      if (t) t.apply(document); else if ("undefined" != typeof window.ActiveXObject) try {
        var e = new ActiveXObject("WScript.Shell");
        e && e.SendKeys("{F11}");
      } catch (n) {}
    }
    function Y() {
      if (An.pause) {
        var t = Tn.wrapper.classList.contains("paused");
        Re(), Tn.wrapper.classList.add("paused"), t === !1 && M("paused");
      }
    }
    function K() {
      var t = Tn.wrapper.classList.contains("paused");
      Tn.wrapper.classList.remove("paused"), qe(), t && M("resumed");
    }
    function J(t) {
      "boolean" == typeof t ? t ? Y() : K() : Z() ? K() : Y();
    }
    function Z() {
      return Tn.wrapper.classList.contains("paused");
    }
    function Q(t) {
      "boolean" == typeof t ? t ? Ie() : Ve() : Dn ? Ie() : Ve();
    }
    function te() {
      return !(!Vn || Dn);
    }
    function ee(t, n, r, i) {
      mn = yn;
      var o = Tn.wrapper.querySelectorAll(Cn);
      n === e && (n = O(o[t])), mn && mn.parentNode && mn.parentNode.classList.contains("stack") && j(mn.parentNode, vn);
      var a = Pn.concat();
      Pn.length = 0;
      var s = gn || 0, l = vn || 0;
      gn = oe(Cn, t === e ? gn : t), vn = oe(Sn, n === e ? vn : n), ae(), N();
      t: for (var c = 0, u = Pn.length; u > c; c++) {
        for (var d = 0; d < a.length; d++) if (a[d] === Pn[c]) {
          a.splice(d, 1);
          continue t;
        }
        document.documentElement.classList.add(Pn[c]), M(Pn[c]);
      }
      for (;a.length; ) document.documentElement.classList.remove(a.pop());
      $() && B();
      var h = o[gn], f = h.querySelectorAll("section");
      yn = f[vn] || h, "undefined" != typeof r && Te(r);
      var p = gn !== s || vn !== l;
      p ? M("slidechanged", {
        indexh: gn,
        indexv: vn,
        previousSlide: mn,
        currentSlide: yn,
        origin: i
      }) : mn = null, mn && (mn.classList.remove("present"), mn.setAttribute("aria-hidden", "true"),
      Tn.wrapper.querySelector(En).classList.contains("present") && setTimeout(function() {
        var t, e = v(Tn.wrapper.querySelectorAll(Cn + ".stack"));
        for (t in e) e[t] && j(e[t], 0);
      }, 0)), (p || !mn) && (ye(mn), me(yn)), Tn.statusDiv.textContent = yn.textContent,
      ce(), se(), ue(), de(), le(), ke(), qe();
    }
    function ne() {
      p(), f(), N(), Vn = An.autoSlide, qe(), c(), ke(), ie(), ce(), se(), ue(!0), le(),
      ae(), ve();
    }
    function re() {
      var t = v(Tn.wrapper.querySelectorAll(Cn));
      t.forEach(function(t) {
        var e = v(t.querySelectorAll("section"));
        e.forEach(function(t, e) {
          e > 0 && (t.classList.remove("present"), t.classList.remove("past"), t.classList.add("future"),
          t.setAttribute("aria-hidden", "true"));
        });
      });
    }
    function ie() {
      var t = v(Tn.wrapper.querySelectorAll(Cn));
      t.forEach(function(t) {
        var e = v(t.querySelectorAll("section"));
        e.forEach(function(t) {
          Me(t.querySelectorAll(".fragment"));
        }), 0 === e.length && Me(t.querySelectorAll(".fragment"));
      });
    }
    function oe(t, e) {
      var n = v(Tn.wrapper.querySelectorAll(t)), r = n.length, i = A();
      if (r) {
        An.loop && (e %= r, 0 > e && (e = r + e)), e = Math.max(Math.min(e, r - 1), 0);
        for (var o = 0; r > o; o++) {
          var a = n[o], s = An.rtl && !W(a);
          if (a.classList.remove("past"), a.classList.remove("present"), a.classList.remove("future"),
          a.setAttribute("hidden", ""), a.setAttribute("aria-hidden", "true"), a.querySelector("section") && a.classList.add("stack"),
          i) a.classList.add("present"); else if (e > o) {
            if (a.classList.add(s ? "future" : "past"), An.fragments) for (var l = v(a.querySelectorAll(".fragment")); l.length; ) {
              var c = l.pop();
              c.classList.add("visible"), c.classList.remove("current-fragment");
            }
          } else if (o > e && (a.classList.add(s ? "past" : "future"), An.fragments)) for (var u = v(a.querySelectorAll(".fragment.visible")); u.length; ) {
            var d = u.pop();
            d.classList.remove("visible"), d.classList.remove("current-fragment");
          }
        }
        n[e].classList.add("present"), n[e].removeAttribute("hidden"), n[e].removeAttribute("aria-hidden");
        var h = n[e].getAttribute("data-state");
        h && (Pn = Pn.concat(h.split(" ")));
      } else e = 0;
      return e;
    }
    function ae() {
      var t, e, n = v(Tn.wrapper.querySelectorAll(Cn)), r = n.length;
      if (r && "undefined" != typeof gn) {
        var i = $() ? 10 : An.viewDistance;
        wn && (i = $() ? 6 : 2), A() && (i = Number.MAX_VALUE);
        for (var o = 0; r > o; o++) {
          var a = n[o], s = v(a.querySelectorAll("section")), l = s.length;
          if (t = Math.abs(((gn || 0) - o) % (r - i)) || 0, i > t ? he(a) : fe(a), l) for (var c = O(a), u = 0; l > u; u++) {
            var d = s[u];
            e = o === (gn || 0) ? Math.abs((vn || 0) - u) : Math.abs(u - c), i > t + e ? he(d) : fe(d);
          }
        }
      }
    }
    function se() {
      An.progress && Tn.progressbar && (Tn.progressbar.style.width = be() * Tn.wrapper.offsetWidth + "px");
    }
    function le() {
      if (An.slideNumber && Tn.slideNumber) {
        var t = gn;
        vn > 0 && (t += " - " + vn), Tn.slideNumber.innerHTML = "Slide " + (t + 1) + " of " + document.querySelectorAll(kn + ":not(.stack)").length;
      }
    }
    function ce() {
      var t = pe(), e = ge();
      Tn.controlsLeft.concat(Tn.controlsRight).concat(Tn.controlsUp).concat(Tn.controlsDown).concat(Tn.controlsPrev).concat(Tn.controlsNext).forEach(function(t) {
        t.classList.remove("enabled"), t.classList.remove("fragmented");
      }), t.left && Tn.controlsLeft.forEach(function(t) {
        t.classList.add("enabled");
      }), t.right && Tn.controlsRight.forEach(function(t) {
        t.classList.add("enabled");
      }), t.up && Tn.controlsUp.forEach(function(t) {
        t.classList.add("enabled");
      }), t.down && Tn.controlsDown.forEach(function(t) {
        t.classList.add("enabled");
      }), (t.left || t.up) && Tn.controlsPrev.forEach(function(t) {
        t.classList.add("enabled");
      }), (t.right || t.down) && Tn.controlsNext.forEach(function(t) {
        t.classList.add("enabled");
      }), yn && (e.prev && Tn.controlsPrev.forEach(function(t) {
        t.classList.add("fragmented", "enabled");
      }), e.next && Tn.controlsNext.forEach(function(t) {
        t.classList.add("fragmented", "enabled");
      }), W(yn) ? (e.prev && Tn.controlsUp.forEach(function(t) {
        t.classList.add("fragmented", "enabled");
      }), e.next && Tn.controlsDown.forEach(function(t) {
        t.classList.add("fragmented", "enabled");
      })) : (e.prev && Tn.controlsLeft.forEach(function(t) {
        t.classList.add("fragmented", "enabled");
      }), e.next && Tn.controlsRight.forEach(function(t) {
        t.classList.add("fragmented", "enabled");
      })));
    }
    function ue(t) {
      var e = null, n = An.rtl ? "future" : "past", r = An.rtl ? "past" : "future";
      if (v(Tn.background.childNodes).forEach(function(i, o) {
        i.classList.remove("past"), i.classList.remove("present"), i.classList.remove("future"),
        gn > o ? i.classList.add(n) : o > gn ? i.classList.add(r) : (i.classList.add("present"),
        e = i), (t || o === gn) && v(i.querySelectorAll(".slide-background")).forEach(function(t, n) {
          t.classList.remove("past"), t.classList.remove("present"), t.classList.remove("future"),
          vn > n ? t.classList.add("past") : n > vn ? t.classList.add("future") : (t.classList.add("present"),
          o === gn && (e = t));
        });
      }), bn) {
        var i = bn.querySelector("video");
        i && i.pause();
      }
      if (e) {
        var o = e.querySelector("video");
        o && (o.currentTime = 0, o.play());
        var a = bn ? bn.getAttribute("data-background-hash") : null, s = e.getAttribute("data-background-hash");
        s && s === a && e !== bn && Tn.background.classList.add("no-transition"), bn = e;
      }
      yn && [ "has-light-background", "has-dark-background" ].forEach(function(t) {
        yn.classList.contains(t) ? Tn.wrapper.classList.add(t) : Tn.wrapper.classList.remove(t);
      }), setTimeout(function() {
        Tn.background.classList.remove("no-transition");
      }, 1);
    }
    function de() {
      if (An.parallaxBackgroundImage) {
        var t, e, n = Tn.wrapper.querySelectorAll(Cn), r = Tn.wrapper.querySelectorAll(Sn), i = Tn.background.style.backgroundSize.split(" ");
        1 === i.length ? t = e = parseInt(i[0], 10) : (t = parseInt(i[0], 10), e = parseInt(i[1], 10));
        var o = Tn.background.offsetWidth, a = n.length, s = -(t - o) / (a - 1) * gn, l = Tn.background.offsetHeight, c = r.length, u = c > 1 ? -(e - l) / (c - 1) * vn : 0;
        Tn.background.style.backgroundPosition = s + "px " + u + "px";
      }
    }
    function he(t) {
      t.style.display = "block", v(t.querySelectorAll("img[data-src], video[data-src], audio[data-src], iframe[data-src]")).forEach(function(t) {
        t.setAttribute("src", t.getAttribute("data-src")), t.removeAttribute("data-src");
      }), v(t.querySelectorAll("video, audio")).forEach(function(t) {
        var e = 0;
        v(t.querySelectorAll("source[data-src]")).forEach(function(t) {
          t.setAttribute("src", t.getAttribute("data-src")), t.removeAttribute("data-src"),
          e += 1;
        }), e > 0 && t.load();
      });
      var e = Ce(t), n = Ae(e.h, e.v);
      if (n && (n.style.display = "block", n.hasAttribute("data-loaded") === !1)) {
        n.setAttribute("data-loaded", "true");
        var r = t.getAttribute("data-background-image"), i = t.getAttribute("data-background-video"), o = t.getAttribute("data-background-iframe");
        if (r) n.style.backgroundImage = "url(" + r + ")"; else if (i && !we()) {
          var a = document.createElement("video");
          i.split(",").forEach(function(t) {
            a.innerHTML += '<source src="' + t + '">';
          }), n.appendChild(a);
        } else if (o) {
          var s = document.createElement("iframe");
          s.setAttribute("src", o), s.style.width = "100%", s.style.height = "100%", s.style.maxHeight = "100%",
          s.style.maxWidth = "100%", n.appendChild(s);
        }
      }
    }
    function fe(t) {
      t.style.display = "none";
      var e = Ce(t), n = Ae(e.h, e.v);
      n && (n.style.display = "none");
    }
    function pe() {
      var t = Tn.wrapper.querySelectorAll(Cn), e = Tn.wrapper.querySelectorAll(Sn), n = {
        left: gn > 0 || An.loop,
        right: gn < t.length - 1 || An.loop,
        up: vn > 0,
        down: vn < e.length - 1
      };
      if (An.rtl) {
        var r = n.left;
        n.left = n.right, n.right = r;
      }
      return n;
    }
    function ge() {
      if (yn && An.fragments) {
        var t = yn.querySelectorAll(".fragment"), e = yn.querySelectorAll(".fragment:not(.visible)");
        return {
          prev: t.length - e.length > 0,
          next: !!e.length
        };
      }
      return {
        prev: !1,
        next: !1
      };
    }
    function ve() {
      v(Tn.slides.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(t) {
        var e = t.getAttribute("src");
        /enablejsapi\=1/gi.test(e) || t.setAttribute("src", e + (/\?/.test(e) ? "&" : "?") + "enablejsapi=1");
      }), v(Tn.slides.querySelectorAll('iframe[src*="player.vimeo.com/"]')).forEach(function(t) {
        var e = t.getAttribute("src");
        /api\=1/gi.test(e) || t.setAttribute("src", e + (/\?/.test(e) ? "&" : "?") + "api=1");
      });
    }
    function me(t) {
      t && !we() && (v(t.querySelectorAll("video, audio")).forEach(function(t) {
        t.hasAttribute("data-autoplay") && t.play();
      }), v(t.querySelectorAll("iframe")).forEach(function(t) {
        t.contentWindow.postMessage("slide:start", "*");
      }), v(t.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(t) {
        t.hasAttribute("data-autoplay") && t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
      }), v(t.querySelectorAll('iframe[src*="player.vimeo.com/"]')).forEach(function(t) {
        t.hasAttribute("data-autoplay") && t.contentWindow.postMessage('{"method":"play"}', "*");
      }));
    }
    function ye(t) {
      t && t.parentNode && (v(t.querySelectorAll("video, audio")).forEach(function(t) {
        t.hasAttribute("data-ignore") || t.pause();
      }), v(t.querySelectorAll("iframe")).forEach(function(t) {
        t.contentWindow.postMessage("slide:stop", "*");
      }), v(t.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(t) {
        t.hasAttribute("data-ignore") || "function" != typeof t.contentWindow.postMessage || t.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
      }), v(t.querySelectorAll('iframe[src*="player.vimeo.com/"]')).forEach(function(t) {
        t.hasAttribute("data-ignore") || "function" != typeof t.contentWindow.postMessage || t.contentWindow.postMessage('{"method":"pause"}', "*");
      }));
    }
    function be() {
      var t = v(Tn.wrapper.querySelectorAll(Cn)), e = Se(), n = 0;
      t: for (var r = 0; r < t.length; r++) {
        for (var i = t[r], o = v(i.querySelectorAll("section")), a = 0; a < o.length; a++) {
          if (o[a].classList.contains("present")) break t;
          n++;
        }
        if (i.classList.contains("present")) break;
        i.classList.contains("stack") === !1 && n++;
      }
      if (yn) {
        var s = yn.querySelectorAll(".fragment");
        if (s.length > 0) {
          var l = yn.querySelectorAll(".fragment.visible"), c = .9;
          n += l.length / s.length * c;
        }
      }
      return n / (e - 1);
    }
    function we() {
      return !!window.location.search.match(/receiver/gi);
    }
    function xe() {
      var t = window.location.hash, e = t.slice(2).split("/"), n = t.replace(/#|\//gi, "");
      if (isNaN(parseInt(e[0], 10)) && n.length) {
        var r;
        if (/^[a-zA-Z][\w:.-]*$/.test(n) && (r = document.querySelector("#" + n)), r) {
          var i = pn.getIndices(r);
          ee(i.h, i.v);
        } else ee(gn || 0, vn || 0);
      } else {
        var o = parseInt(e[0], 10) || 0, a = parseInt(e[1], 10) || 0;
        (o !== gn || a !== vn) && ee(o, a);
      }
    }
    function ke(t) {
      if (An.history) if (clearTimeout(qn), "number" == typeof t) qn = setTimeout(ke, t); else if (yn) {
        var e = "/", n = yn.getAttribute("id");
        n && (n = n.toLowerCase(), n = n.replace(/[^a-zA-Z0-9\-\_\:\.]/g, "")), "string" == typeof n && n.length ? e = "/" + n : ((gn > 0 || vn > 0) && (e += gn),
        vn > 0 && (e += "/" + vn)), window.location.hash = e;
      }
    }
    function Ce(t) {
      var n, r = gn, i = vn;
      if (t) {
        var o = W(t), a = o ? t.parentNode : t, s = v(Tn.wrapper.querySelectorAll(Cn));
        r = Math.max(s.indexOf(a), 0), i = e, o && (i = Math.max(v(t.parentNode.querySelectorAll("section")).indexOf(t), 0));
      }
      if (!t && yn) {
        var l = yn.querySelectorAll(".fragment").length > 0;
        if (l) {
          var c = yn.querySelector(".current-fragment");
          n = c && c.hasAttribute("data-fragment-index") ? parseInt(c.getAttribute("data-fragment-index"), 10) : yn.querySelectorAll(".fragment.visible").length - 1;
        }
      }
      return {
        h: r,
        v: i,
        f: n
      };
    }
    function Se() {
      return Tn.wrapper.querySelectorAll(kn + ":not(.stack)").length;
    }
    function Ee(t, n) {
      var r = Tn.wrapper.querySelectorAll(Cn)[t], i = r && r.querySelectorAll("section");
      return i && i.length && "number" == typeof n ? i ? i[n] : e : r;
    }
    function Ae(t, n) {
      if (A()) {
        var r = Ee(t, n);
        if (r) {
          var i = r.querySelector(".slide-background");
          if (i && i.parentNode === r) return i;
        }
        return e;
      }
      var o = Tn.wrapper.querySelectorAll(".backgrounds>.slide-background")[t], a = o && o.querySelectorAll(".slide-background");
      return a && a.length && "number" == typeof n ? a ? a[n] : e : o;
    }
    function _e() {
      var t = Ce();
      return {
        indexh: t.h,
        indexv: t.v,
        indexf: t.f,
        paused: Z(),
        overview: $()
      };
    }
    function Pe(t) {
      if ("object" == typeof t) {
        ee(m(t.indexh), m(t.indexv), m(t.indexf));
        var e = m(t.paused), n = m(t.overview);
        "boolean" == typeof e && e !== Z() && J(e), "boolean" == typeof n && n !== $() && U(n);
      }
    }
    function Me(t) {
      t = v(t);
      var e = [], n = [], r = [];
      t.forEach(function(t) {
        if (t.hasAttribute("data-fragment-index")) {
          var r = parseInt(t.getAttribute("data-fragment-index"), 10);
          e[r] || (e[r] = []), e[r].push(t);
        } else n.push([ t ]);
      }), e = e.concat(n);
      var i = 0;
      return e.forEach(function(t) {
        t.forEach(function(t) {
          r.push(t), t.setAttribute("data-fragment-index", i);
        }), i++;
      }), r;
    }
    function Te(t, e) {
      if (yn && An.fragments) {
        var n = Me(yn.querySelectorAll(".fragment"));
        if (n.length) {
          if ("number" != typeof t) {
            var r = Me(yn.querySelectorAll(".fragment.visible")).pop();
            t = r ? parseInt(r.getAttribute("data-fragment-index") || 0, 10) : -1;
          }
          "number" == typeof e && (t += e);
          var i = [], o = [];
          return v(n).forEach(function(e, n) {
            e.hasAttribute("data-fragment-index") && (n = parseInt(e.getAttribute("data-fragment-index"), 10)),
            t >= n ? (e.classList.contains("visible") || i.push(e), e.classList.add("visible"),
            e.classList.remove("current-fragment"), Tn.statusDiv.textContent = e.textContent,
            n === t && e.classList.add("current-fragment")) : (e.classList.contains("visible") && o.push(e),
            e.classList.remove("visible"), e.classList.remove("current-fragment"));
          }), o.length && M("fragmenthidden", {
            fragment: o[0],
            fragments: o
          }), i.length && M("fragmentshown", {
            fragment: i[0],
            fragments: i
          }), ce(), se(), !(!i.length && !o.length);
        }
      }
      return !1;
    }
    function Le() {
      return Te(null, 1);
    }
    function Fe() {
      return Te(null, -1);
    }
    function qe() {
      if (Re(), yn) {
        var t = yn.querySelector(".current-fragment"), e = t ? t.getAttribute("data-autoslide") : null, n = yn.parentNode ? yn.parentNode.getAttribute("data-autoslide") : null, r = yn.getAttribute("data-autoslide");
        Vn = e ? parseInt(e, 10) : r ? parseInt(r, 10) : n ? parseInt(n, 10) : An.autoSlide,
        v(yn.querySelectorAll("video, audio")).forEach(function(t) {
          t.hasAttribute("data-autoplay") && Vn && 1e3 * t.duration > Vn && (Vn = 1e3 * t.duration + 1e3);
        }), !Vn || Dn || Z() || $() || pn.isLastSlide() && !ge().next && An.loop !== !0 || (In = setTimeout(Be, Vn),
        Nn = Date.now()), xn && xn.setPlaying(-1 !== In);
      }
    }
    function Re() {
      clearTimeout(In), In = -1;
    }
    function Ve() {
      Vn && !Dn && (Dn = !0, M("autoslidepaused"), clearTimeout(In), xn && xn.setPlaying(!1));
    }
    function Ie() {
      Vn && Dn && (Dn = !1, M("autoslideresumed"), qe());
    }
    function Ne() {
      An.rtl ? ($() || Le() === !1) && pe().left && ee(gn + 1) : ($() || Fe() === !1) && pe().left && ee(gn - 1);
    }
    function De() {
      An.rtl ? ($() || Fe() === !1) && pe().right && ee(gn - 1) : ($() || Le() === !1) && pe().right && ee(gn + 1);
    }
    function He() {
      ($() || Fe() === !1) && pe().up && ee(gn, vn - 1);
    }
    function je() {
      ($() || Le() === !1) && pe().down && ee(gn, vn + 1);
    }
    function Oe() {
      if (Fe() === !1) if (pe().up) He(); else {
        var t;
        if (t = An.rtl ? v(Tn.wrapper.querySelectorAll(Cn + ".future")).pop() : v(Tn.wrapper.querySelectorAll(Cn + ".past")).pop()) {
          var n = t.querySelectorAll("section").length - 1 || e, r = gn - 1;
          ee(r, n);
        }
      }
    }
    function Be() {
      Le() === !1 && (pe().down ? je() : An.rtl ? Ne() : De()), qe();
    }
    function ze() {
      An.autoSlideStoppable && Ve();
    }
    function Ue(t) {
      t.shiftKey && 63 === t.charCode && (Tn.overlay ? I() : V(!0));
    }
    function $e(t) {
      if ("function" == typeof An.keyboardCondition && An.keyboardCondition() === !1) return !0;
      var e = Dn;
      ze(t);
      var n = document.activeElement && "inherit" !== document.activeElement.contentEditable, r = document.activeElement && document.activeElement.tagName && /input|textarea/i.test(document.activeElement.tagName);
      if (!(n || r || t.shiftKey && 32 !== t.keyCode || t.altKey || t.ctrlKey || t.metaKey)) {
        if (Z() && -1 === [ 190, 191 ].indexOf(t.keyCode)) return !1;
        var i = !1;
        if ("object" == typeof An.keyboard) for (var o in An.keyboard) if (parseInt(o, 10) === t.keyCode) {
          var a = An.keyboard[o];
          "function" == typeof a ? a.apply(null, [ t ]) : "string" == typeof a && "function" == typeof pn[a] && pn[a].call(),
          i = !0;
        }
        if (i === !1) switch (i = !0, t.keyCode) {
         case 80:
         case 33:
          Oe();
          break;

         case 78:
         case 34:
          Be();
          break;

         case 72:
         case 37:
          Ne();
          break;

         case 76:
         case 39:
          De();
          break;

         case 75:
         case 38:
          He();
          break;

         case 74:
         case 40:
          je();
          break;

         case 36:
          ee(0);
          break;

         case 35:
          ee(Number.MAX_VALUE);
          break;

         case 32:
          $() ? z() : t.shiftKey ? Oe() : Be();
          break;

         case 13:
          $() ? z() : i = !1;
          break;

         case 58:
         case 59:
         case 190:
         case 191:
          J();
          break;

         case 70:
          G();
          break;

         case 65:
          An.autoSlideStoppable && Q(e);
          break;

         default:
          i = !1;
        }
        i ? t.preventDefault && t.preventDefault() : 27 !== t.keyCode && 79 !== t.keyCode || !Ln.transforms3d || (Tn.overlay ? I() : U(),
        t.preventDefault && t.preventDefault()), qe();
      }
    }
    function We(t) {
      Hn.startX = t.touches[0].clientX, Hn.startY = t.touches[0].clientY, Hn.startCount = t.touches.length,
      2 === t.touches.length && An.overview && (Hn.startSpan = y({
        x: t.touches[1].clientX,
        y: t.touches[1].clientY
      }, {
        x: Hn.startX,
        y: Hn.startY
      }));
    }
    function Ge(t) {
      if (Hn.captured) navigator.userAgent.match(/android/gi) && t.preventDefault(); else {
        ze(t);
        var e = t.touches[0].clientX, n = t.touches[0].clientY;
        if (2 === t.touches.length && 2 === Hn.startCount && An.overview) {
          var r = y({
            x: t.touches[1].clientX,
            y: t.touches[1].clientY
          }, {
            x: Hn.startX,
            y: Hn.startY
          });
          Math.abs(Hn.startSpan - r) > Hn.threshold && (Hn.captured = !0, r < Hn.startSpan ? B() : z()),
          t.preventDefault();
        } else if (1 === t.touches.length && 2 !== Hn.startCount) {
          var i = e - Hn.startX, o = n - Hn.startY;
          i > Hn.threshold && Math.abs(i) > Math.abs(o) ? (Hn.captured = !0, Ne()) : i < -Hn.threshold && Math.abs(i) > Math.abs(o) ? (Hn.captured = !0,
          De()) : o > Hn.threshold ? (Hn.captured = !0, He()) : o < -Hn.threshold && (Hn.captured = !0,
          je()), An.embedded ? (Hn.captured || W(yn)) && t.preventDefault() : t.preventDefault();
        }
      }
    }
    function Xe() {
      Hn.captured = !1;
    }
    function Ye(t) {
      (t.pointerType === t.MSPOINTER_TYPE_TOUCH || "touch" === t.pointerType) && (t.touches = [ {
        clientX: t.clientX,
        clientY: t.clientY
      } ], We(t));
    }
    function Ke(t) {
      (t.pointerType === t.MSPOINTER_TYPE_TOUCH || "touch" === t.pointerType) && (t.touches = [ {
        clientX: t.clientX,
        clientY: t.clientY
      } ], Ge(t));
    }
    function Je(t) {
      (t.pointerType === t.MSPOINTER_TYPE_TOUCH || "touch" === t.pointerType) && (t.touches = [ {
        clientX: t.clientX,
        clientY: t.clientY
      } ], Xe(t));
    }
    function Ze(t) {
      if (Date.now() - Fn > 600) {
        Fn = Date.now();
        var e = t.detail || -t.wheelDelta;
        e > 0 ? Be() : Oe();
      }
    }
    function Qe(t) {
      ze(t), t.preventDefault();
      var e = v(Tn.wrapper.querySelectorAll(Cn)).length, n = Math.floor(t.clientX / Tn.wrapper.offsetWidth * e);
      ee(n);
    }
    function tn(t) {
      t.preventDefault(), ze(), Ne();
    }
    function en(t) {
      t.preventDefault(), ze(), De();
    }
    function nn(t) {
      t.preventDefault(), ze(), He();
    }
    function rn(t) {
      t.preventDefault(), ze(), je();
    }
    function on(t) {
      t.preventDefault(), ze(), Oe();
    }
    function an(t) {
      t.preventDefault(), ze(), Be();
    }
    function sn() {
      xe();
    }
    function ln() {
      N();
    }
    function cn() {
      var t = document.webkitHidden || document.msHidden || document.hidden;
      t === !1 && document.activeElement !== document.body && ("function" == typeof document.activeElement.blur && document.activeElement.blur(),
      document.body.focus());
    }
    function un(t) {
      if (Rn && $()) {
        t.preventDefault();
        for (var e = t.target; e && !e.nodeName.match(/section/gi); ) e = e.parentNode;
        if (e && !e.classList.contains("disabled") && (z(), e.nodeName.match(/section/gi))) {
          var n = parseInt(e.getAttribute("data-index-h"), 10), r = parseInt(e.getAttribute("data-index-v"), 10);
          ee(n, r);
        }
      }
    }
    function dn(t) {
      if (t.currentTarget && t.currentTarget.hasAttribute("href")) {
        var e = t.currentTarget.getAttribute("href");
        e && (R(e), t.preventDefault());
      }
    }
    function hn() {
      pn.isLastSlide() && An.loop === !1 ? (ee(0, 0), Ie()) : Dn ? Ie() : Ve();
    }
    function fn(t, e) {
      this.diameter = 50, this.thickness = 3, this.playing = !1, this.progress = 0, this.progressOffset = 1,
      this.container = t, this.progressCheck = e, this.canvas = document.createElement("canvas"),
      this.canvas.className = "playback", this.canvas.width = this.diameter, this.canvas.height = this.diameter,
      this.context = this.canvas.getContext("2d"), this.container.appendChild(this.canvas),
      this.render();
    }
    var pn, gn, vn, mn, yn, bn, wn, xn, kn = ".slides section", Cn = ".slides>section", Sn = ".slides>section.present>section", En = ".slides>section:first-of-type", An = {
      width: 960,
      height: 700,
      margin: .1,
      minScale: .2,
      maxScale: 1.5,
      zoomReduction: 0,
      controls: !0,
      progress: !0,
      slideNumber: !1,
      history: !1,
      keyboard: !0,
      keyboardCondition: null,
      overview: !0,
      center: !0,
      touch: !0,
      loop: !1,
      rtl: !1,
      fragments: !0,
      embedded: !1,
      help: !0,
      pause: !0,
      autoSlide: 0,
      autoSlideStoppable: !0,
      mouseWheel: !1,
      rollingLinks: !1,
      hideAddressBar: !0,
      previewLinks: !1,
      postMessage: !0,
      postMessageEvents: !1,
      focusBodyOnPageVisibilityChange: !0,
      transition: "slide",
      transitionSpeed: "default",
      backgroundTransition: "fade",
      parallaxBackgroundImage: "",
      parallaxBackgroundSize: "",
      viewDistance: 3,
      zoomInChrome: !0,
      dependencies: []
    }, _n = !1, Pn = [], Mn = 1, Tn = {}, Ln = {}, Fn = 0, qn = 0, Rn = !1, Vn = 0, In = 0, Nn = -1, Dn = !1, Hn = {
      startX: 0,
      startY: 0,
      startSpan: 0,
      startCount: 0,
      captured: !1,
      threshold: 40
    }, jn = {
      "N  ,  SPACE": "Next slide",
      P: "Previous slide",
      "&#8592;  ,  H": "Navigate left",
      "&#8594;  ,  L": "Navigate right",
      "&#8593;  ,  K": "Navigate up",
      "&#8595;  ,  J": "Navigate down",
      Home: "First slide",
      End: "Last slide",
      "B  ,  .": "Pause",
      F: "Fullscreen",
      "ESC, O": "Slide overview"
    };
    return fn.prototype.setPlaying = function(t) {
      var e = this.playing;
      this.playing = t, !e && this.playing ? this.animate() : this.render();
    }, fn.prototype.animate = function() {
      var t = this.progress;
      this.progress = this.progressCheck(), t > .8 && this.progress < .2 && (this.progressOffset = this.progress),
      this.render(), this.playing && Ln.requestAnimationFrameMethod.call(window, this.animate.bind(this));
    }, fn.prototype.render = function() {
      var t = this.playing ? this.progress : 0, e = this.diameter / 2 - this.thickness, n = this.diameter / 2, r = this.diameter / 2, i = 14;
      this.progressOffset += .1 * (1 - this.progressOffset);
      var o = -Math.PI / 2 + t * 2 * Math.PI, a = -Math.PI / 2 + this.progressOffset * 2 * Math.PI;
      this.context.save(), this.context.clearRect(0, 0, this.diameter, this.diameter),
      this.context.beginPath(), this.context.arc(n, r, e + 2, 0, 2 * Math.PI, !1), this.context.fillStyle = "rgba( 0, 0, 0, 0.4 )",
      this.context.fill(), this.context.beginPath(), this.context.arc(n, r, e, 0, 2 * Math.PI, !1),
      this.context.lineWidth = this.thickness, this.context.strokeStyle = "#666", this.context.stroke(),
      this.playing && (this.context.beginPath(), this.context.arc(n, r, e, a, o, !1),
      this.context.lineWidth = this.thickness, this.context.strokeStyle = "#fff", this.context.stroke()),
      this.context.translate(n - i / 2, r - i / 2), this.playing ? (this.context.fillStyle = "#fff",
      this.context.fillRect(0, 0, i / 2 - 2, i), this.context.fillRect(i / 2 + 2, 0, i / 2 - 2, i)) : (this.context.beginPath(),
      this.context.translate(2, 0), this.context.moveTo(0, 0), this.context.lineTo(i - 2, i / 2),
      this.context.lineTo(0, i), this.context.fillStyle = "#fff", this.context.fill()),
      this.context.restore();
    }, fn.prototype.on = function(t, e) {
      this.canvas.addEventListener(t, e, !1);
    }, fn.prototype.off = function(t, e) {
      this.canvas.removeEventListener(t, e, !1);
    }, fn.prototype.destroy = function() {
      this.playing = !1, this.canvas.parentNode && this.container.removeChild(this.canvas);
    }, pn = {
      initialize: t,
      configure: h,
      sync: ne,
      slide: ee,
      left: Ne,
      right: De,
      up: He,
      down: je,
      prev: Oe,
      next: Be,
      fullscreen: G,
      exitFullscreen: X,
      navigateFragment: Te,
      prevFragment: Fe,
      nextFragment: Le,
      navigateTo: ee,
      navigateLeft: Ne,
      navigateRight: De,
      navigateUp: He,
      navigateDown: je,
      navigatePrev: Oe,
      navigateNext: Be,
      layout: N,
      availableRoutes: pe,
      availableFragments: ge,
      toggleOverview: U,
      togglePause: J,
      toggleAutoSlide: Q,
      isOverview: $,
      isPaused: Z,
      isAutoSliding: te,
      addEventListeners: f,
      removeEventListeners: p,
      getState: _e,
      setState: Pe,
      getProgress: be,
      getIndices: Ce,
      getTotalSlides: Se,
      getSlide: Ee,
      getSlideBackground: Ae,
      getPreviousSlide: function() {
        return mn;
      },
      getCurrentSlide: function() {
        return yn;
      },
      getScale: function() {
        return Mn;
      },
      getConfig: function() {
        return An;
      },
      getQueryHash: function() {
        var t = {};
        location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, function(e) {
          t[e.split("=").shift()] = e.split("=").pop();
        });
        for (var e in t) {
          var n = t[e];
          t[e] = m(unescape(n));
        }
        return t;
      },
      isFirstSlide: function() {
        return 0 === gn && 0 === vn;
      },
      isLastSlide: function() {
        return yn ? yn.nextElementSibling ? !1 : W(yn) && yn.parentNode.nextElementSibling ? !1 : !0 : !1;
      },
      isReady: function() {
        return _n;
      },
      addEventListener: function(t, e, n) {
        "addEventListener" in window && (Tn.wrapper || document.querySelector(".reveal")).addEventListener(t, e, n);
      },
      removeEventListener: function(t, e, n) {
        "addEventListener" in window && (Tn.wrapper || document.querySelector(".reveal")).removeEventListener(t, e, n);
      },
      triggerKey: function(t) {
        $e({
          keyCode: t
        });
      }
    };
  }), function(n) {
    t("wrap!lib/jquery-ui/jquery.ui.core", [ "jquery", "jquery" ], function(t, r) {
      var i = arguments, o = [ "$", "jQuery" ], a = [], s = function() {
        return void 0;
      }, l = function() {
        !function(t, e) {
          function n(e, n) {
            var i, o, a, s = e.nodeName.toLowerCase();
            return "area" === s ? (i = e.parentNode, o = i.name, e.href && o && "map" === i.nodeName.toLowerCase() ? (a = t("img[usemap=#" + o + "]")[0],
            !!a && r(a)) : !1) : (/input|select|textarea|button|object/.test(s) ? !e.disabled : "a" === s ? e.href || n : n) && r(e);
          }
          function r(e) {
            return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
              return "hidden" === t.css(this, "visibility");
            }).length;
          }
          var i = 0, o = /^ui-id-\d+$/;
          t.ui = t.ui || {}, t.extend(t.ui, {
            version: "1.10.3",
            keyCode: {
              BACKSPACE: 8,
              COMMA: 188,
              DELETE: 46,
              DOWN: 40,
              END: 35,
              ENTER: 13,
              ESCAPE: 27,
              HOME: 36,
              LEFT: 37,
              NUMPAD_ADD: 107,
              NUMPAD_DECIMAL: 110,
              NUMPAD_DIVIDE: 111,
              NUMPAD_ENTER: 108,
              NUMPAD_MULTIPLY: 106,
              NUMPAD_SUBTRACT: 109,
              PAGE_DOWN: 34,
              PAGE_UP: 33,
              PERIOD: 190,
              RIGHT: 39,
              SPACE: 32,
              TAB: 9,
              UP: 38
            }
          }), t.fn.extend({
            focus: function(e) {
              return function(n, r) {
                return "number" == typeof n ? this.each(function() {
                  var e = this;
                  setTimeout(function() {
                    t(e).focus(), r && r.call(e);
                  }, n);
                }) : e.apply(this, arguments);
              };
            }(t.fn.focus),
            scrollParent: function() {
              var e;
              return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"));
              }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"));
              }).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e;
            },
            zIndex: function(n) {
              if (n !== e) return this.css("zIndex", n);
              if (this.length) for (var r, i, o = t(this[0]); o.length && o[0] !== document; ) {
                if (r = o.css("position"), ("absolute" === r || "relative" === r || "fixed" === r) && (i = parseInt(o.css("zIndex"), 10),
                !isNaN(i) && 0 !== i)) return i;
                o = o.parent();
              }
              return 0;
            },
            uniqueId: function() {
              return this.each(function() {
                this.id || (this.id = "ui-id-" + ++i);
              });
            },
            removeUniqueId: function() {
              return this.each(function() {
                o.test(this.id) && t(this).removeAttr("id");
              });
            }
          }), t.extend(t.expr[":"], {
            data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
              return function(n) {
                return !!t.data(n, e);
              };
            }) : function(e, n, r) {
              return !!t.data(e, r[3]);
            },
            focusable: function(e) {
              return n(e, !isNaN(t.attr(e, "tabindex")));
            },
            tabbable: function(e) {
              var r = t.attr(e, "tabindex"), i = isNaN(r);
              return (i || r >= 0) && n(e, !i);
            }
          }), t("<a>").outerWidth(1).jquery || t.each([ "Width", "Height" ], function(n, r) {
            function i(e, n, r, i) {
              return t.each(o, function() {
                n -= parseFloat(t.css(e, "padding" + this)) || 0, r && (n -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
                i && (n -= parseFloat(t.css(e, "margin" + this)) || 0);
              }), n;
            }
            var o = "Width" === r ? [ "Left", "Right" ] : [ "Top", "Bottom" ], a = r.toLowerCase(), s = {
              innerWidth: t.fn.innerWidth,
              innerHeight: t.fn.innerHeight,
              outerWidth: t.fn.outerWidth,
              outerHeight: t.fn.outerHeight
            };
            t.fn["inner" + r] = function(n) {
              return n === e ? s["inner" + r].call(this) : this.each(function() {
                t(this).css(a, i(this, n) + "px");
              });
            }, t.fn["outer" + r] = function(e, n) {
              return "number" != typeof e ? s["outer" + r].call(this, e) : this.each(function() {
                t(this).css(a, i(this, e, !0, n) + "px");
              });
            };
          }), t.fn.addBack || (t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
          }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
            return function(n) {
              return arguments.length ? e.call(this, t.camelCase(n)) : e.call(this);
            };
          }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
          t.support.selectstart = "onselectstart" in document.createElement("div"), t.fn.extend({
            disableSelection: function() {
              return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(t) {
                t.preventDefault();
              });
            },
            enableSelection: function() {
              return this.unbind(".ui-disableSelection");
            }
          }), t.extend(t.ui, {
            plugin: {
              add: function(e, n, r) {
                var i, o = t.ui[e].prototype;
                for (i in r) o.plugins[i] = o.plugins[i] || [], o.plugins[i].push([ n, r[i] ]);
              },
              call: function(t, e, n) {
                var r, i = t.plugins[e];
                if (i && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType) for (r = 0; r < i.length; r++) t.options[i[r][0]] && i[r][1].apply(t.element, n);
              }
            },
            hasScroll: function(e, n) {
              if ("hidden" === t(e).css("overflow")) return !1;
              var r = n && "left" === n ? "scrollLeft" : "scrollTop", i = !1;
              return e[r] > 0 ? !0 : (e[r] = 1, i = e[r] > 0, e[r] = 0, i);
            }
          });
        }(r);
      };
      o.forEach(function(t, e) {
        n[t] = i[e];
      }), l.call(n);
      var c = s.apply(n, i);
      return o.concat(a).forEach(function(t) {
        try {
          delete n[t];
        } catch (r) {
          n[t] = e;
        }
      }), c;
    });
  }(this), t("hudl-remotes", [ "require", "jquery" ], function(t) {
    "use strict";
    function e(t) {
      return t.ctrlKey && t.shiftKey;
    }
    function n(t) {
      return 0 === b[t].length && 0 === w[t].length && 0 === x[t].length && 0 === k[t].length;
    }
    function r(t) {
      for (var e = 0, n = t.length; n > e; ++e) t[e]();
    }
    function i() {
      return "boolean" == typeof g ? g : "function" == typeof g ? !!g() : !!g;
    }
    function o(t, e, n) {
      if (n = n.toLowerCase(), "function" != typeof e) throw "Attempt was made to bind a non-function as a callback.";
      if (!t) throw "Attempt was made to bind an empty or non-string as an event.";
      var r;
      switch (n) {
       case "keydown":
        r = b;
        break;

       case "keyup":
        r = w;
        break;

       case "keyholddown":
        r = k;
        break;

       case "keydouble":
        r = x;
        break;

       default:
        throw "Event type for key registration not recognized.";
      }
      return r[t].push(e), !0;
    }
    var a, s, l, c, u = t("jquery"), d = 0, h = 0, f = 250, p = 300, g = !0, v = {
      124: "full",
      44: "full",
      113: "play",
      119: "ff",
      120: "slow",
      127: "rev",
      128: "rew",
      129: "next",
      130: "prev",
      12: "tag",
      125: "tag",
      131: "restart"
    }, m = {
      49: "full",
      50: "prev",
      51: "next",
      52: "rev",
      53: "slow",
      54: "rew",
      55: "ff",
      56: "tag",
      57: "play"
    }, y = {
      66: "smartPause",
      116: "smartPlay",
      27: "smartPlay",
      40: "smartFf",
      38: "smartRew",
      33: "smartPrev",
      34: "smartNext"
    }, b = {
      full: [],
      play: [],
      ff: [],
      slow: [],
      rev: [],
      rew: [],
      next: [],
      prev: [],
      tag: [],
      restart: [],
      smartPlay: [],
      smartPause: [],
      smartFf: [],
      smartRew: [],
      smartPrev: [],
      smartNext: []
    }, w = {
      full: [],
      play: [],
      ff: [],
      slow: [],
      rev: [],
      rew: [],
      next: [],
      prev: [],
      tag: [],
      restart: [],
      smartPlay: [],
      smartPause: [],
      smartFf: [],
      smartRew: [],
      smartPrev: [],
      smartNext: []
    }, x = {
      full: [],
      play: [],
      ff: [],
      slow: [],
      rev: [],
      rew: [],
      next: [],
      prev: [],
      tag: [],
      restart: [],
      smartPlay: [],
      smartPause: [],
      smartFf: [],
      smartRew: [],
      smartPrev: [],
      smartNext: []
    }, k = {
      full: [],
      play: [],
      ff: [],
      slow: [],
      rev: [],
      rew: [],
      next: [],
      prev: [],
      tag: [],
      restart: [],
      smartPlay: [],
      smartPause: [],
      smartFf: [],
      smartRew: [],
      smartPrev: [],
      smartNext: []
    };
    u(document).on("keydown", function(t) {
      var o;
      if (i() && (o = e(t) ? m : t.which in y ? y : v, o[t.which] && !n(o[t.which]) && (t.preventDefault(),
      t.which !== d))) {
        var u = o[t.which];
        return d = t.which, c && (h === t.which ? r(x[u]) : (h = 0, c = !1)), c = !1, l = !1,
        clearTimeout(a), clearTimeout(s), 0 !== k[u].length ? (l = !0, a = setTimeout(function() {
          r(k[u]), l = !1;
        }, f), void 0) : (0 !== b[u].length && r(b[u]), void 0);
      }
    }), u(document).on("keyup", function(t) {
      var e;
      i() && (e = m[t.which] || v[t.which] || y[t.which], e && (d = 0, c && clearTimeout(s),
      0 !== x[e].length && (s = setTimeout(function() {
        c = !1, h = 0;
      }, p), c = !0, h = t.which), l ? (l = !1, clearTimeout(a), r(b[e])) : w[e].length && r(w[e])));
    });
    var C = {
      keyDown: function(t, e) {
        if (!o(t, e, "keydown")) throw "Could not register keyHoldDown callback.";
      },
      keyHoldDown: function(t, e) {
        if (!o(t, e, "keyholddown")) throw "Could not register keyHoldDown callback.";
      },
      keyDouble: function(t, e) {
        if (!o(t, e, "keydouble")) throw "Could not register keyHoldDown callback.";
      },
      keyUp: function(t, e) {
        if (!o(t, e, "keyup")) throw "Could not register keyUp callback.";
      },
      setEnabled: function(t) {
        g = t;
      },
      off: function(t) {
        t = t.toLowerCase(), b[t] = [], w[t] = [], k[t] = [], x[t] = [];
      }
    };
    return C;
  }), t("presentations/presentation-remotes", [ "require", "jquery", "_", "jquery.ui.core", "hudl-remotes" ], function(t) {
    "use strict";
    function e(t) {
      v = t, n();
    }
    function n() {
      h.keyDown("play", v.togglePlay), h.keyDown("next", v.next), h.keyDown("prev", v.prev),
      h.keyDown("full", v.toggleFullscreen), h.keyDown("tag", v.tag), h.keyDown("restart", v.restart),
      h.keyHoldDown("ff", v.ff), h.keyHoldDown("slow", v.slow), h.keyHoldDown("rew", v.rw),
      h.keyHoldDown("rev", v.rev), h.keyUp("ff", v.normalRate), h.keyUp("slow", v.normalRate),
      h.keyUp("rew", v.normalRate), h.keyUp("rev", v.normalRate), h.keyDouble("ff", v.doubleff),
      h.keyDouble("rew", v.doublerw), c(document).on("keydown", function(t) {
        var e = t.which;
        console.log(e);
        var n = !1;
        if (u.each(p, function(t) {
          t == e && (n = !0);
        }), n) {
          t.preventDefault(), r(e), e !== g.code && (g.held && s(g.code), clearTimeout(g.timeout),
          g.code = e, g.held = !1, g.timeout = setTimeout(function() {
            g.held = !0, o(g.code);
          }, m));
          var a = new Date().valueOf();
          250 > a - y && i(e), y = new Date().valueOf();
        }
      }), c(document).on("keyup", function(t) {
        var e = t.which, n = !0;
        null !== e && g.code !== e && (n = !1), n && (t.preventDefault(), clearTimeout(g.timeout),
        e == g.code && g.held === !0 ? s(e) : a(e), g.code = null);
      });
    }
    function r(t) {
      switch (t) {
       case p.SPACE:
        l(v.togglePlay);
      }
    }
    function i(t) {}
    function o(t) {
      switch (t) {
       case p.DOWN:
        l(v.slow);
        break;

       case p.LEFT:
        l(v.rw);
        break;

       case p.RIGHT:
        l(v.ff);
        break;

       case p.UP:
        l(v.rev);
        break;

       case p.PAGE_UP:
        l(v.rw);
        break;

       case p.PAGE_DOWN:
        l(v.ff);
      }
    }
    function a(t) {
      switch (t) {
       case p.DOWN:
        l(v.togglePlay);
        break;

       case p.LEFT:
       case p.PAGE_UP:
        l(v.prev);
        break;

       case p.RIGHT:
       case p.PAGE_DOWN:
        l(v.next);
        break;

       case p.UP:
        l(v.restart);
        break;

       case p.SP_PAUSE:
        l(v.tag);
      }
    }
    function s(t) {
      switch (t) {
       case p.DOWN:
       case p.LEFT:
       case p.RIGHT:
       case p.UP:
       case p.PAGE_UP:
       case p.PAGE_DOWN:
        l(v.normalRate);
      }
    }
    function l(t) {
      t && "function" == typeof t && t();
    }
    var c = t("jquery"), u = t("_"), d = (t("jquery.ui.core"), c.ui.keyCode), h = t("hudl-remotes"), f = {
      SPACE: d.SPACE,
      ENTER: d.ENTER
    }, p = {
      UP: d.UP,
      DOWN: d.DOWN,
      LEFT: d.LEFT,
      RIGHT: d.RIGHT,
      FULL: 44,
      FULL2: 124,
      PREV: 130,
      NEXT: 129,
      REV: 127,
      SLOW: 120,
      REW: 128,
      FF: 119,
      TAG: 125,
      TAG2: 12,
      PLAY: 113,
      SPACE: f.SPACE,
      SP_PAUSE: 66,
      RESTART: 131,
      PAGE_UP: d.PAGE_UP,
      PAGE_DOWN: d.PAGE_DOWN
    }, g = {
      code: null,
      held: null,
      timeout: null
    }, v = {
      togglePlay: null,
      toggleFullscreen: null,
      slow: null,
      ff: null,
      rw: null,
      rev: null,
      next: null,
      prev: null,
      restart: null,
      tag: null,
      normalRate: null
    }, m = 250, y = 0;
    return {
      initialize: e
    };
  }), function(n) {
    t("wrap!lib/backbone", [ "expose", "_", "jquery", "jquery" ], function() {
      var t = arguments, r = [ "_undefined0", "_", "$", "jQuery" ], i = [ "Backbone" ], o = function(t) {
        return t("Backbone", this.Backbone.noConflict(), !0);
      }, a = function() {
        (function() {
          var t = this, e = t.Backbone, r = [];
          r.push;
          var i = r.slice;
          r.splice;
          var o;
          o = "undefined" != typeof exports ? exports : t.Backbone = {}, o.VERSION = "1.1.0";
          var a = t._;
          a || "undefined" == typeof require || (a = require("underscore")), o.$ = t.jQuery || t.Zepto || t.ender || t.$,
          o.noConflict = function() {
            return t.Backbone = e, this;
          }, o.emulateHTTP = !1, o.emulateJSON = !1;
          var s = o.Events = {
            on: function(t, e, n) {
              if (!c(this, "on", t, [ e, n ]) || !e) return this;
              this._events || (this._events = {});
              var r = this._events[t] || (this._events[t] = []);
              return r.push({
                callback: e,
                context: n,
                ctx: n || this
              }), this;
            },
            once: function(t, e, n) {
              if (!c(this, "once", t, [ e, n ]) || !e) return this;
              var r = this, i = a.once(function() {
                r.off(t, i), e.apply(this, arguments);
              });
              return i._callback = e, this.on(t, i, n);
            },
            off: function(t, e, n) {
              var r, i, o, s, l, u, d, h;
              if (!this._events || !c(this, "off", t, [ e, n ])) return this;
              if (!t && !e && !n) return this._events = {}, this;
              for (s = t ? [ t ] : a.keys(this._events), l = 0, u = s.length; u > l; l++) if (t = s[l],
              o = this._events[t]) {
                if (this._events[t] = r = [], e || n) for (d = 0, h = o.length; h > d; d++) i = o[d],
                (e && e !== i.callback && e !== i.callback._callback || n && n !== i.context) && r.push(i);
                r.length || delete this._events[t];
              }
              return this;
            },
            trigger: function(t) {
              if (!this._events) return this;
              var e = i.call(arguments, 1);
              if (!c(this, "trigger", t, e)) return this;
              var n = this._events[t], r = this._events.all;
              return n && u(n, e), r && u(r, arguments), this;
            },
            stopListening: function(t, e, n) {
              var r = this._listeningTo;
              if (!r) return this;
              var i = !e && !n;
              n || "object" != typeof e || (n = this), t && ((r = {})[t._listenId] = t);
              for (var o in r) t = r[o], t.off(e, n, this), (i || a.isEmpty(t._events)) && delete this._listeningTo[o];
              return this;
            }
          }, l = /\s+/, c = function(t, e, n, r) {
            if (!n) return !0;
            if ("object" == typeof n) {
              for (var i in n) t[e].apply(t, [ i, n[i] ].concat(r));
              return !1;
            }
            if (l.test(n)) {
              for (var o = n.split(l), a = 0, s = o.length; s > a; a++) t[e].apply(t, [ o[a] ].concat(r));
              return !1;
            }
            return !0;
          }, u = function(t, e) {
            var n, r = -1, i = t.length, o = e[0], a = e[1], s = e[2];
            switch (e.length) {
             case 0:
              for (;++r < i; ) (n = t[r]).callback.call(n.ctx);
              return;

             case 1:
              for (;++r < i; ) (n = t[r]).callback.call(n.ctx, o);
              return;

             case 2:
              for (;++r < i; ) (n = t[r]).callback.call(n.ctx, o, a);
              return;

             case 3:
              for (;++r < i; ) (n = t[r]).callback.call(n.ctx, o, a, s);
              return;

             default:
              for (;++r < i; ) (n = t[r]).callback.apply(n.ctx, e);
            }
          }, d = {
            listenTo: "on",
            listenToOnce: "once"
          };
          a.each(d, function(t, e) {
            s[e] = function(e, n, r) {
              var i = this._listeningTo || (this._listeningTo = {}), o = e._listenId || (e._listenId = a.uniqueId("l"));
              return i[o] = e, r || "object" != typeof n || (r = this), e[t](n, r, this), this;
            };
          }), s.bind = s.on, s.unbind = s.off, a.extend(o, s);
          var h = o.Model = function(t, e) {
            var n = t || {};
            e || (e = {}), this.cid = a.uniqueId("c"), this.attributes = {}, e.collection && (this.collection = e.collection),
            e.parse && (n = this.parse(n, e) || {}), n = a.defaults({}, n, a.result(this, "defaults")),
            this.set(n, e), this.changed = {}, this.initialize.apply(this, arguments);
          };
          a.extend(h.prototype, s, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            initialize: function() {},
            toJSON: function() {
              return a.clone(this.attributes);
            },
            sync: function() {
              return o.sync.apply(this, arguments);
            },
            get: function(t) {
              return this.attributes[t];
            },
            escape: function(t) {
              return a.escape(this.get(t));
            },
            has: function(t) {
              return null != this.get(t);
            },
            set: function(t, e, n) {
              var r, i, o, s, l, c, u, d;
              if (null == t) return this;
              if ("object" == typeof t ? (i = t, n = e) : (i = {})[t] = e, n || (n = {}), !this._validate(i, n)) return !1;
              o = n.unset, l = n.silent, s = [], c = this._changing, this._changing = !0, c || (this._previousAttributes = a.clone(this.attributes),
              this.changed = {}), d = this.attributes, u = this._previousAttributes, this.idAttribute in i && (this.id = i[this.idAttribute]);
              for (r in i) e = i[r], a.isEqual(d[r], e) || s.push(r), a.isEqual(u[r], e) ? delete this.changed[r] : this.changed[r] = e,
              o ? delete d[r] : d[r] = e;
              if (!l) {
                s.length && (this._pending = !0);
                for (var h = 0, f = s.length; f > h; h++) this.trigger("change:" + s[h], this, d[s[h]], n);
              }
              if (c) return this;
              if (!l) for (;this._pending; ) this._pending = !1, this.trigger("change", this, n);
              return this._pending = !1, this._changing = !1, this;
            },
            unset: function(t, e) {
              return this.set(t, void 0, a.extend({}, e, {
                unset: !0
              }));
            },
            clear: function(t) {
              var e = {};
              for (var n in this.attributes) e[n] = void 0;
              return this.set(e, a.extend({}, t, {
                unset: !0
              }));
            },
            hasChanged: function(t) {
              return null == t ? !a.isEmpty(this.changed) : a.has(this.changed, t);
            },
            changedAttributes: function(t) {
              if (!t) return this.hasChanged() ? a.clone(this.changed) : !1;
              var e, n = !1, r = this._changing ? this._previousAttributes : this.attributes;
              for (var i in t) a.isEqual(r[i], e = t[i]) || ((n || (n = {}))[i] = e);
              return n;
            },
            previous: function(t) {
              return null != t && this._previousAttributes ? this._previousAttributes[t] : null;
            },
            previousAttributes: function() {
              return a.clone(this._previousAttributes);
            },
            fetch: function(t) {
              t = t ? a.clone(t) : {}, void 0 === t.parse && (t.parse = !0);
              var e = this, n = t.success;
              return t.success = function(r) {
                return e.set(e.parse(r, t), t) ? (n && n(e, r, t), e.trigger("sync", e, r, t), void 0) : !1;
              }, N(this, t), this.sync("read", this, t);
            },
            save: function(t, e, n) {
              var r, i, o, s = this.attributes;
              if (null == t || "object" == typeof t ? (r = t, n = e) : (r = {})[t] = e, n = a.extend({
                validate: !0
              }, n), r && !n.wait) {
                if (!this.set(r, n)) return !1;
              } else if (!this._validate(r, n)) return !1;
              r && n.wait && (this.attributes = a.extend({}, s, r)), void 0 === n.parse && (n.parse = !0);
              var l = this, c = n.success;
              return n.success = function(t) {
                l.attributes = s;
                var e = l.parse(t, n);
                return n.wait && (e = a.extend(r || {}, e)), a.isObject(e) && !l.set(e, n) ? !1 : (c && c(l, t, n),
                l.trigger("sync", l, t, n), void 0);
              }, N(this, n), i = this.isNew() ? "create" : n.patch ? "patch" : "update", "patch" === i && (n.attrs = r),
              o = this.sync(i, this, n), r && n.wait && (this.attributes = s), o;
            },
            destroy: function(t) {
              t = t ? a.clone(t) : {};
              var e = this, n = t.success, r = function() {
                e.trigger("destroy", e, e.collection, t);
              };
              if (t.success = function(i) {
                (t.wait || e.isNew()) && r(), n && n(e, i, t), e.isNew() || e.trigger("sync", e, i, t);
              }, this.isNew()) return t.success(), !1;
              N(this, t);
              var i = this.sync("delete", this, t);
              return t.wait || r(), i;
            },
            url: function() {
              var t = a.result(this, "urlRoot") || a.result(this.collection, "url") || I();
              return this.isNew() ? t : t + ("/" === t.charAt(t.length - 1) ? "" : "/") + encodeURIComponent(this.id);
            },
            parse: function(t) {
              return t;
            },
            clone: function() {
              return new this.constructor(this.attributes);
            },
            isNew: function() {
              return null == this.id;
            },
            isValid: function(t) {
              return this._validate({}, a.extend(t || {}, {
                validate: !0
              }));
            },
            _validate: function(t, e) {
              if (!e.validate || !this.validate) return !0;
              t = a.extend({}, this.attributes, t);
              var n = this.validationError = this.validate(t, e) || null;
              return n ? (this.trigger("invalid", this, n, a.extend(e, {
                validationError: n
              })), !1) : !0;
            }
          });
          var f = [ "keys", "values", "pairs", "invert", "pick", "omit" ];
          a.each(f, function(t) {
            h.prototype[t] = function() {
              var e = i.call(arguments);
              return e.unshift(this.attributes), a[t].apply(a, e);
            };
          });
          var p = o.Collection = function(t, e) {
            e || (e = {}), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator),
            this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, a.extend({
              silent: !0
            }, e));
          }, g = {
            add: !0,
            remove: !0,
            merge: !0
          }, v = {
            add: !0,
            remove: !1
          };
          a.extend(p.prototype, s, {
            model: h,
            initialize: function() {},
            toJSON: function(t) {
              return this.map(function(e) {
                return e.toJSON(t);
              });
            },
            sync: function() {
              return o.sync.apply(this, arguments);
            },
            add: function(t, e) {
              return this.set(t, a.extend({
                merge: !1
              }, e, v));
            },
            remove: function(t, e) {
              var n = !a.isArray(t);
              t = n ? [ t ] : a.clone(t), e || (e = {});
              var r, i, o, s;
              for (r = 0, i = t.length; i > r; r++) s = t[r] = this.get(t[r]), s && (delete this._byId[s.id],
              delete this._byId[s.cid], o = this.indexOf(s), this.models.splice(o, 1), this.length--,
              e.silent || (e.index = o, s.trigger("remove", s, this, e)), this._removeReference(s));
              return n ? t[0] : t;
            },
            set: function(t, e) {
              e = a.defaults({}, e, g), e.parse && (t = this.parse(t, e));
              var n = !a.isArray(t);
              t = n ? t ? [ t ] : [] : a.clone(t);
              var r, i, o, s, l, c, u, d = e.at, f = this.model, p = this.comparator && null == d && e.sort !== !1, v = a.isString(this.comparator) ? this.comparator : null, m = [], y = [], b = {}, w = e.add, x = e.merge, k = e.remove, C = !p && w && k ? [] : !1;
              for (r = 0, i = t.length; i > r; r++) {
                if (l = t[r], o = l instanceof h ? s = l : l[f.prototype.idAttribute], c = this.get(o)) k && (b[c.cid] = !0),
                x && (l = l === s ? s.attributes : l, e.parse && (l = c.parse(l, e)), c.set(l, e),
                p && !u && c.hasChanged(v) && (u = !0)), t[r] = c; else if (w) {
                  if (s = t[r] = this._prepareModel(l, e), !s) continue;
                  m.push(s), s.on("all", this._onModelEvent, this), this._byId[s.cid] = s, null != s.id && (this._byId[s.id] = s);
                }
                C && C.push(c || s);
              }
              if (k) {
                for (r = 0, i = this.length; i > r; ++r) b[(s = this.models[r]).cid] || y.push(s);
                y.length && this.remove(y, e);
              }
              if (m.length || C && C.length) if (p && (u = !0), this.length += m.length, null != d) for (r = 0,
              i = m.length; i > r; r++) this.models.splice(d + r, 0, m[r]); else {
                C && (this.models.length = 0);
                var S = C || m;
                for (r = 0, i = S.length; i > r; r++) this.models.push(S[r]);
              }
              if (u && this.sort({
                silent: !0
              }), !e.silent) {
                for (r = 0, i = m.length; i > r; r++) (s = m[r]).trigger("add", s, this, e);
                (u || C && C.length) && this.trigger("sort", this, e);
              }
              return n ? t[0] : t;
            },
            reset: function(t, e) {
              e || (e = {});
              for (var n = 0, r = this.models.length; r > n; n++) this._removeReference(this.models[n]);
              return e.previousModels = this.models, this._reset(), t = this.add(t, a.extend({
                silent: !0
              }, e)), e.silent || this.trigger("reset", this, e), t;
            },
            push: function(t, e) {
              return this.add(t, a.extend({
                at: this.length
              }, e));
            },
            pop: function(t) {
              var e = this.at(this.length - 1);
              return this.remove(e, t), e;
            },
            unshift: function(t, e) {
              return this.add(t, a.extend({
                at: 0
              }, e));
            },
            shift: function(t) {
              var e = this.at(0);
              return this.remove(e, t), e;
            },
            slice: function() {
              return i.apply(this.models, arguments);
            },
            get: function(t) {
              return null == t ? void 0 : this._byId[t.id] || this._byId[t.cid] || this._byId[t];
            },
            at: function(t) {
              return this.models[t];
            },
            where: function(t, e) {
              return a.isEmpty(t) ? e ? void 0 : [] : this[e ? "find" : "filter"](function(e) {
                for (var n in t) if (t[n] !== e.get(n)) return !1;
                return !0;
              });
            },
            findWhere: function(t) {
              return this.where(t, !0);
            },
            sort: function(t) {
              if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
              return t || (t = {}), a.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(a.bind(this.comparator, this)),
              t.silent || this.trigger("sort", this, t), this;
            },
            pluck: function(t) {
              return a.invoke(this.models, "get", t);
            },
            fetch: function(t) {
              t = t ? a.clone(t) : {}, void 0 === t.parse && (t.parse = !0);
              var e = t.success, n = this;
              return t.success = function(r) {
                var i = t.reset ? "reset" : "set";
                n[i](r, t), e && e(n, r, t), n.trigger("sync", n, r, t);
              }, N(this, t), this.sync("read", this, t);
            },
            create: function(t, e) {
              if (e = e ? a.clone(e) : {}, !(t = this._prepareModel(t, e))) return !1;
              e.wait || this.add(t, e);
              var n = this, r = e.success;
              return e.success = function(t, e, i) {
                i.wait && n.add(t, i), r && r(t, e, i);
              }, t.save(null, e), t;
            },
            parse: function(t) {
              return t;
            },
            clone: function() {
              return new this.constructor(this.models);
            },
            _reset: function() {
              this.length = 0, this.models = [], this._byId = {};
            },
            _prepareModel: function(t, e) {
              if (t instanceof h) return t.collection || (t.collection = this), t;
              e = e ? a.clone(e) : {}, e.collection = this;
              var n = new this.model(t, e);
              return n.validationError ? (this.trigger("invalid", this, n.validationError, e),
              !1) : n;
            },
            _removeReference: function(t) {
              this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this);
            },
            _onModelEvent: function(t, e, n, r) {
              ("add" !== t && "remove" !== t || n === this) && ("destroy" === t && this.remove(e, r),
              e && t === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)],
              null != e.id && (this._byId[e.id] = e)), this.trigger.apply(this, arguments));
            }
          });
          var m = [ "forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain" ];
          a.each(m, function(t) {
            p.prototype[t] = function() {
              var e = i.call(arguments);
              return e.unshift(this.models), a[t].apply(a, e);
            };
          });
          var y = [ "groupBy", "countBy", "sortBy" ];
          a.each(y, function(t) {
            p.prototype[t] = function(e, n) {
              var r = a.isFunction(e) ? e : function(t) {
                return t.get(e);
              };
              return a[t](this.models, r, n);
            };
          });
          var b = o.View = function(t) {
            this.cid = a.uniqueId("view"), t || (t = {}), a.extend(this, a.pick(t, x)), this._ensureElement(),
            this.initialize.apply(this, arguments), this.delegateEvents();
          }, w = /^(\S+)\s*(.*)$/, x = [ "model", "collection", "el", "id", "attributes", "className", "tagName", "events" ];
          a.extend(b.prototype, s, {
            tagName: "div",
            $: function(t) {
              return this.$el.find(t);
            },
            initialize: function() {},
            render: function() {
              return this;
            },
            remove: function() {
              return this.$el.remove(), this.stopListening(), this;
            },
            setElement: function(t, e) {
              return this.$el && this.undelegateEvents(), this.$el = t instanceof o.$ ? t : o.$(t),
              this.el = this.$el[0], e !== !1 && this.delegateEvents(), this;
            },
            delegateEvents: function(t) {
              if (!t && !(t = a.result(this, "events"))) return this;
              this.undelegateEvents();
              for (var e in t) {
                var n = t[e];
                if (a.isFunction(n) || (n = this[t[e]]), n) {
                  var r = e.match(w), i = r[1], o = r[2];
                  n = a.bind(n, this), i += ".delegateEvents" + this.cid, "" === o ? this.$el.on(i, n) : this.$el.on(i, o, n);
                }
              }
              return this;
            },
            undelegateEvents: function() {
              return this.$el.off(".delegateEvents" + this.cid), this;
            },
            _ensureElement: function() {
              if (this.el) this.setElement(a.result(this, "el"), !1); else {
                var t = a.extend({}, a.result(this, "attributes"));
                this.id && (t.id = a.result(this, "id")), this.className && (t["class"] = a.result(this, "className"));
                var e = o.$("<" + a.result(this, "tagName") + ">").attr(t);
                this.setElement(e, !1);
              }
            }
          }), o.sync = function(t, e, n) {
            var r = C[t];
            a.defaults(n || (n = {}), {
              emulateHTTP: o.emulateHTTP,
              emulateJSON: o.emulateJSON
            });
            var i = {
              type: r,
              dataType: "json"
            };
            if (n.url || (i.url = a.result(e, "url") || I()), null != n.data || !e || "create" !== t && "update" !== t && "patch" !== t || (i.contentType = "application/json",
            i.data = JSON.stringify(n.attrs || e.toJSON(n))), n.emulateJSON && (i.contentType = "application/x-www-form-urlencoded",
            i.data = i.data ? {
              model: i.data
            } : {}), n.emulateHTTP && ("PUT" === r || "DELETE" === r || "PATCH" === r)) {
              i.type = "POST", n.emulateJSON && (i.data._method = r);
              var s = n.beforeSend;
              n.beforeSend = function(t) {
                return t.setRequestHeader("X-HTTP-Method-Override", r), s ? s.apply(this, arguments) : void 0;
              };
            }
            "GET" === i.type || n.emulateJSON || (i.processData = !1), "PATCH" === i.type && k && (i.xhr = function() {
              return new ActiveXObject("Microsoft.XMLHTTP");
            });
            var l = n.xhr = o.ajax(a.extend(i, n));
            return e.trigger("request", e, l, n), l;
          };
          var k = !("undefined" == typeof n || !n.ActiveXObject || n.XMLHttpRequest && new XMLHttpRequest().dispatchEvent), C = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            "delete": "DELETE",
            read: "GET"
          };
          o.ajax = function() {
            return o.$.ajax.apply(o.$, arguments);
          };
          var S = o.Router = function(t) {
            t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
          }, E = /\((.*?)\)/g, A = /(\(\?)?:\w+/g, _ = /\*\w+/g, P = /[\-{}\[\]+?.,\\\^$|#\s]/g;
          a.extend(S.prototype, s, {
            initialize: function() {},
            route: function(t, e, n) {
              a.isRegExp(t) || (t = this._routeToRegExp(t)), a.isFunction(e) && (n = e, e = ""),
              n || (n = this[e]);
              var r = this;
              return o.history.route(t, function(i) {
                var a = r._extractParameters(t, i);
                n && n.apply(r, a), r.trigger.apply(r, [ "route:" + e ].concat(a)), r.trigger("route", e, a),
                o.history.trigger("route", r, e, a);
              }), this;
            },
            navigate: function(t, e) {
              return o.history.navigate(t, e), this;
            },
            _bindRoutes: function() {
              if (this.routes) {
                this.routes = a.result(this, "routes");
                for (var t, e = a.keys(this.routes); null != (t = e.pop()); ) this.route(t, this.routes[t]);
              }
            },
            _routeToRegExp: function(t) {
              return t = t.replace(P, "\\$&").replace(E, "(?:$1)?").replace(A, function(t, e) {
                return e ? t : "([^/]+)";
              }).replace(_, "(.*?)"), new RegExp("^" + t + "$");
            },
            _extractParameters: function(t, e) {
              var n = t.exec(e).slice(1);
              return a.map(n, function(t) {
                return t ? decodeURIComponent(t) : null;
              });
            }
          });
          var M = o.History = function() {
            this.handlers = [], a.bindAll(this, "checkUrl"), "undefined" != typeof n && (this.location = n.location,
            this.history = n.history);
          }, T = /^[#\/]|\s+$/g, L = /^\/+|\/+$/g, F = /msie [\w.]+/, q = /\/$/, R = /[?#].*$/;
          M.started = !1, a.extend(M.prototype, s, {
            interval: 50,
            getHash: function(t) {
              var e = (t || this).location.href.match(/#(.*)$/);
              return e ? e[1] : "";
            },
            getFragment: function(t, e) {
              if (null == t) if (this._hasPushState || !this._wantsHashChange || e) {
                t = this.location.pathname;
                var n = this.root.replace(q, "");
                t.indexOf(n) || (t = t.slice(n.length));
              } else t = this.getHash();
              return t.replace(T, "");
            },
            start: function(t) {
              if (M.started) throw new Error("Backbone.history has already been started");
              M.started = !0, this.options = a.extend({
                root: "/"
              }, this.options, t), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1,
              this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
              var e = this.getFragment(), r = document.documentMode, i = F.exec(navigator.userAgent.toLowerCase()) && (!r || 7 >= r);
              this.root = ("/" + this.root + "/").replace(L, "/"), i && this._wantsHashChange && (this.iframe = o.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,
              this.navigate(e)), this._hasPushState ? o.$(n).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in n && !i ? o.$(n).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
              this.fragment = e;
              var s = this.location, l = s.pathname.replace(/[^\/]$/, "$&/") === this.root;
              if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !l) return this.fragment = this.getFragment(null, !0),
                this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
                this._hasPushState && l && s.hash && (this.fragment = this.getHash().replace(T, ""),
                this.history.replaceState({}, document.title, this.root + this.fragment + s.search));
              }
              return this.options.silent ? void 0 : this.loadUrl();
            },
            stop: function() {
              o.$(n).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval),
              M.started = !1;
            },
            route: function(t, e) {
              this.handlers.unshift({
                route: t,
                callback: e
              });
            },
            checkUrl: function() {
              var t = this.getFragment();
              return t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))),
              t === this.fragment ? !1 : (this.iframe && this.navigate(t), this.loadUrl(), void 0);
            },
            loadUrl: function(t) {
              return t = this.fragment = this.getFragment(t), a.any(this.handlers, function(e) {
                return e.route.test(t) ? (e.callback(t), !0) : void 0;
              });
            },
            navigate: function(t, e) {
              if (!M.started) return !1;
              e && e !== !0 || (e = {
                trigger: !!e
              });
              var n = this.root + (t = this.getFragment(t || ""));
              if (t = t.replace(R, ""), this.fragment !== t) {
                if (this.fragment = t, "" === t && "/" !== n && (n = n.slice(0, -1)), this._hasPushState) this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, n); else {
                  if (!this._wantsHashChange) return this.location.assign(n);
                  this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getFragment(this.getHash(this.iframe)) && (e.replace || this.iframe.document.open().close(),
                  this._updateHash(this.iframe.location, t, e.replace));
                }
                return e.trigger ? this.loadUrl(t) : void 0;
              }
            },
            _updateHash: function(t, e, n) {
              if (n) {
                var r = t.href.replace(/(javascript:|#).*$/, "");
                t.replace(r + "#" + e);
              } else t.hash = "#" + e;
            }
          }), o.history = new M();
          var V = function(t, e) {
            var n, r = this;
            n = t && a.has(t, "constructor") ? t.constructor : function() {
              return r.apply(this, arguments);
            }, a.extend(n, r, e);
            var i = function() {
              this.constructor = n;
            };
            return i.prototype = r.prototype, n.prototype = new i(), t && a.extend(n.prototype, t),
            n.__super__ = r.prototype, n;
          };
          h.extend = p.extend = S.extend = b.extend = M.extend = V;
          var I = function() {
            throw new Error('A "url" property or function must be specified');
          }, N = function(t, e) {
            var n = e.error;
            e.error = function(r) {
              n && n(t, r, e), t.trigger("error", t, r, e);
            };
          };
        }).call(this);
      };
      r.forEach(function(e, r) {
        n[e] = t[r];
      }), a.call(n);
      var s = o.apply(n, t);
      return r.concat(i).forEach(function(t) {
        try {
          delete n[t];
        } catch (r) {
          n[t] = e;
        }
      }), s;
    });
  }(this), function(e, n) {
    if ("object" == typeof exports) {
      var r = require("underscore"), i = require("backbone");
      module.exports = n(r, i);
    } else "function" == typeof t && t.amd && t("backbone.wreqr", [ "underscore", "backbone" ], n);
  }(this, function(t, e) {
    "use strict";
    return e.Wreqr = function(t, e, n) {
      var r = {};
      return r.Handlers = function(t, e) {
        var n = function(t) {
          this.options = t, this._wreqrHandlers = {}, e.isFunction(this.initialize) && this.initialize(t);
        };
        return n.extend = t.Model.extend, e.extend(n.prototype, t.Events, {
          setHandlers: function(t) {
            e.each(t, function(t, n) {
              var r = null;
              e.isObject(t) && !e.isFunction(t) && (r = t.context, t = t.callback), this.setHandler(n, t, r);
            }, this);
          },
          setHandler: function(t, e, n) {
            var r = {
              callback: e,
              context: n
            };
            this._wreqrHandlers[t] = r, this.trigger("handler:add", t, e, n);
          },
          hasHandler: function(t) {
            return !!this._wreqrHandlers[t];
          },
          getHandler: function(t) {
            var e = this._wreqrHandlers[t];
            if (!e) throw new Error("Handler not found for '" + t + "'");
            return function() {
              var t = Array.prototype.slice.apply(arguments);
              return e.callback.apply(e.context, t);
            };
          },
          removeHandler: function(t) {
            delete this._wreqrHandlers[t];
          },
          removeAllHandlers: function() {
            this._wreqrHandlers = {};
          }
        }), n;
      }(t, n), r.CommandStorage = function() {
        var e = function(t) {
          this.options = t, this._commands = {}, n.isFunction(this.initialize) && this.initialize(t);
        };
        return n.extend(e.prototype, t.Events, {
          getCommands: function(t) {
            var e = this._commands[t];
            return e || (e = {
              command: t,
              instances: []
            }, this._commands[t] = e), e;
          },
          addCommand: function(t, e) {
            var n = this.getCommands(t);
            n.instances.push(e);
          },
          clearCommands: function(t) {
            var e = this.getCommands(t);
            e.instances = [];
          }
        }), e;
      }(), r.Commands = function(t) {
        return t.Handlers.extend({
          storageType: t.CommandStorage,
          constructor: function(e) {
            this.options = e || {}, this._initializeStorage(this.options), this.on("handler:add", this._executeCommands, this);
            var n = Array.prototype.slice.call(arguments);
            t.Handlers.prototype.constructor.apply(this, n);
          },
          execute: function(t, e) {
            t = arguments[0], e = Array.prototype.slice.call(arguments, 1), this.hasHandler(t) ? this.getHandler(t).apply(this, e) : this.storage.addCommand(t, e);
          },
          _executeCommands: function(t, e, r) {
            var i = this.storage.getCommands(t);
            n.each(i.instances, function(t) {
              e.apply(r, t);
            }), this.storage.clearCommands(t);
          },
          _initializeStorage: function(t) {
            var e, r = t.storageType || this.storageType;
            e = n.isFunction(r) ? new r() : r, this.storage = e;
          }
        });
      }(r), r.RequestResponse = function(t) {
        return t.Handlers.extend({
          request: function() {
            var t = arguments[0], e = Array.prototype.slice.call(arguments, 1);
            return this.getHandler(t).apply(this, e);
          }
        });
      }(r), r.EventAggregator = function(t, e) {
        var n = function() {};
        return n.extend = t.Model.extend, e.extend(n.prototype, t.Events), n;
      }(t, n), r;
    }(e, e.Marionette, t), e.Wreqr;
  }), function(e, n) {
    if ("object" == typeof exports) {
      var r = require("underscore"), i = require("backbone");
      module.exports = n(r, i);
    } else "function" == typeof t && t.amd && t("backbone.babysitter", [ "underscore", "backbone" ], n);
  }(this, function(t, e) {
    "option strict";
    return e.ChildViewContainer = function(t, e) {
      var n = function(t) {
        this._views = {}, this._indexByModel = {}, this._indexByCollection = {}, this._indexByCustom = {},
        this._updateLength(), this._addInitialViews(t);
      };
      e.extend(n.prototype, {
        add: function(t, e) {
          var n = t.cid;
          this._views[n] = t, t.model && (this._indexByModel[t.model.cid] = n), t.collection && (this._indexByCollection[t.collection.cid] = n),
          e && (this._indexByCustom[e] = n), this._updateLength();
        },
        findByModel: function(t) {
          var e = this._indexByModel[t.cid];
          return this.findByCid(e);
        },
        findByCollection: function(t) {
          var e = this._indexByCollection[t.cid];
          return this.findByCid(e);
        },
        findByCustom: function(t) {
          var e = this._indexByCustom[t];
          return this.findByCid(e);
        },
        findByIndex: function(t) {
          return e.values(this._views)[t];
        },
        findByCid: function(t) {
          return this._views[t];
        },
        remove: function(t) {
          var e = t.cid;
          t.model && delete this._indexByModel[t.model.cid], t.collection && delete this._indexByCollection[t.collection.cid];
          var n;
          for (var r in this._indexByCustom) if (this._indexByCustom.hasOwnProperty(r) && this._indexByCustom[r] === e) {
            n = r;
            break;
          }
          n && delete this._indexByCustom[n], delete this._views[e], this._updateLength();
        },
        call: function(t, e) {
          e = Array.prototype.slice.call(arguments, 1), this.apply(t, e);
        },
        apply: function(t, n) {
          n = n || [], e.each(this._views, function(r) {
            e.isFunction(r[t]) && r[t].apply(r, n);
          });
        },
        _updateLength: function() {
          this.length = e.size(this._views);
        },
        _addInitialViews: function(t) {
          if (t) {
            var e, n, r = t.length;
            for (n = 0; r > n; n++) e = t[n], this.add(e);
          }
        }
      });
      var r = [ "forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck" ];
      return e.each(r, function(t) {
        n.prototype[t] = function() {
          var n = e.values(this._views), r = [ n ].concat(e.toArray(arguments));
          return e[t].apply(e, r);
        };
      }), n;
    }(e, t), e.ChildViewContainer;
  }), function(e, n) {
    if ("object" == typeof exports) {
      var r = require("underscore"), i = require("backbone"), o = require("backbone.wreqr"), a = require("backbone.babysitter");
      module.exports = n(r, i, o, a);
    } else "function" == typeof t && t.amd && t("backbone.marionette", [ "underscore", "backbone", "backbone.wreqr", "backbone.babysitter" ], n);
  }(this, function(t, n) {
    return !function(t, n, r) {
      "use strict";
      function i(t) {
        return s.call(t);
      }
      function o(t, e) {
        var n = new Error(t);
        throw n.name = e || "Error", n;
      }
      var a = {};
      n.Marionette = a, a.$ = n.$;
      var s = Array.prototype.slice;
      return a.extend = n.Model.extend, a.getOption = function(t, n) {
        if (t && n) {
          var r;
          return r = t.options && n in t.options && t.options[n] !== e ? t.options[n] : t[n];
        }
      }, a.triggerMethod = function() {
        function t(t, e, n) {
          return n.toUpperCase();
        }
        var e = /(^|:)(\w)/gi, n = function(n) {
          var i = "on" + n.replace(e, t), o = this[i];
          return this.trigger.apply(this, arguments), r.isFunction(o) ? o.apply(this, r.tail(arguments)) : void 0;
        };
        return n;
      }(), a.MonitorDOMRefresh = function() {
        function t(t) {
          t._isShown = !0, n(t);
        }
        function e(t) {
          t._isRendered = !0, n(t);
        }
        function n(t) {
          t._isShown && t._isRendered && r.isFunction(t.triggerMethod) && t.triggerMethod("dom:refresh");
        }
        return function(n) {
          n.listenTo(n, "show", function() {
            t(n);
          }), n.listenTo(n, "render", function() {
            e(n);
          });
        };
      }(), function(t) {
        function e(t, e, n, i) {
          var a = i.split(/\s+/);
          r.each(a, function(r) {
            var i = t[r];
            i || o("Method '" + r + "' was configured as an event handler, but does not exist."),
            t.listenTo(e, n, i, t);
          });
        }
        function n(t, e, n, r) {
          t.listenTo(e, n, r, t);
        }
        function i(t, e, n, i) {
          var o = i.split(/\s+/);
          r.each(o, function() {
            var r = t[r];
            t.stopListening(e, n, r, t);
          });
        }
        function a(t, e, n, r) {
          t.stopListening(e, n, r, t);
        }
        function s(t, e, n, i, o) {
          e && n && (r.isFunction(n) && (n = n.call(t)), r.each(n, function(n, a) {
            r.isFunction(n) ? i(t, e, a, n) : o(t, e, a, n);
          }));
        }
        t.bindEntityEvents = function(t, r, i) {
          s(t, r, i, n, e);
        }, t.unbindEntityEvents = function(t, e, n) {
          s(t, e, n, a, i);
        };
      }(a), a.Callbacks = function() {
        this._deferred = a.$.Deferred(), this._callbacks = [];
      }, r.extend(a.Callbacks.prototype, {
        add: function(t, e) {
          this._callbacks.push({
            cb: t,
            ctx: e
          }), this._deferred.done(function(n, r) {
            e && (n = e), t.call(n, r);
          });
        },
        run: function(t, e) {
          this._deferred.resolve(e, t);
        },
        reset: function() {
          var t = this._callbacks;
          this._deferred = a.$.Deferred(), this._callbacks = [], r.each(t, function(t) {
            this.add(t.cb, t.ctx);
          }, this);
        }
      }), a.Controller = function(t) {
        this.triggerMethod = a.triggerMethod, this.options = t || {}, r.isFunction(this.initialize) && this.initialize(this.options);
      }, a.Controller.extend = a.extend, r.extend(a.Controller.prototype, n.Events, {
        close: function() {
          this.stopListening(), this.triggerMethod("close"), this.unbind();
        }
      }), a.Region = function(t) {
        if (this.options = t || {}, this.el = a.getOption(this, "el"), !this.el) {
          var e = new Error("An 'el' must be specified for a region.");
          throw e.name = "NoElError", e;
        }
        if (this.initialize) {
          var n = Array.prototype.slice.apply(arguments);
          this.initialize.apply(this, n);
        }
      }, r.extend(a.Region, {
        buildRegion: function(t, e) {
          var n = "string" == typeof t, i = "string" == typeof t.selector, o = "undefined" == typeof t.regionType, a = "function" == typeof t;
          if (!a && !n && !i) throw new Error("Region must be specified as a Region type, a selector string or an object with selector property");
          var s, l;
          n && (s = t), t.selector && (s = t.selector), a && (l = t), !a && o && (l = e),
          t.regionType && (l = t.regionType);
          var c = new l({
            el: s
          });
          return t.parentEl && (c.getEl = function(e) {
            var n = t.parentEl;
            return r.isFunction(n) && (n = n()), n.find(e);
          }), c;
        }
      }), r.extend(a.Region.prototype, n.Events, {
        show: function(t) {
          this.ensureEl(), t !== this.currentView ? (this.close(), t.render(), this.open(t)) : t.render(),
          a.triggerMethod.call(t, "show"), a.triggerMethod.call(this, "show", t), this.currentView = t;
        },
        ensureEl: function() {
          this.$el && 0 !== this.$el.length || (this.$el = this.getEl(this.el));
        },
        getEl: function(t) {
          return a.$(t);
        },
        open: function(t) {
          this.$el.empty().append(t.el);
        },
        close: function() {
          var t = this.currentView;
          t && !t.isClosed && (t.close ? t.close() : t.remove && t.remove(), a.triggerMethod.call(this, "close"),
          delete this.currentView);
        },
        attachView: function(t) {
          this.currentView = t;
        },
        reset: function() {
          this.close(), delete this.$el;
        }
      }), a.Region.extend = a.extend, a.RegionManager = function(t) {
        var e = t.Controller.extend({
          constructor: function(e) {
            this._regions = {}, t.Controller.prototype.constructor.call(this, e);
          },
          addRegions: function(t, e) {
            var n = {};
            return r.each(t, function(t, i) {
              "string" == typeof t && (t = {
                selector: t
              }), t.selector && (t = r.defaults({}, t, e));
              var o = this.addRegion(i, t);
              n[i] = o;
            }, this), n;
          },
          addRegion: function(e, n) {
            var i, o = r.isObject(n), a = r.isString(n), s = !!n.selector;
            return i = a || o && s ? t.Region.buildRegion(n, t.Region) : r.isFunction(n) ? t.Region.buildRegion(n, t.Region) : n,
            this._store(e, i), this.triggerMethod("region:add", e, i), i;
          },
          get: function(t) {
            return this._regions[t];
          },
          removeRegion: function(t) {
            var e = this._regions[t];
            this._remove(t, e);
          },
          removeRegions: function() {
            r.each(this._regions, function(t, e) {
              this._remove(e, t);
            }, this);
          },
          closeRegions: function() {
            r.each(this._regions, function(t) {
              t.close();
            }, this);
          },
          close: function() {
            this.removeRegions();
            var e = Array.prototype.slice.call(arguments);
            t.Controller.prototype.close.apply(this, e);
          },
          _store: function(t, e) {
            this._regions[t] = e, this.length = r.size(this._regions);
          },
          _remove: function(t, e) {
            e.close(), delete this._regions[t], this.triggerMethod("region:remove", t, e);
          }
        }), n = [ "forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck" ];
        return r.each(n, function(t) {
          e.prototype[t] = function() {
            var e = r.values(this._regions), n = [ e ].concat(r.toArray(arguments));
            return r[t].apply(r, n);
          };
        }), e;
      }(a), a.TemplateCache = function(t) {
        this.templateId = t;
      }, r.extend(a.TemplateCache, {
        templateCaches: {},
        get: function(t) {
          var e = this.templateCaches[t];
          return e || (e = new a.TemplateCache(t), this.templateCaches[t] = e), e.load();
        },
        clear: function() {
          var t, e = i(arguments), n = e.length;
          if (n > 0) for (t = 0; n > t; t++) delete this.templateCaches[e[t]]; else this.templateCaches = {};
        }
      }), r.extend(a.TemplateCache.prototype, {
        load: function() {
          if (this.compiledTemplate) return this.compiledTemplate;
          var t = this.loadTemplate(this.templateId);
          return this.compiledTemplate = this.compileTemplate(t), this.compiledTemplate;
        },
        loadTemplate: function(t) {
          var e = a.$(t).html();
          return e && 0 !== e.length || o("Could not find template: '" + t + "'", "NoTemplateError"),
          e;
        },
        compileTemplate: function(t) {
          return r.template(t);
        }
      }), a.Renderer = {
        render: function(t, e) {
          var n = "function" == typeof t ? t : a.TemplateCache.get(t);
          return n(e);
        }
      }, a.View = n.View.extend({
        constructor: function() {
          r.bindAll(this, "render");
          var t = Array.prototype.slice.apply(arguments);
          n.View.prototype.constructor.apply(this, t), a.MonitorDOMRefresh(this), this.listenTo(this, "show", this.onShowCalled, this);
        },
        triggerMethod: a.triggerMethod,
        getTemplate: function() {
          return a.getOption(this, "template");
        },
        mixinTemplateHelpers: function(t) {
          t = t || {};
          var e = this.templateHelpers;
          return r.isFunction(e) && (e = e.call(this)), r.extend(t, e);
        },
        configureTriggers: function() {
          if (this.triggers) {
            var t = {}, e = r.result(this, "triggers");
            return r.each(e, function(e, n) {
              t[n] = function(t) {
                t && t.preventDefault && t.preventDefault(), t && t.stopPropagation && t.stopPropagation();
                var n = {
                  view: this,
                  model: this.model,
                  collection: this.collection
                };
                this.triggerMethod(e, n);
              };
            }, this), t;
          }
        },
        delegateEvents: function(t) {
          this._delegateDOMEvents(t), a.bindEntityEvents(this, this.model, a.getOption(this, "modelEvents")),
          a.bindEntityEvents(this, this.collection, a.getOption(this, "collectionEvents"));
        },
        _delegateDOMEvents: function(t) {
          t = t || this.events, r.isFunction(t) && (t = t.call(this));
          var e = {}, i = this.configureTriggers();
          r.extend(e, t, i), n.View.prototype.delegateEvents.call(this, e);
        },
        undelegateEvents: function() {
          var t = Array.prototype.slice.call(arguments);
          n.View.prototype.undelegateEvents.apply(this, t), a.unbindEntityEvents(this, this.model, a.getOption(this, "modelEvents")),
          a.unbindEntityEvents(this, this.collection, a.getOption(this, "collectionEvents"));
        },
        onShowCalled: function() {},
        close: function() {
          if (!this.isClosed) {
            var t = this.triggerMethod("before:close");
            t !== !1 && (this.isClosed = !0, this.triggerMethod("close"), this.unbindUIElements(),
            this.remove());
          }
        },
        bindUIElements: function() {
          if (this.ui) {
            this._uiBindings || (this._uiBindings = this.ui);
            var t = r.result(this, "_uiBindings");
            this.ui = {}, r.each(r.keys(t), function(e) {
              var n = t[e];
              this.ui[e] = this.$(n);
            }, this);
          }
        },
        unbindUIElements: function() {
          this.ui && (r.each(this.ui, function(t, e) {
            delete this.ui[e];
          }, this), this.ui = this._uiBindings, delete this._uiBindings);
        }
      }), a.ItemView = a.View.extend({
        constructor: function() {
          a.View.prototype.constructor.apply(this, i(arguments));
        },
        serializeData: function() {
          var t = {};
          return this.model ? t = this.model.toJSON() : this.collection && (t = {
            items: this.collection.toJSON()
          }), t;
        },
        render: function() {
          this.isClosed = !1, this.triggerMethod("before:render", this), this.triggerMethod("item:before:render", this);
          var t = this.serializeData();
          t = this.mixinTemplateHelpers(t);
          var e = this.getTemplate(), n = a.Renderer.render(e, t);
          return this.$el.html(n), this.bindUIElements(), this.triggerMethod("render", this),
          this.triggerMethod("item:rendered", this), this;
        },
        close: function() {
          this.isClosed || (this.triggerMethod("item:before:close"), a.View.prototype.close.apply(this, i(arguments)),
          this.triggerMethod("item:closed"));
        }
      }), a.CollectionView = a.View.extend({
        itemViewEventPrefix: "itemview",
        constructor: function() {
          this._initChildViewStorage(), a.View.prototype.constructor.apply(this, i(arguments)),
          this._initialEvents();
        },
        _initialEvents: function() {
          this.collection && (this.listenTo(this.collection, "add", this.addChildView, this),
          this.listenTo(this.collection, "remove", this.removeItemView, this), this.listenTo(this.collection, "reset", this.render, this));
        },
        addChildView: function(t) {
          this.closeEmptyView();
          var e = this.getItemView(t), n = this.collection.indexOf(t);
          this.addItemView(t, e, n);
        },
        onShowCalled: function() {
          this.children.each(function(t) {
            a.triggerMethod.call(t, "show");
          });
        },
        triggerBeforeRender: function() {
          this.triggerMethod("before:render", this), this.triggerMethod("collection:before:render", this);
        },
        triggerRendered: function() {
          this.triggerMethod("render", this), this.triggerMethod("collection:rendered", this);
        },
        render: function() {
          return this.isClosed = !1, this.triggerBeforeRender(), this._renderChildren(), this.triggerRendered(),
          this;
        },
        _renderChildren: function() {
          this.closeEmptyView(), this.closeChildren(), this.collection && this.collection.length > 0 ? this.showCollection() : this.showEmptyView();
        },
        showCollection: function() {
          var t;
          this.collection.each(function(e, n) {
            t = this.getItemView(e), this.addItemView(e, t, n);
          }, this);
        },
        showEmptyView: function() {
          var t = a.getOption(this, "emptyView");
          if (t && !this._showingEmptyView) {
            this._showingEmptyView = !0;
            var e = new n.Model();
            this.addItemView(e, t, 0);
          }
        },
        closeEmptyView: function() {
          this._showingEmptyView && (this.closeChildren(), delete this._showingEmptyView);
        },
        getItemView: function() {
          var t = a.getOption(this, "itemView");
          return t || o("An `itemView` must be specified", "NoItemViewError"), t;
        },
        addItemView: function(t, e, n) {
          var i = a.getOption(this, "itemViewOptions");
          r.isFunction(i) && (i = i.call(this, t, n));
          var o = this.buildItemView(t, e, i);
          this.addChildViewEventForwarding(o), this.triggerMethod("before:item:added", o),
          this.children.add(o), this.renderItemView(o, n), this._isShown && a.triggerMethod.call(o, "show"),
          this.triggerMethod("after:item:added", o);
        },
        addChildViewEventForwarding: function(t) {
          var e = a.getOption(this, "itemViewEventPrefix");
          this.listenTo(t, "all", function() {
            var n = i(arguments);
            n[0] = e + ":" + n[0], n.splice(1, 0, t), a.triggerMethod.apply(this, n);
          }, this);
        },
        renderItemView: function(t, e) {
          t.render(), this.appendHtml(this, t, e);
        },
        buildItemView: function(t, e, n) {
          var i = r.extend({
            model: t
          }, n);
          return new e(i);
        },
        removeItemView: function(t) {
          var e = this.children.findByModel(t);
          this.removeChildView(e), this.checkEmpty();
        },
        removeChildView: function(t) {
          t && (this.stopListening(t), t.close ? t.close() : t.remove && t.remove(), this.children.remove(t)),
          this.triggerMethod("item:removed", t);
        },
        checkEmpty: function() {
          this.collection && 0 !== this.collection.length || this.showEmptyView();
        },
        appendHtml: function(t, e) {
          t.$el.append(e.el);
        },
        _initChildViewStorage: function() {
          this.children = new n.ChildViewContainer();
        },
        close: function() {
          this.isClosed || (this.triggerMethod("collection:before:close"), this.closeChildren(),
          this.triggerMethod("collection:closed"), a.View.prototype.close.apply(this, i(arguments)));
        },
        closeChildren: function() {
          this.children.each(function(t) {
            this.removeChildView(t);
          }, this), this.checkEmpty();
        }
      }), a.CompositeView = a.CollectionView.extend({
        constructor: function() {
          a.CollectionView.apply(this, i(arguments)), this.itemView = this.getItemView();
        },
        _initialEvents: function() {
          this.collection && (this.listenTo(this.collection, "add", this.addChildView, this),
          this.listenTo(this.collection, "remove", this.removeItemView, this), this.listenTo(this.collection, "reset", this._renderChildren, this));
        },
        getItemView: function() {
          var t = a.getOption(this, "itemView") || this.constructor;
          return t || o("An `itemView` must be specified", "NoItemViewError"), t;
        },
        serializeData: function() {
          var t = {};
          return this.model && (t = this.model.toJSON()), t;
        },
        render: function() {
          this.isRendered = !0, this.isClosed = !1, this.resetItemViewContainer(), this.triggerBeforeRender();
          var t = this.renderModel();
          return this.$el.html(t), this.bindUIElements(), this.triggerMethod("composite:model:rendered"),
          this._renderChildren(), this.triggerMethod("composite:rendered"), this.triggerRendered(),
          this;
        },
        _renderChildren: function() {
          this.isRendered && (a.CollectionView.prototype._renderChildren.call(this), this.triggerMethod("composite:collection:rendered"));
        },
        renderModel: function() {
          var t = {};
          t = this.serializeData(), t = this.mixinTemplateHelpers(t);
          var e = this.getTemplate();
          return a.Renderer.render(e, t);
        },
        appendHtml: function(t, e) {
          var n = this.getItemViewContainer(t);
          n.append(e.el);
        },
        getItemViewContainer: function(t) {
          if ("$itemViewContainer" in t) return t.$itemViewContainer;
          var e;
          if (t.itemViewContainer) {
            var n = r.result(t, "itemViewContainer");
            e = t.$(n), e.length <= 0 && o("The specified `itemViewContainer` was not found: " + t.itemViewContainer, "ItemViewContainerMissingError");
          } else e = t.$el;
          return t.$itemViewContainer = e, e;
        },
        resetItemViewContainer: function() {
          this.$itemViewContainer && delete this.$itemViewContainer;
        }
      }), a.Layout = a.ItemView.extend({
        regionType: a.Region,
        constructor: function(t) {
          t = t || {}, this._firstRender = !0, this._initializeRegions(t), a.ItemView.call(this, t);
        },
        render: function() {
          this._firstRender ? this._firstRender = !1 : this.isClosed ? this._initializeRegions() : this._reInitializeRegions();
          var t = Array.prototype.slice.apply(arguments), e = a.ItemView.prototype.render.apply(this, t);
          return e;
        },
        close: function() {
          if (!this.isClosed) {
            this.regionManager.close();
            var t = Array.prototype.slice.apply(arguments);
            a.ItemView.prototype.close.apply(this, t);
          }
        },
        addRegion: function(t, e) {
          var n = {};
          return n[t] = e, this.addRegions(n)[t];
        },
        addRegions: function(t) {
          return this.regions = r.extend(this.regions || {}, t), this._buildRegions(t);
        },
        removeRegion: function(t) {
          return this.regionManager.removeRegion(t);
        },
        _buildRegions: function(t) {
          var e = this, n = {
            parentEl: function() {
              return e.$el;
            }
          };
          return this.regionManager.addRegions(t, n);
        },
        _initializeRegions: function(t) {
          var e;
          this._initRegionManager(), e = r.isFunction(this.regions) ? this.regions(t) : this.regions || {},
          this.addRegions(e);
        },
        _reInitializeRegions: function() {
          this.regionManager.closeRegions(), this.regionManager.each(function(t) {
            t.reset();
          });
        },
        _initRegionManager: function() {
          this.regionManager = new a.RegionManager(), this.listenTo(this.regionManager, "region:add", function(t, e) {
            this[t] = e, this.trigger("region:add", t, e);
          }), this.listenTo(this.regionManager, "region:remove", function(t, e) {
            delete this[t], this.trigger("region:remove", t, e);
          });
        }
      }), a.AppRouter = n.Router.extend({
        constructor: function(t) {
          if (n.Router.prototype.constructor.apply(this, i(arguments)), this.options = t,
          this.appRoutes) {
            var e = a.getOption(this, "controller");
            this.processAppRoutes(e, this.appRoutes);
          }
        },
        processAppRoutes: function(t, e) {
          var n = r.keys(e).reverse();
          r.each(n, function(n) {
            var i = e[n], o = t[i];
            if (!o) throw new Error("Method '" + i + "' was not found on the controller");
            this.route(n, i, r.bind(o, t));
          }, this);
        }
      }), a.Application = function(t) {
        this._initRegionManager(), this._initCallbacks = new a.Callbacks(), this.vent = new n.Wreqr.EventAggregator(),
        this.commands = new n.Wreqr.Commands(), this.reqres = new n.Wreqr.RequestResponse(),
        this.submodules = {}, r.extend(this, t), this.triggerMethod = a.triggerMethod;
      }, r.extend(a.Application.prototype, n.Events, {
        execute: function() {
          var t = Array.prototype.slice.apply(arguments);
          this.commands.execute.apply(this.commands, t);
        },
        request: function() {
          var t = Array.prototype.slice.apply(arguments);
          return this.reqres.request.apply(this.reqres, t);
        },
        addInitializer: function(t) {
          this._initCallbacks.add(t);
        },
        start: function(t) {
          this.triggerMethod("initialize:before", t), this._initCallbacks.run(t, this), this.triggerMethod("initialize:after", t),
          this.triggerMethod("start", t);
        },
        addRegions: function(t) {
          return this._regionManager.addRegions(t);
        },
        removeRegion: function(t) {
          this._regionManager.removeRegion(t);
        },
        module: function() {
          var t = i(arguments);
          return t.unshift(this), a.Module.create.apply(a.Module, t);
        },
        _initRegionManager: function() {
          this._regionManager = new a.RegionManager(), this.listenTo(this._regionManager, "region:add", function(t, e) {
            this[t] = e;
          }), this.listenTo(this._regionManager, "region:remove", function(t) {
            delete this[t];
          });
        }
      }), a.Application.extend = a.extend, a.Module = function(t, e) {
        this.moduleName = t, this.submodules = {}, this._setupInitializersAndFinalizers(),
        this.app = e, this.startWithParent = !0, this.triggerMethod = a.triggerMethod;
      }, r.extend(a.Module.prototype, n.Events, {
        addInitializer: function(t) {
          this._initializerCallbacks.add(t);
        },
        addFinalizer: function(t) {
          this._finalizerCallbacks.add(t);
        },
        start: function(t) {
          this._isInitialized || (r.each(this.submodules, function(e) {
            e.startWithParent && e.start(t);
          }), this.triggerMethod("before:start", t), this._initializerCallbacks.run(t, this),
          this._isInitialized = !0, this.triggerMethod("start", t));
        },
        stop: function() {
          this._isInitialized && (this._isInitialized = !1, a.triggerMethod.call(this, "before:stop"),
          r.each(this.submodules, function(t) {
            t.stop();
          }), this._finalizerCallbacks.run(e, this), this._initializerCallbacks.reset(), this._finalizerCallbacks.reset(),
          a.triggerMethod.call(this, "stop"));
        },
        addDefinition: function(t, e) {
          this._runModuleDefinition(t, e);
        },
        _runModuleDefinition: function(t, e) {
          if (t) {
            var i = r.flatten([ this, this.app, n, a, a.$, r, e ]);
            t.apply(this, i);
          }
        },
        _setupInitializersAndFinalizers: function() {
          this._initializerCallbacks = new a.Callbacks(), this._finalizerCallbacks = new a.Callbacks();
        }
      }), r.extend(a.Module, {
        create: function(t, e, n) {
          var o = t, a = i(arguments);
          a.splice(0, 3), e = e.split(".");
          var s = e.length, l = [];
          return l[s - 1] = n, r.each(e, function(e, n) {
            var r = o;
            o = this._getModule(r, e, t), this._addModuleDefinition(r, o, l[n], a);
          }, this), o;
        },
        _getModule: function(t, e, n) {
          var r = t[e];
          return r || (r = new a.Module(e, n), t[e] = r, t.submodules[e] = r), r;
        },
        _addModuleDefinition: function(t, e, n, i) {
          var o, a;
          r.isFunction(n) ? (o = n, a = !0) : r.isObject(n) ? (o = n.define, a = n.startWithParent) : a = !0,
          o && e.addDefinition(o, i), e.startWithParent = e.startWithParent && a, e.startWithParent && !e.startWithParentIsConfigured && (e.startWithParentIsConfigured = !0,
          t.addInitializer(function(t) {
            e.startWithParent && e.start(t);
          }));
        }
      }), a;
    }(this, n, t), n.Marionette;
  }), t("events", [ "jquery", "backbone", "backbone.marionette" ], function(t, e) {
    "use strict";
    var n = new e.Wreqr.EventAggregator();
    return n;
  }), function() {
    var n = {};
    !function(t) {
      t.VERSION = "1.0.rc.1", t.helpers = {}, t.partials = {}, t.registerHelper = function(t, e, n) {
        n && (e.not = n), this.helpers[t] = e;
      }, t.registerPartial = function(t, e) {
        this.partials[t] = e;
      }, t.registerHelper("helperMissing", function(t) {
        if (2 === arguments.length) return e;
        throw new Error("Could not find property '" + t + "'");
      });
      var n = Object.prototype.toString, r = "[object Function]";
      t.registerHelper("blockHelperMissing", function(e, i) {
        var o = i.inverse || function() {}, a = i.fn, s = n.call(e);
        return s === r && (e = e.call(this)), e === !0 ? a(this) : e === !1 || null == e ? o(this) : "[object Array]" === s ? e.length > 0 ? t.helpers.each(e, i) : o(this) : a(e);
      }), t.K = function() {}, t.createFrame = Object.create || function(e) {
        t.K.prototype = e;
        var n = new t.K();
        return t.K.prototype = null, n;
      }, t.registerHelper("each", function(e, n) {
        var r, i = n.fn, o = n.inverse, a = "";
        if (n.data && (r = t.createFrame(n.data)), e && e.length > 0) for (var s = 0, l = e.length; l > s; s++) r && (r.index = s),
        a += i(e[s], {
          data: r
        }); else a = o(this);
        return a;
      }), t.registerHelper("if", function(e, i) {
        var o = n.call(e);
        return o === r && (e = e.call(this)), !e || t.Utils.isEmpty(e) ? i.inverse(this) : i.fn(this);
      }), t.registerHelper("unless", function(e, n) {
        var r = n.fn, i = n.inverse;
        return n.fn = i, n.inverse = r, t.helpers["if"].call(this, e, n);
      }), t.registerHelper("with", function(t, e) {
        return e.fn(t);
      }), t.registerHelper("log", function(e) {
        t.log(e);
      });
    }(n), n.Exception = function() {
      var t = Error.prototype.constructor.apply(this, arguments);
      for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
      this.message = t.message;
    }, n.Exception.prototype = new Error(), n.SafeString = function(t) {
      this.string = t;
    }, n.SafeString.prototype.toString = function() {
      return this.string.toString();
    }, function() {
      var t = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
      }, e = /[&<>"'`]/g, r = /[&<>"'`]/, i = function(e) {
        return t[e] || "&amp;";
      };
      n.Utils = {
        escapeExpression: function(t) {
          return t instanceof n.SafeString ? t.toString() : null == t || t === !1 ? "" : r.test(t) ? t.replace(e, i) : t;
        },
        isEmpty: function(t) {
          return "undefined" == typeof t ? !0 : null === t ? !0 : t === !1 ? !0 : "[object Array]" === Object.prototype.toString.call(t) && 0 === t.length ? !0 : !1;
        }
      };
    }(), n.Compiler = function() {}, n.JavaScriptCompiler = function() {}, function(t, e) {
      t.prototype = {
        compiler: t,
        disassemble: function() {
          for (var t, e, n, r = this.opcodes, i = [], o = 0, a = r.length; a > o; o++) if (t = r[o],
          "DECLARE" === t.opcode) i.push("DECLARE " + t.name + "=" + t.value); else {
            e = [];
            for (var s = 0; s < t.args.length; s++) n = t.args[s], "string" == typeof n && (n = '"' + n.replace("\n", "\\n") + '"'),
            e.push(n);
            i.push(t.opcode + " " + e.join(" "));
          }
          return i.join("\n");
        },
        guid: 0,
        compile: function(t, e) {
          this.children = [], this.depths = {
            list: []
          }, this.options = e;
          var n = this.options.knownHelpers;
          if (this.options.knownHelpers = {
            helperMissing: !0,
            blockHelperMissing: !0,
            each: !0,
            "if": !0,
            unless: !0,
            "with": !0,
            log: !0
          }, n) for (var r in n) this.options.knownHelpers[r] = n[r];
          return this.program(t);
        },
        accept: function(t) {
          return this[t.type](t);
        },
        program: function(t) {
          var e, n = t.statements;
          this.opcodes = [];
          for (var r = 0, i = n.length; i > r; r++) e = n[r], this[e.type](e);
          return this.isSimple = 1 === i, this.depths.list = this.depths.list.sort(function(t, e) {
            return t - e;
          }), this;
        },
        compileProgram: function(t) {
          var e, n = new this.compiler().compile(t, this.options), r = this.guid++;
          this.usePartial = this.usePartial || n.usePartial, this.children[r] = n;
          for (var i = 0, o = n.depths.list.length; o > i; i++) e = n.depths.list[i], 2 > e || this.addDepth(e - 1);
          return r;
        },
        block: function(t) {
          var e = t.mustache, n = t.program, r = t.inverse;
          n && (n = this.compileProgram(n)), r && (r = this.compileProgram(r));
          var i = this.classifyMustache(e);
          "helper" === i ? this.helperMustache(e, n, r) : "simple" === i ? (this.simpleMustache(e),
          this.opcode("pushProgram", n), this.opcode("pushProgram", r), this.opcode("pushLiteral", "{}"),
          this.opcode("blockValue")) : (this.ambiguousMustache(e, n, r), this.opcode("pushProgram", n),
          this.opcode("pushProgram", r), this.opcode("pushLiteral", "{}"), this.opcode("ambiguousBlockValue")),
          this.opcode("append");
        },
        hash: function(t) {
          var e, n, r = t.pairs;
          this.opcode("push", "{}");
          for (var i = 0, o = r.length; o > i; i++) e = r[i], n = e[1], this.accept(n), this.opcode("assignToHash", e[0]);
        },
        partial: function(t) {
          var e = t.id;
          this.usePartial = !0, t.context ? this.ID(t.context) : this.opcode("push", "depth0"),
          this.opcode("invokePartial", e.original), this.opcode("append");
        },
        content: function(t) {
          this.opcode("appendContent", t.string);
        },
        mustache: function(t) {
          var e = this.options, n = this.classifyMustache(t);
          "simple" === n ? this.simpleMustache(t) : "helper" === n ? this.helperMustache(t) : this.ambiguousMustache(t),
          t.escaped && !e.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
        },
        ambiguousMustache: function(t, e, n) {
          var r = t.id, i = r.parts[0];
          this.opcode("getContext", r.depth), this.opcode("pushProgram", e), this.opcode("pushProgram", n),
          this.opcode("invokeAmbiguous", i);
        },
        simpleMustache: function(t) {
          var e = t.id;
          "DATA" === e.type ? this.DATA(e) : e.parts.length ? this.ID(e) : (this.addDepth(e.depth),
          this.opcode("getContext", e.depth), this.opcode("pushContext")), this.opcode("resolvePossibleLambda");
        },
        helperMustache: function(t, e, n) {
          var r = this.setupFullMustacheParams(t, e, n), i = t.id.parts[0];
          if (this.options.knownHelpers[i]) this.opcode("invokeKnownHelper", r.length, i); else {
            if (this.knownHelpersOnly) throw new Error("You specified knownHelpersOnly, but used the unknown helper " + i);
            this.opcode("invokeHelper", r.length, i);
          }
        },
        ID: function(t) {
          this.addDepth(t.depth), this.opcode("getContext", t.depth);
          var e = t.parts[0];
          e ? this.opcode("lookupOnContext", t.parts[0]) : this.opcode("pushContext");
          for (var n = 1, r = t.parts.length; r > n; n++) this.opcode("lookup", t.parts[n]);
        },
        DATA: function(t) {
          this.options.data = !0, this.opcode("lookupData", t.id);
        },
        STRING: function(t) {
          this.opcode("pushString", t.string);
        },
        INTEGER: function(t) {
          this.opcode("pushLiteral", t.integer);
        },
        BOOLEAN: function(t) {
          this.opcode("pushLiteral", t.bool);
        },
        comment: function() {},
        opcode: function(t) {
          this.opcodes.push({
            opcode: t,
            args: [].slice.call(arguments, 1)
          });
        },
        declare: function(t, e) {
          this.opcodes.push({
            opcode: "DECLARE",
            name: t,
            value: e
          });
        },
        addDepth: function(t) {
          if (isNaN(t)) throw new Error("EWOT");
          0 !== t && (this.depths[t] || (this.depths[t] = !0, this.depths.list.push(t)));
        },
        classifyMustache: function(t) {
          var e = t.isHelper, n = t.eligibleHelper, r = this.options;
          if (n && !e) {
            var i = t.id.parts[0];
            r.knownHelpers[i] ? e = !0 : r.knownHelpersOnly && (n = !1);
          }
          return e ? "helper" : n ? "ambiguous" : "simple";
        },
        pushParams: function(t) {
          for (var e, n = t.length; n--; ) e = t[n], this.options.stringParams ? (e.depth && this.addDepth(e.depth),
          this.opcode("getContext", e.depth || 0), this.opcode("pushStringParam", e.string)) : this[e.type](e);
        },
        setupMustacheParams: function(t) {
          var e = t.params;
          return this.pushParams(e), t.hash ? this.hash(t.hash) : this.opcode("pushLiteral", "{}"),
          e;
        },
        setupFullMustacheParams: function(t, e, n) {
          var r = t.params;
          return this.pushParams(r), this.opcode("pushProgram", e), this.opcode("pushProgram", n),
          t.hash ? this.hash(t.hash) : this.opcode("pushLiteral", "{}"), r;
        }
      };
      var r = function(t) {
        this.value = t;
      };
      e.prototype = {
        nameLookup: function(t, n) {
          return /^[0-9]+$/.test(n) ? t + "[" + n + "]" : e.isValidJavaScriptVariableName(n) ? t + "." + n : t + "['" + n + "']";
        },
        appendToBuffer: function(t) {
          return this.environment.isSimple ? "return " + t + ";" : "buffer += " + t + ";";
        },
        initializeBuffer: function() {
          return this.quotedString("");
        },
        namespace: "Handlebars",
        compile: function(t, e, r, i) {
          this.environment = t, this.options = e || {}, n.log(n.logger.DEBUG, this.environment.disassemble() + "\n\n"),
          this.name = this.environment.name, this.isChild = !!r, this.context = r || {
            programs: [],
            aliases: {}
          }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.registers = {
            list: []
          }, this.compileStack = [], this.compileChildren(t, e);
          var o, a = t.opcodes;
          for (this.i = 0, s = a.length; this.i < s; this.i++) o = a[this.i], "DECLARE" === o.opcode ? this[o.name] = o.value : this[o.opcode].apply(this, o.args);
          return this.createFunctionContext(i);
        },
        nextOpcode: function() {
          var t = this.environment.opcodes;
          return t[this.i + 1], t[this.i + 1];
        },
        eat: function() {
          this.i = this.i + 1;
        },
        preamble: function() {
          var t = [];
          if (this.isChild) t.push(""); else {
            var e = this.namespace, n = "helpers = helpers || " + e + ".helpers;";
            this.environment.usePartial && (n = n + " partials = partials || " + e + ".partials;"),
            this.options.data && (n += " data = data || {};"), t.push(n);
          }
          this.environment.isSimple ? t.push("") : t.push(", buffer = " + this.initializeBuffer()),
          this.lastContext = 0, this.source = t;
        },
        createFunctionContext: function(t) {
          var e = this.stackVars.concat(this.registers.list);
          if (e.length > 0 && (this.source[1] = this.source[1] + ", " + e.join(", ")), !this.isChild) for (var r in this.context.aliases) this.source[1] = this.source[1] + ", " + r + "=" + this.context.aliases[r];
          this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";"),
          this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n"),
          this.environment.isSimple || this.source.push("return buffer;");
          for (var i = this.isChild ? [ "depth0", "data" ] : [ "Handlebars", "depth0", "helpers", "partials", "data" ], o = 0, a = this.environment.depths.list.length; a > o; o++) i.push("depth" + this.environment.depths.list[o]);
          if (t) return i.push(this.source.join("\n  ")), Function.apply(this, i);
          var s = "function " + (this.name || "") + "(" + i.join(",") + ") {\n  " + this.source.join("\n  ") + "}";
          return n.log(n.logger.DEBUG, s + "\n\n"), s;
        },
        blockValue: function() {
          this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
          var t = [ "depth0" ];
          this.setupParams(0, t), this.replaceStack(function(e) {
            return t.splice(1, 0, e), e + " = blockHelperMissing.call(" + t.join(", ") + ")";
          });
        },
        ambiguousBlockValue: function() {
          this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
          var t = [ "depth0" ];
          this.setupParams(0, t);
          var e = this.topStack();
          t.splice(1, 0, e), this.source.push("if (!" + this.lastHelper + ") { " + e + " = blockHelperMissing.call(" + t.join(", ") + "); }");
        },
        appendContent: function(t) {
          this.source.push(this.appendToBuffer(this.quotedString(t)));
        },
        append: function() {
          var t = this.popStack();
          this.source.push("if(" + t + " || " + t + " === 0) { " + this.appendToBuffer(t) + " }"),
          this.environment.isSimple && this.source.push("else { " + this.appendToBuffer("''") + " }");
        },
        appendEscaped: function() {
          var t = this.nextOpcode(), e = "";
          this.context.aliases.escapeExpression = "this.escapeExpression", t && "appendContent" === t.opcode && (e = " + " + this.quotedString(t.args[0]),
          this.eat(t)), this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")" + e));
        },
        getContext: function(t) {
          this.lastContext !== t && (this.lastContext = t);
        },
        lookupOnContext: function(t) {
          this.pushStack(this.nameLookup("depth" + this.lastContext, t, "context"));
        },
        pushContext: function() {
          this.pushStackLiteral("depth" + this.lastContext);
        },
        resolvePossibleLambda: function() {
          this.context.aliases.functionType = '"function"', this.replaceStack(function(t) {
            return "typeof " + t + " === functionType ? " + t + "() : " + t;
          });
        },
        lookup: function(t) {
          this.replaceStack(function(e) {
            return e + " == null || " + e + " === false ? " + e + " : " + this.nameLookup(e, t, "context");
          });
        },
        lookupData: function(t) {
          this.pushStack(this.nameLookup("data", t, "data"));
        },
        pushStringParam: function(t) {
          this.pushStackLiteral("depth" + this.lastContext), this.pushString(t);
        },
        pushString: function(t) {
          this.pushStackLiteral(this.quotedString(t));
        },
        push: function(t) {
          this.pushStack(t);
        },
        pushLiteral: function(t) {
          this.pushStackLiteral(t);
        },
        pushProgram: function(t) {
          null != t ? this.pushStackLiteral(this.programExpression(t)) : this.pushStackLiteral(null);
        },
        invokeHelper: function(t, e) {
          this.context.aliases.helperMissing = "helpers.helperMissing";
          var n = this.lastHelper = this.setupHelper(t, e);
          this.register("foundHelper", n.name), this.pushStack("foundHelper ? foundHelper.call(" + n.callParams + ") " + ": helperMissing.call(" + n.helperMissingParams + ")");
        },
        invokeKnownHelper: function(t, e) {
          var n = this.setupHelper(t, e);
          this.pushStack(n.name + ".call(" + n.callParams + ")");
        },
        invokeAmbiguous: function(t) {
          this.context.aliases.functionType = '"function"', this.pushStackLiteral("{}");
          var e = this.setupHelper(0, t), n = this.lastHelper = this.nameLookup("helpers", t, "helper");
          this.register("foundHelper", n);
          var r = this.nameLookup("depth" + this.lastContext, t, "context"), i = this.nextStack();
          this.source.push("if (foundHelper) { " + i + " = foundHelper.call(" + e.callParams + "); }"),
          this.source.push("else { " + i + " = " + r + "; " + i + " = typeof " + i + " === functionType ? " + i + "() : " + i + "; }");
        },
        invokePartial: function(t) {
          var e = [ this.nameLookup("partials", t, "partial"), "'" + t + "'", this.popStack(), "helpers", "partials" ];
          this.options.data && e.push("data"), this.context.aliases.self = "this", this.pushStack("self.invokePartial(" + e.join(", ") + ");");
        },
        assignToHash: function(t) {
          var e = this.popStack(), n = this.topStack();
          this.source.push(n + "['" + t + "'] = " + e + ";");
        },
        compiler: e,
        compileChildren: function(t, e) {
          for (var n, r, i = t.children, o = 0, a = i.length; a > o; o++) {
            n = i[o], r = new this.compiler(), this.context.programs.push("");
            var s = this.context.programs.length;
            n.index = s, n.name = "program" + s, this.context.programs[s] = r.compile(n, e, this.context);
          }
        },
        programExpression: function(t) {
          if (this.context.aliases.self = "this", null == t) return "self.noop";
          for (var e, n = this.environment.children[t], r = n.depths.list, i = [ n.index, n.name, "data" ], o = 0, a = r.length; a > o; o++) e = r[o],
          1 === e ? i.push("depth0") : i.push("depth" + (e - 1));
          return 0 === r.length ? "self.program(" + i.join(", ") + ")" : (i.shift(), "self.programWithDepth(" + i.join(", ") + ")");
        },
        register: function(t, e) {
          this.useRegister(t), this.source.push(t + " = " + e + ";");
        },
        useRegister: function(t) {
          this.registers[t] || (this.registers[t] = !0, this.registers.list.push(t));
        },
        pushStackLiteral: function(t) {
          return this.compileStack.push(new r(t)), t;
        },
        pushStack: function(t) {
          return this.source.push(this.incrStack() + " = " + t + ";"), this.compileStack.push("stack" + this.stackSlot),
          "stack" + this.stackSlot;
        },
        replaceStack: function(t) {
          var e = t.call(this, this.topStack());
          return this.source.push(this.topStack() + " = " + e + ";"), "stack" + this.stackSlot;
        },
        nextStack: function() {
          var t = this.incrStack();
          return this.compileStack.push("stack" + this.stackSlot), t;
        },
        incrStack: function() {
          return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot),
          "stack" + this.stackSlot;
        },
        popStack: function() {
          var t = this.compileStack.pop();
          return t instanceof r ? t.value : (this.stackSlot--, t);
        },
        topStack: function() {
          var t = this.compileStack[this.compileStack.length - 1];
          return t instanceof r ? t.value : t;
        },
        quotedString: function(t) {
          return '"' + t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r") + '"';
        },
        setupHelper: function(t, e) {
          var n = [];
          this.setupParams(t, n);
          var r = this.nameLookup("helpers", e, "helper");
          return {
            params: n,
            name: r,
            callParams: [ "depth0" ].concat(n).join(", "),
            helperMissingParams: [ "depth0", this.quotedString(e) ].concat(n).join(", ")
          };
        },
        setupParams: function(t, e) {
          var n, r, i, o = [], a = [];
          o.push("hash:" + this.popStack()), r = this.popStack(), i = this.popStack(), (i || r) && (i || (this.context.aliases.self = "this",
          i = "self.noop"), r || (this.context.aliases.self = "this", r = "self.noop"), o.push("inverse:" + r),
          o.push("fn:" + i));
          for (var s = 0; t > s; s++) n = this.popStack(), e.push(n), this.options.stringParams && a.push(this.popStack());
          return this.options.stringParams && o.push("contexts:[" + a.join(",") + "]"), this.options.data && o.push("data:data"),
          e.push("{" + o.join(",") + "}"), e.join(", ");
        }
      };
      for (var i = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), o = e.RESERVED_WORDS = {}, a = 0, s = i.length; s > a; a++) o[i[a]] = !0;
      e.isValidJavaScriptVariableName = function(t) {
        return !e.RESERVED_WORDS[t] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(t) ? !0 : !1;
      };
    }(n.Compiler, n.JavaScriptCompiler), n.VM = {
      template: function(t) {
        var e = {
          escapeExpression: n.Utils.escapeExpression,
          invokePartial: n.VM.invokePartial,
          programs: [],
          program: function(t, e, r) {
            var i = this.programs[t];
            return r ? n.VM.program(e, r) : i ? i : i = this.programs[t] = n.VM.program(e);
          },
          programWithDepth: n.VM.programWithDepth,
          noop: n.VM.noop
        };
        return function(r, i) {
          return i = i || {}, t.call(e, n, r, i.helpers, i.partials, i.data);
        };
      },
      programWithDepth: function(t, e) {
        var n = Array.prototype.slice.call(arguments, 2);
        return function(r, i) {
          return i = i || {}, t.apply(this, [ r, i.data || e ].concat(n));
        };
      },
      program: function(t, e) {
        return function(n, r) {
          return r = r || {}, t(n, r.data || e);
        };
      },
      noop: function() {
        return "";
      },
      invokePartial: function(t, r, i, o, a, s) {
        var l = {
          helpers: o,
          partials: a,
          data: s
        };
        if (t === e) throw new n.Exception("The partial " + r + " could not be found");
        if (t instanceof Function) return t(i, l);
        if (n.compile) return a[r] = n.compile(t, {
          data: s !== e
        }), a[r](i, l);
        throw new n.Exception("The partial " + r + " could not be compiled when running in runtime-only mode");
      }
    }, n.template = n.VM.template, t("handlebars", [], function() {
      return n;
    });
  }(), t("plugins/hbs/hbs.custom", [], function() {
    return {
      get: function() {
        return Handlebars;
      },
      write: function(t, e, n) {
        if (e + customNameExtension in buildMap) {
          var r = buildMap[e + customNameExtension];
          n.asModule(t + "!" + e, r);
        }
      },
      version: "0.4.0",
      load: function() {}
    };
  }), t("plugins/hbs/hbs.custom!presentations/templates/modal", [ "hbs", "handlebars" ], function(t, e) {
    var n = e.template(function(t, e, n) {
      n = n || t.helpers;
      var r, i, o = "", a = "function", s = this.escapeExpression;
      return o += '<header class="smooth-modal-header">\r\n    <h2>', i = n.title, i ? r = i.call(e, {
        hash: {}
      }) : (r = e.title, r = typeof r === a ? r() : r), o += s(r) + '</h2>\r\n    <button class="smooth-modal-close icon-close"></button>\r\n</header>\r\n\r\n<div class="smooth-modal-content">\r\n    ',
      i = n.content, i ? r = i.call(e, {
        hash: {}
      }) : (r = e.content, r = typeof r === a ? r() : r), (r || 0 === r) && (o += r),
      o += "\r\n</div>";
    });
    return e.registerPartial("presentations_templates_modal", n), n;
  }), t("smooth-modal", [ "jquery", "backbone", "backbone.marionette", "_", "events" ], function(t, e, n, r, i) {
    "use strict";
    var o = n.Region.extend({
      el: ".smooth-modal",
      showing: !1,
      show: function(t) {
        this.showing = !0, this.ensureEl(), t !== this.currentView ? (this.close(), t.render(),
        this.open(t)) : t.render(), n.triggerMethod.call(t, "show"), n.triggerMethod.call(this, "show", t),
        this.currentView = t, this.showing = !1;
      },
      onShow: function() {
        t("html").addClass("smooth-modal-display").delay(1).queue(function(e) {
          t(this).addClass("smooth-modal-slide"), e();
        }).delay(400).queue(function(e) {
          t(this).addClass("hide-wrap-and-nav"), e();
        }), t("body, .super-wrap").height(t(window).height());
      },
      close: function() {
        var e = this.currentView;
        if (e && !e.isClosed) {
          if (this.showing) return this.disposeView(e), void 0;
          var n = this;
          t("html").removeClass("hide-wrap-and-nav smooth-modal-slide").delay(400).queue(function(r) {
            t(this).removeClass("smooth-modal-display"), n.disposeView(e), r();
          }), t("body, .super-wrap").delay(400).queue(function(e) {
            t(this).height("100%"), e();
          });
        }
      },
      disposeView: function(t) {
        t.close ? t.close() : t.remove && t.remove(), n.triggerMethod.call(this, "close"),
        t === this.currentView && delete this.currentView;
      }
    });
    return i.on("dialog:next", function(e) {
      var n = t(".multi-step-modal-inner");
      t(".step-" + e).show(), t(".step-" + e).addClass("right-sliding"), n.addClass("step-" + e + "-active").removeClass("step-" + (e - 1) + "-active").delay(400).queue(function(n) {
        t(".step-" + (e - 1)).hide(), t(".step-" + e).removeClass("right-sliding"), n();
      }), i.trigger("dialog:next:done");
    }), i.on("dialog:previous", function(e) {
      var n = t(".multi-step-modal-inner");
      t(".step-" + (e - 1)).show(), t(".step-" + e).addClass("right-sliding"), n.addClass("step-" + (e - 1) + "-active").removeClass("step-" + e + "-active").delay(400).queue(function(n) {
        t(".step-" + e).hide(), t(".step-" + e).removeClass("right-sliding"), n();
      }), i.trigger("dialog:previous:done");
    }), o;
  }), t("actionclick", [ "require", "jquery", "_" ], function(t) {
    "use strict";
    function e(t) {
      return function(e) {
        if (e.isDefaultPrevented()) return null;
        if (e.ctrlKey || e.shiftKey || e.metaKey) {
          var n = r(e.currentTarget).attr("href");
          if (n && "#" !== n) return null;
        }
        var i = !!r(e.currentTarget).closest(".disabled").length, a = i ? null : t.apply(this, arguments);
        if (a !== !0) {
          var s = r(e.target).closest("a"), l = s.length && o.test(s.attr("href")) && r.contains(e.currentTarget, s[0]);
          (!l || i) && e.preventDefault();
        }
        return a;
      };
    }
    function n(t, e, n, i) {
      var o = e + (n.namespace ? "." + n.namespace : ""), a = [ o, n.selector, n.data, n.handler ];
      a.splice(2, i ? 0 : 1), t = r(t), t[i ? "on" : "off"].apply(t, a);
    }
    var r = t("jquery"), i = t("_"), o = /^\s*javascript:/i;
    r.each([ "click", "mousedown" ], function(t, o) {
      var a = "action" + o;
      r.fn[a] = function(t, e) {
        return e || (e = t, t = null), this.on(a, null, t, e);
      }, r.event.special[a] = {
        setup: function() {
          return !1;
        },
        add: function(t) {
          t.handler = i.throttle(e(t.handler), 10), n(this, o, t, !0);
        },
        remove: function(t) {
          n(this, o, t, !1);
        }
      };
    });
  }), t("presentations/modal-view", [ "require", "jquery", "backbone", "backbone.marionette", "events", "hbs!./templates/modal", "smooth-modal", "actionclick" ], function(t) {
    "use strict";
    var e = (t("jquery"), t("backbone")), n = t("backbone.marionette"), r = t("events"), i = t("hbs!./templates/modal"), o = t("smooth-modal");
    t("actionclick");
    var a = n.ItemView.extend({
      template: i,
      events: {
        "actionclick .smooth-modal-close, #cancel-button": "_closeClicked"
      },
      _closeClicked: function() {
        r.trigger("dialog-closed");
      }
    }), s = n.Layout.extend({
      initialize: function() {
        r.on("dialog-closed", this.closeDialog, this);
      },
      regions: {
        dialogRegion: o
      },
      openDialog: function(t) {
        var n = new e.Model(t);
        this.$el.toggle(!0), this.$el.addClass("smooth-modal"), this.dialogRegion.show(new a({
          model: n
        }));
      },
      closeDialog: function() {
        this.$el.toggle(!1), this.dialogRegion.close(), this.$el.removeClass("smooth-modal");
      }
    });
    return s;
  }), t("requestAnimationFrame", [ "require" ], function() {
    for (var t = 0, e = [ "ms", "moz", "webkit", "o" ], n = 0; n < e.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[e[n] + "RequestAnimationFrame"],
    window.cancelAnimationFrame = window[e[n] + "CancelAnimationFrame"] || window[e[n] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
      var n = new Date().getTime(), r = Math.max(0, 16 - (n - t)), i = window.setTimeout(function() {
        e(n + r);
      }, r);
      return t = n + r, i;
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
      clearTimeout(t);
    });
  }), t("presentations/presentation-controls", [ "require", "jquery", "_", "reveal", "./modal-view", "requestAnimationFrame" ], function(t) {
    "use strict";
    function e(t) {
      return t + ":not(" + s.playerControlDisabled + ")";
    }
    var n = t("jquery"), r = t("_"), i = t("reveal"), o = t("./modal-view"), a = -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome"), s = {
      container: ".presentation-video-container",
      controlsContainer: ".presentation-controls-inner",
      video: ".presentation-video",
      videoContainerInner: ".presentation-video-container-inner",
      videoOverlay: ".presentation-overlay-logomark",
      controls: {
        previous: ".presentation-controls-previous",
        overview: ".presentation-controls-overview",
        next: ".presentation-controls-next",
        telestrate: ".presentation-controls-telestrate",
        fullscreen: ".presentation-controls-fullscreen",
        exitFullscreen: ".presentation-controls-exitfullscreen",
        backToLibrary: ".presentation-back"
      },
      playerControls: {
        restart: ".video-controls-restart",
        rewind: ".video-controls-rewind",
        slowreverse: ".video-controls-slowreverse",
        play: ".video-controls-play",
        pause: ".video-controls-pause",
        slowforward: ".video-controls-slowforward",
        fastforward: ".video-controls-fastforward",
        nextAngle: ".video-controls-next-angle",
        previousAngle: ".video-controls-previous-angle",
        mute: ".video-controls-mute",
        unmute: ".video-controls-unmute"
      },
      playerControlDisabled: ".video-controls-disabled",
      presentationCanvas: ".presentation-canvas",
      presentationModal: ".presentation-modal"
    }, l = {
      isHidden: "is-hidden",
      buttonActive: "button-active"
    }, c = "hudl.presentation.video.";
    t("requestAnimationFrame");
    var u = {
      playAfterSeeking: {},
      videoIntervals: {},
      presentationModalView: null,
      presentationId: null,
      initialize: function(t) {
        i.addEventListener("slidechanged", u._slideChanged), i.addEventListener("overviewshown", u._overviewShown),
        i.addEventListener("overviewhidden", u._overviewHidden), u.presentationModalView = new o({
          el: n(s.presentationModal)
        }), u.presentationId = t.presentationId, n(s.controls.previous).click(u.prevSlide),
        n(s.controls.overview).click(u.toggleOverview), n(s.controls.next).click(u.nextSlide),
        n(s.controls.telestrate).click(u.toggleTelestrateMode), n(s.controls.fullscreen).click(u.enterFullscreen),
        n(s.controls.exitFullscreen).click(u.exitFullscreen), u._inIframe() ? (n(s.controls.backToLibrary).hide(),
        n(s.controls.backToLibrary).click(u.exitFullscreen), n(document).bind("webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange", function() {
          n(s.controls.backToLibrary).toggle();
        })) : (n(s.controls.backToLibrary).click(u.handleBackToLibrary), n("#intercom-container").show()),
        n(s.videoContainerInner).click(u.handleVidClick), n(s.videoOverlay).click(u.handleVidOverlayClick),
        n(e(s.playerControls.restart)).click(u.handleVidControlsRestart), n(e(s.playerControls.rewind)).mousedown(u.handleVidControlsRewind),
        n(e(s.playerControls.slowreverse)).mousedown(u.handleVidControlsSlowReverse), n(e(s.playerControls.play)).click(u.handleVidControlsPlay),
        n(e(s.playerControls.pause)).click(u.handleVidControlsPlay), n(e(s.playerControls.slowforward)).mousedown(u.handleVidControlsSlowForward),
        n(e(s.playerControls.fastforward)).mousedown(u.handleVidControlsFastForward), n(e(s.playerControls.nextAngle)).click(u.handleRemoteFastForwardDoublePress),
        n(e(s.playerControls.previousAngle)).click(u.handleRemoteRewindDoublePress), n(document).keyup(u.handleKeypress),
        n(e(s.playerControls.mute)).mousedown(u.handleVidControlsToggleMute), n(e(s.playerControls.unmute)).mousedown(u.handleVidControlsToggleMute),
        u.bindVideoEvents();
      },
      bindVideoEvents: function() {
        var t = n(s.container).find(s.video).on("play", function() {
          var t = n(this).parents(s.container);
          t.find(s.playerControls.pause).removeClass(l.isHidden), t.find(s.playerControls.play).addClass(l.isHidden);
        }).on("pause", function() {
          var t = n(this).parents(s.container);
          t.find(s.playerControls.pause).addClass(l.isHidden), t.find(s.playerControls.play).removeClass(l.isHidden);
        }).on("volumechange", function() {
          n(".video-controls-toggle-mute").toggleClass("muted");
        });
        t && t[0] && t[0].muted && n(".video-controls-toggle-mute").addClass("muted");
      },
      _slideChanged: function() {
        u.exitTelestrateMode();
      },
      _overviewHidden: function() {
        n(s.controls.overview).removeClass(l.buttonActive), u.exitTelestrateMode();
      },
      _overviewShown: function() {
        n(s.controls.overview).addClass(l.buttonActive), u.exitTelestrateMode(), u.loopThroughVideos(u.pauseVideo);
      },
      nextSlide: function() {
        i.next(), u.loopThroughVideos(function(t) {
          n(t).trigger("checkAudio");
        });
      },
      toggleOverview: function() {
        i.toggleOverview(), i.isOverview() ? (document.getSelection().removeAllRanges(),
        document.onselectstart = function() {
          return !1;
        }) : document.onselectstart = function() {
          return !0;
        };
      },
      prevSlide: function() {
        i.prev(), u.loopThroughVideos(function(t) {
          n(t).trigger("checkAudio");
        });
      },
      toggleTelestrateMode: function() {
        function t(t, e, n) {
          i.push(t), o.push(e), a.push(n);
        }
        function e() {
          var t;
          for (d.clearRect(0, 0, d.canvas.width, d.canvas.height), d.strokeStyle = "#ffdd00",
          d.lineJoin = "round", d.lineWidth = 5, t = 0; t < i.length; t++) d.beginPath(),
          a[t] && t ? d.moveTo(i[t - 1], o[t - 1]) : d.moveTo(i[t] - 1, o[t]), d.lineTo(i[t], o[t]),
          d.closePath(), d.stroke();
        }
        var r, i = [], o = [], a = [], c = document.getElementById("presentationCanvas"), d = c.getContext("2d");
        n(s.presentationCanvas).hasClass(l.isHidden) ? (n(".presentation-controls-telestrate").addClass(l.buttonActive),
        n(s.presentationCanvas).removeClass(l.isHidden), c.width = window.innerWidth, c.height = window.innerHeight,
        n(s.presentationCanvas).mousedown(function(n) {
          var i = n.pageX - this.offsetLeft, o = n.pageY - this.offsetTop;
          r = !0, t(i, o), e();
        }), n(s.presentationCanvas).mousemove(function(n) {
          r && (t(n.pageX - this.offsetLeft, n.pageY - this.offsetTop, !0), e());
        }), n(s.presentationCanvas).mouseup(function() {
          r = !1;
        }), n(s.presentationCanvas).mouseleave(function() {
          r = !1;
        })) : u.exitTelestrateMode();
      },
      exitTelestrateMode: function() {
        var t, e;
        n(".presentation-controls-telestrate").removeClass(l.buttonActive), t = n(s.presentationCanvas),
        e = t[0].getContext("2d"), t.hasClass(l.isHidden) || (t.addClass(l.isHidden), e.clearRect(0, 0, e.canvas.width, e.canvas.height));
      },
      enterFullscreen: function() {
        function t() {
          e > 0 && (document.body.style.display = "none", document.body.offsetHeight, document.body.style.display = ""),
          e -= 1, setTimeout(t, 500);
        }
        var e = 5;
        n(s.controls.fullscreen).addClass(l.isHidden), n(s.controls.exitFullscreen).removeClass(l.isHidden),
        i.fullscreen(u._fullscreenErrorDisplay), a && t();
      },
      exitFullscreen: function() {
        n(s.controls.fullscreen).removeClass(l.isHidden), n(s.controls.exitFullscreen).addClass(l.isHidden),
        i.exitFullscreen();
      },
      toggleFullscreen: function() {
        n(s.controls.fullscreen).hasClass(l.isHidden) ? u.exitFullscreen() : u.enterFullscreen();
      },
      handleRemoteRewindDoublePress: function() {
        u.loopThroughVideos(function(t) {
          n(t).trigger("previousAngle").trigger("checkAudio");
        });
      },
      handleRemoteRewindPress: function() {
        u.loopThroughVideos(u.rewindVideo);
      },
      handleRemoteReversePress: function() {
        u.loopThroughVideos(u.slowReverseVideo);
      },
      handleRemotePlayPress: function() {
        u.loopThroughVideos(u.togglePlayCurrentVideo);
      },
      handleRemoteSlowForwardPress: function() {
        u.loopThroughVideos(u.slowForwardVideo);
      },
      handleRemoteFastForwardPress: function() {
        u.loopThroughVideos(u.fastForwardVideo);
      },
      handleRemoteFastForwardDoublePress: function() {
        u.loopThroughVideos(function(t) {
          n(t).trigger("nextAngle").trigger("checkAudio");
        });
      },
      handleRemoteRestartPress: function() {
        u.loopThroughVideos(u.restartVideo);
      },
      handleRemoteNormalRate: function() {
        u.loopThroughVideos(u.normalRate);
      },
      handleVidControlsRestart: function(t) {
        var e = u.getSelectedVideo(t);
        u.restartVideo(e);
      },
      handleVidControlsRewind: function(t) {
        var e = u.getSelectedVideo(t);
        u.rewindVideo(e);
      },
      handleVidControlsSlowReverse: function(t) {
        var e = u.getSelectedVideo(t);
        u.slowReverseVideo(e);
      },
      handleVidControlsPlay: function(t) {
        var e = u.getSelectedVideo(t);
        u.togglePlayCurrentVideo(e);
      },
      handleVidControlsSlowForward: function(t) {
        var e = u.getSelectedVideo(t);
        u.slowForwardVideo(e);
      },
      handleVidControlsFastForward: function(t) {
        var e = u.getSelectedVideo(t);
        u.fastForwardVideo(e);
      },
      handleVidControlsToggleMute: function(t) {
        var e = u.getSelectedVideo(t);
        u.toggleMute(e);
      },
      handleVidClick: function(t) {
        var e = u.getSelectedVideo(t);
        u.togglePlayCurrentVideo(e);
      },
      handleVidOverlayClick: function(t) {
        var e = n(t.currentTarget).siblings("video")[0];
        u.togglePlayCurrentVideo(e);
      },
      handleBackToLibrary: function() {
        var t = n(s.controls.backToLibrary).data("teamId");
        window.location.assign("/library/" + t);
      },
      handleKeypress: function(t) {
        i.isOverview() ? 13 === t.which && i.toggleOverview() : 27 === t.which && u.exitFullscreen();
      },
      setupPlaybackRateChange: function(t) {
        var e = n(t);
        u.playAfterSeeking[t.id] = u.isPlaying(t), e.trigger(c + "rateChangePlayback"),
        n(document).one("mouseup", function() {
          u.normalRate(t);
        });
      },
      restartVideo: function(t) {
        var e, r, i = n(t);
        i.trigger(c + "resetAnnotations"), e = i.data(), r = e.angles[e.cai], t.currentTime = r.startFlagPosition,
        t.playbackRate = 1, t.play();
      },
      isPlaying: function(t) {
        return !t.paused;
      },
      normalRate: function(t) {
        n(document).off("mouseup"), u.clearIntervalRewind(t), t.playbackRate = 1, u.playAfterSeeking[t.id] ? t.play() : t.pause(),
        u.playAfterSeeking[t.id] = null, n(t).trigger(c + "resetAnnotations");
      },
      rewindVideo: function(t) {
        u.setupPlaybackRateChange(t), u.reverseVideo(2, t);
      },
      slowReverseVideo: function(t) {
        u.setupPlaybackRateChange(t), u.reverseVideo(.5, t);
      },
      reverseVideo: function(t, e) {
        var r;
        u.clearIntervalRewind(e), e.pause(), r = function() {
          e.currentTime = Math.max(e.currentTime - t / 30, 0), e.currentTime <= 0 && (e.currentTime = 0,
          u.clearIntervalRewind(e), e.pause());
        }, n(e).on("seeked." + e.id, function() {
          u.videoIntervals[e.id] = requestAnimationFrame(r);
        }), u.videoIntervals[e.id] = requestAnimationFrame(r);
      },
      clearIntervalRewind: function(t) {
        n(t).off("seeked." + t.id), cancelAnimationFrame(u.videoIntervals[t.id]);
      },
      togglePlayCurrentVideo: function(t) {
        u.clearIntervalRewind(t), t.paused ? (t.playbackRate = 1, t.play(), n(".present").find(s.videoOverlay).css("display", "none")) : t.pause();
      },
      pauseVideo: function(t) {
        u.clearIntervalRewind(t), t.pause();
      },
      slowForwardVideo: function(t) {
        u.setupPlaybackRateChange(t), u.clearIntervalRewind(t), t.play(), t.playbackRate = .5;
      },
      fastForwardVideo: function(t) {
        u.setupPlaybackRateChange(t), u.clearIntervalRewind(t), t.play(), t.playbackRate = 2;
      },
      toggleMute: function(t) {
        t.muted = !t.muted, n(s.playerControls.mute).toggleClass("is-hidden"), n(s.playerControls.unmute).toggleClass("is-hidden");
      },
      getSelectedVideo: function(t) {
        var e, r = n(t.currentTarget);
        return r.hasClass("presentation-video") ? r[0] : (e = r.parents(s.container).find("video"),
        e && e.length ? e[0] : !1);
      },
      getCurrentVideo: function() {
        var t = i.getCurrentSlide();
        return t ? n(t).find("video") : !1;
      },
      loopThroughVideos: function(t) {
        var e = u.getCurrentVideo();
        e && e.length && r.each(e, function(e) {
          t(e);
        });
      },
      _fullscreenErrorDisplay: function() {
        var t, e, i, o;
        n(s.controls.fullscreen).removeClass(l.isHidden), n(s.controls.exitFullscreen).addClass(l.isHidden),
        t = n("<a></a>").attr("href", "http://public.hudl.com/support/troubleshooting/recommended-browsers/").attr("target", "_blank").append("here"),
        e = n("<p></p>").append("Your browser does not support fullscreen presentation, but you can use the F11 key to maximize your browser window. "),
        u._inIframe() && (i = n("<a></a>").attr("href", "/presentations/" + u.presentationId).attr("target", "_top").append("here"),
        e.append("A larger version of the presentation can be found ").append(i).append(". ")),
        e.append("You can also view a list of recommended browsers ").append(t).append("."),
        o = n("<div></div>").addClass("ko-article").append(e), u.presentationModalView.openDialog({
          title: "Unsupported browser detected",
          content: r.unescape(o.html())
        });
      },
      _inIframe: function() {
        try {
          return window.self !== window.top;
        } catch (t) {
          return !0;
        }
      }
    };
    return u;
  }), t("presentations/presentation-data", [ "require", "jquery", "_", "services", "data" ], function(t) {
    "use strict";
    function e() {
      if (o && o.nullable("presentationData")) {
        var t = n.Deferred(), e = o.nullable("presentationData");
        return e = r.extend(e, {
          offline: !0
        }), t.resolve(e);
      }
      return i("presentationData").get().done(function(t) {
        t && t.presentationId && t.slides && t.slides.length || console.log("Error fetching data: " + t);
      });
    }
    var n = t("jquery"), r = t("_"), i = t("services"), o = t("data");
    return {
      fetch: e
    };
  }), t("presentations/processors/shared", [ "require", "_" ], function(t) {
    "use strict";
    var e = t("_"), n = {
      positionElement: function(t, e) {
        if (t && e) {
          var n = 200;
          t.hasClass("presentation-video-container") ? n = "auto" : t.hasClass("presentation-image-container") && (n = e.width > 600 ? -1 : 100),
          t.css({
            position: "absolute",
            height: e.height,
            width: e.width,
            left: e.x,
            top: e.y,
            zIndex: n
          });
        }
      },
      cleanStyle: function(t) {
        var n = {
          fontFamily: "",
          fontSize: "",
          fontStyle: "",
          fontWeight: "",
          decoration: "",
          shadow: "",
          foreground: "",
          alignment: "",
          opacity: 1,
          verticalAlignment: ""
        };
        return t = t || {}, t = e.defaults(t, n), {
          fontFamily: t.fontFamily.toLowerCase(),
          fontSize: t.fontSize,
          fontStyle: t.fontStyle.toLowerCase(),
          fontWeight: t.fontWeight.toLowerCase(),
          textDecoration: t.decoration.toLowerCase(),
          textShadow: t.shadow.toLowerCase(),
          color: t.foreground.toLowerCase(),
          textAlign: t.alignment.toLowerCase(),
          opacity: t.opacity,
          verticalAlign: "center" === t.verticalAlignment.toLowerCase() ? "middle" : t.verticalAlignment.toLowerCase()
        };
      },
      styleElement: function(t, n, r) {
        if (t && n && r) {
          var i = this.cleanStyle(e.findWhere(r, {
            styleId: n
          }));
          i ? t.css(i) : console.log("Could not find style: " + n);
        }
      },
      cleanText: function(t) {
        return ("string" == typeof t || t instanceof String) && t && t.length && (t = t.replace(/\\\//g, "/").replace(/\\\\/g, "\\").replace(/\\b/g, "\b").replace(/\\t/g, "	").replace(/\\f/g, "\f").replace(/\\r/g, "\\n").replace(/\\"/g, '"')),
        t;
      },
      cleanAndParse: function(t) {
        return ("string" == typeof t || t instanceof String) && t && t.length ? (t = n.cleanText(t),
        JSON.parse(t)) : t;
      }
    };
    return n;
  }), t("presentations/processors/text", [ "require", "jquery", "_", "./shared" ], function(t) {
    "use strict";
    var n = t("jquery"), r = t("_"), i = t("./shared"), o = {
      "default": "text",
      bullet: "bullet",
      indent: "indent",
      listItem: "listitem",
      newline: "newline",
      number: "number"
    }, a = {
      processSlide: function(t, e) {
        if (t && e) {
          var n = this;
          r.each(t.text, function(t) {
            var r = n.processText(t);
            r && e.append(r);
          });
        }
      },
      processText: function(t, o) {
        if (t && t.richText && t.richText.nodes && t.richText.nodes.length) {
          var a, s = o || n("<div></div>"), l = this;
          return r.each(t.richText.nodes, function(t) {
            var e = l.processTextNode(t, this);
            a = t.styleId, s.append(e);
          }, t), i.positionElement(s, t.position), i.styleElement(s, a || "Normal", t.richText.styles),
          s;
        }
        return e;
      },
      processTextNode: function(t, e, a) {
        var s, l = this, c = t.nodes && t.nodes.length > 0, u = !!a;
        switch (t.type.toLowerCase()) {
         case o.listItem:
          s = n("<li></li>");
          break;

         case o.bullet:
          s = n("<ul></ul>");
          break;

         case o.number:
          s = n("<ol></ol>");
          break;

         case o.indent:
          s = n("<p></p>");
          break;

         case o.newline:
          s = u ? "" : n("<br/>");
          break;

         case o.default:
         default:
          s = n("<span></span>");
        }
        return t.text && (t.text = i.cleanText(t.text), s.text(t.text)), t.position && i.positionElement(s, t.position),
        i.styleElement(s, t.styleId || "Normal", e.richText.styles), c && r.each(t.nodes, function(n) {
          var r = l.processTextNode(n, e, t);
          s.append(r);
        }), s;
      }
    };
    return a;
  }), t("presentations/processors/image", [ "require", "jquery", "_", "./shared" ], function(t) {
    "use strict";
    var e = t("jquery"), n = t("_"), r = t("./shared"), i = {
      processSlide: function(t, e) {
        if (t && e) {
          var r = this;
          n.each(t.images, function(t) {
            var n = r.processImage(t);
            e.append(n);
          });
        }
      },
      processImage: function(t) {
        var n = e("<div></div>").addClass("presentation-image-container");
        return -1 !== t.path.indexOf("http", 1) && (t.path = t.path.replace("http://hudl-content.s3.amazonaws.com/", "")),
        n.css({
          "background-image": "url(" + t.path.replace("..//", "../") + ")",
          "background-repeat": "no-repeat",
          "background-size": "contain",
          "background-position": "center center"
        }), r.positionElement(n, t.position), n;
      }
    };
    return i;
  }), function(e) {
    var n, r, i = "0.4.2", o = "hasOwnProperty", a = /[\.\/]/, s = /\s*,\s*/, l = "*", c = function(t, e) {
      return t - e;
    }, u = {
      n: {}
    }, d = function() {
      for (var t = 0, e = this.length; e > t; t++) if ("undefined" != typeof this[t]) return this[t];
    }, h = function() {
      for (var t = this.length; --t; ) if ("undefined" != typeof this[t]) return this[t];
    }, f = function(t, e) {
      t = String(t);
      var i, o = r, a = Array.prototype.slice.call(arguments, 2), s = f.listeners(t), l = 0, u = [], p = {}, g = [], v = n;
      g.firstDefined = d, g.lastDefined = h, n = t, r = 0;
      for (var m = 0, y = s.length; y > m; m++) "zIndex" in s[m] && (u.push(s[m].zIndex),
      s[m].zIndex < 0 && (p[s[m].zIndex] = s[m]));
      for (u.sort(c); u[l] < 0; ) if (i = p[u[l++]], g.push(i.apply(e, a)), r) return r = o,
      g;
      for (m = 0; y > m; m++) if (i = s[m], "zIndex" in i) if (i.zIndex == u[l]) {
        if (g.push(i.apply(e, a)), r) break;
        do if (l++, i = p[u[l]], i && g.push(i.apply(e, a)), r) break; while (i);
      } else p[i.zIndex] = i; else if (g.push(i.apply(e, a)), r) break;
      return r = o, n = v, g;
    };
    f._events = u, f.listeners = function(t) {
      var e, n, r, i, o, s, c, d, h = t.split(a), f = u, p = [ f ], g = [];
      for (i = 0, o = h.length; o > i; i++) {
        for (d = [], s = 0, c = p.length; c > s; s++) for (f = p[s].n, n = [ f[h[i]], f[l] ],
        r = 2; r--; ) e = n[r], e && (d.push(e), g = g.concat(e.f || []));
        p = d;
      }
      return g;
    }, f.on = function(t, e) {
      if (t = String(t), "function" != typeof e) return function() {};
      for (var n = t.split(s), r = 0, i = n.length; i > r; r++) !function(t) {
        for (var n, r = t.split(a), i = u, o = 0, s = r.length; s > o; o++) i = i.n, i = i.hasOwnProperty(r[o]) && i[r[o]] || (i[r[o]] = {
          n: {}
        });
        for (i.f = i.f || [], o = 0, s = i.f.length; s > o; o++) if (i.f[o] == e) {
          n = !0;
          break;
        }
        !n && i.f.push(e);
      }(n[r]);
      return function(t) {
        +t == +t && (e.zIndex = +t);
      };
    }, f.f = function(t) {
      var e = [].slice.call(arguments, 1);
      return function() {
        f.apply(null, [ t, null ].concat(e).concat([].slice.call(arguments, 0)));
      };
    }, f.stop = function() {
      r = 1;
    }, f.nt = function(t) {
      return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(n) : n;
    }, f.nts = function() {
      return n.split(a);
    }, f.off = f.unbind = function(t, e) {
      if (!t) return f._events = u = {
        n: {}
      }, void 0;
      var n = t.split(s);
      if (n.length > 1) for (var r = 0, i = n.length; i > r; r++) f.off(n[r], e); else {
        n = t.split(a);
        var c, d, h, r, i, p, g, v = [ u ];
        for (r = 0, i = n.length; i > r; r++) for (p = 0; p < v.length; p += h.length - 2) {
          if (h = [ p, 1 ], c = v[p].n, n[r] != l) c[n[r]] && h.push(c[n[r]]); else for (d in c) c[o](d) && h.push(c[d]);
          v.splice.apply(v, h);
        }
        for (r = 0, i = v.length; i > r; r++) for (c = v[r]; c.n; ) {
          if (e) {
            if (c.f) {
              for (p = 0, g = c.f.length; g > p; p++) if (c.f[p] == e) {
                c.f.splice(p, 1);
                break;
              }
              !c.f.length && delete c.f;
            }
            for (d in c.n) if (c.n[o](d) && c.n[d].f) {
              var m = c.n[d].f;
              for (p = 0, g = m.length; g > p; p++) if (m[p] == e) {
                m.splice(p, 1);
                break;
              }
              !m.length && delete c.n[d].f;
            }
          } else {
            delete c.f;
            for (d in c.n) c.n[o](d) && c.n[d].f && delete c.n[d].f;
          }
          c = c.n;
        }
      }
    }, f.once = function(t, e) {
      var n = function() {
        return f.unbind(t, n), e.apply(this, arguments);
      };
      return f.on(t, n);
    }, f.version = i, f.toString = function() {
      return "You are running Eve " + i;
    }, "undefined" != typeof module && module.exports ? module.exports = f : "function" == typeof t && t.amd ? t("eve", [], function() {
      return f;
    }) : e.eve = f;
  }(this), function(e, n) {
    "function" == typeof t && t.amd ? t("snap-svg", [ "eve" ], function(t) {
      return n(e, t);
    }) : n(e, e.eve);
  }(this, function(t, e) {
    var n = function(e) {
      var n = {}, r = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
        setTimeout(t, 16);
      }, i = Array.isArray || function(t) {
        return t instanceof Array || "[object Array]" == Object.prototype.toString.call(t);
      }, o = 0, a = "M" + (+new Date()).toString(36), s = function() {
        return a + (o++).toString(36);
      }, l = Date.now || function() {
        return +new Date();
      }, c = function(t) {
        var e = this;
        if (null == t) return e.s;
        var n = e.s - t;
        e.b += e.dur * n, e.B += e.dur * n, e.s = t;
      }, u = function(t) {
        var e = this;
        return null == t ? e.spd : (e.spd = t, void 0);
      }, d = function(t) {
        var e = this;
        return null == t ? e.dur : (e.s = e.s * t / e.dur, e.dur = t, void 0);
      }, h = function() {
        var t = this;
        delete n[t.id], t.update(), e("mina.stop." + t.id, t);
      }, f = function() {
        var t = this;
        t.pdif || (delete n[t.id], t.update(), t.pdif = t.get() - t.b);
      }, p = function() {
        var t = this;
        t.pdif && (t.b = t.get() - t.pdif, delete t.pdif, n[t.id] = t);
      }, g = function() {
        var t, e = this;
        if (i(e.start)) {
          t = [];
          for (var n = 0, r = e.start.length; r > n; n++) t[n] = +e.start[n] + (e.end[n] - e.start[n]) * e.easing(e.s);
        } else t = +e.start + (e.end - e.start) * e.easing(e.s);
        e.set(t);
      }, v = function() {
        var t = 0;
        for (var i in n) if (n.hasOwnProperty(i)) {
          var o = n[i], a = o.get();
          t++, o.s = (a - o.b) / (o.dur / o.spd), o.s >= 1 && (delete n[i], o.s = 1, t--,
          function(t) {
            setTimeout(function() {
              e("mina.finish." + t.id, t);
            });
          }(o)), o.update();
        }
        t && r(v);
      }, m = function(t, e, i, o, a, l, y) {
        var b = {
          id: s(),
          start: t,
          end: e,
          b: i,
          s: 0,
          dur: o - i,
          spd: 1,
          get: a,
          set: l,
          easing: y || m.linear,
          status: c,
          speed: u,
          duration: d,
          stop: h,
          pause: f,
          resume: p,
          update: g
        };
        n[b.id] = b;
        var w, x = 0;
        for (w in n) if (n.hasOwnProperty(w) && (x++, 2 == x)) break;
        return 1 == x && r(v), b;
      };
      return m.time = l, m.getById = function(t) {
        return n[t] || null;
      }, m.linear = function(t) {
        return t;
      }, m.easeout = function(t) {
        return Math.pow(t, 1.7);
      }, m.easein = function(t) {
        return Math.pow(t, .48);
      }, m.easeinout = function(t) {
        if (1 == t) return 1;
        if (0 == t) return 0;
        var e = .48 - t / 1.04, n = Math.sqrt(.1734 + e * e), r = n - e, i = Math.pow(Math.abs(r), 1 / 3) * (0 > r ? -1 : 1), o = -n - e, a = Math.pow(Math.abs(o), 1 / 3) * (0 > o ? -1 : 1), s = i + a + .5;
        return 3 * (1 - s) * s * s + s * s * s;
      }, m.backin = function(t) {
        if (1 == t) return 1;
        var e = 1.70158;
        return t * t * ((e + 1) * t - e);
      }, m.backout = function(t) {
        if (0 == t) return 0;
        t -= 1;
        var e = 1.70158;
        return t * t * ((e + 1) * t + e) + 1;
      }, m.elastic = function(t) {
        return t == !!t ? t : Math.pow(2, -10 * t) * Math.sin((t - .075) * 2 * Math.PI / .3) + 1;
      }, m.bounce = function(t) {
        var e, n = 7.5625, r = 2.75;
        return 1 / r > t ? e = n * t * t : 2 / r > t ? (t -= 1.5 / r, e = n * t * t + .75) : 2.5 / r > t ? (t -= 2.25 / r,
        e = n * t * t + .9375) : (t -= 2.625 / r, e = n * t * t + .984375), e;
      }, t.mina = m, m;
    }("undefined" == typeof e ? function() {} : e), r = function() {
      function r(t, e) {
        if (t) {
          if (t.tagName) return S(t);
          if (o(t, "array") && r.set) return r.set.apply(r, t);
          if (t instanceof w) return t;
          if (null == e) return t = E.doc.querySelector(t), S(t);
        }
        return t = null == t ? "100%" : t, e = null == e ? "100%" : e, new C(t, e);
      }
      function i(t, e) {
        if (e) {
          if ("#text" == t && (t = E.doc.createTextNode(e.text || "")), "string" == typeof t && (t = i(t)),
          "string" == typeof e) return "xlink:" == e.substring(0, 6) ? t.getAttributeNS(X, e.substring(6)) : "xml:" == e.substring(0, 4) ? t.getAttributeNS(Y, e.substring(4)) : t.getAttribute(e);
          for (var n in e) if (e[A](n)) {
            var r = _(e[n]);
            r ? "xlink:" == n.substring(0, 6) ? t.setAttributeNS(X, n.substring(6), r) : "xml:" == n.substring(0, 4) ? t.setAttributeNS(Y, n.substring(4), r) : t.setAttribute(n, r) : t.removeAttribute(n);
          }
        } else t = E.doc.createElementNS(Y, t);
        return t;
      }
      function o(t, e) {
        return e = _.prototype.toLowerCase.call(e), "finite" == e ? isFinite(t) : "array" == e && (t instanceof Array || Array.isArray && Array.isArray(t)) ? !0 : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || N.call(t).slice(8, -1).toLowerCase() == e;
      }
      function a(t) {
        if ("function" == typeof t || Object(t) !== t) return t;
        var e = new t.constructor();
        for (var n in t) t[A](n) && (e[n] = a(t[n]));
        return e;
      }
      function s(t, e) {
        for (var n = 0, r = t.length; r > n; n++) if (t[n] === e) return t.push(t.splice(n, 1)[0]);
      }
      function l(t, e, n) {
        function r() {
          var i = Array.prototype.slice.call(arguments, 0), o = i.join("␀"), a = r.cache = r.cache || {}, l = r.count = r.count || [];
          return a[A](o) ? (s(l, o), n ? n(a[o]) : a[o]) : (l.length >= 1e3 && delete a[l.shift()],
          l.push(o), a[o] = t.apply(e, i), n ? n(a[o]) : a[o]);
        }
        return r;
      }
      function c(t, e, n, r, i, o) {
        if (null == i) {
          var a = t - n, s = e - r;
          return a || s ? (180 + 180 * T.atan2(-s, -a) / R + 360) % 360 : 0;
        }
        return c(t, e, i, o) - c(n, r, i, o);
      }
      function u(t) {
        return t % 360 * R / 180;
      }
      function d(t) {
        return 180 * t / R % 360;
      }
      function h(t) {
        var e = [];
        return t = t.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(t, n, r) {
          return r = r.split(/\s*,\s*|\s+/), "rotate" == n && 1 == r.length && r.push(0, 0),
          "scale" == n && (r.length > 2 ? r = r.slice(0, 2) : 2 == r.length && r.push(0, 0),
          1 == r.length && r.push(r[0], 0, 0)), "skewX" == n ? e.push([ "m", 1, 0, T.tan(u(r[0])), 1, 0, 0 ]) : "skewY" == n ? e.push([ "m", 1, T.tan(u(r[0])), 0, 1, 0, 0 ]) : e.push([ n.charAt(0) ].concat(r)),
          t;
        }), e;
      }
      function f(t, e) {
        var n = ie(t), i = new r.Matrix();
        if (n) for (var o = 0, a = n.length; a > o; o++) {
          var s, l, c, u, d, h = n[o], f = h.length, p = _(h[0]).toLowerCase(), g = h[0] != p, v = g ? i.invert() : 0;
          "t" == p && 2 == f ? i.translate(h[1], 0) : "t" == p && 3 == f ? g ? (s = v.x(0, 0),
          l = v.y(0, 0), c = v.x(h[1], h[2]), u = v.y(h[1], h[2]), i.translate(c - s, u - l)) : i.translate(h[1], h[2]) : "r" == p ? 2 == f ? (d = d || e,
          i.rotate(h[1], d.x + d.width / 2, d.y + d.height / 2)) : 4 == f && (g ? (c = v.x(h[2], h[3]),
          u = v.y(h[2], h[3]), i.rotate(h[1], c, u)) : i.rotate(h[1], h[2], h[3])) : "s" == p ? 2 == f || 3 == f ? (d = d || e,
          i.scale(h[1], h[f - 1], d.x + d.width / 2, d.y + d.height / 2)) : 4 == f ? g ? (c = v.x(h[2], h[3]),
          u = v.y(h[2], h[3]), i.scale(h[1], h[1], c, u)) : i.scale(h[1], h[1], h[2], h[3]) : 5 == f && (g ? (c = v.x(h[3], h[4]),
          u = v.y(h[3], h[4]), i.scale(h[1], h[2], c, u)) : i.scale(h[1], h[2], h[3], h[4])) : "m" == p && 7 == f && i.add(h[1], h[2], h[3], h[4], h[5], h[6]);
        }
        return i;
      }
      function p(t, e) {
        if (null == e) {
          var n = !0;
          if (e = "linearGradient" == t.type || "radialGradient" == t.type ? t.node.getAttribute("gradientTransform") : "pattern" == t.type ? t.node.getAttribute("patternTransform") : t.node.getAttribute("transform"),
          !e) return new r.Matrix();
          e = h(e);
        } else e = r._.rgTransform.test(e) ? _(e).replace(/\.{3}|\u2026/g, t._.transform || V) : h(e),
        o(e, "array") && (e = r.path ? r.path.toString.call(e) : _(e)), t._.transform = e;
        var i = f(e, t.getBBox(1));
        return n ? i : (t.matrix = i, void 0);
      }
      function v(t) {
        var e = t.node.ownerSVGElement && S(t.node.ownerSVGElement) || t.node.parentNode && S(t.node.parentNode) || r.select("svg") || r(0, 0), n = e.select("defs"), i = null == n ? !1 : n.node;
        return i || (i = k("defs", e.node).node), i;
      }
      function m(t) {
        return t.node.ownerSVGElement && S(t.node.ownerSVGElement) || r.select("svg");
      }
      function y(t, e, n) {
        function r(t) {
          if (null == t) return V;
          if (t == +t) return t;
          i(c, {
            width: t
          });
          try {
            return c.getBBox().width;
          } catch (e) {
            return 0;
          }
        }
        function o(t) {
          if (null == t) return V;
          if (t == +t) return t;
          i(c, {
            height: t
          });
          try {
            return c.getBBox().height;
          } catch (e) {
            return 0;
          }
        }
        function a(r, i) {
          null == e ? l[r] = i(t.attr(r) || 0) : r == e && (l = i(null == n ? t.attr(r) || 0 : n));
        }
        var s = m(t).node, l = {}, c = s.querySelector(".svg---mgr");
        switch (c || (c = i("rect"), i(c, {
          x: -9e9,
          y: -9e9,
          width: 10,
          height: 10,
          "class": "svg---mgr",
          fill: "none"
        }), s.appendChild(c)), t.type) {
         case "rect":
          a("rx", r), a("ry", o);

         case "image":
          a("width", r), a("height", o);

         case "text":
          a("x", r), a("y", o);
          break;

         case "circle":
          a("cx", r), a("cy", o), a("r", r);
          break;

         case "ellipse":
          a("cx", r), a("cy", o), a("rx", r), a("ry", o);
          break;

         case "line":
          a("x1", r), a("x2", r), a("y1", o), a("y2", o);
          break;

         case "marker":
          a("refX", r), a("markerWidth", r), a("refY", o), a("markerHeight", o);
          break;

         case "radialGradient":
          a("fx", r), a("fy", o);
          break;

         case "tspan":
          a("dx", r), a("dy", o);
          break;

         default:
          a(e, r);
        }
        return s.removeChild(c), l;
      }
      function b(t) {
        o(t, "array") || (t = Array.prototype.slice.call(arguments, 0));
        for (var e = 0, n = 0, r = this.node; this[e]; ) delete this[e++];
        for (e = 0; e < t.length; e++) "set" == t[e].type ? t[e].forEach(function(t) {
          r.appendChild(t.node);
        }) : r.appendChild(t[e].node);
        var i = r.childNodes;
        for (e = 0; e < i.length; e++) this[n++] = S(i[e]);
        return this;
      }
      function w(t) {
        if (t.snap in K) return K[t.snap];
        var e, n = this.id = G();
        try {
          e = t.ownerSVGElement;
        } catch (r) {}
        if (this.node = t, e && (this.paper = new C(e)), this.type = t.tagName, this.anims = {},
        this._ = {
          transform: []
        }, t.snap = n, K[n] = this, "g" == this.type && (this.add = b), this.type in {
          g: 1,
          mask: 1,
          pattern: 1
        }) for (var i in C.prototype) C.prototype[A](i) && (this[i] = C.prototype[i]);
      }
      function x(t) {
        this.node = t;
      }
      function k(t, e) {
        var n = i(t);
        e.appendChild(n);
        var r = S(n);
        return r;
      }
      function C(t, e) {
        var n, r, o, a = C.prototype;
        if (t && "svg" == t.tagName) {
          if (t.snap in K) return K[t.snap];
          var s = t.ownerDocument;
          n = new w(t), r = t.getElementsByTagName("desc")[0], o = t.getElementsByTagName("defs")[0],
          r || (r = i("desc"), r.appendChild(s.createTextNode("Created with Snap")), n.node.appendChild(r)),
          o || (o = i("defs"), n.node.appendChild(o)), n.defs = o;
          for (var l in a) a[A](l) && (n[l] = a[l]);
          n.paper = n.root = n;
        } else n = k("svg", E.doc.body), i(n.node, {
          height: e,
          version: 1.1,
          width: t,
          xmlns: Y
        });
        return n;
      }
      function S(t) {
        return t ? t instanceof w || t instanceof x ? t : t.tagName && "svg" == t.tagName.toLowerCase() ? new C(t) : t.tagName && "object" == t.tagName.toLowerCase() && "image/svg+xml" == t.type ? new C(t.contentDocument.getElementsByTagName("svg")[0]) : new w(t) : t;
      }
      r.version = "0.3.0", r.toString = function() {
        return "Snap v" + this.version;
      }, r._ = {};
      var E = {
        win: t,
        doc: t.document
      };
      r._.glob = E;
      var A = "hasOwnProperty", _ = String, P = parseFloat, M = parseInt, T = Math, L = T.max, F = T.min, q = T.abs, R = (T.pow,
      T.PI), V = (T.round, ""), I = " ", N = Object.prototype.toString, D = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i, H = "	\n\f\r   ᠎             　\u2028\u2029", j = (r._.separator = new RegExp("[," + H + "]+"),
      new RegExp("[" + H + "]", "g"), new RegExp("[" + H + "]*,[" + H + "]*")), O = {
        hs: 1,
        rg: 1
      }, B = new RegExp("([a-z])[" + H + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + H + "]*,?[" + H + "]*)+)", "ig"), z = new RegExp("([rstm])[" + H + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + H + "]*,?[" + H + "]*)+)", "ig"), U = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + H + "]*,?[" + H + "]*", "ig"), $ = 0, W = "S" + (+new Date()).toString(36), G = function() {
        return W + ($++).toString(36);
      }, X = "http://www.w3.org/1999/xlink", Y = "http://www.w3.org/2000/svg", K = {}, J = r.url = function(t) {
        return "url('#" + t + "')";
      };
      r._.$ = i, r._.id = G, r.format = function() {
        var t = /\{([^\}]+)\}/g, e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, n = function(t, n, r) {
          var i = r;
          return n.replace(e, function(t, e, n, r, o) {
            e = e || r, i && (e in i && (i = i[e]), "function" == typeof i && o && (i = i()));
          }), i = (null == i || i == r ? t : i) + "";
        };
        return function(e, r) {
          return _(e).replace(t, function(t, e) {
            return n(t, e, r);
          });
        };
      }(), r._.clone = a, r._.cacher = l, r.rad = u, r.deg = d, r.angle = c, r.is = o,
      r.snapTo = function(t, e, n) {
        if (n = o(n, "finite") ? n : 10, o(t, "array")) {
          for (var r = t.length; r--; ) if (q(t[r] - e) <= n) return t[r];
        } else {
          t = +t;
          var i = e % t;
          if (n > i) return e - i;
          if (i > t - n) return e - i + t;
        }
        return e;
      }, r.getRGB = l(function(t) {
        if (!t || (t = _(t)).indexOf("-") + 1) return {
          r: -1,
          g: -1,
          b: -1,
          hex: "none",
          error: 1,
          toString: ee
        };
        if ("none" == t) return {
          r: -1,
          g: -1,
          b: -1,
          hex: "none",
          toString: ee
        };
        if (!(O[A](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = Z(t)),
        !t) return {
          r: -1,
          g: -1,
          b: -1,
          hex: "none",
          error: 1,
          toString: ee
        };
        var e, n, i, a, s, l, c = t.match(D);
        return c ? (c[2] && (i = M(c[2].substring(5), 16), n = M(c[2].substring(3, 5), 16),
        e = M(c[2].substring(1, 3), 16)), c[3] && (i = M((s = c[3].charAt(3)) + s, 16),
        n = M((s = c[3].charAt(2)) + s, 16), e = M((s = c[3].charAt(1)) + s, 16)), c[4] && (l = c[4].split(j),
        e = P(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), n = P(l[1]), "%" == l[1].slice(-1) && (n *= 2.55),
        i = P(l[2]), "%" == l[2].slice(-1) && (i *= 2.55), "rgba" == c[1].toLowerCase().slice(0, 4) && (a = P(l[3])),
        l[3] && "%" == l[3].slice(-1) && (a /= 100)), c[5] ? (l = c[5].split(j), e = P(l[0]),
        "%" == l[0].slice(-1) && (e /= 100), n = P(l[1]), "%" == l[1].slice(-1) && (n /= 100),
        i = P(l[2]), "%" == l[2].slice(-1) && (i /= 100), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (e /= 360),
        "hsba" == c[1].toLowerCase().slice(0, 4) && (a = P(l[3])), l[3] && "%" == l[3].slice(-1) && (a /= 100),
        r.hsb2rgb(e, n, i, a)) : c[6] ? (l = c[6].split(j), e = P(l[0]), "%" == l[0].slice(-1) && (e /= 100),
        n = P(l[1]), "%" == l[1].slice(-1) && (n /= 100), i = P(l[2]), "%" == l[2].slice(-1) && (i /= 100),
        ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (e /= 360), "hsla" == c[1].toLowerCase().slice(0, 4) && (a = P(l[3])),
        l[3] && "%" == l[3].slice(-1) && (a /= 100), r.hsl2rgb(e, n, i, a)) : (e = F(T.round(e), 255),
        n = F(T.round(n), 255), i = F(T.round(i), 255), a = F(L(a, 0), 1), c = {
          r: e,
          g: n,
          b: i,
          toString: ee
        }, c.hex = "#" + (16777216 | i | n << 8 | e << 16).toString(16).slice(1), c.opacity = o(a, "finite") ? a : 1,
        c)) : {
          r: -1,
          g: -1,
          b: -1,
          hex: "none",
          error: 1,
          toString: ee
        };
      }, r), r.hsb = l(function(t, e, n) {
        return r.hsb2rgb(t, e, n).hex;
      }), r.hsl = l(function(t, e, n) {
        return r.hsl2rgb(t, e, n).hex;
      }), r.rgb = l(function(t, e, n, r) {
        if (o(r, "finite")) {
          var i = T.round;
          return "rgba(" + [ i(t), i(e), i(n), +r.toFixed(2) ] + ")";
        }
        return "#" + (16777216 | n | e << 8 | t << 16).toString(16).slice(1);
      });
      var Z = function(t) {
        var e = E.doc.getElementsByTagName("head")[0] || E.doc.getElementsByTagName("svg")[0], n = "rgb(255, 0, 0)";
        return Z = l(function(t) {
          if ("red" == t.toLowerCase()) return n;
          e.style.color = n, e.style.color = t;
          var r = E.doc.defaultView.getComputedStyle(e, V).getPropertyValue("color");
          return r == n ? null : r;
        }), Z(t);
      }, Q = function() {
        return "hsb(" + [ this.h, this.s, this.b ] + ")";
      }, te = function() {
        return "hsl(" + [ this.h, this.s, this.l ] + ")";
      }, ee = function() {
        return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [ this.r, this.g, this.b, this.opacity ] + ")";
      }, ne = function(t, e, n) {
        if (null == e && o(t, "object") && "r" in t && "g" in t && "b" in t && (n = t.b,
        e = t.g, t = t.r), null == e && o(t, string)) {
          var i = r.getRGB(t);
          t = i.r, e = i.g, n = i.b;
        }
        return (t > 1 || e > 1 || n > 1) && (t /= 255, e /= 255, n /= 255), [ t, e, n ];
      }, re = function(t, e, n, i) {
        t = T.round(255 * t), e = T.round(255 * e), n = T.round(255 * n);
        var a = {
          r: t,
          g: e,
          b: n,
          opacity: o(i, "finite") ? i : 1,
          hex: r.rgb(t, e, n),
          toString: ee
        };
        return o(i, "finite") && (a.opacity = i), a;
      };
      r.color = function(t) {
        var e;
        return o(t, "object") && "h" in t && "s" in t && "b" in t ? (e = r.hsb2rgb(t), t.r = e.r,
        t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : o(t, "object") && "h" in t && "s" in t && "l" in t ? (e = r.hsl2rgb(t),
        t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : (o(t, "string") && (t = r.getRGB(t)),
        o(t, "object") && "r" in t && "g" in t && "b" in t && !("error" in t) ? (e = r.rgb2hsl(t),
        t.h = e.h, t.s = e.s, t.l = e.l, e = r.rgb2hsb(t), t.v = e.b) : (t = {
          hex: "none"
        }, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1, t.error = 1)), t.toString = ee,
        t;
      }, r.hsb2rgb = function(t, e, n, r) {
        o(t, "object") && "h" in t && "s" in t && "b" in t && (n = t.b, e = t.s, t = t.h,
        r = t.o), t *= 360;
        var i, a, s, l, c;
        return t = t % 360 / 60, c = n * e, l = c * (1 - q(t % 2 - 1)), i = a = s = n - c,
        t = ~~t, i += [ c, l, 0, 0, l, c ][t], a += [ l, c, c, l, 0, 0 ][t], s += [ 0, 0, l, c, c, l ][t],
        re(i, a, s, r);
      }, r.hsl2rgb = function(t, e, n, r) {
        o(t, "object") && "h" in t && "s" in t && "l" in t && (n = t.l, e = t.s, t = t.h),
        (t > 1 || e > 1 || n > 1) && (t /= 360, e /= 100, n /= 100), t *= 360;
        var i, a, s, l, c;
        return t = t % 360 / 60, c = 2 * e * (.5 > n ? n : 1 - n), l = c * (1 - q(t % 2 - 1)),
        i = a = s = n - c / 2, t = ~~t, i += [ c, l, 0, 0, l, c ][t], a += [ l, c, c, l, 0, 0 ][t],
        s += [ 0, 0, l, c, c, l ][t], re(i, a, s, r);
      }, r.rgb2hsb = function(t, e, n) {
        n = ne(t, e, n), t = n[0], e = n[1], n = n[2];
        var r, i, o, a;
        return o = L(t, e, n), a = o - F(t, e, n), r = 0 == a ? null : o == t ? (e - n) / a : o == e ? (n - t) / a + 2 : (t - e) / a + 4,
        r = 60 * ((r + 360) % 6) / 360, i = 0 == a ? 0 : a / o, {
          h: r,
          s: i,
          b: o,
          toString: Q
        };
      }, r.rgb2hsl = function(t, e, n) {
        n = ne(t, e, n), t = n[0], e = n[1], n = n[2];
        var r, i, o, a, s, l;
        return a = L(t, e, n), s = F(t, e, n), l = a - s, r = 0 == l ? null : a == t ? (e - n) / l : a == e ? (n - t) / l + 2 : (t - e) / l + 4,
        r = 60 * ((r + 360) % 6) / 360, o = (a + s) / 2, i = 0 == l ? 0 : .5 > o ? l / (2 * o) : l / (2 - 2 * o),
        {
          h: r,
          s: i,
          l: o,
          toString: te
        };
      }, r.parsePathString = function(t) {
        if (!t) return null;
        var e = r.path(t);
        if (e.arr) return r.path.clone(e.arr);
        var n = {
          a: 7,
          c: 6,
          o: 2,
          h: 1,
          l: 2,
          m: 2,
          r: 4,
          q: 4,
          s: 4,
          t: 2,
          v: 1,
          u: 3,
          z: 0
        }, i = [];
        return o(t, "array") && o(t[0], "array") && (i = r.path.clone(t)), i.length || _(t).replace(B, function(t, e, r) {
          var o = [], a = e.toLowerCase();
          if (r.replace(U, function(t, e) {
            e && o.push(+e);
          }), "m" == a && o.length > 2 && (i.push([ e ].concat(o.splice(0, 2))), a = "l",
          e = "m" == e ? "l" : "L"), "o" == a && 1 == o.length && i.push([ e, o[0] ]), "r" == a) i.push([ e ].concat(o)); else for (;o.length >= n[a] && (i.push([ e ].concat(o.splice(0, n[a]))),
          n[a]); ) ;
        }), i.toString = r.path.toString, e.arr = r.path.clone(i), i;
      };
      var ie = r.parseTransformString = function(t) {
        if (!t) return null;
        var e = [];
        return o(t, "array") && o(t[0], "array") && (e = r.path.clone(t)), e.length || _(t).replace(z, function(t, n, r) {
          var i = [];
          n.toLowerCase(), r.replace(U, function(t, e) {
            e && i.push(+e);
          }), e.push([ n ].concat(i));
        }), e.toString = r.path.toString, e;
      };
      r._.svgTransform2string = h, r._.rgTransform = new RegExp("^[a-z][" + H + "]*-?\\.?\\d", "i"),
      r._.transform2matrix = f, r._unit2px = y, E.doc.contains || E.doc.compareDocumentPosition ? function(t, e) {
        var n = 9 == t.nodeType ? t.documentElement : t, r = e && e.parentNode;
        return t == r || !(!r || 1 != r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)));
      } : function(t, e) {
        if (e) for (;e; ) if (e = e.parentNode, e == t) return !0;
        return !1;
      }, r._.getSomeDefs = v, r._.getSomeSVG = m, r.select = function(t) {
        return S(E.doc.querySelector(t));
      }, r.selectAll = function(t) {
        for (var e = E.doc.querySelectorAll(t), n = (r.set || Array)(), i = 0; i < e.length; i++) n.push(S(e[i]));
        return n;
      }, setInterval(function() {
        for (var t in K) if (K[A](t)) {
          var e = K[t], n = e.node;
          ("svg" != e.type && !n.ownerSVGElement || "svg" == e.type && (!n.parentNode || "ownerSVGElement" in n.parentNode && !n.ownerSVGElement)) && delete K[t];
        }
      }, 1e4), function(t) {
        function a(t) {
          function e(t, e) {
            var n = i(t.node, e);
            n = n && n.match(a), n = n && n[2], n && "#" == n.charAt() && (n = n.substring(1),
            n && (l[n] = (l[n] || []).concat(function(n) {
              var r = {};
              r[e] = J(n), i(t.node, r);
            })));
          }
          function n(t) {
            var e = i(t.node, "xlink:href");
            e && "#" == e.charAt() && (e = e.substring(1), e && (l[e] = (l[e] || []).concat(function(e) {
              t.attr("xlink:href", "#" + e);
            })));
          }
          for (var r, o = t.selectAll("*"), a = /^\s*url\(("|'|)(.*)\1\)\s*$/, s = [], l = {}, c = 0, u = o.length; u > c; c++) {
            r = o[c], e(r, "fill"), e(r, "stroke"), e(r, "filter"), e(r, "mask"), e(r, "clip-path"),
            n(r);
            var d = i(r.node, "id");
            d && (i(r.node, {
              id: r.id
            }), s.push({
              old: d,
              id: r.id
            }));
          }
          for (c = 0, u = s.length; u > c; c++) {
            var h = l[s[c].old];
            if (h) for (var f = 0, p = h.length; p > f; f++) h[f](s[c].id);
          }
        }
        function s(t, e, n) {
          return function(r) {
            var i = r.slice(t, e);
            return 1 == i.length && (i = i[0]), n ? n(i) : i;
          };
        }
        function l(t) {
          return function() {
            var e = t ? "<" + this.type : "", n = this.node.attributes, r = this.node.childNodes;
            if (t) for (var i = 0, o = n.length; o > i; i++) e += " " + n[i].name + '="' + n[i].value.replace(/"/g, '\\"') + '"';
            if (r.length) {
              for (t && (e += ">"), i = 0, o = r.length; o > i; i++) 3 == r[i].nodeType ? e += r[i].nodeValue : 1 == r[i].nodeType && (e += S(r[i]).toString());
              t && (e += "</" + this.type + ">");
            } else t && (e += "/>");
            return e;
          };
        }
        t.attr = function(t, n) {
          var r = this;
          if (r.node, !t) return r;
          if (o(t, "string")) {
            if (!(arguments.length > 1)) return e("snap.util.getattr." + t, r).firstDefined();
            var i = {};
            i[t] = n, t = i;
          }
          for (var a in t) t[A](a) && e("snap.util.attr." + a, r, t[a]);
          return r;
        }, t.getBBox = function(t) {
          if (!r.Matrix || !r.path) return this.node.getBBox();
          var e = this, n = new r.Matrix();
          if (e.removed) return r._.box();
          for (;"use" == e.type; ) if (t || (n = n.add(e.transform().localMatrix.translate(e.attr("x") || 0, e.attr("y") || 0))),
          e.original) e = e.original; else {
            var i = e.attr("xlink:href");
            e = e.original = e.node.ownerDocument.getElementById(i.substring(i.indexOf("#") + 1));
          }
          var o = e._, a = r.path.get[e.type] || r.path.get.deflt;
          try {
            return t ? (o.bboxwt = a ? r.path.getBBox(e.realPath = a(e)) : r._.box(e.node.getBBox()),
            r._.box(o.bboxwt)) : (e.realPath = a(e), e.matrix = e.transform().localMatrix, o.bbox = r.path.getBBox(r.path.map(e.realPath, n.add(e.matrix))),
            r._.box(o.bbox));
          } catch (s) {
            return r._.box();
          }
        };
        var c = function() {
          return this.string;
        };
        t.transform = function(t) {
          var e = this._;
          if (null == t) {
            for (var n, o = this, a = new r.Matrix(this.node.getCTM()), s = p(this), l = [ s ], u = new r.Matrix(), d = s.toTransformString(), h = _(s) == _(this.matrix) ? _(e.transform) : d; "svg" != o.type && (o = o.parent()); ) l.push(p(o));
            for (n = l.length; n--; ) u.add(l[n]);
            return {
              string: h,
              globalMatrix: a,
              totalMatrix: u,
              localMatrix: s,
              diffMatrix: a.clone().add(s.invert()),
              global: a.toTransformString(),
              total: u.toTransformString(),
              local: d,
              toString: c
            };
          }
          return t instanceof r.Matrix ? this.matrix = t : p(this, t), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? i(this.node, {
            gradientTransform: this.matrix
          }) : "pattern" == this.type ? i(this.node, {
            patternTransform: this.matrix
          }) : i(this.node, {
            transform: this.matrix
          })), this;
        }, t.parent = function() {
          return S(this.node.parentNode);
        }, t.append = t.add = function(t) {
          if (t) {
            if ("set" == t.type) {
              var e = this;
              return t.forEach(function(t) {
                e.add(t);
              }), this;
            }
            t = S(t), this.node.appendChild(t.node), t.paper = this.paper;
          }
          return this;
        }, t.appendTo = function(t) {
          return t && (t = S(t), t.append(this)), this;
        }, t.prepend = function(t) {
          if (t) {
            if ("set" == t.type) {
              var e, n = this;
              return t.forEach(function(t) {
                e ? e.after(t) : n.prepend(t), e = t;
              }), this;
            }
            t = S(t);
            var r = t.parent();
            this.node.insertBefore(t.node, this.node.firstChild), this.add && this.add(), t.paper = this.paper,
            this.parent() && this.parent().add(), r && r.add();
          }
          return this;
        }, t.prependTo = function(t) {
          return t = S(t), t.prepend(this), this;
        }, t.before = function(t) {
          if ("set" == t.type) {
            var e = this;
            return t.forEach(function(t) {
              var n = t.parent();
              e.node.parentNode.insertBefore(t.node, e.node), n && n.add();
            }), this.parent().add(), this;
          }
          t = S(t);
          var n = t.parent();
          return this.node.parentNode.insertBefore(t.node, this.node), this.parent() && this.parent().add(),
          n && n.add(), t.paper = this.paper, this;
        }, t.after = function(t) {
          t = S(t);
          var e = t.parent();
          return this.node.nextSibling ? this.node.parentNode.insertBefore(t.node, this.node.nextSibling) : this.node.parentNode.appendChild(t.node),
          this.parent() && this.parent().add(), e && e.add(), t.paper = this.paper, this;
        }, t.insertBefore = function(t) {
          t = S(t);
          var e = this.parent();
          return t.node.parentNode.insertBefore(this.node, t.node), this.paper = t.paper,
          e && e.add(), t.parent() && t.parent().add(), this;
        }, t.insertAfter = function(t) {
          t = S(t);
          var e = this.parent();
          return t.node.parentNode.insertBefore(this.node, t.node.nextSibling), this.paper = t.paper,
          e && e.add(), t.parent() && t.parent().add(), this;
        }, t.remove = function() {
          var t = this.parent();
          return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper,
          this.removed = !0, t && t.add(), this;
        }, t.select = function(t) {
          return S(this.node.querySelector(t));
        }, t.selectAll = function(t) {
          for (var e = this.node.querySelectorAll(t), n = (r.set || Array)(), i = 0; i < e.length; i++) n.push(S(e[i]));
          return n;
        }, t.asPX = function(t, e) {
          return null == e && (e = this.attr(t)), +y(this, t, e);
        }, t.use = function() {
          var t, e = this.node.id;
          return e || (e = this.id, i(this.node, {
            id: e
          })), t = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? k(this.type, this.node.parentNode) : k("use", this.node.parentNode),
          i(t.node, {
            "xlink:href": "#" + e
          }), t.original = this, t;
        };
        var u = /\S+/g;
        t.addClass = function(t) {
          var e, n, r, i, o = (t || "").match(u) || [], a = this.node, s = a.className.baseVal, l = s.match(u) || [];
          if (o.length) {
            for (e = 0; r = o[e++]; ) n = l.indexOf(r), ~n || l.push(r);
            i = l.join(" "), s != i && (a.className.baseVal = i);
          }
          return this;
        }, t.removeClass = function(t) {
          var e, n, r, i, o = (t || "").match(u) || [], a = this.node, s = a.className.baseVal, l = s.match(u) || [];
          if (l.length) {
            for (e = 0; r = o[e++]; ) n = l.indexOf(r), ~n && l.splice(n, 1);
            i = l.join(" "), s != i && (a.className.baseVal = i);
          }
          return this;
        }, t.hasClass = function(t) {
          var e = this.node, n = e.className.baseVal, r = n.match(u) || [];
          return !!~r.indexOf(t);
        }, t.toggleClass = function(t, e) {
          if (null != e) return e ? this.addClass(t) : this.removeClass(t);
          var n, r, i, o, a = (t || "").match(u) || [], s = this.node, l = s.className.baseVal, c = l.match(u) || [];
          for (n = 0; i = a[n++]; ) r = c.indexOf(i), ~r ? c.splice(r, 1) : c.push(i);
          return o = c.join(" "), l != o && (s.className.baseVal = o), this;
        }, t.clone = function() {
          var t = S(this.node.cloneNode(!0));
          return i(t.node, "id") && i(t.node, {
            id: t.id
          }), a(t), t.insertAfter(this), t;
        }, t.toDefs = function() {
          var t = v(this);
          return t.appendChild(this.node), this;
        }, t.pattern = t.toPattern = function(t, e, n, r) {
          var a = k("pattern", v(this));
          return null == t && (t = this.getBBox()), o(t, "object") && "x" in t && (e = t.y,
          n = t.width, r = t.height, t = t.x), i(a.node, {
            x: t,
            y: e,
            width: n,
            height: r,
            patternUnits: "userSpaceOnUse",
            id: a.id,
            viewBox: [ t, e, n, r ].join(" ")
          }), a.node.appendChild(this.node), a;
        }, t.marker = function(t, e, n, r, a, s) {
          var l = k("marker", v(this));
          return null == t && (t = this.getBBox()), o(t, "object") && "x" in t && (e = t.y,
          n = t.width, r = t.height, a = t.refX || t.cx, s = t.refY || t.cy, t = t.x), i(l.node, {
            viewBox: [ t, e, n, r ].join(I),
            markerWidth: n,
            markerHeight: r,
            orient: "auto",
            refX: a || 0,
            refY: s || 0,
            id: l.id
          }), l.node.appendChild(this.node), l;
        };
        var d = function(t, e, r, i) {
          "function" != typeof r || r.length || (i = r, r = n.linear), this.attr = t, this.dur = e,
          r && (this.easing = r), i && (this.callback = i);
        };
        r._.Animation = d, r.animation = function(t, e, n, r) {
          return new d(t, e, n, r);
        }, t.inAnim = function() {
          var t = this, e = [];
          for (var n in t.anims) t.anims[A](n) && !function(t) {
            e.push({
              anim: new d(t._attrs, t.dur, t.easing, t._callback),
              mina: t,
              curStatus: t.status(),
              status: function(e) {
                return t.status(e);
              },
              stop: function() {
                t.stop();
              }
            });
          }(t.anims[n]);
          return e;
        }, r.animate = function(t, r, i, o, a, s) {
          "function" != typeof a || a.length || (s = a, a = n.linear);
          var l = n.time(), c = n(t, r, l, l + o, n.time, i, a);
          return s && e.once("mina.finish." + c.id, s), c;
        }, t.stop = function() {
          for (var t = this.inAnim(), e = 0, n = t.length; n > e; e++) t[e].stop();
          return this;
        }, t.animate = function(t, r, i, a) {
          "function" != typeof i || i.length || (a = i, i = n.linear), t instanceof d && (a = t.callback,
          i = t.easing, r = i.dur, t = t.attr);
          var l, c, u, h, f = [], p = [], g = {}, v = this;
          for (var m in t) if (t[A](m)) {
            v.equal ? (h = v.equal(m, _(t[m])), l = h.from, c = h.to, u = h.f) : (l = +v.attr(m),
            c = +t[m]);
            var y = o(l, "array") ? l.length : 1;
            g[m] = s(f.length, f.length + y, u), f = f.concat(l), p = p.concat(c);
          }
          var b = n.time(), w = n(f, p, b, b + r, n.time, function(t) {
            var e = {};
            for (var n in g) g[A](n) && (e[n] = g[n](t));
            v.attr(e);
          }, i);
          return v.anims[w.id] = w, w._attrs = t, w._callback = a, e("snap.animcreated." + v.id, w),
          e.once("mina.finish." + w.id, function() {
            delete v.anims[w.id], a && a.call(v);
          }), e.once("mina.stop." + w.id, function() {
            delete v.anims[w.id];
          }), v;
        };
        var h = {};
        t.data = function(t, n) {
          var i = h[this.id] = h[this.id] || {};
          if (0 == arguments.length) return e("snap.data.get." + this.id, this, i, null),
          i;
          if (1 == arguments.length) {
            if (r.is(t, "object")) {
              for (var o in t) t[A](o) && this.data(o, t[o]);
              return this;
            }
            return e("snap.data.get." + this.id, this, i[t], t), i[t];
          }
          return i[t] = n, e("snap.data.set." + this.id, this, n, t), this;
        }, t.removeData = function(t) {
          return null == t ? h[this.id] = {} : h[this.id] && delete h[this.id][t], this;
        }, t.outerSVG = t.toString = l(1), t.innerSVG = l();
      }(w.prototype), r.parse = function(t) {
        var e = E.doc.createDocumentFragment(), n = !0, r = E.doc.createElement("div");
        if (t = _(t), t.match(/^\s*<\s*svg(?:\s|>)/) || (t = "<svg>" + t + "</svg>", n = !1),
        r.innerHTML = t, t = r.getElementsByTagName("svg")[0]) if (n) e = t; else for (;t.firstChild; ) e.appendChild(t.firstChild);
        return r.innerHTML = V, new x(e);
      }, x.prototype.select = w.prototype.select, x.prototype.selectAll = w.prototype.selectAll,
      r.fragment = function() {
        for (var t = Array.prototype.slice.call(arguments, 0), e = E.doc.createDocumentFragment(), n = 0, i = t.length; i > n; n++) {
          var o = t[n];
          o.node && o.node.nodeType && e.appendChild(o.node), o.nodeType && e.appendChild(o),
          "string" == typeof o && e.appendChild(r.parse(o).node);
        }
        return new x(e);
      }, r._.make = k, r._.wrap = S, C.prototype.el = function(t, e) {
        var n = k(t, this.node);
        return e && n.attr(e), n;
      }, e.on("snap.util.getattr", function() {
        var t = e.nt();
        t = t.substring(t.lastIndexOf(".") + 1);
        var n = t.replace(/[A-Z]/g, function(t) {
          return "-" + t.toLowerCase();
        });
        return oe[A](n) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(n) : i(this.node, t);
      });
      var oe = {
        "alignment-baseline": 0,
        "baseline-shift": 0,
        clip: 0,
        "clip-path": 0,
        "clip-rule": 0,
        color: 0,
        "color-interpolation": 0,
        "color-interpolation-filters": 0,
        "color-profile": 0,
        "color-rendering": 0,
        cursor: 0,
        direction: 0,
        display: 0,
        "dominant-baseline": 0,
        "enable-background": 0,
        fill: 0,
        "fill-opacity": 0,
        "fill-rule": 0,
        filter: 0,
        "flood-color": 0,
        "flood-opacity": 0,
        font: 0,
        "font-family": 0,
        "font-size": 0,
        "font-size-adjust": 0,
        "font-stretch": 0,
        "font-style": 0,
        "font-variant": 0,
        "font-weight": 0,
        "glyph-orientation-horizontal": 0,
        "glyph-orientation-vertical": 0,
        "image-rendering": 0,
        kerning: 0,
        "letter-spacing": 0,
        "lighting-color": 0,
        marker: 0,
        "marker-end": 0,
        "marker-mid": 0,
        "marker-start": 0,
        mask: 0,
        opacity: 0,
        overflow: 0,
        "pointer-events": 0,
        "shape-rendering": 0,
        "stop-color": 0,
        "stop-opacity": 0,
        stroke: 0,
        "stroke-dasharray": 0,
        "stroke-dashoffset": 0,
        "stroke-linecap": 0,
        "stroke-linejoin": 0,
        "stroke-miterlimit": 0,
        "stroke-opacity": 0,
        "stroke-width": 0,
        "text-anchor": 0,
        "text-decoration": 0,
        "text-rendering": 0,
        "unicode-bidi": 0,
        visibility: 0,
        "word-spacing": 0,
        "writing-mode": 0
      };
      e.on("snap.util.attr", function(t) {
        var n = e.nt(), r = {};
        n = n.substring(n.lastIndexOf(".") + 1), r[n] = t;
        var o = n.replace(/-(\w)/gi, function(t, e) {
          return e.toUpperCase();
        }), a = n.replace(/[A-Z]/g, function(t) {
          return "-" + t.toLowerCase();
        });
        oe[A](a) ? this.node.style[o] = null == t ? V : t : i(this.node, r);
      }), function() {}(C.prototype), r.ajax = function(t, n, r, i) {
        var a = new XMLHttpRequest(), s = G();
        if (a) {
          if (o(n, "function")) i = r, r = n, n = null; else if (o(n, "object")) {
            var l = [];
            for (var c in n) n.hasOwnProperty(c) && l.push(encodeURIComponent(c) + "=" + encodeURIComponent(n[c]));
            n = l.join("&");
          }
          return a.open(n ? "POST" : "GET", t, !0), n && (a.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
          a.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), r && (e.once("snap.ajax." + s + ".0", r),
          e.once("snap.ajax." + s + ".200", r), e.once("snap.ajax." + s + ".304", r)), a.onreadystatechange = function() {
            4 == a.readyState && e("snap.ajax." + s + "." + a.status, i, a);
          }, 4 == a.readyState ? a : (a.send(n), a);
        }
      }, r.load = function(t, e, n) {
        r.ajax(t, function(t) {
          var i = r.parse(t.responseText);
          n ? e.call(n, i) : e(i);
        });
      };
      var ae = function(t) {
        var e = t.getBoundingClientRect(), n = t.ownerDocument, r = n.body, i = n.documentElement, o = i.clientTop || r.clientTop || 0, a = i.clientLeft || r.clientLeft || 0, s = e.top + (g.win.pageYOffset || i.scrollTop || r.scrollTop) - o, l = e.left + (g.win.pageXOffset || i.scrollLeft || r.scrollLeft) - a;
        return {
          y: s,
          x: l
        };
      };
      return r.getElementByPoint = function(t, e) {
        var n = this, r = (n.canvas, E.doc.elementFromPoint(t, e));
        if (E.win.opera && "svg" == r.tagName) {
          var i = ae(r), o = r.createSVGRect();
          o.x = t - i.x, o.y = e - i.y, o.width = o.height = 1;
          var a = r.getIntersectionList(o, null);
          a.length && (r = a[a.length - 1]);
        }
        return r ? S(r) : null;
      }, r.plugin = function(t) {
        t(r, w, C, E, x);
      }, E.win.Snap = r, r;
    }();
    return r.plugin(function(t) {
      function e(t, e, r, i, o, a) {
        return null == e && "[object SVGMatrix]" == n.call(t) ? (this.a = t.a, this.b = t.b,
        this.c = t.c, this.d = t.d, this.e = t.e, this.f = t.f, void 0) : (null != t ? (this.a = +t,
        this.b = +e, this.c = +r, this.d = +i, this.e = +o, this.f = +a) : (this.a = 1,
        this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0), void 0);
      }
      var n = Object.prototype.toString, r = String, i = Math, o = "";
      !function(n) {
        function a(t) {
          return t[0] * t[0] + t[1] * t[1];
        }
        function s(t) {
          var e = i.sqrt(a(t));
          t[0] && (t[0] /= e), t[1] && (t[1] /= e);
        }
        n.add = function(t, n, r, i, o, a) {
          var s, l, c, u, d = [ [], [], [] ], h = [ [ this.a, this.c, this.e ], [ this.b, this.d, this.f ], [ 0, 0, 1 ] ], f = [ [ t, r, o ], [ n, i, a ], [ 0, 0, 1 ] ];
          for (t && t instanceof e && (f = [ [ t.a, t.c, t.e ], [ t.b, t.d, t.f ], [ 0, 0, 1 ] ]),
          s = 0; 3 > s; s++) for (l = 0; 3 > l; l++) {
            for (u = 0, c = 0; 3 > c; c++) u += h[s][c] * f[c][l];
            d[s][l] = u;
          }
          return this.a = d[0][0], this.b = d[1][0], this.c = d[0][1], this.d = d[1][1], this.e = d[0][2],
          this.f = d[1][2], this;
        }, n.invert = function() {
          var t = this, n = t.a * t.d - t.b * t.c;
          return new e(t.d / n, -t.b / n, -t.c / n, t.a / n, (t.c * t.f - t.d * t.e) / n, (t.b * t.e - t.a * t.f) / n);
        }, n.clone = function() {
          return new e(this.a, this.b, this.c, this.d, this.e, this.f);
        }, n.translate = function(t, e) {
          return this.add(1, 0, 0, 1, t, e);
        }, n.scale = function(t, e, n, r) {
          return null == e && (e = t), (n || r) && this.add(1, 0, 0, 1, n, r), this.add(t, 0, 0, e, 0, 0),
          (n || r) && this.add(1, 0, 0, 1, -n, -r), this;
        }, n.rotate = function(e, n, r) {
          e = t.rad(e), n = n || 0, r = r || 0;
          var o = +i.cos(e).toFixed(9), a = +i.sin(e).toFixed(9);
          return this.add(o, a, -a, o, n, r), this.add(1, 0, 0, 1, -n, -r);
        }, n.x = function(t, e) {
          return t * this.a + e * this.c + this.e;
        }, n.y = function(t, e) {
          return t * this.b + e * this.d + this.f;
        }, n.get = function(t) {
          return +this[r.fromCharCode(97 + t)].toFixed(4);
        }, n.toString = function() {
          return "matrix(" + [ this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5) ].join() + ")";
        }, n.offset = function() {
          return [ this.e.toFixed(4), this.f.toFixed(4) ];
        }, n.determinant = function() {
          return this.a * this.d - this.b * this.c;
        }, n.split = function() {
          var e = {};
          e.dx = this.e, e.dy = this.f;
          var n = [ [ this.a, this.c ], [ this.b, this.d ] ];
          e.scalex = i.sqrt(a(n[0])), s(n[0]), e.shear = n[0][0] * n[1][0] + n[0][1] * n[1][1],
          n[1] = [ n[1][0] - n[0][0] * e.shear, n[1][1] - n[0][1] * e.shear ], e.scaley = i.sqrt(a(n[1])),
          s(n[1]), e.shear /= e.scaley, this.determinant() < 0 && (e.scalex = -e.scalex);
          var r = -n[0][1], o = n[1][1];
          return 0 > o ? (e.rotate = t.deg(i.acos(o)), 0 > r && (e.rotate = 360 - e.rotate)) : e.rotate = t.deg(i.asin(r)),
          e.isSimple = !(+e.shear.toFixed(9) || e.scalex.toFixed(9) != e.scaley.toFixed(9) && e.rotate),
          e.isSuperSimple = !+e.shear.toFixed(9) && e.scalex.toFixed(9) == e.scaley.toFixed(9) && !e.rotate,
          e.noRotation = !+e.shear.toFixed(9) && !e.rotate, e;
        }, n.toTransformString = function(t) {
          var e = t || this.split();
          return +e.shear.toFixed(9) ? "m" + [ this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5) ] : (e.scalex = +e.scalex.toFixed(4),
          e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [ +e.dx.toFixed(4), +e.dy.toFixed(4) ] : o) + (1 != e.scalex || 1 != e.scaley ? "s" + [ e.scalex, e.scaley, 0, 0 ] : o) + (e.rotate ? "r" + [ +e.rotate.toFixed(4), 0, 0 ] : o));
        };
      }(e.prototype), t.Matrix = e, t.matrix = function(t, n, r, i, o, a) {
        return new e(t, n, r, i, o, a);
      };
    }), r.plugin(function(t, n, r, i, o) {
      function a(r) {
        return function(i) {
          if (e.stop(), i instanceof o && 1 == i.node.childNodes.length && ("radialGradient" == i.node.firstChild.tagName || "linearGradient" == i.node.firstChild.tagName || "pattern" == i.node.firstChild.tagName) && (i = i.node.firstChild,
          f(this).appendChild(i), i = d(i)), i instanceof n) if ("radialGradient" == i.type || "linearGradient" == i.type || "pattern" == i.type) {
            i.node.id || g(i.node, {
              id: i.id
            });
            var a = v(i.node.id);
          } else a = i.attr(r); else if (a = t.color(i), a.error) {
            var s = t(f(this).ownerSVGElement).gradient(i);
            s ? (s.node.id || g(s.node, {
              id: s.id
            }), a = v(s.node.id)) : a = i;
          } else a = m(a);
          var l = {};
          l[r] = a, g(this.node, l), this.node.style[r] = b;
        };
      }
      function s(t) {
        e.stop(), t == +t && (t += "px"), this.node.style.fontSize = t;
      }
      function l(t) {
        for (var e = [], n = t.childNodes, r = 0, i = n.length; i > r; r++) {
          var o = n[r];
          3 == o.nodeType && e.push(o.nodeValue), "tspan" == o.tagName && (1 == o.childNodes.length && 3 == o.firstChild.nodeType ? e.push(o.firstChild.nodeValue) : e.push(l(o)));
        }
        return e;
      }
      function c() {
        return e.stop(), this.node.style.fontSize;
      }
      var u = t._.make, d = t._.wrap, h = t.is, f = t._.getSomeDefs, p = /^url\(#?([^)]+)\)$/, g = t._.$, v = t.url, m = String, y = t._.separator, b = "";
      e.on("snap.util.attr.mask", function(t) {
        if (t instanceof n || t instanceof o) {
          if (e.stop(), t instanceof o && 1 == t.node.childNodes.length && (t = t.node.firstChild,
          f(this).appendChild(t), t = d(t)), "mask" == t.type) var r = t; else r = u("mask", f(this)),
          r.node.appendChild(t.node);
          !r.node.id && g(r.node, {
            id: r.id
          }), g(this.node, {
            mask: v(r.id)
          });
        }
      }), function(t) {
        e.on("snap.util.attr.clip", t), e.on("snap.util.attr.clip-path", t), e.on("snap.util.attr.clipPath", t);
      }(function(t) {
        if (t instanceof n || t instanceof o) {
          if (e.stop(), "clipPath" == t.type) var r = t; else r = u("clipPath", f(this)),
          r.node.appendChild(t.node), !r.node.id && g(r.node, {
            id: r.id
          });
          g(this.node, {
            "clip-path": v(r.id)
          });
        }
      }), e.on("snap.util.attr.fill", a("fill")), e.on("snap.util.attr.stroke", a("stroke"));
      var w = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
      e.on("snap.util.grad.parse", function(t) {
        t = m(t);
        var e = t.match(w);
        if (!e) return null;
        var n = e[1], r = e[2], i = e[3];
        return r = r.split(/\s*,\s*/).map(function(t) {
          return +t == t ? +t : t;
        }), 1 == r.length && 0 == r[0] && (r = []), i = i.split("-"), i = i.map(function(t) {
          t = t.split(":");
          var e = {
            color: t[0]
          };
          return t[1] && (e.offset = parseFloat(t[1])), e;
        }), {
          type: n,
          params: r,
          stops: i
        };
      }), e.on("snap.util.attr.d", function(n) {
        e.stop(), h(n, "array") && h(n[0], "array") && (n = t.path.toString.call(n)), n = m(n),
        n.match(/[ruo]/i) && (n = t.path.toAbsolute(n)), g(this.node, {
          d: n
        });
      })(-1), e.on("snap.util.attr.#text", function(t) {
        e.stop(), t = m(t);
        for (var n = i.doc.createTextNode(t); this.node.firstChild; ) this.node.removeChild(this.node.firstChild);
        this.node.appendChild(n);
      })(-1), e.on("snap.util.attr.path", function(t) {
        e.stop(), this.attr({
          d: t
        });
      })(-1), e.on("snap.util.attr.class", function(t) {
        e.stop(), this.node.className.baseVal = t;
      })(-1), e.on("snap.util.attr.viewBox", function(t) {
        var n;
        n = h(t, "object") && "x" in t ? [ t.x, t.y, t.width, t.height ].join(" ") : h(t, "array") ? t.join(" ") : t,
        g(this.node, {
          viewBox: n
        }), e.stop();
      })(-1), e.on("snap.util.attr.transform", function(t) {
        this.transform(t), e.stop();
      })(-1), e.on("snap.util.attr.r", function(t) {
        "rect" == this.type && (e.stop(), g(this.node, {
          rx: t,
          ry: t
        }));
      })(-1), e.on("snap.util.attr.textpath", function(t) {
        if (e.stop(), "text" == this.type) {
          var r, i, o;
          if (!t && this.textPath) {
            for (i = this.textPath; i.node.firstChild; ) this.node.appendChild(i.node.firstChild);
            return i.remove(), delete this.textPath, void 0;
          }
          if (h(t, "string")) {
            var a = f(this), s = d(a.parentNode).path(t);
            a.appendChild(s.node), r = s.id, s.attr({
              id: r
            });
          } else t = d(t), t instanceof n && (r = t.attr("id"), r || (r = t.id, t.attr({
            id: r
          })));
          if (r) if (i = this.textPath, o = this.node, i) i.attr({
            "xlink:href": "#" + r
          }); else {
            for (i = g("textPath", {
              "xlink:href": "#" + r
            }); o.firstChild; ) i.appendChild(o.firstChild);
            o.appendChild(i), this.textPath = d(i);
          }
        }
      })(-1), e.on("snap.util.attr.text", function(t) {
        if ("text" == this.type) {
          for (var n = this.node, r = function(t) {
            var e = g("tspan");
            if (h(t, "array")) for (var n = 0; n < t.length; n++) e.appendChild(r(t[n])); else e.appendChild(i.doc.createTextNode(t));
            return e.normalize && e.normalize(), e;
          }; n.firstChild; ) n.removeChild(n.firstChild);
          for (var o = r(t); o.firstChild; ) n.appendChild(o.firstChild);
        }
        e.stop();
      })(-1), e.on("snap.util.attr.fontSize", s)(-1), e.on("snap.util.attr.font-size", s)(-1),
      e.on("snap.util.getattr.transform", function() {
        return e.stop(), this.transform();
      })(-1), e.on("snap.util.getattr.textpath", function() {
        return e.stop(), this.textPath;
      })(-1), function() {
        function n(n) {
          return function() {
            e.stop();
            var r = i.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + n);
            return "none" == r ? r : t(i.doc.getElementById(r.match(p)[1]));
          };
        }
        function r(t) {
          return function(n) {
            e.stop();
            var r = "marker" + t.charAt(0).toUpperCase() + t.substring(1);
            if ("" == n || !n) return this.node.style[r] = "none", void 0;
            if ("marker" == n.type) {
              var i = n.node.id;
              return i || g(n.node, {
                id: n.id
              }), this.node.style[r] = v(i), void 0;
            }
          };
        }
        e.on("snap.util.getattr.marker-end", n("end"))(-1), e.on("snap.util.getattr.markerEnd", n("end"))(-1),
        e.on("snap.util.getattr.marker-start", n("start"))(-1), e.on("snap.util.getattr.markerStart", n("start"))(-1),
        e.on("snap.util.getattr.marker-mid", n("mid"))(-1), e.on("snap.util.getattr.markerMid", n("mid"))(-1),
        e.on("snap.util.attr.marker-end", r("end"))(-1), e.on("snap.util.attr.markerEnd", r("end"))(-1),
        e.on("snap.util.attr.marker-start", r("start"))(-1), e.on("snap.util.attr.markerStart", r("start"))(-1),
        e.on("snap.util.attr.marker-mid", r("mid"))(-1), e.on("snap.util.attr.markerMid", r("mid"))(-1);
      }(), e.on("snap.util.getattr.r", function() {
        return "rect" == this.type && g(this.node, "rx") == g(this.node, "ry") ? (e.stop(),
        g(this.node, "rx")) : void 0;
      })(-1), e.on("snap.util.getattr.text", function() {
        if ("text" == this.type || "tspan" == this.type) {
          e.stop();
          var t = l(this.node);
          return 1 == t.length ? t[0] : t;
        }
      })(-1), e.on("snap.util.getattr.#text", function() {
        return this.node.textContent;
      })(-1), e.on("snap.util.getattr.viewBox", function() {
        e.stop();
        var n = g(this.node, "viewBox");
        return n ? (n = n.split(y), t._.box(+n[0], +n[1], +n[2], +n[3])) : void 0;
      })(-1), e.on("snap.util.getattr.points", function() {
        var t = g(this.node, "points");
        return e.stop(), t ? t.split(y) : void 0;
      })(-1), e.on("snap.util.getattr.path", function() {
        var t = g(this.node, "d");
        return e.stop(), t;
      })(-1), e.on("snap.util.getattr.class", function() {
        return this.node.className.baseVal;
      })(-1), e.on("snap.util.getattr.fontSize", c)(-1), e.on("snap.util.getattr.font-size", c)(-1);
    }), r.plugin(function() {
      function t(t) {
        return t;
      }
      function n(t) {
        return function(e) {
          return +e.toFixed(3) + t;
        };
      }
      var r = {
        "+": function(t, e) {
          return t + e;
        },
        "-": function(t, e) {
          return t - e;
        },
        "/": function(t, e) {
          return t / e;
        },
        "*": function(t, e) {
          return t * e;
        }
      }, i = String, o = /[a-z]+$/i, a = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
      e.on("snap.util.attr", function(t) {
        var n = i(t).match(a);
        if (n) {
          var s = e.nt(), l = s.substring(s.lastIndexOf(".") + 1), c = this.attr(l), u = {};
          e.stop();
          var d = n[3] || "", h = c.match(o), f = r[n[1]];
          if (h && h == d ? t = f(parseFloat(c), +n[2]) : (c = this.asPX(l), t = f(this.asPX(l), this.asPX(l, n[2] + d))),
          isNaN(c) || isNaN(t)) return;
          u[l] = t, this.attr(u);
        }
      })(-10), e.on("snap.util.equal", function(s, l) {
        var c = i(this.attr(s) || ""), u = i(l).match(a);
        if (u) {
          e.stop();
          var d = u[3] || "", h = c.match(o), f = r[u[1]];
          return h && h == d ? {
            from: parseFloat(c),
            to: f(parseFloat(c), +u[2]),
            f: n(h)
          } : (c = this.asPX(s), {
            from: c,
            to: f(c, this.asPX(s, u[2] + d)),
            f: t
          });
        }
      })(-10);
    }), r.plugin(function(t, n, r, i) {
      var o = r.prototype, a = t.is;
      o.rect = function(t, e, n, r, i, o) {
        var s;
        return null == o && (o = i), a(t, "object") && "[object Object]" == t ? s = t : null != t && (s = {
          x: t,
          y: e,
          width: n,
          height: r
        }, null != i && (s.rx = i, s.ry = o)), this.el("rect", s);
      }, o.circle = function(t, e, n) {
        var r;
        return a(t, "object") && "[object Object]" == t ? r = t : null != t && (r = {
          cx: t,
          cy: e,
          r: n
        }), this.el("circle", r);
      };
      var s = function() {
        function t() {
          this.parentNode.removeChild(this);
        }
        return function(e, n) {
          var r = i.doc.createElement("img"), o = i.doc.body;
          r.style.cssText = "position:absolute;left:-9999em;top:-9999em", r.onload = function() {
            n.call(r), r.onload = r.onerror = null, o.removeChild(r);
          }, r.onerror = t, o.appendChild(r), r.src = e;
        };
      }();
      o.image = function(e, n, r, i, o) {
        var l = this.el("image");
        if (a(e, "object") && "src" in e) l.attr(e); else if (null != e) {
          var c = {
            "xlink:href": e,
            preserveAspectRatio: "none"
          };
          null != n && null != r && (c.x = n, c.y = r), null != i && null != o ? (c.width = i,
          c.height = o) : s(e, function() {
            t._.$(l.node, {
              width: this.offsetWidth,
              height: this.offsetHeight
            });
          }), t._.$(l.node, c);
        }
        return l;
      }, o.ellipse = function(t, e, n, r) {
        var i;
        return a(t, "object") && "[object Object]" == t ? i = t : null != t && (i = {
          cx: t,
          cy: e,
          rx: n,
          ry: r
        }), this.el("ellipse", i);
      }, o.path = function(t) {
        var e;
        return a(t, "object") && !a(t, "array") ? e = t : t && (e = {
          d: t
        }), this.el("path", e);
      }, o.group = o.g = function(t) {
        var e = this.el("g");
        return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)),
        e;
      }, o.svg = function(t, e, n, r, i, o, s, l) {
        var c = {};
        return a(t, "object") && null == e ? c = t : (null != t && (c.x = t), null != e && (c.y = e),
        null != n && (c.width = n), null != r && (c.height = r), null != i && null != o && null != s && null != l && (c.viewBox = [ i, o, s, l ])),
        this.el("svg", c);
      }, o.mask = function(t) {
        var e = this.el("mask");
        return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)),
        e;
      }, o.ptrn = function(t, e, n, r, i, o, s, l) {
        if (a(t, "object")) var c = t; else arguments.length ? (c = {}, null != t && (c.x = t),
        null != e && (c.y = e), null != n && (c.width = n), null != r && (c.height = r),
        null != i && null != o && null != s && null != l && (c.viewBox = [ i, o, s, l ])) : c = {
          patternUnits: "userSpaceOnUse"
        };
        return this.el("pattern", c);
      }, o.use = function(t) {
        return null != t ? (make("use", this.node), t instanceof n && (t.attr("id") || t.attr({
          id: ID()
        }), t = t.attr("id")), this.el("use", {
          "xlink:href": t
        })) : n.prototype.use.call(this);
      }, o.text = function(t, e, n) {
        var r = {};
        return a(t, "object") ? r = t : null != t && (r = {
          x: t,
          y: e,
          text: n || ""
        }), this.el("text", r);
      }, o.line = function(t, e, n, r) {
        var i = {};
        return a(t, "object") ? i = t : null != t && (i = {
          x1: t,
          x2: n,
          y1: e,
          y2: r
        }), this.el("line", i);
      }, o.polyline = function(t) {
        arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
        var e = {};
        return a(t, "object") && !a(t, "array") ? e = t : null != t && (e = {
          points: t
        }), this.el("polyline", e);
      }, o.polygon = function(t) {
        arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
        var e = {};
        return a(t, "object") && !a(t, "array") ? e = t : null != t && (e = {
          points: t
        }), this.el("polygon", e);
      }, function() {
        function n() {
          return this.selectAll("stop");
        }
        function r(e, n) {
          var r = c("stop"), i = {
            offset: +n + "%"
          };
          return e = t.color(e), i["stop-color"] = e.hex, e.opacity < 1 && (i["stop-opacity"] = e.opacity),
          c(r, i), this.node.appendChild(r), this;
        }
        function i() {
          if ("linearGradient" == this.type) {
            var e = c(this.node, "x1") || 0, n = c(this.node, "x2") || 1, r = c(this.node, "y1") || 0, i = c(this.node, "y2") || 0;
            return t._.box(e, r, math.abs(n - e), math.abs(i - r));
          }
          var o = this.node.cx || .5, a = this.node.cy || .5, s = this.node.r || 0;
          return t._.box(o - s, a - s, 2 * s, 2 * s);
        }
        function a(t, n) {
          function r(t, e) {
            for (var n = (e - d) / (t - h), r = h; t > r; r++) a[r].offset = +(+d + n * (r - h)).toFixed(2);
            h = t, d = e;
          }
          var i, o = e("snap.util.grad.parse", null, n).firstDefined();
          if (!o) return null;
          o.params.unshift(t), i = "l" == o.type.toLowerCase() ? s.apply(0, o.params) : l.apply(0, o.params),
          o.type != o.type.toLowerCase() && c(i.node, {
            gradientUnits: "userSpaceOnUse"
          });
          var a = o.stops, u = a.length, d = 0, h = 0;
          u--;
          for (var f = 0; u > f; f++) "offset" in a[f] && r(f, a[f].offset);
          for (a[u].offset = a[u].offset || 100, r(u, a[u].offset), f = 0; u >= f; f++) {
            var p = a[f];
            i.addStop(p.color, p.offset);
          }
          return i;
        }
        function s(e, o, a, s, l) {
          var u = t._.make("linearGradient", e);
          return u.stops = n, u.addStop = r, u.getBBox = i, null != o && c(u.node, {
            x1: o,
            y1: a,
            x2: s,
            y2: l
          }), u;
        }
        function l(e, o, a, s, l, u) {
          var d = t._.make("radialGradient", e);
          return d.stops = n, d.addStop = r, d.getBBox = i, null != o && c(d.node, {
            cx: o,
            cy: a,
            r: s
          }), null != l && null != u && c(d.node, {
            fx: l,
            fy: u
          }), d;
        }
        var c = t._.$;
        o.gradient = function(t) {
          return a(this.defs, t);
        }, o.gradientLinear = function(t, e, n, r) {
          return s(this.defs, t, e, n, r);
        }, o.gradientRadial = function(t, e, n, r, i) {
          return l(this.defs, t, e, n, r, i);
        }, o.toString = function() {
          var e, n = this.node.ownerDocument, r = n.createDocumentFragment(), i = n.createElement("div"), o = this.node.cloneNode(!0);
          return r.appendChild(i), i.appendChild(o), t._.$(o, {
            xmlns: "http://www.w3.org/2000/svg"
          }), e = i.innerHTML, r.removeChild(r.firstChild), e;
        }, o.clear = function() {
          for (var t, e = this.node.firstChild; e; ) t = e.nextSibling, "defs" != e.tagName ? e.parentNode.removeChild(e) : o.clear.call({
            node: e
          }), e = t;
        };
      }();
    }), r.plugin(function(t, e) {
      function n(t) {
        var e = n.ps = n.ps || {};
        return e[t] ? e[t].sleep = 100 : e[t] = {
          sleep: 100
        }, setTimeout(function() {
          for (var n in e) e[I](n) && n != t && (e[n].sleep--, !e[n].sleep && delete e[n]);
        }), e[t];
      }
      function r(t, e, n, r) {
        return null == t && (t = e = n = r = 0), null == e && (e = t.y, n = t.width, r = t.height,
        t = t.x), {
          x: t,
          y: e,
          width: n,
          w: n,
          height: r,
          h: r,
          x2: t + n,
          y2: e + r,
          cx: t + n / 2,
          cy: e + r / 2,
          r1: H.min(n, r) / 2,
          r2: H.max(n, r) / 2,
          r0: H.sqrt(n * n + r * r) / 2,
          path: k(t, e, n, r),
          vb: [ t, e, n, r ].join(" ")
        };
      }
      function i() {
        return this.join(",").replace(N, "$1");
      }
      function o(t) {
        var e = V(t);
        return e.toString = i, e;
      }
      function a(t, e, n, r, i, o, a, s, c) {
        return null == c ? f(t, e, n, r, i, o, a, s) : l(t, e, n, r, i, o, a, s, p(t, e, n, r, i, o, a, s, c));
      }
      function s(n, r) {
        function i(t) {
          return +(+t).toFixed(3);
        }
        return t._.cacher(function(t, o, s) {
          t instanceof e && (t = t.attr("d")), t = T(t);
          for (var c, u, d, h, f, p = "", g = {}, v = 0, m = 0, y = t.length; y > m; m++) {
            if (d = t[m], "M" == d[0]) c = +d[1], u = +d[2]; else {
              if (h = a(c, u, d[1], d[2], d[3], d[4], d[5], d[6]), v + h > o) {
                if (r && !g.start) {
                  if (f = a(c, u, d[1], d[2], d[3], d[4], d[5], d[6], o - v), p += [ "C" + i(f.start.x), i(f.start.y), i(f.m.x), i(f.m.y), i(f.x), i(f.y) ],
                  s) return p;
                  g.start = p, p = [ "M" + i(f.x), i(f.y) + "C" + i(f.n.x), i(f.n.y), i(f.end.x), i(f.end.y), i(d[5]), i(d[6]) ].join(),
                  v += h, c = +d[5], u = +d[6];
                  continue;
                }
                if (!n && !r) return f = a(c, u, d[1], d[2], d[3], d[4], d[5], d[6], o - v);
              }
              v += h, c = +d[5], u = +d[6];
            }
            p += d.shift() + d;
          }
          return g.end = p, f = n ? v : r ? g : l(c, u, d[0], d[1], d[2], d[3], d[4], d[5], 1);
        }, null, t._.clone);
      }
      function l(t, e, n, r, i, o, a, s, l) {
        var c = 1 - l, u = z(c, 3), d = z(c, 2), h = l * l, f = h * l, p = u * t + 3 * d * l * n + 3 * c * l * l * i + f * a, g = u * e + 3 * d * l * r + 3 * c * l * l * o + f * s, v = t + 2 * l * (n - t) + h * (i - 2 * n + t), m = e + 2 * l * (r - e) + h * (o - 2 * r + e), y = n + 2 * l * (i - n) + h * (a - 2 * i + n), b = r + 2 * l * (o - r) + h * (s - 2 * o + r), w = c * t + l * n, x = c * e + l * r, k = c * i + l * a, C = c * o + l * s, S = 90 - 180 * H.atan2(v - y, m - b) / j;
        return {
          x: p,
          y: g,
          m: {
            x: v,
            y: m
          },
          n: {
            x: y,
            y: b
          },
          start: {
            x: w,
            y: x
          },
          end: {
            x: k,
            y: C
          },
          alpha: S
        };
      }
      function c(e, n, i, o, a, s, l, c) {
        t.is(e, "array") || (e = [ e, n, i, o, a, s, l, c ]);
        var u = M.apply(null, e);
        return r(u.min.x, u.min.y, u.max.x - u.min.x, u.max.y - u.min.y);
      }
      function u(t, e, n) {
        return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height;
      }
      function d(t, e) {
        return t = r(t), e = r(e), u(e, t.x, t.y) || u(e, t.x2, t.y) || u(e, t.x, t.y2) || u(e, t.x2, t.y2) || u(t, e.x, e.y) || u(t, e.x2, e.y) || u(t, e.x, e.y2) || u(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y);
      }
      function h(t, e, n, r, i) {
        var o = -3 * e + 9 * n - 9 * r + 3 * i, a = t * o + 6 * e - 12 * n + 6 * r;
        return t * a - 3 * e + 3 * n;
      }
      function f(t, e, n, r, i, o, a, s, l) {
        null == l && (l = 1), l = l > 1 ? 1 : 0 > l ? 0 : l;
        for (var c = l / 2, u = 12, d = [ -.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816 ], f = [ .2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472 ], p = 0, g = 0; u > g; g++) {
          var v = c * d[g] + c, m = h(v, t, n, i, a), y = h(v, e, r, o, s), b = m * m + y * y;
          p += f[g] * H.sqrt(b);
        }
        return c * p;
      }
      function p(t, e, n, r, i, o, a, s, l) {
        if (!(0 > l || f(t, e, n, r, i, o, a, s) < l)) {
          var c, u = 1, d = u / 2, h = u - d, p = .01;
          for (c = f(t, e, n, r, i, o, a, s, h); U(c - l) > p; ) d /= 2, h += (l > c ? 1 : -1) * d,
          c = f(t, e, n, r, i, o, a, s, h);
          return h;
        }
      }
      function g(t, e, n, r, i, o, a, s) {
        if (!(B(t, n) < O(i, a) || O(t, n) > B(i, a) || B(e, r) < O(o, s) || O(e, r) > B(o, s))) {
          var l = (t * r - e * n) * (i - a) - (t - n) * (i * s - o * a), c = (t * r - e * n) * (o - s) - (e - r) * (i * s - o * a), u = (t - n) * (o - s) - (e - r) * (i - a);
          if (u) {
            var d = l / u, h = c / u, f = +d.toFixed(2), p = +h.toFixed(2);
            if (!(f < +O(t, n).toFixed(2) || f > +B(t, n).toFixed(2) || f < +O(i, a).toFixed(2) || f > +B(i, a).toFixed(2) || p < +O(e, r).toFixed(2) || p > +B(e, r).toFixed(2) || p < +O(o, s).toFixed(2) || p > +B(o, s).toFixed(2))) return {
              x: d,
              y: h
            };
          }
        }
      }
      function v(t, e, n) {
        var r = c(t), i = c(e);
        if (!d(r, i)) return n ? 0 : [];
        for (var o = f.apply(0, t), a = f.apply(0, e), s = ~~(o / 8), u = ~~(a / 8), h = [], p = [], v = {}, m = n ? 0 : [], y = 0; s + 1 > y; y++) {
          var b = l.apply(0, t.concat(y / s));
          h.push({
            x: b.x,
            y: b.y,
            t: y / s
          });
        }
        for (y = 0; u + 1 > y; y++) b = l.apply(0, e.concat(y / u)), p.push({
          x: b.x,
          y: b.y,
          t: y / u
        });
        for (y = 0; s > y; y++) for (var w = 0; u > w; w++) {
          var x = h[y], k = h[y + 1], C = p[w], S = p[w + 1], E = U(k.x - x.x) < .001 ? "y" : "x", A = U(S.x - C.x) < .001 ? "y" : "x", _ = g(x.x, x.y, k.x, k.y, C.x, C.y, S.x, S.y);
          if (_) {
            if (v[_.x.toFixed(4)] == _.y.toFixed(4)) continue;
            v[_.x.toFixed(4)] = _.y.toFixed(4);
            var P = x.t + U((_[E] - x[E]) / (k[E] - x[E])) * (k.t - x.t), M = C.t + U((_[A] - C[A]) / (S[A] - C[A])) * (S.t - C.t);
            P >= 0 && 1 >= P && M >= 0 && 1 >= M && (n ? m++ : m.push({
              x: _.x,
              y: _.y,
              t1: P,
              t2: M
            }));
          }
        }
        return m;
      }
      function m(t, e) {
        return b(t, e);
      }
      function y(t, e) {
        return b(t, e, 1);
      }
      function b(t, e, n) {
        t = T(t), e = T(e);
        for (var r, i, o, a, s, l, c, u, d, h, f = n ? 0 : [], p = 0, g = t.length; g > p; p++) {
          var m = t[p];
          if ("M" == m[0]) r = s = m[1], i = l = m[2]; else {
            "C" == m[0] ? (d = [ r, i ].concat(m.slice(1)), r = d[6], i = d[7]) : (d = [ r, i, r, i, s, l, s, l ],
            r = s, i = l);
            for (var y = 0, b = e.length; b > y; y++) {
              var w = e[y];
              if ("M" == w[0]) o = c = w[1], a = u = w[2]; else {
                "C" == w[0] ? (h = [ o, a ].concat(w.slice(1)), o = h[6], a = h[7]) : (h = [ o, a, o, a, c, u, c, u ],
                o = c, a = u);
                var x = v(d, h, n);
                if (n) f += x; else {
                  for (var k = 0, C = x.length; C > k; k++) x[k].segment1 = p, x[k].segment2 = y,
                  x[k].bez1 = d, x[k].bez2 = h;
                  f = f.concat(x);
                }
              }
            }
          }
        }
        return f;
      }
      function w(t, e, n) {
        var r = x(t);
        return u(r, e, n) && 1 == b(t, [ [ "M", e, n ], [ "H", r.x2 + 10 ] ], 1) % 2;
      }
      function x(t) {
        var e = n(t);
        if (e.bbox) return V(e.bbox);
        if (!t) return r();
        t = T(t);
        for (var i, o = 0, a = 0, s = [], l = [], c = 0, u = t.length; u > c; c++) if (i = t[c],
        "M" == i[0]) o = i[1], a = i[2], s.push(o), l.push(a); else {
          var d = M(o, a, i[1], i[2], i[3], i[4], i[5], i[6]);
          s = s.concat(d.min.x, d.max.x), l = l.concat(d.min.y, d.max.y), o = i[5], a = i[6];
        }
        var h = O.apply(0, s), f = O.apply(0, l), p = B.apply(0, s), g = B.apply(0, l), v = r(h, f, p - h, g - f);
        return e.bbox = V(v), v;
      }
      function k(t, e, n, r, o) {
        if (o) return [ [ "M", +t + +o, e ], [ "l", n - 2 * o, 0 ], [ "a", o, o, 0, 0, 1, o, o ], [ "l", 0, r - 2 * o ], [ "a", o, o, 0, 0, 1, -o, o ], [ "l", 2 * o - n, 0 ], [ "a", o, o, 0, 0, 1, -o, -o ], [ "l", 0, 2 * o - r ], [ "a", o, o, 0, 0, 1, o, -o ], [ "z" ] ];
        var a = [ [ "M", t, e ], [ "l", n, 0 ], [ "l", 0, r ], [ "l", -n, 0 ], [ "z" ] ];
        return a.toString = i, a;
      }
      function C(t, e, n, r, o) {
        if (null == o && null == r && (r = n), t = +t, e = +e, n = +n, r = +r, null != o) var a = Math.PI / 180, s = t + n * Math.cos(-r * a), l = t + n * Math.cos(-o * a), c = e + n * Math.sin(-r * a), u = e + n * Math.sin(-o * a), d = [ [ "M", s, c ], [ "A", n, n, 0, +(o - r > 180), 0, l, u ] ]; else d = [ [ "M", t, e ], [ "m", 0, -r ], [ "a", n, r, 0, 1, 1, 0, 2 * r ], [ "a", n, r, 0, 1, 1, 0, -2 * r ], [ "z" ] ];
        return d.toString = i, d;
      }
      function S(e) {
        var r = n(e), a = String.prototype.toLowerCase;
        if (r.rel) return o(r.rel);
        t.is(e, "array") && t.is(e && e[0], "array") || (e = t.parsePathString(e));
        var s = [], l = 0, c = 0, u = 0, d = 0, h = 0;
        "M" == e[0][0] && (l = e[0][1], c = e[0][2], u = l, d = c, h++, s.push([ "M", l, c ]));
        for (var f = h, p = e.length; p > f; f++) {
          var g = s[f] = [], v = e[f];
          if (v[0] != a.call(v[0])) switch (g[0] = a.call(v[0]), g[0]) {
           case "a":
            g[1] = v[1], g[2] = v[2], g[3] = v[3], g[4] = v[4], g[5] = v[5], g[6] = +(v[6] - l).toFixed(3),
            g[7] = +(v[7] - c).toFixed(3);
            break;

           case "v":
            g[1] = +(v[1] - c).toFixed(3);
            break;

           case "m":
            u = v[1], d = v[2];

           default:
            for (var m = 1, y = v.length; y > m; m++) g[m] = +(v[m] - (m % 2 ? l : c)).toFixed(3);
          } else {
            g = s[f] = [], "m" == v[0] && (u = v[1] + l, d = v[2] + c);
            for (var b = 0, w = v.length; w > b; b++) s[f][b] = v[b];
          }
          var x = s[f].length;
          switch (s[f][0]) {
           case "z":
            l = u, c = d;
            break;

           case "h":
            l += +s[f][x - 1];
            break;

           case "v":
            c += +s[f][x - 1];
            break;

           default:
            l += +s[f][x - 2], c += +s[f][x - 1];
          }
        }
        return s.toString = i, r.rel = o(s), s;
      }
      function E(e) {
        var r = n(e);
        if (r.abs) return o(r.abs);
        if (R(e, "array") && R(e && e[0], "array") || (e = t.parsePathString(e)), !e || !e.length) return [ [ "M", 0, 0 ] ];
        var a, s = [], l = 0, c = 0, u = 0, d = 0, h = 0;
        "M" == e[0][0] && (l = +e[0][1], c = +e[0][2], u = l, d = c, h++, s[0] = [ "M", l, c ]);
        for (var f, p, g = 3 == e.length && "M" == e[0][0] && "R" == e[1][0].toUpperCase() && "Z" == e[2][0].toUpperCase(), v = h, m = e.length; m > v; v++) {
          if (s.push(f = []), p = e[v], a = p[0], a != a.toUpperCase()) switch (f[0] = a.toUpperCase(),
          f[0]) {
           case "A":
            f[1] = p[1], f[2] = p[2], f[3] = p[3], f[4] = p[4], f[5] = p[5], f[6] = +p[6] + l,
            f[7] = +p[7] + c;
            break;

           case "V":
            f[1] = +p[1] + c;
            break;

           case "H":
            f[1] = +p[1] + l;
            break;

           case "R":
            for (var y = [ l, c ].concat(p.slice(1)), b = 2, w = y.length; w > b; b++) y[b] = +y[b] + l,
            y[++b] = +y[b] + c;
            s.pop(), s = s.concat(F(y, g));
            break;

           case "O":
            s.pop(), y = C(l, c, p[1], p[2]), y.push(y[0]), s = s.concat(y);
            break;

           case "U":
            s.pop(), s = s.concat(C(l, c, p[1], p[2], p[3])), f = [ "U" ].concat(s[s.length - 1].slice(-2));
            break;

           case "M":
            u = +p[1] + l, d = +p[2] + c;

           default:
            for (b = 1, w = p.length; w > b; b++) f[b] = +p[b] + (b % 2 ? l : c);
          } else if ("R" == a) y = [ l, c ].concat(p.slice(1)), s.pop(), s = s.concat(F(y, g)),
          f = [ "R" ].concat(p.slice(-2)); else if ("O" == a) s.pop(), y = C(l, c, p[1], p[2]),
          y.push(y[0]), s = s.concat(y); else if ("U" == a) s.pop(), s = s.concat(C(l, c, p[1], p[2], p[3])),
          f = [ "U" ].concat(s[s.length - 1].slice(-2)); else for (var x = 0, k = p.length; k > x; x++) f[x] = p[x];
          if (a = a.toUpperCase(), "O" != a) switch (f[0]) {
           case "Z":
            l = +u, c = +d;
            break;

           case "H":
            l = f[1];
            break;

           case "V":
            c = f[1];
            break;

           case "M":
            u = f[f.length - 2], d = f[f.length - 1];

           default:
            l = f[f.length - 2], c = f[f.length - 1];
          }
        }
        return s.toString = i, r.abs = o(s), s;
      }
      function A(t, e, n, r) {
        return [ t, e, n, r, n, r ];
      }
      function _(t, e, n, r, i, o) {
        var a = 1 / 3, s = 2 / 3;
        return [ a * t + s * n, a * e + s * r, a * i + s * n, a * o + s * r, i, o ];
      }
      function P(e, n, r, i, o, a, s, l, c, u) {
        var d, h = 120 * j / 180, f = j / 180 * (+o || 0), p = [], g = t._.cacher(function(t, e, n) {
          var r = t * H.cos(n) - e * H.sin(n), i = t * H.sin(n) + e * H.cos(n);
          return {
            x: r,
            y: i
          };
        });
        if (u) S = u[0], E = u[1], k = u[2], C = u[3]; else {
          d = g(e, n, -f), e = d.x, n = d.y, d = g(l, c, -f), l = d.x, c = d.y;
          var v = (H.cos(j / 180 * o), H.sin(j / 180 * o), (e - l) / 2), m = (n - c) / 2, y = v * v / (r * r) + m * m / (i * i);
          y > 1 && (y = H.sqrt(y), r = y * r, i = y * i);
          var b = r * r, w = i * i, x = (a == s ? -1 : 1) * H.sqrt(U((b * w - b * m * m - w * v * v) / (b * m * m + w * v * v))), k = x * r * m / i + (e + l) / 2, C = x * -i * v / r + (n + c) / 2, S = H.asin(((n - C) / i).toFixed(9)), E = H.asin(((c - C) / i).toFixed(9));
          S = k > e ? j - S : S, E = k > l ? j - E : E, 0 > S && (S = 2 * j + S), 0 > E && (E = 2 * j + E),
          s && S > E && (S -= 2 * j), !s && E > S && (E -= 2 * j);
        }
        var A = E - S;
        if (U(A) > h) {
          var _ = E, M = l, T = c;
          E = S + h * (s && E > S ? 1 : -1), l = k + r * H.cos(E), c = C + i * H.sin(E), p = P(l, c, r, i, o, 0, s, M, T, [ E, _, k, C ]);
        }
        A = E - S;
        var L = H.cos(S), F = H.sin(S), q = H.cos(E), R = H.sin(E), V = H.tan(A / 4), I = 4 / 3 * r * V, N = 4 / 3 * i * V, D = [ e, n ], O = [ e + I * F, n - N * L ], B = [ l + I * R, c - N * q ], z = [ l, c ];
        if (O[0] = 2 * D[0] - O[0], O[1] = 2 * D[1] - O[1], u) return [ O, B, z ].concat(p);
        p = [ O, B, z ].concat(p).join().split(",");
        for (var $ = [], W = 0, G = p.length; G > W; W++) $[W] = W % 2 ? g(p[W - 1], p[W], f).y : g(p[W], p[W + 1], f).x;
        return $;
      }
      function M(t, e, n, r, i, o, a, s) {
        for (var l, c, u, d, h, f, p, g, v = [], m = [ [], [] ], y = 0; 2 > y; ++y) if (0 == y ? (c = 6 * t - 12 * n + 6 * i,
        l = -3 * t + 9 * n - 9 * i + 3 * a, u = 3 * n - 3 * t) : (c = 6 * e - 12 * r + 6 * o,
        l = -3 * e + 9 * r - 9 * o + 3 * s, u = 3 * r - 3 * e), U(l) < 1e-12) {
          if (U(c) < 1e-12) continue;
          d = -u / c, d > 0 && 1 > d && v.push(d);
        } else p = c * c - 4 * u * l, g = H.sqrt(p), 0 > p || (h = (-c + g) / (2 * l), h > 0 && 1 > h && v.push(h),
        f = (-c - g) / (2 * l), f > 0 && 1 > f && v.push(f));
        for (var b, w = v.length, x = w; w--; ) d = v[w], b = 1 - d, m[0][w] = b * b * b * t + 3 * b * b * d * n + 3 * b * d * d * i + d * d * d * a,
        m[1][w] = b * b * b * e + 3 * b * b * d * r + 3 * b * d * d * o + d * d * d * s;
        return m[0][x] = t, m[1][x] = e, m[0][x + 1] = a, m[1][x + 1] = s, m[0].length = m[1].length = x + 2,
        {
          min: {
            x: O.apply(0, m[0]),
            y: O.apply(0, m[1])
          },
          max: {
            x: B.apply(0, m[0]),
            y: B.apply(0, m[1])
          }
        };
      }
      function T(t, e) {
        var r = !e && n(t);
        if (!e && r.curve) return o(r.curve);
        for (var i = E(t), a = e && E(e), s = {
          x: 0,
          y: 0,
          bx: 0,
          by: 0,
          X: 0,
          Y: 0,
          qx: null,
          qy: null
        }, l = {
          x: 0,
          y: 0,
          bx: 0,
          by: 0,
          X: 0,
          Y: 0,
          qx: null,
          qy: null
        }, c = (function(t, e, n) {
          var r, i;
          if (!t) return [ "C", e.x, e.y, e.x, e.y, e.x, e.y ];
          switch (!(t[0] in {
            T: 1,
            Q: 1
          }) && (e.qx = e.qy = null), t[0]) {
           case "M":
            e.X = t[1], e.Y = t[2];
            break;

           case "A":
            t = [ "C" ].concat(P.apply(0, [ e.x, e.y ].concat(t.slice(1))));
            break;

           case "S":
            "C" == n || "S" == n ? (r = 2 * e.x - e.bx, i = 2 * e.y - e.by) : (r = e.x, i = e.y),
            t = [ "C", r, i ].concat(t.slice(1));
            break;

           case "T":
            "Q" == n || "T" == n ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x,
            e.qy = e.y), t = [ "C" ].concat(_(e.x, e.y, e.qx, e.qy, t[1], t[2]));
            break;

           case "Q":
            e.qx = t[1], e.qy = t[2], t = [ "C" ].concat(_(e.x, e.y, t[1], t[2], t[3], t[4]));
            break;

           case "L":
            t = [ "C" ].concat(A(e.x, e.y, t[1], t[2]));
            break;

           case "H":
            t = [ "C" ].concat(A(e.x, e.y, t[1], e.y));
            break;

           case "V":
            t = [ "C" ].concat(A(e.x, e.y, e.x, t[1]));
            break;

           case "Z":
            t = [ "C" ].concat(A(e.x, e.y, e.X, e.Y));
          }
          return t;
        }), u = function(t, e) {
          if (t[e].length > 7) {
            t[e].shift();
            for (var n = t[e]; n.length; ) h[e] = "A", a && (f[e] = "A"), t.splice(e++, 0, [ "C" ].concat(n.splice(0, 6)));
            t.splice(e, 1), m = B(i.length, a && a.length || 0);
          }
        }, d = function(t, e, n, r, o) {
          t && e && "M" == t[o][0] && "M" != e[o][0] && (e.splice(o, 0, [ "M", r.x, r.y ]),
          n.bx = 0, n.by = 0, n.x = t[o][1], n.y = t[o][2], m = B(i.length, a && a.length || 0));
        }, h = [], f = [], p = "", g = "", v = 0, m = B(i.length, a && a.length || 0); m > v; v++) {
          i[v] && (p = i[v][0]), "C" != p && (h[v] = p, v && (g = h[v - 1])), i[v] = c(i[v], s, g),
          "A" != h[v] && "C" == p && (h[v] = "C"), u(i, v), a && (a[v] && (p = a[v][0]), "C" != p && (f[v] = p,
          v && (g = f[v - 1])), a[v] = c(a[v], l, g), "A" != f[v] && "C" == p && (f[v] = "C"),
          u(a, v)), d(i, a, s, l, v), d(a, i, l, s, v);
          var y = i[v], b = a && a[v], w = y.length, x = a && b.length;
          s.x = y[w - 2], s.y = y[w - 1], s.bx = D(y[w - 4]) || s.x, s.by = D(y[w - 3]) || s.y,
          l.bx = a && (D(b[x - 4]) || l.x), l.by = a && (D(b[x - 3]) || l.y), l.x = a && b[x - 2],
          l.y = a && b[x - 1];
        }
        return a || (r.curve = o(i)), a ? [ i, a ] : i;
      }
      function L(t, e) {
        if (!e) return t;
        var n, r, i, o, a, s, l;
        for (t = T(t), i = 0, a = t.length; a > i; i++) for (l = t[i], o = 1, s = l.length; s > o; o += 2) n = e.x(l[o], l[o + 1]),
        r = e.y(l[o], l[o + 1]), l[o] = n, l[o + 1] = r;
        return t;
      }
      function F(t, e) {
        for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
          var o = [ {
            x: +t[r - 2],
            y: +t[r - 1]
          }, {
            x: +t[r],
            y: +t[r + 1]
          }, {
            x: +t[r + 2],
            y: +t[r + 3]
          }, {
            x: +t[r + 4],
            y: +t[r + 5]
          } ];
          e ? r ? i - 4 == r ? o[3] = {
            x: +t[0],
            y: +t[1]
          } : i - 2 == r && (o[2] = {
            x: +t[0],
            y: +t[1]
          }, o[3] = {
            x: +t[2],
            y: +t[3]
          }) : o[0] = {
            x: +t[i - 2],
            y: +t[i - 1]
          } : i - 4 == r ? o[3] = o[2] : r || (o[0] = {
            x: +t[r],
            y: +t[r + 1]
          }), n.push([ "C", (-o[0].x + 6 * o[1].x + o[2].x) / 6, (-o[0].y + 6 * o[1].y + o[2].y) / 6, (o[1].x + 6 * o[2].x - o[3].x) / 6, (o[1].y + 6 * o[2].y - o[3].y) / 6, o[2].x, o[2].y ]);
        }
        return n;
      }
      var q = e.prototype, R = t.is, V = t._.clone, I = "hasOwnProperty", N = /,?([a-z]),?/gi, D = parseFloat, H = Math, j = H.PI, O = H.min, B = H.max, z = H.pow, U = H.abs, $ = s(1), W = s(), G = s(0, 1), X = t._unit2px, Y = {
        path: function(t) {
          return t.attr("path");
        },
        circle: function(t) {
          var e = X(t);
          return C(e.cx, e.cy, e.r);
        },
        ellipse: function(t) {
          var e = X(t);
          return C(e.cx || 0, e.cy || 0, e.rx, e.ry);
        },
        rect: function(t) {
          var e = X(t);
          return k(e.x || 0, e.y || 0, e.width, e.height, e.rx, e.ry);
        },
        image: function(t) {
          var e = X(t);
          return k(e.x || 0, e.y || 0, e.width, e.height);
        },
        line: function(t) {
          return "M" + [ t.attr("x1") || 0, t.attr("y1") || 0, t.attr("x2"), t.attr("y2") ];
        },
        polyline: function(t) {
          return "M" + t.attr("points");
        },
        polygon: function(t) {
          return "M" + t.attr("points") + "z";
        },
        deflt: function(t) {
          var e = t.node.getBBox();
          return k(e.x, e.y, e.width, e.height);
        }
      };
      t.path = n, t.path.getTotalLength = $, t.path.getPointAtLength = W, t.path.getSubpath = function(t, e, n) {
        if (this.getTotalLength(t) - n < 1e-6) return G(t, e).end;
        var r = G(t, n, 1);
        return e ? G(r, e).end : r;
      }, q.getTotalLength = function() {
        return this.node.getTotalLength ? this.node.getTotalLength() : void 0;
      }, q.getPointAtLength = function(t) {
        return W(this.attr("d"), t);
      }, q.getSubpath = function(e, n) {
        return t.path.getSubpath(this.attr("d"), e, n);
      }, t._.box = r, t.path.findDotsAtSegment = l, t.path.bezierBBox = c, t.path.isPointInsideBBox = u,
      t.path.isBBoxIntersect = d, t.path.intersection = m, t.path.intersectionNumber = y,
      t.path.isPointInside = w, t.path.getBBox = x, t.path.get = Y, t.path.toRelative = S,
      t.path.toAbsolute = E, t.path.toCubic = T, t.path.map = L, t.path.toString = i,
      t.path.clone = o;
    }), r.plugin(function(t) {
      var r = Math.max, i = Math.min, o = function(t) {
        if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", t) for (var e = 0, n = t.length; n > e; e++) t[e] && (this[this.items.length] = this.items[this.items.length] = t[e],
        this.length++);
      }, a = o.prototype;
      a.push = function() {
        for (var t, e, n = 0, r = arguments.length; r > n; n++) t = arguments[n], t && (e = this.items.length,
        this[e] = this.items[e] = t, this.length++);
        return this;
      }, a.pop = function() {
        return this.length && delete this[this.length--], this.items.pop();
      }, a.forEach = function(t, e) {
        for (var n = 0, r = this.items.length; r > n; n++) if (t.call(e, this.items[n], n) === !1) return this;
        return this;
      }, a.animate = function(r, i, o, a) {
        "function" != typeof o || o.length || (a = o, o = n.linear), r instanceof t._.Animation && (a = r.callback,
        o = r.easing, i = o.dur, r = r.attr);
        var s = arguments;
        if (t.is(r, "array") && t.is(s[s.length - 1], "array")) var l = !0;
        var c, u = function() {
          c ? this.b = c : c = this.b;
        }, d = 0, h = a && function() {
          d++ == this.length && a.call(this);
        };
        return this.forEach(function(t, n) {
          e.once("snap.animcreated." + t.id, u), l ? s[n] && t.animate.apply(t, s[n]) : t.animate(r, i, o, h);
        });
      }, a.remove = function() {
        for (;this.length; ) this.pop().remove();
        return this;
      }, a.bind = function(t, e, n) {
        var r = {};
        if ("function" == typeof e) this.bindings[t] = e; else {
          var i = n || t;
          this.bindings[t] = function(t) {
            r[i] = t, e.attr(r);
          };
        }
        return this;
      }, a.attr = function(t) {
        var e = {};
        for (var n in t) this.bindings[n] ? this.bindings[n](t[n]) : e[n] = t[n];
        for (var r = 0, i = this.items.length; i > r; r++) this.items[r].attr(e);
        return this;
      }, a.clear = function() {
        for (;this.length; ) this.pop();
      }, a.splice = function(t, e) {
        t = 0 > t ? r(this.length + t, 0) : t, e = r(0, i(this.length - t, e));
        var n, a = [], s = [], l = [];
        for (n = 2; n < arguments.length; n++) l.push(arguments[n]);
        for (n = 0; e > n; n++) s.push(this[t + n]);
        for (;n < this.length - t; n++) a.push(this[t + n]);
        var c = l.length;
        for (n = 0; n < c + a.length; n++) this.items[t + n] = this[t + n] = c > n ? l[n] : a[n - c];
        for (n = this.items.length = this.length -= e - c; this[n]; ) delete this[n++];
        return new o(s);
      }, a.exclude = function(t) {
        for (var e = 0, n = this.length; n > e; e++) if (this[e] == t) return this.splice(e, 1),
        !0;
        return !1;
      }, a.insertAfter = function(t) {
        for (var e = this.items.length; e--; ) this.items[e].insertAfter(t);
        return this;
      }, a.getBBox = function() {
        for (var t = [], e = [], n = [], o = [], a = this.items.length; a--; ) if (!this.items[a].removed) {
          var s = this.items[a].getBBox();
          t.push(s.x), e.push(s.y), n.push(s.x + s.width), o.push(s.y + s.height);
        }
        return t = i.apply(0, t), e = i.apply(0, e), n = r.apply(0, n), o = r.apply(0, o),
        {
          x: t,
          y: e,
          x2: n,
          y2: o,
          width: n - t,
          height: o - e,
          cx: t + (n - t) / 2,
          cy: e + (o - e) / 2
        };
      }, a.clone = function(t) {
        t = new o();
        for (var e = 0, n = this.items.length; n > e; e++) t.push(this.items[e].clone());
        return t;
      }, a.toString = function() {
        return "Snap‘s set";
      }, a.type = "set", t.set = function() {
        var t = new o();
        return arguments.length && t.push.apply(t, Array.prototype.slice.call(arguments, 0)),
        t;
      };
    }), r.plugin(function(t, n) {
      function r(t) {
        var e = t[0];
        switch (e.toLowerCase()) {
         case "t":
          return [ e, 0, 0 ];

         case "m":
          return [ e, 1, 0, 0, 1, 0, 0 ];

         case "r":
          return 4 == t.length ? [ e, 0, t[2], t[3] ] : [ e, 0 ];

         case "s":
          return 5 == t.length ? [ e, 1, 1, t[3], t[4] ] : 3 == t.length ? [ e, 1, 1 ] : [ e, 1 ];
        }
      }
      function i(e, n, i) {
        n = h(n).replace(/\.{3}|\u2026/g, e), e = t.parseTransformString(e) || [], n = t.parseTransformString(n) || [];
        for (var o, a, s, u, d = Math.max(e.length, n.length), f = [], p = [], g = 0; d > g; g++) {
          if (s = e[g] || r(n[g]), u = n[g] || r(s), s[0] != u[0] || "r" == s[0].toLowerCase() && (s[2] != u[2] || s[3] != u[3]) || "s" == s[0].toLowerCase() && (s[3] != u[3] || s[4] != u[4])) {
            e = t._.transform2matrix(e, i()), n = t._.transform2matrix(n, i()), f = [ [ "m", e.a, e.b, e.c, e.d, e.e, e.f ] ],
            p = [ [ "m", n.a, n.b, n.c, n.d, n.e, n.f ] ];
            break;
          }
          for (f[g] = [], p[g] = [], o = 0, a = Math.max(s.length, u.length); a > o; o++) o in s && (f[g][o] = s[o]),
          o in u && (p[g][o] = u[o]);
        }
        return {
          from: c(f),
          to: c(p),
          f: l(f)
        };
      }
      function o(t) {
        return t;
      }
      function a(t) {
        return function(e) {
          return +e.toFixed(3) + t;
        };
      }
      function s(e) {
        return t.rgb(e[0], e[1], e[2]);
      }
      function l(t) {
        var e, n, r, i, o, a, s = 0, l = [];
        for (e = 0, n = t.length; n > e; e++) {
          for (o = "[", a = [ '"' + t[e][0] + '"' ], r = 1, i = t[e].length; i > r; r++) a[r] = "val[" + s++ + "]";
          o += a + "]", l[e] = o;
        }
        return Function("val", "return Snap.path.toString.call([" + l + "])");
      }
      function c(t) {
        for (var e = [], n = 0, r = t.length; r > n; n++) for (var i = 1, o = t[n].length; o > i; i++) e.push(t[n][i]);
        return e;
      }
      var u = {}, d = /[a-z]+$/i, h = String;
      u.stroke = u.fill = "colour", n.prototype.equal = function(t, n) {
        return e("snap.util.equal", this, t, n).firstDefined();
      }, e.on("snap.util.equal", function(e, n) {
        var r, f, p = h(this.attr(e) || ""), g = this;
        if (p == +p && n == +n) return {
          from: +p,
          to: +n,
          f: o
        };
        if ("colour" == u[e]) return r = t.color(p), f = t.color(n), {
          from: [ r.r, r.g, r.b, r.opacity ],
          to: [ f.r, f.g, f.b, f.opacity ],
          f: s
        };
        if ("transform" == e || "gradientTransform" == e || "patternTransform" == e) return n instanceof t.Matrix && (n = n.toTransformString()),
        t._.rgTransform.test(n) || (n = t._.svgTransform2string(n)), i(p, n, function() {
          return g.getBBox(1);
        });
        if ("d" == e || "path" == e) return r = t.path.toCubic(p, n), {
          from: c(r[0]),
          to: c(r[1]),
          f: l(r[0])
        };
        if ("points" == e) return r = h(p).split(t._.separator), f = h(n).split(t._.separator),
        {
          from: r,
          to: f,
          f: function(t) {
            return t;
          }
        };
        aUnit = p.match(d);
        var v = h(n).match(d);
        return aUnit && aUnit == v ? {
          from: parseFloat(p),
          to: parseFloat(n),
          f: a(aUnit)
        } : {
          from: this.asPX(e),
          to: this.asPX(e, n),
          f: o
        };
      });
    }), r.plugin(function(t, n, r, i) {
      for (var o = n.prototype, a = "hasOwnProperty", s = ("createTouch" in i.doc), l = [ "click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel" ], c = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
      }, u = (function(t, e) {
        var n = "y" == t ? "scrollTop" : "scrollLeft", r = e && e.node ? e.node.ownerDocument : i.doc;
        return r[n in r.documentElement ? "documentElement" : "body"][n];
      }), d = function() {
        this.returnValue = !1;
      }, h = function() {
        return this.originalEvent.preventDefault();
      }, f = function() {
        this.cancelBubble = !0;
      }, p = function() {
        return this.originalEvent.stopPropagation();
      }, g = function() {
        return i.doc.addEventListener ? function(t, e, n, r) {
          var i = s && c[e] ? c[e] : e, o = function(i) {
            var o = u("y", r), l = u("x", r);
            if (s && c[a](e)) for (var d = 0, f = i.targetTouches && i.targetTouches.length; f > d; d++) if (i.targetTouches[d].target == t || t.contains(i.targetTouches[d].target)) {
              var g = i;
              i = i.targetTouches[d], i.originalEvent = g, i.preventDefault = h, i.stopPropagation = p;
              break;
            }
            var v = i.clientX + l, m = i.clientY + o;
            return n.call(r, i, v, m);
          };
          return e !== i && t.addEventListener(e, o, !1), t.addEventListener(i, o, !1), function() {
            return e !== i && t.removeEventListener(e, o, !1), t.removeEventListener(i, o, !1),
            !0;
          };
        } : i.doc.attachEvent ? function(t, e, n, r) {
          var i = function(t) {
            t = t || r.node.ownerDocument.window.event;
            var e = u("y", r), i = u("x", r), o = t.clientX + i, a = t.clientY + e;
            return t.preventDefault = t.preventDefault || d, t.stopPropagation = t.stopPropagation || f,
            n.call(r, t, o, a);
          };
          t.attachEvent("on" + e, i);
          var o = function() {
            return t.detachEvent("on" + e, i), !0;
          };
          return o;
        } : void 0;
      }(), v = [], m = function(t) {
        for (var n, r = t.clientX, i = t.clientY, o = u("y"), a = u("x"), l = v.length; l--; ) {
          if (n = v[l], s) {
            for (var c, d = t.touches && t.touches.length; d--; ) if (c = t.touches[d], c.identifier == n.el._drag.id || n.el.node.contains(c.target)) {
              r = c.clientX, i = c.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
              break;
            }
          } else t.preventDefault();
          var h = n.el.node;
          h.nextSibling, h.parentNode, h.style.display, r += a, i += o, e("snap.drag.move." + n.el.id, n.move_scope || n.el, r - n.el._drag.x, i - n.el._drag.y, r, i, t);
        }
      }, y = function(n) {
        t.unmousemove(m).unmouseup(y);
        for (var r, i = v.length; i--; ) r = v[i], r.el._drag = {}, e("snap.drag.end." + r.el.id, r.end_scope || r.start_scope || r.move_scope || r.el, n);
        v = [];
      }, b = l.length; b--; ) !function(e) {
        t[e] = o[e] = function(n, r) {
          return t.is(n, "function") && (this.events = this.events || [], this.events.push({
            name: e,
            f: n,
            unbind: g(this.node || document, e, n, r || this)
          })), this;
        }, t["un" + e] = o["un" + e] = function(t) {
          for (var n = this.events || [], r = n.length; r--; ) if (n[r].name == e && (n[r].f == t || !t)) return n[r].unbind(),
          n.splice(r, 1), !n.length && delete this.events, this;
          return this;
        };
      }(l[b]);
      o.hover = function(t, e, n, r) {
        return this.mouseover(t, n).mouseout(e, r || n);
      }, o.unhover = function(t, e) {
        return this.unmouseover(t).unmouseout(e);
      };
      var w = [];
      o.drag = function(n, r, i, o, a, s) {
        function l(l, c, u) {
          (l.originalEvent || l).preventDefault(), this._drag.x = c, this._drag.y = u, this._drag.id = l.identifier,
          !v.length && t.mousemove(m).mouseup(y), v.push({
            el: this,
            move_scope: o,
            start_scope: a,
            end_scope: s
          }), r && e.on("snap.drag.start." + this.id, r), n && e.on("snap.drag.move." + this.id, n),
          i && e.on("snap.drag.end." + this.id, i), e("snap.drag.start." + this.id, a || o || this, c, u, l);
        }
        if (!arguments.length) {
          var c;
          return this.drag(function(t, e) {
            this.attr({
              transform: c + (c ? "T" : "t") + [ t, e ]
            });
          }, function() {
            c = this.transform().local;
          });
        }
        return this._drag = {}, w.push({
          el: this,
          start: l
        }), this.mousedown(l), this;
      }, o.undrag = function() {
        for (var n = w.length; n--; ) w[n].el == this && (this.unmousedown(w[n].start),
        w.splice(n, 1), e.unbind("snap.drag.*." + this.id));
        return !w.length && t.unmousemove(m).unmouseup(y), this;
      };
    }), r.plugin(function(t, n, r) {
      var i = (n.prototype, r.prototype), o = /^\s*url\((.+)\)/, a = String, s = t._.$;
      t.filter = {}, i.filter = function(e) {
        var r = this;
        "svg" != r.type && (r = r.paper);
        var i = t.parse(a(e)), o = t._.id(), l = (r.node.offsetWidth, r.node.offsetHeight,
        s("filter"));
        return s(l, {
          id: o,
          filterUnits: "userSpaceOnUse"
        }), l.appendChild(i.node), r.defs.appendChild(l), new n(l);
      }, e.on("snap.util.getattr.filter", function() {
        e.stop();
        var n = s(this.node, "filter");
        if (n) {
          var r = a(n).match(o);
          return r && t.select(r[1]);
        }
      }), e.on("snap.util.attr.filter", function(r) {
        if (r instanceof n && "filter" == r.type) {
          e.stop();
          var i = r.node.id;
          i || (s(r.node, {
            id: r.id
          }), i = r.id), s(this.node, {
            filter: t.url(i)
          });
        }
        r && "none" != r || (e.stop(), this.node.removeAttribute("filter"));
      }), t.filter.blur = function(e, n) {
        null == e && (e = 2);
        var r = null == n ? e : [ e, n ];
        return t.format('<feGaussianBlur stdDeviation="{def}"/>', {
          def: r
        });
      }, t.filter.blur.toString = function() {
        return this();
      }, t.filter.shadow = function(e, n, r, i, o) {
        return "string" == typeof r && (i = r, o = i, r = 4), "string" != typeof i && (o = i,
        i = "#000"), i = i || "#000", null == r && (r = 4), null == o && (o = 1), null == e && (e = 0,
        n = 2), null == n && (n = e), i = t.color(i), t.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
          color: i,
          dx: e,
          dy: n,
          blur: r,
          opacity: o
        });
      }, t.filter.shadow.toString = function() {
        return this();
      }, t.filter.grayscale = function(e) {
        return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
          a: .2126 + .7874 * (1 - e),
          b: .7152 - .7152 * (1 - e),
          c: .0722 - .0722 * (1 - e),
          d: .2126 - .2126 * (1 - e),
          e: .7152 + .2848 * (1 - e),
          f: .0722 - .0722 * (1 - e),
          g: .2126 - .2126 * (1 - e),
          h: .0722 + .9278 * (1 - e)
        });
      }, t.filter.grayscale.toString = function() {
        return this();
      }, t.filter.sepia = function(e) {
        return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
          a: .393 + .607 * (1 - e),
          b: .769 - .769 * (1 - e),
          c: .189 - .189 * (1 - e),
          d: .349 - .349 * (1 - e),
          e: .686 + .314 * (1 - e),
          f: .168 - .168 * (1 - e),
          g: .272 - .272 * (1 - e),
          h: .534 - .534 * (1 - e),
          i: .131 + .869 * (1 - e)
        });
      }, t.filter.sepia.toString = function() {
        return this();
      }, t.filter.saturate = function(e) {
        return null == e && (e = 1), t.format('<feColorMatrix type="saturate" values="{amount}"/>', {
          amount: 1 - e
        });
      }, t.filter.saturate.toString = function() {
        return this();
      }, t.filter.hueRotate = function(e) {
        return e = e || 0, t.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
          angle: e
        });
      }, t.filter.hueRotate.toString = function() {
        return this();
      }, t.filter.invert = function(e) {
        return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
          amount: e,
          amount2: 1 - e
        });
      }, t.filter.invert.toString = function() {
        return this();
      }, t.filter.brightness = function(e) {
        return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
          amount: e
        });
      }, t.filter.brightness.toString = function() {
        return this();
      }, t.filter.contrast = function(e) {
        return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
          amount: e,
          amount2: .5 - e / 2
        });
      }, t.filter.contrast.toString = function() {
        return this();
      };
    }), r;
  }), t("presentations/processors/video.annotations", [ "require", "jquery", "_", "modernizr", "snap-svg" ], function(t) {
    "use strict";
    var n = t("jquery"), r = t("_"), i = t("modernizr"), o = t("snap-svg"), a = {
      textAnnotation: "hp-annotation-text",
      spotShadow: "hp-annotation-spot-shadow",
      spotShadowMove: "spot-shadow-move",
      progressMarker: "hp-annotation-marker",
      inkSvg: "hp-annotation-ink-svg",
      inkOutline: "hp-annotation-ink-outline",
      inkMain: "hp-annotation-ink-main",
      tall: "hp-tall",
      wide: "hp-wide"
    }, s = {
      1: "circle",
      20: "circle",
      30: "circle",
      40: "circle",
      50: "arrow",
      60: "arrow",
      65: "circle",
      101: "circle"
    }, l = {
      circle: n('<svg version="1.1" viewBox="0 792 721 721"> <path class="spot-shadow-circle-stroke" fill="#FFFFFF" d="M360.5,1439c-76.5,0-148.5-29.8-202.6-83.9C103.8,1301,74,1229,74,1152.5s29.8-148.5,83.9-202.6C212,895.8,284,866,360.5,866s148.5,29.8,202.6,83.9S647,1076,647,1152.5s-29.8,148.5-83.9,202.6 S437,1439,360.5,1439z M360.5,876c-73.9,0-143.3,28.8-195.5,81c-52.2,52.2-81,121.7-81,195.5s28.8,143.3,81,195.5 c52.2,52.2,121.7,81,195.5,81c73.9,0,143.3-28.8,195.5-81c52.2-52.2,81-121.7,81-195.5s-28.8-143.3-81-195.5 C503.8,904.7,434.4,876,360.5,876z"/> <circle class="spot-shadow-circle" cx="360.5" cy="1152.5" r="281.5"/> </svg>'),
      arrow: n('<svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg"> <path class="spot-shadow-arrow" d="M46,50 L18,50 L18,42 L36.3431458,42 L0.251262658,5.90811691 L5.90811691,0.251262658 L42,36.3431458 L42,18 L50,18 L50,50 L46,50 Z"></path> </svg>')
    }, c = function() {
      function t() {
        ee.clearAnnotations(), P(), le = !1;
      }
      function c() {
        le = !0, ee.clearAnnotations();
      }
      function u() {
        Y.on("play", function() {
          ee.clearAnnotations(), re && (f(), g(), re = !1), v();
        }), Y.on("srcChanged", h), Y.on("loadedmetadata", g), Y.on("seek", d), Y.on("hudl.presentation.video.resetAnnotations", t),
        Y.on("hudl.presentation.video.rateChangePlayback", c);
      }
      function d() {
        ee.clearAnnotations(), P();
      }
      function h() {
        P(), p();
        var t = r.findWhere(G, {
          order: Y.data("cai")
        }), e = t ? t.annotations : {};
        X = e, E();
      }
      function f(t) {
        if (ie && J) {
          var n;
          if (n = t !== e ? arguments : X, p(), isNaN(Y[0].duration)) Y.one("durationchange", function() {
            f();
          }); else for (var r = 0; r < n.length; r++) {
            var i = n[r];
            J.append(B(i));
          }
        }
      }
      function p() {
        re = !0, ee.clearAnnotations(), J.find("." + a.progressMarker).remove();
      }
      function g() {
        if (Y) {
          var t = Q.width(), e = Q.height();
          if (ae !== t || se !== e) {
            var n = Y[0].videoHeight, r = Y[0].videoWidth;
            if (0 !== n && 0 !== r) {
              ae = t, se = e;
              var o = e / n, s = t / r;
              if (o > s) {
                var l = s * n;
                te.removeClass(a.wide).addClass(a.tall).width("100%").height(l), i.flexbox === !1 && te.css("top", (e - l) / 2);
              } else {
                var c = o * r;
                te.removeClass(a.tall).addClass(a.wide).height("100%").width(c), i.flexbox === !1 && te.css("top", 0);
              }
            }
          }
        }
      }
      function v() {
        ie && X && (m(Y[0].currentTime), Y[0].paused || window.requestAnimationFrame(v));
      }
      function m(t) {
        for (var e = X.length, n = e - 1; n >= 0; n--) {
          var r = X[n], i = r.timeMs / 1e3, o = L(r, "played"), a = Y[0];
          if (y(r, t) && !a.seeking && !le && a.playbackRate === a.defaultPlaybackRate) {
            if (o) break;
            var s = !K.getEndFlagPosition || !K.getStartFlagPosition, l = K.getStartFlagPosition() || 0, c = K.getEndFlagPosition();
            if (s || c >= i && i >= l) {
              b(r);
              break;
            }
          }
        }
      }
      function y(t, e) {
        if (0 === e) return !1;
        var n = Math.max(t.timeMs, .1), r = parseFloat((n / 1e3).toFixed(6));
        return e >= r - .09 && r + .09 >= e;
      }
      function b(t) {
        Y[0].pause(), Y[0].currentTime = t.timeMs / 1e3, ee.displayAnnotationsAtTime(t.timeMs);
      }
      function w() {
        oe = !0, x();
      }
      function x() {
        oe && (window.requestAnimationFrame(x), g());
      }
      function k() {
        var t = S();
        t.each(function() {
          var t = n(this), e = t.css("stroke-dashoffset");
          t.animate({
            "stroke-dashoffset": "0"
          }, parseFloat(e));
        });
      }
      function C() {
        var t = S();
        t.each(function() {
          var t = n(this);
          t.css("stroke-dashoffset", "0");
        });
      }
      function S() {
        return te.find("path." + a.inkMain + ", path." + a.inkOutline);
      }
      function E() {
        for (var t = 0; t < X.length; t++) _(X[t]);
      }
      function A(t) {
        var e = q(t.textAnnotations), n = I(t.spotShadows), r = O(t.strokeData);
        return [].concat(r, e, n);
      }
      function _(t) {
        if (t && t.annotationId) {
          var e = A(t);
          M(t, "elements", e);
        }
      }
      function P() {
        for (var t in ne) ne[t].played = !1;
      }
      function M(t, r, i) {
        var o = T(t);
        t.annotationId === e && ne[o] === e && n.when(t.deferred).done(function() {
          F(o, t.annotationId);
        });
        var a = ne[o] || {};
        a[r] = i, ne[o] = a;
      }
      function T(t) {
        return t.annotationId === e ? t.deferred : t.annotationId;
      }
      function L(t, e) {
        var n = ne[t.annotationId || t.deferred] || {};
        return n[e];
      }
      function F(t, e) {
        ne[e] = ne[t], delete ne[t];
      }
      function q(t) {
        for (var e = [], n = 0; n < t.length; n++) {
          var r = t[n];
          r.text && e.push(R(r));
        }
        return e;
      }
      function R(t) {
        return {
          el: V(t),
          ref: t,
          type: "textAnnotation"
        };
      }
      function V(t) {
        var e = n('<span class="hp-annotation-text-content"></span>');
        e.text(t.text);
        var r = n("<div></div>").addClass(a.textAnnotation).width(100 * (t.width / 600) + "%").css("left", 100 * (t.x / 600) + "%").css("top", 100 * (t.y / 335) + "%").append(e);
        return r;
      }
      function I(t) {
        for (var e = [], n = 0; n < t.length; n++) {
          var r = t[n];
          e.push(N(r));
        }
        return e;
      }
      function N(t) {
        return {
          el: D(t),
          ref: t,
          type: "spotShadow"
        };
      }
      function D(t) {
        var e = 100 * t.xPercent, n = 100 * t.yPercent, r = 12 * t.scale, i = H(t.style).attr("class", a.spotShadow).css("left", e + "%").css("top", n + "%").width(r + "%").css("height", null);
        return i;
      }
      function H(t) {
        var e = s[t];
        return l[e].clone();
      }
      function j() {
        var t = new o();
        return t.attr({
          viewBox: "0 0 600 335",
          preserveAspectRatio: "none",
          width: "100%",
          height: "100%",
          "class": a.inkSvg
        }), t;
      }
      function O(t) {
        if (0 === t.length || 1 === t.length && 0 === t[0].length) return [];
        for (var e = j(), r = 0; r < t.length; r++) {
          var i = t[r];
          i.points.length < 1 || $(i.points, e, !0);
        }
        var o = n(e.node);
        return e.remove(), [ {
          el: o,
          ref: null,
          type: "telestration"
        } ];
      }
      function B(t) {
        if (Y) {
          var e = t.timeMs / 1e3 / Y[0].duration, r = n('<div><svg version="1.1" baseProfile="basic" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 612 792" xml:space="preserve"><path d="M126.7,82.3h14c1.4,0.2,2.9,0.5,4.3,0.7c3.8,0.7,7.9,1.6,9.7,5.4c1.8,3.6,0.9,7.2-1.4,10.8c-5.9,10.8-15.5,18.2-25,25.7c-14.6,11.3-29.7,21.6-44.6,32.6c-4.1,2.9-7.7,6.3-11.5,9.5c4.3,0,8.1-0.7,12.2-1.1c12.6-2,25.2-3.8,37.6-5.9c11.7-2,23.2-4.1,34.9-6.1c14.2-2.5,28.4-5,42.5-7.4c12.8-2.3,25.9-4.5,38.9-6.5c11.5-1.8,23-3.6,34.4-5c12.6-1.6,25-3.4,37.6-4.1c14.9-0.9,29.9-0.7,44.8-0.9c1.4,0,2.7-0.2,4.3-0.2c8.3-0.9,16.4-0.9,24.3,1.8c13.1,4.3,23.2,12.8,29.3,25.2c7.9,16.4,7.4,33.3,0.2,50c-6.3,14-15.8,25.7-26.1,36.9c-16.9,17.8-36,32.9-56.3,46.6c-37.6,25.9-75.9,50.9-113.9,76.3c-9.9,6.5-19.6,13.3-29.5,19.8c1.1,0.2,1.6,0.2,2.3,0c20.9-9.2,41.9-18.5,62.8-27.5c43.9-19.4,88.5-37.1,134.1-51.5c41.2-13.1,82.8-24.3,126-27.5c14.2-1.1,28.4-1.8,42.8-1.4c17.1,0.5,30.6,9,40.5,23c8.1,11.3,11,23.9,9.9,37.6c-0.7,8.1-2.7,15.5-6.8,22.7c-7,12.4-17.1,22.1-27.9,30.8c-15.1,12.6-30.6,24.8-45.9,37.1c-14.4,11.5-29.3,23-43.7,34.2c-12.6,9.9-25.2,19.6-37.6,29.7c-11.9,9.7-23.9,19.6-35.3,29.7c-10.8,9.5-21.6,18.9-32,28.6c-8.6,8.1-17.1,16.7-25.2,25.2c-9,9.2-17.6,18.9-26.3,28.6c-3.4,3.6-6.3,7.7-9.9,11.9c4.7-0.7,8.6-1.1,12.6-1.6c10.1-1.4,20.5-2.7,30.6-3.8c8.8-0.9,17.6-1.8,26.1-2.9c10.8-1.4,21.6-2.7,32.4-4.1c9.2-1.1,18.5-1.8,27.7-2.9c9.7-1.1,19.4-2.5,28.8-3.4c8.3-0.9,16.9-1.6,25.2-2.3c10.1-0.9,20-2,30.2-2.7c8.8-0.7,17.8-0.7,26.6-0.9c8.3-0.5,16.2,0.5,22.7,6.3c2,1.8,4.3,3.2,6.3,5c10.8,9,22.3,17.3,27.9,30.8v5.6c-1.8,2.3-3.4,4.7-5.6,6.5c-5.6,4.5-10.1,9.9-16.9,13.1c-15.1,6.8-30.8,10.8-47,13.3c-8.6,1.4-17.1,2.5-25.7,3.6c-10.8,1.6-21.4,3.2-32.2,4.7c-11,1.6-22.1,2.7-32.9,4.3c-12.8,1.8-25.7,3.8-38.7,5.6c-13.3,1.8-26.6,3.2-39.8,5c-15.3,2-30.4,4.3-45.5,6.3c-13.5,1.8-27.2,3.4-40.7,5c-2.9,0.5-5.9,0.9-8.8,1.4h-18.9c-3.2-0.5-6.3-1.1-9.2-1.6c-4.5-0.7-9-0.9-13.3-2c-16-4.5-27.2-14.4-33.5-29.9c-3.2-7.7-5-15.8-4.5-23.9c0.5-12.4,5-23.6,11.3-34.2c12.2-20.9,25.9-40.7,41.9-59c12.2-14.2,24.8-28.1,38-41.4c11.7-12.2,24.3-23.4,36.7-34.9c9.7-8.8,19.6-17.6,29.7-25.9c12.2-10.1,24.5-19.8,36.9-29.5c22.5-17.3,45.2-34.7,67.7-52c3.6-2.7,7.2-5.6,11.5-8.8c-1.8,0-2.7-0.2-3.4,0c-14.2,3.4-28.4,6.1-42.3,9.9c-43,11.7-84.9,26.8-126.3,43.4c-29,11.7-57.8,24.1-86.9,36c-17.3,7.2-34.7,14.4-52,21.4c-19.8,7.7-38.3,15.3-56.9,22.5c-17.6,6.8-35.8,8.3-54,2.7c-19.5-6-28-24.3-22-42.5c2.9-8.6,7.7-16.9,12.4-24.8c9-14.6,20-27.9,32.2-40.1c7.9-7.9,16-15.8,24.3-23c9-7.9,18-15.8,27.9-22.5c23.4-15.8,47.5-30.8,71.4-46.1c33.8-21.6,67.7-42.5,101.1-64.4c19.1-12.6,38-25.9,53.1-43.7c2.5-2.7,4.7-5.9,7.4-9.5c-2-0.2-2.7-0.2-3.6-0.2c-18.9,0.2-37.8,0.2-56.7,0.7c-8.3,0.2-16.7,1.1-25,2.3c-10.4,1.1-20.7,2.7-31.1,4.1c-9.2,1.1-18.2,2.3-27.5,3.6c-10.4,1.8-20.9,3.6-31.5,5c-10.4,1.6-20.7,2.9-31.3,4.5c-9.5,1.4-18.7,2.7-28.1,4.1c-9.9,1.4-19.8,2.5-29.5,3.6c-9.5,0.9-19.1,2.3-28.6,2.5c-11.7,0.5-23.4,0-35.1-0.7c-5.2-0.2-10.6-0.9-15.8-2c-6.3-1.6-11.3-5.2-13.3-11.9c-0.5-1.6-1.1-3.2-1.8-4.7v-8.3c2.3-5,4.1-9.9,6.8-14.6c11.3-18.5,27-32.9,44.1-45.9c12.2-9,24.5-18,36.9-26.8c9.2-6.8,18.7-13.3,29.9-16.4C120.6,83.5,123.8,83,126.7,82.3"/></svg></div>').addClass(a.progressMarker).css("left", 100 * e + "%");
          return r.mousedown(function(e) {
            1 === e.which && (e.stopPropagation(), ee.clearAnnotations(), b(t));
          }), r;
        }
      }
      function z(t) {
        var n = L(t, "elements");
        n === e && (_(t), n = L(t, "elements"));
        for (var r = 0; r < n.length; r++) U(n[r], t);
      }
      function U(t) {
        var e = t.el.clone();
        "telestration" === t.type ? e.prependTo(te) : e.appendTo(te);
      }
      function $(t, n, r) {
        r === e && (r = !0);
        var i = W(t), o = n.path(i), s = n.path(i), l = s.getTotalLength();
        if (o.attr({
          "class": a.inkOutline
        }), s.attr({
          "class": a.inkMain
        }), r) {
          var c = {
            strokeDasharray: l,
            strokeDashoffset: l
          };
          o.attr(c), s.attr(c);
        }
        return [ s, o ];
      }
      function W(t) {
        for (var e = "M" + t[0].x + "," + t[0].y + " ", n = 1; n < t.length; n++) {
          var r = t[n];
          e += "L" + r.x + "," + r.y + " ";
        }
        return e;
      }
      var G, X, Y, K, J, Z, Q, te, ee = this, ne = {}, re = !0, ie = !0, oe = !1, ae = null, se = null, le = !1;
      this.load = function(t, e, r) {
        Y = t, K = r, J = r.getProgressContainer(), G = e, Z = t.parent();
        var i = Z.parent().children(".presentation-video-controls-container").first().height(), o = Z.parent().height() - i;
        Q = n("<div></div>").addClass("presentation-annotation-wrap").height(o), te = n("<div></div>").addClass("presentation-annotation-container"),
        Q.append(te), Z.append(Q), h(), X && X.length && Z.addClass("presentation-video-has-annotations"),
        u();
      }, this.clearAnnotations = function() {
        te.empty();
      }, this.displayAnnotationsAtTime = function(t, n) {
        n === e && (n = !0);
        for (var r = !1, i = 0; i < X.length; i++) {
          var o = X[i];
          o.timeMs.toFixed(3) === t.toFixed(3) && (r || (w(), r = !0), z(o), M(o, "played", !0));
        }
        r && (n ? k() : C());
      };
    };
    return c;
  }), t("presentations/processors/video.progress", [ "require", "jquery", "requestAnimationFrame" ], function(t) {
    "use strict";
    var n = t("jquery");
    t("requestAnimationFrame");
    var r = function() {
      function t(t) {
        var n;
        n = t.pageX === e ? t.originalEvent.touches[0].pageX : t.pageX;
        var r = g.find(v.progressContainer).offset().left, i = f();
        n -= r;
        var o = g.find(v.progressContainer).width(), a = o * i, l = u(), d = Math.min(n / a * l, l - .1);
        s(d), g.updateProgress(c(), l);
      }
      function r(t, e) {
        t.bind("touchstart", e), t.mousedown(e);
      }
      function i(t) {
        var e = Math.floor(t / 60), n = Math.round(t - 60 * e);
        return (10 > e ? "0" + e : e) + ":" + (10 > n ? "0" + n : n);
      }
      function o(t) {
        return t + "." + g.pluginId;
      }
      function a() {
        return g.parent && g.parent.length ? g.parent[0] : (console.log("self.parent is not properly set"),
        e);
      }
      function s(t) {
        isNaN(t) || (a().currentTime = t);
      }
      function l() {
        var t = g.getStartFlagPosition(), e = g.getEndFlagPosition();
        if (!isNaN(t) && !isNaN(e)) {
          var r = n(a()), i = r.data("angles"), o = r.data("cai"), s = i[o];
          s.startFlagPosition = t, s.endFlagPosition = e;
        }
      }
      function c() {
        return a().currentTime;
      }
      function u() {
        return a().duration;
      }
      function d() {
        a().pause();
      }
      function h() {
        a().play();
      }
      function f() {
        var t = n(".slides")[0], e = t.getBoundingClientRect().width / t.offsetWidth;
        return e;
      }
      function p(t) {
        var e = g.find(v.progressContainer).offset().left, n = f();
        t -= e;
        var r = g.find(v.progressContainer).width(), i = r * n;
        return g.totalDuration * Math.max(0, Math.min(1, t / i));
      }
      var g = this, v = {
        videoContainer: ".presentation-video-container",
        timePosition: ".hp-time-position",
        timeDuration: ".hp-time-duration",
        progressInner: ".progress-bar-inner",
        progressContainer: ".hp-progress-bar-container",
        progressCompleted: ".hp-progress-bar-completed",
        progressStart: ".hp-progress-bar-trim-start",
        progressEnd: ".hp-progress-bar-trim-end",
        bufferCompleted: ".hp-progress-bar-loaded",
        bufferIndicator: ".hp-buffering-indicator"
      };
      this.flagSeparation = .5, this.key = "progress", this.parent = null, this.parentContainer = null,
      this.stayPaused = !1, this.load = function(t) {
        g.parent = t, g.parentContainer = g.parent.parents(v.videoContainer), g.pluginId = t[0].id,
        r(g.getProgressContainer(), g.startSeeking), r(g.find(v.progressStart), g.startDraggingFlagStart),
        r(g.find(v.progressEnd), g.startDraggingFlagEnd), g.parent.parent().on("touchstart", function(t) {
          t.preventDefault();
        }), g.parent.on("progress", g.onBufferChange), g.parent.on("loadstart", g.onBuffer),
        g.parent.on("durationchange", g.onBufferComplete), g.parent.on("play", g.onPlay),
        g.parent.on("pause", g.onPause);
      }, this.find = function(t) {
        return g.parentContainer.find(t);
      }, this.getProgressContainer = function() {
        return g.find(v.progressContainer);
      }, this.restrictSeekBounds = function(t) {
        t > g.getEndFlagPosition() && t < g.getEndFlagPosition() + .2 && !g.scrubbing && g.hasMovedEndFlag && g.parent.trigger("ended");
      }, this.playProgress = function() {
        g.parent.paused || window.requestAnimationFrame(g.playProgress), g.updateProgress(c(), u());
      }, this.onPlay = function() {
        window.requestAnimationFrame(g.playProgress);
      }, this.startSeeking = function(e) {
        e.preventDefault(), g.scrubbing = !0, g.playAfterSeeking = !a().paused, d(), t(e);
        var r = n(document);
        r.on(o("touchmove"), t), r.on(o("mousemove"), t), r.one(o("touchend"), function() {
          r.off(o("touchmove")), g.seeking = !1, g.playAfterSeeking && h();
        }), r.one(o("mouseup"), function() {
          r.off(o("mousemove")), g.scrubbing = !1, g.playAfterSeeking && h();
        }), g.parent.trigger("seek");
      }, this.calculateBarWidth = function(t, e) {
        return 100 * Math.min(1, t / e);
      }, this.updateProgress = function(t, e) {
        g.restrictSeekBounds(t);
        var n = g.calculateBarWidth(t, e);
        n += "%", g.find(v.progressCompleted).width(n), e >= t && g.find(v.timePosition).text(i(t));
      }, this.resetBars = function() {
        g.find(v.progressCompleted).width(0), g.find(v.bufferCompleted).width(0), g.resetFlags();
      }, this.appendToProgressBar = function(t) {
        g.find(v.progressInner).append(t);
      }, this.clearProgressMarkers = function(t) {
        g.find(v.progressInner).find(t).remove();
      }, this.onBufferChange = function(t) {
        g.find(v.bufferCompleted).width(t.bufferPercent + "%");
      }, this.onBuffer = function() {
        g.find(v.timePosition).text("00:00"), g.find(v.timeDuration).text(" / 00:00"), null === g.bufferDisplayHandle && (g.bufferDisplayHandle = setTimeout(function() {
          g.find(v.bufferIndicator).addClass("hp-active");
        }, g.bufferingDisplayDelayMs));
      }, this.onBufferComplete = function() {
        var t = !1;
        (null === g.totalDuration || isNaN(g.totalDuration)) && (g.totalDuration = u(),
        t = !0), (null === g.endFlagPos || isNaN(g.endFlagPos)) && (g.endFlagPos = u(),
        t = !0), t && g.updateFlagMarkers(), g.bufferDisplayHandle && (g.find(v.bufferIndicator).removeClass("hp-active"),
        clearTimeout(g.bufferDisplayHandle), g.bufferDisplayHandle = null), g.find(v.timeDuration).text(" / " + i(u()));
      }, this.updateFlagMarkers = function() {
        g.find(v.progressEnd).width(100 - g.getEndFlagPercent() + "%"), g.find(v.progressStart).width(g.getStartFlagPercent() + "%");
      }, this.setFlagPositions = function(t, e) {
        g.endFlagPos = e, g.startFlagPos = t, g.startFlagPos + g.flagSeparation > g.endFlagPos && (g.endFlagPos = g.startFlagPos + g.flagSeparation),
        g.startFlagPos + g.flagSeparation > g.endFlagPos && (g.startFlagPos = g.endFlagPos - g.flagSeparation),
        g.hasMovedEndFlag = !0;
      }, this.setEndFlagPosition = function(t) {
        g.endFlagPos = t, g.startFlagPos + g.flagSeparation > g.endFlagPos && (g.endFlagPos = g.startFlagPos + g.flagSeparation),
        g.hasMovedEndFlag = !0;
      }, this.setStartFlagPosition = function(t) {
        g.startFlagPos = t, g.startFlagPos + g.flagSeparation > g.endFlagPos && (g.startFlagPos = g.endFlagPos - g.flagSeparation);
      }, this.getEndFlagPosition = function() {
        return g.endFlagPos;
      }, this.getStartFlagPosition = function() {
        return Math.max(0, g.startFlagPos);
      }, this.resetFlags = function() {
        g.setFlagPositions(0, g.totalDuration), g.updateFlagMarkers(), g.hasMovedEndFlag = !1;
      }, this.startDraggingFlagEnd = function(t) {
        var e = n(document);
        t.stopPropagation(), t.preventDefault(), e.on(o("touchmove"), g.dragEndFlag), e.one(o("touchend"), function() {
          e.off(o("touchmove")), l();
        }), e.on(o("mousemove"), g.dragEndFlag), e.one(o("mouseup"), function() {
          e.off(o("mousemove")), l();
        }), g.parent.trigger("seek");
      }, this.startDraggingFlagStart = function(t) {
        var e = n(document);
        t.stopPropagation(), t.preventDefault(), e.on(o("touchmove"), g.dragStartFlag),
        e.one(o("touchend"), function() {
          e.off(o("touchmove")), l();
        }), e.on(o("mousemove"), g.dragStartFlag), e.one(o("mouseup"), function() {
          e.off(o("mousemove")), l();
        }), g.parent.trigger("seek");
      }, this.setTotalDuration = function(t) {
        this.totalDuration = t;
      }, this.getEndFlagPercent = function() {
        return 100 * (g.getEndFlagPosition() / g.totalDuration);
      }, this.getStartFlagPercent = function() {
        return 100 * (g.getStartFlagPosition() / g.totalDuration);
      }, this.dragEndFlag = function(t) {
        d();
        var n;
        n = t.pageX === e ? t.originalEvent.touches[0].pageX : t.pageX;
        var r = p(n);
        g.setEndFlagPosition(r), g.updateFlagMarkers();
      }, this.dragStartFlag = function(t) {
        d();
        var n;
        n = t.pageX === e ? t.originalEvent.touches[0].pageX : t.pageX;
        var r = p(n);
        g.setStartFlagPosition(r), s(r), g.updateFlagMarkers();
      }, this.setStartFlagAtMarker = function() {
        g.setStartFlagPosition(c()), g.updateFlagMarkers();
      };
    };
    return r;
  }), t("presentations/processors/video", [ "require", "requestAnimationFrame", "jquery", "_", "./shared", "./video.annotations", "./video.progress" ], function(t) {
    "use strict";
    t("requestAnimationFrame");
    var e = t("jquery"), n = t("_"), r = t("./shared"), i = t("./video.annotations"), o = t("./video.progress"), a = {
      isHidden: "is-hidden",
      presentationVideoContainer: "presentation-video-container",
      presentationVideoContainerInner: "presentation-video-container-inner",
      presentationControlsAngle: "presentation-control-angle",
      presentationControlDisabled: "video-controls-disabled"
    }, s = {
      src: "src",
      currentAngleIndex: "cai",
      path: "path"
    }, l = "hudl.presentation.video.", c = 0, u = {
      processSlide: function(t, e) {
        if (t && e) {
          var r = this;
          n.each(t.video, function(t) {
            var n = r.processVideo(t);
            e.append(n);
          });
        }
      },
      processVideo: function(t) {
        var n = e("<div></div>").addClass("presentation-video-container"), s = e("<div></div>").addClass("presentation-video-container-inner"), l = e(".presentation-overlay-logomark").first().clone().removeClass(a.isHidden), d = e(".presentation-overlay-play").first().clone().removeClass(a.isHidden), h = e(".presentation-video-controls-container").first().clone().removeClass(a.isHidden).height(50), f = e('<video id="videoid-' + c + '"></video>').addClass("presentation-video");
        t.thumbnailPath && f.attr("poster", t.thumbnailPath), r.positionElement(n, t.position),
        f.height(n.height() - h.height()).width(n.width()), s.append(l, d, f), n.append(s, h);
        for (var p = 0; p < t.angles.length; p++) t.angles[p].order = p;
        t.angles.length <= 1 && h.find(".video-controls-next-angle, .video-controls-previous-angle").addClass(a.presentationControlDisabled);
        var g = new o();
        g.load(f), f = u.processAngles(t, f, g);
        var v = u.getAnnotationsFromAngles(t.angles);
        if (v && v.length) {
          f.attr("preload", "metadata");
          var m = new i();
          m.load(f, v, g);
        } else f.attr("preload", "none");
        return u.checkShowMuteButton(f[0], t.angles[0], h), u.connectVideoEvents(f, g),
        c++, n;
      },
      processAngles: function(t, e, r) {
        var i = t.angles, o = n.first(i);
        e.data(s.currentAngleIndex, 0), e.data({
          angles: i
        });
        for (var a = 0, l = 0; l < i.length; l++) {
          var c = i[l], d = 1e7, h = c.durationTicks / d, f = t.startPointTicks / d, p = t.endPointTicks / d;
          c.startFlagPosition = 0, c.endFlagPosition = h, c.duration = h, f > a && a + h > f && (c.startFlagPosition = f - a),
          p > a && a + h > p && (c.endFlagPosition = p - a), a += h;
        }
        return (o.startFlagPosition || o.endFlagPosition) && (r.setFlagPositions(o.startFlagPosition, o.endFlagPosition),
        e.one("loadedmetadata", function() {
          r.updateFlagMarkers();
        }), e.one("play", function() {
          e.one("loadedmetadata", function() {
            this.currentTime = o.startFlagPosition || 0;
          });
        })), u.showAngleName(e, o.name), e;
      },
      getAnnotationsFromAngles: function(t) {
        var e = n.select(t, function(t) {
          return t.annotations && t.annotations.length;
        }), i = n.map(e, function(t) {
          return n.each(t.annotations, function(t) {
            t.textAnnotations = n.map(t.textAnnotations, r.cleanAndParse), t.spotShadows = n.map(t.spotShadows, r.cleanAndParse),
            t.strokeData = n.map(t.strokeData, r.cleanAndParse);
          }), {
            angle: t.path,
            name: t.name,
            annotations: t.annotations,
            order: t.order
          };
        });
        return n.flatten(i);
      },
      checkShowMuteButton: function(t, e, n) {
        var r = e.hasAudio;
        t && t.readyState && ("undefined" != typeof t.webkitAudioDecodedByteCount ? r = t.webkitAudioDecodedByteCount > 0 : "undefined" != typeof t.mozHasAudio ? r = t.mozHasAudio : "undefined" != typeof t.audioTracks && (r = t.audioTracks.length > 0)),
        n.find(".video-controls-mute, .video-controls-unmute").toggle(r);
      },
      checkAudioIsMuted: function(t, e) {
        var n = t[0].muted;
        e.find(".video-controls-mute").toggleClass("is-hidden", !n), e.find(".video-controls-unmute").toggleClass("is-hidden", n);
      },
      connectVideoEvents: function(t, e) {
        t && (t.on("play", function() {
          if (!t.attr(s.src)) {
            var e = t.data(s.currentAngleIndex), n = t.data("angles")[e], r = n.path;
            t.attr(s.src, r), t[0].load(), t[0].play();
          }
        }), t.on("ended", function() {
          console.log("start: " + (e.getStartFlagPosition() || 0) + " end: " + e.getEndFlagPosition());
          var n, r = t.data("angles"), i = 0;
          if (r && r.length > 1) {
            var o = t.data(s.currentAngleIndex), a = r[o], c = o + 1 > r.length - 1 ? 0 : ++o, d = r[c], h = d.path;
            t.data(s.currentAngleIndex, c), a && (a.startFlagPosition = e.getStartFlagPosition(),
            a.endFlagPosition = e.getEndFlagPosition()), h && (t.attr(s.src, h), u.showAngleName(t, d.name),
            t.trigger("srcChanged"), n = d);
          }
          n ? (e.resetBars(), (n.startFlagPosition || n.endFlagPosition) && (i = n.startFlagPosition || 0,
          e.setTotalDuration(n.duration), e.setFlagPositions(i, n.endFlagPosition), e.updateFlagMarkers()),
          u.playVideoFromPosition(t, i)) : (i = e.getStartFlagPosition() || 0, u.playVideoFromPosition(t, i)),
          t.trigger(l + "resetAnnotations");
        }), t.on("nextAngle", function() {
          var e = t.data(s.currentAngleIndex);
          t.data(s.currentAngleIndex, e++), t[0].pause(), t.trigger("ended");
        }), t.on("previousAngle", function() {
          var e = t.data(s.currentAngleIndex);
          t.data(s.currentAngleIndex, e--), t[0].pause(), t.trigger("ended");
        }), t.on("checkAudio", function() {
          var e = t.data(s.currentAngleIndex), n = t.data("angles")[e], r = t.parent().siblings(".presentation-video-controls-container");
          u.checkShowMuteButton(t[0], n, r), u.checkAudioIsMuted(t, r);
        }), t.on("loadeddata loadedmetadata", function() {
          t.trigger("checkAudio");
        }));
      },
      playVideoFromPosition: function(t, e) {
        t.one("loadedmetadata", function() {
          !isNaN(e) && e > 0 && (this.currentTime = e), this.play();
        }), t[0].load();
      },
      showAngleName: function(t, e) {
        var n = t.parent().find("." + a.presentationControlsAngle);
        n.text(e);
      }
    };
    return u;
  }), t("presentations/main", [ "require", "jquery", "_", "reveal", "./presentation-remotes", "./presentation-controls", "./presentation-data", "./processors/text", "./processors/image", "./processors/video" ], function(t) {
    "use strict";
    function e() {
      l.initialize({
        width: 640,
        height: 480,
        margin: 0,
        minScale: 1,
        maxScale: 2,
        zoomReduction: .07,
        controls: !1,
        progress: !1,
        center: !1,
        history: !0,
        transition: "none",
        slideNumber: !0,
        keyboard: !1,
        zoomInChrome: !1
      });
    }
    function n() {
      a(g.slides).empty();
    }
    function r(t) {
      if (t && t.slides && t.slides.length) {
        console.log("Loading " + t.slides.length + " slides."), n(), t.slides = t.slides.sort(function(t, e) {
          return t.order - e.order;
        });
        var r = [];
        s.each(t.slides, function(t) {
          var e = a("<section></section>");
          e.data("order", t.order), s.each(o, function(n) {
            n && n.processSlide && n.processSlide(t, e);
          }), r.push(e);
        }), a(g.slides).append(r), e(), t.offline ? a(g.backToLibrary).css("display", "none") : a(g.backToLibrary).data("teamId", t.teamId);
      }
      return t;
    }
    function i() {
      var t, e, n, r;
      "function" == typeof window.callPhantom && (t = a("div").filter(function() {
        return this.currentStyle ? "none" !== this.currentStyle.backgroundImage : window.getComputedStyle ? "none" !== document.defaultView.getComputedStyle(this, null).getPropertyValue("background-image") : void 0;
      }), e = a("img").toArray(), e = e.concat(t.map(function() {
        var t = this.currentStyle ? this.currentStyle.backgroundImage : document.defaultView.getComputedStyle(this, null).getPropertyValue("background-image"), e = t.match(/\((.*?)\)/)[1].replace(/('|")/g, ""), n = new Image();
        return n.src = e, n;
      }).toArray()), n = e.length, r = 0, a.each(e, function() {
        a(this)[0].complete ? r++ : (a(this).load(function() {
          r++, r === n && window.callPhantom({});
        }), a(this).error(function() {
          r++, r === n && window.callPhantom({});
        }));
      }), r === n && window.callPhantom({}));
    }
    var o, a = t("jquery"), s = t("_"), l = t("reveal"), c = t("./presentation-remotes"), u = t("./presentation-controls"), d = t("./presentation-data"), h = t("./processors/text"), f = t("./processors/image"), p = t("./processors/video"), g = {
      slides: ".slides",
      slidenumber: ".slide-number",
      backToLibrary: ".presentation-back"
    };
    a(document).ready(function() {
      o = {
        text: h,
        image: f,
        video: p
      }, d.fetch().then(r).then(u.initialize).done(i), c.initialize({
        togglePlay: u.handleRemotePlayPress,
        toggleFullscreen: u.toggleFullscreen,
        next: u.nextSlide,
        prev: u.prevSlide,
        doubleff: u.handleRemoteFastForwardDoublePress,
        ff: u.handleRemoteFastForwardPress,
        slow: u.handleRemoteSlowForwardPress,
        rw: u.handleRemoteRewindPress,
        doublerw: u.handleRemoteRewindDoublePress,
        rev: u.handleRemoteReversePress,
        restart: u.handleRemoteRestartPress,
        tag: u.toggleOverview,
        normalRate: u.handleRemoteNormalRate
      }), setTimeout(function() {
        a(".presentation-controls-container").removeClass("show-controls");
      }, 3e3);
    });
  });
}(define);
