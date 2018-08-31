class Dep {
    constructor() {
        this.subs=[]
    }
    addSub(item) {
        this.subs.push(item);
    }
    notify() {
        this.subs.forEach(item => {
            item.update();
        });
    }
}

class Watcher {
    constructor(update) {
        this.update = update;
    }
}

// set notify;
// get addSub;

Dep.target = undefined;
function defineReactive(obj, key) {
    let dep = new Dep();
    let val = obj[key];
    Object.defineProperty(obj, key, {
        get: function() {
            if (Dep.target) {
                dep.addSub(Dep.target);
            }
            return val;
        },
        set: function(value) {
            val = value;
            dep.notify();
        }
    })
}

function Vue(options) {
    this._init(options);
    return this;
}

Vue.prototype._init = function(options) {
    let vm = this;
    vm.$options = options;
    initState(vm);
    mount(vm);
}

function initState(vm) {
    initData(vm);
    initComputed(vm);
}

function initData(vm) {
    let data = vm.$options.data;
    data = typeof data === 'function' ? data() : data;
    Object.keys(data).forEach(key => {
        defineReactive(data, key);
    });
    proxy(data, vm);
}

function proxy(source, target) {
    Object.keys(source).forEach(key => {
        Object.defineProperty(target, key, {
            get: function() {
                return source[key];
            },
            set: function(val) {
                source[key] = val;
            }
        })
    })
}

function initComputed(vm) {
    let computed = vm.$options.computed;
    let defaultSetter = function(key) {
        console.error(this, ' has no setter for ', key)
    }
    Object.keys(computed).forEach(key => {
        let getter = typeof computed[key] === 'function' ? computed[key] : computed[key].get;
        let setter = typeof computed[key] === 'function' ? defaultSetter.bind(computed) : computed[key].set;
        Object.defineProperty(computed, key, {
            get: getter.bind(vm),
            set: setter.bind(vm)
        })
    })
    proxy(computed, vm);
}

// Watcher
// update
function mount(vm) {
    let update = compile(vm);
    let watcher = new Watcher(update);
    Dep.target = watcher;
    update();
    Dep.target = undefined;
}

function compile(vm) {
    let el = vm.$options.el;
    el = document.querySelector(el);
    vm.$el = el;
    let innerHTML = el.innerHTML;
    let getter = function() {
        return innerHTML.replace(/{{(.*?)}}/g, function() {
            return vm[arguments[1]]
        });
    };
    let update = function() {
        let iHTML = getter();
        el.innerHTML = iHTML;
    }
    return update;
}
