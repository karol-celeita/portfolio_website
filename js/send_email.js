const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");



function sendEmail(){

    const bodyMessage = `Full Name: ${fullName.value} <br>
     Email: ${email.value} <br> Telefono: ${phone.value} <br>
     <br> Mensaje: ${message.value} <br>`;


    Email.send({
        SecureToken : "a2c24dc3-06af-4903-992a-61ae215e1e55",
        To : "g@gmail.com",
        From : "g@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message =="OK"){
            Swal.fire({
                title: "Bien hecho",
                text: "Se ha enviado el mensaje correctamente",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs(){
    const items = document.querySelectorAll(".item");

    for (const item of items){
        if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != ""){
            checkEmail();
        }

        items[1].addEventListener("keyup",()=>{
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if (item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail(){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");
    
    if (!email.value.match(emailRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != ""){
            errorTxtEmail.innerText = "Ingresa un email válido";
        }
        else{
            errorTxtEmail.innerText = "¡Opps, el correo no puede estar vacío!";
        }
    }

    else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && 
        !email.classList.contains("error") && 
        !phone.classList.contains("error") &&
        !subject.classList.contains("error") &&
        !mess.classList.contains("error") 
        ){
            sendEmail();
            form.reset();
            return false;
        }
   

});