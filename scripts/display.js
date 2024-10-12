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
    let table =
    `
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Breed</th>
        <th>Service</th>
    </tr>
    `;
    for(let i=0;i<pets.length;i++){
        let pet = pets[i];// Getting the current
        table+=`
        <tr>
        <td>${pet.name}</td>
        <td>${pet.age}</td>
        <td>${pet.gender}</td>
        <td>${pet.breed}</td>
        <td>${pet.service}</td> 
        </tr>   
        `
        ;
        console.log(table);
     // instead of card use row
     //row +=`<tr></tr>`
     // read about HTML tables
    }
    document.getElementById("pets").innerHTML=table;// insert the cart into HTML
}