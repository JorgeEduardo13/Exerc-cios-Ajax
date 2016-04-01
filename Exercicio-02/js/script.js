$.ajax({
	method: "GET",
	dataType: "json",
	url: "data/dados.json",
	success: function(data) {
		var id;

		for(var i in data.imagens) {
			id = data.imagens[i].id;

			$('#content').append('<img src='+id+'>');
			
		}
	}
});