function SuperType() {
    this.name = 'Yvette';
    this.colors = ['pink', 'blue', 'green'];
}
SuperType.prototype.getName = function () {
    return this.name;
}
function SubType() {
    this.age = 22;
}

SubType.prototype = new SuperType()

SubType.prototype.getAge = function (){
    return this.age;
}

let sub1 = new SubType()
sub1.colors.push('cc')

console.log(sub1.getName())
console.log(sub1.colors)

let sub2 = new SubType()
console.log(sub2.colors)

