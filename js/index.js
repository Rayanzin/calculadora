let prev = 0
let current = 0
let operacao = 0
let who;
function limpar() {
    previous.innerHTML = ''
    res.innerHTML = ''
    current = ''
    prev = ''
}
function digitarNumero(num) {
    if(num == '.' && current.indexOf('.') == -1){
        current += num
        res.innerHTML = current
    }else if(num != '.') {
        current += num
        res.innerHTML = current
    }
}

function apagar() {
    current = current.toString().slice(0, -1)
    res.innerHTML = current
}
function operador(e) {
    who = e
    transisao()
}
function transisao() {
    prev = current
    current = ''
    res.innerHTML = current
    previous.innerHTML = prev
}
function total() {
    if (who == 'soma') {
        current = Number(prev) + Number(current)
    } else if (who == 'sub') {
        current = Number(prev) - Number(current)
    } else if (who == 'mult') {
        current = Number(prev) * Number(current)
    } else if (who == 'div') {
        current = Number(prev) / Number(current)
    } else {
        res.innerHTML = 'Sabe não ó'
    }
    res.innerHTML = current
    previous.innerHTML = ''
}
limpar()