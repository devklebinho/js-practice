//uma função normal
function funcao(){
    return 'Código aqui';
}

const arrowFn = () => 'Código aqui';
const arrowFn2 = () => {
    //bloco de código
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

//Receber e retornar funções
const controlFnExec => fnParam => allowed =>{
    if(allowed){
        fnParam();
    }
}

const handleftFnExecution = controlFnExec(fn);

handleftFnExecution(true);//Executará a função fn
handleftFnExecution();// Não executará a função fn

//controlFnExec como função
function controlFnExec(fnParam){
    return function(allowed){
        if(allowed){
            fnParam();
        }
    }
}