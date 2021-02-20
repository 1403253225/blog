function SuperType(name) {
    this.name = name;
    this.colors = ['pink', 'blue', 'green'];
}

function SubType(name) {
    SuperType.call(this,name)
}

let sub1 = new SubType('AA')
sub1.colors.push('cc')
console.log(sub1.colors)
console.log(sub1.name)

let sub2 = new SubType('BB')
console.log(sub2.colors)
console.log(sub2.name)
