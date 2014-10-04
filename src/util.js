/*
 * helper methods
 */

define(function(require, exports) {

    // 'a${x}c', {x:'b'} -> 'abc'
    var format = function(template, vars) {
        return template.replace(/\$\{([^\{\}]*)\}/g, function(_, name) {
            var value = vars[name.trim()];
            return value == null ? '' : value + '';
        });
    };

    // [function(function(err, result)), ...], function(err, result) -> null
    var finish = function(tasks, callback) {
        var left = tasks.length,
            results = [],
            over = false;

        if(!left){
            callback();
            return;
        }

        tasks.forEach(function(task, i) {
            task(function(err, result) {
                if (over) {
                    return;
                }

                if (err) {
                    over = true;
                    throw err;
                } else {
                    results[i] = result;

                    left--;

                    if (!left) {
                        callback.apply(null, results);
                    }
                }
            });
        });
    };

    // 柯里化
    // function(a, b, c), a, b -> function(c)
    var curry = function(foo, args){
        args = Array.prototype.slice.call(arguments, 1);

        var curried = function(){
            return foo.apply(this, args.concat(Array.prototype.slice.call(arguments)));
        };

        // for debug
        curried.__beforeCurried__ = foo;
        curried.__args__ = args;
        curried.toString = function(){
            return 'function (' + args + ', ...) { [curried code] }';
        };
        return curried;
    };

    // 自动柯里化
    // function(a, b, c) -> function(a, b, c)
    var currilize = function(foo, expects){
        expects = expects === undefined ? (foo.__expects__ || foo.length) : expects;

        var currilized = function(){
            return arguments.length >= expects ?
                foo.apply(this, arguments) :
                currilize(
                    curry.apply(null, [foo].concat(Array.prototype.slice.call(arguments))),
                    expects - arguments.length
                );
        };

        // for debug
        currilized.__beforeCurrilized__ = foo;
        currilized.__expects__ = expects;
        currilized.toString = function(){return 'function ([expects ' + expects + ']) { [currilized code] }';};
        return currilized;
    };

    // lambda表达式解析
    // 'a,b -> ...' -> function(a,b){return (...)}
    var λ = function(foo, to){
        var pos = foo.indexOf(to || '->'),
            args = foo.slice(0, pos).split(',').map(function(arg){return arg.trim()}),
            body = 'return (' + foo.slice(pos + 2).trim() + ')';
     
        return Function.apply(null, args.concat(body));
    }

    // 'title' -> 'title'
    var title = function(t) {
        return t ? $('title').text(t).text() : $('title').text();
    };

    // 'http://abc.com' -> {source: '...', protocol: '...', ...}
    var parseURL = function(url) {
        url = url || location.href;
        var a = document.createElement('a');
        a.href = url;
        return {
            source: url,
            protocol: a.protocol.replace(':', ''),
            host: a.hostname,
            port: a.port,
            query: a.search,
            params: (function() {
                var ret = {},
                    seg = a.search.replace(/^\?/, '').split('&'),
                    len = seg.length,
                    i = 0,
                    s;
                for (; i < len; i++) {
                    if (!seg[i]) {
                        continue;
                    }
                    s = seg[i].split('=');
                    ret[s[0]] = s[1];
                }
                return ret;
            })(),
            file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
            hash: a.hash.replace('#', ''),
            path: a.pathname.replace(/^([^\/])/, '/$1'),
            relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
            segments: a.pathname.replace(/^\//, '').split('/')
        };
    };

    // 9, 3 -> '009'
    var toLen = function(source, len){
        return (Array.prototype.join.call({length:len + 1}, '0') + source).slice(-len);
    };

    return {
        format: format,
        finish: finish,
        curry: curry,
        currilize: currilize,
        λ: λ,
        title: title,
        parseURL: parseURL,
        toLen: toLen
    };
});