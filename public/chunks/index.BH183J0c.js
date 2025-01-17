function f() {}
const U = t => t;

function F(t, n) {
    for (const e in n) t[e] = n[e];
    return t
}

function Q(t) {
    return !!t && (typeof t == "object" || typeof t == "function") && typeof t.then == "function"
}

function P(t) {
    return t()
}

function R() {
    return Object.create(null)
}

function A(t) {
    t.forEach(P)
}

function C(t) {
    return typeof t == "function"
}

function G(t, n) {
    return t != t ? n == n : t !== n || t && typeof t == "object" || typeof t == "function"
}
let g;

function T(t, n) {
    return t === n ? !0 : (g || (g = document.createElement("a")), g.href = n, t === g.href)
}

function V(t) {
    return Object.keys(t).length === 0
}

function z(t, ...n) {
    if (t == null) {
        for (const r of n) r(void 0);
        return f
    }
    const e = t.subscribe(...n);
    return e.unsubscribe ? () => e.unsubscribe() : e
}

function W(t) {
    let n;
    return z(t, e => n = e)(), n
}

function X(t, n, e) {
    t.$$.on_destroy.push(z(n, e))
}

function Y(t, n, e, r) {
    if (t) {
        const s = M(t, n, e, r);
        return t[0](s)
    }
}

function M(t, n, e, r) {
    return t[1] && r ? F(e.ctx.slice(), t[1](r(n))) : e.ctx
}

function Z(t, n, e, r) {
    if (t[2] && r) {
        const s = t[2](r(e));
        if (n.dirty === void 0) return s;
        if (typeof s == "object") {
            const u = [],
                i = Math.max(n.dirty.length, s.length);
            for (let o = 0; o < i; o += 1) u[o] = n.dirty[o] | s[o];
            return u
        }
        return n.dirty | s
    }
    return n.dirty
}

function $(t, n, e, r, s, u) {
    if (s) {
        const i = M(n, e, r, u);
        t.p(i, s)
    }
}

function tt(t) {
    if (t.ctx.length > 32) {
        const n = [],
            e = t.ctx.length / 32;
        for (let r = 0; r < e; r++) n[r] = -1;
        return n
    }
    return -1
}

function nt(t) {
    const n = {};
    for (const e in t) e[0] !== "$" && (n[e] = t[e]);
    return n
}

function et(t, n) {
    const e = {};
    n = new Set(n);
    for (const r in t) !n.has(r) && r[0] !== "$" && (e[r] = t[r]);
    return e
}

function rt(t, n, e) {
    return t.set(e), n
}

function st(t) {
    return t && C(t.destroy) ? t.destroy : f
}
let y;

function w(t) {
    y = t
}

function p() {
    if (!y) throw new Error("Function called outside component initialization");
    return y
}

function ot(t) {
    p().$$.on_mount.push(t)
}

function ct(t) {
    p().$$.after_update.push(t)
}

function ut(t) {
    p().$$.on_destroy.push(t)
}

function it(t, n) {
    return p().$$.context.set(t, n), n
}

function at(t) {
    return p().$$.context.get(t)
}

function ft(t, n) {
    const e = t.$$.callbacks[n.type];
    e && e.slice().forEach(r => r.call(this, n))
}
const b = [],
    v = [];
let h = [];
const j = [],
    S = Promise.resolve();
let q = !1;

function H() {
    q || (q = !0, S.then(J))
}

function lt() {
    return H(), S
}

function I(t) {
    h.push(t)
}

function dt(t) {
    j.push(t)
}
const E = new Set;
let d = 0;

function J() {
    if (d !== 0) return;
    const t = y;
    do {
        try {
            for (; d < b.length;) {
                const n = b[d];
                d++, w(n), K(n.$$)
            }
        } catch (n) {
            throw b.length = 0, d = 0, n
        }
        for (w(null), b.length = 0, d = 0; v.length;) v.pop()();
        for (let n = 0; n < h.length; n += 1) {
            const e = h[n];
            E.has(e) || (E.add(e), e())
        }
        h.length = 0
    } while (b.length);
    for (; j.length;) j.pop()();
    q = !1, E.clear(), w(t)
}

function K(t) {
    if (t.fragment !== null) {
        t.update(), A(t.before_update);
        const n = t.dirty;
        t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(I)
    }
}

function _t(t) {
    const n = [],
        e = [];
    h.forEach(r => t.indexOf(r) === -1 ? n.push(r) : e.push(r)), e.forEach(r => r()), h = n
}
const _ = [];

function L(t, n) {
    return {
        subscribe: N(t, n).subscribe
    }
}

function N(t, n = f) {
    let e;
    const r = new Set;

    function s(o) {
        if (G(t, o) && (t = o, e)) {
            const a = !_.length;
            for (const c of r) c[1](), _.push(c, t);
            if (a) {
                for (let c = 0; c < _.length; c += 2) _[c][0](_[c + 1]);
                _.length = 0
            }
        }
    }

    function u(o) {
        s(o(t))
    }

    function i(o, a = f) {
        const c = [o, a];
        return r.add(c), r.size === 1 && (e = n(s, u) || f), o(t), () => {
            r.delete(c), r.size === 0 && e && (e(), e = null)
        }
    }
    return {
        set: s,
        update: u,
        subscribe: i
    }
}

function ht(t, n, e) {
    const r = !Array.isArray(t),
        s = r ? [t] : t;
    if (!s.every(Boolean)) throw new Error("derived() expects stores as input, got a falsy value");
    const u = n.length < 2;
    return L(e, (i, o) => {
        let a = !1;
        const c = [];
        let m = 0,
            x = f;
        const O = () => {
                if (m) return;
                x();
                const l = n(r ? c[0] : c, i, o);
                u ? i(l) : x = C(l) ? l : f
            },
            B = s.map((l, k) => z(l, D => {
                c[k] = D, m &= ~(1 << k), a && O()
            }, () => {
                m |= 1 << k
            }));
        return a = !0, O(),
            function() {
                A(B), x(), a = !1
            }
    })
}
export {
    V as A, _t as B, y as C, w as D, P as E, b as F, H as G, W as H, Q as I, p as J, ht as K, L, ut as M, z as N, rt as O, st as P, G as a, v as b, X as c, F as d, ft as e, dt as f, at as g, et as h, nt as i, Y as j, tt as k, Z as l, ct as m, f as n, ot as o, T as p, C as q, A as r, it as s, lt as t, $ as u, I as v, N as w, U as x, R as y, J as z
};
