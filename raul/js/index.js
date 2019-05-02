
$("body").ready(function(){
	
	$("#curiosidades").click(function(){ 
			$("main").slideDown(2000)
			$("#cur").css("display", "flex"),
			$("table").css("display", "none"),
			$("main #contato").css("display", "none")
			
		}  );
	$("footer").click(function(){ 
			$("main").slideUp(2000)
			
			
			
	});

	$("#galeria").click(function(){
		$("main").slideDown(400),
		$("main table").css("display", "flex"),
		$("main #cur").css("display", "none")
		$("main #contato").css("display", "none")
	});

		$("#contatos").click(function(){
		$("main").css("height","80px"),
		$("main").slideDown(2000),
		$("main table").css("display", "none"),
		$("main #cur").css("display", "none"),
		$("main #contatos").css("display", "flex")
	});
		$("#cliente").click(function(){

			$("#client").slideToggle()
		
		
	});

//criaçao do menu a partir dos dados
//menu é o vetor criado em menu.js
	/*tamanho = menu.length;

	for(i=0; i<tamanho; i++){
		alert(menu[i].descricao);
	}
	*/
});


