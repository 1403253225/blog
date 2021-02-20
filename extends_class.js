class SuperType{
    constructor(age) {
        this.age =age
    }
    getAge(){
        console.log(this.age);
    }
}

class SubType extends SuperType{
    constructor(name,age) {
        super(age);
        this.name = name
    }

    getName (){
        console.log(this.name);
    }
}


let instance = new SubType('xx',10)
instance.getName()
instance.getAge()

console.log(typeof SuperType);//function

console.log(SuperType === SuperType.prototype.constructor)
