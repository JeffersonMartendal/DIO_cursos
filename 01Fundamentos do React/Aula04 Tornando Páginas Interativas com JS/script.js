/*
 const valor1 = 10
 const valor2 = 2

 console.log("Soma", valor1 + valor2)
 console.log("Subtração", valor1 - valor2)
 console.log("Multiplicação", valor1 * valor2)
 console.log("Divisão", valor1 / valor2)



 if(notas < 5) {
     console.log("Abaixo da média")
 } else if(notas > 5 && notas < 7) {
     console.log("Na média")
 } else {
     console.log("Acima da média")
 }

 var notas = 2;

 switch (true) {
     case notas < 5:
         console.log("Abaixo da média");
         break;
     case notas === 5:
         console.log("Na média");
         break;
     default:
         console.log("Acima da média");
         break;
 }

 ternario
 nota > 5 ? console.log("aprovado") : console.log("reprovado")

 const nome = 'Jefferson'
 let aprovado = true
 var nota = 8

for(let i = 1; i <= 10; i++) {
    if(i % 2 == 0) {
        console.log(`${i} x 5 = ${i * 5}`)
    }
}

console.log('=======================')
let x = 1
while(x < 10) {
    console.log(`${x} x 5 = ${x * 5}`)
    x++
}

console.log('=======================')
const valores = [1,2,3,4,5,6,7,8,9,10]
valores.forEach((value) =>{
    console.log(`${value} x 5 = ${value * 5}`)
})

console.log('=======================')
const valores2 = [1,2,3,4,5,6,7,8,9,10]
const resultado = valores2.map((value) => {
    return value * 5
})
console.log(resultado)
// */

// ARROW FUNCTION
/*
const subtrair = (n1, n2) => n1 - n2

const somar= (n1, n2) => n1 + n2

const resultado = somar(9,5)
console.log(resultado)
*/
//-----------------------------------------

const alunos = [
    {
        nome: 'Jeff',
        idade: 22
    },
    {
        nome: 'José',
        idade: 19
    },
    {
        nome: 'Roberto',
        idade: 16
    }
]

const acimaDeNove = alunos.some(alunos => alunos.idade < 10)
console.log(acimaDeNove)

const menorQueNovementa = alunos.every(alunos => alunos.idade < 90)
console.log(menorQueNovementa)

const idades = alunos.reduce((acc, aluno) => {
    return acc + aluno.idade
},0)

console.log(idades)

/*
const alunosFiltrados = alunos.filter(aluno => aluno.idade >= 18)
console.table(alunosFiltrados)

const alunoRoberto = alunos.find((aluno) => aluno.nome == 'Roberto')
console.log(alunoRoberto)

const alunoRobertoIndex = alunos.findIndex((aluno) => aluno.nome == 'Roberto')
console.log(alunoRobertoIndex)
*/