/*
This is a test file

1st version checking in to master
*/

//function add the list of arguments, then square
function sumSquare() {
    var sum = 0;    
    for(var i=0; i<arguments.length; i++){
        sum += arguments[i];
    }

/*  alternative1    
    for(var i in arguments){
        sum += arguments[i];
    }
*/
/*  alternative2    
arguments.foreach(function(value, index, array){
	sum += value;
});
*/
    return Math.square(sum);

    //here comes some new stuff from the master branch
    //remote change in the master
    
}


