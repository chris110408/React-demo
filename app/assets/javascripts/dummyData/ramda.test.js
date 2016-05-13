/**
 * Created by leichen on 4/27/16.
 */


import _ from 'ramda'

let ramda ={}




var Maybe = function(x) {
    this.__value = x;
}

Maybe.of = function(x) {
    return new Maybe(x);
}

Maybe.prototype.isNothing = function() {
    console.log('a')
    return (this.__value === null || this.__value === undefined);
}



var IO = function(f) {
    this.__value = f;
}

IO.of = function(x) {
    return new IO(function() {
        return x;
    });
}

IO.prototype.map = function(f) {

    return new IO(_.compose(f, this.__value));
}

var url = IO.of(window.location.href)
var toPairs = _.compose(_.map(_.split('=')), _.split('&'));
var params = _.compose(toPairs, _.last, _.split('?'));

var findParam = function(key) {
    return url.map(_.compose( _.filter(_.compose(_.equals(key), _.head)), params));

};
ramda = findParam("_k")

export { ramda}