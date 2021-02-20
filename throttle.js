function throttle(fn,delay) {
    let lastTime = 0
    let that = this
    return function (){
        let now = Date.now()
        if (now - lastTime < delay) return
        fn.apply(that,arguments)
        lastTime = now
    }
}

function throttle1(fn,delay) {
    let timeout = null;
    let that = this
    let flag = false
    return function (){
        if (flag) return
        flag = true
        timeout = setTimeout(() =>{
            fn.apply(that,arguments)
            flag = false
        },delay)
    }
}



function test(a,b) {
    console.log(a,b)
}

let throttleTest = throttle1(test, 1000, true)

window.onscroll = function(e) {
    throttleTest(1,2)
}
