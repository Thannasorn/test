function simplePair(num1,num2){

    for(let i = 0; i < num1.length; i++){
         for(j = i+1; j < num1.length; j++){
             if(num1[i] * num1[j] === num2)
             return [num1[i], num1[j]]
         }
    };
    return null;

}


console.log(simplePair([1, 2, 3], 3)); 
console.log(simplePair([1, 2, 3], 6)); 
console.log(simplePair([1, 2, 3], 9));