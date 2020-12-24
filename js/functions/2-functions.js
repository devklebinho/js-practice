this.name = 'Nome do contexto de criação';

const getNameArrowFn = () => this.name;

function getName(){
    return this.name;
}

const user = {
    name: 'Nome do objeto de execução',
    getNameArrowFn,//quando a chave e o valor do objeto são iguais basta por a assinatura de um
    getName
}

console.log(user.getNameArrowFn());
console.log(user.getName());