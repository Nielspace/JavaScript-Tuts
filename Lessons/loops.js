// initialiser 
// condition : when your loop should end
// incrementor or decrementor

for (let i = 0; i <= 100; i++) {
    console.log(i);
    
}

console.log('-----------------------')

for (var j = 0; 
    j <= 20;
    j = j+2) {
        console.log(j)
    } 

console.log('-----------------------')

// Let's add a number


var sum = 0;

for (let num = 1; num < 11; num++) {
    console.log(num);
    sum += num;
}

console.log("the total is " + sum)

console.log('-----------------------')

// dynamic loop

var list = [1,2,3,5,6,7];

for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
    
}

var fruits = ['apple', 'banana', 'cherry', 'Dates', 'Eggfruit', 'guava']
for (var i = 0;
    i<fruits.length;
    i++){
        console.log(fruits[i])
    }

console.log('-----------------------')
console.log()


var data = {
    name : 'Nilesh',
    age : 24,
    height : 180
}

for (elem in data){
    console.log(elem + ' : ' + data[elem])
}


var age = [28, 28, 30, 21, 23,25, 37, 38, 55];

var total = 0;

for (i = 0; 
    i<age.length;
    i++){
        
        console.log(age[i])
        total += age[i]
        
    }

console.log('the total is ' + total)


console.log('the mean is ' + (total/age.length))


let list1 = [1,2,3,10,6,7];

for (let i = 0; i < list1.length; i++) {
    console.log(list1[i]);
    
}

let list2 = ['Apple', 'banana', 'cucumber', 'dates', 'eggplant'];

for (let i = 0; i < list2.length; i++) {
    console.log(i + ' : ' + list2[i]);
    
}

