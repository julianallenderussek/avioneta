const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  console.log('click')
})

//Send Email function
function sendEmail(name, last_name, phone, user_email, razon_visita) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "ffuentesdelaparra@gmail.com",
    Password: "mschbavemdoqhfng",
    // To: (`${user_email}`, 'jallenderussek@gmail.com', 'ffuentesdelaparra@gmail.com'),
    To: `${user_email}`,
    From: "contacto@avioneta.org",
    Subject: `Avioneta Contacto: ${name} gracias por ponerte en contacto`,
    Body: `Estimado: ${name}:<br/>
     Muchas gracias por contactarnos. <br/>
     Uno de nuestros agentes se pondra en contacto contigo enseguida. <br/>Gracias por dejarnos tus datos, por favor verifica si son correctos.<br/> 
     Sino nos puedes escribir al siguiente numéro. 8124486070 <br/>
     <br/>
    
    Nombre: ${name}
    <br/>
    Apellido: ${last_name}
    <br/>
    Email: ${user_email}
    <br/>
    Razón Vista: ${razon_visita}
    <br/>
    Télefono: ${phone}
    <br/>`,
  }).then(
    message => alert('Gracias por contactarnos, un correo fue enviado a tu mail')
  );
  console.log(`${user_email}`, 'jallenderussek@gmail.com', 'ffuentesdelaparra@gmail.com')
}


//Form Validation
function validation() {
  var name = document.getElementById('name').value
  var last_name = document.getElementById('last_name').value
  var user_email = document.getElementById('user_email').value
  var phone = document.getElementById('phone').value
  var razon_visita = document.getElementById('razon_visita').value
  var error_message = document.getElementById('error_message');
  var text;

  // if (name.length < 1) {
  //   text = "Favor de ingresar un nombre"
  //   error_message.innerHTML = text
  //   return false
  // }

  // if (last_name.length < 1) {
  //   text = "Favor de ingresar un apellido"
  //   error_message.innerHTML = text
  //   return false
  // }
  
  if (isNaN(phone)) {
    text = "Favor de ingresar un télefono valido"
    error_message.innerHTML = text
    return false
  }

  if (user_email.length < 1) {
    text = "Favor de ingresar un email"
    error_message.innerHTML = text
    return false
  }
    console.log(user_email)
    sendEmail(name, last_name, phone, user_email, razon_visita)
    alert('Gracias por contactarnos. Un correo electronico fue enviado a tu mail')
    return true
}


//Toggle Info Menu
toggleCount = 0

innerHTML1 = '<h3 class="title-paquete">Paquete 1</h3> <ul class="list-paquete"> <li>Este es el paquete 1</li><li>ESTE ES EL PAQUETE 1</li><li>ESTE ES EL PAQUETE Uno</li></ul>'
innerHTML2 = '<h3 class="title-paquete">Paquete 2</h3> <ul class="list-paquete"> <li>Este es el paquete 2</li><li>ESTE ES EL PAQUETE 2</li><li>ESTE ES EL PAQUETE DOS</li></ul>'
innerHTML3 = '<h3 class="title-paquete">Paquete tres</h3> <ul class="list-paquete"> <li>Este es el paquete 4</li><li>ESTE ES EL PAQUETE 3</li><li>ESTE ES EL PAQUETE tres</li></ul>'
innerHTML4 = '<h3 class="title-paquete">Paquete 4</h3> <ul class="list-paquete"> <li>Este es el paquete 4</li><li>ESTE ES EL PAQUETE 2</li><li>ESTE ES EL PAQUETE CUATRO</li></ul>'


displayContainer = document.getElementsByClassName("display_container")
button1 = document.getElementsByClassName('btn1')
button2 = document.getElementsByClassName('btn2')
button3 = document.getElementsByClassName('btn3')
button4 = document.getElementsByClassName('btn4')


// Era la funcionalidad de la flecha.
// function dropdown1() {
//   if (toggleCount == 0) {
//     displayContainer[0].innerHTML = innerHTML1
//     displayContainer[0].style.display = 'flex'
//     button1[0].src = '/assets/Avio_WEB_Asset-18.png'
//     toggleCount = 1;
//   } else if (toggleCount == 1) {
//     displayContainer[0].style.display = 'none'
//     toggleCount = 0;
//     button1[0].src = '/assets/155x50.png'
//     button2[0].src = '/assets/155x50.png'
//     button3[0].src = '/assets/155x50.png'
//     button4[0].src = '/assets/155x50.png'
//   }

// }

// function dropdown2() {
//   if (toggleCount == 0) {
//     displayContainer[0].innerHTML = innerHTML2
//     displayContainer[0].style.display = 'flex'
//     button2[0].src = '/assets/Avio_WEB_Asset-18.png'
//     toggleCount = 1;
//   } else if (toggleCount == 1) {
//     displayContainer[0].style.display = 'none'
//     toggleCount = 0;
//     button1[0].src = '/assets/155x50.png'
//     button2[0].src = '/assets/155x50.png'
//     button3[0].src = '/assets/155x50.png'
//     button4[0].src = '/assets/155x50.png'
//   }
// }

// function dropdown3() {
//   if (toggleCount == 0) {
//     displayContainer[0].innerHTML = innerHTML3
//     displayContainer[0].style.display = 'flex'
//     button3[0].src = '/assets/Avio_WEB_Asset-18.png'
//     toggleCount = 1;
//   } else if (toggleCount == 1) {
//     displayContainer[0].style.display = 'none'
//     toggleCount = 0;
//     button1[0].src = '/assets/155x50.png'
//     button2[0].src = '/assets/155x50.png'
//     button3[0].src = '/assets/155x50.png'
//     button4[0].src = '/assets/155x50.png'
//   }

// }
// function dropdown4() {
//   if (toggleCount == 0) {
//     displayContainer[0].innerHTML = innerHTML4
//     displayContainer[0].style.display = 'flex'
//     button4[0].src = '/assets/Avio_WEB_Asset-18.png'
//     toggleCount = 1;
//   } else if (toggleCount == 1) {
//     displayContainer[0].style.display = 'none'
//     toggleCount = 0;
//     button1[0].src = '/assets/155x50.png'
//     button2[0].src = '/assets/155x50.png'
//     button3[0].src = '/assets/155x50.png'
//     button4[0].src = '/assets/155x50.png'
//   }

// }
