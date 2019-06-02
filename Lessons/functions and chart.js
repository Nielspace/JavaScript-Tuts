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



// chart.js