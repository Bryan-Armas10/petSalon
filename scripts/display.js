function displayCards(){
    let card="";
    for(let i=0;i<pets.length;i++){
        let pet = pets[i];// Getting the current
        card+=`
        <div class="pet ${pet.service}">
            <p>Name: ${pet.name}</p>
            <p>Age: ${pet.age}</p>
            <p>Gennder: ${pet.gender}</p>
            <p>Service: ${pet.service}</p>
        </div>
        `;
        console.log(card);
    }
    document.getElementById("pets").innerHTML=card;// insert the cart into HTML
}

function displayTotals(){
    document.getElementById("total").innerHTML=pets.length;
}       

function displayTable(){
    let row ="";
    for(let i=0;i<pets.length;i++){
        let pet = pets[i];// Getting the current
        row +=`<tr 
        id="${i}">
        <td>${pet.name}</td>
        <td>${pet.age}</td>
        <td>${pet.gender}</td>
        <td>${pet.breed}</td>
        <td>${pet.service}</td>
        <td><button class="btn btn-danger" onclick="deletePet(${i})">Delete </button></td>
        </tr>`
        console.log(row);
     // instead of card use row
     //row +=`<tr></tr>`
     // read about HTML tables
    }
    document.getElementById("petTable").innerHTML=row;// insert the cart into HTML
}

// Create the deletePet function under the registe.js annd display on the console "Deleting pet ..." 