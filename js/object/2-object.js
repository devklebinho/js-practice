const user = {
    name: 'Kleber',
    lastName: 'Silva'
};

//Recupera as chaves do objeto
console.log('Propriedades do objeto user: ', Object.keys(user));

//Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user: ', Object.values(user));

//Recupera um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores: ', Object.defineProperties(user));

//Mergear propriedades de objetos
Object.assign(user, {fullName: 'Kleber Silva'});

console.log('\nAdiciona a propriedade fullName no objeto user: ', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos: ', Object.assign({}, user, {age: 26}));

//Previne todas as alterações em um objeto
const newObj = {foo: 'bar'};
Object.freeze(newObj);//Não muda mais congela o objeto

newObj.foo = 'changes';
delete newObj.foo;

//Permite apenas alteração de propriedades existentes em um objeto
const pessoa = {nome: 'Armando'};
console.log(pessoa);
Object.seal(pessoa);//Não permite deletar nem criar propriedades novas

pessoa.nome = 'Armando Português';
delete pessoa.nome;
pessoa.idade = 49;

console.log('\nVariável pessoa após as alterações: ', pessoa);