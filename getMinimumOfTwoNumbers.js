const getUserPromptedNumbers = function(){
    let firstUserNum = prompt("Please enter a number: ");
    let secondUserNum = prompt("Please enter another number: ");
    return {A: firstUserNum,B: secondUserNum};
}
const getMinimumOfTwoNumbers = function(){
    const {A,B} = getUserPromptedNumbers();
    return (A > B) ? alert(B) : alert(A)
}

getMinimumOfTwoNumbers();