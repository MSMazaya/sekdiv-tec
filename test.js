function executeFunction(f) {
    f()
}

const sayHello = () => {
    console.log("Hello js")
}

executeFunction(sayHello)
