import "./index.B5pbiKnB.js";
import {
    b as T
} from "./entry.B4BmtFq6.js";
import {
    H as O,
    D as $,
    p as U
} from "./constants.CasMNmVQ.js";
import {
    H as q
} from "./index.BH183J0c.js";

function H(e, t) {
    return e === "" ? "" : e.startsWith("/") ? e : new URL(e, t).pathname
}

function v(e) {
    return "/" + e.split("/").filter(Boolean).join("/")
}
const X = (...e) => e.map(v).filter(t => t !== "/").reduce((t, r) => t + r, "") || "/";

function Y(e) {
    try {
        return decodeURI(e)
    } catch {
        return e
    }
}

function P(e, t) {
    e = Y(e);
    const r = e.endsWith("/") && e !== "/";
    e = v(e);
    const i = v(t.base),
        {
            availableLanguageTags: n,
            defaultLanguageTag: o
        } = t;
    let a = e.replace(i, "/");
    const s = a.endsWith(O) ? O : a.endsWith($) ? $ : void 0;
    s && (a = a.replace(s, ""));
    const [c, ...u] = a.split("/").filter(Boolean);
    if (!c) return {
        base: i,
        lang: o,
        path: "/",
        dataSuffix: s,
        trailingSlash: r
    };
    const f = n.includes(c) ? c : o,
        l = n.includes(c) ? v(u.join("/")) : v(a);
    return {
        base: i,
        lang: f,
        path: l,
        dataSuffix: s,
        trailingSlash: r
    }
}

function I(e) {
    const t = [];
    t.push(e.base), e.includeLanguage && (!(e.lang === e.defaultLanguageTag) || e.prefixDefaultLanguage === "always") && t.push(e.lang), t.push(e.path), e.dataSuffix && t.push($);
    const r = X(...t);
    return e.trailingSlash && !e.dataSuffix && r !== "/" ? r + "/" : r
}
const w = {
    type: "static",
    content: "",
    matched: !1
};

function G(e) {
    const t = new Map;

    function r(n) {
        const o = [];
        let a = 0;
        for (; a <= n.length;) {
            const s = n.indexOf("[", a);
            if (s === -1) {
                o.push({
                    type: "static",
                    content: n.slice(a),
                    matched: !1
                });
                break
            }
            o.push({
                type: "static",
                content: n.slice(a, s),
                matched: !1
            });
            const c = n[s + 1] === "[" ? "optional" : n[s + 1] === "." ? "rest" : "required",
                u = c === "optional" ? "]]" : "]",
                f = n.indexOf(u, s);
            if (f === -1) throw new Error(`Invalid route ID ${n}`);
            const l = n.slice(s, a = f + u.length);
            o.push({
                type: c,
                content: l,
                matched: l.includes("=")
            })
        }
        return o
    }

    function i(n) {
        return t.has(n) || t.set(n, r(n)), t.get(n)
    }
    return e.sort((n, o) => {
        var a, s, c, u, f, l;
        const g = E(n).map(i),
            L = E(o).map(i);
        for (let d = 0; d < Math.max(g.length, L.length); d += 1) {
            const _ = g[d] ?? [w],
                S = L[d] ?? [w];
            for (let m = 0; m < Math.max(_.length, S.length); m += 1) {
                const h = _[m],
                    p = S[m];
                if (!!(m % 2)) {
                    if (!h) return -1;
                    if (!p) return 1;
                    const x = ((a = _[m + 1]) == null ? void 0 : a.content) || ((c = (s = g[d + 1]) == null ? void 0 : s[0]) == null ? void 0 : c.content),
                        b = ((u = S[m + 1]) == null ? void 0 : u.content) || ((l = (f = L[d + 1]) == null ? void 0 : f[0]) == null ? void 0 : l.content);
                    if (h.type === "rest" && p.type === "rest") {
                        if (x && b) continue;
                        if (x) return -1;
                        if (b) return 1
                    }
                    if (h.type === "rest") return x && !b ? -1 : 1;
                    if (p.type === "rest") return b && !x ? 1 : -1;
                    if (h.matched !== p.matched) return h.matched ? -1 : 1;
                    if (h.type !== p.type) {
                        if (h.type === "required") return -1;
                        if (p.type === "required") return 1
                    }
                } else if ((h == null ? void 0 : h.content) !== (p == null ? void 0 : p.content)) return h === w ? -1 : p === w ? 1 : J(h.content, p.content)
            }
        }
        return n < o ? 1 : -1
    })
}

function E(e) {
    return B(e.replace(/\[\[[^\]]+\]\](?!$)/g, "")).filter(Boolean)
}

function J(e, t) {
    if (e === t) return 0;
    let r = 0;
    for (; e[r] || t[r];) {
        const i = e[r],
            n = t[r];
        if (i !== n) return i === void 0 ? 1 : n === void 0 || i < n ? -1 : 1;
        r++
    }
    return 0
}
const K = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;

function N(e) {
    const t = [];
    return {
        pattern: e === "/" ? /^\/$/ : new RegExp(`^${B(e).map(i=>{const n=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(n)return t.push({name:n[1],matcher:n[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(o)return t.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const a=i.split(/\[(.+?)\](?!\])/);return"/"+a.map((c,u)=>{if(u%2){if(c.startsWith("x+"))return D(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return D(String.fromCharCode(...c.slice(2).split("-").map(_=>parseInt(_,16))));const f=K.exec(c);if(!f)throw new Error(`
            Invalid param: $ {
                c
            }
            `);const[,l,g,L,d]=f;return t.push({name:L,matcher:d,optional:!!l,rest:!!g,chained:g?u===1&&a[0]==="":!1}),g?"(.*?)":l?"([^/]*)?":"([^/]+?)"}return D(c)}).join("")}).join("")}/?$`),
        params: t
    }
}

function Q(e, t, r) {
    const i = {},
        n = e.slice(1),
        o = n.filter(s => s !== void 0);
    let a = 0;
    for (const [s, c] of t.entries()) {
        let u = n[s - a];
        if (c.chained && c.rest && a && (u = n.slice(s - a, s + 1).filter(l => l).join("/"), a = 0), u === void 0) {
            c.rest && (i[c.name] = "");
            continue
        }
        if (c.matcher && !r[c.matcher]) return;
        if ((r[c.matcher] ?? (() => !0))(u)) {
            i[c.name] = u;
            const l = t[s + 1],
                g = n[s + 1];
            l && !l.rest && l.optional && g && c.chained && (a = 0), !l && !g && Object.keys(i).length === o.length && (a = 0);
            continue
        }
        if (c.optional && c.chained) {
            a++;
            continue
        }
        return
    }
    if (!a) return i
}

function D(e) {
    return e.normalize().replace(/[[\]]/g, "\\$&").replace(/%/g, "%25").replace(/\//g, "%2[Ff]").replace(/\?/g, "%3[Ff]").replace(/#/g, "%23").replace(/[.*+?^${}()|\\]/g, "\\$&")
}
const Z = /\[(\[)?(\.\.\.)?(\w+?)(?:=(\w+))?\]\]?/g;

function z(e, t) {
    return "/" + B(e).map(r => r.replace(Z, (i, n, o, a) => {
        const s = t[a];
        if (!s) {
            if (n || o && s !== void 0) return "";
            throw new Error(`Missing parameter '${a}' in route ${e}`)
        }
        if (s[0] == "/" || s.endsWith("/")) throw new Error(`Parameter '${a}' in route ${e} cannot start or end with a slash`);
        return s
    })).filter(Boolean).join("/")
}

function F(e, t, r) {
    const i = G(t);
    for (const n of i) {
        const o = N(n),
            a = o.pattern.exec(V(e));
        if (!a) continue;
        const s = Q(a, o.params, r);
        if (s) return {
            params: s,
            id: n
        }
    }
}

function V(e) {
    return e.endsWith("/") ? e.slice(0, -1) : e
}
const B = e => e.slice(1).split("/");

function ee(e, t, r, i) {
    const n = F(e, Object.keys(r), i);
    if (!n) return e;
    const o = r[n.id];
    if (!o) return e;
    const a = o[t];
    return a ? z(a, n.params) : e
}

function R(e, t, r, i) {
    for (const [n, o] of Object.entries(r)) {
        if (!(t in o)) continue;
        const a = o[t];
        if (!a) continue;
        const s = F(e, [a], i);
        if (s) return z(n, s.params)
    }
    return e
}
const te = ({
    defaultLanguageTag: e,
    runtime: t,
    translations: r,
    matchers: i
}) => ({
    url: n
}) => {
    try {
        const {
            lang: o,
            path: a,
            dataSuffix: s,
            trailingSlash: c
        } = P(n.pathname, {
            base: T,
            availableLanguageTags: t.availableLanguageTags,
            defaultLanguageTag: e
        }), u = R(a, o, r, i);
        return I({
            path: u,
            base: T,
            dataSuffix: s,
            trailingSlash: c,
            includeLanguage: !1
        })
    } catch {
        return n.pathname
    }
};

function ne(e) {
    const t = [];
    for (const r of e) typeof r == "string" ? t.push(i => i === r) : t.push(i => r.test(i));
    return r => (r = v(r), t.some(i => i(r)))
}

function ae(e) {
    try {
        const t = new Intl.Locale(e);
        return "textInfo" in t ? t.textInfo.direction === "rtl" ? "rtl" : "ltr" : t.getTextInfo().direction === "rtl" ? "rtl" : "ltr"
    } catch {
        return "ltr"
    }
}

function re(e) {
    const t = e.map(r => [r, ae(r)]);
    return Object.fromEntries(t)
}

function ie(e, t) {
    const r = {};
    for (const i in e) {
        const n = e[i];
        if (n) {
            if (typeof n == "object") {
                r[i] = e[i];
                continue
            }
            r[i] = se(n, t)
        }
    }
    return r
}

function se(e, t) {
    const r = t.map(i => [i, e({}, {
        languageTag: i
    })]);
    return Object.fromEntries(r)
}

function oe(e, t) {
    const r = ie({}, e.availableLanguageTags),
        i = [],
        n = e.sourceLanguageTag,
        o = {
            runtime: e,
            translations: r,
            matchers: {},
            exclude: ne(i),
            defaultLanguageTag: n,
            prefixDefaultLanguage: "never",
            textDirection: re(e.availableLanguageTags),
            seo: {
                noAlternateLinks: !1
            }
        };
    return Object.freeze(r), Object.freeze(o), {
        config: o,
        reroute: () => te(o),
        handle: (a = {}) => {
            throw new Error("")
        },
        getLanguageFromUrl(a) {
            const c = a.pathname.slice(j(T).length).split("/").find(Boolean);
            return e.isAvailableLanguageTag(c) ? c : n
        },
        resolveRoute(a, s = void 0) {
            if (o.exclude(a)) return a;
            const c = j(T),
                {
                    trailingSlash: u,
                    dataSuffix: f
                } = P(a, {
                    base: c,
                    availableLanguageTags: e.availableLanguageTags,
                    defaultLanguageTag: e.sourceLanguageTag
                });
            if (s = s ?? e.languageTag(), !a.startsWith(c)) return a;
            const l = a.slice(c.length),
                g = ee(l, s, o.translations, o.matchers);
            return I({
                path: g,
                lang: s,
                base: c,
                dataSuffix: f,
                includeLanguage: !0,
                defaultLanguageTag: n,
                prefixDefaultLanguage: o.prefixDefaultLanguage,
                trailingSlash: u
            })
        },
        route(a) {
            const s = j(T),
                {
                    path: c,
                    lang: u,
                    trailingSlash: f,
                    dataSuffix: l
                } = P(a, {
                    base: s,
                    availableLanguageTags: o.runtime.availableLanguageTags,
                    defaultLanguageTag: o.defaultLanguageTag
                }),
                g = R(c, u, o.translations, o.matchers);
            return I({
                path: g,
                base: s,
                trailingSlash: f,
                dataSuffix: l,
                includeLanguage: !1
            })
        }
    }
}

function j(e) {
    return e === "" ? "" : e.startsWith("/") ? e : H(e, new URL(q(U).url))
}
let W;
const A = "nl",
    C = ["nl", "en"];
let y = () => A;
const ce = e => {
    typeof e == "function" ? y = M(e) : y = M(() => e), W !== void 0 && W(y())
};

function M(e) {
    return () => {
        const t = e();
        if (!k(t)) throw new Error("languageTag() didn't return a valid language tag. Check your setLanguageTag call");
        return t
    }
}
const ue = e => {
    W = e
};

function k(e) {
    return C.includes(e)
}
const le = Object.freeze(Object.defineProperty({
        __proto__: null,
        availableLanguageTags: C,
        isAvailableLanguageTag: k,
        get languageTag() {
            return y
        },
        onSetLanguageTag: ue,
        setLanguageTag: ce,
        sourceLanguageTag: A
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    me = oe(le);
export {
    R as a, ee as b, C as c, P as g, me as i, y as l, H as n, I as s
};
