import {
    c as T,
    Y as re,
    Z as ce,
    r as ae,
    _ as ie,
    d as le,
    m as ue,
    f as de,
    p as fe,
    q as me,
    $ as I,
    v as ge,
    a0 as R
} from "./vue-e0bc46a9.js";
import {
    c as pe,
    l as he,
    a as ve,
    b as H,
    M as J,
    t as ye,
    d as be,
    C as Se,
    S as N,
    o as P,
    e as U,
    f as we
} from "./vendor-8ca03a30.js";
import "./__commonjsHelpers__-042e6b4d.js";

(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
    new MutationObserver(s => {
        for (const o of s) if (o.type === "childList") for (const a of o.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && n(a)
    }).observe(document, {childList: !0, subtree: !0});

    function r(s) {
        const o = {};
        return s.integrity && (o.integrity = s.integrity), s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function n(s) {
        if (s.ep) return;
        s.ep = !0;
        const o = r(s);
        fetch(s.href, o)
    }
})();
const _e = {}, Ce = new Proxy(_e, {
    get(e, t) {
        return e[t] || t
    }
}), ke = {}, Le = new Proxy(ke, {
    get(e, t) {
        return !t.toString().startsWith("__v_") && e[t], e[t]
    }
}), Oe = {"zh-CN": he, "en-US": ve}, E = {"zh-CN": "zh-CN", "en-US": "en-US"};
let x = "lang";
const Re = "zh-CN";
try {
    x = localStorage == null ? void 0 : localStorage.getItem(x)
} catch {
    console.warn("[Client]:localStorage is not available.")
}
const Ee = Re, _ = pe({locale: E[Ee], fallbackLocale: E["zh-CN"], messages: {"zh-CN": Ce, "en-US": Le}}),
    st = (e, t = {}) => `${_.global.t(e, t)}`, xe = e => {
        if (E[e]) {
            _.global.locale = e;
            try {
                localStorage == null || localStorage.setItem(x, e)
            } catch {
                console.warn("[Client]:localStorage is not available.")
            }
            window.location.reload()
        }
    }, Ae = () => {
        const e = T(() => _.global.locale);
        return {setLang: xe, lang: e}
    }, qe = T(() => Oe[_.global.locale]), y = {
        error: -1,
        success: [0, 200, 204],
        needAuthorization: 401,
        notFound: 404,
        notAllowed: [403, 1403],
        needRequest: 202,
        needMessage: [208, 1e3]
    }, j = () => {
        let e = () => {
        };
        const t = new Promise(r => {
            e = r
        });
        return [e, t]
    }, {CancelToken: Y} = H, D = Math.random().toString().slice(2), Te = 1 * 60 * 1e3, Me = "/api";
let k;
const Ie = () => {
    k == null || k();
    const {close: e} = J.error("登录失效，请重新登录！");
    k = e
};
let Z = Y.source();
const Ne = () => {
    Z = Y.source()
}, Pe = H.create({baseURL: Me, timeout: Te}), z = e => y.success.includes(+e), Q = async e => {
    const {getToken: t, logout: r} = ee(), {lang: n} = Ae(), s = Z;
    e.cancelToken = e.cancelToken || s.token;
    let o = !1;
    e.headers = e.headers || {}, t() && (e.headers.Authorization = t()), e.headers.lang = n.value;
    const a = i => {
        const {data: c} = i, [u, h] = j(), f = new FileReader;
        return f.readAsText(c, "utf-8"), f.onload = () => {
            var M;
            try {
                const C = JSON.parse(f.result);
                if (C) {
                    u(C);
                    return
                }
            } catch (C) {
                console.log(C)
            }
            const se = (M = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(i.headers["content-disposition"])) == null ? void 0 : M[1],
                ne = new Blob([c], {type: i.headers["content-type"]});
            u({code: y.success[0], data: {name: se, blob: ne}, message: "", isRequestSuccess: !0})
        }, h
    }, l = (i, c) => {
        var h;
        const {code: u} = i.data;
        (u === y.needAuthorization || ((h = c == null ? void 0 : c.response) == null ? void 0 : h.status) === 401) && (o = !0, Ie(), s.cancel(D), Ne(), r())
    }, m = e.responseType === "blob";

    function d(i) {
        o || J.error(i || this.message)
    }

    try {
        const i = await Pe.request(e);
        let {data: c} = i;
        return m && (c = await a(i)), l(i), c.message = c.message || c.msg || "", c.isRequestSuccess = z(c.code), c.showRequestErrorMessage = d.bind(c), c
    } catch (i) {
        if (i.message === D) {
            const [, f] = j();
            return f
        }
        const c = i.response;
        if (!c) {
            const f = {code: y.error, message: i.message, isRequestSuccess: !1};
            return f.showRequestErrorMessage = d.bind(f), f
        }
        let {data: u} = c;
        if (m && (u = await a(c)), typeof u == "string") {
            const f = {code: y.error, message: i.message || c.statusText, isRequestSuccess: !1};
            return f.showRequestErrorMessage = d.bind(f), f
        }
        l(c, i), u && (u.message = u.message || u.msg || i.message || "", u.isRequestSuccess = z(u.code), u.showRequestErrorMessage = d.bind(u));
        const h = {code: y.error, message: i.message, isRequestSuccess: !1};
        return h.showRequestErrorMessage = d.bind(h), Object.assign(h, u)
    }
}, nt = e => Q({url: "/v1/user/login", method: "post", data: e}), Ue = () => Q({url: "/v1/user/detail"});
var b = (e => (e.home = "/static/index.html", e.login = "/login", e.register = "/register", e.notFound = "/404", e.app = "/app", e.appConfig = "/app/config/:id", e.appCreate = "/appCreate", e.library = "/library", e.knowledge = "/library/knowledge", e.history = "/library/history", e.config = "/config", e))(b || {}),
    A = (e => (e.Admin = "admin", e.SuperAdmin = "super_admin", e.User = "user", e))(A || {});
const je = "modulepreload", De = function (e) {
        return "/" + e
    }, B = {}, O = function (t, r, n) {
        if (!r || r.length === 0) return t();
        const s = document.getElementsByTagName("link");
        return Promise.all(r.map(o => {
            if (o = De(o), o in B) return;
            B[o] = !0;
            const a = o.endsWith(".css"), l = a ? '[rel="stylesheet"]' : "";
            if (!!n) for (let i = s.length - 1; i >= 0; i--) {
                const c = s[i];
                if (c.href === o && (!a || c.rel === "stylesheet")) return
            } else if (document.querySelector(`link[href="${o}"]${l}`)) return;
            const d = document.createElement("link");
            if (d.rel = a ? "stylesheet" : je, a || (d.as = "script", d.crossOrigin = ""), d.href = o, document.head.appendChild(d), a) return new Promise((i, c) => {
                d.addEventListener("load", i), d.addEventListener("error", () => c(new Error(`Unable to preload CSS for ${o}`)))
            })
        })).then(() => t())
    }, ze = [{
        path: b.login,
        name: b.login,
        component: () => O(() => import("./login-15119fee.js"), ["assets/login-15119fee.js", "assets/vue-e0bc46a9.js", "assets/vendor-8ca03a30.js", "assets/__commonjsHelpers__-042e6b4d.js"])
    }, {
        path: b.home,
        name: b.home,
        component: () => O(() => import("./home-4072dbf8.js").then(e => e.h), ["assets/home-4072dbf8.js", "assets/vue-e0bc46a9.js", "assets/vendor-8ca03a30.js", "assets/__commonjsHelpers__-042e6b4d.js"]),
        meta: {showSideBar: !0, needLogin: !0}
    }, {
        path: "/:pathMatch(.*)*",
        component: () => O(() => import("./home-4072dbf8.js").then(e => e.h), ["assets/home-4072dbf8.js", "assets/vue-e0bc46a9.js", "assets/vendor-8ca03a30.js", "assets/__commonjsHelpers__-042e6b4d.js"])
    }], Be = "/", X = re({history: ce(Be), routes: ze}), S = ae(), q = "token", Fe = () => localStorage.getItem(q) || "",
    F = e => e ? localStorage.setItem(q, e) : localStorage.removeItem(q), ee = () => {
        const e = async () => {
            const {data: n, showRequestErrorMessage: s, isRequestSuccess: o} = await Ue();
            if (!o) {
                s();
                return
            }
            S.value = n
        }, t = async () => {
            F(), S.value = void 0, X.push({name: b.login})
        }, r = T(() => {
            var n, s;
            return ((n = S.value) == null ? void 0 : n.user_role) === A.Admin || ((s = S.value) == null ? void 0 : s.user_role) === A.SuperAdmin
        });
        return {getUser: e, user: S, isAdmin: r, logout: t, setToken: F, getToken: Fe}
    }, v = ie(null);

function $e() {
    ee();
    const e = n => {
        var o, a;
        if (!v.value) return;
        const s = () => {
            var l;
            n(), (l = v.value) == null || l.off("connect", s)
        };
        (o = v.value) != null && o.connected ? n() : (a = v.value) == null || a.on("connect", s)
    };
    return {
        socket: v, onAndAutoOff: n => {
            const s = Object.entries(n).reduce((o, [a, l]) => (o[a] = m => {
                l(m)
            }, o), {});
            ye(async () => {
                for (const [o, a] of Object.entries(s)) e(() => {
                    v.value.on(o, a)
                })
            }), be(async () => {
                var o;
                for (const [a, l] of Object.entries(s)) (o = v.value) == null || o.off(a, l)
            })
        }, emit: (n, ...s) => {
            e(() => {
                var o;
                (o = v.value) == null || o.emit(n, ...s)
            })
        }
    }
}

const Ve = le({
    __name: "App", setup(e) {
        return $e(), (t, r) => {
            const n = ue("router-view");
            return de(), fe(I(Se), {locale: I(qe)}, {default: me(() => [ge(n)]), _: 1}, 8, ["locale"])
        }
    }
});
const te = (e, t) => Object.prototype.toString.call(e) === t, Ke = e => te(e, "[object Boolean]"),
    oe = e => te(e, "[object Object]"), rt = e => {
        var t, r;
        if ((t = navigator == null ? void 0 : navigator.clipboard) != null && t.writeText) (r = navigator == null ? void 0 : navigator.clipboard) == null || r.writeText(e); else {
            const n = document.createElement("textarea");
            n.value = e, n.style.position = "absolute", n.style.opacity = "0", n.style.left = "-999999px", n.style.top = "-999999px", document.body.appendChild(n), n.focus(), n.select(), document.execCommand("copy")
        }
    }, ct = e => new TextDecoder("utf-8").decode(e), We = (e, t) => oe(e) ? t.every(r => Object.hasOwn(e, r)) : !1,
    Ge = e => oe(e) && We(e, ["loading"]), $ = e => {
        const t = {loading: !0, text: ""};
        return Ke(e) ? t.loading = e : Ge(e) ? (t.loading = e.loading, t.text = e.text || "") : (console.warn("please check v-loading binding, should be boolean or { loading: boolean; text: string; }"), t.loading = !!e), t
    }, V = "loadingDirectiveElement", K = "fullScreen", w = "posRelative", g = Symbol("vLoadingDirective"),
    p = Symbol("loadingSpinApp"), He = {
        mounted: (e, t) => {
            e.classList.remove(w);
            const n = window.getComputedStyle(e).position;
            if (e[g] && (e[g].remove(), delete e[g]), e[p] && (e[p].unmount(), delete e[p]), !t.value) return;
            const {loading: s, text: o} = $(t.value);
            if (!s) return;
            const a = t.arg === "fullScreen", l = document.createElement("div");
            l.classList.add(V), a && l.classList.add(K);
            const m = R(N, {tip: o});
            m.mount(l), n === "static" && e.classList.add(w), e[g] = l, e[p] = m, e.append(l)
        }, updated: (e, t) => {
            e.classList.remove(w);
            const n = window.getComputedStyle(e).position;
            if (e[g] && (e[g].remove(), delete e[g]), e[p] && (e[p].unmount(), delete e[p]), !t.value) return;
            const {loading: s, text: o} = $(t.value);
            if (!s) return;
            const a = t.arg === "fullScreen", l = document.createElement("div");
            l.classList.add(V), a && l.classList.add(K);
            const m = R(N, {tip: o});
            m.mount(l), n === "static" && e.classList.add(w), e[g] = l, e[p] = m, e.append(l)
        }, unmounted: e => {
            e.classList.remove(w), e[g] && (e[g].remove(), delete e[g]), e[p] && (e[p].unmount(), delete e[p])
        }
    }, W = e => typeof e == "function", L = Symbol("clickOutside"), G = e => () => {
        e()
    }, Je = {
        mounted: (e, t) => {
            if (!W(t.value)) {
                console.warn("v-clickoutside binding should be function");
                return
            }
            const r = G(t.value);
            e[L] = r, P("clickoutside", e, r)
        }, updated: (e, t) => {
            let r = e[L];
            if (r && U("clickoutside", e, r), !W(t.value)) {
                console.warn("v-clickoutside binding should be function");
                return
            }
            r = G(t.value), e[L] = r, P("clickoutside", e, r)
        }, unmounted: e => {
            const t = e[L];
            t && U("clickoutside", e, t)
        }
    }, Ye = e => {
        e.directive("loading", He), e.directive("clickoutside", Je)
    }, Ze = {install: Ye};
const Qe = R(Ve);
Qe.use(we()).use(X).use(Ze).use(_).mount("#app");
export {rt as C, b as P, ct as U, O as _, nt as l, Q as r, st as t, ee as u};
