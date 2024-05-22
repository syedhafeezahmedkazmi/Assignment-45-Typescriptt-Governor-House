
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


// -


// -------------------------------2rd step-----------------------


// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


// ===============================3rd step --------------------


// Array of current users

let current_users = ["Usman", "ali", "Areeba", "Zain", "Osama"]

// Array of new users

let new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"]


// loop through new_users to chack for usernames avaibility

new_users.forEach(new_one_user => {

    // making a candition
    let our_condition = current_users.some(currrent_one_user => currrent_one_user.toLowerCase() === new_one_user.toLowerCase())
    
    // print Different messeges using if-Else statements
    if(our_condition){

        console.log(`sorry ${new_one_user} is already taken!`)
}
    else{
        console.log(`This username ${new_one_user} is available`)
    }
})



































