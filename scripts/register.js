console.log("register.js");
let pets = []; // empty array

function Pet(name,age,gender,breed,service){
    // properties = parameter (value) 
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
}

function register(){
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    // let inputGender = document.getElementById("txtGender").value;
    let inputGender = document.querySelector('input[name="gender"]:checked')?.value || '';  
    let inputBreed = document.getElementById("txtBreed").value;
    let inputService = document.getElementById("txtService").value;

    console.log(inputName,inputAge,inputGender,inputBreed,inputService);
    // Create de object
    let newPet = new Pet(inputName,inputAge,inputGender,inputBreed,inputService);
    console.log(newPet);
    pets.push(newPet);
    displayTotals();
    displayTable();
}

function init(){
    console.log("init");
    let pet1 = new Pet("Scooby",99,"Male","Dalma","Grooming");
    // create 2 more pets
    let pet2 = new Pet("Snoopy",30,"Male","Husky","Grooming");
    let pet3 = new Pet("Tuti",50,"Female","Chihuahua","Nails");

    // push the pets on the array
    pets.push(pet1,pet2,pet3);
    //display the three pets on the console
    console.log(pets);
    displayTotals();
    displayTable();
}

window.onload=init; // wait to render the html  