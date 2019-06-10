/** Function: firstReverse
 * The function will take the str parameter being passed in and
 * return the string in reversed order
 * @param {string} str
 * @return {string} reversed
 * ie: "cat" => "tac"
 */

function firstReverse(str) {
    let strReversed = "";
    if (typeof str === typeof "string") {
        for (let i = str.length - 1; i >= 0; i--) {
            // console.log(str[i]);
            strReversed += str[i];
        }
    } else {
     return null;
    }
    return strReversed;
}
console.log(firstReverse("asd"));

 /** Function: alphaOrder
 * The function will take the str parameter being passed in and
 * return the string in alphabetical order
 * @param {string} str
 * @return {string} in alphabetical order
 * ie: "cake" => "acek"
 */

function alphaOrder(str) {
    if (typeof str === typeof "string") {
    let splitStr = str.split("");
    return splitStr.sort().join('');
    } else {
        return null;
    }
}
console.log(alphaOrder("asd"));

 /** Function: vowelCount
 * The function will take the num parameter being passed in and
 * return the number of vowels in the string
 * @param {string} num
 * @return {number} count of vowels
 * ie: "oreo" => 3
 */

 function vowelCount(num) {
    const vowels = ["a","e","i","o","u"];
    let countVowels = 0;
    if (typeof num !== "string") {
        return null;
    } else {
        let stringArry = num.split("");
        for (let i = 0; i < stringArry.length; i++) {
            for (let x = 0; x < vowels.length - 1; x++) {
                if(vowels[x] == stringArry[i]) {
                    countVowels++;
                }
            }  
        }
    }
    return countVowels;
 }

 console.log(vowelCount("aaaaaaaaaaaaaaa"));

 /** Function: timeConvert
 * The function will take the str parameter representing the amount of minutes being passed in and
 * return the number of hours and minutes. Seperate the number of hours
 * and minutes with a colon
 * @param {number} num
 * @return {string} as hours:minutes
 * ie: 68 => 1:8
 */
function timeConvert(num) {
    if (typeof num !== "number") {
        return null;
    } else {
        let hourRemains = Math.floor(num/60);
        let minutes = Math.round((num/60 - hourRemains) * 60);
        return hourRemains + ":" + minutes;
    }
}
console.log(timeConvert(70))

 /** Function: repeatString
 * The function will take in two parameters and repeat a given string (first argument)
 * num times (second argument). Return an empty string if num is a negative number
 * @param {string} str
 * @param {num} times
 * @return {string} repeated num times
 * i.e repeatString("money", 3) => "moneymoneymoney".
 */

function repeatString(str, num) {
    let repeat = '';
    if (typeof str !== "string" && typeof num !== "number") {
        return null;
    } else {
        for(let i = 0; i < num; i++) {
            repeat+=str;
        }
    } 
    return repeat;
}
console.log(repeatString("bye",3));
/**
 * Below here we see a module.exports which is set to an object with a bunch of keys.
 * The module.exports syntax is a built-in javascript keyword that
 * allows functionality from this file to be used in other files.  
 * Here we are exporting an object with a bunch of keys that will reference 
 * the functions you have made. After you are done implementing a function,
 * change the 'null' to reference the corresponding function you have just created.
 * Then go into your terminal and run 'npm test' to see if the tests pass for your function.
 *
 * The reason why we export our functions out of this file is because behind the scenes,
 * the test-runner is importing this file so that it can gain access to the functions
 * and run tests on it.
 */

module.exports = {
    firstReverse: firstReverse,
    alphaOrder: alphaOrder,
    vowelCount: vowelCount,
    timeConvert: timeConvert,
    repeatString: repeatString,
}
