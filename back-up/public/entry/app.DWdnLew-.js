const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["../nodes/0.CPFv6uHc.js", "../chunks/index.BH183J0c.js", "../chunks/index.B5pbiKnB.js", "../chunks/entry.B4BmtFq6.js", "../chunks/breakpoints.BCNGKaRn.js", "../chunks/i18n.uwWGOJCB.js", "../chunks/constants.CasMNmVQ.js", "../chunks/gsap.BWqxc2AZ.js", "../chunks/app.Cgy8eObc.js", "../chunks/colors.opdJjroO.js", "../chunks/index.CF638lXu.js", "../chunks/spread.CgU5AtxT.js", "../assets/0.gJ67KABk.css", "../nodes/1.BUKQbDvp.js", "../chunks/TitleReveal.SbfJCpuF.js", "../chunks/ButtonMain.CRjQBOiX.js", "../nodes/2.GMaG4D7Q.js", "../chunks/projects.Boais4ol.js", "../chunks/home_deliverables_deliverable6_title.DwVE39EO.js", "../chunks/home_deliverables_deliverable8_title.DoMB6qvj.js", "../chunks/index.CL_j1bBv.js", "../assets/index.CCahpbvf.css", "../assets/2.BmrytFrW.css", "../nodes/3.BeYMSaQu.js", "../nodes/4.She38kw0.js", "../chunks/About.C9eXd_AH.js", "../nodes/5.Csv0sc3V.js"]))) => i.map(i => d[i]);
import { i as B } from "../chunks/i18n.uwWGOJCB.js";
import { a as N, m as U, o as j, b as I, t as z } from "../chunks/index.BH183J0c.js";
import { S as W, i as F, s as G, q as h, j as H, f as E, l as p, z as D, t as g, d as w, e as J, c as K, a as Q, b as O, A as d, o as X, p as Y, B as Z, C as S, D as P, g as R, h as T, m as L, n as A } from "../chunks/index.B5pbiKnB.js";
const M = "modulepreload"
    , $ = function (o, e) {
        return new URL(o, e).href
    }
    , V = {}
    , y = function (e, n, r) {
        let s = Promise.resolve();
        if (n && n.length > 0) {
            const t = document.getElementsByTagName("link")
                , i = document.querySelector("meta[property=csp-nonce]")
                , l = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
            s = Promise.allSettled(n.map(f => {
                if (f = $(f, r),
                    f in V)
                    return;
                V[f] = !0;
                const a = f.endsWith(".css")
                    , _ = a ? '[rel="stylesheet"]' : "";
                if (!!r)
                    for (let k = t.length - 1; k >= 0; k--) {
                        const v = t[k];
                        if (v.href === f && (!a || v.rel === "stylesheet"))
                            return
                    }
                else if (document.querySelector(`link[href="${f}"]${_}`))
                    return;
                const m = document.createElement("link");
                if (m.rel = a ? "stylesheet" : M,
                    a || (m.as = "script"),
                    m.crossOrigin = "",
                    m.href = f,
                    l && m.setAttribute("nonce", l),
                    document.head.appendChild(m),
                    a)
                    return new Promise((k, v) => {
                        m.addEventListener("load", k),
                            m.addEventListener("error", () => v(new Error(`Unable to preload CSS for ${f}`)))
                    }
                    )
            }
            ))
        }
        function u(t) {
            const i = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (i.payload = t,
                window.dispatchEvent(i),
                !i.defaultPrevented)
                throw t
        }
        return s.then(t => {
            for (const i of t || [])
                i.status === "rejected" && u(i.reason);
            return e().catch(u)
        }
        )
    }
    , x = B.reroute()
    , le = {};
function ee(o) {
    let e, n, r;
    var s = o[1][0];
    function u(t, i) {
        return {
            props: {
                data: t[3],
                form: t[2]
            }
        }
    }
    return s && (e = P(s, u(o)),
        o[12](e)),
    {
        c() {
            e && R(e.$$.fragment),
                n = h()
        },
        l(t) {
            e && T(e.$$.fragment, t),
                n = h()
        },
        m(t, i) {
            e && L(e, t, i),
                E(t, n, i),
                r = !0
        },
        p(t, i) {
            if (i & 2 && s !== (s = t[1][0])) {
                if (e) {
                    S();
                    const l = e;
                    p(l.$$.fragment, 1, 0, () => {
                        A(l, 1)
                    }
                    ),
                        D()
                }
                s ? (e = P(s, u(t)),
                    t[12](e),
                    R(e.$$.fragment),
                    g(e.$$.fragment, 1),
                    L(e, n.parentNode, n)) : e = null
            } else if (s) {
                const l = {};
                i & 8 && (l.data = t[3]),
                    i & 4 && (l.form = t[2]),
                    e.$set(l)
            }
        },
        i(t) {
            r || (e && g(e.$$.fragment, t),
                r = !0)
        },
        o(t) {
            e && p(e.$$.fragment, t),
                r = !1
        },
        d(t) {
            t && w(n),
                o[12](null),
                e && A(e, t)
        }
    }
}
function te(o) {
    let e, n, r;
    var s = o[1][0];
    function u(t, i) {
        return {
            props: {
                data: t[3],
                $$slots: {
                    default: [ne]
                },
                $$scope: {
                    ctx: t
                }
            }
        }
    }
    return s && (e = P(s, u(o)),
        o[11](e)),
    {
        c() {
            e && R(e.$$.fragment),
                n = h()
        },
        l(t) {
            e && T(e.$$.fragment, t),
                n = h()
        },
        m(t, i) {
            e && L(e, t, i),
                E(t, n, i),
                r = !0
        },
        p(t, i) {
            if (i & 2 && s !== (s = t[1][0])) {
                if (e) {
                    S();
                    const l = e;
                    p(l.$$.fragment, 1, 0, () => {
                        A(l, 1)
                    }
                    ),
                        D()
                }
                s ? (e = P(s, u(t)),
                    t[11](e),
                    R(e.$$.fragment),
                    g(e.$$.fragment, 1),
                    L(e, n.parentNode, n)) : e = null
            } else if (s) {
                const l = {};
                i & 8 && (l.data = t[3]),
                    i & 8215 && (l.$$scope = {
                        dirty: i,
                        ctx: t
                    }),
                    e.$set(l)
            }
        },
        i(t) {
            r || (e && g(e.$$.fragment, t),
                r = !0)
        },
        o(t) {
            e && p(e.$$.fragment, t),
                r = !1
        },
        d(t) {
            t && w(n),
                o[11](null),
                e && A(e, t)
        }
    }
}
function ne(o) {
    let e, n, r;
    var s = o[1][1];
    function u(t, i) {
        return {
            props: {
                data: t[4],
                form: t[2]
            }
        }
    }
    return s && (e = P(s, u(o)),
        o[10](e)),
    {
        c() {
            e && R(e.$$.fragment),
                n = h()
        },
        l(t) {
            e && T(e.$$.fragment, t),
                n = h()
        },
        m(t, i) {
            e && L(e, t, i),
                E(t, n, i),
                r = !0
        },
        p(t, i) {
            if (i & 2 && s !== (s = t[1][1])) {
                if (e) {
                    S();
                    const l = e;
                    p(l.$$.fragment, 1, 0, () => {
                        A(l, 1)
                    }
                    ),
                        D()
                }
                s ? (e = P(s, u(t)),
                    t[10](e),
                    R(e.$$.fragment),
                    g(e.$$.fragment, 1),
                    L(e, n.parentNode, n)) : e = null
            } else if (s) {
                const l = {};
                i & 16 && (l.data = t[4]),
                    i & 4 && (l.form = t[2]),
                    e.$set(l)
            }
        },
        i(t) {
            r || (e && g(e.$$.fragment, t),
                r = !0)
        },
        o(t) {
            e && p(e.$$.fragment, t),
                r = !1
        },
        d(t) {
            t && w(n),
                o[10](null),
                e && A(e, t)
        }
    }
}
function C(o) {
    let e, n = o[6] && q(o);
    return {
        c() {
            e = J("div"),
                n && n.c(),
                this.h()
        },
        l(r) {
            e = K(r, "DIV", {
                id: !0,
                "aria-live": !0,
                "aria-atomic": !0,
                style: !0
            });
            var s = Q(e);
            n && n.l(s),
                s.forEach(w),
                this.h()
        },
        h() {
            O(e, "id", "svelte-announcer"),
                O(e, "aria-live", "assertive"),
                O(e, "aria-atomic", "true"),
                d(e, "position", "absolute"),
                d(e, "left", "0"),
                d(e, "top", "0"),
                d(e, "clip", "rect(0 0 0 0)"),
                d(e, "clip-path", "inset(50%)"),
                d(e, "overflow", "hidden"),
                d(e, "white-space", "nowrap"),
                d(e, "width", "1px"),
                d(e, "height", "1px")
        },
        m(r, s) {
            E(r, e, s),
                n && n.m(e, null)
        },
        p(r, s) {
            r[6] ? n ? n.p(r, s) : (n = q(r),
                n.c(),
                n.m(e, null)) : n && (n.d(1),
                    n = null)
        },
        d(r) {
            r && w(e),
                n && n.d()
        }
    }
}
function q(o) {
    let e;
    return {
        c() {
            e = X(o[7])
        },
        l(n) {
            e = Y(n, o[7])
        },
        m(n, r) {
            E(n, e, r)
        },
        p(n, r) {
            r & 128 && Z(e, n[7])
        },
        d(n) {
            n && w(e)
        }
    }
}
function ie(o) {
    let e, n, r, s, u;
    const t = [te, ee]
        , i = [];
    function l(a, _) {
        return a[1][1] ? 0 : 1
    }
    e = l(o),
        n = i[e] = t[e](o);
    let f = o[5] && C(o);
    return {
        c() {
            n.c(),
                r = G(),
                f && f.c(),
                s = h()
        },
        l(a) {
            n.l(a),
                r = H(a),
                f && f.l(a),
                s = h()
        },
        m(a, _) {
            i[e].m(a, _),
                E(a, r, _),
                f && f.m(a, _),
                E(a, s, _),
                u = !0
        },
        p(a, [_]) {
            let b = e;
            e = l(a),
                e === b ? i[e].p(a, _) : (S(),
                    p(i[b], 1, 1, () => {
                        i[b] = null
                    }
                    ),
                    D(),
                    n = i[e],
                    n ? n.p(a, _) : (n = i[e] = t[e](a),
                        n.c()),
                    g(n, 1),
                    n.m(r.parentNode, r)),
                a[5] ? f ? f.p(a, _) : (f = C(a),
                    f.c(),
                    f.m(s.parentNode, s)) : f && (f.d(1),
                        f = null)
        },
        i(a) {
            u || (g(n),
                u = !0)
        },
        o(a) {
            p(n),
                u = !1
        },
        d(a) {
            a && (w(r),
                w(s)),
                i[e].d(a),
                f && f.d(a)
        }
    }
}
function re(o, e, n) {
    let { stores: r } = e
        , { page: s } = e
        , { constructors: u } = e
        , { components: t = [] } = e
        , { form: i } = e
        , { data_0: l = null } = e
        , { data_1: f = null } = e;
    U(r.page.notify);
    let a = !1
        , _ = !1
        , b = null;
    j(() => {
        const c = r.page.subscribe(() => {
            a && (n(6, _ = !0),
                z().then(() => {
                    n(7, b = document.title || "untitled page")
                }
                ))
        }
        );
        return n(5, a = !0),
            c
    }
    );
    function m(c) {
        I[c ? "unshift" : "push"](() => {
            t[1] = c,
                n(0, t)
        }
        )
    }
    function k(c) {
        I[c ? "unshift" : "push"](() => {
            t[0] = c,
                n(0, t)
        }
        )
    }
    function v(c) {
        I[c ? "unshift" : "push"](() => {
            t[0] = c,
                n(0, t)
        }
        )
    }
    return o.$$set = c => {
        "stores" in c && n(8, r = c.stores),
            "page" in c && n(9, s = c.page),
            "constructors" in c && n(1, u = c.constructors),
            "components" in c && n(0, t = c.components),
            "form" in c && n(2, i = c.form),
            "data_0" in c && n(3, l = c.data_0),
            "data_1" in c && n(4, f = c.data_1)
    }
        ,
        o.$$.update = () => {
            o.$$.dirty & 768 && r.page.set(s)
        }
        ,
        [t, u, i, l, f, a, _, b, r, s, m, k, v]
}
class fe extends W {
    constructor(e) {
        super(),
            F(this, e, re, ie, N, {
                stores: 8,
                page: 9,
                constructors: 1,
                components: 0,
                form: 2,
                data_0: 3,
                data_1: 4
            })
    }
}
const ce = [
    () => y(() => import("../nodes/0.CPFv6uHc.js"),
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
        import.meta.url), () => y(() => import("../nodes/1.BUKQbDvp.js"),
            __vite__mapDeps([13, 1, 2, 14, 7, 11, 15, 10, 6, 3]),
            import.meta.url), () => y(() => import("../nodes/2.GMaG4D7Q.js"),
                __vite__mapDeps([16, 1, 2, 4, 3, 5, 6, 7, 10, 14, 11, 9, 15, 17, 8, 18, 19, 20, 21, 22]), import.meta.url), () => y(() => import("../nodes/3.BeYMSaQu.js"),
                    __vite__mapDeps([23, 1, 2, 20, 11, 21, 9]), import.meta.url), () => y(() => import("../nodes/4.She38kw0.js"),
                        __vite__mapDeps([24, 1, 2, 25, 7, 8, 14, 11, 17, 5, 3, 6, 19]), import.meta.url), () => y(() => import("../nodes/5.Csv0sc3V.js"),
                            __vite__mapDeps([26, 1, 2, 25, 7, 8, 14, 11, 17, 5, 3, 6, 18]), import.meta.url)]
    , ue = []
    , _e = {
        "/": [2],
        "/3d": [3],
        "/ubuntu": [4],
        "/venturedge": [5]
    }
    , me = {
        handleError: ({ error: o }) => {
            console.error(o)
        }
        ,
        reroute: x || (() => { }
        )
    };
export { _e as dictionary, me as hooks, le as matchers, ce as nodes, fe as root, ue as server_loads };
