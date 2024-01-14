function normalFunction(){
    console.log("Hello")
    console.log("World")
}

function* generatorFunction(){
    //yield is an operator with which a generator can pause itself
    // we don't say it returns a value we say it yields a value
    yield "Hello"
    yield "World"

}

const genObject = generatorFunction()
for(const word of genObject){
    console.log(word)
}