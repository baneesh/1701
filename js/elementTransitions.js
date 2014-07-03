/*! elementTransitions 2013-09-29 */
var PageTransitions = function(a) {
  function b() {
    var a = document.body || document.documentElement,
      b = a.style,
      c = "animation";
    if ("string" == typeof b[c]) return "animation";
    v = ["Moz", "Webkit", "Khtml", "O", "ms"], c = c.charAt(0).toUpperCase() + c.substr(1);
    for (var d = 0; d < v.length; d++)
      if ("string" == typeof b[v[d] + c]) return v[d] + c;
    return !1
  }

  function c() {
    a(".et-page").each(function() {
      a(this).data("originalClassList", a(this).attr("class"))
    }), a(".et-wrapper").each(function() {
      a(this).data("current", 0), a(this).data("isAnimating", !1), a(this).children(".et-page").eq(i).addClass("et-page-current")
    }), a(".et-rotate").click(function() {
      d(a(this))
    })
  }

  function d(b, c) {
    e(a(b).closest(".et-wrapper"), a(b).attr("et-out"), a(b).attr("et-in"), c)
  }

  function e(b, c, d, e) {
    b = a(b), d = h(d), c = h(c);
    var g = b.data("current"),
      i = b.children(".et-page"),
      j = i.length,
      k = !1,
      l = !1;
    if (b.data("isAnimating")) return !1;
    b.data("isAnimating", !0);
    var m = i.eq(g);
    j - 1 > g ? g++ : g = 0, b.data("current", g);
    var n = i.eq(g).addClass("et-page-current");
    m.addClass(c).on(animEndEventName, function() {
      m.off(animEndEventName), k = !0, l && (jQuery.isFunction(e) && e(b, n, m), f(m, n, b))
    }), n.addClass(d).on(animEndEventName, function() {
      n.off(animEndEventName), l = !0, k && f(m, n, b)
    })
  }

  function f(a, b, c) {
    g(a, b), c.data("isAnimating", !1)
  }

  function g(a, b) {
    a.attr("class", a.data("originalClassList")), b.attr("class", b.data("originalClassList") + " et-page-current")
  }

  function h(a) {
    classes = a.split(" "), output = "";
    for (var b = 0; b < classes.length; b++) output += " pt-page-" + classes[b];
    return output
  }
  var i = 0,
    j = {
      WebkitAnimation: "webkitAnimationEnd",
      OAnimation: "oAnimationEnd",
      msAnimation: "MSAnimationEnd",
      animation: "animationend"
    };
  return animEndEventName = j[b()], {
    init: c,
    nextPage: e,
    animate: d
  }
}(jQuery);
jQuery(function() {
  PageTransitions.init()
}), window.Modernizr = function(a, b, c) {
  function d(a) {
    s.cssText = a
  }

  function e(a, b) {
    return typeof a === b
  }

  function f(a, b) {
    return !!~("" + a).indexOf(b)
  }

  function g(a, b) {
    for (var d in a) {
      var e = a[d];
      if (!f(e, "-") && s[e] !== c) return "pfx" == b ? e : !0
    }
    return !1
  }

  function h(a, b, d) {
    for (var f in a) {
      var g = b[a[f]];
      if (g !== c) return d === !1 ? a[f] : e(g, "function") ? g.bind(d || b) : g
    }
    return !1
  }

  function i(a, b, c) {
    var d = a.charAt(0).toUpperCase() + a.slice(1),
      f = (a + " " + v.join(d + " ") + d).split(" ");
    return e(b, "string") || e(b, "undefined") ? g(f, b) : (f = (a + " " + w.join(d + " ") + d).split(" "), h(f, b, c))
  }
  var j, k, l, m = "2.6.2",
    n = {}, o = !0,
    p = b.documentElement,
    q = "modernizr",
    r = b.createElement(q),
    s = r.style,
    t = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
    u = "Webkit Moz O ms",
    v = u.split(" "),
    w = u.toLowerCase().split(" "),
    x = {}, y = [],
    z = y.slice,
    A = function(a, c, d, e) {
      var f, g, h, i, j = b.createElement("div"),
        k = b.body,
        l = k || b.createElement("body");
      if (parseInt(d, 10))
        for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : q + (d + 1), j.appendChild(h);
      return f = ["&#173;", '<style id="s', q, '">', a, "</style>"].join(""), j.id = q, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = p.style.overflow, p.style.overflow = "hidden", p.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), p.style.overflow = i), !! g
    }, B = {}.hasOwnProperty;
  l = e(B, "undefined") || e(B.call, "undefined") ? function(a, b) {
    return b in a && e(a.constructor.prototype[b], "undefined")
  } : function(a, b) {
    return B.call(a, b)
  }, Function.prototype.bind || (Function.prototype.bind = function(a) {
    var b = this;
    if ("function" != typeof b) throw new TypeError;
    var c = z.call(arguments, 1),
      d = function() {
        if (this instanceof d) {
          var e = function() {};
          e.prototype = b.prototype;
          var f = new e,
            g = b.apply(f, c.concat(z.call(arguments)));
          return Object(g) === g ? g : f
        }
        return b.apply(a, c.concat(z.call(arguments)))
      };
    return d
  }), x.touch = function() {
    var c;
    return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : A(["@media (", t.join("touch-enabled),("), q, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
      c = 9 === a.offsetTop
    }), c
  }, x.cssanimations = function() {
    return i("animationName")
  }, x.csstransitions = function() {
    return i("transition")
  };
  for (var C in x) l(x, C) && (k = C.toLowerCase(), n[k] = x[C](), y.push((n[k] ? "" : "no-") + k));
  return n.addTest = function(a, b) {
    if ("object" == typeof a)
      for (var d in a) l(a, d) && n.addTest(d, a[d]);
    else {
      if (a = a.toLowerCase(), n[a] !== c) return n;
      b = "function" == typeof b ? b() : b, "undefined" != typeof o && o && (p.className += " " + (b ? "" : "no-") + a), n[a] = b
    }
    return n
  }, d(""), r = j = null,
  function(a, b) {
    function c(a, b) {
      var c = a.createElement("p"),
        d = a.getElementsByTagName("head")[0] || a.documentElement;
      return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
    }

    function d() {
      var a = r.elements;
      return "string" == typeof a ? a.split(" ") : a
    }

    function e(a) {
      var b = q[a[o]];
      return b || (b = {}, p++, a[o] = p, q[p] = b), b
    }

    function f(a, c, d) {
      if (c || (c = b), k) return c.createElement(a);
      d || (d = e(c));
      var f;
      return f = d.cache[a] ? d.cache[a].cloneNode() : n.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), f.canHaveChildren && !m.test(a) ? d.frag.appendChild(f) : f
    }

    function g(a, c) {
      if (a || (a = b), k) return a.createDocumentFragment();
      c = c || e(a);
      for (var f = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++) f.createElement(h[g]);
      return f
    }

    function h(a, b) {
      b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
        return r.shivMethods ? f(c, a, b) : b.createElem(c)
      }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/\w+/g, function(a) {
        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
      }) + ");return n}")(r, b.frag)
    }

    function i(a) {
      a || (a = b);
      var d = e(a);
      return r.shivCSS && !j && !d.hasCSS && (d.hasCSS = !! c(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), k || h(a, d), a
    }
    var j, k, l = a.html5 || {}, m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
      n = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
      o = "_html5shiv",
      p = 0,
      q = {};
    ! function() {
      try {
        var a = b.createElement("a");
        a.innerHTML = "<xyz></xyz>", j = "hidden" in a, k = 1 == a.childNodes.length || function() {
          b.createElement("a");
          var a = b.createDocumentFragment();
          return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
        }()
      } catch (c) {
        j = !0, k = !0
      }
    }();
    var r = {
      elements: l.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
      shivCSS: l.shivCSS !== !1,
      supportsUnknownElements: k,
      shivMethods: l.shivMethods !== !1,
      type: "default",
      shivDocument: i,
      createElement: f,
      createDocumentFragment: g
    };
    a.html5 = r, i(b)
  }(this, b), n._version = m, n._prefixes = t, n._domPrefixes = w, n._cssomPrefixes = v, n.testProp = function(a) {
    return g([a])
  }, n.testAllProps = i, n.testStyles = A, n.prefixed = function(a, b, c) {
    return b ? i(a, b, c) : i(a, "pfx")
  }, p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (o ? " js " + y.join(" ") : ""), n
}(this, this.document),
function(a, b, c) {
  function d(a) {
    return "[object Function]" == q.call(a)
  }

  function e(a) {
    return "string" == typeof a
  }

  function f() {}

  function g(a) {
    return !a || "loaded" == a || "complete" == a || "uninitialized" == a
  }

  function h() {
    var a = r.shift();
    s = 1, a ? a.t ? o(function() {
      ("c" == a.t ? m.injectCss : m.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
    }, 0) : (a(), h()) : s = 0
  }

  function i(a, c, d, e, f, i, j) {
    function k(b) {
      if (!n && g(l.readyState) && (t.r = n = 1, !s && h(), l.onload = l.onreadystatechange = null, b)) {
        "img" != a && o(function() {
          v.removeChild(l)
        }, 50);
        for (var d in A[c]) A[c].hasOwnProperty(d) && A[c][d].onload()
      }
    }
    var j = j || m.errorTimeout,
      l = b.createElement(a),
      n = 0,
      q = 0,
      t = {
        t: d,
        s: c,
        e: f,
        a: i,
        x: j
      };
    1 === A[c] && (q = 1, A[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
      k.call(this, q)
    }, r.splice(e, 0, t), "img" != a && (q || 2 === A[c] ? (v.insertBefore(l, u ? null : p), o(k, j)) : A[c].push(l))
  }

  function j(a, b, c, d, f) {
    return s = 0, b = b || "j", e(a) ? i("c" == b ? x : w, a, b, this.i++, c, d, f) : (r.splice(this.i++, 0, a), 1 == r.length && h()), this
  }

  function k() {
    var a = m;
    return a.loader = {
      load: j,
      i: 0
    }, a
  }
  var l, m, n = b.documentElement,
    o = a.setTimeout,
    p = b.getElementsByTagName("script")[0],
    q = {}.toString,
    r = [],
    s = 0,
    t = "MozAppearance" in n.style,
    u = t && !! b.createRange().compareNode,
    v = u ? n : p.parentNode,
    n = a.opera && "[object Opera]" == q.call(a.opera),
    n = !! b.attachEvent && !n,
    w = t ? "object" : n ? "script" : "img",
    x = n ? "script" : w,
    y = Array.isArray || function(a) {
      return "[object Array]" == q.call(a)
    }, z = [],
    A = {}, B = {
      timeout: function(a, b) {
        return b.length && (a.timeout = b[0]), a
      }
    };
  m = function(a) {
    function b(a) {
      var b, c, d, a = a.split("!"),
        e = z.length,
        f = a.pop(),
        g = a.length,
        f = {
          url: f,
          origUrl: f,
          prefixes: a
        };
      for (c = 0; g > c; c++) d = a[c].split("="), (b = B[d.shift()]) && (f = b(f, d));
      for (c = 0; e > c; c++) f = z[c](f);
      return f
    }

    function g(a, e, f, g, h) {
      var i = b(a),
        j = i.autoCallback;
      i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (A[i.url] ? i.noexec = !0 : A[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
        k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), A[i.url] = 2
      })))
    }

    function h(a, b) {
      function c(a, c) {
        if (a) {
          if (e(a)) c || (l = function() {
            var a = [].slice.call(arguments);
            m.apply(this, a), n()
          }), g(a, l, b, 0, j);
          else if (Object(a) === a)
            for (i in h = function() {
              var b, c = 0;
              for (b in a) a.hasOwnProperty(b) && c++;
              return c
            }(), a) a.hasOwnProperty(i) && (!c && !--h && (d(l) ? l = function() {
              var a = [].slice.call(arguments);
              m.apply(this, a), n()
            } : l[i] = function(a) {
              return function() {
                var b = [].slice.call(arguments);
                a && a.apply(this, b), n()
              }
            }(m[i])), g(a[i], l, b, i, j))
        } else !c && n()
      }
      var h, i, j = !! a.test,
        k = a.load || a.both,
        l = a.callback || f,
        m = l,
        n = a.complete || f;
      c(j ? a.yep : a.nope, !! k), k && c(k)
    }
    var i, j, l = this.yepnope.loader;
    if (e(a)) g(a, 0, l, 0);
    else if (y(a))
      for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : y(j) ? m(j) : Object(j) === j && h(j, l);
    else Object(a) === a && h(a, l)
  }, m.addPrefix = function(a, b) {
    B[a] = b
  }, m.addFilter = function(a) {
    z.push(a)
  }, m.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", l = function() {
    b.removeEventListener("DOMContentLoaded", l, 0), b.readyState = "complete"
  }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
    var k, l, n = b.createElement("script"),
      e = e || m.errorTimeout;
    n.src = a;
    for (l in d) n.setAttribute(l, d[l]);
    c = j ? h : c || f, n.onreadystatechange = n.onload = function() {
      !k && g(n.readyState) && (k = 1, c(), n.onload = n.onreadystatechange = null)
    }, o(function() {
      k || (k = 1, c(1))
    }, e), i ? n.onload() : p.parentNode.insertBefore(n, p)
  }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
    var j, e = b.createElement("link"),
      c = i ? h : c || f;
    e.href = a, e.rel = "stylesheet", e.type = "text/css";
    for (j in d) e.setAttribute(j, d[j]);
    g || (p.parentNode.insertBefore(e, p), o(c, 0))
  }
}(this, document), Modernizr.load = function() {
  yepnope.apply(window, [].slice.call(arguments, 0))
};