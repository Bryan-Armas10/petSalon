// creating the constructor

function Service(title,price){
    this.title=title;
    this.price=price;
}

function isValid(service){  
    let isValidTitle=true;
    let isValidPrice=true;

    if(service.title==""){
        isValidTitle=false;
        $("#txtTitle").addClass("error");
        $(".titleValidationMsg").css("color","red").show();
    }else{
        $("#txtTitle").removeClass("error");
        $(".titleValidationMsg").hide();
        isValidTitle=true;
    }

    if(service.price==""){
        isValidPrice=false;
        $("#txtPrice").addClass("error");
        $(".priceValidationMsg").css("color","red").show();
    }else{
        $("#txtPrice").removeClass("error");
        $(".priceValidationMsg").hide();
        isValidPrice=true;
    }
    return isValidTitle && isValidPrice;
}

function clearForm() {
    $("#txtTitle").val('');
    $("#txtPrice").val('');
    $(".titleValidationMsg").hide();
    $(".priceValidationMsg").hide();
    $("#txtTitle").removeClass("error");
    $("#txtPrice").removeClass("error");
}

function register(){
    // getting title and price form inputs
    let inputTitle=$("#txtTitle").val();
    let inputPrice=$("#txtPrice").val();
    let newService = new Service(inputTitle,inputPrice);
    console.log("Is valid? ", isValid(newService));

    if(isValid(newService)){    
        console.log(newService);
        //save(Service)
        clearForm();
    }else {
        alert("Complete all the information.");
    }
}

function init(){
    $(".titleValidationMsg").hide();
    $(".priceValidationMsg").hide();
    // hook events
    $("#btnRegister").click(register);
    $("#txtPrice").on("keypress", function(event) {

        if (event.which == 13) {
            register(); 
        }
   });
}

window.onload=init;