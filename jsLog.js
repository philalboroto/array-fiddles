//create a function named 'first' that returns the first object from a given array
var arr = [1,2,3];
function first(nameOfArray) {
    var firstElement = nameOfArray[0];
    alert(firstElement)
}
first(arr);



//create a function named 'last' that returns the last object from a given array
var arr = [1,2,3];
function last(arrayName) {
    var lengthOfArray = arrayName.length-1;
    var lastArrayitem = arrayName[lengthOfArray];
    alert(lastArrayitem);
}
last(arr);
//alert the result of your function



//Fix 'arr' below so that it's an array full of integers from 0-10
var arr = [0,1,4,5,7,8,10];
arr.splice(2,0,2,3);
//0,1,2,3,4,5
arr.splice(6,0,6)
//0,1,2,3,4,5,6,7,8
arr.splice(9,0,9)
alert(arr[9]);

//Alert every item in arr.
var arr = [1,2,3,4,5];
var numElements = arr.length;
for (var i = 0; i < numElements; i++) {
    alert(arr[i]);
}

//Loop through arr in reverse alerting every item
var arr = [1,2,3,4,5]; //should alert 5 then 4 then 3 etc.
var numElements = arr.length;
var reverseArray = arr.reverse();
for (var i = 0; i < numElements; i++) {
    alert(reverseArray[i]);
}


//Loop through arr removing all values that aren't even
//hint x % 2 --> checks for even numbers
var arr = [1,2,3,6,22,98,45,23,22,12];
var elementCount = arr.length;
for (var i = 0; i < elementCount; i++) {
    if (arr[i] % 2 !== 0) {
        arr.splice(i,1);
    }
}
alert(arr[2]);


//Write a loop that loops through nums, if the item is even, it adds it to the evens array,
//if the item is odd, it adds it to the odds array.
var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evens = [];
var odds = [];
var elementCount = nums.length;
for (var i = 0; i < elementCount; i++) {
    if (nums[i] % 2 === 0) {
        var evenNumber = nums[i];
        evens.push(evenNumber);
    }
    else {
        var oddNumber = nums[i];
        odds.push(oddNumber);
    }
}
alert(evens[0]);


//Write a function called reverse that takes in a string ('str') and returns that string after it's been reversed
//reverse(str) --> "ecnetnes ym si siht"
var str = 'this is my sentence';
function reverse(mySentence) {
    var arraySentence = mySentence.split("");
    var revSentence = arraySentence.reverse();
    var finalProduct = revSentence.join("");
    alert(finalProduct);
}
reverse('this is my sentence');


//Here we're going to write a function that mimics going shopping and checking things off of our grocery list,
//and adding new items to our list. Write a function that takes a single parameters, loops through our grocery list,
// if the parameter (or the thing you passed in) matches an item in myGroceryList, remove that item from the list.
// Once you do that, write another function that accepts a  single parameter and adds that parameter to the list.
var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];
var arrayLength = myGroceryList.length;
function removeItem(itemName) {
    for (var i = 0; i < arrayLength; i++) {
        if (itemName === myGroceryList[i]) {
            myGroceryList.splice(i,1);
        }
    }
}
//removeItem('chips') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs'];
removeItem('chips');
function addItem(itemName) {
    myGroceryList.push(itemName);
}
//addItem('Jerky') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs', 'Jerky'];
addItem('Jerky');
alert(myGroceryList[4]);



//Create a copy of firstArray and save it into secondArray.
// Then, add 6 and 7 to the end of first array.
// When you run this firstArray should be just [1,2,3,4,5] and
// secondArray will be [1,2,3,4,5,6,7] if you created your copy correctly.
var firstArray = [1,2,3,4,5];
var secondArray = firstArray.slice(0);
secondArray.push(6,7);
alert(firstArray); //[1,2,3,4,5];
alert(secondArray); //[1,2,3,4,5,6,7];



var arr = [1,0,null,2,'false',undefined,NaN,1+1,5-5,'undefined', 'asdf',''];
//create a function named 'compact' that returns the array but with all "falsy" values removed
//alert the result of your function