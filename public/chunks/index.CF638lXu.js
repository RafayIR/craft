import {
    N as c
} from "./constants.CasMNmVQ.js";
import {
    s as g,
    g as T
} from "./index.BH183J0c.js";
const f = {},
    _ = () => T(f),
    m = n => {
        g(f, n)
    };

function x() {
    const n = _();

    function o(t, e) {
        return typeof t != "string" || !n ? t : n.translateHref(t, e)
    }

    function a(t, e) {
        if (t[c] === !0) return t;
        for (const {
                attribute_name: r,
                lang_attribute_name: i
            }
            of e)
            if (r in t) {
                const u = t[r],
                    s = i ? t[i] : void 0;
                t[r] = o(u, typeof s == "string" ? s : void 0)
            } return t
    }
    return [o, a]
}
export {
    x as g, m as s
};
