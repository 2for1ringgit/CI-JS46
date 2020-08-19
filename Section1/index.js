while (true) {
    let n = prompt("Enter your name");
    if (n.length < 15) {
        alert ("Valid");
        break;
    }
    else {
        alert ("Not valid");
    }
}