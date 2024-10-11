console.log("register.js");
let pets = []; // empty array

// Creation pets
let pet1 = {
    name:"Scooby",
    age:99,
    gender:"Male",
    service:"Grooming",
    breed:"boxer"
}
let pet2 = {
    name:"Snoopy",  
    age:10,
    gender:"Male",
    service:"Grooming",
    breed:"Dalmatian"
}   
let pet3 = {
    name:"Marley",
    age:20,
    gender:"Female",
    service:"Grooming",
    breed:"chihuahua"
}
// Push the pets
pets.push(pet1,pet2,pet3);

// Function displayCount is for total pets register
function displayCount() {
    let count = pets.length;
    document.getElementById("petCount").innerHTML = `<h2>Total pets: ${count}</h2>`;
}
// Function displayNames is for names the all pets
function displayNames(){
    for(let i = 0; i < pets.length; i++){
        document.getElementById("petnames").innerHTML +=`<p>name: ${pets[i].name}</p>`;
    }
    console.log(pets.length);
}