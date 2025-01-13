import {
    a as F,
    n as j,
    c as B,
    b as O
} from "../chunks/index.BH183J0c.js";
import {
    S as M,
    i as R,
    e as N,
    c as z,
    a as C,
    d as h,
    b as A,
    f as k,
    g as w,
    s as T,
    h as x,
    j as V,
    k as _,
    m as E,
    t as y,
    l as D,
    n as I,
    o as U,
    p as G
} from "../chunks/index.B5pbiKnB.js";
import {
    T as q
} from "../chunks/TitleReveal.SbfJCpuF.js";
import {
    B as H
} from "../chunks/ButtonMain.CRjQBOiX.js";
import {
    v as J,
    a as K
} from "../chunks/gsap.BWqxc2AZ.js";
import {
    p as L
} from "../chunks/constants.CasMNmVQ.js";

function P(s) {
    let n;
    return {
        c() {
            n = N("canvas"), this.h()
        },
        l(t) {
            n = z(t, "CANVAS", {
                class: !0
            }), C(n).forEach(h), this.h()
        },
        h() {
            A(n, "class", "pointer-events-none absolute inset-0 -z-10 bg-white/15")
        },
        m(t, r) {
            k(t, n, r), s[3](n)
        },
        p: j,
        i: j,
        o: j,
        d(t) {
            t && h(n), s[3](null)
        }
    }
}

function Q(s, n, t) {
    let r, o;
    B(s, J, c => t(1, r = c)), B(s, K, c => t(2, o = c));
    let a = null,
        i = null;

    function m() {
        a && (i = a == null ? void 0 : a.getContext("2d"), d(), u())
    }

    function v() {
        if (!i) return;
        const c = i.canvas.width,
            $ = i.canvas.height,
            g = i.createImageData(c, $),
            e = new Uint32Array(g.data.buffer),
            l = e.length;
        for (let f = 0; f < l; f++) Math.random() < .5 && (e[f] = 4278190080);
        i.putImageData(g, 0, 0)
    }

    function u() {
        v(), requestAnimationFrame(u)
    }

    function d() {
        a && (t(0, a.width = o, a), t(0, a.height = r, a))
    }

    function p(c) {
        O[c ? "unshift" : "push"](() => {
            a = c, t(0, a)
        })
    }
    return s.$$.update = () => {
        s.$$.dirty & 1 && a && m(), s.$$.dirty & 6 && o && r && d()
    }, [a, r, o, p]
}
class W extends M {
    constructor(n) {
        super(), R(this, n, Q, P, F, {})
    }
}

function X(s) {
    let n;
    return {
        c() {
            n = U("Naar crftd.nl")
        },
        l(t) {
            n = G(t, "Naar crftd.nl")
        },
        m(t, r) {
            k(t, n, r)
        },
        d(t) {
            t && h(n)
        }
    }
}

function Y(s) {
    let n, t, r, o, a, i, m, v, u, d, p, c, $, g;
    return o = new q({
        props: {
            size: "xs",
            content: ["Error"]
        }
    }), m = new q({
        props: {
            size: "m",
            theme: "white",
            content: [`${s[0].status}`]
        }
    }), u = new q({
        props: {
            align: "center",
            size: "2xl",
            content: ["No CRFTD", "work here"]
        }
    }), p = new H({
        props: {
            theme: "green",
            href: "/",
            $$slots: {
                default: [X]
            },
            $$scope: {
                ctx: s
            }
        }
    }), $ = new W({}), {
        c() {
            n = N("section"), t = N("div"), r = N("div"), w(o.$$.fragment), a = T(), i = N("div"), w(m.$$.fragment), v = T(), w(u.$$.fragment), d = T(), w(p.$$.fragment), c = T(), w($.$$.fragment), this.h()
        },
        l(e) {
            n = z(e, "SECTION", {
                class: !0
            });
            var l = C(n);
            t = z(l, "DIV", {
                class: !0
            });
            var f = C(t);
            r = z(f, "DIV", {
                class: !0
            });
            var b = C(r);
            x(o.$$.fragment, b), b.forEach(h), a = V(f), i = z(f, "DIV", {
                class: !0
            });
            var S = C(i);
            x(m.$$.fragment, S), v = V(S), x(u.$$.fragment, S), S.forEach(h), d = V(f), x(p.$$.fragment, f), f.forEach(h), l.forEach(h), c = V(e), x($.$$.fragment, e), this.h()
        },
        h() {
            A(r, "class", "absolute left-0 top-fluid-l-xl"), A(i, "class", "flex flex-col items-center gap-y-fluid-2xs"), A(t, "class", "container relative flex h-full flex-col items-center justify-center gap-y-fluid-m"), A(n, "class", "module-error h-dvh")
        },
        m(e, l) {
            k(e, n, l), _(n, t), _(t, r), E(o, r, null), _(t, a), _(t, i), E(m, i, null), _(i, v), E(u, i, null), _(t, d), E(p, t, null), k(e, c, l), E($, e, l), g = !0
        },
        p(e, [l]) {
            const f = {};
            l & 1 && (f.content = [`${e[0].status}`]), m.$set(f);
            const b = {};
            l & 2 && (b.$$scope = {
                dirty: l,
                ctx: e
            }), p.$set(b)
        },
        i(e) {
            g || (y(o.$$.fragment, e), y(m.$$.fragment, e), y(u.$$.fragment, e), y(p.$$.fragment, e), y($.$$.fragment, e), g = !0)
        },
        o(e) {
            D(o.$$.fragment, e), D(m.$$.fragment, e), D(u.$$.fragment, e), D(p.$$.fragment, e), D($.$$.fragment, e), g = !1
        },
        d(e) {
            e && (h(n), h(c)), I(o), I(m), I(u), I(p), I($, e)
        }
    }
}

function Z(s, n, t) {
    let r;
    return B(s, L, o => t(0, r = o)), [r]
}
class it extends M {
    constructor(n) {
        super(), R(this, n, Z, Y, F, {})
    }
}
export {
    it as component
};
