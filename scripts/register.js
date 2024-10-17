console.log("register.js");
let pets = []; // empty array

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");   

function Pet(name,age,gender,breed,service){
    // properties = parameter (value) 
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
}

function isValid(pet){      
    let validation = true;  
    if(pet.name==""){
        validation = false;             
        inputName.classList.add("error");
    }
    if(pet.age==""){
        validation = false;
        inputService.classList.add("error");
    }
    if(pet.gender==""){
        validation = false;
        inputService.classList.add("error");
    }
    if(pet.breed==""){
        validation = false;
        inputService.classList.add("error");
    }
    if(pet.service==""){
        validation = false;
        inputService.classList.add("error");
    }
    return validation;
}

function register(){
    // Create de object
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value);
    console.log(newPet);
    if(isValid(newPet)==true){
        pets.push(newPet);
        displayTotals();
        displayTable();
    }else {
        alert("Complete all the information.");
    }
}

function deletePet(petId){
    console.log("Deleting pet ..." + petId);
    document.getElementById(petId).remove();    
    pets.splice(petId,1);
    displayTable();
    displayTotals();
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