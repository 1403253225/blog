const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function Promise(executor) {
    let self = this
    self.status = PENDING
    self.onFulfilled = []
    self.onRejected = []

    function resolve(value) {
        if (self.status === PENDING) {
            self.status = FULFILLED
            self.value = value
            self.onFulfilled.forEach(fn => fn())
        }
    }

    function reject(reason) {
        if (self.status === PENDING) {
            self.status = REJECTED
            self.reason = reason
            self.onRejected.forEach(fn => fn())
        }
    }

    try {
        executor(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

Promise.prototype.then = function (onFulfilled, onRejected) {

    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {
        throw reason
    };
    let self = this
    if (self.status === FULFILLED) {
        try {
            onFulfilled(self.value)
        } catch (e) {
            onRejected(self.reason)
        }
    }
    if (self.status === REJECTED) {
        onRejected(self.reason)
    }

    if (self.status === PENDING) {
        self.onFulfilled.push(() => {
            onFulfilled(this.value)
        })
        self.onRejected.push(() => {
            onRejected(this.reason)
        })
    }
}

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('xxx')
    })
})

promise.then((res) => {
    console.log('resolved', res)
}, (err) => {
    console.log('rejectd', err)
})

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('xxx')
    })
})
promise2.then((res) => {
    console.log('resolved', res)
}, (err) => {
    console.log('rejectd', err)
})
