// recursive function example:
// calls the same function again and again like in a loop
function logRecursive(nr) {
    // when function called it begins here: 
    console.log('started function:', nr);
    // condition placed that when nr > 0 then nr decreases by 1
    if (nr > 0) {
        // function calls itself here to decrease nr by 1
        logRecursive(nr - 1);
    } else {
        // logs here when nr reaches 1
        console.log('done with recursion');
    }
    // not too sure here but it seems that the function ends but logs in opposite order to  start of function
    console.log('ended function:', nr);
}
logRecursive(10);