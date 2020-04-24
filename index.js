

const largestSubarraySum = function (array) {

    let largeSum = 0;
    let sum = 0;
    
    for(let i = 0; i<array.length; i++){

        
        if(sum + array[i] < 0){
            sum = 0;
        }
        else{
            sum += array[i];
            if(sum > largeSum){
                largeSum = sum;
            }
        }
    }

    return largeSum;
}