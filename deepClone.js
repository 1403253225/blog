function deepClone(obj) {
    if (obj === null) return null
    if ( obj instanceof RegExp) return  new RegExp(obj)
    if (obj instanceof Date) return  new Date(obj)

    if (typeof obj !== 'object') return  obj;

    let t = new obj.constructor()
    for (const key in obj) {
        t[key] = deepClone(obj[key])
    }
    return  t;
}


const a = {
    b:1,
    c:{
        d:2,
        e:{
            f:3
        }
    },
    g : () =>{
        console.log('h')
    }
}


console.log(deepClone(a))
