const formulario = document.querySelector('.formulario')

// sempre que o formulario der um 'submit' executa essas funções
formulario.addEventListener('submit', function (e) {
    e.preventDefault()
    valorPrincipal()
})

function valorPrincipal() {
    const p = formulario.querySelector('#valorPrincipal')
    const r = formulario.querySelector('#taxaJuros')
    const n = formulario.querySelector('#meses')

    caluclar(p.value, r.value, n.value)
    console.log(p.value, r.value, n.value);
}

function caluclar(p, r, n) {
    let m = p * (1 + r / 100) ** n
    const montante = Math.floor(m)
    setResultado(montante)
}

function setResultado(msg) {
    const resultado = document.getElementById('resultado')
    resultado.innerText = 'R$: ' + msg
    resultado.classList.add('result')

}