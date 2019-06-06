let mean = function(list){

    var sum = 0;
    for (i = 0;
        i<list.length;
        i++){
            console.log(list[i])
            sum += list[i];
        }
    console.log("the mean of the array is " + (sum/list.length))

}

mean([1,2,3])





let average = function(list){

    total = 0;
    for (i=0;
        i<list.length;
        i++){
            console.log(list[i]);
            total = total + list[i];
        }

    console.log("the average is " + (total/list.length))
}

average([1,2,3,4,5])