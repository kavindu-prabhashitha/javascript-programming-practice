function sayMyName(name){
    console.log(`My name is ${name}`)
}

sayMyName("John")

//Implicit Binding
const person = {
    name: "John",
    fullName:"Hi "+this.name,
    sayMyName: function(){console.log(`My name is ${this.name}`)}
}

person.sayMyName()
person.fullName

//Explicit Binding

function sayMyNameExp(){
    console.log(`My name is ${this.name} with Explicit binding`)
}

sayMyNameExp.call(person)


//New Binding

function Person(name){
    this.name = name;
    this.sayMyName = function(){return `My name is ${this.name}`}
}

const p1 = new Person("John")
const p2 = new Person("Batman")

console.log(p1.name, p2.sayMyName())

//Default Binding

