(function anonymous() {
    with(this) {
        return _c(
            'div', {
                attrs: {
                    "id": "app"
                }
            }, [_c('div', _l((arr), function(item, index) {
                return _c("comp-child", {
                    key: index,
                    tag: "component",
                    attrs: {
                        "parent-data": item
                    }
                }, [_c('button', {
                    on: {
                        "click": function($event) {
                            deleteItem(index)
                        }
                    }
                }, [_v("delete")])])
            }))])
    }
})

[{
    "name": "第一个"
}, {
    "name": "第二个"
}, {
    "name": "第三个"
}]


[{
    "name": "第二个"
}, {
    "name": "第三个"
}]

ƒ(item, index) {
    return _c("comp-child", {
        key: index + 5,
        tag: "component",
        attrs: {
            "parent-data": item
        }
    }, [_c('button', {
        on: {
            "click": function($event) {
                deleteItem(index)
            }
        }
    }, [_v("delete")])])
}


ƒ(item, index) {
    return _c("comp-child", {
        key: item.name,
        tag: "component",
        attrs: {
            "parent-data": item
        }
    }, [_c('button', {
        on: {
            "click": function($event) {
                deleteItem(index)
            }
        }
    }, [_v("delete")])])
}
