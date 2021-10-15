    //void não tem retorno e não ten parametros
    function Imprime (){
        console.log("Imprimir algo");
    }   

    Imprime();

    function Soma (valorA, valorB){
        var resultado = valorA + valorB;
        return resultado;
    }

    console.log(Soma(10, 20));

    function login (email, senha){
        //const nunca é altera as informação que foram passadas para ele
        const emailBanco = "teste@teste.com";
        const senhaBanco = "12345678";

        //2 iguais (==) é somente a comparaçao do valor
        //3 iguais (===) é a comparação do valor e tipo
        if(emailBanco === email && senhaBanco === senha){
            console.log("Autenticação realizada!");
        }else{
            console.log("Autenticação falhou!");
        }
    }

    login("teste@teste.com", "12345678"); //certo
    login("teste@teste.com", 12345678); //errado
    login("nada@nada.com", "48171519"); //errado
