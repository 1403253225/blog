function SuperType(name) {
    this.name = name;
    this.colors = ['pink', 'blue', 'green'];
}

SuperType.prototype.getName = function (){
    console.log(this.name);
}

function SubType(name,age) {
    SuperType.call(this,name)
    this.age = age
}

SubType.prototype = new SuperType()

SubType.prototype.getAge = function (){
    console.log(this.age)
}


let instance1 = new SubType('Yvette', 20);
instance1.colors.push('yellow');
console.log(instance1.colors); //[ 'pink', 'blue', 'green', 'yellow' ]
instance1.getName(); //Yvette

let instance2 = new SubType('Jack', 22);
console.log(instance2.colors); //[ 'pink', 'blue', 'green' ]
instance2.getName();//Jack
