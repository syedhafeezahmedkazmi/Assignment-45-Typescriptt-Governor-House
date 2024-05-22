// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician = ["Harry potter", "Hermion Granger", "Ron weasley", "Albus Dumbledore"];
function copyArray(arr) {
    return __spreadArray([], arr, true);
}
function make_great(magicianArry) {
    for (var i = 0; i < magicianArry.length; i++) {
        magicianArry[i] = 'the Great ' + magicianArry[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
var copyMagicianArry = copyArray(magician);
make_great(copyMagicianArry);
console.log('\n\nThis is my orignal array:');
show_magicians(magician);
console.log('\n\nThis is my modfied copy of the array:');
show_magicians(copyMagicianArry);
