const sayHelloWorld = {
    phrase: 'Hello World.',
    timer: 100,
    counter: 0
}

sayHelloWorld.counter = setTimeout(function go() {
    console.log(`${sayHelloWorld.phrase} ${sayHelloWorld.timer}ms`)
    if (sayHelloWorld.counter % 5 == 0) {
        sayHelloWorld.timer += 100;
    }
    sayHelloWorld.counter = setTimeout(go, sayHelloWorld.timer);

}, sayHelloWorld.timer)