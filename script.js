function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
var sec = data.getSeconds()
msg.innerHTML=`Agora são ${hora} horas, ${min} minutos e ${sec} segundos.`
setTimeout('carregar()',500);

if ( hora >= 0 && hora<12){
 img.src = 'manha.jpg'
 document.body.style.background = '#FDC766'
} else if (hora >= 12 && hora< 18){
  img.src = 'tarde.jpg'
  document.body.style.background = '#F09F84'
} else {
  img.src = 'noite.jpg'
  document.body.style.background = '#5E446A'
}
}