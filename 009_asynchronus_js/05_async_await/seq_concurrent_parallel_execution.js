function resolveHello(){
    return new Promise(resolve =>{
        setTimeout(function(){
            resolve('Hello')
        },2000)
    } )
}

function resolveWorld(){
    return new Promise(resolve =>{
        setTimeout(function(){
            resolve('World')
        },1000)
    } )
}

//Sequential execution
async function sequentialStart(){
    const hello = await resolveHello()
    console.log(hello)

    const world = await resolveWorld()
    console.log(world)
}

//sequentialStart()

//concurrent execution
async function concurrentStart(){
    const hello =  resolveHello()
    const world =  resolveWorld()

    console.log(await hello)
    console.log(await world)
}

// Parallel execution

function parallel(){
    Promise.all([
        (async ()=> console.log(await resolveHello()))(),
        (async ()=> console.log(await resolveWorld()))(),
    ])
}

//parallel()

async function parallelV2(){
    await Promise.all([
        (async ()=> console.log(await resolveHello()))(),
        (async ()=> console.log(await resolveWorld()))(),
    ])

    console.log("Finally")
}

parallelV2()
