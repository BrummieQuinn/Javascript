function rangeOfNumbers(startNum, endNum) {
    
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
console.log(rangeOfNumbers(4, 4));
console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(6, 9));