var arr = [1,0,null,2,'false',undefined,'NaN',1+1,5-5,'undefined','asdf',''];
//create a function named 'compact' that returns the array but with all "falsy" values removed
//alert the result of your function

function compact(arrayName) {
    for (var i = 0; i < arrayName.length; i++) {
        var arrayItem = arrayName[i];
        switch(arrayItem) {
            case "false" :
                arr.splice(i, 1);
                break;
            case undefined :
                arr.splice(i, 1);
            break;
        }
    }
}
compact(arr);
alert(arr[4]);