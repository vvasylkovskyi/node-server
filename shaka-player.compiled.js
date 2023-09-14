/*
 @license
 Shaka Player
 Copyright 2016 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
(function () {
  var innerGlobal = typeof window != "undefined" ? window : global;
  var exportTo = {};
  (function (window, global, module) {
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var q;
    function ba(a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    }
    var ca =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          };
    function da(a) {
      a = [
        "object" == typeof globalThis && globalThis,
        a,
        "object" == typeof window && window,
        "object" == typeof self && self,
        "object" == typeof global && global,
      ];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c;
      }
      throw Error("Cannot find global object");
    }
    var ea = da(this);
    function ha(a, b) {
      if (b)
        a: {
          var c = ea;
          a = a.split(".");
          for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e];
          }
          a = a[a.length - 1];
          d = c[a];
          b = b(d);
          b != d &&
            null != b &&
            ca(c, a, { configurable: !0, writable: !0, value: b });
        }
    }
    ha("Symbol", function (a) {
      function b(f) {
        if (this instanceof b)
          throw new TypeError("Symbol is not a constructor");
        return new c(d + (f || "") + "_" + e++, f);
      }
      function c(f, g) {
        this.g = f;
        ca(this, "description", { configurable: !0, writable: !0, value: g });
      }
      if (a) return a;
      c.prototype.toString = function () {
        return this.g;
      };
      var d = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
        e = 0;
      return b;
    });
    ha("Symbol.iterator", function (a) {
      if (a) return a;
      a = Symbol("Symbol.iterator");
      for (
        var b =
            "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
              " "
            ),
          c = 0;
        c < b.length;
        c++
      ) {
        var d = ea[b[c]];
        "function" === typeof d &&
          "function" != typeof d.prototype[a] &&
          ca(d.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function () {
              return ja(ba(this));
            },
          });
      }
      return a;
    });
    function ja(a) {
      a = { next: a };
      a[Symbol.iterator] = function () {
        return this;
      };
      return a;
    }
    function v(a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      return b ? b.call(a) : { next: ba(a) };
    }
    function ka(a) {
      if (!(a instanceof Array)) {
        a = v(a);
        for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
        a = c;
      }
      return a;
    }
    var la =
        "function" == typeof Object.create
          ? Object.create
          : function (a) {
              function b() {}
              b.prototype = a;
              return new b();
            },
      ma;
    if ("function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
    else {
      var na;
      a: {
        var oa = { a: !0 },
          pa = {};
        try {
          pa.__proto__ = oa;
          na = pa.a;
          break a;
        } catch (a) {}
        na = !1;
      }
      ma = na
        ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
              throw new TypeError(a + " is not extensible");
            return a;
          }
        : null;
    }
    var qa = ma;
    function ra(a, b) {
      a.prototype = la(b.prototype);
      a.prototype.constructor = a;
      if (qa) qa(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.mg = b.prototype;
    }
    function ta() {
      this.o = !1;
      this.j = null;
      this.h = void 0;
      this.g = 1;
      this.l = this.m = 0;
      this.u = this.i = null;
    }
    function ua(a) {
      if (a.o) throw new TypeError("Generator is already running");
      a.o = !0;
    }
    ta.prototype.s = function (a) {
      this.h = a;
    };
    function va(a, b) {
      a.i = { Vd: b, ae: !0 };
      a.g = a.m || a.l;
    }
    ta.prototype.return = function (a) {
      this.i = { return: a };
      this.g = this.l;
    };
    function y(a, b, c) {
      a.g = c;
      return { value: b };
    }
    ta.prototype.A = function (a) {
      this.g = a;
    };
    function B(a) {
      a.g = 0;
    }
    function E(a, b, c) {
      a.m = b;
      void 0 != c && (a.l = c);
    }
    function wa(a, b) {
      a.g = b;
      a.m = 0;
    }
    function F(a) {
      a.m = 0;
      var b = a.i.Vd;
      a.i = null;
      return b;
    }
    function xa(a) {
      a.u = [a.i];
      a.m = 0;
      a.l = 0;
    }
    function ya(a) {
      var b = a.u.splice(0)[0];
      (b = a.i = a.i || b)
        ? b.ae
          ? (a.g = a.m || a.l)
          : void 0 != b.A && a.l < b.A
          ? ((a.g = b.A), (a.i = null))
          : (a.g = a.l)
        : (a.g = 0);
    }
    function Aa(a) {
      this.g = new ta();
      this.h = a;
    }
    function Ba(a, b) {
      ua(a.g);
      var c = a.g.j;
      if (c)
        return Da(
          a,
          "return" in c
            ? c["return"]
            : function (d) {
                return { value: d, done: !0 };
              },
          b,
          a.g.return
        );
      a.g.return(b);
      return Ea(a);
    }
    function Da(a, b, c, d) {
      try {
        var e = b.call(a.g.j, c);
        if (!(e instanceof Object))
          throw new TypeError("Iterator result " + e + " is not an object");
        if (!e.done) return (a.g.o = !1), e;
        var f = e.value;
      } catch (g) {
        return (a.g.j = null), va(a.g, g), Ea(a);
      }
      a.g.j = null;
      d.call(a.g, f);
      return Ea(a);
    }
    function Ea(a) {
      for (; a.g.g; )
        try {
          var b = a.h(a.g);
          if (b) return (a.g.o = !1), { value: b.value, done: !1 };
        } catch (c) {
          (a.g.h = void 0), va(a.g, c);
        }
      a.g.o = !1;
      if (a.g.i) {
        b = a.g.i;
        a.g.i = null;
        if (b.ae) throw b.Vd;
        return { value: b.return, done: !0 };
      }
      return { value: void 0, done: !0 };
    }
    function Ga(a) {
      this.next = function (b) {
        ua(a.g);
        a.g.j ? (b = Da(a, a.g.j.next, b, a.g.s)) : (a.g.s(b), (b = Ea(a)));
        return b;
      };
      this.throw = function (b) {
        ua(a.g);
        a.g.j
          ? (b = Da(a, a.g.j["throw"], b, a.g.s))
          : (va(a.g, b), (b = Ea(a)));
        return b;
      };
      this.return = function (b) {
        return Ba(a, b);
      };
      this[Symbol.iterator] = function () {
        return this;
      };
    }
    function Ha(a) {
      function b(d) {
        return a.next(d);
      }
      function c(d) {
        return a.throw(d);
      }
      return new Promise(function (d, e) {
        function f(g) {
          g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e);
        }
        f(a.next());
      });
    }
    function L(a) {
      return Ha(new Ga(new Aa(a)));
    }
    function Ia() {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
        b[c - a] = arguments[c];
      return b;
    }
    ha("Promise", function (a) {
      function b(g) {
        this.h = 0;
        this.i = void 0;
        this.g = [];
        this.o = !1;
        var h = this.j();
        try {
          g(h.resolve, h.reject);
        } catch (k) {
          h.reject(k);
        }
      }
      function c() {
        this.g = null;
      }
      function d(g) {
        return g instanceof b
          ? g
          : new b(function (h) {
              h(g);
            });
      }
      if (a) return a;
      c.prototype.h = function (g) {
        if (null == this.g) {
          this.g = [];
          var h = this;
          this.i(function () {
            h.l();
          });
        }
        this.g.push(g);
      };
      var e = ea.setTimeout;
      c.prototype.i = function (g) {
        e(g, 0);
      };
      c.prototype.l = function () {
        for (; this.g && this.g.length; ) {
          var g = this.g;
          this.g = [];
          for (var h = 0; h < g.length; ++h) {
            var k = g[h];
            g[h] = null;
            try {
              k();
            } catch (l) {
              this.j(l);
            }
          }
        }
        this.g = null;
      };
      c.prototype.j = function (g) {
        this.i(function () {
          throw g;
        });
      };
      b.prototype.j = function () {
        function g(l) {
          return function (m) {
            k || ((k = !0), l.call(h, m));
          };
        }
        var h = this,
          k = !1;
        return { resolve: g(this.F), reject: g(this.l) };
      };
      b.prototype.F = function (g) {
        if (g === this)
          this.l(new TypeError("A Promise cannot resolve to itself"));
        else if (g instanceof b) this.J(g);
        else {
          a: switch (typeof g) {
            case "object":
              var h = null != g;
              break a;
            case "function":
              h = !0;
              break a;
            default:
              h = !1;
          }
          h ? this.C(g) : this.m(g);
        }
      };
      b.prototype.C = function (g) {
        var h = void 0;
        try {
          h = g.then;
        } catch (k) {
          this.l(k);
          return;
        }
        "function" == typeof h ? this.M(h, g) : this.m(g);
      };
      b.prototype.l = function (g) {
        this.s(2, g);
      };
      b.prototype.m = function (g) {
        this.s(1, g);
      };
      b.prototype.s = function (g, h) {
        if (0 != this.h)
          throw Error(
            "Cannot settle(" +
              g +
              ", " +
              h +
              "): Promise already settled in state" +
              this.h
          );
        this.h = g;
        this.i = h;
        2 === this.h && this.H();
        this.u();
      };
      b.prototype.H = function () {
        var g = this;
        e(function () {
          if (g.B()) {
            var h = ea.console;
            "undefined" !== typeof h && h.error(g.i);
          }
        }, 1);
      };
      b.prototype.B = function () {
        if (this.o) return !1;
        var g = ea.CustomEvent,
          h = ea.Event,
          k = ea.dispatchEvent;
        if ("undefined" === typeof k) return !0;
        "function" === typeof g
          ? (g = new g("unhandledrejection", { cancelable: !0 }))
          : "function" === typeof h
          ? (g = new h("unhandledrejection", { cancelable: !0 }))
          : ((g = ea.document.createEvent("CustomEvent")),
            g.initCustomEvent("unhandledrejection", !1, !0, g));
        g.promise = this;
        g.reason = this.i;
        return k(g);
      };
      b.prototype.u = function () {
        if (null != this.g) {
          for (var g = 0; g < this.g.length; ++g) f.h(this.g[g]);
          this.g = null;
        }
      };
      var f = new c();
      b.prototype.J = function (g) {
        var h = this.j();
        g.tc(h.resolve, h.reject);
      };
      b.prototype.M = function (g, h) {
        var k = this.j();
        try {
          g.call(h, k.resolve, k.reject);
        } catch (l) {
          k.reject(l);
        }
      };
      b.prototype.then = function (g, h) {
        function k(n, r) {
          return "function" == typeof n
            ? function (u) {
                try {
                  l(n(u));
                } catch (t) {
                  m(t);
                }
              }
            : r;
        }
        var l,
          m,
          p = new b(function (n, r) {
            l = n;
            m = r;
          });
        this.tc(k(g, l), k(h, m));
        return p;
      };
      b.prototype.catch = function (g) {
        return this.then(void 0, g);
      };
      b.prototype.tc = function (g, h) {
        function k() {
          switch (l.h) {
            case 1:
              g(l.i);
              break;
            case 2:
              h(l.i);
              break;
            default:
              throw Error("Unexpected state: " + l.h);
          }
        }
        var l = this;
        null == this.g ? f.h(k) : this.g.push(k);
        this.o = !0;
      };
      b.resolve = d;
      b.reject = function (g) {
        return new b(function (h, k) {
          k(g);
        });
      };
      b.race = function (g) {
        return new b(function (h, k) {
          for (var l = v(g), m = l.next(); !m.done; m = l.next())
            d(m.value).tc(h, k);
        });
      };
      b.all = function (g) {
        var h = v(g),
          k = h.next();
        return k.done
          ? d([])
          : new b(function (l, m) {
              function p(u) {
                return function (t) {
                  n[u] = t;
                  r--;
                  0 == r && l(n);
                };
              }
              var n = [],
                r = 0;
              do
                n.push(void 0),
                  r++,
                  d(k.value).tc(p(n.length - 1), m),
                  (k = h.next());
              while (!k.done);
            });
      };
      return b;
    });
    function Ja(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }
    ha("WeakMap", function (a) {
      function b(k) {
        this.g = (h += Math.random() + 1).toString();
        if (k) {
          k = v(k);
          for (var l; !(l = k.next()).done; )
            (l = l.value), this.set(l[0], l[1]);
        }
      }
      function c() {}
      function d(k) {
        var l = typeof k;
        return ("object" === l && null !== k) || "function" === l;
      }
      function e(k) {
        if (!Ja(k, g)) {
          var l = new c();
          ca(k, g, { value: l });
        }
      }
      function f(k) {
        var l = Object[k];
        l &&
          (Object[k] = function (m) {
            if (m instanceof c) return m;
            Object.isExtensible(m) && e(m);
            return l(m);
          });
      }
      if (
        (function () {
          if (!a || !Object.seal) return !1;
          try {
            var k = Object.seal({}),
              l = Object.seal({}),
              m = new a([
                [k, 2],
                [l, 3],
              ]);
            if (2 != m.get(k) || 3 != m.get(l)) return !1;
            m.delete(k);
            m.set(l, 4);
            return !m.has(k) && 4 == m.get(l);
          } catch (p) {
            return !1;
          }
        })()
      )
        return a;
      var g = "$jscomp_hidden_" + Math.random();
      f("freeze");
      f("preventExtensions");
      f("seal");
      var h = 0;
      b.prototype.set = function (k, l) {
        if (!d(k)) throw Error("Invalid WeakMap key");
        e(k);
        if (!Ja(k, g)) throw Error("WeakMap key fail: " + k);
        k[g][this.g] = l;
        return this;
      };
      b.prototype.get = function (k) {
        return d(k) && Ja(k, g) ? k[g][this.g] : void 0;
      };
      b.prototype.has = function (k) {
        return d(k) && Ja(k, g) && Ja(k[g], this.g);
      };
      b.prototype.delete = function (k) {
        return d(k) && Ja(k, g) && Ja(k[g], this.g) ? delete k[g][this.g] : !1;
      };
      return b;
    });
    ha("Map", function (a) {
      function b() {
        var h = {};
        return (h.Za = h.next = h.head = h);
      }
      function c(h, k) {
        var l = h.g;
        return ja(function () {
          if (l) {
            for (; l.head != h.g; ) l = l.Za;
            for (; l.next != l.head; )
              return (l = l.next), { done: !1, value: k(l) };
            l = null;
          }
          return { done: !0, value: void 0 };
        });
      }
      function d(h, k) {
        var l = k && typeof k;
        "object" == l || "function" == l
          ? f.has(k)
            ? (l = f.get(k))
            : ((l = "" + ++g), f.set(k, l))
          : (l = "p_" + k);
        var m = h.h[l];
        if (m && Ja(h.h, l))
          for (h = 0; h < m.length; h++) {
            var p = m[h];
            if ((k !== k && p.key !== p.key) || k === p.key)
              return { id: l, list: m, index: h, ja: p };
          }
        return { id: l, list: m, index: -1, ja: void 0 };
      }
      function e(h) {
        this.h = {};
        this.g = b();
        this.size = 0;
        if (h) {
          h = v(h);
          for (var k; !(k = h.next()).done; )
            (k = k.value), this.set(k[0], k[1]);
        }
      }
      if (
        (function () {
          if (
            !a ||
            "function" != typeof a ||
            !a.prototype.entries ||
            "function" != typeof Object.seal
          )
            return !1;
          try {
            var h = Object.seal({ x: 4 }),
              k = new a(v([[h, "s"]]));
            if (
              "s" != k.get(h) ||
              1 != k.size ||
              k.get({ x: 4 }) ||
              k.set({ x: 4 }, "t") != k ||
              2 != k.size
            )
              return !1;
            var l = k.entries(),
              m = l.next();
            if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
            m = l.next();
            return m.done ||
              4 != m.value[0].x ||
              "t" != m.value[1] ||
              !l.next().done
              ? !1
              : !0;
          } catch (p) {
            return !1;
          }
        })()
      )
        return a;
      var f = new WeakMap();
      e.prototype.set = function (h, k) {
        h = 0 === h ? 0 : h;
        var l = d(this, h);
        l.list || (l.list = this.h[l.id] = []);
        l.ja
          ? (l.ja.value = k)
          : ((l.ja = {
              next: this.g,
              Za: this.g.Za,
              head: this.g,
              key: h,
              value: k,
            }),
            l.list.push(l.ja),
            (this.g.Za.next = l.ja),
            (this.g.Za = l.ja),
            this.size++);
        return this;
      };
      e.prototype.delete = function (h) {
        h = d(this, h);
        return h.ja && h.list
          ? (h.list.splice(h.index, 1),
            h.list.length || delete this.h[h.id],
            (h.ja.Za.next = h.ja.next),
            (h.ja.next.Za = h.ja.Za),
            (h.ja.head = null),
            this.size--,
            !0)
          : !1;
      };
      e.prototype.clear = function () {
        this.h = {};
        this.g = this.g.Za = b();
        this.size = 0;
      };
      e.prototype.has = function (h) {
        return !!d(this, h).ja;
      };
      e.prototype.get = function (h) {
        return (h = d(this, h).ja) && h.value;
      };
      e.prototype.entries = function () {
        return c(this, function (h) {
          return [h.key, h.value];
        });
      };
      e.prototype.keys = function () {
        return c(this, function (h) {
          return h.key;
        });
      };
      e.prototype.values = function () {
        return c(this, function (h) {
          return h.value;
        });
      };
      e.prototype.forEach = function (h, k) {
        for (var l = this.entries(), m; !(m = l.next()).done; )
          (m = m.value), h.call(k, m[1], m[0], this);
      };
      e.prototype[Symbol.iterator] = e.prototype.entries;
      var g = 0;
      return e;
    });
    ha("Set", function (a) {
      function b(c) {
        this.g = new Map();
        if (c) {
          c = v(c);
          for (var d; !(d = c.next()).done; ) this.add(d.value);
        }
        this.size = this.g.size;
      }
      if (
        (function () {
          if (
            !a ||
            "function" != typeof a ||
            !a.prototype.entries ||
            "function" != typeof Object.seal
          )
            return !1;
          try {
            var c = Object.seal({ x: 4 }),
              d = new a(v([c]));
            if (
              !d.has(c) ||
              1 != d.size ||
              d.add(c) != d ||
              1 != d.size ||
              d.add({ x: 4 }) != d ||
              2 != d.size
            )
              return !1;
            var e = d.entries(),
              f = e.next();
            if (f.done || f.value[0] != c || f.value[1] != c) return !1;
            f = e.next();
            return f.done ||
              f.value[0] == c ||
              4 != f.value[0].x ||
              f.value[1] != f.value[0]
              ? !1
              : e.next().done;
          } catch (g) {
            return !1;
          }
        })()
      )
        return a;
      b.prototype.add = function (c) {
        c = 0 === c ? 0 : c;
        this.g.set(c, c);
        this.size = this.g.size;
        return this;
      };
      b.prototype.delete = function (c) {
        c = this.g.delete(c);
        this.size = this.g.size;
        return c;
      };
      b.prototype.clear = function () {
        this.g.clear();
        this.size = 0;
      };
      b.prototype.has = function (c) {
        return this.g.has(c);
      };
      b.prototype.entries = function () {
        return this.g.entries();
      };
      b.prototype.values = function () {
        return this.g.values();
      };
      b.prototype.keys = b.prototype.values;
      b.prototype[Symbol.iterator] = b.prototype.values;
      b.prototype.forEach = function (c, d) {
        var e = this;
        this.g.forEach(function (f) {
          return c.call(d, f, f, e);
        });
      };
      return b;
    });
    function Ka(a, b, c) {
      a instanceof String && (a = String(a));
      for (var d = a.length, e = 0; e < d; e++) {
        var f = a[e];
        if (b.call(c, f, e, a)) return { Zd: e, v: f };
      }
      return { Zd: -1, v: void 0 };
    }
    ha("Array.prototype.findIndex", function (a) {
      return a
        ? a
        : function (b, c) {
            return Ka(this, b, c).Zd;
          };
    });
    ha("Object.is", function (a) {
      return a
        ? a
        : function (b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
          };
    });
    ha("Array.prototype.includes", function (a) {
      return a
        ? a
        : function (b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
              var f = d[c];
              if (f === b || Object.is(f, b)) return !0;
            }
            return !1;
          };
    });
    function Oa(a, b, c) {
      if (null == a)
        throw new TypeError(
          "The 'this' value for String.prototype." +
            c +
            " must not be null or undefined"
        );
      if (b instanceof RegExp)
        throw new TypeError(
          "First argument to String.prototype." +
            c +
            " must not be a regular expression"
        );
      return a + "";
    }
    ha("String.prototype.includes", function (a) {
      return a
        ? a
        : function (b, c) {
            return -1 !== Oa(this, b, "includes").indexOf(b, c || 0);
          };
    });
    ha("Array.prototype.find", function (a) {
      return a
        ? a
        : function (b, c) {
            return Ka(this, b, c).v;
          };
    });
    ha("String.prototype.startsWith", function (a) {
      return a
        ? a
        : function (b, c) {
            var d = Oa(this, b, "startsWith"),
              e = d.length,
              f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return !1;
            return g >= f;
          };
    });
    function Ra(a, b) {
      a instanceof String && (a += "");
      var c = 0,
        d = !1,
        e = {
          next: function () {
            if (!d && c < a.length) {
              var f = c++;
              return { value: b(f, a[f]), done: !1 };
            }
            d = !0;
            return { done: !0, value: void 0 };
          },
        };
      e[Symbol.iterator] = function () {
        return e;
      };
      return e;
    }
    ha("Array.prototype.keys", function (a) {
      return a
        ? a
        : function () {
            return Ra(this, function (b) {
              return b;
            });
          };
    });
    ha("Array.prototype.values", function (a) {
      return a
        ? a
        : function () {
            return Ra(this, function (b, c) {
              return c;
            });
          };
    });
    var Sa =
      "function" == typeof Object.assign
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d) for (var e in d) Ja(d, e) && (a[e] = d[e]);
            }
            return a;
          };
    ha("Object.assign", function (a) {
      return a || Sa;
    });
    ha("Array.from", function (a) {
      return a
        ? a
        : function (b, c, d) {
            c =
              null != c
                ? c
                : function (h) {
                    return h;
                  };
            var e = [],
              f =
                "undefined" != typeof Symbol &&
                Symbol.iterator &&
                b[Symbol.iterator];
            if ("function" == typeof f) {
              b = f.call(b);
              for (var g = 0; !(f = b.next()).done; )
                e.push(c.call(d, f.value, g++));
            } else
              for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e;
          };
    });
    ha("String.prototype.replaceAll", function (a) {
      return a
        ? a
        : function (b, c) {
            if (b instanceof RegExp && !b.global)
              throw new TypeError(
                "String.prototype.replaceAll called with a non-global RegExp argument."
              );
            return b instanceof RegExp
              ? this.replace(b, c)
              : this.replace(
                  new RegExp(
                    String(b)
                      .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
                      .replace(/\x08/g, "\\x08"),
                    "g"
                  ),
                  c
                );
          };
    });
    ha("Object.values", function (a) {
      return a
        ? a
        : function (b) {
            var c = [],
              d;
            for (d in b) Ja(b, d) && c.push(b[d]);
            return c;
          };
    });
    ha("Promise.prototype.finally", function (a) {
      return a
        ? a
        : function (b) {
            return this.then(
              function (c) {
                return Promise.resolve(b()).then(function () {
                  return c;
                });
              },
              function (c) {
                return Promise.resolve(b()).then(function () {
                  throw c;
                });
              }
            );
          };
    });
    ha("Math.log2", function (a) {
      return a
        ? a
        : function (b) {
            return Math.log(b) / Math.LN2;
          };
    });
    ha("Number.isNaN", function (a) {
      return a
        ? a
        : function (b) {
            return "number" === typeof b && isNaN(b);
          };
    });
    ha("Array.prototype.entries", function (a) {
      return a
        ? a
        : function () {
            return Ra(this, function (b, c) {
              return [b, c];
            });
          };
    });
    ha("String.prototype.repeat", function (a) {
      return a
        ? a
        : function (b) {
            var c = Oa(this, null, "repeat");
            if (0 > b || 1342177279 < b)
              throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b; ) if ((b & 1 && (d += c), (b >>>= 1))) c += c;
            return d;
          };
    });
    ha("String.prototype.endsWith", function (a) {
      return a
        ? a
        : function (b, c) {
            var d = Oa(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c; )
              if (d[--c] != b[--e]) return !1;
            return 0 >= e;
          };
    });
    ha("Object.entries", function (a) {
      return a
        ? a
        : function (b) {
            var c = [],
              d;
            for (d in b) Ja(b, d) && c.push([d, b[d]]);
            return c;
          };
    });
    var Ua = this || self;
    function M(a, b) {
      a = a.split(".");
      var c = Ua;
      a[0] in c ||
        "undefined" == typeof c.execScript ||
        c.execScript("var " + a[0]);
      for (var d; a.length && (d = a.shift()); )
        a.length || void 0 === b
          ? c[d] && c[d] !== Object.prototype[d]
            ? (c = c[d])
            : (c = c[d] = {})
          : (c[d] = b);
    } /*
 @license
 Shaka Player
 Copyright 2016 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
    function Va(a) {
      this.g = Math.exp(Math.log(0.5) / a);
      this.i = this.h = 0;
    }
    Va.prototype.sample = function (a, b) {
      var c = Math.pow(this.g, a);
      b = b * (1 - c) + c * this.h;
      isNaN(b) || ((this.h = b), (this.i += a));
    };
    function Wa(a) {
      return a.h / (1 - Math.pow(a.g, a.i));
    }
    function Xa() {
      this.h = new Va(2);
      this.j = new Va(5);
      this.g = 0;
      this.i = 128e3;
      this.l = 16e3;
    }
    Xa.prototype.configure = function (a) {
      this.i = a.minTotalBytes;
      this.l = a.minBytes;
      this.h.g = Math.exp(Math.log(0.5) / a.fastHalfLife);
      this.j.g = Math.exp(Math.log(0.5) / a.slowHalfLife);
    };
    Xa.prototype.sample = function (a, b) {
      if (!(b < this.l)) {
        var c = (8e3 * b) / a;
        a /= 1e3;
        this.g += b;
        this.h.sample(a, c);
        this.j.sample(a, c);
      }
    };
    Xa.prototype.getBandwidthEstimate = function (a) {
      return this.g < this.i ? a : Math.min(Wa(this.h), Wa(this.j));
    };
    function Ya() {}
    function Za() {}
    function $a() {}
    function ab(a) {
      var b = Ia.apply(1, arguments);
      cb.has(a) || (cb.add(a), $a.apply(Ya, ka(b)));
    }
    function db() {}
    function eb() {}
    function fb() {}
    var cb = new Set();
    if (window.console && window.console.log.bind) {
      var gb = {},
        hb =
          ((gb[1] = console.error.bind(console)),
          (gb[2] = console.warn.bind(console)),
          (gb[3] = console.info.bind(console)),
          (gb[4] = console.log.bind(console)),
          (gb[5] = console.debug.bind(console)),
          (gb[6] = console.debug.bind(console)),
          gb);
      $a = hb[2];
      Za = hb[1];
    }
    var ib = { DISABLED: "disabled", eg: "reload", Pd: "smooth" };
    M("shaka.config.CodecSwitchingStrategy", ib);
    function jb(a, b) {
      return "number" === typeof a &&
        "number" === typeof b &&
        isNaN(a) &&
        isNaN(b)
        ? !0
        : a === b;
    }
    function kb(a, b) {
      b = a.indexOf(b);
      -1 < b && a.splice(b, 1);
    }
    function lb(a, b) {
      var c;
      c || (c = jb);
      if (a.length != b.length) return !1;
      b = b.slice();
      var d = {};
      a = v(a);
      for (var e = a.next(); !e.done; d = { Vc: d.Vc }, e = a.next()) {
        d.Vc = e.value;
        e = b.findIndex(
          (function (f) {
            return function (g) {
              return c(f.Vc, g);
            };
          })(d)
        );
        if (-1 == e) return !1;
        b[e] = b[b.length - 1];
        b.pop();
      }
      return 0 == b.length;
    }
    function mb(a, b, c) {
      c || (c = jb);
      if (a.length != b.length) return !1;
      for (var d = 0; d < a.length; d++) if (!c(a[d], b[d])) return !1;
      return !0;
    }
    function nb(a, b, c) {
      this.startTime = a;
      this.direction = ob;
      this.endTime = b;
      this.payload = c;
      this.region = new pb();
      this.position = null;
      this.positionAlign = qb;
      this.size = 0;
      this.textAlign = rb;
      this.writingMode = sb;
      this.lineInterpretation = tb;
      this.line = null;
      this.lineHeight = "";
      this.lineAlign = ub;
      this.displayAlign = vb;
      this.fontSize =
        this.textStrokeWidth =
        this.textStrokeColor =
        this.border =
        this.backgroundImage =
        this.backgroundColor =
        this.color =
          "";
      this.fontWeight = wb;
      this.fontStyle = xb;
      this.linePadding = this.letterSpacing = this.fontFamily = "";
      this.opacity = 1;
      this.textDecoration = [];
      this.wrapLine = !0;
      this.id = "";
      this.nestedCues = [];
      this.spacer = this.lineBreak = this.isContainer = !1;
      this.cellResolution = { columns: 32, rows: 15 };
    }
    nb.prototype.clone = function () {
      var a = new nb(0, 0, ""),
        b;
      for (b in this)
        (a[b] = this[b]),
          a[b] && a[b].constructor == Array && (a[b] = a[b].slice());
      return a;
    };
    function yb(a, b) {
      if (
        a.startTime != b.startTime ||
        a.endTime != b.endTime ||
        a.payload != b.payload
      )
        return !1;
      for (var c in a)
        if ("startTime" != c && "endTime" != c && "payload" != c)
          if ("nestedCues" == c) {
            if (!mb(a.nestedCues, b.nestedCues, yb)) return !1;
          } else if ("region" == c || "cellResolution" == c)
            for (var d in a[c]) {
              if (a[c][d] != b[c][d]) return !1;
            }
          else if (Array.isArray(a[c])) {
            if (!mb(a[c], b[c])) return !1;
          } else if (a[c] != b[c]) return !1;
      return !0;
    }
    M("shaka.text.Cue", nb);
    var qb = "auto";
    nb.positionAlign = {
      LEFT: "line-left",
      RIGHT: "line-right",
      CENTER: "center",
      AUTO: qb,
    };
    var rb = "center",
      zb = {
        LEFT: "left",
        RIGHT: "right",
        CENTER: rb,
        START: "start",
        END: "end",
      };
    nb.textAlign = zb;
    var vb = "after",
      Ab = { BEFORE: "before", CENTER: "center", AFTER: vb };
    nb.displayAlign = Ab;
    var ob = "ltr";
    nb.direction = {
      HORIZONTAL_LEFT_TO_RIGHT: ob,
      HORIZONTAL_RIGHT_TO_LEFT: "rtl",
    };
    var sb = "horizontal-tb";
    nb.writingMode = {
      HORIZONTAL_TOP_TO_BOTTOM: sb,
      VERTICAL_LEFT_TO_RIGHT: "vertical-lr",
      VERTICAL_RIGHT_TO_LEFT: "vertical-rl",
    };
    var tb = 0;
    nb.lineInterpretation = { LINE_NUMBER: tb, PERCENTAGE: 1 };
    var ub = "start",
      Bb = { CENTER: "center", START: ub, END: "end" };
    nb.lineAlign = Bb;
    var Cb = {
      white: "#FFF",
      lime: "#0F0",
      cyan: "#0FF",
      red: "#F00",
      yellow: "#FF0",
      magenta: "#F0F",
      blue: "#00F",
      black: "#000",
    };
    nb.defaultTextColor = Cb;
    var Db = {
      bg_white: "#FFF",
      bg_lime: "#0F0",
      bg_cyan: "#0FF",
      bg_red: "#F00",
      bg_yellow: "#FF0",
      bg_magenta: "#F0F",
      bg_blue: "#00F",
      bg_black: "#000",
    };
    nb.defaultTextBackgroundColor = Db;
    var wb = 400;
    nb.fontWeight = { NORMAL: wb, BOLD: 700 };
    var xb = "normal",
      Eb = { NORMAL: xb, ITALIC: "italic", OBLIQUE: "oblique" };
    nb.fontStyle = Eb;
    nb.textDecoration = {
      UNDERLINE: "underline",
      LINE_THROUGH: "lineThrough",
      OVERLINE: "overline",
    };
    function pb() {
      this.id = "";
      this.regionAnchorY =
        this.regionAnchorX =
        this.viewportAnchorY =
        this.viewportAnchorX =
          0;
      this.height = this.width = 100;
      this.viewportAnchorUnits = this.widthUnits = this.heightUnits = Fb;
      this.scroll = Gb;
    }
    M("shaka.text.CueRegion", pb);
    var Fb = 1;
    pb.units = { PX: 0, PERCENTAGE: Fb, LINES: 2 };
    var Gb = "";
    pb.scrollMode = { NONE: Gb, UP: "up" };
    function Hb() {}
    function Ib(a, b) {
      if (!a && !b) return !0;
      if (!a || !b || a.byteLength != b.byteLength) return !1;
      if (Jb(a) == Jb(b) && (a.byteOffset || 0) == (b.byteOffset || 0))
        return !0;
      var c = N(a);
      b = N(b);
      for (var d = 0; d < a.byteLength; d++) if (c[d] != b[d]) return !1;
      return !0;
    }
    function Jb(a) {
      return a instanceof ArrayBuffer ? a : a.buffer;
    }
    function Kb(a) {
      return a instanceof ArrayBuffer
        ? a
        : 0 == a.byteOffset && a.byteLength == a.buffer.byteLength
        ? a.buffer
        : new Uint8Array(a).buffer;
    }
    function N(a, b, c) {
      c = void 0 === c ? Infinity : c;
      return Lb(a, void 0 === b ? 0 : b, c, Uint8Array);
    }
    function Mb(a, b, c) {
      c = void 0 === c ? Infinity : c;
      return Lb(a, void 0 === b ? 0 : b, c, DataView);
    }
    function Lb(a, b, c, d) {
      var e = (a.byteOffset || 0) + a.byteLength;
      b = Math.max(0, Math.min((a.byteOffset || 0) + b, e));
      return new d(Jb(a), b, Math.min(b + Math.max(c, 0), e) - b);
    }
    M("shaka.util.BufferUtils", Hb);
    Hb.toDataView = Mb;
    Hb.toUint8 = N;
    Hb.toArrayBuffer = Kb;
    Hb.equal = Ib;
    function Nb(a, b) {
      this.g = a;
      this.h = b;
    }
    Nb.prototype.toString = function () {
      return "v" + this.g + "." + this.h;
    };
    function Ob(a, b) {
      var c = new Nb(4, 0),
        d = Pb,
        e = d.g,
        f = c.h - e.h;
      (0 < (c.g - e.g || f) ? d.i : d.h)(d.g, c, a, b);
    }
    function Qb(a, b, c, d) {
      $a(
        [
          c,
          "has been deprecated and will be removed in",
          b,
          ". We are currently at version",
          a,
          ". Additional information:",
          d,
        ].join(" ")
      );
    }
    function Rb(a, b, c, d) {
      Za(
        [
          c,
          "has been deprecated and has been removed in",
          b,
          ". We are now at version",
          a,
          ". Additional information:",
          d,
        ].join("")
      );
    }
    var Pb = null;
    function Sb(a, b) {
      return a.concat(b);
    }
    function Tb() {}
    function Ub(a) {
      return null != a;
    }
    function Vb(a) {
      var b = Object.create(a.prototype || Object.prototype);
      try {
        var c = a.call(b);
        c ||
          (Ob("Factories requiring new", "Factories should be plain functions"),
          (c = b));
      } catch (d) {
        Ob("Factories requiring new", "Factories should be plain functions"),
          (c = new a());
      }
      return c;
    }
    function Wb() {}
    M("shaka.dependencies", Wb);
    Wb.has = function (a) {
      return Xb.has(a);
    };
    Wb.add = function (a, b) {
      if (!Yb[a]) throw Error(a + " is not supported");
      Xb.set(a, function () {
        return b;
      });
    };
    var Yb = { muxjs: "muxjs" };
    Wb.Allowed = Yb;
    var Xb = new Map([
      [
        "muxjs",
        function () {
          return window.muxjs;
        },
      ],
    ]);
    function O(a, b, c) {
      var d = Ia.apply(3, arguments);
      this.severity = a;
      this.category = b;
      this.code = c;
      this.data = d;
      this.handled = !1;
    }
    O.prototype.toString = function () {
      return "shaka.util.Error " + JSON.stringify(this, null, "  ");
    };
    M("shaka.util.Error", O);
    O.Severity = { RECOVERABLE: 1, CRITICAL: 2 };
    O.Category = {
      NETWORK: 1,
      TEXT: 2,
      MEDIA: 3,
      MANIFEST: 4,
      STREAMING: 5,
      DRM: 6,
      PLAYER: 7,
      CAST: 8,
      STORAGE: 9,
      ADS: 10,
    };
    O.Code = {
      UNSUPPORTED_SCHEME: 1e3,
      BAD_HTTP_STATUS: 1001,
      HTTP_ERROR: 1002,
      TIMEOUT: 1003,
      MALFORMED_DATA_URI: 1004,
      REQUEST_FILTER_ERROR: 1006,
      RESPONSE_FILTER_ERROR: 1007,
      MALFORMED_TEST_URI: 1008,
      UNEXPECTED_TEST_REQUEST: 1009,
      ATTEMPTS_EXHAUSTED: 1010,
      INVALID_TEXT_HEADER: 2e3,
      INVALID_TEXT_CUE: 2001,
      UNABLE_TO_DETECT_ENCODING: 2003,
      BAD_ENCODING: 2004,
      INVALID_XML: 2005,
      INVALID_MP4_TTML: 2007,
      INVALID_MP4_VTT: 2008,
      UNABLE_TO_EXTRACT_CUE_START_TIME: 2009,
      INVALID_MP4_CEA: 2010,
      TEXT_COULD_NOT_GUESS_MIME_TYPE: 2011,
      CANNOT_ADD_EXTERNAL_TEXT_TO_SRC_EQUALS: 2012,
      TEXT_ONLY_WEBVTT_SRC_EQUALS: 2013,
      MISSING_TEXT_PLUGIN: 2014,
      CHAPTERS_TRACK_FAILED: 2015,
      BUFFER_READ_OUT_OF_BOUNDS: 3e3,
      JS_INTEGER_OVERFLOW: 3001,
      EBML_OVERFLOW: 3002,
      EBML_BAD_FLOATING_POINT_SIZE: 3003,
      MP4_SIDX_WRONG_BOX_TYPE: 3004,
      MP4_SIDX_INVALID_TIMESCALE: 3005,
      MP4_SIDX_TYPE_NOT_SUPPORTED: 3006,
      WEBM_CUES_ELEMENT_MISSING: 3007,
      WEBM_EBML_HEADER_ELEMENT_MISSING: 3008,
      WEBM_SEGMENT_ELEMENT_MISSING: 3009,
      WEBM_INFO_ELEMENT_MISSING: 3010,
      WEBM_DURATION_ELEMENT_MISSING: 3011,
      WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING: 3012,
      WEBM_CUE_TIME_ELEMENT_MISSING: 3013,
      MEDIA_SOURCE_OPERATION_FAILED: 3014,
      MEDIA_SOURCE_OPERATION_THREW: 3015,
      VIDEO_ERROR: 3016,
      QUOTA_EXCEEDED_ERROR: 3017,
      TRANSMUXING_FAILED: 3018,
      CONTENT_TRANSFORMATION_FAILED: 3019,
      UNABLE_TO_GUESS_MANIFEST_TYPE: 4e3,
      DASH_INVALID_XML: 4001,
      DASH_NO_SEGMENT_INFO: 4002,
      DASH_EMPTY_ADAPTATION_SET: 4003,
      DASH_EMPTY_PERIOD: 4004,
      DASH_WEBM_MISSING_INIT: 4005,
      DASH_UNSUPPORTED_CONTAINER: 4006,
      DASH_PSSH_BAD_ENCODING: 4007,
      DASH_NO_COMMON_KEY_SYSTEM: 4008,
      DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED: 4009,
      DASH_CONFLICTING_KEY_IDS: 4010,
      RESTRICTIONS_CANNOT_BE_MET: 4012,
      INTERNAL_ERROR_KEY_STATUS: 4013,
      HLS_PLAYLIST_HEADER_MISSING: 4015,
      INVALID_HLS_TAG: 4016,
      HLS_INVALID_PLAYLIST_HIERARCHY: 4017,
      DASH_DUPLICATE_REPRESENTATION_ID: 4018,
      HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND: 4020,
      HLS_MASTER_PLAYLIST_NOT_PROVIDED: 4022,
      HLS_REQUIRED_ATTRIBUTE_MISSING: 4023,
      HLS_REQUIRED_TAG_MISSING: 4024,
      HLS_COULD_NOT_GUESS_CODECS: 4025,
      HLS_KEYFORMATS_NOT_SUPPORTED: 4026,
      DASH_UNSUPPORTED_XLINK_ACTUATE: 4027,
      DASH_XLINK_DEPTH_LIMIT: 4028,
      HLS_COULD_NOT_PARSE_SEGMENT_START_TIME: 4030,
      CONTENT_UNSUPPORTED_BY_BROWSER: 4032,
      CANNOT_ADD_EXTERNAL_TEXT_TO_LIVE_STREAM: 4033,
      HLS_AES_128_ENCRYPTION_NOT_SUPPORTED: 4034,
      HLS_INTERNAL_SKIP_STREAM: 4035,
      NO_VARIANTS: 4036,
      PERIOD_FLATTENING_FAILED: 4037,
      INCONSISTENT_DRM_ACROSS_PERIODS: 4038,
      HLS_VARIABLE_NOT_FOUND: 4039,
      STREAMING_ENGINE_STARTUP_INVALID_STATE: 5006,
      NO_RECOGNIZED_KEY_SYSTEMS: 6e3,
      REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE: 6001,
      FAILED_TO_CREATE_CDM: 6002,
      FAILED_TO_ATTACH_TO_VIDEO: 6003,
      INVALID_SERVER_CERTIFICATE: 6004,
      FAILED_TO_CREATE_SESSION: 6005,
      FAILED_TO_GENERATE_LICENSE_REQUEST: 6006,
      LICENSE_REQUEST_FAILED: 6007,
      LICENSE_RESPONSE_REJECTED: 6008,
      ENCRYPTED_CONTENT_WITHOUT_DRM_INFO: 6010,
      NO_LICENSE_SERVER_GIVEN: 6012,
      OFFLINE_SESSION_REMOVED: 6013,
      EXPIRED: 6014,
      SERVER_CERTIFICATE_REQUIRED: 6015,
      INIT_DATA_TRANSFORM_ERROR: 6016,
      SERVER_CERTIFICATE_REQUEST_FAILED: 6017,
      LOAD_INTERRUPTED: 7e3,
      OPERATION_ABORTED: 7001,
      NO_VIDEO_ELEMENT: 7002,
      OBJECT_DESTROYED: 7003,
      CONTENT_NOT_LOADED: 7004,
      CAST_API_UNAVAILABLE: 8e3,
      NO_CAST_RECEIVERS: 8001,
      ALREADY_CASTING: 8002,
      UNEXPECTED_CAST_ERROR: 8003,
      CAST_CANCELED_BY_USER: 8004,
      CAST_CONNECTION_TIMED_OUT: 8005,
      CAST_RECEIVER_APP_UNAVAILABLE: 8006,
      STORAGE_NOT_SUPPORTED: 9e3,
      INDEXED_DB_ERROR: 9001,
      DEPRECATED_OPERATION_ABORTED: 9002,
      REQUESTED_ITEM_NOT_FOUND: 9003,
      MALFORMED_OFFLINE_URI: 9004,
      CANNOT_STORE_LIVE_OFFLINE: 9005,
      NO_INIT_DATA_FOR_OFFLINE: 9007,
      LOCAL_PLAYER_INSTANCE_REQUIRED: 9008,
      NEW_KEY_OPERATION_NOT_SUPPORTED: 9011,
      KEY_NOT_FOUND: 9012,
      MISSING_STORAGE_CELL: 9013,
      STORAGE_LIMIT_REACHED: 9014,
      DOWNLOAD_SIZE_CALLBACK_ERROR: 9015,
      MODIFY_OPERATION_NOT_SUPPORTED: 9016,
      CS_IMA_SDK_MISSING: 1e4,
      CS_AD_MANAGER_NOT_INITIALIZED: 10001,
      SS_IMA_SDK_MISSING: 10002,
      SS_AD_MANAGER_NOT_INITIALIZED: 10003,
      CURRENT_DAI_REQUEST_NOT_FINISHED: 10004,
    }; /*
 @license
 Copyright 2008 The Closure Library Authors
 SPDX-License-Identifier: Apache-2.0
*/
    var Zb = RegExp(
      "^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"
    ); /*
 @license
 Copyright 2006 The Closure Library Authors
 SPDX-License-Identifier: Apache-2.0
*/
    function $b(a) {
      var b;
      a instanceof $b
        ? (ac(this, a.Ia),
          (this.wb = a.wb),
          (this.Ka = a.Ka),
          bc(this, a.Pb),
          (this.wa = a.wa),
          cc(this, a.g.clone()),
          (this.lb = a.lb))
        : a && (b = String(a).match(Zb))
        ? (ac(this, b[1] || "", !0),
          (this.wb = dc(b[2] || "")),
          (this.Ka = dc(b[3] || "", !0)),
          bc(this, b[4]),
          (this.wa = dc(b[5] || "", !0)),
          cc(this, b[6] || "", !0),
          (this.lb = dc(b[7] || "")))
        : (this.g = new ec(null));
    }
    q = $b.prototype;
    q.Ia = "";
    q.wb = "";
    q.Ka = "";
    q.Pb = null;
    q.wa = "";
    q.lb = "";
    q.toString = function () {
      var a = [],
        b = this.Ia;
      b && a.push(fc(b, gc, !0), ":");
      if ((b = this.Ka)) {
        a.push("//");
        var c = this.wb;
        c && a.push(fc(c, gc, !0), "@");
        a.push(encodeURIComponent(b).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
        b = this.Pb;
        null != b && a.push(":", String(b));
      }
      if ((b = this.wa))
        this.Ka && "/" != b.charAt(0) && a.push("/"),
          a.push(fc(b, "/" == b.charAt(0) ? hc : ic, !0));
      (b = this.g.toString()) && a.push("?", b);
      (b = this.lb) && a.push("#", fc(b, jc));
      return a.join("");
    };
    q.resolve = function (a) {
      var b = this.clone();
      "data" === b.Ia && (b = new $b());
      var c = !!a.Ia;
      c ? ac(b, a.Ia) : (c = !!a.wb);
      c ? (b.wb = a.wb) : (c = !!a.Ka);
      c ? (b.Ka = a.Ka) : (c = null != a.Pb);
      var d = a.wa;
      if (c) bc(b, a.Pb);
      else if ((c = !!a.wa)) {
        if ("/" != d.charAt(0))
          if (this.Ka && !this.wa) d = "/" + d;
          else {
            var e = b.wa.lastIndexOf("/");
            -1 != e && (d = b.wa.substr(0, e + 1) + d);
          }
        if (".." == d || "." == d) d = "";
        else if (-1 != d.indexOf("./") || -1 != d.indexOf("/.")) {
          e = 0 == d.lastIndexOf("/", 0);
          d = d.split("/");
          for (var f = [], g = 0; g < d.length; ) {
            var h = d[g++];
            "." == h
              ? e && g == d.length && f.push("")
              : ".." == h
              ? ((1 < f.length || (1 == f.length && "" != f[0])) && f.pop(),
                e && g == d.length && f.push(""))
              : (f.push(h), (e = !0));
          }
          d = f.join("/");
        }
      }
      c ? (b.wa = d) : (c = "" !== a.g.toString());
      c ? cc(b, a.g.clone()) : (c = !!a.lb);
      c && (b.lb = a.lb);
      return b;
    };
    q.clone = function () {
      return new $b(this);
    };
    function ac(a, b, c) {
      a.Ia = c ? dc(b, !0) : b;
      a.Ia && (a.Ia = a.Ia.replace(/:$/, ""));
    }
    function bc(a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
        a.Pb = b;
      } else a.Pb = null;
    }
    function cc(a, b, c) {
      b instanceof ec ? (a.g = b) : (c || (b = fc(b, kc)), (a.g = new ec(b)));
    }
    function dc(a, b) {
      return a ? (b ? decodeURI(a) : decodeURIComponent(a)) : "";
    }
    function fc(a, b, c) {
      return null != a
        ? ((a = encodeURI(a).replace(b, lc)),
          c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
          a)
        : null;
    }
    function lc(a) {
      a = a.charCodeAt(0);
      return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
    }
    var gc = /[#\/\?@]/g,
      ic = /[#\?:]/g,
      hc = /[#\?]/g,
      kc = /[#\?@]/g,
      jc = /#/g;
    function ec(a) {
      this.g = a || null;
    }
    function mc(a) {
      if (!a.na && ((a.na = {}), (a.vc = 0), a.g))
        for (var b = a.g.split("&"), c = 0; c < b.length; c++) {
          var d = b[c].indexOf("="),
            e = null;
          if (0 <= d) {
            var f = b[c].substring(0, d);
            e = b[c].substring(d + 1);
          } else f = b[c];
          f = decodeURIComponent(f.replace(/\+/g, " "));
          e = e || "";
          a.add(f, decodeURIComponent(e.replace(/\+/g, " ")));
        }
    }
    q = ec.prototype;
    q.na = null;
    q.vc = null;
    q.add = function (a, b) {
      mc(this);
      this.g = null;
      var c = this.na.hasOwnProperty(a) && this.na[a];
      c || (this.na[a] = c = []);
      c.push(b);
      this.vc++;
      return this;
    };
    q.set = function (a, b) {
      mc(this);
      this.g = null;
      this.na.hasOwnProperty(a) ? (this.na[a] = [b]) : this.add(a, b);
      return this;
    };
    q.toString = function () {
      if (this.g) return this.g;
      if (!this.na) return "";
      var a = [],
        b;
      for (b in this.na)
        for (
          var c = encodeURIComponent(b), d = this.na[b], e = 0;
          e < d.length;
          e++
        ) {
          var f = c;
          "" !== d[e] && (f += "=" + encodeURIComponent(d[e]));
          a.push(f);
        }
      return (this.g = a.join("&"));
    };
    q.clone = function () {
      var a = new ec();
      a.g = this.g;
      if (this.na) {
        var b = {},
          c;
        for (c in this.na) b[c] = this.na[c].concat();
        a.na = b;
        a.vc = this.vc;
      }
      return a;
    };
    function nc(a, b) {
      if (0 == b.length) return a;
      var c = b.map(function (d) {
        return new $b(d);
      });
      return a
        .map(function (d) {
          return new $b(d);
        })
        .map(function (d) {
          return c.map(function (e) {
            return d.resolve(e);
          });
        })
        .reduce(Sb, [])
        .map(function (d) {
          return d.toString();
        });
    }
    function oc(a, b) {
      return {
        keySystem: a,
        licenseServerUri: "",
        distinctiveIdentifierRequired: !1,
        persistentStateRequired: !1,
        audioRobustness: "",
        videoRobustness: "",
        serverCertificate: null,
        serverCertificateUri: "",
        sessionType: "",
        initData: b || [],
        keyIds: new Set(),
      };
    }
    function pc(a, b) {
      if (1 == b.length) return b[0];
      a = qc(a, b);
      if (null != a) return a;
      throw new O(2, 4, 4025, b);
    }
    function qc(a, b) {
      for (var c = v(rc[a]), d = c.next(); !d.done; d = c.next()) {
        d = d.value;
        for (var e = v(b), f = e.next(); !f.done; f = e.next())
          if (((f = f.value), d.test(f.trim()))) return f.trim();
      }
      return a == sc ? "" : null;
    }
    var sc = "text",
      tc = { Ja: "video", eb: "audio", ha: sc, rc: "image", xe: "application" },
      uc = 1 / 15,
      rc = {
        audio: [/^vorbis$/, /^opus$/, /^flac$/, /^mp4a/, /^[ae]c-3$/],
        video: [/^avc/, /^hev/, /^hvc/, /^vp0?[89]/, /^av01/],
        text: [/^vtt$/, /^wvtt/, /^stpp/],
      };
    function vc() {
      var a,
        b,
        c = new Promise(function (d, e) {
          a = d;
          b = e;
        });
      c.resolve = a;
      c.reject = b;
      return c;
    }
    vc.prototype.resolve = function () {};
    vc.prototype.reject = function () {};
    function wc(a) {
      this.h = a;
      this.g = void 0;
    }
    wc.prototype.value = function () {
      void 0 == this.g && (this.g = this.h());
      return this.g;
    };
    function xc(a) {
      this.h = a;
      this.g = null;
    }
    xc.prototype.X = function (a) {
      var b = this;
      this.stop();
      var c = !0,
        d = null;
      this.g = function () {
        window.clearTimeout(d);
        c = !1;
      };
      d = window.setTimeout(function () {
        c && b.h();
      }, 1e3 * a);
      return this;
    };
    xc.prototype.stop = function () {
      this.g && (this.g(), (this.g = null));
    };
    function Q(a) {
      this.h = a;
      this.g = null;
    }
    Q.prototype.Ld = function () {
      this.stop();
      this.h();
      return this;
    };
    Q.prototype.X = function (a) {
      var b = this;
      this.stop();
      this.g = new xc(function () {
        b.h();
      }).X(a);
      return this;
    };
    Q.prototype.Ga = function (a) {
      var b = this;
      this.stop();
      this.g = new xc(function () {
        b.g.X(a);
        b.h();
      }).X(a);
      return this;
    };
    Q.prototype.stop = function () {
      this.g && (this.g.stop(), (this.g = null));
    };
    M("shaka.util.Timer", Q);
    Q.prototype.stop = Q.prototype.stop;
    Q.prototype.tickEvery = Q.prototype.Ga;
    Q.prototype.tickAfter = Q.prototype.X;
    Q.prototype.tickNow = Q.prototype.Ld;
    function yc() {
      return window.MediaSource && MediaSource.isTypeSupported ? !0 : !1;
    }
    function zc(a) {
      return "" != Ac().canPlayType(a);
    }
    function Bc() {
      return navigator.userAgent.match(/Edge?\//) ? !0 : !1;
    }
    function Cc() {
      return Dc("Tizen");
    }
    function Ec() {
      return Dc("Web0S");
    }
    function Fc() {
      return Dc("CrKey");
    }
    function Gc() {
      return (
        !!navigator.vendor &&
        navigator.vendor.includes("Apple") &&
        !Cc() &&
        !Dc("PC=EOS") &&
        !Hc() &&
        !Dc("Sky_") &&
        !Dc("DT_STB_BCM")
      );
    }
    function Ic() {
      return Dc("PlayStation 5");
    }
    function Hc() {
      return Dc("PlayStation 4");
    }
    function Jc() {
      if (!Gc()) return null;
      var a = navigator.userAgent.match(/Version\/(\d+)/);
      return a
        ? parseInt(a[1], 10)
        : (a = navigator.userAgent.match(/OS (\d+)(?:_\d+)?/))
        ? parseInt(a[1], 10)
        : null;
    }
    function Dc(a) {
      return (navigator.userAgent || "").includes(a);
    }
    function Ac() {
      if (Kc) return Kc;
      Lc ||
        (Lc = new Q(function () {
          Kc = null;
        }));
      (Kc =
        document.getElementsByTagName("video")[0] ||
        document.getElementsByTagName("audio")[0]) ||
        (Kc = document.createElement("video"));
      Lc.X(1);
      return Kc;
    }
    var Lc = null,
      Kc = null;
    function Mc() {}
    function Nc(a) {
      if (!a) return "";
      a = N(a);
      239 == a[0] && 187 == a[1] && 191 == a[2] && (a = a.subarray(3));
      if (window.TextDecoder && !Hc())
        return (
          (a = new TextDecoder().decode(a)),
          a.includes("\ufffd") &&
            Za(
              'Decoded string contains an "unknown character" codepoint.  That probably means the UTF8 encoding was incorrect!'
            ),
          a
        );
      for (var b = "", c = 0; c < a.length; ++c) {
        var d = 65533;
        0 == (a[c] & 128)
          ? (d = a[c])
          : a.length >= c + 2 && 192 == (a[c] & 224) && 128 == (a[c + 1] & 192)
          ? ((d = ((a[c] & 31) << 6) | (a[c + 1] & 63)), (c += 1))
          : a.length >= c + 3 &&
            224 == (a[c] & 240) &&
            128 == (a[c + 1] & 192) &&
            128 == (a[c + 2] & 192)
          ? ((d =
              ((a[c] & 15) << 12) | ((a[c + 1] & 63) << 6) | (a[c + 2] & 63)),
            (c += 2))
          : a.length >= c + 4 &&
            240 == (a[c] & 241) &&
            128 == (a[c + 1] & 192) &&
            128 == (a[c + 2] & 192) &&
            128 == (a[c + 3] & 192) &&
            ((d =
              ((a[c] & 7) << 18) |
              ((a[c + 1] & 63) << 12) |
              ((a[c + 2] & 63) << 6) |
              (a[c + 3] & 63)),
            (c += 3));
        if (65535 >= d) b += String.fromCharCode(d);
        else {
          d -= 65536;
          var e = d & 1023;
          b += String.fromCharCode(55296 + (d >> 10));
          b += String.fromCharCode(56320 + e);
        }
      }
      return b;
    }
    function Oc(a, b, c) {
      if (!a) return "";
      if (!c && 0 != a.byteLength % 2) throw new O(2, 2, 2004);
      c = Math.floor(a.byteLength / 2);
      var d = new Uint16Array(c);
      a = Mb(a);
      for (var e = 0; e < c; e++) d[e] = a.getUint16(2 * e, b);
      return Qc.value()(d);
    }
    function Rc(a) {
      function b(d) {
        return c.byteLength <= d || (32 <= c[d] && 126 >= c[d]);
      }
      if (!a) return "";
      var c = N(a);
      if (239 == c[0] && 187 == c[1] && 191 == c[2]) return Nc(c);
      if (254 == c[0] && 255 == c[1]) return Oc(c.subarray(2), !1);
      if (255 == c[0] && 254 == c[1]) return Oc(c.subarray(2), !0);
      if (0 == c[0] && 0 == c[2]) return Oc(a, !1);
      if (0 == c[1] && 0 == c[3]) return Oc(a, !0);
      if (b(0) && b(1) && b(2) && b(3)) return Nc(a);
      throw new O(2, 2, 2003);
    }
    function Sc(a) {
      if (window.TextEncoder && !Hc()) {
        var b = new TextEncoder();
        return Kb(b.encode(a));
      }
      a = encodeURIComponent(a);
      a = unescape(a);
      b = new Uint8Array(a.length);
      for (var c = 0; c < a.length; c++) b[c] = a[c].charCodeAt(0);
      return Kb(b);
    }
    function Tc(a, b) {
      for (
        var c = new ArrayBuffer(2 * a.length), d = new DataView(c), e = 0;
        e < a.length;
        ++e
      )
        d.setUint16(2 * e, a.charCodeAt(e), b);
      return c;
    }
    M("shaka.util.StringUtils", Mc);
    Mc.resetFromCharCode = function () {
      Qc.g = void 0;
    };
    Mc.toUTF16 = Tc;
    Mc.toUTF8 = Sc;
    Mc.fromBytesAutoDetect = Rc;
    Mc.fromUTF16 = Oc;
    Mc.fromUTF8 = Nc;
    var Qc = new wc(function () {
      function a(c) {
        try {
          var d = new Uint8Array(c);
          return 0 < String.fromCharCode.apply(null, d).length;
        } catch (e) {
          return !1;
        }
      }
      for (var b = { bb: 65536 }; 0 < b.bb; b = { bb: b.bb }, b.bb /= 2)
        if (a(b.bb))
          return (function (c) {
            return function (d) {
              for (var e = "", f = 0; f < d.length; f += c.bb)
                e += String.fromCharCode.apply(null, d.subarray(f, f + c.bb));
              return e;
            };
          })(b);
      return null;
    });
    function Uc() {}
    function Vc(a) {
      a = N(a);
      a = Qc.value()(a);
      return btoa(a);
    }
    function Wc(a, b) {
      b = void 0 == b ? !0 : b;
      a = Vc(a).replace(/\+/g, "-").replace(/\//g, "_");
      return b ? a : a.replace(/[=]*$/, "");
    }
    function Xc(a) {
      a = window.atob(a.replace(/-/g, "+").replace(/_/g, "/"));
      for (var b = new Uint8Array(a.length), c = 0; c < a.length; ++c)
        b[c] = a.charCodeAt(c);
      return b;
    }
    function Yc(a) {
      for (var b = a.length / 2, c = new Uint8Array(b), d = 0; d < b; d++)
        c[d] = window.parseInt(a.substr(2 * d, 2), 16);
      return c;
    }
    function Zc(a) {
      var b = N(a);
      a = "";
      b = v(b);
      for (var c = b.next(); !c.done; c = b.next())
        (c = c.value),
          (c = c.toString(16)),
          1 == c.length && (c = "0" + c),
          (a += c);
      return a;
    }
    function $c() {
      for (
        var a = Ia.apply(0, arguments), b = 0, c = v(a), d = c.next();
        !d.done;
        d = c.next()
      )
        b += d.value.byteLength;
      b = new Uint8Array(b);
      c = 0;
      a = v(a);
      for (d = a.next(); !d.done; d = a.next())
        (d = d.value), b.set(N(d), c), (c += d.byteLength);
      return b;
    }
    M("shaka.util.Uint8ArrayUtils", Uc);
    Uc.concat = $c;
    Uc.toHex = Zc;
    Uc.fromHex = Yc;
    Uc.fromBase64 = Xc;
    Uc.toBase64 = Wc;
    Uc.toStandardBase64 = Vc;
    Uc.equal = function (a, b) {
      Ob(
        "shaka.util.Uint8ArrayUtils.equal",
        "Please use shaka.util.BufferUtils.equal instead."
      );
      return Ib(a, b);
    };
    function ad(a) {
      if (bd.has(a)) return bd.get(a);
      var b = MediaSource.isTypeSupported(a);
      bd.set(a, b);
      return b;
    }
    function cd(a, b) {
      var c, d;
      return L(function (e) {
        switch (e.g) {
          case 1:
            c =
              (b[0].videoCapabilities
                ? b[0].videoCapabilities[0].contentType
                : "") +
              "#" +
              (b[0].audioCapabilities
                ? b[0].audioCapabilities[0].contentType
                : "") +
              "#" +
              a;
            if (dd.has(c)) {
              d = dd.get(c);
              e.A(2);
              break;
            }
            E(e, 3);
            return y(e, navigator.requestMediaKeySystemAccess(a, b), 5);
          case 5:
            d = e.h;
            dd.set(c, d);
            wa(e, 2);
            break;
          case 3:
            F(e);
          case 2:
            return e.return(d);
        }
      });
    }
    var bd = new Map(),
      dd = new Map();
    function ed() {
      var a = this;
      this.o = Xb.get("muxjs")();
      this.g = new this.o.mp4.Transmuxer({ keepOriginalTimestamps: !0 });
      this.h = null;
      this.m = [];
      this.i = [];
      this.l = [];
      this.j = !1;
      this.g.on("data", function (b) {
        a.i = b.captions;
        a.l = b.metadata;
        a.m.push($c(b.initSegment, b.data));
      });
      this.g.on("done", function () {
        var b = { data: $c.apply(Uc, ka(a.m)), captions: a.i, metadata: a.l };
        a.h.resolve(b);
        a.j = !1;
      });
    }
    ed.prototype.destroy = function () {
      this.g.dispose();
      this.g = null;
      return Promise.resolve();
    };
    function fd(a, b) {
      if (!Xb.get("muxjs")() || !gd(a)) return !1;
      if (b) return ad(hd(b, a));
      b = hd("audio", a);
      a = hd("video", a);
      return ad(b) || ad(a);
    }
    function gd(a) {
      return "mp2t" == a.toLowerCase().split(";")[0].split("/")[1];
    }
    function hd(a, b) {
      b = b.replace(/mp2t/i, "mp4");
      "audio" == a && (b = b.replace("video", "audio"));
      if ((a = /avc1\.(66|77|100)\.(\d+)/.exec(b))) {
        var c = "avc1.",
          d = a[1],
          e = Number(a[2]);
        c =
          ("66" == d ? c + "4200" : "77" == d ? c + "4d00" : c + "6400") +
          (e >> 4).toString(16);
        c += (e & 15).toString(16);
        b = b.replace(a[0], c);
      }
      return b;
    }
    function id(a, b) {
      a.j = !0;
      a.h = new vc();
      a.m = [];
      a.i = [];
      a.l = [];
      b = N(b);
      a.g.push(b);
      a.g.flush();
      a.j && a.h.reject(new O(2, 3, 3018));
      return a.h;
    }
    function jd(a, b) {
      b && (a += '; codecs="' + b + '"');
      return a;
    }
    function kd(a, b, c) {
      a = jd(a, b);
      if (gd(a)) {
        if (Xb.get("muxjs")()) return hd(c, a);
      } else if ("audio" == c) return a.replace("video", "audio");
      return a;
    }
    function ld(a) {
      var b = md(a);
      a = b[0];
      b = b[1].toLowerCase();
      switch (!0) {
        case "mp4a" === a && "69" === b:
        case "mp4a" === a && "6b" === b:
          return "mp3";
        case "mp4a" === a && "66" === b:
        case "mp4a" === a && "67" === b:
        case "mp4a" === a && "68" === b:
        case "mp4a" === a && "40.2" === b:
        case "mp4a" === a && "40.02" === b:
        case "mp4a" === a && "40.5" === b:
        case "mp4a" === a && "40.05" === b:
        case "mp4a" === a && "40.29" === b:
        case "mp4a" === a && "40.42" === b:
          return "aac";
        case "mp4a" === a && "a5" === b:
          return "ac-3";
        case "mp4a" === a && "a6" === b:
          return "ec-3";
        case "mp4a" === a && "b2" === b:
          return "dtsx";
        case "mp4a" === a && "a9" === b:
          return "dtsc";
        case "avc1" === a:
        case "avc3" === a:
          return "avc";
        case "hvc1" === a:
        case "hev1" === a:
          return "hevc";
        case "dvh1" === a:
        case "dvhe" === a:
          return "dovi";
      }
      return a;
    }
    function nd(a) {
      a = a.split(/ *; */);
      a.shift();
      return (a = a.find(function (b) {
        return b.startsWith("codecs=");
      }))
        ? a.split("=")[1].replace(/^"|"$/g, "")
        : "";
    }
    function md(a) {
      a = a.split(".");
      var b = a[0];
      a.shift();
      return [b, a.join(".")];
    }
    new Map()
      .set("codecs", "codecs")
      .set("frameRate", "framerate")
      .set("bandwidth", "bitrate")
      .set("width", "width")
      .set("height", "height")
      .set("channelsCount", "channels");
    function od(a) {
      this.j = null;
      this.i = a;
      this.l = this.u = 0;
      this.m = Infinity;
      this.h = this.g = null;
      this.s = "";
      this.o = new Map();
    }
    function pd(a) {
      return qd[a] || "application/cea-608" == a || "application/cea-708" == a
        ? !0
        : !1;
    }
    od.prototype.destroy = function () {
      this.i = this.j = null;
      this.o.clear();
      return Promise.resolve();
    };
    function rd(a, b, c, d) {
      var e, f, g;
      return L(function (h) {
        if (1 == h.g) return y(h, Promise.resolve(), 2);
        if (!a.j || !a.i) return h.return();
        if (null == c || null == d) return a.j.parseInit(N(b)), h.return();
        e = { periodStart: a.u, segmentStart: c, segmentEnd: d };
        f = a.j.parseMedia(N(b), e);
        g = f.filter(function (k) {
          return k.startTime >= a.l && k.startTime < a.m;
        });
        a.i.append(g);
        null == a.g && (a.g = Math.max(c, a.l));
        a.h = Math.min(d, a.m);
        B(h);
      });
    }
    od.prototype.remove = function (a, b) {
      var c = this;
      return L(function (d) {
        if (1 == d.g) return y(d, Promise.resolve(), 2);
        !c.i ||
          !c.i.remove(a, b) ||
          null == c.g ||
          b <= c.g ||
          a >= c.h ||
          (a <= c.g && b >= c.h
            ? (c.g = c.h = null)
            : a <= c.g && b < c.h
            ? (c.g = b)
            : a > c.g && b >= c.h && (c.h = a));
        B(d);
      });
    };
    function sd(a, b, c) {
      a.l = b;
      a.m = c;
    }
    function td(a, b, c) {
      a.s = b;
      if ((b = a.o.get(b)))
        for (var d = v(b.keys()), e = d.next(); !e.done; e = d.next())
          (e = b.get(e.value).filter(function (f) {
            return f.endTime <= c;
          })) && a.i.append(e);
    }
    function ud(a) {
      var b = [];
      a = v(a);
      for (var c = a.next(); !c.done; c = a.next())
        (c = c.value),
          b.push({
            stream: c.stream,
            cue: new nb(c.startTime, c.endTime, c.text),
          });
      return b;
    }
    function vd(a, b, c) {
      b.startTime += c;
      b.endTime += c;
      b = v(b.nestedCues);
      for (var d = b.next(); !d.done; d = b.next()) vd(a, d.value, c);
    }
    function wd(a, b, c, d, e) {
      var f = c + " " + d,
        g = new Map();
      b = v(b);
      for (var h = b.next(); !h.done; h = b.next()) {
        var k = h.value;
        h = k.stream;
        k = k.cue;
        g.has(h) || g.set(h, new Map());
        g.get(h).has(f) || g.get(h).set(f, []);
        vd(a, k, e);
        k.startTime >= a.l &&
          k.startTime < a.m &&
          (g.get(h).get(f).push(k), h == a.s && a.i.append([k]));
      }
      e = v(g.keys());
      for (f = e.next(); !f.done; f = e.next())
        for (
          f = f.value,
            a.o.has(f) || a.o.set(f, new Map()),
            b = v(g.get(f).keys()),
            h = b.next();
          !h.done;
          h = b.next()
        )
          (h = h.value), (k = g.get(f).get(h)), a.o.get(f).set(h, k);
      a.g = null == a.g ? Math.max(c, a.l) : Math.min(a.g, Math.max(c, a.l));
      a.h = Math.max(a.h, Math.min(d, a.m));
    }
    M("shaka.text.TextEngine", od);
    od.prototype.destroy = od.prototype.destroy;
    od.findParser = function (a) {
      return qd[a];
    };
    od.unregisterParser = function (a) {
      delete qd[a];
    };
    od.registerParser = function (a, b) {
      qd[a] = b;
    };
    var qd = {};
    function xd() {}
    function yd(a, b) {
      a = R(a);
      b = R(b);
      return a.split("-")[0] == b.split("-")[0];
    }
    function zd(a, b) {
      a = R(a);
      b = R(b);
      a = a.split("-");
      b = b.split("-");
      return a[0] == b[0] && 1 == a.length && 2 == b.length;
    }
    function Ad(a, b) {
      a = R(a);
      b = R(b);
      a = a.split("-");
      b = b.split("-");
      return 2 == a.length && 2 == b.length && a[0] == b[0];
    }
    function R(a) {
      var b = a.split("-");
      a = b[0] || "";
      b = b[1] || "";
      a = a.toLowerCase();
      a = Bd.get(a) || a;
      return (b = b.toUpperCase()) ? a + "-" + b : a;
    }
    function Cd(a, b) {
      a = R(a);
      b = R(b);
      return b == a ? 4 : zd(b, a) ? 3 : Ad(b, a) ? 2 : zd(a, b) ? 1 : 0;
    }
    function Dd(a) {
      var b = a.indexOf("-");
      a = 0 <= b ? a.substring(0, b) : a;
      a = a.toLowerCase();
      return (a = Bd.get(a) || a);
    }
    function Ed(a) {
      return a.language
        ? R(a.language)
        : a.audio && a.audio.language
        ? R(a.audio.language)
        : a.video && a.video.language
        ? R(a.video.language)
        : "und";
    }
    function Fd(a, b) {
      a = R(a);
      var c = new Set(),
        d = v(b);
      for (b = d.next(); !b.done; b = d.next()) c.add(R(b.value));
      d = v(c);
      for (b = d.next(); !b.done; b = d.next())
        if (((b = b.value), b == a)) return b;
      d = v(c);
      for (b = d.next(); !b.done; b = d.next())
        if (((b = b.value), zd(b, a))) return b;
      d = v(c);
      for (b = d.next(); !b.done; b = d.next())
        if (((b = b.value), Ad(b, a))) return b;
      c = v(c);
      for (b = c.next(); !b.done; b = c.next())
        if (((b = b.value), zd(a, b))) return b;
      return null;
    }
    M("shaka.util.LanguageUtils", xd);
    xd.findClosestLocale = Fd;
    xd.getLocaleForVariant = Ed;
    xd.getLocaleForText = function (a) {
      return R(a.language || "und");
    };
    xd.getBase = Dd;
    xd.relatedness = Cd;
    xd.areSiblings = function (a, b) {
      var c = Dd(a),
        d = Dd(b);
      return a != c && b != d && c == d;
    };
    xd.normalize = R;
    xd.isSiblingOf = Ad;
    xd.isParentOf = zd;
    xd.areLanguageCompatible = yd;
    xd.areLocaleCompatible = function (a, b) {
      a = R(a);
      b = R(b);
      return a == b;
    };
    var Bd = new Map([
      ["aar", "aa"],
      ["abk", "ab"],
      ["afr", "af"],
      ["aka", "ak"],
      ["alb", "sq"],
      ["amh", "am"],
      ["ara", "ar"],
      ["arg", "an"],
      ["arm", "hy"],
      ["asm", "as"],
      ["ava", "av"],
      ["ave", "ae"],
      ["aym", "ay"],
      ["aze", "az"],
      ["bak", "ba"],
      ["bam", "bm"],
      ["baq", "eu"],
      ["bel", "be"],
      ["ben", "bn"],
      ["bih", "bh"],
      ["bis", "bi"],
      ["bod", "bo"],
      ["bos", "bs"],
      ["bre", "br"],
      ["bul", "bg"],
      ["bur", "my"],
      ["cat", "ca"],
      ["ces", "cs"],
      ["cha", "ch"],
      ["che", "ce"],
      ["chi", "zh"],
      ["chu", "cu"],
      ["chv", "cv"],
      ["cor", "kw"],
      ["cos", "co"],
      ["cre", "cr"],
      ["cym", "cy"],
      ["cze", "cs"],
      ["dan", "da"],
      ["deu", "de"],
      ["div", "dv"],
      ["dut", "nl"],
      ["dzo", "dz"],
      ["ell", "el"],
      ["eng", "en"],
      ["epo", "eo"],
      ["est", "et"],
      ["eus", "eu"],
      ["ewe", "ee"],
      ["fao", "fo"],
      ["fas", "fa"],
      ["fij", "fj"],
      ["fin", "fi"],
      ["fra", "fr"],
      ["fre", "fr"],
      ["fry", "fy"],
      ["ful", "ff"],
      ["geo", "ka"],
      ["ger", "de"],
      ["gla", "gd"],
      ["gle", "ga"],
      ["glg", "gl"],
      ["glv", "gv"],
      ["gre", "el"],
      ["grn", "gn"],
      ["guj", "gu"],
      ["hat", "ht"],
      ["hau", "ha"],
      ["heb", "he"],
      ["her", "hz"],
      ["hin", "hi"],
      ["hmo", "ho"],
      ["hrv", "hr"],
      ["hun", "hu"],
      ["hye", "hy"],
      ["ibo", "ig"],
      ["ice", "is"],
      ["ido", "io"],
      ["iii", "ii"],
      ["iku", "iu"],
      ["ile", "ie"],
      ["ina", "ia"],
      ["ind", "id"],
      ["ipk", "ik"],
      ["isl", "is"],
      ["ita", "it"],
      ["jav", "jv"],
      ["jpn", "ja"],
      ["kal", "kl"],
      ["kan", "kn"],
      ["kas", "ks"],
      ["kat", "ka"],
      ["kau", "kr"],
      ["kaz", "kk"],
      ["khm", "km"],
      ["kik", "ki"],
      ["kin", "rw"],
      ["kir", "ky"],
      ["kom", "kv"],
      ["kon", "kg"],
      ["kor", "ko"],
      ["kua", "kj"],
      ["kur", "ku"],
      ["lao", "lo"],
      ["lat", "la"],
      ["lav", "lv"],
      ["lim", "li"],
      ["lin", "ln"],
      ["lit", "lt"],
      ["ltz", "lb"],
      ["lub", "lu"],
      ["lug", "lg"],
      ["mac", "mk"],
      ["mah", "mh"],
      ["mal", "ml"],
      ["mao", "mi"],
      ["mar", "mr"],
      ["may", "ms"],
      ["mkd", "mk"],
      ["mlg", "mg"],
      ["mlt", "mt"],
      ["mon", "mn"],
      ["mri", "mi"],
      ["msa", "ms"],
      ["mya", "my"],
      ["nau", "na"],
      ["nav", "nv"],
      ["nbl", "nr"],
      ["nde", "nd"],
      ["ndo", "ng"],
      ["nep", "ne"],
      ["nld", "nl"],
      ["nno", "nn"],
      ["nob", "nb"],
      ["nor", "no"],
      ["nya", "ny"],
      ["oci", "oc"],
      ["oji", "oj"],
      ["ori", "or"],
      ["orm", "om"],
      ["oss", "os"],
      ["pan", "pa"],
      ["per", "fa"],
      ["pli", "pi"],
      ["pol", "pl"],
      ["por", "pt"],
      ["pus", "ps"],
      ["que", "qu"],
      ["roh", "rm"],
      ["ron", "ro"],
      ["rum", "ro"],
      ["run", "rn"],
      ["rus", "ru"],
      ["sag", "sg"],
      ["san", "sa"],
      ["sin", "si"],
      ["slk", "sk"],
      ["slo", "sk"],
      ["slv", "sl"],
      ["sme", "se"],
      ["smo", "sm"],
      ["sna", "sn"],
      ["snd", "sd"],
      ["som", "so"],
      ["sot", "st"],
      ["spa", "es"],
      ["sqi", "sq"],
      ["srd", "sc"],
      ["srp", "sr"],
      ["ssw", "ss"],
      ["sun", "su"],
      ["swa", "sw"],
      ["swe", "sv"],
      ["tah", "ty"],
      ["tam", "ta"],
      ["tat", "tt"],
      ["tel", "te"],
      ["tgk", "tg"],
      ["tgl", "tl"],
      ["tha", "th"],
      ["tib", "bo"],
      ["tir", "ti"],
      ["ton", "to"],
      ["tsn", "tn"],
      ["tso", "ts"],
      ["tuk", "tk"],
      ["tur", "tr"],
      ["twi", "tw"],
      ["uig", "ug"],
      ["ukr", "uk"],
      ["urd", "ur"],
      ["uzb", "uz"],
      ["ven", "ve"],
      ["vie", "vi"],
      ["vol", "vo"],
      ["wel", "cy"],
      ["wln", "wa"],
      ["wol", "wo"],
      ["xho", "xh"],
      ["yid", "yi"],
      ["yor", "yo"],
      ["zha", "za"],
      ["zho", "zh"],
      ["zul", "zu"],
    ]);
    function Gd() {
      this.g = {};
    }
    q = Gd.prototype;
    q.push = function (a, b) {
      this.g.hasOwnProperty(a) ? this.g[a].push(b) : (this.g[a] = [b]);
    };
    q.get = function (a) {
      return (a = this.g[a]) ? a.slice() : null;
    };
    q.remove = function (a, b) {
      a in this.g &&
        ((this.g[a] = this.g[a].filter(function (c) {
          return c != b;
        })),
        0 == this.g[a].length && delete this.g[a]);
    };
    q.forEach = function (a) {
      for (var b in this.g) a(b, this.g[b]);
    };
    q.size = function () {
      return Object.keys(this.g).length;
    };
    q.keys = function () {
      return Object.keys(this.g);
    };
    function Hd(a, b, c, d, e, f) {
      if (!f || "disabled" === f) {
        f = a.variants;
        if (b.length || c.length) f = Id(f, b, c);
        f = Jd(f, d);
        b = Kd(f);
        b = Ld(b);
        var g = Md(b, e);
        a.variants = a.variants.filter(function (h) {
          return Nd(h) == g ? !0 : !1;
        });
      }
    }
    function Kd(a) {
      var b = new Gd();
      a = v(a);
      for (var c = a.next(); !c.done; c = a.next()) {
        c = c.value;
        var d = Nd(c);
        b.push(d, c);
      }
      return b;
    }
    function Ld(a) {
      var b = 0,
        c = new Map(),
        d = a.size();
      a.forEach(function (e, f) {
        f = v(f);
        for (var g = f.next(); !g.done; g = f.next()) {
          g = g.value;
          var h = g.video;
          if (h && h.width && h.height) {
            h = h.width * h.height * (h.frameRate || 1);
            c.has(h) || c.set(h, new Gd());
            var k = c.get(h);
            k.push(e, g);
            k.size() === d && (b = Math.max(b, h));
          }
        }
      });
      return b ? c.get(b) : a;
    }
    function Id(a, b, c) {
      var d = {};
      b = v(b);
      for (var e = b.next(); !e.done; d = { dd: d.dd }, e = b.next())
        if (
          ((d.dd = e.value),
          (e = a.filter(
            (function (f) {
              return function (g) {
                return g.video && g.video.codecs.startsWith(f.dd);
              };
            })(d)
          )),
          e.length)
        ) {
          a = e;
          break;
        }
      d = {};
      c = v(c);
      for (b = c.next(); !b.done; d = { Uc: d.Uc }, b = c.next())
        if (
          ((d.Uc = b.value),
          (b = a.filter(
            (function (f) {
              return function (g) {
                return g.audio && g.audio.codecs.startsWith(f.Uc);
              };
            })(d)
          )),
          b.length)
        ) {
          a = b;
          break;
        }
      return a;
    }
    function Md(a, b) {
      b = v(b);
      for (var c = b.next(); !c.done; c = b.next())
        if (((c = c.value), c == Od || c == Pd)) {
          if (((a = Qd(a, c)), 1 == a.size())) return a.keys()[0];
        } else if (c == Rd) break;
      return Sd(a);
    }
    function Qd(a, b) {
      var c = 0,
        d = new Gd();
      a.forEach(function (e, f) {
        for (var g = 0, h = 0, k = v(f), l = k.next(); !l.done; l = k.next())
          (l = l.value),
            l.decodingInfos.length &&
              ((g += l.decodingInfos[0][b] ? 1 : 0), h++);
        g /= h;
        g > c ? ((d.g = {}), d.push(e, f), (c = g)) : g == c && d.push(e, f);
      });
      return d;
    }
    function Sd(a) {
      var b = "",
        c = Infinity;
      a.forEach(function (d, e) {
        var f = 0,
          g = 0;
        e = v(e);
        for (var h = e.next(); !h.done; h = e.next())
          (f += h.value.bandwidth || 0), ++g;
        f /= g;
        f < c && ((b = d), (c = f));
      });
      return b;
    }
    function Nd(a) {
      var b = "";
      a.video && (b = ld(a.video.codecs));
      var c = "";
      a.audio && (c = ld(a.audio.codecs));
      return b + "-" + c;
    }
    function Td(a, b, c) {
      function d(f, g, h) {
        return f >= g && f <= h;
      }
      var e = a.video;
      return (e &&
        e.width &&
        e.height &&
        (!d(e.width, b.minWidth, Math.min(b.maxWidth, c.width)) ||
          !d(e.height, b.minHeight, Math.min(b.maxHeight, c.height)) ||
          !d(e.width * e.height, b.minPixels, b.maxPixels))) ||
        (a &&
          a.video &&
          a.video.frameRate &&
          !d(a.video.frameRate, b.minFrameRate, b.maxFrameRate)) ||
        !d(a.bandwidth, b.minBandwidth, b.maxBandwidth)
        ? !1
        : !0;
    }
    function Ud(a, b, c) {
      var d;
      return L(function (e) {
        if (1 == e.g) return y(e, Vd(b, 0 < b.offlineSessionIds.length), 2);
        d = ib;
        c && c === d.DISABLED && Wd(a, b);
        Xd(b);
        Yd(b);
        B(e);
      });
    }
    function Vd(a, b) {
      return L(function (c) {
        if (1 == c.g) return y(c, Zd(a.variants, b, !1, []), 2);
        a.variants = a.variants.filter(function (d) {
          var e = d.video;
          if (e) {
            var f = $d(e.codecs);
            if (e.codecs.includes(",")) {
              var g = e.codecs.split(",");
              f = pc("video", g);
              g = pc("audio", g);
              g = kd(e.mimeType, g, "audio");
              if (!ad(g)) return !1;
            }
            f = kd(e.mimeType, f, "video");
            if (!ad(f)) return !1;
          }
          if ((f = d.audio))
            if (((g = ae(f.codecs)), (f = kd(f.mimeType, g, "audio")), !ad(f)))
              return !1;
          if (
            Dc("Xbox One") &&
            e &&
            ((e.width && 1920 < e.width) || (e.height && 1080 < e.height)) &&
            e.codecs.includes("avc1.")
          )
            return db(be(d)), !1;
          (e = d.decodingInfos.some(function (h) {
            return h.supported;
          })) || db(be(d));
          return e;
        });
        B(c);
      });
    }
    function Zd(a, b, c, d) {
      var e, f, g, h, k, l, m, p, n, r, u, t, w, x, C, z, A, H, G;
      return L(function (D) {
        switch (D.g) {
          case 1:
            if (
              (e = a.some(function (I) {
                return I.decodingInfos.length;
              }))
            )
              return D.return();
            f = navigator.mediaCapabilities;
            g = function (I, J) {
              var K;
              return L(function (P) {
                if (1 == P.g) return E(P, 2), y(P, f.decodingInfo(J), 4);
                if (2 != P.g)
                  return (K = P.h), I.decodingInfos.push(K), wa(P, 0);
                F(P);
                JSON.stringify(J);
                B(P);
              });
            };
            h = {};
            k = v(d);
            l = k.next();
          case 2:
            if (l.done) {
              D.A(4);
              break;
            }
            h.Yc = l.value;
            m = !1;
            p = v(a);
            n = p.next();
          case 5:
            if (n.done) {
              D.A(7);
              break;
            }
            r = n.value;
            u = ce(r, b, c).filter(
              (function (I) {
                return function (J) {
                  return (
                    (J.keySystemConfiguration &&
                      J.keySystemConfiguration.keySystem) === I.Yc
                  );
                };
              })(h)
            );
            t = v(u);
            w = t.next();
          case 8:
            if (w.done) {
              D.A(10);
              break;
            }
            x = w.value;
            return y(D, g(r, x), 9);
          case 9:
            w = t.next();
            D.A(8);
            break;
          case 10:
            r.decodingInfos.length && (m = !0);
            n = p.next();
            D.A(5);
            break;
          case 7:
            if (m) return D.return();
            h = { Yc: h.Yc };
            l = k.next();
            D.A(2);
            break;
          case 4:
            (C = v(a)), (n = C.next());
          case 12:
            if (n.done) {
              D.A(0);
              break;
            }
            z = n.value;
            A = ce(z, b, c);
            H = v(A);
            w = H.next();
          case 15:
            if (w.done) {
              n = C.next();
              D.A(12);
              break;
            }
            G = w.value;
            return y(D, g(z, G), 16);
          case 16:
            (w = H.next()), D.A(15);
        }
      });
    }
    function ce(a, b, c) {
      var d = a.audio,
        e = a.video;
      c = { type: c ? "file" : "media-source" };
      if (e) {
        var f = e.codecs;
        if (e.codecs.includes(",")) {
          var g = e.codecs.split(",");
          f = pc("video", g);
          f = $d(f);
          g = pc("audio", g);
          g = kd(e.mimeType, g, "audio");
          c.audio = {
            contentType: g,
            channels: 2,
            bitrate: a.bandwidth || 1,
            samplerate: 1,
            spatialRendering: !1,
          };
        }
        f = $d(f);
        f = kd(e.mimeType, f, "video");
        c.video = {
          contentType: f,
          width: e.width || 64,
          height: e.height || 64,
          bitrate: e.bandwidth || a.bandwidth || 1,
          framerate: e.frameRate || 1,
        };
        if (e.hdr)
          switch (e.hdr) {
            case "SDR":
              c.video.transferFunction = "srgb";
              break;
            case "PQ":
              c.video.transferFunction = "pq";
              break;
            case "HLG":
              c.video.transferFunction = "hlg";
          }
      }
      d &&
        ((f = ae(d.codecs)),
        (f = kd(d.mimeType, f, "audio")),
        (c.audio = {
          contentType: f,
          channels: d.channelsCount || 2,
          bitrate: d.bandwidth || a.bandwidth || 1,
          samplerate: d.audioSamplingRate || 1,
          spatialRendering: d.spatialAudio,
        }));
      g = (a.video ? a.video.drmInfos : []).concat(
        a.audio ? a.audio.drmInfos : []
      );
      if (!g.length) return [c];
      a = [];
      f = new Map();
      g = v(g);
      for (var h = g.next(); !h.done; h = g.next()) {
        var k = h.value;
        f.get(k.keySystem) || f.set(k.keySystem, []);
        f.get(k.keySystem).push(k);
      }
      g = b ? "required" : "optional";
      b = b ? ["persistent-license"] : ["temporary"];
      k = v(f.keys());
      for (var l = k.next(); !l.done; l = k.next()) {
        l = l.value;
        var m = f.get(l),
          p = new Map();
        m = v(m);
        for (h = m.next(); !h.done; h = m.next()) {
          var n = h.value;
          h = n.videoRobustness + "," + n.audioRobustness;
          p.get(h) || p.set(h, []);
          p.get(h).push(n);
        }
        p = v(p.values());
        for (m = p.next(); !m.done; m = p.next()) {
          h = m.value;
          m = Object.assign({}, c);
          n = {
            keySystem: l,
            initDataType: "cenc",
            persistentState: g,
            distinctiveIdentifier: "optional",
            sessionTypes: b,
          };
          var r = v(h);
          for (h = r.next(); !h.done; h = r.next()) {
            h = h.value;
            if (h.initData && h.initData.length) {
              for (
                var u = new Set(), t = v(h.initData), w = t.next();
                !w.done;
                w = t.next()
              )
                u.add(w.value.initDataType);
              n.initDataType = h.initData[0].initDataType;
            }
            h.distinctiveIdentifierRequired &&
              (n.distinctiveIdentifier = "required");
            h.persistentStateRequired && (n.persistentState = "required");
            h.sessionType && (n.sessionTypes = [h.sessionType]);
            d &&
              (n.audio
                ? (n.audio.robustness = n.audio.robustness || h.audioRobustness)
                : (n.audio = { robustness: h.audioRobustness }));
            e &&
              (n.video
                ? (n.video.robustness = n.video.robustness || h.videoRobustness)
                : (n.video = { robustness: h.videoRobustness }));
          }
          m.keySystemConfiguration = n;
          a.push(m);
        }
      }
      return a;
    }
    function ae(a) {
      return Cc() ? ("ac-3" == a.toLowerCase() ? "ec-3" : a) : a;
    }
    function $d(a) {
      return "vp9" == a ? "vp09.00.41.08" : a;
    }
    function Wd(a, b) {
      b.variants = b.variants.filter(function (c) {
        var d = c.audio;
        c = c.video;
        return (d && a && a.audio && !de(d, a.audio)) ||
          (c && a && a.video && !de(c, a.video))
          ? !1
          : !0;
      });
    }
    function Xd(a) {
      a.textStreams = a.textStreams.filter(function (b) {
        return pd(jd(b.mimeType, b.codecs));
      });
    }
    function Yd(a) {
      a.imageStreams = a.imageStreams.filter(function (b) {
        var c = ["image/svg+xml", "image/png", "image/jpeg"];
        (Ec() || Cc() || Fc()) && c.push("image/webp");
        return c.includes(b.mimeType);
      });
    }
    function de(a, b) {
      return a.mimeType != b.mimeType ||
        a.codecs.split(".")[0] != b.codecs.split(".")[0]
        ? !1
        : !0;
    }
    function ee(a) {
      var b = a.audio,
        c = a.video,
        d = b ? b.codecs : null,
        e = c ? c.codecs : null,
        f = [];
      e && f.push(e);
      d && f.push(d);
      var g = [];
      c && g.push(c.mimeType);
      b && g.push(b.mimeType);
      g = g[0] || null;
      var h = [];
      b && h.push(b.kind);
      c && h.push(c.kind);
      h = h[0] || null;
      var k = new Set();
      if (b)
        for (var l = v(b.roles), m = l.next(); !m.done; m = l.next())
          k.add(m.value);
      if (c)
        for (l = v(c.roles), m = l.next(); !m.done; m = l.next())
          k.add(m.value);
      a = {
        id: a.id,
        active: !1,
        type: "variant",
        bandwidth: a.bandwidth,
        language: a.language,
        label: null,
        kind: h,
        width: null,
        height: null,
        frameRate: null,
        pixelAspectRatio: null,
        hdr: null,
        mimeType: g,
        codecs: f.join(", "),
        audioCodec: d,
        videoCodec: e,
        primary: a.primary,
        roles: Array.from(k),
        audioRoles: null,
        forced: !1,
        videoId: null,
        audioId: null,
        channelsCount: null,
        audioSamplingRate: null,
        spatialAudio: !1,
        tilesLayout: null,
        audioBandwidth: null,
        videoBandwidth: null,
        originalVideoId: null,
        originalAudioId: null,
        originalTextId: null,
        originalImageId: null,
        originalLanguage: null,
      };
      c &&
        ((a.videoId = c.id),
        (a.originalVideoId = c.originalId),
        (a.width = c.width || null),
        (a.height = c.height || null),
        (a.frameRate = c.frameRate || null),
        (a.pixelAspectRatio = c.pixelAspectRatio || null),
        (a.videoBandwidth = c.bandwidth || null));
      b &&
        ((a.audioId = b.id),
        (a.originalAudioId = b.originalId),
        (a.channelsCount = b.channelsCount),
        (a.audioSamplingRate = b.audioSamplingRate),
        (a.audioBandwidth = b.bandwidth || null),
        (a.spatialAudio = b.spatialAudio),
        (a.label = b.label),
        (a.audioRoles = b.roles),
        (a.originalLanguage = b.originalLanguage));
      return a;
    }
    function fe(a) {
      return {
        id: a.id,
        active: !1,
        type: sc,
        bandwidth: 0,
        language: a.language,
        label: a.label,
        kind: a.kind || null,
        width: null,
        height: null,
        frameRate: null,
        pixelAspectRatio: null,
        hdr: null,
        mimeType: a.mimeType,
        codecs: a.codecs || null,
        audioCodec: null,
        videoCodec: null,
        primary: a.primary,
        roles: a.roles,
        audioRoles: null,
        forced: a.forced,
        videoId: null,
        audioId: null,
        channelsCount: null,
        audioSamplingRate: null,
        spatialAudio: !1,
        tilesLayout: null,
        audioBandwidth: null,
        videoBandwidth: null,
        originalVideoId: null,
        originalAudioId: null,
        originalTextId: a.originalId,
        originalImageId: null,
        originalLanguage: a.originalLanguage,
      };
    }
    function ge(a) {
      a.__shaka_id || (a.__shaka_id = he++);
      return a.__shaka_id;
    }
    function ie(a) {
      var b = je(a);
      b.active = "disabled" != a.mode;
      b.type = "text";
      b.originalTextId = a.id;
      "captions" == a.kind && (b.mimeType = "application/cea-608");
      "subtitles" == a.kind && (b.mimeType = "text/vtt");
      a.kind && (b.roles = [a.kind]);
      "forced" == a.kind && (b.forced = !0);
      return b;
    }
    function ke(a) {
      var b = je(a);
      b.active = a.enabled;
      b.type = "variant";
      b.originalAudioId = a.id;
      "main" == a.kind && (b.primary = !0);
      a.kind &&
        ((b.roles = [a.kind]), (b.audioRoles = [a.kind]), (b.label = a.label));
      return b;
    }
    function je(a) {
      var b = a.language || "und";
      return {
        id: ge(a),
        active: !1,
        type: "",
        bandwidth: 0,
        language: R(b),
        label: a.label,
        kind: a.kind,
        width: null,
        height: null,
        frameRate: null,
        pixelAspectRatio: null,
        hdr: null,
        mimeType: null,
        codecs: null,
        audioCodec: null,
        videoCodec: null,
        primary: !1,
        roles: [],
        forced: !1,
        audioRoles: null,
        videoId: null,
        audioId: null,
        channelsCount: null,
        audioSamplingRate: null,
        spatialAudio: !1,
        tilesLayout: null,
        audioBandwidth: null,
        videoBandwidth: null,
        originalVideoId: null,
        originalAudioId: null,
        originalTextId: null,
        originalImageId: null,
        originalLanguage: b,
      };
    }
    function le(a) {
      return a.allowedByApplication && a.allowedByKeySystem;
    }
    function Jd(a, b) {
      var c = a.filter(function (g) {
          return g.audio && g.audio.channelsCount;
        }),
        d = new Map();
      c = v(c);
      for (var e = c.next(); !e.done; e = c.next()) {
        e = e.value;
        var f = e.audio.channelsCount;
        d.has(f) || d.set(f, []);
        d.get(f).push(e);
      }
      c = Array.from(d.keys());
      if (0 == c.length) return a;
      a = c.filter(function (g) {
        return g <= b;
      });
      return a.length
        ? d.get(Math.max.apply(Math, ka(a)))
        : d.get(Math.min.apply(Math, ka(c)));
    }
    function me(a, b, c, d) {
      var e = a,
        f = a.filter(function (k) {
          return k.primary;
        });
      f.length && (e = f);
      var g = e.length ? e[0].language : "";
      e = e.filter(function (k) {
        return k.language == g;
      });
      if (b) {
        var h = Fd(
          R(b),
          a.map(function (k) {
            return k.language;
          })
        );
        h &&
          (e = a.filter(function (k) {
            return R(k.language) == h;
          }));
      }
      e = e.filter(function (k) {
        return k.forced == d;
      });
      if (c) {
        if (((a = ne(e, c)), a.length)) return a;
      } else if (
        ((a = e.filter(function (k) {
          return 0 == k.roles.length;
        })),
        a.length)
      )
        return a;
      a = e
        .map(function (k) {
          return k.roles;
        })
        .reduce(Sb, []);
      return a.length ? ne(e, a[0]) : e;
    }
    function ne(a, b) {
      return a.filter(function (c) {
        return c.roles.includes(b);
      });
    }
    function be(a) {
      var b = [];
      a.audio && b.push(oe(a.audio));
      a.video && b.push(oe(a.video));
      return b.join(", ");
    }
    function oe(a) {
      return "audio" == a.type
        ? "type=audio codecs=" +
            a.codecs +
            " bandwidth=" +
            a.bandwidth +
            " channelsCount=" +
            a.channelsCount +
            " audioSamplingRate=" +
            a.audioSamplingRate
        : "video" == a.type
        ? "type=video codecs=" +
          a.codecs +
          " bandwidth=" +
          a.bandwidth +
          " frameRate=" +
          a.frameRate +
          " width=" +
          a.width +
          " height=" +
          a.height
        : "unexpected stream type";
    }
    var he = 0,
      Od = "smooth",
      Pd = "powerEfficient",
      Rd = "bandwidth";
    function pe() {
      var a = this;
      this.i = null;
      this.l = !1;
      this.h = new Xa();
      navigator.connection &&
        navigator.connection.addEventListener("change", function () {
          if (a.g.useNetworkInformation && a.l) {
            a.h = new Xa();
            a.g && a.h.configure(a.g.advanced);
            var b = a.chooseVariant();
            b && a.i(b);
          }
        });
      this.j = [];
      this.s = null;
      this.o = 1;
      this.u = !1;
      this.g = this.m = null;
    }
    q = pe.prototype;
    q.stop = function () {
      this.i = null;
      this.l = !1;
      this.j = [];
      this.o = 1;
      this.m = null;
    };
    q.init = function (a) {
      this.i = a;
    };
    q.chooseVariant = function () {
      for (
        var a = qe(this),
          b = this.h.getBandwidthEstimate(re(this)),
          c = a[0] || null,
          d = 0;
        d < a.length;
        d++
      ) {
        for (
          var e = a[d],
            f = isNaN(this.o) ? 1 : Math.abs(this.o),
            g = (f * e.bandwidth) / this.g.bandwidthDowngradeTarget,
            h = { bandwidth: Infinity },
            k = d + 1;
          k < a.length;
          k++
        )
          if (e.bandwidth != a[k].bandwidth) {
            h = a[k];
            break;
          }
        f = (f * h.bandwidth) / this.g.bandwidthUpgradeTarget;
        b >= g && b <= f && c.bandwidth != e.bandwidth && (c = e);
      }
      this.m = Date.now();
      return (this.s = c);
    };
    q.enable = function () {
      this.l = !0;
    };
    q.disable = function () {
      this.l = !1;
    };
    q.segmentDownloaded = function (a, b) {
      var c = -1 === b;
      c || this.h.sample(a, b);
      if (null != this.m && this.l)
        if (c && this.g.forceLowestRateOnTimeout)
          (a = this.s),
            (b = qe(this)[0]),
            b != a && ((this.m = Date.now()), (this.s = b), this.i(b));
        else
          a: {
            if (!this.u) {
              a = this.h;
              if (!(a.g >= a.i)) break a;
              this.u = !0;
            } else if (!c && Date.now() - this.m < 1e3 * this.g.switchInterval)
              break a;
            a = this.chooseVariant();
            this.h.getBandwidthEstimate(re(this));
            a && this.i(a);
          }
    };
    q.getBandwidthEstimate = function () {
      return this.h.getBandwidthEstimate(re(this));
    };
    q.setVariants = function (a) {
      this.j = a;
    };
    q.playbackRateChanged = function (a) {
      this.o = a;
    };
    q.configure = function (a) {
      this.g = a;
      this.h && this.g && this.h.configure(this.g.advanced);
    };
    function qe(a) {
      var b = se(a.g.restrictions, a.j);
      a.j.length && !b.length && ((b = se(null, a.j)), (b = [b[0]]));
      return b;
    }
    function re(a) {
      var b = a.g.defaultBandwidthEstimate;
      navigator.connection &&
        navigator.connection.downlink &&
        a.g.useNetworkInformation &&
        (b = 1e6 * navigator.connection.downlink);
      return b;
    }
    function se(a, b) {
      a &&
        (b = b.filter(function (c) {
          return Td(c, a, { width: Infinity, height: Infinity });
        }));
      return b.sort(function (c, d) {
        return c.bandwidth - d.bandwidth;
      });
    }
    M("shaka.abr.SimpleAbrManager", pe);
    pe.prototype.configure = pe.prototype.configure;
    pe.prototype.playbackRateChanged = pe.prototype.playbackRateChanged;
    pe.prototype.setVariants = pe.prototype.setVariants;
    pe.prototype.getBandwidthEstimate = pe.prototype.getBandwidthEstimate;
    pe.prototype.segmentDownloaded = pe.prototype.segmentDownloaded;
    pe.prototype.disable = pe.prototype.disable;
    pe.prototype.enable = pe.prototype.enable;
    pe.prototype.chooseVariant = pe.prototype.chooseVariant;
    pe.prototype.init = pe.prototype.init;
    pe.prototype.stop = pe.prototype.stop;
    function te(a, b, c, d, e) {
      if (d >= e) return null;
      for (var f = -1, g = -1, h = 0; h < c.length; h++)
        if (
          c[h].some(function (A) {
            return null != A && "" != A.g.trim();
          })
        ) {
          f = h;
          break;
        }
      for (h = c.length - 1; 0 <= h; h--)
        if (
          c[h].some(function (A) {
            return null != A && "" != A.g.trim();
          })
        ) {
          g = h;
          break;
        }
      if (-1 === f || -1 === g) return null;
      for (
        var k = (h = !1), l = "white", m = "black", p = ue(d, e, h, k, l, m);
        f <= g;
        f++
      ) {
        for (var n = c[f], r = -1, u = -1, t = 0; t < n.length; t++)
          if (null != n[t] && "" !== n[t].g.trim()) {
            r = t;
            break;
          }
        for (t = n.length - 1; 0 <= t; t--)
          if (null != n[t] && "" !== n[t].g.trim()) {
            u = t;
            break;
          }
        if (-1 === r || -1 === u) (n = ve(d, e)), a.nestedCues.push(n);
        else {
          for (; r <= u; r++)
            if ((t = n[r])) {
              var w = t.l,
                x = t.i,
                C = t.j,
                z = t.h;
              if (w != h || x != k || C != l || z != m)
                p.payload && a.nestedCues.push(p),
                  (p = ue(d, e, w, x, C, z)),
                  (h = w),
                  (k = x),
                  (l = C),
                  (m = z);
              p.payload += t.g;
            } else p.payload += " ";
          p.payload && a.nestedCues.push(p);
          f !== g && ((p = ve(d, e)), a.nestedCues.push(p));
          p = ue(d, e, h, k, l, m);
        }
      }
      return a.nestedCues.length ? { cue: a, stream: b } : null;
    }
    function ue(a, b, c, d, e, f) {
      a = new nb(a, b, "");
      c && a.textDecoration.push("underline");
      d && (a.fontStyle = "italic");
      a.color = e;
      a.backgroundColor = f;
      return a;
    }
    function ve(a, b) {
      a = new nb(a, b, "");
      a.lineBreak = !0;
      return a;
    }
    function we(a, b, c, d, e) {
      this.g = a;
      this.l = b;
      this.i = c;
      this.h = d;
      this.j = e;
    }
    function xe(a, b) {
      this.i = [];
      this.g = 1;
      this.h = 0;
      this.u = a;
      this.s = b;
      this.j = this.m = !1;
      this.l = "white";
      this.o = "black";
      ye(this);
    }
    function ze(a, b, c) {
      return te(new nb(b, c, ""), "CC" + ((a.u << 1) | (a.s + 1)), a.i, b, c);
    }
    function ye(a) {
      Ae(a, 0, 15);
      a.g = 1;
    }
    function Be(a, b, c) {
      if (!(32 > c || 127 < c)) {
        var d = "";
        switch (b) {
          case Ce:
            d = De.has(c) ? De.get(c) : String.fromCharCode(c);
            break;
          case Ee:
            d = Fe.get(c);
            break;
          case Ge:
            a.i[a.g].pop();
            d = He.get(c);
            break;
          case Ie:
            a.i[a.g].pop(), (d = Je.get(c));
        }
        d && a.i[a.g].push(new we(d, a.m, a.j, a.o, a.l));
      }
    }
    function Ke(a, b, c, d) {
      if (b >= c)
        for (--d; 0 <= d; d--)
          a.i[b + d] = a.i[c + d].map(function (f) {
            return f;
          });
      else
        for (var e = 0; e < d; e++)
          a.i[b + e] = a.i[c + e].map(function (f) {
            return f;
          });
    }
    function Ae(a, b, c) {
      for (var d = 0; d <= c; d++) a.i[b + d] = [];
    }
    var Ce = 0,
      Ee = 1,
      Ge = 2,
      Ie = 3,
      De = new Map([
        [39, "\u2019"],
        [42, "\u00e1"],
        [92, "\u00e9"],
        [92, "\u00e9"],
        [94, "\u00ed"],
        [95, "\u00f3"],
        [96, "\u00fa"],
        [123, "\u00e7"],
        [124, "\u00f7"],
        [125, "\u00d1"],
        [126, "\u00f1"],
        [127, "\u2588"],
      ]),
      Fe = new Map([
        [48, "\u00ae"],
        [49, "\u00b0"],
        [50, "\u00bd"],
        [51, "\u00bf"],
        [52, "\u2122"],
        [53, "\u00a2"],
        [54, "\u00a3"],
        [55, "\u266a"],
        [56, "\u00e0"],
        [57, "\u2800"],
        [58, "\u00e8"],
        [59, "\u00e2"],
        [60, "\u00ea"],
        [61, "\u00ee"],
        [62, "\u00f4"],
        [63, "\u00fb"],
      ]),
      He = new Map([
        [32, "\u00c1"],
        [33, "\u00c9"],
        [34, "\u00d3"],
        [35, "\u00da"],
        [36, "\u00dc"],
        [37, "\u00fc"],
        [38, "\u2018"],
        [39, "\u00a1"],
        [40, "*"],
        [41, "'"],
        [42, "\u2500"],
        [43, "\u00a9"],
        [44, "\u2120"],
        [45, "\u00b7"],
        [46, "\u201c"],
        [47, "\u201d"],
        [48, "\u00c0"],
        [49, "\u00c2"],
        [50, "\u00c7"],
        [51, "\u00c8"],
        [52, "\u00ca"],
        [53, "\u00cb"],
        [54, "\u00eb"],
        [55, "\u00ce"],
        [56, "\u00cf"],
        [57, "\u00ef"],
        [58, "\u00d4"],
        [59, "\u00d9"],
        [60, "\u00f9"],
        [61, "\u00db"],
        [62, "\u00ab"],
        [63, "\u00bb"],
      ]),
      Je = new Map([
        [32, "\u00c3"],
        [33, "\u00e3"],
        [34, "\u00cd"],
        [35, "\u00cc"],
        [36, "\u00ec"],
        [37, "\u00d2"],
        [38, "\u00f2"],
        [39, "\u00d5"],
        [40, "\u00f5"],
        [41, "{"],
        [42, "}"],
        [43, "\\"],
        [44, "^"],
        [45, "_"],
        [46, "|"],
        [47, "~"],
        [48, "\u00c4"],
        [49, "\u00e4"],
        [50, "\u00d6"],
        [51, "\u00f6"],
        [52, "\u00df"],
        [53, "\u00a5"],
        [54, "\u00a4"],
        [55, "\u2502"],
        [56, "\u00c5"],
        [57, "\u00e5"],
        [58, "\u00d8"],
        [59, "\u00f8"],
        [60, "\u250c"],
        [61, "\u2510"],
        [62, "\u2514"],
        [63, "\u2518"],
      ]);
    function Le(a, b) {
      this.h = Me;
      this.o = new xe(a, b);
      this.i = new xe(a, b);
      this.l = new xe(a, b);
      this.g = this.i;
      this.j = 0;
      this.m = null;
    }
    function Ne(a, b, c) {
      a.g = a.i;
      var d = a.g,
        e = null;
      a.h !== Oe &&
        a.h !== Pe &&
        ((e = ze(d, a.j, c)),
        (c = a.i),
        (c.g = 0 < c.h ? c.h : 0),
        Ae(c, 0, 15),
        (c = a.l),
        (c.g = 0 < c.h ? c.h : 0),
        Ae(c, 0, 15),
        (d.g = 15));
      a.h = Oe;
      d.h = b;
      return e;
    }
    function Qe(a) {
      a.h = Re;
      a.g = a.l;
      a.g.h = 0;
    }
    function Se(a) {
      ab("Cea608DataChannel", "CEA-608 text mode entered, but is unsupported");
      a.g = a.o;
      a.h = Pe;
    }
    var Me = 0,
      Re = 1,
      Oe = 3,
      Pe = 4,
      Te = "black green blue cyan red yellow magenta black".split(" "),
      Ue = "white green blue cyan red yellow magenta white_italics".split(" ");
    function Ye() {
      this.l = !1;
      this.B = this.F = 0;
      this.C = Ze;
      this.i = [];
      this.g = this.h = this.j = 0;
      this.u = this.o = !1;
      this.s = "white";
      this.m = "black";
      $e(this);
    }
    function $e(a) {
      a.i = [];
      for (var b = 0; 15 > b; b++) a.i.push(af());
    }
    function af() {
      for (var a = [], b = 0; 42 > b; b++) a.push(null);
      return a;
    }
    function bf(a, b) {
      cf(a) && ((a.i[a.h][a.g] = new we(b, a.u, a.o, a.m, a.s)), a.g++);
    }
    function cf(a) {
      var b = a.g < a.B && 0 <= a.g;
      return a.h < a.F && 0 <= a.h && b;
    }
    Ye.prototype.isVisible = function () {
      return this.l;
    };
    function df(a, b, c) {
      var d = new nb(a.j, b, "");
      d.textAlign = a.C === ef ? "left" : a.C === ff ? "right" : rb;
      if ((c = te(d, "svc" + c, a.i, a.j, b))) a.j = b;
      return c;
    }
    var ef = 0,
      ff = 1,
      Ze = 2;
    function gf() {
      this.i = [];
      this.h = null;
      this.g = 0;
    }
    function hf(a, b) {
      3 === b.type
        ? ((a.g = 2 * (b.value & 63) - 1), (a.h = []))
        : a.h &&
          (0 < a.g && (a.h.push(b), a.g--),
          0 === a.g && (a.i.push(new jf(a.h)), (a.h = null), (a.g = 0)));
    }
    function jf(a) {
      this.g = 0;
      this.h = a;
    }
    jf.prototype.ka = function () {
      return this.g < this.h.length;
    };
    jf.prototype.fa = function () {
      return this.g;
    };
    function kf(a) {
      if (!a.ka()) throw new O(2, 2, 3e3);
      return a.h[a.g++];
    }
    jf.prototype.skip = function (a) {
      if (this.g + a > this.h.length) throw new O(2, 2, 3e3);
      this.g += a;
    };
    function lf(a) {
      this.i = a;
      this.h = [null, null, null, null, null, null, null, null];
      this.g = null;
    }
    function mf(a, b, c, d) {
      if (128 <= c && 135 >= c) (d = c & 7), a.h[d] && (a.g = a.h[d]);
      else {
        if (136 === c) {
          c = kf(b).value;
          b = null;
          c = v(nf(a, c));
          for (var e = c.next(); !e.done; e = c.next())
            (e = a.h[e.value]), e.isVisible() && (b = df(e, d, a.i)), $e(e);
          return b;
        }
        if (137 === c)
          for (
            b = kf(b).value, b = v(nf(a, b)), c = b.next();
            !c.done;
            c = b.next()
          )
            (c = a.h[c.value]), c.isVisible() || (c.j = d), (c.l = !0);
        else {
          if (138 === c) {
            c = kf(b).value;
            b = null;
            c = v(nf(a, c));
            for (e = c.next(); !e.done; e = c.next())
              (e = a.h[e.value]),
                e.isVisible() && (b = df(e, d, a.i)),
                (e.l = !1);
            return b;
          }
          if (139 === c) {
            c = kf(b).value;
            b = null;
            c = v(nf(a, c));
            for (e = c.next(); !e.done; e = c.next())
              (e = a.h[e.value]),
                e.isVisible() ? (b = df(e, d, a.i)) : (e.j = d),
                (e.l = !e.l);
            return b;
          }
          if (140 === c) return (b = kf(b).value), of(a, b, d);
          if (143 === c) return (d = of(a, 255, d)), pf(a), d;
          if (144 === c)
            b.skip(1),
              (d = kf(b).value),
              a.g && ((a.g.o = 0 < (d & 128)), (a.g.u = 0 < (d & 64)));
          else if (145 === c)
            (d = kf(b).value),
              (c = kf(b).value),
              b.skip(1),
              a.g &&
                ((b = qf((c & 48) >> 4, (c & 12) >> 2, c & 3)),
                (a.g.s = qf((d & 48) >> 4, (d & 12) >> 2, d & 3)),
                (a.g.m = b));
          else if (146 === c)
            (d = kf(b).value),
              (b = kf(b).value),
              a.g && ((a = a.g), (a.h = d & 15), (a.g = b & 63));
          else if (151 === c)
            b.skip(1),
              b.skip(1),
              (d = kf(b).value),
              b.skip(1),
              a.g && (a.g.C = d & 3);
          else if (152 <= c && 159 >= c) {
            c = (c & 15) - 8;
            e = null !== a.h[c];
            if (!e) {
              var f = new Ye();
              f.j = d;
              a.h[c] = f;
            }
            d = kf(b).value;
            kf(b);
            kf(b);
            f = kf(b).value;
            var g = kf(b).value;
            b = kf(b).value;
            (e && 0 === (b & 7)) ||
              ((b = a.h[c]),
              (b.h = 0),
              (b.g = 0),
              (b.u = !1),
              (b.o = !1),
              (b.s = "white"),
              (b.m = "black"));
            b = a.h[c];
            b.l = 0 < (d & 32);
            b.F = (f & 15) + 1;
            b.B = (g & 63) + 1;
            a.g = a.h[c];
          }
        }
      }
      return null;
    }
    function nf(a, b) {
      for (var c = [], d = 0; 8 > d; d++)
        1 === (b & 1) && a.h[d] && c.push(d), (b >>= 1);
      return c;
    }
    function of(a, b, c) {
      var d = null;
      b = v(nf(a, b));
      for (var e = b.next(); !e.done; e = b.next()) {
        e = e.value;
        var f = a.h[e];
        f.isVisible() && (d = df(f, c, a.i));
        a.h[e] = null;
      }
      return d;
    }
    function pf(a) {
      a.g = null;
      a.h = [null, null, null, null, null, null, null, null];
    }
    function qf(a, b, c) {
      var d = { 0: 0, 1: 0, 2: 1, 3: 1 };
      a = d[a];
      b = d[b];
      c = d[c];
      return rf[(a << 2) | (b << 1) | c];
    }
    var sf = new Map([
        [32, " "],
        [33, "\u00a0"],
        [37, "\u2026"],
        [42, "\u0160"],
        [44, "\u0152"],
        [48, "\u2588"],
        [49, "\u2018"],
        [50, "\u2019"],
        [51, "\u201c"],
        [52, "\u201d"],
        [53, "\u2022"],
        [57, "\u2122"],
        [58, "\u0161"],
        [60, "\u0153"],
        [61, "\u2120"],
        [63, "\u0178"],
        [118, "\u215b"],
        [119, "\u215c"],
        [120, "\u215d"],
        [121, "\u215e"],
        [122, "\u2502"],
        [123, "\u2510"],
        [124, "\u2514"],
        [125, "\u2500"],
        [126, "\u2518"],
        [127, "\u250c"],
      ]),
      rf = "black blue green cyan red magenta yellow white".split(" ");
    function S(a, b) {
      this.R = Mb(a);
      this.h = b == tf;
      this.g = 0;
    }
    q = S.prototype;
    q.ka = function () {
      return this.g < this.R.byteLength;
    };
    q.fa = function () {
      return this.g;
    };
    q.We = function () {
      return this.R.byteLength;
    };
    q.ga = function () {
      try {
        var a = this.R.getUint8(this.g);
        this.g += 1;
        return a;
      } catch (b) {
        throw uf();
      }
    };
    q.Qb = function () {
      try {
        var a = this.R.getUint16(this.g, this.h);
        this.g += 2;
        return a;
      } catch (b) {
        throw uf();
      }
    };
    q.K = function () {
      try {
        var a = this.R.getUint32(this.g, this.h);
        this.g += 4;
        return a;
      } catch (b) {
        throw uf();
      }
    };
    q.ee = function () {
      try {
        var a = this.R.getInt32(this.g, this.h);
        this.g += 4;
        return a;
      } catch (b) {
        throw uf();
      }
    };
    q.jb = function () {
      try {
        if (this.h) {
          var a = this.R.getUint32(this.g, !0);
          var b = this.R.getUint32(this.g + 4, !0);
        } else
          (b = this.R.getUint32(this.g, !1)),
            (a = this.R.getUint32(this.g + 4, !1));
      } catch (c) {
        throw uf();
      }
      if (2097151 < b) throw new O(2, 3, 3001);
      this.g += 8;
      return b * Math.pow(2, 32) + a;
    };
    q.ib = function (a) {
      if (this.g + a > this.R.byteLength) throw uf();
      var b = N(this.R, this.g, a);
      this.g += a;
      return b;
    };
    q.Re = function (a, b) {
      return N(this.R, a, b);
    };
    q.skip = function (a) {
      if (this.g + a > this.R.byteLength) throw uf();
      this.g += a;
    };
    q.fe = function (a) {
      if (this.g < a) throw uf();
      this.g -= a;
    };
    q.seek = function (a) {
      if (0 > a || a > this.R.byteLength) throw uf();
      this.g = a;
    };
    q.kc = function () {
      for (var a = this.g; this.ka() && 0 != this.R.getUint8(this.g); )
        this.g += 1;
      a = N(this.R, a, this.g - a);
      this.g += 1;
      return Nc(a);
    };
    function uf() {
      return new O(2, 3, 3e3);
    }
    M("shaka.util.DataViewReader", S);
    S.prototype.readTerminatedString = S.prototype.kc;
    S.prototype.seek = S.prototype.seek;
    S.prototype.rewind = S.prototype.fe;
    S.prototype.skip = S.prototype.skip;
    S.prototype.getBytesAt = S.prototype.Re;
    S.prototype.readBytes = S.prototype.ib;
    S.prototype.readUint64 = S.prototype.jb;
    S.prototype.readInt32 = S.prototype.ee;
    S.prototype.readUint32 = S.prototype.K;
    S.prototype.readUint16 = S.prototype.Qb;
    S.prototype.readUint8 = S.prototype.ga;
    S.prototype.getLength = S.prototype.We;
    S.prototype.getPosition = S.prototype.fa;
    S.prototype.hasMoreData = S.prototype.ka;
    var tf = 1;
    S.Endianness = { BIG_ENDIAN: 0, LITTLE_ENDIAN: tf };
    function vf() {
      this.h = [];
      this.g = [];
      this.i = new gf();
      this.l = 0;
      this.s = new Map([
        ["CC1", new Le(0, 0)],
        ["CC2", new Le(0, 1)],
        ["CC3", new Le(1, 0)],
        ["CC4", new Le(1, 1)],
      ]);
      this.o = this.m = 0;
      this.j = new Map();
      wf(this);
    }
    function wf(a) {
      a.m = 0;
      a.o = 0;
      a = v(a.s.values());
      for (var b = a.next(); !b.done; b = a.next())
        (b = b.value),
          (b.h = 2),
          (b.g = b.i),
          (b.m = null),
          ye(b.i),
          ye(b.l),
          ye(b.o);
    }
    function xf(a) {
      function b(f, g) {
        return f.pts - g.pts || f.order - g.order;
      }
      var c = [];
      a.h.sort(b);
      a.g.sort(b);
      for (var d = v(a.h), e = d.next(); !e.done; e = d.next())
        (e = yf(a, e.value)) && c.push(e);
      d = v(a.g);
      for (e = d.next(); !e.done; e = d.next()) hf(a.i, e.value);
      d = v(a.i.i);
      for (e = d.next(); !e.done; e = d.next())
        (e = zf(a, e.value)), c.push.apply(c, ka(e));
      a.i.i = [];
      a.h = [];
      a.g = [];
      return c;
    }
    function yf(a, b) {
      var c = b.type;
      if (16 === (b.Ca & 112)) {
        var d = (b.Ca >> 3) & 1;
        0 === c ? (a.m = d) : (a.o = d);
      }
      c = a.s.get("CC" + ((c << 1) | ((c ? a.o : a.m) + 1)));
      if (
        (255 === b.Ca && 255 === b.Ua) ||
        (!b.Ca && !b.Ua) ||
        !Af(b.Ca) ||
        !Af(b.Ua)
      )
        return 45 <= ++a.l && wf(a), null;
      a.l = 0;
      b.Ca &= 127;
      b.Ua &= 127;
      if (!b.Ca && !b.Ua) return null;
      a = null;
      if (16 === (b.Ca & 112))
        a: {
          d = b.Ca;
          a = b.Ua;
          if (c.m === ((d << 8) | a)) c.m = null;
          else if (
            ((c.m = (d << 8) | a), 16 === (d & 240) && 64 === (a & 192))
          ) {
            b = [11, 11, 1, 2, 3, 4, 12, 13, 14, 15, 5, 6, 7, 8, 9, 10][
              ((d & 7) << 1) | ((a >> 5) & 1)
            ];
            var e = (a & 30) >> 1;
            d = "white";
            var f = !1;
            7 > e ? (d = Ue[e]) : 7 === e && (f = !0);
            a = 1 === (a & 1);
            if (c.h !== Pe) {
              e = c.g;
              if (c.h === Oe && b !== e.g) {
                var g = 1 + b - e.h;
                Ke(e, g, 1 + e.g - e.h, e.h);
                Ae(e, 0, g - 1);
                Ae(e, b + 1, 15 - b);
              }
              e.g = b;
              c.g.m = a;
              c.g.j = f;
              c.g.l = d;
              c.g.o = "black";
            }
          } else if (17 === (d & 247) && 32 === (a & 240))
            (c.g.m = !1),
              (c.g.j = !1),
              (c.g.l = "white"),
              Be(c.g, Ce, 32),
              (d = !1),
              (b = Ue[(a & 14) >> 1]),
              "white_italics" === b && ((b = "white"), (d = !0)),
              (c.g.m = 1 === (a & 1)),
              (c.g.j = d),
              (c.g.l = b);
          else if (
            (16 === (d & 247) && 32 === (a & 240)) ||
            (23 === (d & 247) && 45 === (a & 255))
          )
            (b = "black"),
              0 === (d & 7) && (b = Te[(a & 14) >> 1]),
              (c.g.o = b);
          else if (17 === (d & 247) && 48 === (a & 240)) Be(c.g, Ee, a);
          else if (18 === (d & 246) && 32 === (a & 224))
            Be(c.g, d & 1 ? Ie : Ge, a);
          else if (20 === (d & 246) && 32 === (a & 240)) {
            a = b.pts;
            d = null;
            switch (b.Ua) {
              case 32:
                Qe(c);
                break;
              case 33:
                c = c.g;
                c.i[c.g].pop();
                break;
              case 37:
                d = Ne(c, 2, a);
                break;
              case 38:
                d = Ne(c, 3, a);
                break;
              case 39:
                d = Ne(c, 4, a);
                break;
              case 40:
                Be(c.g, Ce, 32);
                break;
              case 41:
                c.h = 2;
                c.g = c.i;
                c.g.h = 0;
                c.j = a;
                break;
              case 42:
                ye(c.o);
                Se(c);
                break;
              case 43:
                Se(c);
                break;
              case 44:
                b = c.i;
                d = null;
                c.h !== Pe && (d = ze(b, c.j, a));
                Ae(b, 0, 15);
                break;
              case 45:
                b = c.g;
                c.h !== Oe
                  ? (d = null)
                  : ((d = ze(b, c.j, a)),
                    (f = b.g - b.h + 1),
                    Ke(b, f - 1, f, b.h),
                    Ae(b, 0, f - 1),
                    Ae(b, b.g, 15 - b.g),
                    (c.j = a));
                break;
              case 46:
                Ae(c.l, 0, 15);
                break;
              case 47:
                (b = null),
                  c.h !== Pe && (b = ze(c.i, c.j, a)),
                  (d = c.l),
                  (c.l = c.i),
                  (c.i = d),
                  Qe(c),
                  (c.j = a),
                  (d = b);
            }
            a = d;
            break a;
          }
          a = null;
        }
      else (d = b.Ua), Be(c.g, Ce, b.Ca), Be(c.g, Ce, d);
      return a;
    }
    function zf(a, b) {
      var c = [];
      try {
        for (; b.ka(); ) {
          var d = kf(b).value,
            e = (d & 224) >> 5,
            f = d & 31;
          7 === e && 0 != f && (e = kf(b).value & 63);
          if (0 != e) {
            a.j.has(e) || a.j.set(e, new lf(e));
            for (var g = a.j.get(e), h = b.fa(); b.fa() - h < f; ) {
              e = b;
              var k = kf(e),
                l = k.value,
                m = k.pts;
              if (16 === l) {
                var p = kf(e);
                l = (l << 16) | p.value;
              }
              if (0 <= l && 31 >= l) {
                var n = m;
                if (g.g) {
                  var r = g.g;
                  e = null;
                  switch (l) {
                    case 8:
                      !cf(r) ||
                        (0 >= r.g && 0 >= r.h) ||
                        (0 >= r.g ? ((r.g = r.B - 1), r.h--) : r.g--,
                        (r.i[r.h][r.g] = null));
                      break;
                    case 13:
                      r.isVisible() && (e = df(r, n, g.i));
                      if (r.h + 1 >= r.F) {
                        n = r;
                        for (var u = 0, t = 1; 15 > t; t++, u++)
                          n.i[u] = n.i[t];
                        for (t = 0; 1 > t; t++, u++) n.i[u] = af();
                      } else r.h++;
                      r.g = 0;
                      break;
                    case 14:
                      r.isVisible() && (e = df(r, n, g.i));
                      r.i[r.h] = af();
                      r.g = 0;
                      break;
                    case 12:
                      r.isVisible() && (e = df(r, n, g.i)),
                        $e(r),
                        (n = r),
                        (n.h = 0),
                        (n.g = 0);
                  }
                  var w = e;
                } else w = null;
              } else if (128 <= l && 159 >= l) w = mf(g, e, l, m);
              else {
                if (4096 <= l && 4127 >= l)
                  (n = l & 255),
                    8 <= n && 15 >= n
                      ? e.skip(1)
                      : 16 <= n && 23 >= n
                      ? e.skip(2)
                      : 24 <= n && 31 >= n && e.skip(3);
                else if (4224 <= l && 4255 >= l)
                  (n = l & 255),
                    128 <= n && 135 >= n
                      ? e.skip(4)
                      : 136 <= n && 143 >= n && e.skip(5);
                else if (32 <= l && 127 >= l)
                  (e = l),
                    g.g &&
                      (127 === e
                        ? bf(g.g, "\u266a")
                        : bf(g.g, String.fromCharCode(e)));
                else if (160 <= l && 255 >= l)
                  g.g && bf(g.g, String.fromCharCode(l));
                else if (4128 <= l && 4223 >= l) {
                  if (((e = l & 255), g.g))
                    if (sf.has(e)) {
                      var x = sf.get(e);
                      bf(g.g, x);
                    } else bf(g.g, "_");
                } else
                  4256 <= l &&
                    4351 >= l &&
                    g.g &&
                    (160 != (l & 255) ? bf(g.g, "_") : bf(g.g, "[CC]"));
                w = null;
              }
              (e = w) && c.push(e);
            }
          }
        }
      } catch (C) {
        if (C instanceof O && 3e3 === C.code)
          ab(
            "CEA708_INVALID_DATA",
            "Buffer read out of bounds / invalid CEA-708 Data."
          );
        else throw C;
      }
      return c;
    }
    function Af(a) {
      for (var b = 0; a; ) (b ^= a & 1), (a >>= 1);
      return 1 === b;
    }
    function Bf() {}
    Bf.prototype.init = function () {};
    Bf.prototype.parse = function () {
      return [];
    };
    function T() {
      this.i = [];
      this.h = [];
      this.g = !1;
    }
    q = T.prototype;
    q.box = function (a, b) {
      a = Cf(a);
      this.i[a] = Df;
      this.h[a] = b;
      return this;
    };
    q.P = function (a, b) {
      a = Cf(a);
      this.i[a] = Ef;
      this.h[a] = b;
      return this;
    };
    q.stop = function () {
      this.g = !0;
    };
    q.parse = function (a, b, c) {
      a = new S(a, 0);
      for (this.g = !1; a.ka() && !this.g; ) this.ic(0, a, b, c);
    };
    q.ic = function (a, b, c, d) {
      var e = b.fa();
      if (d && e + 8 > b.R.byteLength) this.g = !0;
      else {
        var f = b.K(),
          g = b.K(),
          h = Ff(g),
          k = !1;
        switch (f) {
          case 0:
            f = b.R.byteLength - e;
            break;
          case 1:
            if (d && b.fa() + 8 > b.R.byteLength) {
              this.g = !0;
              return;
            }
            f = b.jb();
            k = !0;
        }
        var l = this.h[g];
        if (l) {
          var m = null,
            p = null;
          if (this.i[g] == Ef) {
            if (d && b.fa() + 4 > b.R.byteLength) {
              this.g = !0;
              return;
            }
            p = b.K();
            m = p >>> 24;
            p &= 16777215;
          }
          g = e + f;
          c && g > b.R.byteLength && (g = b.R.byteLength);
          d && g > b.R.byteLength
            ? (this.g = !0)
            : ((d = g - b.fa()),
              (b = 0 < d ? b.ib(d) : new Uint8Array(0)),
              (b = new S(b, 0)),
              l({
                name: h,
                parser: this,
                partialOkay: c || !1,
                version: m,
                flags: p,
                reader: b,
                size: f,
                start: e + a,
                has64BitSize: k,
              }));
        } else b.skip(Math.min(e + f - b.fa(), b.R.byteLength - b.fa()));
      }
    };
    function Gf(a) {
      for (var b = Hf(a); a.reader.ka() && !a.parser.g; )
        a.parser.ic(a.start + b, a.reader, a.partialOkay);
    }
    function If(a) {
      for (
        var b = Hf(a), c = a.reader.K(), d = 0;
        d < c &&
        (a.parser.ic(a.start + b, a.reader, a.partialOkay), !a.parser.g);
        d++
      );
    }
    function Jf(a) {
      var b = Hf(a);
      for (a.reader.skip(78); a.reader.ka() && !a.parser.g; )
        a.parser.ic(a.start + b, a.reader, a.partialOkay);
    }
    function Kf(a) {
      return function (b) {
        a(b.reader.ib(b.reader.R.byteLength - b.reader.fa()));
      };
    }
    function Cf(a) {
      var b = 0;
      a = v(a);
      for (var c = a.next(); !c.done; c = a.next())
        b = (b << 8) | c.value.charCodeAt(0);
      return b;
    }
    function Ff(a) {
      return String.fromCharCode(
        (a >> 24) & 255,
        (a >> 16) & 255,
        (a >> 8) & 255,
        a & 255
      );
    }
    function Hf(a) {
      return 8 + (a.has64BitSize ? 8 : 0) + (null != a.flags ? 4 : 0);
    }
    M("shaka.util.Mp4Parser", T);
    T.headerSize = Hf;
    T.typeToString = Ff;
    T.allData = Kf;
    T.visualSampleEntry = Jf;
    T.sampleDescription = If;
    T.children = Gf;
    T.prototype.parseNext = T.prototype.ic;
    T.prototype.parse = T.prototype.parse;
    T.prototype.stop = T.prototype.stop;
    T.prototype.fullBox = T.prototype.P;
    T.prototype.box = T.prototype.box;
    var Df = 0,
      Ef = 1;
    function Lf(a, b) {
      var c = null,
        d = null,
        e = null,
        f = a.K();
      b & 1 && (e = a.jb());
      b & 2 && a.skip(4);
      b & 8 && (c = a.K());
      b & 16 && (d = a.K());
      return { trackId: f, Td: c, Je: d, fg: e };
    }
    function Mf(a, b) {
      return { ed: 1 == b ? a.jb() : a.K() };
    }
    function Nf(a, b) {
      1 == b ? (a.skip(8), a.skip(8)) : (a.skip(4), a.skip(4));
      return { timescale: a.K() };
    }
    function Of(a, b, c) {
      var d = a.K(),
        e = [],
        f = null;
      c & 1 && (f = a.K());
      c & 4 && a.skip(4);
      for (var g = 0; g < d; g++) {
        var h = { Gd: null, sampleSize: null, Oc: null };
        c & 256 && (h.Gd = a.K());
        c & 512 && (h.sampleSize = a.K());
        c & 1024 && a.skip(4);
        c & 2048 && (h.Oc = 0 == b ? a.K() : a.ee());
        e.push(h);
      }
      return { kg: d, ge: e, Ie: f };
    }
    function Pf() {
      this.j = new Map();
      this.i = this.h = 0;
      this.g = Qf;
    }
    Pf.prototype.init = function (a) {
      function b(f) {
        f = f.name;
        f in Rf && (c.g = Rf[f]);
      }
      var c = this,
        d = [],
        e = [];
      new T()
        .box("moov", Gf)
        .box("mvex", Gf)
        .P("trex", function (f) {
          var g = f.reader;
          g.skip(4);
          g.skip(4);
          f = g.K();
          g = g.K();
          c.h = f;
          c.i = g;
        })
        .box("trak", Gf)
        .P("tkhd", function (f) {
          var g = f.reader;
          1 == f.version ? (g.skip(8), g.skip(8)) : (g.skip(4), g.skip(4));
          f = g.K();
          d.push(f);
        })
        .box("mdia", Gf)
        .P("mdhd", function (f) {
          f = Nf(f.reader, f.version);
          e.push(f.timescale);
        })
        .box("minf", Gf)
        .box("stbl", Gf)
        .P("stsd", If)
        .box("avc1", b)
        .box("avc3", b)
        .box("hev1", b)
        .box("hvc1", b)
        .box("dvh1", b)
        .box("dvhe", b)
        .box("encv", Jf)
        .box("sinf", Gf)
        .box("frma", function (f) {
          f = f.reader.K();
          f = Ff(f);
          f in Rf && (c.g = Rf[f]);
        })
        .parse(a, !0);
      if (!d.length || !e.length || d.length != e.length)
        throw new O(2, 2, 2010);
      this.g == Qf &&
        $a("Unable to determine bitstream format for CEA parsing!");
      d.forEach(function (f, g) {
        c.j.set(f, e[g]);
      });
    };
    Pf.prototype.parse = function (a) {
      var b = this;
      if (this.g == Qf) return [];
      var c = [],
        d = this.h,
        e = this.i,
        f = [],
        g = null,
        h = null,
        k = null,
        l = 9e4;
      new T()
        .box("moof", function (m) {
          g = m.start;
          Gf(m);
        })
        .box("traf", Gf)
        .P("trun", function (m) {
          m = Of(m.reader, m.version, m.flags);
          f = m.ge;
          h = m.Ie;
        })
        .P("tfhd", function (m) {
          m = Lf(m.reader, m.flags);
          d = m.Td || b.h;
          e = m.Je || b.i;
          m = m.trackId;
          b.j.has(m) && (l = b.j.get(m));
        })
        .P("tfdt", function (m) {
          k = Mf(m.reader, m.version).ed;
        })
        .box("mdat", function (m) {
          if (null === k) throw new O(2, 2, 2010);
          a: {
            var p = m.reader,
              n = k,
              r = l,
              u = d,
              t = e,
              w = f,
              x = 0,
              C = t;
            w.length && (C = w[0].sampleSize || t);
            for (p.skip((g || 0) + (h || 0) - m.start - 8); p.ka(); ) {
              m = p.K();
              var z = p.ga(),
                A = 1;
              switch (b.g) {
                case Sf:
                  z &= 31;
                  z = 6 == z;
                  break;
                case Tf:
                  A = 2;
                  p.skip(1);
                  z = (z >> 1) & 63;
                  z = 39 == z || 40 == z;
                  break;
                default:
                  break a;
              }
              if (z) {
                z = 0;
                w.length > x && (z = w[x].Oc || 0);
                z = (n + z) / r;
                for (var H = [], G = p.ib(m - A), D = (A = 0); D < G.length; )
                  2 == A && 3 == G[D]
                    ? ((A = 0),
                      (G = [].concat(ka(G))),
                      G.splice(D, 1),
                      (G = new Uint8Array(G)))
                    : 0 == G[D]
                    ? A++
                    : (A = 0),
                    D++;
                A = G;
                for (D = 0; D < A.length; ) {
                  for (G = 0; 255 == A[D]; ) (G += 255), D++;
                  G += A[D++];
                  for (var I = 0; 255 == A[D]; ) (I += 255), D++;
                  I += A[D++];
                  4 == G && H.push(A.subarray(D, D + I));
                  D += I;
                }
                H = v(H);
                for (A = H.next(); !A.done; A = H.next())
                  c.push({ Ef: A.value, pts: z });
              } else
                try {
                  p.skip(m - A);
                } catch (J) {
                  break;
                }
              C -= m + 4;
              0 == C &&
                ((n = w.length > x ? n + (w[x].Gd || u) : n + u),
                x++,
                (C = w.length > x ? w[x].sampleSize || t : t));
            }
          }
        })
        .parse(a, !1);
      return c;
    };
    var Qf = 0,
      Sf = 1,
      Tf = 2,
      Rf = { avc1: Sf, avc3: Sf, hev1: Tf, hvc1: Tf, dvh1: Tf, dvhe: Tf };
    function Uf(a) {
      var b = this;
      this.h = [];
      this.g = [];
      this.data = [];
      new T()
        .box("moov", Gf)
        .P("pssh", function (c) {
          if (!(1 < c.version)) {
            var d = N(c.reader.R, -12, c.size);
            b.data.push(d);
            b.h.push(Zc(c.reader.ib(16)));
            if (0 < c.version) {
              d = c.reader.K();
              for (var e = 0; e < d; e++) {
                var f = Zc(c.reader.ib(16));
                b.g.push(f);
              }
            }
          }
        })
        .parse(a);
    }
    function Vf(a, b) {
      var c = a.length,
        d = b.length + 16 + c,
        e = new Uint8Array(d),
        f = Mb(e),
        g = 0;
      f.setUint32(g, d);
      g += 4;
      f.setUint32(g, 1886614376);
      g += 4;
      f.setUint32(g, 0);
      g += 4;
      e.set(b, g);
      g += b.length;
      f.setUint32(g, c);
      e.set(a, g + 4);
      return e;
    }
    function Wf(a) {
      if (!a) return a;
      var b = new Uf(a);
      if (1 >= b.data.length) return a;
      a = [];
      var c = {};
      b = v(b.data);
      for (var d = b.next(); !d.done; c = { oc: c.oc }, d = b.next())
        (c.oc = d.value),
          a.some(
            (function (e) {
              return function (f) {
                return Ib(f, e.oc);
              };
            })(c)
          ) || a.push(c.oc);
      return $c.apply(Uc, ka(a));
    }
    function Xf(a, b) {
      a = U(a, b);
      return 1 != a.length ? null : a[0];
    }
    function Yf(a, b, c) {
      a = Zf(a, b, c);
      return 1 != a.length ? null : a[0];
    }
    function U(a, b) {
      var c = [];
      a = v(a.childNodes);
      for (var d = a.next(); !d.done; d = a.next())
        (d = d.value), d instanceof Element && d.tagName == b && c.push(d);
      return c;
    }
    function $f(a) {
      return Array.from(a.childNodes).filter(function (b) {
        return b instanceof Element;
      });
    }
    function Zf(a, b, c) {
      var d = [];
      a = v(a.childNodes);
      for (var e = a.next(); !e.done; e = a.next())
        (e = e.value),
          e instanceof Element &&
            e.localName == c &&
            e.namespaceURI == b &&
            d.push(e);
      return d;
    }
    function ag(a, b, c) {
      return a.hasAttributeNS(b, c) ? a.getAttributeNS(b, c) : null;
    }
    function bg(a, b, c) {
      b = v(b);
      for (var d = b.next(); !d.done; d = b.next())
        if (((d = d.value), a.hasAttributeNS(d, c)))
          return a.getAttributeNS(d, c);
      return null;
    }
    function cg(a) {
      return Array.from(a.childNodes).every(dg) ? a.textContent.trim() : null;
    }
    function dg(a) {
      return (
        a.nodeType == Node.TEXT_NODE || a.nodeType == Node.CDATA_SECTION_NODE
      );
    }
    function V(a, b, c, d) {
      d = void 0 === d ? null : d;
      var e = null;
      a = a.getAttribute(b);
      null != a && (e = c(a));
      return null == e ? d : e;
    }
    function eg(a) {
      if (!a) return null;
      /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(a) && (a += "Z");
      a = Date.parse(a);
      return isNaN(a) ? null : Math.floor(a / 1e3);
    }
    function fg(a) {
      if (!a) return null;
      a = RegExp(
        "^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$"
      ).exec(a);
      if (!a) return null;
      a =
        31536e3 * Number(a[1] || null) +
        2592e3 * Number(a[2] || null) +
        86400 * Number(a[3] || null) +
        3600 * Number(a[4] || null) +
        60 * Number(a[5] || null) +
        Number(a[6] || null);
      return isFinite(a) ? a : null;
    }
    function gg(a) {
      var b = /([0-9]+)-([0-9]+)/.exec(a);
      if (!b) return null;
      a = Number(b[1]);
      if (!isFinite(a)) return null;
      b = Number(b[2]);
      return isFinite(b) ? { start: a, end: b } : null;
    }
    function hg(a) {
      a = Number(a);
      return 0 === a % 1 ? a : null;
    }
    function ig(a) {
      a = Number(a);
      return 0 === a % 1 && 0 < a ? a : null;
    }
    function jg(a) {
      a = Number(a);
      return 0 === a % 1 && 0 <= a ? a : null;
    }
    function kg(a) {
      a = Number(a);
      return isNaN(a) ? null : a;
    }
    function lg(a) {
      var b;
      var c = (b = a.match(/^(\d+)\/(\d+)$/))
        ? Number(b[1]) / Number(b[2])
        : Number(a);
      return isNaN(c) ? null : c;
    }
    function mg(a, b) {
      var c = new DOMParser(),
        d = null;
      try {
        d = c.parseFromString(a, "text/xml");
      } catch (e) {
        return null;
      }
      a = d.documentElement;
      return !a ||
        a.getElementsByTagName("parsererror").length ||
        d.documentElement.tagName != b
        ? null
        : a;
    }
    function ng(a, b) {
      try {
        var c = Nc(a);
        return mg(c, b);
      } catch (d) {
        return null;
      }
    }
    function og(a, b, c) {
      var d = pg(a),
        e = null;
      a = [];
      var f = [],
        g = new Set(
          d.map(function (h) {
            return h.keyId;
          })
        );
      g.delete(null);
      if (1 < g.size) throw new O(2, 4, 4010);
      b ||
        ((f = d.filter(function (h) {
          return "urn:mpeg:dash:mp4protection:2011" == h.he
            ? ((e = h.init || e), !1)
            : !0;
        })),
        f.length && ((a = qg(e, f, c)), 0 == a.length && (a = [oc("", e)])));
      if (d.length && (b || !f.length))
        for (
          a = [], b = v(Object.values(c)), c = b.next();
          !c.done;
          c = b.next()
        )
          (c = c.value), "org.w3.clearkey" != c && a.push(oc(c, e));
      if ((g = Array.from(g)[0] || null))
        for (b = v(a), c = b.next(); !c.done; c = b.next())
          for (c = v(c.value.initData), d = c.next(); !d.done; d = c.next())
            d.value.keyId = g;
      return { Sd: g, gg: e, drmInfos: a, Wd: !0 };
    }
    function rg(a, b, c, d) {
      var e = og(a, c, d);
      if (b.Wd) {
        a = 1 == b.drmInfos.length && !b.drmInfos[0].keySystem;
        c = 0 == e.drmInfos.length;
        if (0 == b.drmInfos.length || (a && !c)) b.drmInfos = e.drmInfos;
        b.Wd = !1;
      } else if (
        0 < e.drmInfos.length &&
        ((b.drmInfos = b.drmInfos.filter(function (f) {
          return e.drmInfos.some(function (g) {
            return g.keySystem == f.keySystem;
          });
        })),
        0 == b.drmInfos.length)
      )
        throw new O(2, 4, 4008);
      return e.Sd || b.Sd;
    }
    function sg(a) {
      var b = 0,
        c = Mb(a),
        d = c.getUint32(b, !0);
      if (d != a.byteLength) return [];
      a: {
        a = b + 6;
        for (b = []; a < c.byteLength - 1; ) {
          d = c.getUint16(a, !0);
          a += 2;
          var e = c.getUint16(a, !0);
          a += 2;
          if (0 != (e & 1) || e + a > c.byteLength) {
            c = [];
            break a;
          }
          var f = N(c, a, e);
          b.push({ type: d, value: f });
          a += e;
        }
        c = b;
      }
      return c;
    }
    function tg(a) {
      a = v(a.getElementsByTagName("DATA"));
      for (var b = a.next(); !b.done; b = a.next()) {
        b = v(b.value.childNodes);
        for (var c = b.next(); !c.done; c = b.next())
          if (((c = c.value), c instanceof Element && "LA_URL" == c.tagName))
            return c.textContent;
      }
      return "";
    }
    function ug(a) {
      a = Yf(a.node, "urn:microsoft:playready", "pro");
      if (!a) return "";
      a = Xc(a.textContent);
      a = sg(a).filter(function (b) {
        return b.type === vg;
      })[0];
      if (!a) return "";
      a = Oc(a.value, !0);
      return (a = mg(a, "WRMHEADER")) ? tg(a) : "";
    }
    function qg(a, b, c) {
      var d = [];
      b = v(b);
      for (var e = b.next(); !e.done; e = b.next()) {
        e = e.value;
        var f = c[e.he];
        if (f) {
          var g;
          if ((g = Yf(e.node, "urn:microsoft:playready", "pro"))) {
            g = Xc(g.textContent);
            var h = new Uint8Array([
              154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136,
              95, 149,
            ]);
            g = [{ initData: Vf(g, h), initDataType: "cenc", keyId: e.keyId }];
          } else g = null;
          g = oc(f, e.init || a || g);
          if ((f = wg.get(f))) g.licenseServerUri = f(e);
          d.push(g);
        }
      }
      return d;
    }
    function pg(a) {
      var b = [];
      a = v(a);
      for (var c = a.next(); !c.done; c = a.next())
        (c = xg(c.value)) && b.push(c);
      return b;
    }
    function xg(a) {
      var b = a.getAttribute("schemeIdUri"),
        c = ag(a, "urn:mpeg:cenc:2013", "default_KID"),
        d = Zf(a, "urn:mpeg:cenc:2013", "pssh").map(cg);
      if (!b) return null;
      b = b.toLowerCase();
      if (c && ((c = c.replace(/-/g, "").toLowerCase()), c.includes(" ")))
        throw new O(2, 4, 4009);
      var e = [];
      try {
        e = d.map(function (f) {
          return { initDataType: "cenc", initData: Xc(f), keyId: null };
        });
      } catch (f) {
        throw new O(2, 4, 4007);
      }
      return { node: a, he: b, keyId: c, init: 0 < e.length ? e : null };
    }
    var vg = 1,
      wg = new Map()
        .set("com.widevine.alpha", function (a) {
          return (a = Yf(a.node, "urn:microsoft", "laurl"))
            ? a.getAttribute("licenseUrl") || ""
            : "";
        })
        .set("com.microsoft.playready", ug)
        .set("com.microsoft.playready.recommendation", ug)
        .set("com.microsoft.playready.software", ug)
        .set("com.microsoft.playready.hardware", ug);
    function yg(a, b) {
      var c = zg();
      this.l = null == a.maxAttempts ? c.maxAttempts : a.maxAttempts;
      this.j = null == a.baseDelay ? c.baseDelay : a.baseDelay;
      this.o = null == a.fuzzFactor ? c.fuzzFactor : a.fuzzFactor;
      this.m = null == a.backoffFactor ? c.backoffFactor : a.backoffFactor;
      this.g = 0;
      this.h = this.j;
      if ((this.i = void 0 === b ? !1 : b)) this.g = 1;
    }
    function Ag(a) {
      var b, c;
      return L(function (d) {
        if (1 == d.g) {
          if (a.g >= a.l)
            if (a.i) (a.g = 1), (a.h = a.j);
            else throw new O(2, 7, 1010);
          b = a.g;
          a.g++;
          if (0 == b) return d.return();
          c = a.h * (1 + (2 * Math.random() - 1) * a.o);
          return y(
            d,
            new Promise(function (e) {
              new Q(e).X(c / 1e3);
            }),
            2
          );
        }
        a.h *= a.m;
        B(d);
      });
    }
    function zg() {
      return {
        maxAttempts: 2,
        baseDelay: 1e3,
        backoffFactor: 2,
        fuzzFactor: 0.5,
        timeout: 3e4,
        stallTimeout: 5e3,
        connectionTimeout: 1e4,
        suppressNetworkTimeoutWarnings: !1,
      };
    }
    function Bg(a, b) {
      this.promise = a;
      this.l = b;
      this.h = !1;
    }
    function Cg(a) {
      return new Bg(Promise.reject(a), function () {
        return Promise.resolve();
      });
    }
    function Dg() {
      var a = Promise.reject(new O(2, 7, 7001));
      a.catch(function () {});
      return new Bg(a, function () {
        return Promise.resolve();
      });
    }
    function Eg(a) {
      return new Bg(Promise.resolve(a), function () {
        return Promise.resolve();
      });
    }
    function Fg(a) {
      return new Bg(a, function () {
        return a.catch(function () {});
      });
    }
    Bg.prototype.abort = function () {
      this.h = !0;
      return this.l();
    };
    function Gg(a) {
      return new Bg(
        Promise.all(
          a.map(function (b) {
            return b.promise;
          })
        ),
        function () {
          return Promise.all(
            a.map(function (b) {
              return b.abort();
            })
          );
        }
      );
    }
    Bg.prototype.finally = function (a) {
      this.promise.then(
        function () {
          return a(!0);
        },
        function () {
          return a(!1);
        }
      );
      return this;
    };
    Bg.prototype.ta = function (a, b) {
      function c(h) {
        return function (k) {
          if (e.h && h) f.reject(g);
          else {
            var l = h ? a : b;
            l ? (d = Hg(l, k, f)) : (h ? f.resolve : f.reject)(k);
          }
        };
      }
      function d() {
        f.reject(g);
        return e.abort();
      }
      var e = this,
        f = new vc(),
        g = new O(2, 7, 7001);
      this.promise.then(c(!0), c(!1));
      return new Bg(f, function () {
        return d();
      });
    };
    function Hg(a, b, c) {
      try {
        var d = a(b);
        if (d && d.promise && d.abort)
          return (
            c.resolve(d.promise),
            function () {
              return d.abort();
            }
          );
        c.resolve(d);
        return function () {
          return Promise.resolve(d).then(
            function () {},
            function () {}
          );
        };
      } catch (e) {
        return (
          c.reject(e),
          function () {
            return Promise.resolve();
          }
        );
      }
    }
    M("shaka.util.AbortableOperation", Bg);
    Bg.prototype.chain = Bg.prototype.ta;
    Bg.prototype["finally"] = Bg.prototype.finally;
    Bg.all = Gg;
    Bg.prototype.abort = Bg.prototype.abort;
    Bg.notAbortable = Fg;
    Bg.completed = Eg;
    Bg.aborted = Dg;
    Bg.failed = Cg;
    function Ig(a, b) {
      if (b)
        if (b instanceof Map)
          for (var c = v(b.keys()), d = c.next(); !d.done; d = c.next())
            (d = d.value),
              Object.defineProperty(this, d, {
                value: b.get(d),
                writable: !0,
                enumerable: !0,
              });
        else
          for (c in b)
            Object.defineProperty(this, c, {
              value: b[c],
              writable: !0,
              enumerable: !0,
            });
      this.defaultPrevented = this.cancelable = this.bubbles = !1;
      this.timeStamp =
        window.performance && window.performance.now
          ? window.performance.now()
          : Date.now();
      this.type = a;
      this.isTrusted = !1;
      this.target = this.currentTarget = null;
      this.g = !1;
    }
    Ig.prototype.preventDefault = function () {
      this.cancelable && (this.defaultPrevented = !0);
    };
    Ig.prototype.stopImmediatePropagation = function () {
      this.g = !0;
    };
    Ig.prototype.stopPropagation = function () {};
    M("shaka.util.FakeEvent", Ig);
    function Jg() {
      this.da = new Gd();
      this.ue = this;
    }
    Jg.prototype.addEventListener = function (a, b) {
      this.da && this.da.push(a, b);
    };
    Jg.prototype.removeEventListener = function (a, b) {
      this.da && this.da.remove(a, b);
    };
    Jg.prototype.dispatchEvent = function (a) {
      if (!this.da) return !0;
      var b = this.da.get(a.type) || [],
        c = this.da.get("All");
      c && (b = b.concat(c));
      b = v(b);
      for (c = b.next(); !c.done; c = b.next()) {
        c = c.value;
        a.target = this.ue;
        a.currentTarget = this.ue;
        try {
          c.handleEvent ? c.handleEvent(a) : c.call(this, a);
        } catch (d) {}
        if (a.g) break;
      }
      return a.defaultPrevented;
    };
    Jg.prototype.release = function () {
      this.da = null;
    };
    function Kg(a) {
      function b(d) {
        switch (typeof d) {
          case "undefined":
          case "boolean":
          case "number":
          case "string":
          case "symbol":
          case "function":
            return d;
          default:
            if (!d || (d.buffer && d.buffer.constructor == ArrayBuffer))
              return d;
            if (c.has(d)) return null;
            var e = d.constructor == Array;
            if (d.constructor != Object && !e) return null;
            c.add(d);
            var f = e ? [] : {},
              g;
            for (g in d) f[g] = b(d[g]);
            e && (f.length = d.length);
            return f;
        }
      }
      var c = new Set();
      return b(a);
    }
    function Lg(a) {
      var b = {},
        c;
      for (c in a) b[c] = a[c];
      return b;
    }
    function Mg() {
      this.g = [];
    }
    function Ng(a, b) {
      a.g.push(
        b.finally(function () {
          kb(a.g, b);
        })
      );
    }
    Mg.prototype.destroy = function () {
      for (var a = [], b = v(this.g), c = b.next(); !c.done; c = b.next())
        (c = c.value), c.promise.catch(function () {}), a.push(c.abort());
      this.g = [];
      return Promise.all(a);
    };
    function Og(a, b, c, d, e) {
      Jg.call(this);
      this.j = !1;
      this.m = new Mg();
      this.h = new Set();
      this.i = new Set();
      this.g = a || null;
      this.l = b || null;
      this.s = c || null;
      this.B = e || null;
      this.u = d || null;
      this.o = !1;
    }
    ra(Og, Jg);
    q = Og.prototype;
    q.Hd = function (a) {
      this.o = a;
    };
    function Pg(a, b, c, d) {
      c = c || Qg;
      var e = Rg[a];
      if (!e || c >= e.priority)
        Rg[a] = { priority: c, Ff: b, Gf: void 0 === d ? !1 : d };
    }
    q.If = function (a) {
      this.h.add(a);
    };
    q.Wf = function (a) {
      this.h.delete(a);
    };
    q.Ge = function () {
      this.h.clear();
    };
    q.Jf = function (a) {
      this.i.add(a);
    };
    q.Xf = function (a) {
      this.i.delete(a);
    };
    q.He = function () {
      this.i.clear();
    };
    function Sg(a, b, c) {
      return {
        uris: a,
        method: "GET",
        body: null,
        headers: {},
        allowCrossSiteCredentials: !1,
        retryParameters: b,
        licenseRequestType: null,
        sessionId: null,
        streamDataCallback: void 0 === c ? null : c,
      };
    }
    q.destroy = function () {
      this.j = !0;
      this.h.clear();
      this.i.clear();
      Jg.prototype.release.call(this);
      return this.m.destroy();
    };
    q.request = function (a, b) {
      var c = this,
        d = (b.retryParameters = b.retryParameters
          ? Kg(b.retryParameters)
          : zg()),
        e = new Tg();
      if (this.j)
        return (
          (d = Promise.reject(new O(2, 7, 7001))),
          d.catch(function () {}),
          new Ug(
            d,
            function () {
              return Promise.resolve();
            },
            e,
            0
          )
        );
      b.method = b.method || "GET";
      b.headers = b.headers || {};
      b.retryParameters = d;
      b.uris = Kg(b.uris);
      var f = Vg(this, a, b),
        g = f.ta(function () {
          return Wg(c, a, b, new yg(b.retryParameters, !1), 0, null, e);
        }),
        h = g.ta(function (n) {
          return Zg(c, a, n);
        }),
        k = Date.now(),
        l = 0;
      f.promise.then(
        function () {
          l = Date.now() - k;
        },
        function () {}
      );
      var m = 0;
      g.promise.then(
        function () {
          m = Date.now();
        },
        function () {}
      );
      var p = h.ta(
        function (n) {
          var r = Date.now() - m,
            u = n.response;
          u.timeMs += l;
          u.timeMs += r;
          n.qf ||
            !c.g ||
            u.fromCache ||
            a != $g ||
            c.g(u.timeMs, u.data.byteLength);
          return u;
        },
        function (n) {
          n && (n.severity = 2);
          throw n;
        }
      );
      d = new Ug(
        p.promise,
        function () {
          return p.abort();
        },
        e,
        d.timeout / 1e3
      );
      Ng(this.m, d);
      return d;
    };
    function Vg(a, b, c) {
      var d = Eg(void 0),
        e = {};
      a = v(a.h);
      for (var f = a.next(); !f.done; e = { $c: e.$c }, f = a.next())
        (e.$c = f.value),
          (d = d.ta(
            (function (g) {
              return function () {
                c.body && (c.body = Kb(c.body));
                return g.$c(b, c);
              };
            })(e)
          ));
      return d.ta(void 0, function (g) {
        if (g instanceof O && 7001 == g.code) throw g;
        throw new O(2, 1, 1006, g);
      });
    }
    function Wg(a, b, c, d, e, f, g) {
      a.o && (c.uris[e] = c.uris[e].replace("http://", "https://"));
      var h = new $b(c.uris[e]),
        k = h.Ia,
        l = !1;
      k ||
        ((k = location.protocol),
        (k = k.slice(0, -1)),
        ac(h, k),
        (c.uris[e] = h.toString()));
      k = k.toLowerCase();
      var m = (k = Rg[k]) ? k.Ff : null;
      if (!m) return Cg(new O(2, 1, 1e3, h));
      var p = k.Gf,
        n = null,
        r = null,
        u = !1,
        t = !1,
        w;
      return Fg(Ag(d))
        .ta(function () {
          if (a.j) return Dg();
          w = Date.now();
          g.h &&
            new Q(function () {
              a.u &&
                !c.retryParameters.suppressNetworkTimeoutWarnings &&
                a.u(new O(1, 1, 1003));
              a.g(0, -1);
            }).X(0);
          c.requestStartTime = Date.now();
          var x = m(
            c.uris[e],
            c,
            b,
            function (A, H, G) {
              n && n.stop();
              r && r.X(z / 1e3);
              a.g && b == $g && (a.g(A, H, c), (l = !0), (g.g = G));
            },
            function (A) {
              a.l && a.l(A, c, b);
              t = !0;
              c.requestStartTime &&
                (c.timeToFirstByte = Date.now() - c.requestStartTime);
            }
          );
          if (!p) return x;
          var C = c.retryParameters.connectionTimeout;
          C &&
            ((n = new Q(function () {
              u = !0;
              x.abort();
            })),
            n.X(C / 1e3));
          var z = c.retryParameters.stallTimeout;
          z &&
            (r = new Q(function () {
              u = !0;
              x.abort();
            }));
          return x;
        })
        .ta(
          function (x) {
            n && n.stop();
            r && r.stop();
            void 0 == x.timeMs && (x.timeMs = Date.now() - w);
            var C = { response: x, qf: l };
            !t && a.l && a.l(x.headers, c, b);
            b == $g && a.B(x.timeMs, x.data.byteLength, c.timeToFirstByte);
            return C;
          },
          function (x) {
            n && n.stop();
            r && r.stop();
            if (a.s) {
              var C = null,
                z = 0;
              x instanceof O && ((C = x), 1001 == x.code && (z = x.data[1]));
              a.s(c, C, z, u);
            }
            if (a.j) return Dg();
            u && (x = new O(1, 1, 1003, c.uris[e], b));
            if (x instanceof O) {
              if (7001 == x.code) throw x;
              if (1010 == x.code) throw f;
              if (1 == x.severity)
                return (
                  (C = new Map().set("error", x)),
                  (C = new Ig("retry", C)),
                  a.dispatchEvent(C),
                  1 == x.category && 1003 == x.code && b == $g && g.oe(),
                  (e = (e + 1) % c.uris.length),
                  Wg(a, b, c, d, e, x, g)
                );
            }
            throw x;
          }
        );
    }
    function Zg(a, b, c) {
      var d = Eg(void 0),
        e = {};
      a = v(a.i);
      for (var f = a.next(); !f.done; e = { ad: e.ad }, f = a.next())
        (e.ad = f.value),
          (d = d.ta(
            (function (g) {
              return function () {
                var h = c.response;
                h.data && (h.data = Kb(h.data));
                return g.ad(b, h);
              };
            })(e)
          ));
      return d.ta(
        function () {
          return c;
        },
        function (g) {
          var h = 2;
          if (g instanceof O) {
            if (7001 == g.code) throw g;
            h = g.severity;
          }
          throw new O(h, 1, 1007, g);
        }
      );
    }
    M("shaka.net.NetworkingEngine", Og);
    Og.prototype.request = Og.prototype.request;
    Og.prototype.destroy = Og.prototype.destroy;
    Og.makeRequest = Sg;
    Og.defaultRetryParameters = function () {
      return zg();
    };
    Og.prototype.clearAllResponseFilters = Og.prototype.He;
    Og.prototype.unregisterResponseFilter = Og.prototype.Xf;
    Og.prototype.registerResponseFilter = Og.prototype.Jf;
    Og.prototype.clearAllRequestFilters = Og.prototype.Ge;
    Og.prototype.unregisterRequestFilter = Og.prototype.Wf;
    Og.prototype.registerRequestFilter = Og.prototype.If;
    Og.unregisterScheme = function (a) {
      delete Rg[a];
    };
    Og.registerScheme = Pg;
    Og.prototype.setForceHTTPS = Og.prototype.Hd;
    function Tg() {
      this.g = 0;
      this.h = !1;
    }
    Tg.prototype.oe = function () {
      this.h = !0;
    };
    Og.NumBytesRemainingClass = Tg;
    Tg.prototype.setHasTimedOut = Tg.prototype.oe;
    function Ug(a, b, c, d) {
      Bg.call(this, a, b);
      this.g = c;
      this.j = Date.now();
      this.i = d;
    }
    ra(Ug, Bg);
    Og.PendingRequest = Ug;
    var $g = 1;
    Og.RequestType = {
      MANIFEST: 0,
      SEGMENT: $g,
      LICENSE: 2,
      APP: 3,
      TIMING: 4,
      SERVER_CERTIFICATE: 5,
    };
    var Qg = 3;
    Og.PluginPriority = { FALLBACK: 1, PREFERRED: 2, APPLICATION: Qg };
    var Rg = {};
    function ah(a, b, c, d, e) {
      var f = { RepresentationID: b, Number: c, Bandwidth: d, Time: e };
      return a.replace(
        /\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)([diouxX]))?\$/g,
        function (g, h, k, l) {
          if ("$$" == g) return "$";
          var m = f[h];
          if (null == m) return g;
          "RepresentationID" == h && k && (k = void 0);
          "Time" == h && (m = Math.round(m));
          switch (l) {
            case void 0:
            case "d":
            case "i":
            case "u":
              g = m.toString();
              break;
            case "o":
              g = m.toString(8);
              break;
            case "x":
              g = m.toString(16);
              break;
            case "X":
              g = m.toString(16).toUpperCase();
              break;
            default:
              g = m.toString();
          }
          k = window.parseInt(k, 10) || 1;
          return Array(Math.max(0, k - g.length) + 1).join("0") + g;
        }
      );
    }
    function bh(a, b, c, d) {
      for (var e = [], f = -c, g = 0; g < a.length; ++g) {
        var h = a[g],
          k = a[g + 1],
          l = V(h, "t", jg),
          m = V(h, "d", jg);
        h = V(h, "r", hg);
        null != l && (l -= c);
        if (!m) break;
        l = null != l ? l : f;
        h = h || 0;
        if (0 > h)
          if (k) {
            k = V(k, "t", jg);
            if (null == k) break;
            else if (l >= k) break;
            h = Math.ceil((k - l) / m) - 1;
          } else {
            if (Infinity == d) break;
            else if (l / b >= d) break;
            h = Math.ceil((d * b - l) / m) - 1;
          }
        0 < e.length && l != f && (e[e.length - 1].end = l / b);
        for (k = 0; k <= h; ++k)
          (f = l + m), e.push({ start: l / b, end: f / b, Yf: l }), (l = f);
      }
      return e;
    }
    function ch(a, b) {
      var c = 1;
      if (a.Z) c = a.Z.timescale;
      else {
        var d = dh(a, b, "timescale");
        d && (c = ig(d) || 1);
      }
      a.Z
        ? (d = a.Z.duration)
        : ((d = dh(a, b, "duration")), (d = ig(d || "")) && (d /= c));
      if (a.Z) var e = a.Z.Qa;
      else {
        var f = dh(a, b, "startNumber");
        e = jg(f || "");
        if (null == f || null == e) e = 1;
      }
      f = a.Z
        ? a.Z.presentationTimeOffset
        : Number(dh(a, b, "presentationTimeOffset")) || 0;
      var g = null;
      if (a.Z && a.Z.Nd)
        (g = a.Z.timeline),
          (a = bh(a.Z.Nd, c, f, a.U.duration || Infinity)),
          g.push.apply(g, ka(a));
      else {
        var h = eh(a, b, "SegmentTimeline");
        h &&
          ((b = h.innerHTML),
          !a.va && a.D.Oa && (g = a.Md.get(b)),
          g ||
            ((g = U(h, "S")),
            (g = bh(g, c, f, a.U.duration || Infinity)),
            !a.va && a.D.Oa && a.Md.set(b, g)));
      }
      return { timescale: c, ia: d, Qa: e, $a: f / c || 0, Pc: f, timeline: g };
    }
    function dh(a, b, c) {
      return [b(a.D), b(a.W), b(a.aa)]
        .filter(Ub)
        .map(function (d) {
          return d.getAttribute(c);
        })
        .reduce(function (d, e) {
          return d || e;
        });
    }
    function eh(a, b, c) {
      return [b(a.D), b(a.W), b(a.aa)]
        .filter(Ub)
        .map(function (d) {
          return Xf(d, c);
        })
        .reduce(function (d, e) {
          return d || e;
        });
    }
    function fh(a, b, c, d, e, f) {
      for (
        var g = ag(a, "http://www.w3.org/1999/xlink", "href"),
          h = ag(a, "http://www.w3.org/1999/xlink", "actuate") || "onRequest",
          k = v(Array.from(a.attributes)),
          l = k.next();
        !l.done;
        l = k.next()
      )
        (l = l.value),
          "http://www.w3.org/1999/xlink" == l.namespaceURI &&
            a.removeAttributeNS(l.namespaceURI, l.localName);
      if (5 <= f) return Cg(new O(2, 4, 4028));
      if ("onLoad" != h) return Cg(new O(2, 4, 4027));
      var m = nc([d], [g]);
      return e.request(0, Sg(m, b)).ta(function (p) {
        p = ng(p.data, a.tagName);
        if (!p) return Cg(new O(2, 4, 4001, g));
        for (; a.childNodes.length; ) a.removeChild(a.childNodes[0]);
        for (; p.childNodes.length; ) {
          var n = p.childNodes[0];
          p.removeChild(n);
          a.appendChild(n);
        }
        p = v(Array.from(p.attributes));
        for (n = p.next(); !n.done; n = p.next())
          a.setAttributeNode(n.value.cloneNode(!1));
        return gh(a, b, c, m[0], e, f + 1);
      });
    }
    function gh(a, b, c, d, e, f) {
      f = void 0 === f ? 0 : f;
      if (ag(a, "http://www.w3.org/1999/xlink", "href")) {
        var g = fh(a, b, c, d, e, f);
        c &&
          (g = g.ta(void 0, function () {
            return gh(a, b, c, d, e, f);
          }));
        return g;
      }
      g = [];
      for (
        var h = v(Array.from(a.childNodes)), k = h.next();
        !k.done;
        k = h.next()
      )
        (k = k.value),
          k instanceof Element &&
            ("urn:mpeg:dash:resolve-to-zero:2013" ==
            ag(k, "http://www.w3.org/1999/xlink", "href")
              ? a.removeChild(k)
              : "SegmentTimeline" != k.tagName && g.push(gh(k, b, c, d, e, f)));
      return Gg(g).ta(function () {
        return a;
      });
    }
    function hh(a, b, c, d, e) {
      this.Ea = a;
      this.ya = b;
      this.ua = c;
      this.td = void 0 === d ? null : d;
      this.timescale = e;
    }
    hh.prototype.dc = function () {
      return this.ya;
    };
    hh.prototype.bc = function () {
      return this.ua;
    };
    function ih(a, b) {
      return a && b
        ? a.dc() == b.dc() && a.bc() == b.bc() && mb(a.Ea(), b.Ea())
        : a == b;
    }
    M("shaka.media.InitSegmentReference", hh);
    hh.prototype.getEndByte = hh.prototype.bc;
    hh.prototype.getStartByte = hh.prototype.dc;
    function jh(a, b, c, d, e, f, g, h, k, l, m, p) {
      l = void 0 === l ? [] : l;
      this.startTime = a;
      this.l = this.endTime = b;
      this.j = c;
      this.ya = d;
      this.ua = e;
      this.g = f;
      this.timestampOffset = g;
      this.appendWindowStart = h;
      this.appendWindowEnd = k;
      this.h = l;
      this.tilesLayout = void 0 === m ? "" : m;
      this.i = void 0 === p ? null : p;
    }
    q = jh.prototype;
    q.Ea = function () {
      return this.j();
    };
    q.getStartTime = function () {
      return this.startTime;
    };
    q.Ue = function () {
      return this.endTime;
    };
    q.dc = function () {
      return this.ya;
    };
    q.bc = function () {
      return this.ua;
    };
    q.nf = function () {
      return this.tilesLayout;
    };
    q.mf = function () {
      return this.i;
    };
    M("shaka.media.SegmentReference", jh);
    jh.prototype.getTileDuration = jh.prototype.mf;
    jh.prototype.getTilesLayout = jh.prototype.nf;
    jh.prototype.getEndByte = jh.prototype.bc;
    jh.prototype.getStartByte = jh.prototype.dc;
    jh.prototype.getEndTime = jh.prototype.Ue;
    jh.prototype.getStartTime = jh.prototype.getStartTime;
    jh.prototype.getUris = jh.prototype.Ea;
    function kh(a, b, c, d, e, f, g) {
      var h,
        k = new T().P("sidx", function (l) {
          h = lh(b, d, e, f, g, c, l);
        });
      a && k.parse(a);
      if (h) return h;
      throw new O(2, 3, 3004);
    }
    function lh(a, b, c, d, e, f, g) {
      var h = [];
      g.reader.skip(4);
      var k = g.reader.K();
      if (0 == k) throw new O(2, 3, 3005);
      if (0 == g.version) {
        var l = g.reader.K();
        var m = g.reader.K();
      } else (l = g.reader.jb()), (m = g.reader.jb());
      g.reader.skip(2);
      var p = g.reader.Qb();
      a = a + g.size + m;
      for (m = 0; m < p; m++) {
        var n = g.reader.K(),
          r = (n & 2147483648) >>> 31;
        n &= 2147483647;
        var u = g.reader.K();
        g.reader.skip(4);
        if (1 == r) throw new O(2, 3, 3006);
        h.push(
          new jh(
            l / k + c,
            (l + u) / k + c,
            function () {
              return f;
            },
            a,
            a + n - 1,
            b,
            c,
            d,
            e
          )
        );
        l += u;
        a += n;
      }
      g.parser.stop();
      return h;
    }
    function W(a) {
      this.L = a;
      this.j = null;
      this.h = 0;
      this.m = !1;
    }
    q = W.prototype;
    q.mb = function () {
      return this.L.length;
    };
    q.destroy = function () {
      Ob(
        "shaka.media.SegmentIndex",
        "Please use release() instead of destroy()."
      );
      this.release();
      return Promise.resolve();
    };
    q.release = function () {
      this.m || ((this.L = []), this.j && this.j.stop(), (this.j = null));
    };
    q.wf = function () {
      this.m = !0;
    };
    q.find = function (a) {
      for (var b = this.L.length - 1, c = b; 0 <= c; --c) {
        var d = this.L[c],
          e = c < b ? this.L[c + 1].startTime : d.endTime;
        if (a >= d.startTime && a < e) return c + this.h;
      }
      return this.L.length && a < this.L[0].startTime ? this.h : null;
    };
    q.get = function (a) {
      if (0 == this.L.length) return null;
      a -= this.h;
      return 0 > a || a >= this.L.length ? null : this.L[a];
    };
    q.offset = function (a) {
      if (!this.m)
        for (var b = v(this.L), c = b.next(); !c.done; c = b.next())
          (c = c.value),
            (c.startTime += a),
            (c.endTime += a),
            (c.timestampOffset += a);
    };
    q.fc = function (a) {
      !this.m &&
        a.length &&
        ((this.L = this.L.filter(function (b) {
          return b.startTime < a[0].startTime;
        })),
        this.L.push.apply(this.L, ka(a)));
    };
    q.hc = function (a, b) {
      var c = this;
      a = a.filter(function (d) {
        return (
          d.endTime > b && (0 == c.L.length || d.endTime > c.L[0].startTime)
        );
      });
      this.fc(a);
      this.Da(b);
    };
    q.Da = function (a) {
      if (!this.m) {
        var b = this.L.length;
        this.L = this.L.filter(function (c) {
          return c.endTime > a;
        });
        this.h += b - this.L.length;
      }
    };
    q.Gb = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      if (!this.m) {
        for (; this.L.length; )
          if (this.L[this.L.length - 1].startTime >= b) this.L.pop();
          else break;
        for (; this.L.length; )
          if (this.L[0].endTime <= a) this.L.shift(), c || this.h++;
          else break;
        0 != this.L.length &&
          ((a = this.L[this.L.length - 1]),
          (this.L[this.L.length - 1] = new jh(
            a.startTime,
            b,
            a.j,
            a.ya,
            a.ua,
            a.g,
            a.timestampOffset,
            a.appendWindowStart,
            a.appendWindowEnd,
            a.h,
            a.tilesLayout,
            a.i
          )));
      }
    };
    q.Qc = function (a, b) {
      var c = this;
      this.m ||
        (this.j && this.j.stop(),
        (this.j = new Q(function () {
          var d = b();
          d ? c.L.push.apply(c.L, ka(d)) : (c.j.stop(), (c.j = null));
        })),
        this.j.Ga(a));
    };
    W.prototype[Symbol.iterator] = function () {
      return this.Va(0);
    };
    W.prototype.Va = function (a) {
      var b = this.find(a);
      if (null == b) return null;
      b--;
      var c = this.get(b + 1),
        d = -1;
      if (c && 0 < c.h.length)
        for (var e = c.h.length - 1; 0 <= e; --e) {
          var f = c.h[e];
          if (a >= f.startTime && a < f.endTime) {
            b++;
            d = e - 1;
            break;
          }
        }
      return new mh(this, b, d);
    };
    function nh(a, b, c) {
      return new W([
        new jh(
          a,
          a + b,
          function () {
            return c;
          },
          0,
          null,
          null,
          a,
          a,
          a + b
        ),
      ]);
    }
    M("shaka.media.SegmentIndex", W);
    W.forSingleSegment = nh;
    W.prototype.getIteratorForTime = W.prototype.Va;
    W.prototype.updateEvery = W.prototype.Qc;
    W.prototype.fit = W.prototype.Gb;
    W.prototype.evict = W.prototype.Da;
    W.prototype.mergeAndEvict = W.prototype.hc;
    W.prototype.merge = W.prototype.fc;
    W.prototype.offset = W.prototype.offset;
    W.prototype.get = W.prototype.get;
    W.prototype.find = W.prototype.find;
    W.prototype.markImmutable = W.prototype.wf;
    W.prototype.release = W.prototype.release;
    W.prototype.destroy = W.prototype.destroy;
    function mh(a, b, c) {
      this.i = a;
      this.h = b;
      this.g = c;
    }
    mh.prototype.seek = function (a) {
      Ob(
        "shaka.media.SegmentIterator",
        "Please use SegmentIndex.getIteratorForTime instead of seek()."
      );
      (a = this.i.Va(a))
        ? ((this.h = a.h), (this.g = a.g))
        : ((this.h = Number.MAX_VALUE), (this.g = 0));
      return this.next().value;
    };
    mh.prototype.current = function () {
      var a = this.i.get(this.h);
      a &&
        0 < a.h.length &&
        a.Ea().length &&
        this.g >= a.h.length &&
        (this.h++, (this.g = 0), (a = this.i.get(this.h)));
      return a && 0 < a.h.length ? a.h[this.g] : a;
    };
    mh.prototype.next = function () {
      var a = this.i.get(this.h);
      a && 0 < a.h.length
        ? (this.g++,
          a.Ea().length && this.g == a.h.length && (this.h++, (this.g = 0)))
        : (this.h++, (this.g = 0));
      a = this.current();
      return { value: a, done: !a };
    };
    M("shaka.media.SegmentIterator", mh);
    mh.prototype.next = mh.prototype.next;
    mh.prototype.current = mh.prototype.current;
    mh.prototype.seek = mh.prototype.seek;
    function oh() {
      W.call(this, []);
      this.g = [];
    }
    ra(oh, W);
    q = oh.prototype;
    q.clone = function () {
      var a = new oh();
      a.g = this.g.slice();
      return a;
    };
    q.release = function () {
      for (var a = v(this.g), b = a.next(); !b.done; b = a.next())
        b.value.release();
      this.g = [];
    };
    q.find = function (a) {
      for (var b = 0, c = v(this.g), d = c.next(); !d.done; d = c.next()) {
        d = d.value;
        var e = d.find(a);
        if (null != e) return e + b;
        b += d.h + d.mb();
      }
      return null;
    };
    q.get = function (a) {
      for (var b = 0, c = v(this.g), d = c.next(); !d.done; d = c.next()) {
        d = d.value;
        var e = d.get(a - b);
        if (e) return e;
        b += d.h + d.mb();
      }
      return null;
    };
    q.offset = function () {};
    q.fc = function () {};
    q.Da = function () {};
    q.hc = function () {};
    q.Gb = function () {};
    q.Qc = function () {};
    M("shaka.media.MetaSegmentIndex", oh);
    oh.prototype.updateEvery = oh.prototype.Qc;
    oh.prototype.fit = oh.prototype.Gb;
    oh.prototype.mergeAndEvict = oh.prototype.hc;
    oh.prototype.evict = oh.prototype.Da;
    oh.prototype.merge = oh.prototype.fc;
    oh.prototype.offset = oh.prototype.offset;
    oh.prototype.get = oh.prototype.get;
    oh.prototype.find = oh.prototype.find;
    oh.prototype.release = oh.prototype.release;
    function ph(a) {
      this.h = Mb(a);
      this.g = new S(this.h, 0);
    }
    ph.prototype.ka = function () {
      return this.g.ka();
    };
    function qh(a) {
      var b = rh(a);
      if (7 < b.length) throw new O(2, 3, 3002);
      var c = 0;
      b = v(b);
      for (var d = b.next(); !d.done; d = b.next()) c = 256 * c + d.value;
      b = rh(a);
      a: {
        d = v(sh);
        for (var e = d.next(); !e.done; e = d.next())
          if (Ib(b, new Uint8Array(e.value))) {
            d = !0;
            break a;
          }
        d = !1;
      }
      if (d) b = a.h.byteLength - a.g.fa();
      else {
        if (8 == b.length && b[1] & 224) throw new O(2, 3, 3001);
        for (e = d = 0; e < b.length; e++) {
          var f = b[e];
          d = 0 == e ? f & ((1 << (8 - b.length)) - 1) : 256 * d + f;
        }
        b = d;
      }
      b = a.g.fa() + b <= a.h.byteLength ? b : a.h.byteLength - a.g.fa();
      d = Mb(a.h, a.g.fa(), b);
      a.g.skip(b);
      return new th(c, d);
    }
    function rh(a) {
      var b = a.g.fa(),
        c = a.g.ga();
      if (0 == c) throw new O(2, 3, 3002);
      c = 8 - Math.floor(Math.log2(c));
      a.g.skip(c - 1);
      return N(a.h, b, c);
    }
    var sh = [
      [255],
      [127, 255],
      [63, 255, 255],
      [31, 255, 255, 255],
      [15, 255, 255, 255, 255],
      [7, 255, 255, 255, 255, 255],
      [3, 255, 255, 255, 255, 255, 255],
      [1, 255, 255, 255, 255, 255, 255, 255],
    ];
    function th(a, b) {
      this.id = a;
      this.g = b;
    }
    function uh(a) {
      if (8 < a.g.byteLength) throw new O(2, 3, 3002);
      if (8 == a.g.byteLength && a.g.getUint8(0) & 224) throw new O(2, 3, 3001);
      for (var b = 0, c = 0; c < a.g.byteLength; c++) {
        var d = a.g.getUint8(c);
        b = 256 * b + d;
      }
      return b;
    }
    function vh(a, b, c, d, e, f, g, h, k) {
      function l() {
        return e;
      }
      var m = [];
      a = new ph(a.g);
      for (var p = null, n = null; a.ka(); ) {
        var r = qh(a);
        if (187 == r.id) {
          var u = wh(r);
          u &&
            ((r = c * u.Zf),
            (u = b + u.Kf),
            null != p && m.push(new jh(p + g, r + g, l, n, u - 1, f, g, h, k)),
            (p = r),
            (n = u));
        }
      }
      null != p && m.push(new jh(p + g, d + g, l, n, null, f, g, h, k));
      return m;
    }
    function wh(a) {
      var b = new ph(a.g);
      a = qh(b);
      if (179 != a.id) throw new O(2, 3, 3013);
      a = uh(a);
      b = qh(b);
      if (183 != b.id) throw new O(2, 3, 3012);
      b = new ph(b.g);
      for (var c = 0; b.ka(); ) {
        var d = qh(b);
        if (241 == d.id) {
          c = uh(d);
          break;
        }
      }
      return { Zf: a, Kf: c };
    }
    function xh(a, b) {
      b = eh(a, b, "Initialization");
      if (!b) return null;
      var c = a.D.ea,
        d = b.getAttribute("sourceURL");
      d && (c = nc(a.D.ea, [d]));
      d = 0;
      var e = null;
      if ((b = V(b, "range", gg))) (d = b.start), (e = b.end);
      return new hh(
        function () {
          return c;
        },
        d,
        e,
        yh(a)
      );
    }
    function zh(a, b) {
      var c = Number(dh(a, Ah, "presentationTimeOffset")) || 0,
        d = dh(a, Ah, "timescale"),
        e = 1;
      d && (e = ig(d) || 1);
      var f = c / e || 0,
        g = xh(a, Ah);
      Bh(a, g);
      var h = Lg(a);
      return {
        fb: function () {
          var k = eh(h, Ah, "RepresentationIndex"),
            l = h.D.ea;
          k && (k = k.getAttribute("sourceURL")) && (l = nc(h.D.ea, [k]));
          k = Ch(h);
          return Dh(h, b, g, l, k.start, k.end, f);
        },
      };
    }
    function Dh(a, b, c, d, e, f, g) {
      var h, k, l, m, p, n, r, u, t, w, x, C, z, A, H;
      return L(function (G) {
        if (1 == G.g)
          return (
            (h = a.presentationTimeline),
            (k = !a.va || !a.U.Kb),
            (l = a.U.start),
            (m = a.U.duration),
            (p = a.D.mimeType.split("/")[1]),
            (n = b),
            (r = null),
            (u = [n(d, e, f), "webm" == p ? n(c.Ea(), c.ya, c.ua) : null]),
            (n = null),
            y(G, Promise.all(u), 2)
          );
        t = G.h;
        w = t[0];
        x = t[1] || null;
        C = null;
        z = l - g;
        A = l;
        H = m ? l + m : Infinity;
        if ("mp4" == p) var D = kh(w, e, d, c, z, A, H);
        else {
          D = new ph(x);
          if (440786851 != qh(D).id) throw new O(2, 3, 3008);
          var I = qh(D);
          if (408125543 != I.id) throw new O(2, 3, 3009);
          D = I.g.byteOffset;
          I = new ph(I.g);
          for (var J = null; I.ka(); ) {
            var K = qh(I);
            if (357149030 == K.id) {
              J = K;
              break;
            }
          }
          if (!J) throw new O(2, 3, 3010);
          J = new ph(J.g);
          K = 1e6;
          for (I = null; J.ka(); ) {
            var P = qh(J);
            if (2807729 == P.id) K = uh(P);
            else if (17545 == P.id)
              if (4 == P.g.byteLength) I = P.g.getFloat32(0);
              else if (8 == P.g.byteLength) I = P.g.getFloat64(0);
              else throw new O(2, 3, 3003);
          }
          if (null == I) throw new O(2, 3, 3011);
          J = K / 1e9;
          I *= J;
          K = qh(new ph(w));
          if (475249515 != K.id) throw new O(2, 3, 3007);
          D = vh(K, D, J, I, d, c, z, A, H);
        }
        C = D;
        h.Jc(C);
        r = new W(C);
        k && r.Gb(A, H, !0);
        return G.return(r);
      });
    }
    function Ah(a) {
      return a.Rb;
    }
    function Ch(a) {
      var b = eh(a, Ah, "RepresentationIndex");
      a = dh(a, Ah, "indexRange");
      a = gg(a || "");
      b && (a = V(b, "range", gg, a));
      return a;
    }
    function Bh(a, b) {
      Eh(a, b);
      if (!Ch(a)) throw new O(2, 4, 4002);
    }
    function Eh(a, b) {
      var c = a.D.mimeType.split("/")[1];
      if (a.D.contentType != sc && "mp4" != c && "webm" != c)
        throw new O(2, 4, 4006);
      if ("webm" == c && !b) throw new O(2, 4, 4005);
    }
    function yh(a) {
      var b = a.D;
      return {
        bandwidth: a.bandwidth,
        audioSamplingRate: b.audioSamplingRate,
        codecs: b.codecs,
        contentType: b.contentType,
        frameRate: b.frameRate || null,
        height: b.height || null,
        mimeType: b.mimeType,
        channelsCount: b.Nb,
        pixelAspectRatio: b.pixelAspectRatio || null,
        width: b.width || null,
      };
    }
    function Fh(a, b) {
      var c = xh(a, Gh),
        d = Hh(a);
      if (!d.ia && !d.timeline && 1 < d.Lb.length) throw new O(2, 4, 4002);
      if (!d.ia && !a.U.duration && !d.timeline && 1 == d.Lb.length)
        throw new O(2, 4, 4002);
      if (d.timeline && 0 == d.timeline.length) throw new O(2, 4, 4002);
      Ih(a);
      var e = null,
        f = null;
      a.aa.id &&
        a.D.id &&
        (f = b[a.aa.id + "," + a.D.id]) &&
        (e = f.segmentIndex);
      var g = Jh(a.U.start, a.U.duration, a.D.ea, d, c);
      b = !e;
      e ? e.hc(g, a.presentationTimeline.Xa()) : (e = new W(g));
      a.presentationTimeline.Jc(g);
      (a.va && a.U.Kb) ||
        e.Gb(a.U.start, a.U.duration ? a.U.start + a.U.duration : Infinity, b);
      f && (f.segmentIndex = e);
      return {
        fb: function () {
          (e && 0 != e.mb()) || e.fc(g);
          return Promise.resolve(e);
        },
      };
    }
    function Gh(a) {
      return a.xa;
    }
    function Hh(a) {
      var b = Kh(a);
      a = ch(a, Gh);
      var c = a.Qa;
      0 == c && (c = 1);
      var d = 0;
      a.ia
        ? (d = a.ia * (c - 1))
        : a.timeline && 0 < a.timeline.length && (d = a.timeline[0].start);
      return {
        ia: a.ia,
        startTime: d,
        Qa: c,
        $a: a.$a,
        timeline: a.timeline,
        Lb: b,
      };
    }
    function Jh(a, b, c, d, e) {
      var f = d.Lb.length;
      d.timeline &&
        d.timeline.length != d.Lb.length &&
        (f = Math.min(d.timeline.length, d.Lb.length));
      for (
        var g = a - d.$a,
          h = b ? a + b : Infinity,
          k = [],
          l = d.startTime,
          m = {},
          p = 0;
        p < f;
        m = { Wc: m.Wc }, p++
      ) {
        var n = d.Lb[p];
        m.Wc = nc(c, [n.yf]);
        var r = void 0;
        r = null != d.ia ? l + d.ia : d.timeline ? d.timeline[p].end : l + b;
        k.push(
          new jh(
            a + l,
            a + r,
            (function (u) {
              return function () {
                return u.Wc;
              };
            })(m),
            n.start,
            n.end,
            e,
            g,
            a,
            h
          )
        );
        l = r;
      }
      return k;
    }
    function Ih(a) {
      a = [a.D.xa, a.W.xa, a.aa.xa].filter(Ub);
      a.length && U(a[0], "SegmentList") && a[0].getAttribute("timescale");
    }
    function Kh(a) {
      return [a.D.xa, a.W.xa, a.aa.xa]
        .filter(Ub)
        .map(function (b) {
          return U(b, "SegmentURL");
        })
        .reduce(function (b, c) {
          return 0 < b.length ? b : c;
        })
        .map(function (b) {
          b.getAttribute("indexRange") && !a.jd && (a.jd = !0);
          var c = b.getAttribute("media");
          b = V(b, "mediaRange", gg, { start: 0, end: null });
          return { yf: c, start: b.start, end: b.end };
        });
    }
    function Lh(a, b, c, d, e, f, g) {
      g || a.D.Ib || (a.D.Ib = dh(a, Mh, "initialization"));
      var h = a.D.Ib ? Nh(a) : null,
        k = Oh(a);
      a.Z ||
        ((a.Z = {
          timescale: k.timescale,
          media: k.Hc,
          index: k.pb,
          Qa: k.Qa,
          duration: k.ia || 0,
          presentationTimeOffset: k.Pc,
          Nd: null,
          timeline: k.timeline,
        }),
        Ph(k));
      if (k.pb || k.ia) {
        var l = Lg(a);
        if (k.pb)
          return (
            Eh(a, h),
            {
              fb: function () {
                var u = ah(k.pb, l.D.id, null, l.bandwidth || null, null);
                u = nc(l.D.ea, [u]);
                return Dh(l, b, h, u, 0, null, k.$a);
              },
            }
          );
        d ||
          "image" === a.W.contentType ||
          (a.presentationTimeline.wd(k.ia || 0),
          a.presentationTimeline.Ic(a.U.start));
        return {
          fb: function () {
            return Qh(l, k, e, h, f);
          },
        };
      }
      var m = null;
      d = d = null;
      a.aa.id &&
        a.D.id &&
        ((d = a.aa.id + "," + a.D.id), (d = c[d])) &&
        (m = d.segmentIndex);
      var p = a.U.start,
        n = a.U.duration ? p + a.U.duration : Infinity,
        r = !(a.va && a.U.Kb) && "image" !== a.W.contentType;
      m
        ? ((c = m), Rh(c, k, p, n, r), c.Da(a.presentationTimeline.Xa()))
        : (m = new Sh(k, a.D.id, a.bandwidth, a.D.ea, p, n, h, r));
      k.timeline &&
        "image" !== a.W.contentType &&
        a.presentationTimeline.de(k.timeline, p);
      d && a.va && (d.segmentIndex = m);
      return {
        fb: function () {
          m instanceof Sh && 0 == m.mb() && Rh(m, k, p, n, r);
          return Promise.resolve(m);
        },
      };
    }
    function Mh(a) {
      return a.Oa;
    }
    function Oh(a) {
      var b = ch(a, Mh);
      var c = a.Z ? a.Z.media : dh(a, Mh, "media");
      a = a.Z ? a.Z.index : dh(a, Mh, "index");
      return {
        ia: b.ia,
        timescale: b.timescale,
        Qa: b.Qa,
        $a: b.$a,
        Pc: b.Pc,
        timeline: b.timeline,
        Hc: c,
        pb: a,
      };
    }
    function Ph(a) {
      var b = a.pb ? 1 : 0;
      b += a.timeline ? 1 : 0;
      b += a.ia ? 1 : 0;
      if (0 == b) throw new O(2, 4, 4002);
      1 != b && (a.pb && (a.timeline = null), (a.ia = null));
      if (!a.pb && !a.Hc) throw new O(2, 4, 4002);
    }
    function Qh(a, b, c, d, e) {
      function f(J) {
        var K = (J - r) * n,
          P = K + b.$a,
          aa = K + l;
        K = aa + n;
        var ia = Math.min(K, h());
        aa = new jh(
          aa,
          ia,
          function () {
            var sa = ah(t, x, J, w, P * u);
            return nc(C, [sa]);
          },
          0,
          null,
          d,
          z,
          l,
          h()
        );
        aa.l = K;
        return aa;
      }
      function g() {
        var J = [Math.max(k.Xa(), l), Math.min(k.nb(), h())].map(function (K) {
          return K - l;
        });
        return [Math.ceil(J[0] / n), Math.ceil(J[1] / n) - 1].map(function (K) {
          return K + r;
        });
      }
      function h() {
        var J = (null != m && e[m]) || p;
        return J ? l + J : Infinity;
      }
      var k = a.presentationTimeline,
        l = a.U.start,
        m = a.aa.id,
        p = a.U.duration,
        n = b.ia,
        r = b.Qa,
        u = b.timescale,
        t = b.Hc,
        w = a.bandwidth || null,
        x = a.D.id,
        C = a.D.ea,
        z = l - b.$a,
        A = g();
      a = a.va ? Math.max(A[0], A[1] - c + 1) : A[0];
      A = A[1];
      c = [];
      for (var H = a; H <= A; ++H) {
        var G = f(H);
        c.push(G);
      }
      var D = new W(c);
      c = k.nb() < h();
      H = k.$();
      if (c || H) {
        var I = Math.max(a, A + 1);
        D.Qc(n, function () {
          var J = k.Xa();
          D.Da(J);
          var K = v(g());
          K.next();
          K = K.next().value;
          for (var P = []; I <= K; ) {
            var aa = f(I);
            P.push(aa);
            I++;
          }
          return J > h() && !P.length ? null : P;
        });
      }
      return Promise.resolve(D);
    }
    function Nh(a) {
      var b = a.D.Ib;
      b || (b = dh(a, Mh, "initialization"));
      if (!b) return null;
      var c = a.D.id,
        d = a.bandwidth || null,
        e = a.D.ea;
      return new hh(
        function () {
          var f = ah(b, c, null, d, null);
          return nc(e, [f]);
        },
        0,
        null,
        yh(a)
      );
    }
    function Sh(a, b, c, d, e, f, g, h) {
      W.call(this, []);
      this.g = a;
      this.B = b;
      this.o = c;
      this.s = d;
      this.i = e;
      this.l = f;
      this.u = g;
      h && Th(this);
    }
    ra(Sh, W);
    q = Sh.prototype;
    q.mb = function () {
      return this.g ? this.g.timeline.length : 0;
    };
    q.release = function () {
      W.prototype.release.call(this);
      this.g = null;
    };
    q.Da = function (a) {
      if (this.g) {
        for (var b = 0, c = this.g.timeline, d = 0; d < c.length; d += 1)
          if (c[d].end + this.i <= a) b += 1;
          else break;
        0 < b &&
          ((this.g.timeline = c.slice(b)),
          (this.L = this.L.slice(b)),
          (this.h += b),
          0 === this.mb() && this.release());
      }
    };
    function Rh(a, b, c, d, e) {
      if (a.g) {
        c = a.g.timeline;
        var f = c[c.length - 1];
        b = f
          ? b.timeline.filter(function (g) {
              return g.start >= f.end;
            })
          : b.timeline;
        0 < b.length && a.g.timeline.push.apply(a.g.timeline, ka(b));
        a.l !== d && (a.l = d);
      } else (a.g = b), (a.i = c), (a.l = d);
      e && Th(a);
    }
    function Th(a) {
      var b = a.g && a.g.timeline;
      if (b) {
        for (; b.length; )
          if (b[b.length - 1].start >= a.l) b.pop();
          else break;
        a.Da(a.i);
        0 !== b.length && Infinity !== a.l && (b[b.length - 1].end = a.l - a.i);
      }
    }
    q.find = function (a) {
      if (
        this.g &&
        this.g.timeline &&
        this.g.timeline.length &&
        a < this.g.timeline[0].start + this.i
      )
        return this.h;
      if (!this.g) return null;
      var b = this.g.timeline;
      if (a < this.i || a > this.l) return null;
      for (var c = b.length - 1, d = 0; d < b.length; d++) {
        var e = b[d],
          f = e.start + this.i;
        e = e.end + this.i;
        d < c && (e = b[d + 1].start + this.i);
        if (a >= f && a < e) return d + this.h;
      }
      return null;
    };
    q.get = function (a) {
      var b = a - this.h;
      if (0 > b || b >= this.mb() || !this.g) return null;
      var c = this.L[b];
      c ||
        ((c = this.g.timeline[b]),
        (c = new jh(
          this.i + c.start,
          this.i + c.end,
          Uh.bind(
            null,
            this.g.Hc,
            this.B,
            a + this.g.Qa,
            this.o,
            this.g.Pc + c.Yf,
            this.s
          ),
          0,
          null,
          this.u,
          this.i - this.g.$a,
          this.i,
          this.l
        )),
        (this.L[b] = c));
      return c;
    };
    function Uh(a, b, c, d, e, f) {
      a = ah(a, b, c, d || null, e);
      return nc(f, [a]).map(function (g) {
        return g.toString();
      });
    }
    function Vh() {}
    function Wh(a, b, c, d) {
      var e, f, g, h;
      return L(function (k) {
        if (1 == k.g) {
          if (d && (e = Xh[d.toLowerCase()])) return k.return(e);
          if ((f = Yh(a))) if ((g = Zh[f])) return k.return(g);
          return d ? k.A(2) : y(k, $h(a, b, c), 3);
        }
        if (2 != k.g && (d = k.h) && (h = Xh[d])) return k.return(h);
        throw new O(2, 4, 4e3, a);
      });
    }
    function $h(a, b, c) {
      var d, e, f;
      return L(function (g) {
        if (1 == g.g)
          return (
            (d = Sg([a], c)),
            (d.method = "HEAD"),
            y(g, b.request(0, d).promise, 2)
          );
        e = g.h;
        f = e.headers["content-type"];
        return g.return(f ? f.toLowerCase().split(";").shift() : "");
      });
    }
    function Yh(a) {
      if (a.match(/\.m3u8;/)) return "m3u8";
      a = new $b(a).wa.split("/").pop().split(".");
      return 1 == a.length ? "" : a.pop().toLowerCase();
    }
    M("shaka.media.ManifestParser", Vh);
    Vh.unregisterParserByMime = function (a) {
      delete Xh[a];
    };
    Vh.registerParserByMime = function (a, b) {
      Xh[a] = b;
    };
    Vh.registerParserByExtension = function (a, b) {
      Zh[a] = b;
    };
    var Xh = {},
      Zh = {};
    function X(a, b, c) {
      this.H = this.i = a;
      this.Nc = b;
      this.o = this.j = Infinity;
      this.g = 1;
      this.h = this.l = null;
      this.m = 0;
      this.B = !0;
      this.C = 0;
      this.s = void 0 === c ? !0 : c;
      this.F = 0;
      this.u = !1;
    }
    q = X.prototype;
    q.getDuration = function () {
      return this.j;
    };
    q.$e = function () {
      return this.g;
    };
    q.Pa = function (a) {
      this.j = a;
    };
    q.gf = function () {
      return this.i;
    };
    q.df = function () {
      return this.H;
    };
    q.ne = function (a) {
      this.m = a;
    };
    q.Sb = function (a) {
      this.B = a;
    };
    q.Jd = function (a) {
      this.o = a;
    };
    q.Pf = function (a) {
      this.Nc = a;
    };
    q.Te = function () {
      return this.Nc;
    };
    q.de = function (a, b) {
      if (0 != a.length) {
        var c = a[a.length - 1].end + b;
        this.Ic(a[0].start + b);
        this.g = a.reduce(function (d, e) {
          return Math.max(d, e.end - e.start);
        }, this.g);
        this.h = Math.max(this.h, c);
        null != this.i &&
          this.s &&
          !this.u &&
          (this.i = (Date.now() + this.m) / 1e3 - this.h - this.g);
      }
    };
    q.Jc = function (a) {
      if (0 != a.length) {
        var b = a[a.length - 1].endTime;
        this.Ic(a[0].startTime);
        this.g = a.reduce(function (c, d) {
          return Math.max(c, d.endTime - d.startTime);
        }, this.g);
        this.h = Math.max(this.h, b);
        null != this.i &&
          this.s &&
          !this.u &&
          (this.i = (Date.now() + this.m) / 1e3 - this.h - this.g);
      }
    };
    q.rd = function () {
      this.u = !0;
    };
    q.Ic = function (a) {
      this.l = null == this.l ? a : Math.min(this.l, a);
    };
    q.wd = function (a) {
      this.g = Math.max(this.g, a);
    };
    q.offset = function (a) {
      null != this.l && (this.l += a);
      null != this.h && (this.h += a);
    };
    q.$ = function () {
      return Infinity == this.j && !this.B;
    };
    q.Jb = function () {
      return Infinity != this.j && !this.B;
    };
    q.Xa = function () {
      return Math.max(this.C, this.nb() - this.o);
    };
    q.pe = function (a) {
      this.C = a;
    };
    q.nb = function () {
      return this.$() || this.Jb()
        ? Math.min(
            Math.max(0, (Date.now() + this.m) / 1e3 - this.g - this.i) + this.F,
            this.j
          )
        : this.h
        ? Math.min(this.h, this.j)
        : this.j;
    };
    q.cc = function (a) {
      var b = Math.max(this.l, this.C);
      return Infinity == this.o
        ? Math.ceil(1e3 * b) / 1e3
        : Math.max(b, Math.min(this.nb() - this.o + a, this.Wa()));
    };
    q.Hb = function () {
      return this.cc(0);
    };
    q.Wa = function () {
      return Math.max(0, this.nb() - (this.$() || this.Jb() ? this.Nc : 0));
    };
    q.te = function () {
      return null == this.i || (null != this.h && this.s) ? !1 : !0;
    };
    q.me = function (a) {
      this.F = a;
    };
    M("shaka.media.PresentationTimeline", X);
    X.prototype.setAvailabilityTimeOffset = X.prototype.me;
    X.prototype.usingPresentationStartTime = X.prototype.te;
    X.prototype.getSeekRangeEnd = X.prototype.Wa;
    X.prototype.getSeekRangeStart = X.prototype.Hb;
    X.prototype.getSafeSeekRangeStart = X.prototype.cc;
    X.prototype.getSegmentAvailabilityEnd = X.prototype.nb;
    X.prototype.setUserSeekStart = X.prototype.pe;
    X.prototype.getSegmentAvailabilityStart = X.prototype.Xa;
    X.prototype.isInProgress = X.prototype.Jb;
    X.prototype.isLive = X.prototype.$;
    X.prototype.offset = X.prototype.offset;
    X.prototype.notifyMaxSegmentDuration = X.prototype.wd;
    X.prototype.notifyMinSegmentStartTime = X.prototype.Ic;
    X.prototype.lockStartTime = X.prototype.rd;
    X.prototype.notifySegments = X.prototype.Jc;
    X.prototype.notifyTimeRange = X.prototype.de;
    X.prototype.getDelay = X.prototype.Te;
    X.prototype.setDelay = X.prototype.Pf;
    X.prototype.setSegmentAvailabilityDuration = X.prototype.Jd;
    X.prototype.setStatic = X.prototype.Sb;
    X.prototype.setClockOffset = X.prototype.ne;
    X.prototype.getOriginalPresentationStartTime = X.prototype.df;
    X.prototype.getPresentationStartTime = X.prototype.gf;
    X.prototype.setDuration = X.prototype.Pa;
    X.prototype.getMaxSegmentDuration = X.prototype.$e;
    X.prototype.getDuration = X.prototype.getDuration;
    function ai(a, b) {
      this.h = a;
      this.g = b;
      this.j = "";
      this.o = void 0;
      this.i = !1;
      this.m = !0;
      this.l = !1;
    }
    function bi(a, b, c) {
      try {
        if (a.g.enabled) {
          var d = { d: 1e3 * c.duration, st: a.h.$() ? ci : di };
          d.ot = ei(c);
          var e = d.ot === fi || d.ot === gi || d.ot === hi || d.ot === ii;
          e && (d.bl = ji(a, c.type));
          c.bandwidth && (d.br = c.bandwidth / 1e3);
          e && d.ot !== ii && (d.tb = ki(a, d.ot) / 1e3);
          li(a, b, d);
        }
      } catch (f) {
        ab("CMCD_SEGMENT_ERROR", "Could not generate segment CMCD data.", f);
      }
    }
    function mi(a, b, c) {
      try {
        if (!a.g.enabled) return b;
        var d = ni(a);
        a: {
          switch (c) {
            case "video/webm":
            case "video/mp4":
              var e = hi;
              break a;
            case "application/x-mpegurl":
              e = oi;
              break a;
          }
          e = void 0;
        }
        d.ot = e;
        d.su = !0;
        var f = pi(d);
        return qi(b, f);
      } catch (g) {
        return ab("CMCD_SRC_ERROR", "Could not generate src CMCD data.", g), b;
      }
    }
    function ri(a, b) {
      try {
        if (!a.g.enabled) return b;
        var c = ni(a);
        c.ot = si;
        c.su = !0;
        var d = pi(c);
        return qi(b, d);
      } catch (e) {
        return (
          ab(
            "CMCD_TEXT_TRACK_ERROR",
            "Could not generate text track CMCD data.",
            e
          ),
          b
        );
      }
    }
    function ni(a) {
      a.j || (a.j = a.g.sessionId || window.crypto.randomUUID());
      return {
        v: 1,
        sf: a.o,
        sid: a.j,
        cid: a.g.contentId,
        mtp: a.h.getBandwidthEstimate() / 1e3,
      };
    }
    function li(a, b, c) {
      c = void 0 === c ? {} : c;
      var d = void 0 === d ? a.g.useHeaders : d;
      if (a.g.enabled) {
        Object.assign(c, ni(a));
        c.pr = a.h.Ac();
        var e = c.ot === fi || c.ot === hi;
        a.l && e && ((c.bs = !0), (c.su = !0), (a.l = !1));
        null == c.su && (c.su = a.m);
        if (d)
          (a = ti(c)), Object.keys(a).length && Object.assign(b.headers, a);
        else {
          var f = pi(c);
          f &&
            (b.uris = b.uris.map(function (g) {
              return qi(g, f);
            }));
        }
      }
    }
    function ei(a) {
      var b = a.type;
      if (a.init) return ui;
      if ("video" == b) return a.codecs.includes(",") ? hi : fi;
      if ("audio" == b) return gi;
      if ("text" == b) return "application/mp4" === a.mimeType ? ii : si;
    }
    function ji(a, b) {
      b = a.h.gb()[b];
      if (!b.length) return NaN;
      var c = a.h.getCurrentTime();
      return (a = b.find(function (d) {
        return d.start <= c && d.end >= c;
      }))
        ? 1e3 * (a.end - c)
        : NaN;
    }
    function ki(a, b) {
      var c = a.h.hb();
      if (!c.length) return NaN;
      a = c[0];
      c = v(c);
      for (var d = c.next(); !d.done; d = c.next())
        (d = d.value),
          "variant" === d.type && d.bandwidth > a.bandwidth && (a = d);
      switch (b) {
        case fi:
          return a.videoBandwidth || NaN;
        case gi:
          return a.audioBandwidth || NaN;
        default:
          return a.bandwidth;
      }
    }
    function pi(a) {
      function b(p) {
        return 100 * c(p / 100);
      }
      function c(p) {
        return Math.round(p);
      }
      function d(p) {
        return !Number.isNaN(p) && null != p && "" !== p && !1 !== p;
      }
      var e = [],
        f = {
          br: c,
          d: c,
          bl: b,
          dl: b,
          mtp: b,
          nor: function (p) {
            return encodeURIComponent(p);
          },
          rtp: b,
          tb: c,
        },
        g = Object.keys(a || {}).sort();
      g = v(g);
      for (var h = g.next(); !h.done; h = g.next()) {
        h = h.value;
        var k = a[h];
        if (d(k) && ("v" !== h || 1 !== k) && ("pr" != h || 1 !== k)) {
          var l = f[h];
          l && (k = l(k));
          l = typeof k;
          var m = void 0;
          m =
            "string" === l && "ot" !== h && "sf" !== h && "st" !== h
              ? h + "=" + JSON.stringify(k)
              : "boolean" === l
              ? h
              : "symbol" === l
              ? h + "=" + k.description
              : h + "=" + k;
          e.push(m);
        }
      }
      return e.join(",");
    }
    function ti(a) {
      var b = Object.keys(a),
        c = {},
        d = ["Object", "Request", "Session", "Status"],
        e = [{}, {}, {}, {}],
        f = {
          br: 0,
          d: 0,
          ot: 0,
          tb: 0,
          bl: 1,
          dl: 1,
          mtp: 1,
          nor: 1,
          nrr: 1,
          su: 1,
          cid: 2,
          pr: 2,
          sf: 2,
          sid: 2,
          st: 2,
          v: 2,
          bs: 3,
          rtp: 3,
        };
      b = v(b);
      for (var g = b.next(); !g.done; g = b.next())
        (g = g.value), (e[null != f[g] ? f[g] : 1][g] = a[g]);
      for (a = 0; a < e.length; a++) (f = pi(e[a])) && (c["CMCD-" + d[a]] = f);
      return c;
    }
    function qi(a, b) {
      if (!b || a.includes("offline:")) return a;
      a = new $b(a);
      a.g.set("CMCD", b);
      return a.toString();
    }
    var oi = "m",
      gi = "a",
      fi = "v",
      hi = "av",
      ui = "i",
      si = "c",
      ii = "tt",
      di = "v",
      ci = "l";
    M("shaka.util.CmcdManager.StreamingFormat", {
      ag: "d",
      cg: "h",
      Pd: "s",
      dg: "o",
    });
    function vi(a, b, c, d, e) {
      a = Sg(a, d, e);
      if (0 != b || null != c)
        a.headers.Range = c ? "bytes=" + b + "-" + c : "bytes=" + b + "-";
      return a;
    }
    function wi(a) {
      this.g = !1;
      this.h = new vc();
      this.i = a;
    }
    wi.prototype.destroy = function () {
      var a = this;
      if (this.g) return this.h;
      this.g = !0;
      return this.i().then(
        function () {
          a.h.resolve();
        },
        function () {
          a.h.resolve();
        }
      );
    };
    function xi(a, b) {
      if (a.g) {
        if (b instanceof O && 7003 == b.code) throw b;
        throw new O(2, 7, 7003, b);
      }
    }
    function yi() {
      this.g = new Gd();
    }
    q = yi.prototype;
    q.release = function () {
      this.Na();
      this.g = null;
    };
    q.G = function (a, b, c, d) {
      this.g && ((a = new zi(a, b, c, d)), this.g.push(b, a));
    };
    q.la = function (a, b, c, d) {
      function e(g) {
        f.Tb(a, b, e);
        c(g);
      }
      var f = this;
      this.G(a, b, e, d);
    };
    q.Tb = function (a, b, c) {
      if (this.g) {
        var d = this.g.get(b) || [];
        d = v(d);
        for (var e = d.next(); !e.done; e = d.next())
          (e = e.value),
            e.target != a ||
              (c != e.listener && c) ||
              (e.Tb(), this.g.remove(b, e));
      }
    };
    q.Na = function () {
      if (this.g) {
        var a = this.g,
          b = [],
          c;
        for (c in a.g) b.push.apply(b, ka(a.g[c]));
        a = v(b);
        for (b = a.next(); !b.done; b = a.next()) b.value.Tb();
        this.g.g = {};
      }
    };
    M("shaka.util.EventManager", yi);
    yi.prototype.removeAll = yi.prototype.Na;
    yi.prototype.unlisten = yi.prototype.Tb;
    yi.prototype.listenOnce = yi.prototype.la;
    yi.prototype.listen = yi.prototype.G;
    yi.prototype.release = yi.prototype.release;
    function zi(a, b, c, d) {
      this.target = a;
      this.type = b;
      this.listener = c;
      this.g = Ai(a, d);
      this.target.addEventListener(b, c, this.g);
    }
    zi.prototype.Tb = function () {
      this.target.removeEventListener(this.type, this.listener, this.g);
      this.listener = this.target = null;
      this.g = !1;
    };
    function Ai(a, b) {
      if (void 0 == b) return !1;
      if ("boolean" == typeof b) return b;
      var c = new Set(["passive", "capture"]);
      Object.keys(b).filter(function (d) {
        return !c.has(d);
      });
      return Bi(a) ? b : b.capture || !1;
    }
    function Bi(a) {
      var b = Ci;
      if (void 0 == b) {
        b = !1;
        try {
          var c = {},
            d = {
              get: function () {
                b = !0;
                return !1;
              },
            };
          Object.defineProperty(c, "passive", d);
          Object.defineProperty(c, "capture", d);
          d = function () {};
          a.addEventListener("test", d, c);
          a.removeEventListener("test", d, c);
        } catch (e) {
          b = !1;
        }
        Ci = b;
      }
      return b || !1;
    }
    var Ci = void 0;
    function Di() {}
    function Ei(a) {
      a = Rc(a);
      return new $b(a).Ka;
    }
    function Fi(a, b, c) {
      function d(h) {
        Mb(f).setUint32(g, h.byteLength, !0);
        g += 4;
        f.set(N(h), g);
        g += h.byteLength;
      }
      if (!c || !c.byteLength) throw new O(2, 6, 6015);
      var e;
      "string" == typeof b ? (e = Tc(b, !0)) : (e = b);
      a = Rc(a);
      a = Tc(a, !0);
      var f = new Uint8Array(12 + a.byteLength + e.byteLength + c.byteLength),
        g = 0;
      d(a);
      d(e);
      d(c);
      return f;
    }
    M("shaka.util.FairPlayUtils", Di);
    Di.initDataTransform = Fi;
    Di.defaultGetContentId = Ei;
    function Gi(a, b) {
      a = v(a);
      for (var c = a.next(); !c.done; c = a.next()) if (!b(c.value)) return !1;
      return !0;
    }
    function Hi(a) {
      for (
        var b = new Map(), c = v(Object.keys(a)), d = c.next();
        !d.done;
        d = c.next()
      )
        (d = d.value), b.set(d, a[d]);
      return b;
    }
    function Ii(a) {
      var b = {};
      a.forEach(function (c, d) {
        b[d] = c;
      });
      return b;
    }
    function Ji(a, b) {
      if (a || b) {
        if ((a && !b) || (b && !a)) return !1;
      } else return !0;
      if (a.size != b.size) return !1;
      a = v(a);
      for (var c = a.next(); !c.done; c = a.next()) {
        var d = v(c.value);
        c = d.next().value;
        d = d.next().value;
        if (!b.has(c)) return !1;
        c = b.get(c);
        if (c != d || void 0 == c) return !1;
      }
      return !0;
    }
    function Ki(a, b, c) {
      var d = this;
      b = void 0 === b ? 1 : b;
      c = void 0 === c ? { mediaKeysInstance: null, activeSessions: null } : c;
      this.B = a;
      this.F = new Set();
      this.s = c.mediaKeysInstance;
      this.ma = !!c.mediaKeysInstance;
      this.l = null;
      this.M = !1;
      this.H = 0;
      this.g = null;
      this.o = new yi();
      this.i = Li(c.activeSessions || new Map());
      this.C = [];
      this.u = new vc();
      this.h = null;
      this.m = function (e) {
        d.u.reject(e);
        a.onError(e);
      };
      this.ca = new Map();
      this.V = new Map();
      this.O = new Q(function () {
        return Mi(d);
      });
      this.S = !1;
      this.J = [];
      this.N = !1;
      this.Y = new Q(function () {
        Ni(d);
      }).Ga(b);
      this.u.catch(function () {});
      this.j = new wi(function () {
        return Oi(d);
      });
      this.da = !1;
    }
    q = Ki.prototype;
    q.destroy = function () {
      return this.j.destroy();
    };
    function Oi(a) {
      return L(function (b) {
        switch (b.g) {
          case 1:
            return (
              a.o.release(),
              (a.o = null),
              a.u.reject(),
              a.Y.stop(),
              (a.Y = null),
              a.O.stop(),
              (a.O = null),
              y(b, Pi(a), 2)
            );
          case 2:
            if (!a.l) {
              b.A(3);
              break;
            }
            E(b, 4);
            return y(b, a.l.setMediaKeys(null), 6);
          case 6:
            wa(b, 5);
            break;
          case 4:
            F(b);
          case 5:
            a.l = null;
          case 3:
            (a.g = null),
              a.F.clear(),
              (a.s = null),
              (a.C = []),
              (a.h = null),
              (a.m = function () {}),
              (a.B = null),
              (a.da = !1),
              B(b);
        }
      });
    }
    q.configure = function (a) {
      this.h = a;
    };
    function Qi(a, b, c) {
      a.C = c;
      a.S = 0 < c.length;
      return Ri(a, b);
    }
    function Ri(a, b) {
      var c, d, e, f, g, h, k, l, m, p, n, r, u, t, w, x, C, z, A, H;
      return L(function (G) {
        if (1 == G.g) {
          if ((c = Si(a)))
            for (d = v(b), e = d.next(); !e.done; e = d.next())
              (f = e.value),
                f.video && (f.video.drmInfos = [c]),
                f.audio && (f.audio.drmInfos = [c]);
          g = b.some(function (D) {
            return (D.video && D.video.drmInfos.length) ||
              (D.audio && D.audio.drmInfos.length)
              ? !0
              : !1;
          });
          g || ((h = Hi(a.h.servers)), Ti(b, h));
          k = new Set();
          l = v(b);
          for (e = l.next(); !e.done; e = l.next())
            for (
              m = e.value, p = Ui(m), n = v(p), r = n.next();
              !r.done;
              r = n.next()
            )
              (u = r.value), k.add(u);
          t = v(k);
          for (r = t.next(); !r.done; r = t.next())
            (w = r.value),
              Vi(
                w,
                Hi(a.h.servers),
                Hi(a.h.advanced || {}),
                a.h.keySystemsMapping
              );
          x = function (D, I) {
            var J = [];
            D = v(D);
            for (var K = D.next(); !K.done; K = D.next()) {
              K = K.value;
              for (
                var P = v(K[I].split(",")), aa = P.next();
                !aa.done;
                aa = P.next()
              ) {
                var ia = {};
                J.push(Object.assign({}, K, ((ia[I] = aa.value), ia)));
              }
            }
            return J;
          };
          C = v(b);
          for (e = C.next(); !e.done; e = C.next())
            (z = e.value),
              z.video &&
                ((z.video.drmInfos = x(z.video.drmInfos, "videoRobustness")),
                (z.video.drmInfos = x(z.video.drmInfos, "audioRobustness"))),
              z.audio &&
                ((z.audio.drmInfos = x(z.audio.drmInfos, "videoRobustness")),
                (z.audio.drmInfos = x(z.audio.drmInfos, "audioRobustness")));
          return y(G, Zd(b, a.S, a.da, a.h.preferredKeySystems), 2);
        }
        A = g || Object.keys(a.h.servers).length;
        if (!A) return (a.M = !0), G.return(Promise.resolve());
        H = Wi(a, b);
        return G.return(g ? H : H.catch(function () {}));
      });
    }
    q.Fb = function (a) {
      var b = this,
        c,
        d;
      return L(function (e) {
        if (1 == e.g) {
          if (!b.s)
            return (
              b.o.la(a, "encrypted", function () {
                b.m(new O(2, 6, 6010));
              }),
              e.return()
            );
          b.l = a;
          b.o.la(b.l, "play", function () {
            for (var f = v(b.J), g = f.next(); !g.done; g = f.next())
              Xi(b, g.value);
            b.N = !0;
            b.J = [];
          });
          "webkitCurrentPlaybackTargetIsWireless" in b.l &&
            b.o.G(
              b.l,
              "webkitcurrentplaybacktargetiswirelesschanged",
              function () {
                return Pi(b);
              }
            );
          c = b.l.setMediaKeys(b.s);
          c = c.catch(function (f) {
            return Promise.reject(new O(2, 6, 6003, f.message));
          });
          return y(e, c, 2);
        }
        xi(b.j);
        Yi(b);
        b.g.initData.length ||
          b.C.length ||
          ((d = function (f) {
            return Zi(b, f.initDataType, N(f.initData));
          }),
          b.o.G(b.l, "encrypted", d));
        B(e);
      });
    };
    function $i(a) {
      var b, c, d, e, f;
      return L(function (g) {
        switch (g.g) {
          case 1:
            if (!a.s || !a.g) return g.return();
            if (
              !a.g.serverCertificateUri ||
              (a.g.serverCertificate && a.g.serverCertificate.length)
            ) {
              g.A(2);
              break;
            }
            b = Sg([a.g.serverCertificateUri], a.h.retryParameters);
            E(g, 3);
            c = a.B.Mb.request(5, b);
            return y(g, c.promise, 5);
          case 5:
            d = g.h;
            a.g.serverCertificate = N(d.data);
            wa(g, 4);
            break;
          case 3:
            throw ((e = F(g)), new O(2, 6, 6017, e));
          case 4:
            if (a.j.g) return g.return();
          case 2:
            if (!a.g.serverCertificate || !a.g.serverCertificate.length)
              return g.return();
            E(g, 6);
            return y(g, a.s.setServerCertificate(a.g.serverCertificate), 8);
          case 8:
            wa(g, 0);
            break;
          case 6:
            throw ((f = F(g)), new O(2, 6, 6004, f.message));
        }
      });
    }
    function Yi(a) {
      for (
        var b = (a.g ? a.g.initData : []) || [], c = v(b), d = c.next();
        !d.done;
        d = c.next()
      )
        (d = d.value), Zi(a, d.initDataType, d.initData);
      c = v(a.C);
      for (d = c.next(); !d.done; d = c.next()) aj(a, d.value);
      b.length || a.C.length || a.u.resolve();
    }
    function Zi(a, b, c) {
      var d = a.i.values();
      d = v(d);
      for (var e = d.next(); !e.done; e = d.next())
        if (Ib(c, e.value.initData) && !Dc("Tizen 2")) return;
      bj(a, b, c, a.g.sessionType);
    }
    function cj(a) {
      return a ? !!a.match(/^com\.(microsoft|chromecast)\.playready/) : !1;
    }
    q.gd = function () {
      var a = Infinity,
        b = this.i.keys();
      b = v(b);
      for (var c = b.next(); !c.done; c = b.next())
        (c = c.value), isNaN(c.expiration) || (a = Math.min(a, c.expiration));
      return a;
    };
    q.zc = function () {
      return Ii(this.V);
    };
    q.hd = function () {
      var a = new Map(),
        b = Array.from(this.i.entries());
      b = v(b);
      for (var c = b.next(); !c.done; c = b.next()) {
        var d = v(c.value);
        c = d.next().value;
        d = d.next().value;
        a.set(c, d.initData);
      }
      return { mediaKeysInstance: this.s, activeSessions: a };
    };
    function Li(a) {
      var b = new Map();
      a = Array.from(a.entries());
      a = v(a);
      for (var c = a.next(); !c.done; c = a.next()) {
        var d = v(c.value);
        c = d.next().value;
        d = d.next().value;
        b.set(c, { loaded: !0, initData: d, lg: c, Kc: Infinity, ab: null });
      }
      return b;
    }
    function Wi(a, b) {
      var c, d, e, f, g, h, k, l, m, p, n, r, u;
      return L(function (t) {
        switch (t.g) {
          case 1:
            c = new Map();
            if (b.length) {
              d = dj(a, b, c);
              t.A(2);
              break;
            }
            return y(t, ej(a), 3);
          case 3:
            d = t.h;
          case 2:
            e = d;
            if (!e) throw new O(2, 6, 6001);
            xi(a.j);
            E(t, 4);
            a.F.clear();
            f = e.getConfiguration();
            g = f.audioCapabilities || [];
            h = f.videoCapabilities || [];
            k = v(g);
            for (l = k.next(); !l.done; l = k.next())
              (m = l.value), a.F.add(m.contentType.toLowerCase());
            p = v(h);
            for (l = p.next(); !l.done; l = p.next())
              (n = l.value), a.F.add(n.contentType.toLowerCase());
            if (b.length) {
              var w = e.keySystem;
              var x = c.get(e.keySystem);
              var C = [],
                z = [],
                A = [],
                H = [],
                G = new Set();
              fj(x, C, A, z, H, G);
              var D = a.S ? "persistent-license" : "temporary";
              w = {
                keySystem: w,
                licenseServerUri: C[0],
                distinctiveIdentifierRequired:
                  x[0].distinctiveIdentifierRequired,
                persistentStateRequired: x[0].persistentStateRequired,
                sessionType: x[0].sessionType || D,
                audioRobustness: x[0].audioRobustness || "",
                videoRobustness: x[0].videoRobustness || "",
                serverCertificate: A[0],
                serverCertificateUri: z[0],
                initData: H,
                keyIds: G,
              };
              x = v(x);
              for (C = x.next(); !C.done; C = x.next())
                (C = C.value),
                  C.distinctiveIdentifierRequired &&
                    (w.distinctiveIdentifierRequired =
                      C.distinctiveIdentifierRequired),
                  C.persistentStateRequired &&
                    (w.persistentStateRequired = C.persistentStateRequired);
              x = w;
            } else (x = e.keySystem), (w = (void 0).get(e.keySystem)), (C = []), (z = []), (A = []), (H = []), (G = new Set()), fj(w.drmInfos, C, A, z, H, G), (x = { keySystem: x, licenseServerUri: C[0], distinctiveIdentifierRequired: "required" == w.distinctiveIdentifier, persistentStateRequired: "required" == w.persistentState, sessionType: w.sessionTypes[0] || "temporary", audioRobustness: (w.audioCapabilities ? w.audioCapabilities[0].robustness : "") || "", videoRobustness: (w.videoCapabilities ? w.videoCapabilities[0].robustness : "") || "", serverCertificate: A[0], serverCertificateUri: z[0], initData: H, keyIds: G });
            a.g = x;
            if (!a.g.licenseServerUri) throw new O(2, 6, 6012, a.g.keySystem);
            return a.ma
              ? ((a.M = !0), t.return())
              : y(t, e.createMediaKeys(), 6);
          case 6:
            return (r = t.h), xi(a.j), (a.s = r), (a.M = !0), y(t, $i(a), 7);
          case 7:
            xi(a.j);
            wa(t, 0);
            break;
          case 4:
            u = F(t);
            xi(a.j, u);
            a.g = null;
            a.F.clear();
            if (u instanceof O) throw u;
            throw new O(2, 6, 6002, u.message);
        }
      });
    }
    function dj(a, b, c) {
      for (var d = v(b), e = d.next(); !e.done; e = d.next()) {
        var f = v(Ui(e.value));
        for (e = f.next(); !e.done; e = f.next())
          (e = e.value),
            c.has(e.keySystem) || c.set(e.keySystem, []),
            c.get(e.keySystem).push(e);
      }
      if (1 == c.size && c.has("")) throw new O(2, 6, 6e3);
      d = {};
      a = v(a.h.preferredKeySystems);
      for (e = a.next(); !e.done; d = { Zc: d.Zc }, e = a.next())
        for (d.Zc = e.value, f = v(b), e = f.next(); !e.done; e = f.next())
          if (
            (e = e.value.decodingInfos.find(
              (function (l) {
                return function (m) {
                  return (
                    m.supported &&
                    null != m.keySystemAccess &&
                    m.keySystemAccess.keySystem == l.Zc
                  );
                };
              })(d)
            ))
          )
            return e.keySystemAccess;
      a = v([!0, !1]);
      for (e = a.next(); !e.done; e = a.next())
        for (d = e.value, f = v(b), e = f.next(); !e.done; e = f.next()) {
          var g = v(e.value.decodingInfos);
          for (e = g.next(); !e.done; e = g.next()) {
            var h = e.value;
            if (h.supported && h.keySystemAccess) {
              e = c.get(h.keySystemAccess.keySystem);
              var k = v(e);
              for (e = k.next(); !e.done; e = k.next())
                if (!!e.value.licenseServerUri == d) return h.keySystemAccess;
            }
          }
        }
      return null;
    }
    function ej(a) {
      var b, c, d, e, f, g, h, k, l, m, p, n, r, u, t;
      return L(function (w) {
        switch (w.g) {
          case 1:
            if (1 == (void 0).size && (void 0).has("")) throw new O(2, 6, 6e3);
            c = v((void 0).values());
            for (d = c.next(); !d.done; d = c.next())
              (e = d.value),
                0 == e.audioCapabilities.length && delete e.audioCapabilities,
                0 == e.videoCapabilities.length && delete e.videoCapabilities;
            f = v(a.h.preferredKeySystems);
            g = f.next();
          case 2:
            if (g.done) {
              w.A(4);
              break;
            }
            h = g.value;
            if (!(void 0).has(h)) {
              w.A(3);
              break;
            }
            k = (void 0).get(h);
            E(w, 6);
            return y(w, cd(h, [k]), 8);
          case 8:
            return (b = w.h), w.return(b);
          case 6:
            F(w);
          case 7:
            xi(a.j);
          case 3:
            g = f.next();
            w.A(2);
            break;
          case 4:
            (l = v([!0, !1])), (m = l.next());
          case 9:
            if (m.done) {
              w.A(11);
              break;
            }
            p = m.value;
            n = v((void 0).keys());
            g = n.next();
          case 12:
            if (g.done) {
              m = l.next();
              w.A(9);
              break;
            }
            r = g.value;
            u = (void 0).get(r);
            t = u.drmInfos.some(function (x) {
              return !!x.licenseServerUri;
            });
            if (t != p) {
              w.A(13);
              break;
            }
            E(w, 15);
            return y(w, cd(r, [u]), 17);
          case 17:
            return (b = w.h), w.return(b);
          case 15:
            F(w);
          case 16:
            xi(a.j);
          case 13:
            g = n.next();
            w.A(12);
            break;
          case 11:
            return w.return(b);
        }
      });
    }
    function Si(a) {
      a = Hi(a.h.clearKeys);
      if (0 == a.size) return null;
      var b = [],
        c = [];
      a.forEach(function (e, f) {
        f = Yc(f);
        e = Yc(e);
        e = { kty: "oct", kid: Wc(f, !1), k: Wc(e, !1) };
        b.push(e);
        c.push(e.kid);
      });
      a = JSON.stringify({ keys: b });
      var d = JSON.stringify({ kids: c });
      d = [{ initData: N(Sc(d)), initDataType: "keyids" }];
      return {
        keySystem: "org.w3.clearkey",
        licenseServerUri: "data:application/json;base64," + window.btoa(a),
        distinctiveIdentifierRequired: !1,
        persistentStateRequired: !1,
        audioRobustness: "",
        videoRobustness: "",
        serverCertificate: null,
        serverCertificateUri: "",
        sessionType: "",
        initData: d,
        keyIds: new Set(c),
      };
    }
    function aj(a, b) {
      var c, d, e, f, g;
      L(function (h) {
        switch (h.g) {
          case 1:
            try {
              c = a.s.createSession("persistent-license");
            } catch (k) {
              return (
                (d = new O(2, 6, 6005, k.message)),
                a.m(d),
                h.return(Promise.reject(d))
              );
            }
            a.o.G(c, "message", function (k) {
              a.l && a.h.delayLicenseRequestUntilPlayed && a.l.paused && !a.N
                ? a.J.push(k)
                : Xi(a, k);
            });
            a.o.G(c, "keystatuseschange", function (k) {
              return gj(a, k);
            });
            e = {
              initData: null,
              loaded: !1,
              Kc: Infinity,
              ab: null,
              type: "persistent-license",
            };
            a.i.set(c, e);
            E(h, 2);
            return y(h, c.load(b), 4);
          case 4:
            f = h.h;
            xi(a.j);
            if (!f)
              return (
                a.i.delete(c),
                a.m(new O(2, 6, 6013)),
                h.return(Promise.resolve())
              );
            e.loaded = !0;
            hj(a) && a.u.resolve();
            return h.return(c);
          case 2:
            (g = F(h)),
              xi(a.j, g),
              a.i.delete(c),
              a.m(new O(2, 6, 6005, g.message));
          case 3:
            return h.return(Promise.resolve());
        }
      });
    }
    function bj(a, b, c, d) {
      try {
        var e = a.s.createSession(d);
      } catch (f) {
        a.m(new O(2, 6, 6005, f.message));
        return;
      }
      a.o.G(e, "message", function (f) {
        a.l && a.h.delayLicenseRequestUntilPlayed && a.l.paused && !a.N
          ? a.J.push(f)
          : Xi(a, f);
      });
      a.o.G(e, "keystatuseschange", function (f) {
        return gj(a, f);
      });
      a.i.set(e, { initData: c, loaded: !1, Kc: Infinity, ab: null, type: d });
      try {
        c = a.h.initDataTransform(c, b, a.g);
      } catch (f) {
        b = f;
        f instanceof O || (b = new O(2, 6, 6016, f));
        a.m(b);
        return;
      }
      a.h.logLicenseExchange && Wc(c);
      e.generateRequest(b, c).catch(function (f) {
        if (!a.j.g) {
          a.i.delete(e);
          var g = f.errorCode;
          if (g && g.systemCode) {
            var h = g.systemCode;
            0 > h && (h += Math.pow(2, 32));
            h = "0x" + h.toString(16);
          }
          a.m(new O(2, 6, 6006, f.message, f, h));
        }
      });
    }
    function ij(a, b, c) {
      "skd" == b && ((b = c.serverCertificate), (c = Ei(a)), (a = Fi(a, c, b)));
      return a;
    }
    function Xi(a, b) {
      var c, d, e, f, g, h, k, l, m, p, n, r, u, t;
      L(function (w) {
        switch (w.g) {
          case 1:
            return (
              (c = b.target),
              a.h.logLicenseExchange && Wc(b.message),
              (d = a.i.get(c)),
              (e = a.g.licenseServerUri),
              (f = a.h.advanced[a.g.keySystem]),
              "individualization-request" == b.messageType &&
                f &&
                f.individualizationServer &&
                (e = f.individualizationServer),
              (g = Sg([e], a.h.retryParameters)),
              (g.body = b.message),
              (g.method = "POST"),
              (g.licenseRequestType = b.messageType),
              (g.sessionId = c.sessionId),
              cj(a.g.keySystem) && jj(g),
              (h = Date.now()),
              E(w, 2),
              (l = a.B.Mb.request(2, g)),
              y(w, l.promise, 4)
            );
          case 4:
            k = w.h;
            wa(w, 3);
            break;
          case 2:
            return (
              (m = F(w)),
              (p = new O(2, 6, 6007, m)),
              a.m(p),
              d && d.ab && d.ab.reject(p),
              w.return()
            );
          case 3:
            if (a.j.g) return w.return();
            a.H += (Date.now() - h) / 1e3;
            a.h.logLicenseExchange && Wc(k.data);
            E(w, 5);
            return y(w, c.update(k.data), 7);
          case 7:
            wa(w, 6);
            break;
          case 5:
            return (
              (n = F(w)),
              (r = new O(2, 6, 6008, n.message)),
              a.m(r),
              d && d.ab && d.ab.reject(r),
              w.return()
            );
          case 6:
            if (a.j.g) return w.return();
            u = new Ig("drmsessionupdate");
            a.B.onEvent(u);
            d &&
              (d.ab && d.ab.resolve(),
              (t = new Q(function () {
                d.loaded = !0;
                hj(a) && a.u.resolve();
              })),
              t.X(kj));
            B(w);
        }
      });
    }
    function jj(a) {
      var b = Oc(a.body, !0, !0);
      if (b.includes("PlayReadyKeyMessage")) {
        b = new DOMParser().parseFromString(b, "application/xml");
        for (
          var c = v(b.getElementsByTagName("HttpHeader")), d = c.next();
          !d.done;
          d = c.next()
        )
          (d = d.value),
            (a.headers[d.getElementsByTagName("name")[0].textContent] =
              d.getElementsByTagName("value")[0].textContent);
        a.body = Xc(b.getElementsByTagName("Challenge")[0].textContent);
      } else a.headers["Content-Type"] = "text/xml; charset=utf-8";
    }
    function gj(a, b) {
      b = b.target;
      var c = a.i.get(b),
        d = !1;
      b.keyStatuses.forEach(function (f, g) {
        if ("string" == typeof g) {
          var h = g;
          g = f;
          f = h;
        }
        if (cj(a.g.keySystem) && 16 == g.byteLength && (Bc() || Hc())) {
          h = Mb(g);
          var k = h.getUint32(0, !0),
            l = h.getUint16(4, !0),
            m = h.getUint16(6, !0);
          h.setUint32(0, k, !1);
          h.setUint16(4, l, !1);
          h.setUint16(6, m, !1);
        }
        "status-pending" != f && (c.loaded = !0);
        "expired" == f && (d = !0);
        g = Zc(g);
        a.ca.set(g, f);
      });
      var e = b.expiration - Date.now();
      (0 > e || (d && 1e3 > e)) &&
        c &&
        !c.ab &&
        (a.i.delete(b), b.close().catch(function () {}));
      hj(a) && (a.u.resolve(), a.O.X(lj));
    }
    function Mi(a) {
      var b = a.ca,
        c = a.V;
      c.clear();
      b.forEach(function (d, e) {
        return c.set(e, d);
      });
      b = Array.from(c.values());
      b.length &&
        b.every(function (d) {
          return "expired" == d;
        }) &&
        a.m(new O(2, 6, 6014));
      a.B.Bf(Ii(c));
    }
    function mj() {
      var a, b, c, d, e, f, g, h;
      return L(function (k) {
        return 1 == k.g
          ? ((a =
              "org.w3.clearkey com.widevine.alpha com.microsoft.playready com.microsoft.playready.recommendation com.apple.fps.3_0 com.apple.fps.2_0 com.apple.fps.1_0 com.apple.fps com.adobe.primetime".split(
                " "
              )),
            (b = [
              { contentType: 'video/mp4; codecs="avc1.42E01E"' },
              { contentType: 'video/webm; codecs="vp8"' },
            ]),
            (c = { initDataTypes: ["cenc"], videoCapabilities: b }),
            (d = {
              videoCapabilities: b,
              persistentState: "required",
              sessionTypes: ["persistent-license"],
            }),
            (e = [d, c]),
            (f = new Map()),
            (g = function (l) {
              var m, p, n;
              return L(function (r) {
                switch (r.g) {
                  case 1:
                    return E(r, 2), y(r, cd(l, e), 4);
                  case 4:
                    return (
                      (m = r.h),
                      (n = (p = m.getConfiguration().sessionTypes)
                        ? p.includes("persistent-license")
                        : !1),
                      Dc("Tizen 3") && (n = !1),
                      f.set(l, { persistentState: n }),
                      y(r, m.createMediaKeys(), 5)
                    );
                  case 5:
                    wa(r, 0);
                    break;
                  case 2:
                    F(r), f.set(l, null), B(r);
                }
              });
            }),
            (h = a.map(function (l) {
              return g(l);
            })),
            y(k, Promise.all(h), 2))
          : k.return(Ii(f));
      });
    }
    function nj(a) {
      var b;
      return L(function (c) {
        if (1 == c.g)
          return (
            (b = new Promise(function (d, e) {
              new Q(e).X(oj);
            })),
            E(c, 2),
            y(c, Promise.race([Promise.all([a.close(), a.closed]), b]), 4)
          );
        if (2 != c.g) return wa(c, 0);
        F(c);
        B(c);
      });
    }
    function Pi(a) {
      var b;
      return L(function (c) {
        if (a.h.preserveMediaKeySessions) return c.return();
        b = Array.from(a.i.entries());
        a.i.clear();
        return y(
          c,
          Promise.all(
            b.map(function (d) {
              d = v(d);
              var e = d.next().value,
                f = d.next().value;
              return L(function (g) {
                if (1 == g.g)
                  return (
                    E(g, 2),
                    a.C.includes(e.sessionId) || "persistent-license" !== f.type
                      ? y(g, nj(e), 5)
                      : y(g, e.remove(), 5)
                  );
                if (2 != g.g) return wa(g, 0);
                F(g);
                B(g);
              });
            })
          ),
          0
        );
      });
    }
    function pj(a, b) {
      if (!a.length) return b;
      if (!b.length) return a;
      var c = [];
      a = v(a);
      for (var d = a.next(); !d.done; d = a.next()) {
        d = d.value;
        for (
          var e = {}, f = v(b), g = f.next();
          !g.done;
          e = { Ha: e.Ha }, g = f.next()
        )
          if (((g = g.value), d.keySystem == g.keySystem)) {
            e.Ha = [];
            e.Ha = e.Ha.concat(d.initData || []);
            e.Ha = e.Ha.concat(g.initData || []);
            e.Ha = e.Ha.filter(
              (function (h) {
                return function (k, l) {
                  return (
                    void 0 === k.keyId ||
                    l ===
                      h.Ha.findIndex(function (m) {
                        return m.keyId === k.keyId;
                      })
                  );
                };
              })(e)
            );
            f =
              d.keyIds && g.keyIds
                ? new Set([].concat(ka(d.keyIds), ka(g.keyIds)))
                : d.keyIds || g.keyIds;
            c.push({
              keySystem: d.keySystem,
              licenseServerUri: d.licenseServerUri || g.licenseServerUri,
              distinctiveIdentifierRequired:
                d.distinctiveIdentifierRequired ||
                g.distinctiveIdentifierRequired,
              persistentStateRequired:
                d.persistentStateRequired || g.persistentStateRequired,
              videoRobustness: d.videoRobustness || g.videoRobustness,
              audioRobustness: d.audioRobustness || g.audioRobustness,
              serverCertificate: d.serverCertificate || g.serverCertificate,
              serverCertificateUri:
                d.serverCertificateUri || g.serverCertificateUri,
              initData: e.Ha,
              keyIds: f,
            });
            break;
          }
      }
      return c;
    }
    function Ui(a) {
      return (a.video ? a.video.drmInfos : []).concat(
        a.audio ? a.audio.drmInfos : []
      );
    }
    function Ni(a) {
      a.i.forEach(function (b, c) {
        var d = b.Kc,
          e = c.expiration;
        isNaN(e) && (e = Infinity);
        e != d && (a.B.onExpirationUpdated(c.sessionId, e), (b.Kc = e));
      });
    }
    function hj(a) {
      a = a.i.values();
      return Gi(a, function (b) {
        return b.loaded;
      });
    }
    function Ti(a, b) {
      var c = [];
      b.forEach(function (d, e) {
        c.push({
          keySystem: e,
          licenseServerUri: d,
          distinctiveIdentifierRequired: !1,
          persistentStateRequired: !1,
          audioRobustness: "",
          videoRobustness: "",
          serverCertificate: null,
          serverCertificateUri: "",
          initData: [],
          keyIds: new Set(),
        });
      });
      a = v(a);
      for (b = a.next(); !b.done; b = a.next())
        (b = b.value),
          b.video && (b.video.drmInfos = c),
          b.audio && (b.audio.drmInfos = c);
    }
    function fj(a, b, c, d, e, f) {
      var g = {};
      a = v(a);
      for (var h = a.next(); !h.done; g = { ra: g.ra }, h = a.next()) {
        g.ra = h.value;
        b.includes(g.ra.licenseServerUri) || b.push(g.ra.licenseServerUri);
        d.includes(g.ra.serverCertificateUri) ||
          d.push(g.ra.serverCertificateUri);
        g.ra.serverCertificate &&
          (c.some(
            (function (m) {
              return function (p) {
                return Ib(p, m.ra.serverCertificate);
              };
            })(g)
          ) ||
            c.push(g.ra.serverCertificate));
        if (g.ra.initData) {
          h = {};
          for (
            var k = v(g.ra.initData), l = k.next();
            !l.done;
            h = { pc: h.pc }, l = k.next()
          )
            (h.pc = l.value),
              e.some(
                (function (m) {
                  return function (p) {
                    var n = m.pc;
                    return p.keyId && p.keyId == n.keyId
                      ? !0
                      : p.initDataType == n.initDataType &&
                          Ib(p.initData, n.initData);
                  };
                })(h)
              ) || e.push(h.pc);
        }
        if (g.ra.keyIds)
          for (h = v(g.ra.keyIds), k = h.next(); !k.done; k = h.next())
            f.add(k.value);
      }
    }
    function Vi(a, b, c, d) {
      var e = a.keySystem;
      if (e && ("org.w3.clearkey" != e || !a.licenseServerUri)) {
        b.size && ((b = b.get(e) || ""), (a.licenseServerUri = b));
        a.keyIds || (a.keyIds = new Set());
        if ((c = c.get(e)))
          a.distinctiveIdentifierRequired ||
            (a.distinctiveIdentifierRequired = c.distinctiveIdentifierRequired),
            a.persistentStateRequired ||
              (a.persistentStateRequired = c.persistentStateRequired),
            a.videoRobustness || (a.videoRobustness = c.videoRobustness),
            a.audioRobustness || (a.audioRobustness = c.audioRobustness),
            a.serverCertificate || (a.serverCertificate = c.serverCertificate),
            c.sessionType && (a.sessionType = c.sessionType),
            a.serverCertificateUri ||
              (a.serverCertificateUri = c.serverCertificateUri);
        d[e] && (a.keySystem = d[e]);
        window.cast &&
          window.cast.__platform__ &&
          "com.microsoft.playready" == e &&
          (a.keySystem = "com.chromecast.playready");
      }
    }
    var oj = 1,
      kj = 5,
      lj = 0.5,
      qj = new wc(function () {
        return Kb(new Uint8Array([0]));
      });
    function rj() {
      this.l = [];
      this.g = [];
      this.h = [];
      this.j = [];
      this.i = [];
      this.m = new Set();
    }
    rj.prototype.release = function () {
      for (
        var a = v(this.g.concat(this.h, this.j, this.i)), b = a.next();
        !b.done;
        b = a.next()
      )
        (b = b.value), b.segmentIndex && b.segmentIndex.release();
      this.g = [];
      this.h = [];
      this.j = [];
      this.i = [];
      this.l = [];
    };
    function sj(a, b, c, d) {
      d = void 0 === d ? !1 : d;
      var e,
        f,
        g,
        h,
        k,
        l,
        m,
        p,
        n,
        r,
        u,
        t,
        w,
        x,
        C,
        z,
        A,
        H,
        G,
        D,
        I,
        J,
        K,
        P,
        aa,
        ia,
        sa,
        za,
        fa,
        La,
        bb;
      return L(function (Fa) {
        switch (Fa.g) {
          case 1:
            e = tc;
            tj(b);
            uj(b);
            vj(b);
            wj(b);
            if (!c && 1 == b.length) {
              f = b[0];
              a.g = f.sc;
              a.h = f.Sc;
              a.j = f.textStreams;
              a.i = f.imageStreams;
              Fa.A(2);
              break;
            }
            g = d ? a.m.size : 0;
            h = -1;
            for (k = 0; k < b.length; k++)
              (l = b[k]), a.m.has(l.id) || (a.m.add(l.id), -1 == h && (h = k));
            if (-1 == h) return Fa.return();
            m = b.map(function (Ca) {
              return Ca.sc;
            });
            p = b.map(function (Ca) {
              return Ca.Sc;
            });
            n = b.map(function (Ca) {
              return Ca.textStreams;
            });
            r = b.map(function (Ca) {
              return Ca.imageStreams;
            });
            u = v(n);
            for (t = u.next(); !t.done; t = u.next())
              (w = t.value), w.push(xj(e.ha));
            x = v(r);
            for (C = x.next(); !C.done; C = x.next())
              (z = C.value), z.push(xj(e.rc));
            return y(Fa, yj(a.g, m, h, g), 3);
          case 3:
            return y(Fa, yj(a.h, p, h, g), 4);
          case 4:
            return y(Fa, yj(a.j, n, h, g), 5);
          case 5:
            return y(Fa, yj(a.i, r, h, g), 2);
          case 2:
            A = 0;
            H = [];
            if (a.h.length && a.g.length)
              for (P = v(a.g), aa = P.next(); !aa.done; aa = P.next())
                for (
                  ia = aa.value, sa = v(a.h), za = sa.next();
                  !za.done;
                  za = sa.next()
                )
                  (fa = za.value),
                    (La = pj(ia.drmInfos, fa.drmInfos)),
                    (ia.drmInfos.length && fa.drmInfos.length && !La.length) ||
                      ((bb = A++),
                      H.push({
                        id: bb,
                        language: ia.language,
                        primary: ia.primary,
                        audio: ia,
                        video: fa,
                        bandwidth: (ia.bandwidth || 0) + (fa.bandwidth || 0),
                        drmInfos: La,
                        allowedByApplication: !0,
                        allowedByKeySystem: !0,
                        decodingInfos: [],
                      }));
            else
              for (
                G = a.h.concat(a.g), D = v(G), I = D.next();
                !I.done;
                I = D.next()
              )
                (J = I.value),
                  (K = A++),
                  H.push({
                    id: K,
                    language: J.language,
                    primary: J.primary,
                    audio: J.type == e.eb ? J : null,
                    video: J.type == e.Ja ? J : null,
                    bandwidth: J.bandwidth || 0,
                    drmInfos: J.drmInfos,
                    allowedByApplication: !0,
                    allowedByKeySystem: !0,
                    decodingInfos: [],
                  });
            a.l = H;
            B(Fa);
        }
      });
    }
    function tj(a) {
      a = v(a);
      for (var b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        for (var c = [], d = v(b.sc), e = d.next(); !e.done; e = d.next()) {
          e = e.value;
          for (var f = !1, g = v(c), h = g.next(); !h.done; h = g.next())
            (h = h.value),
              e.id != h.id &&
                e.channelsCount == h.channelsCount &&
                e.language == h.language &&
                e.bandwidth == h.bandwidth &&
                e.label == h.label &&
                e.codecs == h.codecs &&
                e.mimeType == h.mimeType &&
                lb(e.roles, h.roles) &&
                e.audioSamplingRate == h.audioSamplingRate &&
                e.primary == h.primary &&
                (f = !0);
          f || c.push(e);
        }
        b.sc = c;
      }
    }
    function vj(a) {
      a = v(a);
      for (var b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        for (
          var c = [], d = v(b.textStreams), e = d.next();
          !e.done;
          e = d.next()
        ) {
          e = e.value;
          for (var f = !1, g = v(c), h = g.next(); !h.done; h = g.next())
            (h = h.value),
              e.id != h.id &&
                e.language == h.language &&
                e.label == h.label &&
                e.codecs == h.codecs &&
                e.mimeType == h.mimeType &&
                e.bandwidth == h.bandwidth &&
                lb(e.roles, h.roles) &&
                (f = !0);
          f || c.push(e);
        }
        b.textStreams = c;
      }
    }
    function uj(a) {
      a = v(a);
      for (var b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        for (var c = [], d = v(b.Sc), e = d.next(); !e.done; e = d.next()) {
          e = e.value;
          for (var f = !1, g = v(c), h = g.next(); !h.done; h = g.next())
            (h = h.value),
              e.id != h.id &&
                e.width == h.width &&
                e.frameRate == h.frameRate &&
                e.codecs == h.codecs &&
                e.mimeType == h.mimeType &&
                e.label == h.label &&
                lb(e.roles, h.roles) &&
                Ji(e.closedCaptions, h.closedCaptions) &&
                e.bandwidth == h.bandwidth &&
                (f = !0);
          f || c.push(e);
        }
        b.Sc = c;
      }
    }
    function wj(a) {
      a = v(a);
      for (var b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        for (
          var c = [], d = v(b.imageStreams), e = d.next();
          !e.done;
          e = d.next()
        ) {
          e = e.value;
          for (var f = !1, g = v(c), h = g.next(); !h.done; h = g.next())
            (h = h.value),
              e.id != h.id &&
                e.width == h.width &&
                e.codecs == h.codecs &&
                e.mimeType == h.mimeType &&
                (f = !0);
          f || c.push(e);
        }
        b.imageStreams = c;
      }
    }
    function yj(a, b, c, d) {
      var e = zj,
        f = Aj,
        g,
        h,
        k,
        l,
        m,
        p,
        n,
        r,
        u,
        t,
        w,
        x,
        C,
        z,
        A,
        H,
        G,
        D,
        I,
        J,
        K,
        P;
      return L(function (aa) {
        switch (aa.g) {
          case 1:
            g = tc;
            h = [];
            for (k = 0; k < d; k++) h.push(new Set());
            for (l = 0; l < b.length; l++)
              l >= c ? h.push(new Set(b[l])) : h.push(new Set());
            m = v(a);
            p = m.next();
          case 2:
            if (p.done) {
              aa.A(4);
              break;
            }
            n = p.value;
            return y(aa, Bj(n, b, c + d, f, h, 0 < d), 5);
          case 5:
            r = aa.h;
            if (!r) throw new O(2, 4, 4037);
            p = m.next();
            aa.A(2);
            break;
          case 4:
            u = v(h);
            for (t = u.next(); !t.done; t = u.next())
              for (w = t.value, x = v(w), C = x.next(); !C.done; C = x.next())
                (z = C.value), (A = Cj(z, b, e, f, h)) && a.push(A);
            for (H = 0; H < h.length; H++)
              if (((G = h[H]), !(H < d && 0 == G.size)))
                for (
                  D = {}, I = v(G), C = I.next();
                  !C.done;
                  D = { cb: D.cb }, C = I.next()
                )
                  if (
                    ((D.cb = C.value),
                    (J = D.cb.type == g.ha && !D.cb.language),
                    (K = D.cb.type == g.rc && !D.cb.tilesLayout),
                    !J &&
                      !K &&
                      (P = a.some(
                        (function (ia) {
                          return function (sa) {
                            return (
                              sa.mimeType == ia.cb.mimeType &&
                              ld(sa.codecs) == ld(ia.cb.codecs)
                            );
                          };
                        })(D)
                      )))
                  )
                    throw new O(2, 4, 4037);
            return aa.return(a);
        }
      });
    }
    function Bj(a, b, c, d, e, f) {
      return L(function (g) {
        if (1 == g.g)
          return (
            Dj(b, a, f),
            a.matchedStreams
              ? a.segmentIndex
                ? y(g, Ej(a, c), 2)
                : g.A(2)
              : g.return(!1)
          );
        Fj(a, c, d, e);
        return g.return(!0);
      });
    }
    function Ej(a, b) {
      var c, d, e, f, g, h, k;
      return L(function (l) {
        if (1 == l.g) {
          c = [];
          d = a.matchedStreams;
          e = v(d);
          for (f = e.next(); !f.done; f = e.next())
            (g = f.value),
              c.push(g.createSegmentIndex()),
              g.trickModeVideo &&
                !g.trickModeVideo.segmentIndex &&
                c.push(g.trickModeVideo.createSegmentIndex());
          return y(l, Promise.all(c), 2);
        }
        if (a.segmentIndex instanceof oh)
          for (h = b; h < d.length; h++)
            (k = d[h]), k.segmentIndex && a.segmentIndex.g.push(k.segmentIndex);
        B(l);
      });
    }
    function Cj(a, b, c, d, e) {
      var f = c(a);
      Dj(b, f);
      f.createSegmentIndex &&
        (f.createSegmentIndex = function () {
          return L(function (g) {
            if (f.segmentIndex) return g.A(0);
            f.segmentIndex = new oh();
            return y(g, Ej(f, 0), 0);
          });
        });
      if (!f.matchedStreams) return null;
      Fj(f, 0, d, e);
      return f;
    }
    function Fj(a, b, c, d) {
      for (var e = a.matchedStreams, f = 0; f < e.length; f++)
        if (f >= b) {
          var g = e[f];
          c(a, g);
          var h = !0;
          "audio" == a.type && 0 == Cd(a.language, g.language) && (h = !1);
          h && d[f].delete(g);
        }
    }
    function zj(a) {
      var b = Object.assign({}, a);
      b.originalId = null;
      b.createSegmentIndex = function () {
        return Promise.resolve();
      };
      b.closeSegmentIndex = function () {
        b.segmentIndex && (b.segmentIndex.release(), (b.segmentIndex = null));
        if (b.matchedStreams)
          for (var c = v(b.matchedStreams), d = c.next(); !d.done; d = c.next())
            (d = d.value),
              d.segmentIndex &&
                (d.segmentIndex.release(), (d.segmentIndex = null));
      };
      b.segmentIndex = null;
      b.emsgSchemeIdUris = [];
      b.keyIds = new Set();
      b.closedCaptions = null;
      b.trickModeVideo = null;
      return b;
    }
    function Aj(a, b) {
      a.roles = Array.from(new Set(a.roles.concat(b.roles)));
      b.emsgSchemeIdUris &&
        (a.emsgSchemeIdUris = Array.from(
          new Set(a.emsgSchemeIdUris.concat(b.emsgSchemeIdUris))
        ));
      a.keyIds = (function (f, g) {
        return new Set([].concat(ka(f), ka(g)));
      })(a.keyIds, b.keyIds);
      null == a.originalId
        ? (a.originalId = b.originalId)
        : (a.originalId += "," + (b.originalId || ""));
      var c = pj(a.drmInfos, b.drmInfos);
      if (b.drmInfos.length && a.drmInfos.length && !c.length)
        throw new O(2, 4, 4038);
      a.drmInfos = c;
      a.encrypted = a.encrypted || b.encrypted;
      if (b.closedCaptions) {
        a.closedCaptions || (a.closedCaptions = new Map());
        c = v(b.closedCaptions);
        for (var d = c.next(); !d.done; d = c.next()) {
          var e = v(d.value);
          d = e.next().value;
          e = e.next().value;
          a.closedCaptions.set(d, e);
        }
      }
      b.trickModeVideo
        ? (a.trickModeVideo ||
            ((a.trickModeVideo = zj(b.trickModeVideo)),
            (a.trickModeVideo.createSegmentIndex = function () {
              a.trickModeVideo.segmentIndex = a.segmentIndex.clone();
              return Promise.resolve();
            })),
          Aj(a.trickModeVideo, b.trickModeVideo))
        : a.trickModeVideo && Aj(a.trickModeVideo, b);
    }
    function Dj(a, b, c) {
      c = (void 0 === c ? 0 : c) ? b.matchedStreams : [];
      a = v(a);
      for (var d = a.next(); !d.done; d = a.next()) {
        var e = b,
          f = { audio: Gj, video: Gj, text: Hj, image: Ij }[e.type],
          g = { audio: Jj, video: Kj, text: Lj, image: Mj }[e.type],
          h = null;
        d = v(d.value);
        for (var k = d.next(); !k.done; k = d.next())
          (k = k.value), !f(e, k) || (h && !g(e, h, k)) || (h = k);
        e = h;
        if (!e) return;
        c.push(e);
      }
      b.matchedStreams = c;
    }
    function Gj(a, b) {
      var c;
      !(c = b.mimeType != a.mimeType || ld(b.codecs) != ld(a.codecs)) &&
        (c = a.drmInfos) &&
        ((a = a.drmInfos),
        (b = b.drmInfos),
        (c = !(a.length && b.length ? 0 < pj(a, b).length : 1)));
      return c ? !1 : !0;
    }
    function Hj(a, b) {
      return a.language
        ? b.language
          ? 0 == Cd(a.language, b.language) || b.kind != a.kind
            ? !1
            : !0
          : !0
        : !1;
    }
    function Ij(a) {
      return a.tilesLayout ? !0 : !1;
    }
    function Jj(a, b, c) {
      if (a.id == c.id) return !0;
      var d = Cd(a.language, b.language),
        e = Cd(a.language, c.language);
      if (e > d) return !0;
      if (e < d) return !1;
      if (!b.primary && c.primary) return !0;
      if (b.primary && !c.primary) return !1;
      if (a.roles.length)
        return (
          (d = b.roles.filter(function (f) {
            return a.roles.includes(f);
          })),
          (e = c.roles.filter(function (f) {
            return a.roles.includes(f);
          })),
          e.length > d.length
            ? !0
            : e.length < d.length
            ? !1
            : c.roles.length < b.roles.length
        );
      if (!c.roles.length && b.roles.length) return !0;
      if (c.roles.length && !b.roles.length) return !1;
      d = Nj(a.channelsCount, b.channelsCount, c.channelsCount);
      if (d == Oj) return !0;
      if (d == Pj) return !1;
      d = Nj(a.audioSamplingRate, b.audioSamplingRate, c.audioSamplingRate);
      return d == Oj
        ? !0
        : d == Pj
        ? !1
        : a.bandwidth && Qj(a.bandwidth, b.bandwidth, c.bandwidth) == Oj
        ? !0
        : !1;
    }
    function Kj(a, b, c) {
      if (a.id == c.id) return !0;
      var d = Nj(a.width * a.height, b.width * b.height, c.width * c.height);
      if (d == Oj) return !0;
      if (d == Pj) return !1;
      if (a.frameRate) {
        d = Nj(a.frameRate, b.frameRate, c.frameRate);
        if (d == Oj) return !0;
        if (d == Pj) return !1;
      }
      return a.bandwidth && Qj(a.bandwidth, b.bandwidth, c.bandwidth) == Oj
        ? !0
        : !1;
    }
    function Lj(a, b, c) {
      if (a.id == c.id) return !0;
      var d = Cd(a.language, b.language),
        e = Cd(a.language, c.language);
      if (e > d) return !0;
      if (e < d) return !1;
      if (!b.primary && c.primary) return !0;
      if (b.primary && !c.primary) return !1;
      if (a.roles.length) {
        d = b.roles.filter(function (f) {
          return a.roles.includes(f);
        });
        e = c.roles.filter(function (f) {
          return a.roles.includes(f);
        });
        if (e.length > d.length) return !0;
        if (e.length < d.length) return !1;
      } else {
        if (!c.roles.length && b.roles.length) return !0;
        if (c.roles.length && !b.roles.length) return !1;
      }
      return c.mimeType != a.mimeType ||
        c.codecs != a.codecs ||
        (b.mimeType == a.mimeType && b.codecs == a.codecs)
        ? !1
        : !0;
    }
    function Mj(a, b, c) {
      return a.id == c.id
        ? !0
        : Nj(a.width * a.height, b.width * b.height, c.width * c.height) == Oj
        ? !0
        : !1;
    }
    function xj(a) {
      return {
        id: 0,
        originalId: "",
        createSegmentIndex: function () {
          return Promise.resolve();
        },
        segmentIndex: new W([]),
        mimeType: "",
        codecs: "",
        encrypted: !1,
        drmInfos: [],
        keyIds: new Set(),
        language: "",
        originalLanguage: null,
        label: null,
        type: a,
        primary: !1,
        trickModeVideo: null,
        emsgSchemeIdUris: null,
        roles: [],
        forced: !1,
        channelsCount: null,
        audioSamplingRate: null,
        spatialAudio: !1,
        closedCaptions: null,
      };
    }
    function Nj(a, b, c) {
      if (b == a && a != c) return Pj;
      if (c == a && a != b) return Oj;
      if (b > a) {
        if (c <= a || c - a < b - a) return Oj;
        if (c - a > b - a) return Pj;
      } else {
        if (c > a) return Pj;
        if (a - c < a - b) return Oj;
        if (a - c > a - b) return Pj;
      }
      return Rj;
    }
    function Qj(a, b, c) {
      b = Math.abs(a - b);
      a = Math.abs(a - c);
      return a < b ? Oj : b < a ? Pj : Rj;
    }
    var Oj = 1,
      Rj = 0,
      Pj = -1;
    function Sj() {
      var a = this;
      this.i = this.g = null;
      this.s = [];
      this.u = null;
      this.M = {};
      this.h = null;
      this.j = { type: "", profiles: [], Ya: null, sa: 0, ea: [] };
      this.o = new Map();
      this.S = 1;
      this.m = {};
      this.O = {};
      this.l = new rj();
      this.B = 0;
      this.V = new Va(5);
      this.N = new Q(function () {
        Tj(a);
      });
      this.C = new Mg();
      this.F = null;
      this.Y = [];
      this.H = Infinity;
      this.J = !1;
      this.gapCount = 0;
    }
    q = Sj.prototype;
    q.configure = function (a) {
      this.g = a;
    };
    q.start = function (a, b) {
      var c = this,
        d;
      return L(function (e) {
        if (1 == e.g)
          return (
            (c.J = b.isLowLatencyMode()), (c.s = [a]), (c.i = b), y(e, Uj(c), 2)
          );
        d = e.h;
        c.i && Vj(c, d);
        if (!c.i) throw new O(2, 7, 7001);
        return e.return(c.h);
      });
    };
    q.stop = function () {
      for (
        var a = v(Object.values(this.m)), b = a.next();
        !b.done;
        b = a.next()
      )
        (b = b.value), b.segmentIndex && b.segmentIndex.release();
      this.l && this.l.release();
      this.g = this.i = null;
      this.s = [];
      this.h = null;
      this.m = {};
      this.o.clear();
      this.j = { type: "", profiles: [], Ya: null, sa: 0, ea: [] };
      this.l = null;
      null != this.N && (this.N.stop(), (this.N = null));
      return this.C.destroy();
    };
    q.update = function () {
      var a = this,
        b;
      return L(function (c) {
        if (1 == c.g) return E(c, 2), y(c, Uj(a), 4);
        if (2 != c.g) return wa(c, 0);
        b = F(c);
        if (!a.i || !b) return c.return();
        a.i.onError(b);
        B(c);
      });
    };
    q.getThumbnailStream = function (a) {
      return (a = this.M[a.id]) ? Promise.resolve(a) : Promise.resolve(null);
    };
    q.onExpirationUpdated = function () {};
    function Uj(a) {
      var b, c, d, e, f, g, h, k, l, m;
      return L(function (p) {
        if (1 == p.g)
          return (
            (b = a.u ? [a.u] : a.s),
            (c = Sg(b, a.g.retryParameters)),
            (d = a.i.networkingEngine),
            a.i.modifyManifestRequest(c, { format: "d" }),
            (e = Date.now() / 1e3),
            (f = d.request(0, c)),
            Ng(a.C, f),
            y(p, f.promise, 2)
          );
        if (3 != p.g) {
          g = p.h;
          h = Date.now() / 1e3;
          if (!a.i) return p.return(0);
          g.uri && !a.s.includes(g.uri) && a.s.unshift(g.uri);
          k = Date.now() / 1e3;
          return y(p, Wj(a, g.data, g.uri), 3);
        }
        l = Date.now() / 1e3;
        m = l - e;
        a.h.manifestTimeSeconds = m;
        a.h.manifestDownloadTimeSeconds = h - e;
        a.h.manifestParseTimeSeconds = l - k;
        a.V.sample(1, m);
        return p.return(m);
      });
    }
    function Wj(a, b, c) {
      var d, e, f, g, h, k;
      return L(function (l) {
        if (1 == l.g) {
          d = a.u ? "Patch" : "MPD";
          e = ng(b, d);
          if (!e) throw new O(2, 4, 4001, c);
          if (a.u) return l.return(Xj(a, e, b.byteLength));
          if ((f = a.g.dash.disableXlinkProcessing))
            return l.return(Yj(a, e, c, b.byteLength));
          g = a.g.dash.xlinkFailGracefully;
          h = gh(e, a.g.retryParameters, g, c, a.i.networkingEngine);
          Ng(a.C, h);
          return y(l, h.promise, 2);
        }
        k = l.h;
        return l.return(Yj(a, k, c, b.byteLength));
      });
    }
    function Yj(a, b, c, d) {
      var e,
        f,
        g,
        h,
        k,
        l,
        m,
        p,
        n,
        r,
        u,
        t,
        w,
        x,
        C,
        z,
        A,
        H,
        G,
        D,
        I,
        J,
        K,
        P,
        aa,
        ia,
        sa,
        za,
        fa,
        La,
        bb,
        Fa,
        Ca,
        Ma;
      return L(function (Na) {
        switch (Na.g) {
          case 1:
            (e = a.g.dash.manifestPreprocessor) && e(b);
            f = [c];
            g = U(b, "Location").map(cg).filter(Ub);
            0 < g.length && ((h = nc(f, g)), (f = a.s = h));
            a.g.dash.enablePatchMPDSupport &&
              ((k = U(b, "PatchLocation").map(cg).filter(Ub)),
              0 < k.length && (a.u = k[0]));
            l = U(b, "BaseURL");
            m = l.map(cg);
            p = nc(f, m);
            a.j.ea = p;
            n = 0;
            l && l.length && (n = V(l[0], "availabilityTimeOffset", kg) || 0);
            a.j.sa = n;
            r = a.g.dash.ignoreMinBufferTime;
            u = 0;
            r || (u = V(b, "minBufferTime", fg) || 0);
            a.B = V(b, "minimumUpdatePeriod", fg, -1);
            0 < a.B &&
              a.g.dash.minimumUpdatePeriodOverride &&
              (a.B = a.g.dash.minimumUpdatePeriodOverride);
            t = V(b, "availabilityStartTime", eg);
            w = V(b, "timeShiftBufferDepth", fg);
            x = a.g.dash.ignoreSuggestedPresentationDelay;
            C = null;
            x ||
              ((C = V(b, "suggestedPresentationDelay", fg)),
              a.g.dash.suggestedPresentationDelayOverride &&
                (C = a.g.dash.suggestedPresentationDelayOverride));
            z = a.g.dash.ignoreMaxSegmentDuration;
            A = null;
            z || (A = V(b, "maxSegmentDuration", fg));
            H = b.getAttribute("type") || "static";
            a.j.type = H;
            if (a.h)
              for (
                G = a.h.presentationTimeline,
                  D = v(Object.values(a.m)),
                  I = D.next();
                !I.done;
                I = D.next()
              )
                (J = I.value), J.segmentIndex && J.segmentIndex.Da(G.Xa());
            else
              (K = a.g.defaultPresentationDelay || 1.5 * u),
                (P = null != C ? C : K),
                (G = new X(t, P, a.g.dash.autoCorrectDrift));
            G.Sb("static" == H);
            (aa = G.$()) &&
              !isNaN(a.g.availabilityWindowOverride) &&
              (w = a.g.availabilityWindowOverride);
            null == w && (w = Infinity);
            G.Jd(w);
            ia = b.getAttribute("profiles") || "";
            a.j.profiles = ia.split(",");
            sa = {
              va: "static" != H,
              presentationTimeline: G,
              aa: null,
              U: null,
              W: null,
              D: null,
              bandwidth: 0,
              jd: !1,
              sa: n,
              profiles: ia.split(","),
              Z: null,
              Ya: null,
              Md: new Map(),
            };
            za = Zj(a, sa, p, b);
            fa = za.duration;
            La = za.periods;
            ("static" != H && za.Ud) || G.Pa(fa || Infinity);
            a.H &&
              !a.J &&
              (bb = a.i.isAutoLowLatencyMode()) &&
              (a.i.enableLowLatencyMode(), (a.J = a.i.isLowLatencyMode()));
            a.J
              ? G.me(a.H)
              : a.H &&
                $a(
                  "Low-latency DASH live stream detected, but low-latency streaming mode is not enabled in Shaka Player. Set streaming.lowLatencyMode configuration to true, and see https://bit.ly/3clctcj for details."
                );
            G.wd(A || 1);
            return a.h ? y(Na, ak(a, La, !1), 3) : y(Na, sj(a.l, La, sa.va), 5);
          case 5:
            Fa = Object.values(a.M).map(function (Pa) {
              return {
                id: Pa.id,
                bandwidth: Pa.bandwidth,
                thumbnailWidth: Pa.thumbnailWidth,
                thumbnailHeight: Pa.thumbnailHeight,
                codecs: null,
                playlistUri: null,
              };
            });
            a.h = {
              presentationTimeline: G,
              variants: a.l.l,
              textStreams: a.l.j.slice(),
              imageStreams: a.l.i,
              thumbnailVariants: Fa,
              offlineSessionIds: [],
              minBufferTime: u || 0,
              lowestVideoBitrate: 0,
              sizeBytes: 0,
              gapCount: 0,
              periodCount: 0,
              manifestTimeSeconds: NaN,
              manifestDownloadTimeSeconds: NaN,
              manifestParseTimeSeconds: NaN,
            };
            if (!G.te()) {
              Na.A(6);
              break;
            }
            Ca = U(b, "UTCTiming");
            return y(Na, bk(a, p, Ca), 7);
          case 7:
            Ma = Na.h;
            if (!a.i) return Na.return();
            G.ne(Ma);
          case 6:
            G.rd();
          case 3:
            ck(a, d, La.length, a.gapCount), B(Na);
        }
      });
    }
    function ak(a, b, c) {
      return L(function (d) {
        if (1 == d.g) return y(d, sj(a.l, b, !0, c), 2);
        a.h.variants = a.l.l;
        a.h.textStreams = a.l.j.slice();
        a.h.imageStreams = a.l.i;
        a.i.filter(a.h);
        B(d);
      });
    }
    function ck(a, b, c, d) {
      a.i.makeTextStreamsForClosedCaptions(a.h);
      for (
        var e = a.h, f, g = v(a.h.variants), h = g.next();
        !h.done;
        h = g.next()
      )
        (h = h.value),
          h.video &&
            h.video.bandwidth &&
            (!f || h.video.bandwidth < f) &&
            (f = h.video.bandwidth);
      e.lowestVideoBitrate = f || 0;
      a.h.sizeBytes = b;
      a.h.periodCount = c;
      a.h.gapCount = d;
    }
    function Xj(a, b, c) {
      var d, e, f, g, h, k, l, m, p, n, r, u, t, w, x, C, z;
      return L(function (A) {
        if (1 == A.g) {
          d = U(b, "p:add");
          e = [];
          f = v(d);
          for (g = f.next(); !g.done; g = f.next()) {
            h = g.value;
            k = h.getAttribute("sel");
            for (
              var H = [],
                G = v(k.split(/\/+(?=(?:[^'"]*['"][^'"]*['"])*[^'"]*$)/)),
                D = G.next();
              !D.done;
              D = G.next()
            ) {
              var I = D.value;
              D = I.match(/\b([A-Z])\w+/);
              I = I.match(/(@id='(.*?)')/);
              D &&
                H.push({
                  name: D[0],
                  id: I ? I[0].match(/'(.*?)'/)[0].replaceAll("'", "") : null,
                });
            }
            l = H;
            switch (l[l.length - 1].name) {
              case "MPD":
                "/MPD/@mediaPresentationDuration" == k
                  ? ((m = cg(h) || ""), dk(a, m))
                  : ((H = e.push),
                    (G = H.apply),
                    a.o.clear(),
                    (D = Zj(
                      a,
                      {
                        va: "dynamic" == a.j.type,
                        presentationTimeline: a.h.presentationTimeline,
                        aa: null,
                        U: null,
                        W: null,
                        D: null,
                        bandwidth: 0,
                        jd: !1,
                        sa: a.j.sa,
                        profiles: a.j.profiles,
                        Z: null,
                        Ya: a.j.Ya,
                        Md: new Map(),
                      },
                      a.j.ea,
                      h
                    ).periods),
                    G.call(H, e, ka(D)));
                break;
              case "SegmentTimeline":
                ek(a, l, U(h, "S"));
            }
          }
          p = U(b, "p:replace");
          n = v(p);
          for (r = n.next(); !r.done; r = n.next())
            if (
              ((u = r.value),
              (t = u.getAttribute("sel")),
              (w = cg(u) || ""),
              "/MPD/@type" == t)
            ) {
              a.h.presentationTimeline.Sb("static" == w);
              a.j.type = w;
              H = v(a.o.values());
              for (G = H.next(); !G.done; G = H.next())
                G.value.va = "dynamic" == w;
              "static" == w && (a.B = -1);
            } else "/MPD/@mediaPresentationDuration" == t && dk(a, w);
          return e.length ? y(A, ak(a, e, !0), 2) : A.A(2);
        }
        "static" == a.j.type &&
          ((x = a.j.Ya), a.h.presentationTimeline.Pa(x || Infinity));
        C = a.h.periodCount + e.length;
        z = a.h.gapCount + a.gapCount;
        ck(a, c, C, z);
        B(A);
      });
    }
    function dk(a, b) {
      b = fg(b);
      if (null != b) {
        a.j.Ya = b;
        a = v(a.o.values());
        for (var c = a.next(); !c.done; c = a.next()) c.value.Ya = b;
      }
    }
    function ek(a, b, c) {
      var d = "",
        e = "",
        f = "";
      b = v(b);
      for (var g = b.next(); !g.done; g = b.next())
        (g = g.value),
          "Period" == g.name
            ? (d = g.id)
            : "AdaptationSet" == g.name
            ? (e = g.id)
            : "Representation" == g.name && (f = g.id);
      b = [];
      if ("" != f) b.push(f);
      else
        for (f = v(a.o.values()), g = f.next(); !g.done; g = f.next())
          (g = g.value), g.W.id == e && g.D.id && b.push(g.D.id);
      e = {};
      f = v(b);
      for (b = f.next(); !b.done; e = { kb: e.kb, bd: e.bd }, b = f.next()) {
        b = d + "," + b.value;
        g = a.o.get(b);
        g.Z.Nd = c;
        e.kb = a.m[b];
        e.kb.segmentIndex &&
          e.kb.segmentIndex.Da(a.h.presentationTimeline.Xa());
        try {
          (e.bd = Lh(
            g,
            function (k, l, m) {
              return fk(a, k, l, m);
            },
            a.m,
            !0,
            a.g.dash.initialSegmentLimit,
            a.O,
            !0
          )),
            (e.kb.createSegmentIndex = (function (k) {
              return function () {
                var l;
                return L(function (m) {
                  if (1 == m.g) {
                    if (k.kb.segmentIndex) return m.A(0);
                    l = k.kb;
                    return y(m, k.bd.fb(), 3);
                  }
                  l.segmentIndex = m.h;
                  B(m);
                });
              };
            })(e));
        } catch (k) {
          b = tc;
          g = g.D.contentType;
          var h = g == b.rc;
          if ((g != b.ha && g != b.xe && !h) || 4002 != k.code) throw k;
        }
      }
    }
    function Zj(a, b, c, d) {
      var e = b.Ya;
      e || ((e = V(d, "mediaPresentationDuration", fg)), (a.j.Ya = e));
      a.gapCount = 0;
      var f = [],
        g = 0;
      d = U(d, "Period");
      for (var h = 0; h < d.length; h++) {
        var k = d[h],
          l = d[h + 1],
          m = V(k, "start", fg, g),
          p = k.id,
          n = V(k, "duration", fg),
          r = null;
        if (l) {
          var u = V(l, "start", fg);
          null != u && (r = u - m);
        } else null != e && (r = e - m);
        u = uc;
        r && n && Math.abs(r - n) > u && r > n && a.gapCount++;
        null == r && (r = n);
        if (
          !(null !== a.F && null !== p && null !== m && m < a.F) ||
          a.Y.includes(p) ||
          h + 1 == d.length
        ) {
          null !== m && (null === a.F || m > a.F) && (a.F = m);
          g = gk(a, b, c, {
            start: m,
            duration: r,
            node: k,
            Kb: null == r || !l,
          });
          f.push(g);
          b.aa.id && r && (a.O[b.aa.id] = r);
          if (null == r) {
            g = null;
            break;
          }
          g = m + r;
        }
      }
      a.Y = f.map(function (t) {
        return t.id;
      });
      return null != e
        ? { periods: f, duration: e, Ud: !1 }
        : { periods: f, duration: g, Ud: !0 };
    }
    function gk(a, b, c, d) {
      b.aa = hk(d.node, null, c);
      b.U = d;
      b.aa.sa = b.sa;
      b.aa.id || (b.aa.id = "__shaka_period_" + d.start);
      var e = U(d.node, "EventStream");
      c = b.presentationTimeline.Xa();
      e = v(e);
      for (var f = e.next(); !f.done; f = e.next())
        ik(a, d.start, d.duration, f.value, c);
      c = U(d.node, "AdaptationSet")
        .map(function (m) {
          return jk(a, b, m);
        })
        .filter(Ub);
      if (b.va) {
        d = [];
        e = v(c);
        for (f = e.next(); !f.done; f = e.next()) {
          f = v(f.value.Lf);
          for (var g = f.next(); !g.done; g = f.next()) d.push(g.value);
        }
        if (d.length != new Set(d).size) throw new O(2, 4, 4018);
      }
      d = c.filter(function (m) {
        return !m.Od;
      });
      c = c.filter(function (m) {
        return m.Od;
      });
      c = v(c);
      for (e = c.next(); !e.done; e = c.next()) {
        e = e.value;
        f = e.Od.split(" ");
        g = v(d);
        for (var h = g.next(); !h.done; h = g.next()) {
          var k = h.value;
          if (f.includes(k.id)) {
            h = {};
            k = v(k.streams);
            for (var l = k.next(); !l.done; h = { qc: h.qc }, l = k.next())
              (h.qc = l.value),
                (h.qc.trickModeVideo = e.streams.find(
                  (function (m) {
                    return function (p) {
                      return ld(m.qc.codecs) == ld(p.codecs);
                    };
                  })(h)
                ));
          }
        }
      }
      e = a.g.disableAudio ? [] : kk(d, "audio");
      g = a.g.disableVideo ? [] : kk(d, "video");
      f = a.g.disableText ? [] : kk(d, sc);
      c = a.g.disableThumbnails ? [] : kk(d, "image");
      if (!g.length && !e.length) throw new O(2, 4, 4004);
      d = [];
      e = v(e);
      for (h = e.next(); !h.done; h = e.next())
        d.push.apply(d, ka(h.value.streams));
      e = [];
      g = v(g);
      for (h = g.next(); !h.done; h = g.next())
        e.push.apply(e, ka(h.value.streams));
      g = [];
      f = v(f);
      for (h = f.next(); !h.done; h = f.next())
        g.push.apply(g, ka(h.value.streams));
      f = [];
      c = v(c);
      for (h = c.next(); !h.done; h = c.next())
        f.push.apply(f, ka(h.value.streams));
      return { id: b.aa.id, sc: d, Sc: e, textStreams: g, imageStreams: f };
    }
    function kk(a, b) {
      return a.filter(function (c) {
        return c.contentType == b;
      });
    }
    function jk(a, b, c) {
      function d(D) {
        switch (D) {
          case 1:
          case 6:
          case 13:
          case 14:
          case 15:
            return "SDR";
          case 16:
            return "PQ";
          case 18:
            return "HLG";
        }
      }
      b.W = hk(c, b.aa, null);
      if ("image" == b.W.contentType) {
        var e = lk(b, c);
        if (null !== e) {
          var f = a.M[e.id];
          f
            ? (f.thumbnailSegments = f.thumbnailSegments.concat(
                e.thumbnailSegments
              ))
            : (a.M[e.id] = e);
        }
      }
      var g = !1;
      e = U(c, "Role");
      var h = e
          .map(function (D) {
            return D.getAttribute("value");
          })
          .filter(Ub),
        k = void 0;
      (f = b.W.contentType == sc) && (k = "subtitle");
      e = v(e);
      for (var l = e.next(); !l.done; l = e.next()) {
        l = l.value;
        var m = l.getAttribute("schemeIdUri");
        if (null == m || "urn:mpeg:dash:role:2011" == m)
          switch (((l = l.getAttribute("value")), l)) {
            case "main":
              g = !0;
              break;
            case "caption":
            case "subtitle":
              k = l;
          }
      }
      var p;
      m = U(c, "EssentialProperty");
      e = null;
      l = !1;
      m = v(m);
      for (var n = m.next(); !n.done; n = m.next()) {
        n = n.value;
        var r = n.getAttribute("schemeIdUri");
        "http://dashif.org/guidelines/trickmode" == r
          ? (e = n.getAttribute("value"))
          : "urn:mpeg:mpegB:cicp:TransferCharacteristics" == r
          ? (p = d(parseInt(n.getAttribute("value"), 10)))
          : "urn:mpeg:mpegB:cicp:ColourPrimaries" != r &&
            "urn:mpeg:mpegB:cicp:MatrixCoefficients" != r &&
            (l = !0);
      }
      m = U(c, "SupplementalProperty");
      m = v(m);
      for (n = m.next(); !n.done; n = m.next())
        (n = n.value),
          "urn:mpeg:mpegB:cicp:TransferCharacteristics" ==
            n.getAttribute("schemeIdUri") &&
            (p = d(parseInt(n.getAttribute("value"), 10)));
      m = U(c, "Accessibility");
      var u = new Map();
      m = v(m);
      for (n = m.next(); !n.done; n = m.next()) {
        r = n.value;
        n = r.getAttribute("schemeIdUri");
        var t = r.getAttribute("value");
        if (
          "urn:scte:dash:cc:cea-608:2015" == n ||
          "urn:scte:dash:cc:cea-708:2015" == n
        )
          if (((r = 1), null != t)) {
            t = t.split(";");
            for (var w = v(t), x = w.next(); !x.done; x = w.next()) {
              var C = x.value,
                z = (x = void 0);
              C.includes("=")
                ? ((C = C.split("=")),
                  (x = C[0].startsWith("CC") ? C[0] : "CC" + r),
                  (z =
                    "urn:scte:dash:cc:cea-608:2015" == n
                      ? C[1] || "und"
                      : C[1].split(",")[0].split(":").pop()))
                : ((x = "CC" + r), (z = C));
              2 == t.length ? (r += 2) : r++;
              u.set(x, R(z));
            }
          } else u.set("CC1", "und");
        else
          "urn:mpeg:dash:role:2011" == n &&
            null != t &&
            (h.push(t), "captions" == t && (k = "caption"));
      }
      if (l) return null;
      l = U(c, "ContentProtection");
      var A = og(l, a.g.dash.ignoreDrmInfo, a.g.dash.keySystemsByURI),
        H = R(b.W.language || "und"),
        G = c.getAttribute("label");
      (l = U(c, "Label")) &&
        l.length &&
        ((l = l[0]), l.textContent && (G = l.textContent));
      l = U(c, "Representation");
      c = l
        .map(function (D) {
          if ((D = mk(a, b, A, k, H, G, g, h, u, D))) D.hdr = D.hdr || p;
          return D;
        })
        .filter(function (D) {
          return !!D;
        });
      if (0 == c.length) {
        e = "image" == b.W.contentType;
        if (a.g.dash.ignoreEmptyAdaptationSet || f || e) return null;
        throw new O(2, 4, 4003);
      }
      if (!b.W.contentType || "application" == b.W.contentType)
        for (
          b.W.contentType = nk(c[0].mimeType, c[0].codecs),
            f = v(c),
            n = f.next();
          !n.done;
          n = f.next()
        )
          n.value.type = b.W.contentType;
      f = b.W.id || "__fake__" + a.S++;
      m = v(c);
      for (n = m.next(); !n.done; n = m.next()) {
        n = n.value;
        r = v(A.drmInfos);
        for (t = r.next(); !t.done; t = r.next())
          (t = t.value),
            (t.keyIds =
              t.keyIds && n.keyIds
                ? new Set([].concat(ka(t.keyIds), ka(n.keyIds)))
                : t.keyIds || n.keyIds);
        a.g.dash.enableAudioGroups && (n.groupId = f);
      }
      l = l
        .map(function (D) {
          return D.getAttribute("id");
        })
        .filter(Ub);
      return {
        id: f,
        contentType: b.W.contentType,
        language: H,
        hg: g,
        streams: c,
        drmInfos: A.drmInfos,
        Od: e,
        Lf: l,
      };
    }
    function lk(a, b) {
      var c = U(b, "Representation");
      if (!c || 0 === c.length) return null;
      a.D = hk(c[0], a.W, null);
      b = a.D.Oa;
      if (!b) return null;
      var d = b.getAttribute("media"),
        e = V(b, "timescale", hg) || 1;
      b = V(b, "duration", hg);
      var f = c[0].getAttribute("id"),
        g = V(c[0], "height", hg),
        h = V(c[0], "width", hg),
        k = V(c[0], "bandwidth", hg);
      c = U(c[0], "EssentialProperty");
      var l;
      c[0] && (l = c[0].getAttribute("value"));
      if (!(d && b && g && h && l && k)) return null;
      var m = ch(a, function (r) {
        return r.Oa;
      });
      if (!m.timeline || 0 === m.timeline.length) return null;
      var p = v(l.split("x"));
      c = p.next().value;
      p = p.next().value;
      c = h / Number(c);
      p = g / Number(p);
      var n = m.timeline.map(function (r, u) {
        if (!(0 > r.start)) {
          var t = r.start * e,
            w = r.end * e;
          return {
            tileUrl: nc(a.D.ea, [d.replace("$Number$", "" + (u + m.Qa))])[0],
            startPosition: a.U.start + r.start,
            duration: (w - t) / e,
          };
        }
      });
      n = n.filter(function (r) {
        return void 0 !== r;
      });
      return {
        id: f + "-" + g + "_" + h,
        tileHeight: g,
        tileWidth: h,
        thumbnailHeight: p,
        thumbnailWidth: c,
        bandwidth: k,
        tileCount: l,
        maxSegmentDuration: b / e,
        thumbnailSegments: n,
      };
    }
    function mk(a, b, c, d, e, f, g, h, k, l) {
      b.D = hk(l, b.W, null);
      var m = b.D.id;
      a.H = Math.min(a.H, b.D.sa);
      if (!ok(b.D)) return null;
      var p = b.U.start;
      b.bandwidth = V(l, "bandwidth", ig) || 0;
      var n = b.D.contentType,
        r = n == sc || "application" == n;
      n = "image" == n;
      try {
        var u = function (D, I, J) {
          return fk(a, D, I, J);
        };
        if (b.D.Rb) var t = zh(b, u);
        else if (b.D.xa) t = Fh(b, a.m);
        else if (b.D.Oa)
          t = Lh(b, u, a.m, !!a.h, a.g.dash.initialSegmentLimit, a.O, !1);
        else {
          var w = b.D.ea,
            x = b.U.duration || 0;
          t = {
            fb: function () {
              return Promise.resolve(nh(p, x, w));
            },
          };
        }
      } catch (D) {
        if ((r || n) && 4002 == D.code) return null;
        throw D;
      }
      u = U(l, "ContentProtection");
      u = rg(u, c, a.g.dash.ignoreDrmInfo, a.g.dash.keySystemsByURI);
      u = new Set(u ? [u] : []);
      var C = !1;
      U(l, "SupplementalProperty").some(function (D) {
        return (
          "tag:dolby.com,2018:dash:EC3_ExtensionType:2018" ==
            D.getAttribute("schemeIdUri") && "JOC" == D.getAttribute("value")
        );
      }) && (C = !0);
      var z = !1;
      r && (z = h.includes("forced_subtitle") || h.includes("forced-subtitle"));
      var A;
      if (
        n &&
        ((l = U(l, "EssentialProperty").find(function (D) {
          return [
            "http://dashif.org/thumbnail_tile",
            "http://dashif.org/guidelines/thumbnail_tile",
          ].includes(D.getAttribute("schemeIdUri"));
        })) && (A = l.getAttribute("value")),
        !A)
      )
        return null;
      var H;
      l = b.D.codecs;
      b.profiles.includes(
        "http://dashif.org/guidelines/dash-if-uhd#hevc-hdr-pq10"
      ) &&
        (l.includes("hvc1.2.4.L153.B0") || l.includes("hev1.2.4.L153.B0")) &&
        (H = "PQ");
      l = b.D.id ? b.aa.id + "," + b.D.id : "";
      a.g.overrideDolbyVisionCodecs && (b.D.codecs = pk(b.D.codecs));
      a.u && b.U.Kb && m && a.o.set(b.aa.id + "," + m, qk(b));
      b.Z = null;
      if (l && a.m[l]) {
        var G = a.m[l];
        G.createSegmentIndex = function () {
          var D;
          return L(function (I) {
            if (1 == I.g) {
              if (G.segmentIndex) return I.A(0);
              D = G;
              return y(I, t.fb(), 3);
            }
            D.segmentIndex = I.h;
            B(I);
          });
        };
      } else
        G = {
          id: a.S++,
          originalId: b.D.id,
          createSegmentIndex: function () {
            var D;
            return L(function (I) {
              if (1 == I.g) {
                if (G.segmentIndex) return I.A(0);
                D = G;
                return y(I, t.fb(), 3);
              }
              D.segmentIndex = I.h;
              B(I);
            });
          },
          closeSegmentIndex: function () {
            G.segmentIndex &&
              (G.segmentIndex.release(), (G.segmentIndex = null));
          },
          segmentIndex: null,
          mimeType: b.D.mimeType,
          codecs: b.D.codecs,
          frameRate: b.D.frameRate,
          pixelAspectRatio: b.D.pixelAspectRatio,
          bandwidth: b.bandwidth,
          width: b.D.width,
          height: b.D.height,
          kind: d,
          encrypted: 0 < c.drmInfos.length,
          drmInfos: c.drmInfos,
          keyIds: u,
          language: e,
          originalLanguage: b.W.language,
          label: f,
          type: b.W.contentType,
          primary: g,
          trickModeVideo: null,
          emsgSchemeIdUris: b.D.emsgSchemeIdUris,
          roles: h,
          forced: z,
          channelsCount: b.D.Nb,
          audioSamplingRate: b.D.audioSamplingRate,
          spatialAudio: C,
          closedCaptions: k,
          hdr: H,
          tilesLayout: A,
          matchedStreams: [],
        };
      l && b.va && !a.m[l] && (a.m[l] = G);
      return G;
    }
    function qk(a) {
      for (
        var b = {}, c = v(Object.keys(a)), d = c.next();
        !d.done;
        d = c.next()
      )
        (d = d.value),
          ["period", "adaptationSet", "representation"].includes(d)
            ? (b[d] = {
                Rb: null,
                xa: null,
                Oa: null,
                ea: a[d].ea,
                width: a[d].width,
                height: a[d].height,
                contentType: a[d].contentType,
                mimeType: a[d].mimeType,
                lang: a[d].lang,
                codecs: a[d].codecs,
                frameRate: a[d].frameRate,
                pixelAspectRatio: a[d].pixelAspectRatio,
                emsgSchemeIdUris: a[d].emsgSchemeIdUris,
                id: a[d].id,
                Nb: a[d].Nb,
                audioSamplingRate: a[d].audioSamplingRate,
                sa: a[d].sa,
                Ib: a[d].Ib,
              })
            : (b[d] =
                "periodInfo" == d
                  ? {
                      start: a[d].start,
                      duration: a[d].duration,
                      node: null,
                      Kb: a[d].Kb,
                    }
                  : a[d]);
      return b;
    }
    function Tj(a) {
      var b, c;
      L(function (d) {
        switch (d.g) {
          case 1:
            return (b = 0), E(d, 2), y(d, Uj(a), 4);
          case 4:
            b = d.h;
            wa(d, 3);
            break;
          case 2:
            if (((c = F(d)), a.i)) {
              if (a.g.raiseFatalErrorOnManifestUpdateRequestFailure)
                return a.i.onError(c), d.return();
              c.severity = 1;
              a.i.onError(c);
            }
          case 3:
            if (!a.i) return d.return();
            Vj(a, b);
            B(d);
        }
      });
    }
    function Vj(a, b) {
      0 > a.B || a.N.X(Math.max(3, a.B - b, Wa(a.V)));
    }
    function pk(a) {
      for (
        var b = { dvav: "avc3", dva1: "avc1", dvhe: "hev1", dvh1: "hvc1" },
          c = v(Object.keys(b)),
          d = c.next();
        !d.done;
        d = c.next()
      )
        if (((d = d.value), a.includes(d))) return b[d];
      return a;
    }
    function hk(a, b, c) {
      b = b || {
        contentType: "",
        mimeType: "",
        codecs: "",
        emsgSchemeIdUris: [],
        frameRate: void 0,
        pixelAspectRatio: void 0,
        Nb: null,
        audioSamplingRate: null,
        sa: 0,
      };
      c = c || b.ea;
      var d = U(a, "BaseURL"),
        e = d.map(cg),
        f = a.getAttribute("contentType") || b.contentType,
        g = a.getAttribute("mimeType") || b.mimeType,
        h = a.getAttribute("codecs") || b.codecs,
        k = V(a, "frameRate", lg) || b.frameRate,
        l = a.getAttribute("sar") || b.pixelAspectRatio,
        m = U(a, "InbandEventStream"),
        p = b.emsgSchemeIdUris.slice();
      m = v(m);
      for (var n = m.next(); !n.done; n = m.next())
        (n = n.value.getAttribute("schemeIdUri")), p.includes(n) || p.push(n);
      m = U(a, "AudioChannelConfiguration");
      m = rk(m) || b.Nb;
      n = V(a, "audioSamplingRate", jg) || b.audioSamplingRate;
      f || (f = nk(g, h));
      var r = Xf(a, "SegmentBase"),
        u = Xf(a, "SegmentTemplate"),
        t = r ? V(r, "availabilityTimeOffset", kg) || 0 : 0,
        w = u ? V(u, "availabilityTimeOffset", kg) || 0 : 0;
      d = d && d.length ? V(d[0], "availabilityTimeOffset", kg) || 0 : 0;
      d = b.sa + d + t + w;
      return {
        ea: nc(c, e),
        Rb: r || b.Rb,
        xa: Xf(a, "SegmentList") || b.xa,
        Oa: u || b.Oa,
        width: V(a, "width", jg) || b.width,
        height: V(a, "height", jg) || b.height,
        contentType: f,
        mimeType: g,
        codecs: h,
        frameRate: k,
        pixelAspectRatio: l,
        emsgSchemeIdUris: p,
        id: a.getAttribute("id"),
        language: a.getAttribute("lang"),
        Nb: m,
        audioSamplingRate: n,
        sa: d,
        Ib: null,
      };
    }
    function rk(a) {
      a = v(a);
      for (var b = a.next(); !b.done; b = a.next()) {
        var c = b.value;
        if ((b = c.getAttribute("schemeIdUri")))
          if ((c = c.getAttribute("value")))
            switch (b) {
              case "urn:mpeg:dash:outputChannelPositionList:2012":
                return c.trim().split(/ +/).length;
              case "urn:mpeg:dash:23003:3:audio_channel_configuration:2011":
              case "urn:dts:dash:audio_channel_configuration:2012":
                b = parseInt(c, 10);
                if (!b) continue;
                return b;
              case "tag:dolby.com,2014:dash:audio_channel_configuration:2011":
              case "urn:dolby:dash:audio_channel_configuration:2011":
                b = parseInt(c, 16);
                if (!b) continue;
                for (a = 0; b; ) b & 1 && ++a, (b >>= 1);
                return a;
              case "urn:mpeg:mpegB:cicp:ChannelConfiguration":
                if (
                  ((b = [
                    0, 1, 2, 3, 4, 5, 6, 8, 2, 3, 4, 7, 8, 24, 8, 12, 10, 12,
                    14, 12, 14,
                  ]),
                  (c = parseInt(c, 10)) && 0 < c && c < b.length)
                )
                  return b[c];
            }
      }
      return null;
    }
    function ok(a) {
      var b = a.Rb ? 1 : 0;
      b += a.xa ? 1 : 0;
      b += a.Oa ? 1 : 0;
      if (0 == b)
        return a.contentType == sc || "application" == a.contentType ? !0 : !1;
      1 != b && (a.Rb && (a.xa = null), (a.Oa = null));
      return !0;
    }
    function sk(a, b, c, d) {
      var e, f, g, h, k, l;
      return L(function (m) {
        if (1 == m.g)
          return (
            (e = nc(b, [c])),
            (f = Sg(e, a.g.retryParameters)),
            (f.method = d),
            (g = a.i.networkingEngine.request(4, f)),
            Ng(a.C, g),
            y(m, g.promise, 2)
          );
        h = m.h;
        if ("HEAD" == d) {
          if (!h.headers || !h.headers.date) return m.return(0);
          k = h.headers.date;
        } else k = Nc(h.data);
        l = Date.parse(k);
        return isNaN(l) ? m.return(0) : m.return(l - Date.now());
      });
    }
    function bk(a, b, c) {
      var d, e, f, g, h, k, l, m;
      return L(function (p) {
        switch (p.g) {
          case 1:
            (d = c.map(function (n) {
              return {
                scheme: n.getAttribute("schemeIdUri"),
                value: n.getAttribute("value"),
              };
            })),
              (e = a.g.dash.clockSyncUri),
              !d.length &&
                e &&
                d.push({
                  scheme: "urn:mpeg:dash:utc:http-head:2014",
                  value: e,
                }),
              (f = v(d)),
              (g = f.next());
          case 2:
            if (g.done) {
              p.A(4);
              break;
            }
            h = g.value;
            E(p, 5);
            k = h.scheme;
            l = h.value;
            switch (k) {
              case "urn:mpeg:dash:utc:http-head:2014":
              case "urn:mpeg:dash:utc:http-head:2012":
                return p.A(7);
              case "urn:mpeg:dash:utc:http-xsdate:2014":
              case "urn:mpeg:dash:utc:http-iso:2014":
              case "urn:mpeg:dash:utc:http-xsdate:2012":
              case "urn:mpeg:dash:utc:http-iso:2012":
                return p.A(8);
              case "urn:mpeg:dash:utc:direct:2014":
              case "urn:mpeg:dash:utc:direct:2012":
                return (
                  (m = Date.parse(l)), p.return(isNaN(m) ? 0 : m - Date.now())
                );
              case "urn:mpeg:dash:utc:http-ntp:2014":
              case "urn:mpeg:dash:utc:ntp:2014":
              case "urn:mpeg:dash:utc:sntp:2014":
                $a("NTP UTCTiming scheme is not supported");
                break;
              default:
                $a("Unrecognized scheme in UTCTiming element", k);
            }
            p.A(9);
            break;
          case 7:
            return y(p, sk(a, b, l, "HEAD"), 10);
          case 10:
            return p.return(p.h);
          case 8:
            return y(p, sk(a, b, l, "GET"), 11);
          case 11:
            return p.return(p.h);
          case 9:
            wa(p, 3);
            break;
          case 5:
            F(p);
          case 3:
            g = f.next();
            p.A(2);
            break;
          case 4:
            return (
              $a(
                "A UTCTiming element should always be given in live manifests! This content may not play on clients with bad clocks!"
              ),
              p.return(0)
            );
        }
      });
    }
    function ik(a, b, c, d, e) {
      var f = d.getAttribute("schemeIdUri") || "",
        g = d.getAttribute("value") || "",
        h = V(d, "timescale", jg) || 1;
      d = v(U(d, "Event"));
      for (var k = d.next(); !k.done; k = d.next()) {
        k = k.value;
        var l = V(k, "presentationTime", jg) || 0,
          m = V(k, "duration", jg) || 0;
        l = l / h + b;
        m = l + m / h;
        null != c && ((l = Math.min(l, b + c)), (m = Math.min(m, b + c)));
        m < e ||
          ((k = {
            schemeIdUri: f,
            value: g,
            startTime: l,
            endTime: m,
            id: k.getAttribute("id") || "",
            eventElement: k,
          }),
          a.i.onTimelineRegionAdded(k));
      }
    }
    function fk(a, b, c, d) {
      var e, f, g, h, k;
      return L(function (l) {
        if (1 == l.g)
          return (
            (e = $g),
            (f = vi(b, c, d, a.g.retryParameters)),
            (g = a.i.networkingEngine),
            (h = g.request(e, f)),
            Ng(a.C, h),
            y(l, h.promise, 2)
          );
        k = l.h;
        return l.return(k.data);
      });
    }
    function nk(a, b) {
      return pd(jd(a, b)) ? sc : a.split("/")[0];
    }
    M("shaka.dash.DashParser", Sj);
    Zh.mpd = function () {
      return new Sj();
    };
    Xh["application/dash+xml"] = function () {
      return new Sj();
    };
    Xh["video/vnd.mpeg.dash.mpd"] = function () {
      return new Sj();
    };
    function tk(a, b, c, d) {
      this.h = a;
      this.type = b;
      this.g = c;
      this.segments = d || null;
    }
    function uk(a, b, c, d) {
      this.id = a;
      this.name = b;
      this.g = c;
      this.value = void 0 === d ? null : d;
    }
    uk.prototype.toString = function () {
      function a(d) {
        return (
          d.name +
          "=" +
          (isNaN(Number(d.value)) ? '"' + d.value + '"' : d.value)
        );
      }
      var b = "#" + this.name,
        c = this.g ? this.g.map(a) : [];
      this.value && c.unshift(this.value);
      0 < c.length && (b += ":" + c.join(","));
      return b;
    };
    uk.prototype.getAttribute = function (a) {
      var b = this.g.filter(function (c) {
        return c.name == a;
      });
      return b.length ? b[0] : null;
    };
    function Y(a, b, c) {
      return (a = a.getAttribute(b)) ? a.value : c || null;
    }
    function vk(a, b) {
      a = a.getAttribute(b);
      if (!a) throw new O(2, 4, 4023, b);
      return a.value;
    }
    function wk(a, b, c) {
      c = void 0 === c ? [] : c;
      this.g = b;
      this.h = a;
      this.i = c;
    }
    function xk(a, b) {
      this.name = a;
      this.value = b;
    }
    function yk(a, b) {
      return a.filter(function (c) {
        return c.name == b;
      });
    }
    function zk(a, b) {
      return a.filter(function (c) {
        return vk(c, "TYPE") == b;
      });
    }
    function Ak(a, b) {
      a = yk(a, b);
      return a.length ? a[0] : null;
    }
    function Bk(a, b, c) {
      c = void 0 === c ? 0 : c;
      return (a = Ak(a, b)) ? Number(a.value) : c;
    }
    function Ck(a) {
      return a
        .split("-")
        .filter(function (b) {
          return "X" !== b;
        })
        .map(function (b, c) {
          return c
            ? b[0].toUpperCase() + b.substr(1).toLowerCase()
            : b.toLowerCase();
        })
        .join("");
    }
    function Dk(a) {
      this.h = a;
      this.g = 0;
    }
    function Jk(a) {
      Kk(a, /[ \t]+/gm);
    }
    function Kk(a, b) {
      b.lastIndex = a.g;
      b = b.exec(a.h);
      b =
        null == b
          ? null
          : { position: b.index, length: b[0].length, results: b };
      if (a.g == a.h.length || null == b || b.position != a.g) return null;
      a.g += b.length;
      return b.results;
    }
    function Lk(a) {
      return a.g == a.h.length
        ? null
        : (a = Kk(a, /[^ \t\n]*/gm))
        ? a[0]
        : null;
    }
    function Mk() {
      this.g = 0;
    }
    function Nk(a, b, c) {
      b = Nc(b);
      b = b.replace(/\r\n|\r(?=[^\n]|$)/gm, "\n").trim();
      var d = b.split(/\n+/m);
      if (!/^#EXTM3U($|[ \t\n])/m.test(d[0])) throw new O(2, 4, 4015);
      b = 0;
      for (var e = !0, f = v(d), g = f.next(); !g.done; g = f.next())
        if (((g = g.value), /^#(?!EXT)/m.test(g) || e)) e = !1;
        else if (((g = Ok(a, g)), --a.g, Pk.includes(g.name))) {
          b = 1;
          break;
        } else "EXT-X-STREAM-INF" == g.name && (e = !0);
      f = [];
      e = !0;
      for (g = 0; g < d.length; g++) {
        var h = d[g],
          k = d[g + 1];
        if (/^#(?!EXT)/m.test(h) || e) e = !1;
        else {
          h = Ok(a, h);
          if (Qk.includes(h.name)) {
            if (1 != b) throw new O(2, 4, 4017);
            var l = d.splice(g, d.length - g);
            d = c;
            e = [];
            g = [];
            k = [];
            h = null;
            l = v(l);
            for (var m = l.next(); !m.done; m = l.next())
              (m = m.value),
                /^(#EXT)/.test(m)
                  ? ((m = Ok(a, m)),
                    Pk.includes(m.name)
                      ? f.push(m)
                      : "EXT-X-MAP" == m.name
                      ? (h = m)
                      : "EXT-X-PART" == m.name
                      ? k.push(m)
                      : "EXT-X-PRELOAD-HINT" == m.name
                      ? "PART" == Y(m, "TYPE")
                        ? k.push(m)
                        : "MAP" == Y(m, "TYPE") &&
                          ((m.name = "EXT-X-MAP"), (h = m))
                      : g.push(m))
                  : /^#(?!EXT)/m.test(m) ||
                    ((m = nc([d], [m.trim()])[0]),
                    h && g.push(h),
                    e.push(new wk(m, g, k)),
                    (g = []),
                    (k = []));
            k.length && (h && g.push(h), e.push(new wk("", g, k)));
            return new tk(c, b, f, e);
          }
          f.push(h);
          "EXT-X-STREAM-INF" == h.name &&
            (h.g.push(new xk("URI", k)), (e = !0));
        }
      }
      return new tk(c, b, f);
    }
    function Ok(a, b) {
      a = a.g++;
      var c = b.match(/^#(EXT[^:]*)(?::(.*))?$/);
      if (!c) throw new O(2, 4, 4016, b);
      b = c[1];
      var d = c[2];
      c = [];
      var e;
      if (d) {
        d = new Dk(d);
        var f;
        (f = Kk(d, /^([^,=]+)(?:,|$)/g)) && (e = f[1]);
        for (var g = /([^=]+)=(?:"([^"]*)"|([^",]*))(?:,|$)/g; (f = Kk(d, g)); )
          c.push(new xk(f[1], f[2] || f[3])), Jk(d);
      }
      return new uk(a, b, c, e);
    }
    var Pk =
        "EXT-X-TARGETDURATION EXT-X-MEDIA-SEQUENCE EXT-X-DISCONTINUITY-SEQUENCE EXT-X-PLAYLIST-TYPE EXT-X-I-FRAMES-ONLY EXT-X-ENDLIST EXT-X-SERVER-CONTROL EXT-X-SKIP".split(
          " "
        ),
      Qk =
        "EXTINF EXT-X-TILES EXT-X-BYTERANGE EXT-X-DISCONTINUITY EXT-X-PROGRAM-DATE-TIME EXT-X-KEY EXT-X-DATERANGE EXT-X-MAP".split(
          " "
        );
    function Rk() {}
    function Sk(a) {
      try {
        var b = Tk(a);
        return Eg({
          uri: a,
          Df: a,
          data: b.data,
          headers: { "content-type": b.contentType },
        });
      } catch (c) {
        return Cg(c);
      }
    }
    function Tk(a) {
      var b = a.split(":");
      if (2 > b.length || "data" != b[0]) throw new O(2, 1, 1004, a);
      b = b.slice(1).join(":").split(",");
      if (2 > b.length) throw new O(2, 1, 1004, a);
      var c = b[0];
      a = window.decodeURIComponent(b.slice(1).join(","));
      b = c.split(";");
      c = b[0];
      var d = !1;
      1 < b.length && "base64" == b[b.length - 1] && ((d = !0), b.pop());
      var e;
      d ? (e = Xc(a)) : (e = Sc(a));
      return { data: e, contentType: c };
    }
    M("shaka.net.DataUriPlugin", Rk);
    Rk.parse = Sk;
    Pg("data", Sk);
    function Uk() {
      var a = this;
      this.i = null;
      this.Y = new Map();
      this.g = null;
      this.Sa = 1;
      this.s = new Map();
      this.B = new Map();
      this.Ba = new Set();
      this.h = new Map();
      this.j = null;
      this.H = "";
      this.O = new Mk();
      this.Aa = 0;
      this.C = new Q(function () {
        Vk(a);
      });
      this.o = Wk;
      this.l = null;
      this.ma = 0;
      this.J = Infinity;
      this.ca = this.za = 0;
      this.F = new Mg();
      this.V = [];
      this.N = new Map();
      this.Ta = !1;
      this.u = new Map();
      this.S = null;
      this.da = new Map();
      this.M = new Map();
      this.m = !1;
    }
    q = Uk.prototype;
    q.configure = function (a) {
      this.g = a;
    };
    q.start = function (a, b) {
      var c = this,
        d,
        e,
        f,
        g,
        h,
        k;
      return L(function (l) {
        if (1 == l.g)
          return (
            (c.i = b),
            (c.m = b.isLowLatencyMode()),
            (d = Date.now() / 1e3),
            y(l, Xk(c, a), 2)
          );
        if (3 != l.g)
          return (
            (e = l.h),
            (f = Date.now() / 1e3),
            (c.H = e.uri),
            (g = Date.now() / 1e3),
            y(l, Yk(c, e.data), 3)
          );
        h = Date.now() / 1e3;
        c.l.manifestTimeSeconds = h - d;
        c.l.manifestDownloadTimeSeconds = f - d;
        c.l.manifestParseTimeSeconds = h - g;
        k = c.Aa;
        0 < k && c.C.X(k);
        return l.return(c.l);
      });
    };
    q.stop = function () {
      this.C && (this.C.stop(), (this.C = null));
      var a = [];
      this.F && (a.push(this.F.destroy()), (this.F = null));
      this.g = this.i = null;
      this.Ba.clear();
      this.l = null;
      this.h.clear();
      this.B.clear();
      this.u.clear();
      this.s.clear();
      return Promise.all(a);
    };
    q.update = function () {
      var a = this,
        b,
        c,
        d,
        e,
        f;
      return L(function (g) {
        if (1 == g.g) {
          if (a.o == Wk) return g.return();
          b = Date.now() / 1e3;
          c = [];
          d = Array.from(a.h.values());
          return d.length ? y(g, Zk(a, d[0]), 2) : g.A(2);
        }
        if (4 != g.g) {
          for (e = 1; e < d.length; e++) c.push(Zk(a, d[e]));
          return y(g, Promise.all(c), 4);
        }
        f = Date.now() / 1e3;
        a.l.manifestTimeSeconds = f - b;
        a.l.manifestDownloadTimeSeconds = NaN;
        a.l.manifestParseTimeSeconds = NaN;
        B(g);
      });
    };
    q.getThumbnailStream = function (a) {
      var b = this,
        c,
        d,
        e,
        f,
        g,
        h;
      return L(function (k) {
        if (1 == k.g) {
          if (!a.playlistUri) return k.return(null);
          c = nc([b.H], [a.playlistUri])[0];
          return y(k, Xk(b, c), 2);
        }
        d = k.h;
        c = d.uri;
        e = Nk(b.O, d.data, d.uri);
        f = 0;
        h = e.segments.reduce(function (l, m) {
          var p = f,
            n = Bk(m.g, "EXTINF");
          if (0 === n) return l;
          f += n;
          var r = Ak(m.g, "EXT-X-TILES");
          if (!r) return l;
          var u = Y(r, "RESOLUTION"),
            t = v(u ? u.split("x") : [null, null]);
          u = t.next().value;
          t = t.next().value;
          u = Number(u);
          t = Number(t);
          if (u !== a.thumbnailWidth || t !== a.thumbnailHeight) r = null;
          else {
            var w = Y(r, "LAYOUT") || "",
              x = v(w ? w.split("x") : [null, null]),
              C = x.next().value;
            x = x.next().value;
            C = Number(C);
            x = Number(x);
            r =
              0 < C && 0 < x
                ? (r = Number(Y(r, "DURATION")))
                  ? {
                      thumbnailWidth: u,
                      thumbnailHeight: t,
                      tf: w,
                      vf: C,
                      uf: x,
                      Tf: r,
                    }
                  : null
                : null;
          }
          x = r;
          if (!x) return l;
          r = x.thumbnailWidth;
          u = x.thumbnailHeight;
          t = x.tf;
          w = x.vf;
          C = x.uf;
          x = x.Tf;
          g ||
            (g = {
              id: a.id,
              tileHeight: C * u,
              tileWidth: w * r,
              thumbnailHeight: u,
              thumbnailWidth: r,
              bandwidth: a.bandwidth,
              tileCount: t,
              maxSegmentDuration: x * C * w,
              thumbnailSegments: [],
            });
          return l.concat({ duration: n, startPosition: p, tileUrl: m.h });
        }, []);
        if (0 === h.length || !g) return k.return(null);
        g.thumbnailSegments = h;
        return k.return(g);
      });
    };
    function $k(a) {
      var b;
      return L(function (c) {
        if (a.o == Wk) return c.return();
        b = Array.from(a.h.values());
        return b.length ? y(c, Zk(a, b[0]), 0) : c.A(0);
      });
    }
    function al(a) {
      for (var b = v(a.Y.entries()), c = b.next(); !c.done; c = b.next()) {
        var d = v(c.value);
        c = d.next().value;
        if ((d = d.next().value)) {
          d = yk(d, "EXT-X-DATERANGE");
          d = v(d);
          for (var e = d.next(); !e.done; e = d.next()) {
            e = e.value.g.reduce(function (g, h) {
              g[Ck(h.name)] = h.value;
              return g;
            }, {});
            var f = c - a.S;
            e = {
              schemeIdUri: "hls:daterange",
              value: JSON.stringify(e),
              startTime: f,
              endTime: f + parseFloat(e.duration),
              id: e.id,
              eventElement: null,
            };
            a.i.onTimelineRegionAdded(e);
          }
          a.Y.set(c, null);
        }
      }
    }
    function Zk(a, b) {
      var c, d, e, f, g, h, k, l, m, p, n, r, u;
      return L(function (t) {
        if (1 == t.g)
          return (
            (c = bl),
            (d = b.Ae),
            (e = new $b(d)),
            a.m && b.Ee && cc(e, new ec("_HLS_skip=YES")),
            y(t, Xk(a, e.toString()), 2)
          );
        if (3 != t.g) {
          f = t.h;
          g = Nk(a.O, f.data, f.uri);
          if (1 != g.type) throw new O(2, 4, 4017);
          h = yk(g.g, "EXT-X-DEFINE");
          k = cl(a, h);
          l = b.stream;
          return y(
            t,
            dl(
              a,
              b.Rc,
              g,
              l.type,
              l.mimeType,
              b.ud,
              k,
              b.Ke,
              l.codecs,
              l.bandwidth
            ),
            3
          );
        }
        m = t.h;
        al(a);
        l.segmentIndex.hc(m, a.j.Xa());
        m.length &&
          ((p = Bk(g.g, "EXT-X-MEDIA-SEQUENCE", 0)),
          (n = b.ud.get(p)),
          l.segmentIndex.Da(n));
        r = m[m.length - 1];
        if ((u = Ak(g.g, "EXT-X-ENDLIST"))) el(a, c.ze), a.j.Pa(r.endTime);
        B(t);
      });
    }
    q.onExpirationUpdated = function () {};
    function Yk(a, b) {
      var c,
        d,
        e,
        f,
        g,
        h,
        k,
        l,
        m,
        p,
        n,
        r,
        u,
        t,
        w,
        x,
        C,
        z,
        A,
        H,
        G,
        D,
        I,
        J,
        K,
        P,
        aa,
        ia,
        sa,
        za,
        fa,
        La,
        bb,
        Fa,
        Ca,
        Ma,
        Na,
        Pa,
        Pc;
      return L(function (Qa) {
        switch (Qa.g) {
          case 1:
            c = a.g.hls.restrictedManifestParsing;
            d = Nk(a.O, b, a.H);
            if (0 != d.type) throw new O(2, 4, 4022);
            e = yk(d.g, "EXT-X-DEFINE");
            fl(a, e);
            f = yk(d.g, "EXT-X-MEDIA");
            g = yk(d.g, "EXT-X-STREAM-INF");
            h = yk(d.g, "EXT-X-IMAGE-STREAM-INF");
            k = yk(d.g, "EXT-X-IMAGE-STREAM-INF");
            c && ((f = []), (g = 0 < g.length ? [g[0]] : []));
            gl(a, g);
            l = yk(d.g, "EXT-X-SESSION-DATA");
            m = v(l);
            for (p = m.next(); !p.done; p = m.next())
              if (
                ((n = p.value),
                (r = Y(n, "DATA-ID")),
                (u = Y(n, "URI")),
                (t = Y(n, "LANGUAGE")),
                (w = Y(n, "VALUE")),
                (x = new Map().set("id", r)),
                u && x.set("uri", nc([a.H], [u])[0]),
                t && x.set("language", t),
                w && x.set("value", w),
                (C = new Ig("sessiondata", x)),
                a.i)
              )
                a.i.onEvent(C);
            return y(Qa, hl(a, f), 2);
          case 2:
            return il(a, f), y(Qa, jl(a, g), 3);
          case 3:
            return (z = Qa.h), (A = kl(k)), y(Qa, ll(a, f), 4);
          case 4:
            return (H = Qa.h), y(Qa, ml(a, h), 5);
          case 5:
            G = Qa.h;
            if (!a.i) throw new O(2, 7, 7001);
            if (a.Ta && 0 == z.length) throw new O(2, 4, 4034);
            I = D = Infinity;
            J = v(a.h.values());
            for (K = J.next(); !K.done; K = J.next())
              (P = K.value),
                (D = Math.min(D, P.be)),
                "text" != P.stream.type && (I = Math.min(I, P.xf - P.be));
            a.o != Wk
              ? ((a.j = new X(
                  0,
                  a.g.defaultPresentationDelay
                    ? a.g.defaultPresentationDelay
                    : a.ca
                    ? a.ca
                    : 3 * a.ma
                )),
                a.j.Sb(!1))
              : ((a.j = new X(null, 0)), a.j.Sb(!0));
            if (a.o != Wk)
              (a.Aa = a.J),
                (aa = bl),
                a.o == aa.ye &&
                  ((ia = a.j.Nc),
                  isNaN(a.g.availabilityWindowOverride) ||
                    (ia = a.g.availabilityWindowOverride),
                  a.j.Jd(ia));
            else
              for (
                a.j.Pa(I), a.j.offset(-D), sa = v(a.h.values()), K = sa.next();
                !K.done;
                K = sa.next()
              )
                (za = K.value),
                  za.stream.segmentIndex.offset(-D),
                  za.stream.segmentIndex.Gb(0, I);
            a.V = [];
            fa = [];
            La = v(z);
            for (bb = La.next(); !bb.done; bb = La.next())
              for (
                Fa = bb.value, Ca = v([Fa.video, Fa.audio]), Ma = Ca.next();
                !Ma.done;
                Ma = Ca.next()
              )
                (Na = Ma.value) && fa.push(Na);
            return y(
              Qa,
              Promise.all(
                fa.map(function (Ve) {
                  return L(function (We) {
                    return y(We, Ve.createSegmentIndex(), 0);
                  });
                })
              ),
              6
            );
          case 6:
            Pa = v(fa);
            for (Ma = Pa.next(); !Ma.done; Ma = Pa.next())
              (Pc = Ma.value), a.V.push(Pc.segmentIndex.L);
            nl(a);
            a.j.rd();
            a.l = {
              presentationTimeline: a.j,
              variants: z,
              thumbnailVariants: A,
              textStreams: H,
              imageStreams: G,
              offlineSessionIds: [],
              minBufferTime: 0,
              lowestVideoBitrate: 0,
              sizeBytes: b.byteLength,
              gapCount: 0,
              periodCount: 0,
              manifestTimeSeconds: NaN,
              manifestDownloadTimeSeconds: NaN,
              manifestParseTimeSeconds: NaN,
            };
            if (c) Qa.A(0);
            else
              return (
                a.i.makeTextStreamsForClosedCaptions(a.l),
                y(Qa, a.i.filter(a.l), 0)
              );
        }
      });
    }
    function fl(a, b) {
      b = v(b);
      for (var c = b.next(); !c.done; c = b.next()) {
        var d = c.value;
        c = Y(d, "NAME");
        d = Y(d, "VALUE");
        c && d && (a.s.has(c) || a.s.set(c, d));
      }
    }
    function cl(a, b) {
      var c = new Map();
      b = v(b);
      for (var d = b.next(); !d.done; d = b.next()) {
        var e = d.value;
        d = Y(e, "NAME");
        var f = Y(e, "VALUE");
        e = Y(e, "IMPORT");
        d && f && c.set(d, f);
        e && (d = a.s.get(e)) && c.set(e, d);
      }
      return c;
    }
    function gl(a, b) {
      b = v(b);
      for (var c = b.next(); !c.done; c = b.next()) {
        var d = c.value,
          e = Y(d, "AUDIO");
        c = Y(d, "VIDEO");
        var f = Y(d, "SUBTITLES");
        d = ol(a, d);
        if (f) {
          var g = qc(sc, d);
          a.u.set(f, g);
          kb(d, g);
        }
        e && ((f = pc("audio", d)), a.u.set(e, f));
        c && ((e = pc("video", d)), a.u.set(c, e));
      }
    }
    function ll(a, b) {
      var c, d, e, f, g, h, k, l, m, p, n, r;
      return L(function (u) {
        if (1 == u.g)
          return (
            (c = zk(b, "SUBTITLES")),
            (d = c.map(function (t) {
              var w, x, C;
              return L(function (z) {
                if (1 == z.g) {
                  if ((w = a.g.disableText)) return z.return(null);
                  E(z, 2);
                  return y(z, pl(a, t), 4);
                }
                if (2 != z.g) return (x = z.h), z.return(x.stream);
                C = F(z);
                if (a.g.hls.ignoreTextStreamFailures) return z.return(null);
                throw C;
              });
            })),
            y(u, Promise.all(d), 2)
          );
        e = u.h;
        f = v(c);
        for (g = f.next(); !g.done; g = f.next())
          if (((h = g.value), (k = vk(h, "GROUP-ID")), (l = a.u.get(k))))
            if ((m = a.B.get(k)))
              for (p = v(m), n = p.next(); !n.done; n = p.next())
                (r = n.value), (r.stream.codecs = l);
        return u.return(
          e.filter(function (t) {
            return t;
          })
        );
      });
    }
    function ml(a, b) {
      var c, d;
      return L(function (e) {
        if (1 == e.g)
          return (
            (c = b.map(function (f) {
              var g, h, k;
              return L(function (l) {
                if (1 == l.g) {
                  if ((g = a.g.disableThumbnails)) return l.return(null);
                  E(l, 2);
                  return y(l, ql(a, f), 4);
                }
                if (2 != l.g) return (h = l.h), l.return(h.stream);
                k = F(l);
                if (a.g.hls.ignoreImageStreamFailures) return l.return(null);
                throw k;
              });
            })),
            y(e, Promise.all(c), 2)
          );
        d = e.h;
        return e.return(
          d.filter(function (f) {
            return f;
          })
        );
      });
    }
    function hl(a, b) {
      var c;
      return L(function (d) {
        if (1 == d.g)
          return (
            (b = b.filter(function (e) {
              var f = Y(e, "URI") || "";
              return "SUBTITLES" != Y(e, "TYPE") && "" != f;
            })),
            b.length ? y(d, pl(a, b[0]), 2) : d.A(2)
          );
        c = b.slice(1).map(function (e) {
          return pl(a, e);
        });
        return y(d, Promise.all(c), 0);
      });
    }
    function jl(a, b) {
      var c, d, e;
      return L(function (f) {
        if (1 == f.g)
          return (
            (c = b.map(function (g) {
              var h, k, l, m, p, n, r, u;
              return L(function (t) {
                if (1 == t.g)
                  return (
                    (h = Y(g, "FRAME-RATE")),
                    (k =
                      Number(Y(g, "AVERAGE-BANDWIDTH")) ||
                      Number(vk(g, "BANDWIDTH"))),
                    (l = Y(g, "RESOLUTION")),
                    (m = v(l ? l.split("x") : [null, null])),
                    (p = m.next().value),
                    (n = m.next().value),
                    (r = Y(g, "VIDEO-RANGE")),
                    y(t, rl(a, g, k), 2)
                  );
                if ((u = t.h)) {
                  for (
                    var w = t.return,
                      x = u.audio,
                      C = u.video,
                      z = v(C),
                      A = z.next();
                    !A.done;
                    A = z.next()
                  )
                    if ((A = A.value.stream))
                      (A.width = Number(p) || void 0),
                        (A.height = Number(n) || void 0),
                        (A.frameRate = Number(h) || void 0),
                        (A.hdr = r || void 0);
                  z = a.g.disableAudio;
                  if (!x.length || z) x = [null];
                  z = a.g.disableVideo;
                  if (!C.length || z) C = [null];
                  z = [];
                  x = v(x);
                  for (A = x.next(); !A.done; A = x.next()) {
                    A = A.value;
                    for (var H = v(C), G = H.next(); !G.done; G = H.next()) {
                      var D = G.value;
                      G = A ? A.stream : null;
                      var I = D ? D.stream : null,
                        J = A ? A.stream.drmInfos : null,
                        K = D ? D.stream.drmInfos : null;
                      D = (D ? D.Rc : "") + " - " + (A ? A.Rc : "");
                      (G &&
                        I &&
                        J.length &&
                        K.length &&
                        !(0 < pj(J, K).length)) ||
                        a.Ba.has(D) ||
                        ((G = {
                          id: a.Sa++,
                          language: G ? G.language : "und",
                          primary: (!!G && G.primary) || (!!I && I.primary),
                          audio: G,
                          video: I,
                          bandwidth: k,
                          allowedByApplication: !0,
                          allowedByKeySystem: !0,
                          decodingInfos: [],
                        }),
                        z.push(G),
                        a.Ba.add(D));
                    }
                  }
                  t = w.call(t, z);
                } else t = t.return([]);
                return t;
              });
            })),
            y(f, Promise.all(c), 2)
          );
        d = f.h;
        e = d.reduce(Sb, []);
        e = e.filter(function (g) {
          return null != g;
        });
        return f.return(e);
      });
    }
    function kl(a) {
      return a.map(function (b) {
        var c = Number(vk(b, "BANDWIDTH")),
          d = Y(b, "RESOLUTION"),
          e = v(d ? d.split("x") : [null, null]);
        d = e.next().value;
        e = e.next().value;
        var f = Y(b, "CODECS");
        b = vk(b, "URI");
        return {
          id: b,
          bandwidth: c,
          thumbnailWidth: Number(d),
          thumbnailHeight: Number(e),
          codecs: f,
          playlistUri: b,
        };
      });
    }
    function rl(a, b, c) {
      var d, e, f, g, h, k, l, m, p, n, r, u, t, w;
      return L(function (x) {
        if (1 == x.g)
          return (
            (d = tc),
            (e = ol(a, b)),
            (f = Y(b, "AUDIO")),
            (g = Y(b, "VIDEO")),
            (k = (h = f || g) && a.B.has(h) ? a.B.get(h) : []),
            (l = { audio: f ? k : [], video: g ? k : [] }),
            (p = !1),
            (n = vk(b, "URI")),
            (r = l.audio.find(function (C) {
              return C && C.Rc == n;
            })),
            (u = qc(d.Ja, e)),
            (t = qc(d.eb, e)) && !u
              ? (m = d.eb)
              : !k.length && t && u
              ? ((m = d.Ja), (e = [[u, t].join()]))
              : l.audio.length && r
              ? ((m = d.eb), (p = !0))
              : (m = l.video.length ? d.eb : d.Ja),
            p ? x.A(2) : y(x, sl(a, b, e, m, c), 3)
          );
        2 != x.g && (w = x.h);
        if (w) l[w.stream.type] = [w];
        else if (null === w) return x.return(null);
        tl(l);
        return x.return(l);
      });
    }
    function ol(a, b) {
      var c = [];
      a.g.disableVideo || c.push(a.g.hls.defaultVideoCodec);
      a.g.disableAudio || c.push(a.g.hls.defaultAudioCodec);
      c = Y(b, "CODECS", c.join(",")).split(/\s*,\s*/);
      a = new Set();
      b = [];
      c = v(c);
      for (var d = c.next(); !d.done; d = c.next()) {
        d = d.value;
        var e = md(d)[0];
        a.has(e) || (b.push(d), a.add(e));
      }
      return b;
    }
    function tl(a) {
      a = v(a.audio.concat(a.video));
      for (var b = a.next(); !b.done; b = a.next())
        if ((b = b.value)) {
          var c = b.stream.codecs.split(",");
          c = c.filter(function (d) {
            return "mp4a.40.34" != d;
          });
          b.stream.codecs = c.join(",");
        }
    }
    function il(a, b) {
      b = zk(b, "CLOSED-CAPTIONS");
      b = v(b);
      for (var c = b.next(); !c.done; c = b.next()) {
        c = c.value;
        var d = Y(c, "LANGUAGE");
        d = R(d || "und");
        var e = vk(c, "GROUP-ID");
        c = vk(c, "INSTREAM-ID");
        a.N.get(e) || a.N.set(e, new Map());
        a.N.get(e).set(c, d);
      }
    }
    function pl(a, b) {
      var c, d, e, f, g, h, k, l, m, p, n, r, u, t;
      return L(function (w) {
        if (1 == w.g) {
          c = vk(b, "GROUP-ID");
          d = "";
          var x = vk(b, "TYPE").toLowerCase();
          "subtitles" == x && (x = sc);
          e = x;
          e != sc && c && a.u.has(c) && (d = a.u.get(c));
          f = ul(vk(b, "URI"), a.s);
          if (a.h.has(f)) return w.return(a.h.get(f));
          g = Y(b, "LANGUAGE");
          h = Y(b, "NAME");
          k = Y(b, "DEFAULT");
          l = "YES" == k;
          "audio" == e
            ? (x = (x = Y(b, "CHANNELS"))
                ? parseInt(x.split("/")[0], 10)
                : null)
            : (x = null);
          m = x;
          "audio" == e
            ? (x = (x = Y(b, "CHANNELS")) ? x.includes("/JOC") : !1)
            : (x = !1);
          p = x;
          n = Y(b, "CHARACTERISTICS");
          r = Y(b, "FORCED");
          u = "YES" == r;
          return y(w, vl(a, f, d, e, g, l, h, m, null, n, u, p), 2);
        }
        t = w.h;
        a.B.has(c) ? a.B.get(c).push(t) : a.B.set(c, [t]);
        if (null == t) return w.return(null);
        if (a.h.has(f)) return w.return(a.h.get(f));
        a.h.set(f, t);
        return w.return(t);
      });
    }
    function ql(a, b) {
      var c, d, e, f, g, h, k, l, m, p;
      return L(function (n) {
        if (1 == n.g) {
          c = ul(vk(b, "URI"), a.s);
          d = Y(b, "CODECS", "jpeg") || "";
          if (a.h.has(c)) return n.return(a.h.get(c));
          e = Y(b, "LANGUAGE");
          f = Y(b, "NAME");
          g = Y(b, "CHARACTERISTICS");
          return y(n, vl(a, c, d, "image", e, !1, f, null, null, g, !1, !1), 2);
        }
        h = n.h;
        if (null == h) return n.return(null);
        if (a.h.has(c)) return n.return(a.h.get(c));
        if ((k = Y(b, "RESOLUTION")))
          if (((l = h.stream.segmentIndex.get(0)), (m = l.tilesLayout)))
            (h.stream.width =
              Number(k.split("x")[0]) * Number(m.split("x")[0])),
              (h.stream.height =
                Number(k.split("x")[1]) * Number(m.split("x")[1]));
        if ((p = Y(b, "BANDWIDTH"))) h.stream.bandwidth = Number(p);
        a.h.set(c, h);
        return n.return(h);
      });
    }
    function sl(a, b, c, d, e) {
      var f, g, h, k;
      return L(function (l) {
        if (1 == l.g) {
          f = ul(vk(b, "URI"), a.s);
          if (a.h.has(f)) return l.return(a.h.get(f));
          var m = Y(b, "CLOSED-CAPTIONS");
          g = "video" == d && m && "NONE" != m ? a.N.get(m) : null;
          h = pc(d, c);
          return y(
            l,
            vl(a, f, h, d, null, !1, null, null, g, null, !1, !1, e),
            2
          );
        }
        k = l.h;
        if (null == k) return l.return(null);
        if (a.h.has(f)) return l.return(a.h.get(f));
        a.h.set(f, k);
        return l.return(k);
      });
    }
    function vl(a, b, c, d, e, f, g, h, k, l, m, p, n) {
      var r,
        u,
        t,
        w,
        x,
        C,
        z,
        A,
        H,
        G,
        D,
        I,
        J,
        K,
        P,
        aa,
        ia,
        sa,
        za,
        fa,
        La,
        bb,
        Fa,
        Ca,
        Ma,
        Na,
        Pa,
        Pc,
        Qa,
        Ve,
        We,
        Ek,
        Xg,
        Yg,
        Xe,
        Fk,
        Gk,
        Hk,
        Ik;
      return L(function (Ta) {
        switch (Ta.g) {
          case 1:
            return (r = nc([a.H], [b])[0]), y(Ta, Xk(a, r), 2);
          case 2:
            u = Ta.h;
            r = u.uri;
            t = Nk(a.O, u.data, r);
            if (1 != t.type) throw new O(2, 4, 4017);
            w = [];
            if (t.segments)
              for (x = v(t.segments), C = x.next(); !C.done; C = x.next())
                (z = C.value),
                  (A = yk(z.g, "EXT-X-KEY")),
                  w.push.apply(w, ka(A));
            H = !1;
            G = [];
            D = new Set();
            I = v(w);
            for (J = I.next(); !J.done; J = I.next())
              if (((K = J.value), (P = vk(K, "METHOD")), "NONE" != P)) {
                H = !0;
                if ("AES-128" == P) return (a.Ta = !0), Ta.return(null);
                aa = vk(K, "KEYFORMAT");
                if ((sa = (ia = wl[aa]) ? ia(K) : null)) {
                  if (sa.keyIds)
                    for (
                      za = v(sa.keyIds), fa = za.next();
                      !fa.done;
                      fa = za.next()
                    )
                      (La = fa.value), D.add(La);
                  G.push(sa);
                }
              }
            if (!a.g.hls.restrictedManifestParsing && H && !G.length)
              throw new O(2, 4, 4026);
            bb = yk(t.g, "EXT-X-DEFINE");
            Fa = cl(a, bb);
            xl(a, t);
            return y(Ta, yl(a, d, c, t, Fa), 3);
          case 3:
            return (
              (Ca = Ta.h),
              zl.includes(Ca) && (c = ""),
              (Ma = new Map()),
              (Na = new Map()),
              E(Ta, 4),
              y(Ta, dl(a, b, t, d, Ca, Ma, Fa, Na, c, n), 6)
            );
          case 6:
            Pa = Ta.h;
            wa(Ta, 5);
            break;
          case 4:
            Pc = F(Ta);
            if (4035 == Pc.code)
              return (
                $a("Skipping unsupported HLS stream", Ca, b), Ta.return(null)
              );
            throw Pc;
          case 5:
            Qa = Pa[0].startTime;
            Ve = Pa[Pa.length - 1].endTime;
            We = new W(Pa);
            Ek = d == sc ? "subtitle" : void 0;
            Xg = [];
            if (l)
              for (
                Yg = v(l.split(",")), Xe = Yg.next();
                !Xe.done;
                Xe = Yg.next()
              )
                (Fk = Xe.value), Xg.push(Fk);
            Hk = (Gk = Ak(t.g, "EXT-X-SERVER-CONTROL"))
              ? null != Gk.getAttribute("CAN-SKIP-UNTIL")
              : !1;
            Ik = {
              id: a.Sa++,
              originalId: g,
              createSegmentIndex: function () {
                return Promise.resolve();
              },
              segmentIndex: We,
              mimeType: Ca,
              codecs: c,
              kind: Ek,
              encrypted: H,
              drmInfos: G,
              keyIds: D,
              language: R(e || "und"),
              originalLanguage: e,
              label: g,
              type: d,
              primary: f,
              trickModeVideo: null,
              emsgSchemeIdUris: null,
              frameRate: void 0,
              pixelAspectRatio: void 0,
              width: void 0,
              height: void 0,
              bandwidth: void 0,
              roles: Xg,
              forced: m,
              channelsCount: h,
              audioSamplingRate: null,
              spatialAudio: p,
              closedCaptions: k,
              hdr: void 0,
              tilesLayout: void 0,
            };
            return Ta.return({
              stream: Ik,
              Rc: b,
              Ae: r,
              be: Qa,
              xf: Ve,
              ud: Ma,
              Ke: Na,
              Ee: Hk,
            });
        }
      });
    }
    function xl(a, b) {
      var c = Ak(b.g, "EXT-X-PLAYLIST-TYPE"),
        d = Ak(b.g, "EXT-X-ENDLIST");
      d = (c && "VOD" == c.value) || d;
      c = c && "EVENT" == c.value && !d;
      c = !d && !c;
      if (d) el(a, Wk);
      else {
        c ? el(a, Al) : el(a, Bl);
        d = Ak(b.g, "EXT-X-TARGETDURATION");
        if (!d) throw new O(2, 4, 4024, "EXT-X-TARGETDURATION");
        d = Number(d.value);
        c = Ak(b.g, "EXT-X-PART-INF");
        a.m && c
          ? ((a.za = Number(vk(c, "PART-TARGET"))),
            (a.J = Math.min(a.za, a.J)),
            (b = Ak(b.g, "EXT-X-SERVER-CONTROL")),
            (a.ca = b ? Number(vk(b, "PART-HOLD-BACK")) : 0))
          : (a.J = Math.min(d, a.J));
        a.ma = Math.max(d, a.ma);
      }
    }
    function Cl(a, b, c, d) {
      c = Ak(c, "EXT-X-MAP");
      if (!c) return null;
      var e = vk(c, "URI");
      d = ul(nc([b], [e])[0], d);
      b = [d, Y(c, "BYTERANGE", "")].join("-");
      a.da.has(b) || ((c = Dl(d, c)), a.da.set(b, c));
      return a.da.get(b);
    }
    function Dl(a, b) {
      var c = 0,
        d = null;
      if ((b = Y(b, "BYTERANGE")))
        (c = b.split("@")),
          (d = Number(c[0])),
          (c = Number(c[1])),
          (d = c + d - 1);
      return new hh(
        function () {
          return [a];
        },
        c,
        d
      );
    }
    function El(a, b, c, d, e, f, g, h, k) {
      var l = d.g,
        m = ul(d.h, g),
        p = Ak(l, "EXTINF"),
        n = (g = 0),
        r = null;
      if (!p) {
        if (0 == d.i.length) throw new O(2, 4, 4024, "EXTINF");
        if (!a.m) return null;
      }
      var u = [];
      if (a.m)
        for (var t = {}, w = 0; w < d.i.length; t = { Xc: t.Xc }, w++) {
          var x = d.i[w],
            C = 0 == w ? c : u[u.length - 1],
            z = 0 == w ? e : C.endTime,
            A = Number(Y(x, "DURATION")) || a.za;
          if (A) {
            A = z + A;
            var H = 0,
              G = null;
            "EXT-X-PRELOAD-HINT" == x.name
              ? (H = (C = Y(x, "BYTERANGE-START")) ? Number(C) : 0)
              : ((H = Y(x, "BYTERANGE")),
                (C = v(Fl(C, H))),
                (H = C.next().value),
                (G = C.next().value));
            if ((x = Y(x, "URI")))
              (t.Xc = nc([h], [x])[0]),
                u.push(
                  new jh(
                    z,
                    A,
                    (function (D) {
                      return function () {
                        return [D.Xc];
                      };
                    })(t),
                    H,
                    G,
                    b,
                    f,
                    0,
                    Infinity
                  )
                );
          }
        }
      p
        ? (g = e + Number(p.value.split(",")[0]))
        : (g = u[u.length - 1].endTime);
      (a = Ak(l, "EXT-X-BYTERANGE"))
        ? ((r = v(Fl(c, a.value))), (n = r.next().value), (r = r.next().value))
        : u.length && ((n = u[0].ya), (r = u[u.length - 1].ua));
      c = "";
      a = null;
      "image" == k &&
        ((c = "1x1"), (k = Ak(l, "EXT-X-TILES"))) &&
        ((c = vk(k, "LAYOUT")), (k = Y(k, "DURATION")) && (a = Number(k)));
      return new jh(
        e,
        g,
        function () {
          return m.length ? [m] : [];
        },
        n,
        r,
        b,
        f,
        0,
        Infinity,
        u,
        c,
        a
      );
    }
    function Fl(a, b) {
      var c = 0,
        d = null;
      b &&
        ((c = b.split("@")),
        (b = Number(c[0])),
        (c = c[1] ? Number(c[1]) : a.ua + 1),
        (d = c + b - 1));
      return [c, d];
    }
    function nl(a) {
      if (a.j) {
        for (var b = v(a.V), c = b.next(); !c.done; c = b.next())
          a.j.Jc(c.value);
        a.V = [];
      }
    }
    function dl(a, b, c, d, e, f, g, h, k, l) {
      var m, p, n, r, u, t, w, x, C, z, A, H, G, D, I, J, K, P, aa, ia, sa, za;
      return L(function (fa) {
        switch (fa.g) {
          case 1:
            m = c.segments;
            n = Bk(c.g, "EXT-X-MEDIA-SEQUENCE", 0);
            u = (r = Ak(c.g, "EXT-X-SKIP"))
              ? Number(Y(r, "SKIPPED-SEGMENTS"))
              : 0;
            t = n + u;
            if (a.o != Wk && f.has(t)) {
              w = f.get(t);
              fa.A(2);
              break;
            }
            if (null != a.S) {
              fa.A(3);
              break;
            }
            p = Cl(a, c.h, m[0].g, g);
            x = a;
            return y(fa, Gl(a, b, p, e, t, !1, m[0], g, d, k, l), 4);
          case 4:
            x.S = fa.h;
          case 3:
            w = a.S;
          case 2:
            C = m[0].h;
            C.split("/").pop();
            z = Bk(c.g, "EXT-X-DISCONTINUITY-SEQUENCE");
            if (a.m && (h.has(z) || h.set(z, t), u))
              for (A = h; A.has(z + 1) && A.get(z + 1) < t; ) z++;
            H = a.M.get(z) || 0;
            G = [];
            D = 0;
          case 5:
            if (!(D < m.length)) {
              fa.A(7);
              break;
            }
            I = m[D];
            J = G[G.length - 1];
            K = 0 == D ? w : J.endTime;
            t = n + u + D;
            f.set(t, K);
            p = Cl(a, c.h, I.g, g);
            P = Ak(I.g, "EXT-X-DISCONTINUITY");
            if (!P) {
              fa.A(8);
              break;
            }
            z++;
            h.set(z, t);
            return y(fa, Hl(a, z, b, p, e, t, I, g, K, d, k, l), 9);
          case 9:
            H = fa.h;
          case 8:
            !a.m &&
              (aa = a.i.isAutoLowLatencyMode()) &&
              (a.i.enableLowLatencyMode(), (a.m = a.i.isLowLatencyMode()));
            ia = Ak(I.g, "EXTINF");
            if (a.m || ia) {
              if ((sa = El(a, p, J, I, K, H, g, c.h, d)))
                G.push(sa),
                  (za = K.toFixed(2)),
                  a.Y.has(za) || a.Y.set(za, I.g);
            } else a.m || $a("Low-latency HLS live stream detected, but low-latency streaming mode is not enabled in Shaka Player. Set streaming.lowLatencyMode configuration to true, and see https://bit.ly/3clctcj for details.");
            D++;
            fa.A(5);
            break;
          case 7:
            return fa.return(G);
        }
      });
    }
    function Hl(a, b, c, d, e, f, g, h, k, l, m, p) {
      var n, r;
      return L(function (u) {
        if (1 == u.g)
          return (
            (n = 0),
            a.M.has(b)
              ? ((n = a.M.get(b)), u.A(2))
              : y(u, Gl(a, c, d, e, f, !0, g, h, l, m, p), 3)
          );
        2 != u.g && ((r = u.h), (n = k - r), a.M.set(b, n));
        return u.return(n);
      });
    }
    function Il(a, b, c, d, e, f) {
      var g, h, k, l, m, p;
      return L(function (n) {
        switch (n.g) {
          case 1:
            g = $g;
            h = vi(b.Ea(), b.ya, b.ua, a.g.retryParameters);
            a.i.modifySegmentRequest(h, {
              type: c,
              init: b instanceof hh,
              duration: b.endTime - b.startTime,
              mimeType: d,
              codecs: e,
              bandwidth: f,
            });
            if (a.g.hls.useFullSegmentsForStartTime)
              return n.return(Jl(a, h, g));
            k = vi(b.Ea(), b.ya, b.ya + 2048 - 1, a.g.retryParameters);
            a.i.modifySegmentRequest(k, {
              type: c,
              init: b instanceof hh,
              duration: b.endTime - b.startTime,
              mimeType: d,
              codecs: e,
              bandwidth: f,
            });
            E(n, 2);
            return y(n, Jl(a, k, g), 4);
          case 4:
            return (l = n.h), n.return(l);
          case 2:
            m = F(n);
            if (7001 == m.code) throw m;
            $a(
              "Unable to fetch the starting part of HLS segment! Falling back to a full segment request, which is expensive!  Your server should support Range requests and CORS preflights.",
              k.uris[0]
            );
            return y(n, Jl(a, h, g), 5);
          case 5:
            return (p = n.h), n.return(p);
        }
      });
    }
    function Gl(a, b, c, d, e, f, g, h, k, l, m) {
      var p, n, r, u, t, w, x, C;
      return L(function (z) {
        switch (z.g) {
          case 1:
            p = El(a, c, null, g, 0, 0, h, "", k);
            if (a.l && !f && ((n = a.h.get(b)), (r = n.ud.get(e)), void 0 != r))
              return z.return(r);
            d = d.toLowerCase();
            if (zl.includes(d))
              throw (
                ($a("Raw formats are not yet supported.  Skipping " + d),
                new O(1, 4, 4035))
              );
            if ("video/webm" == d)
              throw (
                ($a("WebM in HLS is not yet supported.  Skipping."),
                new O(1, 4, 4035))
              );
            if ("video/mp4" != d && "audio/mp4" != d) {
              z.A(2);
              break;
            }
            u = [Il(a, p, k, d, l, m)];
            c && u.push(Il(a, c, k, d, l, m));
            return y(z, Promise.all(u), 3);
          case 3:
            return (
              (t = z.h),
              (w = t[0]),
              (x = t[1] || t[0]),
              z.return(Kl(b, w.uri, w.data, x.data))
            );
          case 2:
            if ("video/mp2t" != d) {
              z.A(4);
              break;
            }
            return y(z, Il(a, p, k, d, l, m), 5);
          case 5:
            return (C = z.h), z.return(Ll(b, C.uri, C.data));
          case 4:
            throw new O(2, 4, 4030, b);
        }
      });
    }
    function Kl(a, b, c, d) {
      var e = 0;
      new T()
        .box("moov", Gf)
        .box("trak", Gf)
        .box("mdia", Gf)
        .P("mdhd", function (h) {
          e = Nf(h.reader, h.version).timescale;
          h.parser.stop();
        })
        .parse(d, !0);
      if (!e) throw new O(2, 4, 4030, a, b);
      var f = 0,
        g = !1;
      new T()
        .box("moof", Gf)
        .box("traf", Gf)
        .P("tfdt", function (h) {
          f = Mf(h.reader, h.version).ed / e;
          g = !0;
          h.parser.stop();
        })
        .parse(c, !0);
      if (!g) throw new O(2, 4, 4030, a, b);
      return f;
    }
    function Ll(a, b, c) {
      function d() {
        f.seek(g + 188);
        h = f.ga();
        71 != h && (f.seek(g + 192), (h = f.ga()));
        71 != h && (f.seek(g + 204), (h = f.ga()));
        71 != h && e();
        f.fe(1);
      }
      function e() {
        throw new O(2, 4, 4030, a, b);
      }
      var f = new S(c, 0),
        g = 0,
        h = 0;
      for (c = Math.min(f.R.byteLength - 188, 940); ; ) {
        g = f.fa();
        h = f.ga();
        if (71 != h) {
          if (0 < c) {
            --c;
            continue;
          }
          e();
        }
        c = 0;
        var k = f.Qb();
        if (8191 == (k & 8191)) d();
        else if (k & 16384)
          if (
            ((k = (f.ga() & 48) >> 4),
            (0 != k && 2 != k) || e(),
            3 == k && ((k = f.ga()), f.skip(k)),
            1 != f.K() >> 8)
          )
            d();
          else {
            f.skip(3);
            c = f.ga() >> 6;
            (0 != c && 1 != c) || e();
            0 == f.ga() && e();
            c = f.ga();
            k = f.Qb();
            var l = f.Qb();
            return (
              (1073741824 * ((c & 14) >> 1) +
                (((k & 65534) << 14) | ((l & 65534) >> 1))) /
              9e4
            );
          }
        else d();
      }
    }
    function ul(a, b) {
      a = String(a).replace(/%7B/g, "{").replace(/%7D/g, "}");
      var c = a.match(/{\$\w*}/g);
      if (c) {
        c = v(c);
        for (var d = c.next(); !d.done; d = c.next()) {
          d = d.value;
          var e = d.slice(2, d.length - 1),
            f = b.get(e);
          if (f) a = a.replace(d, f);
          else throw new O(2, 4, 4039, e);
        }
      }
      return a;
    }
    function yl(a, b, c, d, e) {
      var f, g, h, k, l, m, p, n, r, u, t;
      return L(function (w) {
        if (1 == w.g) {
          f = tc;
          g = $g;
          h = ul(d.segments[0].h, e);
          k = new $b(h);
          l = k.wa.split(".").pop();
          m = Ml[b];
          if ((p = m[l])) return w.return(p);
          if (b == f.ha)
            return c && "vtt" != c && "wvtt" != c
              ? w.return("application/mp4")
              : w.return("text/vtt");
          if (b == f.rc && (!c || "jpeg" == c)) return w.return("image/jpeg");
          n = Sg([h], a.g.retryParameters);
          n.method = "HEAD";
          return y(w, Jl(a, n, g), 2);
        }
        r = w.h;
        u = r.headers["content-type"];
        return u ? w.return(u.split(";")[0]) : ((t = m.mp4), w.return(t));
      });
    }
    function Xk(a, b) {
      b = Sg([b], a.g.retryParameters);
      a.i.modifyManifestRequest(b, { format: "h" });
      return Jl(a, b, 0);
    }
    function Vk(a) {
      var b, c;
      L(function (d) {
        if (1 == d.g) {
          if (!a.i) return d.return();
          E(d, 2);
          return a.g.hls.restrictedManifestParsing
            ? y(d, $k(a), 5)
            : y(d, a.update(), 5);
        }
        if (2 != d.g) return (b = a.Aa), a.C.X(b), wa(d, 0);
        c = F(d);
        if (!a.i) return d.return();
        if (a.g.raiseFatalErrorOnManifestUpdateRequestFailure)
          return a.i.onError(c), d.return();
        c.severity = 1;
        a.i.onError(c);
        a.C.X(0.1);
        B(d);
      });
    }
    function el(a, b) {
      a.o = b;
      a.j && a.j.Sb(a.o == Wk);
      a.o != Wk || a.C.stop();
    }
    function Jl(a, b, c) {
      if (!a.F) throw new O(2, 7, 7001);
      b = a.i.networkingEngine.request(c, b);
      Ng(a.F, b);
      return b.promise;
    }
    M("shaka.hls.HlsParser", Uk);
    var zl = ["audio/aac", "audio/ac3", "audio/ec3", "audio/mpeg"],
      Ml = {
        audio: {
          mp4: "audio/mp4",
          mp4a: "audio/mp4",
          m4s: "audio/mp4",
          m4i: "audio/mp4",
          m4a: "audio/mp4",
          m4f: "audio/mp4",
          cmfa: "audio/mp4",
          ts: "video/mp2t",
          aac: "audio/aac",
          ac3: "audio/ac3",
          ec3: "audio/ec3",
          mp3: "audio/mpeg",
        },
        video: {
          mp4: "video/mp4",
          mp4v: "video/mp4",
          m4s: "video/mp4",
          m4i: "video/mp4",
          m4v: "video/mp4",
          m4f: "video/mp4",
          cmfv: "video/mp4",
          ts: "video/mp2t",
        },
        text: {
          mp4: "application/mp4",
          m4s: "application/mp4",
          m4i: "application/mp4",
          m4f: "application/mp4",
          cmft: "application/mp4",
          vtt: "text/vtt",
          ttml: "application/ttml+xml",
        },
        image: {
          jpg: "image/jpeg",
          png: "image/png",
          svg: "image/svg+xml",
          webp: "image/webp",
          avif: "image/avif",
        },
      },
      wl = {
        "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": function (a) {
          var b = vk(a, "METHOD");
          if (!["SAMPLE-AES", "SAMPLE-AES-CTR"].includes(b)) return null;
          b = vk(a, "URI");
          b = Tk(b);
          b = N(b.data);
          b = oc("com.widevine.alpha", [{ initDataType: "cenc", initData: b }]);
          if ((a = Y(a, "KEYID")))
            b.keyIds = new Set([a.toLowerCase().substr(2)]);
          return b;
        },
        "com.microsoft.playready": function (a) {
          var b = vk(a, "METHOD");
          if (!["SAMPLE-AES", "SAMPLE-AES-CTR"].includes(b)) return null;
          a = vk(a, "URI");
          a = Tk(a);
          a = N(a.data);
          b = new Uint8Array([
            154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95,
            149,
          ]);
          a = Vf(a, b);
          return oc("com.microsoft.playready", [
            { initDataType: "cenc", initData: a },
          ]);
        },
      },
      Wk = "VOD",
      Bl = "EVENT",
      Al = "LIVE",
      bl = { ze: Wk, bg: Bl, ye: Al };
    Zh.m3u8 = function () {
      return new Uk();
    };
    Xh["application/x-mpegurl"] = function () {
      return new Uk();
    };
    Xh["application/vnd.apple.mpegurl"] = function () {
      return new Uk();
    };
    function Nl(a, b) {
      this.h = a;
      this.g = new Set([a]);
      b = b || [];
      a = v(b);
      for (b = a.next(); !b.done; b = a.next()) this.add(b.value);
    }
    Nl.prototype.add = function (a) {
      return Ol(this.h, a) ? (this.g.add(a), !0) : !1;
    };
    function Ol(a, b) {
      var c;
      if (
        !(c =
          !!a.audio != !!b.audio ||
          !!a.video != !!b.video ||
          a.language != b.language) &&
        (c = a.audio && b.audio)
      ) {
        c = a.audio;
        var d = b.audio;
        c = !(
          (!(
            !c.channelsCount ||
            !d.channelsCount ||
            2 < c.channelsCount ||
            2 < d.channelsCount
          ) ||
            c.channelsCount == d.channelsCount) &&
          Pl(c, d) &&
          Ql(c.roles, d.roles) &&
          c.groupId === d.groupId
        );
      }
      !c &&
        (c = a.video && b.video) &&
        ((a = a.video),
        (b = b.video),
        (c = !(Pl(a, b) && Ql(a.roles, b.roles))));
      return c ? !1 : !0;
    }
    Nl.prototype.values = function () {
      return this.g.values();
    };
    function Pl(a, b) {
      if (a.mimeType != b.mimeType) return !1;
      a = a.codecs.split(",").map(function (d) {
        return md(d)[0];
      });
      b = b.codecs.split(",").map(function (d) {
        return md(d)[0];
      });
      if (a.length != b.length) return !1;
      a.sort();
      b.sort();
      for (var c = 0; c < a.length; c++) if (a[c] != b[c]) return !1;
      return !0;
    }
    function Ql(a, b) {
      a = new Set(a);
      b = new Set(b);
      a.delete("main");
      b.delete("main");
      if (a.size != b.size) return !1;
      a = v(a);
      for (var c = a.next(); !c.done; c = a.next())
        if (!b.has(c.value)) return !1;
      return !0;
    }
    function Rl(a) {
      this.g = a;
      this.h = new Sl(
        a.language,
        "",
        a.audio && a.audio.channelsCount ? a.audio.channelsCount : 0,
        ""
      );
    }
    Rl.prototype.create = function (a) {
      var b = this,
        c = a.filter(function (d) {
          return Ol(b.g, d);
        });
      return c.length ? new Nl(c[0], c) : this.h.create(a);
    };
    function Sl(a, b, c, d, e) {
      e = void 0 === e ? [] : e;
      this.j = a;
      this.l = b;
      this.h = c;
      this.i = void 0 === d ? "" : d;
      this.g = e;
    }
    Sl.prototype.create = function (a, b) {
      function c(g) {
        var h = new Nl(g[0]);
        g = v(g);
        for (var k = g.next(); !k.done; k = g.next())
          (k = k.value), Ol(h.h, k) && h.add(k);
        return h;
      }
      var d = [];
      d = Tl(a, this.j);
      var e = a.filter(function (g) {
        return g.primary;
      });
      d = d.length ? d : e.length ? e : a;
      var f = b || Infinity;
      a = d.filter(function (g) {
        return g.bandwidth <= f;
      });
      if (a.length) d = a;
      else return (d = Ul(d, f)), c([d]);
      a = Vl(d, this.l);
      a.length && (d = a);
      this.h && ((a = Jd(d, this.h)), a.length && (d = a));
      this.i && ((a = Wl(d, this.i)), a.length && (d = a));
      this.g.length && ((a = Id(d, [], this.g)), a.length && (d = a));
      a = Ul(d, f);
      d = Xl(d, a);
      return c(d);
    };
    function Ul(a, b) {
      var c = a[0],
        d = void 0;
      a = v(a);
      for (var e = a.next(); !e.done; e = a.next())
        (e = e.value),
          e.bandwidth < c.bandwidth && (c = e),
          e.bandwidth <= b && (!d || e.bandwidth > d.bandwidth) && (d = e);
      return d || c;
    }
    function Xl(a, b) {
      return b && b.audio && void 0 !== b.audio.groupId
        ? a.filter(function (c) {
            return c.audio.groupId === b.audio.groupId;
          })
        : a;
    }
    function Tl(a, b) {
      b = R(b);
      var c = Fd(
        b,
        a.map(function (d) {
          return Ed(d);
        })
      );
      return c
        ? a.filter(function (d) {
            return c == Ed(d);
          })
        : [];
    }
    function Vl(a, b) {
      var c = "main" === b;
      return a.filter(function (d) {
        if (!d.audio) return !1;
        var e = 0 == d.audio.roles.length;
        return b ? d.audio.roles.includes(b) || (c && e) : e;
      });
    }
    function Wl(a, b) {
      return a.filter(function (c) {
        return c.audio ? c.audio.label.toLowerCase() == b.toLowerCase() : !1;
      });
    }
    function Yl() {
      this.g = Zl;
      this.h = new Map().set(Zl, 2).set($l, 1);
    }
    function am(a, b, c) {
      a.h.set(Zl, c).set($l, b);
    }
    var $l = 0,
      Zl = 1;
    function bm() {
      this.g = new muxjs.mp4.CaptionParser();
      this.g.init();
      this.m = [];
      this.l = [];
      this.h = {};
    }
    bm.prototype.init = function (a) {
      var b = muxjs.mp4.probe;
      a = N(a);
      this.m = b.videoTrackIds(a);
      this.h = b.timescale(a);
      this.l = b.getTrackCodecInformation(a);
    };
    bm.prototype.j = function (a) {
      a = N(a);
      var b = !1,
        c = this.l[0];
      c && c.codec && (b = 0 === c.codec.search(/^(hvc1|hev1|dvh)/));
      if ((b = this.g.parse(a, this.m, this.h, b)) && b.captions)
        for (a = [], b = v(b.captions), c = b.next(); !c.done; c = b.next())
          (c = c.value),
            a.push({
              stream: c.stream,
              cue: new nb(c.startTime, c.endTime, c.text),
            });
      else a = [];
      this.g.clearParsedCaptions();
      return a;
    };
    bm.prototype.i = function () {
      this.g.resetCaptionStream();
    };
    function cm(a) {
      this.h = new Bf();
      (void 0 === a ? "" : a).toLowerCase().includes("video/mp4") &&
        (this.h = new Pf());
      this.g = new vf();
    }
    cm.prototype.init = function (a) {
      this.h.init(a);
    };
    cm.prototype.j = function (a) {
      a = this.h.parse(a);
      a = v(a);
      for (var b = a.next(); !b.done; b = a.next()) {
        var c = b.value,
          d = N(c.Ef);
        if (
          0 < d.length &&
          ((b = this.g),
          (c = c.pts),
          (d = new S(d, 0)),
          181 === d.ga() &&
            49 === d.Qb() &&
            1195456820 === d.K() &&
            3 === d.ga())
        ) {
          var e = d.ga();
          if (0 !== (e & 64)) {
            e &= 31;
            d.skip(1);
            for (var f = 0; f < e; f++) {
              var g = d.ga(),
                h = (g & 4) >> 2,
                k = d.ga(),
                l = d.ga();
              h &&
                ((g &= 3),
                0 === g || 1 === g
                  ? b.h.push({
                      pts: c,
                      type: g,
                      Ca: k,
                      Ua: l,
                      order: b.h.length,
                    })
                  : (b.g.push({ pts: c, type: g, value: k, order: b.g.length }),
                    b.g.push({
                      pts: c,
                      type: 2,
                      value: l,
                      order: b.g.length,
                    })));
            }
          }
        }
      }
      return xf(this.g);
    };
    cm.prototype.i = function () {
      var a = this.g;
      a.l = 0;
      a.h = [];
      a.g = [];
      var b = a.i;
      b.i = [];
      b.h = [];
      b.g = 0;
      wf(a);
      a = v(a.j.values());
      for (b = a.next(); !b.done; b = a.next()) pf(b.value);
    };
    function dm(a) {
      function b() {
        e = !0;
      }
      function c(m) {
        g.push(m);
        Gf(m);
      }
      var d = (a = N(a)),
        e = !1,
        f,
        g = [],
        h = [];
      new T()
        .box("moov", c)
        .box("trak", c)
        .box("mdia", c)
        .box("minf", c)
        .box("stbl", c)
        .P("stsd", function (m) {
          f = m;
          g.push(m);
          If(m);
        })
        .P("encv", b)
        .P("enca", b)
        .P("hev1", function (m) {
          h.push({ box: m, sb: 1701733238 });
        })
        .P("hvc1", function (m) {
          h.push({ box: m, sb: 1701733238 });
        })
        .P("avc1", function (m) {
          h.push({ box: m, sb: 1701733238 });
        })
        .P("avc3", function (m) {
          h.push({ box: m, sb: 1701733238 });
        })
        .P("ac-3", function (m) {
          h.push({ box: m, sb: 1701733217 });
        })
        .P("ec-3", function (m) {
          h.push({ box: m, sb: 1701733217 });
        })
        .P("mp4a", function (m) {
          h.push({ box: m, sb: 1701733217 });
        })
        .parse(a);
      if (e) return a;
      if (0 == h.length || !f) throw (fb(Zc(a)), new O(2, 3, 3019));
      h.reverse();
      for (var k = v(h), l = k.next(); !l.done; l = k.next())
        (l = l.value), (d = em(d, f, l.box, g, l.sb));
      return Bc()
        ? ((k = new Uint8Array(a.byteLength + d.byteLength)),
          k.set(d),
          k.set(a, d.byteLength),
          k)
        : d;
    }
    function em(a, b, c, d, e) {
      var f = fm.value(),
        g = a.subarray(c.start, c.start + c.size),
        h = Mb(g),
        k = new Uint8Array(c.size + f.byteLength);
      k.set(g, 0);
      g = Mb(k);
      g.setUint32(4, e);
      k.set(f, c.size);
      e = h.getUint32(4);
      g.setUint32(c.size + 16, e);
      gm(k, 0, k.byteLength);
      e = new Uint8Array(a.byteLength + k.byteLength);
      c = Dc("Xbox One") || Bc() ? c.start : c.start + c.size;
      f = a.subarray(c);
      e.set(a.subarray(0, c));
      e.set(k, c);
      e.set(f, c + k.byteLength);
      a = v(d);
      for (d = a.next(); !d.done; d = a.next())
        (d = d.value), gm(e, d.start, d.size + k.byteLength);
      k = Mb(e, b.start);
      b = Hf(b);
      a = k.getUint32(b);
      k.setUint32(b, a + 1);
      return e;
    }
    function gm(a, b, c) {
      a = Mb(a, b);
      b = a.getUint32(0);
      0 != b &&
        (1 == b
          ? (a.setUint32(8, c >> 32), a.setUint32(12, c & 4294967295))
          : a.setUint32(0, c));
    }
    var fm = new wc(function () {
      return new Uint8Array([
        0, 0, 0, 80, 115, 105, 110, 102, 0, 0, 0, 12, 102, 114, 109, 97, 0, 0,
        0, 0, 0, 0, 0, 20, 115, 99, 104, 109, 0, 0, 0, 0, 99, 101, 110, 99, 0,
        1, 0, 0, 0, 0, 0, 40, 115, 99, 104, 105, 0, 0, 0, 32, 116, 101, 110, 99,
        0, 0, 0, 0, 0, 0, 1, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ]);
    });
    function hm(a) {
      var b = this;
      this.m = a;
      this.h = this.i = null;
      this.l = new yi();
      this.g = null;
      this.u = 0;
      this.o = function (c) {
        a.onError(c);
      };
      this.s = [];
      this.j = new wi(function () {
        return im(b);
      });
    }
    hm.prototype.destroy = function () {
      return this.j.destroy();
    };
    function im(a) {
      a.l.release();
      a.l = null;
      a.o = function () {};
      a.h = null;
      a.g = null;
      a.m = null;
      a.i = null;
      jm(a);
      return Promise.resolve();
    }
    hm.prototype.configure = function (a) {
      this.i = a;
    };
    hm.prototype.Fb = function (a) {
      var b = this;
      if (window.WebKitMediaKeys)
        if (WebKitMediaKeys.isTypeSupported("com.apple.fps.1_0", "video/mp4"))
          this.g = "com.apple.fps.1_0";
        else this.m.onError(new O(2, 6, 6001, "Key System not supported"));
      null !== this.g &&
        ((this.h = a),
        this.l.G(this.h, "webkitneedkey", function (c) {
          return km(b, c.initData);
        }));
    };
    function jm(a) {
      for (var b = 0; b < a.s.length; b++) {
        var c = a.s[b];
        try {
          c.close();
        } catch (d) {}
      }
    }
    function km(a, b) {
      if (!a.j.g && null !== a.g)
        try {
          b = a.i.initDataTransform(b, "", {
            serverCertificate: a.i.advanced[a.g].serverCertificate,
          });
          if (
            !a.h.webkitKeys &&
            (a.h.webkitSetMediaKeys(new WebKitMediaKeys(a.g)), !a.h.webkitKeys)
          )
            throw Error("Failed to create media keys");
          var c = a.h.webkitKeys.createSession("video/mp4", b);
          if (!c) throw Error("Failed to create session");
          a.s.push(c);
          a.l.G(c, "webkitkeymessage", function (d) {
            lm(a, d);
          });
          a.l.G(c, "webkitkeyadded", function () {
            a.j.g || (a.u = 0);
          });
          a.l.G(c, "webkitkeyerror", function () {
            a.j.g ||
              (a.u++ >= a.i.retryParameters.maxAttempts &&
                a.o(new O(2, 6, 4013, a.h.error)));
          });
        } catch (d) {
          a.m.onError(new O(2, 6, 6005, d));
        }
    }
    function lm(a, b) {
      var c, d, e, f, g, h, k, l, m, p;
      L(function (n) {
        switch (n.g) {
          case 1:
            if (a.j.g || null === a.g) return n.return();
            c = b.target;
            d = a.i.servers[a.g];
            e = Sg([d], a.i.retryParameters);
            e.body = b.message;
            e.method = "POST";
            e.licenseRequestType = b.messageType;
            e.sessionId = c.sessionId;
            E(n, 2);
            g = a.m.Mb.request(2, e);
            return y(n, g.promise, 4);
          case 4:
            f = n.h;
            wa(n, 3);
            break;
          case 2:
            return (h = F(n)), (k = new O(2, 6, 6007, h)), a.o(k), n.return();
          case 3:
            if (a.j.g) return n.return();
            E(n, 5);
            return y(n, c.update(f.data), 7);
          case 7:
            wa(n, 6);
            break;
          case 5:
            return (
              (l = F(n)), (m = new O(2, 6, 6008, l.message)), a.o(m), n.return()
            );
          case 6:
            if (a.j.g) return n.return();
            p = new Ig("drmsessionupdate");
            a.m.onEvent(p);
            B(n);
        }
      });
    }
    function mm(a) {
      return !a || (1 == a.length && 1e-6 > a.end(0) - a.start(0))
        ? null
        : a.length
        ? a.end(a.length - 1)
        : null;
    }
    function nm(a, b, c) {
      c = void 0 === c ? 0 : c;
      return !a ||
        !a.length ||
        (1 == a.length && 1e-6 > a.end(0) - a.start(0)) ||
        b > a.end(a.length - 1)
        ? !1
        : b + c >= a.start(0);
    }
    function om(a, b) {
      if (!a || !a.length || (1 == a.length && 1e-6 > a.end(0) - a.start(0)))
        return 0;
      var c = 0;
      a = v(pm(a));
      for (var d = a.next(); !d.done; d = a.next()) {
        var e = d.value;
        d = e.start;
        e = e.end;
        e > b && (c += e - Math.max(d, b));
      }
      return c;
    }
    function qm(a, b, c) {
      if (!a || !a.length || (1 == a.length && 1e-6 > a.end(0) - a.start(0)))
        return null;
      a = pm(a).findIndex(function (d, e, f) {
        return d.start > b && (0 == e || f[e - 1].end - b <= c);
      });
      return 0 <= a ? a : null;
    }
    function pm(a) {
      if (!a) return [];
      for (var b = [], c = 0; c < a.length; c++)
        b.push({ start: a.start(c), end: a.end(c) });
      return b;
    }
    function rm(a, b) {
      this.j = a;
      this.m = sm(a);
      this.g = a.g.currentTime;
      this.l = Date.now() / 1e3;
      this.h = !1;
      this.o = b;
      this.i = function () {};
    }
    rm.prototype.release = function () {
      this.j = null;
      this.i = function () {};
    };
    function tm(a, b) {
      a.i = b;
    }
    function um(a) {
      this.g = a;
    }
    function sm(a) {
      if (a.g.paused || 0 == a.g.playbackRate || 0 == a.g.buffered.length)
        var b = !1;
      else
        a: {
          b = a.g.currentTime;
          a = v(pm(a.g.buffered));
          for (var c = a.next(); !c.done; c = a.next())
            if (((c = c.value), !(b < c.start - 0.1 || b > c.end - 0.5))) {
              b = !0;
              break a;
            }
          b = !1;
        }
      return b;
    }
    function vm(a, b, c, d, e) {
      var f = this;
      this.g = a;
      this.B = b;
      this.l = c;
      this.u = e;
      this.i = new yi();
      this.s = !1;
      this.C = a.readyState;
      this.j = !1;
      this.h = d;
      this.o = !1;
      this.i.G(a, "waiting", function () {
        return wm(f);
      });
      this.m = new Q(function () {
        wm(f);
      }).Ga(0.25);
    }
    vm.prototype.release = function () {
      this.i && (this.i.release(), (this.i = null));
      null != this.m && (this.m.stop(), (this.m = null));
      this.h && (this.h.release(), (this.h = null));
      this.g = this.B = this.u = null;
    };
    vm.prototype.yd = function () {
      this.o = !0;
      wm(this);
    };
    function wm(a) {
      if (0 != a.g.readyState) {
        if (a.g.seeking) {
          if (!a.s) return;
        } else a.s = !1;
        if (
          !a.g.paused ||
          (0 == a.g.currentTime && (a.g.autoplay || 0 != a.g.currentTime))
        ) {
          a.g.readyState != a.C && ((a.j = !1), (a.C = a.g.readyState));
          var b;
          if (!(b = !a.h)) {
            b = a.h;
            var c = b.j,
              d = sm(c),
              e = c.g.currentTime,
              f = Date.now() / 1e3;
            if (b.g != e || b.m != d)
              (b.l = f), (b.g = e), (b.m = d), (b.h = !1);
            e = f - b.l;
            if ((d = e >= b.o && d && !b.h))
              b.i(b.g, e), (b.h = !0), (b.g = c.g.currentTime);
            b = !d;
          }
          if (b) {
            e = a.l.smallGapLimit;
            var g = a.g.currentTime;
            b = a.g.buffered;
            c = qm(b, g, a.l.gapDetectionThreshold);
            if (
              !(
                null == c ||
                (0 == c && !a.o) ||
                ((d = b.start(c)), d >= a.B.Wa())
              )
            ) {
              var h = d - g;
              e = h <= e;
              f = !1;
              0.001 > h ||
                (e ||
                  a.j ||
                  ((a.j = !0),
                  (g = new Map().set("currentTime", g).set("gapSize", h)),
                  (g = new Ig("largegap", g)),
                  (g.cancelable = !0),
                  a.u(g),
                  a.l.jumpLargeGaps && !g.defaultPrevented && (f = !0)),
                !e && !f) ||
                (0 != c && b.end(c - 1), (a.g.currentTime = d));
            }
          }
        }
      }
    }
    function xm(a, b, c) {
      var d = this;
      this.i = a;
      this.B = null;
      this.s = b;
      this.g = {};
      this.u = {};
      this.N = {};
      this.h = null;
      this.S = c || function () {};
      this.m = {};
      this.l = new yi();
      this.F = {};
      this.C = null;
      this.H = new vc();
      this.O = !1;
      this.j = ym(this, this.H);
      this.o = !1;
      this.J = new wi(function () {
        return zm(d);
      });
      this.M = "";
    }
    function ym(a, b) {
      var c = new MediaSource();
      a.l.la(c, "sourceopen", function () {
        URL.revokeObjectURL(a.M);
        b.resolve();
      });
      a.l.la(a.i, "playing", function () {
        a.O = !0;
      });
      a.M = Am(c);
      a.i.src = a.M;
      return c;
    }
    q = xm.prototype;
    q.destroy = function () {
      return this.J.destroy();
    };
    function zm(a) {
      var b, c, d, e, f, g, h, k;
      return L(function (l) {
        if (1 == l.g) {
          b = [];
          for (c in a.m)
            for (
              d = a.m[c],
                e = d[0],
                a.m[c] = d.slice(0, 1),
                e && b.push(e.p.catch(Tb)),
                f = v(d.slice(1)),
                g = f.next();
              !g.done;
              g = f.next()
            )
              (h = g.value), h.p.reject(new O(2, 7, 7003, void 0));
          a.h && b.push(a.h.destroy());
          a.s && b.push(a.s.destroy());
          for (k in a.F) b.push(a.F[k].destroy());
          return y(l, Promise.all(b), 2);
        }
        a.l && (a.l.release(), (a.l = null));
        a.i && (a.i.removeAttribute("src"), a.i.load(), (a.i = null));
        a.B = null;
        a.j = null;
        a.h = null;
        a.s = null;
        a.g = {};
        a.F = {};
        a.C = null;
        a.m = {};
        B(l);
      });
    }
    q.init = function (a, b) {
      var c = this,
        d,
        e,
        f,
        g,
        h,
        k,
        l,
        m;
      return L(function (p) {
        if (1 == p.g) return (d = tc), y(p, c.H, 2);
        e = {};
        f = v(a.keys());
        for (g = f.next(); !g.done; e = { pa: e.pa }, g = f.next())
          (e.pa = g.value),
            (h = a.get(e.pa)),
            (k = jd(h.mimeType, h.codecs)),
            e.pa == d.ha
              ? Bm(c, k)
              : ((!b && ad(k)) ||
                  !fd(k, e.pa) ||
                  ((c.F[e.pa] = new ed()), (k = hd(e.pa, k))),
                (l = k + c.B.sourceBufferExtraFeatures),
                (m = c.j.addSourceBuffer(l)),
                c.l.G(
                  m,
                  "error",
                  (function (n) {
                    return function () {
                      return Cm(c, n.pa);
                    };
                  })(e)
                ),
                c.l.G(
                  m,
                  "updateend",
                  (function (n) {
                    return function () {
                      return Dm(c, n.pa);
                    };
                  })(e)
                ),
                (c.g[e.pa] = m),
                (c.u[e.pa] = k),
                (c.m[e.pa] = []),
                (c.N[e.pa] = !!h.drmInfos.length));
        B(p);
      });
    };
    q.configure = function (a) {
      this.B = a;
    };
    function Bm(a, b) {
      a.h || (a.h = new od(a.s));
      a = a.h;
      "application/cea-608" == b || "application/cea-708" == b
        ? (a.j = null)
        : (a.j = Vb(qd[b]));
    }
    function Em(a) {
      return a.o ? !1 : a.j ? "ended" == a.j.readyState : !0;
    }
    function Fm(a, b) {
      a.o
        ? (a = null)
        : b == sc
        ? (a = a.h.g)
        : ((a = Gm(a, b)),
          (a =
            !a || (1 == a.length && 1e-6 > a.end(0) - a.start(0))
              ? null
              : 1 == a.length && 0 > a.start(0)
              ? 0
              : a.length
              ? a.start(0)
              : null));
      return a;
    }
    function Hm(a, b) {
      return a.o ? null : b == sc ? a.h.h : mm(Gm(a, b));
    }
    function Im(a, b, c) {
      if (a.o) return 0;
      if (b == sc)
        return (a = a.h), null == a.h || a.h < c ? 0 : a.h - Math.max(c, a.g);
      a = Gm(a, b);
      return om(a, c);
    }
    q.gb = function () {
      var a = {
        total: this.o ? [] : pm(this.i.buffered),
        audio: this.o ? [] : pm(Gm(this, "audio")),
        video: this.o ? [] : pm(Gm(this, "video")),
        text: [],
      };
      if (this.h) {
        var b = this.h.g,
          c = this.h.h;
        null != b && null != c && a.text.push({ start: b, end: c });
      }
      return a;
    };
    function Gm(a, b) {
      try {
        return a.g[b].buffered;
      } catch (c) {
        return null;
      }
    }
    function Jm(a, b, c, d, e, f) {
      var g, h, k, l, m, p, n, r, u;
      return L(function (t) {
        if (1 == t.g) {
          g = tc;
          if (b == g.ha) return y(t, rd(a.h, c, d, e), 0);
          if (a.F[b]) return y(t, id(a.F[b], c), 10);
          if (f && b == g.Ja) {
            a.h || Bm(a, "application/cea-608");
            if (!a.C) {
              h = a.u[b];
              var w = window.muxjs ? new bm() : new cm(h);
              a.C = w;
            }
            null == d && null == e
              ? a.C.init(c)
              : ((k = a.C.j(c)),
                k.length &&
                  ((l = a.g[g.Ja].timestampOffset), wd(a.h, k, d, e, l)));
            c = Km(a, c, d, b);
            return y(
              t,
              Lm(a, b, function () {
                a.g[b].appendBuffer(c);
              }),
              0
            );
          }
          c = Km(a, c, d, b);
          return y(
            t,
            Lm(a, b, function () {
              a.g[b].appendBuffer(c);
            }),
            0
          );
        }
        m = t.h;
        a.h || Bm(a, "application/cea-608");
        m.metadata && ((p = a.g[b].timestampOffset), a.S(m.metadata, p, e));
        m.captions &&
          m.captions.length &&
          ((n = a.g[g.Ja].timestampOffset),
          (r = ud(m.captions)),
          wd(a.h, r, d, e, n));
        u = m.data;
        u = Km(a, u, d, b);
        return y(
          t,
          Lm(a, b, function () {
            a.g[b].appendBuffer(u);
          }),
          0
        );
      });
    }
    function Mm(a, b) {
      var c = Hm(a, "video") || 0;
      td(a.h, b, c);
    }
    function Nm(a) {
      a.h && td(a.h, "", 0);
    }
    q.remove = function (a, b, c) {
      var d = this,
        e;
      return L(function (f) {
        e = tc;
        return a == e.ha
          ? y(f, d.h.remove(b, c), 0)
          : y(
              f,
              Lm(d, a, function () {
                c <= b ? Dm(d, a) : d.g[a].remove(b, c);
              }),
              0
            );
      });
    };
    function Om(a, b) {
      var c;
      return L(function (d) {
        c = tc;
        return b == c.ha
          ? a.h
            ? y(d, a.h.remove(0, Infinity), 0)
            : d.return()
          : y(
              d,
              Lm(a, b, function () {
                var e = a.j.duration;
                0 >= e ? Dm(a, b) : a.g[b].remove(0, e);
              }),
              0
            );
      });
    }
    q.flush = function (a) {
      var b = this,
        c;
      return L(function (d) {
        c = tc;
        return a == c.ha
          ? d.return()
          : y(
              d,
              Lm(b, a, function () {
                b.i.currentTime -= 0.001;
                Dm(b, a);
              }),
              0
            );
      });
    };
    function Pm(a, b, c, d, e, f, g, h) {
      var k, l;
      return L(function (m) {
        if (1 == m.g)
          return (
            (k = tc),
            (l = !1),
            b == k.ha
              ? ((a.h.u = c), sd(a.h, d, e), m.return())
              : y(m, Qm(a, b, f, g, a.B.codecSwitchingStrategy, h), 3)
          );
        2 != m.g && (l = m.h);
        return y(
          m,
          Promise.all([
            l
              ? Promise.resolve()
              : Lm(a, b, function () {
                  var p = a.g[b].appendWindowStart,
                    n = a.g[b].appendWindowEnd;
                  a.g[b].abort();
                  a.g[b].appendWindowStart = p;
                  a.g[b].appendWindowEnd = n;
                  Dm(a, b);
                }),
            Lm(a, b, function () {
              var p = c;
              0 > p && (p += 0.001);
              a.g[b].timestampOffset = p;
              Dm(a, b);
            }),
            Lm(a, b, function () {
              a.g[b].appendWindowStart = 0;
              a.g[b].appendWindowEnd = e;
              a.g[b].appendWindowStart = d;
              Dm(a, b);
            }),
          ]),
          0
        );
      });
    }
    q.endOfStream = function (a) {
      var b = this;
      return L(function (c) {
        return y(
          c,
          Rm(b, function () {
            Em(b) || (a ? b.j.endOfStream(a) : b.j.endOfStream());
          }),
          0
        );
      });
    };
    q.Pa = function (a) {
      var b = this;
      return L(function (c) {
        return y(
          c,
          Rm(b, function () {
            b.j.duration = a;
          }),
          0
        );
      });
    };
    q.getDuration = function () {
      return this.j.duration;
    };
    function Cm(a, b) {
      a.m[b][0].p.reject(new O(2, 3, 3014, a.i.error ? a.i.error.code : 0));
    }
    function Dm(a, b) {
      if (!a.o) {
        var c = a.m[b][0];
        c && (c.p.resolve(), Sm(a, b));
      }
    }
    function Lm(a, b, c) {
      xi(a.J);
      c = { start: c, p: new vc() };
      a.m[b].push(c);
      1 == a.m[b].length && Tm(a, b);
      return c.p;
    }
    function Rm(a, b) {
      var c, d, e, f, g, h, k;
      return L(function (l) {
        switch (l.g) {
          case 1:
            xi(a.J);
            c = [];
            d = {};
            for (e in a.g)
              (d.Vb = new vc()),
                (f = {
                  start: (function (m) {
                    return function () {
                      return m.Vb.resolve();
                    };
                  })(d),
                  p: d.Vb,
                }),
                a.m[e].push(f),
                c.push(d.Vb),
                1 == a.m[e].length && f.start(),
                (d = { Vb: d.Vb });
            E(l, 2);
            return y(l, Promise.all(c), 4);
          case 4:
            wa(l, 3);
            break;
          case 2:
            throw ((g = F(l)), g);
          case 3:
            return E(l, 5, 6), y(l, b(), 6);
          case 6:
            xa(l);
            for (h in a.g) Sm(a, h);
            ya(l);
            break;
          case 5:
            throw (
              ((k = F(l)),
              new O(
                2,
                3,
                3015,
                a.i.error || "No error in the media element",
                k
              ))
            );
        }
      });
    }
    function Sm(a, b) {
      a.m[b].shift();
      Tm(a, b);
    }
    function Tm(a, b) {
      var c = a.m[b][0];
      if (c)
        try {
          c.start();
        } catch (d) {
          "QuotaExceededError" == d.name
            ? c.p.reject(new O(2, 3, 3017, b))
            : c.p.reject(
                new O(
                  2,
                  3,
                  3015,
                  a.i.error || "No error in the media element",
                  d,
                  "object" == typeof d && d.constructor.name,
                  b
                )
              ),
            Sm(a, b);
        }
    }
    function Km(a, b, c, d) {
      var e = a.N[d];
      null == c &&
        e &&
        (Cc() || Dc("Xbox One") || Bc()) &&
        "mp4" == a.u[d].split(";")[0].split("/")[1] &&
        (b = dm(b));
      return b;
    }
    function Um(a, b, c) {
      return Lm(a, b, function () {
        b !== sc &&
          (window.SourceBuffer &&
            SourceBuffer.prototype &&
            SourceBuffer.prototype.changeType &&
            a.g[b].changeType(c),
          Dm(a, b));
      });
    }
    function Vm(a, b, c) {
      b = md(nd(a.u[b]))[0];
      c = md(c)[0];
      return "disabled" === a.B.codecSwitchingStrategy || b === c ? !1 : !0;
    }
    function Qm(a, b, c, d, e, f) {
      var g;
      return L(function (h) {
        switch (h.g) {
          case 1:
            g = ib;
            if (!Vm(a, b, c)) return h.return(!1);
            if (e !== g.Pd) {
              h.A(2);
              break;
            }
            if (
              !(
                window.SourceBuffer &&
                SourceBuffer.prototype &&
                SourceBuffer.prototype.changeType
              )
            ) {
              h.A(2);
              break;
            }
            return y(h, Um(a, b, jd(d, c)), 4);
          case 4:
            return h.return(!0);
          case 2:
            return y(h, Wm(a, b, c, d, f), 5);
          case 5:
            return h.return(!0);
        }
      });
    }
    function Xm(a, b) {
      return a.g[b]
        ? {
            timestampOffset: a.g[b].timestampOffset,
            appendWindowStart: a.g[b].appendWindowStart,
            appendWindowEnd: a.g[b].appendWindowEnd,
          }
        : null;
    }
    function Ym(a, b, c) {
      c &&
        a.g[b] &&
        ((a.g[b].timestampOffset = c.timestampOffset),
        (a.g[b].appendWindowEnd = c.appendWindowEnd),
        (a.g[b].appendWindowStart = c.appendWindowStart));
    }
    function Zm(a, b, c, d, e, f) {
      var g, h, k, l, m, p, n, r, u, t, w, x, C, z;
      return L(function (A) {
        switch (A.g) {
          case 1:
            return (
              (a.o = !0),
              (g = a.i.autoplay),
              (h = a.i.paused),
              a.O && (a.i.autoplay = !1),
              E(A, 2, 3),
              a.l.Na(),
              (k = 0),
              (l = Object.keys(a.u).length),
              (m = a.j.duration),
              (a.H = new vc()),
              (a.j = ym(a, a.H)),
              y(A, a.H, 5)
            );
          case 5:
            a.j.duration = m;
            a.u[b] = jd(d, c);
            p = new vc();
            n = a.j.sourceBuffers;
            r = function () {
              k++;
              k === l && (p.resolve(), a.l.Tb(n, "addsourcebuffer", r));
            };
            a.l.G(n, "addsourcebuffer", r);
            u = {};
            for (t in a.u)
              (u.qa = t),
                (w = a.u[u.qa]),
                (x = Xm(a, u.qa)),
                (a.g[u.qa] = null),
                (!f && ad(w)) ||
                  !fd(w, u.qa) ||
                  ((a.F[u.qa] = new ed()), (w = hd(u.qa, w))),
                (C = w + a.B.sourceBufferExtraFeatures),
                (z = a.j.addSourceBuffer(C)),
                a.l.G(
                  z,
                  "error",
                  (function (H) {
                    return function () {
                      Cm(a, H.qa);
                    };
                  })(u)
                ),
                a.l.G(
                  z,
                  "updateend",
                  (function (H) {
                    return function () {
                      return Dm(a, H.qa);
                    };
                  })(u)
                ),
                (a.g[u.qa] = z),
                (a.u[u.qa] = w),
                Ym(a, u.qa, x),
                (u = { qa: u.qa });
            return y(A, p, 3);
          case 3:
            xa(A);
            a.o = !1;
            a.i.currentTime = e;
            Dm(a, b);
            a.l.la(a.i, "canplay", function () {
              a.i.autoplay = g;
              h || a.i.play();
            });
            ya(A);
            break;
          case 2:
            F(A), A.A(3);
        }
      });
    }
    function Wm(a, b, c, d, e) {
      return Rm(a, function () {
        return Zm(a, b, c, d, a.i.currentTime, e);
      });
    }
    var Am = window.URL.createObjectURL;
    function $m(a) {
      var b = this;
      this.g = a;
      this.j = !1;
      this.i = this.g.Cc();
      this.h = new Q(function () {
        b.g.ce(0.25 * b.i);
      });
    }
    $m.prototype.release = function () {
      this.h && (this.h.stop(), (this.h = null));
      this.g = null;
    };
    $m.prototype.set = function (a) {
      this.i = a;
      an(this);
    };
    $m.prototype.yc = function () {
      return this.g.yc();
    };
    function an(a) {
      a.h.stop();
      var b = a.j ? 0 : a.i;
      if (0 <= b)
        try {
          a.g.Cc() != b && a.g.Id(b);
          return;
        } catch (c) {}
      a.h.Ga(0.25);
      0 != a.g.Cc() && a.g.Id(0);
    }
    function bn(a, b, c, d) {
      b == HTMLMediaElement.HAVE_NOTHING || a.readyState >= b
        ? d()
        : ((b = cn.value().get(b)), c.la(a, b, d));
    }
    var cn = new wc(function () {
      return new Map([
        [HTMLMediaElement.HAVE_METADATA, "loadedmetadata"],
        [HTMLMediaElement.HAVE_CURRENT_DATA, "loadeddata"],
        [HTMLMediaElement.HAVE_FUTURE_DATA, "canplay"],
        [HTMLMediaElement.HAVE_ENOUGH_DATA, "canplaythrough"],
      ]);
    });
    function dn(a, b, c) {
      var d = this;
      this.g = a;
      this.l = b;
      this.j = c;
      this.m = !1;
      this.h = new yi();
      this.i = new en(a);
      bn(this.g, HTMLMediaElement.HAVE_METADATA, this.h, function () {
        fn(d, d.j);
      });
    }
    dn.prototype.release = function () {
      this.h && (this.h.release(), (this.h = null));
      null != this.i && (this.i.release(), (this.i = null));
      this.l = function () {};
      this.g = null;
    };
    function gn(a) {
      return a.m ? a.g.currentTime : a.j;
    }
    function hn(a, b) {
      0 < a.g.readyState
        ? jn(a.i, b)
        : bn(a.g, HTMLMediaElement.HAVE_METADATA, a.h, function () {
            fn(a, a.j);
          });
    }
    function fn(a, b) {
      0.001 > Math.abs(a.g.currentTime - b)
        ? kn(a)
        : (a.h.la(a.g, "seeking", function () {
            kn(a);
          }),
          jn(a.i, 0 == a.g.currentTime ? b : a.g.currentTime));
    }
    function kn(a) {
      a.m = !0;
      a.h.G(a.g, "seeking", function () {
        return a.l();
      });
    }
    function en(a) {
      var b = this;
      this.h = a;
      this.m = 10;
      this.l = this.j = this.i = 0;
      this.g = new Q(function () {
        0 >= b.i
          ? b.g.stop()
          : b.h.currentTime != b.j
          ? b.g.stop()
          : ((b.h.currentTime = b.l), b.i--);
      });
    }
    en.prototype.release = function () {
      this.g && (this.g.stop(), (this.g = null));
      this.h = null;
    };
    function jn(a, b) {
      a.j = a.h.currentTime;
      a.l = b;
      a.i = a.m;
      a.h.currentTime = b;
      a.g.Ga(0.1);
    }
    function ln(a) {
      function b() {
        null == c.h || 0 == c.h
          ? (c.j = !0)
          : (c.i.la(c.g, "seeking", function () {
              c.j = !0;
            }),
            (c.g.currentTime = Math.max(0, c.g.currentTime + c.h)));
      }
      var c = this;
      this.g = a;
      this.j = !1;
      this.h = null;
      this.i = new yi();
      bn(this.g, HTMLMediaElement.HAVE_CURRENT_DATA, this.i, function () {
        b();
      });
    }
    ln.prototype.release = function () {
      this.i && (this.i.release(), (this.i = null));
      this.g = null;
    };
    ln.prototype.o = function (a) {
      this.h = this.j ? this.h : a;
    };
    ln.prototype.m = function () {
      return (this.j ? this.g.currentTime : this.h) || 0;
    };
    ln.prototype.C = function () {};
    function mn(a, b, c, d, e, f) {
      var g = this;
      this.i = a;
      this.g = b.presentationTimeline;
      this.F = b.minBufferTime || 0;
      this.l = c;
      this.B = e;
      this.u = null;
      this.j = new vm(a, b.presentationTimeline, c, nn(a, c), f);
      this.h = new dn(
        a,
        function () {
          a: {
            var h = g.j;
            h.s = !0;
            h.o = !1;
            h.j = !1;
            var k = gn(g.h);
            h = on(g, k);
            if (
              0.001 < Math.abs(h - k) &&
              ((k = Date.now() / 1e3), !g.u || g.u < k - 1)
            ) {
              g.u = k;
              hn(g.h, h);
              h = void 0;
              break a;
            }
            g.B();
            h = void 0;
          }
          return h;
        },
        pn(this, d)
      );
      this.s = new Q(function () {
        if (0 != g.i.readyState && !g.i.paused) {
          var h = gn(g.h),
            k = g.g.Hb(),
            l = g.g.Wa();
          3 > l - k && (k = l - 3);
          h < k && ((h = on(g, h)), (g.i.currentTime = h));
        }
      }).Ga(0.25);
    }
    mn.prototype.release = function () {
      this.h && (this.h.release(), (this.h = null));
      this.j && (this.j.release(), (this.j = null));
      this.s && (this.s.stop(), (this.s = null));
      this.i = this.h = this.g = this.l = null;
      this.B = function () {};
    };
    mn.prototype.o = function (a) {
      hn(this.h, a);
    };
    mn.prototype.m = function () {
      var a = gn(this.h);
      return 0 < this.i.readyState && !this.i.paused ? qn(this, a) : a;
    };
    function pn(a, b) {
      null == b
        ? (b = Infinity > a.g.getDuration() ? a.g.Hb() : a.g.Wa())
        : 0 > b && (b = a.g.Wa() + b);
      return rn(a, qn(a, b));
    }
    mn.prototype.C = function () {
      this.j.yd();
    };
    function rn(a, b) {
      var c = a.g.getDuration();
      return b >= c ? c - a.l.durationBackoff : b;
    }
    function on(a, b) {
      var c = Math.max(a.F, a.l.rebufferingGoal),
        d = a.l.safeSeekOffset,
        e = a.g.Hb(),
        f = a.g.Wa(),
        g = a.g.getDuration();
      3 > f - e && (e = f - 3);
      var h = a.g.cc(c),
        k = a.g.cc(d);
      c = a.g.cc(c + d);
      return b >= g
        ? rn(a, b)
        : b > f
        ? f
        : b < e
        ? nm(a.i.buffered, k)
          ? k
          : c
        : b >= h || nm(a.i.buffered, b)
        ? b
        : c;
    }
    function qn(a, b) {
      var c = a.g.Hb();
      if (b < c) return c;
      a = a.g.Wa();
      return b > a ? a : b;
    }
    function nn(a, b) {
      if (!b.stallEnabled) return null;
      var c = b.stallSkip;
      b = new rm(new um(a), b.stallThreshold);
      tm(b, function () {
        c ? (a.currentTime += c) : (a.pause(), a.play());
      });
      return b;
    }
    function sn(a) {
      var b = this;
      this.h = a;
      this.g = new Set();
      this.i = new Q(function () {
        tn(b, !1);
      }).Ga(0.25);
    }
    sn.prototype.release = function () {
      this.i.stop();
      for (var a = v(this.g), b = a.next(); !b.done; b = a.next())
        b.value.release();
      this.g.clear();
    };
    function tn(a, b) {
      for (var c = v(a.g), d = c.next(); !d.done; d = c.next())
        d.value.j(a.h.currentTime, b);
    }
    function un(a) {
      Jg.call(this);
      this.g = new Map();
      this.h = a;
    }
    ra(un, Jg);
    un.prototype.release = function () {
      this.g.clear();
      Jg.prototype.release.call(this);
    };
    function vn(a, b) {
      var c = a.g.get(b);
      c || ((c = { jc: [], Rd: null, contentType: b }), a.g.set(b, c));
      return c;
    }
    function wn(a, b, c) {
      var d = vn(a, b.contentType);
      xn(a, d);
      a = { td: b, position: c };
      d = d.jc;
      b = d.findIndex(function (e) {
        return e.position >= c;
      });
      0 <= b ? d.splice(b, d[b].position == c ? 1 : 0, a) : d.push(a);
    }
    un.prototype.j = function (a) {
      for (var b = v(this.g.values()), c = b.next(); !c.done; c = b.next()) {
        c = c.value;
        a: {
          var d = c.jc;
          for (var e = d.length - 1; 0 <= e; e--) {
            var f = d[e];
            if (f.position <= a) {
              d = f.td;
              break a;
            }
          }
          d = null;
        }
        if ((e = d))
          (e = c.Rd),
            (e = !(
              e === d ||
              (e &&
                d &&
                e.bandwidth == d.bandwidth &&
                e.audioSamplingRate == d.audioSamplingRate &&
                e.codecs == d.codecs &&
                e.contentType == d.contentType &&
                e.frameRate == d.frameRate &&
                e.height == d.height &&
                e.mimeType == d.mimeType &&
                e.channelsCount == d.channelsCount &&
                e.pixelAspectRatio == d.pixelAspectRatio &&
                e.width == d.width)
            ));
        if (e)
          a: {
            e = a;
            f = d.contentType;
            if ((f = this.h()[f]) && 0 < f.length) {
              var g = f[f.length - 1].end;
              if (e >= f[0].start && e < g) {
                e = !0;
                break a;
              }
            }
            e = !1;
          }
        e &&
          ((c.Rd = d),
          JSON.stringify(d),
          (c = new Ig(
            "qualitychange",
            new Map([
              ["quality", d],
              ["position", a],
            ])
          )),
          this.dispatchEvent(c));
      }
    };
    function xn(a, b) {
      if ((a = a.h()[b.contentType]) && 0 < a.length) {
        var c = a[0].start,
          d = a[a.length - 1].end,
          e = b.jc;
        b.jc = e.filter(function (f, g) {
          return (f.position <= c &&
            g + 1 < e.length &&
            e[g + 1].position <= c) ||
            f.position >= d
            ? !1
            : !0;
        });
      } else b.jc = [];
    }
    function yn(a) {
      Jg.call(this);
      var b = this;
      this.g = new Set();
      this.i = a;
      this.h = new Q(function () {
        for (var c = b.i(), d = v(b.g), e = d.next(); !e.done; e = d.next())
          (e = e.value),
            e.endTime < c.start &&
              (b.g.delete(e),
              (e = new Ig("regionremove", new Map([["region", e]]))),
              b.dispatchEvent(e));
      }).Ga(2);
    }
    ra(yn, Jg);
    yn.prototype.release = function () {
      this.g.clear();
      this.h.stop();
      Jg.prototype.release.call(this);
    };
    function zn(a) {
      Jg.call(this);
      var b = this;
      this.i = a;
      this.g = new Map();
      this.l = [
        {
          zb: null,
          yb: An,
          rb: function (c, d) {
            return Bn(b, "enter", c, d);
          },
        },
        {
          zb: Cn,
          yb: An,
          rb: function (c, d) {
            return Bn(b, "enter", c, d);
          },
        },
        {
          zb: Dn,
          yb: An,
          rb: function (c, d) {
            return Bn(b, "enter", c, d);
          },
        },
        {
          zb: An,
          yb: Cn,
          rb: function (c, d) {
            return Bn(b, "exit", c, d);
          },
        },
        {
          zb: An,
          yb: Dn,
          rb: function (c, d) {
            return Bn(b, "exit", c, d);
          },
        },
        {
          zb: Cn,
          yb: Dn,
          rb: function (c, d) {
            return Bn(b, "skip", c, d);
          },
        },
        {
          zb: Dn,
          yb: Cn,
          rb: function (c, d) {
            return Bn(b, "skip", c, d);
          },
        },
      ];
      this.h = new yi();
      this.h.G(this.i, "regionremove", function (c) {
        b.g.delete(c.region);
      });
    }
    ra(zn, Jg);
    zn.prototype.release = function () {
      this.i = null;
      this.g.clear();
      this.h.release();
      this.h = null;
      Jg.prototype.release.call(this);
    };
    zn.prototype.j = function (a, b) {
      for (var c = v(this.i.g), d = c.next(); !d.done; d = c.next()) {
        d = d.value;
        var e = this.g.get(d),
          f = a < d.startTime ? Cn : a > d.endTime ? Dn : An;
        this.g.set(d, f);
        for (var g = v(this.l), h = g.next(); !h.done; h = g.next())
          (h = h.value), h.zb == e && h.yb == f && h.rb(d, b);
      }
    };
    function Bn(a, b, c, d) {
      b = new Ig(
        b,
        new Map([
          ["region", c],
          ["seeking", d],
        ])
      );
      a.dispatchEvent(b);
    }
    var Cn = 1,
      An = 2,
      Dn = 3;
    function En(a, b) {
      var c = this;
      this.g = b;
      this.m = a;
      this.i = null;
      this.u = 1;
      this.o = this.l = null;
      this.C = !1;
      this.h = new Map();
      this.B = !1;
      this.F = null;
      this.s = !1;
      this.j = new wi(function () {
        return Fn(c);
      });
    }
    En.prototype.destroy = function () {
      return this.j.destroy();
    };
    function Fn(a) {
      var b, c, d, e;
      return L(function (f) {
        if (1 == f.g) {
          b = [];
          c = v(a.h.values());
          for (d = c.next(); !d.done; d = c.next())
            (e = d.value), Gn(e), b.push(Hn(e));
          return y(f, Promise.all(b), 2);
        }
        a.h.clear();
        a.g = null;
        a.m = null;
        a.i = null;
        B(f);
      });
    }
    En.prototype.configure = function (a) {
      this.i = a;
      this.F = new yg(
        {
          maxAttempts: Math.max(a.retryParameters.maxAttempts, 2),
          baseDelay: a.retryParameters.baseDelay,
          backoffFactor: a.retryParameters.backoffFactor,
          fuzzFactor: a.retryParameters.fuzzFactor,
          timeout: 0,
          stallTimeout: 0,
          connectionTimeout: 0,
          suppressNetworkTimeoutWarnings:
            a.retryParameters.suppressNetworkTimeoutWarnings,
        },
        !0
      );
    };
    En.prototype.start = function () {
      var a = this;
      return L(function (b) {
        if (1 == b.g) return y(b, In(a), 2);
        xi(a.j);
        a.B = !0;
        B(b);
      });
    };
    function Jn(a, b) {
      var c, d, e, f, g, h;
      L(function (k) {
        switch (k.g) {
          case 1:
            return (c = tc), E(k, 2), y(k, Om(a.g.T, c.ha), 4);
          case 4:
            wa(k, 3);
            break;
          case 2:
            if (((d = F(k)), a.g)) a.g.onError(d);
          case 3:
            e = jd(b.mimeType, b.codecs);
            Bm(a.g.T, e);
            f = a.g.T.s;
            if ((g = f.isTextVisible() || a.i.alwaysStreamText))
              (h = Kn(b)), a.h.set(c.ha, h), Ln(a, h, 0);
            B(k);
        }
      });
    }
    function Mn(a) {
      var b = a.h.get(sc);
      b && (Gn(b), Hn(b).catch(function () {}), a.h.delete(sc));
      a.o = null;
    }
    function Nn(a, b) {
      var c = a.h.get("video");
      if (c) {
        var d = c.stream;
        if (d)
          if (b)
            (b = d.trickModeVideo) &&
              !c.vb &&
              (On(a, b, !1, 0, !1), (c.vb = d));
          else if ((d = c.vb)) (c.vb = null), On(a, d, !0, 0, !1);
      }
    }
    function Pn(a, b, c, d, e) {
      c = void 0 === c ? !1 : c;
      d = void 0 === d ? 0 : d;
      e = void 0 === e ? !1 : e;
      a.l = b;
      a.B &&
        (b.video && On(a, b.video, c, d, e),
        b.audio && On(a, b.audio, c, d, e));
    }
    function Qn(a, b) {
      a.o = b;
      a.B && On(a, b, !0, 0, !1);
    }
    function On(a, b, c, d, e) {
      var f = a.h.get(b.type);
      f || b.type != sc
        ? f &&
          (f.vb &&
            (b.trickModeVideo
              ? ((f.vb = b), (b = b.trickModeVideo))
              : (f.vb = null)),
          f.stream != b || e) &&
          (b.type == sc && Bm(a.g.T, jd(b.mimeType, b.codecs)),
          f.stream.closeSegmentIndex && f.stream.closeSegmentIndex(),
          (f.stream = b),
          (f.ba = null),
          c &&
            (f.Zb
              ? (f.Tc = !0)
              : f.Ma
              ? ((f.xb = !0), (f.uc = d), (f.Tc = !0))
              : (Gn(f),
                Rn(a, f, !0, d).catch(function (g) {
                  if (a.g) a.g.onError(g);
                }))),
          Sn(a, f).catch(function (g) {
            if (a.g) a.g.onError(g);
          }))
        : Jn(a, b);
    }
    function Sn(a, b) {
      var c, d;
      return L(function (e) {
        if (1 == e.g) {
          if (!b.oa) return e.return();
          c = b.stream;
          d = b.oa;
          return c.segmentIndex ? e.A(2) : y(e, c.createSegmentIndex(), 2);
        }
        if (b.oa != d || b.stream != c) return e.return();
        var f = a.g.Bc(),
          g = Hm(a.g.T, b.type);
        var h = b.stream.segmentIndex.find(b.Fa ? b.Fa.endTime : f);
        var k = null == h ? null : b.stream.segmentIndex.get(h);
        h = k ? (k.ua ? k.ua - k.ya : null) : null;
        k &&
          !h &&
          (h =
            ((k.endTime - k.getStartTime()) * (b.stream.bandwidth || 0)) / 8);
        if (h)
          if (
            ((k = k.g) && (h += (k.ua ? k.ua - k.ya : null) || 0),
            (k = a.g.getBandwidthEstimate()),
            (8 * h) / k <
              (g || 0) -
                f -
                Math.max(a.m.minBufferTime || 0, a.i.rebufferingGoal))
          )
            h = !0;
          else {
            f = b.oa.g.h;
            g = b.oa;
            var l = Date.now() / 1e3 - g.j / 1e3;
            k = (8 * g.g.g) / k;
            g = 0 < g.i && l + k >= g.i;
            h =
              b.oa.g.g > h ||
              f ||
              g ||
              ("video" == b.type &&
                b.stream.bandwidth === a.m.lowestVideoBitrate)
                ? !0
                : !1;
          }
        else h = !1;
        h && b.oa.abort();
        B(e);
      });
    }
    function Tn(a, b) {
      b.Zb ||
        b.xb ||
        (b.Ma
          ? ((b.xb = !0), (b.uc = 0))
          : null == Fm(a.g.T, b.type)
          ? null == b.Ra && Ln(a, b, 0)
          : (Gn(b),
            Rn(a, b, !1, 0).catch(function (c) {
              if (a.g) a.g.onError(c);
            })));
    }
    function In(a) {
      var b, c, d, e, f, g, h, k, l, m;
      return L(function (p) {
        if (1 == p.g) {
          b = tc;
          if (!a.l) throw new O(2, 5, 5006);
          c = new Map();
          d = new Set();
          a.l.audio && (c.set(b.eb, a.l.audio), d.add(a.l.audio));
          a.l.video && (c.set(b.Ja, a.l.video), d.add(a.l.video));
          a.o && (c.set(b.ha, a.o), d.add(a.o));
          e = a.g.T;
          f = a.i.forceTransmuxTS;
          return y(p, e.init(c, f), 2);
        }
        xi(a.j);
        var n = a.m.presentationTimeline.getDuration();
        Infinity > n ? a.g.T.Pa(n) : a.g.T.Pa(Math.pow(2, 32));
        g = v(c.keys());
        for (h = g.next(); !h.done; h = g.next())
          (k = h.value),
            (l = c.get(k)),
            a.h.has(k) || ((m = Kn(l)), a.h.set(k, m), Ln(a, m, 0));
        B(p);
      });
    }
    function Kn(a) {
      return {
        stream: a,
        type: a.type,
        ba: null,
        Fa: null,
        Gc: null,
        qd: null,
        od: null,
        nd: null,
        pd: null,
        vb: null,
        endOfStream: !1,
        Ma: !1,
        Ra: null,
        xb: !1,
        uc: 0,
        Tc: !1,
        Zb: !1,
        Dd: !1,
        ec: !1,
        oa: null,
      };
    }
    function Un(a, b) {
      var c, d, e, f, g;
      return L(function (h) {
        switch (h.g) {
          case 1:
            xi(a.j);
            if (b.Ma || null == b.Ra || b.Zb) return h.return();
            b.Ra = null;
            if (!b.xb) {
              h.A(2);
              break;
            }
            return y(h, Rn(a, b, b.Tc, b.uc), 3);
          case 3:
            return h.return();
          case 2:
            if (b.stream.segmentIndex) {
              h.A(4);
              break;
            }
            c = b.stream;
            return y(h, b.stream.createSegmentIndex(), 5);
          case 5:
            if (c != b.stream)
              return (
                c.closeSegmentIndex && c.closeSegmentIndex(),
                null == b.Ra && Ln(a, b, 0),
                h.return()
              );
          case 4:
            E(h, 6);
            d = Vn(a, b);
            null != d && (Ln(a, b, d), (b.ec = !1));
            wa(h, 7);
            break;
          case 6:
            return (e = F(h)), y(h, Wn(a, e), 8);
          case 8:
            return h.return();
          case 7:
            f = Array.from(a.h.values());
            if (
              !a.B ||
              !f.every(function (k) {
                return k.endOfStream;
              })
            ) {
              h.A(0);
              break;
            }
            return y(h, a.g.T.endOfStream(), 10);
          case 10:
            xi(a.j),
              (g = a.g.T.getDuration()),
              0 != g &&
                g < a.m.presentationTimeline.getDuration() &&
                a.m.presentationTimeline.Pa(g),
              B(h);
        }
      });
    }
    function Vn(a, b) {
      if (Xn(b)) return Mm(a.g.T, b.stream.originalId || ""), null;
      b.type == sc && Nm(a.g.T);
      var c = a.g.Bc(),
        d = b.Fa ? b.Fa.endTime : c,
        e = Im(a.g.T, b.type, c),
        f =
          Math.max(
            a.m.minBufferTime || 0,
            a.i.rebufferingGoal,
            a.i.bufferingGoal
          ) * a.u;
      if (1e-6 > a.m.presentationTimeline.getDuration() - d)
        return (
          (b.endOfStream = !0),
          "video" == b.type &&
            (a = a.h.get(sc)) &&
            Xn(a) &&
            (a.endOfStream = !0),
          null
        );
      b.endOfStream = !1;
      if (e >= f) return a.i.updateIntervalSeconds / 2;
      e = Hm(a.g.T, b.type);
      e = Yn(a, b, c, e);
      if (!e) return a.i.updateIntervalSeconds;
      f = Infinity;
      var g = Array.from(a.h.values());
      g = v(g);
      for (var h = g.next(); !h.done; h = g.next())
        (h = h.value),
          Xn(h) ||
            (h.ba && !h.ba.current()) ||
            (f = Math.min(f, h.Fa ? h.Fa.endTime : c));
      if (d >= f + a.m.presentationTimeline.g) return a.i.updateIntervalSeconds;
      Zn(a, b, c, e).catch(function () {});
      return null;
    }
    function Yn(a, b, c, d) {
      if (b.ba) return b.ba.current();
      if (b.Fa || d)
        return (
          (b.ba = b.stream.segmentIndex.Va(b.Fa ? b.Fa.endTime : d)),
          b.ba && b.ba.next().value
        );
      var e = a.i.inaccurateManifestTolerance,
        f = Math.max(c - e, 0);
      d = null;
      e &&
        ((b.ba = b.stream.segmentIndex.Va(f)), (d = b.ba && b.ba.next().value));
      a.i.enableSegmentStartWorkaround &&
        "audio" === b.type &&
        (a = (a = b.stream.segmentIndex.Va(c)) && a.next().value) &&
        ((b.ba = b.stream.segmentIndex.Va(a.startTime - 0.5)),
        (d = b.ba && b.ba.next().value));
      d ||
        ((b.ba = b.stream.segmentIndex.Va(c)), (d = b.ba && b.ba.next().value));
      return d;
    }
    function Zn(a, b, c, d) {
      var e, f, g, h, k, l, m, p, n, r, u;
      return L(function (t) {
        switch (t.g) {
          case 1:
            return (
              (e = tc),
              (f = b.stream),
              (g = b.ba),
              (b.Ma = !0),
              E(t, 2),
              y(t, $n(a, b, d), 4)
            );
          case 4:
            xi(a.j);
            if (a.s) return t.return();
            h = "video/mp4" == f.mimeType || "audio/mp4" == f.mimeType;
            k = window.ReadableStream;
            return a.i.lowLatencyMode && k && h
              ? ((m = new Uint8Array(0)),
                (p = function (w) {
                  var x, C, z;
                  return L(function (A) {
                    xi(a.j);
                    if (a.s) return A.return();
                    m = ao(m, w);
                    x = !1;
                    C = 0;
                    new T()
                      .box("mdat", function (H) {
                        C = H.size + H.start;
                        x = !0;
                      })
                      .parse(m, !1, !0);
                    if (!x) return A.A(0);
                    z = m.subarray(0, C);
                    m = m.subarray(C);
                    return y(A, bo(a, b, c, f, d, z), 0);
                  });
                }),
                y(t, co(a, b, d, p), 6))
              : y(t, co(a, b, d), 7);
          case 7:
            return (
              (l = t.h),
              xi(a.j),
              a.s
                ? t.return()
                : b.xb
                ? ((b.Ma = !1), Ln(a, b, 0), t.return())
                : y(t, bo(a, b, c, f, d, l), 6)
            );
          case 6:
            xi(a.j);
            if (a.s) return t.return();
            b.Fa = d;
            g.next();
            b.Ma = !1;
            b.Dd = !1;
            n = a.g.T.gb();
            r = n[b.type];
            eb(JSON.stringify(r));
            b.xb || a.g.yd();
            Ln(a, b, 0);
            wa(t, 0);
            break;
          case 2:
            u = F(t);
            xi(a.j, u);
            if (a.s) return t.return();
            b.Ma = !1;
            if (7001 == u.code) (b.Ma = !1), (b.Ra = null), Ln(a, b, 0), t.A(0);
            else if (b.type == e.ha && a.i.ignoreTextStreamFailures)
              a.h.delete(e.ha), t.A(0);
            else if (3017 == u.code) eo(a, b, u), t.A(0);
            else if (1001 == u.code && u.data && 404 == u.data[1])
              (b.Ma = !1), (b.Ra = null), Ln(a, b, 1), t.A(0);
            else return (b.ec = !0), (u.severity = 2), y(t, Wn(a, u), 0);
        }
      });
    }
    function ao(a, b) {
      var c = new Uint8Array(a.length + b.length);
      c.set(a);
      c.set(b, a.length);
      return c;
    }
    function eo(a, b, c) {
      if (
        !Array.from(a.h.values()).some(function (e) {
          return e != b && e.Dd;
        })
      ) {
        var d = Math.round(100 * a.u);
        if (20 < d) a.u -= 0.2;
        else if (4 < d) a.u -= 0.04;
        else {
          b.ec = !0;
          a.s = !0;
          a.g.onError(c);
          return;
        }
        b.Dd = !0;
      }
      Ln(a, b, 4);
    }
    function $n(a, b, c) {
      var d, e, f, g, h, k, l, m, p, n, r, u;
      return L(function (t) {
        switch (t.g) {
          case 1:
            d = tc;
            e = [];
            f = Math.max(0, c.appendWindowStart - 0.1);
            g = c.appendWindowEnd + 0.01;
            h = a.g.T;
            k = md(b.stream.codecs)[0];
            l = c.timestampOffset;
            if (l == b.qd && f == b.od && g == b.nd && k == b.pd) {
              t.A(2);
              break;
            }
            b.type !== d.ha &&
              Vm(h, b.type, k) &&
              "reload" === h.B.codecSwitchingStrategy &&
              ((m = null),
              b.type === d.Ja
                ? (m = a.h.get(d.eb))
                : b.type === d.eb && (m = a.h.get(d.Ja)),
              m && (Tn(a, m), Hn(m).catch(function () {})));
            E(t, 3);
            p = a.i.forceTransmuxTS;
            b.pd = k;
            b.od = f;
            b.nd = g;
            b.qd = l;
            return y(
              t,
              Pm(h, b.type, l, f, g, b.stream.codecs, b.stream.mimeType, p),
              5
            );
          case 5:
            wa(t, 2);
            break;
          case 3:
            throw (
              ((n = F(t)),
              (b.od = null),
              (b.nd = null),
              (b.qd = null),
              (b.pd = null),
              n)
            );
          case 2:
            return (
              !ih(c.g, b.Gc) &&
                (b.Gc = c.g) &&
                ((r = co(a, b, c.g)),
                (u = function () {
                  var w, x, C, z;
                  return L(function (A) {
                    switch (A.g) {
                      case 1:
                        return E(A, 2), y(A, r, 4);
                      case 4:
                        return (
                          (w = A.h),
                          xi(a.j),
                          (x = new T()),
                          x
                            .box("moov", Gf)
                            .box("trak", Gf)
                            .box("mdia", Gf)
                            .P("mdhd", function (H) {
                              H = Nf(H.reader || 0, H.version || 0);
                              c.g.timescale = H.timescale;
                            })
                            .parse(w),
                          (C =
                            b.stream.closedCaptions &&
                            0 < b.stream.closedCaptions.size),
                          y(A, Jm(a.g.T, b.type, w, null, null, C), 5)
                        );
                      case 5:
                        wa(A, 0);
                        break;
                      case 2:
                        throw ((z = F(A)), (b.Gc = null), z);
                    }
                  });
                }),
                a.g.Af(c.startTime, c.g),
                e.push(u())),
              y(t, Promise.all(e), 0)
            );
        }
      });
    }
    function bo(a, b, c, d, e, f) {
      var g, h, k, l;
      return L(function (m) {
        if (1 == m.g) {
          g = d.closedCaptions && 0 < d.closedCaptions.size;
          k = null != d.emsgSchemeIdUris && 0 < d.emsgSchemeIdUris.length;
          l = a.i.parsePrftBox && !a.C;
          if (k || l) h = new T();
          k &&
            h.P("emsg", function (p) {
              var n = d.emsgSchemeIdUris;
              if (0 === p.version) {
                var r = p.reader.kc();
                var u = p.reader.kc();
                var t = p.reader.K();
                var w = p.reader.K();
                var x = p.reader.K();
                var C = p.reader.K();
                var z = e.startTime + w / t;
              } else (t = p.reader.K()), (z = p.reader.jb() / t + e.timestampOffset), (w = z - e.startTime), (x = p.reader.K()), (C = p.reader.K()), (r = p.reader.kc()), (u = p.reader.kc());
              p = p.reader.ib(p.reader.R.byteLength - p.reader.fa());
              if ((n && n.includes(r)) || a.i.dispatchAllEmsgBoxes)
                "urn:mpeg:dash:event:2012" == r
                  ? a.g.Cf()
                  : ((n = new Map().set("detail", {
                      startTime: z,
                      endTime: z + x / t,
                      schemeIdUri: r,
                      value: u,
                      timescale: t,
                      presentationTimeDelta: w,
                      eventDuration: x,
                      id: C,
                      messageData: p,
                    })),
                    (n = new Ig(fo, n)),
                    a.g.onEvent(n));
            });
          l &&
            "video" === d.type &&
            h.P("prft", function (p) {
              a: {
                if (!a.C && e.g.timescale) {
                  p.reader.K();
                  var n = p.reader.K(),
                    r = p.reader.K();
                  n = 1e3 * n + (r / Math.pow(2, 32)) * 1e3;
                  if (0 === p.version) var u = p.reader.K();
                  else
                    try {
                      u = p.reader.jb();
                    } catch (t) {
                      a.C = !0;
                      u = void 0;
                      break a;
                    }
                  p = new Date(
                    new Date(Date.UTC(1900, 0, 1, 0, 0, 0)).getTime() + n
                  ).getTime();
                  u = new Map().set("detail", {
                    wallClockTime: p,
                    programStartDate: new Date(p - (u / e.g.timescale) * 1e3),
                  });
                  u = new Ig(go, u);
                  a.g.onEvent(u);
                  a.C = !0;
                }
                u = void 0;
              }
              return u;
            });
          (k || l) && h.parse(f);
          return y(m, ho(a, b, c), 2);
        }
        if (3 != m.g)
          return (
            xi(a.j), y(m, Jm(a.g.T, b.type, f, e.startTime, e.endTime, g), 3)
          );
        xi(a.j);
        B(m);
      });
    }
    function ho(a, b, c) {
      var d, e, f, g;
      return L(function (h) {
        if (1 == h.g) {
          d = Math.max(a.i.bufferBehind, a.m.presentationTimeline.g);
          e = Fm(a.g.T, b.type);
          if (null == e) return h.return();
          f = c - e;
          g = f - d;
          return 0.01 >= g
            ? h.return()
            : y(h, a.g.T.remove(b.type, e, e + g), 2);
        }
        xi(a.j);
        B(h);
      });
    }
    function Xn(a) {
      return (
        a &&
        a.type == sc &&
        ("application/cea-608" == a.stream.mimeType ||
          "application/cea-708" == a.stream.mimeType)
      );
    }
    function co(a, b, c, d) {
      var e, f, g, h, k;
      return L(function (l) {
        if (1 == l.g)
          return (
            (e = $g),
            (f = vi(c.Ea(), c.ya, c.ua, a.i.retryParameters, d)),
            (g = b.stream),
            a.g.modifySegmentRequest(f, {
              type: g.type,
              init: c instanceof hh,
              duration: c.endTime - c.startTime,
              mimeType: g.mimeType,
              codecs: g.codecs,
              bandwidth: g.bandwidth,
            }),
            (h = a.g.Mb.request(e, f)),
            (b.oa = h),
            y(l, h.promise, 2)
          );
        k = l.h;
        b.oa = null;
        return l.return(k.data);
      });
    }
    function Rn(a, b, c, d) {
      var e, f;
      return L(function (g) {
        if (1 == g.g)
          return (
            (b.xb = !1),
            (b.Tc = !1),
            (b.uc = 0),
            (b.Zb = !0),
            (b.Fa = null),
            (b.Gc = null),
            (b.ba = null),
            d
              ? ((e = a.g.Bc()),
                (f = a.g.T.getDuration()),
                y(g, a.g.T.remove(b.type, e + d, f), 3))
              : y(g, Om(a.g.T, b.type), 4)
          );
        if (3 != g.g) return xi(a.j), c ? y(g, a.g.T.flush(b.type), 3) : g.A(3);
        xi(a.j);
        b.Zb = !1;
        b.endOfStream = !1;
        Ln(a, b, 0);
        B(g);
      });
    }
    function Ln(a, b, c) {
      var d = b.type;
      if (d != sc || a.h.has(d))
        b.Ra = new xc(function () {
          var e;
          return L(function (f) {
            if (1 == f.g) return E(f, 2), y(f, Un(a, b), 4);
            if (2 != f.g) return wa(f, 0);
            e = F(f);
            if (a.g) a.g.onError(e);
            B(f);
          });
        }).X(c);
    }
    function Gn(a) {
      null != a.Ra && (a.Ra.stop(), (a.Ra = null));
    }
    function Hn(a) {
      return L(function (b) {
        return a.oa ? y(b, a.oa.abort(), 0) : b.A(0);
      });
    }
    function Wn(a, b) {
      return L(function (c) {
        if (1 == c.g) return y(c, Ag(a.F), 2);
        xi(a.j);
        a.g.onError(b);
        b.handled || a.i.failureCallback(b);
        B(c);
      });
    }
    function io(a, b, c, d, e, f) {
      if (200 <= c && 299 >= c && 202 != c)
        return {
          uri: e || d,
          Df: d,
          data: b,
          status: c,
          headers: a,
          fromCache: !!a["x-shaka-from-cache"],
        };
      e = null;
      try {
        e = Rc(b);
      } catch (g) {}
      throw new O(401 == c || 403 == c ? 2 : 1, 1, 1001, d, c, e, a, f);
    }
    function jo() {}
    function ko(a, b, c, d, e) {
      var f = new lo();
      Hi(b.headers).forEach(function (l, m) {
        f.append(m, l);
      });
      var g = new mo(),
        h = { Qd: !1, re: !1 };
      a = no(
        a,
        c,
        {
          body: b.body || void 0,
          headers: f,
          method: b.method,
          signal: g.signal,
          credentials: b.allowCrossSiteCredentials ? "include" : void 0,
        },
        h,
        d,
        e,
        b.streamDataCallback
      );
      a = new Bg(a, function () {
        h.Qd = !0;
        g.abort();
        return Promise.resolve();
      });
      if ((b = b.retryParameters.timeout)) {
        var k = new Q(function () {
          h.re = !0;
          g.abort();
        });
        k.X(b / 1e3);
        a.finally(function () {
          k.stop();
        });
      }
      return a;
    }
    function no(a, b, c, d, e, f, g) {
      var h, k, l, m, p, n, r, u, t, w, x, C, z;
      return L(function (A) {
        switch (A.g) {
          case 1:
            return (
              (h = oo),
              (k = po),
              (n = p = 0),
              (r = Date.now()),
              E(A, 2),
              y(A, h(a, c), 4)
            );
          case 4:
            return (
              (l = A.h),
              f(qo(l.headers)),
              (u = l.clone().body.getReader()),
              (w = (t = l.headers.get("Content-Length")) ? parseInt(t, 10) : 0),
              (x = function (H) {
                function G() {
                  var D, I;
                  return L(function (J) {
                    switch (J.g) {
                      case 1:
                        return E(J, 2), y(J, u.read(), 4);
                      case 4:
                        D = J.h;
                        wa(J, 3);
                        break;
                      case 2:
                        return F(J), J.return();
                      case 3:
                        if (D.done) {
                          J.A(5);
                          break;
                        }
                        p += D.value.byteLength;
                        if (!g) {
                          J.A(5);
                          break;
                        }
                        return y(J, g(D.value), 5);
                      case 5:
                        I = Date.now();
                        if (100 < I - r || D.done)
                          e(I - r, p - n, w - p), (n = p), (r = I);
                        D.done ? H.close() : (H.enqueue(D.value), G());
                        B(J);
                    }
                  });
                }
                G();
              }),
              new k({ start: x }),
              y(A, l.arrayBuffer(), 5)
            );
          case 5:
            m = A.h;
            wa(A, 3);
            break;
          case 2:
            C = F(A);
            if (d.Qd) throw new O(1, 1, 7001, a, b);
            if (d.re) throw new O(1, 1, 1003, a, b);
            throw new O(1, 1, 1002, a, C, b);
          case 3:
            return (
              (z = qo(l.headers)), A.return(io(z, m, l.status, a, l.url, b))
            );
        }
      });
    }
    function qo(a) {
      var b = {};
      a.forEach(function (c, d) {
        b[d.trim()] = c;
      });
      return b;
    }
    function ro() {
      if (window.ReadableStream)
        try {
          new ReadableStream({});
        } catch (a) {
          return !1;
        }
      else return !1;
      return !(!window.fetch || !window.AbortController);
    }
    function so() {
      return Ic() || Hc() || Dc("FVP_STB") ? 1 : 2;
    }
    M("shaka.net.HttpFetchPlugin", jo);
    jo.isSupported = ro;
    jo.parse = ko;
    var oo = window.fetch,
      mo = window.AbortController,
      po = window.ReadableStream,
      lo = window.Headers;
    ro() &&
      (Pg("http", ko, so(), !0),
      Pg("https", ko, so(), !0),
      Pg("blob", ko, so(), !0));
    function to() {}
    function uo(a, b, c, d, e) {
      var f = new vo(),
        g = Date.now(),
        h = 0,
        k = new Promise(function (l, m) {
          f.open(b.method, a, !0);
          f.responseType = "arraybuffer";
          f.timeout = b.retryParameters.timeout;
          f.withCredentials = b.allowCrossSiteCredentials;
          f.onabort = function () {
            m(new O(1, 1, 7001, a, c));
          };
          var p = !1;
          f.onreadystatechange = function () {
            if (2 == f.readyState && !p) {
              var r = wo(f);
              e(r);
              p = !0;
            }
          };
          f.onload = function () {
            var r = wo(f),
              u = f.response;
            try {
              var t = io(r, u, f.status, a, f.responseURL, c);
              l(t);
            } catch (w) {
              m(w);
            }
          };
          f.onerror = function (r) {
            m(new O(1, 1, 1002, a, r, c));
          };
          f.ontimeout = function () {
            m(new O(1, 1, 1003, a, c));
          };
          f.onprogress = function (r) {
            var u = Date.now();
            if (100 < u - g || (r.lengthComputable && r.loaded == r.total))
              d(u - g, r.loaded - h, r.total - r.loaded),
                (h = r.loaded),
                (g = u);
          };
          for (var n in b.headers)
            f.setRequestHeader(n.toLowerCase(), b.headers[n]);
          f.send(b.body);
        });
      return new Bg(k, function () {
        f.abort();
        return Promise.resolve();
      });
    }
    function wo(a) {
      var b = a.getAllResponseHeaders().trim().split("\r\n");
      a = {};
      b = v(b);
      for (var c = b.next(); !c.done; c = b.next())
        (c = c.value.split(": ")),
          (a[c[0].toLowerCase()] = c.slice(1).join(": "));
      return a;
    }
    function xo() {
      return Ic() || Hc() || Dc("FVP_STB") ? 2 : 1;
    }
    M("shaka.net.HttpXHRPlugin", to);
    to.parse = uo;
    var vo = window.XMLHttpRequest;
    Pg("http", uo, xo(), !0);
    Pg("https", uo, xo(), !0);
    Pg("blob", uo, xo(), !0);
    function yo(a, b) {
      var c = zo(),
        d = this;
      this.j = b;
      this.i = a;
      this.l = c;
      this.o = null;
      this.m = [];
      this.h = this.g = null;
      this.u = Promise.resolve().then(function () {
        return Ao(d);
      });
      this.s = new wi(function () {
        return Bo(d);
      });
    }
    yo.prototype.destroy = function () {
      return this.s.destroy();
    };
    function Bo(a) {
      var b, c, d;
      return L(function (e) {
        if (1 == e.g) return a.h && a.h.abort(), Co(a), y(e, a.u, 2);
        a.g && a.g.La.ub();
        b = v(a.m);
        for (c = b.next(); !c.done; c = b.next()) (d = c.value), d.La.ub();
        a.g = null;
        a.m = [];
        a.j = null;
        B(e);
      });
    }
    function Do(a, b) {
      var c = {
        Ob: function () {},
        Lc: function () {},
        ub: function () {},
        onError: function () {},
        Mc: function () {},
        jg: function () {},
      };
      a.m.push({ create: b, La: c });
      a.h && a.h.abort();
      Co(a);
      return c;
    }
    function Ao(a) {
      return L(function (b) {
        if (a.s.g) b = b.A(0);
        else {
          if (0 == a.m.length || (a.g && !a.g.qb)) var c = !1;
          else {
            a.g && (a.g.La.ub(), (a.g = null));
            c = a.m.shift();
            var d = c.create(a.l);
            d
              ? (c.La.Ob(),
                (a.g = {
                  node: d.node,
                  payload: d.payload,
                  qb: d.qb,
                  La: c.La,
                }))
              : c.La.Mc();
            c = !0;
          }
          c
            ? (c = Promise.resolve())
            : a.g
            ? (c = Eo(a))
            : (a.j.zf(a.i), (a.o = new vc()), (c = a.o));
          b = y(b, c, 1);
        }
        return b;
      });
    }
    function Eo(a) {
      var b, c;
      return L(function (d) {
        switch (d.g) {
          case 1:
            return (
              (a.i = a.j.cf(a.i, a.l, a.g.node, a.g.payload)),
              E(d, 2),
              (a.h = a.j.Le(a.i, a.l, a.g.payload)),
              y(d, a.h.promise, 4)
            );
          case 4:
            a.h = null;
            a.i == a.g.node && (a.g.La.Lc(), (a.g = null));
            wa(d, 0);
            break;
          case 2:
            b = F(d);
            if (7001 == b.code) a.g.La.ub();
            else a.g.La.onError(b);
            a.g = null;
            a.h = null;
            c = a;
            return y(d, a.j.handleError(a.l, b), 5);
          case 5:
            (c.i = d.h), B(d);
        }
      });
    }
    function Co(a) {
      a.o && (a.o.resolve(), (a.o = null));
    }
    function Fo(a) {
      this.g = null;
      for (
        var b = v(Array.from(a.textTracks)), c = b.next();
        !c.done;
        c = b.next()
      )
        (c = c.value),
          (c.mode = "disabled"),
          "Shaka Player TextTrack" == c.label && (this.g = c);
      this.g ||
        (this.g = a.addTextTrack("subtitles", "Shaka Player TextTrack"));
      this.g.mode = "hidden";
    }
    q = Fo.prototype;
    q.remove = function (a, b) {
      if (!this.g) return !1;
      Go(this.g, function (c) {
        return c.startTime < b && c.endTime > a;
      });
      return !0;
    };
    q.append = function (a) {
      function b(h, k) {
        h = v(h);
        for (var l = h.next(); !l.done; l = h.next())
          if (((l = l.value), l.isContainer)) b(l.nestedCues, k);
          else {
            var m = l.clone();
            m.nestedCues = [];
            m.payload = c(l);
            k.push(m);
          }
        return k;
      }
      function c(h) {
        var k = [],
          l = 700 <= h.fontWeight,
          m = "italic" == h.fontStyle,
          p = h.textDecoration.includes("underline");
        l && k.push("b");
        m && k.push("i");
        p && k.push("u");
        l = k.reduce(function (n, r) {
          return n + "<" + r + ">";
        }, "");
        k = k.reduceRight(function (n, r) {
          return n + "</" + r + ">";
        }, "");
        return h.lineBreak || h.spacer
          ? (h.spacer &&
              Ob("shaka.extern.Cue", "Please use lineBreak instead of spacer."),
            "\n")
          : h.nestedCues.length
          ? h.nestedCues.map(c).join("")
          : l + h.payload + k;
      }
      var d = b(a, []),
        e = [];
      a = this.g.cues ? Array.from(this.g.cues) : [];
      var f = {};
      d = v(d);
      for (var g = d.next(); !g.done; f = { Ab: f.Ab }, g = d.next())
        (f.Ab = g.value),
          a.some(
            (function (h) {
              return function (k) {
                return k.startTime == h.Ab.startTime &&
                  k.endTime == h.Ab.endTime &&
                  k.text == h.Ab.payload
                  ? !0
                  : !1;
              };
            })(f)
          ) ||
            ((g = Ho(f.Ab)) && e.push(g));
      a = e.slice().sort(function (h, k) {
        return h.startTime != k.startTime
          ? h.startTime - k.startTime
          : h.endTime != k.endTime
          ? h.endTime - k.startTime
          : "line" in VTTCue.prototype
          ? e.indexOf(k) - e.indexOf(h)
          : e.indexOf(h) - e.indexOf(k);
      });
      a = v(a);
      for (f = a.next(); !f.done; f = a.next()) this.g.addCue(f.value);
    };
    q.destroy = function () {
      this.g &&
        (Go(this.g, function () {
          return !0;
        }),
        (this.g.mode = "disabled"));
      this.g = null;
      return Promise.resolve();
    };
    q.isTextVisible = function () {
      return "showing" == this.g.mode;
    };
    q.setTextVisibility = function (a) {
      this.g.mode = a ? "showing" : "hidden";
    };
    function Ho(a) {
      if (a.startTime >= a.endTime) return null;
      var b = new VTTCue(a.startTime, a.endTime, a.payload);
      b.lineAlign = a.lineAlign;
      b.positionAlign = a.positionAlign;
      a.size && (b.size = a.size);
      try {
        b.align = a.textAlign;
      } catch (c) {}
      "center" == a.textAlign && "center" != b.align && (b.align = "middle");
      "vertical-lr" == a.writingMode
        ? (b.vertical = "lr")
        : "vertical-rl" == a.writingMode && (b.vertical = "rl");
      1 == a.lineInterpretation && (b.snapToLines = !1);
      null != a.line && (b.line = a.line);
      null != a.position && (b.position = a.position);
      return b;
    }
    function Go(a, b) {
      var c = a.mode;
      a.mode = "showing" == c ? "showing" : "hidden";
      for (var d = v(Array.from(a.cues)), e = d.next(); !e.done; e = d.next())
        (e = e.value) && b(e) && a.removeCue(e);
      a.mode = c;
    }
    M("shaka.text.SimpleTextDisplayer", Fo);
    Fo.prototype.setTextVisibility = Fo.prototype.setTextVisibility;
    Fo.prototype.isTextVisible = Fo.prototype.isTextVisible;
    Fo.prototype.destroy = Fo.prototype.destroy;
    Fo.prototype.append = Fo.prototype.append;
    Fo.prototype.remove = Fo.prototype.remove;
    function Io() {}
    function Jo(a) {
      for (; a.firstChild; ) a.removeChild(a.firstChild);
    }
    M("shaka.util.Dom", Io);
    Io.removeAllChildren = Jo;
    function Ko(a, b) {
      var c = this;
      this.j = !1;
      this.i = [];
      this.B = a;
      this.l = b;
      this.g = document.createElement("div");
      this.g.classList.add("shaka-text-container");
      this.g.style.textAlign = "center";
      this.g.style.display = "flex";
      this.g.style.flexDirection = "column";
      this.g.style.alignItems = "center";
      this.g.style.justifyContent = "flex-end";
      this.l.appendChild(this.g);
      this.u = new Q(function () {
        Lo(c);
      }).Ga(0.25);
      this.h = new Map();
      this.s = new yi();
      this.s.G(document, "fullscreenchange", function () {
        Lo(c, !0);
      });
      this.o = null;
      "ResizeObserver" in window &&
        ((this.o = new ResizeObserver(function () {
          Lo(c, !0);
        })),
        this.o.observe(this.g));
      this.m = new Map();
    }
    q = Ko.prototype;
    q.append = function (a) {
      var b = [].concat(ka(this.i)),
        c = {};
      a = v(a);
      for (var d = a.next(); !d.done; c = { nc: c.nc }, d = a.next())
        (c.nc = d.value),
          b.some(
            (function (e) {
              return function (f) {
                return yb(f, e.nc);
              };
            })(c)
          ) || this.i.push(c.nc);
      Lo(this);
    };
    q.destroy = function () {
      this.l.removeChild(this.g);
      this.g = null;
      this.j = !1;
      this.i = [];
      this.u && this.u.stop();
      this.h.clear();
      this.s && (this.s.release(), (this.s = null));
      this.o && (this.o.disconnect(), (this.o = null));
    };
    q.remove = function (a, b) {
      if (!this.g) return !1;
      var c = this.i.length;
      this.i = this.i.filter(function (d) {
        return d.startTime < a || d.endTime >= b;
      });
      Lo(this, c > this.i.length);
      return !0;
    };
    q.isTextVisible = function () {
      return this.j;
    };
    q.setTextVisibility = function (a) {
      this.j = a;
    };
    function Mo(a, b, c, d, e) {
      var f = !1,
        g = [],
        h = [];
      b = v(b);
      for (var k = b.next(); !k.done; k = b.next()) {
        k = k.value;
        e.push(k);
        var l = a.h.get(k),
          m = k.startTime <= d && k.endTime > d,
          p = l ? l.we : null;
        l &&
          (g.push(l.fd),
          l.lc && g.push(l.lc),
          m || ((f = !0), a.h.delete(k), (l = null)));
        m &&
          (h.push(k),
          l || (No(a, k, e), (l = a.h.get(k)), (p = l.we), (f = !0)));
        0 < k.nestedCues.length && p && Mo(a, k.nestedCues, p, d, e);
        e.pop();
      }
      if (f) {
        d = v(g);
        for (e = d.next(); !e.done; e = d.next())
          (e = e.value), e.parentElement && e.parentElement.removeChild(e);
        h.sort(function (n, r) {
          return n.startTime != r.startTime
            ? n.startTime - r.startTime
            : n.endTime - r.endTime;
        });
        h = v(h);
        for (k = h.next(); !k.done; k = h.next())
          (d = a.h.get(k.value)),
            d.lc
              ? (c.appendChild(d.lc), d.lc.appendChild(d.fd))
              : c.appendChild(d.fd);
      }
    }
    function Lo(a, b) {
      if (a.g) {
        var c = a.B.currentTime;
        if (!a.j || (void 0 === b ? 0 : b)) {
          b = v(a.m.values());
          for (var d = b.next(); !d.done; d = b.next()) Jo(d.value);
          Jo(a.g);
          a.h.clear();
          a.m.clear();
        }
        if (a.j) {
          b = new Map();
          d = v(a.h.keys());
          for (var e = d.next(); !e.done; e = d.next())
            (e = e.value), b.set(e, a.h.get(e));
          Mo(a, a.i, a.g, c, []);
        }
      }
    }
    function No(a, b, c) {
      var d = 1 < c.length,
        e = d ? "span" : "div";
      if (b.lineBreak || b.spacer)
        b.spacer &&
          Ob("shaka.extern.Cue", "Please use lineBreak instead of spacer."),
          (e = "br");
      d = !d && 0 < b.nestedCues.length;
      var f = document.createElement(e);
      "br" != e && Oo(a, f, b, c, d);
      c = null;
      if (b.region && b.region.id)
        if (((c = b.region), a.m.has(c.id))) c = a.m.get(c.id);
        else {
          e = document.createElement("span");
          var g = c.heightUnits == Fb ? "%" : "px",
            h = c.widthUnits == Fb ? "%" : "px",
            k = c.viewportAnchorUnits == Fb ? "%" : "px";
          e.id = "shaka-text-region---" + c.id;
          e.classList.add("shaka-text-region");
          e.style.height = c.height + g;
          e.style.width = c.width + h;
          e.style.position = "absolute";
          e.style.top = c.viewportAnchorY + k;
          e.style.left = c.viewportAnchorX + k;
          e.style.display = "flex";
          e.style.flexDirection = "column";
          e.style.alignItems = "center";
          e.style.justifyContent =
            "before" == b.displayAlign
              ? "flex-start"
              : "center" == b.displayAlign
              ? "center"
              : "flex-end";
          a.m.set(c.id, e);
          c = e;
        }
      e = f;
      d &&
        ((e = document.createElement("span")),
        e.classList.add("shaka-text-wrapper"),
        (e.style.backgroundColor = b.backgroundColor),
        f.appendChild(e));
      a.h.set(b, { fd: f, we: e, lc: c });
    }
    function Oo(a, b, c, d, e) {
      var f = b.style,
        g = 0 == c.nestedCues.length,
        h = 1 < d.length;
      f.whiteSpace = "pre-wrap";
      var k = c.payload.replace(/\s+$/g, function (m) {
        return "\u00a0".repeat(m.length);
      });
      f.webkitTextStrokeColor = c.textStrokeColor;
      f.webkitTextStrokeWidth = c.textStrokeWidth;
      f.color = c.color;
      f.direction = c.direction;
      f.opacity = c.opacity;
      f.paddingLeft = Po(c.linePadding, c, a.l);
      f.paddingRight = Po(c.linePadding, c, a.l);
      if (c.backgroundImage)
        (f.backgroundImage = "url('" + c.backgroundImage + "')"),
          (f.backgroundRepeat = "no-repeat"),
          (f.backgroundSize = "contain"),
          (f.backgroundPosition = "center"),
          (f.width = "100%"),
          (f.height = "100%");
      else {
        if (c.nestedCues.length) var l = b;
        else (l = document.createElement("span")), b.appendChild(l);
        c.border && (l.style.border = c.border);
        e ||
          ((b = Qo(d, function (m) {
            return m.backgroundColor;
          }))
            ? (l.style.backgroundColor = b)
            : k && (l.style.backgroundColor = "rgba(0, 0, 0, 0.8)"));
        k && (l.textContent = k);
      }
      h && !d[d.length - 1].isContainer
        ? (f.display = "inline")
        : ((f.display = "flex"),
          (f.flexDirection = "column"),
          (f.alignItems = "center"),
          (f.justifyContent =
            "before" == c.displayAlign
              ? "flex-start"
              : "center" == c.displayAlign
              ? "center"
              : "flex-end"));
      g || (f.margin = "0");
      f.fontFamily = c.fontFamily;
      f.fontWeight = c.fontWeight.toString();
      f.fontStyle = c.fontStyle;
      f.letterSpacing = c.letterSpacing;
      f.fontSize = Po(c.fontSize, c, a.l);
      c.line &&
        1 == c.lineInterpretation &&
        ((f.position = "absolute"),
        (f.left = "0"),
        (f.top = "0"),
        c.writingMode == sb
          ? ((f.width = "100%"),
            c.lineAlign == ub
              ? (f.top = c.line + "%")
              : "end" == c.lineAlign && (f.bottom = c.line + "%"))
          : "vertical-lr" == c.writingMode
          ? ((f.height = "100%"),
            c.lineAlign == ub
              ? (f.left = c.line + "%")
              : "end" == c.lineAlign && (f.right = c.line + "%"))
          : ((f.height = "100%"),
            c.lineAlign == ub
              ? (f.right = c.line + "%")
              : "end" == c.lineAlign && (f.left = c.line + "%")));
      f.lineHeight = c.lineHeight;
      c.position &&
        (c.writingMode == sb
          ? (f.paddingLeft = c.position)
          : (f.paddingTop = c.position));
      "line-left" == c.positionAlign
        ? (f.cssFloat = "left")
        : "line-right" == c.positionAlign && (f.cssFloat = "right");
      f.textAlign = c.textAlign;
      f.textDecoration = c.textDecoration.join(" ");
      f.writingMode = c.writingMode;
      ("writingMode" in document.documentElement.style &&
        f.writingMode == c.writingMode) ||
        (f.webkitWritingMode = c.writingMode);
      c.size &&
        (c.writingMode == sb
          ? (f.width = c.size + "%")
          : (f.height = c.size + "%"));
    }
    function Po(a, b, c) {
      var d = (d = new RegExp(/(\d*\.?\d+)([a-z]+|%+)/).exec(a))
        ? { value: Number(d[1]), unit: d[2] }
        : null;
      if (!d) return a;
      var e = d.value;
      switch (d.unit) {
        case "%":
          return ((e / 100) * c.clientHeight) / b.cellResolution.rows + "px";
        case "c":
          return (c.clientHeight * e) / b.cellResolution.rows + "px";
        default:
          return a;
      }
    }
    function Qo(a, b) {
      for (var c = a.length - 1; 0 <= c; c--) {
        var d = b(a[c]);
        if (d || 0 === d) return d;
      }
      return null;
    }
    M("shaka.text.UITextDisplayer", Ko);
    Ko.prototype.setTextVisibility = Ko.prototype.setTextVisibility;
    Ko.prototype.isTextVisible = Ko.prototype.isTextVisible;
    Ko.prototype.remove = Ko.prototype.remove;
    Ko.prototype.destroy = Ko.prototype.destroy;
    Ko.prototype.append = Ko.prototype.append;
    function Ro(a, b) {
      function c(g) {
        for (var h = g, k = v(b), l = k.next(); !l.done; l = k.next())
          (l = l.value), l.end && l.start < g && (h += l.end - l.start);
        g = Math.floor(h / 3600);
        k = Math.floor((h / 60) % 60);
        l = Math.floor(h % 60);
        h = Math.floor((1e3 * h) % 1e3);
        return (
          (10 > g ? "0" : "") +
          g +
          ":" +
          (10 > k ? "0" : "") +
          k +
          ":" +
          (10 > l ? "0" : "") +
          l +
          "." +
          (100 > h ? (10 > h ? "00" : "0") : "") +
          h
        );
      }
      function d(g) {
        var h = [],
          k = 700 <= g.fontWeight,
          l = "italic" == g.fontStyle,
          m = g.textDecoration.includes("underline");
        k && h.push("b");
        l && h.push("i");
        m && h.push("u");
        k = h.reduce(function (p, n) {
          return p + "<" + n + ">";
        }, "");
        h = h.reduceRight(function (p, n) {
          return p + "</" + n + ">";
        }, "");
        return g.lineBreak || g.spacer
          ? (g.spacer &&
              Ob("shaka.text.Cue", "Please use lineBreak instead of spacer."),
            "\n")
          : g.nestedCues.length
          ? g.nestedCues.map(d).join("")
          : k + g.payload + h;
      }
      var e = a.map(function (g) {
        if (g.nestedCues.length) {
          var h = g.clone();
          h.nestedCues = [];
          h.payload = d(g);
          return h;
        }
        return g;
      });
      a = "WEBVTT\n\n";
      e = v(e);
      for (var f = e.next(); !f.done; f = e.next())
        (f = f.value),
          (a +=
            c(f.startTime) +
            " --\x3e " +
            c(f.endTime) +
            (function (g) {
              var h = [];
              switch (g.textAlign) {
                case "left":
                  h.push("align:left");
                  break;
                case "right":
                  h.push("align:right");
                  break;
                case rb:
                  h.push("align:middle");
                  break;
                case "start":
                  h.push("align:start");
                  break;
                case "end":
                  h.push("align:end");
              }
              switch (g.writingMode) {
                case "vertical-lr":
                  h.push("vertical:lr");
                  break;
                case "vertical-rl":
                  h.push("vertical:rl");
              }
              return h.length ? " " + h.join(" ") : "";
            })(f) +
            "\n"),
          (a += f.payload + "\n\n");
      return a;
    }
    M("shaka.text.WebVttGenerator", function () {});
    function So() {}
    function To(a, b, c, d, e) {
      var f = e in d,
        g = !0,
        h;
      for (h in b) {
        var k = e + "." + h,
          l = f ? d[e] : c[h];
        f || h in c
          ? void 0 === b[h]
            ? void 0 === l || f
              ? delete a[h]
              : (a[h] = Kg(l))
            : l.constructor == Object && b[h] && b[h].constructor == Object
            ? (a[h] || (a[h] = Kg(l)),
              (k = To(a[h], b[h], l, d, k)),
              (g = g && k))
            : typeof b[h] != typeof l ||
              null == b[h] ||
              ("function" != typeof b[h] && b[h].constructor != l.constructor)
            ? (Za("Invalid config, wrong type for " + k), (g = !1))
            : ("function" == typeof c[h] &&
                c[h].length != b[h].length &&
                $a("Unexpected number of arguments for " + k),
              (a[h] = b[h]))
          : (Za("Invalid config, unrecognized key " + k), (g = !1));
      }
      return g;
    }
    function Uo(a, b) {
      for (var c = {}, d = c, e = 0, f = 0; ; ) {
        e = a.indexOf(".", e);
        if (0 > e) break;
        if (0 == e || "\\" != a[e - 1])
          (f = a.substring(f, e).replace(/\\\./g, ".")),
            (d[f] = {}),
            (d = d[f]),
            (f = e + 1);
        e += 1;
      }
      d[a.substring(f).replace(/\\\./g, ".")] = b;
      return c;
    }
    function Vo(a, b) {
      return a && b;
    }
    M("shaka.util.ConfigUtils", So);
    So.convertToConfigObject = Uo;
    So.mergeConfigObjects = To;
    function Wo() {}
    function Xo() {
      var a = Infinity;
      navigator.connection && navigator.connection.saveData && (a = 360);
      var b = {
          retryParameters: zg(),
          servers: {},
          clearKeys: {},
          advanced: {},
          preserveMediaKeySessions: !1,
          delayLicenseRequestUntilPlayed: !1,
          initDataTransform: ij,
          logLicenseExchange: !1,
          updateExpirationTime: 1,
          preferredKeySystems: [],
          additionalRestrictedStatuses: [],
          keySystemsMapping: {},
        },
        c = {
          retryParameters: zg(),
          availabilityWindowOverride: NaN,
          disableAudio: !1,
          disableVideo: !1,
          disableText: !1,
          disableThumbnails: !1,
          defaultPresentationDelay: 0,
          overrideDolbyVisionCodecs: !1,
          raiseFatalErrorOnManifestUpdateRequestFailure: !1,
          dash: {
            clockSyncUri: "",
            ignoreDrmInfo: !1,
            disableXlinkProcessing: !1,
            xlinkFailGracefully: !1,
            ignoreMinBufferTime: !1,
            autoCorrectDrift: !0,
            initialSegmentLimit: 1e3,
            ignoreSuggestedPresentationDelay: !1,
            ignoreEmptyAdaptationSet: !1,
            ignoreMaxSegmentDuration: !1,
            keySystemsByURI: {
              "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b":
                "org.w3.clearkey",
              "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":
                "com.widevine.alpha",
              "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95":
                "com.microsoft.playready",
              "urn:uuid:79f0049a-4098-8642-ab92-e65be0885f95":
                "com.microsoft.playready",
              "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb":
                "com.adobe.primetime",
            },
            manifestPreprocessor: function (g) {
              return Vo([g], g);
            },
            minimumUpdatePeriodOverride: NaN,
            suggestedPresentationDelayOverride: NaN,
            enablePatchMPDSupport: !1,
            enableAudioGroups: !1,
          },
          hls: {
            ignoreTextStreamFailures: !1,
            ignoreImageStreamFailures: !1,
            useFullSegmentsForStartTime: !1,
            defaultAudioCodec: "mp4a.40.2",
            defaultVideoCodec: "avc1.42E01E",
            restrictedManifestParsing: !1,
          },
        },
        d = {
          additionalHdcpCheck: Bc(),
          retryParameters: zg(),
          failureCallback: function (g) {
            return Vo([g], void 0);
          },
          rebufferingGoal: 2,
          bufferingGoal: 10,
          bufferBehind: 30,
          ignoreTextStreamFailures: !1,
          alwaysStreamText: !1,
          startAtSegmentBoundary: !1,
          gapDetectionThreshold: 0.1,
          smallGapLimit: 0.5,
          jumpLargeGaps: !1,
          durationBackoff: 1,
          forceTransmuxTS: !1,
          safeSeekOffset: 5,
          stallEnabled: !0,
          stallThreshold: 1,
          stallSkip: 0.1,
          useNativeHlsOnSafari: !0,
          parsePrftBox: !1,
          inaccurateManifestTolerance: 2,
          lowLatencyMode: !1,
          autoLowLatencyMode: !1,
          forceHTTPS: !1,
          preferNativeHls: !1,
          updateIntervalSeconds: 1,
          dispatchAllEmsgBoxes: !1,
          observeQualityChanges: !1,
          enableSegmentStartWorkaround: !1,
        };
      if (navigator.userAgent.match(/Edge\//) || Cc() || Fc())
        d.gapDetectionThreshold = 0.5;
      if (Ec() || Cc() || Fc()) d.stallSkip = 0;
      var e = {
          trackSelectionCallback: function (g) {
            return L(function (h) {
              return h.return(g);
            });
          },
          downloadSizeCallback: function (g) {
            var h;
            return L(function (k) {
              if (1 == k.g)
                return navigator.storage && navigator.storage.estimate
                  ? y(k, navigator.storage.estimate(), 3)
                  : k.return(!0);
              h = k.h;
              return k.return(h.usage + g < 0.95 * h.quota);
            });
          },
          progressCallback: function (g, h) {
            return Vo([g, h], void 0);
          },
          usePersistentLicense: !0,
        },
        f = {
          drm: b,
          manifest: c,
          streaming: d,
          mediaSource: {
            codecSwitchingStrategy: "reload",
            sourceBufferExtraFeatures: "",
          },
          offline: e,
          abrFactory: function () {
            return new pe();
          },
          abr: {
            enabled: !0,
            useNetworkInformation: !0,
            defaultBandwidthEstimate: 1e6,
            switchInterval: 8,
            bandwidthUpgradeTarget: 0.85,
            bandwidthDowngradeTarget: 0.95,
            forceLowestRateOnTimeout: !1,
            restrictions: {
              minWidth: 0,
              maxWidth: Infinity,
              minHeight: 0,
              maxHeight: a,
              minPixels: 0,
              maxPixels: Infinity,
              minFrameRate: 0,
              maxFrameRate: Infinity,
              minBandwidth: 0,
              maxBandwidth: Infinity,
            },
            advanced: {
              minTotalBytes: 128e3,
              minBytes: 16e3,
              fastHalfLife: 2,
              slowHalfLife: 5,
            },
          },
          preferredAudioLanguage: "",
          preferredTextLanguage: "",
          preferredVariantRole: "",
          preferredTextRole: "",
          forceInitialTextLanguage: !1,
          preferredAudioChannelCount: 2,
          preferredVideoCodecs: [],
          preferredAudioCodecs: [],
          preferForcedSubs: !1,
          preferredDecodingAttributes: [],
          restrictions: {
            minWidth: 0,
            maxWidth: Infinity,
            minHeight: 0,
            maxHeight: Infinity,
            minPixels: 0,
            maxPixels: Infinity,
            minFrameRate: 0,
            maxFrameRate: Infinity,
            minBandwidth: 0,
            maxBandwidth: Infinity,
          },
          playRangeStart: 0,
          playRangeEnd: Infinity,
          textDisplayFactory: function () {
            return null;
          },
          cmcd: { enabled: !1, sessionId: "", contentId: "", useHeaders: !1 },
          restrictVariantsByBandwidth: !1,
        };
      e.trackSelectionCallback = function (g) {
        return L(function (h) {
          return h.return(Yo(g, f.preferredAudioLanguage));
        });
      };
      return f;
    }
    function Zo(a, b, c) {
      var d = {
        ".drm.keySystemsMapping": "",
        ".drm.servers": "",
        ".drm.clearKeys": "",
        ".drm.advanced": {
          distinctiveIdentifierRequired: !1,
          persistentStateRequired: !1,
          videoRobustness: "",
          audioRobustness: "",
          sessionType: "",
          serverCertificate: new Uint8Array(0),
          serverCertificateUri: "",
          individualizationServer: "",
        },
      };
      return To(a, b, c || Xo(), d, "");
    }
    function Yo(a, b) {
      var c = a.filter(function (g) {
          return "variant" == g.type;
        }),
        d = [],
        e = Fd(
          b,
          c.map(function (g) {
            return g.language;
          })
        );
      e &&
        (d = c.filter(function (g) {
          return R(g.language) == e;
        }));
      0 == d.length &&
        (d = c.filter(function (g) {
          return g.primary;
        }));
      0 == d.length &&
        (c.map(function (g) {
          return g.language;
        }),
        (d = c));
      var f = d.filter(function (g) {
        return g.height && 480 >= g.height;
      });
      f.length &&
        (f.sort(function (g, h) {
          return h.height - g.height;
        }),
        (d = f.filter(function (g) {
          return g.height == f[0].height;
        })));
      b = [];
      d.length &&
        ((c = Math.floor(d.length / 2)),
        d.sort(function (g, h) {
          return g.bandwidth - h.bandwidth;
        }),
        b.push(d[c]));
      a = v(a);
      for (d = a.next(); !d.done; d = a.next())
        (d = d.value), (d.type != sc && "image" != d.type) || b.push(d);
      return b;
    }
    M("shaka.util.PlayerConfiguration", Wo);
    Wo.mergeConfigObjects = Zo;
    function $o() {
      this.g = null;
      this.h = [];
    }
    function ap(a, b) {
      if (null == a.g)
        a.g = { timestamp: Date.now() / 1e3, state: b, duration: 0 };
      else {
        var c = Date.now() / 1e3;
        a.g.duration = c - a.g.timestamp;
        a.g.state != b &&
          (a.h.push(a.g), (a.g = { timestamp: c, state: b, duration: 0 }));
      }
    }
    function bp(a, b) {
      var c = 0;
      a.g && a.g.state == b && (c += a.g.duration);
      a = v(a.h);
      for (var d = a.next(); !d.done; d = a.next())
        (d = d.value), (c += d.state == b ? d.duration : 0);
      return c;
    }
    function cp(a) {
      function b(f) {
        return { timestamp: f.timestamp, state: f.state, duration: f.duration };
      }
      for (var c = [], d = v(a.h), e = d.next(); !e.done; e = d.next())
        c.push(b(e.value));
      a.g && c.push(b(a.g));
      return c;
    }
    function dp() {
      this.i = this.h = null;
      this.g = [];
    }
    function ep(a, b, c) {
      a.i != b &&
        ((a.i = b),
        a.g.push({
          timestamp: Date.now() / 1e3,
          id: b.id,
          type: "text",
          fromAdaptation: c,
          bandwidth: null,
        }));
    }
    function fp() {
      this.u =
        this.B =
        this.S =
        this.C =
        this.s =
        this.j =
        this.H =
        this.M =
        this.N =
        this.J =
        this.F =
        this.O =
        this.m =
        this.i =
        this.Y =
        this.ca =
        this.da =
        this.l =
        this.o =
          NaN;
      this.V = 0;
      this.g = new $o();
      this.h = new dp();
    }
    function Z(a, b) {
      Jg.call(this);
      var c = this;
      this.M = !1;
      this.ve = null;
      this.l = gp;
      this.wc = this.g = null;
      this.za = !1;
      this.Dc = new yi();
      this.Wb = new yi();
      this.o = new yi();
      this.ld =
        this.qe =
        this.se =
        this.s =
        this.Ub =
        this.i =
        this.Ec =
        this.F =
        this.j =
        this.Aa =
        this.V =
        this.Fc =
        this.O =
        this.xc =
        this.J =
        this.Db =
        this.C =
        this.N =
        this.Bb =
        this.u =
        this.zd =
        this.H =
          null;
      this.Bd = 1e9;
      this.h = hp(this);
      this.xd = { width: Infinity, height: Infinity };
      this.m = null;
      this.Sa = new Sl(
        this.h.preferredAudioLanguage,
        this.h.preferredVariantRole,
        this.h.preferredAudioChannelCount,
        "",
        this.h.preferredAudioCodecs
      );
      this.Ta = this.h.preferredTextLanguage;
      this.$b = this.h.preferredTextRole;
      this.Yb = this.h.preferForcedSubs;
      this.Xb = [];
      this.ac = null;
      b && b(this);
      this.H = ip(this);
      this.H.Hd(this.h.streaming.forceHTTPS);
      this.B = null;
      jp && (this.B = Vb(jp));
      this.Dc.G(window, "online", function () {
        c.Ed();
      });
      this.S = { name: "detach" };
      this.Y = { name: "attach" };
      this.ma = { name: "unload" };
      this.Cd = { name: "manifest-parser" };
      this.vd = { name: "manifest" };
      this.Cb = { name: "media-source" };
      this.md = { name: "drm-engine" };
      this.ca = { name: "load" };
      this.Fd = { name: "src-equals-drm-engine" };
      this.Eb = { name: "src-equals" };
      var d = new Map();
      d.set(this.Y, function (e, f) {
        return Fg(kp(c, e, f));
      });
      d.set(this.S, function (e) {
        e.I && (c.Wb.Na(), (e.I = null));
        c.B && c.B.release();
        c.g = null;
        e = Promise.resolve();
        return Fg(e);
      });
      d.set(this.ma, function (e) {
        return Fg(lp(c, e));
      });
      d.set(this.Cb, function (e) {
        e = mp(c, e);
        return Fg(e);
      });
      d.set(this.Cd, function (e, f) {
        e = np(c, e, f);
        return Fg(e);
      });
      d.set(this.vd, function (e) {
        return op(c, e);
      });
      d.set(this.md, function (e) {
        e = pp(c, e);
        return Fg(e);
      });
      d.set(this.ca, function (e, f) {
        return Fg(qp(c, e, f));
      });
      d.set(this.Fd, function (e) {
        e = rp(c, e);
        return Fg(e);
      });
      d.set(this.Eb, function (e, f) {
        return sp(c, e, f);
      });
      this.Ba = new yo(this.S, {
        cf: function (e, f, g, h) {
          var k = null;
          e == c.S && (k = g == c.S ? c.S : c.Y);
          e == c.Y &&
            (k =
              g == c.S || f.I != h.I
                ? c.S
                : g == c.Y
                ? c.Y
                : g == c.Cb || g == c.ca
                ? c.Cb
                : g == c.Eb
                ? c.Fd
                : null);
          e == c.Cb && (k = g == c.ca && f.I == h.I ? c.Cd : c.ma);
          e == c.Cd && (k = tp(c.ca, c.vd, c.ma, g, f, h));
          e == c.vd && (k = tp(c.ca, c.md, c.ma, g, f, h));
          e == c.md && (k = tp(c.ca, c.ca, c.ma, g, f, h));
          e == c.Fd && (k = g == c.Eb && f.I == h.I ? c.Eb : c.ma);
          if (e == c.ca || e == c.Eb) k = c.ma;
          e == c.ma && (k = h.I && f.I == h.I ? c.Y : c.S);
          return k;
        },
        Le: function (e, f, g) {
          c.dispatchEvent(up(vp, new Map().set("state", e.name)));
          return d.get(e)(f, g);
        },
        handleError: function (e) {
          return L(function (f) {
            return 1 == f.g ? y(f, lp(c, e), 2) : f.return(e.I ? c.Y : c.S);
          });
        },
        zf: function (e) {
          c.dispatchEvent(up(wp, new Map().set("state", e.name)));
        },
      });
      a && this.Fb(a, !0);
    }
    ra(Z, Jg);
    function up(a, b) {
      return new Ig(a, b);
    }
    q = Z.prototype;
    q.destroy = function () {
      var a = this,
        b;
      return L(function (c) {
        switch (c.g) {
          case 1:
            if (a.l == xp) return c.return();
            a.l = xp;
            b = Do(a.Ba, function () {
              return { node: a.S, payload: zo(), qb: !1 };
            });
            return y(
              c,
              new Promise(function (d) {
                b.Ob = function () {};
                b.Lc = function () {
                  d();
                };
                b.ub = function () {
                  d();
                };
                b.onError = function () {
                  d();
                };
                b.Mc = function () {
                  d();
                };
              }),
              2
            );
          case 2:
            return y(c, a.Ba.destroy(), 3);
          case 3:
            a.Dc && (a.Dc.release(), (a.Dc = null));
            a.Wb && (a.Wb.release(), (a.Wb = null));
            a.o && (a.o.release(), (a.o = null));
            a.ld = null;
            a.s = null;
            a.h = null;
            a.m = null;
            a.wc = null;
            a.V = null;
            a.zd = null;
            if (!a.H) {
              c.A(4);
              break;
            }
            return y(c, a.H.destroy(), 5);
          case 5:
            a.H = null;
          case 4:
            Jg.prototype.release.call(a), B(c);
        }
      });
    };
    q.Fb = function (a, b) {
      b = void 0 === b ? !0 : b;
      if (this.l == xp) return Promise.reject(yp());
      var c = zo();
      c.I = a;
      yc() || (b = !1);
      var d = b ? this.Cb : this.Y;
      a = Do(this.Ba, function () {
        return { node: d, payload: c, qb: !1 };
      });
      a.Ob = function () {};
      return zp(a);
    };
    q.detach = function () {
      var a = this;
      if (this.l == xp) return Promise.reject(yp());
      var b = Do(this.Ba, function () {
        return { node: a.S, payload: zo(), qb: !1 };
      });
      b.Ob = function () {};
      return zp(b);
    };
    q.Vf = function (a) {
      var b = this;
      a = void 0 === a ? !0 : a;
      if (this.l == xp) return Promise.reject(yp());
      yc() || (a = !1);
      var c = zo(),
        d = Do(this.Ba, function (e) {
          var f = e.I && a ? b.Cb : e.I ? b.Y : b.S;
          c.I = e.I;
          return { node: f, payload: c, qb: !1 };
        });
      d.Ob = function () {};
      return zp(d);
    };
    q.$f = function (a) {
      this.ac = a;
    };
    q.load = function (a, b, c) {
      var d = this;
      this.ac = null;
      window.shakaConfiguration &&
        (console.log(
          "SHAKAFORK >> applying custom configuration",
          window.shakaConfiguration
        ),
        this.configure(window.shakaConfiguration));
      if (this.l == xp) return Promise.reject(yp());
      this.dispatchEvent(up(Ap));
      var e = zo();
      e.uri = a;
      e.Kd = Date.now() / 1e3;
      c && (e.mimeType = c);
      void 0 !== b && (e.startTime = b);
      var f = (this.M = Bp(this, e)) ? this.Eb : this.ca,
        g = Do(this.Ba, function (h) {
          if (null == h.I) return null;
          e.I = h.I;
          return { node: f, payload: e, qb: !0 };
        });
      this.m = new fp();
      this.V = Cp(this);
      g.Ob = function () {};
      return new Promise(function (h, k) {
        g.Mc = function () {
          return k(new O(2, 7, 7002));
        };
        g.Lc = function () {
          h();
          d.dispatchEvent(up(Dp));
        };
        g.ub = function () {
          return k(yp());
        };
        g.onError = function (l) {
          return k(l);
        };
      });
    };
    function Ep(a) {
      var b = a.h.abr;
      return a.h.restrictVariantsByBandwidth && b.enabled
        ? b.restrictions.maxBandwidth
        : Infinity;
    }
    function Bp(a, b) {
      if (!yc()) return !0;
      var c = b.mimeType,
        d = b.uri || "";
      c || ((c = Yh(d)), (c = Fp[c]));
      if (c) {
        if ("" == (b.I || Ac()).canPlayType(c)) return !1;
        if (!yc() || !(c in Xh || Yh(d) in Zh) || a.h.streaming.preferNativeHls)
          return !0;
        if (Gc()) return a.h.streaming.useNativeHlsOnSafari;
      }
      return !1;
    }
    function kp(a, b, c) {
      null == b.I &&
        ((b.I = c.I),
        a.Wb.G(b.I, "error", function () {
          return Gp(a);
        }));
      a.g = b.I;
      return Promise.resolve();
    }
    function lp(a, b) {
      var c, d, e, f, g, h, k, l, m;
      return L(function (p) {
        switch (p.g) {
          case 1:
            return (
              a.l != xp && (a.l = gp),
              (c = a.Xb.map(function (n) {
                return n();
              })),
              (a.Xb = []),
              y(p, Promise.all(c), 2)
            );
          case 2:
            a.dispatchEvent(up(Hp));
            b.mimeType = null;
            b.startTime = null;
            b.uri = null;
            b.I && a.o.Na();
            a.Db && (a.Db.release(), (a.Db = null));
            a.xc && (a.xc.stop(), (a.xc = null));
            if (!a.F) {
              p.A(3);
              break;
            }
            return y(p, a.F.stop(), 4);
          case 4:
            (a.F = null), (a.Ec = null);
          case 3:
            if (!a.s) {
              p.A(5);
              break;
            }
            return y(p, a.s.stop(), 5);
          case 5:
            if (!a.j) {
              p.A(7);
              break;
            }
            return y(p, a.j.destroy(), 8);
          case 8:
            a.j = null;
          case 7:
            a.J && (a.J.release(), (a.J = null));
            a.C && (a.C.release(), (a.C = null));
            if (!a.N) {
              p.A(9);
              break;
            }
            return y(p, a.N.destroy(), 10);
          case 10:
            a.N = null;
          case 9:
            if (a.B) a.B.onAssetUnload();
            if (!b.I || !b.I.src) {
              p.A(11);
              break;
            }
            return y(
              p,
              new Promise(function (n) {
                return new Q(n).X(0.1);
              }),
              12
            );
          case 12:
            for (b.I.removeAttribute("src"), b.I.load(); b.I.lastChild; )
              b.I.removeChild(b.I.firstChild);
          case 11:
            if (!a.u) {
              p.A(13);
              break;
            }
            return y(p, a.u.destroy(), 14);
          case 14:
            a.u = null;
          case 13:
            if (!a.Bb) {
              p.A(15);
              break;
            }
            return y(p, a.Bb.destroy(), 16);
          case 16:
            a.Bb = null;
          case 15:
            a.Ub = null;
            a.O = null;
            if (a.i) {
              d = v(a.i.variants);
              for (e = d.next(); !e.done; e = d.next())
                for (
                  f = e.value, g = v([f.audio, f.video]), h = g.next();
                  !h.done;
                  h = g.next()
                )
                  (k = h.value) && k.segmentIndex && k.segmentIndex.release();
              l = v(a.i.textStreams);
              for (h = l.next(); !h.done; h = l.next())
                (m = h.value), m.segmentIndex && m.segmentIndex.release();
            }
            a.i = null;
            a.m = new fp();
            a.sd = null;
            Ip(a);
            B(p);
        }
      });
    }
    function mp(a, b) {
      var c, d, e;
      return L(function (f) {
        if (1 == f.g)
          return (
            (c = a.h.textDisplayFactory),
            (d = Vb(c)),
            (a.sd = c),
            (e = Jp(b.I, d, function (g, h, k) {
              g = v(g);
              for (var l = g.next(); !l.done; l = g.next())
                if (((l = l.value), l.data && l.cueTime && l.frames)) {
                  for (
                    var m = l.cueTime + h, p = k, n = v(l.frames), r = n.next();
                    !r.done;
                    r = n.next()
                  )
                    Kp(a, m, p, "ID3", r.value);
                  if (a.B) a.B.onHlsTimedMetadata(l, m);
                }
            })),
            e.configure(a.h.mediaSource),
            y(f, e.H, 2)
          );
        a.N = e;
        B(f);
      });
    }
    function np(a, b, c) {
      var d, e, f, g;
      return L(function (h) {
        if (1 == h.g)
          return (
            (b.mimeType = c.mimeType),
            (b.uri = c.uri),
            (d = b.uri),
            (e = a.H),
            (a.Ub = d),
            (f = a),
            y(h, Wh(d, e, a.h.manifest.retryParameters, b.mimeType), 2)
          );
        f.Ec = h.h;
        a.F = Vb(a.Ec);
        g = Kg(a.h.manifest);
        c.I && "AUDIO" === c.I.nodeName && (g.disableVideo = !0);
        a.F.configure(g);
        B(h);
      });
    }
    function op(a, b) {
      var c = b.uri;
      b = a.H;
      a.Fc = new yn(function () {
        return a.mc();
      });
      a.Fc.addEventListener("regionadd", function (e) {
        e = e.region;
        Lp(a, Mp, e);
        if (a.B) a.B.onDashTimedMetadata(e);
      });
      a.Aa = null;
      a.h.streaming.observeQualityChanges &&
        ((a.Aa = new un(function () {
          return a.gb();
        })),
        a.Aa.addEventListener("qualitychange", function (e) {
          var f = e.quality;
          e = e.position;
          f = new Map()
            .set("mediaQuality", {
              bandwidth: f.bandwidth,
              audioSamplingRate: f.audioSamplingRate,
              codecs: f.codecs,
              contentType: f.contentType,
              frameRate: f.frameRate,
              height: f.height,
              mimeType: f.mimeType,
              channelsCount: f.channelsCount,
              pixelAspectRatio: f.pixelAspectRatio,
              width: f.width,
            })
            .set("position", e);
          a.dispatchEvent(up(Np, f));
        }));
      var d = {
        networkingEngine: b,
        modifyManifestRequest: function (e, f) {
          var g = a.V;
          try {
            g.g.enabled && ((g.o = f.format), li(g, e, { ot: oi, su: !g.i }));
          } catch (h) {
            ab(
              "CMCD_MANIFEST_ERROR",
              "Could not generate manifest CMCD data.",
              h
            );
          }
        },
        modifySegmentRequest: function (e, f) {
          bi(a.V, e, f);
        },
        filter: function (e) {
          return Op(a, e);
        },
        makeTextStreamsForClosedCaptions: function (e) {
          return Pp(a, e);
        },
        onTimelineRegionAdded: function (e) {
          var f = a.Fc;
          a: {
            var g = v(f.g);
            for (var h = g.next(); !h.done; h = g.next())
              if (
                ((h = h.value),
                h.schemeIdUri == e.schemeIdUri &&
                  h.id == e.id &&
                  h.startTime == e.startTime &&
                  h.endTime == e.endTime)
              ) {
                g = h;
                break a;
              }
            g = null;
          }
          null == g &&
            (f.g.add(e),
            (e = new Ig("regionadd", new Map([["region", e]]))),
            f.dispatchEvent(e));
        },
        onEvent: function (e) {
          return a.dispatchEvent(e);
        },
        onError: function (e) {
          return Qp(a, e);
        },
        isLowLatencyMode: function () {
          return a.h.streaming.lowLatencyMode;
        },
        isAutoLowLatencyMode: function () {
          return a.h.streaming.autoLowLatencyMode;
        },
        enableLowLatencyMode: function () {
          a.configure("streaming.lowLatencyMode", !0);
        },
      };
      return new Bg(
        (function () {
          var e, f;
          return L(function (g) {
            if (1 == g.g) return (e = a), y(g, a.F.start(c, d), 2);
            e.i = g.h;
            f = up(Rp);
            a.dispatchEvent(f);
            if (0 == a.i.variants.length) throw new O(2, 4, 4036);
            Sp(a.i);
            B(g);
          });
        })(),
        function () {
          return a.F.stop();
        }
      );
    }
    function pp(a, b) {
      var c, d;
      return L(function (e) {
        return 1 == e.g
          ? ((c = Date.now() / 1e3),
            (d = !0),
            (a.u = Tp(a, {
              Mb: a.H,
              onError: function (f) {
                Qp(a, f);
              },
              Bf: function (f) {
                if (a.j) {
                  var g = Object.keys(f),
                    h = 1 == g.length && "00" == g[0],
                    k = 1 === g.length && "" === g[0],
                    l = Up(a),
                    m = !1;
                  if (g.length) {
                    g = v(a.i.variants);
                    for (var p = g.next(); !p.done; p = g.next()) {
                      p = p.value;
                      var n = [];
                      p.audio && n.push(p.audio);
                      p.video && n.push(p.video);
                      n = v(n);
                      for (var r = n.next(); !r.done; r = n.next()) {
                        var u = r.value;
                        r = p.allowedByKeySystem;
                        if (u.keyIds.size) {
                          p.allowedByKeySystem = !0;
                          u = v(u.keyIds);
                          for (var t = u.next(); !t.done; t = u.next())
                            (t = t.value),
                              h
                                ? (t = "00")
                                : k && Dc("DT_STB_BCM") && (t = ""),
                              (t = f[t]),
                              (p.allowedByKeySystem =
                                p.allowedByKeySystem && !!t && !l.includes(t));
                        }
                        r != p.allowedByKeySystem && (m = !0);
                      }
                    }
                  }
                  if (!m || Vp(a))
                    (f = a.j.l) && !f.allowedByKeySystem && Wp(a), m && Xp(a);
                }
              },
              onExpirationUpdated: function (f, g) {
                if (a.F && a.F.onExpirationUpdated)
                  a.F.onExpirationUpdated(f, g);
                f = up(Yp);
                a.dispatchEvent(f);
              },
              onEvent: function (f) {
                a.dispatchEvent(f);
                f.type == Zp && d && ((d = !1), (a.m.j = Date.now() / 1e3 - c));
              },
            })),
            a.u.configure(a.h.drm),
            y(e, Qi(a.u, a.i.variants, a.i.offlineSessionIds), 2))
          : 3 != e.g
          ? y(e, a.u.Fb(b.I), 3)
          : y(e, Op(a, a.i), 0);
      });
    }
    function qp(a, b, c) {
      var d, e, f, g, h, k, l, m, p, n, r, u;
      return L(function (t) {
        switch (t.g) {
          case 1:
            b.startTime = c.startTime;
            null != a.ac && ((b.startTime = a.ac), (a.ac = null));
            d = b.I;
            e = b.uri;
            a.Ub = e;
            a.J = new $m({
              Cc: function () {
                return d.playbackRate;
              },
              yc: function () {
                return d.defaultPlaybackRate;
              },
              Id: function (w) {
                d.playbackRate = w;
              },
              ce: function (w) {
                d.currentTime += w;
              },
            });
            f = function () {
              return $p(a);
            };
            g = function () {
              return aq(a);
            };
            a.o.G(d, "playing", f);
            a.o.G(d, "pause", f);
            a.o.G(d, "ended", f);
            a.o.G(d, "ratechange", g);
            h = a.h.abrFactory;
            (a.s && a.ld == h) ||
              ((a.ld = h),
              (a.s = Vb(h)),
              "function" != typeof a.s.playbackRateChanged &&
                (Ob(
                  "AbrManager",
                  "Please use an AbrManager with playbackRateChanged function."
                ),
                (a.s.playbackRateChanged = function () {})),
              a.s.configure(a.h.abr, a));
            a.Sa = new Sl(
              a.h.preferredAudioLanguage,
              a.h.preferredVariantRole,
              a.h.preferredAudioChannelCount,
              "",
              a.h.preferredAudioCodecs
            );
            a.Ta = a.h.preferredTextLanguage;
            a.$b = a.h.preferredTextRole;
            a.Yb = a.h.preferForcedSubs;
            bq(a.i.presentationTimeline, a.h.playRangeStart, a.h.playRangeEnd);
            a.s.init(function (w, x, C) {
              a.j &&
                w != a.j.l &&
                cq(a, w, !0, void 0 === x ? !1 : x, void 0 === C ? 0 : C);
            });
            Hd(
              a.i,
              a.h.preferredVideoCodecs,
              a.h.preferredAudioCodecs,
              a.h.preferredAudioChannelCount,
              a.h.preferredDecodingAttributes,
              a.h.mediaSource.codecSwitchingStrategy
            );
            a.C = dq(a, b.startTime);
            a.Db = eq(a);
            k = Math.max(a.i.minBufferTime, a.h.streaming.rebufferingGoal);
            fq(a, k);
            a.j = gq(a);
            a.j.configure(a.h.streaming);
            a.l = hq;
            d.textTracks &&
              a.o.G(d.textTracks, "addtrack", function (w) {
                if (w.track)
                  switch (((w = w.track), w.kind)) {
                    case "chapters":
                      iq(a, w);
                  }
              });
            a.dispatchEvent(up(jq));
            l = null;
            if (
              (m = a.hb().find(function (w) {
                return w.active;
              }))
            ) {
              t.A(2);
              break;
            }
            l = Vp(a) ? a.s.chooseVariant() : null;
            cq(a, l, !0, !1, 0);
            if (!a.h.streaming.startAtSegmentBoundary) {
              t.A(3);
              break;
            }
            p = a.C.m();
            return y(t, kq(l, p), 4);
          case 4:
            (n = t.h), a.C.o(n);
          case 3:
            lq(a, null, ee(l));
          case 2:
            return (
              (r = a.ob().find(function (w) {
                return w.active;
              })),
              r ||
                ((u = me(a.i.textStreams, a.Ta, a.$b, a.Yb)[0] || null) &&
                  ep(a.m.h, u, !0),
                l &&
                  (u
                    ? (l.audio && mq(a, l.audio, u) && (a.za = !0),
                      a.za && a.N.s.setTextVisibility(!0),
                      nq(a))
                    : (a.za = !1)),
                u && (a.h.streaming.alwaysStreamText || a.kd()) && Qn(a.j, u)),
              y(t, a.j.start(), 5)
            );
          case 5:
            a.h.abr.enabled && (a.s.enable(), oq(a)),
              "disabled" === a.h.mediaSource.codecSwitchingStrategy &&
                (Wd(a.j ? a.j.l : null, a.i), pq(a.i)),
              Xp(a),
              Vp(a),
              a.i.variants.some(function (w) {
                return w.primary;
              }),
              a.o.la(d, "loadedmetadata", function () {
                a.m.m = Date.now() / 1e3 - c.Kd;
              }),
              B(t);
        }
      });
    }
    function rp(a, b) {
      var c = Date.now() / 1e3,
        d = !0;
      a.Bb = new hm({
        Mb: a.H,
        onError: function (e) {
          Qp(a, e);
        },
        onEvent: function (e) {
          a.dispatchEvent(e);
          e.type == Zp && d && ((d = !1), (a.m.j = Date.now() / 1e3 - c));
        },
      });
      a.Bb.configure(a.h.drm);
      a.Bb.Fb(b.I);
      return Promise.resolve();
    }
    function sp(a, b, c) {
      function d() {
        return $p(a);
      }
      b.uri = c.uri;
      b.startTime = c.startTime;
      a.Ub = b.uri;
      var e = b.I;
      a.C = new ln(e);
      var f = !1;
      a.Xb.push(function () {
        f = !0;
      });
      null != b.startTime && a.C.o(b.startTime);
      a.J = new $m({
        Cc: function () {
          return e.playbackRate;
        },
        yc: function () {
          return e.defaultPlaybackRate;
        },
        Id: function (k) {
          e.playbackRate = k;
        },
        ce: function (k) {
          e.currentTime += k;
        },
      });
      fq(a, a.h.streaming.rebufferingGoal);
      a.o.G(e, "playing", d);
      a.o.G(e, "pause", d);
      a.o.G(e, "ended", d);
      a.o.G(e, "ratechange", function () {
        return aq(a);
      });
      "none" != e.preload &&
        a.o.la(e, "loadedmetadata", function () {
          a.m.m = Date.now() / 1e3 - c.Kd;
        });
      e.audioTracks &&
        (a.o.G(e.audioTracks, "addtrack", function () {
          return Xp(a);
        }),
        a.o.G(e.audioTracks, "removetrack", function () {
          return Xp(a);
        }),
        a.o.G(e.audioTracks, "change", function () {
          return Xp(a);
        }));
      e.textTracks &&
        (a.o.G(e.textTracks, "addtrack", function (k) {
          if (k.track)
            switch (((k = k.track), k.kind)) {
              case "metadata":
                qq(a, k);
                break;
              case "chapters":
                iq(a, k);
                break;
              default:
                Xp(a);
            }
        }),
        a.o.G(e.textTracks, "removetrack", function () {
          return Xp(a);
        }),
        a.o.G(e.textTracks, "change", function () {
          return Xp(a);
        }));
      var g = Yh(b.uri);
      e.src = mi(a.V, b.uri, Fp[g]);
      (Cc() || Ec()) && e.load();
      a.l = rq;
      a.dispatchEvent(up(jq));
      var h = new vc();
      bn(e, HTMLMediaElement.HAVE_METADATA, a.o, function () {
        h.resolve();
      });
      bn(e, HTMLMediaElement.HAVE_CURRENT_DATA, a.o, function () {
        var k;
        return L(function (l) {
          if (1 == l.g)
            return (
              sq(a),
              (k = tq(a)),
              k.find(function (m) {
                return "disabled" != m.mode;
              })
                ? l.A(2)
                : y(
                    l,
                    new Promise(function (m) {
                      a.o.la(e.textTracks, "change", m);
                      new Q(m).X(1);
                    }),
                    2
                  )
            );
          if (f) return l.return();
          uq(a);
          B(l);
        });
      });
      e.error
        ? vq(a).then(function (k) {
            h.reject(k);
          })
        : "none" == a.g.preload &&
          ($a(
            'With <video preload="none">, the browser will not load anything until play() is called. We are unable to measure load latency in a meaningful way, and we cannot provide track info yet. Please do not use preload="none" with Shaka Player.'
          ),
          h.resolve());
      a.o.la(a.g, "error", function () {
        vq(a).then(function (k) {
          h.reject(k);
        });
      });
      g = new Bg(h, function () {
        h.reject(new O(2, 7, 7001));
        return Promise.resolve();
      });
      "video/mp4" !== c.mimeType &&
        g.finally(function (k) {
          var l = Kg(a.h.manifest);
          l.hls.restrictedManifestParsing = !0;
          a.h.manifest = l;
          k &&
            np(a, b, c).then(function () {
              return op(a, b);
            });
        });
      return g;
    }
    function sq(a) {
      var b = a.h.preferredAudioLanguage;
      "" != b && a.ie(b, a.h.preferredVariantRole);
    }
    function uq(a) {
      var b = a.h.preferredTextLanguage;
      "" != b && a.je(b, a.h.preferredTextRole, a.h.preferForcedSubs);
    }
    function qq(a, b) {
      if ("metadata" == b.kind) {
        b.mode = "hidden";
        a.o.G(b, "cuechange", function () {
          if (b.activeCues)
            for (var d = v(b.activeCues), e = d.next(); !e.done; e = d.next())
              if (
                ((e = e.value),
                Kp(a, e.startTime, e.endTime, e.type, e.value),
                a.B)
              )
                a.B.onCueMetadataChange(e.value);
        });
        var c = new Q(function () {
          var d = wq(a);
          d = v(d);
          for (var e = d.next(); !e.done; e = d.next()) e.value.mode = "hidden";
        })
          .Ld()
          .X(0.5);
        a.Xb.push(function () {
          c.stop();
        });
      }
    }
    function Kp(a, b, c, d, e) {
      b = new Map()
        .set("startTime", b)
        .set("endTime", c)
        .set("metadataType", d)
        .set("payload", e);
      a.dispatchEvent(up(xq, b));
    }
    function iq(a, b) {
      if (b && "chapters" == b.kind) {
        b.mode = "hidden";
        var c = new Q(function () {
          b.mode = "hidden";
        })
          .Ld()
          .X(0.5);
        a.Xb.push(function () {
          c.stop();
        });
      }
    }
    function Sp(a) {
      function b(c) {
        return (
          (c.video && c.audio) || (c.video && c.video.codecs.includes(","))
        );
      }
      a.variants.some(b) && (a.variants = a.variants.filter(b));
    }
    function Tp(a, b) {
      return new Ki(
        b,
        a.h.drm.updateExpirationTime,
        a.zd || { mediaKeysInstance: null, activeSessions: null }
      );
    }
    function ip(a) {
      return new Og(
        function (b, c, d) {
          a.s && a.s.segmentDownloaded(b, c, d);
        },
        function (b, c, d) {
          b = new Map()
            .set("headers", b)
            .set("request", c)
            .set("requestType", d);
          a.dispatchEvent(up(yq, b));
        },
        function (b, c, d, e) {
          b = new Map()
            .set("request", b)
            .set("error", c)
            .set("httpResponseCode", d)
            .set("aborted", e);
          a.dispatchEvent(up(zq, b));
        },
        function (b) {
          Qp(a, b);
        },
        function (b, c, d) {
          b = new Map().set("detail", {
            downloadTimeMs: b,
            bytesDownloaded: c,
            latencyMs: d,
          });
          b = up(Aq, b);
          Bq(a, b);
        }
      );
    }
    function dq(a, b) {
      return new mn(
        a.g,
        a.i,
        a.h.streaming,
        b,
        function () {
          a.Db && tn(a.Db, !0);
          if (a.j)
            for (
              var c = a.j, d = c.g.Bc(), e = v(c.h.keys()), f = e.next();
              !f.done;
              f = e.next()
            ) {
              f = f.value;
              var g = c.h.get(f);
              g.ba = null;
              var h = c.g.T;
              h.o
                ? (h = !1)
                : f == sc
                ? ((h = h.h),
                  (h = null == h.g || null == h.h ? !1 : d >= h.g && d < h.h))
                : ((h = Gm(h, f)), (h = nm(h, d, 0)));
              h ||
                ((null != Hm(c.g.T, f) || g.Ma) && Tn(c, g),
                g.oa && (g.oa.abort(), (g.oa = null)),
                f === sc && ((f = c.g.T), f.C && f.C.i()));
            }
          a.O && Cq(a);
        },
        function (c) {
          return a.dispatchEvent(c);
        }
      );
    }
    function eq(a) {
      var b = new zn(a.Fc);
      b.addEventListener("enter", function (d) {
        Lp(a, Dq, d.region);
      });
      b.addEventListener("exit", function (d) {
        Lp(a, Eq, d.region);
      });
      b.addEventListener("skip", function (d) {
        var e = d.region;
        d.seeking || (Lp(a, Dq, e), Lp(a, Eq, e));
      });
      var c = new sn(a.g);
      c.g.add(b);
      a.Aa && c.g.add(a.Aa);
      return c;
    }
    function fq(a, b) {
      a.O = new Yl();
      a.O.g = $l;
      am(a.O, b, Math.min(0.5, b / 2));
      Ip(a);
      a.xc = new Q(function () {
        Cq(a);
      }).Ga(0.25);
    }
    function Cq(a) {
      switch (a.l) {
        case rq:
          if (a.g.ended) var b = !0;
          else {
            var c = mm(a.g.buffered);
            b = null != c && c >= a.g.duration - 1;
          }
          break;
        case hq:
          a: if (a.g.ended || Em(a.N)) b = !0;
          else {
            if (a.i.presentationTimeline.$()) {
              c = a.i.presentationTimeline.nb();
              var d = mm(a.g.buffered);
              if (null != d && d >= c) {
                b = !0;
                break a;
              }
            }
            b = !1;
          }
          break;
        default:
          b = !1;
      }
      d = om(a.g.buffered, a.g.currentTime);
      c = a.O;
      var e = b,
        f = c.h.get(c.g);
      b = c.g;
      d = e || d >= f ? Zl : $l;
      c.g = d;
      b != d && Ip(a);
    }
    function Jp(a, b, c) {
      return new xm(a, b, c);
    }
    function Cp(a) {
      return new ai(
        {
          getBandwidthEstimate: function () {
            return a.s ? a.s.getBandwidthEstimate() : NaN;
          },
          gb: function () {
            return a.gb();
          },
          getCurrentTime: function () {
            return a.g ? a.g.currentTime : 0;
          },
          hb: function () {
            return a.hb();
          },
          Ac: function () {
            return a.Ac();
          },
          $: function () {
            return a.$();
          },
        },
        a.h.cmcd
      );
    }
    function gq(a) {
      return new En(a.i, {
        Bc: function () {
          return a.C.m();
        },
        getBandwidthEstimate: function () {
          return a.s.getBandwidthEstimate();
        },
        modifySegmentRequest: function (b, c) {
          bi(a.V, b, c);
        },
        T: a.N,
        Mb: a.H,
        onError: function (b) {
          return Qp(a, b);
        },
        onEvent: function (b) {
          return a.dispatchEvent(b);
        },
        Cf: function () {
          a.F && a.F.update && a.F.update();
        },
        yd: function () {
          a.C && a.C.C();
          Cq(a);
        },
        Af: function (b, c) {
          (c = c.td) && a.Aa && wn(a.Aa, c, b);
        },
      });
    }
    q.configure = function (a, b) {
      2 == arguments.length && "string" == typeof a && (a = Uo(a, b));
      a.manifest &&
        a.manifest.dash &&
        "defaultPresentationDelay" in a.manifest.dash &&
        (Ob(
          "manifest.dash.defaultPresentationDelay configuration",
          "Please Use manifest.defaultPresentationDelay instead."
        ),
        (a.manifest.defaultPresentationDelay =
          a.manifest.dash.defaultPresentationDelay),
        delete a.manifest.dash.defaultPresentationDelay);
      a.streaming &&
        a.streaming.lowLatencyMode &&
        (void 0 == a.streaming.inaccurateManifestTolerance &&
          (a.streaming.inaccurateManifestTolerance = 0),
        void 0 == a.streaming.rebufferingGoal &&
          (a.streaming.rebufferingGoal = 0.01));
      a.abrFactory = void 0;
      Zo(this.h, a, hp(this));
      var c = Zo(
        this.h,
        {
          abr: {
            bandwidthDowngradeTarget: 0.8,
            bandwidthUpgradeTarget: 0.95,
            defaultBandwidthEstimate: 1e6,
            enabled: !0,
            switchInterval: 10,
            useNetworkInformation: !1,
          },
          streaming: {
            bufferBehind: 20,
            bufferingGoal: 180,
            rebufferingGoal: 10,
            retryParameters: {
              timeout: 9e4,
              stallTimeout: 15e3,
              connectionTimeout: 3e4,
            },
          },
        },
        hp(this)
      );
      Fq(this);
      return c;
    };
    function Fq(a) {
      if (a.F) {
        var b = Kg(a.h.manifest);
        a.g && "AUDIO" === a.g.nodeName && (b.disableVideo = !0);
        a.F.configure(b);
      }
      a.u && a.u.configure(a.h.drm);
      if (a.j) {
        a.j.configure(a.h.streaming);
        try {
          Gq(a, a.i);
        } catch (f) {
          Qp(a, f);
        }
        a.s && Vp(a);
        b = a.j.l;
        !b || (b.allowedByApplication && b.allowedByKeySystem) || Wp(a);
      }
      a.H && a.H.Hd(a.h.streaming.forceHTTPS);
      if (
        a.N &&
        (a.N.configure(a.h.mediaSource),
        (b = a.h.textDisplayFactory),
        a.sd != b)
      ) {
        var c = Vb(b),
          d = a.N,
          e = d.s;
        d.s = c;
        e && (c.setTextVisibility(e.isTextVisible()), e.destroy());
        d.h && (d.h.i = c);
        a.sd = b;
        a.j && ((b = a.j), (c = b.h.get(sc)) && On(b, c.stream, !0, 0, !0));
      }
      a.s &&
        (a.s.configure(a.h.abr, a),
        a.h.abr.enabled ? a.s.enable() : a.s.disable(),
        oq(a));
      a.O &&
        ((b = a.h.streaming.rebufferingGoal),
        a.i && (b = Math.max(b, a.i.minBufferTime)),
        am(a.O, b, Math.min(0.5, b / 2)));
      a.i && bq(a.i.presentationTimeline, a.h.playRangeStart, a.h.playRangeEnd);
    }
    q.getConfiguration = function () {
      var a = hp(this);
      Zo(a, this.h, hp(this));
      return a;
    };
    q.Qe = function () {
      if (this.g) {
        var a = this.g.buffered.length;
        a = a ? this.g.buffered.end(a - 1) : 0;
        var b = this.getConfiguration().streaming.bufferingGoal;
        b = Math.min(this.g.currentTime + b, this.mc().end);
        if (a >= b) return 1;
        if (!(a <= this.g.currentTime) && a < b)
          return (a - this.g.currentTime) / (b - this.g.currentTime);
      }
      return 0;
    };
    q.Mf = function () {
      for (var a in this.h) delete this.h[a];
      Zo(this.h, hp(this), hp(this));
      Fq(this);
    };
    q.Xe = function () {
      return this.l;
    };
    q.af = function () {
      return this.g;
    };
    q.hd = function () {
      return this.u ? this.u.hd() : null;
    };
    q.Hf = function (a, b) {
      this.l == gp && (this.zd = { mediaKeysInstance: a, activeSessions: b });
    };
    q.bf = function () {
      return this.H;
    };
    q.Ne = function () {
      return this.Ub;
    };
    q.Me = function () {
      return this.B ? this.B : null;
    };
    q.$ = function () {
      return this.i && !this.M
        ? this.i.presentationTimeline.$()
        : this.g && this.g.src
        ? Infinity == this.g.duration
        : !1;
    };
    q.Jb = function () {
      return this.i ? this.i.presentationTimeline.Jb() : !1;
    };
    q.rf = function () {
      if (this.i && !this.M) {
        var a = this.i.variants;
        return a.length ? !a[0].video : !1;
      }
      return this.g && this.g.src
        ? this.g.videoTracks
          ? 0 == this.g.videoTracks.length
          : 0 == this.g.videoHeight
        : !1;
    };
    q.mc = function () {
      if (this.i && !this.M) {
        var a = this.i.presentationTimeline;
        return { start: a.Hb(), end: a.Wa() };
      }
      return this.g && this.g.src && ((a = this.g.seekable), a.length)
        ? { start: a.start(0), end: a.end(a.length - 1) }
        : { start: 0, end: 0 };
    };
    q.pf = function () {
      this.$() && (this.g.currentTime = this.mc().end);
    };
    q.keySystem = function () {
      var a = this.drmInfo();
      return a ? a.keySystem : "";
    };
    q.drmInfo = function () {
      return this.u ? this.u.g : null;
    };
    q.gd = function () {
      return this.u ? this.u.gd() : Infinity;
    };
    q.zc = function () {
      return this.u ? this.u.zc() : {};
    };
    q.$d = function () {
      return this.O ? this.O.g == $l : !1;
    };
    q.Ac = function () {
      return this.g ? (this.J ? this.J.i : 1) : 0;
    };
    q.Uf = function (a) {
      0 == a
        ? $a("A trick play rate of 0 is unsupported!")
        : (this.g.paused && this.g.play(),
          this.J.set(a),
          this.l == hq &&
            (this.s.playbackRateChanged(a), Nn(this.j, 1 < Math.abs(a))));
    };
    q.Fe = function () {
      var a = this.J.yc();
      this.l == rq && this.J.set(a);
      this.l == hq &&
        (this.J.set(a), this.s.playbackRateChanged(a), Nn(this.j, !1));
    };
    q.hb = function () {
      if (this.i && !this.M) {
        for (
          var a = this.j ? this.j.l : null,
            b = [],
            c = v(this.i.variants),
            d = c.next();
          !d.done;
          d = c.next()
        )
          if (((d = d.value), le(d))) {
            var e = ee(d);
            e.active = d == a;
            if (!e.active && null != a) {
              var f = (d.video && d.video.id) === (a.video && a.video.id);
              e.active =
                (d.audio && d.audio.id) === (a.audio && a.audio.id) && f;
            }
            b.push(e);
          }
        return b;
      }
      return this.g && this.g.audioTracks
        ? Array.from(this.g.audioTracks).map(function (g) {
            return ke(g);
          })
        : [];
    };
    q.ob = function () {
      if (this.i && !this.M) {
        for (
          var a = this.j ? this.j.o : null,
            b = [],
            c = v(this.i.textStreams),
            d = c.next();
          !d.done;
          d = c.next()
        ) {
          d = d.value;
          var e = fe(d);
          e.active = d == a;
          b.push(e);
        }
        return b;
      }
      return this.g && this.g.src && this.g.textTracks
        ? tq(this).map(function (f) {
            return ie(f);
          })
        : [];
    };
    q.Ve = function () {
      return this.i
        ? this.i.imageStreams.map(function (a) {
            var b = a.width || null,
              c = a.height || null,
              d = null;
            a.segmentIndex && (d = a.segmentIndex.get(0));
            var e = a.tilesLayout;
            d && (e = d.tilesLayout || e);
            e && null != b && (b /= Number(e.split("x")[0]));
            e && null != c && (c /= Number(e.split("x")[1]));
            return {
              id: a.id,
              active: !1,
              type: "image",
              bandwidth: a.bandwidth || 0,
              language: "",
              label: null,
              kind: null,
              width: b,
              height: c,
              frameRate: null,
              pixelAspectRatio: null,
              hdr: null,
              mimeType: a.mimeType,
              codecs: null,
              audioCodec: null,
              videoCodec: null,
              primary: !1,
              roles: [],
              audioRoles: null,
              forced: !1,
              videoId: null,
              audioId: null,
              channelsCount: null,
              audioSamplingRate: null,
              spatialAudio: !1,
              tilesLayout: e || null,
              audioBandwidth: null,
              videoBandwidth: null,
              originalVideoId: null,
              originalAudioId: null,
              originalTextId: null,
              originalImageId: a.originalId,
              originalLanguage: null,
            };
          })
        : [];
    };
    q.lf = function (a, b) {
      var c = this,
        d,
        e,
        f,
        g,
        h,
        k,
        l,
        m,
        p,
        n,
        r,
        u,
        t,
        w,
        x,
        C,
        z,
        A;
      return L(function (H) {
        if (1 == H.g)
          return c.i
            ? (d = c.i.imageStreams.find(function (G) {
                return G.id == a;
              }))
              ? d.segmentIndex
                ? H.A(3)
                : y(H, d.createSegmentIndex(), 3)
              : H.return(null)
            : H.A(2);
        if (2 != H.g) {
          e = d.segmentIndex.find(b);
          if (null == e) return H.return(null);
          f = d.segmentIndex.get(e);
          g = f.tilesLayout || d.tilesLayout;
          h = /(\d+)x(\d+)/.exec(g);
          if (!h) return H.return(null);
          k = d.width || 0;
          l = d.height || 0;
          m = parseInt(h[1], 10);
          p = parseInt(h[2], 10);
          n = k / m;
          r = l / p;
          u = m * p;
          t = f.l - f.startTime;
          w = f.i || t / u;
          x = f.startTime;
          z = C = 0;
          1 < u &&
            ((A = Math.floor((b - f.startTime) / w)),
            (x = f.startTime + A * w),
            (C = (A % m) * n),
            (z = Math.floor(A / m) * r));
          return H.return({
            imageHeight: l,
            imageWidth: k,
            height: r,
            positionX: C,
            positionY: z,
            startTime: x,
            duration: w,
            uris: f.Ea(),
            width: n,
          });
        }
        return H.return(null);
      });
    };
    q.ke = function (a) {
      if (this.i && this.j && !this.M) {
        !this.i.textStreams.length && this.ve && (this.i.textStreams = this.ve);
        var b = this.i.textStreams.find(function (d) {
          return d.id == a.id;
        });
        b &&
          b != this.j.o &&
          (ep(this.m.h, b, !1),
          Qn(this.j, b),
          Hq(this),
          (this.Ta = b.language));
      } else if (this.g && this.g.src && this.g.textTracks) {
        b = tq(this);
        b = v(b);
        for (var c = b.next(); !c.done; c = b.next())
          (c = c.value),
            ge(c) == a.id
              ? (c.mode = this.za ? "showing" : "hidden")
              : (c.mode = "disabled");
        Hq(this);
      }
    };
    q.le = function (a, b, c) {
      if (this.i && this.j && !this.M) {
        this.h.abr.enabled &&
          $a(
            "Changing tracks while abr manager is enabled will likely result in the selected track being overriden. Consider disabling abr before calling selectVariantTrack()."
          );
        var d = this.i.variants.find(function (e) {
          return e.id == a.id;
        });
        d &&
          cq(this, d, !1, b || !1, c || 0) &&
          ((this.Sa = new Rl(d)), Vp(this));
      } else if (this.g && this.g.audioTracks)
        for (
          b = Array.from(this.g.audioTracks), b = v(b), c = b.next();
          !c.done;
          c = b.next()
        )
          if (((c = c.value), ge(c) == a.id)) {
            Iq(this, c);
            break;
          }
    };
    q.kf = function () {
      return Kg(this.i.thumbnailVariants || []);
    };
    q.Nf = function (a) {
      var b = this,
        c,
        d;
      return L(function (e) {
        if (1 == e.g)
          return b.i
            ? (c = b.i.thumbnailVariants.find(function (f) {
                return f.id == a.id;
              }))
              ? c == b.se
                ? e.return(b.qe)
                : y(e, b.F.getThumbnailStream(c), 3)
              : e.return(null)
            : e.A(2);
        if (2 != e.g) {
          if ((d = e.h)) (b.se = c), (b.qe = d);
          return e.return(d);
        }
        return e.return(null);
      });
    };
    q.Pe = function () {
      return Jq(this.hb());
    };
    q.jf = function () {
      return Jq(this.ob());
    };
    q.Oe = function () {
      return Array.from(Kq(this.hb()));
    };
    q.hf = function () {
      return Array.from(Kq(this.ob()));
    };
    q.ie = function (a, b, c, d, e) {
      c = void 0 === c ? 0 : c;
      d = void 0 === d ? "" : d;
      e = void 0 === e ? 0 : e;
      if (this.i && this.C && !this.M) {
        this.Sa = new Sl(a, b || "", c, "", [d]);
        a = function (g, h) {
          return g.video || h.video
            ? g.video && h.video
              ? Math.abs((g.video.height || 0) - (h.video.height || 0)) +
                Math.abs((g.video.width || 0) - (h.video.width || 0))
              : Infinity
            : 0;
        };
        b = this.j.l;
        d = this.Sa.create(this.i.variants, Ep(this));
        c = null;
        d = v(d.values());
        for (var f = d.next(); !f.done; f = d.next())
          if (((f = f.value), !c || a(c, b) > a(f, b))) c = f;
        c ? cq(this, c, !1, !0, e) && Vp(this) : Wp(this);
      } else
        this.g &&
          this.g.audioTracks &&
          (e = me(this.hb(), a, b || "", !1)[0]) &&
          this.le(e);
    };
    q.je = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      if (this.i && this.C && !this.M) {
        if (
          ((this.Ta = a),
          (this.$b = b || ""),
          (this.Yb = c),
          (a = me(this.i.textStreams, this.Ta, this.$b, this.Yb)[0] || null) &&
            a != this.j.o &&
            (ep(this.m.h, a, !1),
            this.h.streaming.alwaysStreamText || this.kd()))
        )
          Qn(this.j, a), Hq(this);
      } else (a = me(this.ob(), a, b || "", c)[0]) && this.ke(a);
    };
    q.Of = function (a) {
      if (this.i && this.C && !this.M) {
        for (
          var b = null, c = v(this.i.variants), d = c.next();
          !d.done;
          d = c.next()
        )
          if (((d = d.value), d.audio.label == a)) {
            b = d;
            break;
          }
        null != b &&
          ((this.Sa = new Sl(
            b.language,
            "",
            this.h.preferredAudioChannelCount,
            a,
            this.h.preferredAudioCodecs
          )),
          Wp(this));
      }
    };
    q.kd = function () {
      var a = this.za;
      return this.N
        ? this.N.s.isTextVisible()
        : this.g && this.g.src && this.g.textTracks
        ? tq(this).some(function (b) {
            return "showing" == b.mode;
          })
        : a;
    };
    q.Xd = function () {
      return this.g && this.g.src && this.g.textTracks
        ? Lq(this).map(function (a) {
            return ie(a);
          })
        : [];
    };
    q.Se = function (a) {
      var b = R(a),
        c = Lq(this).filter(function (f) {
          return R(f.language) == b;
        });
      if (!c || !c.length) return [];
      a = [];
      c = v(c);
      for (var d = c.next(); !d.done; d = c.next())
        if ((d = d.value) && d.cues) {
          d = v(d.cues);
          for (var e = d.next(); !e.done; e = d.next())
            (e = e.value),
              a.push({
                title: e.text,
                startTime: e.startTime,
                endTime: e.endTime,
              });
        }
      return a;
    };
    function tq(a) {
      return Array.from(a.g.textTracks).filter(function (b) {
        return (
          "metadata" != b.kind &&
          "chapters" != b.kind &&
          "Shaka Player TextTrack" != b.label
        );
      });
    }
    function wq(a) {
      return Array.from(a.g.textTracks).filter(function (b) {
        return "metadata" == b.kind;
      });
    }
    function Lq(a) {
      return Array.from(a.g.textTracks).filter(function (b) {
        return "chapters" == b.kind;
      });
    }
    q.Rf = function (a) {
      a = !!a;
      if (this.za != a) {
        this.za = a;
        if (this.l == hq)
          this.N.s.setTextVisibility(a),
            this.h.streaming.alwaysStreamText ||
              (a
                ? this.j.o ||
                  ((a = me(this.i.textStreams, this.Ta, this.$b, this.Yb)),
                  0 < a.length && (Qn(this.j, a[0]), Hq(this)))
                : Mn(this.j));
        else if (this.g && this.g.src && this.g.textTracks) {
          var b = tq(this);
          b = v(b);
          for (var c = b.next(); !c.done; c = b.next())
            (c = c.value),
              "disabled" != c.mode && (c.mode = a ? "showing" : "hidden");
        }
        nq(this);
      }
    };
    q.ff = function () {
      if (!this.$()) return null;
      var a = this.Ba.l,
        b = 0;
      if (this.C) b = this.C.m();
      else if (a) {
        if (null == a.startTime) return new Date();
        b = a.startTime;
      }
      return this.i && !this.M
        ? new Date(1e3 * (this.i.presentationTimeline.i + b))
        : this.g && this.g.getStartDate
        ? ((a = this.g.getStartDate()),
          isNaN(a.getTime()) ? null : new Date(a.getTime() + 1e3 * b))
        : null;
    };
    q.ef = function () {
      if (!this.$()) return null;
      if (this.i && !this.M)
        return new Date(1e3 * this.i.presentationTimeline.H);
      if (this.g && this.g.getStartDate) {
        var a = this.g.getStartDate();
        return isNaN(a.getTime()) ? null : a;
      }
      return null;
    };
    q.Yd = function () {
      if (!this.$()) return null;
      if (this.i && !this.M)
        return new Date(1e3 * this.i.presentationTimeline.i);
      if (this.g && this.g.getStartDate) {
        var a = this.g.getStartDate();
        return isNaN(a.getTime()) ? null : a;
      }
      return null;
    };
    q.gb = function () {
      if (this.l == hq) return this.N.gb();
      var a = { total: [], audio: [], video: [], text: [] };
      this.l == rq && (a.total = pm(this.g.buffered));
      return a;
    };
    q.getStats = function () {
      if (this.l != hq && this.l != rq)
        return {
          width: NaN,
          height: NaN,
          streamBandwidth: NaN,
          decodedFrames: NaN,
          droppedFrames: NaN,
          corruptedFrames: NaN,
          estimatedBandwidth: NaN,
          completionPercent: NaN,
          nonFatalErrorCount: NaN,
          loadLatency: NaN,
          manifestTimeSeconds: NaN,
          manifestDownloadTimeSeconds: NaN,
          manifestParseTimeSeconds: NaN,
          manifestSizeBytes: NaN,
          manifestPeriodCount: NaN,
          manifestGapCount: NaN,
          drmTimeSeconds: NaN,
          playTime: NaN,
          pauseTime: NaN,
          bufferingTime: NaN,
          licenseTime: NaN,
          liveLatency: NaN,
          maxSegmentDuration: NaN,
          switchHistory: [],
          stateHistory: [],
        };
      $p(this);
      var a = this.g,
        b = a.currentTime / a.duration;
      if (!isNaN(b)) {
        var c = this.m;
        b = Math.round(100 * b);
        c.i = isNaN(c.i) ? b : Math.max(c.i, b);
      }
      if (a.getVideoPlaybackQuality) {
        c = a.getVideoPlaybackQuality();
        b = this.m;
        var d = Number(c.totalVideoFrames);
        b.da = Number(c.droppedVideoFrames);
        b.ca = d;
        this.m.Y = Number(c.corruptedVideoFrames);
      }
      this.u ? ((c = this.u), (c = c.H ? c.H : NaN)) : (c = NaN);
      this.m.s = c;
      if (this.l == hq) {
        if ((c = this.j.l)) this.m.B = (this.J ? this.J.i : 1) * c.bandwidth;
        c &&
          c.video &&
          ((b = this.m),
          (d = c.video.height || NaN),
          (b.o = c.video.width || NaN),
          (b.l = d));
        this.$() &&
          ((c = this.Yd().valueOf() + 1e3 * this.mc().end),
          (this.m.C = (Date.now() - c) / 1e3));
        this.i &&
          this.i.presentationTimeline &&
          !this.M &&
          (this.m.S = this.i.presentationTimeline.g);
        c = this.s.getBandwidthEstimate();
        this.m.u = c;
        this.i &&
          ((this.m.N = this.i.sizeBytes),
          (this.m.M = this.i.periodCount),
          (this.m.H = this.i.gapCount),
          (this.m.O = this.i.manifestTimeSeconds),
          (this.m.F = this.i.manifestDownloadTimeSeconds),
          (this.m.J = this.i.manifestParseTimeSeconds));
      }
      this.l == rq &&
        ((c = this.m),
        (b = a.videoHeight || NaN),
        (c.o = a.videoWidth || NaN),
        (c.l = b));
      var e = this.m;
      a = e.o;
      c = e.l;
      b = e.B;
      d = e.ca;
      var f = e.da,
        g = e.Y,
        h = e.u,
        k = e.i,
        l = e.V,
        m = e.m,
        p = e.O,
        n = e.F,
        r = e.J,
        u = e.N,
        t = e.M,
        w = e.H,
        x = e.j,
        C = bp(e.g, "playing"),
        z = bp(e.g, "paused"),
        A = bp(e.g, "buffering"),
        H = e.s,
        G = e.C,
        D = e.S,
        I = cp(e.g),
        J = [];
      e = v(e.h.g);
      for (var K = e.next(); !K.done; K = e.next())
        (K = K.value),
          J.push({
            timestamp: K.timestamp,
            id: K.id,
            type: K.type,
            fromAdaptation: K.fromAdaptation,
            bandwidth: K.bandwidth,
          });
      return {
        width: a,
        height: c,
        streamBandwidth: b,
        decodedFrames: d,
        droppedFrames: f,
        corruptedFrames: g,
        estimatedBandwidth: h,
        completionPercent: k,
        nonFatalErrorCount: l,
        loadLatency: m,
        manifestTimeSeconds: p,
        manifestDownloadTimeSeconds: n,
        manifestParseTimeSeconds: r,
        manifestSizeBytes: u,
        manifestPeriodCount: t,
        manifestGapCount: w,
        drmTimeSeconds: x,
        playTime: C,
        pauseTime: z,
        bufferingTime: A,
        licenseTime: H,
        liveLatency: G,
        maxSegmentDuration: D,
        stateHistory: I,
        switchHistory: J,
      };
    };
    q.addTextTrack = function (a, b, c, d, e, f, g) {
      g = void 0 === g ? !1 : g;
      Ob("addTextTrack", "Please use an addTextTrackAsync.");
      if (this.l != hq && this.l != rq) throw new O(1, 7, 7004);
      if (!d) {
        var h = Yh(a);
        d = Mq[h];
        if (!d) throw new O(1, 2, 2011, h);
      }
      if (this.l == rq) {
        if ("text/vtt" != d) throw new O(1, 2, 2013, d);
        g && (c = "forced");
        d = document.createElement("track");
        d.src = ri(this.V, a);
        d.label = f || "";
        d.kind = c;
        d.srclang = b;
        this.g.getAttribute("crossorigin") ||
          this.g.setAttribute("crossorigin", "anonymous");
        this.g.appendChild(d);
        if (
          (a = this.ob().find(function (k) {
            return k.language == b && k.label == (f || "") && k.kind == c;
          }))
        )
          return Xp(this), a;
        throw new O(1, 2, 2012);
      }
      h = this.i.presentationTimeline.getDuration();
      if (Infinity == h) throw new O(1, 4, 4033);
      a = {
        id: this.Bd++,
        originalId: null,
        createSegmentIndex: function () {
          return Promise.resolve();
        },
        segmentIndex: nh(0, h, [a]),
        mimeType: d || "",
        codecs: e || "",
        kind: c,
        encrypted: !1,
        drmInfos: [],
        keyIds: new Set(),
        language: b,
        originalLanguage: b,
        label: f || null,
        type: sc,
        primary: !1,
        trickModeVideo: null,
        emsgSchemeIdUris: null,
        roles: [],
        forced: !!g,
        channelsCount: null,
        audioSamplingRate: null,
        spatialAudio: !1,
        closedCaptions: null,
      };
      if (!pd(jd(a.mimeType, a.codecs))) throw new O(2, 2, 2014, d);
      this.i.textStreams.push(a);
      Xp(this);
      return fe(a);
    };
    q.Ce = function (a, b, c, d, e, f, g) {
      g = void 0 === g ? !1 : g;
      var h = this,
        k,
        l,
        m,
        p,
        n,
        r,
        u,
        t,
        w,
        x,
        C;
      return L(function (z) {
        switch (z.g) {
          case 1:
            if (h.l != hq && h.l != rq) throw new O(1, 7, 7004);
            if (d) {
              z.A(2);
              break;
            }
            return y(z, Nq(h, a), 3);
          case 3:
            d = z.h;
          case 2:
            k = [];
            if (h.B)
              try {
                k = h.B.getServerSideCuePoints();
              } catch (A) {}
            if (h.l != rq) {
              z.A(4);
              break;
            }
            g && (c = "forced");
            return y(z, Oq(h, a, b, c, d, f || "", k), 5);
          case 5:
            l = h.ob();
            if (
              (m = l.find(function (A) {
                return A.language == b && A.label == (f || "") && A.kind == c;
              }))
            )
              return Xp(h), z.return(m);
            throw new O(1, 2, 2012);
          case 4:
            p = tc;
            n = h.i.presentationTimeline.getDuration();
            if (Infinity == n) throw new O(1, 4, 4033);
            if (!k.length) {
              z.A(6);
              break;
            }
            return y(z, Pq(h, a, h.H, h.h.streaming.retryParameters), 7);
          case 7:
            (r = z.h),
              (u = Qq(h, r, d, k)),
              (t = new Blob([u], { type: "text/vtt" })),
              (a = Am(t)),
              (d = "text/vtt");
          case 6:
            w = {
              id: h.Bd++,
              originalId: null,
              createSegmentIndex: function () {
                return Promise.resolve();
              },
              segmentIndex: nh(0, n, [a]),
              mimeType: d || "",
              codecs: e || "",
              kind: c,
              encrypted: !1,
              drmInfos: [],
              keyIds: new Set(),
              language: b,
              originalLanguage: b,
              label: f || null,
              type: p.ha,
              primary: !1,
              trickModeVideo: null,
              emsgSchemeIdUris: null,
              roles: [],
              forced: !!g,
              channelsCount: null,
              audioSamplingRate: null,
              spatialAudio: !1,
              closedCaptions: null,
            };
            x = jd(w.mimeType, w.codecs);
            C = pd(x);
            if (!C) throw new O(2, 2, 2014, d);
            h.i.textStreams.push(w);
            Xp(h);
            return z.return(fe(w));
        }
      });
    };
    q.Be = function (a, b, c) {
      var d = this,
        e,
        f,
        g,
        h;
      return L(function (k) {
        switch (k.g) {
          case 1:
            if (d.l != hq && d.l != rq) throw new O(1, 7, 7004);
            if (c) {
              k.A(2);
              break;
            }
            return y(k, Nq(d, a), 3);
          case 3:
            c = k.h;
          case 2:
            e = [];
            if (d.B)
              try {
                e = d.B.getServerSideCuePoints();
              } catch (l) {}
            return y(k, Oq(d, a, b, "chapters", c, "", e), 4);
          case 4:
            f = k.h;
            g = d.Xd();
            h = g.find(function (l) {
              return l.language == b;
            });
            if (!h) {
              k.A(5);
              break;
            }
            return y(
              k,
              new Promise(function (l, m) {
                d.o.la(f, "load", l);
                d.o.la(f, "error", function () {
                  m(new O(1, 2, 2015));
                });
              }),
              6
            );
          case 6:
            return k.return(h);
          case 5:
            throw new O(1, 2, 2012);
        }
      });
    };
    function Nq(a, b) {
      var c, d;
      return L(function (e) {
        switch (e.g) {
          case 1:
            c = Yh(b);
            if ((d = Mq[c])) return e.return(d);
            E(e, 2);
            return y(e, $h(b, a.H, a.h.streaming.retryParameters), 4);
          case 4:
            d = e.h;
            wa(e, 3);
            break;
          case 2:
            F(e);
          case 3:
            if (d) return e.return(d);
            throw new O(1, 2, 2011, c);
        }
      });
    }
    function Oq(a, b, c, d, e, f, g) {
      var h, k, l, m;
      return L(function (p) {
        if (1 == p.g)
          return "text/vtt" != e || g.length
            ? y(p, Pq(a, b, a.H, a.h.streaming.retryParameters), 3)
            : p.A(2);
        2 != p.g &&
          ((h = p.h),
          (k = Qq(a, h, e, g)),
          (l = new Blob([k], { type: "text/vtt" })),
          (b = Am(l)),
          (e = "text/vtt"));
        m = document.createElement("track");
        m.src = ri(a.V, b);
        m.label = f;
        m.kind = d;
        m.srclang = c;
        a.g.getAttribute("crossorigin") ||
          a.g.setAttribute("crossorigin", "anonymous");
        a.g.appendChild(m);
        return p.return(m);
      });
    }
    function Pq(a, b, c, d) {
      var e, f, g;
      return L(function (h) {
        if (1 == h.g) {
          e = $g;
          f = Sg([b], d);
          f.method = "GET";
          var k = a.V;
          try {
            k.g.enabled && li(k, f, { ot: si, su: !0 });
          } catch (l) {
            ab("CMCD_TEXT_ERROR", "Could not generate text CMCD data.", l);
          }
          return y(h, c.request(e, f).promise, 2);
        }
        g = h.h;
        return h.return(g.data);
      });
    }
    function Qq(a, b, c, d) {
      var e = qd[c];
      if (e)
        return (
          (c = e()),
          (a = { periodStart: 0, segmentStart: 0, segmentEnd: a.g.duration }),
          (b = N(b)),
          (b = c.parseMedia(b, a)),
          Ro(b, d)
        );
      throw new O(2, 2, 2014, c);
    }
    q.Qf = function (a, b) {
      this.xd.width = a;
      this.xd.height = b;
    };
    q.Ed = function () {
      if (this.l == hq) {
        var a = this.j;
        if (a.j.g) a = !1;
        else if (a.s) a = !1;
        else {
          for (var b = v(a.h.values()), c = b.next(); !c.done; c = b.next())
            (c = c.value), c.ec && ((c.ec = !1), Ln(a, c, 0.1));
          a = !0;
        }
      } else a = !1;
      return a;
    };
    q.Ye = function () {
      $a(
        "Shaka Player's internal Manifest structure is NOT covered by semantic versioning compatibility guarantees.  It may change at any time!  Please consider filing a feature request for whatever you use getManifest() for."
      );
      return this.i;
    };
    q.Ze = function () {
      return this.Ec;
    };
    function hp(a) {
      var b = Xo();
      b.streaming.failureCallback = function (c) {
        var d = [1001, 1002, 1003];
        a.$() && d.includes(c.code) && ((c.severity = 1), a.Ed());
      };
      b.textDisplayFactory = function () {
        return a.wc ? new Ko(a.g, a.wc) : new Fo(a.g);
      };
      return b;
    }
    q.Sf = function (a) {
      this.wc = a;
    };
    function Pp(a, b) {
      for (
        var c = new Set(), d = v(b.textStreams), e = d.next();
        !e.done;
        e = d.next()
      )
        (e = e.value),
          ("application/cea-608" != e.mimeType &&
            "application/cea-708" != e.mimeType) ||
            c.add(e.originalId);
      d = v(b.variants);
      for (e = d.next(); !e.done; e = d.next())
        if ((e = e.value.video) && e.closedCaptions)
          for (
            var f = v(e.closedCaptions.keys()), g = f.next();
            !g.done;
            g = f.next()
          )
            if (((g = g.value), !c.has(g))) {
              var h = g.startsWith("CC")
                  ? "application/cea-608"
                  : "application/cea-708",
                k = new oh(),
                l = e.closedCaptions.get(g);
              h = {
                id: a.Bd++,
                originalId: g,
                createSegmentIndex: function () {
                  return Promise.resolve();
                },
                segmentIndex: k,
                mimeType: h,
                codecs: "",
                kind: "caption",
                encrypted: !1,
                drmInfos: [],
                keyIds: new Set(),
                language: l,
                originalLanguage: l,
                label: null,
                type: sc,
                primary: !1,
                trickModeVideo: null,
                emsgSchemeIdUris: null,
                roles: e.roles,
                forced: !1,
                channelsCount: null,
                audioSamplingRate: null,
                spatialAudio: !1,
                closedCaptions: null,
              };
              b.textStreams.push(h);
              c.add(g);
            }
    }
    function Op(a, b) {
      return L(function (c) {
        if (1 == c.g) return y(c, Rq(a, b), 2);
        Gq(a, b);
        B(c);
      });
    }
    function Rq(a, b) {
      var c;
      return L(function (d) {
        if (1 == d.g)
          return (
            (c = a.j ? a.j.l : null),
            y(d, Ud(c, b, a.h.mediaSource.codecSwitchingStrategy), 2)
          );
        pq(b);
        B(d);
      });
    }
    function Gq(a, b) {
      if (a.l != xp) {
        for (
          var c = a.h.restrictions,
            d = a.xd,
            e = !1,
            f = v(b.variants),
            g = f.next();
          !g.done;
          g = f.next()
        ) {
          g = g.value;
          var h = g.allowedByApplication;
          g.allowedByApplication = Td(g, c, d);
          h != g.allowedByApplication && (e = !0);
        }
        e && a.j && Xp(a);
        if ((c = a.u ? a.u.g : null) && a.u.s)
          for (d = v(b.variants), e = d.next(); !e.done; e = d.next())
            for (
              e = e.value,
                e = v(
                  (e.video ? e.video.drmInfos : []).concat(
                    e.audio ? e.audio.drmInfos : []
                  )
                ),
                f = e.next();
              !f.done;
              f = e.next()
            )
              if (((f = f.value), f.keySystem == c.keySystem))
                for (
                  f = v(f.initData || []), g = f.next();
                  !g.done;
                  g = f.next()
                )
                  (g = g.value), Zi(a.u, g.initDataType, g.initData);
        Sq(a, b);
      }
    }
    function kq(a, b) {
      var c, d, e, f, g;
      return L(function (h) {
        if (1 == h.g)
          return (
            (c = a.audio),
            (d = a.video),
            (e = function (k, l) {
              var m, p, n;
              return L(function (r) {
                if (1 == r.g)
                  return k ? y(r, k.createSegmentIndex(), 2) : r.return(null);
                p = (m = k.segmentIndex.Va(l)) ? m.next().value : null;
                if (!p) return r.return(null);
                n = p.startTime;
                return r.return(n);
              });
            }),
            y(h, e(c, b), 2)
          );
        if (3 != h.g) return (f = h.h), y(h, e(d, b), 3);
        g = h.h;
        return null != g && null != f
          ? h.return(Math.max(g, f))
          : null != g
          ? h.return(g)
          : null != f
          ? h.return(f)
          : h.return(b);
      });
    }
    function Ip(a) {
      var b = a.$d();
      if (a.m && a.O && a.C) {
        var c = a.J;
        c.j = b;
        an(c);
        a.V &&
          ((c = a.V),
          b || c.i || (c.i = !0),
          c.i && b && (c.l = !0),
          (c.m = b));
        $p(a);
      }
      b = new Map().set("buffering", b);
      a.dispatchEvent(up(Tq, b));
    }
    function aq(a) {
      var b = a.g.playbackRate;
      0 != b && (a.J && a.J.set(b), (b = up(Uq)), a.dispatchEvent(b));
    }
    function $p(a) {
      if (a.m && a.O) {
        var b = a.m.g;
        a.O.g == $l
          ? ap(b, "buffering")
          : a.g.paused
          ? ap(b, "paused")
          : a.g.ended
          ? ap(b, "ended")
          : ap(b, "playing");
      }
    }
    function Vp(a) {
      try {
        Sq(a, a.i);
      } catch (c) {
        return Qp(a, c), !1;
      }
      var b = a.i.variants.filter(function (c) {
        return le(c);
      });
      b = a.Sa.create(b, Ep(a));
      a.s.setVariants(Array.from(b.values()));
      return !0;
    }
    function Wp(a) {
      var b;
      (b = Vp(a) ? a.s.chooseVariant() : null) && cq(a, b, !0, !0, 0);
    }
    function cq(a, b, c, d, e) {
      if (!le(b)) return !1;
      var f = a.j.l;
      if (b == f) return d ? (Pn(a.j, b, d, e, !0), !0) : !1;
      var g = a.m.h;
      g.h != b &&
        ((g.h = b),
        g.g.push({
          timestamp: Date.now() / 1e3,
          id: b.id,
          type: "variant",
          fromAdaptation: c,
          bandwidth: b.bandwidth,
        }));
      Pn(a.j, b, d, e);
      d = null;
      f && (d = ee(f));
      b = ee(b);
      c ? lq(a, d, b) : Vq(a, d, b);
      return !0;
    }
    function Iq(a, b) {
      var c = Array.from(a.g.audioTracks).find(function (d) {
        return d.enabled;
      });
      b.enabled = !0;
      b.id !== c.id && (c.enabled = !1);
      c = ke(c);
      b = ke(b);
      Vq(a, c, b);
    }
    function mq(a, b, c) {
      var d = R(a.h.preferredTextLanguage);
      b = R(b.language);
      c = R(c.language);
      a = a.h.forceInitialTextLanguage || !yd(b, c);
      return yd(c, d) && a;
    }
    function lq(a, b, c) {
      b = new Map().set("oldTrack", b).set("newTrack", c);
      b = up(Wq, b);
      Bq(a, b);
    }
    function Xp(a) {
      var b = up(Xq);
      Bq(a, b);
    }
    function Vq(a, b, c) {
      b = new Map().set("oldTrack", b).set("newTrack", c);
      b = up(Yq, b);
      Bq(a, b);
    }
    function Hq(a) {
      var b = up(Zq);
      Bq(a, b);
    }
    function nq(a) {
      var b = up($q);
      Bq(a, b);
    }
    function oq(a) {
      var b = new Map().set("newStatus", a.h.abr.enabled);
      Bq(a, up(ar, b));
    }
    function Qp(a, b) {
      if (a.l != xp) {
        1 === b.severity && a.m.V++;
        var c = up(br, new Map().set("detail", b));
        a.dispatchEvent(c);
        c.defaultPrevented && (b.handled = !0);
      }
    }
    function Lp(a, b, c) {
      c = new Map().set("detail", {
        schemeIdUri: c.schemeIdUri,
        value: c.value,
        startTime: c.startTime,
        endTime: c.endTime,
        id: c.id,
        eventElement: c.eventElement,
      });
      a.dispatchEvent(up(b, c));
    }
    function Up(a) {
      return [].concat(ka(cr), ka(a.h.drm.additionalRestrictedStatuses));
    }
    function vq(a) {
      var b, c, d, e, f;
      return L(function (g) {
        if (1 == g.g) {
          if (!a.g.error) return g.return(null);
          b = a.g.error.code;
          if (1 == b) return g.return(null);
          if ((c = a.g.error.msExtendedCode))
            0 > c && (c += Math.pow(2, 32)), (c = c.toString(16));
          d = a.g.error.message;
          return a.h.streaming.additionalHdcpCheck &&
            "PIPELINE_ERROR_DECODE" === d &&
            a.g.mediaKeys &&
            a.g.mediaKeys.getStatusForPolicy
            ? y(g, a.g.mediaKeys.getStatusForPolicy({ ig: "1.0" }), 3)
            : g.A(2);
        }
        return 2 != g.g && ((e = g.h), (f = Up(a)), f.includes(e))
          ? g.return(new O(2, 4, 4012, { restrictedKeyStatuses: [e] }))
          : g.return(new O(2, 3, 3016, b, c, d));
      });
    }
    function Gp(a) {
      vq(a).then(function (b) {
        b && Qp(a, b);
      });
    }
    function bq(a, b, c) {
      0 < b && (a.$() || a.pe(b));
      b = a.getDuration();
      c < b && (a.$() || a.Pa(c));
    }
    function Sq(a, b) {
      var c = Up(a);
      a = a.u ? a.u.zc() : {};
      var d = Object.keys(a);
      d = d.length && "00" == d[0];
      var e = !1,
        f = !1,
        g = new Set(),
        h = new Set();
      b = v(b.variants);
      for (var k = b.next(); !k.done; k = b.next()) {
        k = k.value;
        var l = [];
        k.audio && l.push(k.audio);
        k.video && l.push(k.video);
        l = v(l);
        for (var m = l.next(); !m.done; m = l.next())
          if (((m = m.value), m.keyIds.size)) {
            m = v(m.keyIds);
            for (var p = m.next(); !p.done; p = m.next()) {
              p = p.value;
              var n = a[d ? "00" : p];
              n ? c.includes(n) && h.add(n) : g.add(p);
            }
          }
        k.allowedByApplication ? k.allowedByKeySystem && (e = !0) : (f = !0);
      }
      if (!e)
        throw (
          ((c = {
            hasAppRestrictions: f,
            missingKeys: Array.from(g),
            restrictedKeyStatuses: Array.from(h),
          }),
          new O(2, 4, 4012, c))
        );
    }
    function pq(a) {
      if (!a.variants.some(le)) throw new O(2, 4, 4032);
    }
    function Bq(a, b) {
      L(function (c) {
        if (1 == c.g) return y(c, Promise.resolve(), 2);
        a.l != xp && a.dispatchEvent(b);
        B(c);
      });
    }
    function Kq(a) {
      var b = new Set();
      a = v(a);
      for (var c = a.next(); !c.done; c = a.next())
        (c = c.value), c.language ? b.add(R(c.language)) : b.add("und");
      return b;
    }
    function Jq(a) {
      var b = new Map(),
        c = new Map();
      a = v(a);
      for (var d = a.next(); !d.done; d = a.next()) {
        d = d.value;
        var e = "und",
          f = [];
        d.language && (e = R(d.language));
        "variant" == d.type ? (f = d.audioRoles) : (f = d.roles);
        (f && f.length) || (f = [""]);
        b.has(e) || b.set(e, new Set());
        f = v(f);
        for (var g = f.next(); !g.done; g = f.next())
          (g = g.value),
            b.get(e).add(g),
            d.label &&
              (c.has(e) || c.set(e, new Map()), c.get(e).set(g, d.label));
      }
      var h = [];
      b.forEach(function (k, l) {
        k = v(k);
        for (var m = k.next(); !m.done; m = k.next()) {
          m = m.value;
          var p = null;
          c.has(l) && c.get(l).has(m) && (p = c.get(l).get(m));
          h.push({ language: l, role: m, label: p });
        }
      });
      return h;
    }
    function yp() {
      return new O(2, 7, 7e3);
    }
    function tp(a, b, c, d, e, f) {
      return d == a && e.I == f.I && e.uri == f.uri && e.mimeType == f.mimeType
        ? b
        : c;
    }
    function zo() {
      return { I: null, mimeType: null, startTime: null, Kd: NaN, uri: null };
    }
    function zp(a) {
      return new Promise(function (b, c) {
        a.ub = function () {
          return c(yp());
        };
        a.Lc = function () {
          return b();
        };
        a.onError = function (d) {
          return c(d);
        };
        a.Mc = function () {
          return c(yp());
        };
      });
    }
    M("shaka.Player", Z);
    Z.prototype.setVideoContainer = Z.prototype.Sf;
    Z.prototype.getManifestParserFactory = Z.prototype.Ze;
    Z.prototype.getManifest = Z.prototype.Ye;
    Z.prototype.retryStreaming = Z.prototype.Ed;
    Z.prototype.setMaxHardwareResolution = Z.prototype.Qf;
    Z.prototype.addChaptersTrack = Z.prototype.Be;
    Z.prototype.addTextTrackAsync = Z.prototype.Ce;
    Z.prototype.addTextTrack = Z.prototype.addTextTrack;
    Z.prototype.getStats = Z.prototype.getStats;
    Z.prototype.getBufferedInfo = Z.prototype.gb;
    Z.prototype.getPresentationStartTimeAsDate = Z.prototype.Yd;
    Z.prototype.getOriginalPresentationStartTimeAsDate = Z.prototype.ef;
    Z.prototype.getPlayheadTimeAsDate = Z.prototype.ff;
    Z.prototype.setTextTrackVisibility = Z.prototype.Rf;
    Z.prototype.getChapters = Z.prototype.Se;
    Z.prototype.getChaptersTracks = Z.prototype.Xd;
    Z.prototype.isTextTrackVisible = Z.prototype.kd;
    Z.prototype.selectVariantsByLabel = Z.prototype.Of;
    Z.prototype.selectTextLanguage = Z.prototype.je;
    Z.prototype.selectAudioLanguage = Z.prototype.ie;
    Z.prototype.getTextLanguages = Z.prototype.hf;
    Z.prototype.getAudioLanguages = Z.prototype.Oe;
    Z.prototype.getTextLanguagesAndRoles = Z.prototype.jf;
    Z.prototype.getAudioLanguagesAndRoles = Z.prototype.Pe;
    Z.prototype.selectThumbnailVariant = Z.prototype.Nf;
    Z.prototype.getThumbnailVariants = Z.prototype.kf;
    Z.prototype.selectVariantTrack = Z.prototype.le;
    Z.prototype.selectTextTrack = Z.prototype.ke;
    Z.prototype.getThumbnails = Z.prototype.lf;
    Z.prototype.getImageTracks = Z.prototype.Ve;
    Z.prototype.getTextTracks = Z.prototype.ob;
    Z.prototype.getVariantTracks = Z.prototype.hb;
    Z.prototype.cancelTrickPlay = Z.prototype.Fe;
    Z.prototype.trickPlay = Z.prototype.Uf;
    Z.prototype.getPlaybackRate = Z.prototype.Ac;
    Z.prototype.isBuffering = Z.prototype.$d;
    Z.prototype.getKeyStatuses = Z.prototype.zc;
    Z.prototype.getExpiration = Z.prototype.gd;
    Z.prototype.drmInfo = Z.prototype.drmInfo;
    Z.prototype.keySystem = Z.prototype.keySystem;
    Z.prototype.goToLive = Z.prototype.pf;
    Z.prototype.seekRange = Z.prototype.mc;
    Z.prototype.isAudioOnly = Z.prototype.rf;
    Z.prototype.isInProgress = Z.prototype.Jb;
    Z.prototype.isLive = Z.prototype.$;
    Z.prototype.getAdManager = Z.prototype.Me;
    Z.prototype.getAssetUri = Z.prototype.Ne;
    Z.prototype.getNetworkingEngine = Z.prototype.bf;
    Z.prototype.registerMediaKeysData = Z.prototype.Hf;
    Z.prototype.getMediaKeysData = Z.prototype.hd;
    Z.prototype.getMediaElement = Z.prototype.af;
    Z.prototype.getLoadMode = Z.prototype.Xe;
    Z.prototype.resetConfiguration = Z.prototype.Mf;
    Z.prototype.getBufferFullness = Z.prototype.Qe;
    Z.prototype.getConfiguration = Z.prototype.getConfiguration;
    Z.prototype.configure = Z.prototype.configure;
    Z.prototype.load = Z.prototype.load;
    Z.prototype.updateStartTime = Z.prototype.$f;
    Z.prototype.unload = Z.prototype.Vf;
    Z.prototype.detach = Z.prototype.detach;
    Z.prototype.attach = Z.prototype.Fb;
    Z.probeSupport = function (a) {
      a = void 0 === a ? !0 : a;
      var b, c, d, e, f, g;
      return L(function (h) {
        if (1 == h.g) return (b = {}), a ? y(h, mj(), 3) : h.A(2);
        2 != h.g && (b = h.h);
        var k = {};
        if (yc()) {
          for (var l in Xh) k[l] = !0;
          for (var m in Zh) k[m] = !0;
        }
        l = {
          mpd: "application/dash+xml",
          m3u8: "application/x-mpegurl",
          ism: "application/vnd.ms-sstr+xml",
        };
        m = v([
          "application/dash+xml",
          "application/x-mpegurl",
          "application/vnd.apple.mpegurl",
          "application/vnd.ms-sstr+xml",
        ]);
        for (var p = m.next(); !p.done; p = m.next())
          (p = p.value), (k[p] = yc() ? !!Xh[p] : zc(p));
        for (var n in l) k[n] = yc() ? !!Zh[n] : zc(l[n]);
        c = k;
        k = {};
        n = v(
          'video/mp4; codecs="avc1.42E01E",video/mp4; codecs="avc3.42E01E",video/mp4; codecs="hev1.1.6.L93.90",video/mp4; codecs="hvc1.1.6.L93.90",video/mp4; codecs="hev1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="hvc1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="vp9",video/mp4; codecs="vp09.00.10.08",video/mp4; codecs="av01.0.01M.08",audio/mp4; codecs="mp4a.40.2",audio/mp4; codecs="ac-3",audio/mp4; codecs="ec-3",audio/mp4; codecs="opus",audio/mp4; codecs="flac",video/webm; codecs="vp8",video/webm; codecs="vp9",video/webm; codecs="vp09.00.10.08",audio/webm; codecs="vorbis",audio/webm; codecs="opus",video/mp2t; codecs="avc1.42E01E",video/mp2t; codecs="avc3.42E01E",video/mp2t; codecs="hvc1.1.6.L93.90",video/mp2t; codecs="mp4a.40.2",video/mp2t; codecs="ac-3",video/mp2t; codecs="ec-3",text/vtt,application/mp4; codecs="wvtt",application/ttml+xml,application/mp4; codecs="stpp"'.split(
            ","
          )
        );
        for (l = n.next(); !l.done; l = n.next())
          (l = l.value),
            (k[l] = yc() ? (pd(l) ? !0 : ad(l) || fd(l)) : zc(l)),
            (m = l.split(";")[0]),
            (k[m] = k[m] || k[l]);
        d = k;
        e = { manifest: c, media: d, drm: b };
        f = dr;
        for (g in f) e[g] = f[g]();
        return h.return(e);
      });
    };
    Z.isBrowserSupported = function () {
      window.Promise || $a("A Promise implementation or polyfill is required");
      if (
        !(window.Promise && window.Uint8Array && Array.prototype.forEach) ||
        Dc("Trident/")
      )
        return !1;
      var a = Jc();
      return (a && 12 > a) ||
        !(
          window.MediaKeys &&
          window.navigator &&
          window.navigator.requestMediaKeySystemAccess &&
          window.MediaKeySystemAccess &&
          window.MediaKeySystemAccess.prototype.getConfiguration
        )
        ? !1
        : yc()
        ? !0
        : zc("application/x-mpegurl");
    };
    Z.setAdManagerFactory = function (a) {
      jp = a;
    };
    Z.registerSupportPlugin = function (a, b) {
      dr[a] = b;
    };
    Z.prototype.destroy = Z.prototype.destroy;
    var ar = "abrstatuschanged",
      Wq = "adaptation",
      Tq = "buffering",
      zq = "downloadfailed",
      yq = "downloadheadersreceived",
      Zp = "drmsessionupdate",
      fo = "emsg",
      go = "prft",
      br = "error",
      Yp = "expirationupdated",
      Dp = "loaded",
      Ap = "loading",
      Rp = "manifestparsed",
      Np = "mediaqualitychanged",
      xq = "metadata",
      vp = "onstatechange",
      wp = "onstateidle",
      Uq = "ratechange",
      jq = "streaming",
      Zq = "textchanged",
      $q = "texttrackvisibility",
      Mp = "timelineregionadded",
      Dq = "timelineregionenter",
      Eq = "timelineregionexit",
      Xq = "trackschanged",
      Hp = "unloading",
      Yq = "variantchanged",
      Aq = "segmentDownloaded",
      xp = 0,
      gp = 1,
      hq = 2,
      rq = 3;
    Z.LoadMode = {
      DESTROYED: xp,
      NOT_LOADED: gp,
      MEDIA_SOURCE: hq,
      SRC_EQUALS: rq,
    };
    Z.version = "v3.3.10-v34-dirty";
    var er = ["3", "3"];
    Pb = new (function (a) {
      this.g = a;
      this.i = Qb;
      this.h = Rb;
    })(new Nb(Number(er[0]), Number(er[1])));
    var cr = ["output-restricted", "internal-error"],
      dr = {},
      jp = null,
      Fp = {
        mp4: "video/mp4",
        m4v: "video/mp4",
        m4a: "audio/mp4",
        webm: "video/webm",
        weba: "audio/webm",
        mkv: "video/webm",
        ts: "video/mp2t",
        ogv: "video/ogg",
        ogg: "audio/ogg",
        mpg: "video/mpeg",
        mpeg: "video/mpeg",
        m3u8: "application/x-mpegurl",
        mpd: "application/dash+xml",
        mp3: "audio/mpeg",
        aac: "audio/aac",
        flac: "audio/flac",
        wav: "audio/wav",
      },
      Mq = {
        sbv: "text/x-subviewer",
        srt: "text/srt",
        vtt: "text/vtt",
        webvtt: "text/vtt",
        ttml: "application/ttml+xml",
        lrc: "application/x-subtitle-lrc",
        ssa: "text/x-ssa",
        ass: "text/x-ssa",
      };
    function fr() {}
    function gr(a, b) {
      a = { priority: b || 0, De: a };
      for (b = 0; b < hr.length; b++)
        if (hr[b].priority < a.priority) {
          hr.splice(b, 0, a);
          return;
        }
      hr.push(a);
    }
    M("shaka.polyfill", fr);
    fr.register = gr;
    fr.installAll = function () {
      for (var a = v(hr), b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        try {
          b.De();
        } catch (c) {
          $a("Error installing polyfill!", c);
        }
      }
    };
    var hr = [];
    function ir() {}
    function jr() {
      if (!Object.getOwnPropertyDescriptor(Element.prototype, "ariaHidden"))
        for (
          var a = v(["ariaHidden", "ariaLabel", "ariaPressed", "ariaSelected"]),
            b = a.next();
          !b.done;
          b = a.next()
        )
          kr(b.value);
    }
    function kr(a) {
      var b = "aria-" + a.toLowerCase().replace(/^aria/, "");
      Object.defineProperty(Element.prototype, a, {
        get: function () {
          return this.getAttribute(b);
        },
        set: function (c) {
          null == c || void 0 == c
            ? this.removeAttribute(b)
            : this.setAttribute(b, c);
        },
      });
    }
    fr.Aria = ir;
    ir.install = jr;
    gr(jr);
    function lr() {}
    function mr() {
      nr();
    }
    fr.EncryptionScheme = lr;
    lr.install = mr;
    gr(mr, -2);
    function or() {}
    function pr() {
      if (window.Document) {
        var a = Element.prototype;
        a.requestFullscreen =
          a.requestFullscreen ||
          a.mozRequestFullScreen ||
          a.msRequestFullscreen ||
          a.webkitRequestFullscreen;
        a = Document.prototype;
        a.exitFullscreen =
          a.exitFullscreen ||
          a.mozCancelFullScreen ||
          a.msExitFullscreen ||
          a.webkitCancelFullScreen;
        "fullscreenElement" in document ||
          (Object.defineProperty(document, "fullscreenElement", {
            get: function () {
              return (
                document.mozFullScreenElement ||
                document.msFullscreenElement ||
                document.webkitCurrentFullScreenElement ||
                document.webkitFullscreenElement
              );
            },
          }),
          Object.defineProperty(document, "fullscreenEnabled", {
            get: function () {
              return (
                document.mozFullScreenEnabled ||
                document.msFullscreenEnabled ||
                document.webkitFullscreenEnabled
              );
            },
          }));
        document.addEventListener("webkitfullscreenchange", qr);
        document.addEventListener("webkitfullscreenerror", qr);
        document.addEventListener("mozfullscreenchange", qr);
        document.addEventListener("mozfullscreenerror", qr);
        document.addEventListener("MSFullscreenChange", qr);
        document.addEventListener("MSFullscreenError", qr);
      }
    }
    function qr(a) {
      var b = a.type.replace(/^(webkit|moz|MS)/, "").toLowerCase(),
        c = document.createEvent("Event");
      c.initEvent(b, a.bubbles, a.cancelable);
      a.target.dispatchEvent(c);
    }
    fr.Fullscreen = or;
    or.install = pr;
    gr(pr);
    function rr() {}
    function sr() {}
    fr.MathRound = rr;
    rr.install = sr;
    gr(sr);
    function tr() {}
    function ur() {
      var a = !0;
      if (
        Gc() ||
        Ic() ||
        Hc() ||
        Ec() ||
        Cc() ||
        Fc() ||
        Dc("PC=EOS") ||
        Dc("Hisense") ||
        Dc("VIDAA")
      )
        a = !1;
      (a && navigator.mediaCapabilities) ||
        (navigator.mediaCapabilities || (navigator.mediaCapabilities = {}),
        (vr = navigator.mediaCapabilities),
        (navigator.mediaCapabilities.decodingInfo = wr));
    }
    function wr(a) {
      var b, c, d, e, f, g, h, k, l, m, p, n, r, u, t, w, x, C, z;
      return L(function (A) {
        if (1 == A.g) {
          b = {
            supported: !1,
            powerEfficient: !0,
            smooth: !0,
            keySystemAccess: null,
            configuration: a,
          };
          if (!a) return A.return(b);
          c = a.video;
          d = a.audio;
          if ("media-source" == a.type) {
            if (!yc()) return A.return(b);
            if (c) {
              if (Fc())
                if (
                  window.cast &&
                  cast.__platform__ &&
                  cast.__platform__.canDisplayType
                ) {
                  var H = c.contentType;
                  c.width &&
                    c.height &&
                    (H += "; width=" + c.width + "; height=" + c.height);
                  c.framerate && (H += "; framerate=" + c.framerate);
                  "pq" === c.transferFunction && (H += "; eotf=smpte2084");
                  e = cast.__platform__.canDisplayType(H);
                } else e = ad(c.contentType);
              else
                Cc()
                  ? ((f = c.contentType),
                    c.width &&
                      c.height &&
                      ((f += "; width=" + c.width),
                      (f += "; height=" + c.height)),
                    c.framerate && (f += "; framerate=" + c.framerate),
                    c.bitrate && (f += "; bitrate=" + c.bitrate),
                    (e = ad(f)))
                  : (e = ad(c.contentType));
              if (!e) return A.return(b);
            }
            if (d && ((g = d.contentType), (h = ad(g)), !h)) return A.return(b);
          } else if ("file" == a.type) {
            if (
              (c && ((k = c.contentType), (l = zc(k)), !l)) ||
              (d && ((m = d.contentType), (p = zc(m)), !p))
            )
              return A.return(b);
          } else return A.return(b);
          if (!a.keySystemConfiguration)
            return (b.supported = !0), A.return(Promise.resolve(b));
          n = a.keySystemConfiguration;
          r = [];
          u = [];
          n.audio &&
            ((t = {
              robustness: n.audio.robustness || "",
              contentType: a.audio.contentType,
            }),
            r.push(t));
          n.video &&
            ((w = {
              robustness: n.video.robustness || "",
              contentType: a.video.contentType,
            }),
            u.push(w));
          x = {
            initDataTypes: [n.initDataType],
            distinctiveIdentifier: n.distinctiveIdentifier,
            persistentState: n.persistentState,
            sessionTypes: n.sessionTypes,
          };
          r.length && (x.audioCapabilities = r);
          u.length && (x.videoCapabilities = u);
          C = Ic() && n.keySystem.endsWith(".esvm");
          xr !== C && dd.clear();
          return y(A, cd(n.keySystem, [x]), 3);
        }
        2 != A.g && (z = A.h) && ((b.supported = !0), (b.keySystemAccess = z));
        return A.return(b);
      });
    }
    fr.MediaCapabilities = tr;
    tr.install = ur;
    var xr = !1,
      vr = null;
    tr.originalMcap = vr;
    gr(ur, -1);
    function yr() {}
    function zr() {
      var a = Jc();
      window.MediaSource &&
        (window.cast && cast.__platform__ && cast.__platform__.canDisplayType
          ? Ar()
          : a
          ? (Br(), 12 >= a ? (Cr(), Dr()) : Cr())
          : Dc("DT_STB_BCM")
          ? (Cr(), Dr())
          : (Dc("Tizen 2") || Dc("Tizen 3") || Dc("Tizen 4")) && Er());
      window.MediaSource &&
        MediaSource.isTypeSupported('video/webm; codecs="vp9"') &&
        !MediaSource.isTypeSupported('video/webm; codecs="vp09.00.10.08"') &&
        Fr();
    }
    function Cr() {
      var a = MediaSource.prototype.addSourceBuffer;
      MediaSource.prototype.addSourceBuffer = function () {
        var b = a.apply(this, Ia.apply(0, arguments));
        b.abort = function () {};
        return b;
      };
    }
    function Dr() {
      var a = SourceBuffer.prototype.remove;
      SourceBuffer.prototype.remove = function (b, c) {
        return a.call(this, b, c - 0.001);
      };
    }
    function Br() {
      var a = MediaSource.isTypeSupported;
      MediaSource.isTypeSupported = function (b) {
        return "mp2t" == b.split(/ *; */)[0].split("/")[1].toLowerCase()
          ? !1
          : a(b);
      };
    }
    function Er() {
      var a = MediaSource.isTypeSupported;
      MediaSource.isTypeSupported = function (b) {
        return "opus" != md(b)[0] && a(b);
      };
    }
    function Ar() {
      var a = MediaSource.isTypeSupported;
      MediaSource.isTypeSupported = function (b) {
        var c = b.split(/ *; */);
        c.shift();
        return c.some(function (d) {
          return d.startsWith("codecs=");
        })
          ? cast.__platform__.canDisplayType(b)
          : a(b);
      };
    }
    function Fr() {
      var a = MediaSource.isTypeSupported;
      Ec() ||
        (MediaSource.isTypeSupported = function (b) {
          var c = b.split(/ *; */),
            d = c.findIndex(function (g) {
              return g.startsWith("codecs=");
            });
          if (0 > d) return a(b);
          var e = c[d]
              .replace("codecs=", "")
              .replace(/"/g, "")
              .split(/\s*,\s*/),
            f = e.findIndex(function (g) {
              return g.startsWith("vp09");
            });
          0 <= f &&
            ((e[f] = "vp9"),
            (c[d] = 'codecs="' + e.join(",") + '"'),
            (b = c.join("; ")));
          return a(b);
        });
    }
    fr.MediaSource = yr;
    yr.install = zr;
    gr(zr);
    function Gr() {}
    function Hr() {
      screen.orientation || (void 0 != window.orientation && Ir());
    }
    function Ir() {
      function a() {
        switch (window.orientation) {
          case -90:
            b.type = "landscape-secondary";
            b.angle = 270;
            break;
          case 0:
            b.type = "portrait-primary";
            b.angle = 0;
            break;
          case 90:
            b.type = "landscape-primary";
            b.angle = 90;
            break;
          case 180:
            (b.type = "portrait-secondary"), (b.angle = 180);
        }
      }
      var b = new Jr();
      screen.orientation = b;
      a();
      window.addEventListener("orientationchange", function () {
        a();
        var c = new Ig("change");
        b.dispatchEvent(c);
      });
    }
    fr.Orientation = Gr;
    Gr.install = Hr;
    function Jr() {
      Jg.call(this);
      this.type = "";
      this.angle = 0;
    }
    ra(Jr, Jg);
    Jr.prototype.lock = function (a) {
      function b(d) {
        return screen.lockOrientation
          ? screen.lockOrientation(d)
          : screen.mozLockOrientation
          ? screen.mozLockOrientation(d)
          : screen.msLockOrientation
          ? screen.msLockOrientation(d)
          : !1;
      }
      var c = !1;
      switch (a) {
        case "natural":
          c = b("default");
          break;
        case "any":
          c = !0;
          this.unlock();
          break;
        default:
          c = b(a);
      }
      if (c) return Promise.resolve();
      a = Error("screen.orientation.lock() is not available on this device");
      a.name = "NotSupportedError";
      a.code = DOMException.NOT_SUPPORTED_ERR;
      return Promise.reject(a);
    };
    Jr.prototype.unlock = function () {
      screen.unlockOrientation
        ? screen.unlockOrientation()
        : screen.mozUnlockOrientation
        ? screen.mozUnlockOrientation()
        : screen.msUnlockOrientation && screen.msUnlockOrientation();
    };
    gr(Hr);
    function Kr() {}
    function Lr() {
      window.HTMLVideoElement &&
        window.WebKitMediaKeys &&
        (delete HTMLMediaElement.prototype.mediaKeys,
        (HTMLMediaElement.prototype.mediaKeys = null),
        (HTMLMediaElement.prototype.setMediaKeys = Mr),
        (window.MediaKeys = Nr),
        (window.MediaKeySystemAccess = Or),
        (navigator.requestMediaKeySystemAccess = Pr));
    }
    function Pr(a, b) {
      try {
        var c = new Or(a, b);
        return Promise.resolve(c);
      } catch (d) {
        return Promise.reject(d);
      }
    }
    function Mr(a) {
      var b = this.mediaKeys;
      b && b != a && Qr(b, null);
      delete this.mediaKeys;
      return (this.mediaKeys = a) ? Qr(a, this) : Promise.resolve();
    }
    function Rr(a) {
      a = N(a.initData);
      if (Mb(a).getUint32(0, !0) + 4 != a.byteLength)
        throw new RangeError("Malformed FairPlay init data");
      a = Oc(a.subarray(4), !0);
      a = Sc(a);
      var b = new Event("encrypted");
      b.initDataType = "skd";
      b.initData = Kb(a);
      this.dispatchEvent(b);
    }
    fr.PatchedMediaKeysApple = Kr;
    Kr.install = Lr;
    function Or(a, b) {
      this.keySystem = a;
      if (a.startsWith("com.apple.fps"))
        for (a = v(b), b = a.next(); !b.done; b = a.next()) {
          var c = b.value;
          if ("required" == c.persistentState) b = null;
          else {
            b = {
              audioCapabilities: [],
              videoCapabilities: [],
              persistentState: "optional",
              distinctiveIdentifier: "optional",
              initDataTypes: c.initDataTypes,
              sessionTypes: ["temporary"],
              label: c.label,
            };
            var d = !1,
              e = !1;
            if (c.audioCapabilities)
              for (
                var f = v(c.audioCapabilities), g = f.next();
                !g.done;
                g = f.next()
              )
                (g = g.value),
                  g.contentType &&
                    ((d = !0),
                    WebKitMediaKeys.isTypeSupported(
                      this.keySystem,
                      g.contentType.split(";")[0]
                    ) && (b.audioCapabilities.push(g), (e = !0)));
            if (c.videoCapabilities)
              for (
                c = v(c.videoCapabilities), g = c.next();
                !g.done;
                g = c.next()
              )
                (f = g.value),
                  f.contentType &&
                    ((d = !0),
                    WebKitMediaKeys.isTypeSupported(
                      this.keySystem,
                      f.contentType.split(";")[0]
                    ) && (b.videoCapabilities.push(f), (e = !0)));
            d ||
              (e = WebKitMediaKeys.isTypeSupported(
                this.keySystem,
                "video/mp4"
              ));
            b = e ? b : null;
          }
          if (b) {
            this.g = b;
            return;
          }
        }
      a = Error("Unsupported keySystem");
      a.name = "NotSupportedError";
      a.code = DOMException.NOT_SUPPORTED_ERR;
      throw a;
    }
    Or.prototype.createMediaKeys = function () {
      var a = new Nr(this.keySystem);
      return Promise.resolve(a);
    };
    Or.prototype.getConfiguration = function () {
      return this.g;
    };
    function Nr(a) {
      this.h = new WebKitMediaKeys(a);
      this.g = new yi();
    }
    Nr.prototype.createSession = function (a) {
      a = a || "temporary";
      if ("temporary" != a)
        throw new TypeError(
          "Session type " + a + " is unsupported on this platform."
        );
      return new Sr(this.h, a);
    };
    Nr.prototype.setServerCertificate = function () {
      return Promise.resolve(!1);
    };
    function Qr(a, b) {
      a.g.Na();
      if (!b) return Promise.resolve();
      a.g.G(b, "webkitneedkey", Rr);
      try {
        return (
          bn(b, HTMLMediaElement.HAVE_METADATA, a.g, function () {
            b.webkitSetMediaKeys(a.h);
          }),
          Promise.resolve()
        );
      } catch (c) {
        return Promise.reject(c);
      }
    }
    function Sr(a) {
      Jg.call(this);
      this.i = null;
      this.l = a;
      this.h = this.g = null;
      this.j = new yi();
      this.sessionId = "";
      this.expiration = NaN;
      this.closed = new vc();
      this.keyStatuses = new Tr();
    }
    ra(Sr, Jg);
    q = Sr.prototype;
    q.generateRequest = function (a, b) {
      var c = this;
      this.g = new vc();
      try {
        var d = this.l.createSession("video/mp4", N(b));
        this.i = d;
        this.sessionId = d.sessionId || "";
        this.j.G(this.i, "webkitkeymessage", function (e) {
          c.g && (c.g.resolve(), (c.g = null));
          e = new Map()
            .set(
              "messageType",
              void 0 == c.keyStatuses.g ? "license-request" : "license-renewal"
            )
            .set("message", Kb(e.message));
          e = new Ig("message", e);
          c.dispatchEvent(e);
        });
        this.j.G(d, "webkitkeyadded", function () {
          c.h && (Ur(c, "usable"), c.h.resolve(), (c.h = null));
        });
        this.j.G(d, "webkitkeyerror", function () {
          var e = Error("EME PatchedMediaKeysApple key error");
          e.errorCode = c.i.error;
          if (null != c.g) c.g.reject(e), (c.g = null);
          else if (null != c.h) c.h.reject(e), (c.h = null);
          else
            switch (c.i.error.code) {
              case WebKitMediaKeyError.MEDIA_KEYERR_OUTPUT:
              case WebKitMediaKeyError.MEDIA_KEYERR_HARDWARECHANGE:
                Ur(c, "output-not-allowed");
                break;
              default:
                Ur(c, "internal-error");
            }
        });
        Ur(this, "status-pending");
      } catch (e) {
        this.g.reject(e);
      }
      return this.g;
    };
    q.load = function () {
      return Promise.reject(Error("MediaKeySession.load not yet supported"));
    };
    q.update = function (a) {
      this.h = new vc();
      try {
        this.i.update(N(a));
      } catch (b) {
        this.h.reject(b);
      }
      return this.h;
    };
    q.close = function () {
      try {
        this.i.close(), this.closed.resolve(), this.j.Na();
      } catch (a) {
        this.closed.reject(a);
      }
      return this.closed;
    };
    q.remove = function () {
      return Promise.reject(
        Error(
          "MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"
        )
      );
    };
    function Ur(a, b) {
      var c = a.keyStatuses;
      c.size = void 0 == b ? 0 : 1;
      c.g = b;
      b = new Ig("keystatuseschange");
      a.dispatchEvent(b);
    }
    function Tr() {
      this.size = 0;
      this.g = void 0;
    }
    q = Tr.prototype;
    q.forEach = function (a) {
      this.g && a(this.g, qj.value());
    };
    q.get = function (a) {
      if (this.has(a)) return this.g;
    };
    q.has = function (a) {
      var b = qj.value();
      return this.g && Ib(a, b) ? !0 : !1;
    };
    q.entries = function () {};
    q.keys = function () {};
    q.values = function () {};
    gr(Lr);
    function Vr() {}
    function Wr() {
      !window.HTMLVideoElement ||
        !window.MSMediaKeys ||
        (navigator.requestMediaKeySystemAccess &&
          MediaKeySystemAccess.prototype.getConfiguration) ||
        (delete HTMLMediaElement.prototype.mediaKeys,
        (HTMLMediaElement.prototype.mediaKeys = null),
        (window.MediaKeys = Xr),
        (window.MediaKeySystemAccess = Yr),
        (navigator.requestMediaKeySystemAccess = Zr),
        (HTMLMediaElement.prototype.setMediaKeys = $r));
    }
    function Zr(a, b) {
      try {
        var c = new Yr(a, b);
        return Promise.resolve(c);
      } catch (d) {
        return Promise.reject(d);
      }
    }
    function as(a) {
      if (a.initData) {
        var b = new CustomEvent("encrypted");
        b.initDataType = "cenc";
        b.initData = Kb(Wf(a.initData));
        this.dispatchEvent(b);
      }
    }
    fr.PatchedMediaKeysMs = Vr;
    Vr.install = Wr;
    function Yr(a, b) {
      this.keySystem = a;
      a = !1;
      b = v(b);
      for (var c = b.next(); !c.done; c = b.next()) {
        c = c.value;
        var d = {
            audioCapabilities: [],
            videoCapabilities: [],
            persistentState: "optional",
            distinctiveIdentifier: "optional",
            initDataTypes: c.initDataTypes,
            sessionTypes: ["temporary"],
            label: c.label,
          },
          e = !1;
        if (c.audioCapabilities)
          for (
            var f = v(c.audioCapabilities), g = f.next();
            !g.done;
            g = f.next()
          )
            (g = g.value),
              g.contentType &&
                ((e = !0),
                MSMediaKeys.isTypeSupported(
                  this.keySystem,
                  g.contentType.split(";")[0]
                ) && (d.audioCapabilities.push(g), (a = !0)));
        if (c.videoCapabilities)
          for (f = v(c.videoCapabilities), g = f.next(); !g.done; g = f.next())
            (g = g.value),
              g.contentType &&
                ((e = !0),
                MSMediaKeys.isTypeSupported(
                  this.keySystem,
                  g.contentType.split(";")[0]
                ) && (d.videoCapabilities.push(g), (a = !0)));
        e || (a = MSMediaKeys.isTypeSupported(this.keySystem, "video/mp4"));
        "required" == c.persistentState && (a = !1);
        if (a) {
          this.g = d;
          return;
        }
      }
      a = Error("Unsupported keySystem");
      a.name = "NotSupportedError";
      a.code = DOMException.NOT_SUPPORTED_ERR;
      throw a;
    }
    Yr.prototype.createMediaKeys = function () {
      var a = new Xr(this.keySystem);
      return Promise.resolve(a);
    };
    Yr.prototype.getConfiguration = function () {
      return this.g;
    };
    function $r(a) {
      var b = this.mediaKeys;
      b && b != a && bs(b, null);
      delete this.mediaKeys;
      return (this.mediaKeys = a) ? bs(a, this) : Promise.resolve();
    }
    function Xr(a) {
      this.h = new MSMediaKeys(a);
      this.g = new yi();
    }
    Xr.prototype.createSession = function (a) {
      a = a || "temporary";
      if ("temporary" != a)
        throw new TypeError(
          "Session type " + a + " is unsupported on this platform."
        );
      return new cs(this.h, a);
    };
    Xr.prototype.setServerCertificate = function () {
      return Promise.resolve(!1);
    };
    function bs(a, b) {
      a.g.Na();
      if (!b) return Promise.resolve();
      a.g.G(b, "msneedkey", as);
      try {
        return (
          bn(b, HTMLMediaElement.HAVE_METADATA, a.g, function () {
            b.msSetMediaKeys(a.h);
          }),
          Promise.resolve()
        );
      } catch (c) {
        return Promise.reject(c);
      }
    }
    function cs(a) {
      Jg.call(this);
      this.i = null;
      this.l = a;
      this.h = this.g = null;
      this.j = new yi();
      this.sessionId = "";
      this.expiration = NaN;
      this.closed = new vc();
      this.keyStatuses = new ds();
    }
    ra(cs, Jg);
    q = cs.prototype;
    q.generateRequest = function (a, b) {
      var c = this;
      this.g = new vc();
      try {
        (this.i = this.l.createSession("video/mp4", N(b), null)),
          this.j.G(this.i, "mskeymessage", function (d) {
            c.g && (c.g.resolve(), (c.g = null));
            d = new Map()
              .set(
                "messageType",
                void 0 == c.keyStatuses.g
                  ? "license-request"
                  : "license-renewal"
              )
              .set("message", Kb(d.message));
            d = new Ig("message", d);
            c.dispatchEvent(d);
          }),
          this.j.G(this.i, "mskeyadded", function () {
            c.g
              ? (es(c, "usable"), c.g.resolve(), (c.g = null))
              : c.h && (es(c, "usable"), c.h.resolve(), (c.h = null));
          }),
          this.j.G(this.i, "mskeyerror", function () {
            var d = Error("EME PatchedMediaKeysMs key error");
            d.errorCode = c.i.error;
            if (null != c.g) c.g.reject(d), (c.g = null);
            else if (null != c.h) c.h.reject(d), (c.h = null);
            else
              switch (c.i.error.code) {
                case MSMediaKeyError.MS_MEDIA_KEYERR_OUTPUT:
                case MSMediaKeyError.MS_MEDIA_KEYERR_HARDWARECHANGE:
                  es(c, "output-not-allowed");
                  break;
                default:
                  es(c, "internal-error");
              }
          }),
          es(this, "status-pending");
      } catch (d) {
        this.g.reject(d);
      }
      return this.g;
    };
    q.load = function () {
      return Promise.reject(Error("MediaKeySession.load not yet supported"));
    };
    q.update = function (a) {
      this.h = new vc();
      try {
        this.i.update(N(a));
      } catch (b) {
        this.h.reject(b);
      }
      return this.h;
    };
    q.close = function () {
      try {
        this.i.close(), this.closed.resolve(), this.j.Na();
      } catch (a) {
        this.closed.reject(a);
      }
      return this.closed;
    };
    q.remove = function () {
      return Promise.reject(
        Error(
          "MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"
        )
      );
    };
    function es(a, b) {
      var c = a.keyStatuses;
      c.size = void 0 == b ? 0 : 1;
      c.g = b;
      b = new Ig("keystatuseschange");
      a.dispatchEvent(b);
    }
    function ds() {
      this.size = 0;
      this.g = void 0;
    }
    q = ds.prototype;
    q.forEach = function (a) {
      this.g && a(this.g, qj.value());
    };
    q.get = function (a) {
      if (this.has(a)) return this.g;
    };
    q.has = function (a) {
      var b = qj.value();
      return this.g && Ib(a, b) ? !0 : !1;
    };
    q.entries = function () {};
    q.keys = function () {};
    q.values = function () {};
    gr(Wr);
    function fs() {}
    function gs() {
      !window.HTMLVideoElement ||
        (navigator.requestMediaKeySystemAccess &&
          MediaKeySystemAccess.prototype.getConfiguration) ||
        ((navigator.requestMediaKeySystemAccess = hs),
        delete HTMLMediaElement.prototype.mediaKeys,
        (HTMLMediaElement.prototype.mediaKeys = null),
        (HTMLMediaElement.prototype.setMediaKeys = is),
        (window.MediaKeys = js),
        (window.MediaKeySystemAccess = ks));
    }
    function hs() {
      return Promise.reject(
        Error("The key system specified is not supported.")
      );
    }
    function is(a) {
      return null == a
        ? Promise.resolve()
        : Promise.reject(Error("MediaKeys not supported."));
    }
    fr.PatchedMediaKeysNop = fs;
    fs.install = gs;
    function js() {
      throw new TypeError("Illegal constructor.");
    }
    js.prototype.createSession = function () {};
    js.prototype.setServerCertificate = function () {};
    function ks() {
      this.keySystem = "";
      throw new TypeError("Illegal constructor.");
    }
    ks.prototype.getConfiguration = function () {};
    ks.prototype.createMediaKeys = function () {};
    gr(gs, -10);
    function ls() {}
    function ms() {
      var a =
        window.WebKitMediaKeys &&
        window.WebKitMediaKeys.isTypeSupported(
          "com.apple.fps.1_0",
          "video/mp4"
        );
      if (
        !(
          !window.HTMLVideoElement ||
          a ||
          (navigator.requestMediaKeySystemAccess &&
            MediaKeySystemAccess.prototype.getConfiguration)
        )
      ) {
        if (HTMLMediaElement.prototype.webkitGenerateKeyRequest) ns = "webkit";
        else if (!HTMLMediaElement.prototype.generateKeyRequest) return;
        navigator.requestMediaKeySystemAccess = os;
        delete HTMLMediaElement.prototype.mediaKeys;
        HTMLMediaElement.prototype.mediaKeys = null;
        HTMLMediaElement.prototype.setMediaKeys = ps;
        window.MediaKeys = qs;
        window.MediaKeySystemAccess = rs;
      }
    }
    function ss(a) {
      var b = ns;
      return b ? b + a.charAt(0).toUpperCase() + a.slice(1) : a;
    }
    function os(a, b) {
      try {
        var c = new rs(a, b);
        return Promise.resolve(c);
      } catch (d) {
        return Promise.reject(d);
      }
    }
    function ps(a) {
      var b = this.mediaKeys;
      b && b != a && ts(b, null);
      delete this.mediaKeys;
      (this.mediaKeys = a) && ts(a, this);
      return Promise.resolve();
    }
    fr.PatchedMediaKeysWebkit = ls;
    ls.install = ms;
    function rs(a, b) {
      this.g = this.keySystem = a;
      var c = !1;
      "org.w3.clearkey" == a && ((this.g = "webkit-org.w3.clearkey"), (c = !1));
      var d = !1;
      var e = document.getElementsByTagName("video");
      e = e.length ? e[0] : document.createElement("video");
      b = v(b);
      for (var f = b.next(); !f.done; f = b.next()) {
        f = f.value;
        var g = {
            audioCapabilities: [],
            videoCapabilities: [],
            persistentState: "optional",
            distinctiveIdentifier: "optional",
            initDataTypes: f.initDataTypes,
            sessionTypes: ["temporary"],
            label: f.label,
          },
          h = !1;
        if (f.audioCapabilities)
          for (
            var k = v(f.audioCapabilities), l = k.next();
            !l.done;
            l = k.next()
          )
            (l = l.value),
              l.contentType &&
                ((h = !0),
                e.canPlayType(l.contentType.split(";")[0], this.g) &&
                  (g.audioCapabilities.push(l), (d = !0)));
        if (f.videoCapabilities)
          for (k = v(f.videoCapabilities), l = k.next(); !l.done; l = k.next())
            (l = l.value),
              l.contentType &&
                ((h = !0),
                e.canPlayType(l.contentType, this.g) &&
                  (g.videoCapabilities.push(l), (d = !0)));
        h ||
          (d =
            e.canPlayType("video/mp4", this.g) ||
            e.canPlayType("video/webm", this.g));
        "required" == f.persistentState &&
          (c
            ? ((g.persistentState = "required"),
              (g.sessionTypes = ["persistent-license"]))
            : (d = !1));
        if (d) {
          this.h = g;
          return;
        }
      }
      c = "Unsupported keySystem";
      if ("org.w3.clearkey" == a || "com.widevine.alpha" == a)
        c = "None of the requested configurations were supported.";
      a = Error(c);
      a.name = "NotSupportedError";
      a.code = DOMException.NOT_SUPPORTED_ERR;
      throw a;
    }
    rs.prototype.createMediaKeys = function () {
      var a = new qs(this.g);
      return Promise.resolve(a);
    };
    rs.prototype.getConfiguration = function () {
      return this.h;
    };
    function qs(a) {
      this.l = a;
      this.h = null;
      this.g = new yi();
      this.i = [];
      this.j = new Map();
    }
    function ts(a, b) {
      a.h = b;
      a.g.Na();
      var c = ns;
      b &&
        (a.g.G(b, c + "needkey", function (d) {
          var e = new CustomEvent("encrypted");
          e.initDataType = "cenc";
          e.initData = Kb(d.initData);
          a.h.dispatchEvent(e);
        }),
        a.g.G(b, c + "keymessage", function (d) {
          var e = us(a, d.sessionId);
          e &&
            ((d = new Map()
              .set(
                "messageType",
                void 0 == e.keyStatuses.g ? "licenserequest" : "licenserenewal"
              )
              .set("message", d.message)),
            (d = new Ig("message", d)),
            e.h && (e.h.resolve(), (e.h = null)),
            e.dispatchEvent(d));
        }),
        a.g.G(b, c + "keyadded", function (d) {
          if ((d = us(a, d.sessionId)))
            vs(d, "usable"), d.g && d.g.resolve(), (d.g = null);
        }),
        a.g.G(b, c + "keyerror", function (d) {
          var e = us(a, d.sessionId);
          e && e.handleError(d);
        }));
    }
    qs.prototype.createSession = function (a) {
      a = a || "temporary";
      if ("temporary" != a && "persistent-license" != a)
        throw new TypeError(
          "Session type " + a + " is unsupported on this platform."
        );
      var b = this.h || document.createElement("video");
      b.src || (b.src = "about:blank");
      a = new ws(b, this.l, a);
      this.i.push(a);
      return a;
    };
    qs.prototype.setServerCertificate = function () {
      return Promise.resolve(!1);
    };
    function us(a, b) {
      var c = a.j.get(b);
      return c
        ? c
        : (c = a.i.shift())
        ? ((c.sessionId = b), a.j.set(b, c), c)
        : null;
    }
    function ws(a, b, c) {
      Jg.call(this);
      this.j = a;
      this.m = !1;
      this.g = this.h = null;
      this.i = b;
      this.l = c;
      this.sessionId = "";
      this.expiration = NaN;
      this.closed = new vc();
      this.keyStatuses = new xs();
    }
    ra(ws, Jg);
    q = ws.prototype;
    q.handleError = function (a) {
      var b = Error("EME v0.1b key error"),
        c = a.errorCode;
      c.systemCode = a.systemCode;
      b.errorCode = c;
      !a.sessionId && this.h
        ? (45 == a.systemCode && (b.message = "Unsupported session type."),
          this.h.reject(b),
          (this.h = null))
        : a.sessionId && this.g
        ? (this.g.reject(b), (this.g = null))
        : ((b = a.systemCode),
          a.errorCode.code == MediaKeyError.MEDIA_KEYERR_OUTPUT
            ? vs(this, "output-restricted")
            : 1 == b
            ? vs(this, "expired")
            : vs(this, "internal-error"));
    };
    function ys(a, b, c) {
      if (a.m)
        return Promise.reject(Error("The session is already initialized."));
      a.m = !0;
      try {
        if ("persistent-license" == a.l)
          if (c) var d = N(Sc("LOAD_SESSION|" + c));
          else {
            var e = Sc("PERSISTENT|");
            d = $c(e, b);
          }
        else d = N(b);
      } catch (g) {
        return Promise.reject(g);
      }
      a.h = new vc();
      var f = ss("generateKeyRequest");
      try {
        a.j[f](a.i, d);
      } catch (g) {
        if ("InvalidStateError" != g.name)
          return (a.h = null), Promise.reject(g);
        new Q(function () {
          try {
            a.j[f](a.i, d);
          } catch (h) {
            a.h.reject(h), (a.h = null);
          }
        }).X(0.01);
      }
      return a.h;
    }
    function zs(a, b, c) {
      if (a.g)
        a.g
          .then(function () {
            return zs(a, b, c);
          })
          .catch(function () {
            return zs(a, b, c);
          });
      else {
        a.g = b;
        if ("webkit-org.w3.clearkey" == a.i) {
          var d = Nc(c);
          var e = JSON.parse(d);
          "oct" != e.keys[0].kty &&
            (a.g.reject(Error("Response is not a valid JSON Web Key Set.")),
            (a.g = null));
          d = Xc(e.keys[0].k);
          e = Xc(e.keys[0].kid);
        } else (d = N(c)), (e = null);
        var f = ss("addKey");
        try {
          a.j[f](a.i, d, e, a.sessionId);
        } catch (g) {
          a.g.reject(g), (a.g = null);
        }
      }
    }
    function vs(a, b) {
      var c = a.keyStatuses;
      c.size = void 0 == b ? 0 : 1;
      c.g = b;
      b = new Ig("keystatuseschange");
      a.dispatchEvent(b);
    }
    q.generateRequest = function (a, b) {
      return ys(this, b, null);
    };
    q.load = function (a) {
      return "persistent-license" == this.l
        ? ys(this, null, a)
        : Promise.reject(Error("Not a persistent session."));
    };
    q.update = function (a) {
      var b = new vc();
      zs(this, b, a);
      return b;
    };
    q.close = function () {
      if ("persistent-license" != this.l) {
        if (!this.sessionId)
          return (
            this.closed.reject(Error("The session is not callable.")),
            this.closed
          );
        var a = ss("cancelKeyRequest");
        try {
          this.j[a](this.i, this.sessionId);
        } catch (b) {}
      }
      this.closed.resolve();
      return this.closed;
    };
    q.remove = function () {
      return "persistent-license" != this.l
        ? Promise.reject(Error("Not a persistent session."))
        : this.close();
    };
    function xs() {
      this.size = 0;
      this.g = void 0;
    }
    q = xs.prototype;
    q.forEach = function (a) {
      this.g && a(this.g, qj.value());
    };
    q.get = function (a) {
      if (this.has(a)) return this.g;
    };
    q.has = function (a) {
      var b = qj.value();
      return this.g && Ib(a, b) ? !0 : !1;
    };
    q.entries = function () {};
    q.keys = function () {};
    q.values = function () {};
    var ns = "";
    gr(ms);
    function As() {}
    function Bs() {
      if (window.HTMLVideoElement) {
        var a = HTMLVideoElement.prototype;
        (a.requestPictureInPicture && document.exitPictureInPicture) ||
          !a.webkitSupportsPresentationMode ||
          ((document.pictureInPictureEnabled = !0),
          (document.pictureInPictureElement = null),
          (a.requestPictureInPicture = Cs),
          Object.defineProperty(a, "disablePictureInPicture", {
            get: Ds,
            set: Es,
            enumerable: !0,
            configurable: !0,
          }),
          (document.exitPictureInPicture = Fs),
          document.addEventListener("webkitpresentationmodechanged", Gs, !0));
      }
    }
    function Gs(a) {
      a = a.target;
      if ("picture-in-picture" == a.webkitPresentationMode) {
        document.pictureInPictureElement = a;
        var b = new Event("enterpictureinpicture");
        a.dispatchEvent(b);
      } else
        document.pictureInPictureElement == a &&
          (document.pictureInPictureElement = null),
          (b = new Event("leavepictureinpicture")),
          a.dispatchEvent(b);
    }
    function Cs() {
      return this.webkitSupportsPresentationMode("picture-in-picture")
        ? (this.webkitSetPresentationMode("picture-in-picture"),
          (document.pictureInPictureElement = this),
          Promise.resolve())
        : Promise.reject(Error("PiP not allowed by video element"));
    }
    function Fs() {
      var a = document.pictureInPictureElement;
      return a
        ? (a.webkitSetPresentationMode("inline"),
          (document.pictureInPictureElement = null),
          Promise.resolve())
        : Promise.reject(Error("No picture in picture element found"));
    }
    function Ds() {
      return this.hasAttribute("disablePictureInPicture")
        ? !0
        : !this.webkitSupportsPresentationMode("picture-in-picture");
    }
    function Es(a) {
      a
        ? this.setAttribute("disablePictureInPicture", "")
        : this.removeAttribute("disablePictureInPicture");
    }
    fr.PiPWebkit = As;
    As.install = Bs;
    gr(Bs);
    function Hs() {}
    function Is() {
      window.crypto &&
        ("randomUUID" in window.crypto || (window.crypto.randomUUID = Js));
    }
    function Js() {
      var a = URL.createObjectURL(new Blob()),
        b = a.toString();
      URL.revokeObjectURL(a);
      return b.substr(b.lastIndexOf("/") + 1);
    }
    fr.RandomUUID = Hs;
    Hs.install = Is;
    gr(Is);
    function Ks() {}
    function Ls() {
      (navigator.storage && navigator.storage.estimate) ||
        !navigator.webkitTemporaryStorage ||
        !navigator.webkitTemporaryStorage.queryUsageAndQuota ||
        ("storage" in navigator || (navigator.storage = {}),
        (navigator.storage.estimate = Ms));
    }
    function Ms() {
      return new Promise(function (a, b) {
        navigator.webkitTemporaryStorage.queryUsageAndQuota(function (c, d) {
          a({ usage: c, quota: d });
        }, b);
      });
    }
    fr.StorageEstimate = Ks;
    Ks.install = Ls;
    gr(Ls);
    function Ns() {}
    function Os() {
      var a = Symbol.prototype;
      "description" in a ||
        Object.defineProperty(a, "description", { get: Ps });
    }
    function Ps() {
      var a = /\((.*)\)/.exec(this.toString());
      return a ? a[1] : void 0;
    }
    fr.Symbol = Ns;
    Ns.install = Os;
    gr(Os);
    function Qs() {}
    function Rs() {
      if (window.HTMLMediaElement) {
        var a = HTMLMediaElement.prototype.play;
        HTMLMediaElement.prototype.play = function () {
          var b = a.apply(this);
          b && b.catch(function () {});
          return b;
        };
      }
    }
    fr.VideoPlayPromise = Qs;
    Qs.install = Rs;
    gr(Rs);
    function Ss() {}
    function Ts() {
      if (window.HTMLVideoElement) {
        var a = HTMLVideoElement.prototype;
        !a.getVideoPlaybackQuality &&
          ("webkitDroppedFrameCount" in a ||
            (Dc("Web0S") && Dc("Chrome/38.0.2125.122 Safari/537.36"))) &&
          (a.getVideoPlaybackQuality = Us);
      }
    }
    function Us() {
      return {
        droppedVideoFrames: this.webkitDroppedFrameCount,
        totalVideoFrames: this.webkitDecodedFrameCount,
        corruptedVideoFrames: 0,
        creationTime: NaN,
        totalFrameDelay: 0,
      };
    }
    fr.VideoPlaybackQuality = Ss;
    Ss.install = Ts;
    gr(Ts);
    function Vs() {}
    function Ws() {
      if (!window.VTTCue && window.TextTrackCue) {
        var a = null,
          b = TextTrackCue.length;
        if (3 == b) a = Xs;
        else if (6 == b) a = Ys;
        else {
          try {
            var c = !!Xs(1, 2, "");
          } catch (d) {
            c = !1;
          }
          c && (a = Xs);
        }
        a &&
          (window.VTTCue = function (d, e, f) {
            return a(d, e, f);
          });
      }
    }
    function Xs(a, b, c) {
      return new window.TextTrackCue(a, b, c);
    }
    function Ys(a, b, c) {
      return new window.TextTrackCue(a + "-" + b + "-" + c, a, b, c);
    }
    fr.VTTCue = Vs;
    Vs.install = Ws;
    gr(Ws);
    function Zs() {}
    Zs.prototype.parseInit = function () {};
    Zs.prototype.parseMedia = function (a, b) {
      var c = null,
        d = [];
      a = Nc(a).split(/\r?\n/);
      a = v(a);
      for (var e = a.next(); !e.done; e = a.next())
        if ((e = e.value) && !/^\s+$/.test(e) && (e = $s.exec(e))) {
          var f = at.exec(e[1]);
          f = 60 * parseInt(f[1], 10) + parseFloat(f[2].replace(",", "."));
          e = new nb(f, b.segmentEnd ? b.segmentEnd : f + 2, e[2]);
          c && ((c.endTime = f), d.push(c));
          c = e;
        }
      c && d.push(c);
      return d;
    };
    M("shaka.text.LrcTextParser", Zs);
    Zs.prototype.parseMedia = Zs.prototype.parseMedia;
    Zs.prototype.parseInit = Zs.prototype.parseInit;
    var $s = /^\[(\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?)\](.*)/,
      at = /^(\d+):(\d{1,2}(?:[.,]\d{1,3})?)$/;
    qd["application/x-subtitle-lrc"] = function () {
      return new Zs();
    };
    function bt() {}
    bt.prototype.parseInit = function () {};
    bt.prototype.parseMedia = function (a, b) {
      var c = Nc(a);
      a = [];
      var d = new DOMParser(),
        e = null;
      if ("" == c) return a;
      try {
        e = d.parseFromString(c, "text/xml");
      } catch (C) {
        throw new O(2, 2, 2005, "Failed to parse TTML.");
      }
      if (e) {
        if ((c = e.getElementsByTagName("parsererror")[0]))
          throw new O(2, 2, 2005, c.textContent);
        var f = e.getElementsByTagName("tt")[0];
        if (!f) throw new O(2, 2, 2005, "TTML does not contain <tt> tag.");
        e = f.getElementsByTagName("body")[0];
        if (!e) return [];
        var g = bg(f, ct, "frameRate"),
          h = bg(f, ct, "subFrameRate"),
          k = bg(f, ct, "frameRateMultiplier"),
          l = bg(f, ct, "tickRate"),
          m = bg(f, ct, "cellResolution");
        c = f.getAttribute("xml:space") || "default";
        d = bg(f, dt, "extent");
        if ("default" != c && "preserve" != c)
          throw new O(2, 2, 2005, "Invalid xml:space value: " + c);
        c = "default" == c;
        g = new et(g, h, k, l);
        m = m
          ? (m = /^(\d+) (\d+)$/.exec(m))
            ? { columns: parseInt(m[1], 10), rows: parseInt(m[2], 10) }
            : null
          : null;
        h = (h = f.getElementsByTagName("metadata")[0]) ? $f(h) : [];
        k = Array.from(f.getElementsByTagName("style"));
        f = Array.from(f.getElementsByTagName("region"));
        l = [];
        for (var p = v(f), n = p.next(); !n.done; n = p.next()) {
          var r = n.value;
          n = new pb();
          var u = r.getAttribute("xml:id");
          if (u) {
            n.id = u;
            var t = null;
            d && (t = ft.exec(d) || gt.exec(d));
            u = t ? Number(t[1]) : null;
            t = t ? Number(t[2]) : null;
            var w, x;
            if ((w = ht(r, k, "extent")))
              (w = (x = ft.exec(w)) || gt.exec(w)),
                null != w &&
                  ((n.width = Number(w[1])),
                  (n.height = Number(w[2])),
                  x ||
                    (null != u && (n.width = (100 * n.width) / u),
                    null != t && (n.height = (100 * n.height) / t)),
                  (n.widthUnits = x || null != u ? Fb : 0),
                  (n.heightUnits = x || null != t ? Fb : 0));
            if ((r = ht(r, k, "origin")))
              (w = (x = ft.exec(r)) || gt.exec(r)),
                null != w &&
                  ((n.viewportAnchorX = Number(w[1])),
                  (n.viewportAnchorY = Number(w[2])),
                  x ||
                    (null != t &&
                      (n.viewportAnchorY = (100 * n.viewportAnchorY) / t),
                    null != u &&
                      (n.viewportAnchorX = (100 * n.viewportAnchorX) / u)),
                  (n.viewportAnchorUnits = x || null != u ? Fb : 0));
          } else n = null;
          n && l.push(n);
        }
        if (U(e, "p").length)
          throw new O(2, 2, 2001, "<p> can only be inside <div> in TTML");
        d = v(U(e, "div"));
        for (p = d.next(); !p.done; p = d.next())
          if (U(p.value, "span").length)
            throw new O(2, 2, 2001, "<span> can only be inside <p> in TTML");
        (b = it(e, b.periodStart, g, h, k, f, l, c, m, null, !1)) && a.push(b);
      }
      return a;
    };
    function it(a, b, c, d, e, f, g, h, k, l, m) {
      var p = a.parentNode;
      if (a.nodeType == Node.COMMENT_NODE) return null;
      if (a.nodeType == Node.TEXT_NODE) {
        if (!m) return null;
        var n = document.createElement("span");
        n.textContent = a.textContent;
      } else n = a;
      for (
        var r = null, u = v(jt), t = u.next();
        !t.done && !(r = kt(n, "backgroundImage", d, "#", t.value)[0]);
        t = u.next()
      );
      u = m;
      if ("p" == a.nodeName || r) m = !0;
      h =
        "default" ==
        (n.getAttribute("xml:space") || (h ? "default" : "preserve"));
      t = Array.from(n.childNodes).every(function (A) {
        return A.nodeType == Node.TEXT_NODE;
      });
      a = [];
      if (!t)
        for (var w = v(n.childNodes), x = w.next(); !x.done; x = w.next())
          (x = it(x.value, b, c, d, e, f, g, h, k, n, m)) && a.push(x);
      d = null != l;
      w = /\S/.test(n.textContent);
      var C =
        n.hasAttribute("begin") ||
        n.hasAttribute("end") ||
        n.hasAttribute("dur");
      if (!(C || w || "br" == n.tagName || 0 != a.length || (d && !h)))
        return null;
      x = lt(n, c);
      w = x.start;
      for (
        x = x.end;
        p && p.nodeType == Node.ELEMENT_NODE && "tt" != p.tagName;

      )
        (x = mt(p, c, w, x)), (w = x.start), (x = x.end), (p = p.parentNode);
      null == w && (w = 0);
      w += b;
      x = null == x ? Infinity : x + b;
      if (!C && 0 < a.length)
        for (w = Infinity, x = 0, b = v(a), c = b.next(); !c.done; c = b.next())
          (c = c.value),
            (w = Math.min(w, c.startTime)),
            (x = Math.max(x, c.endTime));
      if ("br" == n.tagName)
        return (e = new nb(w, x, "")), (e.lineBreak = !0), e;
      b = "";
      t &&
        ((b = n.textContent),
        h && ((b = b.trim()), (b = b.replace(/\s+/g, " "))));
      b = new nb(w, x, b);
      b.nestedCues = a;
      m || (b.isContainer = !0);
      k && (b.cellResolution = k);
      k = kt(n, "region", f, "")[0];
      if (n.hasAttribute("region") && k && k.getAttribute("xml:id")) {
        var z = k.getAttribute("xml:id");
        b.region = g.filter(function (A) {
          return A.id == z;
        })[0];
      }
      g = k;
      l &&
        d &&
        !n.getAttribute("region") &&
        !n.getAttribute("style") &&
        (g = kt(l, "region", f, "")[0]);
      nt(b, n, g, r, e, u, 0 == a.length);
      return b;
    }
    function nt(a, b, c, d, e, f, g) {
      f = f || g;
      "rtl" == ot(b, c, e, "direction", f) && (a.direction = "rtl");
      g = ot(b, c, e, "writingMode", f);
      "tb" == g || "tblr" == g
        ? (a.writingMode = "vertical-lr")
        : "tbrl" == g
        ? (a.writingMode = "vertical-rl")
        : "rltb" == g || "rl" == g
        ? (a.direction = "rtl")
        : g && (a.direction = ob);
      (g = ot(b, c, e, "textAlign", !0))
        ? ((a.positionAlign = pt[g]),
          (a.lineAlign = qt[g]),
          (a.textAlign = zb[g.toUpperCase()]))
        : (a.textAlign = rb);
      if ((g = ot(b, c, e, "displayAlign", !0)))
        a.displayAlign = Ab[g.toUpperCase()];
      if ((g = ot(b, c, e, "color", f))) a.color = g;
      if ((g = ot(b, c, e, "backgroundColor", f))) a.backgroundColor = g;
      if ((g = ot(b, c, e, "border", f))) a.border = g;
      if ((g = ot(b, c, e, "fontFamily", f))) a.fontFamily = g;
      (g = ot(b, c, e, "fontWeight", f)) && "bold" == g && (a.fontWeight = 700);
      g = ot(b, c, e, "wrapOption", f);
      a.wrapLine = g && "noWrap" == g ? !1 : !0;
      (g = ot(b, c, e, "lineHeight", f)) && g.match(rt) && (a.lineHeight = g);
      (g = ot(b, c, e, "fontSize", f)) &&
        (g.match(rt) || g.match(st)) &&
        (a.fontSize = g);
      if ((g = ot(b, c, e, "fontStyle", f))) a.fontStyle = Eb[g.toUpperCase()];
      if (d) {
        g = d.getAttribute("imageType") || d.getAttribute("imagetype");
        var h = d.getAttribute("encoding");
        d = d.textContent.trim();
        "PNG" == g &&
          "Base64" == h &&
          d &&
          (a.backgroundImage = "data:image/png;base64," + d);
      }
      if ((d = ot(b, c, e, "textOutline", f)))
        (d = d.split(" ")),
          d[0].match(rt)
            ? (a.textStrokeColor = a.color)
            : ((a.textStrokeColor = d[0]), d.shift()),
          d[0] && d[0].match(rt)
            ? (a.textStrokeWidth = d[0])
            : (a.textStrokeColor = "");
      (d = ot(b, c, e, "letterSpacing", f)) &&
        d.match(rt) &&
        (a.letterSpacing = d);
      (d = ot(b, c, e, "linePadding", f)) && d.match(rt) && (a.linePadding = d);
      if ((f = ot(b, c, e, "opacity", f))) a.opacity = parseFloat(f);
      (c = ht(c, e, "textDecoration")) && tt(a, c);
      (b = ut(b, e, "textDecoration")) && tt(a, b);
    }
    function tt(a, b) {
      b = v(b.split(" "));
      for (var c = b.next(); !c.done; c = b.next())
        switch (c.value) {
          case "underline":
            a.textDecoration.includes("underline") ||
              a.textDecoration.push("underline");
            break;
          case "noUnderline":
            a.textDecoration.includes("underline") &&
              kb(a.textDecoration, "underline");
            break;
          case "lineThrough":
            a.textDecoration.includes("lineThrough") ||
              a.textDecoration.push("lineThrough");
            break;
          case "noLineThrough":
            a.textDecoration.includes("lineThrough") &&
              kb(a.textDecoration, "lineThrough");
            break;
          case "overline":
            a.textDecoration.includes("overline") ||
              a.textDecoration.push("overline");
            break;
          case "noOverline":
            a.textDecoration.includes("overline") &&
              kb(a.textDecoration, "overline");
        }
    }
    function ot(a, b, c, d, e) {
      e = void 0 === e ? !0 : e;
      return (a = ut(a, c, d)) ? a : e ? ht(b, c, d) : null;
    }
    function ht(a, b, c) {
      if (!a) return null;
      var d = bg(a, dt, c);
      return d ? d : vt(a, b, c);
    }
    function ut(a, b, c) {
      var d = bg(a, dt, c);
      return d ? d : vt(a, b, c);
    }
    function vt(a, b, c) {
      a = kt(a, "style", b, "");
      for (var d = null, e = 0; e < a.length; e++) {
        var f = ag(a[e], "urn:ebu:tt:style", c);
        f || (f = bg(a[e], dt, c));
        f || (f = ut(a[e], b, c));
        f && (d = f);
      }
      return d;
    }
    function kt(a, b, c, d, e) {
      var f = [];
      if (!a || 1 > c.length) return f;
      var g = a;
      for (
        a = null;
        g &&
        !(a = e ? ag(g, e, b) : g.getAttribute(b)) &&
        ((g = g.parentNode), g instanceof Element);

      );
      if ((b = a))
        for (b = v(b.split(" ")), e = b.next(); !e.done; e = b.next())
          for (e = e.value, a = v(c), g = a.next(); !g.done; g = a.next())
            if (((g = g.value), d + g.getAttribute("xml:id") == e)) {
              f.push(g);
              break;
            }
      return f;
    }
    function mt(a, b, c, d) {
      a = lt(a, b);
      null == c ? (c = a.start) : null != a.start && (c += a.start);
      null == d ? (d = a.end) : null != a.start && (d += a.start);
      return { start: c, end: d };
    }
    function lt(a, b) {
      var c = wt(a.getAttribute("begin"), b),
        d = wt(a.getAttribute("end"), b);
      a = wt(a.getAttribute("dur"), b);
      null == d && null != a && (d = c + a);
      return { start: c, end: d };
    }
    function wt(a, b) {
      var c = null;
      if (xt.test(a)) {
        a = xt.exec(a);
        c = Number(a[1]);
        var d = Number(a[2]),
          e = Number(a[3]),
          f = Number(a[4]);
        f += (Number(a[5]) || 0) / b.h;
        e += f / b.frameRate;
        c = e + 60 * d + 3600 * c;
      } else if (yt.test(a)) c = zt(yt, a);
      else if (At.test(a)) c = zt(At, a);
      else if (Bt.test(a)) (a = Bt.exec(a)), (c = Number(a[1]) / b.frameRate);
      else if (Ct.test(a)) (a = Ct.exec(a)), (c = Number(a[1]) / b.g);
      else if (Dt.test(a)) c = zt(Dt, a);
      else if (a)
        throw new O(2, 2, 2001, "Could not parse cue time range in TTML");
      return c;
    }
    function zt(a, b) {
      a = a.exec(b);
      return null == a || "" == a[0]
        ? null
        : (Number(a[4]) || 0) / 1e3 +
            (Number(a[3]) || 0) +
            60 * (Number(a[2]) || 0) +
            3600 * (Number(a[1]) || 0);
    }
    M("shaka.text.TtmlTextParser", bt);
    bt.prototype.parseMedia = bt.prototype.parseMedia;
    bt.prototype.parseInit = bt.prototype.parseInit;
    function et(a, b, c, d) {
      this.frameRate = Number(a) || 30;
      this.h = Number(b) || 1;
      this.g = Number(d);
      0 == this.g && (this.g = a ? this.frameRate * this.h : 1);
      c &&
        (a = /^(\d+) (\d+)$/g.exec(c)) &&
        (this.frameRate *= Number(a[1]) / Number(a[2]));
    }
    var ft =
        /^(\d{1,2}(?:\.\d+)?|100(?:\.0+)?)% (\d{1,2}(?:\.\d+)?|100(?:\.0+)?)%$/,
      st = /^(\d{1,2}(?:\.\d+)?|100)%$/,
      rt = /^(\d+px|\d+em|\d*\.?\d+c)$/,
      gt = /^(\d+)px (\d+)px$/,
      xt = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
      yt = /^(?:(\d{2,}):)?(\d{2}):(\d{2})$/,
      At = /^(?:(\d{2,}):)?(\d{2}):(\d{2}\.\d{2,})$/,
      Bt = /^(\d*(?:\.\d*)?)f$/,
      Ct = /^(\d*(?:\.\d*)?)t$/,
      Dt = RegExp(
        "^(?:(\\d*(?:\\.\\d*)?)h)?(?:(\\d*(?:\\.\\d*)?)m)?(?:(\\d*(?:\\.\\d*)?)s)?(?:(\\d*(?:\\.\\d*)?)ms)?$"
      ),
      qt = { left: ub, center: "center", right: "end", start: ub, end: "end" },
      pt = { left: "line-left", center: "center", right: "line-right" },
      ct = [
        "http://www.w3.org/ns/ttml#parameter",
        "http://www.w3.org/2006/10/ttaf1#parameter",
      ],
      dt = [
        "http://www.w3.org/ns/ttml#styling",
        "http://www.w3.org/2006/10/ttaf1#styling",
      ],
      jt = [
        "http://www.smpte-ra.org/schemas/2052-1/2010/smpte-tt",
        "http://www.smpte-ra.org/schemas/2052-1/2013/smpte-tt",
      ];
    qd["application/ttml+xml"] = function () {
      return new bt();
    };
    function Et() {
      this.g = new bt();
    }
    Et.prototype.parseInit = function (a) {
      var b = !1;
      new T()
        .box("moov", Gf)
        .box("trak", Gf)
        .box("mdia", Gf)
        .box("minf", Gf)
        .box("stbl", Gf)
        .P("stsd", If)
        .box("stpp", function (c) {
          b = !0;
          c.parser.stop();
        })
        .parse(a);
      if (!b) throw new O(2, 2, 2007);
    };
    Et.prototype.parseMedia = function (a, b) {
      var c = this,
        d = !1,
        e = [];
      new T()
        .box(
          "mdat",
          Kf(function (f) {
            d = !0;
            e = e.concat(c.g.parseMedia(f, b));
          })
        )
        .parse(a, !1);
      if (!d) throw new O(2, 2, 2007);
      return e;
    };
    M("shaka.text.Mp4TtmlParser", Et);
    Et.prototype.parseMedia = Et.prototype.parseMedia;
    Et.prototype.parseInit = Et.prototype.parseInit;
    qd['application/mp4; codecs="stpp"'] = function () {
      return new Et();
    };
    qd['application/mp4; codecs="stpp.ttml"'] = function () {
      return new Et();
    };
    qd['application/mp4; codecs="stpp.ttml.im1t"'] = function () {
      return new Et();
    };
    qd['application/mp4; codecs="stpp.TTML.im1t"'] = function () {
      return new Et();
    };
    function Ft() {}
    Ft.prototype.parseInit = function () {};
    Ft.prototype.parseMedia = function (a, b) {
      a = Nc(a);
      a = a.replace(/\r\n|\r(?=[^\n]|$)/gm, "\n");
      var c = a.split(/\n{2,}/m);
      if (!/^WEBVTT($|[ \t\n])/m.test(c[0])) throw new O(2, 2, 2e3);
      a = b.periodStart;
      if (c[0].includes("X-TIMESTAMP-MAP")) {
        var d = c[0].match(/LOCAL:((?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3}))/m),
          e = c[0].match(/MPEGTS:(\d+)/m);
        if (d && e) {
          a = Gt(new Dk(d[1]));
          if (null == a) throw new O(2, 2, 2e3);
          e = Number(e[1]);
          for (d = b.segmentStart; 95443.7176888889 <= d; )
            (d -= 95443.7176888889), (e += 8589934592);
          a = b.periodStart + e / 9e4 - a;
        }
      }
      b = [];
      e = v(c[0].split("\n"));
      for (d = e.next(); !d.done; d = e.next())
        if (((d = d.value), /^Region:/.test(d))) {
          d = new Dk(d);
          var f = new pb();
          Lk(d);
          Jk(d);
          for (var g = Lk(d); g; ) {
            var h = f,
              k = g;
            (g = /^id=(.*)$/.exec(k))
              ? (h.id = g[1])
              : (g = /^width=(\d{1,2}|100)%$/.exec(k))
              ? (h.width = Number(g[1]))
              : (g = /^lines=(\d+)$/.exec(k))
              ? ((h.height = Number(g[1])), (h.heightUnits = 2))
              : (g = /^regionanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(k))
              ? ((h.regionAnchorX = Number(g[1])),
                (h.regionAnchorY = Number(g[2])))
              : (g = /^viewportanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(k))
              ? ((h.viewportAnchorX = Number(g[1])),
                (h.viewportAnchorY = Number(g[2])))
              : /^scroll=up$/.exec(k) && (h.scroll = "up");
            Jk(d);
            g = Lk(d);
          }
          b.push(f);
        }
      e = new Map();
      Ht(e);
      d = [];
      c = v(c.slice(1));
      for (f = c.next(); !f.done; f = c.next()) {
        f = f.value.split("\n");
        if (
          (1 != f.length || f[0]) &&
          !/^NOTE($|[ \t])/.test(f[0]) &&
          "STYLE" == f[0] &&
          f[1].includes("::cue")
        ) {
          h = "global";
          (g = f[1].match(/\((.*)\)/)) && (h = g.pop());
          g = f.slice(2, -1);
          f[1].includes("}") &&
            (k = /\{(.*?)\}/.exec(f[1])) &&
            (g = k[1].split(";"));
          k = new nb(0, 0, "");
          for (var l = !1, m = 0; m < g.length; m++) {
            var p = /^\s*([^:]+):\s*(.*)/.exec(g[m]);
            if (p) {
              var n = p[2].trim().replace(";", "");
              switch (p[1].trim()) {
                case "background-color":
                  l = !0;
                  k.backgroundColor = n;
                  break;
                case "color":
                  l = !0;
                  k.color = n;
                  break;
                case "font-family":
                  l = !0;
                  k.fontFamily = n;
                  break;
                case "font-size":
                  l = !0;
                  k.fontSize = n;
                  break;
                case "font-weight":
                  700 <= parseInt(n, 10) && ((l = !0), (k.fontWeight = 700));
                  break;
                case "font-style":
                  switch (n) {
                    case "normal":
                      l = !0;
                      k.fontStyle = xb;
                      break;
                    case "italic":
                      l = !0;
                      k.fontStyle = "italic";
                      break;
                    case "oblique":
                      (l = !0), (k.fontStyle = "oblique");
                  }
                  break;
                case "opacity":
                  l = !0;
                  k.opacity = parseFloat(n);
                  break;
                case "white-space":
                  (l = !0), (k.wrapLine = "noWrap" != n);
              }
            }
          }
          l && e.set(h, k);
        }
        m = a;
        if (
          (1 == f.length && !f[0]) ||
          /^NOTE($|[ \t])/.test(f[0]) ||
          "STYLE" == f[0]
        )
          f = null;
        else {
          h = null;
          f[0].includes("--\x3e") || ((h = f[0]), f.splice(0, 1));
          g = new Dk(f[0]);
          k = Gt(g);
          p = Kk(g, /[ \t]+--\x3e[ \t]+/g);
          l = Gt(g);
          if (null == k || null == p || null == l)
            throw new O(2, 2, 2001, "Could not parse cue time range in WebVTT");
          k += m;
          l += m;
          m = f.slice(1).join("\n").trim();
          e.has("global")
            ? ((f = e.get("global").clone()),
              (f.startTime = k),
              (f.endTime = l),
              (f.payload = ""))
            : (f = new nb(k, l, ""));
          It(m, f, e);
          Jk(g);
          for (k = Lk(g); k; ) Jt(f, k, b), Jk(g), (k = Lk(g));
          null != h && (f.id = h);
        }
        f && d.push(f);
      }
      return d;
    };
    function Ht(a) {
      for (var b = v(Object.entries(Cb)), c = b.next(); !c.done; c = b.next()) {
        var d = v(c.value);
        c = d.next().value;
        d = d.next().value;
        var e = new nb(0, 0, "");
        e.color = d;
        a.set(c, e);
      }
      b = v(Object.entries(Db));
      for (c = b.next(); !c.done; c = b.next())
        (d = v(c.value)),
          (c = d.next().value),
          (d = d.next().value),
          (e = new nb(0, 0, "")),
          (e.backgroundColor = d),
          a.set(c, e);
    }
    function It(a, b, c) {
      0 === c.size && Ht(c);
      a = Kt(a);
      var d = mg("<span>" + a + "</span>", "span");
      if (d) {
        var e = [];
        d = d.childNodes;
        if (1 == d.length) {
          var f = d[0];
          if (
            f.nodeType == Node.TEXT_NODE ||
            f.nodeType == Node.CDATA_SECTION_NODE
          ) {
            b.payload = a;
            return;
          }
        }
        a = v(d);
        for (d = a.next(); !d.done; d = a.next()) Lt(d.value, b, e, c);
        b.nestedCues = e;
      } else b.payload = a;
    }
    function Kt(a) {
      for (var b = [], c = -1, d = "", e = 0; e < a.length; e++)
        if ("/" === a[e]) {
          var f = a.indexOf(">", e);
          if (f <= e) return a;
          f = a.substring(e + 1, f);
          var g = b.pop();
          if (f && g) {
            if (g === f) d += "/" + f + ">";
            else {
              if (!g.startsWith("c.") || "c" !== f) return a;
              d += "/" + g + ">";
            }
            e += f.length + 1;
          } else return a;
        } else
          "<" === a[e]
            ? (c = e + 1)
            : ">" === a[e] && 0 < c && (b.push(a.substr(c, e - c)), (c = -1)),
            (d += a[e]);
      return d;
    }
    function Mt(a, b) {
      return a && 0 < a.length ? a : b;
    }
    function Lt(a, b, c, d) {
      var e = b.clone();
      if (a.nodeType === Node.ELEMENT_NODE && a.nodeName)
        for (
          var f = v(a.nodeName.split(/[ .]+/)), g = f.next();
          !g.done;
          g = f.next()
        ) {
          g = g.value;
          if (d.has(g)) {
            var h = d.get(g);
            h &&
              ((e.backgroundColor = Mt(h.backgroundColor, e.backgroundColor)),
              (e.color = Mt(h.color, e.color)),
              (e.fontFamily = Mt(h.fontFamily, e.fontFamily)),
              (e.fontSize = Mt(h.fontSize, e.fontSize)),
              (e.fontWeight = h.fontWeight),
              (e.fontStyle = h.fontStyle),
              (e.opacity = h.opacity),
              (e.wrapLine = h.wrapLine));
          }
          switch (g) {
            case "b":
              e.fontWeight = 700;
              break;
            case "i":
              e.fontStyle = "italic";
              break;
            case "u":
              e.textDecoration.push("underline");
          }
        }
      if (dg(a))
        for (
          f = !0, d = v(a.textContent.split("\n")), a = d.next();
          !a.done;
          a = d.next()
        )
          (a = a.value),
            f || ((f = b.clone()), (f.lineBreak = !0), c.push(f)),
            0 < a.length && ((f = e.clone()), (f.payload = a), c.push(f)),
            (f = !1);
      else
        for (b = v(a.childNodes), a = b.next(); !a.done; a = b.next())
          Lt(a.value, e, c, d);
    }
    function Jt(a, b, c) {
      var d;
      if ((d = /^align:(start|middle|center|end|left|right)$/.exec(b)))
        (b = d[1]),
          "middle" == b
            ? (a.textAlign = rb)
            : (a.textAlign = zb[b.toUpperCase()]);
      else if ((d = /^vertical:(lr|rl)$/.exec(b)))
        a.writingMode = "lr" == d[1] ? "vertical-lr" : "vertical-rl";
      else if ((d = /^size:([\d.]+)%$/.exec(b))) a.size = Number(d[1]);
      else if (
        (d =
          /^position:([\d.]+)%(?:,(line-left|line-right|center|start|end))?$/.exec(
            b
          ))
      )
        (a.position = Number(d[1])),
          d[2] &&
            ((b = d[2]),
            (a.positionAlign =
              "line-left" == b || "start" == b
                ? "line-left"
                : "line-right" == b || "end" == b
                ? "line-right"
                : "center"));
      else if ((d = /^region:(.*)$/.exec(b))) {
        if ((b = Nt(c, d[1]))) a.region = b;
      } else if ((c = /^line:([\d.]+)%(?:,(start|end|center))?$/.exec(b)))
        (a.lineInterpretation = 1),
          (a.line = Number(c[1])),
          c[2] && (a.lineAlign = Bb[c[2].toUpperCase()]);
      else if ((c = /^line:(-?\d+)(?:,(start|end|center))?$/.exec(b)))
        (a.lineInterpretation = tb),
          (a.line = Number(c[1])),
          c[2] && (a.lineAlign = Bb[c[2].toUpperCase()]);
    }
    function Nt(a, b) {
      a = a.filter(function (c) {
        return c.id == b;
      });
      return a.length ? a[0] : null;
    }
    function Gt(a) {
      a = Kk(a, /(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{2,3})/g);
      if (null == a) return null;
      var b = Number(a[2]),
        c = Number(a[3]);
      return 59 < b || 59 < c
        ? null
        : Number(a[4]) / 1e3 + c + 60 * b + 3600 * (Number(a[1]) || 0);
    }
    M("shaka.text.VttTextParser", Ft);
    Ft.prototype.parseMedia = Ft.prototype.parseMedia;
    Ft.prototype.parseInit = Ft.prototype.parseInit;
    qd["text/vtt"] = function () {
      return new Ft();
    };
    qd['text/vtt; codecs="vtt"'] = function () {
      return new Ft();
    };
    qd['text/vtt; codecs="wvtt"'] = function () {
      return new Ft();
    };
    function Ot() {
      this.g = null;
    }
    Ot.prototype.parseInit = function (a) {
      var b = this,
        c = !1;
      new T()
        .box("moov", Gf)
        .box("trak", Gf)
        .box("mdia", Gf)
        .P("mdhd", function (d) {
          d = Nf(d.reader, d.version);
          b.g = d.timescale;
        })
        .box("minf", Gf)
        .box("stbl", Gf)
        .P("stsd", If)
        .box("wvtt", function () {
          c = !0;
        })
        .parse(a);
      if (!this.g) throw new O(2, 2, 2008);
      if (!c) throw new O(2, 2, 2008);
    };
    Ot.prototype.parseMedia = function (a, b) {
      if (!this.g) throw new O(2, 2, 2008);
      var c = 0,
        d = [],
        e,
        f = [],
        g = !1,
        h = !1,
        k = !1,
        l = null;
      new T()
        .box("moof", Gf)
        .box("traf", Gf)
        .P("tfdt", function (z) {
          g = !0;
          c = Mf(z.reader, z.version).ed;
        })
        .P("tfhd", function (z) {
          l = Lf(z.reader, z.flags).Td;
        })
        .P("trun", function (z) {
          h = !0;
          d = Of(z.reader, z.version, z.flags).ge;
        })
        .box(
          "mdat",
          Kf(function (z) {
            k = !0;
            e = z;
          })
        )
        .parse(a, !1);
      if (!k && !g && !h) throw new O(2, 2, 2008);
      a = c;
      for (var m = new S(e, 0), p = v(d), n = p.next(); !n.done; n = p.next()) {
        n = n.value;
        var r = n.Gd || l,
          u = n.Oc ? c + n.Oc : a;
        a = u + (r || 0);
        var t = 0;
        do {
          var w = m.K();
          t += w;
          var x = m.K(),
            C = null;
          "vttc" == Ff(x) ? 8 < w && (C = m.ib(w - 8)) : m.skip(w - 8);
          r &&
            C &&
            ((w = Pt(
              C,
              b.periodStart + u / this.g,
              b.periodStart + a / this.g
            )),
            f.push(w));
        } while (n.sampleSize && t < n.sampleSize);
      }
      return f.filter(Ub);
    };
    function Pt(a, b, c) {
      var d, e, f;
      new T()
        .box(
          "payl",
          Kf(function (g) {
            d = Nc(g);
          })
        )
        .box(
          "iden",
          Kf(function (g) {
            e = Nc(g);
          })
        )
        .box(
          "sttg",
          Kf(function (g) {
            f = Nc(g);
          })
        )
        .parse(a);
      return d ? Qt(d, e, f, b, c) : null;
    }
    function Qt(a, b, c, d, e) {
      d = new nb(d, e, "");
      It(a, d, new Map());
      b && (d.id = b);
      if (c)
        for (a = new Dk(c), b = Lk(a); b; ) Jt(d, b, []), Jk(a), (b = Lk(a));
      return d;
    }
    M("shaka.text.Mp4VttParser", Ot);
    Ot.prototype.parseMedia = Ot.prototype.parseMedia;
    Ot.prototype.parseInit = Ot.prototype.parseInit;
    qd['application/mp4; codecs="wvtt"'] = function () {
      return new Ot();
    };
    function Rt() {}
    Rt.prototype.parseInit = function () {};
    Rt.prototype.parseMedia = function (a) {
      var b = Nc(a).replace(/\r+/g, "");
      b = b.trim();
      a = [];
      if ("" == b) return a;
      b = v(b.split("\n\n"));
      for (var c = b.next(); !c.done; c = b.next()) {
        c = c.value.split("\n");
        var d = new Dk(c[0]),
          e = St(d),
          f = Kk(d, /,/g);
        d = St(d);
        if (null == e || null == f || null == d)
          throw new O(
            2,
            2,
            2001,
            "Could not parse cue time range in SubViewer"
          );
        a.push(new nb(e, d, c.slice(1).join("\n").trim()));
      }
      return a;
    };
    function St(a) {
      a = Kk(a, /(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{2,3})/g);
      if (null == a) return null;
      var b = Number(a[2]),
        c = Number(a[3]);
      return 59 < b || 59 < c
        ? null
        : Number(a[4]) / 1e3 + c + 60 * b + 3600 * (Number(a[1]) || 0);
    }
    M("shaka.text.SbvTextParser", Rt);
    Rt.prototype.parseMedia = Rt.prototype.parseMedia;
    Rt.prototype.parseInit = Rt.prototype.parseInit;
    qd["text/x-subviewer"] = function () {
      return new Rt();
    };
    function Tt() {
      this.g = new Ft();
    }
    Tt.prototype.parseInit = function () {};
    Tt.prototype.parseMedia = function (a, b) {
      a = Nc(a);
      a = Ut(a);
      a = N(Sc(a));
      return this.g.parseMedia(a, b);
    };
    function Ut(a) {
      var b = "WEBVTT\n\n";
      if ("" == a) return b;
      a = a.replace(/\r+/g, "");
      a = a.trim();
      a = v(a.split("\n\n"));
      for (var c = a.next(); !c.done; c = a.next())
        (c = c.value.split(/\n/)),
          c[0].match(/\d+/) && c.shift(),
          (c[0] = c[0].replace(/,/g, ".")),
          (b += c.join("\n") + "\n\n");
      return b;
    }
    M("shaka.text.SrtTextParser", Tt);
    Tt.srt2webvtt = Ut;
    Tt.prototype.parseMedia = Tt.prototype.parseMedia;
    Tt.prototype.parseInit = Tt.prototype.parseInit;
    qd["text/srt"] = function () {
      return new Tt();
    };
    function Vt() {}
    Vt.prototype.parseInit = function () {};
    Vt.prototype.parseMedia = function (a) {
      var b = "",
        c = "";
      a = Nc(a).split(/\r?\n\s*\r?\n/);
      a = v(a);
      for (var d = a.next(); !d.done; d = a.next()) {
        var e = Wt.exec(d.value);
        e &&
          ((d = e[1]),
          (e = e[2]),
          "V4 Styles" == d || "V4+ Styles" == d
            ? (b = e)
            : "Events" == d && (c = e));
      }
      a = [];
      d = null;
      b = v(b.split(/\r?\n/));
      for (var f = b.next(); !f.done; f = b.next())
        if (((e = f.value), !/^\s*;/.test(e) && (f = Xt.exec(e))))
          if (((e = f[1].trim()), (f = f[2].trim()), "Format" == e))
            d = f.split(Yt);
          else if ("Style" == e) {
            e = f.split(Yt);
            f = {};
            for (var g = 0; g < d.length && g < e.length; g++) f[d[g]] = e[g];
            a.push(f);
          }
      d = [];
      b = null;
      e = {};
      c = v(c.split(/\r?\n/));
      for (f = c.next(); !f.done; e = { cd: e.cd }, f = c.next())
        if (((f = f.value), !/^\s*;/.test(f) && (g = Xt.exec(f))))
          if (((f = g[1].trim()), (g = g[2].trim()), "Format" == f))
            b = g.split(Yt);
          else if ("Dialogue" == f) {
            g = g.split(Yt);
            f = {};
            for (var h = 0; h < b.length && h < g.length; h++) f[b[h]] = g[h];
            h = Zt(f.Start);
            var k = Zt(f.End);
            g = new nb(
              h,
              k,
              g
                .slice(b.length - 1)
                .join(",")
                .replace(/\\N/g, "\n")
                .replace(/\{[^}]+\}/g, "")
            );
            e.cd = f.Style;
            (f = a.find(
              (function (l) {
                return function (m) {
                  return m.Name == l.cd;
                };
              })(e)
            )) && $t(g, f);
            d.push(g);
          }
      return d;
    };
    function $t(a, b) {
      var c = b.Fontname;
      c && (a.fontFamily = c);
      if ((c = b.Fontsize)) a.fontSize = c + "px";
      if ((c = b.PrimaryColour)) if ((c = au(c))) a.color = c;
      if ((c = b.BackColour)) if ((c = au(c))) a.backgroundColor = c;
      b.Bold && (a.fontWeight = 700);
      b.Italic && (a.fontStyle = "italic");
      b.Underline && a.textDecoration.push("underline");
      if ((c = b.Spacing)) a.letterSpacing = c + "px";
      if ((c = b.Alignment))
        switch (parseInt(c, 10)) {
          case 1:
            a.displayAlign = vb;
            a.textAlign = "start";
            break;
          case 2:
            a.displayAlign = vb;
            a.textAlign = rb;
            break;
          case 3:
            a.displayAlign = vb;
            a.textAlign = "end";
            break;
          case 5:
            a.displayAlign = "before";
            a.textAlign = "start";
            break;
          case 6:
            a.displayAlign = "before";
            a.textAlign = rb;
            break;
          case 7:
            a.displayAlign = "before";
            a.textAlign = "end";
            break;
          case 9:
            a.displayAlign = "center";
            a.textAlign = "start";
            break;
          case 10:
            a.displayAlign = "center";
            a.textAlign = rb;
            break;
          case 11:
            (a.displayAlign = "center"), (a.textAlign = "end");
        }
      if ((b = b.AlphaLevel)) a.opacity = parseFloat(b);
    }
    function au(a) {
      a = parseInt(a.replace("&H", ""), 16);
      return 0 <= a
        ? "rgba(" +
            (a & 255) +
            "," +
            ((a >> 8) & 255) +
            "," +
            ((a >> 16) & 255) +
            "," +
            (((a >> 24) & 255) ^ 255) / 255 +
            ")"
        : null;
    }
    function Zt(a) {
      a = bu.exec(a);
      return (
        3600 * (a[1] ? parseInt(a[1].replace(":", ""), 10) : 0) +
        60 * parseInt(a[2], 10) +
        parseFloat(a[3])
      );
    }
    M("shaka.text.SsaTextParser", Vt);
    Vt.prototype.parseMedia = Vt.prototype.parseMedia;
    Vt.prototype.parseInit = Vt.prototype.parseInit;
    var Wt = /^\s*\[([^\]]+)\]\r?\n([\s\S]*)/,
      Xt = /^\s*([^:]+):\s*(.*)/,
      Yt = /\s*,\s*/,
      bu = /^(\d+:)?(\d{1,2}):(\d{1,2}(?:[.]\d{1,3})?)?$/;
    qd["text/x-ssa"] = function () {
      return new Vt();
    }; /*
 @license
 EME Encryption Scheme Polyfill
 Copyright 2019 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
    function cu() {}
    var du;
    function eu() {
      du
        ? console.debug("EmeEncryptionSchemePolyfill: Already installed.")
        : navigator.requestMediaKeySystemAccess &&
          MediaKeySystemAccess.prototype.getConfiguration
        ? ((du = navigator.requestMediaKeySystemAccess),
          console.debug(
            "EmeEncryptionSchemePolyfill: Waiting to detect encryptionScheme support."
          ),
          (navigator.requestMediaKeySystemAccess = fu))
        : console.debug("EmeEncryptionSchemePolyfill: EME not found");
    }
    function fu(a, b) {
      var c = this,
        d;
      return L(function (e) {
        if (1 == e.g)
          return (
            console.assert(
              c == navigator,
              'bad "this" for requestMediaKeySystemAccess'
            ),
            y(e, du.call(c, a, b), 2)
          );
        d = e.h;
        if (gu(d))
          return (
            console.debug(
              "EmeEncryptionSchemePolyfill: Native encryptionScheme support found."
            ),
            (navigator.requestMediaKeySystemAccess = du),
            e.return(d)
          );
        console.debug(
          "EmeEncryptionSchemePolyfill: No native encryptionScheme support found. Patching encryptionScheme support."
        );
        navigator.requestMediaKeySystemAccess = hu;
        return e.return(hu.call(c, a, b));
      });
    }
    function hu(a, b) {
      var c = this,
        d,
        e,
        f,
        g,
        h,
        k,
        l,
        m,
        p,
        n;
      return L(function (r) {
        if (1 == r.g) {
          console.assert(
            c == navigator,
            'bad "this" for requestMediaKeySystemAccess'
          );
          d = iu(a);
          e = [];
          f = v(b);
          for (g = f.next(); !g.done; g = f.next())
            (h = g.value),
              (k = ju(h.videoCapabilities, d)),
              (l = ju(h.audioCapabilities, d)),
              (h.videoCapabilities &&
                h.videoCapabilities.length &&
                !k.length) ||
                (h.audioCapabilities &&
                  h.audioCapabilities.length &&
                  !l.length) ||
                ((m = Object.assign({}, h)),
                (m.videoCapabilities = k),
                (m.audioCapabilities = l),
                e.push(m));
          if (!e.length)
            throw (
              ((p = Error("Unsupported keySystem or supportedConfigurations.")),
              (p.name = "NotSupportedError"),
              (p.code = DOMException.NOT_SUPPORTED_ERR),
              p)
            );
          return y(r, du.call(c, a, e), 2);
        }
        n = r.h;
        return r.return(new ku(n, d));
      });
    }
    function ju(a, b) {
      return a
        ? a.filter(function (c) {
            return !c.encryptionScheme || c.encryptionScheme == b;
          })
        : a;
    }
    M("EmeEncryptionSchemePolyfill", cu);
    cu.install = eu;
    function lu() {}
    var mu;
    function nu() {
      mu
        ? console.debug("McEncryptionSchemePolyfill: Already installed.")
        : navigator.mediaCapabilities
        ? ((mu = navigator.mediaCapabilities.decodingInfo),
          console.debug(
            "McEncryptionSchemePolyfill: Waiting to detect encryptionScheme support."
          ),
          (navigator.mediaCapabilities.decodingInfo = ou))
        : console.debug(
            "McEncryptionSchemePolyfill: MediaCapabilities not found"
          );
    }
    function ou(a) {
      var b = this,
        c,
        d,
        e;
      return L(function (f) {
        switch (f.g) {
          case 1:
            return (
              console.assert(
                b == navigator.mediaCapabilities,
                'bad "this" for decodingInfo'
              ),
              y(f, mu.call(b, a), 2)
            );
          case 2:
            c = f.h;
            if (!a.keySystemConfiguration) return f.return(c);
            if ((d = c.keySystemAccess) && gu(d))
              return (
                console.debug(
                  "McEncryptionSchemePolyfill: Native encryptionScheme support found."
                ),
                (navigator.mediaCapabilities.decodingInfo = mu),
                f.return(c)
              );
            console.debug(
              "McEncryptionSchemePolyfill: No native encryptionScheme support found. Patching encryptionScheme support."
            );
            navigator.mediaCapabilities.decodingInfo = pu;
            if (d) {
              f.A(3);
              break;
            }
            e = c;
            return y(f, qu(a), 4);
          case 4:
            return (e.keySystemAccess = f.h), f.return(c);
          case 3:
            return f.return(pu.call(b, a));
        }
      });
    }
    function pu(a) {
      var b = this,
        c,
        d,
        e,
        f,
        g,
        h,
        k,
        l;
      return L(function (m) {
        switch (m.g) {
          case 1:
            return (
              console.assert(
                b == navigator.mediaCapabilities,
                'bad "this" for decodingInfo'
              ),
              (c = null),
              a.keySystemConfiguration &&
              ((d = a.keySystemConfiguration),
              (e = d.keySystem),
              (f = d.audio && d.audio.encryptionScheme),
              (g = d.video && d.video.encryptionScheme),
              (c = iu(e)),
              (h = {
                powerEfficient: !1,
                smooth: !1,
                supported: !1,
                keySystemAccess: null,
                configuration: a,
              }),
              (f && f != c) || (g && g != c))
                ? m.return(h)
                : y(m, mu.call(b, a), 2)
            );
          case 2:
            k = m.h;
            if (k.keySystemAccess) {
              k.keySystemAccess = new ku(k.keySystemAccess, c);
              m.A(3);
              break;
            }
            if (!a.keySystemConfiguration) {
              m.A(3);
              break;
            }
            l = k;
            return y(m, qu(a), 5);
          case 5:
            l.keySystemAccess = m.h;
          case 3:
            return m.return(k);
        }
      });
    }
    function qu(a) {
      var b, c;
      return L(function (d) {
        if (1 == d.g) {
          var e = a.keySystemConfiguration,
            f = [],
            g = [];
          e.audio &&
            f.push({
              robustness: e.audio.robustness || "",
              contentType: a.audio.contentType,
            });
          e.video &&
            g.push({
              robustness: e.video.robustness || "",
              contentType: a.video.contentType,
            });
          e = {
            initDataTypes: e.initDataType ? [e.initDataType] : [],
            distinctiveIdentifier: e.distinctiveIdentifier,
            persistentState: e.persistentState,
            sessionTypes: e.sessionTypes,
          };
          f.length && (e.audioCapabilities = f);
          g.length && (e.videoCapabilities = g);
          b = e;
          return y(
            d,
            navigator.requestMediaKeySystemAccess(
              a.keySystemConfiguration.keySystem,
              [b]
            ),
            2
          );
        }
        c = d.h;
        return d.return(c);
      });
    }
    M("McEncryptionSchemePolyfill", lu);
    lu.install = nu;
    function ku(a, b) {
      this.h = a;
      this.g = b;
      this.keySystem = a.keySystem;
    }
    ku.prototype.getConfiguration = function () {
      var a = this.h.getConfiguration();
      if (a.videoCapabilities)
        for (
          var b = v(a.videoCapabilities), c = b.next();
          !c.done;
          c = b.next()
        )
          c.value.encryptionScheme = this.g;
      if (a.audioCapabilities)
        for (b = v(a.audioCapabilities), c = b.next(); !c.done; c = b.next())
          c.value.encryptionScheme = this.g;
      return a;
    };
    ku.prototype.createMediaKeys = function () {
      return this.h.createMediaKeys();
    };
    function iu(a) {
      if (
        a.startsWith("com.widevine") ||
        a.startsWith("com.microsoft") ||
        a.startsWith("com.chromecast") ||
        a.startsWith("com.adobe") ||
        a.startsWith("org.w3")
      )
        return "cenc";
      if (a.startsWith("com.apple")) return "cbcs-1-9";
      console.warn(
        "EmeEncryptionSchemePolyfill: Unknown key system:",
        a,
        "Please contribute!"
      );
      return null;
    }
    function gu(a) {
      a = a.getConfiguration();
      var b = a.audioCapabilities && a.audioCapabilities[0];
      return (a = (a.videoCapabilities && a.videoCapabilities[0]) || b) &&
        void 0 !== a.encryptionScheme
        ? !0
        : !1;
    }
    function ru() {}
    function nr() {
      eu();
      nu();
    }
    M("EncryptionSchemePolyfills", ru);
    ru.install = nr;
    "undefined" !== typeof module && module.exports && (module.exports = ru);
  }).call(exportTo, innerGlobal, innerGlobal, undefined);
  if (typeof exports != "undefined")
    for (var k in exportTo.shaka) exports[k] = exportTo.shaka[k];
  else if (typeof define == "function" && define.amd)
    define(function () {
      return exportTo.shaka;
    });
  else innerGlobal.shaka = exportTo.shaka;
  console.log(">>>> TEST VIKTOR");
})();

//# sourceMappingURL=shaka-player.showmax.map
