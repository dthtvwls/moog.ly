if (google.y) google.y.first = [];
google.dlj = function (b) {
  window.setTimeout(function () {
    var a = document.createElement("script");
    a.src = b;
    document.getElementById("xjsd").appendChild(a)
  }, 0)
};
(function () {
  var c, d, e = false;

  function f(a) {
    var b = {
      _sn: a ? "FAILURE" : "FALLBACK",
      _pu: c,
      _fu: d
    },
      h = google.ml(new Error("pml"), false, b, true);
    google.log(0, "", h)
  }
  function g() {
    if (!google.pml) f(true)
  }
  function i(a) {
    var b = document.createElement("script");
    b.src = a;
    document.getElementById("xjsd").appendChild(b)
  }
  function j() {
    if (!e && !google.pml) {
      e = true;
      f();
      i(d, g)
    }
  }
  google.dljp = function (a, b) {
    c = a;
    google.xjsu = a;
    d = b;
    window.setTimeout(function () {
      i(c, j)
    }, 0)
  };
})();
(function () {
  google.xjsol = function (a) {
    if (google.sc && (a = google.sc[a])) {
      for (var b = 0; b < a.cb.length; b++) a.cb[b]();
      a.cb = [];
      a.lc = !0
    }
  };
  google.xjsl = function (a, b) {
    var c = google.sc[a];
    c && (b && (c.lc ? b() : c.cb.push(b)), !c.ls && !c.lc && (google.dlj(c.u), c.ls = !0))
  };
  google.register = google.register ||
  function (a, b) {
    google.y.first.push(function () {
      google.register(a, b)
    })
  };
})();
google.y.first = [];
if (!google.xjs) {
  google.dstr = [];
  google.rein = [];
  if (google.timers && google.timers.load.t) {
    google.timers.load.t.xjsls = new Date().getTime();
  }
  google.dljp('/dljp.js');
  google.xjs = 1
}(function () {
  var a = false,
    b;

  function j() {
    return document.documentElement.clientHeight
  }

  function m(d, i, k) {
    var r = d.offsetHeight ? k - d.offsetHeight : k + 10,
      s = i - r - 10,
      l = Math.max(s, 0);
    d.style.height = l + "px";
    return l
  }
  function n() {
    if (google.sn == "web") {
      o();
      return
    }
    if (!b) return;
    m(b, j(), document.body.offsetHeight)
  }
  function p() {
    if (google.sn == "web" || a) return;
    b = document.getElementById("footer");
    if (!b) return;
    if (window.addEventListener) window.addEventListener("resize", n, false);
    else window.attachEvent("onresize", n);
    b.style.display = "block";
    n();
    a = true
  }
  function o() {
    if (!a) return;
    if (window.removeEventListener) window.removeEventListener("resize", n, false);
    else window.detachEvent("onresize", n);
    a = false;
    b = document.getElementById("footer");
    b && (b.style.display = "none")
  }
  if (google.rein && google.dstr) {
    google.rein.push(function () {
      p()
    });
    google.dstr.push(function () {
      o()
    })
  }
  p();
})();;
google.pmc = {
  14: {},
  263: {},
  60: {},
  81: {},
  10: {
    "client": "hp",
    "dh": true,
    "ds": "",
    "exp": "cqn,cconf=0.95,min_length=2,rate_low=0.015,rate_high=0.015",
    "fl": true,
    "host": "google.com",
    "jsonp": true,
    "lyrs": 29,
    "msgs": {
      "lcky": "I\u0026#39;m Feeling Lucky",
      "lml": "Learn more",
      "psrc": "This search was removed from your \u003Ca href=\"/history\"\u003EWeb History\u003C/a\u003E",
      "psrl": "Remove",
      "srch": "Google Search"
    },
    "ovr": {
      "l": 1,
      "ms": 1,
      "p": 1,
      "qn": 1,
      "sp": 1
    },
    "pq": "",
    "psy": "p",
    "rgen": true,
    "scd": 10,
    "sce": 4,
    "spch": true,
    "stok": "ry7a2fHUfVrfRAWmBDA2IBBdUos",
    "token": "6oMIb1URPWFinKWwqgcpqw"
  },
  152: {},
  43: {
    "qir": false,
    "rctj": true,
    "ref": true,
    "uff": false
  },
  83: {
    "bih": 651,
    "biw": 1301
  },
  65: {},
  213: {
    "pberr": "\u003Cfont color=red\u003EError:\u003C/font\u003E The server could not complete your request.  Try again in 30 seconds."
  },
  78: {},
  25: {
    "g": 28,
    "k": true,
    "m": {
      "app": true,
      "bks": true,
      "blg": true,
      "dsc": true,
      "evn": true,
      "fin": true,
      "flm": true,
      "frm": true,
      "isch": true,
      "klg": true,
      "mbl": true,
      "nws": true,
      "plcs": true,
      "ppl": true,
      "prc": true,
      "pts": true,
      "rcp": true,
      "shop": true,
      "vid": true
    },
    "t": null
  },
  170: {
    "cprd": true,
    "gdk": "AIzaSyD74gGiJslW5FS5ka09Ai46kmRQDTwsaFE",
    "gp": "",
    "il": true,
    "ilt": "Ignored",
    "m_remove": "Remove from my social search results",
    "m_viewProfile": "View profile",
    "ps": 80
  },
  216: {},
  105: {},
  22: {
    "db": false,
    "m_errors": {
      "32": "Sorry, no more results to show.",
      "default": "\u003Cfont color=red\u003EError:\u003C/font\u003E The server could not complete your request.  Try again in 30 seconds."
    },
    "m_tip": "Click for more information",
    "nlpm": "-153px -84px",
    "nlpp": "-153px -70px",
    "utp": true
  },
  77: {},
  146: {},
  144: {},
  219: {},
  167: {
    "MESSAGES": {
      "msg_img_from": "Image from %1$s",
      "msg_ms": "More sizes",
      "msg_si": "Similar"
    }
  },
  199: {
    "expanded_thumbnail_width": 116
  },
  84: {
    "cm_hov": true,
    "tt_kft": true,
    "uab": true
  },
  151: {
    "ab": {
      "on": true
    },
    "ajax": {
      "gl": "us",
      "gwsHost": "",
      "hl": "en",
      "maxPrefetchConnections": 2,
      "prefetchTotal": 5,
      "q": "",
      "requestPrefix": "/ajax/rd?"
    },
    "css": {
      "def": false
    },
    "elastic": {
      "hideLeftnav": false,
      "js": true,
      "rhs4Col": 1088,
      "rhs5Col": 1176,
      "rhsOn": true,
      "tiny": false
    },
    "exp": {
      "adt": true
    },
    "kfe": {
      "adsClientId": 33,
      "clientId": 29,
      "kfeHost": "clients1.google.com",
      "kfeUrlPrefix": "/webpagethumbnail?r=4\u0026f=3\u0026s=400:585\u0026query=\u0026hl=en\u0026gl=us",
      "vsH": 585,
      "vsW": 400
    },
    "logging": {
      "csiFraction": 0.050
    },
    "msgs": {
      "details": "Result details",
      "hPers": "Hide personal results",
      "loading": "Still loading...",
      "mute": "Mute",
      "noPreview": "Preview not available",
      "sPers": "Show personal results",
      "unmute": "Unmute"
    },
    "nokjs": {
      "on": true
    },
    "time": {
      "hOff": 300,
      "hOn": 300,
      "hSwitch": 200,
      "hUnit": 1500,
      "loading": 100,
      "timeout": 2500
    }
  },
  209: {},
  116: {
    "su": 1
  },
  186: {
    "m": {
      "c": "Block all %1$s ads",
      "d": "We will not show you ads from %1$s again.",
      "e": "Manage blocked advertisers",
      "f": "Undo"
    },
    "q": "",
    "t": 100
  },
  164: {},
  29: {
    "cspd": 0,
    "hme": true,
    "icmt": false,
    "jck": true,
    "mcr": 5
  },
  92: {
    "ae": true,
    "avgTtfc": 2000,
    "bpe": false,
    "brba": false,
    "dlen": 24,
    "dper": 3,
    "fbdc": 500,
    "fbdu": -1,
    "fbh": true,
    "fd": 1000000,
    "focus": true,
    "ftwd": 200,
    "gpsj": true,
    "hiue": true,
    "hpt": 299,
    "iavgTtfc": 2000,
    "kn": true,
    "knrt": true,
    "maxCbt": 1500,
    "mds": "clir,clue,dfn,evn,frim,klg,prc,rl,show,sp,sts,mbl_he,mbl_hs,mbl_re,mbl_rs,mbl_sv",
    "msg": {
      "dym": "Did you mean:",
      "gs": "Google Search",
      "kntt": "Use the up and down arrow keys to select each result. Press Enter to go to the selection.",
      "sif": "Search instead for",
      "srf": "Showing results for"
    },
    "odef": true,
    "ophe": true,
    "pmt": 250,
    "pq": true,
    "rpt": 50,
    "sc": "psy-ab",
    "sfcs": false,
    "tct": " \\u3000?",
    "tdur": 50,
    "ufl": true
  },
  111: {
    "cdu": true,
    "chl": "/logos/classicplus.png",
    "chlh": 95,
    "chlw": 275,
    "cnph": true,
    "kv": 100,
    "msg": {
      "cprpt": "Recently picked",
      "cpyc": "From your computer",
      "cpyppt": "Your Picasa Web photos",
      "cpyrpt": "Your recent picks",
      "ld": "Loading..."
    }
  },
  24: {},
  38: {}
};
(function () {
  var r = (function () {
    google.y.first.push(function () {
      try {
        (function () {
          function e() {
            var a = null;
            if (window.ActiveXObject) {
              a = new ActiveXObject("Msxml2.XMLHTTP");
              if (!a) a = new ActiveXObject("Microsoft.XMLHTTP")
            } else if (window.XMLHttpRequest) a = new XMLHttpRequest;
            return a
          }
          function f(a) {
            if (window.execScript) window.execScript(a, "JavaScript");
            else if (window.eval) {
              var b = null;
              window.eval("var _et_ = 1;");
              if (typeof window._et_ != "undefined") {
                delete window._et_;
                b = true
              } else b = false;
              if (b) window.eval(a);
              else {
                var d = window.document,
                  c = d.createElement("script");
                c.type = "text/javascript";
                c.defer = false;
                c.appendChild(d.createTextNode(a));
                d.body.appendChild(c);
                d.body.removeChild(c)
              }
            }
          }
          function g(a) {
            var b = a;
            if (b && b.length > 0) {
              b = b.substring(27);
              if (b.substring(0, 6) == "initcp") b = "google.cp." + b
            }
            f(b)
          }
          function h(a) {
            if (a.readyState == 4 && (a.status == 200 || a.status == 304)) try {
              g(a.responseText)
            } catch (b) {}
          }
          function i() {
            if (window.google && (!window.google.cp || window.google.cp.initcp && !window.google.cp.o)) {
              window.google.cp = window.google.cp || {};
              window.google.cp.o = {
                l: "\x3cstyle\x3e#moog area{cursor:pointer !important}#moog{background:transparent no-repeat url(moog-hp-base2.png);position:relative;top:0;left:40px;width:600px;height:225px;padding:0;-webkit-user-select:none}#moog-keyboard{height:224px;position:absolute;width:400px;top:0;left:0}#moog-map{position:relative;top:10pxpadding:0;margin:0}#moog-keyboard\x3ew,#moog-keyboard\x3es{background-color:transparent;background-image:url(moog-hp-k-sprite.png);background-repeat:no-repeat;position:absolute}#moog-keyboard\x3ew{height:66px;top:125px;width:42px;z-index:1}#moog-keyboard\x3es{top:120px;z-index:2}#moogk0{background-position:0 -2337px;left:50px}#moogk1{background-position:0 -2297px;height:39px;left:71px;width:25px}#moogk2{background-position:0 -1983px;left:75px}#moogk3{background-position:0 -354px;height:41px;left:95px;width:22px}#moogk4{background-position:0 -2405px;left:100px}#moogk5{background-position:-18px -314px;height:39px;left:120px;width:25px}#moogk6{background-position:0 -1048px;left:124px}#moogk7{background-position:0 -437px;left:149px}#moogk8{background-position:0 -1453px;width:16px;height:39px;left:166px}#moogk9{background-position:0 -1317px;left:173px}#moogk10{background-position:0 -613px;width:23px;left:191px;height:39px}#moogk11{background-position:-16px -1453px;left:198px;width:23px;height:68px}#moogk12{background-position:0 -695px;height:68px;left:220px;width:25px}#moogk13{background-position:0 -314px;height:41px;left:235px;width:17px}#moogk14{background-position:0 -2160px;height:68px;left:244px;width:28px}#moogk15{background-position:-16px -654px;height:40px;left:260px;width:22px}#moogk16{background-position:0 -1630px;height:68px;left:268px;width:29px}#moogk17{background-position:0 -1521px;height:39px;left:283px;width:19px}#moogk18{background-position:0 -1385px;height:67px;left:289px;width:30px}#moogk19{background-position:0 -1px;left:308px}#moogk20{background-position:0 -1767px;height:39px;left:323px;width:23px}#moogk21{background-position:0 -246px;height:67px;left:329px;width:39px}#moogk22{background-position:0 -900px;height:39px;left:346px;width:25px}#moogk23{background-position:-1px -1915px;height:68px;left:354px;width:39px}#moog-map,#moog-bkg,#keymap{float:right;position:relative;z-index:901;outline:0;border:none}w.moog-actv{top:124px !important}#moog-4-track{background:no-repeat url(moog-hp-sprite2.png) -121px -401px;width:132px;height:128px;top:31px;left:398px;position:absolute}#moog-4-track-knobs{background:no-repeat url(moog-hp-sprite2.png) -194px -194px;width:74px;height:9px;top:63px;left:437px;position:absolute}#moog-g-plus{cursor:pointer;width:40px;height:23px;top:129px;left:428px;position:absolute}#moog-g-plus-inactive{background:no-repeat url(moog-hp-sprite2.png) -194px -57px;width:40px;height:23px;top:129px;left:428px;position:absolute}#moog-g-plus-up{background:no-repeat url(moog-hp-sprite2.png) -194px -366px;width:40px;height:23px;top:129px;left:428px;position:absolute}#moog-g-plus-active{background:no-repeat url(moog-hp-sprite2.png) 0 -23px;width:39px;height:23px;top:129px;left:428px;position:absolute}#moog-link{cursor:pointer;width:40px;height:23px;top:129px;left:475px;position:absolute}#moog-link-inactive{background:no-repeat url(moog-hp-sprite2.png) -245px -339px;width:40px;height:23px;top:129px;left:475px;position:absolute}#moog-link-up{background:no-repeat url(moog-hp-sprite2.png) -4px -331px;width:40px;height:23px;top:129px;left:475px;position:absolute}#moog-link-active{background:no-repeat url(moog-hp-sprite2.png) -123px -311px;width:39px;height:22px;top:129px;left:475px;position:absolute}#moog-play{cursor:pointer;width:40px;height:23px;top:102px;left:428px;position:absolute}#moog-play-inactive{background:no-repeat url(moog-hp-sprite2.png) -251px -203px;width:39px;height:22px;top:102px;left:428px;position:absolute}#moog-play-up{background:no-repeat url(moog-hp-sprite2.png) -245px -317px;width:39px;height:22px;top:102px;left:428px;position:absolute}#moog-stop{background:no-repeat url(moog-hp-sprite2.png) -123px -333px;width:39px;height:22px;top:102px;left:428px;position:absolute}#moog-stop-up{background:no-repeat url(moog-hp-sprite2.png) -123px -355px;width:39px;height:22px;top:102px;left:428px;position:absolute}#moog-reel-tape-left{background:no-repeat url(moog-hp-sprite2.png) -194px -289px;width:37px;height:34px;top:30px;left:421px;position:absolute}#moog-reel-tape-right{background:no-repeat url(moog-hp-sprite2.png) -194px -289px;width:37px;height:34px;top:31px;left:482px;position:absolute}#moog-reel-left{top:18px;left:412px;position:absolute}#moog-reel-right{top:19px;left:473px;position:absolute}.moog-reel-0{background:no-repeat url(moog-hp-sprite2.png) -66px -212px;margin:1px 0 0 1px;width:55px;height:55px}.moog-reel-1{background:no-repeat url(moog-hp-sprite2.png) -233px 0;width:57px;height:57px}#moog-reel-over-left{background:no-repeat url(moog-hp-sprite2.png) -66px -291px;width:54px;height:53px;top:19px;left:412px;position:absolute}#moog-reel-over-right{background:no-repeat url(moog-hp-sprite2.png) -66px -291px;width:54px;height:53px;top:20px;left:473px;position:absolute}#moog-record{cursor:pointer;width:40px;height:24px;top:102px;left:475px;position:absolute}#moog-record-up{background:no-repeat url(moog-hp-sprite2.png) 0 0;width:40px;height:23px;top:102px;left:475px;position:absolute}#moog-record-inactive{background:no-repeat url(moog-hp-sprite2.png) -66px -57px;width:40px;height:23px;top:102px;left:475px;position:absolute}#moog-record-active{background:no-repeat url(moog-hp-sprite2.png) -4px -411px;width:40px;height:24px;top:102px;left:475px;position:absolute}.moog-meter-needle{background:no-repeat url(moog-hp-sprite2.png) -153px -57px;width:2px;height:11px;position:absolute;top:86px;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}#moog-meter-needle-1{left:432px}#moog-meter-needle-2{left:457px}#moog-meter-needle-3{left:482px}#moog-meter-needle-4{left:507px}.moog-meter-inactive{background:no-repeat url(moog-hp-sprite2.png) -251px -137px;width:25px;height:18px}.moog-meter-active{background:no-repeat url(moog-hp-sprite2.png) -40px 0;width:25px;height:18px}.moog-meter-up{background:no-repeat url(moog-hp-sprite2.png) -66px -137px;width:25px;height:18px}.moog-meter-recording{background:no-repeat url(moog-hp-sprite2.png) -91px -137px;width:25px;height:18px}#moog-meter-1{top:80px;left:421px;position:absolute}#moog-meter-2{top:80px;left:446px;position:absolute}#moog-meter-3{top:80px;left:471px;position:absolute}#moog-meter-4{top:80px;left:496px;position:absolute}#moog-meter-target-1{cursor:pointer;top:80px;left:421px;position:absolute;width:25px;height:18px}#moog-meter-target-2{cursor:pointer;top:80px;left:446px;position:absolute;width:25px;height:18px}#moog-meter-target-3{cursor:pointer;top:80px;left:471px;position:absolute;width:25px;height:18px}#moog-meter-target-4{cursor:pointer;top:80px;left:496px;position:absolute;width:25px;height:18px}#moog-tooltip-canvas{bottom:5px;display:table;left:435px;height:50px;position:absolute;width:170px}#moog-tooltip{background:#fff;color:#7b2114;display:table-cell;font-family:Arial,sans-serif;font-size:13px;outline:none;transition:opacity 2s;-o-transition:opacity 2s;-moz-transition:opacity 2s;-ms-transition:opacity 2s;-webkit-transition:opacity 2s;vertical-align:middle;visibility:hidden}#moog-tooltip.full-visible{transition:opacity 1s;-o-transition:opacity 1s;-moz-transition:opacity 1s;-ms-transition:opacity 1s;-webkit-transition:opacity 1s}#moog-tooltip.half-visible{transition:opacity 4s;-o-transition:opacity 4s;-moz-transition:opacity 4s;-ms-transition:opacity 4s;-webkit-transition:opacity 4s}#moog-link-tab{top:130px;left:524px;position:absolute;background:no-repeat url(moog-hp-sprite2.png) -66px -529px;width:0;height:20px;overflow:hidden}#moog-link-text{background:none;border:none;color:white;cursor:text;font-family:\x27Open Sans\x27,Arial,sans-serif;font-size:12px;margin:0 10px;padding:0;text-decoration:none;width:0;-webkit-user-select:text}#knobs{position:absolute;top:-86px;left:0px}.knob-indicator{background:no-repeat url(moog-hp-sprite2.png) 0 -217px;display:block;width:4px;height:3px;left:1px;margin:0 auto;padding:0;position:relative;top:8px}#mastervol{height:36px;left:39px;width:37px;top:93px}#attacktime,#decaytime,#contouramount,#sustainlevel,#cutoff,#moog-glide{height:36px;margin:0 !important;width:37px}#decaytime .knob-indicator{left:1px;top:1px}#attacktime{left:263px;top:93px}#decaytime{left:263px;top:120px;z-index:901}#sustainlevel{left:263px;top:148px}#contouramount{left:210px;top:148px}#moog-glide{left:210px;top:120px;z-index:901}#cutoff{left:210px;top:93px}#moog-volume1{left:94px;top:123px}#moog-volume2{left:94px;top:95px}#moog-volume3{left:94px;top:152px}#moog-loudness-attack{left:299px;top:94px}#moog-loudness-decay{left:299px;top:123px}#moog-loudness-sustain{left:299px;top:152px}#attacktime.knob-glow,#moog-glide.knob-glow,#decaytime.knob-glow,#contouramount.knob-glow,#sustainlevel.knob-glow,#mastervol.knob-glow,#moog-osc2-pb.knob-glow,#moog-osc3-pb.knob-glow,#cutoff.knob-glow{background:no-repeat url(moog-hp-sprite2.png) -66px -401px}#moog-volume1.knob-glow,#moog-volume2.knob-glow,#moog-volume3.knob-glow,#moog-loudness-attack.knob-glow,#moog-loudness-decay.knob-glow,#moog-loudness-sustain.knob-glow,#moog-osc1-wf.knob-glow,#moog-osc2-wf.knob-glow,#moog-osc3-wf.knob-glow,#moog-osc1-rg.knob-glow,#moog-osc2-rg.knob-glow,#moog-osc3-rg.knob-glow{background:no-repeat url(moog-hp-sprite2.png) -194px -260px}#attacktime,#moog-glide,#decaytime,#contouramount,#sustainlevel#mastervol,#moog-osc2-pb,#moog-osc3-pb,#cutoff{-webkit-transition:opacity 0.2s ease-in-out;-moz-transition:opacity 0.2s ease-in-out;-o-transition:opacity 0.2s ease-in-out;-ms-transition:opacity 0.2s ease-in-out;transition:opacity 0.2s ease-in-out}#moog-volume1,#moog-volume2,#moog-volume3,#moog-loudness-attack,#moog-loudness-decay,#moog-loudness-sustain,#moog-osc1-wf,#moog-osc2-wf,#moog-osc3-wf,#moog-osc1-rg,#moog-osc2-rg,#moog-osc3-rg{-webkit-transition:opacity 0.2s ease-in-out;-moz-transition:opacity 0.2s ease-in-out;-o-transition:opacity 0.2s ease-in-out;-ms-transition:opacity 0.2s ease-in-out;transition:opacity 0.2s ease-in-out}#moog-osc2-pb,#moog-osc3-pb{left:150px;height:36px;width:37px}#moog-osc2-pb{top:91px}#moog-osc3-pb{top:145px}#moog-osc2-rg{top:94px;left:127px}#moog-osc1-rg{top:122px;left:127px}#moog-osc3-rg{left:127px;top:151px}#moog-osc2-wf{left:181px;top:94px}#moog-osc1-wf{left:181px;top:122px}#moog-osc3-wf{left:181px;top:151px}.knob{cursor:pointer;height:29px;left:25px;margin:0;padding:0;position:absolute;top:55px;width:30px;z-index:899}.knob-glow{z-index:900}#moog-switch{top:121px;left:37px;width:21px;height:10px;position:absolute;cursor:pointer;z-index:903}.moog-switch-on{background:none}.moog-switch-off{background:no-repeat url(moog-hp-sprite2.png) -123px -301px}#moog-mod-wheel{cursor:pointer;position:absolute;left:30px;top:135px;width:10px}#moog-mod-wheel\x3e.knob-indicator{display:none}#moog-mod-wheel-bg{position:absolute;background:no-repeat url(moog-hp-sprite2.png) -135px -200px;width:32px;height:44px;left:28px;top:138px;z-index:-1}#moog-mod-wheel-ind{position:absolute;background:no-repeat url(moog-hp-sprite2.png) -194px -323px;width:20px;height:7px;left:30px;top:150px;z-index:-1}.goog-slider-vertical,.goog-slider-horizontal{overflow:hidden;position:relative;outline:none}.goog-slider-thumb{overflow:hidden;position:absolute;outline:none}#moog-bubble{position:absolute;background:no-repeat url(moog-hp-sprite2.png) 0 -491px;width:66px;height:43px;top:-39px;left:26px}#moog-bubble-text{font-family:\x27Open Sans\x27,Arial,sans-serif;font-size:13px;color:#fff;text-align:center;position:absolute;top:9px;left:13px;height:31px;width:39px}#moog-wf{position:absolute;top:11px;left:26px}.moog-wf-0{background:no-repeat url(moog-hp-sprite2.png) -180px -143px;width:12px;height:12px}.moog-wf-1{background:no-repeat url(moog-hp-sprite2.png) -123px -200px;width:12px;height:12px}.moog-wf-2{background:no-repeat url(moog-hp-sprite2.png) -234px -317px;width:11px;height:12px}.moog-wf-3{background:no-repeat url(moog-hp-sprite2.png) -220px 0;width:13px;height:12px}.moog-wf-4{background:no-repeat url(moog-hp-sprite2.png) -44px -411px;width:14px;height:12px}.moog-wf-5{background:no-repeat url(moog-hp-sprite2.png) -194px -389px;width:16px;height:12px}.moog-wf-6{background:no-repeat url(moog-hp-sprite2.png) -251px -529px;width:13px;height:12px}#moog-led{background:no-repeat url(moog-hp-sprite2.png) -264px -529px;position:absolute;width:20px;height:21px;left:333px;top:39px}\x3c/style\x3e\x3cdiv id\x3dhplogo border\x3d0\x3e\x3cinput id\x3dhplogo-i style\x3d\x22width:1px;height:1px;opacity:0;position:absolute;top:-300px\x22\x3e\x3cdiv id\x3dmoog\x3e\x3cdiv id\x3dmoog-tooltip-canvas\x3e\x3ca href\x3d\x22/search?q\x3dBob+Moog\x26oi\x3dddle\x26ct\x3dmoog12-hp\x22 hidefocus id\x3dmoog-tooltip tabindex\x3d-1\x3eRobert Moog\x27s 78th Birthday\x3c/a\x3e\x3c/div\x3e\x3cdiv id\x3dknobs\x3e\x3cdiv id\x3dmastervol class\x3dknob\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-volume1 class\x3dknob\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-volume2 class\x3dknob\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-volume3 class\x3dknob\x3e\x3c/div\x3e\x3cdiv id\x3dattacktime class\x3dknob\x3e\x3c/div\x3e\x3cdiv id\x3dcontouramount class\x3dknob\x3e\x3c/div\x3e\x3cdiv id\x3dcutoff class\x3dknob\x3e\x3c/div\x3e\x3cdiv id\x3ddecaytime class\x3dknob\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-glide class\x3dknob\x3e\x3c/div\x3e\x3cdiv id\x3dsustainlevel class\x3dknob\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-osc2-pb class\x3dknob\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-osc3-pb class\x3dknob\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-osc1-rg class\x3dknob\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-osc2-rg class\x3dknob\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-osc3-rg class\x3dknob\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-osc1-wf class\x3dknob\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-osc2-wf class\x3dknob\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-osc3-wf class\x3dknob\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-loudness-attack class\x3dknob\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-loudness-decay class\x3dknob\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-loudness-sustain class\x3dknob\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-mod-wheel\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-mod-wheel-bg\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-mod-wheel-ind\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-keyboard\x3e\x3cimg id\x3dmoog-map src\x3d\x22data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw\x3d\x3d\x22 width\x3d\x22400\x22 height\x3d\x22223\x22 usemap\x3d\x22#keymap\x22 alt\x3d\x22\x22/\x3e\x3cw id\x3dmoogk0\x3e\x3c/w\x3e\x3cs id\x3dmoogk1\x3e\x3c/s\x3e\x3cw id\x3dmoogk2\x3e\x3c/w\x3e\x3cs id\x3dmoogk3\x3e\x3c/s\x3e\x3cw id\x3dmoogk4\x3e\x3c/w\x3e\x3cs id\x3dmoogk5\x3e\x3c/s\x3e\x3cw id\x3dmoogk6\x3e\x3c/w\x3e\x3cw id\x3dmoogk7\x3e\x3c/w\x3e\x3cs id\x3dmoogk8\x3e\x3c/s\x3e\x3cw id\x3dmoogk9\x3e\x3c/w\x3e\x3cs id\x3dmoogk10\x3e\x3c/s\x3e\x3cw id\x3dmoogk11\x3e\x3c/w\x3e\x3cw id\x3dmoogk12\x3e\x3c/w\x3e\x3cs id\x3dmoogk13\x3e\x3c/s\x3e\x3cw id\x3dmoogk14\x3e\x3c/w\x3e\x3cs id\x3dmoogk15\x3e\x3c/s\x3e\x3cw id\x3dmoogk16\x3e\x3c/w\x3e\x3cs id\x3dmoogk17\x3e\x3c/s\x3e\x3cw id\x3dmoogk18\x3e\x3c/w\x3e\x3cw id\x3dmoogk19\x3e\x3c/w\x3e\x3cs id\x3dmoogk20\x3e\x3c/s\x3e\x3cw id\x3dmoogk21\x3e\x3c/w\x3e\x3cs id\x3dmoogk22\x3e\x3c/s\x3e\x3cw id\x3dmoogk23\x3e\x3c/w\x3e\x3cmap name\x3dkeymap id\x3dkeymap\x3e\x3carea shape\x3dcircle coords\x3d\x2257,24,16\x22 href\x3d\x22javascript:;\x22 id\x3dmoog-knob-master alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dcircle coords\x3d\x22108,22,12\x22 href\x3d\x22javascript:;\x22 id\x3dmoog-knob-1 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dcircle coords\x3d\x22108,50,12\x22 href\x3d\x22javascript:;\x22 id\x3dmoog-knob-0 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dcircle coords\x3d\x22108,79,12\x22 href\x3d\x22javascript:;\x22 id\x3dmoog-knob-2 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dcircle coords\x3d\x22228,23,13\x22 href\x3d\x22javascript:;\x22 id\x3dmoog-knob-3 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dcircle coords\x3d\x22228,50,13\x22 href\x3d\x22javascript:;\x22 id\x3dmoog-knob-4 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dcircle coords\x3d\x22228,79,13\x22 href\x3d\x22javascript:;\x22 id\x3dmoog-knob-5 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dcircle coords\x3d\x22281,23,13\x22 href\x3d\x22javascript:;\x22 id\x3dmoog-knob-6 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dcircle coords\x3d\x22281,50,13\x22 href\x3d\x22javascript:;\x22 id\x3dmoog-knob-7 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dcircle coords\x3d\x22281,79,13\x22 href\x3d\x22javascript:;\x22 id\x3dmoog-knob-8 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dcircle coords\x3d\x22313,22,12\x22 href\x3d\x22javascript:;\x22 id\x3dmoog-knob-9 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dcircle coords\x3d\x22313,50,12\x22 href\x3d\x22javascript:;\x22 id\x3dmoog-knob-10 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dcircle coords\x3d\x22313,79,12\x22 href\x3d\x22javascript:;\x22 id\x3dmoog-knob-11 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dcircle coords\x3d\x22168,23,16\x22 href\x3d\x22javascript:;\x22 id\x3dmoog-knob-osc2-pb alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dcircle coords\x3d\x22168,77,16\x22 href\x3d\x22javascript:;\x22 id\x3dmoog-knob-osc3-pb alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dcircle coords\x3d\x22142,22,12\x22 href\x3d\x22javascript:;\x22 id\x3dmoog-knob-osc2-rg alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dcircle coords\x3d\x22142,50,12\x22 href\x3d\x22javascript:;\x22 id\x3dmoog-knob-osc1-rg alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dcircle coords\x3d\x22142,79,12\x22 href\x3d\x22javascript:;\x22 id\x3dmoog-knob-osc3-rg alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dcircle coords\x3d\x22197,23,14\x22 href\x3d\x22javascript:;\x22 id\x3dmoog-knob-osc2-wf alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dcircle coords\x3d\x22197,50,14\x22 href\x3d\x22javascript:;\x22 id\x3dmoog-knob-osc1-wf alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dcircle coords\x3d\x22197,79,14\x22 href\x3d\x22javascript:;\x22 id\x3dmoog-knob-osc3-wf alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3drect coords\x3d\x2225,135,55,181\x22 href\x3d\x22javascript:;\x22 id\x3dmoog-mod-wheel-area alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dpoly coords\x3d\x2252,184,51,192,74,192,80,161,72,162,80,127,67,127,52,184\x22 href\x3d\x22javascript:;\x22 class\x3dmoog-key-0 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dpoly coords\x3d\x2290,121,81,121,72,160,87,162,94,127,90,121\x22 href\x3d\x22javascript:;\x22 class\x3dmoog-key-1 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dpoly coords\x3d\x2293,126,86,161,81,161,75,184,75,192,99,192,104,161,96,161,104,126,93,126\x22 href\x3d\x22javascript:;\x22 class\x3dmoog-key-2 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dpoly coords\x3d\x22105,121,97,154,96,161,111,161,117,125,112,121,105,121\x22 href\x3d\x22javascript:;\x22 class\x3dmoog-key-3 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dpoly coords\x3d\x22117,125,111,161,105,161,101,184,101,193,124,193,128,161,122,161,127,125,117,125\x22 href\x3d\x22javascript:;\x22 class\x3dmoog-key-4 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dpoly coords\x3d\x22129,121,126,126,122,161,136,161,141,126,136,121,129,121\x22 href\x3d\x22javascript:;\x22 class\x3dmoog-key-5 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dpoly coords\x3d\x22141,126,156,126,149,186,150,192,124,192,125,184,128,161,135,161,141,126\x22 href\x3d\x22javascript:;\x22 class\x3dmoog-key-6 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dpoly coords\x3d\x22173,192,174,160,167,160,170,127,156,127,151,192,173,192\x22 href\x3d\x22javascript:;\x22 class\x3dmoog-key-7 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dpoly coords\x3d\x22180,121,172,120,170,125,167,160,181,160,183,126,180,121\x22 href\x3d\x22javascript:;\x22 class\x3dmoog-key-8 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dpoly coords\x3d\x22183,126,193,126,193,160,197,160,196,193,174,193,176,160,181,160,183,126\x22 href\x3d\x22javascript:;\x22 class\x3dmoog-key-9 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dpoly coords\x3d\x22204,121,196,121,191,126,192,161,207,161,207,126,204,121\x22 href\x3d\x22javascript:;\x22 class\x3dmoog-key-10 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dpoly coords\x3d\x22207,126,220,126,222,193,199,193,199,161,206,160,207,126\x22 href\x3d\x22javascript:;\x22 class\x3dmoog-key-11 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dpoly coords\x3d\x22237,126,239,161,244,161,246,193,223,192,221,126,237,126\x22 href\x3d\x22javascript:;\x22 class\x3dmoog-key-12 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dpoly coords\x3d\x22247,121,239,121,235,127,238,161,253,161,250,126,247,121\x22 href\x3d\x22javascript:;\x22 class\x3dmoog-key-13 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dpoly coords\x3d\x22250,126,253,161,247,161,248,192,273,193,270,161,266,161,261,126,250,126\x22 href\x3d\x22javascript:;\x22 class\x3dmoog-key-14 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dpoly coords\x3d\x22273,121,265,121,261,126,265,161,280,161,273,121\x22 href\x3d\x22javascript:;\x22 class\x3dmoog-key-15 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dpoly coords\x3d\x22271,161,273,193,296,192,295,184,292,161,289,161,285,126,274,126,279,161,271,161\x22 href\x3d\x22javascript:;\x22 class\x3dmoog-key-16 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dpoly coords\x3d\x22296,121,289,121,284,126,290,161,304,161,296,121\x22 href\x3d\x22javascript:;\x22 class\x3dmoog-key-17 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dpoly coords\x3d\x22297,126,304,160,294,161,297,192,320,192,320,184,308,126,297,126\x22 href\x3d\x22javascript:;\x22 class\x3dmoog-key-18 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dpoly coords\x3d\x22310,126,320,185,321,192,344,192,344,183,338,161,333,161,325,126,310,126\x22 href\x3d\x22javascript:;\x22 class\x3dmoog-key-19 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dpoly coords\x3d\x22335,121,327,120,324,126,333,162,347,160,335,121\x22 href\x3d\x22javascript:;\x22 class\x3dmoog-key-20 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dpoly coords\x3d\x22339,161,346,192,369,192,369,184,361,161,358,161,347,125,337,126,347,161,339,161\x22 href\x3d\x22javascript:;\x22 class\x3dmoog-key-21 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dpoly coords\x3d\x22359,121,350,121,346,127,358,161,372,161,359,121\x22 href\x3d\x22javascript:;\x22 class\x3dmoog-key-22 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3carea shape\x3dpoly coords\x3d\x22364,161,370,184,370,192,393,192,393,184,373,126,360,126,372,160,364,161\x22 href\x3d\x22javascript:;\x22 class\x3dmoog-key-23 alt\x3d\x22\x22\x3e\x3c/area\x3e\x3c/map\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-switch class\x3dmoog-switch-off\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-bubble style\x3ddisplay:none\x3e\x3cdiv id\x3dmoog-bubble-text dir\x3dltr\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-wf class\x3dmoog-wf-0 style\x3ddisplay:none\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-led style\x3ddisplay:none\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-4-track\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-4-track-knobs\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-g-plus-inactive style\x3ddisplay:none\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-g-plus-up style\x3ddisplay:none\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-g-plus-active style\x3ddisplay:none\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-g-plus style\x3ddisplay:none\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-link-inactive\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-link-up style\x3ddisplay:none\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-link-active style\x3ddisplay:none\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-link\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-play-inactive\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-stop style\x3ddisplay:none\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-stop-up style\x3ddisplay:none\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-play-up style\x3ddisplay:none\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-play\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-record-inactive\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-record-up style\x3ddisplay:none\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-record-active style\x3ddisplay:none\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-record\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-reel-tape-left\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-reel-tape-right\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-reel-left class\x3dmoog-reel-1\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-reel-right class\x3dmoog-reel-1\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-reel-over-left\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-reel-over-right\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-meter-1 class\x3dmoog-meter-active\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-meter-needle-1 class\x3dmoog-meter-needle\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-meter-target-1\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-meter-2 class\x3dmoog-meter-inactive\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-meter-needle-2 class\x3dmoog-meter-needle\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-meter-target-2\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-meter-3 class\x3dmoog-meter-inactive\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-meter-needle-3 class\x3dmoog-meter-needle\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-meter-target-3\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-meter-4 class\x3dmoog-meter-inactive\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-meter-needle-4 class\x3dmoog-meter-needle\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-meter-target-4\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-link-tab style\x3ddisplay:none\x3e\x3cinput id\x3dmoog-link-text type\x3dtext value\x3d\x22\x22 autocomplete\x3doff dir\x3dltr onclick\x3d\x22this.focus();this.select();\x22 readonly\x3dreadonly style\x3ddisplay:none\x3e\x3c/div\x3e\x3cdiv id\x3dmoog-discovery\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cscript\x3e(function(){google.doodle||(google.doodle\x3d{});var a\x3ddocument.createElement(\x22script\x22);a.src\x3d\x22moog.6.js\x22;a.async\x3d!0;document.body.appendChild(a);})();\x3c/script\x3e",
                h: true,
                a: "",
                t: "",
                u: "",
                x: 0,
                y: 0,
                d: true
              };
              window.google.cp.p = 207;
            }
          }
          i();
        })();;
      } catch (e) {
        google.ml(e, false, {
          'cause': 'defer'
        });
      }
      if (google.med) {
        google.med('init');
        google.initHistory();
        google.med('history');
      }
      google.History && google.History.initialize('/')
    });
  });
  r();
  var l = window.location.hash ? window.location.href.substr(window.location.href.indexOf('#')) : '#';
  if (l == '#' && google.defre) {
    google.defre = 1;
    google.y.first.push(function () {
      if (google.j && google.j.init) {
        google.rein && google.rein.push(r);
      }
    });
  }
})();
if (google.j && google.j.en && google.j.xi) {
  window.setTimeout(google.j.xi, 0);
}