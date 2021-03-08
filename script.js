const { nearer } = require("q")

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

//Send Email function
function sendEmail(name, last_name, phone, mail, razon_visita) {
  console.log('email is being send')
  Email.send({
    Host: "smtp.gmail.com",
    Username: "julianallenderussek@gmail.com",
    Password: "libtfbzsqgzindyb",
    To: `${mail}`,
    From: "julianallenderussek@gmail.com",
    Subject: `${name} gracias por contactar avioneta`,
    Body: `Name:${name}, muchas gracias por contactarnos. Uno de nuestros agentes se pondra en contacto contigo. Gracias por dejarnos tus datos, por favor verifica si son correctos. Sino nos puedes escribir al siguiente numéro. 8124486070 
    <br/>
    Nombre: ${name}
    <br/>
    Apellido: ${last_name}
    <br/>
    Email: ${mail}
    <br/>
    Razón Vista: ${razon_visita}
    <br/>
    Télefono: ${phone}
    <br/>`,
  }).then(
    message => alert('Gracias por contactarnos, un correo fue enviado a tu mail')
  );
}


//Form Validation
function validation() {
  var name = document.getElementById('name').value
  var last_name = document.getElementById('last_name').value
  var mail = document.getElementById('email').value
  var phone = document.getElementById('phone').value
  var razon_visita = document.getElementById('razon_visita').value
  var error_message = document.getElementById('error_message');
  var text;

  if (name.length < 1) {
    text = "Favor de ingresar un nombre"
    error_message.innerHTML = text
    return false
  }

  if (last_name.length < 1) {
    text = "Favor de ingresar un apellido"
    error_message.innerHTML = text
    return false
  }
  
  if (isNaN(phone)) {
    text = "Favor de ingresar un télefono valido"
    error_message.innerHTML = text
    return false
  }

  if (mail.length < 1) {
    text = "Favor de ingresar un email"
    error_message.innerHTML = text
    return false
  }
    alert('Form Submitted Succesfully')
    sendEmail(name, last_name, phone, mail, razon_visita)
  
    return true
}