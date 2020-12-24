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
