console.log("register.js");
let pets = []; // empty array

// Creation pets
let pet1 = {
    name:"Scooby",
    age:99,
    gender:"Male",
    service:"shower",
    breed:"boxer"
}
let pet2 = {
    name:"Snoopy",
    age:10,
    gender:"Male",
    service:"shower",
    breed:"Dalmatian"
}
let pet3 = {
    name:"Marley",
    age:20,
    gender:"Female",
    service:"shower",
    breed:"chihuahua"
}

pets.push(pet1);
pets.push(pet2);
pets.push(pet3);

function displayNames(){
    // display pet names
    console.log(pets[0].name);
    console.log(pets[1].name);
    console.log(pets[2].name);
    /// console.log(pets[1].name);

// hint: use a for loop and travel the array
// hint: use brute force\
// hint: length the ampunt of elements on the array
}

displayNames();