ƒ anonymous() {
    with(this) {
        return
        _c('div', {},
            [_c('p', {}, [_v("firstName: " + _s(firstName))]),
            _l((todoList),
                function(item, index) {
                    return _c('li', {}, [_v(_s(item.name))])
                }
            )
        ], 2)
    }
}
