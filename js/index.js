let numeros = []
function limpar(){
    res.innerHTML = ''
    numeros = []
}
function digitarNumero(num){
    numeros.push(num)
    res.innerHTML +=  num
    console.log(res)
}
function apagar(){
    numeros.pop()
    res.innerHTML = numeros.join().replaceAll(',', '')
}
function total(){
    res = eval(res)
}