let password = document.getElementById('password')

    let passwordconfirmation = document.getElementById ('passwordconfirmation')

    let validation = document.getElementById('validation')

    let success = document.getElementById('success')

    let initial = document.getElementById('initial')

    let fbmai = document.getElementById('fbmai')

    let fbmin = document.getElementById('fbmin')

    let fbn = document.getElementById('fbn')

    let fbce = document.getElementById('fbce')

    let fb = document.getElementById('fb')

    let maiusculas = /A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z/

    let minusculas =/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/

    let numeros = /0|1|2|3|4|5|6|7|8|9/

    let caracesp = /\W/

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

                

        
