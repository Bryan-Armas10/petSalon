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
        $("#txtName").addClass("error");          
        //inputName.classList.addClass("error");
        $(".nameValidationMsg").css("color","red").show();
    }else{
        $("#txtName").removeClass("error");
        //inputName.classList.removeClass("error");
        $(".nameValidationMsg").hide();
        validation=true;
    }

    if(pet.age==""){
        validation = false;
        $("#txtAge").addClass("error");
        //inputService.classList.add("error");
        $(".ageValidationMsg").css("color","red").show();
    }else{
        $("#txtAge").removeClass("error");
        //inputAge.classList.removeClass("error");
        $(".ageValidationMsg").hide();
        validation=true;
    }

    if(pet.gender==""){
        validation = false;
        $("#txtGender").addClass("error");
        //inputService.classList.add("error");
        $(".genderValidationMsg").css("color","red").show();
    }else{
        $("#txtGender").removeClass("error");
        //inputGender.classList.removeClass("error");
        $(".genderValidationMsg").hide();
        validation=true;
    }

    if(pet.breed==""){
        validation = false;
        $("#txtBreed").addClass("error");
        //inputService.classList.add("error");
        $(".breedValidationMsg").css("color","red").show();
    }else{
        $("#txtBreed").removeClass("error");
        //inputBreed.classList.removeClass("error");
        $(".breedValidationMsg").hide();
        validation=true;
    }

    if(pet.service==""){
        validation = false;
        $("#txtService").addClass("error");
        //inputService.classList.add("error");
        $(".serviceValidationMsg").css("color","red").show();
    }else{
        $("#txtService").removeClass("error");
        //inputService.classList.removeClass("error");
        $(".serviceValidationMsg").hide();
        validation=true;
    }

    return validation;
}

function clearForm() {
    // Sets the value of the input field with the ID txtName to an empty string, effectively clearing it.
    $("#txtName").val('');
    $("#txtAge").val('');
    $("#txtGender").val('');
    $("#txtBreed").val('');
    $("#txtService").val('');
    // Hides any element with the class nameValidationMsg, which likely contains error or warning messages related to the title.
    $(".nameValidationMsg").hide();
    $(".ageValidationMsg").hide();
    $(".genderValidationMsg").hide();
    $(".breedValidationMsg").hide();
    $(".serviceValidationMsg").hide();
    //  Removes the error class from the txtName field, which may have highlighted the field as invalid.
    $("#txtName").removeClass("error");
    $("#txtAge").removeClass("error");
    $("#txtGender").removeClass("error");
    $("#txtBreed").removeClass("error");
    $("#txtService").removeClass("error");
}

function register(){
    // Create de object
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value);
    console.log(newPet);
    if(isValid(newPet)==true){
        pets.push(newPet);
        displayTotals();
        displayTable();
        clearForm();
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
    $(".nameValidationMsg").hide();
    $(".ageValidationMsg").hide();
    $(".genderValidationMsg").hide();
    $(".breedValidationMsg").hide();
    $(".serviceValidationMsg").hide();
    // hook events
    $().click(register);
    $("#txtService").on("keypress", function(event) {

        if (event.which == 13) {
            register();
        }
   });

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