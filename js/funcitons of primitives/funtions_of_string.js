const texto = 'Um texto qualquer';
console.log(typeof texto);

//Retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

//Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('-');
console.log('\nArray com as posições separadas pelo delimitador: ', splittedText);

//Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT');
console.log('\nSubistituição de valor: ', replacedText);

//Retorna a "fatia" de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nUltima letra de uma string: ', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);//param: começo e fim
console.log('Valor da sting da primeira letra menos a última: ', allWithoutLastChar);

const secontToEnd = 'Texto'.slice(1);
console.log('\nValor da sting da segunda letra até a última: ', secontToEnd);

//Retorna N Caracteres a partir de uma posição
const twoCarsBeforeFirsPos = 'Texto'.substr(0, 2);//param: começo e a quantidade de caracteres
console.log('\nAs duas primeiras letras são: ', twoCarsBeforeFirsPos);