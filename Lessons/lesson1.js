function greetings(paramqeterVariable){
    console.log('Hello World!\n' + parameterVariable)
}


greetings('This is Nilesh')

console.log("---------------------------------------------------------")

function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    
    console.log(firstInteger + secondInteger);
    const firstDecimal = 4.0;
    
    console.log(firstDecimal + secondDecimal);
    const firstString = 'My name is ';
    
    console.log(firstString + secondString);   
}

performOperation(12,4.32,'The Fallen')


function getArea(length, width) {
    let area;
    area = length * width;
    
    return area;
}


console.log("---------------------------------------------------------")


/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    perimeter = 2*(length + width)
    return perimeter;

}

getArea(3,4.5)
getPerimeter(3,4.5)


