let user = {
    name: 'Caruso'
};

//Alterando a propriedade de um objeto
user.name = 'Greg';
user['name'] = 'Greg';

const prop = 'name';
user[prop] = 'Greg';

//Criando uma propriedade
user.lastName = 'Nascimento'

//Deletando uma propriedade
delete user.name;