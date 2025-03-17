// Description: Implement curry function
function _curry(fn) {
    return function(...args){
        if(args.length >= fn.length){
            return fn.apply(null, args);
        }else{
            return function(...args2){
                return _curry(fn).apply(null, args.concat(args2));
            }
        }
    }
}

function sum(a,b,c,d){
        return a+b+c+d;
}

const curriedSum = _curry(sum);
console.log(curriedSum(1)(2)(3)(4)); // 10
