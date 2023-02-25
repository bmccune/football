window.Modernizr = function (n, t, i) {
    function nt(n) {
        c.cssText = n
    }

    function ht(n, t) {
        return nt(p.join(n + ";") + (t || ""))
    }

    function h(n, t) {
        return typeof n === t
    }

    function ot(n, t) {
        return !!~("" + n).indexOf(t)
    }

    function st(n, t) {
        var u, r;
        for (u in n)
            if (r = n[u], !ot(r, "-") && c[r] !== i) return t == "pfx" ? r : !0;
        return !1
    }

    function ct(n, t, r) {
        var f, u;
        for (f in n)
            if (u = t[n[f]], u !== i) return r === !1 ? n[f] : h(u, "function") ? u.bind(r || t) : u;
        return !1
    }

    function s(n, t, i) {
        var r = n.charAt(0).toUpperCase() + n.slice(1),
            u = (n + " " + ut.join(r + " ") + r).split(" ");
        return h(t, "string") || h(t, "undefined") ? st(u, t) : (u = (n + " " + ft.join(r + " ") + r).split(" "), ct(u, t, i))
    }

    function lt() {
        r.input = function (i) {
            for (var r = 0, u = i.length; r < u; r++) l[i[r]] = !!(i[r] in f);
            return l.list && (l.list = !!(t.createElement("datalist") && n.HTMLDataListElement)), l
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
        r.inputtypes = function (n) {
            for (var u = 0, r, o, s, h = n.length; u < h; u++) f.setAttribute("type", o = n[u]), r = f.type !== "text", r && (f.value = it, f.style.cssText = "position:absolute;visibility:hidden;",
                /^range$/.test(o) && f.style.WebkitAppearance !== i ? (e.appendChild(f), s = t.defaultView, r = s.getComputedStyle && s.getComputedStyle(f, null).WebkitAppearance !== "textfield" && f.offsetHeight !== 0, e.removeChild(f)) : /^(search|tel)$/.test(o) || (r = /^(url|email)$/.test(o) ? f.checkValidity && f.checkValidity() === !1 : f.value != it)), et[n[u]] = !!r;
            return et
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var r = {},
        y = !0,
        e = t.documentElement,
        o = "modernizr",
        tt = t.createElement(o),
        c = tt.style,
        f = t.createElement("input"),
        it = ":)",
        at = {}.toString,
        p = " -webkit- -moz- -o- -ms- ".split(" "),
        rt = "Webkit Moz O ms",
        ut = rt.split(" "),
        ft = rt.toLowerCase().split(" "),
        u = {},
        et = {},
        l = {},
        w = [],
        b = w.slice,
        a, k = function (n, i, r, u) {
            var l, a, c, v, f = t.createElement("div"),
                h = t.body,
                s = h || t.createElement("body");
            if (parseInt(r, 10))
                while (r--) c = t.createElement("div"), c.id = u ? u[r] : o + (r + 1), f.appendChild(c);
            return l = ["&#173;", '<style id="s', o, '">', n, "<\/style>"].join(""), f.id = o, (h ? f : s).innerHTML += l, s.appendChild(f), h ||
                (s.style.background = "", s.style.overflow = "hidden", v = e.style.overflow, e.style.overflow = "hidden", e.appendChild(s)), a = i(f, n), h ? f.parentNode.removeChild(f) : (s.parentNode.removeChild(s), e.style.overflow = v), !!a
        },
        d = {}.hasOwnProperty,
        g, v;
    g = h(d, "undefined") || h(d.call, "undefined") ? function (n, t) {
        return t in n && h(n.constructor.prototype[t], "undefined")
    } : function (n, t) {
        return d.call(n, t)
    };
    Function.prototype.bind || (Function.prototype.bind = function (n) {
        var t = this,
            i, r;
        if (typeof t != "function") throw new TypeError;
        return i =
            b.call(arguments, 1), r = function () {
                var f, e, u;
                return this instanceof r ? (f = function () {}, f.prototype = t.prototype, e = new f, u = t.apply(e, i.concat(b.call(arguments))), Object(u) === u) ? u : e : t.apply(n, i.concat(b.call(arguments)))
            }, r
    });
    u.flexbox = function () {
        return s("flexWrap")
    };
    u.webgl = function () {
        return !!n.WebGLRenderingContext
    };
    u.touch = function () {
        var i;
        return "ontouchstart" in n || n.DocumentTouch && t instanceof DocumentTouch ? i = !0 : k(["@media (", p.join("touch-enabled),("), o, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (n) {
            i = n.offsetTop === 9
        }), i
    };
    u.rgba = function () {
        return nt("background-color:rgba(150,255,150,.5)"), ot(c.backgroundColor, "rgba")
    };
    u.backgroundsize = function () {
        return s("backgroundSize")
    };
    u.opacity = function () {
        return ht("opacity:.55"), /^0.55$/.test(c.opacity)
    };
    u.cssanimations = function () {
        return s("animationName")
    };
    u.csstransforms = function () {
        return !!s("transform")
    };
    u.csstransforms3d = function () {
        var n = !!s("perspective");
        return n && "webkitPerspective" in e.style && k("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",
            function (t) {
                n = t.offsetLeft === 9 && t.offsetHeight === 3
            }), n
    };
    u.csstransitions = function () {
        return s("transition")
    };
    u.video = function () {
        var i = t.createElement("video"),
            n = !1;
        try {
            (n = !!i.canPlayType) && (n = new Boolean(n), n.ogg = i.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = i.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = i.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (r) {}
        return n
    };
    u.localstorage = function () {
        try {
            return localStorage.setItem(
                o, o), localStorage.removeItem(o), !0
        } catch (n) {
            return !1
        }
    };
    for (v in u) g(u, v) && (a = v.toLowerCase(), r[a] = u[v](), w.push((r[a] ? "" : "no-") + a));
    return r.input || lt(), r.addTest = function (n, t) {
        if (typeof n == "object")
            for (var u in n) g(n, u) && r.addTest(u, n[u]);
        else {
            if (n = n.toLowerCase(), r[n] !== i) return r;
            t = typeof t == "function" ? t() : t;
            typeof y != "undefined" && y && (e.className += " " + (t ? "" : "no-") + n);
            r[n] = t
        }
        return r
    }, nt(""), tt = f = null, r._version = "2.7.1", r._prefixes = p, r._domPrefixes = ft, r._cssomPrefixes = ut, r.testProp = function (n) {
        return st([n])
    }, r.testAllProps = s, r.testStyles = k, e.className = e.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (y ? " js " + w.join(" ") : ""), r
}(this, this.document);
Modernizr.testStyles("#modernizr{background-size:cover}", function (n) {
    var t = window.getComputedStyle ? window.getComputedStyle(n, null) : n.currentStyle;
    Modernizr.addTest("bgsizecover", t.backgroundSize == "cover")
});
Modernizr.addTest("placeholder", function () {
    return !!("placeholder" in (Modernizr.input || document.createElement("input")) && "placeholder" in (Modernizr.textarea || document.createElement("textarea")))
});
/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.1.9 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */
var requirejs, require, define;
(function (n) {
    function v(n) {
        return ot.call(n) === "[object Function]"
    }

    function y(n) {
        return ot.call(n) === "[object Array]"
    }

    function s(n, t) {
        if (n)
            for (var i = 0; i < n.length; i += 1)
                if (n[i] && t(n[i], i, n)) break
    }

    function lt(n, t) {
        if (n)
            for (var i = n.length - 1; i > -1; i -= 1)
                if (n[i] && t(n[i], i, n)) break
    }

    function r(n, t) {
        return bt.call(n, t)
    }

    function i(n, t) {
        return r(n, t) && n[t]
    }

    function c(n, t) {
        var i;
        for (i in n)
            if (r(n, i) && t(n[i], i)) break
    }

    function nt(n, t, i, u) {
        return t && c(t, function (t, f) {
            (i || !r(n, f)) && (u &&
                typeof t != "string" ? (n[f] || (n[f] = {}), nt(n[f], t, i, u)) : n[f] = t)
        }), n
    }

    function u(n, t) {
        return function () {
            return t.apply(n, arguments)
        }
    }

    function rt() {
        return document.getElementsByTagName("script")
    }

    function at(n) {
        throw n;
    }

    function vt(t) {
        if (!t) return t;
        var i = n;
        return s(t.split("."), function (n) {
            i = i[n]
        }), i
    }

    function h(n, t, i, r) {
        var u = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + n);
        return u.requireType = n, u.requireModules = r, i && (u.originalError = i), u
    }

    function ni(f) {
        function vi(n) {
            for (var i, t = 0; n[t]; t += 1)
                if (i = n[t], i === ".") n.splice(t, 1), t -= 1;
                else if (i === "..")
                if (t === 1 && (n[2] === ".." || n[0] === "..")) break;
                else t > 0 && (n.splice(t - 1, 2), t -= 2)
        }

        function it(n, t, r) {
            var p, w, f, s, e, h, c, o, b, a, k, u = t && t.split("/"),
                d = u,
                v = l.map,
                y = v && v["*"];
            if (n && n.charAt(0) === "." && (t ? (d = i(l.pkgs, t) ? u = [t] : u.slice(0, u.length - 1), n = d.concat(n.split("/")), vi(n), w = i(l.pkgs, p = n[0]), n = n.join("/"), w && n === p + "/" + w.main && (n = p)) : n.indexOf("./") === 0 && (n = n.substring(2))), r && v && (u || y)) {
                for (s = n.split("/"), e = s.length; e > 0; e -= 1) {
                    if (c = s.slice(0, e).join("/"),
                        u)
                        for (h = u.length; h > 0; h -= 1)
                            if (f = i(v, u.slice(0, h).join("/")), f && (f = i(f, c), f)) {
                                o = f;
                                b = e;
                                break
                            }
                    if (o) break;
                    !a && y && i(y, c) && (a = i(y, c), k = e)
                }!o && a && (o = a, b = k);
                o && (s.splice(0, b, o), n = s.join("/"))
            }
            return n
        }

        function fi(n) {
            e && s(rt(), function (t) {
                if (t.getAttribute("data-requiremodule") === n && t.getAttribute("data-requirecontext") === o.contextName) return t.parentNode.removeChild(t), !0
            })
        }

        function ni(n) {
            var t = i(l.paths, n);
            if (t && y(t) && t.length > 1) return t.shift(), o.require.undef(n), o.require([n]), !0
        }

        function ei(n) {
            var i,
                t = n ? n.indexOf("!") : -1;
            return t > -1 && (i = n.substring(0, t), n = n.substring(t + 1, n.length)), [i, n]
        }

        function k(n, t, r, u) {
            var a, h, l, s, f = null,
                c = t ? t.name : null,
                y = n,
                v = !0,
                e = "";
            return n || (v = !1, n = "_@r" + (li += 1)), s = ei(n), f = s[0], n = s[1], f && (f = it(f, c, u), h = i(w, f)), n && (f ? e = h && h.normalize ? h.normalize(n, function (n) {
                return it(n, c, u)
            }) : it(n, c, u) : (e = it(n, c, u), s = ei(e), f = s[0], e = s[1], r = !0, a = o.nameToUrl(e))), l = f && !h && !r ? "_unnormalized" + (ai += 1) : "", {
                prefix: f,
                name: e,
                parentMap: t,
                unnormalized: !!l,
                url: a,
                originalName: y,
                isDefine: v,
                id: (f ?
                    f + "!" + e : e) + l
            }
        }

        function et(n) {
            var r = n.id,
                t = i(p, r);
            return t || (t = p[r] = new o.Module(n)), t
        }

        function ht(n, t, u) {
            var e = n.id,
                f = i(p, e);
            if (r(w, e) && (!f || f.defineEmitComplete)) t === "defined" && u(w[e]);
            else if (f = et(n), f.error && t === "error") u(f.error);
            else f.on(t, u)
        }

        function d(n, r) {
            var f = n.requireModules,
                u = !1;
            if (r) r(n);
            else if (s(f, function (t) {
                var r = i(p, t);
                r && (r.error = n, r.events.error && (u = !0, r.emit("error", n)))
            }), !u) t.onError(n)
        }

        function ti() {
            g.length && (dt.apply(tt, [tt.length - 1, 0].concat(g)), g = [])
        }

        function ii(n) {
            delete
            p[n];
            delete bt[n]
        }

        function oi(n, t, r) {
            var u = n.map.id;
            n.error ? n.emit("error", n.error) : (t[u] = !0, s(n.depMaps, function (u, f) {
                var e = u.id,
                    o = i(p, e);
                !o || n.depMatched[f] || r[e] || (i(t, e) ? (n.defineDep(f, w[e]), n.check()) : oi(o, t, r))
            }), r[u] = !0)
        }

        function ri() {
            var n, t, r, a, v = l.waitSeconds * 1e3,
                u = v && o.startTime + v < (new Date).getTime(),
                i = [],
                y = [],
                f = !1,
                p = !0;
            if (!lt) {
                if (lt = !0, c(bt, function (r) {
                    if ((n = r.map, t = n.id, r.enabled) && (n.isDefine || y.push(r), !r.error))
                        if (!r.inited && u) ni(t) ? (a = !0, f = !0) : (i.push(t), fi(t));
                        else if (!r.inited &&
                        r.fetched && n.isDefine && (f = !0, !n.prefix)) return p = !1
                }), u && i.length) return r = h("timeout", "Load timeout for modules: " + i, null, i), r.contextName = o.contextName, d(r);
                p && s(y, function (n) {
                    oi(n, {}, {})
                });
                (!u || a) && f && (e || st) && !pt && (pt = setTimeout(function () {
                    pt = 0;
                    ri()
                }, 50));
                lt = !1
            }
        }

        function ui(n) {
            r(w, n[0]) || et(k(n[0], null, !0)).init(n[1], n[2])
        }

        function si(n, t, i, r) {
            n.detachEvent && !ct ? r && n.detachEvent(r, t) : n.removeEventListener(i, t, !1)
        }

        function hi(n) {
            var t = n.currentTarget || n.srcElement;
            return si(t, o.onScriptLoad, "load",
                "onreadystatechange"), si(t, o.onScriptError, "error"), {
                node: t,
                id: t && t.getAttribute("data-requiremodule")
            }
        }

        function ci() {
            var n;
            for (ti(); tt.length;) {
                if (n = tt.shift(), n[0] === null) return d(h("mismatch", "Mismatched anonymous define() module: " + n[n.length - 1]));
                ui(n)
            }
        }
        var lt, yt, o, ut, pt, l = {
                waitSeconds: 7,
                baseUrl: "./",
                paths: {},
                pkgs: {},
                shim: {},
                config: {}
            },
            p = {},
            bt = {},
            kt = {},
            tt = [],
            w = {},
            ot = {},
            li = 1,
            ai = 1;
        return ut = {
            require: function (n) {
                return n.require ? n.require : n.require = o.makeRequire(n.map)
            },
            exports: function (n) {
                return n.
                usingExports = !0, n.map.isDefine ? n.exports ? n.exports : n.exports = w[n.map.id] = {} : void 0
            },
            module: function (n) {
                return n.module ? n.module : n.module = {
                    id: n.map.id,
                    uri: n.map.url,
                    config: function () {
                        var t, r = i(l.pkgs, n.map.id);
                        return t = r ? i(l.config, n.map.id + "/" + r.main) : i(l.config, n.map.id), t || {}
                    },
                    exports: w[n.map.id]
                }
            }
        }, yt = function (n) {
            this.events = i(kt, n.id) || {};
            this.map = n;
            this.shim = i(l.shim, n.id);
            this.depExports = [];
            this.depMaps = [];
            this.depMatched = [];
            this.pluginMaps = {};
            this.depCount = 0
        }, yt.prototype = {
            init: function (n,
                t, i, r) {
                if (r = r || {}, !this.inited) {
                    if (this.factory = t, i) this.on("error", i);
                    else this.events.error && (i = u(this, function (n) {
                        this.emit("error", n)
                    }));
                    this.depMaps = n && n.slice(0);
                    this.errback = i;
                    this.inited = !0;
                    this.ignore = r.ignore;
                    r.enabled || this.enabled ? this.enable() : this.check()
                }
            },
            defineDep: function (n, t) {
                this.depMatched[n] || (this.depMatched[n] = !0, this.depCount -= 1, this.depExports[n] = t)
            },
            fetch: function () {
                if (!this.fetched) {
                    this.fetched = !0;
                    o.startTime = (new Date).getTime();
                    var n = this.map;
                    if (this.shim) o.makeRequire(
                        this.map, {
                            enableBuildCallback: !0
                        })(this.shim.deps || [], u(this, function () {
                        return n.prefix ? this.callPlugin() : this.load()
                    }));
                    else return n.prefix ? this.callPlugin() : this.load()
                }
            },
            load: function () {
                var n = this.map.url;
                ot[n] || (ot[n] = !0, o.load(this.map.id, n))
            },
            check: function () {
                if (this.enabled && !this.enabling) {
                    var i, r, u = this.map.id,
                        e = this.depExports,
                        n = this.exports,
                        f = this.factory;
                    if (this.inited) {
                        if (this.error) this.emit("error", this.error);
                        else if (!this.defining) {
                            if (this.defining = !0, this.depCount < 1 && !this.defined) {
                                if (v(f)) {
                                    if (this.events.error && this.map.isDefine || t.onError !== at) try {
                                        n = o.execCb(u, f, e, n)
                                    } catch (s) {
                                        i = s
                                    } else n = o.execCb(u, f, e, n);
                                    if (this.map.isDefine && (r = this.module, r && r.exports !== undefined && r.exports !== this.exports ? n = r.exports : n === undefined && this.usingExports && (n = this.exports)), i) return i.requireMap = this.map, i.requireModules = this.map.isDefine ? [this.map.id] : null, i.requireType = this.map.isDefine ? "define" : "require", d(this.error = i)
                                } else n = f; if (this.exports = n, this.map.isDefine && !this.ignore && (w[u] = n,
                                    t.onResourceLoad)) t.onResourceLoad(o, this.map, this.depMaps);
                                ii(u);
                                this.defined = !0
                            }
                            this.defining = !1;
                            this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                        }
                    } else this.fetch()
                }
            },
            callPlugin: function () {
                var n = this.map,
                    f = n.id,
                    e = k(n.prefix);
                this.depMaps.push(e);
                ht(e, "defined", u(this, function (e) {
                    var s, a, v, y = this.map.name,
                        g = this.map.parentMap ? this.map.parentMap.name : null,
                        w = o.makeRequire(n.parentMap, {
                            enableBuildCallback: !0
                        });
                    if (this.map.unnormalized) {
                        if (e.normalize && (y = e.normalize(y, function (n) {
                            return it(n, g, !0)
                        }) || ""), a = k(n.prefix + "!" + y, this.map.parentMap), ht(a, "defined", u(this, function (n) {
                            this.init([], function () {
                                return n
                            }, null, {
                                enabled: !0,
                                ignore: !0
                            })
                        })), v = i(p, a.id), v) {
                            if (this.depMaps.push(a), this.events.error) v.on("error", u(this, function (n) {
                                this.emit("error", n)
                            }));
                            v.enable()
                        }
                        return
                    }
                    s = u(this, function (n) {
                        this.init([], function () {
                            return n
                        }, null, {
                            enabled: !0
                        })
                    });
                    s.error = u(this, function (n) {
                        this.inited = !0;
                        this.error = n;
                        n.requireModules = [f];
                        c(p, function (
                            n) {
                            n.map.id.indexOf(f + "_unnormalized") === 0 && ii(n.map.id)
                        });
                        d(n)
                    });
                    s.fromText = u(this, function (i, u) {
                        var e = n.name,
                            c = k(e),
                            a = b;
                        u && (i = u);
                        a && (b = !1);
                        et(c);
                        r(l.config, f) && (l.config[e] = l.config[f]);
                        try {
                            t.exec(i)
                        } catch (v) {
                            return d(h("fromtexteval", "fromText eval for " + f + " failed: " + v, v, [f]))
                        }
                        a && (b = !0);
                        this.depMaps.push(c);
                        o.completeLoad(e);
                        w([e], s)
                    });
                    e.load(n.name, w, s, l)
                }));
                o.enable(e, this);
                this.pluginMaps[e.id] = e
            },
            enable: function () {
                bt[this.map.id] = this;
                this.enabled = !0;
                this.enabling = !0;
                s(this.depMaps, u(this,
                    function (n, t) {
                        var f, e, s;
                        if (typeof n == "string") {
                            if (n = k(n, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = n, s = i(ut, n.id), s) {
                                this.depExports[t] = s(this);
                                return
                            }
                            this.depCount += 1;
                            ht(n, "defined", u(this, function (n) {
                                this.defineDep(t, n);
                                this.check()
                            }));
                            this.errback && ht(n, "error", u(this, this.errback))
                        }
                        f = n.id;
                        e = p[f];
                        r(ut, f) || !e || e.enabled || o.enable(n, this)
                    }));
                c(this.pluginMaps, u(this, function (n) {
                    var t = i(p, n.id);
                    t && !t.enabled && o.enable(n, this)
                }));
                this.enabling = !1;
                this.check()
            },
            on: function (n, t) {
                var i = this.events[n];
                i || (i = this.events[n] = []);
                i.push(t)
            },
            emit: function (n, t) {
                s(this.events[n], function (n) {
                    n(t)
                });
                n === "error" && delete this.events[n]
            }
        }, o = {
            config: l,
            contextName: f,
            registry: p,
            defined: w,
            urlFetched: ot,
            defQueue: tt,
            Module: yt,
            makeModuleMap: k,
            nextTick: t.nextTick,
            onError: d,
            configure: function (n) {
                n.baseUrl && n.baseUrl.charAt(n.baseUrl.length - 1) !== "/" && (n.baseUrl += "/");
                var t = l.pkgs,
                    i = l.shim,
                    r = {
                        paths: !0,
                        config: !0,
                        map: !0
                    };
                c(n, function (n, t) {
                    r[t] ? t === "map" ? (l.map || (l.map = {}), nt(l[t],
                        n, !0, !0)) : nt(l[t], n, !0) : l[t] = n
                });
                n.shim && (c(n.shim, function (n, t) {
                    y(n) && (n = {
                        deps: n
                    });
                    (n.exports || n.init) && !n.exportsFn && (n.exportsFn = o.makeShimExports(n));
                    i[t] = n
                }), l.shim = i);
                n.packages && (s(n.packages, function (n) {
                    var i;
                    n = typeof n == "string" ? {
                        name: n
                    } : n;
                    i = n.location;
                    t[n.name] = {
                        name: n.name,
                        location: i || n.name,
                        main: (n.main || "main").replace(wt, "").replace(ft, "")
                    }
                }), l.pkgs = t);
                c(p, function (n, t) {
                    n.inited || n.map.unnormalized || (n.map = k(t))
                });
                (n.deps || n.callback) && o.require(n.deps || [], n.callback)
            },
            makeShimExports: function (t) {
                function i() {
                    var i;
                    return t.init && (i = t.init.apply(n, arguments)), i || t.exports && vt(t.exports)
                }
                return i
            },
            makeRequire: function (n, u) {
                function s(i, e, c) {
                    var l, y, a;
                    return (u.enableBuildCallback && e && v(e) && (e.__requireJsBuild = !0), typeof i == "string") ? v(e) ? d(h("requireargs", "Invalid require call"), c) : n && r(ut, i) ? ut[i](p[n.id]) : t.get ? t.get(o, i, n, s) : (y = k(i, n, !1, !0), l = y.id, !r(w, l)) ? d(h("notloaded", 'Module name "' + l + '" has not been loaded yet for context: ' + f + (n ? "" : ". Use require([])"))) : w[l] : (ci(), o.nextTick(function () {
                        ci();
                        a = et(k(null, n));
                        a.skipMap = u.skipMap;
                        a.init(i, e, c, {
                            enabled: !0
                        });
                        ri()
                    }), s)
                }
                return u = u || {}, nt(s, {
                    isBrowser: e,
                    toUrl: function (t) {
                        var r, i = t.lastIndexOf("."),
                            u = t.split("/")[0],
                            f = u === "." || u === "..";
                        return i !== -1 && (!f || i > 1) && (r = t.substring(i, t.length), t = t.substring(0, i)), o.nameToUrl(it(t, n && n.id, !0), r, !0)
                    },
                    defined: function (t) {
                        return r(w, k(t, n, !1, !0).id)
                    },
                    specified: function (t) {
                        return t = k(t, n, !1, !0).id, r(w, t) || r(p, t)
                    }
                }), n || (s.undef = function (t) {
                    ti();
                    var u = k(t, n, !0),
                        r = i(p, t);
                    fi(t);
                    delete
                    w[t];
                    delete ot[u.url];
                    delete kt[t];
                    r && (r.events.defined && (kt[t] = r.events), ii(t))
                }), s
            },
            enable: function (n) {
                var t = i(p, n.id);
                t && et(n).enable()
            },
            completeLoad: function (n) {
                var u, t, f, e = i(l.shim, n) || {},
                    o = e.exports;
                for (ti(); tt.length;) {
                    if (t = tt.shift(), t[0] === null) {
                        if (t[0] = n, u) break;
                        u = !0
                    } else t[0] === n && (u = !0);
                    ui(t)
                }
                if (f = i(p, n), !u && !r(w, n) && f && !f.inited)
                    if (!l.enforceDefine || o && vt(o)) ui([n, e.deps || [], e.exportsFn]);
                    else return ni(n) ? void 0 : d(h("nodefine", "No define call for " + n, null, [n]));
                ri()
            },
            nameToUrl: function (
                n, r, u) {
                var a, v, e, p, o, s, c, f, h;
                if (t.jsExtRegExp.test(n)) f = n + (r || "");
                else {
                    for (a = l.paths, v = l.pkgs, o = n.split("/"), s = o.length; s > 0; s -= 1)
                        if (c = o.slice(0, s).join("/"), e = i(v, c), h = i(a, c), h) {
                            y(h) && (h = h[0]);
                            o.splice(0, s, h);
                            break
                        } else if (e) {
                        p = n === e.name ? e.location + "/" + e.main : e.location;
                        o.splice(0, s, p);
                        break
                    }
                    f = o.join("/");
                    f += r || (/^data\:|\?/.test(f) || u ? "" : ".js");
                    f = (f.charAt(0) === "/" || f.match(/^[\w\+\.\-]+:/) ? "" : l.baseUrl) + f
                }
                return l.urlArgs ? f + ((f.indexOf("?") === -1 ? "?" : "&") + l.urlArgs) : f
            },
            load: function (n, i) {
                t.load(
                    o, n, i)
            },
            execCb: function (n, t, i, r) {
                return t.apply(r, i)
            },
            onScriptLoad: function (n) {
                if (n.type === "load" || gt.test((n.currentTarget || n.srcElement).readyState)) {
                    a = null;
                    var t = hi(n);
                    o.completeLoad(t.id)
                }
            },
            onScriptError: function (n) {
                var t = hi(n);
                if (!ni(t.id)) return d(h("scripterror", "Script error for: " + t.id, n, [t.id]))
            }
        }, o.require = o.makeRequire(), o
    }

    function ti() {
        return a && a.readyState === "interactive" ? a : (lt(rt(), function (n) {
            if (n.readyState === "interactive") return a = n
        }), a)
    }
    var t, tt, l, p, k, d, a, it, f, ut, yt = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
        pt = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        ft = /\.js$/,
        wt = /^\.\//,
        et = Object.prototype,
        ot = et.toString,
        bt = et.hasOwnProperty,
        kt = Array.prototype,
        dt = kt.splice,
        e = !!(typeof window != "undefined" && typeof navigator != "undefined" && window.document),
        st = !e && typeof importScripts != "undefined",
        gt = e && navigator.platform === "PLAYSTATION 3" ? /^complete$/ : /^(complete|loaded)$/,
        ht = "_",
        ct = typeof opera != "undefined" && opera.toString() === "[object Opera]",
        w = {},
        o = {},
        g = [],
        b = !1;
    if (typeof define == "undefined") {
        if (typeof requirejs !=
            "undefined") {
            if (v(requirejs)) return;
            o = requirejs;
            requirejs = undefined
        }
        typeof require == "undefined" || v(require) || (o = require, require = undefined);
        t = requirejs = function (n, r, u, f) {
            var o, e, s = ht;
            return y(n) || typeof n == "string" || (e = n, y(r) ? (n = r, r = u, u = f) : n = []), e && e.context && (s = e.context), o = i(w, s), o || (o = w[s] = t.s.newContext(s)), e && o.configure(e), o.require(n, r, u)
        };
        t.config = function (n) {
            return t(n)
        };
        t.nextTick = typeof setTimeout != "undefined" ? function (n) {
            setTimeout(n, 4)
        } : function (n) {
            n()
        };
        require || (require = t);
        t.version =
            "2.1.9";
        t.jsExtRegExp = /^\/|:|\?|\.js$/;
        t.isBrowser = e;
        tt = t.s = {
            contexts: w,
            newContext: ni
        };
        t({});
        s(["toUrl", "undef", "defined", "specified"], function (n) {
            t[n] = function () {
                var t = w[ht];
                return t.require[n].apply(t, arguments)
            }
        });
        e && (l = tt.head = document.getElementsByTagName("head")[0], p = document.getElementsByTagName("base")[0], p && (l = tt.head = p.parentNode));
        t.onError = at;
        t.createNode = function (n) {
            var t = n.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
            return t.type = n.scriptType || "text/javascript", t.charset = "utf-8", t.async = !0, t
        };
        t.load = function (n, i, r) {
            var f = n && n.config || {},
                u;
            if (e) return u = t.createNode(f, i, r), u.setAttribute("data-requirecontext", n.contextName), u.setAttribute("data-requiremodule", i), !u.attachEvent || u.attachEvent.toString && u.attachEvent.toString().indexOf("[native code") < 0 || ct ? (u.addEventListener("load", n.onScriptLoad, !1), u.addEventListener("error", n.onScriptError, !1)) : (b = !0, u.attachEvent("onreadystatechange", n.onScriptLoad)), u.src =
                r, it = u, p ? l.insertBefore(u, p) : l.appendChild(u), it = null, u;
            if (st) try {
                importScripts(r);
                n.completeLoad(i)
            } catch (o) {
                n.onError(h("importscripts", "importScripts failed for " + i + " at " + r, o, [i]))
            }
        };
        e && !o.skipDataMain && lt(rt(), function (n) {
            return l || (l = n.parentNode), k = n.getAttribute("data-main"), k ? (f = k, o.baseUrl || (d = f.split("/"), f = d.pop(), ut = d.length ? d.join("/") + "/" : "./", o.baseUrl = ut), f = f.replace(ft, ""), t.jsExtRegExp.test(f) && (f = k), o.deps = o.deps ? o.deps.concat(f) : [f], !0) : void 0
        });
        define = function (n, t, i) {
            var r,
                u;
            typeof n != "string" && (i = t, t = n, n = null);
            y(t) || (i = t, t = null);
            !t && v(i) && (t = [], i.length && (i.toString().replace(yt, "").replace(pt, function (n, i) {
                t.push(i)
            }), t = (i.length === 1 ? ["require"] : ["require", "exports", "module"]).concat(t)));
            b && (r = it || ti(), r && (n || (n = r.getAttribute("data-requiremodule")), u = w[r.getAttribute("data-requirecontext")]));
            (u ? u.defQueue : g).push([n, t, i])
        };
        define.amd = {
            jQuery: !0
        };
        t.exec = function (n) {
            return eval(n)
        };
        t(o)
    }
})(this);
(function () {
    "use strict";
    requirejs.config({
        baseUrl: "/js/",
        paths: {
            actionclick: "ui/events/actionclick",
            "backbone.babysitter": "lib/backbone.babysitter",
            "backbone.marionette": "lib/backbone.marionette",
            "backbone-modelbinder": "lib/backbone.modelbinder",
            "backbone-validation": "lib/backbone-validation",
            "backbone-validation-extensions": "lib-extensions/backbone-validation-extensions",
            "backbone.wreqr": "lib/backbone.wreqr",
            bigvideo: "lib/bigvideo.noslider",
            browser: "ui/browser",
            css: "lib/require-css/css",
            "datatables-helper": "utility/tables/datatables-helper",
            deferred: "utility/deferred",
            events: "ui/events/events",
            handlebars: "plugins/hbs/Handlebars",
            hudl: "base/hudl",
            "hudl-form": "ui/hudl-form",
            "image-cropper": "ui/image-cropper",
            imagesloaded: "lib/imagesloaded",
            kickoff: "../content/kickoff/components",
            konami: "lib/konami",
            map: "plugins/map",
            "mobile-image-uploader": "ui/mobile-image-uploader",
            moment: "lib/moment",
            jqt: "plugins/jqt",
            jquery: "lib/jquery/jquery-2.0.3",
            "jquery-private": "lib-extensions/jquery-private",
            "jquery.charlimit": "ui/jquery.charlimit",
            "jquery.datatables": "lib/jquery.dataTables",
            "jquery.datatables.extensions": "lib-extensions/datatables-extensions",
            "jquery.disable": "utility/jquery/jquery.disable",
            "jquery.insert-at": "utility/jquery/jquery.insert-at",
            "jquery.tmpl": "lib/jquery.tmpl.amd",
            kinetic: "lib/kinetic",
            logger: "utility/logging/logger",
            microplugin: "lib/microplugin",
            "mobile-nav": "layout/mobile-nav",
            "premium-highlight-editor": "premium-highlight-editor/editor",
            requestAnimationFrame: "lib/polyfills/requestAnimationFrame",
            selectize: "lib/selectize",
            sifter: "lib/sifter",
            "smooth-modal": "ui/smooth-modal",
            "spin-extensions": "lib-extensions/spin-extensions",
            timespan: "utility/timespan",
            "trigger-download": "utility/trigger-download",
            "underscore-extensions": "lib-extensions/underscore-extensions",
            "usage-log-event": "utility/logging/usage-log-event",
            videojs: "lib/video",
            wrap: "plugins/wrap",
            addthis: "//s7.addthis.com/js/300/addthis_widget.js#pubid=hudl?",
            facebook: ["//connect.facebook.net/en_US/all",
      "lib-extensions/facebook-fallback"],
            twitter: ["//platform.twitter.com/widgets", "lib-extensions/twitter-fallback"],
            "dialog-toggle": "deprecated/ui/dialog/toggle",
            "file-uploader": "lib/fileuploader.custom",
            "image-uploader": "deprecated/widget/ajax-image-uploader"
        },
        shim: {
            addthis: {
                exports: "addthis"
            },
            facebook: {
                exports: "FB"
            },
            twitter: {
                exports: "__twttrlr"
            }
        },
        map: {
            "*": {
                ajax: "hudl.ajax",
                config: "hudl.config",
                data: "hudl.data",
                expose: "hudl.expose",
                model: "hudl.model",
                services: "hudl.services",
                ace: "lib/ace",
                number: "utility/number/number",
                string: "utility/string/string",
                hotkeys: "utility/hotkeys",
                "inspector-skeleton": "inspector/page/skeleton",
                stylesheet: "lib/require-css/css",
                _: "underscore-extensions",
                jquery: "jquery-private",
                underscore: "underscore-extensions",
                _underscore: "wrap!lib/underscore",
                backbone: "wrap!lib/backbone",
                cookies: "wrap!lib/cookies.min",
                exif: "wrap!lib/exif",
                fx: "wrap!lib/fx.min",
                "jquery.autocomplete": "wrap!lib/jquery-ui/jquery.ui.autocomplete",
                "jquery.base64": "wrap!lib/jquery.base64",
                "jquery.datepicker": "wrap!lib/jquery-ui/jquery.ui.datepicker",
                "jquery.delayed-observer": "wrap!lib/jquery.delayedobserver",
                "jquery.draggable": "wrap!lib/jquery-ui/jquery.ui.draggable",
                "jquery.droppable": "wrap!lib/jquery-ui/jquery.ui.droppable",
                "jquery.fancytree": "wrap!lib/jquery.fancytree/jquery.fancytree",
                "jquery.hotkeys": "wrap!lib/jquery.hotkeys",
                "jquery.imgareaselect": "wrap!lib/jquery.imgareaselect",
                "jquery.infinitescroll": "wrap!lib/jquery.infinitescroll",
                "jquery.maskedinput": "wrap!lib/jquery.maskedinput",
                "jquery.maxlength": "wrap!lib/jquery.maxlength",
                "jquery.menu": "wrap!lib/jquery-ui/jquery.ui.menu",
                "jquery.mouse": "wrap!lib/jquery-ui/jquery.ui.mouse",
                "jquery.position": "wrap!lib/jquery-ui/jquery.ui.position",
                "jquery.resizable": "wrap!lib/jquery-ui/jquery.ui.resizable",
                "jquery.scroll-to": "wrap!lib/jquery.scrollTo",
                "jquery.selectable": "wrap!lib/jquery-ui/jquery.ui.selectable",
                "jquery.smartbanner": "wrap!lib/jquery.smartbanner",
                "jquery.sortable": "wrap!lib/jquery-ui/jquery.ui.sortable",
                "jquery.ui.core": "wrap!lib/jquery-ui/jquery.ui.core",
                "jquery.slider": "wrap!lib/jquery-ui/jquery.ui.slider",
                "jquery.watermark": "wrap!lib/jquery.watermark",
                "jquery.widget": "wrap!lib/jquery-ui/jquery.ui.widget",
                "s3.jquery.fineuploader": "wrap!lib/s3.jquery.fineuploader",
                silverlight: "wrap!lib/silverlight",
                "silverlight-control": "wrap!silverlight-extensions/silverlight-control",
                spin: "wrap!lib/spin",
                "message-file-uploader": "wrap!silver-plus/message-fileuploader",
                hbs: "plugins/hbs/hbs.custom",
                template: "jqt",
                messaging: "inspector/messaging/messaging",
                "jquery.disable-selection": "map!jquery.ui.core",
                "lib/ace/requirejs/text": "plugins/text"
            },
            "jquery-private": {
                jquery: "jquery"
            },
            "plugins/hbs": {
                i18nprecompile: "plugins/hbs/i18nprecompile",
                underscore: "plugins/hbs/underscore",
                json2: "plugins/hbs/json2"
            },
            "video/edit": {
                backbone: "deprecated/backbone.hudl"
            },
            "inspector/popup/main": {
                "messaging-connector": "inspector/messaging/iframe-extension-combo-connector"
            }
        },
        wrapped: {
            pseudoConfigs: {
                jquery: "->$|jQuery",
                _: "->_",
                expose: "->"
            },
            configs: {
                _underscore: {
                    deps: "expose->_",
                    init: function (n) {
                        return n("_", this._.noConflict(), !0)
                    }
                },
                backbone: {
                    deps: "expose,_,jquery->Backbone",
                    init: function (n) {
                        return n("Backbone", this.Backbone.noConflict(), !0)
                    }
                },
                cookies: "->Cookies",
                fx: "->Fx",
                exif: "->EXIF",
                "jquery.ui.core": "jquery->",
                "jquery.autocomplete": "jquery,jquery.ui.core,jquery.widget,jquery.position,jquery.menu->",
                "jquery.base64": "jquery->",
                "jquery.datatables": "jquery->",
                "jquery.datatables.extensions": "jquery,jquery.datatables->",
                "jquery.datepicker": "jquery,jquery.ui.core->",
                "jquery.delayed-observer": "jquery->",
                "jquery.draggable": "jquery,jquery.ui.core,jquery.widget,jquery.mouse->",
                "jquery.droppable": "jquery,jquery.draggable,jquery.ui.core,jquery.widget,jquery.mouse->",
                "jquery.fancytree": "jquery,jquery.ui.core,jquery.widget->",
                "jquery.hotkeys": "jquery->",
                "jquery.imgareaselect": "jquery->",
                "jquery.infinitescroll": "jquery->",
                "jquery.maskedinput": "jquery->",
                "jquery.maxlength": "jquery->",
                "jquery.menu": "jquery,jquery.ui.core,jquery.widget,jquery.position->",
                "jquery.mouse": "jquery,jquery.ui.core,jquery.widget->",
                "jquery.position": "jquery->",
                "jquery.resizable": "jquery,jquery.ui.core,jquery.widget,jquery.mouse->",
                "jquery.scroll-to": "jquery->",
                "jquery.selectable": "jquery,jquery.ui.core,jquery.widget,jquery.mouse->",
                "jquery.slider": "jquery,jquery.ui.core,jquery.widget,jquery.mouse->",
                "jquery.smartbanner": "jquery->",
                "jquery.sortable": "jquery,jquery.ui.core,jquery.widget,jquery.mouse->",
                "jquery.watermark": "jquery->",
                "jquery.widget": "jquery->",
                konami: "->Konami",
                "s3.jquery.fineuploader": "jquery->qq,MegaPixImage",
                silverlight: {
                    deps: "->Silverlight",
                    pre: "var Silverlight = window.Silverlight = {};"
                },
                "silverlight-control": "jquery,silverlight->SilverlightControl",
                spin: "->Spinner",
                "message-file-uploader": {
                    deps: "jquery->mm",
                    pre: "mm = window.mm = {};"
                }
            }
        },
        hbs: {
            disableI18n: !0,
            templateExtension: "htm",
            helperPathCallback: function (n) {
                return "plugins/hbs/helpers/" + n
            }
        },
        jqt: {
            templateViewsDirectory: "../../Views"
        },
        config: {
            moment: {
                noGlobal: !0
            }
        },
        skipDataMain: !0,
        enforceDefine: !0,
        waitSeconds: 30
    })
})();
/*!
 * jQuery JavaScript Library v2.0.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:30Z
 */
(function (n, t) {
    function kt(n) {
        var t = n.length,
            r = i.type(n);
        return i.isWindow(n) ? !1 : n.nodeType === 1 && t ? !0 : r === "array" || r !== "function" && (t === 0 || typeof t == "number" && t > 0 && t - 1 in n)
    }

    function ku(n) {
        var t = dt[n] = {};
        return i.each(n.match(h) || [], function (n, i) {
            t[i] = !0
        }), t
    }

    function c() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        });
        this.expando = i.expando + Math.random()
    }

    function pi(n, i, r) {
        var u;
        if (r === t && n.nodeType === 1)
            if (u = "data-" + i.replace(yi, "-$1").toLowerCase(), r = n.getAttribute(u), typeof r ==
                "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : vi.test(r) ? JSON.parse(r) : r
                } catch (e) {}
                f.set(n, i, r)
            } else r = t;
        return r
    }

    function ht() {
        return !0
    }

    function p() {
        return !1
    }

    function di() {
        try {
            return u.activeElement
        } catch (n) {}
    }

    function nr(n, t) {
        while ((n = n[t]) && n.nodeType !== 1);
        return n
    }

    function ni(n, t, r) {
        if (i.isFunction(t)) return i.grep(n, function (n, i) {
            return !!t.call(n, i, n) !== r
        });
        if (t.nodeType) return i.grep(n, function (n) {
            return n === t !== r
        });
        if (typeof t == "string") {
            if (uf.test(t)) return i.
            filter(t, n, r);
            t = i.filter(t, n)
        }
        return i.grep(n, function (n) {
            return et.call(t, n) >= 0 !== r
        })
    }

    function fr(n, t) {
        return i.nodeName(n, "table") && i.nodeName(t.nodeType === 1 ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }

    function af(n) {
        return n.type = (n.getAttribute("type") !== null) + "/" + n.type, n
    }

    function vf(n) {
        var t = cf.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"), n
    }

    function ti(n, t) {
        for (var u = n.length, i = 0; i < u; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
    }

    function er(n, t) {
        var e, c, o, s, h, l, a, u;
        if (t.nodeType === 1) {
            if (r.hasData(n) && (s = r.access(n), h = r.set(t, s), u = s.events, u)) {
                delete h.handle;
                h.events = {};
                for (o in u)
                    for (e = 0, c = u[o].length; e < c; e++) i.event.add(t, o, u[o][e])
            }
            f.hasData(n) && (l = f.access(n), a = i.extend({}, l), f.set(t, a))
        }
    }

    function o(n, r) {
        var u = n.getElementsByTagName ? n.getElementsByTagName(r || "*") : n.querySelectorAll ? n.querySelectorAll(r || "*") : [];
        return r === t || r && i.nodeName(n, r) ? i.merge([n], u) : u
    }

    function yf(n, t) {
        var i = t.nodeName.
        toLowerCase();
        i === "input" && rr.test(n.type) ? t.checked = n.checked : (i === "input" || i === "textarea") && (t.defaultValue = n.defaultValue)
    }

    function lr(n, t) {
        if (t in n) return t;
        for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = cr.length; i--;)
            if (t = cr[i] + r, t in n) return t;
        return u
    }

    function d(n, t) {
        return n = t || n, i.css(n, "display") === "none" || !i.contains(n.ownerDocument, n)
    }

    function ct(t) {
        return n.getComputedStyle(t, null)
    }

    function ar(n, t) {
        for (var e, u, s, o = [], f = 0, h = n.length; f < h; f++)(u = n[f], u.style) && (o[f] = r.get(u, "olddisplay"),
            e = u.style.display, t ? (o[f] || e !== "none" || (u.style.display = ""), u.style.display === "" && d(u) && (o[f] = r.access(u, "olddisplay", df(u.nodeName)))) : o[f] || (s = d(u), (e && e !== "none" || !s) && r.set(u, "olddisplay", s ? e : i.css(u, "display"))));
        for (f = 0; f < h; f++)(u = n[f], u.style) && (t && u.style.display !== "none" && u.style.display !== "" || (u.style.display = t ? o[f] || "" : "none"));
        return n
    }

    function vr(n, t, i) {
        var r = wf.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }

    function yr(n, t, r, u, f) {
        for (var e = r === (u ? "border" : "content") ? 4 : t ===
            "width" ? 1 : 0, o = 0; e < 4; e += 2) r === "margin" && (o += i.css(n, r + v[e], !0, f)), u ? (r === "content" && (o -= i.css(n, "padding" + v[e], !0, f)), r !== "margin" && (o -= i.css(n, "border" + v[e] + "Width", !0, f))) : (o += i.css(n, "padding" + v[e], !0, f), r !== "padding" && (o += i.css(n, "border" + v[e] + "Width", !0, f)));
        return o
    }

    function pr(n, t, r) {
        var e = !0,
            u = t === "width" ? n.offsetWidth : n.offsetHeight,
            f = ct(n),
            o = i.support.boxSizing && i.css(n, "boxSizing", !1, f) === "border-box";
        if (u <= 0 || u == null) {
            if (u = w(n, t, f), (u < 0 || u == null) && (u = n.style[t]), ii.test(u)) return u;
            e =
                o && (i.support.boxSizingReliable || u === n.style[t]);
            u = parseFloat(u) || 0
        }
        return u + yr(n, t, r || (o ? "border" : "content"), e, f) + "px"
    }

    function df(n) {
        var r = u,
            t = sr[n];
        return t || (t = wr(n, r), t !== "none" && t || (k = (k || i("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(r.documentElement), r = (k[0].contentWindow || k[0].contentDocument).document, r.write("<!doctype html><html><body>"), r.close(), t = wr(n, r), k.detach()), sr[n] = t), t
    }

    function wr(n, t) {
        var r = i(t.createElement(n)).appendTo(
                t.body),
            u = i.css(r[0], "display");
        return r.remove(), u
    }

    function ri(n, t, r, u) {
        var f;
        if (i.isArray(t)) i.each(t, function (t, i) {
            r || ne.test(n) ? u(n, i) : ri(n + "[" + (typeof i == "object" ? t : "") + "]", i, r, u)
        });
        else if (r || i.type(t) !== "object") u(n, t);
        else
            for (f in t) ri(n + "[" + f + "]", t[f], r, u)
    }

    function iu(n) {
        return function (t, r) {
            typeof t != "string" && (r = t, t = "*");
            var u, f = 0,
                e = t.toLowerCase().match(h) || [];
            if (i.isFunction(r))
                while (u = e[f++]) u[0] === "+" ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
        }
    }

    function ru(
        n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0, i.each(n[s] || [], function (n, i) {
                var s = i(t, r, u);
                if (typeof s != "string" || o || f[s]) {
                    if (o) return !(h = s)
                } else return t.dataTypes.unshift(s), e(s), !1
            }), h
        }
        var f = {},
            o = n === ei;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }

    function oi(n, r) {
        var u, f, e = i.ajaxSettings.flatOptions || {};
        for (u in r) r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
        return f && i.extend(!0, n, f), n
    }

    function oe(n, i, r) {
        for (var o, f, e, s, h = n.contents, u = n.dataTypes; u[0] === "*";) u.shift(), o === t && (o = n.mimeType || i.getResponseHeader(
            "Content-Type"));
        if (o)
            for (f in h)
                if (h[f] && h[f].test(o)) {
                    u.unshift(f);
                    break
                }
        if (u[0] in r) e = u[0];
        else {
            for (f in r) {
                if (!u[0] || n.converters[f + " " + u[0]]) {
                    e = f;
                    break
                }
                s || (s = f)
            }
            e = e || s
        } if (e) return e !== u[0] && u.unshift(e), r[e]
    }

    function se(n, t, i, r) {
        var h, u, f, s, e, o = {},
            c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u;)
            if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift(), u)
                if (u === "*") u = e;
                else if (
            e !== "*" && e !== u) {
            if (f = o[e + " " + u] || o["* " + u], !f)
                for (h in o)
                    if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]], f)) {
                        f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
                        break
                    }
            if (f !== !0)
                if (f && n.throws) t = f(t);
                else try {
                    t = f(t)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: f ? l : "No conversion from " + e + " to " + u
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function fu() {
        return setTimeout(function () {
            b = t
        }), b = i.now()
    }

    function eu(n, t, i) {
        for (var u, f = (tt[t] || []).concat(tt["*"]), r = 0, e = f.length; r < e; r++)
            if (u = f[r].call(i, t, n)) return u
    }

    function ou(n, t, r) {
        var e, o, s = 0,
            l = vt.length,
            f = i.Deferred().always(function () {
                delete c.elem
            }),
            c = function () {
                if (o) return !1;
                for (var s = b || fu(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, e = u.tweens.length; r < e; r++) u.tweens[r].run(i);
                return f.notifyWith(n, [u, i, t]), i < 1 && e ? t : (f.resolveWith(n, [u]), !1)
            },
            u = f.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, {
                    specialEasing: {}
                }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: b || fu(),
                duration: r.duration,
                tweens: [],
                createTween: function (
                    t, r) {
                    var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(f), f
                },
                stop: function (t) {
                    var i = 0,
                        r = t ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i < r; i++) u.tweens[i].run(1);
                    return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this
                }
            }),
            h = u.props;
        for (ve(h, u.opts.specialEasing); s < l; s++)
            if (e = vt[s].call(u, n, h, u.opts), e) return e;
        return i.map(h, eu, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function ve(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u) r in n || (n[r] = u[r], t[r] = e)
            } else t[f] = e
    }

    function ye(n, u, f) {
        var e, a, p, v, s, w, l = this,
            y = {},
            h = n.style,
            c = n.nodeType && d(n),
            o = r.get(n, "fxshow");
        f.queue || (s = i._queueHooks(n, "fx"), s.unqueued == null && (s.unqueued = 0, w = s.empty.fire, s.empty.fire = function () {
            s.unqueued || w()
        }), s.unqueued++, l.always(function () {
            l.always(function () {
                s.unqueued--;
                i.queue(n, "fx").length || s.empty.fire()
            })
        }));
        n.nodeType === 1 && ("height" in u || "width" in u) && (f.overflow = [h.overflow, h.overflowX, h.overflowY], i.css(n, "display") === "inline" && i.css(n, "float") === "none" && (h.display = "inline-block"));
        f.overflow && (h.overflow = "hidden", l.always(function () {
            h.overflow = f.overflow[0];
            h.overflowX = f.overflow[1];
            h.overflowY = f.overflow[2]
        }));
        for (e in u)
            if (a = u[e], le.exec(a)) {
                if (delete u[e], p = p || a === "toggle", a === (c ? "hide" : "show"))
                    if (a === "show" && o && o[e] !== t) c = !0;
                    else continue;
                y[e] = o && o[e] || i.style(n, e)
            }
        if (!i.isEmptyObject(y)) {
            o ? "hidden" in o && (c = o.hidden) : o = r.access(n, "fxshow", {});
            p && (o.hidden = !c);
            c ? i(n).show() : l.done(function () {
                i(n).hide()
            });
            l.done(function () {
                var t;
                r.remove(n, "fxshow");
                for (t in y) i.style(n, t, y[t])
            });
            for (e in y) v = eu(c ? o[e] : 0, e, l), e in o || (o[e] = v.start, c && (v.end = v.start, v.start = e === "width" || e === "height" ? 1 : 0))
        }
    }

    function e(n, t, i, r, u) {
        return new e.prototype.
        init(n, t, i, r, u)
    }

    function yt(n, t) {
        var r, i = {
                height: n
            },
            u = 0;
        for (t = t ? 1 : 0; u < 4; u += 2 - t) r = v[u], i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n), i
    }

    function su(n) {
        return i.isWindow(n) ? n : n.nodeType === 9 && n.defaultView
    }
    var hi, it, rt = typeof t,
        hu = n.location,
        u = n.document,
        ci = u.documentElement,
        cu = n.jQuery,
        lu = n.$,
        ut = {},
        ft = [],
        pt = "2.0.3",
        li = ft.concat,
        wt = ft.push,
        a = ft.slice,
        et = ft.indexOf,
        au = ut.toString,
        bt = ut.hasOwnProperty,
        vu = pt.trim,
        i = function (n, t) {
            return new i.fn.init(n, t, hi)
        },
        ot = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.
    source, h = /\S+/g, yu = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ai = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, pu = /^-ms-/, wu = /-([\da-z])/gi, bu = function (n, t) {
        return t.toUpperCase()
    }, st = function () {
        u.removeEventListener("DOMContentLoaded", st, !1);
        n.removeEventListener("load", st, !1);
        i.ready()
    }, dt, f, r, vi, yi, si, lt;
    i.fn = i.prototype = {
        jquery: pt,
        constructor: i,
        init: function (n, r, f) {
            var e, o;
            if (!n) return this;
            if (typeof n == "string") {
                if (e = n.charAt(0) === "<" && n.charAt(n.length - 1) === ">" && n.length >= 3 ? [null, n, null] : yu.exec(n), e && (e[1] || !r)) {
                    if (e[1]) {
                        if (r = r instanceof i ? r[0] : r, i.merge(this, i.parseHTML(e[1], r && r.nodeType ? r.ownerDocument || r : u, !0)), ai.test(e[1]) && i.isPlainObject(r))
                            for (e in r) i.isFunction(this[e]) ? this[e](r[e]) : this.attr(e, r[e]);
                        return this
                    }
                    return o = u.getElementById(e[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = u, this.selector = n, this
                }
                return !r || r.jquery ? (r || f).find(n) : this.constructor(r).find(n)
            }
            return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
        },
        selector: "",
        length: 0,
        toArray: function () {
            return a.call(this)
        },
        get: function (n) {
            return n == null ? this.toArray() : n < 0 ? this[this.length + n] : this[n]
        },
        pushStack: function (n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (n, t) {
            return i.each(this, n, t)
        },
        ready: function (n) {
            return i.ready.promise().done(n), this
        },
        slice: function () {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function () {
            return this.
            eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (n) {
            var i = this.length,
                t = +n + (n < 0 ? i : 0);
            return this.pushStack(t >= 0 && t < i ? [this[t]] : [])
        },
        map: function (n) {
            return this.pushStack(i.map(this, function (t, i) {
                return n.call(t, i, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: wt,
        sort: [].sort,
        splice: [].splice
    };
    i.fn.init.prototype = i.fn;
    i.extend = i.fn.extend = function () {
        var o, e, u, r, s, h, n = arguments[0] || {},
            f = 1,
            l = arguments.length,
            c = !1;
        for (typeof n == "boolean" && (c = n, n = arguments[1] || {}, f = 2),
            typeof n == "object" || i.isFunction(n) || (n = {}), l === f && (n = this, --f); f < l; f++)
            if ((o = arguments[f]) != null)
                for (e in o)(u = n[e], r = o[e], n !== r) && (c && r && (i.isPlainObject(r) || (s = i.isArray(r))) ? (s ? (s = !1, h = u && i.isArray(u) ? u : []) : h = u && i.isPlainObject(u) ? u : {}, n[e] = i.extend(c, h, r)) : r !== t && (n[e] = r));
        return n
    };
    i.extend({
        expando: "jQuery" + (pt + Math.random()).replace(/\D/g, ""),
        noConflict: function (t) {
            return n.$ === i && (n.$ = lu), t && n.jQuery === i && (n.jQuery = cu), i
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (n) {
            n ? i.readyWait++ : i.ready(!0)
        },
        ready: function (n) {
            (n === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, n !== !0 && --i.readyWait > 0) || (it.resolveWith(u, [i]), i.fn.trigger && i(u).trigger("ready").off("ready"))
        },
        isFunction: function (n) {
            return i.type(n) === "function"
        },
        isArray: Array.isArray,
        isWindow: function (n) {
            return n != null && n === n.window
        },
        isNumeric: function (n) {
            return !isNaN(parseFloat(n)) && isFinite(n)
        },
        type: function (n) {
            return n == null ? String(n) : typeof n == "object" || typeof n == "function" ? ut[au.call(n)] || "object" : typeof n
        },
        isPlainObject: function (
            n) {
            if (i.type(n) !== "object" || n.nodeType || i.isWindow(n)) return !1;
            try {
                if (n.constructor && !bt.call(n.constructor.prototype, "isPrototypeOf")) return !1
            } catch (t) {
                return !1
            }
            return !0
        },
        isEmptyObject: function (n) {
            var t;
            for (t in n) return !1;
            return !0
        },
        error: function (n) {
            throw new Error(n);
        },
        parseHTML: function (n, t, r) {
            if (!n || typeof n != "string") return null;
            typeof t == "boolean" && (r = t, t = !1);
            t = t || u;
            var f = ai.exec(n),
                e = !r && [];
            return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e), e && i(e).remove(), i.merge([], f.childNodes))
        },
        parseJSON: JSON.parse,
        parseXML: function (n) {
            var r, u;
            if (!n || typeof n != "string") return null;
            try {
                u = new DOMParser;
                r = u.parseFromString(n, "text/xml")
            } catch (f) {
                r = t
            }
            return (!r || r.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + n), r
        },
        noop: function () {},
        globalEval: function (n) {
            var t, r = eval;
            n = i.trim(n);
            n && (n.indexOf("use strict") === 1 ? (t = u.createElement("script"), t.text = n, u.head.appendChild(t).parentNode.removeChild(t)) : r(n))
        },
        camelCase: function (n) {
            return n.replace(pu, "ms-").replace(wu, bu)
        },
        nodeName: function (n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (n, t, i) {
            var u, r = 0,
                f = n.length,
                e = kt(n);
            if (i) {
                if (e) {
                    for (; r < f; r++)
                        if (u = t.apply(n[r], i), u === !1) break
                } else
                    for (r in n)
                        if (u = t.apply(n[r], i), u === !1) break
            } else if (e) {
                for (; r < f; r++)
                    if (u = t.call(n[r], r, n[r]), u === !1) break
            } else
                for (r in n)
                    if (u = t.call(n[r], r, n[r]), u === !1) break; return n
        },
        trim: function (n) {
            return n == null ? "" : vu.call(n)
        },
        makeArray: function (n, t) {
            var r = t || [];
            return n != null && (kt(Object(n)) ? i.merge(r, typeof n == "string" ? [n] : n) : wt.call(r, n)), r
        },
        inArray: function (n, t, i) {
            return t == null ? -1 : et.call(t, n, i)
        },
        merge: function (n, i) {
            var f = i.length,
                u = n.length,
                r = 0;
            if (typeof f == "number")
                for (; r < f; r++) n[u++] = i[r];
            else
                while (i[r] !== t) n[u++] = i[r++];
            return n.length = u, n
        },
        grep: function (n, t, i) {
            var u, f = [],
                r = 0,
                e = n.length;
            for (i = !!i; r < e; r++) u = !!t(n[r], r), i !== u && f.push(n[r]);
            return f
        },
        map: function (n, t, i) {
            var u, r = 0,
                e = n.length,
                o = kt(n),
                f = [];
            if (o)
                for (; r < e; r++) u = t(n[r], r, i), u != null && (f[f.length] = u);
            else
                for (r in n) u = t(n[r], r, i), u != null &&
                    (f[f.length] = u);
            return li.apply([], f)
        },
        guid: 1,
        proxy: function (n, r) {
            var f, e, u;
            return (typeof r == "string" && (f = n[r], r = n, n = f), !i.isFunction(n)) ? t : (e = a.call(arguments, 2), u = function () {
                return n.apply(r || this, e.concat(a.call(arguments)))
            }, u.guid = n.guid = n.guid || i.guid++, u)
        },
        access: function (n, r, u, f, e, o, s) {
            var h = 0,
                l = n.length,
                c = u == null;
            if (i.type(u) === "object") {
                e = !0;
                for (h in u) i.access(n, r, h, u[h], !0, o, s)
            } else if (f !== t && (e = !0, i.isFunction(f) || (s = !0), c && (s ? (r.call(n, f), r = null) : (c = r, r = function (n, t, r) {
                return c.call(
                    i(n), r)
            })), r))
                for (; h < l; h++) r(n[h], u, s ? f : f.call(n[h], h, r(n[h], u)));
            return e ? n : c ? r.call(n) : l ? r(n[0], u) : o
        },
        now: Date.now,
        swap: function (n, t, i, r) {
            var f, u, e = {};
            for (u in t) e[u] = n.style[u], n.style[u] = t[u];
            f = i.apply(n, r || []);
            for (u in t) n.style[u] = e[u];
            return f
        }
    });
    i.ready.promise = function (t) {
        return it || (it = i.Deferred(), u.readyState === "complete" ? setTimeout(i.ready) : (u.addEventListener("DOMContentLoaded", st, !1), n.addEventListener("load", st, !1))), it.promise(t)
    };
    i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (n, t) {
        ut["[object " + t + "]"] = t.toLowerCase()
    });
    hi = i(u);
    /*!
     * Sizzle CSS Selector Engine v1.9.4-pre
     * http://sizzlejs.com/
     *
     * Copyright 2013 jQuery Foundation, Inc. and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2013-06-03
     */
    (function (n, t) {
        function u(n, t, i, r) {
            var p, u, f, l, w, a, k, c, g, d;
            if ((t ? t.ownerDocument || t : y) !== s && nt(t), t = t || s, i = i || [], !n || typeof n != "string") return i;
            if ((l = t.nodeType) !== 1 && l !== 9) return [];
            if (v && !r) {
                if (p = or.exec(n))
                    if (f = p[1]) {
                        if (l === 9)
                            if (u = t.getElementById(f), u && u.parentNode) {
                                if (u.id === f) return i.push(u), i
                            } else return i;
                        else if (t.ownerDocument && (u = t.ownerDocument.getElementById(f)) && ot(t, u) && u.id === f) return i.push(u), i
                    } else {
                        if (p[2]) return b.apply(i, t.getElementsByTagName(n)), i;
                        if ((f = p[3]) && e.getElementsByClassName &&
                            t.getElementsByClassName) return b.apply(i, t.getElementsByClassName(f)), i
                    }
                if (e.qsa && (!h || !h.test(n))) {
                    if (c = k = o, g = t, d = l === 9 && n, l === 1 && t.nodeName.toLowerCase() !== "object") {
                        for (a = pt(n), (k = t.getAttribute("id")) ? c = k.replace(cr, "\\$&") : t.setAttribute("id", c), c = "[id='" + c + "'] ", w = a.length; w--;) a[w] = c + wt(a[w]);
                        g = ti.test(n) && t.parentNode || t;
                        d = a.join(",")
                    }
                    if (d) try {
                        return b.apply(i, g.querySelectorAll(d)), i
                    } catch (tt) {} finally {
                        k || t.removeAttribute("id")
                    }
                }
            }
            return pr(n.replace(vt, "$1"), t, i, r)
        }

        function ri() {
            function n(
                i, u) {
                return t.push(i += " ") > r.cacheLength && delete n[t.shift()], n[i] = u
            }
            var t = [];
            return n
        }

        function c(n) {
            return n[o] = !0, n
        }

        function l(n) {
            var t = s.createElement("div");
            try {
                return !!n(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }

        function ui(n, t) {
            for (var u = n.split("|"), i = n.length; i--;) r.attrHandle[u[i]] = t
        }

        function bi(n, t) {
            var i = t && n,
                r = i && n.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || vi) - (~n.sourceIndex || vi);
            if (r) return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t) return -1;
            return n ?
                1 : -1
        }

        function lr(n) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return i === "input" && t.type === n
            }
        }

        function ar(n) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return (i === "input" || i === "button") && t.type === n
            }
        }

        function rt(n) {
            return c(function (t) {
                return t = +t, c(function (i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }

        function ki() {}

        function pt(n, t) {
            var e, f, s, o, i, h, c, l = li[n + " "];
            if (l) return t ? 0 : l.slice(0);
            for (i = n, h = [], c = r.preFilter; i;) {
                (!e || (f = ir.exec(i))) &&
                    (f && (i = i.slice(f[0].length) || i), h.push(s = []));
                e = !1;
                (f = rr.exec(i)) && (e = f.shift(), s.push({
                    value: e,
                    type: f[0].replace(vt, " ")
                }), i = i.slice(e.length));
                for (o in r.filter)(f = yt[o].exec(i)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                    value: e,
                    type: o,
                    matches: f
                }), i = i.slice(e.length));
                if (!e) break
            }
            return t ? i.length : i ? u.error(n) : li(n, h).slice(0)
        }

        function wt(n) {
            for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
            return i
        }

        function fi(n, t, i) {
            var r = t.dir,
                u = i && r === "parentNode",
                f = di++;
            return t.first ? function (t, i, f) {
                while (
                    t = t[r])
                    if (t.nodeType === 1 || u) return n(t, i, f)
            } : function (t, i, e) {
                var h, s, c, l = p + " " + f;
                if (e) {
                    while (t = t[r])
                        if ((t.nodeType === 1 || u) && n(t, i, e)) return !0
                } else
                    while (t = t[r])
                        if (t.nodeType === 1 || u)
                            if (c = t[o] || (t[o] = {}), (s = c[r]) && s[0] === l) {
                                if ((h = s[1]) === !0 || h === ht) return h === !0
                            } else if (s = c[r] = [l], s[1] = n(t, i, e) || ht, s[1] === !0) return !0
            }
        }

        function ei(n) {
            return n.length > 1 ? function (t, i, r) {
                for (var u = n.length; u--;)
                    if (!n[u](t, i, r)) return !1;
                return !0
            } : n[0]
        }

        function bt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = t != null; f < s; f++)
                (e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
            return o
        }

        function oi(n, t, i, r, u, f) {
            return r && !r[o] && (r = oi(r)), u && !u[o] && (u = oi(u, f)), c(function (f, e, o, s) {
                var l, c, a, p = [],
                    y = [],
                    w = e.length,
                    k = f || yr(t || "*", o.nodeType ? [o] : o, []),
                    v = n && (f || !t) ? bt(k, p, n, o, s) : k,
                    h = i ? u || (f ? n : w || r) ? [] : e : v;
                if (i && i(v, h, o, s), r)
                    for (l = bt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--;)(a = h[c]) && (l = u ? it.call(
                            f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                    }
                } else h = bt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : b.apply(e, h)
            })
        }

        function si(n) {
            for (var s, u, i, e = n.length, h = r.relative[n[0].type], c = h || r.relative[" "], t = h ? 1 : 0, l = fi(function (n) {
                return n === s
            }, c, !0), a = fi(function (n) {
                return it.call(s, n) > -1
            }, c, !0), f = [
                function (n, t, i) {
                    return !h && (i || t !== lt) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i))
                }]; t < e; t++)
                if (u = r.relative[n[t].type]) f = [fi(ei(f), u)];
                else {
                    if (u = r.filter[n[t].type].apply(null, n[t].matches), u[o]) {
                        for (i = ++t; i < e; i++)
                            if (r.relative[
                                n[i].type]) break;
                        return oi(t > 1 && ei(f), t > 1 && wt(n.slice(0, t - 1).concat({
                            value: n[t - 2].type === " " ? "*" : ""
                        })).replace(vt, "$1"), u, t < i && si(n.slice(t, i)), i < e && si(n = n.slice(i)), i < e && wt(n))
                    }
                    f.push(u)
                }
            return ei(f)
        }

        function vr(n, t) {
            var f = 0,
                i = t.length > 0,
                e = n.length > 0,
                o = function (o, h, c, l, a) {
                    var y, g, k, w = [],
                        d = 0,
                        v = "0",
                        nt = o && [],
                        tt = a != null,
                        it = lt,
                        ut = o || e && r.find.TAG("*", a && h.parentNode || h),
                        rt = p += it == null ? 1 : Math.random() || .1;
                    for (tt && (lt = h !== s && h, ht = f);
                        (y = ut[v]) != null; v++) {
                        if (e && y) {
                            for (g = 0; k = n[g++];)
                                if (k(y, h, c)) {
                                    l.push(y);
                                    break
                                }
                            tt && (p = rt, ht = ++f)
                        }
                        i && ((y = !k && y) && d--, o && nt.push(y))
                    }
                    if (d += v, i && v !== d) {
                        for (g = 0; k = t[g++];) k(nt, w, h, c);
                        if (o) {
                            if (d > 0)
                                while (v--) nt[v] || w[v] || (w[v] = nr.call(l));
                            w = bt(w)
                        }
                        b.apply(l, w);
                        tt && !o && w.length > 0 && d + t.length > 1 && u.uniqueSort(l)
                    }
                    return tt && (p = rt, lt = it), nt
                };
            return i ? c(o) : o
        }

        function yr(n, t, i) {
            for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i);
            return i
        }

        function pr(n, t, i, u) {
            var s, f, o, c, l, h = pt(n);
            if (!u && h.length === 1) {
                if (f = h[0] = h[0].slice(0), f.length > 2 && (o = f[0]).type === "ID" && e.getById && t.nodeType === 9 && v && r.relative[f[1].type]) {
                    if (t = (r.find.ID(o.matches[0].replace(k, d), t) || [])[0], !t) return i;
                    n = n.slice(f.shift().value.length)
                }
                for (s = yt.needsContext.test(n) ? 0 : f.length; s--;) {
                    if (o = f[s], r.relative[c = o.type]) break;
                    if ((l = r.find[c]) && (u = l(o.matches[0].replace(k, d), ti.test(f[0].type) && t.parentNode || t))) {
                        if (f.splice(s, 1), n = u.length && wt(f), !n) return b.apply(i, u), i;
                        break
                    }
                }
            }
            return kt(n, h)(u, t, !v, i, ti.test(n)), i
        }
        var ut, e, ht, r, ct, hi, kt, lt, g, nt, s, a, v, h, tt, at, ot, o = "sizzle" + -new Date,
            y = n.document,
            p = 0,
            di = 0,
            ci = ri(),
            li =
            ri(),
            ai = ri(),
            ft = !1,
            dt = function (n, t) {
                return n === t ? (ft = !0, 0) : 0
            },
            st = typeof t,
            vi = -2147483648,
            gi = {}.hasOwnProperty,
            w = [],
            nr = w.pop,
            tr = w.push,
            b = w.push,
            yi = w.slice,
            it = w.indexOf || function (n) {
                for (var t = 0, i = this.length; t < i; t++)
                    if (this[t] === n) return t;
                return -1
            },
            gt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            f = "[\\x20\\t\\r\\n\\f]",
            et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            pi = et.replace("w", "w#"),
            wi = "\\[" + f + "*(" + et + ")" + f + "*(?:([*^$|!~]?=)" +
            f + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + pi + ")|)|)" + f + "*\\]",
            ni = ":(" + et + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + wi.replace(3, 8) + ")*)|.*)\\)|)",
            vt = new RegExp("^" + f + "+|((?:^|[^\\\\])(?:\\\\.)*)" + f + "+$", "g"),
            ir = new RegExp("^" + f + "*," + f + "*"),
            rr = new RegExp("^" + f + "*([>+~]|" + f + ")" + f + "*"),
            ti = new RegExp(f + "*[+~]"),
            ur = new RegExp("=" + f + "*([^\\]'\"]*)" + f + "*\\]", "g"),
            fr = new RegExp(ni),
            er = new RegExp("^" + pi + "$"),
            yt = {
                ID: new RegExp("^#(" + et + ")"),
                CLASS: new RegExp("^\\.(" + et + ")"),
                TAG: new
                RegExp("^(" + et.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + wi),
                PSEUDO: new RegExp("^" + ni),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + f + "*(even|odd|(([+-]|)(\\d*)n|)" + f + "*(?:([+-]|)" + f + "*(\\d+)|))" + f + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + gt + ")$", "i"),
                needsContext: new RegExp("^" + f + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + f + "*((?:-\\d)?\\d*)" + f + "*\\)|)(?=[^-]|$)", "i")
            },
            ii = /^[^{]+\{\s*\[native \w/,
            or = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            sr = /^(?:input|select|textarea|button)$/i,
            hr = /^h\d$/i,
            cr = /'|\\/g,
            k = new RegExp("\\\\([\\da-f]{1,6}" + f + "?|(" + f + ")|.)", "ig"),
            d = function (n, t, i) {
                var r = "0x" + t - 65536;
                return r !== r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
            };
        try {
            b.apply(w = yi.call(y.childNodes), y.childNodes);
            w[y.childNodes.length].nodeType
        } catch (wr) {
            b = {
                apply: w.length ? function (n, t) {
                    tr.apply(n, yi.call(t))
                } : function (n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++];);
                    n.length = i - 1
                }
            }
        }
        hi = u.isXML = function (n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        };
        e = u.support = {};
        nt = u.setDocument = function (n) {
            var t = n ? n.ownerDocument || n : y,
                i = t.defaultView;
            return t === s || t.nodeType !== 9 || !t.documentElement ? s : (s = t, a = t.documentElement, v = !hi(t), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function () {
                    nt()
                }), e.attributes = l(function (n) {
                    return n.className = "i", !n.getAttribute("className")
                }), e.getElementsByTagName = l(function (n) {
                    return n.appendChild(t.createComment("")), !n.getElementsByTagName("*").length
                }), e.getElementsByClassName =
                l(function (n) {
                    return n.innerHTML = "<div class='a'><\/div><div class='a i'><\/div>", n.firstChild.className = "i", n.getElementsByClassName("i").length === 2
                }), e.getById = l(function (n) {
                    return a.appendChild(n).id = o, !t.getElementsByName || !t.getElementsByName(o).length
                }), e.getById ? (r.find.ID = function (n, t) {
                    if (typeof t.getElementById !== st && v) {
                        var i = t.getElementById(n);
                        return i && i.parentNode ? [i] : []
                    }
                }, r.filter.ID = function (n) {
                    var t = n.replace(k, d);
                    return function (n) {
                        return n.getAttribute("id") === t
                    }
                }) : (delete r.find.ID, r.filter.ID = function (n) {
                    var t = n.replace(k, d);
                    return function (n) {
                        var i = typeof n.getAttributeNode !== st && n.getAttributeNode("id");
                        return i && i.value === t
                    }
                }), r.find.TAG = e.getElementsByTagName ? function (n, t) {
                    if (typeof t.getElementsByTagName !== st) return t.getElementsByTagName(n)
                } : function (n, t) {
                    var i, r = [],
                        f = 0,
                        u = t.getElementsByTagName(n);
                    if (n === "*") {
                        while (i = u[f++]) i.nodeType === 1 && r.push(i);
                        return r
                    }
                    return u
                }, r.find.CLASS = e.getElementsByClassName && function (n, t) {
                    if (typeof t.getElementsByClassName !== st && v)
                        return t.getElementsByClassName(n)
                }, tt = [], h = [], (e.qsa = ii.test(t.querySelectorAll)) && (l(function (n) {
                    n.innerHTML = "<select><option selected=''><\/option><\/select>";
                    n.querySelectorAll("[selected]").length || h.push("\\[" + f + "*(?:value|" + gt + ")");
                    n.querySelectorAll(":checked").length || h.push(":checked")
                }), l(function (n) {
                    var i = t.createElement("input");
                    i.setAttribute("type", "hidden");
                    n.appendChild(i).setAttribute("t", "");
                    n.querySelectorAll("[t^='']").length && h.push("[*^$]=" + f + "*(?:''|\"\")");
                    n.querySelectorAll(
                        ":enabled").length || h.push(":enabled", ":disabled");
                    n.querySelectorAll("*,:x");
                    h.push(",.*:")
                })), (e.matchesSelector = ii.test(at = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && l(function (n) {
                    e.disconnectedMatch = at.call(n, "div");
                    at.call(n, "[s!='']:x");
                    tt.push("!=", ni)
                }), h = h.length && new RegExp(h.join("|")), tt = tt.length && new RegExp(tt.join("|")), ot = ii.test(a.contains) || a.compareDocumentPosition ? function (n, t) {
                    var r = n.nodeType === 9 ? n.documentElement : n,
                        i = t && t.parentNode;
                    return n === i || !!(i && i.nodeType === 1 && (r.contains ? r.contains(i) : n.compareDocumentPosition && n.compareDocumentPosition(i) & 16))
                } : function (n, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === n) return !0;
                    return !1
                }, dt = a.compareDocumentPosition ? function (n, i) {
                    if (n === i) return ft = !0, 0;
                    var r = i.compareDocumentPosition && n.compareDocumentPosition && n.compareDocumentPosition(i);
                    return r ? r & 1 || !e.sortDetached && i.compareDocumentPosition(n) === r ? n === t || ot(y, n) ? -1 : i === t || ot(y, i) ? 1 : g ? it.call(g, n) - it.call(g, i) : 0 : r & 4 ? -1 : 1 : n.compareDocumentPosition ?
                        -1 : 1
                } : function (n, i) {
                    var r, u = 0,
                        o = n.parentNode,
                        s = i.parentNode,
                        f = [n],
                        e = [i];
                    if (n === i) return ft = !0, 0;
                    if (o && s) {
                        if (o === s) return bi(n, i)
                    } else return n === t ? -1 : i === t ? 1 : o ? -1 : s ? 1 : g ? it.call(g, n) - it.call(g, i) : 0;
                    for (r = n; r = r.parentNode;) f.unshift(r);
                    for (r = i; r = r.parentNode;) e.unshift(r);
                    while (f[u] === e[u]) u++;
                    return u ? bi(f[u], e[u]) : f[u] === y ? -1 : e[u] === y ? 1 : 0
                }, t)
        };
        u.matches = function (n, t) {
            return u(n, null, null, t)
        };
        u.matchesSelector = function (n, t) {
            if ((n.ownerDocument || n) !== s && nt(n), t = t.replace(ur, "='$1']"), e.matchesSelector &&
                v && (!tt || !tt.test(t)) && (!h || !h.test(t))) try {
                var i = at.call(n, t);
                if (i || e.disconnectedMatch || n.document && n.document.nodeType !== 11) return i
            } catch (r) {}
            return u(t, s, null, [n]).length > 0
        };
        u.contains = function (n, t) {
            return (n.ownerDocument || n) !== s && nt(n), ot(n, t)
        };
        u.attr = function (n, i) {
            (n.ownerDocument || n) !== s && nt(n);
            var f = r.attrHandle[i.toLowerCase()],
                u = f && gi.call(r.attrHandle, i.toLowerCase()) ? f(n, i, !v) : t;
            return u === t ? e.attributes || !v ? n.getAttribute(i) : (u = n.getAttributeNode(i)) && u.specified ? u.value : null : u
        };
        u.
        error = function (n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        };
        u.uniqueSort = function (n) {
            var r, u = [],
                t = 0,
                i = 0;
            if (ft = !e.detectDuplicates, g = !e.sortStable && n.slice(0), n.sort(dt), ft) {
                while (r = n[i++]) r === n[i] && (t = u.push(i));
                while (t--) n.splice(u[t], 1)
            }
            return n
        };
        ct = u.getText = function (n) {
            var r, i = "",
                u = 0,
                t = n.nodeType;
            if (t) {
                if (t === 1 || t === 9 || t === 11) {
                    if (typeof n.textContent == "string") return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling) i += ct(n)
                } else if (t === 3 || t === 4) return n.nodeValue
            } else
                for (; r = n[u]; u++) i += ct(r);
            return i
        };
        r = u.selectors = {
            cacheLength: 50,
            createPseudo: c,
            match: yt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (n) {
                    return n[1] = n[1].replace(k, d), n[3] = (n[4] || n[5] || "").replace(k, d), n[2] === "~=" && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                },
                CHILD: function (n) {
                    return n[1] = n[1].toLowerCase(), n[1].slice(0, 3) === "nth" ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 *
                        (n[3] === "even" || n[3] === "odd")), n[5] = +(n[7] + n[8] || n[3] === "odd")) : n[3] && u.error(n[0]), n
                },
                PSEUDO: function (n) {
                    var r, i = !n[5] && n[2];
                    return yt.CHILD.test(n[0]) ? null : (n[3] && n[4] !== t ? n[2] = n[4] : i && fr.test(i) && (r = pt(i, !0)) && (r = i.indexOf(")", i.length - r) - i.length) && (n[0] = n[0].slice(0, r), n[2] = i.slice(0, r)), n.slice(0, 3))
                }
            },
            filter: {
                TAG: function (n) {
                    var t = n.replace(k, d).toLowerCase();
                    return n === "*" ? function () {
                        return !0
                    } : function (n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (n) {
                    var t = ci[n + " "];
                    return t || (t = new RegExp("(^|" + f + ")" + n + "(" + f + "|$)")) && ci(n, function (n) {
                        return t.test(typeof n.className == "string" && n.className || typeof n.getAttribute !== st && n.getAttribute("class") || "")
                    })
                },
                ATTR: function (n, t, i) {
                    return function (r) {
                        var f = u.attr(r, n);
                        return f == null ? t === "!=" : t ? (f += "", t === "=" ? f === i : t === "!=" ? f !== i : t === "^=" ? i && f.indexOf(i) === 0 : t === "*=" ? i && f.indexOf(i) > -1 : t === "$=" ? i && f.slice(-i.length) === i : t === "~=" ? (" " + f + " ").indexOf(i) > -1 : t === "|=" ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function (
                    n, t, i, r, u) {
                    var s = n.slice(0, 3) !== "nth",
                        e = n.slice(-4) !== "last",
                        f = t === "of-type";
                    return r === 1 && u === 0 ? function (n) {
                        return !!n.parentNode
                    } : function (t, i, h) {
                        var a, k, c, l, v, w, b = s !== e ? "nextSibling" : "previousSibling",
                            y = t.parentNode,
                            g = f && t.nodeName.toLowerCase(),
                            d = !h && !f;
                        if (y) {
                            if (s) {
                                while (b) {
                                    for (c = t; c = c[b];)
                                        if (f ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1;
                                    w = b = n === "only" && !w && "nextSibling"
                                }
                                return !0
                            }
                            if (w = [e ? y.firstChild : y.lastChild], e && d) {
                                for (k = y[o] || (y[o] = {}), a = k[n] || [], v = a[0] === p && a[1], l = a[0] === p && a[2],
                                    c = v && y.childNodes[v]; c = ++v && c && c[b] || (l = v = 0) || w.pop();)
                                    if (c.nodeType === 1 && ++l && c === t) {
                                        k[n] = [p, v, l];
                                        break
                                    }
                            } else if (d && (a = (t[o] || (t[o] = {}))[n]) && a[0] === p) l = a[1];
                            else
                                while (c = ++v && c && c[b] || (l = v = 0) || w.pop())
                                    if ((f ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++l && (d && ((c[o] || (c[o] = {}))[n] = [p, l]), c === t)) break; return l -= u, l === r || l % r == 0 && l / r >= 0
                        }
                    }
                },
                PSEUDO: function (n, t) {
                    var f, i = r.pseudos[n] || r.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                    return i[o] ? i(t) : i.length > 1 ? (f = [n, n, "", t], r.setFilters.hasOwnProperty(n.toLowerCase()) ? c(function (n, r) {
                        for (var u, f = i(n, t), e = f.length; e--;) u = it.call(n, f[e]), n[u] = !(r[u] = f[e])
                    }) : function (n) {
                        return i(n, 0, f)
                    }) : i
                }
            },
            pseudos: {
                not: c(function (n) {
                    var i = [],
                        r = [],
                        t = kt(n.replace(vt, "$1"));
                    return t[o] ? c(function (n, i, r, u) {
                        for (var e, o = t(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(i[f] = e))
                    }) : function (n, u, f) {
                        return i[0] = n, t(i, null, f, r), !r.pop()
                    }
                }),
                has: c(function (n) {
                    return function (t) {
                        return u(n, t).length > 0
                    }
                }),
                contains: c(function (n) {
                    return function (t) {
                        return (t.textContent ||
                            t.innerText || ct(t)).indexOf(n) > -1
                    }
                }),
                lang: c(function (n) {
                    return er.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(k, d).toLowerCase(),
                        function (t) {
                            var i;
                            do
                                if (i = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === n || i.indexOf(n + "-") === 0;
                            while ((t = t.parentNode) && t.nodeType === 1);
                            return !1
                        }
                }),
                target: function (t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function (n) {
                    return n === a
                },
                focus: function (n) {
                    return n === s.activeElement && (!s.hasFocus ||
                        s.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: function (n) {
                    return n.disabled === !1
                },
                disabled: function (n) {
                    return n.disabled === !0
                },
                checked: function (n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && !!n.checked || t === "option" && !!n.selected
                },
                selected: function (n) {
                    return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                },
                empty: function (n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeName > "@" || n.nodeType === 3 || n.nodeType === 4) return !1;
                    return !0
                },
                parent: function (n) {
                    return !r.pseudos.empty(
                        n)
                },
                header: function (n) {
                    return hr.test(n.nodeName)
                },
                input: function (n) {
                    return sr.test(n.nodeName)
                },
                button: function (n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && n.type === "button" || t === "button"
                },
                text: function (n) {
                    var t;
                    return n.nodeName.toLowerCase() === "input" && n.type === "text" && ((t = n.getAttribute("type")) == null || t.toLowerCase() === n.type)
                },
                first: rt(function () {
                    return [0]
                }),
                last: rt(function (n, t) {
                    return [t - 1]
                }),
                eq: rt(function (n, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: rt(function (n, t) {
                    for (var i = 0; i < t; i += 2) n.
                    push(i);
                    return n
                }),
                odd: rt(function (n, t) {
                    for (var i = 1; i < t; i += 2) n.push(i);
                    return n
                }),
                lt: rt(function (n, t, i) {
                    for (var r = i < 0 ? i + t : i; --r >= 0;) n.push(r);
                    return n
                }),
                gt: rt(function (n, t, i) {
                    for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
                    return n
                })
            }
        };
        r.pseudos.nth = r.pseudos.eq;
        for (ut in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) r.pseudos[ut] = lr(ut);
        for (ut in {
            submit: !0,
            reset: !0
        }) r.pseudos[ut] = ar(ut);
        ki.prototype = r.filters = r.pseudos;
        r.setFilters = new ki;
        kt = u.compile = function (n, t) {
            var r, u = [],
                f = [],
                i = ai[n + " "];
            if (!i) {
                for (t || (t = pt(n)), r = t.length; r--;) i = si(t[r]), i[o] ? u.push(i) : f.push(i);
                i = ai(n, vr(f, u))
            }
            return i
        };
        e.sortStable = o.split("").sort(dt).join("") === o;
        e.detectDuplicates = ft;
        nt();
        e.sortDetached = l(function (n) {
            return n.compareDocumentPosition(s.createElement("div")) & 1
        });
        l(function (n) {
            return n.innerHTML = "<a href='#'><\/a>", n.firstChild.getAttribute("href") === "#"
        }) || ui("type|href|height|width", function (n, t, i) {
            if (!i) return n.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
        });
        e.attributes && l(function (n) {
            return n.innerHTML =
                "<input/>", n.firstChild.setAttribute("value", ""), n.firstChild.getAttribute("value") === ""
        }) || ui("value", function (n, t, i) {
            if (!i && n.nodeName.toLowerCase() === "input") return n.defaultValue
        });
        l(function (n) {
            return n.getAttribute("disabled") == null
        }) || ui(gt, function (n, t, i) {
            var r;
            if (!i) return (r = n.getAttributeNode(t)) && r.specified ? r.value : n[t] === !0 ? t.toLowerCase() : null
        });
        i.find = u;
        i.expr = u.selectors;
        i.expr[":"] = i.expr.pseudos;
        i.unique = u.uniqueSort;
        i.text = u.getText;
        i.isXMLDoc = u.isXML;
        i.contains = u.contains
    })(n);
    dt = {};
    i.Callbacks = function (n) {
        n = typeof n == "string" ? dt[n] || ku(n) : i.extend({}, n);
        var f, c, s, l, e, o, r = [],
            u = !n.once && [],
            a = function (t) {
                for (f = n.memory && t, c = !0, o = l || 0, l = 0, e = r.length, s = !0; r && o < e; o++)
                    if (r[o].apply(t[0], t[1]) === !1 && n.stopOnFalse) {
                        f = !1;
                        break
                    }
                s = !1;
                r && (u ? u.length && a(u.shift()) : f ? r = [] : h.disable())
            },
            h = {
                add: function () {
                    if (r) {
                        var t = r.length;
                        (function u(t) {
                            i.each(t, function (t, f) {
                                var e = i.type(f);
                                e === "function" ? n.unique && h.has(f) || r.push(f) : f && f.length && e !== "string" && u(f)
                            })
                        })(arguments);
                        s ? e = r.length : f &&
                            (l = t, a(f))
                    }
                    return this
                },
                remove: function () {
                    return r && i.each(arguments, function (n, t) {
                        for (var u;
                            (u = i.inArray(t, r, u)) > -1;) r.splice(u, 1), s && (u <= e && e--, u <= o && o--)
                    }), this
                },
                has: function (n) {
                    return n ? i.inArray(n, r) > -1 : !!(r && r.length)
                },
                empty: function () {
                    return r = [], e = 0, this
                },
                disable: function () {
                    return r = u = f = t, this
                },
                disabled: function () {
                    return !r
                },
                lock: function () {
                    return u = t, f || h.disable(), this
                },
                locked: function () {
                    return !u
                },
                fireWith: function (n, t) {
                    return r && (!c || u) && (t = t || [], t = [n, t.slice ? t.slice() : t], s ? u.push(t) : a(
                        t)), this
                },
                fire: function () {
                    return h.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!c
                }
            };
        return h
    };
    i.extend({
        Deferred: function (n) {
            var u = [["resolve", "done", i.Callbacks("once memory"), "resolved"], ["reject", "fail", i.Callbacks("once memory"), "rejected"], ["notify", "progress", i.Callbacks("memory")]],
                f = "pending",
                r = {
                    state: function () {
                        return f
                    },
                    always: function () {
                        return t.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var n = arguments;
                        return i.Deferred(function (f) {
                            i.each(u, function (u, e) {
                                var s = e[
                                        0],
                                    o = i.isFunction(n[u]) && n[u];
                                t[e[1]](function () {
                                    var n = o && o.apply(this, arguments);
                                    n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[s + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                                })
                            });
                            n = null
                        }).promise()
                    },
                    promise: function (n) {
                        return n != null ? i.extend(n, r) : r
                    }
                },
                t = {};
            return r.pipe = r.then, i.each(u, function (n, i) {
                var e = i[2],
                    o = i[3];
                r[i[1]] = e.add;
                o && e.add(function () {
                    f = o
                }, u[n ^ 1][2].disable, u[2][2].lock);
                t[i[0]] = function () {
                    return t[i[0] + "With"](this === t ? r : this, arguments),
                        this
                };
                t[i[0] + "With"] = e.fireWith
            }), r.promise(t), n && n.call(t, t), t
        },
        when: function (n) {
            var t = 0,
                u = a.call(arguments),
                r = u.length,
                e = r !== 1 || n && i.isFunction(n.promise) ? r : 0,
                f = e === 1 ? n : i.Deferred(),
                h = function (n, t, i) {
                    return function (r) {
                        t[n] = this;
                        i[n] = arguments.length > 1 ? a.call(arguments) : r;
                        i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                    }
                },
                o, c, s;
            if (r > 1)
                for (o = new Array(r), c = new Array(r), s = new Array(r); t < r; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
            return e ||
                f.resolveWith(s, u), f.promise()
        }
    });
    i.support = function (t) {
        var r = u.createElement("input"),
            e = u.createDocumentFragment(),
            f = u.createElement("div"),
            o = u.createElement("select"),
            s = o.appendChild(u.createElement("option"));
        return r.type ? (r.type = "checkbox", t.checkOn = r.value !== "", t.optSelected = s.selected, t.reliableMarginRight = !0, t.boxSizingReliable = !0, t.pixelPosition = !1, r.checked = !0, t.noCloneChecked = r.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled, r = u.createElement("input"), r.value = "t", r.type =
            "radio", t.radioValue = r.value === "t", r.setAttribute("checked", "t"), r.setAttribute("name", "t"), e.appendChild(r), t.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, t.focusinBubbles = "onfocusin" in n, f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = f.style.backgroundClip === "content-box", i(function () {
                var o, r, e = u.getElementsByTagName("body")[0];
                e && (o = u.createElement("div"), o.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
                    e.appendChild(o).appendChild(f), f.innerHTML = "", f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", i.swap(e, e.style.zoom != null ? {
                        zoom: 1
                    } : {}, function () {
                        t.boxSizing = f.offsetWidth === 4
                    }), n.getComputedStyle && (t.pixelPosition = (n.getComputedStyle(f, null) || {}).top !== "1%", t.boxSizingReliable = (n.getComputedStyle(f, null) || {
                        width: "4px"
                    }).width === "4px", r = f.appendChild(u.createElement(
                        "div")), r.style.cssText = f.style.cssText = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", r.style.marginRight = r.style.width = "0", f.style.width = "1px", t.reliableMarginRight = !parseFloat((n.getComputedStyle(r, null) || {}).marginRight)), e.removeChild(o))
            }), t) : t
    }({});
    vi = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/;
    yi = /([A-Z])/g;
    c.uid = 1;
    c.accepts = function (n) {
        return n.nodeType ? n.nodeType === 1 || n.nodeType === 9 : !0
    };
    c.prototype = {
        key: function (n) {
            if (!c.accepts(n)) return 0;
            var r = {},
                t = n[this.expando];
            if (!t) {
                t = c.uid++;
                try {
                    r[this.expando] = {
                        value: t
                    };
                    Object.defineProperties(n, r)
                } catch (u) {
                    r[this.expando] = t;
                    i.extend(n, r)
                }
            }
            return this.cache[t] || (this.cache[t] = {}), t
        },
        set: function (n, t, r) {
            var f, e = this.key(n),
                u = this.cache[e];
            if (typeof t == "string") u[t] = r;
            else if (i.isEmptyObject(u)) i.extend(this.cache[e], t);
            else
                for (f in t) u[f] = t[f];
            return u
        },
        get: function (n, i) {
            var r = this.cache[this.key(n)];
            return i === t ? r : r[i]
        },
        access: function (n, r, u) {
            var f;
            return r === t || r && typeof
            r == "string" && u === t ? (f = this.get(n, r), f !== t ? f : this.get(n, i.camelCase(r))) : (this.set(n, r, u), u !== t ? u : r)
        },
        remove: function (n, r) {
            var f, u, e, s = this.key(n),
                o = this.cache[s];
            if (r === t) this.cache[s] = {};
            else
                for (i.isArray(r) ? u = r.concat(r.map(i.camelCase)) : (e = i.camelCase(r), r in o ? u = [r, e] : (u = e, u = u in o ? [u] : u.match(h) || [])), f = u.length; f--;) delete o[u[f]]
        },
        hasData: function (n) {
            return !i.isEmptyObject(this.cache[n[this.expando]] || {})
        },
        discard: function (n) {
            n[this.expando] && delete this.cache[n[this.expando]]
        }
    };
    f = new c;
    r = new c;
    i.extend({
        acceptData: c.accepts,
        hasData: function (n) {
            return f.hasData(n) || r.hasData(n)
        },
        data: function (n, t, i) {
            return f.access(n, t, i)
        },
        removeData: function (n, t) {
            f.remove(n, t)
        },
        _data: function (n, t, i) {
            return r.access(n, t, i)
        },
        _removeData: function (n, t) {
            r.remove(n, t)
        }
    });
    i.fn.extend({
        data: function (n, u) {
            var s, o, e = this[0],
                h = 0,
                c = null;
            if (n === t) {
                if (this.length && (c = f.get(e), e.nodeType === 1 && !r.get(e, "hasDataAttrs"))) {
                    for (s = e.attributes; h < s.length; h++) o = s[h].name, o.indexOf("data-") === 0 && (o = i.camelCase(o.slice(
                        5)), pi(e, o, c[o]));
                    r.set(e, "hasDataAttrs", !0)
                }
                return c
            }
            return typeof n == "object" ? this.each(function () {
                f.set(this, n)
            }) : i.access(this, function (r) {
                var u, o = i.camelCase(n);
                if (e && r === t) return (u = f.get(e, n), u !== t) ? u : (u = f.get(e, o), u !== t) ? u : (u = pi(e, o, t), u !== t) ? u : void 0;
                this.each(function () {
                    var i = f.get(this, o);
                    f.set(this, o, r);
                    n.indexOf("-") !== -1 && i !== t && f.set(this, n, r)
                })
            }, null, u, arguments.length > 1, null, !0)
        },
        removeData: function (n) {
            return this.each(function () {
                f.remove(this, n)
            })
        }
    });
    i.extend({
        queue: function (n, t,
            u) {
            var f;
            if (n) return t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || i.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || []
        },
        dequeue: function (n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t),
                o = function () {
                    i.dequeue(n, t)
                };
            u === "inprogress" && (u = r.shift(), e--);
            u && (t === "fx" && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function (n, t) {
            var u = t + "queueHooks";
            return r.get(n, u) || r.access(n, u, {
                empty: i.Callbacks("once memory").add(function () {
                    r.remove(n, [t + "queue", u])
                })
            })
        }
    });
    i.fn.extend({
        queue: function (n, r) {
            var u = 2;
            return (typeof n != "string" && (r = n, n = "fx", u--), arguments.length < u) ? i.queue(this[0], n) : r === t ? this : this.each(function () {
                var t = i.queue(this, n, r);
                i._queueHooks(this, n);
                n === "fx" && t[0] !== "inprogress" && i.dequeue(this, n)
            })
        },
        dequeue: function (n) {
            return this.each(function () {
                i.dequeue(this, n)
            })
        },
        delay: function (n, t) {
            return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function (t, i) {
                var r = setTimeout(t, n);
                i.stop = function () {
                    clearTimeout(
                        r)
                }
            })
        },
        clearQueue: function (n) {
            return this.queue(n || "fx", [])
        },
        promise: function (n, u) {
            var f, o = 1,
                s = i.Deferred(),
                e = this,
                h = this.length,
                c = function () {
                    --o || s.resolveWith(e, [e])
                };
            for (typeof n != "string" && (u = n, n = t), n = n || "fx"; h--;) f = r.get(e[h], n + "queueHooks"), f && f.empty && (o++, f.empty.add(c));
            return c(), s.promise(u)
        }
    });
    var du, wi, gt = /[\t\r\n\f]/g,
        gu = /\r/g,
        nf = /^(?:input|select|textarea|button)$/i;
    i.fn.extend({
        attr: function (n, t) {
            return i.access(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function (n) {
            return this.
            each(function () {
                i.removeAttr(this, n)
            })
        },
        prop: function (n, t) {
            return i.access(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function (n) {
            return this.each(function () {
                delete this[i.propFix[n] || n]
            })
        },
        addClass: function (n) {
            var e, t, r, u, o, f = 0,
                s = this.length,
                c = typeof n == "string" && n;
            if (i.isFunction(n)) return this.each(function (t) {
                i(this).addClass(n.call(this, t, this.className))
            });
            if (c)
                for (e = (n || "").match(h) || []; f < s; f++)
                    if (t = this[f], r = t.nodeType === 1 && (t.className ? (" " + t.className + " ").replace(gt, " ") : " "), r) {
                        for (o = 0; u = e[o++];) r.indexOf(" " + u + " ") < 0 && (r += u + " ");
                        t.className = i.trim(r)
                    }
            return this
        },
        removeClass: function (n) {
            var e, r, t, u, o, f = 0,
                s = this.length,
                c = arguments.length === 0 || typeof n == "string" && n;
            if (i.isFunction(n)) return this.each(function (t) {
                i(this).removeClass(n.call(this, t, this.className))
            });
            if (c)
                for (e = (n || "").match(h) || []; f < s; f++)
                    if (r = this[f], t = r.nodeType === 1 && (r.className ? (" " + r.className + " ").replace(gt, " ") : ""), t) {
                        for (o = 0; u = e[o++];)
                            while (t.indexOf(" " + u + " ") >= 0) t = t.replace(" " + u + " ", " ");
                        r.className =
                            n ? i.trim(t) : ""
                    }
            return this
        },
        toggleClass: function (n, t) {
            var u = typeof n;
            return typeof t == "boolean" && u === "string" ? t ? this.addClass(n) : this.removeClass(n) : i.isFunction(n) ? this.each(function (r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            }) : this.each(function () {
                if (u === "string")
                    for (var t, e = 0, f = i(this), o = n.match(h) || []; t = o[e++];) f.hasClass(t) ? f.removeClass(t) : f.addClass(t);
                else(u === rt || u === "boolean") && (this.className && r.set(this, "__className__", this.className), this.className = this.className || n ===
                    !1 ? "" : r.get(this, "__className__") || "")
            })
        },
        hasClass: function (n) {
            for (var i = " " + n + " ", t = 0, r = this.length; t < r; t++)
                if (this[t].nodeType === 1 && (" " + this[t].className + " ").replace(gt, " ").indexOf(i) >= 0) return !0;
            return !1
        },
        val: function (n) {
            var r, u, e, f = this[0];
            return arguments.length ? (e = i.isFunction(n), this.each(function (u) {
                var f;
                this.nodeType === 1 && (f = e ? n.call(this, u, i(this).val()) : n, f == null ? f = "" : typeof f == "number" ? f += "" : i.isArray(f) && (f = i.map(f, function (n) {
                    return n == null ? "" : n + ""
                })), r = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, f, "value") !== t || (this.value = f))
            })) : f ? (r = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()], r && "get" in r && (u = r.get(f, "value")) !== t) ? u : (u = f.value, typeof u == "string" ? u.replace(gu, "") : u == null ? "" : u) : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function (n) {
                    var t = n.attributes.value;
                    return !t || t.specified ? n.value : n.text
                }
            },
            select: {
                get: function (n) {
                    for (var e, t, o = n.options, r = n.selectedIndex, u = n.type === "select-one" || r < 0, s = u ? null : [], h = u ? r + 1 : o.length,
                        f = r < 0 ? h : u ? r : 0; f < h; f++)
                        if (t = o[f], (t.selected || f === r) && (i.support.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                            if (e = i(t).val(), u) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function (n, t) {
                    for (var u, r, f = n.options, e = i.makeArray(t), o = f.length; o--;) r = f[o], (r.selected = i.inArray(i(r).val(), e) >= 0) && (u = !0);
                    return u || (n.selectedIndex = -1), e
                }
            }
        },
        attr: function (n, r, u) {
            var f, e, o = n.nodeType;
            if (n && o !== 3 && o !== 8 && o !== 2) {
                if (typeof n.getAttribute === rt)
                    return i.prop(n, r, u);
                if (o === 1 && i.isXMLDoc(n) || (r = r.toLowerCase(), f = i.attrHooks[r] || (i.expr.match.bool.test(r) ? wi : du)), u !== t)
                    if (u === null) i.removeAttr(n, r);
                    else return f && "set" in f && (e = f.set(n, u, r)) !== t ? e : (n.setAttribute(r, u + ""), u);
                else return f && "get" in f && (e = f.get(n, r)) !== null ? e : (e = i.find.attr(n, r), e == null ? t : e)
            }
        },
        removeAttr: function (n, t) {
            var r, u, e = 0,
                f = t && t.match(h);
            if (f && n.nodeType === 1)
                while (r = f[e++]) u = i.propFix[r] || r, i.expr.match.bool.test(r) && (n[u] = !1), n.removeAttribute(r)
        },
        attrHooks: {
            type: {
                set: function (n, t) {
                    if (!i.support.radioValue && t === "radio" && i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t), r && (n.value = r), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (n, r, u) {
            var e, f, s, o = n.nodeType;
            if (n && o !== 3 && o !== 8 && o !== 2) return s = o !== 1 || !i.isXMLDoc(n), s && (r = i.propFix[r] || r, f = i.propHooks[r]), u !== t ? f && "set" in f && (e = f.set(n, u, r)) !== t ? e : n[r] = u : f && "get" in f && (e = f.get(n, r)) !== null ? e : n[r]
        },
        propHooks: {
            tabIndex: {
                get: function (n) {
                    return n.hasAttribute("tabindex") || nf.test(
                        n.nodeName) || n.href ? n.tabIndex : -1
                }
            }
        }
    });
    wi = {
        set: function (n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : n.setAttribute(r, r), r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function (n, r) {
        var u = i.expr.attrHandle[r] || i.find.attr;
        i.expr.attrHandle[r] = function (n, r, f) {
            var e = i.expr.attrHandle[r],
                o = f ? t : (i.expr.attrHandle[r] = t) != u(n, r, f) ? r.toLowerCase() : null;
            return i.expr.attrHandle[r] = e, o
        }
    });
    i.support.optSelected || (i.propHooks.selected = {
        get: function (n) {
            var t = n.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
                null
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        i.propFix[this.toLowerCase()] = this
    });
    i.each(["radio", "checkbox"], function () {
        i.valHooks[this] = {
            set: function (n, t) {
                if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0
            }
        };
        i.support.checkOn || (i.valHooks[this].get = function (n) {
            return n.getAttribute("value") === null ? "on" : n.value
        })
    });
    var tf = /^key/,
        rf = /^(?:mouse|contextmenu)|click/,
        bi = /^(?:focusinfocus|focusoutblur)$/,
        ki = /^([^.]*)(?:\.(.+)|)$/;
    i.event = {
        global: {},
        add: function (n, u, f, e, o) {
            var p, l, b, w, k, a, c, v, s, d, g, y = r.get(n);
            if (y) {
                for (f.handler && (p = f, f = p.handler, o = p.selector), f.guid || (f.guid = i.guid++), (w = y.events) || (w = y.events = {}), (l = y.handle) || (l = y.handle = function (n) {
                    return typeof i !== rt && (!n || i.event.triggered !== n.type) ? i.event.dispatch.apply(l.elem, arguments) : t
                }, l.elem = n), u = (u || "").match(h) || [""], k = u.length; k--;)(b = ki.exec(u[k]) || [], s = g = b[1], d = (b[2] || "").split(".").sort(), s) && (c = i.event.special[s] || {}, s = (o ? c.delegateType : c.bindType) || s, c = i.event.special[s] || {}, a = i.extend({
                    type: s,
                    origType: g,
                    data: e,
                    handler: f,
                    guid: f.guid,
                    selector: o,
                    needsContext: o && i.expr.match.needsContext.test(o),
                    namespace: d.join(".")
                }, p), (v = w[s]) || (v = w[s] = [], v.delegateCount = 0, c.setup && c.setup.call(n, e, d, l) !== !1 || n.addEventListener && n.addEventListener(s, l, !1)), c.add && (c.add.call(n, a), a.handler.guid || (a.handler.guid = f.guid)), o ? v.splice(v.delegateCount++, 0, a) : v.push(a), i.event.global[s] = !0);
                n = null
            }
        },
        remove: function (n, t, u, f, e) {
            var p, k, c,
                v, w, s, l, a, o, b, d, y = r.hasData(n) && r.get(n);
            if (y && (v = y.events)) {
                for (t = (t || "").match(h) || [""], w = t.length; w--;) {
                    if (c = ki.exec(t[w]) || [], o = d = c[1], b = (c[2] || "").split(".").sort(), !o) {
                        for (o in v) i.event.remove(n, o + t[w], u, f, !0);
                        continue
                    }
                    for (l = i.event.special[o] || {}, o = (f ? l.delegateType : l.bindType) || o, a = v[o] || [], c = c[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = p = a.length; p--;) s = a[p], (e || d === s.origType) && (!u || u.guid === s.guid) && (!c || c.test(s.namespace)) && (!f || f === s.selector || f === "**" && s.selector) && (a.splice(p, 1), s.selector && a.delegateCount--, l.remove && l.remove.call(n, s));
                    k && !a.length && (l.teardown && l.teardown.call(n, b, y.handle) !== !1 || i.removeEvent(n, o, y.handle), delete v[o])
                }
                i.isEmptyObject(v) && (delete y.handle, r.remove(n, "events"))
            }
        },
        trigger: function (f, e, o, s) {
            var b, h, l, k, v, y, a, w = [o || u],
                c = bt.call(f, "type") ? f.type : f,
                p = bt.call(f, "namespace") ? f.namespace.split(".") : [];
            if ((h = l = o = o || u, o.nodeType !== 3 && o.nodeType !== 8) && !bi.test(c + i.event.triggered) && (c.indexOf(".") >= 0 && (p = c.split("."), c = p.shift(), p.sort()), v = c.indexOf(":") < 0 && "on" + c, f = f[i.expando] ? f : new i.Event(c, typeof f == "object" && f), f.isTrigger = s ? 2 : 3, f.namespace = p.join("."), f.namespace_re = f.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, f.result = t, f.target || (f.target = o), e = e == null ? [f] : i.makeArray(e, [f]), a = i.event.special[c] || {}, s || !a.trigger || a.trigger.apply(o, e) !== !1)) {
                if (!s && !a.noBubble && !i.isWindow(o)) {
                    for (k = a.delegateType || c, bi.test(k + c) || (h = h.parentNode); h; h = h.parentNode) w.push(h), l = h;
                    l === (o.ownerDocument ||
                        u) && w.push(l.defaultView || l.parentWindow || n)
                }
                for (b = 0;
                    (h = w[b++]) && !f.isPropagationStopped();) f.type = b > 1 ? k : a.bindType || c, y = (r.get(h, "events") || {})[f.type] && r.get(h, "handle"), y && y.apply(h, e), y = v && h[v], y && i.acceptData(h) && y.apply && y.apply(h, e) === !1 && f.preventDefault();
                return f.type = c, s || f.isDefaultPrevented() || (!a._default || a._default.apply(w.pop(), e) === !1) && i.acceptData(o) && v && i.isFunction(o[c]) && !i.isWindow(o) && (l = o[v], l && (o[v] = null), i.event.triggered = c, o[c](), i.event.triggered = t, l && (o[v] = l)), f.result
            }
        },
        dispatch: function (n) {
            n = i.event.fix(n);
            var s, h, o, f, u, c = [],
                l = a.call(arguments),
                v = (r.get(this, "events") || {})[n.type] || [],
                e = i.event.special[n.type] || {};
            if (l[0] = n, n.delegateTarget = this, !e.preDispatch || e.preDispatch.call(this, n) !== !1) {
                for (c = i.event.handlers.call(this, n, v), s = 0;
                    (f = c[s++]) && !n.isPropagationStopped();)
                    for (n.currentTarget = f.elem, h = 0;
                        (u = f.handlers[h++]) && !n.isImmediatePropagationStopped();)(!n.namespace_re || n.namespace_re.test(u.namespace)) && (n.handleObj = u, n.data = u.data, o = ((i.event.special[
                        u.origType] || {}).handle || u.handler).apply(f.elem, l), o !== t && (n.result = o) === !1 && (n.preventDefault(), n.stopPropagation()));
                return e.postDispatch && e.postDispatch.call(this, n), n.result
            }
        },
        handlers: function (n, r) {
            var o, f, e, s, c = [],
                h = r.delegateCount,
                u = n.target;
            if (h && u.nodeType && (!n.button || n.type !== "click"))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || n.type !== "click") {
                        for (f = [], o = 0; o < h; o++) s = r[o], e = s.selector + " ", f[e] === t && (f[e] = s.needsContext ? i(e, this).index(u) >= 0 : i.find(e, this, null, [u]).length),
                            f[e] && f.push(s);
                        f.length && c.push({
                            elem: u,
                            handlers: f
                        })
                    }
            return h < r.length && c.push({
                elem: this,
                handlers: r.slice(h)
            }), c
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (n, t) {
                return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode), n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".
            split(" "),
            filter: function (n, i) {
                var o, r, f, e = i.button;
                return n.pageX == null && i.clientX != null && (o = n.target.ownerDocument || u, r = o.documentElement, f = o.body, n.pageX = i.clientX + (r && r.scrollLeft || f && f.scrollLeft || 0) - (r && r.clientLeft || f && f.clientLeft || 0), n.pageY = i.clientY + (r && r.scrollTop || f && f.scrollTop || 0) - (r && r.clientTop || f && f.clientTop || 0)), n.which || e === t || (n.which = e & 1 ? 1 : e & 2 ? 3 : e & 4 ? 2 : 0), n
            }
        },
        fix: function (n) {
            if (n[i.expando]) return n;
            var f, e, o, r = n.type,
                s = n,
                t = this.fixHooks[r];
            for (t || (this.fixHooks[r] = t = rf.test(
                r) ? this.mouseHooks : tf.test(r) ? this.keyHooks : {}), o = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(s), f = o.length; f--;) e = o[f], n[e] = s[e];
            return n.target || (n.target = u), n.target.nodeType === 3 && (n.target = n.target.parentNode), t.filter ? t.filter(n, s) : n
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== di() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === di() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if (this.type === "checkbox" && this.click && i.nodeName(this, "input")) return this.click(), !1
                },
                _default: function (n) {
                    return i.nodeName(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (n) {
                    n.result !== t && (n.originalEvent.returnValue = n.result)
                }
            }
        },
        simulate: function (n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
            f.isDefaultPrevented() && r.preventDefault()
        }
    };
    i.removeEvent = function (n, t, i) {
        n.removeEventListener && n.removeEventListener(
            t, i, !1)
    };
    i.Event = function (n, t) {
        if (!(this instanceof i.Event)) return new i.Event(n, t);
        n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.getPreventDefault && n.getPreventDefault() ? ht : p) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || i.now();
        this[i.expando] = !0
    };
    i.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function () {
            var n = this.originalEvent;
            this.isDefaultPrevented = ht;
            n && n.preventDefault &&
                n.preventDefault()
        },
        stopPropagation: function () {
            var n = this.originalEvent;
            this.isPropagationStopped = ht;
            n && n.stopPropagation && n.stopPropagation()
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = ht;
            this.stopPropagation()
        }
    };
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function (n) {
                var u, f = this,
                    r = n.relatedTarget,
                    e = n.handleObj;
                return r && (r === f || i.contains(f, r)) || (n.type = e.origType, u = e.handler.apply(this, arguments),
                    n.type = t), u
            }
        }
    });
    i.support.focusinBubbles || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function (n, t) {
        var r = 0,
            f = function (n) {
                i.event.simulate(t, n.target, i.event.fix(n), !0)
            };
        i.event.special[t] = {
            setup: function () {
                r++ == 0 && u.addEventListener(n, f, !0)
            },
            teardown: function () {
                --r == 0 && u.removeEventListener(n, f, !0)
            }
        }
    });
    i.fn.extend({
        on: function (n, r, u, f, e) {
            var o, s;
            if (typeof n == "object") {
                typeof r != "string" && (u = u || r, r = t);
                for (s in n) this.on(s, r, u, n[s], e);
                return this
            }
            if (u == null && f == null ? (f = r, u = r = t) : f == null && (typeof r == "string" ?
                (f = u, u = t) : (f = u, u = r, r = t)), f === !1) f = p;
            else if (!f) return this;
            return e === 1 && (o = f, f = function (n) {
                return i().off(n), o.apply(this, arguments)
            }, f.guid = o.guid || (o.guid = i.guid++)), this.each(function () {
                i.event.add(this, n, f, u, r)
            })
        },
        one: function (n, t, i, r) {
            return this.on(n, t, i, r, 1)
        },
        off: function (n, r, u) {
            var f, e;
            if (n && n.preventDefault && n.handleObj) return f = n.handleObj, i(n.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler), this;
            if (typeof n == "object") {
                for (e in n) this.off(e, r,
                    n[e]);
                return this
            }
            return (r === !1 || typeof r == "function") && (u = r, r = t), u === !1 && (u = p), this.each(function () {
                i.event.remove(this, n, u, r)
            })
        },
        trigger: function (n, t) {
            return this.each(function () {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function (n, t) {
            var r = this[0];
            if (r) return i.event.trigger(n, t, r, !0)
        }
    });
    var uf = /^.[^:#\[\.,]*$/,
        ff = /^(?:parents|prev(?:Until|All))/,
        gi = i.expr.match.needsContext,
        ef = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    i.fn.extend({
        find: function (n) {
            var t, r = [],
                u = this,
                f = u.length;
            if (typeof n !=
                "string") return this.pushStack(i(n).filter(function () {
                for (t = 0; t < f; t++)
                    if (i.contains(u[t], this)) return !0
            }));
            for (t = 0; t < f; t++) i.find(n, u[t], r);
            return r = this.pushStack(f > 1 ? i.unique(r) : r), r.selector = this.selector ? this.selector + " " + n : n, r
        },
        has: function (n) {
            var t = i(n, this),
                r = t.length;
            return this.filter(function () {
                for (var n = 0; n < r; n++)
                    if (i.contains(this, t[n])) return !0
            })
        },
        not: function (n) {
            return this.pushStack(ni(this, n || [], !0))
        },
        filter: function (n) {
            return this.pushStack(ni(this, n || [], !1))
        },
        is: function (n) {
            return !!ni(
                this, typeof n == "string" && gi.test(n) ? i(n) : n || [], !1).length
        },
        closest: function (n, t) {
            for (var r, f = 0, o = this.length, u = [], e = gi.test(n) || typeof n != "string" ? i(n, t || this.context) : 0; f < o; f++)
                for (r = this[f]; r && r !== t; r = r.parentNode)
                    if (r.nodeType < 11 && (e ? e.index(r) > -1 : r.nodeType === 1 && i.find.matchesSelector(r, n))) {
                        r = u.push(r);
                        break
                    }
            return this.pushStack(u.length > 1 ? i.unique(u) : u)
        },
        index: function (n) {
            return n ? typeof n == "string" ? et.call(i(n), this[0]) : et.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (n, t) {
            var r = typeof n == "string" ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n),
                u = i.merge(this.get(), r);
            return this.pushStack(i.unique(u))
        },
        addBack: function (n) {
            return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function (n) {
            var t = n.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function (n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function (n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function (n) {
            return nr(n, "nextSibling")
        },
        prev: function (
            n) {
            return nr(n, "previousSibling")
        },
        nextAll: function (n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function (n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function (n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function (n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function (n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        },
        children: function (n) {
            return i.sibling(n.firstChild)
        },
        contents: function (n) {
            return n.contentDocument || i.merge([], n.childNodes)
        }
    }, function (n, t) {
        i.fn[n] = function (r, u) {
            var
                f = i.map(this, t, r);
            return n.slice(-5) !== "Until" && (u = r), u && typeof u == "string" && (f = i.filter(u, f)), this.length > 1 && (ef[n] || i.unique(f), ff.test(n) && f.reverse()), this.pushStack(f)
        }
    });
    i.extend({
        filter: function (n, t, r) {
            var u = t[0];
            return r && (n = ":not(" + n + ")"), t.length === 1 && u.nodeType === 1 ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function (n) {
                return n.nodeType === 1
            }))
        },
        dir: function (n, r, u) {
            for (var f = [], e = u !== t;
                (n = n[r]) && n.nodeType !== 9;)
                if (n.nodeType === 1) {
                    if (e && i(n).is(u)) break;
                    f.push(n)
                }
            return f
        },
        sibling: function (n, t) {
            for (var i = []; n; n = n.nextSibling) n.nodeType === 1 && n !== t && i.push(n);
            return i
        }
    });
    var tr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ir = /<([\w:]+)/,
        of = /<|&#?\w+;/,
        sf = /<(?:script|style|link)/i,
        rr = /^(?:checkbox|radio)$/i,
        hf = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ur = /^$|\/(?:java|ecma)script/i,
        cf = /^true\/(.*)/,
        lf = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        s = {
            option: [1, "<select multiple='multiple'>", "<\/select>"],
            thead: [1, "<table>", "<\/table>"],
            col: [2, "<table><colgroup>",
"<\/colgroup><\/table>"],
            tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
            td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
            _default: [0, "", ""]
        };
    s.optgroup = s.option;
    s.tbody = s.tfoot = s.colgroup = s.caption = s.thead;
    s.th = s.td;
    i.fn.extend({
        text: function (n) {
            return i.access(this, function (n) {
                return n === t ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || u).createTextNode(n))
            }, null, n, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (n) {
                if (this.nodeType === 1 || this.nodeType ===
                    11 || this.nodeType === 9) {
                    var t = fr(this, n);
                    t.appendChild(n)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (n) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = fr(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        remove: function (n,
            t) {
            for (var r, f = n ? i.filter(n, this) : this, u = 0;
                (r = f[u]) != null; u++) t || r.nodeType !== 1 || i.cleanData(o(r)), r.parentNode && (t && i.contains(r.ownerDocument, r) && ti(o(r, "script")), r.parentNode.removeChild(r));
            return this
        },
        empty: function () {
            for (var n, t = 0;
                (n = this[t]) != null; t++) n.nodeType === 1 && (i.cleanData(o(n, !1)), n.textContent = "");
            return this
        },
        clone: function (n, t) {
            return n = n == null ? !1 : n, t = t == null ? n : t, this.map(function () {
                return i.clone(this, n, t)
            })
        },
        html: function (n) {
            return i.access(this, function (n) {
                var r = this[0] || {},
                    u = 0,
                    f = this.length;
                if (n === t && r.nodeType === 1) return r.innerHTML;
                if (typeof n == "string" && !sf.test(n) && !s[(ir.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = n.replace(tr, "<$1><\/$2>");
                    try {
                        for (; u < f; u++) r = this[u] || {}, r.nodeType === 1 && (i.cleanData(o(r, !1)), r.innerHTML = n);
                        r = 0
                    } catch (e) {}
                }
                r && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function () {
            var t = i.map(this, function (n) {
                    return [n.nextSibling, n.parentNode]
                }),
                n = 0;
            return this.domManip(arguments, function (r) {
                var u = t[n++],
                    f = t[n++];
                f && (u && u.parentNode !==
                    f && (u = this.nextSibling), i(this).remove(), f.insertBefore(r, u))
            }, !0), n ? this : this.remove()
        },
        detach: function (n) {
            return this.remove(n, !0)
        },
        domManip: function (n, t, u) {
            n = li.apply([], n);
            var h, v, s, c, f, y, e = 0,
                l = this.length,
                w = this,
                b = l - 1,
                a = n[0],
                p = i.isFunction(a);
            if (p || !(l <= 1 || typeof a != "string" || i.support.checkClone || !hf.test(a))) return this.each(function (i) {
                var r = w.eq(i);
                p && (n[0] = a.call(this, i, r.html()));
                r.domManip(n, t, u)
            });
            if (l && (h = i.buildFragment(n, this[0].ownerDocument, !1, !u && this), v = h.firstChild, h.childNodes.length === 1 && (h = v), v)) {
                for (s = i.map(o(h, "script"), af), c = s.length; e < l; e++) f = h, e !== b && (f = i.clone(f, !0, !0), c && i.merge(s, o(f, "script"))), t.call(this[e], f, e);
                if (c)
                    for (y = s[s.length - 1].ownerDocument, i.map(s, vf), e = 0; e < c; e++) f = s[e], ur.test(f.type || "") && !r.access(f, "globalEval") && i.contains(y, f) && (f.src ? i._evalUrl(f.src) : i.globalEval(f.textContent.replace(lf, "")))
            }
            return this
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (n, t) {
        i.
        fn[n] = function (n) {
            for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), wt.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    i.extend({
        clone: function (n, t, r) {
            var u, h, e, f, s = n.cloneNode(!0),
                c = i.contains(n.ownerDocument, n);
            if (!i.support.noCloneChecked && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
                for (f = o(s), e = o(n), u = 0, h = e.length; u < h; u++) yf(e[u], f[u]);
            if (t)
                if (r)
                    for (e = e || o(n), f = f || o(s), u = 0, h = e.length; u < h; u++) er(e[u], f[u]);
                else er(n, s);
            return f = o(s, "script"), f.length >
                0 && ti(f, !c && o(n, "script")), s
        },
        buildFragment: function (n, t, r, u) {
            for (var f, e, y, l, p, a, h = 0, w = n.length, c = t.createDocumentFragment(), v = []; h < w; h++)
                if (f = n[h], f || f === 0)
                    if (i.type(f) === "object") i.merge(v, f.nodeType ? [f] : f);
                    else if (of.test(f)) {
                for (e = e || c.appendChild(t.createElement("div")), y = (ir.exec(f) || ["", ""])[1].toLowerCase(), l = s[y] || s._default, e.innerHTML = l[1] + f.replace(tr, "<$1><\/$2>") + l[2], a = l[0]; a--;) e = e.lastChild;
                i.merge(v, e.childNodes);
                e = c.firstChild;
                e.textContent = ""
            } else v.push(t.createTextNode(f));
            for (c.textContent = "", h = 0; f = v[h++];)
                if ((!u || i.inArray(f, u) === -1) && (p = i.contains(f.ownerDocument, f), e = o(c.appendChild(f), "script"), p && ti(e), r))
                    for (a = 0; f = e[a++];) ur.test(f.type || "") && r.push(f);
            return c
        },
        cleanData: function (n) {
            for (var s, u, h, o, e, l, v = i.event.special, a = 0;
                (u = n[a]) !== t; a++) {
                if (c.accepts(u) && (e = u[r.expando], e && (s = r.cache[e]))) {
                    if (h = Object.keys(s.events || {}), h.length)
                        for (l = 0;
                            (o = h[l]) !== t; l++) v[o] ? i.event.remove(u, o) : i.removeEvent(u, o, s.handle);
                    r.cache[e] && delete r.cache[e]
                }
                delete f.cache[u[
                    f.expando]]
            }
        },
        _evalUrl: function (n) {
            return i.ajax({
                url: n,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }
    });
    i.fn.extend({
        wrapAll: function (n) {
            var t;
            return i.isFunction(n) ? this.each(function (t) {
                i(this).wrapAll(n.call(this, t))
            }) : (this[0] && (t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var n = this; n.firstElementChild;) n = n.firstElementChild;
                return n
            }).append(this)), this)
        },
        wrapInner: function (n) {
            return i.isFunction(n) ? this.each(function (
                t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function () {
                var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function (n) {
            var t = i.isFunction(n);
            return this.each(function (r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var w, k, pf = /^(none|table(?!-c[ea]).+)/,
        or = /^margin/,
        wf = new RegExp("^(" + ot + ")(.*)$", "i"),
        ii = new RegExp("^(" + ot + ")(?!px)[a-z%]+$", "i"),
        bf = new
    RegExp("^([+-])=(" + ot + ")", "i"), sr = {
        BODY: "block"
    }, kf = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, hr = {
        letterSpacing: 0,
        fontWeight: 400
    }, v = ["Top", "Right", "Bottom", "Left"], cr = ["Webkit", "O", "Moz", "ms"];
    i.fn.extend({
        css: function (n, r) {
            return i.access(this, function (n, r, u) {
                var e, o, s = {},
                    f = 0;
                if (i.isArray(r)) {
                    for (e = ct(n), o = r.length; f < o; f++) s[r[f]] = i.css(n, r[f], !1, e);
                    return s
                }
                return u !== t ? i.style(n, r, u) : i.css(n, r)
            }, n, r, arguments.length > 1)
        },
        show: function () {
            return ar(this, !0)
        },
        hide: function () {
            return ar(
                this)
        },
        toggle: function (n) {
            return typeof n == "boolean" ? n ? this.show() : this.hide() : this.each(function () {
                d(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    i.extend({
        cssHooks: {
            opacity: {
                get: function (n, t) {
                    if (t) {
                        var i = w(n, "opacity");
                        return i === "" ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function (n, r, u, f) {
            if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
                var o, s, e, h = i.camelCase(r),
                    c = n.
                style;
                if (r = i.cssProps[h] || (i.cssProps[h] = lr(c, h)), e = i.cssHooks[r] || i.cssHooks[h], u !== t) {
                    if (s = typeof u, s === "string" && (o = bf.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, r)), s = "number"), u == null || s === "number" && isNaN(u)) return;
                    s !== "number" || i.cssNumber[h] || (u += "px");
                    i.support.clearCloneStyle || u !== "" || r.indexOf("background") !== 0 || (c[r] = "inherit");
                    e && "set" in e && (u = e.set(n, u, f)) === t || (c[r] = u)
                } else return e && "get" in e && (o = e.get(n, !1, f)) !== t ? o : c[r]
            }
        },
        css: function (n, r, u, f) {
            var e, h, o, s = i.camelCase(r);
            return (
                r = i.cssProps[s] || (i.cssProps[s] = lr(n.style, s)), o = i.cssHooks[r] || i.cssHooks[s], o && "get" in o && (e = o.get(n, !0, u)), e === t && (e = w(n, r, f)), e === "normal" && r in hr && (e = hr[r]), u === "" || u) ? (h = parseFloat(e), u === !0 || i.isNumeric(h) ? h || 0 : e) : e
        }
    });
    w = function (n, r, u) {
        var s, h, c, o = u || ct(n),
            e = o ? o.getPropertyValue(r) || o[r] : t,
            f = n.style;
        return o && (e !== "" || i.contains(n.ownerDocument, n) || (e = i.style(n, r)), ii.test(e) && or.test(r) && (s = f.width, h = f.minWidth, c = f.maxWidth, f.minWidth = f.maxWidth = f.width = e, e = o.width, f.width = s, f.minWidth =
            h, f.maxWidth = c)), e
    };
    i.each(["height", "width"], function (n, t) {
        i.cssHooks[t] = {
            get: function (n, r, u) {
                if (r) return n.offsetWidth === 0 && pf.test(i.css(n, "display")) ? i.swap(n, kf, function () {
                    return pr(n, t, u)
                }) : pr(n, t, u)
            },
            set: function (n, r, u) {
                var f = u && ct(n);
                return vr(n, r, u ? yr(n, t, u, i.support.boxSizing && i.css(n, "boxSizing", !1, f) === "border-box", f) : 0)
            }
        }
    });
    i(function () {
        i.support.reliableMarginRight || (i.cssHooks.marginRight = {
            get: function (n, t) {
                if (t) return i.swap(n, {
                    display: "inline-block"
                }, w, [n, "marginRight"])
            }
        });
        !i.support.
        pixelPosition && i.fn.position && i.each(["top", "left"], function (n, t) {
            i.cssHooks[t] = {
                get: function (n, r) {
                    if (r) return r = w(n, t), ii.test(r) ? i(n).position()[t] + "px" : r
                }
            }
        })
    });
    i.expr && i.expr.filters && (i.expr.filters.hidden = function (n) {
        return n.offsetWidth <= 0 && n.offsetHeight <= 0
    }, i.expr.filters.visible = function (n) {
        return !i.expr.filters.hidden(n)
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (n, t) {
        i.cssHooks[n + t] = {
            expand: function (i) {
                for (var r = 0, f = {}, u = typeof i == "string" ? i.split(" ") : [i]; r < 4; r++) f[n + v[r] +
                    t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        or.test(n) || (i.cssHooks[n + t].set = vr)
    });
    var gf = /%20/g,
        ne = /\[\]$/,
        br = /\r?\n/g,
        te = /^(?:submit|button|image|reset|file)$/i,
        ie = /^(?:input|select|textarea|keygen)/i;
    i.fn.extend({
        serialize: function () {
            return i.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function () {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && ie.test(this.nodeName) && !te.test(n) && (this.checked || !rr.test(n))
            }).map(function (n, t) {
                var r = i(this).val();
                return r == null ? null : i.isArray(r) ? i.map(r, function (n) {
                    return {
                        name: t.name,
                        value: n.replace(br, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(br, "\r\n")
                }
            }).get()
        }
    });
    i.param = function (n, r) {
        var u, f = [],
            e = function (n, t) {
                t = i.isFunction(t) ? t() : t == null ? "" : t;
                f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
            };
        if (r === t && (r = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function () {
            e(this.name, this.value)
        });
        else
            for (u in n) ri(u, n[u], r, e);
        return f.join("&").replace(gf, "+")
    };
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (n, t) {
        i.fn[t] = function (n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
    });
    i.fn.extend({
        hover: function (n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        },
        bind: function (n, t, i) {
            return this.
            on(n, null, t, i)
        },
        unbind: function (n, t) {
            return this.off(n, null, t)
        },
        delegate: function (n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function (n, t, i) {
            return arguments.length === 1 ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    });
    var y, l, ui = i.now(),
        fi = /\?/,
        re = /#.*$/,
        kr = /([?&])_=[^&]*/,
        ue = /^(.*?):[ \t]*([^\r\n]*)$/mg,
        fe = /^(?:GET|HEAD)$/,
        ee = /^\/\//,
        dr = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        gr = i.fn.load,
        nu = {},
        ei = {},
        tu = "*/".concat("*");
    try {
        l = hu.href
    } catch (pe) {
        l = u.createElement("a");
        l.href = "";
        l = l.href
    }
    y = dr.exec(
        l.toLowerCase()) || [];
    i.fn.load = function (n, r, u) {
        if (typeof n != "string" && gr) return gr.apply(this, arguments);
        var f, s, h, e = this,
            o = n.indexOf(" ");
        return o >= 0 && (f = n.slice(o), n = n.slice(0, o)), i.isFunction(r) ? (u = r, r = t) : r && typeof r == "object" && (s = "POST"), e.length > 0 && i.ajax({
            url: n,
            type: s,
            dataType: "html",
            data: r
        }).done(function (n) {
            h = arguments;
            e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n)
        }).complete(u && function (n, t) {
            e.each(u, h || [n.responseText, t, n])
        }), this
    };
    i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError",
"ajaxSuccess", "ajaxSend"], function (n, t) {
        i.fn[t] = function (n) {
            return this.on(t, n)
        }
    });
    i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: l,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(y[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": tu,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (n, t) {
            return t ? oi(oi(n, i.ajaxSettings), t) : oi(i.ajaxSettings, n)
        },
        ajaxPrefilter: iu(nu),
        ajaxTransport: iu(ei),
        ajax: function (n, r) {
            function k(n, r, h, l) {
                var v, rt, k, y, w, a = r;
                o !== 2 && (o = 2, g && clearTimeout(g), c = t, d = l || "", f.readyState = n > 0 ? 4 : 0, v = n >= 200 && n < 300 || n === 304, h && (y = oe(u, f, h)), y = se(u, y, f, v),
                    v ? (u.ifModified && (w = f.getResponseHeader("Last-Modified"), w && (i.lastModified[e] = w), w = f.getResponseHeader("etag"), w && (i.etag[e] = w)), n === 204 || u.type === "HEAD" ? a = "nocontent" : n === 304 ? a = "notmodified" : (a = y.state, rt = y.data, k = y.error, v = !k)) : (k = a, (n || !a) && (a = "error", n < 0 && (n = 0))), f.status = n, f.statusText = (r || a) + "", v ? tt.resolveWith(s, [rt, a, f]) : tt.rejectWith(s, [f, a, k]), f.statusCode(b), b = t, p && nt.trigger(v ? "ajaxSuccess" : "ajaxError", [f, u, v ? rt : k]), it.fireWith(s, [f, a]), p && (nt.trigger("ajaxComplete", [f, u]), --i.active ||
                        i.event.trigger("ajaxStop")))
            }
            typeof n == "object" && (r = n, n = t);
            r = r || {};
            var c, e, d, w, g, a, p, v, u = i.ajaxSetup({}, r),
                s = u.context || u,
                nt = u.context && (s.nodeType || s.jquery) ? i(s) : i.event,
                tt = i.Deferred(),
                it = i.Callbacks("once memory"),
                b = u.statusCode || {},
                rt = {},
                ut = {},
                o = 0,
                ft = "canceled",
                f = {
                    readyState: 0,
                    getResponseHeader: function (n) {
                        var t;
                        if (o === 2) {
                            if (!w)
                                for (w = {}; t = ue.exec(d);) w[t[1].toLowerCase()] = t[2];
                            t = w[n.toLowerCase()]
                        }
                        return t == null ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return o === 2 ? d : null
                    },
                    setRequestHeader: function (n, t) {
                        var i = n.toLowerCase();
                        return o || (n = ut[i] = ut[i] || n, rt[n] = t), this
                    },
                    overrideMimeType: function (n) {
                        return o || (u.mimeType = n), this
                    },
                    statusCode: function (n) {
                        var t;
                        if (n)
                            if (o < 2)
                                for (t in n) b[t] = [b[t], n[t]];
                            else f.always(n[f.status]);
                        return this
                    },
                    abort: function (n) {
                        var t = n || ft;
                        return c && c.abort(t), k(0, t), this
                    }
                };
            if (tt.promise(f).complete = it.add, f.success = f.done, f.error = f.fail, u.url = ((n || u.url || l) + "").replace(re, "").replace(ee, y[1] + "//"), u.type = r.method || r.type || u.method || u.type, u.dataTypes = i.trim(
                u.dataType || "*").toLowerCase().match(h) || [""], u.crossDomain == null && (a = dr.exec(u.url.toLowerCase()), u.crossDomain = !!(a && (a[1] !== y[1] || a[2] !== y[2] || (a[3] || (a[1] === "http:" ? "80" : "443")) !== (y[3] || (y[1] === "http:" ? "80" : "443"))))), u.data && u.processData && typeof u.data != "string" && (u.data = i.param(u.data, u.traditional)), ru(nu, u, r, f), o === 2) return f;
            p = u.global;
            p && i.active++ == 0 && i.event.trigger("ajaxStart");
            u.type = u.type.toUpperCase();
            u.hasContent = !fe.test(u.type);
            e = u.url;
            u.hasContent || (u.data && (e = u.url += (fi.test(
                e) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = kr.test(e) ? e.replace(kr, "$1_=" + ui++) : e + (fi.test(e) ? "&" : "?") + "_=" + ui++));
            u.ifModified && (i.lastModified[e] && f.setRequestHeader("If-Modified-Since", i.lastModified[e]), i.etag[e] && f.setRequestHeader("If-None-Match", i.etag[e]));
            (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType);
            f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + (u.dataTypes[0] !== "*" ?
                ", " + tu + "; q=0.01" : "") : u.accepts["*"]);
            for (v in u.headers) f.setRequestHeader(v, u.headers[v]);
            if (u.beforeSend && (u.beforeSend.call(s, f, u) === !1 || o === 2)) return f.abort();
            ft = "abort";
            for (v in {
                success: 1,
                error: 1,
                complete: 1
            }) f[v](u[v]);
            if (c = ru(ei, u, r, f), c) {
                f.readyState = 1;
                p && nt.trigger("ajaxSend", [f, u]);
                u.async && u.timeout > 0 && (g = setTimeout(function () {
                    f.abort("timeout")
                }, u.timeout));
                try {
                    o = 1;
                    c.send(rt, k)
                } catch (et) {
                    if (o < 2) k(-1, et);
                    else throw et;
                }
            } else k(-1, "No Transport");
            return f
        },
        getJSON: function (n, t, r) {
            return i.
            get(n, t, r, "json")
        },
        getScript: function (n, r) {
            return i.get(n, t, r, "script")
        }
    });
    i.each(["get", "post"], function (n, r) {
        i[r] = function (n, u, f, e) {
            return i.isFunction(u) && (e = e || f, f = u, u = t), i.ajax({
                url: n,
                type: r,
                dataType: e,
                data: u,
                success: f
            })
        }
    });
    i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (n) {
                return i.globalEval(n), n
            }
        }
    });
    i.ajaxPrefilter("script", function (n) {
        n.cache ===
            t && (n.cache = !1);
        n.crossDomain && (n.type = "GET")
    });
    i.ajaxTransport("script", function (n) {
        if (n.crossDomain) {
            var r, t;
            return {
                send: function (f, e) {
                    r = i("<script>").prop({
                        async: !0,
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", t = function (n) {
                        r.remove();
                        t = null;
                        n && e(n.type === "error" ? 404 : 200, n.type)
                    });
                    u.head.appendChild(r[0])
                },
                abort: function () {
                    t && t()
                }
            }
        }
    });
    si = [];
    lt = /(=)\?(?=&|$)|\?\?/;
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var n = si.pop() || i.expando + "_" + ui++;
            return this[n] = !0, n
        }
    });
    i.ajaxPrefilter(
        "json jsonp", function (r, u, f) {
            var e, s, o, h = r.jsonp !== !1 && (lt.test(r.url) ? "url" : typeof r.data == "string" && !(r.contentType || "").indexOf("application/x-www-form-urlencoded") && lt.test(r.data) && "data");
            if (h || r.dataTypes[0] === "jsonp") return e = r.jsonpCallback = i.isFunction(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, h ? r[h] = r[h].replace(lt, "$1" + e) : r.jsonp !== !1 && (r.url += (fi.test(r.url) ? "&" : "?") + r.jsonp + "=" + e), r.converters["script json"] = function () {
                return o || i.error(e + " was not called"), o[0]
            }, r.dataTypes[
                0] = "json", s = n[e], n[e] = function () {
                o = arguments
            }, f.always(function () {
                n[e] = s;
                r[e] && (r.jsonpCallback = u.jsonpCallback, si.push(e));
                o && i.isFunction(s) && s(o[0]);
                o = s = t
            }), "script"
        });
    i.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (n) {}
    };
    var g = i.ajaxSettings.xhr(),
        he = {
            0: 200,
            1223: 204
        },
        ce = 0,
        nt = {};
    if (n.ActiveXObject) i(n).on("unload", function () {
        for (var n in nt) nt[n]();
        nt = t
    });
    i.support.cors = !!g && "withCredentials" in g;
    i.support.ajax = g = !!g;
    i.ajaxTransport(function (n) {
        var r;
        if (i.support.cors || g && !n.crossDomain) return {
            send: function (i, u) {
                var e, o, f = n.xhr();
                if (f.open(n.type, n.url, n.async, n.username, n.password), n.xhrFields)
                    for (e in n.xhrFields) f[e] = n.xhrFields[e];
                n.mimeType && f.overrideMimeType && f.overrideMimeType(n.mimeType);
                n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (e in i) f.setRequestHeader(e, i[e]);
                r = function (n) {
                    return function () {
                        r && (delete nt[o], r = f.onload = f.onerror = null, n === "abort" ? f.abort() : n === "error" ? u(f.status || 404, f.statusText) : u(he[f.status] || f.status, f.statusText, typeof f.responseText == "string" ? {
                            text: f.responseText
                        } : t, f.getAllResponseHeaders()))
                    }
                };
                f.onload = r();
                f.onerror = r("error");
                r = nt[o = ce++] = r("abort");
                f.send(n.hasContent && n.data || null)
            },
            abort: function () {
                r && r()
            }
        }
    });
    var b, at, le = /^(?:toggle|show|hide)$/,
        uu = new RegExp("^(?:([+-])=|)(" + ot + ")([a-z%]*)$", "i"),
        ae = /queueHooks$/,
        vt = [ye],
        tt = {
            "*": [
                function (n, t) {
                    var f = this.createTween(n, t),
                        s = f.cur(),
                        u = uu.exec(t),
                        e = u && u[3] || (i.cssNumber[n] ? "" : "px"),
                        r = (i.cssNumber[n] || e !== "px" && +s) && uu.exec(i.css(
                            f.elem, n)),
                        o = 1,
                        h = 20;
                    if (r && r[3] !== e) {
                        e = e || r[3];
                        u = u || [];
                        r = +s || 1;
                        do o = o || ".5", r = r / o, i.style(f.elem, n, r + e); while (o !== (o = f.cur() / s) && o !== 1 && --h)
                    }
                    return u && (r = f.start = +r || +s || 0, f.unit = e, f.end = u[1] ? r + (u[1] + 1) * u[2] : +u[2]), f
                }]
        };
    i.Animation = i.extend(ou, {
        tweener: function (n, t) {
            i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
            for (var r, u = 0, f = n.length; u < f; u++) r = n[u], tt[r] = tt[r] || [], tt[r].unshift(t)
        },
        prefilter: function (n, t) {
            t ? vt.unshift(n) : vt.push(n)
        }
    });
    i.Tween = e;
    e.prototype = {
        constructor: e,
        init: function (n, t, r, u, f,
            e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function () {
            var n = e.propHooks[this.prop];
            return n && n.get ? n.get(this) : e.propHooks._default.get(this)
        },
        run: function (n) {
            var t, r = e.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(
                this.elem, this.now, this), r && r.set ? r.set(this) : e.propHooks._default.set(this), this
        }
    };
    e.prototype.init.prototype = e.prototype;
    e.propHooks = {
        _default: {
            get: function (n) {
                var t;
                return n.elem[n.prop] != null && (!n.elem.style || n.elem.style[n.prop] == null) ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, ""), !t || t === "auto" ? 0 : t)
            },
            set: function (n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (n.elem.style[i.cssProps[n.prop]] != null || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    };
    e.propHooks.
    scrollTop = e.propHooks.scrollLeft = {
        set: function (n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.each(["toggle", "show", "hide"], function (n, t) {
        var r = i.fn[t];
        i.fn[t] = function (n, i, u) {
            return n == null || typeof n == "boolean" ? r.apply(this, arguments) : this.animate(yt(t, !0), n, i, u)
        }
    });
    i.fn.extend({
        fadeTo: function (n, t, i, r) {
            return this.filter(d).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function (n, t, u, f) {
            var s = i.isEmptyObject(n),
                o = i.speed(t, u, f),
                e = function () {
                    var t = ou(this,
                        i.extend({}, n), o);
                    (s || r.get(this, "finish")) && t.stop(!0)
                };
            return e.finish = e, s || o.queue === !1 ? this.each(e) : this.queue(o.queue, e)
        },
        stop: function (n, u, f) {
            var e = function (n) {
                var t = n.stop;
                delete n.stop;
                t(f)
            };
            return typeof n != "string" && (f = u, u = n, n = t), u && n !== !1 && this.queue(n || "fx", []), this.each(function () {
                var s = !0,
                    t = n != null && n + "queueHooks",
                    o = i.timers,
                    u = r.get(this);
                if (t) u[t] && u[t].stop && e(u[t]);
                else
                    for (t in u) u[t] && u[t].stop && ae.test(t) && e(u[t]);
                for (t = o.length; t--;) o[t].elem === this && (n == null || o[t].queue === n) && (o[t].anim.stop(f), s = !1, o.splice(t, 1));
                (s || !f) && i.dequeue(this, n)
            })
        },
        finish: function (n) {
            return n !== !1 && (n = n || "fx"), this.each(function () {
                var t, e = r.get(this),
                    u = e[n + "queue"],
                    o = e[n + "queueHooks"],
                    f = i.timers,
                    s = u ? u.length : 0;
                for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
                for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
                delete e.finish
            })
        }
    });
    i.each({
        slideDown: yt("show"),
        slideUp: yt("hide"),
        slideToggle: yt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (n, t) {
        i.fn[n] = function (n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.speed = function (n, t, r) {
        var u = n && typeof n == "object" ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (u.queue == null || u.queue === !0) && (u.queue = "fx"),
            u.old = u.complete, u.complete = function () {
                i.isFunction(u.old) && u.old.call(this);
                u.queue && i.dequeue(this, u.queue)
            }, u
    };
    i.easing = {
        linear: function (n) {
            return n
        },
        swing: function (n) {
            return .5 - Math.cos(n * Math.PI) / 2
        }
    };
    i.timers = [];
    i.fx = e.prototype.init;
    i.fx.tick = function () {
        var u, n = i.timers,
            r = 0;
        for (b = i.now(); r < n.length; r++) u = n[r], u() || n[r] !== u || n.splice(r--, 1);
        n.length || i.fx.stop();
        b = t
    };
    i.fx.timer = function (n) {
        n() && i.timers.push(n) && i.fx.start()
    };
    i.fx.interval = 13;
    i.fx.start = function () {
        at || (at = setInterval(i.fx.tick,
            i.fx.interval))
    };
    i.fx.stop = function () {
        clearInterval(at);
        at = null
    };
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fx.step = {};
    i.expr && i.expr.filters && (i.expr.filters.animated = function (n) {
        return i.grep(i.timers, function (t) {
            return n === t.elem
        }).length
    });
    i.fn.offset = function (n) {
        if (arguments.length) return n === t ? this : this.each(function (t) {
            i.offset.setOffset(this, n, t)
        });
        var u, e, r = this[0],
            f = {
                top: 0,
                left: 0
            },
            o = r && r.ownerDocument;
        if (o) return (u = o.documentElement, !i.contains(u, r)) ? f : (typeof r.getBoundingClientRect !==
            rt && (f = r.getBoundingClientRect()), e = su(o), {
                top: f.top + e.pageYOffset - u.clientTop,
                left: f.left + e.pageXOffset - u.clientLeft
            })
    };
    i.offset = {
        setOffset: function (n, t, r) {
            var e, o, s, h, u, c, v, l = i.css(n, "position"),
                a = i(n),
                f = {};
            l === "static" && (n.style.position = "relative");
            u = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            v = (l === "absolute" || l === "fixed") && (s + c).indexOf("auto") > -1;
            v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
            i.isFunction(t) && (t = t.call(n, r, u));
            t.top != null && (f.top = t.top - u.top +
                h);
            t.left != null && (f.left = t.left - u.left + o);
            "using" in t ? t.using.call(n, f) : a.css(f)
        }
    };
    i.fn.extend({
        position: function () {
            if (this[0]) {
                var n, r, u = this[0],
                    t = {
                        top: 0,
                        left: 0
                    };
                return i.css(u, "position") === "fixed" ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)), {
                    top: r.top - t.top - i.css(u, "marginTop", !0),
                    left: r.left - t.left - i.css(u, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var n = this.offsetParent || ci; n && !i.nodeName(n, "html") && i.css(n, "position") === "static";) n = n.offsetParent;
                return n || ci
            })
        }
    });
    i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (r, u) {
        var f = "pageYOffset" === u;
        i.fn[r] = function (e) {
            return i.access(this, function (i, r, e) {
                var o = su(i);
                if (e === t) return o ? o[u] : i[r];
                o ? o.scrollTo(f ? n.pageXOffset : e, f ? e : n.pageYOffset) : i[r] = e
            }, r, e, arguments.length, null)
        }
    });
    i.each({
        Height: "height",
        Width: "width"
    }, function (n, r) {
        i.each({
            padding: "inner" + n,
            content: r,
            "": "outer" + n
        }, function (u, f) {
            i.fn[f] = function (f, e) {
                var o = arguments.length && (u || typeof f != "boolean"),
                    s = u || (f === !0 || e === !0 ? "margin" : "border");
                return i.access(this, function (r, u, f) {
                    var e;
                    return i.isWindow(r) ? r.document.documentElement["client" + n] : r.nodeType === 9 ? (e = r.documentElement, Math.max(r.body["scroll" + n], e["scroll" + n], r.body["offset" + n], e["offset" + n], e["client" + n])) : f === t ? i.css(r, u, s) : i.style(r, u, f, s)
                }, r, o ? f : t, o, null)
            }
        })
    });
    i.fn.size = function () {
        return this.length
    };
    i.fn.andSelf =
        i.fn.addBack;
    typeof module == "object" && module && typeof module.exports == "object" ? module.exports = i : typeof define == "function" && define.amd && define("jquery", [], function () {
        return i
    });
    typeof n == "object" && typeof n.document == "object" && (n.jQuery = n.$ = i)
})(window);
(function (n) {
    "use strict";

    function r() {
        var t = n.printStackTrace || function () {
            return ""
        };
        return t()
    }

    function f(n, t) {
        return n && h.test(n) && !s.test(n) ? !0 : n && (n.indexOf("chrome") === 0 || n === "runtime") ? !0 : t === 0 ? !0 : !1
    }

    function a(n) {
        var t = require("hudl.ajax");
        t.post("/Logging/LogMessage", {
            message: n
        })
    }

    function v(n, t, i) {
        var e = "",
            o = typeof n;
        if (o === "object") {
            if (f(n.fileName, n.lineNumber))
                return;
            n.message ? e = "Message=" + n.message + "\n" : n.get_message && (e = "Message=" + n.get_message() + "\n");
            n.get_statusCode && (e += "StatusCode=" + n.get_statusCode() + "\n");
            n.get_exception && (e += "Exception=" + n.get_exception() + "\n");
            e += n.stack ? "Stack=" + n.stack + "\n" : n.get_stackTrace ? "StackTrace=" + n.get_stackTrace() + "\n" : "CallStack=" + r() + "\n";
            n.fileName && (e += "File=" + n.fileName + "\n");
            n.lineNumber && (e += "LineNumber=" + n.lineNumber + "\n")
        } else
            o === "string" && (e = "Message=" + n + "\nCallStack=" + r() + "\n");
        t && (e += "Event=" + t + "\n");
        i && (e += "EventHandler=" + i.toString() + "\n");
        u(e)
    }
    var i = n.$,
        e = function (n) {
            var t = 0,
                i,
                r,
                u;
            if (!n.length)
                return t;
            for (i = 0, r = n.length; i < r; i++)
                u = n.charCodeAt(i),
                t = (t << 5) - t + u | 0;
            return t
        },
        o = function (n) {
            var r,
                u,
                f,
                t = null,
                i = 0,
                e = 1,
                o = function () {
                    i = new Date;
                    t = null;
                    f = n.apply(r, u)
                };
            return function () {
                var s = new Date,
                    c,
                    h;
                return i || (i = s), c = Math.random() * (Math.pow(2, Math.min(5, e++)) - 1), h = 1e3 * Math.abs(c) - (s - i), r = this, u = arguments, h <= 0 ? (clearTimeout(t), t = null, i = s, f = n.apply(r, u)) : t || (t = setTimeout(o, h)), f
            }
        },
        t = {},
        u = function (n) {
            var r = "" + e(n),
                i;
            t[r] ? i = t[r] : (i = o(l), t[r] = i);
            i(n)
        },
        s = /https?:\/\/[a-z]+\.hudl\.com/i,
        h = /https?:\/\//i,
        c = /xpopup\.js/i,
        l = function (n) {
            var t,
                i;
            if (!c.test(n)) {
                try {
                    t = new XMLHttpRequest
                } catch (r) {
                    try {
                        t = new ActiveXObject("Microsoft.XMLHTTP")
                    } catch (u) {}
                }
                if (t) {
                    i = "";
                    try {
                        i = document.head.getAttribute("data-request-id")
                    } catch (r) {}
                    t.open("POST", "/Services/WebErrorReporter.ashx", !0);
                    t.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    t.send("requestId=" + i + "&error=" + escape(n))
                }
            }
        };
    n.onerror = function (t, i, r) {
        if (f(i, r))
            return !1;
        n.__browserErrorMessage || (n.__browserErrorMessage = "");
        n.__browserErrorMessage += t + " @ " + i + ":" + r + "\n";
        var e = "Message=" + t + "\nFile=" + i + "\nLineNumber=" + r + "\n";
        return u(e), !1
    };
    define("error-reporter", {
        sendLog: a,
        sendError: v
    });
    n.console || (n.console = {});
    i.each("log debug info warn error".split(" "), function (n, t) {
        console[t] || (console[t] = i.noop)
    })
})(window);
define("jquery-private", ["jquery", "expose"], function (n, t) {
    "use strict";
    return t("$", n.noConflict(!0), !0)
});
define("hudl.embedded-data", function () {
    "use strict";
    var n = window.__hudlEmbed;
    try {
        delete window.__hudlEmbed
    } catch (t) {
        window.__hudlEmbed = undefined
    }
    return n
});
define("json-copy", ["jquery"], function (n) {
    "use strict";

    function t(i, r) {
        if (n.isPlainObject(i)) {
            var u = {},
                f = typeof i.toJSON == "function" ? i.toJSON() : i;
            return n.each(f, function (n, i) {
                u[r(n)] = t(i, r)
            }), u
        }
        return n.isArray(i) ? n.map(i, function (n) {
            return t(n, r)
        }) : i
    }

    function i(n) {
        return n.charAt(0).toUpperCase() + n.substring(1)
    }

    function r(n) {
        return n.charAt(0).toLowerCase() + n.substring(1)
    }

    function u(n) {
        return n
    }
    return {
        copy: function (n) {
            return t(n, u)
        },
        toCamelCase: function (n) {
            return t(n, r)
        },
        toPascalCase: function (n) {
            return t(n, i)
        }
    }
});
define("hudl", ["jquery", "hudl.embedded-data", "expose"], function (n, t, i) {
    "use strict";
    var r,
        u,
        f;
    return f = {
        load: function (n, t, i, u) {
            if (u.isBuild)
                i();
            else {
                var f = r[n];
                if (typeof f == "undefined")
                    throw new Error('Hudl property "' + n + '" is not defined.');
                i(f)
            }
        },
        createGlobal: function () {
            window.Hudl = u
        }
    }, r = t.hudl, i(r), u = {
        expose: function () {
            i.expose(u)
        }
    }, Object.defineProperty && n.each(r, function (n) {
        Object.defineProperties && Object.defineProperty(f, n, {
            get: function () {
                throw new Error('"Hudl.' + n + '" has been removed. For normal code execution, instead use the appropriate replacement module or use this module as a plugin, e.g., "hudl!' + n + '" as a stop-gap solution. For inspection/debugging purposes, you can call Hudl.expose() to temporarily expose these properties.');
            },
            set: function () {
                throw new Error('"' + n + '" cannot be set on the Hudl module plugin.');
            },
            enumerable: !1,
            configurable: !1
        })
    }), f
});
define("hudl.expose", function () {
    "use strict";

    function f() {
        if (t)
            for (var i; i = n.shift();)
                i.call(window)
    }

    function r(n, t, r) {
        (r ? window : i)[n] = t
    }

    function e(n) {
        for (var t in n)
            n.hasOwnProperty(t) && r(t, n[t])
    }

    function u(t, i, u) {
        return typeof t == "string" ? (n.push(r.bind(null, t, i, u)), i) : (n.push(e.bind(null, t)), t)
    }
    var t = !1,
        n = [],
        i;
    return u.expose = function (n) {
        i = n;
        t = !0;
        f()
    }, u
});
define("hudl.data", ["jquery", "hudl.embedded-data", "json-copy", "expose"], function (n, t, i, r) {
    "use strict";

    function s(t, i) {
        var u = (i || "").split("."),
            r;
        return n.each(u, function (n, i) {
            return (r = t[i], r === undefined) ? !1 : (t = r, !0)
        }), r
    }

    function e(t, r) {
        if (t === undefined)
            return n.extend(!0, {}, f);
        var u = o.test(t) ? s(f, t) : f[t];
        if (typeof u == "undefined" || u === null) {
            if (r)
                return null;
            throw new Error(('Request for non-nullable data property "' + t + '" failed. Property not found. Check the property\'s spelling and ensure it is camel-cased. If the property can contain a null value, use require("data").nullable("' + t + '") instead.').replace(/"/g, "'"));
        }
        return i.copy(u)
    }

    function u(n) {
        return e(n, !1)
    }
    var f = t.data,
        o = /\./;
    return u.nullable = function (n) {
        return e(n, !0)
    }, Object.defineProperties && n.each(f, function (n) {
        var t = n.charAt(0).toUpperCase() + n.substring(1);
   [n, t].forEach(function (t) {
            u[t] || Object.defineProperty(u, t, {
                get: function () {
                    throw new Error(('Invalid access for property "' + t + '". The data module should be used as a function: require("data")("' + n + '") instead of require("data").' + t + ".").replace(/"/g, "'"));
                },
                enumerable: !1,
                configurable: !1
            })
        })
    }), r("data", u), u
});
define("hudl.config", ["hudl.embedded-data"], function (n) {
    "use strict";

    function i(n) {
        return t[n]
    }
    var t = n.config;
    return i
});
define("hudl.ajax", ["jquery"], function (n) {
    "use strict";

    function i(n) {
        return n ? JSON.parse(n) : null
    }

    function r(t, r, f, e) {
        var o = {
            type: t,
            url: r,
            data: t === "GET" || !f ? f : JSON.stringify(f),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            converters: {
                "text json": i
            }
        };
        return e && n.extend(o, e), u(n.ajax(o))
    }

    function u(n) {
        return n
    }
    var t = {};
    return n.each("post put patch delete".split(" "), function (n, i) {
        t[i] = r.bind(null, i.toUpperCase())
    }), t.get = n.get, t
});
define("hudl.services", ["jquery", "hudl.embedded-data", "hudl.ajax"], function (n, t, i) {
    "use strict";

    function r(n) {
        this._serviceUrl = n
    }

    function e(n, t) {
        var i = u[n];
        return t && f.pairs(t).forEach(function (n) {
            var t = n[0],
                r = n[1];
            i = i.replace("{" + t + "}", r)
        }), new r(i)
    }
    var f = function () {
            var n = {
                keys: Object.keys
            };
            return n.pairs = function (t) {
                for (var r = n.keys(t), u = r.length, f = Array(u), i = 0; i < u; i++)
                    f[i] = [r[i], t[r[i]]];
                return f
            }, n
        }(),
        u;
    return n.each("get post put patch delete".split(" "), function (n, t) {
        r.prototype[t] = function (n, r) {
            return i[t](this._serviceUrl, n, r)
        }
    }), u = t.services, e
});
define("hudl.model", ["hudl.embedded-data", "json-copy"], function (n, t) {
    "use strict";
    var i = n.model;
    return {
        get: function () {
            return t.copy(i)
        }
    }
});
define("hudl.resources", ["hudl.embedded-data"], function () {
    "use strict";
    return {}
});
define("inspector/page/skeleton", ["require", "jquery", "inspector/page/skeleton-settings", "hotkeys"], function (n, t, i, r) {
    "use strict";
    var u = "config-" + +new Date;
    define(u, function () {
        return {
            load: function (n, t, i, r) {
                i(r[n])
            }
        }
    });
    requirejs([u + "!baseUrl"], function (n) {
        function v() {
            function n() {
                var n = new t.Deferred;
                return requirejs(["inspector/page/main"], function (t) {
                    n.resolve(t)
                }, n.reject), n.promise()
            }

            function i() {
                var n = new t.Deferred;
                return requirejs(["inspector/wrappers/iframe/iframe-wrapper"], function (i) {
                    function o() {
                        f[u ? "hide" : "show"]()
                    }

                    function s(n) {
                        u = n;
                        window.localStorage && (localStorage[c] = JSON.stringify(u))
                    }
                    var f = new i,
                        u = !1;
                    t(f).on({
                        show: s.bind(null, !0),
                        hide: s.bind(null, !1)
                    });
                    o();
                    r(e).on("keydown", l, o);
                    n.resolve()
                }, n.reject), n.promise()
            }
            a || (a = !0, p(), s ? n().done(function (n) {
                return n.extensionLoaded().fail(function () {
                    return console.warn("Expecting extension to be active. Falling back to iframe wrapper."), window.localStorage && delete localStorage[h], i()
                })
            }) : t.when(n(), i()).fail(function () {
                console.error("Failed to load Hudl Inspector with iframe wrapper.")
            }))
        }
        var e = t(document),
            y = /scripts/i.test(n),
            o = !1,
            s = !1,
            h = "hudl-inspector-chrome-extension-installed",
            c = "hudl-inspector-active",
            l = i.toggleShortcutKeys,
            p = function () {
                var n = !1;
                return function () {
                    n || (n = !0, requirejs.config({
                        config: {
                            "inspector/messaging/messaging": {
                                senderName: "page"
                            }
                        },
                        map: {
                            "*": {
                                messaging: "inspector/messaging/messaging",
                                "messaging-connector": "inspector/messaging/page-messaging-connector"
                            }
                        }
                    }), y && requirejs.config({
                        paths: {
                            inspector: "/js/inspector",
                            "inspector/page/skeleton": "/scripts/inspector/page/skeleton",
                            "inspector/page/handlers": "/scripts/inspector/page/handlers"
                        }
                    }))
                }
            }(),
            a = !1,
            u,
            f;
        if (window.localStorage && (u = localStorage[h], u && JSON.parse(u) && (s = !0), f = localStorage[c], f && JSON.parse(f) && (o = !0)), o)
            v();
        else
            r(e).on("keydown", l, v)
    })
});
define("hudl.user", function () {}),
function () {
    "use strict";
    require(["hudl"], function (n) {
        n.createGlobal()
    });
    define("doc", ["jquery"], function (n) {
        return n(document)
    });
    define("win", ["jquery"], function (n) {
        return n(window)
    });
    define("modernizr", function () {
        var n = window.Modernizr;
        try {
            delete window.Modernizr
        } catch (t) {
            window.Modernizr = undefined
        }
        return n
    });
    define("doc", ["jquery"], function (n) {
        return n(document)
    });
    define("win", ["jquery"], function (n) {
        return n(window)
    });
    require(["hudl.config"], function (n) {
        n("includeHudlInspector") && require(["inspector-skeleton"])
    });
    require(["hudl.embedded-data", "jquery"], function (n, t) {
        var i = n.requireConfig;
        if (require.config(i.rawConfig), typeof i.configOverrides != "undefined" && require.config(i.configOverrides), typeof i.onConfig == "function")
            i.onConfig(require);
        t.each(i.mainModules, function (n, t) {
            require([t.loadName], function () {
                require([t.moduleName])
            })
        })
    })
}()