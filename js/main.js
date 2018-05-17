$(document).on('ready',function(){
	init();
	// body...
});

function init()
{
	
	$('#navigation').localScroll();
	  //clic en un enlace de la lista
    $('ul li a').on('click',function(e){
        //prevenir en comportamiento predeterminado del enlace
        e.preventDefault();
        //obtenemos el id del elemento en el que debemos posicionarnos
        var strAncla=$(this).attr('href');
         
        //utilizamos body y html, ya que dependiendo del navegador uno u otro no funciona
        $('body,html').stop(true,true).animate({
            //realizamos la animacion hacia el ancla
            scrollTop: $(strAncla).offset().top
        },800);
    });
}


$(document).ready(main);
 
var contador = 1;
 
function main(){
	$('.menu_bar').click(function(){
		//$('nav').toggle(); 
 
		if(contador == 1){
			$('nav').animate({
				bottom: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				bottom: '-150%'
			});
		}
 
	});
 
};

var indicador =0;
$(document).on('ready',function(){
      

     $('.left').on('click',function(e){
     	e.preventDefault();
     	moveSlider('left');
     });
     $('.right').on('click',function(e){
     	e.preventDefault();
     	moveSlider('right');
     });
     
     defineSizes();
     sli();
    
});
$(window).on('resize',defineSizes);
function defineSizes()
{
	$('.form_container .slide').each(function(i,el){
		$(el).css({
           'background-image': "url("+$(el).data("background")+")",
           'height': ($('.form_container').width() * 0.5 )+'px',
           'width': ($('.form_container').width())+'px'
		});
	});

	 $('.form_container .slideContainer').css({
 	'margin-left': -(indicador * $('.form_container').width())+'px'
 });
}

function moveSlider(direccion)
{var limite = $('.form_container .slide').length;
indicador =(direccion == 'right')? indicador + 1 : indicador - 1;
indicador =(indicador >= limite)? 0: indicador;
indicador =(indicador < 0)? limite - 1 : indicador;

 $('.form_container .slideContainer').animate({
 	'margin-left': -(indicador * $('.form_container').width())+'px'
 });

}