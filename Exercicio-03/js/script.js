var game;
$("button").on('click', function() {
	document.getElementById('pagina').innerHTML = "";
	

	if ($(this).attr("id") == "1") {
		game = 0;
	}else if ($(this).attr("id") == "2") {
		game = 1;
	}else if ($(this).attr("id") == "3") {
		game = 2;
	}
	console.log(game);

$.ajax({
	method: "GET",
	dataType: "json",
	url: "data/dados.json",
	success: function(data) {
		
			$('#pagina').append('<h3>' + data.jogos[game].nome + '</h3>');		
			$('#pagina').append('<h5>data de lançamento:' + data.jogos[game].data+'</h5>');
			$('#pagina').append('<img id="imgjogo" src="'+data.jogos[game].img+'">');			
			$('#pagina').append('<h2>descrição:' + data.jogos[game].descrição+'</h2>');
		}
});

});