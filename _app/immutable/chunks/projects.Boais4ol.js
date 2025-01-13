import {
    a as x,
    j as $,
    u as ee,
    k as te,
    l as ae,
    c as re,
    o as le,
    b as A,
    n as Z,
    p as U,
    e as ne
} from "./index.BH183J0c.js";
import {
    S as G,
    i as H,
    e as k,
    c as T,
    a as v,
    d as f,
    b as i,
    f as V,
    t as S,
    l as C,
    E as j,
    F as z,
    k as p,
    s as D,
    o as se,
    g as Q,
    j as L,
    p as oe,
    h as W,
    u as M,
    m as K,
    x as ue,
    C as ie,
    z as ce,
    B as ge,
    n as X
} from "./index.B5pbiKnB.js";
import {
    r as _e,
    g as q,
    S as me
} from "./gsap.BWqxc2AZ.js";
import {
    T as he,
    a as fe
} from "./TitleReveal.SbfJCpuF.js";
import {
    l as B
} from "./i18n.uwWGOJCB.js";
const de = () => "Ubuntu hero",
    pe = () => "Ubuntu hero",
    be = (a = {}, e = {}) => ({
        en: pe,
        nl: de
    })[e.languageTag ?? B()](),
    ve = () => "VenturEdge hero",
    we = () => "VenturEdge hero",
    Ee = (a = {}, e = {}) => ({
        en: we,
        nl: ve
    })[e.languageTag ?? B()](),
    ke = () => "Verdrag hero",
    Te = () => "Verdrag hero",
    Ie = (a = {}, e = {}) => ({
        en: Te,
        nl: ke
    })[e.languageTag ?? B()](),
    ye = () => "Digitale experience",
    Se = () => "Digital experience",
    Ve = (a = {}, e = {}) => ({
        en: Se,
        nl: ye
    })[e.languageTag ?? B()](),
    Be = () => "Brand identity",
    Ce = () => "Brand identity",
    Pe = (a = {}, e = {}) => ({
        en: Ce,
        nl: Be
    })[e.languageTag ?? B()](),
    Re = () => "Event design",
    Ue = () => "Event design",
    je = (a = {}, e = {}) => ({
        en: Ue,
        nl: Re
    })[e.languageTag ?? B()]();

function ze(a) {
    let e, t;
    const n = a[5].default,
        l = $(n, a, a[4], null);
    return {
        c() {
            e = k("p"), l && l.c(), this.h()
        },
        l(r) {
            e = T(r, "P", {
                class: !0
            });
            var s = v(e);
            l && l.l(s), s.forEach(f), this.h()
        },
        h() {
            i(e, "class", "body-xl")
        },
        m(r, s) {
            V(r, e, s), l && l.m(e, null), a[6](e), t = !0
        },
        p(r, [s]) {
            l && l.p && (!t || s & 16) && ee(l, n, r, r[4], t ? ae(n, r[4], s, null) : te(r[4]), null)
        },
        i(r) {
            t || (S(l, r), t = !0)
        },
        o(r) {
            C(l, r), t = !1
        },
        d(r) {
            r && f(e), l && l.d(r), a[6](null)
        }
    }
}

function De(a, e, t) {
    let n;
    re(a, _e, c => t(3, n = c));
    let {
        $$slots: l = {},
        $$scope: r
    } = e, s, m = !1, h;
    const w = () => {
        t(2, h = new me.SplitText(s, {
            tag: "span",
            type: "lines"
        })), q.from(h.lines, {
            duration: .64,
            opacity: 0,
            stagger: .04,
            yPercent: 64,
            scrollTrigger: {
                start: "top 80%",
                trigger: s
            }
        })
    };
    le(() => {
        t(1, m = !0);
        let c = q.context(() => {
            w()
        }, s);
        return () => c.revert()
    });

    function I(c) {
        A[c ? "unshift" : "push"](() => {
            s = c, t(0, s)
        })
    }
    return a.$$set = c => {
        "$$scope" in c && t(4, r = c.$$scope)
    }, a.$$.update = () => {
        a.$$.dirty & 15 && (!n && m ? (h.revert(), w()) : n && q.set(s, {
            autoAlpha: 0
        }))
    }, [s, m, h, n, r, l, I]
}
class Je extends G {
    constructor(e) {
        super(), H(this, e, De, ze, x, {})
    }
}

function Le(a) {
    let e, t, n, l;
    return {
        c() {
            e = j("svg"), t = j("path"), n = j("path"), l = j("path"), this.h()
        },
        l(r) {
            e = z(r, "svg", {
                xmlns: !0,
                viewBox: !0
            });
            var s = v(e);
            t = z(s, "path", {
                d: !0
            }), v(t).forEach(f), n = z(s, "path", {
                d: !0
            }), v(n).forEach(f), l = z(s, "path", {
                d: !0
            }), v(l).forEach(f), s.forEach(f), this.h()
        },
        h() {
            i(t, "d", "m1350 0-270 270h540V0Z"), i(n, "d", "M270 270 0 540v540h270l270-270H270V540h540l270-270Z"), i(l, "d", "m540 810 270-270h540v270Z"), i(e, "xmlns", "http://www.w3.org/2000/svg"), i(e, "viewBox", "0 0 1620 1080")
        },
        m(r, s) {
            V(r, e, s), p(e, t), p(e, n), p(e, l), a[1](e)
        },
        p: Z,
        i: Z,
        o: Z,
        d(r) {
            r && f(e), a[1](null)
        }
    }
}

function Me(a, e, t) {
    let {
        logoEl: n
    } = e;

    function l(r) {
        A[r ? "unshift" : "push"](() => {
            n = r, t(0, n)
        })
    }
    return a.$$set = r => {
        "logoEl" in r && t(0, n = r.logoEl)
    }, [n, l]
}
class Qe extends G {
    constructor(e) {
        super(), H(this, e, Me, Le, x, {
            logoEl: 0
        })
    }
}

function J(a) {
    let e, t, n;
    return t = new fe({
        props: {
            content: ["Soon..."],
            size: "xl",
            theme: "white"
        }
    }), {
        c() {
            e = k("div"), Q(t.$$.fragment), this.h()
        },
        l(l) {
            e = T(l, "DIV", {
                class: !0
            });
            var r = v(e);
            W(t.$$.fragment, r), r.forEach(f), this.h()
        },
        h() {
            i(e, "class", "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full rotate-6 transition-transform duration-200 ease-in-out group-hover:scale-105")
        },
        m(l, r) {
            V(l, e, r), K(t, e, null), n = !0
        },
        i(l) {
            n || (S(t.$$.fragment, l), n = !0)
        },
        o(l) {
            C(t.$$.fragment, l), n = !1
        },
        d(l) {
            l && f(e), X(t)
        }
    }
}

function Ae(a) {
    let e, t, n, l, r, s, m, h, w, I, c, o, E, b, P, R, d, N, O, _ = a[5] && J();
    return c = new he({
        props: {
            content: [a[4]],
            size: "xs"
        }
    }), {
        c() {
            e = k("button"), t = k("img"), r = D(), _ && _.c(), s = D(), m = k("div"), h = k("p"), w = se(a[3]), I = D(), Q(c.$$.fragment), o = D(), E = k("div"), b = k("img"), this.h()
        },
        l(u) {
            e = T(u, "BUTTON", {
                class: !0
            });
            var g = v(e);
            t = T(g, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), r = L(g), _ && _.l(g), s = L(g), m = T(g, "DIV", {
                class: !0
            });
            var y = v(m);
            h = T(y, "P", {
                class: !0
            });
            var Y = v(h);
            w = oe(Y, a[3]), Y.forEach(f), I = L(y), W(c.$$.fragment, y), y.forEach(f), g.forEach(f), o = L(u), E = T(u, "DIV", {
                class: !0
            });
            var F = v(E);
            b = T(F, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), F.forEach(f), this.h()
        },
        h() {
            U(t.src, n = a[2].src) || i(t, "src", n), i(t, "alt", l = a[2].alt), i(t, "class", "aspect-[29/34] h-full w-full object-cover"), M(t, "grayscale", a[5]), i(h, "class", "body-l"), i(m, "class", "flex flex-col items-start gap-y-fluid-2xs"), i(e, "class", "clipped-corner-top-left-m group relative flex flex-col gap-y-fluid-2xs"), M(e, "cursor-default", a[5]), U(b.src, P = a[2].src) || i(b, "src", P), i(b, "alt", R = a[2].alt), i(b, "class", "h-full w-full object-cover"), i(E, "class", "clipped-corner-top-left-m fixed z-20 hidden")
        },
        m(u, g) {
            V(u, e, g), p(e, t), a[7](t), p(e, r), _ && _.m(e, null), p(e, s), p(e, m), p(m, h), p(h, w), p(m, I), K(c, m, null), V(u, o, g), V(u, E, g), p(E, b), a[8](E), d = !0, N || (O = ue(e, "click", a[6]), N = !0)
        },
        p(u, [g]) {
            (!d || g & 4 && !U(t.src, n = u[2].src)) && i(t, "src", n), (!d || g & 4 && l !== (l = u[2].alt)) && i(t, "alt", l), (!d || g & 32) && M(t, "grayscale", u[5]), u[5] ? _ ? g & 32 && S(_, 1) : (_ = J(), _.c(), S(_, 1), _.m(e, s)) : _ && (ie(), C(_, 1, 1, () => {
                _ = null
            }), ce()), (!d || g & 8) && ge(w, u[3]);
            const y = {};
            g & 16 && (y.content = [u[4]]), c.$set(y), (!d || g & 32) && M(e, "cursor-default", u[5]), (!d || g & 4 && !U(b.src, P = u[2].src)) && i(b, "src", P), (!d || g & 4 && R !== (R = u[2].alt)) && i(b, "alt", R)
        },
        i(u) {
            d || (S(_), S(c.$$.fragment, u), d = !0)
        },
        o(u) {
            C(_), C(c.$$.fragment, u), d = !1
        },
        d(u) {
            u && (f(e), f(o), f(E)), a[7](null), _ && _.d(), X(c), a[8](null), N = !1, O()
        }
    }
}

function Ne(a, e, t) {
    let {
        thumbnail: n
    } = e, {
        title: l
    } = e, {
        tag: r
    } = e, {
        soon: s = !1
    } = e, {
        cardImageEl: m
    } = e, {
        overlayCardImageEl: h
    } = e;

    function w(o) {
        ne.call(this, a, o)
    }

    function I(o) {
        A[o ? "unshift" : "push"](() => {
            m = o, t(0, m)
        })
    }

    function c(o) {
        A[o ? "unshift" : "push"](() => {
            h = o, t(1, h)
        })
    }
    return a.$$set = o => {
        "thumbnail" in o && t(2, n = o.thumbnail), "title" in o && t(3, l = o.title), "tag" in o && t(4, r = o.tag), "soon" in o && t(5, s = o.soon), "cardImageEl" in o && t(0, m = o.cardImageEl), "overlayCardImageEl" in o && t(1, h = o.overlayCardImageEl)
    }, [m, h, n, l, r, s, w, I, c]
}
class We extends G {
    constructor(e) {
        super(), H(this, e, Ne, Ae, x, {
            thumbnail: 2,
            title: 3,
            tag: 4,
            soon: 5,
            cardImageEl: 0,
            overlayCardImageEl: 1
        })
    }
}
const Ze = "" + new URL("../assets/ubuntu_hero.Bvs7Bp0R.webp", import.meta.url).href,
    qe = "" + new URL("../assets/venturedge_hero.QYNgp7N7.webp", import.meta.url).href,
    xe = "" + new URL("../assets/verdrag_hero.DwHEYj7R.webp", import.meta.url).href,
    Ke = () => [{
        thumbnail: {
            src: Ze,
            alt: be()
        },
        title: "Ubuntu",
        tag: Ve(),
        href: "ubuntu"
    }, {
        thumbnail: {
            src: qe,
            alt: Ee()
        },
        title: "VenturEdge",
        tag: Pe(),
        href: "venturedge"
    }, {
        thumbnail: {
            src: xe,
            alt: Ie()
        },
        title: "Verdrag",
        tag: je(),
        href: "verdrag"
    }];
export {
    Je as A, Qe as L, Ke as P, We as a
};
