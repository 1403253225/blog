const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function Promise(executor){

    let self = this

    self.value = undefined
    self.status = PENDING
    self.reason = undefined
    self.onRejected = []
    self.onFulfilled = []



    function resolve(value){
        if (self.status === PENDING){
            self.status = FULFILLED
            self.value = value
            self.onFulfilled.forEach(fn => fn())
        }
    }

    function reject(reason){
        if (self.status === PENDING){
            self.status = REJECTED
            self.reason = reason
            self.onRejected.forEach(fn => fn())
        }
    }

    try {
        executor(resolve,reject)
    }catch (err){
        reject(err)
    }

}

Promise.prototype.then = function (onFulfilled = value => value,onRejected = err => {throw  err}){
    let self = this

    if (self.status === FULFILLED){
        onFulfilled(this.value)
    }
    if (self.status === REJECTED){
        onRejected(this.reason)
    }
    if (self.status === PENDING){
        self.onFulfilled.push(() =>{
            onFulfilled(this.value)
        })
        self.onRejected.push(() =>{
            onRejected(this.reason)
        })
    }
}

let promise = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        resolve('123')
    },1000)
})

promise.then((res) =>{
    console.log('resolve',res)
},err =>{
    console.log('err',err)
})

let promise2 = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        reject('error')
    },1000)
})

promise2.then((res) =>{
    console.log('resolve',res)
},err =>{
    console.log('err',err)
})
