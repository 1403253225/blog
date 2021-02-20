function debounce(fn,wait){

    let timeout,context,args;

    let later = () => setTimeout(() =>{
        timeout = null
        fn.apply(context,args)
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

    return debounced;
}
