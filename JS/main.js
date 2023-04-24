class Calculadora {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', (e)=> {
            e.preventDefault()
            this.valorPrincipal()
        })
    }

    valorPrincipal() {
        const p = this.formulario.querySelector('#valorPrincipal')
        const r = this.formulario.querySelector('#taxaJuros')
        const n = this.formulario.querySelector('#meses')

        this.caluclar(p.value, r.value, n.value)
        console.log(p.value, r.value, n.value);
    }

    caluclar(p, r, n) {
        let m = p * (1 + r / 100) ** n
        const montante = m.toFixed(2)
        this.setResultado(montante)
    }

    setResultado(msg) {
        const resultado = document.getElementById('resultado')
        resultado.innerText = 'R$: ' + msg
        resultado.classList.add('result')
    }
}
const calculadora = new Calculadora()
