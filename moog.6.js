(function () {
  try {
    var g = void 0,
      i = !0,
      j = null,
      k = !1,
      l, o = this,
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
      a.v = b.prototype;
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
          var n = d[h] || "",
            p = e[h] || "",
            m = RegExp("(\\d*)(\\D*)", "g"),
            A = RegExp("(\\d*)(\\D*)", "g");
          do {
            var r = m.exec(n) || ["", "", ""],
              t = A.exec(p) || ["", "", ""];
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
      for (var d = a.length, e = [], f = 0, h = da(a) ? a.split("") : a, n = 0; n < d; n++) if (n in h) {
        var p = h[n];
        b.call(c, p, n, a) && (e[f++] = p)
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
      return k
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
        for (b in a) return k;
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
    var Da, Ea, Fa, Ga, Ha = function () {
        return o.navigator ? o.navigator.userAgent : j
      };
    Ga = Fa = Ea = Da = k;
    var Ja;
    if (Ja = Ha()) {
      var Ka = o.navigator;
      Da = 0 == Ja.indexOf("Opera");
      Ea = !Da && -1 != Ja.indexOf("MSIE");
      Fa = !Da && -1 != Ja.indexOf("WebKit");
      Ga = !Da && !Fa && "Gecko" == Ka.product
    }
    var La = Da,
      z = Ea,
      Ma = Ga,
      Na = Fa,
      Oa;
    a: {
      var Pa = "",
        Qa;
      if (La && o.opera) var Ra = o.opera.version,
        Pa = "function" == typeof Ra ? Ra() : Ra;
      else if (Ma ? Qa = /rv\:([^\);]+)(\)|;)/ : z ? Qa = /MSIE\s+([^\);]+)(\)|;)/ : Na && (Qa = /WebKit\/(\S+)/), Qa) var Sa = Qa.exec(Ha()),
        Pa = Sa ? Sa[1] : "";
      if (z) {
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
        return Xa[9] || (Xa[9] = z && !! document.documentMode && 9 <= document.documentMode)
      };
    !z || Ya();
    !Ma && !z || z && Ya() || Ma && C("1.9.1");
    z && C("9");
    var Za = function (a) {
        a = a.className;
        return da(a) && a.match(/\S+/g) || []
      },
      $a = function (a, b) {
        for (var c = Za(a), d = wa(arguments, 1), e = c, f = 0; f < d.length; f++) 0 <= ra(e, d[f]) || e.push(d[f]);
        a.className = c.join(" ")
      },
      bb = function (a, b) {
        var c = Za(a),
          d = wa(arguments, 1),
          c = ab(c, d);
        a.className = c.join(" ")
      },
      ab = function (a, b) {
        return sa(a, function (a) {
          return !(0 <= ra(b, a))
        })
      };
    var cb = k,
      db = "",
      fb = function (a) {
        a = a.match(/[\d]+/g);
        a.length = 3;
        return a.join(".")
      };
    if (navigator.plugins && navigator.plugins.length) {
      var gb = navigator.plugins["Shockwave Flash"];
      gb && (cb = i, gb.description && (db = fb(gb.description)));
      navigator.plugins["Shockwave Flash 2.0"] && (cb = i, db = "2.0.0.11")
    } else if (navigator.mimeTypes && navigator.mimeTypes.length) {
      var hb = navigator.mimeTypes["application/x-shockwave-flash"];
      (cb = hb && hb.enabledPlugin) && (db = fb(hb.enabledPlugin.description))
    } else try {
      var ib = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
        cb = i,
        db = fb(ib.GetVariable("$version"))
    } catch (jb) {
      try {
        ib = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), cb = i, db = "6.0.21"
      } catch (kb) {
        try {
          ib = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), cb = i, db = fb(ib.GetVariable("$version"))
        } catch (lb) {}
      }
    }
    var mb = cb,
      nb = db;
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
    l = tb.prototype;
    l.N = function (a) {
      this.a.osv(this.b, this.c, a)
    };
    l.ka = function (a) {
      this.a.oswf(this.b, this.c, a)
    };
    l.Ba = function (a) {
      this.a.ospb(this.b, this.c, a)
    };
    l.ia = function (a) {
      this.a.osr(this.b, this.c, a)
    };
    l.eb = function () {
      this.a.oskpc(this.b, this.c, i)
    };
    l.bb = function () {
      this.a.oskpc(this.b, this.c, k)
    };
    l.Da = function () {
      this.a.osfm(this.b, this.c, i)
    };
    l.Ca = function () {
      this.a.osfm(this.b, this.c, k)
    };
    l.$a = function (a) {
      this.a.osml(this.b, this.c, a)
    };
    l.cb = function () {
      this.a.osg(this.b, this.c, i)
    };
    l.ab = function () {
      this.a.osg(this.b, this.c, k)
    };
    l.Sa = function (a) {
      this.a.osgd(this.b, this.c, a)
    };
    l.Na = function (a) {
      this.a.osan(this.b, this.c, a)
    };
    l.Pa = function (a) {
      this.a.oegsat(this.b, this.c, a)
    };
    l.Qa = function (a) {
      this.a.oegsdt(this.b, this.c, a)
    };
    l.Ra = function (a) {
      this.a.oegssl(this.b, this.c, a)
    };
    var ub = function (a, b, c) {
        this.c = a;
        this.a = c;
        this.b = b
      };
    l = ub.prototype;
    l.Ta = function (a) {
      this.g && this.g(this.b);
      this.c.sskd(this.b, a)
    };
    l.Ia = function (a) {
      this.g = a
    };
    l.Ua = function () {
      this.c.ssku(this.b)
    };
    l.N = function (a) {
      this.c.ssv(this.b, a)
    };
    l.Za = function (a) {
      this.c.sslpc(this.b, a)
    };
    l.Va = function (a) {
      this.c.sslpct(this.b, a)
    };
    l.Wa = function (a) {
      this.c.sslpcat(this.b, a)
    };
    l.Xa = function (a) {
      this.c.sslpcdt(this.b, a)
    };
    l.Ya = function (a) {
      this.c.sslpcsl(this.b, a)
    };
    l.X = function () {
      return j
    };
    l.connect = function () {};
    l.qa = function () {};
    var F = function () {};
    F.prototype.V = k;
    F.prototype.M = function () {
      this.V || (this.V = i, this.s())
    };
    var G = function (a, b) {
        a.H || (a.H = []);
        a.H.push(b)
      };
    F.prototype.s = function () {
      this.H && vb.apply(j, this.H);
      if (this.W) for (; this.W.length;) this.W.shift()()
    };
    var vb = function (a) {
        for (var b = 0, c = arguments.length; b < c; ++b) {
          var d = arguments[b];
          ca(d) ? vb.apply(j, d) : d && "function" == typeof d.M && d.M()
        }
      };
    var xb = function (a, b, c, d, e, f) {
        this.fa = a;
        this.a = a.createBiquadFilter();
        this.a.type = 0;
        this.b = b;
        this.e = c;
        this.c = d;
        this.g = e;
        this.h = f;
        wb(this)
      };
    xb.prototype.Aa = function () {
      var a = this.fa.currentTime;
      this.a.frequency.cancelScheduledValues(a);
      this.a.frequency.value = this.b;
      this.a.frequency.setValueAtTime(this.b, a);
      var b = this.e * this.b;
      this.a.frequency.exponentialRampToValueAtTime(b, a + this.c);
      this.a.frequency.exponentialRampToValueAtTime(this.b + this.h * (b - this.b), a + this.c + this.g)
    };
    var wb = function (a) {
        a.a.frequency.cancelScheduledValues(0);
        a.a.frequency.value = a.b
      };
    xb.prototype.X = function () {
      return this.a
    };
    xb.prototype.connect = function (a) {
      this.a.connect(a)
    };
    xb.prototype.qa = function () {
      this.a.disconnect()
    };
    var yb = function (a, b, c) {
        this.fa = a;
        this.lb = c;
        for (a = 0; a < b.length; a++) b[a].connect(c.X())
      };
    yb.prototype.b = function () {
      window.setTimeout(u(function () {
        this.lb.connect(this.fa.destination)
      }, this), 0)
    };
    yb.prototype.a = function () {
      this.lb.qa()
    };
    var Ab = function (a, b, c, d) {
        this.g = a;
        this.a = 0;
        this.b = 4;
        this.h = b;
        this.c = c;
        this.e = d;
        zb(this)
      };
    Ab.prototype.Aa = function () {
      zb(this);
      this.b = this.a = 0
    };
    var zb = function (a) {
        a.m = 0 >= a.h ? 1 : a.g / a.h;
        0 >= a.c ? (a.i = 1, a.l = 1) : (a.i = (1 - a.e) * a.g / a.c, a.l = a.e * a.g / a.c)
      };
    var Bb = function (a, b, c, d, e, f, h, n, p, m, A, r, t, B) {
        this.g = 1 / a.sampleRate;
        this.b = 0;
        this.p = b;
        this.t = c;
        this.u = d;
        this.m = e;
        this.e = f;
        this.wa = h;
        this.H = n;
        this.w = p;
        this.c = j;
        this.i = m;
        this.l = A;
        this.n = this.a = this.h = j;
        this.o = 0;
        this.S = new Ab(this.g, r, t, B)
      },
      Cb = 5 / 3;
    l = Bb.prototype;
    l.N = function (a) {
      this.p = a
    };
    l.ka = function (a) {
      this.t = a
    };
    l.Ba = function (a) {
      this.m = a
    };
    l.ia = function (a) {
      this.u = a
    };
    l.eb = function () {
      this.e = i
    };
    l.bb = function () {
      this.e = k
    };
    l.Da = function () {
      this.wa = i
    };
    l.Ca = function () {
      this.wa = k
    };
    l.$a = function (a) {
      this.w = a
    };
    l.cb = function () {
      this.i = i
    };
    l.ab = function () {
      this.i = k
    };
    l.Sa = function (a) {
      this.l = a
    };
    l.Na = function (a) {
      this.o = a
    };
    l.Pa = function (a) {
      var b = this.S;
      b.h = a;
      zb(b)
    };
    l.Qa = function (a) {
      var b = this.S;
      b.c = a;
      zb(b)
    };
    l.Ra = function (a) {
      var b = this.S;
      b.e = a;
      zb(b)
    };
    var Db = function (a, b, c, d, e) {
        var b = b.outputBuffer,
          f = b.getChannelData(1),
          h = b.getChannelData(0);
        a.H && !a.c && (a.c = new Float32Array(b.length));
        var n;
        n = a.o;
        a.e || (n = 0);
        n = 55 * a.u * Math.pow(2, (n + -4) / 12);
        var p;
        p = Cb;
        a.e || (p = 8);
        p = Math.abs(a.m * (p - 1)) + 1;
        p = 0 <= a.m ? p : 1 / p;
        for (var m, A, r, t = 0; t < b.length; ++t) {
          m = a.S;
          switch (m.b) {
          case 0:
            m.a += m.m;
            1 <= m.a && (m.a = 1, m.b = 1);
            break;
          case 1:
            m.a -= m.i;
            m.a <= m.e && (m.a = m.e, m.b = 2);
            break;
          case 3:
            m.a -= m.l, 0 >= m.a && (m.a = 0, m.b = 4)
          }
          m = m.a;
          var B = a;
          r = p;
          var eb = a,
            w;
          w = a;
          var Ia = n;
          !w.i || w.a === j || 0 >= w.l || Math.abs(w.a - Ia) <= Math.abs(w.h) ? w = w.a = w.n = Ia : (w.n != Ia && (w.h = (Ia - w.a) / (w.l / w.g), w.n = Ia), w.a += w.h, w = w.a);
          r *= !c || !eb.wa ? w : (0.75 * c[t] + 1.25) * w;
          eb = 2 / r;
          B.b > eb && (B.b -= eb);
          r = B.b * r / 2;
          B.b += B.g;
          switch (a.t) {
          case 0:
            A = 4 * ((0.5 < r ? 1 - r : r) - 0.25);
            break;
          case 1:
            A = (A = 0.5 > r) ? 4 * r - 1 : -2 * r + 1;
            break;
          case 2:
            A = 2 * (r - 0.5);
            break;
          case 3:
            A = -2 * (r - 0.5);
            break;
          case 4:
            A = 0.5 > r ? 1 : -1;
            break;
          case 5:
            A = r < 1 / 3 ? 1 : -1;
            break;
          case 6:
            A = 0.25 > r ? 1 : -1
          }
          a.H && (a.c[t] = A * a.w);
          m *= A * a.p;
          0 == d ? h[t] = m : 1 == d ? h[t] += m : (h[t] = (h[t] + m) / e, f && (f[t] = h[t]))
        }
      };
    var Eb = function (a) {
        Eb[" "](a);
        return a
      };
    Eb[" "] = aa;
    !z || Ya();
    var Fb = !z || Ya(),
      Gb = z && !C("8");
    !Na || C("528");
    Ma && C("1.9b") || z && C("8") || La && C("9.5") || Na && C("528");
    Ma && !C("8") || z && C("9");
    var H = function (a, b) {
        this.type = a;
        this.a = this.target = b
      };
    v(H, F);
    l = H.prototype;
    l.s = function () {
      delete this.type;
      delete this.target;
      delete this.a
    };
    l.R = k;
    l.ma = i;
    l.Fa = function () {
      this.R = i
    };
    l.preventDefault = function () {
      this.ma = k
    };
    var I = function (a, b) {
        a && Hb(this, a, b)
      };
    v(I, H);
    l = I.prototype;
    l.target = j;
    l.clientX = 0;
    l.clientY = 0;
    l.xa = 0;
    l.L = 0;
    l.La = k;
    l.Ka = k;
    l.ha = k;
    l.Ma = k;
    l.U = j;
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
        a.xa = b.screenY || 0;
        a.L = b.keyCode || 0;
        a.La = b.ctrlKey;
        a.Ka = b.altKey;
        a.ha = b.shiftKey;
        a.Ma = b.metaKey;
        a.U = b;
        b.defaultPrevented && a.preventDefault();
        delete a.R
      };
    I.prototype.Fa = function () {
      I.v.Fa.call(this);
      this.U.stopPropagation ? this.U.stopPropagation() : this.U.cancelBubble = i
    };
    I.prototype.preventDefault = function () {
      I.v.preventDefault.call(this);
      var a = this.U;
      if (a.preventDefault) a.preventDefault();
      else if (a.returnValue = k, Gb) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
      } catch (b) {}
    };
    I.prototype.s = function () {
      I.v.s.call(this);
      this.a = this.target = this.U = j
    };
    var Ib = function () {},
      Jb = 0;
    Ib.prototype.key = 0;
    Ib.prototype.P = k;
    Ib.prototype.a = k;
    Ib.prototype.handleEvent = function (a) {
      return this.b ? this.listener.call(this.ga || this.src, a) : this.listener.handleEvent.call(this.listener, a)
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
            G: 0,
            D: 0
          });
          h = h[b];
          d in h || (h[d] = {
            G: 0,
            D: 0
          }, h.G++);
          var h = h[d],
            n = s(a),
            p;
          h.D++;
          if (h[n]) {
            p = h[n];
            for (f = 0; f < p.length; f++) if (h = p[f], h.listener == c && h.ga == e) {
              if (h.P) break;
              return p[f].key
            }
          } else p = h[n] = [], h.G++;
          f = Nb();
          f.src = a;
          var m = h = new Ib;
          if (ea(c)) m.b = i;
          else if (c && c.handleEvent && ea(c.handleEvent)) m.b = k;
          else throw Error("Invalid listener argument");
          m.listener = c;
          m.c = f;
          m.src = a;
          m.type = b;
          m.capture = !! d;
          m.ga = e;
          m.a = k;
          m.key = ++Jb;
          m.P = k;
          c = h.key;
          f.key = c;
          p.push(h);
          Kb[c] = h;
          K[n] || (K[n] = []);
          K[n].push(h);
          a.addEventListener ? (a == o || !a.Ja) && a.addEventListener(b, f, d) : a.attachEvent(b in Lb ? Lb[b] : Lb[b] = "on" + b, f);
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
        else if (d = !! d, a = Rb(a, b, d)) for (f = 0; f < a.length; f++) if (a[f].listener == c && a[f].capture == d && a[f].ga == e) {
          Sb(a[f].key);
          break
        }
      },
      Sb = function (a) {
        if (!Kb[a]) return k;
        var b = Kb[a];
        if (b.P) return k;
        var c = b.src,
          d = b.type,
          e = b.c,
          f = b.capture;
        c.removeEventListener ? (c == o || !c.Ja) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in Lb ? Lb[d] : Lb[d] = "on" + d, e);
        c = s(c);
        e = J[d][f][c];
        if (K[c]) {
          var h = K[c];
          va(h, b);
          0 == h.length && delete K[c]
        }
        b.P = i;
        e.hb = i;
        Tb(d, f, c, e);
        delete Kb[a];
        return i
      },
      Tb = function (a, b, c, d) {
        if (!d.oa && d.hb) {
          for (var e = 0, f = 0; e < d.length; e++) d[e].P ? d[e].c.src = j : (e != f && (d[f] = d[e]), f++);
          d.length = f;
          d.hb = k;
          0 == f && (delete J[a][b][c], J[a][b].G--, 0 == J[a][b].G && (delete J[a][b], J[a].G--), 0 == J[a].G && delete J[a])
        }
      },
      Ub = function (a) {
        var b, c = 0,
          d = b == j;
        b = !! b;
        if (a == j) ya(K, function (a) {
          for (var e = a.length - 1; 0 <= e; e--) {
            var f = a[e];
            if (d || b == f.capture) Sb(f.key), c++
          }
        });
        else if (a = s(a), K[a]) for (var a = K[a], e = a.length - 1; 0 <= e; e--) {
          var f = a[e];
          if (d || b == f.capture) Sb(f.key), c++
        }
      },
      Rb = function (a, b, c) {
        var d = J;
        return b in d && (d = d[b], c in d && (d = d[c], a = s(a), d[a])) ? d[a] : j
      },
      Wb = function (a, b, c, d, e) {
        var f = 1,
          b = s(b);
        if (a[b]) {
          a.D--;
          a = a[b];
          a.oa ? a.oa++ : a.oa = 1;
          try {
            for (var h = a.length, n = 0; n < h; n++) {
              var p = a[n];
              p && !p.P && (f &= Vb(p, e) !== k)
            }
          } finally {
            a.oa--, Tb(c, d, b, a)
          }
        }
        return Boolean(f)
      },
      Vb = function (a, b) {
        a.a && Sb(a.key);
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
          var n;
          if (!(n = b)) a: {
            n = ["window", "event"];
            for (var p = o; f = n.shift();) if (p[f] != j) p = p[f];
            else {
              n = j;
              break a
            }
            n = p
          }
          f = n;
          n = i in e;
          p = k in e;
          if (n) {
            if (0 > f.keyCode || f.returnValue != g) return i;
            a: {
              var m = k;
              if (0 == f.keyCode) try {
                f.keyCode = -1;
                break a
              } catch (A) {
                m = i
              }
              if (m || f.returnValue == g) f.returnValue = i
            }
          }
          m = new I;
          Hb(m, f, this);
          f = i;
          try {
            if (n) {
              for (var r = [], t = m.a; t; t = t.parentNode) r.push(t);
              h = e[i];
              h.D = h.G;
              for (var B = r.length - 1; !m.R && 0 <= B && h.D; B--) m.a = r[B], f &= Wb(h, r[B], d, i, m);
              if (p) {
                h = e[k];
                h.D = h.G;
                for (B = 0; !m.R && B < r.length && h.D; B++) m.a = r[B], f &= Wb(h, r[B], d, k, m)
              }
            } else f = Vb(c, m)
          } finally {
            r && (r.length = 0), m.M()
          }
          return f
        }
        d = new I(b, this);
        try {
          f = Vb(c, d)
        } finally {
          d.M()
        }
        return f
      };
    var L = function (a) {
        this.j = a;
        this.l = []
      };
    v(L, F);
    var Xb = [],
      M = function (a, b, c, d) {
        q(c) || (Xb[0] = c, c = Xb);
        for (var e = 0; e < c.length; e++) a.l.push(Mb(b, c[e], d || a, k, a.j || a))
      },
      N = function (a, b, c, d, e, f) {
        if (q(c)) for (var h = 0; h < c.length; h++) N(a, b, c[h], d, e, f);
        else a.l.push(Pb(b, c, d || a, e, f || a.j || a))
      },
      Yb = function (a, b, c, d, e, f) {
        if (q(c)) for (var h = 0; h < c.length; h++) Yb(a, b, c[h], d, e, f);
        else {
          a: {
            d = d || a;
            f = f || a.j || a;
            e = !! e;
            if (b = Rb(b, c, e)) for (c = 0; c < b.length; c++) if (!b[c].P && b[c].listener == d && b[c].capture == e && b[c].ga == f) {
              b = b[c];
              break a
            }
            b = j
          }
          b && (b = b.key, Sb(b), va(a.l, b))
        }
      };
    L.prototype.s = function () {
      L.v.s.call(this);
      y(this.l, Sb);
      this.l.length = 0
    };
    L.prototype.handleEvent = function () {
      throw Error("EventHandler.handleEvent not implemented");
    };
    var O = function () {};
    v(O, F);
    l = O.prototype;
    l.Ja = i;
    l.la = j;
    l.addEventListener = function (a, b, c, d) {
      Mb(this, a, b, c, d)
    };
    l.removeEventListener = function (a, b, c, d) {
      Qb(this, a, b, c, d)
    };
    l.dispatchEvent = function (a) {
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
          for (f = this; f; f = f.la) e.push(f);
          f = c[i];
          f.D = f.G;
          for (var h = e.length - 1; !a.R && 0 <= h && f.D; h--) a.a = e[h], d &= Wb(f, e[h], a.type, i, a) && a.ma != k
        }
        if (k in c) if (f = c[k], f.D = f.G, b) for (h = 0; !a.R && h < e.length && f.D; h++) a.a = e[h], d &= Wb(f, e[h], a.type, k, a) && a.ma != k;
        else for (e = this; !a.R && e && f.D; e = e.la) a.a = e, d &= Wb(f, e, a.type, k, a) && a.ma != k;
        a = Boolean(d)
      } else a = i;
      return a
    };
    l.s = function () {
      O.v.s.call(this);
      Ub(this);
      this.la = j
    };
    var Zb = j,
      $b = j,
      ac = j,
      bc = function () {
        if (!Zb) {
          Zb = {};
          $b = {};
          ac = {};
          for (var a = 0; 65 > a; a++) Zb[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), $b[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a), ac[$b[a]] = a
        }
      };
    var cc = function (a) {
        for (var b = Array(Math.ceil(a.length / 8)), c = 0, d = 0; c < a.length; c += 8, d++) {
          for (var e = 0, f = 0; 8 > f; ++f) e *= 2, e |= a[c + f] ? 1 : 0;
          b[d] = e
        }
        if (!ca(b)) throw Error("encodeByteArray takes an array as a parameter");
        bc();
        a = $b;
        c = [];
        for (d = 0; d < b.length; d += 3) {
          var h = b[d],
            n = (e = d + 1 < b.length) ? b[d + 1] : 0,
            p = (f = d + 2 < b.length) ? b[d + 2] : 0,
            m = h >> 2,
            h = (h & 3) << 4 | n >> 4,
            n = (n & 15) << 2 | p >> 6,
            p = p & 63;
          f || (p = 64, e || (n = 64));
          c.push(a[m], a[h], a[n], a[p])
        }
        return c.join("")
      },
      P = function (a, b) {
        for (var c = [], d = 0; d < b; ++d) c.push( !! (a & 1)), a >>= 1;
        return c
      },
      dc = function (a, b, c) {
        if (b + c > a.length) return -1;
        for (var d = 0, e = 0; e < c; ++e) d *= 2, d |= a[b + c - e - 1] ? 1 : 0;
        return d
      },
      Q = function (a, b, c, d) {
        a = [i, i].concat(P(a, 5));
        if (b == c) return a.concat(P(0, 20));
        b = -1 + Math.round((b - c) / (d - c) * Math.pow(2, 20));
        return a.concat(P(b, 20))
      },
      R = function (a, b, c, d) {
        a = dc(a, b, 20);
        return 0 == a ? c : Math.max(0, a / Math.pow(2, 20) * (d - c) + c)
      },
      ec = function (a, b) {
        return [i, i].concat(P(a, 5)).concat(P(b, 3))
      },
      fc = function (a, b) {
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
        return [i, i].concat(P(a, 5)).concat(P(c, 3))
      };
    var S = function (a, b) {
        H.call(this, "c");
        this.r = a;
        this.k = b
      };
    v(S, H);
    var T = {
      Ub: 0,
      Vb: 1,
      jb: 2,
      Tb: 3,
      Sb: 4,
      Ob: 5,
      Zb: 6,
      Pb: 7,
      Qb: 8,
      Rb: 9,
      Wb: 10,
      Xb: 11,
      Yb: 12,
      $b: 13,
      ib: 14,
      ac: 15,
      cc: 16,
      bc: 17,
      ec: 18,
      dc: 19,
      gc: 20,
      fc: 21,
      ic: 22,
      hc: 23,
      kc: 24,
      jc: 25,
      kb: 26
    },
      gc = function (a, b) {
        switch (a.r) {
        case 0:
          b.Ta(a.k);
          break;
        case 1:
          b.Ua();
          break;
        case 2:
          y(b.a, function (a) {
            this.k ? a.cb() : a.ab()
          }, a);
          break;
        case 3:
          y(b.a, function (a) {
            a.Sa(this.k)
          }, a);
          break;
        case 4:
          b.Za(a.k);
          break;
        case 5:
          b.Va(a.k);
          break;
        case 6:
          b.N(a.k);
          break;
        case 7:
          b.Wa(a.k);
          break;
        case 8:
          b.Xa(a.k);
          break;
        case 9:
          b.Ya(a.k);
          break;
        case 10:
          y(b.a, function (a) {
            a.Pa(this.k)
          }, a);
          break;
        case 11:
          y(b.a, function (a) {
            a.Qa(this.k)
          }, a);
          break;
        case 12:
          y(b.a, function (a) {
            a.Ra(this.k)
          }, a);
          break;
        case 13:
          b.a[2].$a(a.k);
          break;
        case 14:
          a.k ? (b.a[0].Da(), b.a[1].Da()) : (b.a[0].Ca(), b.a[1].Ca());
          break;
        case 15:
          b.a[0].ia(a.k);
          break;
        case 16:
          b.a[0].ka(a.k);
          break;
        case 17:
          b.a[0].N(a.k);
          break;
        case 18:
          b.a[1].ia(a.k);
          break;
        case 19:
          b.a[1].Ba(a.k);
          break;
        case 20:
          b.a[1].ka(a.k);
          break;
        case 21:
          b.a[1].N(a.k);
          break;
        case 22:
          b.a[2].ia(a.k);
          break;
        case 23:
          b.a[2].Ba(a.k);
          break;
        case 24:
          b.a[2].ka(a.k);
          break;
        case 25:
          b.a[2].N(a.k);
          break;
        case 26:
          a.k ? b.a[2].eb() : b.a[2].bb();
          break;
        default:
          qa("No execute handler for mutation kind %s.", a.r)
        }
      };
    S.prototype.I = function () {
      switch (this.r) {
      case 0:
        return [k].concat(P(this.k, 5));
      case 1:
        return [i, k];
      case 2:
        return [k].concat(P(this.k ? 24 : 25, 5));
      case 3:
        return Q(this.r, this.k, 0, 1);
      case 4:
        return Q(this.r, this.k, 100, 5100);
      case 5:
        return Q(this.r, this.k, 1, 16);
      case 6:
        return Q(this.r, this.k, 0.1, 1);
      case 7:
        return Q(this.r, this.k, 0, 1);
      case 8:
        return Q(this.r, this.k, 0, 1);
      case 9:
        return Q(this.r, this.k, 0, 1);
      case 10:
        return Q(this.r, this.k, 0, 1);
      case 11:
        return Q(this.r, this.k, 0, 1);
      case 12:
        return Q(this.r, this.k, 0, 1);
      case 13:
        return Q(this.r, this.k, 0, 1);
      case 14:
        return [k].concat(P(this.k ? 26 : 27, 5));
      case 15:
        return fc(this.r, this.k);
      case 16:
        return ec(this.r, this.k);
      case 17:
        return Q(this.r, this.k, 0.1, 1);
      case 18:
        return fc(this.r, this.k);
      case 19:
        return Q(this.r, this.k, -1, 1);
      case 20:
        return ec(this.r, this.k);
      case 21:
        return Q(this.r, this.k, 0.1, 1);
      case 22:
        return fc(this.r, this.k);
      case 23:
        return Q(this.r, this.k, -1, 1);
      case 24:
        return ec(this.r, this.k);
      case 25:
        return Q(this.r, this.k, 0.1, 1);
      case 26:
        return [k].concat(P(this.k ? 28 : 29, 5));
      default:
        qa("No serialization handler for mutation kind %s.", this.r)
      }
    };
    var hc = function (a, b, c) {
        var d = b;
        if (b + 1 >= a.length) return b;
        if (a[b++] == k) {
          a = dc(a, b, 5);
          b += 5;
          if (-1 == a) return d;
          23 >= a ? c.push(new S(T.Ub, a)) : 24 == a ? c.push(new S(T.jb, 1)) : 25 == a ? c.push(new S(T.jb, 0)) : 26 == a ? c.push(new S(T.ib, 1)) : 27 == a ? c.push(new S(T.ib, 0)) : 28 == a ? c.push(new S(T.kb, 1)) : 29 == a && c.push(new S(T.kb, 0))
        } else if (a[b++] == k) c.push(new S(T.Vb, 0));
        else {
          var e = dc(a, b, 5),
            b = b + 5;
          if (-1 == e) return d;
          var f = dc(a, b, 3);
          if (-1 == f || -1 == e) return d;
          switch (e) {
          case T.ac:
          case T.ec:
          case T.ic:
            c.push(new S(e, {
              "0": 32,
              1: 16,
              2: 8,
              3: 4,
              4: 2,
              5: 0.0625
            }[f]));
            b += 3;
            break;
          case T.cc:
          case T.gc:
          case T.kc:
            c.push(new S(e, f));
            b += 3;
            break;
          case T.Tb:
            c.push(new S(e, R(a, b, 0, 1)));
            b += 20;
            break;
          case T.Sb:
            c.push(new S(e, R(a, b, 100, 5100)));
            b += 20;
            break;
          case T.Ob:
            c.push(new S(e, R(a, b, 1, 16)));
            b += 20;
            break;
          case T.Zb:
            c.push(new S(e, R(a, b, 0.1, 1)));
            b += 20;
            break;
          case T.Pb:
            c.push(new S(e, R(a, b, 0, 1)));
            b += 20;
            break;
          case T.Qb:
            c.push(new S(e, R(a, b, 0, 1)));
            b += 20;
            break;
          case T.Rb:
            c.push(new S(e, R(a, b, 0, 1)));
            b += 20;
            break;
          case T.Wb:
            c.push(new S(e, R(a, b, 0, 1)));
            b += 20;
            break;
          case T.Xb:
            c.push(new S(e, R(a, b, 0, 1)));
            b += 20;
            break;
          case T.Yb:
            c.push(new S(e, R(a, b, 0, 1)));
            b += 20;
            break;
          case T.$b:
            c.push(new S(e, R(a, b, 0, 1)));
            b += 20;
            break;
          case T.bc:
            c.push(new S(e, R(a, b, 0.1, 1)));
            b += 20;
            break;
          case T.dc:
            c.push(new S(e, R(a, b, -1, 1)));
            b += 20;
            break;
          case T.fc:
            c.push(new S(e, R(a, b, 0.1, 1)));
            b += 20;
            break;
          case T.hc:
            c.push(new S(e, R(a, b, -1, 1)));
            b += 20;
            break;
          case T.jc:
            c.push(new S(e, R(a, b, 0.1, 1)));
            b += 20;
            break;
          default:
            qa("No deserialization handler for mutation kind %s.", e)
          }
        }
        return b
      };
    var ic = function (a, b) {
        this.a = a;
        this.b = b
      },
      jc = function (a, b) {
        for (var c = 0; c < a.b.length; c++) gc(a.b[c], b)
      };
    ic.prototype.I = function (a, b) {
      var c = this.b;
      if (a && (c = sa(c, function (a) {
        return 0 == a.r || 1 == a.r
      }), 0 == c.length)) return b + this.a;
      var d;
      d = this.a;
      a && (d += b);
      d = d < Math.pow(2, 6) ? [k].concat(P(d, 6)) : [i].concat(P(d, 10));
      d = 1 == c.length ? d.concat([i]) : d.concat([k]).concat(P(c.length, 5));
      for (var e = 0; e < c.length; e++) d = d.concat(c[e].I());
      return d
    };
    var kc = function (a, b, c) {
        if (b >= a.length) return b;
        var d = b,
          e = a[b++] == k ? 6 : 10,
          f = dc(a, b, e),
          b = b + e;
        if (-1 == f || b >= a.length) return d;
        if (a[b++] == i) e = 1;
        else if (e = dc(a, b, 5), b += 5, -1 == e) return d;
        for (var h, n = [], p = 0; p < e; p++) {
          h = hc(a, b, n);
          if (h == b) return d;
          b = h
        }
        c.push(new ic(f, n));
        return b
      };
    var lc = function (a, b) {
        this.g = a;
        this.B = b || [];
        this.b = this.e = this.c = 0;
        this.a = []
      };
    v(lc, O);
    var nc = function (a) {
        a.B = [];
        a.b = 0;
        a.a = [];
        a.c = setTimeout(u(function () {
          mc(this, i)
        }, a), 50)
      },
      mc = function (a, b) {
        a.b++;
        if (0 < a.a.length) {
          var c = oc(a.a);
          a.B.push(new ic(a.b, c));
          a.b = 0;
          a.a = []
        }
        b && (a.c = setTimeout(u(function () {
          mc(this, i)
        }, a), 50))
      },
      oc = function (a) {
        for (var b = {}, c, d, e = 0; e < a.length; e++) c = a[e].r, 0 == c || 1 == c ? d = a[e] : b[c] = a[e];
        a = [];
        c = 0;
        for (var f in b) a[c++] = b[f];
        d && a.push(d);
        return a
      },
      qc = function (a) {
        0 == a.B.length ? a.dispatchEvent("f") : pc(a, 0)
      },
      rc = function (a) {
        var b = new S(1, 0);
        jc(new ic(0, [b]), a.g)
      },
      sc = function (a) {
        rc(a);
        a.dispatchEvent("f");
        clearTimeout(a.e)
      },
      pc = function (a, b) {
        0 < b && jc(a.B[b - 1], a.g);
        if (b == a.B.length) rc(a), a.dispatchEvent("f");
        else {
          var c = 50 * a.B[b].a;
          a.e = setTimeout(u(function () {
            pc(this, b + 1)
          }, a), c)
        }
      };
    lc.prototype.I = function (a) {
      if (0 == this.B.length) return [];
      for (var b = 0, c, d = 0, e = [], f = 0; f < this.B.length; f++) a && 0 != f ? (c = this.B[f].I(i, b), q(c) ? (e = e.concat(c), d++) : b = c) : (e = e.concat(this.B[f].I()), d++);
      return P(d, 10).concat(e)
    };
    var tc = function (a) {
        this.l = a;
        this.j = new L(this);
        G(this, this.j);
        this.a = [];
        for (var b = 0; 4 > b; b++) {
          var c = new lc(a[b], j);
          M(this.j, c, "f", this.o);
          this.a.push(c)
        }
        this.c = this.h = 0;
        this.b = "o";
        this.i = this.m = this.n = 0
      };
    v(tc, O);
    tc.prototype.s = function () {
      tc.v.s.call(this);
      this.e();
      uc(this)
    };
    var vc = function (a, b) {
        a.c = b;
        a.g();
        a.dispatchEvent("t")
      },
      xc = function (a) {
        a.p = (new Date).getTime();
        a.n = setTimeout(u(a.e, a), 2E4);
        a.m = setTimeout(u(function () {
          this.dispatchEvent("s")
        }, a), 17E3);
        for (var b = 0; b < a.a.length; b++) sc(a.a[b]), a.h = 0;
        nc(a.a[a.c]);
        wc(a, "r");
        a.g();
        for (b = 0; b < a.a.length; b++) b != a.c && qc(a.a[b])
      };
    tc.prototype.e = function () {
      clearTimeout(this.n);
      clearTimeout(this.m);
      var a = ((new Date).getTime() - this.p) / 1E3;
      0 > a || 2E4 < a || (a > this.i && (this.i = a), a = "track&tn=" + this.c + "&l=" + encodeURIComponent("" + a) + "&rt=" + encodeURIComponent("" + this.i), google && google.log && google.log("moog", a));
      a = this.a[this.c];
      clearTimeout(a.c);
      mc(a, k);
      if (a.B.length) {
        var b = new S(1, 0);
        a.B.push(new ic(a.b + 1, [b]))
      }
      for (a = 0; a < this.a.length; a++) sc(this.a[a]);
      wc(this, "o");
      this.g();
      if (2 < this.a[this.c].B.length) for (a = 0; 3 > a; a++) if (b = (this.c + a + 1) % 4, !(2 < this.a[b].B.length)) {
        vc(this, b);
        return
      }
      vc(this, this.c)
    };
    var yc = function (a) {
        return ua(a.a, function (a) {
          return 2 < a.B.length
        })
      },
      uc = function (a) {
        for (var b = 0; b < a.a.length; b++) sc(a.a[b]);
        wc(a, "o");
        a.g()
      },
      wc = function (a, b) {
        a.b != b && (a.b = b, a.dispatchEvent(b))
      },
      zc = function (a, b) {
        a.g = b
      };
    tc.prototype.o = function () {
      this.h++;
      4 <= this.h && (wc(this, "o"), this.g())
    };
    tc.prototype.I = function () {
      for (var a = [], b = [], c = 0, d, e = 0; e < this.a.length; e++) d = this.a[e].I(), a.push(d), b.push(d.length), c += d.length;
      if (0 == c) return "";
      if (12240 >= c) return cc(ta(a, function (a, b) {
        return a.concat(b)
      }));
      for (var f = [], h = [], e = 0; e < this.a.length; e++) d = this.a[e].I(i), f.push(d), h.push(d.length);
      d = c;
      for (e = f.length - 1; 0 <= e && !(d -= b[e] - h[e], 12240 >= d); e--);
      if (0 <= e) {
        d = [];
        for (h = 0; h < a.length; h++) d = d.concat(h < e ? a[h] : f[h]);
        return cc(d)
      }
      d = [];
      for (e = a = 0; e < f.length; e++) {
        a += h[e];
        if (12240 < a) break;
        d = d.concat(f[e])
      }
      return cc(d)
    };
    var Ac = function (a, b) {
        if ("" == b) return k;
        var c = b;
        2 == c.length % 4 ? c += ".." : 3 == c.length % 4 && (c += ".");
        bc();
        for (var d = ac, e = [], f = 0; f < c.length;) {
          var h = d[c.charAt(f++)],
            n = f < c.length ? d[c.charAt(f)] : 0;
          ++f;
          var p = f < c.length ? d[c.charAt(f)] : 0;
          ++f;
          var m = f < c.length ? d[c.charAt(f)] : 0;
          ++f;
          if (h == j || n == j || p == j || m == j) throw Error();
          e.push(h << 2 | n >> 4);
          64 != p && (e.push(n << 4 & 240 | p >> 2), 64 != m && e.push(p << 6 & 192 | m))
        }
        c = [];
        for (d = 0; d < e.length; ++d) {
          f = e[d];
          for (h = 0; 8 > h; ++h) c.push( !! (f & 128)), f *= 2
        }
        if (!c || 0 == c.length) return k;
        for (d = f = e = 0; d < a.a.length; d++) {
          a: {
            f = a.a[d];
            h = c;
            p = n = e;
            m = dc(h, n, 10);
            if (-1 != m) {
              for (var n = n + 10, A = g, r = [], t = 0; t < m; t++) {
                A = kc(h, n, r);
                if (A == n) {
                  f = p;
                  break a
                }
                n = A
              }
              f.B = r
            }
            f = n
          }
          if (f == e) break;
          e = f
        }
        return 0 != f
      };
    var Bc = function (a, b, c, d) {
        this.fa = a;
        this.a = b;
        this.b = c;
        this.g = a.createGainNode();
        this.e = a.createAnalyser();
        this.e.smoothingTimeConstant = 0.5;
        this.N(d);
        this.c = C("20.0") ? a.createJavaScriptNode(1024, 1, 1) : a.createJavaScriptNode(1024, 0, 1);
        this.c.onaudioprocess = u(this.Cb, this);
        this.c.connect(this.b.X());
        this.b.connect(this.g);
        this.g.connect(this.e)
      };
    l = Bc.prototype;
    l.Ta = function (a) {
      y(this.a, function (b) {
        b.Na(a);
        b.S.Aa()
      });
      this.b.Aa()
    };
    l.Ia = function () {};
    l.Ua = function () {
      y(this.a, function (a) {
        a = a.S;
        3 != a.b && (a.l = 0 >= a.c ? 1 : a.a * a.g / a.c, a.b = 3)
      })
    };
    l.Za = function (a) {
      var b = this.b;
      b.b = a;
      wb(b)
    };
    l.Va = function (a) {
      var b = this.b;
      b.e = a;
      wb(b)
    };
    l.Wa = function (a) {
      var b = this.b;
      b.c = a;
      wb(b)
    };
    l.Xa = function (a) {
      var b = this.b;
      b.g = a;
      wb(b)
    };
    l.Ya = function (a) {
      var b = this.b;
      b.h = a;
      wb(b)
    };
    l.Cb = function (a) {
      Db(this.a[2], a, j, 0);
      Db(this.a[0], a, this.a[2].c, 1);
      Db(this.a[1], a, this.a[2].c, 2, this.a.length)
    };
    l.N = function (a) {
      this.g.gain.value = a
    };
    l.X = function () {
      return this.c
    };
    l.connect = function (a) {
      this.e.connect(a)
    };
    l.qa = function () {
      this.e.disconnect()
    };
    var Cc = function (a, b) {
        var c = 9 == a.nodeType ? a : a.ownerDocument || a.document;
        return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, j)) ? c[b] || c.getPropertyValue(b) || "" : ""
      },
      Dc = function (a, b) {
        var c = a.style;
        "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
      };
    var Ec = function () {
        L.call(this);
        this.a = document.getElementById("moog-tooltip");
        var a = document.getElementById("moog");
        a && (Dc(this.a, 0), M(this, a, "click", this.Ib), M(this, document.body, "keydown", this.Jb), M(this, a, "mouseover", this.Lb), M(this, a, "mouseout", this.Kb), M(this, this.a, "mouseover", this.Mb))
      };
    v(Ec, L);
    l = Ec.prototype;
    l.nc = 1E3;
    l.mc = 500;
    l.fb = 0.99;
    l.Nb = 0.25;
    l.pa = j;
    l.Ea = k;
    var Fc = function (a) {
        a.pa && window.clearTimeout(a.pa)
      },
      Gc = function (a, b) {
        a.Ea != b && ((a.Ea = b) ? (a.a.style.visibility = "visible", a.a.className = "full-visible", Dc(a.a, a.fb)) : (a.a.className = "", Dc(a.a, 0)))
      },
      Hc = function (a) {
        a.Ea ? (a.a.className = "half-visible", Dc(a.a, a.Nb)) : Fc(a)
      };
    l = Ec.prototype;
    l.Ib = function () {
      Hc(this)
    };
    l.Jb = function () {
      Hc(this)
    };
    l.Mb = function () {
      Gc(this, i);
      this.a.className = "full-visible";
      Dc(this.a, this.fb)
    };
    l.Lb = function () {
      Fc(this);
      this.pa = window.setTimeout(u(function () {
        Gc(this, i)
      }, this), this.nc)
    };
    l.Kb = function () {
      Fc(this);
      this.pa = window.setTimeout(u(function () {
        Gc(this, k)
      }, this), this.mc)
    };
    var U = function (a, b, c, d, e, f, h) {
        this.id = a;
        this.c = b;
        this.b = "moog-keyboard";
        this.value = c || 0;
        this.h = d;
        this.e = e;
        this.a = f;
        this.g = !! h
      },
      V = function (a, b, c) {
        L.call(this);
        this.c = b;
        Ic(this.c, u(this.ta, this), this);
        this.u = 200;
        this.a = document.getElementById(a.id);
        this.e = document.getElementById(a.c);
        this.sa = document.getElementById(a.b);
        this.a || qa('The "host" element for this knob could not be found.');
        this.e || qa('The "clickable" element for this knob could not be found.');
        this.sa || qa('The "actionable" element for this knob could not be found.');
        1 == a.a.length && qa("A knob with discrete states must have at least two positions.");
        this.value = a.value;
        this.p = Math.ceil(a.value * (a.a.length - 1));
        this.g = a.a;
        this.w = a.g;
        this.b = k;
        this.n = a.e;
        Cc(this.a, "width");
        this.C = 0;
        this.i = a.h;
        this.ra = c;
        this.t = 0;
        this.z = this.value;
        this.m = k;
        this.a.innerHTML = "<span class=knob-indicator></span>";
        this.h = this.a.getElementsByTagName("span")[0];
        a = this.o(this.value);
        this.h.style.left = a[0] + "px";
        this.h.style.top = a[1] + "px";
        M(this, document, "mouseup", this.yb);
        M(this, document, "mousemove", this.xb);
        this.g && (M(this, this.e, "click", this.vb), M(this, this.e, "contextmenu", this.zb));
        M(this, this.e, "mousedown", this.wb);
        this.a.a = function () {
          return k
        }
      };
    v(V, L);
    l = V.prototype;
    l.wb = function (a) {
      this.C = a.xa;
      this.m = k;
      this.t = ja();
      this.z = this.value;
      this.b = i;
      Jc(this.c, this);
      a.preventDefault();
      return k
    };
    l.yb = function () {
      this.b = k
    };
    l.xb = function (a) {
      if (this.b) if (this.m = i, a = this.z + (this.C - a.xa) / (this.w ? 50 : this.u), a = 1 < a ? 1 : a, a = 0 > a ? 0 : a, this.w) {
        var b = this.g.length,
          c = Math.ceil(a * (b - 1));
        this.value = a = c / (b - 1);
        this.p = c;
        Kc(this, a, c)
      } else this.value = a, Kc(this, a)
    };
    l.vb = function (a) {
      if (this.m && 500 < ja() - this.t) return k;
      a.ha ? Lc(this, -1) : Lc(this, 1);
      a.preventDefault();
      return k
    };
    l.zb = function (a) {
      if (this.m && 500 < ja() - this.t) return k;
      a.ha ? Lc(this, 1) : Lc(this, -1);
      a.preventDefault();
      return k
    };
    l.ya = function () {
      this.ra(this.value, this.p)
    };
    var Mc = [0, 0.125, 0.75 * (-1 / 3) + 0.5, 0.3125, 0.5, 0.6875, 0.75 * (1 / 3) + 0.5, 0.875, 1],
      Lc = function (a, b) {
        var c = a.g.length,
          d;
        if (c == Mc.length) for (var e = 0; e < Mc.length; e++) {
          var f = Mc[e] - a.value;
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
        a.value = c == Mc.length ? Mc[d] : d / (c - 1);
        a.p = d;
        Kc(a, a.value, d)
      },
      Kc = function (a, b, c) {
        if (1 >= b && 0 <= b) {
          a.ya();
          b = Math.round(100 * b) / 100;
          if (0 <= c && a.g[c]) {
            c = a.g[c];
            if (0 == c.indexOf("wf")) {
              var d = a.c,
                c = parseInt(c.charAt(2), 10),
                e = a.n;
              d.e.style.display = "none";
              d.a.style.left = Nc[e] + "px";
              d.g.className = "moog-wf-" + c;
              d.g.style.display = "block"
            } else d = a.c, e = a.n, d.g.style.display = "none", d.a.style.left = Nc[e] + "px", d.e.innerHTML = c, d.e.style.display = "block";
            Oc(d)
          } else c = a.c, d = a.n, c.g.style.display = "none", c.a.style.left = Nc[d] + "px", c.e.innerHTML = (10 * b).toFixed(1), c.e.style.display = "block", Oc(c);
          b = a.o(b);
          a.h.style.left = b[0] + "px";
          a.h.style.top = b[1] + "px"
        }
        $a(a.a, "knob-glow");
        clearTimeout(a.F);
        Pc(a)
      },
      Pc = function (a) {
        Qc(a.c);
        a.F = setTimeout(function () {
          bb(a.a, "knob-glow")
        }, 2E3)
      };
    V.prototype.ta = function (a) {
      a != this && (clearTimeout(this.F), bb(this.a, "knob-glow"))
    };
    V.prototype.o = function (a) {
      var b = 2 * Math.PI,
        b = (0.75 - (1 - 0.85) / 2) * b + -0.85 * a * b,
        a = Math.round(this.i * Math.cos(b)),
        b = -1 * Math.round(this.i * Math.sin(b));
      8 == this.i ? b += 13 : 12 == this.i ? b += 17 : 10 == this.i && (b += 16);
      return [a, b]
    };
    var Rc = function (a) {
        return function () {
          return a.call(this)
        }
      };
    var Sc = o.window;
    var Tc = function (a, b, c) {
        this.a = a;
        this.c = b || 0;
        this.j = c;
        this.b = u(this.Fb, this)
      };
    v(Tc, F);
    l = Tc.prototype;
    l.Z = 0;
    l.s = function () {
      Tc.v.s.call(this);
      this.O();
      delete this.a;
      delete this.j
    };
    l.Y = function (a) {
      this.O();
      var b = this.b,
        a = a !== g ? a : this.c;
      if (!ea(b)) if (b && "function" == typeof b.handleEvent) b = u(b.handleEvent, b);
      else throw Error("Invalid listener argument");
      this.Z = 2147483647 < a ? -1 : Sc.setTimeout(b, a || 0)
    };
    l.O = function () {
      this.na() && Sc.clearTimeout(this.Z);
      this.Z = 0
    };
    l.na = function () {
      return 0 != this.Z
    };
    l.Fb = function () {
      this.Z = 0;
      this.a && this.a.call(this.j)
    };
    var Uc = function (a, b, c) {
        this.c = a;
        this.j = c;
        this.a = b || window;
        this.b = u(this.Eb, this)
      };
    v(Uc, F);
    l = Uc.prototype;
    l.J = j;
    l.za = k;
    l.Y = function () {
      this.O();
      this.za = k;
      var a = Vc(this),
        b = Wc(this);
      a && !b && this.a.mozRequestAnimationFrame ? (this.J = Mb(this.a, "MozBeforePaint", this.b), this.a.mozRequestAnimationFrame(j), this.za = i) : this.J = a && b ? a.call(this.a, this.b) : this.a.setTimeout(Rc(this.b), 20)
    };
    l.O = function () {
      if (this.na()) {
        var a = Vc(this),
          b = Wc(this);
        a && !b && this.a.mozRequestAnimationFrame ? Sb(this.J) : a && b ? b.call(this.a, this.J) : this.a.clearTimeout(this.J)
      }
      this.J = j
    };
    l.na = function () {
      return this.J != j
    };
    l.Eb = function (a) {
      this.za && this.J && Sb(this.J);
      this.J = j;
      this.c.call(this.j, "number" == typeof a ? a : a !== g ? a.timeStamp || ja() : ja())
    };
    l.s = function () {
      this.O();
      Uc.v.s.call(this)
    };
    var Vc = function (a) {
        a = a.a;
        return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || j
      },
      Wc = function (a) {
        a = a.a;
        return a.cancelRequestAnimationFrame || a.webkitCancelRequestAnimationFrame || a.mozCancelRequestAnimationFrame || a.oCancelRequestAnimationFrame || a.msCancelRequestAnimationFrame || j
      };
    var za = {},
      Xc = j,
      Yc = function (a) {
        a = s(a);
        delete za[a];
        Aa() && Xc && Xc.O()
      },
      $c = function () {
        Xc || (Xc = new Tc(function () {
          Zc()
        }, 20));
        var a = Xc;
        a.na() || a.Y()
      },
      Zc = function () {
        var a = ja();
        ya(za, function (b) {
          ad(b, a)
        });
        Aa() || $c()
      };
    var bd = function () {
        this.g = 0;
        this.t = this.i = j
      };
    v(bd, O);
    bd.prototype.h = function () {
      this.c("begin")
    };
    bd.prototype.l = function () {
      this.c("end")
    };
    bd.prototype.c = function (a) {
      this.dispatchEvent(a)
    };
    var cd = function (a, b, c, d) {
        bd.call(this);
        if (!q(a) || !q(b)) throw Error("Start and end parameters must be arrays");
        if (a.length != b.length) throw Error("Start and end points must be the same length");
        this.n = a;
        this.z = b;
        this.w = c;
        this.p = d;
        this.e = [];
        this.C = k
      };
    v(cd, bd);
    cd.prototype.a = 0;
    var W = function (a) {
        if (0 == a.g) a.a = 0, a.e = a.n;
        else if (1 == a.g) return;
        Yc(a);
        var b = ja();
        a.i = b; - 1 == a.g && (a.i -= a.w * a.a);
        a.t = a.i + a.w;
        a.a || a.h();
        a.c("play"); - 1 == a.g && a.c("resume");
        a.g = 1;
        var c = s(a);
        c in za || (za[c] = a);
        $c();
        ad(a, b)
      },
      ed = function (a, b) {
        Yc(a);
        a.g = 0;
        b && (a.a = 1);
        dd(a, a.a);
        a.c("stop");
        a.l()
      };
    cd.prototype.s = function () {
      0 == this.g || ed(this, k);
      this.c("destroy");
      cd.v.s.call(this)
    };
    var ad = function (a, b) {
        a.a = (b - a.i) / (a.t - a.i);
        1 <= a.a && (a.a = 1);
        dd(a, a.a);
        1 == a.a ? (a.g = 0, Yc(a), a.c("finish"), a.l()) : 1 == a.g && a.o()
      },
      dd = function (a, b) {
        ea(a.p) && (b = a.p(b));
        a.e = Array(a.n.length);
        for (var c = 0; c < a.n.length; c++) a.e[c] = (a.z[c] - a.n[c]) * b + a.n[c]
      };
    cd.prototype.o = function () {
      this.c("animate")
    };
    cd.prototype.c = function (a) {
      this.dispatchEvent(new fd(a, this))
    };
    var fd = function (a, b) {
        H.call(this, a);
        this.x = b.e[0];
        this.y = b.e[1]
      };
    v(fd, H);
    var X = function (a, b, c, d, e) {
        cd.call(this, b, c, d, e);
        this.b = a
      };
    v(X, cd);
    X.prototype.m = aa;
    X.prototype.o = function () {
      this.m();
      X.v.o.call(this)
    };
    X.prototype.l = function () {
      this.m();
      X.v.l.call(this)
    };
    X.prototype.h = function () {
      this.m();
      X.v.h.call(this)
    };
    var gd = function (a, b, c, d, e) {
        if (2 != b.length || 2 != c.length) throw Error("Start and end points must be 2D");
        X.apply(this, arguments)
      };
    v(gd, X);
    gd.prototype.m = function () {
      var a = this.b.style,
        b;
      if (b = this.C) this.u === g && (b = this.b, this.u = "rtl" == (Cc(b, "direction") || (b.currentStyle ? b.currentStyle.direction : j) || b.style && b.style.direction)), b = this.u;
      a[b ? "right" : "left"] = Math.round(this.e[0]) + "px";
      this.b.style.top = Math.round(this.e[1]) + "px"
    };
    var hd = function (a, b, c, d, e) {
        "number" == typeof b && (b = [b]);
        "number" == typeof c && (c = [c]);
        X.call(this, a, b, c, d, e);
        if (1 != b.length || 1 != c.length) throw Error("Start and end points must be 1D");
      };
    v(hd, X);
    hd.prototype.m = function () {
      Dc(this.b, this.e[0])
    };
    var id = function (a, b, c) {
        hd.call(this, a, 1, 0, b, c)
      };
    v(id, hd);
    id.prototype.h = function () {
      this.b.style.display = "";
      id.v.h.call(this)
    };
    id.prototype.l = function () {
      this.b.style.display = "none";
      id.v.l.call(this)
    };
    var jd = function (a, b, c) {
        hd.call(this, a, 0, 1, b, c)
      };
    v(jd, hd);
    jd.prototype.h = function () {
      this.b.style.display = "";
      jd.v.h.call(this)
    };
    var kd = function () {
        L.call(this);
        this.a = document.getElementById("moog-bubble");
        this.n = new jd(this.a, 150);
        this.o = new id(this.a, 150);
        this.c = [];
        this.i = 0;
        this.e = document.getElementById("moog-bubble-text");
        this.g = document.getElementById("moog-wf");
        this.m = [];
        this.h = k;
        M(this, document.body, "keydown", this.p)
      };
    v(kd, L);
    var Nc = [24, 76, 109, 137, 162, 194, 248, 281],
      Qc = function (a) {
        a.i = setTimeout(u(a.t, a), 2E3)
      },
      Oc = function (a) {
        clearTimeout(a.i);
        "block" != a.a.style.display && (W(a.n), a.a.style.display = "block")
      };
    kd.prototype.t = function () {
      this.a.style.display = "block";
      W(this.o)
    };
    var Ic = function (a, b, c) {
        a.m.push(b);
        a.c.push(c);
        a.b || (a.b = c)
      },
      Jc = function (a, b) {
        a.b = b;
        y(a.m, function (a) {
          a(b)
        })
      };
    kd.prototype.p = function (a) {
      if (this.h) switch (a.L) {
      case 38:
        Lc(this.b, 1);
        break;
      case 40:
        Lc(this.b, -1);
        break;
      case 37:
        ld(this, -1);
        break;
      case 39:
        ld(this, 1)
      }
    };
    var ld = function (a, b) {
        var c = ra(a.c, a.b) + b;
        0 > c ? c = a.c.length - 1 : c >= a.c.length && (c = 0);
        c = a.c[c];
        Lc(c, 0);
        Jc(a, c)
      };
    var md = function (a, b, c, d) {
        V.call(this, new U("moog-mod-wheel", "moog-mod-wheel-area", b, 1, 0, "     ".split(" "), k), c, u(function () {}, this));
        this.ua = a;
        this.va = d;
        this.$ = document.getElementById("moog-mod-wheel");
        this.h = document.getElementById("moog-mod-wheel-ind");
        this.u = 40
      };
    v(md, V);
    md.prototype.o = function () {
      return [30, Math.round(174 - 40 * this.value)]
    };
    md.prototype.ya = function () {
      var a = this.va;
      a.a || a.e();
      this.ua.dispatchEvent(new S(13, this.value))
    };
    var nd = function (a) {
        L.call(this);
        this.b = a;
        this.c = document.getElementById("moog-switch");
        this.a = k;
        M(this, this.c, "click", this.e)
      };
    v(nd, L);
    nd.prototype.e = function () {
      this.a = !this.a;
      this.c.className = this.a ? "moog-switch-on" : "moog-switch-off";
      od(this)
    };
    var od = function (a) {
        a.b.dispatchEvent(new S(14, a.a ? 1 : 0));
        a.b.dispatchEvent(new S(26, a.a ? 0 : 1))
      };
    var qd = function (a) {
        this.a = [];
        this.b = new kd;
        G(this, this.b);
        this.e = new nd(this);
        G(this, this.e);
        this.c = new md(this, 0.6, this.b, this.e);
        G(this, this.c);
        pd(this, a);
        for (a = 0; a < this.a.length; a++) G(this, this.a[a])
      };
    v(qd, O);
    qd.prototype.g = function () {
      for (var a = 0; a < this.a.length; a++) this.a[a].ya();
      od(this.e)
    };
    var pd = function (a, b) {
        b.m && a.a.push(new V(b.m, a.b, u(function (a) {
          this.dispatchEvent(new S(6, 0.9 * a + 0.1))
        }, a)));
        b.w && a.a.push(new V(b.w, a.b, u(function (a) {
          this.dispatchEvent(new S(21, 0.9 * a + 0.1))
        }, a)));
        b.t && a.a.push(new V(b.t, a.b, u(function (a, b) {
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
          this.dispatchEvent(new S(18, e))
        }, a)));
        b.p && a.a.push(new V(b.p, a.b, u(function (a) {
          this.dispatchEvent(new S(19, 2 * a - 1))
        }, a)));
        b.u && a.a.push(new V(b.u, a.b, u(function (a, b) {
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
          this.dispatchEvent(new S(20, e))
        }, a)));
        b.c && a.a.push(new V(b.c, a.b, u(function (a) {
          this.dispatchEvent(new S(4, 100 + 5E3 * a))
        }, a)));
        b.a && a.a.push(new V(b.a, a.b, u(function (a) {
          this.dispatchEvent(new S(7, a))
        }, a)));
        b.h && a.a.push(new V(b.h, a.b, u(function (a) {
          this.dispatchEvent(new S(10, a))
        }, a)));
        b.H && a.a.push(new V(b.H, a.b, u(function (a) {
          this.dispatchEvent(new S(17, 0.9 * a + 0.1))
        }, a)));
        b.n && a.a.push(new V(b.n, a.b, u(function (a, b) {
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
          this.dispatchEvent(new S(15, e))
        }, a)));
        b.o && a.a.push(new V(b.o, a.b, u(function (a, b) {
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
          this.dispatchEvent(new S(16, e))
        }, a)));
        b.g && a.a.push(new V(b.g, a.b, u(function (a) {
          this.dispatchEvent(new S(3, a))
        }, a)));
        b.e && a.a.push(new V(b.e, a.b, u(function (a) {
          this.dispatchEvent(new S(8, a))
        }, a)));
        b.l && a.a.push(new V(b.l, a.b, u(function (a) {
          this.dispatchEvent(new S(11, a))
        }, a)));
        b.W && a.a.push(new V(b.W, a.b, u(function (a) {
          this.dispatchEvent(new S(25, 0.9 * a + 0.1))
        }, a)));
        b.z && a.a.push(new V(b.z, a.b, u(function (a, b) {
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
          this.dispatchEvent(new S(22, e))
        }, a)));
        b.V && a.a.push(new V(b.V, a.b, u(function (a) {
          this.dispatchEvent(new S(23, 2 * a - 1))
        }, a)));
        b.C && a.a.push(new V(b.C, a.b, u(function (a, b) {
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
          this.dispatchEvent(new S(24, e))
        }, a)));
        b.b && a.a.push(new V(b.b, a.b, u(function (a) {
          this.dispatchEvent(new S(5, 1 + 15 * a))
        }, a)));
        b.F && a.a.push(new V(b.F, a.b, u(function (a) {
          this.dispatchEvent(new S(9, a))
        }, a)));
        b.i && a.a.push(new V(b.i, a.b, u(function (a) {
          this.dispatchEvent(new S(12, a))
        }, a)))
      };
    var vd = function () {
        var a = this;
        this.h = this.b = k;
        this.n = this.ba = -1;
        this.aa = k;
        this.a = [];
        this.c = document.getElementById("moog-keyboard");
        this.m = "moog";
        this.g = this.e = k;
        this.ea = rd;
        window.google && (window.google.kHL && "en" != window.google.kHL) && (this.ea = sd);
        this.j = new L(this);
        this.l = function (a) {
          a = a || window.event;
          a = a.target.className;
          if (!a) return j;
          a = a.split("moog-key-");
          return a.length > 1 ? parseInt(a[1], 10) : j
        };
        this.i = function (b) {
          b = b || window.event;
          if (a.b && b.which !== 0) {
            var c = a.l(b);
            if (c !== j) {
              b.preventDefault();
              td(a, c);
              if (!this.g) {
                google && google.log && google.log(this.m, "m");
                this.g = i
              }
            }
          }
        };
        this.u = function (b) {
          var b = b || window.event,
            c = a.l(b);
          if (c !== j) {
            b.preventDefault();
            ud(a, c)
          }
        };
        this.o = function (b) {
          b = b || window.event;
          if (a.l(b) !== j) {
            a.b = i;
            a.i(b)
          }
        };
        this.c.onmousedown = this.i;
        this.c.onmouseover = this.i;
        M(this.j, this.c, "mousedown", this.o);
        M(this.j, this.c, ["mouseup", "mouseout"], this.u);
        M(this.j, document.body, "mouseup", this.z);
        M(this.j, document.body, "keydown", this.p);
        M(this.j, document.body, "keyup", this.w);
        M(this.j, window, "blur", this.t)
      };
    v(vd, O);
    var sd = {
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
      rd = {
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
    vd.prototype.s = function () {
      vd.v.s.call(this);
      this.j.M();
      this.c = j
    };
    vd.prototype.p = function (a) {
      if (this.h) if (a.L == this.ba) window.clearTimeout(this.n), this.aa = k;
      else if (!a.La && (!a.Ka && !a.ha && !a.Ma) && a.L in this.ea && (9 == a.L && (a.preventDefault(), a.Fa()), this.ba = a.L, td(this, this.ea[a.L]), !this.e)) google && google.log && google.log(this.m, "k"), this.e = i
    };
    vd.prototype.w = function (a) {
      this.aa = i;
      this.n = window.setTimeout(u(function () {
        this.aa && (this.ba = -1, ud(this, this.ea[a.L]))
      }, this), 10)
    };
    vd.prototype.t = function () {
      this.aa = i;
      this.ba = -1;
      this.a = [];
      this.dispatchEvent(new S(1, 0))
    };
    var td = function (a, b) {
        var c = document.getElementById("moogk" + b);
        if (c) {
          $a(c, "moog-actv");
          c = a.a.length ? a.a[0] : j;
          a.a.push(b);
          var d = a.a;
          pa(d.length != j);
          x.sort.call(d, xa);
          for (var d = a.a, e = {}, f = 0, h = 0; h < d.length;) {
            var n = d[h++],
              p = typeof n,
              p = "object" == p && n != j || "function" == p ? "o" + s(n) : (typeof n).charAt(0) + n;
            Object.prototype.hasOwnProperty.call(e, p) || (e[p] = i, d[f++] = n)
          }
          d.length = f;
          c !== a.a[0] && a.dispatchEvent(new S(0, a.a[0]))
        }
      },
      ud = function (a, b) {
        var c = document.getElementById("moogk" + b);
        if (c) {
          var d = a.a.length ? a.a[0] : j;
          bb(c, "moog-actv");
          va(a.a, b);
          a.a.length ? d !== a.a[0] && a.dispatchEvent(new S(0, a.a[0])) : a.dispatchEvent(new S(1, 0))
        }
      };
    vd.prototype.z = function () {
      for (var a = this.c.children, b = 0; b < a.length; ++b) bb(a[b], "moog-actv");
      this.b = k
    };
    var xd = function (a, b, c) {
        L.call(this);
        this.u = a;
        this.e = b;
        this.a = c;
        this.K = document.getElementById("moog-discovery");
        this.c = new id(this.K, 250);
        this.g = new jd(this.K, 500);
        this.i = this.h = 0;
        this.p = this.o = k;
        this.m = [];
        this.n = [];
        wd(this);
        y(this.a, u(this.w, this));
        this.t = setTimeout(u(this.Ab, this), 1E4);
        this.F = setTimeout(u(this.Bb, this), 3E5)
      };
    v(xd, L);
    xd.prototype.s = function () {
      xd.v.s.call(this);
      ed(this.c);
      ed(this.g);
      this.b && ed(this.b);
      clearTimeout(this.t);
      clearTimeout(this.F);
      for (var a = 0; a < this.m; a++) clearTimeout(this.m[a]);
      for (a = 0; a < this.n; a++) clearTimeout(this.n[a])
    };
    xd.prototype.z = function () {
      clearTimeout(this.t);
      ed(this.g);
      this.b && ed(this.b);
      this.K.style.zIndex = "-10005";
      this.o || (google && google.log && google.log("moog", "knhint1"), this.o = i);
      clearInterval(this.i);
      W(this.c)
    };
    xd.prototype.w = function (a) {
      N(this, a.e, "mousedown", u(this.z, this))
    };
    xd.prototype.C = function () {
      this.p || (google && google.log && google.log("moog", "knhint"), this.p = i);
      wd(this)
    };
    var wd = function (a) {
        Y(a, a.a[0], 0);
        Y(a, a.a[1], 1);
        Y(a, a.a[2], 2);
        Y(a, a.a[3], 3);
        Y(a, a.a[4], 4);
        Y(a, a.a[5], 5);
        Y(a, a.a[6], 6);
        Y(a, a.a[7], 7);
        Y(a, a.a[8], 1);
        Y(a, a.a[9], 2);
        Y(a, a.a[10], 4);
        Y(a, a.a[11], 5);
        Y(a, a.a[12], 6);
        Y(a, a.a[13], 7);
        Y(a, a.a[14], 1);
        Y(a, a.a[15], 2);
        Y(a, a.a[16], 3);
        Y(a, a.a[17], 4);
        Y(a, a.a[18], 5);
        Y(a, a.a[19], 6);
        Y(a, a.a[20], 7)
      },
      Y = function (a, b, c) {
        a.m.push(setTimeout(u(a.lc, a, b), 350 + 40 * c))
      };
    l = xd.prototype;
    l.lc = function (a) {
      $a(a.a, "knob-showoff");
      this.n.push(setTimeout(u(this.Hb, this, a), 210))
    };
    l.Hb = function (a) {
      bb(a.a, "knob-showoff")
    };
    l.Ab = function () {
      if ("p" !== this.u.b && !this.e.e && !this.e.g) {
        this.K.style.zIndex = "910";
        W(this.g);
        var a = parseInt(Cc(this.K, "top"), 10),
          b = parseInt(Cc(this.K, "left"), 10);
        this.b = new gd(this.K, [b, a], [b, a + 20], 400);
        this.b.l = u(function () {
          $a(this.K, "float")
        }, this);
        W(this.b);
        google && google.log && google.log("moog", "kbhint0");
        this.h = setInterval(u(this.Gb, this), 250)
      }
    };
    l.Gb = function () {
      if (this.e.e || this.e.g) W(this.c), this.K.style.zIndex = "-10005", google && google.log && google.log("moog", "kbhint1"), clearInterval(this.h), this.i = setInterval(u(this.C, this), 3E4)
    };
    l.Bb = function () {
      clearInterval(this.h);
      clearInterval(this.i);
      W(this.c)
    };
    var zd = function (a, b) {
        L.call(this);
        this.b = a;
        this.A = b;
        this.a = document.getElementById("moog-g-plus");
        this.c = document.getElementById("moog-g-plus-inactive");
        this.e = document.getElementById("moog-g-plus-up");
        yd() && (this.a.style.display = "block", this.c.style.display = "block", M(this, this.a, "click", this.g), M(this, this.a, "mouseover", this.i), M(this, this.a, "mouseout", this.h))
      };
    v(zd, L);
    var yd = function () {
        return Ad[window.google && window.google.kHL || "en"] || j
      };
    zd.prototype.g = function () {
      "o" == this.b.b && (yc(this.b) ? window.gapi && window.gbar && window.gbar.asmc ? window.gapi.load("share", u(this.gb, this)) : window.open("about:blank").location = "https://plus.google.com" : W(this.A.m));
      var a = document.getElementById("hplogo-i");
      if (a) try {
        a.focus()
      } catch (b) {}
    };
    zd.prototype.gb = function () {
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
          b = location.protocol + "//" + location.host + "/webhp?doodle=6201726X" + this.b.I(),
          c = yd();
        a.items[0].properties.url = [b];
        a.items[0].properties.description[0] = c;
        a.items[0].properties.image[0] = "moog-hp-thumb.png";
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
            this.gb()
          }, this)
        })
      }
    };
    zd.prototype.i = function () {
      "o" == this.b.b && (this.c.style.display = "none", this.e.style.display = "block")
    };
    zd.prototype.h = function () {
      this.e.style.display = "none";
      this.c.style.display = "block"
    };
    var Ad = {
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
    var Bd = function (a) {
        this.e = a;
        this.b = [function () {}];
        this.a = this.c = 0
      },
      Cd = function (a, b, c, d) {
        for (var c = c || 1, e = 0; e < c; ++e) if (d) {
          var f = function (a) {
              b(a)
            };
          f.Db = d((e + 1) / c);
          a.b.push(f)
        } else a.b.push(b);
        return a
      },
      Ed = function (a) {
        0 == a.c && Dd(a)
      },
      Dd = function (a) {
        if (a.c < a.b.length) {
          var b = a.b[a.c++];
          b(b.Db);
          a.a = window.setTimeout(function () {
            Dd(a)
          }, a.e)
        }
      };
    var Fd = function (a, b) {
        L.call(this);
        this.c = a;
        this.A = b;
        this.b = 0;
        this.a = new Bd(1);
        this.g = 0;
        this.e = document.getElementById("moog-link");
        this.h = document.getElementById("moog-link-inactive");
        this.i = document.getElementById("moog-link-up");
        M(this, this.e, "click", this.m);
        M(this, this.e, "mouseover", this.o);
        M(this, this.e, "mouseout", this.n);
        ka("google.doodle.ls", u(this.p, this))
      };
    v(Fd, L);
    var Id = function (a) {
        var b = location.protocol + "//www.google.com/webhp?doodle=6201726X" + a.c.I() + "&hl=" + (window.google.kHL || "en") + "&nord=1";
        Gd(a);
        var c = document.getElementById("moog-gco-script");
        c && c.parentNode && c.parentNode.removeChild(c);
        a.g && window.clearTimeout(a.g);
        var c = "//google-doodles.appspot.com/?callback=google.doodle.ls&url=" + encodeURIComponent(b),
          d = document.createElement("script");
        d.src = c;
        d.id = "moog-gco-script";
        a.g = window.setTimeout(u(function () {
          Hd(b)
        }, a), 2E3);
        (document.getElementById("xjsc") || document.body).appendChild(d)
      };
    Fd.prototype.Oa = function (a) {
      for (a = a.target; a; a = a.parentNode) if ("moog-link-tab" == a.id || "moog-link" == a.id) return;
      if (a = document.getElementById("moog-link-tab")) a.style.backgroundPosition = "-251px -529px", a.style.width = "0px", a.style.display = "none", a = document.getElementById("moog-link-text"), a.value = "", a.style.display = "none", this.b = 0
    };
    var Gd = function (a) {
        var b = document.getElementById("moog-link-text");
        if (b) {
          b.value = ". . .";
          var c, d = document.getElementById("moog-link-tab");
          2 != a.b ? (d.style.display = "", window.clearTimeout(a.a.a), a.a = new Bd(25), b.style.display = "", c = function (a) {
            return 3 * a * a - 2 * a * a * a
          }, Ed(Cd(Cd(a.a, u(function (a) {
            d.style.width = Math.round(185 * a) + "px";
            d.style.backgroundPosition = Math.round(-251 + 185 * a) + "px -529px";
            b.style.width = Math.round(160 * a) + "px"
          }, a), 12, c), u(function () {
            Yb(this, document, "click", this.Oa);
            M(this, document, "click", this.Oa)
          }, a))), a.b = 2) : 2 == a.b && (b.style.display = "", window.clearTimeout(a.a.a), a.a = new Bd(30), c = function (a) {
            return 0.1 * Math.cos(2 * a * Math.PI) + 0.9
          }, Ed(Cd(a.a, u(function (a) {
            d.style.width = Math.round(185 * a) + "px";
            var c = -66 + Math.round(-185 + 185 * a);
            d.style.backgroundPosition = c + "px -529px";
            b.style.width = Math.round(160 * a) + "px"
          }, a), 8, c)))
        }
      },
      Hd = function (a) {
        var b = document.getElementById("moog-link-text");
        b && (b.value = a, b.select())
      };
    Fd.prototype.p = function (a) {
      a && ("OK" == a.status && !a.error && a.id) && (window.clearTimeout(this.g), Hd(a.id))
    };
    Fd.prototype.m = function () {
      "o" == this.c.b && (yc(this.c) ? Id(this) : W(this.A.m));
      var a = document.getElementById("hplogo-i");
      if (a) try {
        a.focus()
      } catch (b) {}
    };
    Fd.prototype.o = function () {
      "o" == this.c.b && (this.h.style.display = "none", this.i.style.display = "block", 0 == this.b && yc(this.c) && (window.clearTimeout(this.a.a), this.b = 1))
    };
    Fd.prototype.n = function () {
      this.i.style.display = "none";
      this.h.style.display = "block";
      1 == this.b && (window.clearTimeout(this.a.a), document.getElementById("moog-link-tab").style.display = "none", this.b = 0)
    };
    var Jd = function () {
        this.e = document.getElementById("moog-reel-left");
        this.g = document.getElementById("moog-reel-right");
        this.a = 1;
        this.c = 0
      };
    Jd.prototype.b = function () {
      this.a = 0 == this.a ? 21 : this.a - 1;
      this.e.className = this.g.className = "moog-reel-" + this.a;
      this.c = window.setTimeout(u(this.b, this), 50)
    };
    var Z = function (a) {
        this.a = a;
        this.z = new Fd(a, this);
        G(this, this.z);
        this.g = new zd(a, this);
        G(this, this.g);
        this.u = new Jd;
        this.i = document.getElementById("moog-record");
        this.n = document.getElementById("moog-record-active");
        this.t = document.getElementById("moog-record-up");
        this.l = document.getElementById("moog-play");
        this.p = document.getElementById("moog-play-up");
        this.w = document.getElementById("moog-stop");
        this.o = document.getElementById("moog-stop-up");
        this.j = new L(this);
        this.m = new Kd(this.n, 700, 3);
        G(this, this.m);
        this.e = [];
        this.C = [];
        this.b = [];
        this.F = "function" === typeof webkitAudioContext ? this.mb : this.sa;
        this.c = [-45, -45, -45, -45];
        this.h = new Uc(u(this.$, this));
        G(this, this.h);
        for (var a = this.a, b = u(this.ra, this), c = 0; 4 > c; c++) a.l[c].Ia(b);
        for (a = 0; 4 > a; a++) {
          this.e.push(document.getElementById("moog-meter-" + (a + 1)));
          this.b.push(document.getElementById("moog-meter-needle-" + (a + 1)));
          try {
            "webkitTransformOriginY" in this.b[a].style ? this.b[a].style.webkitTransformOriginY = "100%" : "MozTransformOrigin" in this.b[a].style ? this.b[a].style.MozTransformOrigin = "50% 100%" : "msTransformOrigin" in this.b[a].style ? this.b[a].style.msTransformOrigin = "50% 100%" : "OTransformOrigin" in this.b[a].style ? this.b[a].style.OTransformOrigin = "50% 100%" : "transformOrigin" in this.b[a].style && (this.b[a].style.transformOrigin = "50% 100%")
          } catch (d) {}
          b = document.getElementById("moog-meter-target-" + (a + 1));
          this.C.push(b);
          M(this.j, b, "click", this.nb);
          M(this.j, b, "mouseover", this.pb);
          M(this.j, b, "mouseout", this.ob)
        }
        M(this.j, this.a, "o", this.ua);
        M(this.j, this.a, "r", this.ta);
        M(this.j, this.a, "p", this.va);
        M(this.j, this.i, "click", this.sb);
        M(this.j, this.i, "mouseover", this.ub);
        M(this.j, this.i, "mouseout", this.tb);
        M(this.j, this.l, "click", this.Ga);
        M(this.j, this.l, "mouseover", this.rb);
        M(this.j, this.l, "mouseout", this.qb);
        M(this.j, this.a, "t", this.Ha)
      };
    v(Z, O);
    Z.prototype.s = function () {
      Z.v.s.call(this);
      this.j.M();
      this.h.O()
    };
    Z.prototype.ua = function () {
      window.clearTimeout(this.u.c);
      this.n.style.display = "none";
      this.w.style.display = "none";
      this.o.style.display = "none";
      Ld(this, i)
    };
    Z.prototype.va = function () {
      this.n.style.display = "none";
      this.w.style.display = "block";
      this.o.style.display = "block";
      this.p.style.display = "none";
      Ld(this, k)
    };
    Z.prototype.ta = function () {
      this.n.style.display = "block";
      this.t.style.display = "none";
      this.w.style.display = "block";
      this.e[this.a.c].className = "moog-meter-recording";
      Ld(this, k)
    };
    var Ld = function (a, b) {
        var c = b ? "pointer" : "default";
        a.g.a.style.cursor = c;
        a.z.e.style.cursor = c;
        y(a.C, function (a) {
          a.style.cursor = c
        })
      };
    l = Z.prototype;
    l.sb = function () {
      "r" == this.a.b ? this.a.e() : (xc(this.a), this.h.Y(), this.u.b());
      var a = document.getElementById("hplogo-i");
      if (a) try {
        a.focus()
      } catch (b) {}
    };
    l.ub = function () {
      "r" != this.a.b && (this.t.style.display = "block")
    };
    l.tb = function () {
      this.t.style.display = "none"
    };
    l.Ga = function () {
      switch (this.a.b) {
      case "r":
        this.a.e();
        break;
      case "p":
        uc(this.a);
        break;
      case "o":
        var a;
        a = this.a;
        if (yc(a)) {
          for (var b = a.h = 0; b < a.a.length; b++) qc(a.a[b]);
          wc(a, "p");
          a = i
        } else a = k;
        a ? (this.u.b(), this.h.Y()) : W(this.m)
      }
      if (a = document.getElementById("hplogo-i")) try {
        a.focus()
      } catch (c) {}
    };
    l.rb = function () {
      "o" == this.a.b ? this.p.style.display = "block" : this.o.style.display = "block"
    };
    l.qb = function () {
      this.p.style.display = "none";
      this.o.style.display = "none"
    };
    l.Ha = function () {
      for (var a = 0; a < this.e.length; a++) this.e[a].className = this.a.c == a ? "moog-meter-active" : "moog-meter-inactive"
    };
    l.nb = function (a) {
      "o" == this.a.b && vc(this.a, parseInt(a.target.id.match(/\d$/)[0], 10) - 1);
      if (a = document.getElementById("hplogo-i")) try {
        a.focus()
      } catch (b) {}
    };
    l.pb = function (a) {
      "o" == this.a.b && (this.e[parseInt(a.target.id.match(/\d$/)[0], 10) - 1].className = "moog-meter-up")
    };
    l.ob = function () {
      "o" == this.a.b && this.Ha()
    };
    var Md = function (a, b, c) {
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
    Z.prototype.mb = function (a) {
      var b = this.a.l[a].e,
        a = new Uint8Array(b.frequencyBinCount);
      b.getByteFrequencyData(a);
      for (var b = a[0], c = 0; c < a.length; c++) a[c] > b && (b = a[c]);
      return Math.round(45 * (b / 128 - 1))
    };
    Z.prototype.sa = function (a) {
      -45 < this.c[a] && (this.c[a] -= 2);
      return this.c[a]
    };
    Z.prototype.ra = function (a) {
      this.c[a] = 45
    };
    Z.prototype.$ = function () {
      if ("o" == this.a.b) for (var a = 0; a < this.b.length; a++) Md(this, a, -45);
      else {
        for (a = 0; a < this.e.length; a++) Md(this, a, this.F(a));
        this.h.Y()
      }
    };
    var Kd = function (a, b, c, d) {
        hd.call(this, a, 0, 1, b, d);
        this.u = c
      };
    v(Kd, hd);
    Kd.prototype.m = function () {
      Dc(this.b, Math.cos(2 * Math.PI * this.u * this.e[0]) / -2 + 0.5)
    };
    Kd.prototype.h = function () {
      this.b.style.display = "";
      Kd.v.h.call(this)
    };
    Kd.prototype.l = function () {
      this.b.style.display = "none";
      Kd.v.l.call(this)
    };
    var $ = function (a, b, c) {
        this.c = b;
        this.i = c;
        this.j = new L(this);
        G(this, this.j);
        this.e = new vd;
        Nd(this, this.e);
        this.a = new qd(a);
        Nd(this, this.a);
        zc(b, u(this.a.g, this.a));
        this.a.g();
        this.A = new Z(b);
        Nd(this, this.A);
        this.g = this.h = k;
        this.o = document.getElementById("moog-led");
        this.m = this.l = 0;
        this.t = "moog";
        this.F = u(function () {
          Od(this);
          Pd(this);
          N(this.j, document.getElementById("moog"), "mouseover", this.T)
        }, this);
        Qd(this);
        M(this.j, document, "webkitvisibilitychange", this.n);
        M(this.j, document, "visibilitychange", this.n);
        M(this.j, this, "c", this.C);
        M(this.j, document.getElementById("moog"), "mousedown", this.w);
        N(this.j, document.getElementById("moog"), "mouseover", this.T);
        M(this.j, document.body, "keydown", this.u);
        (a = document.forms.f || document.forms.gs || document.forms.tsf || document.forms.gbqf) && a.q && M(this.j, a.q, "focus", this.z);
        Rd(this);
        Sd(this);
        this.p = new xd(this.c, this.e, this.a.a);
        G(this, this.p)
      };
    v($, O);
    var Sd = function (a) {
        if (!window.google.doodle.hps) {
          window.google.doodle.hps = 1;
          var b = window.location.href.toString().match(/webhp\?doodle=([^#&]*)/);
          b && -1 == window.location.href.toString().indexOf("#") && (b = b[1].substr(8), Ac(a.c, b) && (a.m = setTimeout(u(function () {
            this.A.Ga()
          }, a), 1E3), Qd(a), a.T()))
        }
      };
    $.prototype.n = function () {
      if (document.hidden || document.webkitHidden) Od(this), N(this.j, document.getElementById("moog"), "mouseover", this.T), Pd(this), uc(this.c), this.c.e()
    };
    $.prototype.s = function () {
      $.v.s.call(this);
      clearTimeout(this.l);
      clearTimeout(this.m)
    };
    var Qd = function (a) {
        clearTimeout(a.l);
        a.l = setTimeout(a.F, 12E4)
      };
    $.prototype.u = function (a) {
      Qd(this);
      27 == a.L && Pd(this)
    };
    $.prototype.w = function () {
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
      Qd(this);
      this.T();
      Td(this)
    };
    $.prototype.z = function () {
      Od(this);
      N(this.j, document.getElementById("moog"), "mouseover", this.T);
      Pd(this)
    };
    $.prototype.T = function () {
      this.g || (this.i.b(), this.g = i)
    };
    var Od = function (a) {
        a.g && (a.i.a(), a.g = k)
      },
      Td = function (a) {
        if (!a.h && (a.h = i, a.a.b.h = i, a.e.h = i, a.o.style.display = "block", a = document.getElementById("hplogo-i"))) try {
          a.focus()
        } catch (b) {}
      },
      Pd = function (a) {
        a.h && (a.h = k, a.a.b.h = k, a.e.h = k, a.o.style.display = "none")
      },
      Nd = function (a, b) {
        b.la = a;
        G(a, b)
      };
    $.prototype.C = function (a) {
      var b = this.c;
      "p" != b.b && ("r" == b.b && b.a[b.c].a.push(a), gc(a, b.l[b.c]))
    };
    var Rd = function (a) {
        a.A && a.A.i && N(a.j, a.A.i, "click", u(a.b, a, "record"));
        a.A && a.A.l && N(a.j, a.A.l, "click", u(a.b, a, "play"));
        a.A && (a.A.g && a.A.g.a) && N(a.j, a.A.g.a, "click", u(a.b, a, "gplus"));
        a.a && (a.a.c && a.a.c.$) && N(a.j, a.a.c.$, "click", u(a.b, a, "mwheel"));
        var b = document.getElementById("moog-tooltip");
        b && N(a.j, b, "mousedown", u(a.b, a, "link"));
        (b = document.getElementById("moog-switch")) && N(a.j, b, "click", u(a.b, a, "mswitch"))
      };
    $.prototype.b = function (a) {
      google && google.log && google.log(this.t, a)
    };
    var Ud = function () {},
      Vd = function () {
        for (var a = new Ud, b = [], c = [], d = 0; 10 >= d; d++) 0 == d % 2 && b.push(""), c.push("");
        a.H = new U("moog-volume1", "moog-knob-0", 0.4, 8, 1, b, k);
        a.w = new U("moog-volume2", "moog-knob-1", 0.8, 8, 1, b, k);
        a.W = new U("moog-volume3", "moog-knob-2", 0.4, 8, 1, b, k);
        a.m = new U("mastervol", "moog-knob-master", 0.8, 12, 0, c, k);
        a.c = new U("cutoff", "moog-knob-3", 0.4, 10, 5, b, k);
        a.b = new U("contouramount", "moog-knob-5", 0.4, 10, 5, b, k);
        a.F = new U("sustainlevel", "moog-knob-8", 0, 10, 6, b, k);
        a.a = new U("attacktime", "moog-knob-6", 0, 10, 6, b, k);
        a.e = new U("decaytime", "moog-knob-7", 0.8, 10, 6, b, k);
        a.g = new U("moog-glide", "moog-knob-4", 0.05, 10, 5, b, k);
        a.i = new U("moog-loudness-sustain", "moog-knob-11", 1, 8, 7, b, k);
        a.h = new U("moog-loudness-attack", "moog-knob-9", 0, 8, 7, b, k);
        a.l = new U("moog-loudness-decay", "moog-knob-10", 0.4, 8, 7, b, k);
        a.o = new U("moog-osc1-wf", "moog-knob-osc1-wf", 0.6, 8, 4, "wf0 wf6 wf2 wf3 wf4 wf5".split(" "), i);
        a.u = new U("moog-osc2-wf", "moog-knob-osc2-wf", 0.6, 8, 4, "wf0 wf6 wf2 wf3 wf4 wf5".split(" "), i);
        a.C = new U("moog-osc3-wf", "moog-knob-osc3-wf", 0.6, 8, 4, "wf0 wf1 wf2 wf3 wf4 wf5".split(" "), i);
        b = "LO 32' 16' 8' 4' 2'".split(" ");
        a.n = new U("moog-osc1-rg", "moog-knob-osc1-rg", 2 / (b.length - 1), 8, 2, b, i);
        a.t = new U("moog-osc2-rg", "moog-knob-osc2-rg", 4 / (b.length - 1), 8, 2, b, i);
        a.z = new U("moog-osc3-rg", "moog-knob-osc3-rg", 1 / (b.length - 1), 8, 2, b, i);
        a.p = new U("moog-osc2-pb", "moog-knob-osc2-pb", 0.5, 12, 3, c.slice(2), k);
        a.V = new U("moog-osc3-pb", "moog-knob-osc3-pb", 0.5, 12, 3, c.slice(2), k);
        return a
      };
    var Wd = function (a, b, c) {
        this.b = a.createBiquadFilter();
        this.b.type = 0;
        this.b.frequency.value = c;
        this.a = a.createBiquadFilter();
        this.a.type = 1;
        this.a.frequency.value = b;
        this.b.connect(this.a)
      };
    Wd.prototype.X = function () {
      return this.b
    };
    Wd.prototype.connect = function (a) {
      this.a.connect(a)
    };
    Wd.prototype.qa = function () {
      this.a.disconnect()
    };
    var Yd = function (a) {
        this.c = [];
        this.h = a;
        if (this.g = "function" === typeof webkitAudioContext) a: {
          try {
            var b = new webkitAudioContext
          } catch (c) {
            break a
          }
          for (a = 0; 4 > a; a++) {
            var d = [new Bb(b, 0.46, 4, 4, 0, i, k, k, 0, i, 0.05, 0, 0.4, 1), new Bb(b, 0.82, 4, 16, 0, i, k, k, 0, i, 0.05, 0, 0.4, 1), new Bb(b, 0.46, 4, 2, 0, i, k, i, 0.6, i, 0.05, 0, 0.4, 1)],
              e = new xb(b, 2100, 7, 0, 0.8, 0);
            this.c.push(new Bc(b, d, e, 0.82))
          }
          a = new Wd(b, 20, 2E4);
          this.b = new yb(b, this.c, a);
          Xd(this)
        } else if (qb = u(this.i, this), mb && 0 <= na(nb, "10.0.0.0")) {
          D = document.createElement("iframe");
          D.name = "doodle-moog";
          D.style.position = "absolute";
          D.style.top = "-150px";
          D.style.border = 0;
          D.style.width = "1px";
          D.style.height = "1px";
          document.body.appendChild(D);
          E = D.contentDocument;
          if (E == g || E == j) E = D.contentWindow.document;
          E.open();
          E.write('<html><head></head><body><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="0" height="0" id="doodle-moog-flash-1" type="application/x-shockwave-flash"><param name="movie" value="moog12-2.swf"><param name="allowScriptAccess" value="always"><object id="doodle-moog-flash-2" type="application/x-shockwave-flash" data="moog12-2.swf" width="0" height="0"><param name="allowScriptAccess" value="always"></object></object></body></html>');
          E.close()
        }
      };
    v(Yd, F);
    Yd.prototype.s = function () {
      Yd.v.s.call(this);
      this.b && this.b.a();
      !this.g && pb && pb.d();
      this.e && this.e.M();
      this.a && (this.a.e(), uc(this.a))
    };
    Yd.prototype.i = function () {
      for (var a = pb, b = 0; 4 > b; b++) this.c.push(new ub(a, b, [new tb(a, b, 0), new tb(a, b, 1), new tb(a, b, 2)]));
      this.b = new sb(a);
      Xd(this)
    };
    var Xd = function (a) {
        var b = document,
          c = b.createElement("style");
        c.type = "text/css";
        b.getElementsByTagName("head")[0].appendChild(c);
        c.styleSheet ? c.styleSheet.cssText = "#moog-keyboard .moog-actv{z-index:0}#moog-keyboard s.moog-actv{z-index:2}#moogk0.moog-actv{background-position:0 -1848px}#moogk1.moog-actv{background-position:0 -940px}#moogk2.moog-actv{background-position:0 -137px}#moogk3.moog-actv{background-position:0 -395px}#moogk4.moog-actv{background-position:0 -546px}#moogk5.moog-actv{background-position:0 -504px}#moogk6.moog-actv{background-position:0 -981px}#moogk7.moog-actv{background-position:0 -69px}#moogk8.moog-actv{background-position:0 -654px}#moogk9.moog-actv{background-position:0 -1249px}#moogk10.moog-actv{background-position:-20px -2119px}#moogk11.moog-actv{background-position:0 -1698px}#moogk12.moog-actv{background-position:0 -763px}#moogk13.moog-actv{background-position:-22px -355px}#moogk14.moog-actv{background-position:0 -2051px}#moogk15.moog-actv{background-position:-20px -1521px}#moogk16.moog-actv{background-position:-2px -2229px}#moogk17.moog-actv{background-position:0 -2119px}#moogk18.moog-actv{background-position:0 -1115px}#moogk19.moog-actv{background-position:0 -831px}#moogk20.moog-actv{background-position:0 -1807px}#moogk21.moog-actv{background-position:-1px -1182px}#moogk22.moog-actv{background-position:0 -205px}#moogk23.moog-actv{background-position:-3px -1563px}@-webkit-keyframes bounce-discovery{from{margin-top:0}to{margin-top:-20px}}@-moz-keyframes bounce-discovery{from{margin-top:0}to{margin-top:-20px}}@-o-keyframes bounce-discovery{from{margin-top:0}to{margin-top:-20px}}@-ms-keyframes bounce-discovery{from{margin-top:0}to{margin-top:-20px}}@keyframes bounce-discovery{from{margin-top:0}to{margin-top:-20px}}.float#moog-discovery{-webkit-animation-name:bounce-discovery;-webkit-animation-duration:1.0s;-webkit-animation-iteration-count:infinite;-webkit-animation-direction:alternate;-webkit-animation-timing-function:ease-in-out;-moz-animation-name:bounce-discovery;-moz-animation-duration:1.0s;-moz-animation-iteration-count:infinite;-moz-animation-direction:alternate;-moz-animation-timing-function:ease-in-out;-o-animation-name:bounce-discovery;-o-animation-duration:1.0s;-o-animation-iteration-count:infinite;-o-animation-direction:alternate;-o-animation-timing-function:ease-in-out;-ms-animation-name:bounce-discovery;-ms-animation-duration:1.0s;-ms-animation-iteration-count:infinite;-ms-animation-direction:alternate;-ms-animation-timing-function:ease-in-out;animation-name:bounce-discovery;animation-duration:1.0s;animation-iteration-count:infinite;animation-direction:alternate;animation-timing-function:ease-in-out}#moog-discovery{background:no-repeat url(moog-hp-sprite2.png) -253px -401px;height:72px;left:213px;opacity:0;position:absolute;top:65px;width:39px;z-index:-10005}#attacktime.knob-showoff,#moog-glide.knob-showoff,#decaytime.knob-showoff,#contouramount.knob-showoff,#sustainlevel.knob-showoff,#mastervol.knob-showoff,#moog-osc2-pb.knob-showoff,#moog-osc3-pb.knob-showoff,#cutoff.knob-showoff{background:no-repeat url(moog-hp-sprite2.png) -194px -330px;opacity:0.3;}#moog-volume1.knob-showoff,#moog-volume2.knob-showoff,#moog-volume3.knob-showoff,#moog-loudness-attack.knob-showoff,#moog-loudness-decay.knob-showoff,#moog-loudness-sustain.knob-showoff,#moog-osc1-wf.knob-showoff,#moog-osc2-wf.knob-showoff,#moog-osc3-wf.knob-showoff,#moog-osc1-rg.knob-showoff,#moog-osc2-rg.knob-showoff,#moog-osc3-rg.knob-showoff{background:no-repeat url(moog-hp-sprite2.png) -123px -57px;opacity:0.3}.moog-reel-2{background:no-repeat url(moog-hp-sprite2.png) -66px -155px;width:57px;height:57px}.moog-reel-3{background:no-repeat url(moog-hp-sprite2.png) -163px 0;width:57px;height:57px}.moog-reel-4{background:no-repeat url(moog-hp-sprite2.png) -123px -86px;width:57px;height:57px}.moog-reel-5{background:no-repeat url(moog-hp-sprite2.png) -66px -80px;width:57px;height:57px}.moog-reel-6{background:no-repeat url(moog-hp-sprite2.png) -66px -344px;width:57px;height:57px}.moog-reel-7{background:no-repeat url(moog-hp-sprite2.png) 0 -434px;width:57px;height:57px}.moog-reel-8{background:no-repeat url(moog-hp-sprite2.png) -106px 0;width:57px;height:57px}.moog-reel-9{background:no-repeat url(moog-hp-sprite2.png) -123px -244px;width:57px;height:57px}.moog-reel-10{background:no-repeat url(moog-hp-sprite2.png) 0 -46px;width:57px;height:57px}.moog-reel-11{background:no-repeat url(moog-hp-sprite2.png) -4px -274px;width:57px;height:57px}.moog-reel-12{background:no-repeat url(moog-hp-sprite2.png) 0 -103px;width:57px;height:57px}.moog-reel-13{background:no-repeat url(moog-hp-sprite2.png) -194px -203px;width:57px;height:57px}.moog-reel-14{background:no-repeat url(moog-hp-sprite2.png) -234px -260px;width:57px;height:57px}.moog-reel-15{background:no-repeat url(moog-hp-sprite2.png) 0 -160px;width:57px;height:57px}.moog-reel-16{background:no-repeat url(moog-hp-sprite2.png) -4px -354px;width:57px;height:57px}.moog-reel-17{background:no-repeat url(moog-hp-sprite2.png) -66px -437px;margin:1px 0 0 1px;width:55px;height:55px}.moog-reel-18{background:no-repeat url(moog-hp-sprite2.png) -234px -80px;width:57px;height:57px}.moog-reel-19{background:no-repeat url(moog-hp-sprite2.png) -194px -137px;width:57px;height:57px}.moog-reel-20{background:no-repeat url(moog-hp-sprite2.png) -123px -143px;width:57px;height:57px}.moog-reel-21{background:no-repeat url(moog-hp-sprite2.png) -4px -217px;width:57px;height:57px}" : c.appendChild(b.createTextNode("#moog-keyboard .moog-actv{z-index:0}#moog-keyboard s.moog-actv{z-index:2}#moogk0.moog-actv{background-position:0 -1848px}#moogk1.moog-actv{background-position:0 -940px}#moogk2.moog-actv{background-position:0 -137px}#moogk3.moog-actv{background-position:0 -395px}#moogk4.moog-actv{background-position:0 -546px}#moogk5.moog-actv{background-position:0 -504px}#moogk6.moog-actv{background-position:0 -981px}#moogk7.moog-actv{background-position:0 -69px}#moogk8.moog-actv{background-position:0 -654px}#moogk9.moog-actv{background-position:0 -1249px}#moogk10.moog-actv{background-position:-20px -2119px}#moogk11.moog-actv{background-position:0 -1698px}#moogk12.moog-actv{background-position:0 -763px}#moogk13.moog-actv{background-position:-22px -355px}#moogk14.moog-actv{background-position:0 -2051px}#moogk15.moog-actv{background-position:-20px -1521px}#moogk16.moog-actv{background-position:-2px -2229px}#moogk17.moog-actv{background-position:0 -2119px}#moogk18.moog-actv{background-position:0 -1115px}#moogk19.moog-actv{background-position:0 -831px}#moogk20.moog-actv{background-position:0 -1807px}#moogk21.moog-actv{background-position:-1px -1182px}#moogk22.moog-actv{background-position:0 -205px}#moogk23.moog-actv{background-position:-3px -1563px}@-webkit-keyframes bounce-discovery{from{margin-top:0}to{margin-top:-20px}}@-moz-keyframes bounce-discovery{from{margin-top:0}to{margin-top:-20px}}@-o-keyframes bounce-discovery{from{margin-top:0}to{margin-top:-20px}}@-ms-keyframes bounce-discovery{from{margin-top:0}to{margin-top:-20px}}@keyframes bounce-discovery{from{margin-top:0}to{margin-top:-20px}}.float#moog-discovery{-webkit-animation-name:bounce-discovery;-webkit-animation-duration:1.0s;-webkit-animation-iteration-count:infinite;-webkit-animation-direction:alternate;-webkit-animation-timing-function:ease-in-out;-moz-animation-name:bounce-discovery;-moz-animation-duration:1.0s;-moz-animation-iteration-count:infinite;-moz-animation-direction:alternate;-moz-animation-timing-function:ease-in-out;-o-animation-name:bounce-discovery;-o-animation-duration:1.0s;-o-animation-iteration-count:infinite;-o-animation-direction:alternate;-o-animation-timing-function:ease-in-out;-ms-animation-name:bounce-discovery;-ms-animation-duration:1.0s;-ms-animation-iteration-count:infinite;-ms-animation-direction:alternate;-ms-animation-timing-function:ease-in-out;animation-name:bounce-discovery;animation-duration:1.0s;animation-iteration-count:infinite;animation-direction:alternate;animation-timing-function:ease-in-out}#moog-discovery{background:no-repeat url(moog-hp-sprite2.png) -253px -401px;height:72px;left:213px;opacity:0;position:absolute;top:65px;width:39px;z-index:-10005}#attacktime.knob-showoff,#moog-glide.knob-showoff,#decaytime.knob-showoff,#contouramount.knob-showoff,#sustainlevel.knob-showoff,#mastervol.knob-showoff,#moog-osc2-pb.knob-showoff,#moog-osc3-pb.knob-showoff,#cutoff.knob-showoff{background:no-repeat url(moog-hp-sprite2.png) -194px -330px;opacity:0.3;}#moog-volume1.knob-showoff,#moog-volume2.knob-showoff,#moog-volume3.knob-showoff,#moog-loudness-attack.knob-showoff,#moog-loudness-decay.knob-showoff,#moog-loudness-sustain.knob-showoff,#moog-osc1-wf.knob-showoff,#moog-osc2-wf.knob-showoff,#moog-osc3-wf.knob-showoff,#moog-osc1-rg.knob-showoff,#moog-osc2-rg.knob-showoff,#moog-osc3-rg.knob-showoff{background:no-repeat url(moog-hp-sprite2.png) -123px -57px;opacity:0.3}.moog-reel-2{background:no-repeat url(moog-hp-sprite2.png) -66px -155px;width:57px;height:57px}.moog-reel-3{background:no-repeat url(moog-hp-sprite2.png) -163px 0;width:57px;height:57px}.moog-reel-4{background:no-repeat url(moog-hp-sprite2.png) -123px -86px;width:57px;height:57px}.moog-reel-5{background:no-repeat url(moog-hp-sprite2.png) -66px -80px;width:57px;height:57px}.moog-reel-6{background:no-repeat url(moog-hp-sprite2.png) -66px -344px;width:57px;height:57px}.moog-reel-7{background:no-repeat url(moog-hp-sprite2.png) 0 -434px;width:57px;height:57px}.moog-reel-8{background:no-repeat url(moog-hp-sprite2.png) -106px 0;width:57px;height:57px}.moog-reel-9{background:no-repeat url(moog-hp-sprite2.png) -123px -244px;width:57px;height:57px}.moog-reel-10{background:no-repeat url(moog-hp-sprite2.png) 0 -46px;width:57px;height:57px}.moog-reel-11{background:no-repeat url(moog-hp-sprite2.png) -4px -274px;width:57px;height:57px}.moog-reel-12{background:no-repeat url(moog-hp-sprite2.png) 0 -103px;width:57px;height:57px}.moog-reel-13{background:no-repeat url(moog-hp-sprite2.png) -194px -203px;width:57px;height:57px}.moog-reel-14{background:no-repeat url(moog-hp-sprite2.png) -234px -260px;width:57px;height:57px}.moog-reel-15{background:no-repeat url(moog-hp-sprite2.png) 0 -160px;width:57px;height:57px}.moog-reel-16{background:no-repeat url(moog-hp-sprite2.png) -4px -354px;width:57px;height:57px}.moog-reel-17{background:no-repeat url(moog-hp-sprite2.png) -66px -437px;margin:1px 0 0 1px;width:55px;height:55px}.moog-reel-18{background:no-repeat url(moog-hp-sprite2.png) -234px -80px;width:57px;height:57px}.moog-reel-19{background:no-repeat url(moog-hp-sprite2.png) -194px -137px;width:57px;height:57px}.moog-reel-20{background:no-repeat url(moog-hp-sprite2.png) -123px -143px;width:57px;height:57px}.moog-reel-21{background:no-repeat url(moog-hp-sprite2.png) -4px -217px;width:57px;height:57px}"));
        a.a = new tc(a.c);
        G(a, a.a);
        a.e = new $(a.h, a.a, a.b);
        G(a, a.e);
        a.l = new Ec;
        G(a, a.l);
        window.WebFontConfig || (ka("WebFontConfig.google.families", ["Open+Sans::latin"]), a = document.createElement("script"), a.src = ("https:" == document.location.protocol ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js", a.type = "text/javascript", a.async = "true", (document.getElementById("xjsc") || document.body).appendChild(a))
      },
      Zd = function () {
        ob && (ob.M(), ob = j)
      },
      $d = function () {
        if (document.getElementById("hplogo")) {
          Zd();
          if (window.google && window.google.rein && window.google.dstr && (!window.google.doodle || !window.google.doodle.jesr)) ka("google.doodle.jesr", i), window.google.rein.push($d), window.google.dstr.push(Zd);
          window.google && (window.google.psy && window.google.psy.q && window.google.msg) && window.google.msg.listen(22, function () {
            Zd();
            return i
          });
          ob = new Yd(Vd())
        }
      };
    window.google && window.google.x ? window.google.x({
      id: "DOODLE"
    }, $d) : $d();
  } catch (fwe) {
    google.ml(fwe, false, {
      cause: 'DOODLE'
    });
  }
})();