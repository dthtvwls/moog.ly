window.google = {
  kEI: "Uny9T8e3POj10gHO04ysDA",
  getEI: function (a) {
    var b;
    while (a && !(a.getAttribute && (b = a.getAttribute("eid")))) a = a.parentNode;
    return b || google.kEI
  },
  https: function () {
    return window.location.protocol == "https:"
  },
  authuser: 0,
  ml: function () {},
  pageState: "#",
  kHL: "en",
  time: function () {
    return (new Date).getTime()
  },
  log: function (a, b, c, e) {},
  lc: [],
  li: 0,
  j: {
    en: 1,
    l: function () {
      google.fl = true
    },
    e: function () {
      google.fl = true
    },
    b: location.hash && location.hash != "#",
    bv: 21,
    cf: "osb",
    pm: "p",
    pl: [],
    mc: 0,
    sc: 0.5,
    u: "4164ad59"
  },
  Toolbelt: {},
  y: {},
  x: function (a, b) {
    google.y[a.id] = [a, b];
    return false
  }
};
(function () {
  var a = google.j;
  window.onpopstate = function () {
    a.psc = 1
  };
  for (var b = 0, c; c = ["ad", "bc", "inpr", "is", "p", "pa", "ac", "pc", "pah", "ph", "sa", "sifp", "slp", "spf", "spn", "xx", "zc", "zz"][b++];)(function (e) {
    a[e] = function () {
      a.pl.push([e, arguments])
    }
  })(c)
})();
if (!window.chrome) window.chrome = {};
window.chrome.sv = 2.00;
window.chrome.userWantsQuery = function (a) {
  google.x({
    id: "psyapi"
  }, function () {
    google.nav.search({
      q: encodeURIComponent(a),
      sourceid: "chrome-psyapi1"
    })
  })
};
window.google.sn = "webhp";
window.google.timers = {};
window.google.startTick = function (a, b) {
  window.google.timers[a] = {
    t: {
      start: (new Date).getTime()
    },
    bfr: !(!b)
  }
};
window.google.tick = function (a, b, c) {
  if (!window.google.timers[a]) google.startTick(a);
  window.google.timers[a].t[b] = c || (new Date).getTime()
};
google.startTick("load", true);
try {
  window.google.pt = window.chrome && window.chrome.csi && Math.floor(window.chrome.csi().pageT);
} catch (u) {}