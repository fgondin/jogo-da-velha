$(function(){


    let vez = 1;
    let vencedor = "";
    
    function casasIguais(a, b, c){
        let casaA = $("#casa"+a);
        let casaB = $("#casa"+b);
        let casaC = $("#casa"+c);
        let backgroundA = $("#casa"+a).css("background-image");
        let backgroundB = $("#casa"+b).css("background-image");
        let backgroundC = $("#casa"+c).css("background-image");
    
        if ((backgroundA == backgroundB) && (backgroundB == backgroundC) && (backgroundA != "none" && backgroundA != "")){
            if (backgroundA.indexOf("1.jpg") >= 0){
                
                vencedor = "1";
            }else{
                vencedor = "2";
            }
            return true;
                
        }else{
            return false;
        };
    };
    
    function verificarFimDeJogo(){
        if(casasIguais(1, 2, 3) || casasIguais(4,5,6) || casasIguais(7, 8, 9) ||
        casasIguais (1, 4, 7) || casasIguais (2, 5, 8) || casasIguais (3, 6, 9) ||
        casasIguais (1, 5, 9) || casasIguais (3, 5, 7)){
            $("#resultado").html("<h1>O jogador " + vencedor + "venceu! </h1>");
            $(".casa").off("click");
        };
    };
    
    $(".casa").click(function(){
        let background = $(this).css("background-image");
        if(background == "none" || background == ""){
            let fig = "url(" + vez.toString() + ".jpg)";
            $(this).css("background", fig);
            vez = (vez == 1? 2:1);
            verificarFimDeJogo();
        };
    });

});
