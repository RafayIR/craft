import {
    a as v,
    h as k,
    d as h,
    i as T,
    j as y,
    u as C,
    k as j,
    l as q,
    e as U,
    b as z
} from "./index.BH183J0c.js";
import {
    S as F,
    i as S,
    q as B,
    f as A,
    t as m,
    l as d,
    d as c,
    e as D,
    c as G,
    a as H,
    r as N,
    x as I,
    g as J,
    h as K,
    m as L,
    n as O
} from "./index.B5pbiKnB.js";
import {
    g as Q
} from "./spread.CgU5AtxT.js";
import {
    g as R
} from "./index.CF638lXu.js";

function V(e) {
    return e.filter(Boolean).join(" ")
}

function g(e) {
    let t, s, l, a;
    const r = e[7].default,
        i = y(r, e, e[6], null);
    let b = [`${e[1]?"a":"button"}` == "button" ? e[4]({
            class: `button-base ${e[3]}`,
            href: e[1],
            target: e[2],
            role: "button",
            tabindex: "0",
            ...e[5]
        }, [{
            attribute_name: "formaction"
        }]) : `${e[1]?"a":"button"}` == "form" ? e[4]({
            class: `button-base ${e[3]}`,
            href: e[1],
            target: e[2],
            role: "button",
            tabindex: "0",
            ...e[5]
        }, [{
            attribute_name: "action"
        }]) : `${e[1]?"a":"button"}` == "a" ? e[4]({
            class: `button-base ${e[3]}`,
            href: e[1],
            target: e[2],
            role: "button",
            tabindex: "0",
            ...e[5]
        }, [{
            attribute_name: "href",
            lang_attribute_name: "hreflang"
        }]) : {
            class: `button-base ${e[3]}`,
            href: e[1],
            target: e[2],
            role: "button",
            tabindex: "0",
            ...e[5]
        }],
        _ = {};
    for (let n = 0; n < b.length; n += 1) _ = h(_, b[n]);
    return {
        c() {
            t = D(e[1] ? "a" : "button"), i && i.c(), this.h()
        },
        l(n) {
            t = G(n, ((e[1] ? "a" : "button") || "null").toUpperCase(), {});
            var u = H(t);
            i && i.l(u), u.forEach(c), this.h()
        },
        h() {
            N(e[1] ? "a" : "button")(t, _)
        },
        m(n, u) {
            A(n, t, u), i && i.m(t, null), e[9](t), s = !0, l || (a = I(t, "click", e[8]), l = !0)
        },
        p(n, u) {
            i && i.p && (!s || u & 64) && C(i, r, n, n[6], s ? q(r, n[6], u, null) : j(n[6]), null), N(n[1] ? "a" : "button")(t, _ = Q(b, [u & 46 && (`${n[1]?"a":"button"}` == "button" ? n[4]({
                class: `button-base ${n[3]}`,
                href: n[1],
                target: n[2],
                role: "button",
                tabindex: "0",
                ...n[5]
            }, [{
                attribute_name: "formaction"
            }]) : `${n[1]?"a":"button"}` == "form" ? n[4]({
                class: `button-base ${n[3]}`,
                href: n[1],
                target: n[2],
                role: "button",
                tabindex: "0",
                ...n[5]
            }, [{
                attribute_name: "action"
            }]) : `${n[1]?"a":"button"}` == "a" ? n[4]({
                class: `button-base ${n[3]}`,
                href: n[1],
                target: n[2],
                role: "button",
                tabindex: "0",
                ...n[5]
            }, [{
                attribute_name: "href",
                lang_attribute_name: "hreflang"
            }]) : {
                class: `button-base ${n[3]}`,
                href: n[1],
                target: n[2],
                role: "button",
                tabindex: "0",
                ...n[5]
            })]))
        },
        i(n) {
            s || (m(i, n), s = !0)
        },
        o(n) {
            d(i, n), s = !1
        },
        d(n) {
            n && c(t), i && i.d(n), e[9](null), l = !1, a()
        }
    }
}

function W(e) {
    let t = e[1] ? "a" : "button",
        s, l, a = (e[1] ? "a" : "button") && g(e);
    return {
        c() {
            a && a.c(), s = B()
        },
        l(r) {
            a && a.l(r), s = B()
        },
        m(r, i) {
            a && a.m(r, i), A(r, s, i), l = !0
        },
        p(r, [i]) {
            r[1], t ? v(t, r[1] ? "a" : "button") ? (a.d(1), a = g(r), t = r[1] ? "a" : "button", a.c(), a.m(s.parentNode, s)) : a.p(r, i) : (a = g(r), t = r[1] ? "a" : "button", a.c(), a.m(s.parentNode, s))
        },
        i(r) {
            l || (m(a, r), l = !0)
        },
        o(r) {
            d(a, r), l = !1
        },
        d(r) {
            r && c(s), a && a.d(r)
        }
    }
}

function X(e, t, s) {
    const l = ["el", "href", "target", "class"];
    let a = k(t, l),
        {
            $$slots: r = {},
            $$scope: i
        } = t,
        {
            el: b = null
        } = t,
        {
            href: _ = void 0
        } = t,
        {
            target: n = void 0
        } = t,
        {
            class: u = ""
        } = t;
    const f = R(),
        [$, E] = f;

    function M(o) {
        U.call(this, e, o)
    }

    function P(o) {
        z[o ? "unshift" : "push"](() => {
            b = o, s(0, b)
        })
    }
    return e.$$set = o => {
        t = h(h({}, t), T(o)), s(5, a = k(t, l)), "el" in o && s(0, b = o.el), "href" in o && s(1, _ = o.href), "target" in o && s(2, n = o.target), "class" in o && s(3, u = o.class), "$$scope" in o && s(6, i = o.$$scope)
    }, [b, _, n, u, E, a, i, r, M, P]
}
class Y extends F {
    constructor(t) {
        super(), S(this, t, X, W, v, {
            el: 0,
            href: 1,
            target: 2,
            class: 3
        })
    }
}

function Z(e) {
    let t;
    const s = e[6].default,
        l = y(s, e, e[7], null);
    return {
        c() {
            l && l.c()
        },
        l(a) {
            l && l.l(a)
        },
        m(a, r) {
            l && l.m(a, r), t = !0
        },
        p(a, r) {
            l && l.p && (!t || r & 128) && C(l, s, a, a[7], t ? q(s, a[7], r, null) : j(a[7]), null)
        },
        i(a) {
            t || (m(l, a), t = !0)
        },
        o(a) {
            d(l, a), t = !1
        },
        d(a) {
            l && l.d(a)
        }
    }
}

function p(e) {
    let t, s;
    return t = new Y({
        props: {
            class: "ui-label relative border p-[1em] pt-[0.9em] transition-all duration-200 ease-in-out hover:bg-transparent " + e[3],
            href: e[0],
            target: e[1],
            disabled: e[2],
            $$slots: {
                default: [Z]
            },
            $$scope: {
                ctx: e
            }
        }
    }), {
        c() {
            J(t.$$.fragment)
        },
        l(l) {
            K(t.$$.fragment, l)
        },
        m(l, a) {
            L(t, l, a), s = !0
        },
        p(l, [a]) {
            const r = {};
            a & 8 && (r.class = "ui-label relative border p-[1em] pt-[0.9em] transition-all duration-200 ease-in-out hover:bg-transparent " + l[3]), a & 1 && (r.href = l[0]), a & 2 && (r.target = l[1]), a & 4 && (r.disabled = l[2]), a & 128 && (r.$$scope = {
                dirty: a,
                ctx: l
            }), t.$set(r)
        },
        i(l) {
            s || (m(t.$$.fragment, l), s = !0)
        },
        o(l) {
            d(t.$$.fragment, l), s = !1
        },
        d(l) {
            O(t, l)
        }
    }
}

function w(e, t, s) {
    let l, {
            $$slots: a = {},
            $$scope: r
        } = t,
        {
            theme: i = "darkgrey"
        } = t,
        {
            href: b = void 0
        } = t,
        {
            target: _ = void 0
        } = t,
        {
            disabled: n = !1
        } = t,
        {
            class: u = ""
        } = t;
    return e.$$set = f => {
        "theme" in f && s(4, i = f.theme), "href" in f && s(0, b = f.href), "target" in f && s(1, _ = f.target), "disabled" in f && s(2, n = f.disabled), "class" in f && s(5, u = f.class), "$$scope" in f && s(7, r = f.$$scope)
    }, e.$$.update = () => {
        e.$$.dirty & 52 && s(3, l = V([i === "darkgrey" && "border-darkgrey bg-darkgrey text-white/25 hover:text-white", i === "green" && "border-green bg-green text-black hover:text-white", n && "cursor-wait", u]))
    }, [b, _, n, l, i, u, a, r]
}
class ne extends F {
    constructor(t) {
        super(), S(this, t, w, p, v, {
            theme: 4,
            href: 0,
            target: 1,
            disabled: 2,
            class: 5
        })
    }
}
export {
    ne as B, Y as a
};
