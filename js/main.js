var nome = "Kleber";
var idade = 26;
/*
//alert(nome + " tem " + idade + " anos");
console.log(nome + " tem " + idade + " anos"); 
var frase = "Náutico é o melhor time de Pernambuco";
console.log(frase.replace("Náutico", "Sport"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
console.log(nome.length);

document.write('Hello World!');
console.log('Hello World!');
alert('Hello World!');
*/
/*
var lista = ['larajna', 'maçã', 'mangaba']
console.log(lista);
console.log(lista[1]);
lista.push('tanjerina');
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" :P "));
*/
/*
var data = new Date();
alert(data);
alert(data.getDay());
alert(data.getMonth()+1);//sempre adicione +1 para não contar com o zero
alert(data.getHours())
alert(data.getMinutes());
alert(data.getSeconds());
*/
/*
var dicionario = {nome: 'juliana', idade: 25, cor: 'vermelha'}//sintaxe semelhante ao objeto Json
alert(dicionario.nome + dicionario.idade + dicionario.cor);

var idade = prompt("Qual é sua idade?");
if(idade<=18){
    alert("Você é menor de idade!");
}else{
    alert("Você é maior de idade!");
}

for(i = 0; i < 5; i++){
    document.write('string')
    document.write(`<p>indice  i = ${i}</p>`)
    //para usar a interpolação (um valor de variável dentro de uma string) precisa inserir a string dentro de cráse
}

var count = 0;
while(count <= 5){
  console.log(count);
  count++;
}
*/
/*
function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5,7))

frase = "Kurama Futari Hito"

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

frase = setReplace(frase, "Kurama", "Kyuubi");
console.log(frase);
*/
function load(){
    alert("page loaded!")
}

function clicou(){
    document.getElementById("thanks").innerHTML = "<b>Obrigado por clicar!</b>";//escreve algo no documento HTML
    //alert("Yeah");
}

function redirecionar(){
    window.open("https://www.devmedia.com.br/javascript-arrays/4079");//abre em uma nova guia
    window.location.href = "https://www.devmedia.com.br/javascript-arrays/4079";//abre na mesma guia
}

function mensagem(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse!";
    //document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse!";
    //alert("Uma mensagem aqui!")
}
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!";
    //document.getElementById("mouseover").innerHTML = "Passe o mouse aqui!";
}

function functionChange(elementox){
    console.log(elementox.value);
}