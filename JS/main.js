$(document).ready(function(){
    //Menú hamburguesa
    $(".burger").click(function(){
        $(".menu").animate({width:"toggle"},500);
    });
    $(".cerrar").click(function(){
        $(".menu").animate({width:"toggle"},500);
    });
    //Menú hamburgesa páginas normales
    $(".burger2").click(function(){
        $(".burger2").toggleClass("abierto");
        $(".menu2").animate({width:"toggle"},500);
        $(".menu2 a").toggleClass("aparicion");
    });
    //Cambios de estilos segun escroll
    $(window).on("scroll", function(){
        var posicion= $("#primera").offset();
        
        if($(window).scrollTop() > posicion.top - 50){
            $("header").removeClass("blanco")
        } else {
            $("header").addClass ("blanco");
        }
});
//Scroll suave
$("a").on("cilck", function(){
    if (this.has !== ""){
        var has = this.has;
        $("html, body").animate({
            //Objeto con propiedad y valor
            scrollTop: $(hash).offset().top
        },800);
    }
    });
});