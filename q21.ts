// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.



// Data type of person Object

interface person {
    age : number,
    name : string ,
    nationality : string ,
    student : Boolean ,
}
// person object
let person : person = {
    age : 26 ,
    name : 'Jameel' ,
    nationality : 'Pakistan' ,
    student : true ,
}
// print person
console.log(person);
interface car {
    maker : string ,
    color : string ,
    automatic : Boolean ,
}
//  car object

let car = {
    maker : 'Toyota',
    color : 'Blue',
    automatic : true ,
}

// print car
console.log(car);