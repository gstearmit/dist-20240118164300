import {
    r as U,
    a as xe,
    i as nt,
    c as C,
    g as Yt,
    b as Rr,
    d as te,
    w as Pe,
    o as We,
    e as qn,
    f as R,
    h as J,
    j as ae,
    n as G,
    k as Oe,
    l as de,
    m as ie,
    p as fe,
    q as Se,
    s as le,
    t as Qe,
    u as Ue,
    v as V,
    T as an,
    x as Sr,
    y as Be,
    z as Re,
    A as Xe,
    B as Lt,
    F as ot,
    C as tu,
    D as Wt,
    E as ln,
    G as Dt,
    H as gf,
    I as yf,
    J as nu,
    K as mn,
    L as vn,
    M as gn,
    N as bf,
    O as aa,
    P as Gn,
    Q as _f,
    R as sa,
    S as _n,
    U as Cf,
    V as Sf,
    W as wf,
    X as Ef
} from "./vue-e0bc46a9.js";
import {c as Ti, g as ru, a as $f} from "./__commonjsHelpers__-042e6b4d.js";

const un = Object.prototype.toString;

function Ge(e) {
    return un.call(e) === "[object Array]"
}

function Kn(e) {
    return un.call(e) === "[object Null]"
}

function Ai(e) {
    return un.call(e) === "[object Boolean]"
}

function De(e) {
    return un.call(e) === "[object Object]"
}

const Wa = e => un.call(e) === "[object Promise]";

function Rt(e) {
    return un.call(e) === "[object String]"
}

function me(e) {
    return un.call(e) === "[object Number]" && e === e
}

function ht(e) {
    return e === void 0
}

function qe(e) {
    return typeof e == "function"
}

function kf(e) {
    return De(e) && Object.keys(e).length === 0
}

const ou = e => (e == null ? void 0 : e.$) !== void 0, Ht = Symbol("ArcoConfigProvider"), er = {
    formatYear: "YYYY 年",
    formatMonth: "YYYY 年 MM 月",
    today: "今天",
    view: {month: "月", year: "年", week: "周", day: "日"},
    month: {
        long: {
            January: "一月",
            February: "二月",
            March: "三月",
            April: "四月",
            May: "五月",
            June: "六月",
            July: "七月",
            August: "八月",
            September: "九月",
            October: "十月",
            November: "十一月",
            December: "十二月"
        },
        short: {
            January: "一月",
            February: "二月",
            March: "三月",
            April: "四月",
            May: "五月",
            June: "六月",
            July: "七月",
            August: "八月",
            September: "九月",
            October: "十月",
            November: "十一月",
            December: "十二月"
        }
    },
    week: {
        long: {
            self: "周",
            monday: "周一",
            tuesday: "周二",
            wednesday: "周三",
            thursday: "周四",
            friday: "周五",
            saturday: "周六",
            sunday: "周日"
        },
        short: {
            self: "周",
            monday: "一",
            tuesday: "二",
            wednesday: "三",
            thursday: "四",
            friday: "五",
            saturday: "六",
            sunday: "日"
        }
    }
}, Of = {
    locale: "zh-CN",
    empty: {description: "暂无数据"},
    drawer: {okText: "确定", cancelText: "取消"},
    popconfirm: {okText: "确定", cancelText: "取消"},
    modal: {okText: "确定", cancelText: "取消"},
    pagination: {goto: "前往", page: "页", countPerPage: "条/页", total: "共 {0} 条"},
    table: {okText: "确定", resetText: "重置"},
    upload: {
        start: "开始",
        cancel: "取消",
        delete: "删除",
        retry: "点击重试",
        buttonText: "点击上传",
        preview: "预览",
        drag: "点击或拖拽文件到此处上传",
        dragHover: "释放文件并开始上传",
        error: "上传失败"
    },
    calendar: er,
    datePicker: {
        view: er.view,
        month: er.month,
        week: er.week,
        placeholder: {date: "请选择日期", week: "请选择周", month: "请选择月份", year: "请选择年份", quarter: "请选择季度", time: "请选择时间"},
        rangePlaceholder: {
            date: ["开始日期", "结束日期"],
            week: ["开始周", "结束周"],
            month: ["开始月份", "结束月份"],
            year: ["开始年份", "结束年份"],
            quarter: ["开始季度", "结束季度"],
            time: ["开始时间", "结束时间"]
        },
        selectTime: "选择时间",
        today: "今天",
        now: "此刻",
        ok: "确定"
    },
    image: {loading: "加载中"},
    imagePreview: {
        fullScreen: "全屏",
        rotateRight: "向右旋转",
        rotateLeft: "向左旋转",
        zoomIn: "放大",
        zoomOut: "缩小",
        originalSize: "原始尺寸"
    },
    typography: {copied: "已复制", copy: "复制", expand: "展开", collapse: "折叠", edit: "编辑"}
}, Lf = U("zh-CN"), Tf = xe({"zh-CN": Of}), iu = () => {
    const e = nt(Ht, void 0), t = C(() => {
        var o;
        return (o = e == null ? void 0 : e.locale) != null ? o : Tf[Lf.value]
    });
    return {
        locale: C(() => t.value.locale), t: (o, ...i) => {
            const a = o.split(".");
            let s = t.value;
            for (const l of a) {
                if (!s[l]) return o;
                s = s[l]
            }
            return Rt(s) && i.length > 0 ? s.replace(/{(\d+)}/g, (l, u) => {
                var c;
                return (c = i[u]) != null ? c : l
            }) : s
        }
    }
};
var Af = Object.defineProperty, Nf = Object.defineProperties, Pf = Object.getOwnPropertyDescriptors,
    Ha = Object.getOwnPropertySymbols, If = Object.prototype.hasOwnProperty, Mf = Object.prototype.propertyIsEnumerable,
    qa = (e, t, n) => t in e ? Af(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
    Rf = (e, t) => {
        for (var n in t || (t = {})) If.call(t, n) && qa(e, n, t[n]);
        if (Ha) for (var n of Ha(t)) Mf.call(t, n) && qa(e, n, t[n]);
        return e
    }, Bf = (e, t) => Nf(e, Pf(t));
const Df = "A", jf = "arco", Ni = "$arco", Fe = e => {
    var t;
    return (t = e == null ? void 0 : e.componentPrefix) != null ? t : Df
}, Ve = (e, t) => {
    var n;
    t && t.classPrefix && (e.config.globalProperties[Ni] = Bf(Rf({}, (n = e.config.globalProperties[Ni]) != null ? n : {}), {classPrefix: t.classPrefix}))
}, re = e => {
    var t, n, r;
    const o = Yt(), i = nt(Ht, void 0),
        a = (r = (n = i == null ? void 0 : i.prefixCls) != null ? n : (t = o == null ? void 0 : o.appContext.config.globalProperties[Ni]) == null ? void 0 : t.classPrefix) != null ? r : jf;
    return e ? `${a}-${e}` : a
};
var au = function () {
    if (typeof Map < "u") return Map;

    function e(t, n) {
        var r = -1;
        return t.some(function (o, i) {
            return o[0] === n ? (r = i, !0) : !1
        }), r
    }

    return function () {
        function t() {
            this.__entries__ = []
        }

        return Object.defineProperty(t.prototype, "size", {
            get: function () {
                return this.__entries__.length
            }, enumerable: !0, configurable: !0
        }), t.prototype.get = function (n) {
            var r = e(this.__entries__, n), o = this.__entries__[r];
            return o && o[1]
        }, t.prototype.set = function (n, r) {
            var o = e(this.__entries__, n);
            ~o ? this.__entries__[o][1] = r : this.__entries__.push([n, r])
        }, t.prototype.delete = function (n) {
            var r = this.__entries__, o = e(r, n);
            ~o && r.splice(o, 1)
        }, t.prototype.has = function (n) {
            return !!~e(this.__entries__, n)
        }, t.prototype.clear = function () {
            this.__entries__.splice(0)
        }, t.prototype.forEach = function (n, r) {
            r === void 0 && (r = null);
            for (var o = 0, i = this.__entries__; o < i.length; o++) {
                var a = i[o];
                n.call(r, a[1], a[0])
            }
        }, t
    }()
}(), Pi = typeof window < "u" && typeof document < "u" && window.document === document, wr = function () {
    return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")()
}(), Ff = function () {
    return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(wr) : function (e) {
        return setTimeout(function () {
            return e(Date.now())
        }, 1e3 / 60)
    }
}(), Vf = 2;

function xf(e, t) {
    var n = !1, r = !1, o = 0;

    function i() {
        n && (n = !1, e()), r && s()
    }

    function a() {
        Ff(i)
    }

    function s() {
        var l = Date.now();
        if (n) {
            if (l - o < Vf) return;
            r = !0
        } else n = !0, r = !1, setTimeout(a, t);
        o = l
    }

    return s
}

var zf = 20, Uf = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
    Wf = typeof MutationObserver < "u", Hf = function () {
        function e() {
            this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = xf(this.refresh.bind(this), zf)
        }

        return e.prototype.addObserver = function (t) {
            ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
        }, e.prototype.removeObserver = function (t) {
            var n = this.observers_, r = n.indexOf(t);
            ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_()
        }, e.prototype.refresh = function () {
            var t = this.updateObservers_();
            t && this.refresh()
        }, e.prototype.updateObservers_ = function () {
            var t = this.observers_.filter(function (n) {
                return n.gatherActive(), n.hasActive()
            });
            return t.forEach(function (n) {
                return n.broadcastActive()
            }), t.length > 0
        }, e.prototype.connect_ = function () {
            !Pi || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Wf ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, e.prototype.disconnect_ = function () {
            !Pi || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, e.prototype.onTransitionEnd_ = function (t) {
            var n = t.propertyName, r = n === void 0 ? "" : n, o = Uf.some(function (i) {
                return !!~r.indexOf(i)
            });
            o && this.refresh()
        }, e.getInstance = function () {
            return this.instance_ || (this.instance_ = new e), this.instance_
        }, e.instance_ = null, e
    }(), su = function (e, t) {
        for (var n = 0, r = Object.keys(t); n < r.length; n++) {
            var o = r[n];
            Object.defineProperty(e, o, {value: t[o], enumerable: !1, writable: !1, configurable: !0})
        }
        return e
    }, Cn = function (e) {
        var t = e && e.ownerDocument && e.ownerDocument.defaultView;
        return t || wr
    }, lu = Br(0, 0, 0, 0);

function Er(e) {
    return parseFloat(e) || 0
}

function Ga(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return t.reduce(function (r, o) {
        var i = e["border-" + o + "-width"];
        return r + Er(i)
    }, 0)
}

function qf(e) {
    for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, o = t; r < o.length; r++) {
        var i = o[r], a = e["padding-" + i];
        n[i] = Er(a)
    }
    return n
}

function Gf(e) {
    var t = e.getBBox();
    return Br(0, 0, t.width, t.height)
}

function Kf(e) {
    var t = e.clientWidth, n = e.clientHeight;
    if (!t && !n) return lu;
    var r = Cn(e).getComputedStyle(e), o = qf(r), i = o.left + o.right, a = o.top + o.bottom, s = Er(r.width),
        l = Er(r.height);
    if (r.boxSizing === "border-box" && (Math.round(s + i) !== t && (s -= Ga(r, "left", "right") + i), Math.round(l + a) !== n && (l -= Ga(r, "top", "bottom") + a)), !Xf(e)) {
        var u = Math.round(s + i) - t, c = Math.round(l + a) - n;
        Math.abs(u) !== 1 && (s -= u), Math.abs(c) !== 1 && (l -= c)
    }
    return Br(o.left, o.top, s, l)
}

var Yf = function () {
    return typeof SVGGraphicsElement < "u" ? function (e) {
        return e instanceof Cn(e).SVGGraphicsElement
    } : function (e) {
        return e instanceof Cn(e).SVGElement && typeof e.getBBox == "function"
    }
}();

function Xf(e) {
    return e === Cn(e).document.documentElement
}

function Jf(e) {
    return Pi ? Yf(e) ? Gf(e) : Kf(e) : lu
}

function Zf(e) {
    var t = e.x, n = e.y, r = e.width, o = e.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object,
        a = Object.create(i.prototype);
    return su(a, {x: t, y: n, width: r, height: o, top: n, right: t + r, bottom: o + n, left: t}), a
}

function Br(e, t, n, r) {
    return {x: e, y: t, width: n, height: r}
}

var Qf = function () {
    function e(t) {
        this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Br(0, 0, 0, 0), this.target = t
    }

    return e.prototype.isActive = function () {
        var t = Jf(this.target);
        return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
    }, e.prototype.broadcastRect = function () {
        var t = this.contentRect_;
        return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
    }, e
}(), ed = function () {
    function e(t, n) {
        var r = Zf(n);
        su(this, {target: t, contentRect: r})
    }

    return e
}(), td = function () {
    function e(t, n, r) {
        if (this.activeObservations_ = [], this.observations_ = new au, typeof t != "function") throw new TypeError("The callback provided as parameter 1 is not a function.");
        this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r
    }

    return e.prototype.observe = function (t) {
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
            if (!(t instanceof Cn(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var n = this.observations_;
            n.has(t) || (n.set(t, new Qf(t)), this.controller_.addObserver(this), this.controller_.refresh())
        }
    }, e.prototype.unobserve = function (t) {
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
            if (!(t instanceof Cn(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var n = this.observations_;
            n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this))
        }
    }, e.prototype.disconnect = function () {
        this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
    }, e.prototype.gatherActive = function () {
        var t = this;
        this.clearActive(), this.observations_.forEach(function (n) {
            n.isActive() && t.activeObservations_.push(n)
        })
    }, e.prototype.broadcastActive = function () {
        if (this.hasActive()) {
            var t = this.callbackCtx_, n = this.activeObservations_.map(function (r) {
                return new ed(r.target, r.broadcastRect())
            });
            this.callback_.call(t, n, t), this.clearActive()
        }
    }, e.prototype.clearActive = function () {
        this.activeObservations_.splice(0)
    }, e.prototype.hasActive = function () {
        return this.activeObservations_.length > 0
    }, e
}(), uu = typeof WeakMap < "u" ? new WeakMap : new au, cu = function () {
    function e(t) {
        if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var n = Hf.getInstance(), r = new td(t, n, this);
        uu.set(this, r)
    }

    return e
}();
["observe", "unobserve", "disconnect"].forEach(function (e) {
    cu.prototype[e] = function () {
        var t;
        return (t = uu.get(this))[e].apply(t, arguments)
    }
});
var la = function () {
    return typeof wr.ResizeObserver < "u" ? wr.ResizeObserver : cu
}(), Ka;
(function (e) {
    e[e.ELEMENT = 1] = "ELEMENT", e[e.FUNCTIONAL_COMPONENT = 2] = "FUNCTIONAL_COMPONENT", e[e.STATEFUL_COMPONENT = 4] = "STATEFUL_COMPONENT", e[e.COMPONENT = 6] = "COMPONENT", e[e.TEXT_CHILDREN = 8] = "TEXT_CHILDREN", e[e.ARRAY_CHILDREN = 16] = "ARRAY_CHILDREN", e[e.SLOTS_CHILDREN = 32] = "SLOTS_CHILDREN", e[e.TELEPORT = 64] = "TELEPORT", e[e.SUSPENSE = 128] = "SUSPENSE", e[e.COMPONENT_SHOULD_KEEP_ALIVE = 256] = "COMPONENT_SHOULD_KEEP_ALIVE", e[e.COMPONENT_KEPT_ALIVE = 512] = "COMPONENT_KEPT_ALIVE"
})(Ka || (Ka = {}));
var Ya;
(function (e) {
    e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.DEV_ROOT_FRAGMENT = 2048] = "DEV_ROOT_FRAGMENT", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL"
})(Ya || (Ya = {}));
const Dr = e => !!(e && e.shapeFlag & 1), jr = (e, t) => !!(e && e.shapeFlag & 6),
    nd = (e, t) => !!(e && e.shapeFlag & 8), ua = (e, t) => !!(e && e.shapeFlag & 16),
    fu = (e, t) => !!(e && e.shapeFlag & 32), yn = e => {
        var t, n;
        if (e) for (const r of e) {
            if (Dr(r) || jr(r)) return r;
            if (ua(r, r.children)) {
                const o = yn(r.children);
                if (o) return o
            } else if (fu(r, r.children)) {
                const o = (n = (t = r.children).default) == null ? void 0 : n.call(t);
                if (o) {
                    const i = yn(o);
                    if (i) return i
                }
            } else if (Ge(r)) {
                const o = yn(r);
                if (o) return o
            }
        }
    }, rd = e => {
        if (!e) return !0;
        for (const t of e) if (t.children) return !1;
        return !0
    }, du = (e, t) => {
        if (e && e.length > 0) for (let n = 0; n < e.length; n++) {
            const r = e[n];
            if (Dr(r) || jr(r)) {
                const i = qe(t) ? t(r) : t;
                return e[n] = Rr(r, i, !0), !0
            }
            const o = hu(r);
            if (o && o.length > 0 && du(o, t)) return !0
        }
        return !1
    }, hu = e => {
        if (ua(e, e.children)) return e.children;
        if (Ge(e)) return e
    }, pu = e => {
        var t, n;
        if (Dr(e)) return e.el;
        if (jr(e)) {
            if (((t = e.el) == null ? void 0 : t.nodeType) === 1) return e.el;
            if ((n = e.component) != null && n.subTree) {
                const r = pu(e.component.subTree);
                if (r) return r
            }
        } else {
            const r = hu(e);
            return mu(r)
        }
    }, mu = e => {
        if (e && e.length > 0) for (const t of e) {
            const n = pu(t);
            if (n) return n
        }
    }, jn = (e, t = !1) => {
        var n, r;
        const o = [];
        for (const i of e ?? []) Dr(i) || jr(i) || t && nd(i, i.children) ? o.push(i) : ua(i, i.children) ? o.push(...jn(i.children, t)) : fu(i, i.children) ? o.push(...jn((r = (n = i.children).default) == null ? void 0 : r.call(n), t)) : Ge(i) && o.push(...jn(i, t));
        return o
    }, yt = e => {
        if (e) return qe(e) ? e : () => e
    };
var vu = te({
    name: "ResizeObserver", emits: ["resize"], setup(e, {emit: t, slots: n}) {
        let r;
        const o = U(), i = C(() => ou(o.value) ? o.value.$el : o.value), a = l => {
            l && (r = new la(u => {
                const c = u[0];
                t("resize", c)
            }), r.observe(l))
        }, s = () => {
            r && (r.disconnect(), r = null)
        };
        return Pe(i, l => {
            r && s(), l && a(l)
        }), We(() => {
            i.value && a(i.value)
        }), qn(() => {
            s()
        }), () => {
            var l, u;
            const c = yn((u = (l = n.default) == null ? void 0 : l.call(n)) != null ? u : []);
            return c ? Rr(c, {ref: o}, !0) : null
        }
    }
});
const gu = typeof window > "u" ? global : window, od = gu.requestAnimationFrame, Xa = gu.cancelAnimationFrame;

function id(e) {
    let t = 0;
    const n = (...r) => {
        t && Xa(t), t = od(() => {
            e(...r), t = 0
        })
    };
    return n.cancel = () => {
        Xa(t), t = 0
    }, n
}

const ca = () => {
    }, fa = (() => {
        try {
            return !(typeof window < "u" && document !== void 0)
        } catch {
            return !0
        }
    })(), pt = (() => fa ? ca : (e, t, n, r = !1) => {
        e.addEventListener(t, n, r)
    })(), qt = (() => fa ? ca : (e, t, n, r = !1) => {
        e.removeEventListener(t, n, r)
    })(), ad = (e, t) => {
        if (!e || !t) return !1;
        let n = t;
        for (; n;) {
            if (n === e) return !0;
            n = n.parentNode
        }
        return !1
    }, da = e => {
        const t = document.createElement("div");
        return t.setAttribute("class", `arco-overlay arco-overlay-${e}`), t
    }, sd = (e, t) => {
        var n;
        return fa ? ca() : (n = (t ?? document).querySelector(e)) != null ? n : void 0
    }, Ii = (e, t) => {
        if (Rt(e)) {
            const n = e[0] === "#" ? `[id='${e.slice(1)}']` : e;
            return sd(n, t)
        }
        return e
    }, ld = (e, t) => {
        const n = e.getBoundingClientRect(), r = t.getBoundingClientRect();
        return {
            top: n.top - r.top,
            bottom: r.bottom - n.bottom,
            left: n.left - r.left,
            right: r.right - n.right,
            width: n.width,
            height: n.height
        }
    },
    ud = e => e.tagName === "BODY" ? document.documentElement.scrollHeight > window.innerHeight : e.scrollHeight > e.offsetHeight,
    cd = e => e.tagName === "BODY" ? window.innerWidth - (document.documentElement.offsetWidth || document.body.offsetWidth) : e.offsetWidth - e.clientWidth;
var he = (e, t) => {
    for (const [n, r] of t) e[n] = r;
    return e
};
const fd = te({
    name: "IconHover",
    props: {prefix: {type: String}, size: {type: String, default: "medium"}, disabled: {type: Boolean, default: !1}},
    setup() {
        return {prefixCls: re("icon-hover")}
    }
});

function dd(e, t, n, r, o, i) {
    return R(), J("span", {
        class: G([e.prefixCls, {
            [`${e.prefix}-icon-hover`]: e.prefix,
            [`${e.prefixCls}-size-${e.size}`]: e.size !== "medium",
            [`${e.prefixCls}-disabled`]: e.disabled
        }])
    }, [ae(e.$slots, "default")], 2)
}

var ct = he(fd, [["render", dd]]);
const hd = te({
        name: "IconClose",
        props: {
            size: {type: [Number, String]},
            strokeWidth: {type: Number, default: 4},
            strokeLinecap: {type: String, default: "butt", validator: e => ["butt", "round", "square"].includes(e)},
            strokeLinejoin: {
                type: String,
                default: "miter",
                validator: e => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
            },
            rotate: Number,
            spin: Boolean
        },
        emits: {click: e => !0},
        setup(e, {emit: t}) {
            const n = re("icon"), r = C(() => [n, `${n}-close`, {[`${n}-spin`]: e.spin}]), o = C(() => {
                const a = {};
                return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a
            });
            return {
                cls: r, innerStyle: o, onClick: a => {
                    t("click", a)
                }
            }
        }
    }), pd = ["stroke-width", "stroke-linecap", "stroke-linejoin"],
    md = de("path", {d: "M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"}, null, -1),
    vd = [md];

function gd(e, t, n, r, o, i) {
    return R(), J("svg", {
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "currentColor",
        class: G(e.cls),
        style: Oe(e.innerStyle),
        "stroke-width": e.strokeWidth,
        "stroke-linecap": e.strokeLinecap,
        "stroke-linejoin": e.strokeLinejoin,
        onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
    }, vd, 14, pd)
}

var so = he(hd, [["render", gd]]);
const Tt = Object.assign(so, {
    install: (e, t) => {
        var n;
        const r = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
        e.component(r + so.name, so)
    }
}), yd = te({
    name: "IconInfoCircleFill",
    props: {
        size: {type: [Number, String]},
        strokeWidth: {type: Number, default: 4},
        strokeLinecap: {type: String, default: "butt", validator: e => ["butt", "round", "square"].includes(e)},
        strokeLinejoin: {
            type: String,
            default: "miter",
            validator: e => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
        },
        rotate: Number,
        spin: Boolean
    },
    emits: {click: e => !0},
    setup(e, {emit: t}) {
        const n = re("icon"), r = C(() => [n, `${n}-info-circle-fill`, {[`${n}-spin`]: e.spin}]), o = C(() => {
            const a = {};
            return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a
        });
        return {
            cls: r, innerStyle: o, onClick: a => {
                t("click", a)
            }
        }
    }
}), bd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], _d = de("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z",
    fill: "currentColor",
    stroke: "none"
}, null, -1), Cd = [_d];

function Sd(e, t, n, r, o, i) {
    return R(), J("svg", {
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "currentColor",
        class: G(e.cls),
        style: Oe(e.innerStyle),
        "stroke-width": e.strokeWidth,
        "stroke-linecap": e.strokeLinecap,
        "stroke-linejoin": e.strokeLinejoin,
        onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
    }, Cd, 14, bd)
}

var lo = he(yd, [["render", Sd]]);
const Fr = Object.assign(lo, {
    install: (e, t) => {
        var n;
        const r = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
        e.component(r + lo.name, lo)
    }
}), wd = te({
    name: "IconCheckCircleFill",
    props: {
        size: {type: [Number, String]},
        strokeWidth: {type: Number, default: 4},
        strokeLinecap: {type: String, default: "butt", validator: e => ["butt", "round", "square"].includes(e)},
        strokeLinejoin: {
            type: String,
            default: "miter",
            validator: e => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
        },
        rotate: Number,
        spin: Boolean
    },
    emits: {click: e => !0},
    setup(e, {emit: t}) {
        const n = re("icon"), r = C(() => [n, `${n}-check-circle-fill`, {[`${n}-spin`]: e.spin}]), o = C(() => {
            const a = {};
            return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a
        });
        return {
            cls: r, innerStyle: o, onClick: a => {
                t("click", a)
            }
        }
    }
}), Ed = ["stroke-width", "stroke-linecap", "stroke-linejoin"], $d = de("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",
    fill: "currentColor",
    stroke: "none"
}, null, -1), kd = [$d];

function Od(e, t, n, r, o, i) {
    return R(), J("svg", {
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "currentColor",
        class: G(e.cls),
        style: Oe(e.innerStyle),
        "stroke-width": e.strokeWidth,
        "stroke-linecap": e.strokeLinecap,
        "stroke-linejoin": e.strokeLinejoin,
        onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
    }, kd, 14, Ed)
}

var uo = he(wd, [["render", Od]]);
const Yn = Object.assign(uo, {
    install: (e, t) => {
        var n;
        const r = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
        e.component(r + uo.name, uo)
    }
}), Ld = te({
    name: "IconExclamationCircleFill",
    props: {
        size: {type: [Number, String]},
        strokeWidth: {type: Number, default: 4},
        strokeLinecap: {type: String, default: "butt", validator: e => ["butt", "round", "square"].includes(e)},
        strokeLinejoin: {
            type: String,
            default: "miter",
            validator: e => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
        },
        rotate: Number,
        spin: Boolean
    },
    emits: {click: e => !0},
    setup(e, {emit: t}) {
        const n = re("icon"), r = C(() => [n, `${n}-exclamation-circle-fill`, {[`${n}-spin`]: e.spin}]), o = C(() => {
            const a = {};
            return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a
        });
        return {
            cls: r, innerStyle: o, onClick: a => {
                t("click", a)
            }
        }
    }
}), Td = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ad = de("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z",
    fill: "currentColor",
    stroke: "none"
}, null, -1), Nd = [Ad];

function Pd(e, t, n, r, o, i) {
    return R(), J("svg", {
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "currentColor",
        class: G(e.cls),
        style: Oe(e.innerStyle),
        "stroke-width": e.strokeWidth,
        "stroke-linecap": e.strokeLinecap,
        "stroke-linejoin": e.strokeLinejoin,
        onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
    }, Nd, 14, Td)
}

var co = he(Ld, [["render", Pd]]);
const Xn = Object.assign(co, {
    install: (e, t) => {
        var n;
        const r = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
        e.component(r + co.name, co)
    }
}), Id = te({
    name: "IconCloseCircleFill",
    props: {
        size: {type: [Number, String]},
        strokeWidth: {type: Number, default: 4},
        strokeLinecap: {type: String, default: "butt", validator: e => ["butt", "round", "square"].includes(e)},
        strokeLinejoin: {
            type: String,
            default: "miter",
            validator: e => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
        },
        rotate: Number,
        spin: Boolean
    },
    emits: {click: e => !0},
    setup(e, {emit: t}) {
        const n = re("icon"), r = C(() => [n, `${n}-close-circle-fill`, {[`${n}-spin`]: e.spin}]), o = C(() => {
            const a = {};
            return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a
        });
        return {
            cls: r, innerStyle: o, onClick: a => {
                t("click", a)
            }
        }
    }
}), Md = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Rd = de("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",
    fill: "currentColor",
    stroke: "none"
}, null, -1), Bd = [Rd];

function Dd(e, t, n, r, o, i) {
    return R(), J("svg", {
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "currentColor",
        class: G(e.cls),
        style: Oe(e.innerStyle),
        "stroke-width": e.strokeWidth,
        "stroke-linecap": e.strokeLinecap,
        "stroke-linejoin": e.strokeLinejoin,
        onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
    }, Bd, 14, Md)
}

var fo = he(Id, [["render", Dd]]);
const Jn = Object.assign(fo, {
    install: (e, t) => {
        var n;
        const r = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
        e.component(r + fo.name, fo)
    }
}), jd = te({
    name: "Alert",
    components: {
        IconHover: ct,
        IconClose: Tt,
        IconInfoCircleFill: Fr,
        IconCheckCircleFill: Yn,
        IconExclamationCircleFill: Xn,
        IconCloseCircleFill: Jn
    },
    props: {
        type: {type: String, default: "info"},
        showIcon: {type: Boolean, default: !0},
        closable: {type: Boolean, default: !1},
        title: String,
        banner: {type: Boolean, default: !1}
    },
    emits: {close: e => !0, afterClose: () => !0},
    setup(e, {slots: t, emit: n}) {
        const r = re("alert"), o = U(!0), i = l => {
            o.value = !1, n("close", l)
        }, a = () => {
            n("afterClose")
        }, s = C(() => [r, `${r}-${e.type}`, {[`${r}-with-title`]: !!(e.title || t.title), [`${r}-banner`]: e.banner}]);
        return {prefixCls: r, cls: s, visible: o, handleClose: i, handleAfterLeave: a}
    }
});

function Fd(e, t, n, r, o, i) {
    const a = ie("icon-info-circle-fill"), s = ie("icon-check-circle-fill"), l = ie("icon-exclamation-circle-fill"),
        u = ie("icon-close-circle-fill"), c = ie("icon-close"), f = ie("icon-hover");
    return R(), fe(an, {name: "zoom-in-top", onAfterLeave: e.handleAfterLeave}, {
        default: Se(() => [e.visible ? (R(), J("div", {
            key: 0,
            role: "alert",
            class: G(e.cls)
        }, [e.showIcon && !(e.type === "normal" && !e.$slots.icon) ? (R(), J("div", {
            key: 0,
            class: G(`${e.prefixCls}-icon`)
        }, [ae(e.$slots, "icon", {}, () => [e.type === "info" ? (R(), fe(a, {key: 0})) : e.type === "success" ? (R(), fe(s, {key: 1})) : e.type === "warning" ? (R(), fe(l, {key: 2})) : e.type === "error" ? (R(), fe(u, {key: 3})) : le("v-if", !0)])], 2)) : le("v-if", !0), de("div", {class: G(`${e.prefixCls}-body`)}, [e.title || e.$slots.title ? (R(), J("div", {
            key: 0,
            class: G(`${e.prefixCls}-title`)
        }, [ae(e.$slots, "title", {}, () => [Qe(Ue(e.title), 1)])], 2)) : le("v-if", !0), de("div", {class: G(`${e.prefixCls}-content`)}, [ae(e.$slots, "default")], 2)], 2), e.$slots.action ? (R(), J("div", {
            key: 1,
            class: G(`${e.prefixCls}-action`)
        }, [ae(e.$slots, "action")], 2)) : le("v-if", !0), e.closable ? (R(), J("div", {
            key: 2,
            tabindex: "-1",
            role: "button",
            "aria-label": "Close",
            class: G(`${e.prefixCls}-close-btn`),
            onClick: t[0] || (t[0] = (...p) => e.handleClose && e.handleClose(...p))
        }, [ae(e.$slots, "close-element", {}, () => [V(f, null, {
            default: Se(() => [V(c)]),
            _: 1
        })])], 2)) : le("v-if", !0)], 2)) : le("v-if", !0)]), _: 3
    }, 8, ["onAfterLeave"])
}

var ho = he(jd, [["render", Fd]]);
const jS = Object.assign(ho, {
        install: (e, t) => {
            Ve(e, t);
            const n = Fe(t);
            e.component(n + ho.name, ho)
        }
    }), Vr = ["info", "success", "warning", "error"],
    Gt = ["onFocus", "onFocusin", "onFocusout", "onBlur", "onChange", "onBeforeinput", "onInput", "onReset", "onSubmit", "onInvalid", "onKeydown", "onKeypress", "onKeyup", "onCopy", "onCut", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onSelect", "autocomplete", "autofocus", "maxlength", "minlength", "name", "pattern", "readonly", "required"],
    Vd = te({
        name: "IconLoading",
        props: {
            size: {type: [Number, String]},
            strokeWidth: {type: Number, default: 4},
            strokeLinecap: {type: String, default: "butt", validator: e => ["butt", "round", "square"].includes(e)},
            strokeLinejoin: {
                type: String,
                default: "miter",
                validator: e => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
            },
            rotate: Number,
            spin: Boolean
        },
        emits: {click: e => !0},
        setup(e, {emit: t}) {
            const n = re("icon"), r = C(() => [n, `${n}-loading`, {[`${n}-spin`]: e.spin}]), o = C(() => {
                const a = {};
                return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a
            });
            return {
                cls: r, innerStyle: o, onClick: a => {
                    t("click", a)
                }
            }
        }
    }), xd = ["stroke-width", "stroke-linecap", "stroke-linejoin"],
    zd = de("path", {d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"}, null, -1), Ud = [zd];

function Wd(e, t, n, r, o, i) {
    return R(), J("svg", {
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "currentColor",
        class: G(e.cls),
        style: Oe(e.innerStyle),
        "stroke-width": e.strokeWidth,
        "stroke-linecap": e.strokeLinecap,
        "stroke-linejoin": e.strokeLinejoin,
        onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
    }, Ud, 14, xd)
}

var po = he(Vd, [["render", Wd]]);
const jt = Object.assign(po, {
    install: (e, t) => {
        var n;
        const r = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
        e.component(r + po.name, po)
    }
}), Hd = te({
    name: "FeedbackIcon",
    components: {IconLoading: jt, IconCheckCircleFill: Yn, IconExclamationCircleFill: Xn, IconCloseCircleFill: Jn},
    props: {type: {type: String}},
    setup(e) {
        const t = re("feedback-icon");
        return {cls: C(() => [t, `${t}-status-${e.type}`])}
    }
});

function qd(e, t, n, r, o, i) {
    const a = ie("icon-loading"), s = ie("icon-check-circle-fill"), l = ie("icon-exclamation-circle-fill"),
        u = ie("icon-close-circle-fill");
    return R(), J("span", {class: G(e.cls)}, [e.type === "validating" ? (R(), fe(a, {key: 0})) : e.type === "success" ? (R(), fe(s, {key: 1})) : e.type === "warning" ? (R(), fe(l, {key: 2})) : e.type === "error" ? (R(), fe(u, {key: 3})) : le("v-if", !0)], 2)
}

var ha = he(Hd, [["render", qd]]);
const pa = {key: "Enter", code: "Enter"}, Gd = {key: "Backspace", code: "Backspace"};
var Kd = Object.defineProperty, Ja = Object.getOwnPropertySymbols, Yd = Object.prototype.hasOwnProperty,
    Xd = Object.prototype.propertyIsEnumerable,
    Za = (e, t, n) => t in e ? Kd(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
    Jd = (e, t) => {
        for (var n in t || (t = {})) Yd.call(t, n) && Za(e, n, t[n]);
        if (Ja) for (var n of Ja(t)) Xd.call(t, n) && Za(e, n, t[n]);
        return e
    };
const kn = (e, t) => {
    const n = Jd({}, e);
    for (const r of t) r in n && delete n[r];
    return n
};

function Zn(e, t) {
    const n = {};
    return t.forEach(r => {
        const o = r;
        r in e && (n[o] = e[o])
    }), n
}

const Mi = Symbol("ArcoFormItemContext"), ma = Symbol("ArcoFormContext"),
    _t = ({size: e, disabled: t, error: n, uninject: r} = {}) => {
        const o = r ? {} : nt(Mi, {}), i = C(() => {
                var c;
                return (c = e == null ? void 0 : e.value) != null ? c : o.size
            }), a = C(() => (t == null ? void 0 : t.value) || o.disabled),
            s = C(() => (n == null ? void 0 : n.value) || o.error), l = Sr(o, "feedback"), u = Sr(o, "eventHandlers");
        return {formItemCtx: o, mergedSize: i, mergedDisabled: a, mergedError: s, feedback: l, eventHandlers: u}
    }, Ft = (e, {defaultValue: t = "medium"} = {}) => {
        const n = nt(Ht, void 0);
        return {
            mergedSize: C(() => {
                var o, i;
                return (i = (o = e == null ? void 0 : e.value) != null ? o : n == null ? void 0 : n.size) != null ? i : t
            })
        }
    };

function yu(e) {
    const t = U();

    function n() {
        if (!e.value) return;
        const {selectionStart: o, selectionEnd: i, value: a} = e.value;
        if (o == null || i == null) return;
        const s = a.slice(0, Math.max(0, o)), l = a.slice(Math.max(0, i));
        t.value = {selectionStart: o, selectionEnd: i, value: a, beforeTxt: s, afterTxt: l}
    }

    function r() {
        if (!e.value || !t.value) return;
        const {value: o} = e.value, {beforeTxt: i, afterTxt: a, selectionStart: s} = t.value;
        if (!i || !a || !s) return;
        let l = o.length;
        if (o.endsWith(a)) l = o.length - a.length; else if (o.startsWith(i)) l = i.length; else {
            const u = i[s - 1], c = o.indexOf(u, s - 1);
            c !== -1 && (l = c + 1)
        }
        e.value.setSelectionRange(l, l)
    }

    return [n, r]
}

var Zd = Object.defineProperty, Qa = Object.getOwnPropertySymbols, Qd = Object.prototype.hasOwnProperty,
    eh = Object.prototype.propertyIsEnumerable,
    es = (e, t, n) => t in e ? Zd(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
    ts = (e, t) => {
        for (var n in t || (t = {})) Qd.call(t, n) && es(e, n, t[n]);
        if (Qa) for (var n of Qa(t)) eh.call(t, n) && es(e, n, t[n]);
        return e
    }, Fn = te({
        name: "Input",
        inheritAttrs: !1,
        props: {
            modelValue: String,
            defaultValue: {type: String, default: ""},
            size: {type: String},
            allowClear: {type: Boolean, default: !1},
            disabled: {type: Boolean, default: !1},
            readonly: {type: Boolean, default: !1},
            error: {type: Boolean, default: !1},
            placeholder: String,
            maxLength: {type: [Number, Object], default: 0},
            showWordLimit: {type: Boolean, default: !1},
            wordLength: {type: Function},
            wordSlice: {type: Function},
            inputAttrs: {type: Object},
            type: {type: String, default: "text"}
        },
        emits: {
            "update:modelValue": e => !0,
            input: (e, t) => !0,
            change: (e, t) => !0,
            pressEnter: e => !0,
            clear: e => !0,
            focus: e => !0,
            blur: e => !0
        },
        setup(e, {emit: t, slots: n, attrs: r}) {
            const {size: o, disabled: i, error: a, modelValue: s} = Be(e), l = re("input"), u = U(), {
                    mergedSize: c,
                    mergedDisabled: f,
                    mergedError: p,
                    feedback: _,
                    eventHandlers: S
                } = _t({size: o, disabled: i, error: a}), {mergedSize: w} = Ft(c), [L, g] = yu(u), $ = U(e.defaultValue),
                E = C(() => {
                    var oe;
                    return (oe = e.modelValue) != null ? oe : $.value
                });
            Pe(s, oe => {
                (ht(oe) || Kn(oe)) && ($.value = "")
            });
            let h = E.value;
            const m = U(!1), b = C(() => e.allowClear && !f.value && !!E.value), v = U(!1), N = U(""), T = oe => {
                    var y;
                    return qe(e.wordLength) ? e.wordLength(oe) : (y = oe.length) != null ? y : 0
                }, A = C(() => T(E.value)),
                j = C(() => p.value || !!(De(e.maxLength) && e.maxLength.errorOnly && A.value > W.value)),
                Z = C(() => De(e.maxLength) && !!e.maxLength.errorOnly),
                W = C(() => De(e.maxLength) ? e.maxLength.length : e.maxLength), k = oe => {
                    var y, d;
                    W.value && !Z.value && T(oe) > W.value && (oe = (d = (y = e.wordSlice) == null ? void 0 : y.call(e, oe, W.value)) != null ? d : oe.slice(0, W.value)), $.value = oe, t("update:modelValue", oe)
                }, P = oe => {
                    u.value && oe.target !== u.value && (oe.preventDefault(), u.value.focus())
                }, F = (oe, y) => {
                    var d, O;
                    oe !== h && (h = oe, t("change", oe, y), (O = (d = S.value) == null ? void 0 : d.onChange) == null || O.call(d, y))
                }, x = oe => {
                    var y, d;
                    m.value = !0, h = E.value, t("focus", oe), (d = (y = S.value) == null ? void 0 : y.onFocus) == null || d.call(y, oe)
                }, K = oe => {
                    var y, d;
                    m.value = !1, F(E.value, oe), t("blur", oe), (d = (y = S.value) == null ? void 0 : y.onBlur) == null || d.call(y, oe)
                }, B = oe => {
                    var y, d, O;
                    const {value: q, selectionStart: ne, selectionEnd: _e} = oe.target;
                    if (oe.type === "compositionend") {
                        if (v.value = !1, N.value = "", W.value && !Z.value && E.value.length >= W.value && T(q) > W.value && ne === _e) {
                            I();
                            return
                        }
                        k(q), t("input", q, oe), (d = (y = S.value) == null ? void 0 : y.onInput) == null || d.call(y, oe), I()
                    } else v.value = !0, N.value = E.value + ((O = oe.data) != null ? O : "")
                }, I = () => {
                    L(), Xe(() => {
                        u.value && E.value !== u.value.value && (u.value.value = E.value, g())
                    })
                }, Y = oe => {
                    var y, d;
                    const {value: O} = oe.target;
                    if (!v.value) {
                        if (W.value && !Z.value && (E.value.length >= W.value || T(O) > W.value) && oe.inputType === "insertText") {
                            I();
                            return
                        }
                        k(O), t("input", O, oe), (d = (y = S.value) == null ? void 0 : y.onInput) == null || d.call(y, oe), I()
                    }
                }, Q = oe => {
                    k(""), F("", oe), t("clear", oe)
                }, ve = oe => {
                    const y = oe.key || oe.code;
                    !v.value && y === pa.key && (F(E.value, oe), t("pressEnter", oe))
                }, se = C(() => [`${l}-outer`, `${l}-outer-size-${w.value}`, {
                    [`${l}-outer-has-suffix`]: !!n.suffix,
                    [`${l}-outer-disabled`]: f.value
                }]), ge = C(() => [`${l}-wrapper`, {
                    [`${l}-error`]: j.value,
                    [`${l}-disabled`]: f.value,
                    [`${l}-focus`]: m.value
                }]), Le = C(() => [l, `${l}-size-${w.value}`]), Ne = C(() => kn(r, Gt)), we = C(() => Zn(r, Gt)), $e = C(() => {
                    const oe = ts(ts({}, we.value), e.inputAttrs);
                    return j.value && (oe["aria-invalid"] = !0), oe
                }), Me = oe => {
                    var y;
                    return V("span", Re({
                        class: ge.value,
                        onMousedown: P
                    }, oe ? void 0 : Ne.value), [n.prefix && V("span", {class: `${l}-prefix`}, [n.prefix()]), V("input", Re($e.value, {
                        ref: u,
                        class: Le.value,
                        value: E.value,
                        type: e.type,
                        placeholder: e.placeholder,
                        readonly: e.readonly,
                        disabled: f.value,
                        onInput: Y,
                        onKeydown: ve,
                        onFocus: x,
                        onBlur: K,
                        onCompositionstart: B,
                        onCompositionupdate: B,
                        onCompositionend: B
                    }), null), b.value && V(ct, {
                        prefix: l,
                        class: `${l}-clear-btn`,
                        onClick: Q
                    }, {default: () => [V(Tt, null, null)]}), (n.suffix || !!e.maxLength && e.showWordLimit || !!_.value) && V("span", {class: [`${l}-suffix`, {[`${l}-suffix-has-feedback`]: _.value}]}, [!!e.maxLength && e.showWordLimit && V("span", {class: `${l}-word-limit`}, [A.value, Qe("/"), W.value]), (y = n.suffix) == null ? void 0 : y.call(n), !!_.value && V(ha, {type: _.value}, null)])])
                };
            return {
                inputRef: u,
                render: () => n.prepend || n.append ? V("span", Re({class: se.value}, Ne.value), [n.prepend && V("span", {class: `${l}-prepend`}, [n.prepend()]), Me(!0), n.append && V("span", {class: `${l}-append`}, [n.append()])]) : Me()
            }
        },
        methods: {
            focus() {
                var e;
                (e = this.inputRef) == null || e.focus()
            }, blur() {
                var e;
                (e = this.inputRef) == null || e.blur()
            }
        },
        render() {
            return this.render()
        }
    });
const th = te({
        name: "IconSearch",
        props: {
            size: {type: [Number, String]},
            strokeWidth: {type: Number, default: 4},
            strokeLinecap: {type: String, default: "butt", validator: e => ["butt", "round", "square"].includes(e)},
            strokeLinejoin: {
                type: String,
                default: "miter",
                validator: e => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
            },
            rotate: Number,
            spin: Boolean
        },
        emits: {click: e => !0},
        setup(e, {emit: t}) {
            const n = re("icon"), r = C(() => [n, `${n}-search`, {[`${n}-spin`]: e.spin}]), o = C(() => {
                const a = {};
                return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a
            });
            return {
                cls: r, innerStyle: o, onClick: a => {
                    t("click", a)
                }
            }
        }
    }), nh = ["stroke-width", "stroke-linecap", "stroke-linejoin"],
    rh = de("path", {d: "M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0-6.248 6.248-6.248 16.379 0 22.627 6.248 6.248 16.38 6.248 22.628 0Zm0 0 8.485 8.485"}, null, -1),
    oh = [rh];

function ih(e, t, n, r, o, i) {
    return R(), J("svg", {
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "currentColor",
        class: G(e.cls),
        style: Oe(e.innerStyle),
        "stroke-width": e.strokeWidth,
        "stroke-linecap": e.strokeLinecap,
        "stroke-linejoin": e.strokeLinejoin,
        onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
    }, oh, 14, nh)
}

var mo = he(th, [["render", ih]]);
const Ri = Object.assign(mo, {
    install: (e, t) => {
        var n;
        const r = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
        e.component(r + mo.name, mo)
    }
}), bu = Symbol("ArcoButtonGroup"), ah = te({
    name: "Button",
    components: {IconLoading: jt},
    props: {
        type: {type: String},
        shape: {type: String},
        status: {type: String},
        size: {type: String},
        long: {type: Boolean, default: !1},
        loading: {type: Boolean, default: !1},
        disabled: {type: Boolean},
        htmlType: {type: String, default: "button"},
        href: String
    },
    emits: {click: e => !0},
    setup(e, {emit: t}) {
        const {size: n, disabled: r} = Be(e), o = re("btn"), i = nt(bu, void 0), a = C(() => {
            var _;
            return (_ = n.value) != null ? _ : i == null ? void 0 : i.size
        }), s = C(() => !!(r.value || i != null && i.disabled)), {mergedSize: l, mergedDisabled: u} = _t({
            size: a,
            disabled: s
        }), {mergedSize: c} = Ft(l), f = C(() => {
            var _, S, w, L, g, $;
            return [o, `${o}-${(S = (_ = e.type) != null ? _ : i == null ? void 0 : i.type) != null ? S : "secondary"}`, `${o}-shape-${(L = (w = e.shape) != null ? w : i == null ? void 0 : i.shape) != null ? L : "square"}`, `${o}-size-${c.value}`, `${o}-status-${($ = (g = e.status) != null ? g : i == null ? void 0 : i.status) != null ? $ : "normal"}`, {
                [`${o}-long`]: e.long,
                [`${o}-loading`]: e.loading,
                [`${o}-disabled`]: u.value,
                [`${o}-link`]: Rt(e.href)
            }]
        });
        return {
            prefixCls: o, cls: f, mergedDisabled: u, handleClick: _ => {
                if (e.disabled || e.loading) {
                    _.preventDefault();
                    return
                }
                t("click", _)
            }
        }
    }
}), sh = ["href"], lh = ["type", "disabled"];

function uh(e, t, n, r, o, i) {
    const a = ie("icon-loading");
    return e.href ? (R(), J("a", {
        key: 0,
        class: G([e.cls, {[`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default}]),
        href: e.mergedDisabled || e.loading ? void 0 : e.href,
        onClick: t[0] || (t[0] = (...s) => e.handleClick && e.handleClick(...s))
    }, [e.loading || e.$slots.icon ? (R(), J("span", {
        key: 0,
        class: G(`${e.prefixCls}-icon`)
    }, [e.loading ? (R(), fe(a, {
        key: 0,
        spin: "true"
    })) : ae(e.$slots, "icon", {key: 1})], 2)) : le("v-if", !0), ae(e.$slots, "default")], 10, sh)) : (R(), J("button", {
        key: 1,
        class: G([e.cls, {[`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default}]),
        type: e.htmlType,
        disabled: e.mergedDisabled,
        onClick: t[1] || (t[1] = (...s) => e.handleClick && e.handleClick(...s))
    }, [e.loading || e.$slots.icon ? (R(), J("span", {
        key: 0,
        class: G(`${e.prefixCls}-icon`)
    }, [e.loading ? (R(), fe(a, {
        key: 0,
        spin: !0
    })) : ae(e.$slots, "icon", {key: 1})], 2)) : le("v-if", !0), ae(e.$slots, "default")], 10, lh))
}

var vo = he(ah, [["render", uh]]);
const ch = te({
    name: "ButtonGroup",
    props: {
        type: {type: String},
        status: {type: String},
        shape: {type: String},
        size: {type: String},
        disabled: {type: Boolean}
    },
    setup(e) {
        const {type: t, size: n, status: r, disabled: o, shape: i} = Be(e), a = re("btn-group");
        return Lt(bu, xe({type: t, size: n, shape: i, status: r, disabled: o})), {prefixCls: a}
    }
});

function fh(e, t, n, r, o, i) {
    return R(), J("div", {class: G(e.prefixCls)}, [ae(e.$slots, "default")], 2)
}

var go = he(ch, [["render", fh]]);
const $r = Object.assign(vo, {
    Group: go, install: (e, t) => {
        Ve(e, t);
        const n = Fe(t);
        e.component(n + vo.name, vo), e.component(n + go.name, go)
    }
});
var yo = te({
    name: "InputSearch",
    props: {
        searchButton: {type: Boolean, default: !1},
        loading: {type: Boolean, default: !1},
        disabled: {type: Boolean, default: !1},
        size: {type: String},
        buttonText: {type: String},
        buttonProps: {type: Object}
    },
    emits: {search: (e, t) => !0},
    setup(e, {emit: t, slots: n}) {
        const {size: r} = Be(e), o = re("input-search"), {mergedSize: i} = Ft(r), a = U(), s = f => {
            a.value.inputRef && t("search", a.value.inputRef.value, f)
        }, l = () => {
            var f;
            return V(ot, null, [e.loading ? V(jt, null, null) : V(ct, {onClick: s}, {default: () => [V(Ri, null, null)]}), (f = n.suffix) == null ? void 0 : f.call(n)])
        }, u = () => {
            var f;
            let p = {};
            return e.buttonText || n["button-default"] || n["button-icon"] ? p = {
                default: (f = n["button-default"]) != null ? f : e.buttonText ? () => e.buttonText : void 0,
                icon: n["button-icon"]
            } : p = {icon: () => V(Ri, null, null)}, V($r, Re({
                type: "primary",
                class: `${o}-btn`,
                disabled: e.disabled,
                size: i.value,
                loading: e.loading
            }, e.buttonProps, {onClick: s}), p)
        };
        return {
            inputRef: a,
            render: () => V(Fn, {ref: a, class: o, size: i.value, disabled: e.disabled}, {
                prepend: n.prepend,
                prefix: n.prefix,
                suffix: e.searchButton ? n.suffix : l,
                append: e.searchButton ? u : n.append
            })
        }
    },
    methods: {
        focus() {
            var e;
            (e = this.inputRef) == null || e.focus()
        }, blur() {
            var e;
            (e = this.inputRef) == null || e.blur()
        }
    },
    render() {
        return this.render()
    }
});
const dh = te({
    name: "IconEye",
    props: {
        size: {type: [Number, String]},
        strokeWidth: {type: Number, default: 4},
        strokeLinecap: {type: String, default: "butt", validator: e => ["butt", "round", "square"].includes(e)},
        strokeLinejoin: {
            type: String,
            default: "miter",
            validator: e => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
        },
        rotate: Number,
        spin: Boolean
    },
    emits: {click: e => !0},
    setup(e, {emit: t}) {
        const n = re("icon"), r = C(() => [n, `${n}-eye`, {[`${n}-spin`]: e.spin}]), o = C(() => {
            const a = {};
            return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a
        });
        return {
            cls: r, innerStyle: o, onClick: a => {
                t("click", a)
            }
        }
    }
}), hh = ["stroke-width", "stroke-linecap", "stroke-linejoin"], ph = de("path", {
    "clip-rule": "evenodd",
    d: "M24 37c6.627 0 12.627-4.333 18-13-5.373-8.667-11.373-13-18-13-6.627 0-12.627 4.333-18 13 5.373 8.667 11.373 13 18 13Z"
}, null, -1), mh = de("path", {d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"}, null, -1), vh = [ph, mh];

function gh(e, t, n, r, o, i) {
    return R(), J("svg", {
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "currentColor",
        class: G(e.cls),
        style: Oe(e.innerStyle),
        "stroke-width": e.strokeWidth,
        "stroke-linecap": e.strokeLinecap,
        "stroke-linejoin": e.strokeLinejoin,
        onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
    }, vh, 14, hh)
}

var bo = he(dh, [["render", gh]]);
const yh = Object.assign(bo, {
        install: (e, t) => {
            var n;
            const r = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
            e.component(r + bo.name, bo)
        }
    }), bh = te({
        name: "IconEyeInvisible",
        props: {
            size: {type: [Number, String]},
            strokeWidth: {type: Number, default: 4},
            strokeLinecap: {type: String, default: "butt", validator: e => ["butt", "round", "square"].includes(e)},
            strokeLinejoin: {
                type: String,
                default: "miter",
                validator: e => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
            },
            rotate: Number,
            spin: Boolean
        },
        emits: {click: e => !0},
        setup(e, {emit: t}) {
            const n = re("icon"), r = C(() => [n, `${n}-eye-invisible`, {[`${n}-spin`]: e.spin}]), o = C(() => {
                const a = {};
                return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a
            });
            return {
                cls: r, innerStyle: o, onClick: a => {
                    t("click", a)
                }
            }
        }
    }), _h = ["stroke-width", "stroke-linecap", "stroke-linejoin"],
    Ch = de("path", {d: "M14 14.5c-2.69 2-5.415 5.33-8 9.5 5.373 8.667 11.373 13 18 13 3.325 0 6.491-1.09 9.5-3.271M17.463 12.5C19 11 21.75 11 24 11c6.627 0 12.627 4.333 18 13-1.766 2.848-3.599 5.228-5.5 7.14"}, null, -1),
    Sh = de("path", {d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM6.852 7.103l34.294 34.294"}, null, -1), wh = [Ch, Sh];

function Eh(e, t, n, r, o, i) {
    return R(), J("svg", {
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "currentColor",
        class: G(e.cls),
        style: Oe(e.innerStyle),
        "stroke-width": e.strokeWidth,
        "stroke-linecap": e.strokeLinecap,
        "stroke-linejoin": e.strokeLinejoin,
        onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
    }, wh, 14, _h)
}

var _o = he(bh, [["render", Eh]]);
const $h = Object.assign(_o, {
    install: (e, t) => {
        var n;
        const r = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
        e.component(r + _o.name, _o)
    }
}), kh = te({
    name: "InputPassword",
    components: {IconEye: yh, IconEyeInvisible: $h, AIconHover: ct, AInput: Fn},
    props: {invisibleButton: {type: Boolean, default: !0}},
    setup() {
        const e = U(), t = U(!0);
        return {
            inputRef: e, invisible: t, handleInvisible: () => {
                t.value = !t.value
            }
        }
    },
    methods: {
        focus() {
            var e;
            (e = this.inputRef) == null || e.focus()
        }, blur() {
            var e;
            (e = this.inputRef) == null || e.blur()
        }
    }
});

function Oh(e, t, n, r, o, i) {
    const a = ie("icon-eye"), s = ie("icon-eye-invisible"), l = ie("a-icon-hover"), u = ie("a-input");
    return R(), fe(u, {
        ref: "inputRef",
        type: e.invisible ? "password" : "text"
    }, tu({_: 2}, [e.$slots.prepend ? {
        name: "prepend",
        fn: Se(() => [ae(e.$slots, "prepend")])
    } : void 0, e.$slots.prefix ? {
        name: "prefix",
        fn: Se(() => [ae(e.$slots, "prefix")])
    } : void 0, e.invisibleButton || e.$slots.suffix ? {
        name: "suffix",
        fn: Se(() => [e.invisibleButton ? (R(), fe(l, {
            key: 0,
            onClick: e.handleInvisible,
            onMousedown: t[0] || (t[0] = Wt(() => {
            }, ["prevent"])),
            onMouseup: t[1] || (t[1] = Wt(() => {
            }, ["prevent"]))
        }, {
            default: Se(() => [e.invisible ? (R(), fe(s, {key: 1})) : (R(), fe(a, {key: 0}))]),
            _: 1
        }, 8, ["onClick"])) : le("v-if", !0), ae(e.$slots, "suffix")])
    } : void 0, e.$slots.append ? {name: "append", fn: Se(() => [ae(e.$slots, "append")])} : void 0]), 1032, ["type"])
}

var Co = he(kh, [["render", Oh]]);
const Lh = te({
    name: "InputGroup", setup() {
        return {prefixCls: re("input-group")}
    }
});

function Th(e, t, n, r, o, i) {
    return R(), J("div", {class: G(e.prefixCls)}, [ae(e.$slots, "default")], 2)
}

var So = he(Lh, [["render", Th]]);
const Ah = Object.assign(Fn, {
    Search: yo, Password: Co, Group: So, install: (e, t) => {
        Ve(e, t);
        const n = Fe(t);
        e.component(n + Fn.name, Fn), e.component(n + So.name, So), e.component(n + yo.name, yo), e.component(n + Co.name, Co)
    }
});
var Nh = Object.defineProperty, ns = Object.getOwnPropertySymbols, Ph = Object.prototype.hasOwnProperty,
    Ih = Object.prototype.propertyIsEnumerable,
    rs = (e, t, n) => t in e ? Nh(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
    Rn = (e, t) => {
        for (var n in t || (t = {})) Ph.call(t, n) && rs(e, n, t[n]);
        if (ns) for (var n of ns(t)) Ih.call(t, n) && rs(e, n, t[n]);
        return e
    };
const Mh = () => ({
    width: document.documentElement.clientWidth || window.innerWidth,
    height: document.documentElement.clientHeight || window.innerHeight
}), os = (e, t) => {
    var n, r;
    const o = e.getBoundingClientRect();
    return {
        top: o.top,
        bottom: o.bottom,
        left: o.left,
        right: o.right,
        scrollTop: o.top - t.top,
        scrollBottom: o.bottom - t.top,
        scrollLeft: o.left - t.left,
        scrollRight: o.right - t.left,
        width: (n = e.offsetWidth) != null ? n : e.clientWidth,
        height: (r = e.offsetHeight) != null ? r : e.clientHeight
    }
}, Rh = e => {
    switch (e) {
        case"top":
        case"tl":
        case"tr":
            return "top";
        case"bottom":
        case"bl":
        case"br":
            return "bottom";
        case"left":
        case"lt":
        case"lb":
            return "left";
        case"right":
        case"rt":
        case"rb":
            return "right";
        default:
            return "top"
    }
}, tr = (e, t) => {
    switch (t) {
        case"top":
            switch (e) {
                case"bottom":
                    return "top";
                case"bl":
                    return "tl";
                case"br":
                    return "tr";
                default:
                    return e
            }
        case"bottom":
            switch (e) {
                case"top":
                    return "bottom";
                case"tl":
                    return "bl";
                case"tr":
                    return "br";
                default:
                    return e
            }
        case"left":
            switch (e) {
                case"right":
                    return "left";
                case"rt":
                    return "lt";
                case"rb":
                    return "lb";
                default:
                    return e
            }
        case"right":
            switch (e) {
                case"left":
                    return "right";
                case"lt":
                    return "rt";
                case"lb":
                    return "rb";
                default:
                    return e
            }
        default:
            return e
    }
}, Bh = (e, t, {containerRect: n, triggerRect: r, popupRect: o, offset: i, translate: a}) => {
    const s = Rh(e), l = Mh(), u = {
        top: n.top + t.top,
        bottom: l.height - (n.top + t.top + o.height),
        left: n.left + t.left,
        right: l.width - (n.left + t.left + o.width)
    };
    let c = e;
    if (s === "top" && u.top < 0) if (r.top > o.height) t.top = -n.top; else {
        const f = Bn("bottom", r, o, {offset: i, translate: a});
        l.height - (n.top + f.top + o.height) > 0 && (c = tr(e, "bottom"), t.top = f.top)
    }
    if (s === "bottom" && u.bottom < 0) if (l.height - r.bottom > o.height) t.top = -n.top + (l.height - o.height); else {
        const f = Bn("top", r, o, {offset: i, translate: a});
        n.top + f.top > 0 && (c = tr(e, "top"), t.top = f.top)
    }
    if (s === "left" && u.left < 0) if (r.left > o.width) t.left = -n.left; else {
        const f = Bn("right", r, o, {offset: i, translate: a});
        l.width - (n.left + f.left + o.width) > 0 && (c = tr(e, "right"), t.left = f.left)
    }
    if (s === "right" && u.right < 0) if (l.width - r.right > o.width) t.left = -n.left + (l.width - o.width); else {
        const f = Bn("left", r, o, {offset: i, translate: a});
        n.left + f.left > 0 && (c = tr(e, "left"), t.left = f.left)
    }
    return (s === "top" || s === "bottom") && (u.left < 0 ? t.left = -n.left : u.right < 0 && (t.left = -n.left + (l.width - o.width))), (s === "left" || s === "right") && (u.top < 0 ? t.top = -n.top : u.bottom < 0 && (t.top = -n.top + (l.height - o.height))), {
        popupPosition: t,
        position: c
    }
}, Bn = (e, t, n, {offset: r = 0, translate: o = [0, 0]} = {}) => {
    var i;
    const a = (i = Ge(o) ? o : o[e]) != null ? i : [0, 0];
    switch (e) {
        case"top":
            return {
                left: t.scrollLeft + Math.round(t.width / 2) - Math.round(n.width / 2) + a[0],
                top: t.scrollTop - n.height - r + a[1]
            };
        case"tl":
            return {left: t.scrollLeft + a[0], top: t.scrollTop - n.height - r + a[1]};
        case"tr":
            return {left: t.scrollRight - n.width + a[0], top: t.scrollTop - n.height - r + a[1]};
        case"bottom":
            return {
                left: t.scrollLeft + Math.round(t.width / 2) - Math.round(n.width / 2) + a[0],
                top: t.scrollBottom + r + a[1]
            };
        case"bl":
            return {left: t.scrollLeft + a[0], top: t.scrollBottom + r + a[1]};
        case"br":
            return {left: t.scrollRight - n.width + a[0], top: t.scrollBottom + r + a[1]};
        case"left":
            return {
                left: t.scrollLeft - n.width - r + a[0],
                top: t.scrollTop + Math.round(t.height / 2) - Math.round(n.height / 2) + a[1]
            };
        case"lt":
            return {left: t.scrollLeft - n.width - r + a[0], top: t.scrollTop + a[1]};
        case"lb":
            return {left: t.scrollLeft - n.width - r + a[0], top: t.scrollBottom - n.height + a[1]};
        case"right":
            return {
                left: t.scrollRight + r + a[0],
                top: t.scrollTop + Math.round(t.height / 2) - Math.round(n.height / 2) + a[1]
            };
        case"rt":
            return {left: t.scrollRight + r + a[0], top: t.scrollTop + a[1]};
        case"rb":
            return {left: t.scrollRight + r + a[0], top: t.scrollBottom - n.height + a[1]};
        default:
            return {left: 0, top: 0}
    }
}, Dh = e => {
    let t = "0";
    ["top", "bottom"].includes(e) ? t = "50%" : ["left", "lt", "lb", "tr", "br"].includes(e) && (t = "100%");
    let n = "0";
    return ["left", "right"].includes(e) ? n = "50%" : ["top", "tl", "tr", "lt", "rt"].includes(e) && (n = "100%"), `${t} ${n}`
}, jh = (e, t, n, r, {offset: o = 0, translate: i = [0, 0], customStyle: a = {}, autoFitPosition: s = !1} = {}) => {
    let l = e, u = Bn(e, n, r, {offset: o, translate: i});
    if (s) {
        const f = Bh(e, u, {containerRect: t, popupRect: r, triggerRect: n, offset: o, translate: i});
        u = f.popupPosition, l = f.position
    }
    return {style: Rn({left: `${u.left}px`, top: `${u.top}px`}, a), position: l}
}, Fh = (e, t, n, {customStyle: r = {}}) => {
    if (["top", "tl", "tr", "bottom", "bl", "br"].includes(e)) {
        let i = Math.abs(t.scrollLeft + t.width / 2 - n.scrollLeft);
        return i > n.width - 8 && (t.width > n.width ? i = n.width / 2 : i = n.width - 8), ["top", "tl", "tr"].includes(e) ? Rn({
            left: `${i}px`,
            bottom: "0",
            transform: "translate(-50%,50%) rotate(45deg)"
        }, r) : Rn({left: `${i}px`, top: "0", transform: "translate(-50%,-50%) rotate(45deg)"}, r)
    }
    let o = Math.abs(t.scrollTop + t.height / 2 - n.scrollTop);
    return o > n.height - 8 && (t.height > n.height ? o = n.height / 2 : o = n.height - 8), ["left", "lt", "lb"].includes(e) ? Rn({
        top: `${o}px`,
        right: "0",
        transform: "translate(50%,-50%) rotate(45deg)"
    }, r) : Rn({top: `${o}px`, left: "0", transform: "translate(-50%,-50%) rotate(45deg)"}, r)
}, Vh = e => e.scrollHeight > e.offsetHeight || e.scrollWidth > e.offsetWidth, is = e => {
    var t;
    const n = [];
    let r = e;
    for (; r && r !== document.documentElement;) Vh(r) && n.push(r), r = (t = r.parentElement) != null ? t : void 0;
    return n
}, _u = () => {
    const e = {}, t = U(), n = () => {
        const r = mu(e.value);
        r !== t.value && (t.value = r)
    };
    return We(() => n()), ln(() => n()), {children: e, firstElement: t}
};
var zn = te({
    name: "ResizeObserver",
    props: {watchOnUpdated: Boolean},
    emits: ["resize"],
    setup(e, {emit: t, slots: n}) {
        const {children: r, firstElement: o} = _u();
        let i;
        const a = l => {
            l && (i = new la(u => {
                const c = u[0];
                t("resize", c)
            }), i.observe(l))
        }, s = () => {
            i && (i.disconnect(), i = null)
        };
        return Pe(o, l => {
            i && s(), l && a(l)
        }), Dt(() => {
            i && s()
        }), () => {
            var l;
            return r.value = (l = n.default) == null ? void 0 : l.call(n), r.value
        }
    }
});

function xh(e, t) {
    const n = U(e[t]);
    return ln(() => {
        const r = e[t];
        n.value !== r && (n.value = r)
    }), n
}

const as = Symbol("ArcoTrigger"), zh = 1e3, Uh = 5e3, Wh = 1;

class Hh {
    constructor() {
        this.popupStack = {
            popup: new Set,
            dialog: new Set,
            message: new Set
        }, this.getNextZIndex = t => (t === "message" ? Array.from(this.popupStack.message).pop() || Uh : Array.from(this.popupStack.popup).pop() || zh) + Wh, this.add = t => {
            const n = this.getNextZIndex(t);
            return this.popupStack[t].add(n), t === "dialog" && this.popupStack.popup.add(n), n
        }, this.delete = (t, n) => {
            this.popupStack[n].delete(t), n === "dialog" && this.popupStack.popup.delete(t)
        }, this.isLastDialog = t => this.popupStack.dialog.size > 1 ? t === Array.from(this.popupStack.dialog).pop() : !0
    }
}

const wo = new Hh;

function xr(e, {visible: t, runOnMounted: n} = {}) {
    const r = U(0), o = () => {
        r.value = wo.add(e)
    }, i = () => {
        wo.delete(r.value, e)
    }, a = () => e === "dialog" ? wo.isLastDialog(r.value) : !1;
    return Pe(() => t == null ? void 0 : t.value, s => {
        s ? o() : i()
    }, {immediate: !0}), n && (We(() => {
        o()
    }), Dt(() => {
        i()
    })), {zIndex: gf(r), open: o, close: i, isLastDialog: a}
}

const qh = ({elementRef: e, onResize: t}) => {
    let n;
    return {
        createResizeObserver: () => {
            e.value && (n = new la(i => {
                const a = i[0];
                qe(t) && t(a)
            }), n.observe(e.value))
        }, destroyResizeObserver: () => {
            n && (n.disconnect(), n = null)
        }
    }
};
var Cu = te({
    name: "ClientOnly", setup(e, {slots: t}) {
        const n = U(!1);
        return We(() => n.value = !0), () => {
            var r;
            return n.value ? (r = t.default) == null ? void 0 : r.call(t) : null
        }
    }
});
const Su = ({popupContainer: e, visible: t, defaultContainer: n = "body", documentContainer: r}) => {
    const o = U(e.value), i = U(), a = () => {
        const s = Ii(e.value), l = s ? e.value : n, u = s ?? (r ? document.documentElement : Ii(n));
        l !== o.value && (o.value = l), u !== i.value && (i.value = u)
    };
    return We(() => a()), Pe(t, s => {
        o.value !== e.value && s && a()
    }), {teleportContainer: o, containerRef: i}
};
var Gh = Object.defineProperty, Kh = Object.defineProperties, Yh = Object.getOwnPropertyDescriptors,
    ss = Object.getOwnPropertySymbols, Xh = Object.prototype.hasOwnProperty, Jh = Object.prototype.propertyIsEnumerable,
    ls = (e, t, n) => t in e ? Gh(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
    Zh = (e, t) => {
        for (var n in t || (t = {})) Xh.call(t, n) && ls(e, n, t[n]);
        if (ss) for (var n of ss(t)) Jh.call(t, n) && ls(e, n, t[n]);
        return e
    }, Qh = (e, t) => Kh(e, Yh(t));
const ep = ["onClick", "onMouseenter", "onMouseleave", "onFocusin", "onFocusout", "onContextmenu"];
var Eo = te({
    name: "Trigger",
    inheritAttrs: !1,
    props: {
        popupVisible: {type: Boolean, default: void 0},
        defaultPopupVisible: {type: Boolean, default: !1},
        trigger: {type: [String, Array], default: "hover"},
        position: {type: String, default: "bottom"},
        disabled: {type: Boolean, default: !1},
        popupOffset: {type: Number, default: 0},
        popupTranslate: {type: [Array, Object]},
        showArrow: {type: Boolean, default: !1},
        alignPoint: {type: Boolean, default: !1},
        popupHoverStay: {type: Boolean, default: !0},
        blurToClose: {type: Boolean, default: !0},
        clickToClose: {type: Boolean, default: !0},
        clickOutsideToClose: {type: Boolean, default: !0},
        unmountOnClose: {type: Boolean, default: !0},
        contentClass: {type: [String, Array, Object]},
        contentStyle: {type: Object},
        arrowClass: {type: [String, Array, Object]},
        arrowStyle: {type: Object},
        popupStyle: {type: Object},
        animationName: {type: String, default: "fade-in"},
        duration: {type: [Number, Object]},
        mouseEnterDelay: {type: Number, default: 100},
        mouseLeaveDelay: {type: Number, default: 100},
        focusDelay: {type: Number, default: 0},
        autoFitPopupWidth: {type: Boolean, default: !1},
        autoFitPopupMinWidth: {type: Boolean, default: !1},
        autoFixPosition: {type: Boolean, default: !0},
        popupContainer: {type: [String, Object]},
        updateAtScroll: {type: Boolean, default: !1},
        autoFitTransformOrigin: {type: Boolean, default: !1},
        hideEmpty: {type: Boolean, default: !1},
        openedClass: {type: [String, Array, Object]},
        autoFitPosition: {type: Boolean, default: !0},
        renderToBody: {type: Boolean, default: !0},
        preventFocus: {type: Boolean, default: !1}
    },
    emits: {
        "update:popupVisible": e => !0,
        popupVisibleChange: e => !0,
        show: () => !0,
        hide: () => !0,
        resize: () => !0
    },
    setup(e, {emit: t, slots: n, attrs: r}) {
        const {popupContainer: o} = Be(e), i = re("trigger"), a = C(() => kn(r, ep)), s = nt(Ht, void 0),
            l = C(() => [].concat(e.trigger)), u = new Set, c = nt(as, void 0), {children: f, firstElement: p} = _u(),
            _ = U(), S = U(e.defaultPopupVisible), w = U(e.position), L = U({}), g = U({}), $ = U({}), E = U(),
            h = U({top: 0, left: 0}), m = C(() => {
                var ee;
                return (ee = e.popupVisible) != null ? ee : S.value
            }), {teleportContainer: b, containerRef: v} = Su({
                popupContainer: o,
                visible: m,
                documentContainer: !0
            }), {zIndex: N} = xr("popup", {visible: m});
        let T = 0, A = !1;
        const j = () => {
            T && (window.clearTimeout(T), T = 0)
        }, Z = ee => {
            if (e.alignPoint) {
                const {pageX: D, pageY: X} = ee;
                h.value = {top: X, left: D}
            }
        }, W = () => {
            if (!p.value || !_.value || !v.value) return;
            const ee = v.value.getBoundingClientRect(), D = e.alignPoint ? {
                top: h.value.top,
                bottom: h.value.top,
                left: h.value.left,
                right: h.value.left,
                scrollTop: h.value.top,
                scrollBottom: h.value.top,
                scrollLeft: h.value.left,
                scrollRight: h.value.left,
                width: 0,
                height: 0
            } : os(p.value, ee), X = () => os(_.value, ee), He = X(), {
                style: H,
                position: ue
            } = jh(e.position, ee, D, He, {
                offset: e.popupOffset,
                translate: e.popupTranslate,
                customStyle: e.popupStyle,
                autoFitPosition: e.autoFitPosition
            });
            e.autoFitTransformOrigin && (g.value = {transformOrigin: Dh(ue)}), e.autoFitPopupMinWidth ? H.minWidth = `${D.width}px` : e.autoFitPopupWidth && (H.width = `${D.width}px`), w.value !== ue && (w.value = ue), L.value = H, e.showArrow && Xe(() => {
                $.value = Fh(ue, D, X(), {customStyle: e.arrowStyle})
            })
        }, k = (ee, D) => {
            if (ee === m.value && T === 0) return;
            const X = () => {
                S.value = ee, t("update:popupVisible", ee), t("popupVisibleChange", ee), ee && Xe(() => {
                    W()
                })
            };
            D ? (j(), ee !== m.value && (T = window.setTimeout(X, D))) : X()
        }, P = ee => {
            var D;
            (D = r.onClick) == null || D.call(r, ee), !(e.disabled || m.value && !e.clickToClose) && (l.value.includes("click") ? (Z(ee), k(!m.value)) : l.value.includes("contextMenu") && m.value && k(!1))
        }, F = ee => {
            var D;
            (D = r.onMouseenter) == null || D.call(r, ee), !(e.disabled || !l.value.includes("hover")) && (Z(ee), k(!0, e.mouseEnterDelay))
        }, x = ee => {
            c == null || c.onMouseenter(ee), F(ee)
        }, K = ee => {
            var D;
            (D = r.onMouseleave) == null || D.call(r, ee), !(e.disabled || !l.value.includes("hover")) && k(!1, e.mouseLeaveDelay)
        }, B = ee => {
            c == null || c.onMouseleave(ee), K(ee)
        }, I = ee => {
            var D;
            (D = r.onFocusin) == null || D.call(r, ee), !(e.disabled || !l.value.includes("focus")) && k(!0, e.focusDelay)
        }, Y = ee => {
            var D;
            (D = r.onFocusout) == null || D.call(r, ee), !(e.disabled || !l.value.includes("focus")) && e.blurToClose && k(!1)
        }, Q = ee => {
            var D;
            (D = r.onContextmenu) == null || D.call(r, ee), !(e.disabled || !l.value.includes("contextMenu") || m.value && !e.clickToClose) && (Z(ee), k(!m.value), ee.preventDefault())
        };
        Lt(as, xe({
            onMouseenter: x, onMouseleave: B, addChildRef: ee => {
                u.add(ee), c == null || c.addChildRef(ee)
            }, removeChildRef: ee => {
                u.delete(ee), c == null || c.removeChildRef(ee)
            }
        }));
        const ge = () => {
            qt(document.documentElement, "mousedown", we), A = !1
        }, Le = xh(n, "content"), Ne = C(() => {
            var ee;
            return e.hideEmpty && rd((ee = Le.value) == null ? void 0 : ee.call(Le))
        }), we = ee => {
            var D, X, He;
            if (!((D = p.value) != null && D.contains(ee.target) || (X = _.value) != null && X.contains(ee.target))) {
                for (const H of u) if ((He = H.value) != null && He.contains(ee.target)) return;
                ge(), k(!1)
            }
        }, $e = id(() => {
            m.value && W()
        }), Me = () => {
            m.value && W()
        }, ze = () => {
            Me(), t("resize")
        }, oe = ee => {
            e.preventFocus && ee.preventDefault()
        };
        c == null || c.addChildRef(_);
        const y = C(() => m.value ? e.openedClass : void 0);
        let d;
        Pe(m, ee => {
            if (e.clickOutsideToClose && (!ee && A ? ge() : ee && !A && (pt(document.documentElement, "mousedown", we), A = !0)), e.updateAtScroll || s != null && s.updateAtScroll) {
                if (ee) {
                    d = is(p.value);
                    for (const D of d) D.addEventListener("scroll", $e)
                } else if (d) {
                    for (const D of d) D.removeEventListener("scroll", $e);
                    d = void 0
                }
            }
            ee && (ne.value = !0)
        }), Pe(() => [e.autoFitPopupWidth, e.autoFitPopupMinWidth], () => {
            m.value && W()
        });
        const {createResizeObserver: O, destroyResizeObserver: q} = qh({elementRef: v, onResize: Me});
        We(() => {
            if (O(), m.value && (W(), e.clickOutsideToClose && !A && (pt(document.documentElement, "mousedown", we), A = !0), e.updateAtScroll || s != null && s.updateAtScroll)) {
                d = is(p.value);
                for (const ee of d) ee.addEventListener("scroll", $e)
            }
        }), ln(() => {
            m.value && W()
        }), yf(() => {
            k(!1)
        }), Dt(() => {
            if (c == null || c.removeChildRef(_), q(), A && ge(), d) {
                for (const ee of d) ee.removeEventListener("scroll", $e);
                d = void 0
            }
        });
        const ne = U(m.value), _e = U(!1), Ze = () => {
            _e.value = !0
        }, et = () => {
            _e.value = !1, m.value && t("show")
        }, Nn = () => {
            _e.value = !1, m.value || (ne.value = !1, t("hide"))
        };
        return () => {
            var ee, D;
            return f.value = (D = (ee = n.default) == null ? void 0 : ee.call(n)) != null ? D : [], du(f.value, {
                class: y.value,
                onClick: P,
                onMouseenter: F,
                onMouseleave: K,
                onFocusin: I,
                onFocusout: Y,
                onContextmenu: Q
            }), V(ot, null, [e.autoFixPosition ? V(zn, {onResize: ze}, {default: () => [f.value]}) : f.value, V(Cu, null, {
                default: () => [V(nu, {
                    to: b.value,
                    disabled: !e.renderToBody
                }, {
                    default: () => [(!e.unmountOnClose || m.value || ne.value) && !Ne.value && V(zn, {onResize: Me}, {
                        default: () => [V("div", Re({
                            ref: _,
                            class: [`${i}-popup`, `${i}-position-${w.value}`],
                            style: Qh(Zh({}, L.value), {zIndex: N.value, pointerEvents: _e.value ? "none" : "auto"}),
                            "trigger-placement": w.value,
                            onMouseenter: x,
                            onMouseleave: B,
                            onMousedown: oe
                        }, a.value), [V(an, {
                            name: e.animationName,
                            duration: e.duration,
                            appear: !0,
                            onBeforeEnter: Ze,
                            onAfterEnter: et,
                            onBeforeLeave: Ze,
                            onAfterLeave: Nn
                        }, {
                            default: () => {
                                var X;
                                return [mn(V("div", {
                                    class: `${i}-popup-wrapper`,
                                    style: g.value
                                }, [V("div", {
                                    class: [`${i}-content`, e.contentClass],
                                    style: e.contentStyle
                                }, [(X = n.content) == null ? void 0 : X.call(n)]), e.showArrow && V("div", {
                                    ref: E,
                                    class: [`${i}-arrow`, e.arrowClass],
                                    style: $.value
                                }, null)]), [[vn, m.value]])]
                            }
                        })])]
                    })]
                })]
            })])
        }
    }
});
const kr = Object.assign(Eo, {
        install: (e, t) => {
            Ve(e, t);
            const n = Fe(t);
            e.component(n + Eo.name, Eo)
        }
    }), tp = te({
        name: "IconEmpty",
        props: {
            size: {type: [Number, String]},
            strokeWidth: {type: Number, default: 4},
            strokeLinecap: {type: String, default: "butt", validator: e => ["butt", "round", "square"].includes(e)},
            strokeLinejoin: {
                type: String,
                default: "miter",
                validator: e => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
            },
            rotate: Number,
            spin: Boolean
        },
        emits: {click: e => !0},
        setup(e, {emit: t}) {
            const n = re("icon"), r = C(() => [n, `${n}-empty`, {[`${n}-spin`]: e.spin}]), o = C(() => {
                const a = {};
                return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a
            });
            return {
                cls: r, innerStyle: o, onClick: a => {
                    t("click", a)
                }
            }
        }
    }), np = ["stroke-width", "stroke-linecap", "stroke-linejoin"],
    rp = de("path", {d: "M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"}, null, -1),
    op = [rp];

function ip(e, t, n, r, o, i) {
    return R(), J("svg", {
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "currentColor",
        class: G(e.cls),
        style: Oe(e.innerStyle),
        "stroke-width": e.strokeWidth,
        "stroke-linecap": e.strokeLinecap,
        "stroke-linejoin": e.strokeLinejoin,
        onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
    }, op, 14, np)
}

var $o = he(tp, [["render", ip]]);
const ap = Object.assign($o, {
    install: (e, t) => {
        var n;
        const r = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
        e.component(r + $o.name, $o)
    }
});
var ko = te({
    name: "Empty", props: {description: String, imgSrc: String}, setup(e, {slots: t}) {
        const n = re("empty"), {t: r} = iu(), o = nt(Ht, void 0);
        return () => {
            var i, a, s, l;
            return o != null && o.slots.empty && !(t.image || e.imgSrc) ? o.slots.empty() : V("div", {class: n}, [V("div", {class: `${n}-image`}, [(a = (i = t.image) == null ? void 0 : i.call(t)) != null ? a : e.imgSrc ? V("img", {
                src: e.imgSrc,
                alt: e.description || "empty"
            }, null) : V(ap, null, null)]), V("div", {class: `${n}-description`}, [(l = (s = t.default) == null ? void 0 : s.call(t)) != null ? l : e.description || r("empty.description")])])
        }
    }
});
const sp = Object.assign(ko, {
    install: (e, t) => {
        Ve(e, t);
        const n = Fe(t);
        e.component(n + ko.name, ko)
    }
}), lp = 5;
var up = te({
    name: "DotLoading", props: {size: {type: Number}}, setup(e) {
        const t = re("dot-loading");
        return () => {
            const n = e.size ? {width: `${e.size}px`, height: `${e.size}px`} : {};
            return V("div", {
                class: t,
                style: {width: e.size ? `${e.size * 7}px` : void 0, height: e.size ? `${e.size}px` : void 0}
            }, [Array(lp).fill(1).map((r, o) => V("div", {class: `${t}-item`, key: o, style: n}, null))])
        }
    }
}), Oo = te({
    name: "Spin",
    props: {size: {type: Number}, loading: Boolean, dot: Boolean, tip: String},
    setup(e, {slots: t}) {
        const n = re("spin"), r = nt(Ht, void 0),
            o = C(() => [n, {[`${n}-loading`]: e.loading, [`${n}-with-tip`]: e.tip && !t.default}]), i = () => {
                if (t.icon) {
                    const s = yn(t.icon());
                    if (s) return Rr(s, {spin: !0})
                }
                return t.element ? t.element() : e.dot ? V(up, {size: e.size}, null) : r != null && r.slots.loading ? r.slots.loading() : V(jt, {
                    spin: !0,
                    size: e.size
                }, null)
            }, a = () => {
                const s = e.size ? {fontSize: `${e.size}px`} : void 0;
                return V(ot, null, [V("div", {
                    class: `${n}-icon`,
                    style: s
                }, [i()]), e.tip && V("div", {class: `${n}-tip`}, [e.tip])])
            };
        return () => V("div", {class: o.value}, [t.default ? V(ot, null, [t.default(), e.loading && V("div", {class: `${n}-mask`}, [V("div", {class: `${n}-mask-icon`}, [a()])])]) : a()])
    }
});
const cp = Object.assign(Oo, {
    install: (e, t) => {
        Ve(e, t);
        const n = Fe(t);
        e.component(n + Oo.name, Oo)
    }
}), fp = te({
    name: "Thumb",
    props: {
        data: {type: Object},
        direction: {type: String, default: "horizontal"},
        alwaysShow: {type: Boolean, default: !1},
        both: {type: Boolean, default: !1}
    },
    emits: ["scroll"],
    setup(e, {emit: t}) {
        const n = re("scrollbar"), r = U(!1), o = U(), i = U(), a = C(() => e.direction === "horizontal" ? {
                size: "width",
                direction: "left",
                offset: "offsetWidth",
                client: "clientX"
            } : {size: "height", direction: "top", offset: "offsetHeight", client: "clientY"}), s = U(0), l = U(!1),
            u = U(0), c = C(() => {
                var $, E;
                return {
                    [a.value.size]: `${(E = ($ = e.data) == null ? void 0 : $.thumbSize) != null ? E : 0}px`,
                    [a.value.direction]: `${s.value}px`
                }
            }), f = $ => {
                $.preventDefault(), i.value && (u.value = $[a.value.client] - i.value.getBoundingClientRect()[a.value.direction], l.value = !0, pt(window, "mousemove", S), pt(window, "mouseup", w), pt(window, "contextmenu", w))
            }, p = $ => {
                var E, h, m, b;
                if ($.preventDefault(), i.value) {
                    const v = _($[a.value.client] > i.value.getBoundingClientRect()[a.value.direction] ? s.value + ((h = (E = e.data) == null ? void 0 : E.thumbSize) != null ? h : 0) : s.value - ((b = (m = e.data) == null ? void 0 : m.thumbSize) != null ? b : 0));
                    v !== s.value && (s.value = v, t("scroll", v))
                }
            }, _ = $ => $ < 0 ? 0 : e.data && $ > e.data.max ? e.data.max : $, S = $ => {
                if (o.value && i.value) {
                    const E = _($[a.value.client] - o.value.getBoundingClientRect()[a.value.direction] - u.value);
                    E !== s.value && (s.value = E, t("scroll", E))
                }
            }, w = () => {
                l.value = !1, qt(window, "mousemove", S), qt(window, "mouseup", w)
            }, L = $ => {
                l.value || ($ = _($), $ !== s.value && (s.value = $))
            }, g = C(() => [`${n}-thumb`, `${n}-thumb-direction-${e.direction}`, {[`${n}-thumb-dragging`]: l.value}]);
        return {
            visible: r,
            trackRef: o,
            thumbRef: i,
            prefixCls: n,
            thumbCls: g,
            thumbStyle: c,
            handleThumbMouseDown: f,
            handleTrackClick: p,
            setOffset: L
        }
    }
});

function dp(e, t, n, r, o, i) {
    return R(), fe(an, null, {
        default: Se(() => [de("div", {
            ref: "trackRef",
            class: G([`${e.prefixCls}-track`, `${e.prefixCls}-track-direction-${e.direction}`]),
            onMousedown: t[1] || (t[1] = Wt((...a) => e.handleTrackClick && e.handleTrackClick(...a), ["self"]))
        }, [de("div", {
            ref: "thumbRef",
            class: G(e.thumbCls),
            style: Oe(e.thumbStyle),
            onMousedown: t[0] || (t[0] = (...a) => e.handleThumbMouseDown && e.handleThumbMouseDown(...a))
        }, [de("div", {class: G(`${e.prefixCls}-thumb-bar`)}, null, 2)], 38)], 34)]), _: 1
    })
}

var hp = he(fp, [["render", dp]]);
const us = 20, nr = 15, pp = te({
    name: "Scrollbar",
    components: {ResizeObserver: zn, Thumb: hp},
    inheritAttrs: !1,
    props: {
        type: {type: String, default: "embed"},
        outerClass: [String, Object, Array],
        outerStyle: {type: [String, Object, Array]},
        hide: {type: Boolean, default: !1},
        disableHorizontal: {type: Boolean, default: !1},
        disableVertical: {type: Boolean, default: !1}
    },
    emits: {scroll: e => !0},
    setup(e, {emit: t}) {
        const n = re("scrollbar"), r = U(), o = U(), i = U(), a = U(), s = U(), l = U(!1), u = U(!1),
            c = C(() => l.value && !e.disableHorizontal), f = C(() => u.value && !e.disableVertical), p = U(!1),
            _ = () => {
                var h, m, b, v, N, T;
                if (r.value) {
                    const {
                        clientWidth: A,
                        clientHeight: j,
                        offsetWidth: Z,
                        offsetHeight: W,
                        scrollWidth: k,
                        scrollHeight: P,
                        scrollTop: F,
                        scrollLeft: x
                    } = r.value;
                    l.value = k > A, u.value = P > j, p.value = c.value && f.value;
                    const K = e.type === "embed" && p.value ? Z - nr : Z,
                        B = e.type === "embed" && p.value ? W - nr : W, I = Math.round(K / Math.min(k / A, K / us)),
                        Y = K - I, Q = (k - A) / Y, ve = Math.round(B / Math.min(P / j, B / us)), se = B - ve,
                        ge = (P - j) / se;
                    if (o.value = {ratio: Q, thumbSize: I, max: Y}, i.value = {
                        ratio: ge,
                        thumbSize: ve,
                        max: se
                    }, F > 0) {
                        const Le = Math.round(F / ((m = (h = i.value) == null ? void 0 : h.ratio) != null ? m : 1));
                        (b = s.value) == null || b.setOffset(Le)
                    }
                    if (x > 0) {
                        const Le = Math.round(x / ((N = (v = i.value) == null ? void 0 : v.ratio) != null ? N : 1));
                        (T = a.value) == null || T.setOffset(Le)
                    }
                }
            };
        We(() => {
            _()
        });
        const S = () => {
            _()
        }, w = h => {
            var m, b, v, N, T, A;
            if (r.value) {
                if (c.value && !e.disableHorizontal) {
                    const j = Math.round(r.value.scrollLeft / ((b = (m = o.value) == null ? void 0 : m.ratio) != null ? b : 1));
                    (v = a.value) == null || v.setOffset(j)
                }
                if (f.value && !e.disableVertical) {
                    const j = Math.round(r.value.scrollTop / ((T = (N = i.value) == null ? void 0 : N.ratio) != null ? T : 1));
                    (A = s.value) == null || A.setOffset(j)
                }
            }
            t("scroll", h)
        }, L = h => {
            var m, b;
            r.value && r.value.scrollTo({left: h * ((b = (m = o.value) == null ? void 0 : m.ratio) != null ? b : 1)})
        }, g = h => {
            var m, b;
            r.value && r.value.scrollTo({top: h * ((b = (m = i.value) == null ? void 0 : m.ratio) != null ? b : 1)})
        }, $ = C(() => {
            const h = {};
            return e.type === "track" && (c.value && (h.paddingBottom = `${nr}px`), f.value && (h.paddingRight = `${nr}px`)), [h, e.outerStyle]
        }), E = C(() => [`${n}`, `${n}-type-${e.type}`, {[`${n}-both`]: p.value}, e.outerClass]);
        return {
            prefixCls: n,
            cls: E,
            style: $,
            containerRef: r,
            horizontalThumbRef: a,
            verticalThumbRef: s,
            horizontalData: o,
            verticalData: i,
            isBoth: p,
            hasHorizontalScrollbar: c,
            hasVerticalScrollbar: f,
            handleResize: S,
            handleScroll: w,
            handleHorizontalScroll: L,
            handleVerticalScroll: g
        }
    },
    methods: {
        scrollTo(e, t) {
            var n, r;
            De(e) ? (n = this.$refs.containerRef) == null || n.scrollTo(e) : (e || t) && ((r = this.$refs.containerRef) == null || r.scrollTo(e, t))
        }, scrollTop(e) {
            var t;
            (t = this.$refs.containerRef) == null || t.scrollTo({top: e})
        }, scrollLeft(e) {
            var t;
            (t = this.$refs.containerRef) == null || t.scrollTo({left: e})
        }
    }
});

function mp(e, t, n, r, o, i) {
    const a = ie("ResizeObserver"), s = ie("thumb");
    return R(), J("div", {
        class: G(e.cls),
        style: Oe(e.style)
    }, [V(a, {onResize: e.handleResize}, {
        default: Se(() => [de("div", Re({
            ref: "containerRef",
            class: `${e.prefixCls}-container`
        }, e.$attrs, {onScroll: t[0] || (t[0] = (...l) => e.handleScroll && e.handleScroll(...l))}), [V(a, {onResize: e.handleResize}, {
            default: Se(() => [ae(e.$slots, "default")]),
            _: 3
        }, 8, ["onResize"])], 16)]), _: 3
    }, 8, ["onResize"]), !e.hide && e.hasHorizontalScrollbar ? (R(), fe(s, {
        key: 0,
        ref: "horizontalThumbRef",
        data: e.horizontalData,
        direction: "horizontal",
        both: e.isBoth,
        onScroll: e.handleHorizontalScroll
    }, null, 8, ["data", "both", "onScroll"])) : le("v-if", !0), !e.hide && e.hasVerticalScrollbar ? (R(), fe(s, {
        key: 1,
        ref: "verticalThumbRef",
        data: e.verticalData,
        direction: "vertical",
        both: e.isBoth,
        onScroll: e.handleVerticalScroll
    }, null, 8, ["data", "both", "onScroll"])) : le("v-if", !0)], 6)
}

var Lo = he(pp, [["render", mp]]);
const vp = Object.assign(Lo, {
    install: (e, t) => {
        Ve(e, t);
        const n = Fe(t);
        e.component(n + Lo.name, Lo)
    }
}), gp = e => {
    const t = U(), n = () => ou(t.value) ? t.value.$refs[e] : t.value, r = U();
    return We(() => {
        r.value = n()
    }), Pe([t], () => {
        r.value = n()
    }), {componentRef: t, elementRef: r}
};
var yp = Object.defineProperty, cs = Object.getOwnPropertySymbols, bp = Object.prototype.hasOwnProperty,
    _p = Object.prototype.propertyIsEnumerable,
    fs = (e, t, n) => t in e ? yp(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
    Cp = (e, t) => {
        for (var n in t || (t = {})) bp.call(t, n) && fs(e, n, t[n]);
        if (cs) for (var n of cs(t)) _p.call(t, n) && fs(e, n, t[n]);
        return e
    };
const Sp = e => {
    const t = C(() => !!e.value), n = C(() => {
        if (e.value) return Cp({type: "embed"}, Ai(e.value) ? void 0 : e.value)
    });
    return {displayScrollbar: t, scrollbarProps: n}
}, wp = te({
    name: "SelectDropdown",
    components: {ScrollbarComponent: vp, Empty: sp, Spin: cp},
    props: {
        loading: Boolean,
        empty: Boolean,
        virtualList: Boolean,
        bottomOffset: {type: Number, default: 0},
        scrollbar: {type: [Boolean, Object], default: !0},
        onScroll: {type: [Function, Array]},
        onReachBottom: {type: [Function, Array]}
    },
    emits: ["scroll", "reachBottom"],
    setup(e, {emit: t, slots: n}) {
        const {scrollbar: r} = Be(e), o = re("select-dropdown"), {
            componentRef: i,
            elementRef: a
        } = gp("containerRef"), {displayScrollbar: s, scrollbarProps: l} = Sp(r), u = f => {
            const {scrollTop: p, scrollHeight: _, offsetHeight: S} = f.target;
            _ - (p + S) <= e.bottomOffset && t("reachBottom", f), t("scroll", f)
        }, c = C(() => [o, {[`${o}-has-header`]: !!n.header, [`${o}-has-footer`]: !!n.footer}]);
        return {
            prefixCls: o,
            cls: c,
            wrapperRef: a,
            wrapperComRef: i,
            handleScroll: u,
            displayScrollbar: s,
            scrollbarProps: l
        }
    }
});

function Ep(e, t, n, r, o, i) {
    const a = ie("spin"), s = ie("empty");
    return R(), J("div", {class: G(e.cls)}, [e.loading ? (R(), fe(a, {
        key: 0,
        class: G(`${e.prefixCls}-loading`)
    }, null, 8, ["class"])) : e.empty ? (R(), J("div", {
        key: 1,
        class: G(`${e.prefixCls}-empty`)
    }, [ae(e.$slots, "empty", {}, () => [V(s)])], 2)) : le("v-if", !0), e.$slots.header && !e.empty ? (R(), J("div", {
        key: 2,
        class: G(`${e.prefixCls}-header`)
    }, [ae(e.$slots, "header")], 2)) : le("v-if", !0), e.virtualList && !e.loading && !e.empty ? ae(e.$slots, "virtual-list", {key: 3}) : le("v-if", !0), e.virtualList ? le("v-if", !0) : mn((R(), fe(gn(e.displayScrollbar ? "ScrollbarComponent" : "div"), Re({
        key: 4,
        ref: "wrapperComRef",
        class: `${e.prefixCls}-list-wrapper`
    }, e.scrollbarProps, {onScroll: e.handleScroll}), {
        default: Se(() => [de("ul", {class: G(`${e.prefixCls}-list`)}, [ae(e.$slots, "default")], 2)]),
        _: 3
    }, 16, ["class", "onScroll"])), [[vn, !e.loading && !e.empty]]), e.$slots.footer && !e.empty ? (R(), J("div", {
        key: 5,
        class: G(`${e.prefixCls}-footer`)
    }, [ae(e.$slots, "footer")], 2)) : le("v-if", !0)], 2)
}

var $p = he(wp, [["render", Ep]]), ds = te({
    name: "IconCheck", render() {
        return V("svg", {
            "aria-hidden": "true",
            focusable: "false",
            viewBox: "0 0 1024 1024",
            width: "200",
            height: "200",
            fill: "currentColor"
        }, [V("path", {
            d: "M877.44815445 206.10060629a64.72691371 64.72691371 0 0 0-95.14856334 4.01306852L380.73381888 685.46812814 235.22771741 533.48933518a64.72691371 64.72691371 0 0 0-92.43003222-1.03563036l-45.82665557 45.82665443a64.72691371 64.72691371 0 0 0-0.90617629 90.61767965l239.61903446 250.10479331a64.72691371 64.72691371 0 0 0 71.19960405 15.14609778 64.33855261 64.33855261 0 0 0 35.08198741-21.23042702l36.24707186-42.71976334 40.5190474-40.77795556-3.36579926-3.49525333 411.40426297-486.74638962a64.72691371 64.72691371 0 0 0-3.88361443-87.64024149l-45.3088404-45.43829334z",
            "p-id": "840"
        }, null)])
    }
});
const wu = Symbol("ArcoCheckboxGroup");
var cr = te({
    name: "Checkbox",
    components: {IconCheck: ds, IconHover: ct},
    props: {
        modelValue: {type: [Boolean, Array], default: void 0},
        defaultChecked: {type: Boolean, default: !1},
        value: {type: [String, Number]},
        disabled: {type: Boolean, default: !1},
        indeterminate: {type: Boolean, default: !1},
        uninjectGroupContext: {type: Boolean, default: !1}
    },
    emits: {"update:modelValue": e => !0, change: (e, t) => !0},
    setup(e, {emit: t, slots: n}) {
        const {disabled: r, modelValue: o} = Be(e), i = re("checkbox"), a = U(),
            s = e.uninjectGroupContext ? void 0 : nt(wu, void 0),
            l = (s == null ? void 0 : s.name) === "ArcoCheckboxGroup", {
                mergedDisabled: u,
                eventHandlers: c
            } = _t({disabled: r}), f = U(e.defaultChecked), p = C(() => {
                var h;
                return l ? s == null ? void 0 : s.computedValue : (h = e.modelValue) != null ? h : f.value
            }), _ = C(() => {
                var h;
                return Ge(p.value) ? p.value.includes((h = e.value) != null ? h : !0) : p.value
            }),
            S = C(() => (s == null ? void 0 : s.disabled) || (u == null ? void 0 : u.value) || !_.value && (s == null ? void 0 : s.isMaxed)),
            w = h => {
                h.stopPropagation()
            }, L = h => {
                var m, b, v, N;
                const {checked: T} = h.target;
                let A = T;
                if (Ge(p.value)) {
                    const j = new Set(p.value);
                    T ? j.add((m = e.value) != null ? m : !0) : j.delete((b = e.value) != null ? b : !0), A = Array.from(j)
                }
                f.value = T, l && Ge(A) ? s == null || s.handleChange(A, h) : (t("update:modelValue", A), t("change", A, h), (N = (v = c.value) == null ? void 0 : v.onChange) == null || N.call(v, h)), Xe(() => {
                    a.value && a.value.checked !== _.value && (a.value.checked = _.value)
                })
            }, g = C(() => [i, {
                [`${i}-checked`]: _.value,
                [`${i}-indeterminate`]: e.indeterminate,
                [`${i}-disabled`]: S.value
            }]), $ = h => {
                var m, b;
                (b = (m = c.value) == null ? void 0 : m.onFocus) == null || b.call(m, h)
            }, E = h => {
                var m, b;
                (b = (m = c.value) == null ? void 0 : m.onBlur) == null || b.call(m, h)
            };
        return Pe(o, h => {
            (ht(h) || Kn(h)) && (f.value = !1)
        }), Pe(p, h => {
            var m;
            let b;
            Ge(h) ? b = h.includes((m = e.value) != null ? m : !0) : b = h, f.value !== b && (f.value = b), a.value && a.value.checked !== b && (a.value.checked = b)
        }), () => {
            var h, m, b, v;
            return V("label", {"aria-disabled": S.value, class: g.value}, [V("input", {
                ref: a,
                type: "checkbox",
                checked: _.value,
                value: e.value,
                class: `${i}-target`,
                disabled: S.value,
                onClick: w,
                onChange: L,
                onFocus: $,
                onBlur: E
            }, null), (v = (b = (m = n.checkbox) != null ? m : (h = s == null ? void 0 : s.slots) == null ? void 0 : h.checkbox) == null ? void 0 : b({
                checked: _.value,
                disabled: S.value
            })) != null ? v : V(ct, {
                class: `${i}-icon-hover`,
                disabled: S.value || _.value
            }, {default: () => [V("div", {class: `${i}-icon`}, [_.value && V(ds, {class: `${i}-icon-check`}, null)])]}), n.default && V("span", {class: `${i}-label`}, [n.default()])])
        }
    }
}), To = te({
    name: "CheckboxGroup",
    props: {
        modelValue: {type: Array, default: void 0},
        defaultValue: {type: Array, default: () => []},
        max: {type: Number},
        options: {type: Array},
        direction: {type: String, default: "horizontal"},
        disabled: {type: Boolean, default: !1}
    },
    emits: {"update:modelValue": e => !0, change: (e, t) => !0},
    setup(e, {emit: t, slots: n}) {
        const {disabled: r} = Be(e), o = re("checkbox-group"), {
                mergedDisabled: i,
                eventHandlers: a
            } = _t({disabled: r}), s = U(e.defaultValue), l = C(() => Ge(e.modelValue) ? e.modelValue : s.value),
            u = C(() => e.max === void 0 ? !1 : l.value.length >= e.max), c = C(() => {
                var S;
                return ((S = e.options) != null ? S : []).map(w => Rt(w) || me(w) ? {label: w, value: w} : w)
            });
        Lt(wu, xe({
            name: "ArcoCheckboxGroup",
            computedValue: l,
            disabled: i,
            isMaxed: u,
            slots: n,
            handleChange: (S, w) => {
                var L, g;
                s.value = S, t("update:modelValue", S), t("change", S, w), (g = (L = a.value) == null ? void 0 : L.onChange) == null || g.call(L, w)
            }
        }));
        const p = C(() => [o, `${o}-direction-${e.direction}`]);
        Pe(() => e.modelValue, S => {
            Ge(S) ? s.value = [...S] : s.value = []
        });
        const _ = () => c.value.map(S => {
            const w = l.value.includes(S.value);
            return V(cr, {
                key: S.value,
                value: S.value,
                disabled: S.disabled || !w && u.value,
                indeterminate: S.indeterminate,
                modelValue: w
            }, {default: () => [n.label ? n.label({data: S}) : qe(S.label) ? S.label() : S.label]})
        });
        return () => {
            var S;
            return V("span", {class: p.value}, [c.value.length > 0 ? _() : (S = n.default) == null ? void 0 : S.call(n)])
        }
    }
});
const kp = Object.assign(cr, {
    Group: To, install: (e, t) => {
        Ve(e, t);
        const n = Fe(t);
        e.component(n + cr.name, cr), e.component(n + To.name, To)
    }
}), Eu = Symbol("ArcoSelectContext");
var Op = Object.defineProperty, Lp = Object.defineProperties, Tp = Object.getOwnPropertyDescriptors,
    hs = Object.getOwnPropertySymbols, Ap = Object.prototype.hasOwnProperty, Np = Object.prototype.propertyIsEnumerable,
    ps = (e, t, n) => t in e ? Op(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
    va = (e, t) => {
        for (var n in t || (t = {})) Ap.call(t, n) && ps(e, n, t[n]);
        if (hs) for (var n of hs(t)) Np.call(t, n) && ps(e, n, t[n]);
        return e
    }, $u = (e, t) => Lp(e, Tp(t));
const Pp = e => De(e) && "isGroup" in e, ku = e => De(e) && "isGroup" in e,
    Ip = (e, t = "value") => String(De(e) ? e[t] : e),
    Un = (e, t = "value") => De(e) ? `__arco__option__object__${e[t]}` : e || me(e) ? `__arco__option__${typeof e}-${e}` : "",
    Mp = (e, {valueKey: t, fieldNames: n, origin: r, index: o = -1}) => {
        var i;
        if (De(e)) {
            const s = e[n.value];
            return {
                raw: e,
                index: o,
                key: Un(s, t),
                origin: r,
                value: s,
                label: (i = e[n.label]) != null ? i : Ip(s, t),
                render: e[n.render],
                disabled: !!e[n.disabled],
                tagProps: e[n.tagProps]
            }
        }
        const a = {value: e, label: String(e), disabled: !1};
        return va({raw: a, index: o, key: Un(e, t), origin: r}, a)
    }, Bi = (e, {valueKey: t, fieldNames: n, origin: r, optionInfoMap: o}) => {
        var i;
        const a = [];
        for (const s of e) if (Pp(s)) {
            const l = Bi((i = s.options) != null ? i : [], {valueKey: t, fieldNames: n, origin: r, optionInfoMap: o});
            l.length > 0 && a.push($u(va({}, s), {key: `__arco__group__${s.label}`, options: l}))
        } else {
            const l = Mp(s, {valueKey: t, fieldNames: n, origin: r});
            a.push(l), o.get(l.key) || o.set(l.key, l)
        }
        return a
    }, ms = (e, {inputValue: t, filterOption: n}) => {
        const r = o => {
            var i;
            const a = [];
            for (const s of o) if (ku(s)) {
                const l = r((i = s.options) != null ? i : []);
                l.length > 0 && a.push($u(va({}, s), {options: l}))
            } else zr(s, {inputValue: t, filterOption: n}) && a.push(s);
            return a
        };
        return r(e)
    }, zr = (e, {
        inputValue: t,
        filterOption: n
    }) => qe(n) ? !t || n(t, e.raw) : n ? e.label.toLowerCase().includes((t ?? "").toLowerCase()) : !0, Rp = (e, t) => {
        if (!e || !t || e.length !== t.length) return !1;
        for (const n of Object.keys(e)) if (!ga(e[n], t[n])) return !1;
        return !0
    }, Bp = (e, t) => {
        if (!e || !t) return !1;
        const {length: n} = e;
        if (n !== t.length) return !1;
        for (let r = 0; r < n; r++) if (!ga(e[r], t[r])) return !1;
        return !0
    }, ga = (e, t) => {
        const n = Object.prototype.toString.call(e);
        return n !== Object.prototype.toString.call(t) ? !1 : n === "[object Object]" ? Rp(e, t) : n === "[object Array]" ? Bp(e, t) : n === "[object Function]" ? e === t ? !0 : e.toString() === t.toString() : e === t
    }, Dp = te({
        name: "Option",
        components: {Checkbox: kp},
        props: {
            value: [String, Number, Object],
            label: String,
            disabled: Boolean,
            tagProps: {type: Object},
            extra: {type: Object},
            index: {type: Number},
            internal: Boolean
        },
        setup(e) {
            const {disabled: t, tagProps: n, index: r} = Be(e), o = re("select-option"), i = nt(Eu, void 0), a = Yt(),
                s = U(), l = U(n.value);
            Pe(n, (b, v) => {
                ga(b, v) || (l.value = b)
            });
            const u = U(""), c = C(() => {
                var b, v;
                return (v = (b = e.value) != null ? b : e.label) != null ? v : u.value
            }), f = C(() => {
                var b;
                return (b = e.label) != null ? b : u.value
            }), p = C(() => Un(c.value, i == null ? void 0 : i.valueKey)), _ = C(() => {
                var b;
                return (b = i == null ? void 0 : i.component) != null ? b : "li"
            }), S = () => {
                var b;
                if (!e.label && s.value) {
                    const v = (b = s.value.textContent) != null ? b : "";
                    u.value !== v && (u.value = v)
                }
            };
            We(() => S()), ln(() => S());
            const w = C(() => {
                var b;
                return (b = i == null ? void 0 : i.valueKeys.includes(p.value)) != null ? b : !1
            }), L = C(() => (i == null ? void 0 : i.activeKey) === p.value);
            let g = U(!0);
            if (!e.internal) {
                const b = xe({
                    raw: {value: c, label: f, disabled: t, tagProps: l},
                    ref: s,
                    index: r,
                    key: p,
                    origin: "slot",
                    value: c,
                    label: f,
                    disabled: t,
                    tagProps: l
                });
                g = C(() => zr(b, {
                    inputValue: i == null ? void 0 : i.inputValue,
                    filterOption: i == null ? void 0 : i.filterOption
                })), a && (i == null || i.addSlotOptionInfo(a.uid, b)), Dt(() => {
                    a && (i == null || i.removeSlotOptionInfo(a.uid))
                })
            }
            const $ = b => {
                e.disabled || i == null || i.onSelect(p.value, b)
            }, E = () => {
                e.disabled || i == null || i.setActiveKey(p.value)
            }, h = () => {
                e.disabled || i == null || i.setActiveKey()
            }, m = C(() => [o, {
                [`${o}-disabled`]: e.disabled,
                [`${o}-active`]: L.value,
                [`${o}-multiple`]: i == null ? void 0 : i.multiple
            }]);
            return {
                prefixCls: o,
                cls: m,
                selectCtx: i,
                itemRef: s,
                component: _,
                isSelected: w,
                isValid: g,
                handleClick: $,
                handleMouseEnter: E,
                handleMouseLeave: h
            }
        }
    });

function jp(e, t, n, r, o, i) {
    const a = ie("checkbox");
    return mn((R(), fe(gn(e.component), {
        ref: "itemRef",
        class: G([e.cls, {[`${e.prefixCls}-has-suffix`]: !!e.$slots.suffix}]),
        onClick: e.handleClick,
        onMouseenter: e.handleMouseEnter,
        onMouseleave: e.handleMouseLeave
    }, {
        default: Se(() => [e.$slots.icon ? (R(), J("span", {
            key: 0,
            class: G(`${e.prefixCls}-icon`)
        }, [ae(e.$slots, "icon")], 2)) : le("v-if", !0), e.selectCtx && e.selectCtx.multiple ? (R(), fe(a, {
            key: 1,
            class: G(`${e.prefixCls}-checkbox`),
            "model-value": e.isSelected,
            disabled: e.disabled,
            "uninject-group-context": ""
        }, {
            default: Se(() => [ae(e.$slots, "default", {}, () => [Qe(Ue(e.label), 1)])]),
            _: 3
        }, 8, ["class", "model-value", "disabled"])) : (R(), J("span", {
            key: 2,
            class: G(`${e.prefixCls}-content`)
        }, [ae(e.$slots, "default", {}, () => [Qe(Ue(e.label), 1)])], 2)), e.$slots.suffix ? (R(), J("span", {
            key: 3,
            class: G(`${e.prefixCls}-suffix`)
        }, [ae(e.$slots, "suffix")], 2)) : le("v-if", !0)]), _: 3
    }, 8, ["class", "onClick", "onMouseenter", "onMouseleave"])), [[vn, e.isValid]])
}

var fr = he(Dp, [["render", jp]]), Fp = Object.defineProperty, Vp = Object.defineProperties,
    xp = Object.getOwnPropertyDescriptors, vs = Object.getOwnPropertySymbols, zp = Object.prototype.hasOwnProperty,
    Up = Object.prototype.propertyIsEnumerable,
    gs = (e, t, n) => t in e ? Fp(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
    Ao = (e, t) => {
        for (var n in t || (t = {})) zp.call(t, n) && gs(e, n, t[n]);
        if (vs) for (var n of vs(t)) Up.call(t, n) && gs(e, n, t[n]);
        return e
    }, Wp = (e, t) => Vp(e, xp(t));
const Hp = {value: "value", label: "label", disabled: "disabled", tagProps: "tagProps", render: "render"}, qp = ({
                                                                                                                     options: e,
                                                                                                                     extraOptions: t,
                                                                                                                     inputValue: n,
                                                                                                                     filterOption: r,
                                                                                                                     showExtraOptions: o,
                                                                                                                     valueKey: i,
                                                                                                                     fieldNames: a
                                                                                                                 }) => {
        const s = C(() => Ao(Ao({}, Hp), a == null ? void 0 : a.value)), l = xe(new Map), u = U([]);
        Pe(l, E => {
            u.value = Array.from(E.values()).sort((h, m) => me(h.index) && me(m.index) ? h.index - m.index : 0)
        }, {deep: !0});
        const c = C(() => {
            var E, h;
            const m = new Map;
            return {
                optionInfos: Bi((E = e == null ? void 0 : e.value) != null ? E : [], {
                    valueKey: (h = i == null ? void 0 : i.value) != null ? h : "value",
                    fieldNames: s.value,
                    origin: "options",
                    optionInfoMap: m
                }), optionInfoMap: m
            }
        }), f = C(() => {
            var E, h;
            const m = new Map;
            return {
                optionInfos: Bi((E = t == null ? void 0 : t.value) != null ? E : [], {
                    valueKey: (h = i == null ? void 0 : i.value) != null ? h : "value",
                    fieldNames: s.value,
                    origin: "extraOptions",
                    optionInfoMap: m
                }), optionInfoMap: m
            }
        }), p = xe(new Map);
        Pe([l, e ?? U([]), t ?? U([]), i ?? U("value")], () => {
            p.clear(), u.value.forEach((E, h) => {
                p.set(E.key, Wp(Ao({}, E), {index: h}))
            }), c.value.optionInfoMap.forEach(E => {
                p.has(E.key) || (E.index = p.size, p.set(E.key, E))
            }), f.value.optionInfoMap.forEach(E => {
                p.has(E.key) || (E.index = p.size, p.set(E.key, E))
            })
        }, {immediate: !0, deep: !0});
        const _ = C(() => {
                var E;
                const h = ms(c.value.optionInfos, {
                    inputValue: n == null ? void 0 : n.value,
                    filterOption: r == null ? void 0 : r.value
                });
                return ((E = o == null ? void 0 : o.value) == null || E) && h.push(...ms(f.value.optionInfos, {
                    inputValue: n == null ? void 0 : n.value,
                    filterOption: r == null ? void 0 : r.value
                })), h
            }),
            S = C(() => Array.from(p.values()).filter(E => E.origin === "extraOptions" && (o == null ? void 0 : o.value) === !1 ? !1 : zr(E, {
                inputValue: n == null ? void 0 : n.value,
                filterOption: r == null ? void 0 : r.value
            }))), w = C(() => S.value.filter(E => !E.disabled).map(E => E.key));
        return {
            validOptions: _,
            optionInfoMap: p,
            validOptionInfos: S,
            enabledOptionKeys: w,
            getNextSlotOptionIndex: () => l.size,
            addSlotOptionInfo: (E, h) => {
                l.set(E, h)
            },
            removeSlotOptionInfo: E => {
                l.delete(E)
            }
        }
    }, en = {
        ENTER: "Enter",
        ESC: "Escape",
        BACKSPACE: "Backspace",
        TAB: "Tab",
        SPACE: " ",
        ARROW_UP: "ArrowUp",
        ARROW_DOWN: "ArrowDown",
        ARROW_LEFT: "ArrowLeft",
        ARROW_RIGHT: "ArrowRight"
    }, ys = e => JSON.stringify({key: e.key, ctrl: !!e.ctrl, shift: !!e.shift, alt: !!e.alt, meta: !!e.meta}), Ou = e => {
        const t = {};
        return e.forEach((n, r) => {
            const o = Rt(r) ? {key: r} : r;
            t[ys(o)] = n
        }), n => {
            const r = ys({key: n.key, ctrl: n.ctrlKey, shift: n.shiftKey, alt: n.altKey, meta: n.metaKey}), o = t[r];
            o && (n.stopPropagation(), o(n))
        }
    }, Gp = ({
                 multiple: e,
                 options: t,
                 extraOptions: n,
                 inputValue: r,
                 filterOption: o,
                 showExtraOptions: i,
                 component: a,
                 valueKey: s,
                 fieldNames: l,
                 loading: u,
                 popupVisible: c,
                 valueKeys: f,
                 dropdownRef: p,
                 optionRefs: _,
                 virtualListRef: S,
                 onSelect: w,
                 onPopupVisibleChange: L,
                 enterToOpen: g = !0,
                 defaultActiveFirstOption: $
             }) => {
        const {
            validOptions: E,
            optionInfoMap: h,
            validOptionInfos: m,
            enabledOptionKeys: b,
            getNextSlotOptionIndex: v,
            addSlotOptionInfo: N,
            removeSlotOptionInfo: T
        } = qp({
            options: t,
            extraOptions: n,
            inputValue: r,
            filterOption: o,
            showExtraOptions: i,
            valueKey: s,
            fieldNames: l
        }), A = U();
        Pe(b, P => {
            (!A.value || !P.includes(A.value)) && (A.value = P[0])
        });
        const j = P => {
            A.value = P
        }, Z = P => {
            const F = b.value.length;
            if (F === 0) return;
            if (!A.value) return P === "down" ? b.value[0] : b.value[F - 1];
            const x = b.value.indexOf(A.value), K = (F + x + (P === "up" ? -1 : 1)) % F;
            return b.value[K]
        }, W = P => {
            var F, x;
            S != null && S.value && S.value.scrollTo({key: P});
            const K = h.get(P), B = (F = p == null ? void 0 : p.value) == null ? void 0 : F.wrapperRef,
                I = (x = _ == null ? void 0 : _.value[P]) != null ? x : K == null ? void 0 : K.ref;
            if (!B || !I || B.scrollHeight === B.offsetHeight) return;
            const Y = ld(I, B), Q = B.scrollTop;
            Y.top < 0 ? B.scrollTo(0, Q + Y.top) : Y.bottom < 0 && B.scrollTo(0, Q - Y.bottom)
        };
        Pe(c, P => {
            var F;
            if (P) {
                const x = f.value[f.value.length - 1];
                let K = (F = $ == null ? void 0 : $.value) == null || F ? b.value[0] : void 0;
                b.value.includes(x) && (K = x), K !== A.value && (A.value = K), Xe(() => {
                    A.value && W(A.value)
                })
            }
        });
        const k = Ou(new Map([[en.ENTER, P => {
            u != null && u.value || (c.value ? A.value && (w(A.value, P), P.preventDefault()) : g && (L(!0), P.preventDefault()))
        }], [en.ESC, P => {
            c.value && (L(!1), P.preventDefault())
        }], [en.ARROW_DOWN, P => {
            if (c.value) {
                const F = Z("down");
                F && (A.value = F, W(F)), P.preventDefault()
            }
        }], [en.ARROW_UP, P => {
            if (c.value) {
                const F = Z("up");
                F && (A.value = F, W(F)), P.preventDefault()
            }
        }]]));
        return Lt(Eu, xe({
            multiple: e,
            valueKey: s,
            inputValue: r,
            filterOption: o,
            component: a,
            valueKeys: f,
            activeKey: A,
            setActiveKey: j,
            onSelect: w,
            getNextSlotOptionIndex: v,
            addSlotOptionInfo: N,
            removeSlotOptionInfo: T
        })), {
            validOptions: E,
            optionInfoMap: h,
            validOptionInfos: m,
            enabledOptionKeys: b,
            activeKey: A,
            setActiveKey: j,
            addSlotOptionInfo: N,
            removeSlotOptionInfo: T,
            getNextActiveKey: Z,
            scrollIntoView: W,
            handleKeyDown: k
        }
    }, Lu = ({itemRef: e, selector: t, index: n, parentClassName: r}) => {
        const o = U(-1), i = C(() => {
            var u;
            return (u = n == null ? void 0 : n.value) != null ? u : o.value
        }), a = U(), s = () => {
            var u, c, f;
            let p = (c = (u = e.value) == null ? void 0 : u.parentElement) != null ? c : void 0;
            if (r) for (; p && !p.className.includes(r);) p = (f = p.parentElement) != null ? f : void 0;
            return p
        }, l = () => {
            if (ht(n == null ? void 0 : n.value) && a.value && e.value) {
                const u = Array.from(a.value.querySelectorAll(t)).indexOf(e.value);
                u !== o.value && (o.value = u)
            }
        };
        return Pe(e, () => {
            e.value && !a.value && (a.value = s())
        }), We(() => {
            e.value && (a.value = s()), l()
        }), ln(() => l()), {computedIndex: i}
    }, Tu = Symbol("ArcoAvatarGroup"), Kp = te({
        name: "IconImageClose",
        props: {
            size: {type: [Number, String]},
            strokeWidth: {type: Number, default: 4},
            strokeLinecap: {type: String, default: "butt", validator: e => ["butt", "round", "square"].includes(e)},
            strokeLinejoin: {
                type: String,
                default: "miter",
                validator: e => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
            },
            rotate: Number,
            spin: Boolean
        },
        emits: {click: e => !0},
        setup(e, {emit: t}) {
            const n = re("icon"), r = C(() => [n, `${n}-image-close`, {[`${n}-spin`]: e.spin}]), o = C(() => {
                const a = {};
                return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a
            });
            return {
                cls: r, innerStyle: o, onClick: a => {
                    t("click", a)
                }
            }
        }
    }), Yp = ["stroke-width", "stroke-linecap", "stroke-linejoin"],
    Xp = bf('<path d="M41 26V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h17"></path><path d="m24 33 9-8.5V27s-2 1-3.5 2.5C27.841 31.159 27 33 27 33h-3Zm0 0-3.5-4.5L17 33h7Z"></path><path d="M20.5 28.5 17 33h7l-3.5-4.5ZM33 24.5 24 33h3s.841-1.841 2.5-3.5C31 28 33 27 33 27v-2.5Z" fill="currentColor" stroke="none"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M46 38a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-4.95-4.782 1.74 1.74-3.045 3.046 3.046 3.046-1.74 1.74-3.047-3.045-3.046 3.046-1.74-1.74 3.046-3.047-3.046-3.046 1.74-1.74 3.046 3.046 3.046-3.046Z" fill="currentColor" stroke="none"></path><path d="M17 15h-2v2h2v-2Z"></path>', 5),
    Jp = [Xp];

function Zp(e, t, n, r, o, i) {
    return R(), J("svg", {
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "currentColor",
        class: G(e.cls),
        style: Oe(e.innerStyle),
        "stroke-width": e.strokeWidth,
        "stroke-linecap": e.strokeLinecap,
        "stroke-linejoin": e.strokeLinejoin,
        onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
    }, Jp, 14, Yp)
}

var No = he(Kp, [["render", Zp]]);
const Qp = Object.assign(No, {
    install: (e, t) => {
        var n;
        const r = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
        e.component(r + No.name, No)
    }
});
var em = Object.defineProperty, bs = Object.getOwnPropertySymbols, tm = Object.prototype.hasOwnProperty,
    nm = Object.prototype.propertyIsEnumerable,
    _s = (e, t, n) => t in e ? em(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
    Cs = (e, t) => {
        for (var n in t || (t = {})) tm.call(t, n) && _s(e, n, t[n]);
        if (bs) for (var n of bs(t)) nm.call(t, n) && _s(e, n, t[n]);
        return e
    };
const rm = te({
    name: "Avatar",
    components: {ResizeObserver: zn, IconImageClose: Qp, IconLoading: jt},
    props: {
        shape: {type: String, default: "circle"},
        imageUrl: String,
        size: Number,
        autoFixFontSize: {type: Boolean, default: !0},
        triggerType: {type: String, default: "button"},
        triggerIconStyle: {type: Object}
    },
    emits: {click: e => !0, error: () => !0, load: () => !0},
    setup(e, {slots: t, emit: n, attrs: r}) {
        const {shape: o, size: i, autoFixFontSize: a, triggerType: s, triggerIconStyle: l} = Be(e), u = re("avatar"),
            c = nt(Tu, void 0), f = U(), p = U(), _ = C(() => {
                var k;
                return (k = c == null ? void 0 : c.shape) != null ? k : o.value
            }), S = C(() => {
                var k;
                return (k = c == null ? void 0 : c.size) != null ? k : i.value
            }), w = C(() => {
                var k;
                return (k = c == null ? void 0 : c.autoFixFontSize) != null ? k : a.value
            }), L = U(!1), g = U(!1), $ = U(!0), E = U(!1),
            h = c ? Lu({itemRef: f, selector: `.${u}`}).computedIndex : U(-1), m = C(() => {
                var k;
                const P = me(S.value) ? {width: `${S.value}px`, height: `${S.value}px`, fontSize: `${S.value / 2}px`} : {};
                return c && (P.zIndex = c.zIndexAscend ? h.value + 1 : c.total - h.value, P.marginLeft = h.value !== 0 ? `-${((k = S.value) != null ? k : 40) / 4}px` : "0"), P
            }), b = om({triggerIconStyle: l == null ? void 0 : l.value, inlineStyle: r.style, triggerType: s.value}),
            v = () => {
                !L.value && !e.imageUrl && Xe(() => {
                    var k;
                    if (!p.value || !f.value) return;
                    const P = p.value.clientWidth, F = (k = S.value) != null ? k : f.value.offsetWidth, x = F / (P + 8);
                    F && x < 1 && (p.value.style.transform = `scale(${x}) translateX(-50%)`), $.value = !0
                })
            };
        We(() => {
            var k;
            (k = p.value) != null && k.firstElementChild && ["IMG", "PICTURE"].includes(p.value.firstElementChild.tagName) && (L.value = !0), w.value && v()
        }), Pe(i, () => {
            w.value && v()
        });
        const N = C(() => [u, `${u}-${_.value}`]), T = C(() => L.value || e.imageUrl ? `${u}-image` : `${u}-text`);
        return {
            prefixCls: u,
            itemRef: f,
            cls: N,
            outerStyle: m,
            wrapperRef: p,
            wrapperCls: T,
            computedTriggerIconStyle: b,
            isImage: L,
            shouldLoad: $,
            isLoaded: E,
            hasError: g,
            onClick: k => {
                n("click", k)
            },
            handleResize: () => {
                w.value && v()
            },
            handleImgLoad: () => {
                E.value = !0, n("load")
            },
            handleImgError: () => {
                g.value = !0, n("error")
            }
        }
    }
}), om = ({triggerType: e, inlineStyle: t = {}, triggerIconStyle: n = {}}) => {
    let r = {};
    return e === "button" && (!n || n && !n.color) && t && t.backgroundColor && (r = {color: t.backgroundColor}), Cs(Cs({}, n), r)
}, im = ["src"];

function am(e, t, n, r, o, i) {
    const a = ie("IconImageClose"), s = ie("IconLoading"), l = ie("resize-observer");
    return R(), J("div", {
        ref: "itemRef",
        style: Oe(e.outerStyle),
        class: G([e.cls, {[`${e.prefixCls}-with-trigger-icon`]: !!e.$slots["trigger-icon"]}]),
        onClick: t[2] || (t[2] = (...u) => e.onClick && e.onClick(...u))
    }, [V(l, {onResize: e.handleResize}, {
        default: Se(() => [de("span", {
            ref: "wrapperRef",
            class: G(e.wrapperCls)
        }, [e.imageUrl ? (R(), J(ot, {key: 0}, [e.hasError ? ae(e.$slots, "error", {key: 0}, () => [de("div", {class: G(`${e.prefixCls}-image-icon`)}, [V(a)], 2)]) : le("v-if", !0), !(e.hasError || !e.shouldLoad) && !e.isLoaded ? ae(e.$slots, "default", {key: 1}, () => [de("div", {class: G(`${e.prefixCls}-image-icon`)}, [V(s)], 2)]) : le("v-if", !0), e.hasError || !e.shouldLoad ? le("v-if", !0) : (R(), J("img", {
            key: 2,
            src: e.imageUrl,
            style: Oe({width: e.size + "px", height: e.size + "px"}),
            alt: "avatar",
            onLoad: t[0] || (t[0] = (...u) => e.handleImgLoad && e.handleImgLoad(...u)),
            onError: t[1] || (t[1] = (...u) => e.handleImgError && e.handleImgError(...u))
        }, null, 44, im))], 64)) : ae(e.$slots, "default", {key: 1})], 2)]), _: 3
    }, 8, ["onResize"]), e.$slots["trigger-icon"] ? (R(), J("div", {
        key: 0,
        class: G(`${e.prefixCls}-trigger-icon-${e.triggerType}`),
        style: Oe(e.computedTriggerIconStyle)
    }, [ae(e.$slots, "trigger-icon")], 6)) : le("v-if", !0)], 6)
}

var dr = he(rm, [["render", am]]);
const sm = te({
    name: "Popover",
    components: {Trigger: kr},
    props: {
        popupVisible: {type: Boolean, default: void 0},
        defaultPopupVisible: {type: Boolean, default: !1},
        title: String,
        content: String,
        trigger: {type: [String, Array], default: "hover"},
        position: {type: String, default: "top"},
        contentClass: {type: [String, Array, Object]},
        contentStyle: {type: Object},
        arrowClass: {type: [String, Array, Object]},
        arrowStyle: {type: Object},
        popupContainer: {type: [String, Object]}
    },
    emits: {"update:popupVisible": e => !0, popupVisibleChange: e => !0},
    setup(e, {emit: t}) {
        const n = re("popover"), r = U(e.defaultPopupVisible), o = C(() => {
            var l;
            return (l = e.popupVisible) != null ? l : r.value
        }), i = l => {
            r.value = l, t("update:popupVisible", l), t("popupVisibleChange", l)
        }, a = C(() => [`${n}-popup-content`, e.contentClass]), s = C(() => [`${n}-popup-arrow`, e.arrowClass]);
        return {prefixCls: n, computedPopupVisible: o, contentCls: a, arrowCls: s, handlePopupVisibleChange: i}
    }
});

function lm(e, t, n, r, o, i) {
    const a = ie("trigger");
    return R(), fe(a, {
        class: G(e.prefixCls),
        trigger: e.trigger,
        position: e.position,
        "popup-visible": e.computedPopupVisible,
        "popup-offset": 10,
        "content-class": e.contentCls,
        "content-style": e.contentStyle,
        "arrow-class": e.arrowCls,
        "arrow-style": e.arrowStyle,
        "show-arrow": "",
        "popup-container": e.popupContainer,
        "animation-name": "zoom-in-fade-out",
        "auto-fit-transform-origin": "",
        onPopupVisibleChange: e.handlePopupVisibleChange
    }, {
        content: Se(() => [de("div", {class: G(`${e.prefixCls}-title`)}, [ae(e.$slots, "title", {}, () => [Qe(Ue(e.title), 1)])], 2), de("div", {class: G(`${e.prefixCls}-content`)}, [ae(e.$slots, "content", {}, () => [Qe(Ue(e.content), 1)])], 2)]),
        default: Se(() => [ae(e.$slots, "default")]),
        _: 3
    }, 8, ["class", "trigger", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"])
}

var Po = he(sm, [["render", lm]]);
const um = Object.assign(Po, {
        install: (e, t) => {
            Ve(e, t);
            const n = Fe(t);
            e.component(n + Po.name, Po)
        }
    }), Io = te({
        name: "AvatarGroup",
        props: {
            shape: {type: String, default: "circle"},
            size: Number,
            autoFixFontSize: {type: Boolean, default: !0},
            maxCount: {type: Number, default: 0},
            zIndexAscend: {type: Boolean, default: !1},
            maxStyle: {type: Object},
            maxPopoverTriggerProps: {type: Object}
        },
        setup(e, {slots: t}) {
            const {shape: n, size: r, autoFixFontSize: o, zIndexAscend: i} = Be(e), a = re("avatar-group"), s = U(0);
            return Lt(Tu, xe({shape: n, size: r, autoFixFontSize: o, zIndexAscend: i, total: s})), () => {
                var l, u;
                const c = jn((u = (l = t.default) == null ? void 0 : l.call(t)) != null ? u : []),
                    f = e.maxCount > 0 ? c.slice(0, e.maxCount) : c, p = e.maxCount > 0 ? c.slice(e.maxCount) : [];
                return s.value !== f.length && (s.value = f.length), V("div", {class: a}, [f, p.length > 0 && V(um, e.maxPopoverTriggerProps, {
                    default: () => [V(dr, {
                        class: `${a}-max-count-avatar`,
                        style: e.maxStyle
                    }, {default: () => [Qe("+"), p.length]})], content: () => V("div", null, [p])
                })])
            }
        }
    }), FS = Object.assign(dr, {
        Group: Io, install: (e, t) => {
            Ve(e, t);
            const n = Fe(t);
            e.component(n + dr.name, dr), e.component(n + Io.name, Io)
        }
    }), cm = te({
        name: "IconDown",
        props: {
            size: {type: [Number, String]},
            strokeWidth: {type: Number, default: 4},
            strokeLinecap: {type: String, default: "butt", validator: e => ["butt", "round", "square"].includes(e)},
            strokeLinejoin: {
                type: String,
                default: "miter",
                validator: e => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
            },
            rotate: Number,
            spin: Boolean
        },
        emits: {click: e => !0},
        setup(e, {emit: t}) {
            const n = re("icon"), r = C(() => [n, `${n}-down`, {[`${n}-spin`]: e.spin}]), o = C(() => {
                const a = {};
                return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a
            });
            return {
                cls: r, innerStyle: o, onClick: a => {
                    t("click", a)
                }
            }
        }
    }), fm = ["stroke-width", "stroke-linecap", "stroke-linejoin"],
    dm = de("path", {d: "M39.6 17.443 24.043 33 8.487 17.443"}, null, -1), hm = [dm];

function pm(e, t, n, r, o, i) {
    return R(), J("svg", {
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "currentColor",
        class: G(e.cls),
        style: Oe(e.innerStyle),
        "stroke-width": e.strokeWidth,
        "stroke-linecap": e.strokeLinecap,
        "stroke-linejoin": e.strokeLinejoin,
        onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
    }, hm, 14, fm)
}

var Mo = he(cm, [["render", pm]]);
const Au = Object.assign(Mo, {
        install: (e, t) => {
            var n;
            const r = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
            e.component(r + Mo.name, Mo)
        }
    }), mm = ({popupVisible: e, defaultPopupVisible: t, emit: n}) => {
        var r;
        const o = U((r = t == null ? void 0 : t.value) != null ? r : !1), i = C(() => {
            var s;
            return (s = e == null ? void 0 : e.value) != null ? s : o.value
        }), a = s => {
            s !== i.value && (o.value = s, n("update:popupVisible", s), n("popupVisibleChange", s))
        };
        return Pe(i, s => {
            o.value !== s && (o.value = s)
        }), {computedPopupVisible: i, handlePopupVisibleChange: a}
    }, vm = te({
        name: "IconRight",
        props: {
            size: {type: [Number, String]},
            strokeWidth: {type: Number, default: 4},
            strokeLinecap: {type: String, default: "butt", validator: e => ["butt", "round", "square"].includes(e)},
            strokeLinejoin: {
                type: String,
                default: "miter",
                validator: e => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
            },
            rotate: Number,
            spin: Boolean
        },
        emits: {click: e => !0},
        setup(e, {emit: t}) {
            const n = re("icon"), r = C(() => [n, `${n}-right`, {[`${n}-spin`]: e.spin}]), o = C(() => {
                const a = {};
                return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a
            });
            return {
                cls: r, innerStyle: o, onClick: a => {
                    t("click", a)
                }
            }
        }
    }), gm = ["stroke-width", "stroke-linecap", "stroke-linejoin"],
    ym = de("path", {d: "m16 39.513 15.556-15.557L16 8.4"}, null, -1), bm = [ym];

function _m(e, t, n, r, o, i) {
    return R(), J("svg", {
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "currentColor",
        class: G(e.cls),
        style: Oe(e.innerStyle),
        "stroke-width": e.strokeWidth,
        "stroke-linecap": e.strokeLinecap,
        "stroke-linejoin": e.strokeLinejoin,
        onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
    }, bm, 14, gm)
}

var Ro = he(vm, [["render", _m]]);
const VS = Object.assign(Ro, {
    install: (e, t) => {
        var n;
        const r = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
        e.component(r + Ro.name, Ro)
    }
});
var Nu = {exports: {}};
(function (e, t) {
    (function (n, r) {
        e.exports = r()
    })(Ti, function () {
        var n = 1e3, r = 6e4, o = 36e5, i = "millisecond", a = "second", s = "minute", l = "hour", u = "day",
            c = "week", f = "month", p = "quarter", _ = "year", S = "date", w = "Invalid Date",
            L = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
            g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, $ = {
                name: "en",
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                ordinal: function (W) {
                    var k = ["th", "st", "nd", "rd"], P = W % 100;
                    return "[" + W + (k[(P - 20) % 10] || k[P] || k[0]) + "]"
                }
            }, E = function (W, k, P) {
                var F = String(W);
                return !F || F.length >= k ? W : "" + Array(k + 1 - F.length).join(P) + W
            }, h = {
                s: E, z: function (W) {
                    var k = -W.utcOffset(), P = Math.abs(k), F = Math.floor(P / 60), x = P % 60;
                    return (k <= 0 ? "+" : "-") + E(F, 2, "0") + ":" + E(x, 2, "0")
                }, m: function W(k, P) {
                    if (k.date() < P.date()) return -W(P, k);
                    var F = 12 * (P.year() - k.year()) + (P.month() - k.month()), x = k.clone().add(F, f), K = P - x < 0,
                        B = k.clone().add(F + (K ? -1 : 1), f);
                    return +(-(F + (P - x) / (K ? x - B : B - x)) || 0)
                }, a: function (W) {
                    return W < 0 ? Math.ceil(W) || 0 : Math.floor(W)
                }, p: function (W) {
                    return {
                        M: f,
                        y: _,
                        w: c,
                        d: u,
                        D: S,
                        h: l,
                        m: s,
                        s: a,
                        ms: i,
                        Q: p
                    }[W] || String(W || "").toLowerCase().replace(/s$/, "")
                }, u: function (W) {
                    return W === void 0
                }
            }, m = "en", b = {};
        b[m] = $;
        var v = function (W) {
            return W instanceof j
        }, N = function W(k, P, F) {
            var x;
            if (!k) return m;
            if (typeof k == "string") {
                var K = k.toLowerCase();
                b[K] && (x = K), P && (b[K] = P, x = K);
                var B = k.split("-");
                if (!x && B.length > 1) return W(B[0])
            } else {
                var I = k.name;
                b[I] = k, x = I
            }
            return !F && x && (m = x), x || !F && m
        }, T = function (W, k) {
            if (v(W)) return W.clone();
            var P = typeof k == "object" ? k : {};
            return P.date = W, P.args = arguments, new j(P)
        }, A = h;
        A.l = N, A.i = v, A.w = function (W, k) {
            return T(W, {locale: k.$L, utc: k.$u, x: k.$x, $offset: k.$offset})
        };
        var j = function () {
            function W(P) {
                this.$L = N(P.locale, null, !0), this.parse(P)
            }

            var k = W.prototype;
            return k.parse = function (P) {
                this.$d = function (F) {
                    var x = F.date, K = F.utc;
                    if (x === null) return new Date(NaN);
                    if (A.u(x)) return new Date;
                    if (x instanceof Date) return new Date(x);
                    if (typeof x == "string" && !/Z$/i.test(x)) {
                        var B = x.match(L);
                        if (B) {
                            var I = B[2] - 1 || 0, Y = (B[7] || "0").substring(0, 3);
                            return K ? new Date(Date.UTC(B[1], I, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, Y)) : new Date(B[1], I, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, Y)
                        }
                    }
                    return new Date(x)
                }(P), this.$x = P.x || {}, this.init()
            }, k.init = function () {
                var P = this.$d;
                this.$y = P.getFullYear(), this.$M = P.getMonth(), this.$D = P.getDate(), this.$W = P.getDay(), this.$H = P.getHours(), this.$m = P.getMinutes(), this.$s = P.getSeconds(), this.$ms = P.getMilliseconds()
            }, k.$utils = function () {
                return A
            }, k.isValid = function () {
                return this.$d.toString() !== w
            }, k.isSame = function (P, F) {
                var x = T(P);
                return this.startOf(F) <= x && x <= this.endOf(F)
            }, k.isAfter = function (P, F) {
                return T(P) < this.startOf(F)
            }, k.isBefore = function (P, F) {
                return this.endOf(F) < T(P)
            }, k.$g = function (P, F, x) {
                return A.u(P) ? this[F] : this.set(x, P)
            }, k.unix = function () {
                return Math.floor(this.valueOf() / 1e3)
            }, k.valueOf = function () {
                return this.$d.getTime()
            }, k.startOf = function (P, F) {
                var x = this, K = !!A.u(F) || F, B = A.p(P), I = function (we, $e) {
                    var Me = A.w(x.$u ? Date.UTC(x.$y, $e, we) : new Date(x.$y, $e, we), x);
                    return K ? Me : Me.endOf(u)
                }, Y = function (we, $e) {
                    return A.w(x.toDate()[we].apply(x.toDate("s"), (K ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice($e)), x)
                }, Q = this.$W, ve = this.$M, se = this.$D, ge = "set" + (this.$u ? "UTC" : "");
                switch (B) {
                    case _:
                        return K ? I(1, 0) : I(31, 11);
                    case f:
                        return K ? I(1, ve) : I(0, ve + 1);
                    case c:
                        var Le = this.$locale().weekStart || 0, Ne = (Q < Le ? Q + 7 : Q) - Le;
                        return I(K ? se - Ne : se + (6 - Ne), ve);
                    case u:
                    case S:
                        return Y(ge + "Hours", 0);
                    case l:
                        return Y(ge + "Minutes", 1);
                    case s:
                        return Y(ge + "Seconds", 2);
                    case a:
                        return Y(ge + "Milliseconds", 3);
                    default:
                        return this.clone()
                }
            }, k.endOf = function (P) {
                return this.startOf(P, !1)
            }, k.$set = function (P, F) {
                var x, K = A.p(P), B = "set" + (this.$u ? "UTC" : ""),
                    I = (x = {}, x[u] = B + "Date", x[S] = B + "Date", x[f] = B + "Month", x[_] = B + "FullYear", x[l] = B + "Hours", x[s] = B + "Minutes", x[a] = B + "Seconds", x[i] = B + "Milliseconds", x)[K],
                    Y = K === u ? this.$D + (F - this.$W) : F;
                if (K === f || K === _) {
                    var Q = this.clone().set(S, 1);
                    Q.$d[I](Y), Q.init(), this.$d = Q.set(S, Math.min(this.$D, Q.daysInMonth())).$d
                } else I && this.$d[I](Y);
                return this.init(), this
            }, k.set = function (P, F) {
                return this.clone().$set(P, F)
            }, k.get = function (P) {
                return this[A.p(P)]()
            }, k.add = function (P, F) {
                var x, K = this;
                P = Number(P);
                var B = A.p(F), I = function (ve) {
                    var se = T(K);
                    return A.w(se.date(se.date() + Math.round(ve * P)), K)
                };
                if (B === f) return this.set(f, this.$M + P);
                if (B === _) return this.set(_, this.$y + P);
                if (B === u) return I(1);
                if (B === c) return I(7);
                var Y = (x = {}, x[s] = r, x[l] = o, x[a] = n, x)[B] || 1, Q = this.$d.getTime() + P * Y;
                return A.w(Q, this)
            }, k.subtract = function (P, F) {
                return this.add(-1 * P, F)
            }, k.format = function (P) {
                var F = this, x = this.$locale();
                if (!this.isValid()) return x.invalidDate || w;
                var K = P || "YYYY-MM-DDTHH:mm:ssZ", B = A.z(this), I = this.$H, Y = this.$m, Q = this.$M,
                    ve = x.weekdays, se = x.months, ge = x.meridiem, Le = function ($e, Me, ze, oe) {
                        return $e && ($e[Me] || $e(F, K)) || ze[Me].slice(0, oe)
                    }, Ne = function ($e) {
                        return A.s(I % 12 || 12, $e, "0")
                    }, we = ge || function ($e, Me, ze) {
                        var oe = $e < 12 ? "AM" : "PM";
                        return ze ? oe.toLowerCase() : oe
                    };
                return K.replace(g, function ($e, Me) {
                    return Me || function (ze) {
                        switch (ze) {
                            case"YY":
                                return String(F.$y).slice(-2);
                            case"YYYY":
                                return A.s(F.$y, 4, "0");
                            case"M":
                                return Q + 1;
                            case"MM":
                                return A.s(Q + 1, 2, "0");
                            case"MMM":
                                return Le(x.monthsShort, Q, se, 3);
                            case"MMMM":
                                return Le(se, Q);
                            case"D":
                                return F.$D;
                            case"DD":
                                return A.s(F.$D, 2, "0");
                            case"d":
                                return String(F.$W);
                            case"dd":
                                return Le(x.weekdaysMin, F.$W, ve, 2);
                            case"ddd":
                                return Le(x.weekdaysShort, F.$W, ve, 3);
                            case"dddd":
                                return ve[F.$W];
                            case"H":
                                return String(I);
                            case"HH":
                                return A.s(I, 2, "0");
                            case"h":
                                return Ne(1);
                            case"hh":
                                return Ne(2);
                            case"a":
                                return we(I, Y, !0);
                            case"A":
                                return we(I, Y, !1);
                            case"m":
                                return String(Y);
                            case"mm":
                                return A.s(Y, 2, "0");
                            case"s":
                                return String(F.$s);
                            case"ss":
                                return A.s(F.$s, 2, "0");
                            case"SSS":
                                return A.s(F.$ms, 3, "0");
                            case"Z":
                                return B
                        }
                        return null
                    }($e) || B.replace(":", "")
                })
            }, k.utcOffset = function () {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
            }, k.diff = function (P, F, x) {
                var K, B = this, I = A.p(F), Y = T(P), Q = (Y.utcOffset() - this.utcOffset()) * r, ve = this - Y,
                    se = function () {
                        return A.m(B, Y)
                    };
                switch (I) {
                    case _:
                        K = se() / 12;
                        break;
                    case f:
                        K = se();
                        break;
                    case p:
                        K = se() / 3;
                        break;
                    case c:
                        K = (ve - Q) / 6048e5;
                        break;
                    case u:
                        K = (ve - Q) / 864e5;
                        break;
                    case l:
                        K = ve / o;
                        break;
                    case s:
                        K = ve / r;
                        break;
                    case a:
                        K = ve / n;
                        break;
                    default:
                        K = ve
                }
                return x ? K : A.a(K)
            }, k.daysInMonth = function () {
                return this.endOf(f).$D
            }, k.$locale = function () {
                return b[this.$L]
            }, k.locale = function (P, F) {
                if (!P) return this.$L;
                var x = this.clone(), K = N(P, F, !0);
                return K && (x.$L = K), x
            }, k.clone = function () {
                return A.w(this.$d, this)
            }, k.toDate = function () {
                return new Date(this.valueOf())
            }, k.toJSON = function () {
                return this.isValid() ? this.toISOString() : null
            }, k.toISOString = function () {
                return this.$d.toISOString()
            }, k.toString = function () {
                return this.$d.toUTCString()
            }, W
        }(), Z = j.prototype;
        return T.prototype = Z, [["$ms", i], ["$s", a], ["$m", s], ["$H", l], ["$W", u], ["$M", f], ["$y", _], ["$D", S]].forEach(function (W) {
            Z[W[1]] = function (k) {
                return this.$g(k, W[0], W[1])
            }
        }), T.extend = function (W, k) {
            return W.$i || (W(k, j, T), W.$i = !0), T
        }, T.locale = N, T.isDayjs = v, T.unix = function (W) {
            return T(1e3 * W)
        }, T.en = b[m], T.Ls = b, T.p = {}, T
    })
})(Nu);
var Cm = Nu.exports;
const xS = ru(Cm), Sm = ({
                             defaultValue: e,
                             modelValue: t,
                             emit: n,
                             eventName: r = "input",
                             updateEventName: o = "update:modelValue",
                             eventHandlers: i
                         }) => {
    var a;
    const s = U(), l = U((a = e == null ? void 0 : e.value) != null ? a : ""), u = U(!1), c = U(!1), f = U("");
    let p;
    const _ = C(() => {
        var b;
        return (b = t == null ? void 0 : t.value) != null ? b : l.value
    }), S = (b, v) => {
        l.value = b, n(o, b), n(r, b, v)
    }, w = b => {
        const {value: v} = b.target;
        c.value || (S(v, b), Xe(() => {
            s.value && _.value !== s.value.value && (s.value.value = _.value)
        }))
    }, L = b => {
        r === "input" && _.value !== p && (p = _.value, n("change", _.value, b))
    }, g = b => {
        var v;
        const {value: N} = b.target;
        b.type === "compositionend" ? (c.value = !1, f.value = "", S(N, b), Xe(() => {
            s.value && _.value !== s.value.value && (s.value.value = _.value)
        })) : (c.value = !0, f.value = _.value + ((v = b.data) != null ? v : ""))
    }, $ = b => {
        var v, N;
        u.value = !0, p = _.value, n("focus", b), (N = (v = i == null ? void 0 : i.value) == null ? void 0 : v.onFocus) == null || N.call(v, b)
    }, E = b => {
        var v, N;
        u.value = !1, n("blur", b), (N = (v = i == null ? void 0 : i.value) == null ? void 0 : v.onBlur) == null || N.call(v, b), L(b)
    }, h = b => {
        const v = b.key || b.code;
        !c.value && v === pa.key && (n("pressEnter", b), L(b))
    }, m = b => {
        s.value && b.target !== s.value && (b.preventDefault(), s.value.focus())
    };
    return Pe(_, b => {
        s.value && b !== s.value.value && (s.value.value = b)
    }), {
        inputRef: s,
        _value: l,
        _focused: u,
        isComposition: c,
        compositionValue: f,
        computedValue: _,
        handleInput: w,
        handleComposition: g,
        handleFocus: $,
        handleBlur: E,
        handleKeyDown: h,
        handleMousedown: m
    }
};
var wm = te({
        name: "InputLabel",
        inheritAttrs: !1,
        props: {
            modelValue: Object,
            inputValue: {type: String, default: ""},
            enabledInput: Boolean,
            formatLabel: Function,
            placeholder: String,
            retainInputValue: Boolean,
            disabled: Boolean,
            baseCls: String,
            size: String,
            error: Boolean,
            focused: Boolean,
            uninjectFormItemContext: Boolean
        },
        emits: ["update:inputValue", "inputValueChange", "focus", "blur"],
        setup(e, {attrs: t, emit: n, slots: r}) {
            var o;
            const {size: i, disabled: a, error: s, inputValue: l, uninjectFormItemContext: u} = Be(e),
                c = (o = e.baseCls) != null ? o : re("input-label"), {
                    mergedSize: f,
                    mergedDisabled: p,
                    mergedError: _,
                    eventHandlers: S
                } = _t({
                    size: i,
                    disabled: a,
                    error: s,
                    uninject: u == null ? void 0 : u.value
                }), {mergedSize: w} = Ft(f), {
                    inputRef: L,
                    _focused: g,
                    computedValue: $,
                    handleInput: E,
                    handleComposition: h,
                    handleFocus: m,
                    handleBlur: b,
                    handleMousedown: v
                } = Sm({
                    modelValue: l,
                    emit: n,
                    eventName: "inputValueChange",
                    updateEventName: "update:inputValue",
                    eventHandlers: S
                }), N = C(() => {
                    var F;
                    return (F = e.focused) != null ? F : g.value
                }), T = C(() => e.enabledInput && g.value || !e.modelValue),
                A = C(() => e.enabledInput && e.modelValue ? e.modelValue.label : e.placeholder), j = () => {
                    var F, x, K, B, I;
                    return e.modelValue ? (I = (K = (F = r.default) == null ? void 0 : F.call(r, {data: e.modelValue})) != null ? K : (x = e.formatLabel) == null ? void 0 : x.call(e, e.modelValue)) != null ? I : (B = e.modelValue) == null ? void 0 : B.label : null
                }, Z = C(() => [c, `${c}-size-${w.value}`, {
                    [`${c}-search`]: e.enabledInput,
                    [`${c}-focus`]: N.value,
                    [`${c}-disabled`]: p.value,
                    [`${c}-error`]: _.value
                }]), W = C(() => kn(t, Gt)), k = C(() => Zn(t, Gt));
            return {
                inputRef: L,
                render: () => V("span", Re(W.value, {
                    class: Z.value,
                    onMousedown: v
                }), [r.prefix && V("span", {class: `${c}-prefix`}, [r.prefix()]), V("input", Re(k.value, {
                    ref: L,
                    class: [`${c}-input`, {[`${c}-input-hidden`]: !T.value}],
                    value: $.value,
                    readonly: !e.enabledInput,
                    placeholder: A.value,
                    disabled: p.value,
                    onInput: E,
                    onFocus: m,
                    onBlur: b,
                    onCompositionstart: h,
                    onCompositionupdate: h,
                    onCompositionend: h
                }), null), V("span", {class: [`${c}-value`, {[`${c}-value-hidden`]: T.value}]}, [j()]), r.suffix && V("span", {class: `${c}-suffix`}, [r.suffix()])])
            }
        },
        methods: {
            focus() {
                var e;
                (e = this.inputRef) == null || e.focus()
            }, blur() {
                var e;
                (e = this.inputRef) == null || e.blur()
            }
        },
        render() {
            return this.render()
        }
    }), Em = Object.defineProperty, Ss = Object.getOwnPropertySymbols, $m = Object.prototype.hasOwnProperty,
    km = Object.prototype.propertyIsEnumerable,
    ws = (e, t, n) => t in e ? Em(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
    Om = (e, t) => {
        for (var n in t || (t = {})) $m.call(t, n) && ws(e, n, t[n]);
        if (Ss) for (var n of Ss(t)) km.call(t, n) && ws(e, n, t[n]);
        return e
    };
const Lm = (e, t) => {
        const n = [];
        for (const r of e) if (De(r)) n.push({
            raw: r,
            value: r[t.value],
            label: r[t.label],
            closable: r[t.closable],
            tagProps: r[t.tagProps]
        }); else if (e || me(e)) {
            const o = {value: r, label: String(r), closable: !0};
            n.push(Om({raw: o}, o))
        }
        return n
    },
    Es = ["red", "orangered", "orange", "gold", "lime", "green", "cyan", "blue", "arcoblue", "purple", "pinkpurple", "magenta", "gray"],
    Tm = te({
        name: "Tag",
        components: {IconHover: ct, IconClose: Tt, IconLoading: jt},
        props: {
            color: {type: String},
            size: {type: String},
            bordered: {type: Boolean, default: !1},
            visible: {type: Boolean, default: void 0},
            defaultVisible: {type: Boolean, default: !0},
            loading: {type: Boolean, default: !1},
            closable: {type: Boolean, default: !1},
            checkable: {type: Boolean, default: !1},
            checked: {type: Boolean, default: void 0},
            defaultChecked: {type: Boolean, default: !0}
        },
        emits: {"update:visible": e => !0, "update:checked": e => !0, close: e => !0, check: (e, t) => !0},
        setup(e, {emit: t}) {
            const {size: n} = Be(e), r = re("tag"), o = C(() => e.color && Es.includes(e.color)),
                i = C(() => e.color && !Es.includes(e.color)), a = U(e.defaultVisible), s = U(e.defaultChecked),
                l = C(() => {
                    var L;
                    return (L = e.visible) != null ? L : a.value
                }), u = C(() => {
                    var L;
                    return e.checkable ? (L = e.checked) != null ? L : s.value : !0
                }), {mergedSize: c} = Ft(n), f = C(() => c.value === "mini" ? "small" : c.value), p = L => {
                    a.value = !1, t("update:visible", !1), t("close", L)
                }, _ = L => {
                    if (e.checkable) {
                        const g = !u.value;
                        s.value = g, t("update:checked", g), t("check", g, L)
                    }
                }, S = C(() => [r, `${r}-size-${f.value}`, {
                    [`${r}-loading`]: e.loading,
                    [`${r}-hide`]: !l.value,
                    [`${r}-${e.color}`]: o.value,
                    [`${r}-bordered`]: e.bordered,
                    [`${r}-checkable`]: e.checkable,
                    [`${r}-checked`]: u.value,
                    [`${r}-custom-color`]: i.value
                }]), w = C(() => {
                    if (i.value) return {backgroundColor: e.color}
                });
            return {
                prefixCls: r,
                cls: S,
                style: w,
                computedVisible: l,
                computedChecked: u,
                handleClick: _,
                handleClose: p
            }
        }
    });

function Am(e, t, n, r, o, i) {
    const a = ie("icon-close"), s = ie("icon-hover"), l = ie("icon-loading");
    return e.computedVisible ? (R(), J("span", {
        key: 0,
        class: G(e.cls),
        style: Oe(e.style),
        onClick: t[0] || (t[0] = (...u) => e.handleClick && e.handleClick(...u))
    }, [e.$slots.icon ? (R(), J("span", {
        key: 0,
        class: G(`${e.prefixCls}-icon`)
    }, [ae(e.$slots, "icon")], 2)) : le("v-if", !0), ae(e.$slots, "default"), e.closable ? (R(), fe(s, {
        key: 1,
        role: "button",
        "aria-label": "Close",
        prefix: e.prefixCls,
        class: G(`${e.prefixCls}-close-btn`),
        onClick: Wt(e.handleClose, ["stop"])
    }, {
        default: Se(() => [ae(e.$slots, "close-icon", {}, () => [V(a)])]),
        _: 3
    }, 8, ["prefix", "class", "onClick"])) : le("v-if", !0), e.loading ? (R(), J("span", {
        key: 2,
        class: G(`${e.prefixCls}-loading-icon`)
    }, [V(l)], 2)) : le("v-if", !0)], 6)) : le("v-if", !0)
}

var Bo = he(Tm, [["render", Am]]);
const Nm = Object.assign(Bo, {
    install: (e, t) => {
        Ve(e, t);
        const n = Fe(t);
        e.component(n + Bo.name, Bo)
    }
});
var Pm = Object.defineProperty, $s = Object.getOwnPropertySymbols, Im = Object.prototype.hasOwnProperty,
    Mm = Object.prototype.propertyIsEnumerable,
    ks = (e, t, n) => t in e ? Pm(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
    rr = (e, t) => {
        for (var n in t || (t = {})) Im.call(t, n) && ks(e, n, t[n]);
        if ($s) for (var n of $s(t)) Mm.call(t, n) && ks(e, n, t[n]);
        return e
    };
const Rm = {value: "value", label: "label", closable: "closable", tagProps: "tagProps"};
var Do = te({
    name: "InputTag",
    inheritAttrs: !1,
    props: {
        modelValue: {type: Array},
        defaultValue: {type: Array, default: () => []},
        inputValue: String,
        defaultInputValue: {type: String, default: ""},
        placeholder: String,
        disabled: {type: Boolean, default: !1},
        error: {type: Boolean, default: !1},
        readonly: {type: Boolean, default: !1},
        allowClear: {type: Boolean, default: !1},
        size: {type: String},
        maxTagCount: {type: Number, default: 0},
        retainInputValue: {type: [Boolean, Object], default: !1},
        formatTag: {type: Function},
        uniqueValue: {type: Boolean, default: !1},
        fieldNames: {type: Object},
        baseCls: String,
        focused: Boolean,
        disabledInput: Boolean,
        uninjectFormItemContext: Boolean
    },
    emits: {
        "update:modelValue": e => !0,
        "update:inputValue": e => !0,
        change: (e, t) => !0,
        inputValueChange: (e, t) => !0,
        pressEnter: (e, t) => !0,
        remove: (e, t) => !0,
        clear: e => !0,
        focus: e => !0,
        blur: e => !0
    },
    setup(e, {emit: t, slots: n, attrs: r}) {
        const {size: o, disabled: i, error: a, uninjectFormItemContext: s, modelValue: l} = Be(e),
            u = e.baseCls || re("input-tag"), c = U(), f = U(), {
                mergedSize: p,
                mergedDisabled: _,
                mergedError: S,
                feedback: w,
                eventHandlers: L
            } = _t({size: o, disabled: i, error: a, uninject: s == null ? void 0 : s.value}), {mergedSize: g} = Ft(p),
            $ = C(() => rr(rr({}, Rm), e.fieldNames)), E = U(!1), h = U(e.defaultValue), m = U(e.defaultInputValue),
            b = U(!1), v = U(""), N = C(() => De(e.retainInputValue) ? rr({
                create: !1,
                blur: !1
            }, e.retainInputValue) : {create: e.retainInputValue, blur: e.retainInputValue}), T = xe({width: "12px"}),
            A = C(() => e.focused || E.value), j = (d, O) => {
                m.value = d, t("update:inputValue", d), t("inputValueChange", d, O)
            }, Z = d => {
                var O;
                const {value: q} = d.target;
                d.type === "compositionend" ? (b.value = !1, v.value = "", j(q, d), Xe(() => {
                    c.value && k.value !== c.value.value && (c.value.value = k.value)
                })) : (b.value = !0, v.value = k.value + ((O = d.data) != null ? O : ""))
            }, W = C(() => {
                var d;
                return (d = e.modelValue) != null ? d : h.value
            }), k = C(() => {
                var d;
                return (d = e.inputValue) != null ? d : m.value
            });
        Pe(l, d => {
            (ht(d) || Kn(d)) && (h.value = [])
        });
        const P = d => {
            c.value && d.target !== c.value && (d.preventDefault(), c.value.focus())
        }, F = d => {
            const {value: O} = d.target;
            b.value || (j(O, d), Xe(() => {
                c.value && k.value !== c.value.value && (c.value.value = k.value)
            }))
        }, x = C(() => Lm(W.value, $.value)), K = C(() => {
            if (e.maxTagCount > 0) {
                const d = x.value.length - e.maxTagCount;
                if (d > 0) {
                    const O = x.value.slice(0, e.maxTagCount),
                        q = {value: "__arco__more", label: `+${d}...`, closable: !1};
                    return O.push(rr({raw: q}, q)), O
                }
            }
            return x.value
        }), B = (d, O) => {
            var q, ne;
            h.value = d, t("update:modelValue", d), t("change", d, O), (ne = (q = L.value) == null ? void 0 : q.onChange) == null || ne.call(q, O)
        }, I = (d, O, q) => {
            var ne;
            const _e = (ne = W.value) == null ? void 0 : ne.filter((Ze, et) => et !== O);
            B(_e, q), t("remove", d, q)
        }, Y = d => {
            B([], d), t("clear", d)
        }, Q = C(() => !_.value && !e.readonly && e.allowClear && !!W.value.length), ve = d => {
            var O;
            if (k.value) {
                if (d.preventDefault(), e.uniqueValue && ((O = W.value) != null && O.includes(k.value))) {
                    t("pressEnter", k.value, d);
                    return
                }
                const q = W.value.concat(k.value);
                B(q, d), t("pressEnter", k.value, d), N.value.create || j("", d)
            }
        }, se = d => {
            var O, q;
            E.value = !0, t("focus", d), (q = (O = L.value) == null ? void 0 : O.onFocus) == null || q.call(O, d)
        }, ge = d => {
            var O, q;
            E.value = !1, !N.value.blur && k.value && j("", d), t("blur", d), (q = (O = L.value) == null ? void 0 : O.onBlur) == null || q.call(O, d)
        }, Le = () => {
            for (let d = x.value.length - 1; d >= 0; d--) if (x.value[d].closable) return d;
            return -1
        }, Ne = d => {
            const O = d.key || d.code;
            if (!b.value && k.value && O === pa.key && ve(d), !b.value && K.value.length > 0 && !k.value && O === Gd.key) {
                const q = Le();
                q >= 0 && I(x.value[q].value, q, d)
            }
        }, we = d => {
            d > 12 ? T.width = `${d}px` : T.width = "12px"
        };
        We(() => {
            f.value && we(f.value.offsetWidth)
        });
        const $e = () => {
            f.value && we(f.value.offsetWidth)
        };
        Pe(k, d => {
            c.value && !b.value && d !== c.value.value && (c.value.value = d)
        });
        const Me = C(() => [u, `${u}-size-${g.value}`, {
            [`${u}-disabled`]: _.value,
            [`${u}-disabled-input`]: e.disabledInput,
            [`${u}-error`]: S.value,
            [`${u}-focus`]: A.value,
            [`${u}-readonly`]: e.readonly,
            [`${u}-has-tag`]: K.value.length > 0,
            [`${u}-has-prefix`]: !!n.prefix,
            [`${u}-has-suffix`]: !!n.suffix || Q.value || w.value,
            [`${u}-has-placeholder`]: !W.value.length
        }]), ze = C(() => kn(r, Gt)), oe = C(() => Zn(r, Gt));
        return {
            inputRef: c, render: () => {
                var d;
                return V("span", Re({
                    class: Me.value,
                    onMousedown: P
                }, ze.value), [V(vu, {onResize: $e}, {
                    default: () => [V("span", {
                        ref: f,
                        class: `${u}-mirror`
                    }, [K.value.length > 0 ? v.value || k.value : v.value || k.value || e.placeholder])]
                }), n.prefix && V("span", {class: `${u}-prefix`}, [n.prefix()]), V(aa, {
                    tag: "span",
                    name: "input-tag-zoom",
                    class: `${u}-inner`
                }, {
                    default: () => [K.value.map((O, q) => V(Nm, Re({
                        key: `tag-${O.value}`,
                        class: `${u}-tag`,
                        closable: !_.value && !e.readonly && O.closable,
                        visible: !0
                    }, O.tagProps, {onClose: ne => I(O.value, q, ne)}), {
                        default: () => {
                            var ne, _e, Ze, et;
                            return [(et = (Ze = (ne = n.tag) == null ? void 0 : ne.call(n, {data: O.raw})) != null ? Ze : (_e = e.formatTag) == null ? void 0 : _e.call(e, O.raw)) != null ? et : O.label]
                        }
                    })), V("input", Re(oe.value, {
                        ref: c,
                        key: "input-tag-input",
                        class: `${u}-input`,
                        style: T,
                        placeholder: K.value.length === 0 ? e.placeholder : void 0,
                        disabled: _.value,
                        readonly: e.readonly || e.disabledInput,
                        onInput: F,
                        onKeydown: Ne,
                        onFocus: se,
                        onBlur: ge,
                        onCompositionstart: Z,
                        onCompositionupdate: Z,
                        onCompositionend: Z
                    }), null)]
                }), Q.value && V(ct, {
                    class: `${u}-clear-btn`,
                    onClick: Y,
                    onMousedown: O => O.stopPropagation()
                }, {default: () => [V(Tt, null, null)]}), (n.suffix || !!w.value) && V("span", {class: `${u}-suffix`}, [(d = n.suffix) == null ? void 0 : d.call(n), !!w.value && V(ha, {type: w.value}, null)])])
            }
        }
    },
    methods: {
        focus() {
            var e;
            (e = this.inputRef) == null || e.focus()
        }, blur() {
            var e;
            (e = this.inputRef) == null || e.blur()
        }
    },
    render() {
        return this.render()
    }
});
const Bm = Object.assign(Do, {
    install: (e, t) => {
        Ve(e, t);
        const n = Fe(t);
        e.component(n + Do.name, Do)
    }
});
var Os = te({
    name: "SelectView",
    props: {
        modelValue: {type: Array, required: !0},
        inputValue: String,
        placeholder: String,
        disabled: {type: Boolean, default: !1},
        error: {type: Boolean, default: !1},
        loading: {type: Boolean, default: !1},
        opened: {type: Boolean, default: !1},
        size: {type: String},
        bordered: {type: Boolean, default: !0},
        multiple: {type: Boolean, default: !1},
        allowClear: {type: Boolean, default: !1},
        allowCreate: {type: Boolean, default: !1},
        allowSearch: {type: Boolean, default: e => Ge(e.modelValue)},
        maxTagCount: {type: Number, default: 0},
        retainInputValue: {type: Boolean, default: !1}
    },
    emits: ["remove", "clear", "focus", "blur"],
    setup(e, {emit: t, slots: n}) {
        const {size: r, disabled: o, error: i} = Be(e), a = re("select-view"), {
                feedback: s,
                eventHandlers: l,
                mergedDisabled: u,
                mergedSize: c,
                mergedError: f
            } = _t({size: r, disabled: o, error: i}), {mergedSize: p} = Ft(c), {opened: _} = Be(e), S = U(), w = C(() => {
                var j;
                return (j = S.value) == null ? void 0 : j.inputRef
            }), L = C(() => e.modelValue.length === 0), g = C(() => e.allowSearch || e.allowCreate),
            $ = C(() => e.allowClear && !e.disabled && !L.value), E = j => {
                var Z, W;
                t("focus", j), (W = (Z = l.value) == null ? void 0 : Z.onFocus) == null || W.call(Z, j)
            }, h = j => {
                var Z, W;
                t("blur", j), (W = (Z = l.value) == null ? void 0 : Z.onBlur) == null || W.call(Z, j)
            }, m = j => {
                t("remove", j)
            }, b = j => {
                t("clear", j)
            }, v = () => {
                var j, Z, W, k;
                return e.loading ? (Z = (j = n["loading-icon"]) == null ? void 0 : j.call(n)) != null ? Z : V(jt, null, null) : e.allowSearch && e.opened ? (k = (W = n["search-icon"]) == null ? void 0 : W.call(n)) != null ? k : V(Ri, null, null) : n["arrow-icon"] ? n["arrow-icon"]() : V(Au, {class: `${a}-arrow-icon`}, null)
            }, N = () => V(ot, null, [$.value && V(ct, {
                class: `${a}-clear-btn`,
                onClick: b,
                onMousedown: j => j.stopPropagation()
            }, {default: () => [V(Tt, null, null)]}), V("span", {class: `${a}-icon`}, [v()]), !!s.value && V(ha, {type: s.value}, null)]);
        Pe(_, j => {
            !j && w.value && w.value.isSameNode(document.activeElement) && w.value.blur()
        });
        const T = C(() => [`${a}-${e.multiple ? "multiple" : "single"}`, {
            [`${a}-opened`]: e.opened,
            [`${a}-borderless`]: !e.bordered
        }]);
        return {
            inputRef: w,
            handleFocus: E,
            handleBlur: h,
            render: () => e.multiple ? V(Bm, {
                ref: S,
                baseCls: a,
                class: T.value,
                modelValue: e.modelValue,
                inputValue: e.inputValue,
                focused: e.opened,
                placeholder: e.placeholder,
                disabled: u.value,
                size: p.value,
                error: f.value,
                maxTagCount: e.maxTagCount,
                disabledInput: !e.allowSearch && !e.allowCreate,
                retainInputValue: !0,
                uninjectFormItemContext: !0,
                onRemove: m,
                onFocus: E,
                onBlur: h
            }, {prefix: n.prefix, suffix: N, tag: n.label}) : V(wm, {
                ref: S,
                baseCls: a,
                class: T.value,
                modelValue: e.modelValue[0],
                inputValue: e.inputValue,
                focused: e.opened,
                placeholder: e.placeholder,
                disabled: u.value,
                size: p.value,
                error: f.value,
                enabledInput: g.value,
                uninjectFormItemContext: !0,
                onFocus: E,
                onBlur: h
            }, {default: n.label, prefix: n.prefix, suffix: N})
        }
    },
    methods: {
        focus() {
            this.inputRef && this.inputRef.focus()
        }, blur() {
            this.inputRef && this.inputRef.blur()
        }
    },
    render() {
        return this.render()
    }
});
const Dm = te({
    name: "Optgroup", props: {label: {type: String}}, setup() {
        return {prefixCls: re("select-group")}
    }
});

function jm(e, t, n, r, o, i) {
    return R(), J(ot, null, [de("li", {class: G(`${e.prefixCls}-title`)}, [ae(e.$slots, "label", {}, () => [Qe(Ue(e.label), 1)])], 2), ae(e.$slots, "default")], 64)
}

var hr = he(Dm, [["render", jm]]);
const Fm = ({dataKeys: e, contentRef: t, fixedSize: n, estimatedSize: r, buffer: o}) => {
    const i = U(0), a = new Map, s = C(() => e.value.length), l = U(0), u = C(() => {
        const v = l.value + o.value * 3;
        return v > s.value ? s.value : v
    }), c = C(() => {
        const v = s.value - o.value * 3;
        return v < 0 ? 0 : v
    }), f = v => {
        v < 0 ? l.value = 0 : v > c.value ? l.value = c.value : l.value = v
    }, p = U(n.value), _ = C(() => r.value !== 30 ? r.value : i.value || r.value), S = (v, N) => {
        a.set(v, N)
    }, w = v => {
        var N;
        if (p.value) return _.value;
        const T = e.value[v];
        return (N = a.get(T)) != null ? N : _.value
    }, L = v => a.has(v);
    We(() => {
        const v = Array.from(a.values()).reduce((N, T) => N + T, 0);
        v > 0 && (i.value = v / a.size)
    });
    const g = v => p.value ? _.value * v : $(0, v), $ = (v, N) => {
        let T = 0;
        for (let A = v; A < N; A++) T += w(A);
        return T
    }, E = C(() => p.value ? _.value * l.value : $(0, l.value)), h = v => {
        const N = v >= E.value;
        let T = Math.abs(v - E.value);
        const A = N ? l.value : l.value - 1;
        let j = 0;
        for (; T > 0;) T -= w(A + j), N ? j++ : j--;
        return j
    }, m = v => {
        const N = h(v), T = l.value + N - o.value;
        return T < 0 ? 0 : T > c.value ? c.value : T
    }, b = C(() => p.value ? _.value * (s.value - u.value) : $(u.value, s.value));
    return {
        frontPadding: E,
        behindPadding: b,
        start: l,
        end: u,
        getStartByScroll: m,
        setItemSize: S,
        hasItemSize: L,
        setStart: f,
        getScrollOffset: g
    }
};
var Vm = te({
        name: "VirtualListItem",
        props: {hasItemSize: {type: Function, required: !0}, setItemSize: {type: Function, required: !0}},
        setup(e, {slots: t}) {
            var n;
            const r = (n = Yt()) == null ? void 0 : n.vnode.key, o = U(), i = () => {
                var a, s, l, u;
                const c = (s = (a = o.value) == null ? void 0 : a.$el) != null ? s : o.value,
                    f = (u = (l = c == null ? void 0 : c.getBoundingClientRect) == null ? void 0 : l.call(c).height) != null ? u : c == null ? void 0 : c.offsetHeight;
                f && e.setItemSize(r, f)
            };
            return We(() => i()), Dt(() => i()), () => {
                var a;
                const s = yn((a = t.default) == null ? void 0 : a.call(t));
                return s ? Rr(s, {ref: o}, !0) : null
            }
        }
    }), xm = Object.defineProperty, Ls = Object.getOwnPropertySymbols, zm = Object.prototype.hasOwnProperty,
    Um = Object.prototype.propertyIsEnumerable,
    Ts = (e, t, n) => t in e ? xm(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
    Wm = (e, t) => {
        for (var n in t || (t = {})) zm.call(t, n) && Ts(e, n, t[n]);
        if (Ls) for (var n of Ls(t)) Um.call(t, n) && Ts(e, n, t[n]);
        return e
    };
const Hm = te({
    name: "VirtualList",
    components: {VirtualListItem: Vm},
    props: {
        height: {type: [Number, String], default: 200},
        data: {type: Array, default: () => []},
        threshold: {type: Number, default: 0},
        itemKey: {type: String, default: "key"},
        fixedSize: {type: Boolean, default: !1},
        estimatedSize: {type: Number, default: 30},
        buffer: {type: Number, default: 10},
        component: {type: [String, Object], default: "div"},
        listAttrs: {type: Object},
        contentAttrs: {type: Object},
        paddingPosition: {type: String, default: "content"}
    },
    emits: {scroll: e => !0, reachBottom: e => !0},
    setup(e, {emit: t}) {
        const {data: n, itemKey: r, fixedSize: o, estimatedSize: i, buffer: a, height: s} = Be(e),
            l = re("virtual-list"), u = C(() => De(e.component) ? Wm({
                container: "div",
                list: "div",
                content: "div"
            }, e.component) : {container: e.component, list: "div", content: "div"}), c = U(), f = U(),
            p = C(() => ({height: me(s.value) ? `${s.value}px` : s.value, overflow: "auto"})),
            _ = C(() => n.value.map((A, j) => {
                var Z;
                return (Z = A[r.value]) != null ? Z : j
            })), {
                frontPadding: S,
                behindPadding: w,
                start: L,
                end: g,
                getStartByScroll: $,
                setItemSize: E,
                hasItemSize: h,
                setStart: m,
                getScrollOffset: b
            } = Fm({dataKeys: _, contentRef: f, fixedSize: o, estimatedSize: i, buffer: a}),
            v = C(() => e.threshold && n.value.length <= e.threshold ? n.value : n.value.slice(L.value, g.value));
        return {
            prefixCls: l,
            containerRef: c,
            contentRef: f,
            frontPadding: S,
            currentList: v,
            behindPadding: w,
            onScroll: A => {
                const {scrollTop: j, scrollHeight: Z, offsetHeight: W} = A.target, k = $(j);
                k !== L.value && m(k), t("scroll", A), Math.floor(Z - (j + W)) <= 0 && t("reachBottom", A)
            },
            setItemSize: E,
            hasItemSize: h,
            start: L,
            scrollTo: A => {
                var j, Z;
                if (c.value) if (me(A)) c.value.scrollTop = A; else {
                    const W = (Z = A.index) != null ? Z : _.value.indexOf((j = A.key) != null ? j : "");
                    m(W - a.value), c.value.scrollTop = b(W), Xe(() => {
                        if (c.value) {
                            const k = b(W);
                            k !== c.value.scrollTop && (c.value.scrollTop = k)
                        }
                    })
                }
            },
            style: p,
            mergedComponent: u
        }
    }
});

function qm(e, t, n, r, o, i) {
    const a = ie("VirtualListItem");
    return R(), fe(gn(e.mergedComponent.container), {
        ref: "containerRef",
        class: G(e.prefixCls),
        style: Oe(e.style),
        onScroll: e.onScroll
    }, {
        default: Se(() => [(R(), fe(gn(e.mergedComponent.list), Re(e.listAttrs, {
            style: e.paddingPosition === "list" ? {
                paddingTop: `${e.frontPadding}px`,
                paddingBottom: `${e.behindPadding}px`
            } : {}
        }), {
            default: Se(() => [(R(), fe(gn(e.mergedComponent.content), Re({ref: "contentRef"}, e.contentAttrs, {
                style: e.paddingPosition === "content" ? {
                    paddingTop: `${e.frontPadding}px`,
                    paddingBottom: `${e.behindPadding}px`
                } : {}
            }), {
                default: Se(() => [(R(!0), J(ot, null, Gn(e.currentList, (s, l) => {
                    var u;
                    return R(), fe(a, {
                        key: (u = s[e.itemKey]) != null ? u : e.start + l,
                        "has-item-size": e.hasItemSize,
                        "set-item-size": e.setItemSize
                    }, {
                        default: Se(() => [ae(e.$slots, "item", {item: s, index: e.start + l})]),
                        _: 2
                    }, 1032, ["has-item-size", "set-item-size"])
                }), 128))]), _: 3
            }, 16, ["style"]))]), _: 3
        }, 16, ["style"]))]), _: 3
    }, 8, ["class", "style", "onScroll"])
}

var Gm = he(Hm, [["render", qm]]);
const As = typeof window > "u" ? global : window;

function Km(e, t) {
    let n = 0;
    return (...r) => {
        n && As.clearTimeout(n), n = As.setTimeout(() => {
            n = 0, e(...r)
        }, t)
    }
}

var Ym = Object.defineProperty, Xm = Object.defineProperties, Jm = Object.getOwnPropertyDescriptors,
    Ns = Object.getOwnPropertySymbols, Zm = Object.prototype.hasOwnProperty, Qm = Object.prototype.propertyIsEnumerable,
    Ps = (e, t, n) => t in e ? Ym(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
    Pn = (e, t) => {
        for (var n in t || (t = {})) Zm.call(t, n) && Ps(e, n, t[n]);
        if (Ns) for (var n of Ns(t)) Qm.call(t, n) && Ps(e, n, t[n]);
        return e
    }, ev = (e, t) => Xm(e, Jm(t));

function tv(e) {
    return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !sa(e)
}

const nv = {value: "value", label: "label", disabled: "disabled", tagProps: "tagProps", render: "render"};
var jo = te({
    name: "Select",
    components: {Trigger: kr, SelectView: Os},
    inheritAttrs: !1,
    props: {
        multiple: {type: Boolean, default: !1},
        modelValue: {type: [String, Number, Object, Array]},
        defaultValue: {type: [String, Number, Object, Array], default: e => ht(e.multiple) ? "" : []},
        inputValue: {type: String},
        defaultInputValue: {type: String, default: ""},
        size: {type: String},
        placeholder: String,
        loading: {type: Boolean, default: !1},
        disabled: {type: Boolean, default: !1},
        error: {type: Boolean, default: !1},
        allowClear: {type: Boolean, default: !1},
        allowSearch: {type: [Boolean, Object], default: e => !!e.multiple},
        allowCreate: {type: Boolean, default: !1},
        maxTagCount: {type: Number, default: 0},
        popupContainer: {type: [String, Object]},
        bordered: {type: Boolean, default: !0},
        defaultActiveFirstOption: {type: Boolean, default: !0},
        popupVisible: {type: Boolean, default: void 0},
        defaultPopupVisible: {type: Boolean, default: !1},
        unmountOnClose: {type: Boolean, default: !1},
        filterOption: {type: [Boolean, Function], default: !0},
        options: {type: Array, default: () => []},
        virtualListProps: {type: Object},
        triggerProps: {type: Object},
        formatLabel: {type: Function},
        fallbackOption: {type: [Boolean, Function], default: !0},
        showExtraOptions: {type: Boolean, default: !0},
        valueKey: {type: String, default: "value"},
        searchDelay: {type: Number, default: 500},
        limit: {type: Number, default: 0},
        fieldNames: {type: Object},
        scrollbar: {type: [Boolean, Object], default: !0}
    },
    emits: {
        "update:modelValue": e => !0,
        "update:inputValue": e => !0,
        "update:popupVisible": e => !0,
        change: e => !0,
        inputValueChange: e => !0,
        popupVisibleChange: e => !0,
        clear: e => !0,
        remove: e => !0,
        search: e => !0,
        dropdownScroll: e => !0,
        dropdownReachBottom: e => !0,
        exceedLimit: (e, t) => !0
    },
    setup(e, {slots: t, emit: n, attrs: r}) {
        const {
                size: o,
                disabled: i,
                error: a,
                options: s,
                filterOption: l,
                valueKey: u,
                multiple: c,
                popupVisible: f,
                showExtraOptions: p,
                modelValue: _,
                fieldNames: S,
                loading: w,
                defaultActiveFirstOption: L
            } = Be(e), g = re("select"), {mergedSize: $, mergedDisabled: E, mergedError: h, eventHandlers: m} = _t({
                size: o,
                disabled: i,
                error: a
            }), b = C(() => e.virtualListProps ? "div" : "li"),
            v = C(() => De(e.allowSearch) && !!e.allowSearch.retainInputValue);
        C(() => {
            if (qe(e.formatLabel)) return H => {
                const ue = ne.get(H.value);
                return e.formatLabel(ue)
            }
        });
        const N = U(), T = U({}), A = U(), {computedPopupVisible: j, handlePopupVisibleChange: Z} = mm({
            popupVisible: f,
            emit: n
        }), W = U(e.defaultValue), k = C(() => {
            var H;
            const ue = (H = e.modelValue) != null ? H : W.value;
            return (Ge(ue) ? ue : ue || me(ue) ? [ue] : []).map(Ee => ({value: Ee, key: Un(Ee, e.valueKey)}))
        });
        Pe(_, H => {
            (ht(H) || Kn(H)) && (W.value = c.value ? [] : "")
        });
        const P = C(() => k.value.map(H => H.key)), F = C(() => Pn(Pn({}, nv), S == null ? void 0 : S.value)), x = U(),
            K = H => {
                const ue = {};
                return H.forEach(pe => {
                    ue[pe] = ne.get(pe)
                }), ue
            }, B = H => {
                x.value = K(H)
            }, I = H => qe(e.fallbackOption) ? e.fallbackOption(H) : {
                [F.value.value]: H,
                [F.value.label]: String(De(H) ? H[u == null ? void 0 : u.value] : H)
            }, Y = () => {
                const H = [], ue = [];
                if (e.allowCreate || e.fallbackOption) {
                    for (const pe of k.value) if (!ue.includes(pe.key)) {
                        const Ee = ne.get(pe.key);
                        (!Ee || Ee.origin === "extraOptions") && (H.push(pe), ue.push(pe.key))
                    }
                }
                if (e.allowCreate && ge.value) {
                    const pe = Un(ge.value);
                    if (!ue.includes(pe)) {
                        const Ee = ne.get(pe);
                        (!Ee || Ee.origin === "extraOptions") && H.push({value: ge.value, key: pe})
                    }
                }
                return H
            }, Q = U([]), ve = C(() => Q.value.map(H => {
                var ue;
                let pe = I(H.value);
                const Ee = (ue = x.value) == null ? void 0 : ue[H.key];
                return !ht(Ee) && !kf(Ee) && (pe = Pn(Pn({}, pe), Ee)), pe
            }));
        Xe(() => {
            _f(() => {
                var H;
                const ue = Y();
                if (ue.length !== Q.value.length) Q.value = ue; else if (ue.length > 0) {
                    for (let pe = 0; pe < ue.length; pe++) if (ue[pe].key !== ((H = Q.value[pe]) == null ? void 0 : H.key)) {
                        Q.value = ue;
                        break
                    }
                }
            })
        });
        const se = U(""), ge = C(() => {
            var H;
            return (H = e.inputValue) != null ? H : se.value
        });
        Pe(j, H => {
            !H && !v.value && ge.value && we("")
        });
        const Le = H => {
            var ue, pe;
            return e.multiple ? H.map(Ee => {
                var st, Pt;
                return (Pt = (st = ne.get(Ee)) == null ? void 0 : st.value) != null ? Pt : ""
            }) : (pe = (ue = ne.get(H[0])) == null ? void 0 : ue.value) != null ? pe : ""
        }, Ne = H => {
            var ue, pe;
            const Ee = Le(H);
            W.value = Ee, n("update:modelValue", Ee), n("change", Ee), (pe = (ue = m.value) == null ? void 0 : ue.onChange) == null || pe.call(ue), B(H)
        }, we = H => {
            se.value = H, n("update:inputValue", H), n("inputValueChange", H)
        }, $e = (H, ue) => {
            if (e.multiple) {
                if (P.value.includes(H)) {
                    const pe = P.value.filter(Ee => Ee !== H);
                    Ne(pe)
                } else if (Ze.value.includes(H)) if (e.limit > 0 && P.value.length >= e.limit) {
                    const pe = ne.get(H);
                    n("exceedLimit", pe == null ? void 0 : pe.value, ue)
                } else {
                    const pe = P.value.concat(H);
                    Ne(pe)
                }
                v.value || we("")
            } else {
                if (H !== P.value[0] && Ne([H]), v.value) {
                    const pe = ne.get(H);
                    pe && we(pe.label)
                }
                Z(!1)
            }
        }, Me = Km(H => {
            n("search", H)
        }, e.searchDelay), ze = H => {
            H !== ge.value && (j.value || Z(!0), we(H), e.allowSearch && Me(H))
        }, oe = H => {
            const ue = ne.get(H), pe = P.value.filter(Ee => Ee !== H);
            Ne(pe), n("remove", ue == null ? void 0 : ue.value)
        }, y = H => {
            H == null || H.stopPropagation();
            const ue = P.value.filter(pe => {
                var Ee;
                return (Ee = ne.get(pe)) == null ? void 0 : Ee.disabled
            });
            Ne(ue), we(""), n("clear", H)
        }, d = H => {
            n("dropdownScroll", H)
        }, O = H => {
            n("dropdownReachBottom", H)
        }, {
            validOptions: q,
            optionInfoMap: ne,
            validOptionInfos: _e,
            enabledOptionKeys: Ze,
            handleKeyDown: et
        } = Gp({
            multiple: c,
            options: s,
            extraOptions: ve,
            inputValue: ge,
            filterOption: l,
            showExtraOptions: p,
            component: b,
            valueKey: u,
            fieldNames: S,
            loading: w,
            popupVisible: j,
            valueKeys: P,
            dropdownRef: N,
            optionRefs: T,
            virtualListRef: A,
            defaultActiveFirstOption: L,
            onSelect: $e,
            onPopupVisibleChange: Z
        }), Nn = C(() => {
            var H;
            const ue = [];
            for (const pe of k.value) {
                const Ee = ne.get(pe.key);
                Ee && ue.push(ev(Pn({}, Ee), {
                    value: pe.key,
                    label: (H = Ee == null ? void 0 : Ee.label) != null ? H : String(De(pe.value) ? pe.value[u == null ? void 0 : u.value] : pe.value),
                    closable: !(Ee != null && Ee.disabled),
                    tagProps: Ee == null ? void 0 : Ee.tagProps
                }))
            }
            return ue
        }), ee = H => {
            if (qe(t.option)) {
                const ue = t.option;
                return () => ue({data: H.raw})
            }
            return qe(H.render) ? H.render : () => H.label
        }, D = H => {
            if (ku(H)) {
                let ue;
                return V(hr, {
                    key: H.key,
                    label: H.label
                }, tv(ue = H.options.map(pe => D(pe))) ? ue : {default: () => [ue]})
            }
            return zr(H, {inputValue: ge.value, filterOption: l == null ? void 0 : l.value}) ? V(fr, {
                ref: ue => {
                    ue != null && ue.$el && (T.value[H.key] = ue.$el)
                }, key: H.key, value: H.value, label: H.label, disabled: H.disabled, internal: !0
            }, {default: ee(H)}) : null
        }, X = () => V($p, {
            ref: N,
            loading: e.loading,
            empty: _e.value.length === 0,
            virtualList: !!e.virtualListProps,
            scrollbar: e.scrollbar,
            onScroll: d,
            onReachBottom: O
        }, {
            default: () => {
                var H, ue;
                return [...(ue = (H = t.default) == null ? void 0 : H.call(t)) != null ? ue : [], ...q.value.map(D)]
            },
            "virtual-list": () => V(Gm, Re(e.virtualListProps, {ref: A, data: q.value}), {item: ({item: H}) => D(H)}),
            empty: t.empty,
            header: t.header,
            footer: t.footer
        }), He = ({data: H}) => {
            var ue, pe, Ee, st;
            if ((t.label || qe(e.formatLabel)) && H) {
                const Pt = ne.get(H.value);
                if (Pt != null && Pt.raw) return (Ee = (ue = t.label) == null ? void 0 : ue.call(t, {data: Pt.raw})) != null ? Ee : (pe = e.formatLabel) == null ? void 0 : pe.call(e, Pt.raw)
            }
            return (st = H == null ? void 0 : H.label) != null ? st : ""
        };
        return () => V(kr, Re({
            trigger: "click",
            position: "bl",
            popupOffset: 4,
            animationName: "slide-dynamic-origin",
            hideEmpty: !0,
            preventFocus: !0,
            autoFitPopupWidth: !0,
            autoFitTransformOrigin: !0,
            disabled: E.value,
            popupVisible: j.value,
            unmountOnClose: e.unmountOnClose,
            clickToClose: !(e.allowSearch || e.allowCreate),
            popupContainer: e.popupContainer,
            onPopupVisibleChange: Z
        }, e.triggerProps), {
            default: () => {
                var H, ue;
                return [(ue = (H = t.trigger) == null ? void 0 : H.call(t)) != null ? ue : V(Os, Re({
                    class: g,
                    modelValue: Nn.value,
                    inputValue: ge.value,
                    multiple: e.multiple,
                    disabled: E.value,
                    error: h.value,
                    loading: e.loading,
                    allowClear: e.allowClear,
                    allowCreate: e.allowCreate,
                    allowSearch: !!e.allowSearch,
                    opened: j.value,
                    maxTagCount: e.maxTagCount,
                    placeholder: e.placeholder,
                    bordered: e.bordered,
                    size: $.value,
                    onInputValueChange: ze,
                    onRemove: oe,
                    onClear: y,
                    onKeydown: et
                }, r), {
                    label: He,
                    prefix: t.prefix,
                    "arrow-icon": t["arrow-icon"],
                    "loading-icon": t["loading-icon"],
                    "search-icon": t["search-icon"]
                })]
            }, content: X
        })
    }
});
const zS = Object.assign(jo, {
        Option: fr, OptGroup: hr, install: (e, t) => {
            Ve(e, t);
            const n = Fe(t);
            e.component(n + jo.name, jo), e.component(n + fr.name, fr), e.component(n + hr.name, hr)
        }
    }), rv = te({
        name: "IconLeft",
        props: {
            size: {type: [Number, String]},
            strokeWidth: {type: Number, default: 4},
            strokeLinecap: {type: String, default: "butt", validator: e => ["butt", "round", "square"].includes(e)},
            strokeLinejoin: {
                type: String,
                default: "miter",
                validator: e => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
            },
            rotate: Number,
            spin: Boolean
        },
        emits: {click: e => !0},
        setup(e, {emit: t}) {
            const n = re("icon"), r = C(() => [n, `${n}-left`, {[`${n}-spin`]: e.spin}]), o = C(() => {
                const a = {};
                return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a
            });
            return {
                cls: r, innerStyle: o, onClick: a => {
                    t("click", a)
                }
            }
        }
    }), ov = ["stroke-width", "stroke-linecap", "stroke-linejoin"],
    iv = de("path", {d: "M32 8.4 16.444 23.956 32 39.513"}, null, -1), av = [iv];

function sv(e, t, n, r, o, i) {
    return R(), J("svg", {
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "currentColor",
        class: G(e.cls),
        style: Oe(e.innerStyle),
        "stroke-width": e.strokeWidth,
        "stroke-linecap": e.strokeLinecap,
        "stroke-linejoin": e.strokeLinejoin,
        onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
    }, av, 14, ov)
}

var Fo = he(rv, [["render", sv]]);
const US = Object.assign(Fo, {
        install: (e, t) => {
            var n;
            const r = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
            e.component(r + Fo.name, Fo)
        }
    }), lv = te({
        name: "IconUp",
        props: {
            size: {type: [Number, String]},
            strokeWidth: {type: Number, default: 4},
            strokeLinecap: {type: String, default: "butt", validator: e => ["butt", "round", "square"].includes(e)},
            strokeLinejoin: {
                type: String,
                default: "miter",
                validator: e => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
            },
            rotate: Number,
            spin: Boolean
        },
        emits: {click: e => !0},
        setup(e, {emit: t}) {
            const n = re("icon"), r = C(() => [n, `${n}-up`, {[`${n}-spin`]: e.spin}]), o = C(() => {
                const a = {};
                return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a
            });
            return {
                cls: r, innerStyle: o, onClick: a => {
                    t("click", a)
                }
            }
        }
    }), uv = ["stroke-width", "stroke-linecap", "stroke-linejoin"],
    cv = de("path", {d: "M39.6 30.557 24.043 15 8.487 30.557"}, null, -1), fv = [cv];

function dv(e, t, n, r, o, i) {
    return R(), J("svg", {
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "currentColor",
        class: G(e.cls),
        style: Oe(e.innerStyle),
        "stroke-width": e.strokeWidth,
        "stroke-linecap": e.strokeLinecap,
        "stroke-linejoin": e.strokeLinejoin,
        onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
    }, fv, 14, uv)
}

var Vo = he(lv, [["render", dv]]);
const hv = Object.assign(Vo, {
    install: (e, t) => {
        var n;
        const r = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
        e.component(r + Vo.name, Vo)
    }
});

function pv(e, t, n) {
    return C(() => !!(e[n] || t[n]))
}

const mv = te({
    name: "ConfigProvider",
    props: {
        prefixCls: {type: String, default: "arco"},
        locale: {type: Object},
        size: {type: String},
        global: {type: Boolean, default: !1},
        updateAtScroll: {type: Boolean, default: !1}
    },
    setup(e, {slots: t}) {
        const {prefixCls: n, locale: r, size: o, updateAtScroll: i} = Be(e),
            a = xe({slots: t, prefixCls: n, locale: r, size: o, updateAtScroll: i});
        if (e.global) {
            const s = Yt();
            s && s.appContext.app.provide(Ht, a)
        } else Lt(Ht, a)
    }
});

function vv(e, t, n, r, o, i) {
    return ae(e.$slots, "default")
}

var xo = he(mv, [["render", vv]]);
const WS = Object.assign(xo, {
        install: (e, t) => {
            Ve(e, t);
            const n = Fe(t);
            e.component(n + xo.name, xo)
        }
    }), gv = te({
        name: "IconLink",
        props: {
            size: {type: [Number, String]},
            strokeWidth: {type: Number, default: 4},
            strokeLinecap: {type: String, default: "butt", validator: e => ["butt", "round", "square"].includes(e)},
            strokeLinejoin: {
                type: String,
                default: "miter",
                validator: e => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
            },
            rotate: Number,
            spin: Boolean
        },
        emits: {click: e => !0},
        setup(e, {emit: t}) {
            const n = re("icon"), r = C(() => [n, `${n}-link`, {[`${n}-spin`]: e.spin}]), o = C(() => {
                const a = {};
                return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a
            });
            return {
                cls: r, innerStyle: o, onClick: a => {
                    t("click", a)
                }
            }
        }
    }), yv = ["stroke-width", "stroke-linecap", "stroke-linejoin"],
    bv = de("path", {d: "m14.1 25.414-4.95 4.95a6 6 0 0 0 8.486 8.485l8.485-8.485a6 6 0 0 0 0-8.485m7.779.707 4.95-4.95a6 6 0 1 0-8.486-8.485l-8.485 8.485a6 6 0 0 0 0 8.485"}, null, -1),
    _v = [bv];

function Cv(e, t, n, r, o, i) {
    return R(), J("svg", {
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "currentColor",
        class: G(e.cls),
        style: Oe(e.innerStyle),
        "stroke-width": e.strokeWidth,
        "stroke-linecap": e.strokeLinecap,
        "stroke-linejoin": e.strokeLinejoin,
        onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
    }, _v, 14, yv)
}

var zo = he(gv, [["render", Cv]]);
const Sv = Object.assign(zo, {
    install: (e, t) => {
        var n;
        const r = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
        e.component(r + zo.name, zo)
    }
}), wv = te({
    name: "Link",
    components: {IconLink: Sv, IconLoading: jt},
    props: {
        href: String,
        status: {type: String, default: "normal"},
        hoverable: {type: Boolean, default: !0},
        icon: Boolean,
        loading: Boolean,
        disabled: Boolean
    },
    emits: {click: e => !0},
    setup(e, {slots: t, emit: n}) {
        const r = re("link"), o = pv(e, t, "icon"), i = s => {
            if (e.disabled || e.loading) {
                s.preventDefault();
                return
            }
            n("click", s)
        };
        return {
            cls: C(() => [r, `${r}-status-${e.status}`, {
                [`${r}-disabled`]: e.disabled,
                [`${r}-loading`]: e.loading,
                [`${r}-hoverless`]: !e.hoverable,
                [`${r}-with-icon`]: e.loading || o.value
            }]), prefixCls: r, showIcon: o, handleClick: i
        }
    }
}), Ev = ["href"];

function $v(e, t, n, r, o, i) {
    const a = ie("icon-loading"), s = ie("icon-link");
    return R(), J("a", {
        href: e.disabled ? void 0 : e.href,
        class: G(e.cls),
        onClick: t[0] || (t[0] = (...l) => e.handleClick && e.handleClick(...l))
    }, [e.loading || e.showIcon ? (R(), J("span", {
        key: 0,
        class: G(`${e.prefixCls}-icon`)
    }, [e.loading ? (R(), fe(a, {key: 0})) : ae(e.$slots, "icon", {key: 1}, () => [V(s)])], 2)) : le("v-if", !0), ae(e.$slots, "default")], 10, Ev)
}

var Uo = he(wv, [["render", $v]]);
const HS = Object.assign(Uo, {
    install: (e, t) => {
        Ve(e, t);
        const n = Fe(t);
        e.component(n + Uo.name, Uo)
    }
}), Is = (e, t) => {
    if (!e || !t) return;
    const n = t.split(".");
    if (n.length === 0) return;
    let r = e;
    for (let o = 0; o < n.length; o++) {
        if (!De(r) && !Ge(r) || !n[o]) return;
        if (o !== n.length - 1) r = r[n[o]]; else return r[n[o]]
    }
}, Ms = (e, t, n) => {
    if (!e || !t) return;
    const r = t.split(".");
    if (r.length === 0) return;
    let o = e;
    for (let i = 0; i < r.length; i++) {
        if (!De(o) && !Ge(o) || !r[i]) return;
        i !== r.length - 1 ? o = o[r[i]] : o[r[i]] = n
    }
};
var kv = Object.defineProperty, Ov = Object.defineProperties, Lv = Object.getOwnPropertyDescriptors,
    Rs = Object.getOwnPropertySymbols, Tv = Object.prototype.hasOwnProperty, Av = Object.prototype.propertyIsEnumerable,
    Bs = (e, t, n) => t in e ? kv(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
    Nv = (e, t) => {
        for (var n in t || (t = {})) Tv.call(t, n) && Bs(e, n, t[n]);
        if (Rs) for (var n of Rs(t)) Av.call(t, n) && Bs(e, n, t[n]);
        return e
    }, Pv = (e, t) => Ov(e, Lv(t));
const Or = ["xxl", "xl", "lg", "md", "sm", "xs"], or = {
    xs: "(max-width: 575px)",
    sm: "(min-width: 576px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 992px)",
    xl: "(min-width: 1200px)",
    xxl: "(min-width: 1600px)"
};
let Jt = [], Iv = -1, ir = {};
const Ds = {
    matchHandlers: {}, dispatch(e, t) {
        return ir = e, Jt.length < 1 ? !1 : (Jt.forEach(n => {
            n.func(ir, t)
        }), !0)
    }, subscribe(e) {
        Jt.length === 0 && this.register();
        const t = (++Iv).toString();
        return Jt.push({token: t, func: e}), e(ir, null), t
    }, unsubscribe(e) {
        Jt = Jt.filter(t => t.token !== e), Jt.length === 0 && this.unregister()
    }, unregister() {
        Object.keys(or).forEach(e => {
            const t = or[e];
            if (!t) return;
            const n = this.matchHandlers[t];
            n && n.mql && n.listener && (n.mql.removeEventListener ? n.mql.removeEventListener("change", n.listener) : n.mql.removeListener(n.listener))
        })
    }, register() {
        Object.keys(or).forEach(e => {
            const t = or[e];
            if (!t) return;
            const n = ({matches: o}) => {
                this.dispatch(Pv(Nv({}, ir), {[e]: o}), e)
            }, r = window.matchMedia(t);
            r.addEventListener ? r.addEventListener("change", n) : r.addListener(n), this.matchHandlers[t] = {
                mql: r,
                listener: n
            }, n(r)
        })
    }
};

function js(e) {
    return De(e)
}

function Di(e, t, n = !1) {
    const r = U({xs: !0, sm: !0, md: !0, lg: !0, xl: !0, xxl: !0}), o = C(() => {
        let a = t;
        if (js(e.value)) for (let s = 0; s < Or.length; s++) {
            const l = Or[s];
            if ((r.value[l] || l === "xs" && n) && e.value[l] !== void 0) {
                a = e.value[l];
                break
            }
        } else a = e.value;
        return a
    });
    let i = "";
    return We(() => {
        i = Ds.subscribe(a => {
            js(e.value) && (r.value = a)
        })
    }), qn(() => {
        i && Ds.unsubscribe(i)
    }), o
}

var Wo = te({
    name: "Divider",
    props: {
        direction: {type: String, default: "horizontal"},
        orientation: {type: String, default: "center"},
        type: {type: String},
        size: {type: Number},
        margin: {type: [Number, String]}
    },
    setup(e, {slots: t}) {
        const n = re("divider"), r = C(() => e.direction === "horizontal"), o = C(() => {
            const i = {};
            if (e.size && (i[r.value ? "border-left-width" : "border-bottom-width"] = me(e.size) ? `${e.size}px` : e.size), e.type && (i[r.value ? "border-left-style" : "border-bottom-style"] = e.type), e.margin) {
                const a = me(e.margin) ? `${e.margin}px` : e.margin;
                i.margin = r.value ? `${a} 0` : `0 ${a}`
            }
            return i
        });
        return () => {
            var i;
            const a = (i = t.default) == null ? void 0 : i.call(t),
                s = [n, `${n}-${e.direction}`, {[`${n}-with-text`]: a}];
            return V("div", {
                role: "separator",
                class: s,
                style: o.value
            }, [a && e.direction === "horizontal" && V("span", {class: [`${n}-text`, `${n}-text-${e.orientation}`]}, [a])])
        }
    }
});
const qS = Object.assign(Wo, {
    install: (e, t) => {
        Ve(e, t);
        const n = Fe(t);
        e.component(n + Wo.name, Wo)
    }
}), Mv = e => {
    const t = U(!1), n = {overflow: "", width: "", boxSizing: ""};
    return {
        setOverflowHidden: () => {
            if (e.value) {
                const i = e.value;
                if (!t.value && i.style.overflow !== "hidden") {
                    const a = cd(i);
                    (a > 0 || ud(i)) && (n.overflow = i.style.overflow, n.width = i.style.width, n.boxSizing = i.style.boxSizing, i.style.overflow = "hidden", i.style.width = `${i.offsetWidth - a}px`, i.style.boxSizing = "border-box", t.value = !0)
                }
            }
        }, resetOverflow: () => {
            if (e.value && t.value) {
                const i = e.value;
                i.style.overflow = n.overflow, i.style.width = n.width, i.style.boxSizing = n.boxSizing, t.value = !1
            }
        }
    }
}, Rv = te({
    name: "Form",
    props: {
        model: {type: Object, required: !0},
        layout: {type: String, default: "horizontal"},
        size: {type: String},
        labelColProps: {type: Object, default: () => ({span: 5, offset: 0})},
        wrapperColProps: {type: Object, default: () => ({span: 19, offset: 0})},
        labelColStyle: Object,
        wrapperColStyle: Object,
        labelAlign: {type: String, default: "right"},
        disabled: {type: Boolean, default: void 0},
        rules: {type: Object},
        autoLabelWidth: {type: Boolean, default: !1}
    },
    emits: {submit: (e, t) => !0, submitSuccess: (e, t) => !0, submitFailed: (e, t) => !0},
    setup(e, {emit: t}) {
        const n = re("form"), {
                model: r,
                layout: o,
                disabled: i,
                labelAlign: a,
                labelColProps: s,
                wrapperColProps: l,
                labelColStyle: u,
                wrapperColStyle: c,
                size: f,
                rules: p
            } = Be(e), {mergedSize: _} = Ft(f), S = C(() => e.layout === "horizontal" && e.autoLabelWidth), w = [], L = [],
            g = xe({}), $ = C(() => Math.max(...Object.values(g))), E = k => {
                k && k.field && w.push(k)
            }, h = k => {
                k && k.field && w.splice(w.indexOf(k), 1)
            }, m = k => {
                w.forEach(P => {
                    k[P.field] && P.setField(k[P.field])
                })
            }, b = (k, P) => {
                P && g[P] !== k && (g[P] = k)
            }, v = k => {
                k && delete g[k]
            }, N = k => {
                const P = k ? [].concat(k) : [];
                w.forEach(F => {
                    (P.length === 0 || P.includes(F.field)) && F.resetField()
                })
            }, T = k => {
                const P = k ? [].concat(k) : [];
                w.forEach(F => {
                    (P.length === 0 || P.includes(F.field)) && F.clearValidate()
                })
            }, A = k => {
                const P = [];
                return w.forEach(F => {
                    P.push(F.validate())
                }), Promise.all(P).then(F => {
                    const x = {};
                    let K = !1;
                    return F.forEach(B => {
                        B && (K = !0, x[B.field] = B)
                    }), qe(k) && k(K ? x : void 0), K ? x : void 0
                })
            }, j = (k, P) => {
                const F = [];
                for (const x of w) (Ge(k) && k.includes(x.field) || k === x.field) && F.push(x.validate());
                return Promise.all(F).then(x => {
                    const K = {};
                    let B = !1;
                    return x.forEach(I => {
                        I && (B = !0, K[I.field] = I)
                    }), qe(P) && P(B ? K : void 0), B ? K : void 0
                })
            }, Z = k => {
                const P = [];
                w.forEach(F => {
                    P.push(F.validate())
                }), Promise.all(P).then(F => {
                    const x = {};
                    let K = !1;
                    F.forEach(B => {
                        B && (K = !0, x[B.field] = B)
                    }), K ? t("submitFailed", {
                        values: r.value,
                        errors: x
                    }, k) : t("submitSuccess", r.value, k), t("submit", {values: r.value, errors: K ? x : void 0}, k)
                })
            };
        return Lt(ma, xe({
            layout: o,
            disabled: i,
            labelAlign: a,
            labelColProps: s,
            wrapperColProps: l,
            labelColStyle: u,
            wrapperColStyle: c,
            model: r,
            size: _,
            rules: p,
            fields: w,
            touchedFields: L,
            addField: E,
            removeField: h,
            validateField: j,
            setLabelWidth: b,
            removeLabelWidth: v,
            maxLabelWidth: $,
            autoLabelWidth: S
        })), {
            cls: C(() => [n, `${n}-layout-${e.layout}`, `${n}-size-${_.value}`, {[`${n}-auto-label-width`]: e.autoLabelWidth}]),
            handleSubmit: Z,
            innerValidate: A,
            innerValidateField: j,
            innerResetFields: N,
            innerClearValidate: T,
            innerSetFields: m
        }
    },
    methods: {
        validate(e) {
            return this.innerValidate(e)
        }, validateField(e, t) {
            return this.innerValidateField(e, t)
        }, resetFields(e) {
            return this.innerResetFields(e)
        }, clearValidate(e) {
            return this.innerClearValidate(e)
        }, setFields(e) {
            return this.innerSetFields(e)
        }
    }
});

function Bv(e, t, n, r, o, i) {
    return R(), J("form", {
        class: G(e.cls),
        onSubmit: t[0] || (t[0] = Wt((...a) => e.handleSubmit && e.handleSubmit(...a), ["prevent"]))
    }, [ae(e.$slots, "default")], 34)
}

var Ho = he(Rv, [["render", Bv]]), On = Object.prototype.toString;

function Ur(e) {
    return On.call(e) === "[object Array]"
}

function Mt(e) {
    return On.call(e) === "[object Object]"
}

function ji(e) {
    return On.call(e) === "[object String]"
}

function Dv(e) {
    return On.call(e) === "[object Number]" && e === e
}

function jv(e) {
    return On.call(e) === "[object Boolean]"
}

function Fi(e) {
    return On.call(e) === "[object Function]"
}

function Fv(e) {
    return Mt(e) && Object.keys(e).length === 0
}

function Zt(e) {
    return e == null || e === ""
}

function Pu(e) {
    return Ur(e) && !e.length
}

var ya = function (e, t) {
    if (typeof e != "object" || typeof t != "object") return e === t;
    if (Fi(e) && Fi(t)) return e === t || e.toString() === t.toString();
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (var n in e) {
        var r = ya(e[n], t[n]);
        if (!r) return !1
    }
    return !0
}, Vv = function (e, t) {
    var n = {};
    return Object.keys(e).forEach(function (r) {
        var o = e[r], i = t && t[r];
        n[r] = Mt(o) ? Object.assign(Object.assign({}, o), i) : i || o
    }), n
}, xv = function (e, t) {
    for (var n = t.split("."), r = e, o = 0; o < n.length; o++) if (r = r && r[n[o]], r === void 0) return r;
    return r
}, Vt = "#{field} is not a #{type} type", zv = {
    required: "#{field} is required",
    type: {ip: Vt, email: Vt, url: Vt, string: Vt, number: Vt, array: Vt, object: Vt, boolean: Vt},
    number: {
        min: "`#{value}` is not greater than `#{min}`",
        max: "`#{value}` is not less than `#{max}`",
        equal: "`#{value}` is not equal to `#{equal}`",
        range: "`#{value}` is not in range `#{min} ~ #{max}`",
        positive: "`#{value}` is not a positive number",
        negative: "`#{value}` is not a negative number"
    },
    string: {
        maxLength: "#{field} cannot be longer than #{maxLength} characters",
        minLength: "#{field} must be at least #{minLength} characters",
        length: "#{field} must be exactly #{length} characters",
        match: "`#{value}` does not match pattern #{pattern}",
        uppercase: "`#{value}` must be all uppercase",
        lowercase: "`#{value}` must be all lowercased"
    },
    array: {
        length: "#{field} must be exactly #{length} in length",
        minLength: "#{field} cannot be less than #{minLength} in length",
        maxLength: "#{field} cannot be greater than #{maxLength} in length",
        includes: "#{field} is not includes #{includes}",
        deepEqual: "#{field} is not deep equal with #{deepEqual}",
        empty: "#{field} is not an empty array"
    },
    object: {
        deepEqual: "#{field} is not deep equal to expected value",
        hasKeys: "#{field} does not contain required fields",
        empty: "`#{field} is not an empty object"
    },
    boolean: {true: "Expect true but got `#{value}`", false: "Expect false but got `#{value}`"}
}, Ct = function (t, n) {
    var r = this;
    this.getValidateMsg = function (o, i) {
        i === void 0 && (i = {});
        var a = Object.assign(Object.assign({}, i), {value: r.obj, field: r.field, type: r.type}),
            s = xv(r.validateMessages, o);
        return Fi(s) ? s(a) : ji(s) ? s.replace(/\#\{.+?\}/g, function (l) {
            var u = l.slice(2, -1);
            if (u in a) {
                if (Mt(a[u]) || Ur(a[u])) try {
                    return JSON.stringify(a[u])
                } catch {
                    return a[u]
                }
                return String(a[u])
            }
            return l
        }) : s
    }, Mt(n) && ji(t) && n.trim ? this.obj = t.trim() : Mt(n) && n.ignoreEmptyString && t === "" ? this.obj = void 0 : this.obj = t, this.message = n.message, this.type = n.type, this.error = null, this.field = n.field || n.type, this.validateMessages = Vv(zv, n.validateMessages)
}, Wr = {not: {configurable: !0}, isRequired: {configurable: !0}, end: {configurable: !0}};
Wr.not.get = function () {
    return this._not = !this._not, this
};
Wr.isRequired.get = function () {
    if (Zt(this.obj) || Pu(this.obj)) {
        var e = this.getValidateMsg("required");
        this.error = {
            value: this.obj,
            type: this.type,
            requiredError: !0,
            message: this.message || (Mt(e) ? e : (this._not ? "[NOT MODE]:" : "") + e)
        }
    }
    return this
};
Wr.end.get = function () {
    return this.error
};
Ct.prototype.addError = function (t) {
    !this.error && t && (this.error = {
        value: this.obj,
        type: this.type,
        message: this.message || (Mt(t) ? t : (this._not ? "[NOT MODE]:" : "") + t)
    })
};
Ct.prototype.validate = function (t, n) {
    var r = this._not ? t : !t;
    return r && this.addError(n), this
};
Ct.prototype.collect = function (t) {
    t && t(this.error)
};
Object.defineProperties(Ct.prototype, Wr);
var Uv = function (e) {
        function t(r, o) {
            e.call(this, r, Object.assign(Object.assign({}, o), {type: "string"})), this.validate(o && o.strict ? ji(this.obj) : !0, this.getValidateMsg("type.string"))
        }

        e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
        var n = {uppercase: {configurable: !0}, lowercase: {configurable: !0}};
        return t.prototype.maxLength = function (o) {
            return this.obj ? this.validate(this.obj.length <= o, this.getValidateMsg("string.maxLength", {maxLength: o})) : this
        }, t.prototype.minLength = function (o) {
            return this.obj ? this.validate(this.obj.length >= o, this.getValidateMsg("string.minLength", {minLength: o})) : this
        }, t.prototype.length = function (o) {
            return this.obj ? this.validate(this.obj.length === o, this.getValidateMsg("string.length", {length: o})) : this
        }, t.prototype.match = function (o) {
            var i = o instanceof RegExp;
            return i && (o.lastIndex = 0), this.validate(this.obj === void 0 || i && o.test(this.obj), this.getValidateMsg("string.match", {pattern: o}))
        }, n.uppercase.get = function () {
            return this.obj ? this.validate(this.obj.toUpperCase() === this.obj, this.getValidateMsg("string.uppercase")) : this
        }, n.lowercase.get = function () {
            return this.obj ? this.validate(this.obj.toLowerCase() === this.obj, this.getValidateMsg("string.lowercase")) : this
        }, Object.defineProperties(t.prototype, n), t
    }(Ct), Wv = function (e) {
        function t(r, o) {
            e.call(this, r, Object.assign(Object.assign({}, o), {type: "number"})), this.validate(o && o.strict ? Dv(this.obj) : !0, this.getValidateMsg("type.number"))
        }

        e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
        var n = {positive: {configurable: !0}, negative: {configurable: !0}};
        return t.prototype.min = function (o) {
            return Zt(this.obj) ? this : this.validate(this.obj >= o, this.getValidateMsg("number.min", {min: o}))
        }, t.prototype.max = function (o) {
            return Zt(this.obj) ? this : this.validate(this.obj <= o, this.getValidateMsg("number.max", {max: o}))
        }, t.prototype.equal = function (o) {
            return Zt(this.obj) ? this : this.validate(this.obj === o, this.getValidateMsg("number.equal", {equal: o}))
        }, t.prototype.range = function (o, i) {
            return Zt(this.obj) ? this : this.validate(this.obj >= o && this.obj <= i, this.getValidateMsg("number.range", {
                min: o,
                max: i
            }))
        }, n.positive.get = function () {
            return Zt(this.obj) ? this : this.validate(this.obj > 0, this.getValidateMsg("number.positive"))
        }, n.negative.get = function () {
            return Zt(this.obj) ? this : this.validate(this.obj < 0, this.getValidateMsg("number.negative"))
        }, Object.defineProperties(t.prototype, n), t
    }(Ct), Hv = function (e) {
        function t(r, o) {
            e.call(this, r, Object.assign(Object.assign({}, o), {type: "array"})), this.validate(o && o.strict ? Ur(this.obj) : !0, this.getValidateMsg("type.array", {
                value: this.obj,
                type: this.type
            }))
        }

        e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
        var n = {empty: {configurable: !0}};
        return t.prototype.length = function (o) {
            return this.obj ? this.validate(this.obj.length === o, this.getValidateMsg("array.length", {
                value: this.obj,
                length: o
            })) : this
        }, t.prototype.minLength = function (o) {
            return this.obj ? this.validate(this.obj.length >= o, this.getValidateMsg("array.minLength", {
                value: this.obj,
                minLength: o
            })) : this
        }, t.prototype.maxLength = function (o) {
            return this.obj ? this.validate(this.obj.length <= o, this.getValidateMsg("array.maxLength", {
                value: this.obj,
                maxLength: o
            })) : this
        }, t.prototype.includes = function (o) {
            var i = this;
            return this.obj ? this.validate(o.every(function (a) {
                return i.obj.indexOf(a) !== -1
            }), this.getValidateMsg("array.includes", {value: this.obj, includes: o})) : this
        }, t.prototype.deepEqual = function (o) {
            return this.obj ? this.validate(ya(this.obj, o), this.getValidateMsg("array.deepEqual", {
                value: this.obj,
                deepEqual: o
            })) : this
        }, n.empty.get = function () {
            return this.validate(Pu(this.obj), this.getValidateMsg("array.empty", {value: this.obj}))
        }, Object.defineProperties(t.prototype, n), t
    }(Ct), qv = function (e) {
        function t(r, o) {
            e.call(this, r, Object.assign(Object.assign({}, o), {type: "object"})), this.validate(o && o.strict ? Mt(this.obj) : !0, this.getValidateMsg("type.object"))
        }

        e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
        var n = {empty: {configurable: !0}};
        return t.prototype.deepEqual = function (o) {
            return this.obj ? this.validate(ya(this.obj, o), this.getValidateMsg("object.deepEqual", {deepEqual: o})) : this
        }, t.prototype.hasKeys = function (o) {
            var i = this;
            return this.obj ? this.validate(o.every(function (a) {
                return i.obj[a]
            }), this.getValidateMsg("object.hasKeys", {keys: o})) : this
        }, n.empty.get = function () {
            return this.validate(Fv(this.obj), this.getValidateMsg("object.empty"))
        }, Object.defineProperties(t.prototype, n), t
    }(Ct), Gv = function (e) {
        function t(r, o) {
            e.call(this, r, Object.assign(Object.assign({}, o), {type: "boolean"})), this.validate(o && o.strict ? jv(this.obj) : !0, this.getValidateMsg("type.boolean"))
        }

        e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
        var n = {true: {configurable: !0}, false: {configurable: !0}};
        return n.true.get = function () {
            return this.validate(this.obj === !0, this.getValidateMsg("boolean.true"))
        }, n.false.get = function () {
            return this.validate(this.obj === !1, this.getValidateMsg("boolean.false"))
        }, Object.defineProperties(t.prototype, n), t
    }(Ct),
    Kv = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    Yv = new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"),
    Xv = /^(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})(\.(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})){3}$/, Jv = function (e) {
        function t(r, o) {
            e.call(this, r, Object.assign(Object.assign({}, o), {type: "type"}))
        }

        e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
        var n = {email: {configurable: !0}, url: {configurable: !0}, ip: {configurable: !0}};
        return n.email.get = function () {
            return this.type = "email", this.validate(this.obj === void 0 || Kv.test(this.obj), this.getValidateMsg("type.email"))
        }, n.url.get = function () {
            return this.type = "url", this.validate(this.obj === void 0 || Yv.test(this.obj), this.getValidateMsg("type.url"))
        }, n.ip.get = function () {
            return this.type = "ip", this.validate(this.obj === void 0 || Xv.test(this.obj), this.getValidateMsg("type.ip"))
        }, Object.defineProperties(t.prototype, n), t
    }(Ct), Zv = function (e) {
        function t(r, o) {
            e.call(this, r, Object.assign(Object.assign({}, o), {type: "custom"}))
        }

        e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
        var n = {validate: {configurable: !0}};
        return n.validate.get = function () {
            var r = this;
            return function (o, i) {
                var a;
                if (o) return a = o(r.obj, r.addError.bind(r)), a && a.then ? (i && a.then(function () {
                    i && i(r.error)
                }, function (s) {
                    console.error(s)
                }), [a, r]) : (i && i(r.error), r.error)
            }
        }, Object.defineProperties(t.prototype, n), t
    }(Ct), Qv = function (t, n) {
        this.string = new Uv(t, n), this.number = new Wv(t, n), this.array = new Hv(t, n), this.object = new qv(t, n), this.boolean = new Gv(t, n), this.type = new Jv(t, n), this.custom = new Zv(t, n)
    }, Iu = function (t, n) {
        n === void 0 && (n = {}), this.schema = t, this.options = n
    };
Iu.prototype.validate = function (t, n) {
    var r = this;
    if (!Mt(t)) return;
    var o = [], i = null;

    function a(s, l) {
        i || (i = {}), (!i[s] || l.requiredError) && (i[s] = l)
    }

    this.schema && Object.keys(this.schema).forEach(function (s) {
        if (Ur(r.schema[s])) for (var l = function (f) {
            var p = r.schema[s][f], _ = p.type, S = p.message;
            if (!_ && !p.validator) throw"You must specify a type to field " + s + "!";
            var w = new Qv(t[s], Object.assign(Object.assign({}, r.options), {message: S, field: s})),
                L = w.type[_] || null;
            if (!L) if (p.validator) {
                L = w.custom.validate(p.validator), Object.prototype.toString.call(L) === "[object Array]" && L[0].then ? o.push({
                    function: L[0],
                    _this: L[1],
                    key: s
                }) : L && a(s, L);
                return
            } else L = w[_];
            if (Object.keys(p).forEach(function (g) {
                p.required && (L = L.isRequired), g !== "message" && L[g] && p[g] && typeof L[g] == "object" && (L = L[g]), L[g] && p[g] !== void 0 && typeof L[g] == "function" && (L = L[g](p[g]))
            }), L.collect(function (g) {
                g && a(s, g)
            }), i) return "break"
        }, u = 0; u < r.schema[s].length; u++) {
            var c = l(u);
            if (c === "break") break
        }
    }), o.length > 0 ? Promise.all(o.map(function (s) {
        return s.function
    })).then(function () {
        o.forEach(function (s) {
            s._this.error && a(s.key, s._this.error)
        }), n && n(i)
    }) : n && n(i)
};
const Mu = Symbol("RowContextInjectionKey"), eg = te({
    name: "Row",
    props: {
        gutter: {type: [Number, Object, Array], default: 0},
        justify: {type: String, default: "start"},
        align: {type: String, default: "start"},
        div: {type: Boolean},
        wrap: {type: Boolean, default: !0}
    },
    setup(e) {
        const {gutter: t, align: n, justify: r, div: o, wrap: i} = Be(e), a = re("row"), s = C(() => ({
                [`${a}`]: !o.value,
                [`${a}-nowrap`]: !i.value,
                [`${a}-align-${n.value}`]: n.value,
                [`${a}-justify-${r.value}`]: r.value
            })), l = C(() => Array.isArray(t.value) ? t.value[0] : t.value),
            u = C(() => Array.isArray(t.value) ? t.value[1] : 0), c = Di(l, 0), f = Di(u, 0), p = C(() => {
                const S = {};
                if ((c.value || f.value) && !o.value) {
                    const w = -c.value / 2, L = -f.value / 2;
                    w && (S.marginLeft = `${w}px`, S.marginRight = `${w}px`), L && (S.marginTop = `${L}px`, S.marginBottom = `${L}px`)
                }
                return S
            }), _ = C(() => [c.value, f.value]);
        return Lt(Mu, xe({gutter: _, div: o})), {classNames: s, styles: p}
    }
});

function tg(e, t, n, r, o, i) {
    return R(), J("div", {class: G(e.classNames), style: Oe(e.styles)}, [ae(e.$slots, "default")], 6)
}

var ng = he(eg, [["render", tg]]);

function rg(e) {
    return C(() => {
        const {val: n, key: r, xs: o, sm: i, md: a, lg: s, xl: l, xxl: u} = e.value;
        if (!o && !i && !a && !s && !l && !u) return n;
        const c = {};
        return Or.forEach(f => {
            const p = e.value[f];
            me(p) ? c[f] = p : De(p) && me(p[r]) && (c[f] = p[r])
        }), c
    })
}

var og = Object.defineProperty, Fs = Object.getOwnPropertySymbols, ig = Object.prototype.hasOwnProperty,
    ag = Object.prototype.propertyIsEnumerable,
    Vs = (e, t, n) => t in e ? og(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
    qo = (e, t) => {
        for (var n in t || (t = {})) ig.call(t, n) && Vs(e, n, t[n]);
        if (Fs) for (var n of Fs(t)) ag.call(t, n) && Vs(e, n, t[n]);
        return e
    };

function sg(e) {
    if (Rt(e) && (["initial", "auto", "none"].includes(e) || /^\d+$/.test(e)) || me(e)) return e;
    if (Rt(e) && /^\d+(px|em|rem|%)$/.test(e)) return `0 0 ${e}`
}

const lg = te({
    name: "Col",
    props: {
        span: {type: Number, default: 24},
        offset: {type: Number},
        order: {type: Number},
        xs: {type: [Number, Object]},
        sm: {type: [Number, Object]},
        md: {type: [Number, Object]},
        lg: {type: [Number, Object]},
        xl: {type: [Number, Object]},
        xxl: {type: [Number, Object]},
        flex: {type: [Number, String]}
    },
    setup(e) {
        const t = re("col"), n = nt(Mu, {}), r = C(() => sg(e.flex)), o = C(() => {
                const {div: f} = n, {span: p, offset: _, order: S, xs: w, sm: L, md: g, lg: $, xl: E, xxl: h} = e, m = {
                    [`${t}`]: !f,
                    [`${t}-order-${S}`]: S,
                    [`${t}-${p}`]: !f && !w && !L && !g && !$ && !E && !h,
                    [`${t}-offset-${_}`]: _ && _ > 0
                }, b = {xs: w, sm: L, md: g, lg: $, xl: E, xxl: h};
                return Object.keys(b).forEach(v => {
                    const N = b[v];
                    N && me(N) ? m[`${t}-${v}-${N}`] = !0 : N && De(N) && (m[`${t}-${v}-${N.span}`] = N.span, m[`${t}-${v}-offset-${N.offset}`] = N.offset, m[`${t}-${v}-order-${N.order}`] = N.order)
                }), m
            }), i = C(() => r.value ? t : o.value), a = C(() => {
                const {gutter: f, div: p} = n, _ = {};
                if (Array.isArray(f) && !p) {
                    const S = f[0] && f[0] / 2 || 0, w = f[1] && f[1] / 2 || 0;
                    S && (_.paddingLeft = `${S}px`, _.paddingRight = `${S}px`), w && (_.paddingTop = `${w}px`, _.paddingBottom = `${w}px`)
                }
                return _
            }), s = C(() => r.value ? {flex: r.value} : {}), l = C(() => Zn(e, Or)),
            u = rg(C(() => qo({val: e.span, key: "span"}, l.value))), c = Di(u, 24, !0);
        return {visible: C(() => !!c.value), classNames: i, styles: C(() => qo(qo({}, a.value), s.value))}
    }
});

function ug(e, t, n, r, o, i) {
    return e.visible ? (R(), J("div", {
        key: 0,
        class: G(e.classNames),
        style: Oe(e.styles)
    }, [ae(e.$slots, "default")], 6)) : le("v-if", !0)
}

var cg = he(lg, [["render", ug]]), fg = Object.defineProperty, xs = Object.getOwnPropertySymbols,
    dg = Object.prototype.hasOwnProperty, hg = Object.prototype.propertyIsEnumerable,
    zs = (e, t, n) => t in e ? fg(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
    Us = (e, t) => {
        for (var n in t || (t = {})) dg.call(t, n) && zs(e, n, t[n]);
        if (xs) for (var n of xs(t)) hg.call(t, n) && zs(e, n, t[n]);
        return e
    };
const pg = te({
    name: "Tooltip",
    components: {Trigger: kr},
    props: {
        popupVisible: {type: Boolean, default: void 0},
        defaultPopupVisible: {type: Boolean, default: !1},
        content: String,
        position: {type: String, default: "top"},
        mini: {type: Boolean, default: !1},
        backgroundColor: {type: String},
        contentClass: {type: [String, Array, Object]},
        contentStyle: {type: Object},
        arrowClass: {type: [String, Array, Object]},
        arrowStyle: {type: Object},
        popupContainer: {type: [String, Object]}
    },
    emits: {"update:popupVisible": e => !0, popupVisibleChange: e => !0},
    setup(e, {emit: t}) {
        const n = re("tooltip"), r = U(e.defaultPopupVisible), o = C(() => {
            var c;
            return (c = e.popupVisible) != null ? c : r.value
        }), i = c => {
            r.value = c, t("update:popupVisible", c), t("popupVisibleChange", c)
        }, a = C(() => [`${n}-content`, e.contentClass, {[`${n}-mini`]: e.mini}]), s = C(() => {
            if (e.backgroundColor || e.contentStyle) return Us({backgroundColor: e.backgroundColor}, e.contentStyle)
        }), l = C(() => [`${n}-popup-arrow`, e.arrowClass]), u = C(() => {
            if (e.backgroundColor || e.arrowStyle) return Us({backgroundColor: e.backgroundColor}, e.arrowStyle)
        });
        return {
            prefixCls: n,
            computedPopupVisible: o,
            contentCls: a,
            computedContentStyle: s,
            arrowCls: l,
            computedArrowStyle: u,
            handlePopupVisibleChange: i
        }
    }
});

function mg(e, t, n, r, o, i) {
    const a = ie("Trigger");
    return R(), fe(a, {
        class: G(e.prefixCls),
        trigger: "hover",
        position: e.position,
        "popup-visible": e.computedPopupVisible,
        "popup-offset": 10,
        "show-arrow": "",
        "content-class": e.contentCls,
        "content-style": e.computedContentStyle,
        "arrow-class": e.arrowCls,
        "arrow-style": e.computedArrowStyle,
        "popup-container": e.popupContainer,
        "animation-name": "zoom-in-fade-out",
        "auto-fit-transform-origin": "",
        role: "tooltip",
        onPopupVisibleChange: e.handlePopupVisibleChange
    }, {
        content: Se(() => [ae(e.$slots, "content", {}, () => [Qe(Ue(e.content), 1)])]),
        default: Se(() => [ae(e.$slots, "default")]),
        _: 3
    }, 8, ["class", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"])
}

var Go = he(pg, [["render", mg]]);
const Ru = Object.assign(Go, {
        install: (e, t) => {
            Ve(e, t);
            const n = Fe(t);
            e.component(n + Go.name, Go)
        }
    }), vg = te({
        name: "IconQuestionCircle",
        props: {
            size: {type: [Number, String]},
            strokeWidth: {type: Number, default: 4},
            strokeLinecap: {type: String, default: "butt", validator: e => ["butt", "round", "square"].includes(e)},
            strokeLinejoin: {
                type: String,
                default: "miter",
                validator: e => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
            },
            rotate: Number,
            spin: Boolean
        },
        emits: {click: e => !0},
        setup(e, {emit: t}) {
            const n = re("icon"), r = C(() => [n, `${n}-question-circle`, {[`${n}-spin`]: e.spin}]), o = C(() => {
                const a = {};
                return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a
            });
            return {
                cls: r, innerStyle: o, onClick: a => {
                    t("click", a)
                }
            }
        }
    }), gg = ["stroke-width", "stroke-linecap", "stroke-linejoin"],
    yg = de("path", {d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z"}, null, -1),
    bg = de("path", {d: "M24.006 31v4.008m0-6.008L24 28c0-3 3-4 4.78-6.402C30.558 19.195 28.288 15 23.987 15c-4.014 0-5.382 2.548-5.388 4.514v.465"}, null, -1),
    _g = [yg, bg];

function Cg(e, t, n, r, o, i) {
    return R(), J("svg", {
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "currentColor",
        class: G(e.cls),
        style: Oe(e.innerStyle),
        "stroke-width": e.strokeWidth,
        "stroke-linecap": e.strokeLinecap,
        "stroke-linejoin": e.strokeLinejoin,
        onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
    }, _g, 14, gg)
}

var Ko = he(vg, [["render", Cg]]);
const Sg = Object.assign(Ko, {
        install: (e, t) => {
            var n;
            const r = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
            e.component(r + Ko.name, Ko)
        }
    }), wg = te({
        name: "FormItemLabel",
        components: {ResizeObserver: zn, Tooltip: Ru, IconQuestionCircle: Sg},
        props: {
            required: {type: Boolean, default: !1},
            showColon: {type: Boolean, default: !1},
            component: {type: String, default: "label"},
            asteriskPosition: {type: String, default: "start"},
            tooltip: {type: String},
            attrs: Object
        },
        setup() {
            const e = re("form-item-label"), t = nt(ma, void 0), n = Yt(), r = U(), o = () => {
                r.value && me(r.value.offsetWidth) && (t == null || t.setLabelWidth(r.value.offsetWidth, n == null ? void 0 : n.uid))
            };
            return We(() => {
                r.value && me(r.value.offsetWidth) && (t == null || t.setLabelWidth(r.value.offsetWidth, n == null ? void 0 : n.uid))
            }), Dt(() => {
                t == null || t.removeLabelWidth(n == null ? void 0 : n.uid)
            }), {prefixCls: e, labelRef: r, handleResize: o}
        }
    }), Eg = de("svg", {
        fill: "currentColor",
        viewBox: "0 0 1024 1024",
        width: "1em",
        height: "1em"
    }, [de("path", {d: "M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z"})], -1),
    $g = [Eg], kg = de("svg", {
        fill: "currentColor",
        viewBox: "0 0 1024 1024",
        width: "1em",
        height: "1em"
    }, [de("path", {d: "M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z"})], -1),
    Og = [kg];

function Lg(e, t, n, r, o, i) {
    const a = ie("icon-question-circle"), s = ie("Tooltip"), l = ie("ResizeObserver");
    return R(), fe(l, {onResize: e.handleResize}, {
        default: Se(() => [(R(), fe(gn(e.component), Re({
            ref: "labelRef",
            class: e.prefixCls
        }, e.attrs), {
            default: Se(() => [e.required && e.asteriskPosition === "start" ? (R(), J("strong", {
                key: 0,
                class: G(`${e.prefixCls}-required-symbol`)
            }, $g, 2)) : le("v-if", !0), ae(e.$slots, "default"), e.tooltip ? (R(), fe(s, {
                key: 1,
                content: e.tooltip
            }, {
                default: Se(() => [V(a, {class: G(`${e.prefixCls}-tooltip`)}, null, 8, ["class"])]),
                _: 1
            }, 8, ["content"])) : le("v-if", !0), e.required && e.asteriskPosition === "end" ? (R(), J("strong", {
                key: 2,
                class: G(`${e.prefixCls}-required-symbol`)
            }, Og, 2)) : le("v-if", !0), Qe(" " + Ue(e.showColon ? ":" : ""), 1)]), _: 3
        }, 16, ["class"]))]), _: 3
    }, 8, ["onResize"])
}

var Tg = he(wg, [["render", Lg]]);
const Ag = te({
    name: "FormItemMessage", props: {error: Array, help: String}, setup() {
        return {prefixCls: re("form-item-message")}
    }
});

function Ng(e, t, n, r, o, i) {
    return e.help || e.$slots.help ? (R(), fe(an, {
        key: 0,
        name: "form-blink",
        appear: ""
    }, {
        default: Se(() => [de("div", {class: G([e.prefixCls, `${e.prefixCls}-help`])}, [ae(e.$slots, "help", {}, () => [Qe(Ue(e.help), 1)])], 2)]),
        _: 3
    })) : (R(!0), J(ot, {key: 1}, Gn(e.error, a => (R(), fe(an, {
        key: a,
        name: "form-blink",
        appear: ""
    }, {default: Se(() => [de("div", {role: "alert", class: G([e.prefixCls])}, Ue(a), 3)]), _: 2}, 1024))), 128))
}

var Pg = he(Ag, [["render", Ng]]);
const Ws = ["success", "warning", "error", "validating"], Ig = e => {
    let t = "";
    for (const n of Object.keys(e)) {
        const r = e[n];
        r && (!t || Ws.indexOf(r) > Ws.indexOf(t)) && (t = e[n])
    }
    return t
}, Mg = e => {
    const t = [];
    for (const n of Object.keys(e)) {
        const r = e[n];
        r && t.push(r)
    }
    return t
};
var Rg = Object.defineProperty, Lr = Object.getOwnPropertySymbols, Bu = Object.prototype.hasOwnProperty,
    Du = Object.prototype.propertyIsEnumerable,
    Hs = (e, t, n) => t in e ? Rg(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
    qs = (e, t) => {
        for (var n in t || (t = {})) Bu.call(t, n) && Hs(e, n, t[n]);
        if (Lr) for (var n of Lr(t)) Du.call(t, n) && Hs(e, n, t[n]);
        return e
    }, Bg = (e, t) => {
        var n = {};
        for (var r in e) Bu.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && Lr) for (var r of Lr(e)) t.indexOf(r) < 0 && Du.call(e, r) && (n[r] = e[r]);
        return n
    };
const Dg = te({
    name: "FormItem",
    components: {ArcoRow: ng, ArcoCol: cg, FormItemLabel: Tg, FormItemMessage: Pg},
    props: {
        field: {type: String, default: ""},
        label: String,
        tooltip: {type: String},
        showColon: {type: Boolean, default: !1},
        noStyle: {type: Boolean, default: !1},
        disabled: {type: Boolean, default: void 0},
        help: String,
        extra: String,
        required: {type: Boolean, default: !1},
        asteriskPosition: {type: String, default: "start"},
        rules: {type: [Object, Array]},
        validateStatus: {type: String},
        validateTrigger: {type: [String, Array], default: "change"},
        labelColProps: Object,
        wrapperColProps: Object,
        hideLabel: {type: Boolean, default: !1},
        hideAsterisk: {type: Boolean, default: !1},
        labelColStyle: Object,
        wrapperColStyle: Object,
        rowProps: Object,
        rowClass: [String, Array, Object],
        contentClass: [String, Array, Object],
        contentFlex: {type: Boolean, default: !0},
        mergeProps: {type: [Boolean, Function], default: !0},
        labelColFlex: {type: [Number, String]},
        feedback: {type: Boolean, default: !1},
        labelComponent: {type: String, default: "label"},
        labelAttrs: Object
    },
    setup(e) {
        const t = re("form-item"), {field: n} = Be(e), r = nt(ma, {}), {autoLabelWidth: o, layout: i} = Be(r),
            a = C(() => {
                var B;
                const I = qs({}, (B = e.labelColProps) != null ? B : r.labelColProps);
                return e.labelColFlex ? I.flex = e.labelColFlex : r.autoLabelWidth && (I.flex = `${r.maxLabelWidth}px`), I
            }), s = C(() => {
                var B;
                const I = qs({}, (B = e.wrapperColProps) != null ? B : r.wrapperColProps);
                return (e.labelColFlex || r.autoLabelWidth) && (I.flex = "auto"), I
            }), l = C(() => {
                var B;
                return (B = e.labelColStyle) != null ? B : r.labelColStyle
            }), u = C(() => {
                var B;
                return (B = e.wrapperColStyle) != null ? B : r.wrapperColStyle
            }), c = Is(r.model, e.field), f = xe({}), p = xe({}), _ = C(() => Ig(f)), S = C(() => Mg(p)), w = U(!1),
            L = C(() => Is(r.model, e.field)), g = C(() => {
                var B;
                return !!((B = e.disabled) != null ? B : r != null && r.disabled)
            }), $ = C(() => {
                var B;
                return (B = e.validateStatus) != null ? B : _.value
            }), E = C(() => $.value === "error"), h = C(() => {
                var B, I, Y;
                const Q = [].concat((Y = (I = e.rules) != null ? I : (B = r == null ? void 0 : r.rules) == null ? void 0 : B[e.field]) != null ? Y : []),
                    ve = Q.some(se => se.required);
                return e.required && !ve ? [{required: !0}].concat(Q) : Q
            }), m = C(() => h.value.some(B => B.required)), b = e.noStyle ? nt(Mi, void 0) : void 0,
            v = (B, {status: I, message: Y}) => {
                f[B] = I, p[B] = Y, e.noStyle && (b == null || b.updateValidateState(B, {status: I, message: Y}))
            }, N = C(() => e.feedback && $.value ? $.value : void 0), T = () => {
                if (w.value) return Promise.resolve();
                const B = h.value;
                if (!n.value || B.length === 0) return _.value && Z(), Promise.resolve();
                const I = n.value, Y = L.value;
                v(I, {status: "", message: ""});
                const Q = new Iu({
                    [I]: B.map(ve => {
                        var se = Bg(ve, []);
                        return !se.type && !se.validator && (se.type = "string"), se
                    })
                }, {ignoreEmptyString: !0});
                return new Promise(ve => {
                    Q.validate({[I]: Y}, se => {
                        var ge;
                        const Le = !!(se != null && se[I]);
                        v(I, {
                            status: Le ? "error" : "",
                            message: (ge = se == null ? void 0 : se[I].message) != null ? ge : ""
                        });
                        const Ne = Le ? {
                            label: e.label,
                            field: n.value,
                            value: se[I].value,
                            type: se[I].type,
                            isRequiredError: !!se[I].requiredError,
                            message: se[I].message
                        } : void 0;
                        ve(Ne)
                    })
                })
            }, A = C(() => [].concat(e.validateTrigger)), j = C(() => A.value.reduce((B, I) => {
                switch (I) {
                    case"change":
                        return B.onChange = () => {
                            T()
                        }, B;
                    case"input":
                        return B.onInput = () => {
                            Xe(() => {
                                T()
                            })
                        }, B;
                    case"focus":
                        return B.onFocus = () => {
                            T()
                        }, B;
                    case"blur":
                        return B.onBlur = () => {
                            T()
                        }, B;
                    default:
                        return B
                }
            }, {}));
        Lt(Mi, xe({
            eventHandlers: j,
            size: r && Sr(r, "size"),
            disabled: g,
            error: E,
            feedback: N,
            updateValidateState: v
        }));
        const Z = () => {
            n.value && v(n.value, {status: "", message: ""})
        }, P = xe({
            field: n, disabled: g, error: E, validate: T, clearValidate: Z, resetField: () => {
                Z(), w.value = !0, r != null && r.model && n.value && Ms(r.model, n.value, c), Xe(() => {
                    w.value = !1
                })
            }, setField: B => {
                var I, Y;
                n.value && (w.value = !0, "value" in B && (r != null && r.model) && n.value && Ms(r.model, n.value, B.value), (B.status || B.message) && v(n.value, {
                    status: (I = B.status) != null ? I : "",
                    message: (Y = B.message) != null ? Y : ""
                }), Xe(() => {
                    w.value = !1
                }))
            }
        });
        We(() => {
            var B;
            P.field && ((B = r.addField) == null || B.call(r, P))
        }), Dt(() => {
            var B;
            P.field && ((B = r.removeField) == null || B.call(r, P))
        });
        const F = C(() => [t, `${t}-layout-${r.layout}`, {
            [`${t}-error`]: E.value,
            [`${t}-status-${$.value}`]: !!$.value
        }, e.rowClass]), x = C(() => [`${t}-label-col`, {
            [`${t}-label-col-left`]: r.labelAlign === "left",
            [`${t}-label-col-flex`]: r.autoLabelWidth || e.labelColFlex
        }]), K = C(() => [`${t}-wrapper-col`, {[`${t}-wrapper-col-flex`]: !s.value}]);
        return {
            prefixCls: t,
            cls: F,
            isRequired: m,
            isError: E,
            finalMessage: S,
            mergedLabelCol: a,
            mergedWrapperCol: s,
            labelColCls: x,
            autoLabelWidth: o,
            layout: i,
            mergedLabelStyle: l,
            wrapperColCls: K,
            mergedWrapperStyle: u
        }
    }
});

function jg(e, t, n, r, o, i) {
    var a;
    const s = ie("FormItemLabel"), l = ie("ArcoCol"), u = ie("FormItemMessage"), c = ie("ArcoRow");
    return e.noStyle ? ae(e.$slots, "default", {key: 0}) : (R(), fe(c, Re({
        key: 1,
        class: [e.cls, {[`${e.prefixCls}-has-help`]: !!((a = e.$slots.help) != null ? a : e.help)}],
        wrap: !(e.labelColFlex || e.autoLabelWidth),
        div: e.layout !== "horizontal" || e.hideLabel
    }, e.rowProps), {
        default: Se(() => [e.hideLabel ? le("v-if", !0) : (R(), fe(l, Re({
            key: 0,
            class: e.labelColCls,
            style: e.mergedLabelStyle
        }, e.mergedLabelCol), {
            default: Se(() => [V(s, {
                required: e.hideAsterisk ? !1 : e.isRequired,
                "show-colon": e.showColon,
                "asterisk-position": e.asteriskPosition,
                component: e.labelComponent,
                attrs: e.labelAttrs,
                tooltip: e.tooltip
            }, {
                default: Se(() => [e.$slots.label || e.label ? ae(e.$slots, "label", {key: 0}, () => [Qe(Ue(e.label), 1)]) : le("v-if", !0)]),
                _: 3
            }, 8, ["required", "show-colon", "asterisk-position", "component", "attrs", "tooltip"])]), _: 3
        }, 16, ["class", "style"])), V(l, Re({
            class: e.wrapperColCls,
            style: e.mergedWrapperStyle
        }, e.mergedWrapperCol), {
            default: Se(() => [de("div", {class: G(`${e.prefixCls}-content-wrapper`)}, [de("div", {class: G([`${e.prefixCls}-content`, {[`${e.prefixCls}-content-flex`]: e.contentFlex}, e.contentClass])}, [ae(e.$slots, "default")], 2)], 2), e.isError || e.$slots.help || e.help ? (R(), fe(u, {
                key: 0,
                error: e.finalMessage,
                help: e.help
            }, tu({_: 2}, [e.$slots.help ? {
                name: "help",
                fn: Se(() => [ae(e.$slots, "help")])
            } : void 0]), 1032, ["error", "help"])) : le("v-if", !0), e.$slots.extra || e.extra ? (R(), J("div", {
                key: 1,
                class: G(`${e.prefixCls}-extra`)
            }, [ae(e.$slots, "extra", {}, () => [Qe(Ue(e.extra), 1)])], 2)) : le("v-if", !0)]), _: 3
        }, 16, ["class", "style"])]), _: 3
    }, 16, ["class", "wrap", "div"]))
}

var Yo = he(Dg, [["render", jg]]);
const GS = Object.assign(Ho, {
    Item: Yo, install: (e, t) => {
        Ve(e, t);
        const n = Fe(t);
        e.component(n + Ho.name, Ho), e.component(n + Yo.name, Yo)
    }
});

function ba(e, t) {
    return t === void 0 && (t = 15), +parseFloat(Number(e).toPrecision(t))
}

function kt(e) {
    var t = e.toString().split(/[eE]/), n = (t[0].split(".")[1] || "").length - +(t[1] || 0);
    return n > 0 ? n : 0
}

function Wn(e) {
    if (e.toString().indexOf("e") === -1) return Number(e.toString().replace(".", ""));
    var t = kt(e);
    return t > 0 ? ba(Number(e) * Math.pow(10, t)) : Number(e)
}

function Vi(e) {
    Fu && (e > Number.MAX_SAFE_INTEGER || e < Number.MIN_SAFE_INTEGER) && console.warn(e + " is beyond boundary when transfer to integer, the results may not be accurate")
}

function Hr(e) {
    return function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var r = t[0], o = t.slice(1);
        return o.reduce(function (i, a) {
            return e(i, a)
        }, r)
    }
}

var Kt = Hr(function (e, t) {
    var n = Wn(e), r = Wn(t), o = kt(e) + kt(t), i = n * r;
    return Vi(i), i / Math.pow(10, o)
}), Fg = Hr(function (e, t) {
    var n = Math.pow(10, Math.max(kt(e), kt(t)));
    return (Kt(e, n) + Kt(t, n)) / n
}), Vg = Hr(function (e, t) {
    var n = Math.pow(10, Math.max(kt(e), kt(t)));
    return (Kt(e, n) - Kt(t, n)) / n
}), ju = Hr(function (e, t) {
    var n = Wn(e), r = Wn(t);
    return Vi(n), Vi(r), Kt(n / r, ba(Math.pow(10, kt(t) - kt(e))))
});

function xg(e, t) {
    var n = Math.pow(10, t), r = ju(Math.round(Math.abs(Kt(e, n))), n);
    return e < 0 && r !== 0 && (r = Kt(r, -1)), r
}

var Fu = !0;

function zg(e) {
    e === void 0 && (e = !0), Fu = e
}

var sn = {
    strip: ba,
    plus: Fg,
    minus: Vg,
    times: Kt,
    divide: ju,
    round: xg,
    digitLength: kt,
    float2Fixed: Wn,
    enableBoundaryChecking: zg
};
const Ug = te({
        name: "IconPlus",
        props: {
            size: {type: [Number, String]},
            strokeWidth: {type: Number, default: 4},
            strokeLinecap: {type: String, default: "butt", validator: e => ["butt", "round", "square"].includes(e)},
            strokeLinejoin: {
                type: String,
                default: "miter",
                validator: e => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
            },
            rotate: Number,
            spin: Boolean
        },
        emits: {click: e => !0},
        setup(e, {emit: t}) {
            const n = re("icon"), r = C(() => [n, `${n}-plus`, {[`${n}-spin`]: e.spin}]), o = C(() => {
                const a = {};
                return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a
            });
            return {
                cls: r, innerStyle: o, onClick: a => {
                    t("click", a)
                }
            }
        }
    }), Wg = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Hg = de("path", {d: "M5 24h38M24 5v38"}, null, -1),
    qg = [Hg];

function Gg(e, t, n, r, o, i) {
    return R(), J("svg", {
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "currentColor",
        class: G(e.cls),
        style: Oe(e.innerStyle),
        "stroke-width": e.strokeWidth,
        "stroke-linecap": e.strokeLinecap,
        "stroke-linejoin": e.strokeLinejoin,
        onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
    }, qg, 14, Wg)
}

var Xo = he(Ug, [["render", Gg]]);
const Kg = Object.assign(Xo, {
    install: (e, t) => {
        var n;
        const r = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
        e.component(r + Xo.name, Xo)
    }
}), Yg = te({
    name: "IconMinus",
    props: {
        size: {type: [Number, String]},
        strokeWidth: {type: Number, default: 4},
        strokeLinecap: {type: String, default: "butt", validator: e => ["butt", "round", "square"].includes(e)},
        strokeLinejoin: {
            type: String,
            default: "miter",
            validator: e => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
        },
        rotate: Number,
        spin: Boolean
    },
    emits: {click: e => !0},
    setup(e, {emit: t}) {
        const n = re("icon"), r = C(() => [n, `${n}-minus`, {[`${n}-spin`]: e.spin}]), o = C(() => {
            const a = {};
            return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a
        });
        return {
            cls: r, innerStyle: o, onClick: a => {
                t("click", a)
            }
        }
    }
}), Xg = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Jg = de("path", {d: "M5 24h38"}, null, -1), Zg = [Jg];

function Qg(e, t, n, r, o, i) {
    return R(), J("svg", {
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "currentColor",
        class: G(e.cls),
        style: Oe(e.innerStyle),
        "stroke-width": e.strokeWidth,
        "stroke-linecap": e.strokeLinecap,
        "stroke-linejoin": e.strokeLinejoin,
        onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
    }, Zg, 14, Xg)
}

var Jo = he(Yg, [["render", Qg]]);
const ey = Object.assign(Jo, {
    install: (e, t) => {
        var n;
        const r = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
        e.component(r + Jo.name, Jo)
    }
}), ty = 150;
sn.enableBoundaryChecking(!1);
var Zo = te({
    name: "InputNumber",
    props: {
        modelValue: Number,
        defaultValue: Number,
        mode: {type: String, default: "embed"},
        precision: Number,
        step: {type: Number, default: 1},
        disabled: {type: Boolean, default: !1},
        error: {type: Boolean, default: !1},
        max: {type: Number, default: 1 / 0},
        min: {type: Number, default: -1 / 0},
        formatter: {type: Function},
        parser: {type: Function},
        placeholder: String,
        hideButton: {type: Boolean, default: !1},
        size: {type: String},
        allowClear: {type: Boolean, default: !1},
        modelEvent: {type: String, default: "change"},
        readOnly: {type: Boolean, default: !1}
    },
    emits: {
        "update:modelValue": e => !0,
        change: (e, t) => !0,
        focus: e => !0,
        blur: e => !0,
        clear: e => !0,
        input: (e, t, n) => !0
    },
    setup(e, {emit: t, slots: n}) {
        var r;
        const {size: o, disabled: i} = Be(e), a = re("input-number"), s = U(), {
            mergedSize: l,
            mergedDisabled: u,
            eventHandlers: c
        } = _t({size: o, disabled: i}), {mergedSize: f} = Ft(l), p = C(() => {
            if (me(e.precision)) {
                const I = `${e.step}`.split(".")[1], Y = I && I.length || 0;
                return Math.max(Y, e.precision)
            }
        }), _ = I => {
            var Y, Q;
            if (!me(I)) return "";
            const ve = p.value ? I.toFixed(p.value) : String(I);
            return (Q = (Y = e.formatter) == null ? void 0 : Y.call(e, ve)) != null ? Q : ve
        }, S = U(_((r = e.modelValue) != null ? r : e.defaultValue)), w = C(() => {
            var I, Y;
            if (!S.value) return;
            const Q = Number((Y = (I = e.parser) == null ? void 0 : I.call(e, S.value)) != null ? Y : S.value);
            return Number.isNaN(Q) ? void 0 : Q
        }), L = U(me(w.value) && w.value <= e.min), g = U(me(w.value) && w.value >= e.max);
        let $ = 0;
        const E = () => {
            $ && (window.clearTimeout($), $ = 0)
        }, h = I => {
            if (!ht(I)) return me(e.min) && I < e.min && (I = e.min), me(e.max) && I > e.max && (I = e.max), me(p.value) ? sn.round(I, p.value) : I
        }, m = I => {
            let Y = !1, Q = !1;
            me(I) && (I <= e.min && (Y = !0), I >= e.max && (Q = !0)), g.value !== Q && (g.value = Q), L.value !== Y && (L.value = Y)
        }, b = () => {
            const I = h(w.value), Y = _(I);
            (I !== w.value || S.value !== Y) && (S.value = Y), t("update:modelValue", I)
        };
        Pe(() => e.min, I => {
            const Y = me(w.value) && w.value <= I;
            L.value !== Y && (L.value = Y), me(w.value) && w.value < I && b()
        }), Pe(() => e.max, I => {
            const Y = me(w.value) && w.value >= I;
            g.value !== Y && (g.value = Y), me(w.value) && w.value > I && b()
        });
        const v = (I, Y) => {
            if (u.value || I === "plus" && g.value || I === "minus" && L.value) return;
            let Q;
            me(w.value) ? Q = h(sn[I](w.value, e.step)) : Q = e.min === -1 / 0 ? 0 : e.min, S.value = _(Q), m(Q), t("update:modelValue", Q), t("change", Q, Y)
        }, N = (I, Y, Q = !1) => {
            var ve;
            I.preventDefault(), (ve = s.value) == null || ve.focus(), v(Y, I), Q && ($ = window.setTimeout(() => I.target.dispatchEvent(I), ty))
        }, T = (I, Y) => {
            var Q, ve, se, ge;
            I = I.trim().replace(/。/g, "."), I = (ve = (Q = e.parser) == null ? void 0 : Q.call(e, I)) != null ? ve : I, (me(Number(I)) || /^(\.|-)$/.test(I)) && (S.value = (ge = (se = e.formatter) == null ? void 0 : se.call(e, I)) != null ? ge : I, m(w.value), e.modelEvent === "input" && t("update:modelValue", w.value), t("input", w.value, S.value, Y))
        }, A = I => {
            t("focus", I)
        }, j = (I, Y) => {
            const Q = h(w.value), ve = _(Q);
            (Q !== w.value || S.value !== ve) && (S.value = ve, m(Q)), Xe(() => {
                me(e.modelValue) && e.modelValue !== Q && (S.value = _(e.modelValue), m(e.modelValue))
            }), t("update:modelValue", Q), t("change", Q, Y)
        }, Z = I => {
            t("blur", I)
        }, W = I => {
            var Y, Q;
            S.value = "", t("update:modelValue", void 0), t("change", void 0, I), (Q = (Y = c.value) == null ? void 0 : Y.onChange) == null || Q.call(Y, I), t("clear", I)
        }, k = Ou(new Map([[en.ARROW_UP, I => {
            I.preventDefault(), !e.readOnly && v("plus", I)
        }], [en.ARROW_DOWN, I => {
            I.preventDefault(), !e.readOnly && v("minus", I)
        }]]));
        Pe(() => e.modelValue, I => {
            I !== w.value && (S.value = _(I), m(I))
        });
        const P = () => {
                var I;
                return e.readOnly ? null : V(ot, null, [(I = n.suffix) == null ? void 0 : I.call(n), V("div", {class: `${a}-step`}, [V("button", {
                    class: [`${a}-step-button`, {[`${a}-step-button-disabled`]: u.value || g.value}],
                    type: "button",
                    tabindex: "-1",
                    disabled: u.value || g.value,
                    onMousedown: Y => N(Y, "plus", !0),
                    onMouseup: E,
                    onMouseleave: E
                }, [V(hv, null, null)]), V("button", {
                    class: [`${a}-step-button`, {[`${a}-step-button-disabled`]: u.value || L.value}],
                    type: "button",
                    tabindex: "-1",
                    disabled: u.value || L.value,
                    onMousedown: Y => N(Y, "minus", !0),
                    onMouseup: E,
                    onMouseleave: E
                }, [V(Au, null, null)])])])
            }, F = C(() => [a, `${a}-mode-${e.mode}`, `${a}-size-${f.value}`, {[`${a}-readonly`]: e.readOnly}]),
            x = () => V($r, {
                size: f.value,
                tabindex: "-1",
                class: `${a}-step-button`,
                disabled: u.value || L.value,
                onMousedown: I => N(I, "minus", !0),
                onMouseup: E,
                onMouseleave: E
            }, {icon: () => V(ey, null, null)}), K = () => V($r, {
                size: f.value,
                tabindex: "-1",
                class: `${a}-step-button`,
                disabled: u.value || g.value,
                onMousedown: I => N(I, "plus", !0),
                onMouseup: E,
                onMouseleave: E
            }, {icon: () => V(Kg, null, null)});
        return {
            inputRef: s, render: () => {
                const I = e.mode === "embed" ? {
                    prepend: n.prepend,
                    prefix: n.prefix,
                    suffix: e.hideButton ? n.suffix : P,
                    append: n.append
                } : {prepend: x, prefix: n.prefix, suffix: n.suffix, append: K};
                return V(Ah, {
                    key: `__arco__${e.mode}`,
                    ref: s,
                    class: F.value,
                    type: "text",
                    allowClear: e.allowClear,
                    size: f.value,
                    modelValue: S.value,
                    placeholder: e.placeholder,
                    disabled: u.value,
                    readonly: e.readOnly,
                    error: e.error,
                    inputAttrs: {
                        role: "spinbutton",
                        "aria-valuemax": e.max,
                        "aria-valuemin": e.min,
                        "aria-valuenow": S.value
                    },
                    onInput: T,
                    onFocus: A,
                    onBlur: Z,
                    onClear: W,
                    onChange: j,
                    onKeydown: k
                }, I)
            }
        }
    },
    methods: {
        focus() {
            var e;
            (e = this.inputRef) == null || e.focus()
        }, blur() {
            var e;
            (e = this.inputRef) == null || e.blur()
        }
    },
    render() {
        return this.render()
    }
});
const ny = Object.assign(Zo, {
        install: (e, t) => {
            Ve(e, t);
            const n = Fe(t);
            e.component(n + Zo.name, Zo)
        }
    }),
    ry = ["border-width", "box-sizing", "font-family", "font-weight", "font-size", "font-variant", "letter-spacing", "line-height", "padding-top", "padding-bottom", "padding-left", "padding-right", "text-indent", "text-rendering", "text-transform", "white-space", "overflow-wrap", "width"],
    oy = e => {
        const t = {};
        return ry.forEach(n => {
            t[n] = e.getPropertyValue(n)
        }), t
    }, iy = te({
        name: "Textarea",
        components: {ResizeObserver: vu, IconHover: ct, IconClose: Tt},
        inheritAttrs: !1,
        props: {
            modelValue: String,
            defaultValue: {type: String, default: ""},
            placeholder: String,
            disabled: {type: Boolean, default: !1},
            error: {type: Boolean, default: !1},
            maxLength: {type: [Number, Object], default: 0},
            showWordLimit: {type: Boolean, default: !1},
            allowClear: {type: Boolean, default: !1},
            autoSize: {type: [Boolean, Object], default: !1},
            wordLength: {type: Function},
            wordSlice: {type: Function}
        },
        emits: {
            "update:modelValue": e => !0,
            input: (e, t) => !0,
            change: (e, t) => !0,
            clear: e => !0,
            focus: e => !0,
            blur: e => !0
        },
        setup(e, {emit: t, attrs: n}) {
            const {disabled: r, error: o, modelValue: i} = Be(e), a = re("textarea"), {
                mergedDisabled: s,
                mergedError: l,
                eventHandlers: u
            } = _t({disabled: r, error: o}), c = U(), f = U(), p = U(), _ = U(), S = U(e.defaultValue), w = C(() => {
                var y;
                return (y = i.value) != null ? y : S.value
            }), [L, g] = yu(c);
            Pe(i, y => {
                (ht(y) || Kn(y)) && (S.value = "")
            });
            const $ = C(() => De(e.maxLength) && !!e.maxLength.errorOnly),
                E = C(() => De(e.maxLength) ? e.maxLength.length : e.maxLength), h = y => {
                    var d;
                    return qe(e.wordLength) ? e.wordLength(y) : (d = y.length) != null ? d : 0
                }, m = C(() => h(w.value)), b = C(() => l.value || !!(E.value && $.value && m.value > E.value)), v = U(!1),
                N = U(!1), T = C(() => e.allowClear && !s.value && w.value), A = U(!1), j = U(""), Z = () => {
                    L(), Xe(() => {
                        c.value && w.value !== c.value.value && (c.value.value = w.value, g())
                    })
                }, W = (y, d = !0) => {
                    var O, q;
                    E.value && !$.value && h(y) > E.value && (y = (q = (O = e.wordSlice) == null ? void 0 : O.call(e, y, E.value)) != null ? q : y.slice(0, E.value)), S.value = y, d && t("update:modelValue", y), Z()
                };
            let k = w.value;
            const P = (y, d) => {
                var O, q;
                y !== k && (k = y, t("change", y, d), (q = (O = u.value) == null ? void 0 : O.onChange) == null || q.call(O, d))
            }, F = y => {
                var d, O;
                N.value = !0, k = w.value, t("focus", y), (O = (d = u.value) == null ? void 0 : d.onFocus) == null || O.call(d, y)
            }, x = y => {
                var d, O;
                N.value = !1, t("blur", y), (O = (d = u.value) == null ? void 0 : d.onBlur) == null || O.call(d, y), P(w.value, y)
            }, K = y => {
                var d, O;
                const {value: q} = y.target;
                if (y.type === "compositionend") {
                    if (A.value = !1, j.value = "", E.value && !$.value && w.value.length >= E.value && h(q) > E.value) {
                        Z();
                        return
                    }
                    t("input", q, y), W(q), (O = (d = u.value) == null ? void 0 : d.onInput) == null || O.call(d, y)
                } else A.value = !0
            }, B = y => {
                var d, O;
                const {value: q} = y.target;
                if (A.value) j.value = q; else {
                    if (E.value && !$.value && w.value.length >= E.value && h(q) > E.value && y.inputType === "insertText") {
                        Z();
                        return
                    }
                    t("input", q, y), W(q), (O = (d = u.value) == null ? void 0 : d.onInput) == null || O.call(d, y)
                }
            }, I = y => {
                W(""), P("", y), t("clear", y)
            };
            Pe(i, y => {
                y !== w.value && W(y ?? "", !1)
            });
            const Y = y => kn(n, Gt), Q = y => Zn(n, Gt), ve = C(() => [`${a}-wrapper`, {
                [`${a}-focus`]: N.value,
                [`${a}-disabled`]: s.value,
                [`${a}-error`]: b.value,
                [`${a}-scroll`]: v.value
            }]);
            let se;
            const ge = U(0), Le = U(0),
                Ne = C(() => !De(e.autoSize) || !e.autoSize.minRows ? 0 : e.autoSize.minRows * ge.value + Le.value),
                we = C(() => !De(e.autoSize) || !e.autoSize.maxRows ? 0 : e.autoSize.maxRows * ge.value + Le.value),
                $e = () => {
                    const y = oy(se);
                    ge.value = Number.parseInt(y["line-height"] || 0, 10), Le.value = Number.parseInt(y["border-width"] || 0, 10) * 2 + Number.parseInt(y["padding-top"] || 0, 10) + Number.parseInt(y["padding-bottom"] || 0, 10), _.value = y, Xe(() => {
                        var d;
                        const O = (d = p.value) == null ? void 0 : d.offsetHeight;
                        let q = O ?? 0, ne = "hidden";
                        Ne.value && q < Ne.value && (q = Ne.value), we.value && q > we.value && (q = we.value, ne = "auto"), f.value = {
                            height: `${q}px`,
                            resize: "none",
                            overflow: ne
                        }
                    })
                };
            We(() => {
                c.value && (se = window.getComputedStyle(c.value), e.autoSize && $e()), oe()
            });
            const Me = () => {
                e.autoSize && p.value && $e(), oe()
            }, ze = y => {
                c.value && y.target !== c.value && (y.preventDefault(), c.value.focus())
            }, oe = () => {
                c.value && (c.value.scrollHeight > c.value.offsetHeight ? v.value || (v.value = !0) : v.value && (v.value = !1))
            };
            return Pe(w, () => {
                e.autoSize && p.value && $e(), oe()
            }), {
                prefixCls: a,
                wrapperCls: ve,
                textareaRef: c,
                textareaStyle: f,
                mirrorRef: p,
                mirrorStyle: _,
                computedValue: w,
                showClearBtn: T,
                valueLength: m,
                computedMaxLength: E,
                mergedDisabled: s,
                getWrapperAttrs: Y,
                getTextareaAttrs: Q,
                handleInput: B,
                handleFocus: F,
                handleBlur: x,
                handleComposition: K,
                handleClear: I,
                handleResize: Me,
                handleMousedown: ze
            }
        },
        methods: {
            focus() {
                var e;
                (e = this.$refs.textareaRef) == null || e.focus()
            }, blur() {
                var e;
                (e = this.$refs.textareaRef) == null || e.blur()
            }
        }
    }), ay = ["disabled", "value", "placeholder"];

function sy(e, t, n, r, o, i) {
    const a = ie("resize-observer"), s = ie("icon-close"), l = ie("icon-hover");
    return R(), J("div", Re(e.getWrapperAttrs(e.$attrs), {
        class: e.wrapperCls,
        onMousedown: t[7] || (t[7] = (...u) => e.handleMousedown && e.handleMousedown(...u))
    }), [e.autoSize ? (R(), J("div", {
        key: 0,
        ref: "mirrorRef",
        class: G(`${e.prefixCls}-mirror`),
        style: Oe(e.mirrorStyle)
    }, Ue(`${e.computedValue}
`), 7)) : le("v-if", !0), V(a, {onResize: e.handleResize}, {
        default: Se(() => [de("textarea", Re({ref: "textareaRef"}, e.getTextareaAttrs(e.$attrs), {
            disabled: e.mergedDisabled,
            class: e.prefixCls,
            style: e.textareaStyle,
            value: e.computedValue,
            placeholder: e.placeholder,
            onInput: t[0] || (t[0] = (...u) => e.handleInput && e.handleInput(...u)),
            onFocus: t[1] || (t[1] = (...u) => e.handleFocus && e.handleFocus(...u)),
            onBlur: t[2] || (t[2] = (...u) => e.handleBlur && e.handleBlur(...u)),
            onCompositionstart: t[3] || (t[3] = (...u) => e.handleComposition && e.handleComposition(...u)),
            onCompositionupdate: t[4] || (t[4] = (...u) => e.handleComposition && e.handleComposition(...u)),
            onCompositionend: t[5] || (t[5] = (...u) => e.handleComposition && e.handleComposition(...u))
        }), null, 16, ay)]), _: 1
    }, 8, ["onResize"]), ae(e.$slots, "suffix"), e.computedMaxLength && e.showWordLimit ? (R(), J("div", {
        key: 1,
        class: G(`${e.prefixCls}-word-limit`)
    }, Ue(e.valueLength) + "/" + Ue(e.computedMaxLength), 3)) : le("v-if", !0), e.showClearBtn ? (R(), J("div", {
        key: 2,
        class: G(`${e.prefixCls}-clear-btn`),
        onClick: t[6] || (t[6] = (...u) => e.handleClear && e.handleClear(...u))
    }, [V(l, null, {default: Se(() => [V(s)]), _: 1})], 2)) : le("v-if", !0)], 16)
}

var Qo = he(iy, [["render", sy]]);
const KS = Object.assign(Qo, {
    install: (e, t) => {
        Ve(e, t);
        const n = Fe(t);
        e.component(n + Qo.name, Qo)
    }
}), ly = te({
    name: "Message",
    components: {
        AIconHover: ct,
        IconInfoCircleFill: Fr,
        IconCheckCircleFill: Yn,
        IconExclamationCircleFill: Xn,
        IconCloseCircleFill: Jn,
        IconClose: Tt,
        IconLoading: jt
    },
    props: {
        type: {type: String, default: "info"},
        closable: {type: Boolean, default: !1},
        showIcon: {type: Boolean, default: !0},
        duration: {type: Number, default: 3e3},
        resetOnUpdate: {type: Boolean, default: !1},
        resetOnHover: {type: Boolean, default: !1}
    },
    emits: ["close"],
    setup(e, {emit: t}) {
        const n = re("message");
        let r = 0;
        const o = () => {
            t("close")
        }, i = () => {
            e.duration > 0 && (r = window.setTimeout(o, e.duration))
        }, a = () => {
            r && (window.clearTimeout(r), r = 0)
        };
        return We(() => {
            i()
        }), ln(() => {
            e.resetOnUpdate && (a(), i())
        }), qn(() => {
            a()
        }), {
            handleMouseEnter: () => {
                e.resetOnHover && a()
            }, handleMouseLeave: () => {
                e.resetOnHover && i()
            }, prefixCls: n, handleClose: o
        }
    }
});

function uy(e, t, n, r, o, i) {
    const a = ie("icon-info-circle-fill"), s = ie("icon-check-circle-fill"), l = ie("icon-exclamation-circle-fill"),
        u = ie("icon-close-circle-fill"), c = ie("icon-loading"), f = ie("icon-close"), p = ie("a-icon-hover");
    return R(), J("li", {
        role: "alert",
        class: G([e.prefixCls, `${e.prefixCls}-${e.type}`, {[`${e.prefixCls}-closable`]: e.closable}]),
        onMouseenter: t[1] || (t[1] = (..._) => e.handleMouseEnter && e.handleMouseEnter(..._)),
        onMouseleave: t[2] || (t[2] = (..._) => e.handleMouseLeave && e.handleMouseLeave(..._))
    }, [e.showIcon && !(e.type === "normal" && !e.$slots.icon) ? (R(), J("span", {
        key: 0,
        class: G(`${e.prefixCls}-icon`)
    }, [ae(e.$slots, "icon", {}, () => [e.type === "info" ? (R(), fe(a, {key: 0})) : e.type === "success" ? (R(), fe(s, {key: 1})) : e.type === "warning" ? (R(), fe(l, {key: 2})) : e.type === "error" ? (R(), fe(u, {key: 3})) : e.type === "loading" ? (R(), fe(c, {key: 4})) : le("v-if", !0)])], 2)) : le("v-if", !0), de("span", {class: G(`${e.prefixCls}-content`)}, [ae(e.$slots, "default")], 2), e.closable ? (R(), J("span", {
        key: 1,
        class: G(`${e.prefixCls}-close-btn`),
        onClick: t[0] || (t[0] = (..._) => e.handleClose && e.handleClose(..._))
    }, [V(p, null, {default: Se(() => [V(f)]), _: 1})], 2)) : le("v-if", !0)], 34)
}

var cy = he(ly, [["render", uy]]);

function fy(e) {
    return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !sa(e)
}

var dy = te({
        name: "MessageList",
        props: {messages: {type: Array, default: () => []}, position: {type: String, default: "top"}},
        emits: ["close", "afterClose"],
        setup(e, t) {
            const n = re("message-list"), {zIndex: r} = xr("message", {runOnMounted: !0});
            return () => {
                let o;
                return V(aa, {
                    class: [n, `${n}-${e.position}`],
                    name: "fade-message",
                    tag: "ul",
                    style: {zIndex: r.value},
                    onAfterLeave: () => t.emit("afterClose")
                }, fy(o = e.messages.map(i => {
                    const a = {default: yt(i.content), icon: yt(i.icon)};
                    return V(cy, {
                        key: i.id,
                        type: i.type,
                        duration: i.duration,
                        closable: i.closable,
                        resetOnUpdate: i.resetOnUpdate,
                        resetOnHover: i.resetOnHover,
                        onClose: () => t.emit("close", i.id)
                    }, a)
                })) ? o : {default: () => [o]})
            }
        }
    }), hy = Object.defineProperty, py = Object.defineProperties, my = Object.getOwnPropertyDescriptors,
    Gs = Object.getOwnPropertySymbols, vy = Object.prototype.hasOwnProperty, gy = Object.prototype.propertyIsEnumerable,
    Ks = (e, t, n) => t in e ? hy(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
    Tr = (e, t) => {
        for (var n in t || (t = {})) vy.call(t, n) && Ks(e, n, t[n]);
        if (Gs) for (var n of Gs(t)) gy.call(t, n) && Ks(e, n, t[n]);
        return e
    }, Vu = (e, t) => py(e, my(t));

class yy {
    constructor(t, n) {
        this.messageCount = 0, this.add = i => {
            var a;
            this.messageCount++;
            const s = (a = i.id) != null ? a : `__arco_message_${this.messageCount}`;
            if (this.messageIds.has(s)) return this.update(s, i);
            const l = xe(Tr({id: s}, i));
            return this.messages.value.push(l), this.messageIds.add(s), {close: () => this.remove(s)}
        }, this.update = (i, a) => {
            for (let s = 0; s < this.messages.value.length; s++) if (this.messages.value[s].id === i) {
                const l = !ht(a.duration);
                Object.assign(this.messages.value[s], Vu(Tr({}, a), {id: i, resetOnUpdate: l}));
                break
            }
            return {close: () => this.remove(i)}
        }, this.remove = i => {
            for (let a = 0; a < this.messages.value.length; a++) {
                const s = this.messages.value[a];
                if (s.id === i) {
                    qe(s.onClose) && s.onClose(i), this.messages.value.splice(a, 1), this.messageIds.delete(i);
                    break
                }
            }
        }, this.clear = () => {
            this.messages.value.splice(0)
        }, this.destroy = () => {
            this.messages.value.length === 0 && this.container && (_n(null, this.container), document.body.removeChild(this.container), this.container = null, bn[this.position] = void 0)
        };
        const {position: r = "top"} = t;
        this.container = da("message"), this.messageIds = new Set, this.messages = U([]), this.position = r;
        const o = V(dy, {messages: this.messages.value, position: r, onClose: this.remove, onAfterClose: this.destroy});
        (n ?? Ys._context) && (o.appContext = n ?? Ys._context), _n(o, this.container), document.body.appendChild(this.container)
    }
}

const bn = {}, xu = [...Vr, "loading", "normal"], pr = xu.reduce((e, t) => (e[t] = (n, r) => {
    Rt(n) && (n = {content: n});
    const o = Tr({type: t}, n), {position: i = "top"} = o;
    return bn[i] || (bn[i] = new yy(o, r)), bn[i].add(o)
}, e), {});
pr.clear = e => {
    var t;
    e ? (t = bn[e]) == null || t.clear() : Object.values(bn).forEach(n => n == null ? void 0 : n.clear())
};
const Ys = Vu(Tr({}, pr), {
    install: e => {
        const t = {clear: pr.clear};
        for (const n of xu) t[n] = (r, o = e._context) => pr[n](r, o);
        e.config.globalProperties.$message = t
    }, _context: null
}), by = ({modalRef: e, wrapperRef: t, draggable: n}) => {
    const r = U(!1), o = U([0, 0]), i = U([0, 0]), a = U([0, 0]), s = U(), l = U([0, 0]), u = () => {
        var _, S;
        if (t.value && e.value) {
            const {top: w, left: L} = t.value.getBoundingClientRect(), {
                clientWidth: g,
                clientHeight: $
            } = t.value, {top: E, left: h, width: m, height: b} = e.value.getBoundingClientRect(), v = h - L, N = E - w;
            (v !== ((_ = a.value) == null ? void 0 : _[0]) || N !== ((S = a.value) == null ? void 0 : S[1])) && (a.value = [v, N]);
            const T = g > m ? g - m : 0, A = $ > b ? $ - b : 0;
            (T !== l.value[0] || A !== l.value[1]) && (l.value = [T, A])
        }
    }, c = _ => {
        n.value && (_.preventDefault(), r.value = !0, u(), o.value = [_.x, _.y], i.value = [0, 0], pt(window, "mousemove", f), pt(window, "mouseup", p), pt(window, "contextmenu", p))
    }, f = _ => {
        if (r.value) {
            const S = _.x - o.value[0], w = _.y - o.value[1];
            let L = a.value[0] + S, g = a.value[1] + w;
            L < 0 && (L = 0), L > l.value[0] && (L = l.value[0]), g < 0 && (g = 0), g > l.value[1] && (g = l.value[1]), s.value = [L, g]
        }
    }, p = () => {
        r.value = !1, qt(window, "mousemove", f), qt(window, "mouseup", p)
    };
    return {position: s, handleMoveDown: c}
};
var _y = Object.defineProperty, Xs = Object.getOwnPropertySymbols, Cy = Object.prototype.hasOwnProperty,
    Sy = Object.prototype.propertyIsEnumerable,
    Js = (e, t, n) => t in e ? _y(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
    wy = (e, t) => {
        for (var n in t || (t = {})) Cy.call(t, n) && Js(e, n, t[n]);
        if (Xs) for (var n of Xs(t)) Sy.call(t, n) && Js(e, n, t[n]);
        return e
    }, Ey = te({
        name: "Modal",
        components: {
            ClientOnly: Cu,
            ArcoButton: $r,
            IconHover: ct,
            IconClose: Tt,
            IconInfoCircleFill: Fr,
            IconCheckCircleFill: Yn,
            IconExclamationCircleFill: Xn,
            IconCloseCircleFill: Jn
        },
        inheritAttrs: !1,
        props: {
            visible: {type: Boolean, default: void 0},
            defaultVisible: {type: Boolean, default: !1},
            width: {type: [Number, String]},
            top: {type: [Number, String]},
            mask: {type: Boolean, default: !0},
            title: {type: String},
            titleAlign: {type: String, default: "center"},
            alignCenter: {type: Boolean, default: !0},
            unmountOnClose: Boolean,
            maskClosable: {type: Boolean, default: !0},
            hideCancel: {type: Boolean, default: !1},
            simple: {type: Boolean, default: e => e.notice},
            closable: {type: Boolean, default: !0},
            okText: String,
            cancelText: String,
            okLoading: {type: Boolean, default: !1},
            okButtonProps: {type: Object},
            cancelButtonProps: {type: Object},
            footer: {type: Boolean, default: !0},
            renderToBody: {type: Boolean, default: !0},
            popupContainer: {type: [String, Object], default: "body"},
            maskStyle: {type: Object},
            modalClass: {type: [String, Array]},
            modalStyle: {type: Object},
            onBeforeOk: {type: Function},
            onBeforeCancel: {type: Function},
            escToClose: {type: Boolean, default: !0},
            draggable: {type: Boolean, default: !1},
            fullscreen: {type: Boolean, default: !1},
            maskAnimationName: {type: String, default: e => e.fullscreen ? "fade-in-standard" : "fade-modal"},
            modalAnimationName: {type: String, default: e => e.fullscreen ? "zoom-in" : "zoom-modal"},
            bodyClass: {type: [String, Array]},
            bodyStyle: {type: [String, Object, Array]},
            messageType: {type: String}
        },
        emits: ["update:visible", "ok", "cancel", "open", "close", "beforeOpen", "beforeClose"],
        setup(e, {emit: t}) {
            const {fullscreen: n, popupContainer: r} = Be(e), o = re("modal"), {t: i} = iu(), a = U(), s = U(),
                l = U(e.defaultVisible), u = C(() => {
                    var se;
                    return (se = e.visible) != null ? se : l.value
                }), c = U(!1), f = C(() => e.okLoading || c.value),
                p = C(() => e.draggable && !e.fullscreen), {teleportContainer: _, containerRef: S} = Su({
                    popupContainer: r,
                    visible: u
                }), w = U(u.value), L = C(() => e.okText || i("modal.okText")),
                g = C(() => e.cancelText || i("modal.cancelText")), {
                    zIndex: $,
                    isLastDialog: E
                } = xr("dialog", {visible: u});
            let h = !1;
            const m = se => {
                e.escToClose && se.key === en.ESC && E() && W()
            }, b = () => {
                e.escToClose && !h && (h = !0, pt(document.documentElement, "keydown", m))
            }, v = () => {
                h = !1, qt(document.documentElement, "keydown", m)
            };
            let N = 0;
            const {position: T, handleMoveDown: A} = by({wrapperRef: a, modalRef: s, draggable: p}), j = () => {
                N++, c.value && (c.value = !1), l.value = !1, t("update:visible", !1)
            }, Z = async () => {
                const se = N, ge = await new Promise(async Le => {
                    var Ne;
                    if (qe(e.onBeforeOk)) {
                        let we = e.onBeforeOk(($e = !0) => Le($e));
                        if ((Wa(we) || !Ai(we)) && (c.value = !0), Wa(we)) try {
                            we = (Ne = await we) != null ? Ne : !0
                        } catch {
                            we = !1
                        }
                        Ai(we) && Le(we)
                    } else Le(!0)
                });
                se === N && (ge ? (t("ok"), j()) : c.value && (c.value = !1))
            }, W = () => {
                var se;
                let ge = !0;
                qe(e.onBeforeCancel) && (ge = (se = e.onBeforeCancel()) != null ? se : !1), ge && (t("cancel"), j())
            }, k = U(!1), P = se => {
                se.target === a.value && (k.value = !0)
            }, F = () => {
                e.mask && e.maskClosable && k.value && W()
            }, x = () => {
                u.value && (!ad(a.value, document.activeElement) && document.activeElement instanceof HTMLElement && document.activeElement.blur(), t("open"))
            }, K = () => {
                u.value || (p.value && (T.value = void 0), w.value = !1, I(), t("close"))
            }, {setOverflowHidden: B, resetOverflow: I} = Mv(S);
            We(() => {
                S.value = Ii(e.popupContainer), u.value && (B(), e.escToClose && b())
            }), Dt(() => {
                I(), v()
            }), Pe(u, se => {
                l.value !== se && (l.value = se), se ? (t("beforeOpen"), w.value = !0, k.value = !1, B(), b()) : (t("beforeClose"), v())
            }), Pe(n, () => {
                T.value && (T.value = void 0)
            });
            const Y = C(() => [`${o}-wrapper`, {
                [`${o}-wrapper-align-center`]: e.alignCenter && !e.fullscreen,
                [`${o}-wrapper-moved`]: !!T.value
            }]), Q = C(() => [`${o}`, e.modalClass, {
                [`${o}-simple`]: e.simple,
                [`${o}-draggable`]: p.value,
                [`${o}-fullscreen`]: e.fullscreen
            }]), ve = C(() => {
                var se;
                const ge = wy({}, (se = e.modalStyle) != null ? se : {});
                return e.width && (ge.width = me(e.width) ? `${e.width}px` : e.width), !e.alignCenter && e.top && (ge.top = me(e.top) ? `${e.top}px` : e.top), T.value && (ge.transform = `translate(${T.value[0]}px, ${T.value[1]}px)`), ge
            });
            return {
                prefixCls: o,
                mounted: w,
                computedVisible: u,
                containerRef: S,
                wrapperRef: a,
                mergedModalStyle: ve,
                okDisplayText: L,
                cancelDisplayText: g,
                zIndex: $,
                handleOk: Z,
                handleCancel: W,
                handleMaskClick: F,
                handleMaskMouseDown: P,
                handleOpen: x,
                handleClose: K,
                mergedOkLoading: f,
                modalRef: s,
                wrapperCls: Y,
                modalCls: Q,
                teleportContainer: _,
                handleMoveDown: A
            }
        }
    });

function $y(e, t, n, r, o, i) {
    const a = ie("icon-info-circle-fill"), s = ie("icon-check-circle-fill"), l = ie("icon-exclamation-circle-fill"),
        u = ie("icon-close-circle-fill"), c = ie("icon-close"), f = ie("icon-hover"), p = ie("arco-button"),
        _ = ie("client-only");
    return R(), fe(_, null, {
        default: Se(() => [(R(), fe(nu, {
            to: e.teleportContainer,
            disabled: !e.renderToBody
        }, [!e.unmountOnClose || e.computedVisible || e.mounted ? mn((R(), J("div", Re({
            key: 0,
            class: `${e.prefixCls}-container`,
            style: {zIndex: e.zIndex}
        }, e.$attrs), [V(an, {
            name: e.maskAnimationName,
            appear: ""
        }, {
            default: Se(() => [e.mask ? mn((R(), J("div", {
                key: 0,
                ref: "maskRef",
                class: G(`${e.prefixCls}-mask`),
                style: Oe(e.maskStyle)
            }, null, 6)), [[vn, e.computedVisible]]) : le("v-if", !0)]), _: 1
        }, 8, ["name"]), de("div", {
            ref: "wrapperRef",
            class: G(e.wrapperCls),
            onClick: t[2] || (t[2] = Wt((...S) => e.handleMaskClick && e.handleMaskClick(...S), ["self"])),
            onMousedown: t[3] || (t[3] = Wt((...S) => e.handleMaskMouseDown && e.handleMaskMouseDown(...S), ["self"]))
        }, [V(an, {name: e.modalAnimationName, appear: "", onAfterEnter: e.handleOpen, onAfterLeave: e.handleClose}, {
            default: Se(() => [mn(de("div", {
                ref: "modalRef",
                class: G(e.modalCls),
                style: Oe(e.mergedModalStyle)
            }, [e.$slots.title || e.title || e.closable ? (R(), J("div", {
                key: 0,
                class: G(`${e.prefixCls}-header`),
                onMousedown: t[1] || (t[1] = (...S) => e.handleMoveDown && e.handleMoveDown(...S))
            }, [e.$slots.title || e.title ? (R(), J("div", {
                key: 0,
                class: G([`${e.prefixCls}-title`, `${e.prefixCls}-title-align-${e.titleAlign}`])
            }, [e.messageType ? (R(), J("div", {
                key: 0,
                class: G(`${e.prefixCls}-title-icon`)
            }, [e.messageType === "info" ? (R(), fe(a, {key: 0})) : le("v-if", !0), e.messageType === "success" ? (R(), fe(s, {key: 1})) : le("v-if", !0), e.messageType === "warning" ? (R(), fe(l, {key: 2})) : le("v-if", !0), e.messageType === "error" ? (R(), fe(u, {key: 3})) : le("v-if", !0)], 2)) : le("v-if", !0), ae(e.$slots, "title", {}, () => [Qe(Ue(e.title), 1)])], 2)) : le("v-if", !0), !e.simple && e.closable ? (R(), J("div", {
                key: 1,
                tabindex: "-1",
                role: "button",
                "aria-label": "Close",
                class: G(`${e.prefixCls}-close-btn`),
                onClick: t[0] || (t[0] = (...S) => e.handleCancel && e.handleCancel(...S))
            }, [V(f, null, {
                default: Se(() => [V(c)]),
                _: 1
            })], 2)) : le("v-if", !0)], 34)) : le("v-if", !0), de("div", {
                class: G([`${e.prefixCls}-body`, e.bodyClass]),
                style: Oe(e.bodyStyle)
            }, [ae(e.$slots, "default")], 6), e.footer ? (R(), J("div", {
                key: 1,
                class: G(`${e.prefixCls}-footer`)
            }, [ae(e.$slots, "footer", {}, () => [e.hideCancel ? le("v-if", !0) : (R(), fe(p, Re({key: 0}, e.cancelButtonProps, {onClick: e.handleCancel}), {
                default: Se(() => [Qe(Ue(e.cancelDisplayText), 1)]),
                _: 1
            }, 16, ["onClick"])), V(p, Re({type: "primary"}, e.okButtonProps, {
                loading: e.mergedOkLoading,
                onClick: e.handleOk
            }), {
                default: Se(() => [Qe(Ue(e.okDisplayText), 1)]),
                _: 1
            }, 16, ["loading", "onClick"])])], 2)) : le("v-if", !0)], 6), [[vn, e.computedVisible]])]), _: 3
        }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 34)], 16)), [[vn, e.computedVisible || e.mounted]]) : le("v-if", !0)], 8, ["to", "disabled"]))]),
        _: 3
    })
}

var mr = he(Ey, [["render", $y]]), ky = Object.defineProperty, Oy = Object.defineProperties,
    Ly = Object.getOwnPropertyDescriptors, Zs = Object.getOwnPropertySymbols, Ty = Object.prototype.hasOwnProperty,
    Ay = Object.prototype.propertyIsEnumerable,
    Qs = (e, t, n) => t in e ? ky(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
    nn = (e, t) => {
        for (var n in t || (t = {})) Ty.call(t, n) && Qs(e, n, t[n]);
        if (Zs) for (var n of Zs(t)) Ay.call(t, n) && Qs(e, n, t[n]);
        return e
    }, Ny = (e, t) => Oy(e, Ly(t));
const ei = (e, t) => {
    let n = da("modal");
    const r = () => {
        u.component && (u.component.props.visible = !1), qe(e.onOk) && e.onOk()
    }, o = () => {
        u.component && (u.component.props.visible = !1), qe(e.onCancel) && e.onCancel()
    }, i = async () => {
        await Xe(), n && (_n(null, n), document.body.removeChild(n)), n = null, qe(e.onClose) && e.onClose()
    }, a = () => {
        u.component && (u.component.props.visible = !1)
    }, s = c => {
        u.component && Object.entries(c).forEach(([f, p]) => {
            u.component.props[f] = p
        })
    }, u = V(mr, nn(nn(nn({}, {
        visible: !0,
        renderToBody: !1,
        unmountOnClose: !0,
        onOk: r,
        onCancel: o,
        onClose: i
    }), kn(e, ["content", "title", "footer", "visible", "unmountOnClose", "onOk", "onCancel", "onClose"])), {footer: typeof e.footer == "boolean" ? e.footer : void 0}), {
        default: yt(e.content),
        title: yt(e.title),
        footer: typeof e.footer != "boolean" ? yt(e.footer) : void 0
    });
    return (t ?? el._context) && (u.appContext = t ?? el._context), _n(u, n), document.body.appendChild(n), {
        close: a,
        update: s
    }
}, ti = nn({
    open: ei, confirm: (e, t) => {
        const n = nn({simple: !0}, e);
        return ei(n, t)
    }
}, Vr.reduce((e, t) => (e[t] = (n, r) => {
    const o = nn({simple: !0, hideCancel: !0, messageType: t}, n);
    return ei(o, r)
}, e), {})), el = Object.assign(mr, Ny(nn({}, ti), {
    install: (e, t) => {
        Ve(e, t);
        const n = Fe(t);
        e.component(n + mr.name, mr);
        const r = {};
        for (const o of Object.keys(ti)) r[o] = (i, a = e._context) => ti[o](i, a);
        e.config.globalProperties.$modal = r
    }, _context: null
})), Py = e => e.replace(/\B([A-Z])/g, "-$1").toLowerCase(), Iy = te({
    name: "Notification",
    components: {
        AIconHover: ct,
        IconInfoCircleFill: Fr,
        IconCheckCircleFill: Yn,
        IconExclamationCircleFill: Xn,
        IconCloseCircleFill: Jn,
        IconClose: Tt
    },
    props: {
        type: {type: String, default: "info"},
        showIcon: {type: Boolean, default: !0},
        closable: {type: Boolean, default: !1},
        duration: {type: Number, default: 3e3},
        resetOnUpdate: {type: Boolean, default: !1}
    },
    emits: ["close"],
    setup(e, t) {
        const n = re("notification");
        let r = 0;
        const o = () => {
            t.emit("close")
        };
        return We(() => {
            e.duration > 0 && (r = window.setTimeout(o, e.duration))
        }), ln(() => {
            e.resetOnUpdate && (r && (window.clearTimeout(r), r = 0), e.duration > 0 && (r = window.setTimeout(o, e.duration)))
        }), qn(() => {
            r && window.clearTimeout(r)
        }), {prefixCls: n, handleClose: o}
    }
});

function My(e, t, n, r, o, i) {
    const a = ie("icon-info-circle-fill"), s = ie("icon-check-circle-fill"), l = ie("icon-exclamation-circle-fill"),
        u = ie("icon-close-circle-fill"), c = ie("icon-close"), f = ie("a-icon-hover");
    return R(), J("li", {
        role: "alert",
        class: G([e.prefixCls, `${e.prefixCls}-${e.type}`, {[`${e.prefixCls}-closable`]: e.closable}])
    }, [e.showIcon ? (R(), J("div", {
        key: 0,
        class: G(`${e.prefixCls}-left`)
    }, [de("div", {class: G(`${e.prefixCls}-icon`)}, [ae(e.$slots, "icon", {}, () => [e.type === "info" ? (R(), fe(a, {key: 0})) : e.type === "success" ? (R(), fe(s, {key: 1})) : e.type === "warning" ? (R(), fe(l, {key: 2})) : e.type === "error" ? (R(), fe(u, {key: 3})) : le("v-if", !0)])], 2)], 2)) : le("v-if", !0), de("div", {class: G(`${e.prefixCls}-right`)}, [e.$slots.default ? (R(), J("div", {
        key: 0,
        class: G(`${e.prefixCls}-title`)
    }, [ae(e.$slots, "default")], 2)) : le("v-if", !0), e.$slots.content ? (R(), J("div", {
        key: 1,
        class: G(`${e.prefixCls}-content`)
    }, [ae(e.$slots, "content")], 2)) : le("v-if", !0), e.$slots.footer ? (R(), J("div", {
        key: 2,
        class: G(`${e.prefixCls}-footer`)
    }, [ae(e.$slots, "footer")], 2)) : le("v-if", !0)], 2), e.closable ? (R(), J("div", {
        key: 1,
        class: G(`${e.prefixCls}-close-btn`),
        onClick: t[0] || (t[0] = (...p) => e.handleClose && e.handleClose(...p))
    }, [ae(e.$slots, "closeIconElement", {}, () => [V(f, null, {
        default: Se(() => [ae(e.$slots, "closeIcon", {}, () => [V(c)])]),
        _: 3
    })])], 2)) : le("v-if", !0)], 2)
}

var Ry = he(Iy, [["render", My]]);
const By = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

function Dy(e) {
    return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !sa(e)
}

var jy = te({
        name: "NotificationList",
        props: {
            notifications: {type: Array, default: () => []},
            position: {type: String, default: "topRight", validator: e => By.includes(e)}
        },
        emits: ["close", "afterClose"],
        setup(e, t) {
            const n = re("notification-list"), r = Py(e.position), {zIndex: o} = xr("message", {runOnMounted: !0}),
                i = e.position.includes("Right");
            return () => {
                let a;
                return V(aa, {
                    class: [n, `${n}-${r}`],
                    style: {zIndex: o.value},
                    name: `slide-${i ? "right" : "left"}-notification`,
                    onAfterLeave: () => t.emit("afterClose"),
                    tag: "ul"
                }, Dy(a = e.notifications.map(s => {
                    const l = {
                        default: yt(s.title),
                        content: yt(s.content),
                        icon: yt(s.icon),
                        footer: yt(s.footer),
                        closeIcon: yt(s.closeIcon),
                        closeIconElement: yt(s.closeIconElement)
                    };
                    return V(Ry, {
                        key: s.id,
                        type: s.type,
                        style: s.style,
                        class: s.class,
                        duration: s.duration,
                        closable: s.closable,
                        showIcon: s.showIcon,
                        resetOnUpdate: s.resetOnUpdate,
                        onClose: () => t.emit("close", s.id)
                    }, l)
                })) ? a : {default: () => [a]})
            }
        }
    }), Fy = Object.defineProperty, Vy = Object.defineProperties, xy = Object.getOwnPropertyDescriptors,
    tl = Object.getOwnPropertySymbols, zy = Object.prototype.hasOwnProperty, Uy = Object.prototype.propertyIsEnumerable,
    nl = (e, t, n) => t in e ? Fy(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
    Ar = (e, t) => {
        for (var n in t || (t = {})) zy.call(t, n) && nl(e, n, t[n]);
        if (tl) for (var n of tl(t)) Uy.call(t, n) && nl(e, n, t[n]);
        return e
    }, zu = (e, t) => Vy(e, xy(t));

class Wy {
    constructor(t, n) {
        this.notificationCount = 0, this.add = i => {
            var a;
            this.notificationCount++;
            const s = (a = i.id) != null ? a : `__arco_notification_${this.notificationCount}`;
            if (this.notificationIds.has(s)) return this.update(s, i);
            const l = xe(Ar({id: s}, i));
            return this.notifications.value.push(l), this.notificationIds.add(s), {close: () => this.remove(s)}
        }, this.update = (i, a) => {
            for (let s = 0; s < this.notifications.value.length; s++) if (this.notifications.value[s].id === i) {
                const l = !ht(a.duration);
                Object.assign(this.notifications.value[s], zu(Ar({}, a), {id: i, resetOnUpdate: l}));
                break
            }
            return {close: () => this.remove(i)}
        }, this.remove = i => {
            for (let a = 0; a < this.notifications.value.length; a++) {
                const s = this.notifications.value[a];
                if (s.id === i) {
                    qe(s.onClose) && s.onClose(i), this.notifications.value.splice(a, 1), this.notificationIds.delete(i);
                    break
                }
            }
        }, this.clear = () => {
            this.notifications.value.splice(0)
        }, this.destroy = () => {
            this.notifications.value.length === 0 && this.container && (_n(null, this.container), document.body.removeChild(this.container), this.container = null, rn[this.position] = void 0)
        };
        const {position: r = "topRight"} = t;
        this.container = da("notification"), this.notificationIds = new Set, this.notifications = U([]), this.position = r;
        const o = V(jy, {
            notifications: this.notifications.value,
            position: r,
            onClose: this.remove,
            onAfterClose: this.destroy
        });
        (n ?? rl._context) && (o.appContext = n ?? rl._context), _n(o, this.container), document.body.appendChild(this.container)
    }
}

const rn = {}, Vn = Vr.reduce((e, t) => (e[t] = (n, r) => {
    Rt(n) && (n = {content: n});
    const o = Ar({type: t}, n), {position: i = "topRight"} = o;
    return rn[i] || (rn[i] = new Wy(o, r)), rn[i].add(o)
}, e), {});
Vn.remove = e => {
    e && Object.values(rn).forEach(t => t == null ? void 0 : t.remove(e))
};
Vn.clear = e => {
    var t;
    e ? (t = rn[e]) == null || t.clear() : Object.values(rn).forEach(n => n == null ? void 0 : n.clear())
};
const rl = zu(Ar({}, Vn), {
        install: e => {
            const t = {clear: Vn.clear};
            for (const n of Vr) t[n] = (r, o = e._context) => Vn[n](r, o);
            e.config.globalProperties.$notification = t
        }, _context: null
    }), Hy = te({
        name: "IconCheck",
        props: {
            size: {type: [Number, String]},
            strokeWidth: {type: Number, default: 4},
            strokeLinecap: {type: String, default: "butt", validator: e => ["butt", "round", "square"].includes(e)},
            strokeLinejoin: {
                type: String,
                default: "miter",
                validator: e => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
            },
            rotate: Number,
            spin: Boolean
        },
        emits: {click: e => !0},
        setup(e, {emit: t}) {
            const n = re("icon"), r = C(() => [n, `${n}-check`, {[`${n}-spin`]: e.spin}]), o = C(() => {
                const a = {};
                return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a
            });
            return {
                cls: r, innerStyle: o, onClick: a => {
                    t("click", a)
                }
            }
        }
    }), qy = ["stroke-width", "stroke-linecap", "stroke-linejoin"],
    Gy = de("path", {d: "M41.678 11.05 19.05 33.678 6.322 20.95"}, null, -1), Ky = [Gy];

function Yy(e, t, n, r, o, i) {
    return R(), J("svg", {
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "currentColor",
        class: G(e.cls),
        style: Oe(e.innerStyle),
        "stroke-width": e.strokeWidth,
        "stroke-linecap": e.strokeLinecap,
        "stroke-linejoin": e.strokeLinejoin,
        onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
    }, Ky, 14, qy)
}

var ni = he(Hy, [["render", Yy]]);
const Xy = Object.assign(ni, {
    install: (e, t) => {
        var n;
        const r = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
        e.component(r + ni.name, ni)
    }
}), Jy = te({
    name: "SliderButton",
    components: {Tooltip: Ru},
    inheritAttrs: !1,
    props: {
        direction: {type: String, default: "horizontal"},
        disabled: {type: Boolean, default: !1},
        min: {type: Number, required: !0},
        max: {type: Number, required: !0},
        formatTooltip: {type: Function},
        value: [String, Number],
        tooltipPosition: {type: String},
        showTooltip: {type: Boolean, default: !0}
    },
    emits: ["movestart", "moving", "moveend"],
    setup(e, {emit: t}) {
        const n = re("slider-btn"), r = U(!1), o = f => {
            e.disabled || (f.preventDefault(), r.value = !0, pt(window, "mousemove", i), pt(window, "mouseup", a), pt(window, "contextmenu", a), t("movestart"))
        }, i = f => {
            t("moving", f.clientX, f.clientY)
        }, a = () => {
            r.value = !1, qt(window, "mousemove", i), qt(window, "mouseup", a), t("moveend")
        }, s = C(() => [n]), l = C(() => {
            var f;
            return ((f = e.tooltipPosition) != null ? f : e.direction === "vertical") ? "right" : "top"
        }), u = C(() => {
            var f, p;
            return (p = (f = e.formatTooltip) == null ? void 0 : f.call(e, e.value)) != null ? p : `${e.value}`
        }), c = C(() => e.showTooltip ? r.value ? !0 : void 0 : !1);
        return {prefixCls: n, cls: s, tooltipContent: u, mergedTooltipPosition: l, popupVisible: c, handleMouseDown: o}
    }
}), Zy = ["aria-disabled", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"];

function Qy(e, t, n, r, o, i) {
    const a = ie("tooltip");
    return R(), fe(a, {
        "popup-visible": e.popupVisible,
        position: e.mergedTooltipPosition,
        content: e.tooltipContent
    }, {
        default: Se(() => [de("div", Re(e.$attrs, {
            tabindex: "0",
            role: "slider",
            "aria-disabled": e.disabled,
            "aria-valuemax": e.max,
            "aria-valuemin": e.min,
            "aria-valuenow": e.value,
            "aria-valuetext": e.tooltipContent,
            class: e.cls,
            onMousedown: t[0] || (t[0] = (...s) => e.handleMouseDown && e.handleMouseDown(...s)),
            onClick: t[1] || (t[1] = Wt(() => {
            }, ["stop"]))
        }), null, 16, Zy)]), _: 1
    }, 8, ["popup-visible", "position", "content"])
}

var eb = he(Jy, [["render", Qy]]);
const zt = (e, [t, n]) => {
    const r = Math.max((e - t) / (n - t), 0);
    return `${sn.round(r * 100, 2)}%`
}, qr = (e, t) => t === "vertical" ? {bottom: e} : {left: e}, tb = te({
    name: "SliderDots",
    props: {
        data: {type: Array, required: !0},
        min: {type: Number, required: !0},
        max: {type: Number, required: !0},
        direction: {type: String, default: "horizontal"}
    },
    setup(e) {
        return {prefixCls: re("slider"), getStyle: r => qr(zt(r, [e.min, e.max]), e.direction)}
    }
});

function nb(e, t, n, r, o, i) {
    return R(), J("div", {class: G(`${e.prefixCls}-dots`)}, [(R(!0), J(ot, null, Gn(e.data, (a, s) => (R(), J("div", {
        key: s,
        class: G(`${e.prefixCls}-dot-wrapper`),
        style: Oe(e.getStyle(a.key))
    }, [de("div", {class: G([`${e.prefixCls}-dot`, {[`${e.prefixCls}-dot-active`]: a.isActive}])}, null, 2)], 6))), 128))], 2)
}

var rb = he(tb, [["render", nb]]);
const ob = te({
    name: "SliderMarks",
    props: {
        data: {type: Array, required: !0},
        min: {type: Number, required: !0},
        max: {type: Number, required: !0},
        direction: {type: String, default: "horizontal"}
    },
    setup(e) {
        return {prefixCls: re("slider"), getStyle: r => qr(zt(r, [e.min, e.max]), e.direction)}
    }
});

function ib(e, t, n, r, o, i) {
    return R(), J("div", {class: G(`${e.prefixCls}-marks`)}, [(R(!0), J(ot, null, Gn(e.data, (a, s) => (R(), J("div", {
        key: s,
        "aria-hidden": "true",
        class: G(`${e.prefixCls}-mark`),
        style: Oe(e.getStyle(a.key))
    }, Ue(a.content), 7))), 128))], 2)
}

var ab = he(ob, [["render", ib]]);
const sb = te({
    name: "SliderTicks",
    props: {
        value: {type: Array, required: !0},
        step: {type: Number, required: !0},
        min: {type: Number, required: !0},
        max: {type: Number, required: !0},
        direction: {type: String, default: "horizontal"}
    },
    setup(e) {
        const t = re("slider"), n = C(() => {
            const o = [], i = Math.floor((e.max - e.min) / e.step);
            for (let a = 0; a <= i; a++) {
                const s = sn.plus(a * e.step, e.min);
                s <= e.min || s >= e.max || o.push({key: s, isActive: s >= e.value[0] && s <= e.value[1]})
            }
            return o
        });
        return {prefixCls: t, steps: n, getStyle: o => qr(zt(o, [e.min, e.max]), e.direction)}
    }
});

function lb(e, t, n, r, o, i) {
    return R(), J("div", {class: G(`${e.prefixCls}-ticks`)}, [(R(!0), J(ot, null, Gn(e.steps, (a, s) => (R(), J("div", {
        key: s,
        class: G([`${e.prefixCls}-tick`, {[`${e.prefixCls}-tick-active`]: a.isActive}]),
        style: Oe(e.getStyle(a.key))
    }, null, 6))), 128))], 2)
}

var ub = he(sb, [["render", lb]]);
const cb = te({
    name: "SliderInput",
    components: {InputNumber: ny},
    props: {
        modelValue: {type: Array, required: !0},
        min: {type: Number},
        max: {type: Number},
        step: {type: Number},
        disabled: {type: Boolean},
        range: {type: Boolean}
    },
    emits: ["startChange", "endChange"],
    setup(e, {emit: t}) {
        return {prefixCls: re("slider")}
    }
});

function fb(e, t, n, r, o, i) {
    const a = ie("input-number");
    return R(), J("div", {class: G(`${e.prefixCls}-input`)}, [e.range ? (R(), J(ot, {key: 0}, [V(a, {
        min: e.min,
        max: e.max,
        step: e.step,
        disabled: e.disabled,
        "model-value": e.modelValue[0],
        "hide-button": "",
        onChange: t[0] || (t[0] = s => e.$emit("startChange", s))
    }, null, 8, ["min", "max", "step", "disabled", "model-value"]), de("div", {class: G(`${e.prefixCls}-input-hyphens`)}, null, 2)], 64)) : le("v-if", !0), V(a, {
        min: e.min,
        max: e.max,
        step: e.step,
        disabled: e.disabled,
        "model-value": e.modelValue[1],
        "hide-button": "",
        onChange: t[1] || (t[1] = s => e.$emit("endChange", s))
    }, null, 8, ["min", "max", "step", "disabled", "model-value"])], 2)
}

var db = he(cb, [["render", fb]]);
const hb = te({
    name: "Slider",
    components: {SliderButton: eb, SliderDots: rb, SliderMarks: ab, SliderTicks: ub, SliderInput: db},
    props: {
        modelValue: {type: [Number, Array], default: void 0},
        defaultValue: {type: [Number, Array], default: 0},
        step: {type: Number, default: 1},
        min: {type: Number, default: 0},
        marks: {type: Object},
        max: {type: Number, default: 100},
        direction: {type: String, default: "horizontal"},
        disabled: {type: Boolean, default: !1},
        showTicks: {type: Boolean, default: !1},
        showInput: {type: Boolean, default: !1},
        range: {type: Boolean, default: !1},
        formatTooltip: {type: Function},
        showTooltip: {type: Boolean, default: !0}
    },
    emits: {"update:modelValue": e => !0, change: e => !0},
    setup(e, {emit: t}) {
        const n = re("slider"), {mergedDisabled: r, eventHandlers: o} = _t({disabled: Sr(e, "disabled")}), i = U(null),
            a = U(), s = U(Ge(e.defaultValue) ? e.defaultValue[0] : 0),
            l = U(Ge(e.defaultValue) ? e.defaultValue[1] : e.defaultValue), u = () => {
                var T, A;
                e.range ? (t("update:modelValue", [s.value, l.value]), t("change", [s.value, l.value])) : (t("update:modelValue", l.value), t("change", l.value)), (A = (T = o.value) == null ? void 0 : T.onChange) == null || A.call(T)
            }, c = T => {
                T = T ?? e.min, s.value = T, u()
            }, f = T => {
                T = T ?? e.min, l.value = T, u()
            }, p = C(() => {
                var T, A, j;
                return e.range ? Ge(e.modelValue) ? e.modelValue : [s.value, (T = e.modelValue) != null ? T : l.value] : ht(e.modelValue) ? [s.value, l.value] : Ge(e.modelValue) ? [(A = e.min) != null ? A : 0, e.modelValue[1]] : [(j = e.min) != null ? j : 0, e.modelValue]
            }), _ = C(() => Object.keys(e.marks || {}).map(T => {
                var A;
                const j = Number(T);
                return {
                    key: j,
                    content: (A = e.marks) == null ? void 0 : A[j],
                    isActive: j >= p.value[0] && j <= p.value[1]
                }
            })), S = T => qr(zt(T, [e.min, e.max]), e.direction), w = U(!1), L = () => {
                w.value = !0, i.value && (a.value = i.value.getBoundingClientRect())
            };

        function g(T, A) {
            if (!a.value) return 0;
            const {left: j, top: Z, width: W, height: k} = a.value, P = e.direction === "horizontal" ? W : k,
                F = P * e.step / (e.max - e.min);
            let x = e.direction === "horizontal" ? T - j : Z + k - A;
            x < 0 && (x = 0), x > P && (x = P);
            const K = Math.round(x / F);
            return sn.plus(e.min, sn.times(K, e.step))
        }

        const $ = (T, A) => {
            l.value = g(T, A), u()
        }, E = T => {
            if (r.value) return;
            const {clientX: A, clientY: j} = T;
            i.value && (a.value = i.value.getBoundingClientRect()), l.value = g(A, j), u()
        };

        function h([T, A]) {
            return T > A && ([T, A] = [A, T]), e.direction === "vertical" ? {
                bottom: zt(T, [e.min, e.max]),
                top: zt(e.max + e.min - A, [e.min, e.max])
            } : {left: zt(T, [e.min, e.max]), right: zt(e.max + e.min - A, [e.min, e.max])}
        }

        const m = (T, A) => {
                s.value = g(T, A), u()
            }, b = () => {
                w.value = !1
            }, v = C(() => [n, {[`${n}-vertical`]: e.direction === "vertical", [`${n}-with-marks`]: !!e.marks}]),
            N = C(() => [`${n}-track`, {
                [`${n}-track-disabled`]: r.value,
                [`${n}-track-vertical`]: e.direction === "vertical"
            }]);
        return {
            prefixCls: n,
            cls: v,
            trackCls: N,
            trackRef: i,
            computedValue: p,
            mergedDisabled: r,
            markList: _,
            getBtnStyle: S,
            getBarStyle: h,
            handleClick: E,
            handleMoveStart: L,
            handleEndMoving: $,
            handleMoveEnd: b,
            handleStartMoving: m,
            handleStartChange: c,
            handleEndChange: f
        }
    }
});

function pb(e, t, n, r, o, i) {
    const a = ie("slider-ticks"), s = ie("slider-dots"), l = ie("slider-marks"), u = ie("slider-button"),
        c = ie("slider-input");
    return R(), J("div", {class: G(e.cls)}, [de("div", {
        ref: "trackRef",
        class: G(e.trackCls),
        onClick: t[0] || (t[0] = (...f) => e.handleClick && e.handleClick(...f))
    }, [de("div", {
        class: G(`${e.prefixCls}-bar`),
        style: Oe(e.getBarStyle(e.computedValue))
    }, null, 6), e.showTicks ? (R(), fe(a, {
        key: 0,
        value: e.computedValue,
        step: e.step,
        min: e.min,
        max: e.max,
        direction: e.direction
    }, null, 8, ["value", "step", "min", "max", "direction"])) : le("v-if", !0), e.marks ? (R(), fe(s, {
        key: 1,
        data: e.markList,
        min: e.min,
        max: e.max,
        direction: e.direction
    }, null, 8, ["data", "min", "max", "direction"])) : le("v-if", !0), e.marks ? (R(), fe(l, {
        key: 2,
        data: e.markList,
        min: e.min,
        max: e.max,
        direction: e.direction
    }, null, 8, ["data", "min", "max", "direction"])) : le("v-if", !0), e.range ? (R(), fe(u, {
        key: 3,
        style: Oe(e.getBtnStyle(e.computedValue[0])),
        value: e.computedValue[0],
        direction: e.direction,
        disabled: e.mergedDisabled,
        min: e.min,
        max: e.max,
        "format-tooltip": e.formatTooltip,
        "show-tooltip": e.showTooltip,
        onMovestart: e.handleMoveStart,
        onMoving: e.handleStartMoving,
        onMoveend: e.handleMoveEnd
    }, null, 8, ["style", "value", "direction", "disabled", "min", "max", "format-tooltip", "show-tooltip", "onMovestart", "onMoving", "onMoveend"])) : le("v-if", !0), V(u, {
        style: Oe(e.getBtnStyle(e.computedValue[1])),
        value: e.computedValue[1],
        direction: e.direction,
        disabled: e.mergedDisabled,
        min: e.min,
        max: e.max,
        "format-tooltip": e.formatTooltip,
        "show-tooltip": e.showTooltip,
        onMovestart: e.handleMoveStart,
        onMoving: e.handleEndMoving,
        onMoveend: e.handleMoveEnd
    }, null, 8, ["style", "value", "direction", "disabled", "min", "max", "format-tooltip", "show-tooltip", "onMovestart", "onMoving", "onMoveend"])], 2), e.showInput ? (R(), fe(c, {
        key: 0,
        "model-value": e.computedValue,
        min: e.min,
        max: e.max,
        step: e.step,
        range: e.range,
        disabled: e.disabled,
        onStartChange: e.handleStartChange,
        onEndChange: e.handleEndChange
    }, null, 8, ["model-value", "min", "max", "step", "range", "disabled", "onStartChange", "onEndChange"])) : le("v-if", !0)], 2)
}

var ri = he(hb, [["render", pb]]);
const YS = Object.assign(ri, {
    install: (e, t) => {
        Ve(e, t);
        const n = Fe(t);
        e.component(n + ri.name, ri)
    }
});
var oi = te({
    name: "Space",
    props: {
        align: {type: String},
        direction: {type: String, default: "horizontal"},
        size: {type: [Number, String, Array], default: "small"},
        wrap: {type: Boolean},
        fill: {type: Boolean}
    },
    setup(e, {slots: t}) {
        const n = re("space"), r = C(() => {
            var s;
            return (s = e.align) != null ? s : e.direction === "horizontal" ? "center" : ""
        }), o = C(() => [n, {
            [`${n}-${e.direction}`]: e.direction,
            [`${n}-align-${r.value}`]: r.value,
            [`${n}-wrap`]: e.wrap,
            [`${n}-fill`]: e.fill
        }]);

        function i(s) {
            if (me(s)) return s;
            switch (s) {
                case"mini":
                    return 4;
                case"small":
                    return 8;
                case"medium":
                    return 16;
                case"large":
                    return 24;
                default:
                    return 8
            }
        }

        const a = s => {
            const l = {}, u = `${i(Ge(e.size) ? e.size[0] : e.size)}px`, c = `${i(Ge(e.size) ? e.size[1] : e.size)}px`;
            return s ? e.wrap ? {marginBottom: c} : {} : (e.direction === "horizontal" && (l.marginRight = u), (e.direction === "vertical" || e.wrap) && (l.marginBottom = c), l)
        };
        return () => {
            var s;
            const l = jn((s = t.default) == null ? void 0 : s.call(t), !0).filter(u => u.type !== Cf);
            return V("div", {class: o.value}, [l.map((u, c) => {
                var f, p;
                const _ = t.split && c > 0;
                return V(ot, {key: (f = u.key) != null ? f : `item-${c}`}, [_ && V("div", {
                    class: `${n}-item-split`,
                    style: a(!1)
                }, [(p = t.split) == null ? void 0 : p.call(t)]), V("div", {
                    class: `${n}-item`,
                    style: a(c === l.length - 1)
                }, [u])])
            })])
        }
    }
});
const XS = Object.assign(oi, {
    install: (e, t) => {
        Ve(e, t);
        const n = Fe(t);
        e.component(n + oi.name, oi)
    }
}), Uu = Symbol("ArcoSteps"), mb = te({
    name: "Steps",
    props: {
        type: {type: String, default: "default"},
        direction: {type: String, default: "horizontal"},
        labelPlacement: {type: String, default: "horizontal"},
        current: {type: Number, default: void 0},
        defaultCurrent: {type: Number, default: 1},
        status: {type: String, default: "process"},
        lineLess: {type: Boolean, default: !1},
        small: {type: Boolean, default: !1},
        changeable: {type: Boolean, default: !1}
    },
    emits: {"update:current": e => !0, change: (e, t) => !0},
    setup(e, {emit: t, slots: n}) {
        const {type: r, lineLess: o} = Be(e), i = re("steps"), a = U(e.defaultCurrent), s = C(() => {
                var g;
                return (g = e.current) != null ? g : a.value
            }), l = C(() => ["navigation", "arrow"].includes(e.type) ? "horizontal" : e.direction),
            u = C(() => e.type === "dot" ? l.value === "vertical" ? "horizontal" : "vertical" : e.type === "navigation" ? "horizontal" : e.labelPlacement),
            c = g => g < s.value ? "finish" : g > s.value ? "wait" : e.status, f = (g, $) => {
                e.changeable && (a.value = g, t("update:current", g), t("change", g, $))
            }, p = xe(new Map), _ = C(() => Array.from(p.values()).filter(g => g.status === "error").map(g => g.step)),
            S = (g, $) => {
                p.set(g, $)
            }, w = g => {
                p.delete(g)
            }, L = C(() => [i, `${i}-${l.value}`, `${i}-label-${u.value}`, `${i}-mode-${r.value}`, {
                [`${i}-changeable`]: e.changeable,
                [`${i}-size-small`]: e.small && e.type !== "dot",
                [`${i}-line-less`]: o.value
            }]);
        return Lt(Uu, xe({
            type: r,
            direction: l,
            labelPlacement: u,
            lineLess: o,
            current: s,
            errorSteps: _,
            getStatus: c,
            addItem: S,
            removeItem: w,
            onClick: f,
            parentCls: i
        })), {cls: L}
    }
});

function vb(e, t, n, r, o, i) {
    return R(), J("div", {class: G(e.cls)}, [ae(e.$slots, "default")], 2)
}

var ii = he(mb, [["render", vb]]);
const gb = te({
    name: "Step",
    components: {IconCheck: Xy, IconClose: Tt},
    props: {title: String, description: String, status: {type: String}, disabled: {type: Boolean, default: !1}},
    setup(e) {
        const t = re("steps-item"), n = Yt(), r = re("steps-icon"), o = nt(Uu, void 0), i = C(() => {
            var S;
            return (S = o == null ? void 0 : o.type) != null ? S : "default"
        }), a = U(), {computedIndex: s} = Lu({
            itemRef: a,
            selector: `.${t}`,
            parentClassName: o == null ? void 0 : o.parentCls
        }), l = C(() => s.value + 1), u = C(() => {
            var S, w;
            return (w = (S = e.status) != null ? S : o == null ? void 0 : o.getStatus(l.value)) != null ? w : "process"
        }), c = C(() => {
            var S;
            return (S = o == null ? void 0 : o.errorSteps.includes(l.value + 1)) != null ? S : !1
        });
        n && (o == null || o.addItem(n.uid, xe({step: l, status: u}))), Dt(() => {
            n && (o == null || o.removeItem(n.uid))
        });
        const f = C(() => !(o != null && o.lineLess) && ((o == null ? void 0 : o.labelPlacement) === "vertical" || (o == null ? void 0 : o.direction) === "vertical")),
            p = S => {
                e.disabled || o == null || o.onClick(l.value, S)
            }, _ = C(() => [t, `${t}-${u.value}`, {
                [`${t}-active`]: l.value === (o == null ? void 0 : o.current),
                [`${t}-next-error`]: c.value,
                [`${t}-disabled`]: e.disabled
            }]);
        return {
            prefixCls: t,
            iconCls: r,
            cls: _,
            itemRef: a,
            showTail: f,
            stepNumber: l,
            computedStatus: u,
            type: i,
            handleClick: p
        }
    }
});

function yb(e, t, n, r, o, i) {
    const a = ie("icon-check"), s = ie("icon-close");
    return R(), J("div", {
        ref: "itemRef",
        class: G(e.cls),
        onClick: t[0] || (t[0] = (...l) => e.handleClick && e.handleClick(...l))
    }, [e.showTail ? (R(), J("div", {
        key: 0,
        class: G(`${e.prefixCls}-tail`)
    }, null, 2)) : le("v-if", !0), e.type !== "arrow" ? (R(), J("div", {
        key: 1,
        class: G(`${e.prefixCls}-node`)
    }, [ae(e.$slots, "node", {
        step: e.stepNumber,
        status: e.computedStatus
    }, () => [e.type !== "dot" ? (R(), J("div", {
        key: 0,
        class: G(e.iconCls)
    }, [ae(e.$slots, "icon", {
        step: e.stepNumber,
        status: e.computedStatus
    }, () => [e.computedStatus === "finish" ? (R(), fe(a, {key: 0})) : e.computedStatus === "error" ? (R(), fe(s, {key: 1})) : (R(), J(ot, {key: 2}, [Qe(Ue(e.stepNumber), 1)], 2112))])], 2)) : le("v-if", !0)])], 2)) : le("v-if", !0), de("div", {class: G(`${e.prefixCls}-content`)}, [de("div", {class: G(`${e.prefixCls}-title`)}, [ae(e.$slots, "default", {}, () => [Qe(Ue(e.title), 1)])], 2), e.description || e.$slots.description ? (R(), J("div", {
        key: 0,
        class: G(`${e.prefixCls}-description`)
    }, [ae(e.$slots, "description", {}, () => [Qe(Ue(e.description), 1)])], 2)) : le("v-if", !0)], 2)], 2)
}

var ai = he(gb, [["render", yb]]);
const JS = Object.assign(ii, {
        Step: ai, install: (e, t) => {
            Ve(e, t);
            const n = Fe(t);
            e.component(n + ii.name, ii), e.component(n + ai.name, ai)
        }
    }), bb = te({
        name: "IconCopy",
        props: {
            size: {type: [Number, String]},
            strokeWidth: {type: Number, default: 4},
            strokeLinecap: {type: String, default: "butt", validator: e => ["butt", "round", "square"].includes(e)},
            strokeLinejoin: {
                type: String,
                default: "miter",
                validator: e => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
            },
            rotate: Number,
            spin: Boolean
        },
        emits: {click: e => !0},
        setup(e, {emit: t}) {
            const n = re("icon"), r = C(() => [n, `${n}-copy`, {[`${n}-spin`]: e.spin}]), o = C(() => {
                const a = {};
                return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a
            });
            return {
                cls: r, innerStyle: o, onClick: a => {
                    t("click", a)
                }
            }
        }
    }), _b = ["stroke-width", "stroke-linecap", "stroke-linejoin"],
    Cb = de("path", {d: "M20 6h18a2 2 0 0 1 2 2v22M8 16v24c0 1.105.891 2 1.996 2h20.007A1.99 1.99 0 0 0 32 40.008V15.997A1.997 1.997 0 0 0 30 14H10a2 2 0 0 0-2 2Z"}, null, -1),
    Sb = [Cb];

function wb(e, t, n, r, o, i) {
    return R(), J("svg", {
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "currentColor",
        class: G(e.cls),
        style: Oe(e.innerStyle),
        "stroke-width": e.strokeWidth,
        "stroke-linecap": e.strokeLinecap,
        "stroke-linejoin": e.strokeLinejoin,
        onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
    }, Sb, 14, _b)
}

var si = he(bb, [["render", wb]]);
const ZS = Object.assign(si, {
    install: (e, t) => {
        var n;
        const r = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
        e.component(r + si.name, si)
    }
});
var At = {}, Wu = {exports: {}}, Ie = {};/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
Object.defineProperty(Ie, "__esModule", {value: !0});
const Eb = typeof window < "u";
let $b, kb;
const Ob = /\{([0-9a-zA-Z]+)\}/g;

function Lb(e, ...t) {
    return t.length === 1 && _a(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Ob, (n, r) => t.hasOwnProperty(r) ? t[r] : "")
}

const Tb = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol", Ab = e => Tb ? Symbol(e) : e,
    Nb = (e, t, n) => Hu({l: e, k: t, s: n}),
    Hu = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
    Pb = e => typeof e == "number" && isFinite(e), Ib = e => Gr(e) === "[object Date]",
    Mb = e => Gr(e) === "[object RegExp]", Rb = e => Sa(e) && Object.keys(e).length === 0;

function Bb(e, t) {
    typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
}

const Db = Object.assign;
let ol;
const jb = () => ol || (ol = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof Ti < "u" ? Ti : {});

function Fb(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}

const Vb = Object.prototype.hasOwnProperty;

function xb(e, t) {
    return Vb.call(e, t)
}

const qu = Array.isArray, xi = e => typeof e == "function", zb = e => typeof e == "string",
    Ub = e => typeof e == "boolean", Wb = e => typeof e == "symbol", _a = e => e !== null && typeof e == "object",
    Hb = e => _a(e) && xi(e.then) && xi(e.catch), Ca = Object.prototype.toString, Gr = e => Ca.call(e),
    Sa = e => Gr(e) === "[object Object]",
    qb = e => e == null ? "" : qu(e) || Sa(e) && e.toString === Ca ? JSON.stringify(e, null, 2) : String(e), il = 2;

function Gb(e, t = 0, n = e.length) {
    const r = e.split(/\r?\n/);
    let o = 0;
    const i = [];
    for (let a = 0; a < r.length; a++) if (o += r[a].length + 1, o >= t) {
        for (let s = a - il; s <= a + il || n > o; s++) {
            if (s < 0 || s >= r.length) continue;
            const l = s + 1;
            i.push(`${l}${" ".repeat(3 - String(l).length)}|  ${r[s]}`);
            const u = r[s].length;
            if (s === a) {
                const c = t - (o - u) + 1, f = Math.max(1, n > o ? u - c : n - t);
                i.push("   |  " + " ".repeat(c) + "^".repeat(f))
            } else if (s > a) {
                if (n > o) {
                    const c = Math.max(Math.min(n - o, u), 1);
                    i.push("   |  " + "^".repeat(c))
                }
                o += u + 1
            }
        }
        break
    }
    return i.join(`
`)
}

function Kb() {
    const e = new Map;
    return {
        events: e, on(n, r) {
            const o = e.get(n);
            o && o.push(r) || e.set(n, [r])
        }, off(n, r) {
            const o = e.get(n);
            o && o.splice(o.indexOf(r) >>> 0, 1)
        }, emit(n, r) {
            (e.get(n) || []).slice().map(o => o(r)), (e.get("*") || []).slice().map(o => o(n, r))
        }
    }
}

Ie.assign = Db;
Ie.createEmitter = Kb;
Ie.escapeHtml = Fb;
Ie.format = Lb;
Ie.friendlyJSONstringify = Hu;
Ie.generateCodeFrame = Gb;
Ie.generateFormatCacheKey = Nb;
Ie.getGlobalThis = jb;
Ie.hasOwn = xb;
Ie.inBrowser = Eb;
Ie.isArray = qu;
Ie.isBoolean = Ub;
Ie.isDate = Ib;
Ie.isEmptyObject = Rb;
Ie.isFunction = xi;
Ie.isNumber = Pb;
Ie.isObject = _a;
Ie.isPlainObject = Sa;
Ie.isPromise = Hb;
Ie.isRegExp = Mb;
Ie.isString = zb;
Ie.isSymbol = Wb;
Ie.makeSymbol = Ab;
Ie.mark = $b;
Ie.measure = kb;
Ie.objectToString = Ca;
Ie.toDisplayString = qb;
Ie.toTypeString = Gr;
Ie.warn = Bb;
Wu.exports = Ie;
var wa = Wu.exports, Gu = {exports: {}}, be = {}, Ku = {exports: {}}, vt = {}, Kr = {}, Ea = {}, Yr = {}, $a = {},
    al = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
$a.encode = function (e) {
    if (0 <= e && e < al.length) return al[e];
    throw new TypeError("Must be between 0 and 63: " + e)
};
$a.decode = function (e) {
    var t = 65, n = 90, r = 97, o = 122, i = 48, a = 57, s = 43, l = 47, u = 26, c = 52;
    return t <= e && e <= n ? e - t : r <= e && e <= o ? e - r + u : i <= e && e <= a ? e - i + c : e == s ? 62 : e == l ? 63 : -1
};
var Yu = $a, ka = 5, Xu = 1 << ka, Ju = Xu - 1, Zu = Xu;

function Yb(e) {
    return e < 0 ? (-e << 1) + 1 : (e << 1) + 0
}

function Xb(e) {
    var t = (e & 1) === 1, n = e >> 1;
    return t ? -n : n
}

Yr.encode = function (t) {
    var n = "", r, o = Yb(t);
    do r = o & Ju, o >>>= ka, o > 0 && (r |= Zu), n += Yu.encode(r); while (o > 0);
    return n
};
Yr.decode = function (t, n, r) {
    var o = t.length, i = 0, a = 0, s, l;
    do {
        if (n >= o) throw new Error("Expected more digits in base 64 VLQ value.");
        if (l = Yu.decode(t.charCodeAt(n++)), l === -1) throw new Error("Invalid base64 digit: " + t.charAt(n - 1));
        s = !!(l & Zu), l &= Ju, i = i + (l << a), a += ka
    } while (s);
    r.value = Xb(i), r.rest = n
};
var Ln = {};
(function (e) {
    function t(h, m, b) {
        if (m in h) return h[m];
        if (arguments.length === 3) return b;
        throw new Error('"' + m + '" is a required argument.')
    }

    e.getArg = t;
    var n = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, r = /^data:.+\,.+$/;

    function o(h) {
        var m = h.match(n);
        return m ? {scheme: m[1], auth: m[2], host: m[3], port: m[4], path: m[5]} : null
    }

    e.urlParse = o;

    function i(h) {
        var m = "";
        return h.scheme && (m += h.scheme + ":"), m += "//", h.auth && (m += h.auth + "@"), h.host && (m += h.host), h.port && (m += ":" + h.port), h.path && (m += h.path), m
    }

    e.urlGenerate = i;

    function a(h) {
        var m = h, b = o(h);
        if (b) {
            if (!b.path) return h;
            m = b.path
        }
        for (var v = e.isAbsolute(m), N = m.split(/\/+/), T, A = 0, j = N.length - 1; j >= 0; j--) T = N[j], T === "." ? N.splice(j, 1) : T === ".." ? A++ : A > 0 && (T === "" ? (N.splice(j + 1, A), A = 0) : (N.splice(j, 2), A--));
        return m = N.join("/"), m === "" && (m = v ? "/" : "."), b ? (b.path = m, i(b)) : m
    }

    e.normalize = a;

    function s(h, m) {
        h === "" && (h = "."), m === "" && (m = ".");
        var b = o(m), v = o(h);
        if (v && (h = v.path || "/"), b && !b.scheme) return v && (b.scheme = v.scheme), i(b);
        if (b || m.match(r)) return m;
        if (v && !v.host && !v.path) return v.host = m, i(v);
        var N = m.charAt(0) === "/" ? m : a(h.replace(/\/+$/, "") + "/" + m);
        return v ? (v.path = N, i(v)) : N
    }

    e.join = s, e.isAbsolute = function (h) {
        return h.charAt(0) === "/" || n.test(h)
    };

    function l(h, m) {
        h === "" && (h = "."), h = h.replace(/\/$/, "");
        for (var b = 0; m.indexOf(h + "/") !== 0;) {
            var v = h.lastIndexOf("/");
            if (v < 0 || (h = h.slice(0, v), h.match(/^([^\/]+:\/)?\/*$/))) return m;
            ++b
        }
        return Array(b + 1).join("../") + m.substr(h.length + 1)
    }

    e.relative = l;
    var u = function () {
        var h = Object.create(null);
        return !("__proto__" in h)
    }();

    function c(h) {
        return h
    }

    function f(h) {
        return _(h) ? "$" + h : h
    }

    e.toSetString = u ? c : f;

    function p(h) {
        return _(h) ? h.slice(1) : h
    }

    e.fromSetString = u ? c : p;

    function _(h) {
        if (!h) return !1;
        var m = h.length;
        if (m < 9 || h.charCodeAt(m - 1) !== 95 || h.charCodeAt(m - 2) !== 95 || h.charCodeAt(m - 3) !== 111 || h.charCodeAt(m - 4) !== 116 || h.charCodeAt(m - 5) !== 111 || h.charCodeAt(m - 6) !== 114 || h.charCodeAt(m - 7) !== 112 || h.charCodeAt(m - 8) !== 95 || h.charCodeAt(m - 9) !== 95) return !1;
        for (var b = m - 10; b >= 0; b--) if (h.charCodeAt(b) !== 36) return !1;
        return !0
    }

    function S(h, m, b) {
        var v = L(h.source, m.source);
        return v !== 0 || (v = h.originalLine - m.originalLine, v !== 0) || (v = h.originalColumn - m.originalColumn, v !== 0 || b) || (v = h.generatedColumn - m.generatedColumn, v !== 0) || (v = h.generatedLine - m.generatedLine, v !== 0) ? v : L(h.name, m.name)
    }

    e.compareByOriginalPositions = S;

    function w(h, m, b) {
        var v = h.generatedLine - m.generatedLine;
        return v !== 0 || (v = h.generatedColumn - m.generatedColumn, v !== 0 || b) || (v = L(h.source, m.source), v !== 0) || (v = h.originalLine - m.originalLine, v !== 0) || (v = h.originalColumn - m.originalColumn, v !== 0) ? v : L(h.name, m.name)
    }

    e.compareByGeneratedPositionsDeflated = w;

    function L(h, m) {
        return h === m ? 0 : h === null ? 1 : m === null ? -1 : h > m ? 1 : -1
    }

    function g(h, m) {
        var b = h.generatedLine - m.generatedLine;
        return b !== 0 || (b = h.generatedColumn - m.generatedColumn, b !== 0) || (b = L(h.source, m.source), b !== 0) || (b = h.originalLine - m.originalLine, b !== 0) || (b = h.originalColumn - m.originalColumn, b !== 0) ? b : L(h.name, m.name)
    }

    e.compareByGeneratedPositionsInflated = g;

    function $(h) {
        return JSON.parse(h.replace(/^\)]}'[^\n]*\n/, ""))
    }

    e.parseSourceMapInput = $;

    function E(h, m, b) {
        if (m = m || "", h && (h[h.length - 1] !== "/" && m[0] !== "/" && (h += "/"), m = h + m), b) {
            var v = o(b);
            if (!v) throw new Error("sourceMapURL could not be parsed");
            if (v.path) {
                var N = v.path.lastIndexOf("/");
                N >= 0 && (v.path = v.path.substring(0, N + 1))
            }
            m = s(i(v), m)
        }
        return a(m)
    }

    e.computeSourceURL = E
})(Ln);
var Oa = {}, La = Ln, Ta = Object.prototype.hasOwnProperty, on = typeof Map < "u";

function Bt() {
    this._array = [], this._set = on ? new Map : Object.create(null)
}

Bt.fromArray = function (t, n) {
    for (var r = new Bt, o = 0, i = t.length; o < i; o++) r.add(t[o], n);
    return r
};
Bt.prototype.size = function () {
    return on ? this._set.size : Object.getOwnPropertyNames(this._set).length
};
Bt.prototype.add = function (t, n) {
    var r = on ? t : La.toSetString(t), o = on ? this.has(t) : Ta.call(this._set, r), i = this._array.length;
    (!o || n) && this._array.push(t), o || (on ? this._set.set(t, i) : this._set[r] = i)
};
Bt.prototype.has = function (t) {
    if (on) return this._set.has(t);
    var n = La.toSetString(t);
    return Ta.call(this._set, n)
};
Bt.prototype.indexOf = function (t) {
    if (on) {
        var n = this._set.get(t);
        if (n >= 0) return n
    } else {
        var r = La.toSetString(t);
        if (Ta.call(this._set, r)) return this._set[r]
    }
    throw new Error('"' + t + '" is not in the set.')
};
Bt.prototype.at = function (t) {
    if (t >= 0 && t < this._array.length) return this._array[t];
    throw new Error("No element indexed by " + t)
};
Bt.prototype.toArray = function () {
    return this._array.slice()
};
Oa.ArraySet = Bt;
var Qu = {}, ec = Ln;

function Jb(e, t) {
    var n = e.generatedLine, r = t.generatedLine, o = e.generatedColumn, i = t.generatedColumn;
    return r > n || r == n && i >= o || ec.compareByGeneratedPositionsInflated(e, t) <= 0
}

function Xr() {
    this._array = [], this._sorted = !0, this._last = {generatedLine: -1, generatedColumn: 0}
}

Xr.prototype.unsortedForEach = function (t, n) {
    this._array.forEach(t, n)
};
Xr.prototype.add = function (t) {
    Jb(this._last, t) ? (this._last = t, this._array.push(t)) : (this._sorted = !1, this._array.push(t))
};
Xr.prototype.toArray = function () {
    return this._sorted || (this._array.sort(ec.compareByGeneratedPositionsInflated), this._sorted = !0), this._array
};
Qu.MappingList = Xr;
var In = Yr, Ke = Ln, Nr = Oa.ArraySet, Zb = Qu.MappingList;

function mt(e) {
    e || (e = {}), this._file = Ke.getArg(e, "file", null), this._sourceRoot = Ke.getArg(e, "sourceRoot", null), this._skipValidation = Ke.getArg(e, "skipValidation", !1), this._sources = new Nr, this._names = new Nr, this._mappings = new Zb, this._sourcesContents = null
}

mt.prototype._version = 3;
mt.fromSourceMap = function (t) {
    var n = t.sourceRoot, r = new mt({file: t.file, sourceRoot: n});
    return t.eachMapping(function (o) {
        var i = {generated: {line: o.generatedLine, column: o.generatedColumn}};
        o.source != null && (i.source = o.source, n != null && (i.source = Ke.relative(n, i.source)), i.original = {
            line: o.originalLine,
            column: o.originalColumn
        }, o.name != null && (i.name = o.name)), r.addMapping(i)
    }), t.sources.forEach(function (o) {
        var i = o;
        n !== null && (i = Ke.relative(n, o)), r._sources.has(i) || r._sources.add(i);
        var a = t.sourceContentFor(o);
        a != null && r.setSourceContent(o, a)
    }), r
};
mt.prototype.addMapping = function (t) {
    var n = Ke.getArg(t, "generated"), r = Ke.getArg(t, "original", null), o = Ke.getArg(t, "source", null),
        i = Ke.getArg(t, "name", null);
    this._skipValidation || this._validateMapping(n, r, o, i), o != null && (o = String(o), this._sources.has(o) || this._sources.add(o)), i != null && (i = String(i), this._names.has(i) || this._names.add(i)), this._mappings.add({
        generatedLine: n.line,
        generatedColumn: n.column,
        originalLine: r != null && r.line,
        originalColumn: r != null && r.column,
        source: o,
        name: i
    })
};
mt.prototype.setSourceContent = function (t, n) {
    var r = t;
    this._sourceRoot != null && (r = Ke.relative(this._sourceRoot, r)), n != null ? (this._sourcesContents || (this._sourcesContents = Object.create(null)), this._sourcesContents[Ke.toSetString(r)] = n) : this._sourcesContents && (delete this._sourcesContents[Ke.toSetString(r)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null))
};
mt.prototype.applySourceMap = function (t, n, r) {
    var o = n;
    if (n == null) {
        if (t.file == null) throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);
        o = t.file
    }
    var i = this._sourceRoot;
    i != null && (o = Ke.relative(i, o));
    var a = new Nr, s = new Nr;
    this._mappings.unsortedForEach(function (l) {
        if (l.source === o && l.originalLine != null) {
            var u = t.originalPositionFor({line: l.originalLine, column: l.originalColumn});
            u.source != null && (l.source = u.source, r != null && (l.source = Ke.join(r, l.source)), i != null && (l.source = Ke.relative(i, l.source)), l.originalLine = u.line, l.originalColumn = u.column, u.name != null && (l.name = u.name))
        }
        var c = l.source;
        c != null && !a.has(c) && a.add(c);
        var f = l.name;
        f != null && !s.has(f) && s.add(f)
    }, this), this._sources = a, this._names = s, t.sources.forEach(function (l) {
        var u = t.sourceContentFor(l);
        u != null && (r != null && (l = Ke.join(r, l)), i != null && (l = Ke.relative(i, l)), this.setSourceContent(l, u))
    }, this)
};
mt.prototype._validateMapping = function (t, n, r, o) {
    if (n && typeof n.line != "number" && typeof n.column != "number") throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
    if (!(t && "line" in t && "column" in t && t.line > 0 && t.column >= 0 && !n && !r && !o)) {
        if (t && "line" in t && "column" in t && n && "line" in n && "column" in n && t.line > 0 && t.column >= 0 && n.line > 0 && n.column >= 0 && r) return;
        throw new Error("Invalid mapping: " + JSON.stringify({generated: t, source: r, original: n, name: o}))
    }
};
mt.prototype._serializeMappings = function () {
    for (var t = 0, n = 1, r = 0, o = 0, i = 0, a = 0, s = "", l, u, c, f, p = this._mappings.toArray(), _ = 0, S = p.length; _ < S; _++) {
        if (u = p[_], l = "", u.generatedLine !== n) for (t = 0; u.generatedLine !== n;) l += ";", n++; else if (_ > 0) {
            if (!Ke.compareByGeneratedPositionsInflated(u, p[_ - 1])) continue;
            l += ","
        }
        l += In.encode(u.generatedColumn - t), t = u.generatedColumn, u.source != null && (f = this._sources.indexOf(u.source), l += In.encode(f - a), a = f, l += In.encode(u.originalLine - 1 - o), o = u.originalLine - 1, l += In.encode(u.originalColumn - r), r = u.originalColumn, u.name != null && (c = this._names.indexOf(u.name), l += In.encode(c - i), i = c)), s += l
    }
    return s
};
mt.prototype._generateSourcesContent = function (t, n) {
    return t.map(function (r) {
        if (!this._sourcesContents) return null;
        n != null && (r = Ke.relative(n, r));
        var o = Ke.toSetString(r);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, o) ? this._sourcesContents[o] : null
    }, this)
};
mt.prototype.toJSON = function () {
    var t = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings()
    };
    return this._file != null && (t.file = this._file), this._sourceRoot != null && (t.sourceRoot = this._sourceRoot), this._sourcesContents && (t.sourcesContent = this._generateSourcesContent(t.sources, t.sourceRoot)), t
};
mt.prototype.toString = function () {
    return JSON.stringify(this.toJSON())
};
Ea.SourceMapGenerator = mt;
var Jr = {}, tc = {};
(function (e) {
    e.GREATEST_LOWER_BOUND = 1, e.LEAST_UPPER_BOUND = 2;

    function t(n, r, o, i, a, s) {
        var l = Math.floor((r - n) / 2) + n, u = a(o, i[l], !0);
        return u === 0 ? l : u > 0 ? r - l > 1 ? t(l, r, o, i, a, s) : s == e.LEAST_UPPER_BOUND ? r < i.length ? r : -1 : l : l - n > 1 ? t(n, l, o, i, a, s) : s == e.LEAST_UPPER_BOUND ? l : n < 0 ? -1 : n
    }

    e.search = function (r, o, i, a) {
        if (o.length === 0) return -1;
        var s = t(-1, o.length, r, o, i, a || e.GREATEST_LOWER_BOUND);
        if (s < 0) return -1;
        for (; s - 1 >= 0 && i(o[s], o[s - 1], !0) === 0;) --s;
        return s
    }
})(tc);
var nc = {};

function li(e, t, n) {
    var r = e[t];
    e[t] = e[n], e[n] = r
}

function Qb(e, t) {
    return Math.round(e + Math.random() * (t - e))
}

function zi(e, t, n, r) {
    if (n < r) {
        var o = Qb(n, r), i = n - 1;
        li(e, o, r);
        for (var a = e[r], s = n; s < r; s++) t(e[s], a) <= 0 && (i += 1, li(e, i, s));
        li(e, i + 1, s);
        var l = i + 1;
        zi(e, t, n, l - 1), zi(e, t, l + 1, r)
    }
}

nc.quickSort = function (e, t) {
    zi(e, t, 0, e.length - 1)
};
var ce = Ln, Aa = tc, Sn = Oa.ArraySet, e_ = Yr, Hn = nc.quickSort;

function je(e, t) {
    var n = e;
    return typeof e == "string" && (n = ce.parseSourceMapInput(e)), n.sections != null ? new St(n, t) : new rt(n, t)
}

je.fromSourceMap = function (e, t) {
    return rt.fromSourceMap(e, t)
};
je.prototype._version = 3;
je.prototype.__generatedMappings = null;
Object.defineProperty(je.prototype, "_generatedMappings", {
    configurable: !0, enumerable: !0, get: function () {
        return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings
    }
});
je.prototype.__originalMappings = null;
Object.defineProperty(je.prototype, "_originalMappings", {
    configurable: !0, enumerable: !0, get: function () {
        return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings
    }
});
je.prototype._charIsMappingSeparator = function (t, n) {
    var r = t.charAt(n);
    return r === ";" || r === ","
};
je.prototype._parseMappings = function (t, n) {
    throw new Error("Subclasses must implement _parseMappings")
};
je.GENERATED_ORDER = 1;
je.ORIGINAL_ORDER = 2;
je.GREATEST_LOWER_BOUND = 1;
je.LEAST_UPPER_BOUND = 2;
je.prototype.eachMapping = function (t, n, r) {
    var o = n || null, i = r || je.GENERATED_ORDER, a;
    switch (i) {
        case je.GENERATED_ORDER:
            a = this._generatedMappings;
            break;
        case je.ORIGINAL_ORDER:
            a = this._originalMappings;
            break;
        default:
            throw new Error("Unknown order of iteration.")
    }
    var s = this.sourceRoot;
    a.map(function (l) {
        var u = l.source === null ? null : this._sources.at(l.source);
        return u = ce.computeSourceURL(s, u, this._sourceMapURL), {
            source: u,
            generatedLine: l.generatedLine,
            generatedColumn: l.generatedColumn,
            originalLine: l.originalLine,
            originalColumn: l.originalColumn,
            name: l.name === null ? null : this._names.at(l.name)
        }
    }, this).forEach(t, o)
};
je.prototype.allGeneratedPositionsFor = function (t) {
    var n = ce.getArg(t, "line"),
        r = {source: ce.getArg(t, "source"), originalLine: n, originalColumn: ce.getArg(t, "column", 0)};
    if (r.source = this._findSourceIndex(r.source), r.source < 0) return [];
    var o = [],
        i = this._findMapping(r, this._originalMappings, "originalLine", "originalColumn", ce.compareByOriginalPositions, Aa.LEAST_UPPER_BOUND);
    if (i >= 0) {
        var a = this._originalMappings[i];
        if (t.column === void 0) for (var s = a.originalLine; a && a.originalLine === s;) o.push({
            line: ce.getArg(a, "generatedLine", null),
            column: ce.getArg(a, "generatedColumn", null),
            lastColumn: ce.getArg(a, "lastGeneratedColumn", null)
        }), a = this._originalMappings[++i]; else for (var l = a.originalColumn; a && a.originalLine === n && a.originalColumn == l;) o.push({
            line: ce.getArg(a, "generatedLine", null),
            column: ce.getArg(a, "generatedColumn", null),
            lastColumn: ce.getArg(a, "lastGeneratedColumn", null)
        }), a = this._originalMappings[++i]
    }
    return o
};
Jr.SourceMapConsumer = je;

function rt(e, t) {
    var n = e;
    typeof e == "string" && (n = ce.parseSourceMapInput(e));
    var r = ce.getArg(n, "version"), o = ce.getArg(n, "sources"), i = ce.getArg(n, "names", []),
        a = ce.getArg(n, "sourceRoot", null), s = ce.getArg(n, "sourcesContent", null), l = ce.getArg(n, "mappings"),
        u = ce.getArg(n, "file", null);
    if (r != this._version) throw new Error("Unsupported version: " + r);
    a && (a = ce.normalize(a)), o = o.map(String).map(ce.normalize).map(function (c) {
        return a && ce.isAbsolute(a) && ce.isAbsolute(c) ? ce.relative(a, c) : c
    }), this._names = Sn.fromArray(i.map(String), !0), this._sources = Sn.fromArray(o, !0), this._absoluteSources = this._sources.toArray().map(function (c) {
        return ce.computeSourceURL(a, c, t)
    }), this.sourceRoot = a, this.sourcesContent = s, this._mappings = l, this._sourceMapURL = t, this.file = u
}

rt.prototype = Object.create(je.prototype);
rt.prototype.consumer = je;
rt.prototype._findSourceIndex = function (e) {
    var t = e;
    if (this.sourceRoot != null && (t = ce.relative(this.sourceRoot, t)), this._sources.has(t)) return this._sources.indexOf(t);
    var n;
    for (n = 0; n < this._absoluteSources.length; ++n) if (this._absoluteSources[n] == e) return n;
    return -1
};
rt.fromSourceMap = function (t, n) {
    var r = Object.create(rt.prototype), o = r._names = Sn.fromArray(t._names.toArray(), !0),
        i = r._sources = Sn.fromArray(t._sources.toArray(), !0);
    r.sourceRoot = t._sourceRoot, r.sourcesContent = t._generateSourcesContent(r._sources.toArray(), r.sourceRoot), r.file = t._file, r._sourceMapURL = n, r._absoluteSources = r._sources.toArray().map(function (_) {
        return ce.computeSourceURL(r.sourceRoot, _, n)
    });
    for (var a = t._mappings.toArray().slice(), s = r.__generatedMappings = [], l = r.__originalMappings = [], u = 0, c = a.length; u < c; u++) {
        var f = a[u], p = new rc;
        p.generatedLine = f.generatedLine, p.generatedColumn = f.generatedColumn, f.source && (p.source = i.indexOf(f.source), p.originalLine = f.originalLine, p.originalColumn = f.originalColumn, f.name && (p.name = o.indexOf(f.name)), l.push(p)), s.push(p)
    }
    return Hn(r.__originalMappings, ce.compareByOriginalPositions), r
};
rt.prototype._version = 3;
Object.defineProperty(rt.prototype, "sources", {
    get: function () {
        return this._absoluteSources.slice()
    }
});

function rc() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null
}

rt.prototype._parseMappings = function (t, n) {
    for (var r = 1, o = 0, i = 0, a = 0, s = 0, l = 0, u = t.length, c = 0, f = {}, p = {}, _ = [], S = [], w, L, g, $, E; c < u;) if (t.charAt(c) === ";") r++, c++, o = 0; else if (t.charAt(c) === ",") c++; else {
        for (w = new rc, w.generatedLine = r, $ = c; $ < u && !this._charIsMappingSeparator(t, $); $++) ;
        if (L = t.slice(c, $), g = f[L], g) c += L.length; else {
            for (g = []; c < $;) e_.decode(t, c, p), E = p.value, c = p.rest, g.push(E);
            if (g.length === 2) throw new Error("Found a source, but no line and column");
            if (g.length === 3) throw new Error("Found a source and line, but no column");
            f[L] = g
        }
        w.generatedColumn = o + g[0], o = w.generatedColumn, g.length > 1 && (w.source = s + g[1], s += g[1], w.originalLine = i + g[2], i = w.originalLine, w.originalLine += 1, w.originalColumn = a + g[3], a = w.originalColumn, g.length > 4 && (w.name = l + g[4], l += g[4])), S.push(w), typeof w.originalLine == "number" && _.push(w)
    }
    Hn(S, ce.compareByGeneratedPositionsDeflated), this.__generatedMappings = S, Hn(_, ce.compareByOriginalPositions), this.__originalMappings = _
};
rt.prototype._findMapping = function (t, n, r, o, i, a) {
    if (t[r] <= 0) throw new TypeError("Line must be greater than or equal to 1, got " + t[r]);
    if (t[o] < 0) throw new TypeError("Column must be greater than or equal to 0, got " + t[o]);
    return Aa.search(t, n, i, a)
};
rt.prototype.computeColumnSpans = function () {
    for (var t = 0; t < this._generatedMappings.length; ++t) {
        var n = this._generatedMappings[t];
        if (t + 1 < this._generatedMappings.length) {
            var r = this._generatedMappings[t + 1];
            if (n.generatedLine === r.generatedLine) {
                n.lastGeneratedColumn = r.generatedColumn - 1;
                continue
            }
        }
        n.lastGeneratedColumn = 1 / 0
    }
};
rt.prototype.originalPositionFor = function (t) {
    var n = {generatedLine: ce.getArg(t, "line"), generatedColumn: ce.getArg(t, "column")},
        r = this._findMapping(n, this._generatedMappings, "generatedLine", "generatedColumn", ce.compareByGeneratedPositionsDeflated, ce.getArg(t, "bias", je.GREATEST_LOWER_BOUND));
    if (r >= 0) {
        var o = this._generatedMappings[r];
        if (o.generatedLine === n.generatedLine) {
            var i = ce.getArg(o, "source", null);
            i !== null && (i = this._sources.at(i), i = ce.computeSourceURL(this.sourceRoot, i, this._sourceMapURL));
            var a = ce.getArg(o, "name", null);
            return a !== null && (a = this._names.at(a)), {
                source: i,
                line: ce.getArg(o, "originalLine", null),
                column: ce.getArg(o, "originalColumn", null),
                name: a
            }
        }
    }
    return {source: null, line: null, column: null, name: null}
};
rt.prototype.hasContentsOfAllSources = function () {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function (t) {
        return t == null
    }) : !1
};
rt.prototype.sourceContentFor = function (t, n) {
    if (!this.sourcesContent) return null;
    var r = this._findSourceIndex(t);
    if (r >= 0) return this.sourcesContent[r];
    var o = t;
    this.sourceRoot != null && (o = ce.relative(this.sourceRoot, o));
    var i;
    if (this.sourceRoot != null && (i = ce.urlParse(this.sourceRoot))) {
        var a = o.replace(/^file:\/\//, "");
        if (i.scheme == "file" && this._sources.has(a)) return this.sourcesContent[this._sources.indexOf(a)];
        if ((!i.path || i.path == "/") && this._sources.has("/" + o)) return this.sourcesContent[this._sources.indexOf("/" + o)]
    }
    if (n) return null;
    throw new Error('"' + o + '" is not in the SourceMap.')
};
rt.prototype.generatedPositionFor = function (t) {
    var n = ce.getArg(t, "source");
    if (n = this._findSourceIndex(n), n < 0) return {line: null, column: null, lastColumn: null};
    var r = {source: n, originalLine: ce.getArg(t, "line"), originalColumn: ce.getArg(t, "column")},
        o = this._findMapping(r, this._originalMappings, "originalLine", "originalColumn", ce.compareByOriginalPositions, ce.getArg(t, "bias", je.GREATEST_LOWER_BOUND));
    if (o >= 0) {
        var i = this._originalMappings[o];
        if (i.source === r.source) return {
            line: ce.getArg(i, "generatedLine", null),
            column: ce.getArg(i, "generatedColumn", null),
            lastColumn: ce.getArg(i, "lastGeneratedColumn", null)
        }
    }
    return {line: null, column: null, lastColumn: null}
};
Jr.BasicSourceMapConsumer = rt;

function St(e, t) {
    var n = e;
    typeof e == "string" && (n = ce.parseSourceMapInput(e));
    var r = ce.getArg(n, "version"), o = ce.getArg(n, "sections");
    if (r != this._version) throw new Error("Unsupported version: " + r);
    this._sources = new Sn, this._names = new Sn;
    var i = {line: -1, column: 0};
    this._sections = o.map(function (a) {
        if (a.url) throw new Error("Support for url field in sections not implemented.");
        var s = ce.getArg(a, "offset"), l = ce.getArg(s, "line"), u = ce.getArg(s, "column");
        if (l < i.line || l === i.line && u < i.column) throw new Error("Section offsets must be ordered and non-overlapping.");
        return i = s, {
            generatedOffset: {generatedLine: l + 1, generatedColumn: u + 1},
            consumer: new je(ce.getArg(a, "map"), t)
        }
    })
}

St.prototype = Object.create(je.prototype);
St.prototype.constructor = je;
St.prototype._version = 3;
Object.defineProperty(St.prototype, "sources", {
    get: function () {
        for (var e = [], t = 0; t < this._sections.length; t++) for (var n = 0; n < this._sections[t].consumer.sources.length; n++) e.push(this._sections[t].consumer.sources[n]);
        return e
    }
});
St.prototype.originalPositionFor = function (t) {
    var n = {generatedLine: ce.getArg(t, "line"), generatedColumn: ce.getArg(t, "column")},
        r = Aa.search(n, this._sections, function (i, a) {
            var s = i.generatedLine - a.generatedOffset.generatedLine;
            return s || i.generatedColumn - a.generatedOffset.generatedColumn
        }), o = this._sections[r];
    return o ? o.consumer.originalPositionFor({
        line: n.generatedLine - (o.generatedOffset.generatedLine - 1),
        column: n.generatedColumn - (o.generatedOffset.generatedLine === n.generatedLine ? o.generatedOffset.generatedColumn - 1 : 0),
        bias: t.bias
    }) : {source: null, line: null, column: null, name: null}
};
St.prototype.hasContentsOfAllSources = function () {
    return this._sections.every(function (t) {
        return t.consumer.hasContentsOfAllSources()
    })
};
St.prototype.sourceContentFor = function (t, n) {
    for (var r = 0; r < this._sections.length; r++) {
        var o = this._sections[r], i = o.consumer.sourceContentFor(t, !0);
        if (i) return i
    }
    if (n) return null;
    throw new Error('"' + t + '" is not in the SourceMap.')
};
St.prototype.generatedPositionFor = function (t) {
    for (var n = 0; n < this._sections.length; n++) {
        var r = this._sections[n];
        if (r.consumer._findSourceIndex(ce.getArg(t, "source")) !== -1) {
            var o = r.consumer.generatedPositionFor(t);
            if (o) {
                var i = {
                    line: o.line + (r.generatedOffset.generatedLine - 1),
                    column: o.column + (r.generatedOffset.generatedLine === o.line ? r.generatedOffset.generatedColumn - 1 : 0)
                };
                return i
            }
        }
    }
    return {line: null, column: null}
};
St.prototype._parseMappings = function (t, n) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var r = 0; r < this._sections.length; r++) for (var o = this._sections[r], i = o.consumer._generatedMappings, a = 0; a < i.length; a++) {
        var s = i[a], l = o.consumer._sources.at(s.source);
        l = ce.computeSourceURL(o.consumer.sourceRoot, l, this._sourceMapURL), this._sources.add(l), l = this._sources.indexOf(l);
        var u = null;
        s.name && (u = o.consumer._names.at(s.name), this._names.add(u), u = this._names.indexOf(u));
        var c = {
            source: l,
            generatedLine: s.generatedLine + (o.generatedOffset.generatedLine - 1),
            generatedColumn: s.generatedColumn + (o.generatedOffset.generatedLine === s.generatedLine ? o.generatedOffset.generatedColumn - 1 : 0),
            originalLine: s.originalLine,
            originalColumn: s.originalColumn,
            name: u
        };
        this.__generatedMappings.push(c), typeof c.originalLine == "number" && this.__originalMappings.push(c)
    }
    Hn(this.__generatedMappings, ce.compareByGeneratedPositionsDeflated), Hn(this.__originalMappings, ce.compareByOriginalPositions)
};
Jr.IndexedSourceMapConsumer = St;
var oc = {}, t_ = Ea.SourceMapGenerator, Pr = Ln, n_ = /(\r?\n)/, r_ = 10, Tn = "$$$isSourceNode$$$";

function ut(e, t, n, r, o) {
    this.children = [], this.sourceContents = {}, this.line = e ?? null, this.column = t ?? null, this.source = n ?? null, this.name = o ?? null, this[Tn] = !0, r != null && this.add(r)
}

ut.fromStringWithSourceMap = function (t, n, r) {
    var o = new ut, i = t.split(n_), a = 0, s = function () {
        var p = S(), _ = S() || "";
        return p + _;

        function S() {
            return a < i.length ? i[a++] : void 0
        }
    }, l = 1, u = 0, c = null;
    return n.eachMapping(function (p) {
        if (c !== null) if (l < p.generatedLine) f(c, s()), l++, u = 0; else {
            var _ = i[a] || "", S = _.substr(0, p.generatedColumn - u);
            i[a] = _.substr(p.generatedColumn - u), u = p.generatedColumn, f(c, S), c = p;
            return
        }
        for (; l < p.generatedLine;) o.add(s()), l++;
        if (u < p.generatedColumn) {
            var _ = i[a] || "";
            o.add(_.substr(0, p.generatedColumn)), i[a] = _.substr(p.generatedColumn), u = p.generatedColumn
        }
        c = p
    }, this), a < i.length && (c && f(c, s()), o.add(i.splice(a).join(""))), n.sources.forEach(function (p) {
        var _ = n.sourceContentFor(p);
        _ != null && (r != null && (p = Pr.join(r, p)), o.setSourceContent(p, _))
    }), o;

    function f(p, _) {
        if (p === null || p.source === void 0) o.add(_); else {
            var S = r ? Pr.join(r, p.source) : p.source;
            o.add(new ut(p.originalLine, p.originalColumn, S, _, p.name))
        }
    }
};
ut.prototype.add = function (t) {
    if (Array.isArray(t)) t.forEach(function (n) {
        this.add(n)
    }, this); else if (t[Tn] || typeof t == "string") t && this.children.push(t); else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + t);
    return this
};
ut.prototype.prepend = function (t) {
    if (Array.isArray(t)) for (var n = t.length - 1; n >= 0; n--) this.prepend(t[n]); else if (t[Tn] || typeof t == "string") this.children.unshift(t); else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + t);
    return this
};
ut.prototype.walk = function (t) {
    for (var n, r = 0, o = this.children.length; r < o; r++) n = this.children[r], n[Tn] ? n.walk(t) : n !== "" && t(n, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
    })
};
ut.prototype.join = function (t) {
    var n, r, o = this.children.length;
    if (o > 0) {
        for (n = [], r = 0; r < o - 1; r++) n.push(this.children[r]), n.push(t);
        n.push(this.children[r]), this.children = n
    }
    return this
};
ut.prototype.replaceRight = function (t, n) {
    var r = this.children[this.children.length - 1];
    return r[Tn] ? r.replaceRight(t, n) : typeof r == "string" ? this.children[this.children.length - 1] = r.replace(t, n) : this.children.push("".replace(t, n)), this
};
ut.prototype.setSourceContent = function (t, n) {
    this.sourceContents[Pr.toSetString(t)] = n
};
ut.prototype.walkSourceContents = function (t) {
    for (var n = 0, r = this.children.length; n < r; n++) this.children[n][Tn] && this.children[n].walkSourceContents(t);
    for (var o = Object.keys(this.sourceContents), n = 0, r = o.length; n < r; n++) t(Pr.fromSetString(o[n]), this.sourceContents[o[n]])
};
ut.prototype.toString = function () {
    var t = "";
    return this.walk(function (n) {
        t += n
    }), t
};
ut.prototype.toStringWithSourceMap = function (t) {
    var n = {code: "", line: 1, column: 0}, r = new t_(t), o = !1, i = null, a = null, s = null, l = null;
    return this.walk(function (u, c) {
        n.code += u, c.source !== null && c.line !== null && c.column !== null ? ((i !== c.source || a !== c.line || s !== c.column || l !== c.name) && r.addMapping({
            source: c.source,
            original: {line: c.line, column: c.column},
            generated: {line: n.line, column: n.column},
            name: c.name
        }), i = c.source, a = c.line, s = c.column, l = c.name, o = !0) : o && (r.addMapping({
            generated: {
                line: n.line,
                column: n.column
            }
        }), i = null, o = !1);
        for (var f = 0, p = u.length; f < p; f++) u.charCodeAt(f) === r_ ? (n.line++, n.column = 0, f + 1 === p ? (i = null, o = !1) : o && r.addMapping({
            source: c.source,
            original: {line: c.line, column: c.column},
            generated: {line: n.line, column: n.column},
            name: c.name
        })) : n.column++
    }), this.walkSourceContents(function (u, c) {
        r.setSourceContent(u, c)
    }), {code: n.code, map: r}
};
oc.SourceNode = ut;
Kr.SourceMapGenerator = Ea.SourceMapGenerator;
Kr.SourceMapConsumer = Jr.SourceMapConsumer;
Kr.SourceNode = oc.SourceNode;/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
Object.defineProperty(vt, "__esModule", {value: !0});
var Ir = wa, o_ = Kr;
const Ce = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    __EXTEND_POINT__: 15
}, i_ = {
    [Ce.EXPECTED_TOKEN]: "Expected token: '{0}'",
    [Ce.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
    [Ce.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
    [Ce.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
    [Ce.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
    [Ce.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
    [Ce.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
    [Ce.EMPTY_PLACEHOLDER]: "Empty placeholder",
    [Ce.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
    [Ce.INVALID_LINKED_FORMAT]: "Invalid linked format",
    [Ce.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
    [Ce.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
    [Ce.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
    [Ce.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'"
};

function Na(e, t, n = {}) {
    const {domain: r, messages: o, args: i} = n, a = e, s = new SyntaxError(String(a));
    return s.code = e, t && (s.location = t), s.domain = r, s
}

function a_(e) {
    throw e
}

const ic = {start: {line: 1, column: 1, offset: 0}, end: {line: 1, column: 1, offset: 0}};

function ac(e, t, n) {
    return {line: e, column: t, offset: n}
}

function Mr(e, t, n) {
    const r = {start: e, end: t};
    return n != null && (r.source = n), r
}

const It = " ", s_ = "\r", it = `
`, l_ = String.fromCharCode(8232), u_ = String.fromCharCode(8233);

function c_(e) {
    const t = e;
    let n = 0, r = 1, o = 1, i = 0;
    const a = v => t[v] === s_ && t[v + 1] === it, s = v => t[v] === it, l = v => t[v] === u_, u = v => t[v] === l_,
        c = v => a(v) || s(v) || l(v) || u(v), f = () => n, p = () => r, _ = () => o, S = () => i,
        w = v => a(v) || l(v) || u(v) ? it : t[v], L = () => w(n), g = () => w(n + i);

    function $() {
        return i = 0, c(n) && (r++, o = 0), a(n) && n++, n++, o++, t[n]
    }

    function E() {
        return a(n + i) && i++, i++, t[n + i]
    }

    function h() {
        n = 0, r = 1, o = 1, i = 0
    }

    function m(v = 0) {
        i = v
    }

    function b() {
        const v = n + i;
        for (; v !== n;) $();
        i = 0
    }

    return {
        index: f,
        line: p,
        column: _,
        peekOffset: S,
        charAt: w,
        currentChar: L,
        currentPeek: g,
        next: $,
        peek: E,
        reset: h,
        resetPeek: m,
        skipToPeek: b
    }
}

const xt = void 0, sl = "'", f_ = "tokenizer";

function d_(e, t = {}) {
    const n = t.location !== !1, r = c_(e), o = () => r.index(), i = () => ac(r.line(), r.column(), r.index()), a = i(),
        s = o(), l = {
            currentType: 14,
            offset: s,
            startLoc: a,
            endLoc: a,
            lastType: 14,
            lastOffset: s,
            lastStartLoc: a,
            lastEndLoc: a,
            braceNest: 0,
            inLinked: !1,
            text: ""
        }, u = () => l, {onError: c} = t;

    function f(y, d, O, ...q) {
        const ne = u();
        if (d.column += O, d.offset += O, c) {
            const _e = Mr(ne.startLoc, d), Ze = Na(y, _e, {domain: f_, args: q});
            c(Ze)
        }
    }

    function p(y, d, O) {
        y.endLoc = i(), y.currentType = d;
        const q = {type: d};
        return n && (q.loc = Mr(y.startLoc, y.endLoc)), O != null && (q.value = O), q
    }

    const _ = y => p(y, 14);

    function S(y, d) {
        return y.currentChar() === d ? (y.next(), d) : (f(Ce.EXPECTED_TOKEN, i(), 0, d), "")
    }

    function w(y) {
        let d = "";
        for (; y.currentPeek() === It || y.currentPeek() === it;) d += y.currentPeek(), y.peek();
        return d
    }

    function L(y) {
        const d = w(y);
        return y.skipToPeek(), d
    }

    function g(y) {
        if (y === xt) return !1;
        const d = y.charCodeAt(0);
        return d >= 97 && d <= 122 || d >= 65 && d <= 90 || d === 95
    }

    function $(y) {
        if (y === xt) return !1;
        const d = y.charCodeAt(0);
        return d >= 48 && d <= 57
    }

    function E(y, d) {
        const {currentType: O} = d;
        if (O !== 2) return !1;
        w(y);
        const q = g(y.currentPeek());
        return y.resetPeek(), q
    }

    function h(y, d) {
        const {currentType: O} = d;
        if (O !== 2) return !1;
        w(y);
        const q = y.currentPeek() === "-" ? y.peek() : y.currentPeek(), ne = $(q);
        return y.resetPeek(), ne
    }

    function m(y, d) {
        const {currentType: O} = d;
        if (O !== 2) return !1;
        w(y);
        const q = y.currentPeek() === sl;
        return y.resetPeek(), q
    }

    function b(y, d) {
        const {currentType: O} = d;
        if (O !== 8) return !1;
        w(y);
        const q = y.currentPeek() === ".";
        return y.resetPeek(), q
    }

    function v(y, d) {
        const {currentType: O} = d;
        if (O !== 9) return !1;
        w(y);
        const q = g(y.currentPeek());
        return y.resetPeek(), q
    }

    function N(y, d) {
        const {currentType: O} = d;
        if (!(O === 8 || O === 12)) return !1;
        w(y);
        const q = y.currentPeek() === ":";
        return y.resetPeek(), q
    }

    function T(y, d) {
        const {currentType: O} = d;
        if (O !== 10) return !1;
        const q = () => {
            const _e = y.currentPeek();
            return _e === "{" ? g(y.peek()) : _e === "@" || _e === "%" || _e === "|" || _e === ":" || _e === "." || _e === It || !_e ? !1 : _e === it ? (y.peek(), q()) : g(_e)
        }, ne = q();
        return y.resetPeek(), ne
    }

    function A(y) {
        w(y);
        const d = y.currentPeek() === "|";
        return y.resetPeek(), d
    }

    function j(y) {
        const d = w(y), O = y.currentPeek() === "%" && y.peek() === "{";
        return y.resetPeek(), {isModulo: O, hasSpace: d.length > 0}
    }

    function Z(y, d = !0) {
        const O = (ne = !1, _e = "", Ze = !1) => {
            const et = y.currentPeek();
            return et === "{" ? _e === "%" ? !1 : ne : et === "@" || !et ? _e === "%" ? !0 : ne : et === "%" ? (y.peek(), O(ne, "%", !0)) : et === "|" ? _e === "%" || Ze ? !0 : !(_e === It || _e === it) : et === It ? (y.peek(), O(!0, It, Ze)) : et === it ? (y.peek(), O(!0, it, Ze)) : !0
        }, q = O();
        return d && y.resetPeek(), q
    }

    function W(y, d) {
        const O = y.currentChar();
        return O === xt ? xt : d(O) ? (y.next(), O) : null
    }

    function k(y) {
        return W(y, O => {
            const q = O.charCodeAt(0);
            return q >= 97 && q <= 122 || q >= 65 && q <= 90 || q >= 48 && q <= 57 || q === 95 || q === 36
        })
    }

    function P(y) {
        return W(y, O => {
            const q = O.charCodeAt(0);
            return q >= 48 && q <= 57
        })
    }

    function F(y) {
        return W(y, O => {
            const q = O.charCodeAt(0);
            return q >= 48 && q <= 57 || q >= 65 && q <= 70 || q >= 97 && q <= 102
        })
    }

    function x(y) {
        let d = "", O = "";
        for (; d = P(y);) O += d;
        return O
    }

    function K(y) {
        L(y);
        const d = y.currentChar();
        return d !== "%" && f(Ce.EXPECTED_TOKEN, i(), 0, d), y.next(), "%"
    }

    function B(y) {
        let d = "";
        for (; ;) {
            const O = y.currentChar();
            if (O === "{" || O === "}" || O === "@" || O === "|" || !O) break;
            if (O === "%") if (Z(y)) d += O, y.next(); else break; else if (O === It || O === it) if (Z(y)) d += O, y.next(); else {
                if (A(y)) break;
                d += O, y.next()
            } else d += O, y.next()
        }
        return d
    }

    function I(y) {
        L(y);
        let d = "", O = "";
        for (; d = k(y);) O += d;
        return y.currentChar() === xt && f(Ce.UNTERMINATED_CLOSING_BRACE, i(), 0), O
    }

    function Y(y) {
        L(y);
        let d = "";
        return y.currentChar() === "-" ? (y.next(), d += `-${x(y)}`) : d += x(y), y.currentChar() === xt && f(Ce.UNTERMINATED_CLOSING_BRACE, i(), 0), d
    }

    function Q(y) {
        L(y), S(y, "'");
        let d = "", O = "";
        const q = _e => _e !== sl && _e !== it;
        for (; d = W(y, q);) d === "\\" ? O += ve(y) : O += d;
        const ne = y.currentChar();
        return ne === it || ne === xt ? (f(Ce.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, i(), 0), ne === it && (y.next(), S(y, "'")), O) : (S(y, "'"), O)
    }

    function ve(y) {
        const d = y.currentChar();
        switch (d) {
            case"\\":
            case"'":
                return y.next(), `\\${d}`;
            case"u":
                return se(y, d, 4);
            case"U":
                return se(y, d, 6);
            default:
                return f(Ce.UNKNOWN_ESCAPE_SEQUENCE, i(), 0, d), ""
        }
    }

    function se(y, d, O) {
        S(y, d);
        let q = "";
        for (let ne = 0; ne < O; ne++) {
            const _e = F(y);
            if (!_e) {
                f(Ce.INVALID_UNICODE_ESCAPE_SEQUENCE, i(), 0, `\\${d}${q}${y.currentChar()}`);
                break
            }
            q += _e
        }
        return `\\${d}${q}`
    }

    function ge(y) {
        L(y);
        let d = "", O = "";
        const q = ne => ne !== "{" && ne !== "}" && ne !== It && ne !== it;
        for (; d = W(y, q);) O += d;
        return O
    }

    function Le(y) {
        let d = "", O = "";
        for (; d = k(y);) O += d;
        return O
    }

    function Ne(y) {
        const d = (O = !1, q) => {
            const ne = y.currentChar();
            return ne === "{" || ne === "%" || ne === "@" || ne === "|" || !ne || ne === It ? q : ne === it ? (q += ne, y.next(), d(O, q)) : (q += ne, y.next(), d(!0, q))
        };
        return d(!1, "")
    }

    function we(y) {
        L(y);
        const d = S(y, "|");
        return L(y), d
    }

    function $e(y, d) {
        let O = null;
        switch (y.currentChar()) {
            case"{":
                return d.braceNest >= 1 && f(Ce.NOT_ALLOW_NEST_PLACEHOLDER, i(), 0), y.next(), O = p(d, 2, "{"), L(y), d.braceNest++, O;
            case"}":
                return d.braceNest > 0 && d.currentType === 2 && f(Ce.EMPTY_PLACEHOLDER, i(), 0), y.next(), O = p(d, 3, "}"), d.braceNest--, d.braceNest > 0 && L(y), d.inLinked && d.braceNest === 0 && (d.inLinked = !1), O;
            case"@":
                return d.braceNest > 0 && f(Ce.UNTERMINATED_CLOSING_BRACE, i(), 0), O = Me(y, d) || _(d), d.braceNest = 0, O;
            default:
                let ne = !0, _e = !0, Ze = !0;
                if (A(y)) return d.braceNest > 0 && f(Ce.UNTERMINATED_CLOSING_BRACE, i(), 0), O = p(d, 1, we(y)), d.braceNest = 0, d.inLinked = !1, O;
                if (d.braceNest > 0 && (d.currentType === 5 || d.currentType === 6 || d.currentType === 7)) return f(Ce.UNTERMINATED_CLOSING_BRACE, i(), 0), d.braceNest = 0, ze(y, d);
                if (ne = E(y, d)) return O = p(d, 5, I(y)), L(y), O;
                if (_e = h(y, d)) return O = p(d, 6, Y(y)), L(y), O;
                if (Ze = m(y, d)) return O = p(d, 7, Q(y)), L(y), O;
                if (!ne && !_e && !Ze) return O = p(d, 13, ge(y)), f(Ce.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, O.value), L(y), O;
                break
        }
        return O
    }

    function Me(y, d) {
        const {currentType: O} = d;
        let q = null;
        const ne = y.currentChar();
        switch ((O === 8 || O === 9 || O === 12 || O === 10) && (ne === it || ne === It) && f(Ce.INVALID_LINKED_FORMAT, i(), 0), ne) {
            case"@":
                return y.next(), q = p(d, 8, "@"), d.inLinked = !0, q;
            case".":
                return L(y), y.next(), p(d, 9, ".");
            case":":
                return L(y), y.next(), p(d, 10, ":");
            default:
                return A(y) ? (q = p(d, 1, we(y)), d.braceNest = 0, d.inLinked = !1, q) : b(y, d) || N(y, d) ? (L(y), Me(y, d)) : v(y, d) ? (L(y), p(d, 12, Le(y))) : T(y, d) ? (L(y), ne === "{" ? $e(y, d) || q : p(d, 11, Ne(y))) : (O === 8 && f(Ce.INVALID_LINKED_FORMAT, i(), 0), d.braceNest = 0, d.inLinked = !1, ze(y, d))
        }
    }

    function ze(y, d) {
        let O = {type: 14};
        if (d.braceNest > 0) return $e(y, d) || _(d);
        if (d.inLinked) return Me(y, d) || _(d);
        switch (y.currentChar()) {
            case"{":
                return $e(y, d) || _(d);
            case"}":
                return f(Ce.UNBALANCED_CLOSING_BRACE, i(), 0), y.next(), p(d, 3, "}");
            case"@":
                return Me(y, d) || _(d);
            default:
                if (A(y)) return O = p(d, 1, we(y)), d.braceNest = 0, d.inLinked = !1, O;
                const {isModulo: ne, hasSpace: _e} = j(y);
                if (ne) return _e ? p(d, 0, B(y)) : p(d, 4, K(y));
                if (Z(y)) return p(d, 0, B(y));
                break
        }
        return O
    }

    function oe() {
        const {currentType: y, offset: d, startLoc: O, endLoc: q} = l;
        return l.lastType = y, l.lastOffset = d, l.lastStartLoc = O, l.lastEndLoc = q, l.offset = o(), l.startLoc = i(), r.currentChar() === xt ? p(l, 14) : ze(r, l)
    }

    return {nextToken: oe, currentOffset: o, currentPosition: i, context: u}
}

const sc = "parser", h_ = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

function p_(e, t, n) {
    switch (e) {
        case"\\\\":
            return "\\";
        case"\\'":
            return "'";
        default: {
            const r = parseInt(t || n, 16);
            return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�"
        }
    }
}

function lc(e = {}) {
    const t = e.location !== !1, {onError: n} = e;

    function r(g, $, E, h, ...m) {
        const b = g.currentPosition();
        if (b.offset += h, b.column += h, n) {
            const v = Mr(E, b), N = Na($, v, {domain: sc, args: m});
            n(N)
        }
    }

    function o(g, $, E) {
        const h = {type: g, start: $, end: $};
        return t && (h.loc = {start: E, end: E}), h
    }

    function i(g, $, E, h) {
        g.end = $, h && (g.type = h), t && g.loc && (g.loc.end = E)
    }

    function a(g, $) {
        const E = g.context(), h = o(3, E.offset, E.startLoc);
        return h.value = $, i(h, g.currentOffset(), g.currentPosition()), h
    }

    function s(g, $) {
        const E = g.context(), {lastOffset: h, lastStartLoc: m} = E, b = o(5, h, m);
        return b.index = parseInt($, 10), g.nextToken(), i(b, g.currentOffset(), g.currentPosition()), b
    }

    function l(g, $) {
        const E = g.context(), {lastOffset: h, lastStartLoc: m} = E, b = o(4, h, m);
        return b.key = $, g.nextToken(), i(b, g.currentOffset(), g.currentPosition()), b
    }

    function u(g, $) {
        const E = g.context(), {lastOffset: h, lastStartLoc: m} = E, b = o(9, h, m);
        return b.value = $.replace(h_, p_), g.nextToken(), i(b, g.currentOffset(), g.currentPosition()), b
    }

    function c(g) {
        const $ = g.nextToken(), E = g.context(), {lastOffset: h, lastStartLoc: m} = E, b = o(8, h, m);
        return $.type !== 12 ? (r(g, Ce.UNEXPECTED_EMPTY_LINKED_MODIFIER, E.lastStartLoc, 0), b.value = "", i(b, h, m), {
            nextConsumeToken: $,
            node: b
        }) : ($.value == null && r(g, Ce.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, wt($)), b.value = $.value || "", i(b, g.currentOffset(), g.currentPosition()), {node: b})
    }

    function f(g, $) {
        const E = g.context(), h = o(7, E.offset, E.startLoc);
        return h.value = $, i(h, g.currentOffset(), g.currentPosition()), h
    }

    function p(g) {
        const $ = g.context(), E = o(6, $.offset, $.startLoc);
        let h = g.nextToken();
        if (h.type === 9) {
            const m = c(g);
            E.modifier = m.node, h = m.nextConsumeToken || g.nextToken()
        }
        switch (h.type !== 10 && r(g, Ce.UNEXPECTED_LEXICAL_ANALYSIS, $.lastStartLoc, 0, wt(h)), h = g.nextToken(), h.type === 2 && (h = g.nextToken()), h.type) {
            case 11:
                h.value == null && r(g, Ce.UNEXPECTED_LEXICAL_ANALYSIS, $.lastStartLoc, 0, wt(h)), E.key = f(g, h.value || "");
                break;
            case 5:
                h.value == null && r(g, Ce.UNEXPECTED_LEXICAL_ANALYSIS, $.lastStartLoc, 0, wt(h)), E.key = l(g, h.value || "");
                break;
            case 6:
                h.value == null && r(g, Ce.UNEXPECTED_LEXICAL_ANALYSIS, $.lastStartLoc, 0, wt(h)), E.key = s(g, h.value || "");
                break;
            case 7:
                h.value == null && r(g, Ce.UNEXPECTED_LEXICAL_ANALYSIS, $.lastStartLoc, 0, wt(h)), E.key = u(g, h.value || "");
                break;
            default:
                r(g, Ce.UNEXPECTED_EMPTY_LINKED_KEY, $.lastStartLoc, 0);
                const m = g.context(), b = o(7, m.offset, m.startLoc);
                return b.value = "", i(b, m.offset, m.startLoc), E.key = b, i(E, m.offset, m.startLoc), {
                    nextConsumeToken: h,
                    node: E
                }
        }
        return i(E, g.currentOffset(), g.currentPosition()), {node: E}
    }

    function _(g) {
        const $ = g.context(), E = $.currentType === 1 ? g.currentOffset() : $.offset,
            h = $.currentType === 1 ? $.endLoc : $.startLoc, m = o(2, E, h);
        m.items = [];
        let b = null;
        do {
            const T = b || g.nextToken();
            switch (b = null, T.type) {
                case 0:
                    T.value == null && r(g, Ce.UNEXPECTED_LEXICAL_ANALYSIS, $.lastStartLoc, 0, wt(T)), m.items.push(a(g, T.value || ""));
                    break;
                case 6:
                    T.value == null && r(g, Ce.UNEXPECTED_LEXICAL_ANALYSIS, $.lastStartLoc, 0, wt(T)), m.items.push(s(g, T.value || ""));
                    break;
                case 5:
                    T.value == null && r(g, Ce.UNEXPECTED_LEXICAL_ANALYSIS, $.lastStartLoc, 0, wt(T)), m.items.push(l(g, T.value || ""));
                    break;
                case 7:
                    T.value == null && r(g, Ce.UNEXPECTED_LEXICAL_ANALYSIS, $.lastStartLoc, 0, wt(T)), m.items.push(u(g, T.value || ""));
                    break;
                case 8:
                    const A = p(g);
                    m.items.push(A.node), b = A.nextConsumeToken || null;
                    break
            }
        } while ($.currentType !== 14 && $.currentType !== 1);
        const v = $.currentType === 1 ? $.lastOffset : g.currentOffset(),
            N = $.currentType === 1 ? $.lastEndLoc : g.currentPosition();
        return i(m, v, N), m
    }

    function S(g, $, E, h) {
        const m = g.context();
        let b = h.items.length === 0;
        const v = o(1, $, E);
        v.cases = [], v.cases.push(h);
        do {
            const N = _(g);
            b || (b = N.items.length === 0), v.cases.push(N)
        } while (m.currentType !== 14);
        return b && r(g, Ce.MUST_HAVE_MESSAGES_IN_PLURAL, E, 0), i(v, g.currentOffset(), g.currentPosition()), v
    }

    function w(g) {
        const $ = g.context(), {offset: E, startLoc: h} = $, m = _(g);
        return $.currentType === 14 ? m : S(g, E, h, m)
    }

    function L(g) {
        const $ = d_(g, Ir.assign({}, e)), E = $.context(), h = o(0, E.offset, E.startLoc);
        return t && h.loc && (h.loc.source = g), h.body = w($), E.currentType !== 14 && r($, Ce.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, g[E.offset] || ""), i(h, $.currentOffset(), $.currentPosition()), h
    }

    return {parse: L}
}

function wt(e) {
    if (e.type === 14) return "EOF";
    const t = (e.value || "").replace(/\r?\n/gu, "\\n");
    return t.length > 10 ? t.slice(0, 9) + "…" : t
}

function m_(e, t = {}) {
    const n = {ast: e, helpers: new Set};
    return {context: () => n, helper: i => (n.helpers.add(i), i)}
}

function ll(e, t) {
    for (let n = 0; n < e.length; n++) Pa(e[n], t)
}

function Pa(e, t) {
    switch (e.type) {
        case 1:
            ll(e.cases, t), t.helper("plural");
            break;
        case 2:
            ll(e.items, t);
            break;
        case 6:
            Pa(e.key, t), t.helper("linked"), t.helper("type");
            break;
        case 5:
            t.helper("interpolate"), t.helper("list");
            break;
        case 4:
            t.helper("interpolate"), t.helper("named");
            break
    }
}

function v_(e, t = {}) {
    const n = m_(e);
    n.helper("normalize"), e.body && Pa(e.body, n);
    const r = n.context();
    e.helpers = Array.from(r.helpers)
}

function g_(e, t) {
    const {sourceMap: n, filename: r, breakLineCode: o, needIndent: i} = t, a = {
        source: e.loc.source,
        filename: r,
        code: "",
        column: 1,
        line: 1,
        offset: 0,
        map: void 0,
        breakLineCode: o,
        needIndent: i,
        indentLevel: 0
    }, s = () => a;

    function l(L, g) {
        a.code += L, a.map && (g && g.loc && g.loc !== ic && w(g.loc.start, w_(g)), E_(a, L))
    }

    function u(L, g = !0) {
        const $ = g ? o : "";
        l(i ? $ + "  ".repeat(L) : $)
    }

    function c(L = !0) {
        const g = ++a.indentLevel;
        L && u(g)
    }

    function f(L = !0) {
        const g = --a.indentLevel;
        L && u(g)
    }

    function p() {
        u(a.indentLevel)
    }

    const _ = L => `_${L}`, S = () => a.needIndent;

    function w(L, g) {
        a.map.addMapping({
            name: g,
            source: a.filename,
            original: {line: L.line, column: L.column - 1},
            generated: {line: a.line, column: a.column - 1}
        })
    }

    return n && (a.map = new o_.SourceMapGenerator, a.map.setSourceContent(r, a.source)), {
        context: s,
        push: l,
        indent: c,
        deindent: f,
        newline: p,
        helper: _,
        needIndent: S
    }
}

function y_(e, t) {
    const {helper: n} = e;
    e.push(`${n("linked")}(`), wn(e, t.key), t.modifier ? (e.push(", "), wn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
}

function b_(e, t) {
    const {helper: n, needIndent: r} = e;
    e.push(`${n("normalize")}([`), e.indent(r());
    const o = t.items.length;
    for (let i = 0; i < o && (wn(e, t.items[i]), i !== o - 1); i++) e.push(", ");
    e.deindent(r()), e.push("])")
}

function __(e, t) {
    const {helper: n, needIndent: r} = e;
    if (t.cases.length > 1) {
        e.push(`${n("plural")}([`), e.indent(r());
        const o = t.cases.length;
        for (let i = 0; i < o && (wn(e, t.cases[i]), i !== o - 1); i++) e.push(", ");
        e.deindent(r()), e.push("])")
    }
}

function C_(e, t) {
    t.body ? wn(e, t.body) : e.push("null")
}

function wn(e, t) {
    const {helper: n} = e;
    switch (t.type) {
        case 0:
            C_(e, t);
            break;
        case 1:
            __(e, t);
            break;
        case 2:
            b_(e, t);
            break;
        case 6:
            y_(e, t);
            break;
        case 8:
            e.push(JSON.stringify(t.value), t);
            break;
        case 7:
            e.push(JSON.stringify(t.value), t);
            break;
        case 5:
            e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
            break;
        case 4:
            e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
            break;
        case 9:
            e.push(JSON.stringify(t.value), t);
            break;
        case 3:
            e.push(JSON.stringify(t.value), t);
            break
    }
}

const S_ = (e, t = {}) => {
    const n = Ir.isString(t.mode) ? t.mode : "normal", r = Ir.isString(t.filename) ? t.filename : "message.intl",
        o = !!t.sourceMap, i = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [],
        l = g_(e, {mode: n, filename: r, sourceMap: o, breakLineCode: i, needIndent: a});
    l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(a), s.length > 0 && (l.push(`const { ${s.map(f => `${f}: _${f}`).join(", ")} } = ctx`), l.newline()), l.push("return "), wn(l, e), l.deindent(a), l.push("}");
    const {code: u, map: c} = l.context();
    return {ast: e, code: u, map: c ? c.toJSON() : void 0}
};

function w_(e) {
    switch (e.type) {
        case 3:
        case 9:
        case 8:
        case 7:
            return e.value;
        case 5:
            return e.index.toString();
        case 4:
            return e.key;
        default:
            return
    }
}

function E_(e, t, n = t.length) {
    let r = 0, o = -1;
    for (let i = 0; i < n; i++) t.charCodeAt(i) === 10 && (r++, o = i);
    return e.offset += n, e.line += r, e.column = o === -1 ? e.column + n : n - o, e
}

function $_(e, t = {}) {
    const n = Ir.assign({}, t), o = lc(n).parse(e);
    return v_(o, n), S_(o, n)
}

vt.CompileErrorCodes = Ce;
vt.ERROR_DOMAIN = sc;
vt.LocationStub = ic;
vt.baseCompile = $_;
vt.createCompileError = Na;
vt.createLocation = Mr;
vt.createParser = lc;
vt.createPosition = ac;
vt.defaultOnError = a_;
vt.errorMessages = i_;
Ku.exports = vt;
var k_ = Ku.exports, uc = {exports: {}}, Ia = {};/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
Object.defineProperty(Ia, "__esModule", {value: !0});
const O_ = {I18nInit: "i18n:init", FunctionTranslate: "function:translate"};
Ia.IntlifyDevToolsHooks = O_;
uc.exports = Ia;
var L_ = uc.exports;/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
Object.defineProperty(be, "__esModule", {value: !0});
var En = k_, z = wa, cc = L_;
const Xt = [];
Xt[0] = {w: [0], i: [3, 0], ["["]: [4], o: [7]};
Xt[1] = {w: [1], ["."]: [2], ["["]: [4], o: [7]};
Xt[2] = {w: [2], i: [3, 0], [0]: [3, 0]};
Xt[3] = {i: [3, 0], [0]: [3, 0], w: [1, 1], ["."]: [2, 1], ["["]: [4, 1], o: [7, 1]};
Xt[4] = {["'"]: [5, 0], ['"']: [6, 0], ["["]: [4, 2], ["]"]: [1, 3], o: 8, l: [4, 0]};
Xt[5] = {["'"]: [4, 0], o: 8, l: [5, 0]};
Xt[6] = {['"']: [4, 0], o: 8, l: [6, 0]};
const T_ = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

function A_(e) {
    return T_.test(e)
}

function N_(e) {
    const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
    return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}

function P_(e) {
    if (e == null) return "o";
    switch (e.charCodeAt(0)) {
        case 91:
        case 93:
        case 46:
        case 34:
        case 39:
            return e;
        case 95:
        case 36:
        case 45:
            return "i";
        case 9:
        case 10:
        case 13:
        case 160:
        case 65279:
        case 8232:
        case 8233:
            return "w"
    }
    return "i"
}

function I_(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : A_(t) ? N_(t) : "*" + t
}

function fc(e) {
    const t = [];
    let n = -1, r = 0, o = 0, i, a, s, l, u, c, f;
    const p = [];
    p[0] = () => {
        a === void 0 ? a = s : a += s
    }, p[1] = () => {
        a !== void 0 && (t.push(a), a = void 0)
    }, p[2] = () => {
        p[0](), o++
    }, p[3] = () => {
        if (o > 0) o--, r = 4, p[0](); else {
            if (o = 0, a === void 0 || (a = I_(a), a === !1)) return !1;
            p[1]()
        }
    };

    function _() {
        const S = e[n + 1];
        if (r === 5 && S === "'" || r === 6 && S === '"') return n++, s = "\\" + S, p[0](), !0
    }

    for (; r !== null;) if (n++, i = e[n], !(i === "\\" && _())) {
        if (l = P_(i), f = Xt[r], u = f[l] || f.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (c = p[u[1]], c && (s = i, c() === !1)))) return;
        if (r === 7) return t
    }
}

const ul = new Map;

function dc(e, t) {
    return z.isObject(e) ? e[t] : null
}

function M_(e, t) {
    if (!z.isObject(e)) return null;
    let n = ul.get(t);
    if (n || (n = fc(t), n && ul.set(t, n)), !n) return null;
    const r = n.length;
    let o = e, i = 0;
    for (; i < r;) {
        const a = o[n[i]];
        if (a === void 0) return null;
        o = a, i++
    }
    return o
}

const R_ = e => e, B_ = e => "", hc = "text", D_ = e => e.length === 0 ? "" : e.join(""), j_ = z.toDisplayString;

function cl(e, t) {
    return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}

function F_(e) {
    const t = z.isNumber(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (z.isNumber(e.named.count) || z.isNumber(e.named.n)) ? z.isNumber(e.named.count) ? e.named.count : z.isNumber(e.named.n) ? e.named.n : t : t
}

function V_(e, t) {
    t.count || (t.count = e), t.n || (t.n = e)
}

function pc(e = {}) {
    const t = e.locale, n = F_(e),
        r = z.isObject(e.pluralRules) && z.isString(t) && z.isFunction(e.pluralRules[t]) ? e.pluralRules[t] : cl,
        o = z.isObject(e.pluralRules) && z.isString(t) && z.isFunction(e.pluralRules[t]) ? cl : void 0,
        i = g => g[r(n, g.length, o)], a = e.list || [], s = g => a[g], l = e.named || {};
    z.isNumber(e.pluralIndex) && V_(n, l);
    const u = g => l[g];

    function c(g) {
        const $ = z.isFunction(e.messages) ? e.messages(g) : z.isObject(e.messages) ? e.messages[g] : !1;
        return $ || (e.parent ? e.parent.message(g) : B_)
    }

    const f = g => e.modifiers ? e.modifiers[g] : R_,
        p = z.isPlainObject(e.processor) && z.isFunction(e.processor.normalize) ? e.processor.normalize : D_,
        _ = z.isPlainObject(e.processor) && z.isFunction(e.processor.interpolate) ? e.processor.interpolate : j_,
        S = z.isPlainObject(e.processor) && z.isString(e.processor.type) ? e.processor.type : hc, L = {
            list: s, named: u, plural: i, linked: (g, ...$) => {
                const [E, h] = $;
                let m = "text", b = "";
                $.length === 1 ? z.isObject(E) ? (b = E.modifier || b, m = E.type || m) : z.isString(E) && (b = E || b) : $.length === 2 && (z.isString(E) && (b = E || b), z.isString(h) && (m = h || m));
                let v = c(g)(L);
                return m === "vnode" && z.isArray(v) && b && (v = v[0]), b ? f(b)(v, m) : v
            }, message: c, type: S, interpolate: _, normalize: p
        };
    return L
}

let $n = null;

function x_(e) {
    $n = e
}

function z_() {
    return $n
}

function U_(e, t, n) {
    $n && $n.emit(cc.IntlifyDevToolsHooks.I18nInit, {timestamp: Date.now(), i18n: e, version: t, meta: n})
}

const W_ = H_(cc.IntlifyDevToolsHooks.FunctionTranslate);

function H_(e) {
    return t => $n && $n.emit(e, t)
}

const Qt = {
    NOT_FOUND_KEY: 1,
    FALLBACK_TO_TRANSLATE: 2,
    CANNOT_FORMAT_NUMBER: 3,
    FALLBACK_TO_NUMBER_FORMAT: 4,
    CANNOT_FORMAT_DATE: 5,
    FALLBACK_TO_DATE_FORMAT: 6,
    __EXTEND_POINT__: 7
}, q_ = {
    [Qt.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
    [Qt.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
    [Qt.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
    [Qt.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
    [Qt.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
    [Qt.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale."
};

function G_(e, ...t) {
    return z.format(q_[e], ...t)
}

function mc(e, t, n) {
    return [...new Set([n, ...z.isArray(t) ? t : z.isObject(t) ? Object.keys(t) : z.isString(t) ? [t] : [n]])]
}

function K_(e, t, n) {
    const r = z.isString(n) ? n : Ma, o = e;
    o.__localeChainCache || (o.__localeChainCache = new Map);
    let i = o.__localeChainCache.get(r);
    if (!i) {
        i = [];
        let a = [n];
        for (; z.isArray(a);) a = fl(i, a, t);
        const s = z.isArray(t) || !z.isPlainObject(t) ? t : t.default ? t.default : null;
        a = z.isString(s) ? [s] : s, z.isArray(a) && fl(i, a, !1), o.__localeChainCache.set(r, i)
    }
    return i
}

function fl(e, t, n) {
    let r = !0;
    for (let o = 0; o < t.length && z.isBoolean(r); o++) {
        const i = t[o];
        z.isString(i) && (r = Y_(e, t[o], n))
    }
    return r
}

function Y_(e, t, n) {
    let r;
    const o = t.split("-");
    do {
        const i = o.join("-");
        r = X_(e, i, n), o.splice(-1, 1)
    } while (o.length && r === !0);
    return r
}

function X_(e, t, n) {
    let r = !1;
    if (!e.includes(t) && (r = !0, t)) {
        r = t[t.length - 1] !== "!";
        const o = t.replace(/!/g, "");
        e.push(o), (z.isArray(n) || z.isPlainObject(n)) && n[o] && (r = n[o])
    }
    return r
}

const vc = "9.2.2", Zr = -1, Ma = "en-US", J_ = "", dl = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;

function Z_() {
    return {
        upper: (e, t) => t === "text" && z.isString(e) ? e.toUpperCase() : t === "vnode" && z.isObject(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
        lower: (e, t) => t === "text" && z.isString(e) ? e.toLowerCase() : t === "vnode" && z.isObject(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
        capitalize: (e, t) => t === "text" && z.isString(e) ? dl(e) : t === "vnode" && z.isObject(e) && "__v_isVNode" in e ? dl(e.children) : e
    }
}

let gc;

function Q_(e) {
    gc = e
}

let yc;

function e0(e) {
    yc = e
}

let bc;

function t0(e) {
    bc = e
}

let _c = null;
const n0 = e => {
    _c = e
}, r0 = () => _c;
let Cc = null;
const o0 = e => {
    Cc = e
}, i0 = () => Cc;
let hl = 0;

function a0(e = {}) {
    const t = z.isString(e.version) ? e.version : vc, n = z.isString(e.locale) ? e.locale : Ma,
        r = z.isArray(e.fallbackLocale) || z.isPlainObject(e.fallbackLocale) || z.isString(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : n,
        o = z.isPlainObject(e.messages) ? e.messages : {[n]: {}},
        i = z.isPlainObject(e.datetimeFormats) ? e.datetimeFormats : {[n]: {}},
        a = z.isPlainObject(e.numberFormats) ? e.numberFormats : {[n]: {}}, s = z.assign({}, e.modifiers || {}, Z_()),
        l = e.pluralRules || {}, u = z.isFunction(e.missing) ? e.missing : null,
        c = z.isBoolean(e.missingWarn) || z.isRegExp(e.missingWarn) ? e.missingWarn : !0,
        f = z.isBoolean(e.fallbackWarn) || z.isRegExp(e.fallbackWarn) ? e.fallbackWarn : !0, p = !!e.fallbackFormat,
        _ = !!e.unresolving, S = z.isFunction(e.postTranslation) ? e.postTranslation : null,
        w = z.isPlainObject(e.processor) ? e.processor : null,
        L = z.isBoolean(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, g = !!e.escapeParameter,
        $ = z.isFunction(e.messageCompiler) ? e.messageCompiler : gc,
        E = z.isFunction(e.messageResolver) ? e.messageResolver : yc || dc,
        h = z.isFunction(e.localeFallbacker) ? e.localeFallbacker : bc || mc,
        m = z.isObject(e.fallbackContext) ? e.fallbackContext : void 0, b = z.isFunction(e.onWarn) ? e.onWarn : z.warn,
        v = e, N = z.isObject(v.__datetimeFormatters) ? v.__datetimeFormatters : new Map,
        T = z.isObject(v.__numberFormatters) ? v.__numberFormatters : new Map, A = z.isObject(v.__meta) ? v.__meta : {};
    hl++;
    const j = {
        version: t,
        cid: hl,
        locale: n,
        fallbackLocale: r,
        messages: o,
        modifiers: s,
        pluralRules: l,
        missing: u,
        missingWarn: c,
        fallbackWarn: f,
        fallbackFormat: p,
        unresolving: _,
        postTranslation: S,
        processor: w,
        warnHtmlMessage: L,
        escapeParameter: g,
        messageCompiler: $,
        messageResolver: E,
        localeFallbacker: h,
        fallbackContext: m,
        onWarn: b,
        __meta: A
    };
    return j.datetimeFormats = i, j.numberFormats = a, j.__datetimeFormatters = N, j.__numberFormatters = T, j
}

function s0(e, t) {
    return e instanceof RegExp ? e.test(t) : e
}

function l0(e, t) {
    return e instanceof RegExp ? e.test(t) : e
}

function Qr(e, t, n, r, o) {
    const {missing: i, onWarn: a} = e;
    if (i !== null) {
        const s = i(e, n, t, o);
        return z.isString(s) ? s : t
    } else return t
}

function u0(e, t, n) {
    const r = e;
    r.__localeChainCache = new Map, e.localeFallbacker(e, n, t)
}

const c0 = e => e;
let Ui = Object.create(null);

function f0() {
    Ui = Object.create(null)
}

function d0(e, t = {}) {
    {
        const r = (t.onCacheKey || c0)(e), o = Ui[r];
        if (o) return o;
        let i = !1;
        const a = t.onError || En.defaultOnError;
        t.onError = u => {
            i = !0, a(u)
        };
        const {code: s} = En.baseCompile(e, t), l = new Function(`return ${s}`)();
        return i ? l : Ui[r] = l
    }
}

let Sc = En.CompileErrorCodes.__EXTEND_POINT__;
const ui = () => ++Sc,
    Et = {INVALID_ARGUMENT: Sc, INVALID_DATE_ARGUMENT: ui(), INVALID_ISO_DATE_ARGUMENT: ui(), __EXTEND_POINT__: ui()};

function tn(e) {
    return En.createCompileError(e, null, void 0)
}

Et.INVALID_ARGUMENT + "", Et.INVALID_DATE_ARGUMENT + "", Et.INVALID_ISO_DATE_ARGUMENT + "";
const pl = () => "", Ut = e => z.isFunction(e);

function h0(e, ...t) {
    const {
            fallbackFormat: n,
            postTranslation: r,
            unresolving: o,
            messageCompiler: i,
            fallbackLocale: a,
            messages: s
        } = e, [l, u] = $c(...t), c = z.isBoolean(u.missingWarn) ? u.missingWarn : e.missingWarn,
        f = z.isBoolean(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn,
        p = z.isBoolean(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, _ = !!u.resolvedMessage,
        S = z.isString(u.default) || z.isBoolean(u.default) ? z.isBoolean(u.default) ? i ? l : () => l : u.default : n ? i ? l : () => l : "",
        w = n || S !== "", L = z.isString(u.locale) ? u.locale : e.locale;
    p && p0(u);
    let [g, $, E] = _ ? [l, L, s[L] || {}] : wc(e, l, L, a, f, c), h = g, m = l;
    if (!_ && !(z.isString(h) || Ut(h)) && w && (h = S, m = h), !_ && (!(z.isString(h) || Ut(h)) || !z.isString($))) return o ? Zr : l;
    let b = !1;
    const v = () => {
        b = !0
    }, N = Ut(h) ? h : Ec(e, l, $, h, m, v);
    if (b) return h;
    const T = g0(e, $, E, u), A = pc(T), j = m0(e, N, A);
    return r ? r(j, l) : j
}

function p0(e) {
    z.isArray(e.list) ? e.list = e.list.map(t => z.isString(t) ? z.escapeHtml(t) : t) : z.isObject(e.named) && Object.keys(e.named).forEach(t => {
        z.isString(e.named[t]) && (e.named[t] = z.escapeHtml(e.named[t]))
    })
}

function wc(e, t, n, r, o, i) {
    const {messages: a, onWarn: s, messageResolver: l, localeFallbacker: u} = e, c = u(e, r, n);
    let f = {}, p, _ = null;
    const S = "translate";
    for (let w = 0; w < c.length && (p = c[w], f = a[p] || {}, (_ = l(f, t)) === null && (_ = f[t]), !(z.isString(_) || z.isFunction(_))); w++) {
        const L = Qr(e, t, p, i, S);
        L !== t && (_ = L)
    }
    return [_, p, f]
}

function Ec(e, t, n, r, o, i) {
    const {messageCompiler: a, warnHtmlMessage: s} = e;
    if (Ut(r)) {
        const u = r;
        return u.locale = u.locale || n, u.key = u.key || t, u
    }
    if (a == null) {
        const u = () => r;
        return u.locale = n, u.key = t, u
    }
    const l = a(r, v0(e, n, o, r, s, i));
    return l.locale = n, l.key = t, l.source = r, l
}

function m0(e, t, n) {
    return t(n)
}

function $c(...e) {
    const [t, n, r] = e, o = {};
    if (!z.isString(t) && !z.isNumber(t) && !Ut(t)) throw tn(Et.INVALID_ARGUMENT);
    const i = z.isNumber(t) ? String(t) : (Ut(t), t);
    return z.isNumber(n) ? o.plural = n : z.isString(n) ? o.default = n : z.isPlainObject(n) && !z.isEmptyObject(n) ? o.named = n : z.isArray(n) && (o.list = n), z.isNumber(r) ? o.plural = r : z.isString(r) ? o.default = r : z.isPlainObject(r) && z.assign(o, r), [i, o]
}

function v0(e, t, n, r, o, i) {
    return {
        warnHtmlMessage: o, onError: a => {
            throw i && i(a), a
        }, onCacheKey: a => z.generateFormatCacheKey(t, n, a)
    }
}

function g0(e, t, n, r) {
    const {
        modifiers: o,
        pluralRules: i,
        messageResolver: a,
        fallbackLocale: s,
        fallbackWarn: l,
        missingWarn: u,
        fallbackContext: c
    } = e, p = {
        locale: t, modifiers: o, pluralRules: i, messages: _ => {
            let S = a(n, _);
            if (S == null && c) {
                const [, , w] = wc(c, _, t, s, l, u);
                S = a(w, _)
            }
            if (z.isString(S)) {
                let w = !1;
                const g = Ec(e, _, t, S, _, () => {
                    w = !0
                });
                return w ? pl : g
            } else return Ut(S) ? S : pl
        }
    };
    return e.processor && (p.processor = e.processor), r.list && (p.list = r.list), r.named && (p.named = r.named), z.isNumber(r.plural) && (p.pluralIndex = r.plural), p
}

function y0(e, ...t) {
    const {
            datetimeFormats: n,
            unresolving: r,
            fallbackLocale: o,
            onWarn: i,
            localeFallbacker: a
        } = e, {__datetimeFormatters: s} = e, [l, u, c, f] = Oc(...t),
        p = z.isBoolean(c.missingWarn) ? c.missingWarn : e.missingWarn;
    z.isBoolean(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
    const _ = !!c.part, S = z.isString(c.locale) ? c.locale : e.locale, w = a(e, o, S);
    if (!z.isString(l) || l === "") return new Intl.DateTimeFormat(S, f).format(u);
    let L = {}, g, $ = null;
    const E = "datetime format";
    for (let b = 0; b < w.length && (g = w[b], L = n[g] || {}, $ = L[l], !z.isPlainObject($)); b++) Qr(e, l, g, p, E);
    if (!z.isPlainObject($) || !z.isString(g)) return r ? Zr : l;
    let h = `${g}__${l}`;
    z.isEmptyObject(f) || (h = `${h}__${JSON.stringify(f)}`);
    let m = s.get(h);
    return m || (m = new Intl.DateTimeFormat(g, z.assign({}, $, f)), s.set(h, m)), _ ? m.formatToParts(u) : m.format(u)
}

const kc = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

function Oc(...e) {
    const [t, n, r, o] = e, i = {};
    let a = {}, s;
    if (z.isString(t)) {
        const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!l) throw tn(Et.INVALID_ISO_DATE_ARGUMENT);
        const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
        s = new Date(u);
        try {
            s.toISOString()
        } catch {
            throw tn(Et.INVALID_ISO_DATE_ARGUMENT)
        }
    } else if (z.isDate(t)) {
        if (isNaN(t.getTime())) throw tn(Et.INVALID_DATE_ARGUMENT);
        s = t
    } else if (z.isNumber(t)) s = t; else throw tn(Et.INVALID_ARGUMENT);
    return z.isString(n) ? i.key = n : z.isPlainObject(n) && Object.keys(n).forEach(l => {
        kc.includes(l) ? a[l] = n[l] : i[l] = n[l]
    }), z.isString(r) ? i.locale = r : z.isPlainObject(r) && (a = r), z.isPlainObject(o) && (a = o), [i.key || "", s, i, a]
}

function b0(e, t, n) {
    const r = e;
    for (const o in n) {
        const i = `${t}__${o}`;
        r.__datetimeFormatters.has(i) && r.__datetimeFormatters.delete(i)
    }
}

function _0(e, ...t) {
    const {
            numberFormats: n,
            unresolving: r,
            fallbackLocale: o,
            onWarn: i,
            localeFallbacker: a
        } = e, {__numberFormatters: s} = e, [l, u, c, f] = Tc(...t),
        p = z.isBoolean(c.missingWarn) ? c.missingWarn : e.missingWarn;
    z.isBoolean(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
    const _ = !!c.part, S = z.isString(c.locale) ? c.locale : e.locale, w = a(e, o, S);
    if (!z.isString(l) || l === "") return new Intl.NumberFormat(S, f).format(u);
    let L = {}, g, $ = null;
    const E = "number format";
    for (let b = 0; b < w.length && (g = w[b], L = n[g] || {}, $ = L[l], !z.isPlainObject($)); b++) Qr(e, l, g, p, E);
    if (!z.isPlainObject($) || !z.isString(g)) return r ? Zr : l;
    let h = `${g}__${l}`;
    z.isEmptyObject(f) || (h = `${h}__${JSON.stringify(f)}`);
    let m = s.get(h);
    return m || (m = new Intl.NumberFormat(g, z.assign({}, $, f)), s.set(h, m)), _ ? m.formatToParts(u) : m.format(u)
}

const Lc = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

function Tc(...e) {
    const [t, n, r, o] = e, i = {};
    let a = {};
    if (!z.isNumber(t)) throw tn(Et.INVALID_ARGUMENT);
    const s = t;
    return z.isString(n) ? i.key = n : z.isPlainObject(n) && Object.keys(n).forEach(l => {
        Lc.includes(l) ? a[l] = n[l] : i[l] = n[l]
    }), z.isString(r) ? i.locale = r : z.isPlainObject(r) && (a = r), z.isPlainObject(o) && (a = o), [i.key || "", s, i, a]
}

function C0(e, t, n) {
    const r = e;
    for (const o in n) {
        const i = `${t}__${o}`;
        r.__numberFormatters.has(i) && r.__numberFormatters.delete(i)
    }
}

be.CompileErrorCodes = En.CompileErrorCodes;
be.createCompileError = En.createCompileError;
be.CoreErrorCodes = Et;
be.CoreWarnCodes = Qt;
be.DATETIME_FORMAT_OPTIONS_KEYS = kc;
be.DEFAULT_LOCALE = Ma;
be.DEFAULT_MESSAGE_DATA_TYPE = hc;
be.MISSING_RESOLVE_VALUE = J_;
be.NOT_REOSLVED = Zr;
be.NUMBER_FORMAT_OPTIONS_KEYS = Lc;
be.VERSION = vc;
be.clearCompileCache = f0;
be.clearDateTimeFormat = b0;
be.clearNumberFormat = C0;
be.compileToFunction = d0;
be.createCoreContext = a0;
be.createCoreError = tn;
be.createMessageContext = pc;
be.datetime = y0;
be.fallbackWithLocaleChain = K_;
be.fallbackWithSimple = mc;
be.getAdditionalMeta = r0;
be.getDevToolsHook = z_;
be.getFallbackContext = i0;
be.getWarnMessage = G_;
be.handleMissing = Qr;
be.initI18nDevTools = U_;
be.isMessageFunction = Ut;
be.isTranslateFallbackWarn = s0;
be.isTranslateMissingWarn = l0;
be.number = _0;
be.parse = fc;
be.parseDateTimeArgs = Oc;
be.parseNumberArgs = Tc;
be.parseTranslateArgs = $c;
be.registerLocaleFallbacker = t0;
be.registerMessageCompiler = Q_;
be.registerMessageResolver = e0;
be.resolveValue = M_;
be.resolveWithKeyValue = dc;
be.setAdditionalMeta = n0;
be.setDevToolsHook = x_;
be.setFallbackContext = o0;
be.translate = h0;
be.translateDevTools = W_;
be.updateFallbackLocale = u0;
Gu.exports = be;
var S0 = Gu.exports;
const w0 = $f(Sf);/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
Object.defineProperty(At, "__esModule", {value: !0});
var M = wa, ye = S0, ke = w0;
const Ac = "9.2.2";
let Nc = ye.CoreWarnCodes.__EXTEND_POINT__;
const fn = () => ++Nc, tt = {
    FALLBACK_TO_ROOT: Nc,
    NOT_SUPPORTED_PRESERVE: fn(),
    NOT_SUPPORTED_FORMATTER: fn(),
    NOT_SUPPORTED_PRESERVE_DIRECTIVE: fn(),
    NOT_SUPPORTED_GET_CHOICE_INDEX: fn(),
    COMPONENT_NAME_LEGACY_COMPATIBLE: fn(),
    NOT_FOUND_PARENT_SCOPE: fn()
}, E0 = {
    [tt.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
    [tt.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
    [tt.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
    [tt.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
    [tt.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
    [tt.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
    [tt.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope."
};

function bt(e, ...t) {
    return M.format(E0[e], ...t)
}

let Pc = ye.CompileErrorCodes.__EXTEND_POINT__;
const at = () => ++Pc, Te = {
    UNEXPECTED_RETURN_TYPE: Pc,
    INVALID_ARGUMENT: at(),
    MUST_BE_CALL_SETUP_TOP: at(),
    NOT_INSLALLED: at(),
    NOT_AVAILABLE_IN_LEGACY_MODE: at(),
    REQUIRED_VALUE: at(),
    INVALID_VALUE: at(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: at(),
    NOT_INSLALLED_WITH_PROVIDE: at(),
    UNEXPECTED_ERROR: at(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: at(),
    BRIDGE_SUPPORT_VUE_2_ONLY: at(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: at(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: at(),
    __EXTEND_POINT__: at()
};

function Je(e, ...t) {
    return ye.createCompileError(e, null, {messages: $0, args: t})
}

const $0 = {
        [Te.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
        [Te.INVALID_ARGUMENT]: "Invalid argument",
        [Te.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
        [Te.NOT_INSLALLED]: "Need to install with `app.use` function",
        [Te.UNEXPECTED_ERROR]: "Unexpected error",
        [Te.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
        [Te.REQUIRED_VALUE]: "Required in value: {0}",
        [Te.INVALID_VALUE]: "Invalid value",
        [Te.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
        [Te.NOT_INSLALLED_WITH_PROVIDE]: "Need to install with `provide` function",
        [Te.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
        [Te.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
        [Te.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
        [Te.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
    }, Wi = M.makeSymbol("__transrateVNode"), Hi = M.makeSymbol("__datetimeParts"), qi = M.makeSymbol("__numberParts"),
    Gi = M.makeSymbol("__enableEmitter"), Ki = M.makeSymbol("__disableEmitter"), Ic = M.makeSymbol("__setPluralRules");
M.makeSymbol("__intlifyMeta");
const Mc = M.makeSymbol("__injectWithOption"), k0 = "__VUE_I18N_BRIDGE__";

function Yi(e) {
    if (!M.isObject(e)) return e;
    for (const t in e) if (M.hasOwn(e, t)) if (!t.includes(".")) M.isObject(e[t]) && Yi(e[t]); else {
        const n = t.split("."), r = n.length - 1;
        let o = e;
        for (let i = 0; i < r; i++) n[i] in o || (o[n[i]] = {}), o = o[n[i]];
        o[n[r]] = e[t], delete e[t], M.isObject(o[n[r]]) && Yi(o[n[r]])
    }
    return e
}

function eo(e, t) {
    const {messages: n, __i18n: r, messageResolver: o, flatJson: i} = t,
        a = M.isPlainObject(n) ? n : M.isArray(r) ? {} : {[e]: {}};
    if (M.isArray(r) && r.forEach(s => {
        if ("locale" in s && "resource" in s) {
            const {locale: l, resource: u} = s;
            l ? (a[l] = a[l] || {}, xn(u, a[l])) : xn(u, a)
        } else M.isString(s) && xn(JSON.parse(s), a)
    }), o == null && i) for (const s in a) M.hasOwn(a, s) && Yi(a[s]);
    return a
}

const ar = e => !M.isObject(e) || M.isArray(e);

function xn(e, t) {
    if (ar(e) || ar(t)) throw Je(Te.INVALID_VALUE);
    for (const n in e) M.hasOwn(e, n) && (ar(e[n]) || ar(t[n]) ? t[n] = e[n] : xn(e[n], t[n]))
}

function Rc(e) {
    return e.type
}

function Bc(e, t, n) {
    let r = M.isObject(t.messages) ? t.messages : {};
    "__i18nGlobal" in n && (r = eo(e.locale.value, {messages: r, __i18n: n.__i18nGlobal}));
    const o = Object.keys(r);
    o.length && o.forEach(i => {
        e.mergeLocaleMessage(i, r[i])
    });
    {
        if (M.isObject(t.datetimeFormats)) {
            const i = Object.keys(t.datetimeFormats);
            i.length && i.forEach(a => {
                e.mergeDateTimeFormat(a, t.datetimeFormats[a])
            })
        }
        if (M.isObject(t.numberFormats)) {
            const i = Object.keys(t.numberFormats);
            i.length && i.forEach(a => {
                e.mergeNumberFormat(a, t.numberFormats[a])
            })
        }
    }
}

function ml(e) {
    return ke.createVNode(ke.Text, null, e, 0)
}

const vl = "__INTLIFY_META__";
let gl = 0;

function yl(e) {
    return (t, n, r, o) => e(n, r, ke.getCurrentInstance() || void 0, o)
}

const O0 = () => {
    const e = ke.getCurrentInstance();
    let t = null;
    return e && (t = Rc(e)[vl]) ? {[vl]: t} : null
};

function Ra(e = {}, t) {
    const {__root: n} = e, r = n === void 0;
    let o = M.isBoolean(e.inheritLocale) ? e.inheritLocale : !0;
    const i = ke.ref(n && o ? n.locale.value : M.isString(e.locale) ? e.locale : ye.DEFAULT_LOCALE),
        a = ke.ref(n && o ? n.fallbackLocale.value : M.isString(e.fallbackLocale) || M.isArray(e.fallbackLocale) || M.isPlainObject(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value),
        s = ke.ref(eo(i.value, e)),
        l = ke.ref(M.isPlainObject(e.datetimeFormats) ? e.datetimeFormats : {[i.value]: {}}),
        u = ke.ref(M.isPlainObject(e.numberFormats) ? e.numberFormats : {[i.value]: {}});
    let c = n ? n.missingWarn : M.isBoolean(e.missingWarn) || M.isRegExp(e.missingWarn) ? e.missingWarn : !0,
        f = n ? n.fallbackWarn : M.isBoolean(e.fallbackWarn) || M.isRegExp(e.fallbackWarn) ? e.fallbackWarn : !0,
        p = n ? n.fallbackRoot : M.isBoolean(e.fallbackRoot) ? e.fallbackRoot : !0, _ = !!e.fallbackFormat,
        S = M.isFunction(e.missing) ? e.missing : null, w = M.isFunction(e.missing) ? yl(e.missing) : null,
        L = M.isFunction(e.postTranslation) ? e.postTranslation : null,
        g = n ? n.warnHtmlMessage : M.isBoolean(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, $ = !!e.escapeParameter;
    const E = n ? n.modifiers : M.isPlainObject(e.modifiers) ? e.modifiers : {};
    let h = e.pluralRules || n && n.pluralRules, m;
    m = (() => {
        r && ye.setFallbackContext(null);
        const D = {
            version: Ac,
            locale: i.value,
            fallbackLocale: a.value,
            messages: s.value,
            modifiers: E,
            pluralRules: h,
            missing: w === null ? void 0 : w,
            missingWarn: c,
            fallbackWarn: f,
            fallbackFormat: _,
            unresolving: !0,
            postTranslation: L === null ? void 0 : L,
            warnHtmlMessage: g,
            escapeParameter: $,
            messageResolver: e.messageResolver,
            __meta: {framework: "vue"}
        };
        D.datetimeFormats = l.value, D.numberFormats = u.value, D.__datetimeFormatters = M.isPlainObject(m) ? m.__datetimeFormatters : void 0, D.__numberFormatters = M.isPlainObject(m) ? m.__numberFormatters : void 0, D.__v_emitter = M.isPlainObject(m) ? m.__v_emitter : void 0;
        const X = ye.createCoreContext(D);
        return r && ye.setFallbackContext(X), X
    })(), ye.updateFallbackLocale(m, i.value, a.value);

    function v() {
        return [i.value, a.value, s.value, l.value, u.value]
    }

    const N = ke.computed({
        get: () => i.value, set: D => {
            i.value = D, m.locale = i.value
        }
    }), T = ke.computed({
        get: () => a.value, set: D => {
            a.value = D, m.fallbackLocale = a.value, ye.updateFallbackLocale(m, i.value, D)
        }
    }), A = ke.computed(() => s.value), j = ke.computed(() => l.value), Z = ke.computed(() => u.value);

    function W() {
        return M.isFunction(L) ? L : null
    }

    function k(D) {
        L = D, m.postTranslation = D
    }

    function P() {
        return S
    }

    function F(D) {
        D !== null && (w = yl(D)), S = D, m.missing = w
    }

    function x(D, X) {
        return D !== "translate" || !X.resolvedMessage
    }

    const K = (D, X, He, H, ue, pe) => {
        v();
        let Ee;
        try {
            ye.setAdditionalMeta(O0()), r || (m.fallbackContext = n ? ye.getFallbackContext() : void 0), Ee = D(m)
        } finally {
            ye.setAdditionalMeta(null), r || (m.fallbackContext = void 0)
        }
        if (M.isNumber(Ee) && Ee === ye.NOT_REOSLVED) {
            const [st, Pt] = X();
            if (n && M.isString(st) && x(He, Pt)) {
                p && (ye.isTranslateFallbackWarn(f, st) || ye.isTranslateMissingWarn(c, st)) && M.warn(bt(tt.FALLBACK_TO_ROOT, {
                    key: st,
                    type: He
                }));
                {
                    const {__v_emitter: Ua} = m;
                    Ua && p && Ua.emit("fallback", {type: He, key: st, to: "global", groupId: `${He}:${st}`})
                }
            }
            return n && p ? H(n) : ue(st)
        } else {
            if (pe(Ee)) return Ee;
            throw Je(Te.UNEXPECTED_RETURN_TYPE)
        }
    };

    function B(...D) {
        return K(X => Reflect.apply(ye.translate, null, [X, ...D]), () => ye.parseTranslateArgs(...D), "translate", X => Reflect.apply(X.t, X, [...D]), X => X, X => M.isString(X))
    }

    function I(...D) {
        const [X, He, H] = D;
        if (H && !M.isObject(H)) throw Je(Te.INVALID_ARGUMENT);
        return B(X, He, M.assign({resolvedMessage: !0}, H || {}))
    }

    function Y(...D) {
        return K(X => Reflect.apply(ye.datetime, null, [X, ...D]), () => ye.parseDateTimeArgs(...D), "datetime format", X => Reflect.apply(X.d, X, [...D]), () => ye.MISSING_RESOLVE_VALUE, X => M.isString(X))
    }

    function Q(...D) {
        return K(X => Reflect.apply(ye.number, null, [X, ...D]), () => ye.parseNumberArgs(...D), "number format", X => Reflect.apply(X.n, X, [...D]), () => ye.MISSING_RESOLVE_VALUE, X => M.isString(X))
    }

    function ve(D) {
        return D.map(X => M.isString(X) || M.isNumber(X) || M.isBoolean(X) ? ml(String(X)) : X)
    }

    const ge = {normalize: ve, interpolate: D => D, type: "vnode"};

    function Le(...D) {
        return K(X => {
            let He;
            const H = X;
            try {
                H.processor = ge, He = Reflect.apply(ye.translate, null, [H, ...D])
            } finally {
                H.processor = null
            }
            return He
        }, () => ye.parseTranslateArgs(...D), "translate", X => X[Wi](...D), X => [ml(X)], X => M.isArray(X))
    }

    function Ne(...D) {
        return K(X => Reflect.apply(ye.number, null, [X, ...D]), () => ye.parseNumberArgs(...D), "number format", X => X[qi](...D), () => [], X => M.isString(X) || M.isArray(X))
    }

    function we(...D) {
        return K(X => Reflect.apply(ye.datetime, null, [X, ...D]), () => ye.parseDateTimeArgs(...D), "datetime format", X => X[Hi](...D), () => [], X => M.isString(X) || M.isArray(X))
    }

    function $e(D) {
        h = D, m.pluralRules = h
    }

    function Me(D, X) {
        const He = M.isString(X) ? X : i.value, H = y(He);
        return m.messageResolver(H, D) !== null
    }

    function ze(D) {
        let X = null;
        const He = ye.fallbackWithLocaleChain(m, a.value, i.value);
        for (let H = 0; H < He.length; H++) {
            const ue = s.value[He[H]] || {}, pe = m.messageResolver(ue, D);
            if (pe != null) {
                X = pe;
                break
            }
        }
        return X
    }

    function oe(D) {
        const X = ze(D);
        return X ?? (n ? n.tm(D) || {} : {})
    }

    function y(D) {
        return s.value[D] || {}
    }

    function d(D, X) {
        s.value[D] = X, m.messages = s.value
    }

    function O(D, X) {
        s.value[D] = s.value[D] || {}, xn(X, s.value[D]), m.messages = s.value
    }

    function q(D) {
        return l.value[D] || {}
    }

    function ne(D, X) {
        l.value[D] = X, m.datetimeFormats = l.value, ye.clearDateTimeFormat(m, D, X)
    }

    function _e(D, X) {
        l.value[D] = M.assign(l.value[D] || {}, X), m.datetimeFormats = l.value, ye.clearDateTimeFormat(m, D, X)
    }

    function Ze(D) {
        return u.value[D] || {}
    }

    function et(D, X) {
        u.value[D] = X, m.numberFormats = u.value, ye.clearNumberFormat(m, D, X)
    }

    function Nn(D, X) {
        u.value[D] = M.assign(u.value[D] || {}, X), m.numberFormats = u.value, ye.clearNumberFormat(m, D, X)
    }

    gl++, n && M.inBrowser && (ke.watch(n.locale, D => {
        o && (i.value = D, m.locale = D, ye.updateFallbackLocale(m, i.value, a.value))
    }), ke.watch(n.fallbackLocale, D => {
        o && (a.value = D, m.fallbackLocale = D, ye.updateFallbackLocale(m, i.value, a.value))
    }));
    const ee = {
        id: gl,
        locale: N,
        fallbackLocale: T,
        get inheritLocale() {
            return o
        },
        set inheritLocale(D) {
            o = D, D && n && (i.value = n.locale.value, a.value = n.fallbackLocale.value, ye.updateFallbackLocale(m, i.value, a.value))
        },
        get availableLocales() {
            return Object.keys(s.value).sort()
        },
        messages: A,
        get modifiers() {
            return E
        },
        get pluralRules() {
            return h || {}
        },
        get isGlobal() {
            return r
        },
        get missingWarn() {
            return c
        },
        set missingWarn(D) {
            c = D, m.missingWarn = c
        },
        get fallbackWarn() {
            return f
        },
        set fallbackWarn(D) {
            f = D, m.fallbackWarn = f
        },
        get fallbackRoot() {
            return p
        },
        set fallbackRoot(D) {
            p = D
        },
        get fallbackFormat() {
            return _
        },
        set fallbackFormat(D) {
            _ = D, m.fallbackFormat = _
        },
        get warnHtmlMessage() {
            return g
        },
        set warnHtmlMessage(D) {
            g = D, m.warnHtmlMessage = D
        },
        get escapeParameter() {
            return $
        },
        set escapeParameter(D) {
            $ = D, m.escapeParameter = D
        },
        t: B,
        getLocaleMessage: y,
        setLocaleMessage: d,
        mergeLocaleMessage: O,
        getPostTranslationHandler: W,
        setPostTranslationHandler: k,
        getMissingHandler: P,
        setMissingHandler: F,
        [Ic]: $e
    };
    return ee.datetimeFormats = j, ee.numberFormats = Z, ee.rt = I, ee.te = Me, ee.tm = oe, ee.d = Y, ee.n = Q, ee.getDateTimeFormat = q, ee.setDateTimeFormat = ne, ee.mergeDateTimeFormat = _e, ee.getNumberFormat = Ze, ee.setNumberFormat = et, ee.mergeNumberFormat = Nn, ee[Mc] = e.__injectWithOption, ee[Wi] = Le, ee[Hi] = we, ee[qi] = Ne, ee[Gi] = D => {
        m.__v_emitter = D
    }, ee[Ki] = () => {
        m.__v_emitter = void 0
    }, ee
}

function L0(e) {
    const t = M.isString(e.locale) ? e.locale : ye.DEFAULT_LOCALE,
        n = M.isString(e.fallbackLocale) || M.isArray(e.fallbackLocale) || M.isPlainObject(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t,
        r = M.isFunction(e.missing) ? e.missing : void 0,
        o = M.isBoolean(e.silentTranslationWarn) || M.isRegExp(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0,
        i = M.isBoolean(e.silentFallbackWarn) || M.isRegExp(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0,
        a = M.isBoolean(e.fallbackRoot) ? e.fallbackRoot : !0, s = !!e.formatFallbackMessages,
        l = M.isPlainObject(e.modifiers) ? e.modifiers : {}, u = e.pluralizationRules,
        c = M.isFunction(e.postTranslation) ? e.postTranslation : void 0,
        f = M.isString(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, p = !!e.escapeParameterHtml,
        _ = M.isBoolean(e.sync) ? e.sync : !0;
    e.formatter && M.warn(bt(tt.NOT_SUPPORTED_FORMATTER)), e.preserveDirectiveContent && M.warn(bt(tt.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
    let S = e.messages;
    if (M.isPlainObject(e.sharedMessages)) {
        const m = e.sharedMessages;
        S = Object.keys(m).reduce((v, N) => {
            const T = v[N] || (v[N] = {});
            return M.assign(T, m[N]), v
        }, S || {})
    }
    const {__i18n: w, __root: L, __injectWithOption: g} = e, $ = e.datetimeFormats, E = e.numberFormats, h = e.flatJson;
    return {
        locale: t,
        fallbackLocale: n,
        messages: S,
        flatJson: h,
        datetimeFormats: $,
        numberFormats: E,
        missing: r,
        missingWarn: o,
        fallbackWarn: i,
        fallbackRoot: a,
        fallbackFormat: s,
        modifiers: l,
        pluralRules: u,
        postTranslation: c,
        warnHtmlMessage: f,
        escapeParameter: p,
        messageResolver: e.messageResolver,
        inheritLocale: _,
        __i18n: w,
        __root: L,
        __injectWithOption: g
    }
}

function Xi(e = {}, t) {
    {
        const n = Ra(L0(e)), r = {
            id: n.id, get locale() {
                return n.locale.value
            }, set locale(o) {
                n.locale.value = o
            }, get fallbackLocale() {
                return n.fallbackLocale.value
            }, set fallbackLocale(o) {
                n.fallbackLocale.value = o
            }, get messages() {
                return n.messages.value
            }, get datetimeFormats() {
                return n.datetimeFormats.value
            }, get numberFormats() {
                return n.numberFormats.value
            }, get availableLocales() {
                return n.availableLocales
            }, get formatter() {
                return M.warn(bt(tt.NOT_SUPPORTED_FORMATTER)), {
                    interpolate() {
                        return []
                    }
                }
            }, set formatter(o) {
                M.warn(bt(tt.NOT_SUPPORTED_FORMATTER))
            }, get missing() {
                return n.getMissingHandler()
            }, set missing(o) {
                n.setMissingHandler(o)
            }, get silentTranslationWarn() {
                return M.isBoolean(n.missingWarn) ? !n.missingWarn : n.missingWarn
            }, set silentTranslationWarn(o) {
                n.missingWarn = M.isBoolean(o) ? !o : o
            }, get silentFallbackWarn() {
                return M.isBoolean(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn
            }, set silentFallbackWarn(o) {
                n.fallbackWarn = M.isBoolean(o) ? !o : o
            }, get modifiers() {
                return n.modifiers
            }, get formatFallbackMessages() {
                return n.fallbackFormat
            }, set formatFallbackMessages(o) {
                n.fallbackFormat = o
            }, get postTranslation() {
                return n.getPostTranslationHandler()
            }, set postTranslation(o) {
                n.setPostTranslationHandler(o)
            }, get sync() {
                return n.inheritLocale
            }, set sync(o) {
                n.inheritLocale = o
            }, get warnHtmlInMessage() {
                return n.warnHtmlMessage ? "warn" : "off"
            }, set warnHtmlInMessage(o) {
                n.warnHtmlMessage = o !== "off"
            }, get escapeParameterHtml() {
                return n.escapeParameter
            }, set escapeParameterHtml(o) {
                n.escapeParameter = o
            }, get preserveDirectiveContent() {
                return M.warn(bt(tt.NOT_SUPPORTED_PRESERVE_DIRECTIVE)), !0
            }, set preserveDirectiveContent(o) {
                M.warn(bt(tt.NOT_SUPPORTED_PRESERVE_DIRECTIVE))
            }, get pluralizationRules() {
                return n.pluralRules || {}
            }, __composer: n, t(...o) {
                const [i, a, s] = o, l = {};
                let u = null, c = null;
                if (!M.isString(i)) throw Je(Te.INVALID_ARGUMENT);
                const f = i;
                return M.isString(a) ? l.locale = a : M.isArray(a) ? u = a : M.isPlainObject(a) && (c = a), M.isArray(s) ? u = s : M.isPlainObject(s) && (c = s), Reflect.apply(n.t, n, [f, u || c || {}, l])
            }, rt(...o) {
                return Reflect.apply(n.rt, n, [...o])
            }, tc(...o) {
                const [i, a, s] = o, l = {plural: 1};
                let u = null, c = null;
                if (!M.isString(i)) throw Je(Te.INVALID_ARGUMENT);
                const f = i;
                return M.isString(a) ? l.locale = a : M.isNumber(a) ? l.plural = a : M.isArray(a) ? u = a : M.isPlainObject(a) && (c = a), M.isString(s) ? l.locale = s : M.isArray(s) ? u = s : M.isPlainObject(s) && (c = s), Reflect.apply(n.t, n, [f, u || c || {}, l])
            }, te(o, i) {
                return n.te(o, i)
            }, tm(o) {
                return n.tm(o)
            }, getLocaleMessage(o) {
                return n.getLocaleMessage(o)
            }, setLocaleMessage(o, i) {
                n.setLocaleMessage(o, i)
            }, mergeLocaleMessage(o, i) {
                n.mergeLocaleMessage(o, i)
            }, d(...o) {
                return Reflect.apply(n.d, n, [...o])
            }, getDateTimeFormat(o) {
                return n.getDateTimeFormat(o)
            }, setDateTimeFormat(o, i) {
                n.setDateTimeFormat(o, i)
            }, mergeDateTimeFormat(o, i) {
                n.mergeDateTimeFormat(o, i)
            }, n(...o) {
                return Reflect.apply(n.n, n, [...o])
            }, getNumberFormat(o) {
                return n.getNumberFormat(o)
            }, setNumberFormat(o, i) {
                n.setNumberFormat(o, i)
            }, mergeNumberFormat(o, i) {
                n.mergeNumberFormat(o, i)
            }, getChoiceIndex(o, i) {
                return M.warn(bt(tt.NOT_SUPPORTED_GET_CHOICE_INDEX)), -1
            }, __onComponentInstanceCreated(o) {
                const {componentInstanceCreatedListener: i} = e;
                i && i(o, r)
            }
        };
        return r.__enableEmitter = o => {
            const i = n;
            i[Gi] && i[Gi](o)
        }, r.__disableEmitter = () => {
            const o = n;
            o[Ki] && o[Ki]()
        }, r
    }
}

const Ba = {
    tag: {type: [String, Object]},
    locale: {type: String},
    scope: {type: String, validator: e => e === "parent" || e === "global", default: "parent"},
    i18n: {type: Object}
};

function T0({slots: e}, t) {
    return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => r = [...r, ...M.isArray(o.children) ? o.children : [o]], []) : t.reduce((n, r) => {
        const o = e[r];
        return o && (n[r] = o()), n
    }, {})
}

function Dc(e) {
    return ke.Fragment
}

const vr = {
    name: "i18n-t",
    props: M.assign({
        keypath: {type: String, required: !0},
        plural: {type: [Number, String], validator: e => M.isNumber(e) || !isNaN(e)}
    }, Ba),
    setup(e, t) {
        const {slots: n, attrs: r} = t, o = e.i18n || to({useScope: e.scope, __useComponent: !0});
        return () => {
            const i = Object.keys(n).filter(f => f !== "_"), a = {};
            e.locale && (a.locale = e.locale), e.plural !== void 0 && (a.plural = M.isString(e.plural) ? +e.plural : e.plural);
            const s = T0(t, i), l = o[Wi](e.keypath, s, a), u = M.assign({}, r),
                c = M.isString(e.tag) || M.isObject(e.tag) ? e.tag : Dc();
            return ke.h(c, u, l)
        }
    }
};

function A0(e) {
    return M.isArray(e) && !M.isString(e[0])
}

function jc(e, t, n, r) {
    const {slots: o, attrs: i} = t;
    return () => {
        const a = {part: !0};
        let s = {};
        e.locale && (a.locale = e.locale), M.isString(e.format) ? a.key = e.format : M.isObject(e.format) && (M.isString(e.format.key) && (a.key = e.format.key), s = Object.keys(e.format).reduce((p, _) => n.includes(_) ? M.assign({}, p, {[_]: e.format[_]}) : p, {}));
        const l = r(e.value, a, s);
        let u = [a.key];
        M.isArray(l) ? u = l.map((p, _) => {
            const S = o[p.type], w = S ? S({[p.type]: p.value, index: _, parts: l}) : [p.value];
            return A0(w) && (w[0].key = `${p.type}-${_}`), w
        }) : M.isString(l) && (u = [l]);
        const c = M.assign({}, i), f = M.isString(e.tag) || M.isObject(e.tag) ? e.tag : Dc();
        return ke.h(f, c, u)
    }
}

const Ji = {
    name: "i18n-n",
    props: M.assign({value: {type: Number, required: !0}, format: {type: [String, Object]}}, Ba),
    setup(e, t) {
        const n = e.i18n || to({useScope: "parent", __useComponent: !0});
        return jc(e, t, ye.NUMBER_FORMAT_OPTIONS_KEYS, (...r) => n[qi](...r))
    }
}, Zi = {
    name: "i18n-d",
    props: M.assign({value: {type: [Number, Date], required: !0}, format: {type: [String, Object]}}, Ba),
    setup(e, t) {
        const n = e.i18n || to({useScope: "parent", __useComponent: !0});
        return jc(e, t, ye.DATETIME_FORMAT_OPTIONS_KEYS, (...r) => n[Hi](...r))
    }
};

function N0(e, t) {
    const n = e;
    if (e.mode === "composition") return n.__getInstance(t) || e.global;
    {
        const r = n.__getInstance(t);
        return r != null ? r.__composer : e.global.__composer
    }
}

function Fc(e) {
    const t = a => {
        const {instance: s, modifiers: l, value: u} = a;
        if (!s || !s.$) throw Je(Te.UNEXPECTED_ERROR);
        const c = N0(e, s.$);
        l.preserve && M.warn(bt(tt.NOT_SUPPORTED_PRESERVE));
        const f = bl(u);
        return [Reflect.apply(c.t, c, [..._l(f)]), c]
    };
    return {
        created: (a, s) => {
            const [l, u] = t(s);
            M.inBrowser && e.global === u && (a.__i18nWatcher = ke.watch(u.locale, () => {
                s.instance && s.instance.$forceUpdate()
            })), a.__composer = u, a.textContent = l
        }, unmounted: a => {
            M.inBrowser && a.__i18nWatcher && (a.__i18nWatcher(), a.__i18nWatcher = void 0, delete a.__i18nWatcher), a.__composer && (a.__composer = void 0, delete a.__composer)
        }, beforeUpdate: (a, {value: s}) => {
            if (a.__composer) {
                const l = a.__composer, u = bl(s);
                a.textContent = Reflect.apply(l.t, l, [..._l(u)])
            }
        }, getSSRProps: a => {
            const [s] = t(a);
            return {textContent: s}
        }
    }
}

function bl(e) {
    if (M.isString(e)) return {path: e};
    if (M.isPlainObject(e)) {
        if (!("path" in e)) throw Je(Te.REQUIRED_VALUE, "path");
        return e
    } else throw Je(Te.INVALID_VALUE)
}

function _l(e) {
    const {path: t, locale: n, args: r, choice: o, plural: i} = e, a = {}, s = r || {};
    return M.isString(n) && (a.locale = n), M.isNumber(o) && (a.plural = o), M.isNumber(i) && (a.plural = i), [t, s, a]
}

function P0(e, t, ...n) {
    const r = M.isPlainObject(n[0]) ? n[0] : {}, o = !!r.useI18nComponentName,
        i = M.isBoolean(r.globalInstall) ? r.globalInstall : !0;
    i && o && M.warn(bt(tt.COMPONENT_NAME_LEGACY_COMPATIBLE, {name: vr.name})), i && (e.component(o ? "i18n" : vr.name, vr), e.component(Ji.name, Ji), e.component(Zi.name, Zi)), e.directive("t", Fc(t))
}

function I0(e, t, n) {
    return {
        beforeCreate() {
            const r = ke.getCurrentInstance();
            if (!r) throw Je(Te.UNEXPECTED_ERROR);
            const o = this.$options;
            if (o.i18n) {
                const i = o.i18n;
                o.__i18n && (i.__i18n = o.__i18n), i.__root = t, this === this.$root ? this.$i18n = Cl(e, i) : (i.__injectWithOption = !0, this.$i18n = Xi(i))
            } else o.__i18n ? this === this.$root ? this.$i18n = Cl(e, o) : this.$i18n = Xi({
                __i18n: o.__i18n,
                __injectWithOption: !0,
                __root: t
            }) : this.$i18n = e;
            o.__i18nGlobal && Bc(t, o, o), e.__onComponentInstanceCreated(this.$i18n), n.__setInstance(r, this.$i18n), this.$t = (...i) => this.$i18n.t(...i), this.$rt = (...i) => this.$i18n.rt(...i), this.$tc = (...i) => this.$i18n.tc(...i), this.$te = (i, a) => this.$i18n.te(i, a), this.$d = (...i) => this.$i18n.d(...i), this.$n = (...i) => this.$i18n.n(...i), this.$tm = i => this.$i18n.tm(i)
        }, mounted() {
        }, unmounted() {
            const r = ke.getCurrentInstance();
            if (!r) throw Je(Te.UNEXPECTED_ERROR);
            delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, n.__deleteInstance(r), delete this.$i18n
        }
    }
}

function Cl(e, t) {
    e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Ic](t.pluralizationRules || e.pluralizationRules);
    const n = eo(e.locale, {messages: t.messages, __i18n: t.__i18n});
    return Object.keys(n).forEach(r => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach(r => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach(r => e.mergeNumberFormat(r, t.numberFormats[r])), e
}

const Vc = M.makeSymbol("global-vue-i18n");

function M0(e = {}, t) {
    const n = M.isBoolean(e.legacy) ? e.legacy : !0, r = M.isBoolean(e.globalInjection) ? e.globalInjection : !0,
        o = n ? !!e.allowComposition : !0, i = new Map, [a, s] = B0(e, n), l = M.makeSymbol("vue-i18n");

    function u(p) {
        return i.get(p) || null
    }

    function c(p, _) {
        i.set(p, _)
    }

    function f(p) {
        i.delete(p)
    }

    {
        const p = {
            get mode() {
                return n ? "legacy" : "composition"
            }, get allowComposition() {
                return o
            }, async install(_, ...S) {
                _.__VUE_I18N_SYMBOL__ = l, _.provide(_.__VUE_I18N_SYMBOL__, p), !n && r && H0(_, p.global), P0(_, p, ...S), n && _.mixin(I0(s, s.__composer, p));
                const w = _.unmount;
                _.unmount = () => {
                    p.dispose(), w()
                }
            }, get global() {
                return s
            }, dispose() {
                a.stop()
            }, __instances: i, __getInstance: u, __setInstance: c, __deleteInstance: f
        };
        return p
    }
}

function to(e = {}) {
    const t = ke.getCurrentInstance();
    if (t == null) throw Je(Te.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw Je(Te.NOT_INSLALLED);
    const n = D0(t), r = F0(n), o = Rc(t), i = j0(e, o);
    if (n.mode === "legacy" && !e.__useComponent) {
        if (!n.allowComposition) throw Je(Te.NOT_AVAILABLE_IN_LEGACY_MODE);
        return z0(t, i, r, e)
    }
    if (i === "global") return Bc(r, e, o), r;
    if (i === "parent") {
        let l = V0(n, t, e.__useComponent);
        return l == null && (M.warn(bt(tt.NOT_FOUND_PARENT_SCOPE)), l = r), l
    }
    const a = n;
    let s = a.__getInstance(t);
    if (s == null) {
        const l = M.assign({}, e);
        "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), s = Ra(l), x0(a, t), a.__setInstance(t, s)
    }
    return s
}

const R0 = e => {
    if (!(k0 in e)) throw Je(Te.NOT_COMPATIBLE_LEGACY_VUE_I18N);
    return e
};

function B0(e, t, n) {
    const r = ke.effectScope();
    {
        const o = t ? r.run(() => Xi(e)) : r.run(() => Ra(e));
        if (o == null) throw Je(Te.UNEXPECTED_ERROR);
        return [r, o]
    }
}

function D0(e) {
    {
        const t = ke.inject(e.isCE ? Vc : e.appContext.app.__VUE_I18N_SYMBOL__);
        if (!t) throw Je(e.isCE ? Te.NOT_INSLALLED_WITH_PROVIDE : Te.UNEXPECTED_ERROR);
        return t
    }
}

function j0(e, t) {
    return M.isEmptyObject(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
}

function F0(e) {
    return e.mode === "composition" ? e.global : e.global.__composer
}

function V0(e, t, n = !1) {
    let r = null;
    const o = t.root;
    let i = t.parent;
    for (; i != null;) {
        const a = e;
        if (e.mode === "composition") r = a.__getInstance(i); else {
            const s = a.__getInstance(i);
            s != null && (r = s.__composer, n && r && !r[Mc] && (r = null))
        }
        if (r != null || o === i) break;
        i = i.parent
    }
    return r
}

function x0(e, t, n) {
    ke.onMounted(() => {
    }, t), ke.onUnmounted(() => {
        e.__deleteInstance(t)
    }, t)
}

function z0(e, t, n, r = {}) {
    const o = t === "local", i = ke.shallowRef(null);
    if (o && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n)) throw Je(Te.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
    const a = M.isBoolean(r.inheritLocale) ? r.inheritLocale : !0,
        s = ke.ref(o && a ? n.locale.value : M.isString(r.locale) ? r.locale : ye.DEFAULT_LOCALE),
        l = ke.ref(o && a ? n.fallbackLocale.value : M.isString(r.fallbackLocale) || M.isArray(r.fallbackLocale) || M.isPlainObject(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : s.value),
        u = ke.ref(eo(s.value, r)),
        c = ke.ref(M.isPlainObject(r.datetimeFormats) ? r.datetimeFormats : {[s.value]: {}}),
        f = ke.ref(M.isPlainObject(r.numberFormats) ? r.numberFormats : {[s.value]: {}}),
        p = o ? n.missingWarn : M.isBoolean(r.missingWarn) || M.isRegExp(r.missingWarn) ? r.missingWarn : !0,
        _ = o ? n.fallbackWarn : M.isBoolean(r.fallbackWarn) || M.isRegExp(r.fallbackWarn) ? r.fallbackWarn : !0,
        S = o ? n.fallbackRoot : M.isBoolean(r.fallbackRoot) ? r.fallbackRoot : !0, w = !!r.fallbackFormat,
        L = M.isFunction(r.missing) ? r.missing : null, g = M.isFunction(r.postTranslation) ? r.postTranslation : null,
        $ = o ? n.warnHtmlMessage : M.isBoolean(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, E = !!r.escapeParameter,
        h = o ? n.modifiers : M.isPlainObject(r.modifiers) ? r.modifiers : {}, m = r.pluralRules || o && n.pluralRules;

    function b() {
        return [s.value, l.value, u.value, c.value, f.value]
    }

    const v = ke.computed({
            get: () => i.value ? i.value.locale.value : s.value, set: d => {
                i.value && (i.value.locale.value = d), s.value = d
            }
        }), N = ke.computed({
            get: () => i.value ? i.value.fallbackLocale.value : l.value, set: d => {
                i.value && (i.value.fallbackLocale.value = d), l.value = d
            }
        }), T = ke.computed(() => i.value ? i.value.messages.value : u.value), A = ke.computed(() => c.value),
        j = ke.computed(() => f.value);

    function Z() {
        return i.value ? i.value.getPostTranslationHandler() : g
    }

    function W(d) {
        i.value && i.value.setPostTranslationHandler(d)
    }

    function k() {
        return i.value ? i.value.getMissingHandler() : L
    }

    function P(d) {
        i.value && i.value.setMissingHandler(d)
    }

    function F(d) {
        return b(), d()
    }

    function x(...d) {
        return i.value ? F(() => Reflect.apply(i.value.t, null, [...d])) : F(() => "")
    }

    function K(...d) {
        return i.value ? Reflect.apply(i.value.rt, null, [...d]) : ""
    }

    function B(...d) {
        return i.value ? F(() => Reflect.apply(i.value.d, null, [...d])) : F(() => "")
    }

    function I(...d) {
        return i.value ? F(() => Reflect.apply(i.value.n, null, [...d])) : F(() => "")
    }

    function Y(d) {
        return i.value ? i.value.tm(d) : {}
    }

    function Q(d, O) {
        return i.value ? i.value.te(d, O) : !1
    }

    function ve(d) {
        return i.value ? i.value.getLocaleMessage(d) : {}
    }

    function se(d, O) {
        i.value && (i.value.setLocaleMessage(d, O), u.value[d] = O)
    }

    function ge(d, O) {
        i.value && i.value.mergeLocaleMessage(d, O)
    }

    function Le(d) {
        return i.value ? i.value.getDateTimeFormat(d) : {}
    }

    function Ne(d, O) {
        i.value && (i.value.setDateTimeFormat(d, O), c.value[d] = O)
    }

    function we(d, O) {
        i.value && i.value.mergeDateTimeFormat(d, O)
    }

    function $e(d) {
        return i.value ? i.value.getNumberFormat(d) : {}
    }

    function Me(d, O) {
        i.value && (i.value.setNumberFormat(d, O), f.value[d] = O)
    }

    function ze(d, O) {
        i.value && i.value.mergeNumberFormat(d, O)
    }

    const oe = {
        get id() {
            return i.value ? i.value.id : -1
        },
        locale: v,
        fallbackLocale: N,
        messages: T,
        datetimeFormats: A,
        numberFormats: j,
        get inheritLocale() {
            return i.value ? i.value.inheritLocale : a
        },
        set inheritLocale(d) {
            i.value && (i.value.inheritLocale = d)
        },
        get availableLocales() {
            return i.value ? i.value.availableLocales : Object.keys(u.value)
        },
        get modifiers() {
            return i.value ? i.value.modifiers : h
        },
        get pluralRules() {
            return i.value ? i.value.pluralRules : m
        },
        get isGlobal() {
            return i.value ? i.value.isGlobal : !1
        },
        get missingWarn() {
            return i.value ? i.value.missingWarn : p
        },
        set missingWarn(d) {
            i.value && (i.value.missingWarn = d)
        },
        get fallbackWarn() {
            return i.value ? i.value.fallbackWarn : _
        },
        set fallbackWarn(d) {
            i.value && (i.value.missingWarn = d)
        },
        get fallbackRoot() {
            return i.value ? i.value.fallbackRoot : S
        },
        set fallbackRoot(d) {
            i.value && (i.value.fallbackRoot = d)
        },
        get fallbackFormat() {
            return i.value ? i.value.fallbackFormat : w
        },
        set fallbackFormat(d) {
            i.value && (i.value.fallbackFormat = d)
        },
        get warnHtmlMessage() {
            return i.value ? i.value.warnHtmlMessage : $
        },
        set warnHtmlMessage(d) {
            i.value && (i.value.warnHtmlMessage = d)
        },
        get escapeParameter() {
            return i.value ? i.value.escapeParameter : E
        },
        set escapeParameter(d) {
            i.value && (i.value.escapeParameter = d)
        },
        t: x,
        getPostTranslationHandler: Z,
        setPostTranslationHandler: W,
        getMissingHandler: k,
        setMissingHandler: P,
        rt: K,
        d: B,
        n: I,
        tm: Y,
        te: Q,
        getLocaleMessage: ve,
        setLocaleMessage: se,
        mergeLocaleMessage: ge,
        getDateTimeFormat: Le,
        setDateTimeFormat: Ne,
        mergeDateTimeFormat: we,
        getNumberFormat: $e,
        setNumberFormat: Me,
        mergeNumberFormat: ze
    };

    function y(d) {
        d.locale.value = s.value, d.fallbackLocale.value = l.value, Object.keys(u.value).forEach(O => {
            d.mergeLocaleMessage(O, u.value[O])
        }), Object.keys(c.value).forEach(O => {
            d.mergeDateTimeFormat(O, c.value[O])
        }), Object.keys(f.value).forEach(O => {
            d.mergeNumberFormat(O, f.value[O])
        }), d.escapeParameter = E, d.fallbackFormat = w, d.fallbackRoot = S, d.fallbackWarn = _, d.missingWarn = p, d.warnHtmlMessage = $
    }

    return ke.onBeforeMount(() => {
        if (e.proxy == null || e.proxy.$i18n == null) throw Je(Te.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
        const d = i.value = e.proxy.$i18n.__composer;
        t === "global" ? (s.value = d.locale.value, l.value = d.fallbackLocale.value, u.value = d.messages.value, c.value = d.datetimeFormats.value, f.value = d.numberFormats.value) : o && y(d)
    }), oe
}

const U0 = ["locale", "fallbackLocale", "availableLocales"], W0 = ["t", "rt", "d", "n", "tm"];

function H0(e, t) {
    const n = Object.create(null);
    U0.forEach(r => {
        const o = Object.getOwnPropertyDescriptor(t, r);
        if (!o) throw Je(Te.UNEXPECTED_ERROR);
        const i = ke.isRef(o.value) ? {
            get() {
                return o.value.value
            }, set(a) {
                o.value.value = a
            }
        } : {
            get() {
                return o.get && o.get()
            }
        };
        Object.defineProperty(n, r, i)
    }), e.config.globalProperties.$i18n = n, W0.forEach(r => {
        const o = Object.getOwnPropertyDescriptor(t, r);
        if (!o || !o.value) throw Je(Te.UNEXPECTED_ERROR);
        Object.defineProperty(e.config.globalProperties, `$${r}`, o)
    })
}

ye.registerMessageCompiler(ye.compileToFunction);
ye.registerMessageResolver(ye.resolveValue);
ye.registerLocaleFallbacker(ye.fallbackWithLocaleChain);
{
    const e = M.getGlobalThis();
    e.__INTLIFY__ = !0, ye.setDevToolsHook(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}
At.DatetimeFormat = Zi;
At.I18nInjectionKey = Vc;
At.NumberFormat = Ji;
At.Translation = vr;
At.VERSION = Ac;
At.castToVueI18n = R0;
var QS = At.createI18n = M0;
At.useI18n = to;
At.vTDirective = Fc;
const sr = {
    formatYear: "YYYY",
    formatMonth: "MMM YYYY",
    today: "Today",
    view: {month: "Month", year: "Year", week: "Week", day: "Day"},
    month: {
        long: {
            January: "January",
            February: "February",
            March: "March",
            April: "April",
            May: "May",
            June: "June",
            July: "July",
            August: "August",
            September: "September",
            October: "October",
            November: "November",
            December: "December"
        },
        short: {
            January: "Jan",
            February: "Feb",
            March: "Mar",
            April: "Apr",
            May: "May",
            June: "Jun",
            July: "Jul",
            August: "Aug",
            September: "Sept",
            October: "Oct",
            November: "Nov",
            December: "Dec"
        }
    },
    week: {
        long: {
            self: "Week",
            monday: "Monday",
            tuesday: "Tuesday",
            wednesday: "Wednesday",
            thursday: "Thursday",
            friday: "Friday",
            saturday: "Saturday",
            sunday: "Sunday"
        },
        short: {
            self: "Week",
            monday: "Mon",
            tuesday: "Tue",
            wednesday: "Wed",
            thursday: "Thu",
            friday: "Fri",
            saturday: "Sat",
            sunday: "Sun"
        }
    }
}, ew = {
    locale: "en-US",
    empty: {description: "No Data"},
    drawer: {okText: "Ok", cancelText: "Cancel"},
    popconfirm: {okText: "Ok", cancelText: "Cancel"},
    modal: {okText: "Ok", cancelText: "Cancel"},
    pagination: {goto: "Goto", page: "Page", countPerPage: " / Page", total: "Total: {0}"},
    table: {okText: "Ok", resetText: "Reset"},
    upload: {
        start: "Start",
        cancel: "Cancel",
        delete: "Delete",
        retry: "Click to retry",
        buttonText: "Upload",
        preview: "Preview",
        drag: "Click or drag file to this area to upload",
        dragHover: "Release to upload",
        error: "Upload Error"
    },
    calendar: sr,
    datePicker: {
        view: sr.view,
        month: sr.month,
        week: sr.week,
        placeholder: {
            date: "Please select date",
            week: "Please select week",
            month: "Please select month",
            year: "Please select year",
            quarter: "Please select quarter",
            time: "Please select time"
        },
        rangePlaceholder: {
            date: ["Start date", "End date"],
            week: ["Start week", "End week"],
            month: ["Start month", "End month"],
            year: ["Start year", "End year"],
            quarter: ["Start quarter", "End quarter"],
            time: ["Start time", "End time"]
        },
        selectTime: "Select time",
        today: "Today",
        now: "Now",
        ok: "Ok"
    },
    image: {loading: "loading"},
    imagePreview: {
        fullScreen: "Full Screen",
        rotateRight: "Rotate Right",
        rotateLeft: "Rotate Left",
        zoomIn: "Zoom In",
        zoomOut: "Zoom Out",
        originalSize: "Original Size"
    },
    typography: {copied: "Copied", copy: "Copy", expand: "Expand", collapse: "Collapse", edit: "Edit"}
};
var q0 = !1, Sl;
const G0 = typeof window < "u";
G0 && ((Sl = window == null ? void 0 : window.navigator) != null && Sl.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);

function tw(e, t = !0) {
    Yt() ? We(e) : t ? e() : Xe(e)
}

function nw(e) {
    Yt() && qn(e)
}

const Ot = Object.create(null);
Ot.open = "0";
Ot.close = "1";
Ot.ping = "2";
Ot.pong = "3";
Ot.message = "4";
Ot.upgrade = "5";
Ot.noop = "6";
const gr = Object.create(null);
Object.keys(Ot).forEach(e => {
    gr[Ot[e]] = e
});
const K0 = {type: "error", data: "parser error"},
    Y0 = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]",
    X0 = typeof ArrayBuffer == "function",
    J0 = e => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer,
    xc = ({
              type: e,
              data: t
          }, n, r) => Y0 && t instanceof Blob ? n ? r(t) : wl(t, r) : X0 && (t instanceof ArrayBuffer || J0(t)) ? n ? r(t) : wl(new Blob([t]), r) : r(Ot[e] + (t || "")),
    wl = (e, t) => {
        const n = new FileReader;
        return n.onload = function () {
            const r = n.result.split(",")[1];
            t("b" + (r || ""))
        }, n.readAsDataURL(e)
    }, El = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    Dn = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < El.length; e++) Dn[El.charCodeAt(e)] = e;
const Z0 = e => {
    let t = e.length * .75, n = e.length, r, o = 0, i, a, s, l;
    e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
    const u = new ArrayBuffer(t), c = new Uint8Array(u);
    for (r = 0; r < n; r += 4) i = Dn[e.charCodeAt(r)], a = Dn[e.charCodeAt(r + 1)], s = Dn[e.charCodeAt(r + 2)], l = Dn[e.charCodeAt(r + 3)], c[o++] = i << 2 | a >> 4, c[o++] = (a & 15) << 4 | s >> 2, c[o++] = (s & 3) << 6 | l & 63;
    return u
}, Q0 = typeof ArrayBuffer == "function", zc = (e, t) => {
    if (typeof e != "string") return {type: "message", data: Uc(e, t)};
    const n = e.charAt(0);
    return n === "b" ? {type: "message", data: eC(e.substring(1), t)} : gr[n] ? e.length > 1 ? {
        type: gr[n],
        data: e.substring(1)
    } : {type: gr[n]} : K0
}, eC = (e, t) => {
    if (Q0) {
        const n = Z0(e);
        return Uc(n, t)
    } else return {base64: !0, data: e}
}, Uc = (e, t) => {
    switch (t) {
        case"blob":
            return e instanceof ArrayBuffer ? new Blob([e]) : e;
        case"arraybuffer":
        default:
            return e
    }
}, Wc = String.fromCharCode(30), tC = (e, t) => {
    const n = e.length, r = new Array(n);
    let o = 0;
    e.forEach((i, a) => {
        xc(i, !1, s => {
            r[a] = s, ++o === n && t(r.join(Wc))
        })
    })
}, nC = (e, t) => {
    const n = e.split(Wc), r = [];
    for (let o = 0; o < n.length; o++) {
        const i = zc(n[o], t);
        if (r.push(i), i.type === "error") break
    }
    return r
}, Hc = 4;

function Ye(e) {
    if (e) return rC(e)
}

function rC(e) {
    for (var t in Ye.prototype) e[t] = Ye.prototype[t];
    return e
}

Ye.prototype.on = Ye.prototype.addEventListener = function (e, t) {
    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
};
Ye.prototype.once = function (e, t) {
    function n() {
        this.off(e, n), t.apply(this, arguments)
    }

    return n.fn = t, this.on(e, n), this
};
Ye.prototype.off = Ye.prototype.removeListener = Ye.prototype.removeAllListeners = Ye.prototype.removeEventListener = function (e, t) {
    if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
    var n = this._callbacks["$" + e];
    if (!n) return this;
    if (arguments.length == 1) return delete this._callbacks["$" + e], this;
    for (var r, o = 0; o < n.length; o++) if (r = n[o], r === t || r.fn === t) {
        n.splice(o, 1);
        break
    }
    return n.length === 0 && delete this._callbacks["$" + e], this
};
Ye.prototype.emit = function (e) {
    this._callbacks = this._callbacks || {};
    for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    if (n) {
        n = n.slice(0);
        for (var r = 0, o = n.length; r < o; ++r) n[r].apply(this, t)
    }
    return this
};
Ye.prototype.emitReserved = Ye.prototype.emit;
Ye.prototype.listeners = function (e) {
    return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
};
Ye.prototype.hasListeners = function (e) {
    return !!this.listeners(e).length
};
const dt = (() => typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")())();

function qc(e, ...t) {
    return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {})
}

const oC = dt.setTimeout, iC = dt.clearTimeout;

function no(e, t) {
    t.useNativeTimers ? (e.setTimeoutFn = oC.bind(dt), e.clearTimeoutFn = iC.bind(dt)) : (e.setTimeoutFn = dt.setTimeout.bind(dt), e.clearTimeoutFn = dt.clearTimeout.bind(dt))
}

const aC = 1.33;

function sC(e) {
    return typeof e == "string" ? lC(e) : Math.ceil((e.byteLength || e.size) * aC)
}

function lC(e) {
    let t = 0, n = 0;
    for (let r = 0, o = e.length; r < o; r++) t = e.charCodeAt(r), t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (r++, n += 4);
    return n
}

class uC extends Error {
    constructor(t, n, r) {
        super(t), this.description = n, this.context = r, this.type = "TransportError"
    }
}

class Gc extends Ye {
    constructor(t) {
        super(), this.writable = !1, no(this, t), this.opts = t, this.query = t.query, this.socket = t.socket
    }

    onError(t, n, r) {
        return super.emitReserved("error", new uC(t, n, r)), this
    }

    open() {
        return this.readyState = "opening", this.doOpen(), this
    }

    close() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this
    }

    send(t) {
        this.readyState === "open" && this.write(t)
    }

    onOpen() {
        this.readyState = "open", this.writable = !0, super.emitReserved("open")
    }

    onData(t) {
        const n = zc(t, this.socket.binaryType);
        this.onPacket(n)
    }

    onPacket(t) {
        super.emitReserved("packet", t)
    }

    onClose(t) {
        this.readyState = "closed", super.emitReserved("close", t)
    }

    pause(t) {
    }
}

const Kc = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), Qi = 64, cC = {};
let $l = 0, lr = 0, kl;

function Ol(e) {
    let t = "";
    do t = Kc[e % Qi] + t, e = Math.floor(e / Qi); while (e > 0);
    return t
}

function Yc() {
    const e = Ol(+new Date);
    return e !== kl ? ($l = 0, kl = e) : e + "." + Ol($l++)
}

for (; lr < Qi; lr++) cC[Kc[lr]] = lr;

function Xc(e) {
    let t = "";
    for (let n in e) e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
    return t
}

function fC(e) {
    let t = {}, n = e.split("&");
    for (let r = 0, o = n.length; r < o; r++) {
        let i = n[r].split("=");
        t[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
    }
    return t
}

let Jc = !1;
try {
    Jc = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest
} catch {
}
const dC = Jc;

function Zc(e) {
    const t = e.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!t || dC)) return new XMLHttpRequest
    } catch {
    }
    if (!t) try {
        return new dt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
    } catch {
    }
}

function hC() {
}

const pC = function () {
    return new Zc({xdomain: !1}).responseType != null
}();

class mC extends Gc {
    constructor(t) {
        if (super(t), this.polling = !1, typeof location < "u") {
            const r = location.protocol === "https:";
            let o = location.port;
            o || (o = r ? "443" : "80"), this.xd = typeof location < "u" && t.hostname !== location.hostname || o !== t.port, this.xs = t.secure !== r
        }
        const n = t && t.forceBase64;
        this.supportsBinary = pC && !n
    }

    get name() {
        return "polling"
    }

    doOpen() {
        this.poll()
    }

    pause(t) {
        this.readyState = "pausing";
        const n = () => {
            this.readyState = "paused", t()
        };
        if (this.polling || !this.writable) {
            let r = 0;
            this.polling && (r++, this.once("pollComplete", function () {
                --r || n()
            })), this.writable || (r++, this.once("drain", function () {
                --r || n()
            }))
        } else n()
    }

    poll() {
        this.polling = !0, this.doPoll(), this.emitReserved("poll")
    }

    onData(t) {
        const n = r => {
            if (this.readyState === "opening" && r.type === "open" && this.onOpen(), r.type === "close") return this.onClose({description: "transport closed by the server"}), !1;
            this.onPacket(r)
        };
        nC(t, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll())
    }

    doClose() {
        const t = () => {
            this.write([{type: "close"}])
        };
        this.readyState === "open" ? t() : this.once("open", t)
    }

    write(t) {
        this.writable = !1, tC(t, n => {
            this.doWrite(n, () => {
                this.writable = !0, this.emitReserved("drain")
            })
        })
    }

    uri() {
        let t = this.query || {};
        const n = this.opts.secure ? "https" : "http";
        let r = "";
        this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = Yc()), !this.supportsBinary && !t.sid && (t.b64 = 1), this.opts.port && (n === "https" && Number(this.opts.port) !== 443 || n === "http" && Number(this.opts.port) !== 80) && (r = ":" + this.opts.port);
        const o = Xc(t), i = this.opts.hostname.indexOf(":") !== -1;
        return n + "://" + (i ? "[" + this.opts.hostname + "]" : this.opts.hostname) + r + this.opts.path + (o.length ? "?" + o : "")
    }

    request(t = {}) {
        return Object.assign(t, {xd: this.xd, xs: this.xs}, this.opts), new $t(this.uri(), t)
    }

    doWrite(t, n) {
        const r = this.request({method: "POST", data: t});
        r.on("success", n), r.on("error", (o, i) => {
            this.onError("xhr post error", o, i)
        })
    }

    doPoll() {
        const t = this.request();
        t.on("data", this.onData.bind(this)), t.on("error", (n, r) => {
            this.onError("xhr poll error", n, r)
        }), this.pollXhr = t
    }
}

class $t extends Ye {
    constructor(t, n) {
        super(), no(this, n), this.opts = n, this.method = n.method || "GET", this.uri = t, this.async = n.async !== !1, this.data = n.data !== void 0 ? n.data : null, this.create()
    }

    create() {
        const t = qc(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        t.xdomain = !!this.opts.xd, t.xscheme = !!this.opts.xs;
        const n = this.xhr = new Zc(t);
        try {
            n.open(this.method, this.uri, this.async);
            try {
                if (this.opts.extraHeaders) {
                    n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
                    for (let r in this.opts.extraHeaders) this.opts.extraHeaders.hasOwnProperty(r) && n.setRequestHeader(r, this.opts.extraHeaders[r])
                }
            } catch {
            }
            if (this.method === "POST") try {
                n.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
            } catch {
            }
            try {
                n.setRequestHeader("Accept", "*/*")
            } catch {
            }
            "withCredentials" in n && (n.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (n.timeout = this.opts.requestTimeout), n.onreadystatechange = () => {
                n.readyState === 4 && (n.status === 200 || n.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
                    this.onError(typeof n.status == "number" ? n.status : 0)
                }, 0))
            }, n.send(this.data)
        } catch (r) {
            this.setTimeoutFn(() => {
                this.onError(r)
            }, 0);
            return
        }
        typeof document < "u" && (this.index = $t.requestsCount++, $t.requests[this.index] = this)
    }

    onError(t) {
        this.emitReserved("error", t, this.xhr), this.cleanup(!0)
    }

    cleanup(t) {
        if (!(typeof this.xhr > "u" || this.xhr === null)) {
            if (this.xhr.onreadystatechange = hC, t) try {
                this.xhr.abort()
            } catch {
            }
            typeof document < "u" && delete $t.requests[this.index], this.xhr = null
        }
    }

    onLoad() {
        const t = this.xhr.responseText;
        t !== null && (this.emitReserved("data", t), this.emitReserved("success"), this.cleanup())
    }

    abort() {
        this.cleanup()
    }
}

$t.requestsCount = 0;
$t.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function") attachEvent("onunload", Ll); else if (typeof addEventListener == "function") {
        const e = "onpagehide" in dt ? "pagehide" : "unload";
        addEventListener(e, Ll, !1)
    }
}

function Ll() {
    for (let e in $t.requests) $t.requests.hasOwnProperty(e) && $t.requests[e].abort()
}

const Qc = (() => typeof Promise == "function" && typeof Promise.resolve == "function" ? t => Promise.resolve().then(t) : (t, n) => n(t, 0))(),
    ur = dt.WebSocket || dt.MozWebSocket, Tl = !0, vC = "arraybuffer",
    Al = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";

class gC extends Gc {
    constructor(t) {
        super(t), this.supportsBinary = !t.forceBase64
    }

    get name() {
        return "websocket"
    }

    doOpen() {
        if (!this.check()) return;
        const t = this.uri(), n = this.opts.protocols,
            r = Al ? {} : qc(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
        try {
            this.ws = Tl && !Al ? n ? new ur(t, n) : new ur(t) : new ur(t, n, r)
        } catch (o) {
            return this.emitReserved("error", o)
        }
        this.ws.binaryType = this.socket.binaryType || vC, this.addEventListeners()
    }

    addEventListeners() {
        this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(), this.onOpen()
        }, this.ws.onclose = t => this.onClose({
            description: "websocket connection closed",
            context: t
        }), this.ws.onmessage = t => this.onData(t.data), this.ws.onerror = t => this.onError("websocket error", t)
    }

    write(t) {
        this.writable = !1;
        for (let n = 0; n < t.length; n++) {
            const r = t[n], o = n === t.length - 1;
            xc(r, this.supportsBinary, i => {
                const a = {};
                try {
                    Tl && this.ws.send(i)
                } catch {
                }
                o && Qc(() => {
                    this.writable = !0, this.emitReserved("drain")
                }, this.setTimeoutFn)
            })
        }
    }

    doClose() {
        typeof this.ws < "u" && (this.ws.close(), this.ws = null)
    }

    uri() {
        let t = this.query || {};
        const n = this.opts.secure ? "wss" : "ws";
        let r = "";
        this.opts.port && (n === "wss" && Number(this.opts.port) !== 443 || n === "ws" && Number(this.opts.port) !== 80) && (r = ":" + this.opts.port), this.opts.timestampRequests && (t[this.opts.timestampParam] = Yc()), this.supportsBinary || (t.b64 = 1);
        const o = Xc(t), i = this.opts.hostname.indexOf(":") !== -1;
        return n + "://" + (i ? "[" + this.opts.hostname + "]" : this.opts.hostname) + r + this.opts.path + (o.length ? "?" + o : "")
    }

    check() {
        return !!ur
    }
}

const yC = {websocket: gC, polling: mC},
    bC = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    _C = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];

function ea(e) {
    const t = e, n = e.indexOf("["), r = e.indexOf("]");
    n != -1 && r != -1 && (e = e.substring(0, n) + e.substring(n, r).replace(/:/g, ";") + e.substring(r, e.length));
    let o = bC.exec(e || ""), i = {}, a = 14;
    for (; a--;) i[_C[a]] = o[a] || "";
    return n != -1 && r != -1 && (i.source = t, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = CC(i, i.path), i.queryKey = SC(i, i.query), i
}

function CC(e, t) {
    const n = /\/{2,9}/g, r = t.replace(n, "/").split("/");
    return (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1), t.slice(-1) == "/" && r.splice(r.length - 1, 1), r
}

function SC(e, t) {
    const n = {};
    return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (r, o, i) {
        o && (n[o] = i)
    }), n
}

let ef = class pn extends Ye {
    constructor(t, n = {}) {
        super(), this.writeBuffer = [], t && typeof t == "object" && (n = t, t = null), t ? (t = ea(t), n.hostname = t.host, n.secure = t.protocol === "https" || t.protocol === "wss", n.port = t.port, t.query && (n.query = t.query)) : n.host && (n.hostname = ea(n.host).host), no(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = n.transports || ["polling", "websocket"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
            path: "/engine.io",
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: "t",
            rememberUpgrade: !1,
            addTrailingSlash: !0,
            rejectUnauthorized: !0,
            perMessageDeflate: {threshold: 1024},
            transportOptions: {},
            closeOnBeforeunload: !0
        }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = fC(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(), this.transport.close())
        }, addEventListener("beforeunload", this.beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this.offlineEventListener = () => {
            this.onClose("transport close", {description: "network connection lost"})
        }, addEventListener("offline", this.offlineEventListener, !1))), this.open()
    }

    createTransport(t) {
        const n = Object.assign({}, this.opts.query);
        n.EIO = Hc, n.transport = t, this.id && (n.sid = this.id);
        const r = Object.assign({}, this.opts.transportOptions[t], this.opts, {
            query: n,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        });
        return new yC[t](r)
    }

    open() {
        let t;
        if (this.opts.rememberUpgrade && pn.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) t = "websocket"; else if (this.transports.length === 0) {
            this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available")
            }, 0);
            return
        } else t = this.transports[0];
        this.readyState = "opening";
        try {
            t = this.createTransport(t)
        } catch {
            this.transports.shift(), this.open();
            return
        }
        t.open(), this.setTransport(t)
    }

    setTransport(t) {
        this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", n => this.onClose("transport close", n))
    }

    probe(t) {
        let n = this.createTransport(t), r = !1;
        pn.priorWebsocketSuccess = !1;
        const o = () => {
            r || (n.send([{type: "ping", data: "probe"}]), n.once("packet", f => {
                if (!r) if (f.type === "pong" && f.data === "probe") {
                    if (this.upgrading = !0, this.emitReserved("upgrading", n), !n) return;
                    pn.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
                        r || this.readyState !== "closed" && (c(), this.setTransport(n), n.send([{type: "upgrade"}]), this.emitReserved("upgrade", n), n = null, this.upgrading = !1, this.flush())
                    })
                } else {
                    const p = new Error("probe error");
                    p.transport = n.name, this.emitReserved("upgradeError", p)
                }
            }))
        };

        function i() {
            r || (r = !0, c(), n.close(), n = null)
        }

        const a = f => {
            const p = new Error("probe error: " + f);
            p.transport = n.name, i(), this.emitReserved("upgradeError", p)
        };

        function s() {
            a("transport closed")
        }

        function l() {
            a("socket closed")
        }

        function u(f) {
            n && f.name !== n.name && i()
        }

        const c = () => {
            n.removeListener("open", o), n.removeListener("error", a), n.removeListener("close", s), this.off("close", l), this.off("upgrading", u)
        };
        n.once("open", o), n.once("error", a), n.once("close", s), this.once("close", l), this.once("upgrading", u), n.open()
    }

    onOpen() {
        if (this.readyState = "open", pn.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
            let t = 0;
            const n = this.upgrades.length;
            for (; t < n; t++) this.probe(this.upgrades[t])
        }
    }

    onPacket(t) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") switch (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type) {
            case"open":
                this.onHandshake(JSON.parse(t.data));
                break;
            case"ping":
                this.resetPingTimeout(), this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
                break;
            case"error":
                const n = new Error("server error");
                n.code = t.data, this.onError(n);
                break;
            case"message":
                this.emitReserved("data", t.data), this.emitReserved("message", t.data);
                break
        }
    }

    onHandshake(t) {
        this.emitReserved("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.maxPayload = t.maxPayload, this.onOpen(), this.readyState !== "closed" && this.resetPingTimeout()
    }

    resetPingTimeout() {
        this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn(() => {
            this.onClose("ping timeout")
        }, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref()
    }

    onDrain() {
        this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush()
    }

    flush() {
        if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const t = this.getWritablePackets();
            this.transport.send(t), this.prevBufferLen = t.length, this.emitReserved("flush")
        }
    }

    getWritablePackets() {
        if (!(this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1)) return this.writeBuffer;
        let n = 1;
        for (let r = 0; r < this.writeBuffer.length; r++) {
            const o = this.writeBuffer[r].data;
            if (o && (n += sC(o)), r > 0 && n > this.maxPayload) return this.writeBuffer.slice(0, r);
            n += 2
        }
        return this.writeBuffer
    }

    write(t, n, r) {
        return this.sendPacket("message", t, n, r), this
    }

    send(t, n, r) {
        return this.sendPacket("message", t, n, r), this
    }

    sendPacket(t, n, r, o) {
        if (typeof n == "function" && (o = n, n = void 0), typeof r == "function" && (o = r, r = null), this.readyState === "closing" || this.readyState === "closed") return;
        r = r || {}, r.compress = r.compress !== !1;
        const i = {type: t, data: n, options: r};
        this.emitReserved("packetCreate", i), this.writeBuffer.push(i), o && this.once("flush", o), this.flush()
    }

    close() {
        const t = () => {
            this.onClose("forced close"), this.transport.close()
        }, n = () => {
            this.off("upgrade", n), this.off("upgradeError", n), t()
        }, r = () => {
            this.once("upgrade", n), this.once("upgradeError", n)
        };
        return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
            this.upgrading ? r() : t()
        }) : this.upgrading ? r() : t()), this
    }

    onError(t) {
        pn.priorWebsocketSuccess = !1, this.emitReserved("error", t), this.onClose("transport error", t)
    }

    onClose(t, n) {
        (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", t, n), this.writeBuffer = [], this.prevBufferLen = 0)
    }

    filterUpgrades(t) {
        const n = [];
        let r = 0;
        const o = t.length;
        for (; r < o; r++) ~this.transports.indexOf(t[r]) && n.push(t[r]);
        return n
    }
};
ef.protocol = Hc;

function wC(e, t = "", n) {
    let r = e;
    n = n || typeof location < "u" && location, e == null && (e = n.protocol + "//" + n.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = n.protocol + e : e = n.host + e), /^(https?|wss?):\/\//.test(e) || (typeof n < "u" ? e = n.protocol + "//" + e : e = "https://" + e), r = ea(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
    const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
    return r.id = r.protocol + "://" + i + ":" + r.port + t, r.href = r.protocol + "://" + i + (n && n.port === r.port ? "" : ":" + r.port), r
}

const EC = typeof ArrayBuffer == "function",
    $C = e => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer,
    tf = Object.prototype.toString,
    kC = typeof Blob == "function" || typeof Blob < "u" && tf.call(Blob) === "[object BlobConstructor]",
    OC = typeof File == "function" || typeof File < "u" && tf.call(File) === "[object FileConstructor]";

function Da(e) {
    return EC && (e instanceof ArrayBuffer || $C(e)) || kC && e instanceof Blob || OC && e instanceof File
}

function yr(e, t) {
    if (!e || typeof e != "object") return !1;
    if (Array.isArray(e)) {
        for (let n = 0, r = e.length; n < r; n++) if (yr(e[n])) return !0;
        return !1
    }
    if (Da(e)) return !0;
    if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1) return yr(e.toJSON(), !0);
    for (const n in e) if (Object.prototype.hasOwnProperty.call(e, n) && yr(e[n])) return !0;
    return !1
}

function LC(e) {
    const t = [], n = e.data, r = e;
    return r.data = ta(n, t), r.attachments = t.length, {packet: r, buffers: t}
}

function ta(e, t) {
    if (!e) return e;
    if (Da(e)) {
        const n = {_placeholder: !0, num: t.length};
        return t.push(e), n
    } else if (Array.isArray(e)) {
        const n = new Array(e.length);
        for (let r = 0; r < e.length; r++) n[r] = ta(e[r], t);
        return n
    } else if (typeof e == "object" && !(e instanceof Date)) {
        const n = {};
        for (const r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = ta(e[r], t));
        return n
    }
    return e
}

function TC(e, t) {
    return e.data = na(e.data, t), delete e.attachments, e
}

function na(e, t) {
    if (!e) return e;
    if (e && e._placeholder === !0) {
        if (typeof e.num == "number" && e.num >= 0 && e.num < t.length) return t[e.num];
        throw new Error("illegal attachments")
    } else if (Array.isArray(e)) for (let n = 0; n < e.length; n++) e[n] = na(e[n], t); else if (typeof e == "object") for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (e[n] = na(e[n], t));
    return e
}

const AC = 5;
var Ae;
(function (e) {
    e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK"
})(Ae || (Ae = {}));

class NC {
    constructor(t) {
        this.replacer = t
    }

    encode(t) {
        return (t.type === Ae.EVENT || t.type === Ae.ACK) && yr(t) ? this.encodeAsBinary({
            type: t.type === Ae.EVENT ? Ae.BINARY_EVENT : Ae.BINARY_ACK,
            nsp: t.nsp,
            data: t.data,
            id: t.id
        }) : [this.encodeAsString(t)]
    }

    encodeAsString(t) {
        let n = "" + t.type;
        return (t.type === Ae.BINARY_EVENT || t.type === Ae.BINARY_ACK) && (n += t.attachments + "-"), t.nsp && t.nsp !== "/" && (n += t.nsp + ","), t.id != null && (n += t.id), t.data != null && (n += JSON.stringify(t.data, this.replacer)), n
    }

    encodeAsBinary(t) {
        const n = LC(t), r = this.encodeAsString(n.packet), o = n.buffers;
        return o.unshift(r), o
    }
}

class ja extends Ye {
    constructor(t) {
        super(), this.reviver = t
    }

    add(t) {
        let n;
        if (typeof t == "string") {
            if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
            n = this.decodeString(t);
            const r = n.type === Ae.BINARY_EVENT;
            r || n.type === Ae.BINARY_ACK ? (n.type = r ? Ae.EVENT : Ae.ACK, this.reconstructor = new PC(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n)
        } else if (Da(t) || t.base64) if (this.reconstructor) n = this.reconstructor.takeBinaryData(t), n && (this.reconstructor = null, super.emitReserved("decoded", n)); else throw new Error("got binary data when not reconstructing a packet"); else throw new Error("Unknown type: " + t)
    }

    decodeString(t) {
        let n = 0;
        const r = {type: Number(t.charAt(0))};
        if (Ae[r.type] === void 0) throw new Error("unknown packet type " + r.type);
        if (r.type === Ae.BINARY_EVENT || r.type === Ae.BINARY_ACK) {
            const i = n + 1;
            for (; t.charAt(++n) !== "-" && n != t.length;) ;
            const a = t.substring(i, n);
            if (a != Number(a) || t.charAt(n) !== "-") throw new Error("Illegal attachments");
            r.attachments = Number(a)
        }
        if (t.charAt(n + 1) === "/") {
            const i = n + 1;
            for (; ++n && !(t.charAt(n) === "," || n === t.length);) ;
            r.nsp = t.substring(i, n)
        } else r.nsp = "/";
        const o = t.charAt(n + 1);
        if (o !== "" && Number(o) == o) {
            const i = n + 1;
            for (; ++n;) {
                const a = t.charAt(n);
                if (a == null || Number(a) != a) {
                    --n;
                    break
                }
                if (n === t.length) break
            }
            r.id = Number(t.substring(i, n + 1))
        }
        if (t.charAt(++n)) {
            const i = this.tryParse(t.substr(n));
            if (ja.isPayloadValid(r.type, i)) r.data = i; else throw new Error("invalid payload")
        }
        return r
    }

    tryParse(t) {
        try {
            return JSON.parse(t, this.reviver)
        } catch {
            return !1
        }
    }

    static isPayloadValid(t, n) {
        switch (t) {
            case Ae.CONNECT:
                return typeof n == "object";
            case Ae.DISCONNECT:
                return n === void 0;
            case Ae.CONNECT_ERROR:
                return typeof n == "string" || typeof n == "object";
            case Ae.EVENT:
            case Ae.BINARY_EVENT:
                return Array.isArray(n) && n.length > 0;
            case Ae.ACK:
            case Ae.BINARY_ACK:
                return Array.isArray(n)
        }
    }

    destroy() {
        this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null)
    }
}

class PC {
    constructor(t) {
        this.packet = t, this.buffers = [], this.reconPack = t
    }

    takeBinaryData(t) {
        if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
            const n = TC(this.reconPack, this.buffers);
            return this.finishedReconstruction(), n
        }
        return null
    }

    finishedReconstruction() {
        this.reconPack = null, this.buffers = []
    }
}

const IC = Object.freeze(Object.defineProperty({
    __proto__: null, Decoder: ja, Encoder: NC, get PacketType() {
        return Ae
    }, protocol: AC
}, Symbol.toStringTag, {value: "Module"}));

function gt(e, t, n) {
    return e.on(t, n), function () {
        e.off(t, n)
    }
}

const MC = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1
});

class nf extends Ye {
    constructor(t, n, r) {
        super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = n, r && r.auth && (this.auth = r.auth), this._opts = Object.assign({}, r), this.io._autoConnect && this.open()
    }

    get disconnected() {
        return !this.connected
    }

    subEvents() {
        if (this.subs) return;
        const t = this.io;
        this.subs = [gt(t, "open", this.onopen.bind(this)), gt(t, "packet", this.onpacket.bind(this)), gt(t, "error", this.onerror.bind(this)), gt(t, "close", this.onclose.bind(this))]
    }

    get active() {
        return !!this.subs
    }

    connect() {
        return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this)
    }

    open() {
        return this.connect()
    }

    send(...t) {
        return t.unshift("message"), this.emit.apply(this, t), this
    }

    emit(t, ...n) {
        if (MC.hasOwnProperty(t)) throw new Error('"' + t.toString() + '" is a reserved event name');
        if (n.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) return this._addToQueue(n), this;
        const r = {type: Ae.EVENT, data: n};
        if (r.options = {}, r.options.compress = this.flags.compress !== !1, typeof n[n.length - 1] == "function") {
            const a = this.ids++, s = n.pop();
            this._registerAckCallback(a, s), r.id = a
        }
        const o = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
        return this.flags.volatile && (!o || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(r), this.packet(r)) : this.sendBuffer.push(r)), this.flags = {}, this
    }

    _registerAckCallback(t, n) {
        var r;
        const o = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
        if (o === void 0) {
            this.acks[t] = n;
            return
        }
        const i = this.io.setTimeoutFn(() => {
            delete this.acks[t];
            for (let a = 0; a < this.sendBuffer.length; a++) this.sendBuffer[a].id === t && this.sendBuffer.splice(a, 1);
            n.call(this, new Error("operation has timed out"))
        }, o);
        this.acks[t] = (...a) => {
            this.io.clearTimeoutFn(i), n.apply(this, [null, ...a])
        }
    }

    emitWithAck(t, ...n) {
        const r = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
        return new Promise((o, i) => {
            n.push((a, s) => r ? a ? i(a) : o(s) : o(a)), this.emit(t, ...n)
        })
    }

    _addToQueue(t) {
        let n;
        typeof t[t.length - 1] == "function" && (n = t.pop());
        const r = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: t,
            flags: Object.assign({fromQueue: !0}, this.flags)
        };
        t.push((o, ...i) => r !== this._queue[0] ? void 0 : (o !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), n && n(o)) : (this._queue.shift(), n && n(null, ...i)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue()
    }

    _drainQueue(t = !1) {
        if (!this.connected || this._queue.length === 0) return;
        const n = this._queue[0];
        n.pending && !t || (n.pending = !0, n.tryCount++, this.flags = n.flags, this.emit.apply(this, n.args))
    }

    packet(t) {
        t.nsp = this.nsp, this.io._packet(t)
    }

    onopen() {
        typeof this.auth == "function" ? this.auth(t => {
            this._sendConnectPacket(t)
        }) : this._sendConnectPacket(this.auth)
    }

    _sendConnectPacket(t) {
        this.packet({
            type: Ae.CONNECT,
            data: this._pid ? Object.assign({pid: this._pid, offset: this._lastOffset}, t) : t
        })
    }

    onerror(t) {
        this.connected || this.emitReserved("connect_error", t)
    }

    onclose(t, n) {
        this.connected = !1, delete this.id, this.emitReserved("disconnect", t, n)
    }

    onpacket(t) {
        if (t.nsp === this.nsp) switch (t.type) {
            case Ae.CONNECT:
                t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case Ae.EVENT:
            case Ae.BINARY_EVENT:
                this.onevent(t);
                break;
            case Ae.ACK:
            case Ae.BINARY_ACK:
                this.onack(t);
                break;
            case Ae.DISCONNECT:
                this.ondisconnect();
                break;
            case Ae.CONNECT_ERROR:
                this.destroy();
                const r = new Error(t.data.message);
                r.data = t.data.data, this.emitReserved("connect_error", r);
                break
        }
    }

    onevent(t) {
        const n = t.data || [];
        t.id != null && n.push(this.ack(t.id)), this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n))
    }

    emitEvent(t) {
        if (this._anyListeners && this._anyListeners.length) {
            const n = this._anyListeners.slice();
            for (const r of n) r.apply(this, t)
        }
        super.emit.apply(this, t), this._pid && t.length && typeof t[t.length - 1] == "string" && (this._lastOffset = t[t.length - 1])
    }

    ack(t) {
        const n = this;
        let r = !1;
        return function (...o) {
            r || (r = !0, n.packet({type: Ae.ACK, id: t, data: o}))
        }
    }

    onack(t) {
        const n = this.acks[t.id];
        typeof n == "function" && (n.apply(this, t.data), delete this.acks[t.id])
    }

    onconnect(t, n) {
        this.id = t, this.recovered = n && this._pid === n, this._pid = n, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0)
    }

    emitBuffered() {
        this.receiveBuffer.forEach(t => this.emitEvent(t)), this.receiveBuffer = [], this.sendBuffer.forEach(t => {
            this.notifyOutgoingListeners(t), this.packet(t)
        }), this.sendBuffer = []
    }

    ondisconnect() {
        this.destroy(), this.onclose("io server disconnect")
    }

    destroy() {
        this.subs && (this.subs.forEach(t => t()), this.subs = void 0), this.io._destroy(this)
    }

    disconnect() {
        return this.connected && this.packet({type: Ae.DISCONNECT}), this.destroy(), this.connected && this.onclose("io client disconnect"), this
    }

    close() {
        return this.disconnect()
    }

    compress(t) {
        return this.flags.compress = t, this
    }

    get volatile() {
        return this.flags.volatile = !0, this
    }

    timeout(t) {
        return this.flags.timeout = t, this
    }

    onAny(t) {
        return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this
    }

    prependAny(t) {
        return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this
    }

    offAny(t) {
        if (!this._anyListeners) return this;
        if (t) {
            const n = this._anyListeners;
            for (let r = 0; r < n.length; r++) if (t === n[r]) return n.splice(r, 1), this
        } else this._anyListeners = [];
        return this
    }

    listenersAny() {
        return this._anyListeners || []
    }

    onAnyOutgoing(t) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(t), this
    }

    prependAnyOutgoing(t) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(t), this
    }

    offAnyOutgoing(t) {
        if (!this._anyOutgoingListeners) return this;
        if (t) {
            const n = this._anyOutgoingListeners;
            for (let r = 0; r < n.length; r++) if (t === n[r]) return n.splice(r, 1), this
        } else this._anyOutgoingListeners = [];
        return this
    }

    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || []
    }

    notifyOutgoingListeners(t) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const n = this._anyOutgoingListeners.slice();
            for (const r of n) r.apply(this, t.data)
        }
    }
}

function An(e) {
    e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
}

An.prototype.duration = function () {
    var e = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var t = Math.random(), n = Math.floor(t * this.jitter * e);
        e = Math.floor(t * 10) & 1 ? e + n : e - n
    }
    return Math.min(e, this.max) | 0
};
An.prototype.reset = function () {
    this.attempts = 0
};
An.prototype.setMin = function (e) {
    this.ms = e
};
An.prototype.setMax = function (e) {
    this.max = e
};
An.prototype.setJitter = function (e) {
    this.jitter = e
};

class ra extends Ye {
    constructor(t, n) {
        var r;
        super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (n = t, t = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, no(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((r = n.randomizationFactor) !== null && r !== void 0 ? r : .5), this.backoff = new An({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = t;
        const o = n.parser || IC;
        this.encoder = new o.Encoder, this.decoder = new o.Decoder, this._autoConnect = n.autoConnect !== !1, this._autoConnect && this.open()
    }

    reconnection(t) {
        return arguments.length ? (this._reconnection = !!t, this) : this._reconnection
    }

    reconnectionAttempts(t) {
        return t === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this)
    }

    reconnectionDelay(t) {
        var n;
        return t === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = t, (n = this.backoff) === null || n === void 0 || n.setMin(t), this)
    }

    randomizationFactor(t) {
        var n;
        return t === void 0 ? this._randomizationFactor : (this._randomizationFactor = t, (n = this.backoff) === null || n === void 0 || n.setJitter(t), this)
    }

    reconnectionDelayMax(t) {
        var n;
        return t === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, (n = this.backoff) === null || n === void 0 || n.setMax(t), this)
    }

    timeout(t) {
        return arguments.length ? (this._timeout = t, this) : this._timeout
    }

    maybeReconnectOnOpen() {
        !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
    }

    open(t) {
        if (~this._readyState.indexOf("open")) return this;
        this.engine = new ef(this.uri, this.opts);
        const n = this.engine, r = this;
        this._readyState = "opening", this.skipReconnect = !1;
        const o = gt(n, "open", function () {
            r.onopen(), t && t()
        }), i = gt(n, "error", a => {
            r.cleanup(), r._readyState = "closed", this.emitReserved("error", a), t ? t(a) : r.maybeReconnectOnOpen()
        });
        if (this._timeout !== !1) {
            const a = this._timeout;
            a === 0 && o();
            const s = this.setTimeoutFn(() => {
                o(), n.close(), n.emit("error", new Error("timeout"))
            }, a);
            this.opts.autoUnref && s.unref(), this.subs.push(function () {
                clearTimeout(s)
            })
        }
        return this.subs.push(o), this.subs.push(i), this
    }

    connect(t) {
        return this.open(t)
    }

    onopen() {
        this.cleanup(), this._readyState = "open", this.emitReserved("open");
        const t = this.engine;
        this.subs.push(gt(t, "ping", this.onping.bind(this)), gt(t, "data", this.ondata.bind(this)), gt(t, "error", this.onerror.bind(this)), gt(t, "close", this.onclose.bind(this)), gt(this.decoder, "decoded", this.ondecoded.bind(this)))
    }

    onping() {
        this.emitReserved("ping")
    }

    ondata(t) {
        try {
            this.decoder.add(t)
        } catch (n) {
            this.onclose("parse error", n)
        }
    }

    ondecoded(t) {
        Qc(() => {
            this.emitReserved("packet", t)
        }, this.setTimeoutFn)
    }

    onerror(t) {
        this.emitReserved("error", t)
    }

    socket(t, n) {
        let r = this.nsps[t];
        return r ? this._autoConnect && !r.active && r.connect() : (r = new nf(this, t, n), this.nsps[t] = r), r
    }

    _destroy(t) {
        const n = Object.keys(this.nsps);
        for (const r of n) if (this.nsps[r].active) return;
        this._close()
    }

    _packet(t) {
        const n = this.encoder.encode(t);
        for (let r = 0; r < n.length; r++) this.engine.write(n[r], t.options)
    }

    cleanup() {
        this.subs.forEach(t => t()), this.subs.length = 0, this.decoder.destroy()
    }

    _close() {
        this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close()
    }

    disconnect() {
        return this._close()
    }

    onclose(t, n) {
        this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, n), this._reconnection && !this.skipReconnect && this.reconnect()
    }

    reconnect() {
        if (this._reconnecting || this.skipReconnect) return this;
        const t = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1; else {
            const n = this.backoff.duration();
            this._reconnecting = !0;
            const r = this.setTimeoutFn(() => {
                t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts), !t.skipReconnect && t.open(o => {
                    o ? (t._reconnecting = !1, t.reconnect(), this.emitReserved("reconnect_error", o)) : t.onreconnect()
                }))
            }, n);
            this.opts.autoUnref && r.unref(), this.subs.push(function () {
                clearTimeout(r)
            })
        }
    }

    onreconnect() {
        const t = this.backoff.attempts;
        this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t)
    }
}

const Mn = {};

function ci(e, t) {
    typeof e == "object" && (t = e, e = void 0), t = t || {};
    const n = wC(e, t.path || "/socket.io"), r = n.source, o = n.id, i = n.path, a = Mn[o] && i in Mn[o].nsps,
        s = t.forceNew || t["force new connection"] || t.multiplex === !1 || a;
    let l;
    return s ? l = new ra(r, t) : (Mn[o] || (Mn[o] = new ra(r, t)), l = Mn[o]), n.query && !t.query && (t.query = n.queryKey), l.socket(n.path, t)
}

Object.assign(ci, {Manager: ra, Socket: nf, io: ci, connect: ci});
var Fa = {exports: {}}, rf = function (t, n) {
    return function () {
        for (var o = new Array(arguments.length), i = 0; i < o.length; i++) o[i] = arguments[i];
        return t.apply(n, o)
    }
}, RC = rf, cn = Object.prototype.toString;

function Va(e) {
    return cn.call(e) === "[object Array]"
}

function oa(e) {
    return typeof e > "u"
}

function BC(e) {
    return e !== null && !oa(e) && e.constructor !== null && !oa(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e)
}

function DC(e) {
    return cn.call(e) === "[object ArrayBuffer]"
}

function jC(e) {
    return typeof FormData < "u" && e instanceof FormData
}

function FC(e) {
    var t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && e.buffer instanceof ArrayBuffer, t
}

function VC(e) {
    return typeof e == "string"
}

function xC(e) {
    return typeof e == "number"
}

function of(e) {
    return e !== null && typeof e == "object"
}

function br(e) {
    if (cn.call(e) !== "[object Object]") return !1;
    var t = Object.getPrototypeOf(e);
    return t === null || t === Object.prototype
}

function zC(e) {
    return cn.call(e) === "[object Date]"
}

function UC(e) {
    return cn.call(e) === "[object File]"
}

function WC(e) {
    return cn.call(e) === "[object Blob]"
}

function af(e) {
    return cn.call(e) === "[object Function]"
}

function HC(e) {
    return of(e) && af(e.pipe)
}

function qC(e) {
    return typeof URLSearchParams < "u" && e instanceof URLSearchParams
}

function GC(e) {
    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
}

function KC() {
    return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u"
}

function xa(e, t) {
    if (!(e === null || typeof e > "u")) if (typeof e != "object" && (e = [e]), Va(e)) for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e); else for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
}

function ia() {
    var e = {};

    function t(o, i) {
        br(e[i]) && br(o) ? e[i] = ia(e[i], o) : br(o) ? e[i] = ia({}, o) : Va(o) ? e[i] = o.slice() : e[i] = o
    }

    for (var n = 0, r = arguments.length; n < r; n++) xa(arguments[n], t);
    return e
}

function YC(e, t, n) {
    return xa(t, function (o, i) {
        n && typeof o == "function" ? e[i] = RC(o, n) : e[i] = o
    }), e
}

function XC(e) {
    return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e
}

var ft = {
    isArray: Va,
    isArrayBuffer: DC,
    isBuffer: BC,
    isFormData: jC,
    isArrayBufferView: FC,
    isString: VC,
    isNumber: xC,
    isObject: of,
    isPlainObject: br,
    isUndefined: oa,
    isDate: zC,
    isFile: UC,
    isBlob: WC,
    isFunction: af,
    isStream: HC,
    isURLSearchParams: qC,
    isStandardBrowserEnv: KC,
    forEach: xa,
    merge: ia,
    extend: YC,
    trim: GC,
    stripBOM: XC
}, dn = ft;

function Nl(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

var sf = function (t, n, r) {
    if (!n) return t;
    var o;
    if (r) o = r(n); else if (dn.isURLSearchParams(n)) o = n.toString(); else {
        var i = [];
        dn.forEach(n, function (l, u) {
            l === null || typeof l > "u" || (dn.isArray(l) ? u = u + "[]" : l = [l], dn.forEach(l, function (f) {
                dn.isDate(f) ? f = f.toISOString() : dn.isObject(f) && (f = JSON.stringify(f)), i.push(Nl(u) + "=" + Nl(f))
            }))
        }), o = i.join("&")
    }
    if (o) {
        var a = t.indexOf("#");
        a !== -1 && (t = t.slice(0, a)), t += (t.indexOf("?") === -1 ? "?" : "&") + o
    }
    return t
}, JC = ft;

function ro() {
    this.handlers = []
}

ro.prototype.use = function (t, n, r) {
    return this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1
};
ro.prototype.eject = function (t) {
    this.handlers[t] && (this.handlers[t] = null)
};
ro.prototype.forEach = function (t) {
    JC.forEach(this.handlers, function (r) {
        r !== null && t(r)
    })
};
var ZC = ro, QC = ft, eS = function (t, n) {
    QC.forEach(t, function (o, i) {
        i !== n && i.toUpperCase() === n.toUpperCase() && (t[n] = o, delete t[i])
    })
}, lf = function (t, n, r, o, i) {
    return t.config = n, r && (t.code = r), t.request = o, t.response = i, t.isAxiosError = !0, t.toJSON = function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }, t
}, fi, Pl;

function uf() {
    if (Pl) return fi;
    Pl = 1;
    var e = lf;
    return fi = function (n, r, o, i, a) {
        var s = new Error(n);
        return e(s, r, o, i, a)
    }, fi
}

var di, Il;

function tS() {
    if (Il) return di;
    Il = 1;
    var e = uf();
    return di = function (n, r, o) {
        var i = o.config.validateStatus;
        !o.status || !i || i(o.status) ? n(o) : r(e("Request failed with status code " + o.status, o.config, null, o.request, o))
    }, di
}

var hi, Ml;

function nS() {
    if (Ml) return hi;
    Ml = 1;
    var e = ft;
    return hi = e.isStandardBrowserEnv() ? function () {
        return {
            write: function (r, o, i, a, s, l) {
                var u = [];
                u.push(r + "=" + encodeURIComponent(o)), e.isNumber(i) && u.push("expires=" + new Date(i).toGMTString()), e.isString(a) && u.push("path=" + a), e.isString(s) && u.push("domain=" + s), l === !0 && u.push("secure"), document.cookie = u.join("; ")
            }, read: function (r) {
                var o = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
                return o ? decodeURIComponent(o[3]) : null
            }, remove: function (r) {
                this.write(r, "", Date.now() - 864e5)
            }
        }
    }() : function () {
        return {
            write: function () {
            }, read: function () {
                return null
            }, remove: function () {
            }
        }
    }(), hi
}

var pi, Rl;

function rS() {
    return Rl || (Rl = 1, pi = function (t) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
    }), pi
}

var mi, Bl;

function oS() {
    return Bl || (Bl = 1, mi = function (t, n) {
        return n ? t.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : t
    }), mi
}

var vi, Dl;

function iS() {
    if (Dl) return vi;
    Dl = 1;
    var e = rS(), t = oS();
    return vi = function (r, o) {
        return r && !e(o) ? t(r, o) : o
    }, vi
}

var gi, jl;

function aS() {
    if (jl) return gi;
    jl = 1;
    var e = ft,
        t = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    return gi = function (r) {
        var o = {}, i, a, s;
        return r && e.forEach(r.split(`
`), function (u) {
            if (s = u.indexOf(":"), i = e.trim(u.substr(0, s)).toLowerCase(), a = e.trim(u.substr(s + 1)), i) {
                if (o[i] && t.indexOf(i) >= 0) return;
                i === "set-cookie" ? o[i] = (o[i] ? o[i] : []).concat([a]) : o[i] = o[i] ? o[i] + ", " + a : a
            }
        }), o
    }, gi
}

var yi, Fl;

function sS() {
    if (Fl) return yi;
    Fl = 1;
    var e = ft;
    return yi = e.isStandardBrowserEnv() ? function () {
        var n = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a"), o;

        function i(a) {
            var s = a;
            return n && (r.setAttribute("href", s), s = r.href), r.setAttribute("href", s), {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
            }
        }

        return o = i(window.location.href), function (s) {
            var l = e.isString(s) ? i(s) : s;
            return l.protocol === o.protocol && l.host === o.host
        }
    }() : function () {
        return function () {
            return !0
        }
    }(), yi
}

var bi, Vl;

function oo() {
    if (Vl) return bi;
    Vl = 1;

    function e(t) {
        this.message = t
    }

    return e.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, e.prototype.__CANCEL__ = !0, bi = e, bi
}

var _i, xl;

function zl() {
    if (xl) return _i;
    xl = 1;
    var e = ft, t = tS(), n = nS(), r = sf, o = iS(), i = aS(), a = sS(), s = uf(), l = io(), u = oo();
    return _i = function (f) {
        return new Promise(function (_, S) {
            var w = f.data, L = f.headers, g = f.responseType, $;

            function E() {
                f.cancelToken && f.cancelToken.unsubscribe($), f.signal && f.signal.removeEventListener("abort", $)
            }

            e.isFormData(w) && delete L["Content-Type"];
            var h = new XMLHttpRequest;
            if (f.auth) {
                var m = f.auth.username || "", b = f.auth.password ? unescape(encodeURIComponent(f.auth.password)) : "";
                L.Authorization = "Basic " + btoa(m + ":" + b)
            }
            var v = o(f.baseURL, f.url);
            h.open(f.method.toUpperCase(), r(v, f.params, f.paramsSerializer), !0), h.timeout = f.timeout;

            function N() {
                if (h) {
                    var A = "getAllResponseHeaders" in h ? i(h.getAllResponseHeaders()) : null,
                        j = !g || g === "text" || g === "json" ? h.responseText : h.response,
                        Z = {data: j, status: h.status, statusText: h.statusText, headers: A, config: f, request: h};
                    t(function (k) {
                        _(k), E()
                    }, function (k) {
                        S(k), E()
                    }, Z), h = null
                }
            }

            if ("onloadend" in h ? h.onloadend = N : h.onreadystatechange = function () {
                !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(N)
            }, h.onabort = function () {
                h && (S(s("Request aborted", f, "ECONNABORTED", h)), h = null)
            }, h.onerror = function () {
                S(s("Network Error", f, null, h)), h = null
            }, h.ontimeout = function () {
                var j = f.timeout ? "timeout of " + f.timeout + "ms exceeded" : "timeout exceeded",
                    Z = f.transitional || l.transitional;
                f.timeoutErrorMessage && (j = f.timeoutErrorMessage), S(s(j, f, Z.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", h)), h = null
            }, e.isStandardBrowserEnv()) {
                var T = (f.withCredentials || a(v)) && f.xsrfCookieName ? n.read(f.xsrfCookieName) : void 0;
                T && (L[f.xsrfHeaderName] = T)
            }
            "setRequestHeader" in h && e.forEach(L, function (j, Z) {
                typeof w > "u" && Z.toLowerCase() === "content-type" ? delete L[Z] : h.setRequestHeader(Z, j)
            }), e.isUndefined(f.withCredentials) || (h.withCredentials = !!f.withCredentials), g && g !== "json" && (h.responseType = f.responseType), typeof f.onDownloadProgress == "function" && h.addEventListener("progress", f.onDownloadProgress), typeof f.onUploadProgress == "function" && h.upload && h.upload.addEventListener("progress", f.onUploadProgress), (f.cancelToken || f.signal) && ($ = function (A) {
                h && (S(!A || A && A.type ? new u("canceled") : A), h.abort(), h = null)
            }, f.cancelToken && f.cancelToken.subscribe($), f.signal && (f.signal.aborted ? $() : f.signal.addEventListener("abort", $))), w || (w = null), h.send(w)
        })
    }, _i
}

var Ci, Ul;

function io() {
    if (Ul) return Ci;
    Ul = 1;
    var e = ft, t = eS, n = lf, r = {"Content-Type": "application/x-www-form-urlencoded"};

    function o(l, u) {
        !e.isUndefined(l) && e.isUndefined(l["Content-Type"]) && (l["Content-Type"] = u)
    }

    function i() {
        var l;
        return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (l = zl()), l
    }

    function a(l, u, c) {
        if (e.isString(l)) try {
            return (u || JSON.parse)(l), e.trim(l)
        } catch (f) {
            if (f.name !== "SyntaxError") throw f
        }
        return (c || JSON.stringify)(l)
    }

    var s = {
        transitional: {silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1},
        adapter: i(),
        transformRequest: [function (u, c) {
            return t(c, "Accept"), t(c, "Content-Type"), e.isFormData(u) || e.isArrayBuffer(u) || e.isBuffer(u) || e.isStream(u) || e.isFile(u) || e.isBlob(u) ? u : e.isArrayBufferView(u) ? u.buffer : e.isURLSearchParams(u) ? (o(c, "application/x-www-form-urlencoded;charset=utf-8"), u.toString()) : e.isObject(u) || c && c["Content-Type"] === "application/json" ? (o(c, "application/json"), a(u)) : u
        }],
        transformResponse: [function (u) {
            var c = this.transitional || s.transitional, f = c && c.silentJSONParsing, p = c && c.forcedJSONParsing,
                _ = !f && this.responseType === "json";
            if (_ || p && e.isString(u) && u.length) try {
                return JSON.parse(u)
            } catch (S) {
                if (_) throw S.name === "SyntaxError" ? n(S, this, "E_JSON_PARSE") : S
            }
            return u
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        validateStatus: function (u) {
            return u >= 200 && u < 300
        },
        headers: {common: {Accept: "application/json, text/plain, */*"}}
    };
    return e.forEach(["delete", "get", "head"], function (u) {
        s.headers[u] = {}
    }), e.forEach(["post", "put", "patch"], function (u) {
        s.headers[u] = e.merge(r)
    }), Ci = s, Ci
}

var lS = ft, uS = io(), cS = function (t, n, r) {
    var o = this || uS;
    return lS.forEach(r, function (a) {
        t = a.call(o, t, n)
    }), t
}, Si, Wl;

function cf() {
    return Wl || (Wl = 1, Si = function (t) {
        return !!(t && t.__CANCEL__)
    }), Si
}

var Hl = ft, wi = cS, fS = cf(), dS = io(), hS = oo();

function Ei(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new hS("canceled")
}

var pS = function (t) {
    Ei(t), t.headers = t.headers || {}, t.data = wi.call(t, t.data, t.headers, t.transformRequest), t.headers = Hl.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers), Hl.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (o) {
        delete t.headers[o]
    });
    var n = t.adapter || dS.adapter;
    return n(t).then(function (o) {
        return Ei(t), o.data = wi.call(t, o.data, o.headers, t.transformResponse), o
    }, function (o) {
        return fS(o) || (Ei(t), o && o.response && (o.response.data = wi.call(t, o.response.data, o.response.headers, t.transformResponse))), Promise.reject(o)
    })
}, lt = ft, ff = function (t, n) {
    n = n || {};
    var r = {};

    function o(c, f) {
        return lt.isPlainObject(c) && lt.isPlainObject(f) ? lt.merge(c, f) : lt.isPlainObject(f) ? lt.merge({}, f) : lt.isArray(f) ? f.slice() : f
    }

    function i(c) {
        if (lt.isUndefined(n[c])) {
            if (!lt.isUndefined(t[c])) return o(void 0, t[c])
        } else return o(t[c], n[c])
    }

    function a(c) {
        if (!lt.isUndefined(n[c])) return o(void 0, n[c])
    }

    function s(c) {
        if (lt.isUndefined(n[c])) {
            if (!lt.isUndefined(t[c])) return o(void 0, t[c])
        } else return o(void 0, n[c])
    }

    function l(c) {
        if (c in n) return o(t[c], n[c]);
        if (c in t) return o(void 0, t[c])
    }

    var u = {
        url: a,
        method: a,
        data: a,
        baseURL: s,
        transformRequest: s,
        transformResponse: s,
        paramsSerializer: s,
        timeout: s,
        timeoutMessage: s,
        withCredentials: s,
        adapter: s,
        responseType: s,
        xsrfCookieName: s,
        xsrfHeaderName: s,
        onUploadProgress: s,
        onDownloadProgress: s,
        decompress: s,
        maxContentLength: s,
        maxBodyLength: s,
        transport: s,
        httpAgent: s,
        httpsAgent: s,
        cancelToken: s,
        socketPath: s,
        responseEncoding: s,
        validateStatus: l
    };
    return lt.forEach(Object.keys(t).concat(Object.keys(n)), function (f) {
        var p = u[f] || i, _ = p(f);
        lt.isUndefined(_) && p !== l || (r[f] = _)
    }), r
}, $i, ql;

function df() {
    return ql || (ql = 1, $i = {version: "0.24.0"}), $i
}

var mS = df().version, za = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function (e, t) {
    za[e] = function (r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
});
var Gl = {};
za.transitional = function (t, n, r) {
    function o(i, a) {
        return "[Axios v" + mS + "] Transitional option '" + i + "'" + a + (r ? ". " + r : "")
    }

    return function (i, a, s) {
        if (t === !1) throw new Error(o(a, " has been removed" + (n ? " in " + n : "")));
        return n && !Gl[a] && (Gl[a] = !0, console.warn(o(a, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(i, a, s) : !0
    }
};

function vS(e, t, n) {
    if (typeof e != "object") throw new TypeError("options must be an object");
    for (var r = Object.keys(e), o = r.length; o-- > 0;) {
        var i = r[o], a = t[i];
        if (a) {
            var s = e[i], l = s === void 0 || a(s, i, e);
            if (l !== !0) throw new TypeError("option " + i + " must be " + l);
            continue
        }
        if (n !== !0) throw Error("Unknown option " + i)
    }
}

var gS = {assertOptions: vS, validators: za}, hf = ft, yS = sf, Kl = ZC, Yl = pS, ao = ff, pf = gS, hn = pf.validators;

function Qn(e) {
    this.defaults = e, this.interceptors = {request: new Kl, response: new Kl}
}

Qn.prototype.request = function (t) {
    typeof t == "string" ? (t = arguments[1] || {}, t.url = arguments[0]) : t = t || {}, t = ao(this.defaults, t), t.method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
    var n = t.transitional;
    n !== void 0 && pf.assertOptions(n, {
        silentJSONParsing: hn.transitional(hn.boolean),
        forcedJSONParsing: hn.transitional(hn.boolean),
        clarifyTimeoutError: hn.transitional(hn.boolean)
    }, !1);
    var r = [], o = !0;
    this.interceptors.request.forEach(function (p) {
        typeof p.runWhen == "function" && p.runWhen(t) === !1 || (o = o && p.synchronous, r.unshift(p.fulfilled, p.rejected))
    });
    var i = [];
    this.interceptors.response.forEach(function (p) {
        i.push(p.fulfilled, p.rejected)
    });
    var a;
    if (!o) {
        var s = [Yl, void 0];
        for (Array.prototype.unshift.apply(s, r), s = s.concat(i), a = Promise.resolve(t); s.length;) a = a.then(s.shift(), s.shift());
        return a
    }
    for (var l = t; r.length;) {
        var u = r.shift(), c = r.shift();
        try {
            l = u(l)
        } catch (f) {
            c(f);
            break
        }
    }
    try {
        a = Yl(l)
    } catch (f) {
        return Promise.reject(f)
    }
    for (; i.length;) a = a.then(i.shift(), i.shift());
    return a
};
Qn.prototype.getUri = function (t) {
    return t = ao(this.defaults, t), yS(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
};
hf.forEach(["delete", "get", "head", "options"], function (t) {
    Qn.prototype[t] = function (n, r) {
        return this.request(ao(r || {}, {method: t, url: n, data: (r || {}).data}))
    }
});
hf.forEach(["post", "put", "patch"], function (t) {
    Qn.prototype[t] = function (n, r, o) {
        return this.request(ao(o || {}, {method: t, url: n, data: r}))
    }
});
var bS = Qn, ki, Xl;

function _S() {
    if (Xl) return ki;
    Xl = 1;
    var e = oo();

    function t(n) {
        if (typeof n != "function") throw new TypeError("executor must be a function.");
        var r;
        this.promise = new Promise(function (a) {
            r = a
        });
        var o = this;
        this.promise.then(function (i) {
            if (o._listeners) {
                var a, s = o._listeners.length;
                for (a = 0; a < s; a++) o._listeners[a](i);
                o._listeners = null
            }
        }), this.promise.then = function (i) {
            var a, s = new Promise(function (l) {
                o.subscribe(l), a = l
            }).then(i);
            return s.cancel = function () {
                o.unsubscribe(a)
            }, s
        }, n(function (a) {
            o.reason || (o.reason = new e(a), r(o.reason))
        })
    }

    return t.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason
    }, t.prototype.subscribe = function (r) {
        if (this.reason) {
            r(this.reason);
            return
        }
        this._listeners ? this._listeners.push(r) : this._listeners = [r]
    }, t.prototype.unsubscribe = function (r) {
        if (this._listeners) {
            var o = this._listeners.indexOf(r);
            o !== -1 && this._listeners.splice(o, 1)
        }
    }, t.source = function () {
        var r, o = new t(function (a) {
            r = a
        });
        return {token: o, cancel: r}
    }, ki = t, ki
}

var Oi, Jl;

function CS() {
    return Jl || (Jl = 1, Oi = function (t) {
        return function (r) {
            return t.apply(null, r)
        }
    }), Oi
}

var Li, Zl;

function SS() {
    return Zl || (Zl = 1, Li = function (t) {
        return typeof t == "object" && t.isAxiosError === !0
    }), Li
}

var Ql = ft, wS = rf, _r = bS, ES = ff, $S = io();

function mf(e) {
    var t = new _r(e), n = wS(_r.prototype.request, t);
    return Ql.extend(n, _r.prototype, t), Ql.extend(n, t), n.create = function (o) {
        return mf(ES(e, o))
    }, n
}

var Nt = mf($S);
Nt.Axios = _r;
Nt.Cancel = oo();
Nt.CancelToken = _S();
Nt.isCancel = cf();
Nt.VERSION = df().version;
Nt.all = function (t) {
    return Promise.all(t)
};
Nt.spread = CS();
Nt.isAxiosError = SS();
Fa.exports = Nt;
Fa.exports.default = Nt;
var kS = Fa.exports, OS = kS;
const rw = ru(OS);

function Cr(e) {
    return e.composedPath()[0]
}

const LS = {mousemoveoutside: new WeakMap, clickoutside: new WeakMap};

function TS(e, t, n) {
    if (e === "mousemoveoutside") {
        const r = o => {
            t.contains(Cr(o)) || n(o)
        };
        return {mousemove: r, touchstart: r}
    } else if (e === "clickoutside") {
        let r = !1;
        const o = a => {
            r = !t.contains(Cr(a))
        }, i = a => {
            r && (t.contains(Cr(a)) || n(a))
        };
        return {mousedown: o, mouseup: i, touchstart: o, touchend: i}
    }
    return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`), {}
}

function vf(e, t, n) {
    const r = LS[e];
    let o = r.get(t);
    o === void 0 && r.set(t, o = new WeakMap);
    let i = o.get(n);
    return i === void 0 && o.set(n, i = TS(e, t, n)), i
}

function AS(e, t, n, r) {
    if (e === "mousemoveoutside" || e === "clickoutside") {
        const o = vf(e, t, n);
        return Object.keys(o).forEach(i => {
            IS(i, document, o[i], r)
        }), !0
    }
    return !1
}

function NS(e, t, n, r) {
    if (e === "mousemoveoutside" || e === "clickoutside") {
        const o = vf(e, t, n);
        return Object.keys(o).forEach(i => {
            MS(i, document, o[i], r)
        }), !0
    }
    return !1
}

function PS() {
    if (typeof window > "u") return {
        on: () => {
        }, off: () => {
        }
    };
    const e = new WeakMap, t = new WeakMap;

    function n() {
        e.set(this, !0)
    }

    function r() {
        e.set(this, !0), t.set(this, !0)
    }

    function o(v, N, T) {
        const A = v[N];
        return v[N] = function () {
            return T.apply(v, arguments), A.apply(v, arguments)
        }, v
    }

    function i(v, N) {
        v[N] = Event.prototype[N]
    }

    const a = new WeakMap, s = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");

    function l() {
        var v;
        return (v = a.get(this)) !== null && v !== void 0 ? v : null
    }

    function u(v, N) {
        s !== void 0 && Object.defineProperty(v, "currentTarget", {configurable: !0, enumerable: !0, get: N ?? s.get})
    }

    const c = {bubble: {}, capture: {}}, f = {};

    function p() {
        const v = function (N) {
            const {type: T, eventPhase: A, bubbles: j} = N, Z = Cr(N);
            if (A === 2) return;
            const W = A === 1 ? "capture" : "bubble";
            let k = Z;
            const P = [];
            for (; k === null && (k = window), P.push(k), k !== window;) k = k.parentNode || null;
            const F = c.capture[T], x = c.bubble[T];
            if (o(N, "stopPropagation", n), o(N, "stopImmediatePropagation", r), u(N, l), W === "capture") {
                if (F === void 0) return;
                for (let K = P.length - 1; K >= 0 && !e.has(N); --K) {
                    const B = P[K], I = F.get(B);
                    if (I !== void 0) {
                        a.set(N, B);
                        for (const Y of I) {
                            if (t.has(N)) break;
                            Y(N)
                        }
                    }
                    if (K === 0 && !j && x !== void 0) {
                        const Y = x.get(B);
                        if (Y !== void 0) for (const Q of Y) {
                            if (t.has(N)) break;
                            Q(N)
                        }
                    }
                }
            } else if (W === "bubble") {
                if (x === void 0) return;
                for (let K = 0; K < P.length && !e.has(N); ++K) {
                    const B = P[K], I = x.get(B);
                    if (I !== void 0) {
                        a.set(N, B);
                        for (const Y of I) {
                            if (t.has(N)) break;
                            Y(N)
                        }
                    }
                }
            }
            i(N, "stopPropagation"), i(N, "stopImmediatePropagation"), u(N)
        };
        return v.displayName = "evtdUnifiedHandler", v
    }

    function _() {
        const v = function (N) {
            const {type: T, eventPhase: A} = N;
            if (A !== 2) return;
            const j = f[T];
            j !== void 0 && j.forEach(Z => Z(N))
        };
        return v.displayName = "evtdUnifiedWindowEventHandler", v
    }

    const S = p(), w = _();

    function L(v, N) {
        const T = c[v];
        return T[N] === void 0 && (T[N] = new Map, window.addEventListener(N, S, v === "capture")), T[N]
    }

    function g(v) {
        return f[v] === void 0 && (f[v] = new Set, window.addEventListener(v, w)), f[v]
    }

    function $(v, N) {
        let T = v.get(N);
        return T === void 0 && v.set(N, T = new Set), T
    }

    function E(v, N, T, A) {
        const j = c[N][T];
        if (j !== void 0) {
            const Z = j.get(v);
            if (Z !== void 0 && Z.has(A)) return !0
        }
        return !1
    }

    function h(v, N) {
        const T = f[v];
        return !!(T !== void 0 && T.has(N))
    }

    function m(v, N, T, A) {
        let j;
        if (typeof A == "object" && A.once === !0 ? j = F => {
            b(v, N, j, A), T(F)
        } : j = T, AS(v, N, j, A)) return;
        const W = A === !0 || typeof A == "object" && A.capture === !0 ? "capture" : "bubble", k = L(W, v), P = $(k, N);
        if (P.has(j) || P.add(j), N === window) {
            const F = g(v);
            F.has(j) || F.add(j)
        }
    }

    function b(v, N, T, A) {
        if (NS(v, N, T, A)) return;
        const Z = A === !0 || typeof A == "object" && A.capture === !0, W = Z ? "capture" : "bubble", k = L(W, v),
            P = $(k, N);
        if (N === window && !E(N, Z ? "bubble" : "capture", v, T) && h(v, T)) {
            const x = f[v];
            x.delete(T), x.size === 0 && (window.removeEventListener(v, w), f[v] = void 0)
        }
        P.has(T) && P.delete(T), P.size === 0 && k.delete(N), k.size === 0 && (window.removeEventListener(v, S, W === "capture"), c[W][v] = void 0)
    }

    return {on: m, off: b}
}

const {on: IS, off: MS} = PS();/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const RS = Symbol();
var eu;
(function (e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function"
})(eu || (eu = {}));

function ow() {
    const e = wf(!0), t = e.run(() => U({}));
    let n = [], r = [];
    const o = Ef({
        install(i) {
            o._a = i, i.provide(RS, o), i.config.globalProperties.$pinia = o, r.forEach(a => n.push(a)), r = []
        }, use(i) {
            return !this._a && !q0 ? r.push(i) : n.push(i), this
        }, _p: n, _a: null, _e: e, _s: new Map, state: t
    });
    return o
}

export {
    FS as A,
    $r as B,
    WS as C,
    qS as D,
    Xy as E,
    Yo as F,
    YS as G,
    JS as H,
    Ah as I,
    jS as J,
    HS as L,
    Ys as M,
    rl as N,
    fr as O,
    cp as S,
    Ru as T,
    he as _,
    ew as a,
    rw as b,
    QS as c,
    nw as d,
    MS as e,
    ow as f,
    XS as g,
    kp as h,
    GS as i,
    re as j,
    me as k,
    Of as l,
    Tt as m,
    ZS as n,
    IS as o,
    xS as p,
    yh as q,
    $h as r,
    zS as s,
    tw as t,
    el as u,
    US as v,
    VS as w,
    KS as x,
    Nm as y,
    ai as z
};
