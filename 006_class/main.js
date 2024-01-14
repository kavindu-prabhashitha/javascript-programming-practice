// function Person(fName, lName){
//     this.fName = fName
//     this.lName = lName
// }

// Person.prototype.getFullName = function(){
//     return this.fName + ' ' + this.lName
// }

// const person1 = new Person("Bruce","Wayne")
// const person2 = new Person("Clark","Kent")

// function SuperHero(fName,lName){
//     Person.call(this,fName,lName)
//     this.isSuperHero = true
// }

// SuperHero.prototype.fightCrime = function(){
//     console.log("Fighting crime")
// }

// SuperHero.prototype = Object.create(Person.prototype)
// SuperHero.prototype.constructor = SuperHero

// const batman = new SuperHero("Bruce", "Wayne")
// console.log(batman.getFullName())
// console.log(SuperHero.prototype.constructor)


class Person{
    constructor(fName,lName){
        this.fName =fName
        this.lName = lName
    }

    sayMyName(){
        return this.fName+" "+this.lName
    }
}

const person1 = new Person("Bruce","Wayne")
const person2 = new Person("Clark","Kent")
console.log(person1.sayMyName())

class SuperHero extends Person{
    constructor(fName,lName){
        super(fName,lName)
        this.isSuperHero = true}

    fightCrime(){
        console.log("Fighting Crime")
    }
}

const batman = new SuperHero("Bruce", "Wayne")
console.log(batman.sayMyName())
console.log(batman.fightCrime())