const sayHelloWorld = {
    phrase: 'Hello World',
    timer: 1000
}

setTimeout(function go() {
    console.log(sayHelloWorld.phrase, sayHelloWorld.timer/1000)
    setTimeout(go, sayHelloWorld.timer+=1000)
},sayHelloWorld.timer)