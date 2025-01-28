import {
    a as ne,
    p as z,
    n as C,
    o as pe,
    b as B
} from "../chunks/index.BH183J0c.js";
import {
    S as re,
    i as se,
    e as $,
    s as _,
    c as g,
    a as te,
    j as w,
    d as p,
    b as i,
    f as A,
    k as c,
    g as v,
    G as ce,
    h as T,
    m as E,
    t as y,
    l as U,
    n as x,
    o as $e,
    p as ge
} from "../chunks/index.B5pbiKnB.js";
import {
    S as be,
    A as he,
    V as J,
    C as de,
    N as _e,
    a as q
} from "../chunks/About.C9eXd_AH.js";
import {
    g as Q
} from "../chunks/gsap.BWqxc2AZ.js";
import {
    h as we,
    a as ve,
    b as Te
} from "../chunks/home_deliverables_deliverable8_title.DoMB6qvj.js";
import {
    l as ee
} from "../chunks/i18n.uwWGOJCB.js";
const Ee = () => "CRFTD - Ubuntu",
    ye = () => "CRFTD - Ubuntu",
    me = (l = {}, e = {}) => ({
        en: ye,
        nl: Ee
    })[e.languageTag ?? ee()](),
    Ue = () => "A new dream in Bali – dat is wat Ubuntu belooft. CRFTD realiseerde in opdracht hiervoor een verbluffende website.",
    xe = () => "A new dream in Bali – that’s what Ubuntu promises. CRFTD brought this vision to life with a stunning website.",
    fe = (l = {}, e = {}) => ({
        en: xe,
        nl: Ue
    })[e.languageTag ?? ee()](),
    Ae = () => "Een tweede huis in Bali? Is dat geen droom van iedereen? Ubuntu maakt deze droom werkelijkheid. En aan ons de uitdagende vraag deze droom te visualiseren en uit te werken tot een high-end website. De enige eis: de website moet verbluffend goed zijn. En als we het mogen zeggen; dat is ons aardig gelukt.",
    Re = () => "A second home in Bali? Isn’t that everyone’s dream? Ubuntu makes this dream a reality. And we were given the exciting challenge to visualize and transform this dream into a high-end website. The only requirement: the website had to be stunning. And if we may say so ourselves, we think we nailed it.",
    Ce = (l = {}, e = {}) => ({
        en: Re,
        nl: Ae
    })[e.languageTag ?? ee()](),
    ke = () => "Een website met precies de juiste sfeer. Met precies de juiste beelden. En natuurlijk met precies de juiste animaties. Zoeken naar balans. Zoeken naar de perfectie. Dat is altijd onze visie. En dat was het ook voor Ubuntu.",
    Le = () => "A website with just the right atmosphere. With just the right visuals. And, of course, with just the right animations. Finding balance. Striving for perfection. That’s always our vision. And it was no different for Ubuntu.",
    Me = (l = {}, e = {}) => ({
        en: Le,
        nl: ke
    })[e.languageTag ?? ee()](),
    je = "" + new URL("../assets/ubuntu_11.DhpPGOEX.webp", import.meta.url).href,
    De = "" + new URL("../assets/ubuntu_10.CRGnme6W.webp", import.meta.url).href;

function Ie(l) {
    let e, s, r, u, n, o, d;
    return {
        c() {
            e = $("section"), s = $("img"), u = _(), n = $("div"), o = $("img"), this.h()
        },
        l(m) {
            e = g(m, "SECTION", {
                class: !0
            });
            var b = te(e);
            s = g(b, "IMG", {
                src: !0,
                alt: !0
            }), u = w(b), n = g(b, "DIV", {
                class: !0
            });
            var f = te(n);
            o = g(f, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), f.forEach(p), b.forEach(p), this.h()
        },
        h() {
            z(s.src, r = De) || i(s, "src", r), i(s, "alt", ""), z(o.src, d = je) || i(o, "src", d), i(o, "alt", ""), i(o, "class", ""), i(n, "class", "absolute left-0 top-1/2 w-[140vw] -translate-y-1/2"), i(e, "class", "module-ubuntu-pool relative overflow-hidden")
        },
        m(m, b) {
            A(m, e, b), c(e, s), c(e, u), c(e, n), c(n, o), l[2](o), l[3](e)
        },
        p: C,
        i: C,
        o: C,
        d(m) {
            m && p(e), l[2](null), l[3](null)
        }
    }
}

function Se(l, e, s) {
    let r, u;
    const n = () => {
        Q.to(u, {
            xPercent: -20,
            scrollTrigger: {
                trigger: u,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        })
    };
    pe(() => {
        let m = Q.context(() => {
            n()
        }, r);
        return () => m.revert()
    });

    function o(m) {
        B[m ? "unshift" : "push"](() => {
            u = m, s(1, u)
        })
    }

    function d(m) {
        B[m ? "unshift" : "push"](() => {
            r = m, s(0, r)
        })
    }
    return [r, u, o, d]
}
class Ge extends re {
    constructor(e) {
        super(), se(this, e, Se, Ie, ne, {})
    }
}
const Fe = "" + new URL("../assets/ubuntu_9.DjLtYWn8.webp", import.meta.url).href,
    Pe = "" + new URL("../assets/ubuntu_8.CxT6zmvq.webp", import.meta.url).href,
    qe = "" + new URL("../assets/ubuntu_7.DZm8r5OE.webp", import.meta.url).href,
    ze = "" + new URL("../assets/ubuntu_6.CdBluxTE.webp", import.meta.url).href;

function Be(l) {
    let e, s, r, u, n, o, d, m, b, f, R, k;
    return {
        c() {
            e = $("section"), s = $("img"), u = _(), n = $("img"), d = _(), m = $("img"), f = _(), R = $("img"), this.h()
        },
        l(L) {
            e = g(L, "SECTION", {
                class: !0
            });
            var h = te(e);
            s = g(h, "IMG", {
                class: !0,
                src: !0,
                alt: !0
            }), u = w(h), n = g(h, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), d = w(h), m = g(h, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), f = w(h), R = g(h, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), h.forEach(p), this.h()
        },
        h() {
            i(s, "class", "absolute top-0 h-full w-full"), z(s.src, r = ze) || i(s, "src", r), i(s, "alt", ""), z(n.src, o = qe) || i(n, "src", o), i(n, "alt", ""), i(n, "class", "absolute left-0 top-0 w-[60vw] l:w-[40vw] max-l:-translate-x-[10%]"), z(m.src, b = Pe) || i(m, "src", b), i(m, "alt", ""), i(m, "class", "absolute bottom-0 left-1/2 w-[60vw] -translate-x-1/3 l:w-[40vw] max-l:-translate-x-[36%]"), z(R.src, k = Fe) || i(R, "src", k), i(R, "alt", ""), i(R, "class", "absolute right-0 top-1/2 w-[60vw] -translate-y-1/2 translate-x-[40%] l:w-[40vw]"), i(e, "class", "module-ubuntu-phones relative h-[80vh] overflow-hidden l:h-[140vh]")
        },
        m(L, h) {
            A(L, e, h), c(e, s), c(e, u), c(e, n), l[2](n), c(e, d), c(e, m), l[3](m), c(e, f), c(e, R), l[4](R), l[5](e)
        },
        p: C,
        i: C,
        o: C,
        d(L) {
            L && p(e), l[2](null), l[3](null), l[4](null), l[5](null)
        }
    }
}

function Ve(l, e, s) {
    let r, u = [];
    const n = () => {
        let f = Q.timeline({
            scrollTrigger: {
                trigger: r,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });
        f.to(u[0], {
            yPercent: 24,
            duration: 1
        }), f.to(u[1], {
            yPercent: -16,
            duration: 1
        }, "<"), f.to(u[2], {
            yPercent: -8,
            duration: 1
        }, "<")
    };
    pe(() => {
        let f = Q.context(() => {
            n()
        }, r);
        return () => f.revert()
    });

    function o(f) {
        B[f ? "unshift" : "push"](() => {
            u[0] = f, s(1, u)
        })
    }

    function d(f) {
        B[f ? "unshift" : "push"](() => {
            u[1] = f, s(1, u)
        })
    }

    function m(f) {
        B[f ? "unshift" : "push"](() => {
            u[2] = f, s(1, u)
        })
    }

    function b(f) {
        B[f ? "unshift" : "push"](() => {
            r = f, s(0, r)
        })
    }
    return [r, u, o, d, m, b]
}
class Ne extends re {
    constructor(e) {
        super(), se(this, e, Ve, Be, ne, {})
    }
}
const Oe = "" + new URL("../assets/ubuntu_hero.CA_4FmsO.jpg", import.meta.url).href,
    We = "" + new URL("../assets/ubuntu_15.AwvPGLmq.webp", import.meta.url).href,
    Ze = "" + new URL("../assets/ubuntu_14.uV7B8Agn.webp", import.meta.url).href,
    Ke = "" + new URL("../assets/ubuntu_13.DjVc6HSk.webp", import.meta.url).href,
    Xe = "" + new URL("../assets/ubuntu_12.DpF2nKMC.webp", import.meta.url).href,
    He = "" + new URL("../assets/ubuntu_3.y7eC6qoa.webp", import.meta.url).href,
    Ye = "" + new URL("../assets/ubuntu_2.BLyfS9Xj.webp", import.meta.url).href,
    Je = "" + new URL("../assets/ubuntu_1.DlZo4ufV.webp", import.meta.url).href;

function Qe(l) {
    let e, s, r, u;
    return e = new q({
        props: {
            visual: {
                src: Je,
                alt: ""
            },
            span: "6",
            height: "auto"
        }
    }), r = new q({
        props: {
            visual: {
                src: Ye,
                alt: ""
            },
            span: "6",
            height: "auto"
        }
    }), {
        c() {
            v(e.$$.fragment), s = _(), v(r.$$.fragment)
        },
        l(n) {
            T(e.$$.fragment, n), s = w(n), T(r.$$.fragment, n)
        },
        m(n, o) {
            E(e, n, o), A(n, s, o), E(r, n, o), u = !0
        },
        p: C,
        i(n) {
            u || (y(e.$$.fragment, n), y(r.$$.fragment, n), u = !0)
        },
        o(n) {
            U(e.$$.fragment, n), U(r.$$.fragment, n), u = !1
        },
        d(n) {
            n && p(s), x(e, n), x(r, n)
        }
    }
}

function et(l) {
    let e, s, r, u;
    return e = new q({
        props: {
            video: "https://player.vimeo.com/progressive_redirect/playback/1019608574/rendition/2160p/file.mp4?loc=external&signature=c5aad386fb1435f90d6e183ed194da8761f444ce5e31a7a0ac151535c8df3464",
            span: "8",
            height: "auto"
        }
    }), r = new q({
        props: {
            video: "https://player.vimeo.com/progressive_redirect/playback/1019607702/rendition/1440p/file.mp4?loc=external&signature=4bd6928256a9e3deceac1507a3cd704584614fba6a51e2f1763a791fac8b2c85",
            span: "8",
            height: "auto"
        }
    }), {
        c() {
            v(e.$$.fragment), s = _(), v(r.$$.fragment)
        },
        l(n) {
            T(e.$$.fragment, n), s = w(n), T(r.$$.fragment, n)
        },
        m(n, o) {
            E(e, n, o), A(n, s, o), E(r, n, o), u = !0
        },
        p: C,
        i(n) {
            u || (y(e.$$.fragment, n), y(r.$$.fragment, n), u = !0)
        },
        o(n) {
            U(e.$$.fragment, n), U(r.$$.fragment, n), u = !1
        },
        d(n) {
            n && p(s), x(e, n), x(r, n)
        }
    }
}

function tt(l) {
    let e = Me() + "",
        s;
    return {
        c() {
            s = $e(e)
        },
        l(r) {
            s = ge(r, e)
        },
        m(r, u) {
            A(r, s, u)
        },
        p: C,
        d(r) {
            r && p(s)
        }
    }
}

function nt(l) {
    let e, s, r, u;
    return e = new q({
        props: {
            visual: {
                src: Xe,
                alt: ""
            },
            span: "6",
            height: "auto"
        }
    }), r = new q({
        props: {
            visual: {
                src: Ke,
                alt: ""
            },
            span: "6",
            height: "auto"
        }
    }), {
        c() {
            v(e.$$.fragment), s = _(), v(r.$$.fragment)
        },
        l(n) {
            T(e.$$.fragment, n), s = w(n), T(r.$$.fragment, n)
        },
        m(n, o) {
            E(e, n, o), A(n, s, o), E(r, n, o), u = !0
        },
        p: C,
        i(n) {
            u || (y(e.$$.fragment, n), y(r.$$.fragment, n), u = !0)
        },
        o(n) {
            U(e.$$.fragment, n), U(r.$$.fragment, n), u = !1
        },
        d(n) {
            n && p(s), x(e, n), x(r, n)
        }
    }
}

function rt(l) {
    let e, s;
    return e = new q({
        props: {
            visual: {
                src: We,
                alt: ""
            },
            span: "8",
            height: "auto"
        }
    }), {
        c() {
            v(e.$$.fragment)
        },
        l(r) {
            T(e.$$.fragment, r)
        },
        m(r, u) {
            E(e, r, u), s = !0
        },
        p: C,
        i(r) {
            s || (y(e.$$.fragment, r), s = !0)
        },
        o(r) {
            U(e.$$.fragment, r), s = !1
        },
        d(r) {
            x(e, r)
        }
    }
}

function st(l) {
    let e, s, r, u, n, o, d, m, b, f, R, k, L, h, V, M, N, j, O, G, W, F, Z, D, K, I, X, S, H, P, Y;
    return document.title = me(), k = new be({
        props: {
            thumbnail: {
                src: Oe,
                alt: "Ubuntu hero"
            },
            title: ["Ubuntu"]
        }
    }), h = new he({
        props: {
            content: Ce(),
            tags: [we(), ve(), Te()]
        }
    }), M = new J({
        props: {
            spacing: "grid-b",
            $$slots: {
                default: [Qe]
            },
            $$scope: {
                ctx: l
            }
        }
    }), j = new J({
        props: {
            visual: {
                src: He,
                alt: ""
            },
            spacing: "5xl",
            gap: "5xl",
            $$slots: {
                default: [et]
            },
            $$scope: {
                ctx: l
            }
        }
    }), G = new Ne({}), F = new Ge({}), D = new de({
        props: {
            $$slots: {
                default: [tt]
            },
            $$scope: {
                ctx: l
            }
        }
    }), I = new J({
        props: {
            spacing: "grid-b",
            $$slots: {
                default: [nt]
            },
            $$scope: {
                ctx: l
            }
        }
    }), S = new J({
        props: {
            visual: {
                src: Ze,
                alt: ""
            },
            spacing: "5xl",
            $$slots: {
                default: [rt]
            },
            $$scope: {
                ctx: l
            }
        }
    }), P = new _e({
        props: {
            nextCaseIndex: 1
        }
    }), {
        c() {
            e = $("meta"), s = $("meta"), r = $("meta"), u = $("meta"), n = $("meta"), o = $("meta"), d = $("meta"), m = $("link"), b = $("meta"), f = $("meta"), R = _(), v(k.$$.fragment), L = _(), v(h.$$.fragment), V = _(), v(M.$$.fragment), N = _(), v(j.$$.fragment), O = _(), v(G.$$.fragment), W = _(), v(F.$$.fragment), Z = _(), v(D.$$.fragment), K = _(), v(I.$$.fragment), X = _(), v(S.$$.fragment), H = _(), v(P.$$.fragment), this.h()
        },
        l(t) {
            const a = ce("svelte-qigy4i", document.head);
            e = g(a, "META", {
                name: !0,
                content: !0
            }), s = g(a, "META", {
                property: !0,
                content: !0
            }), r = g(a, "META", {
                property: !0,
                content: !0
            }), u = g(a, "META", {
                property: !0,
                content: !0
            }), n = g(a, "META", {
                property: !0,
                content: !0
            }), o = g(a, "META", {
                property: !0,
                content: !0
            }), d = g(a, "META", {
                property: !0,
                content: !0
            }), m = g(a, "LINK", {
                rel: !0,
                href: !0
            }), b = g(a, "META", {
                name: !0,
                content: !0
            }), f = g(a, "META", {
                name: !0,
                content: !0
            }), a.forEach(p), R = w(t), T(k.$$.fragment, t), L = w(t), T(h.$$.fragment, t), V = w(t), T(M.$$.fragment, t), N = w(t), T(j.$$.fragment, t), O = w(t), T(G.$$.fragment, t), W = w(t), T(F.$$.fragment, t), Z = w(t), T(D.$$.fragment, t), K = w(t), T(I.$$.fragment, t), X = w(t), T(S.$$.fragment, t), H = w(t), T(P.$$.fragment, t), this.h()
        },
        h() {
            i(e, "name", "description"), i(e, "content", fe()), i(s, "property", "og:type"), i(s, "content", "article"), i(r, "property", "og:title"), i(r, "content", me()), i(u, "property", "og:description"), i(u, "content", fe()), i(n, "property", "og:url"), i(n, "content", "https://www.crftd.nl/ubuntu"), i(o, "property", "og:image"), i(o, "content", "/opengraph/crftd-og-image.png"), i(d, "property", "og:site_name"), i(d, "content", "CRFTD"), i(m, "rel", "canonical"), i(m, "href", "https://www.crftd.nl/ubuntu"), i(b, "name", "robots"), i(b, "content", "index, follow"), i(f, "name", "author"), i(f, "content", "CRFTD")
        },
        m(t, a) {
            c(document.head, e), c(document.head, s), c(document.head, r), c(document.head, u), c(document.head, n), c(document.head, o), c(document.head, d), c(document.head, m), c(document.head, b), c(document.head, f), A(t, R, a), E(k, t, a), A(t, L, a), E(h, t, a), A(t, V, a), E(M, t, a), A(t, N, a), E(j, t, a), A(t, O, a), E(G, t, a), A(t, W, a), E(F, t, a), A(t, Z, a), E(D, t, a), A(t, K, a), E(I, t, a), A(t, X, a), E(S, t, a), A(t, H, a), E(P, t, a), Y = !0
        },
        p(t, [a]) {
            const ue = {};
            a & 1 && (ue.$$scope = {
                dirty: a,
                ctx: t
            }), M.$set(ue);
            const ae = {};
            a & 1 && (ae.$$scope = {
                dirty: a,
                ctx: t
            }), j.$set(ae);
            const ie = {};
            a & 1 && (ie.$$scope = {
                dirty: a,
                ctx: t
            }), D.$set(ie);
            const oe = {};
            a & 1 && (oe.$$scope = {
                dirty: a,
                ctx: t
            }), I.$set(oe);
            const le = {};
            a & 1 && (le.$$scope = {
                dirty: a,
                ctx: t
            }), S.$set(le)
        },
        i(t) {
            Y || (y(k.$$.fragment, t), y(h.$$.fragment, t), y(M.$$.fragment, t), y(j.$$.fragment, t), y(G.$$.fragment, t), y(F.$$.fragment, t), y(D.$$.fragment, t), y(I.$$.fragment, t), y(S.$$.fragment, t), y(P.$$.fragment, t), Y = !0)
        },
        o(t) {
            U(k.$$.fragment, t), U(h.$$.fragment, t), U(M.$$.fragment, t), U(j.$$.fragment, t), U(G.$$.fragment, t), U(F.$$.fragment, t), U(D.$$.fragment, t), U(I.$$.fragment, t), U(S.$$.fragment, t), U(P.$$.fragment, t), Y = !1
        },
        d(t) {
            t && (p(R), p(L), p(V), p(N), p(O), p(W), p(Z), p(K), p(X), p(H)), p(e), p(s), p(r), p(u), p(n), p(o), p(d), p(m), p(b), p(f), x(k, t), x(h, t), x(M, t), x(j, t), x(G, t), x(F, t), x(D, t), x(I, t), x(S, t), x(P, t)
        }
    }
}
class ft extends re {
    constructor(e) {
        super(), se(this, e, null, st, ne, {})
    }
}
export {
    ft as component
};
