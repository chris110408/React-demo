/**
 * Created by leichen on 4/13/16.
 */

import R from 'ramda'

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

var id = function(x){ return x};

var typeOf = function (s) {
    s = str(s)
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
            throw new TypeError("some or none")
        }
    }
}

Maybe.prototype.getOrElse = function(x){
    if (this instanceof Some){

        return this.x
    }else{
        return x
    }
}


var arrOf = function(c){
    return function(a){
        return arr(a).map(c);
    }
}

var arrOfUnit = function(c){
    return function(x){
        x=noTime(arrOf)(c)(x);
        return once(arrOf)(c)([x]);
    };

};


var arrOfFlatten = function(c){
    return function(aax){
        aax= twice(arrOf)(c)(aax);

        let result =[]
        aax.forEach(elem=>result = result.concat(elem))

        return once(arrOf)(c)(result)
    }
}

Array.prototype.flatten = function(c){
    if(c===void 0){
        c= id
    }

    return arrOfFlatten(c)(this)
}


var maybeUnit = function(c){
    return function(x){
        x=noTime(maybe)(c)(x);
        return once(maybe)(c)(some(x))
    }
}

var maybeFlatten = function(c){
    return function(m){
        m= twice(maybe)(c)(m);
        var result = m
        if (result instanceof  Some){
            result = result.x;
        }
        return once(maybe)(c)(result)
    }
}
Maybe.prototype.flatten = function(c){
    if(c===void 0){
        c= id
    }

    return maybeFlatten(c)(this)
}



var once = function(functor){
    return functor
}


var noTime = function(functor){
    return function(c){
        return c
    }
}

Maybe.prototype.map=function(c){
    return maybe(c)(this)
}

var Monad = function(){}

Monad.prototype.flatMap = function(c){
    return this.map(c).flatten()
}

Array.prototype.__proto__= Monad.prototype;
Maybe.prototype.__proto__= Monad.prototype;

var xs =[1,2], ys =[10,100],zs=some(5)

var twice = function(functor){
    return function(c){
        return functor(functor(c))
    }
}

var myadd=(x,y)=> x+y
var cadd= R.curry(myadd)
var addy= (ys,fn)=> ys.map(y=>fn(y))
var caddy = R.curry(addy)(ys)
var funarr=xs.map(cadd)
//var mytest =  R.compose(R.flatten,R.map(caddy),funarr)(xs)

//
//var mytest = xs.flatMap(x=>{
//    return ys.flatMap((y)=>{
//        return zs.map(z=>{
//            return  x+ y+z
//        })
//
//    })
//
//})



var mytest =R.ap(R.map(cadd)(xs),ys)



export { mytest}