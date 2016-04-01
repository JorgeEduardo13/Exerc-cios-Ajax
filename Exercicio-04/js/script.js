$.ajax({
	method: "GET",
	dataType: "json",
	url: "data/dados.json",
	success: function(data) {
		var id;

		for(var i in data.noticias) {
			id = data.noticias[i].id;

			
			$('.conteudo-principal').append('<article class="noticia" id="noticia'+id+'"></article>');
			$('#noticia'+id).append('<div class="imagem-noticia"> <img src='+data.noticias[i].img+'></div>');
			$('#noticia' +id).append('<h1> '+data.noticias[i].titulo+'</h1>');
			$('#noticia' +id).append('<h6> '+data.noticias[i].data+'</h6>');
			$('#noticia' +id).append('<p>' +data.noticias[i].texto+'</p>');
		}


		for(var i in data.rodape) {
			id = data.rodape[i].id;

			$('.rodape-pagina').append('<div class="rod" id="rod'+id+'"></div>');
			$('#rod'+id).append('<p>'+data.rodape[i].direitos+'</p');
			$('#rod'+id).append('<p><a href='+data.rodape[i].link+'>'+data.rodape[i].link+'</a></p');
			$('#rod'+id).append('<address>'+data.rodape[i].cidade+'<br>'+data.rodape[i].estado+'<br>'+data.rodape[i].pais+'<br></address');
			$('#rod'+id).append('<p>'+data.rodape[i].telefone+'</p');

		}
		

	},
	error: function(data) {
		console.log(data);
	}
});