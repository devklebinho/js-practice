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
    console.log('\nPágina carregada com sucesso!')
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
/*
const myNumber = 65.354312;
console.log(typeof myNumber);
//Transformar número para string
const numberAsString = myNumber.toString();
console.log('\nNúmero como string: ', numberAsString);

//Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais: ', fixedTwoDecimals);

//Transforma uma string em float (CAST)
console.log('\nString transformada em float: ', parseFloat('13.256'));

//Transforma uma string em int (CAST)
console.log('\nString transformada em int: ', parseInt('13.256'));
*/
/*
const user = {
    name: 'Kleber',
    lastName: 'Silva'
};

//Recupera as chaves do objeto
console.log('Propriedades do objeto user: ', Object.keys(user));

//Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user: ', Object.values(user));

//Recupera um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores: ', Object.entries(user));

//Mergear propriedades de objetos
Object.assign(user, {fullName: 'Kleber Silva'});

console.log('\nAdiciona a propriedade fullName no objeto user: ', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos: ', Object.assign({}, user, {age: 26}));

//Previne todas as alterações em um objeto
const newObj = {foo: 'bar'};
*/
//Permite apenas alteração de propriedades existentes em um objeto
/*
const pessoa = {nome: 'Armando'};
console.log(pessoa);
Object.seal(pessoa);

pessoa.nome = 'Armando Português';
delete pessoa.nome;
pessoa.idade = 49;

console.log('\nVariável pessoa após as alterações: ', pessoa);
*/
/*
function funcao(){
    return 'Código aqui';
}

const arrowFn = () => 'Código aqui';
const arrowFn2 = () => {
    
    return 'Código aqui';
}

//funções também são objetos
funcao.prop = 'Criando uma propriedade nova';

console.log(funcao());
console.log(funcao.prop);

//Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(funcao);
*/
this.name = 'Nome do contexto de criação';

const getNameArrowFn = () => this.name;

function getName(){
    return this.name;
}

const user = {
    name: 'Nome do objeto de execução',
    getNameArrowFn,
    getName
}

console.log(user.getNameArrowFn());
console.log(user.getName());