/*Outputs (prints na tela)*********************************************/
document.write('Hello World!');
console.log('Hello World!');
alert('Hello World!');
/*Inputs (Formularios)*********************************************/
var idade = prompt("Qual é sua idade?");

/*tipos de dados********************************************************/

//variáveis podem ser declaradas como var ou let
var variavel1
let variavel2 = "Uma string"
const constante = "Uma constante"

//Strings podem ser declaradas de 3 formas sendo sempre atribuidas à uma variável ou constante
var s1 = "Uma string com aspas duplas"
var s2 = 'Uma string com aspas simples'
var s3 = `Uma string com cráse`

//Números são do tipo number
var n1 = 1
const n2 = 15
document.write(n1 + n2)//operação matemática
n1 = "1"
document.write(n1 + n2)//concatenação

//Boolean
const bT = true
const bF = false

/*Estruturas de dados************************************************/
//Array (vetores) uma coleção de dados
const colecao = ["blue", "green", 3, {nome: "kleber"}]

document.write(colecao[0])//acessando o índice do array
document.write(colecao[3].nome)

var carros = [ "Saab", "Volvo", "BMW" ]
var carros = new Array("Saab", "Volvo", "BMW")
/*Os dois exemplos acima fazem exatamente o mesmo. Não é necessário usar o novo Array(). Por simplicidade, legibilidade e velocidade de execução, use o primeiro (método literal do Array).*/
var lista = ['larajna', 'maçã', 'mangaba']
console.log(lista);
console.log(lista[1]);
lista.push('tanjerina');//insere um item ao fim da lista
console.log(lista);
lista.pop();//tira o último item da lista
console.log(lista);
lista.pop("maçã");//tira um item especifico
console.log(lista.length);//mostra o tamanho
console.log(lista.reverse());//inverte a ordem
console.log(lista.toString());// transforma tudo em string
console.log(lista.join(" - "));// insere um caractere entre os itens da lista

//Dicionario
var dicionario = {nome: 'juliana', idade: 25, cor: 'vermelha'}//sintaxe semelhante ao objeto Json
alert(dicionario.nome + dicionario.idade + dicionario.cor);

//DATE - datas
var data = new Date();
alert(data.getDay());
alert(data.getMonth());
alert(data.getTime());

//Objetos
const pessoa = {
  //atributos
  altura: '1,80m',//chave e valor
  idade: 24,
  solteiro: true,
  correr(){
    document.write('uma pessoa correndo')//ex1: sem o return a função retorna um Undefined
    return "correndo"//ex2: com esta linha atribuimos à função um tipo de dado do retorno
  }
}

document.write(pessoa.correr())

/*estruturas condicionais**********************************************/

const notaFinal = 7

if(notaFinal < 5){
  document.write('Reprovado')
} else {
  document.write('Aprovado')
}

var idade = prompt("Qual é sua idade?");
if(idade<=18){
    alert("Você é menor de idade!");
}else{
    alert("Você é maior de idade!");
}

/*estruturas de repetição/loops******************************************/
for(i = 0; i < 5; i++){
  document.write('string')
  document.write(`<p>indice  i = ${i}</p>`)
  //para usar a interpolação (um valor dentro de uma string) precisa inserir a string dentro de cráse
}

var count = 0;
while(count <= 5){
  console.log(count);
  count++;
}

/*funções**************************************************************/
function sayName(name){//registrar função
  document.write(name)
  alert(name);
}

sayName('kleber')//executar função

function soma(n1, n2){
  return n1 + n2;
}

frase = "Kurama Futari Hito"
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
frase = setReplace(frase, "Kurama", "Kyuubi");
console.log(frase);

/*Manipulação de elementos HTML*******************************************/
//Exemplo de Funções
function clicou(){
  document.getElementById("thanks").innerHTML = "<b>Obrigado por clicar!</b>";//escreve algo no documento HTML
  //alert("Yeah");
}

function redirecionar(){
  window.open("https://www.devmedia.com.br/javascript-arrays/4079");//abre em uma nova guia
  window.location.href = "https://www.devmedia.com.br/javascript-arrays/4079";//abre na mesma guia
}

/*Tipos de Escopo********************************************************/
var exemplo;//Escopo global
{
  var exemplo;//Escopo de bloco(if, else, for, while, etc.)
}
function test(){
  var exemplo;//escopo de função
}
/*CONST */
//Não podemos alterar o valor
const name = 'Kleber';//name não pode ser alterado pois é uma constante
const user = {//name pode ser alterado pois é um atributo do objeto user
  name: 'Kleber'
};

//Mas se for um objeto, podemos trocar suas propriedades
user.nome = "outro nome";

//Não podemos fazer o objeto "apontar" para outro lugar (lembra de ponteiros em C?)
user = {
  nome: 'Leonardo'
};
//Outro exemplo:
const persons = ['Luana', 'João', 'Priscila'];

//Podemos adicionar novos itens
persons.push('Alana');

//Podemos alterar diretamente o valor do índice x
persons[0] = 'Karol';

persons = ['novo array'];//Não é possível reatribuir apontando para outro endereço de memória

console.log('\nArray após as alterações: ', persons);