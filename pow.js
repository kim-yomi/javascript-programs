const printResult = function(){
    const {X,N} = getUserPromptedNumbers();
    const result = getPowerOf(X,N);
    alert(result);
}

const getUserPromptedNumbers = function(){
    let firstInput = prompt("Enter the number that you want to get the power of: ");
    let secondInput = prompt("Enter its power: ");
    return {X: firstInput, N: secondInput};
}

const getPowerOf = function(X,N){
    let result = 1;
    for (let i = 0; i < N; i++){
        result *= X;
    }
    return result;
}

printResult();