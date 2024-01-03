// Mein Javascript Code für die E-Mail's
// 37334A3081D54F1014FC25976948CA10C1FF
//       /\ /\ /\
//       |  |  |
// Passwort für die SMTP API
// Server: smtp.elasticemail.com
// Schnittstelle: 2525

{/* <script src="https://smtpjs.com/v3/smtp.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="email_script.js"></script> */}
//         /\ /\ /\
//         |  |  |
// einzubindenne Scripte !!!


const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");



function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`; 

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kevinvoelkel1991@gmail.com",
        Password : "37334A3081D54F1014FC25976948CA10C1FF",
        To : 'kevinvoelkel1991@gmail.com',
        From : "kevinvoelkel1991@gmail.com",
        Subject : "subject.value",
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK"){
            Swal.fire({
                title: "OK!",
                text: "Ihre Email wurde Erfolgreich gesendet.",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        // if (email.value != "") {
        //     errorTxtEmail.innerText = "gültige E-Mail-Adresse eingeben!";
        // }
        // else{
        //     errorTxtEmail.innerText = "Bitte geben Sie eine E-mail an.";
        // }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}



// Hier beginnt das Programm
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error")) {
        sendEmail();
    }

});