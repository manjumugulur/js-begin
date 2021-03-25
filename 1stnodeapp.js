let newFunction = (num) => {
    let i = 2;
    while (num > i) {
        if (num % i++ == 0) {
            console.warn("Not a Prime Number");
            break;
        }
    }
    if (num == i)
        console.log("show the debug mode")
    console.error("Prime Number");
}

newFunction(process.argv[2]);