Function.prototype.apply = function (context,rest){
    if (!context){
        context = typeof window === 'undefined' ? global:window
    }

    context.fn = this
    let  result ;

    if (rest === undefined || rest === null){
        result = context.fn(rest)
    }else {
        result = context.fn(...rest)
    }
    delete context.fn;
    return result;
}

var foo = {
    name: 'Selina'
}
var name = 'Chirs';
function bar(job, age) {
    console.log(this.name);
    console.log(job, age);
}

bar.apply(foo,['p',20])

bar.apply(null,['w',16])
