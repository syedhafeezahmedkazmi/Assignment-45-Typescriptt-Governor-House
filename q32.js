// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// let current_users: string [] = ['TaHir' ,'HumZah' ,'AqIb' , 'DaNiyal'];
// let new_users: string [] = ['Bilal' , 'TaHir' ,'Dawood' ,'Jameel' , 'DaNiyal'];
// new_users.forEach(new_Usersname => {
//     let lowerCase: string = new_Usersname.toLocaleLowerCase();
//     if (current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
//         console.log(`The username ${new_Usersname} is not available. please write a diffrent username`);
//     }
//     else
//     {
//         console.log(` The username ${new_Usersname} is available`);
//     }
// })
// -----------------------------------------2nd-code-------------------------------------------------------
// ===========================================2nd========================================================
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// let usernames = [`admin` , `sana` ,`bilal` ,`sajaad` , `arsalan`,`John`];
// for (let i = 0; i < usernames.length; i++){
//     if(usernames[i] === `admin`){
//         console.log("Hello admin, would you like to see a status repot?");
//     }
//     else{
//         console.log(`Hello ${usernames[i]}, thany you for logging in again.`);
//     }
// }
// ========
// let usersList = [`admin` , `sana` , `jane`,`bilal` ,`sajaad` , `arsalan`,`John`];
// if(usersList.length === 0){
//     console.log('we need to find some users!');
// }
// else{
//     for(let i = 0; i < usersList.length; i++){
//         if(usersList[i] === `admin`){
//             console.log("Hello admin, would you like to see a status repot?");
//         }
//         else
//         {
//             console.log(`Hello ${usersList[i]}, thany you for logging in again.`);
//         }
//     }
// }
// ------------------------------------------------------------------------------------
// let current_users = [`admin` , `sana` , `jane`, `bilal` ,`sajaad` , `arsalan`,`John`];
// let new_users1 = [`bob` , `jane` , `john` , `john` , `susnan` , `alice`];
// for (let i = 0; i < new_users1.length; i++){
//     let usernameExists =false;
//     for (let i = 0; i < current_users.length; i++){
//         if(new_users1[i].toLowerCase() === current_users[i].toLowerCase()){
//             usernameExists = true;
//             break;
//         }
//     }
//     if(usernameExists){
//         console.log(`The username ${new_users1[i]} is already taken. please enter a new username`);
//     }
//     else
//     {
//         console.log(`The username ${new_users1[i]} is available`);
//     }
// }
// -------------------------------3rd step-----------------------
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// ===============================3rd step --------------------
// Array of current users
var current_users = ["Usman", "ali", "Areeba", "Zain", "Osama"];
// Array of new users
var new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"];
// loop through new_users to chack for usernames avaibility
new_users.forEach(function (new_one_user) {
    // making a candition
    var our_condition = current_users.some(function (currrent_one_user) { return currrent_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // print Different messeges using if-Else statements
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
