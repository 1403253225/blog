function Person(name, age) {
    this.name = name;
    this.age = age;
}

var Yvette = new Person('刘小夕', 20);

Yvette.constructor === Person
