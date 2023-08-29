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
        // logs here when nr reaches 0
        console.log('done with recursion');
    }
    // not too sure here but, it seems that the function recursion ends last to first
    console.log('ended function:', nr);
}
logRecursive(10);

// freecodecamp countdown recursive function task
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));

function countdown(n) {
    // changed from n < 0 for test
    if (n <= 0) {
        console.log(n);
        return [];
        // changed from n < 10 for test
    } else if (n <= 10) {
        console.log(n);
        
        const counted = countdown(n - 1);
// everything to here I managed alone - not being able to push to the array orginally occurred because I wasn't returning the array but the function.
        // push() logs numbers up to the argument passed so
        // counted.push(n);
        counted.unshift(n);
// here I got stuck - returning the damn function instead of the array I created
        return counted;
     
    }
    return
}
console.log(countdown(5));
console.log(countdown(10));

// only issue with this working in actual tests were the 0 being included in the count and not getting 10 so changed to n <= 0 and n <= 10