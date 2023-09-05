# Use Recursion to Create a Range of Numbers
- Continuing from the previous challenge, we provide you another opportunity to create a recursive function to solve a problem.

> We have defined a function named rangeOfNumbers with two parameters. 

```Javascript
function rangeOfNumbers(startNum, endNum) {
  return [];
};
```

> The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. 

> The starting number will always be less than or equal to the ending number. 

> Your function must use recursion by calling itself and not use loops of any kind.

> It should also work for cases where both startNum and endNum are the same.

## Tests
- Your function should return an array.
- Your code should not use any loop syntax (for or while or higher order functions such as forEach, map, filter, or reduce).
- rangeOfNumbers should use recursion (call itself) to solve this challenge.
- rangeOfNumbers(1, 5) should return [1, 2, 3, 4, 5].
- rangeOfNumbers(6, 9) should return [6, 7, 8, 9].
- rangeOfNumbers(4, 4) should return [4].
- Global variables should not be used to cache the array.


* The function: (2/09/2023)
```Javascript 
// final working solution:
function rangeOfNumbers(startNum, endNum) {
    console.log(startNum, endNum);
    if (typeof endNum !== 'number') {
       return [startNum];
        
    
    } else if (startNum <= endNum) {
        const rangeArray = rangeOfNumbers(startNum, endNum - 1);
        rangeArray?.push(endNum);
        
        return rangeArray;
    } else {
      return [];
    }
    }
```


* planning & thoughts:
- It took two or three days but I believe Im pretty close to having a final solution as seen above
- Attempt 1:
  - I was able to create a recursive function that returned the numbers I wanted but they were in individual arrays, it looked like this
  ```Javascript
  function rangeOfNumbers(startNum, endNum) {
    let range = [];
    if (startNum <= endNum) {
      rangeOfNumbers(startNum + 1, endNum);
      range.push(startNum)
      return range;
    }
    return [];
  }
  // output: [] []
  ```
  - while this wasn't correct it did give me a place to work from, a console.log(startNum), showed me the numbers logging recursively up to and including the endNum parameter.
  - obviously individual arrays for each number wasn't what I wanted and the reason this was happening was because I was creating a new array with each recursive call.  I needed to stop trying to push to an array like that and looked through my previous work I'd done and found this example

```Javascript
   function countdown(n) {
   // changed from n < 0 for test
    if (n <= 0) {
        console.log(n);
        return [];
     // changed from n < 10 for test
    } else if (n <= 10) {
        console.log(n);
        
        const counted = countdown(n - 1);
 
      counted.unshift(n);
     
    }
    return
  } 
```
- using this as a refresher I realised I didn't need to declare an array at all
- Attempt 2:
```Javascript
function rangeOfNumbers(startNum, endNum) {
    console.log(startNum, endNum);
    if (!endNum) {
       return [];
        
    
    } else {
        const rangeArray = rangeOfNumbers(startNum, endNum - 1);
        rangeArray?.push(endNum);
        
        return rangeArray;
    }
    }
```
- with this attempt I was able to create the condition to handle when there was no endNum argument passed and returned an empty array(for now) and had the else handle the creation of the array variable which was assigned the recursive function call. it then pushed to the endNum value to the array and return the array.
- I was so happy when I saw the numbers for when both arguments are passed an output of 1 array with the range of numbers within
- now I needed to do something about returning the empty array for the first condition if(!endNum)
- Attempt 3:
```Javascript
function rangeOfNumbers(startNum, endNum) {
    console.log(startNum, endNum);
    if (!endNum) {
       return [startNum];
        
    
    } else {
        const rangeArray = rangeOfNumbers(startNum, endNum - 1);
        rangeArray?.push(endNum);
        
        return rangeArray;
    }
    }
```
- Today I'm at this point and the frustration that I'm so close to a working solution, so I tried to work out how to pass the startNum to an array if !endNum condition met and decided to return [startNum] in an array.
- the first time I tried this I think I may have made a mistake as it didn't return the start num in an array as expected. as I cycled through trying different things, I tried this again and for some reason it worked
- now my only issue is that when there is a startNum and endNum, I'm logging start num in that array in that array too
- Attempt 4:
```Javascript
function rangeOfNumbers(startNum, endNum) {
    
    if (!endNum) {
       return [startNum];
        
    
    } else {
        const rangeArray = rangeOfNumbers(startNum + 1, endNum - 1);
        rangeArray?.unshift(startNum);

        return rangeArray;
    }
   
    }
```
- thinking about how I'm passing the parameters in the recursive function led me to trying to do something that would fix the extra 1 appearing in an array with 2 arguments passed
- now my output is one above the range of 1 - 5 [1, 2, 3, 4, 5, 6] I need to figure out how remove the 6 from this array
- never mind that, tried passing (6, 9) and got undefined! I need to properly think about this, I mean, how many if / else-if statements can you use in a recursive function? I'm guessing the last condition should do the recursion, the others deal with returning empty array, single argument array, range array, an array for all arguments passed so i need to think about my logic right now
- conditions:
  - if one argument passed - return [startNum] : the argument passed returned in an array
  - if both arguments passed - return array : created by recursion
  - if no argument passed - return [] :  empty array
- Attempt 5:
```Javascript 
function rangeOfNumbers(startNum, endNum) {
    console.log(startNum, endNum);
    if (typeof endNum !== 'number') {
       return [startNum];
        
    
    } else if (startNum <= endNum) {
        const rangeArray = rangeOfNumbers(startNum, endNum - 1);
        rangeArray?.push(endNum);
        
        return rangeArray;
    } else {
      return [];
    }
    }
```
- shaking, I think I've done it.  I'm passing the arguments into an array rangeOfNumbers(1, 5) = [1, 2, 3, 4, 5] and rangeOfNumbers(4) = [4] and rangeOfNumbers(6, 9) = [6, 7, 8, 9] and I did it without explicitly passing undefined as a condition.
- I'll look back on today and laugh at how much trouble I had with this (I hope, lol). It was the logic I was passing, as soon as I added else return []; after adding the typeof check; the output showed up correctly
- I also knew when passing a single argument the remaining parameter was assigned undefined by Javascript so instead of checking !endNum I checked if typeof endNum !== 'number' returning [startNum] if condition met, my recursion was working fine, so I knew not to touch that. Like I said, it wasn't until I added the else condition return []; that the output suddenly started logging the way it should.
- I just used the solution and it passed the tests! Basic javascript freecodecamp course 100%

- so from what I understand, my biggest problem was limiting myself to 2 conditions, I was under the impression a recursive function should only have 2 max (if that's all you've seen right?).
- so I looked up the best practices for recursive functions and found there was no upper limit but be mindful of it becoming too complex.  As I worked out above I only needed 3 conditions to check. I also thought I needed the recursion to be passed on final condition and found out while it should be in one of the branches, which branch was algorithm depended. 
- Once I removed these self imposed restrictions on myself I was able to come up with the recursive function as seen in freecodecampplanning.js 
- Not gonna lie this took me 3 days to work out, but I'm so proud of myself for perservering to understand where I was going wrong and ultimately come up with a workable solution.  It forced me to understand recursive functions on a deeper level than just a countdown or countup or even a factorial recursive function could.  
- I had to really think about the logic I was implementing on the recursive function and what I could do to handle the edge cases.  I am ridiculously happy with myself right now as I thought I would never get past this last part, which was having a knock on effect on my confidence.
- Typically me though, I doggedly refused to give up and looked up recursive functions to gain a deeper understanding about the best practice etc
