import {
    s as t
} from "./entry.B4BmtFq6.js";
const a = () => {
        const s = t;
        return {
            page: {
                subscribe: s.page.subscribe
            },
            navigating: {
                subscribe: s.navigating.subscribe
            },
            updated: s.updated
        }
    },
    n = {
        subscribe(s) {
            return a().page.subscribe(s)
        }
    },
    o = "data-no-translate",
    c = "__data.json",
    b = ".html__data.json",
    i = "paraglide:lang";
export {
    c as D, b as H, i as L, o as N, n as p
};
