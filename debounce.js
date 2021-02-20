function debounce(fn,wait) {
    let timeout ,context,args;
    const later = () =>setTimeout(() =>{
        timeout = null
        fn.apply(context,args);
        context = args = null
    },wait)

    let debounced = function (...params) {
        if (!timeout){
            timeout = later();
            context = this
            args = params
        }else {
            clearTimeout(timeout)
            timeout = later()
        }
    }

    debounced.cancel = function () {
        clearTimeout(timeout)
        timeout = null
    }

    return debounced
}


function a() {
    console.log('---',Date.now())
}

let b = debounce(a,200);
let i = 0 ;
let c = setInterval(() =>{
    b()
    i++
    console.log('i',i)
},50)

setTimeout(() =>{
    clearInterval(c)
    console.log('clear')
},1000)
