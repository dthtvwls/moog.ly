window.google = {};
google.doodle = {};
(function () {
  try {
    var g = void 0,
      i = !0,
      j = null,
      l = !1,
      n, o = this,
      aa = function () {},
      ba = function (a) {
        var b = typeof a;
        if ("object" == b) if (a) {
          if (a instanceof Array) return "array";
          if (a instanceof Object) return b;
          var c = Object.prototype.toString.call(a);
          if ("[object Window]" == c) return "object";
          if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
          if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
      },
      q = function (a) {
        return "array" == ba(a)
      },
      ca = function (a) {
        var b = ba(a);
        return "array" == b || "object" == b && "number" == typeof a.length
      },
      da = function (a) {
        return "string" == typeof a
      },
      ea = function (a) {
        return "function" == ba(a)
      },
      s = function (a) {
        return a[fa] || (a[fa] = ++ga)
      },
      fa = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36),
      ga = 0,
      ha = function (a, b, c) {
        return a.call.apply(a.bind, arguments)
      },
      ia = function (a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
          var d = Array.prototype.slice.call(arguments, 2);
          return function () {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
          }
        }
        return function () {
          return a.apply(b, arguments)
        }
      },
      u = function (a, b, c) {
        u = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia;
        return u.apply(j, arguments)
      },
      ja = Date.now ||
    function () {
      return +new Date
    }, ka = function (a, b) {
      var c = a.split("."),
        d = o;
      !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
      for (var e; c.length && (e = c.shift());)!c.length && b !== g ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
    }, v = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.u = b.prototype;
      a.prototype = new c
    };
    Function.prototype.bind = Function.prototype.bind ||
    function (a, b) {
      if (1 < arguments.length) {
        var c = Array.prototype.slice.call(arguments, 1);
        c.unshift(this, a);
        return u.apply(j, c)
      }
      return u(this, a)
    };
    var la = function (a) {
        Error.captureStackTrace ? Error.captureStackTrace(this, la) : this.stack = Error().stack || "";
        a && (this.message = "" + a)
      };
    v(la, Error);
    la.prototype.name = "CustomError";
    var ma = function (a, b) {
        for (var c = 1; c < arguments.length; c++) var d = ("" + arguments[c]).replace(/\$/g, "$$$$"),
          a = a.replace(/\%s/, d);
        return a
      },
      na = function (a, b) {
        for (var c = 0, d = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = ("" + b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(d.length, e.length), h = 0; 0 == c && h < f; h++) {
          var m = d[h] || "",
            p = e[h] || "",
            k = RegExp("(\\d*)(\\D*)", "g"),
            z = RegExp("(\\d*)(\\D*)", "g");
          do {
            var r = k.exec(m) || ["", "", ""],
              t = z.exec(p) || ["", "", ""];
            if (0 == r[0].length && 0 == t[0].length) break;
            c = ((0 == r[1].length ? 0 : parseInt(r[1], 10)) < (0 == t[1].length ? 0 : parseInt(t[1], 10)) ? -1 : (0 == r[1].length ? 0 : parseInt(r[1], 10)) > (0 == t[1].length ? 0 : parseInt(t[1], 10)) ? 1 : 0) || ((0 == r[2].length) < (0 == t[2].length) ? -1 : (0 == r[2].length) > (0 == t[2].length) ? 1 : 0) || (r[2] < t[2] ? -1 : r[2] > t[2] ? 1 : 0)
          } while (0 == c)
        }
        return c
      };
    var oa = function (a, b) {
        b.unshift(a);
        la.call(this, ma.apply(j, b));
        b.shift()
      };
    v(oa, la);
    oa.prototype.name = "AssertionError";
    var pa = function (a, b, c) {
        if (!a) {
          var d = Array.prototype.slice.call(arguments, 2),
            e = "Assertion failed";
          if (b) var e = e + (": " + b),
            f = d;
          throw new oa("" + e, f || []);
        }
      },
      qa = function (a, b) {
        throw new oa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
      };
    var x = Array.prototype,
      ra = x.indexOf ?
    function (a, b, c) {
      pa(a.length != j);
      return x.indexOf.call(a, b, c)
    } : function (a, b, c) {
      c = c == j ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
      if (da(a)) return !da(b) || 1 != b.length ? -1 : a.indexOf(b, c);
      for (; c < a.length; c++) if (c in a && a[c] === b) return c;
      return -1
    }, y = x.forEach ?
    function (a, b, c) {
      pa(a.length != j);
      x.forEach.call(a, b, c)
    } : function (a, b, c) {
      for (var d = a.length, e = da(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    }, sa = x.filter ?
    function (a, b, c) {
      pa(a.length != j);
      return x.filter.call(a, b, c)
    } : function (a, b, c) {
      for (var d = a.length, e = [], f = 0, h = da(a) ? a.split("") : a, m = 0; m < d; m++) if (m in h) {
        var p = h[m];
        b.call(c, p, m, a) && (e[f++] = p)
      }
      return e
    }, ta = function (a, b) {
      var c = [];
      if (a.reduce) return a.reduce(b, c);
      var d = c;
      y(a, function (c, f) {
        d = b.call(g, d, c, f, a)
      });
      return d
    }, ua = x.some ?
    function (a, b, c) {
      pa(a.length != j);
      return x.some.call(a, b, c)
    } : function (a, b, c) {
      for (var d = a.length, e = da(a) ? a.split("") : a, f = 0; f < d; f++) if (f in e && b.call(c, e[f], f, a)) return i;
      return l
    }, va = function (a, b) {
      var c = ra(a, b);
      0 <= c && (pa(a.length != j), x.splice.call(a, c, 1))
    }, wa = function (a, b, c) {
      pa(a.length != j);
      return 2 >= arguments.length ? x.slice.call(a, b) : x.slice.call(a, b, c)
    }, xa = function (a, b) {
      return a > b ? 1 : a < b ? -1 : 0
    };
    var ya = function (a, b) {
        for (var c in a) b.call(g, a[c], c, a)
      },
      Aa = function () {
        var a = za,
          b;
        for (b in a) return l;
        return i
      },
      Ba = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
      Ca = function (a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
          d = arguments[e];
          for (c in d) a[c] = d[c];
          for (var f = 0; f < Ba.length; f++) c = Ba[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
      };
    var Ea, Fa, Ga, Ha, Ia = function () {
        return o.navigator ? o.navigator.userAgent : j
      };
    Ha = Ga = Fa = Ea = l;
    var Ja;
    if (Ja = Ia()) {
      var Ka = o.navigator;
      Ea = 0 == Ja.indexOf("Opera");
      Fa = !Ea && -1 != Ja.indexOf("MSIE");
      Ga = !Ea && -1 != Ja.indexOf("WebKit");
      Ha = !Ea && !Ga && "Gecko" == Ka.product
    }
    var La = Ea,
      B = Fa,
      Ma = Ha,
      Na = Ga,
      Oa;
    a: {
      var Pa = "",
        Qa;
      if (La && o.opera) var Ra = o.opera.version,
        Pa = "function" == typeof Ra ? Ra() : Ra;
      else if (Ma ? Qa = /rv\:([^\);]+)(\)|;)/ : B ? Qa = /MSIE\s+([^\);]+)(\)|;)/ : Na && (Qa = /WebKit\/(\S+)/), Qa) var Sa = Qa.exec(Ia()),
        Pa = Sa ? Sa[1] : "";
      if (B) {
        var Ta, Ua = o.document;
        Ta = Ua ? Ua.documentMode : g;
        if (Ta > parseFloat(Pa)) {
          Oa = "" + Ta;
          break a
        }
      }
      Oa = Pa
    }
    var Va = Oa,
      Wa = {},
      C = function (a) {
        return Wa[a] || (Wa[a] = 0 <= na(Va, a))
      },
      Xa = {},
      Ya = function () {
        return Xa[9] || (Xa[9] = B && !! document.documentMode && 9 <= document.documentMode)
      };
    !B || Ya();
    !Ma && !B || B && Ya() || Ma && C("1.9.1");
    B && C("9");
    var Za = function (a) {
        a = a.className;
        return da(a) && a.match(/\S+/g) || []
      },
      ab = function (a, b) {
        for (var c = Za(a), d = wa(arguments, 1), e = c, f = 0; f < d.length; f++) 0 <= ra(e, d[f]) || e.push(d[f]);
        a.className = c.join(" ")
      },
      cb = function (a, b) {
        var c = Za(a),
          d = wa(arguments, 1),
          c = bb(c, d);
        a.className = c.join(" ")
      },
      bb = function (a, b) {
        return sa(a, function (a) {
          return !(0 <= ra(b, a))
        })
      };
    var db = l,
      eb = "",
      fb = function (a) {
        a = a.match(/[\d]+/g);
        a.length = 3;
        return a.join(".")
      };
    if (navigator.plugins && navigator.plugins.length) {
      var gb = navigator.plugins["Shockwave Flash"];
      gb && (db = i, gb.description && (eb = fb(gb.description)));
      navigator.plugins["Shockwave Flash 2.0"] && (db = i, eb = "2.0.0.11")
    } else if (navigator.mimeTypes && navigator.mimeTypes.length) {
      var hb = navigator.mimeTypes["application/x-shockwave-flash"];
      (db = hb && hb.enabledPlugin) && (eb = fb(hb.enabledPlugin.description))
    } else try {
      var ib = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
        db = i,
        eb = fb(ib.GetVariable("$version"))
    } catch (jb) {
      try {
        ib = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), db = i, eb = "6.0.21"
      } catch (kb) {
        try {
          ib = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), db = i, eb = fb(ib.GetVariable("$version"))
        } catch (lb) {}
      }
    }
    var mb = db,
      nb = eb;
    var ob, D, E, pb, qb = j,
      rb = function (a) {
        return (a = E.getElementById(a)) && a.ssku ? a : j
      };
    ka("google.doodle.frc", function () {
      "function" == typeof qb && qb()
    });
    ka("google.doodle.fir", function () {
      pb = rb("doodle-moog-flash-1") || rb("doodle-moog-flash-2");
      return pb !== j
    });
    var sb = function (a) {
        this.c = a
      };
    sb.prototype.b = function () {};
    sb.prototype.a = function () {
      this.c.d()
    };
    var tb = function (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c
      };
    n = tb.prototype;
    n.K = function (a) {
      this.a.osv(this.b, this.c, a)
    };
    n.ia = function (a) {
      this.a.oswf(this.b, this.c, a)
    };
    n.Aa = function (a) {
      this.a.ospb(this.b, this.c, a)
    };
    n.ha = function (a) {
      this.a.osr(this.b, this.c, a)
    };
    n.cb = function () {
      this.a.oskpc(this.b, this.c, i)
    };
    n.ab = function () {
      this.a.oskpc(this.b, this.c, l)
    };
    n.Ca = function () {
      this.a.osfm(this.b, this.c, i)
    };
    n.Ba = function () {
      this.a.osfm(this.b, this.c, l)
    };
    n.Za = function (a) {
      this.a.osml(this.b, this.c, a)
    };
    n.bb = function () {
      this.a.osg(this.b, this.c, i)
    };
    n.$a = function () {
      this.a.osg(this.b, this.c, l)
    };
    n.Ra = function (a) {
      this.a.osgd(this.b, this.c, a)
    };
    n.Ma = function (a) {
      this.a.osan(this.b, this.c, a)
    };
    n.Oa = function (a) {
      this.a.oegsat(this.b, this.c, a)
    };
    n.Pa = function (a) {
      this.a.oegsdt(this.b, this.c, a)
    };
    n.Qa = function (a) {
      this.a.oegssl(this.b, this.c, a)
    };
    var ub = function (a, b, c) {
        this.c = a;
        this.a = c;
        this.b = b
      };
    n = ub.prototype;
    n.Sa = function (a) {
      this.g && this.g(this.b);
      this.c.sskd(this.b, a)
    };
    n.Ha = function (a) {
      this.g = a
    };
    n.Ta = function () {
      this.c.ssku(this.b)
    };
    n.K = function (a) {
      this.c.ssv(this.b, a)
    };
    n.Ya = function (a) {
      this.c.sslpc(this.b, a)
    };
    n.Ua = function (a) {
      this.c.sslpct(this.b, a)
    };
    n.Va = function (a) {
      this.c.sslpcat(this.b, a)
    };
    n.Wa = function (a) {
      this.c.sslpcdt(this.b, a)
    };
    n.Xa = function (a) {
      this.c.sslpcsl(this.b, a)
    };
    n.W = function () {
      return j
    };
    n.connect = function () {};
    n.pa = function () {};
    var F = function () {};
    F.prototype.U = l;
    F.prototype.L = function () {
      this.U || (this.U = i, this.s())
    };
    var G = function (a, b) {
        a.G || (a.G = []);
        a.G.push(b)
      };
    F.prototype.s = function () {
      this.G && vb.apply(j, this.G);
      if (this.V) for (; this.V.length;) this.V.shift()()
    };
    var vb = function (a) {
        for (var b = 0, c = arguments.length; b < c; ++b) {
          var d = arguments[b];
          ca(d) ? vb.apply(j, d) : d && "function" == typeof d.L && d.L()
        }
      };
    var xb = function (a, b, c, d, e, f) {
        this.ea = a;
        this.a = a.createBiquadFilter();
        this.a.type = 0;
        this.b = b;
        this.e = c;
        this.c = d;
        this.g = e;
        this.k = f;
        wb(this)
      };
    xb.prototype.za = function () {
      var a = this.ea.currentTime;
      this.a.frequency.cancelScheduledValues(a);
      this.a.frequency.value = this.b;
      this.a.frequency.setValueAtTime(this.b, a);
      var b = this.e * this.b;
      this.a.frequency.exponentialRampToValueAtTime(b, a + this.c);
      this.a.frequency.exponentialRampToValueAtTime(this.b + this.k * (b - this.b), a + this.c + this.g)
    };
    var wb = function (a) {
        a.a.frequency.cancelScheduledValues(0);
        a.a.frequency.value = a.b
      };
    xb.prototype.W = function () {
      return this.a
    };
    xb.prototype.connect = function (a) {
      this.a.connect(a)
    };
    xb.prototype.pa = function () {
      this.a.disconnect()
    };
    var yb = function (a, b, c) {
        this.ea = a;
        this.kb = c;
        for (a = 0; a < b.length; a++) b[a].connect(c.W())
      };
    yb.prototype.b = function () {
      window.setTimeout(u(function () {
        this.kb.connect(this.ea.destination)
      }, this), 0)
    };
    yb.prototype.a = function () {
      this.kb.pa()
    };
    var Ab = function (a, b, c, d) {
        this.g = a;
        this.a = 0;
        this.b = 4;
        this.k = b;
        this.c = c;
        this.e = d;
        zb(this)
      };
    Ab.prototype.za = function () {
      zb(this);
      this.b = this.a = 0
    };
    var zb = function (a) {
        a.m = 0 >= a.k ? 1 : a.g / a.k;
        0 >= a.c ? (a.l = 1, a.h = 1) : (a.l = (1 - a.e) * a.g / a.c, a.h = a.e * a.g / a.c)
      };
    var Bb = function (a, b, c, d, e, f, h, m, p, k, z, r, t, A) {
        this.g = 1 / a.sampleRate;
        this.b = 0;
        this.r = b;
        this.t = c;
        this.w = d;
        this.m = e;
        this.e = f;
        this.va = h;
        this.G = m;
        this.v = p;
        this.c = j;
        this.l = k;
        this.h = z;
        this.n = this.a = this.k = j;
        this.p = 0;
        this.R = new Ab(this.g, r, t, A)
      },
      Cb = 5 / 3;
    n = Bb.prototype;
    n.K = function (a) {
      this.r = a
    };
    n.ia = function (a) {
      this.t = a
    };
    n.Aa = function (a) {
      this.m = a
    };
    n.ha = function (a) {
      this.w = a
    };
    n.cb = function () {
      this.e = i
    };
    n.ab = function () {
      this.e = l
    };
    n.Ca = function () {
      this.va = i
    };
    n.Ba = function () {
      this.va = l
    };
    n.Za = function (a) {
      this.v = a
    };
    n.bb = function () {
      this.l = i
    };
    n.$a = function () {
      this.l = l
    };
    n.Ra = function (a) {
      this.h = a
    };
    n.Ma = function (a) {
      this.p = a
    };
    n.Oa = function (a) {
      var b = this.R;
      b.k = a;
      zb(b)
    };
    n.Pa = function (a) {
      var b = this.R;
      b.c = a;
      zb(b)
    };
    n.Qa = function (a) {
      var b = this.R;
      b.e = a;
      zb(b)
    };
    var Db = function (a, b, c, d, e) {
        var b = b.outputBuffer,
          f = b.getChannelData(1),
          h = b.getChannelData(0);
        a.G && !a.c && (a.c = new Float32Array(b.length));
        var m;
        m = a.p;
        a.e || (m = 0);
        m = 55 * a.w * Math.pow(2, (m + -4) / 12);
        var p;
        p = Cb;
        a.e || (p = 8);
        p = Math.abs(a.m * (p - 1)) + 1;
        p = 0 <= a.m ? p : 1 / p;
        for (var k, z, r, t = 0; t < b.length; ++t) {
          k = a.R;
          switch (k.b) {
          case 0:
            k.a += k.m;
            1 <= k.a && (k.a = 1, k.b = 1);
            break;
          case 1:
            k.a -= k.l;
            k.a <= k.e && (k.a = k.e, k.b = 2);
            break;
          case 3:
            k.a -= k.h, 0 >= k.a && (k.a = 0, k.b = 4)
          }
          k = k.a;
          var A = a;
          r = p;
          var $a = a,
            w;
          w = a;
          var Da = m;
          !w.l || w.a === j || 0 >= w.h || Math.abs(w.a - Da) <= Math.abs(w.k) ? w = w.a = w.n = Da : (w.n != Da && (w.k = (Da - w.a) / (w.h / w.g), w.n = Da), w.a += w.k, w = w.a);
          r *= !c || !$a.va ? w : (0.75 * c[t] + 1.25) * w;
          $a = 2 / r;
          A.b > $a && (A.b -= $a);
          r = A.b * r / 2;
          A.b += A.g;
          switch (a.t) {
          case 0:
            z = 4 * ((0.5 < r ? 1 - r : r) - 0.25);
            break;
          case 1:
            z = (z = 0.5 > r) ? 4 * r - 1 : -2 * r + 1;
            break;
          case 2:
            z = 2 * (r - 0.5);
            break;
          case 3:
            z = -2 * (r - 0.5);
            break;
          case 4:
            z = 0.5 > r ? 1 : -1;
            break;
          case 5:
            z = r < 1 / 3 ? 1 : -1;
            break;
          case 6:
            z = 0.25 > r ? 1 : -1
          }
          a.G && (a.c[t] = z * a.v);
          k *= z * a.r;
          0 == d ? h[t] = k : 1 == d ? h[t] += k : (h[t] = (h[t] + k) / e, f && (f[t] = h[t]))
        }
      };
    var Eb = function (a) {
        Eb[" "](a);
        return a
      };
    Eb[" "] = aa;
    !B || Ya();
    var Fb = !B || Ya(),
      Gb = B && !C("8");
    !Na || C("528");
    Ma && C("1.9b") || B && C("8") || La && C("9.5") || Na && C("528");
    Ma && !C("8") || B && C("9");
    var H = function (a, b) {
        this.type = a;
        this.a = this.target = b
      };
    v(H, F);
    n = H.prototype;
    n.s = function () {
      delete this.type;
      delete this.target;
      delete this.a
    };
    n.P = l;
    n.la = i;
    n.Ea = function () {
      this.P = i
    };
    n.preventDefault = function () {
      this.la = l
    };
    var I = function (a, b) {
        a && Hb(this, a, b)
      };
    v(I, H);
    n = I.prototype;
    n.target = j;
    n.clientX = 0;
    n.clientY = 0;
    n.wa = 0;
    n.J = 0;
    n.Ka = l;
    n.Ja = l;
    n.ga = l;
    n.La = l;
    n.T = j;
    var Hb = function (a, b, c) {
        var d = a.type = b.type;
        H.call(a, d);
        a.target = b.target || b.srcElement;
        a.a = c;
        if ((c = b.relatedTarget) && Ma) try {
          Eb(c.nodeName)
        } catch (e) {}
        a.clientX = b.clientX !== g ? b.clientX : b.pageX;
        a.clientY = b.clientY !== g ? b.clientY : b.pageY;
        a.wa = b.screenY || 0;
        a.J = b.keyCode || 0;
        a.Ka = b.ctrlKey;
        a.Ja = b.altKey;
        a.ga = b.shiftKey;
        a.La = b.metaKey;
        a.T = b;
        b.defaultPrevented && a.preventDefault();
        delete a.P
      };
    I.prototype.Ea = function () {
      I.u.Ea.call(this);
      this.T.stopPropagation ? this.T.stopPropagation() : this.T.cancelBubble = i
    };
    I.prototype.preventDefault = function () {
      I.u.preventDefault.call(this);
      var a = this.T;
      if (a.preventDefault) a.preventDefault();
      else if (a.returnValue = l, Gb) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
      } catch (b) {}
    };
    I.prototype.s = function () {
      I.u.s.call(this);
      this.a = this.target = this.T = j
    };
    var Ib = function () {},
      Jb = 0;
    Ib.prototype.key = 0;
    Ib.prototype.O = l;
    Ib.prototype.a = l;
    Ib.prototype.handleEvent = function (a) {
      return this.b ? this.listener.call(this.fa || this.src, a) : this.listener.handleEvent.call(this.listener, a)
    };
    var Kb = {},
      J = {},
      K = {},
      Lb = {},
      Mb = function (a, b, c, d, e) {
        if (b) {
          if (q(b)) {
            for (var f = 0; f < b.length; f++) Mb(a, b[f], c, d, e);
            return j
          }
          var d = !! d,
            h = J;
          b in h || (h[b] = {
            D: 0,
            C: 0
          });
          h = h[b];
          d in h || (h[d] = {
            D: 0,
            C: 0
          }, h.D++);
          var h = h[d],
            m = s(a),
            p;
          h.C++;
          if (h[m]) {
            p = h[m];
            for (f = 0; f < p.length; f++) if (h = p[f], h.listener == c && h.fa == e) {
              if (h.O) break;
              return p[f].key
            }
          } else p = h[m] = [], h.D++;
          f = Nb();
          f.src = a;
          var k = h = new Ib;
          if (ea(c)) k.b = i;
          else if (c && c.handleEvent && ea(c.handleEvent)) k.b = l;
          else throw Error("Invalid listener argument");
          k.listener = c;
          k.c = f;
          k.src = a;
          k.type = b;
          k.capture = !! d;
          k.fa = e;
          k.a = l;
          k.key = ++Jb;
          k.O = l;
          c = h.key;
          f.key = c;
          p.push(h);
          Kb[c] = h;
          K[m] || (K[m] = []);
          K[m].push(h);
          a.addEventListener ? (a == o || !a.Ia) && a.addEventListener(b, f, d) : a.attachEvent(b in Lb ? Lb[b] : Lb[b] = "on" + b, f);
          return c
        }
        throw Error("Invalid event type");
      },
      Nb = function () {
        var a = Ob,
          b = Fb ?
        function (c) {
          return a.call(b.src, b.key, c)
        } : function (c) {
          c = a.call(b.src, b.key, c);
          if (!c) return c
        };
        return b
      },
      Pb = function (a, b, c, d, e) {
        if (q(b)) {
          for (var f = 0; f < b.length; f++) Pb(a, b[f], c, d, e);
          return j
        }
        a = Mb(a, b, c, d, e);
        Kb[a].a = i;
        return a
      },
      Qb = function (a, b, c, d, e) {
        if (q(b)) for (var f = 0; f < b.length; f++) Qb(a, b[f], c, d, e);
        else if (d = !! d, a = Rb(a, b, d)) for (f = 0; f < a.length; f++) if (a[f].listener == c && a[f].capture == d && a[f].fa == e) {
          L(a[f].key);
          break
        }
      },
      L = function (a) {
        if (!Kb[a]) return l;
        var b = Kb[a];
        if (b.O) return l;
        var c = b.src,
          d = b.type,
          e = b.c,
          f = b.capture;
        c.removeEventListener ? (c == o || !c.Ia) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in Lb ? Lb[d] : Lb[d] = "on" + d, e);
        c = s(c);
        e = J[d][f][c];
        if (K[c]) {
          var h = K[c];
          va(h, b);
          0 == h.length && delete K[c]
        }
        b.O = i;
        e.gb = i;
        Sb(d, f, c, e);
        delete Kb[a];
        return i
      },
      Sb = function (a, b, c, d) {
        if (!d.na && d.gb) {
          for (var e = 0, f = 0; e < d.length; e++) d[e].O ? d[e].c.src = j : (e != f && (d[f] = d[e]), f++);
          d.length = f;
          d.gb = l;
          0 == f && (delete J[a][b][c], J[a][b].D--, 0 == J[a][b].D && (delete J[a][b], J[a].D--), 0 == J[a].D && delete J[a])
        }
      },
      Tb = function (a) {
        var b, c = 0,
          d = b == j;
        b = !! b;
        if (a == j) ya(K, function (a) {
          for (var e = a.length - 1; 0 <= e; e--) {
            var f = a[e];
            if (d || b == f.capture) L(f.key), c++
          }
        });
        else if (a = s(a), K[a]) for (var a = K[a], e = a.length - 1; 0 <= e; e--) {
          var f = a[e];
          if (d || b == f.capture) L(f.key), c++
        }
      },
      Rb = function (a, b, c) {
        var d = J;
        return b in d && (d = d[b], c in d && (d = d[c], a = s(a), d[a])) ? d[a] : j
      },
      Vb = function (a, b, c, d, e) {
        var f = 1,
          b = s(b);
        if (a[b]) {
          a.C--;
          a = a[b];
          a.na ? a.na++ : a.na = 1;
          try {
            for (var h = a.length, m = 0; m < h; m++) {
              var p = a[m];
              p && !p.O && (f &= Ub(p, e) !== l)
            }
          } finally {
            a.na--, Sb(c, d, b, a)
          }
        }
        return Boolean(f)
      },
      Ub = function (a, b) {
        a.a && L(a.key);
        return a.handleEvent(b)
      },
      Ob = function (a, b) {
        if (!Kb[a]) return i;
        var c = Kb[a],
          d = c.type,
          e = J;
        if (!(d in e)) return i;
        var e = e[d],
          f, h;
        if (!Fb) {
          var m;
          if (!(m = b)) a: {
            m = ["window", "event"];
            for (var p = o; f = m.shift();) if (p[f] != j) p = p[f];
            else {
              m = j;
              break a
            }
            m = p
          }
          f = m;
          m = i in e;
          p = l in e;
          if (m) {
            if (0 > f.keyCode || f.returnValue != g) return i;
            a: {
              var k = l;
              if (0 == f.keyCode) try {
                f.keyCode = -1;
                break a
              } catch (z) {
                k = i
              }
              if (k || f.returnValue == g) f.returnValue = i
            }
          }
          k = new I;
          Hb(k, f, this);
          f = i;
          try {
            if (m) {
              for (var r = [], t = k.a; t; t = t.parentNode) r.push(t);
              h = e[i];
              h.C = h.D;
              for (var A = r.length - 1; !k.P && 0 <= A && h.C; A--) k.a = r[A], f &= Vb(h, r[A], d, i, k);
              if (p) {
                h = e[l];
                h.C = h.D;
                for (A = 0; !k.P && A < r.length && h.C; A++) k.a = r[A], f &= Vb(h, r[A], d, l, k)
              }
            } else f = Ub(c, k)
          } finally {
            r && (r.length = 0), k.L()
          }
          return f
        }
        d = new I(b, this);
        try {
          f = Ub(c, d)
        } finally {
          d.L()
        }
        return f
      };
    var M = function (a) {
        this.i = a;
        this.k = []
      };
    v(M, F);
    var Wb = [],
      N = function (a, b, c, d) {
        q(c) || (Wb[0] = c, c = Wb);
        for (var e = 0; e < c.length; e++) a.k.push(Mb(b, c[e], d || a, l, a.i || a))
      },
      O = function (a, b, c, d, e, f) {
        if (q(c)) for (var h = 0; h < c.length; h++) O(a, b, c[h], d, e, f);
        else a.k.push(Pb(b, c, d || a, e, f || a.i || a))
      },
      Xb = function (a, b, c, d, e, f) {
        if (q(c)) for (var h = 0; h < c.length; h++) Xb(a, b, c[h], d, e, f);
        else {
          a: {
            d = d || a;
            f = f || a.i || a;
            e = !! e;
            if (b = Rb(b, c, e)) for (c = 0; c < b.length; c++) if (!b[c].O && b[c].listener == d && b[c].capture == e && b[c].fa == f) {
              b = b[c];
              break a
            }
            b = j
          }
          b && (b = b.key, L(b), va(a.k, b))
        }
      };
    M.prototype.s = function () {
      M.u.s.call(this);
      y(this.k, L);
      this.k.length = 0
    };
    M.prototype.handleEvent = function () {
      throw Error("EventHandler.handleEvent not implemented");
    };
    var P = function () {};
    v(P, F);
    n = P.prototype;
    n.Ia = i;
    n.ka = j;
    n.addEventListener = function (a, b, c, d) {
      Mb(this, a, b, c, d)
    };
    n.removeEventListener = function (a, b, c, d) {
      Qb(this, a, b, c, d)
    };
    n.dispatchEvent = function (a) {
      var b = a.type || a,
        c = J;
      if (b in c) {
        if (da(a)) a = new H(a, this);
        else if (a instanceof H) a.target = a.target || this;
        else {
          var d = a,
            a = new H(b, this);
          Ca(a, d)
        }
        var d = 1,
          e, c = c[b],
          b = i in c,
          f;
        if (b) {
          e = [];
          for (f = this; f; f = f.ka) e.push(f);
          f = c[i];
          f.C = f.D;
          for (var h = e.length - 1; !a.P && 0 <= h && f.C; h--) a.a = e[h], d &= Vb(f, e[h], a.type, i, a) && a.la != l
        }
        if (l in c) if (f = c[l], f.C = f.D, b) for (h = 0; !a.P && h < e.length && f.C; h++) a.a = e[h], d &= Vb(f, e[h], a.type, l, a) && a.la != l;
        else for (e = this; !a.P && e && f.C; e = e.ka) a.a = e, d &= Vb(f, e, a.type, l, a) && a.la != l;
        a = Boolean(d)
      } else a = i;
      return a
    };
    n.s = function () {
      P.u.s.call(this);
      Tb(this);
      this.ka = j
    };
    var Yb = j,
      Zb = j,
      $b = j,
      ac = function () {
        if (!Yb) {
          Yb = {};
          Zb = {};
          $b = {};
          for (var a = 0; 65 > a; a++) Yb[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), Zb[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a), $b[Zb[a]] = a
        }
      };
    var bc = function (a) {
        for (var b = Array(Math.ceil(a.length / 8)), c = 0, d = 0; c < a.length; c += 8, d++) {
          for (var e = 0, f = 0; 8 > f; ++f) e *= 2, e |= a[c + f] ? 1 : 0;
          b[d] = e
        }
        if (!ca(b)) throw Error("encodeByteArray takes an array as a parameter");
        ac();
        a = Zb;
        c = [];
        for (d = 0; d < b.length; d += 3) {
          var h = b[d],
            m = (e = d + 1 < b.length) ? b[d + 1] : 0,
            p = (f = d + 2 < b.length) ? b[d + 2] : 0,
            k = h >> 2,
            h = (h & 3) << 4 | m >> 4,
            m = (m & 15) << 2 | p >> 6,
            p = p & 63;
          f || (p = 64, e || (m = 64));
          c.push(a[k], a[h], a[m], a[p])
        }
        return c.join("")
      },
      Q = function (a, b) {
        for (var c = [], d = 0; d < b; ++d) c.push( !! (a & 1)), a >>= 1;
        return c
      },
      cc = function (a, b, c) {
        if (b + c > a.length) return -1;
        for (var d = 0, e = 0; e < c; ++e) d *= 2, d |= a[b + c - e - 1] ? 1 : 0;
        return d
      },
      R = function (a, b, c, d) {
        a = [i, i].concat(Q(a, 5));
        if (b == c) return a.concat(Q(0, 20));
        b = -1 + Math.round((b - c) / (d - c) * Math.pow(2, 20));
        return a.concat(Q(b, 20))
      },
      S = function (a, b, c, d) {
        a = cc(a, b, 20);
        return 0 == a ? c : Math.max(0, a / Math.pow(2, 20) * (d - c) + c)
      },
      dc = function (a, b) {
        return [i, i].concat(Q(a, 5)).concat(Q(b, 3))
      },
      ec = function (a, b) {
        var c;
        switch (b) {
        case 32:
          c = 0;
          break;
        case 16:
          c = 1;
          break;
        case 8:
          c = 2;
          break;
        case 4:
          c = 3;
          break;
        case 2:
          c = 4;
          break;
        default:
          c = 5
        }
        return [i, i].concat(Q(a, 5)).concat(Q(c, 3))
      };
    var T = function (a, b) {
        H.call(this, "c");
        this.o = a;
        this.j = b
      };
    v(T, H);
    var U = {
      Pb: 0,
      Qb: 1,
      ib: 2,
      Ob: 3,
      Nb: 4,
      Jb: 5,
      Ub: 6,
      Kb: 7,
      Lb: 8,
      Mb: 9,
      Rb: 10,
      Sb: 11,
      Tb: 12,
      Vb: 13,
      hb: 14,
      Wb: 15,
      Yb: 16,
      Xb: 17,
      $b: 18,
      Zb: 19,
      bc: 20,
      ac: 21,
      dc: 22,
      cc: 23,
      fc: 24,
      ec: 25,
      jb: 26
    },
      fc = function (a, b) {
        switch (a.o) {
        case 0:
          b.Sa(a.j);
          break;
        case 1:
          b.Ta();
          break;
        case 2:
          y(b.a, function (a) {
            this.j ? a.bb() : a.$a()
          }, a);
          break;
        case 3:
          y(b.a, function (a) {
            a.Ra(this.j)
          }, a);
          break;
        case 4:
          b.Ya(a.j);
          break;
        case 5:
          b.Ua(a.j);
          break;
        case 6:
          b.K(a.j);
          break;
        case 7:
          b.Va(a.j);
          break;
        case 8:
          b.Wa(a.j);
          break;
        case 9:
          b.Xa(a.j);
          break;
        case 10:
          y(b.a, function (a) {
            a.Oa(this.j)
          }, a);
          break;
        case 11:
          y(b.a, function (a) {
            a.Pa(this.j)
          }, a);
          break;
        case 12:
          y(b.a, function (a) {
            a.Qa(this.j)
          }, a);
          break;
        case 13:
          b.a[2].Za(a.j);
          break;
        case 14:
          a.j ? (b.a[0].Ca(), b.a[1].Ca()) : (b.a[0].Ba(), b.a[1].Ba());
          break;
        case 15:
          b.a[0].ha(a.j);
          break;
        case 16:
          b.a[0].ia(a.j);
          break;
        case 17:
          b.a[0].K(a.j);
          break;
        case 18:
          b.a[1].ha(a.j);
          break;
        case 19:
          b.a[1].Aa(a.j);
          break;
        case 20:
          b.a[1].ia(a.j);
          break;
        case 21:
          b.a[1].K(a.j);
          break;
        case 22:
          b.a[2].ha(a.j);
          break;
        case 23:
          b.a[2].Aa(a.j);
          break;
        case 24:
          b.a[2].ia(a.j);
          break;
        case 25:
          b.a[2].K(a.j);
          break;
        case 26:
          a.j ? b.a[2].cb() : b.a[2].ab();
          break;
        default:
          qa("No execute handler for mutation kind %s.", a.o)
        }
      };
    T.prototype.H = function () {
      switch (this.o) {
      case 0:
        return [l].concat(Q(this.j, 5));
      case 1:
        return [i, l];
      case 2:
        return [l].concat(Q(this.j ? 24 : 25, 5));
      case 3:
        return R(this.o, this.j, 0, 1);
      case 4:
        return R(this.o, this.j, 100, 5100);
      case 5:
        return R(this.o, this.j, 1, 16);
      case 6:
        return R(this.o, this.j, 0.1, 1);
      case 7:
        return R(this.o, this.j, 0, 1);
      case 8:
        return R(this.o, this.j, 0, 1);
      case 9:
        return R(this.o, this.j, 0, 1);
      case 10:
        return R(this.o, this.j, 0, 1);
      case 11:
        return R(this.o, this.j, 0, 1);
      case 12:
        return R(this.o, this.j, 0, 1);
      case 13:
        return R(this.o, this.j, 0, 1);
      case 14:
        return [l].concat(Q(this.j ? 26 : 27, 5));
      case 15:
        return ec(this.o, this.j);
      case 16:
        return dc(this.o, this.j);
      case 17:
        return R(this.o, this.j, 0.1, 1);
      case 18:
        return ec(this.o, this.j);
      case 19:
        return R(this.o, this.j, -1, 1);
      case 20:
        return dc(this.o, this.j);
      case 21:
        return R(this.o, this.j, 0.1, 1);
      case 22:
        return ec(this.o, this.j);
      case 23:
        return R(this.o, this.j, -1, 1);
      case 24:
        return dc(this.o, this.j);
      case 25:
        return R(this.o, this.j, 0.1, 1);
      case 26:
        return [l].concat(Q(this.j ? 28 : 29, 5));
      default:
        qa("No serialization handler for mutation kind %s.", this.o)
      }
    };
    var gc = function (a, b, c) {
        var d = b;
        if (b + 1 >= a.length) return b;
        if (a[b++] == l) {
          a = cc(a, b, 5);
          b += 5;
          if (-1 == a) return d;
          23 >= a ? c.push(new T(U.Pb, a)) : 24 == a ? c.push(new T(U.ib, 1)) : 25 == a ? c.push(new T(U.ib, 0)) : 26 == a ? c.push(new T(U.hb, 1)) : 27 == a ? c.push(new T(U.hb, 0)) : 28 == a ? c.push(new T(U.jb, 1)) : 29 == a && c.push(new T(U.jb, 0))
        } else if (a[b++] == l) c.push(new T(U.Qb, 0));
        else {
          var e = cc(a, b, 5),
            b = b + 5;
          if (-1 == e) return d;
          var f = cc(a, b, 3);
          if (-1 == f || -1 == e) return d;
          switch (e) {
          case U.Wb:
          case U.$b:
          case U.dc:
            c.push(new T(e, {
              "0": 32,
              1: 16,
              2: 8,
              3: 4,
              4: 2,
              5: 0.0625
            }[f]));
            b += 3;
            break;
          case U.Yb:
          case U.bc:
          case U.fc:
            c.push(new T(e, f));
            b += 3;
            break;
          case U.Ob:
            c.push(new T(e, S(a, b, 0, 1)));
            b += 20;
            break;
          case U.Nb:
            c.push(new T(e, S(a, b, 100, 5100)));
            b += 20;
            break;
          case U.Jb:
            c.push(new T(e, S(a, b, 1, 16)));
            b += 20;
            break;
          case U.Ub:
            c.push(new T(e, S(a, b, 0.1, 1)));
            b += 20;
            break;
          case U.Kb:
            c.push(new T(e, S(a, b, 0, 1)));
            b += 20;
            break;
          case U.Lb:
            c.push(new T(e, S(a, b, 0, 1)));
            b += 20;
            break;
          case U.Mb:
            c.push(new T(e, S(a, b, 0, 1)));
            b += 20;
            break;
          case U.Rb:
            c.push(new T(e, S(a, b, 0, 1)));
            b += 20;
            break;
          case U.Sb:
            c.push(new T(e, S(a, b, 0, 1)));
            b += 20;
            break;
          case U.Tb:
            c.push(new T(e, S(a, b, 0, 1)));
            b += 20;
            break;
          case U.Vb:
            c.push(new T(e, S(a, b, 0, 1)));
            b += 20;
            break;
          case U.Xb:
            c.push(new T(e, S(a, b, 0.1, 1)));
            b += 20;
            break;
          case U.Zb:
            c.push(new T(e, S(a, b, -1, 1)));
            b += 20;
            break;
          case U.ac:
            c.push(new T(e, S(a, b, 0.1, 1)));
            b += 20;
            break;
          case U.cc:
            c.push(new T(e, S(a, b, -1, 1)));
            b += 20;
            break;
          case U.ec:
            c.push(new T(e, S(a, b, 0.1, 1)));
            b += 20;
            break;
          default:
            qa("No deserialization handler for mutation kind %s.", e)
          }
        }
        return b
      };
    var hc = function (a, b) {
        this.a = a;
        this.b = b
      },
      ic = function (a, b) {
        for (var c = 0; c < a.b.length; c++) fc(a.b[c], b)
      };
    hc.prototype.H = function (a, b) {
      var c = this.b;
      if (a && (c = sa(c, function (a) {
        return 0 == a.o || 1 == a.o
      }), 0 == c.length)) return b + this.a;
      var d;
      d = this.a;
      a && (d += b);
      d = d < Math.pow(2, 6) ? [l].concat(Q(d, 6)) : [i].concat(Q(d, 10));
      d = 1 == c.length ? d.concat([i]) : d.concat([l]).concat(Q(c.length, 5));
      for (var e = 0; e < c.length; e++) d = d.concat(c[e].H());
      return d
    };
    var jc = function (a, b, c) {
        if (b >= a.length) return b;
        var d = b,
          e = a[b++] == l ? 6 : 10,
          f = cc(a, b, e),
          b = b + e;
        if (-1 == f || b >= a.length) return d;
        if (a[b++] == i) e = 1;
        else if (e = cc(a, b, 5), b += 5, -1 == e) return d;
        for (var h, m = [], p = 0; p < e; p++) {
          h = gc(a, b, m);
          if (h == b) return d;
          b = h
        }
        c.push(new hc(f, m));
        return b
      };
    var kc = function (a, b) {
        this.g = a;
        this.A = b || [];
        this.b = this.e = this.c = 0;
        this.a = []
      };
    v(kc, P);
    var mc = function (a) {
        a.A = [];
        a.b = 0;
        a.a = [];
        a.c = setTimeout(u(function () {
          lc(this, i)
        }, a), 50)
      },
      lc = function (a, b) {
        a.b++;
        if (0 < a.a.length) {
          var c = nc(a.a);
          a.A.push(new hc(a.b, c));
          a.b = 0;
          a.a = []
        }
        b && (a.c = setTimeout(u(function () {
          lc(this, i)
        }, a), 50))
      },
      nc = function (a) {
        for (var b = {}, c, d, e = 0; e < a.length; e++) c = a[e].o, 0 == c || 1 == c ? d = a[e] : b[c] = a[e];
        a = [];
        c = 0;
        for (var f in b) a[c++] = b[f];
        d && a.push(d);
        return a
      },
      pc = function (a) {
        0 == a.A.length ? a.dispatchEvent("f") : oc(a, 0)
      },
      qc = function (a) {
        var b = new T(1, 0);
        ic(new hc(0, [b]), a.g)
      },
      rc = function (a) {
        qc(a);
        a.dispatchEvent("f");
        clearTimeout(a.e)
      },
      oc = function (a, b) {
        0 < b && ic(a.A[b - 1], a.g);
        if (b == a.A.length) qc(a), a.dispatchEvent("f");
        else {
          var c = 50 * a.A[b].a;
          a.e = setTimeout(u(function () {
            oc(this, b + 1)
          }, a), c)
        }
      };
    kc.prototype.H = function (a) {
      if (0 == this.A.length) return [];
      for (var b = 0, c, d = 0, e = [], f = 0; f < this.A.length; f++) a && 0 != f ? (c = this.A[f].H(i, b), q(c) ? (e = e.concat(c), d++) : b = c) : (e = e.concat(this.A[f].H()), d++);
      return Q(d, 10).concat(e)
    };
    var sc = function (a) {
        this.h = a;
        this.i = new M(this);
        G(this, this.i);
        this.a = [];
        for (var b = 0; 4 > b; b++) {
          var c = new kc(a[b], j);
          N(this.i, c, "f", this.n);
          this.a.push(c)
        }
        this.c = this.k = 0;
        this.b = "o";
        this.l = this.m = 0
      };
    v(sc, P);
    sc.prototype.s = function () {
      sc.u.s.call(this);
      this.e();
      tc(this)
    };
    var uc = function (a, b) {
        a.c = b;
        a.g();
        a.dispatchEvent("t")
      },
      wc = function (a) {
        a.m = setTimeout(u(a.e, a), 2E4);
        a.l = setTimeout(u(function () {
          this.dispatchEvent("s")
        }, a), 17E3);
        for (var b = 0; b < a.a.length; b++) rc(a.a[b]), a.k = 0;
        mc(a.a[a.c]);
        vc(a, "r");
        a.g();
        for (b = 0; b < a.a.length; b++) b != a.c && pc(a.a[b])
      };
    sc.prototype.e = function () {
      clearTimeout(this.m);
      clearTimeout(this.l);
      var a = this.a[this.c];
      clearTimeout(a.c);
      lc(a, l);
      if (a.A.length) {
        var b = new T(1, 0);
        a.A.push(new hc(a.b + 1, [b]))
      }
      for (a = 0; a < this.a.length; a++) rc(this.a[a]);
      vc(this, "o");
      this.g();
      if (2 < this.a[this.c].A.length) for (a = 0; 3 > a; a++) if (b = (this.c + a + 1) % 4, !(2 < this.a[b].A.length)) {
        uc(this, b);
        return
      }
      uc(this, this.c)
    };
    var xc = function (a) {
        return ua(a.a, function (a) {
          return 2 < a.A.length
        })
      },
      tc = function (a) {
        for (var b = 0; b < a.a.length; b++) rc(a.a[b]);
        vc(a, "o");
        a.g()
      },
      vc = function (a, b) {
        a.b != b && (a.b = b, a.dispatchEvent(b))
      },
      yc = function (a, b) {
        a.g = b
      };
    sc.prototype.n = function () {
      this.k++;
      4 <= this.k && (vc(this, "o"), this.g())
    };
    sc.prototype.H = function () {
      for (var a = [], b = [], c = 0, d, e = 0; e < this.a.length; e++) d = this.a[e].H(), a.push(d), b.push(d.length), c += d.length;
      if (0 == c) return "";
      if (12240 >= c) return bc(ta(a, function (a, b) {
        return a.concat(b)
      }));
      for (var f = [], h = [], e = 0; e < this.a.length; e++) d = this.a[e].H(i), f.push(d), h.push(d.length);
      d = c;
      for (e = f.length - 1; 0 <= e && !(d -= b[e] - h[e], 12240 >= d); e--);
      if (0 <= e) {
        d = [];
        for (h = 0; h < a.length; h++) d = d.concat(h < e ? a[h] : f[h]);
        return bc(d)
      }
      d = [];
      for (e = a = 0; e < f.length; e++) {
        a += h[e];
        if (12240 < a) break;
        d = d.concat(f[e])
      }
      return bc(d)
    };
    var zc = function (a, b) {
        if ("" == b) return l;
        var c = b;
        2 == c.length % 4 ? c += ".." : 3 == c.length % 4 && (c += ".");
        ac();
        for (var d = $b, e = [], f = 0; f < c.length;) {
          var h = d[c.charAt(f++)],
            m = f < c.length ? d[c.charAt(f)] : 0;
          ++f;
          var p = f < c.length ? d[c.charAt(f)] : 0;
          ++f;
          var k = f < c.length ? d[c.charAt(f)] : 0;
          ++f;
          if (h == j || m == j || p == j || k == j) throw Error();
          e.push(h << 2 | m >> 4);
          64 != p && (e.push(m << 4 & 240 | p >> 2), 64 != k && e.push(p << 6 & 192 | k))
        }
        c = [];
        for (d = 0; d < e.length; ++d) {
          f = e[d];
          for (h = 0; 8 > h; ++h) c.push( !! (f & 128)), f *= 2
        }
        if (!c || 0 == c.length) return l;
        for (d = f = e = 0; d < a.a.length; d++) {
          a: {
            f = a.a[d];
            h = c;
            p = m = e;
            k = cc(h, m, 10);
            if (-1 != k) {
              for (var m = m + 10, z = g, r = [], t = 0; t < k; t++) {
                z = jc(h, m, r);
                if (z == m) {
                  f = p;
                  break a
                }
                m = z
              }
              f.A = r
            }
            f = m
          }
          if (f == e) break;
          e = f
        }
        return 0 != f
      };
    var Ac = function (a, b, c, d) {
        this.ea = a;
        this.a = b;
        this.b = c;
        this.g = a.createGainNode();
        this.e = a.createAnalyser();
        this.e.smoothingTimeConstant = 0.5;
        this.K(d);
        this.c = C("20.0") ? a.createJavaScriptNode(1024, 1, 1) : a.createJavaScriptNode(1024, 0, 1);
        this.c.onaudioprocess = u(this.zb, this);
        this.c.connect(this.b.W());
        this.b.connect(this.g);
        this.g.connect(this.e)
      };
    n = Ac.prototype;
    n.Sa = function (a) {
      y(this.a, function (b) {
        b.Ma(a);
        b.R.za()
      });
      this.b.za()
    };
    n.Ha = function () {};
    n.Ta = function () {
      y(this.a, function (a) {
        a = a.R;
        3 != a.b && (a.h = 0 >= a.c ? 1 : a.a * a.g / a.c, a.b = 3)
      })
    };
    n.Ya = function (a) {
      var b = this.b;
      b.b = a;
      wb(b)
    };
    n.Ua = function (a) {
      var b = this.b;
      b.e = a;
      wb(b)
    };
    n.Va = function (a) {
      var b = this.b;
      b.c = a;
      wb(b)
    };
    n.Wa = function (a) {
      var b = this.b;
      b.g = a;
      wb(b)
    };
    n.Xa = function (a) {
      var b = this.b;
      b.k = a;
      wb(b)
    };
    n.zb = function (a) {
      Db(this.a[2], a, j, 0);
      Db(this.a[0], a, this.a[2].c, 1);
      Db(this.a[1], a, this.a[2].c, 2, this.a.length)
    };
    n.K = function (a) {
      this.g.gain.value = a
    };
    n.W = function () {
      return this.c
    };
    n.connect = function (a) {
      this.e.connect(a)
    };
    n.pa = function () {
      this.e.disconnect()
    };
    var Bc = function (a) {
        var b = 9 == a.nodeType ? a : a.ownerDocument || a.document;
        b.defaultView && b.defaultView.getComputedStyle && (a = b.defaultView.getComputedStyle(a, j)) && (a.width || a.getPropertyValue("width"))
      },
      Cc = function (a, b) {
        var c = a.style;
        "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
      };
    var Dc = function () {
        M.call(this);
        this.a = document.getElementById("moog-tooltip");
        var a = document.getElementById("moog");
        a && (Cc(this.a, 0), N(this, a, "click", this.Db), N(this, document.body, "keydown", this.Eb), N(this, a, "mouseover", this.Gb), N(this, a, "mouseout", this.Fb), N(this, this.a, "mouseover", this.Hb))
      };
    v(Dc, M);
    n = Dc.prototype;
    n.hc = 1E3;
    n.gc = 500;
    n.eb = 0.99;
    n.Ib = 0.25;
    n.oa = j;
    n.Da = l;
    var Ec = function (a) {
        a.oa && window.clearTimeout(a.oa)
      },
      Fc = function (a, b) {
        a.Da != b && ((a.Da = b) ? (a.a.style.visibility = "visible", a.a.className = "full-visible", Cc(a.a, a.eb)) : (a.a.className = "", Cc(a.a, 0)))
      },
      Gc = function (a) {
        a.Da ? (a.a.className = "half-visible", Cc(a.a, a.Ib)) : Ec(a)
      };
    n = Dc.prototype;
    n.Db = function () {
      Gc(this)
    };
    n.Eb = function () {
      Gc(this)
    };
    n.Hb = function () {
      Fc(this, i);
      this.a.className = "full-visible";
      Cc(this.a, this.eb)
    };
    n.Gb = function () {
      Ec(this);
      this.oa = window.setTimeout(u(function () {
        Fc(this, i)
      }, this), this.hc)
    };
    n.Fb = function () {
      Ec(this);
      this.oa = window.setTimeout(u(function () {
        Fc(this, l)
      }, this), this.gc)
    };
    var V = function (a, b, c, d, e, f, h) {
        this.id = a;
        this.c = b;
        this.b = "moog-keyboard";
        this.value = c || 0;
        this.k = d;
        this.e = e;
        this.a = f;
        this.g = !! h
      },
      W = function (a, b, c) {
        M.call(this);
        this.c = b;
        Hc(this.c, u(this.sa, this), this);
        this.w = 200;
        this.a = document.getElementById(a.id);
        this.l = document.getElementById(a.c);
        this.ra = document.getElementById(a.b);
        this.a || qa('The "host" element for this knob could not be found.');
        this.l || qa('The "clickable" element for this knob could not be found.');
        this.ra || qa('The "actionable" element for this knob could not be found.');
        1 == a.a.length && qa("A knob with discrete states must have at least two positions.");
        this.value = a.value;
        this.r = Math.ceil(a.value * (a.a.length - 1));
        this.e = a.a;
        this.v = a.g;
        this.b = l;
        this.n = a.e;
        Bc(this.a);
        this.F = 0;
        this.h = a.k;
        this.qa = c;
        this.t = 0;
        this.B = this.value;
        this.m = l;
        this.a.innerHTML = "<span class=knob-indicator></span>";
        this.g = this.a.getElementsByTagName("span")[0];
        a = this.p(this.value);
        this.g.style.left = a[0] + "px";
        this.g.style.top = a[1] + "px";
        N(this, document, "mouseup", this.xb);
        N(this, document, "mousemove", this.wb);
        this.e && (N(this, this.l, "click", this.ub), N(this, this.l, "contextmenu", this.yb));
        N(this, this.l, "mousedown", this.vb);
        this.a.a = function () {
          return l
        }
      };
    v(W, M);
    n = W.prototype;
    n.vb = function (a) {
      this.F = a.wa;
      this.m = l;
      this.t = ja();
      this.B = this.value;
      this.b = i;
      Ic(this.c, this);
      a.preventDefault();
      return l
    };
    n.xb = function () {
      this.b = l
    };
    n.wb = function (a) {
      if (this.b) if (this.m = i, a = this.B + (this.F - a.wa) / (this.v ? 50 : this.w), a = 1 < a ? 1 : a, a = 0 > a ? 0 : a, this.v) {
        var b = this.e.length,
          c = Math.ceil(a * (b - 1));
        this.value = a = c / (b - 1);
        this.r = c;
        Jc(this, a, c)
      } else this.value = a, Jc(this, a)
    };
    n.ub = function (a) {
      if (this.m && 500 < ja() - this.t) return l;
      a.ga ? Kc(this, -1) : Kc(this, 1);
      a.preventDefault();
      return l
    };
    n.yb = function (a) {
      if (this.m && 500 < ja() - this.t) return l;
      a.ga ? Kc(this, 1) : Kc(this, -1);
      a.preventDefault();
      return l
    };
    n.ya = function () {
      this.qa(this.value, this.r)
    };
    var Lc = [0, 0.125, 0.75 * (-1 / 3) + 0.5, 0.3125, 0.5, 0.6875, 0.75 * (1 / 3) + 0.5, 0.875, 1],
      Kc = function (a, b) {
        var c = a.e.length,
          d;
        if (c == Lc.length) for (var e = 0; e < Lc.length; e++) {
          var f = Lc[e] - a.value;
          if (0.01 > Math.abs(f)) {
            d = e;
            break
          } else if (0.05 < f) {
            d = e - 1;
            break
          }
        } else d = Math.round(a.value * (c - 1));
        d = (d + b) % c;
        0 > d && (d += c);
        a.value = c == Lc.length ? Lc[d] : d / (c - 1);
        a.r = d;
        Jc(a, a.value, d)
      },
      Jc = function (a, b, c) {
        if (1 >= b && 0 <= b) {
          a.ya();
          b = Math.round(100 * b) / 100;
          if (0 <= c && a.e[c]) {
            c = a.e[c];
            if (0 == c.indexOf("wf")) {
              var d = a.c,
                c = parseInt(c.charAt(2), 10),
                e = a.n;
              d.e.style.display = "none";
              d.a.style.left = Mc[e] + "px";
              d.g.className = "moog-wf-" + c;
              d.g.style.display = "block"
            } else d = a.c, e = a.n, d.g.style.display = "none", d.a.style.left = Mc[e] + "px", d.e.innerHTML = c, d.e.style.display = "block";
            Nc(d)
          } else c = a.c, d = a.n, c.g.style.display = "none", c.a.style.left = Mc[d] + "px", c.e.innerHTML = (10 * b).toFixed(1), c.e.style.display = "block", Nc(c);
          b = a.p(b);
          a.g.style.left = b[0] + "px";
          a.g.style.top = b[1] + "px"
        }
        ab(a.a, "knob-glow");
        clearTimeout(a.M);
        Oc(a)
      },
      Oc = function (a) {
        Pc(a.c);
        a.M = setTimeout(function () {
          cb(a.a, "knob-glow")
        }, 2E3)
      };
    W.prototype.sa = function (a) {
      a != this && (clearTimeout(this.M), cb(this.a, "knob-glow"))
    };
    W.prototype.p = function (a) {
      var b = 2 * Math.PI,
        b = (0.75 - (1 - 0.85) / 2) * b + -0.85 * a * b,
        a = Math.round(this.h * Math.cos(b)),
        b = -1 * Math.round(this.h * Math.sin(b));
      8 == this.h ? b += 13 : 12 == this.h ? b += 17 : 10 == this.h && (b += 16);
      return [a, b]
    };
    var Qc = function (a) {
        return function () {
          return a.call(this)
        }
      };
    var Rc = o.window;
    var Sc = function (a, b, c) {
        this.a = a;
        this.c = b || 0;
        this.i = c;
        this.b = u(this.Cb, this)
      };
    v(Sc, F);
    n = Sc.prototype;
    n.Y = 0;
    n.s = function () {
      Sc.u.s.call(this);
      this.N();
      delete this.a;
      delete this.i
    };
    n.X = function (a) {
      this.N();
      var b = this.b,
        a = a !== g ? a : this.c;
      if (!ea(b)) if (b && "function" == typeof b.handleEvent) b = u(b.handleEvent, b);
      else throw Error("Invalid listener argument");
      this.Y = 2147483647 < a ? -1 : Rc.setTimeout(b, a || 0)
    };
    n.N = function () {
      this.ma() && Rc.clearTimeout(this.Y);
      this.Y = 0
    };
    n.ma = function () {
      return 0 != this.Y
    };
    n.Cb = function () {
      this.Y = 0;
      this.a && this.a.call(this.i)
    };
    var Tc = function (a, b, c) {
        this.c = a;
        this.i = c;
        this.a = b || window;
        this.b = u(this.Bb, this)
      };
    v(Tc, F);
    n = Tc.prototype;
    n.I = j;
    n.xa = l;
    n.X = function () {
      this.N();
      this.xa = l;
      var a = Uc(this),
        b = Vc(this);
      a && !b && this.a.mozRequestAnimationFrame ? (this.I = Mb(this.a, "MozBeforePaint", this.b), this.a.mozRequestAnimationFrame(j), this.xa = i) : this.I = a && b ? a.call(this.a, this.b) : this.a.setTimeout(Qc(this.b), 20)
    };
    n.N = function () {
      if (this.ma()) {
        var a = Uc(this),
          b = Vc(this);
        a && !b && this.a.mozRequestAnimationFrame ? L(this.I) : a && b ? b.call(this.a, this.I) : this.a.clearTimeout(this.I)
      }
      this.I = j
    };
    n.ma = function () {
      return this.I != j
    };
    n.Bb = function (a) {
      this.xa && this.I && L(this.I);
      this.I = j;
      this.c.call(this.i, "number" == typeof a ? a : a !== g ? a.timeStamp || ja() : ja())
    };
    n.s = function () {
      this.N();
      Tc.u.s.call(this)
    };
    var Uc = function (a) {
        a = a.a;
        return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || j
      },
      Vc = function (a) {
        a = a.a;
        return a.cancelRequestAnimationFrame || a.webkitCancelRequestAnimationFrame || a.mozCancelRequestAnimationFrame || a.oCancelRequestAnimationFrame || a.msCancelRequestAnimationFrame || j
      };
    var za = {},
      Wc = j,
      Xc = function (a) {
        a = s(a);
        delete za[a];
        Aa() && Wc && Wc.N()
      },
      Zc = function () {
        Wc || (Wc = new Sc(function () {
          Yc()
        }, 20));
        var a = Wc;
        a.ma() || a.X()
      },
      Yc = function () {
        var a = ja();
        ya(za, function (b) {
          $c(b, a)
        });
        Aa() || Zc()
      };
    var ad = function () {
        this.c = 0;
        this.t = this.l = j
      };
    v(ad, P);
    ad.prototype.e = function () {
      this.a("begin")
    };
    ad.prototype.g = function () {
      this.a("end")
    };
    ad.prototype.a = function (a) {
      this.dispatchEvent(a)
    };
    var X = function (a, b, c, d) {
        ad.call(this);
        if (!q(a) || !q(b)) throw Error("Start and end parameters must be arrays");
        if (a.length != b.length) throw Error("Start and end points must be the same length");
        this.m = a;
        this.w = b;
        this.v = c;
        this.r = d;
        this.k = []
      };
    v(X, ad);
    X.prototype.b = 0;
    var bd = function (a) {
        if (0 == a.c) a.b = 0, a.k = a.m;
        else if (1 == a.c) return;
        Xc(a);
        var b = ja();
        a.l = b; - 1 == a.c && (a.l -= a.v * a.b);
        a.t = a.l + a.v;
        a.b || a.e();
        a.a("play"); - 1 == a.c && a.a("resume");
        a.c = 1;
        var c = s(a);
        c in za || (za[c] = a);
        Zc();
        $c(a, b)
      };
    X.prototype.s = function () {
      0 != this.c && (Xc(this), this.c = 0, cd(this, this.b), this.a("stop"), this.g());
      this.a("destroy");
      X.u.s.call(this)
    };
    var $c = function (a, b) {
        a.b = (b - a.l) / (a.t - a.l);
        1 <= a.b && (a.b = 1);
        cd(a, a.b);
        1 == a.b ? (a.c = 0, Xc(a), a.a("finish"), a.g()) : 1 == a.c && a.p()
      },
      cd = function (a, b) {
        ea(a.r) && (b = a.r(b));
        a.k = Array(a.m.length);
        for (var c = 0; c < a.m.length; c++) a.k[c] = (a.w[c] - a.m[c]) * b + a.m[c]
      };
    X.prototype.p = function () {
      this.a("animate")
    };
    X.prototype.a = function (a) {
      this.dispatchEvent(new dd(a, this))
    };
    var dd = function (a, b) {
        H.call(this, a);
        this.x = b.k[0];
        this.y = b.k[1]
      };
    v(dd, H);
    var Y = function (a, b, c, d, e) {
        X.call(this, b, c, d, e);
        this.h = a
      };
    v(Y, X);
    Y.prototype.n = aa;
    Y.prototype.p = function () {
      this.n();
      Y.u.p.call(this)
    };
    Y.prototype.g = function () {
      this.n();
      Y.u.g.call(this)
    };
    Y.prototype.e = function () {
      this.n();
      Y.u.e.call(this)
    };
    var ed = function (a, b, c, d, e) {
        "number" == typeof b && (b = [b]);
        "number" == typeof c && (c = [c]);
        Y.call(this, a, b, c, d, e);
        if (1 != b.length || 1 != c.length) throw Error("Start and end points must be 1D");
      };
    v(ed, Y);
    ed.prototype.n = function () {
      Cc(this.h, this.k[0])
    };
    var fd = function (a, b, c) {
        ed.call(this, a, 1, 0, b, c)
      };
    v(fd, ed);
    fd.prototype.e = function () {
      this.h.style.display = "";
      fd.u.e.call(this)
    };
    fd.prototype.g = function () {
      this.h.style.display = "none";
      fd.u.g.call(this)
    };
    var gd = function (a, b, c) {
        ed.call(this, a, 0, 1, b, c)
      };
    v(gd, ed);
    gd.prototype.e = function () {
      this.h.style.display = "";
      gd.u.e.call(this)
    };
    var hd = function () {
        M.call(this);
        this.a = document.getElementById("moog-bubble");
        this.p = new gd(this.a, 150);
        this.r = new fd(this.a, 150);
        this.c = [];
        this.l = 0;
        this.e = document.getElementById("moog-bubble-text");
        this.g = document.getElementById("moog-wf");
        this.m = [];
        this.h = l;
        N(this, document.body, "keydown", this.n)
      };
    v(hd, M);
    var Mc = [24, 76, 109, 137, 162, 194, 248, 281],
      Pc = function (a) {
        a.l = setTimeout(u(a.t, a), 2E3)
      },
      Nc = function (a) {
        clearTimeout(a.l);
        "block" != a.a.style.display && (bd(a.p), a.a.style.display = "block")
      };
    hd.prototype.t = function () {
      this.a.style.display = "block";
      bd(this.r)
    };
    var Hc = function (a, b, c) {
        a.m.push(b);
        a.c.push(c);
        a.b || (a.b = c)
      },
      Ic = function (a, b) {
        a.b = b;
        y(a.m, function (a) {
          a(b)
        })
      };
    hd.prototype.n = function (a) {
      if (this.h) switch (a.J) {
      case 38:
        Kc(this.b, 1);
        break;
      case 40:
        Kc(this.b, -1);
        break;
      case 37:
        id(this, -1);
        break;
      case 39:
        id(this, 1)
      }
    };
    var id = function (a, b) {
        var c = ra(a.c, a.b) + b;
        0 > c ? c = a.c.length - 1 : c >= a.c.length && (c = 0);
        c = a.c[c];
        Kc(c, 0);
        Ic(a, c)
      };
    var jd = function (a, b, c, d) {
        W.call(this, new V("moog-mod-wheel", "moog-mod-wheel-area", b, 1, 0, "     ".split(" "), l), c, u(function () {}, this));
        this.ta = a;
        this.ua = d;
        this.Z = document.getElementById("moog-mod-wheel");
        this.g = document.getElementById("moog-mod-wheel-ind");
        this.w = 40
      };
    v(jd, W);
    jd.prototype.p = function () {
      return [30, Math.round(174 - 40 * this.value)]
    };
    jd.prototype.ya = function () {
      var a = this.ua;
      a.a || a.e();
      this.ta.dispatchEvent(new T(13, this.value))
    };
    var kd = function (a) {
        M.call(this);
        this.b = a;
        this.c = document.getElementById("moog-switch");
        this.a = l;
        N(this, this.c, "click", this.e)
      };
    v(kd, M);
    kd.prototype.e = function () {
      this.a = !this.a;
      this.c.className = this.a ? "moog-switch-on" : "moog-switch-off";
      ld(this)
    };
    var ld = function (a) {
        a.b.dispatchEvent(new T(14, a.a ? 1 : 0));
        a.b.dispatchEvent(new T(26, a.a ? 0 : 1))
      };
    var nd = function (a) {
        this.a = [];
        this.b = new hd;
        G(this, this.b);
        this.e = new kd(this);
        G(this, this.e);
        this.c = new jd(this, 0.6, this.b, this.e);
        G(this, this.c);
        md(this, a);
        for (a = 0; a < this.a.length; a++) G(this, this.a[a])
      };
    v(nd, P);
    nd.prototype.g = function () {
      for (var a = 0; a < this.a.length; a++) this.a[a].ya();
      ld(this.e)
    };
    var md = function (a, b) {
        b.m && a.a.push(new W(b.m, a.b, u(function (a) {
          this.dispatchEvent(new T(6, 0.9 * a + 0.1))
        }, a)));
        b.v && a.a.push(new W(b.v, a.b, u(function (a) {
          this.dispatchEvent(new T(21, 0.9 * a + 0.1))
        }, a)));
        b.t && a.a.push(new W(b.t, a.b, u(function (a, b) {
          var e = 0;
          switch (b) {
          case 0:
            e = 0.0625;
            break;
          case 1:
            e = 2;
            break;
          case 2:
            e = 4;
            break;
          case 3:
            e = 8;
            break;
          case 4:
            e = 16;
            break;
          case 5:
            e = 32
          }
          this.dispatchEvent(new T(18, e))
        }, a)));
        b.r && a.a.push(new W(b.r, a.b, u(function (a) {
          this.dispatchEvent(new T(19, 2 * a - 1))
        }, a)));
        b.w && a.a.push(new W(b.w, a.b, u(function (a, b) {
          var e = 0;
          switch (b) {
          case 0:
            e = 0;
            break;
          case 1:
            e = 1;
            break;
          case 2:
            e = 2;
            break;
          case 3:
            e = 4;
            break;
          case 4:
            e = 5;
            break;
          case 5:
            e = 6
          }
          this.dispatchEvent(new T(20, e))
        }, a)));
        b.c && a.a.push(new W(b.c, a.b, u(function (a) {
          this.dispatchEvent(new T(4, 100 + 5E3 * a))
        }, a)));
        b.a && a.a.push(new W(b.a, a.b, u(function (a) {
          this.dispatchEvent(new T(7, a))
        }, a)));
        b.k && a.a.push(new W(b.k, a.b, u(function (a) {
          this.dispatchEvent(new T(10, a))
        }, a)));
        b.G && a.a.push(new W(b.G, a.b, u(function (a) {
          this.dispatchEvent(new T(17, 0.9 * a + 0.1))
        }, a)));
        b.n && a.a.push(new W(b.n, a.b, u(function (a, b) {
          var e = 0;
          switch (b) {
          case 0:
            e = 0.0625;
            break;
          case 1:
            e = 2;
            break;
          case 2:
            e = 4;
            break;
          case 3:
            e = 8;
            break;
          case 4:
            e = 16;
            break;
          case 5:
            e = 32
          }
          this.dispatchEvent(new T(15, e))
        }, a)));
        b.p && a.a.push(new W(b.p, a.b, u(function (a, b) {
          var e = 0;
          switch (b) {
          case 0:
            e = 0;
            break;
          case 1:
            e = 1;
            break;
          case 2:
            e = 2;
            break;
          case 3:
            e = 4;
            break;
          case 4:
            e = 5;
            break;
          case 5:
            e = 6
          }
          this.dispatchEvent(new T(16, e))
        }, a)));
        b.g && a.a.push(new W(b.g, a.b, u(function (a) {
          this.dispatchEvent(new T(3, a))
        }, a)));
        b.e && a.a.push(new W(b.e, a.b, u(function (a) {
          this.dispatchEvent(new T(8, a))
        }, a)));
        b.h && a.a.push(new W(b.h, a.b, u(function (a) {
          this.dispatchEvent(new T(11, a))
        }, a)));
        b.V && a.a.push(new W(b.V, a.b, u(function (a) {
          this.dispatchEvent(new T(25, 0.9 * a + 0.1))
        }, a)));
        b.B && a.a.push(new W(b.B, a.b, u(function (a, b) {
          var e = 0;
          switch (b) {
          case 0:
            e = 0.0625;
            break;
          case 1:
            e = 2;
            break;
          case 2:
            e = 4;
            break;
          case 3:
            e = 8;
            break;
          case 4:
            e = 16;
            break;
          case 5:
            e = 32
          }
          this.dispatchEvent(new T(22, e))
        }, a)));
        b.U && a.a.push(new W(b.U, a.b, u(function (a) {
          this.dispatchEvent(new T(23, 2 * a - 1))
        }, a)));
        b.F && a.a.push(new W(b.F, a.b, u(function (a, b) {
          var e = 0;
          switch (b) {
          case 0:
            e = 0;
            break;
          case 1:
            e = 3;
            break;
          case 2:
            e = 2;
            break;
          case 3:
            e = 4;
            break;
          case 4:
            e = 5;
            break;
          case 5:
            e = 6
          }
          this.dispatchEvent(new T(24, e))
        }, a)));
        b.b && a.a.push(new W(b.b, a.b, u(function (a) {
          this.dispatchEvent(new T(5, 1 + 15 * a))
        }, a)));
        b.M && a.a.push(new W(b.M, a.b, u(function (a) {
          this.dispatchEvent(new T(9, a))
        }, a)));
        b.l && a.a.push(new W(b.l, a.b, u(function (a) {
          this.dispatchEvent(new T(12, a))
        }, a)))
      };
    var sd = function () {
        var a = this;
        this.e = this.b = l;
        this.l = this.aa = -1;
        this.$ = l;
        this.a = [];
        this.c = document.getElementById("moog-keyboard");
        this.h = "moog";
        this.n = this.m = l;
        this.ba = od;
        window.google && (window.google.kHL && "en" != window.google.kHL) && (this.ba = pd);
        this.i = new M(this);
        this.g = function (a) {
          a = a || window.event;
          a = a.target.className;
          if (!a) return j;
          a = a.split("moog-key-");
          return a.length > 1 ? parseInt(a[1], 10) : j
        };
        this.k = function (b) {
          b = b || window.event;
          if (a.b && b.which !== 0) {
            var c = a.g(b);
            if (c !== j) {
              b.preventDefault();
              qd(a, c);
              if (!this.n) {
                google && google.log && google.log(this.h, "m");
                this.n = i
              }
            }
          }
        };
        this.w = function (b) {
          var b = b || window.event,
            c = a.g(b);
          if (c !== j) {
            b.preventDefault();
            rd(a, c)
          }
        };
        this.p = function (b) {
          b = b || window.event;
          if (a.g(b) !== j) {
            a.b = i;
            a.k(b)
          }
        };
        this.c.onmousedown = this.k;
        this.c.onmouseover = this.k;
        N(this.i, this.c, "mousedown", this.p);
        N(this.i, this.c, ["mouseup", "mouseout"], this.w);
        N(this.i, document.body, "mouseup", this.B);
        N(this.i, document.body, "keydown", this.r);
        N(this.i, document.body, "keyup", this.v);
        N(this.i, window, "blur", this.t)
      };
    v(sd, P);
    var pd = {
      49: 7,
      50: 9,
      51: 11,
      52: 12,
      53: 14,
      54: 16,
      55: 18,
      56: 19,
      57: 21,
      48: 23
    },
      od = {
        9: 0,
        49: 1,
        81: 2,
        50: 3,
        87: 4,
        51: 5,
        69: 6,
        82: 7,
        53: 8,
        84: 9,
        54: 10,
        89: 11,
        85: 12,
        56: 13,
        73: 14,
        57: 15,
        79: 16,
        48: 17,
        80: 18,
        219: 19,
        189: 20,
        109: 20,
        221: 21,
        187: 22,
        61: 22,
        220: 23,
        65: 7,
        83: 9,
        68: 11,
        70: 12,
        71: 14,
        72: 16,
        74: 18,
        75: 19,
        76: 21,
        186: 23,
        59: 23,
        90: 4,
        88: 6,
        67: 7,
        86: 9,
        66: 11,
        78: 12,
        77: 14,
        188: 16,
        190: 18
      };
    sd.prototype.s = function () {
      sd.u.s.call(this);
      this.i.L();
      this.c = j
    };
    sd.prototype.r = function (a) {
      if (this.e) if (a.J == this.aa) window.clearTimeout(this.l), this.$ = l;
      else if (!a.Ka && (!a.Ja && !a.ga && !a.La) && a.J in this.ba && (9 == a.J && (a.preventDefault(), a.Ea()), this.aa = a.J, qd(this, this.ba[a.J]), !this.m)) google && google.log && google.log(this.h, "k"), this.m = i
    };
    sd.prototype.v = function (a) {
      this.$ = i;
      this.l = window.setTimeout(u(function () {
        this.$ && (this.aa = -1, rd(this, this.ba[a.J]))
      }, this), 10)
    };
    sd.prototype.t = function () {
      this.$ = i;
      this.aa = -1;
      this.a = [];
      this.dispatchEvent(new T(1, 0))
    };
    var qd = function (a, b) {
        var c = document.getElementById("moogk" + b);
        if (c) {
          ab(c, "moog-actv");
          c = a.a.length ? a.a[0] : j;
          a.a.push(b);
          var d = a.a;
          pa(d.length != j);
          x.sort.call(d, xa);
          for (var d = a.a, e = {}, f = 0, h = 0; h < d.length;) {
            var m = d[h++],
              p = typeof m,
              p = "object" == p && m != j || "function" == p ? "o" + s(m) : (typeof m).charAt(0) + m;
            Object.prototype.hasOwnProperty.call(e, p) || (e[p] = i, d[f++] = m)
          }
          d.length = f;
          c !== a.a[0] && a.dispatchEvent(new T(0, a.a[0]))
        }
      },
      rd = function (a, b) {
        var c = document.getElementById("moogk" + b);
        if (c) {
          var d = a.a.length ? a.a[0] : j;
          cb(c, "moog-actv");
          va(a.a, b);
          a.a.length ? d !== a.a[0] && a.dispatchEvent(new T(0, a.a[0])) : a.dispatchEvent(new T(1, 0))
        }
      };
    sd.prototype.B = function () {
      for (var a = this.c.children, b = 0; b < a.length; ++b) cb(a[b], "moog-actv");
      this.b = l
    };
    var ud = function (a, b) {
        M.call(this);
        this.b = a;
        this.z = b;
        this.a = document.getElementById("moog-g-plus");
        this.c = document.getElementById("moog-g-plus-inactive");
        this.e = document.getElementById("moog-g-plus-up");
        td() && (this.a.style.display = "block", this.c.style.display = "block", N(this, this.a, "click", this.g), N(this, this.a, "mouseover", this.l), N(this, this.a, "mouseout", this.h))
      };
    v(ud, M);
    var td = function () {
        return vd[window.google && window.google.kHL || "en"] || j
      };
    ud.prototype.g = function () {
      "o" == this.b.b && (xc(this.b) ? window.gapi ? window.gapi.load("share", u(this.fb, this)) : window.open("about:blank").location = "https://plus.google.com" : bd(this.z.m));
      var a = document.getElementById("hplogo-i");
      if (a) try {
        a.focus()
      } catch (b) {}
    };
    ud.prototype.fb = function () {
      if (window.gapi && window.gapi.share) {
        var a = {
          items: [{
            type: "http://schema.org/WebPage",
            id: location.protocol + "//" + location.host,
            properties: {
              description: [""],
              url: "",
              name: ["Moog"],
              image: [""]
            }
          }]
        },
          b = 'http:' + "//" + 'www.google.com' + "/webhp?doodle=6201726X" + this.b.H(),
          c = td();
        a.items[0].properties.url = [b];
        a.items[0].properties.description[0] = c;
        a.items[0].properties.image[0] = "https://www.google.commoog-hp-thumb.png";
        b = window.location.toString().match(/[?&]authuser=(\d+)/);
        window.gapi.share.lightbox(a, {
          isLoggedInForGooglePlus: !(!window.gbar || !window.gbar.asmc) || !! window.google.doodle.sf,
          onLoginPopupBlocked: function () {
            window.google.log("T12MOOG", "popupblocked")
          },
          sessionIndex: b && b[1] || "",
          sourceForLogging: "moog12",
          onLoginStateChanged: u(function () {
            ka("google.doodle.sf", i);
            this.fb()
          }, this)
        })
      }
    };
    ud.prototype.l = function () {
      "o" == this.b.b && (this.c.style.display = "none", this.e.style.display = "block")
    };
    ud.prototype.h = function () {
      this.e.style.display = "none";
      this.c.style.display = "block"
    };
    var vd = {
      af: "Luister na die liedjie wat ek gemaak het! Skep en deel jou eie musiek met Google se #moogdoodle.",
      ar: "\u0627\u0633\u062a\u0645\u062a\u0639\u0648\u0627 \u0628\u0627\u0644\u0623\u063a\u0646\u064a\u0629 \u0627\u0644\u062a\u064a \u0639\u0645\u0644\u062a\u0647\u0627! \u064a\u0645\u0643\u0646\u0643\u0645 \u0625\u0646\u0634\u0627\u0621 \u0648\u0645\u0632\u062c \u0627\u0644\u0645\u0648\u0633\u064a\u0642\u0649 \u0648\u0645\u0634\u0627\u0631\u0643\u062a\u0647\u0627 \u0645\u0639 moogdoodle\u200f# \u0641\u064a Google \u202b\u202a",
      be: "\u041f\u0430\u0441\u043b\u0443\u0445\u0430\u0439\u0446\u0435, \u044f\u043a\u0443\u044e \u043c\u0435\u043b\u043e\u0434\u044b\u044e \u044f \u0437\u0430\u043f\u0456\u0441\u0430\u045e! \u0421\u0442\u0432\u0430\u0440\u0430\u0439\u0446\u0435 \u0441\u0432\u0430\u044e \u045e\u043b\u0430\u0441\u043d\u0443\u044e \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443\u044e \u043c\u0443\u0437\u044b\u043a\u0443 \u0456 \u0434\u0437\u044f\u043b\u0456\u0446\u0435\u0441\u044f \u0451\u0439 \u0437 \u0441\u044f\u0431\u0440\u0430\u043c\u0456 \u043f\u0440\u0430\u0437 Google #moogdoodle",
      bg: "\u0427\u0443\u0439 \u043f\u0435\u0441\u0435\u043d\u0442\u0430, \u043a\u043e\u044f\u0442\u043e \u043d\u0430\u043f\u0440\u0430\u0432\u0438\u0445! \u0421\u044a\u0437\u0434\u0430\u0439 \u0438 \u0441\u043f\u043e\u0434\u0435\u043b\u0438 \u043f\u0435\u0441\u0435\u043d \u0441 \u043f\u043e\u043c\u043e\u0449\u0442\u0430 \u043d\u0430 \u0441\u0438\u043d\u0442\u0435\u0437\u0430\u0442\u043e\u0440 \u0447\u0440\u0435\u0437 Google #moogdoodle.",
      bs: "Poslu\u0161aj pjesmu koju sam napravio! Napravi svoju sintisajzer muziku i pokazi drugima sa Google-ovim #moogdoodle.",
      ca: "Escolta la can\u00e7\u00f3 que he compost! Crea m\u00fasica amb el teu propi sintetitzador i comparteix-la amb #moogdoodle de Google.",
      cs: "Poslechni si m\u016fj hudebn\u00ed v\u00fdtvor! Svou vlastn\u00ed syntetiz\u00e1torovou muziku m\u016f\u017ee\u0161 vytvo\u0159it a sd\u00edlet d\u00edky #moogdoodle od Googlu.",
      da: "H\u00f8r lige den sang jeg har lavet! Du kan ogs\u00e5 skabe og dele din egen synthesizer musik med Google's #moogdoodle.",
      de: "H\u00f6ren Sie meine Komposition! Mithilfe des Google-Synthesizers #moogdoodle k\u00f6nnen auch Sie Ihre eigene Musik kreieren und sie teilen.",
      el: "\u0386\u03ba\u03bf\u03c5 \u03c4\u03bf \u03c4\u03c1\u03b1\u03b3\u03bf\u03cd\u03b4\u03b9 \u03c0\u03bf\u03c5 \u03bc\u03cc\u03bb\u03b9\u03c2 \u03c3\u03c5\u03bd\u03ad\u03b8\u03b5\u03c3\u03b1! \u0394\u03b7\u03bc\u03b9\u03bf\u03cd\u03c1\u03b3\u03b7\u03c3\u03b5 \u03c4\u03bf \u03b4\u03b9\u03ba\u03cc \u03c3\u03bf\u03c5 \u03c4\u03c1\u03b1\u03b3\u03bf\u03cd\u03b4\u03b9 \u03ba\u03b1\u03b9 \u03bc\u03bf\u03b9\u03c1\u03ac\u03c3\u03bf\u03c5 \u03c4o \u03c3\u03c4\u03bf Google\u2019s #moogdoodle.",
      en: "Check out the song I made! Create and share your own synthesizer music with Google\u2019s #moogdoodle.",
      es: "\u00a1Mira qu\u00e9 canci\u00f3n he hecho! Crea m\u00fasica con tu propio sintetizador y comp\u00e1rtela con #moogdoodle de Google.",
      "es-419": "\u00a1Mira la canci\u00f3n que he hecho! Crea m\u00fasica con tu sintetizador y comp\u00e1rtela con #moogdoodle de Google.",
      eu: "Ikusi nolako kanta sortu dudan! Sortu musika zure sintetizadore propioarekin eta partekatu Google-n #moogdoodle erabiliz",
      fi: "Tsekkaa tekem\u00e4ni biisi! Luo ja jaa omaa syntetisaattorimusiikkia Googlen #moogdoodle:lla.",
      fr: "\u00c9coutez ma composition ! Avec le #moogdood de Google, composez vous aussi votre propre morceau au synth\u00e9tiseur et partagez-le.",
      gl: "\u00a1Olla qu\u00e9 canci\u00f3n fixen! Crea a t\u00faa m\u00fasica co teu propio sintetizador, e comp\u00e1rtela con #moogdooodle de Google",
      hr: "Poslu\u0161ajte moju pjesmu! Stvarajte i dijelite vlastitu glazbu na sintesajzeru sa Googleovim #moogdoodle.",
      hu: "Hallgasd meg a zen\u00e9t, amit kompon\u00e1ltam! K\u00e9sz\u00edtsd el \u00e9s oszd meg a saj\u00e1t szintetiz\u00e1tor sz\u00e1modat a Google #moogdoodle seg\u00edts\u00e9g\u00e9vel.",
      it: "Ascolta la canzone che ho composto! Crea e condividi la tua musica fatta col sintetizzatore grazie al #moogdoodle di Google.",
      iw: "\u05e9\u05de\u05e2\u05d5 \u05d0\u05ea \u05d4\u05e7\u05d8\u05e2 \u05e9\u05d4\u05e7\u05dc\u05d8\u05ea\u05d9! \u05e6\u05e8\u05d5 \u05d5\u05e9\u05ea\u05e4\u05d5 \u05d1\u05e2\u05e6\u05de\u05db\u05dd \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05d4\u05e1\u05d9\u05e0\u05ea\u05d9\u05e1\u05d9\u05d9\u05d6\u05e8 \u05e9\u05dc Google - #moogdoodle",
      ja: "\u81ea\u5206\u306e\u30aa\u30ea\u30b8\u30ca\u30eb\u66f2\u3092\u5275\u3063\u3066\u3001 #moogdoodle \u3067\u5171\u6709\u3057\u3088\u3046\u3002",
      kk: "\u041c\u0435\u043d\u0456\u04a3 \u0436\u0430\u0441\u0430\u0493\u0430\u043d \u04d9\u043d\u0456\u043c\u0434\u0456 \u0442\u044b\u043d\u0434\u0430\u04a3\u044b\u0437! \u0421\u0456\u0437 \u0434\u0435 Google-\u0434\u044b\u04a3 #moogdoodle \u0441\u0438\u043d\u0442\u0435\u0437\u0430\u0442\u043e\u0440\u044b \u0430\u0440\u049b\u044b\u043b\u044b \u04e9\u0437\u0456\u04a3\u0456\u0437\u0434\u0456\u04a3 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u0434\u044b\u049b \u04d9\u0443\u0435\u043d\u0456\u04a3\u0456\u0437\u0434\u0456 \u0436\u0430\u0437\u044b\u043f \u0430\u043b\u044b\u043f, \u0434\u043e\u0441\u0442\u0430\u0440\u044b\u04a3\u044b\u0437\u0431\u0435\u043d \u0431\u04e9\u043b\u0456\u0441\u0435 \u0430\u043b\u0430\u0441\u044b\u0437!",
      ko: "\ub098\ub9cc\uc758 \uace1\uc744 \ub9cc\ub4e4\uc5b4 \ubcf4\uc138\uc694. Google #moogdoodle \ub85c \uc74c\uc545\uc744 \ub9cc\ub4e4\uace0 \uacf5\uc720\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
      lt: "Pasiklausyk mano sukurtos melodijos! Kurk savo muzik\u0105 sintezatoriumi ir dalinkis su \u201eGoogle\u201c #moogdoodle.",
      lv: "Noklausies manu dziesmu! Veido un kop\u012bgo savu sintezatora m\u016bziku ar Google #moogdoodle.",
      mk: "\u0421\u043b\u0443\u0448\u043d\u0435\u0442\u0435 \u0458\u0430 \u043c\u043e\u0458\u0430\u0442\u0430 \u043c\u0443\u0437\u0438\u043a\u0430! \u041a\u0440\u0435\u0438\u0440\u0430\u0458\u0442\u0435 \u0438 \u0441\u043f\u043e\u0434\u0435\u043b\u0435\u0442\u0435 \u0458\u0430 \u0441\u0432\u043e\u0458\u0430\u0442\u0430 \u043c\u0443\u0437\u0438\u043a\u0430 \u043d\u0430 \u0441\u0438\u043d\u0442\u0438\u0441\u0430\u0458\u0437\u0435\u0440 \u0441\u043e #moogdoodle \u043d\u0430 Google.",
      mo: "Uite ce melodie am creat! Compune propria ta muzic\u0103 electronic\u0103 folosind #moogdoodle de la Google.",
      nl: "Moet je luisteren wat voor liedje ik heb gemaakt! Je kunt je eigen synthesizermuziek maken en delen met de #moogdoodle van Google.",
      pl: "Pos\u0142uchaj mojej piosenki! Ty te\u017c mo\u017cesz stworzy\u0107 i udost\u0119pni\u0107 w\u0142asn\u0105 melodi\u0119 dzi\u0119ki #moogdoodle od Google.",
      "pt-BR": "Confira a m\u00fasica que eu fiz! Crie m\u00fasica com seu pr\u00f3prio sintetizador e compartilhe-a com #moogdoodle do Google.",
      "pt-PT": "Oi\u00e7a a m\u00fasica que eu fiz! Crie e partilhe a sua pr\u00f3pria m\u00fasica com o sintetizador #moogdoodle da Google.",
      ro: "Uite ce melodie am creat! Compune propria ta muzic\u0103 electronic\u0103 folosind #moogdoodle de la Google.",
      ru: "\u041f\u043e\u0441\u043b\u0443\u0448\u0430\u0439\u0442\u0435 \u043c\u043e\u044e \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e! \u0412\u044b \u0442\u043e\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u0440\u0435\u043a, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0441\u0438\u043d\u0442\u0435\u0437\u0430\u0442\u043e\u0440, \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u0432 \u0441\u0435\u0433\u043e\u0434\u043d\u044f\u0448\u043d\u0438\u0439 #moogdoodle \u043e\u0442 Google, \u0438 \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0438\u043c \u0441 \u0434\u0440\u0443\u0437\u044c\u044f\u043c\u0438",
      sk: "Vypo\u010duj si m\u00f4j hudobn\u00fd v\u00fdtvor! Svoju vlastn\u00fa syntetiz\u00e1torov\u00fa hudbu m\u00f4\u017ee\u0161 vytvori\u0165 a zdie\u013ea\u0165 v\u010faka #moogdoodle od Googlu.",
      sl: "Poslu\u0161aj moj komad! Ustvari in deli glasbo narejeno s sintetizatorjem Google #moogdoodle.",
      sr: "\u041f\u043e\u0441\u043b\u0443\u0448\u0430\u0458\u0442\u0435 \u043c\u043e\u0458\u0443 \u043f\u0435\u0441\u043c\u0443! \u0421\u0442\u0432\u0430\u0440\u0430\u0458\u0442\u0435 \u0438 \u0434\u0435\u043b\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u043c\u0443\u0437\u0438\u043a\u0443 \u043d\u0430 \u0441\u0438\u043d\u0442\u0435\u0441\u0430\u0458\u0437\u0435\u0440\u0443 \u0441\u0430 Google-\u043e\u0432\u0438\u043c #moogdoodle.",
      sv: "Lyssna p\u00e5 l\u00e5ten jag gjorde! Komponera och dela din egen syntmusik med #moogdoodle fr\u00e5n Google.",
      tr: "Yapt\u0131\u011f\u0131m \u015fark\u0131ya bak\u0131n! Google'dan #moogdoodle arac\u0131l\u0131\u011f\u0131yla kendi m\u00fczi\u011finizi yarat\u0131n ve payla\u015f\u0131n.",
      uk: "\u041f\u043e\u0441\u043b\u0443\u0445\u0430\u0439\u0442\u0435 \u043c\u043e\u044e \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0456\u044e! \u0412\u0438 \u0442\u0435\u0436 \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u0438 \u043c\u0443\u0437\u0438\u0447\u043d\u0438\u0439 \u0442\u0440\u0435\u043a, \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u044e\u0447\u0438 \u0441\u0438\u043d\u0442\u0435\u0437\u0430\u0442\u043e\u0440, \u0432\u0431\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0439 \u0432 #moogdoodle \u0432\u0456\u0434 Google, \u0442\u0430 \u043f\u043e\u0434\u0456\u043b\u0438\u0442\u0438\u0441\u044f \u043d\u0438\u043c \u0437 \u0434\u0440\u0443\u0437\u044f\u043c\u0438",
      "zh-CN": "\u6765\u542c\u542c\u6211\u505a\u7684\u66f2\u5b50\uff01\u60a8\u4e5f\u53ef\u4ee5\u7528 Google #moogdoodle \u521b\u4f5c\u5e76\u5206\u4eab\u81ea\u5df1\u7684\u7535\u5b50\u5408\u6210\u4e50\u3002",
      "zh-TW": "\u4f86\u807d\u807d\u6211\u81ea\u5df1\u505a\u7684\u66f2\u5b50\uff01\u7528 Google #moogdoodle \u5275\u9020\u4e26\u5206\u4eab\u5c6c\u65bc\u4f60\u81ea\u5df1\u7684\u96fb\u5b50\u5408\u6210\u6a02\u3002"
    };
    var wd = function (a) {
        this.e = a;
        this.b = [function () {}];
        this.a = this.c = 0
      },
      xd = function (a, b, c, d) {
        for (var c = c || 1, e = 0; e < c; ++e) if (d) {
          var f = function (a) {
              b(a)
            };
          f.Ab = d((e + 1) / c);
          a.b.push(f)
        } else a.b.push(b);
        return a
      },
      zd = function (a) {
        0 == a.c && yd(a)
      },
      yd = function (a) {
        if (a.c < a.b.length) {
          var b = a.b[a.c++];
          b(b.Ab);
          a.a = window.setTimeout(function () {
            yd(a)
          }, a.e)
        }
      };
    var Ad = function (a, b) {
        M.call(this);
        this.c = a;
        this.z = b;
        this.b = 0;
        this.a = new wd(1);
        this.g = 0;
        this.e = document.getElementById("moog-link");
        this.h = document.getElementById("moog-link-inactive");
        this.l = document.getElementById("moog-link-up");
        N(this, this.e, "click", this.m);
        N(this, this.e, "mouseover", this.p);
        N(this, this.e, "mouseout", this.n);
        ka("google.doodle.ls", u(this.r, this))
      };
    v(Ad, M);
    var Dd = function (a) {
        var b = location.protocol + "//www.google.com/webhp?doodle=6201726X" + a.c.H() + "&hl=" + (window.google.kHL || "en") + "&nord=1";
        Bd(a);
        var c = document.getElementById("moog-gco-script");
        c && c.parentNode && c.parentNode.removeChild(c);
        a.g && window.clearTimeout(a.g);
        var c = "//google-doodles.appspot.com/?callback=google.doodle.ls&url=" + encodeURIComponent(b),
          d = document.createElement("script");
        d.src = c;
        d.id = "moog-gco-script";
        a.g = window.setTimeout(u(function () {
          Cd(b)
        }, a), 2E3);
        (document.getElementById("xjsc") || document.body).appendChild(d)
      };
    Ad.prototype.Na = function (a) {
      for (a = a.target; a; a = a.parentNode) if ("moog-link-tab" == a.id || "moog-link" == a.id) return;
      if (a = document.getElementById("moog-link-tab")) a.style.backgroundPosition = "-251px -529px", a.style.width = "0px", a.style.display = "none", a = document.getElementById("moog-link-text"), a.value = "", a.style.display = "none", this.b = 0
    };
    var Bd = function (a) {
        var b = document.getElementById("moog-link-text");
        if (b) {
          b.value = ". . .";
          var c, d = document.getElementById("moog-link-tab");
          2 != a.b ? (d.style.display = "", window.clearTimeout(a.a.a), a.a = new wd(25), b.style.display = "", c = function (a) {
            return 3 * a * a - 2 * a * a * a
          }, zd(xd(xd(a.a, u(function (a) {
            d.style.width = Math.round(185 * a) + "px";
            d.style.backgroundPosition = Math.round(-251 + 185 * a) + "px -529px";
            b.style.width = Math.round(160 * a) + "px"
          }, a), 12, c), u(function () {
            Xb(this, document, "click", this.Na);
            N(this, document, "click", this.Na)
          }, a))), a.b = 2) : 2 == a.b && (b.style.display = "", window.clearTimeout(a.a.a), a.a = new wd(30), c = function (a) {
            return 0.1 * Math.cos(2 * a * Math.PI) + 0.9
          }, zd(xd(a.a, u(function (a) {
            d.style.width = Math.round(185 * a) + "px";
            var c = -66 + Math.round(-185 + 185 * a);
            d.style.backgroundPosition = c + "px -529px";
            b.style.width = Math.round(160 * a) + "px"
          }, a), 8, c)))
        }
      },
      Cd = function (a) {
        var b = document.getElementById("moog-link-text");
        b && (b.value = a, b.select())
      };
    Ad.prototype.r = function (a) {
      a && ("OK" == a.status && !a.error && a.id) && (window.clearTimeout(this.g), Cd(a.id))
    };
    Ad.prototype.m = function () {
      "o" == this.c.b && (xc(this.c) ? Dd(this) : bd(this.z.m));
      var a = document.getElementById("hplogo-i");
      if (a) try {
        a.focus()
      } catch (b) {}
    };
    Ad.prototype.p = function () {
      "o" == this.c.b && (this.h.style.display = "none", this.l.style.display = "block", 0 == this.b && xc(this.c) && (window.clearTimeout(this.a.a), this.b = 1))
    };
    Ad.prototype.n = function () {
      this.l.style.display = "none";
      this.h.style.display = "block";
      1 == this.b && (window.clearTimeout(this.a.a), document.getElementById("moog-link-tab").style.display = "none", this.b = 0)
    };
    var Ed = function () {
        this.e = document.getElementById("moog-reel-left");
        this.g = document.getElementById("moog-reel-right");
        this.a = 1;
        this.c = 0
      };
    Ed.prototype.b = function () {
      this.a = 0 == this.a ? 21 : this.a - 1;
      this.e.className = this.g.className = "moog-reel-" + this.a;
      this.c = window.setTimeout(u(this.b, this), 50)
    };
    var Z = function (a) {
        this.a = a;
        this.B = new Ad(a, this);
        G(this, this.B);
        this.g = new ud(a, this);
        G(this, this.g);
        this.w = new Ed;
        this.l = document.getElementById("moog-record");
        this.n = document.getElementById("moog-record-active");
        this.t = document.getElementById("moog-record-up");
        this.h = document.getElementById("moog-play");
        this.r = document.getElementById("moog-play-up");
        this.v = document.getElementById("moog-stop");
        this.p = document.getElementById("moog-stop-up");
        this.i = new M(this);
        this.m = new Fd(this.n, 700, 3);
        G(this, this.m);
        this.e = [];
        this.F = [];
        this.b = [];
        this.M = "function" === typeof webkitAudioContext ? this.lb : this.ra;
        this.c = [-45, -45, -45, -45];
        this.k = new Tc(u(this.Z, this));
        G(this, this.k);
        for (var a = this.a, b = u(this.qa, this), c = 0; 4 > c; c++) a.h[c].Ha(b);
        for (a = 0; 4 > a; a++) {
          this.e.push(document.getElementById("moog-meter-" + (a + 1)));
          this.b.push(document.getElementById("moog-meter-needle-" + (a + 1)));
          try {
            "webkitTransformOriginY" in this.b[a].style ? this.b[a].style.webkitTransformOriginY = "100%" : "MozTransformOrigin" in this.b[a].style ? this.b[a].style.MozTransformOrigin = "50% 100%" : "msTransformOrigin" in this.b[a].style ? this.b[a].style.msTransformOrigin = "50% 100%" : "OTransformOrigin" in this.b[a].style ? this.b[a].style.OTransformOrigin = "50% 100%" : "transformOrigin" in this.b[a].style && (this.b[a].style.transformOrigin = "50% 100%")
          } catch (d) {}
          b = document.getElementById("moog-meter-target-" + (a + 1));
          this.F.push(b);
          N(this.i, b, "click", this.mb);
          N(this.i, b, "mouseover", this.ob);
          N(this.i, b, "mouseout", this.nb)
        }
        N(this.i, this.a, "o", this.ta);
        N(this.i, this.a, "r", this.sa);
        N(this.i, this.a, "p", this.ua);
        N(this.i, this.l, "click", this.rb);
        N(this.i, this.l, "mouseover", this.tb);
        N(this.i, this.l, "mouseout", this.sb);
        N(this.i, this.h, "click", this.Fa);
        N(this.i, this.h, "mouseover", this.qb);
        N(this.i, this.h, "mouseout", this.pb);
        N(this.i, this.a, "t", this.Ga)
      };
    v(Z, P);
    Z.prototype.s = function () {
      Z.u.s.call(this);
      this.i.L();
      this.k.N()
    };
    Z.prototype.ta = function () {
      window.clearTimeout(this.w.c);
      this.n.style.display = "none";
      this.v.style.display = "none";
      this.p.style.display = "none";
      Gd(this, i)
    };
    Z.prototype.ua = function () {
      this.n.style.display = "none";
      this.v.style.display = "block";
      this.p.style.display = "block";
      this.r.style.display = "none";
      Gd(this, l)
    };
    Z.prototype.sa = function () {
      this.n.style.display = "block";
      this.t.style.display = "none";
      this.v.style.display = "block";
      this.e[this.a.c].className = "moog-meter-recording";
      Gd(this, l)
    };
    var Gd = function (a, b) {
        var c = b ? "pointer" : "default";
        a.g.a.style.cursor = c;
        a.B.e.style.cursor = c;
        y(a.F, function (a) {
          a.style.cursor = c
        })
      };
    n = Z.prototype;
    n.rb = function () {
      "r" == this.a.b ? this.a.e() : (wc(this.a), this.k.X(), this.w.b());
      var a = document.getElementById("hplogo-i");
      if (a) try {
        a.focus()
      } catch (b) {}
    };
    n.tb = function () {
      "r" != this.a.b && (this.t.style.display = "block")
    };
    n.sb = function () {
      this.t.style.display = "none"
    };
    n.Fa = function () {
      switch (this.a.b) {
      case "r":
        this.a.e();
        break;
      case "p":
        tc(this.a);
        break;
      case "o":
        var a;
        a = this.a;
        if (xc(a)) {
          for (var b = a.k = 0; b < a.a.length; b++) pc(a.a[b]);
          vc(a, "p");
          a = i
        } else a = l;
        a ? (this.w.b(), this.k.X()) : bd(this.m)
      }
      if (a = document.getElementById("hplogo-i")) try {
        a.focus()
      } catch (c) {}
    };
    n.qb = function () {
      "o" == this.a.b ? this.r.style.display = "block" : this.p.style.display = "block"
    };
    n.pb = function () {
      this.r.style.display = "none";
      this.p.style.display = "none"
    };
    n.Ga = function () {
      for (var a = 0; a < this.e.length; a++) this.e[a].className = this.a.c == a ? "moog-meter-active" : "moog-meter-inactive"
    };
    n.mb = function (a) {
      "o" == this.a.b && uc(this.a, parseInt(a.target.id.match(/\d$/)[0], 10) - 1);
      if (a = document.getElementById("hplogo-i")) try {
        a.focus()
      } catch (b) {}
    };
    n.ob = function (a) {
      "o" == this.a.b && (this.e[parseInt(a.target.id.match(/\d$/)[0], 10) - 1].className = "moog-meter-up")
    };
    n.nb = function () {
      "o" == this.a.b && this.Ga()
    };
    var Hd = function (a, b, c) {
        var d = a.b[b].style;
        if ("webkitTransform" in d || "MozTransform" in d || "OTransform" in d || "msTransform" in d) {
          var e = "rotate(" + c + "deg)";
          d.webkitTransform = e;
          d.MozTransform = e;
          d.OTransform = e;
          d.msTransform = e
        } else d.paddingLeft = Math.floor(12.5 * c / 45) + "px";
        a.c[b] = c
      };
    Z.prototype.lb = function (a) {
      var b = this.a.h[a].e,
        a = new Uint8Array(b.frequencyBinCount);
      b.getByteFrequencyData(a);
      for (var b = a[0], c = 0; c < a.length; c++) a[c] > b && (b = a[c]);
      return Math.round(45 * (b / 128 - 1))
    };
    Z.prototype.ra = function (a) {
      -45 < this.c[a] && (this.c[a] -= 2);
      return this.c[a]
    };
    Z.prototype.qa = function (a) {
      this.c[a] = 45
    };
    Z.prototype.Z = function () {
      if ("o" == this.a.b) for (var a = 0; a < this.b.length; a++) Hd(this, a, -45);
      else {
        for (a = 0; a < this.e.length; a++) Hd(this, a, this.M(a));
        this.k.X()
      }
    };
    var Fd = function (a, b, c, d) {
        ed.call(this, a, 0, 1, b, d);
        this.B = c
      };
    v(Fd, ed);
    Fd.prototype.n = function () {
      Cc(this.h, Math.cos(2 * Math.PI * this.B * this.k[0]) / -2 + 0.5)
    };
    Fd.prototype.e = function () {
      this.h.style.display = "";
      Fd.u.e.call(this)
    };
    Fd.prototype.g = function () {
      this.h.style.display = "none";
      Fd.u.g.call(this)
    };
    var $ = function (a, b, c) {
        this.c = b;
        this.l = c;
        this.i = new M(this);
        G(this, this.i);
        this.h = new sd;
        Id(this, this.h);
        this.a = new nd(a);
        Id(this, this.a);
        yc(b, u(this.a.g, this.a));
        this.a.g();
        this.z = new Z(b);
        Id(this, this.z);
        this.e = this.g = l;
        this.p = document.getElementById("moog-led");
        this.m = this.k = 0;
        this.r = "moog";
        this.F = u(function () {
          Jd(this);
          Kd(this);
          O(this.i, document.getElementById("moog"), "mouseover", this.S)
        }, this);
        Ld(this);
        N(this.i, document, "webkitvisibilitychange", this.n);
        N(this.i, document, "visibilitychange", this.n);
        N(this.i, this, "c", this.B);
        N(this.i, document.getElementById("moog"), "mousedown", this.t);
        O(this.i, document.getElementById("moog"), "mouseover", this.S);
        N(this.i, document.body, "keydown", this.v);
        (a = document.forms.f || document.forms.gs || document.forms.tsf || document.forms.gbqf) && a.q && N(this.i, a.q, "focus", this.w);
        Md(this);
        Nd(this)
      };
    v($, P);
    var Nd = function (a) {
        if (!window.google.doodle.hps) {
          window.google.doodle.hps = 1;
          var b = window.top.location.href.toString().match(/\?doodle=([^#&]*)/);
          b && -1 == window.top.location.href.toString().indexOf("#") && (b = b[1].substr(8), zc(a.c, b) && (a.m = setTimeout(u(function () {
            this.z.Fa()
          }, a), 1E3), Ld(a), a.S()))
        }
      };
    $.prototype.n = function () {
      if (document.hidden || document.webkitHidden) Jd(this), O(this.i, document.getElementById("moog"), "mouseover", this.S), Kd(this), tc(this.c), this.c.e()
    };
    $.prototype.s = function () {
      $.u.s.call(this);
      clearTimeout(this.k);
      clearTimeout(this.m)
    };
    var Ld = function (a) {
        clearTimeout(a.k);
        a.k = setTimeout(a.F, 12E4)
      };
    $.prototype.v = function (a) {
      Ld(this);
      27 == a.J && Kd(this)
    };
    $.prototype.t = function () {
      var a = document.getElementById("hplogo-i");
      if (a) try {
        a.focus()
      } catch (b) {}
      setTimeout(function () {
        var a = document.getElementById("hplogo-i");
        if (a) try {
          a.focus()
        } catch (b) {}
      }, 0);
      Ld(this);
      this.S();
      Od(this)
    };
    $.prototype.w = function () {
      Jd(this);
      O(this.i, document.getElementById("moog"), "mouseover", this.S);
      Kd(this)
    };
    $.prototype.S = function () {
      this.e || (this.l.b(), this.e = i)
    };
    var Jd = function (a) {
        a.e && (a.l.a(), a.e = l)
      },
      Od = function (a) {
        if (!a.g && (a.g = i, a.a.b.h = i, a.h.e = i, a.p.style.display = "block", a = document.getElementById("hplogo-i"))) try {
          a.focus()
        } catch (b) {}
      },
      Kd = function (a) {
        a.g && (a.g = l, a.a.b.h = l, a.h.e = l, a.p.style.display = "none")
      },
      Id = function (a, b) {
        b.ka = a;
        G(a, b)
      };
    $.prototype.B = function (a) {
      var b = this.c;
      "p" != b.b && ("r" == b.b && b.a[b.c].a.push(a), fc(a, b.h[b.c]))
    };
    var Md = function (a) {
        a.z && a.z.l && O(a.i, a.z.l, "click", u(a.b, a, "record"));
        a.z && a.z.h && O(a.i, a.z.h, "click", u(a.b, a, "play"));
        a.z && (a.z.g && a.z.g.a) && O(a.i, a.z.g.a, "click", u(a.b, a, "gplus"));
        a.a && (a.a.c && a.a.c.Z) && O(a.i, a.a.c.Z, "click", u(a.b, a, "mwheel"));
        var b = document.getElementById("moog-tooltip");
        b && O(a.i, b, "mousedown", u(a.b, a, "link"));
        (b = document.getElementById("moog-switch")) && O(a.i, b, "click", u(a.b, a, "mswitch"))
      };
    $.prototype.b = function (a) {
      google && google.log && google.log(this.r, a)
    };
    var Pd = function () {},
      Qd = function () {
        for (var a = new Pd, b = [], c = [], d = 0; 10 >= d; d++) 0 == d % 2 && b.push(""), c.push("");
        a.G = new V("moog-volume1", "moog-knob-0", 0.4, 8, 1, b, l);
        a.v = new V("moog-volume2", "moog-knob-1", 0.8, 8, 1, b, l);
        a.V = new V("moog-volume3", "moog-knob-2", 0.4, 8, 1, b, l);
        a.m = new V("mastervol", "moog-knob-master", 0.8, 12, 0, c, l);
        a.c = new V("cutoff", "moog-knob-3", 0.4, 10, 5, b, l);
        a.b = new V("contouramount", "moog-knob-5", 0.4, 10, 5, b, l);
        a.M = new V("sustainlevel", "moog-knob-8", 0, 10, 6, b, l);
        a.a = new V("attacktime", "moog-knob-6", 0, 10, 6, b, l);
        a.e = new V("decaytime", "moog-knob-7", 0.8, 10, 6, b, l);
        a.g = new V("moog-glide", "moog-knob-4", 0.05, 10, 5, b, l);
        a.l = new V("moog-loudness-sustain", "moog-knob-11", 1, 8, 7, b, l);
        a.k = new V("moog-loudness-attack", "moog-knob-9", 0, 8, 7, b, l);
        a.h = new V("moog-loudness-decay", "moog-knob-10", 0.4, 8, 7, b, l);
        a.p = new V("moog-osc1-wf", "moog-knob-osc1-wf", 0.6, 8, 4, "wf0 wf6 wf2 wf3 wf4 wf5".split(" "), i);
        a.w = new V("moog-osc2-wf", "moog-knob-osc2-wf", 0.6, 8, 4, "wf0 wf6 wf2 wf3 wf4 wf5".split(" "), i);
        a.F = new V("moog-osc3-wf", "moog-knob-osc3-wf", 0.6, 8, 4, "wf0 wf1 wf2 wf3 wf4 wf5".split(" "), i);
        b = "LO 32' 16' 8' 4' 2'".split(" ");
        a.n = new V("moog-osc1-rg", "moog-knob-osc1-rg", 2 / (b.length - 1), 8, 2, b, i);
        a.t = new V("moog-osc2-rg", "moog-knob-osc2-rg", 4 / (b.length - 1), 8, 2, b, i);
        a.B = new V("moog-osc3-rg", "moog-knob-osc3-rg", 1 / (b.length - 1), 8, 2, b, i);
        a.r = new V("moog-osc2-pb", "moog-knob-osc2-pb", 0.5, 12, 3, c.slice(2), l);
        a.U = new V("moog-osc3-pb", "moog-knob-osc3-pb", 0.5, 12, 3, c.slice(2), l);
        return a
      };
    var Rd = function (a, b, c) {
        this.b = a.createBiquadFilter();
        this.b.type = 0;
        this.b.frequency.value = c;
        this.a = a.createBiquadFilter();
        this.a.type = 1;
        this.a.frequency.value = b;
        this.b.connect(this.a)
      };
    Rd.prototype.W = function () {
      return this.b
    };
    Rd.prototype.connect = function (a) {
      this.a.connect(a)
    };
    Rd.prototype.pa = function () {
      this.a.disconnect()
    };
    var Td = function (a) {
        this.b = [];
        this.k = a;
        if (this.e = "function" === typeof webkitAudioContext) a: {
          try {
            var b = new webkitAudioContext
          } catch (c) {
            break a
          }
          for (a = 0; 4 > a; a++) {
            var d = [new Bb(b, 0.46, 4, 4, 0, i, l, l, 0, i, 0.05, 0, 0.4, 1), new Bb(b, 0.82, 4, 16, 0, i, l, l, 0, i, 0.05, 0, 0.4, 1), new Bb(b, 0.46, 4, 2, 0, i, l, i, 0.6, i, 0.05, 0, 0.4, 1)],
              e = new xb(b, 2100, 7, 0, 0.8, 0);
            this.b.push(new Ac(b, d, e, 0.82))
          }
          a = new Rd(b, 20, 2E4);
          this.c = new yb(b, this.b, a);
          Sd(this)
        } else if (qb = u(this.l, this), mb && 0 <= na(nb, "10.0.0.0")) {
          D = document.createElement("iframe");
          D.name = "doodle-moog";
          D.style.position = "absolute";
          D.style.top = "-150px";
          D.style.border = 0;
          D.style.width = "1px";
          D.style.height = "1px";
          document.getElementById("hplogo").appendChild(D);
          E = D.contentDocument;
          if (E == g || E == j) E = D.contentWindow.document;
          E.open();
          E.write('<html><head></head><body><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="0" height="0" id="doodle-moog-flash-1" type="application/x-shockwave-flash"><param name="movie" value="moog12-2.swf"><param name="allowScriptAccess" value="always"><object id="doodle-moog-flash-2" type="application/x-shockwave-flash" data="moog12-2.swf" width="0" height="0"><param name="allowScriptAccess" value="always"></object></object></body></html>');
          E.close()
        }
      };
    v(Td, F);
    Td.prototype.s = function () {
      Td.u.s.call(this);
      this.c.a();
      !this.e && pb && pb.d();
      this.g.L();
      this.a.e();
      tc(this.a)
    };
    Td.prototype.l = function () {
      for (var a = pb, b = 0; 4 > b; b++) this.b.push(new ub(a, b, [new tb(a, b, 0), new tb(a, b, 1), new tb(a, b, 2)]));
      this.c = new sb(a);
      Sd(this)
    };
    var Sd = function (a) {
        var b = document,
          c = b.createElement("style");
        c.type = "text/css";
        b.getElementsByTagName("head")[0].appendChild(c);
        c.styleSheet ? c.styleSheet.cssText = "#moog-keyboard .moog-actv{z-index:0}#moog-keyboard s.moog-actv{z-index:2}#moogk0.moog-actv{background-position:0 -1848px}#moogk1.moog-actv{background-position:0 -940px}#moogk2.moog-actv{background-position:0 -137px}#moogk3.moog-actv{background-position:0 -395px}#moogk4.moog-actv{background-position:0 -546px}#moogk5.moog-actv{background-position:0 -504px}#moogk6.moog-actv{background-position:0 -981px}#moogk7.moog-actv{background-position:0 -69px}#moogk8.moog-actv{background-position:0 -654px}#moogk9.moog-actv{background-position:0 -1249px}#moogk10.moog-actv{background-position:-20px -2119px}#moogk11.moog-actv{background-position:0 -1698px}#moogk12.moog-actv{background-position:0 -763px}#moogk13.moog-actv{background-position:-22px -355px}#moogk14.moog-actv{background-position:0 -2051px}#moogk15.moog-actv{background-position:-20px -1521px}#moogk16.moog-actv{background-position:-2px -2229px}#moogk17.moog-actv{background-position:0 -2119px}#moogk18.moog-actv{background-position:0 -1115px}#moogk19.moog-actv{background-position:0 -831px}#moogk20.moog-actv{background-position:0 -1807px}#moogk21.moog-actv{background-position:-1px -1182px}#moogk22.moog-actv{background-position:0 -205px}#moogk23.moog-actv{background-position:-3px -1563px}" : c.appendChild(b.createTextNode("#moog-keyboard .moog-actv{z-index:0}#moog-keyboard s.moog-actv{z-index:2}#moogk0.moog-actv{background-position:0 -1848px}#moogk1.moog-actv{background-position:0 -940px}#moogk2.moog-actv{background-position:0 -137px}#moogk3.moog-actv{background-position:0 -395px}#moogk4.moog-actv{background-position:0 -546px}#moogk5.moog-actv{background-position:0 -504px}#moogk6.moog-actv{background-position:0 -981px}#moogk7.moog-actv{background-position:0 -69px}#moogk8.moog-actv{background-position:0 -654px}#moogk9.moog-actv{background-position:0 -1249px}#moogk10.moog-actv{background-position:-20px -2119px}#moogk11.moog-actv{background-position:0 -1698px}#moogk12.moog-actv{background-position:0 -763px}#moogk13.moog-actv{background-position:-22px -355px}#moogk14.moog-actv{background-position:0 -2051px}#moogk15.moog-actv{background-position:-20px -1521px}#moogk16.moog-actv{background-position:-2px -2229px}#moogk17.moog-actv{background-position:0 -2119px}#moogk18.moog-actv{background-position:0 -1115px}#moogk19.moog-actv{background-position:0 -831px}#moogk20.moog-actv{background-position:0 -1807px}#moogk21.moog-actv{background-position:-1px -1182px}#moogk22.moog-actv{background-position:0 -205px}#moogk23.moog-actv{background-position:-3px -1563px}"));
        a.a = new sc(a.b);
        G(a, a.a);
        a.g = new $(a.k, a.a, a.c);
        G(a, a.g);
        a.h = new Dc;
        G(a, a.h);
        window.WebFontConfig || (ka("WebFontConfig.google.families", ["Open+Sans::latin"]), a = document.createElement("script"), a.src = ("https:" == document.location.protocol ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js", a.type = "text/javascript", a.async = "true", (document.getElementById("xjsc") || document.body).appendChild(a))
      },
      Ud = function () {
        ob && (ob.L(), ob = j)
      },
      Vd = function () {
        if (document.getElementById("hplogo")) {
          Ud();
          if (window.google && window.google.rein && window.google.dstr && (!window.google.doodle || !window.google.doodle.jesr)) ka("google.doodle.jesr", i), window.google.rein.push(Vd), window.google.dstr.push(Ud);
          window.google && (window.google.psy && window.google.psy.q && window.google.msg) && window.google.msg.listen(22, function () {
            Ud();
            return i
          });
          ob = new Td(Qd())
        }
      };
    window.google && window.google.x ? window.google.x({
      id: "DOODLE"
    }, Vd) : Vd();
  } catch (fwe) {
    google.ml(fwe, false, {
      cause: DOODLE
    });
  }
})();