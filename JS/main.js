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
$("a").on("click", function(){
    if (this.hash !== ""){
        var hash = this.hash;
        $("html, body").animate({
            //Objeto con propiedad y valor
            scrollTop: $(hash).offset().top
        },800);
    }
    });
    //Pestañas (Tabs)
    $(".tabs li").click(function(){
        //Recoger en tabId el valor del atributo tab
        var tabId = $(this).attr("tab");
        //Elimina la clase current a pestañas y contenidos
        $(".tabs li").removeClass ("current");
        $(".tab-content").removeClass("current");
        //Añade la clase current a la pestaña pulsada
        $(this).addClass("current");
        //Añade la clase current  al contenido con el mismo is que el valor de la variable
        $("#"+tabId).addClass("current");
    });
    $(".btn-side").click(function(){
        $(".menu3").animate({width:"toggle"},500);
        $(".fa-arrow-circle-right").toggle();
        $(".fa-arrow-circle-left").toggle();
    })
    //Ventana modal
    $("#open").click(function(){
        $(".modal, .overlay").addClass("visible");
    });
    $("#close, .overlay").click(function(){
        $(".modal, .overlay").removeClass("visible");
    });
});