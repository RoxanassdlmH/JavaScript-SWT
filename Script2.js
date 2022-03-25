function sumOfall(arr){
    let sum= 0;
    for (let a of arr)
    sum += a;
    return sum;
};
console.log(sumOfall([1,2,3]));