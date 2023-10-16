let header = document.getElementById("navbar")
const submitBtn = document.querySelector(".submit-btn")


function attivaSubmit(){
    let params = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        messaggio: document.getElementById("messaggio").value
    }
    const errorMessage = document.getElementById("error-message")
    const successMessage = document.getElementById("success-message")

    if(params.nome !== "" && params.email !== "" && params.messaggio !== ""){
        submitBtn.disabled = false
        console.log("button ok")
        successMessage.innerHTML = "Ok!"
        errorMessage.innerHTML = ""
    } else {
        submitBtn.disabled = true
        console.log("button disabled")
        successMessage.innerHTML = ""
        errorMessage.innerHTML = "Compila tutti i campi"
        }
}


function sendMail(){
    let params = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        messaggio: document.getElementById("messaggio").value
    }

    const serviceId = "service_portfolio"
    const templateId = "template_pggsa0f"
    
    emailjs.send(serviceId, templateId, params)
        .then(function (res){
            console.log("messaggio inviato")
        })
        .catch(error => alert("compilare tutti i campi"))
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



