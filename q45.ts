



// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

                                            // step 1

// function storeCarInfo( manufacturer: string, modelname: string, ...extraOption: { [key : string] : any } [] ) : object {

//     const carInfo = {
//         manufacturer,
//         modelname,
//         ...Object.assign({}, ...extraOption)
//     }
//     return carInfo;
// };

// let answer = storeCarInfo('Honda' , 'Civic' , { color:'black'}, {features:['navigation','power window']})

// console.log(answer);


                                            // step 2

    //Define a function to create a car object with optional options...
    
    function create_car(manufacturer, model, ...optional){

        // Initialize a car object with munufacturer and model

        let car = {
            manufacturer: manufacturer,
            model: model
        };

        // add additional option to the car object

        optional.forEach(Option => {
            let [key, value] = Option.split(":");
            
            car[key.trim()] = value.trim();
        });

        return car;

}

// call the function to creacte a car object

let my_cae = create_car("Toyota", "Corrolla","Color: Black", "Sunroof: True", "Year: 2024");

// print the varibal to ensure all the information is stored correctly in the car object

console.log(my_cae);
                                            






                                            














