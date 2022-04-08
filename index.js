const prompt = require('prompt-sync')();
//> npm i prompt-sync


const data = +prompt("Digite a data: ");



if (data <= 30/04 || data <= 30)  {
console.log ("Entrar no Cadastro");

} else {   
console.log("Cadastro não permitido por data inválida");
   
    } 
   

var i;
cont = 0;
for(i = 1; i <= 5; i++) {
const idade = +prompt("Sua idade["+i+"]: ");


if ( cont == 3 ) {
    console.log ("Cadastro não permitido execido o limite!");
    break;

}else if   ( idade >= 18 )  {
    console.log ("Usuário cadastrado com sucesso!");
    console.log ("Listando participantes!");
    cont++;
    } else {
    console.log("Cadastro não permitido, idade menor que 18 anos");

    }
    
    }



 
    console.log(cont);

