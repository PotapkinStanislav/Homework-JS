function pow(x,y) {
    if(y===0){
        return 1;  
    }

    let result = 1;
    let n = y > 0 ? y : -y; 

    for (let i = 0; i < n; i++){
        result *= x; 
    }

    if (y < 0) {
        result = 1 / result; 
    } 

    return result;
}

let result = pow(3,4);
console.log(result);