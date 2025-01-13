import {
    w as bt,
    t as mt,
    o as ge
} from "./index.BH183J0c.js";
new URL("sveltekit-internal://");

function me(t, n) {
    return t === "/" || n === "ignore" ? t : n === "never" ? t.endsWith("/") ? t.slice(0, -1) : t : n === "always" && !t.endsWith("/") ? t + "/" : t
}

function ye(t) {
    return t.split("%25").map(decodeURI).join("%25")
}

function _e(t) {
    for (const n in t) t[n] = decodeURIComponent(t[n]);
    return t
}

function dt({
    href: t
}) {
    return t.split("#")[0]
}
const we = ["href", "pathname", "search", "toString", "toJSON"];

function ve(t, n, e) {
    const r = new URL(t);
    Object.defineProperty(r, "searchParams", {
        value: new Proxy(r.searchParams, {
            get(a, o) {
                if (o === "get" || o === "getAll" || o === "has") return s => (e(s), a[o](s));
                n();
                const i = Reflect.get(a, o);
                return typeof i == "function" ? i.bind(a) : i
            }
        }),
        enumerable: !0,
        configurable: !0
    });
    for (const a of we) Object.defineProperty(r, a, {
        get() {
            return n(), t[a]
        },
        enumerable: !0,
        configurable: !0
    });
    return r
}
const be = "/__data.json",
    Ae = ".html__data.json";

function ke(t) {
    return t.endsWith(".html") ? t.replace(/\.html$/, Ae) : t.replace(/\/$/, "") + be
}

function Ee(...t) {
    let n = 5381;
    for (const e of t)
        if (typeof e == "string") {
            let r = e.length;
            for (; r;) n = n * 33 ^ e.charCodeAt(--r)
        } else if (ArrayBuffer.isView(e)) {
        const r = new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        let a = r.length;
        for (; a;) n = n * 33 ^ r[--a]
    } else throw new TypeError("value must be a string or TypedArray");
    return (n >>> 0).toString(36)
}

function Se(t) {
    const n = atob(t),
        e = new Uint8Array(n.length);
    for (let r = 0; r < n.length; r++) e[r] = n.charCodeAt(r);
    return e.buffer
}
const qt = window.fetch;
window.fetch = (t, n) => ((t instanceof Request ? t.method : (n == null ? void 0 : n.method) || "GET") !== "GET" && M.delete(At(t)), qt(t, n));
const M = new Map;

function Re(t, n) {
    const e = At(t, n),
        r = document.querySelector(e);
    if (r != null && r.textContent) {
        let {
            body: a,
            ...o
        } = JSON.parse(r.textContent);
        const i = r.getAttribute("data-ttl");
        return i && M.set(e, {
            body: a,
            init: o,
            ttl: 1e3 * Number(i)
        }), r.getAttribute("data-b64") !== null && (a = Se(a)), Promise.resolve(new Response(a, o))
    }
    return window.fetch(t, n)
}

function Ie(t, n, e) {
    if (M.size > 0) {
        const r = At(t, e),
            a = M.get(r);
        if (a) {
            if (performance.now() < a.ttl && ["default", "force-cache", "only-if-cached", void 0].includes(e == null ? void 0 : e.cache)) return new Response(a.body, a.init);
            M.delete(r)
        }
    }
    return window.fetch(n, e)
}

function At(t, n) {
    let r = `script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;
    if (n != null && n.headers || n != null && n.body) {
        const a = [];
        n.headers && a.push([...new Headers(n.headers)].join(",")), n.body && (typeof n.body == "string" || ArrayBuffer.isView(n.body)) && a.push(n.body), r += `[data-hash="${Ee(...a)}"]`
    }
    return r
}
const Le = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;

function Ue(t) {
    const n = [];
    return {
        pattern: t === "/" ? /^\/$/ : new RegExp(`^${xe(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return ht(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return ht(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const d=Le.exec(c),[,h,g,u,m]=d;return n.push({name:u,matcher:m,optional:!!h,rest:!!g,chained:g?f===1&&i[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return ht(c)}).join("")}).join("")}/?$`),
        params: n
    }
}

function Te(t) {
    return !/^\([^)]+\)$/.test(t)
}

function xe(t) {
    return t.slice(1).split("/").filter(Te)
}

function Pe(t, n, e) {
    const r = {},
        a = t.slice(1),
        o = a.filter(s => s !== void 0);
    let i = 0;
    for (let s = 0; s < n.length; s += 1) {
        const c = n[s];
        let f = a[s - i];
        if (c.chained && c.rest && i && (f = a.slice(s - i, s + 1).filter(d => d).join("/"), i = 0), f === void 0) {
            c.rest && (r[c.name] = "");
            continue
        }
        if (!c.matcher || e[c.matcher](f)) {
            r[c.name] = f;
            const d = n[s + 1],
                h = a[s + 1];
            d && !d.rest && d.optional && h && c.chained && (i = 0), !d && !h && Object.keys(r).length === o.length && (i = 0);
            continue
        }
        if (c.optional && c.chained) {
            i++;
            continue
        }
        return
    }
    if (!i) return r
}

function ht(t) {
    return t.normalize().replace(/[[\]]/g, "\\$&").replace(/%/g, "%25").replace(/\//g, "%2[Ff]").replace(/\?/g, "%3[Ff]").replace(/#/g, "%23").replace(/[.*+?^${}()|\\]/g, "\\$&")
}

function Ne({
    nodes: t,
    server_loads: n,
    dictionary: e,
    matchers: r
}) {
    const a = new Set(n);
    return Object.entries(e).map(([s, [c, f, d]]) => {
        const {
            pattern: h,
            params: g
        } = Ue(s), u = {
            id: s,
            exec: m => {
                const l = h.exec(m);
                if (l) return Pe(l, g, r)
            },
            errors: [1, ...d || []].map(m => t[m]),
            layouts: [0, ...f || []].map(i),
            leaf: o(c)
        };
        return u.errors.length = u.layouts.length = Math.max(u.errors.length, u.layouts.length), u
    });

    function o(s) {
        const c = s < 0;
        return c && (s = ~s), [c, t[s]]
    }

    function i(s) {
        return s === void 0 ? s : [a.has(s), t[s]]
    }
}

function Ht(t, n = JSON.parse) {
    try {
        return n(sessionStorage[t])
    } catch {}
}

function Nt(t, n, e = JSON.stringify) {
    const r = e(n);
    try {
        sessionStorage[t] = r
    } catch {}
}
var Gt;
const U = ((Gt = globalThis.__sveltekit_bzmbjt) == null ? void 0 : Gt.base) ?? "";
var Mt;
const Oe = ((Mt = globalThis.__sveltekit_bzmbjt) == null ? void 0 : Mt.assets) ?? U,
    Ce = "1736183563342",
    Kt = "sveltekit:snapshot",
    Yt = "sveltekit:scroll",
    zt = "sveltekit:states",
    je = "sveltekit:pageurl",
    $ = "sveltekit:history",
    H = "sveltekit:navigation",
    X = {
        tap: 1,
        hover: 2,
        viewport: 3,
        eager: 4,
        off: -1,
        false: -1
    },
    J = location.origin;

function Jt(t) {
    if (t instanceof URL) return t;
    let n = document.baseURI;
    if (!n) {
        const e = document.getElementsByTagName("base");
        n = e.length ? e[0].href : document.URL
    }
    return new URL(t, n)
}

function kt() {
    return {
        x: pageXOffset,
        y: pageYOffset
    }
}

function j(t, n) {
    return t.getAttribute(`data-sveltekit-${n}`)
}
const Ot = {
    ...X,
    "": X.hover
};

function Wt(t) {
    let n = t.assignedSlot ?? t.parentNode;
    return (n == null ? void 0 : n.nodeType) === 11 && (n = n.host), n
}

function Xt(t, n) {
    for (; t && t !== n;) {
        if (t.nodeName.toUpperCase() === "A" && t.hasAttribute("href")) return t;
        t = Wt(t)
    }
}

function yt(t, n) {
    let e;
    try {
        e = new URL(t instanceof SVGAElement ? t.href.baseVal : t.href, document.baseURI)
    } catch {}
    const r = t instanceof SVGAElement ? t.target.baseVal : t.target,
        a = !e || !!r || rt(e, n) || (t.getAttribute("rel") || "").split(/\s+/).includes("external"),
        o = (e == null ? void 0 : e.origin) === J && t.hasAttribute("download");
    return {
        url: e,
        external: a,
        target: r,
        download: o
    }
}

function Z(t) {
    let n = null,
        e = null,
        r = null,
        a = null,
        o = null,
        i = null,
        s = t;
    for (; s && s !== document.documentElement;) r === null && (r = j(s, "preload-code")), a === null && (a = j(s, "preload-data")), n === null && (n = j(s, "keepfocus")), e === null && (e = j(s, "noscroll")), o === null && (o = j(s, "reload")), i === null && (i = j(s, "replacestate")), s = Wt(s);

    function c(f) {
        switch (f) {
            case "":
            case "true":
                return !0;
            case "off":
            case "false":
                return !1;
            default:
                return
        }
    }
    return {
        preload_code: Ot[r ?? "off"],
        preload_data: Ot[a ?? "off"],
        keepfocus: c(n),
        noscroll: c(e),
        reload: c(o),
        replace_state: c(i)
    }
}

function Ct(t) {
    const n = bt(t);
    let e = !0;

    function r() {
        e = !0, n.update(i => i)
    }

    function a(i) {
        e = !1, n.set(i)
    }

    function o(i) {
        let s;
        return n.subscribe(c => {
            (s === void 0 || e && c !== s) && i(s = c)
        })
    }
    return {
        notify: r,
        set: a,
        subscribe: o
    }
}

function $e() {
    const {
        set: t,
        subscribe: n
    } = bt(!1);
    let e;
    async function r() {
        clearTimeout(e);
        try {
            const a = await fetch(`${Oe}/_app/version.json`, {
                headers: {
                    pragma: "no-cache",
                    "cache-control": "no-cache"
                }
            });
            if (!a.ok) return !1;
            const i = (await a.json()).version !== Ce;
            return i && (t(!0), clearTimeout(e)), i
        } catch {
            return !1
        }
    }
    return {
        subscribe: n,
        check: r
    }
}

function rt(t, n) {
    return t.origin !== J || !t.pathname.startsWith(n)
}

function jt(t) {
    const n = Fe(t),
        e = new ArrayBuffer(n.length),
        r = new DataView(e);
    for (let a = 0; a < e.byteLength; a++) r.setUint8(a, n.charCodeAt(a));
    return e
}
const De = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

function Fe(t) {
    t.length % 4 === 0 && (t = t.replace(/==?$/, ""));
    let n = "",
        e = 0,
        r = 0;
    for (let a = 0; a < t.length; a++) e <<= 6, e |= De.indexOf(t[a]), r += 6, r === 24 && (n += String.fromCharCode((e & 16711680) >> 16), n += String.fromCharCode((e & 65280) >> 8), n += String.fromCharCode(e & 255), e = r = 0);
    return r === 12 ? (e >>= 4, n += String.fromCharCode(e)) : r === 18 && (e >>= 2, n += String.fromCharCode((e & 65280) >> 8), n += String.fromCharCode(e & 255)), n
}
const Ve = -1,
    Be = -2,
    Ge = -3,
    Me = -4,
    qe = -5,
    He = -6;

function cn(t, n) {
    return Zt(JSON.parse(t), n)
}

function Zt(t, n) {
    if (typeof t == "number") return a(t, !0);
    if (!Array.isArray(t) || t.length === 0) throw new Error("Invalid input");
    const e = t,
        r = Array(e.length);

    function a(o, i = !1) {
        if (o === Ve) return;
        if (o === Ge) return NaN;
        if (o === Me) return 1 / 0;
        if (o === qe) return -1 / 0;
        if (o === He) return -0;
        if (i) throw new Error("Invalid input");
        if (o in r) return r[o];
        const s = e[o];
        if (!s || typeof s != "object") r[o] = s;
        else if (Array.isArray(s))
            if (typeof s[0] == "string") {
                const c = s[0],
                    f = n == null ? void 0 : n[c];
                if (f) return r[o] = f(a(s[1]));
                switch (c) {
                    case "Date":
                        r[o] = new Date(s[1]);
                        break;
                    case "Set":
                        const d = new Set;
                        r[o] = d;
                        for (let u = 1; u < s.length; u += 1) d.add(a(s[u]));
                        break;
                    case "Map":
                        const h = new Map;
                        r[o] = h;
                        for (let u = 1; u < s.length; u += 2) h.set(a(s[u]), a(s[u + 1]));
                        break;
                    case "RegExp":
                        r[o] = new RegExp(s[1], s[2]);
                        break;
                    case "Object":
                        r[o] = Object(s[1]);
                        break;
                    case "BigInt":
                        r[o] = BigInt(s[1]);
                        break;
                    case "null":
                        const g = Object.create(null);
                        r[o] = g;
                        for (let u = 1; u < s.length; u += 2) g[s[u]] = a(s[u + 1]);
                        break;
                    case "Int8Array":
                    case "Uint8Array":
                    case "Uint8ClampedArray":
                    case "Int16Array":
                    case "Uint16Array":
                    case "Int32Array":
                    case "Uint32Array":
                    case "Float32Array":
                    case "Float64Array":
                    case "BigInt64Array":
                    case "BigUint64Array": {
                        const u = globalThis[c],
                            m = s[1],
                            l = jt(m),
                            y = new u(l);
                        r[o] = y;
                        break
                    }
                    case "ArrayBuffer": {
                        const u = s[1],
                            m = jt(u);
                        r[o] = m;
                        break
                    }
                    default:
                        throw new Error(`Unknown type ${c}`)
                }
            } else {
                const c = new Array(s.length);
                r[o] = c;
                for (let f = 0; f < s.length; f += 1) {
                    const d = s[f];
                    d !== Be && (c[f] = a(d))
                }
            }
        else {
            const c = {};
            r[o] = c;
            for (const f in s) {
                const d = s[f];
                c[f] = a(d)
            }
        }
        return r[o]
    }
    return a(0)
}
const Qt = new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
[...Qt];
const Ke = new Set([...Qt]);
[...Ke];

function Ye(t) {
    return t.filter(n => n != null)
}
class at {
    constructor(n, e) {
        this.status = n, typeof e == "string" ? this.body = {
            message: e
        } : e ? this.body = e : this.body = {
            message: `Error: ${n}`
        }
    }
    toString() {
        return JSON.stringify(this.body)
    }
}
class te {
    constructor(n, e) {
        this.status = n, this.location = e
    }
}
class Et extends Error {
    constructor(n, e, r) {
        super(r), this.status = n, this.text = e
    }
}
const ze = "x-sveltekit-invalidated",
    Je = "x-sveltekit-trailing-slash";

function Q(t) {
    return t instanceof at || t instanceof Et ? t.status : 500
}

function We(t) {
    return t instanceof Et ? t.text : "Internal Error"
}
const C = Ht(Yt) ?? {},
    K = Ht(Kt) ?? {},
    x = {
        url: Ct({}),
        page: Ct({}),
        navigating: bt(null),
        updated: $e()
    };

function St(t) {
    C[t] = kt()
}

function Xe(t, n) {
    let e = t + 1;
    for (; C[e];) delete C[e], e += 1;
    for (e = n + 1; K[e];) delete K[e], e += 1
}

function F(t) {
    return location.href = t.href, new Promise(() => {})
}

function $t() {}
let ot, _t, tt, T, wt, B;
const Rt = [],
    et = [];
let I = null;
const ee = [],
    Ze = [];
let N = [],
    _ = {
        branch: [],
        error: null,
        url: null
    },
    It = !1,
    nt = !1,
    Dt = !0,
    Y = !1,
    G = !1,
    ne = !1,
    st = !1,
    O, E, L, S, V;
const q = new Set;
let pt;
async function ln(t, n, e) {
    var a, o;
    document.URL !== location.href && (location.href = location.href), B = t, ot = Ne(t), T = document.documentElement, wt = n, _t = t.nodes[0], tt = t.nodes[1], _t(), tt(), E = (a = history.state) == null ? void 0 : a[$], L = (o = history.state) == null ? void 0 : o[H], E || (E = L = Date.now(), history.replaceState({
        ...history.state,
        [$]: E,
        [H]: L
    }, ""));
    const r = C[E];
    r && (history.scrollRestoration = "manual", scrollTo(r.x, r.y)), e ? await on(wt, e) : rn(location.href, {
        replaceState: !0
    }), an()
}
async function re() {
    if (await (pt || (pt = Promise.resolve())), !pt) return;
    pt = null;
    const t = lt(_.url, !0);
    I = null;
    const n = V = {},
        e = t && await Tt(t);
    if (!(!e || n !== V)) {
        if (e.type === "redirect") return it(new URL(e.location, _.url).href, {}, 1, n);
        e.props.page && (S = e.props.page), _ = e.state, ae(), O.$set(e.props)
    }
}

function ae() {
    Rt.length = 0, st = !1
}

function oe(t) {
    et.some(n => n == null ? void 0 : n.snapshot) && (K[t] = et.map(n => {
        var e;
        return (e = n == null ? void 0 : n.snapshot) == null ? void 0 : e.capture()
    }))
}

function se(t) {
    var n;
    (n = K[t]) == null || n.forEach((e, r) => {
        var a, o;
        (o = (a = et[r]) == null ? void 0 : a.snapshot) == null || o.restore(e)
    })
}

function Ft() {
    St(E), Nt(Yt, C), oe(L), Nt(Kt, K)
}
async function it(t, n, e, r) {
    return W({
        type: "goto",
        url: Jt(t),
        keepfocus: n.keepFocus,
        noscroll: n.noScroll,
        replace_state: n.replaceState,
        state: n.state,
        redirect_count: e,
        nav_token: r,
        accept: () => {
            n.invalidateAll && (st = !0)
        }
    })
}
async function Qe(t) {
    if (t.id !== (I == null ? void 0 : I.id)) {
        const n = {};
        q.add(n), I = {
            id: t.id,
            token: n,
            promise: Tt({
                ...t,
                preload: n
            }).then(e => (q.delete(n), e.type === "loaded" && e.state.error && (I = null), e))
        }
    }
    return I.promise
}
async function gt(t) {
    const n = ot.find(e => e.exec(le(t)));
    n && await Promise.all([...n.layouts, n.leaf].map(e => e == null ? void 0 : e[1]()))
}

function ie(t, n, e) {
    var o;
    _ = t.state;
    const r = document.querySelector("style[data-sveltekit]");
    r && r.remove(), S = t.props.page, O = new B.root({
        target: n,
        props: {
            ...t.props,
            stores: x,
            components: et
        },
        hydrate: e,
        sync: !1
    }), se(L);
    const a = {
        from: null,
        to: {
            params: _.params,
            route: {
                id: ((o = _.route) == null ? void 0 : o.id) ?? null
            },
            url: new URL(location.href)
        },
        willUnload: !1,
        type: "enter",
        complete: Promise.resolve()
    };
    N.forEach(i => i(a)), nt = !0
}

function z({
    url: t,
    params: n,
    branch: e,
    status: r,
    error: a,
    route: o,
    form: i
}) {
    let s = "never";
    if (U && (t.pathname === U || t.pathname === U + "/")) s = "always";
    else
        for (const u of e)(u == null ? void 0 : u.slash) !== void 0 && (s = u.slash);
    t.pathname = me(t.pathname, s), t.search = t.search;
    const c = {
        type: "loaded",
        state: {
            url: t,
            params: n,
            branch: e,
            error: a,
            route: o
        },
        props: {
            constructors: Ye(e).map(u => u.node.component),
            page: S
        }
    };
    i !== void 0 && (c.props.form = i);
    let f = {},
        d = !S,
        h = 0;
    for (let u = 0; u < Math.max(e.length, _.branch.length); u += 1) {
        const m = e[u],
            l = _.branch[u];
        (m == null ? void 0 : m.data) !== (l == null ? void 0 : l.data) && (d = !0), m && (f = {
            ...f,
            ...m.data
        }, d && (c.props[`data_${h}`] = f), h += 1)
    }
    return (!_.url || t.href !== _.url.href || _.error !== a || i !== void 0 && i !== S.form || d) && (c.props.page = {
        error: a,
        params: n,
        route: {
            id: (o == null ? void 0 : o.id) ?? null
        },
        state: {},
        status: r,
        url: new URL(t),
        form: i ?? null,
        data: d ? f : S.data
    }), c
}
async function Lt({
    loader: t,
    parent: n,
    url: e,
    params: r,
    route: a,
    server_data_node: o
}) {
    var d, h, g;
    let i = null,
        s = !0;
    const c = {
            dependencies: new Set,
            params: new Set,
            parent: !1,
            route: !1,
            url: !1,
            search_params: new Set
        },
        f = await t();
    if ((d = f.universal) != null && d.load) {
        let u = function(...l) {
            for (const y of l) {
                const {
                    href: b
                } = new URL(y, e);
                c.dependencies.add(b)
            }
        };
        const m = {
            route: new Proxy(a, {
                get: (l, y) => (s && (c.route = !0), l[y])
            }),
            params: new Proxy(r, {
                get: (l, y) => (s && c.params.add(y), l[y])
            }),
            data: (o == null ? void 0 : o.data) ?? null,
            url: ve(e, () => {
                s && (c.url = !0)
            }, l => {
                s && c.search_params.add(l)
            }),
            async fetch(l, y) {
                let b;
                l instanceof Request ? (b = l.url, y = {
                    body: l.method === "GET" || l.method === "HEAD" ? void 0 : await l.blob(),
                    cache: l.cache,
                    credentials: l.credentials,
                    headers: l.headers,
                    integrity: l.integrity,
                    keepalive: l.keepalive,
                    method: l.method,
                    mode: l.mode,
                    redirect: l.redirect,
                    referrer: l.referrer,
                    referrerPolicy: l.referrerPolicy,
                    signal: l.signal,
                    ...y
                }) : b = l;
                const R = new URL(b, e);
                return s && u(R.href), R.origin === e.origin && (b = R.href.slice(e.origin.length)), nt ? Ie(b, R.href, y) : Re(b, y)
            },
            setHeaders: () => {},
            depends: u,
            parent() {
                return s && (c.parent = !0), n()
            },
            untrack(l) {
                s = !1;
                try {
                    return l()
                } finally {
                    s = !0
                }
            }
        };
        i = await f.universal.load.call(null, m) ?? null
    }
    return {
        node: f,
        loader: t,
        server: o,
        universal: (h = f.universal) != null && h.load ? {
            type: "data",
            data: i,
            uses: c
        } : null,
        data: i ?? (o == null ? void 0 : o.data) ?? null,
        slash: ((g = f.universal) == null ? void 0 : g.trailingSlash) ?? (o == null ? void 0 : o.slash)
    }
}

function Vt(t, n, e, r, a, o) {
    if (st) return !0;
    if (!a) return !1;
    if (a.parent && t || a.route && n || a.url && e) return !0;
    for (const i of a.search_params)
        if (r.has(i)) return !0;
    for (const i of a.params)
        if (o[i] !== _.params[i]) return !0;
    for (const i of a.dependencies)
        if (Rt.some(s => s(new URL(i)))) return !0;
    return !1
}

function Ut(t, n) {
    return (t == null ? void 0 : t.type) === "data" ? t : (t == null ? void 0 : t.type) === "skip" ? n ?? null : null
}

function tn(t, n) {
    if (!t) return new Set(n.searchParams.keys());
    const e = new Set([...t.searchParams.keys(), ...n.searchParams.keys()]);
    for (const r of e) {
        const a = t.searchParams.getAll(r),
            o = n.searchParams.getAll(r);
        a.every(i => o.includes(i)) && o.every(i => a.includes(i)) && e.delete(r)
    }
    return e
}

function Bt({
    error: t,
    url: n,
    route: e,
    params: r
}) {
    return {
        type: "loaded",
        state: {
            error: t,
            url: n,
            route: e,
            params: r,
            branch: []
        },
        props: {
            page: S,
            constructors: []
        }
    }
}
async function Tt({
    id: t,
    invalidating: n,
    url: e,
    params: r,
    route: a,
    preload: o
}) {
    if ((I == null ? void 0 : I.id) === t) return q.delete(I.token), I.promise;
    const {
        errors: i,
        layouts: s,
        leaf: c
    } = a, f = [...s, c];
    i.forEach(p => p == null ? void 0 : p().catch(() => {})), f.forEach(p => p == null ? void 0 : p[1]().catch(() => {}));
    let d = null;
    const h = _.url ? t !== _.url.pathname + _.url.search : !1,
        g = _.route ? a.id !== _.route.id : !1,
        u = tn(_.url, e);
    let m = !1;
    const l = f.map((p, v) => {
        var P;
        const A = _.branch[v],
            k = !!(p != null && p[0]) && ((A == null ? void 0 : A.loader) !== p[1] || Vt(m, g, h, u, (P = A.server) == null ? void 0 : P.uses, r));
        return k && (m = !0), k
    });
    if (l.some(Boolean)) {
        try {
            d = await de(e, l)
        } catch (p) {
            const v = await D(p, {
                url: e,
                params: r,
                route: {
                    id: t
                }
            });
            return q.has(o) ? Bt({
                error: v,
                url: e,
                params: r,
                route: a
            }) : ct({
                status: Q(p),
                error: v,
                url: e,
                route: a
            })
        }
        if (d.type === "redirect") return d
    }
    const y = d == null ? void 0 : d.nodes;
    let b = !1;
    const R = f.map(async (p, v) => {
        var ft;
        if (!p) return;
        const A = _.branch[v],
            k = y == null ? void 0 : y[v];
        if ((!k || k.type === "skip") && p[1] === (A == null ? void 0 : A.loader) && !Vt(b, g, h, u, (ft = A.universal) == null ? void 0 : ft.uses, r)) return A;
        if (b = !0, (k == null ? void 0 : k.type) === "error") throw k;
        return Lt({
            loader: p[1],
            url: e,
            params: r,
            route: a,
            parent: async () => {
                var Pt;
                const xt = {};
                for (let ut = 0; ut < v; ut += 1) Object.assign(xt, (Pt = await R[ut]) == null ? void 0 : Pt.data);
                return xt
            },
            server_data_node: Ut(k === void 0 && p[0] ? {
                type: "skip"
            } : k ?? null, p[0] ? A == null ? void 0 : A.server : void 0)
        })
    });
    for (const p of R) p.catch(() => {});
    const w = [];
    for (let p = 0; p < f.length; p += 1)
        if (f[p]) try {
            w.push(await R[p])
        } catch (v) {
            if (v instanceof te) return {
                type: "redirect",
                location: v.location
            };
            if (q.has(o)) return Bt({
                error: await D(v, {
                    params: r,
                    url: e,
                    route: {
                        id: a.id
                    }
                }),
                url: e,
                params: r,
                route: a
            });
            let A = Q(v),
                k;
            if (y != null && y.includes(v)) A = v.status ?? A, k = v.error;
            else if (v instanceof at) k = v.body;
            else {
                if (await x.updated.check()) return await F(e);
                k = await D(v, {
                    params: r,
                    url: e,
                    route: {
                        id: a.id
                    }
                })
            }
            const P = await ce(p, w, i);
            return P ? z({
                url: e,
                params: r,
                branch: w.slice(0, P.idx).concat(P.node),
                status: A,
                error: k,
                route: a
            }) : await ue(e, {
                id: a.id
            }, k, A)
        } else w.push(void 0);
    return z({
        url: e,
        params: r,
        branch: w,
        status: 200,
        error: null,
        route: a,
        form: n ? void 0 : null
    })
}
async function ce(t, n, e) {
    for (; t--;)
        if (e[t]) {
            let r = t;
            for (; !n[r];) r -= 1;
            try {
                return {
                    idx: r + 1,
                    node: {
                        node: await e[t](),
                        loader: e[t],
                        data: {},
                        server: null,
                        universal: null
                    }
                }
            } catch {
                continue
            }
        }
}
async function ct({
    status: t,
    error: n,
    url: e,
    route: r
}) {
    const a = {};
    let o = null;
    if (B.server_loads[0] === 0) try {
        const f = await de(e, [!0]);
        if (f.type !== "data" || f.nodes[0] && f.nodes[0].type !== "data") throw 0;
        o = f.nodes[0] ?? null
    } catch {
        (e.origin !== J || e.pathname !== location.pathname || It) && await F(e)
    }
    const s = await Lt({
            loader: _t,
            url: e,
            params: a,
            route: r,
            parent: () => Promise.resolve({}),
            server_data_node: Ut(o)
        }),
        c = {
            node: await tt(),
            loader: tt,
            universal: null,
            server: null,
            data: null
        };
    return z({
        url: e,
        params: a,
        branch: [s, c],
        status: t,
        error: n,
        route: null
    })
}

function lt(t, n) {
    if (!t || rt(t, U)) return;
    let e;
    try {
        e = B.hooks.reroute({
            url: new URL(t)
        }) ?? t.pathname
    } catch {
        return
    }
    const r = le(e);
    for (const a of ot) {
        const o = a.exec(r);
        if (o) return {
            id: t.pathname + t.search,
            invalidating: n,
            route: a,
            params: _e(o),
            url: t
        }
    }
}

function le(t) {
    return ye(t.slice(U.length) || "/")
}

function fe({
    url: t,
    type: n,
    intent: e,
    delta: r
}) {
    let a = !1;
    const o = pe(_, e, t, n);
    r !== void 0 && (o.navigation.delta = r);
    const i = {
        ...o.navigation,
        cancel: () => {
            a = !0, o.reject(new Error("navigation cancelled"))
        }
    };
    return Y || ee.forEach(s => s(i)), a ? null : o
}
async function W({
    type: t,
    url: n,
    popped: e,
    keepfocus: r,
    noscroll: a,
    replace_state: o,
    state: i = {},
    redirect_count: s = 0,
    nav_token: c = {},
    accept: f = $t,
    block: d = $t
}) {
    const h = lt(n, !1),
        g = fe({
            url: n,
            type: t,
            delta: e == null ? void 0 : e.delta,
            intent: h
        });
    if (!g) {
        d();
        return
    }
    const u = E,
        m = L;
    f(), Y = !0, nt && x.navigating.set(g.navigation), V = c;
    let l = h && await Tt(h);
    if (!l) {
        if (rt(n, U)) return await F(n);
        l = await ue(n, {
            id: null
        }, await D(new Et(404, "Not Found", `Not found: ${n.pathname}`), {
            url: n,
            params: {},
            route: {
                id: null
            }
        }), 404)
    }
    if (n = (h == null ? void 0 : h.url) || n, V !== c) return g.reject(new Error("navigation aborted")), !1;
    if (l.type === "redirect")
        if (s >= 20) l = await ct({
            status: 500,
            error: await D(new Error("Redirect loop"), {
                url: n,
                params: {},
                route: {
                    id: null
                }
            }),
            url: n,
            route: {
                id: null
            }
        });
        else return it(new URL(l.location, n).href, {}, s + 1, c), !1;
    else l.props.page.status >= 400 && await x.updated.check() && await F(n);
    if (ae(), St(u), oe(m), l.props.page.url.pathname !== n.pathname && (n.pathname = l.props.page.url.pathname), i = e ? e.state : i, !e) {
        const w = o ? 0 : 1,
            p = {
                [$]: E += w,
                [H]: L += w,
                [zt]: i
            };
        (o ? history.replaceState : history.pushState).call(history, p, "", n), o || Xe(E, L)
    }
    if (I = null, l.props.page.state = i, nt) {
        _ = l.state, l.props.page && (l.props.page.url = n);
        const w = (await Promise.all(Ze.map(p => p(g.navigation)))).filter(p => typeof p == "function");
        if (w.length > 0) {
            let p = function() {
                N = N.filter(v => !w.includes(v))
            };
            w.push(p), N.push(...w)
        }
        O.$set(l.props), ne = !0
    } else ie(l, wt, !1);
    const {
        activeElement: y
    } = document;
    await mt();
    const b = e ? e.scroll : a ? kt() : null;
    if (Dt) {
        const w = n.hash && document.getElementById(decodeURIComponent(n.hash.slice(1)));
        b ? scrollTo(b.x, b.y) : w ? w.scrollIntoView() : scrollTo(0, 0)
    }
    const R = document.activeElement !== y && document.activeElement !== document.body;
    !r && !R && vt(), Dt = !0, l.props.page && (S = l.props.page), Y = !1, t === "popstate" && se(L), g.fulfil(void 0), N.forEach(w => w(g.navigation)), x.navigating.set(null)
}
async function ue(t, n, e, r) {
    return t.origin === J && t.pathname === location.pathname && !It ? await ct({
        status: r,
        error: e,
        url: t,
        route: n
    }) : await F(t)
}

function en() {
    let t;
    T.addEventListener("mousemove", o => {
        const i = o.target;
        clearTimeout(t), t = setTimeout(() => {
            r(i, 2)
        }, 20)
    });

    function n(o) {
        r(o.composedPath()[0], 1)
    }
    T.addEventListener("mousedown", n), T.addEventListener("touchstart", n, {
        passive: !0
    });
    const e = new IntersectionObserver(o => {
        for (const i of o) i.isIntersecting && (gt(i.target.href), e.unobserve(i.target))
    }, {
        threshold: 0
    });

    function r(o, i) {
        const s = Xt(o, T);
        if (!s) return;
        const {
            url: c,
            external: f,
            download: d
        } = yt(s, U);
        if (f || d) return;
        const h = Z(s);
        if (!h.reload)
            if (i <= h.preload_data) {
                const g = lt(c, !1);
                g && Qe(g)
            } else i <= h.preload_code && gt(c.pathname)
    }

    function a() {
        e.disconnect();
        for (const o of T.querySelectorAll("a")) {
            const {
                url: i,
                external: s,
                download: c
            } = yt(o, U);
            if (s || c) continue;
            const f = Z(o);
            f.reload || (f.preload_code === X.viewport && e.observe(o), f.preload_code === X.eager && gt(i.pathname))
        }
    }
    N.push(a), a()
}

function D(t, n) {
    if (t instanceof at) return t.body;
    const e = Q(t),
        r = We(t);
    return B.hooks.handleError({
        error: t,
        event: n,
        status: e,
        message: r
    }) ?? {
        message: r
    }
}

function nn(t, n) {
    ge(() => (t.push(n), () => {
        const e = t.indexOf(n);
        t.splice(e, 1)
    }))
}

function fn(t) {
    nn(N, t)
}

function rn(t, n = {}) {
    return t = Jt(t), t.origin !== J ? Promise.reject(new Error("goto: invalid URL")) : it(t, n, 0)
}

function un(t) {
    {
        const {
            href: n
        } = new URL(t, location.href);
        Rt.push(e => e.href === n)
    }
    return re()
}

function dn() {
    return st = !0, re()
}
async function hn(t) {
    if (t.type === "error") {
        const n = new URL(location.href),
            {
                branch: e,
                route: r
            } = _;
        if (!r) return;
        const a = await ce(_.branch.length, e, r.errors);
        if (a) {
            const o = z({
                url: n,
                params: _.params,
                branch: e.slice(0, a.idx).concat(a.node),
                status: t.status ?? 500,
                error: t.error,
                route: r
            });
            _ = o.state, O.$set(o.props), mt().then(vt)
        }
    } else t.type === "redirect" ? it(t.location, {
        invalidateAll: !0
    }, 0) : (O.$set({
        form: null,
        page: {
            ...S,
            form: t.data,
            status: t.status
        }
    }), await mt(), O.$set({
        form: t.data
    }), t.type === "success" && vt())
}

function an() {
    var n;
    history.scrollRestoration = "manual", addEventListener("beforeunload", e => {
        let r = !1;
        if (Ft(), !Y) {
            const a = pe(_, void 0, null, "leave"),
                o = {
                    ...a.navigation,
                    cancel: () => {
                        r = !0, a.reject(new Error("navigation cancelled"))
                    }
                };
            ee.forEach(i => i(o))
        }
        r ? (e.preventDefault(), e.returnValue = "") : history.scrollRestoration = "auto"
    }), addEventListener("visibilitychange", () => {
        document.visibilityState === "hidden" && Ft()
    }), (n = navigator.connection) != null && n.saveData || en(), T.addEventListener("click", async e => {
        var g;
        if (e.button || e.which !== 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.defaultPrevented) return;
        const r = Xt(e.composedPath()[0], T);
        if (!r) return;
        const {
            url: a,
            external: o,
            target: i,
            download: s
        } = yt(r, U);
        if (!a) return;
        if (i === "_parent" || i === "_top") {
            if (window.parent !== window) return
        } else if (i && i !== "_self") return;
        const c = Z(r);
        if (!(r instanceof SVGAElement) && a.protocol !== location.protocol && !(a.protocol === "https:" || a.protocol === "http:") || s) return;
        if (o || c.reload) {
            fe({
                url: a,
                type: "link"
            }) ? Y = !0 : e.preventDefault();
            return
        }
        const [d, h] = a.href.split("#");
        if (h !== void 0 && d === dt(location)) {
            const [, u] = _.url.href.split("#");
            if (u === h) {
                e.preventDefault(), h === "" || h === "top" && r.ownerDocument.getElementById("top") === null ? window.scrollTo({
                    top: 0
                }) : (g = r.ownerDocument.getElementById(h)) == null || g.scrollIntoView();
                return
            }
            if (G = !0, St(E), t(a), !c.replace_state) return;
            G = !1
        }
        e.preventDefault(), await new Promise(u => {
            requestAnimationFrame(() => {
                setTimeout(u, 0)
            }), setTimeout(u, 100)
        }), W({
            type: "link",
            url: a,
            keepfocus: c.keepfocus,
            noscroll: c.noscroll,
            replace_state: c.replace_state ?? a.href === location.href
        })
    }), T.addEventListener("submit", e => {
        if (e.defaultPrevented) return;
        const r = HTMLFormElement.prototype.cloneNode.call(e.target),
            a = e.submitter;
        if (((a == null ? void 0 : a.formTarget) || r.target) === "_blank" || ((a == null ? void 0 : a.formMethod) || r.method) !== "get") return;
        const s = new URL((a == null ? void 0 : a.hasAttribute("formaction")) && (a == null ? void 0 : a.formAction) || r.action);
        if (rt(s, U)) return;
        const c = e.target,
            f = Z(c);
        if (f.reload) return;
        e.preventDefault(), e.stopPropagation();
        const d = new FormData(c),
            h = a == null ? void 0 : a.getAttribute("name");
        h && d.append(h, (a == null ? void 0 : a.getAttribute("value")) ?? ""), s.search = new URLSearchParams(d).toString(), W({
            type: "form",
            url: s,
            keepfocus: f.keepfocus,
            noscroll: f.noscroll,
            replace_state: f.replace_state ?? s.href === location.href
        })
    }), addEventListener("popstate", async e => {
        var r;
        if ((r = e.state) != null && r[$]) {
            const a = e.state[$];
            if (V = {}, a === E) return;
            const o = C[a],
                i = e.state[zt] ?? {},
                s = new URL(e.state[je] ?? location.href),
                c = e.state[H],
                f = dt(location) === dt(_.url);
            if (c === L && (ne || f)) {
                t(s), C[E] = kt(), o && scrollTo(o.x, o.y), i !== S.state && (S = {
                    ...S,
                    state: i
                }, O.$set({
                    page: S
                })), E = a;
                return
            }
            const h = a - E;
            await W({
                type: "popstate",
                url: s,
                popped: {
                    state: i,
                    scroll: o,
                    delta: h
                },
                accept: () => {
                    E = a, L = c
                },
                block: () => {
                    history.go(-h)
                },
                nav_token: V
            })
        } else if (!G) {
            const a = new URL(location.href);
            t(a)
        }
    }), addEventListener("hashchange", () => {
        G && (G = !1, history.replaceState({
            ...history.state,
            [$]: ++E,
            [H]: L
        }, "", location.href))
    });
    for (const e of document.querySelectorAll("link")) e.rel === "icon" && (e.href = e.href);
    addEventListener("pageshow", e => {
        e.persisted && x.navigating.set(null)
    });

    function t(e) {
        _.url = e, x.page.set({
            ...S,
            url: e
        }), x.page.notify()
    }
}
async function on(t, {
    status: n = 200,
    error: e,
    node_ids: r,
    params: a,
    route: o,
    data: i,
    form: s
}) {
    It = !0;
    const c = new URL(location.href);
    ({
        params: a = {},
        route: o = {
            id: null
        }
    } = lt(c, !1) || {});
    let f;
    try {
        const d = r.map(async (u, m) => {
                const l = i[m];
                return l != null && l.uses && (l.uses = he(l.uses)), Lt({
                    loader: B.nodes[u],
                    url: c,
                    params: a,
                    route: o,
                    parent: async () => {
                        const y = {};
                        for (let b = 0; b < m; b += 1) Object.assign(y, (await d[b]).data);
                        return y
                    },
                    server_data_node: Ut(l)
                })
            }),
            h = await Promise.all(d),
            g = ot.find(({
                id: u
            }) => u === o.id);
        if (g) {
            const u = g.layouts;
            for (let m = 0; m < u.length; m++) u[m] || h.splice(m, 0, void 0)
        }
        f = z({
            url: c,
            params: a,
            branch: h,
            status: n,
            error: e,
            form: s,
            route: g ?? null
        })
    } catch (d) {
        if (d instanceof te) {
            await F(new URL(d.location, location.href));
            return
        }
        f = await ct({
            status: Q(d),
            error: await D(d, {
                url: c,
                params: a,
                route: o
            }),
            url: c,
            route: o
        })
    }
    f.props.page && (f.props.page.state = {}), ie(f, t, !0)
}
async function de(t, n) {
    var a;
    const e = new URL(t);
    e.pathname = ke(t.pathname), t.pathname.endsWith("/") && e.searchParams.append(Je, "1"), e.searchParams.append(ze, n.map(o => o ? "1" : "0").join(""));
    const r = await qt(e.href);
    if (!r.ok) {
        let o;
        throw (a = r.headers.get("content-type")) != null && a.includes("application/json") ? o = await r.json() : r.status === 404 ? o = "Not Found" : r.status === 500 && (o = "Internal Error"), new at(r.status, o)
    }
    return new Promise(async o => {
        var h;
        const i = new Map,
            s = r.body.getReader(),
            c = new TextDecoder;

        function f(g) {
            return Zt(g, {
                Promise: u => new Promise((m, l) => {
                    i.set(u, {
                        fulfil: m,
                        reject: l
                    })
                })
            })
        }
        let d = "";
        for (;;) {
            const {
                done: g,
                value: u
            } = await s.read();
            if (g && !d) break;
            for (d += !u && d ? `
` : c.decode(u, {
                    stream: !0
                });;) {
                const m = d.indexOf(`
`);
                if (m === -1) break;
                const l = JSON.parse(d.slice(0, m));
                if (d = d.slice(m + 1), l.type === "redirect") return o(l);
                if (l.type === "data")(h = l.nodes) == null || h.forEach(y => {
                    (y == null ? void 0 : y.type) === "data" && (y.uses = he(y.uses), y.data = f(y.data))
                }), o(l);
                else if (l.type === "chunk") {
                    const {
                        id: y,
                        data: b,
                        error: R
                    } = l, w = i.get(y);
                    i.delete(y), R ? w.reject(f(R)) : w.fulfil(f(b))
                }
            }
        }
    })
}

function he(t) {
    return {
        dependencies: new Set((t == null ? void 0 : t.dependencies) ?? []),
        params: new Set((t == null ? void 0 : t.params) ?? []),
        parent: !!(t != null && t.parent),
        route: !!(t != null && t.route),
        url: !!(t != null && t.url),
        search_params: new Set((t == null ? void 0 : t.search_params) ?? [])
    }
}

function vt() {
    const t = document.querySelector("[autofocus]");
    if (t) t.focus();
    else {
        const n = document.body,
            e = n.getAttribute("tabindex");
        n.tabIndex = -1, n.focus({
            preventScroll: !0,
            focusVisible: !1
        }), e !== null ? n.setAttribute("tabindex", e) : n.removeAttribute("tabindex");
        const r = getSelection();
        if (r && r.type !== "None") {
            const a = [];
            for (let o = 0; o < r.rangeCount; o += 1) a.push(r.getRangeAt(o));
            setTimeout(() => {
                if (r.rangeCount === a.length) {
                    for (let o = 0; o < r.rangeCount; o += 1) {
                        const i = a[o],
                            s = r.getRangeAt(o);
                        if (i.commonAncestorContainer !== s.commonAncestorContainer || i.startContainer !== s.startContainer || i.endContainer !== s.endContainer || i.startOffset !== s.startOffset || i.endOffset !== s.endOffset) return
                    }
                    r.removeAllRanges()
                }
            })
        }
    }
}

function pe(t, n, e, r) {
    var c, f;
    let a, o;
    const i = new Promise((d, h) => {
        a = d, o = h
    });
    return i.catch(() => {}), {
        navigation: {
            from: {
                params: t.params,
                route: {
                    id: ((c = t.route) == null ? void 0 : c.id) ?? null
                },
                url: t.url
            },
            to: e && {
                params: (n == null ? void 0 : n.params) ?? null,
                route: {
                    id: ((f = n == null ? void 0 : n.route) == null ? void 0 : f.id) ?? null
                },
                url: e
            },
            willUnload: !n,
            type: r,
            complete: i
        },
        fulfil: a,
        reject: o
    }
}
export {
    fn as a, U as b, dn as c, hn as d, ln as e, rn as g, un as i, cn as p, x as s
};
