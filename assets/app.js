let header = document.getElementById("navbar")
const submitBtn = document.querySelector(".submit-btn")
const divAlert = document.querySelector(".div-alert")
const okMessage = document.querySelector("#alert-message-green")
const errorMessage = document.querySelector("#alert-message-red")

const formContent = document.querySelector(".form-content")
const nameInput = document.querySelector("#nome")
const emailInput = document.querySelector("#email")
const messageInput = document.querySelector("#messaggio")

const publicKey = "Y-dX644jg-89EPDiD"
const serviceId = "service_portfolio"
const templateId = "template_pggsa0f"

emailjs.init(publicKey);

formContent.addEventListener("submit", e =>{
    e.preventDefault();
    submitBtn.innerText = "Attendi...";
    const params = {
        nome: nameInput.value,
        email: emailInput.value,
        messaggio: messageInput.value
    }

    emailjs.send(serviceId, templateId, params)
    .then(() =>{
        divAlert.style.display = "flex"
        okMessage.innerText = "Messaggio Inviato Con Successo";
        submitBtn.innerText = "INVIA"
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    }, (error) => {
        console.log(error)
        submitBtn.innerText = "Qualcosa è Andato Storto... Riprova"
    });
})

function resetDiv(){
    divAlert.style.display = "none";
    okMessage.innerText = "";
    errorMessage.innerText = ""
}



    window.onscroll = function(){
        if(document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10){
            console.log("scrolling")
            header.classList.add("header-scrolled")
            header.classList.remove("header-no-scrolled")
        } else{
            header.classList.add("header-no-scrolled")
            header.classList.remove("header-scrolled")
        }
    }



