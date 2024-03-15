const inNumero = document.querySelector('#inNumero');
const btnApostar = document.querySelector('#btnApostar');
const btnReiniciar = document.querySelector('#btnJogar');
const outDica = document.querySelector('#outDicas')
const outChances = document.querySelector('#outChances')
let numero = inNumero

const outErros = document.querySelector('#outErros');

const sorteado = Math.floor(Math.random() * 100) + 1;
console.log(sorteado)

const Erros = [];
const Chances = 6

// const sorteado = Math.floor(Math.random()*100) + 1
// console.log(sorteado)
function vazio(inNumero) {
    if (inNumero.trim() === "") {
        alert("digite um Numero");
        inNumero.focus()
        return false
    }
    else {
        return true
    }

}
btnApostar.addEventListener('click', () => {
    if (vazio(inNumero.value)) {
        Acertos(Number(numero.value));

    }
})

function Acertos(numero) {
    console.log(numero)
    console.log(Erros)
    console.log(inNumero.value)
    if (numero === sorteado) {
        alert("Acertou")
        outDica.textContent = `Parabêns acertou o numero   ${sorteado}`
        document.body.style.background  = '#00FF7F'

    } else {
        if (Erros.includes(numero)) {
            alert(`você já usou esse numero... Tente outro`)
  
        } else {
            Erros.push(numero)
            let numErros = Erros.length
            let numChances = Chances - numErros

            outErros.textContent = `${numErros} (${Erros.join(', ')})`
            outChances.textContent = numChances
            if (numChances == 0) {
                btnApostar.disabled = true
                outDica.textContent = ` FIM DE JOGO ${sorteado}`
                document.body.style.background  = '#DC143C'
            } else {
                let dica = numero < sorteado ? "maior" : "menor"
                outDica.textContent = `Dica: tente um numero ${dica} que ${numero}`
            }
        }
    }
    inNumero.value = ''
    inNumero.focus()
}
function Reiniciar() {
    window.location.reload();
} 