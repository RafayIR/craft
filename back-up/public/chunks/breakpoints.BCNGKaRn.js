import { w as a } from "./index.BH183J0c.js";
import { g as o } from "./entry.B4BmtFq6.js";
import { i as l, l as t } from "./i18n.uwWGOJCB.js";


const S = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global, y = a(null), r = a(!1), E = a(!1), s = a(!1), N = a(0);


function R(n, e) { n.preventDefault(), r.set(!1), s.set(!0), s.subscribe(i => { i || o(l.resolveRoute(e)) }) }
const c = () => "Expertise", g = () => "Expertise", v = (n = {}, e = {}) => ({ en: g, nl: c })[e.languageTag ?? t()](),
    u = () => "Deliverables",
    b = () => "Deliverables",
    d = (n = {}, e = {}) => ({ en: b, nl: u })[e.languageTag ?? t()](),
    p = () => "Onze visie",
    f = () => "Our vision",
    m = (n = {}, e = {}) => ({ en: f, nl: p })[e.languageTag ?? t()](), _ = () => "Contact",
    h = () => "Contact", x = (n = {}, e = {}) => ({ en: h, nl: _ })[e.languageTag ?? t()](),    
    T = () => "Studio", $ = () => "Studio",
    w = (n = {}, e = {}) => ({ en: $, nl: T })[e.languageTag ?? t()](),
    k = () => [{ label: "CRFTD", href: "/", selector: "#crftd" },
    { label: v(), href: "/#expertise", selector: "#expertise" },
    { label: d(), href: "/#deliverables", selector: "#deliverables" },
    { label: m(), href: "/#vision", selector: "#vision" },
    { label: w(), href: "/#studio", selector: "#studio" },
    { label: x(), href: "/#contact", selector: "#contact" }],
    z = { xs: 375, s: 414, m: 768, l: 1024, xl: 1440, hd: 1920 };



export { k as N, N as a, z as b, E as d, S as g, y as l, r as m, R as n, s };
