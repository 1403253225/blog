Function.prototype.call = function (context) {
    if (!context){
        context = typeof window === 'undefined' ? global :window;
    }

    context.fn = this
    let args = [...arguments].slice(1)
    let result = context.fn(...args)
    delete  context.fn
    return result;
}


var foo = {
    name:1
}
var name = 'Chirs';

function bar(job,age) {
    console.log(this.name)
    console.log(job,age)
}

bar.call(foo,'p',20);

bar.call(null,'av',16)


