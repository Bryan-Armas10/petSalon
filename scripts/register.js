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
// Push the pets
pets.push(pet1);
pets.push(pet2);
pets.push(pet3);

// Function displayCount is for total pets register
function displayCount() {
    let count = pets.length;
    document.getElementById("petCount").innerHTML = `<h2>Total pets: ${count}</h2>`;
}
// Function displayNames is for names the all pets
function displayNames(){
    for(let i = 0; i < pets.length; i++){
        document.getElementById("petnames").innerHTML +=`
        <div>
            <h3>pet ${[i + 1]}: ${pets[i].name}</h3>
        </div>
    `;
    }

// hint: use a for loop and travel the array
// hint: use brute force\
// hint: length the ampunt of elements on the array
}