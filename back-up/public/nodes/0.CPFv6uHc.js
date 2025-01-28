var Wt = Object.defineProperty;
var Bt = (n, e, t) => e in n ? Wt(n, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : n[e] = t;
var ne = (n, e, t) => Bt(n, typeof e != "symbol" ? e + "" : e, t);
import {
    a as O,
    n as A,
    c as C,
    j as _t,
    u as vt,
    k as wt,
    l as bt,
    H as yt,
    o as be,
    b as H,
    v as Le,
    d as Te,
    f as jt,
    O as De,
    i as Ve,
    x as Vt,
    r as kt
} from "../chunks/index.BH183J0c.js";
import {
    S as W,
    i as B,
    q as te,
    s as M,
    G as St,
    d as v,
    j as R,
    k as y,
    f as x,
    C as ce,
    l as L,
    z as ue,
    t as T,
    v as ve,
    e as k,
    c as S,
    b as w,
    E as me,
    a as E,
    F as pe,
    A as le,
    o as he,
    p as fe,
    x as ae,
    B as Ue,
    u as _e,
    I as Ee,
    g as Y,
    h as q,
    m as X,
    J as Tt,
    K as Et,
    n as K,
    y as Ut,
    H as $t,
    w as Ft,
    L as $e,
    M as Fe
} from "../chunks/index.B5pbiKnB.js";
import {
    b as Yt,
    i as qt,
    a as Xt
} from "../chunks/entry.B4BmtFq6.js";
import {
    g as Kt,
    n as Lt,
    m as we,
    N as Ye,
    a as xt,
    b as Se,
    s as zt,
    l as He
} from "../chunks/breakpoints.BCNGKaRn.js";
import {
    p as de,
    L as Gt
} from "../chunks/constants.CasMNmVQ.js";
import {
    e as ie,
    g as D,
    r as Pe,
    v as Ie,
    a as Oe,
    m as Re,
    S as qe,
    b as Qt,
    i as Xe,
    c as ge
} from "../chunks/gsap.BWqxc2AZ.js";
import {
    p as ye,
    f as xe
} from "../chunks/app.Cgy8eObc.js";
import {
    c as Ct
} from "../chunks/colors.opdJjroO.js";
import {
    s as Jt,
    g as ze
} from "../chunks/index.CF638lXu.js";
import {
    g as Mt,
    a as Zt,
    b as Rt,
    s as Nt,
    n as ei,
    l as je,
    c as We,
    i as Be
} from "../chunks/i18n.uwWGOJCB.js";
import {
    g as ti
} from "../chunks/spread.CgU5AtxT.js";

function ii(n, e) {
    return n.protocol !== e.protocol ? e.href : e.password || e.username ? "//" + [e.username, e.password].filter(Boolean).join(":") + "@" + e.host + e.pathname + e.search + e.hash : n.host !== e.host ? "//" + e.host + e.pathname + e.search + e.hash : e.pathname + e.search + e.hash
}

function ni(n, e, t) {
    const i = new URL(t ?? "/", e).pathname;
    return n.origin !== e.origin || !n.pathname.startsWith(i)
}

function si(n, e, t, i, s) {
    const {
        path: r,
        lang: o,
        dataSuffix: l,
        trailingSlash: u
    } = Mt(n, {
        base: s.base,
        availableLanguageTags: s.availableLanguageTags,
        defaultLanguageTag: s.defaultLanguageTag
    }), a = Zt(r, o, t, i), h = Rt(a, e, t, i);
    return Nt({
        path: h,
        base: s.base,
        dataSuffix: l,
        includeLanguage: !0,
        lang: e,
        defaultLanguageTag: s.defaultLanguageTag,
        prefixDefaultLanguage: s.prefixDefaultLanguage,
        trailingSlash: u
    })
}
const {
    document: Ne
} = Kt;

function Ke(n, e, t) {
    const i = n.slice();
    i[2] = e[t];
    const s = si(i[1].url.pathname, i[2], i[0].config.translations, i[0].config.matchers, {
        base: i[4],
        availableLanguageTags: i[0].config.runtime.availableLanguageTags,
        defaultLanguageTag: i[0].config.defaultLanguageTag,
        prefixDefaultLanguage: i[0].config.prefixDefaultLanguage
    });
    i[11] = s;
    const r = i[1].url.host === "sveltekit-prerender" ? i[11] : new URL(i[11], new URL(i[1].url)).href;
    return i[12] = r, i
}

function Ge(n) {
    let e, t = n[0].config.runtime.availableLanguageTags.length >= 1 && Qe(n);
    return {
        c() {
            t && t.c(), e = te()
        },
        l(i) {
            t && t.l(i), e = te()
        },
        m(i, s) {
            t && t.m(i, s), x(i, e, s)
        },
        p(i, s) {
            i[0].config.runtime.availableLanguageTags.length >= 1 ? t ? t.p(i, s) : (t = Qe(i), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null)
        },
        d(i) {
            i && v(e), t && t.d(i)
        }
    }
}

function Qe(n) {
    let e, t = ie(n[0].config.runtime.availableLanguageTags),
        i = [];
    for (let s = 0; s < t.length; s += 1) i[s] = Je(Ke(n, t, s));
    return {
        c() {
            for (let s = 0; s < i.length; s += 1) i[s].c();
            e = te()
        },
        l(s) {
            for (let r = 0; r < i.length; r += 1) i[r].l(s);
            e = te()
        },
        m(s, r) {
            for (let o = 0; o < i.length; o += 1) i[o] && i[o].m(s, r);
            x(s, e, r)
        },
        p(s, r) {
            if (r & 19) {
                t = ie(s[0].config.runtime.availableLanguageTags);
                let o;
                for (o = 0; o < t.length; o += 1) {
                    const l = Ke(s, t, o);
                    i[o] ? i[o].p(l, r) : (i[o] = Je(l), i[o].c(), i[o].m(e.parentNode, e))
                }
                for (; o < i.length; o += 1) i[o].d(1);
                i.length = t.length
            }
        },
        d(s) {
            s && v(e), ve(i, s)
        }
    }
}

function Je(n) {
    let e, t, i;
    return {
        c() {
            e = k("link"), this.h()
        },
        l(s) {
            e = S(s, "LINK", {
                rel: !0,
                hreflang: !0,
                href: !0
            }), this.h()
        },
        h() {
            w(e, "rel", "alternate"), w(e, "hreflang", t = n[2]), w(e, "href", i = n[12])
        },
        m(s, r) {
            x(s, e, r)
        },
        p(s, r) {
            r & 1 && t !== (t = s[2]) && w(e, "hreflang", t), r & 3 && i !== (i = s[12]) && w(e, "href", i)
        },
        d(s) {
            s && v(e)
        }
    }
}

function Ze(n) {
    let e;
    const t = n[9].default,
        i = _t(t, n, n[8], null);
    return {
        c() {
            i && i.c()
        },
        l(s) {
            i && i.l(s)
        },
        m(s, r) {
            i && i.m(s, r), e = !0
        },
        p(s, r) {
            i && i.p && (!e || r & 256) && vt(i, t, s, s[8], e ? bt(t, s[8], r, null) : wt(s[8]), null)
        },
        i(s) {
            e || (T(i, s), e = !0)
        },
        o(s) {
            L(i, s), e = !1
        },
        d(s) {
            i && i.d(s)
        }
    }
}

function ri(n) {
    let e = n[0].config.seo.noAlternateLinks !== !0 && !n[0].config.exclude(n[1].url.pathname),
        t, i, s = n[3],
        r, o, l = e && Ge(n),
        u = Ze(n);
    return {
        c() {
            l && l.c(), t = te(), i = M(), u.c(), r = te()
        },
        l(a) {
            const h = St("svelte-djwtu5", Ne.head);
            l && l.l(h), t = te(), h.forEach(v), i = R(a), u.l(a), r = te()
        },
        m(a, h) {
            l && l.m(Ne.head, null), y(Ne.head, t), x(a, i, h), u.m(a, h), x(a, r, h), o = !0
        },
        p(a, [h]) {
            h & 3 && (e = a[0].config.seo.noAlternateLinks !== !0 && !a[0].config.exclude(a[1].url.pathname)), e ? l ? l.p(a, h) : (l = Ge(a), l.c(), l.m(t.parentNode, t)) : l && (l.d(1), l = null), h & 8 && O(s, s = a[3]) ? (ce(), L(u, 1, 1, A), ue(), u = Ze(a), u.c(), T(u, 1), u.m(r.parentNode, r)) : u.p(a, h)
        },
        i(a) {
            o || (T(u), o = !0)
        },
        o(a) {
            L(u), o = !1
        },
        d(a) {
            a && (v(i), v(r)), l && l.d(a), v(t), u.d(a)
        }
    }
}

function oi(n, e, t) {
    let i, s, r, o;
    C(n, de, p => t(1, o = p));
    let {
        $$slots: l = {},
        $$scope: u
    } = e;
    const a = ei(Yt, new URL(o.url)) || "/";
    let {
        languageTag: h = void 0
    } = e, {
        i18n: f
    } = e, c = 0;

    function g(p, d) {
        const _ = new URL(yt(de).url),
            m = new URL(p, new URL(_));
        if (ni(m, _, a) || f.config.exclude(m.pathname)) return p;
        const z = d ?? s,
            {
                path: b,
                trailingSlash: P
            } = Mt(m.pathname, {
                base: a,
                availableLanguageTags: f.config.runtime.availableLanguageTags,
                defaultLanguageTag: f.config.defaultLanguageTag
            }),
            j = Rt(b, z, f.config.translations, f.config.matchers),
            ee = Nt({
                base: a,
                lang: z,
                path: j,
                dataSuffix: void 0,
                includeLanguage: !0,
                trailingSlash: P,
                defaultLanguageTag: f.config.defaultLanguageTag,
                prefixDefaultLanguage: f.config.prefixDefaultLanguage
            }),
            se = new URL(m);
        return se.pathname = ee, ii(_, se)
    }
    return Jt({
        translateHref: g
    }), n.$$set = p => {
        "languageTag" in p && t(5, h = p.languageTag), "i18n" in p && t(0, f = p.i18n), "$$scope" in p && t(8, u = p.$$scope)
    }, n.$$.update = () => {
        n.$$.dirty & 3 && t(7, i = f.getLanguageFromUrl(o.url)), n.$$.dirty & 160 && t(2, s = h ?? i), n.$$.dirty & 5 && f.config.runtime.setLanguageTag(s), n.$$.dirty & 4 && (document.documentElement.lang = s), n.$$.dirty & 5 && (document.documentElement.dir = f.config.textDirection[s] ?? "ltr"), n.$$.dirty & 68 && s && t(6, c += 1), n.$$.dirty & 68 && s && c > 1 && qt(Gt), n.$$.dirty & 4 && t(3, r = s)
    }, [f, o, s, r, a, h, c, i, u, l]
}
class li extends W {
    constructor(e) {
        super(), B(this, e, oi, ri, O, {
            languageTag: 5,
            i18n: 0
        })
    }
}

function ai() {
    console.log(``, "font-family: monospace; background-color: black; color: white;")
}

function ci(n) {
    let e, t, i, s, r, o;
    return {
        c() {
            e = k("div"), t = k("a"), i = me("svg"), s = me("path"), r = me("g"), o = me("path"), this.h()
        },
        l(l) {
            e = S(l, "DIV", {
                id: !0,
                style: !0,
                class: !0
            });
            var u = E(e);
            t = S(u, "A", {
                href: !0,
                target: !0
            });
            var a = E(t);
            i = pe(a, "svg", {
                width: !0,
                height: !0
            });
            var h = E(i);
            s = pe(h, "path", {
                class: !0,
                fill: !0,
                d: !0
            }), E(s).forEach(v), r = pe(h, "g", {
                class: !0,
                fill: !0
            });
            var f = E(r);
            o = pe(f, "path", {
                d: !0
            }), E(o).forEach(v), f.forEach(v), h.forEach(v), a.forEach(v), u.forEach(v), this.h()
        },
        h() {
            w(s, "class", "js-color-bg"), w(s, "fill", "white"), w(s, "d", "M0 0h53.08v171.358H0z"), w(o, "d", "M20.047 153.665v-1.9h3.888v-4.093h-3.888v-1.9h10.231v1.9h-4.59v4.093h4.59v1.9zM29.898 142.236c-.331.565-.784.997-1.359 1.294s-1.222.446-1.944.446c-.721 0-1.369-.149-1.943-.446a3.316 3.316 0 0 1-1.36-1.294c-.331-.564-.497-1.232-.497-2.002s.166-1.438.497-2.002a3.316 3.316 0 0 1 1.36-1.294c.574-.297 1.223-.445 1.943-.445.723 0 1.369.148 1.944.445a3.307 3.307 0 0 1 1.359 1.294c.331.564.497 1.232.497 2.002s-.166 1.438-.497 2.002m-1.703-3.347c-.435-.33-.967-.496-1.601-.496-.633 0-1.166.166-1.601.496-.433.332-.649.78-.649 1.346 0 .564.217 1.013.649 1.345.435.331.968.497 1.601.497.634 0 1.166-.166 1.601-.497.435-.332.649-.78.649-1.345.001-.566-.214-1.014-.649-1.346M22.911 134.852v-1.813h1.186a3.335 3.335 0 0 1-.951-1.009 2.423 2.423 0 0 1-.352-1.271c0-.682.19-1.229.57-1.645.381-.413.932-.621 1.652-.621h5.262v1.812h-4.721c-.419 0-.727.096-.921.285-.195.19-.292.447-.292.769 0 .302.115.58.35.833.234.254.577.458 1.03.613.454.156.993.234 1.616.234h2.938v1.813h-7.367zM29.898 125.136a3.314 3.314 0 0 1-1.359 1.294c-.575.297-1.222.445-1.944.445-.721 0-1.369-.148-1.943-.445a3.322 3.322 0 0 1-1.36-1.294c-.331-.565-.497-1.232-.497-2.002 0-.771.166-1.438.497-2.003a3.313 3.313 0 0 1 1.36-1.293c.574-.297 1.223-.446 1.943-.446.723 0 1.369.149 1.944.446s1.028.728 1.359 1.293.497 1.232.497 2.003c.001.769-.166 1.436-.497 2.002m-1.703-3.347c-.435-.331-.967-.497-1.601-.497-.633 0-1.166.166-1.601.497-.433.331-.649.778-.649 1.345 0 .564.217 1.013.649 1.344.435.332.968.498 1.601.498.634 0 1.166-.166 1.601-.498.435-.331.649-.779.649-1.344.001-.567-.214-1.014-.649-1.345M22.911 117.75v-1.812h1.199c-.419-.265-.742-.586-.972-.966s-.345-.784-.345-1.213c0-.272.05-.569.146-.892l1.682.336a1.429 1.429 0 0 0-.205.76c0 .576.261 1.048.783 1.418.521.37 1.342.557 2.461.557h2.617v1.812h-7.366zM29.812 111.252c-.391.511-.857.851-1.403 1.016l-.776-1.446c.381-.138.68-.329.893-.577.215-.249.321-.544.321-.885a1.2 1.2 0 0 0-.168-.658c-.112-.175-.294-.263-.548-.263-.225 0-.406.105-.548.313-.142.21-.291.534-.446.973-.019.068-.058.17-.117.307-.224.565-.506 1.004-.848 1.315-.34.313-.779.467-1.314.467-.381 0-.727-.102-1.039-.306a2.185 2.185 0 0 1-.744-.84 2.554 2.554 0 0 1-.279-1.207c0-.497.105-.949.314-1.359.211-.408.506-.725.886-.949l.993 1.082c-.43.292-.644.686-.644 1.184a.84.84 0 0 0 .154.504.471.471 0 0 0 .401.212c.176 0 .338-.103.49-.307.15-.205.334-.604.547-1.199.205-.564.474-1.001.805-1.308.332-.308.756-.46 1.271-.46.721 0 1.299.229 1.732.687s.65 1.057.65 1.797c.001.759-.194 1.396-.583 1.907M35.481 17.006l-4.782 14.969h-3.266l-2.584-9.682-2.584 9.682h-3.268l-4.782-14.969h3.713l2.673 10.276 2.525-10.276h3.445l2.524 10.276 2.674-10.276zM37.978 27.163c1.426 0 2.496 1.068 2.496 2.495 0 1.425-1.07 2.495-2.496 2.495-1.425 0-2.494-1.07-2.494-2.495-.001-1.427 1.069-2.495 2.494-2.495"), w(r, "class", "js-color-text"), w(r, "fill", "black"), w(i, "width", "53.08"), w(i, "height", "171.358"), w(t, "href", n[1]("https://www.awwwards.com/sites/crftd", void 0)), w(t, "target", "_blank"), w(e, "id", "awwwards"), le(e, "position", "fixed"), le(e, "transform", "translateY(-50%)"), le(e, "top", "50%"), le(e, "right", "0"), w(e, "class", "fouc z-30")
        },
        m(l, u) {
            x(l, e, u), y(e, t), y(t, i), y(i, s), y(i, r), y(r, o), n[5](e)
        },
        p: A,
        i: A,
        o: A,
        d(l) {
            l && v(e), n[5](null)
        }
    }
}

function ui(n, e, t) {
    let i, s;
    C(n, ye, c => t(4, s = c));
    let r = !1,
        o;
    const l = () => {
        D.to(o, {
            autoAlpha: 1,
            delay: 1
        })
    };
    be(() => {
        t(2, r = !0)
    });
    const u = ze(),
        [a, h] = u;

    function f(c) {
        H[c ? "unshift" : "push"](() => {
            o = c, t(0, o)
        })
    }
    return n.$$.update = () => {
        n.$$.dirty & 20 && t(3, i = r && !s), n.$$.dirty & 8 && i && l()
    }, [o, a, r, i, s, f]
}
class hi extends W {
    constructor(e) {
        super(), B(this, e, ui, ci, O, {})
    }
}
const fi = () => "Terug",
    di = () => "Back",
    gi = (n = {}, e = {}) => ({
        en: di,
        nl: fi
    })[e.languageTag ?? je()](),
    mi = () => "Sluit",
    pi = () => "Close",
    _i = (n = {}, e = {}) => ({
        en: pi,
        nl: mi
    })[e.languageTag ?? je()]();

function vi(n) {
    let e, t, i, s, r, o, l, u, a = n[3] + 1 + "",
        h, f, c, g;
    return {
        c() {
            e = k("a"), t = k("span"), i = M(), s = k("p"), r = he(n[1]), o = M(), l = k("span"), u = he("0"), h = he(a), this.h()
        },
        l(p) {
            e = S(p, "A", {
                class: !0,
                href: !0
            });
            var d = E(e);
            t = S(d, "SPAN", {
                class: !0
            }), E(t).forEach(v), i = R(d), s = S(d, "P", {});
            var _ = E(s);
            r = fe(_, n[1]), _.forEach(v), o = R(d), l = S(d, "SPAN", {
                class: !0
            });
            var m = E(l);
            u = fe(m, "0"), h = fe(m, a), m.forEach(v), d.forEach(v), this.h()
        },
        h() {
            w(t, "class", "absolute inset-0 -z-10 origin-left scale-x-0 bg-white transition-transform duration-300 ease-in-out group-hover:scale-x-100"), w(l, "class", "ui-label-px-s"), w(e, "class", "module-menu-link ui-label-px-l group relative z-0 flex w-fit gap-x-fluid-3xs py-[0.04em] pl-[0.06em] pr-fluid-xs"), w(e, "href", f = n[5](n[2], void 0))
        },
        m(p, d) {
            x(p, e, d), y(e, t), n[6](t), y(e, i), y(e, s), y(s, r), y(e, o), y(e, l), y(l, u), y(l, h), n[8](e), c || (g = ae(e, "click", n[7]), c = !0)
        },
        p(p, [d]) {
            d & 2 && Ue(r, p[1]), d & 8 && a !== (a = p[3] + 1 + "") && Ue(h, a), d & 4 && f !== (f = p[5](p[2], void 0)) && w(e, "href", f)
        },
        i: A,
        o: A,
        d(p) {
            p && v(e), n[6](null), n[8](null), c = !1, g()
        }
    }
}

function wi(n, e, t) {
    let {
        el: i
    } = e, {
        label: s
    } = e, {
        href: r
    } = e, {
        i: o
    } = e, l;
    const u = ze(),
        [a, h] = u;

    function f(p) {
        H[p ? "unshift" : "push"](() => {
            l = p, t(4, l)
        })
    }
    const c = p => Lt(p, r);

    function g(p) {
        H[p ? "unshift" : "push"](() => {
            i = p, t(0, i)
        })
    }
    return n.$$set = p => {
        "el" in p && t(0, i = p.el), "label" in p && t(1, s = p.label), "href" in p && t(2, r = p.href), "i" in p && t(3, o = p.i)
    }, [i, s, r, o, l, a, f, c, g]
}
class bi extends W {
    constructor(e) {
        super(), B(this, e, wi, vi, O, {
            el: 0,
            label: 1,
            href: 2,
            i: 3
        })
    }
}

function et(n, e, t) {
    const i = n.slice();
    return i[5] = e[t], i[7] = t, i
}

function yi(n) {
    let e, t = "/";
    return {
        c() {
            e = k("span"), e.textContent = t
        },
        l(i) {
            e = S(i, "SPAN", {
                "data-svelte-h": !0
            }), Ee(e) !== "svelte-ocknwt" && (e.textContent = t)
        },
        m(i, s) {
            x(i, e, s)
        },
        d(i) {
            i && v(e)
        }
    }
}

function tt(n) {
    let e, t = Si[n[5]] + "",
        i, s, r, o, l, u, a = n[7] < We.length - 1 && yi();
    return {
        c() {
            e = k("a"), i = he(t), r = M(), a && a.c(), o = te(), this.h()
        },
        l(h) {
            e = S(h, "A", {
                href: !0,
                hreflang: !0,
                class: !0
            });
            var f = E(e);
            i = fe(f, t), f.forEach(v), r = R(h), a && a.l(h), o = te(), this.h()
        },
        h() {
            w(e, "href", s = n[1](Be.route(n[0].url.pathname), n[5])), w(e, "hreflang", n[5]), w(e, "class", "transition-opacity duration-200 ease-in-out hover:opacity-100"), _e(e, "opacity-30", je() !== n[5])
        },
        m(h, f) {
            x(h, e, f), y(e, i), x(h, r, f), a && a.m(h, f), x(h, o, f), l || (u = ae(e, "click", n[2]), l = !0)
        },
        p(h, f) {
            f & 1 && s !== (s = h[1](Be.route(h[0].url.pathname), h[5])) && w(e, "href", s)
        },
        d(h) {
            h && (v(e), v(r), v(o)), a && a.d(h), l = !1, u()
        }
    }
}

function ki(n) {
    let e, t = ie(We),
        i = [];
    for (let s = 0; s < t.length; s += 1) i[s] = tt(et(n, t, s));
    return {
        c() {
            e = k("div");
            for (let s = 0; s < i.length; s += 1) i[s].c();
            this.h()
        },
        l(s) {
            e = S(s, "DIV", {
                class: !0
            });
            var r = E(e);
            for (let o = 0; o < i.length; o += 1) i[o].l(r);
            r.forEach(v), this.h()
        },
        h() {
            w(e, "class", "ui-label-px-s absolute left-2 top-1.5 flex gap-x-fluid-3xs")
        },
        m(s, r) {
            x(s, e, r);
            for (let o = 0; o < i.length; o += 1) i[o] && i[o].m(e, null)
        },
        p(s, [r]) {
            if (r & 3) {
                t = ie(We);
                let o;
                for (o = 0; o < t.length; o += 1) {
                    const l = et(s, t, o);
                    i[o] ? i[o].p(l, r) : (i[o] = tt(l), i[o].c(), i[o].m(e, null))
                }
                for (; o < i.length; o += 1) i[o].d(1);
                i.length = t.length
            }
        },
        i: A,
        o: A,
        d(s) {
            s && v(e), ve(i, s)
        }
    }
}
const Si = {
    nl: "Nederlands",
    en: "English"
};

function Ti(n, e, t) {
    let i;
    C(n, de, u => t(0, i = u));
    const s = ze(),
        [r, o] = s;
    return [i, r, () => {
        we.set(!1)
    }]
}
class Ei extends W {
    constructor(e) {
        super(), B(this, e, Ti, ki, O, {})
    }
}

function it(n, e, t) {
    const i = n.slice();
    return i[12] = e[t], i[13] = e, i[14] = t, i
}

function nt(n) {
    let e, t, i;
    const s = [n[12], {
        i: n[14]
    }];

    function r(l) {
        n[8](l, n[14])
    }
    let o = {};
    for (let l = 0; l < s.length; l += 1) o = Te(o, s[l]);
    return n[1][n[14]] !== void 0 && (o.el = n[1][n[14]]), e = new bi({
        props: o
    }), H.push(() => Ut(e, "el", r)), {
        c() {
            Y(e.$$.fragment)
        },
        l(l) {
            q(e.$$.fragment, l)
        },
        m(l, u) {
            X(e, l, u), i = !0
        },
        p(l, u) {
            n = l;
            const a = {};
            !t && u & 2 && (t = !0, a.el = n[1][n[14]], jt(() => t = !1)), e.$set(a)
        },
        i(l) {
            i || (T(e.$$.fragment, l), i = !0)
        },
        o(l) {
            L(e.$$.fragment, l), i = !1
        },
        d(l) {
            K(e, l)
        }
    }
}

function Li(n) {
    let e, t, i, s, r, o, l, u, a, h, f;
    t = new Ei({});
    let c = ie(Ye()),
        g = [];
    for (let d = 0; d < c.length; d += 1) g[d] = nt(it(n, c, d));
    const p = d => L(g[d], 1, 1, () => {
        g[d] = null
    });
    return {
        c() {
            e = k("div"), Y(t.$$.fragment), i = M(), s = k("nav"), r = k("span"), o = M();
            for (let d = 0; d < g.length; d += 1) g[d].c();
            l = M(), u = k("span"), this.h()
        },
        l(d) {
            e = S(d, "DIV", {
                class: !0
            });
            var _ = E(e);
            q(t.$$.fragment, _), i = R(_), s = S(_, "NAV", {
                class: !0
            });
            var m = E(s);
            r = S(m, "SPAN", {
                class: !0
            }), E(r).forEach(v), o = R(m);
            for (let z = 0; z < g.length; z += 1) g[z].l(m);
            l = R(m), u = S(m, "SPAN", {
                class: !0
            }), E(u).forEach(v), m.forEach(v), _.forEach(v), this.h()
        },
        h() {
            w(r, "class", "pointer-events-none absolute top-0 bg-white"), w(u, "class", "pointer-events-none absolute top-0 bg-white mix-blend-difference"), w(s, "class", "flex flex-col gap-y-fluid-3xs px-fluid-m"), w(e, "class", "module-hamburger-menu absolute right-0 top-0 bg-green py-fluid-xl max-l:left-0")
        },
        m(d, _) {
            x(d, e, _), X(t, e, null), y(e, i), y(e, s), y(s, r), n[7](r), y(s, o);
            for (let m = 0; m < g.length; m += 1) g[m] && g[m].m(s, null);
            y(s, l), y(s, u), n[9](u), f = !0
        },
        p(d, [_]) {
            if (_ & 2) {
                c = ie(Ye());
                let m;
                for (m = 0; m < c.length; m += 1) {
                    const z = it(d, c, m);
                    g[m] ? (g[m].p(z, _), T(g[m], 1)) : (g[m] = nt(z), g[m].c(), T(g[m], 1), g[m].m(s, l))
                }
                for (ce(), m = c.length; m < g.length; m += 1) p(m);
                ue()
            }
        },
        i(d) {
            if (!f) {
                T(t.$$.fragment, d);
                for (let _ = 0; _ < c.length; _ += 1) T(g[_]);
                d && Le(() => {
                    f && (h && h.end(1), a = Tt(e, xi, {}), a.start())
                }), f = !0
            }
        },
        o(d) {
            L(t.$$.fragment, d), g = g.filter(Boolean);
            for (let _ = 0; _ < g.length; _ += 1) L(g[_]);
            a && a.invalidate(), d && (h = Et(e, zi, {})), f = !1
        },
        d(d) {
            d && v(e), K(t), n[7](null), ve(g, d), n[9](null), d && h && h.end()
        }
    }
}

function xi(n) {
    let e = D.timeline().fromTo(n, {
        clipPath: "inset(0% 0% 100% 0%)"
    }, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: .48,
        ease: "power2.inOut"
    });
    return {
        duration: e.totalDuration() * 1e3,
        tick: t => {
            e.progress(t)
        }
    }
}

function zi(n) {
    let e = D.timeline().fromTo(n, {
        clipPath: "inset(0% 0% 0% 0%)"
    }, {
        clipPath: "inset(0% 0% 0% 100%)",
        duration: .48,
        ease: "power2.inOut"
    });
    return {
        duration: e.totalDuration() * 1e3,
        tick: t => {
            e.progress(1 - t)
        }
    }
}

function Ci(n, e, t) {
    let i, s, r;
    C(n, xt, d => t(4, i = d)), C(n, Pe, d => t(5, s = d)), C(n, xe, d => t(6, r = d));
    let o = [],
        l = [],
        u = !1,
        a = !1;
    const h = () => {
        if (!l[i]) return;
        const {
            clientWidth: d,
            clientHeight: _,
            offsetTop: m
        } = l[i];
        D.set(o, {
            width: d,
            height: _,
            y: m,
            onComplete: () => {
                t(3, a = !0)
            }
        })
    },
        f = d => {
            const {
                clientWidth: _,
                clientHeight: m,
                offsetTop: z
            } = l[d];
            D.to(o, {
                width: _,
                height: m,
                y: z,
                ease: "power2.inOut",
                duration: .32
            })
        };
    be(() => {
        t(2, u = !0)
    });

    function c(d) {
        H[d ? "unshift" : "push"](() => {
            o[1] = d, t(0, o)
        })
    }

    function g(d, _) {
        n.$$.not_equal(l[_], d) && (l[_] = d, t(1, l))
    }

    function p(d) {
        H[d ? "unshift" : "push"](() => {
            o[0] = d, t(0, o)
        })
    }
    return n.$$.update = () => {
        n.$$.dirty & 68 && u && r && h(), n.$$.dirty & 24 && a && f(i), n.$$.dirty & 56 && !s && a && f(i)
    }, [o, l, u, a, i, s, r, c, g, p]
}
class Mi extends W {
    constructor(e) {
        super(), B(this, e, Ci, Li, O, {})
    }
}

function Ri(n) {
    let e, t, i, s;
    return {
        c() {
            e = k("div"), t = k("div"), i = M(), s = k("div"), this.h()
        },
        l(r) {
            e = S(r, "DIV", {
                class: !0
            });
            var o = E(e);
            t = S(o, "DIV", {
                class: !0,
                style: !0
            }), E(t).forEach(v), i = R(o), s = S(o, "DIV", {
                class: !0,
                style: !0
            }), E(s).forEach(v), o.forEach(v), this.h()
        },
        h() {
            w(t, "class", "absolute h-0.5 w-6 bg-black transition-transform duration-300 ease-in-out"), le(t, "transform", "translateY(-" + n[0] + "px)"), w(s, "class", "absolute h-0.5 w-4 bg-black transition-transform duration-300 ease-in-out"), le(s, "transform", "translateY(" + n[0] + "px)"), w(e, "class", "module-hamburger-icon flex h-[0.5625rem] w-6 items-center")
        },
        m(r, o) {
            x(r, e, o), y(e, t), y(e, i), y(e, s)
        },
        p(r, [o]) {
            o & 1 && le(t, "transform", "translateY(-" + r[0] + "px)"), o & 1 && le(s, "transform", "translateY(" + r[0] + "px)")
        },
        i: A,
        o: A,
        d(r) {
            r && v(e)
        }
    }
}

function Ni(n, e, t) {
    let i;
    C(n, we, r => t(1, i = r));
    let s = 0;
    return n.$$.update = () => {
        n.$$.dirty & 2 && (i ? t(0, s = 0) : t(0, s = 2))
    }, [s, i]
}
class Ai extends W {
    constructor(e) {
        super(), B(this, e, Ni, Ri, O, {})
    }
}

function Di(n) {
    let e, t, i = "Menu",
        s, r, o, l, u;
    return r = new Ai({}), {
        c() {
            e = k("button"), t = k("p"), t.textContent = i, s = M(), Y(r.$$.fragment), this.h()
        },
        l(a) {
            e = S(a, "BUTTON", {
                class: !0
            });
            var h = E(e);
            t = S(h, "P", {
                class: !0,
                "data-svelte-h": !0
            }), Ee(t) !== "svelte-1nch10z" && (t.textContent = i), s = R(h), q(r.$$.fragment, h), h.forEach(v), this.h()
        },
        h() {
            w(t, "class", "max-l:hidden"), w(e, "class", "ui-label-px-s relative flex items-center gap-x-fluid-2xs bg-green px-2 py-1.5")
        },
        m(a, h) {
            x(a, e, h), y(e, t), n[3](t), y(e, s), X(r, e, null), o = !0, l || (u = ae(e, "click", n[4]), l = !0)
        },
        p: A,
        i(a) {
            o || (T(r.$$.fragment, a), o = !0)
        },
        o(a) {
            L(r.$$.fragment, a), o = !1
        },
        d(a) {
            a && v(e), n[3](null), K(r), l = !1, u()
        }
    }
}

function Hi(n, e, t) {
    let i;
    C(n, we, a => t(0, i = a));
    let s = "Menu",
        r;
    const o = a => {
        r && D.timeline().to(r, {
            text: "‎"
        }).to(r, {
            text: a
        })
    };

    function l(a) {
        H[a ? "unshift" : "push"](() => {
            r = a, t(1, r)
        })
    }
    const u = () => De(we, i = !i, i);
    return n.$$.update = () => {
        n.$$.dirty & 1 && t(2, s = i ? _i() : "Menu"), n.$$.dirty & 4 && o(s)
    }, [i, r, s, l, u]
}
class Pi extends W {
    constructor(e) {
        super(), B(this, e, Hi, Di, O, {})
    }
}

function Ii(n) {
    let e, t, i = '<path d="M2 4.577h26V6.5H2z"/><path fill-rule="evenodd" d="M5.644.125 0 5.552l5.644 5.428 1.414-1.36-4.23-4.068 4.23-4.067z" clip-rule="evenodd"/>',
        s = [{
            xmlns: "http://www.w3.org/2000/svg"
        }, {
            viewBox: "0 0 28 11"
        }, n[0]],
        r = {};
    for (let o = 0; o < s.length; o += 1) r = Te(r, s[o]);
    return {
        c() {
            e = me("svg"), t = new $t(!0), this.h()
        },
        l(o) {
            e = pe(o, "svg", {
                xmlns: !0,
                viewBox: !0
            });
            var l = E(e);
            t = Ft(l, !0), l.forEach(v), this.h()
        },
        h() {
            t.a = null, $e(e, r)
        },
        m(o, l) {
            x(o, e, l), t.m(i, e)
        },
        p(o, [l]) {
            $e(e, r = ti(s, [{
                xmlns: "http://www.w3.org/2000/svg"
            }, {
                viewBox: "0 0 28 11"
            }, l & 1 && o[0]]))
        },
        i: A,
        o: A,
        d(o) {
            o && v(e)
        }
    }
}

function Oi(n, e, t) {
    return n.$$set = i => {
        t(0, e = Te(Te({}, e), Ve(i)))
    }, e = Ve(e), [e]
}
class Wi extends W {
    constructor(e) {
        super(), B(this, e, Oi, Ii, O, {})
    }
}

function st(n, {
    delay: e = 0,
    duration: t = 400,
    easing: i = Vt
} = {}) {
    const s = +getComputedStyle(n).opacity;
    return {
        delay: e,
        duration: t,
        easing: i,
        css: r => `opacity: ${r * s}`
    }
}

function Bi(n) {
    let e, t, i, s, r = gi() + "",
        o, l, u, a, h;
    return t = new Wi({
        props: {
            class: "h-[0.5625rem]"
        }
    }), {
        c() {
            e = k("a"), Y(t.$$.fragment), i = M(), s = k("p"), o = he(r), this.h()
        },
        l(f) {
            e = S(f, "A", {
                class: !0,
                href: !0
            });
            var c = E(e);
            q(t.$$.fragment, c), i = R(c), s = S(c, "P", {
                class: !0
            });
            var g = E(s);
            o = fe(g, r), g.forEach(v), c.forEach(v), this.h()
        },
        h() {
            w(s, "class", "max-l:hidden"), w(e, "class", "ui-label-px-s pointer-events-auto flex items-center gap-x-fluid-2xs bg-white px-2 py-1.5"), w(e, "href", n[0]("/", void 0))
        },
        m(f, c) {
            x(f, e, c), X(t, e, null), y(e, i), y(e, s), y(s, o), u = !0, a || (h = ae(e, "click", n[1]), a = !0)
        },
        p: A,
        i(f) {
            u || (T(t.$$.fragment, f), f && Le(() => {
                u && (l || (l = Fe(e, st, {
                    duration: 240
                }, !0)), l.run(1))
            }), u = !0)
        },
        o(f) {
            L(t.$$.fragment, f), f && (l || (l = Fe(e, st, {
                duration: 240
            }, !1)), l.run(0)), u = !1
        },
        d(f) {
            f && v(e), K(t), f && l && l.end(), a = !1, h()
        }
    }
}

function ji(n) {
    const e = ze(),
        [t, i] = e;
    return [t, r => Lt(r, "/#work")]
}
class Vi extends W {
    constructor(e) {
        super(), B(this, e, ji, Bi, O, {})
    }
}

function rt(n) {
    let e, t;
    return e = new Vi({}), {
        c() {
            Y(e.$$.fragment)
        },
        l(i) {
            q(e.$$.fragment, i)
        },
        m(i, s) {
            X(e, i, s), t = !0
        },
        i(i) {
            t || (T(e.$$.fragment, i), t = !0)
        },
        o(i) {
            L(e.$$.fragment, i), t = !1
        },
        d(i) {
            K(e, i)
        }
    }
}

function ot(n) {
    let e, t;
    return e = new Mi({}), {
        c() {
            Y(e.$$.fragment)
        },
        l(i) {
            q(e.$$.fragment, i)
        },
        m(i, s) {
            X(e, i, s), t = !0
        },
        i(i) {
            t || (T(e.$$.fragment, i), t = !0)
        },
        o(i) {
            L(e.$$.fragment, i), t = !1
        },
        d(i) {
            K(e, i)
        }
    }
}

function Ui(n) {
    let e, t, i, s, r, o, l, u = !n[0] && rt(),
        a = n[2] && ot();
    return o = new Pi({}), {
        c() {
            e = k("header"), t = k("div"), u && u.c(), i = M(), s = k("div"), a && a.c(), r = M(), Y(o.$$.fragment), this.h()
        },
        l(h) {
            e = S(h, "HEADER", {
                class: !0
            });
            var f = E(e);
            t = S(f, "DIV", {
                class: !0
            });
            var c = E(t);
            u && u.l(c), i = R(c), s = S(c, "DIV", {
                class: !0
            });
            var g = E(s);
            a && a.l(g), r = R(g), q(o.$$.fragment, g), g.forEach(v), c.forEach(v), f.forEach(v), this.h()
        },
        h() {
            w(s, "class", "pointer-events-auto"), w(t, "class", "container relative flex"), _e(t, "justify-end", n[0]), _e(t, "justify-between", !n[0]), w(e, "class", "module-navigation fouc pointer-events-none fixed top-fluid-l-xl z-40 w-full")
        },
        m(h, f) {
            x(h, e, f), y(e, t), u && u.m(t, null), y(t, i), y(t, s), a && a.m(s, null), y(s, r), X(o, s, null), n[6](e), l = !0
        },
        p(h, [f]) {
            h[0] ? u && (ce(), L(u, 1, 1, () => {
                u = null
            }), ue()) : u ? f & 1 && T(u, 1) : (u = rt(), u.c(), T(u, 1), u.m(t, i)), h[2] ? a ? f & 4 && T(a, 1) : (a = ot(), a.c(), T(a, 1), a.m(s, r)) : a && (ce(), L(a, 1, 1, () => {
                a = null
            }), ue()), (!l || f & 1) && _e(t, "justify-end", h[0]), (!l || f & 1) && _e(t, "justify-between", !h[0])
        },
        i(h) {
            l || (T(u), T(a), T(o.$$.fragment, h), l = !0)
        },
        o(h) {
            L(u), L(a), L(o.$$.fragment, h), l = !1
        },
        d(h) {
            h && v(e), u && u.d(), a && a.d(), K(o), n[6](null)
        }
    }
}

function $i(n, e, t) {
    let i, s, r;
    C(n, ye, f => t(4, i = f)), C(n, xe, f => t(5, s = f)), C(n, we, f => t(2, r = f));
    let {
        isHome: o = !1
    } = e, l, u = !1;
    const a = () => {
        D.to(l, {
            autoAlpha: 1,
            delay: .64
        })
    };
    be(() => {
        t(3, u = !0)
    });

    function h(f) {
        H[f ? "unshift" : "push"](() => {
            l = f, t(1, l)
        })
    }
    return n.$$set = f => {
        "isHome" in f && t(0, o = f.isHome)
    }, n.$$.update = () => {
        n.$$.dirty & 56 && u && s && !i && a()
    }, [o, l, r, u, i, s, h]
}
class Fi extends W {
    constructor(e) {
        super(), B(this, e, $i, Ui, O, {
            isHome: 0
        })
    }
}

function Yi(n) {
    let e, t, i;
    return {
        c() {
            e = k("canvas"), this.h()
        },
        l(s) {
            e = S(s, "CANVAS", {
                class: !0
            }), E(e).forEach(v), this.h()
        },
        h() {
            w(e, "class", "pointer-events-none fixed inset-0 z-50 h-screen w-screen mix-blend-difference")
        },
        m(s, r) {
            x(s, e, r), n[5](e), t || (i = [ae(window, "mousemove", n[1]), ae(window, "mouseout", n[2])], t = !0)
        },
        p: A,
        i: A,
        o: A,
        d(s) {
            s && v(e), n[5](null), t = !1, kt(i)
        }
    }
}

function qi(n, e, t) {
    let i, s, r;
    C(n, Ie, b => t(3, i = b)), C(n, Oe, b => t(4, s = b)), C(n, Re, b => t(10, r = b));
    let o = null,
        l = null,
        u = [],
        a, h = !1;

    function f() {
        l && (r.x && r.y && !h ? u.push({
            x: r.x,
            y: r.y
        }) : u = u.slice(1), u.length > 6 && (u = u.slice(1)), u.length > 0 && u.forEach(c))
    }

    function c(b) {
        l && (l.fillStyle = Ct.green, l.fillRect(Math.floor(b.x / a) * a, Math.floor(b.y / a) * a, a, a))
    }

    function g() {
        o && (l = o == null ? void 0 : o.getContext("2d"), m(), _())
    }

    function p(b) {
        h = !1, De(Re, r.x = b.clientX, r), De(Re, r.y = b.clientY, r)
    }

    function d(b) {
        b.relatedTarget || (h = !0)
    }

    function _() {
        l == null || l.clearRect(0, 0, s, i), f(), requestAnimationFrame(_)
    }

    function m() {
        o && (t(0, o.width = s, o), t(0, o.height = i, o), a = Math.floor(i * .016))
    }

    function z(b) {
        H[b ? "unshift" : "push"](() => {
            o = b, t(0, o)
        })
    }
    return n.$$.update = () => {
        n.$$.dirty & 1 && o && g(), n.$$.dirty & 24 && s && i && m()
    }, [o, p, d, i, s, z]
}
class Xi extends W {
    constructor(e) {
        super(), B(this, e, qi, Yi, O, {})
    }
}

function lt(n, e, t) {
    const i = n.slice();
    return i[8] = e[t], i[9] = e, i[10] = t, i
}

function at(n, e, t) {
    const i = n.slice();
    return i[8] = e[t], i[11] = e, i[10] = t, i
}

function ct(n) {
    let e, t = n[10];
    const i = () => n[5](e, t),
        s = () => n[5](null, t);
    return {
        c() {
            e = k("div"), this.h()
        },
        l(r) {
            e = S(r, "DIV", {
                class: !0
            }), E(e).forEach(v), this.h()
        },
        h() {
            w(e, "class", "h-[101%] bg-green")
        },
        m(r, o) {
            x(r, e, o), i()
        },
        p(r, o) {
            n = r, t !== n[10] && (s(), t = n[10], i())
        },
        d(r) {
            r && v(e), s()
        }
    }
}

function ut(n) {
    let e, t = n[10];
    const i = () => n[6](e, t),
        s = () => n[6](null, t);
    return {
        c() {
            e = k("div"), this.h()
        },
        l(r) {
            e = S(r, "DIV", {
                class: !0
            }), E(e).forEach(v), this.h()
        },
        h() {
            w(e, "class", "hidden h-[101%] bg-green l:block")
        },
        m(r, o) {
            x(r, e, o), i()
        },
        p(r, o) {
            n = r, t !== n[10] && (s(), t = n[10], i())
        },
        d(r) {
            r && v(e), s()
        }
    }
}

function Ki(n) {
    let e, t, i, s, r, o = ie(Array(32)),
        l = [];
    for (let h = 0; h < o.length; h += 1) l[h] = ct(at(n, o, h));
    let u = ie(Array(32)),
        a = [];
    for (let h = 0; h < u.length; h += 1) a[h] = ut(lt(n, u, h));
    return {
        c() {
            e = k("div");
            for (let h = 0; h < l.length; h += 1) l[h].c();
            t = M();
            for (let h = 0; h < a.length; h += 1) a[h].c();
            this.h()
        },
        l(h) {
            e = S(h, "DIV", {
                class: !0
            });
            var f = E(e);
            for (let c = 0; c < l.length; c += 1) l[c].l(f);
            t = R(f);
            for (let c = 0; c < a.length; c += 1) a[c].l(f);
            f.forEach(v), this.h()
        },
        h() {
            w(e, "class", "module-page-transition fouc pointer-events-none fixed inset-0 z-50 grid grid-cols-4 l:grid-cols-8")
        },
        m(h, f) {
            x(h, e, f);
            for (let c = 0; c < l.length; c += 1) l[c] && l[c].m(e, null);
            y(e, t);
            for (let c = 0; c < a.length; c += 1) a[c] && a[c].m(e, null);
            n[7](e), r = !0
        },
        p(h, [f]) {
            if (f & 2) {
                o = ie(Array(32));
                let c;
                for (c = 0; c < o.length; c += 1) {
                    const g = at(h, o, c);
                    l[c] ? l[c].p(g, f) : (l[c] = ct(g), l[c].c(), l[c].m(e, t))
                }
                for (; c < l.length; c += 1) l[c].d(1);
                l.length = o.length
            }
            if (f & 4) {
                u = ie(Array(32));
                let c;
                for (c = 0; c < u.length; c += 1) {
                    const g = lt(h, u, c);
                    a[c] ? a[c].p(g, f) : (a[c] = ut(g), a[c].c(), a[c].m(e, null))
                }
                for (; c < a.length; c += 1) a[c].d(1);
                a.length = u.length
            }
        },
        i(h) {
            r || (h && Le(() => {
                r && (s && s.end(1), i = Tt(e, n[3], {}), i.start())
            }), r = !0)
        },
        o(h) {
            i && i.invalidate(), h && (s = Et(e, n[4], {})), r = !1
        },
        d(h) {
            h && v(e), ve(l, h), ve(a, h), n[7](null), h && s && s.end()
        }
    }
}

function Gi(n, e, t) {
    let i, s = [],
        r = [];

    function o(f) {
        let c = D.timeline();
        return D.matchMedia().add({
            isDesktop: `(min-width: ${Se.l}px)`,
            isMobile: `(max-width: ${Se.l - 1}px)`
        }, p => {
            let {
                isDesktop: d
            } = p.conditions;
            const _ = d ? [...s, ...r] : s;
            c.fromTo(_, {
                scaleX: 0
            }, {
                duration: .24,
                ease: "power2.out",
                stagger: {
                    amount: .48,
                    from: [0, .5],
                    grid: d ? [8, 8] : [8, 4]
                },
                scaleX: 1,
                transformOrigin: "left",
                onStart: () => {
                    D.set(i, {
                        autoAlpha: 1
                    })
                },
                onComplete: () => {
                    zt.set(!1)
                }
            })
        }, i), {
            duration: c.totalDuration() * 1e3,
            tick: p => {
                c.progress(p)
            }
        }
    }

    function l(f) {
        let c = D.timeline();
        return D.matchMedia().add({
            isDesktop: `(min-width: ${Se.l}px)`,
            isMobile: `(max-width: ${Se.l - 1}px)`
        }, p => {
            let {
                isDesktop: d
            } = p.conditions;
            const _ = d ? [...s, ...r] : s;
            c.fromTo(_, {
                scaleX: 1
            }, {
                duration: .24,
                delay: .32,
                ease: "power2.out",
                stagger: {
                    amount: .48,
                    from: [0, .5],
                    grid: d ? [8, 8] : [8, 4]
                },
                scaleX: 0,
                transformOrigin: "right",
                onComplete: () => {
                    D.set(i, {
                        autoAlpha: 0
                    })
                }
            })
        }, i), {
            duration: c.totalDuration() * 1e3,
            tick: p => {
                c.progress(1 - p)
            }
        }
    }

    function u(f, c) {
        H[f ? "unshift" : "push"](() => {
            s[c] = f, t(1, s)
        })
    }

    function a(f, c) {
        H[f ? "unshift" : "push"](() => {
            r[c] = f, t(2, r)
        })
    }

    function h(f) {
        H[f ? "unshift" : "push"](() => {
            i = f, t(0, i)
        })
    }
    return [i, s, r, o, l, u, a, h]
}
class Qi extends W {
    constructor(e) {
        super(), B(this, e, Gi, Ki, O, {})
    }
}

function Ji(n) {
    let e, t, i = "CRFTD",
        s, r, o, l, u, a, h = "0",
        f;
    return {
        c() {
            e = k("div"), t = k("p"), t.textContent = i, s = M(), r = k("div"), o = M(), l = k("p"), u = he("Loading "), a = k("span"), a.textContent = h, f = he("%"), this.h()
        },
        l(c) {
            e = S(c, "DIV", {
                class: !0
            });
            var g = E(e);
            t = S(g, "P", {
                class: !0,
                "data-svelte-h": !0
            }), Ee(t) !== "svelte-14s6p12" && (t.textContent = i), s = R(g), r = S(g, "DIV", {
                class: !0
            }), E(r).forEach(v), o = R(g), l = S(g, "P", {
                class: !0
            });
            var p = E(l);
            u = fe(p, "Loading "), a = S(p, "SPAN", {
                "data-svelte-h": !0
            }), Ee(a) !== "svelte-17num87" && (a.textContent = h), f = fe(p, "%"), p.forEach(v), g.forEach(v), this.h()
        },
        h() {
            w(t, "class", "title-xs fouc"), w(r, "class", "loading fouc relative h-fluid-3xl w-0.5 overflow-hidden bg-white/20 before:absolute before:inset-0 before:bottom-0 before:translate-y-full before:bg-green svelte-pyk35b"), w(l, "class", "title-xs fouc"), w(e, "class", "module-preloader fixed inset-0 z-50 flex flex-col items-center justify-between bg-black py-fluid-xl text-white hover:cursor-wait svelte-pyk35b")
        },
        m(c, g) {
            x(c, e, g), y(e, t), n[4](t), y(e, s), y(e, r), n[5](r), y(e, o), y(e, l), y(l, u), y(l, a), n[6](a), y(l, f), n[7](l), n[8](e)
        },
        p: A,
        i: A,
        o: A,
        d(c) {
            c && v(e), n[4](null), n[5](null), n[6](null), n[7](null), n[8](null)
        }
    }
}

function Zi() {
    sessionStorage.getItem("preloaded") ? ye.set(!1) : sessionStorage.setItem("preloaded", "true")
}

function en(n, e, t) {
    let i;
    C(n, He, d => t(10, i = d));
    let s, r, o, l = [],
        u;
    const a = () => {
        i == null || i.scrollTo(0, {
            immediate: !0
        })
    };
    be(() => {
        Zi();
        let d = D.context(() => {
            u = D.timeline({
                delay: .16,
                onStart: a,
                onComplete: () => ye.set(!1)
            });
            const _ = new qe.SplitText(l[0], {
                type: "chars",
                charsClass: "opacity-0"
            }),
                m = new qe.SplitText(l[1], {
                    type: "chars",
                    charsClass: "opacity-0"
                });
            u.set([r, l], {
                autoAlpha: 1
            }), u.from(r, {
                scaleY: 0,
                transformOrigin: "bottom",
                duration: 1,
                ease: "power3.inOut"
            }), u.set(_.chars, {
                opacity: 1,
                stagger: .08
            }, "<"), u.set(m.chars, {
                opacity: 1,
                stagger: .08
            }, "<+=0.25"), u.to(o, {
                innerText: "100",
                duration: 2,
                snap: {
                    innerText: 4
                },
                ease: "power1.out"
            }, "-=0.5"), u.fromTo(r, {
                "--preloaderProgress": "100%"
            }, {
                "--preloaderProgress": "0%",
                duration: 1,
                ease: "power3.inOut"
            }, "-=1.5").to(r, {
                scaleY: 0,
                transformOrigin: "top",
                duration: 1,
                ease: "power3.inOut"
            }).to(l, {
                autoAlpha: 0
            }, "<+=0.25")
        }, s);
        return () => d.revert()
    });

    function h(d) {
        H[d ? "unshift" : "push"](() => {
            l[0] = d, t(3, l)
        })
    }

    function f(d) {
        H[d ? "unshift" : "push"](() => {
            r = d, t(1, r)
        })
    }

    function c(d) {
        H[d ? "unshift" : "push"](() => {
            o = d, t(2, o)
        })
    }

    function g(d) {
        H[d ? "unshift" : "push"](() => {
            l[1] = d, t(3, l)
        })
    }

    function p(d) {
        H[d ? "unshift" : "push"](() => {
            s = d, t(0, s)
        })
    }
    return [s, r, o, l, h, f, c, g, p]
}
class tn extends W {
    constructor(e) {
        super(), B(this, e, en, Ji, O, {})
    }
}
var nn = "",
    sn = "1.0.12",
    rn = () => {
        window.si || (window.si = function (...e) {
            (window.siq = window.siq || []).push(e)
        })
    };

function on() {
    return typeof window < "u"
}

function ln() {
    try {
        const n = "production"
    } catch { }
    return "production"
}

function ht() {
    return ln() === "development"
}
var At = "https://va.vercel-scripts.com/v1/speed-insights",
    an = `${At}/script.js`,
    cn = `${At}/script.debug.js`,
    un = "/_vercel/speed-insights/script.js";

function hn(n = {}) {
    var e;
    if (!on() || n.route === null) return null;
    rn();
    const i = !!n.dsn ? an : un,
        s = n.scriptSrc || (ht() ? cn : i);
    if (document.head.querySelector(`script[src*="${s}"]`)) return null;
    // n.beforeSend && ((e = window.si) == null || e.call(window, "beforeSend", n.beforeSend));
    // const r = document.createElement("script");
    // return r.src = s, r.defer = !0, r.dataset.sdkn = nn + (n.framework ? `/${n.framework}` : ""), r.dataset.sdkv = sn, n.sampleRate && (r.dataset.sampleRate = n.sampleRate.toString()), n.route && (r.dataset.route = n.route), n.endpoint && (r.dataset.endpoint = n.endpoint), n.dsn && (r.dataset.dsn = n.dsn), ht() && n.debug === !1 && (r.dataset.debug = "false"), r.onerror = () => {
    //     console.log(`[Vercel Speed Insights] Failed to load script from ${s}. Please check if any content blockers are enabled and try again.`)
    // }, document.head.appendChild(r), {
    //     setRoute: o => {
    //         r.dataset.route = o ?? void 0
    //     }
    // }
}

function fn(n = {}) {
    var e;
    {
        const t = hn({
            route: (e = yt(de).route) == null ? void 0 : e.id,
            ...n,
            framework: "sveltekit"
        });
        t && de.subscribe(i => {
            var s;
            (s = i.route) != null && s.id && t.setRoute(i.route.id)
        })
    }
}
var dn = "@vercel/analytics",
    gn = "1.3.1",
    mn = () => {
        window.va || (window.va = function (...e) {
            (window.vaq = window.vaq || []).push(e)
        })
    };

function Dt() {
    return typeof window < "u"
}

function Ht() {
    try {
        const n = "production"
    } catch { }
    return "production"
}

function pn(n = "auto") {
    if (n === "auto") {
        window.vam = Ht();
        return
    }
    window.vam = n
}

function _n() {
    return (Dt() ? window.vam : Ht()) || "production"
}

function Ae() {
    return _n() === "development"
}
var vn = "",
    wn = "";

function bn(n = {
    debug: !0
}) {
    var e;
    if (!Dt()) return;
    pn(n.mode), mn(), n.beforeSend && ((e = window.va) == null || e.call(window, "beforeSend", n.beforeSend));
    const t = n.scriptSrc || (Ae() ? vn : wn);
    if (document.head.querySelector(`script[src*="${t}"]`)) return;
    const i = document.createElement("script");
    i.src = t, i.defer = !0, i.dataset.sdkn = dn + (n.framework ? `/${n.framework}` : ""), i.dataset.sdkv = gn, n.disableAutoTrack && (i.dataset.disableAutoTrack = "1"), n.endpoint && (i.dataset.endpoint = n.endpoint), n.dsn && (i.dataset.dsn = n.dsn), i.onerror = () => {
        const s = Ae() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
        console.log(`[Vercel Web Analytics] Failed to load script from ${t}. ${s}`)
    }, Ae() && n.debug === !1 && (i.dataset.debug = "false"), document.head.appendChild(i)
}
const yn = "" + new URL("", import.meta.url).href,
    kn = "" + new URL("", import.meta.url).href,
    Sn = "" + new URL("../assets/neuebit-bold.QpQ09kGo.woff2", import.meta.url).href;

function Pt(n, e, t) {
    return Math.max(n, Math.min(e, t))
}
class Tn {
    advance(e) {
        var l;
        if (!this.isRunning) return;
        let t = !1;
        if (this.lerp) this.value = (i = this.value, s = this.to, r = 60 * this.lerp, o = e, function (u, a, h) {
            return (1 - h) * u + h * a
        }(i, s, 1 - Math.exp(-r * o))), Math.round(this.value) === this.to && (this.value = this.to, t = !0);
        else {
            this.currentTime += e;
            const u = Pt(0, this.currentTime / this.duration, 1);
            t = u >= 1;
            const a = t ? 1 : this.easing(u);
            this.value = this.from + (this.to - this.from) * a
        }
        var i, s, r, o;
        (l = this.onUpdate) == null || l.call(this, this.value, t), t && this.stop()
    }
    stop() {
        this.isRunning = !1
    }
    fromTo(e, t, {
        lerp: i = .1,
        duration: s = 1,
        easing: r = u => u,
        onStart: o,
        onUpdate: l
    }) {
        this.from = this.value = e, this.to = t, this.lerp = i, this.duration = s, this.easing = r, this.currentTime = 0, this.isRunning = !0, o == null || o(), this.onUpdate = l
    }
}
class En {
    constructor({
        wrapper: e,
        content: t,
        autoResize: i = !0,
        debounce: s = 250
    } = {}) {
        ne(this, "resize", () => {
            this.onWrapperResize(), this.onContentResize()
        });
        ne(this, "onWrapperResize", () => {
            this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
        });
        ne(this, "onContentResize", () => {
            this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
        });
        this.wrapper = e, this.content = t, i && (this.debouncedResize = function (r, o) {
            let l;
            return function () {
                let u = arguments,
                    a = this;
                clearTimeout(l), l = setTimeout(function () {
                    r.apply(a, u)
                }, o)
            }
        }(this.resize, s), this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
    }
    destroy() {
        var e, t;
        (e = this.wrapperResizeObserver) == null || e.disconnect(), (t = this.contentResizeObserver) == null || t.disconnect(), window.removeEventListener("resize", this.debouncedResize, !1)
    }
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        }
    }
}
class It {
    constructor() {
        this.events = {}
    }
    emit(e, ...t) {
        let i = this.events[e] || [];
        for (let s = 0, r = i.length; s < r; s++) i[s](...t)
    }
    on(e, t) {
        var i;
        return (i = this.events[e]) != null && i.push(t) || (this.events[e] = [t]), () => {
            var s;
            this.events[e] = (s = this.events[e]) == null ? void 0 : s.filter(r => t !== r)
        }
    }
    off(e, t) {
        var i;
        this.events[e] = (i = this.events[e]) == null ? void 0 : i.filter(s => t !== s)
    }
    destroy() {
        this.events = {}
    }
}
const ft = 100 / 6;
class Ln {
    constructor(e, {
        wheelMultiplier: t = 1,
        touchMultiplier: i = 1
    }) {
        ne(this, "onTouchStart", e => {
            const {
                clientX: t,
                clientY: i
            } = e.targetTouches ? e.targetTouches[0] : e;
            this.touchStart.x = t, this.touchStart.y = i, this.lastDelta = {
                x: 0,
                y: 0
            }, this.emitter.emit("scroll", {
                deltaX: 0,
                deltaY: 0,
                event: e
            })
        });
        ne(this, "onTouchMove", e => {
            const {
                clientX: t,
                clientY: i
            } = e.targetTouches ? e.targetTouches[0] : e, s = -(t - this.touchStart.x) * this.touchMultiplier, r = -(i - this.touchStart.y) * this.touchMultiplier;
            this.touchStart.x = t, this.touchStart.y = i, this.lastDelta = {
                x: s,
                y: r
            }, this.emitter.emit("scroll", {
                deltaX: s,
                deltaY: r,
                event: e
            })
        });
        ne(this, "onTouchEnd", e => {
            this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: e
            })
        });
        ne(this, "onWheel", e => {
            let {
                deltaX: t,
                deltaY: i,
                deltaMode: s
            } = e;
            t *= s === 1 ? ft : s === 2 ? this.windowWidth : 1, i *= s === 1 ? ft : s === 2 ? this.windowHeight : 1, t *= this.wheelMultiplier, i *= this.wheelMultiplier, this.emitter.emit("scroll", {
                deltaX: t,
                deltaY: i,
                event: e
            })
        });
        ne(this, "onWindowResize", () => {
            this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight
        });
        this.element = e, this.wheelMultiplier = t, this.touchMultiplier = i, this.touchStart = {
            x: null,
            y: null
        }, this.emitter = new It, window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, {
            passive: !1
        }), this.element.addEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }), this.element.addEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }), this.element.addEventListener("touchend", this.onTouchEnd, {
            passive: !1
        })
    }
    on(e, t) {
        return this.emitter.on(e, t)
    }
    destroy() {
        this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel, {
            passive: !1
        }), this.element.removeEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }), this.element.removeEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }), this.element.removeEventListener("touchend", this.onTouchEnd, {
            passive: !1
        })
    }
}
class xn {
    constructor({
        wrapper: e = window,
        content: t = document.documentElement,
        wheelEventsTarget: i = e,
        eventsTarget: s = i,
        smoothWheel: r = !0,
        syncTouch: o = !1,
        syncTouchLerp: l = .075,
        touchInertiaMultiplier: u = 35,
        duration: a,
        easing: h = b => Math.min(1, 1.001 - Math.pow(2, -10 * b)),
        lerp: f = !a && .1,
        infinite: c = !1,
        orientation: g = "vertical",
        gestureOrientation: p = "vertical",
        touchMultiplier: d = 1,
        wheelMultiplier: _ = 1,
        autoResize: m = !0,
        __experimental__naiveDimensions: z = !1
    } = {}) {
        this.__isSmooth = !1, this.__isScrolling = !1, this.__isStopped = !1, this.__isLocked = !1, this.onVirtualScroll = ({
            deltaX: b,
            deltaY: P,
            event: j
        }) => {
            if (j.ctrlKey) return;
            const ee = j.type.includes("touch"),
                se = j.type.includes("wheel");
            if (this.options.syncTouch && ee && j.type === "touchstart" && !this.isStopped && !this.isLocked) return void this.reset();
            const Ce = b === 0 && P === 0,
                Me = this.options.gestureOrientation === "vertical" && P === 0 || this.options.gestureOrientation === "horizontal" && b === 0;
            if (Ce || Me) return;
            let G = j.composedPath();
            if (G = G.slice(0, G.indexOf(this.rootElement)), G.find(I => {
                var U, $, F, re, oe;
                return ((U = I.hasAttribute) === null || U === void 0 ? void 0 : U.call(I, "data-lenis-prevent")) || ee && (($ = I.hasAttribute) === null || $ === void 0 ? void 0 : $.call(I, "data-lenis-prevent-touch")) || se && ((F = I.hasAttribute) === null || F === void 0 ? void 0 : F.call(I, "data-lenis-prevent-wheel")) || ((re = I.classList) === null || re === void 0 ? void 0 : re.contains("lenis")) && !(!((oe = I.classList) === null || oe === void 0) && oe.contains("lenis-stopped"))
            })) return;
            if (this.isStopped || this.isLocked) return void j.preventDefault();
            if (this.isSmooth = this.options.syncTouch && ee || this.options.smoothWheel && se, !this.isSmooth) return this.isScrolling = !1, void this.animate.stop();
            j.preventDefault();
            let V = P;
            this.options.gestureOrientation === "both" ? V = Math.abs(P) > Math.abs(b) ? P : b : this.options.gestureOrientation === "horizontal" && (V = b);
            const Q = ee && this.options.syncTouch,
                J = ee && j.type === "touchend" && Math.abs(V) > 5;
            J && (V = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + V, Object.assign({
                programmatic: !1
            }, Q ? {
                lerp: J ? this.options.syncTouchLerp : 1
            } : {
                lerp: this.options.lerp,
                duration: this.options.duration,
                easing: this.options.easing
            }))
        }, this.onNativeScroll = () => {
            if (!this.__preventNextScrollEvent && !this.isScrolling) {
                const b = this.animatedScroll;
                this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.direction = Math.sign(this.animatedScroll - b), this.emit()
            }
        }, window.lenisVersion = "1.0.42", e !== document.documentElement && e !== document.body || (e = window), this.options = {
            wrapper: e,
            content: t,
            wheelEventsTarget: i,
            eventsTarget: s,
            smoothWheel: r,
            syncTouch: o,
            syncTouchLerp: l,
            touchInertiaMultiplier: u,
            duration: a,
            easing: h,
            lerp: f,
            infinite: c,
            gestureOrientation: p,
            orientation: g,
            touchMultiplier: d,
            wheelMultiplier: _,
            autoResize: m,
            __experimental__naiveDimensions: z
        }, this.animate = new Tn, this.emitter = new It, this.dimensions = new En({
            wrapper: e,
            content: t,
            autoResize: m
        }), this.toggleClassName("lenis", !0), this.velocity = 0, this.isLocked = !1, this.isStopped = !1, this.isSmooth = o || r, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.virtualScroll = new Ln(s, {
            touchMultiplier: d,
            wheelMultiplier: _
        }), this.virtualScroll.on("scroll", this.onVirtualScroll)
    }
    destroy() {
        this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClassName("lenis", !1), this.toggleClassName("lenis-smooth", !1), this.toggleClassName("lenis-scrolling", !1), this.toggleClassName("lenis-stopped", !1), this.toggleClassName("lenis-locked", !1)
    }
    on(e, t) {
        return this.emitter.on(e, t)
    }
    off(e, t) {
        return this.emitter.off(e, t)
    }
    setScroll(e) {
        this.isHorizontal ? this.rootElement.scrollLeft = e : this.rootElement.scrollTop = e
    }
    resize() {
        this.dimensions.resize()
    }
    emit() {
        this.emitter.emit("scroll", this)
    }
    reset() {
        this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.animate.stop()
    }
    start() {
        this.isStopped && (this.isStopped = !1, this.reset())
    }
    stop() {
        this.isStopped || (this.isStopped = !0, this.animate.stop(), this.reset())
    }
    raf(e) {
        const t = e - (this.time || e);
        this.time = e, this.animate.advance(.001 * t)
    }
    scrollTo(e, {
        offset: t = 0,
        immediate: i = !1,
        lock: s = !1,
        duration: r = this.options.duration,
        easing: o = this.options.easing,
        lerp: l = !r && this.options.lerp,
        onComplete: u,
        force: a = !1,
        programmatic: h = !0
    } = {}) {
        if (!this.isStopped && !this.isLocked || a) {
            if (["top", "left", "start"].includes(e)) e = 0;
            else if (["bottom", "right", "end"].includes(e)) e = this.limit;
            else {
                let f;
                if (typeof e == "string" ? f = document.querySelector(e) : e != null && e.nodeType && (f = e), f) {
                    if (this.options.wrapper !== window) {
                        const g = this.options.wrapper.getBoundingClientRect();
                        t -= this.isHorizontal ? g.left : g.top
                    }
                    const c = f.getBoundingClientRect();
                    e = (this.isHorizontal ? c.left : c.top) + this.animatedScroll
                }
            }
            if (typeof e == "number") {
                if (e += t, e = Math.round(e), this.options.infinite ? h && (this.targetScroll = this.animatedScroll = this.scroll) : e = Pt(0, e, this.limit), i) return this.animatedScroll = this.targetScroll = e, this.setScroll(this.scroll), this.reset(), void (u == null || u(this));
                if (!h) {
                    if (e === this.targetScroll) return;
                    this.targetScroll = e
                }
                this.animate.fromTo(this.animatedScroll, e, {
                    duration: r,
                    easing: o,
                    lerp: l,
                    onStart: () => {
                        s && (this.isLocked = !0), this.isScrolling = !0
                    },
                    onUpdate: (f, c) => {
                        this.isScrolling = !0, this.velocity = f - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = f, this.setScroll(this.scroll), h && (this.targetScroll = f), c || this.emit(), c && (this.reset(), this.emit(), u == null || u(this), this.__preventNextScrollEvent = !0, requestAnimationFrame(() => {
                            delete this.__preventNextScrollEvent
                        }))
                    }
                })
            }
        }
    }
    get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper
    }
    get limit() {
        return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
    }
    get isHorizontal() {
        return this.options.orientation === "horizontal"
    }
    get actualScroll() {
        return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
    }
    get scroll() {
        return this.options.infinite ? (e = this.animatedScroll, t = this.limit, (e % t + t) % t) : this.animatedScroll;
        var e, t
    }
    get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit
    }
    get isSmooth() {
        return this.__isSmooth
    }
    set isSmooth(e) {
        this.__isSmooth !== e && (this.__isSmooth = e, this.toggleClassName("lenis-smooth", e))
    }
    get isScrolling() {
        return this.__isScrolling
    }
    set isScrolling(e) {
        this.__isScrolling !== e && (this.__isScrolling = e, this.toggleClassName("lenis-scrolling", e))
    }
    get isStopped() {
        return this.__isStopped
    }
    set isStopped(e) {
        this.__isStopped !== e && (this.__isStopped = e, this.toggleClassName("lenis-stopped", e))
    }
    get isLocked() {
        return this.__isLocked
    }
    set isLocked(e) {
        this.__isLocked !== e && (this.__isLocked = e, this.toggleClassName("lenis-locked", e))
    }
    get className() {
        let e = "lenis";
        return this.isStopped && (e += " lenis-stopped"), this.isLocked && (e += " lenis-locked"), this.isScrolling && (e += " lenis-scrolling"), this.isSmooth && (e += " lenis-smooth"), e
    }
    toggleClassName(e, t) {
        this.rootElement.classList.toggle(e, t), this.emitter.emit("className change", this)
    }
}
var Ot = {
    exports: {}
};
(function (n) {
    (function () {
        function e(d, _) {
            document.addEventListener ? d.addEventListener("scroll", _, !1) : d.attachEvent("scroll", _)
        }

        function t(d) {
            document.body ? d() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function _() {
                document.removeEventListener("DOMContentLoaded", _), d()
            }) : document.attachEvent("onreadystatechange", function _() {
                (document.readyState == "interactive" || document.readyState == "complete") && (document.detachEvent("onreadystatechange", _), d())
            })
        }

        function i(d) {
            this.g = document.createElement("div"), this.g.setAttribute("aria-hidden", "true"), this.g.appendChild(document.createTextNode(d)), this.h = document.createElement("span"), this.i = document.createElement("span"), this.m = document.createElement("span"), this.j = document.createElement("span"), this.l = -1, this.h.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.i.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.j.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.m.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.h.appendChild(this.m), this.i.appendChild(this.j), this.g.appendChild(this.h), this.g.appendChild(this.i)
        }

        function s(d, _) {
            d.g.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + _ + ";"
        }

        function r(d) {
            var _ = d.g.offsetWidth,
                m = _ + 100;
            return d.j.style.width = m + "px", d.i.scrollLeft = m, d.h.scrollLeft = d.h.scrollWidth + 100, d.l !== _ ? (d.l = _, !0) : !1
        }

        function o(d, _) {
            function m() {
                var b = z;
                r(b) && b.g.parentNode !== null && _(b.l)
            }
            var z = d;
            e(d.h, m), e(d.i, m), r(d)
        }

        function l(d, _, m) {
            _ = _ || {}, m = m || window, this.family = d, this.style = _.style || "normal", this.weight = _.weight || "normal", this.stretch = _.stretch || "normal", this.context = m
        }
        var u = null,
            a = null,
            h = null,
            f = null;

        function c(d) {
            return a === null && (g(d) && /Apple/.test(window.navigator.vendor) ? (d = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent), a = !!d && 603 > parseInt(d[1], 10)) : a = !1), a
        }

        function g(d) {
            return f === null && (f = !!d.document.fonts), f
        }

        function p(d, _) {
            var m = d.style,
                z = d.weight;
            if (h === null) {
                var b = document.createElement("div");
                try {
                    b.style.font = "condensed 100px sans-serif"
                } catch { }
                h = b.style.font !== ""
            }
            return [m, z, h ? d.stretch : "", "100px", _].join(" ")
        }
        l.prototype.load = function (d, _) {
            var m = this,
                z = d || "BESbswy",
                b = 0,
                P = _ || 3e3,
                j = new Date().getTime();
            return new Promise(function (ee, se) {
                if (g(m.context) && !c(m.context)) {
                    var Ce = new Promise(function (G, V) {
                        function Q() {
                            new Date().getTime() - j >= P ? V(Error("" + P + "ms timeout exceeded")) : m.context.document.fonts.load(p(m, '"' + m.family + '"'), z).then(function (J) {
                                1 <= J.length ? G() : setTimeout(Q, 25)
                            }, V)
                        }
                        Q()
                    }),
                        Me = new Promise(function (G, V) {
                            b = setTimeout(function () {
                                V(Error("" + P + "ms timeout exceeded"))
                            }, P)
                        });
                    Promise.race([Me, Ce]).then(function () {
                        clearTimeout(b), ee(m)
                    }, se)
                } else t(function () {
                    function G() {
                        var N;
                        (N = U != -1 && $ != -1 || U != -1 && F != -1 || $ != -1 && F != -1) && ((N = U != $ && U != F && $ != F) || (u === null && (N = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), u = !!N && (536 > parseInt(N[1], 10) || parseInt(N[1], 10) === 536 && 11 >= parseInt(N[2], 10))), N = u && (U == re && $ == re && F == re || U == oe && $ == oe && F == oe || U == ke && $ == ke && F == ke)), N = !N), N && (Z.parentNode !== null && Z.parentNode.removeChild(Z), clearTimeout(b), ee(m))
                    }

                    function V() {
                        if (new Date().getTime() - j >= P) Z.parentNode !== null && Z.parentNode.removeChild(Z), se(Error("" + P + "ms timeout exceeded"));
                        else {
                            var N = m.context.document.hidden;
                            (N === !0 || N === void 0) && (U = Q.g.offsetWidth, $ = J.g.offsetWidth, F = I.g.offsetWidth, G()), b = setTimeout(V, 50)
                        }
                    }
                    var Q = new i(z),
                        J = new i(z),
                        I = new i(z),
                        U = -1,
                        $ = -1,
                        F = -1,
                        re = -1,
                        oe = -1,
                        ke = -1,
                        Z = document.createElement("div");
                    Z.dir = "ltr", s(Q, p(m, "sans-serif")), s(J, p(m, "serif")), s(I, p(m, "monospace")), Z.appendChild(Q.g), Z.appendChild(J.g), Z.appendChild(I.g), m.context.document.body.appendChild(Z), re = Q.g.offsetWidth, oe = J.g.offsetWidth, ke = I.g.offsetWidth, V(), o(Q, function (N) {
                        U = N, G()
                    }), s(Q, p(m, '"' + m.family + '",sans-serif')), o(J, function (N) {
                        $ = N, G()
                    }), s(J, p(m, '"' + m.family + '",serif')), o(I, function (N) {
                        F = N, G()
                    }), s(I, p(m, '"' + m.family + '",monospace'))
                })
            })
        }, n.exports = l
    })()
})(Ot);
var zn = Ot.exports;
const dt = Qt(zn);

function gt(n) {
    let e, t;
    return e = new tn({}), {
        c() {
            Y(e.$$.fragment)
        },
        l(i) {
            q(e.$$.fragment, i)
        },
        m(i, s) {
            X(e, i, s), t = !0
        },
        i(i) {
            t || (T(e.$$.fragment, i), t = !0)
        },
        o(i) {
            L(e.$$.fragment, i), t = !1
        },
        d(i) {
            K(e, i)
        }
    }
}

function mt(n) {
    let e, t;
    return e = new Qi({}), {
        c() {
            Y(e.$$.fragment)
        },
        l(i) {
            q(e.$$.fragment, i)
        },
        m(i, s) {
            X(e, i, s), t = !0
        },
        i(i) {
            t || (T(e.$$.fragment, i), t = !0)
        },
        o(i) {
            L(e.$$.fragment, i), t = !1
        },
        d(i) {
            K(e, i)
        }
    }
}

function pt(n) {
    let e, t;
    return e = new Xi({}), {
        c() {
            Y(e.$$.fragment)
        },
        l(i) {
            q(e.$$.fragment, i)
        },
        m(i, s) {
            X(e, i, s), t = !0
        },
        i(i) {
            t || (T(e.$$.fragment, i), t = !0)
        },
        o(i) {
            L(e.$$.fragment, i), t = !1
        },
        d(i) {
            K(e, i)
        }
    }
}

function Cn(n) {
    let e, t, i, s, r, o, l = n[3] && gt(),
        u = n[4] && mt(),
        a = !n[5] && pt();
    s = new Fi({
        props: {
            isHome: n[0]
        }
    });
    const h = n[9].default,
        f = _t(h, n, n[11], null);
    return {
        c() {
            l && l.c(), e = M(), u && u.c(), t = M(), a && a.c(), i = M(), Y(s.$$.fragment), r = M(), f && f.c()
        },
        l(c) {
            l && l.l(c), e = R(c), u && u.l(c), t = R(c), a && a.l(c), i = R(c), q(s.$$.fragment, c), r = R(c), f && f.l(c)
        },
        m(c, g) {
            l && l.m(c, g), x(c, e, g), u && u.m(c, g), x(c, t, g), a && a.m(c, g), x(c, i, g), X(s, c, g), x(c, r, g), f && f.m(c, g), o = !0
        },
        p(c, g) {
            c[3] ? l ? g & 8 && T(l, 1) : (l = gt(), l.c(), T(l, 1), l.m(e.parentNode, e)) : l && (ce(), L(l, 1, 1, () => {
                l = null
            }), ue()), c[4] ? u ? g & 16 && T(u, 1) : (u = mt(), u.c(), T(u, 1), u.m(t.parentNode, t)) : u && (ce(), L(u, 1, 1, () => {
                u = null
            }), ue()), c[5] ? a && (ce(), L(a, 1, 1, () => {
                a = null
            }), ue()) : a ? g & 32 && T(a, 1) : (a = pt(), a.c(), T(a, 1), a.m(i.parentNode, i));
            const p = {};
            g & 1 && (p.isHome = c[0]), s.$set(p), f && f.p && (!o || g & 2048) && vt(f, h, c, c[11], o ? bt(h, c[11], g, null) : wt(c[11]), null)
        },
        i(c) {
            o || (T(l), T(u), T(a), T(s.$$.fragment, c), T(f, c), o = !0)
        },
        o(c) {
            L(l), L(u), L(a), L(s.$$.fragment, c), L(f, c), o = !1
        },
        d(c) {
            c && (v(e), v(t), v(i), v(r)), l && l.d(c), u && u.d(c), a && a.d(c), K(s, c), f && f.d(c)
        }
    }
}

function Mn(n) {
    let e, t, i, s, r, o, l, u, a, h, f;
    return Le(n[10]), o = new li({
        props: {
            i18n: Be,
            $$slots: {
                default: [Cn]
            },
            $$scope: {
                ctx: n
            }
        }
    }), u = new hi({}), {
        c() {
            e = k("meta"), t = k("link"), i = k("link"), s = k("link"), r = M(), Y(o.$$.fragment), l = M(), Y(u.$$.fragment), this.h()
        },
        l(c) {
            const g = St("svelte-1bgrjj", document.head);
            e = S(g, "META", {
                name: !0,
                content: !0
            }), t = S(g, "LINK", {
                rel: !0,
                href: !0,
                crossorigin: !0,
                as: !0,
                type: !0
            }), i = S(g, "LINK", {
                rel: !0,
                href: !0,
                crossorigin: !0,
                as: !0,
                type: !0
            }), s = S(g, "LINK", {
                rel: !0,
                href: !0,
                crossorigin: !0,
                as: !0,
                type: !0
            }), g.forEach(v), r = R(c), q(o.$$.fragment, c), l = R(c), q(u.$$.fragment, c), this.h()
        },
        h() {
            w(e, "name", "theme-color"), w(e, "content", Ct.black), w(t, "rel", "preload"), w(t, "href", Sn), w(t, "crossorigin", "anonymous"), w(t, "as", "font"), w(t, "type", "font/woff2"), w(i, "rel", "preload"), w(i, "href", kn), w(i, "crossorigin", "anonymous"), w(i, "as", "font"), w(i, "type", "font/woff2"), w(s, "rel", "preload"), w(s, "href", yn), w(s, "crossorigin", "anonymous"), w(s, "as", "font"), w(s, "type", "font/woff2")
        },
        m(c, g) {
            y(document.head, e), y(document.head, t), y(document.head, i), y(document.head, s), x(c, r, g), X(o, c, g), x(c, l, g), X(u, c, g), a = !0, h || (f = [ae(window, "resize", n[6]), ae(window, "resize", n[10])], h = !0)
        },
        p(c, [g]) {
            const p = {};
            g & 2105 && (p.$$scope = {
                dirty: g,
                ctx: c
            }), o.$set(p)
        },
        i(c) {
            a || (T(o.$$.fragment, c), T(u.$$.fragment, c), a = !0)
        },
        o(c) {
            L(o.$$.fragment, c), L(u.$$.fragment, c), a = !1
        },
        d(c) {
            c && (v(r), v(l)), v(e), v(t), v(i), v(s), K(o, c), K(u, c), h = !1, kt(f)
        }
    }
}
let Rn = 320;

function Nn() {
    const n = new dt("Neuebit"),
        e = new dt("Hoves");
    Promise.all([n.load(), e.load()]).then(function () {
        xe.set(!0)
    }).catch(function (t) {
        console.error("Failed to load fonts:", t)
    })
}

function An(n, e, t) {
    let i, s, r, o, l, u, a, h, f;
    C(n, de, b => t(7, s = b)), C(n, xe, b => t(8, r = b)), C(n, He, b => t(14, o = b)), C(n, Oe, b => t(1, l = b)), C(n, Ie, b => t(2, u = b)), C(n, ye, b => t(3, a = b)), C(n, zt, b => t(4, h = b)), C(n, Xe, b => t(5, f = b));
    let {
        $$slots: c = {},
        $$scope: g
    } = e, p, d;

    function _() {
        He.set(new xn({
            lerp: .16
        })), o == null || o.on("scroll", ge.ScrollTrigger.update), D.ticker.add(b => {
            o == null || o.raf(b * 1e3)
        }), D.ticker.lagSmoothing(0)
    }
    const m = () => {
        l !== p && (Pe.set(!0), clearTimeout(d), d = setTimeout(() => {
            Pe.set(!1)
        }, Rn), p = l)
    };
    be(() => (p = l, ai(), _(), Nn(), () => {
        o == null || o.destroy()
    })), bn({
        mode: "production"
    }), fn(), Xt(() => {
        setTimeout(() => {
            ge.ScrollTrigger.clearScrollMemory(), ge.ScrollTrigger.refresh()
        }, 150)
    });

    function z() {
        Oe.set(l = window.innerWidth), Ie.set(u = window.innerHeight)
    }
    return n.$$set = b => {
        "$$scope" in b && t(11, g = b.$$scope)
    }, n.$$.update = () => {
        n.$$.dirty & 256 && r && ge.ScrollTrigger.refresh(),
            // n.$$.dirty & 128 && t(0, i = s.route.id === "/"),
            n.$$.dirty & 1 && (i || xt.set(-1))
    }, Xe.set(!!ge.ScrollTrigger.isTouch), [i, l, u, a, h, f, m, s, r, c, z, g]
}
class Yn extends W {
    constructor(e) {
        super(), B(this, e, An, Mn, O, {})
    }
}
export {
    Yn as component
};
