const password = document.getElementById('password')

const passwordconfirmation = document.getElementById ('passwordconfirmation')

const validation = document.getElementById('validation')

const success = document.getElementById('success')

const initial = document.getElementById('initial')

const fbmai = document.getElementById('fbmai')

const fbmin = document.getElementById('fbmin')

const fbn = document.getElementById('fbn')

const fbce = document.getElementById('fbce')

const fb = document.getElementById('fb')

const maiusculas = /A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z/

const minusculas =/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/

const numeros = /0|1|2|3|4|5|6|7|8|9/

const caracesp = /\W/

function comparar(){
    fb.style.display = 'block'

    if ( password.value.search(maiusculas) !== -1){
        fbmai.style.color = 'var(--Green)'
    }else{
        fbmai.style.color = 'var(--Red)'
    }if(password.value.search(minusculas) !== -1){
        fbmin.style.color = 'var(--Green)'
    }else{
        fbmin.style.color = 'var(--Red)'
    }if(password.value.search(numeros) !== -1){
        fbn.style.color = 'var(--Green)'
    }else{
        fbn.style.color = 'var(--Red)'
    }if(password.value.search(caracesp) !== -1){
        fbce.style.color = 'var(--Green)'
    }else{
        fbce.style.color = 'var(--Red)'}
}
function enviar(){
    if (password.value !== passwordconfirmation.value){
    validation.innerHTML = 'As senhas digitadas são diferentes.'
    }else if(password.value.search(maiusculas) === -1 | password.value.search(minusculas) === -1 | password.value.search(numeros) === -1 | password.value.search(caracesp) === -1){
        validation.innerHTML = 'Verifique os dados.'
    }else if(password.value.length < 8){
        validation.innerHTML = 'A senha deve conter pelo menos 8 caracteres.'
    }else{
    success.style.display = 'block'
    initial.style.display = 'none'}
}  

                

        
