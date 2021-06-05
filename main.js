var fullname = document.getElementById('fullname');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var affair = document.getElementById('affair');
var message = document.getElementById('message');
var error = document.getElementById('error');
error.style.color = 'red';

/* function enviarFormulario(){
  console.log('Enviando Formulario...');

  var mensajeError = [];

  if(name.value === null || name.value === ''){
    mensajeError.push('ingresa tu nombre');
  }

  if(email.value === null || email.value === ''){
    mensajeError.push('ingresa tu email');
  }

  if(phone.value === null || phone.value === ''){
    mensajeError.push('ingresa tu numero telefonico');
  }

  if(affair.value === null || affair.value === ''){
    mensajeError.push('ingresa tu asunto');
  }

  if(message.value === null || message.value === ''){
    mensajeError.push('ingresa tu mensaje');
  }

  error.innerHTML = mensajeError.join(', ');

  return false;
} */


function valideKey(evt){
			
    // code is the decimal ASCII representation of the pressed key.
    var code = (evt.which) ? evt.which : evt.keyCode;
    
    if(code==8) { // backspace.
      return true;
    } else if(code>=48 && code<=57) { // is a number.
      return true;
    } else{ // other keys.
      return false;
    }
}
var form = document.getElementById('form');
form.addEventListener('submit', e=>{
    e.preventDefault();
    var mensajeError = [];

  if(fullname.value === null || fullname.value === ''){
    mensajeError.push('ingresa tu nombre');
  }

  if(phone.value === null || phone.value === '' || phone.value.length < 10){
    mensajeError.push('ingresa tu numero telefonico');
  }
  else if(isNaN(phone)){
    mensajeError.push('el telefono ingresado no es un numero');
  }

  if(affair.value === null || affair.value === ''){
    mensajeError.push('ingresa tu asunto');
  }

  if(message.value === null || message.value === ''){
    mensajeError.push('ingresa tu mensaje');
  }

  let regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  if(!regexEmail.test(email.value)){
      mensajeError.push('Email no valido');
  }

  error.innerHTML = mensajeError.join(', ');

  return false;
})
