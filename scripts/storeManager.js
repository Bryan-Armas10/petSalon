function save(service){
    let list = read();
    list.push(service);
    let val = JSON.stringify(list);
    localStorage.setItem("services",val);
}

function read(){
    let data= localStorage.getItem("services");
    if(!data){ // NOT data?
        //if I get here the LS is empty
        return [];
    }else{
        return JSON.parse(data);
    }
} 