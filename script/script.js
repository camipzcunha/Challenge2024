
const pessoas = ['Camila', 'Isa', 'Nicoli']

for(i=0,i<=10;i++){
    console.log(i)
}

pessoas.forEach( 
    function passarNomes(pessoa){
        console.log(`Olá ${pessoa}`)
    }   )

    