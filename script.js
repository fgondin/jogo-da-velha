$(function(){

    let vez = 1;
    let vencedor = "";
    
    function casasIguais(a, b, c){
        let casaA = $("#casa"+a);
        let casaB = $("#casa"+b);
        let casaC = $("#casa"+c);
        //As varáveis a, b e c estão sendo atribuídas as casas e respectivamente atribuídas as varáveis "casaA", "casaB" e "casaC".
        let backgroundA = $("#casa"+a).css("background-image");
        let backgroundB = $("#casa"+b).css("background-image");
        let backgroundC = $("#casa"+c).css("background-image");
        //Sendo verificado qual é a imagem de fundo de cada um desses elementos, pára armazenar nas variáveis "background".
    
        if ((backgroundA == backgroundB) && (backgroundB == backgroundC) && (backgroundA != "none" && backgroundA != "")){
        //Verifica se todas as casas são iguais e se nenhuma delas tem algum valor vazio.
            if (backgroundA.indexOf("1.jpg") >= 0){
                
                vencedor = "1";
            }else{
                vencedor = "2";
            }
            //Verifica se com as imagens iguais, se o jogador 1 ou o jogador 2 ganhou.
            return true;
                
        }else{
            return false;
        };
        //Aqui ele retorna true se as casas tiverem a mesma imagem e false caso não tenham.
    };
    //Finalmente o código em geral verificar se as três casas possuem a mesma imagem de fundo, assim determinando qual jogador ganhou.
    
    function verificarFimDeJogo(){
        if(casasIguais(1, 2, 3) || casasIguais(4,5,6) || casasIguais(7, 8, 9) ||
        casasIguais (1, 4, 7) || casasIguais (2, 5, 8) || casasIguais (3, 6, 9) ||
        casasIguais (1, 5, 9) || casasIguais (3, 5, 7)){
        //Verifica se alguma dessas combinações pertence a um mesmo jogador.
            $("#resultado").html("<h1>O jogador " + vencedor + " venceu! </h1>");
            //Troca o valor do HTML, usando a variável "vencedor" de acordo com qual jogador tiver vencido.
            $(".casa").off("click");
            //Desabilita o evento de clique nos elementos do HTML, impedindo que o jogador continue interagindo após o final do jogo.
        };
    };
    //Finalmente a funação verifica se algum jogador venceu e caso sim, desabilita o evento de clique e mostra uma mensagem de vitória.
    
    $(".casa").click(function(){
        let background = $(this).css("background-image");
        //Armazena o valor da "background-image" na variável beackground.
        if(background == "none" || background == ""){
        //Verifica se o elemento não possui nenhum valor nulo.
            let fig = "url(" + vez.toString() + ".jpg)";
            //Pega o valor da variável "vez" e cria uma string na variável chamada "fig", assim concatenando com a jpg. A String a citada é o que vai ser atribuído ao elemento do HTML.
            $(this).css("background", fig);
            //Usando o fundo especificado pela "fig", a atribui ao HTML ao click, usando uma ajudinha do jQuery.
            vez = (vez == 1? 2:1);
            //Esse código que faz a alternancia entre o jogador 1 e 2 com a variável "vez".
            verificarFimDeJogo();
            //Puxa a função verificar fim de jogo após cada clique.
        };
    });
    //O código em si, verifica se inde o jogar clicou possui uma imagem de fundo e caso não tenha, é adicionada uma nova de acordo com a vez do jogador e verifica o fim, do jogo a cada clique.

});
