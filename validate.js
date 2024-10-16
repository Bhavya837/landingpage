let check = () =>{
    const alphaex = /^[a-zA-Z]+$/
    const numex = /^[0-9]+$/
    const namevalid = document.getElementById("namevalid").value;
    const nameError= document.getElementById("nameError");
    let nameret = false;
    const phnvalid = document.getElementById("phnvalid").value;
    const phnError= document.getElementById("phnError");
    let phnret = false;
    if( namevalid === "")
    {
        nameError.textContent = ("Enter your name");
    }
    else {
        if(namevalid.match(alphaex)){
            nameError.textContent = ("");
            nameret = true;
        }
        else{
            nameError.textContent = ("Name should only contains alphabets");
        } 
    }
    if( phnvalid === ""){
        phnError.textContent = "Enter mobile number";
    }
    else if(phnvalid.match(numex))
        {
            if(phnvalid.length === 10){
                phnError.textContent = "";
                phnret = true;
            }
            else{
                phnError.textContent = "Phone number should be 10 digits long";
            }
           
    }
    else{
        phnError.textContent = "Phone number should only contains numbers"
    }

    if(nameret && phnret){
        showThankYouMessage();
        return true;
    }
    else{
        return false;
    }
}
function showThankYouMessage(){
    const modalBody = document.querySelector('.modal-body');
    modalBody.textContent = "Thank you! We\'ll get back to you shortly.";
}







