/**
 * Created by leichen on 4/13/16.
 */
var str = function(s){
    if(typeof s !== "string"){
        throw new TypeError("Expected a string");
    } else{
        return s
    }
}

var repeat = function(s){
    s = str(s)
    return s+s
}

var any = function(x){ return x};

var typeOf = function (s) {
    return function (v) {
        if (typeof v !== s) {
            throw new TypeError("Expected a" + (s === "object" ? "n " : " ") + s + ".");
        }
        return v;
    };
};

var func = typeOf("function");
var str = typeOf("string");
var obj = typeOf("object");
var bool = typeOf("boolean");
var num = typeOf("number");


var arr= function(a){
    if({}.toString.call(a) !== '[object Array]'){
        throw new TypeError("Expected an array")
    }else{
        return a
    }
}

var arrOf = function(c){
    return function(a){
        return arr(a).map(c);
    }
}

var add = function(a){
    return a + 1
}
var Maybe = function(){};
var None = function(){};
None.prototype = Object.create(Maybe.prototype);
None.prototype.toString = function(){return "None"}
var none = new None();

var Some = function(x){
    this.x = x
}
Some.prototype = Object.create(Maybe.prototype);
Some.prototype.toString = function(){return "None"}

var some = function(x) {return new Some(x)}

var maybe = function(c){
    return function(m){
        if( m instanceof None){
            return m;
        } else if(m instanceof Some){
            return some(c(m.x))
        }else{
            throw new TypeError("some or some")
        }
    }
}

Maybe.prototype.getOrElse = function(x){
    if (this instanceof Some){
        console.log(x)
        return this.x
    }else{
        return x
    }
}


console.log(maybe(repeat)(some("none")).getOrElse('chris'))
