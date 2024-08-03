let prev = 0
let current = 0
let soma = 0
function limpar() {
    res.innerHTML = ''
    current = ''
    prev = ''
}
function digitarNumero(num) {
    current += num
    res.innerHTML = current
}
function somar() {
    prev = current
    current = ''
    res.innerHTML = ''
}
function apagar() {
    res.innerHTML = current.length
}
function total() {
    soma = Number(current) + Number(prev)
    res.innerHTML = soma
}
limpar()